// app/actions/native/GPlayActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var12;
    var5 = function withGPlayBillingErrorHandling(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[1];
            var3 = arg1;
            var _closure2_slot0 = var3;
            var3 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = false;
case 2:
            var _closure2_slot1 = var2;
            var2 = _closure1_slot3;
            var1 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var11 = 0;
                        var5 = copyRestArgs(var11);
                        var4 = undefined;
                        SaveGenerator(address=22);
case 2:
                        return var4;
case 6:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0002_ip = 7; continue _fun0002 }
case 8: // try_start_0
                        var6 = _closure2_slot0;
                        var10 = var5;
                        var5 = new Array(0);
                        var11 = var5;
                        var9 = 0;
                        var7 = arraySpread(var11, var10, var9);
                        var11 = var6;
                        var10 = var5;
                        var9 = undefined;
                        var5 = apply(var11, var10, var9);
                        SaveGenerator(address=70);
case 9:
                        return var5;
case 10:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                        if(var6) { _fun0002_ip = 11; continue _fun0002 }
case 12: // try_end0
                        return var5;
case 11:
                        return var5;
case 13: // catch_target0
                        CatchBlockStart(arg_register=5);
                        var3 = var6;
                        var5 = null;
                        var5 = var5 == var6;
                        var7 = undefined;
                        if(var5) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                        var5 = var3;
                        var7 = var5.code;
case 14:
                        var6 = _closure1_slot10;
                        var8 = var6.SERVICE_DISCONNECTED;
                        var6 = new Array(6);
                        var6[0] = var8;
                        var8 = _closure1_slot10;
                        var8 = var8.SERVICE_TIMEOUT;
                        var6[1] = var8;
                        var8 = _closure1_slot10;
                        var8 = var8.SERVICE_UNAVAILABLE;
                        var6[2] = var8;
                        var8 = _closure1_slot10;
                        var8 = var8.BILLING_UNAVAILABLE;
                        var6[3] = var8;
                        var8 = _closure1_slot10;
                        var8 = var8.FEATURE_NOT_SUPPORTED;
                        var6[4] = var8;
                        var8 = _closure1_slot10;
                        var8 = var8.BILLING_CLIENT_NOT_READY;
                        var6[5] = var8;
                        var6 = var7 in var6;
                        if(var6) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 10;
                        var6 = var8[var6];
                        var8 = var7.bind(var4)(var6);
                        var7 = var8.captureBillingException;
                        var6 = var3;
                        var6 = var7.bind(var8)(var6);
                        _fun0002_ip = 18; continue _fun0002;
