// app/modules/app_analytics/AppAnalyticsManager.tsx
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
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var8 = 1;
    var4 = var6[var8];
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
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.AnalyticEvents;
    var _closure1_slot14 = var9;
    var4 = var4.ActivityTypes;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.MINUTE;
    var4 = var8 * var4;
    var _closure1_slot16 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function AppAnalyticsManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
                var1 = _closure1_slot17;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = false;
                var1['_currentUserSpeaking'] = var3;
                var1['_anyoneElseSpeaking'] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure1_slot10;
                        var2 = var3.getChannelId;
                        var3 = var2.bind(var3)();
                        var4 = _closure3_slot0;
                        var4 = var4._voiceChannelId;
                        if(!(var4 !== var3)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var4 = _closure3_slot0;
                        var4['_voiceChannelId'] = var3;
                        var4 = null;
                        if(!(var4 == var3)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var5 = _closure3_slot0;
                        var3 = var5._reset;
                        var3 = var3.bind(var5)();
                        _fun0003_ip = 9; continue _fun0003;
case 11:
                        var3 = _closure3_slot0;
                        var3 = var3._reportInterval;
                        if(!(var4 == var3)) { _fun0003_ip = 9; continue _fun0003 }
case 13:
                        var2 = _closure3_slot0;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 13;
                        var4 = var4[var3];
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var3 = var3.Interval;
                        var4 = var3.prototype;
                        var4 = Object.create(var4, {constructor: {value: var3}});
                        var8 = var4;
                        var3 = new var8[var3](var7);
                        var3 = var3 instanceof Object ? var3 : var4;
                        var2['_reportInterval'] = var3;
                        var4 = var2._reportInterval;
                        var3 = var4.start;
                        var2 = _closure1_slot16;
                        var1 = function() {
                            var2 = _closure3_slot0;
                            var1 = var2._trackStartSpeaking;
                            var1 = var1.bind(var2)();
                            var1 = var2._trackStartListening;
                            var1 = var1.bind(var2)();
                            var1 = undefined;
                            return var1;
                        };
                        var1 = var3.bind(var4)(var2, var1);
case 9:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['_handleRTCConnectionStoreChanged'] = var3;
                var2 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure1_slot12;
                        var2 = var3.isCurrentUserSpeaking;
                        var3 = var2.bind(var3)();
                        var4 = _closure3_slot0;
                        var4 = var4._currentUserSpeaking;
                        if(!(var4 !== var3)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                        var4 = _closure3_slot0;
                        var4['_currentUserSpeaking'] = var3;
                        var3 = var4._trackStartSpeaking;
                        var3 = var3.bind(var4)();
case 14:
                        var3 = _closure1_slot12;
                        var1 = var3.isAnyoneElseSpeaking;
                        var1 = var1.bind(var3)();
                        var3 = _closure3_slot0;
                        var3 = var3._anyoneElseSpeaking;
                        if(!(var3 !== var1)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                        var2 = _closure3_slot0;
                        var2['_anyoneElseSpeaking'] = var1;
                        var1 = var2._trackStartListening;
                        var1 = var1.bind(var2)();
case 16:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['_handleSpeakingStoreChanged'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = global;
            var3 = var3.Map;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var10 = var4;
            var3 = new var10[var3](var9);
            var7 = var3 instanceof Object ? var3 : var4;
            var6 = var7.set;
            var5 = _closure1_slot12;
            var4 = function() {
                var2 = _closure3_slot0;
                var1 = var2._handleSpeakingStoreChanged;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var6.bind(var7)(var5, var4);
            var4 = var5.set;
            var3 = _closure1_slot10;
            var1 = function() {
                var2 = _closure3_slot0;
                var1 = var2._handleRTCConnectionStoreChanged;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var4.bind(var5)(var3, var1);
            var2['stores'] = var1;
            var1 = var2._reset;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = '_reset';
        var5['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = this;
                var1 = false;
                var2['_currentUserSpeaking'] = var1;
                var2['_anyoneElseSpeaking'] = var1;
                var3 = var2._reportInterval;
                var1 = null;
                if(!(var1 != var3)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                var4 = var2._reportInterval;
                var3 = var4.stop;
                var3 = var3.bind(var4)();
                var2['_reportInterval'] = var1;
case 18:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = '_trackStartSpeaking';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var7 = this;
                var1 = var7._currentUserSpeaking;
                if(!var1) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                var6 = _closure1_slot10;
                var1 = var6.getChannelId;
                var9 = var1.bind(var6)();
                var1 = var6.getGuildId;
                var8 = var1.bind(var6)();
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot14;
                var2 = var1.START_SPEAKING;
                var1 = {};
                var11 = _closure1_slot9;
                var10 = var11.getMode;
                var10 = var10.bind(var11)();
                var1['mode'] = var10;
                var11 = _closure1_slot12;
                var10 = var11.isCurrentUserPrioritySpeaking;
                var10 = var10.bind(var11)();
                var1['priority'] = var10;
                var1['channel'] = var9;
                var1['server'] = var8;
                var1['channel_id'] = var9;
                var1['guild_id'] = var8;
                var8 = var6.getRTCConnectionId;
                var8 = var8.bind(var6)();
                var1['rtc_connection_id'] = var8;
                var8 = var6.getMediaSessionId;
                var8 = var8.bind(var6)();
                var1['media_session_id'] = var8;
                var9 = _closure1_slot13;
                var8 = var9.countVoiceStatesForChannel;
                var5 = var7._voiceChannelId;
                var5 = var8.bind(var9)(var5);
                var1['voice_state_count'] = var5;
                var5 = var7.getGameMetadata;
                var12 = var5.bind(var7)();
                var13 = var1;
                var5 = copyDataProperties(var13, var12);
                var5 = var6.getPacketStats;
                var12 = var5.bind(var6)();
                var13 = var1;
                var5 = copyDataProperties(var13, var12);
                var1 = var3.bind(var4)(var2, var1);
case 20:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = '_trackStartListening';
        var5['key'] = var7;
        var7 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var6 = this;
                var2 = _closure1_slot9;
                var1 = var2.isDeaf;
                var1 = var1.bind(var2)();
                if(var1) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                var1 = var6._anyoneElseSpeaking;
                if(!var1) { _fun0007_ip = 22; continue _fun0007 }
case 24:
                var8 = _closure1_slot10;
                var1 = var8.getChannelId;
                var9 = var1.bind(var8)();
                var1 = var8.getGuildId;
                var7 = var1.bind(var8)();
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot14;
                var2 = var1.START_LISTENING;
                var1 = {};
                var11 = _closure1_slot9;
                var10 = var11.isMute;
                var10 = var10.bind(var11)();
                var1['mute'] = var10;
                var11 = _closure1_slot12;
                var10 = var11.isAnyonePrioritySpeaking;
                var10 = var10.bind(var11)();
                var1['anyone_priority'] = var10;
                var1['channel'] = var9;
                var1['server'] = var7;
                var1['channel_id'] = var9;
                var1['guild_id'] = var7;
                var7 = var8.getRTCConnectionId;
                var7 = var7.bind(var8)();
                var1['rtc_connection_id'] = var7;
                var7 = var8.getMediaSessionId;
                var7 = var7.bind(var8)();
                var1['media_session_id'] = var7;
                var8 = _closure1_slot13;
                var7 = var8.countVoiceStatesForChannel;
                var5 = var6._voiceChannelId;
                var5 = var7.bind(var8)(var5);
                var1['voice_state_count'] = var5;
                var5 = var6.getGameMetadata;
                var12 = var5.bind(var6)();
                var13 = var1;
                var5 = copyDataProperties(var13, var12);
                var1 = var3.bind(var4)(var2, var1);
case 22:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1._reset;
            var2 = var2.bind(var1)();
            var5 = _closure1_slot12;
            var4 = var5.removeChangeListener;
            var3 = var1._handleSpeakingStoreChanged;
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot10;
            var2 = var3.removeChangeListener;
            var1 = var1._handleRTCConnectionStoreChanged;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getGameMetadata';
        var5['key'] = var7;
        var6 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = _closure1_slot11;
                var2 = var4.findActivity;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = _closure1_slot15;
                    var1 = var1.PLAYING;
                    var1 = var2 === var1;
                    return var1;
                };
                var7 = var2.bind(var4)(var1);
                var2 = _closure1_slot8;
                var1 = var2.getCurrentGameForAnalytics;
                var5 = var1.bind(var2)();
                var1 = {};
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 15;
                var2 = var6[var2];
                var6 = undefined;
                var2 = var4.bind(var6)(var2);
                var2 = var2.bind(var6)(var7);
                var1['game_platform'] = var2;
                var2 = null;
                var8 = var2 != var7;
                var4 = null;
                if(!var8) { _fun0008_ip = 25; continue _fun0008 }
case 6:
                var4 = var7.name;
case 25:
                var1['game_name'] = var4;
                var8 = var2 != var5;
                var4 = null;
                if(!var8) { _fun0008_ip = 26; continue _fun0008 }
case 27:
                var4 = var5.exeName;
case 26:
                var1['game_exe_name'] = var4;
                var8 = var2 != var7;
                var4 = null;
                if(!var8) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                var4 = var7.application_id;
case 28:
                var1['game_id'] = var4;
                var7 = var2 != var5;
                var4 = null;
                if(!var7) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                var4 = var5.distributor;
case 30:
                var1['game_distributor'] = var4;
                var7 = var2 != var5;
                var4 = null;
                if(!var7) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                var4 = var5.sku;
case 32:
                var1['game_distributor_game_id'] = var4;
                var4 = var2 != var5;
                var2 = null;
                if(!var4) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 16;
                var3 = var7[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.getSubgameMetadata;
                var2 = var3.bind(var4)(var5);
case 34:
                var1['game_metadata'] = var2;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_analytics/AppAnalyticsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();