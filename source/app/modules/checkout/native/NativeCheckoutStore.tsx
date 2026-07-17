// app/modules/checkout/native/NativeCheckoutStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var8;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var2);
    var2 = 0;
    var5 = var8[var2];
    var1 = undefined;
    var5 = var12.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var6 = 1;
    var5 = var8[var6];
    var11 = var12.bind(var1)(var5);
    var10 = 2;
    var9 = var8[var10];
    var5 = metroImportAll;
    var9 = var5.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var5 = 3;
    var5 = var8[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var12.bind(var1)(var5);
    var5 = var5.bind(var1)();
    var5 = var11.bind(var1)(var5, var10);
    var2 = var5[var2];
    var5 = var5[var6];
    var _closure1_slot6 = var5;
    var6 = var9.createContext;
    var5 = 'unset_context';
    var5 = var6.bind(var9)(var5);
    var _closure1_slot7 = var5;
    var6 = 11;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/checkout/native/NativeCheckoutStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['NativeCheckoutStoreContextOrNull'] = var5;
    var5 = function useNativeCheckoutStore(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 5;
            var1 = var5[var1];
            var1 = var2.bind(var3)(var1);
            var4 = var1.shallow;
case 2:
            var1 = _closure1_slot6;
            var2 = var1.bind(var3)();
            var1 = arg1;
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        }
    };
    var3['useNativeCheckoutStore'] = var5;
    var5 = function useNativeCheckoutStoreOrNull(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arguments[1];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var5 = var1.shallow;
case 2:
            var3 = _closure1_slot4;
            var2 = var3.useContext;
            var1 = _closure1_slot7;
            var3 = var2.bind(var3)(var1);
            var2 = 'unset_context';
            var1 = null;
            if(!(var2 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = arg1;
            var1 = var3.bind(var4)(var2, var5);
case 4:
            return var1;
        }
    };
    var3['useNativeCheckoutStoreOrNull'] = var5;
    var4 = function createNativeStore(arg1) {
        var2 = arg1;
        var3 = var2.order;
        var _closure2_slot0 = var3;
        var3 = var2.checkoutInitParameters;
        var _closure2_slot1 = var3;
        var3 = var2.contextMetadata;
        var _closure2_slot2 = var3;
        var3 = var2.paymentGateway;
        var _closure2_slot3 = var3;
        var3 = var2.orderRequired;
        var _closure2_slot4 = var3;
        var2 = var2.onOrderRetryCancellation;
        var _closure2_slot5 = var2;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 6;
        var2 = var7[var2];
        var5 = undefined;
        var4 = var6.bind(var5)(var2);
        var3 = var4.createWithEqualityFn;
        var2 = 5;
        var2 = var7[var2];
        var2 = var6.bind(var5)(var2);
        var2 = var2.shallow;
        var1 = function(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var1 = function runPatchOrderLineItems() {
                    var1 = undefined;
                    var4 = _closure3_slot5;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot4 = var1;
                var1 = function _runPatchOrderLineItems() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot3;
                    var2 = function* (arg1, arg2) {
                        var1 = function* anon_0_(arg1, arg2) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                                var2 = _closure3_slot1;
                                var5 = undefined;
                                var2 = var2.bind(var5)();
                                var8 = var2.orderRecord;
                                var2 = null;
                                if(!(var2 != var8)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                                var4 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var2 = 7;
                                var2 = var7[var2];
                                var7 = var4.bind(var5)(var2);
                                var4 = var7.patchOrder;
                                var2 = {};
                                var9 = var8.id;
                                var2['orderId'] = var9;
                                var8 = var8.revision;
                                var2['expectedRevision'] = var8;
                                var8 = arg1;
                                var2['orderLineItems'] = var8;
                                var8 = arg2;
                                var2['externalGatewayFacet'] = var8;
                                var2 = var4.bind(var7)(var2);
                                SaveGenerator(address=112);
case 10:
                                return var2;
case 11:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                                var4 = _closure3_slot0;
                                var3 = {};
                                var7 = _closure1_slot5;
                                var6 = var7.createFromServer;
                                var6 = var6.bind(var7)(var2);
                                var3['orderRecord'] = var6;
                                var3 = var4.bind(var5)(var3);
                                return var2;
case 12:
                                return var2;
case 8:
                                var2 = global;
                                var4 = var2.Error;
                                var2 = var4.prototype;
                                var3 = Object.create(var2, {constructor: {value: var4}});
                                var10 = 'Patch being called in a missing order state';
                                var11 = var3;
                                var2 = new var11[var4](var10, var9);
                                var2 = var2 instanceof Object ? var2 : var3;
                                throw var2;
case 6:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    _closure3_slot5 = var4;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot5 = var1;
                var1 = function runRecreateOrder() {
                    var1 = undefined;
                    var4 = _closure3_slot7;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot6 = var1;
                var1 = function _runRecreateOrder() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot3;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                StartGenerator();
                                var8 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                                var2 = _closure3_slot1;
                                var3 = undefined;
                                var2 = var2.bind(var3)();
                                var7 = var2.orderRecord;
                                var9 = null;
                                if(!(var9 != var7)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                                var10 = var7.orderLineItems;
                                var6 = var10.map;
                                var2 = function(arg1) {
                                    var2 = arg1;
                                    var1 = {};
                                    var3 = var2.sku_id;
                                    var1['sku_id'] = var3;
                                    var3 = var2.quantity;
                                    var1['quantity'] = var3;
                                    var3 = var2.purchase_type;
                                    var1['purchase_type'] = var3;
                                    var2 = var2.subscription_plan_id;
                                    var1['subscription_plan_id'] = var2;
                                    return var1;
                                };
                                var11 = var6.bind(var10)(var2);
                                var10 = _closure1_slot1;
                                var12 = _closure1_slot2;
                                var2 = 8;
                                var2 = var12[var2];
                                var12 = var10.bind(var3)(var2);
                                var10 = var12.some;
                                var2 = function(arg1) {
                                    var1 = arg1;
                                    var2 = var1.subscription_plan_id;
                                    var1 = null;
                                    var1 = var1 != var2;
                                    return var1;
                                };
                                var2 = var10.bind(var12)(var11, var2);
                                var10 = undefined;
                                if(!var2) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                                var2 = {};
                                var12 = {};
                                var13 = var8.currency;
                                var12['currency'] = var13;
                                var13 = var8.country;
                                var12['country_code'] = var13;
                                var2['subscription_preview'] = var12;
                                var13 = _closure2_slot1;
                                var13 = var13.activeSubscription;
                                var10 = var2;
                                if(!(var9 != var13)) { _fun0005_ip = 18; continue _fun0005 }
case 20:
                                var12 = _closure2_slot1;
                                var12 = var12.activeSubscription;
                                var12 = var12.id;
                                var2['subscription_id'] = var12;
                                var10 = var2;
case 18:
                                var2 = var7.externalGatewayFacet;
                                var2 = var9 != var2;
                                var9 = undefined;
                                if(!var2) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                                var2 = {};
                                var7 = var7.externalGatewayFacet;
                                var12 = var7.line_items;
                                var7 = var12.map;
                                var5 = function(arg1) {
                                    var1 = {};
                                    var2 = arg1;
                                    var2 = var2.external_product_id;
                                    var1['external_product_id'] = var2;
                                    return var1;
                                };
                                var5 = var7.bind(var12)(var5);
                                var2['line_items'] = var5;
                                var9 = var2;
case 21:
                                var5 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var2 = 7;
                                var2 = var7[var2];
                                var7 = var5.bind(var3)(var2);
                                var5 = var7.createOrder;
                                var2 = {};
                                var2['orderLineItems'] = var11;
                                var12 = _closure2_slot3;
                                var2['paymentGateway'] = var12;
                                var11 = _closure2_slot1;
                                var11 = var11.isGift;
                                var2['isGift'] = var11;
                                var2['subscriptionFacet'] = var10;
                                var2['externalGatewayFacet'] = var9;
                                var8 = var8.country;
                                var2['countryCode'] = var8;
                                var2 = var5.bind(var7)(var2);
                                SaveGenerator(address=326);
case 23:
                                return var2;
case 24:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                                var5 = _closure3_slot0;
                                var4 = {};
                                var7 = _closure1_slot5;
                                var6 = var7.createFromServer;
                                var6 = var6.bind(var7)(var2);
                                var4['orderRecord'] = var6;
                                var4 = var5.bind(var3)(var4);
case 16:
                                return var3;
case 25:
                                return var2;
case 14:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    _closure3_slot7 = var4;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot7 = var1;
                var1 = {};
                var5 = _closure2_slot0;
                var4 = null;
                var5 = var4 != var5;
                if(!var5) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                var7 = _closure1_slot5;
                var6 = var7.createFromServer;
                var5 = _closure2_slot0;
                var4 = var6.bind(var7)(var5);
case 27:
                var1['orderRecord'] = var4;
                var4 = function setOrder(arg1) {
                    var3 = _closure3_slot0;
                    var2 = {};
                    var5 = _closure1_slot5;
                    var4 = var5.createFromServer;
                    var1 = arg1;
                    var1 = var4.bind(var5)(var1);
                    var2['orderRecord'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['setOrder'] = var4;
                var4 = function getCheckoutContextRecord() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        var2 = var1.orderRecord;
                        var1 = null;
                        var3 = var1 != var2;
                        if(!var3) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                        var1 = var2.checkoutContextRecord;
case 29:
                        return var1;
                    }
                };
                var1['getCheckoutContextRecord'] = var4;
                var4 = false;
                var1['isPatchOrderLoading'] = var4;
                var7 = _closure1_slot3;
                var6 = undefined;
                var5 = function* (arg1, arg2) {
                    var1 = function* anon_0_(arg1, arg2) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            StartGenerator();
                            var5 = arg1;
                            var4 = arg2;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=6);
                            if(var7) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                            var6 = var5;
                            var _closure5_slot0 = var5;
                            var3 = var4;
                            var _closure5_slot1 = var4;
                            var5 = undefined;
                            var12 = undefined;
case 33: // try_start_0 // try_start_1
                            var8 = _closure3_slot0;
                            var7 = {};
                            var9 = true;
                            var7['isPatchOrderLoading'] = var9;
                            var7 = var8.bind(var5)(var7);
                            var7 = _closure3_slot4;
                            var3 = var7.bind(var5)(var6, var3);
                            SaveGenerator(address=71);
case 34:
                            return var3;
case 35:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                            if(var6) { _fun0007_ip = 36; continue _fun0007 }
case 37: // try_end0 // try_end1
                            var7 = _closure3_slot0;
                            var6 = {};
                            var8 = false;
                            var6['isPatchOrderLoading'] = var8;
                            var6 = var7.bind(var5)(var6);
                            return var3;
case 36:
                            var6 = _closure3_slot0;
                            var4 = {};
                            var7 = false;
                            var4['isPatchOrderLoading'] = var7;
                            var4 = var6.bind(var5)(var4);
                            return var3;
case 38: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=8);
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 9;
                            var3 = var7[var3];
                            var8 = var6.bind(var5)(var3);
                            var7 = var8.captureBillingException;
                            var6 = {};
                            var3 = {};
                            var10 = 'NativeCheckoutStore_patchOrderLineItems';
                            var3['source'] = var10;
                            var6['tags'] = var3;
                            var10 = {};
                            var11 = _closure3_slot1;
                            var11 = var11.bind(var5)();
                            var13 = var11.orderRecord;
                            var12 = var13;
                            var11 = null;
                            var13 = var11 == var13;
                            var11 = undefined;
                            if(var13) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                            var11 = var12.id;
case 39:
                            var10['orderId'] = var11;
                            var6['extra'] = var10;
                            var6 = var7.bind(var8)(var9, var6);
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 10;
                            var4 = var7[var4];
                            var6 = var6.bind(var5)(var4);
                            var4 = var6.showCheckoutOrderErrorModal;
                            var2 = function() {
                                var4 = _closure3_slot4;
                                var3 = _closure5_slot0;
                                var2 = _closure5_slot1;
                                var1 = undefined;
                                var1 = var4.bind(var1)(var3, var2);
                                return var1;
                            };
                            var2 = var4.bind(var6)(var2);
                            SaveGenerator(address=263);
case 41:
                            return var2;
case 42:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0007_ip = 43; continue _fun0007 }
case 44: // try_end2
                            var6 = _closure3_slot0;
                            var4 = {};
                            var7 = false;
                            var4['isPatchOrderLoading'] = var7;
                            var4 = var6.bind(var5)(var4);
                            return var2;
case 43:
                            var4 = _closure3_slot0;
                            var3 = {};
                            var6 = false;
                            var3['isPatchOrderLoading'] = var6;
                            var3 = var4.bind(var5)(var3);
                            return var2;
case 45: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=1);
                            var4 = _closure3_slot0;
                            var3 = {};
                            var6 = false;
                            var3['isPatchOrderLoading'] = var6;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
case 31:
                            return var1;
                        }
                    };
                    return var1;
                };
                var5 = var7.bind(var6)(var5);
                var _closure3_slot3 = var5;
                var5 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot3;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1['patchOrderLineItems'] = var5;
                var1['isCreateOrderLoading'] = var4;
                var5 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            StartGenerator();
                            var4 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                            if(var5) { _fun0008_ip = 46; continue _fun0008 }
case 15:
                            var3 = var4;
                            var _closure5_slot0 = var4;
                            var5 = undefined;
                            var12 = undefined;
case 47: // try_start_0 // try_start_1
                            var7 = _closure3_slot0;
                            var6 = {};
                            var8 = true;
                            var6['isCreateOrderLoading'] = var8;
                            var6 = var7.bind(var5)(var6);
                            var6 = _closure3_slot6;
                            var3 = var6.bind(var5)(var3);
                            SaveGenerator(address=60);
case 48:
                            return var3;
case 49:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                            if(var6) { _fun0008_ip = 35; continue _fun0008 }
case 50: // try_end0
                            _fun0008_ip = 51; continue _fun0008;
case 35: // try_end1
                            var6 = _closure3_slot0;
                            var4 = {};
                            var7 = false;
                            var4['isCreateOrderLoading'] = var7;
                            var4 = var6.bind(var5)(var4);
                            return var3;
case 27: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=8);
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 9;
                            var3 = var7[var3];
                            var8 = var6.bind(var5)(var3);
                            var7 = var8.captureBillingException;
                            var6 = {};
                            var3 = {};
                            var10 = 'NativeCheckoutStore_recreateOrder';
                            var3['source'] = var10;
                            var6['tags'] = var3;
                            var10 = {};
                            var11 = _closure3_slot1;
                            var11 = var11.bind(var5)();
                            var13 = var11.orderRecord;
                            var12 = var13;
                            var11 = null;
                            var13 = var11 == var13;
                            var11 = undefined;
                            if(var13) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                            var11 = var12.id;
case 52:
                            var10['orderId'] = var11;
                            var6['extra'] = var10;
                            var6 = var7.bind(var8)(var9, var6);
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 10;
                            var4 = var7[var4];
                            var7 = var6.bind(var5)(var4);
                            var6 = var7.showCheckoutOrderErrorModal;
                            var4 = _closure2_slot5;
                            var2 = function() {
                                var3 = _closure3_slot6;
                                var2 = _closure5_slot0;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var2 = var6.bind(var7)(var2, var4);
                            SaveGenerator(address=244);
case 54:
                            return var2;
case 55:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0008_ip = 56; continue _fun0008 }
case 51: // try_end2
                            var6 = _closure3_slot0;
                            var4 = {};
                            var7 = false;
                            var4['isCreateOrderLoading'] = var7;
                            var4 = var6.bind(var5)(var4);
                            return var5;
case 56:
                            var4 = _closure3_slot0;
                            var3 = {};
                            var6 = false;
                            var3['isCreateOrderLoading'] = var6;
                            var3 = var4.bind(var5)(var3);
                            return var2;
case 57: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=1);
                            var4 = _closure3_slot0;
                            var3 = {};
                            var6 = false;
                            var3['isCreateOrderLoading'] = var6;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
case 46:
                            return var1;
                        }
                    };
                    return var1;
                };
                var5 = var7.bind(var6)(var5);
                var _closure3_slot2 = var5;
                var5 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot2;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1['recreateOrder'] = var5;
                var5 = _closure2_slot1;
                var1['checkoutInitParameters'] = var5;
                var5 = _closure2_slot2;
                var1['contextMetadata'] = var5;
                var5 = _closure2_slot4;
                var1['orderRequired'] = var5;
                var1['checkoutSucceeded'] = var4;
                var3 = function setCheckoutSucceeded() {
                    var3 = _closure3_slot0;
                    var2 = {};
                    var1 = true;
                    var2['checkoutSucceeded'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['setCheckoutSucceeded'] = var3;
                var2 = _closure2_slot5;
                var1['onOrderRetryCancellation'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createNativeStore'] = var4;
    var3['NativeCheckoutStoreContext'] = var2;
    return var1;
})();