case 16:
                        var6 = global;
                        var7 = var6.Math;
                        var6 = var7.random;
                        var7 = var6.bind(var7)();
                        var6 = 0.01;
                        if(!(var7 < var6)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 10;
                        var5 = var7[var5];
                        var7 = var6.bind(var4)(var5);
                        var6 = var7.captureBillingException;
                        var5 = var3;
                        var5 = var6.bind(var7)(var5);
case 19:
                        var5 = _closure2_slot1;
                        if(var5) { _fun0002_ip = 21; continue _fun0002 }
case 18:
                        var5 = _closure2_slot1;
                        if(var5) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                        return var4;
case 22:
                        var4 = var3;
                        throw var4;
case 21:
                        throw var3;
case 7:
                        return var2;
case 4:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var1 = global;
    var8 = var1.Object;
    var6 = var8.defineProperty;
    var4 = {};
    var7 = true;
    var4['value'] = var7;
    var1 = '__esModule';
    var1 = var6.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var12[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var4);
    var _closure1_slot3 = var6;
    var4 = 1;
    var4 = var12[var4];
    var4 = var11.bind(var1)(var4);
    var4 = var4.NativeModules;
    var8 = 2;
    var8 = var12[var8];
    var8 = var11.bind(var1)(var8);
    var10 = var8.deleteGPlayAnalytics;
    var _closure1_slot4 = var10;
    var8 = var8.useGPlayAnalyticsStore;
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var12[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var12[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var12[var8];
    var8 = var11.bind(var1)(var8);
    var9 = var8.AnalyticEvents;
    var _closure1_slot8 = var9;
    var8 = var8.Endpoints;
    var _closure1_slot9 = var8;
    var8 = 6;
    var8 = var12[var8];
    var8 = var11.bind(var1)(var8);
    var9 = var8.GPlayBillingResult;
    var _closure1_slot10 = var9;
    var8 = var8.GPlaySkusType;
    var _closure1_slot11 = var8;
    var8 = 7;
    var8 = var12[var8];
    var8 = var11.bind(var1)(var8);
    var8 = var8.PaymentGateways;
    var _closure1_slot12 = var8;
    var4 = var4.BillingManager;
    var _closure1_slot13 = var4;
    var4 = function* () {
        var1 = function* anon_0_() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                StartGenerator();
                var2 = arguments[0];
                ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                if(var4) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                var6 = undefined;
                if(!(var2 === var6)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 8;
                var5 = var8[var5];
                var5 = var7.bind(var6)(var5);
                var2 = var5.SubscriptionProductIds;
case 26:
                var3 = var2;
                SaveGenerator(address=55);
case 28:
                return var6;
case 29:
                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                if(var4) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                var5 = var3;
                var4 = null;
                if(!(var4 != var5)) { _fun0003_ip = 32; continue _fun0003 }
case 12:
                var4 = var3;
                var4 = var4.length;
                var11 = 0;
                if(!(var11 !== var4)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                var8 = _closure1_slot1;
                var5 = _closure1_slot2;
                var7 = 9;
                var5 = var5[var7];
                var9 = var8.bind(var6)(var5);
                var8 = var9.dispatch;
                var5 = {};
                var10 = 'GPLAY_FETCH_SUBSCRIPTION_SKUS_START';
                var5['type'] = var10;
                var5 = var8.bind(var9)(var5);
case 34: // try_start_0
                var8 = _closure1_slot13;
                var5 = var8.getSubscriptionSkus;
                var3 = var5.bind(var8)(var3);
                SaveGenerator(address=159);
case 35:
                return var3;
case 36:
                ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                if(var5) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                var8 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var9 = var8.bind(var6)(var5);
                var8 = var9.dispatch;
                var5 = {};
                var10 = 'GPLAY_SUBSCRIPTION_SKUS_LOADED';
                var5['type'] = var10;
                var10 = new Array(0);
                var14 = var10;
                var13 = var3;
                var12 = 0;
                var11 = arraySpread(var14, var13, var12);
                var5['skus'] = var10;
                var10 = _closure1_slot11;
                var10 = var10.SUBSCRIPTION;
                var5['skusType'] = var10;
                var5 = var8.bind(var9)(var5);
case 16: // try_end0
                return var3;
case 37:
                return var3;
case 39: // catch_target0
                CatchBlockStart(arg_register=2);
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var6 = var5.bind(var6)(var4);
                var5 = var6.dispatch;
                var4 = {};
                var7 = 'GPLAY_FETCH_SUBSCRIPTION_SKUS_FAILED';
                var4['type'] = var7;
                var4 = var5.bind(var6)(var4);
                throw var3;
case 32:
                var3 = new Array(0);
                return var3;
case 30:
                return var2;
case 24:
                return var1;
            }
        };
        var2 = var1.next;
        var2 = var2.bind(var1)();
        return var1;
    };
    var4 = var6.bind(var1)(var4);
    var9 = var5.bind(var1)(var4, var7);
    var _closure1_slot14 = var9;
    var4 = function* () {
        var1 = function* anon_0_() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                StartGenerator();
                var2 = arguments[0];
                ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                if(var4) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var6 = undefined;
                if(!(var2 === var6)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 8;
                var5 = var8[var5];
                var5 = var7.bind(var6)(var5);
                var2 = var5.IAPProductIds;
case 26:
                var3 = var2;
                SaveGenerator(address=55);
case 28:
                return var6;
case 29:
                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                if(var4) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                var5 = var3;
                var4 = null;
                if(!(var4 != var5)) { _fun0004_ip = 32; continue _fun0004 }
case 12:
                var4 = var3;
                var4 = var4.length;
                var11 = 0;
                if(!(var11 !== var4)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                var8 = _closure1_slot1;
                var5 = _closure1_slot2;
                var7 = 9;
                var5 = var5[var7];
                var9 = var8.bind(var6)(var5);
                var8 = var9.dispatch;
                var5 = {};
                var10 = 'GPLAY_FETCH_IN_APP_SKUS_START';
                var5['type'] = var10;
                var5 = var8.bind(var9)(var5);
case 34: // try_start_0
                var8 = _closure1_slot13;
                var5 = var8.getIAPSkus;
                var3 = var5.bind(var8)(var3);
                SaveGenerator(address=159);
case 35:
                return var3;
case 36:
                ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                if(var5) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                var8 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var9 = var8.bind(var6)(var5);
                var8 = var9.dispatch;
                var5 = {};
                var10 = 'GPLAY_IN_APP_SKUS_LOADED';
                var5['type'] = var10;
                var10 = new Array(0);
                var14 = var10;
                var13 = var3;
                var12 = 0;
                var11 = arraySpread(var14, var13, var12);
                var5['skus'] = var10;
                var10 = _closure1_slot11;
                var10 = var10.IN_APP;
                var5['skusType'] = var10;
                var5 = var8.bind(var9)(var5);
case 16: // try_end0
                return var3;
case 37:
                return var3;
case 39: // catch_target0
                CatchBlockStart(arg_register=2);
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var6 = var5.bind(var6)(var4);
                var5 = var6.dispatch;
                var4 = {};
                var7 = 'GPLAY_FETCH_IN_APP_SKUS_FAILED';
                var4['type'] = var7;
                var4 = var5.bind(var6)(var4);
                throw var3;
case 32:
                var3 = new Array(0);
                return var3;
case 30:
                return var2;
case 24:
                return var1;
            }
        };
        var2 = var1.next;
        var2 = var2.bind(var1)();
        return var1;
    };
    var4 = var6.bind(var1)(var4);
    var8 = var5.bind(var1)(var4, var7);
    var _closure1_slot15 = var8;
    var4 = function* () {
        var1 = function* anon_0_() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                StartGenerator();
                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                if(var2) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                var2 = global;
                var5 = var2.Promise;
                var4 = var5.all;
                var2 = _closure1_slot14;
                var3 = undefined;
                var7 = var2.bind(var3)();
                var2 = new Array(2);
                var2[0] = var7;
                var6 = _closure1_slot15;
                var6 = var6.bind(var3)();
                var2[1] = var6;
                var2 = var4.bind(var5)(var2);
                SaveGenerator(address=63);
case 42:
                return var2;
case 43:
                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                if(var4) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                return var3;
case 44:
                return var2;
case 40:
                return var1;
            }
        };
        return var1;
    };
    var4 = var6.bind(var1)(var4);
    var7 = var5.bind(var1)(var4);
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 46; continue _fun0006 }
case 25:
                    var9 = var6;
                    var4 = arg2;
                    var2 = undefined;
                    var8 = undefined;
                    var7 = _closure1_slot5;
                    var5 = var7.getState;
                    var5 = var5.bind(var7)();
                    var5 = var5.analyticsByProductId;
                    var8 = var5[var6];
