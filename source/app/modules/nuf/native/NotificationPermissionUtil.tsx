// app/modules/nuf/native/NotificationPermissionUtil.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = function _requestPushNotificationPermission() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var9 = arg2;
                    var4 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 218; continue _fun0001 }
 18:
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var _closure4_slot1 = var9;
                    var _closure4_slot2 = var4;
                    var2 = _closure1_slot5;
                    var5 = var2.NativePermissionManager;
                    var2 = var5.getNotificationAuthorizationStatus;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=60);
 58:
                    return var2;
 60:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 215; continue _fun0001 }
 69:
                    var5 = _closure1_slot8;
                    var5 = var5.DENIED;
                    if(!(var2 !== var5)) { _fun0001_ip = 125; continue _fun0001 }
 83:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var5 = 9;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var7.bind(var5)(var6);
                    var5 = var6.requestPermission;
                    var3 = function(arg1) {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 8;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.track;
                        var2 = _closure1_slot7;
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
                    _fun0001_ip = 210; continue _fun0001;
 125:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 7;
                    var5 = var7[var3];
                    var3 = undefined;
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.bind(var3)();
                    var5 = 8;
                    var5 = var7[var5];
                    var8 = var6.bind(var3)(var5);
                    var7 = var8.track;
                    var5 = _closure1_slot7;
                    var6 = var5.NOTIFICATION_PERMISSION_PREPROMPT_ACKED;
                    var5 = {};
                    var10 = _closure1_slot6;
                    var10 = var10.TO_SETTINGS;
                    var5['action_type'] = var10;
                    var5['action_location'] = var9;
                    var5 = var7.bind(var8)(var6, var5);
                    var3 = var4.bind(var3)();
 210:
                    var3 = undefined;
                    return var3;
 215:
                    return var2;
 218:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function _enableProvisionalPushNotification() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 96; continue _fun0002 }
 7:
                    var2 = _closure1_slot5;
                    var4 = var2.NativePermissionManager;
                    var2 = var4.getNotificationAuthorizationStatus;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=34);
 32:
                    return var2;
 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 93; continue _fun0002 }
 40:
                    var4 = _closure1_slot8;
                    var4 = var4.UNDETERMINED;
                    if(!(var2 === var4)) { _fun0002_ip = 88; continue _fun0002 }
 54:
                    var3 = _closure1_slot5;
                    var5 = var3.DCDProvisionalNotificationUtils;
                    var4 = var5.registerProvisionalNotification;
                    var3 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 8;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.track;
                            var2 = _closure1_slot7;
                            var3 = var2.PERMISSIONS_ACKED;
                            var2 = {};
                            var6 = 'provisional_notification';
                            var2['type'] = var6;
                            var6 = 'denied';
                            var7 = arg1;
                            if(!var7) { _fun0003_ip = 68; continue _fun0003 }
 64:
                            var6 = 'accepted';
 68:
                            var2['action'] = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        }
                    };
                    var3 = var4.bind(var5)(var3);
 88:
                    var3 = undefined;
                    return var3;
 93:
                    return var2;
 96:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
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
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EventActionType;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NotificationAuthorizationStatus;
    var _closure1_slot8 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nuf/native/NotificationPermissionUtil.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function requestPushNotificationPermission() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['requestPushNotificationPermission'] = var4;
    var4 = function useShowReactivationPrompt() {
        var5 = _closure1_slot4;
        var4 = var5.useState;
        var3 = false;
        var6 = var4.bind(var5)(var3);
        var4 = _closure1_slot2;
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
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 78; continue _fun0004 }
 7:
                            var2 = _closure1_slot5;
                            var4 = var2.NativePermissionManager;
                            var2 = var4.getNotificationAuthorizationStatus;
                            var2 = var2.bind(var4)();
                            SaveGenerator(address=34);
 32:
                            return var2;
 34:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0004_ip = 75; continue _fun0004 }
 40:
                            var3 = _closure1_slot8;
                            var3 = var3.AUTHORIZED;
                            if(!(var2 !== var3)) { _fun0004_ip = 70; continue _fun0004 }
 54:
                            var5 = _closure2_slot0;
                            var4 = undefined;
                            var3 = true;
                            var3 = var5.bind(var4)(var3);
 70:
                            var3 = undefined;
                            return var3;
 75:
                            return var2;
 78:
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
    var2 = function enableProvisionalPushNotification() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['enableProvisionalPushNotification'] = var2;
    return var1;
})();