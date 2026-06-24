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
            var2 = var3["@@iterator"];
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
            var1 = var1.unloadableContentEntryMessageIds;
            var _closure2_slot12 = var1;
            var8 = undefined;
            var _closure2_slot15 = var8;
            var1 = function unreadFilter(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = arg1;
                    var2 = _closure2_slot0;
                    var1 = var2.isForumPost;
                    var1 = var1.bind(var2)();
                    var5 = var4.id;
                    var2 = _closure2_slot2;
                    var5 = var5 === var2;
                    if(var1) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var1 = var5;
                    _fun0005_ip = 38; continue _fun0005;
case 36:
                    var2 = var5;
                    if(!var5) { _fun0005_ip = 39; continue _fun0005 }
case 40:
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
case 39:
                    var1 = var2;
case 38:
                    return var1;
                }
            };
            var _closure2_slot16 = var1;
            var1 = function insertMessage(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure2_slot15;
                    var2 = 0;
                    var3 = var3[var2];
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                    var2 = _closure2_slot16;
                    var7 = undefined;
                    var2 = var2.bind(var7)(var4);
                    if(var2) { _fun0006_ip = 41; continue _fun0006 }
case 37:
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
                    if(var2) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                    var2 = var3.unshift;
                    var2 = var2.bind(var3)(var4);
                    _fun0006_ip = 45; continue _fun0006;
case 43:
                    var5 = _closure2_slot15;
                    var3 = var5.unshift;
                    var2 = new Array(1);
                    var2[0] = var4;
                    var2 = var3.bind(var5)(var2);
                    _fun0006_ip = 45; continue _fun0006;
case 41:
                    var3 = _closure2_slot15;
                    var2 = var3.unshift;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var1 = var2.bind(var3)(var1);
case 45:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure2_slot17 = var1;
            var1 = function determineChangeType(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = arguments[1];
                    var1 = undefined;
                    if(!(var4 === var1)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                    var4 = false;
case 46:
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
            var _closure2_slot18 = var1;
            var1 = new Array(0);
            var _closure2_slot13 = var1;
            var12 = {};
            var _closure2_slot14 = var12;
            var9 = _closure1_slot11;
            var2 = var10.slice;
            var10 = var2.bind(var10)();
            var2 = var10.reverse;
            var2 = var2.bind(var10)();
            var11 = var9.bind(var8)(var2);
            var9 = var11.bind(var8)();
            var2 = var9.done;
            var10 = null;
            if(var2) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var13 = var9.value;
            var15 = _closure1_slot5;
            var14 = var15.getMessageForFile;
            var2 = var13.id;
            var2 = var14.bind(var15)(var2);
            var15 = var10 == var2;
            var14 = undefined;
            if(var15) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var14 = var2.nonce;
case 50:
            if(!(var10 != var14)) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var2 = var2.nonce;
            var12[var2] = var13;
case 52:
            var13 = var11.bind(var8)();
            var2 = var13.done;
            var9 = var13;
            if(!var2) { _fun0004_ip = 49; continue _fun0004 }
case 48:
            var2 = new Array(0);
            _closure2_slot15 = var2;
            var10 = var5.forEach;
            var9 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
                    if(!var5) { _fun0008_ip = 54; continue _fun0008 }
case 28:
                    var8 = var2.position;
                    var7 = 'before';
                    var5 = var7 === var8;
case 54:
                    if(!var5) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                    var7 = _closure2_slot17;
                    var5 = var2.message;
                    var5 = var7.bind(var1)(var5);
                    var7 = _closure2_slot2;
                    var5 = var6.id;
                    if(!(var7 === var5)) { _fun0008_ip = 55; continue _fun0008 }
case 57:
                    var5 = var2.message;
                    var5 = var5.id;
                    _closure2_slot2 = var5;
case 55:
                    var5 = _closure2_slot17;
                    var5 = var5.bind(var1)(var6);
                    var4 = var4 != var2;
                    if(!var4) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                    var6 = var2.position;
                    var5 = 'after';
                    var4 = var5 === var6;
case 58:
                    if(!var4) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                    var3 = _closure2_slot17;
                    var2 = var2.message;
                    var2 = var3.bind(var1)(var2);
case 60:
                    return var1;
                }
            };
            var9 = var10.bind(var5)(var9);
            var9 = var2.forEach;
            var3 = function(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var14 = arg1;
                    var4 = arg2;
                    var _closure3_slot0 = var14;
                    var7 = function processHiddenMessageRow(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var1 = arg1;
                            var4 = _closure1_slot11;
                            var3 = _closure3_slot0;
                            var7 = undefined;
                            var6 = var4.bind(var7)(var3);
                            var5 = var6.bind(var7)();
                            var4 = var5.done;
                            if(var4) { _fun0010_ip = 62; continue _fun0010 }
case 63:
                            var12 = var5.value;
                            var4 = _closure2_slot18;
                            var9 = var4.bind(var7)(var12);
                            var4 = _closure1_slot6;
                            var4 = var4.NOOP;
                            var4 = var9 !== var4;
                            if(!var4) { _fun0010_ip = 64; continue _fun0010 }
case 65:
                            var10 = var1.changeType;
                            var9 = _closure1_slot6;
                            var9 = var9.NOOP;
                            var4 = var10 === var9;
case 64:
                            if(!var4) { _fun0010_ip = 66; continue _fun0010 }
case 11:
                            var4 = _closure1_slot6;
                            var4 = var4.UPDATE;
                            var1['changeType'] = var4;
case 66:
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
                            if(!var11) { _fun0010_ip = 20; continue _fun0010 }
case 67:
                            var13 = var12.isSystemDM;
                            var11 = var13.bind(var12)();
case 20:
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
                            if(!var4) { _fun0010_ip = 63; continue _fun0010 }
case 62:
                            var4 = _closure3_slot1;
                            var4 = var4.id;
                            var3 = _closure2_slot1;
                            var3 = var3.revealedMessageId;
                            var3 = var4 === var3;
                            var1['revealed'] = var3;
                            var2 = _closure3_slot1;
                            var2 = var2.id;
                            var1['context'] = var2;
                            return var1;
                        }
                    };
                    var2 = var14.length;
                    var21 = 1;
                    var2 = var2 - var21;
                    var9 = var14[var2];
                    var _closure3_slot1 = var9;
                    var1 = _closure2_slot15;
                    var1 = var1.length;
                    var1 = var1 - var21;
                    var11 = var4 === var1;
                    var5 = 0;
                    var1 = var5 === var4;
                    if(!var1) { _fun0009_ip = 68; continue _fun0009 }
case 69:
                    var2 = _closure2_slot1;
                    var1 = var2.hasMoreAfter;
case 68:
                    if(!var1) { _fun0009_ip = 70; continue _fun0009 }
case 71:
                    var3 = _closure2_slot13;
                    var2 = var3.push;
                    var1 = {};
                    var10 = _closure1_slot7;
                    var10 = var10.LOAD_AFTER;
                    var1['rowType'] = var10;
                    var10 = _closure2_slot9;
                    var12 = _closure1_slot6;
                    if(var10) { _fun0009_ip = 72; continue _fun0009 }
case 73:
                    var10 = var12.NOOP;
                    _fun0009_ip = 74; continue _fun0009;
case 72:
                    var10 = var12.UPDATE;
case 74:
                    var1['changeType'] = var10;
                    var10 = _closure2_slot8;
                    var1['roleStyle'] = var10;
                    var10 = _closure2_slot1;
                    var10 = var10.loadingMore;
                    var1['isLoading'] = var10;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var8 = 8;
                    var10 = var16[var8];
                    var13 = undefined;
                    var10 = var15.bind(var13)(var10);
                    var12 = var10.intl;
                    var10 = var12.string;
                    var8 = var16[var8];
                    var8 = var15.bind(var13)(var8);
                    var8 = var8.t;
                    var8 = var8.XBlaiC;
                    var8 = var10.bind(var12)(var8);
                    var1['text'] = var8;
                    var1 = var2.bind(var3)(var1);
case 70:
                    var1 = _closure2_slot1;
                    var2 = var1.hasMoreBefore;
                    if(!var2) { _fun0009_ip = 18; continue _fun0009 }
case 75:
                    var2 = var11;
case 18:
                    var3 = _closure2_slot16;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var9);
                    var10 = null;
                    var12 = null;
                    if(var11) { _fun0009_ip = 25; continue _fun0009 }