case 47: // try_start_0
                    var7 = _closure1_slot13;
                    var6 = var7.purchase;
                    var5 = var9;
                    var4 = var6.bind(var7)(var5, var4);
                    SaveGenerator(address=73);
case 48:
                    return var4;
case 49:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 50; continue _fun0006 }
case 11: // try_end0
                    _fun0006_ip = 51; continue _fun0006;
case 50:
                    return var4;
case 52: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var15 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 10;
                    var4 = var6[var4];
                    var10 = var15.bind(var2)(var4);
                    var5 = var10.captureBillingException;
                    var4 = {};
                    var11 = {};
                    var11['productId'] = var9;
                    var4['tags'] = var11;
                    var4 = var5.bind(var10)(var7, var4);
                    var5 = _closure1_slot1;
                    var4 = 11;
                    var4 = var6[var4];
                    var11 = var5.bind(var2)(var4);
                    var10 = var11.show;
                    var4 = {};
                    var12 = 12;
                    var13 = var6[var12];
                    var13 = var15.bind(var2)(var13);
                    var16 = var13.intl;
                    var14 = var16.string;
                    var13 = var6[var12];
                    var13 = var15.bind(var2)(var13);
                    var13 = var13.t;
                    var13 = var13.U+H+kZ;
                    var13 = var14.bind(var16)(var13);
                    var4['title'] = var13;
                    var13 = var6[var12];
                    var13 = var15.bind(var2)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var6[var12];
                    var12 = var15.bind(var2)(var12);
                    var12 = var12.t;
                    var12 = var12.LFFx5O;
                    var12 = var13.bind(var14)(var12);
                    var4['body'] = var12;
                    var4 = var10.bind(var11)(var4);
                    var4 = 13;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot8;
                    var4 = var3.GPLAY_PURCHASE_FAILED;
                    var3 = {};
                    var17 = var8;
                    var18 = var3;
                    var8 = copyDataProperties(var18, var17);
                    var10 = 'purchase';
                    var8 = 'location';
                    var3[var8] = var10;
                    var8 = 'product_id';
                    var3[var8] = var9;
                    var8 = var7.message;
                    var7 = 'error';
                    var3[var7] = var8;
                    var3 = var5.bind(var6)(var4, var3);
