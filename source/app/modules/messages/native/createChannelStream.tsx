// app/modules/messages/native/createChannelStream.tsx
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
            var9 = _closure1_slot12;
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
            var7 = _closure1_slot12;
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
    var _closure1_slot11 = var1;
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
    var _closure1_slot12 = var1;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.Changeset;
    var _closure1_slot6 = var7;
    var7 = var4.LoadingType;
    var _closure1_slot7 = var7;
    var7 = var4.RowType;
    var _closure1_slot8 = var7;
    var4 = var4.SeparatorType;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageFlags;
    var _closure1_slot10 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/createChannelStream.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createChannelStream(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channel;
            var _closure2_slot0 = var2;
            var5 = var1.messages;
            var _closure2_slot1 = var5;
            var10 = var1.uploads;
            var2 = var1.oldestUnreadMessageId;
            var _closure2_slot2 = var2;
            var2 = var1.replyingMessageId;
            var _closure2_slot3 = var2;
            var2 = var1.currentUserId;
            var _closure2_slot4 = var2;
            var2 = var1.canAddNewReactions;
            var _closure2_slot5 = var2;
            var2 = var1.selectedSummary;
            var _closure2_slot6 = var2;
            var2 = var1.chatManager;
            var _closure2_slot7 = var2;
            var6 = var1.roleStyle;
            var _closure2_slot8 = var6;
            var7 = var1.forceRender;
            var _closure2_slot9 = var7;
            var2 = var1.updateMessageIds;
            var _closure2_slot10 = var2;
            var2 = var1.isResourceChannel;
            var _closure2_slot11 = var2;
            var2 = var1.unloadableContentEntryMessageIds;
            var _closure2_slot12 = var2;
            var1 = var1.dismissedMessageIds;
            var _closure2_slot13 = var1;
            var8 = undefined;
            var _closure2_slot16 = var8;
            var _closure2_slot17 = var8;
            var _closure2_slot18 = var8;
            var _closure2_slot19 = var8;
            var1 = new Array(0);
            var _closure2_slot14 = var1;
            var12 = {};
            var _closure2_slot15 = var12;
            var9 = _closure1_slot11;
            var2 = var10.slice;
            var10 = var2.bind(var10)();
            var2 = var10.reverse;
            var2 = var2.bind(var10)();
            var11 = var9.bind(var8)(var2);
            var9 = var11.bind(var8)();
            var2 = var9.done;
            var10 = null;
            if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var13 = var9.value;
            var15 = _closure1_slot5;
            var14 = var15.getMessageForFile;
            var2 = var13.id;
            var2 = var14.bind(var15)(var2);
            var15 = var10 == var2;
            var14 = undefined;
            if(var15) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var14 = var2.nonce;
case 38:
            if(!(var10 != var14)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var2 = var2.nonce;
            var12[var2] = var13;
case 40:
            var13 = var11.bind(var8)();
            var2 = var13.done;
            var9 = var13;
            if(!var2) { _fun0004_ip = 37; continue _fun0004 }
case 36:
            var2 = function unreadFilter(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = arg1;
                    var2 = _closure2_slot0;
                    var1 = var2.isForumPost;
                    var1 = var1.bind(var2)();
                    var5 = var4.id;
                    var2 = _closure2_slot2;
                    var5 = var5 === var2;
                    if(var1) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var1 = var5;
                    _fun0005_ip = 44; continue _fun0005;
case 42:
                    var2 = var5;
                    if(!var5) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var4 = var4.id;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var5 = 5;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var7.bind(var5)(var6);
                    var5 = var6.castChannelIdAsMessageId;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var3 = var5.bind(var6)(var3);
                    var2 = var4 !== var3;
case 45:
                    var1 = var2;
case 44:
                    return var1;
                }
            };
            _closure2_slot16 = var2;
            var2 = new Array(0);
            _closure2_slot17 = var2;
            var9 = function insertMessage(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure2_slot17;
                    var2 = 0;
                    var3 = var3[var2];
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                    var2 = _closure2_slot16;
                    var7 = undefined;
                    var2 = var2.bind(var7)(var4);
                    if(var2) { _fun0006_ip = 47; continue _fun0006 }
case 43:
                    var5 = var3.length;
                    var2 = 1;
                    var2 = var5 - var2;
                    var6 = var3[var2];
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 6;
                    var2 = var8[var2];
                    var5 = var5.bind(var7)(var2);
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var7)(var2, var6, var4);
                    if(var2) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                    var2 = var3.unshift;
                    var2 = var2.bind(var3)(var4);
                    _fun0006_ip = 51; continue _fun0006;
case 49:
                    var5 = _closure2_slot17;
                    var3 = var5.unshift;
                    var2 = new Array(1);
                    var2[0] = var4;
                    var2 = var3.bind(var5)(var2);
                    _fun0006_ip = 51; continue _fun0006;
case 47:
                    var3 = _closure2_slot17;
                    var2 = var3.unshift;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var1 = var2.bind(var3)(var1);
case 51:
                    var1 = undefined;
                    return var1;
                }
            };
            _closure2_slot18 = var9;
            var10 = var5.forEach;
            var9 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var6 = arg1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.tryCreateInjectedMessage;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var6, var2);
                    var4 = null;
                    var5 = var4 != var2;
                    if(!var5) { _fun0007_ip = 52; continue _fun0007 }