case 76:
                    var8 = _closure2_slot15;
                    var4 = var4 + var21;
                    var4 = var8[var4];
                    var4 = var4[var5];
                    var12 = var4.timestamp;
case 25:
                    if(var11) { _fun0009_ip = 77; continue _fun0009 }
case 52:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 9;
                    var4 = var8[var4];
                    var8 = var5.bind(var1)(var4);
                    var5 = var8.isSameDay;
                    var4 = var9.timestamp;
                    var5 = var5.bind(var8)(var4, var12);
                    var4 = true;
                    if(!var5) { _fun0009_ip = 78; continue _fun0009 }
case 77:
                    var8 = _closure2_slot0;
                    var5 = var8.isDM;
                    var5 = var5.bind(var8)();
                    if(!var5) { _fun0009_ip = 79; continue _fun0009 }
case 80:
                    var8 = _closure2_slot1;
                    var8 = var8.hasMoreBefore;
                    var5 = !var8;
case 79:
                    if(!var5) { _fun0009_ip = 81; continue _fun0009 }
case 82:
                    var5 = var11;
case 81:
                    if(var5) { _fun0009_ip = 83; continue _fun0009 }
case 84:
                    var12 = _closure2_slot0;
                    var8 = var12.isThread;
                    var8 = var8.bind(var12)();
                    if(!var8) { _fun0009_ip = 85; continue _fun0009 }
