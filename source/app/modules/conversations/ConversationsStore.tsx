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
    var1 = function replaceHydratedMessage(arg1, arg2, arg3, arg4) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg2;
            var5 = arg4;
            var3 = arg3;
            var _closure2_slot0 = var3;
            var1['message'] = var5;
            var3 = var1.conversationId;
            var6 = null;
            var4 = var6 != var3;
            var3 = null;
            if(!var4) { _fun0010_ip = 73; continue _fun0010 }
case 74:
            var4 = arg1;
            var7 = var4.conversationMetadataById;
            var4 = var7.get;
            var1 = var1.conversationId;
            var3 = var4.bind(var7)(var1);
case 73:
            var7 = var6 == var3;
            var1 = undefined;
            var4 = undefined;
            if(var7) { _fun0010_ip = 75; continue _fun0010 }
case 4:
            var4 = var3.hydratedMessages;
case 75:
            if(!(var6 != var4)) { _fun0010_ip = 76; continue _fun0010 }
case 77:
            var6 = var3.hydratedMessages;
            var4 = var6.findIndex;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var4.bind(var6)(var2);
            var2 = -1;
            if(!(var2 !== var4)) { _fun0010_ip = 76; continue _fun0010 }
case 78:
            var6 = var3.hydratedMessages;
            var2 = var6.slice;
            var2 = var2.bind(var6)();
            var2[var4] = var5;
            var3['hydratedMessages'] = var2;
case 76:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var9 = function handleReaction(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var7 = arg1;
            var8 = var7.type;
            var4 = var7.channelId;
            var6 = var7.messageId;
            var9 = var7.userId;
            var12 = var7.emoji;
            var11 = var7.reactionType;
            var3 = _closure1_slot17;
            var2 = var3.peek;
            var5 = var2.bind(var3)(var4);
            var10 = null;
            if(!(var10 != var5)) { _fun0011_ip = 27; continue _fun0011 }
case 79:
            var3 = var5.messageMetadataByMessageId;
            var2 = var3.get;
            var4 = var2.bind(var3)(var6);
            var13 = var10 == var4;
            var3 = undefined;
            var2 = undefined;
            if(var13) { _fun0011_ip = 51; continue _fun0011 }
case 80:
            var2 = var4.message;
case 51:
            if(!(var10 != var2)) { _fun0011_ip = 56; continue _fun0011 }
case 81:
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 17;
            var2 = var13[var2];
            var10 = var10.bind(var3)(var2);
            var2 = var10.shouldApplyReaction;
            var2 = var2.bind(var10)(var7);
            if(var2) { _fun0011_ip = 82; continue _fun0011 }
case 52:
            var2 = false;
            return var2;
case 82:
            var10 = _closure1_slot8;
            var2 = var10.getId;
            var2 = var2.bind(var10)();
            var10 = var2 === var9;
            var2 = 'MESSAGE_REACTION_ADD';
            if(!(var2 !== var8)) { _fun0011_ip = 83; continue _fun0011 }
case 84:
            var8 = var4.message;
            var2 = var8.removeReaction;
            var2 = var2.bind(var8)(var12, var10, var11);
            _fun0011_ip = 85; continue _fun0011;
case 83:
            var9 = var4.message;
            var8 = var9.addReaction;
            var15 = var7.colors;
            var18 = var9;
            var17 = var12;
            var16 = var10;
            var14 = var11;
            var2 = var18[var8](var17, var16, var15, var14, var13);
case 85:
            var1 = _closure1_slot27;
            var18 = undefined;
            var17 = var5;
            var16 = var4;
            var15 = var6;
            var14 = var2;
            var1 = var18[var1](var17, var16, var15, var14, var13);
            var1 = true;
            return var1;
case 56:
            var1 = false;
            return var1;
case 27:
            var1 = false;
            return var1;
        }
    };
    var1 = function removeHydratedMessage(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var3 = arg2;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot17;
            var4 = var5.peek;
            var1 = arg1;
            var1 = var4.bind(var5)(var1);
            var6 = null;
            if(!(var6 != var1)) { _fun0012_ip = 86; continue _fun0012 }
case 87:
            var5 = var1.messageMetadataByMessageId;
            var4 = var5.get;
            var5 = var4.bind(var5)(var3);
            if(!(var6 != var5)) { _fun0012_ip = 88; continue _fun0012 }
case 89:
            var4 = var5.conversationId;
            var7 = var6 != var4;
            var4 = null;
            if(!var7) { _fun0012_ip = 15; continue _fun0012 }
case 4:
            var8 = var1.conversationMetadataById;
            var7 = var8.get;
            var5 = var5.conversationId;
            var4 = var7.bind(var8)(var5);
case 15:
            var7 = var6 == var4;
            var5 = undefined;
            if(var7) { _fun0012_ip = 90; continue _fun0012 }
case 91:
            var5 = var4.hydratedMessages;
case 90:
            if(!(var6 != var5)) { _fun0012_ip = 88; continue _fun0012 }
case 92:
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
case 88:
            var2 = var1.messageMetadataByMessageId;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            return var1;
case 86:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var10 = function cleanupChannelSideState(arg1) {
        var3 = _closure1_slot18;
        var2 = var3.delete;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot29 = var10;
    var1 = function evictChannel(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot17;
            var1 = var3.has;
            var1 = var1.bind(var3)(var4);
            var5 = _closure1_slot17;
            var3 = var5.del;
            var3 = var3.bind(var5)(var4);
            var3 = _closure1_slot29;
            var2 = undefined;
            var2 = var3.bind(var2)(var4);
            if(var1) { _fun0013_ip = 47; continue _fun0013 }
case 9:
            var1 = var2;
case 47:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
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
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
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
                if(var1) { _fun0014_ip = 93; continue _fun0014 }
case 42:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0014_ip = 91; continue _fun0014;
case 93:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 91:
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
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = var3.peek;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                if(var3) { _fun0015_ip = 94; continue _fun0015 }
case 7:
                var1 = var2.conversations;
case 94:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getConversationForMessage';
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
                if(var4) { _fun0016_ip = 95; continue _fun0016 }
case 40:
                var6 = var3.messageMetadataByMessageId;
                var4 = var6.get;
                var3 = arg2;
                var3 = var4.bind(var6)(var3);
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0016_ip = 95; continue _fun0016 }
case 96:
                var2 = var3.conversationId;
case 95:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0016_ip = 97; continue _fun0016 }
case 65:
                var1 = var2;
case 97:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getMessageMetadata';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = var3.peek;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0017_ip = 42; continue _fun0017 }
case 40:
                var5 = var3.messageMetadataByMessageId;
                var4 = var5.get;
                var3 = arg2;
                var2 = var4.bind(var5)(var3);
case 42:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0017_ip = 73; continue _fun0017 }
case 96:
                var1 = var2;
