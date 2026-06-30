// app/modules/collectibles/native/BundleSampleV2.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function BundleStaticPreviewContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = var3.previewAssets;
            var1 = var3.disableBackground;
            var11 = var3.mutedBackground;
            var9 = var2.bgStatic;
            var15 = var2.fgStatic;
            var5 = null;
            var2 = var5 != var9;
            var10 = null;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 4;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {'source': null, 'style': null, 'resizeMode': 'cover', 'accessibilityElementsHidden': true, 'importantForAccessibility': 'no-hide-descendants'};
            var8 = {};
            var8['uri'] = var9;
            var2['source'] = var8;
            var7 = _closure1_slot7;
            var7 = var7.bgImage;
            var2['style'] = var7;
            var10 = var6.bind(var4)(var3, var2);
case 2:
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = _closure1_slot7;
            var6 = var6.container;
            var2['style'] = var6;
            var6 = !var1;
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var5 != var10;
case 4:
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = _closure1_slot5;
            var8 = _closure1_slot3;
            var7 = {};
            var1 = _closure1_slot7;
            var1 = var1.bgBleedClip;
            var7['style'] = var1;
            var16 = 'none';
            var7['pointerEvents'] = var16;
            var1 = var10;
            if(!var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var14 = _closure1_slot5;
            var12 = _closure1_slot3;
            var11 = {};
            var17 = _closure1_slot7;
            var17 = var17.bgMutedWrap;
            var11['style'] = var17;
            var11['pointerEvents'] = var16;
            var11['children'] = var10;
            var10 = undefined;
            var1 = var14.bind(var10)(var12, var11);
case 8:
            var7['children'] = var1;
            var1 = undefined;
            var6 = var9.bind(var1)(var8, var7);
case 6:
            var1 = new Array(2);
            var1[0] = var6;
            var5 = var5 != var15;
            if(!var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = _closure1_slot5;
            var8 = _closure1_slot3;
            var7 = {};
            var6 = _closure1_slot7;
            var6 = var6.fgClip;
            var7['style'] = var6;
            var6 = 'none';
            var7['pointerEvents'] = var6;
            var12 = _closure1_slot5;
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 4;
            var10 = var10[var6];
            var6 = undefined;
            var11 = var11.bind(var6)(var10);
            var10 = {'source': null, 'style': null, 'resizeMode': 'cover', 'accessibilityElementsHidden': true, 'importantForAccessibility': 'no-hide-descendants'};
            var14 = {};
            var14['uri'] = var15;
            var10['source'] = var14;
            var13 = _closure1_slot7;
            var13 = var13.fgImage;
            var10['style'] = var13;
            var10 = var12.bind(var6)(var11, var10);
            var7['children'] = var10;
            var5 = var9.bind(var6)(var8, var7);
case 10:
            var1[1] = var5;
            var2['children'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function BundleSampleV2Composed(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var20 = var1.deco;
            var18 = var1.pfx;
            var3 = var1.nameplate;
            var2 = var1.size;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = 'small';
case 12:
            var1 = _closure1_slot8;
            var10 = var1.bind(var4)(var2);
            var6 = null;
            var1 = var6 != var3;
            var16 = var2;
            var13 = undefined;
            if(!var1) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var8 = var2.bind(var4)(var1);
            var7 = var3.type;
            var2 = _closure1_slot0;
            var1 = 8;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.NAMEPLATE;
            var7 = var7 === var1;
            var1 = 'Item must be Nameplate';
            var1 = var8.bind(var4)(var7, var1);
            var1 = 9;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getNameplateData;
            var13 = var1.bind(var2)(var3);
case 14:
            var1 = _closure1_slot4;
            var14 = var1[var16];
            if(!(var6 == var13)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var19 = var14.avatarDecorationSize;
            _fun0002_ip = 18; continue _fun0002;
case 16:
            var19 = var14.avatarDecorationSizeTriple;
case 18:
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var10.bundle;
            var1['style'] = var5;
            var7 = var6 != var18;
            if(!var7) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var9 = _closure1_slot5;
            var8 = _closure1_slot3;
            var5 = {};
            var11 = var10.pfx;
            var5['style'] = var11;
            var17 = _closure1_slot5;
            var12 = _closure1_slot1;
            var21 = _closure1_slot2;
            var11 = 10;
            var11 = var21[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['item'] = var18;
            var11 = var17.bind(var4)(var12, var11);
            var5['children'] = var11;
            var7 = var9.bind(var4)(var8, var5);
case 19:
            var5 = new Array(3);
            var5[0] = var7;
            var7 = var6 != var20;
            if(!var7) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var11 = _closure1_slot5;
            var9 = _closure1_slot3;
            var8 = {};
            if(!(var6 == var13)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var17 = var10.avatar;
            _fun0002_ip = 25; continue _fun0002;
case 23:
            var17 = var10.avatarWithNameplate;
case 25:
            var12 = new Array(1);
            var12[0] = var17;
            var8['style'] = var12;
            var18 = _closure1_slot5;
            var17 = _closure1_slot1;
            var21 = _closure1_slot2;
            var12 = 11;
            var12 = var21[var12];
            var17 = var17.bind(var4)(var12);
            var12 = {};
            var12['item'] = var20;
            var12['size'] = var19;
            var19 = var6 != var13;
            var12['threeTierBundle'] = var19;
            var12 = var18.bind(var4)(var17, var12);
            var8['children'] = var12;
            var7 = var11.bind(var4)(var9, var8);
case 21:
            var5[1] = var7;
            var7 = var6 != var13;
            var6 = null;
            if(!var7) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var9 = _closure1_slot5;
            var8 = _closure1_slot3;
            var7 = {};
            var10 = var10.nameplate;
            var7['style'] = var10;
            var12 = _closure1_slot5;
            var11 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 12;
            var10 = var17[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.NameplateDummyUserPreview;
            var10 = {};
            var14 = var14.nameplatePreviewWidth;
            var10['width'] = var14;
            var14 = 'large';
            if(!(var14 !== var16)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var14 = 13;
            var14 = var17[var14];
            var14 = var16.bind(var4)(var14);
            var14 = var14.AvatarSizes;
            var14 = var14.XSMALL_20;
            _fun0002_ip = 30; continue _fun0002;
case 28:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var15 = 13;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.AvatarSizes;
            var14 = var15.NORMAL;
case 30:
            var10['avatarSize'] = var14;
            var10['nameplate'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 26:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function BundleSampleV2StaticPreview(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var8 = var1.previewAssets;
            var7 = var1.disableStaticBackground;
            var6 = var1.mutedStaticBackground;
            var9 = var1.composedFallbackProps;
            var4 = var1.exposureLocation;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 14;
            var1 = var5[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.useCollectiblesMobileFlexibleBundlesExperiment;
            var1 = var1.bind(var3)(var4);
            var1 = var1.enabled;
            var4 = _closure1_slot5;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var3 = _closure1_slot10;
            var1 = {};
            var11 = var1;
            var10 = var9;
            var9 = copyDataProperties(var11, var10);
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 33; continue _fun0003;
case 31:
            var3 = _closure1_slot9;
            var2 = {};
            var2['previewAssets'] = var8;
            var2['disableBackground'] = var7;
            var2['mutedBackground'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 33:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var8 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BUNDLE_PREVIEW_CONFIG;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {};
    var18 = var8.absoluteFillObject;
    var19 = var9;
    var10 = copyDataProperties(var19, var18);
    var14 = 'hidden';
    var13 = 'overflow';
    var9[12] = var14;
    var4['container'] = var9;
    var9 = {};
    var18 = var8.absoluteFillObject;
    var19 = var9;
    var10 = copyDataProperties(var19, var18);
    var9[12] = var14;
    var11 = 'center';
    var12 = 'justifyContent';
    var9[11] = var11;
    var10 = 'alignItems';
    var9[9] = var11;
    var4['bgBleedClip'] = var9;
    var9 = {};
    var18 = var8.absoluteFillObject;
    var19 = var9;
    var15 = copyDataProperties(var19, var18);
    var16 = 0.8;
    var15 = 'opacity';
    var9[14] = var16;
    var4['bgMutedWrap'] = var9;
    var9 = {'width': '100%', 'height': '100%'};
    var4['bgImage'] = var9;
    var9 = {};
    var18 = var8.absoluteFillObject;
    var19 = var9;
    var15 = copyDataProperties(var19, var18);
    var9[12] = var14;
    var9[11] = var11;
    var9[9] = var11;
    var4['fgClip'] = var9;
    var9 = {};
    var18 = var8.absoluteFillObject;
    var19 = var9;
    var10 = copyDataProperties(var19, var18);
    var4['fgImage'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var2 = _closure1_slot4;
        var1 = arg1;
        var9 = var2[var1];
        var1 = {};
        var2 = {};
        var4 = var9.bundleWidth;
        var2['width'] = var4;
        var4 = var9.bundleHeight;
        var2['height'] = var4;
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var5 = 6;
        var3 = var8[var5];
        var6 = undefined;
        var3 = var7.bind(var6)(var3);
        var3 = var3.radii;
        var3 = var3.xs;
        var2['borderRadius'] = var3;
        var1['bundle'] = var2;
        var2 = {};
        var3 = 'absolute';
        var2['position'] = var3;
        var3 = var9.pfxTop;
        var2['top'] = var3;
        var3 = var9.pfxLeft;
        var2['left'] = var3;
        var3 = var9.pfxWidth;
        var2['width'] = var3;
        var3 = var9.pfxHeight;
        var2['height'] = var3;
        var3 = var8[var5];
        var3 = var7.bind(var6)(var3);
        var3 = var3.colors;
        var3 = var3.BACKGROUND_BASE_LOW;
        var2['backgroundColor'] = var3;
        var4 = {};
        var3 = '-8deg';
        var4['rotate'] = var3;
        var3 = new Array(1);
        var3[0] = var4;
        var2['transform'] = var3;
        var3 = 0;
        var2['zIndex'] = var3;
        var3 = 'hidden';
        var2['overflow'] = var3;
        var3 = var8[var5];
        var3 = var7.bind(var6)(var3);
        var3 = var3.radii;
        var3 = var3.xs;
        var2['borderRadius'] = var3;
        var1['pfx'] = var2;
        var2 = {'position': 'absolute', 'top': null, 'right': null, 'transform': null, 'zIndex': 1, 'alignItems': 'center', 'justifyContent': 'center'};
        var3 = var9.avatarTop;
        var2['top'] = var3;
        var3 = var9.avatarRight;
        var2['right'] = var3;
        var10 = {};
        var3 = '8deg';
        var10['rotate'] = var3;
        var4 = new Array(1);
        var4[0] = var10;
        var2['transform'] = var4;
        var1['avatar'] = var2;
        var2 = {'position': 'absolute', 'top': null, 'right': null, 'transform': null, 'zIndex': 1, 'alignItems': 'center', 'justifyContent': 'center'};
        var4 = var9.avatarWithNameplateTop;
        var2['top'] = var4;
        var4 = var9.avatarWithNameplateRight;
        var2['right'] = var4;
        var4 = {};
        var4['rotate'] = var3;
        var3 = new Array(1);
        var3[0] = var4;
        var2['transform'] = var3;
        var3 = var8[var5];
        var3 = var7.bind(var6)(var3);
        var3 = var3.colors;
        var3 = var3.BLACK;
        var2['shadowColor'] = var3;
        var3 = 4;
        var4 = {'width': 0, 'height': 4};
        var2['shadowOffset'] = var4;
        var4 = 0.5;
        var2['shadowOpacity'] = var4;
        var2['shadowRadius'] = var3;
        var1['avatarWithNameplate'] = var2;
        var2 = {'position': 'absolute', 'bottom': null, 'marginHorizontal': 10, 'width': '90%', 'backgroundColor': null, 'zIndex': 2};
        var9 = var9.nameplateBottom;
        var2['bottom'] = var9;
        var9 = var8[var5];
        var9 = var7.bind(var6)(var9);
        var9 = var9.colors;
        var9 = var9.BACKGROUND_BASE_LOWER;
        var2['backgroundColor'] = var9;
        var9 = var8[var5];
        var9 = var7.bind(var6)(var9);
        var9 = var9.radii;
        var9 = var9.sm;
        var2['borderRadius'] = var9;
        var5 = var8[var5];
        var5 = var7.bind(var6)(var5);
        var5 = var5.colors;
        var5 = var5.BLACK;
        var2['shadowColor'] = var5;
        var5 = {'width': 0, 'height': 4};
        var2['shadowOffset'] = var5;
        var2['shadowOpacity'] = var4;
        var2['shadowRadius'] = var3;
        var1['nameplate'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/BundleSampleV2.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BundleSampleV2(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var4 = var6.deco;
            var3 = var6.pfx;
            var2 = var6.nameplate;
            var1 = var6.size;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var1 = 'small';
case 12:
            var10 = var6.previewAssets;
            var9 = var6.disableStaticBackground;
            if(!(var9 === var5)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var9 = false;
case 34:
            var8 = var6.mutedStaticBackground;
            if(!(var8 === var5)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var8 = false;
case 36:
            var6 = var6.exposureLocation;
            if(!(var6 === var5)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var6 = 'CollectiblesShopCardAssetTileV2';
case 38:
            var7 = {};
            var7['deco'] = var4;
            var7['pfx'] = var3;
            var7['nameplate'] = var2;
            var7['size'] = var1;
            var2 = null;
            var3 = var2 == var10;
            var1 = undefined;
            if(var3) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var1 = var10.fgStatic;
case 40:
            if(!(var2 == var1)) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var3 = _closure1_slot5;
            var2 = _closure1_slot10;
            var1 = {};
            var12 = var1;
            var11 = var7;
            var4 = copyDataProperties(var12, var11);
            var1 = var3.bind(var5)(var2, var1);
            _fun0004_ip = 9; continue _fun0004;
case 42:
            var4 = _closure1_slot5;
            var3 = _closure1_slot11;
            var2 = {};
            var2['previewAssets'] = var10;
            var2['disableStaticBackground'] = var9;
            var2['mutedStaticBackground'] = var8;
            var2['composedFallbackProps'] = var7;
            var2['exposureLocation'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 9:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();