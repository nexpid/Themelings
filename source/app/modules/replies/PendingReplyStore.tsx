// app/modules/replies/PendingReplyStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
case 35: // try_end0
            _fun0004_ip = 37; continue _fun0004;
case 38: // catch_target0
            CatchBlockStart(arg_register=1);
case 37:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function tryHydratePendingReply(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            if(!(var3 != var2)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var4 = _closure1_slot11;
            var5 = var4[var2];
            if(!(var3 != var5)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var7 = _closure1_slot9;
            var6 = var7.getMessage;
            var4 = var5.messageId;
            var6 = var6.bind(var7)(var2, var4);
            var8 = _closure1_slot8;
            var7 = var8.getChannel;
            var4 = var5.channelId;
            var7 = var7.bind(var8)(var4);
            if(!(var3 != var6)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            if(!(var3 != var7)) { _fun0005_ip = 43; continue _fun0005 }
case 45:
            var4 = _closure1_slot10;
            var3 = {};
            var3['channel'] = var7;
            var3['message'] = var6;
            var6 = var5.shouldMention;
            var3['shouldMention'] = var6;
            var5 = var5.showMentionToggle;
            var3['showMentionToggle'] = var5;
            var4[var2] = var3;
            var1 = _closure1_slot11;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
case 43:
            var1 = false;
            return var1;
case 41:
            var1 = false;
            return var1;
case 39:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = {};
    var _closure1_slot10 = var2;
    var2 = {};
    var _closure1_slot11 = var2;
    var2 = {};
    var _closure1_slot12 = var2;
    var2 = 9;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function PendingReplyStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot15;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 48; continue _fun0006;
case 46:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 48:
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
        var1 = 'getState';
        var5['key'] = var1;
        var1 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = {};
                var4 = _closure1_slot13;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 8;
                var1 = var6[var1];
                var9 = undefined;
                var6 = var5.bind(var9)(var1);
                var5 = var6.entries;
                var1 = _closure1_slot10;
                var1 = var5.bind(var6)(var1);
                var8 = var4.bind(var9)(var1);
                var4 = var8.bind(var9)();
                var1 = var4.done;
                var7 = 2;
                var6 = 0;
                var5 = 1;
                if(var1) { _fun0007_ip = 49; continue _fun0007 }
case 44:
                var10 = var4.value;
                var1 = _closure1_slot2;
                var1 = var1.bind(var9)(var10, var7);
                var10 = var1[var6];
                var11 = var1[var5];
                var1 = {};
                var1['channelId'] = var10;
                var12 = var11.message;
                var12 = var12.id;
                var1['messageId'] = var12;
                var12 = var11.shouldMention;
                var1['shouldMention'] = var12;
                var11 = var11.showMentionToggle;
                var1['showMentionToggle'] = var11;
                var2[var10] = var1;
                var10 = var8.bind(var9)();
                var1 = var10.done;
                var4 = var10;
                if(!var1) { _fun0007_ip = 44; continue _fun0007 }
case 49:
                var1 = {};
                var13 = _closure1_slot11;
                var14 = var1;
                var3 = copyDataProperties(var14, var13);
                var14 = var1;
                var13 = var2;
                var2 = copyDataProperties(var14, var13);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'initialize';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg1;
                var6 = this;
                var5 = var6.waitFor;
                var4 = _closure1_slot9;
                var3 = _closure1_slot8;
                var3 = var5.bind(var6)(var4, var3);
                var3 = null;
                if(!(var3 == var2)) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                var2 = {};
case 50:
                _closure1_slot11 = var2;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getPendingReply';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot10;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getPendingReplyActionSource';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var2 = _closure1_slot12;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'PendingReplyStore';
    var7['displayName'] = var2;
    var7['persistKey'] = var2;
    var2 = new Array(1);
    var8 = function(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 == var1)) { _fun0009_ip = 52; continue _fun0009 }
case 53:
            var1 = {};
case 52:
            return var1;
        }
    };
    var2[0] = var8;
    var7['migrations'] = var2;
    var2 = 10;
    var2 = var5[var2];
    var11 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleCreatePendingReply(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var2 = var3.channel;
            var10 = var3.message;
            var9 = var3.shouldMention;
            var1 = undefined;
            if(!(var9 === var1)) { _fun0010_ip = 42; continue _fun0010 }
case 54:
            var9 = true;
case 42:
            var8 = var3.showMentionToggle;
            if(!(var8 === var1)) { _fun0010_ip = 55; continue _fun0010 }
case 50:
            var8 = true;
case 55:
            var4 = var3.source;
            var7 = _closure1_slot10;
            var6 = var2.id;
            var5 = {};
            var5['channel'] = var2;
            var5['message'] = var10;
            var5['shouldMention'] = var9;
            var5['showMentionToggle'] = var8;
            var7[var6] = var5;
            var3 = _closure1_slot12;
            var2 = var2.id;
            var3[var2] = var4;
            return var1;
        }
    };
    var2['CREATE_PENDING_REPLY'] = var8;
    var8 = function handleCreateShallowPendingReply(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var8 = var2.channel;
            var7 = var2.messageId;
            var6 = var2.shouldMention;
            var1 = undefined;
            if(!(var6 === var1)) { _fun0011_ip = 42; continue _fun0011 }
case 54:
            var6 = true;
case 42:
            var5 = var2.showMentionToggle;
            if(!(var5 === var1)) { _fun0011_ip = 55; continue _fun0011 }
case 50:
            var5 = true;
case 55:
            var4 = _closure1_slot11;
            var3 = var8.id;
            var2 = {};
            var8 = var8.id;
            var2['channelId'] = var8;
            var2['messageId'] = var7;
            var2['shouldMention'] = var6;
            var2['showMentionToggle'] = var5;
            var4[var3] = var2;
            return var1;
        }
    };
    var2['CREATE_SHALLOW_PENDING_REPLY'] = var8;
    var8 = function handleSetPendingReplyShouldMention(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channelId;
            var5 = var1.shouldMention;
            var2 = _closure1_slot10;
            var2 = var3 in var2;
            if(!var2) { _fun0012_ip = 56; continue _fun0012 }
case 34:
            var4 = _closure1_slot10;
            var2 = {};
            var7 = var4[var3];
            var8 = var2;
            var6 = copyDataProperties(var8, var7);
            var6 = 'shouldMention';
            var2[var6] = var5;
            var4[var3] = var2;
case 56:
            var2 = _closure1_slot11;
            var2 = var3 in var2;
            if(!var2) { _fun0012_ip = 57; continue _fun0012 }
case 46:
            var2 = _closure1_slot11;
            var1 = {};
            var7 = var2[var3];
            var8 = var1;
            var4 = copyDataProperties(var8, var7);
            var4 = 'shouldMention';
            var1[var4] = var5;
            var2[var3] = var1;
case 57:
            var1 = undefined;
            return var1;
        }
    };
    var2['SET_PENDING_REPLY_SHOULD_MENTION'] = var8;
    var8 = function handleDeletePendingReply(arg1) {
        var1 = arg1;
        var2 = var1.channelId;
        var3 = _closure1_slot10;
        var3 = delete var3[var2];
        var1 = _closure1_slot11;
        var1 = delete var1[var2];
        var1 = undefined;
        return var1;
    };
    var2['DELETE_PENDING_REPLY'] = var8;
    var8 = function handleConnectionOpen() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 8;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.keys;
        var2 = _closure1_slot11;
        var4 = var3.bind(var4)(var2);
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = arg1;
                var4 = _closure1_slot8;
                var3 = var4.getChannel;
                var4 = var3.bind(var4)(var2);
                var3 = null;
                if(!(var3 == var4)) { _fun0013_ip = 58; continue _fun0013 }