case 73:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getMessage';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var4 = this;
                var3 = var4.getMessageMetadata;
                var2 = arg1;
                var1 = arg2;
                var3 = var3.bind(var4)(var2, var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0018_ip = 87; continue _fun0018 }
case 98:
                var2 = var3.message;
case 87:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0018_ip = 42; continue _fun0018 }
case 99:
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
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = var3.peek;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0019_ip = 42; continue _fun0019 }
case 40:
                var5 = var3.conversationMetadataById;
                var4 = var5.get;
                var3 = arg2;
                var2 = var4.bind(var5)(var3);
case 42:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0019_ip = 73; continue _fun0019 }
case 96:
                var1 = var2;
case 73:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getEdgeMarker';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = var3.peek;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var2 = var1 == var3;
                if(var2) { _fun0020_ip = 46; continue _fun0020 }
case 7:
                var4 = 'before';
                var2 = arg2;
                if(!(var4 !== var2)) { _fun0020_ip = 9; continue _fun0020 }
case 100:
                var2 = var3.reachedNewest;
                _fun0020_ip = 8; continue _fun0020;
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
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var3 = _closure1_slot18;
                var2 = var3.get;
                var1 = arg1;
                var5 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var5;
                var2 = undefined;
                if(var3) { _fun0021_ip = 101; continue _fun0021 }
case 102:
                var4 = var5.has;
                var3 = arg2;
                var2 = var4.bind(var5)(var3);
case 101:
                var1 = var1 != var2;
                if(!var1) { _fun0021_ip = 103; continue _fun0021 }
case 42:
                var1 = var2;
case 103:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getSelectedConversationId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = var3.peek;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0022_ip = 74; continue _fun0022 }
case 40:
                var2 = var3.selectedConversationId;
case 74:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0022_ip = 45; continue _fun0022 }
case 104:
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
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = var3.peek;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var2 = null;
                var1 = var2 == var4;
                var7 = undefined;
                if(var1) { _fun0023_ip = 74; continue _fun0023 }
case 40:
                var7 = var4.selectedConversationId;
case 74:
                var3 = var2 == var7;
                var1 = null;
                if(var3) { _fun0023_ip = 105; continue _fun0023 }
case 104:
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0023_ip = 64; continue _fun0023 }
case 32:
                var5 = var4.conversationMetadataById;
                var4 = var5.get;
                var4 = var4.bind(var5)(var7);
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0023_ip = 64; continue _fun0023 }
case 106:
                var3 = var4.conversation;
case 64:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0023_ip = 107; continue _fun0023 }
case 15:
                var2 = var3;
case 107:
                var1 = var2;
case 105:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getConversationColor';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = var3.peek;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var2 = null;
                var4 = var2 == var3;
                var1 = null;
                if(var4) { _fun0024_ip = 75; continue _fun0024 }
case 40:
                var5 = var3.conversationMetadataById;
                var4 = var5.get;
                var3 = arg2;
                var4 = var4.bind(var5)(var3);
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0024_ip = 108; continue _fun0024 }
case 96:
                var3 = var4.color;
case 108:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0024_ip = 109; continue _fun0024 }
case 4:
                var2 = var3;
case 109:
                var1 = var2;
case 75:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getHydratedMessages';
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
                if(var4) { _fun0025_ip = 95; continue _fun0025 }
case 40:
                var6 = var3.conversationMetadataById;
                var4 = var6.get;
                var3 = arg2;
                var3 = var4.bind(var6)(var3);
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0025_ip = 95; continue _fun0025 }
case 96:
                var2 = var3.hydratedMessages;
case 95:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0025_ip = 97; continue _fun0025 }
case 65:
                var1 = var2;
case 97:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getHydratedMessageById';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = var3.peek;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0026_ip = 108; continue _fun0026 }
case 40:
                var6 = var3.messageMetadataByMessageId;
                var4 = var6.get;
                var3 = arg2;
                var3 = var4.bind(var6)(var3);
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0026_ip = 108; continue _fun0026 }
case 96:
                var2 = var3.message;
case 108:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0026_ip = 109; continue _fun0026 }
case 4:
                var1 = var2;
case 109:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'isConversationFetchPending';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var3 = _closure1_slot19;
                var2 = var3.get;
                var1 = arg1;
                var5 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0027_ip = 110; continue _fun0027 }
case 111:
                var3 = var5.size;
                var2 = 0;
                var1 = var2 !== var3;
case 110:
                if(!var1) { _fun0027_ip = 5; continue _fun0027 }
case 112:
                var3 = true;
                var2 = arg2;
                var2 = var3 !== var2;
                if(var2) { _fun0027_ip = 93; continue _fun0027 }
