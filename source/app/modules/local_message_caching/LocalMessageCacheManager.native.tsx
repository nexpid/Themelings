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
            var9 = _closure1_slot35;
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
            var7 = _closure1_slot35;
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
    var _closure1_slot34 = var1;
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
    var _closure1_slot35 = var1;
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
case 0:
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
            if(!(var2 == var1)) { _fun0005_ip = 4; continue _fun0005 }
case 40:
            var1 = {};
case 4:
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
case 0:
            var3 = arg1;
            var6 = arg2;
            var10 = _closure1_slot17;
            var9 = var10.verbose;
            var7 = null;
            var1 = var7 == var6;
            var4 = undefined;
            var8 = undefined;
            if(var1) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var8 = var6.id;
case 41:
            var1 = var7 == var6;
            var5 = undefined;
            if(var1) { _fun0006_ip = 43; continue _fun0006 }
case 2:
            var5 = var6.channel_id;
case 43:
            var1 = '_writeMessage';
            var1 = var9.bind(var10)(var1, var8, var5);
            var1 = _closure1_slot20;
            var1 = var1.bind(var4)();
            if(!(var7 == var6)) { _fun0006_ip = 44; continue _fun0006 }
case 38:
            var5 = delete var1[var3];
            _fun0006_ip = 45; continue _fun0006;
case 44:
            var5 = {};
            var13 = var5;
            var12 = var6;
            var8 = copyDataProperties(var13, var12);
            var6 = var6.content;
            var8 = var7 != var6;
            var7 = '';
            if(!var8) { _fun0006_ip = 46; continue _fun0006 }
case 13:
            var7 = var6;
case 46:
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
case 45:
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
case 0:
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
            if(!var1) { _fun0007_ip = 47; continue _fun0007 }
case 48:
            var3 = var9[var4];
            var1 = _closure1_slot10;
            var3 = var1.bind(var2)(var3, var7);
            var1 = var3[var8];
            var3 = var3[var6];
            var12 = var3.file;
            var13 = var5 == var12;
            var3 = undefined;
            if(var13) { _fun0007_ip = 49; continue _fun0007 }
case 11:
            var3 = var12.id;
case 49:
            if(!(var3 !== var11)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var4 = var4 + 1;
            var3 = var9.length;
            if(var4 < var3) { _fun0007_ip = 48; continue _fun0007 }
case 47:
            return var2;
case 50:
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
case 0:
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
                if(!(var9 == var7)) { _fun0008_ip = 52; continue _fun0008 }
case 40:
                var5 = _closure1_slot15;
                var5 = var5.SENDING;
                _fun0008_ip = 53; continue _fun0008;
case 52:
                var5 = _closure2_slot11;
case 53:
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
                if(!(var7 !== var5)) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                var7 = _closure2_slot8;
                var5 = var7.toISOString;
                var5 = var5.bind(var7)();
                _fun0008_ip = 56; continue _fun0008;
case 54:
                var5 = _closure2_slot8;
case 56:
                var2['timestamp'] = var5;
                var5 = _closure2_slot10;
                var2['flags'] = var5;
                var5 = _closure2_slot1;
                if(!(var9 == var5)) { _fun0008_ip = 57; continue _fun0008 }
case 14:
                var7 = var9 == var6;
                var5 = undefined;
                if(var7) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                var5 = var6.file;
case 58:
                _fun0008_ip = 60; continue _fun0008;
case 57:
                var5 = _closure2_slot1;
case 60:
                var2['file'] = var5;
                var5 = _closure2_slot2;
                if(!(var9 == var5)) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                var7 = var9 == var6;
                var5 = undefined;
                if(var7) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                var5 = var6.sendMessageOptions;
case 63:
                _fun0008_ip = 65; continue _fun0008;
case 61:
                var6 = {};
                var7 = _closure2_slot2;
                if(!(var9 == var7)) { _fun0008_ip = 66; continue _fun0008 }
case 67:
                var7 = {};
                _fun0008_ip = 68; continue _fun0008;
case 66:
                var7 = _closure2_slot2;
case 68:
                var11 = var6;
                var10 = var7;
                var7 = copyDataProperties(var11, var10);
                var5 = var6;
case 65:
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
case 0:
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
                if(!var3) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                var11 = var9[var5];
                var3 = _closure1_slot10;
                var3 = var3.bind(var1)(var11, var7);
                var4 = var3[var8];
                var3 = var3[var6];
                var3 = var3.id;
                if(!(var3 !== var10)) { _fun0009_ip = 69; continue _fun0009 }
case 71:
                var5 = var5 + 1;
                var3 = var9.length;
                var3 = var5 < var3;
                var4 = undefined;
                if(var3) { _fun0009_ip = 70; continue _fun0009 }
case 69:
                var3 = null;
                if(!(var3 != var4)) { _fun0009_ip = 72; continue _fun0009 }
case 47:
                var2 = _closure1_slot22;
                var2 = var2.bind(var1)(var4, var3);
case 72:
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
case 0:
                var5 = _closure1_slot21;
                var4 = _closure2_slot0;
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = null;
                if(!(var4 != var5)) { _fun0010_ip = 73; continue _fun0010 }
case 74:
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
case 73:
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
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 == var4)) { _fun0011_ip = 75; continue _fun0011 }
case 76:
            var1 = false;
            return var1;
