// app/modules/ads/native/AdUserActionCreators.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
                    if(var2) { _fun0001_ip = 256; continue _fun0001 }
 10: // try_start_0
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var6 = 1;
                    var2 = var7[var6];
                    var5 = undefined;
                    var9 = var4.bind(var5)(var2);
                    var8 = var9.dispatch;
                    var2 = {};
                    var10 = 'FETCH_AD_USER_START';
                    var2['type'] = var10;
                    var2 = var8.bind(var9)(var2);
                    var2 = 2;
                    var2 = var7[var2];
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.getGoogleAdvertisingId;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=85);
 83:
                    return var2;
 85:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 156; continue _fun0001 }
 91:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var6];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'FETCH_AD_USER_SUCCESS';
                    var3['type'] = var6;
                    var6 = var2.googleAdvertisingId;
                    var3['advertisingId'] = var6;
                    var6 = var2.isLimitAdTrackingEnabled;
                    var3['isLimitAdTrackingEnabled'] = var6;
                    var3 = var4.bind(var5)(var3);
 154: // try_end0
                    _fun0001_ip = 251; continue _fun0001;
 156:
                    return var2;
 159: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 3;
                    var2 = var5[var2];
                    var3 = undefined;
                    var7 = var4.bind(var3)(var2);
                    var6 = var7.captureException;
                    var2 = {};
                    var9 = {};
                    var10 = 'FETCH_AD_USER';
                    var9['source'] = var10;
                    var2['tags'] = var9;
                    var2 = var6.bind(var7)(var8, var2);
                    var2 = 1;
                    var2 = var5[var2];
                    var4 = var4.bind(var3)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'FETCH_AD_USER_FAILURE';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
 251:
                    var2 = undefined;
                    return var2;
 256:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot3 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 4;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/ads/native/AdUserActionCreators.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function fetchAdUser() {
        var1 = undefined;
        var4 = _closure1_slot3;
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