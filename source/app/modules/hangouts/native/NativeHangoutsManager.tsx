// app/modules/hangouts/native/NativeHangoutsManager.tsx
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
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function isGuildEligible(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 12;
            var1 = var6[var1];
            var6 = undefined;
            var3 = var3.bind(var6)(var1);
            var1 = var3.isIOS;
            var1 = var1.bind(var3)();
            if(var1) { _fun0002_ip = 48; continue _fun0002 }
 44:
            var1 = false;
            return var1;
 48:
            var3 = _closure1_slot10;
            var1 = var3.getMemberCount;
            var1 = var1.bind(var3)(var5);
            var3 = null;
            var3 = var3 != var1;
            var11 = 51;
            if(!var3) { _fun0002_ip = 78; continue _fun0002 }
 75:
            var11 = var1;
 78:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 13;
            var1 = var1[var7];
            var1 = var3.bind(var6)(var1);
            var9 = var1.VoiceLockscreenWidgetUserExperiment;
            var8 = var9.getCurrentConfig;
            var3 = {};
            var3['location'] = var4;
            var1 = {};
            var10 = 50;
            var10 = var11 <= var10;
            var10 = !var10;
            var1['disable'] = var10;
            var10 = true;
            var1['autoTrackExposure'] = var10;
            var1 = var8.bind(var9)(var3, var1);
            var1 = var1.showWidget;
            if(var1) { _fun0002_ip = 190; continue _fun0002 }
 155:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var3 = var3.bind(var6)(var2);
            var2 = var3.getLockscreenWidgetConfig;
            var2 = var2.bind(var3)(var5, var4);
            var1 = var2.showWidget;
 190:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function updateLiveActivity() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var2);
            var2 = var5.isIOS;
            var2 = var2.bind(var5)();
            if(!var2) { _fun0003_ip = 431; continue _fun0003 }
 43:
            var5 = _closure1_slot14;
            var2 = null;
            if(!(var2 == var5)) { _fun0003_ip = 91; continue _fun0003 }
 53:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 14;
            var5 = var7[var5];
            var7 = var6.bind(var1)(var5);
            var6 = var7.stopHangoutActivity;
            var5 = 0;
            var5 = var6.bind(var7)(var5);
            _fun0003_ip = 431; continue _fun0003;
 91:
            var7 = _closure1_slot19;
            var5 = _closure1_slot14;
            var6 = var5.guildId;
            var5 = 'manager - updateLiveActivity';
            var5 = var7.bind(var1)(var6, var5);
            if(!var5) { _fun0003_ip = 431; continue _fun0003 }
 122:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 14;
            var8 = var7[var6];
            var9 = var5.bind(var1)(var8);
            var8 = var9.activitiesAllowed;
            var10 = var8.bind(var9)();
            var9 = var10.then;
            var8 = function(arg1) {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 15;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot13;
                var3 = var2.LIVE_ACTIVITY_SETTINGS_UPDATED;
                var2 = {};
                var6 = true;
                var2['supported'] = var6;
                var6 = arg1;
                var2['enabled'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var9 = var9.bind(var10)(var8);
            var8 = var9.catch;
            var4 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = 'unsupported';
                    var1 = arg1;
                    if(!(var2 === var1)) { _fun0004_ip = 67; continue _fun0004 }
 11:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.track;
                    var1 = _closure1_slot13;
                    var2 = var1.LIVE_ACTIVITY_SETTINGS_UPDATED;
                    var1 = {'supported': false, 'enabled': false};
                    var1 = var3.bind(var4)(var2, var1);
 67:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var8.bind(var9)(var4);
            var4 = 16;
            var4 = var7[var4];
            var9 = var5.bind(var1)(var4);
            var8 = var9.fetchUserAffinitiesV2;
            var4 = false;
            var4 = var8.bind(var9)(var4);
            var8 = _closure1_slot1;
            var4 = 17;
            var4 = var7[var4];
            var12 = var8.bind(var1)(var4);
            var11 = var12.requestMembers;
            var4 = _closure1_slot14;
            var10 = var4.guildId;
            var4 = 18;
            var8 = var7[var4];
            var8 = var5.bind(var1)(var8);
            var9 = var8.MAX_MEMBERS;
            var8 = '';
            var8 = var11.bind(var12)(var10, var8, var9);
            var4 = var7[var4];
            var10 = var5.bind(var1)(var4);
            var9 = var10.generateLiveActivityState;
            var4 = _closure1_slot14;
            var16 = var4.guildId;
            var4 = _closure1_slot14;
            var15 = var4.channelId;
            var13 = _closure1_slot15;
            var14 = true;
            var17 = var10;
            var5 = var17[var9](var16, var15, var14, var13, var12);
            var2 = var2 != var5;
            if(!var2) { _fun0003_ip = 374; continue _fun0003 }
 325:
            var4 = global;
            var8 = var4.JSON;
            var7 = var8.stringify;
            var7 = var7.bind(var8)(var5);
            var9 = var4.JSON;
            var8 = var9.stringify;
            var4 = _closure1_slot14;
            var4 = var4.data;
            var4 = var8.bind(var9)(var4);
            var2 = var7 !== var4;
 374:
            if(!var2) { _fun0003_ip = 431; continue _fun0003 }
 377:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var4 = var4.bind(var1)(var2);
            var2 = var4.startHangoutActivity;
            var2 = var2.bind(var4)(var5);
            var2 = {};
            var15 = _closure1_slot14;
            var16 = var2;
            var4 = copyDataProperties(var16, var15);
            var4 = 'data';
            var2[var4] = var5;
            _closure1_slot14 = var2;
 431:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
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
    var4 = var7.bind(var1)(var4);
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
    var8 = 10;
    var4 = var6[var8];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot13 = var4;
    var4 = null;
    var _closure1_slot14 = var4;
    var _closure1_slot15 = var4;
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.SECOND;
    var4 = var8 * var4;
    var _closure1_slot17 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function NativeHangoutsManager(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot18;
                var1 = var1.bind(var4)();
                if(var1) { _fun0005_ip = 86; continue _fun0005 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0005_ip = 120; continue _fun0005;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var4 = function START_HANGOUT(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleStartHangout;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['START_HANGOUT'] = var4;
                var4 = function END_HANGOUT() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleEndHangout;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['END_HANGOUT'] = var4;
                var4 = function APP_STATE_UPDATE() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleAppStateUpdate;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['APP_STATE_UPDATE'] = var4;
                var4 = function VOICE_STATE_UPDATES(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleVoiceStateUpdates;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['VOICE_STATE_UPDATES'] = var4;
                var4 = function SPEAKING(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleSpeaking;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['SPEAKING'] = var4;
                var4 = function MESSAGE_CREATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleMessageCreate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['MESSAGE_CREATE'] = var4;
                var4 = function LOAD_USER_AFFINITIES_SUCCESS() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleUserAffinitiesSuccess;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['LOAD_USER_AFFINITIES_SUCCESS'] = var4;
                var1['actions'] = var3;
                var3 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var1 = arg1;
                        var5 = var1.guildId;
                        var4 = var1.channelId;
                        var3 = _closure1_slot9;
                        var2 = var3.getChannel;
                        var2 = var2.bind(var3)(var4);
                        var3 = null;
                        if(!(var3 != var2)) { _fun0006_ip = 116; continue _fun0006 }
 36:
                        var7 = _closure1_slot11;
                        var6 = var7.getGuild;
                        var2 = var2.guild_id;
                        var6 = var6.bind(var7)(var2);
                        var2 = var3 != var6;
                        if(!var2) { _fun0006_ip = 85; continue _fun0006 }
 62:
                        var9 = _closure1_slot19;
                        var8 = var6.id;
                        var7 = undefined;
                        var6 = 'manager - start hangout';
                        var2 = var9.bind(var7)(var8, var6);
 85:
                        if(!var2) { _fun0006_ip = 116; continue _fun0006 }
 88:
                        var2 = {};
                        var2['guildId'] = var5;
                        var2['channelId'] = var4;
                        var2['data'] = var3;
                        _closure1_slot14 = var2;
                        var2 = _closure1_slot20;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 116:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleStartHangout'] = var3;
                var3 = function() {
                    var2 = null;
                    _closure1_slot14 = var2;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.stopHangoutActivity;
                    var2 = 0;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleEndHangout'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hasActivity;
                    var4 = var2.bind(var3)();
                    var3 = var4.then;
                    var2 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var1 = arg1;
                            var2 = var1.hasActivity;
                            var1 = var1.hasActiveActivity;
                            if(var2) { _fun0007_ip = 39; continue _fun0007 }
 18:
                            var3 = null;
                            _closure1_slot14 = var3;
                            var3 = _closure1_slot20;
                            var2 = undefined;
                            var2 = var3.bind(var2)();
                            _fun0007_ip = 157; continue _fun0007;
 39:
                            if(!var1) { _fun0007_ip = 157; continue _fun0007 }
 42:
                            var4 = _closure1_slot12;
                            var3 = var4.getVoiceStateForUser;
                            var5 = _closure1_slot8;
                            var2 = var5.getId;
                            var2 = var2.bind(var5)();
                            var3 = var3.bind(var4)(var2);
                            var2 = null;
                            if(!(var2 != var3)) { _fun0007_ip = 143; continue _fun0007 }
 80:
                            var4 = var3.channelId;
                            if(!(var2 != var4)) { _fun0007_ip = 143; continue _fun0007 }
 89:
                            var5 = _closure1_slot9;
                            var4 = var5.getChannel;
                            var3 = var3.channelId;
                            var4 = var4.bind(var5)(var3);
                            var3 = var2 != var4;
                            if(!var3) { _fun0007_ip = 124; continue _fun0007 }
 115:
                            var4 = var4.guild_id;
                            var3 = var2 == var4;
 124:
                            if(!var3) { _fun0007_ip = 157; continue _fun0007 }
 127:
                            _closure1_slot14 = var2;
                            var4 = _closure1_slot20;
                            var3 = undefined;
                            var3 = var4.bind(var3)();
                            _fun0007_ip = 157; continue _fun0007;
 143:
                            _closure1_slot14 = var2;
                            var2 = _closure1_slot20;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
 157:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleAppStateUpdate'] = var3;
                var3 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.voiceStates;
                        var2 = _closure1_slot14;
                        var1 = null;
                        if(!(var1 == var2)) { _fun0008_ip = 26; continue _fun0008 }
 22:
                        var1 = undefined;
                        return var1;
 26:
                        var2 = var3.some;
                        var1 = function(arg1) {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                                var5 = arg1;
                                var6 = var5.channelId;
                                var7 = _closure1_slot14;
                                var4 = null;
                                var8 = var4 == var7;
                                var3 = undefined;
                                var1 = undefined;
                                if(var8) { _fun0009_ip = 33; continue _fun0009 }
 28:
                                var1 = var7.channelId;
 33:
                                var1 = var6 === var1;
                                if(!var1) { _fun0009_ip = 67; continue _fun0009 }
 40:
                                var5 = var5.guildId;
                                var6 = _closure1_slot14;
                                var7 = var4 == var6;
                                var4 = undefined;
                                if(var7) { _fun0009_ip = 63; continue _fun0009 }
 58:
                                var4 = var6.guildId;
 63:
                                var1 = var5 === var4;
 67:
                                if(!var1) { _fun0009_ip = 80; continue _fun0009 }
 70:
                                var2 = _closure1_slot20;
                                var2 = var2.bind(var3)();
                                var1 = true;
 80:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var1['handleVoiceStateUpdates'] = var3;
                var3 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var1 = arg1;
                        var1 = var1.userId;
                        var _closure4_slot0 = var1;
                        var4 = _closure1_slot14;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0010_ip = 77; continue _fun0010 }
 27:
                        var4 = _closure1_slot14;
                        var4 = var4.data;
                        if(!(var3 != var4)) { _fun0010_ip = 77; continue _fun0010 }
 40:
                        var5 = var4.voiceUsers;
                        var4 = var5.find;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.id;
                            var1 = _closure4_slot0;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var2 = var4.bind(var5)(var2);
                        if(!(var3 != var2)) { _fun0010_ip = 77; continue _fun0010 }
 67:
                        var2 = _closure1_slot20;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 77:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSpeaking'] = var3;
                var3 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var1 = arg1;
                        var6 = var1.guildId;
                        var3 = var1.message;
                        var1 = _closure1_slot14;
                        var5 = null;
                        var1 = var5 != var1;
                        if(!var1) { _fun0011_ip = 42; continue _fun0011 }
 29:
                        var4 = _closure1_slot14;
                        var4 = var4.guildId;
                        var1 = var4 === var6;
 42:
                        if(!var1) { _fun0011_ip = 83; continue _fun0011 }
 45:
                        var4 = var3.author;
                        var6 = var5 == var4;
                        var5 = undefined;
                        if(var6) { _fun0011_ip = 65; continue _fun0011 }
 60:
                        var5 = var4.id;
 65:
                        var6 = _closure1_slot8;
                        var4 = var6.getId;
                        var4 = var4.bind(var6)();
                        var1 = var5 !== var4;
 83:
                        if(!var1) { _fun0011_ip = 113; continue _fun0011 }
 86:
                        var6 = _closure1_slot19;
                        var2 = _closure1_slot14;
                        var5 = var2.guildId;
                        var4 = undefined;
                        var2 = 'manager - updateLiveActivityWithMessage';
                        var1 = var6.bind(var4)(var5, var2);
 113:
                        if(!var1) { _fun0011_ip = 132; continue _fun0011 }
 116:
                        var2 = function updateLiveActivityWithMessage(arg1) {
                            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                                var4 = arg1;
                                var5 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 12;
                                var2 = var2[var1];
                                var1 = undefined;
                                var5 = var5.bind(var1)(var2);
                                var2 = var5.isIOS;
                                var2 = var2.bind(var5)();
                                if(!var2) { _fun0012_ip = 335; continue _fun0012 }
 44:
                                var5 = _closure1_slot14;
                                var2 = null;
                                if(!(var2 != var5)) { _fun0012_ip = 335; continue _fun0012 }
 57:
                                var7 = _closure1_slot19;
                                var5 = _closure1_slot14;
                                var6 = var5.guildId;
                                var5 = 'manager - updateLiveActivityWithMessage';
                                var5 = var7.bind(var1)(var6, var5);
                                if(!var5) { _fun0012_ip = 335; continue _fun0012 }
 88:
                                var5 = _closure1_slot14;
                                if(!(var2 != var5)) { _fun0012_ip = 335; continue _fun0012 }
 99:
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var5 = 18;
                                var5 = var7[var5];
                                var9 = var6.bind(var1)(var5);
                                var8 = var9.generateLiveActivityState;
                                var5 = _closure1_slot14;
                                var14 = var5.guildId;
                                var5 = _closure1_slot14;
                                var13 = var5.channelId;
                                var12 = true;
                                var15 = var9;
                                var11 = var4;
                                var6 = var15[var8](var14, var13, var12, var11, var10);
                                var5 = var2 != var6;
                                if(!var5) { _fun0012_ip = 211; continue _fun0012 }
 162:
                                var7 = global;
                                var9 = var7.JSON;
                                var8 = var9.stringify;
                                var8 = var8.bind(var9)(var6);
                                var10 = var7.JSON;
                                var9 = var10.stringify;
                                var7 = _closure1_slot14;
                                var7 = var7.data;
                                var7 = var9.bind(var10)(var7);
                                var5 = var8 !== var7;
 211:
                                if(!var5) { _fun0012_ip = 335; continue _fun0012 }
 214:
                                _closure1_slot15 = var4;
                                var5 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var4 = 14;
                                var4 = var7[var4];
                                var5 = var5.bind(var1)(var4);
                                var4 = var5.startHangoutActivity;
                                var4 = var4.bind(var5)(var6);
                                var4 = {};
                                var13 = _closure1_slot14;
                                var14 = var4;
                                var5 = copyDataProperties(var14, var13);
                                var5 = 'data';
                                var4[var5] = var6;
                                _closure1_slot14 = var4;
                                var4 = _closure1_slot16;
                                if(!(var2 != var4)) { _fun0012_ip = 304; continue _fun0012 }
 283:
                                var4 = global;
                                var5 = var4.clearTimeout;
                                var4 = _closure1_slot16;
                                var4 = var5.bind(var1)(var4);
                                _closure1_slot16 = var2;
 304:
                                var2 = global;
                                var5 = var2.setTimeout;
                                var4 = _closure1_slot17;
                                var2 = function() {
                                    var2 = null;
                                    _closure1_slot15 = var2;
                                    var2 = _closure1_slot20;
                                    var1 = undefined;
                                    var2 = var2.bind(var1)();
                                    return var1;
                                };
                                var2 = var5.bind(var1)(var2, var4);
                                _closure1_slot16 = var2;
 335:
                                return var1;
                            }
                        };
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
 132:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleMessageCreate'] = var3;
                var2 = function() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        var3 = _closure1_slot14;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0013_ip = 23; continue _fun0013 }
 13:
                        var2 = _closure1_slot20;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 23:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleUserAffinitiesSuccess'] = var2;
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
        var6 = '_initialize';
        var5['key'] = var6;
        var1 = function value() {
            var1 = global;
            var4 = var1.setTimeout;
            var1 = undefined;
            var3 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var4 = _closure1_slot12;
                    var3 = var4.getVoiceStateForUser;
                    var5 = _closure1_slot8;
                    var2 = var5.getId;
                    var2 = var2.bind(var5)();
                    var2 = var3.bind(var4)(var2);
                    var3 = null;
                    if(!(var3 != var2)) { _fun0014_ip = 175; continue _fun0014 }
 41:
                    var4 = var2.channelId;
                    if(!(var3 != var4)) { _fun0014_ip = 175; continue _fun0014 }
 53:
                    var5 = _closure1_slot9;
                    var4 = var5.getChannel;
                    var2 = var2.channelId;
                    var4 = var4.bind(var5)(var2);
                    if(!(var3 != var4)) { _fun0014_ip = 175; continue _fun0014 }
 76:
                    var2 = var4.guild_id;
                    if(!(var3 != var2)) { _fun0014_ip = 175; continue _fun0014 }
 85:
                    var6 = _closure1_slot11;
                    var5 = var6.getGuild;
                    var2 = var4.guild_id;
                    var5 = var5.bind(var6)(var2);
                    var2 = var3 != var5;
                    if(!var2) { _fun0014_ip = 134; continue _fun0014 }
 111:
                    var8 = _closure1_slot19;
                    var7 = var5.id;
                    var6 = undefined;
                    var5 = 'manager - app startup';
                    var2 = var8.bind(var6)(var7, var5);
 134:
                    if(!var2) { _fun0014_ip = 175; continue _fun0014 }
 137:
                    var2 = {};
                    var5 = var4.guild_id;
                    var2['guildId'] = var5;
                    var4 = var4.id;
                    var2['channelId'] = var4;
                    var2['data'] = var3;
                    _closure1_slot14 = var2;
                    var2 = _closure1_slot20;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 175:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = 5000;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
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
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hangouts/native/NativeHangoutsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();