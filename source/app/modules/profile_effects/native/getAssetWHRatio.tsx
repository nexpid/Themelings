// app/modules/profile_effects/native/getAssetWHRatio.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
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
 0:
            var1 = arg1;
            var2 = arg2;
            var3 = null;
            if(!(var3 != var1)) { _fun0001_ip = 18; continue _fun0001 }
 12:
            var3 = 0;
            if(!(var1 <= var3)) { _fun0001_ip = 21; continue _fun0001 }
 18:
            var1 = var2;
 21:
            return var1;
        }
    };
    var _closure1_slot0 = var1;
    var4 = native7;
    var1 = 0;
    var5 = var4[var1];
    var4 = native2;
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