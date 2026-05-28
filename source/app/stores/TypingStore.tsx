// app/stores/TypingStore.tsx
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
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function _getTypingUsers(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot15;
            var1 = arg1;
            var1 = var3[var1];
            var3 = null;
            if(!(var3 == var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = _closure1_slot17;
case 6:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function _getTypingUsersByGuild(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot16;
            var1 = arg1;
            var1 = var3[var1];
            var3 = null;
            if(!(var3 == var1)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var1 = _closure1_slot18;
case 6:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function getGuildIdForChannel(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot9;
            var2 = var3.getChannel;
            var1 = arg1;
            var5 = var2.bind(var3)(var1);
            var3 = null;
            var4 = var3 == var5;
            var2 = undefined;
            if(var4) { _fun0004_ip = 8; continue _fun0004 }
case 9:
            var4 = var5.getGuildId;
            var2 = var4.bind(var5)();
case 8:
            var3 = var3 != var2;
            var1 = undefined;
            if(!var3) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var11 = function handleTypingStart(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var6 = var1.channelId;
            var8 = var1.userId;
            var4 = var1.guildId;
            var5 = {};
            var3 = _closure1_slot20;
            var1 = undefined;
            var13 = var3.bind(var1)(var6);
            var14 = var5;
            var3 = copyDataProperties(var14, var13);
            var9 = global;
            var7 = var9.clearTimeout;
            var3 = var5[var8];
            var3 = var7.bind(var1)(var3);
            var3 = function scheduleClear(arg1, arg2, arg3) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = arg2;
                var _closure3_slot1 = var2;
                var2 = arg3;
                var _closure3_slot2 = var2;
                var2 = global;
                var4 = var2.setTimeout;
                var3 = _closure1_slot13;
                var2 = undefined;
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'TYPING_STOP';
                    var2['type'] = var5;
                    var6 = _closure3_slot0;
                    var2['channelId'] = var6;
                    var6 = _closure3_slot1;
                    var2['userId'] = var6;
                    var5 = _closure3_slot2;
                    var2['guildId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var7 = var3.bind(var1)(var6, var8, var4);
            var5[var8] = var7;
            var3 = _closure1_slot15;
            var3[var6] = var5;
            var11 = null;
            if(!(var11 != var4)) { _fun0005_ip = 12; continue _fun0005 }
case 13:
            var3 = {};
            var5 = _closure1_slot21;
            var13 = var5.bind(var1)(var4);
            var14 = var3;
            var5 = copyDataProperties(var14, var13);
            var5 = {};
            var10 = var3[var6];
            if(!(var11 == var10)) { _fun0005_ip = 14; continue _fun0005 }
case 15:
            var10 = _closure1_slot17;
case 14:
            var14 = var5;
            var13 = var10;
            var10 = copyDataProperties(var14, var13);
            var10 = var9.clearTimeout;
            var9 = var5[var8];
            var9 = var10.bind(var1)(var9);
            var5[var8] = var7;
            var3[var6] = var5;
            var2 = _closure1_slot16;
            var2[var4] = var3;
case 12:
            return var1;
        }
    };
    var _closure1_slot23 = var11;
    var10 = function handleTypingStop(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var7 = var1.channelId;
            var5 = var1.userId;
            var3 = var1.guildId;
            var1 = _closure1_slot15;
            var1 = var1[var7];
            var10 = null;
            if(!(var10 != var1)) { _fun0006_ip = 16; continue _fun0006 }
case 17:
            var4 = var1[var5];
            if(!(var10 != var4)) { _fun0006_ip = 16; continue _fun0006 }
case 18:
            var8 = {};
            var12 = var8;
            var11 = var1;
            var1 = copyDataProperties(var12, var11);
            var4 = global;
            var9 = var4.clearTimeout;
            var6 = var8[var5];
            var1 = undefined;
            var6 = var9.bind(var1)(var6);
            var6 = delete var8[var5];
            var6 = _closure1_slot15;
            var6[var7] = var8;
            if(!(var10 != var3)) { _fun0006_ip = 19; continue _fun0006 }
case 20:
            var6 = _closure1_slot16;
            var6 = var6[var3];
            if(!(var10 != var6)) { _fun0006_ip = 19; continue _fun0006 }
case 21:
            var9 = var6[var7];
            if(!(var10 != var9)) { _fun0006_ip = 19; continue _fun0006 }
case 22:
            var8 = var9[var5];
            if(!(var10 != var8)) { _fun0006_ip = 19; continue _fun0006 }
case 23:
            var8 = {};
            var12 = var8;
            var11 = var9;
            var9 = copyDataProperties(var12, var11);
            var5 = delete var8[var5];
            var5 = {};
            var12 = var5;
            var11 = var6;
            var6 = copyDataProperties(var12, var11);
            var9 = var4.Object;
            var6 = var9.keys;
            var6 = var6.bind(var9)(var8);
            var9 = var6.length;
            var6 = 0;
            if(!(var6 !== var9)) { _fun0006_ip = 24; continue _fun0006 }
case 25:
            var5[var7] = var8;
            _fun0006_ip = 26; continue _fun0006;
case 24:
            var7 = delete var5[var7];
case 26:
            var7 = var4.Object;
            var4 = var7.keys;
            var4 = var4.bind(var7)(var5);
            var4 = var4.length;
            if(!(var6 !== var4)) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var4 = _closure1_slot16;
            var4[var3] = var5;
            _fun0006_ip = 19; continue _fun0006;
case 27:
            var2 = _closure1_slot16;
            var2 = delete var2[var3];
case 19:
            return var1;
case 16:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot24 = var10;
    var9 = function handleConnectionOpen() {
        var1 = {};
        _closure1_slot15 = var1;
        var1 = {};
        _closure1_slot16 = var1;
        var1 = undefined;
        return var1;
    };
    var2 = global;
    var13 = var2.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var8);
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
    var8 = var5.bind(var1)(var8);
    var8 = var8.SlowmodeType;
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.Endpoints;
    var _closure1_slot11 = var8;
    var8 = 9;
    var12 = var6[var8];
    var12 = var7.bind(var1)(var12);
    var12 = var12.Millis;
    var13 = var12.SECOND;
    var12 = 10;
    var12 = var12 * var13;
    var _closure1_slot13 = var12;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var12 = var8.SECOND;
    var8 = 1.5;
    var8 = var8 * var12;
    var _closure1_slot14 = var8;
    var8 = {};
    var _closure1_slot15 = var8;
    var8 = {};
    var _closure1_slot16 = var8;
    var13 = var2.Object;
    var12 = var13.freeze;
    var8 = {};
    var8 = var12.bind(var13)(var8);
    var _closure1_slot17 = var8;
    var12 = var2.Object;
    var8 = var12.freeze;
    var2 = {};
    var2 = var8.bind(var12)(var2);
    var _closure1_slot18 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function TypingStore() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot19;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 31; continue _fun0007;
case 29:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 31:
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
            var3 = var4.waitFor;
            var2 = _closure1_slot8;
            var1 = _closure1_slot9;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getTypingUsers';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getTypingUsersByGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot21;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isTyping';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = arg2;
            var2 = var2[var1];
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'TypingStore';
    var8['displayName'] = var2;
    var2 = 12;
    var2 = var6[var2];
    var16 = var7.bind(var1)(var2);
    var2 = {};
    var2['TYPING_START'] = var11;
    var2['TYPING_STOP'] = var10;
    var10 = function handleTypingStartLocal(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var _closure2_slot0 = var5;
            var3 = _closure1_slot8;
            var1 = var3.getId;
            var6 = var1.bind(var3)();
            var _closure2_slot1 = var6;
            var9 = null;
            if(!(var9 != var6)) { _fun0008_ip = 32; continue _fun0008 }
case 33:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var7.bind(var1)(var3);
            var3 = var3.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            if(!(var5 !== var3)) { _fun0008_ip = 34; continue _fun0008 }
case 35:
            var3 = _closure1_slot12;
            var3 = var9 != var3;
            if(!var3) { _fun0008_ip = 36; continue _fun0008 }
case 37:
            var7 = _closure1_slot12;
            var7 = var7.channelId;
            var3 = var7 !== var5;
case 36:
            if(!var3) { _fun0008_ip = 38; continue _fun0008 }
case 39:
            var3 = _closure1_slot12;
            var3 = var3.timeout;
            if(!(var9 != var3)) { _fun0008_ip = 40; continue _fun0008 }
case 15:
            var3 = global;
            var7 = var3.clearTimeout;
            var3 = _closure1_slot12;
            var3 = var3.timeout;
            var3 = var7.bind(var1)(var3);
case 40:
            var _closure1_slot12 = var9;
case 38:
            var7 = global;
            var8 = var7.Date;
            var3 = var8.now;
            var3 = var3.bind(var8)();
            var10 = _closure1_slot13;
            var8 = 0.8;
            var10 = var8 * var10;
            var8 = _closure1_slot12;
            if(!(var9 != var8)) { _fun0008_ip = 41; continue _fun0008 }
case 42:
            var8 = _closure1_slot12;
            var8 = var8.timeout;
            if(!(var9 == var8)) { _fun0008_ip = 43; continue _fun0008 }
case 44:
            var8 = _closure1_slot12;
            var8 = var8.prevSend;
            var8 = var8 + var10;
            if(!(!(var8 > var3))) { _fun0008_ip = 43; continue _fun0008 }
case 41:
            var8 = _closure1_slot12;
            if(!(var9 != var8)) { _fun0008_ip = 45; continue _fun0008 }
case 46:
            var8 = _closure1_slot12;
            var9 = var8.prevSend;
            var8 = 2;
            var8 = var8 * var10;
            var8 = var3 - var8;
            var9 = var9 > var8;
            var8 = 0;
            if(!var9) { _fun0008_ip = 47; continue _fun0008 }
case 45:
            var8 = _closure1_slot14;
case 47:
            var7 = var7.setTimeout;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure1_slot12;
                    var2 = null;
                    var1 = var2 != var1;
                    if(!var1) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                    var3 = _closure1_slot12;
                    var4 = var3.channelId;
                    var3 = _closure2_slot0;
                    var1 = var4 === var3;
case 48:
                    if(!var1) { _fun0009_ip = 50; continue _fun0009 }
case 51:
                    var4 = _closure2_slot1;
                    var6 = _closure1_slot8;
                    var3 = var6.getId;
                    var3 = var3.bind(var6)();
                    var1 = var4 === var3;
case 50:
                    if(!var1) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                    var3 = _closure1_slot12;
                    var3 = var3.timeout;
                    var1 = var2 != var3;
case 52:
                    if(!var1) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                    var1 = _closure1_slot12;
                    var1['timeout'] = var2;
                    var2 = _closure2_slot0;
                    var1 = _closure1_slot20;
                    var3 = undefined;
                    var7 = var1.bind(var3)(var2);
                    var1 = _closure1_slot17;
                    var2 = 0;
                    if(!(var7 !== var1)) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                    var1 = global;
                    var6 = var1.Object;
                    var1 = var6.keys;
                    var1 = var1.bind(var6)(var7);
                    var2 = var1.length;
case 56:
                    var1 = 5;
                    if(!(!(var2 > var1))) { _fun0009_ip = 54; continue _fun0009 }
case 58:
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 11;
                    var1 = var6[var1];
                    var1 = var2.bind(var3)(var1);
                    var3 = var1.HTTP;
                    var2 = var3.post;
                    var1 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var6 = _closure1_slot11;
                    var5 = var6.TYPING;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var6)(var4);
                    var1['url'] = var4;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.then;
                    var1 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var2 = arg1;
                            var3 = var2.status;
                            var1 = 200;
                            if(!(var1 === var3)) { _fun0010_ip = 59; continue _fun0010 }
case 60:
                            var1 = var2.body;
                            var4 = var1.message_send_cooldown_ms;
                            var3 = null;
                            var5 = var3 != var4;
                            var1 = 0;
                            var6 = 0;
                            if(!var5) { _fun0010_ip = 61; continue _fun0010 }
case 33:
                            var6 = var4;
case 61:
                            var2 = var2.body;
                            var2 = var2.thread_create_cooldown_ms;
                            var3 = var3 != var2;
                            var4 = 0;
                            if(!var3) { _fun0010_ip = 3; continue _fun0010 }
case 29:
                            var4 = var2;
case 3:
                            if(!(var6 > var1)) { _fun0010_ip = 62; continue _fun0010 }
case 4:
                            var5 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 12;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var5.bind(var2)(var3);
                            var3 = var5.dispatch;
                            var2 = {};
                            var8 = 'SLOWMODE_SET_COOLDOWN';
                            var2['type'] = var8;
                            var8 = _closure2_slot0;
                            var2['channelId'] = var8;
                            var7 = _closure1_slot10;
                            var7 = var7.SendMessage;
                            var2['slowmodeType'] = var7;
                            var2['cooldownMs'] = var6;
                            var2 = var3.bind(var5)(var2);
case 62:
                            if(!(var4 > var1)) { _fun0010_ip = 59; continue _fun0010 }
case 63:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 12;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.dispatch;
                            var1 = {};
                            var6 = 'SLOWMODE_SET_COOLDOWN';
                            var1['type'] = var6;
                            var6 = _closure2_slot0;
                            var1['channelId'] = var6;
                            var5 = _closure1_slot10;
                            var5 = var5.CreateThread;
                            var1['slowmodeType'] = var5;
                            var1['cooldownMs'] = var4;
                            var1 = var2.bind(var3)(var1);
case 59:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
case 54:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var7.bind(var1)(var2, var8);
            var2 = {};
            var2['channelId'] = var5;
            var2['timeout'] = var7;
            var2['prevSend'] = var3;
            _closure1_slot12 = var2;
            var3 = _closure1_slot23;
            var2 = {};
            var2['channelId'] = var5;
            var2['userId'] = var6;
            var4 = _closure1_slot22;
            var4 = var4.bind(var1)(var5);
            var2['guildId'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
case 43:
            var1 = false;
            return var1;
case 34:
            var1 = false;
            return var1;
case 32:
            var1 = false;
            return var1;
        }
    };
    var2['TYPING_START_LOCAL'] = var10;
    var10 = function handleTypingStopLocal(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var7 = var1.channelId;
            var2 = _closure1_slot8;
            var1 = var2.getId;
            var8 = var1.bind(var2)();
            var3 = null;
            var1 = var3 != var8;
            if(!var1) { _fun0011_ip = 64; continue _fun0011 }
case 65:
            var2 = _closure1_slot12;
            var2 = var3 != var2;
            if(!var2) { _fun0011_ip = 66; continue _fun0011 }
case 67:
            var4 = _closure1_slot12;
            var4 = var4.channelId;
            var2 = var4 === var7;
case 66:
            if(!var2) { _fun0011_ip = 68; continue _fun0011 }
case 69:
            var4 = _closure1_slot12;
            var4 = var4.timeout;
            var2 = var3 != var4;
case 68:
            if(!var2) { _fun0011_ip = 70; continue _fun0011 }
case 71:
            var4 = global;
            var9 = var4.clearTimeout;
            var4 = _closure1_slot12;
            var4 = var4.timeout;
            var5 = undefined;
            var4 = var9.bind(var5)(var4);
            _closure1_slot12 = var3;
            var4 = _closure1_slot24;
            var3 = {};
            var3['channelId'] = var7;
            var3['userId'] = var8;
            var6 = _closure1_slot22;
            var6 = var6.bind(var5)(var7);
            var3['guildId'] = var6;
            var2 = var4.bind(var5)(var3);
case 70:
            var1 = var2;
case 64:
            return var1;
        }
    };
    var2['TYPING_STOP_LOCAL'] = var10;
    var2['CONNECTION_OPEN'] = var9;
    var2['OVERLAY_INITIALIZE'] = var9;
    var4 = function handleIncomingMessage(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var7 = var1.channelId;
            var2 = var1.guildId;
            var3 = var1.message;
            var8 = var3.author;
            var1 = var1.optimistic;
            if(!var1) { _fun0012_ip = 72; continue _fun0012 }
case 73:
            var4 = _closure1_slot12;
            var1 = null;
            if(!(var1 != var4)) { _fun0012_ip = 72; continue _fun0012 }
case 74:
            var4 = _closure1_slot12;
            var4 = var4.channelId;
            if(!(var4 === var7)) { _fun0012_ip = 72; continue _fun0012 }
case 75:
            var4 = _closure1_slot12;
            var4 = var4.timeout;
            if(!(var1 != var4)) { _fun0012_ip = 76; continue _fun0012 }
case 77:
            var4 = global;
            var6 = var4.clearTimeout;
            var4 = _closure1_slot12;
            var5 = var4.timeout;
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
case 76:
            _closure1_slot12 = var1;
case 72:
            var6 = null;
            var1 = var6 != var8;
            if(!var1) { _fun0012_ip = 78; continue _fun0012 }
case 79:
            var4 = _closure1_slot24;
            var3 = {};
            var3['channelId'] = var7;
            var8 = var8.id;
            var3['userId'] = var8;
            if(!(var6 == var2)) { _fun0012_ip = 56; continue _fun0012 }
case 80:
            var6 = _closure1_slot22;
            var5 = undefined;
            var2 = var6.bind(var5)(var7);
case 56:
            var3['guildId'] = var2;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
case 78:
            return var1;
        }
    };
    var2['MESSAGE_CREATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var17 = var4;
    var15 = var2;
    var2 = new var17[var8](var16, var15, var14);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/TypingStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();