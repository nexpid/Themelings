// app/modules/skus/native/SKUPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function CollectiblesPreview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = var3.collectiblesItemData;
            var9 = var3.backgroundColor;
            var _closure2_slot0 = var9;
            var3 = _closure1_slot11;
            var4 = undefined;
            var12 = var3.bind(var4)();
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 7;
            var3 = var6[var3];
            var7 = var5.bind(var4)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
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
            var14 = var6.bind(var7)(var5, var3);
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var3 = new Array(1);
            var3[0] = var9;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var2 = var1 != var2;
                    if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 9;
                    var2 = var7[var4];
                    var5 = undefined;
                    var2 = var6.bind(var5)(var2);
                    var3 = _closure2_slot0;
                    var9 = var2.bind(var5)(var3);
                    var8 = var9.alpha;
                    var2 = 0;
                    var8 = var8.bind(var9)(var2);
                    var2 = var8.css;
                    var8 = var2.bind(var8)();
                    var2 = new Array(3);
                    var2[0] = var8;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var6 = var4.bind(var5)(var3);
                    var5 = var6.alpha;
                    var4 = 0.6;
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.css;
                    var4 = var4.bind(var5)();
                    var2[1] = var4;
                    var2[2] = var3;
                    var1 = var2;
case 2:
                    return var1;
                }
            };
            var10 = var5.bind(var6)(var2, var3);
            var3 = var1.type;
            var2 = 'bundle';
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var1.item;
            var3 = var2.type;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 14;
            var2 = var2[var6];
            var2 = var5.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.AVATAR_DECORATION;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            if(!(var2 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.NAMEPLATE;
            if(!(var2 !== var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = null;
            return var2;
case 10:
            var5 = _closure1_slot9;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var12.container;
            var2['style'] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 17;
            var6 = var13[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var13 = var1.item;
            var6['item'] = var13;
            var13 = false;
            var6['isPurchased'] = var13;
            var6 = var8.bind(var4)(var7, var6);
            var2['children'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
case 8:
            var5 = _closure1_slot9;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var12.container;
            var2['style'] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 16;
            var6 = var13[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var13 = var1.item;
            var6['item'] = var13;
            var13 = false;
            var6['isPurchased'] = var13;
            var6['isDarkTheme'] = var14;
            var6['showGradient'] = var13;
            var6 = var8.bind(var4)(var7, var6);
            var2['children'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
case 6:
            var5 = _closure1_slot9;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var12.container;
            var2['style'] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 15;
            var6 = var13[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {'isPurchased': false, 'item': null, 'size': 100};
            var13 = var1.item;
            var6['item'] = var13;
            var6 = var8.bind(var4)(var7, var6);
            var2['children'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
case 4:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 10;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.isValidCollectiblesBundleItems;
            var2 = var1.items;
            var2 = var3.bind(var5)(var2);
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = null;
            return var2;
case 12:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 11;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.ItemsSortingHat;
            var18 = var1.items;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var19 = var2;
            var1 = new var19[var3](var18, var17);
            var15 = var1 instanceof Object ? var1 : var2;
            var3 = _closure1_slot10;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var12.container;
            var1['style'] = var5;
            var8 = _closure1_slot9;
            var7 = _closure1_slot4;
            var5 = {};
            var6 = null;
            var13 = var6 != var9;
            var9 = undefined;
            if(!var13) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var9 = var12.bundleOffset;
case 14:
            var5['style'] = var9;
            var14 = _closure1_slot9;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var9 = 12;
            var9 = var16[var9];
            var13 = var13.bind(var4)(var9);
            var9 = {};
            var16 = false;
            var9['isPurchased'] = var16;
            var16 = var15.firstAvatarDecoration;
            var9['deco'] = var16;
            var16 = var15.firstProfileEffect;
            var9['pfx'] = var16;
            var15 = var15.firstNameplate;
            var9['nameplate'] = var15;
            var15 = 'small';
            var9['size'] = var15;
            var9 = var14.bind(var4)(var13, var9);
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var6 = var6 != var10;
            if(!var6) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var9 = _closure1_slot9;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 13;
            var7 = var13[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var12 = var12.gradient;
            var7['style'] = var12;
            var12 = _closure1_slot8;
            var12 = var12.START;
            var7['start'] = var12;
            var11 = _closure1_slot8;
            var11 = var11.END;
            var7['end'] = var11;
            var7['colors'] = var10;
            var10 = 'none';
            var7['pointerEvents'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 16:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var2;
    var1 = function CollectiblesSKUPreview(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var7 = var2.sku;
            var _closure2_slot0 = var7;
            var2 = var2.backgroundColor;
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var4 = new Array(1);
            var4[0] = var7;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var6 = var5.bind(var6)(var1, var4);
            var1 = null;
            var4 = var1 == var6;
            if(var4) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var5 = _closure1_slot9;
            var4 = _closure1_slot12;
            var3 = {};
            var3['collectiblesItemData'] = var6;
            var3['backgroundColor'] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
case 18:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function SocialLayerStorefrontSKUPreview() {
        var1 = null;
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var11 = var5.StyleSheet;
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.transformSKUToCollectiblesItem;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.SKUProductLines;
    var _closure1_slot7 = var8;
    var5 = var5.VerticalGradient;
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot9 = var8;
    var5 = var5.jsxs;
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'width': '100%', 'height': '100%', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'};
    var5['container'] = var10;
    var10 = {};
    var14 = var11.absoluteFillObject;
    var15 = var10;
    var11 = copyDataProperties(var15, var14);
    var12 = '60%';
    var11 = 'top';
    var10[var11] = var12;
    var5['gradient'] = var10;
    var10 = {};
    var11 = 20;
    var10['marginTop'] = var11;
    var5['bundleOffset'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot11 = var5;
    var5 = 19;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/skus/native/SKUPreview.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function SKUPreview(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var5 = var1.sku;
            var1 = var1.backgroundColor;
            var4 = var5.productLine;
            var3 = _closure1_slot7;
            var3 = var3.COLLECTIBLES;
            if(!(var3 !== var4)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var3 = _closure1_slot7;
            var3 = var3.SOCIAL_LAYER_GAME_ITEM;
            if(!(var3 !== var4)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var3 = _closure1_slot7;
            var3 = var3.APPLICATION;
            if(!(var3 !== var4)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var3 = _closure1_slot7;
            var3 = var3.BOOST;
            if(!(var3 !== var4)) { _fun0004_ip = 24; continue _fun0004 }
case 26:
            var3 = _closure1_slot7;
            var3 = var3.GUILD_ROLE;
            if(!(var3 !== var4)) { _fun0004_ip = 24; continue _fun0004 }
case 27:
            var3 = _closure1_slot7;
            var3 = var3.PREMIUM;
            if(!(var3 !== var4)) { _fun0004_ip = 24; continue _fun0004 }
case 28:
            var3 = _closure1_slot7;
            var3 = var3.GUILD_PRODUCT;
            if(!(var3 !== var4)) { _fun0004_ip = 24; continue _fun0004 }
case 29:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 18;
            var4 = var4[var3];
            var3 = undefined;
            var7 = var6.bind(var3)(var4);
            var6 = var7.assertNever;
            var4 = var5.productLine;
            var4 = var6.bind(var7)(var4);
            return var3;
case 24:
            var3 = null;
            return var3;
case 22:
            var7 = _closure1_slot9;
            var6 = _closure1_slot14;
            var4 = undefined;
            var3 = {};
            var3 = var7.bind(var4)(var6, var3);
            return var3;
case 20:
            var4 = _closure1_slot9;
            var3 = _closure1_slot13;
            var2 = {};
            var2['sku'] = var5;
            var2['backgroundColor'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['CollectiblesPreview'] = var2;
    return var1;
})();