case 75:
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
case 0:
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
            if(!(var4 != var5)) { _fun0012_ip = 77; continue _fun0012 }
case 78:
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
case 77:
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
case 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 22; continue _fun0013 }
case 75:
                    var6 = var9.channel_id;
                    var5 = var9.file;
                    var8 = var9.sendMessageOptions;
                    var4 = _closure1_slot13;
                    var2 = var4.getChannel;
                    var7 = var2.bind(var4)(var6);
                    var4 = null;
                    if(!(var4 != var7)) { _fun0013_ip = 79; continue _fun0013 }
case 28:
                    var10 = var4 == var5;
                    var6 = undefined;
                    var2 = undefined;
                    if(var10) { _fun0013_ip = 80; continue _fun0013 }
case 30:
                    var2 = var5.items;
case 80:
                    var4 = var4 != var2;
                    var5 = undefined;
                    if(!var4) { _fun0013_ip = 81; continue _fun0013 }
case 44:
                    var5 = var2;
case 81:
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
case 82:
                    return var2;
case 72:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 62; continue _fun0013 }
case 83:
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
case 62:
                    return var2;
case 79:
                    var2 = false;
                    return var2;
case 22:
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
case 0:
                    StartGenerator();
                    var19 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 84; continue _fun0014 }
case 75:
                    var2 = _closure1_slot28;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=30);
case 34:
                    return var2;
case 3:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0014_ip = 85; continue _fun0014 }
case 86:
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
case 87:
                    {
case 88:
                        var20 = var12;
                        var5 = var2[var20];
                        var4 = var5.channel_id;
                        if(var4 !== var19) { _fun0014_ip = 87; continue _fun0014 }
case 59:
                        var4 = _closure1_slot25;
                        var4 = var4.bind(var3)(var20);
                        var21 = _closure1_slot14;
                        var20 = var21.getMessage;
                        var4 = var5.id;
                        var4 = var20.bind(var21)(var19, var4);
                        if(var8 != var4) { _fun0014_ip = 87; continue _fun0014 }
case 64:
                        var21 = var5.timestamp;
                        var20 = var5.state;
                        var22 = _closure1_slot29;
                        var4 = _closure1_slot19;
                        var4 = var22.bind(var3)(var21, var4);
                        if(var4) { _fun0014_ip = 89; continue _fun0014 }
case 21:
                        var23 = _closure1_slot17;
                        var22 = var23.verbose;
                        var4 = var13.HermesInternal;
                        var4 = var4.concat;
                        var4 = var4.bind(var9)(var21);
                        var4 = var22.bind(var23)(var4);
                        var7 = var21;
                        var6 = var20;
                        _fun0014_ip = 87; continue _fun0014;
case 89:
                        var4 = _closure1_slot15;
                        var4 = var4.SENDING;
                        if(!(var20 === var4)) { _fun0014_ip = 90; continue _fun0014 }
case 91:
                        var22 = _closure1_slot29;
                        var4 = _closure1_slot18;
                        var4 = var22.bind(var3)(var21, var4);
                        if(var4) { _fun0014_ip = 92; continue _fun0014 }
case 90:
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
                        _fun0014_ip = 87; continue _fun0014;
case 92:
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
case 93:
                        return var4;
case 94:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        var7 = var21;
                        var6 = var20;
                        if(!var5) { _fun0014_ip = 87; continue _fun0014 }
case 95:
                        return var4;
                    }
