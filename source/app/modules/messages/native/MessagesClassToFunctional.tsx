// app/modules/messages/native/MessagesClassToFunctional.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
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
            var9 = _closure1_slot30;
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
            var7 = _closure1_slot30;
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
    var _closure1_slot29 = var1;
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
    var _closure1_slot30 = var1;
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
case 37: // try_end0
            _fun0004_ip = 38; continue _fun0004;
case 39: // catch_target0
            CatchBlockStart(arg_register=1);
case 38:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot31 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.updateShouldShowJumpToPresentButton;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getUserCommunicationDisabledVersion;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Changeset;
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ActivityActionTypes;
    var _closure1_slot16 = var8;
    var8 = var4.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot17 = var8;
    var8 = var4.MessageFlags;
    var _closure1_slot18 = var8;
    var8 = var4.MessageTypes;
    var _closure1_slot19 = var8;
    var4 = var4.Permissions;
    var _closure1_slot20 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot21 = var8;
    var8 = var4.Fragment;
    var _closure1_slot22 = var8;
    var4 = var4.jsxs;
    var _closure1_slot23 = var4;
    var8 = var7.Component;
    var4 = function(arg1) {
        var4 = function MessagesClass(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot5;
                var4 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot8;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot7;
                var1 = _closure1_slot31;
                var1 = var1.bind(var5)();
                if(var1) { _fun0005_ip = 9; continue _fun0005 }
case 40:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0005_ip = 41; continue _fun0005;
case 9:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot8;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 41:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = {'shouldForceRender': false, 'hasJumpedToOriginalPost': false};
                var1['state'] = var4;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 15;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var5 = var3.MessagesHandlers;
                var3 = var5.prototype;
                var4 = Object.create(var3, {constructor: {value: var5}});
                var14 = function() {
                    var1 = {};
                    var2 = _closure3_slot0;
                    var3 = var2.props;
                    var3 = var3.getMessage;
                    var1['getMessage'] = var3;
                    var3 = var2.props;
                    var3 = var3.chatInputRef;
                    var1['chatInputRef'] = var3;
                    var3 = var2.props;
                    var3 = var3.channelId;
                    var1['selectedChannelId'] = var3;
                    var3 = var2.props;
                    var3 = var3.messages;
                    var3 = var3.revealedMessageId;
                    var1['revealedMessageId'] = var3;
                    var3 = var2.props;
                    var3 = var3.uploads;
                    var1['uploads'] = var3;
                    var3 = var2.props;
                    var3 = var3.paymentsBlocked;
                    var1['paymentsBlocked'] = var3;
                    var3 = var2.props;
                    var3 = var3.loadMoreBefore;
                    var1['loadMoreBefore'] = var3;
                    var2 = var2.props;
                    var2 = var2.loadMoreAfter;
                    var1['loadMoreAfter'] = var2;
                    return var1;
                };
                var15 = var4;
                var3 = new var15[var5](var14, var13);
                var3 = var3 instanceof Object ? var3 : var4;
                var1['handlers'] = var3;
                var3 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var6 = arguments[0];
                        var1 = undefined;
                        if(!(var6 === var1)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                        var6 = {};
case 42:
                        var5 = _closure3_slot0;
                        var4 = var5.props;
                        var3 = var4.updateRows;
                        var2 = {};
                        var8 = var2;
                        var7 = var6;
                        var6 = copyDataProperties(var8, var7);
                        var5 = var5.state;
                        var6 = var5.hasJumpedToOriginalPost;
                        var5 = 'hasJumpedToOriginalPost';
                        var2[4] = var6;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var1['updateRows'] = var3;
                var3 = function(arg1) {
                    var4 = _closure3_slot0;
                    var3 = var4.props;
                    var2 = var3.scrollToMessageId;
                    var1 = {};
                    var6 = arg1;
                    var7 = var1;
                    var5 = copyDataProperties(var7, var6);
                    var4 = var4.state;
                    var5 = var4.hasJumpedToOriginalPost;
                    var4 = 'hasJumpedToOriginalPost';
                    var1[3] = var5;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['scrollToMessageId'] = var3;
                var3 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var4 = var3.props;
                        var6 = var4.messages;
                        var _closure4_slot0 = var6;
                        var3 = var4.isMessagesReady;
                        var4 = var4.oldestUnreadMessageId;
                        var _closure4_slot1 = var4;
                        var10 = _closure3_slot0;
                        var9 = var10.updateRows;
                        if(var3) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                        var3 = var9.bind(var10)();
                        _fun0007_ip = 46; continue _fun0007;
case 44:
                        var3 = {};
                        var5 = var6.jumpTargetId;
                        var3['scrollToMessageId'] = var5;
                        var5 = var6.jumpTargetId;
                        var3['jumpTargetId'] = var5;
                        var12 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var8 = 16;
                        var11 = var7[var8];
                        var7 = undefined;
                        var11 = var12.bind(var7)(var11);
                        var11 = var11.JumpTypes;
                        var11 = var11.INSTANT;
                        var3['jumpType'] = var11;
                        var11 = var6.focusTargetId;
                        var3['focusTargetId'] = var11;
                        var3 = var9.bind(var10)(var3);
                        var9 = var6.jumpTargetId;
                        var3 = null;
                        if(!(var3 == var9)) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                        if(!(var3 != var4)) { _fun0007_ip = 46; continue _fun0007 }
case 49:
                        var3 = global;
                        var4 = var3.setTimeout;
                        var3 = function() {
                            var3 = _closure3_slot0;
                            var2 = var3.scrollToMessageId;
                            var1 = {};
                            var5 = _closure4_slot1;
                            var1['scrollToMessageId'] = var5;
                            var4 = _closure4_slot0;
                            var4 = var4.jumpTargetId;
                            var1['jumpTargetId'] = var4;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 16;
                            var5 = var5[var4];
                            var4 = undefined;
                            var4 = var6.bind(var4)(var5);
                            var4 = var4.JumpTypes;
                            var4 = var4.INSTANT;
                            var1['jumpType'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2 = 50;
                        var2 = var4.bind(var7)(var3, var2);
                        _fun0007_ip = 46; continue _fun0007;
case 47:
                        var4 = _closure3_slot0;
                        var3 = var4.scrollToMessageId;
                        var2 = {};
                        var9 = var6.jumpTargetId;
                        var2['scrollToMessageId'] = var9;
                        var6 = var6.jumpTargetId;
                        var2['jumpTargetId'] = var6;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var8];
                        var5 = var6.bind(var7)(var5);
                        var5 = var5.JumpTypes;
                        var5 = var5.INSTANT;
                        var2['jumpType'] = var5;
                        var2 = var3.bind(var4)(var2);
case 46:
                        var1 = _closure3_slot0;
                        var4 = var1.props;
                        var3 = var4.recordTimings;
                        var2 = var1.props;
                        var2 = var2.channelId;
                        var1 = var1.props;
                        var1 = var1.messages;
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['syncMessageDisplay'] = var3;
                var3 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.getNativeSyntheticEventData;
                        var2 = arg1;
                        var2 = var3.bind(var4)(var2);
                        var6 = var2.messageId;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.animatingStickerMessageIdRef;
                        var7 = var3.current;
                        var3 = global;
                        var5 = var3.Set;
                        var3 = new Array(1);
                        var3[0] = var6;
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {constructor: {value: var5}});
                        var9 = var4;
                        var8 = var3;
                        var3 = new var9[var5](var8, var7);
                        var5 = var3 instanceof Object ? var3 : var4;
                        var4 = null;
                        if(!(var4 != var7)) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                        var3 = var5.add;
                        var3 = var3.bind(var5)(var7);
case 50:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.animatingStickerMessageIdRef;
                        var4 = null;
                        if(!(var7 !== var6)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                        var4 = var6;
case 52:
                        var3['current'] = var4;
                        var4 = _closure3_slot0;
                        var3 = var4.updateRows;
                        var2 = {};
                        var6 = true;
                        var2['forceRender'] = var6;
                        var2['updateMessageIds'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var1['handleLongPressSticker'] = var3;
                var3 = function(arg1) {
                    var1 = _closure3_slot0;
                    var3 = var1.props;
                    var2 = var3.scrollToBottom;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['scrollToBottom'] = var3;
                var3 = function() {
                    var1 = _closure3_slot0;
                    var2 = var1.props;
                    var1 = var2.jumpToPresent;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['jumpToPresent'] = var3;
                var3 = function() {
                    var1 = _closure3_slot0;
                    var2 = var1.props;
                    var1 = var2.scrollToNewMessages;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['scrollToNewMessages'] = var3;
                var3 = function() {
                    var1 = _closure3_slot0;
                    var2 = var1.props;
                    var1 = var2.getChatRef;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['getChatRef'] = var3;
                var2 = function() {
                    var1 = _closure3_slot0;
                    var2 = var1.props;
                    var1 = var2.clearRows;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['clearRows'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot9;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot6;
        var5 = {};
        var1 = 'componentDidMount';
        var5['key'] = var1;
        var1 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var5 = this;
                var1 = var5.props;
                var1 = var1.frozenRef;
                var6 = var1.current;
                var1 = var5.props;
                var3 = var1.frozenRef;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var2);
                var4 = var7.isScreenIndexFrozen;
                var2 = var5.props;
                var2 = var2.screenIndex;
                var2 = var4.bind(var7)(var2);
                var3['current'] = var2;
                var2 = var5.props;
                var2 = var2.prevPropsWhileFrozenRef;
                var4 = var2.current;
                var2 = var5.props;
                var2 = var2.prevStateWhileFrozenRef;
                var3 = var2.current;
                var2 = var5.props;
                var7 = var2.prevPropsWhileFrozenRef;
                var2 = null;
                var7['current'] = var2;
                var7 = var5.props;
                var7 = var7.prevStateWhileFrozenRef;
                var7['current'] = var2;
                if(!var6) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                if(!(var2 != var4)) { _fun0009_ip = 54; continue _fun0009 }
case 15:
                if(!(var2 == var3)) { _fun0009_ip = 56; continue _fun0009 }
case 54:
                var7 = var5.props;
                var6 = var7.startOrCancelChannelLatestMessagesLoad;
                var2 = var5.state;
                var2 = var2.hasJumpedToOriginalPost;
                var2 = var6.bind(var7)(var2);
                var2 = var5.syncMessageDisplay;
                var2 = var2.bind(var5)();
                var8 = var5.props;
                var7 = var8.recordTimings;
                var2 = var5.props;
                var6 = var2.channelId;
                var2 = var5.props;
                var2 = var2.messages;
                var2 = var7.bind(var8)(var6, var2);
                _fun0009_ip = 57; continue _fun0009;
case 56:
                var2 = var5.componentDidUpdate;
                var2 = var2.bind(var5)(var4, var3);
case 57:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'componentWillUnmount';
        var5['key'] = var7;
        var7 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = this;
                var2 = var1.props;
                var5 = var2.frozenRef;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 18;
                var2 = var3[var2];
                var3 = undefined;
                var7 = var6.bind(var3)(var2);
                var6 = var7.isScreenIndexFrozen;
                var2 = var1.props;
                var2 = var2.screenIndex;
                var2 = var6.bind(var7)(var2);
                var5['current'] = var2;
                var2 = var1.props;
                var2 = var2.frozenRef;
                var5 = var2.current;
                var2 = var1.props;
                if(var5) { _fun0010_ip = 58; continue _fun0010 }
case 59:
                var6 = var2.channelLatestMessageLoadingStatsManager;
                var5 = var6.cancel;
                var5 = var5.bind(var6)();
                var5 = var1.clearRows;
                var5 = var5.bind(var1)();
                var7 = _closure1_slot11;
                var4 = var1.props;
                var6 = var4.channelId;
                var4 = var1.props;
                var5 = var4.screenIndex;
                var4 = false;
                var4 = var7.bind(var3)(var6, var5, var4);
                return var3;
case 58:
                var3 = var2.prevPropsWhileFrozenRef;
                var2 = var1.props;
                var3['current'] = var2;
                var2 = var1.props;
                var2 = var2.prevStateWhileFrozenRef;
                var1 = var1.state;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'shouldComponentUpdate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = arg1;
                var4 = this;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var8 = 19;
                var1 = var1[var8];
                var6 = undefined;
                var7 = var2.bind(var6)(var1);
                var2 = var4.state;
                var1 = arg2;
                var1 = var7.bind(var6)(var2, var1);
                var1 = !var1;
                if(var1) { _fun0011_ip = 48; continue _fun0011 }
case 60:
                var7 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var10 = var7.bind(var6)(var2);
                var14 = var4.props;
                var7 = {};
                var2 = false;
                var7['shouldWarnLargeObjects'] = var2;
                var12 = ['interactionStates', 'recordTimings'];
                var15 = undefined;
                var13 = var3;
                var11 = var7;
                var2 = var15[var10](var14, var13, var12, var11, var10);
                var2 = !var2;
                if(var2) { _fun0011_ip = 58; continue _fun0011 }
case 13:
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var5 = var7.bind(var6)(var5);
                var4 = var4.props;
                var4 = var4.interactionStates;
                var3 = var3.interactionStates;
                var3 = var5.bind(var6)(var4, var3);
                var2 = !var3;
case 58:
                var1 = var2;
case 48:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'componentDidUpdate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var4 = arg1;
                var1 = this;
                var _closure3_slot0 = var1;
                var _closure3_slot1 = var4;
                var2 = var1.props;
                var2 = var2.currentUserId;
                var21 = null;
                if(!(var21 != var2)) { _fun0012_ip = 61; continue _fun0012 }
case 62:
                var2 = var1.props;
                var2 = var2.messages;
                var3 = var4.messages;
                var6 = var4.channelId;
                var5 = var1.props;
                var5 = var5.channelId;
                if(!(var6 !== var5)) { _fun0012_ip = 63; continue _fun0012 }
case 37:
                var5 = var1.clearRows;
                var5 = var5.bind(var1)();
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 20;
                var5 = var6[var5];
                var6 = undefined;
                var8 = var7.bind(var6)(var5);
                var7 = var8.clearChannelDimensions;
                var5 = var1.props;
                var5 = var5.channelId;
                var5 = var7.bind(var8)(var5);
                var8 = var1.props;
                var7 = var8.startOrCancelChannelLatestMessagesLoad;
                var5 = var1.state;
                var5 = var5.hasJumpedToOriginalPost;
                var5 = var7.bind(var8)(var5);
                var5 = var1.props;
                var5 = var5._firstIgnoredScrollEventTimestampRef;
                var5['current'] = var6;
case 63:
                var5 = var4.isMessagesAckable;
                var5 = !var5;
                if(!var5) { _fun0012_ip = 20; continue _fun0012 }
case 64:
                var6 = var1.props;
                var5 = var6.isMessagesAckable;
case 20:
                if(!var5) { _fun0012_ip = 65; continue _fun0012 }
case 66:
                var5 = var1.props;
                var6 = var5.hasHandledScrollRef;
                var5 = false;
                var6['current'] = var5;
case 65:
                var7 = var1.props;
                var6 = var7.shouldJumpToOriginalPost;
                var5 = var1.state;
                var5 = var5.hasJumpedToOriginalPost;
                var5 = var6.bind(var7)(var5);
                if(!var5) { _fun0012_ip = 67; continue _fun0012 }
case 23:
                var7 = var1.props;
                var6 = var7.scrollToTop;
                var5 = false;
                var5 = var6.bind(var7)(var5);
                var6 = var3.jumpSequenceId;
                var5 = var2.jumpSequenceId;
                if(!(var6 === var5)) { _fun0012_ip = 67; continue _fun0012 }
case 68:
                var6 = var1.setState;
                var5 = {};
                var7 = true;
                var5['hasJumpedToOriginalPost'] = var7;
                var5 = var6.bind(var1)(var5);
case 67:
                var5 = var1.props;
                var7 = var5.isMessagesReady;
                if(!var7) { _fun0012_ip = 69; continue _fun0012 }
case 70:
                var5 = var1.props;
                var5 = var5.isMessagesCached;
                var7 = !var5;
case 69:
                if(!var7) { _fun0012_ip = 71; continue _fun0012 }
case 72:
                var7 = var4.isMessagesCached;
case 71:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 21;
                var5 = var8[var5];
                var20 = undefined;
                var8 = var6.bind(var20)(var5);
                var6 = var1.props;
                var5 = {};
                var9 = var1.props;
                var9 = var9.isAtBottomRef;
                var9 = var9.current;
                var5['isAtBottom'] = var9;
                var9 = var1.props;
                var10 = var9.chatManager;
                var9 = var10.getPreviousMessages;
                var9 = var9.bind(var10)();
                var9 = var21 != var9;
                var5['hasPreviousMessages'] = var9;
                var6 = var8.bind(var20)(var6, var5, var4);
                var12 = var6.scrollToMessageId;
                var11 = var6.jumpTargetId;
                var10 = var6.jumpType;
                var5 = var6.minimizeScrolling;
                var9 = var6.focusTargetId;
                var6 = var6.shouldInitialScroll;
                var13 = var4.theme;
                var8 = var1.props;
                var8 = var8.theme;
                var14 = var13 !== var8;
                if(var14) { _fun0012_ip = 73; continue _fun0012 }
case 74:
                var13 = var4.saturation;
                var8 = var1.props;
                var8 = var8.saturation;
                var14 = var13 !== var8;
case 73:
                var15 = var14;
                if(var15) { _fun0012_ip = 75; continue _fun0012 }
case 76:
                var13 = var4.inlineAttachmentMedia;
                var8 = var1.props;
                var8 = var8.inlineAttachmentMedia;
                var15 = var13 !== var8;
case 75:
                if(var15) { _fun0012_ip = 77; continue _fun0012 }
case 78:
                var13 = var4.inlineEmbedMedia;
                var8 = var1.props;
                var8 = var8.inlineEmbedMedia;
                var15 = var13 !== var8;
case 77:
                if(var15) { _fun0012_ip = 79; continue _fun0012 }
case 80:
                var13 = var4.renderEmbeds;
                var8 = var1.props;
                var8 = var8.renderEmbeds;
                var15 = var13 !== var8;
case 79:
                if(var15) { _fun0012_ip = 81; continue _fun0012 }
case 82:
                var13 = var4.renderReactions;
                var8 = var1.props;
                var8 = var8.renderReactions;
                var15 = var13 !== var8;
case 81:
                if(var15) { _fun0012_ip = 83; continue _fun0012 }
case 84:
                var13 = var4.animateEmoji;
                var8 = var1.props;
                var8 = var8.animateEmoji;
                var15 = var13 !== var8;
case 83:
                if(var15) { _fun0012_ip = 85; continue _fun0012 }
case 86:
                var13 = var4.animateStickers;
                var8 = var1.props;
                var8 = var8.animateStickers;
                var15 = var13 !== var8;
case 85:
                if(var15) { _fun0012_ip = 87; continue _fun0012 }
case 88:
                var13 = var4.gifAutoPlay;
                var8 = var1.props;
                var8 = var8.gifAutoPlay;
                var15 = var13 !== var8;
case 87:
                if(var15) { _fun0012_ip = 89; continue _fun0012 }
case 90:
                var13 = var4.timestampHourCycle;
                var8 = var1.props;
                var8 = var8.timestampHourCycle;
                var15 = var13 !== var8;
case 89:
                if(var15) { _fun0012_ip = 91; continue _fun0012 }
case 92:
                var13 = var4.containerWidth;
                var8 = var1.props;
                var8 = var8.containerWidth;
                var15 = var13 !== var8;
case 91:
                if(var15) { _fun0012_ip = 93; continue _fun0012 }
case 94:
                var13 = var4.guildSystemChannelFlags;
                var8 = var1.props;
                var8 = var8.guildSystemChannelFlags;
                var15 = var13 !== var8;
case 93:
                if(var15) { _fun0012_ip = 95; continue _fun0012 }
case 96:
                var13 = var4.userSettingsLocale;
                var8 = var1.props;
                var8 = var8.userSettingsLocale;
                var15 = var13 !== var8;
case 95:
                if(var15) { _fun0012_ip = 97; continue _fun0012 }
case 98:
                var13 = var4.roleStyle;
                var8 = var1.props;
                var8 = var8.roleStyle;
                var15 = var13 !== var8;
case 97:
                if(var15) { _fun0012_ip = 99; continue _fun0012 }
case 100:
                var13 = var4.canSendMessages;
                var8 = var1.props;
                var8 = var8.canSendMessages;
                var15 = var13 !== var8;
case 99:
                if(var15) { _fun0012_ip = 101; continue _fun0012 }
case 102:
                var13 = var4.showPushFeedback;
                var8 = var1.props;
                var8 = var8.showPushFeedback;
                var15 = var13 !== var8;
case 101:
                if(var15) { _fun0012_ip = 103; continue _fun0012 }
case 104:
                var13 = var4.selectedSummary;
                var8 = var1.props;
                var8 = var8.selectedSummary;
                var15 = var13 !== var8;
case 103:
                if(var15) { _fun0012_ip = 105; continue _fun0012 }
case 106:
                var13 = var4.shouldObscureSpoiler;
                var8 = var1.props;
                var8 = var8.shouldObscureSpoiler;
                var15 = var13 !== var8;
case 105:
                if(var15) { _fun0012_ip = 107; continue _fun0012 }
case 108:
                var13 = var4.explicitMediaFalsePositiveInfo;
                var8 = var1.props;
                var8 = var8.explicitMediaFalsePositiveInfo;
                var15 = var13 !== var8;
case 107:
                if(var15) { _fun0012_ip = 109; continue _fun0012 }
case 110:
                var13 = var4.isStaff;
                var8 = var1.props;
                var8 = var8.isStaff;
                var15 = var13 !== var8;
case 109:
                if(var15) { _fun0012_ip = 111; continue _fun0012 }
case 112:
                var13 = var4.isAgeVerified;
                var8 = var1.props;
                var8 = var8.isAgeVerified;
                var15 = var13 !== var8;
case 111:
                if(var15) { _fun0012_ip = 113; continue _fun0012 }
case 114:
                var8 = arg2;
                var13 = var8.shouldForceRender;
                var8 = var1.state;
                var8 = var8.shouldForceRender;
                var8 = var13 !== var8;
                if(!var8) { _fun0012_ip = 115; continue _fun0012 }
case 116:
                var13 = var1.state;
                var8 = var13.shouldForceRender;
case 115:
                var15 = var8;
case 113:
                if(var15) { _fun0012_ip = 117; continue _fun0012 }
case 118:
                var13 = var4.displayNameStylesEnabled;
                var8 = var1.props;
                var8 = var8.displayNameStylesEnabled;
                var15 = var13 !== var8;
case 117:
                var13 = var4.resolvingGiftCodes;
                var8 = var1.props;
                var8 = var8.resolvingGiftCodes;
                var47 = var13 !== var8;
                if(var47) { _fun0012_ip = 119; continue _fun0012 }
case 120:
                var13 = var4.resolvedGiftCodes;
                var8 = var1.props;
                var8 = var8.resolvedGiftCodes;
                var47 = var13 !== var8;
case 119:
                if(var47) { _fun0012_ip = 121; continue _fun0012 }
case 122:
                var13 = var4.acceptingGiftCodes;
                var8 = var1.props;
                var8 = var8.acceptingGiftCodes;
                var47 = var13 !== var8;
case 121:
                var _closure3_slot2 = var47;
                var46 = var4.uploads;
                var8 = var1.props;
                var45 = var8.uploads;
                var13 = _closure1_slot1;
                var8 = _closure1_slot2;
                var17 = 19;
                var8 = var8[var17];
                var19 = var13.bind(var20)(var8);
                var13 = var4.interactionStates;
                var8 = var1.props;
                var8 = var8.interactionStates;
                var8 = var19.bind(var20)(var13, var8);
                var36 = !var8;
                var _closure3_slot3 = var36;
                var13 = var4.channelPolls;
                var8 = var1.props;
                var8 = var8.channelPolls;
                var33 = var13 !== var8;
                var _closure3_slot4 = var33;
                var13 = var4.messageReferencePolls;
                var8 = var1.props;
                var8 = var8.messageReferencePolls;
                var32 = var13 !== var8;
                var _closure3_slot5 = var32;
                var13 = var4.interactionComponentStatesVersion;
                var8 = var1.props;
                var8 = var8.interactionComponentStatesVersion;
                var35 = var13 !== var8;
                var _closure3_slot6 = var35;
                var13 = var4.shouldDisableInteractiveComponents;
                var8 = var1.props;
                var8 = var8.shouldDisableInteractiveComponents;
                var8 = var13 !== var8;
                var _closure3_slot7 = var8;
                var13 = var4.communicationDisabledVersion;
                var8 = var1.props;
                var8 = var8.communicationDisabledVersion;
                var42 = var13 !== var8;
                var _closure3_slot8 = var42;
                var13 = var4.messageAuthorMembers;
                var8 = var1.props;
                var8 = var8.messageAuthorMembers;
                var41 = var13 !== var8;
                var _closure3_slot9 = var41;
                var13 = var4.failedMessagesVersion;
                var8 = var1.props;
                var8 = var8.failedMessagesVersion;
                var40 = var13 !== var8;
                var _closure3_slot10 = var40;
                var13 = var4.renderCommunicationDisabled;
                var8 = var1.props;
                var8 = var8.renderCommunicationDisabled;
                var37 = var13 !== var8;
                var _closure3_slot11 = var37;
                var39 = var4.forwardGuildsVersion;
                var8 = var1.props;
                var38 = var8.forwardGuildsVersion;
                var8 = var1.props;
                var13 = var8.channel;
                var8 = var13.isForumPost;
                var34 = var8.bind(var13)();
                if(!var34) { _fun0012_ip = 123; continue _fun0012 }
case 124:
                var13 = var4.isFollowingForumPost;
                var8 = var1.props;
                var8 = var8.isFollowingForumPost;
                var34 = var13 !== var8;
case 123:
                var _closure3_slot12 = var34;
                var13 = var4.showMediaPostSharePrompt;
                var8 = var1.props;
                var8 = var8.showMediaPostSharePrompt;
                var31 = var13 !== var8;
                var _closure3_slot13 = var31;
                var13 = var4.unloadedContentEntryMessageIds;
                var8 = var1.props;
                var8 = var8.unloadedContentEntryMessageIds;
                var30 = var13 !== var8;
                var _closure3_slot14 = var30;
                var13 = var4.invalidApplicationIds;
                var8 = var1.props;
                var8 = var8.invalidApplicationIds;
                var8 = var13 !== var8;
                var _closure3_slot15 = var8;
                var19 = var4.activityInstanceIds;
                var13 = var1.props;
                var13 = var13.activityInstanceIds;
                var44 = var19 !== var13;
                if(var44) { _fun0012_ip = 125; continue _fun0012 }
case 126:
                var19 = var4.activityParticipants;
                var13 = var1.props;
                var13 = var13.activityParticipants;
                var44 = var19 !== var13;
case 125:
                if(var44) { _fun0012_ip = 127; continue _fun0012 }
case 128:
                var19 = var4.applicationAssetFetchingIds;
                var13 = var1.props;
                var13 = var13.applicationAssetFetchingIds;
                var44 = var19 !== var13;
case 127:
                if(var44) { _fun0012_ip = 129; continue _fun0012 }
case 130:
                var19 = var4.activityInstancePresenceDetails;
                var13 = var1.props;
                var13 = var13.activityInstancePresenceDetails;
                var44 = var19 !== var13;
case 129:
                if(var44) { _fun0012_ip = 131; continue _fun0012 }
case 132:
                var19 = var4.messagesWithActivitiesLaunching;
                var13 = var1.props;
                var13 = var13.messagesWithActivitiesLaunching;
                var44 = var19 !== var13;
case 131:
                if(var44) { _fun0012_ip = 133; continue _fun0012 }
case 134:
                var44 = var8;
case 133:
                var _closure3_slot16 = var44;
                var13 = _closure1_slot0;
                var8 = _closure1_slot2;
                var19 = var8[var17];
                var24 = var13.bind(var20)(var19);
                var23 = var24.areArraysShallowEqual;
                var22 = var4.activityInviteMessageIds;
                var19 = var1.props;
                var19 = var19.activityInviteMessageIds;
                var19 = var23.bind(var24)(var22, var19);
                var29 = !var19;
                var _closure3_slot17 = var29;
                var8 = var8[var17];
                var19 = var13.bind(var20)(var8);
                var17 = var19.areArraysShallowEqual;
                var13 = var4.resolvedReferralTrialOfferIds;
                var8 = var1.props;
                var8 = var8.resolvedReferralTrialOfferIds;
                var8 = var17.bind(var19)(var13, var8);
                var28 = !var8;
                if(var28) { _fun0012_ip = 135; continue _fun0012 }
case 136:
                var13 = var4.referralTrialOfferId;
                var8 = var1.props;
                var8 = var8.referralTrialOfferId;
                var28 = var13 !== var8;
case 135:
                if(var28) { _fun0012_ip = 137; continue _fun0012 }
case 138:
                var13 = var4.isPremiumTier2User;
                var8 = var1.props;
                var8 = var8.isPremiumTier2User;
                var28 = var13 !== var8;
case 137:
                var _closure3_slot18 = var28;
                var13 = var4.guildInviteColorsFetched;
                var8 = var1.props;
                var8 = var8.guildInviteColorsFetched;
                var27 = var13 !== var8;
                var _closure3_slot19 = var27;
                var13 = var4.guildEmojis;
                var8 = var1.props;
                var8 = var8.guildEmojis;
                var26 = var13 !== var8;
                var _closure3_slot20 = var26;
                var13 = var4.selfActivities;
                var8 = var1.props;
                var8 = var8.selfActivities;
                var25 = var13 !== var8;
                var _closure3_slot21 = var25;
                var13 = var4.currentClientVoiceChannelId;
                var8 = var1.props;
                var8 = var8.currentClientVoiceChannelId;
                var43 = var13 !== var8;
                var _closure3_slot22 = var43;
                var13 = var4.voiceStateChannelIdSummaryForGuild;
                var8 = var1.props;
                var8 = var8.voiceStateChannelIdSummaryForGuild;
                var19 = var13 !== var8;
                var _closure3_slot23 = var19;
                var13 = var4.voiceStatePrivateChannelId;
                var8 = var1.props;
                var8 = var8.voiceStatePrivateChannelId;
                var8 = var13 !== var8;
                var17 = var4.activityLaunchJoinStates;
                var13 = var1.props;
                var13 = var13.activityLaunchJoinStates;
                var24 = var17 !== var13;
                var _closure3_slot24 = var24;
                var17 = var4.authorizedAppsTokens;
                var13 = var1.props;
                var13 = var13.authorizedAppsTokens;
                var23 = var17 !== var13;
                var _closure3_slot25 = var23;
                var22 = var4.displayNameStylesEnabled;
                var13 = var1.props;
                var17 = var13.displayNameStylesEnabled;
                var13 = var4.currentUserDisplayNameStyles;
                var49 = var21 == var13;
                var48 = undefined;
                if(var49) { _fun0012_ip = 139; continue _fun0012 }
case 140:
                var48 = var13.fontId;
case 139:
                var13 = var1.props;
                var49 = var13.currentUserDisplayNameStyles;
                var50 = var21 == var49;
                var13 = undefined;
                if(var50) { _fun0012_ip = 141; continue _fun0012 }
case 142:
                var13 = var49.fontId;
case 141:
                var13 = var48 !== var13;
                var _closure3_slot26 = var13;
                if(var15) { _fun0012_ip = 143; continue _fun0012 }
case 144:
                if(var47) { _fun0012_ip = 143; continue _fun0012 }
case 145:
                if(!(var46 === var45)) { _fun0012_ip = 143; continue _fun0012 }
case 146:
                if(var44) { _fun0012_ip = 143; continue _fun0012 }
case 147:
                var45 = var4.messages;
                var44 = var1.props;
                var44 = var44.messages;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 148:
                var45 = var4.editingMessageId;
                var44 = var1.props;
                var44 = var44.editingMessageId;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 149:
                var45 = var4.replyingMessageId;
                var44 = var1.props;
                var44 = var44.replyingMessageId;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 150:
                if(var8) { _fun0012_ip = 143; continue _fun0012 }
case 151:
                var45 = var4.messageAuthorActivities;
                var44 = var1.props;
                var44 = var44.messageAuthorActivities;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 152:
                var45 = var4.oldestUnreadMessageId;
                var44 = var1.props;
                var44 = var44.oldestUnreadMessageId;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 153:
                var45 = var4.invites;
                var44 = var1.props;
                var44 = var44.invites;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 154:
                var45 = var4.appDirectoryEmbedApplications;
                var44 = var1.props;
                var44 = var44.appDirectoryEmbedApplications;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 155:
                var45 = var4.invalidAppDirectoryEmbedApplicationIds;
                var44 = var1.props;
                var44 = var44.invalidAppDirectoryEmbedApplicationIds;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 156:
                var45 = var4.appDirectoryEmbedApplicationFetchStates;
                var44 = var1.props;
                var44 = var44.appDirectoryEmbedApplicationFetchStates;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 157:
                var45 = var4.guildTemplates;
                var44 = var1.props;
                var44 = var44.guildTemplates;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 158:
                var45 = var4.buildOverrides;
                var44 = var1.props;
                var44 = var44.buildOverrides;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 159:
                var45 = var4.experimentEmbeds;
                var44 = var1.props;
                var44 = var44.experimentEmbeds;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 160:
                var45 = var4.quests;
                var44 = var1.props;
                var44 = var44.quests;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 161:
                var45 = var4.isFetchingCurrentQuests;
                var44 = var1.props;
                var44 = var44.isFetchingCurrentQuests;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 162:
                var45 = var4.participantsLength;
                var44 = var1.props;
                var44 = var44.participantsLength;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 163:
                var45 = var4.isMessagesReady;
                var44 = var1.props;
                var44 = var44.isMessagesReady;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 164:
                var45 = var4.channelThreadsVersion;
                var44 = var1.props;
                var44 = var44.channelThreadsVersion;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 165:
                var45 = var4.rsvpVersion;
                var44 = var1.props;
                var44 = var44.rsvpVersion;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 166:
                var45 = var4.repliedIds;
                var44 = var1.props;
                var44 = var44.repliedIds;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 167:
                var45 = var4.hasLoadedExperiments;
                var44 = var1.props;
                var44 = var44.hasLoadedExperiments;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 168:
                var45 = var4.isMessageRequest;
                var44 = var1.props;
                var44 = var44.isMessageRequest;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 169:
                var45 = var4.isSpamMessageRequest;
                var44 = var1.props;
                var44 = var44.isSpamMessageRequest;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 170:
                var45 = var4.currentUserCommunicationDisabled;
                var44 = var1.props;
                var44 = var44.currentUserCommunicationDisabled;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 171:
                var45 = var4.userSettingsLocale;
                var44 = var1.props;
                var44 = var44.userSettingsLocale;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 172:
                var45 = var4.selectedSummary;
                var44 = var1.props;
                var44 = var44.selectedSummary;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 173:
                var45 = var4.showPushFeedback;
                var44 = var1.props;
                var44 = var44.showPushFeedback;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 174:
                var45 = var4.cacheStoreLoaded;
                var44 = var1.props;
                var44 = var44.cacheStoreLoaded;
                if(!(var45 === var44)) { _fun0012_ip = 143; continue _fun0012 }
case 175:
                if(var43) { _fun0012_ip = 143; continue _fun0012 }
case 176:
                if(var42) { _fun0012_ip = 143; continue _fun0012 }
case 177:
                if(var41) { _fun0012_ip = 143; continue _fun0012 }
case 178:
                if(var40) { _fun0012_ip = 143; continue _fun0012 }
case 179:
                if(!(var39 === var38)) { _fun0012_ip = 143; continue _fun0012 }
case 180:
                if(var37) { _fun0012_ip = 143; continue _fun0012 }
case 181:
                if(var36) { _fun0012_ip = 143; continue _fun0012 }
case 182:
                if(var35) { _fun0012_ip = 143; continue _fun0012 }
case 183:
                if(var34) { _fun0012_ip = 143; continue _fun0012 }
case 184:
                if(!(var21 == var11)) { _fun0012_ip = 143; continue _fun0012 }
case 185:
                if(!(var21 == var9)) { _fun0012_ip = 143; continue _fun0012 }
case 186:
                var35 = var4.androidKeyboardHeight;
                var34 = var1.props;
                var34 = var34.androidKeyboardHeight;
                if(!(var35 === var34)) { _fun0012_ip = 143; continue _fun0012 }
case 187:
                var35 = var4.mediaPostPreviewEmbeds;
                var34 = var1.props;
                var34 = var34.mediaPostPreviewEmbeds;
                if(!(var35 === var34)) { _fun0012_ip = 143; continue _fun0012 }
case 188:
                var35 = var4.shouldObscureSpoiler;
                var34 = var1.props;
                var34 = var34.shouldObscureSpoiler;
                if(!(var35 === var34)) { _fun0012_ip = 143; continue _fun0012 }
case 189:
                var35 = var4.shouldDisableInteractiveComponents;
                var34 = var1.props;
                var34 = var34.shouldDisableInteractiveComponents;
                if(!(var35 === var34)) { _fun0012_ip = 143; continue _fun0012 }
case 190:
                if(var33) { _fun0012_ip = 143; continue _fun0012 }
case 191:
                if(var32) { _fun0012_ip = 143; continue _fun0012 }
case 192:
                if(var31) { _fun0012_ip = 143; continue _fun0012 }
case 193:
                var32 = var4.threadStartingReferenceMessage;
                var31 = var1.props;
                var31 = var31.threadStartingReferenceMessage;
                if(!(var32 === var31)) { _fun0012_ip = 143; continue _fun0012 }
case 194:
                if(var30) { _fun0012_ip = 143; continue _fun0012 }
case 195:
                if(var29) { _fun0012_ip = 143; continue _fun0012 }
case 196:
                if(var28) { _fun0012_ip = 143; continue _fun0012 }
case 197:
                if(var27) { _fun0012_ip = 143; continue _fun0012 }
case 198:
                if(var26) { _fun0012_ip = 143; continue _fun0012 }
case 199:
                if(var25) { _fun0012_ip = 143; continue _fun0012 }
case 200:
                if(var24) { _fun0012_ip = 143; continue _fun0012 }
case 201:
                if(var23) { _fun0012_ip = 143; continue _fun0012 }
case 202:
                if(!(var22 === var17)) { _fun0012_ip = 143; continue _fun0012 }
case 203:
                if(var13) { _fun0012_ip = 143; continue _fun0012 }
case 204:
                if(var19) { _fun0012_ip = 143; continue _fun0012 }
case 205:
                var23 = var1.props;
                var22 = var23.recordTimings;
                var13 = var1.props;
                var17 = var13.channelId;
                var13 = var1.props;
                var13 = var13.messages;
                var13 = var22.bind(var23)(var17, var13);
                _fun0012_ip = 61; continue _fun0012;
case 143:
                var13 = global;
                var13 = var13.Set;
                var17 = var13.prototype;
                var17 = Object.create(var17, {constructor: {value: var13}});
                var54 = var17;
                var13 = new var54[var13](var53);
                var13 = var13 instanceof Object ? var13 : var17;
                var _closure3_slot27 = var13;
                var22 = var4.editingMessageId;
                var17 = var1.props;
                var17 = var17.editingMessageId;
                if(!(var22 !== var17)) { _fun0012_ip = 206; continue _fun0012 }
case 207:
                var17 = var1.props;
                var17 = var17.editingMessageId;
                if(!(var21 != var17)) { _fun0012_ip = 208; continue _fun0012 }
case 209:
                var22 = var13.add;
                var17 = var1.props;
                var17 = var17.editingMessageId;
                var17 = var22.bind(var13)(var17);
case 208:
                var17 = var4.editingMessageId;
                if(!(var21 != var17)) { _fun0012_ip = 206; continue _fun0012 }
case 210:
                var22 = var13.add;
                var17 = var4.editingMessageId;
                var17 = var22.bind(var13)(var17);
case 206:
                var22 = var4.replyingMessageId;
                var17 = var1.props;
                var17 = var17.replyingMessageId;
                if(!(var22 !== var17)) { _fun0012_ip = 211; continue _fun0012 }
case 212:
                var17 = var1.props;
                var17 = var17.replyingMessageId;
                if(!(var21 != var17)) { _fun0012_ip = 213; continue _fun0012 }
case 214:
                var22 = var13.add;
                var17 = var1.props;
                var17 = var17.replyingMessageId;
                var17 = var22.bind(var13)(var17);
case 213:
                var17 = var4.replyingMessageId;
                if(!(var21 != var17)) { _fun0012_ip = 211; continue _fun0012 }
case 215:
                var22 = var13.add;
                var17 = var4.replyingMessageId;
                var17 = var22.bind(var13)(var17);
case 211:
                var22 = var4.isMessagesReady;
                var17 = var1.props;
                var17 = var17.isMessagesReady;
                if(!(var22 === var17)) { _fun0012_ip = 216; continue _fun0012 }
case 217:
                var22 = var4.isCallActive;
                var17 = var1.props;
                var17 = var17.isCallActive;
                if(!(var22 === var17)) { _fun0012_ip = 216; continue _fun0012 }
case 218:
                if(var8) { _fun0012_ip = 216; continue _fun0012 }
case 219:
                var17 = var4.participantsLength;
                var8 = var1.props;
                var8 = var8.participantsLength;
                if(!(var17 !== var8)) { _fun0012_ip = 220; continue _fun0012 }
case 216:
                var17 = _closure1_slot1;
                var22 = _closure1_slot2;
                var8 = 22;
                var8 = var22[var8];
                var23 = var17.bind(var20)(var8);
                var22 = var23.find;
                var8 = var1.props;
                var17 = var8.messages;
                var8 = var17.toArray;
                var17 = var8.bind(var17)();
                var8 = var17.reverse;
                var17 = var8.bind(var17)();
                var8 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = _closure1_slot19;
                    var1 = var1.CALL;
                    var1 = var2 === var1;
                    return var1;
                };
                var8 = var22.bind(var23)(var17, var8);
                if(!(var21 != var8)) { _fun0012_ip = 220; continue _fun0012 }
case 221:
                var17 = var13.add;
                var8 = var8.id;
                var8 = var17.bind(var13)(var8);
case 220:
                var17 = var4.channelThreadsVersion;
                var8 = var1.props;
                var8 = var8.channelThreadsVersion;
                var8 = var17 !== var8;
                var _closure3_slot28 = var8;
                var17 = var4.rsvpVersion;
                var8 = var1.props;
                var8 = var8.rsvpVersion;
                var8 = var17 !== var8;
                var _closure3_slot29 = var8;
                var17 = var4.repliedIds;
                var8 = var1.props;
                var8 = var8.repliedIds;
                var8 = var17 !== var8;
                var _closure3_slot30 = var8;
                var17 = var4.hasLoadedExperiments;
                var8 = var1.props;
                var8 = var8.hasLoadedExperiments;
                var8 = var17 !== var8;
                var _closure3_slot31 = var8;
                var17 = var4.communicationDisabledVersion;
                var22 = var21 != var17;
                var8 = -1;
                if(!var22) { _fun0012_ip = 222; continue _fun0012 }
case 223:
                var8 = var17;
case 222:
                var _closure3_slot32 = var8;
                var8 = var4.cacheStoreLoaded;
                var8 = !var8;
                if(!var8) { _fun0012_ip = 224; continue _fun0012 }
case 225:
                var17 = var1.props;
                var8 = var17.cacheStoreLoaded;
case 224:
                var _closure3_slot33 = var8;
                var17 = null;
                if(!var19) { _fun0012_ip = 226; continue _fun0012 }
case 227:
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var18 = 23;
                var18 = var22[var18];
                var20 = var19.bind(var20)(var18);
                var19 = var20.getVoiceChannelIdChangedAuthorIds;
                var22 = var4.voiceStateChannelIdSummaryForGuild;
                var23 = var21 != var22;
                var18 = null;
                if(!var23) { _fun0012_ip = 228; continue _fun0012 }
case 229:
                var18 = var22;
case 228:
                var22 = var1.props;
                var22 = var22.voiceStateChannelIdSummaryForGuild;
                var23 = var21 != var22;
                var21 = null;
                if(!var23) { _fun0012_ip = 230; continue _fun0012 }
case 231:
                var21 = var22;
case 230:
                var17 = var19.bind(var20)(var18, var21);
case 226:
                var _closure3_slot34 = var17;
                var17 = var1.props;
                var18 = var17.messages;
                var17 = var18.forEach;
                var16 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = arg1;
                        var3 = _closure3_slot23;
                        if(!var3) { _fun0013_ip = 232; continue _fun0013 }
case 233:
                        var3 = _closure3_slot34;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0013_ip = 232; continue _fun0013 }
case 31:
                        var3 = var1.author;
                        if(!(var4 != var3)) { _fun0013_ip = 232; continue _fun0013 }
case 33:
                        var5 = _closure3_slot34;
                        var4 = var5.has;
                        var3 = var1.author;
                        var3 = var3.id;
                        var3 = var4.bind(var5)(var3);
                        if(var3) { _fun0013_ip = 234; continue _fun0013 }
case 232:
                        var3 = _closure3_slot22;
                        if(!var3) { _fun0013_ip = 235; continue _fun0013 }
case 236:
                        var3 = var1.activity;
                        var4 = null;
                        var5 = var4 == var3;
                        var4 = undefined;
                        if(var5) { _fun0013_ip = 237; continue _fun0013 }
case 238:
                        var4 = var3.type;
case 237:
                        var3 = _closure1_slot16;
                        var3 = var3.STREAM_REQUEST;
                        if(!(var4 !== var3)) { _fun0013_ip = 239; continue _fun0013 }
case 235:
                        var3 = _closure3_slot31;
                        if(!var3) { _fun0013_ip = 240; continue _fun0013 }
case 41:
                        var4 = var1.type;
                        var3 = _closure1_slot19;
                        var3 = var3.USER_JOIN;
                        if(!(var4 !== var3)) { _fun0013_ip = 241; continue _fun0013 }
case 240:
                        var3 = _closure3_slot30;
                        if(!var3) { _fun0013_ip = 242; continue _fun0013 }
case 243:
                        var4 = var1.type;
                        var3 = _closure1_slot19;
                        var3 = var3.REPLY;
                        if(!(var4 === var3)) { _fun0013_ip = 242; continue _fun0013 }
case 244:
                        var3 = var1.messageReference;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0013_ip = 242; continue _fun0013 }
case 47:
                        var4 = _closure3_slot0;
                        var4 = var4.props;
                        var5 = var4.repliedIds;
                        var4 = var5.has;
                        var3 = var3.message_id;
                        var3 = var4.bind(var5)(var3);
                        if(var3) { _fun0013_ip = 245; continue _fun0013 }
case 242:
                        var3 = _closure3_slot28;
                        if(!var3) { _fun0013_ip = 246; continue _fun0013 }
case 247:
                        var4 = var1.hasFlag;
                        var3 = _closure1_slot18;
                        var3 = var3.HAS_THREAD;
                        var3 = var4.bind(var1)(var3);
                        if(var3) { _fun0013_ip = 248; continue _fun0013 }
case 246:
                        var3 = _closure3_slot29;
                        if(!var3) { _fun0013_ip = 249; continue _fun0013 }
case 250:
                        var3 = var1.codedLinks;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(!(var4 > var3))) { _fun0013_ip = 251; continue _fun0013 }
case 249:
                        var3 = _closure3_slot20;
                        if(!var3) { _fun0013_ip = 252; continue _fun0013 }
case 253:
                        var4 = var1.type;
                        var3 = _closure1_slot19;
                        var3 = var3.EMOJI_ADDED;
                        if(!(var4 !== var3)) { _fun0013_ip = 254; continue _fun0013 }
case 252:
                        var3 = _closure3_slot11;
                        if(var3) { _fun0013_ip = 255; continue _fun0013 }
case 69:
                        var3 = _closure3_slot8;
                        if(!var3) { _fun0013_ip = 256; continue _fun0013 }
case 257:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var4 = var3.guildId;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0013_ip = 256; continue _fun0013 }
case 258:
                        var6 = _closure1_slot12;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.guildId;
                        var3 = var1.author;
                        var4 = var3.id;
                        var3 = undefined;
                        var4 = var6.bind(var3)(var5, var4);
                        var3 = _closure3_slot32;
                        if(!(!(var4 > var3))) { _fun0013_ip = 255; continue _fun0013 }
case 256:
                        var3 = _closure3_slot9;
                        if(!var3) { _fun0013_ip = 259; continue _fun0013 }
case 260:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.guildId;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0013_ip = 259; continue _fun0013 }
case 261:
                        var5 = var1.author;
                        var6 = var4 == var5;
                        var3 = undefined;
                        if(var6) { _fun0013_ip = 262; continue _fun0013 }
case 263:
                        var3 = var5.id;
case 262:
                        if(!(var4 == var3)) { _fun0013_ip = 264; continue _fun0013 }
case 259:
                        var3 = _closure3_slot10;
                        if(!var3) { _fun0013_ip = 265; continue _fun0013 }
case 266:
                        var3 = var1.author;
                        var4 = var3.id;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.currentUserId;
                        if(!(var4 !== var3)) { _fun0013_ip = 267; continue _fun0013 }
case 265:
                        var3 = _closure3_slot3;
                        if(!var3) { _fun0013_ip = 268; continue _fun0013 }
case 269:
                        var3 = _closure3_slot1;
                        var4 = var3.interactionStates;
                        var3 = var1.id;
                        var4 = var4[var3];
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.interactionStates;
                        var3 = var1.id;
                        var3 = var5[var3];
                        if(!(var4 === var3)) { _fun0013_ip = 270; continue _fun0013 }
case 268:
                        var3 = _closure3_slot6;
                        if(!var3) { _fun0013_ip = 271; continue _fun0013 }
case 272:
                        var3 = _closure3_slot1;
                        var5 = var3.interactionComponentStates;
                        var4 = var5.get;
                        var3 = var1.id;
                        var4 = var4.bind(var5)(var3);
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var6 = var3.interactionComponentStates;
                        var5 = var6.get;
                        var3 = var1.id;
                        var3 = var5.bind(var6)(var3);
                        if(!(var4 === var3)) { _fun0013_ip = 273; continue _fun0013 }
case 271:
                        var3 = _closure3_slot7;
                        if(!var3) { _fun0013_ip = 274; continue _fun0013 }
case 275:
                        var3 = var1.components;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(var3 === var4)) { _fun0013_ip = 276; continue _fun0013 }
case 274:
                        var3 = _closure3_slot4;
                        if(!var3) { _fun0013_ip = 277; continue _fun0013 }
case 278:
                        var3 = _closure3_slot1;
                        var4 = var3.channelPolls;
                        var3 = var1.id;
                        var4 = var4[var3];
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.channelPolls;
                        var3 = var1.id;
                        var3 = var5[var3];
                        if(!(var4 === var3)) { _fun0013_ip = 279; continue _fun0013 }
case 277:
                        var3 = _closure3_slot5;
                        if(!var3) { _fun0013_ip = 280; continue _fun0013 }
case 281:
                        var4 = var1.messageReference;
                        var3 = null;
                        var6 = var3 == var4;
                        var5 = undefined;
                        if(var6) { _fun0013_ip = 282; continue _fun0013 }
case 283:
                        var5 = var4.message_id;
case 282:
                        if(!(var3 != var5)) { _fun0013_ip = 280; continue _fun0013 }
case 284:
                        var3 = _closure3_slot1;
                        var3 = var3.messageReferencePolls;
                        var4 = var3[var5];
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.messageReferencePolls;
                        var3 = var3[var5];
                        if(!(var4 === var3)) { _fun0013_ip = 285; continue _fun0013 }
case 280:
                        var3 = _closure3_slot14;
                        if(!var3) { _fun0013_ip = 286; continue _fun0013 }
case 287:
                        var3 = _closure3_slot1;
                        var5 = var3.unloadedContentEntryMessageIds;
                        var4 = var5.has;
                        var3 = var1.id;
                        var4 = var4.bind(var5)(var3);
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var6 = var3.unloadedContentEntryMessageIds;
                        var5 = var6.has;
                        var3 = var1.id;
                        var3 = var5.bind(var6)(var3);
                        if(!(var4 === var3)) { _fun0013_ip = 288; continue _fun0013 }
case 286:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var4 = var3.channel;
                        var3 = var4.isForumPost;
                        var3 = var3.bind(var4)();
                        if(!var3) { _fun0013_ip = 289; continue _fun0013 }
case 290:
                        var3 = _closure3_slot12;
                        if(var3) { _fun0013_ip = 291; continue _fun0013 }
case 292:
                        var3 = _closure3_slot13;
                        if(!var3) { _fun0013_ip = 289; continue _fun0013 }
case 291:
                        var4 = var1.id;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 24;
                        var5 = var5[var3];
                        var3 = undefined;
                        var6 = var6.bind(var3)(var5);
                        var5 = var6.castChannelIdAsMessageId;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.channelId;
                        var3 = var5.bind(var6)(var3);
                        if(!(var4 !== var3)) { _fun0013_ip = 293; continue _fun0013 }
case 289:
                        var3 = _closure3_slot16;
                        if(!var3) { _fun0013_ip = 294; continue _fun0013 }
case 295:
                        var4 = var1.activityInstance;
                        var3 = null;
                        if(!(var3 == var4)) { _fun0013_ip = 296; continue _fun0013 }
case 294:
                        var3 = _closure3_slot17;
                        if(!var3) { _fun0013_ip = 297; continue _fun0013 }
case 298:
                        var6 = var1.activity;
                        var5 = null;
                        var7 = var5 == var6;
                        var4 = undefined;
                        if(var7) { _fun0013_ip = 115; continue _fun0013 }
case 299:
                        var4 = var6.party_id;
case 115:
                        var3 = var5 != var4;
case 297:
                        if(!var3) { _fun0013_ip = 300; continue _fun0013 }
case 301:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
case 300:
                        var3 = _closure3_slot25;
                        if(!var3) { _fun0013_ip = 302; continue _fun0013 }
case 303:
                        var4 = var1.application;
                        var3 = null;
                        if(!(var3 == var4)) { _fun0013_ip = 304; continue _fun0013 }
case 302:
                        var3 = _closure3_slot26;
                        if(!var3) { _fun0013_ip = 305; continue _fun0013 }
case 306:
                        var3 = var1.author;
                        var4 = null;
                        var5 = var4 == var3;
                        var4 = undefined;
                        if(var5) { _fun0013_ip = 307; continue _fun0013 }
case 308:
                        var4 = var3.id;
case 307:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.currentUserId;
                        if(!(var4 !== var3)) { _fun0013_ip = 309; continue _fun0013 }
case 305:
                        var3 = var1.author;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0013_ip = 310; continue _fun0013 }
case 311:
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var8 = 25;
                        var6 = var3[var8];
                        var3 = undefined;
                        var10 = var7.bind(var3)(var6);
                        var9 = var10.messageAuthorActivitiesChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var9.bind(var10)(var1, var7, var6);
                        if(var6) { _fun0013_ip = 312; continue _fun0013 }
case 313:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var10 = var7.bind(var3)(var6);
                        var9 = var10.codedLinksChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var9.bind(var10)(var1, var7, var6);
                        if(var6) { _fun0013_ip = 312; continue _fun0013 }
case 314:
                        var6 = _closure3_slot2;
                        if(!var6) { _fun0013_ip = 315; continue _fun0013 }
case 316:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var10 = var7.bind(var3)(var6);
                        var9 = var10.giftCodesChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var9.bind(var10)(var1, var7, var6);
                        if(var6) { _fun0013_ip = 312; continue _fun0013 }
case 315:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var9 = var7.bind(var3)(var6);
                        var8 = var9.mediaPostPreviewEmbedsChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var8.bind(var9)(var1, var7, var6);
                        if(var6) { _fun0013_ip = 312; continue _fun0013 }
case 317:
                        var6 = _closure3_slot33;
                        if(!var6) { _fun0013_ip = 318; continue _fun0013 }
case 319:
                        var7 = var1.embeds;
                        var8 = var7.length;
                        var7 = 0;
                        var6 = var8 > var7;
case 318:
                        if(!var6) { _fun0013_ip = 320; continue _fun0013 }
case 321:
                        var8 = _closure3_slot27;
                        var7 = var8.add;
                        var6 = var1.id;
                        var6 = var7.bind(var8)(var6);
case 320:
                        var6 = var1.type;
                        var5 = _closure1_slot19;
                        var5 = var5.THREAD_STARTER_MESSAGE;
                        var5 = var6 === var5;
                        if(!var5) { _fun0013_ip = 322; continue _fun0013 }
case 323:
                        var6 = _closure3_slot1;
                        var7 = var6.threadStartingReferenceMessage;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var6.threadStartingReferenceMessage;
                        var5 = var7 !== var6;
case 322:
                        if(!var5) { _fun0013_ip = 324; continue _fun0013 }
case 325:
                        var7 = _closure3_slot27;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 324:
                        var5 = _closure3_slot15;
                        if(!var5) { _fun0013_ip = 326; continue _fun0013 }
case 327:
                        var6 = var1.applicationId;
                        var5 = var4 != var6;
case 326:
                        if(!var5) { _fun0013_ip = 328; continue _fun0013 }
case 329:
                        var6 = _closure3_slot1;
                        var8 = var6.invalidApplicationIds;
                        var7 = var8.includes;
                        var6 = var1.applicationId;
                        var5 = var7.bind(var8)(var6);
case 328:
                        if(!var5) { _fun0013_ip = 330; continue _fun0013 }
case 331:
                        var7 = _closure3_slot27;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 330:
                        var5 = _closure3_slot18;
                        if(!var5) { _fun0013_ip = 127; continue _fun0013 }
case 332:
                        var8 = var1.referralTrialOfferId;
                        var5 = var4 != var8;
                        if(!var5) { _fun0013_ip = 333; continue _fun0013 }
case 334:
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var7 = var6.resolvedReferralTrialOfferIds;
                        var6 = var7.includes;
                        var5 = var6.bind(var7)(var8);
case 333:
                        if(!var5) { _fun0013_ip = 127; continue _fun0013 }
case 335:
                        var7 = _closure3_slot27;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 127:
                        var5 = _closure3_slot19;
                        if(!var5) { _fun0013_ip = 129; continue _fun0013 }
case 336:
                        var6 = var1.codedLinks;
                        var7 = var6.length;
                        var6 = 0;
                        var5 = var7 > var6;
case 129:
                        if(!var5) { _fun0013_ip = 337; continue _fun0013 }
case 132:
                        var7 = _closure3_slot27;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 337:
                        var5 = _closure3_slot21;
                        if(var5) { _fun0013_ip = 338; continue _fun0013 }
case 339:
                        var5 = _closure3_slot24;
                        if(!var5) { _fun0013_ip = 310; continue _fun0013 }
case 338:
                        var5 = var1.activity;
                        var6 = var4 == var5;
                        var3 = undefined;
                        if(var6) { _fun0013_ip = 340; continue _fun0013 }
case 341:
                        var3 = var5.party_id;
case 340:
                        if(!(var4 != var3)) { _fun0013_ip = 310; continue _fun0013 }
case 342:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0013_ip = 310; continue _fun0013;
case 312:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0013_ip = 310; continue _fun0013;
case 309:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0013_ip = 310; continue _fun0013;
case 304:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0013_ip = 310; continue _fun0013;
case 296:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0013_ip = 310; continue _fun0013;
case 293:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0013_ip = 310; continue _fun0013;
case 288:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0013_ip = 310; continue _fun0013;
case 285:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        var3 = undefined;
                        return var3;
case 279:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0013_ip = 310; continue _fun0013;
case 276:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0013_ip = 310; continue _fun0013;
case 273:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0013_ip = 310; continue _fun0013;
case 270:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0013_ip = 310; continue _fun0013;
case 267:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0013_ip = 310; continue _fun0013;
case 264:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var4 = var3.messageAuthorMembers;
                        var3 = var1.author;
                        var3 = var3.id;
                        var4 = var4[var3];
                        var3 = _closure3_slot1;
                        var5 = var3.messageAuthorMembers;
                        var3 = var1.author;
                        var3 = var3.id;
                        var3 = var5[var3];
                        if(!(var4 !== var3)) { _fun0013_ip = 310; continue _fun0013 }
case 141:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0013_ip = 310; continue _fun0013;
case 255:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0013_ip = 310; continue _fun0013;
case 254:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0013_ip = 310; continue _fun0013;
case 251:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0013_ip = 310; continue _fun0013;
case 248:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0013_ip = 310; continue _fun0013;
case 245:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        var3 = undefined;
                        return var3;
case 241:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0013_ip = 310; continue _fun0013;
case 239:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0013_ip = 310; continue _fun0013;
case 234:
                        var3 = _closure3_slot27;
                        var2 = var3.add;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
case 310:
                        var1 = undefined;
                        return var1;
                    }
                };
                var16 = var17.bind(var18)(var16);
                var16 = var4.channelId;
                var4 = var1.props;
                var4 = var4.channelId;
                var4 = var16 !== var4;
                if(var4) { _fun0012_ip = 343; continue _fun0012 }
case 344:
                var3 = var3.suppressRowAnimationSequenceId;
                var2 = var2.suppressRowAnimationSequenceId;
                var4 = var3 === var2;
case 343:
                var3 = var1.updateRows;
                var2 = {};
                var2['forceRender'] = var15;
                var2['forceReload'] = var14;
                var2['updateMessageIds'] = var13;
                var2['scrollToMessageId'] = var12;
                var2['jumpTargetId'] = var11;
                var2['jumpType'] = var10;
                var2['focusTargetId'] = var9;
                var2['ignoreEmbedDescriptionCache'] = var8;
                var2['messagesNewlyLoaded'] = var7;
                var2['shouldInitialScroll'] = var6;
                var2['minimizeScrolling'] = var5;
                var2['isAnimated'] = var4;
                var2 = var3.bind(var1)(var2);
                var3 = var1.setState;
                var2 = {};
                var4 = false;
                var2['shouldForceRender'] = var4;
                var2 = var3.bind(var1)(var2);
                var4 = var1.props;
                var3 = var4.recordTimings;
                var2 = var1.props;
                var2 = var2.channelId;
                var1 = var1.props;
                var1 = var1.messages;
                var1 = var3.bind(var4)(var2, var1);
case 61:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            var9 = this;
            var1 = var9.props;
            var13 = var1.animateEmoji;
            var14 = var1.onPressKey;
            var16 = var1.style;
            var12 = var1.children;
            var11 = var1.HACK_fixModalInteraction;
            var15 = var1.alwaysRespectKeyboard;
            var4 = _closure1_slot23;
            var3 = _closure1_slot22;
            var2 = {};
            var8 = _closure1_slot21;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 26;
            var5 = var10[var1];
            var1 = undefined;
            var7 = var7.bind(var1)(var5);
            var5 = {};
            var17 = var9.props;
            var17 = var17.chatRef;
            var5['ref'] = var17;
            var5['style'] = var16;
            var16 = true;
            var5['inverted'] = var16;
            var5['alwaysRespectKeyboard'] = var15;
            var15 = var9.props;
            var15 = var15.handleScrollPosition;
            var5['onChatScrollPosition'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapImage;
            var5['onTapImage'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapChannel;
            var5['onTapChannel'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleLongPressChannel;
            var5['onLongPressChannel'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapAttachmentLink;
            var5['onTapAttachmentLink'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleLongPressAttachmentLink;
            var5['onLongPressAttachmentLink'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapCall;
            var5['onTapCall'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapMention;
            var5['onTapMention'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapCommandMention;
            var5['onTapCommandMention'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleLongPressCommandMention;
            var5['onLongPressCommandMention'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapLink;
            var5['onTapLink'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleLongPressLink;
            var5['onLongPressLink'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapReaction;
            var5['onTapReaction'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleLongPressReaction;
            var5['onLongPressReaction'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapAvatar;
            var5['onTapAvatar'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapUsername;
            var5['onTapUsername'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleLongPressUsername;
            var5['onLongPressUsername'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleOpenSticker;
            var5['onTapSticker'] = var15;
            var15 = var9.handleLongPressSticker;
            var5['onLongPressSticker'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleLongPressMessage;
            var5['onLongPressMessage'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleInitiateReply;
            var5['onInitiateReply'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleInitiateEdit;
            var5['onInitiateEdit'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleInitiateThread;
            var5['onInitiateThread'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapMessage;
            var5['onTapMessage'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleDoubleTapMessage;
            var5['onDoubleTapMessage'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapSeparator;
            var5['onTapSeparator'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapInviteEmbed;
            var5['onTapInviteEmbed'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapInviteEmbedAccept;
            var5['onTapInviteEmbedAccept'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapJoinActivity;
            var5['onTapJoinActivity'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapJoinRichPresence;
            var5['onTapJoinRichPresence'] = var15;
            var5['onPressKey'] = var14;
            var5['animateEmoji'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapGiftCodeEmbed;
            var5['onTapGiftCodeEmbed'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapCancelUploadItem;
            var5['onTapCancelUploadItem'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapReply;
            var5['onTapMessageReply'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapSummary;
            var5['onTapSummary'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapSummaryJump;
            var5['onTapSummaryJump'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapGiftCodeAccept;
            var5['onTapGiftCodeAccept'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapReferralRedeem;
            var5['onTapReferralRedeem'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapThreadEmbed;
            var5['onTapThreadEmbed'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapEmoji;
            var5['onTapEmoji'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapTimestamp;
            var5['onTapTimestamp'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapInlineCode;
            var5['onTapInlineCode'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapRoleIcon;
            var5['onTapRoleIcon'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapVoiceChannelBadge;
            var5['onTapVoiceChannelBadge'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapGameIcon;
            var5['onTapGameIcon'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapSuppressNotificationsIcon;
            var5['onTapSuppressNotificationsIcon'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapConnectionsRoleTag;
            var5['onTapConnectionsRoleTag'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapTimeoutIcon;
            var5['onTapTimeoutIcon'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapButtonActionComponent;
            var5['onTapButtonActionComponent'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapSelectActionComponent;
            var5['onTapSelectActionComponent'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapWelcomeReply;
            var5['onTapWelcomeReply'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapInviteToSpeak;
            var5['onTapInviteToSpeak'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapAutoModerationActions;
            var5['onTapAutoModerationActions'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapAutoModerationFeedback;
            var5['onTapAutoModerationFeedback'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapFollowForumPost;
            var5['onTapFollowForumPost'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapShareForumPost;
            var5['onTapShareForumPost'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapReactionOverflow;
            var5['onTapReactionOverflow'] = var13;
            var13 = var9.props;
            var13 = var13.handleTapNavBar;
            var5['onTapNavBar'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleCopyText;
            var5['onTapCopyText'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapOpTag;
            var5['onTapOpTag'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapTag;
            var5['onTapTag'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleMediaAttachmentPlaybackEnded;
            var5['onMediaAttachmentPlaybackEnded'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleMediaAttachmentPlaybackStarted;
            var5['onMediaAttachmentPlaybackStarted'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleVoiceMessagePlaybackFailed;
            var5['onVoiceMessagePlaybackFailed'] = var13;
            var13 = var9.props;
            var13 = var13.handleTapShowAltText;
            var5['onTapShowAltText'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapPostPreviewEmbed;
            var5['onTapPostPreviewEmbed'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapDismissMediaPostSharePrompt;
            var5['onTapDismissMediaPostSharePrompt'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapObscuredMediaLearnMore;
            var5['onTapObscuredMediaLearnMore'] = var13;
            var13 = var9.handlers;
            var13 = var13.onTapObscuredMediaToggle;
            var5['onTapObscuredMediaToggle'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapSafetyPolicyNoticeEmbed;
            var5['onTapSafetyPolicyNoticeEmbed'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapSafetySystemNotificationCta;
            var5['onTapSafetySystemNotificationCta'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapPollAnswer;
            var5['onTapPollAnswer'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapPollSubmitVote;
            var5['onTapPollSubmitVote'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapPollAction;
            var5['onTapPollAction'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleLongPressPollImage;
            var5['onLongPressPollImage'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapCtaButton;
            var5['onTapCtaButton'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleMessageAccessibilityAction;
            var5['onMessageAccessibilityAction'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapForwardFooter;
            var5['onTapForwardFooter'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapInlineForward;
            var5['onTapInlineForward'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapClanTagChiplet;
            var5['onTapClanTagChiplet'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapContentInventoryEntryEmbed;
            var5['onTapContentInventoryEntryEmbed'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapCheckpointCard;
            var5['onTapCheckpointCard'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapSoundmoji;
            var5['onTapSoundmoji'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapAppMessageEmbed;
            var5['onTapAppMessageEmbed'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapPreviewSharedClientTheme;
            var5['onTapPreviewSharedClientTheme'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleSharedClientThemeViewed;
            var5['onSharedClientThemeViewed'] = var13;
            var5['children'] = var12;
            var5['HACK_fixModalInteraction'] = var11;
            var11 = var9.props;
            var11 = var11.handleTapTableView;
            var5['onTapTableView'] = var11;
            var11 = var9.props;
            var11 = var11.handleFirstLayout;
            var5['onFirstLayout'] = var11;
            var11 = var9.props;
            var11 = var11.handleMediaPlayFinishedAnalytics;
            var5['onMediaPlayFinishedAnalytics'] = var11;
            var11 = var9.props;
            var11 = var11.handleMessageVisibilityChanged;
            var5['onMessageVisibilityChanged'] = var11;
            var7 = var8.bind(var1)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = _closure1_slot0;
            var6 = 27;
            var6 = var10[var6];
            var6 = var7.bind(var1)(var6);
            var7 = var6.ChatTTITracker;
            var6 = {};
            var9 = var9.props;
            var9 = var9.messages;
            var6['messages'] = var9;
            var6 = var8.bind(var1)(var7, var6);
            var5[1] = var6;
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var8);
    var _closure1_slot24 = var4;
    var4 = function recordTimings(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = arg2;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 28;
            var3 = var3[var1];
            var1 = undefined;
            var7 = var4.bind(var1)(var3);
            var6 = var7.recordMessageRender;
            var4 = var2.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var5 = var4.bind(var2)(var3);
            var4 = var2.hasFetched;
            if(var4) { _fun0014_ip = 345; continue _fun0014 }
case 44:
            var3 = var2.ready;
            if(!var3) { _fun0014_ip = 346; continue _fun0014 }
case 236:
            var8 = var2.cached;
            var3 = !var8;
case 346:
            var4 = var3;
case 345:
            var9 = var2.hasMoreAfter;
            var12 = arg1;
            var13 = var7;
            var11 = var5;
            var10 = var4;
            var2 = var13[var6](var12, var11, var10, var9, var8);
            return var1;
        }
    };
    var _closure1_slot25 = var4;
    var4 = function handleTapShowAltText(arg1) {
        var1 = arg1;
        var1 = var1.nativeEvent;
        var4 = var1.description;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 29;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = {};
        var2['description'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot26 = var4;
    var4 = function handleMediaPlayFinishedAnalytics(arg1) {
        var1 = arg1;
        var4 = var1.nativeEvent;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 23;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.handleMediaPlayFinishedAnalytics;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var _closure1_slot27 = var4;
    var4 = function isLoadingAtTop(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg2;
            if(var1) { _fun0015_ip = 347; continue _fun0015 }
case 348:
            var1 = false;
            return var1;
case 347:
            var2 = _closure1_slot29;
            var5 = undefined;
            var1 = arg1;
            var4 = var2.bind(var5)(var1);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = var2;
            if(var1) { _fun0015_ip = 349; continue _fun0015 }
case 350:
            var1 = var3.value;
            var7 = var1.changeType;
            var2 = _closure1_slot15;
            var2 = var2.INSERT;
            if(!(var7 !== var2)) { _fun0015_ip = 351; continue _fun0015 }
case 30:
            var7 = var4.bind(var5)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0015_ip = 349; continue _fun0015 }
case 352:
            _fun0015_ip = 350; continue _fun0015;
case 351:
            var2 = var1.index;
            var1 = 1;
            var1 = var2 <= var1;
            return var1;
case 349:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot28 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        var43 = arg1;
        var _closure2_slot0 = var43;
        var10 = _closure1_slot10;
        var2 = var10.useState;
        var1 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 30;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var5 = var2;
            var1 = new var5[var1](var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1 = var2.bind(var10)(var1);
        var6 = _closure1_slot4;
        var4 = undefined;
        var3 = 1;
        var1 = var6.bind(var4)(var1, var3);
        var2 = 0;
        var20 = var1[var2];
        var _closure2_slot1 = var20;
        var7 = var10.useState;
        var1 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 31;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var5 = var2;
            var1 = new var5[var1](var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1 = var7.bind(var10)(var1);
        var1 = var6.bind(var4)(var1, var3);
        var44 = var1[var2];
        var7 = var10.useState;
        var1 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 32;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = 'MessagesClassToFunctional';
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1 = var7.bind(var10)(var1);
        var1 = var6.bind(var4)(var1, var3);
        var21 = var1[var2];
        var _closure2_slot2 = var21;
        var1 = var10.useRef;
        var3 = false;
        var35 = var1.bind(var10)(var3);
        var _closure2_slot3 = var35;
        var1 = var10.useRef;
        var7 = var1.bind(var10)(var3);
        var _closure2_slot4 = var7;
        var2 = var10.useRef;
        var1 = new Array(0);
        var28 = var2.bind(var10)(var1);
        var _closure2_slot5 = var28;
        var1 = var10.useRef;
        var2 = null;
        var27 = var1.bind(var10)(var2);
        var _closure2_slot6 = var27;
        var1 = var10.useRef;
        var26 = var1.bind(var10)(var3);
        var _closure2_slot7 = var26;
        var1 = var10.useRef;
        var25 = var1.bind(var10)(var3);
        var1 = var10.useRef;
        var24 = var1.bind(var10)(var2);
        var1 = var10.useRef;
        var23 = var1.bind(var10)(var2);
        var1 = var10.useRef;
        var22 = var1.bind(var10)(var2);
        var _closure2_slot8 = var22;
        var3 = var10.useCallback;
        var2 = function(arg1) {
            var1 = arg1;
            var13 = var1.rows;
            var3 = var1.hasMoreMessagesAfter;
            var11 = var1.scrollData;
            var10 = var1.HACK_iOSForceAnimations;
            var9 = var1.forceReload;
            var8 = var1.isAnimated;
            var12 = _closure1_slot28;
            var7 = var1.rows;
            var2 = _closure2_slot4;
            var6 = var2.current;
            var1 = undefined;
            var12 = var12.bind(var1)(var7, var6);
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 33;
            var5 = var7[var5];
            var7 = var6.bind(var1)(var5);
            var6 = var7.updateRows;
            var4 = _closure2_slot8;
            var5 = var4.current;
            var4 = {};
            var4['rows'] = var13;
            var4['isLoadingAtTop'] = var12;
            var4['scrollData'] = var11;
            var4['HACK_iOSForceAnimations'] = var10;
            var4['forceReload'] = var9;
            var4['isAnimated'] = var8;
            var4 = var6.bind(var7)(var5, var4);
            var2['current'] = var3;
            return var1;
        };
        var1 = new Array(0);
        var9 = var3.bind(var10)(var2, var1);
        var2 = _closure1_slot0;
        var45 = _closure1_slot2;
        var1 = 34;
        var1 = var45[var1];
        var2 = var2.bind(var4)(var1);
        var1 = var2.useChatUpdatesQueue;
        var3 = var1.bind(var2)(var22, var9);
        var6 = var10.useCallback;
        var1 = var43.canChat;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = var43.channel;
        var2[1] = var1;
        var1 = function() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var1 = _closure2_slot0;
                var1 = var1.canChat;
                if(!var1) { _fun0016_ip = 353; continue _fun0016 }
case 354:
                var6 = _closure1_slot13;
                var5 = var6.can;
                var3 = _closure1_slot20;
                var4 = var3.ADD_REACTIONS;
                var3 = _closure2_slot0;
                var3 = var3.channel;
                var1 = var5.bind(var6)(var4, var3);
case 353:
                if(var1) { _fun0016_ip = 38; continue _fun0016 }
case 355:
                var2 = _closure2_slot0;
                var3 = var2.channel;
                var2 = var3.isPrivate;
                var1 = var2.bind(var3)();
case 38:
                return var1;
            }
        };
        var42 = var6.bind(var10)(var1, var2);
        var6 = var10.useCallback;
        var1 = var43.messages;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 22;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.find;
            var2 = _closure2_slot0;
            var5 = var2.messages;
            var2 = var5.toArray;
            var2 = var2.bind(var5)();
            var1 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.id;
                    var3 = var1.nonce;
                    var1 = _closure3_slot0;
                    var1 = var4 === var1;
                    if(var1) { _fun0017_ip = 62; continue _fun0017 }
case 34:
                    var2 = _closure3_slot0;
                    var1 = var3 === var2;
case 62:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var41 = var6.bind(var10)(var1, var2);
        var _closure2_slot9 = var41;
        var6 = var10.useCallback;
        var1 = var43.channel;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = var43.channelId;
        var2[1] = var1;
        var1 = var43.messages;
        var1 = var1.jumpTargetId;
        var2[2] = var1;
        var1 = function(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var1 = _closure2_slot0;
                var3 = var1.channel;
                var1 = var3.isForumPost;
                var1 = var1.bind(var3)();
                if(!var1) { _fun0018_ip = 9; continue _fun0018 }
case 356:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 24;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.castChannelIdAsMessageId;
                var2 = _closure2_slot0;
                var3 = var2.channelId;
                var3 = var4.bind(var5)(var3);
                var2 = var2.messages;
                var2 = var2.jumpTargetId;
                var1 = var3 === var2;
case 9:
                if(!var1) { _fun0018_ip = 357; continue _fun0018 }
case 358:
                var2 = arg1;
                var1 = !var2;
case 357:
                return var1;
            }
        };
        var40 = var6.bind(var10)(var1, var2);
        var _closure2_slot10 = var40;
        var39 = function handleVisibleMessagesChange(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var1 = arg1;
                var10 = var1.firstVisibleMessageRowIndex;
                var7 = var1.firstVisibleMessagePercentVisible;
                var8 = var1.lastVisibleMessageRowIndex;
                var2 = var1.lastVisibleMessagePercentVisible;
                var9 = var1.source;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 23;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.getVisibleMessages;
                var4 = {};
                var4['firstVisibleMessageRowIndex'] = var10;
                var4['lastVisibleMessageRowIndex'] = var8;
                var4['firstVisibleMessagePercentVisible'] = var7;
                var4['lastVisibleMessagePercentVisible'] = var2;
                var7 = _closure2_slot1;
                var4['chatManager'] = var7;
                var7 = _closure2_slot0;
                var7 = var7.channelId;
                var4['channelId'] = var7;
                var7 = var5.bind(var6)(var4);
                var5 = var7.length;
                var4 = 0;
                if(!(!(var5 <= var4))) { _fun0019_ip = 246; continue _fun0019 }
case 359:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 35;
                var3 = var5[var3];
                var8 = var4.bind(var1)(var3);
                var6 = var8.questsVisibleMobileMessagesChanged;
                var3 = {};
                var3['visibleMessages'] = var7;
                var3['source'] = var9;
                var3 = var6.bind(var8)(var3);
                var3 = 36;
                var6 = var5[var3];
                var11 = var4.bind(var1)(var6);
                var10 = var11.handleAnnouncementMessageViewTracking;
                var2 = _closure2_slot0;
                var14 = var2.shouldTrackAnnouncementMessageViews;
                var13 = var2.guildId;
                var12 = var2.channel;
                var16 = var11;
                var15 = var7;
                var6 = var16[var10](var15, var14, var13, var12, var11);
                var3 = var5[var3];
                var6 = var4.bind(var1)(var3);
                var5 = var6.handleRichPresenceInviteEmbedViewTracking;
                var14 = var2.shouldTrackRichPresenceInviteEmbedViews;
                var13 = var2.guildId;
                var12 = var2.channel;
                var16 = var6;
                var15 = var7;
                var2 = var16[var5](var15, var14, var13, var12, var11);
case 246:
                return var1;
            }
        };
        var _closure2_slot11 = var39;
        var38 = function findMessageIndex(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                if(!(var1 == var4)) { _fun0020_ip = 233; continue _fun0020 }
case 43:
                var1 = undefined;
                return var1;
case 233:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 37;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.findMessageRowIndex;
                var5 = _closure2_slot1;
                var1 = var5.getPreviousRows;
                var1 = var1.bind(var5)();
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            }
        };
        var _closure2_slot12 = var38;
        var37 = function fetchMoreBefore() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var1 = _closure2_slot0;
                var6 = var1.channelId;
                var7 = var1.messages;
                var1 = var7.hasMoreBefore;
                if(!var1) { _fun0021_ip = 62; continue _fun0021 }
case 360:
                var2 = var7.loadingMore;
                var1 = !var2;
case 62:
                if(!var1) { _fun0021_ip = 361; continue _fun0021 }
case 362:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 38;
                var1 = var3[var1];
                var5 = undefined;
                var3 = var2.bind(var5)(var1);
                var2 = var3.fetchMessages;
                var1 = {};
                var1['channelId'] = var6;
                var6 = var7.first;
                var6 = var6.bind(var7)();
                var7 = null;
                var7 = var7 == var6;
                if(var7) { _fun0021_ip = 363; continue _fun0021 }
case 357:
                var5 = var6.id;
case 363:
                var1['before'] = var5;
                var4 = _closure1_slot17;
                var1['limit'] = var4;
                var1 = var2.bind(var3)(var1);
case 361:
                var1 = undefined;
                return var1;
            }
        };
        var36 = function fetchMoreAfter() {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var1 = _closure2_slot0;
                var6 = var1.channelId;
                var7 = var1.messages;
                var1 = var7.hasMoreAfter;
                if(!var1) { _fun0022_ip = 62; continue _fun0022 }
case 360:
                var2 = var7.loadingMore;
                var1 = !var2;
case 62:
                if(!var1) { _fun0022_ip = 361; continue _fun0022 }
case 362:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 38;
                var1 = var3[var1];
                var5 = undefined;
                var3 = var2.bind(var5)(var1);
                var2 = var3.fetchMessages;
                var1 = {};
                var1['channelId'] = var6;
                var6 = var7.last;
                var6 = var6.bind(var7)();
                var7 = null;
                var7 = var7 == var6;
                if(var7) { _fun0022_ip = 363; continue _fun0022 }
case 357:
                var5 = var6.id;
case 363:
                var1['after'] = var5;
                var4 = _closure1_slot17;
                var1['limit'] = var4;
                var1 = var2.bind(var3)(var1);
case 361:
                var1 = undefined;
                return var1;
            }
        };
        var2 = _closure1_slot1;
        var1 = 39;
        var1 = var45[var1];
        var6 = var2.bind(var4)(var1);
        var1 = {};
        var1['chatRef'] = var22;
        var1['chatManager'] = var20;
        var1['chatUpdatesQueue'] = var3;
        var1['pendingUpdatesQueueRef'] = var28;
        var1['animatedRef'] = var35;
        var1['fetchMoreBefore'] = var37;
        var1['fetchMoreAfter'] = var36;
        var1['handleVisibleMessagesChange'] = var39;
        var1['applyNativeRowsUpdate'] = var9;
        var9 = var43.messages;
        var1['messages'] = var9;
        var9 = var43.channel;
        var1['channel'] = var9;
        var9 = var43.channelId;
        var1['channelId'] = var9;
        var9 = var43.screenIndex;
        var1['screenIndex'] = var9;
        var9 = var43.onScroll;
        var1['onScroll'] = var9;
        var9 = var43.useReducedMotion;
        var1['useReducedMotion'] = var9;
        var9 = var43.isStaff;
        var1['isStaff'] = var9;
        var9 = var43.visibleMessagesWindowHandler;
        var1['visibleMessagesWindowHandler'] = var9;
        var1 = var6.bind(var4)(var1);
        var34 = var1.hasHandledScrollRef;
        var _closure2_slot13 = var34;
        var33 = var1.isAtBottomRef;
        var _closure2_slot14 = var33;
        var32 = var1.isNearBottomRef;
        var _closure2_slot15 = var32;
        var31 = var1.isNearTopRef;
        var _closure2_slot16 = var31;
        var30 = var1.deceleratingRef;
        var _closure2_slot17 = var30;
        var29 = var1.draggingRef;
        var _closure2_slot18 = var29;
        var19 = var1.firstIgnoredScrollEventTimestampRef;
        var18 = var1.loadMoreBefore;
        var17 = var1.loadMoreAfter;
        var16 = var1.scrollToTop;
        var _closure2_slot19 = var16;
        var15 = var1.scrollToRelativeOffset;
        var14 = var1.scrollToTopMessage;
        var6 = var1.updateNativeRows;
        var12 = var1.handleScrollCallbacks;
        var _closure2_slot20 = var12;
        var11 = var1.handleScroll;
        var10 = var1.handleScrollPosition;
        var1 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0023_ip = 364; continue _fun0023 }
case 365:
                        var2 = undefined;
                        var _closure5_slot0 = var2;
                        var5 = _closure2_slot0;
                        var9 = var5.channel;
                        var11 = var5.useReducedMotion;
                        _closure5_slot0 = var11;
                        var5 = var9.isForumPost;
                        var5 = var5.bind(var9)();
                        if(!var5) { _fun0023_ip = 366; continue _fun0023 }
case 28:
                        var5 = _closure2_slot16;
                        var5 = var5.current;
                        if(var5) { _fun0023_ip = 366; continue _fun0023 }
case 236:
                        var6 = _closure2_slot9;
                        var8 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var12 = 24;
                        var5 = var5[var12];
                        var10 = var8.bind(var2)(var5);
                        var8 = var10.castChannelIdAsMessageId;
                        var5 = var9.id;
                        var5 = var8.bind(var10)(var5);
                        var5 = var6.bind(var2)(var5);
                        var6 = null;
                        if(!(var6 != var5)) { _fun0023_ip = 46; continue _fun0023 }
case 367:
                        var8 = _closure2_slot12;
                        var10 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var12];
                        var12 = var10.bind(var2)(var5);
                        var10 = var12.castChannelIdAsMessageId;
                        var5 = var9.id;
                        var5 = var10.bind(var12)(var5);
                        var5 = var8.bind(var2)(var5);
                        if(!(var6 != var5)) { _fun0023_ip = 368; continue _fun0023 }
case 244:
                        var8 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var6 = 33;
                        var6 = var10[var6];
                        var10 = var8.bind(var2)(var6);
                        var8 = var10.scrollTo;
                        var3 = _closure2_slot8;
                        var6 = var3.current;
                        var3 = {};
                        var11 = !var11;
                        var3['animated'] = var11;
                        var3 = var8.bind(var10)(var6, var5, var3);
                        var3 = global;
                        var6 = var3.setTimeout;
                        var3 = 10;
                        var5 = var3 * var5;
                        var3 = function() {
                            var3 = _closure2_slot19;
                            var1 = _closure5_slot0;
                            var2 = !var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var3 = var6.bind(var2)(var3, var5);
                        _fun0023_ip = 366; continue _fun0023;
case 368:
                        return var2;
case 46:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 38;
                        var3 = var6[var3];
                        var6 = var5.bind(var2)(var3);
                        var5 = var6.fetchMessages;
                        var3 = {};
                        var8 = var9.id;
                        var3['channelId'] = var8;
                        var8 = {};
                        var9 = var9.id;
                        var8['messageId'] = var9;
                        var9 = false;
                        var8['flash'] = var9;
                        var3['jump'] = var8;
                        var7 = _closure1_slot17;
                        var3['limit'] = var7;
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address=336);
case 369:
                        return var3;
case 257:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0023_ip = 370; continue _fun0023 }
case 371:
                        var5 = global;
                        var6 = var5.setTimeout;
                        var5 = function() {
                            var3 = _closure2_slot19;
                            var1 = _closure5_slot0;
                            var2 = !var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var4 = 50;
                        var4 = var6.bind(var2)(var5, var4);
                        _fun0023_ip = 366; continue _fun0023;
case 370:
                        return var3;
case 366:
                        return var2;
case 364:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var13 = var1.bind(var4)();
        var9 = function scrollToBottom() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var5 = arguments[0];
                var1 = undefined;
                if(!(var5 === var1)) { _fun0024_ip = 42; continue _fun0024 }
case 43:
                var5 = true;
case 42:
                var3 = _closure2_slot20;
                var2 = {};
                var4 = global;
                var7 = var4.Date;
                var4 = var7.now;
                var4 = var4.bind(var7)();
                var2['eventTimestamp'] = var4;
                var4 = true;
                var2['isAtBottom'] = var4;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 33;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.scrollToBottom;
                var2 = _closure2_slot8;
                var2 = var2.current;
                if(!var5) { _fun0024_ip = 372; continue _fun0024 }
case 357:
                var6 = _closure2_slot0;
                var6 = var6.useReducedMotion;
                var5 = !var6;
case 372:
                var2 = var3.bind(var4)(var2, var5);
                return var1;
            }
        };
        var _closure2_slot21 = var9;
        var1 = 40;
        var1 = var45[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['chatManager'] = var20;
        var1['rowGenerator'] = var44;
        var1['animatingStickerMessageIdRef'] = var27;
        var1['canAddNewReactions'] = var42;
        var44 = var43.channel;
        var1['channel'] = var44;
        var44 = var43.messages;
        var1['messages'] = var44;
        var44 = var43.isMessagesReady;
        var1['isMessagesReady'] = var44;
        var44 = var43.uploads;
        var1['uploads'] = var44;
        var44 = var43.roleStyle;
        var1['roleStyle'] = var44;
        var44 = var43.oldestUnreadMessageId;
        var1['oldestUnreadMessageId'] = var44;
        var44 = var43.replyingMessageId;
        var1['replyingMessageId'] = var44;
        var44 = var43.inlineAttachmentMedia;
        var1['inlineAttachmentMedia'] = var44;
        var44 = var43.inlineEmbedMedia;
        var1['inlineEmbedMedia'] = var44;
        var44 = var43.renderEmbeds;
        var1['renderEmbeds'] = var44;
        var44 = var43.renderReactions;
        var1['renderReactions'] = var44;
        var44 = var43.animateEmoji;
        var1['animateEmoji'] = var44;
        var44 = var43.gifAutoPlay;
        var1['gifAutoPlay'] = var44;
        var44 = var43.timestampHourCycle;
        var1['timestampHourCycle'] = var44;
        var44 = var43.currentUserId;
        var1['currentUserId'] = var44;
        var44 = var43.renderCommunicationDisabled;
        var1['renderCommunicationDisabled'] = var44;
        var44 = var43.selectedSummary;
        var1['selectedSummary'] = var44;
        var44 = var43.enableSwipeActions;
        var1['enableSwipeActions'] = var44;
        var44 = var43.isResourceChannel;
        var1['isResourceChannel'] = var44;
        var44 = var43.shouldObscureSpoiler;
        var1['shouldObscureSpoiler'] = var44;
        var44 = var43.shouldDisableInteractiveComponents;
        var1['shouldDisableInteractiveComponents'] = var44;
        var44 = var43.unloadableContentEntryMessageIds;
        var1['unloadableContentEntryMessageIds'] = var44;
        var44 = var43.containerWidth;
        var1['containerWidth'] = var44;
        var1['chatRef'] = var22;
        var1['loadedRef'] = var26;
        var1['animatedRef'] = var35;
        var1['hasMoreMessagesAfterForLastUpdateRef'] = var7;
        var1['updateNativeRows'] = var6;
        var6 = _closure1_slot28;
        var1['isLoadingAtTop'] = var6;
        var1['channelLatestMessageLoadingStatsManager'] = var21;
        var6 = var43.channelId;
        var1['channelId'] = var6;
        var6 = var43.isMessagesCached;
        var1['isMessagesCached'] = var6;
        var1['chatUpdatesQueue'] = var3;
        var1['shouldJumpToOriginalPost'] = var40;
        var1['findMessageIndex'] = var38;
        var1['scrollToTopMessage'] = var14;
        var3 = var43.useReducedMotion;
        var1['useReducedMotion'] = var3;
        var1 = var2.bind(var4)(var1);
        var7 = var1.updateRows;
        var6 = var1.scrollToMessageId;
        var3 = _closure1_slot21;
        var2 = _closure1_slot24;
        var1 = {};
        var44 = arg2;
        var1['ref'] = var44;
        var47 = var1;
        var46 = var43;
        var43 = copyDataProperties(var47, var46);
        var44 = _closure1_slot25;
        var43 = 'recordTimings';
        var1[42] = var44;
        var44 = _closure1_slot26;
        var43 = 'handleTapShowAltText';
        var1[42] = var44;
        var43 = _closure1_slot27;
        var8 = 'handleMediaPlayFinishedAnalytics';
        var1[7] = var43;
        var8 = 'canAddNewReactions';
        var1[7] = var42;
        var8 = 'getMessage';
        var1[7] = var41;
        var8 = 'shouldJumpToOriginalPost';
        var1[7] = var40;
        var40 = function handleTapTableView() {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 41;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.isIOS;
                var2 = var2.bind(var4)();
                if(!var2) { _fun0025_ip = 373; continue _fun0025 }
case 374:
                var4 = _closure2_slot0;
                var4 = var4.keyboardType;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 42;
                var3 = var6[var3];
                var3 = var5.bind(var1)(var3);
                var3 = var3.KeyboardTypes;
                var3 = var3.SYSTEM;
                var2 = var4 !== var3;
case 373:
                if(!var2) { _fun0025_ip = 375; continue _fun0025 }
case 376:
                var2 = _closure2_slot0;
                var2 = var2.chatInputRef;
                var3 = var2.current;
                var2 = null;
                if(!(var2 != var3)) { _fun0025_ip = 375; continue _fun0025 }
case 377:
                var2 = var3.closeCustomKeyboard;
                var2 = var2.bind(var3)();
case 375:
                return var1;
            }
        };
        var8 = 'handleTapTableView';
        var1[7] = var40;
        var8 = 'handleVisibleMessagesChange';
        var1[7] = var39;
        var39 = function handleFirstLayout(arg1) {
            var1 = arg1;
            var1 = var1.nativeEvent;
            var6 = var1.firstVisibleMessageIndex;
            var5 = var1.lastVisibleMessageIndex;
            var4 = var1.firstVisibleMessagePercentVisible;
            var1 = var1.lastVisibleMessagePercentVisible;
            var3 = _closure2_slot11;
            var2 = {};
            var2['firstVisibleMessageRowIndex'] = var6;
            var2['lastVisibleMessageRowIndex'] = var5;
            var2['firstVisibleMessagePercentVisible'] = var4;
            var2['lastVisibleMessagePercentVisible'] = var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 43;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var4 = var4.QuestsVisibleMessagesChangedSource;
            var4 = var4.FIRST_LAYOUT;
            var2['source'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var8 = 'handleFirstLayout';
        var1[7] = var39;
        var39 = function handleMessageVisibilityChanged(arg1) {
            var1 = arg1;
            var1 = var1.nativeEvent;
            var6 = var1.firstVisibleMessageIndex;
            var5 = var1.lastVisibleMessageIndex;
            var4 = var1.firstVisibleMessagePercentVisible;
            var1 = var1.lastVisibleMessagePercentVisible;
            var3 = _closure2_slot11;
            var2 = {};
            var2['firstVisibleMessageRowIndex'] = var6;
            var2['lastVisibleMessageRowIndex'] = var5;
            var2['firstVisibleMessagePercentVisible'] = var4;
            var2['lastVisibleMessagePercentVisible'] = var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 43;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var4 = var4.QuestsVisibleMessagesChangedSource;
            var4 = var4.VISIBILITY_CHANGED;
            var2['source'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var8 = 'handleMessageVisibilityChanged';
        var1[7] = var39;
        var8 = 'findMessageIndex';
        var1[7] = var38;
        var8 = 'fetchMoreBefore';
        var1[7] = var37;
        var8 = 'fetchMoreAfter';
        var1[7] = var36;
        var8 = 'animatedRef';
        var1[7] = var35;
        var8 = 'hasHandledScrollRef';
        var1[7] = var34;
        var8 = 'isAtBottomRef';
        var1[7] = var33;
        var8 = 'isNearBottomRef';
        var1[7] = var32;
        var8 = 'isNearTopRef';
        var1[7] = var31;
        var8 = 'deceleratingRef';
        var1[7] = var30;
        var8 = 'draggingRef';
        var1[7] = var29;
        var8 = 'pendingUpdatesQueueRef';
        var1[7] = var28;
        var8 = 'animatingStickerMessageIdRef';
        var1[7] = var27;
        var8 = 'loadedRef';
        var1[7] = var26;
        var8 = 'frozenRef';
        var1[7] = var25;
        var8 = 'prevPropsWhileFrozenRef';
        var1[7] = var24;
        var8 = 'prevStateWhileFrozenRef';
        var1[7] = var23;
        var8 = 'chatRef';
        var1[7] = var22;
        var22 = function startOrCancelChannelLatestMessagesLoad(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 23;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.startOrCancelChannelLatestMessagesLoad;
            var2 = {};
            var6 = _closure2_slot0;
            var7 = var6.messages;
            var7 = var7.jumpTargetId;
            var2['jumpTargetId'] = var7;
            var7 = var6.oldestUnreadMessageId;
            var2['oldestUnreadMessageId'] = var7;
            var8 = _closure2_slot10;
            var7 = arg1;
            var7 = var8.bind(var1)(var7);
            var2['shouldJumpToOriginalPost'] = var7;
            var6 = var6.channelId;
            var2['channelId'] = var6;
            var5 = _closure2_slot2;
            var2['tracker'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var8 = 'startOrCancelChannelLatestMessagesLoad';
        var1[7] = var22;
        var8 = 'channelLatestMessageLoadingStatsManager';
        var1[7] = var21;
        var8 = 'chatManager';
        var1[7] = var20;
        var8 = '_firstIgnoredScrollEventTimestampRef';
        var1[7] = var19;
        var8 = 'loadMoreBefore';
        var1[7] = var18;
        var8 = 'loadMoreAfter';
        var1[7] = var17;
        var8 = 'scrollToTop';
        var1[7] = var16;
        var8 = 'scrollToRelativeOffset';
        var1[7] = var15;
        var8 = 'scrollToTopMessage';
        var1[7] = var14;
        var8 = 'handleTapNavBar';
        var1[7] = var13;
        var13 = function scrollToNewMessages() {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var4 = _closure1_slot14;
                var3 = var4.ackMessageId;
                var7 = _closure2_slot0;
                var2 = var7.channel;
                var2 = var2.id;
                var5 = var3.bind(var4)(var2);
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 38;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.jumpToMessage;
                var2 = {};
                var7 = var7.channel;
                var7 = var7.id;
                var2['channelId'] = var7;
                var7 = null;
                if(!(var7 == var5)) { _fun0026_ip = 378; continue _fun0026 }
case 379:
                var6 = _closure2_slot0;
                var6 = var6.channel;
                var5 = var6.id;
case 378:
                var2['messageId'] = var5;
                var5 = 1;
                var2['offset'] = var5;
                var5 = 'Mark As Read';
                var2['context'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var8 = 'scrollToNewMessages';
        var1[7] = var13;
        var13 = function getChatRef() {
            var1 = _closure2_slot8;
            return var1;
        };
        var8 = 'getChatRef';
        var1[7] = var13;
        var8 = 'handleScrollCallbacks';
        var1[7] = var12;
        var8 = 'handleScroll';
        var1[7] = var11;
        var8 = 'handleScrollPosition';
        var1[7] = var10;
        var8 = 'scrollToBottom';
        var1[7] = var9;
        var9 = function jumpToPresent() {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = var3.messages;
                var5 = var3.channel;
                var7 = var2.jumpReturnTargetId;
                var3 = null;
                if(!(var3 != var7)) { _fun0027_ip = 376; continue _fun0027 }
case 3:
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 38;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var6.bind(var3)(var4);
                var4 = var6.jumpToMessage;
                var3 = {};
                var8 = var5.id;
                var3['channelId'] = var8;
                var3['messageId'] = var7;
                var7 = true;
                var3['flash'] = var7;
                var3 = var4.bind(var6)(var3);
                _fun0027_ip = 380; continue _fun0027;
case 376:
                var3 = var2.loadingMore;
                if(var3) { _fun0027_ip = 380; continue _fun0027 }
case 378:
                var2 = var2.hasMoreAfter;
                if(var2) { _fun0027_ip = 41; continue _fun0027 }
case 372:
                var2 = _closure2_slot21;
                var1 = undefined;
                var1 = var2.bind(var1)();
                _fun0027_ip = 380; continue _fun0027;
case 41:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 38;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetchMessages;
                var1 = {};
                var5 = var5.id;
                var1['channelId'] = var5;
                var4 = _closure1_slot17;
                var1['limit'] = var4;
                var4 = {};
                var5 = true;
                var4['present'] = var5;
                var1['jump'] = var4;
                var1 = var2.bind(var3)(var1);
case 380:
                var1 = undefined;
                return var1;
            }
        };
        var8 = 'jumpToPresent';
        var1[7] = var9;
        var8 = function clearRows() {
            var1 = _closure2_slot3;
            var7 = false;
            var1['current'] = var7;
            var1 = _closure2_slot13;
            var1['current'] = var7;
            var1 = _closure2_slot15;
            var1['current'] = var7;
            var1 = _closure2_slot14;
            var1['current'] = var7;
            var1 = _closure2_slot16;
            var1['current'] = var7;
            var1 = _closure2_slot17;
            var1['current'] = var7;
            var1 = _closure2_slot18;
            var1['current'] = var7;
            var1 = _closure2_slot4;
            var1['current'] = var7;
            var3 = _closure2_slot5;
            var1 = new Array(0);
            var3['current'] = var1;
            var1 = _closure2_slot7;
            var1['current'] = var7;
            var3 = _closure2_slot6;
            var1 = null;
            var3['current'] = var1;
            var3 = _closure2_slot1;
            var1 = var3.clear;
            var1 = var1.bind(var3)();
            var6 = _closure1_slot11;
            var1 = _closure2_slot0;
            var5 = var1.channelId;
            var4 = var1.screenIndex;
            var1 = undefined;
            var4 = var6.bind(var1)(var5, var4, var7);
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 33;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.clearRows;
            var2 = _closure2_slot8;
            var2 = var2.current;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5 = 'clearRows';
        var1[4] = var8;
        var5 = 'updateRows';
        var1[4] = var7;
        var5 = 'scrollToMessageId';
        var1[4] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 'MessagesClassToFunctional';
    var2['displayName'] = var4;
    var4 = 44;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/MessagesClassToFunctional.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();