case 28:
                    var8 = var2.position;
                    var7 = 'before';
                    var5 = var7 === var8;
case 52:
                    if(!var5) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                    var7 = _closure2_slot18;
                    var5 = var2.message;
                    var5 = var7.bind(var1)(var5);
                    var7 = _closure2_slot2;
                    var5 = var6.id;
                    if(!(var7 === var5)) { _fun0007_ip = 53; continue _fun0007 }
case 55:
                    var5 = var2.message;
                    var5 = var5.id;
                    _closure2_slot2 = var5;
case 53:
                    var5 = _closure2_slot18;
                    var5 = var5.bind(var1)(var6);
                    var4 = var4 != var2;
                    if(!var4) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                    var6 = var2.position;
                    var5 = 'after';
                    var4 = var5 === var6;
case 56:
                    if(!var4) { _fun0007_ip = 58; continue _fun0007 }
case 59:
                    var3 = _closure2_slot18;
                    var2 = var2.message;
                    var2 = var3.bind(var1)(var2);
case 58:
                    return var1;
                }
            };
            var9 = var10.bind(var5)(var9);
            var9 = function determineChangeType(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = arguments[1];
                    var1 = undefined;
                    if(!(var4 === var1)) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                    var4 = false;
case 60:
                    var3 = _closure2_slot7;
                    var2 = var3.determineChangeType;
                    var1 = {};
                    var6 = arg1;
                    var1['message'] = var6;
                    var6 = _closure2_slot10;
                    var1['updateMessageIds'] = var6;
                    var5 = _closure2_slot9;
                    var1['forceRender'] = var5;
                    var1 = var2.bind(var3)(var1, var4);
                    return var1;
                }
            };
            _closure2_slot19 = var9;
            var9 = var2.forEach;
            var3 = function(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var14 = arg1;
                    var3 = arg2;
                    var _closure3_slot0 = var14;
                    var1 = var14.length;
                    var20 = 1;
                    var1 = var1 - var20;
                    var9 = var14[var1];
                    var _closure3_slot1 = var9;
                    var2 = var9.hasFlag;
                    var1 = _closure1_slot10;
                    var1 = var1.HIDDEN_SUSPENDED_USER;
                    var1 = var2.bind(var9)(var1);
                    if(!var1) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                    var5 = _closure2_slot13;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0009_ip = 62; continue _fun0009 }
case 54:
                    var5 = _closure2_slot13;
                    var2 = var5.has;
                    var1 = var9.id;
                    var1 = var2.bind(var5)(var1);
                    if(var1) { _fun0009_ip = 64; continue _fun0009 }
case 62:
                    var1 = _closure2_slot17;
                    var1 = var1.length;
                    var1 = var1 - var20;
                    var11 = var3 === var1;
                    var7 = 0;
                    var1 = var7 === var3;
                    if(!var1) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                    var2 = _closure2_slot1;
                    var1 = var2.hasMoreAfter;
case 65:
                    if(!var1) { _fun0009_ip = 67; continue _fun0009 }
case 56:
                    var8 = _closure2_slot14;
                    var2 = var8.push;
                    var1 = {};
                    var10 = _closure1_slot7;
                    var10 = var10.LOAD_AFTER;
                    var1['rowType'] = var10;
                    var10 = _closure2_slot9;
                    var12 = _closure1_slot6;
                    if(var10) { _fun0009_ip = 19; continue _fun0009 }
case 16:
                    var10 = var12.NOOP;
                    _fun0009_ip = 68; continue _fun0009;
case 19:
                    var10 = var12.UPDATE;
