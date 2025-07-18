// app/modules/voice_calls/VoicePermissionManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function voicePermissionRequest() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var5 = 13;
            var3 = var1[var5];
            var1 = undefined;
            var6 = var4.bind(var1)(var3);
            var4 = var6.requestPermission;
            var3 = _closure1_slot15;
            var3 = var3.AUDIO;
            var6 = var4.bind(var6)(var3);
            var4 = var6.then;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    if(!var1) { _fun0003_ip = 38; continue _fun0003 }
 6:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
 38:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var4.bind(var6)(var3);
            var4 = _closure1_slot12;
            var3 = var4.getMode;
            var4 = var3.bind(var4)();
            var3 = _closure1_slot14;
            var3 = var3.PUSH_TO_TALK;
            if(!(var4 === var3)) { _fun0002_ip = 131; continue _fun0002 }
 93:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var4 = var4.bind(var1)(var3);
            var3 = var4.requestPermission;
            var2 = _closure1_slot15;
            var2 = var2.INPUT_MONITORING;
            var2 = var3.bind(var4)(var2);
 131:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var2 = function shouldImmediatelyRequestVoicePermissions(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg2;
            var3 = _closure1_slot11;
            var1 = var3.getChannel;
            var4 = var1.bind(var3)(var5);
            var1 = null;
            var3 = var1 == var4;
            var1 = undefined;
            if(var3) { _fun0004_ip = 41; continue _fun0004 }
 31:
            var3 = var4.isListenModeCapable;
            var1 = var3.bind(var4)();
 41:
            var1 = !var1;
            if(var1) { _fun0004_ip = 66; continue _fun0004 }
 47:
            var4 = _closure1_slot8;
            var3 = var4.isSpeaker;
            var2 = arg1;
            var1 = var3.bind(var4)(var2, var5);
 66:
            return var1;
        }
    };
    var _closure1_slot19 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot13 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.InputModes;
    var _closure1_slot14 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.NativePermissionTypes;
    var _closure1_slot15 = var5;
    var5 = null;
    var _closure1_slot16 = var5;
    var5 = 16;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var4 = function(arg1) {
        var4 = function VoicePermissionManager(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = this;
                var12 = 0;
                var1 = copyRestArgs(var12);
                var7 = _closure1_slot3;
                var2 = _closure2_slot0;
                var3 = undefined;
                var7 = var7.bind(var3)(var4, var2);
                var9 = new Array(0);
                var12 = var9;
                var11 = var1;
                var10 = 0;
                var1 = arraySpread(var12, var11, var10);
                var1 = _closure1_slot6;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot17;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 84; continue _fun0005 }
 71:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0005_ip = 118; continue _fun0005;
 84:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot6;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
 118:
                var1 = var2.bind(var3)(var4, var1);
                var2 = {};
                var3 = var1.handleVoiceStateUpdates;
                var2['VOICE_STATE_UPDATES'] = var3;
                var3 = var1.handleVoiceChannelSelect;
                var2['VOICE_CHANNEL_SELECT'] = var3;
                var1['actions'] = var2;
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
        var1 = 'handleVoiceChannelSelect';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = arg1;
                var1 = var1.channelId;
                var2 = null;
                if(!(var2 == var1)) { _fun0006_ip = 21; continue _fun0006 }
 14:
                _closure1_slot16 = var2;
 21:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'handleVoiceStateUpdates';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var1 = arg1;
            var3 = var1.voiceStates;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var6 = arg1;
                    var5 = var6.userId;
                    var3 = var6.channelId;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0007_ip = 182; continue _fun0007 }
 22:
                    var7 = _closure1_slot10;
                    var1 = var7.getId;
                    var1 = var1.bind(var7)();
                    if(!(var1 === var5)) { _fun0007_ip = 182; continue _fun0007 }
 46:
                    var7 = _closure1_slot13;
                    var1 = var7.getRTCConnectionId;
                    var1 = var1.bind(var7)();
                    if(!(var4 != var1)) { _fun0007_ip = 182; continue _fun0007 }
 64:
                    var1 = _closure1_slot16;
                    if(!(var1 !== var3)) { _fun0007_ip = 182; continue _fun0007 }
 72:
                    var4 = _closure1_slot19;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var5, var3);
                    if(var4) { _fun0007_ip = 186; continue _fun0007 }
 87:
                    var4 = _closure1_slot9;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {constructor: {value: var4}});
                    var12 = var5;
                    var11 = var6;
                    var4 = new var12[var4](var11, var10);
                    var9 = var4 instanceof Object ? var4 : var5;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 15;
                    var5 = var7[var4];
                    var8 = var6.bind(var1)(var5);
                    var5 = var8.getAudienceRequestToSpeakState;
                    var5 = var5.bind(var8)(var9);
                    var4 = var7[var4];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.RequestToSpeakStates;
                    var4 = var4.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                    if(!(var5 === var4)) { _fun0007_ip = 182; continue _fun0007 }
 170:
                    _closure1_slot16 = var3;
                    var4 = _closure1_slot18;
                    var4 = var4.bind(var1)();
 182:
                    var4 = undefined;
                    return var4;
 186:
                    _closure1_slot16 = var3;
                    var2 = _closure1_slot18;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var14 = var5;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 17;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_calls/VoicePermissionManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['shouldImmediatelyRequestVoicePermissions'] = var2;
    return var1;
})();