case 96:
                    return var3;
case 85:
                    return var2;
case 84:
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
case 0:
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
                if(var1) { _fun0015_ip = 9; continue _fun0015 }
case 80:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0015_ip = 97; continue _fun0015;
case 9:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var4)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 97:
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
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0016_ip = 98; continue _fun0016 }
case 99:
                            var3 = undefined;
                            var _closure5_slot0 = var3;
                            var2 = _closure1_slot28;
                            var2 = var2.bind(var3)();
                            SaveGenerator(address=33);
case 100:
                            return var2;
case 33:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0016_ip = 101; continue _fun0016 }
case 102:
                            var12 = function* _loop(arg1) {
                                var1 = function* anon_0__loop(arg1) {
                                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                        if(var3) { _fun0017_ip = 35; continue _fun0017 }
case 76:
                                        var3 = arg1;
                                        var _closure7_slot0 = var3;
                                        var4 = _closure5_slot0;
                                        var3 = _closure1_slot15;
                                        var3 = var3.SENDING;
                                        if(!(var4 === var3)) { _fun0017_ip = 52; continue _fun0017 }
case 103:
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
case 52:
                                        var2 = undefined;
                                        return var2;
case 35:
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
                            if(!var4) { _fun0016_ip = 104; continue _fun0016 }
case 105:
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
case 106:
                            var14 = var19;
                            var14 = var20.bind(var15)(var14);
                            var23 = var14;
                            var22 = var5;
                            var16 = ensureObject(var23, var22);
                            var4 = var14;
                            var16 = var14.done;
                            if(var16) { _fun0016_ip = 107; continue _fun0016 }
case 108: // try_start_0
                            var16 = generatorSetDelegated();
                            SaveGenerator(address=253);
case 109:
                            return var14;
case 64: // try_end0 // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=15);
                            var23 = var15;
                            var22 = var6;
                            var14 = getMethod(var23, var22);
                            if(!(var14 !== var3)) { _fun0016_ip = 110; continue _fun0016 }
case 111:
                            var14 = var14.bind(var15)(var16);
                            var23 = var14;
                            var22 = var7;
                            var16 = ensureObject(var23, var22);
                            var16 = var14.done;
                            if(var16) { _fun0016_ip = 112; continue _fun0016 }
case 65:
                            var16 = generatorSetDelegated();
                            SaveGenerator(address=253);
case 113:
                            return var14;
case 114: // try_start_1
                            ResumeGenerator(result_out_reg=15, return_bool_out_reg=17);
                            var19 = var16;
                            var17 = var18;
                            if(!var17) { _fun0016_ip = 106; continue _fun0016 }
case 24:
                            var19 = var16;
case 115: // try_end1
                            var22 = 'return';
                            var23 = var15;
                            var21 = getMethod(var23, var22);
                            if(!(var21 !== var3)) { _fun0016_ip = 116; continue _fun0016 }
case 10:
                            var17 = var19;
                            var17 = var21.bind(var15)(var17);
                            var22 = 'iterator.return() did not return an object';
                            var23 = var17;
                            var21 = ensureObject(var23, var22);
                            var21 = var17.done;
                            if(var21) { _fun0016_ip = 117; continue _fun0016 }
case 118:
                            var21 = generatorSetDelegated();
                            SaveGenerator(address=253);
case 119:
                            return var17;
case 117:
                            var17 = var17.value;
                            return var17;
case 116:
                            return var16;
case 112:
                            var4 = var14;
                            _fun0016_ip = 107; continue _fun0016;
case 110:
                            var22 = 'return';
                            var23 = var15;
                            var14 = getMethod(var23, var22);
                            if(!(var14 !== var3)) { _fun0016_ip = 120; continue _fun0016 }
case 121:
                            var23 = var14.bind(var15)();
                            var22 = 'iterator.return() did not return an object';
                            var14 = ensureObject(var23, var22);
case 120:
                            var23 = 'yield* delegate must have a .throw() method';
                            var14 = throwTypeError(var23);
                            throw var3;
case 107:
                            var4 = var4.value;
                            var9 = var9 + 1;
                            var4 = var10.length;
                            if(var9 < var4) { _fun0016_ip = 105; continue _fun0016 }
case 104:
                            return var3;
case 101:
                            return var2;
case 98:
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
case 0:
                        var1 = arg1;
                        var5 = var1.message;
                        var4 = var1.sendMessageOptions;
                        var2 = var5.author;
                        var3 = null;
                        var6 = var3 == var2;
                        var1 = undefined;
                        var7 = undefined;
                        if(var6) { _fun0018_ip = 122; continue _fun0018 }
case 33:
                        var7 = var2.id;
case 122:
                        var8 = _closure1_slot12;
                        var6 = var8.getId;
                        var6 = var6.bind(var8)();
                        if(!(var7 === var6)) { _fun0018_ip = 123; continue _fun0018 }
case 124:
                        var6 = var5.nonce;
                        if(!(var3 == var6)) { _fun0018_ip = 125; continue _fun0018 }
case 37:
                        var6 = var5.id;
case 125:
                        var7 = var5.state;
                        var3 = _closure1_slot15;
                        var3 = var3.SENDING;
                        if(!(var7 !== var3)) { _fun0018_ip = 126; continue _fun0018 }
case 11:
                        var7 = var5.state;
                        var3 = _closure1_slot15;
                        var3 = var3.SEND_FAILED;
                        if(!(var7 !== var3)) { _fun0018_ip = 126; continue _fun0018 }
case 127:
                        var3 = _closure1_slot25;
                        var3 = var3.bind(var1)(var6);
                        _fun0018_ip = 123; continue _fun0018;
case 126:
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
case 123:
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
case 0:
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
case 5:
                        var7 = _closure1_slot34;
                        var2 = var6[var5];
                        var8 = var7.bind(var1)(var2);
                        var7 = var8.bind(var1)();
                        var2 = var7.done;
                        if(var2) { _fun0019_ip = 128; continue _fun0019 }
case 39:
                        var2 = var7.value;
                        var10 = var2.id;
                        var9 = _closure3_slot0;
                        var2 = var9.handleChannelLoaded;
                        var2 = var2.bind(var9)(var10);
                        var9 = var8.bind(var1)();
                        var2 = var9.done;
                        var7 = var9;
                        if(!var2) { _fun0019_ip = 39; continue _fun0019 }
case 128:
                        var5 = var5 + 1;
                        var2 = var6.length;
                        if(var5 < var2) { _fun0019_ip = 5; continue _fun0019 }
case 126:
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
case 0:
                                StartGenerator();
                                var4 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0020_ip = 129; continue _fun0020 }
case 130:
                                var7 = _closure1_slot8;
                                var5 = _closure3_slot0;
                                var6 = _closure1_slot33;
                                var2 = undefined;
                                var5 = var7.bind(var2)(var5, var6);
                                var6 = var5[var6];
                                var5 = var6.has;
                                var5 = var5.bind(var6)(var4);
                                if(var5) { _fun0020_ip = 81; continue _fun0020 }
case 40:
                                var5 = var6.add;
                                var5 = var5.bind(var6)(var4);
                                var3 = _closure1_slot32;
                                var3 = var3.bind(var2)(var4);
                                SaveGenerator(address=76);
case 39:
                                return var3;
case 38:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                                if(!var4) { _fun0020_ip = 81; continue _fun0020 }
case 44:
                                return var3;
case 81:
                                return var2;
case 129:
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
case 0:
                        var1 = arg1;
                        var4 = var1.message;
                        var1 = var1.file;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0021_ip = 73; continue _fun0021 }
