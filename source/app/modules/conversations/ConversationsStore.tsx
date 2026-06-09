// app/modules/conversations/ConversationsStore.tsx
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
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot22;
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
            var7 = _closure1_slot22;
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
    var _closure1_slot21 = var1;
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
    var _closure1_slot22 = var1;
    var1 = function removePendingListFetch(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var6 = arg2;
            var2 = _closure1_slot18;
            var1 = var2.get;
            var2 = var1.bind(var2)(var5);
            var1 = null;
            var4 = var1 == var2;
            if(var4) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var1 = var2.has;
            var1 = var1.bind(var2)(var6);
            var4 = !var1;
case 39:
            var1 = !var4;
            if(var4) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var4 = var2.delete;
            var4 = var4.bind(var2)(var6);
            var6 = var2.size;
            var4 = 0;
            var1 = true;
            if(!(var4 === var6)) { _fun0005_ip = 41; continue _fun0005 }
case 4:
            var4 = _closure1_slot18;
            var3 = var4.delete;
            var3 = var3.bind(var4)(var5);
            var1 = true;
case 41:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function clearPendingConversationFetch(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot19;
            var2 = var4.get;
            var2 = var2.bind(var4)(var3);
            var4 = null;
            if(!(var4 != var2)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var5 = var2.delete;
            var4 = arg2;
            var4 = var5.bind(var2)(var4);
            var4 = var2.size;
            var2 = 0;
            if(!(var2 === var4)) { _fun0006_ip = 43; continue _fun0006 }
case 45:
            var2 = _closure1_slot19;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
case 43:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function buildModerationLabel(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arg1;
            var3 = 0;
            var4 = var6[var3];
            var5 = var6.map;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.category;
                    var3 = null;
                    if(!(var3 == var1)) { _fun0008_ip = 33; continue _fun0008 }
case 36:
                    var1 = var2.reason;
case 33:
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var2);
            var2 = var5.filter;
            var1 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var8 = var2.bind(var5)(var1);
            var2 = null;
            var6 = var2 == var4;
            var5 = undefined;
            if(var6) { _fun0007_ip = 46; continue _fun0007 }
case 47:
            var5 = var4.severity;
case 46:
            var6 = var2 != var5;
            var7 = null;
            if(!var6) { _fun0007_ip = 3; continue _fun0007 }
case 34:
            var7 = var5;
case 3:
            var5 = var2 == var4;
            var1 = undefined;
            if(var5) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var1 = var4.confidence;
case 48:
            var4 = var2 != var1;
            var9 = null;
            if(!var4) { _fun0007_ip = 50; continue _fun0007 }
case 15:
            var9 = var1;
case 50:
            var4 = var2 != var7;
            var1 = null;
            if(!var4) { _fun0007_ip = 51; continue _fun0007 }
case 52:
            var4 = global;
            var4 = var4.HermesInternal;
            var6 = var4.concat;
            var5 = '';
            var4 = ' severity';
            var1 = var6.bind(var5)(var7, var4);
case 51:
            var6 = new Array(2);
            var6[0] = var1;
            var4 = var2 != var9;
            var1 = null;
            if(!var4) { _fun0007_ip = 53; continue _fun0007 }
case 54:
            var4 = global;
            var4 = var4.HermesInternal;
            var7 = var4.concat;
            var5 = '';
            var4 = ' confidence';
            var1 = var7.bind(var5)(var9, var4);
case 53:
            var6[1] = var1;
            var5 = var6.filter;
            var1 = global;
            var4 = var1.Boolean;
            var5 = var5.bind(var6)(var4);
            var4 = var5.join;
            var7 = ', ';
            var5 = var4.bind(var5)(var7);
            var4 = var8.length;
            var4 = var4 > var3;
            var6 = null;
            if(!var4) { _fun0007_ip = 55; continue _fun0007 }
case 56:
            var4 = var8.join;
            var6 = var4.bind(var8)(var7);
case 55:
            var4 = new Array(2);
            var4[0] = var6;
            var6 = var5.length;
            var6 = var6 > var3;
            var2 = null;
            if(!var6) { _fun0007_ip = 16; continue _fun0007 }
case 57:
            var2 = var5;
case 16:
            var4[1] = var2;
            var2 = var4.filter;
            var1 = var1.Boolean;
            var4 = var2.bind(var4)(var1);
            var2 = var4.join;
            var1 = ' · ';
            var2 = var2.bind(var4)(var1);
            var1 = var2.length;
            var3 = var1 > var3;
            var1 = 'Moderation Failed';
            if(!var3) { _fun0007_ip = 58; continue _fun0007 }
case 59:
            var1 = var2;
case 58:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var9 = function handleReaction(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var7 = arg1;
            var8 = var7.type;
            var5 = var7.channelId;
            var10 = var7.messageId;
            var _closure2_slot0 = var10;
            var9 = var7.userId;
            var12 = var7.emoji;
            var11 = var7.reactionType;
            var4 = _closure1_slot17;
            var1 = var4.peek;
            var6 = var1.bind(var4)(var5);
            var5 = null;
            if(!(var5 != var6)) { _fun0009_ip = 60; continue _fun0009 }
case 61:
            var4 = var6.messageMetadataByMessageId;
            var1 = var4.get;
            var1 = var1.bind(var4)(var10);
            var13 = var5 == var1;
            var4 = undefined;
            var10 = undefined;
            if(var13) { _fun0009_ip = 62; continue _fun0009 }
case 63:
            var10 = var1.message;
case 62:
            if(!(var5 != var10)) { _fun0009_ip = 64; continue _fun0009 }
case 65:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 15;
            var10 = var14[var10];
            var13 = var13.bind(var4)(var10);
            var10 = var13.shouldApplyReaction;
            var10 = var10.bind(var13)(var7);
            if(var10) { _fun0009_ip = 66; continue _fun0009 }
case 67:
            var10 = false;
            return var10;
case 66:
            var10 = _closure1_slot8;
            var3 = var10.getId;
            var3 = var3.bind(var10)();
            var10 = var3 === var9;
            var3 = 'MESSAGE_REACTION_ADD';
            if(!(var3 !== var8)) { _fun0009_ip = 68; continue _fun0009 }
case 69:
            var8 = var1.message;
            var3 = var8.removeReaction;
            var3 = var3.bind(var8)(var12, var10, var11);
            _fun0009_ip = 70; continue _fun0009;
case 68:
            var9 = var1.message;
            var8 = var9.addReaction;
            var16 = var7.colors;
            var19 = var9;
            var18 = var12;
            var17 = var10;
            var15 = var11;
            var3 = var19[var8](var18, var17, var16, var15, var14);
case 70:
            var1['message'] = var3;
            var7 = var6.conversationMetadataById;
            var6 = var7.get;
            var1 = var1.conversationId;
            var1 = var6.bind(var7)(var1);
            var6 = var5 == var1;
            var4 = undefined;
            if(var6) { _fun0009_ip = 71; continue _fun0009 }
case 72:
            var4 = var1.hydratedMessages;
case 71:
            if(!(var5 != var4)) { _fun0009_ip = 73; continue _fun0009 }
case 16:
            var5 = var1.hydratedMessages;
            var4 = var5.findIndex;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var4 = -1;
            if(!(var4 !== var2)) { _fun0009_ip = 73; continue _fun0009 }
case 74:
            var1 = var1.hydratedMessages;
            var1[var2] = var3;
case 73:
            var1 = true;
            return var1;
case 64:
            var1 = false;
            return var1;
case 60:
            var1 = false;
            return var1;
        }
    };
    var1 = function removeHydratedMessage(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg2;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot17;
            var4 = var5.peek;
            var1 = arg1;
            var1 = var4.bind(var5)(var1);
            var6 = null;
            if(!(var6 != var1)) { _fun0010_ip = 75; continue _fun0010 }
case 76:
            var5 = var1.messageMetadataByMessageId;
            var4 = var5.get;
            var4 = var4.bind(var5)(var3);
            if(!(var6 != var4)) { _fun0010_ip = 77; continue _fun0010 }
case 32:
            var7 = var1.conversationMetadataById;
            var5 = var7.get;
            var4 = var4.conversationId;
            var4 = var5.bind(var7)(var4);
            var7 = var6 == var4;
            var5 = undefined;
            if(var7) { _fun0010_ip = 78; continue _fun0010 }
case 48:
            var5 = var4.hydratedMessages;
case 78:
            if(!(var6 != var5)) { _fun0010_ip = 77; continue _fun0010 }
case 79:
            var6 = var4.hydratedMessages;
            var5 = var6.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 !== var1;
                return var1;
            };
            var2 = var5.bind(var6)(var2);
            var4['hydratedMessages'] = var2;
case 77:
            var2 = var1.messageMetadataByMessageId;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            return var1;
case 75:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var10 = function cleanupChannelSideState(arg1) {
        var3 = _closure1_slot18;
        var2 = var3.delete;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot27 = var10;
    var1 = function evictChannel(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot17;
            var1 = var3.has;
            var1 = var1.bind(var3)(var4);
            var5 = _closure1_slot17;
            var3 = var5.del;
            var3 = var3.bind(var5)(var4);
            var3 = _closure1_slot27;
            var2 = undefined;
            var2 = var3.bind(var2)(var4);
            if(var1) { _fun0011_ip = 47; continue _fun0011 }
case 9:
            var1 = var2;
case 47:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var2 = global;
    var12 = var2.Object;
    var11 = var12.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot12 = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot13 = var8;
    var8 = 11;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var11 = var8.CONVERSATION_COLORS;
    var _closure1_slot14 = var11;
    var11 = var8.CONVERSATION_FEEDBACK_RATINGS_CACHE_MAX;
    var _closure1_slot15 = var11;
    var12 = var8.MAX_CHANNELS_WITH_CONVERSATIONS;
    var8 = var8.MAX_CONVERSATIONS_PER_CHANNEL;
    var _closure1_slot16 = var8;
    var8 = 12;
    var8 = var6[var8];
    var11 = var7.bind(var1)(var8);
    var8 = {};
    var8['max'] = var12;
    var8['dispose'] = var10;
    var10 = var11.prototype;
    var10 = Object.create(var10, {constructor: {value: var11}});
    var16 = var10;
    var15 = var8;
    var8 = new var16[var11](var15, var14);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot17 = var8;
    var8 = var2.Map;
    var10 = var8.prototype;
    var10 = Object.create(var10, {constructor: {value: var8}});
    var16 = var10;
    var8 = new var16[var8](var15);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot18 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var16 = var8;
    var2 = new var16[var2](var15);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot19 = var2;
    var2 = 16;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ConversationsStore() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
                var1 = _closure1_slot20;
                var1 = var1.bind(var3)();
                if(var1) { _fun0012_ip = 80; continue _fun0012 }
case 42:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0012_ip = 81; continue _fun0012;
case 80:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 81:
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
            var8 = this;
            var7 = var8.waitFor;
            var14 = _closure1_slot8;
            var13 = _closure1_slot9;
            var12 = _closure1_slot13;
            var11 = _closure1_slot10;
            var10 = _closure1_slot11;
            var9 = _closure1_slot12;
            var15 = var8;
            var1 = var15[var7](var14, var13, var12, var11, var10, var9, var8);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(17);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasChannelData';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot17;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getChannelConversations';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var4 = _closure1_slot17;
                var3 = var4.peek;
                var1 = arg1;
                var3 = var3.bind(var4)(var1);
                var _closure3_slot0 = var3;
                var1 = null;
                var4 = var1 == var3;
                if(var4) { _fun0013_ip = 82; continue _fun0013 }
case 76:
                var4 = var3.conversations;
                var3 = var4.map;
                var2 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var2 = arg1;
                        var1 = _closure3_slot0;
                        var4 = var1.conversationMetadataById;
                        var3 = var4.get;
                        var1 = var2.id;
                        var4 = var3.bind(var4)(var1);
                        var1 = {};
                        var1['conversation'] = var2;
                        var3 = null;
                        var5 = var3 == var4;
                        var2 = undefined;
                        if(var5) { _fun0014_ip = 83; continue _fun0014 }
case 9:
                        var2 = var4.color;
case 83:
                        if(!(var3 == var2)) { _fun0014_ip = 84; continue _fun0014 }
case 46:
                        var4 = _closure1_slot14;
                        var3 = 0;
                        var2 = var4[var3];
case 84:
                        var1['color'] = var2;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
case 82:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getConversationForMessage';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = var3.peek;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0015_ip = 85; continue _fun0015 }
case 40:
                var6 = var3.messageMetadataByMessageId;
                var4 = var6.get;
                var3 = arg2;
                var3 = var4.bind(var6)(var3);
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0015_ip = 85; continue _fun0015 }
case 86:
                var2 = var3.conversationId;
case 85:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0015_ip = 87; continue _fun0015 }
case 88:
                var1 = var2;
case 87:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getMessageMetadata';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = var3.peek;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0016_ip = 42; continue _fun0016 }
case 40:
                var5 = var3.messageMetadataByMessageId;
                var4 = var5.get;
                var3 = arg2;
                var2 = var4.bind(var5)(var3);
case 42:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0016_ip = 89; continue _fun0016 }
case 86:
                var1 = var2;
case 89:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getMessage';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var4 = this;
                var3 = var4.getMessageMetadata;
                var2 = arg1;
                var1 = arg2;
                var3 = var3.bind(var4)(var2, var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0017_ip = 90; continue _fun0017 }
case 91:
                var2 = var3.message;
case 90:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0017_ip = 42; continue _fun0017 }
case 92:
                var1 = var2;
