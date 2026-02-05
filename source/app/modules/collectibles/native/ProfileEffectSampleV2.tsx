// app/modules/collectibles/native/ProfileEffectSampleV2.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot3 = var7;
    var4 = var4.Image;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = '100%';
    var9['width'] = var10;
    var4['profileSkeletonBackground'] = var9;
    var9 = {'width': '100%', 'height': '100%', 'resizeMode': 'cover'};
    var10 = 3;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9['borderRadius'] = var12;
    var4['profileSkeletonBackgroundBundle'] = var9;
    var9 = {'position': 'absolute', 'width': '100%', 'height': '100%', 'overflow': 'hidden'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9['borderRadius'] = var10;
    var4['profileEffectContainer'] = var9;
    var9 = {'position': 'absolute', 'bottom': 0, 'height': '50%', 'width': '100%', 'zIndex': 1};
    var4['gradientOverlay'] = var9;
    var9 = {};
    var10 = 0.5;
    var9['opacity'] = var10;
    var4['purchasedProfileEffect'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ProfileEffectSampleV2.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.item;
            var8 = var1.isPurchased;
            var11 = var1.isDarkTheme;
            var13 = var1.bundle;
            var7 = var1.showGradient;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = true;
case 2:
            var1 = _closure1_slot7;
            var14 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 4;
            var1 = var10[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useToken;
            var5 = _closure1_slot1;
            var1 = 3;
            var1 = var10[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.colors;
            var1 = var1.BACKGROUND_BASE_LOW;
            var19 = var2.bind(var3)(var1);
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var10 = var14.profileEffectContainer;
            var5 = new Array(2);
            var5[0] = var10;
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var14.purchasedProfileEffect;
case 4:
            var5[1] = var8;
            var1['style'] = var5;
            var10 = _closure1_slot5;
            var8 = _closure1_slot4;
            var5 = {};
            if(var13) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var15 = var14.profileSkeletonBackground;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var15 = var14.profileSkeletonBackgroundBundle;
case 8:
            var12 = new Array(1);
            var12[0] = var15;
            var5['style'] = var12;
            var12 = _closure1_slot1;
            var16 = _closure1_slot2;
            if(var11) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var11 = 6;
            var11 = var16[var11];
            _fun0001_ip = 11; continue _fun0001;
case 9:
            var15 = 5;
            var11 = var16[var15];
case 11:
            var11 = var12.bind(var4)(var11);
            var5['source'] = var11;
            var8 = var10.bind(var4)(var8, var5);
            var5 = new Array(3);
            var5[0] = var8;
            if(!var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var11 = _closure1_slot5;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 7;
            var8 = var12[var8];
            var10 = var10.bind(var4)(var8);
            var8 = {};
            var14 = var14.gradientOverlay;
            var8['style'] = var14;
            var16 = _closure1_slot0;
            var18 = 8;
            var14 = var12[var18];
            var15 = var16.bind(var4)(var14);
            var14 = var15.hexToRgbaString;
            var12 = var12[var18];
            var17 = var16.bind(var4)(var12);
            var16 = var17.hexWithOpacity;
            var12 = 0;
            var12 = var16.bind(var17)(var19, var12);
            var14 = var14.bind(var15)(var12);
            var12 = new Array(3);
            var12[0] = var14;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var16 = var14[var18];
            var17 = var15.bind(var4)(var16);
            var16 = var17.hexToRgbaString;
            var14 = var14[var18];
            var21 = var15.bind(var4)(var14);
            var20 = var21.hexWithOpacity;
            if(var13) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var14 = 0.35;
            var14 = var20.bind(var21)(var19, var14);
            var14 = var16.bind(var17)(var14);
            _fun0001_ip = 16; continue _fun0001;
case 14:
            var15 = 0.75;
            var15 = var20.bind(var21)(var19, var15);
            var14 = var16.bind(var17)(var15);
case 16:
            var12[1] = var14;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var15 = var14[var18];
            var16 = var17.bind(var4)(var15);
            var15 = var16.hexToRgbaString;
            var14 = var14[var18];
            var18 = var17.bind(var4)(var14);
            var17 = var18.hexWithOpacity;
            if(var13) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var13 = 0.7;
            var13 = var17.bind(var18)(var19, var13);
            var13 = var15.bind(var16)(var13);
            _fun0001_ip = 19; continue _fun0001;
case 17:
            var14 = 1;
            var14 = var17.bind(var18)(var19, var14);
            var13 = var15.bind(var16)(var14);
case 19:
            var12[2] = var13;
            var8['colors'] = var12;
            var12 = [0, 0.3, 0.6, 0.85, 1];
            var8['locations'] = var12;
            var12 = {'x': 0, 'y': 0};
            var8['start'] = var12;
            var12 = {'x': 0, 'y': 1};
            var8['end'] = var12;
            var7 = var11.bind(var4)(var10, var8);
case 12:
            var5[1] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 9;
            var6 = var10[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {'skuId': null, 'bannerAdjustment': 0, 'useThumbnail': true};
            var9 = var9.skuId;
            var6['skuId'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();