// app/stores/billing/BillingInfoStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var13 = function handlePaymentSourceCreateEnd() {
        var1 = false;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var12 = function handlePaymentSourcesFetchEnd() {
        var1 = undefined;
        var _closure1_slot6 = var1;
        return var1;
    };
    var11 = function handleSubscriptionFetchEnd() {
        var1 = false;
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var10 = function handleSubscriptionUpdateStart() {
        var1 = true;
        _closure1_slot15 = var1;
        var1 = undefined;
        return var1;
    };
    var9 = function handleSubscriptionUpdateEnd() {
        var1 = false;
        _closure1_slot15 = var1;
        var1 = undefined;
        return var1;
    };
    var1 = global;
    var14 = var1.Object;
    var8 = var14.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var14)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.FallbackCurrencyCountry;
    var _closure1_slot5 = var2;
    var2 = false;
    var _closure1_slot11 = var2;
    var _closure1_slot12 = var2;
    var _closure1_slot13 = var2;
    var _closure1_slot14 = var2;
    var _closure1_slot15 = var2;
    var8 = null;
    var _closure1_slot16 = var8;
    var _closure1_slot17 = var8;
    var _closure1_slot18 = var2;
    var _closure1_slot19 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function BillingInfoStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot20;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
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
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'isBusy';
        var5['key'] = var1;
        var1 = function get() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = _closure1_slot11;
                if(var1) { _fun0003_ip = 14; continue _fun0003 }
 10:
                var1 = _closure1_slot12;
 14:
                if(var1) { _fun0003_ip = 21; continue _fun0003 }
 17:
                var1 = _closure1_slot15;
 21:
                if(var1) { _fun0003_ip = 28; continue _fun0003 }
 24:
                var1 = _closure1_slot13;
 28:
                return var1;
            }
        };
        var5['get'] = var1;
        var1 = new Array(18);
        var1[0] = var5;
        var5 = {};
        var7 = 'isUpdatingPaymentSource';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isRemovingPaymentSource';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isSyncing';
        var5['key'] = var7;
        var7 = function get() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = this;
                var1 = var2.isPaymentSourceFetching;
                if(var1) { _fun0004_ip = 18; continue _fun0004 }
 12:
                var1 = var2.isSubscriptionFetching;
 18:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isSubscriptionFetching';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isPaymentSourceFetching';
        var5['key'] = var7;
        var7 = function get() {
            var2 = _closure1_slot6;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'editSourceError';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'removeSourceError';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'ipCountryCodeLoaded';
        var5['key'] = var7;
        var7 = function get() {
            var2 = _closure1_slot7;
            var1 = undefined;
            var1 = var1 !== var2;
            return var1;
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'ipCountryCode';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'ipCountryCodeRequest';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['get'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'ipLocationLoaded';
        var5['key'] = var7;
        var7 = function get() {
            var2 = _closure1_slot9;
            var1 = undefined;
            var1 = var1 !== var2;
            return var1;
        };
        var5['get'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'ipLocation';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['get'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'ipLocationRequest';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['get'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'ipLocationHasError';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['get'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'ipCountryCodeWithFallback';
        var5['key'] = var7;
        var7 = function get() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = _closure1_slot7;
                var1 = null;
                if(!(var1 == var3)) { _fun0005_ip = 19; continue _fun0005 }
 13:
                var1 = _closure1_slot5;
                _fun0005_ip = 23; continue _fun0005;
 19:
                var1 = _closure1_slot7;
 23:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'ipCountryCodeHasError';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['get'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'paymentSourcesFetchRequest';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot6;
            return var1;
        };
        var5['get'] = var6;
        var1[17] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'BillingInfoStore';
    var8['displayName'] = var2;
    var2 = 7;
    var2 = var6[var2];
    var17 = var7.bind(var1)(var2);
    var2 = {};
    var14 = function handlePaymentSourceCreateStart() {
        var1 = true;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['BILLING_PAYMENT_SOURCE_CREATE_START'] = var14;
    var2['BILLING_PAYMENT_SOURCE_CREATE_SUCCESS'] = var13;
    var2['BILLING_PAYMENT_SOURCE_CREATE_FAIL'] = var13;
    var2['STRIPE_TOKEN_FAILURE'] = var13;
    var13 = function handlePaymentSourceRemoveStart() {
        var1 = true;
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var2['BILLING_PAYMENT_SOURCE_REMOVE_START'] = var13;
    var13 = function handlePaymentSourceRemoveSuccess() {
        var1 = false;
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var2['BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS'] = var13;
    var13 = function handlePaymentSourceRemoveFail(arg1) {
        var1 = arg1;
        var2 = var1.error;
        var3 = false;
        _closure1_slot13 = var3;
        _closure1_slot17 = var2;
        var1 = undefined;
        return var1;
    };
    var2['BILLING_PAYMENT_SOURCE_REMOVE_FAIL'] = var13;
    var13 = function handleClearRemoveError() {
        var1 = null;
        _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var2['BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR'] = var13;
    var13 = function handlePaymentSourceUpdateStart() {
        var1 = true;
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var2['BILLING_PAYMENT_SOURCE_UPDATE_START'] = var13;
    var13 = function handlePaymentSourceUpdateSuccess() {
        var1 = false;
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var2['BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS'] = var13;
    var13 = function handlePaymentSourceUpdateFail(arg1) {
        var1 = arg1;
        var2 = var1.error;
        var3 = false;
        _closure1_slot12 = var3;
        _closure1_slot16 = var2;
        var1 = undefined;
        return var1;
    };
    var2['BILLING_PAYMENT_SOURCE_UPDATE_FAIL'] = var13;
    var13 = function handleClearUpdateError() {
        var1 = null;
        _closure1_slot16 = var1;
        var1 = undefined;
        return var1;
    };
    var2['BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR'] = var13;
    var13 = function handlePaymentSourcesFetchStart(arg1) {
        var1 = arg1;
        var2 = var1.request;
        _closure1_slot6 = var2;
        var1 = undefined;
        return var1;
    };
    var2['BILLING_PAYMENT_SOURCES_FETCH_START'] = var13;
    var2['BILLING_PAYMENT_SOURCES_FETCH_SUCCESS'] = var12;
    var2['BILLING_PAYMENT_SOURCES_FETCH_FAIL'] = var12;
    var12 = function handleSubscriptionFetchStart() {
        var1 = true;
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var2['BILLING_SUBSCRIPTION_FETCH_START'] = var12;
    var2['BILLING_SUBSCRIPTION_FETCH_SUCCESS'] = var11;
    var2['BILLING_SUBSCRIPTION_FETCH_FAIL'] = var11;
    var2['BILLING_SUBSCRIPTION_UPDATE_START'] = var10;
    var2['BILLING_SUBSCRIPTION_CANCEL_START'] = var10;
    var2['BILLING_SUBSCRIPTION_UPDATE_SUCCESS'] = var9;
    var2['BILLING_SUBSCRIPTION_UPDATE_FAIL'] = var9;
    var2['BILLING_SUBSCRIPTION_CANCEL_FAIL'] = var9;
    var2['BILLING_SUBSCRIPTION_CANCEL_SUCCESS'] = var9;
    var9 = function handleIpCountryCodeFetchStart(arg1) {
        var1 = arg1;
        var2 = var1.request;
        var _closure1_slot8 = var2;
        var1 = undefined;
        return var1;
    };
    var2['BILLING_IP_COUNTRY_CODE_FETCH_START'] = var9;
    var9 = function handleSetIpCountryCode(arg1) {
        var1 = arg1;
        var2 = var1.countryCode;
        var _closure1_slot7 = var2;
        var1 = undefined;
        return var1;
    };
    var2['BILLING_SET_IP_COUNTRY_CODE'] = var9;
    var9 = function handleIpCountryCodeFailure() {
        var1 = null;
        _closure1_slot7 = var1;
        var1 = true;
        _closure1_slot18 = var1;
        var1 = undefined;
        return var1;
    };
    var2['BILLING_IP_COUNTRY_CODE_FAILURE'] = var9;
    var9 = function handleIpLocationFetchStart(arg1) {
        var1 = arg1;
        var2 = var1.request;
        var _closure1_slot10 = var2;
        var1 = undefined;
        return var1;
    };
    var2['BILLING_IP_LOCATION_FETCH_START'] = var9;
    var9 = function handleSetIpLocation(arg1) {
        var1 = arg1;
        var2 = var1.location;
        var _closure1_slot9 = var2;
        var1 = undefined;
        return var1;
    };
    var2['BILLING_SET_IP_LOCATION'] = var9;
    var9 = function handleIpLocationFailure() {
        var1 = null;
        _closure1_slot9 = var1;
        var1 = true;
        _closure1_slot19 = var1;
        var1 = undefined;
        return var1;
    };
    var2['BILLING_IP_LOCATION_FAILURE'] = var9;
    var9 = function handleLogout() {
        var1 = undefined;
        _closure1_slot6 = var1;
        _closure1_slot8 = var1;
        _closure1_slot7 = var1;
        var2 = false;
        _closure1_slot18 = var2;
        _closure1_slot9 = var1;
        _closure1_slot19 = var2;
        _closure1_slot10 = var1;
        var2 = null;
        _closure1_slot17 = var2;
        _closure1_slot16 = var2;
        return var1;
    };
    var2['LOGOUT'] = var9;
    var4 = function CONNECTION_OPEN(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var2 = var1.countryCode;
            var1 = null;
            if(!(var1 != var2)) { _fun0006_ip = 22; continue _fun0006 }
 15:
            _closure1_slot7 = var2;
 22:
            var1 = undefined;
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var18 = var4;
    var16 = var2;
    var2 = new var18[var8](var17, var16, var15);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/billing/BillingInfoStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();