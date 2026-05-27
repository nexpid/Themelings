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
            _closure1_slot27 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot27 = var1;
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
            var9 = _closure1_slot29;
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
            var7 = _closure1_slot29;
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
    var _closure1_slot28 = var1;
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
    var _closure1_slot29 = var1;
    var1 = function buildModerationLabel(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arg1;
            var3 = 0;
            var4 = var6[var3];
            var5 = var6.map;
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.category;
                    var3 = null;
                    if(!(var3 == var1)) { _fun0006_ip = 33; continue _fun0006 }
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
            if(var6) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var5 = var4.severity;
case 39:
            var6 = var2 != var5;
            var7 = null;
            if(!var6) { _fun0005_ip = 3; continue _fun0005 }
case 34:
            var7 = var5;
case 3:
            var5 = var2 == var4;
            var1 = undefined;
            if(var5) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var1 = var4.confidence;
case 41:
            var4 = var2 != var1;
            var9 = null;
            if(!var4) { _fun0005_ip = 43; continue _fun0005 }
case 15:
            var9 = var1;
case 43:
            var4 = var2 != var7;
            var1 = null;
            if(!var4) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var4 = global;
            var4 = var4.HermesInternal;
            var6 = var4.concat;
            var5 = '';
            var4 = ' severity';
            var1 = var6.bind(var5)(var7, var4);
case 44:
            var6 = new Array(2);
            var6[0] = var1;
            var4 = var2 != var9;
            var1 = null;
            if(!var4) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var4 = global;
            var4 = var4.HermesInternal;
            var7 = var4.concat;
            var5 = '';
            var4 = ' confidence';
            var1 = var7.bind(var5)(var9, var4);
case 46:
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
            if(!var4) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var4 = var8.join;
            var6 = var4.bind(var8)(var7);
case 48:
            var4 = new Array(2);
            var4[0] = var6;
            var6 = var5.length;
            var6 = var6 > var3;
            var2 = null;
            if(!var6) { _fun0005_ip = 16; continue _fun0005 }
case 50:
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
            if(!var3) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var1 = var2;
case 51:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var9 = function handleReaction(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var7 = arg1;
            var8 = var7.type;
            var5 = var7.channelId;
            var10 = var7.messageId;
            var _closure2_slot0 = var10;
            var9 = var7.userId;
            var12 = var7.emoji;
            var11 = var7.reactionType;
            var4 = _closure1_slot18;
            var1 = var4.get;
            var6 = var1.bind(var4)(var5);
            var5 = null;
            if(!(var5 != var6)) { _fun0007_ip = 53; continue _fun0007 }
case 34:
            var4 = var6.messageMetadataByMessageId;
            var1 = var4.get;
            var1 = var1.bind(var4)(var10);
            var13 = var5 == var1;
            var4 = undefined;
            var10 = undefined;
            if(var13) { _fun0007_ip = 43; continue _fun0007 }
case 54:
            var10 = var1.message;
case 43:
            if(!(var5 != var10)) { _fun0007_ip = 55; continue _fun0007 }
case 56:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 17;
            var10 = var14[var10];
            var13 = var13.bind(var4)(var10);
            var10 = var13.shouldApplyReaction;
            var10 = var10.bind(var13)(var7);
            if(var10) { _fun0007_ip = 57; continue _fun0007 }
case 58:
            var10 = false;
            return var10;
case 57:
            var10 = _closure1_slot9;
            var3 = var10.getId;
            var3 = var3.bind(var10)();
            var10 = var3 === var9;
            var3 = 'MESSAGE_REACTION_ADD';
            if(!(var3 !== var8)) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var8 = var1.message;
            var3 = var8.removeReaction;
            var3 = var3.bind(var8)(var12, var10, var11);
            _fun0007_ip = 61; continue _fun0007;
case 59:
            var9 = var1.message;
            var8 = var9.addReaction;
            var16 = var7.colors;
            var19 = var9;
            var18 = var12;
            var17 = var10;
            var15 = var11;
            var3 = var19[var8](var18, var17, var16, var15, var14);
case 61:
            var1['message'] = var3;
            var7 = var6.conversationMetadataById;
            var6 = var7.get;
            var1 = var1.conversationId;
            var1 = var6.bind(var7)(var1);
            var6 = var5 == var1;
            var4 = undefined;
            if(var6) { _fun0007_ip = 28; continue _fun0007 }
case 62:
            var4 = var1.hydratedMessages;
case 28:
            if(!(var5 != var4)) { _fun0007_ip = 63; continue _fun0007 }
case 64:
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
            if(!(var4 !== var2)) { _fun0007_ip = 63; continue _fun0007 }
case 65:
            var1 = var1.hydratedMessages;
            var1[var2] = var3;
case 63:
            var1 = true;
            return var1;
case 55:
            var1 = false;
            return var1;
case 53:
            var1 = false;
            return var1;
        }
    };
    var1 = function removeHydratedMessage(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg2;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot18;
            var4 = var5.get;
            var1 = arg1;
            var1 = var4.bind(var5)(var1);
            var6 = null;
            if(!(var6 != var1)) { _fun0008_ip = 66; continue _fun0008 }
case 67:
            var5 = var1.messageMetadataByMessageId;
            var4 = var5.get;
            var4 = var4.bind(var5)(var3);
            if(!(var6 != var4)) { _fun0008_ip = 68; continue _fun0008 }
case 8:
            var7 = var1.conversationMetadataById;
            var5 = var7.get;
            var4 = var4.conversationId;
            var4 = var5.bind(var7)(var4);
            var7 = var6 == var4;
            var5 = undefined;
            if(var7) { _fun0008_ip = 69; continue _fun0008 }
case 13:
            var5 = var4.hydratedMessages;
case 69:
            if(!(var6 != var5)) { _fun0008_ip = 68; continue _fun0008 }
case 15:
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
case 68:
            var2 = var1.messageMetadataByMessageId;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            return var1;
case 66:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function evictChannel(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot18;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var5);
            var4 = _closure1_slot19;
            var2 = var4.delete;
            var2 = var2.bind(var4)(var5);
            if(!var2) { _fun0009_ip = 70; continue _fun0009 }
case 71:
            var1 = true;
case 70:
            var4 = _closure1_slot20;
            var2 = var4.delete;
            var2 = var2.bind(var4)(var5);
            if(!var2) { _fun0009_ip = 39; continue _fun0009 }
case 32:
            var1 = true;
case 39:
            var4 = _closure1_slot21;
            var2 = var4.delete;
            var2 = var2.bind(var4)(var5);
            if(!var2) { _fun0009_ip = 72; continue _fun0009 }
case 73:
            var1 = true;
case 72:
            var4 = _closure1_slot23;
            var2 = var4.delete;
            var2 = var2.bind(var4)(var5);
            if(!var2) { _fun0009_ip = 15; continue _fun0009 }
case 54:
            var1 = true;
case 15:
            var4 = _closure1_slot24;
            var2 = var4.delete;
            var2 = var2.bind(var4)(var5);
            if(!var2) { _fun0009_ip = 74; continue _fun0009 }
case 75:
            var1 = true;
case 74:
            var6 = _closure1_slot22;
            var2 = null;
            var7 = var2 == var6;
            var4 = undefined;
            if(var7) { _fun0009_ip = 76; continue _fun0009 }
case 77:
            var4 = var6.channelId;
case 76:
            if(!(var4 === var5)) { _fun0009_ip = 78; continue _fun0009 }
case 79:
            _closure1_slot22 = var2;
            var1 = true;
case 78:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var2 = global;
    var11 = var2.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var8 = 0;
    var10 = var6[var8];
    var1 = undefined;
    var10 = var7.bind(var1)(var10);
    var _closure1_slot3 = var10;
    var10 = 1;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot4 = var10;
    var10 = 2;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot5 = var10;
    var10 = 3;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot6 = var10;
    var10 = 4;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot7 = var10;
    var10 = 5;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot8 = var10;
    var10 = 6;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot9 = var10;
    var10 = 7;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot10 = var10;
    var10 = 8;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot11 = var10;
    var10 = 9;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot12 = var10;
    var10 = 10;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot13 = var10;
    var10 = 11;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot14 = var10;
    var10 = 12;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot15 = var10;
    var10 = 13;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var11 = var10.CONVERSATION_COLORS;
    var _closure1_slot16 = var11;
    var10 = var10.CONVERSATION_FEEDBACK_RATINGS_CACHE_MAX;
    var _closure1_slot17 = var10;
    var10 = var2.Map;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var15 = var11;
    var10 = new var15[var10](var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot18 = var10;
    var10 = var2.Set;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var15 = var11;
    var10 = new var15[var10](var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot19 = var10;
    var10 = var2.Map;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var15 = var11;
    var10 = new var15[var10](var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot20 = var10;
    var10 = var2.Map;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var15 = var11;
    var10 = new var15[var10](var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot21 = var10;
    var10 = null;
    var _closure1_slot22 = var10;
    var10 = var2.Map;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var15 = var11;
    var10 = new var15[var10](var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot23 = var10;
    var10 = var2.Map;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var15 = var11;
    var10 = new var15[var10](var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot24 = var10;
    var _closure1_slot25 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var15 = var8;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot26 = var2;
    var2 = 18;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ConversationsStore() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
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
                var1 = _closure1_slot27;
                var1 = var1.bind(var3)();
                if(var1) { _fun0010_ip = 80; continue _fun0010 }
case 81:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0010_ip = 82; continue _fun0010;
case 80:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 82:
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
            var9 = this;
            var8 = var9.waitFor;
            var16 = _closure1_slot9;
            var15 = _closure1_slot10;
            var14 = _closure1_slot15;
            var13 = _closure1_slot11;
            var12 = _closure1_slot12;
            var11 = _closure1_slot13;
            var10 = _closure1_slot14;
            var17 = var9;
            var1 = var17[var8](var16, var15, var14, var13, var12, var11, var10, var9);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(18);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasChannelData';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot18;
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
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = _closure1_slot18;
                var3 = var4.get;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                var _closure3_slot0 = var2;
                var3 = null;
                if(!(var3 != var2)) { _fun0011_ip = 8; continue _fun0011 }
case 83:
                var3 = var2.conversations;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
                        if(var5) { _fun0012_ip = 84; continue _fun0012 }
case 9:
                        var2 = var4.color;
case 84:
                        if(!(var3 == var2)) { _fun0012_ip = 85; continue _fun0012 }
case 39:
                        var4 = _closure1_slot16;
                        var3 = 0;
                        var2 = var4[var3];
case 85:
                        var1['color'] = var2;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                _fun0011_ip = 86; continue _fun0011;
case 8:
                var1 = new Array(0);
case 86:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getConversationForMessage';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = _closure1_slot18;
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0013_ip = 87; continue _fun0013 }
case 88:
                var6 = var3.messageMetadataByMessageId;
                var4 = var6.get;
                var3 = arg2;
                var3 = var4.bind(var6)(var3);
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0013_ip = 87; continue _fun0013 }
case 86:
                var2 = var3.conversationId;
case 87:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0013_ip = 72; continue _fun0013 }
case 4:
                var1 = var2;
case 72:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getMessageMetadata';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var3 = _closure1_slot18;
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0014_ip = 89; continue _fun0014 }
case 88:
                var5 = var3.messageMetadataByMessageId;
                var4 = var5.get;
                var3 = arg2;
                var2 = var4.bind(var5)(var3);
case 89:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0014_ip = 90; continue _fun0014 }
case 86:
                var1 = var2;
case 90:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getMessage';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var4 = this;
                var3 = var4.getMessageMetadata;
                var2 = arg1;
                var1 = arg2;
                var3 = var3.bind(var4)(var2, var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0015_ip = 70; continue _fun0015 }
case 91:
                var2 = var3.message;
case 70:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0015_ip = 81; continue _fun0015 }
case 92:
                var1 = var2;
case 81:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getConversationMetadata';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var3 = _closure1_slot18;
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0016_ip = 89; continue _fun0016 }
case 88:
                var5 = var3.conversationMetadataById;
                var4 = var5.get;
                var3 = arg2;
                var2 = var4.bind(var5)(var3);