case 8:
                var4 = var5.has;
                var3 = 'full';
                var2 = var4.bind(var5)(var3);
case 93:
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
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = var3.peek;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0028_ip = 42; continue _fun0028 }
case 40:
                var5 = var3.recentFeedbackRatingsByConversationId;
                var4 = var5.get;
                var3 = arg2;
                var2 = var4.bind(var5)(var3);
case 42:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0028_ip = 73; continue _fun0028 }
case 96:
                var1 = var2;
case 73:
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
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var1 = arg1;
            var6 = var1.conversationId;
            var1 = var1.full;
            var3 = 'preview';
            if(!var1) { _fun0029_ip = 44; continue _fun0029 }
case 113:
            var3 = 'full';
case 44:
            var4 = _closure1_slot19;
            var2 = var4.get;
            var2 = var2.bind(var4)(var6);
            var4 = null;
            if(!(var4 == var2)) { _fun0029_ip = 91; continue _fun0029 }
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
            _fun0029_ip = 92; continue _fun0029;
case 91:
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
case 92:
            var1 = undefined;
            return var1;
        }
    };
    var2['CONVERSATION_FETCH_START'] = var10;
    var10 = function handleConversationFetchSuccess(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var1 = arg1;
            var7 = var1.channelId;
            var6 = var1.conversationId;
            var5 = var1.messages;
            var4 = var1.messageReferences;
            var3 = var1.fullyHydrated;
            var9 = _closure1_slot24;
            var8 = 'preview';
            if(!var3) { _fun0030_ip = 45; continue _fun0030 }
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
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var1 = arg1;
            var4 = var1.conversationId;
            var1 = var1.full;
            var3 = _closure1_slot24;
            var2 = 'preview';
            if(!var1) { _fun0031_ip = 37; continue _fun0031 }
case 111:
            var2 = 'full';
case 37:
            var1 = undefined;
            var2 = var3.bind(var1)(var4, var2);
            return var1;
        }
    };
    var2['CONVERSATION_FETCH_FAILURE'] = var10;
    var10 = function handleFetchStart(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
            var1 = arg1;
            var6 = var1.channelId;
            var3 = var1.requestKey;
            var1 = var1.isJump;
            if(!var1) { _fun0032_ip = 110; continue _fun0032 }
case 35:
            var2 = _closure1_slot18;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var6);
case 110:
            var2 = _closure1_slot18;
            var1 = var2.get;
            var2 = var1.bind(var2)(var6);
            var1 = null;
            if(!(var1 == var2)) { _fun0032_ip = 114; continue _fun0032 }
case 73:
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
case 114:
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        }
    };
    var2['CONVERSATIONS_FETCH_START'] = var10;
    var10 = function handleFetchSuccess(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
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
            if(var3) { _fun0033_ip = 5; continue _fun0033 }
case 115:
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
            if(var1) { _fun0033_ip = 54; continue _fun0033 }
case 86:
            var11 = undefined;
            if(var3) { _fun0033_ip = 116; continue _fun0033 }
case 84:
            var11 = var10.conversations;
case 116:
            if(!(var4 == var11)) { _fun0033_ip = 20; continue _fun0033 }
case 117:
            var11 = new Array(0);
case 20:
            _fun0033_ip = 58; continue _fun0033;
case 54:
            var16 = undefined;
            if(var3) { _fun0033_ip = 118; continue _fun0033 }
case 119:
            var16 = var10.selectedConversationId;
case 118:
            var3 = var4 != var16;
            var14 = null;
            if(!var3) { _fun0033_ip = 120; continue _fun0033 }
case 121:
            var13 = var4 == var10;
            var3 = undefined;
            if(var13) { _fun0033_ip = 70; continue _fun0033 }
case 122:
            var15 = var10.conversationMetadataById;
            var13 = var15.get;
            var13 = var13.bind(var15)(var16);
            var15 = var4 == var13;
            var3 = undefined;
            if(var15) { _fun0033_ip = 70; continue _fun0033 }
case 123:
            var3 = var13.conversation;
case 70:
            var14 = var3;
case 120:
            if(!(var4 == var14)) { _fun0033_ip = 124; continue _fun0033 }
case 125:
            var3 = new Array(0);
            _fun0033_ip = 28; continue _fun0033;
case 124:
            var13 = new Array(1);
            var13[0] = var14;
            var3 = var13;
case 28:
            var11 = var3;
case 58:
            var15 = null;
            if(var1) { _fun0033_ip = 126; continue _fun0033 }
case 127:
            var3 = var4 == var10;
            var13 = undefined;
            if(var3) { _fun0033_ip = 128; continue _fun0033 }
case 129:
            var13 = var10.reachedOldest;
case 128:
            var14 = var4 != var13;
            var3 = null;
            if(!var14) { _fun0033_ip = 130; continue _fun0033 }
case 131:
            var3 = var13;
case 130:
            var15 = var3;
case 126:
            var16 = null;
            if(var1) { _fun0033_ip = 132; continue _fun0033 }
case 133:
            var1 = var4 == var10;
            var3 = undefined;
            if(var1) { _fun0033_ip = 12; continue _fun0033 }
case 134:
            var3 = var10.reachedNewest;
case 12:
            var13 = var4 != var3;
            var1 = null;
            if(!var13) { _fun0033_ip = 135; continue _fun0033 }
case 136:
            var1 = var3;
case 135:
            var16 = var1;
case 132:
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
            if(var3) { _fun0033_ip = 137; continue _fun0033 }
case 138:
            var3 = var4 == var17;
case 137:
            var14 = var15;
            var13 = var16;
            if(var3) { _fun0033_ip = 139; continue _fun0033 }
case 140:
            var3 = 'before';
            if(!(var3 !== var19)) { _fun0033_ip = 141; continue _fun0033 }
case 142:
            var18 = 'after';
            var3 = var16;
            if(!(var18 === var19)) { _fun0033_ip = 143; continue _fun0033 }
case 144:
            var20 = var1.Date;
            var18 = var20.now;
            var3 = var18.bind(var20)();
case 143:
            _fun0033_ip = 145; continue _fun0033;
case 141:
            var20 = var1.Date;
            var18 = var20.now;
            var15 = var18.bind(var20)();
            var3 = var16;
case 145:
            var14 = var15;
            var13 = var3;
case 139:
            var3 = 'before';
            var15 = var3 === var19;
            var3 = var15;
            if(!var3) { _fun0033_ip = 146; continue _fun0033 }
case 147:
            var3 = var4 == var17;
case 146:
            if(!var3) { _fun0033_ip = 148; continue _fun0033 }
case 149:
            var16 = var1.Date;
            var3 = var16.now;
            var13 = var3.bind(var16)();
case 148:
            var3 = function mergeConversations(arg1, arg2) {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
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
                    if(var3) { _fun0034_ip = 150; continue _fun0034 }
case 151:
                    var9 = var5.value;
                    var8 = var4.set;
                    var3 = var9.id;
                    var3 = var8.bind(var4)(var3, var9);
                    var8 = var7.bind(var6)();
                    var3 = var8.done;
                    var5 = var8;
                    if(!var3) { _fun0034_ip = 151; continue _fun0034 }
case 150:
                    var3 = _closure1_slot21;
                    var2 = arg2;
                    var5 = var3.bind(var6)(var2);
                    var3 = var5.bind(var6)();
                    var2 = var3.done;
                    if(var2) { _fun0034_ip = 152; continue _fun0034 }
case 153:
                    var8 = var3.value;
                    var7 = var4.set;
                    var2 = var8.id;
                    var2 = var7.bind(var4)(var2, var8);
                    var7 = var5.bind(var6)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0034_ip = 153; continue _fun0034 }
case 152:
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
            if(!(var20 > var18)) { _fun0033_ip = 154; continue _fun0033 }
case 155:
            var18 = 'after';
            if(!(var18 !== var19)) { _fun0033_ip = 156; continue _fun0033 }
case 157:
            if(var15) { _fun0033_ip = 158; continue _fun0033 }
case 159:
            var15 = function clampAnchorWindowStart(arg1, arg2) {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    var3 = arg1;
                    var4 = arg2;
                    var _closure3_slot0 = var4;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0035_ip = 160; continue _fun0035 }
case 161:
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
                    if(!(var1 === var7)) { _fun0035_ip = 9; continue _fun0035 }
case 101:
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
case 160:
                    var1 = 0;
                    return var1;
                }
            };
            var20 = var15.bind(var6)(var16, var17);
            var15 = 0;
            var17 = var14;
            if(!(var20 > var15)) { _fun0033_ip = 162; continue _fun0033 }
