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
            var3 = arg1;
            var1 = var3.countryCode;
            var5 = null;
            var1 = var5 != var1;
            if(!var1) { _fun0001_ip = 35; continue _fun0001 }
 18:
            var2 = var3.countryCode;
            var4 = var2.length;
            var2 = 0;
            var1 = var2 !== var4;
 35:
            var4 = '';
            if(!var1) { _fun0001_ip = 62; continue _fun0001 }
 42:
            var6 = _closure1_slot5;
            var2 = var3.countryCode;
            var1 = undefined;
            var4 = var6.bind(var1)(var2);
 62:
            var1 = {};
            var2 = var3.productId;
            var1['identifier'] = var2;
            var2 = global;
            var7 = var2.parseFloat;
            var6 = var3.price;
            var2 = undefined;
            var6 = var7.bind(var2)(var6);
            var1['price'] = var6;
            var8 = var3.localizedPrice;
            var6 = var5 == var8;
            var5 = undefined;
            if(var6) { _fun0001_ip = 146; continue _fun0001 }
 116:
            var7 = var8.split;
            var6 = /[0-9]/;
            var7 = var7.bind(var8)(var6);
            var6 = 0;
            var5 = var7[var6];
 146:
            var1['currencySymbol'] = var5;
            var6 = var3.currency;
            var5 = var6.toLowerCase;
            var5 = var5.bind(var6)();
            var1['currencyCode'] = var5;
            var5 = var3.price;
            var1['priceString'] = var5;
            var1['countryCode'] = var4;
            var4 = false;
            var1['downloadable'] = var4;
            var4 = var3.description;
            var1['description'] = var4;
            var4 = var3.title;
            var1['title'] = var4;
            var4 = 'discounts';
            var4 = var4 in var3;
            var2 = undefined;
            if(!var4) { _fun0001_ip = 236; continue _fun0001 }
 230:
            var2 = var3.discounts;
 236:
            var1['discounts'] = var2;
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
    var4 = var4.convertToAlpha2;
    var _closure1_slot5 = var4;
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
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 122; continue _fun0002 }
 7: // try_start_0
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 4;
                            var2 = var4[var2];
                            var4 = undefined;
                            var5 = var3.bind(var4)(var2);
                            var3 = var5.getSubscriptions;
                            var2 = {};
                            var6 = _closure3_slot1;
                            var2['skus'] = var6;
                            var5 = var3.bind(var5)(var2);
                            var3 = var5.then;
                            var2 = function(arg1) {
                                var3 = arg1;
                                var2 = var3.map;
                                var1 = function(arg1) {
                                    var3 = _closure1_slot6;
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
                            if(var3) { _fun0002_ip = 98; continue _fun0002 }
 84:
                            var3 = _closure4_slot0;
                            var3 = var3.bind(var4)(var2);
 96: // try_end0
                            _fun0002_ip = 117; continue _fun0002;
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
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 122; continue _fun0003 }
 7: // try_start_0
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 4;
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
                                var3 = arg1;
                                var2 = var3.map;
                                var1 = function(arg1) {
                                    var3 = _closure1_slot6;
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
                            if(var3) { _fun0003_ip = 98; continue _fun0003 }
 84:
                            var3 = _closure4_slot0;
                            var3 = var3.bind(var4)(var2);
 96: // try_end0
                            _fun0003_ip = 117; continue _fun0003;
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
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 129; continue _fun0004 }
 10:
                    var2 = var4._processingQueue;
                    if(var2) { _fun0004_ip = 124; continue _fun0004 }
 19:
                    var2 = true;
                    var4['_processingQueue'] = var2;
 27: // try_start_0
                    var2 = var4._queue;
                    var2 = var2.length;
                    var6 = 0;
                    var5 = undefined;
                    if(!(var2 > var6)) { _fun0004_ip = 91; continue _fun0004 }
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
                    if(var3) { _fun0004_ip = 101; continue _fun0004 }
 76:
                    var3 = var4._queue;
                    var3 = var3.length;
                    if(var3 > var6) { _fun0004_ip = 46; continue _fun0004 }
 91: // try_end0
                    var3 = false;
                    var4['_processingQueue'] = var3;
                    _fun0004_ip = 124; continue _fun0004;
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
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/native/StorekitIAPQueue.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();