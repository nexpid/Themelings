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
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.ICON_PRIMARY;
    var10['color'] = var11;
    var4['checkmark'] = var10;
    var10 = {'position': 'absolute', 'top': 0, 'zIndex': 2, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'width': '100%', 'height': '75%'};
    var4['overlayContainer'] = var10;
    var10 = {'width': 80, 'height': 80, 'resizeMode': 'contain'};
    var4['externalProductImage'] = var10;
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
        var7 = var7.checkmark;
        var5['style'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot9 = var4;
    var4 = function Asset(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.product;
            var5 = var1.isDarkTheme;
            var9 = var1.isPurchased;
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 8;
            var6 = var3[var4];
            var4 = undefined;
            var7 = var11.bind(var4)(var6);
            var6 = var7.useShopProductItems;
            var6 = var6.bind(var7)(var2);
            var7 = var6.firstProfileEffect;
            var8 = var6.firstAvatarDecoration;
            var6 = var6.firstNameplate;
            var10 = _closure1_slot8;
            var13 = var10.bind(var4)();
            var10 = var2.type;
            var12 = 9;
            var3 = var3[var12];
            var3 = var11.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.BUNDLE;
            if(!(var10 === var3)) { _fun0001_ip = 153; continue _fun0001 }
 116:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 10;
            var3 = var11[var3];
            var10 = var10.bind(var4)(var3);
            var3 = var10.isValidCollectiblesBundle;
            var3 = var3.bind(var10)(var2);
            if(var3) { _fun0001_ip = 721; continue _fun0001 }
 153:
            var11 = _closure1_slot3;
            var10 = var2.items;
            var3 = 1;
            var10 = var11.bind(var4)(var10, var3);
            var3 = 0;
            var14 = var10[var3];
            var10 = var2.skuId;
            var3 = _closure1_slot5;
            var3 = var3.ORB_PROFILE_BADGE;
            if(!(var10 !== var3)) { _fun0001_ip = 629; continue _fun0001 }
 201:
            var3 = var2.skuId;
            var2 = _closure1_slot5;
            var2 = var2.FRACTIONAL_PREMIUM;
            if(!(var3 !== var2)) { _fun0001_ip = 537; continue _fun0001 }
 224:
            var2 = null;
            var3 = var2 == var14;
            var10 = undefined;
            if(var3) { _fun0001_ip = 240; continue _fun0001 }
 235:
            var10 = var14.type;
 240:
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var12];
            var3 = var11.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.AVATAR_DECORATION;
            if(!(var3 !== var10)) { _fun0001_ip = 461; continue _fun0001 }
 276:
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var12];
            var3 = var11.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.PROFILE_EFFECT;
            if(!(var3 !== var10)) { _fun0001_ip = 413; continue _fun0001 }
 309:
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var12];
            var3 = var11.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.NAMEPLATE;
            if(!(var3 !== var10)) { _fun0001_ip = 344; continue _fun0001 }
 342:
            return var2;
 344:
            var10 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var11 = var13.overlayContainer;
            var2['style'] = var11;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 17;
            var11 = var15[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['item'] = var14;
            var11['isPurchased'] = var9;
            var11 = var10.bind(var4)(var12, var11);
            var2['children'] = var11;
            var2 = var10.bind(var4)(var3, var2);
            return var2;
 413:
            var10 = _closure1_slot6;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 16;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['item'] = var14;
            var2['isPurchased'] = var9;
            var2['isDarkTheme'] = var5;
            var2 = var10.bind(var4)(var3, var2);
            return var2;
 461:
            var10 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var11 = var13.overlayContainer;
            var2['style'] = var11;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 15;
            var11 = var15[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['isPurchased'] = var9;
            var11['item'] = var14;
            var14 = 100;
            var11['size'] = var14;
            var11 = var10.bind(var4)(var12, var11);
            var2['children'] = var11;
            var2 = var10.bind(var4)(var3, var2);
            return var2;
 537:
            var10 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var11 = var13.overlayContainer;
            var2['style'] = var11;
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var11 = 12;
            var11 = var17[var11];
            var12 = var16.bind(var4)(var11);
            var11 = {};
            var14 = {};
            var15 = 14;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var14['uri'] = var15;
            var11['source'] = var14;
            var14 = var13.externalProductImage;
            var11['style'] = var14;
            var11 = var10.bind(var4)(var12, var11);
            var2['children'] = var11;
            var2 = var10.bind(var4)(var3, var2);
            return var2;
 629:
            var10 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var11 = var13.overlayContainer;
            var2['style'] = var11;
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var11 = 12;
            var11 = var17[var11];
            var12 = var16.bind(var4)(var11);
            var11 = {};
            var14 = {};
            var15 = 13;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var14['uri'] = var15;
            var11['source'] = var14;
            var13 = var13.externalProductImage;
            var11['style'] = var13;
            var11 = var10.bind(var4)(var12, var11);
            var2['children'] = var11;
            var2 = var10.bind(var4)(var3, var2);
            return var2;
 721:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 11;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['isPurchased'] = var9;
            var1['deco'] = var8;
            var1['pfx'] = var7;
            var1['nameplate'] = var6;
            var1['isDarkTheme'] = var5;
            var5 = 'small';
            var1['size'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var4 = function AssetTileInternal(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = var1.children;
            var11 = var1.solidBackground;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0002_ip = 22; continue _fun0002 }
 20:
            var11 = false;
 22:
            var2 = _closure1_slot8;
            var6 = var2.bind(var4)();
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 18;
            var3 = var14[var2];
            var7 = var8.bind(var4)(var3);
            var3 = var7.hexToRgbaString;
            var2 = var14[var2];
            var10 = var8.bind(var4)(var2);
            var9 = var10.hexWithOpacity;
            var2 = 19;
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
            if(!var11) { _fun0002_ip = 140; continue _fun0002 }
 137:
            var2 = 1;
 140:
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
    var _closure1_slot11 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var10 = var2.product;
            var9 = var2.isDarkTheme;
            var1 = var2.isPurchased;
            var5 = var2.solidBackground;
            var4 = _closure1_slot7;
            var3 = _closure1_slot11;
            var2 = {};
            var2['product'] = var10;
            var2['isDarkTheme'] = var9;
            var2['solidBackground'] = var5;
            var7 = var1;
            if(!var7) { _fun0003_ip = 79; continue _fun0003 }
 61:
            var12 = _closure1_slot6;
            var11 = _closure1_slot9;
            var8 = undefined;
            var5 = {};
            var7 = var12.bind(var8)(var11, var5);
 79:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot10;
            var6 = {};
            var6['product'] = var10;
            var6['isDarkTheme'] = var9;
            var6['isPurchased'] = var1;
            var1 = undefined;
            var6 = var8.bind(var1)(var7, var6);
            var5[1] = var6;
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopCardAssetTileV2.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();