case 86:
                    var13 = _closure2_slot0;
                    var12 = var13.isForumPost;
                    var12 = var12.bind(var13)();
                    var8 = !var12;
case 85:
                    if(!var8) { _fun0009_ip = 87; continue _fun0009 }
case 88:
                    var12 = _closure2_slot1;
                    var12 = var12.hasMoreBefore;
                    var8 = !var12;
case 87:
                    if(!var8) { _fun0009_ip = 89; continue _fun0009 }
case 90:
                    var8 = var11;
case 89:
                    var5 = var8;
case 83:
                    var4 = false;
                    if(!var5) { _fun0009_ip = 78; continue _fun0009 }
case 91:
                    var4 = true;
case 78:
                    var11 = {'roleStyle': null, 'message': null, 'isFirst': true, 'content': null, 'text': '', 'revealed': false};
                    var5 = _closure2_slot8;
                    var11['roleStyle'] = var5;
                    var11['message'] = var9;
                    var20 = true;
                    var5 = new Array(0);
                    var11['content'] = var5;
                    var12 = false;
                    var8 = _closure2_slot13;
                    var5 = var8.length;
                    var5 = var5 - var21;
                    var8 = var8[var5];
                    var15 = var9.hasFlag;
                    var13 = _closure1_slot10;
                    var13 = var13.HIDDEN_SUSPENDED_USER;
                    var13 = var15.bind(var9)(var13);
                    if(var13) { _fun0009_ip = 92; continue _fun0009 }
case 93:
                    var13 = var9.blocked;
                    if(var13) { _fun0009_ip = 94; continue _fun0009 }
case 95:
                    var13 = var9.ignored;
                    if(var13) { _fun0009_ip = 96; continue _fun0009 }
case 97:
                    var13 = _closure1_slot11;
                    var19 = var13.bind(var1)(var14);
                    var14 = var19.bind(var1)();
                    var13 = var14.done;
                    var18 = 5;
                    var17 = 12;
                    var16 = 10;
                    var15 = 11;
                    if(var13) { _fun0009_ip = 98; continue _fun0009 }
case 99:
                    var25 = var14.value;
                    var30 = var25 !== var9;
                    var24 = _closure1_slot4;
                    var23 = var24.isEditing;
                    var13 = _closure2_slot0;
                    var22 = var13.id;
                    var13 = var25.id;
                    var26 = var23.bind(var24)(var22, var13);
                    if(var26) { _fun0009_ip = 100; continue _fun0009 }
case 101:
                    var22 = _closure2_slot3;
                    var13 = var25.id;
                    var26 = var22 === var13;
case 100:
                    var24 = _closure1_slot3;
                    var23 = var24.getPushFeedback;
                    var22 = var25.channel_id;
                    var13 = var25.id;
                    var29 = var23.bind(var24)(var22, var13);
                    var23 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var22 = var13[var16];
                    var24 = var23.bind(var1)(var22);
                    var23 = var24.canReplyToMessage;
                    var22 = _closure2_slot0;
                    var28 = var23.bind(var24)(var22, var25);
                    var22 = _closure1_slot1;
                    var13 = var13[var15];
                    var22 = var22.bind(var1)(var13);
                    var13 = _closure2_slot4;
                    var27 = var22.bind(var1)(var25, var13);
                    if(!var27) { _fun0009_ip = 102; continue _fun0009 }
