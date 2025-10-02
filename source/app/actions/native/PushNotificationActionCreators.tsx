// app/actions/native/PushNotificationActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var1 = function getOrRefreshPushSyncToken() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function _getOrRefreshPushSyncToken() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var7 = var2;
                    var6 = undefined;
                    var5 = undefined;
                    var11 = undefined;
                    var3 = var2.pushSyncToken;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var3 = var7;
                    var3 = var3.pushSyncToken;
                    return var3;
case 4:
                    var8 = _closure1_slot2;
                    var9 = _closure1_slot3;
                    var4 = 6;
                    var4 = var9[var4];
                    var9 = var8.bind(var6)(var4);
                    var8 = var9.getToken;
                    var4 = var7;
                    var4 = var4.id;
                    var4 = var8.bind(var9)(var4);
                    var11 = var4;
                    if(!(var2 != var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var4 = 7;
                    var4 = var9[var4];
                    var4 = var8.bind(var6)(var4);
                    var9 = var4.HTTP;
                    var8 = var9.get;
                    var4 = {};
                    var10 = _closure1_slot9;
                    var10 = var10.DEVICES_SYNC_TOKEN;
                    var4['url'] = var10;
                    var10 = {};
                    var10['authorization'] = var11;
                    var4['headers'] = var10;
                    var10 = false;
                    var4['rejectWithError'] = var10;
                    var4 = var8.bind(var9)(var4);
                    SaveGenerator(address=171);
case 8:
                    return var4;
case 9:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var8 = var4.body;
                    var5 = var8.token;
case 12: // try_end0
                    var9 = _closure1_slot2;
                    var10 = _closure1_slot3;
                    var8 = 9;
                    var8 = var10[var8];
                    var9 = var9.bind(var6)(var8);
                    var8 = var9.updatePushSyncToken;
                    var7 = var7.id;
                    var7 = var8.bind(var9)(var7, var5);
                    return var5;
case 10:
                    return var4;
case 13: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var3 = 8;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var5);
                    return var2;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var8 = var4.DEVICE_TOKEN;
    var _closure1_slot7 = var8;
    var8 = var4.DEVICE_VOIP_TOKEN;
    var _closure1_slot8 = var8;
    var4 = var4.Endpoints;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var8 = var4.BUNDLE_ID;
    var _closure1_slot10 = var8;
    var8 = var4.DEVICE_PUSH_VOIP_PROVIDER;
    var _closure1_slot11 = var8;
    var4 = var4.getDevicePushProvider;
    var _closure1_slot12 = var4;
    var4 = 5;
    var4 = var7[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.prototype;
    var5 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'PushNotificationActionCreators';
    var13 = var5;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot13 = var4;
    var4 = {};
    var5 = function registerDevice(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var1 = arguments[1];
            var4 = this;
            var10 = undefined;
            if(!(var1 === var10)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var1 = false;
case 14:
            var6 = _closure1_slot13;
            var3 = var6.log;
            var2 = global;
            var2 = var2.HermesInternal;
            var9 = var2.concat;
            var7 = 'Registering push notification token: ';
            var2 = ', is voip:';
            var2 = var9.bind(var7)(var5, var2, var1);
            var2 = var3.bind(var6)(var2);
            var3 = _closure1_slot0;
            var6 = _closure1_slot3;
            var2 = 10;
            var2 = var6[var2];
            var2 = var3.bind(var10)(var2);
            var6 = var2.Storage;
            var2 = var6.set;
            var3 = var1;
            if(var3) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var1 = _closure1_slot7;
            _fun0002_ip = 18; continue _fun0002;
case 16:
            var1 = _closure1_slot8;
case 18:
            var1 = var2.bind(var6)(var1, var5);
            var1 = _closure1_slot5;
            var1 = var1.canUseMultiAccountNotifications;
            if(var1) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var2 = _closure1_slot1;
            var6 = _closure1_slot3;
            var1 = 11;
            var1 = var6[var1];
            var6 = var2.bind(var10)(var1);
            var2 = var6.post;
            var1 = {};
            var7 = _closure1_slot9;
            var7 = var7.DEVICES;
            var1['url'] = var7;
            var7 = {};
            if(var3) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var9 = _closure1_slot12;
            var9 = var9.bind(var10)();
            _fun0002_ip = 23; continue _fun0002;
case 21:
            var9 = _closure1_slot11;
case 23:
            var7['provider'] = var9;
            var7['token'] = var5;
            var9 = _closure1_slot0;
            var11 = _closure1_slot3;
            var12 = 12;
            var12 = var11[var12];
            var13 = var9.bind(var10)(var12);
            var12 = var13.isAndroid;
            var12 = var12.bind(var13)();
            var7['bypass_server_throttling_supported'] = var12;
            var8 = _closure1_slot10;
            var7['bundle_id'] = var8;
            var1['body'] = var7;
            var7 = true;
            var1['oldFormErrors'] = var7;
            var7 = {};
            var8 = 13;
            var8 = var11[var8];
            var8 = var9.bind(var10)(var8);
            var8 = var8.NetworkActionNames;
            var8 = var8.USER_REGISTER_DEVICE_TOKEN;
            var7['event'] = var8;
            var1['trackedActionData'] = var7;
            var7 = false;
            var1['rejectWithError'] = var7;
            var1 = var2.bind(var6)(var1);
            _fun0002_ip = 24; continue _fun0002;
case 19:
            var2 = var4.syncDevice;
            var1 = var2.bind(var4)(var5, var3);
case 24:
            return var1;
        }
    };
    var4['registerDevice'] = var5;
    var5 = function syncDevice(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arguments[1];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var3 = false;
case 25:
            var _closure2_slot1 = var3;
            var3 = _closure1_slot4;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                        var3 = undefined;
                        var _closure4_slot0 = var3;
                        var6 = _closure1_slot6;
                        var4 = var6.getId;
                        var4 = var4.bind(var6)();
                        _closure4_slot0 = var4;
                        var4 = global;
                        var6 = var4.Promise;
                        var4 = var6.all;
                        var8 = _closure1_slot5;
                        var7 = var8.getValidUsers;
                        var8 = var7.bind(var8)();
                        var7 = var8.sort;
                        var2 = function(arg1, arg2) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var1 = arg1;
                                var4 = var1.id;
                                var3 = _closure4_slot0;
                                var1 = -1;
                                if(!(var4 !== var3)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                                var3 = arg2;
                                var4 = var3.id;
                                var3 = _closure4_slot0;
                                var2 = 0;
                                if(!(var4 === var3)) { _fun0005_ip = 4; continue _fun0005 }
case 31:
                                var2 = 1;
case 4:
                                var1 = var2;
case 29:
                                return var1;
                            }
                        };
                        var8 = var7.bind(var8)(var2);
                        var7 = var8.map;
                        var2 = _closure1_slot14;
                        var2 = var7.bind(var8)(var2);
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address=110);
case 32:
                        return var2;
case 16:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                        var6 = var2.length;
                        var4 = 1;
                        if(!(!(var6 < var4))) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                        var7 = 0;
                        var6 = var2[var7];
                        var4 = null;
                        if(!(var4 != var6)) { _fun0004_ip = 35; continue _fun0004 }
case 37:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var4 = 7;
                        var4 = var8[var4];
                        var4 = var6.bind(var3)(var4);
                        var8 = var4.HTTP;
                        var6 = var8.put;
                        var4 = {};
                        var9 = _closure1_slot9;
                        var9 = var9.DEVICES_SYNC;
                        var4['url'] = var9;
                        var9 = {};
                        var11 = _closure2_slot1;
                        if(var11) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                        var11 = _closure1_slot12;
                        var11 = var11.bind(var3)();
                        _fun0004_ip = 40; continue _fun0004;
case 38:
                        var11 = _closure1_slot11;
case 40:
                        var9['provider'] = var11;
                        var10 = _closure2_slot0;
                        var9['token'] = var10;
                        var13 = var2.filter;
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot3;
                        var10 = 14;
                        var10 = var12[var10];
                        var10 = var11.bind(var3)(var10);
                        var10 = var10.isNotNullish;
                        var10 = var13.bind(var2)(var10);
                        var9['push_sync_tokens'] = var10;
                        var10 = 12;
                        var10 = var12[var10];
                        var11 = var11.bind(var3)(var10);
                        var10 = var11.isAndroid;
                        var10 = var10.bind(var11)();
                        var9['bypass_server_throttling_supported'] = var10;
                        var10 = _closure1_slot10;
                        var9['bundle_id'] = var10;
                        var4['body'] = var9;
                        var9 = false;
                        var4['rejectWithError'] = var9;
                        var4 = var6.bind(var8)(var4);
                        SaveGenerator(address=333);
case 41:
                        return var4;
case 42:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                        if(var6) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                        var6 = var4.body;
                        var6 = var6.invalid_push_sync_tokens;
                        var6 = var6.length;
                        if(!(var6 > var7)) { _fun0004_ip = 35; continue _fun0004 }
case 45:
                        var6 = _closure1_slot2;
                        var7 = _closure1_slot3;
                        var5 = 9;
                        var5 = var7[var5];
                        var7 = var6.bind(var3)(var5);
                        var6 = var7.invalidatePushSyncTokens;
                        var5 = var4.body;
                        var5 = var5.invalid_push_sync_tokens;
                        var5 = var6.bind(var7)(var5);
                        _fun0004_ip = 35; continue _fun0004;
case 43:
                        return var4;
case 35:
                        return var3;
case 33:
                        return var2;
case 27:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var4['syncDevice'] = var5;
    var5 = function unregisterDevice(arg1) {
        var6 = arg1;
        var3 = _closure1_slot13;
        var2 = var3.log;
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var1 = 'Unregistering push notification token: ';
        var1 = var4.bind(var1)(var6);
        var1 = var2.bind(var3)(var1);
        var2 = _closure1_slot1;
        var8 = _closure1_slot3;
        var1 = 11;
        var1 = var8[var1];
        var7 = undefined;
        var3 = var2.bind(var7)(var1);
        var2 = var3.delete;
        var1 = {};
        var4 = _closure1_slot9;
        var4 = var4.DEVICES;
        var1['url'] = var4;
        var4 = {};
        var9 = _closure1_slot12;
        var9 = var9.bind(var7)();
        var4['provider'] = var9;
        var4['token'] = var6;
        var1['body'] = var4;
        var4 = {};
        var6 = _closure1_slot0;
        var5 = 13;
        var5 = var8[var5];
        var5 = var6.bind(var7)(var5);
        var5 = var5.NetworkActionNames;
        var5 = var5.USER_UNREGISTER_DEVICE_TOKEN;
        var4['event'] = var5;
        var1['trackedActionData'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['unregisterDevice'] = var5;
    var5 = 16;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'actions/native/PushNotificationActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function setPushPermissionState(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot3;
        var1 = 15;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.wait;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'PUSH_NOTIFICATION_PERMISSION_SET_STATE';
            var2['type'] = var5;
            var5 = _closure2_slot0;
            var2['permissionState'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPushPermissionState'] = var4;
    var4 = function setPushPermissionReactivationSeen(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'PUSH_NOTIFICATION_PERMISSION_REACTIVATION_SEEN';
        var2['type'] = var5;
        var5 = arg1;
        var2['promptType'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPushPermissionReactivationSeen'] = var4;
    var4 = function setPushNotificationPermissionEligibleForPrompt(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'PUSH_NOTIFICATION_PERMISSION_SET_ELIGIBLE';
        var2['type'] = var5;
        var5 = arg1;
        var2['promptType'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPushNotificationPermissionEligibleForPrompt'] = var4;
    var2 = function updateNotificationAuthorizationStatus(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'PUSH_NOTIFICATION_AUTHORIZATION_STATUS_UPDATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['authorizationStatus'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateNotificationAuthorizationStatus'] = var2;
    return var1;
})();