case 89:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0016_ip = 90; continue _fun0016 }
case 86:
                var1 = var2;
case 90:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getScrollToConversation';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var2 = _closure1_slot22;
                var1 = null;
                var5 = var1 == var2;
                var4 = undefined;
                if(var5) { _fun0017_ip = 35; continue _fun0017 }
case 93:
                var4 = var2.channelId;
case 35:
                var2 = arg1;
                var1 = null;
                if(!(var4 === var2)) { _fun0017_ip = 34; continue _fun0017 }
case 83:
                var2 = {};
                var4 = _closure1_slot22;
                var4 = var4.conversationId;
                var2['conversationId'] = var4;
                var3 = _closure1_slot22;
                var3 = var3.seq;
                var2['seq'] = var3;
                var1 = var2;
case 34:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'hasMoreConversations';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var5 = arg1;
                var2 = _closure1_slot18;
                var1 = var2.has;
                var1 = var1.bind(var2)(var5);
                var2 = !var1;
                var1 = !var2;
                if(var2) { _fun0018_ip = 42; continue _fun0018 }
case 94:
                var4 = 'before';
                var2 = arg2;
                if(!(var4 !== var2)) { _fun0018_ip = 86; continue _fun0018 }
case 95:
                var4 = _closure1_slot21;
                var2 = var4.get;
                var2 = var2.bind(var4)(var5);
                var2 = !var2;
                _fun0018_ip = 96; continue _fun0018;
