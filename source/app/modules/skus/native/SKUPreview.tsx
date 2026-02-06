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
            var6 = var2.sku;
            var _closure2_slot0 = var6;
            var9 = var2.backgroundColor;
            var _closure2_slot1 = var9;
            var2 = _closure1_slot11;
            var5 = undefined;
            var13 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var7 = var3.bind(var5)(var2);
            var4 = var7.useStateFromStores;
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
            var15 = var4.bind(var7)(var3, var2);
            var7 = _closure1_slot3;
            var4 = var7.useMemo;
            var3 = new Array(1);
            var3[0] = var9;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
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
                    var3 = _closure2_slot1;
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
            var11 = var4.bind(var7)(var2, var3);
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(1);
            var2[0] = var6;
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
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 14;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.AVATAR_DECORATION;
            if(!(var3 !== var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.PROFILE_EFFECT;
            if(!(var3 !== var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.NAMEPLATE;
            if(!(var3 !== var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            return var1;
case 12:
            var6 = _closure1_slot9;
            var4 = _closure1_slot4;
            var3 = {};
            var7 = var13.container;
            var3['style'] = var7;
            var10 = _closure1_slot9;
            var8 = _closure1_slot1;
            var14 = _closure1_slot2;
            var7 = 17;
            var7 = var14[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var14 = var2.item;
            var7['item'] = var14;
            var14 = false;
            var7['isPurchased'] = var14;
            var7 = var10.bind(var5)(var8, var7);
            var3['children'] = var7;
            var3 = var6.bind(var5)(var4, var3);
            return var3;
case 10:
            var6 = _closure1_slot9;
            var4 = _closure1_slot4;
            var3 = {};
            var7 = var13.container;
            var3['style'] = var7;
            var10 = _closure1_slot9;
            var8 = _closure1_slot1;
            var14 = _closure1_slot2;
            var7 = 16;
            var7 = var14[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var14 = var2.item;
            var7['item'] = var14;
            var14 = false;
            var7['isPurchased'] = var14;
            var7['isDarkTheme'] = var15;
            var7['showGradient'] = var14;
            var7 = var10.bind(var5)(var8, var7);
            var3['children'] = var7;
            var3 = var6.bind(var5)(var4, var3);
            return var3;
case 8:
            var6 = _closure1_slot9;
            var4 = _closure1_slot4;
            var3 = {};
            var7 = var13.container;
            var3['style'] = var7;
            var10 = _closure1_slot9;
            var8 = _closure1_slot1;
            var14 = _closure1_slot2;
            var7 = 15;
            var7 = var14[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {'isPurchased': false, 'item': null, 'size': 100};
            var14 = var2.item;
            var7['item'] = var14;
            var7 = var10.bind(var5)(var8, var7);
            var3['children'] = var7;
            var3 = var6.bind(var5)(var4, var3);
            return var3;
case 6:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 10;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.isValidCollectiblesBundleItems;
            var3 = var2.items;
            var3 = var4.bind(var6)(var3);
            if(var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            return var1;
case 14:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 11;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.ItemsSortingHat;
            var18 = var2.items;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var19 = var3;
            var2 = new var19[var4](var18, var17);
            var15 = var2 instanceof Object ? var2 : var3;
            var4 = _closure1_slot10;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var13.container;
            var2['style'] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot4;
            var6 = {};
            var10 = var1 != var9;
            var9 = undefined;
            if(!var10) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var9 = var13.bundleOffset;
case 16:
            var6['style'] = var9;
            var14 = _closure1_slot9;
            var10 = _closure1_slot1;
            var16 = _closure1_slot2;
            var9 = 12;
            var9 = var16[var9];
            var10 = var10.bind(var5)(var9);
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
            var9 = var14.bind(var5)(var10, var9);
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = var1 != var11;
            if(!var7) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var10 = _closure1_slot9;
            var9 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = 13;
            var8 = var14[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var13 = var13.gradient;
            var8['style'] = var13;
            var13 = _closure1_slot8;
            var13 = var13.START;
            var8['start'] = var13;
            var12 = _closure1_slot8;
            var12 = var12.END;
            var8['end'] = var12;
            var8['colors'] = var11;
            var11 = 'none';
            var8['pointerEvents'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 18:
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function SocialLayerStorefrontSKUPreview() {
        var1 = null;
        return var1;
    };
    var _closure1_slot13 = var1;
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
    var10 = var4.StyleSheet;
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
    var7 = var4.SKUProductLines;
    var _closure1_slot7 = var7;
    var4 = var4.VerticalGradient;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': '100%', 'height': '100%', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'};
    var4['container'] = var9;
    var9 = {};
    var13 = var10.absoluteFillObject;
    var14 = var9;
    var10 = copyDataProperties(var14, var13);
    var11 = '60%';
    var10 = 'top';
    var9[var10] = var11;
    var4['gradient'] = var9;
    var9 = {};
    var10 = 20;
    var9['marginTop'] = var10;
    var4['bundleOffset'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/skus/native/SKUPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SKUPreview(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var5 = var1.sku;
            var1 = var1.backgroundColor;
            var4 = var5.productLine;
            var3 = _closure1_slot7;
            var3 = var3.COLLECTIBLES;
            if(!(var3 !== var4)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var3 = _closure1_slot7;
            var3 = var3.SOCIAL_LAYER_GAME_ITEM;
            if(!(var3 !== var4)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var3 = _closure1_slot7;
            var3 = var3.APPLICATION;
            if(!(var3 !== var4)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var3 = _closure1_slot7;
            var3 = var3.BOOST;
            if(!(var3 !== var4)) { _fun0003_ip = 24; continue _fun0003 }
case 26:
            var3 = _closure1_slot7;
            var3 = var3.GUILD_ROLE;
            if(!(var3 !== var4)) { _fun0003_ip = 24; continue _fun0003 }
case 27:
            var3 = _closure1_slot7;
            var3 = var3.PREMIUM;
            if(!(var3 !== var4)) { _fun0003_ip = 24; continue _fun0003 }
case 28:
            var3 = _closure1_slot7;
            var3 = var3.GUILD_PRODUCT;
            if(!(var3 !== var4)) { _fun0003_ip = 24; continue _fun0003 }
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
            var6 = _closure1_slot13;
            var4 = undefined;
            var3 = {};
            var3 = var7.bind(var4)(var6, var3);
            return var3;
case 20:
            var4 = _closure1_slot9;
            var3 = _closure1_slot12;
            var2 = {};
            var2['sku'] = var5;
            var2['backgroundColor'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();