case 42:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getConversationMetadata';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = var3.peek;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0018_ip = 42; continue _fun0018 }
case 40:
                var5 = var3.conversationMetadataById;
                var4 = var5.get;
                var3 = arg2;
                var2 = var4.bind(var5)(var3);
case 42:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0018_ip = 89; continue _fun0018 }
case 86:
                var1 = var2;
case 89:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'hasMoreConversations';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = var3.peek;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0019_ip = 43; continue _fun0019 }
case 7:
                var4 = 'before';
                var2 = arg2;
                if(!(var4 !== var2)) { _fun0019_ip = 47; continue _fun0019 }
case 93:
                var2 = var3.reachedNewest;
                var2 = !var2;
                _fun0019_ip = 11; continue _fun0019;
case 47:
                var3 = var3.reachedOldest;
                var2 = !var3;
case 11:
                var1 = var2;
case 43:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'isPendingFetch';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot18;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'isListFetchPending';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var3 = _closure1_slot18;
                var2 = var3.get;
                var1 = arg1;
                var5 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var5;
                var2 = undefined;
                if(var3) { _fun0020_ip = 94; continue _fun0020 }
case 95:
                var4 = var5.has;
                var3 = arg2;
                var2 = var4.bind(var5)(var3);
case 94:
                var1 = var1 != var2;
                if(!var1) { _fun0020_ip = 83; continue _fun0020 }
case 42:
                var1 = var2;
case 83:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getSelectedConversationId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = var3.peek;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0021_ip = 96; continue _fun0021 }
case 40:
                var2 = var3.selectedConversationId;
case 96:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0021_ip = 45; continue _fun0021 }
case 97:
                var1 = var2;
case 45:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getSelectedConversation';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = var3.peek;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var2 = null;
                var1 = var2 == var4;
                var7 = undefined;
                if(var1) { _fun0022_ip = 96; continue _fun0022 }