case 103:
                    var22 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var13 = var13[var17];
                    var23 = var22.bind(var1)(var13);
                    var22 = var23.isNonModInLockedThread;
                    var13 = _closure2_slot0;
                    var13 = var22.bind(var23)(var13);
                    var27 = !var13;
case 102:
                    var23 = _closure2_slot14;
                    var22 = var23.hasOwnProperty;
                    var13 = var25.id;
                    var13 = var22.bind(var23)(var13);
                    if(var13) { _fun0009_ip = 104; continue _fun0009 }
case 105:
                    var13 = _closure2_slot18;
                    var24 = var13.bind(var1)(var25, var20);
                    _fun0009_ip = 106; continue _fun0009;
case 104:
                    var22 = _closure2_slot14;
                    var13 = var25.id;
                    var23 = var22[var13];
                    var22 = _closure2_slot7;
                    var13 = var22.determineChangeTypeForUploadProgress;
                    var24 = var13.bind(var22)(var23);
case 106:
                    var13 = _closure2_slot6;
                    var13 = var10 != var13;
                    if(!var13) { _fun0009_ip = 107; continue _fun0009 }
case 108:
                    var22 = _closure2_slot6;
                    var23 = var22.endId;
                    var22 = var25.id;
                    var13 = var23 === var22;
case 107:
                    if(!var13) { _fun0009_ip = 109; continue _fun0009 }
case 110:
                    var22 = _closure2_slot6;
                    var22 = var22.count;
                    var13 = var22 > var21;
case 109:
                    if(!var13) { _fun0009_ip = 111; continue _fun0009 }
case 112:
                    var23 = _closure2_slot13;
                    var22 = var23.push;
                    var13 = {};
                    var31 = _closure1_slot9;
                    var31 = var31.SUMMARY;
                    var13['rowType'] = var31;
                    var31 = _closure2_slot18;
                    var31 = var31.bind(var1)(var25);
                    var13['changeType'] = var31;
                    var31 = _closure2_slot8;
                    var13['roleStyle'] = var31;
                    var31 = _closure2_slot6;
                    var13['summary'] = var31;
                    var13['isBeforeContent'] = var12;
                    var13 = var22.bind(var23)(var13);
case 111:
                    var23 = _closure2_slot13;
                    var22 = var23.push;
                    var13 = {};
                    var31 = _closure2_slot8;
                    var13['roleStyle'] = var31;
                    var13['message'] = var25;
                    var32 = _closure2_slot0;
                    var31 = var32.isSystemDM;
                    var31 = var31.bind(var32)();
                    if(!var31) { _fun0009_ip = 113; continue _fun0009 }
case 114:
                    var32 = var25.isSystemDM;
                    var31 = var32.bind(var25)();
case 113:
                    var13['isSystemDM'] = var31;
                    var31 = var25 === var9;
                    var13['isFirst'] = var31;
                    var13['isEditing'] = var26;
                    var26 = !var30;
                    if(var30) { _fun0009_ip = 115; continue _fun0009 }
case 116:
                    var30 = _closure2_slot11;
                    var26 = !var30;
case 115:
                    if(!var26) { _fun0009_ip = 117; continue _fun0009 }
case 118:
                    var30 = var4;
                    if(var30) { _fun0009_ip = 119; continue _fun0009 }
case 120:
                    var30 = var3;
case 119:
                    if(var30) { _fun0009_ip = 121; continue _fun0009 }
case 122:
                    var30 = var2;
case 121:
                    var26 = var30;
case 117:
                    var13['separatorBefore'] = var26;
                    var26 = _closure2_slot5;
                    var13['canAddNewReactions'] = var26;
                    var30 = _closure2_slot0;
                    var26 = var30.isForumPost;
                    var26 = var26.bind(var30)();
                    if(!var26) { _fun0009_ip = 123; continue _fun0009 }
case 124:
                    var31 = var25.id;
                    var32 = _closure1_slot1;
                    var30 = _closure1_slot2;
                    var30 = var30[var18];
                    var33 = var32.bind(var1)(var30);
                    var32 = var33.castChannelIdAsMessageId;
                    var30 = _closure2_slot0;
                    var30 = var30.id;
                    var30 = var32.bind(var33)(var30);
                    var26 = var31 === var30;