case 29:
                        var5 = var4.nonce;
                        if(!(var2 == var5)) { _fun0021_ip = 131; continue _fun0021 }
case 3:
                        var5 = var4.id;
case 131:
                        var3 = _closure1_slot24;
                        var2 = {};
                        var2['key'] = var5;
                        var2['message'] = var4;
                        var2['file'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
case 73:
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
case 0:
                            var4 = _closure1_slot23;
                            var1 = _closure4_slot0;
                            var3 = var1.id;
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = null;
                            if(!(var3 != var4)) { _fun0022_ip = 40; continue _fun0022 }
case 42:
                            var3 = _closure1_slot27;
                            var2 = {};
                            var5 = _closure4_slot0;
                            var2['file'] = var5;
                            var2 = var3.bind(var1)(var4, var2);
case 40:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['handleUploadProgress'] = var3;
                var3 = function(arg1) {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.aborted;
                        var3 = var1.file;
                        var1 = undefined;
                        var _closure4_slot0 = var1;
                        if(!var4) { _fun0023_ip = 5; continue _fun0023 }
case 132:
                        _closure4_slot0 = var3;
                        var3 = _closure1_slot16;
                        var2 = function() {
                            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                                var4 = _closure1_slot23;
                                var1 = _closure4_slot0;
                                var3 = var1.id;
                                var1 = undefined;
                                var4 = var4.bind(var1)(var3);
                                var3 = null;
                                if(!(var3 != var4)) { _fun0024_ip = 102; continue _fun0024 }
case 42:
                                var2 = _closure1_slot22;
                                var2 = var2.bind(var1)(var4, var3);
case 102:
                                return var1;
                            }
                        };
                        var2 = var3.bind(var1)(var2);
case 5:
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
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0025_ip = 133; continue _fun0025 }
case 130:
                        var2 = _closure1_slot28;
                        var4 = undefined;
                        var2 = var2.bind(var4)();
                        SaveGenerator(address=27);
