// app/modules/user_offers/records/UserDiscountOfferRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.SubscriptionIntervalTypes;
    var9 = var7.DiscountUserUsageLimitIntervalTypes;
    var7 = {};
    var11 = var9.DAY;
    var10 = var8.DAY;
    var7[10] = var10;
    var11 = var9.WEEK;
    var10 = var8.DAY;
    var7[10] = var10;
    var11 = var9.MONTH;
    var10 = var8.MONTH;
    var7[10] = var10;
    var9 = var9.YEAR;
    var8 = var8.YEAR;
    var7[8] = var8;
    var _closure1_slot5 = var7;
    var2 = function(arg1) {
        var5 = function UserDiscountOfferRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var5 = this;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var2);
                var1 = _closure1_slot3;
                var10 = var1.bind(var4)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot6;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
case 8:
                var1 = var2.bind(var4)(var5, var1);
                var2 = var3.id;
                var1['id'] = var2;
                var2 = var3.discountId;
                var1['discountId'] = var2;
                var2 = var3.discount;
                var1['discount'] = var2;
                var2 = var3.userId;
                var1['userId'] = var2;
                var5 = var3.appliedAt;
                var2 = null;
                var6 = var2 != var5;
                var4 = null;
                if(!var6) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var4 = var5;
case 9:
                var1['appliedAt'] = var4;
                var5 = var3.deletedAt;
                var6 = var2 != var5;
                var4 = null;
                if(!var6) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var4 = var5;
case 11:
                var1['deletedAt'] = var4;
                var3 = var3.expiresAt;
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var2 = var3;
case 13:
                var1['expiresAt'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot4;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot1;
        var6 = {};
        var2 = 'hasExpired';
        var6['key'] = var2;
        var2 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = this;
                var3 = var2.expiresAt;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var4 = var2.expiresAt;
                var2 = var4.getTime;
                var2 = var2.bind(var4)();
                var1 = var3 > var2;
case 15:
                return var1;
            }
        };
        var6['value'] = var2;
        var2 = new Array(8);
        var2[0] = var6;
        var6 = {};
        var7 = 'isApplied';
        var6['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.appliedAt;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var6['value'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'isDeleted';
        var6['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.deletedAt;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var6['value'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'hasAcknowledged';
        var6['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.expiresAt;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var6['value'] = var7;
        var2[3] = var6;
        var6 = {};
        var7 = 'getFullIntervalCount';
        var6['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = this;
                var3 = var2.discount;
                var1 = null;
                var3 = var1 == var3;
                var1 = 0;
                if(var3) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var2 = var2.discount;
                var1 = var2.userUsageLimit;
case 17:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[4] = var6;
        var6 = {};
        var7 = 'getDiscountInterval';
        var6['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.discount;
            var1 = var1.userUsageLimitInterval;
            return var1;
        };
        var6['value'] = var7;
        var2[5] = var6;
        var6 = {};
        var7 = 'getApplicableSubscriptionInterval';
        var6['key'] = var7;
        var7 = function value() {
            var3 = this;
            var2 = _closure1_slot5;
            var1 = var3.getDiscountInterval;
            var1 = var1.bind(var3)();
            var1 = var2[var1];
            return var1;
        };
        var6['value'] = var7;
        var2[6] = var6;
        var6 = {};
        var7 = 'getIsMultiIntervalDiscount';
        var6['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = var2.getFullIntervalCount;
            var2 = var1.bind(var2)();
            var1 = 1;
            var1 = var2 > var1;
            return var1;
        };
        var6['value'] = var7;
        var2[7] = var6;
        var6 = {};
        var7 = 'createFromServer';
        var6['key'] = var7;
        var1 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var3 = _closure2_slot0;
                var1 = {};
                var2 = var4.id;
                var1['id'] = var2;
                var2 = var4.discount_id;
                var1['discountId'] = var2;
                var2 = {};
                var5 = var4.discount;
                var5 = var5.id;
                var2['id'] = var5;
                var5 = var4.discount;
                var5 = var5.plan_ids;
                var2['planIds'] = var5;
                var5 = var4.discount;
                var5 = var5.user_usage_limit_interval;
                var2['userUsageLimitInterval'] = var5;
                var5 = var4.discount;
                var5 = var5.user_usage_limit_interval_count;
                var2['userUsageLimitIntervalCount'] = var5;
                var5 = var4.discount;
                var5 = var5.user_usage_limit;
                var2['userUsageLimit'] = var5;
                var5 = var4.discount;
                var5 = var5.amount;
                var2['amount'] = var5;
                var1['discount'] = var2;
                var2 = var4.user_id;
                var1['userId'] = var2;
                var5 = var4.applied_at;
                var2 = null;
                var6 = var2 != var5;
                var5 = null;
                if(!var6) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var6 = global;
                var8 = var6.Date;
                var9 = var4.applied_at;
                var7 = var8.prototype;
                var7 = Object.create(var7, {constructor: {value: var8}});
                var10 = var7;
                var6 = new var10[var8](var9, var8);
                var5 = var6 instanceof Object ? var6 : var7;
case 19:
                var1['appliedAt'] = var5;
                var5 = var4.deleted_at;
                var6 = var2 != var5;
                var5 = null;
                if(!var6) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                var6 = global;
                var8 = var6.Date;
                var9 = var4.deleted_at;
                var7 = var8.prototype;
                var7 = Object.create(var7, {constructor: {value: var8}});
                var10 = var7;
                var6 = new var10[var8](var9, var8);
                var5 = var6 instanceof Object ? var6 : var7;
case 21:
                var1['deletedAt'] = var5;
                var5 = var4.expires_at;
                var5 = var2 != var5;
                var2 = null;
                if(!var5) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                var5 = global;
                var6 = var5.Date;
                var9 = var4.expires_at;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var10 = var5;
                var4 = new var10[var6](var9, var8);
                var2 = var4 instanceof Object ? var4 : var5;
case 23:
                var1['expiresAt'] = var2;
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
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_offers/records/UserDiscountOfferRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();