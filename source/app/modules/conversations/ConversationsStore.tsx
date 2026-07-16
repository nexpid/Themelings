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
case 51:
            var9 = var1;
case 50:
            var4 = var2 != var7;
            var1 = null;
            if(!var4) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var4 = global;
            var4 = var4.HermesInternal;
            var6 = var4.concat;
            var5 = '';
            var4 = ' severity';
            var1 = var6.bind(var5)(var7, var4);
case 52:
            var6 = new Array(2);
            var6[0] = var1;
            var4 = var2 != var9;
            var1 = null;
            if(!var4) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var4 = global;
            var4 = var4.HermesInternal;
            var7 = var4.concat;
            var5 = '';
            var4 = ' confidence';
            var1 = var7.bind(var5)(var9, var4);
case 54:
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
            if(!var4) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var4 = var8.join;
            var6 = var4.bind(var8)(var7);
case 56:
            var4 = new Array(2);
            var4[0] = var6;
            var6 = var5.length;
            var6 = var6 > var3;
            var2 = null;
            if(!var6) { _fun0007_ip = 58; continue _fun0007 }
case 28:
            var2 = var5;
case 58:
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
            if(!var3) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var1 = var2;
case 59:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function processHydratedMessages(arg1, arg2, arg3, arg4) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var13 = arg2;
            var4 = arg4;
            var3 = arguments[4];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0009_ip = 61; continue _fun0009 }
case 62:
            var3 = new Array(0);
case 61:
            var6 = _closure1_slot17;
            var5 = var6.peek;
            var2 = arg1;
            var7 = var5.bind(var6)(var2);
            var6 = null;
            if(!(var6 != var7)) { _fun0009_ip = 63; continue _fun0009 }
case 9:
            var5 = var7.conversationMetadataById;
            var2 = var5.get;
            var2 = var2.bind(var5)(var13);
            if(!(var6 != var2)) { _fun0009_ip = 63; continue _fun0009 }
case 5:
            if(var4) { _fun0009_ip = 64; continue _fun0009 }
case 65:
            var5 = var2.fullyHydrated;
            if(var5) { _fun0009_ip = 63; continue _fun0009 }
case 64:
            var9 = new Array(0);
            var10 = _closure1_slot21;
            var5 = arg3;
            var12 = var10.bind(var1)(var5);
            var11 = var12.bind(var1)();
            var10 = var11.done;
            var5 = 14;
            if(var10) { _fun0009_ip = 66; continue _fun0009 }
case 67:
            var15 = var11.value;
            var14 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var5];
            var14 = var14.bind(var1)(var10);
            var10 = var14.createMessageRecord;
            var14 = var10.bind(var14)(var15);
            var10 = var9.push;
            var10 = var10.bind(var9)(var14);
            var16 = var7.messageMetadataByMessageId;
            var15 = var16.get;
            var10 = var14.id;
            var10 = var15.bind(var16)(var10);
            if(!(var6 == var10)) { _fun0009_ip = 68; continue _fun0009 }
case 69:
            var18 = var7.messageMetadataByMessageId;
            var17 = var18.set;
            var16 = var14.id;
            var15 = {};
            var15['conversationId'] = var13;
            var15['moderationLabel'] = var6;
            var15['message'] = var14;
            var15 = var17.bind(var18)(var16, var15);
            _fun0009_ip = 70; continue _fun0009;
case 68:
            var10['conversationId'] = var13;
            var10['message'] = var14;
case 70:
            var14 = var12.bind(var1)();
            var10 = var14.done;
            var11 = var14;
            if(!var10) { _fun0009_ip = 67; continue _fun0009 }
case 66:
            var2['hydratedMessages'] = var9;
            var2['fullyHydrated'] = var4;
            var2 = _closure1_slot21;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0009_ip = 63; continue _fun0009 }
case 71:
            var14 = var3.value;
            var10 = var7.messageMetadataByMessageId;
            var9 = var10.get;
            var2 = var14.id;
            var2 = var9.bind(var10)(var2);
            if(!(var6 == var2)) { _fun0009_ip = 72; continue _fun0009 }
case 60:
            var11 = var7.messageMetadataByMessageId;
            var10 = var11.set;
            var9 = var14.id;
            var2 = {'conversationId': null, 'moderationLabel': null};
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var5];
            var13 = var13.bind(var1)(var12);
            var12 = var13.createMessageRecord;
            var12 = var12.bind(var13)(var14);
            var2['message'] = var12;
            var2 = var10.bind(var11)(var9, var2);
case 72:
            var9 = var4.bind(var1)();
            var2 = var9.done;
            var3 = var9;
            if(!var2) { _fun0009_ip = 71; continue _fun0009 }
