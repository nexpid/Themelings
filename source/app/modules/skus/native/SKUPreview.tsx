// app/modules/skus/native/SKUPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var2 = function CollectiblesPreview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.collectiblesItemData;
            var2 = _closure1_slot8;
            var4 = undefined;
            var7 = var2.bind(var4)();
            var3 = var1.type;
            var2 = 'bundle';
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var1.item;
            var3 = var2.type;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 9;
            var2 = var2[var8];
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.AVATAR_DECORATION;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var6.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.NAMEPLATE;
            if(!(var2 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = null;
            return var2;
case 8:
            var6 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var8 = var7.container;
            var2['style'] = var8;
            var10 = _closure1_slot7;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 12;
            var8 = var11[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var11 = var1.item;
            var8['item'] = var11;
            var11 = false;
            var8['isPurchased'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var2['children'] = var8;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 6:
            var6 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var8 = var7.container;
            var2['style'] = var8;
            var10 = _closure1_slot7;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 11;
            var8 = var11[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {'item': null, 'isPurchased': false, 'hideBackground': true};
            var11 = var1.item;
            var8['item'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var2['children'] = var8;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 4:
            var6 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var8 = var7.container;
            var2['style'] = var8;
            var10 = _closure1_slot7;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 10;
            var8 = var11[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {'isPurchased': false, 'item': null, 'size': 100};
            var11 = var1.item;
            var8['item'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var2['children'] = var8;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 2:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var6.isValidCollectiblesBundleItems;
            var2 = var1.items;
            var2 = var3.bind(var6)(var2);
            if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = null;
            return var2;
case 10:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 7;
            var2 = var9[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.ItemsSortingHat;
            var13 = var1.items;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var14 = var2;
            var1 = new var14[var3](var13, var12);
            var8 = var1 instanceof Object ? var1 : var2;
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var10 = var7.container;
            var6 = new Array(2);
            var6[0] = var10;
            var7 = var7.bundleContainer;
            var6[1] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot7;
            var6 = _closure1_slot1;
            var5 = 8;
            var5 = var9[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var9 = false;
            var5['isPurchased'] = var9;
            var9 = var8.firstAvatarDecoration;
            var5['deco'] = var9;
            var9 = var8.firstProfileEffect;
            var5['pfx'] = var9;
            var8 = var8.firstNameplate;
            var5['nameplate'] = var8;
            var8 = 'small';
            var5['size'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var2;
    var1 = function CollectiblesSKUPreview(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var6 = var2.sku;
            var _closure2_slot0 = var6;
            var5 = _closure1_slot3;
            var4 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var4.bind(var5)(var1, var2);
            var1 = null;
            var4 = var1 == var2;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var5 = _closure1_slot7;
            var4 = _closure1_slot9;
            var3 = {};
            var3['collectiblesItemData'] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
case 12:
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
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.transformSKUToCollectiblesItem;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.SKUProductLines;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'width': '100%', 'height': '100%', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'};
    var5['container'] = var10;
    var10 = {};
    var11 = 20;
    var10['paddingTop'] = var11;
    var5['bundleContainer'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot8 = var5;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/skus/native/SKUPreview.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function SKUPreview(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var1 = var1.sku;
            var4 = var1.productLine;
            var3 = _closure1_slot6;
            var3 = var3.COLLECTIBLES;
            if(!(var3 !== var4)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var3 = _closure1_slot6;
            var3 = var3.SOCIAL_LAYER_GAME_ITEM;
            if(!(var3 !== var4)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var3 = _closure1_slot6;
            var3 = var3.APPLICATION;
            if(!(var3 !== var4)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var3 = _closure1_slot6;
            var3 = var3.BOOST;
            if(!(var3 !== var4)) { _fun0003_ip = 18; continue _fun0003 }
case 20:
            var3 = _closure1_slot6;
            var3 = var3.GUILD_ROLE;
            if(!(var3 !== var4)) { _fun0003_ip = 18; continue _fun0003 }
case 21:
            var3 = _closure1_slot6;
            var3 = var3.PREMIUM;
            if(!(var3 !== var4)) { _fun0003_ip = 18; continue _fun0003 }
case 22:
            var3 = _closure1_slot6;
            var3 = var3.GUILD_PRODUCT;
            if(!(var3 !== var4)) { _fun0003_ip = 18; continue _fun0003 }
case 23:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 13;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.assertNever;
            var4 = var1.productLine;
            var4 = var5.bind(var6)(var4);
            return var3;
case 18:
            var3 = null;
            return var3;
case 16:
            var6 = _closure1_slot7;
            var5 = _closure1_slot11;
            var4 = undefined;
            var3 = {};
            var3 = var6.bind(var4)(var5, var3);
            return var3;
case 14:
            var4 = _closure1_slot7;
            var3 = _closure1_slot10;
            var2 = {};
            var2['sku'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['CollectiblesPreview'] = var2;
    return var1;
})();