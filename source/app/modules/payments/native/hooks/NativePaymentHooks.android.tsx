// app/modules/payments/native/hooks/NativePaymentHooks.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var11;
    var1 = function notSupported() {
        var1 = global;
        var3 = var1.Error;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var4 = 'Native hook not supported for android';
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        throw var1;
    };
    var _closure1_slot9 = var1;
    var7 = function useNativeIAPPayments() {
        var1 = _closure1_slot8;
        return var1;
    };
    var _closure1_slot10 = var7;
    var6 = function useGoogleSkuIds(arg1, arg2) {
        var7 = arg1;
        var8 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var8;
        var3 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 5;
        var2 = var5[var2];
        var9 = undefined;
        var6 = var3.bind(var9)(var2);
        var5 = var6.useStateFromStores;
        var2 = _closure1_slot6;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var2 = _closure1_slot6;
            var1 = var2.isFetchingGoogleSkus;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = var5.bind(var6)(var3, var2);
        var _closure2_slot2 = var3;
        var6 = _closure1_slot5;
        var5 = var6.useRef;
        var2 = new Array(0);
        var2 = var5.bind(var6)(var2);
        var _closure2_slot3 = var2;
        var6 = _closure1_slot5;
        var5 = var6.useState;
        var2 = null;
        var6 = var5.bind(var6)(var2);
        var5 = _closure1_slot4;
        var2 = 2;
        var6 = var5.bind(var9)(var6, var2);
        var2 = 0;
        var2 = var6[var2];
        var5 = 1;
        var5 = var6[var5];
        var _closure2_slot4 = var5;
        var6 = _closure1_slot5;
        var5 = var6.useEffect;
        var4 = new Array(3);
        var4[0] = var8;
        var4[1] = var3;
        var4[2] = var7;
        var1 = function() {
            var2 = function _fetch() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                            var2 = undefined;
                            var6 = undefined;
                            var3 = _closure2_slot1;
                            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                            var5 = _closure2_slot3;
                            var3 = new Array(0);
                            var5['current'] = var3;
case 4:
                            var7 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var10 = 6;
                            var5 = var5[var10];
                            var9 = var7.bind(var2)(var5);
                            var8 = var9.difference;
                            var7 = _closure2_slot0;
                            var5 = _closure2_slot3;
                            var5 = var5.current;
                            var6 = var8.bind(var9)(var7, var5);
                            var5 = _closure2_slot2;
                            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                            var5 = _closure2_slot1;
                            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 8:
                            var5 = _closure2_slot0;
                            var5 = var5.length;
                            var7 = 0;
                            if(!(var7 !== var5)) { _fun0001_ip = 6; continue _fun0001 }
case 9:
                            var5 = var6;
                            var5 = var5.length;
                            if(!(var7 !== var5)) { _fun0001_ip = 6; continue _fun0001 }
case 10: // try_start_0
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 7;
                            var5 = var8[var5];
                            var8 = var7.bind(var2)(var5);
                            var7 = var8.loadInAppSkus;
                            var5 = var6;
                            var5 = var7.bind(var8)(var5);
                            SaveGenerator(address=177);
case 11:
                            return var5;
case 12:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                            if(var7) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                            var7 = _closure2_slot3;
                            var9 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var8 = var8[var10];
                            var10 = var9.bind(var2)(var8);
                            var9 = var10.union;
                            var8 = var7.current;
                            var6 = var9.bind(var10)(var8, var6);
                            var7['current'] = var6;
                            var7 = _closure2_slot4;
                            var6 = null;
                            var6 = var7.bind(var2)(var6);
case 15: // try_end0
                            _fun0001_ip = 6; continue _fun0001;
case 13:
                            return var5;
case 16: // catch_target0
                            CatchBlockStart(arg_register=4);
                            var8 = _closure1_slot7;
                            var7 = var8.error;
                            var6 = 'Unable to fetch product IDs from google play store: ';
                            var6 = var7.bind(var8)(var6, var5);
                            var6 = _closure2_slot4;
                            var4 = 'Unable to fetch';
                            var4 = var6.bind(var2)(var4);
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 8;
                            var3 = var6[var3];
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.captureBillingException;
                            var3 = var3.bind(var4)(var5);
case 6:
                            return var2;
case 2:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure3_slot0 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure3_slot0 = var2;
            var2 = function fetch() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1 = undefined;
            var2 = var2.bind(var1)();
            var2 = !var2;
            return var1;
        };
        var1 = var5.bind(var6)(var1, var4);
        var1 = {};
        var1['isFetchingGoogleSkus'] = var3;
        var1['fetchError'] = var2;
        return var1;
    };
    var5 = function useResubscribeSubscription(arg1) {
        var1 = {};
        var3 = _closure1_slot9;
        var1['resubscribeSubscription'] = var3;
        var3 = _closure1_slot10;
        var2 = undefined;
        var2 = var3.bind(var2)();
        var2 = var2.nativePaymentsConnected;
        var1['nativePaymentsConnected'] = var2;
        return var1;
    };
    var4 = function useCancelSubscription(arg1) {
        var1 = {};
        var3 = _closure1_slot9;
        var1['cancelSubscription'] = var3;
        var3 = _closure1_slot10;
        var2 = undefined;
        var2 = var3.bind(var2)();
        var2 = var2.nativePaymentsConnected;
        var1['nativePaymentsConnected'] = var2;
        return var1;
    };
    var2 = function useCreateSubscription(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var1 = {};
            var4 = _closure1_slot9;
            var1['createSubscription'] = var4;
            var4 = _closure1_slot10;
            var3 = undefined;
            var3 = var4.bind(var3)();
            var3 = var3.nativePaymentsConnected;
            var1['nativePaymentsConnected'] = var3;
            return var1;
case 17:
            var5 = "Cannot destructure 'undefined' or 'null'.";
            var6 = var2;
            var1 = throwTypeError(var6, var5);
            var1 = undefined;
            throw var1;
        }
    };
    var1 = global;
    var14 = var1.Object;
    var13 = var14.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var8);
    var1 = 0;
    var8 = var11[var1];
    var1 = undefined;
    var8 = var12.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var11[var8];
    var8 = var12.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var13 = var11[var8];
    var8 = metroImportAll;
    var8 = var8.bind(var1)(var13);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var11[var8];
    var8 = var12.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var11[var8];
    var13 = var12.bind(var1)(var8);
    var8 = var13.prototype;
    var12 = Object.create(var8, {constructor: {value: var13}});
    var17 = 'NativePaymentHooks.android.tsx';
    var18 = var12;
    var8 = new var18[var13](var17, var16);
    var8 = var8 instanceof Object ? var8 : var12;
    var _closure1_slot7 = var8;
    var8 = {'nativePaymentsConnected': true, 'storeFront': null};
    var _closure1_slot8 = var8;
    var8 = {};
    var8['useNativeIAPPayments'] = var7;
    var8['useGoogleSkuIds'] = var6;
    var8['useCreateSubscription'] = var2;
    var8['useCancelSubscription'] = var4;
    var8['useResubscribeSubscription'] = var5;
    var9 = 9;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/payments/native/hooks/NativePaymentHooks.android.tsx';
    var9 = var10.bind(var11)(var9);
    var3['default'] = var8;
    var3['useNativeIAPPayments'] = var7;
    var3['useGoogleSkuIds'] = var6;
    var3['useResubscribeSubscription'] = var5;
    var3['useCancelSubscription'] = var4;
    var3['useCreateSubscription'] = var2;
    return var1;
})();