case 123:
                    var13['alwaysShowAddReaction'] = var26;
                    var26 = _closure2_slot11;
                    var13['renderContentOnly'] = var26;
                    var30 = var10 == var29;
                    var26 = undefined;
                    if(var30) { _fun0009_ip = 125; continue _fun0009 }
case 126:
                    var26 = var29.pushType;
case 125:
                    var13['pushFeedbackType'] = var26;
                    var26 = _closure2_slot11;
                    var26 = !var26;
                    if(!var26) { _fun0009_ip = 127; continue _fun0009 }
case 128:
                    var26 = var28;
case 127:
                    var13['canReply'] = var26;
                    var26 = _closure2_slot11;
                    var26 = !var26;
                    if(!var26) { _fun0009_ip = 129; continue _fun0009 }
case 130:
                    var26 = var27;
case 129:
                    var13['canEdit'] = var26;
                    var26 = _closure1_slot8;
                    var26 = var26.MESSAGE;
                    var13['rowType'] = var26;
                    var13['changeType'] = var24;
                    var24 = _closure2_slot12;
                    var26 = var10 == var24;
                    var24 = undefined;
                    if(var26) { _fun0009_ip = 131; continue _fun0009 }
case 132:
                    var28 = _closure2_slot12;
                    var27 = var28.has;
                    var26 = var25.id;
                    var24 = var27.bind(var28)(var26);
case 131:
                    var13['showContentInventoryEntryFallbackEmbed'] = var24;
                    var13 = var22.bind(var23)(var13);
                    var13 = _closure2_slot6;
                    var13 = var10 != var13;
                    if(!var13) { _fun0009_ip = 133; continue _fun0009 }
case 134:
                    var22 = _closure2_slot6;
                    var23 = var22.startId;
                    var22 = var25.id;
                    var13 = var23 === var22;
case 133:
                    if(!var13) { _fun0009_ip = 135; continue _fun0009 }
case 136:
                    var22 = _closure2_slot6;
                    var22 = var22.count;
                    var13 = var22 > var21;
case 135:
                    if(!var13) { _fun0009_ip = 137; continue _fun0009 }
case 138:
                    var23 = _closure2_slot13;
                    var22 = var23.push;
                    var13 = {};
                    var24 = _closure1_slot9;
                    var24 = var24.SUMMARY;
                    var13['rowType'] = var24;
                    var24 = _closure2_slot18;
                    var24 = var24.bind(var1)(var25);
                    var13['changeType'] = var24;
                    var24 = _closure2_slot8;
                    var13['roleStyle'] = var24;
                    var24 = _closure2_slot6;
                    var13['summary'] = var24;
                    var13['isBeforeContent'] = var20;
                    var13 = var22.bind(var23)(var13);
case 137:
                    var22 = var19.bind(var1)();
                    var13 = var22.done;
                    var14 = var22;
                    if(var13) { _fun0009_ip = 98; continue _fun0009 }
case 139:
                    _fun0009_ip = 99; continue _fun0009;
case 96:
                    if(!(var10 != var8)) { _fun0009_ip = 140; continue _fun0009 }
case 141:
                    var15 = var8.rowType;
                    var13 = _closure1_slot8;
                    var13 = var13.IGNORED_GROUP;
                    var14 = var8;
                    if(!(var15 !== var13)) { _fun0009_ip = 142; continue _fun0009 }
case 140:
                    var13 = _closure2_slot18;
                    var15 = var13.bind(var1)(var9);
                    var13 = _closure1_slot6;
                    var13 = var13.NOOP;
                    var13 = var15 === var13;
                    if(!var13) { _fun0009_ip = 143; continue _fun0009 }
case 144:
                    var17 = _closure2_slot7;
                    var16 = var17.getIgnored;
                    var13 = var16.bind(var17)(var9);
case 143:
                    var16 = var15;
                    if(!var13) { _fun0009_ip = 145; continue _fun0009 }
case 146:
                    var13 = _closure1_slot6;
                    var16 = var13.INSERT;
case 145:
                    var13 = {};
                    var35 = var13;
                    var34 = var11;
                    var15 = copyDataProperties(var35, var34);
                    var15 = _closure1_slot8;
                    var17 = var15.IGNORED_GROUP;
                    var15 = 'rowType';
                    var13[14] = var17;
                    var15 = 'changeType';
                    var13[14] = var16;
                    var16 = _closure2_slot13;
                    var15 = var16.push;
                    var15 = var15.bind(var16)(var13);
                    var14 = var13;