case 51:
                    return var2;
case 46:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var6 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3, arg4, arg5) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4, arg5) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 53; continue _fun0007 }
case 5:
                    var8 = arg1;
                    var3 = arg2;
                    var13 = arg3;
                    var2 = arg4;
                    var7 = arg5;
case 54: // try_start_0
                    var11 = _closure1_slot13;
                    var10 = var11.subscribe;
                    var21 = var8;
                    var20 = var3;
                    var19 = var13;
                    var18 = var2;
                    var17 = var7;
                    var22 = var11;
                    var2 = var22[var10](var21, var20, var19, var18, var17, var16);
                    SaveGenerator(address=64);
case 55:
                    return var2;
case 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 40; continue _fun0007 }
case 10: // try_end0
                    _fun0007_ip = 56; continue _fun0007;
case 40:
                    return var2;
case 57: // catch_target0
                    CatchBlockStart(arg_register=9);
                    var6 = var10;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 10;
                    var3 = var5[var3];
                    var5 = undefined;
                    var9 = var4.bind(var5)(var3);
                    var4 = var9.captureBillingException;
                    var3 = {};
                    var11 = {};
                    var12 = var8;
                    var11['productId'] = var12;
                    var14 = var13;
                    var12 = null;
                    var14 = var12 != var14;
                    var12 = '';
                    if(!var14) { _fun0007_ip = 58; continue _fun0007 }
case 59:
                    var12 = var13;