case 163:
            var17 = null;
case 162:
            var15 = _closure1_slot16;
            var19 = var20 + var15;
            var18 = var16.length;
            var15 = var13;
            if(!(var19 < var18)) { _fun0033_ip = 164; continue _fun0033 }
case 165:
            var15 = null;
case 164:
            var19 = var16.slice;
            var18 = _closure1_slot16;
            var18 = var20 + var18;
            var12 = var19.bind(var16)(var20, var18);
            var3 = var15;
            var11 = var17;
            _fun0033_ip = 154; continue _fun0033;
case 158:
            var18 = var16.slice;
            var17 = _closure1_slot16;
            var15 = 0;
            var12 = var18.bind(var16)(var15, var17);
            var11 = var14;
            var3 = null;
            _fun0033_ip = 154; continue _fun0033;
case 156:
            var15 = var16.slice;
            var17 = var16.length;
            var14 = _closure1_slot16;
            var14 = var17 - var14;
            var12 = var15.bind(var16)(var14);
            var11 = null;
            var3 = var13;
case 154:
            var9 = function buildChannelData(arg1, arg2, arg3) {
                _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                    var10 = arg2;
                    var6 = arg3;
                    var4 = null;
                    var2 = var4 == var6;
                    var5 = undefined;
                    var1 = undefined;
                    if(var2) { _fun0036_ip = 44; continue _fun0036 }
case 166:
                    var1 = var6.guildId;
case 44:
                    if(!(var4 == var1)) { _fun0036_ip = 167; continue _fun0036 }
case 7:
                    var2 = 0;
                    var3 = var10[var2];
                    var7 = var4 == var3;
                    var2 = undefined;
                    if(var7) { _fun0036_ip = 45; continue _fun0036 }
case 39:
                    var2 = var3.guildId;
case 45:
                    var1 = var2;
case 167:
                    if(!(var4 == var1)) { _fun0036_ip = 51; continue _fun0036 }
case 151:
                    var7 = _closure1_slot9;
                    var3 = var7.getChannel;
                    var2 = arg1;
                    var3 = var3.bind(var7)(var2);
                    var7 = var4 == var3;
                    var2 = undefined;
                    if(var7) { _fun0036_ip = 168; continue _fun0036 }
case 13:
                    var2 = var3.guild_id;
case 168:
                    var1 = var2;
case 51:
                    var2 = var4 != var1;
                    var11 = null;
                    if(!var2) { _fun0036_ip = 53; continue _fun0036 }
case 169:
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
                    if(var2) { _fun0036_ip = 117; continue _fun0036 }
case 21:
                    var1 = var6.colorIndex;
case 117:
                    var3 = var4 != var1;
                    var2 = 0;
                    if(!var3) { _fun0036_ip = 23; continue _fun0036 }
case 170:
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
                    if(var1) { _fun0036_ip = 171; continue _fun0036 }
case 22:
                    var38 = var26.value;
                    var1 = var4 == var6;
                    var30 = undefined;
                    if(var1) { _fun0036_ip = 172; continue _fun0036 }
case 173:
                    var31 = var6.conversationMetadataById;
                    var29 = var31.get;
                    var1 = var38.id;
                    var30 = var29.bind(var31)(var1);
case 172:
                    var1 = var4 == var30;
                    var34 = undefined;
                    if(var1) { _fun0036_ip = 174; continue _fun0036 }
case 175:
                    var34 = var30.color;
case 174:
                    var29 = var25;
                    if(!(var4 == var34)) { _fun0036_ip = 176; continue _fun0036 }
case 177:
                    var32 = _closure1_slot14;
                    var33 = parseFloat(var25);
                    var29 = var33 + 1;
                    var1 = var32.length;
                    var1 = var33 % var1;
                    var34 = var32[var1];
case 176:
                    var31 = var4 == var30;
                    var1 = undefined;
                    if(var31) { _fun0036_ip = 10; continue _fun0036 }
case 178:
                    var1 = var30.hydratedMessages;
case 10:
                    var31 = var4 != var1;
                    var33 = null;
                    if(!var31) { _fun0036_ip = 179; continue _fun0036 }
case 180:
                    var33 = var1;
case 179:
                    var32 = var4 != var33;
                    if(!var32) { _fun0036_ip = 181; continue _fun0036 }
case 182:
                    var1 = var4 == var30;
                    if(var1) { _fun0036_ip = 183; continue _fun0036 }
case 184:
                    var30 = var30.fullyHydrated;
                    var1 = !var30;
case 183:
                    var32 = !var1;
case 181:
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
                    if(!var1) { _fun0036_ip = 185; continue _fun0036 }
case 186:
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
                    if(var1) { _fun0036_ip = 185; continue _fun0036 }
case 187:
                    var36 = var32.value;
                    var35 = var34.get;
                    var1 = var36.messageId;
                    var35 = var35.bind(var34)(var1);
                    if(!(var4 == var35)) { _fun0036_ip = 188; continue _fun0036 }
case 189:
                    var40 = var34.set;
                    var39 = var36.messageId;
                    var1 = new Array(1);
                    var1[0] = var36;
                    var1 = var40.bind(var34)(var39, var1);
                    _fun0036_ip = 190; continue _fun0036;
case 188:
                    var1 = var35.push;
                    var1 = var1.bind(var35)(var36);
case 190:
                    var39 = var33.bind(var5)();
                    var1 = var39.done;
                    var32 = var39;
                    var37 = var34;
                    var24 = var32;
                    var23 = var33;
                    var31 = var36;
                    var30 = var35;
                    if(!var1) { _fun0036_ip = 187; continue _fun0036 }
case 185:
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
                    if(var1) { _fun0036_ip = 191; continue _fun0036 }
case 192:
                    var43 = var35.value;
                    var1 = var4 == var6;
                    var42 = undefined;
                    if(var1) { _fun0036_ip = 193; continue _fun0036 }
case 194:
                    var39 = var6.messageMetadataByMessageId;
                    var1 = var39.get;
                    var42 = var1.bind(var39)(var43);
case 193:
                    var39 = var4 == var42;
                    var1 = undefined;
                    if(var39) { _fun0036_ip = 195; continue _fun0036 }
case 196:
                    var1 = var42.moderationLabel;
case 195:
                    var1 = var4 == var1;
                    if(!var1) { _fun0036_ip = 197; continue _fun0036 }
case 198:
                    var39 = var38.moderation;
                    var1 = var4 != var39;
case 197:
                    if(!var1) { _fun0036_ip = 199; continue _fun0036 }
case 200:
                    var39 = var38.moderation;
                    var40 = var39.flaggedMessageIds;
                    var39 = var40.includes;
                    var1 = var39.bind(var40)(var43);
case 199:
                    if(!var1) { _fun0036_ip = 201; continue _fun0036 }
case 202:
                    var1 = var4 != var37;
case 201:
                    var41 = null;
                    if(!var1) { _fun0036_ip = 203; continue _fun0036 }
case 204:
                    var40 = _closure1_slot25;
                    var1 = var37.get;
                    var39 = var1.bind(var37)(var43);
                    var1 = var39;
                    if(!(var4 == var39)) { _fun0036_ip = 205; continue _fun0036 }
case 206:
                    var1 = new Array(0);
case 205:
                    var41 = var40.bind(var5)(var1);
                    var33 = var39;
case 203:
                    var39 = var8.set;
                    var1 = {};
                    var40 = var38.id;
                    var1['conversationId'] = var40;
                    var40 = var4 == var42;
                    var44 = var33;
                    var47 = undefined;
                    if(var40) { _fun0036_ip = 207; continue _fun0036 }
case 208:
                    var47 = var42.moderationLabel;
case 207:
                    var40 = var41;
                    if(!(var4 != var47)) { _fun0036_ip = 209; continue _fun0036 }
case 210:
                    var40 = var47;
case 209:
                    var1['moderationLabel'] = var40;
                    var40 = var4 == var42;
                    var46 = undefined;
                    if(var40) { _fun0036_ip = 211; continue _fun0036 }
case 212:
                    var46 = var42.message;
case 211:
                    var45 = var4 != var46;
                    var40 = null;
                    if(!var45) { _fun0036_ip = 213; continue _fun0036 }
case 214:
                    var40 = var46;
case 213:
                    var1['message'] = var40;
                    var1 = var39.bind(var8)(var43, var1);
                    var1 = var4 == var42;
                    var40 = undefined;
                    if(var1) { _fun0036_ip = 215; continue _fun0036 }
case 216:
                    var1 = var42.message;
                    var39 = var4 == var1;
                    var34 = var1;
                    var40 = undefined;
                    if(var39) { _fun0036_ip = 215; continue _fun0036 }
case 217:
                    var39 = var1.messageReference;
                    var1 = var4 == var39;
                    var34 = var39;
                    var40 = undefined;
                    if(var1) { _fun0036_ip = 215; continue _fun0036 }
case 218:
                    var40 = var39.message_id;
                    var34 = var39;
case 215:
                    var45 = var34;
                    if(!(var4 != var40)) { _fun0036_ip = 219; continue _fun0036 }
case 220:
                    var39 = var4 == var6;
                    var1 = undefined;
                    if(var39) { _fun0036_ip = 221; continue _fun0036 }
case 222:
                    var48 = var6.messageMetadataByMessageId;
                    var39 = var48.get;
                    var1 = var39.bind(var48)(var40);
case 221:
                    var48 = var4 == var1;
                    var39 = undefined;
                    if(var48) { _fun0036_ip = 223; continue _fun0036 }
case 224:
                    var39 = var1.message;
case 223:
                    var39 = var4 == var39;
                    if(var39) { _fun0036_ip = 225; continue _fun0036 }
case 226:
                    var48 = var8.has;
                    var39 = var48.bind(var8)(var40);
case 225:
                    var32 = var1;
                    if(var39) { _fun0036_ip = 219; continue _fun0036 }
case 227:
                    var39 = var8.set;
                    var39 = var39.bind(var8)(var40, var1);
                    var32 = var1;
case 219:
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
                    if(!var1) { _fun0036_ip = 192; continue _fun0036 }
case 191:
                    var32 = var27.bind(var5)();
                    var1 = var32.done;
                    var26 = var32;
                    var25 = var29;
                    var22 = var31;
                    var21 = var30;
                    var2 = var25;
                    if(!var1) { _fun0036_ip = 22; continue _fun0036 }
case 171:
                    var1 = var4 == var6;
                    var7 = undefined;
                    if(var1) { _fun0036_ip = 228; continue _fun0036 }
case 229:
                    var7 = var6.recentFeedbackRatingsByConversationId;
case 228:
                    if(!(var4 == var7)) { _fun0036_ip = 230; continue _fun0036 }
case 231:
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
case 230:
                    var1 = var4 == var6;
                    var3 = undefined;
                    if(var1) { _fun0036_ip = 232; continue _fun0036 }
case 233:
                    var3 = var6.selectedConversationId;
case 232:
                    var13 = var4 != var3;
                    var1 = null;
                    if(!var13) { _fun0036_ip = 234; continue _fun0036 }
case 235:
                    var1 = var3;
case 234:
                    var _closure3_slot0 = var1;
                    var13 = var4 != var1;
                    var3 = null;
                    if(!var13) { _fun0036_ip = 236; continue _fun0036 }
case 237:
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
                    if(!var12) { _fun0036_ip = 236; continue _fun0036 }
case 238:
                    var3 = var1;
case 236:
                    var1 = {};
                    var1['guildId'] = var11;
                    var1['conversations'] = var10;
                    var1['conversationMetadataById'] = var9;
                    var1['messageMetadataByMessageId'] = var8;
                    var1['recentFeedbackRatingsByConversationId'] = var7;
                    var7 = var4 == var6;
                    var8 = undefined;
                    if(var7) { _fun0036_ip = 239; continue _fun0036 }
case 240:
                    var8 = var6.reachedOldest;
case 239:
                    var9 = var4 != var8;
                    var7 = null;
                    if(!var9) { _fun0036_ip = 241; continue _fun0036 }
case 242:
                    var7 = var8;
case 241:
                    var1['reachedOldest'] = var7;
                    var7 = var4 == var6;
                    var5 = undefined;
                    if(var7) { _fun0036_ip = 243; continue _fun0036 }
case 244:
                    var5 = var6.reachedNewest;
case 243:
                    var6 = var4 != var5;
                    var4 = null;
                    if(!var6) { _fun0036_ip = 245; continue _fun0036 }
case 246:
                    var4 = var5;
case 245:
                    var1['reachedNewest'] = var4;
                    var1['selectedConversationId'] = var3;
                    var1['colorIndex'] = var2;
                    return var1;
                }
            };
            var9 = var9.bind(var6)(var8, var12, var10);
            var9['reachedOldest'] = var11;
            var9['reachedNewest'] = var3;
            if(!(var4 == var10)) { _fun0033_ip = 247; continue _fun0033 }
