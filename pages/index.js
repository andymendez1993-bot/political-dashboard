import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);

export default function Dashboard() {
  const [correlations, setCorrelations] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [bills, setBills] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [activeTab, setActiveTab] = useState('correlations');

  useEffect(() => {
    fetchAll();
    const interval = setInterval(fetchAll, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  async function fetchAll() {
    const [c, co, ct, b, p] = await Promise.all([
      supabase.from('correlations').select('*').order('score', { ascending: false }).limit(20),
      supabase.from('companies').select('*').order('created_at', { ascending: false }).limit(50),
      supabase.from('contracts').select('*').order('created_at', { ascending: false }).limit(20),
      supabase.from('bills').select('*').order('created_at', { ascending: false }).limit(20),
      supabase.from('stock_mentions').select('*').order('mentioned_at', { ascending: false }).limit(50),
    ]);
    setCorrelations(c.data || []);
    setCompanies(co.data || []);
    setContracts(ct.data || []);
    setBills(b.data || []);
    setPortfolio(p.data || []);
    setLastUpdated(new Date().toLocaleTimeString());
    setLoading(false);
  }

  const levelColor = (level) => {
    if (level === 'high') return '#E24B4A';
    if (level === 'medium') return '#EF9F27';
    return '#1D9E75';
  };

  const totalInvested = portfolio.reduce((sum, s) => sum + (s.investment_amount || 0), 0);
  const totalValue = portfolio.reduce((sum, s) => sum + (s.current_value || 0), 0);
  const totalGainLoss = totalValue - totalInvested;
  const totalGainLossPct = totalInvested > 0 ? (totalGainLoss / totalInvested) * 100 : 0;

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 900, margin: '0 auto', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 24, fontWeight: 600 }}>Political Intelligence Monitor</h1>
          <p style={{ margin: '4px 0 0', color: '#666', fontSize: 13 }}>Truth Social · SAM.gov · Congress.gov · AI Analysis</p>
        </div>
        <div style={{ fontSize: 12, color: '#999' }}>
          {lastUpdated ? `Updated ${lastUpdated}` : 'Loading...'}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginBottom: 24 }}>
        {[
          { label: 'Correlations', value: correlations.length },
          { label: 'Companies', value: companies.length },
          { label: 'Contracts', value: contracts.length },
          { label: 'Bills', value: bills.length },
          { label: 'Stocks tracked', value: portfolio.length },
        ].map(m => (
          <div key={m.label} style={{ background: '#f5f5f5', borderRadius: 8, padding: '12px 16px' }}>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>{m.label}</div>
            <div style={{ fontSize: 22, fontWeight: 600 }}>{loading ? '—' : m.value}</div>
          </div>
        ))}
      </div>

      {!loading && portfolio.length > 0 && (
        <div style={{ background: totalGainLoss >= 0 ? '#f0faf4' : '#fff5f5', border: `1px solid ${totalGainLoss >= 0 ? '#1D9E75' : '#E24B4A'}`, borderRadius: 10, padding: '16px 20px', marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 13, color: '#666', marginBottom: 2 }}>Simulated portfolio — $1,000 per mention</div>
            <div style={{ fontSize: 22, fontWeight: 600 }}>Total invested: ${totalInvested.toLocaleString()}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 13, color: '#666', marginBottom: 2 }}>Current value</div>
            <div style={{ fontSize: 22, fontWeight: 600 }}>${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            <div style={{ fontSize: 14, color: totalGainLoss >= 0 ? '#1D9E75' : '#E24B4A', fontWeight: 500 }}>
              {totalGainLoss >= 0 ? '+' : ''}${totalGainLoss.toFixed(2)} ({totalGainLossPct.toFixed(2)}%)
            </div>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', gap: 4, marginBottom: 16, flexWrap: 'wrap' }}>
        {['correlations', 'portfolio', 'companies', 'contracts', 'bills'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{
            padding: '8px 16px', border: '1px solid #ddd', borderRadius: 6,
            background: activeTab === tab ? '#000' : '#fff',
            color: activeTab === tab ? '#fff' : '#333',
            cursor: 'pointer', fontSize: 13, textTransform: 'capitalize'
          }}>{tab}</button>
        ))}
      </div>

      {loading && <div style={{ textAlign: 'center', padding: 40, color: '#999' }}>Loading data...</div>}

      {!loading && activeTab === 'correlations' && (
        <div>
          {correlations.map((c, i) => (
            <div key={i} style={{ border: '1px solid #eee', borderRadius: 8, padding: 16, marginBottom: 12, borderLeft: `4px solid ${levelColor(c.level)}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: levelColor(c.level) }}>Score: {c.score}/100</span>
                <span style={{ fontSize: 12, color: '#999', textTransform: 'capitalize' }}>{c.level} signal</span>
              </div>
              <p style={{ margin: '0 0 8px', fontSize: 14, lineHeight: 1.5 }}>{c.summary}</p>
              <div style={{ fontSize: 11, color: '#999' }}>{new Date(c.created_at).toLocaleString()}</div>
            </div>
          ))}
        </div>
      )}

      {!loading && activeTab === 'portfolio' && (
        <div>
          <div style={{ fontSize: 13, color: '#666', marginBottom: 12 }}>
            Each stock was flagged by AI when mentioned alongside a political post. Simulating $1,000 invested at time of mention.
          </div>
          {portfolio.map((s, i) => {
            const gl = s.gain_loss || 0;
            const glPct = s.gain_loss_pct || 0;
            return (
              <div key={i} style={{ border: '1px solid #eee', borderRadius: 8, padding: 16, marginBottom: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontWeight: 600, fontSize: 15 }}>{s.ticker}</span>
                    <span style={{ fontSize: 13, color: '#666' }}>{s.company_name}</span>
                  </div>
                  <div style={{ fontSize: 12, color: '#999' }}>
                    Mentioned: {new Date(s.mentioned_at).toLocaleString()}
                  </div>
                  <div style={{ fontSize: 12, color: '#999' }}>
                    Entry: ${Number(s.price_at_mention).toFixed(2)} · {Number(s.shares_bought).toFixed(4)} shares
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 14, color: '#333', marginBottom: 2 }}>
                    Now: ${Number(s.current_price).toFixed(2)}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: gl >= 0 ? '#1D9E75' : '#E24B4A' }}>
                    {gl >= 0 ? '+' : ''}${gl.toFixed(2)}
                  </div>
                  <div style={{ fontSize: 12, color: gl >= 0 ? '#1D9E75' : '#E24B4A' }}>
                    {glPct >= 0 ? '+' : ''}{glPct.toFixed(2)}%
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {!loading && activeTab === 'companies' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
          {companies.map((c, i) => (
            <div key={i} style={{ border: '1px solid #eee', borderRadius: 8, padding: 14 }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{c.name}</div>
              {c.ticker && <div style={{ fontSize: 12, color: '#1D9E75', marginBottom: 4 }}>{c.ticker}</div>}
              <div style={{ fontSize: 12, color: '#666' }}>{c.industry}</div>
            </div>
          ))}
        </div>
      )}

      {!loading && activeTab === 'contracts' && (
        <div>
          {contracts.map((c, i) => (
            <div key={i} style={{ border: '1px solid #eee', borderRadius: 8, padding: 16, marginBottom: 12 }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{c.title}</div>
              <div style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>{c.agency}</div>
              <div style={{ display: 'flex', gap: 12, fontSize: 12, color: '#999' }}>
                <span>Value: {c.value}</span>
                {c.deadline && <span>Due: {c.deadline}</span>}
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && activeTab === 'bills' && (
        <div>
          {bills.map((b, i) => (
            <div key={i} style={{ border: '1px solid #eee', borderRadius: 8, padding: 16, marginBottom: 12 }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 12, background: '#E6F1FB', color: '#0C447C', padding: '2px 8px', borderRadius: 99 }}>{b.number}</span>
              </div>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{b.title}</div>
              <div style={{ fontSize: 13, color: '#666' }}>{b.status}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}