case 68:
                    var1['changeType'] = var10;
                    var10 = _closure2_slot8;
                    var1['roleStyle'] = var10;
                    var10 = _closure2_slot1;
                    var10 = var10.loadingMore;
                    var1['isLoading'] = var10;
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var10 = 8;
                    var12 = var17[var10];
                    var15 = undefined;
                    var12 = var16.bind(var15)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var10 = var17[var10];
                    var10 = var16.bind(var15)(var10);
                    var10 = var10.t;
                    var10 = var10.XBlaiC;
                    var10 = var12.bind(var13)(var10);
                    var1['text'] = var10;
                    var1 = var2.bind(var8)(var1);
case 67:
                    var1 = _closure2_slot1;
                    var1 = var1.hasMoreBefore;
                    if(!var1) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                    var1 = var11;
case 69:
                    var2 = _closure2_slot16;
                    var8 = undefined;
                    var2 = var2.bind(var8)(var9);
                    var13 = null;
                    var12 = null;
                    if(var11) { _fun0009_ip = 71; continue _fun0009 }
case 72:
                    var10 = _closure2_slot17;
                    var3 = var3 + var20;
                    var3 = var10[var3];
                    var3 = var3[var7];
                    var12 = var3.timestamp;
case 71:
                    if(var11) { _fun0009_ip = 73; continue _fun0009 }
case 74:
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 9;
                    var3 = var10[var3];
                    var10 = var7.bind(var8)(var3);
                    var7 = var10.isSameDay;
                    var3 = var9.timestamp;
                    var7 = var7.bind(var10)(var3, var12);
                    var3 = true;
                    if(!var7) { _fun0009_ip = 75; continue _fun0009 }
case 73:
                    var10 = _closure2_slot0;
                    var7 = var10.isDM;
                    var7 = var7.bind(var10)();
                    if(!var7) { _fun0009_ip = 76; continue _fun0009 }
case 77:
                    var10 = _closure2_slot1;
                    var10 = var10.hasMoreBefore;
                    var7 = !var10;
case 76:
                    if(!var7) { _fun0009_ip = 78; continue _fun0009 }
case 79:
                    var7 = var11;
case 78:
                    if(var7) { _fun0009_ip = 80; continue _fun0009 }
case 81:
                    var12 = _closure2_slot0;
                    var10 = var12.isThread;
                    var10 = var10.bind(var12)();
                    if(!var10) { _fun0009_ip = 82; continue _fun0009 }
case 83:
                    var15 = _closure2_slot0;
                    var12 = var15.isForumPost;
                    var12 = var12.bind(var15)();
                    var10 = !var12;
case 82:
                    if(!var10) { _fun0009_ip = 84; continue _fun0009 }
case 85:
                    var12 = _closure2_slot1;
                    var12 = var12.hasMoreBefore;
                    var10 = !var12;
case 84:
                    if(!var10) { _fun0009_ip = 86; continue _fun0009 }
case 87:
                    var10 = var11;
case 86:
                    var7 = var10;
case 80:
                    var3 = false;
                    if(!var7) { _fun0009_ip = 75; continue _fun0009 }
case 88:
                    var3 = true;
