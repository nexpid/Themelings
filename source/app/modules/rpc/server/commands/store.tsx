// app/modules/rpc/server/commands/store.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = function getSubscriptionSkusViaListings() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function _getSubscriptionSkusViaListings() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var5 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var _closure4_slot1 = var5;
                    var8 = undefined;
                    var _closure4_slot2 = var8;
                    var3 = var5.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = _closure1_slot9;
                        var1 = var1.SUBSCRIPTION_GROUP;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var7 = var3.bind(var5)(var2);
                    var2 = global;
                    var5 = var2.Promise;
                    var3 = var5.all;
                    var6 = var7.map;
                    var2 = function() {
                        var4 = _closure1_slot4;
                        var3 = undefined;
                        var2 = function* (arg1) {
                            var1 = function* anon_0_(arg1) {
                                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var2 = 5;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var5 = var4.bind(var2)(var3);
                                    var4 = var5.fetchAllSubscriptionListingsDataForApplication;
                                    var3 = _closure4_slot0;
                                    var2 = arg1;
                                    var2 = var2.id;
                                    var2 = var4.bind(var5)(var3, var2);
                                    SaveGenerator(address=63);
case 6:
                                    return var2;
case 7:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                    if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                                    return var2;
case 8:
                                    return var2;
case 4:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure5_slot0 = var2;
                        var1 = function() {
                            var1 = undefined;
                            var4 = _closure5_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var2 = var2.bind(var8)();
                    var2 = var6.bind(var7)(var2);
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=90);
case 10:
                    return var2;
case 11:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var3 = new Array(0);
                    _closure4_slot2 = var3;
                    var5 = var2.forEach;
                    var4 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var3 = arg1;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                            var6 = var3.subscription_listings;
                            if(!(var1 != var6)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                            var5 = new Array(0);
                            var _closure5_slot0 = var5;
                            var4 = var6.forEach;
                            var3 = function(arg1) {
                                var2 = arg1;
                                var _closure6_slot0 = var2;
                                var3 = var2.subscription_plans;
                                var2 = var3.forEach;
                                var1 = function(arg1) {
                                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                        var5 = arg1;
                                        var _closure7_slot0 = var5;
                                        var2 = null;
                                        var4 = var2 == var5;
                                        var1 = undefined;
                                        var6 = undefined;
                                        if(var4) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                                        var6 = var5.price;
case 18:
                                        var7 = _closure4_slot1;
                                        var4 = var7.find;
                                        var3 = function(arg1) {
                                            var1 = arg1;
                                            var2 = var1.id;
                                            var1 = _closure7_slot0;
                                            var1 = var1.sku_id;
                                            var1 = var2 === var1;
                                            return var1;
                                        };
                                        var3 = var4.bind(var7)(var3);
                                        if(!(var2 != var3)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                                        var4 = {};
                                        var5 = var5.sku_id;
                                        var4['id'] = var5;
                                        var5 = var3.name;
                                        var4['name'] = var5;
                                        var5 = var3.type;
                                        var4['type'] = var5;
                                        var5 = {};
                                        var5['amount'] = var6;
                                        var6 = _closure1_slot7;
                                        var6 = var6.USD;
                                        var5['currency'] = var6;
                                        var4['price'] = var5;
                                        var5 = _closure6_slot0;
                                        var6 = var5.application_id;
                                        var4['application_id'] = var6;
                                        var5 = var5.sku_flags;
                                        var4['flags'] = var5;
                                        var3 = var3.release_date;
                                        var5 = var2 != var3;
                                        var2 = null;
                                        if(!var5) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                                        var2 = var3;
case 22:
                                        var4['release_date'] = var2;
                                        var3 = _closure5_slot0;
                                        var2 = var3.push;
                                        var2 = var2.bind(var3)(var4);
case 20:
                                        return var1;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            };
                            var3 = var4.bind(var6)(var3);
                            var4 = var5.filter;
                            var3 = function(arg1) {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                    var3 = arg1;
                                    var2 = null;
                                    var4 = var2 == var3;
                                    var1 = undefined;
                                    if(var4) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                                    var1 = var3.price;
case 24:
                                    var1 = var2 != var1;
                                    return var1;
                                }
                            };
                            var4 = var4.bind(var5)(var3);
                            var3 = var4.forEach;
                            var2 = function(arg1) {
                                var3 = _closure4_slot2;
                                var2 = var3.push;
                                var1 = arg1;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2);
                            var2 = undefined;
                            return var2;
case 16:
                            return var1;
case 14:
                            return var1;
                        }
                    };
                    var4 = var5.bind(var2)(var4);
                    return var3;
case 12:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var15 = function getSkusHandler() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var15;
    var1 = function _getSkusHandler() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 26; continue _fun0006 }
case 3:
                    var2 = arg1;
                    var4 = var2.socket;
                    var6 = undefined;
                    SaveGenerator(address=27);
case 27:
                    return var6;
case 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var5 = 6;
                    var5 = var9[var5];
                    var9 = var8.bind(var6)(var5);
                    var8 = var9.validateTransportType;
                    var5 = var4.transport;
                    var5 = var8.bind(var9)(var5);
                    var4 = var4.application;
                    var8 = var4.id;
                    var4 = null;
                    if(!(var4 != var8)) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                    var5 = _closure1_slot6;
                    var4 = var5.inTestModeForApplication;
                    var4 = var4.bind(var5)(var8);
                    if(var4) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                    var5 = _closure1_slot5;
                    var4 = var5.inDevModeForApplication;
                    var4 = var4.bind(var5)(var8);
                    if(var4) { _fun0006_ip = 33; continue _fun0006 }
case 35:
                    var5 = _closure1_slot2;
                    var9 = _closure1_slot3;
                    var4 = 9;
                    var4 = var9[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.fetchAllStoreListingsForApplication;
                    var4 = var4.bind(var5)(var8);
                    SaveGenerator(address=172);
case 36:
                    return var4;
case 37:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                    var9 = var4.filter;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.sku;
                        var2 = var1.type;
                        var1 = _closure1_slot9;
                        var1 = var1.SUBSCRIPTION_GROUP;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var10 = var9.bind(var4)(var5);
                    var9 = var10.map;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.sku;
                        return var1;
                    };
                    var10 = var9.bind(var10)(var5);
                    var9 = var10.filter;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.price;
                        var1 = null;
                        var1 = var1 != var2;
                        return var1;
                    };
                    var14 = var9.bind(var10)(var5);
                    var9 = new Array(0);
                    var13 = 0;
                    var15 = var9;
                    var10 = arraySpread(var15, var14, var13);
                    var11 = _closure1_slot10;
                    var12 = var4.map;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.sku;
                        return var1;
                    };
                    var5 = var12.bind(var4)(var5);
                    var5 = var11.bind(var6)(var8, var5);
                    SaveGenerator(address=273);
