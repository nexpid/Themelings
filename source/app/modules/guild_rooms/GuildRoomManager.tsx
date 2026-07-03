// app/modules/guild_rooms/GuildRoomManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot17;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot17;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 36: // try_start_0
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
case 37: // try_end0
            _fun0004_ip = 38; continue _fun0004;
case 39: // catch_target0
            CatchBlockStart(arg_register=1);
case 38:
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
    var1 = function _getAvailableSeat(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = _closure1_slot12;
            var3 = _closure1_slot13;
            var3 = var3.DEFAULT;
            var3 = var4[var3];
            var3 = var3.seats;
            var5 = _closure1_slot11;
            var4 = var5.getRoomUsers;
            var2 = arg1;
            var2 = var4.bind(var5)(var2);
            var _closure2_slot0 = var2;
            var2 = var3.findIndex;
            var1 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var3 = _closure2_slot0;
                var2 = var3.values;
                var6 = var2.bind(var3)();
                var3 = new Array(0);
                var5 = 0;
                var7 = var3;
                var2 = arraySpread(var7, var6, var5);
                var2 = var3.some;
                var1 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = arg1;
                        var1 = var3.position;
                        var4 = var1.x;
                        var1 = _closure3_slot0;
                        var1 = var1.position;
                        var1 = var1.x;
                        var1 = var4 === var1;
                        if(!var1) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                        var3 = var3.position;
                        var3 = var3.y;
                        var2 = _closure3_slot0;
                        var2 = var2.position;
                        var2 = var2.y;
                        var1 = var3 === var2;
case 40:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var4 = -1;
            var1 = null;
            if(!(var4 !== var2)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var2 = var3[var2];
            var1 = var2.position;
case 42:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.GUILD_ROOM_BACKGROUND_CONFIG;
    var _closure1_slot12 = var8;
    var4 = var4.GuildRoomBackgrounds;
    var _closure1_slot13 = var4;
    var4 = null;
    var _closure1_slot14 = var4;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function GuildRoomManager(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot4;
                var2 = _closure2_slot1;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot7;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot18;
                var1 = var1.bind(var4)();
                if(var1) { _fun0007_ip = 9; continue _fun0007 }
case 44:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0007_ip = 45; continue _fun0007;
case 9:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 45:
                var1 = var2.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = {};
                var4 = function VOICE_STATE_UPDATES(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleVoiceStateUpdates;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['VOICE_STATE_UPDATES'] = var4;
                var4 = function GUILD_ROOM_CONNECT(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleGuildRoomConnect;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['GUILD_ROOM_CONNECT'] = var4;
                var3 = function EMBEDDED_ACTIVITY_LAUNCH_SUCCESS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleEmbeddedActivityLaunchSuccess;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['EMBEDDED_ACTIVITY_LAUNCH_SUCCESS'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot1 = var4;
        var2 = _closure1_slot8;
        var3 = undefined;
        var1 = arg1;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'isExperimentEnabled';
        var5['key'] = var1;
        var1 = function value(arg1, arg2) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getCurrentConfig;
            var1 = {};
            var4 = arg1;
            var1['guildId'] = var4;
            var4 = arg2;
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = var1.enabled;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var8 = 'handleVoiceStateUpdates';
        var5['key'] = var8;
        var8 = _closure1_slot3;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var14 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                    var2 = arg1;
                    var5 = var2.voiceStates;
                    var3 = undefined;
                    SaveGenerator(address=28);
case 48:
                    return var3;
case 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 49; continue _fun0008 }
case 41:
                    var4 = _closure1_slot16;
                    var12 = var4.bind(var3)(var5);
                    var5 = var12.bind(var3)();
                    var4 = var5.done;
                    var11 = 11;
                    var10 = 'VOICE_STATE_UPDATE';
                    var9 = null;
                    var8 = var5;
                    var7 = undefined;
                    var6 = undefined;
                    if(var4) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                    var4 = var8.value;
                    var5 = var4.userId;
                    var18 = var4.guildId;
                    var19 = var4.channelId;
                    var15 = _closure1_slot9;
                    var4 = var15.getId;
                    var4 = var4.bind(var15)();
                    var16 = var7;
                    var15 = var6;
                    if(!(var5 === var4)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var4 = _closure1_slot14;
                    var16 = var7;
                    var15 = var6;
                    if(!(var19 !== var4)) { _fun0008_ip = 52; continue _fun0008 }
case 54:
                    var4 = _closure1_slot14;
                    var4 = var9 != var4;
                    if(!var4) { _fun0008_ip = 14; continue _fun0008 }
case 55:
                    var5 = _closure1_slot15;
                    var4 = var9 != var5;
case 14:
                    if(!var4) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    var17 = var14.isExperimentEnabled;
                    var5 = _closure1_slot15;
                    var4 = var17.bind(var14)(var5, var10);
case 56:
                    if(!var4) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var11];
                    var20 = var5.bind(var3)(var4);
                    var17 = var20.guildRoomDisconnect;
                    var5 = _closure1_slot15;
                    var4 = _closure1_slot14;
                    var4 = var17.bind(var20)(var5, var4);
                    SaveGenerator(address=226);
case 60:
                    return var4;
case 61:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 62; continue _fun0008 }
case 58:
                    var17 = var7;
                    var5 = var6;
                    if(!(var9 != var19)) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                    var17 = var7;
                    var5 = var6;
                    if(!(var9 != var18)) { _fun0008_ip = 63; continue _fun0008 }
case 65:
                    var21 = _closure1_slot11;
                    var20 = var21.getPendingPosition;
                    var21 = var20.bind(var21)();
                    var20 = var21;
                    if(!(var9 == var21)) { _fun0008_ip = 66; continue _fun0008 }
case 67:
                    var22 = _closure1_slot19;
                    var20 = var22.bind(var3)(var19);
case 66:
                    var22 = var9 != var20;
                    if(!var22) { _fun0008_ip = 68; continue _fun0008 }
case 69:
                    var23 = var14.isExperimentEnabled;
                    var22 = var23.bind(var14)(var18, var10);
case 68:
                    var17 = var21;
                    var5 = var20;
                    if(!var22) { _fun0008_ip = 63; continue _fun0008 }
case 70:
                    var23 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var22 = var22[var11];
                    var23 = var23.bind(var3)(var22);
                    var22 = var23.guildRoomConnect;
                    var22 = var22.bind(var23)(var18, var19, var20);
                    var17 = var21;
                    var5 = var20;
case 63:
                    _closure1_slot14 = var19;
                    _closure1_slot15 = var18;
                    var16 = var17;
                    var15 = var5;
case 52:
                    var17 = var12.bind(var3)();
                    var5 = var17.done;
                    var7 = var16;
                    var6 = var15;
                    var8 = var17;
                    if(var5) { _fun0008_ip = 50; continue _fun0008 }
case 71:
                    _fun0008_ip = 51; continue _fun0008;
case 62:
                    return var4;
case 50:
                    return var3;
case 49:
                    return var2;
case 46:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var7 = function handleVoiceStateUpdates() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handleGuildRoomConnect';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg1;
                var1 = var2.room;
                var5 = var2.guildId;
                var6 = var2.pendingPosition;
                var3 = null;
                if(!(var3 != var6)) { _fun0009_ip = 72; continue _fun0009 }
case 73:
                if(!(var3 != var5)) { _fun0009_ip = 72; continue _fun0009 }
case 74:
                var7 = _closure1_slot9;
                var4 = var7.getId;
                var8 = var4.bind(var7)();
                var7 = var1.users;
                var4 = var7.get;
                var7 = var4.bind(var7)(var8);
                var9 = var3 == var7;
                var4 = undefined;
                var8 = undefined;
                if(var9) { _fun0009_ip = 75; continue _fun0009 }
case 51:
                var8 = var7.position;
case 75:
                var3 = var3 == var8;
                if(var3) { _fun0009_ip = 76; continue _fun0009 }
case 77:
                var7 = var8.x;
                var9 = 0;
                var7 = var9 === var7;
                if(!var7) { _fun0009_ip = 78; continue _fun0009 }
case 79:
                var8 = var8.y;
                var7 = var9 === var8;
case 78:
                var3 = var7;
case 76:
                if(!var3) { _fun0009_ip = 72; continue _fun0009 }
case 80:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 11;
                var2 = var7[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.guildRoomUpdate;
                var2 = var1.roomId;
                var1 = {};
                var1['user_position'] = var6;
                var1 = var3.bind(var4)(var5, var2, var1);
case 72:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'handleEmbeddedActivityLaunchSuccess';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = arg1;
                var7 = this;
                var2 = var1.channelId;
                var3 = null;
                if(!(var3 != var2)) { _fun0010_ip = 81; continue _fun0010 }
case 82:
                var6 = _closure1_slot10;
                var5 = var6.getChannel;
                var4 = var1.channelId;
                var4 = var5.bind(var6)(var4);
                var3 = var3 != var4;
                if(!var3) { _fun0010_ip = 30; continue _fun0010 }
case 2:
                var6 = var7.isExperimentEnabled;
                var5 = var4.guild_id;
                var4 = 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS';
                var3 = var6.bind(var7)(var5, var4);
case 30:
                if(!var3) { _fun0010_ip = 42; continue _fun0010 }
case 35:
                var6 = _closure1_slot11;
                var5 = var6.isVisible;
                var4 = var1.channelId;
                var3 = var5.bind(var6)(var4);
case 42:
                if(!var3) { _fun0010_ip = 81; continue _fun0010 }
case 83:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.guildRoomToggleLayout;
                var2 = var1.channelId;
                var1 = true;
                var1 = var3.bind(var4)(var2, var1);
case 81:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_rooms/GuildRoomManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();