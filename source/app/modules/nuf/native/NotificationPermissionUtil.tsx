// app/modules/nuf/native/NotificationPermissionUtil.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function _requestPushNotificationPermission() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
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
                    var2 = _closure1_slot6;
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
                    var5 = _closure1_slot10;
                    var5 = var5.DENIED;
                    if(!(var2 !== var5)) { _fun0001_ip = 125; continue _fun0001 }
 83:
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
                    _fun0001_ip = 210; continue _fun0001;
 125:
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
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function _enableProvisionalPushNotification() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 96; continue _fun0002 }
 7:
                    var2 = _closure1_slot6;
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
                    var4 = _closure1_slot10;
                    var4 = var4.UNDETERMINED;
                    if(!(var2 === var4)) { _fun0002_ip = 88; continue _fun0002 }
 54:
                    var3 = _closure1_slot6;
                    var5 = var3.DCDProvisionalNotificationUtils;
                    var4 = var5.registerProvisionalNotification;
                    var3 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _shouldSeePushNotificationNudge(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var3 = arg2;
            var2 = arg3;
            var1 = null;
            if(!(var1 != var4)) { _fun0004_ip = 189; continue _fun0004 }
 18:
            var6 = var4.reminderUI;
            var5 = var4.timing;
            var7 = var4.isContextual;
            var4 = var1 != var7;
            if(!var4) { _fun0004_ip = 46; continue _fun0004 }
 43:
            var4 = var7;
 46:
            if(!(var1 != var6)) { _fun0004_ip = 185; continue _fun0004 }
 53:
            if(!var4) { _fun0004_ip = 79; continue _fun0004 }
 56:
            var6 = var2.eligiblePromptTypes;
            var4 = var6.has;
            var4 = var4.bind(var6)(var3);
            if(var4) { _fun0004_ip = 79; continue _fun0004 }
 75:
            var4 = false;
            return var4;
 79:
            var2 = var2.promptLastSeen;
            var9 = var2[var3];
            var1 = var1 == var9;
            if(var1) { _fun0004_ip = 183; continue _fun0004 }
 96:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 12;
            var3 = var7[var3];
            var6 = undefined;
            var3 = var4.bind(var6)(var3);
            var8 = var3.bind(var6)();
            var4 = var8.diff;
            var3 = 'days';
            var3 = var4.bind(var8)(var9, var3);
            var4 = _closure1_slot0;
            var2 = 11;
            var2 = var7[var2];
            var2 = var4.bind(var6)(var2);
            var2 = var2.NotificationNudgeTimingVariant;
            var4 = var2.AGGRESSIVE;
            var2 = 7;
            if(!(var5 === var4)) { _fun0004_ip = 179; continue _fun0004 }
 176:
            var2 = 3;
 179:
            var1 = var3 >= var2;
 183:
            return var1;
 185:
            var1 = false;
            return var1;
 189:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _shouldSeePushNotificationNudge2() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 138; continue _fun0005 }
 13:
                    var2 = _closure1_slot6;
                    var3 = var2.NativePermissionManager;
                    var2 = var3.getNotificationAuthorizationStatus;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=40);
 38:
                    return var2;
 40:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 135; continue _fun0005 }
 46:
                    var3 = _closure1_slot10;
                    var3 = var3.DENIED;
                    var3 = var2 === var3;
                    if(!var3) { _fun0005_ip = 132; continue _fun0005 }
 63:
                    var7 = _closure1_slot14;
                    var5 = _closure1_slot11;
                    var11 = var5[var8];
                    var5 = null;
                    var9 = var5 == var11;
                    var6 = undefined;
                    var5 = undefined;
                    if(var9) { _fun0005_ip = 111; continue _fun0005 }
 88:
                    var10 = var11.getExperiment;
                    var9 = {};
                    var12 = 'shouldSeePushNotificationNudge';
                    var9['location'] = var12;
                    var5 = var10.bind(var11)(var9);
 111:
                    var9 = _closure1_slot7;
                    var4 = var9.getState;
                    var4 = var4.bind(var9)();
                    var3 = var7.bind(var6)(var5, var8, var4);
 132:
                    return var3;
 135:
                    return var2;
 138:
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
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot6 = var4;
    var4 = 4;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PermissionPromptType;
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
    var4 = {};
    var10 = var7.APP_LOAD_PROMPT;
    var8 = {};
    var9 = 11;
    var11 = var6[var9];
    var11 = var5.bind(var1)(var11);
    var11 = var11.getMobileNotificationAppStartupNudgeExperiment;
    var8['getExperiment'] = var11;
    var11 = var6[var9];
    var11 = var5.bind(var1)(var11);
    var11 = var11.useMobileNotificationAppStartupNudgeExperiment;
    var8['useExperiment'] = var11;
    var4[var10] = var8;
    var10 = var7.DM_SPACE;
    var8 = {};
    var11 = var6[var9];
    var11 = var5.bind(var1)(var11);
    var11 = var11.getMobileNotificationMessageHomePageNudgeExperiment;
    var8['getExperiment'] = var11;
    var11 = var6[var9];
    var11 = var5.bind(var1)(var11);
    var11 = var11.useMobileNotificationMessageHomePageNudgeExperiment;
    var8['useExperiment'] = var11;
    var4[var10] = var8;
    var8 = var7.CHANNEL_BANNER;
    var7 = {};
    var10 = var6[var9];
    var10 = var5.bind(var1)(var10);
    var10 = var10.getMobileNotificationChannelNudgeExperiment;
    var7['getExperiment'] = var10;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.useMobileNotificationChannelNudgeExperiment;
    var7['useExperiment'] = var9;
    var4[var8] = var7;
    var _closure1_slot11 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nuf/native/NotificationPermissionUtil.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function requestPushNotificationPermission() {
        var1 = undefined;
        var4 = _closure1_slot12;
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
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0006_ip = 78; continue _fun0006 }
 7:
                            var2 = _closure1_slot6;
                            var4 = var2.NativePermissionManager;
                            var2 = var4.getNotificationAuthorizationStatus;
                            var2 = var2.bind(var4)();
                            SaveGenerator(address=34);
 32:
                            return var2;
 34:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0006_ip = 75; continue _fun0006 }
 40:
                            var3 = _closure1_slot10;
                            var3 = var3.AUTHORIZED;
                            if(!(var2 !== var3)) { _fun0006_ip = 70; continue _fun0006 }
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
    var4 = function enableProvisionalPushNotification() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['enableProvisionalPushNotification'] = var4;
    var4 = function shouldSeePushNotificationNudge(arg1) {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['shouldSeePushNotificationNudge'] = var4;
    var2 = function useShouldSeePushNotificationNudge(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var6 = arg1;
            var5 = _closure1_slot5;
            var4 = var5.useState;
            var3 = null;
            var8 = var4.bind(var5)(var3);
            var7 = _closure1_slot3;
            var5 = undefined;
            var4 = 2;
            var7 = var7.bind(var5)(var8, var4);
            var4 = 0;
            var8 = var7[var4];
            var4 = 1;
            var4 = var7[var4];
            var _closure2_slot0 = var4;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 13;
            var4 = var9[var4];
            var10 = var7.bind(var5)(var4);
            var9 = var10.useStateFromStoresObject;
            var4 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var9.bind(var10)(var7, var4);
            var7 = _closure1_slot10;
            var7 = var7.DENIED;
            var7 = var8 === var7;
            var8 = _closure1_slot11;
            var10 = var8[var6];
            var8 = var3 == var10;
            var3 = undefined;
            if(var8) { _fun0007_ip = 166; continue _fun0007 }
 138:
            var9 = var10.useExperiment;
            var8 = {};
            var11 = 'useShouldSeePushNotificationNudge';
            var8['location'] = var11;
            var8['autoTrackExposure'] = var7;
            var3 = var9.bind(var10)(var8);
 166:
            var10 = _closure1_slot5;
            var9 = var10.useEffect;
            var8 = function() {
                var2 = function _checkNotificationStatus() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot4;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0008_ip = 60; continue _fun0008 }
 7:
                                var2 = _closure1_slot6;
                                var3 = var2.NativePermissionManager;
                                var2 = var3.getNotificationAuthorizationStatus;
                                var2 = var2.bind(var3)();
                                SaveGenerator(address=34);
 32:
                                return var2;
 34:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0008_ip = 57; continue _fun0008 }
 40:
                                var4 = _closure2_slot0;
                                var3 = undefined;
                                var4 = var4.bind(var3)(var2);
                                return var3;
 57:
                                return var2;
 60:
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
                var2 = function checkNotificationStatus() {
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
            var1 = new Array(0);
            var1 = var9.bind(var10)(var8, var1);
            var1 = !var7;
            var1 = !var1;
            if(!var7) { _fun0007_ip = 212; continue _fun0007 }
 201:
            var2 = _closure1_slot14;
            var1 = var2.bind(var5)(var3, var6, var4);
 212:
            return var1;
        }
    };
    var3['useShouldSeePushNotificationNudge'] = var2;
    return var1;
})();