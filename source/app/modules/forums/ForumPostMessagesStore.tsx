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
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
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
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot13;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot13;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
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
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var9 = function handleLoadThreadsSuccess(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var4 = var1.threads;
            var3 = var1.firstMessages;
            var1 = null;
            if(!(var1 != var3)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var2 = _closure1_slot12;
            var1 = undefined;
            var6 = var2.bind(var1)(var4);
            var4 = var6.bind(var1)();
            var2 = var4.done;
            if(var2) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var2 = var4.value;
            var8 = _closure1_slot10;
            var7 = var2.id;
            var2 = {'loaded': true, 'firstMessage': null};
            var8[var7] = var2;
            var7 = var6.bind(var1)();
            var2 = var7.done;
            var4 = var7;
            if(!var2) { _fun0005_ip = 42; continue _fun0005 }
case 41:
            var2 = _closure1_slot12;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var7 = var3.value;
            var6 = _closure1_slot14;
            var2 = var7.channel_id;
            var2 = var6.bind(var1)(var2, var7);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0005_ip = 44; continue _fun0005 }
case 43:
            return var1;
case 39:
            var1 = false;
            return var1;
        }
    };
    var1 = function storeFirstMessage(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg2;
            var1 = null;
            var2 = var1 == var4;
            if(var2) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.createMessageRecord;
            var1 = var2.bind(var3)(var4);
case 45:
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
case 0:
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
            if(!(var6 != var4)) { _fun0007_ip = 25; continue _fun0007 }
case 47:
            var10 = var4.firstMessage;
            if(!(var6 != var10)) { _fun0007_ip = 25; continue _fun0007 }
case 48:
            var10 = var4.firstMessage;
            var10 = var10.id;
            if(!(var12 === var10)) { _fun0007_ip = 49; continue _fun0007 }
case 50:
            var12 = _closure1_slot9;
            var10 = var12.getCurrentUser;
            var10 = var10.bind(var12)();
            var6 = var6 != var10;
            if(!var6) { _fun0007_ip = 51; continue _fun0007 }
case 52:
            var10 = var10.id;
            var6 = var10 === var11;
case 51:
            if(!var9) { _fun0007_ip = 53; continue _fun0007 }
case 54:
            if(var6) { _fun0007_ip = 53; continue _fun0007 }
case 55:
            var9 = false;
            return var9;
case 53:
            var10 = _closure1_slot10;
            var9 = {};
            var16 = var9;
            var15 = var4;
            var11 = copyDataProperties(var16, var15);
            var10[var2] = var9;
            var1 = _closure1_slot10;
            var2 = var1[var2];
            var1 = 'MESSAGE_REACTION_ADD';
            if(!(var1 !== var5)) { _fun0007_ip = 23; continue _fun0007 }
case 56:
            var5 = var4.firstMessage;
            var1 = var5.removeReaction;
            var1 = var1.bind(var5)(var8, var6, var7);
            _fun0007_ip = 57; continue _fun0007;
case 23:
            var5 = var4.firstMessage;
            var4 = var5.addReaction;
            var14 = var3.colors;
            var17 = var5;
            var16 = var8;
            var15 = var6;
            var13 = var7;
            var1 = var17[var4](var16, var15, var14, var13, var12);
case 57:
            var2['firstMessage'] = var1;
            var1 = undefined;
            return var1;
case 49:
            var1 = false;
            return var1;
case 25:
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
                var1 = _closure1_slot11;
                var1 = var1.bind(var3)();
                if(var1) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 60; continue _fun0008;
case 58:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 60:
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
case 0:
                var2 = _closure1_slot10;
                var1 = arg1;
                var1 = var2[var1];
                var2 = null;
                var3 = var2 == var1;
                var2 = undefined;
                if(var3) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                var2 = var1.loaded;
case 61:
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
case 0:
                var2 = arg1;
                var3 = _closure1_slot10;
                var3 = var2 in var3;
                if(var3) { _fun0010_ip = 63; continue _fun0010 }
case 64:
                var4 = _closure1_slot10;
                var3 = {'loaded': false, 'firstMessage': null};
                var4[var2] = var3;
case 63:
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
case 0:
            var4 = arg1;
            var1 = var4.isPushNotification;
            var1 = !var1;
            if(!var1) { _fun0011_ip = 65; continue _fun0011 }
case 66:
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
            if(!var2) { _fun0011_ip = 60; continue _fun0011 }
case 67:
            var6 = _closure1_slot14;
            var5 = var4.message;
            var5 = var5.channel_id;
            var4 = var4.message;
            var4 = var6.bind(var3)(var5, var4);
            var2 = undefined;
case 60:
            var1 = var2;
case 65:
            return var1;
        }
    };
    var2['MESSAGE_CREATE'] = var11;
    var11 = function handleMessageUpdate(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var6 = arg1;
            var1 = var6.message;
            var2 = var1.id;
            var1 = var6.message;
            var1 = var1.channel_id;
            if(!(var2 === var1)) { _fun0012_ip = 68; continue _fun0012 }
case 7:
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
            if(!var1) { _fun0012_ip = 57; continue _fun0012 }
case 15:
            var2 = var7.firstMessage;
            var2 = var4 != var2;
            if(!var2) { _fun0012_ip = 69; continue _fun0012 }
case 70:
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
case 69:
            var1 = var2;
case 57:
            return var1;
case 68:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_UPDATE'] = var11;
    var11 = function handleMessageDelete(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
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
            if(!(var5 === var4)) { _fun0013_ip = 71; continue _fun0013 }
case 72:
            var4 = _closure1_slot10;
            var3 = var2.channelId;
            var2 = {'loaded': true, 'firstMessage': null};
            var4[var3] = var2;
            return var1;
case 71:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_DELETE'] = var11;
    var11 = function handleThreadCreate(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot10;
            var1 = var3.channel;
            var1 = var1.id;
            var2 = var2[var1];
            var1 = null;
            var1 = var1 == var2;
            if(!var1) { _fun0014_ip = 73; continue _fun0014 }
case 37:
            var6 = _closure1_slot8;
            var5 = var6.isSubscribedToThreads;
            var2 = var3.channel;
            var2 = var2.guild_id;
            var2 = var5.bind(var6)(var2);
            var5 = !var2;
            var2 = !var5;
            if(var5) { _fun0014_ip = 74; continue _fun0014 }
case 34:
            var5 = _closure1_slot10;
            var3 = var3.channel;
            var4 = var3.id;
            var3 = {'loaded': true, 'firstMessage': null};
            var5[var4] = var3;
            var2 = undefined;
case 74:
            var1 = var2;
case 73:
            return var1;
        }
    };
    var2['THREAD_CREATE'] = var11;
    var2['MESSAGE_REACTION_ADD'] = var10;
    var2['MESSAGE_REACTION_REMOVE'] = var10;
    var10 = function handleRemoveAllReactions(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var4 = var1.messageId;
            var1 = _closure1_slot10;
            var6 = var1[var5];
            var7 = null;
            var1 = var7 != var6;
            if(!var1) { _fun0015_ip = 75; continue _fun0015 }
case 37:
            var2 = var6.firstMessage;
            var1 = var7 != var2;
case 75:
            if(!var1) { _fun0015_ip = 54; continue _fun0015 }
case 6:
            var2 = var6.firstMessage;
            var2 = var2.id;
            var2 = var4 === var2;
            if(!var2) { _fun0015_ip = 51; continue _fun0015 }
case 76:
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
case 51:
            var1 = var2;
case 54:
            return var1;
        }
    };
    var2['MESSAGE_REACTION_REMOVE_ALL'] = var10;
    var10 = function handleRemoveEmojiReactions(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var4 = var1.messageId;
            var8 = var1.emoji;
            var1 = _closure1_slot10;
            var6 = var1[var5];
            var7 = null;
            var1 = var7 != var6;
            if(!var1) { _fun0016_ip = 45; continue _fun0016 }
case 77:
            var2 = var6.firstMessage;
            var1 = var7 != var2;
case 45:
            if(!var1) { _fun0016_ip = 51; continue _fun0016 }
case 59:
            var2 = var6.firstMessage;
            var2 = var2.id;
            var2 = var4 === var2;
            if(!var2) { _fun0016_ip = 78; continue _fun0016 }
case 58:
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
case 78:
            var1 = var2;
case 51:
            return var1;
        }
    };
    var2['MESSAGE_REACTION_REMOVE_EMOJI'] = var10;
    var10 = function handleReactionBatch(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var6 = var1.messageId;
            var8 = var1.reactions;
            var1 = _closure1_slot10;
            var5 = var1[var4];
            var1 = null;
            if(!(var1 != var5)) { _fun0017_ip = 79; continue _fun0017 }
case 80:
            var3 = var5.firstMessage;
            if(!(var1 != var3)) { _fun0017_ip = 79; continue _fun0017 }
case 6:
            var3 = var5.firstMessage;
            var3 = var3.id;
            if(!(var6 === var3)) { _fun0017_ip = 81; continue _fun0017 }
case 11:
            var6 = _closure1_slot9;
            var3 = var6.getCurrentUser;
            var9 = var3.bind(var6)();
            var7 = var5.firstMessage;
            var6 = var7.addReactionBatch;
            var10 = var1 == var9;
            var1 = undefined;
            var3 = undefined;
            if(var10) { _fun0017_ip = 82; continue _fun0017 }
case 41:
            var3 = var9.id;
case 82:
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
case 81:
            var1 = false;
            return var1;
case 79:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_ADD_MANY'] = var10;
    var10 = function handlePostChannelLoadData(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var8 = var1.threads;
            var6 = var8;
            var1 = undefined;
            for(var3 in var6)
case 62:
            {
case 83:
                var11 = var3;
                var10 = _closure1_slot14;
                var9 = var8[var11];
                var9 = var9.first_message;
                var9 = var10.bind(var1)(var11, var9);
                _fun0018_ip = 62; continue _fun0018;
            }
case 84:
            return var1;
        }
    };
    var2['LOAD_FORUM_POSTS'] = var10;
    var2['LOAD_THREADS_SUCCESS'] = var9;
    var2['LOAD_ARCHIVED_THREADS_SUCCESS'] = var9;
    var4 = function handleLoadMessagesSuccess(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channelId;
            var2 = var1.messages;
            var4 = var2.length;
            var1 = 1;
            var1 = var4 - var1;
            var6 = var2[var1];
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0019_ip = 85; continue _fun0019 }
case 63:
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
case 85:
            if(!var1) { _fun0019_ip = 86; continue _fun0019 }
case 87:
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
case 86:
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