case 86:
                var4 = _closure1_slot20;
                var3 = var4.get;
                var3 = var3.bind(var4)(var5);
                var2 = !var3;
case 96:
                var1 = var2;
case 42:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'isPendingFetch';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot19;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getSelectedConversationId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var3 = _closure1_slot23;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0019_ip = 83; continue _fun0019 }
case 94:
                var1 = var2;
case 83:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getSelectedConversation';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var5 = arg1;
                var2 = _closure1_slot23;
                var1 = var2.get;
                var7 = var1.bind(var2)(var5);
                var2 = null;
                var4 = var2 == var7;
                var1 = null;
                if(var4) { _fun0020_ip = 97; continue _fun0020 }
case 88:
                var4 = _closure1_slot18;
                var3 = var4.get;
                var4 = var3.bind(var4)(var5);
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0020_ip = 98; continue _fun0020 }
case 84:
                var5 = var4.conversationMetadataById;
                var4 = var5.get;
                var4 = var4.bind(var5)(var7);
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0020_ip = 98; continue _fun0020 }
case 42:
                var3 = var4.conversation;
case 98:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0020_ip = 99; continue _fun0020 }
case 54:
                var2 = var3;
case 99:
                var1 = var2;
case 97:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getSelectedConversationColor';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var5 = arg1;
                var2 = _closure1_slot23;
                var1 = var2.get;
                var7 = var1.bind(var2)(var5);
                var2 = null;
                var4 = var2 == var7;
                var1 = null;
                if(var4) { _fun0021_ip = 43; continue _fun0021 }
case 88:
                var4 = _closure1_slot18;
                var3 = var4.get;
                var4 = var3.bind(var4)(var5);
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0021_ip = 100; continue _fun0021 }
case 84:
                var5 = var4.conversationMetadataById;
                var4 = var5.get;
                var4 = var4.bind(var5)(var7);
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0021_ip = 100; continue _fun0021 }
case 42:
                var3 = var4.color;
case 100:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0021_ip = 15; continue _fun0021 }
case 101:
                var2 = var3;
case 15:
                var1 = var2;
case 43:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getHydratedMessages';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var3 = _closure1_slot18;
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0022_ip = 87; continue _fun0022 }
case 88:
                var6 = var3.conversationMetadataById;
                var4 = var6.get;
                var3 = arg2;
                var3 = var4.bind(var6)(var3);
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0022_ip = 87; continue _fun0022 }
case 86:
                var2 = var3.hydratedMessages;
case 87:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0022_ip = 72; continue _fun0022 }
case 4:
                var1 = var2;
case 72:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getHydratedMessageById';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var3 = _closure1_slot18;
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0023_ip = 102; continue _fun0023 }
case 88:
                var6 = var3.messageMetadataByMessageId;
                var4 = var6.get;
                var3 = arg2;
                var3 = var4.bind(var6)(var3);
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0023_ip = 102; continue _fun0023 }
case 86:
                var2 = var3.message;
case 102:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0023_ip = 96; continue _fun0023 }
case 103:
                var1 = var2;
case 96:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'isConversationFetchPending';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot26;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getSelectionSeq';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var3 = _closure1_slot24;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0024_ip = 91; continue _fun0024 }
case 88:
                var1 = var2;
case 91:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getConversationFeedbackRating';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var3 = _closure1_slot18;
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0025_ip = 89; continue _fun0025 }
case 88:
                var5 = var3.recentFeedbackRatingsByConversationId;
                var4 = var5.get;
                var3 = arg2;
                var2 = var4.bind(var5)(var3);
case 89:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0025_ip = 90; continue _fun0025 }
case 86:
                var1 = var2;