case 40:
                var7 = var4.selectedConversationId;
case 96:
                var3 = var2 == var7;
                var1 = null;
                if(var3) { _fun0022_ip = 98; continue _fun0022 }
case 97:
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0022_ip = 48; continue _fun0022 }
case 32:
                var5 = var4.conversationMetadataById;
                var4 = var5.get;
                var4 = var4.bind(var5)(var7);
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0022_ip = 48; continue _fun0022 }
case 99:
                var3 = var4.conversation;
case 48:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0022_ip = 50; continue _fun0022 }
case 15:
                var2 = var3;
case 50:
                var1 = var2;
case 98:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getSelectedConversationColor';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = var3.peek;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var2 = null;
                var1 = var2 == var4;
                var7 = undefined;
                if(var1) { _fun0023_ip = 96; continue _fun0023 }
case 40:
                var7 = var4.selectedConversationId;
case 96:
                var3 = var2 == var7;
                var1 = null;
                if(var3) { _fun0023_ip = 100; continue _fun0023 }
case 97:
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0023_ip = 13; continue _fun0023 }
case 32:
                var5 = var4.conversationMetadataById;
                var4 = var5.get;
                var4 = var4.bind(var5)(var7);
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0023_ip = 13; continue _fun0023 }
case 99:
                var3 = var4.color;
case 13:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0023_ip = 101; continue _fun0023 }
case 63:
                var2 = var3;
case 101:
                var1 = var2;
case 100:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getHydratedMessages';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = var3.peek;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0024_ip = 85; continue _fun0024 }
case 40:
                var6 = var3.conversationMetadataById;
                var4 = var6.get;
                var3 = arg2;
                var3 = var4.bind(var6)(var3);
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0024_ip = 85; continue _fun0024 }
case 86:
                var2 = var3.hydratedMessages;
case 85:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0024_ip = 87; continue _fun0024 }
case 88:
                var1 = var2;
case 87:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getHydratedMessageById';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = var3.peek;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0025_ip = 102; continue _fun0025 }
case 40:
                var6 = var3.messageMetadataByMessageId;
                var4 = var6.get;
                var3 = arg2;
                var3 = var4.bind(var6)(var3);
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0025_ip = 102; continue _fun0025 }
case 86:
                var2 = var3.message;
case 102:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0025_ip = 103; continue _fun0025 }
case 4:
                var1 = var2;
case 103:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'isConversationFetchPending';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var3 = _closure1_slot19;
                var2 = var3.get;
                var1 = arg1;
                var5 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0026_ip = 104; continue _fun0026 }
case 105:
                var3 = var5.size;
                var2 = 0;
                var1 = var2 !== var3;
case 104:
                if(!var1) { _fun0026_ip = 5; continue _fun0026 }
case 106:
                var3 = true;
                var2 = arg2;
                var2 = var3 !== var2;
                if(var2) { _fun0026_ip = 80; continue _fun0026 }
case 8:
                var4 = var5.has;
                var3 = 'full';
                var2 = var4.bind(var5)(var3);
case 80:
                var1 = var2;
case 5:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getConversationFeedbackRating';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = var3.peek;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0027_ip = 42; continue _fun0027 }
case 40:
                var5 = var3.recentFeedbackRatingsByConversationId;
                var4 = var5.get;
                var3 = arg2;
                var2 = var4.bind(var5)(var3);
case 42:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0027_ip = 89; continue _fun0027 }
case 86:
                var1 = var2;
case 89:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[16] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ConversationsStore';
    var8['displayName'] = var2;
    var2 = 17;
    var2 = var6[var2];
    var15 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleConversationFetchStart(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var1 = arg1;
            var6 = var1.conversationId;
            var1 = var1.full;
            var3 = 'preview';
            if(!var1) { _fun0028_ip = 44; continue _fun0028 }
case 107:
            var3 = 'full';
case 44:
            var4 = _closure1_slot19;
            var2 = var4.get;
            var2 = var2.bind(var4)(var6);
            var4 = null;
            if(!(var4 == var2)) { _fun0028_ip = 81; continue _fun0028 }
case 9:
            var5 = _closure1_slot19;
            var4 = var5.set;
            var1 = global;
            var8 = var1.Set;
            var1 = new Array(1);
            var1[0] = var3;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var11 = var7;
            var10 = var1;
            var1 = new var11[var8](var10, var9);
            var1 = var1 instanceof Object ? var1 : var7;
            var1 = var4.bind(var5)(var6, var1);
            _fun0028_ip = 108; continue _fun0028;
case 81:
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
case 108:
            var1 = undefined;
            return var1;
        }
    };
    var2['CONVERSATION_FETCH_START'] = var10;
    var10 = function handleConversationFetchSuccess(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var1 = arg1;
            var6 = var1.channelId;
            var10 = var1.conversationId;
            var7 = var1.messages;
            var3 = var1.fullyHydrated;
            var4 = _closure1_slot24;
            var2 = 'preview';
            if(!var3) { _fun0029_ip = 94; continue _fun0029 }
case 104:
            var2 = 'full';
case 94:
            var1 = undefined;
            var2 = var4.bind(var1)(var10, var2);
            var4 = _closure1_slot17;
            var2 = var4.peek;
            var9 = var2.bind(var4)(var6);
            var8 = null;
            if(!(var8 != var9)) { _fun0029_ip = 109; continue _fun0029 }
case 110:
            var4 = var9.conversationMetadataById;
            var2 = var4.get;
            var2 = var2.bind(var4)(var10);
            if(!(var8 != var2)) { _fun0029_ip = 109; continue _fun0029 }
case 50:
            if(var3) { _fun0029_ip = 111; continue _fun0029 }
case 98:
            var4 = var2.fullyHydrated;
            if(var4) { _fun0029_ip = 109; continue _fun0029 }
case 111:
            var6 = var7.map;
            var4 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.createMessageRecord;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var6.bind(var7)(var4);
            var5 = _closure1_slot21;
            var7 = var5.bind(var1)(var4);
            var6 = var7.bind(var1)();
            var5 = var6.done;
            if(var5) { _fun0029_ip = 112; continue _fun0029 }
case 113:
            var11 = var6.value;
            var13 = var9.messageMetadataByMessageId;
            var12 = var13.get;
            var5 = var11.id;
            var5 = var12.bind(var13)(var5);
            if(!(var8 == var5)) { _fun0029_ip = 114; continue _fun0029 }
case 115:
            var15 = var9.messageMetadataByMessageId;
            var14 = var15.set;
            var13 = var11.id;
            var12 = {};
            var12['conversationId'] = var10;
            var12['moderationLabel'] = var8;
            var12['message'] = var11;
            var12 = var14.bind(var15)(var13, var12);
            _fun0029_ip = 116; continue _fun0029;
case 114:
            var5['message'] = var11;
case 116:
            var11 = var7.bind(var1)();
            var5 = var11.done;
            var6 = var11;
            if(!var5) { _fun0029_ip = 113; continue _fun0029 }
case 112:
            var2['hydratedMessages'] = var4;
            var2['fullyHydrated'] = var3;
case 109:
            return var1;
        }
    };
    var2['CONVERSATION_FETCH_SUCCESS'] = var10;
    var10 = function handleConversationFetchFailure(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var1 = arg1;
            var4 = var1.conversationId;
            var1 = var1.full;
            var3 = _closure1_slot24;
            var2 = 'preview';
            if(!var1) { _fun0030_ip = 37; continue _fun0030 }
case 105:
            var2 = 'full';
case 37:
            var1 = undefined;
            var2 = var3.bind(var1)(var4, var2);
            return var1;
        }
    };
    var2['CONVERSATION_FETCH_FAILURE'] = var10;
    var10 = function handleFetchStart(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var1 = arg1;
            var6 = var1.channelId;
            var3 = var1.requestKey;
            var1 = var1.isJump;
            if(!var1) { _fun0031_ip = 104; continue _fun0031 }
case 35:
            var2 = _closure1_slot18;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var6);