case 248:
            var11 = _closure1_slot17;
            var3 = var11.set;
            var3 = var3.bind(var11)(var8, var9);
            _fun0033_ip = 249; continue _fun0033;
case 247:
            var3 = var1.Object;
            var1 = var3.assign;
            var1 = var1.bind(var3)(var10, var9);
case 249:
            var1 = _closure1_slot21;
            var3 = var1.bind(var6)(var2);
            var2 = var3.bind(var6)();
            var1 = var2.done;
            if(var1) { _fun0033_ip = 250; continue _fun0033 }
case 251:
            var1 = var2.value;
            var9 = var1.messages;
            if(!(var4 != var9)) { _fun0033_ip = 252; continue _fun0033 }
case 253:
            var10 = _closure1_slot26;
            var23 = var1.id;
            var22 = var1.messages;
            var25 = undefined;
            var24 = var8;
            var21 = var7;
            var1 = var25[var10](var24, var23, var22, var21, var20);
case 252:
            var9 = var3.bind(var6)();
            var1 = var9.done;
            var2 = var9;
            if(!var1) { _fun0033_ip = 251; continue _fun0033 }
case 250:
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
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channelId;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0037_ip = 98; continue _fun0037 }
case 254:
            var4 = _closure1_slot17;
            var2 = var4.has;
            var1 = var2.bind(var4)(var3);