case 75:
                    var6 = function processHiddenMessageRow(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var1 = arg1;
                            var4 = _closure1_slot11;
                            var3 = _closure3_slot0;
                            var7 = undefined;
                            var6 = var4.bind(var7)(var3);
                            var5 = var6.bind(var7)();
                            var4 = var5.done;
                            if(var4) { _fun0010_ip = 89; continue _fun0010 }
case 90:
                            var12 = var5.value;
                            var4 = _closure2_slot19;
                            var9 = var4.bind(var7)(var12);
                            var4 = _closure1_slot6;
                            var4 = var4.NOOP;
                            var4 = var9 !== var4;
                            if(!var4) { _fun0010_ip = 91; continue _fun0010 }
case 92:
                            var10 = var1.changeType;
                            var9 = _closure1_slot6;
                            var9 = var9.NOOP;
                            var4 = var10 === var9;
case 91:
                            if(!var4) { _fun0010_ip = 93; continue _fun0010 }
case 11:
                            var4 = _closure1_slot6;
                            var4 = var4.UPDATE;
                            var1['changeType'] = var4;
case 93:
                            var10 = var1.content;
                            var9 = var10.unshift;
                            var4 = {};
                            var11 = _closure1_slot8;
                            var11 = var11.MESSAGE;
                            var4['rowType'] = var11;
                            var11 = _closure1_slot6;
                            var11 = var11.NOOP;
                            var4['changeType'] = var11;
                            var11 = _closure2_slot8;
                            var4['roleStyle'] = var11;
                            var4['message'] = var12;
                            var13 = _closure2_slot0;
                            var11 = var13.isSystemDM;
                            var11 = var11.bind(var13)();
                            var4['isSystemDM'] = var11;
                            var11 = _closure3_slot1;
                            var11 = var12 === var11;
                            var4['isFirst'] = var11;
                            var11 = _closure2_slot5;
                            var4['canAddNewReactions'] = var11;
                            var4 = var9.bind(var10)(var4);
                            var9 = var6.bind(var7)();
                            var4 = var9.done;
                            var5 = var9;
                            if(!var4) { _fun0010_ip = 90; continue _fun0010 }
case 89:
                            var2 = _closure3_slot1;
                            var4 = var2.id;
                            var3 = _closure2_slot1;
                            var3 = var3.revealedMessageId;
                            var3 = var4 === var3;
                            var1['revealed'] = var3;
                            var2 = var2.id;
                            var1['context'] = var2;
                            return var1;
                        }
                    };
                    var11 = {'roleStyle': null, 'message': null, 'isFirst': true, 'content': null, 'text': '', 'revealed': false};
                    var7 = _closure2_slot8;
                    var11['roleStyle'] = var7;
                    var11['message'] = var9;
                    var19 = true;
                    var7 = new Array(0);
                    var11['content'] = var7;
                    var12 = false;
                    var10 = _closure2_slot14;
                    var7 = var10.length;
                    var7 = var7 - var20;
                    var7 = var10[var7];
                    var15 = var9.hasFlag;
                    var10 = _closure1_slot10;
                    var10 = var10.HIDDEN_SUSPENDED_USER;
                    var10 = var15.bind(var9)(var10);
                    if(var10) { _fun0009_ip = 94; continue _fun0009 }
case 95:
                    var10 = var9.blocked;
                    if(var10) { _fun0009_ip = 96; continue _fun0009 }
case 97:
                    var10 = var9.ignored;
                    if(var10) { _fun0009_ip = 98; continue _fun0009 }
case 99:
                    var10 = _closure1_slot11;
                    var18 = var10.bind(var8)(var14);
                    var14 = var18.bind(var8)();
                    var10 = var14.done;
                    var17 = 12;
                    var16 = 10;
                    var15 = 11;
                    if(var10) { _fun0009_ip = 100; continue _fun0009 }
case 101:
                    var24 = var14.value;
                    var29 = var24 !== var9;
                    var23 = _closure1_slot4;
                    var22 = var23.isEditing;
                    var10 = _closure2_slot0;
                    var21 = var10.id;
                    var10 = var24.id;
                    var25 = var22.bind(var23)(var21, var10);
                    if(var25) { _fun0009_ip = 102; continue _fun0009 }
case 103:
                    var21 = _closure2_slot3;
                    var10 = var24.id;
                    var25 = var21 === var10;
case 102:
                    var23 = _closure1_slot3;
                    var22 = var23.getPushFeedback;
                    var21 = var24.channel_id;
                    var10 = var24.id;
                    var28 = var22.bind(var23)(var21, var10);
                    var22 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var21 = var10[var16];
                    var23 = var22.bind(var8)(var21);
                    var22 = var23.canReplyToMessage;
                    var21 = _closure2_slot0;
                    var27 = var22.bind(var23)(var21, var24);
                    var21 = _closure1_slot1;
                    var10 = var10[var15];
                    var21 = var21.bind(var8)(var10);
                    var10 = _closure2_slot4;
                    var26 = var21.bind(var8)(var24, var10);
                    if(!var26) { _fun0009_ip = 104; continue _fun0009 }
case 105:
                    var21 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var17];
                    var22 = var21.bind(var8)(var10);
                    var21 = var22.isNonModInLockedThread;
                    var10 = _closure2_slot0;
                    var10 = var21.bind(var22)(var10);
                    var26 = !var10;
case 104:
                    var22 = _closure2_slot15;
                    var21 = var22.hasOwnProperty;
                    var10 = var24.id;
                    var10 = var21.bind(var22)(var10);
                    if(var10) { _fun0009_ip = 106; continue _fun0009 }
case 107:
                    var10 = _closure2_slot19;
                    var23 = var10.bind(var8)(var24, var19);
                    _fun0009_ip = 108; continue _fun0009;
