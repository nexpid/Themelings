// app/modules/ads/native/AdUserActionCreators.android.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
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
                    if(var2) { _fun0001_ip = 234; continue _fun0001 }
 10: // try_start_0
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var6 = 2;
                    var2 = var7[var6];
                    var5 = undefined;
                    var9 = var4.bind(var5)(var2);
                    var8 = var9.dispatch;
                    var2 = {};
                    var10 = 'FETCH_AD_USER_START';
                    var2['type'] = var10;
                    var2 = var8.bind(var9)(var2);
                    var2 = 3;
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
                    _fun0001_ip = 229; continue _fun0001;
 156:
                    return var2;
 159: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var5 = _closure1_slot3;
                    var4 = var5.warn;
                    var3 = 'Failed to get google advertising ID:';
                    var3 = var4.bind(var5)(var3, var6);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'FETCH_AD_USER_FAILURE';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
 229:
                    var2 = undefined;
                    return var2;
 234:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot4 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var1;
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
    var4 = 1;
    var4 = var5[var4];
    var7 = var6.bind(var1)(var4);
    var4 = var7.prototype;
    var6 = Object.create(var4, {constructor: {value: var7}});
    var11 = 'AdUserActionCreators';
    var12 = var6;
    var4 = new var12[var7](var11, var10);
    var4 = var4 instanceof Object ? var4 : var6;
    var _closure1_slot3 = var4;
    var4 = 4;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/ads/native/AdUserActionCreators.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function fetchAdUser() {
        var1 = undefined;
        var4 = _closure1_slot4;
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