case 104:
            var2 = _closure1_slot18;
            var1 = var2.get;
            var2 = var1.bind(var2)(var6);
            var1 = null;
            if(!(var1 == var2)) { _fun0031_ip = 117; continue _fun0031 }
case 89:
            var1 = global;
            var1 = var1.Set;
            var5 = var1.prototype;
            var5 = Object.create(var5, {constructor: {value: var1}});
            var9 = var5;
            var1 = new var9[var1](var8);
            var1 = var1 instanceof Object ? var1 : var5;
            var5 = _closure1_slot18;
            var4 = var5.set;
            var4 = var4.bind(var5)(var6, var1);
            var2 = var1;
case 117:
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        }
    };
    var2['CONVERSATIONS_FETCH_START'] = var10;
    var10 = function handleFetchSuccess(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
            var2 = arg1;
            var6 = var2.channelId;
            var9 = var2.conversations;
            var16 = var2.direction;
            var15 = var2.anchor;
            var1 = var2.isJump;
            var5 = var2.requestKey;
            var10 = undefined;
            var _closure2_slot0 = var10;
            var4 = _closure1_slot23;
            var4 = var4.bind(var10)(var6, var5);
            if(var4) { _fun0032_ip = 85; continue _fun0032 }
case 118:
            var4 = false;
            return var4;
case 85:
            var5 = _closure1_slot17;
            var4 = var5.peek;
            var4 = var4.bind(var5)(var6);
            var5 = null;
            var7 = var5 == var4;
            if(var1) { _fun0032_ip = 119; continue _fun0032 }
case 41:
            var8 = undefined;
            if(var7) { _fun0032_ip = 100; continue _fun0032 }
case 63:
            var8 = var4.conversations;
case 100:
            if(!(var5 == var8)) { _fun0032_ip = 117; continue _fun0032 }
case 81:
            var8 = new Array(0);
case 117:
            _fun0032_ip = 120; continue _fun0032;
case 119:
            var14 = undefined;
            if(var7) { _fun0032_ip = 121; continue _fun0032 }
case 122:
            var14 = var4.selectedConversationId;
case 121:
            var7 = var5 != var14;
            var12 = null;
            if(!var7) { _fun0032_ip = 123; continue _fun0032 }
case 124:
            var11 = var5 == var4;
            var7 = undefined;
            if(var11) { _fun0032_ip = 69; continue _fun0032 }
case 125:
            var13 = var4.conversationMetadataById;
            var11 = var13.get;
            var11 = var11.bind(var13)(var14);
            var13 = var5 == var11;
            var7 = undefined;
            if(var13) { _fun0032_ip = 69; continue _fun0032 }
case 126:
            var7 = var11.conversation;
case 69:
            var12 = var7;
case 123:
            if(!(var5 == var12)) { _fun0032_ip = 127; continue _fun0032 }
case 128:
            var7 = new Array(0);
            _fun0032_ip = 24; continue _fun0032;
case 127:
            var11 = new Array(1);
            var11[0] = var12;
            var7 = var11;
case 24:
            var8 = var7;
case 120:
            var17 = !var1;
            if(!var17) { _fun0032_ip = 129; continue _fun0032 }
case 130:
            var7 = var5 == var4;
            var11 = undefined;
            if(var7) { _fun0032_ip = 131; continue _fun0032 }
case 132:
            var11 = var4.reachedOldest;
case 131:
            var7 = var5 != var11;
            if(!var7) { _fun0032_ip = 133; continue _fun0032 }
case 134:
            var7 = var11;
case 133:
            var17 = var7;
case 129:
            var14 = !var1;
            if(!var14) { _fun0032_ip = 71; continue _fun0032 }
case 135:
            var1 = var5 == var4;
            var7 = undefined;
            if(var1) { _fun0032_ip = 136; continue _fun0032 }
case 27:
            var7 = var4.reachedNewest;
case 136:
            var1 = var5 != var7;
            if(!var1) { _fun0032_ip = 137; continue _fun0032 }
case 72:
            var1 = var7;
case 137:
            var14 = var1;
case 71:
            var1 = global;
            var12 = var1.Set;
            var11 = var8.map;
            var7 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var22 = var11.bind(var8)(var7);
            var11 = var12.prototype;
            var11 = Object.create(var11, {constructor: {value: var12}});
            var23 = var11;
            var7 = new var23[var12](var22, var21);
            var7 = var7 instanceof Object ? var7 : var11;
            _closure2_slot0 = var7;
            var11 = var9.some;
            var7 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var7 = var11.bind(var9)(var7);
            if(var7) { _fun0032_ip = 138; continue _fun0032 }
case 139:
            var7 = var5 == var15;
case 138:
            var13 = var17;
            var11 = var14;
            if(var7) { _fun0032_ip = 140; continue _fun0032 }
case 141:
            var19 = 'before';
            var12 = true;
            var7 = var14;
            if(!(var19 !== var16)) { _fun0032_ip = 142; continue _fun0032 }
case 143:
            var19 = 'after';
            if(!(var19 === var16)) { _fun0032_ip = 144; continue _fun0032 }
case 145:
            var14 = true;
case 144:
            var7 = var14;
            var12 = var17;
case 142:
            var13 = var12;
            var11 = var7;
case 140:
            var7 = function mergeConversations(arg1, arg2) {
                _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                    var1 = global;
                    var2 = var1.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var12 = var3;
                    var2 = new var12[var2](var11);
                    var4 = var2 instanceof Object ? var2 : var3;
                    var5 = _closure1_slot21;
                    var6 = undefined;
                    var3 = arg1;
                    var7 = var5.bind(var6)(var3);
                    var5 = var7.bind(var6)();
                    var3 = var5.done;
                    if(var3) { _fun0033_ip = 78; continue _fun0033 }
case 82:
                    var9 = var5.value;
                    var8 = var4.set;
                    var3 = var9.id;
                    var3 = var8.bind(var4)(var3, var9);
                    var8 = var7.bind(var6)();
                    var3 = var8.done;
                    var5 = var8;
                    if(!var3) { _fun0033_ip = 82; continue _fun0033 }
case 78:
                    var3 = _closure1_slot21;
                    var2 = arg2;
                    var5 = var3.bind(var6)(var2);
                    var3 = var5.bind(var6)();
                    var2 = var3.done;
                    if(var2) { _fun0033_ip = 146; continue _fun0033 }
case 147:
                    var8 = var3.value;
                    var7 = var4.set;
                    var2 = var8.id;
                    var2 = var7.bind(var4)(var2, var8);
                    var7 = var5.bind(var6)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0033_ip = 147; continue _fun0033 }
case 146:
                    var3 = var1.Array;
                    var2 = var3.from;
                    var1 = var4.values;
                    var1 = var1.bind(var4)();
                    var1 = var2.bind(var3)(var1);
                    var3 = var1.sort;
                    var2 = function(arg1, arg2) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.compare;
                        var1 = arg1;
                        var2 = var1.startMessageId;
                        var1 = arg2;
                        var1 = var1.startMessageId;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var14 = var7.bind(var10)(var8, var9);
            var17 = var14.length;
            var12 = _closure1_slot16;
            var9 = var14;
            var8 = var13;
            var7 = var11;
            if(!(var17 > var12)) { _fun0032_ip = 148; continue _fun0032 }
case 149:
            var12 = 'after';
            if(!(var12 !== var16)) { _fun0032_ip = 150; continue _fun0032 }
case 151:
            var12 = 'before';
            if(!(var12 !== var16)) { _fun0032_ip = 152; continue _fun0032 }
case 153:
            var12 = function clampAnchorWindowStart(arg1, arg2) {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                    var3 = arg1;
                    var4 = arg2;
                    var _closure3_slot0 = var4;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0034_ip = 154; continue _fun0034 }
case 155:
                    var2 = var3.findIndex;
                    var1 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.compare;
                        var1 = arg1;
                        var2 = var1.startMessageId;
                        var1 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2, var1);
                        var1 = 0;
                        var1 = var2 >= var1;
                        return var1;
                    };
                    var7 = var2.bind(var3)(var1);
                    var1 = -1;
                    if(!(var1 === var7)) { _fun0034_ip = 9; continue _fun0034 }
