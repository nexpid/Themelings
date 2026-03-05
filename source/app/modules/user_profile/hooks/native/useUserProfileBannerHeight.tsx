// app/modules/user_profile/hooks/native/useUserProfileBannerHeight.tsx
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
    var4 = var4.BANNER_ASPECT_RATIO;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/native/useUserProfileBannerHeight.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useUserProfileBannerHeight(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var2 = var2.bind(var3)();
            var5 = var2.width;
            var2 = null;
            var4 = var5;
            if(!(var2 != var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = global;
            var3 = var2.Math;
            var2 = var3.min;
            var4 = var2.bind(var3)(var5, var6);
case 2:
            var2 = global;
            var3 = var2.Math;
            var2 = var3.round;
            var1 = _closure1_slot2;
            var1 = var4 / var1;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();