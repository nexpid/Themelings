// app/modules/stage_channels/StageChannelRequestToSpeakMessageManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
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
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageFlags;
    var _closure1_slot14 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function StageChannelRequestToSpeakMessageManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                var1 = _closure1_slot15;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 84; continue _fun0002 }
 71:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0002_ip = 118; continue _fun0002;
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
                var1['actions'] = var2;
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
        var6 = 'handleVoiceStateUpdates';
        var5['key'] = var6;
        var1 = function value(arg1) {
            var1 = arg1;
            var3 = var1.voiceStates;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.channelId;
                    var8 = var1.userId;
                    var _closure4_slot0 = var8;
                    var2 = var1.suppress;
                    var4 = var1.requestToSpeakTimestamp;
                    var7 = _closure1_slot12;
                    var6 = var7.getVoiceChannelId;
                    var6 = var6.bind(var7)();
                    if(!(var6 === var5)) { _fun0003_ip = 290; continue _fun0003 }
 55:
                    if(!var2) { _fun0003_ip = 290; continue _fun0003 }
 61:
                    var2 = null;
                    if(!(var2 != var5)) { _fun0003_ip = 290; continue _fun0003 }
 70:
                    var7 = _closure1_slot8;
                    var6 = var7.getId;
                    var6 = var6.bind(var7)();
                    if(!(var8 !== var6)) { _fun0003_ip = 290; continue _fun0003 }
 91:
                    var11 = _closure1_slot11;
                    var10 = var11.can;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 12;
                    var7 = var7[var6];
                    var6 = undefined;
                    var7 = var9.bind(var6)(var7);
                    var9 = var7.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                    var12 = _closure1_slot9;
                    var7 = var12.getChannel;
                    var7 = var7.bind(var12)(var5);
                    var7 = var10.bind(var11)(var9, var7);
                    if(!var7) { _fun0003_ip = 290; continue _fun0003 }
 155:
                    if(!(var2 == var4)) { _fun0003_ip = 238; continue _fun0003 }
 159:
                    var9 = _closure1_slot10;
                    var7 = var9.getMessages;
                    var9 = var7.bind(var9)(var5);
                    var7 = var9.findNewest;
                    var3 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var2 = arg1;
                            var4 = var2.type;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 14;
                            var5 = var5[var1];
                            var1 = undefined;
                            var1 = var6.bind(var1)(var5);
                            var1 = var1.MessageTypes;
                            var1 = var1.STAGE_RAISE_HAND;
                            var1 = var4 === var1;
                            if(!var1) { _fun0004_ip = 73; continue _fun0004 }
 52:
                            var4 = var2.hasFlag;
                            var3 = _closure1_slot14;
                            var3 = var3.EPHEMERAL;
                            var1 = var4.bind(var2)(var3);
 73:
                            if(!var1) { _fun0004_ip = 98; continue _fun0004 }
 76:
                            var2 = var2.author;
                            var3 = var2.id;
                            var2 = _closure4_slot0;
                            var1 = var3 === var2;
 98:
                            return var1;
                        }
                    };
                    var3 = var7.bind(var9)(var3);
                    if(!(var2 != var3)) { _fun0003_ip = 290; continue _fun0003 }
 196:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 15;
                    var7 = var10[var7];
                    var10 = var9.bind(var6)(var7);
                    var9 = var10.deleteMessage;
                    var7 = var3.id;
                    var3 = true;
                    var3 = var9.bind(var10)(var5, var7, var3);
                    _fun0003_ip = 290; continue _fun0003;
 238:
                    var7 = _closure1_slot13;
                    var3 = var7.getUser;
                    var3 = var3.bind(var7)(var8);
                    if(!(var2 != var3)) { _fun0003_ip = 290; continue _fun0003 }
 257:
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 13;
                    var1 = var7[var1];
                    var2 = var2.bind(var6)(var1);
                    var1 = var2.sendStageRequestToSpeakEphemeralMessage;
                    var1 = var1.bind(var2)(var5, var3, var4);
 290:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
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
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/StageChannelRequestToSpeakMessageManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();