// app/modules/nuf/native/NotificationPermissionUtil.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _requestPushNotificationPermission() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var9 = arg2;
                    var4 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var _closure4_slot1 = var9;
                    var _closure4_slot2 = var4;
                    var2 = _closure1_slot6;
                    var5 = var2.NativePermissionManager;
                    var2 = var5.getNotificationAuthorizationStatus;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=60);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var5 = _closure1_slot10;
                    var5 = var5.DENIED;
                    if(!(var2 !== var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var5 = 10;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var7.bind(var5)(var6);
                    var5 = var6.requestPermission;
                    var3 = function(arg1) {
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 9;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.track;
                        var2 = _closure1_slot9;
                        var4 = var2.NOTIFICATION_PERMISSION_PREPROMPT_ACKED;
                        var3 = {};
                        var7 = _closure4_slot0;
                        var3['action_type'] = var7;
                        var7 = _closure4_slot1;
                        var3['action_location'] = var7;
                        var7 = arg1;
                        var3['permission_granted'] = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        var2 = _closure4_slot2;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var3 = var5.bind(var6)(var3);
                    _fun0001_ip = 10; continue _fun0001;
case 8:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 8;
                    var5 = var7[var3];
                    var3 = undefined;
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.bind(var3)();
                    var5 = 9;
                    var5 = var7[var5];
                    var8 = var6.bind(var3)(var5);
                    var7 = var8.track;
                    var5 = _closure1_slot9;
                    var6 = var5.NOTIFICATION_PERMISSION_PREPROMPT_ACKED;
                    var5 = {};
                    var10 = _closure1_slot8;
                    var10 = var10.TO_SETTINGS;
                    var5['action_type'] = var10;
                    var5['action_location'] = var9;
                    var5 = var7.bind(var8)(var6, var5);
                    var3 = var4.bind(var3)();
case 10:
                    var3 = undefined;
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function _enableProvisionalPushNotification() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var2 = _closure1_slot6;
                    var4 = var2.NativePermissionManager;
                    var2 = var4.getNotificationAuthorizationStatus;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=34);
case 13:
                    return var2;
case 14:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var4 = _closure1_slot10;
                    var4 = var4.UNDETERMINED;
                    if(!(var2 === var4)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var3 = _closure1_slot6;
                    var5 = var3.DCDProvisionalNotificationUtils;
                    var4 = var5.registerProvisionalNotification;
                    var3 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 9;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.track;
                            var2 = _closure1_slot9;
                            var3 = var2.PERMISSIONS_ACKED;
                            var2 = {};
                            var6 = 'provisional_notification';
                            var2['type'] = var6;
                            var6 = 'denied';
                            var7 = arg1;
                            if(!var7) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                            var6 = 'accepted';
case 19:
                            var2['action'] = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        }
                    };
                    var3 = var4.bind(var5)(var3);
case 17:
                    var3 = undefined;
                    return var3;
case 15:
                    return var2;
case 11:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EventActionType;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NotificationAuthorizationStatus;
    var _closure1_slot10 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nuf/native/NotificationPermissionUtil.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function requestPushNotificationPermission() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['requestPushNotificationPermission'] = var4;
    var4 = function useShowReactivationPrompt() {
        var5 = _closure1_slot5;
        var4 = var5.useState;
        var3 = false;
        var6 = var4.bind(var5)(var3);
        var4 = _closure1_slot3;
        var3 = undefined;
        var1 = 2;
        var4 = var4.bind(var3)(var6, var1);
        var1 = 0;
        var1 = var4[var1];
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot0 = var3;
        var4 = var5.useEffect;
        var3 = function() {
            var2 = function _shouldShowReactivationPrompts() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot4;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 21; continue _fun0004 }
case 12:
                            var2 = _closure1_slot6;
                            var4 = var2.NativePermissionManager;
                            var2 = var4.getNotificationAuthorizationStatus;
                            var2 = var2.bind(var4)();
                            SaveGenerator(address=34);
case 13:
                            return var2;
case 14:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0004_ip = 22; continue _fun0004 }
case 16:
                            var3 = _closure1_slot10;
                            var3 = var3.AUTHORIZED;
                            if(!(var2 !== var3)) { _fun0004_ip = 23; continue _fun0004 }
case 18:
                            var5 = _closure2_slot0;
                            var4 = undefined;
                            var3 = true;
                            var3 = var5.bind(var4)(var3);
case 23:
                            var3 = undefined;
                            return var3;
case 22:
                            return var2;
case 21:
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
            var2 = function shouldShowReactivationPrompts() {
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
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['useShowReactivationPrompt'] = var4;
    var4 = function enableProvisionalPushNotification() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['enableProvisionalPushNotification'] = var4;
    var2 = function useShouldSeePushNotificationNudge(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 11;
            var1 = var9[var1];
            var6 = undefined;
            var4 = var7.bind(var6)(var1);
            var1 = var4.useIsTeenInStrictCountry;
            var1 = var1.bind(var4)();
            var4 = 12;
            var5 = var9[var4];
            var12 = var7.bind(var6)(var5);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot7;
            var10 = new Array(1);
            var10[0] = var8;
            var5 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var1 = var1.eligiblePromptTypes;
                return var1;
            };
            var5 = var11.bind(var12)(var10, var5);
            var4 = var9[var4];
            var7 = var7.bind(var6)(var4);
            var6 = var7.useStateFromStores;
            var4 = new Array(1);
            var4[0] = var8;
            var3 = function() {
                var1 = _closure1_slot7;
                var1 = var1.authorizationStatus;
                return var1;
            };
            var3 = var6.bind(var7)(var4, var3);
            var1 = !var1;
            if(!var1) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var2 = _closure1_slot10;
            var2 = var2.DENIED;
            var2 = var3 === var2;
            if(!var2) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var4 = var5.has;
            var3 = arg1;
            var3 = var4.bind(var5)(var3);
            var3 = !var3;
            var2 = !var3;
case 26:
            var1 = var2;
case 24:
            return var1;
        }
    };
    var3['useShouldSeePushNotificationNudge'] = var2;
    return var1;
})();