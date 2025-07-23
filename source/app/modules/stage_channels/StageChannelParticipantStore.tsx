// app/modules/stage_channels/StageChannelParticipantStore.tsx
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot25 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 342; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
 109:
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
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot27;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot27;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
 20:
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
                    _fun0003_ip = 67; continue _fun0003;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function getGuildId(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var1 = var2.getGuildId;
            var1 = var1.bind(var2)();
            var2 = null;
            if(!(var2 == var1)) { _fun0005_ip = 26; continue _fun0005 }
 19:
            var1 = _closure1_slot20;
 26:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function getActiveStageChannelIds(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var4 = _closure1_slot21;
            var3 = var4.values;
            var2 = null;
            var5 = var2 != var1;
            var2 = undefined;
            if(!var5) { _fun0006_ip = 29; continue _fun0006 }
 26:
            var2 = var1;
 29:
            var1 = true;
            var3 = var3.bind(var4)(var2, var1);
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function buildActiveStageChannelIds(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot22;
            var2 = var3.has;
            var2 = var2.bind(var3)(var5);
            if(var2) { _fun0007_ip = 105; continue _fun0007 }
 23:
            var3 = _closure1_slot22;
            var2 = var3.add;
            var2 = var2.bind(var3)(var5);
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 18;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var4 = _closure1_slot10;
            var1 = var4.getMutableGuildChannelsForGuild;
            var1 = var1.bind(var4)(var5);
            var2 = var2.bind(var3)(var1);
            var1 = var2.values;
            var3 = var1.bind(var2)();
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var5 = arg1;
                    var3 = _closure1_slot33;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var5);
                    if(!var3) { _fun0008_ip = 40; continue _fun0008 }
 20:
                    var4 = _closure1_slot21;
                    var3 = var4.set;
                    var2 = var5.id;
                    var2 = var3.bind(var4)(var2, var5);
 40:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
 105:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function maybeGetParticipants(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var6 = arg1;
            var1 = _closure1_slot23;
            var1 = var1[var6];
            var3 = null;
            if(!(var3 == var1)) { _fun0009_ip = 102; continue _fun0009 }
 20:
            var5 = _closure1_slot10;
            var2 = var5.getChannel;
            var8 = var2.bind(var5)(var6);
            var5 = var3 != var8;
            var2 = null;
            if(!var5) { _fun0009_ip = 100; continue _fun0009 }
 43:
            var5 = var8.isGuildStageVoice;
            var5 = var5.bind(var8)();
            var2 = null;
            if(!var5) { _fun0009_ip = 100; continue _fun0009 }
 58:
            var9 = _closure1_slot30;
            var7 = var8.guild_id;
            var5 = undefined;
            var7 = var9.bind(var5)(var7);
            var7 = _closure1_slot33;
            var7 = var7.bind(var5)(var8);
            var3 = null;
            if(!var7) { _fun0009_ip = 97; continue _fun0009 }
 88:
            var4 = _closure1_slot32;
            var3 = var4.bind(var5)(var6);
 97:
            var2 = var3;
 100:
            return var2;
 102:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function getOrCreateParticipants(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var4 = arg1;
            var1 = _closure1_slot23;
            var1 = var1[var4];
            var2 = null;
            if(!(var2 == var1)) { _fun0010_ip = 86; continue _fun0010 }
 20:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 19;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var5 = var2.prototype;
            var5 = Object.create(var5, {constructor: {value: var2}});
            var8 = var5;
            var7 = var4;
            var2 = new var8[var2](var7, var6);
            var2 = var2 instanceof Object ? var2 : var5;
            var3 = _closure1_slot23;
            var3[var4] = var2;
            var3 = var2.rebuild;
            var3 = var3.bind(var2)();
            var1 = var2;
 86:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function isActiveStageChannel(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0011_ip = 22; continue _fun0011 }
 12:
            var3 = var2.isGuildStageVoice;
            var1 = var3.bind(var2)();
 22:
            if(!var1) { _fun0011_ip = 54; continue _fun0011 }
 25:
            var4 = _closure1_slot17;
            var3 = var4.countVoiceStatesForChannel;
            var2 = var2.id;
            var3 = var3.bind(var4)(var2);
            var2 = 0;
            var1 = var3 > var2;
 54:
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function updateParticipants(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var4 = arguments[1];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = undefined;
            if(!(var4 === var3)) { _fun0012_ip = 29; continue _fun0012 }
 18:
            var2 = _closure1_slot29;
            var4 = var2.bind(var3)();
 29:
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var1 = arg1;
                    var8 = arg2;
                    var2 = _closure1_slot32;
                    var4 = undefined;
                    var7 = var2.bind(var4)(var8);
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var4)(var7);
                    if(!var2) { _fun0013_ip = 167; continue _fun0013 }
 38:
                    var5 = _closure1_slot10;
                    var2 = var5.getChannel;
                    var2 = var2.bind(var5)(var8);
                    var6 = null;
                    if(!(var6 != var2)) { _fun0013_ip = 71; continue _fun0013 }
 58:
                    var5 = var2.isGuildStageVoice;
                    var5 = var5.bind(var2)();
                    if(var5) { _fun0013_ip = 84; continue _fun0013 }
 71:
                    var5 = _closure1_slot36;
                    var5 = var5.bind(var4)(var8);
                    var1 = true;
                    _fun0013_ip = 167; continue _fun0013;
 84:
                    var5 = var7.size;
                    var7 = var5.bind(var7)();
                    var5 = 0;
                    if(!(var5 !== var7)) { _fun0013_ip = 151; continue _fun0013 }
 99:
                    var8 = _closure1_slot21;
                    var7 = var8.get;
                    var5 = var2.id;
                    var5 = var7.bind(var8)(var5);
                    var6 = var6 == var5;
                    var1 = true;
                    if(!var6) { _fun0013_ip = 167; continue _fun0013 }
 127:
                    var8 = _closure1_slot21;
                    var7 = var8.set;
                    var6 = var2.id;
                    var6 = var7.bind(var8)(var6, var2);
                    var1 = true;
                    _fun0013_ip = 167; continue _fun0013;
 151:
                    var3 = _closure1_slot36;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var1 = true;
 167:
                    return var1;
                }
            };
            var1 = false;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function updateParticipant(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var4 = arguments[1];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = undefined;
            if(!(var4 === var3)) { _fun0014_ip = 29; continue _fun0014 }
 18:
            var2 = _closure1_slot29;
            var4 = var2.bind(var3)();
 29:
            var2 = _closure1_slot34;
            var1 = function(arg1) {
                var3 = arg1;
                var2 = var3.updateParticipant;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function clearChannel(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0015_ip = 39; continue _fun0015 }
 12:
            var3 = _closure1_slot23;
            var3 = delete var3[var4];
            var3 = _closure1_slot21;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
            var1 = true;
 39:
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var13 = function handleRebuildActiveStageChannels() {
        var3 = _closure1_slot22;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot21;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var1 = {};
        _closure1_slot23 = var1;
        var1 = undefined;
        return var1;
    };
    var1 = function maybeAddChannelIdToUpdate(arg1, arg2, arg3) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var3 = arg1;
            var6 = arg2;
            var2 = arg3;
            var4 = null;
            if(!(var4 != var2)) { _fun0016_ip = 97; continue _fun0016 }
 15:
            var1 = var3.has;
            var1 = var1.bind(var3)(var2);
            if(var1) { _fun0016_ip = 97; continue _fun0016 }
 28:
            var7 = _closure1_slot10;
            var5 = var7.getChannel;
            var8 = var5.bind(var7)(var2);
            var5 = var4 != var8;
            if(!var5) { _fun0016_ip = 62; continue _fun0016 }
 52:
            var7 = var8.isGuildStageVoice;
            var5 = var7.bind(var8)();
 62:
            if(!var5) { _fun0016_ip = 97; continue _fun0016 }
 65:
            var5 = var6.add;
            var5 = var5.bind(var6)(var2);
            var1 = _closure1_slot23;
            var1 = var1[var2];
            if(!(var4 == var1)) { _fun0016_ip = 97; continue _fun0016 }
 87:
            var1 = var3.add;
            var1 = var1.bind(var3)(var2);
 97:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var12 = function handleUserUpdate(arg1) {
        var1 = arg1;
        var1 = var1.user;
        var3 = _closure1_slot35;
        var2 = var1.id;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var10 = function handleRelationshipUpdate(arg1) {
        var1 = arg1;
        var1 = var1.relationship;
        var3 = _closure1_slot35;
        var2 = var1.id;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var9 = function handleGuildCreateOrDelete(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var1 = var1.guild;
            var4 = var1.id;
            var5 = _closure1_slot26;
            var3 = _closure1_slot21;
            var1 = var3.values;
            var3 = var1.bind(var3)(var4);
            var1 = undefined;
            var6 = var5.bind(var1)(var3);
            var5 = var6.bind(var1)();
            var3 = var5.done;
            if(var3) { _fun0017_ip = 105; continue _fun0017 }
 53:
            var3 = var5.value;
            var9 = _closure1_slot21;
            var8 = var9.delete;
            var7 = var3.id;
            var7 = var8.bind(var9)(var7);
            var7 = _closure1_slot23;
            var3 = var3.id;
            var3 = delete var7[var3];
            var7 = var6.bind(var1)();
            var3 = var7.done;
            var5 = var7;
            if(!var3) { _fun0017_ip = 53; continue _fun0017 }
 105:
            var3 = _closure1_slot22;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
            return var1;
        }
    };
    var11 = function handleStreamClose(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var4 = var1.streamKey;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 20;
            var1 = var5[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.decodeStreamKey;
            var1 = var1.bind(var3)(var4);
            var6 = var1.channelId;
            var8 = var1.guildId;
            var4 = var1.ownerId;
            var1 = null;
            var3 = var1 == var8;
            if(var3) { _fun0018_ip = 87; continue _fun0018 }
 70:
            var7 = _closure1_slot22;
            var1 = var7.has;
            var1 = var1.bind(var7)(var8);
            var3 = !var1;
 87:
            var1 = !var3;
            if(var3) { _fun0018_ip = 111; continue _fun0018 }
 93:
            var3 = _closure1_slot35;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = var3.bind(var5)(var4, var2);
 111:
            return var1;
        }
    };
    var2 = global;
    var15 = var2.Object;
    var14 = var15.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var14.bind(var15)(var3, var1, var8);
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
    var8 = var7.bind(var1)(var8);
    var _closure1_slot13 = var8;
    var8 = 11;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot14 = var8;
    var8 = 12;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot15 = var8;
    var8 = 13;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot16 = var8;
    var8 = 14;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot17 = var8;
    var8 = 15;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot18 = var8;
    var8 = 16;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot19 = var8;
    var8 = 'NO_GUILD';
    var _closure1_slot20 = var8;
    var8 = 17;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var16 = var8.SecondaryIndexMap;
    var8 = var16.prototype;
    var14 = Object.create(var8, {constructor: {value: var16}});
    var19 = function(arg1) {
        var3 = _closure1_slot28;
        var2 = undefined;
        var1 = arg1;
        var2 = var3.bind(var2)(var1);
        var1 = new Array(1);
        var1[0] = var2;
        return var1;
    };
    var18 = function(arg1) {
        var1 = arg1;
        var1 = var1.id;
        return var1;
    };
    var20 = var14;
    var8 = new var20[var16](var19, var18, var17);
    var8 = var8 instanceof Object ? var8 : var14;
    var _closure1_slot21 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var20 = var8;
    var2 = new var20[var2](var19);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot22 = var2;
    var2 = {};
    var _closure1_slot23 = var2;
    var2 = new Array(0);
    var _closure1_slot24 = var2;
    var2 = 22;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function StageChannelParticipantStore() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
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
                var1 = _closure1_slot25;
                var1 = var1.bind(var3)();
                if(var1) { _fun0019_ip = 69; continue _fun0019 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0019_ip = 105; continue _fun0019;
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
            var14 = this;
            var13 = var14.waitFor;
            var26 = _closure1_slot9;
            var25 = _closure1_slot15;
            var24 = _closure1_slot10;
            var23 = _closure1_slot14;
            var22 = _closure1_slot16;
            var21 = _closure1_slot12;
            var20 = _closure1_slot17;
            var19 = _closure1_slot11;
            var18 = _closure1_slot18;
            var17 = _closure1_slot13;
            var16 = _closure1_slot19;
            var15 = _closure1_slot8;
            var27 = var14;
            var1 = var27[var13](var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15, var14);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'getParticipantsVersion';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var6 = arg1;
                var4 = null;
                var3 = var4 == var6;
                var2 = -1;
                var1 = var2;
                if(var3) { _fun0020_ip = 61; continue _fun0020 }
 21:
                var5 = _closure1_slot31;
                var3 = undefined;
                var5 = var5.bind(var3)(var6);
                var6 = var4 == var5;
                if(var6) { _fun0020_ip = 48; continue _fun0020 }
 42:
                var3 = var5.version;
 48:
                var4 = var4 != var3;
                if(!var4) { _fun0020_ip = 58; continue _fun0020 }
 55:
                var2 = var3;
 58:
                var1 = var2;
 61:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getMutableParticipants';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var5 = arg1;
                var3 = null;
                if(!(var3 != var5)) { _fun0021_ip = 54; continue _fun0021 }
 9:
                var4 = _closure1_slot31;
                var1 = undefined;
                var6 = var4.bind(var1)(var5);
                var4 = var3 == var6;
                if(var4) { _fun0021_ip = 44; continue _fun0021 }
 30:
                var5 = var6.toArray;
                var4 = arg2;
                var1 = var5.bind(var6)(var4);
 44:
                if(!(var3 == var1)) { _fun0021_ip = 52; continue _fun0021 }
 48:
                var1 = _closure1_slot24;
 52:
                _fun0021_ip = 61; continue _fun0021;
 54:
                var1 = _closure1_slot24;
 61:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getMutableRequestToSpeakParticipants';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var4 = _closure1_slot31;
                var1 = undefined;
                var3 = arg1;
                var5 = var4.bind(var1)(var3);
                var3 = null;
                var4 = var3 == var5;
                if(var4) { _fun0022_ip = 38; continue _fun0022 }
 26:
                var4 = var5.getRequestToSpeakParticipants;
                var1 = var4.bind(var5)();
 38:
                if(!(var3 == var1)) { _fun0022_ip = 46; continue _fun0022 }
 42:
                var1 = _closure1_slot24;
 46:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getRequestToSpeakParticipantsVersion';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var3 = _closure1_slot31;
                var2 = undefined;
                var1 = arg1;
                var3 = var3.bind(var2)(var1);
                var1 = null;
                var4 = var1 == var3;
                if(var4) { _fun0023_ip = 34; continue _fun0023 }
 26:
                var2 = var3.requestToSpeakVersion;
 34:
                var3 = var1 != var2;
                var1 = -1;
                if(!var3) { _fun0023_ip = 50; continue _fun0023 }
 47:
                var1 = var2;
 50:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getParticipantCount';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var3 = _closure1_slot31;
                var2 = undefined;
                var1 = arg1;
                var5 = var3.bind(var2)(var1);
                var1 = null;
                var3 = var1 == var5;
                if(var3) { _fun0024_ip = 39; continue _fun0024 }
 26:
                var4 = var5.size;
                var3 = arg2;
                var2 = var4.bind(var5)(var3);
 39:
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0024_ip = 51; continue _fun0024 }
 48:
                var1 = var2;
 51:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getChannels';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                var3 = arg1;
                var6 = _closure1_slot30;
                var5 = null;
                var2 = var3;
                if(!(var5 == var3)) { _fun0025_ip = 23; continue _fun0025 }
 19:
                var2 = _closure1_slot20;
 23:
                var1 = undefined;
                var1 = var6.bind(var1)(var2);
                var2 = _closure1_slot21;
                var1 = var2.values;
                if(!(var5 == var3)) { _fun0025_ip = 47; continue _fun0025 }
 43:
                var3 = _closure1_slot20;
 47:
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getChannelsVersion';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot21;
            var1 = var1.version;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getParticipant';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                var3 = _closure1_slot31;
                var2 = undefined;
                var1 = arg1;
                var5 = var3.bind(var2)(var1);
                var1 = null;
                var3 = var1 == var5;
                if(var3) { _fun0026_ip = 40; continue _fun0026 }
 26:
                var4 = var5.getParticipant;
                var3 = arg2;
                var2 = var4.bind(var5)(var3);
 40:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0026_ip = 52; continue _fun0026 }
 49:
                var1 = var2;
 52:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'StageChannelParticipantStore';
    var8['displayName'] = var2;
    var2 = 23;
    var2 = var6[var2];
    var19 = var7.bind(var1)(var2);
    var2 = {};
    var2['CONNECTION_OPEN'] = var13;
    var2['OVERLAY_INITIALIZE'] = var13;
    var13 = function handleVoiceStateUpdates(arg1) {
        var2 = arg1;
        var4 = var2.voiceStates;
        var2 = global;
        var2 = var2.Set;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var7 = var3;
        var2 = new var7[var2](var6);
        var2 = var2 instanceof Object ? var2 : var3;
        var _closure2_slot0 = var2;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                var1 = arg1;
                var4 = arg2;
                var3 = var4.guildId;
                var2 = null;
                if(!(var2 != var3)) { _fun0027_ip = 170; continue _fun0027 }
 20:
                var6 = _closure1_slot22;
                var3 = var6.has;
                var2 = var4.guildId;
                var2 = var3.bind(var6)(var2);
                if(!var2) { _fun0027_ip = 170; continue _fun0027 }
 48:
                var3 = global;
                var2 = var3.Set;
                var6 = var2.prototype;
                var6 = Object.create(var6, {constructor: {value: var2}});
                var13 = var6;
                var2 = new var13[var2](var12);
                var8 = var2 instanceof Object ? var2 : var6;
                var9 = _closure1_slot37;
                var7 = _closure2_slot0;
                var2 = var4.oldChannelId;
                var6 = undefined;
                var2 = var9.bind(var6)(var7, var8, var2);
                var2 = var4.channelId;
                var2 = var9.bind(var6)(var7, var8, var2);
                var9 = var8.size;
                var7 = 0;
                var2 = var1;
                if(!(var7 !== var9)) { _fun0027_ip = 168; continue _fun0027 }
 128:
                var5 = _closure1_slot35;
                var4 = var4.userId;
                var7 = var3.Array;
                var3 = var7.from;
                var3 = var3.bind(var7)(var8);
                var3 = var5.bind(var6)(var4, var3);
                if(var3) { _fun0027_ip = 165; continue _fun0027 }
 162:
                var3 = var1;
 165:
                var2 = var3;
 168:
                return var2;
 170:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['VOICE_STATE_UPDATES'] = var13;
    var13 = function handleChannelDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var3 = var1.id;
        var2 = _closure1_slot36;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var2['CHANNEL_DELETE'] = var13;
    var13 = function handleGuildMembersChunkBatch(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
            var1 = arg1;
            var2 = var1.chunks;
            var1 = _closure1_slot26;
            var6 = undefined;
            var5 = var1.bind(var6)(var2);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0028_ip = 155; continue _fun0028 }
 42:
            var8 = _closure1_slot26;
            var2 = var4.value;
            var2 = var2.members;
            var11 = var8.bind(var6)(var2);
            var8 = var11.bind(var6)();
            var2 = var8.done;
            var10 = var3;
            var9 = var8;
            var8 = var10;
            if(var2) { _fun0028_ip = 134; continue _fun0028 }
 83:
            var12 = _closure1_slot35;
            var2 = var9.value;
            var2 = var2.user;
            var2 = var2.id;
            var12 = var12.bind(var6)(var2);
            if(var12) { _fun0028_ip = 113; continue _fun0028 }
 110:
            var12 = var10;
 113:
            var13 = var11.bind(var6)();
            var2 = var13.done;
            var10 = var12;
            var9 = var13;
            var8 = var10;
            if(!var2) { _fun0028_ip = 83; continue _fun0028 }
 134:
            var9 = var5.bind(var6)();
            var2 = var9.done;
            var3 = var8;
            var4 = var9;
            var1 = var3;
            if(!var2) { _fun0028_ip = 42; continue _fun0028 }
 155:
            return var1;
        }
    };
    var2['GUILD_MEMBERS_CHUNK_BATCH'] = var13;
    var2['USER_UPDATE'] = var12;
    var2['GUILD_MEMBER_REMOVE'] = var12;
    var2['GUILD_MEMBER_UPDATE'] = var12;
    var12 = function handleChannelUpdate(arg1) {
        var1 = arg1;
        var5 = var1.channels;
        var4 = var5.reduce;
        var3 = function(arg1, arg2) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                var1 = arg1;
                var5 = arg2;
                var2 = var5.isGuildStageVoice;
                var2 = var2.bind(var5)();
                if(!var2) { _fun0029_ip = 44; continue _fun0029 }
 19:
                var6 = _closure1_slot22;
                var4 = var6.has;
                var3 = var5.guild_id;
                var3 = var4.bind(var6)(var3);
                if(var3) { _fun0029_ip = 46; continue _fun0029 }
 44:
                return var1;
 46:
                var6 = _closure1_slot21;
                var4 = var6.get;
                var3 = var5.id;
                var4 = var4.bind(var6)(var3);
                var3 = null;
                var3 = var3 == var4;
                if(var3) { _fun0029_ip = 114; continue _fun0029 }
 74:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 21;
                var6 = var8[var6];
                var8 = undefined;
                var7 = var7.bind(var8)(var6);
                var6 = var5.permissionOverwrites;
                var4 = var4.permissionOverwrites;
                var3 = var7.bind(var8)(var6, var4);
 114:
                if(var3) { _fun0029_ip = 152; continue _fun0029 }
 117:
                var4 = var1.push;
                var3 = var5.id;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot21;
                var3 = var4.set;
                var2 = var5.id;
                var2 = var3.bind(var4)(var2, var5);
 152:
                return var1;
            }
        };
        var1 = new Array(0);
        var1 = var4.bind(var5)(var3, var1);
        var4 = _closure1_slot34;
        var3 = undefined;
        var2 = function(arg1) {
            var2 = arg1;
            var1 = var2.rebuild;
            var1 = var1.bind(var2)();
            return var1;
        };
        var2 = var4.bind(var3)(var2, var1);
        var2 = var1.length;
        var1 = 0;
        var1 = var2 > var1;
        return var1;
    };
    var2['CHANNEL_UPDATES'] = var12;
    var12 = function handleGuildRoleUpdate(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildId;
            var4 = _closure1_slot22;
            var3 = var4.has;
            var3 = var3.bind(var4)(var2);
            if(var3) { _fun0030_ip = 32; continue _fun0030 }
 28:
            var3 = undefined;
            return var3;
 32:
            var4 = _closure1_slot34;
            var1 = _closure1_slot29;
            var3 = undefined;
            var2 = var1.bind(var3)(var2);
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.rebuild;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var4.bind(var3)(var1, var2);
            return var1;
        }
    };
    var2['GUILD_ROLE_UPDATE'] = var12;
    var12 = function handleRTCConnectionVideo(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
            var1 = arg1;
            var2 = var1.channelId;
            var6 = var1.guildId;
            var5 = var1.userId;
            var1 = null;
            var3 = var1 == var6;
            if(var3) { _fun0031_ip = 47; continue _fun0031 }
 27:
            var4 = _closure1_slot22;
            var1 = var4.has;
            var1 = var1.bind(var4)(var6);
            var3 = !var1;
 47:
            var1 = !var3;
            if(var3) { _fun0031_ip = 76; continue _fun0031 }
 53:
            var4 = _closure1_slot35;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = undefined;
            var1 = var4.bind(var2)(var5, var3);
 76:
            return var1;
        }
    };
    var2['RTC_CONNECTION_VIDEO'] = var12;
    var2['STREAM_CLOSE'] = var11;
    var2['STREAM_DELETE'] = var11;
    var2['RELATIONSHIP_ADD'] = var10;
    var2['RELATIONSHIP_REMOVE'] = var10;
    var2['RELATIONSHIP_UPDATE'] = var10;
    var2['GUILD_CREATE'] = var9;
    var2['GUILD_DELETE'] = var9;
    var4 = function handlePassiveUpdateV2(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
            var2 = _closure1_slot26;
            var3 = _closure1_slot29;
            var1 = arg1;
            var1 = var1.guildId;
            var6 = undefined;
            var1 = var3.bind(var6)(var1);
            var5 = var2.bind(var6)(var1);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0032_ip = 101; continue _fun0032 }
 50:
            var8 = _closure1_slot32;
            var2 = var4.value;
            var8 = var8.bind(var6)(var2);
            var2 = var8.rebuild;
            var8 = var2.bind(var8)();
            if(var8) { _fun0032_ip = 80; continue _fun0032 }
 77:
            var8 = var3;
 80:
            var9 = var5.bind(var6)();
            var2 = var9.done;
            var3 = var8;
            var4 = var9;
            var1 = var3;
            if(!var2) { _fun0032_ip = 50; continue _fun0032 }
 101:
            return var1;
        }
    };
    var2['PASSIVE_UPDATE_V2'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var20 = var4;
    var18 = var2;
    var2 = new var20[var8](var19, var18, var17);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/StageChannelParticipantStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();