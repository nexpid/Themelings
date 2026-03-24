// app/modules/messages/native/MessagesClassToFunctional.tsx
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
            var9 = _closure1_slot27;
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
            var7 = _closure1_slot27;
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
    var _closure1_slot26 = var1;
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
    var _closure1_slot27 = var1;
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
            _closure1_slot28 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot28 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var8 = var6[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.findNodeHandle;
    var _closure1_slot10 = var4;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Changeset;
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.ActivityActionTypes;
    var _closure1_slot16 = var9;
    var9 = var4.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot17 = var9;
    var9 = var4.MessageFlags;
    var _closure1_slot18 = var9;
    var9 = var4.MessageTypes;
    var _closure1_slot19 = var9;
    var4 = var4.Permissions;
    var _closure1_slot20 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot21 = var9;
    var9 = var4.Fragment;
    var _closure1_slot22 = var9;
    var4 = var4.jsxs;
    var _closure1_slot23 = var4;
    var4 = 15;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var4 = var7.prototype;
    var9 = Object.create(var4, {constructor: {value: var7}});
    var4 = 'MessagesClassToFunctional';
    var13 = var9;
    var12 = var4;
    var7 = new var13[var7](var12, var11);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot24 = var7;
    var9 = var8.Component;
    var7 = function(arg1) {
        var4 = function MessagesClass(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot4;
                var4 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot7;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot6;
                var1 = _closure1_slot28;
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
                var7 = _closure1_slot7;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 41:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = false;
                var1['animated'] = var4;
                var1['hasHandledScroll'] = var4;
                var1['isAtBottom'] = var4;
                var1['isNearBottom'] = var4;
                var1['isNearTop'] = var4;
                var1['decelerating'] = var4;
                var1['dragging'] = var4;
                var1['hasMoreMessagesAfterForLastUpdate'] = var4;
                var6 = new Array(0);
                var1['pendingUpdatesQueue'] = var6;
                var6 = null;
                var1['animatingStickerMessageId'] = var6;
                var6 = global;
                var6 = var6.Set;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var15 = var7;
                var6 = new var15[var6](var14);
                var6 = var6 instanceof Object ? var6 : var7;
                var1['dismissedMessageIds'] = var6;
                var1['_loaded'] = var4;
                var1['_frozen'] = var4;
                var6 = _closure1_slot9;
                var4 = var6.createRef;
                var4 = var4.bind(var6)();
                var1['_chatRef'] = var4;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 16;
                var4 = var7[var4];
                var10 = var6.bind(var5)(var4);
                var4 = var10.prototype;
                var8 = Object.create(var4, {constructor: {value: var10}});
                var14 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1._chatRef;
                        var3 = var1.current;
                        var1 = null;
                        if(!(var1 !== var3)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                        var4 = _closure1_slot10;
                        var2 = _closure3_slot0;
                        var2 = var2._chatRef;
                        var3 = var2.current;
                        var2 = undefined;
                        var1 = var4.bind(var2)(var3);
case 42:
                        return var1;
                    }
                };
                var13 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.applyNativeRowsUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var15 = var8;
                var4 = new var15[var10](var14, var13, var12);
                var4 = var4 instanceof Object ? var4 : var8;
                var1['_chatUpdatesQueue'] = var4;
                var4 = {'shouldForceRender': false, 'hasJumpedToOriginalPost': false};
                var1['state'] = var4;
                var4 = var1.props;
                var1['prevPropsWhileFrozen'] = var4;
                var4 = var1.state;
                var1['prevStateWhileFrozen'] = var4;
                var4 = 17;
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var8 = var4.prototype;
                var8 = Object.create(var8, {constructor: {value: var4}});
                var15 = var8;
                var4 = new var15[var4](var14);
                var4 = var4 instanceof Object ? var4 : var8;
                var1['chatManager'] = var4;
                var4 = 18;
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var8 = var4.prototype;
                var8 = Object.create(var8, {constructor: {value: var4}});
                var15 = var8;
                var4 = new var15[var4](var14);
                var4 = var4 instanceof Object ? var4 : var8;
                var1['rowGenerator'] = var4;
                var4 = 19;
                var4 = var7[var4];
                var8 = var6.bind(var5)(var4);
                var4 = var8.prototype;
                var6 = Object.create(var4, {constructor: {value: var8}});
                var14 = 'MessagesClassToFunctional';
                var15 = var6;
                var4 = new var15[var8](var14, var13);
                var4 = var4 instanceof Object ? var4 : var6;
                var1['channelLatestMessageLoadingStatsManager'] = var4;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 20;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.startOrCancelChannelLatestMessagesLoad;
                    var2 = {};
                    var5 = _closure3_slot0;
                    var6 = var5.props;
                    var6 = var6.messages;
                    var6 = var6.jumpTargetId;
                    var2['jumpTargetId'] = var6;
                    var6 = var5.props;
                    var6 = var6.oldestUnreadMessageId;
                    var2['oldestUnreadMessageId'] = var6;
                    var6 = var5.shouldJumpToOriginalPost;
                    var6 = var6.bind(var5)();
                    var2['shouldJumpToOriginalPost'] = var6;
                    var6 = var5.props;
                    var6 = var6.channelId;
                    var2['channelId'] = var6;
                    var5 = var5.channelLatestMessageLoadingStatsManager;
                    var2['tracker'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['startOrCancelChannelLatestMessagesLoad'] = var4;
                var6 = _closure1_slot0;
                var4 = 21;
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var7 = var4.MessagesHandlers;
                var4 = var7.prototype;
                var6 = Object.create(var4, {constructor: {value: var7}});
                var14 = function() {
                    var1 = {};
                    var2 = _closure3_slot0;
                    var3 = var2.getMessage;
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
                    var3 = var2.loadMoreBefore;
                    var1['loadMoreBefore'] = var3;
                    var2 = var2.loadMoreAfter;
                    var1['loadMoreAfter'] = var2;
                    var2 = function dismissMessage(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var3 = _closure1_slot26;
                            var1 = undefined;
                            var2 = arg1;
                            var8 = var3.bind(var1)(var2);
                            var6 = var8.bind(var1)();
                            var4 = var6.done;
                            var5 = true;
                            var7 = var6;
                            var6 = false;
                            var3 = false;
                            if(var4) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                            var10 = var7.value;
                            var4 = _closure3_slot0;
                            var9 = var4.dismissedMessageIds;
                            var4 = var9.has;
                            var4 = var4.bind(var9)(var10);
                            if(var4) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                            var4 = _closure3_slot0;
                            var9 = var4.dismissedMessageIds;
                            var4 = var9.add;
                            var4 = var4.bind(var9)(var10);
                            var6 = true;
case 46:
                            var10 = var8.bind(var1)();
                            var4 = var10.done;
                            var7 = var10;
                            var3 = var6;
                            if(!var4) { _fun0007_ip = 45; continue _fun0007 }
case 44:
                            if(!var3) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                            var4 = _closure3_slot0;
                            var3 = var4.setState;
                            var2 = {};
                            var2['shouldForceRender'] = var5;
                            var2 = var3.bind(var4)(var2);
case 48:
                            return var1;
                        }
                    };
                    var1['dismissMessage'] = var2;
                    return var1;
                };
                var15 = var6;
                var4 = new var15[var7](var14, var13);
                var4 = var4 instanceof Object ? var4 : var6;
                var1['handlers'] = var4;
                var4 = function(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 22;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.find;
                    var2 = _closure3_slot0;
                    var2 = var2.props;
                    var5 = var2.messages;
                    var2 = var5.toArray;
                    var2 = var2.bind(var5)();
                    var1 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var1 = arg1;
                            var4 = var1.id;
                            var3 = var1.nonce;
                            var1 = _closure4_slot0;
                            var1 = var4 === var1;
                            if(var1) { _fun0008_ip = 50; continue _fun0008 }
case 34:
                            var2 = _closure4_slot0;
                            var1 = var3 === var2;
case 50:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1['getMessage'] = var4;
                var4 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var3 = var1.channel;
                        var1 = var3.isForumPost;
                        var1 = var1.bind(var3)();
                        if(!var1) { _fun0009_ip = 51; continue _fun0009 }
case 3:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 23;
                        var4 = var4[var3];
                        var3 = undefined;
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.castChannelIdAsMessageId;
                        var3 = _closure3_slot0;
                        var4 = var3.props;
                        var4 = var4.channelId;
                        var4 = var5.bind(var6)(var4);
                        var3 = var3.props;
                        var3 = var3.messages;
                        var3 = var3.jumpTargetId;
                        var1 = var4 === var3;
case 51:
                        if(!var1) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                        var2 = _closure3_slot0;
                        var2 = var2.state;
                        var2 = var2.hasJumpedToOriginalPost;
                        var1 = !var2;
case 52:
                        return var1;
                    }
                };
                var1['shouldJumpToOriginalPost'] = var4;
                var4 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var4 = arg1;
                        var5 = arguments[1];
                        var3 = arguments[2];
                        var _closure4_slot0 = var4;
                        var1 = undefined;
                        if(!(var5 === var1)) { _fun0010_ip = 31; continue _fun0010 }
case 54:
                        var5 = false;
case 31:
                        var _closure4_slot1 = var5;
                        if(!(var3 === var1)) { _fun0010_ip = 55; continue _fun0010 }
case 56:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 24;
                        var5 = var7[var5];
                        var5 = var6.bind(var1)(var5);
                        var5 = var5.JumpTypes;
                        var3 = var5.INSTANT;
case 55:
                        var _closure4_slot2 = var3;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0010_ip = 57; continue _fun0010 }
case 38:
                        var3 = global;
                        var4 = var3.setTimeout;
                        var3 = function() {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                var4 = _closure3_slot0;
                                var3 = var4.findMessageIndex;
                                var2 = _closure4_slot0;
                                var5 = var3.bind(var4)(var2);
                                var3 = null;
                                if(!(var3 != var5)) { _fun0011_ip = 58; continue _fun0011 }
case 59:
                                var2 = _closure3_slot0;
                                var2 = var2._chatRef;
                                var2 = var2.current;
                                if(!(var3 != var2)) { _fun0011_ip = 58; continue _fun0011 }
case 28:
                                var3 = _closure4_slot1;
                                var2 = false;
                                if(!var3) { _fun0011_ip = 60; continue _fun0011 }
case 61:
                                var8 = _closure3_slot0;
                                var6 = var8.updateRows;
                                var4 = {};
                                var3 = _closure4_slot0;
                                var4['scrollToMessageId'] = var3;
                                var4['jumpTargetId'] = var3;
                                var9 = _closure4_slot2;
                                var4['jumpType'] = var9;
                                var4['focusTargetId'] = var3;
                                var10 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var3 = 24;
                                var9 = var9[var3];
                                var3 = undefined;
                                var3 = var10.bind(var3)(var9);
                                var3 = var3.JumpTypes;
                                var3 = var3.INSTANT;
                                var4['overrideScrollJumpType'] = var3;
                                var3 = true;
                                var4['isRescrolling'] = var3;
                                var4 = var6.bind(var8)(var4);
                                var2 = true;
case 60:
                                if(var2) { _fun0011_ip = 58; continue _fun0011 }
case 62:
                                var3 = _closure1_slot1;
                                var10 = _closure1_slot2;
                                var2 = 25;
                                var2 = var10[var2];
                                var9 = undefined;
                                var4 = var3.bind(var9)(var2);
                                var3 = var4.scrollTo;
                                var1 = _closure3_slot0;
                                var1 = var1._chatRef;
                                var2 = var1.current;
                                var1 = {};
                                var7 = _closure4_slot2;
                                var8 = _closure1_slot0;
                                var6 = 24;
                                var6 = var10[var6];
                                var6 = var8.bind(var9)(var6);
                                var6 = var6.JumpTypes;
                                var6 = var6.ANIMATED;
                                var6 = var7 === var6;
                                var1['animated'] = var6;
                                var1 = var3.bind(var4)(var2, var5, var1);
case 58:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = 50;
                        var2 = var4.bind(var1)(var3, var2);
case 57:
                        return var1;
                    }
                };
                var1['maybeRescrollToMessageId'] = var4;
                var4 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var3 = arg1;
                        var2 = _closure3_slot0;
                        var2 = var2._chatUpdatesQueue;
                        var2 = var2.isBlocking;
                        if(var2) { _fun0012_ip = 63; continue _fun0012 }
case 64:
                        var2 = var3.isLoadingAtTop;
                        if(!var2) { _fun0012_ip = 65; continue _fun0012 }
case 59:
                        var2 = _closure3_slot0;
                        var2 = var2.decelerating;
                        if(var2) { _fun0012_ip = 66; continue _fun0012 }
case 67:
                        var2 = _closure3_slot0;
                        var2 = var2.dragging;
                        if(var2) { _fun0012_ip = 66; continue _fun0012 }
case 65:
                        var4 = _closure3_slot0;
                        var2 = var4.applyNativeRowsUpdate;
                        var2 = var2.bind(var4)(var3);
                        _fun0012_ip = 68; continue _fun0012;
case 66:
                        var2 = _closure3_slot0;
                        var4 = var2._chatUpdatesQueue;
                        var2 = var4.add;
                        var2 = var2.bind(var4)(var3);
                        _fun0012_ip = 68; continue _fun0012;
case 63:
                        var1 = _closure3_slot0;
                        var2 = var1._chatUpdatesQueue;
                        var1 = var2.add;
                        var1 = var1.bind(var2)(var3);
case 68:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['updateNativeRows'] = var4;
                var4 = function(arg1) {
                    var1 = arg1;
                    var12 = var1.rows;
                    var3 = var1.hasMoreMessagesAfter;
                    var10 = var1.scrollData;
                    var9 = var1.HACK_iOSForceAnimations;
                    var8 = var1.forceReload;
                    var2 = _closure3_slot0;
                    var5 = var2.isLoadingAtTop;
                    var4 = var1.rows;
                    var1 = var2.hasMoreMessagesAfterForLastUpdate;
                    var11 = var5.bind(var2)(var4, var1);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 25;
                    var4 = var4[var1];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.updateRows;
                    var4 = var2._chatRef;
                    var5 = var4.current;
                    var4 = {};
                    var4['rows'] = var12;
                    var4['isLoadingAtTop'] = var11;
                    var4['scrollData'] = var10;
                    var4['HACK_iOSForceAnimations'] = var9;
                    var4['forceReload'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var2['hasMoreMessagesAfterForLastUpdate'] = var3;
                    return var1;
                };
                var1['applyNativeRowsUpdate'] = var4;
                var4 = function(arg1, arg2) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = arg2;
                        if(var1) { _fun0013_ip = 69; continue _fun0013 }
case 70:
                        var1 = false;
                        return var1;
case 69:
                        var2 = _closure1_slot26;
                        var5 = undefined;
                        var1 = arg1;
                        var4 = var2.bind(var5)(var1);
                        var2 = var4.bind(var5)();
                        var1 = var2.done;
                        var3 = var2;
                        if(var1) { _fun0013_ip = 71; continue _fun0013 }
case 72:
                        var1 = var3.value;
                        var7 = var1.changeType;
                        var2 = _closure1_slot15;
                        var2 = var2.INSERT;
                        if(!(var7 !== var2)) { _fun0013_ip = 73; continue _fun0013 }
case 30:
                        var7 = var4.bind(var5)();
                        var2 = var7.done;
                        var3 = var7;
                        if(var2) { _fun0013_ip = 71; continue _fun0013 }
case 74:
                        _fun0013_ip = 72; continue _fun0013;
case 73:
                        var2 = var1.index;
                        var1 = 1;
                        var1 = var2 <= var1;
                        return var1;
case 71:
                        var1 = false;
                        return var1;
                    }
                };
                var1['isLoadingAtTop'] = var4;
                var4 = function() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var3 = arguments[0];
                        var1 = undefined;
                        if(!(var3 === var1)) { _fun0014_ip = 75; continue _fun0014 }
