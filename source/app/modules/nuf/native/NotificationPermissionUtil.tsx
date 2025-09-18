// app/modules/nuf/native/NotificationPermissionUtil.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            var2 = arg1;
            var3 = null;
            if(!(var3 != var2)) { _fun0004_ip = 71; continue _fun0004 }
 9:
            var1 = var2.reminderUI;
            var4 = var2.isContextual;
            var2 = var3 != var4;
            if(!var2) { _fun0004_ip = 31; continue _fun0004 }
 28:
            var2 = var4;
 31:
            var1 = var3 != var1;
            if(!var1) { _fun0004_ip = 69; continue _fun0004 }
 38:
            if(!var2) { _fun0004_ip = 66; continue _fun0004 }
 41:
            var3 = arg3;
            var5 = var3.eligiblePromptTypes;
            var4 = var5.has;
            var3 = arg2;
            var3 = var4.bind(var5)(var3);
            var2 = !var3;
 66:
            var1 = !var2;
 69:
            return var1;
 71:
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
                    var9 = arg1;
                    var13 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 168; continue _fun0005 }
 16:
                    var8 = undefined;
                    if(!(var13 === var8)) { _fun0005_ip = 24; continue _fun0005 }
 22:
                    var13 = true;
 24:
                    SaveGenerator(address=28);
 26:
                    return var8;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 165; continue _fun0005 }
 37:
                    var3 = _closure1_slot6;
                    var4 = var3.NativePermissionManager;
                    var3 = var4.getNotificationAuthorizationStatus;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=64);
 62:
                    return var3;
 64:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 162; continue _fun0005 }
 70:
                    var4 = _closure1_slot10;
                    var4 = var4.DENIED;
                    var4 = var3 === var4;
                    if(!var4) { _fun0005_ip = 159; continue _fun0005 }
 87:
                    var7 = _closure1_slot14;
                    var6 = _closure1_slot11;
                    var12 = var6[var9];
                    var6 = null;
                    var10 = var6 == var12;
                    var6 = undefined;
                    if(var10) { _fun0005_ip = 138; continue _fun0005 }
 110:
                    var11 = var12.getExperiment;
                    var10 = {};
                    var14 = 'shouldSeePushNotificationNudge';
                    var10['location'] = var14;
                    var10['autoTrackExposure'] = var13;
                    var6 = var11.bind(var12)(var10);
 138:
                    var10 = _closure1_slot7;
                    var5 = var10.getState;
                    var5 = var5.bind(var10)();
                    var4 = var7.bind(var8)(var6, var9, var5);
 159:
                    return var4;
 162:
                    return var3;
 165:
                    return var2;
 168:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var5 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var5 = var7[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot6 = var4;
    var4 = 4;
    var5 = var7[var4];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.PermissionPromptType;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.EventActionType;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.NotificationAuthorizationStatus;
    var _closure1_slot10 = var4;
    var4 = {};
    var10 = var5.APP_LOAD_PROMPT;
    var8 = {};
    var9 = 11;
    var11 = var7[var9];
    var11 = var6.bind(var1)(var11);
    var11 = var11.getMobileNotificationAppStartupNudgeExperiment;
    var8['getExperiment'] = var11;
    var11 = var7[var9];
    var11 = var6.bind(var1)(var11);
    var11 = var11.useMobileNotificationAppStartupNudgeExperiment;
    var8['useExperiment'] = var11;
    var4[var10] = var8;
    var10 = var5.DM_SPACE;
    var8 = {};
    var11 = var7[var9];
    var11 = var6.bind(var1)(var11);
    var11 = var11.getMobileNotificationMessageHomePageNudgeExperiment;
    var8['getExperiment'] = var11;
    var11 = var7[var9];
    var11 = var6.bind(var1)(var11);
    var11 = var11.useMobileNotificationMessageHomePageNudgeExperiment;
    var8['useExperiment'] = var11;
    var4[var10] = var8;
    var8 = var5.CHANNEL_BANNER;
    var5 = {};
    var10 = var7[var9];
    var10 = var6.bind(var1)(var10);
    var10 = var10.getMobileNotificationChannelNudgeExperiment;
    var5['getExperiment'] = var10;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var9 = var9.useMobileNotificationChannelNudgeExperiment;
    var5['useExperiment'] = var9;
    var4[var8] = var5;
    var _closure1_slot11 = var4;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/nuf/native/NotificationPermissionUtil.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function requestPushNotificationPermission() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['requestPushNotificationPermission'] = var5;
    var5 = function useShowReactivationPrompt() {
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
    var3['useShowReactivationPrompt'] = var5;
    var5 = function enableProvisionalPushNotification() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['enableProvisionalPushNotification'] = var5;
    var3['PERMISSION_PROMPT_EXPERIMENTS'] = var4;
    var4 = function useNudgeExperimentConfigWithoutExposure(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = _closure1_slot11;
            var1 = arg1;
            var4 = var2[var1];
            var1 = null;
            var2 = var1 == var4;
            var1 = undefined;
            if(var2) { _fun0007_ip = 50; continue _fun0007 }
 25:
            var3 = var4.getExperiment;
            var2 = {'location': 'useNudgeExperimentConfigWithoutExposure', 'autoTrackExposure': false};
            var1 = var3.bind(var4)(var2);
 50:
            return var1;
        }
    };
    var3['useNudgeExperimentConfigWithoutExposure'] = var4;
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
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var6 = arg1;
            var14 = arguments[1];
            var5 = undefined;
            if(!(var14 === var5)) { _fun0008_ip = 16; continue _fun0008 }
 14:
            var14 = true;
 16:
            var _closure2_slot0 = var5;
            var7 = _closure1_slot5;
            var3 = var7.useState;
            var4 = null;
            var8 = var3.bind(var7)(var4);
            var7 = _closure1_slot3;
            var3 = 2;
            var7 = var7.bind(var5)(var8, var3);
            var3 = 0;
            var10 = var7[var3];
            var3 = 1;
            var3 = var7[var3];
            _closure2_slot0 = var3;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 12;
            var8 = var11[var3];
            var13 = var7.bind(var5)(var8);
            var12 = var13.useStateFromStores;
            var8 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var1 = var1.eligiblePromptTypes;
                return var1;
            };
            var8 = var12.bind(var13)(var9, var8);
            var9 = var11[var3];
            var15 = var7.bind(var5)(var9);
            var13 = var15.useStateFromStores;
            var9 = _closure1_slot7;
            var12 = new Array(1);
            var12[0] = var9;
            var9 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var1 = var1.permissionState;
                return var1;
            };
            var9 = var13.bind(var15)(var12, var9);
            var3 = var11[var3];
            var12 = var7.bind(var5)(var3);
            var11 = var12.useStateFromStores;
            var3 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var1 = var1.promptLastSeen;
                return var1;
            };
            var7 = var11.bind(var12)(var7, var3);
            var3 = _closure1_slot10;
            var3 = var3.DENIED;
            var3 = var10 === var3;
            var10 = _closure1_slot11;
            var12 = var10[var6];
            var10 = var4 == var12;
            var4 = undefined;
            if(var10) { _fun0008_ip = 263; continue _fun0008 }
 228:
            var11 = var12.useExperiment;
            var10 = {};
            var13 = 'useShouldSeePushNotificationNudge';
            var10['location'] = var13;
            var13 = var3;
            if(!var13) { _fun0008_ip = 253; continue _fun0008 }
 250:
            var13 = var14;
 253:
            var10['autoTrackExposure'] = var13;
            var4 = var11.bind(var12)(var10);
 263:
            var12 = _closure1_slot5;
            var11 = var12.useEffect;
            var10 = function() {
                var2 = function _checkNotificationStatus() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot4;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0009_ip = 60; continue _fun0009 }
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
                                if(var3) { _fun0009_ip = 57; continue _fun0009 }
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
            var1 = var11.bind(var12)(var10, var1);
            var1 = !var3;
            var1 = !var1;
            if(!var3) { _fun0008_ip = 326; continue _fun0008 }
 298:
            var3 = _closure1_slot14;
            var2 = {};
            var2['permissionState'] = var9;
            var2['eligiblePromptTypes'] = var8;
            var2['promptLastSeen'] = var7;
            var1 = var3.bind(var5)(var4, var6, var2);
 326:
            return var1;
        }
    };
    var3['useShouldSeePushNotificationNudge'] = var2;
    return var1;
})();