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
    var1 = function parseTenantMetadata(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var4 = var3.collectibles;
            var2 = null;
            var4 = var2 != var4;
            var5 = undefined;
            var2 = undefined;
            if(!var4) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var4 = _closure1_slot10;
            var3 = var3.collectibles;
            var2 = var4.bind(var5)(var3);
case 14:
            var1['collectibles'] = var2;
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function parseCollectiblesTenantMetadata(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var7 = arg1;
            var1 = {};
            var3 = var7.reward;
            var8 = null;
            var4 = var8 == var3;
            var2 = undefined;
            if(var4) { _fun0005_ip = 16; continue _fun0005 }
case 17:
            var3 = var3.storefront;
            var4 = var8 == var3;
            var2 = undefined;
            if(var4) { _fun0005_ip = 16; continue _fun0005 }
case 18:
            var2 = var3.nagbar;
case 16:
            var3 = var8 != var2;
            var2 = undefined;
            if(!var3) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var3 = {};
            var4 = {};
            var5 = {};
            var9 = var7.reward;
            var9 = var9.storefront;
            var9 = var9.nagbar;
            var10 = var9.header_text;
            var11 = var8 != var10;
            var9 = undefined;
            if(!var11) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var9 = var10;
case 21:
            var5['headerText'] = var9;
            var9 = var7.reward;
            var9 = var9.storefront;
            var9 = var9.nagbar;
            var9 = var9.cta;
            var10 = var8 != var9;
            var9 = undefined;
            if(!var10) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var10 = {};
            var11 = var7.reward;
            var11 = var11.storefront;
            var11 = var11.nagbar;
            var11 = var11.cta;
            var12 = var11.text;
            var13 = var8 != var12;
            var11 = undefined;
            if(!var13) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var11 = var12;
case 25:
            var10['text'] = var11;
            var9 = var10;
case 23:
            var5['cta'] = var9;
            var7 = var7.reward;
            var7 = var7.storefront;
            var7 = var7.nagbar;
            var7 = var7.help_center_id;
            var8 = var8 != var7;
            var6 = undefined;
            if(!var8) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var6 = var7;
case 27:
            var5['helpCenterId'] = var6;
            var4['nagbar'] = var5;
            var3['storefront'] = var4;
            var2 = var3;
case 19:
            var1['reward'] = var2;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                if(var1) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0006_ip = 31; continue _fun0006;
case 29:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot4;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
case 31:
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
                var3 = var2.endsAt;
                var1['endsAt'] = var3;
                var2 = var2.tenantMetadata;
                var1['tenantMetadata'] = var2;
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
                if(!var7) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                var5 = var6;
case 32:
                var1['displayName'] = var5;
                var5 = var4.reward_type;
                var1['rewardType'] = var5;
                var5 = var4.reward_config;
                var6 = var2 != var5;
                var5 = null;
                if(!var6) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                var8 = _closure1_slot7;
                var7 = var4.reward_config;
                var6 = undefined;
                var5 = var8.bind(var6)(var7);
case 34:
                var1['rewardConfig'] = var5;
                var8 = _closure1_slot8;
                var7 = var4.sku_ids;
                var6 = undefined;
                var7 = var8.bind(var6)(var7);
                var1['skuIds'] = var7;
                var7 = var4.applies_to_all_skus;
                var1['appliesToAllSkus'] = var7;
                var7 = var4.starts_at;
                var8 = var2 != var7;
                var7 = null;
                if(!var8) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                var8 = global;
                var10 = var8.Date;
                var11 = var4.starts_at;
                var9 = var10.prototype;
                var9 = Object.create(var9, {constructor: {value: var10}});
                var12 = var9;
                var8 = new var12[var10](var11, var10);
                var7 = var8 instanceof Object ? var8 : var9;
case 36:
                var1['startsAt'] = var7;
                var7 = var4.ends_at;
                var8 = var2 != var7;
                var7 = null;
                if(!var8) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                var8 = global;
                var10 = var8.Date;
                var11 = var4.ends_at;
                var9 = var10.prototype;
                var9 = Object.create(var9, {constructor: {value: var10}});
                var12 = var9;
                var8 = new var12[var10](var11, var10);
                var7 = var8 instanceof Object ? var8 : var9;
case 38:
                var1['endsAt'] = var7;
                var7 = var4.tenant_metadata;
                var7 = var2 != var7;
                var2 = null;
                if(!var7) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                var5 = _closure1_slot9;
                var4 = var4.tenant_metadata;
                var2 = var5.bind(var6)(var4);
case 40:
                var1['tenantMetadata'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var11 = var1;
                var1 = new var12[var3](var11, var10);
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