case 106:
                    var21 = _closure2_slot15;
                    var10 = var24.id;
                    var22 = var21[var10];
                    var21 = _closure2_slot7;
                    var10 = var21.determineChangeTypeForUploadProgress;
                    var23 = var10.bind(var21)(var22);
case 108:
                    var10 = _closure2_slot6;
                    var10 = var13 != var10;
                    if(!var10) { _fun0009_ip = 109; continue _fun0009 }
case 110:
                    var21 = _closure2_slot6;
                    var22 = var21.endId;
                    var21 = var24.id;
                    var10 = var22 === var21;
case 109:
                    if(!var10) { _fun0009_ip = 111; continue _fun0009 }
case 112:
                    var21 = _closure2_slot6;
                    var21 = var21.count;
                    var10 = var21 > var20;
case 111:
                    if(!var10) { _fun0009_ip = 113; continue _fun0009 }
case 114:
                    var22 = _closure2_slot14;
                    var21 = var22.push;
                    var10 = {};
                    var30 = _closure1_slot9;
                    var30 = var30.SUMMARY;
                    var10['rowType'] = var30;
                    var30 = _closure2_slot19;
                    var30 = var30.bind(var8)(var24);
                    var10['changeType'] = var30;
                    var30 = _closure2_slot8;
                    var10['roleStyle'] = var30;
                    var30 = _closure2_slot6;
                    var10['summary'] = var30;
                    var10['isBeforeContent'] = var12;
                    var10 = var21.bind(var22)(var10);
case 113:
                    var22 = _closure2_slot14;
                    var21 = var22.push;
                    var10 = {};
                    var30 = _closure2_slot8;
                    var10['roleStyle'] = var30;
                    var10['message'] = var24;
                    var31 = _closure2_slot0;
                    var30 = var31.isSystemDM;
                    var30 = var30.bind(var31)();
                    var10['isSystemDM'] = var30;
                    var30 = var24 === var9;
                    var10['isFirst'] = var30;
                    var10['isEditing'] = var25;
                    var25 = !var29;
                    if(var29) { _fun0009_ip = 115; continue _fun0009 }
case 116:
                    var29 = _closure2_slot11;
                    var25 = !var29;
case 115:
                    if(!var25) { _fun0009_ip = 117; continue _fun0009 }
case 118:
                    var29 = var3;
                    if(var29) { _fun0009_ip = 119; continue _fun0009 }
case 120:
                    var29 = var2;
case 119:
                    if(var29) { _fun0009_ip = 121; continue _fun0009 }
case 122:
                    var29 = var1;
case 121:
                    var25 = var29;
case 117:
                    var10['separatorBefore'] = var25;
                    var25 = _closure2_slot5;
                    var10['canAddNewReactions'] = var25;
                    var25 = _closure2_slot11;
                    var10['renderContentOnly'] = var25;
                    var29 = var13 == var28;
                    var25 = undefined;
                    if(var29) { _fun0009_ip = 123; continue _fun0009 }
case 124:
                    var25 = var28.pushType;
case 123:
                    var10['pushFeedbackType'] = var25;
                    var25 = _closure2_slot11;
                    var25 = !var25;
                    if(!var25) { _fun0009_ip = 125; continue _fun0009 }
case 126:
                    var25 = var27;
case 125:
                    var10['canReply'] = var25;
                    var25 = _closure2_slot11;
                    var25 = !var25;
                    if(!var25) { _fun0009_ip = 127; continue _fun0009 }
case 128:
                    var25 = var26;
case 127:
                    var10['canEdit'] = var25;
                    var25 = _closure1_slot8;
                    var25 = var25.MESSAGE;
                    var10['rowType'] = var25;
                    var10['changeType'] = var23;
                    var23 = _closure2_slot12;
                    var25 = var13 == var23;
                    var23 = undefined;
                    if(var25) { _fun0009_ip = 129; continue _fun0009 }
case 130:
                    var27 = _closure2_slot12;
                    var26 = var27.has;
                    var25 = var24.id;
                    var23 = var26.bind(var27)(var25);
case 129:
                    var10['showContentInventoryEntryFallbackEmbed'] = var23;
                    var10 = var21.bind(var22)(var10);
                    var10 = _closure2_slot6;
                    var10 = var13 != var10;
                    if(!var10) { _fun0009_ip = 131; continue _fun0009 }
case 132:
                    var21 = _closure2_slot6;
                    var22 = var21.startId;
                    var21 = var24.id;
                    var10 = var22 === var21;