case 76:
                        var3 = {};
case 75:
                        var17 = var3.forceRender;
                        if(!(var17 === var1)) { _fun0014_ip = 64; continue _fun0014 }
case 31:
                        var17 = false;
case 64:
                        var8 = var3.forceReload;
                        var13 = var3.updateMessageIds;
                        if(!(var13 === var1)) { _fun0014_ip = 47; continue _fun0014 }
case 45:
                        var4 = global;
                        var4 = var4.Set;
                        var5 = var4.prototype;
                        var5 = Object.create(var5, {constructor: {value: var4}});
                        var24 = var5;
                        var4 = new var24[var4](var23);
                        var13 = var4 instanceof Object ? var4 : var5;
case 47:
                        var16 = var3.scrollToMessageId;
                        if(!(var16 === var1)) { _fun0014_ip = 77; continue _fun0014 }
case 78:
                        var16 = null;
case 77:
                        var15 = var3.jumpTargetId;
                        if(!(var15 === var1)) { _fun0014_ip = 79; continue _fun0014 }
case 46:
                        var15 = null;
case 79:
                        var20 = var3.jumpType;
                        if(!(var20 === var1)) { _fun0014_ip = 80; continue _fun0014 }
case 81:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 24;
                        var4 = var6[var4];
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.JumpTypes;
                        var20 = var4.ANIMATED;
case 80:
                        var10 = var3.focusTargetId;
                        if(!(var10 === var1)) { _fun0014_ip = 82; continue _fun0014 }
case 83:
                        var10 = null;
case 82:
                        var11 = var3.ignoreEmbedDescriptionCache;
                        if(!(var11 === var1)) { _fun0014_ip = 84; continue _fun0014 }
case 85:
                        var11 = false;
case 84:
                        var9 = var3.messagesNewlyLoaded;
                        if(!(var9 === var1)) { _fun0014_ip = 86; continue _fun0014 }
case 87:
                        var9 = false;
case 86:
                        var12 = var3.shouldInitialScroll;
                        if(!(var12 === var1)) { _fun0014_ip = 88; continue _fun0014 }
case 89:
                        var12 = false;
case 88:
                        var19 = var3.minimizeScrolling;
                        if(!(var19 === var1)) { _fun0014_ip = 90; continue _fun0014 }
case 91:
                        var19 = false;
case 90:
                        var18 = var3.isRescrolling;
                        if(!(var18 === var1)) { _fun0014_ip = 92; continue _fun0014 }
case 93:
                        var18 = false;
case 92:
                        var7 = var3.overrideScrollJumpType;
                        var3 = _closure3_slot0;
                        var3 = var3._chatRef;
                        var3 = var3.current;
                        var14 = null;
                        if(!(var14 != var3)) { _fun0014_ip = 94; continue _fun0014 }
case 95:
                        var3 = _closure3_slot0;
                        var6 = var3.createRows;
                        var5 = {};
                        var5['forceRender'] = var17;
                        var5['updateMessageIds'] = var13;
                        var5['ignoreEmbedDescriptionCache'] = var11;
                        var13 = var6.bind(var3)(var5);
                        var6 = var3._loaded;
                        var3 = var3.props;
                        var3 = var3.selectedSummary;
                        var5 = var14 != var3;
                        var11 = undefined;
                        if(!var5) { _fun0014_ip = 96; continue _fun0014 }
case 97:
                        var3 = var3.startId;
                        var11 = undefined;
                        if(!(var3 === var16)) { _fun0014_ip = 96; continue _fun0014 }
case 98:
                        var5 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var3 = 25;
                        var3 = var17[var3];
                        var3 = var5.bind(var1)(var3);
                        var3 = var3.ChatScrollPosition;
                        var11 = var3.MIDDLE;
case 96:
                        if(!(var14 != var13)) { _fun0014_ip = 99; continue _fun0014 }
case 100:
                        var5 = var13.length;
                        var3 = 0;
                        if(!(!(var5 > var3))) { _fun0014_ip = 101; continue _fun0014 }
case 99:
                        var3 = _closure3_slot0;
                        var3 = var3._loaded;
                        if(!var3) { _fun0014_ip = 102; continue _fun0014 }
case 103:
                        var3 = _closure3_slot0;
                        var5 = var3._chatUpdatesQueue;
                        var3 = var5.hasUpdates;
                        var3 = var3.bind(var5)();
                        if(var3) { _fun0014_ip = 104; continue _fun0014 }
case 102:
                        var3 = _closure3_slot0;
                        var3 = var3._loaded;
                        if(var3) { _fun0014_ip = 105; continue _fun0014 }
case 106:
                        if(!(var14 != var13)) { _fun0014_ip = 105; continue _fun0014 }
case 107:
                        var5 = var13.length;
                        var3 = 0;
                        if(!(var3 === var5)) { _fun0014_ip = 105; continue _fun0014 }
case 108:
                        var5 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var3 = 25;
                        var3 = var17[var3];
                        var17 = var5.bind(var1)(var3);
                        var5 = var17.fadeIn;
                        var3 = _closure3_slot0;
                        var3 = var3._chatRef;
                        var3 = var3.current;
                        var3 = var5.bind(var17)(var3);
                        _fun0014_ip = 109; continue _fun0014;
case 105:
                        if(!(var14 != var16)) { _fun0014_ip = 110; continue _fun0014 }
case 111:
                        var5 = _closure3_slot0;
                        var3 = var5.shouldJumpToOriginalPost;
                        var3 = var3.bind(var5)();
                        if(var3) { _fun0014_ip = 110; continue _fun0014 }
case 112:
                        var17 = _closure3_slot0;
                        var5 = var17.scrollToMessageId;
                        var3 = {};
                        var3['scrollToMessageId'] = var16;
                        var3['jumpTargetId'] = var15;
                        var3['jumpType'] = var20;
                        var3['scrollPosition'] = var11;
                        var3['minimizeScrolling'] = var19;
                        var3['isRescrolling'] = var18;
                        var3 = var5.bind(var17)(var3);
                        _fun0014_ip = 109; continue _fun0014;
case 110:
                        if(!(var14 != var10)) { _fun0014_ip = 109; continue _fun0014 }
case 113:
                        var5 = _closure3_slot0;
                        var3 = var5.findMessageIndex;
                        var18 = var3.bind(var5)(var10);
                        if(!(var14 != var18)) { _fun0014_ip = 109; continue _fun0014 }
case 114:
                        var5 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var3 = 25;
                        var3 = var17[var3];
                        var17 = var5.bind(var1)(var3);
                        var5 = var17.focus;
                        var3 = _closure3_slot0;
                        var3 = var3._chatRef;
                        var3 = var3.current;
                        var3 = var5.bind(var17)(var3, var18);
                        _fun0014_ip = 109; continue _fun0014;
case 104:
                        var3 = _closure3_slot0;
                        var5 = var3._chatUpdatesQueue;
                        var3 = var5.tryFlush;
                        var3 = var3.bind(var5)();
                        _fun0014_ip = 109; continue _fun0014;
case 101:
                        var5 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var3 = 26;
                        var3 = var17[var3];
                        var5 = var5.bind(var1)(var3);
                        var3 = {};
                        var17 = _closure3_slot0;
                        var18 = var17.chatManager;
                        var17 = var18.getPreviousRows;
                        var17 = var17.bind(var18)();
                        var3['rows'] = var17;
                        var3['scrollToMessageId'] = var16;
                        var3['jumpTargetId'] = var15;
                        if(!(var14 == var7)) { _fun0014_ip = 115; continue _fun0014 }
case 116:
                        var14 = _closure3_slot0;
                        var14 = var14.props;
                        var14 = var14.messages;
                        var7 = var14.jumpType;
case 115:
                        var3['jumpType'] = var7;
                        var7 = _closure3_slot0;
                        var7 = var7._loaded;
                        var7 = !var7;
                        if(var7) { _fun0014_ip = 117; continue _fun0014 }
case 118:
                        var7 = var12;
case 117:
                        var3['shouldInitialScroll'] = var7;
                        var7 = _closure3_slot0;
                        var12 = var7.animated;
                        var3['animated'] = var12;
                        var3['scrollPosition'] = var11;
                        var3['focusTargetId'] = var10;
                        var10 = function getInitialScrollMessageId() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 27;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getOldestUnreadMentionOnLoad;
                            var1 = {};
                            var4 = _closure3_slot0;
                            var5 = var4.props;
                            var5 = var5.channel;
                            var1['channel'] = var5;
                            var4 = var4.props;
                            var4 = var4.messages;
                            var1['messages'] = var4;
                            var4 = true;
                            var1['track'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var3['getInitialScrollMessageId'] = var10;
                        var10 = var5.bind(var1)(var3);
                        var3 = true;
                        var7['_loaded'] = var3;
                        var5 = var7.updateNativeRows;
                        var3 = {};
                        var3['rows'] = var13;
                        var11 = var7.props;
                        var11 = var11.messages;
                        var11 = var11.hasMoreAfter;
                        var3['hasMoreMessagesAfter'] = var11;
                        var12 = var7.isLoadingAtTop;
                        var11 = var7.hasMoreMessagesAfterForLastUpdate;
                        var11 = var12.bind(var7)(var13, var11);
                        var3['isLoadingAtTop'] = var11;
                        var3['scrollData'] = var10;
                        var3['HACK_iOSForceAnimations'] = var9;
                        var3['forceReload'] = var8;
                        var3 = var5.bind(var7)(var3);
                        if(var6) { _fun0014_ip = 109; continue _fun0014 }
case 119:
                        var8 = _closure3_slot0;
                        var7 = var8.channelLatestMessageLoadingStatsManager;
                        var5 = var7.finish;
                        var3 = {};
                        var9 = var8.props;
                        var9 = var9.channelId;
                        var3['channelId'] = var9;
                        var8 = var8.props;
                        var8 = var8.isMessagesCached;
                        var3['areMessagesCached'] = var8;
                        var3 = var5.bind(var7)(var3);
case 109:
                        var3 = _closure3_slot0;
                        var3 = var3._loaded;
                        if(!var3) { _fun0014_ip = 120; continue _fun0014 }
case 121:
                        var5 = _closure3_slot0;
                        var5 = var5._loaded;
                        var3 = var5 !== var6;
case 120:
                        if(!var3) { _fun0014_ip = 122; continue _fun0014 }
case 123:
                        var4 = _closure3_slot0;
                        var4 = var4.props;
                        var3 = var4.isResourceChannel;
case 122:
                        if(!var3) { _fun0014_ip = 94; continue _fun0014 }
case 124:
                        var3 = global;
                        var4 = var3.setTimeout;
                        var3 = function() {
                            var2 = _closure3_slot0;
                            var1 = var2.scrollToTopMessage;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var2 = 100;
                        var2 = var4.bind(var1)(var3, var2);
case 94:
                        return var1;
                    }
                };
                var1['updateRows'] = var4;
                var4 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var3 = arg1;
                        var10 = var3.scrollToMessageId;
                        var _closure4_slot0 = var10;
                        var9 = var3.jumpTargetId;
                        var1 = undefined;
                        if(!(var9 === var1)) { _fun0015_ip = 125; continue _fun0015 }
case 126:
                        var9 = null;
case 125:
                        var _closure4_slot1 = var9;
                        var11 = var3.jumpType;
                        if(!(var11 === var1)) { _fun0015_ip = 127; continue _fun0015 }
case 128:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 24;
                        var4 = var6[var4];
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.JumpTypes;
                        var11 = var4.ANIMATED;
case 127:
                        var8 = var3.scrollPosition;
                        if(!(var8 === var1)) { _fun0015_ip = 129; continue _fun0015 }
case 130:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 25;
                        var4 = var6[var4];
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.ChatScrollPosition;
                        var8 = var4.TOP;
case 129:
                        var5 = var3.minimizeScrolling;
                        if(!(var5 === var1)) { _fun0015_ip = 131; continue _fun0015 }
case 132:
                        var5 = false;
case 131:
                        var6 = var3.isRescrolling;
                        if(!(var6 === var1)) { _fun0015_ip = 133; continue _fun0015 }
case 134:
                        var6 = false;
case 133:
                        var _closure4_slot2 = var1;
                        var _closure4_slot3 = var1;
                        var4 = _closure3_slot0;
                        var4 = var4.props;
                        var4 = var4.useReducedMotion;
                        if(var4) { _fun0015_ip = 135; continue _fun0015 }
case 136:
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 24;
                        var7 = var13[var7];
                        var7 = var12.bind(var1)(var7);
                        var7 = var7.JumpTypes;
                        var7 = var7.INSTANT;
                        var4 = var11 === var7;
case 135:
                        var11 = !var4;
                        _closure4_slot2 = var11;
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 28;
                        var7 = var13[var7];
                        var12 = var12.bind(var1)(var7);
                        var7 = var12.isIOS;
                        var7 = var7.bind(var12)();
                        if(!var7) { _fun0015_ip = 137; continue _fun0015 }
case 138:
                        if(var6) { _fun0015_ip = 137; continue _fun0015 }
case 139:
                        var13 = _closure3_slot0;
                        var12 = var13.maybeRescrollToMessageId;
                        var7 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var6 = 24;
                        var6 = var14[var6];
                        var6 = var7.bind(var1)(var6);
                        var6 = var6.JumpTypes;
                        if(var11) { _fun0015_ip = 140; continue _fun0015 }
case 141:
                        var7 = var6.INSTANT;
                        _fun0015_ip = 142; continue _fun0015;
case 140:
                        var7 = var6.ANIMATED;
case 142:
                        var6 = true;
                        var6 = var12.bind(var13)(var10, var6, var7);
                        _fun0015_ip = 143; continue _fun0015;
case 137:
                        var7 = _closure3_slot0;
                        var6 = var7.findMessageIndex;
                        var7 = var6.bind(var7)(var10);
                        _closure4_slot3 = var7;
                        var6 = null;
                        if(!(var6 != var7)) { _fun0015_ip = 143; continue _fun0015 }
