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
    var8 = var4.jsx;
    var _closure1_slot5 = var8;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden', 'height': '100%', 'width': '100%'};
    var11 = 5;
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
    var4 = var8.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var4 = function PurchasedAssetOverlay() {
        var1 = _closure1_slot7;
        var4 = undefined;
        var7 = var1.bind(var4)();
        var3 = _closure1_slot5;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var7.overlayContainer;
        var1['style'] = var6;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var5 = 6;
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
    var _closure1_slot8 = var4;
    var4 = function Asset(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.product;
            var5 = var1.isDarkTheme;
            var8 = var1.isPurchased;
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 7;
            var6 = var3[var4];
            var4 = undefined;
            var7 = var11.bind(var4)(var6);
            var6 = var7.useShopProductItems;
            var7 = var6.bind(var7)(var2);
            var6 = var7.firstProfileEffect;
            var7 = var7.firstAvatarDecoration;
            var9 = _closure1_slot7;
            var10 = var9.bind(var4)();
            var9 = var2.type;
            var13 = 8;
            var3 = var3[var13];
            var3 = var11.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.BUNDLE;
            if(!(var9 === var3)) { _fun0001_ip = 123; continue _fun0001 }
 110:
            var3 = null;
            if(!(var3 != var7)) { _fun0001_ip = 123; continue _fun0001 }
 116:
            if(!(var3 == var6)) { _fun0001_ip = 461; continue _fun0001 }
 123:
            var9 = _closure1_slot3;
            var3 = var2.items;
            var2 = 1;
            var3 = var9.bind(var4)(var3, var2);
            var2 = 0;
            var12 = var3[var2];
            var2 = null;
            var3 = var2 == var12;
            var9 = undefined;
            if(var3) { _fun0001_ip = 164; continue _fun0001 }
 159:
            var9 = var12.type;
 164:
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var13];
            var3 = var11.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.AVATAR_DECORATION;
            if(!(var3 !== var9)) { _fun0001_ip = 385; continue _fun0001 }
 200:
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var13];
            var3 = var11.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.PROFILE_EFFECT;
            if(!(var3 !== var9)) { _fun0001_ip = 337; continue _fun0001 }
 233:
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var13];
            var3 = var11.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.NAMEPLATE;
            if(!(var3 !== var9)) { _fun0001_ip = 268; continue _fun0001 }
 266:
            return var2;
 268:
            var9 = _closure1_slot5;
            var3 = _closure1_slot4;
            var2 = {};
            var11 = var10.overlayContainer;
            var2['style'] = var11;
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 12;
            var11 = var14[var11];
            var13 = var13.bind(var4)(var11);
            var11 = {};
            var11['item'] = var12;
            var11['isPurchased'] = var8;
            var11 = var9.bind(var4)(var13, var11);
            var2['children'] = var11;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
 337:
            var9 = _closure1_slot5;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 11;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['item'] = var12;
            var2['isPurchased'] = var8;
            var2['isDarkTheme'] = var5;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
 385:
            var9 = _closure1_slot5;
            var3 = _closure1_slot4;
            var2 = {};
            var10 = var10.overlayContainer;
            var2['style'] = var10;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 10;
            var10 = var13[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['isPurchased'] = var8;
            var10['item'] = var12;
            var12 = 100;
            var10['size'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var2['children'] = var10;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
 461:
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 9;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['isPurchased'] = var8;
            var1['deco'] = var7;
            var1['pfx'] = var6;
            var1['isDarkTheme'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var4;
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
            var2 = _closure1_slot7;
            var6 = var2.bind(var4)();
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 13;
            var3 = var14[var2];
            var7 = var8.bind(var4)(var3);
            var3 = var7.hexToRgbaString;
            var2 = var14[var2];
            var10 = var8.bind(var4)(var2);
            var9 = var10.hexWithOpacity;
            var2 = 14;
            var2 = var14[var2];
            var12 = var8.bind(var4)(var2);
            var8 = var12.useToken;
            var13 = _closure1_slot1;
            var2 = 5;
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
            var3 = _closure1_slot5;
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
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var10 = var2.product;
            var9 = var2.isDarkTheme;
            var1 = var2.isPurchased;
            var5 = var2.solidBackground;
            var4 = _closure1_slot6;
            var3 = _closure1_slot10;
            var2 = {};
            var2['product'] = var10;
            var2['isDarkTheme'] = var9;
            var2['solidBackground'] = var5;
            var7 = var1;
            if(!var7) { _fun0003_ip = 79; continue _fun0003 }
 61:
            var12 = _closure1_slot5;
            var11 = _closure1_slot8;
            var8 = undefined;
            var5 = {};
            var7 = var12.bind(var8)(var11, var5);
 79:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot9;
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
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopCardAssetTileV2.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();