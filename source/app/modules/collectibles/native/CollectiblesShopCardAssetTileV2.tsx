// app/modules/collectibles/native/CollectiblesShopCardAssetTileV2.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function PurchasedAssetOverlay() {
        var1 = _closure1_slot10;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot7;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = var8.overlayContainer;
        var1['style'] = var6;
        var7 = _closure1_slot7;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var5 = 8;
        var5 = var9[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.CheckmarkLargeBoldIcon;
        var5 = {};
        var9 = 'lg';
        var5['size'] = var9;
        var8 = var8.overlayIcon;
        var5['style'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function DisabledAssetOverlay() {
        var1 = _closure1_slot10;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot7;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = var8.overlayContainer;
        var1['style'] = var6;
        var7 = _closure1_slot7;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var5 = 9;
        var5 = var9[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.LockIcon;
        var5 = {};
        var9 = 'lg';
        var5['size'] = var9;
        var8 = var8.overlayIcon;
        var5['style'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function ProductPreview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var11 = var1.product;
            var7 = var1.isPurchased;
            var14 = var1.isDisabled;
            var10 = var1.disableBundleStaticBackground;
            var9 = var1.muteBundleStaticBackground;
            var8 = var1.cardWidth;
            var1 = _closure1_slot10;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 10;
            var2 = var1[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.getProductType;
            var2 = var2.bind(var6)(var11);
            var6 = 11;
            var1 = var1[var6];
            var1 = var3.bind(var4)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_EFFECT;
            if(!(var2 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var3.bind(var4)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_FRAME;
            if(!(var2 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = var11.type;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var3.bind(var4)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.BUNDLE;
            var12 = '75%';
            if(!(var2 === var1)) { _fun0001_ip = 5; continue _fun0001 }
case 2:
            var12 = '100%';
case 5:
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {'style': null, 'renderToHardwareTextureAndroid': true, 'needsOffscreenAlphaCompositing': true};
            var15 = var13.overlayContainer;
            var6 = new Array(3);
            var6[0] = var15;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var14;
case 6:
            if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var13.purchasedOrDisabled;
case 8:
            var6[1] = var7;
            var7 = {};
            var7['height'] = var12;
            var6[2] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot7;
            var6 = _closure1_slot11;
            var5 = {};
            var5['product'] = var11;
            var5['disableBundleStaticBackground'] = var10;
            var5['muteBundleStaticBackground'] = var9;
            var5['cardWidth'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function AssetTileInternal(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.children;
            var11 = var1.solidBackground;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var11 = false;
case 10:
            var2 = _closure1_slot10;
            var6 = var2.bind(var4)();
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 21;
            var3 = var14[var2];
            var7 = var8.bind(var4)(var3);
            var3 = var7.hexToRgbaString;
            var2 = var14[var2];
            var10 = var8.bind(var4)(var2);
            var9 = var10.hexWithOpacity;
            var2 = 22;
            var2 = var14[var2];
            var12 = var8.bind(var4)(var2);
            var8 = var12.useToken;
            var13 = _closure1_slot1;
            var2 = 6;
            var2 = var14[var2];
            var2 = var13.bind(var4)(var2);
            var2 = var2.colors;
            var2 = var2.BACKGROUND_BASE_LOW;
            var8 = var8.bind(var12)(var2);
            var2 = 0.8;
            if(!var11) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = 1;
case 12:
            var2 = var9.bind(var10)(var8, var2);
            var8 = var3.bind(var7)(var2);
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {'style': null, 'importantForAccessibility': 'no-hide-descendants', 'accessibilityElementsHidden': true};
            var7 = var6.assetContainer;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var7['backgroundColor'] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var9 = 2;
    var4 = var6[var9];
    var4 = var5.bind(var1)(var4);
    var14 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EXTERNAL_PRODUCT_SKU_IDS;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot7 = var8;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.COLLECTIBLES_SHOP_CARD_HEIGHT;
    var11 = 6;
    var4 = var6[var11];
    var4 = var12.bind(var1)(var4);
    var4 = var4.space;
    var4 = var4.PX_16;
    var4 = var9 * var4;
    var13 = var8 - var4;
    var _closure1_slot9 = var13;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden', 'height': '100%', 'width': '100%'};
    var16 = 'center';
    var15 = '100%';
    var17 = var6[var11];
    var17 = var12.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var10['borderRadius'] = var17;
    var4['assetContainer'] = var10;
    var10 = {};
    var19 = var14.absoluteFillObject;
    var20 = var10;
    var14 = copyDataProperties(var20, var19);
    var14 = 'justifyContent';
    var10[13] = var16;
    var14 = 'alignItems';
    var10[13] = var16;
    var14 = 'width';
    var10[13] = var15;
    var15 = '75%';
    var14 = 'height';
    var10[13] = var15;
    var4['overlayContainer'] = var10;
    var10 = {'width': '100%', 'height': '100%'};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var10['backgroundColor'] = var14;
    var4['profileEffectContainer'] = var10;
    var10 = {'width': '100%', 'height': null, 'alignItems': 'center'};
    var10['height'] = var13;
    var4['profileFrameContainer'] = var10;
    var10 = {'width': 80, 'height': 80, 'resizeMode': 'contain'};
    var4['externalProductImage'] = var10;
    var10 = {};
    var13 = 0.4;
    var10['opacity'] = var13;
    var4['purchasedOrDisabled'] = var10;
    var10 = {'position': 'absolute', 'opacity': 1, 'color': null, 'fontWeight': 'bold'};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.ICON_STRONG;
    var10['color'] = var11;
    var4['overlayIcon'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = function ProductPreviewInner(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var8 = var1.product;
            var7 = var1.disableBundleStaticBackground;
            var6 = var1.muteBundleStaticBackground;
            var16 = var1.cardWidth;
            var _closure2_slot0 = var16;
            var2 = _closure1_slot10;
            var4 = undefined;
            var13 = var2.bind(var4)();
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = 12;
            var5 = var2[var5];
            var9 = var12.bind(var4)(var5);
            var5 = var9.useShopProductItems;
            var5 = var5.bind(var9)(var8);
            var10 = var5.firstProfileEffect;
            var11 = var5.firstAvatarDecoration;
            var9 = var5.firstNameplate;
            var15 = _closure1_slot4;
            var14 = var15.useMemo;
            var5 = new Array(1);
            var5[0] = var16;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 == var4)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 5;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var2.COLLECTIBLES_SHOP_CARD_WIDTH;
                    _fun0004_ip = 16; continue _fun0004;
case 14:
                    var2 = _closure2_slot0;
case 16:
                    var1['width'] = var2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.COLLECTIBLES_SHOP_CARD_HEIGHT;
                    var1['height'] = var2;
                    return var1;
                }
            };
            var5 = var14.bind(var15)(var3, var5);
            var3 = var8.type;
            var16 = 11;
            var2 = var2[var16];
            var2 = var12.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.BUNDLE;
            if(!(var3 !== var2)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var3 = var8.skuId;
            var2 = _closure1_slot6;
            var2 = var2.ORB_PROFILE_BADGE;
            if(!(var3 !== var2)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var3 = var8.skuId;
            var2 = _closure1_slot6;
            var2 = var2.FRACTIONAL_PREMIUM;
            if(!(var3 !== var2)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var12 = _closure1_slot3;
            var3 = var8.items;
            var2 = 1;
            var3 = var12.bind(var4)(var3, var2);
            var2 = 0;
            var14 = var3[var2];
            var2 = null;
            var3 = var2 == var14;
            var12 = undefined;
            if(var3) { _fun0003_ip = 8; continue _fun0003 }
case 23:
            var12 = var14.type;
case 8:
            var15 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var16];
            var3 = var15.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.AVATAR_DECORATION;
            if(!(var3 !== var12)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var15 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var16];
            var3 = var15.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.PROFILE_EFFECT;
            if(!(var3 !== var12)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var15 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var16];
            var3 = var15.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.PROFILE_FRAME;
            if(!(var3 !== var12)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var15 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var16];
            var3 = var15.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.NAMEPLATE;
            if(!(var3 !== var12)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            return var2;
case 30:
            var12 = _closure1_slot7;
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 20;
            var2 = var15[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['item'] = var14;
            var2 = var12.bind(var4)(var3, var2);
            return var2;
case 28:
            var12 = _closure1_slot7;
            var3 = _closure1_slot5;
            var2 = {};
            var15 = var13.profileFrameContainer;
            var2['style'] = var15;
            var17 = _closure1_slot7;
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var15 = 19;
            var15 = var20[var15];
            var16 = var19.bind(var4)(var15);
            var15 = {};
            var15['profileFrame'] = var14;
            var21 = _closure1_slot0;
            var18 = 5;
            var18 = var20[var18];
            var18 = var21.bind(var4)(var18);
            var22 = var18.COLLECTIBLES_SHOP_CARD_WIDTH;
            var18 = 6;
            var21 = var20[var18];
            var21 = var19.bind(var4)(var21);
            var21 = var21.space;
            var21 = var21.PX_32;
            var21 = var22 - var21;
            var15['previewWidth'] = var21;
            var21 = _closure1_slot9;
            var15['previewHeight'] = var21;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.colors;
            var18 = var18.BACKGROUND_BASE_LOW;
            var15['profileBackgroundColor'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var2['children'] = var15;
            var2 = var12.bind(var4)(var3, var2);
            return var2;
case 26:
            var12 = _closure1_slot7;
            var3 = _closure1_slot5;
            var2 = {};
            var15 = var13.profileEffectContainer;
            var2['style'] = var15;
            var17 = _closure1_slot7;
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var15 = 18;
            var15 = var18[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var15['item'] = var14;
            var18 = true;
            var15['hideBackground'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var2['children'] = var15;
            var2 = var12.bind(var4)(var3, var2);
            return var2;
case 24:
            var12 = _closure1_slot7;
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 17;
            var2 = var15[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['item'] = var14;
            var14 = 100;
            var2['size'] = var14;
            var2 = var12.bind(var4)(var3, var2);
            return var2;
case 21:
            var12 = _closure1_slot7;
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 14;
            var2 = var17[var2];
            var3 = var16.bind(var4)(var2);
            var2 = {};
            var14 = {};
            var15 = 16;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var14['uri'] = var15;
            var2['source'] = var14;
            var14 = var13.externalProductImage;
            var2['style'] = var14;
            var2 = var12.bind(var4)(var3, var2);
            return var2;
case 19:
            var12 = _closure1_slot7;
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 14;
            var2 = var17[var2];
            var3 = var16.bind(var4)(var2);
            var2 = {};
            var14 = {};
            var15 = 15;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var14['uri'] = var15;
            var2['source'] = var14;
            var13 = var13.externalProductImage;
            var2['style'] = var13;
            var2 = var12.bind(var4)(var3, var2);
            return var2;
case 17:
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 13;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['deco'] = var11;
            var1['pfx'] = var10;
            var1['nameplate'] = var9;
            var9 = 'small';
            var1['size'] = var9;
            var8 = var8.previewAssets;
            var1['previewAssets'] = var8;
            var1['disableStaticBackground'] = var7;
            var1['mutedStaticBackground'] = var6;
            var1['targetSize'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var4 = var7.memo;
    var2 = function AssetTileV2(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var9 = var1.product;
            var8 = var1.isPurchased;
            var5 = var1.solidBackground;
            var6 = var1.isDisabled;
            var13 = var1.disableBundleStaticBackground;
            var12 = var1.muteBundleStaticBackground;
            var11 = var1.cardWidth;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 23;
            var1 = var10[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var1 = var3.useDefaultVariantIndex;
            var3 = var1.bind(var3)(var9);
            var1 = 10;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getSelectedProduct;
            var14 = var1.bind(var2)(var9, var3);
            var3 = _closure1_slot8;
            var2 = _closure1_slot15;
            var1 = {};
            var1['solidBackground'] = var5;
            var10 = _closure1_slot7;
            var9 = _closure1_slot14;
            var5 = {};
            var5['product'] = var14;
            var5['isPurchased'] = var8;
            var5['isDisabled'] = var6;
            var5['disableBundleStaticBackground'] = var13;
            var5['muteBundleStaticBackground'] = var12;
            var5['cardWidth'] = var11;
            var9 = var10.bind(var4)(var9, var5);
            var5 = new Array(3);
            var5[0] = var9;
            var9 = var8;
            if(!var9) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var12 = _closure1_slot7;
            var11 = _closure1_slot12;
            var10 = {};
            var9 = var12.bind(var4)(var11, var10);
case 32:
            var5[1] = var9;
            if(!var6) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            var6 = !var8;
case 34:
            if(!var6) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var9 = _closure1_slot7;
            var8 = _closure1_slot13;
            var7 = {};
            var6 = var9.bind(var4)(var8, var7);
case 36:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopCardAssetTileV2.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();