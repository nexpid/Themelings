// app/modules/forums/ForumPostMessagesStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
            var9 = _closure1_slot13;
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
            var7 = _closure1_slot13;
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
    var _closure1_slot12 = var1;
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
    var _closure1_slot13 = var1;
    var9 = function handleLoadThreadsSuccess(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var4 = var1.threads;
            var3 = var1.firstMessages;
            var1 = null;
            if(!(var1 != var3)) { _fun0005_ip = 155; continue _fun0005 }
 24:
            var2 = _closure1_slot12;
            var1 = undefined;
            var6 = var2.bind(var1)(var4);
            var4 = var6.bind(var1)();
            var2 = var4.done;
            if(var2) { _fun0005_ip = 97; continue _fun0005 }
 50:
            var2 = var4.value;
            var8 = _closure1_slot10;
            var7 = var2.id;
            var2 = {'loaded': true, 'firstMessage': null};
            var8[var7] = var2;
            var7 = var6.bind(var1)();
            var2 = var7.done;
            var4 = var7;
            if(!var2) { _fun0005_ip = 50; continue _fun0005 }
 97:
            var2 = _closure1_slot12;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0005_ip = 153; continue _fun0005 }
 118:
            var7 = var3.value;
            var6 = _closure1_slot14;
            var2 = var7.channel_id;
            var2 = var6.bind(var1)(var2, var7);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0005_ip = 118; continue _fun0005 }
 153:
            return var1;
 155:
            var1 = false;
            return var1;
        }
    };
    var1 = function storeFirstMessage(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg2;
            var1 = null;
            var2 = var1 == var4;
            if(var2) { _fun0006_ip = 48; continue _fun0006 }
 12:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.createMessageRecord;
            var1 = var2.bind(var3)(var4);
 48:
            var3 = _closure1_slot10;
            var2 = {};
            var4 = true;
            var2['loaded'] = var4;
            var2['firstMessage'] = var1;
            var1 = arg1;
            var3[var1] = var2;
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var10 = function handleReaction(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = arg1;
            var5 = var3.type;
            var2 = var3.channelId;
            var12 = var3.messageId;
            var11 = var3.userId;
            var8 = var3.emoji;
            var9 = var3.optimistic;
            var7 = var3.reactionType;
            var4 = _closure1_slot10;
            var4 = var4[var2];
            var6 = null;
            if(!(var6 != var4)) { _fun0007_ip = 235; continue _fun0007 }
 61:
            var10 = var4.firstMessage;
            if(!(var6 != var10)) { _fun0007_ip = 235; continue _fun0007 }
 74:
            var10 = var4.firstMessage;
            var10 = var10.id;
            if(!(var12 === var10)) { _fun0007_ip = 231; continue _fun0007 }
 92:
            var12 = _closure1_slot9;
            var10 = var12.getCurrentUser;
            var10 = var10.bind(var12)();
            var6 = var6 != var10;
            if(!var6) { _fun0007_ip = 121; continue _fun0007 }
 112:
            var10 = var10.id;
            var6 = var10 === var11;
 121:
            if(!var9) { _fun0007_ip = 131; continue _fun0007 }
 124:
            if(var6) { _fun0007_ip = 131; continue _fun0007 }
 127:
            var9 = false;
            return var9;
 131:
            var10 = _closure1_slot10;
            var9 = {};
            var16 = var9;
            var15 = var4;
            var11 = copyDataProperties(var16, var15);
            var10[var2] = var9;
            var1 = _closure1_slot10;
            var2 = var1[var2];
            var1 = 'MESSAGE_REACTION_ADD';
            if(!(var1 !== var5)) { _fun0007_ip = 188; continue _fun0007 }
 167:
            var5 = var4.firstMessage;
            var1 = var5.removeReaction;
            var1 = var1.bind(var5)(var8, var6, var7);
            _fun0007_ip = 221; continue _fun0007;
 188:
            var5 = var4.firstMessage;
            var4 = var5.addReaction;
            var14 = var3.colors;
            var17 = var5;
            var16 = var8;
            var15 = var6;
            var13 = var7;
            var1 = var17[var4](var16, var15, var14, var13, var12);
 221:
            var2['firstMessage'] = var1;
            var1 = undefined;
            return var1;
 231:
            var1 = false;
            return var1;
 235:
            var1 = false;
            return var1;
        }
    };
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = {};
    var _closure1_slot10 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ForumPostMessagesStore() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
                var1 = _closure1_slot11;
                var1 = var1.bind(var3)();
                if(var1) { _fun0008_ip = 69; continue _fun0008 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 105; continue _fun0008;
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
        var1 = function value() {
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot8;
            var1 = _closure1_slot9;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'isLoading';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var2 = _closure1_slot10;
                var1 = arg1;
                var1 = var2[var1];
                var2 = null;
                var3 = var2 == var1;
                var2 = undefined;
                if(var3) { _fun0009_ip = 31; continue _fun0009 }
 25:
                var2 = var1.loaded;
 31:
                var1 = true;
                var1 = var1 !== var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getMessage';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = arg1;
                var3 = _closure1_slot10;
                var3 = var2 in var3;
                if(var3) { _fun0010_ip = 39; continue _fun0010 }
 17:
                var4 = _closure1_slot10;
                var3 = {'loaded': false, 'firstMessage': null};
                var4[var2] = var3;
 39:
                var1 = _closure1_slot10;
                var1 = var1[var2];
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ForumPostMessagesStore';
    var8['displayName'] = var2;
    var2 = 10;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var11 = function handleConnectionOpen() {
        var1 = {};
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var11;
    var11 = function handleMessageCreate(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var4 = arg1;
            var1 = var4.isPushNotification;
            var1 = !var1;
            if(!var1) { _fun0011_ip = 108; continue _fun0011 }
 15:
            var2 = var4.message;
            var6 = var2.id;
            var7 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 7;
            var2 = var3[var2];
            var3 = undefined;
            var8 = var7.bind(var3)(var2);
            var7 = var8.castChannelIdAsMessageId;
            var2 = var4.message;
            var2 = var2.channel_id;
            var2 = var7.bind(var8)(var2);
            var2 = var6 === var2;
            if(!var2) { _fun0011_ip = 105; continue _fun0011 }
 78:
            var6 = _closure1_slot14;
            var5 = var4.message;
            var5 = var5.channel_id;
            var4 = var4.message;
            var4 = var6.bind(var3)(var5, var4);
            var2 = undefined;
 105:
            var1 = var2;
 108:
            return var1;
        }
    };
    var2['MESSAGE_CREATE'] = var11;
    var11 = function handleMessageUpdate(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var6 = arg1;
            var1 = var6.message;
            var2 = var1.id;
            var1 = var6.message;
            var1 = var1.channel_id;
            if(!(var2 === var1)) { _fun0012_ip = 222; continue _fun0012 }
 30:
            var2 = _closure1_slot10;
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = 7;
            var1 = var1[var3];
            var10 = undefined;
            var5 = var4.bind(var10)(var1);
            var4 = var5.castMessageIdAsChannelId;
            var1 = var6.message;
            var1 = var1.id;
            var1 = var4.bind(var5)(var1);
            var7 = var2[var1];
            var4 = null;
            var1 = var4 != var7;
            if(!var1) { _fun0012_ip = 220; continue _fun0012 }
 96:
            var2 = var7.firstMessage;
            var2 = var4 != var2;
            if(!var2) { _fun0012_ip = 217; continue _fun0012 }
 109:
            var5 = _closure1_slot10;
            var4 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = var11[var3];
            var9 = var4.bind(var10)(var3);
            var4 = var9.castMessageIdAsChannelId;
            var3 = var6.message;
            var3 = var3.id;
            var4 = var4.bind(var9)(var3);
            var3 = {};
            var13 = var3;
            var12 = var7;
            var9 = copyDataProperties(var13, var12);
            var9 = _closure1_slot0;
            var8 = 8;
            var8 = var11[var8];
            var9 = var9.bind(var10)(var8);
            var8 = var9.updateMessageRecord;
            var7 = var7.firstMessage;
            var6 = var6.message;
            var7 = var8.bind(var9)(var7, var6);
            var6 = 'firstMessage';
            var3[var6] = var7;
            var5[var4] = var3;
            var2 = undefined;
 217:
            var1 = var2;
 220:
            return var1;
 222:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_UPDATE'] = var11;
    var11 = function handleMessageDelete(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var2 = arg1;
            var5 = var2.id;
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 7;
            var4 = var4[var1];
            var1 = undefined;
            var7 = var6.bind(var1)(var4);
            var6 = var7.castChannelIdAsMessageId;
            var4 = var2.channelId;
            var4 = var6.bind(var7)(var4);
            if(!(var5 === var4)) { _fun0013_ip = 82; continue _fun0013 }
 53:
            var4 = _closure1_slot10;
            var3 = var2.channelId;
            var2 = {'loaded': true, 'firstMessage': null};
            var4[var3] = var2;
            return var1;
 82:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_DELETE'] = var11;
    var11 = function handleThreadCreate(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot10;
            var1 = var3.channel;
            var1 = var1.id;
            var2 = var2[var1];
            var1 = null;
            var1 = var1 == var2;
            if(!var1) { _fun0014_ip = 104; continue _fun0014 }
 33:
            var6 = _closure1_slot8;
            var5 = var6.isSubscribedToThreads;
            var2 = var3.channel;
            var2 = var2.guild_id;
            var2 = var5.bind(var6)(var2);
            var5 = !var2;
            var2 = !var5;
            if(var5) { _fun0014_ip = 101; continue _fun0014 }
 67:
            var5 = _closure1_slot10;
            var3 = var3.channel;
            var4 = var3.id;
            var3 = {'loaded': true, 'firstMessage': null};
            var5[var4] = var3;
            var2 = undefined;
 101:
            var1 = var2;
 104:
            return var1;
        }
    };
    var2['THREAD_CREATE'] = var11;
    var2['MESSAGE_REACTION_ADD'] = var10;
    var2['MESSAGE_REACTION_REMOVE'] = var10;
    var10 = function handleRemoveAllReactions(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var5 = var1.channelId;
            var4 = var1.messageId;
            var1 = _closure1_slot10;
            var6 = var1[var5];
            var7 = null;
            var1 = var7 != var6;
            if(!var1) { _fun0015_ip = 43; continue _fun0015 }
 33:
            var2 = var6.firstMessage;
            var1 = var7 != var2;
 43:
            if(!var1) { _fun0015_ip = 123; continue _fun0015 }
 46:
            var2 = var6.firstMessage;
            var2 = var2.id;
            var2 = var4 === var2;
            if(!var2) { _fun0015_ip = 120; continue _fun0015 }
 64:
            var4 = _closure1_slot10;
            var3 = {};
            var11 = var3;
            var10 = var6;
            var7 = copyDataProperties(var11, var10);
            var9 = var6.firstMessage;
            var8 = var9.set;
            var7 = 'reactions';
            var6 = new Array(0);
            var7 = var8.bind(var9)(var7, var6);
            var6 = 'firstMessage';
            var3[var6] = var7;
            var4[var5] = var3;
            var2 = undefined;
 120:
            var1 = var2;
 123:
            return var1;
        }
    };
    var2['MESSAGE_REACTION_REMOVE_ALL'] = var10;
    var10 = function handleRemoveEmojiReactions(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var5 = var1.channelId;
            var4 = var1.messageId;
            var8 = var1.emoji;
            var1 = _closure1_slot10;
            var6 = var1[var5];
            var7 = null;
            var1 = var7 != var6;
            if(!var1) { _fun0016_ip = 49; continue _fun0016 }
 39:
            var2 = var6.firstMessage;
            var1 = var7 != var2;
 49:
            if(!var1) { _fun0016_ip = 121; continue _fun0016 }
 52:
            var2 = var6.firstMessage;
            var2 = var2.id;
            var2 = var4 === var2;
            if(!var2) { _fun0016_ip = 118; continue _fun0016 }
 70:
            var4 = _closure1_slot10;
            var3 = {};
            var10 = var3;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var7 = var6.firstMessage;
            var6 = var7.removeReactionsForEmoji;
            var7 = var6.bind(var7)(var8);
            var6 = 'firstMessage';
            var3[var6] = var7;
            var4[var5] = var3;
            var2 = undefined;
 118:
            var1 = var2;
 121:
            return var1;
        }
    };
    var2['MESSAGE_REACTION_REMOVE_EMOJI'] = var10;
    var10 = function handleReactionBatch(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var6 = var1.messageId;
            var8 = var1.reactions;
            var1 = _closure1_slot10;
            var5 = var1[var4];
            var1 = null;
            if(!(var1 != var5)) { _fun0017_ip = 143; continue _fun0017 }
 36:
            var3 = var5.firstMessage;
            if(!(var1 != var3)) { _fun0017_ip = 143; continue _fun0017 }
 46:
            var3 = var5.firstMessage;
            var3 = var3.id;
            if(!(var6 === var3)) { _fun0017_ip = 139; continue _fun0017 }
 61:
            var6 = _closure1_slot9;
            var3 = var6.getCurrentUser;
            var9 = var3.bind(var6)();
            var7 = var5.firstMessage;
            var6 = var7.addReactionBatch;
            var10 = var1 == var9;
            var1 = undefined;
            var3 = undefined;
            if(var10) { _fun0017_ip = 102; continue _fun0017 }
 97:
            var3 = var9.id;
 102:
            var6 = var6.bind(var7)(var8, var3);
            var3 = _closure1_slot10;
            var2 = {};
            var12 = var2;
            var11 = var5;
            var5 = copyDataProperties(var12, var11);
            var5 = 'firstMessage';
            var2[var5] = var6;
            var3[var4] = var2;
            return var1;
 139:
            var1 = false;
            return var1;
 143:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_ADD_MANY'] = var10;
    var10 = function handlePostChannelLoadData(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var8 = var1.threads;
            var6 = var8;
            var1 = undefined;
            for(var3 in var6)
 25:
            {
 34:
                var11 = var3;
                var10 = _closure1_slot14;
                var9 = var8[var11];
                var9 = var9.first_message;
                var9 = var10.bind(var1)(var11, var9);
                _fun0018_ip = 25; continue _fun0018;
            }
 59:
            return var1;
        }
    };
    var2['LOAD_FORUM_POSTS'] = var10;
    var2['LOAD_THREADS_SUCCESS'] = var9;
    var2['LOAD_ARCHIVED_THREADS_SUCCESS'] = var9;
    var4 = function handleLoadMessagesSuccess(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var2 = var1.messages;
            var4 = var2.length;
            var1 = 1;
            var1 = var4 - var1;
            var6 = var2[var1];
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0019_ip = 84; continue _fun0019 }
 39:
            var4 = var6.id;
            var7 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 7;
            var5 = var5[var2];
            var2 = undefined;
            var5 = var7.bind(var2)(var5);
            var2 = var5.castChannelIdAsMessageId;
            var2 = var2.bind(var5)(var3);
            var1 = var4 === var2;
 84:
            if(!var1) { _fun0019_ip = 145; continue _fun0019 }
 87:
            var2 = _closure1_slot10;
            var1 = {};
            var5 = true;
            var1['loaded'] = var5;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 8;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var7.bind(var4)(var5);
            var4 = var5.createMessageRecord;
            var4 = var4.bind(var5)(var6);
            var1['firstMessage'] = var4;
            var2[var3] = var1;
 145:
            var1 = undefined;
            return var1;
        }
    };
    var2['LOAD_MESSAGES_SUCCESS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/ForumPostMessagesStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();