case 94:
                    var7 = var3.length;
case 9:
                    var2 = global;
                    var6 = var2.Math;
                    var5 = var6.floor;
                    var4 = _closure1_slot16;
                    var1 = 2;
                    var1 = var4 / var1;
                    var1 = var5.bind(var6)(var1);
                    var3 = var3.length;
                    var6 = var3 - var4;
                    var4 = var2.Math;
                    var3 = var4.max;
                    var5 = var2.Math;
                    var2 = var5.min;
                    var1 = var7 - var1;
                    var2 = var2.bind(var5)(var1, var6);
                    var1 = 0;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
case 154:
                    var1 = 0;
                    return var1;
                }
            };
            var18 = var12.bind(var10)(var14, var15);
            var12 = 0;
            var15 = var13;
            if(!(var18 > var12)) { _fun0032_ip = 156; continue _fun0032 }
case 157:
            var15 = false;
case 156:
            var12 = _closure1_slot16;
            var17 = var18 + var12;
            var16 = var14.length;
            var12 = var11;
            if(!(var17 < var16)) { _fun0032_ip = 158; continue _fun0032 }
case 159:
            var12 = false;
case 158:
            var17 = var14.slice;
            var16 = _closure1_slot16;
            var16 = var18 + var16;
            var9 = var17.bind(var14)(var18, var16);
            var7 = var12;
            var8 = var15;
            _fun0032_ip = 148; continue _fun0032;
case 152:
            var16 = var14.slice;
            var15 = _closure1_slot16;
            var12 = 0;
            var9 = var16.bind(var14)(var12, var15);
            var7 = false;
            var8 = var13;
            _fun0032_ip = 148; continue _fun0032;
case 150:
            var13 = var14.slice;
            var15 = var14.length;
            var12 = _closure1_slot16;
            var12 = var15 - var12;
            var9 = var13.bind(var14)(var12);
            var8 = false;
            var7 = var11;
case 148:
            var3 = function buildChannelData(arg1, arg2, arg3) {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    var10 = arg2;
                    var6 = arg3;
                    var4 = null;
                    var2 = var4 == var6;
                    var5 = undefined;
                    var1 = undefined;
                    if(var2) { _fun0035_ip = 44; continue _fun0035 }
case 160:
                    var1 = var6.guildId;
case 44:
                    if(!(var4 == var1)) { _fun0035_ip = 161; continue _fun0035 }
case 7:
                    var2 = 0;
                    var3 = var10[var2];
                    var7 = var4 == var3;
                    var2 = undefined;
                    if(var7) { _fun0035_ip = 45; continue _fun0035 }
case 39:
                    var2 = var3.guildId;
case 45:
                    var1 = var2;
case 161:
                    if(!(var4 == var1)) { _fun0035_ip = 162; continue _fun0035 }
case 82:
                    var7 = _closure1_slot9;
                    var3 = var7.getChannel;
                    var2 = arg1;
                    var3 = var3.bind(var7)(var2);
                    var7 = var4 == var3;
                    var2 = undefined;
                    if(var7) { _fun0035_ip = 163; continue _fun0035 }
case 13:
                    var2 = var3.guild_id;
case 163:
                    var1 = var2;
case 162:
                    var2 = var4 != var1;
                    var11 = null;
                    if(!var2) { _fun0035_ip = 164; continue _fun0035 }
case 165:
                    var11 = var1;
case 164:
                    var24 = global;
                    var1 = var24.Map;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {constructor: {value: var1}});
                    var44 = var2;
                    var1 = new var44[var1](var43);
                    var9 = var1 instanceof Object ? var1 : var2;
                    var1 = var24.Map;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {constructor: {value: var1}});
                    var44 = var2;
                    var1 = new var44[var1](var43);
                    var8 = var1 instanceof Object ? var1 : var2;
                    var2 = var4 == var6;
                    var1 = undefined;
                    if(var2) { _fun0035_ip = 166; continue _fun0035 }
case 21:
                    var1 = var6.colorIndex;
case 166:
                    var3 = var4 != var1;
                    var2 = 0;
                    if(!var3) { _fun0035_ip = 23; continue _fun0035 }
case 127:
                    var2 = var1;
case 23:
                    var1 = _closure1_slot21;
                    var23 = var1.bind(var5)(var10);
                    var7 = var23.bind(var5)();
                    var1 = var7.done;
                    var21 = var2;
                    var22 = var7;
                    var20 = undefined;
                    var19 = undefined;
                    var18 = undefined;
                    var17 = undefined;
                    var16 = undefined;
                    var15 = undefined;
                    var14 = undefined;
                    var13 = undefined;
                    var7 = undefined;
                    var2 = var21;
                    if(var1) { _fun0035_ip = 167; continue _fun0035 }
case 168:
                    var33 = var22.value;
                    var1 = var4 == var6;
                    var26 = undefined;
                    if(var1) { _fun0035_ip = 169; continue _fun0035 }
case 109:
                    var27 = var6.conversationMetadataById;
                    var25 = var27.get;
                    var1 = var33.id;
                    var26 = var25.bind(var27)(var1);
case 169:
                    var1 = var4 == var26;
                    var30 = undefined;
                    if(var1) { _fun0035_ip = 170; continue _fun0035 }
case 171:
                    var30 = var26.color;
case 170:
                    var25 = var21;
                    if(!(var4 == var30)) { _fun0035_ip = 60; continue _fun0035 }
case 172:
                    var28 = _closure1_slot14;
                    var29 = parseFloat(var21);
                    var25 = var29 + 1;
                    var1 = var28.length;
                    var1 = var29 % var1;
                    var30 = var28[var1];
case 60:
                    var27 = var4 == var26;
                    var1 = undefined;
                    if(var27) { _fun0035_ip = 173; continue _fun0035 }
case 174:
                    var1 = var26.hydratedMessages;
case 173:
                    var27 = var4 != var1;
                    var29 = null;
                    if(!var27) { _fun0035_ip = 175; continue _fun0035 }
case 176:
                    var29 = var1;
case 175:
                    var28 = var4 != var29;
                    if(!var28) { _fun0035_ip = 177; continue _fun0035 }
case 178:
                    var1 = var4 == var26;
                    if(var1) { _fun0035_ip = 179; continue _fun0035 }
case 180:
                    var26 = var26.fullyHydrated;
                    var1 = !var26;
case 179:
                    var28 = !var1;
case 177:
                    var27 = var9.set;
                    var26 = var33.id;
                    var1 = {};
                    var1['conversation'] = var33;
                    var1['color'] = var30;
                    var1['hydratedMessages'] = var29;
                    var1['fullyHydrated'] = var28;
                    var1 = var27.bind(var9)(var26, var1);
                    var1 = var33.moderation;
                    var1 = var4 != var1;
                    var32 = null;
                    var27 = var18;
                    var26 = var17;
                    if(!var1) { _fun0035_ip = 181; continue _fun0035 }
