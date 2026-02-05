// app/modules/skus/native/SKUPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function CollectiblesSKUPreview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var8 = var2.sku;
            var _closure2_slot0 = var8;
            var12 = var2.showGradient;
            var5 = undefined;
            if(!(var12 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = true;
case 2:
            var2 = _closure1_slot9;
            var7 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var9 = var3.bind(var5)(var2);
            var4 = var9.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isThemeDark;
                var1 = _closure1_slot6;
                var1 = var1.theme;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var4.bind(var9)(var3, var2);
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var1, var2);
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var2.type;
            var3 = 'bundle';
            if(!(var3 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var2.item;
            var4 = var3.type;
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var9 = 12;
            var3 = var3[var9];
            var3 = var8.bind(var5)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.AVATAR_DECORATION;
            if(!(var3 !== var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var3 = var8.bind(var5)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.PROFILE_EFFECT;
            if(!(var3 !== var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var3 = var8.bind(var5)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.NAMEPLATE;
            if(!(var3 !== var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            return var1;
case 12:
            var8 = _closure1_slot8;
            var4 = _closure1_slot4;
            var3 = {};
            var9 = var7.container;
            var3['style'] = var9;
            var11 = _closure1_slot8;
            var10 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 15;
            var9 = var14[var9];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            var14 = var2.item;
            var9['item'] = var14;
            var14 = false;
            var9['isPurchased'] = var14;
            var9 = var11.bind(var5)(var10, var9);
            var3['children'] = var9;
            var3 = var8.bind(var5)(var4, var3);
            return var3;
case 10:
            var8 = _closure1_slot8;
            var4 = _closure1_slot4;
            var3 = {};
            var9 = var7.container;
            var3['style'] = var9;
            var11 = _closure1_slot8;
            var10 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 14;
            var9 = var14[var9];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            var14 = var2.item;
            var9['item'] = var14;
            var14 = false;
            var9['isPurchased'] = var14;
            var9['isDarkTheme'] = var13;
            var9['showGradient'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var3['children'] = var9;
            var3 = var8.bind(var5)(var4, var3);
            return var3;
case 8:
            var8 = _closure1_slot8;
            var4 = _closure1_slot4;
            var3 = {};
            var9 = var7.container;
            var3['style'] = var9;
            var11 = _closure1_slot8;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 13;
            var9 = var12[var9];
            var10 = var10.bind(var5)(var9);
            var9 = {'isPurchased': false, 'item': null, 'size': 100};
            var12 = var2.item;
            var9['item'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var3['children'] = var9;
            var3 = var8.bind(var5)(var4, var3);
            return var3;
case 6:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 9;
            var3 = var8[var3];
            var8 = var4.bind(var5)(var3);
            var4 = var8.isValidCollectiblesBundleItems;
            var3 = var2.items;
            var3 = var4.bind(var8)(var3);
            if(var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            return var1;
case 14:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 10;
            var3 = var10[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.ItemsSortingHat;
            var16 = var2.items;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var17 = var3;
            var2 = new var17[var4](var16, var15);
            var9 = var2 instanceof Object ? var2 : var3;
            var4 = _closure1_slot8;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var7.container;
            var2['style'] = var7;
            var8 = _closure1_slot8;
            var7 = _closure1_slot1;
            var6 = 11;
            var6 = var10[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var10 = false;
            var6['isPurchased'] = var10;
            var10 = var9.firstAvatarDecoration;
            var6['deco'] = var10;
            var10 = var9.firstProfileEffect;
            var6['pfx'] = var10;
            var9 = var9.firstNameplate;
            var6['nameplate'] = var9;
            var9 = 'small';
            var6['size'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function SocialLayerStorefrontSKUPreview() {
        var1 = null;
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.transformSKUToCollectiblesItem;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SKUProductLines;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': '100%', 'height': '100%', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'};
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/skus/native/SKUPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SKUPreview(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var6 = var1.sku;
            var5 = var1.showGradient;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var5 = true;
case 16:
            var3 = var6.productLine;
            var2 = _closure1_slot7;
            var2 = var2.COLLECTIBLES;
            if(!(var2 !== var3)) { _fun0002_ip = 9; continue _fun0002 }
case 18:
            var2 = _closure1_slot7;
            var2 = var2.SOCIAL_LAYER_GAME_ITEM;
            if(!(var2 !== var3)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var2 = _closure1_slot7;
            var2 = var2.APPLICATION;
            if(!(var2 !== var3)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var2 = _closure1_slot7;
            var2 = var2.BOOST;
            if(!(var2 !== var3)) { _fun0002_ip = 21; continue _fun0002 }
case 23:
            var2 = _closure1_slot7;
            var2 = var2.GUILD_ROLE;
            if(!(var2 !== var3)) { _fun0002_ip = 21; continue _fun0002 }
case 24:
            var2 = _closure1_slot7;
            var2 = var2.PREMIUM;
            if(!(var2 !== var3)) { _fun0002_ip = 21; continue _fun0002 }
case 25:
            var2 = _closure1_slot7;
            var2 = var2.GUILD_PRODUCT;
            if(!(var2 !== var3)) { _fun0002_ip = 21; continue _fun0002 }
case 26:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var2 = var7[var2];
            var7 = var3.bind(var4)(var2);
            var3 = var7.assertNever;
            var2 = var6.productLine;
            var2 = var3.bind(var7)(var2);
            return var4;
case 21:
            var2 = null;
            return var2;
case 19:
            var7 = _closure1_slot8;
            var3 = _closure1_slot11;
            var2 = {};
            var2 = var7.bind(var4)(var3, var2);
            return var2;
case 9:
            var3 = _closure1_slot8;
            var2 = _closure1_slot10;
            var1 = {};
            var1['sku'] = var6;
            var1['showGradient'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();