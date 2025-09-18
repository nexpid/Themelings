// app/modules/nuf/native/NotificationPermissionManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot24 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function haveNotSeenPromptSince(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var2 = _closure1_slot14;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var1 = var1.promptLastSeen;
            var6 = var1[var5];
            var1 = null;
            var1 = var1 == var6;
            if(var1) { _fun0002_ip = 110; continue _fun0002 }
 39:
            var4 = _closure1_slot22;
            var2 = var4.includes;
            var5 = var2.bind(var4)(var5);
            var4 = undefined;
            var2 = undefined;
            if(!var5) { _fun0002_ip = 107; continue _fun0002 }
 60:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 19;
            var3 = var7[var3];
            var3 = var5.bind(var4)(var3);
            var5 = var3.bind(var4)();
            var4 = var5.diff;
            var3 = 'days';
            var4 = var4.bind(var5)(var6, var3);
            var3 = 1;
            var2 = var4 >= var3;
 107:
            var1 = var2;
 110:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function shouldShowPrompt() {
        var1 = undefined;
        var4 = _closure1_slot27;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function _shouldShowPrompt() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 98; continue _fun0003 }
 7:
                    var2 = _closure1_slot9;
                    var3 = var2.NativePermissionManager;
                    var2 = var3.getNotificationAuthorizationStatus;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=34);
 32:
                    return var2;
 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 95; continue _fun0003 }
 40:
                    var3 = _closure1_slot21;
                    var3 = var3.UNDETERMINED;
                    var3 = var2 === var3;
                    if(var3) { _fun0003_ip = 71; continue _fun0003 }
 57:
                    var5 = _closure1_slot21;
                    var5 = var5.PROVISIONAL;
                    var3 = var2 === var5;
 71:
                    if(!var3) { _fun0003_ip = 92; continue _fun0003 }
 74:
                    var7 = _closure1_slot25;
                    var6 = undefined;
                    var5 = arg1;
                    var4 = 1;
                    var3 = var7.bind(var6)(var5, var4);
 92:
                    return var3;
 95:
                    return var2;
 98:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot27 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function shouldShowReactivationPrompt() {
        var1 = undefined;
        var4 = _closure1_slot29;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function _shouldShowReactivationPrompt() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 81; continue _fun0004 }
 7:
                    var2 = _closure1_slot9;
                    var3 = var2.NativePermissionManager;
                    var2 = var3.getNotificationAuthorizationStatus;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=34);
 32:
                    return var2;
 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 78; continue _fun0004 }
 40:
                    var3 = _closure1_slot21;
                    var3 = var3.DENIED;
                    var3 = var2 === var3;
                    if(!var3) { _fun0004_ip = 75; continue _fun0004 }
 57:
                    var7 = _closure1_slot25;
                    var6 = undefined;
                    var5 = arg1;
                    var4 = 1;
                    var3 = var7.bind(var6)(var5, var4);
 75:
                    return var3;
 78:
                    return var2;
 81:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot29 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function showPrompt(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var4 = _closure1_slot23;
            var1 = null;
            if(!(var1 != var4)) { _fun0005_ip = 48; continue _fun0005 }
 29:
            var1 = global;
            var5 = var1.clearTimeout;
            var4 = _closure1_slot23;
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
 48:
            var1 = global;
            var5 = var1.setTimeout;
            var1 = undefined;
            var4 = function() {
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 20;
                var3 = var10[var1];
                var1 = undefined;
                var6 = var9.bind(var1)(var3);
                var5 = var6.setPushPermissionReactivationSeen;
                var4 = _closure2_slot0;
                var4 = var5.bind(var6)(var4);
                var7 = _closure2_slot1;
                var4 = _closure1_slot1;
                var3 = 15;
                var3 = var10[var3];
                var6 = var4.bind(var1)(var3);
                var5 = var6.openLazy;
                var3 = 17;
                var3 = var10[var3];
                var8 = var9.bind(var1)(var3);
                var3 = 16;
                var4 = var10[var3];
                var3 = var10.paths;
                var4 = var8.bind(var1)(var4, var3);
                var3 = _closure1_slot16;
                var2 = {};
                var8 = 18;
                var8 = var10[var8];
                var8 = var9.bind(var1)(var8);
                var8 = var8.ImpressionNames;
                var8 = var8.PUSH_NOTIFICATION_REACTIVATION_PROMPT;
                var2['impressionName'] = var8;
                var8 = {};
                var8['action_location'] = var7;
                var2['impressionProperties'] = var8;
                var2['location'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var2 = arg3;
            var2 = var5.bind(var1)(var4, var2);
            _closure1_slot23 = var2;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function _logNotificationPermissionStatus() {
        var1 = undefined;
        var4 = _closure1_slot32;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function _logNotificationPermissionStatus2() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 187; continue _fun0006 }
 10:
                    var2 = _closure1_slot9;
                    var3 = var2.NativePermissionManager;
                    var2 = var3.getNotificationAuthorizationStatus;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=37);
 35:
                    return var2;
 37:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 184; continue _fun0006 }
 46:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 21;
                    var4 = var10[var3];
                    var3 = undefined;
                    var5 = var9.bind(var3)(var4);
                    var4 = var5.allowInAppNotifications;
                    var8 = var4.bind(var5)();
                    var5 = _closure1_slot1;
                    var4 = 22;
                    var4 = var10[var4];
                    var7 = var5.bind(var3)(var4);
                    var6 = var7.track;
                    var4 = _closure1_slot20;
                    var5 = var4.NOTIFICATION_PERMISSION_STATUS;
                    var4 = {};
                    var11 = _closure1_slot21;
                    var11 = var11.AUTHORIZED;
                    var11 = var2 === var11;
                    var4['os_enabled'] = var11;
                    var4['foreground_app_enabled'] = var8;
                    var4['background_app_enabled'] = var8;
                    var8 = 23;
                    var8 = var10[var8];
                    var9 = var9.bind(var3)(var8);
                    var8 = var9.isIOS;
                    var9 = var8.bind(var9)();
                    var8 = null;
                    if(!var9) { _fun0006_ip = 170; continue _fun0006 }
 167:
                    var8 = var2;
 170:
                    var4['notification_authorization_status'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    return var3;
 184:
                    return var2;
 187:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot32 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot32 = var1;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot14 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.PermissionPromptType;
    var _closure1_slot15 = var8;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.NOTIFICATION_REACTIVATION_ACTIONSHEET_KEY;
    var _closure1_slot16 = var9;
    var4 = var4.EventActionLocation;
    var _closure1_slot17 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.RelationshipTypes;
    var _closure1_slot18 = var9;
    var9 = var4.GuildFeatures;
    var _closure1_slot19 = var9;
    var4 = var4.AnalyticEvents;
    var _closure1_slot20 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NotificationAuthorizationStatus;
    var _closure1_slot21 = var4;
    var9 = var8.FRIEND_REQUEST_SENT;
    var4 = new Array(2);
    var4[0] = var9;
    var8 = var8.INVITE_ACCEPTED;
    var4[1] = var8;
    var _closure1_slot22 = var4;
    var4 = null;
    var _closure1_slot23 = var4;
    var4 = 25;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function NotificationPermissionManager(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot3;
                var5 = _closure2_slot0;
                var3 = undefined;
                var8 = var8.bind(var3)(var6, var5);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot6;
                var10 = var1.bind(var3)(var5);
                var5 = _closure1_slot5;
                var1 = _closure1_slot24;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 86; continue _fun0007 }
 73:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0007_ip = 120; continue _fun0007;
 86:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var3)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
 120:
                var1 = var5.bind(var3)(var6, var1);
                var _closure3_slot0 = var1;
                var5 = {};
                var6 = function MESSAGE_CREATE(arg1) {
                    var3 = arg1;
                    var2 = _closure3_slot0;
                    var1 = var2.handleMessageCreate;
                    var1 = var1.bind(var2)(var3);
                    var1 = var2.handleMessageCreateForNudge;
                    var1 = var1.bind(var2)(var3);
                    var1 = undefined;
                    return var1;
                };
                var5['MESSAGE_CREATE'] = var6;
                var6 = function INVITE_ACCEPT_SUCCESS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleInviteAccept;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var5['INVITE_ACCEPT_SUCCESS'] = var6;
                var6 = function RELATIONSHIP_ADD(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleSendFriendRequest;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var5['RELATIONSHIP_ADD'] = var6;
                var6 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleConnectionOpen;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var5['POST_CONNECTION_OPEN'] = var6;
                var6 = function APP_STATE_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleAppStateUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var5['APP_STATE_UPDATE'] = var6;
                var1['actions'] = var5;
                var5 = _closure1_slot8;
                var4 = function* () {
                    var1 = function* anon_0_() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0008_ip = 36; continue _fun0008 }
 7:
                            var2 = _closure1_slot31;
                            var3 = undefined;
                            var2 = var2.bind(var3)();
                            SaveGenerator(address=24);
 22:
                            return var2;
 24:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0008_ip = 33; continue _fun0008 }
 30:
                            return var3;
 33:
                            return var2;
 36:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var5.bind(var3)(var4);
                var1['handleConnectionOpen'] = var4;
                var4 = function() {
                    var4 = _closure1_slot8;
                    var3 = undefined;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                                StartGenerator();
                                var2 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(var3) { _fun0009_ip = 210; continue _fun0009 }
 13:
                                var4 = var2.message;
                                var5 = var2.optimistic;
                                var6 = var2.isPushNotification;
                                var7 = var2.sendMessageOptions;
                                var3 = undefined;
                                SaveGenerator(address=42);
 40:
                                return var3;
 42:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                                if(var8) { _fun0009_ip = 207; continue _fun0009 }
 51:
                                if(var5) { _fun0009_ip = 57; continue _fun0009 }
 54:
                                var5 = var6;
 57:
                                if(var5) { _fun0009_ip = 66; continue _fun0009 }
 60:
                                var6 = null;
                                var5 = var6 != var7;
 66:
                                if(var5) { _fun0009_ip = 204; continue _fun0009 }
 72:
                                var5 = null;
                                var7 = var5 == var4;
                                var6 = undefined;
                                if(var7) { _fun0009_ip = 103; continue _fun0009 }
 83:
                                var4 = var4.author;
                                var5 = var5 == var4;
                                var6 = undefined;
                                if(var5) { _fun0009_ip = 103; continue _fun0009 }
 98:
                                var6 = var4.id;
 103:
                                var7 = _closure1_slot11;
                                var4 = var7.getId;
                                var4 = var4.bind(var7)();
                                var6 = var6 === var4;
                                if(!var6) { _fun0009_ip = 159; continue _fun0009 }
 127:
                                var7 = _closure1_slot26;
                                var4 = _closure1_slot15;
                                var4 = var4.MESSAGE_SENT;
                                var4 = var7.bind(var3)(var4);
                                SaveGenerator(address=150);
 148:
                                return var4;
 150:
                                ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                                var6 = var4;
                                if(var7) { _fun0009_ip = 201; continue _fun0009 }
 159:
                                if(!var6) { _fun0009_ip = 204; continue _fun0009 }
 162:
                                var8 = _closure1_slot30;
                                var6 = _closure1_slot15;
                                var7 = var6.MESSAGE_SENT;
                                var5 = _closure1_slot17;
                                var6 = var5.MESSAGE_SENT;
                                var5 = 1000;
                                var5 = var8.bind(var3)(var7, var6, var5);
                                _fun0009_ip = 204; continue _fun0009;
 201:
                                return var4;
 204:
                                return var3;
 207:
                                return var2;
 210:
                                return var1;
                            }
                        };
                        var2 = var1.next;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var4 = var4.bind(var3)();
                var1['handleMessageCreate'] = var4;
                var4 = function() {
                    var4 = _closure1_slot8;
                    var3 = undefined;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0010_ip = 211; continue _fun0010 }
 10:
                                var2 = arg1;
                                var4 = var2.invite;
                                var3 = undefined;
                                SaveGenerator(address=25);
 23:
                                return var3;
 25:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0010_ip = 208; continue _fun0010 }
 34:
                                var5 = var4.guild;
                                var4 = null;
                                var6 = var4 == var5;
                                var7 = undefined;
                                if(var6) { _fun0010_ip = 56; continue _fun0010 }
 50:
                                var7 = var5.features;
 56:
                                if(!(var4 == var7)) { _fun0010_ip = 64; continue _fun0010 }
 60:
                                var7 = new Array(0);
 64:
                                var6 = var7.includes;
                                var4 = _closure1_slot19;
                                var4 = var4.COMMUNITY;
                                var4 = var6.bind(var7)(var4);
                                if(var4) { _fun0010_ip = 205; continue _fun0010 }
 90:
                                var6 = _closure1_slot26;
                                var4 = _closure1_slot15;
                                var4 = var4.INVITE_ACCEPTED;
                                var4 = var6.bind(var3)(var4);
                                SaveGenerator(address=113);
 111:
                                return var4;
 113:
                                ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                                if(var6) { _fun0010_ip = 202; continue _fun0010 }
 119:
                                var6 = var4;
                                if(var6) { _fun0010_ip = 160; continue _fun0010 }
 125:
                                var8 = _closure1_slot28;
                                var7 = _closure1_slot15;
                                var7 = var7.INVITE_ACCEPTED;
                                var7 = var8.bind(var3)(var7);
                                SaveGenerator(address=148);
 146:
                                return var7;
 148:
                                ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                                var6 = var7;
                                if(!var8) { _fun0010_ip = 160; continue _fun0010 }
 157:
                                return var7;
 160:
                                if(!var6) { _fun0010_ip = 205; continue _fun0010 }
 163:
                                var8 = _closure1_slot30;
                                var6 = _closure1_slot15;
                                var7 = var6.INVITE_ACCEPTED;
                                var5 = _closure1_slot17;
                                var6 = var5.INVITE_ACCEPTED;
                                var5 = 1000;
                                var5 = var8.bind(var3)(var7, var6, var5);
                                _fun0010_ip = 205; continue _fun0010;
 202:
                                return var4;
 205:
                                return var3;
 208:
                                return var2;
 211:
                                return var1;
                            }
                        };
                        var2 = var1.next;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var4 = var4.bind(var3)();
                var1['handleInviteAccept'] = var4;
                var4 = function() {
                    var4 = _closure1_slot8;
                    var3 = undefined;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0011_ip = 178; continue _fun0011 }
 10:
                                var2 = arg1;
                                var3 = var2.relationship;
                                var4 = undefined;
                                SaveGenerator(address=25);
 23:
                                return var4;
 25:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0011_ip = 175; continue _fun0011 }
 34:
                                var6 = var3.type;
                                var3 = _closure1_slot18;
                                var3 = var3.PENDING_OUTGOING;
                                var6 = var6 === var3;
                                if(!var6) { _fun0011_ip = 132; continue _fun0011 }
 59:
                                var7 = _closure1_slot26;
                                var3 = _closure1_slot15;
                                var3 = var3.FRIEND_REQUEST_SENT;
                                var3 = var7.bind(var4)(var3);
                                SaveGenerator(address=82);
 80:
                                return var3;
 82:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                                if(var7) { _fun0011_ip = 172; continue _fun0011 }
 88:
                                var7 = var3;
                                if(var7) { _fun0011_ip = 129; continue _fun0011 }
 94:
                                var9 = _closure1_slot28;
                                var8 = _closure1_slot15;
                                var8 = var8.FRIEND_REQUEST_SENT;
                                var8 = var9.bind(var4)(var8);
                                SaveGenerator(address=117);
 115:
                                return var8;
 117:
                                ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                                var7 = var8;
                                if(!var9) { _fun0011_ip = 129; continue _fun0011 }
 126:
                                return var8;
 129:
                                var6 = var7;
 132:
                                if(!var6) { _fun0011_ip = 169; continue _fun0011 }
 135:
                                var8 = _closure1_slot30;
                                var6 = _closure1_slot15;
                                var7 = var6.FRIEND_REQUEST_SENT;
                                var5 = _closure1_slot17;
                                var6 = var5.FRIEND_REQUEST_SENT;
                                var5 = 100;
                                var5 = var8.bind(var4)(var7, var6, var5);
 169:
                                return var4;
 172:
                                return var3;
 175:
                                return var2;
 178:
                                return var1;
                            }
                        };
                        var2 = var1.next;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var4 = var4.bind(var3)();
                var1['handleSendFriendRequest'] = var4;
                var2 = function() {
                    var4 = _closure1_slot8;
                    var3 = undefined;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0012_ip = 65; continue _fun0012 }
 7:
                                var2 = arg1;
                                var5 = var2.state;
                                var4 = undefined;
                                SaveGenerator(address=21);
 19:
                                return var4;
 21:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0012_ip = 62; continue _fun0012 }
 27:
                                var3 = 'active';
                                if(!(var3 === var5)) { _fun0012_ip = 56; continue _fun0012 }
 35:
                                var3 = _closure1_slot31;
                                var3 = var3.bind(var4)();
                                SaveGenerator(address=50);
 48:
                                return var3;
 50:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                                if(var5) { _fun0012_ip = 59; continue _fun0012 }
 56:
                                return var4;
 59:
                                return var3;
 62:
                                return var2;
 65:
                                return var1;
                            }
                        };
                        var2 = var1.next;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var2 = var2.bind(var3)();
                var1['handleAppStateUpdate'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot7;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot4;
        var5 = {};
        var6 = 'handleMessageCreateForNudge';
        var5['key'] = var6;
        var1 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var2 = arg1;
                var6 = var2.channelId;
                var1 = var2.message;
                var4 = var2.optimistic;
                var3 = var2.isPushNotification;
                var2 = var2.sendMessageOptions;
                if(var4) { _fun0013_ip = 336; continue _fun0013 }
 37:
                if(var3) { _fun0013_ip = 336; continue _fun0013 }
 43:
                var5 = null;
                if(!(var5 == var2)) { _fun0013_ip = 336; continue _fun0013 }
 52:
                var2 = var5 == var1;
                var4 = undefined;
                var3 = undefined;
                if(var2) { _fun0013_ip = 83; continue _fun0013 }
 63:
                var1 = var1.author;
                var2 = var5 == var1;
                var3 = undefined;
                if(var2) { _fun0013_ip = 83; continue _fun0013 }
 78:
                var3 = var1.id;
 83:
                var7 = _closure1_slot11;
                var2 = var7.getId;
                var2 = var2.bind(var7)();
                if(!(var3 === var2)) { _fun0013_ip = 336; continue _fun0013 }
 107:
                var3 = _closure1_slot12;
                var2 = var3.getChannel;
                var3 = var2.bind(var3)(var6);
                if(!(var5 != var3)) { _fun0013_ip = 336; continue _fun0013 }
 128:
                var2 = var3.getGuildId;
                var8 = var2.bind(var3)();
                var2 = var3.isThread;
                var2 = var2.bind(var3)();
                if(var2) { _fun0013_ip = 174; continue _fun0013 }
 151:
                var7 = _closure1_slot13;
                var6 = var7.isChannelMuted;
                var2 = var3.id;
                var2 = var6.bind(var7)(var8, var2);
                _fun0013_ip = 194; continue _fun0013;
 174:
                var7 = _closure1_slot10;
                var6 = var7.isMuted;
                var3 = var3.id;
                var2 = var6.bind(var7)(var3);
 194:
                if(var2) { _fun0013_ip = 336; continue _fun0013 }
 200:
                var2 = _closure1_slot15;
                var3 = var2.CHANNEL_BANNER;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 24;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.PERMISSION_PROMPT_EXPERIMENTS;
                var7 = var2[var3];
                var2 = var5 == var7;
                var3 = undefined;
                if(var2) { _fun0013_ip = 289; continue _fun0013 }
 249:
                var6 = var7.getExperiment;
                var2 = {'location': 'shouldTriggerContextualPrompt', 'autoTrackExposure': false};
                var2 = var6.bind(var7)(var2);
                var5 = var5 == var2;
                var3 = undefined;
                if(var5) { _fun0013_ip = 289; continue _fun0013 }
 283:
                var3 = var2.isContextual;
 289:
                var2 = true;
                if(!(var2 === var3)) { _fun0013_ip = 336; continue _fun0013 }
 295:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 20;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.setPushNotificationPermissionEligibleForPrompt;
                var1 = _closure1_slot15;
                var1 = var1.CHANNEL_BANNER;
                var1 = var2.bind(var3)(var1);
 336:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nuf/native/NotificationPermissionManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();