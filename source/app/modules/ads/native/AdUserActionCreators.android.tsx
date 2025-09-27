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
                    if(var2) { _fun0001_ip = 819; continue _fun0001 }
 10:
                    var10 = arg1;
                    var2 = undefined;
                    var4 = undefined;
                    var12 = undefined;
                    var5 = _closure1_slot3;
                    var5 = var5.adUser;
                    var16 = null;
                    if(!(var16 != var5)) { _fun0001_ip = 166; continue _fun0001 }
 41:
                    var5 = _closure1_slot3;
                    var5 = var5.adUser;
                    var5 = var5.advertisingId;
                    if(!(var16 != var5)) { _fun0001_ip = 166; continue _fun0001 }
 61:
                    var5 = _closure1_slot3;
                    var13 = var5.adUser;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 3;
                    var5 = var8[var5];
                    var9 = var7.bind(var2)(var5);
                    var8 = var9.track;
                    var5 = _closure1_slot4;
                    var7 = var5.AD_IDENTIFIER_FETCHED;
                    var5 = {};
                    var11 = true;
                    var5['has_advertising_id'] = var11;
                    var13 = var13.advertisingId;
                    var5['android_advertising_id'] = var13;
                    var13 = var10;
                    var5['location'] = var13;
                    var5['success'] = var11;
                    var11 = _closure1_slot3;
                    var11 = var11.lastFetchedAt;
                    var5['last_fetched_timestamp'] = var11;
                    var5 = var8.bind(var9)(var7, var5);
                    _fun0001_ip = 816; continue _fun0001;
 166:
                    var11 = global;
                    var7 = var11.performance;
                    var5 = var7.now;
                    var4 = var5.bind(var7)();
 183: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var9 = 4;
                    var5 = var8[var9];
                    var14 = var7.bind(var2)(var5);
                    var13 = var14.dispatch;
                    var5 = {};
                    var15 = 'FETCH_AD_USER_START';
                    var5['type'] = var15;
                    var5 = var13.bind(var14)(var5);
                    var5 = 5;
                    var5 = var8[var5];
                    var7 = var7.bind(var2)(var5);
                    var5 = var7.getGoogleAdvertisingId;
                    var5 = var5.bind(var7)();
                    SaveGenerator(address=253);
 251:
                    return var5;
 253:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 539; continue _fun0001 }
 262:
                    var12 = var5;
                    var8 = var11.performance;
                    var7 = var8.now;
                    var8 = var7.bind(var8)();
                    var7 = var4;
                    var20 = var8 - var7;
                    var8 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var7 = 3;
                    var14 = var13[var7];
                    var19 = var8.bind(var2)(var14);
                    var18 = var19.track;
                    var14 = _closure1_slot4;
                    var17 = var14.AD_USER_FETCH_DURATION;
                    var14 = {};
                    var15 = _closure1_slot5;
                    var15 = var15.ANDROID;
                    var14['platform'] = var15;
                    var15 = true;
                    var14['success'] = var15;
                    var14['duration_ms'] = var20;
                    var20 = var5.googleAdvertisingId;
                    var20 = var16 != var20;
                    var14['has_advertising_id'] = var20;
                    var20 = var5.isLimitAdTrackingEnabled;
                    var14['is_limit_ad_tracking_enabled'] = var20;
                    var14 = var18.bind(var19)(var17, var14);
                    var7 = var13[var7];
                    var14 = var8.bind(var2)(var7);
                    var13 = var14.track;
                    var7 = _closure1_slot4;
                    var8 = var7.AD_IDENTIFIER_FETCHED;
                    var7 = {};
                    var17 = var5.googleAdvertisingId;
                    var17 = var16 != var17;
                    var7['has_advertising_id'] = var17;
                    var17 = var5.googleAdvertisingId;
                    var17 = var16 != var17;
                    var16 = null;
                    if(!var17) { _fun0001_ip = 450; continue _fun0001 }
 441:
                    var17 = var12;
                    var16 = var17.googleAdvertisingId;
 450:
                    var7['android_advertising_id'] = var16;
                    var16 = var10;
                    var7['location'] = var16;
                    var7['success'] = var15;
                    var7 = var13.bind(var14)(var8, var7);
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var9];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var13 = 'FETCH_AD_USER_SUCCESS';
                    var7['type'] = var13;
                    var13 = var12.googleAdvertisingId;
                    var7['advertisingId'] = var13;
                    var12 = var12.isLimitAdTrackingEnabled;
                    var7['isLimitAdTrackingEnabled'] = var12;
                    var7 = var8.bind(var9)(var7);
 534: // try_end0
                    _fun0001_ip = 816; continue _fun0001;
 539:
                    return var5;
 542: // catch_target0
                    CatchBlockStart(arg_register=12);
                    var3 = var13;
                    var7 = var11.performance;
                    var5 = var7.now;
                    var5 = var5.bind(var7)();
                    var12 = var5 - var4;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var7 = 3;
                    var4 = var4[var7];
                    var9 = var5.bind(var2)(var4);
                    var8 = var9.track;
                    var4 = _closure1_slot4;
                    var5 = var4.AD_USER_FETCH_DURATION;
                    var4 = {};
                    var14 = _closure1_slot5;
                    var14 = var14.ANDROID;
                    var4['platform'] = var14;
                    var14 = false;
                    var4['success'] = var14;
                    var4['duration_ms'] = var12;
                    var12 = var11.Error;
                    var12 = var13 instanceof var12;
                    if(var12) { _fun0001_ip = 659; continue _fun0001 }
 643:
                    var12 = var11.String;
                    var11 = var3;
                    var11 = var12.bind(var2)(var11);
                    _fun0001_ip = 667; continue _fun0001;
 659:
                    var12 = var3;
                    var11 = var12.message;
 667:
                    var4['error_message'] = var11;
                    var4 = var8.bind(var9)(var5, var4);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var7 = var5[var7];
                    var9 = var4.bind(var2)(var7);
                    var8 = var9.track;
                    var6 = _closure1_slot4;
                    var7 = var6.AD_IDENTIFIER_FETCHED;
                    var6 = {'has_advertising_id': false, 'location': null, 'success': false};
                    var6['location'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var6 = 6;
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
                    var3 = 4;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'FETCH_AD_USER_FAILURE';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
 816:
                    return var2;
 819:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot4 = var7;
    var4 = var4.Platforms;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/ads/native/AdUserActionCreators.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function fetchAdUser() {
        var1 = undefined;
        var4 = _closure1_slot6;
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