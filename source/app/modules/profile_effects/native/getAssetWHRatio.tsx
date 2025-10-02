// app/modules/profile_effects/native/getAssetWHRatio.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = function getPositiveValue(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = arg2;
            var3 = null;
            if(!(var3 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 0;
            if(!(var1 <= var3)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot0 = var1;
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_effects/native/getAssetWHRatio.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 0.5113636363636364;
    var3['DEFAULT_PROFILE_EFFECT_WH_RATIO'] = var4;
    var2 = function(arg1) {
        var1 = arg1;
        var5 = _closure1_slot0;
        var3 = var1.width;
        var4 = undefined;
        var2 = 450;
        var2 = var5.bind(var4)(var3, var2);
        var3 = var1.height;
        var1 = 880;
        var1 = var5.bind(var4)(var3, var1);
        var1 = var2 / var1;
        return var1;
    };
    var3['getAssetWHRatio'] = var2;
    return var1;
})();