// app/modules/billing/native/StorekitIAPQueue.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function mapToIAPProduct(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1;
            var4 = '';
            var1 = var1.countryCode;
            var5 = null;
            if(!(var5 != var1)) { _fun0001_ip = 69; continue _fun0001 }
 22:
            var1 = var3;
            var1 = var1.countryCode;
            var2 = var1.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0001_ip = 69; continue _fun0001 }
 42: // try_start_0
            var6 = _closure1_slot5;
            var1 = var3;
            var2 = var1.countryCode;
            var1 = undefined;
            var4 = var6.bind(var1)(var2);
 65: // try_end0
            _fun0001_ip = 69; continue _fun0001;
 67: // catch_target0
            CatchBlockStart(arg_register=0);
 69:
            var1 = {};
            var6 = var3;
            var2 = var6.productId;
            var1['identifier'] = var2;
            var2 = global;
            var8 = var2.parseFloat;
            var7 = var6.price;
            var2 = undefined;
            var7 = var8.bind(var2)(var7);
            var1['price'] = var7;
            var8 = var6.localizedPrice;
            var6 = var5 == var8;
            var5 = undefined;
            if(var6) { _fun0001_ip = 156; continue _fun0001 }
 126:
            var7 = var8.split;
            var6 = /[0-9]/;
            var7 = var7.bind(var8)(var6);
            var6 = 0;
            var5 = var7[var6];
 156:
            var1['currencySymbol'] = var5;
            var5 = var3;
            var7 = var5.currency;
            var6 = var7.toLowerCase;
            var6 = var6.bind(var7)();
            var1['currencyCode'] = var6;
            var6 = var5.price;
            var1['priceString'] = var6;
            var1['countryCode'] = var4;
            var4 = false;
            var1['downloadable'] = var4;
            var4 = var5.description;
            var1['description'] = var4;
            var4 = var5.title;
            var1['title'] = var4;
            var4 = 'discounts';
            var4 = var4 in var5;
            var2 = undefined;
            if(!var4) { _fun0001_ip = 245; continue _fun0001 }
 239:
            var2 = var3.discounts;
 245:
            var1['discounts'] = var2;
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function productSK2ToIAPProduct(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = new Array(0);
            var1 = var3.subscription;
            var1 = var1.promotionalOffers;
            var4 = null;
            if(!(var4 != var1)) { _fun0002_ip = 54; continue _fun0002 }
 25:
            var1 = var3.subscription;
            var6 = var1.promotionalOffers;
            var5 = var6.map;
            var1 = function(arg1) {
                var3 = _closure1_slot9;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2 = var5.bind(var6)(var1);
 54:
            var1 = var3.subscription;
            var1 = var1.introductoryOffer;
            if(!(var4 != var1)) { _fun0002_ip = 106; continue _fun0002 }
 70:
            var4 = var2.push;
            var6 = _closure1_slot9;
            var1 = var3.subscription;
            var5 = var1.introductoryOffer;
            var1 = undefined;
            var1 = var6.bind(var1)(var5);
            var1 = var4.bind(var2)(var1);
 106:
            var4 = global;
            var5 = var4.Number;
            var8 = var3.price;
            var7 = var8.toFixed;
            var9 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 5;
            var1 = var6[var1];
            var6 = undefined;
            var1 = var9.bind(var6)(var1);
            var9 = var1.CurrencyExponents;
            var10 = var3.currency;
            var1 = var10.toLowerCase;
            var1 = var1.bind(var10)();
            var1 = var9[var1];
            var1 = var7.bind(var8)(var1);
            var5 = var5.bind(var6)(var1);
            var1 = {};
            var8 = var4.String;
            var7 = var3.id;
            var7 = var8.bind(var6)(var7);
            var1['identifier'] = var7;
            var1['price'] = var5;
            var9 = var3.displayPrice;
            var8 = var9.split;
            var7 = /[0-9]/;
            var8 = var8.bind(var9)(var7);
            var7 = 0;
            var7 = var8[var7];
            var1['currencySymbol'] = var7;
            var8 = var3.currency;
            var7 = var8.toLowerCase;
            var7 = var7.bind(var8)();
            var1['currencyCode'] = var7;
            var4 = var4.String;
            var4 = var4.bind(var6)(var5);
            var1['priceString'] = var4;
            var4 = '';
            var1['countryCode'] = var4;
            var4 = false;
            var1['downloadable'] = var4;
            var4 = var3.description;
            var1['description'] = var4;
            var3 = var3.displayName;
            var1['title'] = var3;
            var1['discounts'] = var2;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function promoOfferToDiscount(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var4 = var2.paymentMode;
            var3 = 'FREETRIAL';
            var1 = 'freeTrial';
            if(!(var1 !== var4)) { _fun0003_ip = 65; continue _fun0003 }
 25:
            var1 = 'payAsYouGo';
            if(!(var1 !== var4)) { _fun0003_ip = 59; continue _fun0003 }
 35:
            var1 = 'payUpFront';
            if(!(var1 !== var4)) { _fun0003_ip = 51; continue _fun0003 }
 45:
            var3 = '';
            _fun0003_ip = 65; continue _fun0003;
 51:
            var3 = 'PAYUPFRONT';
            _fun0003_ip = 65; continue _fun0003;
 59:
            var3 = 'PAYASYOUGO';
 65:
            var1 = {};
            var4 = var2.id;
            var1['identifier'] = var4;
            var4 = 'SUBSCRIPTION';
            var1['type'] = var4;
            var4 = var2.period;
            var5 = var4.value;
            var4 = var5.toString;
            var4 = var4.bind(var5)();
            var1['numberOfPeriods'] = var4;
            var5 = var2.price;
            var4 = var5.toString;
            var4 = var4.bind(var5)();
            var1['price'] = var4;
            var4 = var2.displayPrice;
            var1['localizedPrice'] = var4;
            var1['paymentMode'] = var3;
            var2 = var2.period;
            var3 = var2.unit;
            var2 = var3.toUpperCase;
            var2 = var2.bind(var3)();
            var1['subscriptionPeriod'] = var2;
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var7 = 4;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.convertToAlpha2;
    var _closure1_slot5 = var7;
    var4 = var4.RNIapIosSk2;
    var _closure1_slot6 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function StorekitIAPQueueClass() {
            var3 = this;
            var4 = _closure1_slot3;
            var2 = _closure2_slot1;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = new Array(0);
            var3['_queue'] = var2;
            var2 = false;
            var3['_processingQueue'] = var2;
            return var1;
        };
        var _closure2_slot1 = var3;
        var5 = {};
        var2 = 'fetchSubscriptions';
        var5['key'] = var2;
        var2 = function value(arg1) {
            var3 = this;
            var _closure3_slot0 = var3;
            var2 = arg1;
            var _closure3_slot1 = var2;
            var2 = global;
            var4 = var2.Promise;
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var5 = function(arg1, arg2) {
                var1 = arg1;
                var _closure4_slot0 = var1;
                var1 = arg2;
                var _closure4_slot1 = var1;
                var1 = _closure3_slot0;
                var4 = var1._queue;
                var3 = var4.push;
                var5 = _closure1_slot2;
                var1 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 295; continue _fun0004 }
 12:
                            var2 = undefined;
                            var3 = undefined;
 16: // try_start_0
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var5 = 6;
                            var5 = var8[var5];
                            var5 = var7.bind(var2)(var5);
                            var8 = var5.StoreKitV2Experiment;
                            var7 = var8.getCurrentConfig;
                            var5 = {};
                            var9 = 'fetchSubscriptions';
                            var5['location'] = var9;
                            var5 = var7.bind(var8)(var5);
                            var3 = var5.enabled;
                            var7 = _closure1_slot6;
                            var5 = null;
                            var5 = var5 == var7;
                            var7 = undefined;
                            if(var5) { _fun0004_ip = 100; continue _fun0004 }
 86:
                            var8 = _closure1_slot6;
                            var5 = var8.isAvailable;
                            var7 = var5.bind(var8)();
 100:
                            var5 = 1;
                            if(!(var5 === var7)) { _fun0004_ip = 110; continue _fun0004 }
 107:
                            if(var3) { _fun0004_ip = 200; continue _fun0004 }
 110:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var3 = 7;
                            var3 = var7[var3];
                            var7 = var5.bind(var2)(var3);
                            var5 = var7.getSubscriptions;
                            var3 = {};
                            var8 = _closure3_slot1;
                            var3['skus'] = var8;
                            var3 = var5.bind(var7)(var3);
                            SaveGenerator(address=159);
 157:
                            return var3;
 159:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0004_ip = 197; continue _fun0004 }
 165:
                            var7 = var3.filter;
                            var5 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.type;
                                var1 = 'subs';
                                var1 = var1 === var2;
                                return var1;
                            };
                            var8 = var7.bind(var3)(var5);
                            var7 = var8.map;
                            var5 = function(arg1) {
                                var3 = _closure1_slot7;
                                var2 = undefined;
                                var1 = arg1;
                                var1 = var3.bind(var2)(var1);
                                return var1;
                            };
                            var5 = var7.bind(var8)(var5);
                            _fun0004_ip = 261; continue _fun0004;
 197: // try_end0
                            return var3;
 200: // try_start_1
                            var8 = _closure1_slot6;
                            var7 = var8.getItems;
                            var3 = _closure3_slot1;
                            var3 = var7.bind(var8)(var3);
                            SaveGenerator(address=226);
 224:
                            return var3;
 226:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                            if(var7) { _fun0004_ip = 275; continue _fun0004 }
 232:
                            var7 = var3.filter;
                            var6 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.subscription;
                                var1 = null;
                                var1 = var1 != var2;
                                return var1;
                            };
                            var7 = var7.bind(var3)(var6);
                            var6 = var7.map;
                            var4 = _closure1_slot8;
                            var5 = var6.bind(var7)(var4);
 261:
                            var4 = _closure4_slot0;
                            var4 = var4.bind(var2)(var5);
 273: // try_end1
                            _fun0004_ip = 292; continue _fun0004;
 275:
                            return var3;
 278: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=3);
                            var3 = _closure4_slot1;
                            var3 = var3.bind(var2)(var4);
 292:
                            return var2;
 295:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var5.bind(var1)(var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6 = var2;
            var1 = new var6[var4](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            var2 = var3.processQueue;
            var2 = var2.bind(var3)();
            return var1;
        };
        var5['value'] = var2;
        var2 = new Array(3);
        var2[0] = var5;
        var5 = {};
        var7 = 'fetchProducts';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var _closure3_slot0 = var3;
            var2 = arg1;
            var _closure3_slot1 = var2;
            var2 = global;
            var4 = var2.Promise;
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var5 = function(arg1, arg2) {
                var1 = arg1;
                var _closure4_slot0 = var1;
                var1 = arg2;
                var _closure4_slot1 = var1;
                var1 = _closure3_slot0;
                var4 = var1._queue;
                var3 = var4.push;
                var5 = _closure1_slot2;
                var1 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0005_ip = 122; continue _fun0005 }
 7: // try_start_0
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 7;
                            var2 = var4[var2];
                            var4 = undefined;
                            var5 = var3.bind(var4)(var2);
                            var3 = var5.getProducts;
                            var2 = {};
                            var6 = _closure3_slot1;
                            var2['skus'] = var6;
                            var5 = var3.bind(var5)(var2);
                            var3 = var5.then;
                            var2 = function(arg1) {
                                var4 = arg1;
                                var3 = var4.filter;
                                var2 = function(arg1) {
                                    var1 = arg1;
                                    var2 = var1.type;
                                    var1 = 'iap';
                                    var1 = var1 === var2;
                                    return var1;
                                };
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.map;
                                var1 = function(arg1) {
                                    var3 = _closure1_slot7;
                                    var2 = undefined;
                                    var1 = arg1;
                                    var1 = var3.bind(var2)(var1);
                                    return var1;
                                };
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var2 = var3.bind(var5)(var2);
                            SaveGenerator(address=78);
 76:
                            return var2;
 78:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0005_ip = 98; continue _fun0005 }
 84:
                            var3 = _closure4_slot0;
                            var3 = var3.bind(var4)(var2);
 96: // try_end0
                            _fun0005_ip = 117; continue _fun0005;
 98:
                            return var2;
 101: // catch_target0
                            CatchBlockStart(arg_register=3);
                            var3 = _closure4_slot1;
                            var2 = undefined;
                            var2 = var3.bind(var2)(var4);
 117:
                            var2 = undefined;
                            return var2;
 122:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var5.bind(var1)(var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6 = var2;
            var1 = new var6[var4](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            var2 = var3.processQueue;
            var2 = var2.bind(var3)();
            return var1;
        };
        var5['value'] = var7;
        var2[1] = var5;
        var5 = {};
        var7 = 'processQueue';
        var5['key'] = var7;
        var8 = _closure1_slot2;
        var1 = undefined;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 129; continue _fun0006 }
 10:
                    var2 = var4._processingQueue;
                    if(var2) { _fun0006_ip = 124; continue _fun0006 }
 19:
                    var2 = true;
                    var4['_processingQueue'] = var2;
 27: // try_start_0
                    var2 = var4._queue;
                    var2 = var2.length;
                    var6 = 0;
                    var5 = undefined;
                    if(!(var2 > var6)) { _fun0006_ip = 91; continue _fun0006 }
 46:
                    var3 = var4._queue;
                    var2 = var3.shift;
                    var2 = var2.bind(var3)();
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=70);
 68:
                    return var2;
 70:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 101; continue _fun0006 }
 76:
                    var3 = var4._queue;
                    var3 = var3.length;
                    if(var3 > var6) { _fun0006_ip = 46; continue _fun0006 }
 91: // try_end0
                    var3 = false;
                    var4['_processingQueue'] = var3;
                    _fun0006_ip = 124; continue _fun0006;
 101:
                    var3 = false;
                    var4['_processingQueue'] = var3;
                    return var2;
 112: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var3 = false;
                    var4['_processingQueue'] = var3;
                    throw var2;
 124:
                    var2 = undefined;
                    return var2;
 129:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var1)(var7);
        var _closure2_slot0 = var7;
        var6 = function processQueue() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var6;
        var2[2] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/native/StorekitIAPQueue.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();