// app/modules/collectibles/native/ShopBlockItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_32;
    var9['marginBottom'] = var12;
    var4['heroContainer'] = var9;
    var9 = {};
    var12 = '100%';
    var9['height'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['paddingHorizontal'] = var10;
    var4['featuredContainer'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'column', 'height': '100%'};
    var4['feedContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ShopBlockItem.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.block;
            var _closure2_slot0 = var9;
            var10 = var1.screen;
            var1 = _closure1_slot7;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var11 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 6;
            var2 = var1[var3];
            var14 = var11.bind(var5)(var2);
            var13 = var14.useStateFromStores;
            var2 = _closure1_slot5;
            var12 = new Array(1);
            var12[0] = var2;
            var4 = function() {
                var1 = _closure1_slot5;
                var1 = var1.categories;
                return var1;
            };
            var13 = var13.bind(var14)(var12, var4);
            var _closure2_slot1 = var13;
            var3 = var1[var3];
            var12 = var11.bind(var5)(var3);
            var4 = var12.useStateFromStores;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot5;
                var1 = var1.products;
                return var1;
            };
            var2 = var4.bind(var12)(var3, var2);
            var _closure2_slot2 = var2;
            var12 = _closure1_slot3;
            var4 = var12.useMemo;
            var3 = new Array(3);
            var3[0] = var9;
            var13 = var13.size;
            var3[1] = var13;
            var2 = var2.size;
            var3[2] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = var1.type;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 7;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.ShopBlockType;
                    var1 = var1.HERO;
                    if(!(var3 !== var1)) { _fun0002_ip = 101; continue _fun0002 }
 53:
                    var1 = _closure2_slot1;
                    var6 = var1.size;
                    var1 = _closure2_slot2;
                    var5 = var1.size;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var3 = '';
                    var1 = '-';
                    var1 = var4.bind(var3)(var6, var1, var5);
                    _fun0002_ip = 135; continue _fun0002;
 101:
                    var2 = _closure2_slot0;
                    var4 = var2.categoryStoreListingId;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = 'hero-';
                    var1 = var3.bind(var2)(var4);
 135:
                    return var1;
                }
            };
            var4 = var4.bind(var12)(var2, var3);
            var2 = 8;
            var2 = var1[var2];
            var2 = var11.bind(var5)(var2);
            var13 = var2.COLLECTIBLES_SHOP_CARD_HEIGHT;
            var2 = var9.type;
            var3 = 7;
            var1 = var1[var3];
            var1 = var11.bind(var5)(var1);
            var1 = var1.ShopBlockType;
            var1 = var1.HERO;
            if(!(var1 !== var2)) { _fun0001_ip = 465; continue _fun0001 }
 229:
            var11 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var1 = var11.bind(var5)(var1);
            var1 = var1.ShopBlockType;
            var1 = var1.FEATURED;
            if(!(var1 !== var2)) { _fun0001_ip = 409; continue _fun0001 }
 265:
            var11 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var1 = var11.bind(var5)(var1);
            var1 = var1.ShopBlockType;
            var1 = var1.FEED;
            if(!(var1 !== var2)) { _fun0001_ip = 364; continue _fun0001 }
 298:
            var11 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var1 = var11.bind(var5)(var1);
            var1 = var1.ShopBlockType;
            var1 = var1.SHELF;
            if(!(var1 !== var2)) { _fun0001_ip = 360; continue _fun0001 }
 331:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var1 = var2.bind(var5)(var1);
            var1 = var1.ShopBlockType;
            var1 = var1.WIDE_BANNER;
 360:
            var1 = null;
            return var1;
 364:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 12;
            var1 = var11[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var1['feedBlock'] = var9;
            var1['screen'] = var10;
            var1 = var3.bind(var5)(var2, var1, var4);
            return var1;
 409:
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var10 = var7.featuredContainer;
            var1['style'] = var10;
            var11 = var9.subblocks;
            var10 = var11.map;
            var8 = function(arg1, arg2) {
                var6 = arg1;
                var4 = _closure1_slot5;
                var3 = var4.getCategoryByStoreListingId;
                var1 = var6.categoryStoreListingId;
                var1 = var3.bind(var4)(var1);
                var5 = _closure1_slot6;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['featuredCategory'] = var6;
                var2['category'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var8 = var10.bind(var11)(var8);
            var1['children'] = var8;
            var1 = var3.bind(var5)(var2, var1, var4);
            return var1;
 465:
            var12 = var9.categorySkuId;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.CollectiblesCategorySkuId;
            var11 = var1.ORB;
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var8 = var7.heroContainer;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = {};
            var10 = undefined;
            if(!(var12 !== var11)) { _fun0001_ip = 563; continue _fun0001 }
 535:
            var11 = 275;
            var12 = var11 + var13;
            var11 = 0.5;
            var11 = var11 * var13;
            var10 = var12 - var11;
 563:
            var8['height'] = var10;
            var7[1] = var8;
            var1['style'] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 10;
            var6 = var10[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['heroBlock'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var1['children'] = var6;
            var1 = var3.bind(var5)(var2, var1, var4);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();