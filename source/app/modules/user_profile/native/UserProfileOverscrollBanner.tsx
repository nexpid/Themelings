// app/modules/user_profile/native/UserProfileOverscrollBanner.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StyleSheet;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var9.bind(var1)(var4);
    var7 = var8.createAnimatedComponent;
    var4 = 4;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileOverscrollBanner.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileOverscrollBanner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = var3.bannerAnimatedStyle;
            var9 = var3.bannerImageAnimatedStyle;
            var15 = var3.blurAnimatedProps;
            var11 = var3.showBlur;
            var8 = var3.privateBanner;
            var6 = var3.buttons;
            var2 = {'bannerAnimatedStyle': 0, 'bannerImageAnimatedStyle': 0, 'blurAnimatedProps': 0, 'showBlur': 0, 'privateBanner': 0, 'buttons': 0};
            var18 = null;
            var19 = var2;
            var1 = silentSetPrototypeOf(var19, var18);
            var19 = {};
            var18 = var3;
            var17 = var2;
            var18 = copyDataProperties(var19, var18, var17);
            var4 = _closure1_slot5;
            var10 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 3;
            var1 = var13[var7];
            var3 = undefined;
            var1 = var10.bind(var3)(var1);
            var2 = var1.View;
            var1 = {};
            var1['style'] = var5;
            var5 = new Array(3);
            var5[0] = var8;
            var7 = var13[var7];
            var7 = var10.bind(var3)(var7);
            var8 = var7.View;
            var7 = {};
            var7['style'] = var9;
            var12 = _closure1_slot4;
            var9 = 5;
            var9 = var13[var9];
            var10 = var10.bind(var3)(var9);
            var9 = {};
            var19 = var9;
            var16 = copyDataProperties(var19, var18);
            var10 = var12.bind(var3)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot0;
            var10 = 6;
            var10 = var13[var10];
            var12 = var12.bind(var3)(var10);
            var10 = var12.isIOS;
            var10 = var10.bind(var12)();
            if(!var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = var11;
case 2:
            if(!var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = _closure1_slot4;
            var12 = _closure1_slot6;
            var11 = {};
            var11['animatedProps'] = var15;
            var14 = _closure1_slot3;
            var14 = var14.absoluteFillObject;
            var11['style'] = var14;
            var10 = var13.bind(var3)(var12, var11);
case 4:
            var9[1] = var10;
            var7['children'] = var9;
            var7 = var4.bind(var3)(var8, var7);
            var5[1] = var7;
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();