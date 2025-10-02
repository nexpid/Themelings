// app/modules/guild_role_subscriptions/formatDurationFromDays.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/formatDurationFromDays.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function formatDurationFromDays(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var9 = 0;
            if(!(var7 > var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = 7;
            var1 = var7 % var6;
            if(!(var1 !== var9)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var3 = var1[var9];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var1[var9];
            var1 = var5.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.k2UNz8;
            var1 = {};
            var1['days'] = var7;
            var1 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 5; continue _fun0001;
case 4:
            var8 = _closure1_slot0;
            var2 = _closure1_slot1;
            var4 = var2[var9];
            var3 = undefined;
            var4 = var8.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var2[var9];
            var2 = var8.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.EmoBDw;
            var2 = {};
            var6 = var7 / var6;
            var2['weeks'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 5:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();