// app/modules/collectibles/records/CollectiblesProductRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot5;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var1 = _closure1_slot14;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = new Array(0);
case 5:
            var5 = _closure1_slot5;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 7: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 8: // try_end0
            _fun0002_ip = 9; continue _fun0002;
case 10: // catch_target0
            CatchBlockStart(arg_register=1);
case 9:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _superPropGet(arg1, arg2, arg3, arg4) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var7 = arg3;
            var _closure2_slot0 = var7;
            var6 = _closure1_slot6;
            var4 = _closure1_slot5;
            var3 = 1;
            var1 = 2;
            var8 = var3 & var1;
            var3 = var5;
            if(!var8) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var3 = var5.prototype;
case 11:
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = 'fromServer';
            var5 = var6.bind(var5)(var4, var3, var7);
            var _closure2_slot1 = var5;
            var3 = var1 & var1;
            var1 = var5;
            if(!var3) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var4 = 'function';
            var3 = typeof var5;
            var1 = var5;
            if(!(var4 === var3)) { _fun0003_ip = 13; continue _fun0003 }
case 15:
            var1 = function(arg1) {
                var4 = _closure2_slot1;
                var3 = var4.apply;
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
case 13:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.createCollectiblesItemsFromServerResponse;
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var7[var2];
    var4 = var4.bind(var1)(var2);
    var2 = 9;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.REWARD_CATEGORY_AND_REWARD_SKU_IDS;
    var _closure1_slot10 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.PREMIUM_TYPE_NONE;
    var _closure1_slot11 = var2;
    var2 = function(arg1) {
        var5 = function CollectiblesProductRecord(arg1) {
            var2 = arg1;
            var6 = this;
            var3 = _closure1_slot2;
            var5 = _closure2_slot0;
            var4 = undefined;
            var3 = var3.bind(var4)(var6, var5);
            var3 = _closure1_slot13;
            var1 = new Array(1);
            var1[0] = var2;
            var1 = var3.bind(var4)(var6, var5, var1);
            var3 = var2.summary;
            var1['summary'] = var3;
            var3 = var2.type;
            var1['type'] = var3;
            var3 = var2.premiumType;
            var1['premiumType'] = var3;
            var3 = var2.items;
            var1['items'] = var3;
            var3 = var2.categorySkuId;
            var1['categorySkuId'] = var3;
            var3 = var2.isCategoryReward;
            var1['isCategoryReward'] = var3;
            var3 = var2.prices;
            var1['prices'] = var3;
            var3 = var2.bundledProducts;
            var1['bundledProducts'] = var3;
            var3 = var2.previewAssets;
            var1['previewAssets'] = var3;
            var3 = var2.googleSkuIds;
            var1['googleSkuIds'] = var3;
            var3 = var2.variants;
            var1['variants'] = var3;
            var2 = var2.eligibleOffers;
            var1['eligibleOffers'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot7;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot3;
        var1 = {};
        var6 = 'fromServer';
        var1['key'] = var6;
        var2 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = arg1;
                var15 = var3.type;
                var11 = var3.premium_type;
                var13 = var3.category_sku_id;
                var9 = var3.prices;
                var12 = var3.bundled_products;
                var10 = var3.preview_assets;
                var7 = var3.variants;
                var2 = {'type': 0, 'premium_type': 0, 'category_sku_id': 0, 'prices': 0, 'bundled_products': 0, 'preview_assets': 0, 'variants': 0};
                var6 = null;
                var22 = var2;
                var21 = null;
                var1 = silentSetPrototypeOf(var22, var21);
                var22 = {};
                var21 = var3;
                var20 = var2;
                var2 = copyDataProperties(var22, var21, var20);
                var _closure3_slot0 = var2;
                var3 = _closure2_slot0;
                var1 = {};
                var18 = _closure1_slot15;
                var5 = undefined;
                var21 = 'fromServer';
                var20 = this;
                var19 = 2;
                var23 = undefined;
                var22 = var3;
                var16 = var23[var18](var22, var21, var20, var19, var18);
                var14 = new Array(1);
                var14[0] = var2;
                var21 = var16.bind(var5)(var14);
                var22 = var1;
                var14 = copyDataProperties(var22, var21);
                var14 = 'type';
                var1[13] = var15;
                var15 = _closure1_slot11;
                var14 = null;
                if(!(var11 !== var15)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var14 = var11;
case 16:
                var11 = 'premiumType';
                var1[10] = var14;
                var11 = 'categorySkuId';
                var1[10] = var13;
                var13 = _closure1_slot10;
                var11 = var13.some;
                var8 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.rewardSkuId;
                    var1 = _closure3_slot0;
                    var1 = var1.sku_id;
                    var1 = var2 === var1;
                    return var1;
                };
                var11 = var11.bind(var13)(var8);
                var8 = 'isCategoryReward';
                var1[7] = var11;
                var11 = _closure1_slot0;
                var13 = _closure1_slot1;
                var8 = 11;
                var8 = var13[var8];
                var8 = var11.bind(var5)(var8);
                var9 = var8.bind(var5)(var9);
                var8 = 'prices';
                var1[7] = var9;
                var9 = _closure1_slot9;
                var8 = var2.items;
                var9 = var9.bind(var5)(var8);
                var8 = 'items';
                var1[7] = var9;
                var8 = var6 == var12;
                var9 = undefined;
                if(var8) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var11 = var12.map;
                var8 = _closure1_slot8;
                var8 = var8.fromServer;
                var9 = var11.bind(var12)(var8);
case 18:
                var8 = 'bundledProducts';
                var1[7] = var9;
                var8 = var6 != var10;
                var9 = undefined;
                if(!var8) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                var8 = {};
                var11 = var10.fg_static;
                var8['fgStatic'] = var11;
                var11 = var10.fg_animated;
                var8['fgAnimated'] = var11;
                var11 = var10.bg_static;
                var8['bgStatic'] = var11;
                var10 = var10.bg_animated;
                var8['bgAnimated'] = var10;
                var9 = var8;
case 20:
                var8 = 'previewAssets';
                var1[7] = var9;
                var6 = var6 == var7;
                var5 = undefined;
                if(var6) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var6 = var7.map;
                var4 = _closure1_slot12;
                var4 = var4.fromServer;
                var5 = var6.bind(var7)(var4);
case 22:
                var4 = 'variants';
                var1[3] = var5;
                var5 = var2.google_sku_ids;
                var4 = 'googleSkuIds';
                var1[3] = var5;
                var4 = var2.eligible_offers;
                var2 = 'eligibleOffers';
                var1[1] = var4;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var23 = var2;
                var22 = var1;
                var1 = new var23[var3](var22, var21);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = null;
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var4 = var2.bind(var1)(var4);
    var2 = function(arg1) {
        var5 = function CollectiblesVariantProductRecord(arg1) {
            var2 = arg1;
            var6 = this;
            var3 = _closure1_slot2;
            var5 = _closure2_slot0;
            var4 = undefined;
            var3 = var3.bind(var4)(var6, var5);
            var3 = _closure1_slot13;
            var1 = new Array(1);
            var1[0] = var2;
            var1 = var3.bind(var4)(var6, var5, var1);
            var3 = var2.baseVariantName;
            var1['baseVariantName'] = var3;
            var3 = var2.baseVariantSkuId;
            var1['baseVariantSkuId'] = var3;
            var3 = var2.variantLabel;
            var1['variantLabel'] = var3;
            var2 = var2.variantValue;
            var1['variantValue'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot7;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot3;
        var1 = {};
        var6 = 'fromServer';
        var1['key'] = var6;
        var2 = function value(arg1) {
            var3 = arg1;
            var7 = var3.base_variant_name;
            var6 = var3.base_variant_sku_id;
            var5 = var3.variant_label;
            var4 = var3.variant_value;
            var2 = {'base_variant_name': 0, 'base_variant_sku_id': 0, 'variant_label': 0, 'variant_value': 0};
            var15 = null;
            var16 = var2;
            var1 = silentSetPrototypeOf(var16, var15);
            var16 = {};
            var15 = var3;
            var14 = var2;
            var10 = copyDataProperties(var16, var15, var14);
            var3 = _closure2_slot0;
            var1 = {};
            var12 = _closure1_slot15;
            var9 = undefined;
            var15 = 'fromServer';
            var14 = this;
            var13 = 2;
            var17 = undefined;
            var16 = var3;
            var8 = var17[var12](var16, var15, var14, var13, var12);
            var2 = new Array(1);
            var2[0] = var10;
            var15 = var8.bind(var9)(var2);
            var16 = var1;
            var2 = copyDataProperties(var16, var15);
            var2 = 'baseVariantName';
            var1[1] = var7;
            var2 = 'baseVariantSkuId';
            var1[1] = var6;
            var2 = 'variantLabel';
            var1[1] = var5;
            var2 = 'variantValue';
            var1[1] = var4;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var17 = var2;
            var16 = var1;
            var1 = new var17[var3](var16, var15);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = null;
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var _closure1_slot12 = var2;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/records/CollectiblesProductRecord.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['CollectiblesVariantProductRecord'] = var2;
    return var1;
})();