case 40:
                    return var5;
case 41:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=10);
                    if(var11) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var15 = var9;
                    var14 = var5;
                    var13 = var10;
                    var10 = arraySpread(var15, var14, var13);
                    return var9;
case 42:
                    return var5;
case 38:
                    return var4;
case 33:
                    var5 = _closure1_slot2;
                    var9 = _closure1_slot3;
                    var4 = 8;
                    var4 = var9[var4];
                    var9 = var5.bind(var6)(var4);
                    var5 = var9.fetchTestSKUsForApplication;
                    var4 = false;
                    var4 = var5.bind(var9)(var8, var4);
                    SaveGenerator(address=339);
case 44:
                    return var4;
case 45:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var5 = _closure1_slot10;
                    var5 = var5.bind(var6)(var8, var4);
                    SaveGenerator(address=359);
case 48:
                    return var5;
case 49:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    var8 = var4.filter;
                    var7 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.price;
                        var1 = null;
                        var1 = var1 != var2;
                        return var1;
                    };
                    var14 = var8.bind(var4)(var7);
                    var7 = new Array(0);
                    var13 = 0;
                    var15 = var7;
                    var13 = arraySpread(var15, var14, var13);
                    var15 = var7;
                    var14 = var5;
                    var8 = arraySpread(var15, var14, var13);
                    return var7;