case 90:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[17] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ConversationsStore';
    var8['displayName'] = var2;
    var2 = 19;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleConversationFetchStart(arg1) {
        var1 = arg1;
        var3 = var1.conversationId;
        var2 = _closure1_slot26;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['CONVERSATION_FETCH_START'] = var10;
    var10 = function handleConversationFetchSuccess(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var2 = arg1;
            var5 = var2.channelId;
            var9 = var2.conversationId;
            var1 = var2.conversation;
            var6 = var2.messages;
            var3 = _closure1_slot26;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var9);
            var3 = _closure1_slot18;
            var2 = var3.get;
            var8 = var2.bind(var3)(var5);
            var3 = null;
            if(!(var3 != var8)) { _fun0026_ip = 104; continue _fun0026 }
case 105:
            var5 = var8.conversationMetadataById;
            var2 = var5.get;
            var2 = var2.bind(var5)(var9);
            if(!(var3 != var2)) { _fun0026_ip = 69; continue _fun0026 }
case 13:
            var2['conversation'] = var1;
case 69:
            var5 = var6.map;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.createMessageRecord;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var5.bind(var6)(var1);
            var4 = _closure1_slot28;
            var7 = undefined;
            var6 = var4.bind(var7)(var1);
            var5 = var6.bind(var7)();
            var4 = var5.done;
            if(var4) { _fun0026_ip = 106; continue _fun0026 }
case 107:
            var10 = var5.value;
            var12 = var8.messageMetadataByMessageId;
            var11 = var12.get;
            var4 = var10.id;
            var4 = var11.bind(var12)(var4);
            if(!(var3 == var4)) { _fun0026_ip = 108; continue _fun0026 }
case 109:
            var14 = var8.messageMetadataByMessageId;
            var13 = var14.set;
            var12 = var10.id;
            var11 = {};
            var11['conversationId'] = var9;
            var11['moderationLabel'] = var3;
            var11['message'] = var10;
            var11 = var13.bind(var14)(var12, var11);
            _fun0026_ip = 110; continue _fun0026;
case 108:
            var4['message'] = var10;
case 110:
            var10 = var6.bind(var7)();
            var4 = var10.done;
            var5 = var10;
            if(!var4) { _fun0026_ip = 107; continue _fun0026 }
case 106:
            if(!(var3 != var2)) { _fun0026_ip = 104; continue _fun0026 }
case 111:
            var2['hydratedMessages'] = var1;
case 104:
            var1 = undefined;
            return var1;
        }
    };
    var2['CONVERSATION_FETCH_SUCCESS'] = var10;
    var10 = function handleConversationFetchFailure(arg1) {
        var1 = arg1;
        var3 = var1.conversationId;
        var2 = _closure1_slot26;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['CONVERSATION_FETCH_FAILURE'] = var10;
    var10 = function handleFetchStart(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = _closure1_slot19;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['CONVERSATIONS_FETCH_START'] = var10;
    var10 = function handleFetchSuccess(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var4 = var1.conversations;
            var11 = var1.direction;
            var9 = var1.beforeShortCircuited;
            var6 = var1.afterShortCircuited;
            var10 = var1.isStaleRefresh;
            var3 = _closure1_slot19;
            var1 = var3.delete;
            var1 = var1.bind(var3)(var5);
            var3 = _closure1_slot18;
            var1 = var3.get;
            var3 = var1.bind(var3)(var5);
            var7 = null;
            var13 = var7 == var3;
            var1 = undefined;
            var12 = undefined;
            if(var13) { _fun0027_ip = 15; continue _fun0027 }
case 112:
            var12 = var3.conversations;
case 15:
            if(!(var7 == var12)) { _fun0027_ip = 113; continue _fun0027 }
case 97:
            var12 = new Array(0);
case 113:
            var3 = var12;
            if(!var10) { _fun0027_ip = 114; continue _fun0027 }
case 17:
            var10 = function pruneStaleConversations(arg1, arg2) {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var1 = arg1;
                    var8 = arg2;
                    var3 = var8.length;
                    var7 = 0;
                    if(!(var7 !== var3)) { _fun0028_ip = 115; continue _fun0028 }
case 116:
                    var3 = global;
                    var6 = var3.Set;
                    var5 = var8.map;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var12 = var5.bind(var8)(var4);
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var13 = var5;
                    var4 = new var13[var6](var12, var11);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var _closure3_slot0 = var4;
                    var6 = var3.Math;
                    var5 = var6.min;
                    var9 = var8.map;
                    var4 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 15;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.extractTimestamp;
                        var1 = arg1;
                        var1 = var1.startMessageId;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var11 = var9.bind(var8)(var4);
                    var4 = new Array(0);
                    var12 = var4;
                    var10 = 0;
                    var9 = arraySpread(var12, var11, var10);
                    var12 = var5;
                    var11 = var4;
                    var10 = var6;
                    var4 = apply(var12, var11, var10);
                    var _closure3_slot1 = var4;
                    var5 = var3.Math;
                    var4 = var5.max;
                    var6 = var8.map;
                    var3 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 15;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.extractTimestamp;
                        var1 = arg1;
                        var1 = var1.startMessageId;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var11 = var6.bind(var8)(var3);
                    var3 = new Array(0);
                    var12 = var3;
                    var10 = 0;
                    var6 = arraySpread(var12, var11, var10);
                    var12 = var4;
                    var11 = var3;
                    var10 = var5;
                    var3 = apply(var12, var11, var10);
                    var _closure3_slot2 = var3;
                    var3 = var1.filter;
                    var2 = function(arg1) {
                        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                            var2 = arg1;
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.extractTimestamp;
                            var1 = var2.startMessageId;
                            var5 = var3.bind(var4)(var1);
                            var1 = _closure3_slot1;
                            var1 = var5 < var1;
                            if(var1) { _fun0029_ip = 34; continue _fun0029 }
case 86:
                            var4 = _closure3_slot2;
                            var1 = var5 > var4;
case 34:
                            if(var1) { _fun0029_ip = 117; continue _fun0029 }
case 3:
                            var4 = _closure3_slot0;
                            var3 = var4.has;
                            var2 = var2.id;
                            var1 = var3.bind(var4)(var2);
case 117:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var1)(var2);
                    return var2;
case 115:
                    return var1;
                }
            };
            var3 = var10.bind(var1)(var12, var4);
case 114:
            var9 = !var9;
            if(var9) { _fun0027_ip = 118; continue _fun0027 }
case 119:
            var10 = 'before';
            var10 = var10 !== var11;
            if(!var10) { _fun0027_ip = 120; continue _fun0027 }
case 121:
            var12 = 'around';
            var10 = var12 !== var11;
case 120:
            var9 = var10;
case 118:
            if(var9) { _fun0027_ip = 21; continue _fun0027 }
case 122:
            var12 = _closure1_slot20;
            var10 = var12.set;
            var9 = true;
            var9 = var10.bind(var12)(var5, var9);
case 21:
            var6 = !var6;
            if(var6) { _fun0027_ip = 123; continue _fun0027 }
case 124:
            var9 = 'after';
            var9 = var9 !== var11;
            if(!var9) { _fun0027_ip = 125; continue _fun0027 }
case 126:
            var10 = 'around';
            var9 = var10 !== var11;
case 125:
            var6 = var9;
case 123:
            if(var6) { _fun0027_ip = 127; continue _fun0027 }
case 128:
            var10 = _closure1_slot21;
            var9 = var10.set;
            var6 = true;
            var6 = var9.bind(var10)(var5, var6);
case 127:
            var2 = function mergeConversations(arg1, arg2) {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    var1 = global;
                    var2 = var1.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var12 = var3;
                    var2 = new var12[var2](var11);
                    var4 = var2 instanceof Object ? var2 : var3;
                    var5 = _closure1_slot28;
                    var6 = undefined;
                    var3 = arg1;
                    var7 = var5.bind(var6)(var3);
                    var5 = var7.bind(var6)();
                    var3 = var5.done;
                    if(var3) { _fun0030_ip = 101; continue _fun0030 }
case 129:
                    var9 = var5.value;
                    var8 = var4.set;
                    var3 = var9.id;
                    var3 = var8.bind(var4)(var3, var9);
                    var8 = var7.bind(var6)();
                    var3 = var8.done;
                    var5 = var8;
                    if(!var3) { _fun0030_ip = 129; continue _fun0030 }
case 101:
                    var3 = _closure1_slot28;
                    var2 = arg2;
                    var5 = var3.bind(var6)(var2);
                    var3 = var5.bind(var6)();
                    var2 = var3.done;
                    if(var2) { _fun0030_ip = 130; continue _fun0030 }
case 131:
                    var8 = var3.value;
                    var7 = var4.set;
                    var2 = var8.id;
                    var2 = var7.bind(var4)(var2, var8);
                    var7 = var5.bind(var6)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0030_ip = 131; continue _fun0030 }
case 130:
                    var3 = var1.Array;
                    var2 = var3.from;
                    var1 = var4.values;
                    var1 = var1.bind(var4)();
                    var1 = var2.bind(var3)(var1);
                    var3 = var1.sort;
                    var2 = function(arg1, arg2) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 15;
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
            var11 = var2.bind(var1)(var3, var4);
            var4 = _closure1_slot18;
            var3 = var4.set;
            var6 = _closure1_slot18;
            var2 = var6.get;
            var9 = var2.bind(var6)(var5);
            var6 = var7 == var9;
            var2 = undefined;
            if(var6) { _fun0027_ip = 28; continue _fun0027 }
case 132:
            var2 = var9.guildId;
case 28:
            if(!(var7 == var2)) { _fun0027_ip = 133; continue _fun0027 }
case 64:
            var6 = 0;
            var10 = var11[var6];
            var12 = var7 == var10;
            var6 = undefined;
            if(var12) { _fun0027_ip = 29; continue _fun0027 }
case 134:
            var6 = var10.guildId;
case 29:
            var2 = var6;
case 133:
            if(!(var7 == var2)) { _fun0027_ip = 51; continue _fun0027 }
case 135:
            var10 = _closure1_slot10;
            var6 = var10.getChannel;
            var10 = var6.bind(var10)(var5);
            var12 = var7 == var10;
            var6 = undefined;
            if(var12) { _fun0027_ip = 52; continue _fun0027 }
case 53:
            var6 = var10.guild_id;
case 52:
            var2 = var6;
case 51:
            var6 = var7 != var2;
            var12 = null;
            if(!var6) { _fun0027_ip = 136; continue _fun0027 }
case 137:
            var12 = var2;
case 136:
            var24 = global;
            var2 = var24.Map;
            var6 = var2.prototype;
            var6 = Object.create(var6, {constructor: {value: var2}});
            var43 = var6;
            var2 = new var43[var2](var42);
            var10 = var2 instanceof Object ? var2 : var6;
            var2 = var24.Map;
            var6 = var2.prototype;
            var6 = Object.create(var6, {constructor: {value: var2}});
            var43 = var6;
            var2 = new var43[var2](var42);
            var6 = var2 instanceof Object ? var2 : var6;
            var2 = _closure1_slot28;
            var23 = var2.bind(var1)(var11);
            var13 = var23.bind(var1)();
            var2 = var13.done;
            var22 = var13;
            var21 = undefined;
            var20 = undefined;
            var19 = undefined;
            var18 = undefined;
            var17 = undefined;
            var16 = undefined;
            var15 = undefined;
            var14 = undefined;
            var13 = undefined;
            if(var2) { _fun0027_ip = 138; continue _fun0027 }
case 139:
            var32 = var22.value;
            var2 = var7 == var9;
            var27 = undefined;
            if(var2) { _fun0027_ip = 140; continue _fun0027 }
case 141:
            var26 = var9.conversationMetadataById;
            var25 = var26.get;
            var2 = var32.id;
            var27 = var25.bind(var26)(var2);
case 140:
            var2 = var7 == var27;
            var28 = undefined;
            if(var2) { _fun0027_ip = 142; continue _fun0027 }
case 143:
            var28 = var27.color;
case 142:
            if(!(var7 == var28)) { _fun0027_ip = 144; continue _fun0027 }
case 145:
            var25 = _closure1_slot16;
            var2 = _closure1_slot25;
            var26 = parseFloat(var2);
            var2 = var26 + 1;
            _closure1_slot25 = var2;
            var2 = var25.length;
            var2 = var26 % var2;
            var28 = var25[var2];
case 144:
            var26 = var10.set;
            var25 = var32.id;
            var2 = {};
            var2['conversation'] = var32;
            var2['color'] = var28;
            var29 = var7 == var27;
            var28 = undefined;
            if(var29) { _fun0027_ip = 146; continue _fun0027 }
case 147:
            var28 = var27.hydratedMessages;
case 146:
            var29 = var7 != var28;
            var27 = null;
            if(!var29) { _fun0027_ip = 148; continue _fun0027 }
case 149:
            var27 = var28;
case 148:
            var2['hydratedMessages'] = var27;
            var2 = var26.bind(var10)(var25, var2);
            var2 = var32.moderation;
            var2 = var7 != var2;
            var31 = null;
            var26 = var19;
            var25 = var18;
            if(!var2) { _fun0027_ip = 150; continue _fun0027 }
case 151:
            var2 = var24.Map;
            var27 = var2.prototype;
            var27 = Object.create(var27, {constructor: {value: var2}});
            var43 = var27;
            var2 = new var43[var2](var42);
            var29 = var2 instanceof Object ? var2 : var27;
            var27 = _closure1_slot28;
            var2 = var32.moderation;
            var2 = var2.flaggedMessageDetails;
            var28 = var27.bind(var1)(var2);
            var30 = var28.bind(var1)();
            var2 = var30.done;
            var27 = var30;
            var31 = var29;
            var21 = var27;
            var20 = var28;
            var26 = var19;
            var25 = var18;
            if(var2) { _fun0027_ip = 150; continue _fun0027 }
case 152:
            var33 = var27.value;
            var30 = var29.get;
            var2 = var33.messageId;
            var30 = var30.bind(var29)(var2);
            if(!(var7 == var30)) { _fun0027_ip = 153; continue _fun0027 }
case 154:
            var35 = var29.set;
            var34 = var33.messageId;
            var2 = new Array(1);
            var2[0] = var33;
            var2 = var35.bind(var29)(var34, var2);
            _fun0027_ip = 155; continue _fun0027;
case 153:
            var2 = var30.push;
            var2 = var2.bind(var30)(var33);
case 155:
            var34 = var28.bind(var1)();
            var2 = var34.done;
            var27 = var34;
            var31 = var29;
            var21 = var27;
            var20 = var28;
            var26 = var33;
            var25 = var30;
            if(!var2) { _fun0027_ip = 152; continue _fun0027 }
case 150:
            var27 = _closure1_slot28;
            var2 = var32.messageIds;
            var30 = var27.bind(var1)(var2);
            var27 = var30.bind(var1)();
            var2 = var27.done;
            var29 = var27;
            var28 = var16;
            var27 = var15;
            var16 = var28;
            var15 = var27;
            if(var2) { _fun0027_ip = 156; continue _fun0027 }
case 157:
            var34 = var29.value;
            var2 = var32.moderation;
            var2 = var7 != var2;
            if(!var2) { _fun0027_ip = 158; continue _fun0027 }
case 159:
            var33 = var32.moderation;
            var35 = var33.flaggedMessageIds;
            var33 = var35.includes;
            var2 = var33.bind(var35)(var34);
case 158:
            if(!var2) { _fun0027_ip = 160; continue _fun0027 }
case 161:
            var2 = var7 != var31;
case 160:
            var33 = null;
            if(!var2) { _fun0027_ip = 162; continue _fun0027 }
case 163:
            var36 = _closure1_slot30;
            var2 = var31.get;
            var35 = var2.bind(var31)(var34);
            var2 = var35;
            if(!(var7 == var35)) { _fun0027_ip = 164; continue _fun0027 }
case 165:
            var2 = new Array(0);
case 164:
            var33 = var36.bind(var1)(var2);
            var27 = var35;
case 162:
            var2 = var7 == var9;
            var35 = var27;
            var37 = undefined;
            if(var2) { _fun0027_ip = 166; continue _fun0027 }
case 167:
            var36 = var9.messageMetadataByMessageId;
            var2 = var36.get;
            var36 = var2.bind(var36)(var34);
            var2 = var7 == var36;
            var28 = var36;
            var37 = undefined;
            if(var2) { _fun0027_ip = 166; continue _fun0027 }
case 168:
            var37 = var36.message;
            var28 = var36;
case 166:
            var2 = var7 != var37;
            var36 = var28;
            var39 = null;
            if(!var2) { _fun0027_ip = 169; continue _fun0027 }
case 170:
            var39 = var37;
case 169:
            var38 = var6.set;
            var2 = {};
            var40 = var32.id;
            var2['conversationId'] = var40;
            var2['moderationLabel'] = var33;
            var2['message'] = var39;
            var2 = var38.bind(var6)(var34, var2);
            var38 = var30.bind(var1)();
            var2 = var38.done;
            var29 = var38;
            var28 = var36;
            var27 = var35;
            var17 = var37;
            var16 = var28;
            var15 = var27;
            var14 = var34;
            var13 = var33;
            if(!var2) { _fun0027_ip = 157; continue _fun0027 }
case 156:
            var27 = var23.bind(var1)();
            var2 = var27.done;
            var22 = var27;
            var19 = var26;
            var18 = var25;
            if(!var2) { _fun0027_ip = 139; continue _fun0027 }
case 138:
            var2 = {};
            var2['guildId'] = var12;
            var2['conversations'] = var11;
            var2['conversationMetadataById'] = var10;
            var2['messageMetadataByMessageId'] = var6;
            var10 = var7 == var9;
            var6 = undefined;
            if(var10) { _fun0027_ip = 171; continue _fun0027 }
case 172:
            var6 = var9.recentFeedbackRatingsByConversationId;
case 171:
            if(!(var7 == var6)) { _fun0027_ip = 173; continue _fun0027 }
case 174:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var7 = 14;
            var7 = var10[var7];
            var9 = var9.bind(var1)(var7);
            var7 = {};
            var8 = _closure1_slot17;
            var7['max'] = var8;
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var43 = var8;
            var42 = var7;
            var7 = new var43[var9](var42, var41);
            var6 = var7 instanceof Object ? var7 : var8;
case 173:
            var2['recentFeedbackRatingsByConversationId'] = var6;
            var2 = var3.bind(var4)(var5, var2);
            return var1;
        }
    };
    var2['CONVERSATIONS_FETCH_SUCCESS'] = var10;
    var10 = function handleFetchFailure(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = _closure1_slot19;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['CONVERSATIONS_FETCH_FAILURE'] = var10;
    var10 = function handleChannelDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var3 = _closure1_slot32;
        var2 = var1.id;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var2['CHANNEL_DELETE'] = var10;
    var10 = function handleGuildDelete(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var1 = arg1;
            var12 = var1.guild;
            var1 = 'unavailable';
            var1 = var1 in var12;
            if(!var1) { _fun0031_ip = 88; continue _fun0031 }
case 175:
            var2 = var12.unavailable;
            var1 = true;
            if(!(var1 !== var2)) { _fun0031_ip = 176; continue _fun0031 }
case 88:
            var2 = _closure1_slot28;
            var1 = _closure1_slot18;
            var10 = undefined;
            var9 = var2.bind(var10)(var1);
            var3 = var9.bind(var10)();
            var2 = var3.done;
            var7 = 2;
            var6 = 0;
            var5 = 1;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0031_ip = 177; continue _fun0031 }
case 96:
            var13 = var4.value;
            var2 = _closure1_slot8;
            var2 = var2.bind(var10)(var13, var7);
            var14 = var2[var6];
            var2 = var2[var5];
            var13 = var2.guildId;
            var2 = var12.id;
            var2 = var13 === var2;
            if(!var2) { _fun0031_ip = 178; continue _fun0031 }
case 179:
            var13 = _closure1_slot32;
            var2 = var13.bind(var10)(var14);
case 178:
            if(!var2) { _fun0031_ip = 77; continue _fun0031 }
case 180:
            var3 = true;
case 77:
            var14 = var9.bind(var10)();
            var2 = var14.done;
            var4 = var14;
            var1 = var3;
            if(!var2) { _fun0031_ip = 96; continue _fun0031 }
case 177:
            return var1;
case 176:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_DELETE'] = var10;
    var10 = function handleLoadMessagesSuccess(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var2 = var1.jump;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0032_ip = 181; continue _fun0032 }
case 35:
            var3 = _closure1_slot12;
            var2 = var3.getChannelId;
            var2 = var2.bind(var3)();
            var1 = var2 === var4;
case 181:
            if(!var1) { _fun0032_ip = 182; continue _fun0032 }
case 183:
            var5 = _closure1_slot20;
            var3 = var5.delete;
            var3 = var3.bind(var5)(var4);
            var3 = _closure1_slot21;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
            var1 = true;
case 182:
            return var1;
        }
    };
    var2['LOAD_MESSAGES_SUCCESS'] = var10;
    var10 = function handleSetSelectedConversation(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var1 = arg1;
            var9 = var1.channelId;
            var7 = var1.conversationId;
            var8 = null;
            var1 = var8 != var9;
            if(!var1) { _fun0033_ip = 19; continue _fun0033 }
case 184:
            var3 = _closure1_slot23;
            var2 = var3.set;
            var2 = var2.bind(var3)(var9, var7);
            var10 = _closure1_slot24;
            var3 = var10.set;
            var5 = _closure1_slot24;
            var2 = var5.get;
            var5 = var2.bind(var5)(var9);
            var11 = var8 != var5;
            var2 = 0;
            if(!var11) { _fun0033_ip = 42; continue _fun0033 }
case 96:
            var2 = var5;
case 42:
            var5 = 1;
            var2 = var2 + var5;
            var2 = var3.bind(var10)(var9, var2);
            var3 = var8 != var7;
            var1 = true;
            if(!var3) { _fun0033_ip = 19; continue _fun0033 }
case 185:
            var3 = {};
            var3['channelId'] = var9;
            var3['conversationId'] = var7;
            var9 = _closure1_slot22;
            var10 = var8 == var9;
            var7 = undefined;
            if(var10) { _fun0033_ip = 186; continue _fun0033 }
case 178:
            var7 = var9.seq;
case 186:
            var8 = var8 != var7;
            var6 = 0;
            if(!var8) { _fun0033_ip = 187; continue _fun0033 }
case 58:
            var6 = var7;
case 187:
            var5 = var6 + var5;
            var3['seq'] = var5;
            _closure1_slot22 = var3;
            var1 = true;
case 19:
            return var1;
        }
    };
    var2['SET_SELECTED_CONVERSATION'] = var10;
    var10 = function handleClearConversationSelection(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var7 = var1.conversationId;
            var3 = _closure1_slot23;
            var1 = var3.get;
            var4 = var1.bind(var3)(var5);
            var6 = null;
            var1 = var6 != var4;
            if(!var1) { _fun0034_ip = 84; continue _fun0034 }
case 95:
            var3 = var6 == var7;
            if(var3) { _fun0034_ip = 81; continue _fun0034 }
case 183:
            var3 = var4 === var7;
case 81:
            var1 = var3;
case 84:
            if(!var1) { _fun0034_ip = 188; continue _fun0034 }
case 129:
            var4 = _closure1_slot23;
            var3 = var4.set;
            var3 = var3.bind(var4)(var5, var6);
            var4 = _closure1_slot24;
            var3 = var4.set;
            var7 = _closure1_slot24;
            var2 = var7.get;
            var2 = var2.bind(var7)(var5);
            var7 = var6 != var2;
            var6 = 0;
            if(!var7) { _fun0034_ip = 189; continue _fun0034 }
case 113:
            var6 = var2;
case 189:
            var2 = 1;
            var2 = var6 + var2;
            var2 = var3.bind(var4)(var5, var2);
            var1 = true;
case 188:
            return var1;
        }
    };
    var2['CLEAR_CONVERSATION_SELECTION'] = var10;
    var10 = function handleSetConversationFeedbackRating(arg1) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channelId;
            var5 = var1.conversationId;
            var4 = var1.rating;
            var2 = _closure1_slot18;
            var1 = var2.get;
            var2 = var1.bind(var2)(var3);
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0035_ip = 87; continue _fun0035 }
case 6:
            var3 = var2.recentFeedbackRatingsByConversationId;
            var2 = var3.set;
            var2 = var2.bind(var3)(var5, var4);
            var1 = true;