case 131:
                    if(!var10) { _fun0009_ip = 133; continue _fun0009 }
case 134:
                    var21 = _closure2_slot6;
                    var21 = var21.count;
                    var10 = var21 > var20;
case 133:
                    if(!var10) { _fun0009_ip = 135; continue _fun0009 }
case 136:
                    var22 = _closure2_slot14;
                    var21 = var22.push;
                    var10 = {};
                    var23 = _closure1_slot9;
                    var23 = var23.SUMMARY;
                    var10['rowType'] = var23;
                    var23 = _closure2_slot19;
                    var23 = var23.bind(var8)(var24);
                    var10['changeType'] = var23;
                    var23 = _closure2_slot8;
                    var10['roleStyle'] = var23;
                    var23 = _closure2_slot6;
                    var10['summary'] = var23;
                    var10['isBeforeContent'] = var19;
                    var10 = var21.bind(var22)(var10);
case 135:
                    var21 = var18.bind(var8)();
                    var10 = var21.done;
                    var14 = var21;
                    if(var10) { _fun0009_ip = 100; continue _fun0009 }
case 137:
                    _fun0009_ip = 101; continue _fun0009;
case 98:
                    if(!(var13 != var7)) { _fun0009_ip = 138; continue _fun0009 }
case 139:
                    var15 = var7.rowType;
                    var10 = _closure1_slot8;
                    var10 = var10.IGNORED_GROUP;
                    var14 = var7;
                    if(!(var15 !== var10)) { _fun0009_ip = 140; continue _fun0009 }
case 138:
                    var10 = _closure2_slot19;
                    var15 = var10.bind(var8)(var9);
                    var10 = _closure1_slot6;
                    var10 = var10.NOOP;
                    var10 = var15 === var10;
                    if(!var10) { _fun0009_ip = 141; continue _fun0009 }
case 142:
                    var17 = _closure2_slot7;
                    var16 = var17.getIgnored;
                    var10 = var16.bind(var17)(var9);
case 141:
                    var16 = var15;
                    if(!var10) { _fun0009_ip = 143; continue _fun0009 }
case 144:
                    var10 = _closure1_slot6;
                    var16 = var10.INSERT;
case 143:
                    var10 = {};
                    var33 = var10;
                    var32 = var11;
                    var15 = copyDataProperties(var33, var32);
                    var15 = _closure1_slot8;
                    var17 = var15.IGNORED_GROUP;
                    var15 = 'rowType';
                    var10[var15] = var17;
                    var15 = 'changeType';
                    var10[var15] = var16;
                    var16 = _closure2_slot14;
                    var15 = var16.push;
                    var15 = var15.bind(var16)(var10);
                    var14 = var10;
case 140:
                    var10 = var6.bind(var8)(var14);
                    var15 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var10 = 8;
                    var16 = var18[var10];
                    var16 = var15.bind(var8)(var16);
                    var17 = var16.intl;
                    var16 = var17.formatToPlainString;
                    var10 = var18[var10];
                    var10 = var15.bind(var8)(var10);
                    var10 = var10.t;
                    var15 = var10.VFWjc+;
                    var10 = {};
                    var18 = var14.content;
                    var18 = var18.length;
                    var10['count'] = var18;
                    var10 = var16.bind(var17)(var15, var10);
                    var14['text'] = var10;
                    _fun0009_ip = 100; continue _fun0009;
case 96:
                    if(!(var13 != var7)) { _fun0009_ip = 145; continue _fun0009 }
case 146:
                    var15 = var7.rowType;
                    var10 = _closure1_slot8;
                    var10 = var10.BLOCKED_GROUP;
                    var14 = var7;
                    if(!(var15 !== var10)) { _fun0009_ip = 147; continue _fun0009 }
case 145:
                    var10 = _closure2_slot19;
                    var15 = var10.bind(var8)(var9);
                    var10 = _closure1_slot6;
                    var10 = var10.NOOP;
                    var10 = var15 === var10;
                    if(!var10) { _fun0009_ip = 148; continue _fun0009 }
case 149:
                    var17 = _closure2_slot7;
                    var16 = var17.getBlocked;
                    var10 = var16.bind(var17)(var9);
case 148:
                    var16 = var15;
                    if(!var10) { _fun0009_ip = 150; continue _fun0009 }
case 151:
                    var10 = _closure1_slot6;
                    var16 = var10.INSERT;