case 98:
            if(!var1) { _fun0037_ip = 103; continue _fun0037 }
case 255:
            var2 = _closure1_slot17;
            var1 = var2.get;
            var1 = var1.bind(var2)(var3);
case 103:
            var1 = false;
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var10;
    var10 = function handleChannelDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var3 = _closure1_slot30;
        var2 = var1.id;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var2['CHANNEL_DELETE'] = var10;
    var10 = function handleGuildDelete(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var1 = arg1;
            var10 = var1.guild;
            var1 = 'unavailable';
            var1 = var1 in var10;
            if(!var1) { _fun0038_ip = 98; continue _fun0038 }
case 61:
            var2 = var10.unavailable;
            var1 = true;
            if(!(var1 !== var2)) { _fun0038_ip = 256; continue _fun0038 }
case 98:
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
            if(var2) { _fun0038_ip = 86; continue _fun0038 }
case 257:
            var12 = var4.value;
            var11 = _closure1_slot17;
            var2 = var11.peek;
            var2 = var2.bind(var11)(var12);
            var13 = var5 == var2;
            var11 = undefined;
            if(var13) { _fun0038_ip = 78; continue _fun0038 }
case 90:
            var11 = var2.guildId;
case 78:
            var2 = var10.id;
            var2 = var11 === var2;
            if(!var2) { _fun0038_ip = 258; continue _fun0038 }
case 259:
            var11 = _closure1_slot30;
            var2 = var11.bind(var8)(var12);
case 258:
            if(!var2) { _fun0038_ip = 88; continue _fun0038 }
case 260:
            var3 = true;
case 88:
            var12 = var7.bind(var8)();
            var2 = var12.done;
            var4 = var12;
            var1 = var3;
            if(!var2) { _fun0038_ip = 257; continue _fun0038 }
case 86:
            return var1;
case 256:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_DELETE'] = var10;
    var10 = function handleLoadMessagesSuccess(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var1 = var1.jump;
            var3 = null;
            if(!(var3 != var1)) { _fun0039_ip = 49; continue _fun0039 }
case 33:
            var5 = _closure1_slot11;
            var2 = var5.getChannelId;
            var2 = var2.bind(var5)();
            if(!(var2 === var4)) { _fun0039_ip = 49; continue _fun0039 }
case 100:
            var2 = _closure1_slot17;
            var1 = var2.peek;
            var2 = var1.bind(var2)(var4);
            var1 = var3 != var2;
            if(!var1) { _fun0039_ip = 109; continue _fun0039 }
case 73:
            var2['reachedOldest'] = var3;
            var2['reachedNewest'] = var3;
            var1 = true;
case 109:
            return var1;
case 49:
            var1 = false;
            return var1;
        }
    };
    var2['LOAD_MESSAGES_SUCCESS'] = var10;
    var10 = function handleSetSelectedConversation(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var3 = var1.conversationId;
            var1 = null;
            if(!(var1 != var5)) { _fun0040_ip = 8; continue _fun0040 }
case 33:
            var4 = _closure1_slot17;
            var2 = var4.peek;
            var2 = var2.bind(var4)(var5);
            var1 = var1 != var2;
            if(!var1) { _fun0040_ip = 167; continue _fun0040 }
case 39:
            var2['selectedConversationId'] = var3;
            var1 = true;
case 167:
            return var1;
case 8:
            var1 = false;
            return var1;
        }
    };
    var2['SET_SELECTED_CONVERSATION'] = var10;
    var10 = function handleClearConversationSelection(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channelId;
            var6 = var1.conversationId;
            var2 = _closure1_slot17;
            var1 = var2.peek;
            var3 = var1.bind(var2)(var3);
            var2 = null;
            if(!(var2 != var3)) { _fun0041_ip = 97; continue _fun0041 }
case 74:
            var5 = var3.selectedConversationId;
            var1 = var2 != var5;
            if(!var1) { _fun0041_ip = 108; continue _fun0041 }
case 42:
            var4 = var2 == var6;
            if(var4) { _fun0041_ip = 79; continue _fun0041 }
case 46:
            var4 = var5 === var6;
case 79:
            var1 = var4;
case 108:
            if(!var1) { _fun0041_ip = 261; continue _fun0041 }
case 115:
            var3['selectedConversationId'] = var2;
            var1 = true;
case 261:
            return var1;
case 97:
            var1 = false;
            return var1;
        }
    };
    var2['CLEAR_CONVERSATION_SELECTION'] = var10;
    var10 = function handleSetConversationFeedbackRating(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
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
            if(!var1) { _fun0042_ip = 95; continue _fun0042 }
case 104:
            var3 = var2.recentFeedbackRatingsByConversationId;
            var2 = var3.set;
            var2 = var2.bind(var3)(var5, var4);
            var1 = true;
case 95:
            return var1;
        }
    };
    var2['SET_CONVERSATION_FEEDBACK_RATING'] = var10;
    var10 = function handleMessageUpdate(arg1) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
            var1 = arg1;
            var10 = var1.message;
            var5 = var10.channel_id;
            var7 = var10.id;
            var3 = null;
            if(!(var3 != var5)) { _fun0043_ip = 262; continue _fun0043 }