case 87:
            return var1;
        }
    };
    var2['SET_CONVERSATION_FEEDBACK_RATING'] = var10;
    var10 = function handleMessageUpdate(arg1) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var1 = arg1;
            var9 = var1.message;
            var6 = var9.channel_id;
            var10 = var9.id;
            var _closure2_slot0 = var10;
            var5 = null;
            if(!(var5 != var6)) { _fun0036_ip = 190; continue _fun0036 }
case 37:
            if(!(var5 != var10)) { _fun0036_ip = 190; continue _fun0036 }
case 95:
            var4 = _closure1_slot18;
            var3 = var4.get;
            var7 = var3.bind(var4)(var6);
            var3 = var5 == var7;
            var4 = undefined;
            var6 = undefined;
            if(var3) { _fun0036_ip = 100; continue _fun0036 }
case 191:
            var8 = var7.messageMetadataByMessageId;
            var3 = var8.get;
            var6 = var3.bind(var8)(var10);
case 100:
            var8 = var5 == var6;
            var3 = undefined;
            if(var8) { _fun0036_ip = 192; continue _fun0036 }
case 101:
            var3 = var6.message;
case 192:
            if(!(var5 != var3)) { _fun0036_ip = 193; continue _fun0036 }
case 82:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 16;
            var1 = var8[var1];
            var8 = var3.bind(var4)(var1);
            var3 = var8.updateMessageRecord;
            var1 = var6.message;
            var3 = var3.bind(var8)(var1, var9);
            var6['message'] = var3;
            var8 = var5 == var7;
            var1 = undefined;
            if(var8) { _fun0036_ip = 20; continue _fun0036 }
