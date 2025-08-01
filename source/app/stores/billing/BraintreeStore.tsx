// app/stores/billing/BraintreeStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var7 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var6;
        var1 = function _isNativeReflectConstruct() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                _fun0002_ip = 74; continue _fun0002;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
                var2 = function _isNativeReflectConstruct() {
                    var1 = _closure2_slot0;
                    var1 = !var1;
                    var1 = !var1;
                    return var1;
                };
                _closure1_slot16 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot16 = var1;
        var2 = global;
        var10 = var2.Object;
        var9 = var10.defineProperty;
        var8 = {};
        var1 = true;
        var8['value'] = var1;
        var1 = '__esModule';
        var1 = var9.bind(var10)(var3, var1, var8);
        var1 = 0;
        var8 = var6[var1];
        var1 = undefined;
        var8 = var7.bind(var1)(var8);
        var _closure1_slot2 = var8;
        var8 = 1;
        var8 = var6[var8];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot3 = var8;
        var8 = 2;
        var8 = var6[var8];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot4 = var8;
        var8 = 3;
        var8 = var6[var8];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot5 = var8;
        var8 = 4;
        var8 = var6[var8];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot6 = var8;
        var8 = 5;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var9 = var8.Endpoints;
        var _closure1_slot7 = var9;
        var9 = var8.PaymentGateways;
        var _closure1_slot8 = var9;
        var8 = var8.PaymentSourceTypes;
        var _closure1_slot9 = var8;
        var8 = null;
        var _closure1_slot12 = var8;
        var _closure1_slot13 = var8;
        var _closure1_slot14 = var8;
        var8 = 6;
        var8 = var6[var8];
        var9 = var5.bind(var1)(var8);
        var8 = var9.isDesktop;
        var8 = var8.bind(var9)();
        if(!var8) { _fun0001_ip = 259; continue _fun0001 }
 225:
        var8 = var2.window;
        var2 = {};
        var9 = function getReturnUrlPrefix() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure1_slot10;
                var2 = null;
                if(!(var2 != var3)) { _fun0003_ip = 81; continue _fun0003 }
 13:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.getAPIBaseURL;
                var2 = var2.bind(var3)();
                var5 = _closure1_slot7;
                var4 = var5.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                var3 = _closure1_slot8;
                var3 = var3.BRAINTREE;
                var1 = _closure1_slot10;
                var1 = var4.bind(var5)(var3, var1);
                var1 = var2 + var1;
                return var1;
 81:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var7 = 'popupBridgeState is unset';
                var8 = var2;
                var1 = new var8[var3](var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var2['getReturnUrlPrefix'] = var9;
        var9 = function open(arg1) {
            var4 = arg1;
            var _closure1_slot11 = var4;
            var2 = global;
            var3 = var2.window;
            var2 = var3.open;
            var2 = var2.bind(var3)(var4);
            var2 = _closure1_slot15;
            var1 = var2.emitChange;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var2['open'] = var9;
        var8['popupBridge'] = var2;
 259:
        var2 = 8;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var8 = var2.Store;
        var2 = function(arg1) {
            var4 = function BraintreeStore() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = this;
                    var3 = undefined;
                    var5 = undefined;
                    var1 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var1 = var1.bind(var3)(var4, var2);
                    var1 = _closure1_slot5;
                    var9 = var1.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var1 = _closure1_slot16;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0004_ip = 69; continue _fun0004 }
 51:
                    var7 = var9.apply;
                    var5 = arguments;
                    var1 = var5;
                    var1 = var7.bind(var9)(var4, var1);
                    _fun0004_ip = 105; continue _fun0004;
 69:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot5;
                    var6 = var6.bind(var3)(var4);
                    var6 = var6.constructor;
                    var5 = arguments;
                    var1 = var7.bind(var8)(var9, var5, var6);
 105:
                    var1 = var2.bind(var3)(var4, var1);
                    return var1;
                }
            };
            var _closure2_slot0 = var4;
            var5 = _closure1_slot6;
            var3 = undefined;
            var2 = arg1;
            var2 = var5.bind(var3)(var4, var2);
            var2 = _closure1_slot3;
            var5 = {};
            var1 = 'getClient';
            var5['key'] = var1;
            var1 = function value() {
                var1 = _closure1_slot12;
                return var1;
            };
            var5['value'] = var1;
            var1 = new Array(4);
            var1[0] = var5;
            var5 = {};
            var7 = 'getPayPalClient';
            var5['key'] = var7;
            var7 = function value() {
                var1 = _closure1_slot13;
                return var1;
            };
            var5['value'] = var7;
            var1[1] = var5;
            var5 = {};
            var7 = 'getVenmoClient';
            var5['key'] = var7;
            var7 = function value() {
                var1 = _closure1_slot14;
                return var1;
            };
            var5['value'] = var7;
            var1[2] = var5;
            var5 = {};
            var7 = 'getLastURL';
            var5['key'] = var7;
            var6 = function value() {
                var1 = _closure1_slot11;
                return var1;
            };
            var5['value'] = var6;
            var1[3] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var9 = var2.bind(var1)(var8);
        var2 = 'BraintreeStore';
        var9['displayName'] = var2;
        var2 = 9;
        var2 = var6[var2];
        var13 = var7.bind(var1)(var2);
        var2 = {};
        var7 = function handleBraintreeCreateClientSuccess(arg1) {
            var1 = arg1;
            var2 = var1.client;
            _closure1_slot12 = var2;
            var1 = undefined;
            return var1;
        };
        var2['BRAINTREE_CREATE_CLIENT_SUCCESS'] = var7;
        var7 = function handleBraintreeCreatePayPalClientSuccess(arg1) {
            var1 = arg1;
            var2 = var1.paypalClient;
            _closure1_slot13 = var2;
            var1 = undefined;
            return var1;
        };
        var2['BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS'] = var7;
        var7 = function handleBillingPopupBridgeCallback(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = arg1;
                var6 = var1.paymentSourceType;
                var4 = var1.state;
                var2 = var1.path;
                var1 = var1.query;
                var5 = _closure1_slot9;
                var5 = var5.PAYPAL;
                if(!(var6 === var5)) { _fun0005_ip = 103; continue _fun0005 }
 42:
                var3 = _closure1_slot10;
                if(!(var4 === var3)) { _fun0005_ip = 103; continue _fun0005 }
 50:
                var3 = global;
                var3 = var3.window;
                var3 = var3.popupBridge;
                var4 = var3.onComplete;
                var5 = 'function';
                var3 = typeof var4;
                if(!(var5 === var3)) { _fun0005_ip = 103; continue _fun0005 }
 81:
                var3 = {};
                var3['path'] = var2;
                var3['queryItems'] = var1;
                var2 = undefined;
                var1 = null;
                var1 = var4.bind(var2)(var1, var3);
 103:
                var1 = undefined;
                return var1;
            }
        };
        var2['BILLING_POPUP_BRIDGE_CALLBACK'] = var7;
        var7 = function handleBillingPopupBridgeStateUpdate(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = arg1;
                var4 = var1.paymentSourceType;
                var2 = var1.state;
                var3 = _closure1_slot9;
                var3 = var3.PAYPAL;
                if(!(var4 === var3)) { _fun0006_ip = 35; continue _fun0006 }
 31:
                var _closure1_slot10 = var2;
 35:
                var1 = undefined;
                return var1;
            }
        };
        var2['BILLING_POPUP_BRIDGE_STATE_UPDATE'] = var7;
        var7 = function handleBraintreeTeardownPayPalClient() {
            var1 = null;
            _closure1_slot13 = var1;
            var1 = undefined;
            return var1;
        };
        var2['BRAINTREE_TEARDOWN_PAYPAL_CLIENT'] = var7;
        var7 = function handleBraintreeCreateVenmoClientSuccess(arg1) {
            var1 = arg1;
            var2 = var1.venmoClient;
            _closure1_slot14 = var2;
            var1 = undefined;
            return var1;
        };
        var2['BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS'] = var7;
        var7 = function handleBraintreeTeardownVenmoClient() {
            var1 = null;
            _closure1_slot14 = var1;
            var1 = undefined;
            return var1;
        };
        var2['BRAINTREE_TEARDOWN_VENMO_CLIENT'] = var7;
        var7 = var9.prototype;
        var7 = Object.create(var7, {constructor: {value: var9}});
        var14 = var7;
        var12 = var2;
        var2 = new var14[var9](var13, var12, var11);
        var2 = var2 instanceof Object ? var2 : var7;
        var _closure1_slot15 = var2;
        var4 = 10;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'stores/billing/BraintreeStore.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();