case 263:
            if(!(var3 != var7)) { _fun0043_ip = 262; continue _fun0043 }
case 98:
            var4 = _closure1_slot17;
            var1 = var4.peek;
            var6 = var1.bind(var4)(var5);
            if(!(var3 != var6)) { _fun0043_ip = 264; continue _fun0043 }
case 32:
            var4 = var6.messageMetadataByMessageId;
            var1 = var4.get;
            var5 = var1.bind(var4)(var7);
            var8 = var3 == var5;
            var4 = undefined;
            var1 = undefined;
            if(var8) { _fun0043_ip = 265; continue _fun0043 }
case 266:
            var1 = var5.message;
case 265:
            var1 = var3 != var1;
            if(!var1) { _fun0043_ip = 152; continue _fun0043 }
case 267:
            var3 = _closure1_slot27;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 14;
            var2 = var9[var2];
            var9 = var8.bind(var4)(var2);
            var8 = var9.updateMessageRecord;
            var2 = var5.message;
            var11 = var8.bind(var9)(var2, var10);
            var15 = undefined;
            var14 = var6;
            var13 = var5;
            var12 = var7;
            var2 = var15[var3](var14, var13, var12, var11, var10);
            var1 = true;
case 152:
            return var1;
case 264:
            var1 = false;
            return var1;