case 144:
                        if(var5) { _fun0015_ip = 145; continue _fun0015 }
case 146:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 25;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.scrollTo;
                        var3 = _closure3_slot0;
                        var3 = var3._chatRef;
                        var4 = var3.current;
                        var3 = {};
                        var3['animated'] = var11;
                        var9 = var9 === var10;
                        var3['highlight'] = var9;
                        var3['position'] = var8;
                        var3 = var5.bind(var6)(var4, var7, var3);
                        _fun0015_ip = 143; continue _fun0015;
case 145:
                        var3 = global;
                        var4 = var3.setTimeout;
                        var3 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 25;
                            var2 = var2[var1];
                            var1 = undefined;
                            var6 = var3.bind(var1)(var2);
                            var5 = var6.scrollIntoView;
                            var2 = _closure3_slot0;
                            var2 = var2._chatRef;
                            var4 = var2.current;
                            var3 = _closure4_slot3;
                            var2 = {};
                            var8 = _closure4_slot2;
                            var2['animated'] = var8;
                            var8 = _closure4_slot1;
                            var7 = _closure4_slot0;
                            var7 = var8 === var7;
                            var2['highlight'] = var7;
                            var2 = var5.bind(var6)(var4, var3, var2);
                            return var1;
                        };
                        var2 = 5;
                        var2 = var4.bind(var1)(var3, var2);
case 143:
                        return var1;
                    }
                };
                var1['scrollToMessageId'] = var4;
                var4 = function(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var4 = arg1;
                        var1 = null;
                        if(!(var1 == var4)) { _fun0016_ip = 75; continue _fun0016 }
case 147:
                        var1 = undefined;
                        return var1;
case 75:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 26;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.findMessageRowIndex;
                        var1 = _closure3_slot0;
                        var5 = var1.chatManager;
                        var1 = var5.getPreviousRows;
                        var1 = var1.bind(var5)();
                        var1 = var2.bind(var3)(var1, var4);
                        return var1;
                    }
                };
                var1['findMessageIndex'] = var4;
                var4 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var14 = var1.isAtBottom;
                        var13 = var1.isNearBottom;
                        var12 = var1.isNearTop;
                        var11 = var1.dragging;
                        var10 = var1.decelerating;
                        var9 = var1.shouldShowJumpToPresent;
                        var8 = var1.isFirstMessageVisible;
                        var6 = var1.firstVisibleMessageIndex;
                        var17 = var1.firstVisibleMessagePercentVisible;
                        var5 = var1.lastVisibleMessageIndex;
                        var20 = var1.changesetUpdateId;
                        var16 = var1.lastVisibleMessagePercentVisible;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 29;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var4 = var7.getChangesetIdForChat;
                        var3 = _closure3_slot0;
                        var3 = var3._chatRef;
                        var3 = var3.current;
                        var19 = var4.bind(var7)(var3);
                        if(!(var20 !== var19)) { _fun0017_ip = 148; continue _fun0017 }
case 80:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.isStaff;
                        if(!var3) { _fun0017_ip = 149; continue _fun0017 }
case 150:
                        var18 = _closure1_slot24;
                        var7 = var18.log;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var23 = var3.channelId;
                        var24 = 'STAFF-ACK-LOG: Ignoring outdated scroll event.';
                        var25 = var18;
                        var22 = var20;
                        var21 = var19;
                        var3 = var25[var7](var24, var23, var22, var21, var20);
                        _fun0017_ip = 149; continue _fun0017;
case 148:
                        var7 = _closure3_slot0;
                        var2 = var7.props;
                        var4 = var2.visibleMessagesWindowHandler;
                        var3 = var7.handleVisibleMessagesChange;
                        var2 = {};
                        var2['firstVisibleMessageRowIndex'] = var6;
                        var2['lastVisibleMessageRowIndex'] = var5;
                        var2['firstVisibleMessagePercentVisible'] = var17;
                        var2['lastVisibleMessagePercentVisible'] = var16;
                        var16 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var15 = 30;
                        var15 = var17[var15];
                        var15 = var16.bind(var1)(var15);
                        var15 = var15.QuestsVisibleMessagesChangedSource;
                        var15 = var15.SCROLL;
                        var2['source'] = var15;
                        var2 = var3.bind(var7)(var2);
                        var3 = var7.handleScroll;
                        var2 = {};
                        var2['isAtBottom'] = var14;
                        var2['isNearBottom'] = var13;
                        var2['isNearTop'] = var12;
                        var2['dragging'] = var11;
                        var2['decelerating'] = var10;
                        var2['shouldShowJumpToPresent'] = var9;
                        var2['isFirstMessageVisible'] = var8;
                        var2 = var3.bind(var7)(var2);
                        var3 = var4.handleScrollPosition;
                        var2 = {};
                        var7 = var7.chatManager;
                        var7 = var7._rows;
                        var2['rows'] = var7;
                        var2['firstVisibleMessageRowIndex'] = var6;
                        var2['lastVisibleMessageRowIndex'] = var5;
                        var2 = var3.bind(var4)(var2);
case 149:
                        return var1;
                    }
                };
                var1['handleScrollPosition'] = var4;
                var4 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var3 = arg1;
                        var8 = var3.isAtBottom;
                        var7 = var3.isNearBottom;
                        var1 = undefined;
                        if(!(var7 === var1)) { _fun0018_ip = 64; continue _fun0018 }
case 31:
                        var7 = false;
case 64:
                        var6 = var3.isNearTop;
                        if(!(var6 === var1)) { _fun0018_ip = 151; continue _fun0018 }
case 152:
                        var6 = false;
case 151:
                        var5 = var3.dragging;
                        if(!(var5 === var1)) { _fun0018_ip = 5; continue _fun0018 }
case 67:
                        var5 = false;
case 5:
                        var4 = var3.decelerating;
                        if(!(var4 === var1)) { _fun0018_ip = 7; continue _fun0018 }
case 153:
                        var4 = false;
case 7:
                        var13 = var3.shouldShowJumpToPresent;
                        if(!(var13 === var1)) { _fun0018_ip = 40; continue _fun0018 }
case 154:
                        var13 = false;
case 40:
                        var _closure4_slot0 = var13;
                        var12 = var3.isFirstMessageVisible;
                        if(!(var12 === var1)) { _fun0018_ip = 155; continue _fun0018 }
case 156:
                        var12 = false;
case 155:
                        var _closure4_slot1 = var1;
                        var11 = _closure3_slot0;
                        var9 = var11.props;
                        var9 = var9.messages;
                        _closure4_slot1 = var9;
                        var10 = var11.handleScrollCallbacks;
                        var9 = {};
                        var9['isAtBottom'] = var8;
                        var9['isNearBottom'] = var7;
                        var9['isNearTop'] = var6;
                        var9['dragging'] = var5;
                        var9['decelerating'] = var4;
                        var9['shouldShowJumpToPresent'] = var13;
                        var9['isFirstMessageVisible'] = var12;
                        var9 = var10.bind(var11)(var9);
                        if(!var9) { _fun0018_ip = 157; continue _fun0018 }
