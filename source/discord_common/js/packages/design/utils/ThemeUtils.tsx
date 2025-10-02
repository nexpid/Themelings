// discord_common/js/packages/design/utils/ThemeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/design/utils/ThemeUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isThemeLight(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var2 = var1.LIGHT;
        var1 = arg1;
        var1 = var1 === var2;
        return var1;
    };
    var3['isThemeLight'] = var4;
    var2 = function isThemeDark(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var5 = 0;
            var3 = var3[var5];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var3 = var3.DARK;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.MIDNIGHT;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.DARKER;
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var1 = false;
            return var1;
case 2:
            var1 = true;
            return var1;
        }
    };
    var3['isThemeDark'] = var2;
    return var1;
})();