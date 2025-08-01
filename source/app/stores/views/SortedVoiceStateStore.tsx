// app/stores/views/SortedVoiceStateStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
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
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
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
            var9 = _closure1_slot20;
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
            var7 = _closure1_slot20;
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
    var _closure1_slot19 = var1;
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
    var _closure1_slot20 = var1;
    var1 = function getVoiceStatesForGuild(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var1 = _closure1_slot16;
            var1 = var1[var4];
            var2 = null;
            if(!(var2 == var1)) { _fun0005_ip = 58; continue _fun0005 }
 20:
            var2 = _closure1_slot17;
            var5 = var2.prototype;
            var5 = Object.create(var5, {constructor: {value: var2}});
            var7 = var5;
            var6 = var4;
            var2 = new var7[var2](var6, var5);
            var2 = var2 instanceof Object ? var2 : var5;
            var3 = _closure1_slot16;
            var3[var4] = var2;
            var1 = var2;
 58:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function getMember(arg1, arg2) {
        var4 = _closure1_slot11;
        var3 = var4.getMember;
        var1 = arg2;
        var2 = var1.id;
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var1;
    var5 = function makeMemberAndComparator(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var7 = arg2;
            var1 = {};
            var1['member'] = var7;
            var5 = _closure1_slot24;
            var6 = null;
            var8 = var6 == var7;
            var4 = undefined;
            var3 = undefined;
            if(var8) { _fun0006_ip = 36; continue _fun0006 }
 30:
            var3 = var7.nick;
 36:
            if(!(var6 == var3)) { _fun0006_ip = 74; continue _fun0006 }
 40:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 12;
            var2 = var7[var2];
            var7 = var6.bind(var4)(var2);
            var6 = var7.getName;
            var2 = arg3;
            var3 = var6.bind(var7)(var2);
 74:
            var2 = arg1;
            var2 = var5.bind(var4)(var2, var3);
            var1['comparator'] = var2;
            return var1;
        }
    };
    var _closure1_slot23 = var5;
    var4 = function getComparator(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var3 = arg2;
            var2 = var1.selfStream;
            var6 = '\x01';
            if(!var2) { _fun0007_ip = 27; continue _fun0007 }
 21:
            var6 = '\x00';
 27:
            var2 = var3.toLowerCase;
            var9 = var2.bind(var3)();
            var7 = var1.userId;
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var11 = '';
            var8 = '\x00';
            var10 = var6;
            var1 = var11[var3](var10, var9, var8, var7, var6);
            return var1;
        }
    };
    var _closure1_slot24 = var4;
    var2 = function makeSortedVoiceState(arg1, arg2, arg3, arg4) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var9 = arg1;
            var12 = arg3;
            var5 = arg4;
            var3 = _closure1_slot12;
            var2 = var3.getUser;
            var3 = var2.bind(var3)(var12);
            var4 = null;
            var2 = var4 == var3;
            var8 = var3;
            if(!(var4 == var8)) { _fun0008_ip = 111; continue _fun0008 }
 40:
            var7 = _closure1_slot8;
            var3 = {};
            var3['id'] = var12;
            var6 = '...';
            var3['username'] = var6;
            var11 = var12.slice;
            var10 = -5;
            var6 = -1;
            var6 = var11.bind(var12)(var10, var6);
            var3['discriminator'] = var6;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var16 = var6;
            var15 = var3;
            var3 = new var16[var7](var15, var14);
            var8 = var3 instanceof Object ? var3 : var6;
 111:
            var6 = _closure1_slot23;
            var7 = _closure1_slot22;
            var3 = undefined;
            var1 = arg2;
            var1 = var7.bind(var3)(var1, var8);
            var6 = var6.bind(var3)(var9, var1, var8);
            var7 = var6.member;
            var1 = {};
            var1['voiceState'] = var9;
            var1['user'] = var8;
            var1['member'] = var7;
            var6 = var6.comparator;
            var1['comparator'] = var6;
            var8 = var4 == var7;
            var6 = undefined;
            if(var8) { _fun0008_ip = 185; continue _fun0008 }
 179:
            var6 = var7.nick;
 185:
            var1['nick'] = var6;
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0008_ip = 205; continue _fun0008 }
 199:
            var3 = var5.connectedOn;
 205:
            if(!(var4 == var3)) { _fun0008_ip = 226; continue _fun0008 }
 209:
            var4 = global;
            var5 = var4.Date;
            var4 = var5.now;
            var3 = var4.bind(var5)();
 226:
            var1['connectedOn'] = var3;
            if(!var2) { _fun0008_ip = 242; continue _fun0008 }
 234:
            var2 = true;
            var1['_isPlaceholder'] = var2;
 242:
            return var1;
        }
    };
    var _closure1_slot25 = var2;
    var1 = function handleUpdateUsers() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 14;
        var3 = var3[var2];
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var4 = var5.reduce;
        var3 = _closure1_slot16;
        var2 = function(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var2 = arg1;
                var3 = arg2;
                var1 = var3.updateUsers;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 22; continue _fun0009 }
 19:
                var1 = var2;
 22:
                return var1;
            }
        };
        var1 = false;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function init() {
        var3 = {};
        _closure1_slot16 = var3;
        var4 = _closure1_slot13;
        var3 = var4.getAllVoiceStates;
        var5 = var3.bind(var4)();
        var _closure2_slot0 = var5;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 15;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.keys;
        var4 = var3.bind(var4)(var5);
        var3 = var4.forEach;
        var2 = function(arg1) {
            var5 = arg1;
            var _closure3_slot0 = var5;
            var2 = global;
            var4 = var2.Object;
            var3 = var4.keys;
            var2 = _closure2_slot0;
            var2 = var2[var5];
            var3 = var3.bind(var4)(var2);
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure1_slot21;
                    var5 = _closure3_slot0;
                    var4 = null;
                    if(!(var4 == var5)) { _fun0010_ip = 26; continue _fun0010 }
 20:
                    var2 = _closure1_slot14;
                    _fun0010_ip = 30; continue _fun0010;
 26:
                    var2 = _closure3_slot0;
 30:
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.updateVoiceState;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot27 = var1;
    var6 = global;
    var13 = var6.Object;
    var12 = var13.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var7);
    var1 = 0;
    var7 = var10[var1];
    var1 = undefined;
    var7 = var11.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var10[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var10[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var10[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var10[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var10[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var10[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var10[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var10[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var7 = 9;
    var7 = var10[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot12 = var7;
    var7 = 10;
    var7 = var10[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot13 = var7;
    var7 = 11;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.ME;
    var _closure1_slot14 = var7;
    var12 = var6.Object;
    var7 = var12.freeze;
    var6 = new Array(0);
    var6 = var7.bind(var12)(var6);
    var _closure1_slot15 = var6;
    var7 = {};
    var _closure1_slot16 = var7;
    var7 = function() {
        var4 = _closure1_slot7;
        var3 = function SortedVoiceStates(arg1) {
            var3 = this;
            var6 = _closure1_slot6;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var5 = global;
            var5 = var5.Set;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var9 = var6;
            var5 = new var9[var5](var8);
            var5 = var5 instanceof Object ? var5 : var6;
            var3['_pending'] = var5;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 13;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var6 = var4.SecondaryIndexMap;
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var8 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.voiceState;
                    var3 = var1.channelId;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0011_ip = 26; continue _fun0011 }
 20:
                    var1 = new Array(0);
                    _fun0011_ip = 37; continue _fun0011;
 26:
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
 37:
                    return var1;
                }
            };
            var7 = function(arg1) {
                var1 = arg1;
                var1 = var1.comparator;
                return var1;
            };
            var9 = var4;
            var2 = new var9[var6](var8, var7, var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['_voiceStates'] = var2;
            var2 = arg1;
            var3['guildId'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'updateVoiceState';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var3 = arg1;
                var1 = this;
                var2 = var1._pending;
                var4 = null;
                if(!(var4 == var2)) { _fun0012_ip = 314; continue _fun0012 }
 21:
                var7 = _closure1_slot13;
                var6 = var7.getVoiceState;
                var5 = var1.guildId;
                var8 = var6.bind(var7)(var5, var3);
                var6 = var1._voiceStates;
                var5 = var6.get;
                var7 = var5.bind(var6)(var3);
                var6 = _closure1_slot12;
                var5 = var6.getUser;
                var6 = var5.bind(var6)(var3);
                if(!(var4 != var8)) { _fun0012_ip = 84; continue _fun0012 }
 80:
                if(!(var4 == var6)) { _fun0012_ip = 108; continue _fun0012 }
 84:
                if(!(var4 != var7)) { _fun0012_ip = 125; continue _fun0012 }
 88:
                var9 = var1._voiceStates;
                var5 = var9.delete;
                var5 = var5.bind(var9)(var3);
                var5 = true;
                return var5;
 108:
                if(!(var4 != var7)) { _fun0012_ip = 275; continue _fun0012 }
 115:
                var5 = var7.voiceState;
                if(!(var5 === var8)) { _fun0012_ip = 129; continue _fun0012 }
 125:
                var5 = false;
                return var5;
 129:
                var9 = _closure1_slot22;
                var5 = var1.guildId;
                var10 = undefined;
                var11 = var9.bind(var10)(var5, var6);
                var5 = var4 == var11;
                var9 = undefined;
                if(var5) { _fun0012_ip = 161; continue _fun0012 }
 155:
                var9 = var11.nick;
 161:
                if(!(var4 == var9)) { _fun0012_ip = 196; continue _fun0012 }
 165:
                var5 = _closure1_slot1;
                var12 = _closure1_slot2;
                var4 = 12;
                var4 = var12[var4];
                var5 = var5.bind(var10)(var4);
                var4 = var5.getName;
                var9 = var4.bind(var5)(var6);
 196:
                var6 = var1._voiceStates;
                var5 = var6.set;
                var4 = {};
                var15 = var4;
                var14 = var7;
                var7 = copyDataProperties(var15, var14);
                var7 = 'member';
                var4[var7] = var11;
                var7 = _closure1_slot24;
                var10 = var7.bind(var10)(var8, var9);
                var7 = 'comparator';
                var4[var7] = var10;
                var7 = 'nick';
                var4[var7] = var9;
                var7 = 'voiceState';
                var4[var7] = var8;
                var4 = var5.bind(var6)(var3, var4);
                var4 = true;
                return var4;
 275:
                var5 = var1._voiceStates;
                var4 = var5.set;
                var7 = _closure1_slot25;
                var6 = var1.guildId;
                var2 = undefined;
                var2 = var7.bind(var2)(var8, var6, var3);
                var2 = var4.bind(var5)(var3, var2);
                var2 = true;
                return var2;
 314:
                var2 = var1._pending;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(9);
        var2[0] = var1;
        var1 = {};
        var6 = 'updateMember';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var3 = arg1;
                var1 = this;
                var2 = var1._pending;
                var8 = null;
                if(!(var8 == var2)) { _fun0013_ip = 262; continue _fun0013 }
 21:
                var4 = var1._voiceStates;
                var2 = var4.get;
                var9 = var2.bind(var4)(var3);
                var5 = _closure1_slot12;
                var4 = var5.getUser;
                var5 = var4.bind(var5)(var3);
                if(!(var8 != var9)) { _fun0013_ip = 160; continue _fun0013 }
 59:
                if(!(var8 != var5)) { _fun0013_ip = 160; continue _fun0013 }
 63:
                var6 = _closure1_slot22;
                var4 = var1.guildId;
                var7 = undefined;
                var6 = var6.bind(var7)(var4, var5);
                var4 = var8 == var6;
                var10 = undefined;
                if(var4) { _fun0013_ip = 95; continue _fun0013 }
 89:
                var10 = var6.nick;
 95:
                var11 = var9.member;
                var12 = var8 == var11;
                var4 = undefined;
                if(var12) { _fun0013_ip = 116; continue _fun0013 }
 110:
                var4 = var11.nick;
 116:
                if(!(var10 === var4)) { _fun0013_ip = 164; continue _fun0013 }
 120:
                var4 = var8 == var6;
                var10 = undefined;
                if(var4) { _fun0013_ip = 135; continue _fun0013 }
 129:
                var10 = var6.avatar;
 135:
                var11 = var9.member;
                var12 = var8 == var11;
                var4 = undefined;
                if(var12) { _fun0013_ip = 156; continue _fun0013 }
 150:
                var4 = var11.avatar;
 156:
                if(!(var10 === var4)) { _fun0013_ip = 164; continue _fun0013 }
 160:
                var4 = false;
                return var4;
 164:
                var4 = _closure1_slot23;
                var2 = var9.voiceState;
                var2 = var4.bind(var7)(var2, var6, var5);
                var10 = var2.comparator;
                var5 = var1._voiceStates;
                var4 = var5.set;
                var2 = {};
                var15 = var2;
                var14 = var9;
                var9 = copyDataProperties(var15, var14);
                var9 = 'member';
                var2[var9] = var6;
                var9 = 'comparator';
                var2[var9] = var10;
                var8 = var8 == var6;
                var7 = undefined;
                if(var8) { _fun0013_ip = 243; continue _fun0013 }
 237:
                var7 = var6.nick;
 243:
                var6 = 'nick';
                var2[var6] = var7;
                var2 = var4.bind(var5)(var3, var2);
                var2 = true;
                return var2;
 262:
                var2 = var1._pending;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'updateUsers';
        var1['key'] = var6;
        var6 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var4 = var3._pending;
                var1 = null;
                var1 = var1 == var4;
                if(!var1) { _fun0014_ip = 58; continue _fun0014 }
 24:
                var4 = var3._voiceStates;
                var3 = var4.values;
                var5 = var3.bind(var4)();
                var4 = var5.reduce;
                var3 = function(arg1, arg2) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                        var4 = arg1;
                        var10 = arg2;
                        var3 = _closure1_slot12;
                        var2 = var3.getUser;
                        var1 = var10.user;
                        var1 = var1.id;
                        var2 = var2.bind(var3)(var1);
                        var3 = null;
                        var1 = var4;
                        if(!(var3 != var2)) { _fun0015_ip = 115; continue _fun0015 }
 43:
                        var3 = var10.user;
                        var1 = var4;
                        if(!(var3 !== var2)) { _fun0015_ip = 115; continue _fun0015 }
 55:
                        var6 = _closure3_slot0;
                        var5 = var6._voiceStates;
                        var4 = var5.set;
                        var3 = var2.id;
                        var9 = _closure1_slot25;
                        var14 = var10.voiceState;
                        var13 = var6.guildId;
                        var12 = var2.id;
                        var15 = undefined;
                        var11 = var10;
                        var2 = var15[var9](var14, var13, var12, var11, var10);
                        var2 = var4.bind(var5)(var3, var2);
                        var1 = true;
 115:
                        return var1;
                    }
                };
                var2 = false;
                var1 = var4.bind(var5)(var3, var2);
 58:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getUserIds';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.processPending;
            var2 = var2.bind(var1)();
            var2 = var1._voiceStates;
            var1 = var2.keys;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getVoiceStates';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.processPending;
            var2 = var2.bind(var1)();
            var2 = var1._voiceStates;
            var1 = var2.indexes;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'getVoiceStatesForChannel';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var1 = this;
                var2 = var1.processPending;
                var2 = var2.bind(var1)();
                var3 = var1._voiceStates;
                var2 = var3.values;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var3 = var1.length;
                var2 = 0;
                if(!(var2 === var3)) { _fun0016_ip = 50; continue _fun0016 }
 43:
                var1 = _closure1_slot15;
 50:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'countVoiceStatesForChannel';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var2 = var1.processPending;
            var2 = var2.bind(var1)();
            var3 = var1._voiceStates;
            var2 = var3.size;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'getVersion';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.processPending;
            var2 = var2.bind(var1)();
            var1 = var1._voiceStates;
            var1 = var1.version;
            return var1;
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'processPending';
        var1['key'] = var6;
        var5 = function value() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var4 = this;
                var _closure3_slot0 = var4;
                var3 = var4._pending;
                var2 = null;
                if(!(var2 != var3)) { _fun0017_ip = 50; continue _fun0017 }
 21:
                var3 = var4._pending;
                var2 = undefined;
                var4['_pending'] = var2;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.updateVoiceState;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
 50:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[8] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var7 = var7.bind(var1)();
    var _closure1_slot17 = var7;
    var7 = 16;
    var7 = var10[var7];
    var7 = var11.bind(var1)(var7);
    var12 = var7.Store;
    var7 = function(arg1) {
        var4 = function SortedVoiceStateStore() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot6;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot4;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0018_ip = 69; continue _fun0018 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0018_ip = 105; continue _fun0018;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
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
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var5 = this;
            var3 = _closure1_slot27;
            var1 = undefined;
            var3 = var3.bind(var1)();
            var8 = var5.waitFor;
            var12 = _closure1_slot9;
            var11 = _closure1_slot12;
            var10 = _closure1_slot11;
            var9 = _closure1_slot13;
            var13 = var5;
            var3 = var13[var8](var12, var11, var10, var9, var8);
            var4 = var5.syncWith;
            var6 = _closure1_slot12;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = _closure1_slot26;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'getVoiceStates';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var3 = arg1;
                var2 = _closure1_slot21;
                var4 = null;
                if(!(var4 == var3)) { _fun0019_ip = 20; continue _fun0019 }
 16:
                var3 = _closure1_slot14;
 20:
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                var1 = var2.getVoiceStates;
                var1 = var1.bind(var2)();
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getAllVoiceStates';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getVoiceStatesForChannel';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var1 = arg1;
                var2 = var1.getGuildId;
                var2 = var2.bind(var1)();
                var3 = var1.id;
                var4 = _closure1_slot21;
                var5 = null;
                if(!(var5 == var2)) { _fun0020_ip = 35; continue _fun0020 }
 31:
                var2 = _closure1_slot14;
 35:
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.getVoiceStatesForChannel;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getVoiceStatesForChannelAlt';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var3 = arg2;
                var2 = _closure1_slot21;
                var4 = null;
                if(!(var4 == var3)) { _fun0021_ip = 20; continue _fun0021 }
 16:
                var3 = _closure1_slot14;
 20:
                var1 = undefined;
                var3 = var2.bind(var1)(var3);
                var2 = var3.getVoiceStatesForChannel;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'countVoiceStatesForChannel';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var3 = arg1;
                var4 = _closure1_slot10;
                var2 = var4.getChannel;
                var4 = var2.bind(var4)(var3);
                var5 = null;
                if(!(var5 != var4)) { _fun0022_ip = 68; continue _fun0022 }
 26:
                var2 = var4.getGuildId;
                var2 = var2.bind(var4)();
                var4 = _closure1_slot21;
                if(!(var5 == var2)) { _fun0022_ip = 48; continue _fun0022 }
 44:
                var2 = _closure1_slot14;
 48:
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.countVoiceStatesForChannel;
                var1 = var1.bind(var2)(var3);
                return var1;
 68:
                var1 = 0;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getVoiceStateVersion';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var3 = arg1;
                var2 = _closure1_slot21;
                var4 = null;
                if(!(var4 == var3)) { _fun0023_ip = 20; continue _fun0023 }
 16:
                var3 = _closure1_slot14;
 20:
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                var1 = var2.getVersion;
                var1 = var1.bind(var2)();
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var12 = var7.bind(var1)(var12);
    var7 = 'SortedVoiceStateStore';
    var12['displayName'] = var7;
    var7 = 17;
    var7 = var10[var7];
    var16 = var11.bind(var1)(var7);
    var7 = {};
    var13 = function handleConnectionOpen() {
        var1 = {};
        _closure1_slot16 = var1;
        var1 = undefined;
        return var1;
    };
    var7['CONNECTION_OPEN'] = var13;
    var13 = function handleOverlayInitialize() {
        var2 = _closure1_slot27;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var7['OVERLAY_INITIALIZE'] = var13;
    var13 = function handleVoiceChannelSelect(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var3 = _closure1_slot9;
            var1 = var3.getId;
            var4 = var1.bind(var3)();
            var6 = null;
            var1 = var6 != var4;
            if(!var1) { _fun0024_ip = 64; continue _fun0024 }
 34:
            var3 = _closure1_slot21;
            if(!(var6 == var5)) { _fun0024_ip = 46; continue _fun0024 }
 42:
            var5 = _closure1_slot14;
 46:
            var2 = undefined;
            var3 = var3.bind(var2)(var5);
            var2 = var3.updateVoiceState;
            var1 = var2.bind(var3)(var4);
 64:
            return var1;
        }
    };
    var7['VOICE_CHANNEL_SELECT'] = var13;
    var13 = function handleVoiceStateUpdates(arg1) {
        var1 = arg1;
        var4 = var1.voiceStates;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                var2 = arg1;
                var1 = arg2;
                var5 = var1.guildId;
                var4 = var1.userId;
                var3 = _closure1_slot21;
                var6 = null;
                if(!(var6 == var5)) { _fun0025_ip = 33; continue _fun0025 }
 29:
                var5 = _closure1_slot14;
 33:
                var1 = undefined;
                var3 = var3.bind(var1)(var5);
                var1 = var3.updateVoiceState;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0025_ip = 57; continue _fun0025 }
 54:
                var1 = var2;
 57:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var7['VOICE_STATE_UPDATES'] = var13;
    var13 = function handleGuildMemberUpdate(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var1 = var1.user;
        var3 = _closure1_slot21;
        var2 = undefined;
        var3 = var3.bind(var2)(var4);
        var2 = var3.updateMember;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7['GUILD_MEMBER_UPDATE'] = var13;
    var13 = function handleGuildCreate(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var2 = _closure1_slot16;
        var1 = var1.id;
        var1 = delete var2[var1];
        var1 = undefined;
        return var1;
    };
    var7['GUILD_CREATE'] = var13;
    var13 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var2 = _closure1_slot16;
        var1 = var1.id;
        var1 = delete var2[var1];
        var1 = undefined;
        return var1;
    };
    var7['GUILD_DELETE'] = var13;
    var8 = function handlePassiveUpdateV2(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
            var9 = arg1;
            var1 = global;
            var5 = var1.Set;
            var3 = _closure1_slot16;
            var2 = var9.guildId;
            var6 = var3[var2];
            var2 = null;
            var4 = var2 == var6;
            var7 = undefined;
            var3 = undefined;
            if(var4) { _fun0026_ip = 50; continue _fun0026 }
 40:
            var4 = var6.getUserIds;
            var3 = var4.bind(var6)();
 50:
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var16 = var4;
            var15 = var3;
            var3 = new var16[var5](var15, var14);
            var3 = var3 instanceof Object ? var3 : var4;
            var5 = var1.Set;
            var10 = var9.voiceStates;
            var4 = var2 == var10;
            var2 = undefined;
            if(var4) { _fun0026_ip = 111; continue _fun0026 }
 94:
            var6 = var10.map;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.userId;
                return var1;
            };
            var2 = var6.bind(var10)(var4);
 111:
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var16 = var4;
            var15 = var2;
            var2 = new var16[var5](var15, var14);
            var10 = var2 instanceof Object ? var2 : var4;
            var5 = var1.Set;
            var15 = var9.removedVoiceStateUsers;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var16 = var4;
            var2 = new var16[var5](var15, var14);
            var6 = var2 instanceof Object ? var2 : var4;
            var2 = _closure1_slot19;
            var5 = var1.Set;
            var1 = new Array(0);
            var13 = 0;
            var15 = var1;
            var14 = var3;
            var13 = arraySpread(var15, var14, var13);
            var15 = var1;
            var14 = var10;
            var4 = arraySpread(var15, var14, var13);
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var16 = var4;
            var15 = var1;
            var1 = new var16[var5](var15, var14);
            var1 = var1 instanceof Object ? var1 : var4;
            var10 = var2.bind(var7)(var1);
            var4 = var10.bind(var7)();
            var2 = var4.done;
            var5 = var4;
            var4 = false;
            var1 = false;
            if(var2) { _fun0026_ip = 306; continue _fun0026 }
 249:
            var12 = var5.value;
            var11 = _closure1_slot21;
            var2 = var9.guildId;
            var11 = var11.bind(var7)(var2);
            var2 = var11.updateVoiceState;
            var11 = var2.bind(var11)(var12);
            if(var11) { _fun0026_ip = 285; continue _fun0026 }
 282:
            var11 = var4;
 285:
            var12 = var10.bind(var7)();
            var2 = var12.done;
            var4 = var11;
            var5 = var12;
            var1 = var4;
            if(!var2) { _fun0026_ip = 249; continue _fun0026 }
 306:
            var2 = _closure1_slot19;
            var5 = var2.bind(var7)(var3);
            var3 = var5.bind(var7)();
            var2 = var3.done;
            var4 = var1;
            var1 = var4;
            if(var2) { _fun0026_ip = 409; continue _fun0026 }
 333:
            var12 = var3.value;
            var2 = var6.has;
            var2 = var2.bind(var6)(var12);
            var10 = var4;
            if(var2) { _fun0026_ip = 388; continue _fun0026 }
 354:
            var11 = _closure1_slot21;
            var2 = var9.guildId;
            var11 = var11.bind(var7)(var2);
            var2 = var11.updateMember;
            var2 = var2.bind(var11)(var12);
            if(var2) { _fun0026_ip = 385; continue _fun0026 }
 382:
            var2 = var4;
 385:
            var10 = var2;
 388:
            var11 = var5.bind(var7)();
            var2 = var11.done;
            var4 = var10;
            var3 = var11;
            var1 = var4;
            if(!var2) { _fun0026_ip = 333; continue _fun0026 }
 409:
            return var1;
        }
    };
    var7['PASSIVE_UPDATE_V2'] = var8;
    var8 = var12.prototype;
    var8 = Object.create(var8, {constructor: {value: var12}});
    var17 = var8;
    var15 = var7;
    var7 = new var17[var12](var16, var15, var14);
    var7 = var7 instanceof Object ? var7 : var8;
    var8 = 18;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'stores/views/SortedVoiceStateStore.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var3['NO_VOICE_STATES'] = var6;
    var3['makeMemberAndComparator'] = var5;
    var3['getComparator'] = var4;
    var3['makeSortedVoiceState'] = var2;
    return var1;
})();