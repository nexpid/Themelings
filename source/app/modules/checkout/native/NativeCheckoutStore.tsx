// app/modules/checkout/native/NativeCheckoutStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
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
    var _closure1_slot2 = var5;
    var6 = 1;
    var5 = var8[var6];
    var11 = var12.bind(var1)(var5);
    var10 = 2;
    var9 = var8[var10];
    var5 = metroImportAll;
    var9 = var5.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var5 = 3;
    var5 = var8[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var12.bind(var1)(var5);
    var5 = var5.bind(var1)();
    var5 = var11.bind(var1)(var5, var10);
    var2 = var5[var2];
    var5 = var5[var6];
    var _closure1_slot5 = var5;
    var6 = var9.createContext;
    var5 = 'unset_context';
    var5 = var6.bind(var9)(var5);
    var _closure1_slot6 = var5;
    var6 = 9;
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
            var5 = _closure1_slot1;
            var1 = 5;
            var1 = var5[var1];
            var1 = var2.bind(var3)(var1);
            var4 = var1.shallow;
case 2:
            var1 = _closure1_slot5;
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
            var3 = _closure1_slot1;
            var1 = 5;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var5 = var1.shallow;
case 2:
            var3 = _closure1_slot3;
            var2 = var3.useContext;
            var1 = _closure1_slot6;
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
        var3 = var2.storeFront;
        var _closure2_slot3 = var3;
        var2 = var2.paymentGateway;
        var _closure2_slot4 = var2;
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
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
                var1 = {};
                var5 = _closure2_slot0;
                var4 = null;
                var5 = var4 != var5;
                if(!var5) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var7 = _closure1_slot4;
                var6 = var7.createFromServer;
                var5 = _closure2_slot0;
                var4 = var6.bind(var7)(var5);
case 6:
                var1['orderRecord'] = var4;
                var4 = function setOrder(arg1) {
                    var3 = _closure3_slot0;
                    var2 = {};
                    var5 = _closure1_slot4;
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
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        var2 = var1.orderRecord;
                        var1 = null;
                        var3 = var1 != var2;
                        if(!var3) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                        var1 = var2.checkoutContextRecord;
case 7:
                        return var1;
                    }
                };
                var1['getCheckoutContextRecord'] = var4;
                var4 = false;
                var1['isPatchOrderLoading'] = var4;
                var6 = _closure1_slot2;
                var5 = undefined;
                var7 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0005_ip = 9; continue _fun0005 }
case 10:
                            var8 = arg1;
                            var5 = undefined;
                            var9 = undefined;
                            var2 = _closure3_slot1;
                            var2 = var2.bind(var5)();
                            var4 = var2.orderRecord;
                            var9 = var4;
                            var2 = null;
                            if(!(var2 != var4)) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                            var4 = _closure3_slot0;
                            var2 = {};
                            var6 = true;
                            var2['isPatchOrderLoading'] = var6;
                            var2 = var4.bind(var5)(var2);
case 13: // try_start_0 // try_start_1
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 7;
                            var2 = var6[var2];
                            var6 = var4.bind(var5)(var2);
                            var4 = var6.patchOrder;
                            var2 = {};
                            var10 = var9;
                            var11 = var10.id;
                            var2['orderId'] = var11;
                            var10 = var10.revision;
                            var2['expectedRevision'] = var10;
                            var2['orderLineItems'] = var8;
                            var2 = var4.bind(var6)(var2);
                            SaveGenerator(address=133);
case 14:
                            return var2;
case 15:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                            var6 = _closure3_slot0;
                            var4 = {};
                            var8 = _closure1_slot4;
                            var7 = var8.createFromServer;
                            var7 = var7.bind(var8)(var2);
                            var4['orderRecord'] = var7;
                            var4 = var6.bind(var5)(var4);
case 18: // try_end0 // try_end1
                            var6 = _closure3_slot0;
                            var4 = {};
                            var7 = false;
                            var4['isPatchOrderLoading'] = var7;
                            var4 = var6.bind(var5)(var4);
                            return var2;
case 16:
                            var6 = _closure3_slot0;
                            var4 = {};
                            var7 = false;
                            var4['isPatchOrderLoading'] = var7;
                            var4 = var6.bind(var5)(var4);
                            return var2;
case 19: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=6);
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 8;
                            var2 = var6[var2];
                            var6 = var4.bind(var5)(var2);
                            var4 = var6.captureBillingException;
                            var2 = {};
                            var8 = {};
                            var10 = 'NativeCheckoutStore_patchOrderLineItems';
                            var8['source'] = var10;
                            var2['tags'] = var8;
                            var8 = {};
                            var9 = var9.id;
                            var8['orderId'] = var9;
                            var2['extra'] = var8;
                            var2 = var4.bind(var6)(var7, var2);