case 142:
                    var13 = var7.bind(var1)(var14);
                    var15 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var13 = 8;
                    var16 = var18[var13];
                    var16 = var15.bind(var1)(var16);
                    var17 = var16.intl;
                    var16 = var17.formatToPlainString;
                    var13 = var18[var13];
                    var13 = var15.bind(var1)(var13);
                    var13 = var13.t;
                    var15 = var13.VFWjc+;
                    var13 = {};
                    var18 = var14.content;
                    var18 = var18.length;
                    var13['count'] = var18;
                    var13 = var16.bind(var17)(var15, var13);
                    var14['text'] = var13;
                    _fun0009_ip = 98; continue _fun0009;
case 94:
                    if(!(var10 != var8)) { _fun0009_ip = 147; continue _fun0009 }
case 148:
                    var15 = var8.rowType;
                    var13 = _closure1_slot8;
                    var13 = var13.BLOCKED_GROUP;
                    var14 = var8;
                    if(!(var15 !== var13)) { _fun0009_ip = 149; continue _fun0009 }
case 147:
                    var13 = _closure2_slot18;
                    var15 = var13.bind(var1)(var9);
                    var13 = _closure1_slot6;
                    var13 = var13.NOOP;
                    var13 = var15 === var13;
                    if(!var13) { _fun0009_ip = 150; continue _fun0009 }
case 151:
                    var17 = _closure2_slot7;
                    var16 = var17.getBlocked;
                    var13 = var16.bind(var17)(var9);
case 150:
                    var16 = var15;
                    if(!var13) { _fun0009_ip = 152; continue _fun0009 }
case 153:
                    var13 = _closure1_slot6;
                    var16 = var13.INSERT;
case 152:
                    var13 = {};
                    var35 = var13;
                    var34 = var11;
                    var15 = copyDataProperties(var35, var34);
                    var15 = _closure1_slot8;
                    var17 = var15.BLOCKED_GROUP;
                    var15 = 'rowType';
                    var13[14] = var17;
                    var15 = 'changeType';
                    var13[14] = var16;
                    var16 = _closure2_slot13;
                    var15 = var16.push;
                    var15 = var15.bind(var16)(var13);
                    var14 = var13;
case 149:
                    var13 = var7.bind(var1)(var14);
                    var15 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var13 = 8;
                    var16 = var18[var13];
                    var16 = var15.bind(var1)(var16);
                    var17 = var16.intl;
                    var16 = var17.formatToPlainString;
                    var13 = var18[var13];
                    var13 = var15.bind(var1)(var13);
                    var13 = var13.t;
                    var15 = var13["+FcYM/"];
                    var13 = {};
                    var18 = var14.content;
                    var18 = var18.length;
                    var13['count'] = var18;
                    var13 = var16.bind(var17)(var15, var13);
                    var14['text'] = var13;
                    _fun0009_ip = 98; continue _fun0009;
case 92:
                    if(!(var10 != var8)) { _fun0009_ip = 154; continue _fun0009 }
case 155:
                    var13 = var8.rowType;
                    var10 = _closure1_slot8;
                    var10 = var10.SUSPENDED_USER_GROUP;
                    if(!(var13 !== var10)) { _fun0009_ip = 156; continue _fun0009 }
case 154:
                    var10 = _closure2_slot18;
                    var13 = var10.bind(var1)(var9);
                    var10 = {};
                    var35 = var10;
                    var34 = var11;
                    var11 = copyDataProperties(var35, var34);
                    var11 = _closure1_slot8;
                    var14 = var11.SUSPENDED_USER_GROUP;
                    var11 = 'rowType';
                    var10[10] = var14;
                    var11 = 'changeType';
                    var10[10] = var13;
                    var11 = 'canUncollapse';
                    var10[10] = var12;
                    var12 = _closure2_slot13;
                    var11 = var12.push;
                    var11 = var11.bind(var12)(var10);
                    var8 = var10;
case 156:
                    var7 = var7.bind(var1)(var8);
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 8;
                    var11 = var13[var7];
                    var11 = var10.bind(var1)(var11);
                    var12 = var11.intl;
                    var11 = var12.formatToPlainString;
                    var7 = var13[var7];
                    var7 = var10.bind(var1)(var7);
                    var7 = var7.t;
                    var10 = var7.rHRovo;
                    var7 = {};
                    var13 = var8.content;
                    var13 = var13.length;
                    var7['count'] = var13;
                    var7 = var11.bind(var12)(var10, var7);
                    var8['text'] = var7;