case 182:
                    var1 = var24.Map;
                    var28 = var1.prototype;
                    var28 = Object.create(var28, {constructor: {value: var1}});
                    var44 = var28;
                    var1 = new var44[var1](var43);
                    var30 = var1 instanceof Object ? var1 : var28;
                    var28 = _closure1_slot21;
                    var1 = var33.moderation;
                    var1 = var1.flaggedMessageDetails;
                    var29 = var28.bind(var5)(var1);
                    var31 = var29.bind(var5)();
                    var1 = var31.done;
                    var28 = var31;
                    var32 = var30;
                    var20 = var28;
                    var19 = var29;
                    var27 = var18;
                    var26 = var17;
                    if(var1) { _fun0035_ip = 181; continue _fun0035 }
case 183:
                    var34 = var28.value;
                    var31 = var30.get;
                    var1 = var34.messageId;
                    var31 = var31.bind(var30)(var1);
                    if(!(var4 == var31)) { _fun0035_ip = 184; continue _fun0035 }
case 185:
                    var36 = var30.set;
                    var35 = var34.messageId;
                    var1 = new Array(1);
                    var1[0] = var34;
                    var1 = var36.bind(var30)(var35, var1);
                    _fun0035_ip = 186; continue _fun0035;
case 184:
                    var1 = var31.push;
                    var1 = var1.bind(var31)(var34);
case 186:
                    var35 = var29.bind(var5)();
                    var1 = var35.done;
                    var28 = var35;
                    var32 = var30;
                    var20 = var28;
                    var19 = var29;
                    var27 = var34;
                    var26 = var31;
                    if(!var1) { _fun0035_ip = 183; continue _fun0035 }
case 181:
                    var28 = _closure1_slot21;
                    var1 = var33.messageIds;
                    var31 = var28.bind(var5)(var1);
                    var28 = var31.bind(var5)();
                    var1 = var28.done;
                    var30 = var28;
                    var29 = var15;
                    var28 = var14;
                    var15 = var29;
                    var14 = var28;
                    if(var1) { _fun0035_ip = 187; continue _fun0035 }
case 188:
                    var35 = var30.value;
                    var1 = var33.moderation;
                    var1 = var4 != var1;
                    if(!var1) { _fun0035_ip = 189; continue _fun0035 }
case 190:
                    var34 = var33.moderation;
                    var36 = var34.flaggedMessageIds;
                    var34 = var36.includes;
                    var1 = var34.bind(var36)(var35);
case 189:
                    if(!var1) { _fun0035_ip = 191; continue _fun0035 }
case 192:
                    var1 = var4 != var32;
case 191:
                    var34 = null;
                    if(!var1) { _fun0035_ip = 193; continue _fun0035 }
case 194:
                    var37 = _closure1_slot25;
                    var1 = var32.get;
                    var36 = var1.bind(var32)(var35);
                    var1 = var36;
                    if(!(var4 == var36)) { _fun0035_ip = 195; continue _fun0035 }
case 196:
                    var1 = new Array(0);
case 195:
                    var34 = var37.bind(var5)(var1);
                    var28 = var36;
case 193:
                    var1 = var4 == var6;
                    var36 = var28;
                    var38 = undefined;
                    if(var1) { _fun0035_ip = 197; continue _fun0035 }
case 198:
                    var37 = var6.messageMetadataByMessageId;
                    var1 = var37.get;
                    var37 = var1.bind(var37)(var35);
                    var1 = var4 == var37;
                    var29 = var37;
                    var38 = undefined;
                    if(var1) { _fun0035_ip = 197; continue _fun0035 }
case 199:
                    var38 = var37.message;
                    var29 = var37;
case 197:
                    var1 = var4 != var38;
                    var37 = var29;
                    var40 = null;
                    if(!var1) { _fun0035_ip = 200; continue _fun0035 }
case 201:
                    var40 = var38;
case 200:
                    var39 = var8.set;
                    var1 = {};
                    var41 = var33.id;
                    var1['conversationId'] = var41;
                    var1['moderationLabel'] = var34;
                    var1['message'] = var40;
                    var1 = var39.bind(var8)(var35, var1);
                    var39 = var31.bind(var5)();
                    var1 = var39.done;
                    var30 = var39;
                    var29 = var37;
                    var28 = var36;
                    var16 = var38;
                    var15 = var29;
                    var14 = var28;
                    var13 = var35;
                    var7 = var34;
                    if(!var1) { _fun0035_ip = 188; continue _fun0035 }
case 187:
                    var28 = var23.bind(var5)();
                    var1 = var28.done;
                    var22 = var28;
                    var21 = var25;
                    var18 = var27;
                    var17 = var26;
                    var2 = var21;
                    if(!var1) { _fun0035_ip = 168; continue _fun0035 }
case 167:
                    var1 = var4 == var6;
                    var7 = undefined;
                    if(var1) { _fun0035_ip = 202; continue _fun0035 }
case 203:
                    var7 = var6.recentFeedbackRatingsByConversationId;
case 202:
                    if(!(var4 == var7)) { _fun0035_ip = 204; continue _fun0035 }
case 205:
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var1 = 12;
                    var1 = var14[var1];
                    var13 = var13.bind(var5)(var1);
                    var1 = {};
                    var3 = _closure1_slot15;
                    var1['max'] = var3;
                    var3 = var13.prototype;
                    var3 = Object.create(var3, {constructor: {value: var13}});
                    var44 = var3;
                    var43 = var1;
                    var1 = new var44[var13](var43, var42);
                    var7 = var1 instanceof Object ? var1 : var3;
case 204:
                    var1 = var4 == var6;
                    var3 = undefined;
                    if(var1) { _fun0035_ip = 206; continue _fun0035 }
case 207:
                    var3 = var6.selectedConversationId;
case 206:
                    var13 = var4 != var3;
                    var1 = null;
                    if(!var13) { _fun0035_ip = 208; continue _fun0035 }
case 209:
                    var1 = var3;
case 208:
                    var _closure3_slot0 = var1;
                    var13 = var4 != var1;
                    var3 = null;
                    if(!var13) { _fun0035_ip = 210; continue _fun0035 }
case 211:
                    var13 = var10.some;
                    var12 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var12 = var13.bind(var10)(var12);
                    var3 = null;
                    if(!var12) { _fun0035_ip = 210; continue _fun0035 }
case 212:
                    var3 = var1;
case 210:
                    var1 = {};
                    var1['guildId'] = var11;
                    var1['conversations'] = var10;
                    var1['conversationMetadataById'] = var9;
                    var1['messageMetadataByMessageId'] = var8;
                    var1['recentFeedbackRatingsByConversationId'] = var7;
                    var7 = var4 == var6;
                    var8 = undefined;
                    if(var7) { _fun0035_ip = 213; continue _fun0035 }
case 214:
                    var8 = var6.reachedOldest;
case 213:
                    var7 = var4 != var8;
                    if(!var7) { _fun0035_ip = 215; continue _fun0035 }
case 216:
                    var7 = var8;
case 215:
                    var1['reachedOldest'] = var7;
                    var7 = var4 == var6;
                    var5 = undefined;
                    if(var7) { _fun0035_ip = 217; continue _fun0035 }
case 218:
                    var5 = var6.reachedNewest;
case 217:
                    var4 = var4 != var5;
                    if(!var4) { _fun0035_ip = 219; continue _fun0035 }
case 220:
                    var4 = var5;
case 219:
                    var1['reachedNewest'] = var4;
                    var1['selectedConversationId'] = var3;
                    var1['colorIndex'] = var2;
                    return var1;
                }
            };
            var3 = var3.bind(var10)(var6, var9, var4);
            var3['reachedOldest'] = var8;
            var3['reachedNewest'] = var7;
            if(!(var5 == var4)) { _fun0032_ip = 221; continue _fun0032 }
case 222:
            var5 = _closure1_slot17;
            var2 = var5.set;
            var2 = var2.bind(var5)(var6, var3);
            _fun0032_ip = 223; continue _fun0032;