case 150:
                    var10 = {};
                    var33 = var10;
                    var32 = var11;
                    var15 = copyDataProperties(var33, var32);
                    var15 = _closure1_slot8;
                    var17 = var15.BLOCKED_GROUP;
                    var15 = 'rowType';
                    var10[var15] = var17;
                    var15 = 'changeType';
                    var10[var15] = var16;
                    var16 = _closure2_slot14;
                    var15 = var16.push;
                    var15 = var15.bind(var16)(var10);
                    var14 = var10;
case 147:
                    var10 = var6.bind(var8)(var14);
                    var15 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var10 = 8;
                    var16 = var18[var10];
                    var16 = var15.bind(var8)(var16);
                    var17 = var16.intl;
                    var16 = var17.formatToPlainString;
                    var10 = var18[var10];
                    var10 = var15.bind(var8)(var10);
                    var10 = var10.t;
                    var15 = var10.+FcYM/;
                    var10 = {};
                    var18 = var14.content;
                    var18 = var18.length;
                    var10['count'] = var18;
                    var10 = var16.bind(var17)(var15, var10);
                    var14['text'] = var10;
                    _fun0009_ip = 100; continue _fun0009;
case 94:
                    if(!(var13 != var7)) { _fun0009_ip = 152; continue _fun0009 }
case 153:
                    var14 = var7.rowType;
                    var10 = _closure1_slot8;
                    var10 = var10.SUSPENDED_USER_GROUP;
                    if(!(var14 === var10)) { _fun0009_ip = 152; continue _fun0009 }
case 154:
                    var10 = var7.contextIds;
                    if(!(var13 == var10)) { _fun0009_ip = 155; continue _fun0009 }
case 156:
                    var10 = new Array(0);
case 155:
                    var7['contextIds'] = var10;
                    var14 = var7.contextIds;
                    var13 = var14.push;
                    var10 = var9.id;
                    var10 = var13.bind(var14)(var10);
                    _fun0009_ip = 157; continue _fun0009;
case 152:
                    var10 = _closure2_slot19;
                    var13 = var10.bind(var8)(var9);
                    var10 = {};
                    var33 = var10;
                    var32 = var11;
                    var11 = copyDataProperties(var33, var32);
                    var11 = _closure1_slot8;
                    var14 = var11.SUSPENDED_USER_GROUP;
                    var11 = 'rowType';
                    var10[var11] = var14;
                    var11 = 'changeType';
                    var10[var11] = var13;
                    var11 = 'canUncollapse';
                    var10[var11] = var12;
                    var11 = var9.id;
                    var12 = new Array(1);
                    var12[0] = var11;
                    var11 = 'contextIds';
                    var10[var11] = var12;
                    var12 = _closure2_slot14;
                    var11 = var12.push;
                    var11 = var11.bind(var12)(var10);
                    var7 = var10;
case 157:
                    var6 = var6.bind(var8)(var7);
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var6 = 8;
                    var11 = var13[var6];
                    var11 = var10.bind(var8)(var11);
                    var12 = var11.intl;
                    var11 = var12.formatToPlainString;
                    var6 = var13[var6];
                    var6 = var10.bind(var8)(var6);
                    var6 = var6.t;
                    var10 = var6.gLp+Wj;
                    var6 = {};
                    var13 = var7.content;
                    var13 = var13.length;
                    var6['count'] = var13;
                    var6 = var11.bind(var12)(var10, var6);
                    var7['text'] = var6;
case 100:
                    if(!var3) { _fun0009_ip = 158; continue _fun0009 }
case 159:
                    var3 = _closure2_slot11;
                    if(var3) { _fun0009_ip = 158; continue _fun0009 }
case 160:
                    var3 = _closure2_slot19;
                    var11 = var3.bind(var8)(var9);
                    var3 = _closure1_slot6;
                    var3 = var3.UPDATE;
                    if(!(var11 === var3)) { _fun0009_ip = 161; continue _fun0009 }
case 162:
                    var3 = _closure1_slot6;
                    var11 = var3.NOOP;
case 161:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 9;
                    var3 = var7[var3];
                    var10 = var6.bind(var8)(var3);
                    var7 = var10.dateFormat;
                    var6 = var9.timestamp;
                    var3 = 'LL';
                    var10 = var7.bind(var10)(var6, var3);
                    var7 = _closure2_slot14;
                    var6 = var7.push;
                    var3 = {};
                    var12 = _closure1_slot9;
                    var12 = var12.DAY;
                    var3['rowType'] = var12;
                    var3['changeType'] = var11;
                    var11 = _closure2_slot8;
                    var3['roleStyle'] = var11;
                    var3['text'] = var10;
                    var3 = var6.bind(var7)(var3);