case 63:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var9 = function handleReaction(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var8 = var1.type;
            var6 = var1.channelId;
            var10 = var1.messageId;
            var _closure2_slot0 = var10;
            var9 = var1.userId;
            var12 = var1.emoji;
            var11 = var1.reactionType;
            var5 = _closure1_slot17;
            var4 = var5.peek;
            var7 = var4.bind(var5)(var6);
            var5 = null;
            if(!(var5 != var7)) { _fun0010_ip = 73; continue _fun0010 }
case 74:
            var6 = var7.messageMetadataByMessageId;
            var4 = var6.get;
            var6 = var4.bind(var6)(var10);
            var13 = var5 == var6;
            var4 = undefined;
            var10 = undefined;
            if(var13) { _fun0010_ip = 75; continue _fun0010 }
case 76:
            var10 = var6.message;
case 75:
            if(!(var5 != var10)) { _fun0010_ip = 77; continue _fun0010 }
case 78:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 17;
            var10 = var14[var10];
            var13 = var13.bind(var4)(var10);
            var10 = var13.shouldApplyReaction;
            var10 = var10.bind(var13)(var1);
            if(var10) { _fun0010_ip = 79; continue _fun0010 }
case 80:
            var10 = false;
            return var10;
case 79:
            var10 = _closure1_slot8;
            var3 = var10.getId;
            var3 = var3.bind(var10)();
            var10 = var3 === var9;
            var3 = 'MESSAGE_REACTION_ADD';
            if(!(var3 !== var8)) { _fun0010_ip = 81; continue _fun0010 }
case 82:
            var8 = var6.message;
            var3 = var8.removeReaction;
            var3 = var3.bind(var8)(var12, var10, var11);
            _fun0010_ip = 83; continue _fun0010;
case 81:
            var9 = var6.message;
            var8 = var9.addReaction;
            var16 = var1.colors;
            var19 = var9;
            var18 = var12;
            var17 = var10;
            var15 = var11;
            var3 = var19[var8](var18, var17, var16, var15, var14);
case 83:
            var6['message'] = var3;
            var1 = var6.conversationId;
            var8 = var5 != var1;
            var1 = null;
            if(!var8) { _fun0010_ip = 84; continue _fun0010 }
case 85:
            var8 = var7.conversationMetadataById;
            var7 = var8.get;
            var6 = var6.conversationId;
            var1 = var7.bind(var8)(var6);
case 84:
            var6 = var5 == var1;
            var4 = undefined;
            if(var6) { _fun0010_ip = 86; continue _fun0010 }
case 87:
            var4 = var1.hydratedMessages;
case 86:
            if(!(var5 != var4)) { _fun0010_ip = 88; continue _fun0010 }
case 89:
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
            if(!(var4 !== var2)) { _fun0010_ip = 88; continue _fun0010 }
case 90:
            var1 = var1.hydratedMessages;
            var1[var2] = var3;
case 88:
            var1 = true;
            return var1;
case 77:
            var1 = false;
            return var1;
case 73:
            var1 = false;
            return var1;
        }
    };
    var1 = function removeHydratedMessage(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = arg2;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot17;
            var4 = var5.peek;
            var1 = arg1;
            var1 = var4.bind(var5)(var1);
            var6 = null;
            if(!(var6 != var1)) { _fun0011_ip = 91; continue _fun0011 }
case 92:
            var5 = var1.messageMetadataByMessageId;
            var4 = var5.get;
            var5 = var4.bind(var5)(var3);
            if(!(var6 != var5)) { _fun0011_ip = 93; continue _fun0011 }
case 94:
            var4 = var5.conversationId;
            var7 = var6 != var4;
            var4 = null;
            if(!var7) { _fun0011_ip = 15; continue _fun0011 }
case 4:
            var8 = var1.conversationMetadataById;
            var7 = var8.get;
            var5 = var5.conversationId;
            var4 = var7.bind(var8)(var5);
case 15:
            var7 = var6 == var4;
            var5 = undefined;
            if(var7) { _fun0011_ip = 95; continue _fun0011 }
case 96:
            var5 = var4.hydratedMessages;
case 95:
            if(!(var6 != var5)) { _fun0011_ip = 93; continue _fun0011 }
case 97:
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
case 93:
            var2 = var1.messageMetadataByMessageId;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            return var1;
case 91:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var10 = function cleanupChannelSideState(arg1) {
        var3 = _closure1_slot18;
        var2 = var3.delete;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot28 = var10;
    var1 = function evictChannel(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot17;
            var1 = var3.has;
            var1 = var1.bind(var3)(var4);
            var5 = _closure1_slot17;
            var3 = var5.del;
            var3 = var3.bind(var5)(var4);
            var3 = _closure1_slot28;
            var2 = undefined;
            var2 = var3.bind(var2)(var4);
            if(var1) { _fun0012_ip = 47; continue _fun0012 }
case 9:
            var1 = var2;
case 47:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
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
    var2 = 18;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ConversationsStore() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
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
                if(var1) { _fun0013_ip = 98; continue _fun0013 }
case 42:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0013_ip = 96; continue _fun0013;
case 98:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 96:
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
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = var3.peek;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                if(var3) { _fun0014_ip = 99; continue _fun0014 }
case 7:
                var1 = var2.conversations;
case 99:
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
                if(var4) { _fun0015_ip = 100; continue _fun0015 }
case 40:
                var6 = var3.messageMetadataByMessageId;
                var4 = var6.get;
                var3 = arg2;
                var3 = var4.bind(var6)(var3);
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0015_ip = 100; continue _fun0015 }
case 101:
                var2 = var3.conversationId;
case 100:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0015_ip = 102; continue _fun0015 }
case 65:
                var1 = var2;
case 102:
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
                if(!var3) { _fun0016_ip = 103; continue _fun0016 }
case 101:
                var1 = var2;
case 103:
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
                if(var4) { _fun0017_ip = 92; continue _fun0017 }
case 104:
                var2 = var3.message;
case 92:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0017_ip = 42; continue _fun0017 }
case 105:
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
                if(!var3) { _fun0018_ip = 103; continue _fun0018 }
case 101:
                var1 = var2;
case 103:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getEdgeMarker';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = var3.peek;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var2 = var1 == var3;
                if(var2) { _fun0019_ip = 46; continue _fun0019 }
case 7:
                var4 = 'before';
                var2 = arg2;
                if(!(var4 !== var2)) { _fun0019_ip = 9; continue _fun0019 }
case 106:
                var2 = var3.reachedNewest;
                _fun0019_ip = 8; continue _fun0019;
case 9:
                var2 = var3.reachedOldest;
case 8:
                var1 = var2;
case 46:
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
                if(var3) { _fun0020_ip = 107; continue _fun0020 }
case 108:
                var4 = var5.has;
                var3 = arg2;
                var2 = var4.bind(var5)(var3);
case 107:
                var1 = var1 != var2;
                if(!var1) { _fun0020_ip = 109; continue _fun0020 }
case 42:
                var1 = var2;
case 109:
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
                if(var4) { _fun0021_ip = 110; continue _fun0021 }
case 40:
                var2 = var3.selectedConversationId;
case 110:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0021_ip = 45; continue _fun0021 }
case 111:
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
                if(var1) { _fun0022_ip = 110; continue _fun0022 }
case 40:
                var7 = var4.selectedConversationId;
case 110:
                var3 = var2 == var7;
                var1 = null;
                if(var3) { _fun0022_ip = 112; continue _fun0022 }
case 111:
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0022_ip = 64; continue _fun0022 }
case 32:
                var5 = var4.conversationMetadataById;
                var4 = var5.get;
                var4 = var4.bind(var5)(var7);
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0022_ip = 64; continue _fun0022 }
case 113:
                var3 = var4.conversation;
case 64:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0022_ip = 114; continue _fun0022 }
case 15:
                var2 = var3;
case 114:
                var1 = var2;
case 112:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getConversationColor';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = var3.peek;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var2 = null;
                var4 = var2 == var3;
                var1 = null;
                if(var4) { _fun0023_ip = 115; continue _fun0023 }
case 40:
                var5 = var3.conversationMetadataById;
                var4 = var5.get;
                var3 = arg2;
                var4 = var4.bind(var5)(var3);
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0023_ip = 116; continue _fun0023 }
case 101:
                var3 = var4.color;
case 116:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0023_ip = 117; continue _fun0023 }
case 4:
                var2 = var3;
case 117:
                var1 = var2;
case 115:
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
                if(var4) { _fun0024_ip = 100; continue _fun0024 }
