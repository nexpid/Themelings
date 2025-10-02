// app/modules/pomelo/native/useUserProfileBannerBackgroundColor.tsx
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
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/pomelo/native/useUserProfileBannerBackgroundColor.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useUserProfileBannerBackgroundColor(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var4 = arg2;
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 0;
            var3 = var9[var1];
            var2 = undefined;
            var5 = var6.bind(var2)(var3);
            var3 = var5.memoizedImageSource;
            var7 = var3.bind(var5)(var8);
            var3 = 1;
            var3 = var9[var3];
            var5 = var6.bind(var2)(var3);
            var3 = var5.rgb2int;
            var1 = var9[var1];
            var6 = var6.bind(var2)(var1);
            var1 = var6.useDominantColorFromImage;
            var1 = var1.bind(var6)(var8, var7);
            var1 = var3.bind(var5)(var1);
            var3 = null;
            var5 = var3 == var4;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var4.primaryColor;
case 2:
            if(!(var3 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();