case 58:
                    var11['oldProductId'] = var12;
                    var3['tags'] = var11;
                    var3 = var4.bind(var9)(var10, var3);
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 11;
                    var3 = var9[var3];
                    var11 = var4.bind(var5)(var3);
                    var10 = var11.show;
                    var3 = {};
                    var15 = _closure1_slot0;
                    var12 = 12;
                    var13 = var9[var12];
                    var13 = var15.bind(var5)(var13);
                    var16 = var13.intl;
                    var14 = var16.string;
                    var13 = var9[var12];
                    var13 = var15.bind(var5)(var13);
                    var13 = var13.t;
                    var13 = var13.U+H+kZ;
                    var13 = var14.bind(var16)(var13);
                    var3['title'] = var13;
                    var13 = var9[var12];
                    var13 = var15.bind(var5)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var9[var12];
                    var12 = var15.bind(var5)(var12);
                    var12 = var12.t;
                    var12 = var12.LFFx5O;
                    var12 = var13.bind(var14)(var12);
                    var3['body'] = var12;
                    var3 = var10.bind(var11)(var3);
                    var3 = 13;
                    var3 = var9[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot8;
                    var3 = var2.GPLAY_PURCHASE_FAILED;
                    var2 = {};
                    var9 = 'subscribe';
                    var2['location'] = var9;
                    var2['product_id'] = var8;
                    var2['offer_id'] = var7;
                    var6 = var6.message;
                    var2['error'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 56:
                    var2 = undefined;
                    return var2;
case 53:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var5 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var3 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 60; continue _fun0008 }
case 25:
                    var12 = var3;
                    var14 = arg2;
                    var5 = undefined;
                    var8 = undefined;
                    var18 = undefined;
                    var10 = undefined;
                    var16 = undefined;
                    var15 = undefined;
                    var6 = undefined;
                    var9 = _closure1_slot5;
                    var4 = var9.getState;
                    var4 = var4.bind(var9)();
                    var9 = var4.analyticsByProductId;
                    var4 = var3.productId;
                    var8 = var9[var4];
                    var9 = _closure1_slot6;
                    var4 = var9.getId;
                    var18 = var4.bind(var9)();
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 8;
                    var4 = var11[var4];
                    var4 = var9.bind(var5)(var4);
                    var9 = var4.SubscriptionProductIds;
                    var4 = var9.includes;
                    var3 = var3.productId;
                    var3 = var4.bind(var9)(var3);
                    var9 = !var3;
                    var10 = var9;
                    var4 = null;
                    var16 = null;
                    var15 = null;
                    var3 = var12;
                    var3 = var3.productId;
                    if(var9) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                    var16 = var3;
                    _fun0008_ip = 63; continue _fun0008;
case 61:
                    var15 = var3;
case 63:
                    var3 = var10;
                    if(!var3) { _fun0008_ip = 64; continue _fun0008 }
case 65:
                    var9 = var14;
                    var3 = var4 != var9;
case 64:
                    if(!var3) { _fun0008_ip = 66; continue _fun0008 }
case 67:
                    var9 = var14;
                    var9 = var9.gift_style;
                    var3 = var4 == var9;
case 66:
                    if(!var3) { _fun0008_ip = 68; continue _fun0008 }
case 69:
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var3 = 13;
                    var3 = var11[var3];
                    var13 = var9.bind(var5)(var3);
                    var11 = var13.track;
                    var3 = _closure1_slot8;
                    var9 = var3.GIFT_INFO_OPTIONS_MISSING;
                    var3 = {};
                    var17 = 'verifyPurchase';
                    var3['source'] = var17;
                    var17 = var12;
                    var17 = var17.productId;
                    var3['sku_id'] = var17;
                    var3 = var11.bind(var13)(var9, var3);
case 68: // try_start_0
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var3 = 14;
                    var3 = var11[var3];
                    var3 = var9.bind(var5)(var3);
                    var11 = var3.HTTP;
                    var9 = var11.post;
                    var3 = {};
                    var13 = _closure1_slot9;
                    var13 = var13.VERIFY_PURCHASE;
                    var3['url'] = var13;
                    var13 = {};
                    var17 = var12;
                    var19 = var17.purchaseToken;
                    var13['purchase_token'] = var19;
                    var13['user_id'] = var18;
                    var17 = var17.packageName;
                    var13['package_name'] = var17;
                    var13['subscription_sku_id'] = var16;
                    var13['one_time_purchase_sku_id'] = var15;
                    var13['gift_info_options'] = var14;
                    var14 = {};
                    var15 = true;
                    var14['consume_on_validate'] = var15;
                    var13['one_time_purchase_options'] = var14;
                    var3['body'] = var13;
                    var13 = false;
                    var3['rejectWithError'] = var13;
                    var3 = var9.bind(var11)(var3);
                    SaveGenerator(address=384);
case 70:
                    return var3;
case 71:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0008_ip = 72; continue _fun0008 }
case 73:
                    var6 = var3;
                    var11 = var8;
                    var11 = var4 == var11;
                    var9 = var11;
                    if(var11) { _fun0008_ip = 74; continue _fun0008 }
case 75:
                    var9 = var10;
case 74:
                    if(var9) { _fun0008_ip = 76; continue _fun0008 }
case 77:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var9 = 13;
                    var9 = var11[var9];
                    var13 = var10.bind(var5)(var9);
                    var11 = var13.track;
                    var9 = _closure1_slot8;
                    var10 = var9.PAYMENT_FLOW_COMPLETED;
                    var9 = var8;
                    var9 = var11.bind(var13)(var10, var9);
                    var10 = _closure1_slot4;
                    var9 = var12;
                    var9 = var9.productId;
                    var9 = var10.bind(var5)(var9);
case 76:
                    var6 = var6.body;
case 78: // try_end0
                    return var6;
case 72:
                    return var3;
case 79: // catch_target0
                    CatchBlockStart(arg_register=9);
                    var2 = var10;
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 10;
                    var3 = var9[var3];
                    var9 = var6.bind(var5)(var3);
                    var6 = var9.captureBillingException;
                    var3 = {};
                    var11 = {};
                    var12 = var12.productId;
                    var11['productId'] = var12;
                    var3['tags'] = var11;
                    var3 = var6.bind(var9)(var10, var3);
                    var3 = var8;
                    if(!(var4 != var3)) { _fun0008_ip = 80; continue _fun0008 }
case 81:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 13;
                    var3 = var6[var3];
                    var6 = var4.bind(var5)(var3);
                    var5 = var6.track;
                    var3 = _closure1_slot8;
                    var4 = var3.PAYMENT_FLOW_FAILED;
                    var3 = {};
                    var20 = var8;
                    var21 = var3;
                    var8 = copyDataProperties(var21, var20);
                    var7 = _closure1_slot12;
                    var8 = var7.GOOGLE;
                    var7 = 'payment_gateway';
                    var3[var7] = var8;
                    var3 = var5.bind(var6)(var4, var3);