case 40:
                var6 = var3.conversationMetadataById;
                var4 = var6.get;
                var3 = arg2;
                var3 = var4.bind(var6)(var3);
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0024_ip = 100; continue _fun0024 }
case 101:
                var2 = var3.hydratedMessages;
case 100:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0024_ip = 102; continue _fun0024 }
case 65:
                var1 = var2;
case 102:
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
                if(var4) { _fun0025_ip = 116; continue _fun0025 }
case 40:
                var6 = var3.messageMetadataByMessageId;
                var4 = var6.get;
                var3 = arg2;
                var3 = var4.bind(var6)(var3);
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0025_ip = 116; continue _fun0025 }
case 101:
                var2 = var3.message;
case 116:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0025_ip = 117; continue _fun0025 }
case 4:
                var1 = var2;
case 117:
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
                if(!var1) { _fun0026_ip = 118; continue _fun0026 }
case 119:
                var3 = var5.size;
                var2 = 0;
                var1 = var2 !== var3;
case 118:
                if(!var1) { _fun0026_ip = 5; continue _fun0026 }
case 120:
                var3 = true;
                var2 = arg2;
                var2 = var3 !== var2;
                if(var2) { _fun0026_ip = 98; continue _fun0026 }
case 8:
                var4 = var5.has;
                var3 = 'full';
                var2 = var4.bind(var5)(var3);
case 98:
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
                if(!var3) { _fun0027_ip = 103; continue _fun0027 }
case 101:
                var1 = var2;
case 103:
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
    var2 = 19;
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
case 121:
            var3 = 'full';
case 44:
            var4 = _closure1_slot19;
            var2 = var4.get;
            var2 = var2.bind(var4)(var6);
            var4 = null;
            if(!(var4 == var2)) { _fun0028_ip = 96; continue _fun0028 }
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
            _fun0028_ip = 97; continue _fun0028;
case 96:
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
case 97:
            var1 = undefined;
            return var1;
        }
    };
    var2['CONVERSATION_FETCH_START'] = var10;
    var10 = function handleConversationFetchSuccess(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var1 = arg1;
            var7 = var1.channelId;
            var6 = var1.conversationId;
            var5 = var1.messages;
            var4 = var1.messageReferences;
            var3 = var1.fullyHydrated;
            var9 = _closure1_slot24;
            var8 = 'preview';
            if(!var3) { _fun0029_ip = 45; continue _fun0029 }
case 6:
            var8 = 'full';
case 45:
            var1 = undefined;
            var8 = var9.bind(var1)(var6, var8);
            var2 = _closure1_slot26;
            var15 = undefined;
            var14 = var7;
            var13 = var6;
            var12 = var5;
            var11 = var3;
            var10 = var4;
            var2 = var15[var2](var14, var13, var12, var11, var10, var9);
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
case 119:
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
            if(!var1) { _fun0031_ip = 118; continue _fun0031 }
case 35:
            var2 = _closure1_slot18;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var6);
case 118:
            var2 = _closure1_slot18;
            var1 = var2.get;
            var2 = var1.bind(var2)(var6);
            var1 = null;
            if(!(var1 == var2)) { _fun0031_ip = 122; continue _fun0031 }
case 103:
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
case 122:
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
            var3 = arg1;
            var8 = var3.channelId;
            var2 = var3.rawConversations;
            var19 = var3.direction;
            var17 = var3.anchor;
            var1 = var3.isJump;
            var4 = var3.requestKey;
            var7 = var3.fullyHydrated;
            var6 = undefined;
            var _closure2_slot0 = var6;
            var3 = _closure1_slot23;
            var3 = var3.bind(var6)(var8, var4);
            if(var3) { _fun0032_ip = 5; continue _fun0032 }
case 74:
            var3 = false;
            return var3;
case 5:
            var4 = var2.map;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 15;
            var3 = var12[var3];
            var3 = var11.bind(var6)(var3);
            var3 = var3.mapConversation;
            var10 = var4.bind(var2)(var3);
            var4 = var10.filter;
            var3 = 16;
            var3 = var12[var3];
            var3 = var11.bind(var6)(var3);
            var3 = var3.isNotNullish;
            var12 = var4.bind(var10)(var3);
            var4 = _closure1_slot17;
            var3 = var4.peek;
            var10 = var3.bind(var4)(var8);
            var4 = null;
            var3 = var4 == var10;
            if(var1) { _fun0032_ip = 54; continue _fun0032 }
case 91:
            var11 = undefined;
            if(var3) { _fun0032_ip = 82; continue _fun0032 }
case 123:
            var11 = var10.conversations;
case 82:
            if(!(var4 == var11)) { _fun0032_ip = 20; continue _fun0032 }
case 124:
            var11 = new Array(0);
case 20:
            _fun0032_ip = 58; continue _fun0032;
case 54:
            var16 = undefined;
            if(var3) { _fun0032_ip = 125; continue _fun0032 }
case 126:
            var16 = var10.selectedConversationId;
case 125:
            var3 = var4 != var16;
            var14 = null;
            if(!var3) { _fun0032_ip = 85; continue _fun0032 }
case 127:
            var13 = var4 == var10;
            var3 = undefined;
            if(var13) { _fun0032_ip = 70; continue _fun0032 }
case 128:
            var15 = var10.conversationMetadataById;
            var13 = var15.get;
            var13 = var13.bind(var15)(var16);
            var15 = var4 == var13;
            var3 = undefined;
            if(var15) { _fun0032_ip = 70; continue _fun0032 }
case 129:
            var3 = var13.conversation;
case 70:
            var14 = var3;
case 85:
            if(!(var4 == var14)) { _fun0032_ip = 130; continue _fun0032 }
case 131:
            var3 = new Array(0);
            _fun0032_ip = 28; continue _fun0032;
case 130:
            var13 = new Array(1);
            var13[0] = var14;
            var3 = var13;
case 28:
            var11 = var3;
case 58:
            var15 = null;
            if(var1) { _fun0032_ip = 132; continue _fun0032 }
case 133:
            var3 = var4 == var10;
            var13 = undefined;
            if(var3) { _fun0032_ip = 134; continue _fun0032 }
case 135:
            var13 = var10.reachedOldest;
case 134:
            var14 = var4 != var13;
            var3 = null;
            if(!var14) { _fun0032_ip = 136; continue _fun0032 }
case 137:
            var3 = var13;
case 136:
            var15 = var3;
case 132:
            var16 = null;
            if(var1) { _fun0032_ip = 138; continue _fun0032 }
case 139:
            var1 = var4 == var10;
            var3 = undefined;
            if(var1) { _fun0032_ip = 12; continue _fun0032 }
