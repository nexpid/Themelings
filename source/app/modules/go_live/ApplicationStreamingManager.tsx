// app/modules/go_live/ApplicationStreamingManager.tsx
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
            var9 = _closure1_slot24;
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
            var7 = _closure1_slot24;
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
    var _closure1_slot23 = var1;
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
    var _closure1_slot24 = var1;
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
 72: // try_end0
            _fun0004_ip = 76; continue _fun0004;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
    var1 = function clearSpectatorReconnectionTimer(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot17;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 != var4)) { _fun0005_ip = 30; continue _fun0005 }
 20:
            var3 = var4.stop;
            var3 = var3.bind(var4)();
 30:
            var1 = _closure1_slot17;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function clearConnectTimeout(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot18;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 != var4)) { _fun0006_ip = 30; continue _fun0006 }
 20:
            var3 = var4.stop;
            var3 = var3.bind(var4)();
 30:
            var1 = _closure1_slot18;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function maybeAutowatchStream(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var6 = arg2;
            var3 = _closure1_slot13;
            var1 = var3.getVoiceChannelId;
            var1 = var1.bind(var3)();
            if(!(var1 === var4)) { _fun0007_ip = 251; continue _fun0007 }
 30:
            var3 = _closure1_slot10;
            var1 = var3.getChannel;
            var7 = var1.bind(var3)(var4);
            var1 = null;
            if(!(var1 != var7)) { _fun0007_ip = 247; continue _fun0007 }
 53:
            var3 = var7.isDM;
            var3 = var3.bind(var7)();
            if(var3) { _fun0007_ip = 83; continue _fun0007 }
 66:
            var3 = var7.isGuildStageVoice;
            var3 = var3.bind(var7)();
            if(var3) { _fun0007_ip = 83; continue _fun0007 }
 79:
            var3 = false;
            return var3;
 83:
            var5 = _closure1_slot8;
            var4 = var5.getActiveStreamForUser;
            var3 = var7.getGuildId;
            var3 = var3.bind(var7)();
            var3 = var4.bind(var5)(var6, var3);
            if(!(var1 == var3)) { _fun0007_ip = 243; continue _fun0007 }
 116:
            var5 = _closure1_slot8;
            var4 = var5.getStreamForUser;
            var3 = var7.getGuildId;
            var3 = var3.bind(var7)();
            var6 = var4.bind(var5)(var6, var3);
            if(!(var1 != var6)) { _fun0007_ip = 239; continue _fun0007 }
 146:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 18;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.encodeStreamKey;
            var3 = var1.bind(var3)(var6);
            var1 = _closure1_slot22;
            var1 = var3 !== var1;
            if(!var1) { _fun0007_ip = 237; continue _fun0007 }
 190:
            _closure1_slot22 = var3;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 16;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var4 = var5.watchStream;
            var3 = {};
            var2 = true;
            var3['noFocus'] = var2;
            var3 = var4.bind(var5)(var6, var3);
            var1 = true;
 237:
            return var1;
 239:
            var1 = false;
            return var1;
 243:
            var1 = false;
            return var1;
 247:
            var1 = false;
            return var1;
 251:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function updateRegion(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var4 = arg1;
            var3 = arg2;
            var1 = null;
            if(!(var1 == var3)) { _fun0008_ip = 29; continue _fun0008 }
 12:
            var5 = _closure1_slot12;
            var2 = var5.getPreferredRegion;
            var3 = var2.bind(var5)();
 29:
            var1 = var1 != var3;
            if(!var1) { _fun0008_ip = 73; continue _fun0008 }
 36:
            var6 = _closure1_slot12;
            var5 = var6.getRegion;
            var7 = _closure1_slot14;
            var2 = var7.getHostname;
            var2 = var2.bind(var7)(var4);
            var2 = var5.bind(var6)(var2);
            var1 = var3 !== var2;
 73:
            if(!var1) { _fun0008_ip = 113; continue _fun0008 }
 76:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var5.bind(var1)(var2);
            var1 = var2.changeStreamRegion;
            var1 = var1.bind(var2)(var4, var3);
 113:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function maybeStartConnectTimeout(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var4 = _closure1_slot14;
            var2 = var4.getAllActiveStreamKeys;
            var4 = var2.bind(var4)();
            var2 = var4.includes;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0009_ip = 143; continue _fun0009 }
 39:
            var2 = _closure1_slot18;
            var4 = var2[var3];
            var2 = null;
            if(!(var2 == var4)) { _fun0009_ip = 101; continue _fun0009 }
 53:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 19;
            var6 = var6[var2];
            var2 = undefined;
            var2 = var7.bind(var2)(var6);
            var2 = var2.Timeout;
            var6 = var2.prototype;
            var6 = Object.create(var6, {constructor: {value: var2}});
            var10 = var6;
            var2 = new var10[var2](var9);
            var4 = var2 instanceof Object ? var2 : var6;
 101:
            var2 = _closure1_slot18;
            var2[var3] = var4;
            var3 = var4.start;
            var2 = arg2;
            if(var2) { _fun0009_ip = 126; continue _fun0009 }
 120:
            var2 = _closure1_slot20;
            _fun0009_ip = 130; continue _fun0009;
 126:
            var2 = _closure1_slot21;
 130:
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'STREAM_TIMED_OUT';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var2['streamKey'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
 143:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
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
    var11 = 3;
    var4 = var6[var11];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var10 = 5;
    var4 = var6[var10];
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var8 = 12;
    var4 = var6[var8];
    var4 = var7.bind(var1)(var4);
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.STREAM_NOTIFY_GUILD_MAX_SIZE;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.ApplicationStreamDeleteReasons;
    var _closure1_slot15 = var9;
    var4 = var4.ApplicationStreamStates;
    var _closure1_slot16 = var4;
    var4 = 15;
    var4 = var6[var4];
    var13 = var5.bind(var1)(var4);
    var12 = var13.debounce;
    var4 = 16;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.notifyStreamStart;
    var4 = 1000;
    var4 = var12.bind(var13)(var9, var4);
    var4 = {};
    var _closure1_slot17 = var4;
    var4 = {};
    var _closure1_slot18 = var4;
    var4 = 17;
    var9 = var6[var4];
    var9 = var7.bind(var1)(var9);
    var9 = var9.Millis;
    var9 = var9.MINUTE;
    var9 = var11 * var9;
    var _closure1_slot19 = var9;
    var9 = var6[var4];
    var9 = var7.bind(var1)(var9);
    var9 = var9.Millis;
    var9 = var9.SECOND;
    var9 = var10 * var9;
    var _closure1_slot20 = var9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.SECOND;
    var4 = var8 * var4;
    var _closure1_slot21 = var4;
    var4 = null;
    var _closure1_slot22 = var4;
    var4 = 23;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function BaseApplicationStreamingManager(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot4;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot25;
                var1 = var1.bind(var4)();
                if(var1) { _fun0010_ip = 86; continue _fun0010 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0010_ip = 120; continue _fun0010;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var1 = arg1;
                        var6 = var1.streamKey;
                        var _closure4_slot0 = var6;
                        var4 = var1.allowMultiple;
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 18;
                        var5 = var5[var1];
                        var1 = undefined;
                        var7 = var7.bind(var1)(var5);
                        var5 = var7.decodeStreamKey;
                        var5 = var5.bind(var7)(var6);
                        var8 = var5.channelId;
                        var7 = _closure1_slot10;
                        var5 = var7.getChannel;
                        var9 = var5.bind(var7)(var8);
                        var7 = _closure1_slot30;
                        var5 = null;
                        var8 = var5 == var9;
                        var5 = undefined;
                        if(var8) { _fun0011_ip = 101; continue _fun0011 }
 91:
                        var8 = var9.isGuildStageVoice;
                        var5 = var8.bind(var9)();
 101:
                        var5 = var7.bind(var1)(var6, var5);
                        var5 = _closure1_slot26;
                        var5 = var5.bind(var1)(var6);
                        if(var4) { _fun0011_ip = 150; continue _fun0011 }
 119:
                        var4 = _closure1_slot8;
                        var3 = var4.getAllActiveStreams;
                        var4 = var3.bind(var4)();
                        var3 = var4.forEach;
                        var2 = function(arg1) {
                            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                                var3 = arg1;
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 18;
                                var4 = var4[var1];
                                var1 = undefined;
                                var5 = var5.bind(var1)(var4);
                                var4 = var5.encodeStreamKey;
                                var5 = var4.bind(var5)(var3);
                                var4 = var3.ownerId;
                                var6 = _closure1_slot9;
                                var3 = var6.getId;
                                var3 = var3.bind(var6)();
                                var3 = var4 !== var3;
                                if(!var3) { _fun0012_ip = 77; continue _fun0012 }
 66:
                                var4 = _closure4_slot0;
                                var3 = var5 !== var4;
 77:
                                if(!var3) { _fun0012_ip = 114; continue _fun0012 }
 80:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 16;
                                var2 = var4[var2];
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.stopStream;
                                var2 = false;
                                var2 = var3.bind(var4)(var5, var2);
 114:
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
 150:
                        return var1;
                    }
                };
                var1['handleStreamWatch'] = var3;
                var3 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        var4 = arg1;
                        var9 = var4.channelId;
                        var11 = var4.streamType;
                        var10 = var4.guildId;
                        var2 = _closure1_slot10;
                        var1 = var2.getChannel;
                        var7 = var1.bind(var2)(var9);
                        var5 = _closure1_slot30;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 18;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var3 = var6.encodeStreamKey;
                        var2 = {};
                        var2['streamType'] = var11;
                        var2['guildId'] = var10;
                        var2['channelId'] = var9;
                        var9 = _closure1_slot9;
                        var8 = var9.getId;
                        var8 = var8.bind(var9)();
                        var2['ownerId'] = var8;
                        var3 = var3.bind(var6)(var2);
                        var2 = null;
                        var6 = var2 == var7;
                        var2 = undefined;
                        if(var6) { _fun0013_ip = 128; continue _fun0013 }
 118:
                        var6 = var7.isGuildStageVoice;
                        var2 = var6.bind(var7)();
 128:
                        var2 = var5.bind(var1)(var3, var2);
                        var3 = _closure3_slot0;
                        var2 = var3.platformHandleStreamStart;
                        var2 = var2.bind(var3)(var4);
                        return var1;
                    }
                };
                var1['handleStreamStart'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var5 = var1.streamKey;
                    var3 = _closure1_slot27;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var5);
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 18;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.decodeStreamKey;
                    var3 = var3.bind(var4)(var5);
                    var4 = var3.ownerId;
                    var4 = var3.guildId;
                    var3 = _closure1_slot11;
                    var2 = var3.getMemberCount;
                    var2 = var2.bind(var3)(var4);
                    return var1;
                };
                var1['handleStreamCreate'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.streamKey;
                    var2 = _closure1_slot27;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var1['handleStreamUpdate'] = var3;
                var3 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.reason;
                        var7 = var1.streamKey;
                        var3 = _closure1_slot27;
                        var1 = undefined;
                        var3 = var3.bind(var1)(var7);
                        var3 = _closure1_slot15;
                        var3 = var3.STREAM_FULL;
                        if(!(var4 === var3)) { _fun0014_ip = 150; continue _fun0014 }
 43:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 21;
                        var2 = var8[var5];
                        var4 = var6.bind(var1)(var2);
                        var3 = var4.reportAVError;
                        var2 = {};
                        var5 = var8[var5];
                        var5 = var6.bind(var1)(var5);
                        var5 = var5.AVError;
                        var5 = var5.STREAM_FULL;
                        var2['type'] = var5;
                        var5 = 22;
                        var5 = var8[var5];
                        var6 = var6.bind(var1)(var5);
                        var5 = var6.getStreamErrorContext;
                        var9 = var5.bind(var6)(var7);
                        var10 = var2;
                        var5 = copyDataProperties(var10, var9);
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure3_slot0;
                        var2 = var3.platformShowStreamFull;
                        var2 = var2.bind(var3)();
 150:
                        return var1;
                    }
                };
                var1['handleStreamDelete'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.streamKey;
                    var4 = _closure1_slot26;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var2 = _closure1_slot27;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var1['handleStreamClose'] = var3;
                var3 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.channelId;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0015_ip = 83; continue _fun0015 }
 14:
                        _closure1_slot22 = var3;
                        var5 = _closure1_slot8;
                        var1 = var5.getAllApplicationStreamsForChannel;
                        var6 = var1.bind(var5)(var4);
                        var5 = var6.filter;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.ownerId;
                            var3 = _closure1_slot9;
                            var1 = var3.getId;
                            var1 = var1.bind(var3)();
                            var1 = var2 !== var1;
                            return var1;
                        };
                        var5 = var5.bind(var6)(var1);
                        var1 = 0;
                        var1 = var5[var1];
                        if(!(var3 != var1)) { _fun0015_ip = 83; continue _fun0015 }
 65:
                        var3 = _closure1_slot28;
                        var2 = var1.ownerId;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var4, var2);
 83:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleVoiceChannelSelect'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.voiceStates;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                            var4 = arg1;
                            var8 = var4.userId;
                            var9 = var4.channelId;
                            var7 = var4.guildId;
                            var2 = var4.selfStream;
                            var3 = _closure3_slot0;
                            var1 = var3.platformHandleVoiceStateUpdate;
                            var1 = var1.bind(var3)(var4);
                            var4 = _closure1_slot9;
                            var1 = var4.getId;
                            var1 = var1.bind(var4)();
                            if(!(var8 !== var1)) { _fun0016_ip = 403; continue _fun0016 }
 70:
                            var4 = null;
                            if(!(var4 != var9)) { _fun0016_ip = 403; continue _fun0016 }
 79:
                            if(!var2) { _fun0016_ip = 100; continue _fun0016 }
 82:
                            var6 = _closure1_slot28;
                            var1 = undefined;
                            var6 = var6.bind(var1)(var9, var8);
                            if(var6) { _fun0016_ip = 409; continue _fun0016 }
 100:
                            var10 = _closure1_slot8;
                            var6 = var10.getActiveStreamForUser;
                            var10 = var6.bind(var10)(var8, var7);
                            if(!(var4 != var10)) { _fun0016_ip = 403; continue _fun0016 }
 123:
                            var6 = var10.channelId;
                            if(!(var6 === var9)) { _fun0016_ip = 403; continue _fun0016 }
 135:
                            if(var2) { _fun0016_ip = 288; continue _fun0016 }
 141:
                            var9 = var10.state;
                            var6 = _closure1_slot16;
                            var6 = var6.ENDED;
                            if(!(var9 !== var6)) { _fun0016_ip = 288; continue _fun0016 }
 163:
                            var9 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var6 = 18;
                            var6 = var11[var6];
                            var13 = undefined;
                            var9 = var9.bind(var13)(var6);
                            var6 = var9.encodeStreamKey;
                            var9 = var6.bind(var9)(var10);
                            var _closure5_slot0 = var9;
                            var6 = _closure1_slot17;
                            var6 = var6[var9];
                            if(!(var4 == var6)) { _fun0016_ip = 258; continue _fun0016 }
 212:
                            var12 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var11 = 19;
                            var11 = var14[var11];
                            var11 = var12.bind(var13)(var11);
                            var11 = var11.Timeout;
                            var12 = var11.prototype;
                            var12 = Object.create(var12, {constructor: {value: var11}});
                            var17 = var12;
                            var11 = new var17[var11](var16);
                            var6 = var11 instanceof Object ? var11 : var12;
 258:
                            var12 = var6.start;
                            var11 = _closure1_slot19;
                            var5 = function() {
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 16;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.closeStream;
                                var2 = _closure5_slot0;
                                var1 = false;
                                var1 = var3.bind(var4)(var2, var1);
                                return var1;
                            };
                            var5 = var12.bind(var6)(var11, var5);
                            var5 = _closure1_slot17;
                            var5[var9] = var6;
 288:
                            if(!var2) { _fun0016_ip = 403; continue _fun0016 }
 291:
                            var5 = var10.state;
                            var2 = _closure1_slot16;
                            var2 = var2.ENDED;
                            if(!(var5 === var2)) { _fun0016_ip = 403; continue _fun0016 }
 310:
                            var6 = _closure1_slot26;
                            var9 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 18;
                            var5 = var5[var2];
                            var2 = undefined;
                            var9 = var9.bind(var2)(var5);
                            var5 = var9.encodeStreamKey;
                            var5 = var5.bind(var9)(var10);
                            var5 = var6.bind(var2)(var5);
                            var6 = _closure1_slot8;
                            var5 = var6.getStreamForUser;
                            var5 = var5.bind(var6)(var8, var7);
                            if(!(var4 != var5)) { _fun0016_ip = 407; continue _fun0016 }
 372:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 16;
                            var3 = var6[var3];
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.watchStream;
                            var3 = var3.bind(var4)(var5);
 403:
                            var3 = undefined;
                            return var3;
 407:
                            return var2;
 409:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleVoiceStateUpdates'] = var3;
                var3 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                        var1 = arg1;
                        var5 = var1.channelId;
                        var4 = var1.region;
                        var3 = _closure1_slot8;
                        var1 = var3.getCurrentUserActiveStream;
                        var6 = var1.bind(var3)();
                        var1 = null;
                        var7 = var1 == var6;
                        var1 = undefined;
                        var3 = undefined;
                        if(var7) { _fun0017_ip = 49; continue _fun0017 }
 44:
                        var3 = var6.channelId;
 49:
                        if(!(var3 === var5)) { _fun0017_ip = 94; continue _fun0017 }
 53:
                        var3 = _closure1_slot29;
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 18;
                        var2 = var7[var2];
                        var5 = var5.bind(var1)(var2);
                        var2 = var5.encodeStreamKey;
                        var2 = var2.bind(var5)(var6);
                        var2 = var3.bind(var1)(var2, var4);
 94:
                        return var1;
                    }
                };
                var1['handleCallUpdate'] = var3;
                var2 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.channels;
                        var3 = _closure1_slot8;
                        var1 = var3.getCurrentUserActiveStream;
                        var6 = var1.bind(var3)();
                        var1 = null;
                        if(!(var1 != var6)) { _fun0018_ip = 136; continue _fun0018 }
 32:
                        var1 = _closure1_slot23;
                        var5 = undefined;
                        var4 = var1.bind(var5)(var2);
                        var2 = var4.bind(var5)();
                        var1 = var2.done;
                        var3 = 18;
                        if(var1) { _fun0018_ip = 136; continue _fun0018 }
 58:
                        var1 = var2.value;
                        var9 = var6.channelId;
                        var8 = var1.id;
                        if(!(var9 === var8)) { _fun0018_ip = 121; continue _fun0018 }
 77:
                        var9 = _closure1_slot29;
                        var10 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var8 = var8[var3];
                        var10 = var10.bind(var5)(var8);
                        var8 = var10.encodeStreamKey;
                        var8 = var8.bind(var10)(var6);
                        var1 = var1.rtcRegion;
                        var1 = var9.bind(var5)(var8, var1);
 121:
                        var8 = var4.bind(var5)();
                        var1 = var8.done;
                        var2 = var8;
                        if(!var1) { _fun0018_ip = 58; continue _fun0018 }
 136:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleChannelUpdates'] = var2;
                var2 = {};
                var3 = var1.handleStreamWatch;
                var2['STREAM_WATCH'] = var3;
                var3 = var1.handleStreamStart;
                var2['STREAM_START'] = var3;
                var3 = var1.handleStreamCreate;
                var2['STREAM_CREATE'] = var3;
                var3 = var1.handleStreamUpdate;
                var2['STREAM_UPDATE'] = var3;
                var3 = var1.handleStreamDelete;
                var2['STREAM_DELETE'] = var3;
                var3 = var1.handleStreamClose;
                var2['STREAM_CLOSE'] = var3;
                var3 = var1.handleCallUpdate;
                var2['CALL_UPDATE'] = var3;
                var3 = var1.handleChannelUpdates;
                var2['CHANNEL_UPDATES'] = var3;
                var3 = var1.handleVoiceChannelSelect;
                var2['VOICE_CHANNEL_SELECT'] = var3;
                var3 = var1.handleVoiceStateUpdates;
                var2['VOICE_STATE_UPDATES'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/go_live/ApplicationStreamingManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();