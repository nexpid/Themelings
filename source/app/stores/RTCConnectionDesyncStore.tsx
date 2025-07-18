// app/stores/RTCConnectionDesyncStore.tsx
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
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function upsert(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var8 = arg2;
            var10 = arg3;
            var5 = _closure1_slot8;
            var1 = {};
            var4 = var2.id;
            var1['userId'] = var4;
            var1['channelId'] = var10;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var15 = var4;
            var14 = var1;
            var1 = new var15[var5](var14, var13);
            var6 = var1 instanceof Object ? var1 : var4;
            var9 = _closure1_slot13;
            var4 = null;
            var7 = var8;
            if(!(var4 == var7)) { _fun0002_ip = 71; continue _fun0002 }
 67:
            var7 = _closure1_slot14;
 71:
            var5 = var2.id;
            var1 = undefined;
            var11 = var9.bind(var1)(var6, var7, var5);
            var9 = _closure1_slot17;
            var7 = var9.set;
            var5 = var2.id;
            var5 = var7.bind(var9)(var5, var11);
            var5 = {};
            var7 = _closure1_slot16;
            var7 = var7.USER;
            var5['type'] = var7;
            var5['user'] = var2;
            var7 = var2.id;
            var5['id'] = var7;
            var5['streamId'] = var4;
            var5['voiceState'] = var6;
            var5['voicePlatform'] = var4;
            var4 = false;
            var5['speaking'] = var4;
            var6 = 0;
            var5['lastSpoke'] = var6;
            var5['soundsharing'] = var4;
            var5['ringing'] = var4;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 14;
            var6 = var9[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.getName;
            var6 = var6.bind(var7)(var8, var10, var2);
            var5['userNick'] = var6;
            var7 = _closure1_slot0;
            var6 = 15;
            var6 = var9[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.getAvatarDecoration;
            var6 = var6.bind(var7)(var2, var8);
            var5['userAvatarDecoration'] = var6;
            var5['localVideoDisabled'] = var4;
            var4 = _closure1_slot18;
            var3 = var4.set;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function deleteUserDesyncData(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot17;
            var1 = var3.delete;
            var1 = var1.bind(var3)(var5);
            var4 = _closure1_slot18;
            var3 = var4.delete;
            var3 = var3.bind(var4)(var5);
            var4 = _closure1_slot19;
            var2 = var4.delete;
            var2 = var2.bind(var4)(var5);
            if(var1) { _fun0003_ip = 54; continue _fun0003 }
 51:
            var1 = var3;
 54:
            if(var1) { _fun0003_ip = 60; continue _fun0003 }
 57:
            var1 = var2;
 60:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function retryFailedUsers() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = _closure1_slot10;
            var3 = var4.getChannelId;
            var6 = var3.bind(var4)();
            var _closure2_slot0 = var6;
            var3 = null;
            if(!(var3 != var6)) { _fun0004_ip = 99; continue _fun0004 }
 29:
            var5 = _closure1_slot9;
            var4 = var5.getChannel;
            var5 = var4.bind(var5)(var6);
            var4 = var3 == var5;
            var3 = undefined;
            if(var4) { _fun0004_ip = 62; continue _fun0004 }
 52:
            var4 = var5.getGuildId;
            var3 = var4.bind(var5)();
 62:
            var _closure2_slot1 = var3;
            var3 = false;
            var _closure2_slot2 = var3;
            var4 = _closure1_slot19;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var6 = arg1;
                    var5 = _closure1_slot12;
                    var4 = var5.getVoiceStateForChannel;
                    var3 = _closure2_slot0;
                    var4 = var4.bind(var5)(var3, var6);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0005_ip = 51; continue _fun0005 }
 35:
                    var5 = _closure1_slot19;
                    var4 = var5.delete;
                    var4 = var4.bind(var5)(var6);
                    _fun0005_ip = 111; continue _fun0005;
 51:
                    var5 = _closure1_slot11;
                    var4 = var5.getUser;
                    var5 = var4.bind(var5)(var6);
                    if(!(var3 != var5)) { _fun0005_ip = 111; continue _fun0005 }
 70:
                    var3 = true;
                    _closure2_slot2 = var3;
                    var4 = _closure1_slot19;
                    var3 = var4.delete;
                    var3 = var3.bind(var4)(var6);
                    var4 = _closure1_slot21;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var5, var3, var2);
 111:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var1 = _closure2_slot2;
            return var1;
 99:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var9 = function handleReset() {
        var3 = _closure1_slot17;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var3 = _closure1_slot18;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var2 = _closure1_slot19;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var _closure1_slot24 = var9;
    var2 = global;
    var11 = var2.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot12 = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.makeSortedVoiceState;
    var _closure1_slot13 = var8;
    var8 = 11;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var10 = var8.ME;
    var _closure1_slot14 = var10;
    var8 = var8.RTCConnectionStates;
    var _closure1_slot15 = var8;
    var8 = 12;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ParticipantTypes;
    var _closure1_slot16 = var8;
    var8 = 13;
    var10 = var6[var8];
    var10 = var7.bind(var1)(var10);
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var15 = var11;
    var10 = new var15[var10](var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot17 = var10;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var10 = var8.prototype;
    var10 = Object.create(var10, {constructor: {value: var8}});
    var15 = var10;
    var8 = new var15[var8](var14);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot18 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var15 = var8;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot19 = var2;
    var2 = 17;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function RTCConnectionDesyncStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot20;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 69; continue _fun0006 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 105; continue _fun0006;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var7 = var4.waitFor;
            var11 = _closure1_slot12;
            var10 = _closure1_slot11;
            var9 = _closure1_slot9;
            var8 = _closure1_slot10;
            var12 = var4;
            var2 = var12[var7](var11, var10, var9, var8, var7);
            var3 = var4.syncWith;
            var5 = _closure1_slot11;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot23;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'desyncedVoiceStatesCount';
        var5['key'] = var7;
        var7 = function get() {
            var2 = _closure1_slot17;
            var1 = var2.size;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getDesyncedUserIds';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot17;
            var1 = var2.keys;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getDesyncedVoiceStates';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot17;
            var1 = var2.values;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getDesyncedParticipants';
        var5['key'] = var7;
        var6 = function value() {
            var2 = _closure1_slot18;
            var1 = var2.values;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'RTCConnectionDesyncStore';
    var8['displayName'] = var2;
    var2 = 18;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleConnectionOpen() {
        var2 = _closure1_slot24;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['CONNECTION_OPEN'] = var10;
    var2['VOICE_CHANNEL_SELECT'] = var9;
    var9 = function handleRTCConnectionState(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var5 = var1.state;
            var2 = var1.context;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var6.bind(var3)(var1);
            var1 = var1.MediaEngineContextTypes;
            var1 = var1.DEFAULT;
            var1 = var2 === var1;
            if(!var1) { _fun0007_ip = 87; continue _fun0007 }
 57:
            var2 = _closure1_slot15;
            var2 = var2.DISCONNECTED;
            var2 = var5 === var2;
            if(!var2) { _fun0007_ip = 84; continue _fun0007 }
 74:
            var4 = _closure1_slot24;
            var4 = var4.bind(var3)();
            var2 = undefined;
 84:
            var1 = var2;
 87:
            return var1;
        }
    };
    var2['RTC_CONNECTION_STATE'] = var9;
    var9 = function handleVoiceStateUpdates(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var5 = var1.voiceStates;
            var3 = _closure1_slot10;
            var1 = var3.getChannelId;
            var3 = var1.bind(var3)();
            var _closure2_slot0 = var3;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0008_ip = 62; continue _fun0008 }
 41:
            var4 = var5.reduce;
            var3 = function(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = arg1;
                    var1 = arg2;
                    var5 = var1.userId;
                    var3 = var1.channelId;
                    var1 = _closure2_slot0;
                    var1 = var3 === var1;
                    if(!var1) { _fun0009_ip = 50; continue _fun0009 }
 30:
                    var4 = _closure1_slot22;
                    var3 = undefined;
                    var3 = var4.bind(var3)(var5);
                    var3 = !var3;
                    var1 = !var3;
 50:
                    if(var1) { _fun0009_ip = 56; continue _fun0009 }
 53:
                    var1 = var2;
 56:
                    return var1;
                }
            };
            var2 = false;
            var1 = var4.bind(var5)(var3, var2);
 62:
            return var1;
        }
    };
    var2['VOICE_STATE_UPDATES'] = var9;
    var9 = function handleRTCConnectionClientConnect(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var5 = var1.userIds;
            var3 = var1.guildId;
            var _closure2_slot0 = var3;
            var3 = var1.channelId;
            var _closure2_slot1 = var3;
            var3 = var1.context;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 16;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var6.bind(var1)(var4);
            var1 = var1.MediaEngineContextTypes;
            var1 = var1.DEFAULT;
            var1 = var3 === var1;
            if(!var1) { _fun0010_ip = 99; continue _fun0010 }
 78:
            var4 = var5.reduce;
            var3 = function(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = arg1;
                    var5 = arg2;
                    var7 = _closure1_slot12;
                    var6 = var7.getVoiceStateForChannel;
                    var4 = _closure2_slot1;
                    var6 = var6.bind(var7)(var4, var5);
                    var4 = null;
                    if(!(var4 == var6)) { _fun0011_ip = 101; continue _fun0011 }
 38:
                    var7 = _closure1_slot11;
                    var6 = var7.getUser;
                    var8 = var6.bind(var7)(var5);
                    if(!(var4 != var8)) { _fun0011_ip = 82; continue _fun0011 }
 57:
                    var7 = _closure1_slot21;
                    var6 = _closure2_slot0;
                    var4 = _closure2_slot1;
                    var2 = undefined;
                    var2 = var7.bind(var2)(var8, var6, var4);
                    var2 = true;
                    _fun0011_ip = 99; continue _fun0011;
 82:
                    var4 = _closure1_slot19;
                    var3 = var4.add;
                    var3 = var3.bind(var4)(var5);
                    var2 = var1;
 99:
                    return var2;
 101:
                    return var1;
                }
            };
            var2 = false;
            var1 = var4.bind(var5)(var3, var2);
 99:
            return var1;
        }
    };
    var2['RTC_CONNECTION_CLIENT_CONNECT'] = var9;
    var4 = function handleRTCConnectionClientDisconnect(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var4 = var1.userId;
            var5 = var1.context;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var6.bind(var3)(var1);
            var1 = var1.MediaEngineContextTypes;
            var1 = var1.DEFAULT;
            var1 = var5 === var1;
            if(!var1) { _fun0012_ip = 66; continue _fun0012 }
 57:
            var2 = _closure1_slot22;
            var1 = var2.bind(var3)(var4);
 66:
            return var1;
        }
    };
    var2['RTC_CONNECTION_CLIENT_DISCONNECT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/RTCConnectionDesyncStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();