case 194:
            var8 = var7.conversationMetadataById;
            var7 = var8.get;
            var6 = var6.conversationId;
            var1 = var7.bind(var8)(var6);
case 20:
            var6 = var5 == var1;
            var4 = undefined;
            if(var6) { _fun0036_ip = 125; continue _fun0036 }
case 195:
            var4 = var1.hydratedMessages;
case 125:
            if(!(var5 != var4)) { _fun0036_ip = 196; continue _fun0036 }
case 197:
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
            if(!(var4 !== var2)) { _fun0036_ip = 196; continue _fun0036 }
case 198:
            var1 = var1.hydratedMessages;
            var1[var2] = var3;
case 196:
            var1 = true;
            return var1;
case 193:
            var1 = false;
            return var1;
case 190:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_UPDATE'] = var10;
    var2['MESSAGE_REACTION_ADD'] = var9;
    var2['MESSAGE_REACTION_REMOVE'] = var9;
    var9 = function handleReactionBatch(arg1) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var7 = var1.messageId;
            var _closure2_slot0 = var7;
            var9 = var1.reactions;
            var4 = _closure1_slot18;
            var1 = var4.get;
            var6 = var1.bind(var4)(var5);
            var5 = null;
            if(!(var5 != var6)) { _fun0037_ip = 199; continue _fun0037 }