case 158:
                        var3 = _closure3_slot0;
                        var3['isAtBottom'] = var8;
                        var3['isNearBottom'] = var7;
                        var3['isNearTop'] = var6;
                        var3['dragging'] = var5;
                        var3['decelerating'] = var4;
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 31;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.batchUpdates;
                        var2 = function() {
                            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                                var5 = _closure1_slot11;
                                var1 = _closure3_slot0;
                                var2 = var1.props;
                                var4 = var2.channelId;
                                var1 = var1.props;
                                var3 = var1.screenIndex;
                                var2 = _closure4_slot0;
                                if(var2) { _fun0019_ip = 4; continue _fun0019 }
case 159:
                                var1 = _closure4_slot1;
                                var2 = var1.hasMoreAfter;
case 4:
                                var1 = undefined;
                                var2 = var5.bind(var1)(var4, var3, var2);
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
case 157:
                        return var1;
                    }
                };
                var1['handleScroll'] = var4;
                var4 = function() {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
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
                        if(var3) { _fun0020_ip = 160; continue _fun0020 }
case 42:
                        var3 = var9.bind(var10)();
                        _fun0020_ip = 161; continue _fun0020;
case 160:
                        var3 = {};
                        var5 = var6.jumpTargetId;
                        var3['scrollToMessageId'] = var5;
                        var5 = var6.jumpTargetId;
                        var3['jumpTargetId'] = var5;
                        var12 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var8 = 24;
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
                        if(!(var3 == var9)) { _fun0020_ip = 88; continue _fun0020 }
case 162:
                        if(!(var3 != var4)) { _fun0020_ip = 161; continue _fun0020 }
case 85:
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
                            var4 = 24;
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
                        _fun0020_ip = 161; continue _fun0020;
case 88:
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
case 161:
                        var2 = _closure3_slot0;
                        var1 = var2.recordTimings;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['syncMessageDisplay'] = var4;
                var4 = function() {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var2 = true;
                        var1['animated'] = var2;
                        var1 = var1.props;
                        var6 = var1.channelId;
                        var7 = var1.messages;
                        var1 = var7.hasMoreBefore;
                        if(!var1) { _fun0021_ip = 5; continue _fun0021 }
case 163:
                        var2 = var7.loadingMore;
                        var1 = !var2;
case 5:
                        if(!var1) { _fun0021_ip = 164; continue _fun0021 }
case 165:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 32;
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
                        if(var7) { _fun0021_ip = 166; continue _fun0021 }
case 167:
                        var5 = var6.id;
case 166:
                        var1['before'] = var5;
                        var4 = _closure1_slot17;
                        var1['limit'] = var4;
                        var1 = var2.bind(var3)(var1);
case 164:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['loadMoreBefore'] = var4;
                var4 = function() {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var2 = true;
                        var1['animated'] = var2;
                        var1 = var1.props;
                        var6 = var1.channelId;
                        var7 = var1.messages;
                        var1 = var7.hasMoreAfter;
                        if(!var1) { _fun0022_ip = 5; continue _fun0022 }
case 163:
                        var2 = var7.loadingMore;
                        var1 = !var2;
case 5:
                        if(!var1) { _fun0022_ip = 164; continue _fun0022 }
case 165:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 32;
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
                        if(var7) { _fun0022_ip = 166; continue _fun0022 }
case 167:
                        var5 = var6.id;
case 166:
                        var1['after'] = var5;
                        var4 = _closure1_slot17;
                        var1['limit'] = var4;
                        var1 = var2.bind(var3)(var1);
case 164:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['loadMoreAfter'] = var4;
                var4 = function() {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var3 = var1.channel;
                        var1 = var1.canChat;
                        if(!var1) { _fun0023_ip = 4; continue _fun0023 }
case 168:
                        var5 = _closure1_slot13;
                        var4 = var5.can;
                        var2 = _closure1_slot20;
                        var2 = var2.ADD_REACTIONS;
                        var1 = var4.bind(var5)(var2, var3);
case 4:
                        if(var1) { _fun0023_ip = 169; continue _fun0023 }
case 170:
                        var2 = var3.isPrivate;
                        var1 = var2.bind(var3)();
case 169:
                        return var1;
                    }
                };
                var1['canAddNewReactions'] = var4;
                var4 = function(arg1) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 33;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.getNativeSyntheticEventData;
                        var2 = arg1;
                        var2 = var3.bind(var4)(var2);
                        var6 = var2.messageId;
                        var3 = _closure3_slot0;
                        var7 = var3.animatingStickerMessageId;
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
                        if(!(var4 != var7)) { _fun0024_ip = 49; continue _fun0024 }
case 171:
                        var3 = var5.add;
                        var3 = var3.bind(var5)(var7);
case 49:
                        var3 = _closure3_slot0;
                        var4 = null;
                        if(!(var7 !== var6)) { _fun0024_ip = 172; continue _fun0024 }
case 52:
                        var4 = var6;
case 172:
                        var3['animatingStickerMessageId'] = var4;
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
                var1['handleLongPressSticker'] = var4;
                var4 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var4 = var1.description;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 34;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var2['description'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['handleTapShowAltText'] = var4;
                var4 = function() {
                    _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                        var5 = arguments[0];
                        var1 = undefined;
                        if(!(var5 === var1)) { _fun0025_ip = 76; continue _fun0025 }
case 147:
                        var5 = true;
case 76:
                        var2 = _closure3_slot0;
                        var3 = var2.props;
                        var6 = var3.useReducedMotion;
                        var4 = var2.handleScrollCallbacks;
                        var3 = {};
                        var7 = true;
                        var3['isAtBottom'] = var7;
                        var3 = var4.bind(var2)(var3);
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 25;
                        var3 = var7[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.scrollToBottom;
                        var2 = var2._chatRef;
                        var2 = var2.current;
                        if(!var5) { _fun0025_ip = 173; continue _fun0025 }
case 174:
                        var5 = !var6;
case 173:
                        var2 = var3.bind(var4)(var2, var5);
                        return var1;
                    }
                };
                var1['scrollToBottom'] = var4;
                var4 = function() {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                        var5 = arguments[0];
                        var1 = undefined;
                        if(!(var5 === var1)) { _fun0026_ip = 76; continue _fun0026 }
case 147:
                        var5 = true;
case 76:
                        var2 = _closure3_slot0;
                        var3 = var2.props;
                        var6 = var3.useReducedMotion;
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 25;
                        var3 = var7[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.scrollToTop;
                        var2 = var2._chatRef;
                        var2 = var2.current;
                        if(!var5) { _fun0026_ip = 175; continue _fun0026 }
case 37:
                        var5 = !var6;
case 175:
                        var2 = var3.bind(var4)(var2, var5);
                        return var1;
                    }
                };
                var1['scrollToTop'] = var4;
                var4 = function(arg1) {
                    _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                        var6 = arguments[1];
                        var1 = undefined;
                        if(!(var6 === var1)) { _fun0027_ip = 76; continue _fun0027 }
case 147:
                        var6 = true;
case 76:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 25;
                        var2 = var4[var2];
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.scrollToRelativeOffset;
                        var3 = _closure3_slot0;
                        var3 = var3._chatRef;
                        var3 = var3.current;
                        if(!var6) { _fun0027_ip = 78; continue _fun0027 }
case 7:
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var2 = var2.useReducedMotion;
                        var6 = !var2;
case 78:
                        var2 = arg1;
                        var2 = var4.bind(var5)(var3, var2, var6);
                        return var1;
                    }
                };
                var1['scrollToRelativeOffset'] = var4;
                var4 = function() {
                    _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var3 = var1.chatManager;
                        var1 = var3.getPreviousRows;
                        var1 = var1.bind(var3)();
                        var4 = var1.length;
                        var3 = 0;
                        if(!(var4 > var3)) { _fun0028_ip = 71; continue _fun0028 }
case 59:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 25;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.scrollTo;
                        var2 = _closure3_slot0;
                        var2 = var2._chatRef;
                        var2 = var2.current;
                        var5 = var1.length;
                        var1 = 1;
                        var1 = var5 - var1;
                        var1 = var3.bind(var4)(var2, var1);
case 71:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['scrollToTopMessage'] = var4;
                var4 = _closure1_slot3;
                var3 = function* () {
                    var1 = function* anon_0_() {
                        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0029_ip = 176; continue _fun0029 }
case 177:
                            var2 = undefined;
                            var _closure5_slot0 = var2;
                            var5 = _closure3_slot0;
                            var5 = var5.props;
                            var9 = var5.channel;
                            var11 = var5.useReducedMotion;
                            _closure5_slot0 = var11;
                            var5 = var9.isForumPost;
                            var5 = var5.bind(var9)();
                            if(!var5) { _fun0029_ip = 178; continue _fun0029 }
case 7:
                            var5 = _closure3_slot0;
                            var5 = var5.isNearTop;
                            if(var5) { _fun0029_ip = 178; continue _fun0029 }
case 66:
                            var8 = _closure3_slot0;
                            var6 = var8.getMessage;
                            var10 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var13 = 23;
                            var5 = var5[var13];
                            var12 = var10.bind(var2)(var5);
                            var10 = var12.castChannelIdAsMessageId;
                            var5 = var9.id;
                            var5 = var10.bind(var12)(var5);
                            var5 = var6.bind(var8)(var5);
                            var6 = null;
                            if(!(var6 != var5)) { _fun0029_ip = 10; continue _fun0029 }
case 179:
                            var10 = _closure3_slot0;
                            var8 = var10.findMessageIndex;
                            var12 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var5 = var5[var13];
                            var13 = var12.bind(var2)(var5);
                            var12 = var13.castChannelIdAsMessageId;
                            var5 = var9.id;
                            var5 = var12.bind(var13)(var5);
                            var5 = var8.bind(var10)(var5);
                            if(!(var6 != var5)) { _fun0029_ip = 180; continue _fun0029 }
case 181:
                            var8 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var6 = 25;
                            var6 = var10[var6];
                            var10 = var8.bind(var2)(var6);
                            var8 = var10.scrollTo;
                            var3 = _closure3_slot0;
                            var3 = var3._chatRef;
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
                                var3 = _closure3_slot0;
                                var2 = var3.scrollToTop;
                                var1 = _closure5_slot0;
                                var1 = !var1;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var3 = var6.bind(var2)(var3, var5);
                            _fun0029_ip = 178; continue _fun0029;
case 180:
                            return var2;
case 10:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 32;
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
                            SaveGenerator(address=360);
case 182:
                            return var3;
case 183:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0029_ip = 184; continue _fun0029 }
case 99:
                            var5 = global;
                            var6 = var5.setTimeout;
                            var5 = function() {
                                var3 = _closure3_slot0;
                                var2 = var3.scrollToTop;
                                var1 = _closure5_slot0;
                                var1 = !var1;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var4 = 50;
                            var4 = var6.bind(var2)(var5, var4);
                            _fun0029_ip = 178; continue _fun0029;
case 184:
                            return var3;
case 178:
                            return var2;
case 176:
                            return var1;
                        }
                    };
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var1['handleTapNavBar'] = var3;
                var3 = function() {
                    _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var2 = var1.chatInputRef;
                        var5 = var1.keyboardType;
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 28;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var6.bind(var1)(var3);
                        var3 = var6.isIOS;
                        var3 = var3.bind(var6)();
                        if(!var3) { _fun0030_ip = 71; continue _fun0030 }
case 160:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 35;
                        var4 = var7[var4];
                        var4 = var6.bind(var1)(var4);
                        var4 = var4.KeyboardTypes;
                        var4 = var4.SYSTEM;
                        var3 = var5 !== var4;
case 71:
                        if(!var3) { _fun0030_ip = 52; continue _fun0030 }
case 51:
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0030_ip = 52; continue _fun0030 }
case 49:
                        var2 = var3.closeCustomKeyboard;
                        var2 = var2.bind(var3)();
case 52:
                        return var1;
                    }
                };
                var1['handleTapTableView'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var7 = var1.firstVisibleMessageIndex;
                    var6 = var1.lastVisibleMessageIndex;
                    var5 = var1.firstVisibleMessagePercentVisible;
                    var1 = var1.lastVisibleMessagePercentVisible;
                    var4 = _closure3_slot0;
                    var3 = var4.handleVisibleMessagesChange;
                    var2 = {};
                    var2['firstVisibleMessageRowIndex'] = var7;
                    var2['lastVisibleMessageRowIndex'] = var6;
                    var2['firstVisibleMessagePercentVisible'] = var5;
                    var2['lastVisibleMessagePercentVisible'] = var1;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 30;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.QuestsVisibleMessagesChangedSource;
                    var5 = var5.FIRST_LAYOUT;
                    var2['source'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleFirstLayout'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var7 = var1.firstVisibleMessageIndex;
                    var6 = var1.lastVisibleMessageIndex;
                    var5 = var1.firstVisibleMessagePercentVisible;
                    var1 = var1.lastVisibleMessagePercentVisible;
                    var4 = _closure3_slot0;
                    var3 = var4.handleVisibleMessagesChange;
                    var2 = {};
                    var2['firstVisibleMessageRowIndex'] = var7;
                    var2['lastVisibleMessageRowIndex'] = var6;
                    var2['firstVisibleMessagePercentVisible'] = var5;
                    var2['lastVisibleMessagePercentVisible'] = var1;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 30;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.QuestsVisibleMessagesChangedSource;
                    var5 = var5.VISIBILITY_CHANGED;
                    var2['source'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleMessageVisibilityChanged'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var4 = var1.nativeEvent;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 20;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleMediaPlayFinishedAnalytics;
                    var2 = var2.bind(var3)(var4);
                    return var1;
                };
                var1['handleMediaPlayFinishedAnalytics'] = var3;
                var3 = function() {
                    _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var3 = var2.props;
                        var2 = var3.messages;
                        var5 = var3.channel;
                        var7 = var2.jumpReturnTargetId;
                        var3 = null;
                        if(!(var3 != var7)) { _fun0031_ip = 173; continue _fun0031 }
case 152:
                        var6 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 32;
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
                        _fun0031_ip = 90; continue _fun0031;
case 173:
                        var3 = var2.loadingMore;
                        if(var3) { _fun0031_ip = 90; continue _fun0031 }
case 53:
                        var2 = var2.hasMoreAfter;
                        if(var2) { _fun0031_ip = 185; continue _fun0031 }
case 166:
                        var2 = _closure3_slot0;
                        var1 = var2.scrollToBottom;
                        var1 = var1.bind(var2)();
                        _fun0031_ip = 90; continue _fun0031;
case 185:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 32;
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
case 90:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['jumpToPresent'] = var3;
                var3 = function() {
                    _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var6 = var1.channel;
                        var4 = _closure1_slot14;
                        var3 = var4.ackMessageId;
                        var2 = var6.id;
                        var5 = var3.bind(var4)(var2);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 32;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.jumpToMessage;
                        var2 = {};
                        var7 = var6.id;
                        var2['channelId'] = var7;
                        var7 = null;
                        if(!(var7 == var5)) { _fun0032_ip = 186; continue _fun0032 }
case 187:
                        var5 = var6.id;
case 186:
                        var2['messageId'] = var5;
                        var5 = 1;
                        var2['offset'] = var5;
                        var5 = 'Mark As Read';
                        var2['context'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var1['scrollToNewMessages'] = var3;
                var3 = function() {
                    var1 = _closure3_slot0;
                    var1 = var1._chatRef;
                    return var1;
                };
                var1['getChatRef'] = var3;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var7 = false;
                    var2['animated'] = var7;
                    var2['hasHandledScroll'] = var7;
                    var2['isNearBottom'] = var7;
                    var2['isAtBottom'] = var7;
                    var2['isNearTop'] = var7;
                    var2['decelerating'] = var7;
                    var2['dragging'] = var7;
                    var2['hasMoreMessagesAfterForLastUpdate'] = var7;
                    var1 = new Array(0);
                    var2['pendingUpdatesQueue'] = var1;
                    var2['_loaded'] = var7;
                    var1 = null;
                    var2['animatingStickerMessageId'] = var1;
                    var3 = var2.dismissedMessageIds;
                    var1 = var3.clear;
                    var1 = var1.bind(var3)();
                    var3 = var2.chatManager;
                    var1 = var3.clear;
                    var1 = var1.bind(var3)();
                    var6 = _closure1_slot11;
                    var1 = var2.props;
                    var5 = var1.channelId;
                    var1 = var2.props;
                    var4 = var1.screenIndex;
                    var1 = undefined;
                    var4 = var6.bind(var1)(var5, var4, var7);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 25;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.clearRows;
                    var2 = var2._chatRef;
                    var2 = var2.current;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['clearRows'] = var3;
                var2 = function(arg1) {
                    _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.forceRender;
                        var _closure4_slot0 = var3;
                        var3 = var1.updateMessageIds;
                        var _closure4_slot1 = var3;
                        var1 = var1.ignoreEmbedDescriptionCache;
                        var _closure4_slot2 = var1;
                        var1 = _closure3_slot0;
                        var4 = var1.props;
                        var1 = var4.channel;
                        var _closure4_slot3 = var1;
                        var5 = var4.messages;
                        var _closure4_slot4 = var5;
                        var3 = var4.isMessagesReady;
                        var6 = var4.uploads;
                        var _closure4_slot5 = var6;
                        var6 = var4.roleStyle;
                        var _closure4_slot6 = var6;
                        var6 = var4.oldestUnreadMessageId;
                        var _closure4_slot7 = var6;
                        var6 = var4.replyingMessageId;
                        var _closure4_slot8 = var6;
                        var6 = var4.inlineAttachmentMedia;
                        var _closure4_slot9 = var6;
                        var6 = var4.inlineEmbedMedia;
                        var _closure4_slot10 = var6;
                        var6 = var4.renderEmbeds;
                        var _closure4_slot11 = var6;
                        var6 = var4.renderReactions;
                        var _closure4_slot12 = var6;
                        var6 = var4.animateEmoji;
                        var _closure4_slot13 = var6;
                        var6 = var4.gifAutoPlay;
                        var _closure4_slot14 = var6;
                        var6 = var4.timestampHourCycle;
                        var _closure4_slot15 = var6;
                        var6 = var4.currentUserId;
                        var _closure4_slot16 = var6;
                        var6 = var4.renderCommunicationDisabled;
                        var _closure4_slot17 = var6;
                        var6 = var4.selectedSummary;
                        var _closure4_slot18 = var6;
                        var6 = var4.enableSwipeActions;
                        var _closure4_slot19 = var6;
                        var6 = var4.isResourceChannel;
                        var _closure4_slot20 = var6;
                        var6 = var4.shouldObscureSpoiler;
                        var _closure4_slot21 = var6;
                        var6 = var4.shouldDisableInteractiveComponents;
                        var _closure4_slot22 = var6;
                        var4 = var4.unloadableContentEntryMessageIds;
                        var _closure4_slot23 = var4;
                        var4 = null;
                        var6 = var4 != var1;
                        var1 = null;
                        if(!var6) { _fun0033_ip = 188; continue _fun0033 }
case 189:
                        var5 = var4 != var5;
                        var1 = null;
                        if(!var5) { _fun0033_ip = 188; continue _fun0033 }
case 190:
                        var1 = null;
                        if(!var3) { _fun0033_ip = 188; continue _fun0033 }
case 191:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 36;
                        var4 = var4[var3];
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var4 = var3.firstRowGenerator;
                        var3 = var4.measure;
                        var2 = function() {
                            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                                var6 = _closure3_slot0;
                                var3 = var6.chatManager;
                                var2 = var3.setup;
                                var8 = _closure4_slot4;
                                var2 = var2.bind(var3)(var8);
                                var4 = var6.rowGenerator;
                                var3 = var4.setOptions;
                                var2 = {};
                                var5 = _closure4_slot9;
                                var2['inlineAttachmentMedia'] = var5;
                                var5 = _closure4_slot10;
                                var2['inlineEmbedMedia'] = var5;
                                var5 = _closure4_slot11;
                                var2['renderEmbeds'] = var5;
                                var5 = _closure4_slot12;
                                var2['renderReactions'] = var5;
                                var5 = _closure4_slot13;
                                var2['animateEmoji'] = var5;
                                var5 = var6.animatingStickerMessageId;
                                var2['animatingStickerMessageId'] = var5;
                                var5 = var6.props;
                                var5 = var5.containerWidth;
                                var2['constrainedWidth'] = var5;
                                var5 = _closure4_slot14;
                                var2['gifAutoPlay'] = var5;
                                var5 = _closure4_slot15;
                                var2['timestampHourCycle'] = var5;
                                var5 = _closure4_slot17;
                                var2['renderCommunicationDisabled'] = var5;
                                var5 = _closure4_slot2;
                                var2['ignoreEmbedDescriptionCache'] = var5;
                                var5 = _closure4_slot19;
                                var2['enableSwipeActions'] = var5;
                                var5 = _closure4_slot21;
                                var2['shouldObscureSpoiler'] = var5;
                                var5 = _closure4_slot22;
                                var2['shouldDisableInteractiveComponents'] = var5;
                                var2 = var3.bind(var4)(var2);
                                var3 = _closure1_slot26;
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var2 = 37;
                                var2 = var5[var2];
                                var5 = undefined;
                                var4 = var4.bind(var5)(var2);
                                var2 = {};
                                var9 = _closure4_slot3;
                                var2['channel'] = var9;
                                var2['messages'] = var8;
                                var8 = _closure4_slot5;
                                var2['uploads'] = var8;
                                var8 = _closure4_slot7;
                                var2['oldestUnreadMessageId'] = var8;
                                var8 = _closure4_slot8;
                                var2['replyingMessageId'] = var8;
                                var8 = _closure4_slot16;
                                var2['currentUserId'] = var8;
                                var8 = var6.canAddNewReactions;
                                var8 = var8.bind(var6)();
                                var2['canAddNewReactions'] = var8;
                                var8 = _closure4_slot18;
                                var2['selectedSummary'] = var8;
                                var8 = var6.chatManager;
                                var2['chatManager'] = var8;
                                var8 = _closure4_slot6;
                                var2['roleStyle'] = var8;
                                var8 = _closure4_slot0;
                                var2['forceRender'] = var8;
                                var8 = _closure4_slot1;
                                var2['updateMessageIds'] = var8;
                                var8 = _closure4_slot20;
                                var2['isResourceChannel'] = var8;
                                var7 = _closure4_slot23;
                                var2['unloadableContentEntryMessageIds'] = var7;
                                var6 = var6.dismissedMessageIds;
                                var2['dismissedMessageIds'] = var6;
                                var2 = var4.bind(var5)(var2);
                                var4 = var3.bind(var5)(var2);
                                var3 = var4.bind(var5)();
                                var2 = var3.done;
                                if(var2) { _fun0034_ip = 192; continue _fun0034 }
case 149:
                                var8 = var3.value;
                                var2 = _closure3_slot0;
                                var7 = var2.rowGenerator;
                                var6 = var7.generate;
                                var7 = var6.bind(var7)(var8);
                                var6 = var2.chatManager;
                                var2 = var6.createRow;
                                var2 = var2.bind(var6)(var7);
                                var6 = var4.bind(var5)();
                                var2 = var6.done;
                                var3 = var6;
                                if(!var2) { _fun0034_ip = 149; continue _fun0034 }
case 192:
                                var1 = _closure3_slot0;
                                var2 = var1.chatManager;
                                var1 = var2.createChangeset;
                                var1 = var1.bind(var2)();
                                return var1;
                            }
                        };
                        var1 = var3.bind(var4)(var2);
case 188:
                        return var1;
                    }
                };
                var1['createRows'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'componentDidMount';
        var5['key'] = var1;
        var1 = function value() {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var5 = this;
                var2 = var5._frozen;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 38;
                var3 = var3[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var4 = var6.isScreenIndexFrozen;
                var3 = var5.props;
                var3 = var3.screenIndex;
                var3 = var4.bind(var6)(var3);
                var5['_frozen'] = var3;
                if(var2) { _fun0035_ip = 193; continue _fun0035 }
case 61:
                var2 = var5.startOrCancelChannelLatestMessagesLoad;
                var2 = var2.bind(var5)();
                var2 = var5.syncMessageDisplay;
                var2 = var2.bind(var5)();
                var2 = var5.recordTimings;
                var2 = var2.bind(var5)();
                _fun0035_ip = 194; continue _fun0035;
case 193:
                var4 = var5.componentDidUpdate;
                var3 = var5.prevPropsWhileFrozen;
                var2 = var5.prevStateWhileFrozen;
                var2 = var4.bind(var5)(var3, var2);
case 194:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'recordTimings';
        var5['key'] = var7;
        var7 = function value() {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var2 = this;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 36;
                var3 = var3[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var3);
                var6 = var7.recordMessageRender;
                var3 = var2.props;
                var5 = var3.channelId;
                var3 = var2.props;
                var8 = var3.messages;
                var4 = var8.map;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var4 = var4.bind(var8)(var3);
                var3 = var2.props;
                var3 = var3.messages;
                var3 = var3.hasFetched;
                if(var3) { _fun0036_ip = 195; continue _fun0036 }
case 196:
                var8 = var2.props;
                var8 = var8.messages;
                var8 = var8.ready;
                if(!var8) { _fun0036_ip = 48; continue _fun0036 }
case 197:
                var9 = var2.props;
                var9 = var9.messages;
                var9 = var9.cached;
                var8 = !var9;
case 48:
                var3 = var8;
case 195:
                var2 = var2.props;
                var2 = var2.messages;
                var10 = var2.hasMoreAfter;
                var14 = var7;
                var13 = var5;
                var12 = var4;
                var11 = var3;
                var2 = var14[var6](var13, var12, var11, var10, var9);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'componentWillUnmount';
        var5['key'] = var7;
        var7 = function value() {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var2 = this;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 38;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.isScreenIndexFrozen;
                var4 = var2.props;
                var4 = var4.screenIndex;
                var4 = var5.bind(var6)(var4);
                var2['_frozen'] = var4;
                var4 = var2._frozen;
                if(var4) { _fun0037_ip = 198; continue _fun0037 }
case 61:
                var5 = var2._chatUpdatesQueue;
                var4 = var5.cleanup;
                var4 = var4.bind(var5)();
                var5 = var2.channelLatestMessageLoadingStatsManager;
                var4 = var5.cancel;
                var4 = var4.bind(var5)();
                var4 = var2.clearRows;
                var4 = var4.bind(var2)();
                var6 = _closure1_slot11;
                var3 = var2.props;
                var5 = var3.channelId;
                var3 = var2.props;
                var4 = var3.screenIndex;
                var3 = false;
                var3 = var6.bind(var1)(var5, var4, var3);
                return var1;
case 198:
                var1 = var2.props;
                var2['prevPropsWhileFrozen'] = var1;
                var1 = var2.state;
                var2['prevStateWhileFrozen'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'shouldComponentUpdate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var3 = arg1;
                var4 = this;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var8 = 39;
                var1 = var1[var8];
                var6 = undefined;
                var7 = var2.bind(var6)(var1);
                var2 = var4.state;
                var1 = arg2;
                var1 = var7.bind(var6)(var2, var1);
                var1 = !var1;
                if(var1) { _fun0038_ip = 162; continue _fun0038 }
case 199:
                var7 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var10 = var7.bind(var6)(var2);
                var14 = var4.props;
                var7 = {};
                var2 = false;
                var7['shouldWarnLargeObjects'] = var2;
                var12 = ['interactionStates'];
                var15 = undefined;
                var13 = var3;
                var11 = var7;
                var2 = var15[var10](var14, var13, var12, var11, var10);
                var2 = !var2;
                if(var2) { _fun0038_ip = 200; continue _fun0038 }
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
case 200:
                var1 = var2;
case 162:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'componentDidUpdate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var3;
                var4 = var2.props;
                var4 = var4.currentUserId;
                var7 = null;
                if(!(var7 != var4)) { _fun0039_ip = 201; continue _fun0039 }
case 50:
                var4 = var2.props;
                var4 = var4.messages;
                var5 = var3.messages;
                var8 = var3.channelId;
                var6 = var2.props;
                var6 = var6.channelId;
                if(!(var8 !== var6)) { _fun0039_ip = 202; continue _fun0039 }
case 37:
                var8 = var2.dismissedMessageIds;
                var6 = var8.clear;
                var6 = var6.bind(var8)();
                var6 = var2.clearRows;
                var6 = var6.bind(var2)();
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 40;
                var8 = var8[var6];
                var6 = undefined;
                var9 = var9.bind(var6)(var8);
                var8 = var9.clearChannelDimensions;
                var6 = var2.props;
                var6 = var6.channelId;
                var6 = var8.bind(var9)(var6);
                var6 = var2.startOrCancelChannelLatestMessagesLoad;
                var6 = var6.bind(var2)();
case 202:
                var6 = var3.isMessagesAckable;
                var6 = !var6;
                if(!var6) { _fun0039_ip = 203; continue _fun0039 }
case 158:
                var8 = var2.props;
                var6 = var8.isMessagesAckable;
case 203:
                if(!var6) { _fun0039_ip = 204; continue _fun0039 }
case 205:
                var6 = false;
                var2['hasHandledScroll'] = var6;
case 204:
                var6 = var2.shouldJumpToOriginalPost;
                var6 = var6.bind(var2)();
                if(!var6) { _fun0039_ip = 206; continue _fun0039 }
case 207:
                var8 = var2.scrollToTop;
                var6 = false;
                var6 = var8.bind(var2)(var6);
                var5 = var5.jumpSequenceId;
                var4 = var4.jumpSequenceId;
                if(!(var5 === var4)) { _fun0039_ip = 206; continue _fun0039 }
case 208:
                var5 = var2.setState;
                var4 = {};
                var6 = true;
                var4['hasJumpedToOriginalPost'] = var6;
                var4 = var5.bind(var2)(var4);
case 206:
                var4 = var2.props;
                var6 = var4.isMessagesReady;
                if(!var6) { _fun0039_ip = 209; continue _fun0039 }
case 210:
                var4 = var2.props;
                var4 = var4.isMessagesCached;
                var6 = !var4;
case 209:
                if(!var6) { _fun0039_ip = 191; continue _fun0039 }
case 211:
                var6 = var3.isMessagesCached;
case 191:
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 41;
                var4 = var8[var4];
                var17 = undefined;
                var8 = var5.bind(var17)(var4);
                var5 = var2.props;
                var4 = {};
                var9 = var2.isAtBottom;
                var4['isAtBottom'] = var9;
                var10 = var2.chatManager;
                var9 = var10.getPreviousMessages;
                var9 = var9.bind(var10)();
                var9 = var7 != var9;
                var4['hasPreviousMessages'] = var9;
                var5 = var8.bind(var17)(var5, var4, var3);
                var11 = var5.scrollToMessageId;
                var10 = var5.jumpTargetId;
                var9 = var5.jumpType;
                var4 = var5.minimizeScrolling;
                var8 = var5.focusTargetId;
                var5 = var5.shouldInitialScroll;
                var13 = var3.theme;
                var12 = var2.props;
                var12 = var12.theme;
                var13 = var13 !== var12;
                if(var13) { _fun0039_ip = 212; continue _fun0039 }
case 107:
                var14 = var3.saturation;
                var12 = var2.props;
                var12 = var12.saturation;
                var13 = var14 !== var12;
case 212:
                var14 = var13;
                if(var14) { _fun0039_ip = 213; continue _fun0039 }
case 214:
                var16 = var3.inlineAttachmentMedia;
                var12 = var2.props;
                var12 = var12.inlineAttachmentMedia;
                var14 = var16 !== var12;
case 213:
                if(var14) { _fun0039_ip = 215; continue _fun0039 }
case 216:
                var16 = var3.inlineEmbedMedia;
                var12 = var2.props;
                var12 = var12.inlineEmbedMedia;
                var14 = var16 !== var12;
case 215:
                if(var14) { _fun0039_ip = 217; continue _fun0039 }
case 218:
                var16 = var3.renderEmbeds;
                var12 = var2.props;
                var12 = var12.renderEmbeds;
                var14 = var16 !== var12;
case 217:
                if(var14) { _fun0039_ip = 219; continue _fun0039 }
case 220:
                var16 = var3.renderReactions;
                var12 = var2.props;
                var12 = var12.renderReactions;
                var14 = var16 !== var12;
case 219:
                if(var14) { _fun0039_ip = 221; continue _fun0039 }
case 222:
                var16 = var3.animateEmoji;
                var12 = var2.props;
                var12 = var12.animateEmoji;
                var14 = var16 !== var12;
case 221:
                if(var14) { _fun0039_ip = 223; continue _fun0039 }
case 224:
                var16 = var3.animateStickers;
                var12 = var2.props;
                var12 = var12.animateStickers;
                var14 = var16 !== var12;
case 223:
                if(var14) { _fun0039_ip = 225; continue _fun0039 }
case 226:
                var16 = var3.gifAutoPlay;
                var12 = var2.props;
                var12 = var12.gifAutoPlay;
                var14 = var16 !== var12;
case 225:
                if(var14) { _fun0039_ip = 227; continue _fun0039 }
case 228:
                var16 = var3.timestampHourCycle;
                var12 = var2.props;
                var12 = var12.timestampHourCycle;
                var14 = var16 !== var12;
case 227:
                if(var14) { _fun0039_ip = 229; continue _fun0039 }
case 230:
                var16 = var3.containerWidth;
                var12 = var2.props;
                var12 = var12.containerWidth;
                var14 = var16 !== var12;
case 229:
                if(var14) { _fun0039_ip = 231; continue _fun0039 }
case 232:
                var16 = var3.guildSystemChannelFlags;
                var12 = var2.props;
                var12 = var12.guildSystemChannelFlags;
                var14 = var16 !== var12;
case 231:
                if(var14) { _fun0039_ip = 233; continue _fun0039 }
case 234:
                var16 = var3.userSettingsLocale;
                var12 = var2.props;
                var12 = var12.userSettingsLocale;
                var14 = var16 !== var12;
case 233:
                if(var14) { _fun0039_ip = 235; continue _fun0039 }
case 236:
                var16 = var3.roleStyle;
                var12 = var2.props;
                var12 = var12.roleStyle;
                var14 = var16 !== var12;
case 235:
                if(var14) { _fun0039_ip = 237; continue _fun0039 }
case 238:
                var16 = var3.canSendMessages;
                var12 = var2.props;
                var12 = var12.canSendMessages;
                var14 = var16 !== var12;
case 237:
                if(var14) { _fun0039_ip = 239; continue _fun0039 }
case 240:
                var16 = var3.showPushFeedback;
                var12 = var2.props;
                var12 = var12.showPushFeedback;
                var14 = var16 !== var12;
case 239:
                if(var14) { _fun0039_ip = 241; continue _fun0039 }
case 242:
                var16 = var3.selectedSummary;
                var12 = var2.props;
                var12 = var12.selectedSummary;
                var14 = var16 !== var12;
case 241:
                if(var14) { _fun0039_ip = 243; continue _fun0039 }
case 244:
                var16 = var3.shouldObscureSpoiler;
                var12 = var2.props;
                var12 = var12.shouldObscureSpoiler;
                var14 = var16 !== var12;
case 243:
                if(var14) { _fun0039_ip = 245; continue _fun0039 }
case 246:
                var16 = var3.explicitMediaFalsePositiveInfo;
                var12 = var2.props;
                var12 = var12.explicitMediaFalsePositiveInfo;
                var14 = var16 !== var12;
case 245:
                if(var14) { _fun0039_ip = 247; continue _fun0039 }
case 248:
                var16 = var3.isStaff;
                var12 = var2.props;
                var12 = var12.isStaff;
                var14 = var16 !== var12;
case 247:
                if(var14) { _fun0039_ip = 249; continue _fun0039 }
case 250:
                var16 = var3.isAgeVerified;
                var12 = var2.props;
                var12 = var12.isAgeVerified;
                var14 = var16 !== var12;
case 249:
                if(var14) { _fun0039_ip = 251; continue _fun0039 }
case 252:
                var12 = arg2;
                var16 = var12.shouldForceRender;
                var12 = var2.state;
                var12 = var12.shouldForceRender;
                var12 = var16 !== var12;
                if(!var12) { _fun0039_ip = 253; continue _fun0039 }
case 254:
                var16 = var2.state;
                var12 = var16.shouldForceRender;
case 253:
                var14 = var12;
case 251:
                if(var14) { _fun0039_ip = 255; continue _fun0039 }
case 256:
                var16 = var3.displayNameStylesEnabled;
                var12 = var2.props;
                var12 = var12.displayNameStylesEnabled;
                var14 = var16 !== var12;
case 255:
                var16 = var3.resolvingGiftCodes;
                var12 = var2.props;
                var12 = var12.resolvingGiftCodes;
                var43 = var16 !== var12;
                if(var43) { _fun0039_ip = 124; continue _fun0039 }
case 120:
                var16 = var3.resolvedGiftCodes;
                var12 = var2.props;
                var12 = var12.resolvedGiftCodes;
                var43 = var16 !== var12;
case 124:
                if(var43) { _fun0039_ip = 94; continue _fun0039 }
case 257:
                var16 = var3.acceptingGiftCodes;
                var12 = var2.props;
                var12 = var12.acceptingGiftCodes;
                var43 = var16 !== var12;
case 94:
                var _closure3_slot2 = var43;
                var42 = var3.uploads;
                var12 = var2.props;
                var41 = var12.uploads;
                var16 = _closure1_slot1;
                var12 = _closure1_slot2;
                var18 = 39;
                var12 = var12[var18];
                var19 = var16.bind(var17)(var12);
                var16 = var3.interactionStates;
                var12 = var2.props;
                var12 = var12.interactionStates;
                var12 = var19.bind(var17)(var16, var12);
                var32 = !var12;
                var _closure3_slot3 = var32;
                var16 = var3.channelPolls;
                var12 = var2.props;
                var12 = var12.channelPolls;
                var29 = var16 !== var12;
                var _closure3_slot4 = var29;
                var16 = var3.messageReferencePolls;
                var12 = var2.props;
                var12 = var12.messageReferencePolls;
                var28 = var16 !== var12;
                var _closure3_slot5 = var28;
                var16 = var3.interactionComponentStatesVersion;
                var12 = var2.props;
                var12 = var12.interactionComponentStatesVersion;
                var31 = var16 !== var12;
                var _closure3_slot6 = var31;
                var16 = var3.shouldDisableInteractiveComponents;
                var12 = var2.props;
                var12 = var12.shouldDisableInteractiveComponents;
                var12 = var16 !== var12;
                var _closure3_slot7 = var12;
                var16 = var3.communicationDisabledVersion;
                var12 = var2.props;
                var12 = var12.communicationDisabledVersion;
                var38 = var16 !== var12;
                var _closure3_slot8 = var38;
                var16 = var3.messageAuthorMembers;
                var12 = var2.props;
                var12 = var12.messageAuthorMembers;
                var37 = var16 !== var12;
                var _closure3_slot9 = var37;
                var16 = var3.failedMessagesVersion;
                var12 = var2.props;
                var12 = var12.failedMessagesVersion;
                var36 = var16 !== var12;
                var _closure3_slot10 = var36;
                var16 = var3.renderCommunicationDisabled;
                var12 = var2.props;
                var12 = var12.renderCommunicationDisabled;
                var33 = var16 !== var12;
                var _closure3_slot11 = var33;
                var35 = var3.forwardGuildsVersion;
                var12 = var2.props;
                var34 = var12.forwardGuildsVersion;
                var12 = var2.props;
                var16 = var12.channel;
                var12 = var16.isForumPost;
                var30 = var12.bind(var16)();
                if(!var30) { _fun0039_ip = 258; continue _fun0039 }
case 259:
                var16 = var3.isFollowingForumPost;
                var12 = var2.props;
                var12 = var12.isFollowingForumPost;
                var30 = var16 !== var12;
case 258:
                var _closure3_slot12 = var30;
                var16 = var3.showMediaPostSharePrompt;
                var12 = var2.props;
                var12 = var12.showMediaPostSharePrompt;
                var27 = var16 !== var12;
                var _closure3_slot13 = var27;
                var16 = var3.unloadedContentEntryMessageIds;
                var12 = var2.props;
                var12 = var12.unloadedContentEntryMessageIds;
                var26 = var16 !== var12;
                var _closure3_slot14 = var26;
                var16 = var3.invalidApplicationIds;
                var12 = var2.props;
                var12 = var12.invalidApplicationIds;
                var12 = var16 !== var12;
                var _closure3_slot15 = var12;
                var19 = var3.activityInstanceIds;
                var16 = var2.props;
                var16 = var16.activityInstanceIds;
                var40 = var19 !== var16;
                if(var40) { _fun0039_ip = 260; continue _fun0039 }
case 261:
                var19 = var3.activityParticipants;
                var16 = var2.props;
                var16 = var16.activityParticipants;
                var40 = var19 !== var16;
case 260:
                if(var40) { _fun0039_ip = 262; continue _fun0039 }
case 263:
                var19 = var3.applicationAssetFetchingIds;
                var16 = var2.props;
                var16 = var16.applicationAssetFetchingIds;
                var40 = var19 !== var16;
case 262:
                if(var40) { _fun0039_ip = 264; continue _fun0039 }
case 265:
                var19 = var3.activityInstancePresenceDetails;
                var16 = var2.props;
                var16 = var16.activityInstancePresenceDetails;
                var40 = var19 !== var16;
case 264:
                if(var40) { _fun0039_ip = 266; continue _fun0039 }
case 267:
                var19 = var3.messagesWithActivitiesLaunching;
                var16 = var2.props;
                var16 = var16.messagesWithActivitiesLaunching;
                var40 = var19 !== var16;
case 266:
                if(var40) { _fun0039_ip = 268; continue _fun0039 }
case 269:
                var40 = var12;
case 268:
                var _closure3_slot16 = var40;
                var16 = _closure1_slot0;
                var12 = _closure1_slot2;
                var19 = var12[var18];
                var22 = var16.bind(var17)(var19);
                var21 = var22.areArraysShallowEqual;
                var20 = var3.activityInviteMessageIds;
                var19 = var2.props;
                var19 = var19.activityInviteMessageIds;
                var19 = var21.bind(var22)(var20, var19);
                var25 = !var19;
                var _closure3_slot17 = var25;
                var12 = var12[var18];
                var19 = var16.bind(var17)(var12);
                var18 = var19.areArraysShallowEqual;
                var16 = var3.resolvedReferralTrialOfferIds;
                var12 = var2.props;
                var12 = var12.resolvedReferralTrialOfferIds;
                var12 = var18.bind(var19)(var16, var12);
                var24 = !var12;
                if(var24) { _fun0039_ip = 270; continue _fun0039 }
case 271:
                var16 = var3.referralTrialOfferId;
                var12 = var2.props;
                var12 = var12.referralTrialOfferId;
                var24 = var16 !== var12;
case 270:
                if(var24) { _fun0039_ip = 272; continue _fun0039 }
case 273:
                var16 = var3.isPremiumTier2User;
                var12 = var2.props;
                var12 = var12.isPremiumTier2User;
                var24 = var16 !== var12;
case 272:
                var _closure3_slot18 = var24;
                var16 = var3.guildInviteColorsFetched;
                var12 = var2.props;
                var12 = var12.guildInviteColorsFetched;
                var23 = var16 !== var12;
                var _closure3_slot19 = var23;
                var16 = var3.guildEmojis;
                var12 = var2.props;
                var12 = var12.guildEmojis;
                var22 = var16 !== var12;
                var _closure3_slot20 = var22;
                var16 = var3.selfActivities;
                var12 = var2.props;
                var12 = var12.selfActivities;
                var21 = var16 !== var12;
                var _closure3_slot21 = var21;
                var16 = var3.currentClientVoiceChannelId;
                var12 = var2.props;
                var12 = var12.currentClientVoiceChannelId;
                var39 = var16 !== var12;
                var _closure3_slot22 = var39;
                var16 = var3.voiceStatePrivateChannelId;
                var12 = var2.props;
                var12 = var12.voiceStatePrivateChannelId;
                var16 = var16 !== var12;
                var18 = var3.activityLaunchJoinStates;
                var12 = var2.props;
                var12 = var12.activityLaunchJoinStates;
                var20 = var18 !== var12;
                var _closure3_slot23 = var20;
                var19 = var3.displayNameStylesEnabled;
                var12 = var2.props;
                var18 = var12.displayNameStylesEnabled;
                var12 = var3.currentUserDisplayNameStyles;
                var45 = var7 == var12;
                var44 = undefined;
                if(var45) { _fun0039_ip = 274; continue _fun0039 }
case 275:
                var44 = var12.fontId;
case 274:
                var12 = var2.props;
                var45 = var12.currentUserDisplayNameStyles;
                var46 = var7 == var45;
                var12 = undefined;
                if(var46) { _fun0039_ip = 276; continue _fun0039 }
case 277:
                var12 = var45.fontId;
case 276:
                var12 = var44 !== var12;
                var _closure3_slot24 = var12;
                if(var14) { _fun0039_ip = 278; continue _fun0039 }
case 279:
                if(var43) { _fun0039_ip = 278; continue _fun0039 }
case 280:
                if(!(var42 === var41)) { _fun0039_ip = 278; continue _fun0039 }
case 281:
                if(var40) { _fun0039_ip = 278; continue _fun0039 }
case 282:
                var41 = var3.messages;
                var40 = var2.props;
                var40 = var40.messages;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 283:
                var41 = var3.editingMessageId;
                var40 = var2.props;
                var40 = var40.editingMessageId;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 284:
                var41 = var3.replyingMessageId;
                var40 = var2.props;
                var40 = var40.replyingMessageId;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 285:
                if(var16) { _fun0039_ip = 278; continue _fun0039 }
case 286:
                var41 = var3.messageAuthorActivities;
                var40 = var2.props;
                var40 = var40.messageAuthorActivities;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 287:
                var41 = var3.oldestUnreadMessageId;
                var40 = var2.props;
                var40 = var40.oldestUnreadMessageId;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 288:
                var41 = var3.invites;
                var40 = var2.props;
                var40 = var40.invites;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 289:
                var41 = var3.appDirectoryEmbedApplications;
                var40 = var2.props;
                var40 = var40.appDirectoryEmbedApplications;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 290:
                var41 = var3.invalidAppDirectoryEmbedApplicationIds;
                var40 = var2.props;
                var40 = var40.invalidAppDirectoryEmbedApplicationIds;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 291:
                var41 = var3.appDirectoryEmbedApplicationFetchStates;
                var40 = var2.props;
                var40 = var40.appDirectoryEmbedApplicationFetchStates;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 292:
                var41 = var3.guildTemplates;
                var40 = var2.props;
                var40 = var40.guildTemplates;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 293:
                var41 = var3.buildOverrides;
                var40 = var2.props;
                var40 = var40.buildOverrides;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 294:
                var41 = var3.experimentEmbeds;
                var40 = var2.props;
                var40 = var40.experimentEmbeds;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 295:
                var41 = var3.quests;
                var40 = var2.props;
                var40 = var40.quests;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 296:
                var41 = var3.isFetchingCurrentQuests;
                var40 = var2.props;
                var40 = var40.isFetchingCurrentQuests;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 297:
                var41 = var3.participantsLength;
                var40 = var2.props;
                var40 = var40.participantsLength;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 298:
                var41 = var3.isMessagesReady;
                var40 = var2.props;
                var40 = var40.isMessagesReady;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 299:
                var41 = var3.channelThreadsVersion;
                var40 = var2.props;
                var40 = var40.channelThreadsVersion;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 300:
                var41 = var3.rsvpVersion;
                var40 = var2.props;
                var40 = var40.rsvpVersion;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 301:
                var41 = var3.repliedIds;
                var40 = var2.props;
                var40 = var40.repliedIds;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 302:
                var41 = var3.hasLoadedExperiments;
                var40 = var2.props;
                var40 = var40.hasLoadedExperiments;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 303:
                var41 = var3.isMessageRequest;
                var40 = var2.props;
                var40 = var40.isMessageRequest;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 304:
                var41 = var3.isSpamMessageRequest;
                var40 = var2.props;
                var40 = var40.isSpamMessageRequest;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 305:
                var41 = var3.currentUserCommunicationDisabled;
                var40 = var2.props;
                var40 = var40.currentUserCommunicationDisabled;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 306:
                var41 = var3.userSettingsLocale;
                var40 = var2.props;
                var40 = var40.userSettingsLocale;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 307:
                var41 = var3.selectedSummary;
                var40 = var2.props;
                var40 = var40.selectedSummary;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 308:
                var41 = var3.showPushFeedback;
                var40 = var2.props;
                var40 = var40.showPushFeedback;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 309:
                var41 = var3.cacheStoreLoaded;
                var40 = var2.props;
                var40 = var40.cacheStoreLoaded;
                if(!(var41 === var40)) { _fun0039_ip = 278; continue _fun0039 }
case 310:
                if(var39) { _fun0039_ip = 278; continue _fun0039 }
case 311:
                if(var38) { _fun0039_ip = 278; continue _fun0039 }
case 312:
                if(var37) { _fun0039_ip = 278; continue _fun0039 }
case 313:
                if(var36) { _fun0039_ip = 278; continue _fun0039 }
case 314:
                if(!(var35 === var34)) { _fun0039_ip = 278; continue _fun0039 }
case 315:
                if(var33) { _fun0039_ip = 278; continue _fun0039 }
case 316:
                if(var32) { _fun0039_ip = 278; continue _fun0039 }
case 317:
                if(var31) { _fun0039_ip = 278; continue _fun0039 }
case 318:
                if(var30) { _fun0039_ip = 278; continue _fun0039 }
case 319:
                if(!(var7 == var10)) { _fun0039_ip = 278; continue _fun0039 }
case 320:
                if(!(var7 == var8)) { _fun0039_ip = 278; continue _fun0039 }
case 321:
                var31 = var3.androidKeyboardHeight;
                var30 = var2.props;
                var30 = var30.androidKeyboardHeight;
                if(!(var31 === var30)) { _fun0039_ip = 278; continue _fun0039 }
case 322:
                var31 = var3.mediaPostPreviewEmbeds;
                var30 = var2.props;
                var30 = var30.mediaPostPreviewEmbeds;
                if(!(var31 === var30)) { _fun0039_ip = 278; continue _fun0039 }
case 323:
                var31 = var3.shouldObscureSpoiler;
                var30 = var2.props;
                var30 = var30.shouldObscureSpoiler;
                if(!(var31 === var30)) { _fun0039_ip = 278; continue _fun0039 }
case 324:
                var31 = var3.shouldDisableInteractiveComponents;
                var30 = var2.props;
                var30 = var30.shouldDisableInteractiveComponents;
                if(!(var31 === var30)) { _fun0039_ip = 278; continue _fun0039 }
case 325:
                if(var29) { _fun0039_ip = 278; continue _fun0039 }
case 326:
                if(var28) { _fun0039_ip = 278; continue _fun0039 }
case 327:
                if(var27) { _fun0039_ip = 278; continue _fun0039 }
case 328:
                var28 = var3.threadStartingReferenceMessage;
                var27 = var2.props;
                var27 = var27.threadStartingReferenceMessage;
                if(!(var28 === var27)) { _fun0039_ip = 278; continue _fun0039 }
case 329:
                if(var26) { _fun0039_ip = 278; continue _fun0039 }
case 330:
                if(var25) { _fun0039_ip = 278; continue _fun0039 }
case 331:
                if(var24) { _fun0039_ip = 278; continue _fun0039 }
case 332:
                if(var23) { _fun0039_ip = 278; continue _fun0039 }
case 333:
                if(var22) { _fun0039_ip = 278; continue _fun0039 }
case 334:
                if(var21) { _fun0039_ip = 278; continue _fun0039 }
case 335:
                if(var20) { _fun0039_ip = 278; continue _fun0039 }
case 336:
                if(!(var19 === var18)) { _fun0039_ip = 278; continue _fun0039 }
case 337:
                if(var12) { _fun0039_ip = 278; continue _fun0039 }
case 338:
                var12 = var2.recordTimings;
                var12 = var12.bind(var2)();
                _fun0039_ip = 201; continue _fun0039;
case 278:
                var12 = global;
                var12 = var12.Set;
                var18 = var12.prototype;
                var18 = Object.create(var18, {constructor: {value: var12}});
                var50 = var18;
                var12 = new var50[var12](var49);
                var12 = var12 instanceof Object ? var12 : var18;
                var _closure3_slot25 = var12;
                var19 = var3.editingMessageId;
                var18 = var2.props;
                var18 = var18.editingMessageId;
                if(!(var19 !== var18)) { _fun0039_ip = 339; continue _fun0039 }
case 340:
                var18 = var2.props;
                var18 = var18.editingMessageId;
                if(!(var7 != var18)) { _fun0039_ip = 341; continue _fun0039 }
case 342:
                var19 = var12.add;
                var18 = var2.props;
                var18 = var18.editingMessageId;
                var18 = var19.bind(var12)(var18);
case 341:
                var18 = var3.editingMessageId;
                if(!(var7 != var18)) { _fun0039_ip = 339; continue _fun0039 }
case 343:
                var19 = var12.add;
                var18 = var3.editingMessageId;
                var18 = var19.bind(var12)(var18);
case 339:
                var19 = var3.replyingMessageId;
                var18 = var2.props;
                var18 = var18.replyingMessageId;
                if(!(var19 !== var18)) { _fun0039_ip = 344; continue _fun0039 }
case 345:
                var18 = var2.props;
                var18 = var18.replyingMessageId;
                if(!(var7 != var18)) { _fun0039_ip = 346; continue _fun0039 }
case 347:
                var19 = var12.add;
                var18 = var2.props;
                var18 = var18.replyingMessageId;
                var18 = var19.bind(var12)(var18);
case 346:
                var18 = var3.replyingMessageId;
                if(!(var7 != var18)) { _fun0039_ip = 344; continue _fun0039 }
case 348:
                var19 = var12.add;
                var18 = var3.replyingMessageId;
                var18 = var19.bind(var12)(var18);
case 344:
                var19 = var3.isMessagesReady;
                var18 = var2.props;
                var18 = var18.isMessagesReady;
                if(!(var19 === var18)) { _fun0039_ip = 349; continue _fun0039 }
case 350:
                var19 = var3.isCallActive;
                var18 = var2.props;
                var18 = var18.isCallActive;
                if(!(var19 === var18)) { _fun0039_ip = 349; continue _fun0039 }
case 351:
                if(var16) { _fun0039_ip = 349; continue _fun0039 }
case 352:
                var18 = var3.participantsLength;
                var16 = var2.props;
                var16 = var16.participantsLength;
                if(!(var18 !== var16)) { _fun0039_ip = 353; continue _fun0039 }
case 349:
                var16 = _closure1_slot1;
                var18 = _closure1_slot2;
                var15 = 22;
                var15 = var18[var15];
                var18 = var16.bind(var17)(var15);
                var17 = var18.find;
                var15 = var2.props;
                var16 = var15.messages;
                var15 = var16.toArray;
                var16 = var15.bind(var16)();
                var15 = var16.reverse;
                var16 = var15.bind(var16)();
                var15 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = _closure1_slot19;
                    var1 = var1.CALL;
                    var1 = var2 === var1;
                    return var1;
                };
                var15 = var17.bind(var18)(var16, var15);
                if(!(var7 != var15)) { _fun0039_ip = 353; continue _fun0039 }
case 354:
                var16 = var12.add;
                var15 = var15.id;
                var15 = var16.bind(var12)(var15);
case 353:
                var16 = var3.channelThreadsVersion;
                var15 = var2.props;
                var15 = var15.channelThreadsVersion;
                var15 = var16 !== var15;
                var _closure3_slot26 = var15;
                var16 = var3.rsvpVersion;
                var15 = var2.props;
                var15 = var15.rsvpVersion;
                var15 = var16 !== var15;
                var _closure3_slot27 = var15;
                var16 = var3.repliedIds;
                var15 = var2.props;
                var15 = var15.repliedIds;
                var15 = var16 !== var15;
                var _closure3_slot28 = var15;
                var16 = var3.hasLoadedExperiments;
                var15 = var2.props;
                var15 = var15.hasLoadedExperiments;
                var15 = var16 !== var15;
                var _closure3_slot29 = var15;
                var15 = var3.communicationDisabledVersion;
                var16 = var7 != var15;
                var7 = -1;
                if(!var16) { _fun0039_ip = 355; continue _fun0039 }
case 356:
                var7 = var15;
case 355:
                var _closure3_slot30 = var7;
                var3 = var3.cacheStoreLoaded;
                var7 = !var3;
                if(!var7) { _fun0039_ip = 357; continue _fun0039 }
case 358:
                var3 = var2.props;
                var7 = var3.cacheStoreLoaded;
case 357:
                var _closure3_slot31 = var7;
                var3 = var2.props;
                var15 = var3.messages;
                var3 = var15.forEach;
                var1 = function(arg1) {
                    _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                        var1 = arg1;
                        var3 = _closure3_slot22;
                        if(!var3) { _fun0040_ip = 4; continue _fun0040 }
case 75:
                        var3 = var1.activity;
                        var4 = null;
                        var5 = var4 == var3;
                        var4 = undefined;
                        if(var5) { _fun0040_ip = 152; continue _fun0040 }
case 3:
                        var4 = var3.type;
case 152:
                        var3 = _closure1_slot16;
                        var3 = var3.STREAM_REQUEST;
                        if(!(var4 !== var3)) { _fun0040_ip = 359; continue _fun0040 }
case 4:
                        var3 = _closure3_slot29;
                        if(!var3) { _fun0040_ip = 156; continue _fun0040 }
case 160:
                        var4 = var1.type;
                        var3 = _closure1_slot19;
                        var3 = var3.USER_JOIN;
                        if(!(var4 !== var3)) { _fun0040_ip = 360; continue _fun0040 }
case 156:
                        var3 = _closure3_slot28;
                        if(!var3) { _fun0040_ip = 361; continue _fun0040 }
case 196:
                        var4 = var1.type;
                        var3 = _closure1_slot19;
                        var3 = var3.REPLY;
                        if(!(var4 === var3)) { _fun0040_ip = 361; continue _fun0040 }
case 362:
                        var3 = var1.messageReference;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0040_ip = 361; continue _fun0040 }
case 363:
                        var4 = _closure3_slot0;
                        var4 = var4.props;
                        var5 = var4.repliedIds;
                        var4 = var5.has;
                        var3 = var3.message_id;
                        var3 = var4.bind(var5)(var3);
                        if(var3) { _fun0040_ip = 364; continue _fun0040 }
case 361:
                        var3 = _closure3_slot26;
                        if(!var3) { _fun0040_ip = 365; continue _fun0040 }
case 87:
                        var4 = var1.hasFlag;
                        var3 = _closure1_slot18;
                        var3 = var3.HAS_THREAD;
                        var3 = var4.bind(var1)(var3);
                        if(var3) { _fun0040_ip = 366; continue _fun0040 }
case 365:
                        var3 = _closure3_slot27;
                        if(!var3) { _fun0040_ip = 367; continue _fun0040 }
case 368:
                        var3 = var1.codedLinks;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(!(var4 > var3))) { _fun0040_ip = 369; continue _fun0040 }
case 367:
                        var3 = _closure3_slot20;
                        if(!var3) { _fun0040_ip = 139; continue _fun0040 }
case 370:
                        var4 = var1.type;
                        var3 = _closure1_slot19;
                        var3 = var3.EMOJI_ADDED;
                        if(!(var4 !== var3)) { _fun0040_ip = 371; continue _fun0040 }
case 139:
                        var3 = _closure3_slot11;
                        if(var3) { _fun0040_ip = 372; continue _fun0040 }
case 373:
                        var3 = _closure3_slot8;
                        if(!var3) { _fun0040_ip = 374; continue _fun0040 }
case 209:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var4 = var3.guildId;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0040_ip = 374; continue _fun0040 }
case 375:
                        var6 = _closure1_slot12;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.guildId;
                        var3 = var1.author;
                        var4 = var3.id;
                        var3 = undefined;
                        var4 = var6.bind(var3)(var5, var4);
                        var3 = _closure3_slot30;
                        if(!(!(var4 > var3))) { _fun0040_ip = 372; continue _fun0040 }
case 374:
                        var3 = _closure3_slot9;
                        if(!var3) { _fun0040_ip = 376; continue _fun0040 }
case 377:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.guildId;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0040_ip = 376; continue _fun0040 }
case 378:
                        var5 = var1.author;
                        var6 = var4 == var5;
                        var3 = undefined;
                        if(var6) { _fun0040_ip = 379; continue _fun0040 }
case 380:
                        var3 = var5.id;
case 379:
                        if(!(var4 == var3)) { _fun0040_ip = 381; continue _fun0040 }
case 376:
                        var3 = _closure3_slot10;
                        if(!var3) { _fun0040_ip = 212; continue _fun0040 }
case 382:
                        var3 = var1.author;
                        var4 = var3.id;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.currentUserId;
                        if(!(var4 !== var3)) { _fun0040_ip = 383; continue _fun0040 }
case 212:
                        var3 = _closure3_slot3;
                        if(!var3) { _fun0040_ip = 384; continue _fun0040 }
case 385:
                        var3 = _closure3_slot1;
                        var4 = var3.interactionStates;
                        var3 = var1.id;
                        var4 = var4[var3];
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.interactionStates;
                        var3 = var1.id;
                        var3 = var5[var3];
                        if(!(var4 === var3)) { _fun0040_ip = 386; continue _fun0040 }
case 384:
                        var3 = _closure3_slot6;
                        if(!var3) { _fun0040_ip = 224; continue _fun0040 }
case 387:
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
                        if(!(var4 === var3)) { _fun0040_ip = 388; continue _fun0040 }
case 224:
                        var3 = _closure3_slot7;
                        if(!var3) { _fun0040_ip = 389; continue _fun0040 }
case 390:
                        var3 = var1.components;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(var3 === var4)) { _fun0040_ip = 391; continue _fun0040 }
case 389:
                        var3 = _closure3_slot4;
                        if(!var3) { _fun0040_ip = 392; continue _fun0040 }
case 393:
                        var3 = _closure3_slot1;
                        var4 = var3.channelPolls;
                        var3 = var1.id;
                        var4 = var4[var3];
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.channelPolls;
                        var3 = var1.id;
                        var3 = var5[var3];
                        if(!(var4 === var3)) { _fun0040_ip = 394; continue _fun0040 }
case 392:
                        var3 = _closure3_slot5;
                        if(!var3) { _fun0040_ip = 395; continue _fun0040 }
case 396:
                        var4 = var1.messageReference;
                        var3 = null;
                        var6 = var3 == var4;
                        var5 = undefined;
                        if(var6) { _fun0040_ip = 397; continue _fun0040 }
case 398:
                        var5 = var4.message_id;
case 397:
                        if(!(var3 != var5)) { _fun0040_ip = 395; continue _fun0040 }
case 399:
                        var3 = _closure3_slot1;
                        var3 = var3.messageReferencePolls;
                        var4 = var3[var5];
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.messageReferencePolls;
                        var3 = var3[var5];
                        if(!(var4 === var3)) { _fun0040_ip = 400; continue _fun0040 }
case 395:
                        var3 = _closure3_slot14;
                        if(!var3) { _fun0040_ip = 401; continue _fun0040 }
case 235:
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
                        if(!(var4 === var3)) { _fun0040_ip = 402; continue _fun0040 }
case 401:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var4 = var3.channel;
                        var3 = var4.isForumPost;
                        var3 = var3.bind(var4)();
                        if(!var3) { _fun0040_ip = 403; continue _fun0040 }
case 404:
                        var3 = _closure3_slot12;
                        if(var3) { _fun0040_ip = 405; continue _fun0040 }
case 243:
                        var3 = _closure3_slot13;
                        if(!var3) { _fun0040_ip = 403; continue _fun0040 }
case 405:
                        var4 = var1.id;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 23;
                        var5 = var5[var3];
                        var3 = undefined;
                        var6 = var6.bind(var3)(var5);
                        var5 = var6.castChannelIdAsMessageId;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.channelId;
                        var3 = var5.bind(var6)(var3);
                        if(!(var4 !== var3)) { _fun0040_ip = 406; continue _fun0040 }
case 403:
                        var3 = _closure3_slot16;
                        if(!var3) { _fun0040_ip = 407; continue _fun0040 }
case 408:
                        var4 = var1.activityInstance;
                        var3 = null;
                        if(!(var3 == var4)) { _fun0040_ip = 409; continue _fun0040 }
case 407:
                        var3 = _closure3_slot17;
                        if(!var3) { _fun0040_ip = 410; continue _fun0040 }
case 411:
                        var6 = var1.activity;
                        var5 = null;
                        var7 = var5 == var6;
                        var4 = undefined;
                        if(var7) { _fun0040_ip = 412; continue _fun0040 }
case 413:
                        var4 = var6.party_id;
case 412:
                        var3 = var5 != var4;
case 410:
                        if(!var3) { _fun0040_ip = 414; continue _fun0040 }
case 415:
                        var5 = _closure3_slot25;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
case 414:
                        var3 = _closure3_slot24;
                        if(!var3) { _fun0040_ip = 416; continue _fun0040 }
case 417:
                        var3 = var1.author;
                        var4 = null;
                        var5 = var4 == var3;
                        var4 = undefined;
                        if(var5) { _fun0040_ip = 418; continue _fun0040 }
case 419:
                        var4 = var3.id;
case 418:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.currentUserId;
                        if(!(var4 !== var3)) { _fun0040_ip = 420; continue _fun0040 }
case 416:
                        var3 = var1.author;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0040_ip = 421; continue _fun0040 }
case 422:
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var8 = 42;
                        var6 = var3[var8];
                        var3 = undefined;
                        var10 = var7.bind(var3)(var6);
                        var9 = var10.messageAuthorActivitiesChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var9.bind(var10)(var1, var7, var6);
                        if(var6) { _fun0040_ip = 423; continue _fun0040 }
case 424:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var10 = var7.bind(var3)(var6);
                        var9 = var10.codedLinksChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var9.bind(var10)(var1, var7, var6);
                        if(var6) { _fun0040_ip = 423; continue _fun0040 }
case 425:
                        var6 = _closure3_slot2;
                        if(!var6) { _fun0040_ip = 426; continue _fun0040 }
case 427:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var10 = var7.bind(var3)(var6);
                        var9 = var10.giftCodesChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var9.bind(var10)(var1, var7, var6);
                        if(var6) { _fun0040_ip = 423; continue _fun0040 }
case 426:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var9 = var7.bind(var3)(var6);
                        var8 = var9.mediaPostPreviewEmbedsChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var8.bind(var9)(var1, var7, var6);
                        if(var6) { _fun0040_ip = 423; continue _fun0040 }
case 428:
                        var6 = _closure3_slot31;
                        if(!var6) { _fun0040_ip = 429; continue _fun0040 }
case 430:
                        var7 = var1.embeds;
                        var8 = var7.length;
                        var7 = 0;
                        var6 = var8 > var7;
case 429:
                        if(!var6) { _fun0040_ip = 431; continue _fun0040 }
case 432:
                        var8 = _closure3_slot25;
                        var7 = var8.add;
                        var6 = var1.id;
                        var6 = var7.bind(var8)(var6);
case 431:
                        var6 = var1.type;
                        var5 = _closure1_slot19;
                        var5 = var5.THREAD_STARTER_MESSAGE;
                        var5 = var6 === var5;
                        if(!var5) { _fun0040_ip = 433; continue _fun0040 }
case 434:
                        var6 = _closure3_slot1;
                        var7 = var6.threadStartingReferenceMessage;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var6.threadStartingReferenceMessage;
                        var5 = var7 !== var6;
case 433:
                        if(!var5) { _fun0040_ip = 435; continue _fun0040 }
case 436:
                        var7 = _closure3_slot25;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 435:
                        var5 = _closure3_slot15;
                        if(!var5) { _fun0040_ip = 437; continue _fun0040 }
case 438:
                        var6 = var1.applicationId;
                        var5 = var4 != var6;
case 437:
                        if(!var5) { _fun0040_ip = 439; continue _fun0040 }
case 440:
                        var6 = _closure3_slot1;
                        var8 = var6.invalidApplicationIds;
                        var7 = var8.includes;
                        var6 = var1.applicationId;
                        var5 = var7.bind(var8)(var6);
case 439:
                        if(!var5) { _fun0040_ip = 441; continue _fun0040 }
case 442:
                        var7 = _closure3_slot25;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 441:
                        var5 = _closure3_slot18;
                        if(!var5) { _fun0040_ip = 443; continue _fun0040 }
case 444:
                        var8 = var1.referralTrialOfferId;
                        var5 = var4 != var8;
                        if(!var5) { _fun0040_ip = 445; continue _fun0040 }
case 446:
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var7 = var6.resolvedReferralTrialOfferIds;
                        var6 = var7.includes;
                        var5 = var6.bind(var7)(var8);
case 445:
                        if(!var5) { _fun0040_ip = 443; continue _fun0040 }
case 447:
                        var7 = _closure3_slot25;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 443:
                        var5 = _closure3_slot19;
                        if(!var5) { _fun0040_ip = 448; continue _fun0040 }
case 449:
                        var6 = var1.codedLinks;
                        var7 = var6.length;
                        var6 = 0;
                        var5 = var7 > var6;
case 448:
                        if(!var5) { _fun0040_ip = 450; continue _fun0040 }
case 451:
                        var7 = _closure3_slot25;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 450:
                        var5 = _closure3_slot21;
                        if(var5) { _fun0040_ip = 452; continue _fun0040 }
case 453:
                        var5 = _closure3_slot23;
                        if(!var5) { _fun0040_ip = 421; continue _fun0040 }
case 452:
                        var5 = var1.activity;
                        var6 = var4 == var5;
                        var3 = undefined;
                        if(var6) { _fun0040_ip = 454; continue _fun0040 }
case 455:
                        var3 = var5.party_id;
case 454:
                        if(!(var4 != var3)) { _fun0040_ip = 421; continue _fun0040 }
case 456:
                        var5 = _closure3_slot25;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0040_ip = 421; continue _fun0040;
case 423:
                        var5 = _closure3_slot25;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0040_ip = 421; continue _fun0040;
case 420:
                        var5 = _closure3_slot25;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0040_ip = 421; continue _fun0040;
case 409:
                        var5 = _closure3_slot25;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0040_ip = 421; continue _fun0040;
case 406:
                        var5 = _closure3_slot25;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0040_ip = 421; continue _fun0040;
case 402:
                        var5 = _closure3_slot25;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0040_ip = 421; continue _fun0040;
case 400:
                        var5 = _closure3_slot25;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        var3 = undefined;
                        return var3;
case 394:
                        var5 = _closure3_slot25;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0040_ip = 421; continue _fun0040;
case 391:
                        var5 = _closure3_slot25;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0040_ip = 421; continue _fun0040;
case 388:
                        var5 = _closure3_slot25;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0040_ip = 421; continue _fun0040;
case 386:
                        var5 = _closure3_slot25;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0040_ip = 421; continue _fun0040;
case 383:
                        var5 = _closure3_slot25;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0040_ip = 421; continue _fun0040;
case 381:
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
                        if(!(var4 !== var3)) { _fun0040_ip = 421; continue _fun0040 }
case 457:
                        var5 = _closure3_slot25;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0040_ip = 421; continue _fun0040;
case 372:
                        var5 = _closure3_slot25;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0040_ip = 421; continue _fun0040;
case 371:
                        var5 = _closure3_slot25;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0040_ip = 421; continue _fun0040;
case 369:
                        var5 = _closure3_slot25;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0040_ip = 421; continue _fun0040;
case 366:
                        var5 = _closure3_slot25;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0040_ip = 421; continue _fun0040;
case 364:
                        var5 = _closure3_slot25;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        var3 = undefined;
                        return var3;
case 360:
                        var5 = _closure3_slot25;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0040_ip = 421; continue _fun0040;
case 359:
                        var3 = _closure3_slot25;
                        var2 = var3.add;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
case 421:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var15)(var1);
                var3 = var2.updateRows;
                var1 = {};
                var1['forceRender'] = var14;
                var1['forceReload'] = var13;
                var1['updateMessageIds'] = var12;
                var1['scrollToMessageId'] = var11;
                var1['jumpTargetId'] = var10;
                var1['jumpType'] = var9;
                var1['focusTargetId'] = var8;
                var1['ignoreEmbedDescriptionCache'] = var7;
                var1['messagesNewlyLoaded'] = var6;
                var1['shouldInitialScroll'] = var5;
                var1['minimizeScrolling'] = var4;
                var1 = var3.bind(var2)(var1);
                var3 = var2.setState;
                var1 = {};
                var4 = false;
                var1['shouldForceRender'] = var4;
                var1 = var3.bind(var2)(var1);
                var1 = var2.recordTimings;
                var1 = var1.bind(var2)();
case 201:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'handleScrollCallbacks';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var2 = var3.isAtBottom;
                var11 = var3.isNearBottom;
                var4 = undefined;
                if(!(var11 === var4)) { _fun0041_ip = 168; continue _fun0041 }
case 43:
                var11 = false;
case 168:
                var12 = var3.isNearTop;
                if(!(var12 === var4)) { _fun0041_ip = 458; continue _fun0041 }
case 50:
                var12 = false;
case 458:
                var13 = var3.dragging;
                if(!(var13 === var4)) { _fun0041_ip = 459; continue _fun0041 }
case 460:
                var13 = false;
case 459:
                var15 = var3.decelerating;
                if(!(var15 === var4)) { _fun0041_ip = 160; continue _fun0041 }
case 65:
                var15 = false;
case 160:
                var5 = var3.isFirstMessageVisible;
                if(!(var5 === var4)) { _fun0041_ip = 39; continue _fun0041 }
case 37:
                var5 = false;
case 39:
                var3 = var1.props;
                var9 = var3.messages;
                var6 = var3.channel;
                var3 = var3.onScroll;
                var7 = null;
                if(!(var7 != var6)) { _fun0041_ip = 461; continue _fun0041 }
case 462:
                var7 = var9.length;
                var10 = 0;
                if(!(var10 === var7)) { _fun0041_ip = 363; continue _fun0041 }
case 362:
                var7 = var9.loadingMore;
                if(var7) { _fun0041_ip = 461; continue _fun0041 }
case 363:
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var8 = 43;
                var8 = var16[var8];
                var14 = var14.bind(var4)(var8);
                var8 = var14.getIsScreenReaderEnabled;
                var14 = var8.bind(var14)();
                var8 = var9.loadingMore;
                var8 = !var8;
                if(!var8) { _fun0041_ip = 204; continue _fun0041 }
case 463:
                if(var13) { _fun0041_ip = 16; continue _fun0041 }
case 136:
                var13 = var15;
case 16:
                if(var13) { _fun0041_ip = 464; continue _fun0041 }
case 465:
                var13 = var14;
case 464:
                var8 = var13;
case 204:
                if(!var8) { _fun0041_ip = 148; continue _fun0041 }
case 466:
                var13 = var1.pendingUpdatesQueue;
                var13 = var13.length;
                var8 = var10 === var13;
case 148:
                var13 = var1.isNearTop;
                if(var13) { _fun0041_ip = 467; continue _fun0041 }
case 135:
                if(!var12) { _fun0041_ip = 467; continue _fun0041 }
case 468:
                var12 = var9.hasMoreBefore;
                if(!var12) { _fun0041_ip = 467; continue _fun0041 }
case 469:
                if(!var8) { _fun0041_ip = 467; continue _fun0041 }
case 208:
                var12 = var1.loadMoreBefore;
                var12 = var12.bind(var1)();
                _fun0041_ip = 470; continue _fun0041;
case 467:
                var12 = var1.isNearBottom;
                if(var12) { _fun0041_ip = 211; continue _fun0041 }
case 471:
                if(!var11) { _fun0041_ip = 211; continue _fun0041 }
case 472:
                var9 = var9.hasMoreAfter;
                if(!var9) { _fun0041_ip = 211; continue _fun0041 }
case 473:
                if(!var8) { _fun0041_ip = 211; continue _fun0041 }
case 474:
                var8 = var1.loadMoreAfter;
                var8 = var8.bind(var1)();
                _fun0041_ip = 470; continue _fun0041;
case 211:
                var8 = var1.isAtBottom;
                var8 = var8 === var2;
                if(!var8) { _fun0041_ip = 141; continue _fun0041 }
case 475:
                var8 = var1.hasHandledScroll;
case 141:
                if(var8) { _fun0041_ip = 470; continue _fun0041 }
case 476:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 40;
                var7 = var9[var7];
                var9 = var8.bind(var4)(var7);
                var8 = var9.updateChannelDimensions;
                var7 = var6.id;
                var6 = 0;
                if(!var2) { _fun0041_ip = 477; continue _fun0041 }
case 478:
                var6 = 1;
case 477:
                var19 = 1;
                var22 = var9;
                var21 = var7;
                var20 = var6;
                var18 = 0;
                var17 = undefined;
                var2 = var22[var8](var21, var20, var19, var18, var17, var16);
                var2 = true;
                var1['hasHandledScroll'] = var2;
case 470:
                var2 = {};
                var2['isFirstMessageVisible'] = var5;
                var2 = var3.bind(var4)(var2);
                var2 = var1._chatUpdatesQueue;
                var1 = var2.tryFlush;
                var1 = var1.bind(var2)();
                var1 = true;
                return var1;
case 461:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'handleVisibleMessagesChange';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                var1 = arg1;
                var2 = this;
                var11 = var1.firstVisibleMessageRowIndex;
                var8 = var1.firstVisibleMessagePercentVisible;
                var10 = var1.lastVisibleMessageRowIndex;
                var7 = var1.lastVisibleMessagePercentVisible;
                var9 = var1.source;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 20;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.getVisibleMessages;
                var4 = {};
                var4['firstVisibleMessageRowIndex'] = var11;
                var4['lastVisibleMessageRowIndex'] = var10;
                var4['firstVisibleMessagePercentVisible'] = var8;
                var4['lastVisibleMessagePercentVisible'] = var7;
                var7 = var2.chatManager;
                var4['chatManager'] = var7;
                var7 = var2.props;
                var7 = var7.channelId;
                var4['channelId'] = var7;
                var7 = var5.bind(var6)(var4);
                var5 = var7.length;
                var4 = 0;
                if(!(!(var5 <= var4))) { _fun0042_ip = 25; continue _fun0042 }
case 479:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 44;
                var3 = var5[var3];
                var8 = var4.bind(var1)(var3);
                var6 = var8.questsVisibleMobileMessagesChanged;
                var3 = {};
                var3['visibleMessages'] = var7;
                var3['source'] = var9;
                var3 = var6.bind(var8)(var3);
                var3 = 45;
                var6 = var5[var3];
                var11 = var4.bind(var1)(var6);
                var10 = var11.handleAnnouncementMessageViewTracking;
                var6 = var2.props;
                var14 = var6.shouldTrackAnnouncementMessageViews;
                var6 = var2.props;
                var13 = var6.guildId;
                var6 = var2.props;
                var12 = var6.channel;
                var16 = var11;
                var15 = var7;
                var6 = var16[var10](var15, var14, var13, var12, var11);
                var3 = var5[var3];
                var6 = var4.bind(var1)(var3);
                var5 = var6.handleRichPresenceInviteEmbedViewTracking;
                var3 = var2.props;
                var14 = var3.shouldTrackRichPresenceInviteEmbedViews;
                var3 = var2.props;
                var13 = var3.guildId;
                var2 = var2.props;
                var12 = var2.channel;
                var16 = var6;
                var15 = var7;
                var2 = var16[var5](var15, var14, var13, var12, var11);
case 25:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
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
            var1 = 46;
            var5 = var10[var1];
            var1 = undefined;
            var7 = var7.bind(var1)(var5);
            var5 = {};
            var17 = var9._chatRef;
            var5['ref'] = var17;
            var5['style'] = var16;
            var16 = true;
            var5['inverted'] = var16;
            var5['alwaysRespectKeyboard'] = var15;
            var15 = var9.handleScrollPosition;
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
            var13 = var9.handleTapNavBar;
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
            var13 = var9.handleTapShowAltText;
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
            var11 = var9.handleTapTableView;
            var5['onTapTableView'] = var11;
            var11 = var9.handleFirstLayout;
            var5['onFirstLayout'] = var11;
            var11 = var9.handleMediaPlayFinishedAnalytics;
            var5['onMediaPlayFinishedAnalytics'] = var11;
            var11 = var9.handleMessageVisibilityChanged;
            var5['onMessageVisibilityChanged'] = var11;
            var7 = var8.bind(var1)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = _closure1_slot0;
            var6 = 47;
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
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var7.bind(var1)(var9);
    var _closure1_slot25 = var7;
    var7 = var8.forwardRef;
    var2 = function(arg1, arg2) {
        var4 = _closure1_slot21;
        var3 = _closure1_slot25;
        var2 = {};
        var1 = arg2;
        var2['ref'] = var1;
        var5 = arg1;
        var6 = var2;
        var1 = copyDataProperties(var6, var5);
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var7.bind(var8)(var2);
    var2['displayName'] = var4;
    var4 = 48;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/MessagesClassToFunctional.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();