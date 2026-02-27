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
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
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
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden', 'height': '100%', 'width': '100%'};
    var11 = 6;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10['borderRadius'] = var13;
    var4['assetContainer'] = var10;
    var10 = {'position': 'absolute', 'opacity': 1, 'color': null, 'fontWeight': 'bold'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.ICON_STRONG;
    var10['color'] = var13;
    var4['overlayIcon'] = var10;
    var10 = {'position': 'absolute', 'top': 0, 'zIndex': 2, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'width': '100%', 'height': '75%'};
    var4['overlayContainer'] = var10;
    var10 = {'position': 'absolute', 'top': 0, 'width': '100%', 'height': '100%'};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var10['backgroundColor'] = var11;
    var4['profileEffectContainer'] = var10;
    var10 = {'width': 80, 'height': 80, 'resizeMode': 'contain'};
    var4['externalProductImage'] = var10;
    var10 = {};
    var11 = 0.4;
    var10['opacity'] = var11;
    var4['externalProductPurchased'] = var10;
    var10 = {};
    var10['opacity'] = var11;
    var4['externalProductDisabled'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = function PurchasedAssetOverlay() {
        var1 = _closure1_slot8;
        var4 = undefined;
        var7 = var1.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var7.overlayContainer;
        var1['style'] = var6;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var5 = 7;
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
    var _closure1_slot9 = var4;
    var4 = function DisabledAssetOverlay() {
        var1 = _closure1_slot8;
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
    var _closure1_slot10 = var4;
    var4 = function Asset(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.product;
            var8 = var1.isPurchased;
            var11 = var1.isDisabled;
            var3 = _closure1_slot8;
            var4 = undefined;
            var13 = var3.bind(var4)();
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 9;
            var5 = var3[var5];
            var6 = var10.bind(var4)(var5);
            var5 = var6.useShopProductItems;
            var5 = var5.bind(var6)(var2);
            var6 = var5.firstProfileEffect;
            var7 = var5.firstAvatarDecoration;
            var5 = var5.firstNameplate;
            var9 = var2.type;
            var12 = 10;
            var3 = var3[var12];
            var3 = var10.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.BUNDLE;
            if(!(var9 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 11;
            var3 = var10[var3];
            var9 = var9.bind(var4)(var3);
            var3 = var9.isValidCollectiblesBundle;
            var3 = var3.bind(var9)(var2);
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var10 = _closure1_slot3;
            var9 = var2.items;
            var3 = 1;
            var9 = var10.bind(var4)(var9, var3);
            var3 = 0;
            var14 = var9[var3];
            var9 = var2.skuId;
            var3 = _closure1_slot5;
            var3 = var3.ORB_PROFILE_BADGE;
            if(!(var9 !== var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = var2.skuId;
            var2 = _closure1_slot5;
            var2 = var2.FRACTIONAL_PREMIUM;
            if(!(var3 !== var2)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = null;
            var3 = var2 == var14;
            var9 = undefined;
            if(var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var9 = var14.type;
case 9:
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var12];
            var3 = var10.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.AVATAR_DECORATION;
            if(!(var3 !== var9)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var12];
            var3 = var10.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.PROFILE_EFFECT;
            if(!(var3 !== var9)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var12];
            var3 = var10.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.NAMEPLATE;
            if(!(var3 !== var9)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            return var2;
case 15:
            var9 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var10 = var13.overlayContainer;
            var2['style'] = var10;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 18;
            var10 = var15[var10];
            var12 = var12.bind(var4)(var10);
            var10 = {};
            var10['item'] = var14;
            var10['isPurchased'] = var8;
            var10 = var9.bind(var4)(var12, var10);
            var2['children'] = var10;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 13:
            var9 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var10 = var13.profileEffectContainer;
            var2['style'] = var10;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 17;
            var10 = var15[var10];
            var12 = var12.bind(var4)(var10);
            var10 = {};
            var10['item'] = var14;
            var10['isPurchased'] = var8;
            var15 = true;
            var10['hideBackground'] = var15;
            var10 = var9.bind(var4)(var12, var10);
            var2['children'] = var10;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 11:
            var9 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var10 = var13.overlayContainer;
            var2['style'] = var10;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 16;
            var10 = var15[var10];
            var12 = var12.bind(var4)(var10);
            var10 = {};
            var10['isPurchased'] = var8;
            var10['item'] = var14;
            var14 = 100;
            var10['size'] = var14;
            var10 = var9.bind(var4)(var12, var10);
            var2['children'] = var10;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 7:
            var9 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var12 = var13.overlayContainer;
            var10 = new Array(3);
            var10[0] = var12;
            var12 = var8;
            if(!var8) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var12 = var13.externalProductPurchased;
case 17:
            var10[1] = var12;
            if(!var11) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var11 = var13.externalProductDisabled;
case 19:
            var10[2] = var11;
            var2['style'] = var10;
            var12 = _closure1_slot6;
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 13;
            var10 = var17[var10];
            var11 = var16.bind(var4)(var10);
            var10 = {};
            var14 = {};
            var15 = 15;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var14['uri'] = var15;
            var10['source'] = var14;
            var14 = var13.externalProductImage;
            var10['style'] = var14;
            var10 = var12.bind(var4)(var11, var10);
            var2['children'] = var10;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 5:
            var9 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var11 = var13.overlayContainer;
            var10 = new Array(2);
            var10[0] = var11;
            var11 = var8;
            if(!var11) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var11 = var13.externalProductPurchased;
case 21:
            var10[1] = var11;
            var2['style'] = var10;
            var12 = _closure1_slot6;
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 13;
            var10 = var17[var10];
            var11 = var16.bind(var4)(var10);
            var10 = {};
            var14 = {};
            var15 = 14;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var14['uri'] = var15;
            var10['source'] = var14;
            var13 = var13.externalProductImage;
            var10['style'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var2['children'] = var10;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 4:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 12;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['isPurchased'] = var8;
            var1['deco'] = var7;
            var1['pfx'] = var6;
            var1['nameplate'] = var5;
            var5 = 'small';
            var1['size'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var4 = function AssetTileInternal(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.children;
            var11 = var1.solidBackground;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var11 = false;
case 23:
            var2 = _closure1_slot8;
            var6 = var2.bind(var4)();
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 19;
            var3 = var14[var2];
            var7 = var8.bind(var4)(var3);
            var3 = var7.hexToRgbaString;
            var2 = var14[var2];
            var10 = var8.bind(var4)(var2);
            var9 = var10.hexWithOpacity;
            var2 = 20;
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
            if(!var11) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var2 = 1;
case 25:
            var2 = var9.bind(var10)(var8, var2);
            var8 = var3.bind(var7)(var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
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
    var _closure1_slot12 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var9 = var1.product;
            var8 = var1.isPurchased;
            var5 = var1.solidBackground;
            var6 = var1.isDisabled;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 21;
            var1 = var10[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var1 = var3.useDefaultVariantIndex;
            var3 = var1.bind(var3)(var9);
            var1 = 22;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getSelectedProduct;
            var11 = var1.bind(var2)(var9, var3);
            var3 = _closure1_slot7;
            var2 = _closure1_slot12;
            var1 = {};
            var1['solidBackground'] = var5;
            var10 = _closure1_slot6;
            var9 = _closure1_slot11;
            var5 = {};
            var5['product'] = var11;
            var5['isPurchased'] = var8;
            var5['isDisabled'] = var6;
            var9 = var10.bind(var4)(var9, var5);
            var5 = new Array(3);
            var5[0] = var9;
            var9 = var8;
            if(!var9) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var12 = _closure1_slot6;
            var11 = _closure1_slot9;
            var10 = {};
            var9 = var12.bind(var4)(var11, var10);
case 27:
            var5[1] = var9;
            if(!var6) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var6 = !var8;
case 29:
            if(!var6) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var9 = _closure1_slot6;
            var8 = _closure1_slot10;
            var7 = {};
            var6 = var9.bind(var4)(var8, var7);
case 31:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopCardAssetTileV2.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();