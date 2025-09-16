// app/modules/local_message_caching/LocalMessageCacheManager.native.tsx
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
            var9 = _closure1_slot35;
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
            var7 = _closure1_slot35;
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
    var _closure1_slot34 = var1;
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
    var _closure1_slot35 = var1;
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
            _closure1_slot36 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot36 = var1;
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
    var11 = 5;
    var4 = var6[var11];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageStates;
    var _closure1_slot15 = var4;
    var9 = 14;
    var4 = var6[var9];
    var10 = var5.bind(var1)(var4);
    var4 = var10.createLock;
    var4 = var4.bind(var10)();
    var _closure1_slot16 = var4;
    var4 = 15;
    var4 = var6[var4];
    var12 = var7.bind(var1)(var4);
    var4 = var12.prototype;
    var10 = Object.create(var4, {constructor: {value: var12}});
    var15 = 'LocalMessageCacheManager';
    var16 = var10;
    var4 = new var16[var12](var15, var14);
    var4 = var4 instanceof Object ? var4 : var10;
    var _closure1_slot17 = var4;
    var4 = 16;
    var10 = var6[var4];
    var10 = var7.bind(var1)(var10);
    var10 = var10.Millis;
    var10 = var10.MINUTE;
    var10 = var11 * var10;
    var _closure1_slot18 = var10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.DAY;
    var4 = var9 * var4;
    var _closure1_slot19 = var4;
    var4 = function _getMessages() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.Storage;
            var2 = var3.get;
            var1 = 'LocalMessageCacheManagerMessageCacheKey';
            var1 = var2.bind(var3)(var1);
            var2 = null;
            if(!(var2 == var1)) { _fun0005_ip = 55; continue _fun0005 }
 53:
            var1 = {};
 55:
            return var1;
        }
    };
    var _closure1_slot20 = var4;
    var4 = function _getMessage(arg1) {
        var2 = _closure1_slot20;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var1 = arg1;
        var1 = var2[var1];
        return var1;
    };
    var _closure1_slot21 = var4;
    var4 = function _writeMessage(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var6 = arg2;
            var10 = _closure1_slot17;
            var9 = var10.verbose;
            var7 = null;
            var1 = var7 == var6;
            var4 = undefined;
            var8 = undefined;
            if(var1) { _fun0006_ip = 37; continue _fun0006 }
 32:
            var8 = var6.id;
 37:
            var1 = var7 == var6;
            var5 = undefined;
            if(var1) { _fun0006_ip = 51; continue _fun0006 }
 46:
            var5 = var6.channel_id;
 51:
            var1 = '_writeMessage';
            var1 = var9.bind(var10)(var1, var8, var5);
            var1 = _closure1_slot20;
            var1 = var1.bind(var4)();
            if(!(var7 == var6)) { _fun0006_ip = 82; continue _fun0006 }
 76:
            var5 = delete var1[var3];
            _fun0006_ip = 167; continue _fun0006;
 82:
            var5 = {};
            var13 = var5;
            var12 = var6;
            var8 = copyDataProperties(var13, var12);
            var6 = var6.content;
            var8 = var7 != var6;
            var7 = '';
            if(!var8) { _fun0006_ip = 113; continue _fun0006 }
 110:
            var7 = var6;
 113:
            var6 = 'content';
            var5[var6] = var7;
            var1[var3] = var5;
            var8 = _closure1_slot17;
            var7 = var8.verbose;
            var5 = var1[var3];
            var6 = var5.id;
            var3 = var1[var3];
            var5 = var3.channel_id;
            var3 = '_writeMessage after write';
            var3 = var7.bind(var8)(var3, var6, var5);
 167:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 17;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.Storage;
            var3 = var4.set;
            var2 = 'LocalMessageCacheManagerMessageCacheKey';
            var2 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var4;
    var4 = function _getKeyForFileId(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var11 = arg1;
            var1 = _closure1_slot20;
            var2 = undefined;
            var4 = var1.bind(var2)();
            var1 = global;
            var3 = var1.Object;
            var1 = var3.entries;
            var9 = var1.bind(var3)(var4);
            var1 = var9.length;
            var8 = 0;
            var1 = var8 < var1;
            var7 = 2;
            var6 = 1;
            var5 = null;
            var4 = 0;
            if(!var1) { _fun0007_ip = 117; continue _fun0007 }
 59:
            var3 = var9[var4];
            var1 = _closure1_slot10;
            var3 = var1.bind(var2)(var3, var7);
            var1 = var3[var8];
            var3 = var3[var6];
            var12 = var3.file;
            var13 = var5 == var12;
            var3 = undefined;
            if(var13) { _fun0007_ip = 101; continue _fun0007 }
 96:
            var3 = var12.id;
 101:
            if(!(var3 !== var11)) { _fun0007_ip = 119; continue _fun0007 }
 105:
            var4 = var4 + 1;
            var3 = var9.length;
            if(var4 < var3) { _fun0007_ip = 59; continue _fun0007 }
 117:
            return var2;
 119:
            return var1;
        }
    };
    var _closure1_slot23 = var4;
    var4 = function cacheSendingMessage(arg1) {
        var3 = arg1;
        var2 = var3.key;
        var _closure2_slot0 = var2;
        var2 = var3.message;
        var4 = var3.file;
        var _closure2_slot1 = var4;
        var3 = var3.sendMessageOptions;
        var _closure2_slot2 = var3;
        var3 = var2.content;
        var _closure2_slot3 = var3;
        var3 = var2.id;
        var _closure2_slot4 = var3;
        var3 = var2.channel_id;
        var _closure2_slot5 = var3;
        var3 = var2.tts;
        var _closure2_slot6 = var3;
        var3 = var2.nonce;
        var _closure2_slot7 = var3;
        var3 = var2.timestamp;
        var _closure2_slot8 = var3;
        var3 = var2.type;
        var _closure2_slot9 = var3;
        var3 = var2.flags;
        var _closure2_slot10 = var3;
        var2 = var2.state;
        var _closure2_slot11 = var2;
        var3 = _closure1_slot16;
        var2 = undefined;
        var1 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = _closure1_slot21;
                var4 = _closure2_slot0;
                var1 = undefined;
                var6 = var2.bind(var1)(var4);
                var3 = _closure1_slot22;
                var2 = {};
                var7 = _closure2_slot3;
                var2['content'] = var7;
                var7 = _closure2_slot9;
                var2['type'] = var7;
                var7 = _closure2_slot11;
                var9 = null;
                if(!(var9 == var7)) { _fun0008_ip = 65; continue _fun0008 }
 53:
                var5 = _closure1_slot15;
                var5 = var5.SENDING;
                _fun0008_ip = 69; continue _fun0008;
 65:
                var5 = _closure2_slot11;
 69:
                var2['state'] = var5;
                var5 = _closure2_slot5;
                var2['channel_id'] = var5;
                var5 = _closure2_slot6;
                var2['tts'] = var5;
                var5 = _closure2_slot4;
                var2['id'] = var5;
                var5 = _closure2_slot7;
                var2['nonce'] = var5;
                var5 = _closure2_slot8;
                var7 = 'string';
                var5 = typeof var5;
                if(!(var7 !== var5)) { _fun0008_ip = 138; continue _fun0008 }
 122:
                var7 = _closure2_slot8;
                var5 = var7.toISOString;
                var5 = var5.bind(var7)();
                _fun0008_ip = 142; continue _fun0008;
 138:
                var5 = _closure2_slot8;
 142:
                var2['timestamp'] = var5;
                var5 = _closure2_slot10;
                var2['flags'] = var5;
                var5 = _closure2_slot1;
                if(!(var9 == var5)) { _fun0008_ip = 180; continue _fun0008 }
 163:
                var7 = var9 == var6;
                var5 = undefined;
                if(var7) { _fun0008_ip = 178; continue _fun0008 }
 172:
                var5 = var6.file;
 178:
                _fun0008_ip = 184; continue _fun0008;
 180:
                var5 = _closure2_slot1;
 184:
                var2['file'] = var5;
                var5 = _closure2_slot2;
                if(!(var9 == var5)) { _fun0008_ip = 214; continue _fun0008 }
 197:
                var7 = var9 == var6;
                var5 = undefined;
                if(var7) { _fun0008_ip = 212; continue _fun0008 }
 206:
                var5 = var6.sendMessageOptions;
 212:
                _fun0008_ip = 245; continue _fun0008;
 214:
                var6 = {};
                var7 = _closure2_slot2;
                if(!(var9 == var7)) { _fun0008_ip = 228; continue _fun0008 }
 224:
                var7 = {};
                _fun0008_ip = 232; continue _fun0008;
 228:
                var7 = _closure2_slot2;
 232:
                var11 = var6;
                var10 = var7;
                var7 = copyDataProperties(var11, var10);
                var5 = var6;
 245:
                var2['sendMessageOptions'] = var5;
                var2 = var3.bind(var1)(var4, var2);
                return var1;
            }
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot24 = var4;
    var4 = function removeCachedMessage(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot16;
        var2 = undefined;
        var1 = function() {
            var4 = _closure1_slot22;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = null;
            var1 = var4.bind(var2)(var3, var1);
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot25 = var4;
    var4 = function removeCachedMessageWithMessageId(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot16;
        var2 = undefined;
        var1 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var10 = _closure2_slot0;
                var3 = _closure1_slot20;
                var1 = undefined;
                var5 = var3.bind(var1)();
                var3 = global;
                var4 = var3.Object;
                var3 = var4.entries;
                var9 = var3.bind(var4)(var5);
                var3 = var9.length;
                var8 = 0;
                var3 = var8 < var3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                if(!var3) { _fun0009_ip = 111; continue _fun0009 }
 63:
                var11 = var9[var5];
                var3 = _closure1_slot10;
                var3 = var3.bind(var1)(var11, var7);
                var4 = var3[var8];
                var3 = var3[var6];
                var3 = var3.id;
                if(!(var3 !== var10)) { _fun0009_ip = 111; continue _fun0009 }
 94:
                var5 = var5 + 1;
                var3 = var9.length;
                var3 = var5 < var3;
                var4 = undefined;
                if(var3) { _fun0009_ip = 63; continue _fun0009 }
 111:
                var3 = null;
                if(!(var3 != var4)) { _fun0009_ip = 127; continue _fun0009 }
 117:
                var2 = _closure1_slot22;
                var2 = var2.bind(var1)(var4, var3);
 127:
                return var1;
            }
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot26 = var4;
    var4 = function updateCachedMessage(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot16;
        var2 = undefined;
        var1 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var5 = _closure1_slot21;
                var4 = _closure2_slot0;
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = null;
                if(!(var4 != var5)) { _fun0010_ip = 64; continue _fun0010 }
 27:
                var4 = {};
                var7 = var4;
                var6 = var5;
                var5 = copyDataProperties(var7, var6);
                var6 = _closure2_slot1;
                var7 = var4;
                var5 = copyDataProperties(var7, var6);
                var3 = _closure1_slot22;
                var2 = _closure2_slot0;
                var2 = var3.bind(var1)(var2, var4);
 64:
                return var1;
            }
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot27 = var4;
    var4 = function getAllCachedMessages() {
        var3 = _closure1_slot16;
        var2 = _closure1_slot20;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot28 = var4;
    var4 = function messageTimestampIsInInterval(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 == var4)) { _fun0011_ip = 13; continue _fun0011 }
 9:
            var1 = false;
            return var1;
 13:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 18;
            var5 = var6[var2];
            var3 = undefined;
            var5 = var7.bind(var3)(var5);
            var5 = var5.bind(var3)();
            var2 = var6[var2];
            var2 = var7.bind(var3)(var2);
            var4 = var2.bind(var3)(var4);
            var2 = _closure1_slot0;
            var1 = 19;
            var1 = var6[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.isWithinInterval;
            var1 = arg2;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        }
    };
    var _closure1_slot29 = var4;
    var4 = function createFailedMessage(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var5 = arg1;
            var10 = var5.channel_id;
            var12 = var5.content;
            var4 = var5.tts;
            var11 = var5.state;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 20;
            var6 = var8[var1];
            var1 = undefined;
            var9 = var7.bind(var1)(var6);
            var6 = {};
            var6['channelId'] = var10;
            var6['content'] = var12;
            var6['tts'] = var4;
            var4 = _closure1_slot15;
            var12 = var4.SEND_FAILED;
            var6['state'] = var12;
            var9 = var9.bind(var1)(var6);
            var _closure2_slot0 = var9;
            var6 = var5.timestamp;
            var9['timestamp'] = var6;
            var5 = var5.file;
            var _closure2_slot1 = var5;
            var6 = 21;
            var6 = var8[var6];
            var8 = var7.bind(var1)(var6);
            var7 = var8.receiveMessage;
            var6 = {};
            var4 = var4.SENDING;
            var4 = var11 === var4;
            var6['isHydratingExpiredPendingMessage'] = var4;
            var15 = true;
            var18 = var8;
            var17 = var10;
            var16 = var9;
            var14 = var6;
            var4 = var18[var7](var17, var16, var15, var14, var13);
            var4 = null;
            if(!(var4 != var5)) { _fun0012_ip = 208; continue _fun0012 }
 170:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 22;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.wait;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.restoreFailedUpload;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
 208:
            return var1;
        }
    };
    var _closure1_slot30 = var4;
    var4 = function() {
        var4 = _closure1_slot9;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 205; continue _fun0013 }
 13:
                    var6 = var9.channel_id;
                    var5 = var9.file;
                    var8 = var9.sendMessageOptions;
                    var4 = _closure1_slot13;
                    var2 = var4.getChannel;
                    var7 = var2.bind(var4)(var6);
                    var4 = null;
                    if(!(var4 != var7)) { _fun0013_ip = 200; continue _fun0013 }
 56:
                    var10 = var4 == var5;
                    var6 = undefined;
                    var2 = undefined;
                    if(var10) { _fun0013_ip = 73; continue _fun0013 }
 67:
                    var2 = var5.items;
 73:
                    var4 = var4 != var2;
                    var5 = undefined;
                    if(!var4) { _fun0013_ip = 85; continue _fun0013 }
 82:
                    var5 = var2;
 85:
                    var10 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var4 = 25;
                    var4 = var2[var4];
                    var10 = var10.bind(var6)(var4);
                    var4 = 24;
                    var4 = var2[var4];
                    var2 = var2.paths;
                    var2 = var10.bind(var6)(var4, var2);
                    SaveGenerator(address=127);
 125:
                    return var2;
 127:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 197; continue _fun0013 }
 133:
                    var4 = var2.default;
                    var10 = _closure1_slot11;
                    var3 = {};
                    var14 = var3;
                    var13 = var9;
                    var9 = copyDataProperties(var14, var13);
                    var9 = var10.prototype;
                    var9 = Object.create(var9, {constructor: {value: var10}});
                    var15 = var9;
                    var14 = var3;
                    var3 = new var15[var10](var14, var13);
                    var13 = var3 instanceof Object ? var3 : var9;
                    var15 = undefined;
                    var14 = var7;
                    var12 = var5;
                    var11 = var8;
                    var3 = var15[var4](var14, var13, var12, var11, var10);
                    var3 = true;
                    return var3;
 197:
                    return var2;
 200:
                    var2 = false;
                    return var2;
 205:
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
    var _closure1_slot31 = var4;
    var4 = function() {
        var4 = _closure1_slot9;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    StartGenerator();
                    var19 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 457; continue _fun0014 }
 13:
                    var2 = _closure1_slot28;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=30);
 28:
                    return var2;
 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0014_ip = 454; continue _fun0014 }
 39:
                    var6 = _closure1_slot17;
                    var5 = var6.verbose;
                    var13 = global;
                    var7 = var13.Object;
                    var4 = var7.keys;
                    var4 = var4.bind(var7)(var2);
                    var9 = var4.length;
                    var4 = var13.HermesInternal;
                    var8 = var4.concat;
                    var7 = 'rehydrateFailedMessages with ';
                    var4 = ' messagess';
                    var4 = var8.bind(var7)(var9, var4);
                    var4 = var5.bind(var6)(var4);
                    var16 = var2;
                    var11 = 'sending message with data ';
                    var10 = 'failed message with data ';
                    var9 = 'dropping stale message, timestamp ';
                    var8 = null;
                    var7 = undefined;
                    var6 = undefined;
                    for(var12 in var16)
 144:
                    {
 156:
                        var20 = var12;
                        var5 = var2[var20];
                        var4 = var5.channel_id;
                        if(var4 !== var19) { _fun0014_ip = 144; continue _fun0014 }
 172:
                        var4 = _closure1_slot25;
                        var4 = var4.bind(var3)(var20);
                        var21 = _closure1_slot14;
                        var20 = var21.getMessage;
                        var4 = var5.id;
                        var4 = var20.bind(var21)(var19, var4);
                        if(var8 != var4) { _fun0014_ip = 144; continue _fun0014 }
 206:
                        var21 = var5.timestamp;
                        var20 = var5.state;
                        var22 = _closure1_slot29;
                        var4 = _closure1_slot19;
                        var4 = var22.bind(var3)(var21, var4);
                        if(var4) { _fun0014_ip = 273; continue _fun0014 }
 234:
                        var23 = _closure1_slot17;
                        var22 = var23.verbose;
                        var4 = var13.HermesInternal;
                        var4 = var4.concat;
                        var4 = var4.bind(var9)(var21);
                        var4 = var22.bind(var23)(var4);
                        var7 = var21;
                        var6 = var20;
                        _fun0014_ip = 144; continue _fun0014;
 273:
                        var4 = _closure1_slot15;
                        var4 = var4.SENDING;
                        if(!(var20 === var4)) { _fun0014_ip = 304; continue _fun0014 }
 287:
                        var22 = _closure1_slot29;
                        var4 = _closure1_slot18;
                        var4 = var22.bind(var3)(var21, var4);
                        if(var4) { _fun0014_ip = 372; continue _fun0014 }
 304:
                        var23 = _closure1_slot17;
                        var22 = var23.info;
                        var24 = var13.JSON;
                        var4 = var24.stringify;
                        var24 = var4.bind(var24)(var5);
                        var4 = var13.HermesInternal;
                        var4 = var4.concat;
                        var4 = var4.bind(var10)(var24);
                        var4 = var22.bind(var23)(var4);
                        var4 = _closure1_slot30;
                        var4 = var4.bind(var3)(var5);
                        var7 = var21;
                        var6 = var20;
                        _fun0014_ip = 144; continue _fun0014;
 372:
                        var23 = _closure1_slot17;
                        var22 = var23.verbose;
                        var24 = var13.JSON;
                        var4 = var24.stringify;
                        var24 = var4.bind(var24)(var5);
                        var4 = var13.HermesInternal;
                        var4 = var4.concat;
                        var4 = var4.bind(var11)(var24);
                        var4 = var22.bind(var23)(var4);
                        var4 = _closure1_slot31;
                        var4 = var4.bind(var3)(var5);
                        SaveGenerator(address=433);
 431:
                        return var4;
 433:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        var7 = var21;
                        var6 = var20;
                        if(!var5) { _fun0014_ip = 144; continue _fun0014 }
 448:
                        return var4;
                    }
 451:
                    return var3;
 454:
                    return var2;
 457:
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
    var _closure1_slot32 = var4;
    var4 = 'loadedChannels';
    var4 = var8.bind(var1)(var4);
    var _closure1_slot33 = var4;
    var4 = 28;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function LocalMessageCacheManager(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot3;
                var5 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var6, var5);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot6;
                var10 = var1.bind(var4)(var5);
                var5 = _closure1_slot5;
                var1 = _closure1_slot36;
                var1 = var1.bind(var4)();
                if(var1) { _fun0015_ip = 86; continue _fun0015 }
 73:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0015_ip = 120; continue _fun0015;
 86:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var4)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
 120:
                var1 = var5.bind(var4)(var6, var1);
                var _closure3_slot0 = var1;
                var9 = global;
                var8 = var9.Object;
                var7 = var8.defineProperty;
                var6 = _closure1_slot33;
                var5 = {};
                var10 = true;
                var5['writable'] = var10;
                var9 = var9.Set;
                var10 = var9.prototype;
                var10 = Object.create(var10, {constructor: {value: var9}});
                var15 = var10;
                var9 = new var15[var9](var14);
                var9 = var9 instanceof Object ? var9 : var10;
                var5['value'] = var9;
                var5 = var7.bind(var8)(var1, var6, var5);
                var5 = _closure1_slot9;
                var3 = function* () {
                    var1 = function* anon_0_() {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0016_ip = 403; continue _fun0016 }
 12:
                            var3 = undefined;
                            var _closure5_slot0 = var3;
                            var2 = _closure1_slot28;
                            var2 = var2.bind(var3)();
                            SaveGenerator(address=33);
 31:
                            return var2;
 33:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0016_ip = 400; continue _fun0016 }
 42:
                            var12 = function* _loop(arg1) {
                                var1 = function* anon_0__loop(arg1) {
                                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                        if(var3) { _fun0017_ip = 70; continue _fun0017 }
 9:
                                        var3 = arg1;
                                        var _closure7_slot0 = var3;
                                        var4 = _closure5_slot0;
                                        var3 = _closure1_slot15;
                                        var3 = var3.SENDING;
                                        if(!(var4 === var3)) { _fun0017_ip = 65; continue _fun0017 }
 40:
                                        var3 = global;
                                        var5 = var3.setTimeout;
                                        var4 = undefined;
                                        var3 = function() {
                                            var3 = _closure1_slot1;
                                            var2 = _closure1_slot2;
                                            var1 = 26;
                                            var2 = var2[var1];
                                            var1 = undefined;
                                            var4 = var3.bind(var1)(var2);
                                            var3 = var4.fetchMessages;
                                            var2 = {};
                                            var5 = _closure7_slot0;
                                            var2['channelId'] = var5;
                                            var2 = var3.bind(var4)(var2);
                                            return var1;
                                        };
                                        var2 = 0;
                                        var2 = var5.bind(var4)(var3, var2);
 65:
                                        var2 = undefined;
                                        return var2;
 70:
                                        return var1;
                                    }
                                };
                                return var1;
                            };
                            var11 = global;
                            var5 = var11.Object;
                            var4 = var5.values;
                            var10 = var4.bind(var5)(var2);
                            var4 = var10.length;
                            var9 = 0;
                            var4 = var9 < var4;
                            var8 = 'iterator is not an object';
                            var7 = 'iterator.throw() did not return an object';
                            var6 = 'throw';
                            var5 = 'iterator.next() did not return an object';
                            if(!var4) { _fun0016_ip = 397; continue _fun0016 }
 106:
                            var14 = var10[var9];
                            var4 = var14.channel_id;
                            var14 = var14.state;
                            _closure5_slot0 = var14;
                            var14 = var12.bind(var3)(var4);
                            var4 = var11.Symbol;
                            var4 = var4.iterator;
                            var4 = var14[var4];
                            var15 = var4.bind(var14)();
                            var23 = var15;
                            var22 = var8;
                            var4 = ensureObject(var23, var22);
                            var20 = var15.next;
                            var19 = undefined;
 166:
                            var14 = var19;
                            var14 = var20.bind(var15)(var14);
                            var23 = var14;
                            var22 = var5;
                            var16 = ensureObject(var23, var22);
                            var4 = var14;
                            var16 = var14.done;
                            if(var16) { _fun0016_ip = 377; continue _fun0016 }
 198: // try_start_0
                            var16 = generatorSetDelegated();
                            SaveGenerator(address=253);
 204:
                            return var14;
 206: // try_end0 // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=15);
                            var23 = var15;
                            var22 = var6;
                            var14 = getMethod(var23, var22);
                            if(!(var14 !== var3)) { _fun0016_ip = 336; continue _fun0016 }
 222:
                            var14 = var14.bind(var15)(var16);
                            var23 = var14;
                            var22 = var7;
                            var16 = ensureObject(var23, var22);
                            var16 = var14.done;
                            if(var16) { _fun0016_ip = 331; continue _fun0016 }
 245:
                            var16 = generatorSetDelegated();
                            SaveGenerator(address=253);
 251:
                            return var14;
 253: // try_start_1
                            ResumeGenerator(result_out_reg=15, return_bool_out_reg=17);
                            var19 = var16;
                            var17 = var18;
                            if(!var17) { _fun0016_ip = 166; continue _fun0016 }
 265:
                            var19 = var16;
 268: // try_end1
                            var22 = 'return';
                            var23 = var15;
                            var21 = getMethod(var23, var22);
                            if(!(var21 !== var3)) { _fun0016_ip = 328; continue _fun0016 }
 283:
                            var17 = var19;
                            var17 = var21.bind(var15)(var17);
                            var22 = 'iterator.return() did not return an object';
                            var23 = var17;
                            var21 = ensureObject(var23, var22);
                            var21 = var17.done;
                            if(var21) { _fun0016_ip = 320; continue _fun0016 }
 312:
                            var21 = generatorSetDelegated();
                            SaveGenerator(address=253);
 318:
                            return var17;
 320:
                            var17 = var17.value;
                            return var17;
 328:
                            return var16;
 331:
                            var4 = var14;
                            _fun0016_ip = 377; continue _fun0016;
 336:
                            var22 = 'return';
                            var23 = var15;
                            var14 = getMethod(var23, var22);
                            if(!(var14 !== var3)) { _fun0016_ip = 365; continue _fun0016 }
 351:
                            var23 = var14.bind(var15)();
                            var22 = 'iterator.return() did not return an object';
                            var14 = ensureObject(var23, var22);
 365:
                            var23 = 'yield* delegate must have a .throw() method';
                            var14 = throwTypeError(var23);
                            throw var3;
 377:
                            var4 = var4.value;
                            var9 = var9 + 1;
                            var4 = var10.length;
                            if(var9 < var4) { _fun0016_ip = 106; continue _fun0016 }
 397:
                            return var3;
 400:
                            return var2;
 403:
                            return var1;
                        }
                    };
                    return var1;
                };
                var3 = var5.bind(var4)(var3);
                var1['handlePostConnectionOpen'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.id;
                    var2 = _closure1_slot26;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var1['handleMessageDelete'] = var3;
                var3 = function() {
                    var3 = _closure1_slot16;
                    var1 = undefined;
                    var2 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.Storage;
                        var2 = var3.remove;
                        var1 = 'LocalMessageCacheManagerMessageCacheKey';
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['handleLogout'] = var3;
                var3 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var1 = arg1;
                        var5 = var1.message;
                        var4 = var1.sendMessageOptions;
                        var2 = var5.author;
                        var3 = null;
                        var6 = var3 == var2;
                        var1 = undefined;
                        var7 = undefined;
                        if(var6) { _fun0018_ip = 38; continue _fun0018 }
 33:
                        var7 = var2.id;
 38:
                        var8 = _closure1_slot12;
                        var6 = var8.getId;
                        var6 = var6.bind(var8)();
                        if(!(var7 === var6)) { _fun0018_ip = 190; continue _fun0018 }
 62:
                        var6 = var5.nonce;
                        if(!(var3 == var6)) { _fun0018_ip = 77; continue _fun0018 }
 72:
                        var6 = var5.id;
 77:
                        var7 = var5.state;
                        var3 = _closure1_slot15;
                        var3 = var3.SENDING;
                        if(!(var7 !== var3)) { _fun0018_ip = 126; continue _fun0018 }
 96:
                        var7 = var5.state;
                        var3 = _closure1_slot15;
                        var3 = var3.SEND_FAILED;
                        if(!(var7 !== var3)) { _fun0018_ip = 126; continue _fun0018 }
 115:
                        var3 = _closure1_slot25;
                        var3 = var3.bind(var1)(var6);
                        _fun0018_ip = 190; continue _fun0018;
 126:
                        var8 = _closure1_slot8;
                        var3 = _closure3_slot0;
                        var7 = _closure1_slot33;
                        var3 = var8.bind(var1)(var3, var7);
                        var8 = var3[var7];
                        var7 = var8.add;
                        var3 = var5.channel_id;
                        var3 = var7.bind(var8)(var3);
                        var3 = _closure1_slot24;
                        var2 = {};
                        var2['key'] = var6;
                        var2['message'] = var5;
                        var2['sendMessageOptions'] = var4;
                        var2 = var3.bind(var1)(var2);
 190:
                        return var1;
                    }
                };
                var1['handleMessageCreate'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.channelId;
                    var2 = _closure3_slot0;
                    var1 = var2.handleChannelLoaded;
                    var1 = var1.bind(var2)(var3);
                    var1 = undefined;
                    return var1;
                };
                var1['handleLoadMessagesSuccess'] = var3;
                var3 = function(arg1) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.privateChannels;
                        var1 = var1.initialGuildChannels;
                        var6 = new Array(2);
                        var6[0] = var2;
                        var6[1] = var1;
                        var1 = var6.length;
                        var5 = 0;
                        var2 = var5 < var1;
                        var1 = undefined;
                        if(!var2) { _fun0019_ip = 126; continue _fun0019 }
 49:
                        var7 = _closure1_slot34;
                        var2 = var6[var5];
                        var8 = var7.bind(var1)(var2);
                        var7 = var8.bind(var1)();
                        var2 = var7.done;
                        if(var2) { _fun0019_ip = 114; continue _fun0019 }
 74:
                        var2 = var7.value;
                        var10 = var2.id;
                        var9 = _closure3_slot0;
                        var2 = var9.handleChannelLoaded;
                        var2 = var2.bind(var9)(var10);
                        var9 = var8.bind(var1)();
                        var2 = var9.done;
                        var7 = var9;
                        if(!var2) { _fun0019_ip = 74; continue _fun0019 }
 114:
                        var5 = var5 + 1;
                        var2 = var6.length;
                        if(var5 < var2) { _fun0019_ip = 49; continue _fun0019 }
 126:
                        return var1;
                    }
                };
                var1['handleCacheLoaded'] = var3;
                var3 = function() {
                    var4 = _closure1_slot9;
                    var3 = undefined;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                                StartGenerator();
                                var4 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0020_ip = 88; continue _fun0020 }
 10:
                                var7 = _closure1_slot8;
                                var5 = _closure3_slot0;
                                var6 = _closure1_slot33;
                                var2 = undefined;
                                var5 = var7.bind(var2)(var5, var6);
                                var6 = var5[var6];
                                var5 = var6.has;
                                var5 = var5.bind(var6)(var4);
                                if(var5) { _fun0020_ip = 85; continue _fun0020 }
 53:
                                var5 = var6.add;
                                var5 = var5.bind(var6)(var4);
                                var3 = _closure1_slot32;
                                var3 = var3.bind(var2)(var4);
                                SaveGenerator(address=76);
 74:
                                return var3;
 76:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                                if(!var4) { _fun0020_ip = 85; continue _fun0020 }
 82:
                                return var3;
 85:
                                return var2;
 88:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function(arg1) {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var3 = var3.bind(var4)();
                var1['handleChannelLoaded'] = var3;
                var3 = function(arg1) {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.message;
                        var1 = var1.file;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0021_ip = 64; continue _fun0021 }
 20:
                        var5 = var4.nonce;
                        if(!(var2 == var5)) { _fun0021_ip = 35; continue _fun0021 }
 30:
                        var5 = var4.id;
 35:
                        var3 = _closure1_slot24;
                        var2 = {};
                        var2['key'] = var5;
                        var2['message'] = var4;
                        var2['file'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
 64:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleFileUploadStart'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.file;
                    var _closure4_slot0 = var1;
                    var3 = _closure1_slot16;
                    var1 = undefined;
                    var2 = function() {
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                            var4 = _closure1_slot23;
                            var1 = _closure4_slot0;
                            var3 = var1.id;
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = null;
                            if(!(var3 != var4)) { _fun0022_ip = 53; continue _fun0022 }
 32:
                            var3 = _closure1_slot27;
                            var2 = {};
                            var5 = _closure4_slot0;
                            var2['file'] = var5;
                            var2 = var3.bind(var1)(var4, var2);
 53:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['handleUploadProgress'] = var3;
                var3 = function(arg1) {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.aborted;
                        var3 = var1.file;
                        var1 = undefined;
                        var _closure4_slot0 = var1;
                        if(!var4) { _fun0023_ip = 49; continue _fun0023 }
 26:
                        _closure4_slot0 = var3;
                        var3 = _closure1_slot16;
                        var2 = function() {
                            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                                var4 = _closure1_slot23;
                                var1 = _closure4_slot0;
                                var3 = var1.id;
                                var1 = undefined;
                                var4 = var4.bind(var1)(var3);
                                var3 = null;
                                if(!(var3 != var4)) { _fun0024_ip = 42; continue _fun0024 }
 32:
                                var2 = _closure1_slot22;
                                var2 = var2.bind(var1)(var4, var3);
 42:
                                return var1;
                            }
                        };
                        var2 = var3.bind(var1)(var2);
 49:
                        return var1;
                    }
                };
                var1['handleUploadComplete'] = var3;
                var3 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.file;
                    var4 = var2.messageId;
                    var3 = _closure1_slot27;
                    var2 = {};
                    var2['file'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var4, var2);
                    return var1;
                };
                var1['handleRestoreFailedUpload'] = var3;
                var2 = function(arg1) {
                    var1 = arg1;
                    var4 = var1.messageId;
                    var3 = _closure1_slot27;
                    var2 = {};
                    var1 = _closure1_slot15;
                    var1 = var1.SEND_FAILED;
                    var2['state'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var4, var2);
                    return var1;
                };
                var1['handleTextMessageFailed'] = var2;
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
        var1 = '_terminate';
        var5['key'] = var1;
        var1 = function _terminate() {
            var2 = this;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 22;
            var6 = var5[var3];
            var1 = undefined;
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleLogout;
            var6 = 'LOGOUT';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleMessageCreate;
            var6 = 'MESSAGE_CREATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleTextMessageFailed;
            var6 = 'MESSAGE_SEND_FAILED';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleFileUploadStart;
            var6 = 'UPLOAD_START';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleMessageDelete;
            var6 = 'MESSAGE_DELETE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleRestoreFailedUpload;
            var6 = 'UPLOAD_RESTORE_FAILED_UPLOAD';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleUploadComplete;
            var6 = 'UPLOAD_COMPLETE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleUploadProgress;
            var6 = 'UPLOAD_PROGRESS';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleLoadMessagesSuccess;
            var6 = 'LOAD_MESSAGES_SUCCESS';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleCacheLoaded;
            var6 = 'CACHE_LOADED';
            var6 = var8.bind(var9)(var6, var7);
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.unsubscribe;
            var3 = var2.handlePostConnectionOpen;
            var2 = 'POST_CONNECTION_OPEN';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = '_initialize';
        var5['key'] = var7;
        var6 = function _initialize() {
            var4 = this;
            var _closure3_slot0 = var4;
            var6 = _closure1_slot17;
            var5 = var6.verbose;
            var1 = 'cache manager initialize';
            var1 = var5.bind(var6)(var1);
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 22;
            var8 = var7[var5];
            var1 = undefined;
            var11 = var6.bind(var1)(var8);
            var10 = var11.subscribe;
            var9 = var4.handleLogout;
            var8 = 'LOGOUT';
            var8 = var10.bind(var11)(var8, var9);
            var8 = var7[var5];
            var11 = var6.bind(var1)(var8);
            var10 = var11.subscribe;
            var9 = var4.handleMessageCreate;
            var8 = 'MESSAGE_CREATE';
            var8 = var10.bind(var11)(var8, var9);
            var8 = var7[var5];
            var11 = var6.bind(var1)(var8);
            var10 = var11.subscribe;
            var9 = var4.handleTextMessageFailed;
            var8 = 'MESSAGE_SEND_FAILED';
            var8 = var10.bind(var11)(var8, var9);
            var8 = var7[var5];
            var11 = var6.bind(var1)(var8);
            var10 = var11.subscribe;
            var9 = var4.handleFileUploadStart;
            var8 = 'UPLOAD_START';
            var8 = var10.bind(var11)(var8, var9);
            var8 = var7[var5];
            var11 = var6.bind(var1)(var8);
            var10 = var11.subscribe;
            var9 = var4.handleMessageDelete;
            var8 = 'MESSAGE_DELETE';
            var8 = var10.bind(var11)(var8, var9);
            var8 = var7[var5];
            var11 = var6.bind(var1)(var8);
            var10 = var11.subscribe;
            var9 = var4.handleRestoreFailedUpload;
            var8 = 'UPLOAD_RESTORE_FAILED_UPLOAD';
            var8 = var10.bind(var11)(var8, var9);
            var8 = var7[var5];
            var11 = var6.bind(var1)(var8);
            var10 = var11.subscribe;
            var9 = var4.handleUploadComplete;
            var8 = 'UPLOAD_COMPLETE';
            var8 = var10.bind(var11)(var8, var9);
            var8 = var7[var5];
            var11 = var6.bind(var1)(var8);
            var10 = var11.subscribe;
            var9 = var4.handleUploadProgress;
            var8 = 'UPLOAD_PROGRESS';
            var8 = var10.bind(var11)(var8, var9);
            var5 = var7[var5];
            var7 = var6.bind(var1)(var5);
            var6 = var7.subscribe;
            var5 = var4.handlePostConnectionOpen;
            var4 = 'POST_CONNECTION_OPEN';
            var4 = var6.bind(var7)(var4, var5);
            var3 = _closure1_slot9;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0025_ip = 432; continue _fun0025 }
 10:
                        var2 = _closure1_slot28;
                        var4 = undefined;
                        var2 = var2.bind(var4)();
                        SaveGenerator(address=27);
 25:
                        return var2;
 27:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0025_ip = 429; continue _fun0025 }
 36:
                        var7 = _closure1_slot17;
                        var5 = var7.verbose;
                        var17 = global;
                        var8 = var17.Object;
                        var3 = var8.keys;
                        var3 = var3.bind(var8)(var2);
                        var10 = var3.length;
                        var3 = var17.HermesInternal;
                        var9 = var3.concat;
                        var8 = 'initialized with ';
                        var3 = ' messages in local cache';
                        var3 = var9.bind(var8)(var10, var3);
                        var3 = var5.bind(var7)(var3);
                        var5 = var17.Object;
                        var3 = var5.values;
                        var16 = var3.bind(var5)(var2);
                        var3 = var16.length;
                        var15 = 0;
                        var3 = var15 < var3;
                        var14 = 'manually invoking handleChannelLoaded';
                        var13 = 'rehydrating cached messages ';
                        var12 = ' {ready: ';
                        var11 = ', cached: ';
                        var10 = '}';
                        var9 = 27;
                        var8 = null;
                        if(!var3) { _fun0025_ip = 346; continue _fun0025 }
 174:
                        var3 = var16[var15];
                        var18 = var3.channel_id;
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var9];
                        var7 = var7.bind(var4)(var3);
                        var3 = var7.get;
                        var7 = var3.bind(var7)(var18);
                        if(!(var8 == var7)) { _fun0025_ip = 228; continue _fun0025 }
 214:
                        var7 = {'ready': false, 'cached': false};
 228:
                        var3 = var7.ready;
                        var23 = var7.cached;
                        var20 = _closure1_slot17;
                        var19 = var20.verbose;
                        var7 = var17.HermesInternal;
                        var7 = var7.concat;
                        var28 = var13;
                        var27 = var18;
                        var26 = var12;
                        var25 = var3;
                        var24 = var11;
                        var22 = var10;
                        var7 = var28[var7](var27, var26, var25, var24, var23, var22, var21);
                        var7 = var19.bind(var20)(var7);
                        if(!var3) { _fun0025_ip = 331; continue _fun0025 }
 291:
                        var7 = _closure1_slot17;
                        var3 = var7.verbose;
                        var3 = var3.bind(var7)(var14);
                        var7 = _closure3_slot0;
                        var3 = var7.handleChannelLoaded;
                        var3 = var3.bind(var7)(var18);
                        SaveGenerator(address=325);
 323:
                        return var3;
 325:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                        if(var7) { _fun0025_ip = 426; continue _fun0025 }
 331:
                        var15 = var15 + 1;
                        var7 = var16.length;
                        if(var15 < var7) { _fun0025_ip = 174; continue _fun0025 }
 346:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 22;
                        var9 = var8[var6];
                        var12 = var7.bind(var4)(var9);
                        var11 = var12.subscribe;
                        var5 = _closure3_slot0;
                        var10 = var5.handleLoadMessagesSuccess;
                        var9 = 'LOAD_MESSAGES_SUCCESS';
                        var9 = var11.bind(var12)(var9, var10);
                        var6 = var8[var6];
                        var8 = var7.bind(var4)(var6);
                        var7 = var8.subscribe;
                        var6 = var5.handleCacheLoaded;
                        var5 = 'CACHE_LOADED';
                        var5 = var7.bind(var8)(var5, var6);
                        return var4;
 426:
                        return var3;
 429:
                        return var2;
 432:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var3.bind(var1)(var2);
            var2 = var2.bind(var1)();
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var16 = var4;
    var2 = new var16[var2](var15);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/local_message_caching/LocalMessageCacheManager.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();