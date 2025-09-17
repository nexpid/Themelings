// app/modules/calls/ChannelRTCStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            _closure1_slot42 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot42 = var1;
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
            if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0002_ip = 343; continue _fun0002 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
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
            if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
            var9 = _closure1_slot44;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0002_ip = 265; continue _fun0002;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0002_ip = 283; continue _fun0002;
 270:
            var7 = _closure1_slot44;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0002_ip = 323; continue _fun0002 }
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
            if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
            _closure2_slot0 = var4;
 330:
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
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot43 = var1;
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
    var _closure1_slot44 = var1;
    var1 = function _getParticipants(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var1 = _closure1_slot31;
            var1 = var1[var4];
            var2 = null;
            if(!(var2 == var1)) { _fun0005_ip = 76; continue _fun0005 }
 20:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 21;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var5 = var2.prototype;
            var5 = Object.create(var5, {constructor: {value: var2}});
            var8 = var5;
            var7 = var4;
            var2 = new var8[var2](var7, var6);
            var2 = var2 instanceof Object ? var2 : var5;
            var3 = _closure1_slot31;
            var3[var4] = var2;
            var1 = var2;
 76:
            return var1;
        }
    };
    var _closure1_slot45 = var1;
    var1 = function updateParticipants(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arguments[1];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var4 === var2)) { _fun0006_ip = 25; continue _fun0006 }
 18:
            var4 = _closure1_slot30;
 25:
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = arg1;
                    var4 = arg2;
                    var5 = _closure1_slot45;
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = _closure2_slot0;
                    var5 = var5.bind(var3)(var6);
                    if(!var5) { _fun0007_ip = 162; continue _fun0007 }
 38:
                    var5 = _closure1_slot45;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.size;
                    var7 = var5.bind(var6)();
                    var5 = 0;
                    if(!(var5 !== var7)) { _fun0007_ip = 148; continue _fun0007 }
 62:
                    var5 = _closure1_slot57;
                    var5 = var5.bind(var3)(var4);
                    if(var5) { _fun0007_ip = 98; continue _fun0007 }
 74:
                    var5 = _closure1_slot52;
                    var5 = var5.bind(var3)(var6);
                    if(var5) { _fun0007_ip = 98; continue _fun0007 }
 86:
                    var5 = _closure1_slot25;
                    var6 = var5.VOICE;
                    _fun0007_ip = 108; continue _fun0007;
 98:
                    var5 = _closure1_slot25;
                    var6 = var5.VIDEO;
 108:
                    var5 = _closure1_slot25;
                    var5 = var5.VOICE;
                    if(!(var6 !== var5)) { _fun0007_ip = 132; continue _fun0007 }
 122:
                    var5 = _closure1_slot34;
                    var5[var4] = var6;
                    _fun0007_ip = 148; continue _fun0007;
 132:
                    var5 = _closure1_slot34;
                    var5 = delete var5[var4];
                    var2 = _closure1_slot35;
                    var2 = delete var2[var4];
 148:
                    var2 = function updateSelectedParticipantId(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var4 = arg1;
                            var3 = _closure1_slot12;
                            var1 = var3.getId;
                            var7 = var1.bind(var3)();
                            var _closure4_slot0 = var7;
                            var3 = _closure1_slot45;
                            var1 = undefined;
                            var8 = var3.bind(var1)(var4);
                            var3 = var8.size;
                            var3 = var3.bind(var8)();
                            var5 = 0;
                            if(!(var5 !== var3)) { _fun0008_ip = 553; continue _fun0008 }
 55:
                            var6 = _closure1_slot16;
                            var3 = var6.getVoiceChannelId;
                            var3 = var3.bind(var6)();
                            if(!(var3 === var4)) { _fun0008_ip = 553; continue _fun0008 }
 76:
                            var3 = _closure1_slot22;
                            var3 = var3.NONE;
                            var6 = var8.toArray;
                            var10 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var13 = 21;
                            var3 = var3[var13];
                            var3 = var10.bind(var1)(var3);
                            var3 = var3.ChannelRTCParticipantsIndexes;
                            var3 = var3.STREAM;
                            var10 = var6.bind(var8)(var3);
                            var6 = var10.find;
                            var3 = function(arg1) {
                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                                    var2 = arg1;
                                    var4 = var2.type;
                                    var1 = _closure1_slot21;
                                    var1 = var1.STREAM;
                                    var1 = var4 === var1;
                                    if(!var1) { _fun0009_ip = 48; continue _fun0009 }
 28:
                                    var4 = _closure1_slot11;
                                    var3 = var4.getActiveStreamForStreamKey;
                                    var2 = var2.id;
                                    var1 = var3.bind(var4)(var2);
 48:
                                    return var1;
                                }
                            };
                            var3 = var6.bind(var10)(var3);
                            var10 = null;
                            if(!(var10 == var3)) { _fun0008_ip = 330; continue _fun0008 }
 153:
                            var6 = var8.size;
                            var12 = var6.bind(var8)();
                            var11 = 1;
                            var6 = var7;
                            if(!(var11 !== var12)) { _fun0008_ip = 386; continue _fun0008 }
 175:
                            var14 = var8.size;
                            var15 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var12 = var12[var13];
                            var12 = var15.bind(var1)(var12);
                            var12 = var12.ChannelRTCParticipantsIndexes;
                            var12 = var12.VIDEO;
                            var12 = var14.bind(var8)(var12);
                            if(!(var11 !== var12)) { _fun0008_ip = 269; continue _fun0008 }
 218:
                            var12 = var8.toArray;
                            var14 = var12.bind(var8)();
                            var12 = var14.find;
                            var9 = function(arg1) {
                                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                                    var2 = arg1;
                                    var3 = var2.type;
                                    var1 = _closure1_slot21;
                                    var1 = var1.USER;
                                    var1 = var3 === var1;
                                    if(!var1) { _fun0010_ip = 44; continue _fun0010 }
 28:
                                    var4 = var2.id;
                                    var3 = _closure4_slot0;
                                    var1 = var4 !== var3;
 44:
                                    if(!var1) { _fun0010_ip = 56; continue _fun0010 }
 47:
                                    var2 = var2.ringing;
                                    var1 = !var2;
 56:
                                    return var1;
                                }
                            };
                            var12 = var12.bind(var14)(var9);
                            var14 = var10 == var12;
                            var9 = undefined;
                            if(var14) { _fun0008_ip = 257; continue _fun0008 }
 252:
                            var9 = var12.id;
 257:
                            if(!(var10 != var9)) { _fun0008_ip = 264; continue _fun0008 }
 261:
                            var7 = var9;
 264:
                            var6 = var7;
                            _fun0008_ip = 386; continue _fun0008;
 269:
                            var9 = var8.toArray;
                            var12 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var7 = var7[var13];
                            var7 = var12.bind(var1)(var7);
                            var7 = var7.ChannelRTCParticipantsIndexes;
                            var7 = var7.VIDEO;
                            var9 = var9.bind(var8)(var7);
                            var7 = _closure1_slot8;
                            var7 = var7.bind(var1)(var9, var11);
                            var7 = var7[var5];
                            var6 = var7.id;
                            _fun0008_ip = 386; continue _fun0008;
 330:
                            var9 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var7 = 23;
                            var7 = var11[var7];
                            var11 = var9.bind(var1)(var7);
                            var9 = var3.type;
                            var7 = _closure1_slot21;
                            var7 = var7.STREAM;
                            var9 = var9 === var7;
                            var7 = 'Impossible condition';
                            var7 = var11.bind(var1)(var9, var7);
                            var6 = var3.id;
 386:
                            var3 = _closure1_slot48;
                            var9 = var3.bind(var1)(var4);
                            var7 = _closure1_slot8;
                            var3 = 1;
                            var3 = var7.bind(var1)(var9, var3);
                            var5 = var3[var5];
                            var3 = _closure1_slot22;
                            var3 = var3.AUTO;
                            var7 = var5;
                            if(!(var7 !== var3)) { _fun0008_ip = 529; continue _fun0008 }
 429:
                            var3 = _closure1_slot22;
                            var3 = var3.NONE;
                            var7 = var5;
                            if(!(var5 !== var3)) { _fun0008_ip = 529; continue _fun0008 }
 446:
                            var3 = var8.getParticipant;
                            var9 = var3.bind(var8)(var5);
                            var3 = var10 == var9;
                            if(var3) { _fun0008_ip = 513; continue _fun0008 }
 464:
                            var11 = var9.type;
                            var8 = _closure1_slot21;
                            var8 = var8.STREAM;
                            var8 = var11 === var8;
                            if(!var8) { _fun0008_ip = 510; continue _fun0008 }
 486:
                            var12 = _closure1_slot11;
                            var11 = var12.getActiveStreamForStreamKey;
                            var9 = var9.id;
                            var9 = var11.bind(var12)(var9);
                            var8 = var10 == var9;
 510:
                            var3 = var8;
 513:
                            var7 = var5;
                            if(!var3) { _fun0008_ip = 529; continue _fun0008 }
 519:
                            var3 = _closure1_slot22;
                            var7 = var3.NONE;
 529:
                            var5 = _closure1_slot51;
                            var3 = new Array(2);
                            var3[0] = var7;
                            var3[1] = var6;
                            var3 = var5.bind(var1)(var4, var3);
                            return var1;
 553:
                            var3 = _closure1_slot51;
                            var2 = null;
                            var2 = var3.bind(var1)(var4, var2);
                            return var1;
                        }
                    };
                    var2 = var2.bind(var3)(var4);
                    var1 = true;
 162:
                    return var1;
                }
            };
            var1 = false;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot46 = var1;
    var1 = function updateParticipant(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var4 = arguments[1];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = undefined;
            if(!(var4 === var3)) { _fun0011_ip = 25; continue _fun0011 }
 18:
            var4 = _closure1_slot30;
 25:
            var2 = _closure1_slot46;
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
    var _closure1_slot47 = var1;
    var1 = function _getSelectedParticipantId(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var5 = arg1;
            var2 = _closure1_slot14;
            var1 = var2.getChannel;
            var4 = var1.bind(var2)(var5);
            var2 = null;
            if(!(var2 != var4)) { _fun0012_ip = 36; continue _fun0012 }
 26:
            var1 = var4.isDM;
            var1 = var1.bind(var4)();
 36:
            var1 = _closure1_slot22;
            var4 = var1.NONE;
            var1 = _closure1_slot32;
            var1 = var1[var5];
            if(!(var2 == var1)) { _fun0012_ip = 83; continue _fun0012 }
 58:
            var2 = new Array(2);
            var2[0] = var4;
            var3 = _closure1_slot22;
            var3 = var3.NONE;
            var2[1] = var3;
            var1 = var2;
 83:
            return var1;
        }
    };
    var _closure1_slot48 = var1;
    var1 = function getHasSelectedParticipant(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var4 = arg1;
            var1 = _closure1_slot32;
            var3 = var1[var4];
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0013_ip = 66; continue _fun0013 }
 23:
            var6 = _closure1_slot8;
            var3 = _closure1_slot32;
            var5 = var3[var4];
            var4 = undefined;
            var3 = 1;
            var4 = var6.bind(var4)(var5, var3);
            var3 = 0;
            var3 = var4[var3];
            var2 = _closure1_slot22;
            var2 = var2.NONE;
            var1 = var3 !== var2;
 66:
            return var1;
        }
    };
    var _closure1_slot49 = var1;
    var1 = function updateElapsedSelectedParticipantStats(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var5 = arg1;
            var2 = _closure1_slot33;
            var3 = var2[var5];
            var2 = null;
            if(!(var2 == var3)) { _fun0014_ip = 38; continue _fun0014 }
 20:
            var3 = _closure1_slot33;
            var2 = {'gridDurationMs': 0, 'focusDurationMs': 0, 'toggleCount': 0, 'lastUpdate': 0};
            var3[var5] = var2;
 38:
            var2 = _closure1_slot33;
            var3 = var2[var5];
            var2 = global;
            var4 = var2.performance;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var4 = _closure1_slot49;
            var1 = undefined;
            var4 = var4.bind(var1)(var5);
            var6 = var3.lastUpdate;
            var5 = 0;
            if(!(var6 > var5)) { _fun0014_ip = 119; continue _fun0014 }
 86:
            var5 = var3.lastUpdate;
            var6 = var2 - var5;
            var5 = 'gridDurationMs';
            if(!var4) { _fun0014_ip = 107; continue _fun0014 }
 103:
            var5 = 'focusDurationMs';
 107:
            var4 = var3[var5];
            var4 = var4 + var6;
            var3[var5] = var4;
 119:
            var3['lastUpdate'] = var2;
            return var1;
        }
    };
    var _closure1_slot50 = var1;
    var1 = function setSelectedParticipantId(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var3 = arg1;
            var6 = arg2;
            var4 = _closure1_slot50;
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var4 = _closure1_slot49;
            var5 = var4.bind(var1)(var3);
            var4 = null;
            if(!(var4 != var6)) { _fun0015_ip = 45; continue _fun0015 }
 35:
            var4 = _closure1_slot32;
            var4[var3] = var6;
            _fun0015_ip = 53; continue _fun0015;
 45:
            var4 = _closure1_slot32;
            var4 = delete var4[var3];
 53:
            var4 = _closure1_slot49;
            var4 = var4.bind(var1)(var3);
            if(!(var5 !== var4)) { _fun0015_ip = 89; continue _fun0015 }
 66:
            var2 = _closure1_slot33;
            var3 = var2[var3];
            var2 = var3.toggleCount;
            var2 = var2 + 1;
            var3['toggleCount'] = var2;
 89:
            return var1;
        }
    };
    var _closure1_slot51 = var1;
    var1 = function hasVideo(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var3 = arg1;
            var4 = var3.size;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 21;
            var1 = var1[var8];
            var7 = undefined;
            var1 = var5.bind(var7)(var1);
            var1 = var1.ChannelRTCParticipantsIndexes;
            var1 = var1.STREAM;
            var1 = var4.bind(var3)(var1);
            var4 = 0;
            var1 = var1 > var4;
            if(var1) { _fun0016_ip = 102; continue _fun0016 }
 59:
            var5 = var3.size;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var6.bind(var7)(var2);
            var2 = var2.ChannelRTCParticipantsIndexes;
            var2 = var2.VIDEO;
            var2 = var5.bind(var3)(var2);
            var1 = var2 > var4;
 102:
            if(var1) { _fun0016_ip = 117; continue _fun0016 }
 105:
            var2 = var3.hasEmbeddedActivity;
            var1 = var2.bind(var3)();
 117:
            return var1;
        }
    };
    var _closure1_slot52 = var1;
    var1 = function clearChannel(arg1) {
        var2 = arg1;
        var3 = _closure1_slot31;
        var3 = delete var3[var2];
        var3 = _closure1_slot32;
        var3 = delete var3[var2];
        var3 = _closure1_slot34;
        var3 = delete var3[var2];
        var1 = _closure1_slot35;
        var1 = delete var1[var2];
        var1 = undefined;
        return var1;
    };
    var _closure1_slot53 = var1;
    var15 = function handleRebuildActiveChannels() {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var4 = _closure1_slot46;
            var1 = new Array(0);
            var3 = _closure1_slot16;
            var2 = var3.getChannelId;
            var6 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var6)) { _fun0017_ip = 41; continue _fun0017 }
 31:
            var3 = var1.push;
            var3 = var3.bind(var1)(var6);
 41:
            var6 = _closure1_slot16;
            var3 = var6.getVoiceChannelId;
            var6 = var3.bind(var6)();
            var3 = var2 == var6;
            if(var3) { _fun0017_ip = 72; continue _fun0017 }
 62:
            var7 = var1.includes;
            var3 = var7.bind(var1)(var6);
 72:
            if(var3) { _fun0017_ip = 85; continue _fun0017 }
 75:
            var3 = var1.push;
            var3 = var3.bind(var1)(var6);
 85:
            var6 = _closure1_slot10;
            var3 = var6.getRemoteSessionId;
            var8 = var3.bind(var6)();
            var7 = _closure1_slot20;
            var6 = var7.getVoiceStateForSession;
            var9 = _closure1_slot12;
            var3 = var9.getId;
            var3 = var3.bind(var9)();
            var7 = var6.bind(var7)(var3, var8);
            var8 = var2 == var7;
            var3 = undefined;
            var6 = undefined;
            if(var8) { _fun0017_ip = 145; continue _fun0017 }
 140:
            var6 = var7.channelId;
 145:
            if(!(var2 != var6)) { _fun0017_ip = 173; continue _fun0017 }
 149:
            var6 = var1.push;
            var8 = var2 == var7;
            var2 = undefined;
            if(var8) { _fun0017_ip = 168; continue _fun0017 }
 163:
            var2 = var7.channelId;
 168:
            var2 = var6.bind(var1)(var2);
 173:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 22;
            var8 = var7[var2];
            var10 = var6.bind(var3)(var8);
            var9 = var10.difference;
            var8 = _closure1_slot30;
            var10 = var9.bind(var10)(var8, var1);
            var9 = var10.forEach;
            var8 = _closure1_slot53;
            var8 = var9.bind(var10)(var8);
            var2 = var7[var2];
            var7 = var6.bind(var3)(var2);
            var6 = var7.difference;
            var2 = _closure1_slot30;
            var2 = var6.bind(var7)(var1, var2);
            _closure1_slot30 = var1;
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
    var _closure1_slot54 = var15;
    var1 = function handleEmbeddedActivityChange() {
        var3 = _closure1_slot46;
        var2 = undefined;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = var2.updateEmbeddedActivities;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot55 = var1;
    var1 = function handlePresenceActivityChange() {
        var2 = _closure1_slot15;
        var1 = var2.getUserIds;
        var3 = var1.bind(var2)();
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot47;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot56 = var1;
    var11 = function handleSpeaking(arg1) {
        var2 = arg1;
        var2 = var2.userId;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot46;
        var2 = undefined;
        var1 = function(arg1) {
            var3 = arg1;
            var2 = var3.updateParticipantSpeaking;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var10 = function handleUserUpdate(arg1) {
        var1 = arg1;
        var1 = var1.user;
        var3 = _closure1_slot47;
        var2 = var1.id;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var13 = function handleCallUpdate(arg1) {
        var1 = arg1;
        var1 = var1.channelId;
        var4 = _closure1_slot46;
        var3 = new Array(1);
        var3[0] = var1;
        var2 = undefined;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = var2.rebuild;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var4.bind(var2)(var1, var3);
        return var1;
    };
    var14 = function handleChannelDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var3 = var1.id;
        var2 = _closure1_slot38;
        var2 = delete var2[var3];
        var2 = _closure1_slot39;
        var2 = delete var2[var3];
        var2 = _closure1_slot40;
        var2 = delete var2[var3];
        var2 = _closure1_slot53;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var12 = function handleStreamClose(arg1) {
        var1 = arg1;
        var5 = var1.streamKey;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 25;
        var1 = var4[var1];
        var4 = undefined;
        var3 = var3.bind(var4)(var1);
        var1 = var3.decodeStreamKey;
        var1 = var1.bind(var3)(var5);
        var5 = var1.channelId;
        var3 = _closure1_slot47;
        var2 = var1.ownerId;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var1 = function isGuildVocal(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = global;
            var3 = var1.Boolean;
            var4 = _closure1_slot14;
            var2 = var4.getChannel;
            var1 = arg1;
            var5 = var2.bind(var4)(var1);
            var1 = null;
            var4 = var1 == var5;
            var2 = undefined;
            var1 = undefined;
            if(var4) { _fun0018_ip = 51; continue _fun0018 }
 41:
            var4 = var5.isGuildVocal;
            var1 = var4.bind(var5)();
 51:
            var1 = var3.bind(var2)(var1);
            return var1;
        }
    };
    var _closure1_slot57 = var1;
    var2 = global;
    var16 = var2.Object;
    var9 = var16.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var16)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 14;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 15;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 16;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot19 = var4;
    var4 = 17;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot20 = var4;
    var4 = 18;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var9 = var4.ParticipantTypes;
    var _closure1_slot21 = var9;
    var9 = var4.ParticipantSelectionTypes;
    var _closure1_slot22 = var9;
    var4 = var4.isStreamParticipant;
    var _closure1_slot23 = var4;
    var4 = 19;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var9 = var4.ChannelLayouts;
    var _closure1_slot24 = var9;
    var9 = var4.ChannelModes;
    var _closure1_slot25 = var9;
    var9 = var4.ChannelTypes;
    var _closure1_slot26 = var9;
    var4 = var4.AppContext;
    var _closure1_slot27 = var4;
    var4 = 20;
    var4 = var7[var4];
    var9 = var8.bind(var1)(var4);
    var4 = var9.prototype;
    var16 = Object.create(var4, {constructor: {value: var9}});
    var4 = 'ChannelRTCStore';
    var20 = var16;
    var19 = var4;
    var9 = new var20[var9](var19, var18);
    var9 = var9 instanceof Object ? var9 : var16;
    var _closure1_slot28 = var9;
    var16 = var2.Object;
    var9 = var16.freeze;
    var2 = new Array(0);
    var2 = var9.bind(var16)(var2);
    var _closure1_slot29 = var2;
    var9 = new Array(0);
    var _closure1_slot30 = var9;
    var9 = {};
    var _closure1_slot31 = var9;
    var9 = {};
    var _closure1_slot32 = var9;
    var9 = {};
    var _closure1_slot33 = var9;
    var9 = {};
    var _closure1_slot34 = var9;
    var9 = {};
    var _closure1_slot35 = var9;
    var9 = {};
    var _closure1_slot36 = var9;
    var9 = {};
    var _closure1_slot37 = var9;
    var9 = {};
    var _closure1_slot38 = var9;
    var9 = {};
    var _closure1_slot39 = var9;
    var9 = {};
    var _closure1_slot40 = var9;
    var9 = {};
    var _closure1_slot41 = var9;
    var9 = 26;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var16 = var9.PersistedStore;
    var9 = function(arg1) {
        var4 = function ChannelRTCStore() {
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
                var1 = _closure1_slot42;
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
        var1 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var6 = arg1;
                var5 = this;
                var15 = var5.waitFor;
                var26 = _closure1_slot11;
                var25 = _closure1_slot12;
                var24 = _closure1_slot13;
                var23 = _closure1_slot14;
                var1 = _closure1_slot9;
                var21 = _closure1_slot15;
                var20 = _closure1_slot16;
                var19 = _closure1_slot17;
                var18 = _closure1_slot18;
                var17 = _closure1_slot19;
                var16 = _closure1_slot20;
                var27 = var5;
                var22 = var1;
                var2 = var27[var15](var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15);
                var4 = var5.syncWith;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = _closure1_slot55;
                var1 = var4.bind(var5)(var2, var1);
                var4 = var5.syncWith;
                var1 = _closure1_slot15;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = _closure1_slot56;
                var1 = var4.bind(var5)(var2, var1);
                var4 = var5.syncWith;
                var1 = _closure1_slot10;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = _closure1_slot54;
                var1 = var4.bind(var5)(var2, var1);
                var2 = null;
                var5 = var2 == var6;
                var1 = undefined;
                var4 = undefined;
                if(var5) { _fun0020_ip = 168; continue _fun0020 }
 162:
                var4 = var6.voiceParticipantsHidden;
 168:
                if(!(var1 !== var4)) { _fun0020_ip = 210; continue _fun0020 }
 172:
                var4 = global;
                var5 = var4.Object;
                var4 = var5.assign;
                var3 = _closure1_slot37;
                var7 = var2 == var6;
                var2 = undefined;
                if(var7) { _fun0020_ip = 204; continue _fun0020 }
 198:
                var2 = var6.voiceParticipantsHidden;
 204:
                var2 = var4.bind(var5)(var3, var2);
 210:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(25);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var2 = _closure1_slot37;
            var1['voiceParticipantsHidden'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getParticipantsVersion';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot45;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.version;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getParticipants';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var4 = _closure1_slot45;
                var3 = undefined;
                var1 = arg1;
                var3 = var4.bind(var3)(var1);
                var1 = var3.toArray;
                var1 = var1.bind(var3)();
                var3 = null;
                if(!(var3 == var1)) { _fun0021_ip = 37; continue _fun0021 }
 33:
                var1 = _closure1_slot29;
 37:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getSpeakingParticipants';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var3 = _closure1_slot45;
                var6 = undefined;
                var1 = arg1;
                var4 = var3.bind(var6)(var1);
                var3 = var4.toArray;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 21;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1.ChannelRTCParticipantsIndexes;
                var1 = var1.SPEAKING;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0022_ip = 70; continue _fun0022 }
 66:
                var1 = _closure1_slot29;
 70:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getFilteredParticipants';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var4 = arg1;
                var1 = _closure1_slot37;
                var1 = var1[var4];
                var3 = _closure1_slot45;
                var6 = undefined;
                var4 = var3.bind(var6)(var4);
                var3 = var4.toArray;
                if(var1) { _fun0023_ip = 40; continue _fun0023 }
 34:
                var1 = var3.bind(var4)();
                _fun0023_ip = 77; continue _fun0023;
 40:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 21;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.ChannelRTCParticipantsIndexes;
                var2 = var2.FILTERED;
                var1 = var3.bind(var4)(var2);
 77:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getVideoParticipants';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var3 = _closure1_slot45;
                var6 = undefined;
                var1 = arg1;
                var4 = var3.bind(var6)(var1);
                var3 = var4.toArray;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 21;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1.ChannelRTCParticipantsIndexes;
                var1 = var1.VIDEO;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0024_ip = 70; continue _fun0024 }
 66:
                var1 = _closure1_slot29;
 70:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getStreamParticipants';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                var3 = _closure1_slot45;
                var6 = undefined;
                var1 = arg1;
                var4 = var3.bind(var6)(var1);
                var3 = var4.toArray;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 21;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1.ChannelRTCParticipantsIndexes;
                var1 = var1.STREAM;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0025_ip = 70; continue _fun0025 }
 66:
                var1 = _closure1_slot29;
 70:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getActivityParticipants';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                var3 = _closure1_slot45;
                var6 = undefined;
                var1 = arg1;
                var4 = var3.bind(var6)(var1);
                var3 = var4.toArray;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 21;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1.ChannelRTCParticipantsIndexes;
                var1 = var1.ACTIVITY;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0026_ip = 70; continue _fun0026 }
 66:
                var1 = _closure1_slot29;
 70:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getParticipant';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = _closure1_slot45;
            var2 = undefined;
            var1 = arg1;
            var3 = var3.bind(var2)(var1);
            var2 = var3.getParticipant;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getUserParticipantCount';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot45;
            var6 = undefined;
            var2 = arg1;
            var4 = var3.bind(var6)(var2);
            var2 = var4.size;
            var3 = var2.bind(var4)();
            var8 = var4.size;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 21;
            var2 = var7[var1];
            var2 = var5.bind(var6)(var2);
            var2 = var2.ChannelRTCParticipantsIndexes;
            var2 = var2.STREAM;
            var2 = var8.bind(var4)(var2);
            var2 = var3 - var2;
            var3 = var4.size;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.ChannelRTCParticipantsIndexes;
            var1 = var1.ACTIVITY;
            var1 = var3.bind(var4)(var1);
            var1 = var2 - var1;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getParticipantsOpen';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                var2 = _closure1_slot36;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 == var2;
                if(var1) { _fun0027_ip = 26; continue _fun0027 }
 23:
                var1 = var2;
 26:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getVoiceParticipantsHidden';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                var2 = _closure1_slot37;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0028_ip = 26; continue _fun0028 }
 23:
                var1 = var2;
 26:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getSelectedParticipantId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                var2 = _closure1_slot48;
                var4 = undefined;
                var1 = arg1;
                var3 = var2.bind(var4)(var1);
                var2 = _closure1_slot8;
                var1 = 2;
                var3 = var2.bind(var4)(var3, var1);
                var1 = 0;
                var2 = var3[var1];
                var1 = 1;
                var4 = var3[var1];
                var1 = _closure1_slot22;
                var3 = var1.NONE;
                var1 = null;
                if(!(var2 !== var3)) { _fun0029_ip = 114; continue _fun0029 }
 59:
                var3 = _closure1_slot22;
                var3 = var3.AUTO;
                if(!(var2 === var3)) { _fun0029_ip = 111; continue _fun0029 }
 73:
                var3 = _closure1_slot22;
                var7 = var3.NONE;
                var3 = null;
                if(!(var4 !== var7)) { _fun0029_ip = 108; continue _fun0029 }
 89:
                var5 = _closure1_slot22;
                var5 = var5.AUTO;
                var3 = null;
                if(!(var4 !== var5)) { _fun0029_ip = 108; continue _fun0029 }
 105:
                var3 = var4;
 108:
                var2 = var3;
 111:
                var1 = var2;
 114:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getSelectedParticipant';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                var5 = arg1;
                var2 = this;
                var1 = var2.getSelectedParticipantId;
                var4 = var1.bind(var2)(var5);
                var1 = null;
                var2 = var1 == var4;
                if(var2) { _fun0030_ip = 51; continue _fun0030 }
 26:
                var3 = _closure1_slot45;
                var2 = undefined;
                var3 = var3.bind(var2)(var5);
                var2 = var3.getParticipant;
                var1 = var2.bind(var3)(var4);
 51:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getSelectedParticipantStats';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                var2 = _closure1_slot33;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                if(!(var1 != var2)) { _fun0031_ip = 99; continue _fun0031 }
 20:
                var1 = {};
                var3 = global;
                var6 = var3.Math;
                var5 = var6.floor;
                var4 = var2.gridDurationMs;
                var4 = var5.bind(var6)(var4);
                var1['view_mode_grid_duration_ms'] = var4;
                var5 = var3.Math;
                var4 = var5.floor;
                var3 = var2.focusDurationMs;
                var3 = var4.bind(var5)(var3);
                var1['view_mode_focus_duration_ms'] = var3;
                var2 = var2.toggleCount;
                var1['view_mode_toggle_count'] = var2;
                _fun0031_ip = 101; continue _fun0031;
 99:
                var1 = {};
 101:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getGuildRingingUsers';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot45;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.guildRingingUsers;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getMode';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                var5 = arg1;
                var1 = _closure1_slot34;
                var1 = var1[var5];
                var2 = null;
                if(!(var2 == var1)) { _fun0032_ip = 55; continue _fun0032 }
 20:
                var4 = _closure1_slot57;
                var2 = undefined;
                var2 = var4.bind(var2)(var5);
                var3 = _closure1_slot25;
                if(var2) { _fun0032_ip = 46; continue _fun0032 }
 38:
                var2 = var3.VOICE;
                _fun0032_ip = 52; continue _fun0032;
 46:
                var2 = var3.VIDEO;
 52:
                var1 = var2;
 55:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getLayout';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                var5 = arg1;
                var6 = arguments[1];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0033_ip = 25; continue _fun0033 }
 12:
                var2 = _closure1_slot27;
                var6 = var2.APP;
 25:
                var2 = _closure1_slot57;
                var2 = var2.bind(var1)(var5);
                var4 = _closure1_slot35;
                var5 = var4[var5];
                var4 = null;
                var7 = var4 == var5;
                var1 = undefined;
                if(var7) { _fun0033_ip = 60; continue _fun0033 }
 56:
                var1 = var5[var6];
 60:
                if(!(var4 == var1)) { _fun0033_ip = 88; continue _fun0033 }
 64:
                var3 = _closure1_slot24;
                if(var2) { _fun0033_ip = 79; continue _fun0033 }
 71:
                var2 = var3.NORMAL;
                _fun0033_ip = 85; continue _fun0033;
 79:
                var2 = var3.NO_CHAT;
 85:
                var1 = var2;
 88:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getChatOpen';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
                var2 = _closure1_slot38;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0034_ip = 26; continue _fun0034 }
 23:
                var1 = var2;
 26:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'getAllChatOpen';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot38;
            return var1;
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'getParticipantsListOpen';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
                var2 = _closure1_slot39;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0035_ip = 26; continue _fun0035 }
 23:
                var1 = var2;
 26:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'isFullscreenInContext';
        var5['key'] = var7;
        var7 = function value() {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
                var2 = arguments[0];
                var3 = undefined;
                if(!(var2 === var3)) { _fun0036_ip = 24; continue _fun0036 }
 11:
                var3 = _closure1_slot27;
                var2 = var3.APP;
 24:
                var _closure3_slot0 = var2;
                var2 = global;
                var4 = var2.Object;
                var3 = var4.values;
                var2 = _closure1_slot35;
                var3 = var3.bind(var4)(var2);
                var2 = var3.some;
                var1 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var2 = var1[var2];
                    var1 = _closure1_slot24;
                    var1 = var1.FULL_SCREEN;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'getStageStreamSize';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot40;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'getStageVideoLimitBoostUpsellDismissed';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var2 = _closure1_slot41;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var6;
        var1[24] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var9.bind(var1)(var16);
    var9['displayName'] = var4;
    var9['persistKey'] = var4;
    var4 = 27;
    var4 = var7[var4];
    var19 = var8.bind(var1)(var4);
    var4 = {};
    var16 = function handleConnectionOpen() {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
            var4 = _closure1_slot43;
            var3 = _closure1_slot30;
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.bind(var1)();
            var3 = var4.done;
            if(var3) { _fun0037_ip = 59; continue _fun0037 }
 30:
            var6 = _closure1_slot53;
            var3 = var4.value;
            var3 = var6.bind(var1)(var3);
            var6 = var5.bind(var1)();
            var3 = var6.done;
            var4 = var6;
            if(!var3) { _fun0037_ip = 30; continue _fun0037 }
 59:
            var2 = _closure1_slot54;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var4['CONNECTION_OPEN'] = var16;
    var4['CONNECTION_OPEN_SUPPLEMENTAL'] = var15;
    var4['THREAD_LIST_SYNC'] = var15;
    var4['OVERLAY_INITIALIZE'] = var15;
    var16 = function handleVoiceChannelSelect(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
            var1 = arg1;
            var2 = var1.channelId;
            var4 = var1.currentVoiceChannelId;
            var1 = null;
            if(!(var1 == var2)) { _fun0038_ip = 56; continue _fun0038 }
 20:
            if(!(var1 != var4)) { _fun0038_ip = 67; continue _fun0038 }
 24:
            var3 = _closure1_slot38;
            var3 = delete var3[var4];
            var3 = _closure1_slot40;
            var3 = delete var3[var4];
            var3 = _closure1_slot50;
            var1 = undefined;
            var1 = var3.bind(var1)(var4);
            _fun0038_ip = 67; continue _fun0038;
 56:
            var1 = _closure1_slot33;
            var1 = delete var1[var2];
 67:
            var2 = _closure1_slot54;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var4['VOICE_CHANNEL_SELECT'] = var16;
    var16 = function handleChannelSelect(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var8 = var1.messageId;
            var1 = _closure1_slot54;
            var6 = undefined;
            var5 = var1.bind(var6)();
            var3 = _closure1_slot14;
            var1 = var3.getChannel;
            var3 = var1.bind(var3)(var4);
            var7 = null;
            var1 = var5;
            if(!(var7 != var4)) { _fun0039_ip = 151; continue _fun0039 }
 49:
            var1 = var5;
            if(!(var7 != var8)) { _fun0039_ip = 151; continue _fun0039 }
 56:
            var8 = var7 == var3;
            var9 = undefined;
            if(var8) { _fun0039_ip = 70; continue _fun0039 }
 65:
            var9 = var3.type;
 70:
            var8 = _closure1_slot26;
            var8 = var8.GUILD_VOICE;
            if(!(var9 !== var8)) { _fun0039_ip = 115; continue _fun0039 }
 84:
            var7 = var7 == var3;
            var6 = undefined;
            if(var7) { _fun0039_ip = 98; continue _fun0039 }
 93:
            var6 = var3.type;
 98:
            var3 = _closure1_slot26;
            var3 = var3.GUILD_STAGE_VOICE;
            var1 = var5;
            if(!(var6 === var3)) { _fun0039_ip = 151; continue _fun0039 }
 115:
            var3 = _closure1_slot38;
            var3 = var3[var4];
            var1 = var5;
            if(var3) { _fun0039_ip = 151; continue _fun0039 }
 129:
            var5 = _closure1_slot39;
            var3 = false;
            var5[var4] = var3;
            var3 = _closure1_slot38;
            var2 = true;
            var3[var4] = var2;
            var1 = true;
 151:
            return var1;
        }
    };
    var4['CHANNEL_SELECT'] = var16;
    var4['CHANNEL_RTC_ACTIVE_CHANNELS'] = var15;
    var15 = function handleVoiceStateUpdates(arg1) {
        var2 = arg1;
        var4 = var2.voiceStates;
        var2 = var2.initial;
        var _closure2_slot0 = var2;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
                var3 = arg1;
                var1 = arg2;
                var5 = var1.userId;
                var4 = var1.channelId;
                var7 = var1.guildId;
                var1 = null;
                var2 = var1 != var7;
                if(!var2) { _fun0040_ip = 34; continue _fun0040 }
 30:
                var2 = var1 != var4;
 34:
                if(!var2) { _fun0040_ip = 128; continue _fun0040 }
 37:
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 24;
                var8 = var8[var6];
                var6 = undefined;
                var11 = var9.bind(var6)(var8);
                var10 = var11.getCurrentConfig;
                var9 = {};
                var9['guildId'] = var7;
                var7 = 'voice_status_update';
                var9['location'] = var7;
                var8 = {};
                var7 = false;
                var8['autoTrackExposure'] = var7;
                var8 = var10.bind(var11)(var9, var8);
                var8 = var8.enabled;
                if(!var8) { _fun0040_ip = 128; continue _fun0040 }
 107:
                var2 = _closure1_slot45;
                var6 = var2.bind(var6)(var4);
                var2 = var6.updateGuildRingingUsers;
                var2 = var2.bind(var6)(var5, var7);
 128:
                var2 = _closure2_slot0;
                if(!var2) { _fun0040_ip = 165; continue _fun0040 }
 138:
                if(!(var1 != var4)) { _fun0040_ip = 165; continue _fun0040 }
 142:
                var2 = _closure1_slot30;
                var1 = var2.includes;
                var2 = var1.bind(var2)(var4);
                var1 = var3;
                if(!var2) { _fun0040_ip = 188; continue _fun0040 }
 165:
                var4 = _closure1_slot47;
                var2 = undefined;
                var2 = var4.bind(var2)(var5);
                if(var2) { _fun0040_ip = 185; continue _fun0040 }
 182:
                var2 = var3;
 185:
                var1 = var2;
 188:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4['VOICE_STATE_UPDATES'] = var15;
    var15 = function handleChannelCreate(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
            var1 = arg1;
            var1 = var1.channel;
            var3 = var1.type;
            var2 = _closure1_slot26;
            var2 = var2.GROUP_DM;
            if(!(var3 === var2)) { _fun0041_ip = 42; continue _fun0041 }
 30:
            var8 = var1.originChannelId;
            var7 = null;
            if(!(var7 == var8)) { _fun0041_ip = 46; continue _fun0041 }
 42:
            var2 = false;
            return var2;
 46:
            var3 = _closure1_slot35;
            var2 = var1.id;
            var1 = {};
            var4 = _closure1_slot27;
            var5 = var4.APP;
            var4 = _closure1_slot35;
            var9 = var4[var8];
            var8 = var7 == var9;
            var4 = undefined;
            if(var8) { _fun0041_ip = 98; continue _fun0041 }
 84:
            var8 = _closure1_slot27;
            var8 = var8.APP;
            var4 = var9[var8];
 98:
            if(!(var7 == var4)) { _fun0041_ip = 112; continue _fun0041 }
 102:
            var6 = _closure1_slot24;
            var4 = var6.NORMAL;
 112:
            var1[var5] = var4;
            var3[var2] = var1;
            var1 = true;
            return var1;
        }
    };
    var4['CHANNEL_CREATE'] = var15;
    var4['CHANNEL_DELETE'] = var14;
    var4['THREAD_DELETE'] = var14;
    var4['CALL_CREATE'] = var13;
    var4['CALL_UPDATE'] = var13;
    var13 = function handleCallDelete(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = _closure1_slot53;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var4['CALL_DELETE'] = var13;
    var13 = function handleSelectParticipant(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
 0:
            var1 = arg1;
            var10 = var1.channelId;
            var2 = var10;
            var8 = var1.id;
            var5 = var8;
            var1 = undefined;
            var4 = undefined;
            var6 = undefined;
            var9 = _closure1_slot45;
            var9 = var9.bind(var1)(var10);
            var4 = var9;
            var _closure2_slot0 = var9;
            var11 = null;
            if(!(var11 == var8)) { _fun0042_ip = 113; continue _fun0042 }
 52:
            var10 = var4;
            var9 = var10.toArray;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 21;
            var8 = var13[var8];
            var8 = var12.bind(var1)(var8);
            var8 = var8.ChannelRTCParticipantsIndexes;
            var8 = var8.STREAM;
            var9 = var9.bind(var10)(var8);
            var8 = var9.forEach;
            var7 = function(arg1) {
                _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
 0:
                    var2 = arg1;
                    var3 = _closure1_slot23;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    if(!var3) { _fun0043_ip = 48; continue _fun0043 }
 20:
                    var4 = _closure2_slot0;
                    var3 = var4.updateParticipant;
                    var2 = var2.user;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
 48:
                    return var1;
                }
            };
            var7 = var8.bind(var9)(var7);
 113:
            var7 = _closure1_slot48;
            var9 = var2;
            var10 = var7.bind(var1)(var9);
            var8 = _closure1_slot8;
            var7 = 2;
            var8 = var8.bind(var1)(var10, var7);
            var7 = 1;
            var10 = var8[var7];
            var8 = _closure1_slot51;
            var7 = var5;
            if(!(var11 == var7)) { _fun0042_ip = 168; continue _fun0042 }
 156:
            var7 = _closure1_slot22;
            var11 = var7.NONE;
            _fun0042_ip = 171; continue _fun0042;
 168:
            var11 = var5;
 171:
            var7 = new Array(2);
            var7[0] = var11;
            var7[1] = var10;
            var7 = var8.bind(var1)(var9, var7);
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var9 = 25;
            var7 = var7[var9];
            var10 = var8.bind(var1)(var7);
            var8 = var10.isStreamKey;
            var7 = var5;
            var7 = var8.bind(var10)(var7);
            if(!var7) { _fun0042_ip = 382; continue _fun0042 }
 229: // try_start_0
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var9 = var8.bind(var1)(var7);
            var8 = var9.decodeStreamKey;
            var7 = var5;
            var7 = var8.bind(var9)(var7);
            var8 = var7.ownerId;
            var6 = var8;
            var9 = _closure1_slot12;
            var7 = var9.getId;
            var7 = var7.bind(var9)();
            if(!(var8 === var7)) { _fun0042_ip = 311; continue _fun0042 }
 287:
            var8 = _closure1_slot47;
            var7 = var6;
            var9 = var2;
            var6 = new Array(1);
            var6[0] = var9;
            var6 = var8.bind(var1)(var7, var6);
 311: // try_end0
            _fun0042_ip = 357; continue _fun0042;
 313: // catch_target0
            CatchBlockStart(arg_register=7);
            var7 = _closure1_slot28;
            var6 = var7.warn;
            var10 = var5;
            var5 = global;
            var5 = var5.HermesInternal;
            var9 = var5.concat;
            var5 = 'INVALID STREAM KEY FORMAT ';
            var5 = var9.bind(var5)(var10);
            var5 = var6.bind(var7)(var5, var8);
 357:
            var5 = _closure1_slot52;
            var4 = var5.bind(var1)(var4);
            if(var4) { _fun0042_ip = 382; continue _fun0042 }
 369:
            var4 = _closure1_slot36;
            var3 = var2;
            var2 = false;
            var4[var3] = var2;
 382:
            return var1;
        }
    };
    var4['CHANNEL_RTC_SELECT_PARTICIPANT'] = var13;
    var13 = function handleCallLayout(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var5 = var1.layout;
        var4 = var1.appContext;
        var2 = _closure1_slot35;
        var1 = {};
        var7 = var2[var3];
        var8 = var1;
        var6 = copyDataProperties(var8, var7);
        var1[var4] = var5;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var4['CHANNEL_RTC_UPDATE_LAYOUT'] = var13;
    var13 = function handleUpdateParticipantsOpen(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = var1.participantsOpen;
        var1 = _closure1_slot36;
        var1[var3] = var2;
        var1 = undefined;
        return var1;
    };
    var4['CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN'] = var13;
    var13 = function handleUpdateVoiceParticipantsHidden(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = var1.voiceParticipantsHidden;
        var1 = _closure1_slot37;
        var1[var3] = var2;
        var1 = undefined;
        return var1;
    };
    var4['CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN'] = var13;
    var13 = function handleUpdateStageStreamSize(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = var1.large;
        var1 = _closure1_slot40;
        var1[var3] = var2;
        var1 = undefined;
        return var1;
    };
    var4['CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE'] = var13;
    var13 = function handleUpdateStageVideoLimitBoostUpsellDismissed(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = var1.dismissed;
        var1 = _closure1_slot41;
        var1[var3] = var2;
        var1 = undefined;
        return var1;
    };
    var4['CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED'] = var13;
    var13 = function handleUpdateSelfStreamHidden(arg1) {
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
 0:
            var2 = arg1;
            var1 = var2.channelId;
            var3 = var2.selfStreamHidden;
            var5 = _closure1_slot12;
            var4 = var5.getId;
            var4 = var4.bind(var5)();
            if(!var3) { _fun0044_ip = 123; continue _fun0044 }
 34:
            var3 = _closure1_slot48;
            var6 = undefined;
            var7 = var3.bind(var6)(var1);
            var5 = _closure1_slot8;
            var3 = 1;
            var5 = var5.bind(var6)(var7, var3);
            var3 = 0;
            var7 = var5[var3];
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 25;
            var3 = var8[var3];
            var5 = var5.bind(var6)(var3);
            var3 = var5.isStreamKey;
            var3 = var3.bind(var5)(var7);
            if(!var3) { _fun0044_ip = 108; continue _fun0044 }
 98:
            var5 = var7.includes;
            var3 = var5.bind(var7)(var4);
 108:
            if(!var3) { _fun0044_ip = 123; continue _fun0044 }
 111:
            var5 = _closure1_slot51;
            var3 = null;
            var3 = var5.bind(var6)(var1, var3);
 123:
            var3 = _closure1_slot47;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var4, var2);
            return var1;
        }
    };
    var4['STREAM_UPDATE_SELF_HIDDEN'] = var13;
    var13 = function handleUpdateChatOpen(arg1) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var2 = var1.chatOpen;
            var4 = _closure1_slot38;
            var4[var3] = var2;
            if(!var2) { _fun0045_ip = 38; continue _fun0045 }
 28:
            var2 = _closure1_slot39;
            var1 = false;
            var2[var3] = var1;
 38:
            var1 = undefined;
            return var1;
        }
    };
    var4['CHANNEL_RTC_UPDATE_CHAT_OPEN'] = var13;
    var13 = function handleUpdateParticipantsListOpen(arg1) {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var2 = var1.participantsListOpen;
            var4 = _closure1_slot39;
            var4[var3] = var2;
            if(!var2) { _fun0046_ip = 38; continue _fun0046 }
 28:
            var2 = _closure1_slot38;
            var1 = false;
            var2[var3] = var1;
 38:
            var1 = undefined;
            return var1;
        }
    };
    var4['CHANNEL_RTC_UPDATE_PARTCIPANTS_LIST_OPEN'] = var13;
    var13 = function handleRTCConnectionVideo(arg1) {
        var2 = arg1;
        var1 = var2.channelId;
        var4 = var2.userId;
        var3 = _closure1_slot47;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var4['RTC_CONNECTION_VIDEO'] = var13;
    var13 = function handleRTCConnectionPlatform(arg1) {
        var2 = arg1;
        var1 = var2.channelId;
        var4 = var2.userId;
        var3 = _closure1_slot47;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var4['RTC_CONNECTION_PLATFORM'] = var13;
    var13 = function handleMediaEngineSetLocalVideoDisabled(arg1) {
        var1 = arg1;
        var3 = var1.userId;
        var2 = _closure1_slot47;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var4['AUDIO_SET_LOCAL_VIDEO_DISABLED'] = var13;
    var13 = function handleVideoSourceQuality(arg1) {
        var3 = arg1;
        var2 = var3.channelId;
        var4 = var3.senderUserId;
        var _closure2_slot0 = var4;
        var4 = var3.maxResolution;
        var _closure2_slot1 = var4;
        var3 = var3.maxFrameRate;
        var _closure2_slot2 = var3;
        var4 = _closure1_slot46;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = undefined;
        var1 = function(arg1) {
            var5 = arg1;
            var4 = var5.updateParticipantQuality;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = _closure2_slot2;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
        var1 = var4.bind(var2)(var1, var3);
        return var1;
    };
    var4['MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED'] = var13;
    var4['STREAM_CLOSE'] = var12;
    var4['STREAM_DELETE'] = var12;
    var12 = function handleStreamWatch(arg1) {
        var1 = arg1;
        var5 = var1.streamKey;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 25;
        var1 = var4[var1];
        var4 = undefined;
        var3 = var3.bind(var4)(var1);
        var1 = var3.decodeStreamKey;
        var1 = var1.bind(var3)(var5);
        var5 = var1.channelId;
        var3 = _closure1_slot47;
        var2 = var1.ownerId;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4['STREAM_WATCH'] = var12;
    var4['SPEAKING'] = var11;
    var4['GUILD_SOUNDBOARD_SOUND_PLAY_START'] = var11;
    var4['GUILD_SOUNDBOARD_SOUND_PLAY_END'] = var11;
    var11 = function handleGuildRingStart(arg1) {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
 0:
            var2 = arg1;
            var5 = var2.channelId;
            var9 = var2.guildId;
            var7 = var2.ringing;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 24;
            var3 = var8[var3];
            var8 = var6.bind(var4)(var3);
            var6 = var8.getCurrentConfig;
            var3 = {};
            var3['guildId'] = var9;
            var9 = 'guild_ring_start';
            var3['location'] = var9;
            var3 = var6.bind(var8)(var3);
            var3 = var3.enabled;
            if(var3) { _fun0047_ip = 89; continue _fun0047 }
 85:
            var3 = false;
            return var3;
 89:
            var3 = _closure1_slot45;
            var3 = var3.bind(var4)(var5);
            _closure2_slot0 = var3;
            var6 = var7.forEach;
            var3 = function(arg1) {
                var4 = _closure2_slot0;
                var3 = var4.updateGuildRingingUsers;
                var2 = arg1;
                var1 = true;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var6.bind(var7)(var3);
            var3 = _closure1_slot46;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.rebuild;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var4['GUILD_RING_START'] = var11;
    var11 = function handleGuildRingStop(arg1) {
        _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
 0:
            var2 = arg1;
            var5 = var2.channelId;
            var9 = var2.guildId;
            var7 = var2.ringing;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 24;
            var3 = var8[var3];
            var8 = var6.bind(var4)(var3);
            var6 = var8.getCurrentConfig;
            var3 = {};
            var3['guildId'] = var9;
            var9 = 'guild_ring_start';
            var3['location'] = var9;
            var3 = var6.bind(var8)(var3);
            var3 = var3.enabled;
            if(var3) { _fun0048_ip = 89; continue _fun0048 }
 85:
            var3 = false;
            return var3;
 89:
            var3 = _closure1_slot45;
            var3 = var3.bind(var4)(var5);
            _closure2_slot0 = var3;
            var6 = var7.forEach;
            var3 = function(arg1) {
                var4 = _closure2_slot0;
                var3 = var4.updateGuildRingingUsers;
                var2 = arg1;
                var1 = false;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var6.bind(var7)(var3);
            var3 = _closure1_slot46;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.rebuild;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var4['GUILD_RING_STOP'] = var11;
    var4['USER_UPDATE'] = var10;
    var4['GUILD_MEMBER_UPDATE'] = var10;
    var5 = function handleGuildDelete(arg1) {
        _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
 0:
            var1 = arg1;
            var1 = var1.guild;
            var _closure2_slot0 = var1;
            var5 = new Array(0);
            var _closure2_slot1 = var5;
            var7 = _closure1_slot1;
            var1 = _closure1_slot2;
            var6 = 22;
            var4 = var1[var6];
            var1 = undefined;
            var9 = var7.bind(var1)(var4);
            var8 = var9.forEach;
            var7 = _closure1_slot30;
            var4 = function(arg1) {
                _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure1_slot14;
                    var1 = var2.getChannel;
                    var4 = var1.bind(var2)(var3);
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0050_ip = 55; continue _fun0050 }
 29:
                    var2 = var4.getGuildId;
                    var4 = var2.bind(var4)();
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4 !== var2;
 55:
                    if(var1) { _fun0050_ip = 75; continue _fun0050 }
 58:
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
 75:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var8.bind(var9)(var7, var4);
            var7 = var5.length;
            var4 = 0;
            if(!(var4 !== var7)) { _fun0049_ip = 113; continue _fun0049 }
 78:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var4 = var4.bind(var1)(var3);
            var3 = var4.forEach;
            var2 = function(arg1) {
                var3 = _closure1_slot53;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var5, var2);
            return var1;
 113:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_DELETE'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var20 = var5;
    var18 = var4;
    var4 = new var20[var9](var19, var18, var17);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 28;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/calls/ChannelRTCStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['NO_PARTICIPANTS'] = var2;
    return var1;
})();