case 221:
            var2 = var1.Object;
            var1 = var2.assign;
            var1 = var1.bind(var2)(var4, var3);
case 223:
            var1 = true;
            return var1;
        }
    };
    var2['CONVERSATIONS_FETCH_SUCCESS'] = var10;
    var10 = function handleFetchFailure(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var3 = var1.requestKey;
        var2 = _closure1_slot23;
        var1 = undefined;
        var1 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var2['CONVERSATIONS_FETCH_FAILURE'] = var10;
    var10 = function handleChannelSelect(arg1) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channelId;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0036_ip = 91; continue _fun0036 }
case 224:
            var4 = _closure1_slot17;
            var2 = var4.has;
            var1 = var2.bind(var4)(var3);
case 91:
            if(!var1) { _fun0036_ip = 83; continue _fun0036 }
case 225:
            var2 = _closure1_slot17;
            var1 = var2.get;
            var1 = var1.bind(var2)(var3);
case 83:
            var1 = false;
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var10;
    var10 = function handleChannelDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var3 = _closure1_slot28;
        var2 = var1.id;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var2['CHANNEL_DELETE'] = var10;
    var10 = function handleGuildDelete(arg1) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var1 = arg1;
            var10 = var1.guild;
            var1 = 'unavailable';
            var1 = var1 in var10;
            if(!var1) { _fun0037_ip = 91; continue _fun0037 }
case 226:
            var2 = var10.unavailable;
            var1 = true;
            if(!(var1 !== var2)) { _fun0037_ip = 227; continue _fun0037 }
case 91:
            var2 = _closure1_slot21;
            var3 = _closure1_slot17;
            var1 = var3.keys;
            var1 = var1.bind(var3)();
            var8 = undefined;
            var7 = var2.bind(var8)(var1);
            var3 = var7.bind(var8)();
            var2 = var3.done;
            var5 = null;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0037_ip = 228; continue _fun0037 }
case 229:
            var12 = var4.value;
            var11 = _closure1_slot17;
            var2 = var11.peek;
            var2 = var2.bind(var11)(var12);
            var13 = var5 == var2;
            var11 = undefined;
            if(var13) { _fun0037_ip = 122; continue _fun0037 }
case 119:
            var11 = var2.guildId;
case 122:
            var2 = var10.id;
            var2 = var11 === var2;
            if(!var2) { _fun0037_ip = 51; continue _fun0037 }
case 230:
            var11 = _closure1_slot28;
            var2 = var11.bind(var8)(var12);
case 51:
            if(!var2) { _fun0037_ip = 75; continue _fun0037 }
case 125:
            var3 = true;
case 75:
            var12 = var7.bind(var8)();
            var2 = var12.done;
            var4 = var12;
            var1 = var3;
            if(!var2) { _fun0037_ip = 229; continue _fun0037 }
case 228:
            return var1;
case 227:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_DELETE'] = var10;
    var10 = function handleLoadMessagesSuccess(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var2 = var1.jump;
            var1 = null;
            if(!(var1 != var2)) { _fun0038_ip = 99; continue _fun0038 }
case 33:
            var5 = _closure1_slot11;
            var3 = var5.getChannelId;
            var3 = var3.bind(var5)();
            if(!(var3 === var4)) { _fun0038_ip = 99; continue _fun0038 }
case 93:
            var3 = _closure1_slot17;
            var2 = var3.peek;
            var3 = var2.bind(var3)(var4);
            var1 = var1 != var3;
            if(!var1) { _fun0038_ip = 49; continue _fun0038 }
case 89:
            var2 = false;
            var3['reachedOldest'] = var2;
            var3['reachedNewest'] = var2;
            var1 = true;
case 49:
            return var1;
case 99:
            var1 = false;
            return var1;
        }
    };
    var2['LOAD_MESSAGES_SUCCESS'] = var10;
    var10 = function handleSetSelectedConversation(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var3 = var1.conversationId;
            var1 = null;
            if(!(var1 != var5)) { _fun0039_ip = 8; continue _fun0039 }
case 33:
            var4 = _closure1_slot17;
            var2 = var4.peek;
            var2 = var2.bind(var4)(var5);
            var1 = var1 != var2;
            if(!var1) { _fun0039_ip = 161; continue _fun0039 }
case 39:
            var2['selectedConversationId'] = var3;
            var1 = true;
case 161:
            return var1;
case 8:
            var1 = false;
            return var1;
        }
    };
    var2['SET_SELECTED_CONVERSATION'] = var10;
    var10 = function handleClearConversationSelection(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channelId;
            var6 = var1.conversationId;
            var2 = _closure1_slot17;
            var1 = var2.peek;
            var3 = var1.bind(var2)(var3);
            var2 = null;
            if(!(var2 != var3)) { _fun0040_ip = 87; continue _fun0040 }
case 96:
            var5 = var3.selectedConversationId;
            var1 = var2 != var5;
            if(!var1) { _fun0040_ip = 102; continue _fun0040 }
case 42:
            var4 = var2 == var6;
            if(var4) { _fun0040_ip = 118; continue _fun0040 }
case 46:
            var4 = var5 === var6;
case 118:
            var1 = var4;
case 102:
            if(!var1) { _fun0040_ip = 110; continue _fun0040 }
case 61:
            var3['selectedConversationId'] = var2;
            var1 = true;
case 110:
            return var1;
case 87:
            var1 = false;
            return var1;
        }
    };
    var2['CLEAR_CONVERSATION_SELECTION'] = var10;
    var10 = function handleSetConversationFeedbackRating(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channelId;
            var5 = var1.conversationId;
            var4 = var1.rating;
            var2 = _closure1_slot17;
            var1 = var2.peek;
            var2 = var1.bind(var2)(var3);
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0041_ip = 85; continue _fun0041 }
case 97:
            var3 = var2.recentFeedbackRatingsByConversationId;
            var2 = var3.set;
            var2 = var2.bind(var3)(var5, var4);
            var1 = true;
