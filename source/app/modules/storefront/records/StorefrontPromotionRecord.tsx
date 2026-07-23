// app/modules/storefront/records/StorefrontPromotionRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot6 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function parseRewardConfig(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var3 = null;
            var2 = var3 == var5;
            var1 = null;
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = {};
            var4 = var5.discount;
            var4 = var3 != var4;
            var3 = null;
            if(!var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = {};
            var6 = var5.discount;
            var6 = var6.id;
            var4['id'] = var6;
            var6 = var5.discount;
            var6 = var6.type;
            var4['type'] = var6;
            var6 = var5.discount;
            var6 = var6.amount;
            var4['amount'] = var6;
            var6 = var5.discount;
            var6 = var6.fiat_enabled;
            var4['fiatEnabled'] = var6;
            var5 = var5.discount;
            var5 = var5.orbs_enabled;
            var4['orbsEnabled'] = var5;
            var3 = var4;
case 8:
            var2['discount'] = var3;
            var1 = var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function parseSkuIds(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var2 = {};
            var3 = global;
            var4 = var3.Object;
            var3 = var4.entries;
            var10 = var3.bind(var4)(var5);
            var3 = var10.length;
            var9 = 0;
            var3 = var9 < var3;
            var7 = undefined;
            var6 = 2;
            var5 = 1;
            var4 = 0;
            if(!var3) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var11 = var10[var4];
            var3 = _closure1_slot0;
            var3 = var3.bind(var7)(var11, var6);
            var11 = var3[var9];
            var12 = var3[var5];
            var3 = {};
            var12 = var12.price_tiers;
            var3['priceTiers'] = var12;
            var2[var11] = var3;
            var4 = var4 + 1;
            var3 = var10.length;
            if(var4 < var3) { _fun0003_ip = 13; continue _fun0003 }
case 12:
            return var2;
case 10:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var2 = function(arg1) {
        var5 = function StorefrontPromotionRecord(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = arg1;
                var5 = this;
                var1 = _closure1_slot1;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = _closure1_slot4;
                var10 = var1.bind(var4)(var3);
                var3 = _closure1_slot3;
                var1 = _closure1_slot6;
                var1 = var1.bind(var4)();
                if(var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0004_ip = 16; continue _fun0004;
case 14:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot4;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
case 16:
                var1 = var3.bind(var4)(var5, var1);
                var3 = var2.id;
                var1['id'] = var3;
                var3 = var2.applicationId;
                var1['applicationId'] = var3;
                var3 = var2.displayName;
                var1['displayName'] = var3;
                var3 = var2.rewardType;
                var1['rewardType'] = var3;
                var3 = var2.rewardConfig;
                var1['rewardConfig'] = var3;
                var3 = var2.skuIds;
                var1['skuIds'] = var3;
                var3 = var2.appliesToAllSkus;
                var1['appliesToAllSkus'] = var3;
                var3 = var2.startsAt;
                var1['startsAt'] = var3;
                var2 = var2.endsAt;
                var1['endsAt'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot5;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot2;
        var1 = {};
        var6 = 'createFromServer';
        var1['key'] = var6;
        var2 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var3 = _closure2_slot0;
                var1 = {};
                var2 = var4.id;
                var1['id'] = var2;
                var2 = var4.application_id;
                var1['applicationId'] = var2;
                var6 = var4.display_name;
                var2 = null;
                var7 = var2 != var6;
                var5 = null;
                if(!var7) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var5 = var6;
case 17:
                var1['displayName'] = var5;
                var5 = var4.reward_type;
                var1['rewardType'] = var5;
                var5 = var4.reward_config;
                var6 = var2 != var5;
                var5 = null;
                if(!var6) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var8 = _closure1_slot7;
                var7 = var4.reward_config;
                var6 = undefined;
                var5 = var8.bind(var6)(var7);
case 19:
                var1['rewardConfig'] = var5;
                var7 = _closure1_slot8;
                var6 = var4.sku_ids;
                var5 = undefined;
                var5 = var7.bind(var5)(var6);
                var1['skuIds'] = var5;
                var5 = var4.applies_to_all_skus;
                var1['appliesToAllSkus'] = var5;
                var5 = var4.starts_at;
                var6 = var2 != var5;
                var5 = null;
                if(!var6) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                var6 = global;
                var8 = var6.Date;
                var9 = var4.starts_at;
                var7 = var8.prototype;
                var7 = Object.create(var7, {constructor: {value: var8}});
                var10 = var7;
                var6 = new var10[var8](var9, var8);
                var5 = var6 instanceof Object ? var6 : var7;
case 21:
                var1['startsAt'] = var5;
                var5 = var4.ends_at;
                var5 = var2 != var5;
                var2 = null;
                if(!var5) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                var5 = global;
                var6 = var5.Date;
                var9 = var4.ends_at;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var10 = var5;
                var4 = new var10[var6](var9, var8);
                var2 = var4 instanceof Object ? var4 : var5;
case 23:
                var1['endsAt'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var10 = var2;
                var9 = var1;
                var1 = new var10[var3](var9, var8);
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
    var2 = var2.bind(var1)(var4);
    var4 = 7;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/storefront/records/StorefrontPromotionRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();