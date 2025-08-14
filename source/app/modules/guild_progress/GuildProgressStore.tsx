// app/modules/guild_progress/GuildProgressStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
            if(var2) { _fun0002_ip = 344; continue _fun0002 }
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
            var9 = _closure1_slot14;
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
            var7 = _closure1_slot14;
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
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
    var _closure1_slot14 = var1;
    var1 = function completeStep(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg1;
            var8 = arg2;
            var1 = _closure1_slot11;
            var6 = var1[var5];
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0005_ip = 93; continue _fun0005 }
 26:
            var2 = var6.has;
            var2 = var2.bind(var6)(var8);
            var2 = !var2;
            if(!var2) { _fun0005_ip = 90; continue _fun0005 }
 42:
            var4 = _closure1_slot11;
            var3 = global;
            var7 = var3.Set;
            var3 = var6.add;
            var9 = var3.bind(var6)(var8);
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var10 = var6;
            var3 = new var10[var7](var9, var8);
            var3 = var3 instanceof Object ? var3 : var6;
            var4[var5] = var3;
            var2 = true;
 90:
            var1 = var2;
 93:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.Steps;
    var _closure1_slot10 = var2;
    var2 = {};
    var _closure1_slot11 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function GuildProgressStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot12;
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
                var6 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = arg1;
                var7 = this;
                var _closure3_slot0 = var4;
                var6 = var7.waitFor;
                var5 = _closure1_slot7;
                var3 = _closure1_slot9;
                var3 = var6.bind(var7)(var5, var3);
                var3 = {};
                _closure1_slot11 = var3;
                var3 = null;
                if(!(var3 != var4)) { _fun0007_ip = 96; continue _fun0007 }
 47:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.keys;
                var3 = var2.bind(var3)(var4);
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var3 = arg1;
                        var1 = _closure3_slot0;
                        var5 = var1[var3];
                        var1 = null;
                        var1 = var1 != var5;
                        if(!var1) { _fun0008_ip = 51; continue _fun0008 }
 23:
                        var2 = global;
                        var2 = var2.Symbol;
                        var2 = var2.iterator;
                        var2 = var5[var2];
                        var4 = 'function';
                        var2 = typeof var2;
                        var1 = var4 === var2;
 51:
                        if(!var1) { _fun0008_ip = 96; continue _fun0008 }
 54:
                        var2 = _closure1_slot11;
                        var1 = global;
                        var1 = var1.Set;
                        var4 = var1.prototype;
                        var4 = Object.create(var4, {constructor: {value: var1}});
                        var7 = var4;
                        var6 = var5;
                        var1 = new var7[var1](var6, var5);
                        var1 = var1 instanceof Object ? var1 : var4;
                        var2[var3] = var1;
 96:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
 96:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getProgress';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot11;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasProgress';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = _closure1_slot11;
                var1 = arg1;
                var4 = var3[var1];
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0009_ip = 46; continue _fun0009 }
 23:
                var3 = var4.has;
                var2 = _closure1_slot10;
                var2 = var2.DISMISSED;
                var2 = var3.bind(var4)(var2);
                var1 = !var2;
 46:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GuildProgressStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpen() {
        var4 = new Array(0);
        var _closure2_slot0 = var4;
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 9;
        var5 = var5[var1];
        var1 = undefined;
        var6 = var6.bind(var1)(var5);
        var5 = var6.keys;
        var3 = _closure1_slot11;
        var6 = var5.bind(var6)(var3);
        var5 = var6.forEach;
        var3 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var3 = arg1;
                var2 = _closure1_slot11;
                var4 = var2[var3];
                var2 = var4.has;
                var1 = _closure1_slot10;
                var1 = var1.COMPLETED;
                var1 = var2.bind(var4)(var1);
                if(!var1) { _fun0010_ip = 54; continue _fun0010 }
 37:
                var2 = _closure2_slot0;
                var1 = var2.push;
                var1 = var1.bind(var2)(var3);
 54:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var5.bind(var6)(var3);
        var3 = var4.forEach;
        var2 = function(arg1) {
            var4 = _closure1_slot15;
            var1 = _closure1_slot10;
            var3 = var1.DISMISSED;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleInitialize(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = _closure1_slot11;
            var4 = var2[var3];
            var2 = null;
            if(!(var2 == var4)) { _fun0011_ip = 61; continue _fun0011 }
 25:
            var4 = _closure1_slot11;
            var2 = global;
            var2 = var2.Set;
            var5 = var2.prototype;
            var5 = Object.create(var5, {constructor: {value: var2}});
            var7 = var5;
            var2 = new var7[var2](var6);
            var2 = var2 instanceof Object ? var2 : var5;
            var4[var3] = var2;
 61:
            var2 = _closure1_slot11;
            var5 = var2[var3];
            var4 = var5.has;
            var2 = _closure1_slot10;
            var2 = var2.COMPLETED;
            var2 = var4.bind(var5)(var2);
            if(var2) { _fun0011_ip = 120; continue _fun0011 }
 92:
            var2 = _closure1_slot11;
            var3 = var2[var3];
            var2 = var3.delete;
            var1 = _closure1_slot10;
            var1 = var1.DISMISSED;
            var1 = var2.bind(var3)(var1);
 120:
            var1 = undefined;
            return var1;
        }
    };
    var2['GUILD_PROGRESS_INITIALIZE'] = var9;
    var9 = function handleCompletedSeen(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = _closure1_slot11;
            var4 = var2[var3];
            var2 = null;
            if(!(var2 != var4)) { _fun0012_ip = 93; continue _fun0012 }
 25:
            var2 = _closure1_slot11;
            var4 = global;
            var5 = var4.Set;
            var4 = _closure1_slot11;
            var6 = var4[var3];
            var4 = var6.add;
            var1 = _closure1_slot10;
            var1 = var1.COMPLETED;
            var7 = var4.bind(var6)(var1);
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var8 = var4;
            var1 = new var8[var5](var7, var6);
            var1 = var1 instanceof Object ? var1 : var4;
            var2[var3] = var1;
            var1 = undefined;
            return var1;
 93:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_PROGRESS_COMPLETED_SEEN'] = var9;
    var9 = function handleGuildProgressDismiss(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var3 = _closure1_slot15;
        var1 = _closure1_slot10;
        var2 = var1.DISMISSED;
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var2['GUILD_PROGRESS_DISMISS'] = var9;
    var9 = function handleGuildCreate(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var1 = var1.guild;
            var5 = var1.id;
            var4 = var1.member_count;
            var3 = _closure1_slot9;
            var2 = var3.getGuild;
            var2 = var2.bind(var3)(var5);
            var5 = null;
            if(!(var5 != var2)) { _fun0013_ip = 178; continue _fun0013 }
 45:
            var6 = var2.ownerId;
            var7 = _closure1_slot7;
            var3 = var7.getId;
            var3 = var3.bind(var7)();
            var3 = var6 === var3;
            if(!var3) { _fun0013_ip = 89; continue _fun0013 }
 72:
            var7 = _closure1_slot11;
            var6 = var2.id;
            var6 = var7[var6];
            var3 = var5 != var6;
 89:
            if(!var3) { _fun0013_ip = 174; continue _fun0013 }
 92:
            var3 = var2.icon;
            if(!(var5 != var3)) { _fun0013_ip = 134; continue _fun0013 }
 101:
            var5 = _closure1_slot11;
            var3 = var2.id;
            var6 = var5[var3];
            var5 = var6.add;
            var3 = _closure1_slot10;
            var3 = var3.AVATAR;
            var3 = var5.bind(var6)(var3);
 134:
            var3 = 1;
            if(!(var4 > var3)) { _fun0013_ip = 174; continue _fun0013 }
 141:
            var3 = _closure1_slot11;
            var2 = var2.id;
            var3 = var3[var2];
            var2 = var3.add;
            var1 = _closure1_slot10;
            var1 = var1.INVITE;
            var1 = var2.bind(var3)(var1);
 174:
            var1 = undefined;
            return var1;
 178:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_CREATE'] = var9;
    var9 = function handleChannelCreate(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var3 = var1.channel;
            var4 = null;
            var1 = var4 != var3;
            if(!var1) { _fun0014_ip = 26; continue _fun0014 }
 17:
            var2 = var3.guild_id;
            var1 = var4 != var2;
 26:
            if(!var1) { _fun0014_ip = 49; continue _fun0014 }
 29:
            var5 = _closure1_slot11;
            var2 = var3.guild_id;
            var2 = var5[var2];
            var1 = var4 != var2;
 49:
            if(!var1) { _fun0014_ip = 82; continue _fun0014 }
 52:
            var5 = _closure1_slot15;
            var4 = var3.guild_id;
            var2 = _closure1_slot10;
            var3 = var2.CHANNEL;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
 82:
            return var1;
        }
    };
    var2['CHANNEL_CREATE'] = var9;
    var9 = function handleChannelUpdates(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var2 = var1.channels;
            var1 = _closure1_slot13;
            var9 = undefined;
            var8 = var1.bind(var9)(var2);
            var1 = var8.bind(var9)();
            var2 = var1.done;
            var7 = false;
            var5 = null;
            var4 = var1;
            var3 = false;
            var1 = false;
            if(var2) { _fun0015_ip = 142; continue _fun0015 }
 46:
            var11 = var4.value;
            var2 = var5 != var11;
            if(!var2) { _fun0015_ip = 67; continue _fun0015 }
 58:
            var12 = var11.guild_id;
            var2 = var5 != var12;
 67:
            if(!var2) { _fun0015_ip = 87; continue _fun0015 }
 70:
            var13 = _closure1_slot11;
            var12 = var11.guild_id;
            var12 = var13[var12];
            var2 = var5 != var12;
 87:
            if(!var2) { _fun0015_ip = 119; continue _fun0015 }
 90:
            var13 = _closure1_slot15;
            var12 = var11.guild_id;
            var11 = _closure1_slot10;
            var11 = var11.CHANNEL;
            var11 = var13.bind(var9)(var12, var11);
            var2 = var7 !== var11;
 119:
            if(!var2) { _fun0015_ip = 124; continue _fun0015 }
 122:
            var3 = true;
 124:
            var12 = var8.bind(var9)();
            var2 = var12.done;
            var4 = var12;
            var1 = var3;
            if(!var2) { _fun0015_ip = 46; continue _fun0015 }
 142:
            return var1;
        }
    };
    var2['CHANNEL_UPDATES'] = var9;
    var9 = function handleGuildSettings(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var4 = var1.guild;
            var5 = null;
            var1 = var5 != var4;
            if(!var1) { _fun0016_ip = 97; continue _fun0016 }
 17:
            var2 = var4.id;
            var2 = var5 != var2;
            if(!var2) { _fun0016_ip = 49; continue _fun0016 }
 29:
            var6 = _closure1_slot11;
            var3 = var4.id;
            var3 = var6[var3];
            var2 = var5 != var3;
 49:
            if(!var2) { _fun0016_ip = 61; continue _fun0016 }
 52:
            var3 = var4.icon;
            var2 = var5 != var3;
 61:
            if(!var2) { _fun0016_ip = 94; continue _fun0016 }
 64:
            var6 = _closure1_slot15;
            var5 = var4.id;
            var3 = _closure1_slot10;
            var4 = var3.AVATAR;
            var3 = undefined;
            var2 = var6.bind(var3)(var5, var4);
 94:
            var1 = var2;
 97:
            return var1;
        }
    };
    var2['GUILD_SETTINGS_SUBMIT_SUCCESS'] = var9;
    var9 = function handleMessage(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var5 = var1.channelId;
            var1 = var1.message;
            var4 = _closure1_slot8;
            var3 = var4.getChannel;
            var3 = var3.bind(var4)(var5);
            var1 = var1.author;
            var6 = null;
            var7 = var6 == var1;
            var5 = undefined;
            var4 = undefined;
            if(var7) { _fun0017_ip = 54; continue _fun0017 }
 49:
            var4 = var1.id;
 54:
            var7 = _closure1_slot7;
            var1 = var7.getId;
            var1 = var1.bind(var7)();
            var1 = var4 === var1;
            if(!var1) { _fun0017_ip = 79; continue _fun0017 }
 75:
            var1 = var6 != var3;
 79:
            if(!var1) { _fun0017_ip = 99; continue _fun0017 }
 82:
            var7 = _closure1_slot11;
            var4 = var3.guild_id;
            var4 = var7[var4];
            var1 = var6 != var4;
 99:
            if(!var1) { _fun0017_ip = 127; continue _fun0017 }
 102:
            var4 = _closure1_slot15;
            var3 = var3.guild_id;
            var2 = _closure1_slot10;
            var2 = var2.MESSAGE;
            var1 = var4.bind(var5)(var3, var2);
 127:
            return var1;
        }
    };
    var2['MESSAGE_CREATE'] = var9;
    var4 = function handleGuildMember(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var4 = var1.memberCount;
            var1 = _closure1_slot11;
            var3 = var1[var5];
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0018_ip = 41; continue _fun0018 }
 34:
            var3 = 1;
            var1 = var4 > var3;
 41:
            if(!var1) { _fun0018_ip = 66; continue _fun0018 }
 44:
            var4 = _closure1_slot15;
            var2 = _closure1_slot10;
            var3 = var2.INVITE;
            var2 = undefined;
            var1 = var4.bind(var2)(var5, var3);
 66:
            return var1;
        }
    };
    var2['GUILD_MEMBER_LIST_UPDATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_progress/GuildProgressStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();