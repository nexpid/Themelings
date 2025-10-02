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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot14;
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
            var7 = _closure1_slot14;
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
    var _closure1_slot13 = var1;
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
case 0:
                var4 = _closure2_slot0;
                var3 = _closure1_slot10;
                var1 = var3.getChannelId;
                var3 = var1.bind(var3)();
                var1 = null;
                if(!(var4 === var3)) { _fun0004_ip = 2; continue _fun0004 }
case 3:
                var3 = _closure1_slot9;
                var2 = var3.getDesyncedParticipants;
                var1 = var2.bind(var3)();
case 2:
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
case 0:
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
case 0:
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot10;
                    var1 = var3.getChannelId;
                    var3 = var1.bind(var3)();
                    var1 = null;
                    if(!(var4 === var3)) { _fun0006_ip = 2; continue _fun0006 }
case 3:
                    var3 = _closure1_slot9;
                    var2 = var3.getDesyncedVoiceStates;
                    var1 = var2.bind(var3)();
case 2:
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
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                    var3 = _closure1_slot4;
                    var2 = var3.getGuildRingingUsers;
                    var1 = _closure2_slot0;
                    var5 = var2.bind(var3)(var1);
                    var1 = new Array(0);
                    var4 = 0;
                    var6 = var1;
                    var2 = arraySpread(var6, var5, var4);
                    _fun0007_ip = 38; continue _fun0007;
case 36:
                    var1 = new Array(0);
case 38:
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
            if(var10) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var3 = var9.guild_id;
case 39:
            var4[1] = var3;
            var3 = function() {
                var3 = _closure2_slot4;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
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
                        if(var6) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                        var6 = _closure2_slot5;
                        var3 = var6.guild_id;
case 41:
                        var6 = var9 != var3;
                        var3 = null;
                        if(!var6) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                        var6 = _closure1_slot8;
                        var5 = var6.getMember;
                        var8 = _closure2_slot5;
                        var8 = var9 == var8;
                        var7 = undefined;
                        if(var8) { _fun0008_ip = 45; continue _fun0008 }
case 46:
                        var4 = _closure2_slot5;
                        var7 = var4.guild_id;
case 45:
                        var4 = var2.id;
                        var3 = var5.bind(var6)(var7, var4);
case 43:
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
case 0:
                        var7 = arg1;
                        var1 = arg2;
                        var5 = arg3;
                        var4 = null;
                        if(!(var4 != var7)) { _fun0009_ip = 34; continue _fun0009 }
case 47:
                        var6 = var7.length;
                        var2 = 0;
                        if(!(var2 === var6)) { _fun0009_ip = 48; continue _fun0009 }
case 34:
                        var6 = var5.length;
                        var2 = 0;
                        if(!(var2 !== var6)) { _fun0009_ip = 49; continue _fun0009 }
case 48:
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
                        if(var6) { _fun0009_ip = 15; continue _fun0009 }
case 50:
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
                        if(!var6) { _fun0009_ip = 50; continue _fun0009 }
case 15:
                        if(!(var4 != var7)) { _fun0009_ip = 16; continue _fun0009 }
case 51:
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
case 16:
                        var6 = var5.length;
                        var4 = 0;
                        if(!(var6 > var4)) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                        var4 = var5.forEach;
                        var3 = function(arg1) {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                var5 = arg1;
                                var4 = _closure4_slot1;
                                var3 = var4.has;
                                var2 = var5.user;
                                var2 = var2.id;
                                var2 = var3.bind(var4)(var2);
                                if(var2) { _fun0010_ip = 54; continue _fun0010 }
case 33:
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
case 54:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var3 = var4.bind(var5)(var3);
case 52:
                        return var2;
case 49:
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
case 0:
                    var5 = arg1;
                    var1 = arg2;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0011_ip = 42; continue _fun0011 }
case 32:
                    var2 = var5.length;
                    var4 = 0;
                    if(!(var4 !== var2)) { _fun0011_ip = 42; continue _fun0011 }
case 55:
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
case 42:
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
case 0:
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
case 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var1 = var4 != var1;
                    if(!var1) { _fun0013_ip = 56; continue _fun0013 }
case 57:
                    var3 = _closure2_slot0;
                    var1 = var4 != var3;
case 56:
                    if(!var1) { _fun0013_ip = 58; continue _fun0013 }
case 59:
                    var5 = _closure1_slot10;
                    var3 = var5.getChannelId;
                    var5 = var3.bind(var5)();
                    var3 = _closure2_slot0;
                    var1 = var5 === var3;
case 58:
                    if(!var1) { _fun0013_ip = 9; continue _fun0013 }
case 4:
                    var7 = _closure1_slot12;
                    var6 = var7.isInChannel;
                    var5 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var3 = var6.bind(var7)(var5, var3);
                    var1 = var4 != var3;
case 9:
                    if(!var1) { _fun0013_ip = 60; continue _fun0013 }
case 61:
                    var4 = _closure1_slot10;
                    var3 = var4.isUserConnected;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 60:
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
case 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var1 = var4 != var1;
                    if(!var1) { _fun0014_ip = 56; continue _fun0014 }
case 57:
                    var3 = _closure2_slot0;
                    var1 = var4 != var3;
case 56:
                    if(!var1) { _fun0014_ip = 58; continue _fun0014 }
case 59:
                    var5 = _closure1_slot10;
                    var3 = var5.getChannelId;
                    var5 = var3.bind(var5)();
                    var3 = _closure2_slot0;
                    var1 = var5 === var3;
case 58:
                    if(!var1) { _fun0014_ip = 9; continue _fun0014 }
case 4:
                    var7 = _closure1_slot12;
                    var6 = var7.isInChannel;
                    var5 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var3 = var6.bind(var7)(var5, var3);
                    var1 = var4 != var3;
case 9:
                    if(!var1) { _fun0014_ip = 45; continue _fun0014 }
case 61:
                    var4 = _closure1_slot10;
                    var3 = var4.isUserConnected;
                    var2 = _closure2_slot1;
                    var2 = var3.bind(var4)(var2);
                    var1 = !var2;
case 45:
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
case 0:
                    var2 = _closure2_slot6;
                    if(!var2) { _fun0015_ip = 31; continue _fun0015 }
case 62:
                    var3 = _closure2_slot5;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 31:
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
case 0:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    if(!(var3 !== var2)) { _fun0016_ip = 34; continue _fun0016 }
case 63:
                    var3 = _closure2_slot5;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
case 34:
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
case 0:
                    var3 = _closure2_slot7;
                    if(!var3) { _fun0017_ip = 59; continue _fun0017 }
case 64:
                    var3 = _closure2_slot3;
                    var4 = var3.current;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0017_ip = 65; continue _fun0017 }
case 59:
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
                    _fun0017_ip = 50; continue _fun0017;
case 65:
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
case 50:
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
            if(!var1) { _fun0012_ip = 66; continue _fun0012 }
case 67:
            var1 = var3;
case 66:
            if(!var1) { _fun0012_ip = 68; continue _fun0012 }
case 69:
            var1 = var2;
case 68:
            return var1;
        }
    };
    var3['useIsRTCDisconnectedUIVisible'] = var2;
    return var1;
})();