case 90:
            var3 = var10.reachedNewest;
case 12:
            var13 = var4 != var3;
            var1 = null;
            if(!var13) { _fun0032_ip = 73; continue _fun0032 }
case 140:
            var1 = var3;
case 73:
            var16 = var1;
case 138:
            var1 = global;
            var14 = var1.Set;
            var13 = var11.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var24 = var13.bind(var11)(var3);
            var13 = var14.prototype;
            var13 = Object.create(var13, {constructor: {value: var14}});
            var25 = var13;
            var3 = new var25[var14](var24, var23);
            var3 = var3 instanceof Object ? var3 : var13;
            _closure2_slot0 = var3;
            var13 = var12.some;
            var3 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var3 = var13.bind(var12)(var3);
            if(var3) { _fun0032_ip = 141; continue _fun0032 }
case 142:
            var3 = var4 == var17;
case 141:
            var14 = var15;
            var13 = var16;
            if(var3) { _fun0032_ip = 143; continue _fun0032 }
case 144:
            var3 = 'before';
            if(!(var3 !== var19)) { _fun0032_ip = 145; continue _fun0032 }
case 146:
            var18 = 'after';
            var3 = var16;
            if(!(var18 === var19)) { _fun0032_ip = 147; continue _fun0032 }
case 148:
            var20 = var1.Date;
            var18 = var20.now;
            var3 = var18.bind(var20)();
case 147:
            _fun0032_ip = 149; continue _fun0032;
case 145:
            var20 = var1.Date;
            var18 = var20.now;
            var15 = var18.bind(var20)();
            var3 = var16;
case 149:
            var14 = var15;
            var13 = var3;
case 143:
            var3 = 'before';
            var15 = var3 === var19;
            var3 = var15;
            if(!var3) { _fun0032_ip = 150; continue _fun0032 }
case 151:
            var3 = var4 == var17;
case 150:
            if(!var3) { _fun0032_ip = 152; continue _fun0032 }
case 153:
            var16 = var1.Date;
            var3 = var16.now;
            var13 = var3.bind(var16)();
case 152:
            var3 = function mergeConversations(arg1, arg2) {
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
                    if(var3) { _fun0033_ip = 154; continue _fun0033 }
case 155:
                    var9 = var5.value;
                    var8 = var4.set;
                    var3 = var9.id;
                    var3 = var8.bind(var4)(var3, var9);
                    var8 = var7.bind(var6)();
                    var3 = var8.done;
                    var5 = var8;
                    if(!var3) { _fun0033_ip = 155; continue _fun0033 }
case 154:
                    var3 = _closure1_slot21;
                    var2 = arg2;
                    var5 = var3.bind(var6)(var2);
                    var3 = var5.bind(var6)();
                    var2 = var3.done;
                    if(var2) { _fun0033_ip = 156; continue _fun0033 }
case 157:
                    var8 = var3.value;
                    var7 = var4.set;
                    var2 = var8.id;
                    var2 = var7.bind(var4)(var2, var8);
                    var7 = var5.bind(var6)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0033_ip = 157; continue _fun0033 }
case 156:
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
            var16 = var3.bind(var6)(var11, var12);
            var20 = var16.length;
            var18 = _closure1_slot16;
            var12 = var16;
            var11 = var14;
            var3 = var13;
            if(!(var20 > var18)) { _fun0032_ip = 158; continue _fun0032 }
case 159:
            var18 = 'after';
            if(!(var18 !== var19)) { _fun0032_ip = 160; continue _fun0032 }
case 161:
            if(var15) { _fun0032_ip = 162; continue _fun0032 }
case 163:
            var15 = function clampAnchorWindowStart(arg1, arg2) {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                    var3 = arg1;
                    var4 = arg2;
                    var _closure3_slot0 = var4;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0034_ip = 164; continue _fun0034 }
case 165:
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
case 107:
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
case 164:
                    var1 = 0;
                    return var1;
                }
            };
            var20 = var15.bind(var6)(var16, var17);
            var15 = 0;
            var17 = var14;
            if(!(var20 > var15)) { _fun0032_ip = 166; continue _fun0032 }
case 167:
            var17 = null;
case 166:
            var15 = _closure1_slot16;
            var19 = var20 + var15;
            var18 = var16.length;
            var15 = var13;
            if(!(var19 < var18)) { _fun0032_ip = 168; continue _fun0032 }
case 169:
            var15 = null;
case 168:
            var19 = var16.slice;
            var18 = _closure1_slot16;
            var18 = var20 + var18;
            var12 = var19.bind(var16)(var20, var18);
            var3 = var15;
            var11 = var17;
            _fun0032_ip = 158; continue _fun0032;
case 162:
            var18 = var16.slice;
            var17 = _closure1_slot16;
            var15 = 0;
            var12 = var18.bind(var16)(var15, var17);
            var11 = var14;
            var3 = null;
            _fun0032_ip = 158; continue _fun0032;
case 160:
            var15 = var16.slice;
            var17 = var16.length;
            var14 = _closure1_slot16;
            var14 = var17 - var14;
            var12 = var15.bind(var16)(var14);
            var11 = null;
            var3 = var13;
case 158:
            var9 = function buildChannelData(arg1, arg2, arg3) {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    var10 = arg2;
                    var6 = arg3;
                    var4 = null;
                    var2 = var4 == var6;
                    var5 = undefined;
                    var1 = undefined;
                    if(var2) { _fun0035_ip = 44; continue _fun0035 }
case 170:
                    var1 = var6.guildId;
case 44:
                    if(!(var4 == var1)) { _fun0035_ip = 171; continue _fun0035 }
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
case 171:
                    if(!(var4 == var1)) { _fun0035_ip = 51; continue _fun0035 }
case 155:
                    var7 = _closure1_slot9;
                    var3 = var7.getChannel;
                    var2 = arg1;
                    var3 = var3.bind(var7)(var2);
                    var7 = var4 == var3;
                    var2 = undefined;
                    if(var7) { _fun0035_ip = 172; continue _fun0035 }
case 13:
                    var2 = var3.guild_id;
case 172:
                    var1 = var2;
case 51:
                    var2 = var4 != var1;
                    var11 = null;
                    if(!var2) { _fun0035_ip = 53; continue _fun0035 }
case 173:
                    var11 = var1;
case 53:
                    var28 = global;
                    var1 = var28.Map;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {constructor: {value: var1}});
                    var51 = var2;
                    var1 = new var51[var1](var50);
                    var9 = var1 instanceof Object ? var1 : var2;
                    var1 = var28.Map;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {constructor: {value: var1}});
                    var51 = var2;
                    var1 = new var51[var1](var50);
                    var8 = var1 instanceof Object ? var1 : var2;
                    var2 = var4 == var6;
                    var1 = undefined;
                    if(var2) { _fun0035_ip = 124; continue _fun0035 }