case 85:
            return var1;
        }
    };
    var2['SET_CONVERSATION_FEEDBACK_RATING'] = var10;
    var10 = function handleMessageUpdate(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var1 = arg1;
            var9 = var1.message;
            var6 = var9.channel_id;
            var10 = var9.id;
            var _closure2_slot0 = var10;
            var5 = null;
            if(!(var5 != var6)) { _fun0042_ip = 22; continue _fun0042 }
case 37:
            if(!(var5 != var10)) { _fun0042_ip = 22; continue _fun0042 }
case 104:
            var4 = _closure1_slot17;
            var3 = var4.peek;
            var7 = var3.bind(var4)(var6);
            var3 = var5 == var7;
            var4 = undefined;
            var6 = undefined;
            if(var3) { _fun0042_ip = 231; continue _fun0042 }
case 80:
            var8 = var7.messageMetadataByMessageId;
            var3 = var8.get;
            var6 = var3.bind(var8)(var10);
case 231:
            var8 = var5 == var6;
            var3 = undefined;
            if(var8) { _fun0042_ip = 50; continue _fun0042 }
case 162:
            var3 = var6.message;
case 50:
            if(!(var5 != var3)) { _fun0042_ip = 55; continue _fun0042 }
case 164:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 14;
            var1 = var8[var1];
            var8 = var3.bind(var4)(var1);
            var3 = var8.updateMessageRecord;
            var1 = var6.message;
            var3 = var3.bind(var8)(var1, var9);
            var6['message'] = var3;
            var8 = var5 == var7;
            var1 = undefined;
            if(var8) { _fun0042_ip = 232; continue _fun0042 }
case 19:
            var8 = var7.conversationMetadataById;
            var7 = var8.get;
            var6 = var6.conversationId;
            var1 = var7.bind(var8)(var6);
case 232:
            var6 = var5 == var1;
            var4 = undefined;
            if(var6) { _fun0042_ip = 24; continue _fun0042 }
case 233:
            var4 = var1.hydratedMessages;
case 24:
            if(!(var5 != var4)) { _fun0042_ip = 168; continue _fun0042 }
case 234:
            var5 = var1.hydratedMessages;
            var4 = var5.findIndex;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var4 = -1;
            if(!(var4 !== var2)) { _fun0042_ip = 168; continue _fun0042 }
case 235:
            var1 = var1.hydratedMessages;
            var1[var2] = var3;
case 168:
            var1 = true;
            return var1;
case 55:
            var1 = false;
            return var1;
case 22:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_UPDATE'] = var10;
    var2['MESSAGE_REACTION_ADD'] = var9;
    var2['MESSAGE_REACTION_REMOVE'] = var9;
    var9 = function handleReactionBatch(arg1) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var7 = var1.messageId;
            var _closure2_slot0 = var7;
            var9 = var1.reactions;
            var4 = _closure1_slot17;
            var1 = var4.peek;
            var6 = var1.bind(var4)(var5);
            var5 = null;
            if(!(var5 != var6)) { _fun0043_ip = 236; continue _fun0043 }
case 47:
            var4 = var6.messageMetadataByMessageId;
            var1 = var4.get;
            var1 = var1.bind(var4)(var7);
            var8 = var5 == var1;
            var7 = undefined;
            if(var8) { _fun0043_ip = 229; continue _fun0043 }
case 103:
            var7 = var1.message;
case 229:
            if(!(var5 != var7)) { _fun0043_ip = 132; continue _fun0043 }
case 237:
            var8 = var1.message;
            var7 = var8.addReactionBatch;
            var10 = _closure1_slot8;
            var3 = var10.getId;
            var3 = var3.bind(var10)();
            var3 = var7.bind(var8)(var9, var3);
            var1['message'] = var3;
            var7 = var6.conversationMetadataById;
            var6 = var7.get;
            var1 = var1.conversationId;
            var1 = var6.bind(var7)(var1);
            var6 = var5 == var1;
            var4 = undefined;
            if(var6) { _fun0043_ip = 18; continue _fun0043 }
case 238:
            var4 = var1.hydratedMessages;
case 18:
            if(!(var5 != var4)) { _fun0043_ip = 239; continue _fun0043 }
case 240:
            var5 = var1.hydratedMessages;
            var4 = var5.findIndex;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var4 = -1;
            if(!(var4 !== var2)) { _fun0043_ip = 239; continue _fun0043 }
case 234:
            var1 = var1.hydratedMessages;
            var1[var2] = var3;
case 239:
            var1 = true;
            return var1;
case 132:
            var1 = false;
            return var1;
case 236:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_ADD_MANY'] = var9;
    var9 = function handleRemoveAllReactions(arg1) {
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var4 = var1.messageId;
            var _closure2_slot0 = var4;
            var3 = _closure1_slot17;
            var1 = var3.peek;
            var6 = var1.bind(var3)(var5);
            var5 = null;
            if(!(var5 != var6)) { _fun0044_ip = 241; continue _fun0044 }
case 6:
            var3 = var6.messageMetadataByMessageId;
            var1 = var3.get;
            var1 = var1.bind(var3)(var4);
            var7 = var5 == var1;
            var3 = undefined;
            if(var7) { _fun0044_ip = 110; continue _fun0044 }
case 84:
            var3 = var1.message;
case 110:
            if(!(var5 != var3)) { _fun0044_ip = 242; continue _fun0044 }
case 243:
            var9 = var1.message;
            var8 = var9.set;
            var7 = 'reactions';
            var3 = new Array(0);
            var3 = var8.bind(var9)(var7, var3);
            var1['message'] = var3;
            var7 = var6.conversationMetadataById;
            var6 = var7.get;
            var1 = var1.conversationId;
            var1 = var6.bind(var7)(var1);
            var6 = var5 == var1;
            var4 = undefined;
            if(var6) { _fun0044_ip = 244; continue _fun0044 }
case 67:
            var4 = var1.hydratedMessages;
case 244:
            if(!(var5 != var4)) { _fun0044_ip = 245; continue _fun0044 }
case 246:
            var5 = var1.hydratedMessages;
            var4 = var5.findIndex;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var4 = -1;
            if(!(var4 !== var2)) { _fun0044_ip = 245; continue _fun0044 }
case 53:
            var1 = var1.hydratedMessages;
            var1[var2] = var3;
case 245:
            var1 = true;
            return var1;
case 242:
            var1 = false;
            return var1;
case 241:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_REMOVE_ALL'] = var9;
    var9 = function handleRemoveEmojiReactions(arg1) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var4 = var1.messageId;
            var _closure2_slot0 = var4;
            var8 = var1.emoji;
            var3 = _closure1_slot17;
            var1 = var3.peek;
            var6 = var1.bind(var3)(var5);
            var5 = null;
            if(!(var5 != var6)) { _fun0045_ip = 234; continue _fun0045 }
case 47:
            var3 = var6.messageMetadataByMessageId;
            var1 = var3.get;
            var1 = var1.bind(var3)(var4);
            var7 = var5 == var1;
            var3 = undefined;
            if(var7) { _fun0045_ip = 229; continue _fun0045 }
case 103:
            var3 = var1.message;
case 229:
            if(!(var5 != var3)) { _fun0045_ip = 24; continue _fun0045 }
case 13:
            var7 = var1.message;
            var3 = var7.removeReactionsForEmoji;
            var3 = var3.bind(var7)(var8);
            var1['message'] = var3;
            var7 = var6.conversationMetadataById;
            var6 = var7.get;
            var1 = var1.conversationId;
            var1 = var6.bind(var7)(var1);
            var6 = var5 == var1;
            var4 = undefined;
            if(var6) { _fun0045_ip = 66; continue _fun0045 }
case 247:
            var4 = var1.hydratedMessages;
case 66:
            if(!(var5 != var4)) { _fun0045_ip = 68; continue _fun0045 }
case 248:
            var5 = var1.hydratedMessages;
            var4 = var5.findIndex;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var4 = -1;
            if(!(var4 !== var2)) { _fun0045_ip = 68; continue _fun0045 }
case 249:
            var1 = var1.hydratedMessages;
            var1[var2] = var3;
case 68:
            var1 = true;
            return var1;
case 24:
            var1 = false;
            return var1;
case 234:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_REMOVE_EMOJI'] = var9;
    var9 = function handleMessageDelete(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var3 = var1.id;
        var2 = _closure1_slot26;
        var1 = undefined;
        var1 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var2['MESSAGE_DELETE'] = var9;
    var9 = function handleMessageDeleteBulk(arg1) {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
            var1 = arg1;
            var9 = var1.channelId;
            var2 = var1.ids;
            var1 = _closure1_slot21;
            var7 = undefined;
            var6 = var1.bind(var7)(var2);
            var3 = var6.bind(var7)();
            var2 = var3.done;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0046_ip = 231; continue _fun0046 }
case 97:
            var10 = _closure1_slot26;
            var2 = var4.value;
            var2 = var10.bind(var7)(var9, var2);
            if(!var2) { _fun0046_ip = 34; continue _fun0046 }
case 102:
            var3 = true;
case 34:
            var11 = var6.bind(var7)();
            var2 = var11.done;
            var4 = var11;
            var1 = var3;
            if(!var2) { _fun0046_ip = 97; continue _fun0046 }
case 231:
            return var1;
        }
    };
    var2['MESSAGE_DELETE_BULK'] = var9;
    var4 = function handleLogout() {
        var3 = _closure1_slot17;
        var2 = var3.reset;
        var2 = var2.bind(var3)();
        var3 = _closure1_slot18;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var2 = _closure1_slot19;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var16 = var4;
    var14 = var2;
    var2 = new var16[var8](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/ConversationsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();