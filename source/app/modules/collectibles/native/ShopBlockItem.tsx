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
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ShopBlockItem.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var11 = var1.block;
            var _closure2_slot0 = var11;
            var14 = var1.screen;
            var10 = var1.preferVCPrice;
            var1 = _closure1_slot7;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 6;
            var2 = var1[var3];
            var15 = var5.bind(var4)(var2);
            var12 = var15.useStateFromStores;
            var2 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var2;
            var6 = function() {
                var1 = _closure1_slot5;
                var1 = var1.categories;
                return var1;
            };
            var15 = var12.bind(var15)(var7, var6);
            var _closure2_slot1 = var15;
            var3 = var1[var3];
            var7 = var5.bind(var4)(var3);
            var6 = var7.useStateFromStores;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot5;
                var1 = var1.products;
                return var1;
            };
            var2 = var6.bind(var7)(var3, var2);
            var _closure2_slot2 = var2;
            var3 = 7;
            var3 = var1[var3];
            var6 = var5.bind(var4)(var3);
            var3 = var6.useCardLayout;
            var3 = var3.bind(var6)();
            var6 = var3.columns;
            var12 = _closure1_slot3;
            var7 = var12.useMemo;
            var3 = new Array(3);
            var3[0] = var11;
            var15 = var15.size;
            var3[1] = var15;
            var2 = var2.size;
            var3[2] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = var1.type;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var6 = 8;
                    var3 = var3[var6];
                    var5 = undefined;
                    var3 = var7.bind(var5)(var3);
                    var3 = var3.ShopBlockType;
                    var3 = var3.HERO;
                    if(!(var4 !== var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot0;
                    var3 = var3.type;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var6];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.ShopBlockType;
                    var1 = var1.REWARD_HERO;
                    if(!(var3 !== var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
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
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var3 = _closure2_slot0;
                    var5 = var3.categoryStoreListingId;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var4 = var3.concat;
                    var3 = 'reward-hero-';
                    var1 = var4.bind(var3)(var5);
case 6:
                    _fun0002_ip = 7; continue _fun0002;
case 2:
                    var2 = _closure2_slot0;
                    var4 = var2.categoryStoreListingId;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = 'hero-';
                    var1 = var3.bind(var2)(var4);
case 7:
                    return var1;
                }
            };
            var7 = var7.bind(var12)(var2, var3);
            var2 = var11.type;
            var3 = 8;
            var1 = var1[var3];
            var1 = var5.bind(var4)(var1);
            var1 = var1.ShopBlockType;
            var1 = var1.HERO;
            if(!(var1 !== var2)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var1 = var5.bind(var4)(var1);
            var1 = var1.ShopBlockType;
            var1 = var1.FEATURED;
            if(!(var1 !== var2)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var1 = var5.bind(var4)(var1);
            var1 = var1.ShopBlockType;
            var1 = var1.FEED;
            if(!(var1 !== var2)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var1 = var5.bind(var4)(var1);
            var1 = var1.ShopBlockType;
            var1 = var1.SHELF;
            if(!(var1 !== var2)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var1 = var2.bind(var4)(var1);
            var1 = var1.ShopBlockType;
            var1 = var1.WIDE_BANNER;
case 14:
            var1 = null;
            return var1;
case 12:
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 10;
            var1 = var15[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.CollectiblesAnalyticsProvider;
            var1 = {};
            var5 = {};
            var12 = 'popular picks';
            var5['pageSection'] = var12;
            var1['newValue'] = var5;
            var12 = _closure1_slot1;
            var5 = 13;
            var5 = var15[var5];
            var12 = var12.bind(var4)(var5);
            var5 = {};
            var5['feedBlock'] = var11;
            var5['screen'] = var14;
            var5['preferVCPrice'] = var10;
            var5 = var3.bind(var4)(var12, var5, var7);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 10:
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.CollectiblesAnalyticsProvider;
            var1 = {};
            var5 = {};
            var12 = 'featured_block';
            var5['pageSection'] = var12;
            var1['newValue'] = var5;
            var12 = _closure1_slot4;
            var5 = {};
            var14 = var9.featuredContainer;
            var5['style'] = var14;
            var15 = var11.subblocks;
            var14 = var15.map;
            var13 = function(arg1, arg2) {
                var6 = arg1;
                var4 = _closure1_slot5;
                var3 = var4.getCategoryByStoreListingId;
                var1 = var6.categoryStoreListingId;
                var1 = var3.bind(var4)(var1);
                var5 = _closure1_slot6;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 12;
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
            var13 = var14.bind(var15)(var13);
            var5['children'] = var13;
            var5 = var3.bind(var4)(var12, var5, var7);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 8:
            var3 = _closure1_slot5;
            var2 = var3.getCategory;
            var1 = var11.categorySkuId;
            var1 = var2.bind(var3)(var1);
            var3 = null;
            var2 = var3 != var1;
            if(!var2) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = var1.isOrbsExclusive;
case 16:
            if(var2) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var5 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 9;
            var2 = var12[var2];
            var2 = var5.bind(var4)(var2);
            var15 = var2.COLLECTIBLES_SHOP_CARD_HEIGHT;
            _fun0001_ip = 20; continue _fun0001;
case 18:
            var2 = global;
            var5 = var2.Math;
            var2 = var5.ceil;
            var1 = var1.products;
            var1 = var1.length;
            var1 = var1 / var6;
            var6 = var2.bind(var5)(var1);
            var5 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 9;
            var2 = var12[var1];
            var2 = var5.bind(var4)(var2);
            var2 = var2.COLLECTIBLES_SHOP_CARD_HEIGHT;
            var2 = var2 * var6;
            var1 = var12[var1];
            var1 = var5.bind(var4)(var1);
            var5 = var1.COLLECTIBLES_SHOP_CARD_GAP;
            var1 = 1;
            var1 = var6 - var1;
            var1 = var5 * var1;
            var2 = var2 + var1;
            var1 = var11.mobileProductsTitle;
            var3 = var3 != var1;
            var1 = 0;
            if(!var3) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var6 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 5;
            var5 = var12[var3];
            var5 = var6.bind(var4)(var5);
            var5 = var5.spacing;
            var5 = var5.PX_24;
            var3 = var12[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_16;
            var1 = var5 + var3;
case 21:
            var15 = var2 + var1;
case 20:
            var3 = _closure1_slot6;
            var16 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 10;
            var1 = var12[var1];
            var1 = var16.bind(var4)(var1);
            var2 = var1.CollectiblesAnalyticsProvider;
            var1 = {};
            var5 = {};
            var6 = 'top 4';
            var5['pageSection'] = var6;
            var1['newValue'] = var5;
            var6 = _closure1_slot4;
            var5 = {};
            var13 = var9.heroContainer;
            var9 = new Array(2);
            var9[0] = var13;
            var13 = {};
            var14 = 275;
            var15 = var14 + var15;
            var14 = 9;
            var14 = var12[var14];
            var14 = var16.bind(var4)(var14);
            var16 = var14.COLLECTIBLES_SHOP_CARD_HEIGHT;
            var14 = 0.5;
            var14 = var14 * var16;
            var14 = var15 - var14;
            var13['height'] = var14;
            var9[1] = var13;
            var5['style'] = var9;
            var9 = _closure1_slot1;
            var8 = 11;
            var8 = var12[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var8['heroBlock'] = var11;
            var8['preferVCPrice'] = var10;
            var8 = var3.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var3.bind(var4)(var6, var5, var7);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();