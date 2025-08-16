// app/modules/voice_calls/RTCConnectionDesyncHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
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
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
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
            var9 = _closure1_slot14;
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
            var7 = _closure1_slot14;
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
 345:
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
    var _closure1_slot14 = var1;
    var4 = function useDesyncedChannelParticipants(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 12;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot9;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot10;
        var2[1] = var5;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = _closure2_slot0;
                var3 = _closure1_slot10;
                var1 = var3.getChannelId;
                var3 = var1.bind(var3)();
                var1 = null;
                if(!(var4 === var3)) { _fun0004_ip = 46; continue _fun0004 }
 30:
                var3 = _closure1_slot9;
                var2 = var3.getDesyncedParticipants;
                var1 = var2.bind(var3)();
 46:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var4;
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
    var _closure1_slot2 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_calls/RTCConnectionDesyncHooks.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useEnsureSyncedChannelVoiceStates(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var6 = arg2;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var6;
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var4 = 12;
            var7 = var8[var4];
            var3 = undefined;
            var11 = var5.bind(var3)(var7);
            var10 = var11.useStateFromStores;
            var7 = _closure1_slot9;
            var9 = new Array(2);
            var9[0] = var7;
            var7 = _closure1_slot10;
            var9[1] = var7;
            var7 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot10;
                    var1 = var3.getChannelId;
                    var3 = var1.bind(var3)();
                    var1 = null;
                    if(!(var4 === var3)) { _fun0006_ip = 46; continue _fun0006 }
 30:
                    var3 = _closure1_slot9;
                    var2 = var3.getDesyncedVoiceStates;
                    var1 = var2.bind(var3)();
 46:
                    return var1;
                }
            };
            var7 = var10.bind(var11)(var9, var7);
            var _closure2_slot2 = var7;
            var9 = var8[var4];
            var12 = var5.bind(var3)(var9);
            var11 = var12.useStateFromStoresArray;
            var9 = _closure1_slot4;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 50; continue _fun0007 }
 13:
                    var3 = _closure1_slot4;
                    var2 = var3.getGuildRingingUsers;
                    var1 = _closure2_slot0;
                    var5 = var2.bind(var3)(var1);
                    var1 = new Array(0);
                    var4 = 0;
                    var6 = var1;
                    var2 = arraySpread(var6, var5, var4);
                    _fun0007_ip = 54; continue _fun0007;
 50:
                    var1 = new Array(0);
 54:
                    return var1;
                }
            };
            var9 = var11.bind(var12)(var10, var9);
            var _closure2_slot3 = var9;
            var9 = var8[var4];
            var12 = var5.bind(var3)(var9);
            var11 = var12.useStateFromStoresArray;
            var9 = _closure1_slot11;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var3 = _closure2_slot3;
                var2 = var3.map;
                var1 = function(arg1) {
                    var3 = _closure1_slot11;
                    var2 = var3.getUser;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 13;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var11.bind(var12)(var10, var9);
            var _closure2_slot4 = var10;
            var4 = var8[var4];
            var9 = var5.bind(var3)(var4);
            var8 = var9.useStateFromStores;
            var4 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getBasicChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var8.bind(var9)(var5, var4);
            var _closure2_slot5 = var9;
            var8 = _closure1_slot3;
            var5 = var8.useMemo;
            var4 = new Array(2);
            var4[0] = var10;
            var10 = null;
            var10 = var10 == var9;
            if(var10) { _fun0005_ip = 245; continue _fun0005 }
 240:
            var3 = var9.guild_id;
 245:
            var4[1] = var3;
            var3 = function() {
                var3 = _closure2_slot4;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var2 = arg1;
                        var1 = {};
                        var6 = _closure1_slot5;
                        var11 = var2.id;
                        var4 = var6.prototype;
                        var4 = Object.create(var4, {constructor: {value: var6}});
                        var12 = var4;
                        var3 = new var12[var6](var11, var10);
                        var3 = var3 instanceof Object ? var3 : var4;
                        var1['voiceState'] = var3;
                        var1['user'] = var2;
                        var3 = _closure2_slot5;
                        var9 = null;
                        var6 = var9 == var3;
                        var3 = undefined;
                        if(var6) { _fun0008_ip = 73; continue _fun0008 }
 64:
                        var6 = _closure2_slot5;
                        var3 = var6.guild_id;
 73:
                        var6 = var9 != var3;
                        var3 = null;
                        if(!var6) { _fun0008_ip = 125; continue _fun0008 }
 82:
                        var6 = _closure1_slot8;
                        var5 = var6.getMember;
                        var8 = _closure2_slot5;
                        var8 = var9 == var8;
                        var7 = undefined;
                        if(var8) { _fun0008_ip = 114; continue _fun0008 }
 105:
                        var4 = _closure2_slot5;
                        var7 = var4.guild_id;
 114:
                        var4 = var2.id;
                        var3 = var5.bind(var6)(var7, var4);
 125:
                        var1['member'] = var3;
                        var3 = var2.globalName;
                        var1['nick'] = var3;
                        var2 = var2.globalName;
                        var1['comparator'] = var2;
                        var2 = false;
                        var1['_isPlaceholder'] = var2;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var5.bind(var8)(var3, var4);
            var _closure2_slot6 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var5;
            var1 = function() {
                var5 = _closure2_slot2;
                var4 = _closure2_slot1;
                var3 = _closure2_slot6;
                var2 = function syncChannelVoiceStates(arg1, arg2, arg3) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var7 = arg1;
                        var1 = arg2;
                        var5 = arg3;
                        var4 = null;
                        if(!(var4 != var7)) { _fun0009_ip = 28; continue _fun0009 }
 17:
                        var6 = var7.length;
                        var2 = 0;
                        if(!(var2 === var6)) { _fun0009_ip = 42; continue _fun0009 }
 28:
                        var6 = var5.length;
                        var2 = 0;
                        if(!(var2 !== var6)) { _fun0009_ip = 209; continue _fun0009 }
 42:
                        var2 = new Array(0);
                        var _closure4_slot0 = var2;
                        var6 = global;
                        var6 = var6.Set;
                        var8 = var6.prototype;
                        var8 = Object.create(var8, {constructor: {value: var6}});
                        var14 = var8;
                        var6 = new var14[var6](var13);
                        var11 = var6 instanceof Object ? var6 : var8;
                        var _closure4_slot1 = var11;
                        var6 = _closure1_slot13;
                        var10 = undefined;
                        var9 = var6.bind(var10)(var1);
                        var8 = var9.bind(var10)();
                        var6 = var8.done;
                        if(var6) { _fun0009_ip = 158; continue _fun0009 }
 108:
                        var6 = var8.value;
                        var12 = var2.push;
                        var12 = var12.bind(var2)(var6);
                        var12 = var11.add;
                        var6 = var6.user;
                        var6 = var6.id;
                        var6 = var12.bind(var11)(var6);
                        var12 = var9.bind(var10)();
                        var6 = var12.done;
                        var8 = var12;
                        if(!var6) { _fun0009_ip = 108; continue _fun0009 }
 158:
                        if(!(var4 != var7)) { _fun0009_ip = 179; continue _fun0009 }
 162:
                        var6 = var7.forEach;
                        var4 = function(arg1) {
                            var6 = arg1;
                            var5 = _closure4_slot0;
                            var4 = var5.splice;
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 11;
                            var3 = var3[var1];
                            var1 = undefined;
                            var8 = var7.bind(var1)(var3);
                            var7 = var8.sortedIndexBy;
                            var3 = _closure4_slot0;
                            var2 = function(arg1) {
                                var1 = arg1;
                                var1 = var1.comparator;
                                return var1;
                            };
                            var3 = var7.bind(var8)(var3, var6, var2);
                            var2 = 0;
                            var2 = var4.bind(var5)(var3, var2, var6);
                            return var1;
                        };
                        var4 = var6.bind(var7)(var4);
 179:
                        var6 = var5.length;
                        var4 = 0;
                        if(!(var6 > var4)) { _fun0009_ip = 207; continue _fun0009 }
 190:
                        var4 = var5.forEach;
                        var3 = function(arg1) {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                                var5 = arg1;
                                var4 = _closure4_slot1;
                                var3 = var4.has;
                                var2 = var5.user;
                                var2 = var2.id;
                                var2 = var3.bind(var4)(var2);
                                if(var2) { _fun0010_ip = 103; continue _fun0010 }
 33:
                                var4 = _closure4_slot0;
                                var3 = var4.splice;
                                var7 = _closure1_slot0;
                                var6 = _closure1_slot1;
                                var2 = 11;
                                var6 = var6[var2];
                                var2 = undefined;
                                var7 = var7.bind(var2)(var6);
                                var6 = var7.sortedIndexBy;
                                var2 = _closure4_slot0;
                                var1 = function(arg1) {
                                    var1 = arg1;
                                    var1 = var1.comparator;
                                    return var1;
                                };
                                var2 = var6.bind(var7)(var2, var5, var1);
                                var1 = 0;
                                var1 = var3.bind(var4)(var2, var1, var5);
 103:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var3 = var4.bind(var5)(var3);
 207:
                        return var2;
 209:
                        return var1;
                    }
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var5, var4, var3);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useEnsureSyncedChannelVoiceStates'] = var5;
    var3['useDesyncedChannelParticipants'] = var4;
    var4 = function useEnsureSyncedChannelParticipants(arg1, arg2) {
        var5 = arg2;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot15;
        var4 = undefined;
        var3 = arg1;
        var6 = var6.bind(var4)(var3);
        var _closure2_slot1 = var6;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var4 = _closure2_slot1;
            var3 = _closure2_slot0;
            var2 = function syncChannelParticipants(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var5 = arg1;
                    var1 = arg2;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0011_ip = 64; continue _fun0011 }
 14:
                    var2 = var5.length;
                    var4 = 0;
                    if(!(var4 !== var2)) { _fun0011_ip = 64; continue _fun0011 }
 25:
                    var2 = new Array(0);
                    var8 = var2;
                    var7 = var1;
                    var6 = 0;
                    var4 = arraySpread(var8, var7, var6);
                    var _closure4_slot0 = var2;
                    var4 = var5.forEach;
                    var3 = function(arg1) {
                        var6 = arg1;
                        var5 = _closure4_slot0;
                        var4 = var5.splice;
                        var7 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 11;
                        var3 = var3[var1];
                        var1 = undefined;
                        var8 = var7.bind(var1)(var3);
                        var7 = var8.sortedIndexBy;
                        var3 = _closure4_slot0;
                        var2 = function(arg1) {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.sortKey;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var3 = var7.bind(var8)(var3, var6, var2);
                        var2 = 0;
                        var2 = var4.bind(var5)(var3, var2, var6);
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
                    return var2;
 64:
                    return var1;
                }
            };
            var1 = undefined;
            var1 = var2.bind(var1)(var4, var3);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useEnsureSyncedChannelParticipants'] = var4;
    var2 = function useIsRTCDisconnectedUIVisible(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var10 = arg1;
            var _closure2_slot0 = var10;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var13 = _closure1_slot0;
            var14 = _closure1_slot1;
            var11 = 12;
            var1 = var14[var11];
            var12 = undefined;
            var5 = var13.bind(var12)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getId;
                var2 = var1.bind(var2)();
                var1 = _closure2_slot1;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var3.bind(var5)(var2, var1);
            var2 = var14[var11];
            var6 = var13.bind(var12)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var5.bind(var6)(var3, var2);
            var _closure2_slot2 = var5;
            var7 = _closure1_slot3;
            var3 = var7.useRef;
            var2 = null;
            var2 = var3.bind(var7)(var2);
            var _closure2_slot3 = var2;
            var2 = var7.useState;
            var17 = false;
            var2 = var2.bind(var7)(var17);
            var16 = _closure1_slot2;
            var15 = 2;
            var6 = var16.bind(var12)(var2, var15);
            var3 = 0;
            var2 = var6[var3];
            var8 = 1;
            var6 = var6[var8];
            var _closure2_slot4 = var6;
            var6 = var7.useState;
            var6 = var6.bind(var7)(var17);
            var6 = var16.bind(var12)(var6, var15);
            var3 = var6[var3];
            var6 = var6[var8];
            var _closure2_slot5 = var6;
            var6 = var14[var11];
            var17 = var13.bind(var12)(var6);
            var16 = var17.useStateFromStores;
            var6 = _closure1_slot10;
            var15 = new Array(2);
            var15[0] = var6;
            var8 = _closure1_slot12;
            var15[1] = var8;
            var6 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var1 = var4 != var1;
                    if(!var1) { _fun0013_ip = 24; continue _fun0013 }
 16:
                    var3 = _closure2_slot0;
                    var1 = var4 != var3;
 24:
                    if(!var1) { _fun0013_ip = 52; continue _fun0013 }
 27:
                    var5 = _closure1_slot10;
                    var3 = var5.getChannelId;
                    var5 = var3.bind(var5)();
                    var3 = _closure2_slot0;
                    var1 = var5 === var3;
 52:
                    if(!var1) { _fun0013_ip = 86; continue _fun0013 }
 55:
                    var7 = _closure1_slot12;
                    var6 = var7.isInChannel;
                    var5 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var3 = var6.bind(var7)(var5, var3);
                    var1 = var4 != var3;
 86:
                    if(!var1) { _fun0013_ip = 111; continue _fun0013 }
 89:
                    var4 = _closure1_slot10;
                    var3 = var4.isUserConnected;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
 111:
                    return var1;
                }
            };
            var6 = var16.bind(var17)(var15, var6);
            var _closure2_slot6 = var6;
            var11 = var14[var11];
            var12 = var13.bind(var12)(var11);
            var11 = var12.useStateFromStores;
            var13 = _closure1_slot10;
            var9 = new Array(2);
            var9[0] = var13;
            var9[1] = var8;
            var8 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var1 = var4 != var1;
                    if(!var1) { _fun0014_ip = 24; continue _fun0014 }
 16:
                    var3 = _closure2_slot0;
                    var1 = var4 != var3;
 24:
                    if(!var1) { _fun0014_ip = 52; continue _fun0014 }
 27:
                    var5 = _closure1_slot10;
                    var3 = var5.getChannelId;
                    var5 = var3.bind(var5)();
                    var3 = _closure2_slot0;
                    var1 = var5 === var3;
 52:
                    if(!var1) { _fun0014_ip = 86; continue _fun0014 }
 55:
                    var7 = _closure1_slot12;
                    var6 = var7.isInChannel;
                    var5 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var3 = var6.bind(var7)(var5, var3);
                    var1 = var4 != var3;
 86:
                    if(!var1) { _fun0014_ip = 114; continue _fun0014 }
 89:
                    var4 = _closure1_slot10;
                    var3 = var4.isUserConnected;
                    var2 = _closure2_slot1;
                    var2 = var3.bind(var4)(var2);
                    var1 = !var2;
 114:
                    return var1;
                }
            };
            var8 = var11.bind(var12)(var9, var8);
            var _closure2_slot7 = var8;
            var11 = var7.useEffect;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var2 = _closure2_slot6;
                    if(!var2) { _fun0015_ip = 23; continue _fun0015 }
 10:
                    var3 = _closure2_slot5;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var11.bind(var7)(var6, var9);
            var9 = var7.useEffect;
            var6 = new Array(2);
            var6[0] = var10;
            var6[1] = var5;
            var5 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    if(!(var3 !== var2)) { _fun0016_ip = 28; continue _fun0016 }
 15:
                    var3 = _closure2_slot5;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var9.bind(var7)(var5, var6);
            var6 = var7.useEffect;
            var5 = new Array(1);
            var5[0] = var8;
            var4 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var3 = _closure2_slot7;
                    if(!var3) { _fun0017_ip = 27; continue _fun0017 }
 12:
                    var3 = _closure2_slot3;
                    var4 = var3.current;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0017_ip = 72; continue _fun0017 }
 27:
                    var3 = global;
                    var6 = var3.clearTimeout;
                    var4 = _closure2_slot3;
                    var3 = var4.current;
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var3 = null;
                    var4['current'] = var3;
                    var4 = _closure2_slot4;
                    var3 = false;
                    var3 = var4.bind(var5)(var3);
                    _fun0017_ip = 108; continue _fun0017;
 72:
                    var3 = _closure2_slot3;
                    var2 = global;
                    var6 = var2.setTimeout;
                    var5 = undefined;
                    var4 = function() {
                        var3 = _closure2_slot3;
                        var2 = null;
                        var3['current'] = var2;
                        var3 = _closure2_slot4;
                        var1 = undefined;
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = 250;
                    var2 = var6.bind(var5)(var4, var2);
                    var3['current'] = var2;
 108:
                    var1 = function() {
                        var1 = global;
                        var4 = var1.clearTimeout;
                        var3 = _closure2_slot3;
                        var2 = var3.current;
                        var1 = undefined;
                        var2 = var4.bind(var1)(var2);
                        var2 = null;
                        var3['current'] = var2;
                        return var1;
                    };
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var4, var5);
            var1 = !var1;
            if(!var1) { _fun0012_ip = 393; continue _fun0012 }
 390:
            var1 = var3;
 393:
            if(!var1) { _fun0012_ip = 399; continue _fun0012 }
 396:
            var1 = var2;
 399:
            return var1;
        }
    };
    var3['useIsRTCDisconnectedUIVisible'] = var2;
    return var1;
})();