case 134:
                        return var2;
case 74:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0025_ip = 135; continue _fun0025 }
case 136:
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
                        if(!var3) { _fun0025_ip = 137; continue _fun0025 }
case 138:
                        var3 = var16[var15];
                        var18 = var3.channel_id;
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var9];
                        var7 = var7.bind(var4)(var3);
                        var3 = var7.get;
                        var7 = var3.bind(var7)(var18);
                        if(!(var8 == var7)) { _fun0025_ip = 66; continue _fun0025 }
case 61:
                        var7 = {'ready': false, 'cached': false};
case 66:
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
                        if(!var3) { _fun0025_ip = 112; continue _fun0025 }
case 139:
                        var7 = _closure1_slot17;
                        var3 = var7.verbose;
                        var3 = var3.bind(var7)(var14);
                        var7 = _closure3_slot0;
                        var3 = var7.handleChannelLoaded;
                        var3 = var3.bind(var7)(var18);
                        SaveGenerator(address=325);
case 8:
                        return var3;
case 140:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                        if(var7) { _fun0025_ip = 141; continue _fun0025 }
case 112:
                        var15 = var15 + 1;
                        var7 = var16.length;
                        if(var15 < var7) { _fun0025_ip = 138; continue _fun0025 }
case 137:
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
case 141:
                        return var3;
case 135:
                        return var2;
case 133:
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