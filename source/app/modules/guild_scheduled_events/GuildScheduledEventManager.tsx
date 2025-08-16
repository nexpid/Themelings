// app/modules/guild_scheduled_events/GuildScheduledEventManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot15;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot15;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
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
                    _fun0002_ip = 67; continue _fun0002;
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
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
            _fun0004_ip = 74; continue _fun0004;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = {};
    var _closure1_slot10 = var7;
    var7 = var4.Set;
    var8 = var7.prototype;
    var8 = Object.create(var8, {constructor: {value: var7}});
    var13 = var8;
    var7 = new var13[var7](var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot11 = var7;
    var4 = var4.Set;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var13 = var7;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot12 = var4;
    var4 = function() {
        var4 = _closure1_slot7;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 191; continue _fun0005 }
 13:
                    var2 = var6;
                    var5 = _closure1_slot9;
                    var4 = var5.getGuildScheduledEventsForGuild;
                    var4 = var4.bind(var5)(var6);
                    var5 = var4.length;
                    var4 = 0;
                    if(!(var4 !== var5)) { _fun0005_ip = 186; continue _fun0005 }
 48:
                    var6 = _closure1_slot11;
                    var5 = var6.has;
                    var4 = var2;
                    var4 = var5.bind(var6)(var4);
                    if(var4) { _fun0005_ip = 186; continue _fun0005 }
 68:
                    var6 = _closure1_slot12;
                    var5 = var6.has;
                    var4 = var2;
                    var4 = var5.bind(var6)(var4);
                    if(var4) { _fun0005_ip = 186; continue _fun0005 }
 88: // try_start_0
                    var5 = _closure1_slot11;
                    var4 = var5.add;
                    var6 = var2;
                    var4 = var4.bind(var5)(var6);
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var4 = 8;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var7.bind(var4)(var5);
                    var4 = var5.getGuildEventsForCurrentUser;
                    var4 = var4.bind(var5)(var6);
                    SaveGenerator(address=142);
 140:
                    return var4;
 142:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 167; continue _fun0005 }
 148:
                    var7 = _closure1_slot12;
                    var6 = var7.add;
                    var5 = var2;
                    var5 = var6.bind(var7)(var5);
 165: // try_end0
                    _fun0005_ip = 186; continue _fun0005;
 167:
                    return var4;
 170: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot11;
                    var3 = var4.delete;
                    var2 = var3.bind(var4)(var2);
 186:
                    var2 = undefined;
                    return var2;
 191:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function GuildScheduledEventManager(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot2;
                var2 = _closure2_slot3;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot16;
                var1 = var1.bind(var4)();
                if(var1) { _fun0006_ip = 86; continue _fun0006 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0006_ip = 120; continue _fun0006;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var2.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = {};
                var4 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleConnectionOpen;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2['POST_CONNECTION_OPEN'] = var4;
                var4 = function GUILD_DELETE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleGuildDelete;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['GUILD_DELETE'] = var4;
                var4 = function GUILD_UNAVAILABLE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleGuildUnavailable;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['GUILD_UNAVAILABLE'] = var4;
                var4 = function INVITE_RESOLVE_SUCCESS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleInviteResolveSuccess;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['INVITE_RESOLVE_SUCCESS'] = var4;
                var3 = function CHANNEL_SELECT(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleChannelSelect;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['CHANNEL_SELECT'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot3 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var7 = 'getGuildEventUserCounts';
        var5['key'] = var7;
        var8 = _closure1_slot7;
        var1 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    StartGenerator();
                    var15 = arg1;
                    var12 = arg2;
                    var9 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 254; continue _fun0007 }
 21:
                    var5 = var15;
                    var _closure4_slot0 = var15;
                    var4 = var12;
                    var _closure4_slot1 = var12;
                    var2 = undefined;
                    var3 = undefined;
                    var8 = var9.filter;
                    var6 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var9 = arg1;
                            var3 = _closure1_slot10;
                            var15 = _closure4_slot0;
                            var13 = _closure4_slot1;
                            var2 = global;
                            var1 = var2.HermesInternal;
                            var1 = var1.concat;
                            var8 = '';
                            var7 = '-';
                            var16 = var8;
                            var14 = var7;
                            var12 = var7;
                            var11 = var9;
                            var1 = var16[var1](var15, var14, var13, var12, var11, var10);
                            var3 = var3[var1];
                            var1 = null;
                            var1 = var1 == var3;
                            if(var1) { _fun0008_ip = 143; continue _fun0008 }
 71:
                            var6 = var2.Date;
                            var3 = var6.now;
                            var3 = var3.bind(var6)();
                            var4 = _closure1_slot10;
                            var15 = _closure4_slot0;
                            var13 = _closure4_slot1;
                            var2 = var2.HermesInternal;
                            var2 = var2.concat;
                            var16 = var8;
                            var14 = var7;
                            var12 = var7;
                            var11 = var9;
                            var2 = var16[var2](var15, var14, var13, var12, var11, var10);
                            var2 = var4[var2];
                            var3 = var3 - var2;
                            var2 = 1800000;
                            var1 = var3 > var2;
 143:
                            return var1;
                        }
                    };
                    var3 = var8.bind(var9)(var6);
                    var8 = global;
                    var9 = var8.Date;
                    var6 = var9.now;
                    var10 = var6.bind(var9)();
                    var11 = _closure1_slot10;
                    var9 = var8.HermesInternal;
                    var9 = var9.concat;
                    var14 = '';
                    var13 = '-';
                    var9 = var9.bind(var14)(var15, var13, var12);
                    var9 = var11[var9];
                    var10 = var10 - var9;
                    var9 = 1800000;
                    if(!(var10 < var9)) { _fun0007_ip = 136; continue _fun0007 }
 122:
                    var9 = var3;
                    var10 = var9.length;
                    var9 = 0;
                    if(!(var9 !== var10)) { _fun0007_ip = 251; continue _fun0007 }
 136:
                    var10 = _closure1_slot10;
                    var12 = var5;
                    var11 = var4;
                    var9 = var8.HermesInternal;
                    var9 = var9.concat;
                    var9 = var9.bind(var14)(var12, var13, var11);
                    var11 = var8.Date;
                    var8 = var11.now;
                    var8 = var8.bind(var11)();
                    var10[var9] = var8;
                    var9 = var3;
                    var8 = var9.forEach;
                    var7 = function(arg1) {
                        var3 = _closure1_slot10;
                        var13 = _closure4_slot0;
                        var11 = _closure4_slot1;
                        var1 = global;
                        var2 = var1.HermesInternal;
                        var6 = var2.concat;
                        var14 = '';
                        var4 = '-';
                        var9 = arg1;
                        var12 = var4;
                        var10 = var4;
                        var2 = var14[var6](var13, var12, var11, var10, var9, var8);
                        var4 = var1.Date;
                        var1 = var4.now;
                        var1 = var1.bind(var4)();
                        var3[var2] = var1;
                        return var1;
                    };
                    var7 = var8.bind(var9)(var7);
 201: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var6 = 8;
                    var6 = var8[var6];
                    var7 = var7.bind(var2)(var6);
                    var6 = var7.fetchGuildEventUserCounts;
                    var3 = var6.bind(var7)(var5, var4, var3);
                    SaveGenerator(address=238);
 236:
                    return var3;
 238:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 246; continue _fun0007 }
 244: // try_end0
                    _fun0007_ip = 251; continue _fun0007;
 246:
                    return var3;
 249: // catch_target0
                    CatchBlockStart(arg_register=2);
 251:
                    return var2;
 254:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var8.bind(var3)(var1);
        var _closure2_slot2 = var1;
        var1 = function getGuildEventUserCounts() {
            var1 = undefined;
            var4 = _closure2_slot2;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'getGuildEventUsers';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.fetchUsersForGuildEvent;
            var3 = arg1;
            var2 = arg2;
            var1 = arg3;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getGuildEventsForCurrentUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot13;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'handleConnectionOpen';
        var5['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    StartGenerator();
                    var11 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 224; continue _fun0009 }
 15:
                    var4 = _closure1_slot11;
                    var3 = var4.clear;
                    var3 = var3.bind(var4)();
                    var4 = _closure1_slot12;
                    var3 = var4.clear;
                    var3 = var3.bind(var4)();
                    var3 = {};
                    _closure1_slot10 = var3;
                    var4 = _closure1_slot8;
                    var3 = var4.getLastSelectedGuildId;
                    var9 = var3.bind(var4)();
                    var3 = null;
                    if(!(var3 != var9)) { _fun0009_ip = 219; continue _fun0009 }
 75:
                    var3 = _closure1_slot14;
                    var4 = _closure1_slot9;
                    var2 = var4.getGuildScheduledEventsForGuild;
                    var2 = var2.bind(var4)(var9);
                    var8 = undefined;
                    var7 = var3.bind(var8)(var2);
                    var3 = var7.bind(var8)();
                    var2 = var3.done;
                    var6 = global;
                    var5 = var3;
                    if(var2) { _fun0009_ip = 219; continue _fun0009 }
 118:
                    var2 = var5.value;
                    var4 = var11.getGuildEventUserCounts;
                    var3 = var2.id;
                    var2 = new Array(0);
                    var2 = var4.bind(var11)(var9, var3, var2);
                    SaveGenerator(address=149);
 147:
                    return var2;
 149:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 216; continue _fun0009 }
 155:
                    var12 = var6.Promise;
                    var3 = var12.prototype;
                    var4 = Object.create(var3, {constructor: {value: var12}});
                    var15 = function(arg1) {
                        var1 = global;
                        var4 = var1.setTimeout;
                        var2 = var1.Math;
                        var1 = var2.random;
                        var2 = var1.bind(var2)();
                        var1 = 200;
                        var5 = var1 * var2;
                        var3 = undefined;
                        var2 = arg1;
                        var1 = 50;
                        var1 = var5 + var1;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var16 = var4;
                    var3 = new var16[var12](var15, var14);
                    var3 = var3 instanceof Object ? var3 : var4;
                    SaveGenerator(address=190);
 188:
                    return var3;
 190:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0009_ip = 213; continue _fun0009 }
 196:
                    var12 = var7.bind(var8)();
                    var4 = var12.done;
                    var5 = var12;
                    if(var4) { _fun0009_ip = 219; continue _fun0009 }
 211:
                    _fun0009_ip = 118; continue _fun0009;
 213:
                    return var3;
 216:
                    return var2;
 219:
                    var2 = undefined;
                    return var2;
 224:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot1 = var7;
        var7 = function handleConnectionOpen() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'handleGuildUnavailable';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var2 = var1.guildId;
            var4 = _closure1_slot11;
            var3 = var4.delete;
            var3 = var3.bind(var4)(var2);
            var4 = _closure1_slot12;
            var3 = var4.delete;
            var3 = var3.bind(var4)(var2);
            var1 = _closure1_slot10;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'handleGuildDelete';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var1 = var1.guild;
            var2 = var1.id;
            var4 = _closure1_slot11;
            var3 = var4.delete;
            var3 = var3.bind(var4)(var2);
            var4 = _closure1_slot12;
            var3 = var4.delete;
            var3 = var3.bind(var4)(var2);
            var1 = _closure1_slot10;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'handleInviteResolveSuccess';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var1 = arg1;
                var1 = var1.invite;
                var2 = var1.guild_scheduled_event;
                var5 = var1.guild;
                var4 = null;
                var6 = var4 == var5;
                var1 = undefined;
                var3 = undefined;
                if(var6) { _fun0010_ip = 38; continue _fun0010 }
 33:
                var3 = var5.id;
 38:
                var2 = var4 != var2;
                if(!var2) { _fun0010_ip = 49; continue _fun0010 }
 45:
                var2 = var4 != var3;
 49:
                if(!var2) { _fun0010_ip = 64; continue _fun0010 }
 52:
                var2 = _closure1_slot13;
                var2 = var2.bind(var1)(var3);
 64:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'handleChannelSelect';
        var5['key'] = var7;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    StartGenerator();
                    var13 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 320; continue _fun0011 }
 15:
                    var2 = arg1;
                    var9 = var2.guildId;
                    var3 = undefined;
                    var10 = undefined;
                    var11 = undefined;
                    var12 = undefined;
                    SaveGenerator(address=35);
 33:
                    return var3;
 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0011_ip = 317; continue _fun0011 }
 44:
                    var6 = var9;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0011_ip = 314; continue _fun0011 }
 56:
                    var6 = _closure1_slot14;
                    var8 = _closure1_slot9;
                    var7 = var8.getGuildScheduledEventsForGuild;
                    var5 = var9;
                    var5 = var7.bind(var8)(var5);
                    var5 = var6.bind(var3)(var5);
                    var11 = var5;
                    var5 = var5.bind(var3)();
                    var10 = var5;
                    var5 = var5.done;
                    var6 = global;
                    if(var5) { _fun0011_ip = 314; continue _fun0011 }
 109:
                    var5 = var10;
                    var12 = var5.value;
 117: // try_start_0
                    var14 = var13.getGuildEventUserCounts;
                    var8 = var9;
                    var5 = var12;
                    var7 = var5.id;
                    var5 = new Array(0);
                    var7 = var14.bind(var13)(var8, var7, var5);
                    SaveGenerator(address=149);
 147:
                    return var7;
 149:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=4);
                    if(var5) { _fun0011_ip = 219; continue _fun0011 }
 155: // try_end0
                    var14 = var6.Promise;
                    var5 = var14.prototype;
                    var8 = Object.create(var5, {constructor: {value: var14}});
                    var17 = function(arg1) {
                        var1 = global;
                        var4 = var1.setTimeout;
                        var2 = var1.Math;
                        var1 = var2.random;
                        var2 = var1.bind(var2)();
                        var1 = 200;
                        var5 = var1 * var2;
                        var3 = undefined;
                        var2 = arg1;
                        var1 = 50;
                        var1 = var5 + var1;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var18 = var8;
                    var5 = new var18[var14](var17, var16);
                    var5 = var5 instanceof Object ? var5 : var8;
                    SaveGenerator(address=190);
 188:
                    return var5;
 190:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0011_ip = 216; continue _fun0011 }
 196:
                    var8 = var11;
                    var8 = var8.bind(var3)();
                    var10 = var8;
                    var8 = var8.done;
                    if(var8) { _fun0011_ip = 314; continue _fun0011 }
 214:
                    _fun0011_ip = 109; continue _fun0011;
 216:
                    return var5;
 219:
                    var9 = var6.Promise;
                    var5 = var9.prototype;
                    var8 = Object.create(var5, {constructor: {value: var9}});
                    var17 = function(arg1) {
                        var1 = global;
                        var4 = var1.setTimeout;
                        var2 = var1.Math;
                        var1 = var2.random;
                        var2 = var1.bind(var2)();
                        var1 = 200;
                        var5 = var1 * var2;
                        var3 = undefined;
                        var2 = arg1;
                        var1 = 50;
                        var1 = var5 + var1;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var18 = var8;
                    var5 = new var18[var9](var17, var16);
                    var5 = var5 instanceof Object ? var5 : var8;
                    SaveGenerator(address=254);
 252:
                    return var5;
 254:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0011_ip = 263; continue _fun0011 }
 260:
                    return var7;
 263:
                    return var5;
 266: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var7 = var6.Promise;
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {constructor: {value: var7}});
                    var17 = function(arg1) {
                        var1 = global;
                        var4 = var1.setTimeout;
                        var2 = var1.Math;
                        var1 = var2.random;
                        var2 = var1.bind(var2)();
                        var1 = 200;
                        var5 = var1 * var2;
                        var3 = undefined;
                        var2 = arg1;
                        var1 = 50;
                        var1 = var5 + var1;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var18 = var6;
                    var4 = new var18[var7](var17, var16);
                    var4 = var4 instanceof Object ? var4 : var6;
                    SaveGenerator(address=303);
 301:
                    return var4;
 303:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0011_ip = 311; continue _fun0011 }
 309:
                    throw var5;
 311:
                    return var4;
 314:
                    return var3;
 317:
                    return var2;
 320:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var6 = function handleChannelSelect() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/GuildScheduledEventManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();