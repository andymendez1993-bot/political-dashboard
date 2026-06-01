module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[project]/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$29$__ = __turbopack_context__.i("[externals]/@supabase/supabase-js [external] (@supabase/supabase-js, esm_import, [project]/node_modules/@supabase/supabase-js)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const supabase = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$29$__["createClient"])(("TURBOPACK compile-time value", "https://qzrdmxjdecvhnbmfholb.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_UaqzFS1LkEuGCKBnCkHyjw_TuAiRzjJ"));
function Dashboard() {
    const [correlations, setCorrelations] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [companies, setCompanies] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [contracts, setContracts] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [bills, setBills] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [lastUpdated, setLastUpdated] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('correlations');
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        fetchAll();
        const interval = setInterval(fetchAll, 5 * 60 * 1000);
        return ()=>clearInterval(interval);
    }, []);
    async function fetchAll() {
        const [c, co, ct, b] = await Promise.all([
            supabase.from('correlations').select('*').order('score', {
                ascending: false
            }).limit(20),
            supabase.from('companies').select('*').order('created_at', {
                ascending: false
            }).limit(50),
            supabase.from('contracts').select('*').order('created_at', {
                ascending: false
            }).limit(20),
            supabase.from('bills').select('*').order('created_at', {
                ascending: false
            }).limit(20)
        ]);
        setCorrelations(c.data || []);
        setCompanies(co.data || []);
        setContracts(ct.data || []);
        setBills(b.data || []);
        setLastUpdated(new Date().toLocaleTimeString());
        setLoading(false);
    }
    const levelColor = (level)=>{
        if (level === 'high') return '#E24B4A';
        if (level === 'medium') return '#EF9F27';
        return '#1D9E75';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: 'system-ui, sans-serif',
            maxWidth: 900,
            margin: '0 auto',
            padding: '20px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 24
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                style: {
                                    margin: 0,
                                    fontSize: 24,
                                    fontWeight: 600
                                },
                                children: "Political Intelligence Monitor"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: '4px 0 0',
                                    color: '#666',
                                    fontSize: 13
                                },
                                children: "Truth Social · SAM.gov · Congress.gov · AI Analysis"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 12,
                            color: '#999'
                        },
                        children: lastUpdated ? `Updated ${lastUpdated}` : 'Loading...'
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: 12,
                    marginBottom: 24
                },
                children: [
                    {
                        label: 'Correlations',
                        value: correlations.length
                    },
                    {
                        label: 'Companies',
                        value: companies.length
                    },
                    {
                        label: 'Contracts',
                        value: contracts.length
                    },
                    {
                        label: 'Bills',
                        value: bills.length
                    }
                ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#f5f5f5',
                            borderRadius: 8,
                            padding: '12px 16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 12,
                                    color: '#666',
                                    marginBottom: 4
                                },
                                children: m.label
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 24,
                                    fontWeight: 600
                                },
                                children: loading ? '—' : m.value
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        ]
                    }, m.label, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 4,
                    marginBottom: 16
                },
                children: [
                    'correlations',
                    'companies',
                    'contracts',
                    'bills'
                ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab(tab),
                        style: {
                            padding: '8px 16px',
                            border: '1px solid #ddd',
                            borderRadius: 6,
                            background: activeTab === tab ? '#000' : '#fff',
                            color: activeTab === tab ? '#fff' : '#333',
                            cursor: 'pointer',
                            fontSize: 13,
                            textTransform: 'capitalize'
                        },
                        children: tab
                    }, tab, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: 40,
                    color: '#999'
                },
                children: "Loading data..."
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 82,
                columnNumber: 19
            }, this),
            !loading && activeTab === 'correlations' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: correlations.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            border: '1px solid #eee',
                            borderRadius: 8,
                            padding: 16,
                            marginBottom: 12,
                            borderLeft: `4px solid ${levelColor(c.level)}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 13,
                                            fontWeight: 600,
                                            color: levelColor(c.level)
                                        },
                                        children: [
                                            "Score: ",
                                            c.score,
                                            "/100"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 12,
                                            color: '#999',
                                            textTransform: 'capitalize'
                                        },
                                        children: [
                                            c.level,
                                            " signal"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: '0 0 8px',
                                    fontSize: 14,
                                    lineHeight: 1.5
                                },
                                children: c.summary
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 92,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 11,
                                    color: '#999'
                                },
                                children: new Date(c.created_at).toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 87,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 85,
                columnNumber: 9
            }, this),
            !loading && activeTab === 'companies' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: 10
                },
                children: companies.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            border: '1px solid #eee',
                            borderRadius: 8,
                            padding: 14
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 600,
                                    fontSize: 14,
                                    marginBottom: 4
                                },
                                children: c.name
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this),
                            c.ticker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 12,
                                    color: '#1D9E75',
                                    marginBottom: 4
                                },
                                children: c.ticker
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 106,
                                columnNumber: 28
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 12,
                                    color: '#666'
                                },
                                children: c.industry
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 104,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 102,
                columnNumber: 9
            }, this),
            !loading && activeTab === 'contracts' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: contracts.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            border: '1px solid #eee',
                            borderRadius: 8,
                            padding: 16,
                            marginBottom: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 600,
                                    fontSize: 14,
                                    marginBottom: 4
                                },
                                children: c.title
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 13,
                                    color: '#666',
                                    marginBottom: 4
                                },
                                children: c.agency
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 12,
                                    fontSize: 12,
                                    color: '#999'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Value: ",
                                            c.value
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 120,
                                        columnNumber: 17
                                    }, this),
                                    c.deadline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Due: ",
                                            c.deadline
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 121,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 119,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 116,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 114,
                columnNumber: 9
            }, this),
            !loading && activeTab === 'bills' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: bills.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            border: '1px solid #eee',
                            borderRadius: 8,
                            padding: 16,
                            marginBottom: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 8,
                                    marginBottom: 6
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 12,
                                        background: '#E6F1FB',
                                        color: '#0C447C',
                                        padding: '2px 8px',
                                        borderRadius: 99
                                    },
                                    children: b.number
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 600,
                                    fontSize: 14,
                                    marginBottom: 4
                                },
                                children: b.title
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 135,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 13,
                                    color: '#666'
                                },
                                children: b.status
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 131,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 129,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.js",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__03mi3kv._.js.map