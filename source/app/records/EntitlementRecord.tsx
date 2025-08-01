// app/records/EntitlementRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var7 = 6;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.EntitlementTypes;
    var _closure1_slot8 = var7;
    var2 = function(arg1) {
        var5 = function EntitlementRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var5 = this;
                var1 = _closure1_slot2;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = _closure1_slot5;
                var10 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot9;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 65; continue _fun0002 }
 52:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0002_ip = 103; continue _fun0002;
 65:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
 103:
                var1 = var3.bind(var4)(var5, var1);
                var3 = var2.id;
                var1['id'] = var3;
                var3 = var2.skuId;
                var1['skuId'] = var3;
                var3 = var2.applicationId;
                var1['applicationId'] = var3;
                var3 = var2.userId;
                var1['userId'] = var3;
                var3 = var2.gifterId;
                var1['gifterId'] = var3;
                var3 = var2.type;
                var1['type'] = var3;
                var3 = var2.branches;
                var1['branches'] = var3;
                var3 = var2.startsAt;
                var1['startsAt'] = var3;
                var3 = var2.endsAt;
                var1['endsAt'] = var3;
                var3 = var2.subscriptionId;
                var1['subscriptionId'] = var3;
                var3 = var2.subscriptionPlanId;
                var1['subscriptionPlanId'] = var3;
                var3 = var2.parentId;
                var1['parentId'] = var3;
                var3 = var2.consumed;
                var1['consumed'] = var3;
                var3 = var2.giftCodeBatchId;
                var1['giftCodeBatchId'] = var3;
                var3 = var2.giftStyle;
                var1['giftStyle'] = var3;
                var3 = var2.guildId;
                var1['guildId'] = var3;
                var3 = var2.deleted;
                var1['deleted'] = var3;
                var2 = var2.sourceType;
                var1['sourceType'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot6;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot3;
        var6 = {};
        var2 = 'isGiftable';
        var6['key'] = var2;
        var2 = function get() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = this;
                var3 = var2.type;
                var1 = _closure1_slot8;
                var1 = var1.USER_GIFT;
                var1 = var3 === var1;
                if(!var1) { _fun0003_ip = 40; continue _fun0003 }
 28:
                var3 = var2.gifterId;
                var2 = null;
                var1 = var2 == var3;
 40:
                return var1;
            }
        };
        var6['get'] = var2;
        var2 = new Array(2);
        var2[0] = var6;
        var6 = {};
        var7 = 'isValid';
        var6['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var7 = arg2;
                var2 = arguments[2];
                var1 = this;
                var5 = undefined;
                if(!(var2 === var5)) { _fun0004_ip = 17; continue _fun0004 }
 15:
                var2 = null;
 17:
                var3 = var1.isGiftable;
                if(var3) { _fun0004_ip = 280; continue _fun0004 }
 31:
                var3 = var1.deleted;
                if(var3) { _fun0004_ip = 280; continue _fun0004 }
 43:
                var6 = var1.type;
                var4 = _closure1_slot8;
                var4 = var4.PREMIUM_SUBSCRIPTION;
                if(!(var6 === var4)) { _fun0004_ip = 141; continue _fun0004 }
 65:
                var6 = var7.get;
                var4 = var1.skuId;
                var4 = var6.bind(var7)(var4);
                var6 = null;
                if(!(var6 != var4)) { _fun0004_ip = 100; continue _fun0004 }
 87:
                var4 = var4.premium;
                if(var4) { _fun0004_ip = 100; continue _fun0004 }
 96:
                var4 = false;
                return var4;
 100:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 8;
                var3 = var6[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.canInstallPremiumApplications;
                var3 = arg1;
                var3 = var4.bind(var5)(var3);
                if(var3) { _fun0004_ip = 141; continue _fun0004 }
 137:
                var3 = false;
                return var3;
 141:
                var3 = global;
                var3 = var3.Date;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var9 = var4;
                var3 = new var9[var3](var8);
                var5 = var3 instanceof Object ? var3 : var4;
                var4 = var1.startsAt;
                var3 = null;
                if(!(var3 != var4)) { _fun0004_ip = 191; continue _fun0004 }
 181:
                var4 = var1.startsAt;
                if(!(!(var5 < var4))) { _fun0004_ip = 276; continue _fun0004 }
 191:
                var4 = var1.endsAt;
                if(!(var3 != var4)) { _fun0004_ip = 211; continue _fun0004 }
 201:
                var4 = var1.endsAt;
                if(!(!(var5 >= var4))) { _fun0004_ip = 272; continue _fun0004 }
 211:
                if(!(var3 != var2)) { _fun0004_ip = 264; continue _fun0004 }
 215:
                var3 = var1.branches;
                var4 = var3.length;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0004_ip = 255; continue _fun0004 }
 232:
                var4 = var1.branches;
                var3 = var4.includes;
                var3 = var3.bind(var4)(var2);
                if(var3) { _fun0004_ip = 264; continue _fun0004 }
 251:
                var3 = false;
                return var3;
 255:
                var1 = var1.applicationId;
                if(!(var1 === var2)) { _fun0004_ip = 268; continue _fun0004 }
 264:
                var1 = true;
                return var1;
 268:
                var1 = false;
                return var1;
 272:
                var1 = false;
                return var1;
 276:
                var1 = false;
                return var1;
 280:
                var1 = false;
                return var1;
            }
        };
        var6['value'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'createFromServer';
        var6['key'] = var7;
        var1 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg1;
                var3 = _closure2_slot0;
                var1 = {};
                var2 = var4.id;
                var1['id'] = var2;
                var2 = var4.sku_id;
                var1['skuId'] = var2;
                var2 = var4.application_id;
                var1['applicationId'] = var2;
                var2 = var4.user_id;
                var1['userId'] = var2;
                var2 = var4.gifter_user_id;
                var1['gifterId'] = var2;
                var2 = var4.type;
                var1['type'] = var2;
                var5 = var4.branches;
                var2 = null;
                if(!(var2 == var5)) { _fun0005_ip = 90; continue _fun0005 }
 86:
                var5 = new Array(0);
 90:
                var1['branches'] = var5;
                var5 = var4.starts_at;
                var6 = var2 != var5;
                var5 = null;
                if(!var6) { _fun0005_ip = 144; continue _fun0005 }
 110:
                var6 = global;
                var8 = var6.Date;
                var9 = var4.starts_at;
                var7 = var8.prototype;
                var7 = Object.create(var7, {constructor: {value: var8}});
                var10 = var7;
                var6 = new var10[var8](var9, var8);
                var5 = var6 instanceof Object ? var6 : var7;
 144:
                var1['startsAt'] = var5;
                var5 = var4.ends_at;
                var6 = var2 != var5;
                var5 = null;
                if(!var6) { _fun0005_ip = 198; continue _fun0005 }
 164:
                var6 = global;
                var8 = var6.Date;
                var9 = var4.ends_at;
                var7 = var8.prototype;
                var7 = Object.create(var7, {constructor: {value: var8}});
                var10 = var7;
                var6 = new var10[var8](var9, var8);
                var5 = var6 instanceof Object ? var6 : var7;
 198:
                var1['endsAt'] = var5;
                var5 = var4.subscription_id;
                var1['subscriptionId'] = var5;
                var5 = var4.subscription_plan;
                var6 = var2 != var5;
                var5 = null;
                if(!var6) { _fun0005_ip = 240; continue _fun0005 }
 229:
                var6 = var4.subscription_plan;
                var5 = var6.id;
 240:
                var1['subscriptionPlanId'] = var5;
                var5 = var4.parent_id;
                var6 = var2 != var5;
                var5 = null;
                if(!var6) { _fun0005_ip = 266; continue _fun0005 }
 260:
                var5 = var4.parent_id;
 266:
                var1['parentId'] = var5;
                var5 = var4.consumed;
                var6 = var2 != var5;
                var5 = null;
                if(!var6) { _fun0005_ip = 292; continue _fun0005 }
 286:
                var5 = var4.consumed;
 292:
                var1['consumed'] = var5;
                var6 = var4.gift_code_batch_id;
                var7 = var2 != var6;
                var5 = null;
                if(!var7) { _fun0005_ip = 317; continue _fun0005 }
 314:
                var5 = var6;
 317:
                var1['giftCodeBatchId'] = var5;
                var5 = var4.gift_style;
                var1['giftStyle'] = var5;
                var5 = var4.guild_id;
                var1['guildId'] = var5;
                var5 = var4.deleted;
                var1['deleted'] = var5;
                var5 = var4.sku;
                var6 = var2 != var5;
                var5 = null;
                if(!var6) { _fun0005_ip = 392; continue _fun0005 }
 368:
                var8 = _closure1_slot7;
                var7 = var8.createFromServer;
                var6 = var4.sku;
                var5 = var7.bind(var8)(var6);
 392:
                var1['sku'] = var5;
                var4 = var4.source_type;
                var5 = var2 != var4;
                var2 = null;
                if(!var5) { _fun0005_ip = 417; continue _fun0005 }
 414:
                var2 = var4;
 417:
                var1['sourceType'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var10 = var2;
                var9 = var1;
                var1 = new var10[var3](var9, var8);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'records/EntitlementRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();