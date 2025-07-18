// app/records/SubscriptionPlanRecord.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var6 = native3;
    var3 = native6;
    var8 = native7;
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
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var4 = function getPriceFromServer(arg1, arg2) {
        var2 = arg1;
        var1 = {};
        var3 = var2.amount;
        var1['amount'] = var3;
        var2 = var2.currency;
        var1['currency'] = var2;
        var2 = 0;
        var1['tax'] = var2;
        var2 = arg2;
        var1['taxInclusive'] = var2;
        return var1;
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot0 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot1 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 5;
    var5 = var8[var5];
    var6 = var6.bind(var1)(var5);
    var5 = 6;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var9 = var5.PremiumSubscriptionSKUs;
    var _closure1_slot5 = var9;
    var9 = var5.PremiumTypes;
    var _closure1_slot6 = var9;
    var5 = var5.SubscriptionPlans;
    var _closure1_slot7 = var5;
    var5 = function(arg1) {
        var5 = function SubscriptionPlanRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var5 = this;
                var1 = _closure1_slot0;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = _closure1_slot3;
                var10 = var1.bind(var4)(var3);
                var3 = _closure1_slot2;
                var1 = _closure1_slot8;
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
                var6 = _closure1_slot3;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
 103:
                var1 = var3.bind(var4)(var5, var1);
                var3 = var2.id;
                var1['id'] = var3;
                var3 = var2.name;
                var1['name'] = var3;
                var3 = var2.interval;
                var1['interval'] = var3;
                var3 = var2.intervalCount;
                var1['intervalCount'] = var3;
                var3 = var2.taxInclusive;
                var1['taxInclusive'] = var3;
                var3 = var2.skuId;
                var1['skuId'] = var3;
                var3 = var2.currency;
                var1['currency'] = var3;
                var3 = var2.price;
                var1['price'] = var3;
                var2 = var2.prices;
                var1['prices'] = var2;
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
        var2 = 'premiumSubscriptionType';
        var6['key'] = var2;
        var2 = function get() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = this;
                var3 = var1.skuId;
                var2 = _closure1_slot5;
                var2 = var2.LEGACY;
                if(!(var2 !== var3)) { _fun0003_ip = 96; continue _fun0003 }
 26:
                var2 = _closure1_slot5;
                var2 = var2.TIER_2;
                if(!(var2 !== var3)) { _fun0003_ip = 96; continue _fun0003 }
 40:
                var2 = _closure1_slot5;
                var2 = var2.TIER_1;
                if(!(var2 !== var3)) { _fun0003_ip = 84; continue _fun0003 }
 54:
                var2 = _closure1_slot5;
                var2 = var2.TIER_0;
                if(!(var2 !== var3)) { _fun0003_ip = 72; continue _fun0003 }
 68:
                var2 = null;
                return var2;
 72:
                var2 = _closure1_slot6;
                var2 = var2.TIER_0;
                return var2;
 84:
                var2 = _closure1_slot6;
                var2 = var2.TIER_1;
                return var2;
 96:
                var1 = _closure1_slot6;
                var1 = var1.TIER_2;
                return var1;
            }
        };
        var6['get'] = var2;
        var2 = new Array(2);
        var2[0] = var6;
        var6 = {};
        var7 = 'toServerData';
        var6['key'] = var7;
        var7 = function value() {
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = {};
            var _closure3_slot1 = var3;
            var4 = global;
            var6 = var4.Object;
            var5 = var6.keys;
            var4 = var2.prices;
            var5 = var5.bind(var6)(var4);
            var4 = var5.forEach;
            var1 = function(arg1) {
                var3 = arg1;
                var2 = _closure3_slot0;
                var2 = var2.prices;
                var4 = var2[var3];
                var2 = _closure3_slot1;
                var1 = {};
                var5 = {};
                var6 = var4.countryPrices;
                var6 = var6.countryCode;
                var5['country_code'] = var6;
                var6 = var4.countryPrices;
                var6 = var6.prices;
                var5['prices'] = var6;
                var1['country_prices'] = var5;
                var4 = var4.paymentSourcePrices;
                var1['payment_source_prices'] = var4;
                var2[var3] = var1;
                var1 = undefined;
                return var1;
            };
            var1 = var4.bind(var5)(var1);
            var1 = {};
            var4 = var2.id;
            var1['id'] = var4;
            var4 = var2.name;
            var1['name'] = var4;
            var4 = var2.skuId;
            var1['sku_id'] = var4;
            var4 = var2.interval;
            var1['interval'] = var4;
            var4 = var2.intervalCount;
            var1['interval_count'] = var4;
            var4 = var2.taxInclusive;
            var1['tax_inclusive'] = var4;
            var4 = var2.currency;
            var1['currency'] = var4;
            var4 = var2.price;
            var1['price'] = var4;
            var1['prices'] = var3;
            var2 = var2.price;
            var1['price_tier'] = var2;
            return var1;
        };
        var6['value'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'createFromServer';
        var6['key'] = var7;
        var1 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = arg1;
                var _closure3_slot0 = var4;
                var2 = {};
                var5 = var4.prices;
                var3 = null;
                if(!(var3 != var5)) { _fun0004_ip = 66; continue _fun0004 }
 23:
                var3 = global;
                var6 = var3.Object;
                var5 = var6.keys;
                var3 = var4.prices;
                var6 = var5.bind(var6)(var3);
                var5 = var6.reduce;
                var3 = function(arg1, arg2) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var1 = arg1;
                        var3 = arg2;
                        var5 = _closure3_slot0;
                        var6 = var5.prices;
                        var5 = null;
                        if(!(var5 != var6)) { _fun0005_ip = 157; continue _fun0005 }
 30:
                        var2 = _closure3_slot0;
                        var2 = var2.prices;
                        var5 = var2[var3];
                        var2 = {};
                        var6 = {};
                        var7 = var5.country_prices;
                        var7 = var7.country_code;
                        var6['countryCode'] = var7;
                        var7 = var5.country_prices;
                        var9 = var7.prices;
                        var8 = var9.map;
                        var7 = function(arg1) {
                            var4 = _closure1_slot9;
                            var1 = _closure3_slot0;
                            var3 = var1.tax_inclusive;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var4.bind(var2)(var1, var3);
                            return var1;
                        };
                        var7 = var8.bind(var9)(var7);
                        var6['prices'] = var7;
                        var2['countryPrices'] = var6;
                        var6 = global;
                        var7 = var6.Object;
                        var6 = var7.entries;
                        var5 = var5.payment_source_prices;
                        var7 = var6.bind(var7)(var5);
                        var6 = var7.reduce;
                        var5 = function(arg1, arg2) {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                var1 = arg1;
                                var6 = arg2;
                                var2 = var6[Symbol.iterator];
                                var6 = var2().next;
                                var5 = var6().value;
                                var3 = var2;
                                var8 = undefined;
                                var4 = var3 === var8;
                                var3 = undefined;
                                if(var4) { _fun0006_ip = 30; continue _fun0006 }
 27:
                                var3 = var5;
 30:
                                var5 = undefined;
                                if(var4) { _fun0006_ip = 60; continue _fun0006 }
 35:
                                var7 = var6().value;
                                var6 = var2;
                                var6 = var6 === var8;
                                var5 = undefined;
                                var4 = var6;
                                if(var6) { _fun0006_ip = 60; continue _fun0006 }
 54:
                                var5 = var7;
                                var4 = var6;
 60:
                                if(var4) { _fun0006_ip = 66; continue _fun0006 }
 63:
                                var2.return();
 66:
                                var4 = var5.map;
                                var2 = function(arg1) {
                                    var4 = _closure1_slot9;
                                    var1 = _closure3_slot0;
                                    var3 = var1.tax_inclusive;
                                    var2 = undefined;
                                    var1 = arg1;
                                    var1 = var4.bind(var2)(var1, var3);
                                    return var1;
                                };
                                var2 = var4.bind(var5)(var2);
                                var1[var3] = var2;
                                return var1;
                            }
                        };
                        var4 = {};
                        var4 = var6.bind(var7)(var5, var4);
                        var2['paymentSourcePrices'] = var4;
                        var1[var3] = var2;
                        return var1;
 157:
                        return var1;
                    }
                };
                var1 = {};
                var2 = var5.bind(var6)(var3, var1);
 66:
                var3 = _closure2_slot0;
                var1 = {};
                var5 = var4.id;
                var1['id'] = var5;
                var5 = var4.name;
                var1['name'] = var5;
                var5 = var4.interval;
                var1['interval'] = var5;
                var5 = var4.interval_count;
                var1['intervalCount'] = var5;
                var5 = var4.tax_inclusive;
                var1['taxInclusive'] = var5;
                var5 = var4.sku_id;
                var1['skuId'] = var5;
                var5 = var4.currency;
                var1['currency'] = var5;
                var4 = var4.price;
                var1['price'] = var4;
                var1['prices'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var9 = var2;
                var8 = var1;
                var1 = new var9[var3](var8, var7);
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
    var5 = var5.bind(var1)(var6);
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'records/SubscriptionPlanRecord.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['getPriceFromServer'] = var4;
    var2 = function isNoneSubscription(arg1) {
        var1 = _closure1_slot7;
        var2 = var1.NONE_MONTH;
        var3 = new Array(4);
        var3[0] = var2;
        var2 = var1.NONE_3_MONTH;
        var3[1] = var2;
        var2 = var1.NONE_6_MONTH;
        var3[2] = var2;
        var1 = var1.NONE_YEAR;
        var3[3] = var1;
        var2 = var3.includes;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isNoneSubscription'] = var2;
    return var1;
})();