case 21:
                    var1 = var6.colorIndex;
case 124:
                    var3 = var4 != var1;
                    var2 = 0;
                    if(!var3) { _fun0035_ip = 23; continue _fun0035 }
case 174:
                    var2 = var1;
case 23:
                    var1 = _closure1_slot21;
                    var27 = var1.bind(var5)(var10);
                    var7 = var27.bind(var5)();
                    var1 = var7.done;
                    var25 = var2;
                    var26 = var7;
                    var24 = undefined;
                    var23 = undefined;
                    var22 = undefined;
                    var21 = undefined;
                    var20 = undefined;
                    var19 = undefined;
                    var18 = undefined;
                    var17 = undefined;
                    var16 = undefined;
                    var15 = undefined;
                    var14 = undefined;
                    var13 = undefined;
                    var7 = undefined;
                    var2 = var25;
                    if(var1) { _fun0035_ip = 175; continue _fun0035 }
case 22:
                    var38 = var26.value;
                    var1 = var4 == var6;
                    var30 = undefined;
                    if(var1) { _fun0035_ip = 176; continue _fun0035 }
case 177:
                    var31 = var6.conversationMetadataById;
                    var29 = var31.get;
                    var1 = var38.id;
                    var30 = var29.bind(var31)(var1);
case 176:
                    var1 = var4 == var30;
                    var34 = undefined;
                    if(var1) { _fun0035_ip = 178; continue _fun0035 }
case 179:
                    var34 = var30.color;
case 178:
                    var29 = var25;
                    if(!(var4 == var34)) { _fun0035_ip = 180; continue _fun0035 }
case 181:
                    var32 = _closure1_slot14;
                    var33 = parseFloat(var25);
                    var29 = var33 + 1;
                    var1 = var32.length;
                    var1 = var33 % var1;
                    var34 = var32[var1];
case 180:
                    var31 = var4 == var30;
                    var1 = undefined;
                    if(var31) { _fun0035_ip = 10; continue _fun0035 }
case 182:
                    var1 = var30.hydratedMessages;
case 10:
                    var31 = var4 != var1;
                    var33 = null;
                    if(!var31) { _fun0035_ip = 183; continue _fun0035 }
case 184:
                    var33 = var1;
case 183:
                    var32 = var4 != var33;
                    if(!var32) { _fun0035_ip = 185; continue _fun0035 }
case 186:
                    var1 = var4 == var30;
                    if(var1) { _fun0035_ip = 187; continue _fun0035 }
case 188:
                    var30 = var30.fullyHydrated;
                    var1 = !var30;
case 187:
                    var32 = !var1;
case 185:
                    var31 = var9.set;
                    var30 = var38.id;
                    var1 = {};
                    var1['conversation'] = var38;
                    var1['color'] = var34;
                    var1['hydratedMessages'] = var33;
                    var1['fullyHydrated'] = var32;
                    var1 = var31.bind(var9)(var30, var1);
                    var1 = var38.moderation;
                    var1 = var4 != var1;
                    var37 = null;
                    var31 = var22;
                    var30 = var21;
                    if(!var1) { _fun0035_ip = 189; continue _fun0035 }
case 190:
                    var1 = var28.Map;
                    var32 = var1.prototype;
                    var32 = Object.create(var32, {constructor: {value: var1}});
                    var51 = var32;
                    var1 = new var51[var1](var50);
                    var34 = var1 instanceof Object ? var1 : var32;
                    var32 = _closure1_slot21;
                    var1 = var38.moderation;
                    var1 = var1.flaggedMessageDetails;
                    var33 = var32.bind(var5)(var1);
                    var35 = var33.bind(var5)();
                    var1 = var35.done;
                    var32 = var35;
                    var37 = var34;
                    var24 = var32;
                    var23 = var33;
                    var31 = var22;
                    var30 = var21;
                    if(var1) { _fun0035_ip = 189; continue _fun0035 }
case 191:
                    var36 = var32.value;
                    var35 = var34.get;
                    var1 = var36.messageId;
                    var35 = var35.bind(var34)(var1);
                    if(!(var4 == var35)) { _fun0035_ip = 192; continue _fun0035 }
case 193:
                    var40 = var34.set;
                    var39 = var36.messageId;
                    var1 = new Array(1);
                    var1[0] = var36;
                    var1 = var40.bind(var34)(var39, var1);
                    _fun0035_ip = 194; continue _fun0035;
case 192:
                    var1 = var35.push;
                    var1 = var1.bind(var35)(var36);
case 194:
                    var39 = var33.bind(var5)();
                    var1 = var39.done;
                    var32 = var39;
                    var37 = var34;
                    var24 = var32;
                    var23 = var33;
                    var31 = var36;
                    var30 = var35;
                    if(!var1) { _fun0035_ip = 191; continue _fun0035 }
case 189:
                    var32 = _closure1_slot21;
                    var1 = var38.messageIds;
                    var36 = var32.bind(var5)(var1);
                    var32 = var36.bind(var5)();
                    var1 = var32.done;
                    var35 = var32;
                    var34 = var18;
                    var33 = var17;
                    var32 = var7;
                    var18 = var34;
                    var17 = var33;
                    var7 = var32;
                    if(var1) { _fun0035_ip = 195; continue _fun0035 }
case 196:
                    var43 = var35.value;
                    var1 = var4 == var6;
                    var42 = undefined;
                    if(var1) { _fun0035_ip = 197; continue _fun0035 }
case 198:
                    var39 = var6.messageMetadataByMessageId;
                    var1 = var39.get;
                    var42 = var1.bind(var39)(var43);
case 197:
                    var39 = var4 == var42;
                    var1 = undefined;
                    if(var39) { _fun0035_ip = 199; continue _fun0035 }
case 200:
                    var1 = var42.moderationLabel;
case 199:
                    var1 = var4 == var1;
                    if(!var1) { _fun0035_ip = 201; continue _fun0035 }
case 202:
                    var39 = var38.moderation;
                    var1 = var4 != var39;
case 201:
                    if(!var1) { _fun0035_ip = 203; continue _fun0035 }
case 204:
                    var39 = var38.moderation;
                    var40 = var39.flaggedMessageIds;
                    var39 = var40.includes;
                    var1 = var39.bind(var40)(var43);
case 203:
                    if(!var1) { _fun0035_ip = 205; continue _fun0035 }
case 206:
                    var1 = var4 != var37;
