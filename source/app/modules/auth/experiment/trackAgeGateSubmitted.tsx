// app/modules/auth/experiment/trackAgeGateSubmitted.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/experiment/trackAgeGateSubmitted.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function trackAgeGateSubmitted(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var8 = 1;
            var3 = var10[var8];
            var1 = undefined;
            var5 = var9.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot2;
            var3 = var2.AGE_GATE_SUBMITTED;
            var2 = {};
            var6 = 2;
            var6 = var10[var6];
            var6 = var9.bind(var1)(var6);
            var10 = var6.bind(var1)();
            var9 = var10.diff;
            var6 = 'years';
            var9 = var9.bind(var10)(var7, var6);
            var6 = 18;
            var9 = var9 < var6;
            var6 = null;
            if(!var9) { _fun0001_ip = 105; continue _fun0001 }
 89:
            var10 = var7.format;
            var9 = 'YYYY-MM-DD';
            var6 = var10.bind(var7)(var9);
 105:
            var2['dob'] = var6;
            var6 = var7.date;
            var6 = var6.bind(var7)();
            var2['dob_day'] = var6;
            var6 = var7.month;
            var6 = var6.bind(var7)();
            var6 = var6 + var8;
            var2['dob_month'] = var6;
            var6 = var7.year;
            var6 = var6.bind(var7)();
            var2['dob_year'] = var6;
            var6 = {};
            var7 = arg2;
            var6['section'] = var7;
            var2['source'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();