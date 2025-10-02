// app/modules/guild_settings/urlPartToSettingsEnum.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/guild_settings/urlPartToSettingsEnum.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function urlPartToSettingsEnum(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var8 = arg2;
            var4 = null;
            var5 = var4 == var8;
            var3 = undefined;
            var1 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var8.replace;
            var6 = /-/g;
            var5 = '_';
            var6 = var7.bind(var8)(var6, var5);
            var5 = var4 == var6;
            var1 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var5 = var6.toUpperCase;
            var1 = var5.bind(var6)();
case 2:
            if(!(var4 != var1)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = var1 in var2;
            if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 5:
            return var3;
case 7:
            var1 = var2[var1];
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();