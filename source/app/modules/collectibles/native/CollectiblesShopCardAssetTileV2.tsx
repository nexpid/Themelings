// app/modules/collectibles/native/CollectiblesShopCardAssetTileV2.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var9 = 2;
    var4 = var6[var9];
    var4 = var5.bind(var1)(var4);
    var14 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EXTERNAL_PRODUCT_SKU_IDS;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot6 = var8;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.COLLECTIBLES_SHOP_CARD_HEIGHT;
    var11 = 6;
    var4 = var6[var11];
    var4 = var12.bind(var1)(var4);
    var4 = var4.spacing;
    var4 = var4.PX_16;
    var4 = var9 * var4;
    var13 = var8 - var4;
    var _closure1_slot8 = var13;
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
    var _closure1_slot9 = var4;
    var4 = function PurchasedAssetOverlay() {
        var1 = _closure1_slot9;
        var4 = undefined;
        var7 = var1.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var7.overlayContainer;
        var1['style'] = var6;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var5 = 8;
        var5 = var8[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.CheckmarkLargeBoldIcon;
        var5 = {};
        var8 = 'lg';
        var5['size'] = var8;
        var7 = var7.overlayIcon;
        var5['style'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot10 = var4;
    var4 = function DisabledAssetOverlay() {
        var1 = _closure1_slot9;
        var4 = undefined;
        var7 = var1.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var7.overlayContainer;
        var1['style'] = var6;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var5 = 9;
        var5 = var8[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.LockIcon;
        var5 = {};
        var8 = 'lg';
        var5['size'] = var8;
        var7 = var7.overlayIcon;
        var5['style'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var4;
    var4 = function ProductPreview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.product;
            var7 = var1.isPurchased;
            var13 = var1.isDisabled;
            var9 = var1.disableBundleStaticBackground;
            var8 = var1.muteBundleStaticBackground;
            var1 = _closure1_slot9;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 10;
            var2 = var1[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.getProductType;
            var2 = var2.bind(var6)(var10);
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
            var2 = var10.type;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var3.bind(var4)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.BUNDLE;
            var11 = '75%';
            if(!(var2 === var1)) { _fun0001_ip = 5; continue _fun0001 }
case 2:
            var11 = '100%';
case 5:
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {'style': null, 'renderToHardwareTextureAndroid': true, 'needsOffscreenAlphaCompositing': true};
            var14 = var12.overlayContainer;
            var6 = new Array(3);
            var6[0] = var14;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var13;
case 6:
            if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var12.purchasedOrDisabled;
case 8:
            var6[1] = var7;
            var7 = {};
            var7['height'] = var11;
            var6[2] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot6;
            var6 = _closure1_slot13;
            var5 = {};
            var5['product'] = var10;
            var5['disableBundleStaticBackground'] = var9;
            var5['muteBundleStaticBackground'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var4 = function ProductPreviewInner(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var7 = var1.product;
            var6 = var1.disableBundleStaticBackground;
            var5 = var1.muteBundleStaticBackground;
            var2 = _closure1_slot9;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var11 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 12;
            var3 = var2[var3];
            var8 = var11.bind(var4)(var3);
            var3 = var8.useShopProductItems;
            var3 = var3.bind(var8)(var7);
            var9 = var3.firstProfileEffect;
            var10 = var3.firstAvatarDecoration;
            var8 = var3.firstNameplate;
            var3 = var7.type;
            var15 = 11;
            var2 = var2[var15];
            var2 = var11.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.BUNDLE;
            if(!(var3 === var2)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 13;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isValidCollectiblesBundle;
            var2 = var2.bind(var3)(var7);
            if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 10:
            var3 = var7.skuId;
            var2 = _closure1_slot5;
            var2 = var2.ORB_PROFILE_BADGE;
            if(!(var3 !== var2)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var3 = var7.skuId;
            var2 = _closure1_slot5;
            var2 = var2.FRACTIONAL_PREMIUM;
            if(!(var3 !== var2)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var11 = _closure1_slot3;
            var3 = var7.items;
            var2 = 1;
            var3 = var11.bind(var4)(var3, var2);
            var2 = 0;
            var13 = var3[var2];
            var2 = null;
            var3 = var2 == var13;
            var11 = undefined;
            if(var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var11 = var13.type;
case 17:
            var14 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var15];
            var3 = var14.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.AVATAR_DECORATION;
            if(!(var3 !== var11)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var14 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var15];
            var3 = var14.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.PROFILE_EFFECT;
            if(!(var3 !== var11)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var14 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var15];
            var3 = var14.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.PROFILE_FRAME;
            if(!(var3 !== var11)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var14 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var15];
            var3 = var14.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.NAMEPLATE;
            if(!(var3 !== var11)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            return var2;
case 25:
            var11 = _closure1_slot6;
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 21;
            var2 = var14[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['item'] = var13;
            var2 = var11.bind(var4)(var3, var2);
            return var2;
case 23:
            var11 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var14 = var12.profileFrameContainer;
            var2['style'] = var14;
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var14 = 20;
            var14 = var18[var14];
            var15 = var17.bind(var4)(var14);
            var14 = {};
            var14['profileFrame'] = var13;
            var19 = _closure1_slot0;
            var16 = 5;
            var16 = var18[var16];
            var16 = var19.bind(var4)(var16);
            var20 = var16.COLLECTIBLES_SHOP_CARD_WIDTH;
            var16 = 6;
            var19 = var18[var16];
            var19 = var17.bind(var4)(var19);
            var19 = var19.spacing;
            var19 = var19.PX_32;
            var19 = var20 - var19;
            var14['previewWidth'] = var19;
            var19 = _closure1_slot8;
            var14['previewHeight'] = var19;
            var16 = var18[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.colors;
            var16 = var16.BACKGROUND_BASE_LOW;
            var14['profileBackgroundColor'] = var16;
            var14 = var11.bind(var4)(var15, var14);
            var2['children'] = var14;
            var2 = var11.bind(var4)(var3, var2);
            return var2;
case 21:
            var11 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var14 = var12.profileEffectContainer;
            var2['style'] = var14;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 19;
            var14 = var16[var14];
            var15 = var15.bind(var4)(var14);
            var14 = {};
            var14['item'] = var13;
            var16 = true;
            var14['hideBackground'] = var16;
            var14 = var11.bind(var4)(var15, var14);
            var2['children'] = var14;
            var2 = var11.bind(var4)(var3, var2);
            return var2;
case 19:
            var11 = _closure1_slot6;
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 18;
            var2 = var14[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['item'] = var13;
            var13 = 100;
            var2['size'] = var13;
            var2 = var11.bind(var4)(var3, var2);
            return var2;
case 15:
            var11 = _closure1_slot6;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 15;
            var2 = var16[var2];
            var3 = var15.bind(var4)(var2);
            var2 = {};
            var13 = {};
            var14 = 17;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var13['uri'] = var14;
            var2['source'] = var13;
            var13 = var12.externalProductImage;
            var2['style'] = var13;
            var2 = var11.bind(var4)(var3, var2);
            return var2;
case 13:
            var11 = _closure1_slot6;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 15;
            var2 = var16[var2];
            var3 = var15.bind(var4)(var2);
            var2 = {};
            var13 = {};
            var14 = 16;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var13['uri'] = var14;
            var2['source'] = var13;
            var12 = var12.externalProductImage;
            var2['style'] = var12;
            var2 = var11.bind(var4)(var3, var2);
            return var2;
case 12:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 14;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['deco'] = var10;
            var1['pfx'] = var9;
            var1['nameplate'] = var8;
            var8 = 'small';
            var1['size'] = var8;
            var7 = var7.previewAssets;
            var1['previewAssets'] = var7;
            var1['disableStaticBackground'] = var6;
            var1['mutedStaticBackground'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var4 = function AssetTileInternal(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var5 = var1.children;
            var11 = var1.solidBackground;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var11 = false;
case 27:
            var2 = _closure1_slot9;
            var6 = var2.bind(var4)();
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 22;
            var3 = var14[var2];
            var7 = var8.bind(var4)(var3);
            var3 = var7.hexToRgbaString;
            var2 = var14[var2];
            var10 = var8.bind(var4)(var2);
            var9 = var10.hexWithOpacity;
            var2 = 23;
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
            if(!var11) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var2 = 1;
case 29:
            var2 = var9.bind(var10)(var8, var2);
            var8 = var3.bind(var7)(var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
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
    var _closure1_slot14 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var9 = var1.product;
            var8 = var1.isPurchased;
            var5 = var1.solidBackground;
            var6 = var1.isDisabled;
            var12 = var1.disableBundleStaticBackground;
            var11 = var1.muteBundleStaticBackground;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 24;
            var1 = var10[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var1 = var3.useDefaultVariantIndex;
            var3 = var1.bind(var3)(var9);
            var1 = 10;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getSelectedProduct;
            var13 = var1.bind(var2)(var9, var3);
            var3 = _closure1_slot7;
            var2 = _closure1_slot14;
            var1 = {};
            var1['solidBackground'] = var5;
            var10 = _closure1_slot6;
            var9 = _closure1_slot12;
            var5 = {};
            var5['product'] = var13;
            var5['isPurchased'] = var8;
            var5['isDisabled'] = var6;
            var5['disableBundleStaticBackground'] = var12;
            var5['muteBundleStaticBackground'] = var11;
            var9 = var10.bind(var4)(var9, var5);
            var5 = new Array(3);
            var5[0] = var9;
            var9 = var8;
            if(!var9) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var12 = _closure1_slot6;
            var11 = _closure1_slot10;
            var10 = {};
            var9 = var12.bind(var4)(var11, var10);
case 31:
            var5[1] = var9;
            if(!var6) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var6 = !var8;
case 33:
            if(!var6) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var9 = _closure1_slot6;
            var8 = _closure1_slot11;
            var7 = {};
            var6 = var9.bind(var4)(var8, var7);
case 35:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopCardAssetTileV2.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();