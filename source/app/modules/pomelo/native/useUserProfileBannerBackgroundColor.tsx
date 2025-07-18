// app/modules/pomelo/native/useUserProfileBannerBackgroundColor.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
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
 0:
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
            if(var5) { _fun0001_ip = 100; continue _fun0001 }
 94:
            var2 = var4.primaryColor;
 100:
            if(!(var3 != var2)) { _fun0001_ip = 107; continue _fun0001 }
 104:
            var1 = var2;
 107:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();