case 205:
                    var41 = null;
                    if(!var1) { _fun0035_ip = 207; continue _fun0035 }
case 208:
                    var40 = _closure1_slot25;
                    var1 = var37.get;
                    var39 = var1.bind(var37)(var43);
                    var1 = var39;
                    if(!(var4 == var39)) { _fun0035_ip = 209; continue _fun0035 }
case 210:
                    var1 = new Array(0);
case 209:
                    var41 = var40.bind(var5)(var1);
                    var33 = var39;
case 207:
                    var39 = var8.set;
                    var1 = {};
                    var40 = var38.id;
                    var1['conversationId'] = var40;
                    var40 = var4 == var42;
                    var44 = var33;
                    var47 = undefined;
                    if(var40) { _fun0035_ip = 211; continue _fun0035 }
case 212:
                    var47 = var42.moderationLabel;
case 211:
                    var40 = var41;
                    if(!(var4 != var47)) { _fun0035_ip = 213; continue _fun0035 }
case 214:
                    var40 = var47;
case 213:
                    var1['moderationLabel'] = var40;
                    var40 = var4 == var42;
                    var46 = undefined;
                    if(var40) { _fun0035_ip = 215; continue _fun0035 }
case 216:
                    var46 = var42.message;
case 215:
                    var45 = var4 != var46;
                    var40 = null;
                    if(!var45) { _fun0035_ip = 217; continue _fun0035 }
case 218:
                    var40 = var46;
case 217:
                    var1['message'] = var40;
                    var1 = var39.bind(var8)(var43, var1);
                    var1 = var4 == var42;
                    var40 = undefined;
                    if(var1) { _fun0035_ip = 219; continue _fun0035 }
case 220:
                    var1 = var42.message;
                    var39 = var4 == var1;
                    var34 = var1;
                    var40 = undefined;
                    if(var39) { _fun0035_ip = 219; continue _fun0035 }
case 221:
                    var39 = var1.messageReference;
                    var1 = var4 == var39;
                    var34 = var39;
                    var40 = undefined;
                    if(var1) { _fun0035_ip = 219; continue _fun0035 }
case 222:
                    var40 = var39.message_id;
                    var34 = var39;
case 219:
                    var45 = var34;
                    if(!(var4 != var40)) { _fun0035_ip = 223; continue _fun0035 }
case 224:
                    var39 = var4 == var6;
                    var1 = undefined;
                    if(var39) { _fun0035_ip = 225; continue _fun0035 }
case 226:
                    var48 = var6.messageMetadataByMessageId;
                    var39 = var48.get;
                    var1 = var39.bind(var48)(var40);
case 225:
                    var48 = var4 == var1;
                    var39 = undefined;
                    if(var48) { _fun0035_ip = 227; continue _fun0035 }
case 228:
                    var39 = var1.message;
case 227:
                    var39 = var4 == var39;
                    if(var39) { _fun0035_ip = 229; continue _fun0035 }
case 230:
                    var48 = var8.has;
                    var39 = var48.bind(var8)(var40);
case 229:
                    var32 = var1;
                    if(var39) { _fun0035_ip = 223; continue _fun0035 }
case 231:
                    var39 = var8.set;
                    var39 = var39.bind(var8)(var40, var1);
                    var32 = var1;
case 223:
                    var48 = var36.bind(var5)();
                    var1 = var48.done;
                    var35 = var48;
                    var34 = var45;
                    var33 = var44;
                    var20 = var47;
                    var19 = var46;
                    var18 = var34;
                    var17 = var33;
                    var16 = var43;
                    var15 = var42;
                    var14 = var41;
                    var13 = var40;
                    var7 = var32;
                    if(!var1) { _fun0035_ip = 196; continue _fun0035 }
case 195:
                    var32 = var27.bind(var5)();
                    var1 = var32.done;
                    var26 = var32;
                    var25 = var29;
                    var22 = var31;
                    var21 = var30;
                    var2 = var25;
                    if(!var1) { _fun0035_ip = 22; continue _fun0035 }
case 175:
                    var1 = var4 == var6;
                    var7 = undefined;
                    if(var1) { _fun0035_ip = 232; continue _fun0035 }
case 233:
                    var7 = var6.recentFeedbackRatingsByConversationId;
case 232:
                    if(!(var4 == var7)) { _fun0035_ip = 234; continue _fun0035 }
case 235:
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
                    var51 = var3;
                    var50 = var1;
                    var1 = new var51[var13](var50, var49);
                    var7 = var1 instanceof Object ? var1 : var3;
case 234:
                    var1 = var4 == var6;
                    var3 = undefined;
                    if(var1) { _fun0035_ip = 236; continue _fun0035 }
case 237:
                    var3 = var6.selectedConversationId;
case 236:
                    var13 = var4 != var3;
                    var1 = null;
                    if(!var13) { _fun0035_ip = 238; continue _fun0035 }
case 239:
                    var1 = var3;
case 238:
                    var _closure3_slot0 = var1;
                    var13 = var4 != var1;
                    var3 = null;
                    if(!var13) { _fun0035_ip = 240; continue _fun0035 }
case 241:
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
                    if(!var12) { _fun0035_ip = 240; continue _fun0035 }
case 242:
                    var3 = var1;
case 240:
                    var1 = {};
                    var1['guildId'] = var11;
                    var1['conversations'] = var10;
                    var1['conversationMetadataById'] = var9;
                    var1['messageMetadataByMessageId'] = var8;
                    var1['recentFeedbackRatingsByConversationId'] = var7;
                    var7 = var4 == var6;
                    var8 = undefined;
                    if(var7) { _fun0035_ip = 243; continue _fun0035 }
case 244:
                    var8 = var6.reachedOldest;
case 243:
                    var9 = var4 != var8;
                    var7 = null;
                    if(!var9) { _fun0035_ip = 245; continue _fun0035 }
case 246:
                    var7 = var8;
case 245:
                    var1['reachedOldest'] = var7;
                    var7 = var4 == var6;
                    var5 = undefined;
                    if(var7) { _fun0035_ip = 247; continue _fun0035 }
case 248:
                    var5 = var6.reachedNewest;
case 247:
                    var6 = var4 != var5;
                    var4 = null;
                    if(!var6) { _fun0035_ip = 249; continue _fun0035 }
case 250:
                    var4 = var5;
case 249:
                    var1['reachedNewest'] = var4;
                    var1['selectedConversationId'] = var3;
                    var1['colorIndex'] = var2;
                    return var1;
                }
            };
            var9 = var9.bind(var6)(var8, var12, var10);
            var9['reachedOldest'] = var11;
            var9['reachedNewest'] = var3;
            if(!(var4 == var10)) { _fun0032_ip = 251; continue _fun0032 }