case 20: // try_end2
                            var4 = _closure3_slot0;
                            var2 = {};
                            var6 = false;
                            var2['isPatchOrderLoading'] = var6;
                            var2 = var4.bind(var5)(var2);
case 11:
                            return var5;
case 21: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=1);
                            var4 = _closure3_slot0;
                            var3 = {};
                            var6 = false;
                            var3['isPatchOrderLoading'] = var6;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
case 9:
                            return var1;
                        }
                    };
                    return var1;
                };
                var7 = var6.bind(var5)(var7);
                var _closure3_slot3 = var7;
                var7 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot3;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1['patchOrderLineItems'] = var7;
                var1['isCreateOrderLoading'] = var4;
                var4 = function* () {
                    var1 = function* anon_0_() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0006_ip = 22; continue _fun0006 }
case 10:
                            var5 = undefined;
                            var9 = undefined;
                            var11 = undefined;
                            var8 = undefined;
                            var2 = _closure3_slot1;
                            var2 = var2.bind(var5)();
                            var2 = var2.orderRecord;
                            var9 = var2;
                            var4 = null;
                            if(!(var4 != var2)) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                            var2 = var9;
                            var7 = var2.orderLineItems;
                            var6 = var7.map;
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
                            var11 = var6.bind(var7)(var2);
                            var8 = undefined;
                            var2 = _closure2_slot3;
                            if(!(var4 != var2)) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                            var2 = {};
                            var6 = {};
                            var7 = _closure2_slot3;
                            var12 = var7.currency;
                            var6['currency'] = var12;
                            var7 = var7.country;
                            var6['country_code'] = var7;
                            var2['subscription_preview'] = var6;
                            var8 = var2;
                            var2 = _closure2_slot1;
                            var2 = var2.activeSubscription;
                            if(!(var4 != var2)) { _fun0006_ip = 25; continue _fun0006 }
case 27:
                            var4 = var8;
                            var2 = _closure2_slot1;
                            var2 = var2.activeSubscription;
                            var2 = var2.id;
                            var4['subscription_id'] = var2;
case 25:
                            var4 = _closure3_slot0;
                            var2 = {};
                            var6 = true;
                            var2['isCreateOrderLoading'] = var6;
                            var2 = var4.bind(var5)(var2);
case 28: // try_start_0 // try_start_1
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 7;
                            var2 = var6[var2];
                            var6 = var4.bind(var5)(var2);
                            var4 = var6.createOrder;
                            var2 = {};
                            var2['orderLineItems'] = var11;
                            var11 = _closure2_slot4;
                            var2['paymentGateway'] = var11;
                            var10 = _closure2_slot1;
                            var10 = var10.isGift;
                            var2['isGift'] = var10;
                            var2['subscriptionFacet'] = var8;
                            var2 = var4.bind(var6)(var2);
                            SaveGenerator(address=254);
case 29:
                            return var2;
case 30:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                            var6 = _closure3_slot0;
                            var4 = {};
                            var8 = _closure1_slot4;
                            var7 = var8.createFromServer;
                            var7 = var7.bind(var8)(var2);
                            var4['orderRecord'] = var7;
                            var4 = var6.bind(var5)(var4);
case 33: // try_end0
                            _fun0006_ip = 34; continue _fun0006;
case 31: // try_end1
                            var6 = _closure3_slot0;
                            var4 = {};
                            var7 = false;
                            var4['isCreateOrderLoading'] = var7;
                            var4 = var6.bind(var5)(var4);
                            return var2;
case 35: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=6);
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 8;
                            var2 = var6[var2];
                            var6 = var4.bind(var5)(var2);
                            var4 = var6.captureBillingException;
                            var2 = {};
                            var8 = {};
                            var10 = 'NativeCheckoutStore_recreateOrder';
                            var8['source'] = var10;
                            var2['tags'] = var8;
                            var8 = {};
                            var9 = var9.id;
                            var8['orderId'] = var9;
                            var2['extra'] = var8;
                            var2 = var4.bind(var6)(var7, var2);
case 34: // try_end2
                            var4 = _closure3_slot0;
                            var2 = {};
                            var6 = false;
                            var2['isCreateOrderLoading'] = var6;
                            var2 = var4.bind(var5)(var2);
case 23:
                            return var5;
case 36: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=1);
                            var4 = _closure3_slot0;
                            var3 = {};
                            var6 = false;
                            var3['isCreateOrderLoading'] = var6;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
case 22:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var6.bind(var5)(var4);
                var _closure3_slot2 = var4;
                var3 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot2;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1['recreateOrder'] = var3;
                var3 = _closure2_slot1;
                var1['checkoutInitParameters'] = var3;
                var2 = _closure2_slot2;
                var1['contextMetadata'] = var2;
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