case 81:
            var4 = var6.messageMetadataByMessageId;
            var1 = var4.get;
            var1 = var1.bind(var4)(var7);
            var8 = var5 == var1;
            var7 = undefined;
            if(var8) { _fun0037_ip = 200; continue _fun0037 }
case 96:
            var7 = var1.message;
case 200:
            if(!(var5 != var7)) { _fun0037_ip = 201; continue _fun0037 }
case 202:
            var8 = var1.message;
            var7 = var8.addReactionBatch;
            var10 = _closure1_slot9;
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
            if(var6) { _fun0037_ip = 109; continue _fun0037 }
case 203:
            var4 = var1.hydratedMessages;
case 109:
            if(!(var5 != var4)) { _fun0037_ip = 110; continue _fun0037 }
case 204:
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
            if(!(var4 !== var2)) { _fun0037_ip = 110; continue _fun0037 }
case 197:
            var1 = var1.hydratedMessages;
            var1[var2] = var3;
case 110:
            var1 = true;
            return var1;
case 201:
            var1 = false;
            return var1;
case 199:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_ADD_MANY'] = var9;
    var9 = function handleRemoveAllReactions(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var4 = var1.messageId;
            var _closure2_slot0 = var4;
            var3 = _closure1_slot18;
            var1 = var3.get;
            var6 = var1.bind(var3)(var5);
            var5 = null;
            if(!(var5 != var6)) { _fun0038_ip = 128; continue _fun0038 }
case 205:
            var3 = var6.messageMetadataByMessageId;
            var1 = var3.get;
            var1 = var1.bind(var3)(var4);
            var7 = var5 == var1;
            var3 = undefined;
            if(var7) { _fun0038_ip = 73; continue _fun0038 }
case 3:
            var3 = var1.message;
case 73:
            if(!(var5 != var3)) { _fun0038_ip = 206; continue _fun0038 }
case 42:
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
            if(var6) { _fun0038_ip = 120; continue _fun0038 }
case 58:
            var4 = var1.hydratedMessages;
case 120:
            if(!(var5 != var4)) { _fun0038_ip = 207; continue _fun0038 }
case 176:
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
            if(!(var4 !== var2)) { _fun0038_ip = 207; continue _fun0038 }
case 208:
            var1 = var1.hydratedMessages;
            var1[var2] = var3;
case 207:
            var1 = true;
            return var1;
case 206:
            var1 = false;
            return var1;
case 128:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_REMOVE_ALL'] = var9;
    var9 = function handleRemoveEmojiReactions(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var4 = var1.messageId;
            var _closure2_slot0 = var4;
            var8 = var1.emoji;
            var3 = _closure1_slot18;
            var1 = var3.get;
            var6 = var1.bind(var3)(var5);
            var5 = null;
            if(!(var5 != var6)) { _fun0039_ip = 197; continue _fun0039 }
case 81:
            var3 = var6.messageMetadataByMessageId;
            var1 = var3.get;
            var1 = var1.bind(var3)(var4);
            var7 = var5 == var1;
            var3 = undefined;
            if(var7) { _fun0039_ip = 200; continue _fun0039 }
case 96:
            var3 = var1.message;
case 200:
            if(!(var5 != var3)) { _fun0039_ip = 125; continue _fun0039 }
case 98:
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
            if(var6) { _fun0039_ip = 57; continue _fun0039 }
case 121:
            var4 = var1.hydratedMessages;
case 57:
            if(!(var5 != var4)) { _fun0039_ip = 59; continue _fun0039 }
case 177:
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
            if(!(var4 !== var2)) { _fun0039_ip = 59; continue _fun0039 }
case 209:
            var1 = var1.hydratedMessages;
            var1[var2] = var3;
case 59:
            var1 = true;
            return var1;
case 125:
            var1 = false;
            return var1;
case 197:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_REMOVE_EMOJI'] = var9;
    var9 = function handleMessageDelete(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var3 = var1.id;
        var2 = _closure1_slot31;
        var1 = undefined;
        var1 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var2['MESSAGE_DELETE'] = var9;
    var9 = function handleMessageDeleteBulk(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var1 = arg1;
            var9 = var1.channelId;
            var2 = var1.ids;
            var1 = _closure1_slot28;
            var7 = undefined;
            var6 = var1.bind(var7)(var2);
            var3 = var6.bind(var7)();
            var2 = var3.done;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0040_ip = 98; continue _fun0040 }
case 183:
            var10 = _closure1_slot31;
            var2 = var4.value;
            var2 = var10.bind(var7)(var9, var2);
            if(!var2) { _fun0040_ip = 34; continue _fun0040 }
case 87:
            var3 = true;
case 34:
            var11 = var6.bind(var7)();
            var2 = var11.done;
            var4 = var11;
            var1 = var3;
            if(!var2) { _fun0040_ip = 183; continue _fun0040 }
case 98:
            return var1;
        }
    };
    var2['MESSAGE_DELETE_BULK'] = var9;
    var4 = function handleLogout() {
        var3 = _closure1_slot18;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot19;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot20;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot21;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot26;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot23;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot24;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var1 = null;
        _closure1_slot22 = var1;
        var1 = 0;
        _closure1_slot25 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/ConversationsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();