case 98:
                    if(!var4) { _fun0009_ip = 157; continue _fun0009 }
case 158:
                    var4 = _closure2_slot11;
                    if(var4) { _fun0009_ip = 157; continue _fun0009 }
case 159:
                    var4 = _closure2_slot18;
                    var11 = var4.bind(var1)(var9);
                    var4 = _closure1_slot6;
                    var4 = var4.UPDATE;
                    if(!(var11 === var4)) { _fun0009_ip = 160; continue _fun0009 }
case 161:
                    var4 = _closure1_slot6;
                    var11 = var4.NOOP;
case 160:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 9;
                    var4 = var8[var4];
                    var10 = var7.bind(var1)(var4);
                    var8 = var10.dateFormat;
                    var7 = var9.timestamp;
                    var4 = 'LL';
                    var10 = var8.bind(var10)(var7, var4);
                    var8 = _closure2_slot13;
                    var7 = var8.push;
                    var4 = {};
                    var12 = _closure1_slot9;
                    var12 = var12.DAY;
                    var4['rowType'] = var12;
                    var4['changeType'] = var11;
                    var11 = _closure2_slot8;
                    var4['roleStyle'] = var11;
                    var4['text'] = var10;
                    var4 = var7.bind(var8)(var4);
case 157:
                    if(!var3) { _fun0009_ip = 162; continue _fun0009 }
case 163:
                    var4 = _closure2_slot11;
                    var3 = !var4;
case 162:
                    if(!var3) { _fun0009_ip = 164; continue _fun0009 }
case 165:
                    var7 = _closure2_slot13;
                    var4 = var7.push;
                    var3 = {};
                    var8 = _closure1_slot9;
                    var8 = var8.UNREAD;
                    var3['rowType'] = var8;
                    var8 = _closure2_slot18;
                    var8 = var8.bind(var1)(var9);
                    var3['changeType'] = var8;
                    var8 = _closure2_slot8;
                    var3['roleStyle'] = var8;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 8;
                    var9 = var12[var8];
                    var9 = var11.bind(var1)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var12[var8];
                    var8 = var11.bind(var1)(var8);
                    var8 = var8.t;
                    var8 = var8.q7hm3m;
                    var9 = var9.bind(var10)(var8);
                    var8 = var9.toUpperCase;
                    var8 = var8.bind(var9)();
                    var3['text'] = var8;
                    var3 = var4.bind(var7)(var3);
case 164:
                    if(!var2) { _fun0009_ip = 166; continue _fun0009 }
case 167:
                    var3 = _closure2_slot11;
                    var2 = !var3;
case 166:
                    if(!var2) { _fun0009_ip = 168; continue _fun0009 }
case 169:
                    var4 = _closure2_slot13;
                    var3 = var4.push;
                    var2 = {};
                    var7 = _closure1_slot7;
                    var7 = var7.LOAD_BEFORE;
                    var2['rowType'] = var7;
                    var7 = _closure2_slot9;
                    var8 = _closure1_slot6;
                    if(var7) { _fun0009_ip = 170; continue _fun0009 }
case 171:
                    var7 = var8.NOOP;
                    _fun0009_ip = 172; continue _fun0009;
case 170:
                    var7 = var8.UPDATE;
case 172:
                    var2['changeType'] = var7;
                    var7 = _closure2_slot8;
                    var2['roleStyle'] = var7;
                    var6 = _closure2_slot1;
                    var6 = var6.loadingMore;
                    var2['isLoading'] = var6;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 8;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.t;
                    var5 = var5.XBlaiC;
                    var5 = var6.bind(var7)(var5);
                    var2['text'] = var5;
                    var2 = var3.bind(var4)(var2);
case 168:
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
            if(var9) { _fun0004_ip = 87; continue _fun0004 }
case 181:
            var9 = var10.LOAD_AFTER;
            _fun0004_ip = 89; continue _fun0004;
case 87:
            var9 = var10.LOAD_BEFORE;
case 89:
            var2['rowType'] = var9;
            var9 = _closure1_slot6;
            if(var7) { _fun0004_ip = 182; continue _fun0004 }
case 183:
            var7 = var9.NOOP;
            _fun0004_ip = 184; continue _fun0004;
case 182:
            var7 = var9.UPDATE;
case 184:
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