case 80:
                    throw var2;
case 60:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var4.bind(var1)();
    var10 = 15;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'actions/native/GPlayActionCreators.tsx';
    var10 = var11.bind(var12)(var10);
    var3['loadSubscriptionSkus'] = var9;
    var3['loadInAppSkus'] = var8;
    var3['loadSkus'] = var7;
    var3['purchase'] = var6;
    var3['subscribe'] = var5;
    var3['verifyPurchase'] = var4;
    var4 = function sendPaymentCompleteAnalytics(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot5;
            var3 = var4.getState;
            var3 = var3.bind(var4)();
            var4 = var3.analyticsByProductId;
            var3 = var1.productId;
            var7 = var4[var3];
            var3 = null;
            if(!(var3 != var7)) { _fun0009_ip = 82; continue _fun0009 }
case 83:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 13;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.track;
            var4 = _closure1_slot8;
            var4 = var4.PAYMENT_FLOW_COMPLETED;
            var4 = var5.bind(var6)(var4, var7);
            var2 = _closure1_slot4;
            var1 = var1.productId;
            var1 = var2.bind(var3)(var1);
case 82:
            var1 = undefined;
            return var1;
        }
    };
    var3['sendPaymentCompleteAnalytics'] = var4;
    var4 = function updatePendingDowngrade(arg1, arg2, arg3, arg4) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = _closure1_slot7;
            var3 = var5.getProduct;
            var1 = arg1;
            var1 = var3.bind(var5)(var1);
            var3 = new Array(2);
            var3[0] = var1;
            var4 = var5.getProduct;
            var1 = arg2;
            var1 = var4.bind(var5)(var1);
            var3[1] = var1;
            var1 = 0;
            var6 = var3[var1];
            var1 = 1;
            var3 = var3[var1];
            var4 = null;
            if(!(var4 != var3)) { _fun0010_ip = 84; continue _fun0010 }
case 45:
            if(!(var4 != var6)) { _fun0010_ip = 84; continue _fun0010 }
case 12:
            if(!(var4 != var3)) { _fun0010_ip = 67; continue _fun0010 }
case 85:
            if(!(var4 != var6)) { _fun0010_ip = 67; continue _fun0010 }
case 50:
            var1 = var3.billingPeriod;
            if(!(var4 != var1)) { _fun0010_ip = 67; continue _fun0010 }
case 86:
            var1 = var6.billingPeriod;
            if(!(var4 != var1)) { _fun0010_ip = 67; continue _fun0010 }
case 87:
            var5 = var6.price;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var4 = var4[var1];
            var1 = undefined;
            var9 = var7.bind(var1)(var4);
            var8 = var9.calculateStandardizedUnits;
            var7 = var3.billingPeriod;
            var4 = var6.billingPeriod;
            var4 = var8.bind(var9)(var7, var4);
            var4 = var5 / var4;
            var3 = var3.price;
            if(!(!(var3 < var4))) { _fun0010_ip = 88; continue _fun0010 }
case 67:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'GPLAY_UPDATE_PENDING_DOWNGRADE';
            var2['type'] = var5;
            var5 = {};
            var7 = arg3;
            var5['purchaseToken'] = var7;
            var7 = arg4;
            var5['subscriptionId'] = var7;
            var6 = var6.identifier;
            var5['newSubscriptionSkuId'] = var6;
            var2['pendingDowngrade'] = var5;
            var2 = var3.bind(var4)(var2);
case 84:
            var2 = undefined;
            return var2;
case 88:
            return var1;
        }
    };
    var3['updatePendingDowngrade'] = var4;
    var2 = function downgradeSubscription(arg1) {
        var1 = arg1;
        var7 = var1.purchaseToken;
        var6 = var1.subscriptionId;
        var5 = var1.newSubscriptionSkuId;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 14;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var4 = _closure1_slot9;
        var4 = var4.DOWNGRADE_SUBSCRIPTION;
        var1['url'] = var4;
        var4 = {};
        var4['purchase_token'] = var7;
        var4['subscription_id'] = var6;
        var4['subscription_sku_id'] = var5;
        var1['body'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['downgradeSubscription'] = var2;
    return var1;
})();