case 50:
                    return var5;
case 46:
                    return var4;
case 31:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 7;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = {};
                    var3 = _closure1_slot8;
                    var3 = var3.INVALID_COMMAND;
                    var5['errorCode'] = var3;
                    var3 = var6.prototype;
                    var4 = Object.create(var3, {constructor: {value: var6}});
                    var14 = 'No application.';
                    var16 = var4;
                    var15 = var5;
                    var3 = new var16[var6](var15, var14, var13);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 29:
                    return var2;
case 26:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var14 = function getEntitlementsHandler(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = var1.socket;
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var3 = 6;
            var3 = var4[var3];
            var4 = undefined;
            var6 = var5.bind(var4)(var3);
            var5 = var6.validateTransportType;
            var3 = var2.transport;
            var3 = var5.bind(var6)(var3);
            var2 = var2.application;
            var5 = var2.id;
            var2 = null;
            if(!(var2 != var5)) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var3 = _closure1_slot2;
            var6 = _closure1_slot3;
            var2 = 10;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.fetchUserEntitlementsForApplication;
            var2 = var2.bind(var3)(var5);
            return var2;
case 52:
            var3 = _closure1_slot1;
            var5 = _closure1_slot3;
            var2 = 7;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = {};
            var1 = _closure1_slot8;
            var1 = var1.INVALID_COMMAND;
            var3['errorCode'] = var1;
            var1 = var4.prototype;
            var2 = Object.create(var1, {constructor: {value: var4}});
            var7 = 'No application.';
            var9 = var2;
            var8 = var3;
            var1 = new var9[var4](var8, var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var _closure1_slot14 = var14;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var13 = var2.RPC_AUTHENTICATED_SCOPE;
    var12 = var2.RPC_LOCAL_SCOPE;
    var10 = var2.RPC_SCOPE_CONFIG;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.CurrencyCodes;
    var _closure1_slot7 = var4;
    var4 = var2.RPCCommands;
    var7 = var2.RPCErrors;
    var _closure1_slot8 = var7;
    var2 = var2.SKUTypes;
    var _closure1_slot9 = var2;
    var2 = {};
    var11 = var4.GET_SKUS;
    var7 = {};
    var16 = var10.ANY;
    var9 = new Array(2);
    var9[0] = var13;
    var9[1] = var12;
    var7[var16] = var9;
    var9 = 'handler';
    var7[var9] = var15;
    var2[var11] = var7;
    var11 = var4.GET_ENTITLEMENTS;
    var7 = {};
    var16 = var10.ANY;
    var15 = new Array(2);
    var15[0] = var13;
    var15[1] = var12;
    var7[var16] = var15;
    var7[var9] = var14;
    var2[var11] = var7;
    var11 = var4.GET_SKUS_EMBEDDED;
    var7 = {};
    var15 = var10.ANY;
    var14 = new Array(2);
    var14[0] = var13;
    var14[1] = var12;
    var7[var15] = var14;
    var14 = function handler(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 54; continue _fun0008 }
case 5:
                    var3 = {};
                    var5 = _closure1_slot12;
                    var4 = _closure2_slot0;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    SaveGenerator(address=34);
case 55:
                    return var2;
case 56:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                    var3['skus'] = var2;
                    return var3;
case 57:
                    return var2;
case 54:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var7[var9] = var14;
    var2[var11] = var7;
    var7 = var4.GET_ENTITLEMENTS_EMBEDDED;
    var4 = {};
    var11 = var10.ANY;
    var10 = new Array(2);
    var10[0] = var13;
    var10[1] = var12;
    var4[var11] = var10;
    var8 = function handler(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 54; continue _fun0009 }
case 5:
                    var3 = {};
                    var5 = _closure1_slot14;
                    var4 = _closure2_slot0;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    SaveGenerator(address=34);
case 55:
                    return var2;
case 56:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                    var3['entitlements'] = var2;
                    return var3;
case 57:
                    return var2;
case 54:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4[var9] = var8;
    var2[var7] = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/commands/store.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();