case 158:
                    if(!var2) { _fun0009_ip = 163; continue _fun0009 }
case 164:
                    var3 = _closure2_slot11;
                    var2 = !var3;
case 163:
                    if(!var2) { _fun0009_ip = 165; continue _fun0009 }
case 166:
                    var6 = _closure2_slot14;
                    var3 = var6.push;
                    var2 = {};
                    var7 = _closure1_slot9;
                    var7 = var7.UNREAD;
                    var2['rowType'] = var7;
                    var7 = _closure2_slot19;
                    var7 = var7.bind(var8)(var9);
                    var2['changeType'] = var7;
                    var7 = _closure2_slot8;
                    var2['roleStyle'] = var7;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var7 = 8;
                    var9 = var12[var7];
                    var9 = var11.bind(var8)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var7 = var12[var7];
                    var7 = var11.bind(var8)(var7);
                    var7 = var7.t;
                    var7 = var7.q7hm3m;
                    var9 = var9.bind(var10)(var7);
                    var7 = var9.toUpperCase;
                    var7 = var7.bind(var9)();
                    var2['text'] = var7;
                    var2 = var3.bind(var6)(var2);
case 165:
                    if(!var1) { _fun0009_ip = 167; continue _fun0009 }
case 168:
                    var2 = _closure2_slot11;
                    var1 = !var2;
case 167:
                    if(!var1) { _fun0009_ip = 64; continue _fun0009 }
case 169:
                    var3 = _closure2_slot14;
                    var2 = var3.push;
                    var1 = {};
                    var6 = _closure1_slot7;
                    var6 = var6.LOAD_BEFORE;
                    var1['rowType'] = var6;
                    var6 = _closure2_slot9;
                    var7 = _closure1_slot6;
                    if(var6) { _fun0009_ip = 170; continue _fun0009 }
case 171:
                    var6 = var7.NOOP;
                    _fun0009_ip = 172; continue _fun0009;
case 170:
                    var6 = var7.UPDATE;
case 172:
                    var1['changeType'] = var6;
                    var6 = _closure2_slot8;
                    var1['roleStyle'] = var6;
                    var5 = _closure2_slot1;
                    var5 = var5.loadingMore;
                    var1['isLoading'] = var5;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 8;
                    var5 = var9[var4];
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.t;
                    var4 = var4.XBlaiC;
                    var4 = var5.bind(var6)(var4);
                    var1['text'] = var4;
                    var1 = var2.bind(var3)(var1);
case 64:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var9.bind(var2)(var3);
            var3 = var2.length;
            var2 = 0;
            var2 = var2 === var3;
            if(!var2) { _fun0004_ip = 173; continue _fun0004 }
case 174:
            var3 = var5.loadingMore;
            var2 = !var3;
case 173:
            if(!var2) { _fun0004_ip = 175; continue _fun0004 }
case 176:
            var3 = var5.hasMoreAfter;
            if(var3) { _fun0004_ip = 177; continue _fun0004 }
case 178:
            var3 = var5.hasMoreBefore;
case 177:
            var2 = var3;
case 175:
            if(!var2) { _fun0004_ip = 179; continue _fun0004 }
case 180:
            var3 = var1.push;
            var2 = {};
            var9 = var5.hasMoreBefore;
            var10 = _closure1_slot7;
            if(var9) { _fun0004_ip = 181; continue _fun0004 }
case 182:
            var9 = var10.LOAD_AFTER;
            _fun0004_ip = 183; continue _fun0004;
case 181:
            var9 = var10.LOAD_BEFORE;
case 183:
            var2['rowType'] = var9;
            var9 = _closure1_slot6;
            if(var7) { _fun0004_ip = 184; continue _fun0004 }
case 185:
            var7 = var9.NOOP;
            _fun0004_ip = 186; continue _fun0004;
case 184:
            var7 = var9.UPDATE;
case 186:
            var2['changeType'] = var7;
            var2['roleStyle'] = var6;
            var5 = var5.loadingMore;
            var2['isLoading'] = var5;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 8;
            var5 = var9[var4];
            var5 = var7.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var4 = var4.t;
            var4 = var4.XBlaiC;
            var4 = var5.bind(var6)(var4);
            var2['text'] = var4;
            var2 = var3.bind(var1)(var2);
case 179:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();