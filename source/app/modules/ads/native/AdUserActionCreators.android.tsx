// app/modules/ads/native/AdUserActionCreators.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = function _fetchAdUser() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 528; continue _fun0001 }
 10:
                    var2 = undefined;
                    var4 = undefined;
                    var9 = global;
                    var6 = var9.performance;
                    var5 = var6.now;
                    var4 = var5.bind(var6)();
 31: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var8 = 2;
                    var5 = var7[var8];
                    var11 = var6.bind(var2)(var5);
                    var10 = var11.dispatch;
                    var5 = {};
                    var12 = 'FETCH_AD_USER_START';
                    var5['type'] = var12;
                    var5 = var10.bind(var11)(var5);
                    var5 = 3;
                    var5 = var7[var5];
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.getGoogleAdvertisingId;
                    var5 = var5.bind(var6)();
                    SaveGenerator(address=104);
 102:
                    return var5;
 104:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 295; continue _fun0001 }
 113:
                    var7 = var9.performance;
                    var6 = var7.now;
                    var7 = var6.bind(var7)();
                    var6 = var4;
                    var14 = var7 - var6;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var10 = 4;
                    var10 = var6[var10];
                    var13 = var7.bind(var2)(var10);
                    var12 = var13.track;
                    var10 = _closure1_slot3;
                    var11 = var10.AD_USER_FETCH_DURATION;
                    var10 = {};
                    var15 = _closure1_slot4;
                    var15 = var15.ANDROID;
                    var10['platform'] = var15;
                    var15 = true;
                    var10['success'] = var15;
                    var10['duration_ms'] = var14;
                    var15 = var5.googleAdvertisingId;
                    var14 = null;
                    var14 = var14 != var15;
                    var10['has_advertising_id'] = var14;
                    var14 = var5.isLimitAdTrackingEnabled;
                    var10['is_limit_ad_tracking_enabled'] = var14;
                    var10 = var12.bind(var13)(var11, var10);
                    var6 = var6[var8];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var10 = 'FETCH_AD_USER_SUCCESS';
                    var6['type'] = var10;
                    var10 = var5.googleAdvertisingId;
                    var6['advertisingId'] = var10;
                    var10 = var5.isLimitAdTrackingEnabled;
                    var6['isLimitAdTrackingEnabled'] = var10;
                    var6 = var7.bind(var8)(var6);
 290: // try_end0
                    _fun0001_ip = 525; continue _fun0001;
 295:
                    return var5;
 298: // catch_target0
                    CatchBlockStart(arg_register=10);
                    var3 = var11;
                    var6 = var9.performance;
                    var5 = var6.now;
                    var5 = var5.bind(var6)();
                    var10 = var5 - var4;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var4 = 4;
                    var4 = var7[var4];
                    var8 = var6.bind(var2)(var4);
                    var7 = var8.track;
                    var4 = _closure1_slot3;
                    var6 = var4.AD_USER_FETCH_DURATION;
                    var4 = {};
                    var12 = _closure1_slot4;
                    var12 = var12.ANDROID;
                    var4['platform'] = var12;
                    var12 = false;
                    var4['success'] = var12;
                    var4['duration_ms'] = var10;
                    var10 = var9.Error;
                    var10 = var11 instanceof var10;
                    if(var10) { _fun0001_ip = 418; continue _fun0001 }
 402:
                    var10 = var9.String;
                    var9 = var3;
                    var9 = var10.bind(var2)(var9);
                    _fun0001_ip = 426; continue _fun0001;
 418:
                    var10 = var3;
                    var9 = var10.message;
 426:
                    var4['error_message'] = var9;
                    var4 = var7.bind(var8)(var6, var4);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var6 = 5;
                    var6 = var5[var6];
                    var8 = var4.bind(var2)(var6);
                    var7 = var8.captureException;
                    var6 = var3;
                    var3 = {};
                    var9 = {};
                    var10 = 'FETCH_AD_USER';
                    var9['source'] = var10;
                    var3['tags'] = var9;
                    var3 = var7.bind(var8)(var6, var3);
                    var3 = 2;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'FETCH_AD_USER_FAILURE';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
 525:
                    return var2;
 528:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot3 = var7;
    var4 = var4.Platforms;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/ads/native/AdUserActionCreators.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function fetchAdUser() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchAdUser'] = var2;
    return var1;
})();