case 252:
            var11 = _closure1_slot17;
            var3 = var11.set;
            var3 = var3.bind(var11)(var8, var9);
            _fun0032_ip = 253; continue _fun0032;
case 251:
            var3 = var1.Object;
            var1 = var3.assign;
            var1 = var1.bind(var3)(var10, var9);
case 253:
            var1 = _closure1_slot21;
            var3 = var1.bind(var6)(var2);
            var2 = var3.bind(var6)();
            var1 = var2.done;
            if(var1) { _fun0032_ip = 254; continue _fun0032 }
case 255:
            var1 = var2.value;
            var9 = var1.messages;
            if(!(var4 != var9)) { _fun0032_ip = 256; continue _fun0032 }
case 257:
            var10 = _closure1_slot26;
            var23 = var1.id;
            var22 = var1.messages;
            var25 = undefined;
            var24 = var8;
            var21 = var7;
            var1 = var25[var10](var24, var23, var22, var21, var20);
case 256:
            var9 = var3.bind(var6)();
            var1 = var9.done;
            var2 = var9;
            if(!var1) { _fun0032_ip = 255; continue _fun0032 }
case 254:
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
            if(!var1) { _fun0036_ip = 104; continue _fun0036 }
case 258:
            var4 = _closure1_slot17;
            var2 = var4.has;
            var1 = var2.bind(var4)(var3);
case 104:
            if(!var1) { _fun0036_ip = 109; continue _fun0036 }
case 259:
            var2 = _closure1_slot17;
            var1 = var2.get;
            var1 = var1.bind(var2)(var3);
case 109:
            var1 = false;
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var10;
    var10 = function handleChannelDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var3 = _closure1_slot29;
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
            if(!var1) { _fun0037_ip = 104; continue _fun0037 }
case 61:
            var2 = var10.unavailable;
            var1 = true;
            if(!(var1 !== var2)) { _fun0037_ip = 260; continue _fun0037 }
case 104:
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
            if(var2) { _fun0037_ip = 91; continue _fun0037 }
case 261:
            var12 = var4.value;
            var11 = _closure1_slot17;
            var2 = var11.peek;
            var2 = var2.bind(var11)(var12);
            var13 = var5 == var2;
            var11 = undefined;
            if(var13) { _fun0037_ip = 262; continue _fun0037 }
case 95:
            var11 = var2.guildId;
case 262:
            var2 = var10.id;
            var2 = var11 === var2;
            if(!var2) { _fun0037_ip = 263; continue _fun0037 }
case 264:
            var11 = _closure1_slot29;
            var2 = var11.bind(var8)(var12);
case 263:
            if(!var2) { _fun0037_ip = 93; continue _fun0037 }
case 265:
            var3 = true;
case 93:
            var12 = var7.bind(var8)();
            var2 = var12.done;
            var4 = var12;
            var1 = var3;
            if(!var2) { _fun0037_ip = 261; continue _fun0037 }
case 91:
            return var1;
case 260:
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
            var1 = var1.jump;
            var3 = null;
            if(!(var3 != var1)) { _fun0038_ip = 49; continue _fun0038 }
case 33:
            var5 = _closure1_slot11;
            var2 = var5.getChannelId;
            var2 = var2.bind(var5)();
            if(!(var2 === var4)) { _fun0038_ip = 49; continue _fun0038 }
case 106:
            var2 = _closure1_slot17;
            var1 = var2.peek;
            var2 = var1.bind(var2)(var4);
            var1 = var3 != var2;
            if(!var1) { _fun0038_ip = 117; continue _fun0038 }
case 103:
            var2['reachedOldest'] = var3;
            var2['reachedNewest'] = var3;
            var1 = true;
case 117:
            return var1;
case 49:
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
            if(!var1) { _fun0039_ip = 171; continue _fun0039 }
case 39:
            var2['selectedConversationId'] = var3;
            var1 = true;
case 171:
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
            if(!(var2 != var3)) { _fun0040_ip = 102; continue _fun0040 }
case 110:
            var5 = var3.selectedConversationId;
            var1 = var2 != var5;
            if(!var1) { _fun0040_ip = 116; continue _fun0040 }
case 42:
            var4 = var2 == var6;
            if(var4) { _fun0040_ip = 266; continue _fun0040 }
case 46:
            var4 = var5 === var6;
case 266:
            var1 = var4;
case 116:
            if(!var1) { _fun0040_ip = 267; continue _fun0040 }
case 74:
            var3['selectedConversationId'] = var2;
            var1 = true;
case 267:
            return var1;
case 102:
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
            if(!var1) { _fun0041_ip = 100; continue _fun0041 }
case 111:
            var3 = var2.recentFeedbackRatingsByConversationId;
            var2 = var3.set;
            var2 = var2.bind(var3)(var5, var4);
            var1 = true;
case 100:
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
            if(!(var5 != var6)) { _fun0042_ip = 268; continue _fun0042 }
case 37:
            if(!(var5 != var10)) { _fun0042_ip = 268; continue _fun0042 }
case 118:
            var4 = _closure1_slot17;
            var3 = var4.peek;
            var8 = var3.bind(var4)(var6);
            var3 = var5 == var8;
            var4 = undefined;
            var7 = undefined;
            if(var3) { _fun0042_ip = 48; continue _fun0042 }
case 98:
            var6 = var8.messageMetadataByMessageId;
            var3 = var6.get;
            var7 = var3.bind(var6)(var10);
case 48:
            var6 = var5 == var7;
            var3 = undefined;
            if(var6) { _fun0042_ip = 114; continue _fun0042 }
case 51:
            var3 = var7.message;
case 114:
            if(!(var5 != var3)) { _fun0042_ip = 177; continue _fun0042 }
case 53:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 14;
            var1 = var6[var1];
            var6 = var3.bind(var4)(var1);
            var3 = var6.updateMessageRecord;
            var1 = var7.message;
            var3 = var3.bind(var6)(var1, var9);
            var7['message'] = var3;
            var1 = var7.conversationId;
            var6 = var5 != var1;
            var1 = null;
            if(!var6) { _fun0042_ip = 269; continue _fun0042 }
case 270:
            var9 = var5 == var8;
            var6 = undefined;
            if(var9) { _fun0042_ip = 24; continue _fun0042 }
case 271:
            var9 = var8.conversationMetadataById;
            var8 = var9.get;
            var7 = var7.conversationId;
            var6 = var8.bind(var9)(var7);
case 24:
            var1 = var6;
