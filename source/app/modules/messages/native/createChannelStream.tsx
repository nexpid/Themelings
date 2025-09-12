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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot11;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot11;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
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
                    _fun0002_ip = 67; continue _fun0002;
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
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/createChannelStream.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createChannelStream(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
            var _closure2_slot16 = var8;
            var _closure2_slot17 = var8;
            var _closure2_slot18 = var8;
            var1 = new Array(0);
            var _closure2_slot13 = var1;
            var12 = {};
            var _closure2_slot14 = var12;
            var9 = _closure1_slot10;
            var2 = var10.slice;
            var10 = var2.bind(var10)();
            var2 = var10.reverse;
            var2 = var2.bind(var10)();
            var11 = var9.bind(var8)(var2);
            var9 = var11.bind(var8)();
            var2 = var9.done;
            var10 = null;
            if(var2) { _fun0004_ip = 286; continue _fun0004 }
 217:
            var13 = var9.value;
            var15 = _closure1_slot5;
            var14 = var15.getMessageForFile;
            var2 = var13.id;
            var2 = var14.bind(var15)(var2);
            var15 = var10 == var2;
            var14 = undefined;
            if(var15) { _fun0004_ip = 257; continue _fun0004 }
 251:
            var14 = var2.nonce;
 257:
            if(!(var10 != var14)) { _fun0004_ip = 271; continue _fun0004 }
 261:
            var2 = var2.nonce;
            var12[var2] = var13;
 271:
            var13 = var11.bind(var8)();
            var2 = var13.done;
            var9 = var13;
            if(!var2) { _fun0004_ip = 217; continue _fun0004 }
 286:
            var2 = function unreadFilter(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = arg1;
                    var2 = _closure2_slot0;
                    var1 = var2.isForumPost;
                    var1 = var1.bind(var2)();
                    var5 = var4.id;
                    var2 = _closure2_slot2;
                    var5 = var5 === var2;
                    if(var1) { _fun0005_ip = 41; continue _fun0005 }
 36:
                    var1 = var5;
                    _fun0005_ip = 104; continue _fun0005;
 41:
                    var2 = var5;
                    if(!var5) { _fun0005_ip = 101; continue _fun0005 }
 47:
                    var4 = var4.id;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var5 = 4;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var7.bind(var5)(var6);
                    var5 = var6.castChannelIdAsMessageId;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var3 = var5.bind(var6)(var3);
                    var2 = var4 !== var3;
 101:
                    var1 = var2;
 104:
                    return var1;
                }
            };
            _closure2_slot15 = var2;
            var2 = new Array(0);
            _closure2_slot16 = var2;
            var9 = function insertMessage(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = arg1;
                    var3 = _closure2_slot16;
                    var2 = 0;
                    var3 = var3[var2];
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 127; continue _fun0006 }
 22:
                    var2 = _closure2_slot15;
                    var7 = undefined;
                    var2 = var2.bind(var7)(var4);
                    if(var2) { _fun0006_ip = 127; continue _fun0006 }
 36:
                    var5 = var3.length;
                    var2 = 1;
                    var2 = var5 - var2;
                    var6 = var3[var2];
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 5;
                    var2 = var8[var2];
                    var5 = var5.bind(var7)(var2);
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var7)(var2, var6, var4);
                    if(var2) { _fun0006_ip = 102; continue _fun0006 }
 89:
                    var2 = var3.unshift;
                    var2 = var2.bind(var3)(var4);
                    _fun0006_ip = 150; continue _fun0006;
 102:
                    var5 = _closure2_slot16;
                    var3 = var5.unshift;
                    var2 = new Array(1);
                    var2[0] = var4;
                    var2 = var3.bind(var5)(var2);
                    _fun0006_ip = 150; continue _fun0006;
 127:
                    var3 = _closure2_slot16;
                    var2 = var3.unshift;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var1 = var2.bind(var3)(var1);
 150:
                    var1 = undefined;
                    return var1;
                }
            };
            _closure2_slot17 = var9;
            var10 = var5.forEach;
            var9 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var2);
                    var5 = var6.tryCreateInjectedMessage;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var6)(var3, var4);
                    var5 = null;
                    if(!(var5 != var4)) { _fun0007_ip = 84; continue _fun0007 }
 53:
                    var5 = _closure2_slot17;
                    var5 = var5.bind(var1)(var4);
                    var6 = _closure2_slot2;
                    var5 = var3.id;
                    if(!(var6 === var5)) { _fun0007_ip = 84; continue _fun0007 }
 75:
                    var4 = var4.id;
                    _closure2_slot2 = var4;
 84:
                    var2 = _closure2_slot17;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var9 = var10.bind(var5)(var9);
            var9 = function determineChangeType(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = arguments[1];
                    var1 = undefined;
                    if(!(var4 === var1)) { _fun0008_ip = 11; continue _fun0008 }
 9:
                    var4 = false;
 11:
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
            _closure2_slot18 = var9;
            var9 = var2.forEach;
            var3 = function(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var11 = arg1;
                    var4 = arg2;
                    var _closure3_slot0 = var11;
                    var1 = var11.length;
                    var20 = 1;
                    var1 = var1 - var20;
                    var9 = var11[var1];
                    var _closure3_slot1 = var9;
                    var1 = _closure2_slot16;
                    var1 = var1.length;
                    var1 = var1 - var20;
                    var12 = var4 === var1;
                    var7 = 0;
                    var1 = var7 === var4;
                    if(!var1) { _fun0009_ip = 71; continue _fun0009 }
 61:
                    var2 = _closure2_slot1;
                    var1 = var2.hasMoreAfter;
 71:
                    if(!var1) { _fun0009_ip = 226; continue _fun0009 }
 77:
                    var3 = _closure2_slot13;
                    var2 = var3.push;
                    var1 = {};
                    var10 = _closure1_slot7;
                    var10 = var10.LOAD_AFTER;
                    var1['rowType'] = var10;
                    var10 = _closure2_slot9;
                    var13 = _closure1_slot6;
                    if(var10) { _fun0009_ip = 125; continue _fun0009 }
 117:
                    var10 = var13.NOOP;
                    _fun0009_ip = 131; continue _fun0009;
 125:
                    var10 = var13.UPDATE;
 131:
                    var1['changeType'] = var10;
                    var10 = _closure2_slot8;
                    var1['roleStyle'] = var10;
                    var10 = _closure2_slot1;
                    var10 = var10.loadingMore;
                    var1['isLoading'] = var10;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var8 = 7;
                    var10 = var16[var8];
                    var14 = undefined;
                    var10 = var15.bind(var14)(var10);
                    var13 = var10.intl;
                    var10 = var13.string;
                    var8 = var16[var8];
                    var8 = var15.bind(var14)(var8);
                    var8 = var8.t;
                    var8 = var8.XBlaiI;
                    var8 = var10.bind(var13)(var8);
                    var1['text'] = var8;
                    var1 = var2.bind(var3)(var1);
 226:
                    var1 = _closure2_slot1;
                    var2 = var1.hasMoreBefore;
                    if(!var2) { _fun0009_ip = 242; continue _fun0009 }
 239:
                    var2 = var12;
 242:
                    var3 = _closure2_slot15;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var9);
                    var8 = null;
                    var13 = null;
                    if(var12) { _fun0009_ip = 282; continue _fun0009 }
 260:
                    var10 = _closure2_slot16;
                    var4 = var4 + var20;
                    var4 = var10[var4];
                    var4 = var4[var7];
                    var13 = var4.timestamp;
 282:
                    if(var12) { _fun0009_ip = 331; continue _fun0009 }
 285:
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 8;
                    var4 = var10[var4];
                    var10 = var7.bind(var1)(var4);
                    var7 = var10.isSameDay;
                    var4 = var9.timestamp;
                    var7 = var7.bind(var10)(var4, var13);
                    var4 = true;
                    if(!var7) { _fun0009_ip = 436; continue _fun0009 }
 331:
                    var10 = _closure2_slot0;
                    var7 = var10.isDM;
                    var7 = var7.bind(var10)();
                    if(!var7) { _fun0009_ip = 361; continue _fun0009 }
 348:
                    var10 = _closure2_slot1;
                    var10 = var10.hasMoreBefore;
                    var7 = !var10;
 361:
                    if(!var7) { _fun0009_ip = 367; continue _fun0009 }
 364:
                    var7 = var12;
 367:
                    if(var7) { _fun0009_ip = 429; continue _fun0009 }
 370:
                    var13 = _closure2_slot0;
                    var10 = var13.isThread;
                    var10 = var10.bind(var13)();
                    if(!var10) { _fun0009_ip = 404; continue _fun0009 }
 387:
                    var14 = _closure2_slot0;
                    var13 = var14.isForumPost;
                    var13 = var13.bind(var14)();
                    var10 = !var13;
 404:
                    if(!var10) { _fun0009_ip = 420; continue _fun0009 }
 407:
                    var13 = _closure2_slot1;
                    var13 = var13.hasMoreBefore;
                    var10 = !var13;
 420:
                    if(!var10) { _fun0009_ip = 426; continue _fun0009 }
 423:
                    var10 = var12;
 426:
                    var7 = var10;
 429:
                    var4 = false;
                    if(!var7) { _fun0009_ip = 436; continue _fun0009 }
 434:
                    var4 = true;
 436:
                    var5 = function processHiddenMessageRow(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var1 = arg1;
                            var4 = _closure1_slot10;
                            var3 = _closure3_slot0;
                            var7 = undefined;
                            var6 = var4.bind(var7)(var3);
                            var5 = var6.bind(var7)();
                            var4 = var5.done;
                            if(var4) { _fun0010_ip = 232; continue _fun0010 }
 42:
                            var12 = var5.value;
                            var4 = _closure2_slot18;
                            var9 = var4.bind(var7)(var12);
                            var4 = _closure1_slot6;
                            var4 = var4.NOOP;
                            var4 = var9 !== var4;
                            if(!var4) { _fun0010_ip = 93; continue _fun0010 }
 73:
                            var10 = var1.changeType;
                            var9 = _closure1_slot6;
                            var9 = var9.NOOP;
                            var4 = var10 === var9;
 93:
                            if(!var4) { _fun0010_ip = 112; continue _fun0010 }
 96:
                            var4 = _closure1_slot6;
                            var4 = var4.UPDATE;
                            var1['changeType'] = var4;
 112:
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
                            if(!var4) { _fun0010_ip = 42; continue _fun0010 }
 232:
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
                    var12 = {'roleStyle': null, 'message': null, 'isFirst': true, 'content': null, 'text': '', 'revealed': false};
                    var7 = _closure2_slot8;
                    var12['roleStyle'] = var7;
                    var12['message'] = var9;
                    var19 = true;
                    var7 = new Array(0);
                    var12['content'] = var7;
                    var18 = false;
                    var10 = _closure2_slot13;
                    var7 = var10.length;
                    var7 = var7 - var20;
                    var7 = var10[var7];
                    var10 = var9.blocked;
                    if(var10) { _fun0009_ip = 1531; continue _fun0009 }
 516:
                    var10 = var9.ignored;
                    if(var10) { _fun0009_ip = 1295; continue _fun0009 }
 528:
                    var10 = _closure1_slot10;
                    var16 = var10.bind(var1)(var11);
                    var11 = var16.bind(var1)();
                    var10 = var11.done;
                    var15 = 11;
                    var14 = 9;
                    var13 = 10;
                    if(var10) { _fun0009_ip = 1759; continue _fun0009 }
 564:
                    var24 = var11.value;
                    var29 = var24 !== var9;
                    var23 = _closure1_slot4;
                    var22 = var23.isEditing;
                    var10 = _closure2_slot0;
                    var21 = var10.id;
                    var10 = var24.id;
                    var25 = var22.bind(var23)(var21, var10);
                    if(var25) { _fun0009_ip = 619; continue _fun0009 }
 606:
                    var21 = _closure2_slot3;
                    var10 = var24.id;
                    var25 = var21 === var10;
 619:
                    var23 = _closure1_slot3;
                    var22 = var23.getPushFeedback;
                    var21 = var24.channel_id;
                    var10 = var24.id;
                    var28 = var22.bind(var23)(var21, var10);
                    var22 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var21 = var10[var14];
                    var23 = var22.bind(var1)(var21);
                    var22 = var23.canReplyToMessage;
                    var21 = _closure2_slot0;
                    var27 = var22.bind(var23)(var21, var24);
                    var21 = _closure1_slot1;
                    var10 = var10[var13];
                    var21 = var21.bind(var1)(var10);
                    var10 = _closure2_slot4;
                    var26 = var21.bind(var1)(var24, var10);
                    if(!var26) { _fun0009_ip = 741; continue _fun0009 }
 706:
                    var21 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var15];
                    var22 = var21.bind(var1)(var10);
                    var21 = var22.isNonModInLockedThread;
                    var10 = _closure2_slot0;
                    var10 = var21.bind(var22)(var10);
                    var26 = !var10;
 741:
                    var22 = _closure2_slot14;
                    var21 = var22.hasOwnProperty;
                    var10 = var24.id;
                    var10 = var21.bind(var22)(var10);
                    if(var10) { _fun0009_ip = 776; continue _fun0009 }
 764:
                    var10 = _closure2_slot18;
                    var23 = var10.bind(var1)(var24, var19);
                    _fun0009_ip = 804; continue _fun0009;
 776:
                    var21 = _closure2_slot14;
                    var10 = var24.id;
                    var22 = var21[var10];
                    var21 = _closure2_slot7;
                    var10 = var21.determineChangeTypeForUploadProgress;
                    var23 = var10.bind(var21)(var22);
 804:
                    var10 = _closure2_slot6;
                    var10 = var8 != var10;
                    if(!var10) { _fun0009_ip = 834; continue _fun0009 }
 815:
                    var21 = _closure2_slot6;
                    var22 = var21.endId;
                    var21 = var24.id;
                    var10 = var22 === var21;
 834:
                    if(!var10) { _fun0009_ip = 851; continue _fun0009 }
 837:
                    var21 = _closure2_slot6;
                    var21 = var21.count;
                    var10 = var21 > var20;
 851:
                    if(!var10) { _fun0009_ip = 922; continue _fun0009 }
 854:
                    var22 = _closure2_slot13;
                    var21 = var22.push;
                    var10 = {};
                    var30 = _closure1_slot9;
                    var30 = var30.SUMMARY;
                    var10['rowType'] = var30;
                    var30 = _closure2_slot18;
                    var30 = var30.bind(var1)(var24);
                    var10['changeType'] = var30;
                    var30 = _closure2_slot8;
                    var10['roleStyle'] = var30;
                    var30 = _closure2_slot6;
                    var10['summary'] = var30;
                    var10['isBeforeContent'] = var18;
                    var10 = var21.bind(var22)(var10);
 922:
                    var22 = _closure2_slot13;
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
                    if(var29) { _fun0009_ip = 992; continue _fun0009 }
 985:
                    var29 = _closure2_slot11;
                    var25 = !var29;
 992:
                    if(!var25) { _fun0009_ip = 1013; continue _fun0009 }
 995:
                    var29 = var4;
                    if(var29) { _fun0009_ip = 1004; continue _fun0009 }
 1001:
                    var29 = var3;
 1004:
                    if(var29) { _fun0009_ip = 1010; continue _fun0009 }
 1007:
                    var29 = var2;
 1010:
                    var25 = var29;
 1013:
                    var10['separatorBefore'] = var25;
                    var25 = _closure2_slot5;
                    var10['canAddNewReactions'] = var25;
                    var25 = _closure2_slot11;
                    var10['renderContentOnly'] = var25;
                    var29 = var8 == var28;
                    var25 = undefined;
                    if(var29) { _fun0009_ip = 1051; continue _fun0009 }
 1045:
                    var25 = var28.pushType;
 1051:
                    var10['pushFeedbackType'] = var25;
                    var25 = _closure2_slot11;
                    var25 = !var25;
                    if(!var25) { _fun0009_ip = 1069; continue _fun0009 }
 1066:
                    var25 = var27;
 1069:
                    var10['canReply'] = var25;
                    var25 = _closure2_slot11;
                    var25 = !var25;
                    if(!var25) { _fun0009_ip = 1087; continue _fun0009 }
 1084:
                    var25 = var26;
 1087:
                    var10['canEdit'] = var25;
                    var25 = _closure1_slot8;
                    var25 = var25.MESSAGE;
                    var10['rowType'] = var25;
                    var10['changeType'] = var23;
                    var23 = _closure2_slot12;
                    var25 = var8 == var23;
                    var23 = undefined;
                    if(var25) { _fun0009_ip = 1144; continue _fun0009 }
 1125:
                    var27 = _closure2_slot12;
                    var26 = var27.has;
                    var25 = var24.id;
                    var23 = var26.bind(var27)(var25);
 1144:
                    var10['showContentInventoryEntryFallbackEmbed'] = var23;
                    var10 = var21.bind(var22)(var10);
                    var10 = _closure2_slot6;
                    var10 = var8 != var10;
                    if(!var10) { _fun0009_ip = 1184; continue _fun0009 }
 1165:
                    var21 = _closure2_slot6;
                    var22 = var21.startId;
                    var21 = var24.id;
                    var10 = var22 === var21;
 1184:
                    if(!var10) { _fun0009_ip = 1201; continue _fun0009 }
 1187:
                    var21 = _closure2_slot6;
                    var21 = var21.count;
                    var10 = var21 > var20;
 1201:
                    if(!var10) { _fun0009_ip = 1272; continue _fun0009 }
 1204:
                    var22 = _closure2_slot13;
                    var21 = var22.push;
                    var10 = {};
                    var23 = _closure1_slot9;
                    var23 = var23.SUMMARY;
                    var10['rowType'] = var23;
                    var23 = _closure2_slot18;
                    var23 = var23.bind(var1)(var24);
                    var10['changeType'] = var23;
                    var23 = _closure2_slot8;
                    var10['roleStyle'] = var23;
                    var23 = _closure2_slot6;
                    var10['summary'] = var23;
                    var10['isBeforeContent'] = var19;
                    var10 = var21.bind(var22)(var10);
 1272:
                    var21 = var16.bind(var1)();
                    var10 = var21.done;
                    var11 = var21;
                    if(var10) { _fun0009_ip = 1759; continue _fun0009 }
 1290:
                    _fun0009_ip = 564; continue _fun0009;
 1295:
                    if(!(var8 != var7)) { _fun0009_ip = 1325; continue _fun0009 }
 1299:
                    var13 = var7.rowType;
                    var10 = _closure1_slot8;
                    var10 = var10.IGNORED_GROUP;
                    var11 = var7;
                    if(!(var13 !== var10)) { _fun0009_ip = 1439; continue _fun0009 }
 1325:
                    var10 = _closure2_slot18;
                    var14 = var10.bind(var1)(var9);
                    var10 = _closure1_slot6;
                    var10 = var10.NOOP;
                    var10 = var14 === var10;
                    if(!var10) { _fun0009_ip = 1369; continue _fun0009 }
 1354:
                    var16 = _closure2_slot7;
                    var15 = var16.getIgnored;
                    var10 = var15.bind(var16)(var9);
 1369:
                    if(!var10) { _fun0009_ip = 1382; continue _fun0009 }
 1372:
                    var10 = _closure1_slot6;
                    var14 = var10.INSERT;
 1382:
                    var10 = {};
                    var33 = var10;
                    var32 = var12;
                    var15 = copyDataProperties(var33, var32);
                    var13 = _closure1_slot8;
                    var15 = var13.IGNORED_GROUP;
                    var13 = 'rowType';
                    var10[var13] = var15;
                    var13 = 'changeType';
                    var10[var13] = var14;
                    var14 = _closure2_slot13;
                    var13 = var14.push;
                    var13 = var13.bind(var14)(var10);
                    var11 = var10;
 1439:
                    var10 = var5.bind(var1)(var11);
                    var13 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var10 = 7;
                    var14 = var16[var10];
                    var14 = var13.bind(var1)(var14);
                    var15 = var14.intl;
                    var14 = var15.formatToPlainString;
                    var10 = var16[var10];
                    var10 = var13.bind(var1)(var10);
                    var10 = var10.t;
                    var13 = var10.VFWjc3;
                    var10 = {};
                    var16 = var11.content;
                    var16 = var16.length;
                    var10['count'] = var16;
                    var10 = var14.bind(var15)(var13, var10);
                    var11['text'] = var10;
                    _fun0009_ip = 1759; continue _fun0009;
 1531:
                    if(!(var8 != var7)) { _fun0009_ip = 1558; continue _fun0009 }
 1535:
                    var10 = var7.rowType;
                    var8 = _closure1_slot8;
                    var8 = var8.BLOCKED_GROUP;
                    if(!(var10 !== var8)) { _fun0009_ip = 1672; continue _fun0009 }
 1558:
                    var8 = _closure2_slot18;
                    var11 = var8.bind(var1)(var9);
                    var8 = _closure1_slot6;
                    var8 = var8.NOOP;
                    var8 = var11 === var8;
                    if(!var8) { _fun0009_ip = 1602; continue _fun0009 }
 1587:
                    var14 = _closure2_slot7;
                    var13 = var14.getBlocked;
                    var8 = var13.bind(var14)(var9);
 1602:
                    if(!var8) { _fun0009_ip = 1615; continue _fun0009 }
 1605:
                    var8 = _closure1_slot6;
                    var11 = var8.INSERT;
 1615:
                    var8 = {};
                    var33 = var8;
                    var32 = var12;
                    var12 = copyDataProperties(var33, var32);
                    var10 = _closure1_slot8;
                    var12 = var10.BLOCKED_GROUP;
                    var10 = 'rowType';
                    var8[var10] = var12;
                    var10 = 'changeType';
                    var8[var10] = var11;
                    var11 = _closure2_slot13;
                    var10 = var11.push;
                    var10 = var10.bind(var11)(var8);
                    var7 = var8;
 1672:
                    var5 = var5.bind(var1)(var7);
                    var8 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 7;
                    var10 = var12[var5];
                    var10 = var8.bind(var1)(var10);
                    var11 = var10.intl;
                    var10 = var11.formatToPlainString;
                    var5 = var12[var5];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.t;
                    var8 = var5.+FcYMz;
                    var5 = {};
                    var12 = var7.content;
                    var12 = var12.length;
                    var5['count'] = var12;
                    var5 = var10.bind(var11)(var8, var5);
                    var7['text'] = var5;
 1759:
                    if(!var4) { _fun0009_ip = 1902; continue _fun0009 }
 1765:
                    var4 = _closure2_slot11;
                    if(var4) { _fun0009_ip = 1902; continue _fun0009 }
 1775:
                    var4 = _closure2_slot18;
                    var10 = var4.bind(var1)(var9);
                    var4 = _closure1_slot6;
                    var4 = var4.UPDATE;
                    if(!(var10 === var4)) { _fun0009_ip = 1811; continue _fun0009 }
 1801:
                    var4 = _closure1_slot6;
                    var10 = var4.NOOP;
 1811:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 8;
                    var4 = var7[var4];
                    var8 = var5.bind(var1)(var4);
                    var7 = var8.dateFormat;
                    var5 = var9.timestamp;
                    var4 = 'LL';
                    var8 = var7.bind(var8)(var5, var4);
                    var7 = _closure2_slot13;
                    var5 = var7.push;
                    var4 = {};
                    var11 = _closure1_slot9;
                    var11 = var11.DAY;
                    var4['rowType'] = var11;
                    var4['changeType'] = var10;
                    var10 = _closure2_slot8;
                    var4['roleStyle'] = var10;
                    var4['text'] = var8;
                    var4 = var5.bind(var7)(var4);
 1902:
                    if(!var3) { _fun0009_ip = 1912; continue _fun0009 }
 1905:
                    var4 = _closure2_slot11;
                    var3 = !var4;
 1912:
                    if(!var3) { _fun0009_ip = 2046; continue _fun0009 }
 1918:
                    var5 = _closure2_slot13;
                    var4 = var5.push;
                    var3 = {};
                    var8 = _closure1_slot9;
                    var8 = var8.UNREAD;
                    var3['rowType'] = var8;
                    var8 = _closure2_slot18;
                    var8 = var8.bind(var1)(var9);
                    var3['changeType'] = var8;
                    var8 = _closure2_slot8;
                    var3['roleStyle'] = var8;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 7;
                    var8 = var11[var7];
                    var8 = var10.bind(var1)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var1)(var7);
                    var7 = var7.t;
                    var7 = var7.q7hm3t;
                    var8 = var8.bind(var9)(var7);
                    var7 = var8.toUpperCase;
                    var7 = var7.bind(var8)();
                    var3['text'] = var7;
                    var3 = var4.bind(var5)(var3);
 2046:
                    if(!var2) { _fun0009_ip = 2056; continue _fun0009 }
 2049:
                    var3 = _closure2_slot11;
                    var2 = !var3;
 2056:
                    if(!var2) { _fun0009_ip = 2209; continue _fun0009 }
 2062:
                    var4 = _closure2_slot13;
                    var3 = var4.push;
                    var2 = {};
                    var7 = _closure1_slot7;
                    var7 = var7.LOAD_BEFORE;
                    var2['rowType'] = var7;
                    var7 = _closure2_slot9;
                    var8 = _closure1_slot6;
                    if(var7) { _fun0009_ip = 2110; continue _fun0009 }
 2102:
                    var7 = var8.NOOP;
                    _fun0009_ip = 2116; continue _fun0009;
 2110:
                    var7 = var8.UPDATE;
 2116:
                    var2['changeType'] = var7;
                    var7 = _closure2_slot8;
                    var2['roleStyle'] = var7;
                    var6 = _closure2_slot1;
                    var6 = var6.loadingMore;
                    var2['isLoading'] = var6;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 7;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.t;
                    var5 = var5.XBlaiI;
                    var5 = var6.bind(var7)(var5);
                    var2['text'] = var5;
                    var2 = var3.bind(var4)(var2);
 2209:
                    return var1;
                }
            };
            var3 = var9.bind(var2)(var3);
            var3 = var2.length;
            var2 = 0;
            var2 = var2 === var3;
            if(!var2) { _fun0004_ip = 384; continue _fun0004 }
 375:
            var3 = var5.loadingMore;
            var2 = !var3;
 384:
            if(!var2) { _fun0004_ip = 405; continue _fun0004 }
 387:
            var3 = var5.hasMoreAfter;
            if(var3) { _fun0004_ip = 402; continue _fun0004 }
 396:
            var3 = var5.hasMoreBefore;
 402:
            var2 = var3;
 405:
            if(!var2) { _fun0004_ip = 556; continue _fun0004 }
 411:
            var3 = var1.push;
            var2 = {};
            var9 = var5.hasMoreBefore;
            var10 = _closure1_slot7;
            if(var9) { _fun0004_ip = 439; continue _fun0004 }
 431:
            var9 = var10.LOAD_AFTER;
            _fun0004_ip = 445; continue _fun0004;
 439:
            var9 = var10.LOAD_BEFORE;
 445:
            var2['rowType'] = var9;
            var9 = _closure1_slot6;
            if(var7) { _fun0004_ip = 465; continue _fun0004 }
 457:
            var7 = var9.NOOP;
            _fun0004_ip = 471; continue _fun0004;
 465:
            var7 = var9.UPDATE;
 471:
            var2['changeType'] = var7;
            var2['roleStyle'] = var6;
            var5 = var5.loadingMore;
            var2['isLoading'] = var5;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 7;
            var5 = var9[var4];
            var5 = var7.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var4 = var4.t;
            var4 = var4.XBlaiI;
            var4 = var5.bind(var6)(var4);
            var2['text'] = var4;
            var2 = var3.bind(var1)(var2);
 556:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();