case 262:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_UPDATE'] = var10;
    var2['MESSAGE_REACTION_ADD'] = var9;
    var2['MESSAGE_REACTION_REMOVE'] = var9;
    var9 = function handleReactionBatch(arg1) {
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var6 = var1.messageId;
            var9 = var1.reactions;
            var3 = _closure1_slot17;
            var2 = var3.peek;
            var5 = var2.bind(var3)(var4);
            var7 = null;
            if(!(var7 != var5)) { _fun0044_ip = 52; continue _fun0044 }
case 112:
            var3 = var5.messageMetadataByMessageId;
            var2 = var3.get;
            var4 = var2.bind(var3)(var6);
            var8 = var7 == var4;
            var2 = undefined;
            if(var8) { _fun0044_ip = 268; continue _fun0044 }
case 115:
            var2 = var4.message;
case 268:
            if(!(var7 != var2)) { _fun0044_ip = 269; continue _fun0044 }
case 109:
            var8 = var4.message;
            var7 = var8.addReactionBatch;
            var10 = _closure1_slot8;
            var2 = var10.getId;
            var2 = var2.bind(var10)();
            var11 = var7.bind(var8)(var9, var2);
            var1 = _closure1_slot27;
            var15 = undefined;
            var14 = var5;
            var13 = var4;
            var12 = var6;
            var1 = var15[var1](var14, var13, var12, var11, var10);
            var1 = true;
            return var1;
case 269:
            var1 = false;
            return var1;
case 52:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_ADD_MANY'] = var9;
    var9 = function handleRemoveAllReactions(arg1) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var6 = var1.messageId;
            var3 = _closure1_slot17;
            var2 = var3.peek;
            var5 = var2.bind(var3)(var4);
            var7 = null;
            if(!(var7 != var5)) { _fun0045_ip = 270; continue _fun0045 }
case 255:
            var3 = var5.messageMetadataByMessageId;
            var2 = var3.get;
            var4 = var2.bind(var3)(var6);
            var8 = var7 == var4;
            var2 = undefined;
            if(var8) { _fun0045_ip = 34; continue _fun0045 }
case 79:
            var2 = var4.message;
case 34:
            if(!(var7 != var2)) { _fun0045_ip = 271; continue _fun0045 }
case 272:
            var9 = var4.message;
            var8 = var9.set;
            var7 = 'reactions';
            var2 = new Array(0);
            var10 = var8.bind(var9)(var7, var2);
            var1 = _closure1_slot27;
            var14 = undefined;
            var13 = var5;
            var12 = var4;
            var11 = var6;
            var1 = var14[var1](var13, var12, var11, var10, var9);
            var1 = true;
            return var1;
case 271:
            var1 = false;
            return var1;
case 270:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_REMOVE_ALL'] = var9;
    var9 = function handleRemoveEmojiReactions(arg1) {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var6 = var1.messageId;
            var8 = var1.emoji;
            var3 = _closure1_slot17;
            var2 = var3.peek;
            var5 = var2.bind(var3)(var4);
            var7 = null;
            if(!(var7 != var5)) { _fun0046_ip = 273; continue _fun0046 }
case 112:
            var3 = var5.messageMetadataByMessageId;
            var2 = var3.get;
            var4 = var2.bind(var3)(var6);
            var9 = var7 == var4;
            var2 = undefined;
            if(var9) { _fun0046_ip = 268; continue _fun0046 }
case 115:
            var2 = var4.message;
case 268:
            if(!(var7 != var2)) { _fun0046_ip = 78; continue _fun0046 }
case 109:
            var7 = var4.message;
            var2 = var7.removeReactionsForEmoji;
            var10 = var2.bind(var7)(var8);
            var1 = _closure1_slot27;
            var14 = undefined;
            var13 = var5;
            var12 = var4;
            var11 = var6;
            var1 = var14[var1](var13, var12, var11, var10, var9);
            var1 = true;
            return var1;
case 78:
            var1 = false;
            return var1;
case 273:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_REMOVE_EMOJI'] = var9;
    var9 = function handleMessageDelete(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var3 = var1.id;
        var2 = _closure1_slot28;
        var1 = undefined;
        var1 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var2['MESSAGE_DELETE'] = var9;
    var9 = function handleMessageDeleteBulk(arg1) {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
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
            if(var2) { _fun0047_ip = 48; continue _fun0047 }
case 104:
            var10 = _closure1_slot28;
            var2 = var4.value;
            var2 = var10.bind(var7)(var9, var2);
            if(!var2) { _fun0047_ip = 34; continue _fun0047 }
case 108:
            var3 = true;
case 34:
            var11 = var6.bind(var7)();
            var2 = var11.done;
            var4 = var11;
            var1 = var3;
            if(!var2) { _fun0047_ip = 104; continue _fun0047 }
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