case 269:
            var6 = var5 == var1;
            var4 = undefined;
            if(var6) { _fun0042_ip = 272; continue _fun0042 }
case 273:
            var4 = var1.hydratedMessages;
case 272:
            if(!(var5 != var4)) { _fun0042_ip = 66; continue _fun0042 }
case 274:
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
            if(!(var4 !== var2)) { _fun0042_ip = 66; continue _fun0042 }
case 22:
            var1 = var1.hydratedMessages;
            var1[var2] = var3;
case 66:
            var1 = true;
            return var1;
case 177:
            var1 = false;
            return var1;
case 268:
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
            var6 = var1.messageId;
            var _closure2_slot0 = var6;
            var9 = var1.reactions;
            var4 = _closure1_slot17;
            var3 = var4.peek;
            var7 = var3.bind(var4)(var5);
            var5 = null;
            if(!(var5 != var7)) { _fun0043_ip = 275; continue _fun0043 }
case 47:
            var4 = var7.messageMetadataByMessageId;
            var3 = var4.get;
            var6 = var3.bind(var4)(var6);
            var8 = var5 == var6;
            var3 = undefined;
            if(var8) { _fun0043_ip = 261; continue _fun0043 }
case 117:
            var3 = var6.message;
case 261:
            if(!(var5 != var3)) { _fun0043_ip = 276; continue _fun0043 }
case 277:
            var8 = var6.message;
            var3 = var8.addReactionBatch;
            var10 = _closure1_slot8;
            var1 = var10.getId;
            var1 = var1.bind(var10)();
            var3 = var3.bind(var8)(var9, var1);
            var6['message'] = var3;
            var1 = var6.conversationId;
            var8 = var5 != var1;
            var1 = null;
            if(!var8) { _fun0043_ip = 18; continue _fun0043 }
case 80:
            var8 = var7.conversationMetadataById;
            var7 = var8.get;
            var6 = var6.conversationId;
            var1 = var7.bind(var8)(var6);
case 18:
            var6 = var5 == var1;
            var4 = undefined;
            if(var6) { _fun0043_ip = 278; continue _fun0043 }
case 279:
            var4 = var1.hydratedMessages;
case 278:
            if(!(var5 != var4)) { _fun0043_ip = 280; continue _fun0043 }
case 281:
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
            if(!(var4 !== var2)) { _fun0043_ip = 280; continue _fun0043 }
case 282:
            var1 = var1.hydratedMessages;
            var1[var2] = var3;
case 280:
            var1 = true;
            return var1;
case 276:
            var1 = false;
            return var1;
case 275:
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
            var7 = var1.bind(var3)(var5);
            var5 = null;
            if(!(var5 != var7)) { _fun0044_ip = 283; continue _fun0044 }
case 6:
            var3 = var7.messageMetadataByMessageId;
            var1 = var3.get;
            var6 = var1.bind(var3)(var4);
            var3 = var5 == var6;
            var1 = undefined;
            if(var3) { _fun0044_ip = 267; continue _fun0044 }
case 284:
            var1 = var6.message;
case 267:
            if(!(var5 != var1)) { _fun0044_ip = 285; continue _fun0044 }
case 286:
            var9 = var6.message;
            var8 = var9.set;
            var3 = 'reactions';
            var1 = new Array(0);
            var3 = var8.bind(var9)(var3, var1);
            var6['message'] = var3;
            var1 = var6.conversationId;
            var8 = var5 != var1;
            var1 = null;
            if(!var8) { _fun0044_ip = 287; continue _fun0044 }
case 264:
            var8 = var7.conversationMetadataById;
            var7 = var8.get;
            var6 = var6.conversationId;
            var1 = var7.bind(var8)(var6);
case 287:
            var6 = var5 == var1;
            var4 = undefined;
            if(var6) { _fun0044_ip = 123; continue _fun0044 }
case 288:
            var4 = var1.hydratedMessages;
case 123:
            if(!(var5 != var4)) { _fun0044_ip = 289; continue _fun0044 }
case 21:
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
            if(!(var4 !== var2)) { _fun0044_ip = 289; continue _fun0044 }
case 127:
            var1 = var1.hydratedMessages;
            var1[var2] = var3;
case 289:
            var1 = true;
            return var1;
case 285:
            var1 = false;
            return var1;
case 283:
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
            var7 = var1.bind(var3)(var5);
            var5 = null;
            if(!(var5 != var7)) { _fun0045_ip = 274; continue _fun0045 }
case 47:
            var3 = var7.messageMetadataByMessageId;
            var1 = var3.get;
            var6 = var1.bind(var3)(var4);
            var3 = var5 == var6;
            var1 = undefined;
            if(var3) { _fun0045_ip = 261; continue _fun0045 }
case 117:
            var1 = var6.message;
case 261:
            if(!(var5 != var1)) { _fun0045_ip = 272; continue _fun0045 }
case 277:
            var3 = var6.message;
            var1 = var3.removeReactionsForEmoji;
            var3 = var1.bind(var3)(var8);
            var6['message'] = var3;
            var1 = var6.conversationId;
            var8 = var5 != var1;
            var1 = null;
            if(!var8) { _fun0045_ip = 290; continue _fun0045 }
case 291:
            var8 = var7.conversationMetadataById;
            var7 = var8.get;
            var6 = var6.conversationId;
            var1 = var7.bind(var8)(var6);
case 290:
            var6 = var5 == var1;
            var4 = undefined;
            if(var6) { _fun0045_ip = 18; continue _fun0045 }
case 292:
            var4 = var1.hydratedMessages;
case 18:
            if(!(var5 != var4)) { _fun0045_ip = 293; continue _fun0045 }
case 294:
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
            if(!(var4 !== var2)) { _fun0045_ip = 293; continue _fun0045 }
case 295:
            var1 = var1.hydratedMessages;
            var1[var2] = var3;
case 293:
            var1 = true;
            return var1;
case 272:
            var1 = false;
            return var1;
case 274:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_REMOVE_EMOJI'] = var9;
    var9 = function handleMessageDelete(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var3 = var1.id;
        var2 = _closure1_slot27;
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
            if(var2) { _fun0046_ip = 48; continue _fun0046 }
case 111:
            var10 = _closure1_slot27;
            var2 = var4.value;
            var2 = var10.bind(var7)(var9, var2);
            if(!var2) { _fun0046_ip = 34; continue _fun0046 }
case 116:
            var3 = true;
case 34:
            var11 = var6.bind(var7)();
            var2 = var11.done;
            var4 = var11;
            var1 = var3;
            if(!var2) { _fun0046_ip = 111; continue _fun0046 }
case 48:
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
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/ConversationsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();