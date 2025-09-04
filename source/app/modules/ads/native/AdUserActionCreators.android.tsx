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
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 620; continue _fun0001 }
 10:
                    var14 = arg1;
                    var2 = undefined;
                    var4 = undefined;
                    var10 = undefined;
                    var9 = global;
                    var6 = var9.performance;
                    var5 = var6.now;
                    var4 = var5.bind(var6)();
 36: // try_start_0
                    var7 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var8 = 2;
                    var5 = var11[var8];
                    var13 = var7.bind(var2)(var5);
                    var12 = var13.dispatch;
                    var5 = {};
                    var15 = 'FETCH_AD_USER_START';
                    var5['type'] = var15;
                    var5 = var12.bind(var13)(var5);
                    var5 = 3;
                    var5 = var11[var5];
                    var7 = var7.bind(var2)(var5);
                    var5 = var7.getGoogleAdvertisingId;
                    var5 = var5.bind(var7)();
                    SaveGenerator(address=109);
 107:
                    return var5;
 109:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 387; continue _fun0001 }
 118:
                    var10 = var5;
                    var11 = var9.performance;
                    var7 = var11.now;
                    var11 = var7.bind(var11)();
                    var7 = var4;
                    var15 = var11 - var7;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var7 = 4;
                    var13 = var12[var7];
                    var18 = var11.bind(var2)(var13);
                    var17 = var18.track;
                    var13 = _closure1_slot3;
                    var16 = var13.AD_USER_FETCH_DURATION;
                    var13 = {};
                    var19 = _closure1_slot4;
                    var19 = var19.ANDROID;
                    var13['platform'] = var19;
                    var19 = true;
                    var13['success'] = var19;
                    var13['duration_ms'] = var15;
                    var19 = var5.googleAdvertisingId;
                    var15 = null;
                    var19 = var15 != var19;
                    var13['has_advertising_id'] = var19;
                    var19 = var5.isLimitAdTrackingEnabled;
                    var13['is_limit_ad_tracking_enabled'] = var19;
                    var13 = var17.bind(var18)(var16, var13);
                    var7 = var12[var7];
                    var13 = var11.bind(var2)(var7);
                    var12 = var13.track;
                    var7 = _closure1_slot3;
                    var11 = var7.AD_IDENTIFIER_FETCHED;
                    var7 = {};
                    var16 = var5.googleAdvertisingId;
                    var16 = var15 != var16;
                    var7['has_advertising_id'] = var16;
                    var16 = var5.googleAdvertisingId;
                    var16 = var15 != var16;
                    if(!var16) { _fun0001_ip = 306; continue _fun0001 }
 297:
                    var16 = var10;
                    var15 = var16.googleAdvertisingId;
 306:
                    var7['android_advertising_id'] = var15;
                    var7['location'] = var14;
                    var7 = var12.bind(var13)(var11, var7);
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var6 = var6[var8];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var11 = 'FETCH_AD_USER_SUCCESS';
                    var6['type'] = var11;
                    var11 = var10.googleAdvertisingId;
                    var6['advertisingId'] = var11;
                    var10 = var10.isLimitAdTrackingEnabled;
                    var6['isLimitAdTrackingEnabled'] = var10;
                    var6 = var7.bind(var8)(var6);
 382: // try_end0
                    _fun0001_ip = 617; continue _fun0001;
 387:
                    return var5;
 390: // catch_target0
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
                    if(var10) { _fun0001_ip = 510; continue _fun0001 }
 494:
                    var10 = var9.String;
                    var9 = var3;
                    var9 = var10.bind(var2)(var9);
                    _fun0001_ip = 518; continue _fun0001;
 510:
                    var10 = var3;
                    var9 = var10.message;
 518:
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
 617:
                    return var2;
 620:
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