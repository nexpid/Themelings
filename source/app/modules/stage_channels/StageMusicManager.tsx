// app/modules/stage_channels/StageMusicManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
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
    var1 = function checkVoiceStates() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot9;
            var1 = var3.getVoiceChannelId;
            var7 = var1.bind(var3)();
            var3 = null;
            if(!(var3 != var7)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = _closure1_slot7;
            var1 = var4.getChannel;
            var4 = var1.bind(var4)(var7);
            if(!(var3 != var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var4.isGuildStageVoice;
            var1 = var1.bind(var4)();
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 10:
            var4 = _closure1_slot8;
            var1 = var4.isSelfDeaf;
            var1 = var1.bind(var4)();
            if(var1) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var4 = _closure1_slot13;
            var1 = var4.shouldPlay;
            var1 = var1.bind(var4)();
            if(var1) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var4 = _closure1_slot12;
            var1 = var4.isLive;
            var1 = var1.bind(var4)(var7);
            if(var1) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var4 = _closure1_slot13;
            var1 = var4.isMuted;
            var1 = var1.bind(var4)();
            if(var1) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var1 = global;
            var5 = var1.Object;
            var4 = var5.values;
            var6 = _closure1_slot10;
            var1 = var6.getVoiceStatesForChannel;
            var1 = var1.bind(var6)(var7);
            var5 = var4.bind(var5)(var1);
            var4 = var5.find;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3.suppress;
                    var1 = !var1;
                    if(!var1) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var2 = var3.isVoiceMuted;
                    var2 = var2.bind(var3)();
                    var1 = !var2;
case 19:
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var1);
            var1 = var3 != var1;
            if(var1) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var3 = _closure1_slot15;
            if(var3) { _fun0002_ip = 21; continue _fun0002 }
case 23:
            var4 = _closure1_slot16;
            var6 = _closure1_slot14;
            var5 = _closure1_slot8;
            var3 = var5.getOutputVolume;
            var5 = var3.bind(var5)();
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
            var4['volume'] = var3;
            var4 = _closure1_slot16;
            var3 = var4.loop;
            var3 = var3.bind(var4)();
            var3 = true;
            _closure1_slot15 = var3;
            _fun0002_ip = 24; continue _fun0002;
case 21:
            if(!var1) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var3 = _closure1_slot16;
            var1 = var3.pause;
            var1 = var1.bind(var3)();
            var1 = false;
            _closure1_slot15 = var1;
case 24:
            var1 = undefined;
            return var1;
case 17:
            var3 = _closure1_slot16;
            var1 = var3.pause;
            var1 = var1.bind(var3)();
            var1 = false;
            _closure1_slot15 = var1;
            var1 = undefined;
            return var1;
case 15:
            var3 = _closure1_slot16;
            var1 = var3.stop;
            var1 = var1.bind(var3)();
            var1 = false;
            _closure1_slot15 = var1;
            var1 = undefined;
            return var1;
case 13:
            var4 = _closure1_slot16;
            var5 = _closure1_slot14;
            var3 = _closure1_slot8;
            var1 = var3.getOutputVolume;
            var3 = var1.bind(var3)();
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var4['volume'] = var3;
            var4 = _closure1_slot16;
            var3 = var4.loop;
            var3 = var3.bind(var4)();
            var3 = true;
            _closure1_slot15 = var3;
            return var1;
case 11:
            var3 = _closure1_slot16;
            var1 = var3.stop;
            var1 = var1.bind(var3)();
            var1 = false;
            _closure1_slot15 = var1;
            var1 = undefined;
            return var1;
case 8:
            var3 = _closure1_slot16;
            var1 = var3.stop;
            var1 = var1.bind(var3)();
            var1 = false;
            _closure1_slot15 = var1;
            var1 = undefined;
            return var1;
case 6:
            var3 = _closure1_slot16;
            var1 = var3.stop;
            var1 = var1.bind(var3)();
            var1 = false;
            _closure1_slot15 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var7[var4];
    var11 = var5.bind(var1)(var4);
    var _closure1_slot8 = var11;
    var4 = 7;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var8 = function convertVolume(arg1) {
        var2 = arg1;
        var1 = 400;
        var1 = var2 / var1;
        return var1;
    };
    var _closure1_slot14 = var8;
    var4 = false;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var7[var4];
    var10 = var6.bind(var1)(var4);
    var9 = var10.createSound;
    var4 = var11.getOutputVolume;
    var4 = var4.bind(var11)();
    var8 = var8.bind(var1)(var4);
    var4 = 'stage_waiting';
    var4 = var9.bind(var10)(var4, var4, var8);
    var _closure1_slot16 = var4;
    var4 = 16;
    var4 = var7[var4];
    var5 = var5.bind(var1)(var4);
    var4 = function(arg1) {
        var4 = function StageMusicManager(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var12 = 0;
                var1 = copyRestArgs(var12);
                var7 = _closure1_slot2;
                var2 = _closure2_slot0;
                var3 = undefined;
                var7 = var7.bind(var3)(var4, var2);
                var9 = new Array(0);
                var12 = var9;
                var11 = var1;
                var10 = 0;
                var1 = arraySpread(var12, var11, var10);
                var1 = _closure1_slot5;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot17;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0004_ip = 28; continue _fun0004;
case 26:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot5;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
case 28:
                var1 = var2.bind(var3)(var4, var1);
                var2 = {};
                var3 = var1.handleVoiceChannelSelect;
                var2['VOICE_CHANNEL_SELECT'] = var3;
                var3 = var1.handleLogout;
                var2['LOGOUT'] = var3;
                var3 = var1.handleMute;
                var2['STAGE_MUSIC_MUTE'] = var3;
                var3 = var1.handlePlay;
                var2['STAGE_MUSIC_PLAY'] = var3;
                var3 = var1.handleVoiceStateUpdates;
                var2['VOICE_STATE_UPDATES'] = var3;
                var3 = var1.handleSetOutputVolume;
                var2['AUDIO_SET_OUTPUT_VOLUME'] = var3;
                var3 = var1.handleToggleSelfDeaf;
                var2['AUDIO_TOGGLE_SELF_DEAF'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'handleVoiceChannelSelect';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = arg1;
                var5 = var1.channelId;
                var2 = null;
                if(!(var2 == var5)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                var4 = _closure1_slot16;
                var1 = var4.stop;
                var1 = var1.bind(var4)();
                var1 = false;
                _closure1_slot15 = var1;
                _fun0005_ip = 31; continue _fun0005;
case 29:
                var4 = _closure1_slot7;
                var3 = var4.getChannel;
                var3 = var3.bind(var4)(var5);
                if(!(var2 != var3)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                var2 = var3.isGuildStageVoice;
                var2 = var2.bind(var3)();
                if(var2) { _fun0005_ip = 34; continue _fun0005 }
case 32:
                var3 = _closure1_slot16;
                var2 = var3.stop;
                var2 = var2.bind(var3)();
                var2 = false;
                _closure1_slot15 = var2;
                _fun0005_ip = 31; continue _fun0005;
case 34:
                var2 = _closure1_slot18;
                var1 = undefined;
                var1 = var2.bind(var1)();
case 31:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'handleLogout';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot16;
            var1 = var3.stop;
            var1 = var1.bind(var3)();
            var1 = false;
            _closure1_slot15 = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handlePlay';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = arg1;
                var2 = var1.play;
                if(var2) { _fun0006_ip = 35; continue _fun0006 }
case 20:
                var3 = _closure1_slot16;
                var2 = var3.pause;
                var2 = var2.bind(var3)();
                var2 = false;
                _closure1_slot15 = var2;
                _fun0006_ip = 9; continue _fun0006;
case 35:
                var2 = _closure1_slot18;
                var1 = undefined;
                var1 = var2.bind(var1)();
case 9:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'handleMute';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var1 = var1.muted;
                if(var1) { _fun0007_ip = 36; continue _fun0007 }
case 20:
                var3 = _closure1_slot18;
                var1 = undefined;
                var1 = var3.bind(var1)();
                _fun0007_ip = 9; continue _fun0007;
case 36:
                var3 = _closure1_slot16;
                var1 = var3.pause;
                var1 = var1.bind(var3)();
                var1 = false;
                _closure1_slot15 = var1;
case 9:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'handleVoiceStateUpdates';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot18;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'handleSetOutputVolume';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var4 = var1.volume;
            var3 = _closure1_slot16;
            var2 = _closure1_slot14;
            var1 = undefined;
            var2 = var2.bind(var1)(var4);
            var3['volume'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'handleToggleSelfDeaf';
        var5['key'] = var7;
        var6 = function value() {
            var2 = _closure1_slot18;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var15 = var5;
    var4 = new var15[var4](var14);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 17;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stage_channels/StageMusicManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function useShowStageMusicMuteButton(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var11 = arg1;
            var _closure2_slot0 = var11;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 13;
            var1 = var9[var6];
            var7 = undefined;
            var10 = var8.bind(var7)(var1);
            var4 = var10.useStateFromStores;
            var1 = _closure1_slot9;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getVoiceChannelId;
                var2 = var1.bind(var2)();
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var4.bind(var10)(var2, var1);
            var2 = 14;
            var2 = var9[var2];
            var10 = var8.bind(var7)(var2);
            var4 = var10.useStageParticipants;
            var2 = 15;
            var2 = var9[var2];
            var2 = var8.bind(var7)(var2);
            var2 = var2.StageChannelParticipantNamedIndex;
            var2 = var2.SPEAKER;
            var10 = var4.bind(var10)(var11, var2);
            var4 = var10.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.voiceState;
                var1 = var2.isVoiceMuted;
                var1 = var1.bind(var2)();
                var1 = !var1;
                return var1;
            };
            var2 = var4.bind(var10)(var2);
            var4 = null;
            var2 = var4 != var2;
            var6 = var9[var6];
            var7 = var8.bind(var7)(var6);
            var6 = var7.useStateFromStores;
            var8 = _closure1_slot12;
            var5 = new Array(1);
            var5[0] = var8;
            var3 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getStageInstanceByChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var6.bind(var7)(var5, var3);
            if(!var1) { _fun0008_ip = 37; continue _fun0008 }
case 38:
            var1 = var4 == var3;
case 37:
            if(!var1) { _fun0008_ip = 39; continue _fun0008 }
case 40:
            var1 = !var2;
case 39:
            return var1;
        }
    };
    var3['useShowStageMusicMuteButton'] = var4;
    var2 = function shouldShowStageMusicMuteButton(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var6 = arg1;
            var2 = _closure1_slot9;
            var1 = var2.getVoiceChannelId;
            var1 = var1.bind(var2)();
            var1 = var1 === var6;
            var5 = _closure1_slot11;
            var4 = var5.getMutableParticipants;
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 15;
            var7 = var7[var2];
            var2 = undefined;
            var2 = var8.bind(var2)(var7);
            var2 = var2.StageChannelParticipantNamedIndex;
            var2 = var2.SPEAKER;
            var5 = var4.bind(var5)(var6, var2);
            var4 = var5.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.voiceState;
                var1 = var2.isVoiceMuted;
                var1 = var1.bind(var2)();
                var1 = !var1;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var4 = null;
            var2 = var4 != var2;
            var5 = _closure1_slot12;
            var3 = var5.getStageInstanceByChannel;
            var3 = var3.bind(var5)(var6);
            if(!var1) { _fun0009_ip = 41; continue _fun0009 }
case 28:
            var1 = var4 == var3;
case 41:
            if(!var1) { _fun0009_ip = 42; continue _fun0009 }
case 43:
            var1 = !var2;
case 42:
            return var1;
        }
    };
    var3['shouldShowStageMusicMuteButton'] = var2;
    return var1;
})();