case 59:
                var1 = _closure1_slot11;
                var1 = delete var1[var2];
case 58:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['CONNECTION_OPEN'] = var8;
    var8 = function handleLogout() {
        var1 = {};
        _closure1_slot10 = var1;
        var1 = {};
        _closure1_slot11 = var1;
        var1 = {};
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var8;
    var8 = function handleMessageDelete(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var5 = var1.id;
            var3 = var1.channelId;
            var1 = _closure1_slot10;
            var7 = var1[var3];
            var4 = null;
            var8 = var4 == var7;
            var1 = undefined;
            var6 = undefined;
            if(var8) { _fun0014_ip = 28; continue _fun0014 }
case 50:
            var7 = var7.message;
            var8 = var4 == var7;
            var6 = undefined;
            if(var8) { _fun0014_ip = 28; continue _fun0014 }
case 47:
            var6 = var7.id;
case 28:
            if(!(var6 !== var5)) { _fun0014_ip = 60; continue _fun0014 }
case 61:
            var6 = _closure1_slot11;
            var6 = var6[var3];
            var7 = var4 == var6;
            var4 = undefined;
            if(var7) { _fun0014_ip = 62; continue _fun0014 }
case 63:
            var4 = var6.messageId;
case 62:
            if(!(var4 === var5)) { _fun0014_ip = 64; continue _fun0014 }
case 9:
            var4 = _closure1_slot11;
            var4 = delete var4[var3];
            var4 = _closure1_slot12;
            var4 = delete var4[var3];
            _fun0014_ip = 65; continue _fun0014;
case 64:
            var4 = false;
            return var4;
case 60:
            var4 = _closure1_slot10;
            var4 = delete var4[var3];
            var2 = _closure1_slot12;
            var2 = delete var2[var3];
case 65:
            return var1;
        }
    };
    var2['MESSAGE_DELETE'] = var8;
    var8 = function handleChannelSelect(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = _closure1_slot16;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['CHANNEL_SELECT'] = var8;
    var4 = function handleLoadMessagesSuccess(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = _closure1_slot16;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['LOAD_MESSAGES_SUCCESS'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var12 = var4;
    var10 = var2;
    var2 = new var12[var7](var11, var10, var9);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/replies/PendingReplyStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();