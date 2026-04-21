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
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot5;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot8;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot7;
                var1 = _closure1_slot31;
                var1 = var1.bind(var4)();
                if(var1) { _fun0005_ip = 9; continue _fun0005 }
case 40:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0005_ip = 41; continue _fun0005;
case 9:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot8;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 41:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
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
                var2 = function() {
                    var1 = _closure3_slot0;
                    var2 = var1.props;
                    var1 = var2.getChatRef;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['getChatRef'] = var2;
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
        var1 = 'shouldComponentUpdate';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = arg1;
                var3 = this;
                var6 = _closure1_slot1;
                var1 = _closure1_slot2;
                var7 = 15;
                var1 = var1[var7];
                var5 = undefined;
                var9 = var6.bind(var5)(var1);
                var13 = var3.props;
                var6 = {};
                var1 = false;
                var6['shouldWarnLargeObjects'] = var1;
                var11 = ['interactionStates', 'recordTimings'];
                var14 = undefined;
                var12 = var2;
                var10 = var6;
                var1 = var14[var9](var13, var12, var11, var10, var9);
                var1 = !var1;
                if(var1) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var6.bind(var5)(var4);
                var3 = var3.props;
                var3 = var3.interactionStates;
                var2 = var2.interactionStates;
                var2 = var4.bind(var5)(var3, var2);
                var1 = !var2;
case 42:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'componentDidUpdate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = arg1;
                var1 = this;
                var _closure3_slot0 = var1;
                var _closure3_slot1 = var4;
                var2 = var1.props;
                var2 = var2.currentUserId;
                var21 = null;
                if(!(var21 != var2)) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                var2 = var1.props;
                var2 = var2.messages;
                var3 = var4.messages;
                var7 = var4.channelId;
                var6 = var1.props;
                var6 = var6.channelId;
                if(!(var7 !== var6)) { _fun0007_ip = 46; continue _fun0007 }
case 37:
                var7 = var1.props;
                var6 = var7.clearRows;
                var6 = var6.bind(var7)();
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var6 = 16;
                var6 = var7[var6];
                var7 = undefined;
                var9 = var8.bind(var7)(var6);
                var8 = var9.clearChannelDimensions;
                var6 = var1.props;
                var6 = var6.channelId;
                var6 = var8.bind(var9)(var6);
                var9 = var1.props;
                var8 = var9.startOrCancelChannelLatestMessagesLoad;
                var6 = var1.props;
                var6 = var6.hasJumpedToOriginalPost;
                var6 = var8.bind(var9)(var6);
                var6 = var1.props;
                var6 = var6._firstIgnoredScrollEventTimestampRef;
                var6['current'] = var7;
case 46:
                var6 = var4.isMessagesAckable;
                var6 = !var6;
                if(!var6) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                var7 = var1.props;
                var6 = var7.isMessagesAckable;
case 47:
                if(!var6) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                var6 = var1.props;
                var7 = var6.hasHandledScrollRef;
                var6 = false;
                var7['current'] = var6;
case 49:
                var8 = var1.props;
                var7 = var8.shouldJumpToOriginalPost;
                var6 = var1.props;
                var6 = var6.hasJumpedToOriginalPost;
                var6 = var7.bind(var8)(var6);
                if(!var6) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                var8 = var1.props;
                var7 = var8.scrollToTop;
                var6 = false;
                var6 = var7.bind(var8)(var6);
                var7 = var3.jumpSequenceId;
                var6 = var2.jumpSequenceId;
                if(!(var7 === var6)) { _fun0007_ip = 51; continue _fun0007 }
case 53:
                var8 = var1.props;
                var7 = var8.setHasJumpedToOriginalPost;
                var6 = true;
                var6 = var7.bind(var8)(var6);
case 51:
                var6 = var1.props;
                var8 = var6.isMessagesReady;
                if(!var8) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                var6 = var1.props;
                var6 = var6.isMessagesCached;
                var8 = !var6;
case 54:
                if(!var8) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                var8 = var4.isMessagesCached;
case 56:
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 17;
                var6 = var9[var6];
                var20 = undefined;
                var9 = var7.bind(var20)(var6);
                var7 = var1.props;
                var6 = {};
                var10 = var1.props;
                var10 = var10.isAtBottomRef;
                var10 = var10.current;
                var6['isAtBottom'] = var10;
                var10 = var1.props;
                var11 = var10.chatManager;
                var10 = var11.getPreviousMessages;
                var10 = var10.bind(var11)();
                var10 = var21 != var10;
                var6['hasPreviousMessages'] = var10;
                var7 = var9.bind(var20)(var7, var6, var4);
                var13 = var7.scrollToMessageId;
                var12 = var7.jumpTargetId;
                var11 = var7.jumpType;
                var6 = var7.minimizeScrolling;
                var10 = var7.focusTargetId;
                var7 = var7.shouldInitialScroll;
                var14 = var4.theme;
                var9 = var1.props;
                var9 = var9.theme;
                var15 = var14 !== var9;
                if(var15) { _fun0007_ip = 58; continue _fun0007 }
case 59:
                var14 = var4.saturation;
                var9 = var1.props;
                var9 = var9.saturation;
                var15 = var14 !== var9;
case 58:
                var16 = var15;
                if(var16) { _fun0007_ip = 60; continue _fun0007 }
case 61:
                var14 = var4.inlineAttachmentMedia;
                var9 = var1.props;
                var9 = var9.inlineAttachmentMedia;
                var16 = var14 !== var9;
case 60:
                if(var16) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                var14 = var4.inlineEmbedMedia;
                var9 = var1.props;
                var9 = var9.inlineEmbedMedia;
                var16 = var14 !== var9;
case 62:
                if(var16) { _fun0007_ip = 64; continue _fun0007 }
case 65:
                var14 = var4.renderEmbeds;
                var9 = var1.props;
                var9 = var9.renderEmbeds;
                var16 = var14 !== var9;
case 64:
                if(var16) { _fun0007_ip = 66; continue _fun0007 }
case 67:
                var14 = var4.renderReactions;
                var9 = var1.props;
                var9 = var9.renderReactions;
                var16 = var14 !== var9;
case 66:
                if(var16) { _fun0007_ip = 68; continue _fun0007 }
case 69:
                var14 = var4.animateEmoji;
                var9 = var1.props;
                var9 = var9.animateEmoji;
                var16 = var14 !== var9;
case 68:
                if(var16) { _fun0007_ip = 70; continue _fun0007 }
case 71:
                var14 = var4.animateStickers;
                var9 = var1.props;
                var9 = var9.animateStickers;
                var16 = var14 !== var9;
case 70:
                if(var16) { _fun0007_ip = 72; continue _fun0007 }
case 73:
                var14 = var4.gifAutoPlay;
                var9 = var1.props;
                var9 = var9.gifAutoPlay;
                var16 = var14 !== var9;
case 72:
                if(var16) { _fun0007_ip = 74; continue _fun0007 }
case 75:
                var14 = var4.timestampHourCycle;
                var9 = var1.props;
                var9 = var9.timestampHourCycle;
                var16 = var14 !== var9;
case 74:
                if(var16) { _fun0007_ip = 76; continue _fun0007 }
case 77:
                var14 = var4.containerWidth;
                var9 = var1.props;
                var9 = var9.containerWidth;
                var16 = var14 !== var9;
case 76:
                if(var16) { _fun0007_ip = 78; continue _fun0007 }
case 79:
                var14 = var4.guildSystemChannelFlags;
                var9 = var1.props;
                var9 = var9.guildSystemChannelFlags;
                var16 = var14 !== var9;
case 78:
                if(var16) { _fun0007_ip = 80; continue _fun0007 }
case 81:
                var14 = var4.userSettingsLocale;
                var9 = var1.props;
                var9 = var9.userSettingsLocale;
                var16 = var14 !== var9;
case 80:
                if(var16) { _fun0007_ip = 82; continue _fun0007 }
case 83:
                var14 = var4.roleStyle;
                var9 = var1.props;
                var9 = var9.roleStyle;
                var16 = var14 !== var9;
case 82:
                if(var16) { _fun0007_ip = 84; continue _fun0007 }
case 85:
                var14 = var4.canSendMessages;
                var9 = var1.props;
                var9 = var9.canSendMessages;
                var16 = var14 !== var9;
case 84:
                if(var16) { _fun0007_ip = 86; continue _fun0007 }
case 87:
                var14 = var4.showPushFeedback;
                var9 = var1.props;
                var9 = var9.showPushFeedback;
                var16 = var14 !== var9;
case 86:
                if(var16) { _fun0007_ip = 88; continue _fun0007 }
case 89:
                var14 = var4.selectedSummary;
                var9 = var1.props;
                var9 = var9.selectedSummary;
                var16 = var14 !== var9;
case 88:
                if(var16) { _fun0007_ip = 90; continue _fun0007 }
case 91:
                var14 = var4.shouldObscureSpoiler;
                var9 = var1.props;
                var9 = var9.shouldObscureSpoiler;
                var16 = var14 !== var9;
case 90:
                if(var16) { _fun0007_ip = 92; continue _fun0007 }
case 93:
                var14 = var4.explicitMediaFalsePositiveInfo;
                var9 = var1.props;
                var9 = var9.explicitMediaFalsePositiveInfo;
                var16 = var14 !== var9;
case 92:
                if(var16) { _fun0007_ip = 94; continue _fun0007 }
case 95:
                var14 = var4.isStaff;
                var9 = var1.props;
                var9 = var9.isStaff;
                var16 = var14 !== var9;
case 94:
                if(var16) { _fun0007_ip = 96; continue _fun0007 }
case 97:
                var14 = var4.isAgeVerified;
                var9 = var1.props;
                var9 = var9.isAgeVerified;
                var16 = var14 !== var9;
case 96:
                if(var16) { _fun0007_ip = 98; continue _fun0007 }
case 99:
                var14 = var4.shouldForceRender;
                var9 = var1.props;
                var9 = var9.shouldForceRender;
                var9 = var14 !== var9;
                if(!var9) { _fun0007_ip = 100; continue _fun0007 }
case 101:
                var14 = var1.props;
                var9 = var14.shouldForceRender;
case 100:
                var16 = var9;
case 98:
                if(var16) { _fun0007_ip = 102; continue _fun0007 }
case 103:
                var14 = var4.displayNameStylesEnabled;
                var9 = var1.props;
                var9 = var9.displayNameStylesEnabled;
                var16 = var14 !== var9;
case 102:
                var14 = var4.resolvingGiftCodes;
                var9 = var1.props;
                var9 = var9.resolvingGiftCodes;
                var47 = var14 !== var9;
                if(var47) { _fun0007_ip = 104; continue _fun0007 }
case 105:
                var14 = var4.resolvedGiftCodes;
                var9 = var1.props;
                var9 = var9.resolvedGiftCodes;
                var47 = var14 !== var9;
case 104:
                if(var47) { _fun0007_ip = 106; continue _fun0007 }
case 107:
                var14 = var4.acceptingGiftCodes;
                var9 = var1.props;
                var9 = var9.acceptingGiftCodes;
                var47 = var14 !== var9;
case 106:
                var _closure3_slot2 = var47;
                var46 = var4.uploads;
                var9 = var1.props;
                var45 = var9.uploads;
                var14 = _closure1_slot1;
                var9 = _closure1_slot2;
                var17 = 15;
                var9 = var9[var17];
                var19 = var14.bind(var20)(var9);
                var14 = var4.interactionStates;
                var9 = var1.props;
                var9 = var9.interactionStates;
                var9 = var19.bind(var20)(var14, var9);
                var36 = !var9;
                var _closure3_slot3 = var36;
                var14 = var4.channelPolls;
                var9 = var1.props;
                var9 = var9.channelPolls;
                var33 = var14 !== var9;
                var _closure3_slot4 = var33;
                var14 = var4.messageReferencePolls;
                var9 = var1.props;
                var9 = var9.messageReferencePolls;
                var32 = var14 !== var9;
                var _closure3_slot5 = var32;
                var14 = var4.interactionComponentStatesVersion;
                var9 = var1.props;
                var9 = var9.interactionComponentStatesVersion;
                var35 = var14 !== var9;
                var _closure3_slot6 = var35;
                var14 = var4.shouldDisableInteractiveComponents;
                var9 = var1.props;
                var9 = var9.shouldDisableInteractiveComponents;
                var9 = var14 !== var9;
                var _closure3_slot7 = var9;
                var14 = var4.communicationDisabledVersion;
                var9 = var1.props;
                var9 = var9.communicationDisabledVersion;
                var42 = var14 !== var9;
                var _closure3_slot8 = var42;
                var14 = var4.messageAuthorMembers;
                var9 = var1.props;
                var9 = var9.messageAuthorMembers;
                var41 = var14 !== var9;
                var _closure3_slot9 = var41;
                var14 = var4.failedMessagesVersion;
                var9 = var1.props;
                var9 = var9.failedMessagesVersion;
                var40 = var14 !== var9;
                var _closure3_slot10 = var40;
                var14 = var4.renderCommunicationDisabled;
                var9 = var1.props;
                var9 = var9.renderCommunicationDisabled;
                var37 = var14 !== var9;
                var _closure3_slot11 = var37;
                var39 = var4.forwardGuildsVersion;
                var9 = var1.props;
                var38 = var9.forwardGuildsVersion;
                var9 = var1.props;
                var14 = var9.channel;
                var9 = var14.isForumPost;
                var34 = var9.bind(var14)();
                if(!var34) { _fun0007_ip = 108; continue _fun0007 }
case 109:
                var14 = var4.isFollowingForumPost;
                var9 = var1.props;
                var9 = var9.isFollowingForumPost;
                var34 = var14 !== var9;
case 108:
                var _closure3_slot12 = var34;
                var14 = var4.showMediaPostSharePrompt;
                var9 = var1.props;
                var9 = var9.showMediaPostSharePrompt;
                var31 = var14 !== var9;
                var _closure3_slot13 = var31;
                var14 = var4.unloadedContentEntryMessageIds;
                var9 = var1.props;
                var9 = var9.unloadedContentEntryMessageIds;
                var30 = var14 !== var9;
                var _closure3_slot14 = var30;
                var14 = var4.invalidApplicationIds;
                var9 = var1.props;
                var9 = var9.invalidApplicationIds;
                var9 = var14 !== var9;
                var _closure3_slot15 = var9;
                var19 = var4.activityInstanceIds;
                var14 = var1.props;
                var14 = var14.activityInstanceIds;
                var44 = var19 !== var14;
                if(var44) { _fun0007_ip = 110; continue _fun0007 }
case 111:
                var19 = var4.activityParticipants;
                var14 = var1.props;
                var14 = var14.activityParticipants;
                var44 = var19 !== var14;
case 110:
                if(var44) { _fun0007_ip = 112; continue _fun0007 }
case 113:
                var19 = var4.applicationAssetFetchingIds;
                var14 = var1.props;
                var14 = var14.applicationAssetFetchingIds;
                var44 = var19 !== var14;
case 112:
                if(var44) { _fun0007_ip = 114; continue _fun0007 }
case 115:
                var19 = var4.activityInstancePresenceDetails;
                var14 = var1.props;
                var14 = var14.activityInstancePresenceDetails;
                var44 = var19 !== var14;
case 114:
                if(var44) { _fun0007_ip = 116; continue _fun0007 }
case 117:
                var19 = var4.messagesWithActivitiesLaunching;
                var14 = var1.props;
                var14 = var14.messagesWithActivitiesLaunching;
                var44 = var19 !== var14;
case 116:
                if(var44) { _fun0007_ip = 118; continue _fun0007 }
case 119:
                var44 = var9;
case 118:
                var _closure3_slot16 = var44;
                var14 = _closure1_slot0;
                var9 = _closure1_slot2;
                var19 = var9[var17];
                var24 = var14.bind(var20)(var19);
                var23 = var24.areArraysShallowEqual;
                var22 = var4.activityInviteMessageIds;
                var19 = var1.props;
                var19 = var19.activityInviteMessageIds;
                var19 = var23.bind(var24)(var22, var19);
                var29 = !var19;
                var _closure3_slot17 = var29;
                var9 = var9[var17];
                var19 = var14.bind(var20)(var9);
                var17 = var19.areArraysShallowEqual;
                var14 = var4.resolvedReferralTrialOfferIds;
                var9 = var1.props;
                var9 = var9.resolvedReferralTrialOfferIds;
                var9 = var17.bind(var19)(var14, var9);
                var28 = !var9;
                if(var28) { _fun0007_ip = 120; continue _fun0007 }
case 121:
                var14 = var4.referralTrialOfferId;
                var9 = var1.props;
                var9 = var9.referralTrialOfferId;
                var28 = var14 !== var9;
case 120:
                if(var28) { _fun0007_ip = 122; continue _fun0007 }
case 123:
                var14 = var4.isPremiumTier2User;
                var9 = var1.props;
                var9 = var9.isPremiumTier2User;
                var28 = var14 !== var9;
case 122:
                var _closure3_slot18 = var28;
                var14 = var4.guildInviteColorsFetched;
                var9 = var1.props;
                var9 = var9.guildInviteColorsFetched;
                var27 = var14 !== var9;
                var _closure3_slot19 = var27;
                var14 = var4.guildEmojis;
                var9 = var1.props;
                var9 = var9.guildEmojis;
                var26 = var14 !== var9;
                var _closure3_slot20 = var26;
                var14 = var4.selfActivities;
                var9 = var1.props;
                var9 = var9.selfActivities;
                var25 = var14 !== var9;
                var _closure3_slot21 = var25;
                var14 = var4.currentClientVoiceChannelId;
                var9 = var1.props;
                var9 = var9.currentClientVoiceChannelId;
                var43 = var14 !== var9;
                var _closure3_slot22 = var43;
                var14 = var4.voiceStateChannelIdSummaryForGuild;
                var9 = var1.props;
                var9 = var9.voiceStateChannelIdSummaryForGuild;
                var19 = var14 !== var9;
                var _closure3_slot23 = var19;
                var14 = var4.voiceStatePrivateChannelId;
                var9 = var1.props;
                var9 = var9.voiceStatePrivateChannelId;
                var9 = var14 !== var9;
                var17 = var4.activityLaunchJoinStates;
                var14 = var1.props;
                var14 = var14.activityLaunchJoinStates;
                var24 = var17 !== var14;
                var _closure3_slot24 = var24;
                var17 = var4.authorizedAppsTokens;
                var14 = var1.props;
                var14 = var14.authorizedAppsTokens;
                var23 = var17 !== var14;
                var _closure3_slot25 = var23;
                var22 = var4.displayNameStylesEnabled;
                var14 = var1.props;
                var17 = var14.displayNameStylesEnabled;
                var14 = var4.currentUserDisplayNameStyles;
                var49 = var21 == var14;
                var48 = undefined;
                if(var49) { _fun0007_ip = 124; continue _fun0007 }
case 125:
                var48 = var14.fontId;
case 124:
                var14 = var1.props;
                var49 = var14.currentUserDisplayNameStyles;
                var50 = var21 == var49;
                var14 = undefined;
                if(var50) { _fun0007_ip = 126; continue _fun0007 }
case 127:
                var14 = var49.fontId;
case 126:
                var14 = var48 !== var14;
                var _closure3_slot26 = var14;
                if(var16) { _fun0007_ip = 128; continue _fun0007 }
case 129:
                if(var47) { _fun0007_ip = 128; continue _fun0007 }
case 130:
                if(!(var46 === var45)) { _fun0007_ip = 128; continue _fun0007 }
case 131:
                if(var44) { _fun0007_ip = 128; continue _fun0007 }
case 132:
                var45 = var4.messages;
                var44 = var1.props;
                var44 = var44.messages;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 133:
                var45 = var4.editingMessageId;
                var44 = var1.props;
                var44 = var44.editingMessageId;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 134:
                var45 = var4.replyingMessageId;
                var44 = var1.props;
                var44 = var44.replyingMessageId;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 135:
                if(var9) { _fun0007_ip = 128; continue _fun0007 }
case 136:
                var45 = var4.messageAuthorActivities;
                var44 = var1.props;
                var44 = var44.messageAuthorActivities;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 137:
                var45 = var4.oldestUnreadMessageId;
                var44 = var1.props;
                var44 = var44.oldestUnreadMessageId;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 138:
                var45 = var4.invites;
                var44 = var1.props;
                var44 = var44.invites;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 139:
                var45 = var4.appDirectoryEmbedApplications;
                var44 = var1.props;
                var44 = var44.appDirectoryEmbedApplications;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 140:
                var45 = var4.invalidAppDirectoryEmbedApplicationIds;
                var44 = var1.props;
                var44 = var44.invalidAppDirectoryEmbedApplicationIds;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 141:
                var45 = var4.appDirectoryEmbedApplicationFetchStates;
                var44 = var1.props;
                var44 = var44.appDirectoryEmbedApplicationFetchStates;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 142:
                var45 = var4.guildTemplates;
                var44 = var1.props;
                var44 = var44.guildTemplates;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 143:
                var45 = var4.buildOverrides;
                var44 = var1.props;
                var44 = var44.buildOverrides;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 144:
                var45 = var4.experimentEmbeds;
                var44 = var1.props;
                var44 = var44.experimentEmbeds;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 145:
                var45 = var4.quests;
                var44 = var1.props;
                var44 = var44.quests;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 146:
                var45 = var4.isFetchingCurrentQuests;
                var44 = var1.props;
                var44 = var44.isFetchingCurrentQuests;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 147:
                var45 = var4.participantsLength;
                var44 = var1.props;
                var44 = var44.participantsLength;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 148:
                var45 = var4.isMessagesReady;
                var44 = var1.props;
                var44 = var44.isMessagesReady;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 149:
                var45 = var4.channelThreadsVersion;
                var44 = var1.props;
                var44 = var44.channelThreadsVersion;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 150:
                var45 = var4.rsvpVersion;
                var44 = var1.props;
                var44 = var44.rsvpVersion;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 151:
                var45 = var4.repliedIds;
                var44 = var1.props;
                var44 = var44.repliedIds;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 152:
                var45 = var4.hasLoadedExperiments;
                var44 = var1.props;
                var44 = var44.hasLoadedExperiments;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 153:
                var45 = var4.isMessageRequest;
                var44 = var1.props;
                var44 = var44.isMessageRequest;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 154:
                var45 = var4.isSpamMessageRequest;
                var44 = var1.props;
                var44 = var44.isSpamMessageRequest;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 155:
                var45 = var4.currentUserCommunicationDisabled;
                var44 = var1.props;
                var44 = var44.currentUserCommunicationDisabled;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 156:
                var45 = var4.userSettingsLocale;
                var44 = var1.props;
                var44 = var44.userSettingsLocale;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 157:
                var45 = var4.selectedSummary;
                var44 = var1.props;
                var44 = var44.selectedSummary;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 158:
                var45 = var4.showPushFeedback;
                var44 = var1.props;
                var44 = var44.showPushFeedback;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 159:
                var45 = var4.cacheStoreLoaded;
                var44 = var1.props;
                var44 = var44.cacheStoreLoaded;
                if(!(var45 === var44)) { _fun0007_ip = 128; continue _fun0007 }
case 160:
                if(var43) { _fun0007_ip = 128; continue _fun0007 }
case 161:
                if(var42) { _fun0007_ip = 128; continue _fun0007 }
case 162:
                if(var41) { _fun0007_ip = 128; continue _fun0007 }
case 163:
                if(var40) { _fun0007_ip = 128; continue _fun0007 }
case 164:
                if(!(var39 === var38)) { _fun0007_ip = 128; continue _fun0007 }
case 165:
                if(var37) { _fun0007_ip = 128; continue _fun0007 }
case 166:
                if(var36) { _fun0007_ip = 128; continue _fun0007 }
case 167:
                if(var35) { _fun0007_ip = 128; continue _fun0007 }
case 168:
                if(var34) { _fun0007_ip = 128; continue _fun0007 }
case 169:
                if(!(var21 == var12)) { _fun0007_ip = 128; continue _fun0007 }
case 170:
                if(!(var21 == var10)) { _fun0007_ip = 128; continue _fun0007 }
case 171:
                var35 = var4.androidKeyboardHeight;
                var34 = var1.props;
                var34 = var34.androidKeyboardHeight;
                if(!(var35 === var34)) { _fun0007_ip = 128; continue _fun0007 }
case 172:
                var35 = var4.mediaPostPreviewEmbeds;
                var34 = var1.props;
                var34 = var34.mediaPostPreviewEmbeds;
                if(!(var35 === var34)) { _fun0007_ip = 128; continue _fun0007 }
case 173:
                var35 = var4.shouldObscureSpoiler;
                var34 = var1.props;
                var34 = var34.shouldObscureSpoiler;
                if(!(var35 === var34)) { _fun0007_ip = 128; continue _fun0007 }
case 174:
                var35 = var4.shouldDisableInteractiveComponents;
                var34 = var1.props;
                var34 = var34.shouldDisableInteractiveComponents;
                if(!(var35 === var34)) { _fun0007_ip = 128; continue _fun0007 }
case 175:
                if(var33) { _fun0007_ip = 128; continue _fun0007 }
case 176:
                if(var32) { _fun0007_ip = 128; continue _fun0007 }
case 177:
                if(var31) { _fun0007_ip = 128; continue _fun0007 }
case 178:
                var32 = var4.threadStartingReferenceMessage;
                var31 = var1.props;
                var31 = var31.threadStartingReferenceMessage;
                if(!(var32 === var31)) { _fun0007_ip = 128; continue _fun0007 }
case 179:
                if(var30) { _fun0007_ip = 128; continue _fun0007 }
case 180:
                if(var29) { _fun0007_ip = 128; continue _fun0007 }
case 181:
                if(var28) { _fun0007_ip = 128; continue _fun0007 }
case 182:
                if(var27) { _fun0007_ip = 128; continue _fun0007 }
case 183:
                if(var26) { _fun0007_ip = 128; continue _fun0007 }
case 184:
                if(var25) { _fun0007_ip = 128; continue _fun0007 }
case 185:
                if(var24) { _fun0007_ip = 128; continue _fun0007 }
case 186:
                if(var23) { _fun0007_ip = 128; continue _fun0007 }
case 187:
                if(!(var22 === var17)) { _fun0007_ip = 128; continue _fun0007 }
case 188:
                if(var14) { _fun0007_ip = 128; continue _fun0007 }
case 189:
                if(var19) { _fun0007_ip = 128; continue _fun0007 }
case 190:
                var23 = var1.props;
                var22 = var23.recordTimings;
                var14 = var1.props;
                var17 = var14.channelId;
                var14 = var1.props;
                var14 = var14.messages;
                var14 = var22.bind(var23)(var17, var14);
                _fun0007_ip = 44; continue _fun0007;
case 128:
                var14 = global;
                var14 = var14.Set;
                var17 = var14.prototype;
                var17 = Object.create(var17, {constructor: {value: var14}});
                var54 = var17;
                var14 = new var54[var14](var53);
                var14 = var14 instanceof Object ? var14 : var17;
                var _closure3_slot27 = var14;
                var22 = var4.editingMessageId;
                var17 = var1.props;
                var17 = var17.editingMessageId;
                if(!(var22 !== var17)) { _fun0007_ip = 191; continue _fun0007 }
case 192:
                var17 = var1.props;
                var17 = var17.editingMessageId;
                if(!(var21 != var17)) { _fun0007_ip = 193; continue _fun0007 }
case 194:
                var22 = var14.add;
                var17 = var1.props;
                var17 = var17.editingMessageId;
                var17 = var22.bind(var14)(var17);
case 193:
                var17 = var4.editingMessageId;
                if(!(var21 != var17)) { _fun0007_ip = 191; continue _fun0007 }
case 195:
                var22 = var14.add;
                var17 = var4.editingMessageId;
                var17 = var22.bind(var14)(var17);
case 191:
                var22 = var4.replyingMessageId;
                var17 = var1.props;
                var17 = var17.replyingMessageId;
                if(!(var22 !== var17)) { _fun0007_ip = 196; continue _fun0007 }
case 197:
                var17 = var1.props;
                var17 = var17.replyingMessageId;
                if(!(var21 != var17)) { _fun0007_ip = 198; continue _fun0007 }
case 199:
                var22 = var14.add;
                var17 = var1.props;
                var17 = var17.replyingMessageId;
                var17 = var22.bind(var14)(var17);
case 198:
                var17 = var4.replyingMessageId;
                if(!(var21 != var17)) { _fun0007_ip = 196; continue _fun0007 }
case 200:
                var22 = var14.add;
                var17 = var4.replyingMessageId;
                var17 = var22.bind(var14)(var17);
case 196:
                var22 = var4.isMessagesReady;
                var17 = var1.props;
                var17 = var17.isMessagesReady;
                if(!(var22 === var17)) { _fun0007_ip = 201; continue _fun0007 }
case 202:
                var22 = var4.isCallActive;
                var17 = var1.props;
                var17 = var17.isCallActive;
                if(!(var22 === var17)) { _fun0007_ip = 201; continue _fun0007 }
case 203:
                if(var9) { _fun0007_ip = 201; continue _fun0007 }
case 204:
                var17 = var4.participantsLength;
                var9 = var1.props;
                var9 = var9.participantsLength;
                if(!(var17 !== var9)) { _fun0007_ip = 205; continue _fun0007 }
case 201:
                var17 = _closure1_slot1;
                var22 = _closure1_slot2;
                var9 = 18;
                var9 = var22[var9];
                var23 = var17.bind(var20)(var9);
                var22 = var23.find;
                var9 = var1.props;
                var17 = var9.messages;
                var9 = var17.toArray;
                var17 = var9.bind(var17)();
                var9 = var17.reverse;
                var17 = var9.bind(var17)();
                var9 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = _closure1_slot19;
                    var1 = var1.CALL;
                    var1 = var2 === var1;
                    return var1;
                };
                var9 = var22.bind(var23)(var17, var9);
                if(!(var21 != var9)) { _fun0007_ip = 205; continue _fun0007 }
case 206:
                var17 = var14.add;
                var9 = var9.id;
                var9 = var17.bind(var14)(var9);
case 205:
                var17 = var4.channelThreadsVersion;
                var9 = var1.props;
                var9 = var9.channelThreadsVersion;
                var9 = var17 !== var9;
                var _closure3_slot28 = var9;
                var17 = var4.rsvpVersion;
                var9 = var1.props;
                var9 = var9.rsvpVersion;
                var9 = var17 !== var9;
                var _closure3_slot29 = var9;
                var17 = var4.repliedIds;
                var9 = var1.props;
                var9 = var9.repliedIds;
                var9 = var17 !== var9;
                var _closure3_slot30 = var9;
                var17 = var4.hasLoadedExperiments;
                var9 = var1.props;
                var9 = var9.hasLoadedExperiments;
                var9 = var17 !== var9;
                var _closure3_slot31 = var9;
                var17 = var4.communicationDisabledVersion;
                var22 = var21 != var17;
                var9 = -1;
                if(!var22) { _fun0007_ip = 207; continue _fun0007 }
case 208:
                var9 = var17;
case 207:
                var _closure3_slot32 = var9;
                var9 = var4.cacheStoreLoaded;
                var9 = !var9;
                if(!var9) { _fun0007_ip = 209; continue _fun0007 }
case 210:
                var17 = var1.props;
                var9 = var17.cacheStoreLoaded;
case 209:
                var _closure3_slot33 = var9;
                var17 = null;
                if(!var19) { _fun0007_ip = 211; continue _fun0007 }
case 212:
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var18 = 19;
                var18 = var22[var18];
                var20 = var19.bind(var20)(var18);
                var19 = var20.getVoiceChannelIdChangedAuthorIds;
                var22 = var4.voiceStateChannelIdSummaryForGuild;
                var23 = var21 != var22;
                var18 = null;
                if(!var23) { _fun0007_ip = 213; continue _fun0007 }
case 214:
                var18 = var22;
case 213:
                var22 = var1.props;
                var22 = var22.voiceStateChannelIdSummaryForGuild;
                var23 = var21 != var22;
                var21 = null;
                if(!var23) { _fun0007_ip = 215; continue _fun0007 }
case 216:
                var21 = var22;
case 215:
                var17 = var19.bind(var20)(var18, var21);
case 211:
                var _closure3_slot34 = var17;
                var17 = var1.props;
                var18 = var17.messages;
                var17 = var18.forEach;
                var5 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = arg1;
                        var3 = _closure3_slot23;
                        if(!var3) { _fun0008_ip = 217; continue _fun0008 }
case 218:
                        var3 = _closure3_slot34;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0008_ip = 217; continue _fun0008 }
case 31:
                        var3 = var1.author;
                        if(!(var4 != var3)) { _fun0008_ip = 217; continue _fun0008 }
case 33:
                        var5 = _closure3_slot34;
                        var4 = var5.has;
                        var3 = var1.author;
                        var3 = var3.id;
                        var3 = var4.bind(var5)(var3);
                        if(var3) { _fun0008_ip = 219; continue _fun0008 }
case 217:
                        var3 = _closure3_slot22;
                        if(!var3) { _fun0008_ip = 220; continue _fun0008 }
case 43:
                        var3 = var1.activity;
                        var4 = null;
                        var5 = var4 == var3;
                        var4 = undefined;
                        if(var5) { _fun0008_ip = 221; continue _fun0008 }
case 222:
                        var4 = var3.type;
case 221:
                        var3 = _closure1_slot16;
                        var3 = var3.STREAM_REQUEST;
                        if(!(var4 !== var3)) { _fun0008_ip = 223; continue _fun0008 }
case 220:
                        var3 = _closure3_slot31;
                        if(!var3) { _fun0008_ip = 224; continue _fun0008 }
case 41:
                        var4 = var1.type;
                        var3 = _closure1_slot19;
                        var3 = var3.USER_JOIN;
                        if(!(var4 !== var3)) { _fun0008_ip = 225; continue _fun0008 }
case 224:
                        var3 = _closure3_slot30;
                        if(!var3) { _fun0008_ip = 226; continue _fun0008 }
case 227:
                        var4 = var1.type;
                        var3 = _closure1_slot19;
                        var3 = var3.REPLY;
                        if(!(var4 === var3)) { _fun0008_ip = 226; continue _fun0008 }
case 228:
                        var3 = var1.messageReference;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0008_ip = 226; continue _fun0008 }
case 229:
                        var4 = _closure3_slot0;
                        var4 = var4.props;
                        var5 = var4.repliedIds;
                        var4 = var5.has;
                        var3 = var3.message_id;
                        var3 = var4.bind(var5)(var3);
                        if(var3) { _fun0008_ip = 230; continue _fun0008 }
case 226:
                        var3 = _closure3_slot28;
                        if(!var3) { _fun0008_ip = 231; continue _fun0008 }
case 232:
                        var4 = var1.hasFlag;
                        var3 = _closure1_slot18;
                        var3 = var3.HAS_THREAD;
                        var3 = var4.bind(var1)(var3);
                        if(var3) { _fun0008_ip = 233; continue _fun0008 }
case 231:
                        var3 = _closure3_slot29;
                        if(!var3) { _fun0008_ip = 234; continue _fun0008 }
case 235:
                        var3 = var1.codedLinks;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(!(var4 > var3))) { _fun0008_ip = 236; continue _fun0008 }
case 234:
                        var3 = _closure3_slot20;
                        if(!var3) { _fun0008_ip = 237; continue _fun0008 }
case 238:
                        var4 = var1.type;
                        var3 = _closure1_slot19;
                        var3 = var3.EMOJI_ADDED;
                        if(!(var4 !== var3)) { _fun0008_ip = 239; continue _fun0008 }
case 237:
                        var3 = _closure3_slot11;
                        if(var3) { _fun0008_ip = 240; continue _fun0008 }
case 241:
                        var3 = _closure3_slot8;
                        if(!var3) { _fun0008_ip = 242; continue _fun0008 }
case 243:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var4 = var3.guildId;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0008_ip = 242; continue _fun0008 }
case 244:
                        var6 = _closure1_slot12;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.guildId;
                        var3 = var1.author;
                        var4 = var3.id;
                        var3 = undefined;
                        var4 = var6.bind(var3)(var5, var4);
                        var3 = _closure3_slot32;
                        if(!(!(var4 > var3))) { _fun0008_ip = 240; continue _fun0008 }
case 242:
                        var3 = _closure3_slot9;
                        if(!var3) { _fun0008_ip = 245; continue _fun0008 }
case 246:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.guildId;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0008_ip = 245; continue _fun0008 }
case 247:
                        var5 = var1.author;
                        var6 = var4 == var5;
                        var3 = undefined;
                        if(var6) { _fun0008_ip = 248; continue _fun0008 }
case 249:
                        var3 = var5.id;
case 248:
                        if(!(var4 == var3)) { _fun0008_ip = 250; continue _fun0008 }
case 245:
                        var3 = _closure3_slot10;
                        if(!var3) { _fun0008_ip = 251; continue _fun0008 }
case 252:
                        var3 = var1.author;
                        var4 = var3.id;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.currentUserId;
                        if(!(var4 !== var3)) { _fun0008_ip = 253; continue _fun0008 }
case 251:
                        var3 = _closure3_slot3;
                        if(!var3) { _fun0008_ip = 254; continue _fun0008 }
case 255:
                        var3 = _closure3_slot1;
                        var4 = var3.interactionStates;
                        var3 = var1.id;
                        var4 = var4[var3];
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.interactionStates;
                        var3 = var1.id;
                        var3 = var5[var3];
                        if(!(var4 === var3)) { _fun0008_ip = 256; continue _fun0008 }
case 254:
                        var3 = _closure3_slot6;
                        if(!var3) { _fun0008_ip = 257; continue _fun0008 }
case 258:
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
                        if(!(var4 === var3)) { _fun0008_ip = 259; continue _fun0008 }
case 257:
                        var3 = _closure3_slot7;
                        if(!var3) { _fun0008_ip = 260; continue _fun0008 }
case 261:
                        var3 = var1.components;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(var3 === var4)) { _fun0008_ip = 262; continue _fun0008 }
case 260:
                        var3 = _closure3_slot4;
                        if(!var3) { _fun0008_ip = 263; continue _fun0008 }
case 264:
                        var3 = _closure3_slot1;
                        var4 = var3.channelPolls;
                        var3 = var1.id;
                        var4 = var4[var3];
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.channelPolls;
                        var3 = var1.id;
                        var3 = var5[var3];
                        if(!(var4 === var3)) { _fun0008_ip = 265; continue _fun0008 }
case 263:
                        var3 = _closure3_slot5;
                        if(!var3) { _fun0008_ip = 266; continue _fun0008 }
case 267:
                        var4 = var1.messageReference;
                        var3 = null;
                        var6 = var3 == var4;
                        var5 = undefined;
                        if(var6) { _fun0008_ip = 268; continue _fun0008 }
case 269:
                        var5 = var4.message_id;
case 268:
                        if(!(var3 != var5)) { _fun0008_ip = 266; continue _fun0008 }
case 270:
                        var3 = _closure3_slot1;
                        var3 = var3.messageReferencePolls;
                        var4 = var3[var5];
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.messageReferencePolls;
                        var3 = var3[var5];
                        if(!(var4 === var3)) { _fun0008_ip = 271; continue _fun0008 }
case 266:
                        var3 = _closure3_slot14;
                        if(!var3) { _fun0008_ip = 89; continue _fun0008 }
case 272:
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
                        if(!(var4 === var3)) { _fun0008_ip = 273; continue _fun0008 }
case 89:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var4 = var3.channel;
                        var3 = var4.isForumPost;
                        var3 = var3.bind(var4)();
                        if(!var3) { _fun0008_ip = 274; continue _fun0008 }
case 275:
                        var3 = _closure3_slot12;
                        if(var3) { _fun0008_ip = 276; continue _fun0008 }
case 277:
                        var3 = _closure3_slot13;
                        if(!var3) { _fun0008_ip = 274; continue _fun0008 }
case 276:
                        var4 = var1.id;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 20;
                        var5 = var5[var3];
                        var3 = undefined;
                        var6 = var6.bind(var3)(var5);
                        var5 = var6.castChannelIdAsMessageId;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.channelId;
                        var3 = var5.bind(var6)(var3);
                        if(!(var4 !== var3)) { _fun0008_ip = 278; continue _fun0008 }
case 274:
                        var3 = _closure3_slot16;
                        if(!var3) { _fun0008_ip = 279; continue _fun0008 }
case 280:
                        var4 = var1.activityInstance;
                        var3 = null;
                        if(!(var3 == var4)) { _fun0008_ip = 281; continue _fun0008 }
case 279:
                        var3 = _closure3_slot17;
                        if(!var3) { _fun0008_ip = 282; continue _fun0008 }
case 283:
                        var6 = var1.activity;
                        var5 = null;
                        var7 = var5 == var6;
                        var4 = undefined;
                        if(var7) { _fun0008_ip = 100; continue _fun0008 }
case 284:
                        var4 = var6.party_id;
case 100:
                        var3 = var5 != var4;
case 282:
                        if(!var3) { _fun0008_ip = 285; continue _fun0008 }
case 286:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
case 285:
                        var3 = _closure3_slot25;
                        if(!var3) { _fun0008_ip = 287; continue _fun0008 }
case 288:
                        var4 = var1.application;
                        var3 = null;
                        if(!(var3 == var4)) { _fun0008_ip = 289; continue _fun0008 }
case 287:
                        var3 = _closure3_slot26;
                        if(!var3) { _fun0008_ip = 290; continue _fun0008 }
case 291:
                        var3 = var1.author;
                        var4 = null;
                        var5 = var4 == var3;
                        var4 = undefined;
                        if(var5) { _fun0008_ip = 292; continue _fun0008 }
case 293:
                        var4 = var3.id;
case 292:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.currentUserId;
                        if(!(var4 !== var3)) { _fun0008_ip = 294; continue _fun0008 }
case 290:
                        var3 = var1.author;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0008_ip = 295; continue _fun0008 }
case 296:
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var8 = 21;
                        var6 = var3[var8];
                        var3 = undefined;
                        var10 = var7.bind(var3)(var6);
                        var9 = var10.messageAuthorActivitiesChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var9.bind(var10)(var1, var7, var6);
                        if(var6) { _fun0008_ip = 297; continue _fun0008 }
case 298:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var10 = var7.bind(var3)(var6);
                        var9 = var10.codedLinksChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var9.bind(var10)(var1, var7, var6);
                        if(var6) { _fun0008_ip = 297; continue _fun0008 }
case 299:
                        var6 = _closure3_slot2;
                        if(!var6) { _fun0008_ip = 300; continue _fun0008 }
case 301:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var10 = var7.bind(var3)(var6);
                        var9 = var10.giftCodesChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var9.bind(var10)(var1, var7, var6);
                        if(var6) { _fun0008_ip = 297; continue _fun0008 }
case 300:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var9 = var7.bind(var3)(var6);
                        var8 = var9.mediaPostPreviewEmbedsChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var8.bind(var9)(var1, var7, var6);
                        if(var6) { _fun0008_ip = 297; continue _fun0008 }
case 302:
                        var6 = _closure3_slot33;
                        if(!var6) { _fun0008_ip = 303; continue _fun0008 }
case 304:
                        var7 = var1.embeds;
                        var8 = var7.length;
                        var7 = 0;
                        var6 = var8 > var7;
case 303:
                        if(!var6) { _fun0008_ip = 305; continue _fun0008 }
case 306:
                        var8 = _closure3_slot27;
                        var7 = var8.add;
                        var6 = var1.id;
                        var6 = var7.bind(var8)(var6);
case 305:
                        var6 = var1.type;
                        var5 = _closure1_slot19;
                        var5 = var5.THREAD_STARTER_MESSAGE;
                        var5 = var6 === var5;
                        if(!var5) { _fun0008_ip = 307; continue _fun0008 }
case 308:
                        var6 = _closure3_slot1;
                        var7 = var6.threadStartingReferenceMessage;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var6.threadStartingReferenceMessage;
                        var5 = var7 !== var6;
case 307:
                        if(!var5) { _fun0008_ip = 309; continue _fun0008 }
case 310:
                        var7 = _closure3_slot27;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 309:
                        var5 = _closure3_slot15;
                        if(!var5) { _fun0008_ip = 311; continue _fun0008 }
case 312:
                        var6 = var1.applicationId;
                        var5 = var4 != var6;
case 311:
                        if(!var5) { _fun0008_ip = 313; continue _fun0008 }
case 314:
                        var6 = _closure3_slot1;
                        var8 = var6.invalidApplicationIds;
                        var7 = var8.includes;
                        var6 = var1.applicationId;
                        var5 = var7.bind(var8)(var6);
case 313:
                        if(!var5) { _fun0008_ip = 315; continue _fun0008 }
case 316:
                        var7 = _closure3_slot27;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 315:
                        var5 = _closure3_slot18;
                        if(!var5) { _fun0008_ip = 112; continue _fun0008 }
case 317:
                        var8 = var1.referralTrialOfferId;
                        var5 = var4 != var8;
                        if(!var5) { _fun0008_ip = 318; continue _fun0008 }
case 319:
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var7 = var6.resolvedReferralTrialOfferIds;
                        var6 = var7.includes;
                        var5 = var6.bind(var7)(var8);
case 318:
                        if(!var5) { _fun0008_ip = 112; continue _fun0008 }
case 320:
                        var7 = _closure3_slot27;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 112:
                        var5 = _closure3_slot19;
                        if(!var5) { _fun0008_ip = 114; continue _fun0008 }
case 321:
                        var6 = var1.codedLinks;
                        var7 = var6.length;
                        var6 = 0;
                        var5 = var7 > var6;
case 114:
                        if(!var5) { _fun0008_ip = 322; continue _fun0008 }
case 117:
                        var7 = _closure3_slot27;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 322:
                        var5 = _closure3_slot21;
                        if(var5) { _fun0008_ip = 323; continue _fun0008 }
case 324:
                        var5 = _closure3_slot24;
                        if(!var5) { _fun0008_ip = 295; continue _fun0008 }
case 323:
                        var5 = var1.activity;
                        var6 = var4 == var5;
                        var3 = undefined;
                        if(var6) { _fun0008_ip = 325; continue _fun0008 }
case 326:
                        var3 = var5.party_id;
case 325:
                        if(!(var4 != var3)) { _fun0008_ip = 295; continue _fun0008 }
case 327:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0008_ip = 295; continue _fun0008;
case 297:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0008_ip = 295; continue _fun0008;
case 294:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0008_ip = 295; continue _fun0008;
case 289:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0008_ip = 295; continue _fun0008;
case 281:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0008_ip = 295; continue _fun0008;
case 278:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0008_ip = 295; continue _fun0008;
case 273:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0008_ip = 295; continue _fun0008;
case 271:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        var3 = undefined;
                        return var3;
case 265:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0008_ip = 295; continue _fun0008;
case 262:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0008_ip = 295; continue _fun0008;
case 259:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0008_ip = 295; continue _fun0008;
case 256:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0008_ip = 295; continue _fun0008;
case 253:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0008_ip = 295; continue _fun0008;
case 250:
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
                        if(!(var4 !== var3)) { _fun0008_ip = 295; continue _fun0008 }
case 126:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0008_ip = 295; continue _fun0008;
case 240:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0008_ip = 295; continue _fun0008;
case 239:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0008_ip = 295; continue _fun0008;
case 236:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0008_ip = 295; continue _fun0008;
case 233:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0008_ip = 295; continue _fun0008;
case 230:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        var3 = undefined;
                        return var3;
case 225:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0008_ip = 295; continue _fun0008;
case 223:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0008_ip = 295; continue _fun0008;
case 219:
                        var3 = _closure3_slot27;
                        var2 = var3.add;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
case 295:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = var17.bind(var18)(var5);
                var5 = var4.channelId;
                var4 = var1.props;
                var4 = var4.channelId;
                var5 = var5 !== var4;
                if(var5) { _fun0007_ip = 328; continue _fun0007 }
case 329:
                var3 = var3.suppressRowAnimationSequenceId;
                var2 = var2.suppressRowAnimationSequenceId;
                var5 = var3 === var2;
case 328:
                var4 = var1.props;
                var3 = var4.updateRows;
                var2 = {};
                var2['forceRender'] = var16;
                var2['forceReload'] = var15;
                var2['updateMessageIds'] = var14;
                var2['scrollToMessageId'] = var13;
                var2['jumpTargetId'] = var12;
                var2['jumpType'] = var11;
                var2['focusTargetId'] = var10;
                var2['ignoreEmbedDescriptionCache'] = var9;
                var2['messagesNewlyLoaded'] = var8;
                var2['shouldInitialScroll'] = var7;
                var2['minimizeScrolling'] = var6;
                var2['isAnimated'] = var5;
                var5 = var1.props;
                var5 = var5.hasJumpedToOriginalPost;
                var2['hasJumpedToOriginalPost'] = var5;
                var2 = var3.bind(var4)(var2);
                var4 = var1.props;
                var3 = var4.setShouldForceRender;
                var2 = false;
                var2 = var3.bind(var4)(var2);
                var4 = var1.props;
                var3 = var4.recordTimings;
                var2 = var1.props;
                var2 = var2.channelId;
                var1 = var1.props;
                var1 = var1.messages;
                var1 = var3.bind(var4)(var2, var1);
case 44:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
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
            var1 = 22;
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
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleTapImage;
            var5['onTapImage'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleTapChannel;
            var5['onTapChannel'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleLongPressChannel;
            var5['onLongPressChannel'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleTapAttachmentLink;
            var5['onTapAttachmentLink'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleLongPressAttachmentLink;
            var5['onLongPressAttachmentLink'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleTapCall;
            var5['onTapCall'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleTapMention;
            var5['onTapMention'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleTapCommandMention;
            var5['onTapCommandMention'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleLongPressCommandMention;
            var5['onLongPressCommandMention'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleTapLink;
            var5['onTapLink'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleLongPressLink;
            var5['onLongPressLink'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleTapReaction;
            var5['onTapReaction'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleLongPressReaction;
            var5['onLongPressReaction'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleTapAvatar;
            var5['onTapAvatar'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleTapUsername;
            var5['onTapUsername'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleLongPressUsername;
            var5['onLongPressUsername'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleOpenSticker;
            var5['onTapSticker'] = var15;
            var15 = var9.props;
            var15 = var15.handleLongPressSticker;
            var5['onLongPressSticker'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleLongPressMessage;
            var5['onLongPressMessage'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleInitiateReply;
            var5['onInitiateReply'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleInitiateEdit;
            var5['onInitiateEdit'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleInitiateThread;
            var5['onInitiateThread'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleTapMessage;
            var5['onTapMessage'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleDoubleTapMessage;
            var5['onDoubleTapMessage'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleTapSeparator;
            var5['onTapSeparator'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleTapInviteEmbed;
            var5['onTapInviteEmbed'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleTapInviteEmbedAccept;
            var5['onTapInviteEmbedAccept'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleTapJoinActivity;
            var5['onTapJoinActivity'] = var15;
            var15 = var9.props;
            var15 = var15.handlers;
            var15 = var15.handleTapJoinRichPresence;
            var5['onTapJoinRichPresence'] = var15;
            var5['onPressKey'] = var14;
            var5['animateEmoji'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapGiftCodeEmbed;
            var5['onTapGiftCodeEmbed'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapCancelUploadItem;
            var5['onTapCancelUploadItem'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapReply;
            var5['onTapMessageReply'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapSummary;
            var5['onTapSummary'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapSummaryJump;
            var5['onTapSummaryJump'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapGiftCodeAccept;
            var5['onTapGiftCodeAccept'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapReferralRedeem;
            var5['onTapReferralRedeem'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapThreadEmbed;
            var5['onTapThreadEmbed'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapEmoji;
            var5['onTapEmoji'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapTimestamp;
            var5['onTapTimestamp'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapInlineCode;
            var5['onTapInlineCode'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapRoleIcon;
            var5['onTapRoleIcon'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapVoiceChannelBadge;
            var5['onTapVoiceChannelBadge'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapGameIcon;
            var5['onTapGameIcon'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapSuppressNotificationsIcon;
            var5['onTapSuppressNotificationsIcon'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapConnectionsRoleTag;
            var5['onTapConnectionsRoleTag'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapTimeoutIcon;
            var5['onTapTimeoutIcon'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapButtonActionComponent;
            var5['onTapButtonActionComponent'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapSelectActionComponent;
            var5['onTapSelectActionComponent'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapWelcomeReply;
            var5['onTapWelcomeReply'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapInviteToSpeak;
            var5['onTapInviteToSpeak'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapAutoModerationActions;
            var5['onTapAutoModerationActions'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapAutoModerationFeedback;
            var5['onTapAutoModerationFeedback'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapFollowForumPost;
            var5['onTapFollowForumPost'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapShareForumPost;
            var5['onTapShareForumPost'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapReactionOverflow;
            var5['onTapReactionOverflow'] = var13;
            var13 = var9.props;
            var13 = var13.handleTapNavBar;
            var5['onTapNavBar'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleCopyText;
            var5['onTapCopyText'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapOpTag;
            var5['onTapOpTag'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapTag;
            var5['onTapTag'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleMediaAttachmentPlaybackEnded;
            var5['onMediaAttachmentPlaybackEnded'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleMediaAttachmentPlaybackStarted;
            var5['onMediaAttachmentPlaybackStarted'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleVoiceMessagePlaybackFailed;
            var5['onVoiceMessagePlaybackFailed'] = var13;
            var13 = var9.props;
            var13 = var13.handleTapShowAltText;
            var5['onTapShowAltText'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapPostPreviewEmbed;
            var5['onTapPostPreviewEmbed'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapDismissMediaPostSharePrompt;
            var5['onTapDismissMediaPostSharePrompt'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapObscuredMediaLearnMore;
            var5['onTapObscuredMediaLearnMore'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.onTapObscuredMediaToggle;
            var5['onTapObscuredMediaToggle'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapSafetyPolicyNoticeEmbed;
            var5['onTapSafetyPolicyNoticeEmbed'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapSafetySystemNotificationCta;
            var5['onTapSafetySystemNotificationCta'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapPollAnswer;
            var5['onTapPollAnswer'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapPollSubmitVote;
            var5['onTapPollSubmitVote'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapPollAction;
            var5['onTapPollAction'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleLongPressPollImage;
            var5['onLongPressPollImage'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapCtaButton;
            var5['onTapCtaButton'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleMessageAccessibilityAction;
            var5['onMessageAccessibilityAction'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapForwardFooter;
            var5['onTapForwardFooter'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapInlineForward;
            var5['onTapInlineForward'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapClanTagChiplet;
            var5['onTapClanTagChiplet'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapContentInventoryEntryEmbed;
            var5['onTapContentInventoryEntryEmbed'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapCheckpointCard;
            var5['onTapCheckpointCard'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapSoundmoji;
            var5['onTapSoundmoji'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapAppMessageEmbed;
            var5['onTapAppMessageEmbed'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
            var13 = var13.handleTapPreviewSharedClientTheme;
            var5['onTapPreviewSharedClientTheme'] = var13;
            var13 = var9.props;
            var13 = var13.handlers;
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
            var6 = 23;
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
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var8);
    var _closure1_slot24 = var4;
    var4 = function recordTimings(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg2;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 24;
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
            if(var4) { _fun0009_ip = 330; continue _fun0009 }
case 331:
            var3 = var2.ready;
            if(!var3) { _fun0009_ip = 332; continue _fun0009 }
case 43:
            var8 = var2.cached;
            var3 = !var8;
case 332:
            var4 = var3;
case 330:
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
        var1 = 25;
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
        var1 = 19;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.handleMediaPlayFinishedAnalytics;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var _closure1_slot27 = var4;
    var4 = function isLoadingAtTop(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg2;
            if(var1) { _fun0010_ip = 333; continue _fun0010 }
case 334:
            var1 = false;
            return var1;
case 333:
            var2 = _closure1_slot29;
            var5 = undefined;
            var1 = arg1;
            var4 = var2.bind(var5)(var1);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = var2;
            if(var1) { _fun0010_ip = 335; continue _fun0010 }
case 336:
            var1 = var3.value;
            var7 = var1.changeType;
            var2 = _closure1_slot15;
            var2 = var2.INSERT;
            if(!(var7 !== var2)) { _fun0010_ip = 337; continue _fun0010 }
case 30:
            var7 = var4.bind(var5)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0010_ip = 335; continue _fun0010 }
case 338:
            _fun0010_ip = 336; continue _fun0010;
case 337:
            var2 = var1.index;
            var1 = 1;
            var1 = var2 <= var1;
            return var1;
case 335:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot28 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var24 = arg1;
            var _closure2_slot0 = var24;
            var14 = _closure1_slot10;
            var2 = var14.useState;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 26;
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
            var1 = var2.bind(var14)(var1);
            var13 = _closure1_slot4;
            var4 = undefined;
            var6 = 1;
            var1 = var13.bind(var4)(var1, var6);
            var7 = 0;
            var18 = var1[var7];
            var _closure2_slot1 = var18;
            var2 = var14.useState;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 27;
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
            var1 = var2.bind(var14)(var1);
            var1 = var13.bind(var4)(var1, var6);
            var36 = var1[var7];
            var2 = var14.useState;
            var1 = var24.channelId;
            var1 = var2.bind(var14)(var1);
            var12 = 2;
            var1 = var13.bind(var4)(var1, var12);
            var10 = var1[var7];
            var2 = var1[var6];
            var1 = var14.useState;
            var3 = false;
            var1 = var1.bind(var14)(var3);
            var1 = var13.bind(var4)(var1, var12);
            var9 = var1[var7];
            var _closure2_slot2 = var9;
            var8 = var1[var6];
            var1 = var14.useState;
            var1 = var1.bind(var14)(var3);
            var1 = var13.bind(var4)(var1, var12);
            var7 = var1[var7];
            var6 = var1[var6];
            var1 = var24.channelId;
            if(!(var1 !== var10)) { _fun0011_ip = 20; continue _fun0011 }
case 339:
            var1 = var24.channelId;
            var1 = var2.bind(var4)(var1);
            var1 = var8.bind(var4)(var3);
case 20:
            var25 = _closure1_slot10;
            var1 = var25.useRef;
            var32 = var1.bind(var25)(var3);
            var _closure2_slot3 = var32;
            var1 = var25.useRef;
            var31 = var1.bind(var25)(var3);
            var _closure2_slot4 = var31;
            var2 = var25.useRef;
            var1 = new Array(0);
            var14 = var2.bind(var25)(var1);
            var _closure2_slot5 = var14;
            var1 = var25.useRef;
            var2 = null;
            var35 = var1.bind(var25)(var2);
            var _closure2_slot6 = var35;
            var1 = var25.useRef;
            var33 = var1.bind(var25)(var3);
            var _closure2_slot7 = var33;
            var1 = var25.useRef;
            var20 = var1.bind(var25)(var2);
            var _closure2_slot8 = var20;
            var3 = var25.useCallback;
            var2 = function(arg1) {
                var1 = arg1;
                var13 = var1.rows;
                var3 = var1.hasMoreMessagesAfter;
                var11 = var1.scrollData;
                var10 = var1.HACK_iOSForceAnimations;
                var9 = var1.forceReload;
                var8 = var1.isAnimated;
                var7 = _closure1_slot28;
                var6 = var1.rows;
                var1 = _closure2_slot4;
                var5 = var1.current;
                var1 = undefined;
                var12 = var7.bind(var1)(var6, var5);
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 28;
                var4 = var6[var4];
                var7 = var5.bind(var1)(var4);
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
                var2 = _closure2_slot4;
                var2['current'] = var3;
                return var1;
            };
            var1 = new Array(0);
            var12 = var3.bind(var25)(var2, var1);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 29;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useChatUpdatesQueue;
            var28 = var1.bind(var2)(var20, var12);
            var10 = var25.useCallback;
            var1 = var24.canChat;
            var2 = new Array(2);
            var2[0] = var1;
            var1 = var24.channel;
            var2[1] = var1;
            var1 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var1 = var1.canChat;
                    if(!var1) { _fun0012_ip = 340; continue _fun0012 }
case 341:
                    var6 = _closure1_slot13;
                    var5 = var6.can;
                    var3 = _closure1_slot20;
                    var4 = var3.ADD_REACTIONS;
                    var3 = _closure2_slot0;
                    var3 = var3.channel;
                    var1 = var5.bind(var6)(var4, var3);
case 340:
                    if(var1) { _fun0012_ip = 38; continue _fun0012 }
case 342:
                    var2 = _closure2_slot0;
                    var3 = var2.channel;
                    var2 = var3.isPrivate;
                    var1 = var2.bind(var3)();
case 38:
                    return var1;
                }
            };
            var34 = var10.bind(var25)(var1, var2);
            var10 = var25.useCallback;
            var1 = var24.messages;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 18;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.find;
                var2 = _closure2_slot0;
                var5 = var2.messages;
                var2 = var5.toArray;
                var2 = var2.bind(var5)();
                var1 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.id;
                        var3 = var1.nonce;
                        var1 = _closure3_slot0;
                        var1 = var4 === var1;
                        if(var1) { _fun0013_ip = 45; continue _fun0013 }
case 34:
                        var2 = _closure3_slot0;
                        var1 = var3 === var2;
case 45:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var15 = var10.bind(var25)(var1, var2);
            var _closure2_slot9 = var15;
            var10 = var25.useCallback;
            var1 = var24.channel;
            var2 = new Array(3);
            var2[0] = var1;
            var1 = var24.channelId;
            var2[1] = var1;
            var1 = var24.messages;
            var1 = var1.jumpTargetId;
            var2[2] = var1;
            var1 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var3 = var1.channel;
                    var1 = var3.isForumPost;
                    var1 = var1.bind(var3)();
                    if(!var1) { _fun0014_ip = 9; continue _fun0014 }
case 343:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 20;
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
                    if(!var1) { _fun0014_ip = 344; continue _fun0014 }
case 345:
                    var2 = arg1;
                    var1 = !var2;
case 344:
                    return var1;
                }
            };
            var23 = var10.bind(var25)(var1, var2);
            var2 = _closure1_slot1;
            var1 = 30;
            var1 = var3[var1];
            var10 = var2.bind(var4)(var1);
            var1 = {};
            var13 = var24.channelId;
            var1['channelId'] = var13;
            var13 = var24.messages;
            var13 = var13.jumpTargetId;
            var1['jumpTargetId'] = var13;
            var13 = var24.oldestUnreadMessageId;
            var1['oldestUnreadMessageId'] = var13;
            var1['shouldJumpToOriginalPost'] = var23;
            var1 = var10.bind(var4)(var1);
            var29 = var1.channelLatestMessageLoadingStatsManager;
            var19 = var1.startOrCancelLatestMessagesLoad;
            var13 = function handleVisibleMessagesChange(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = arg1;
                    var10 = var1.firstVisibleMessageRowIndex;
                    var7 = var1.firstVisibleMessagePercentVisible;
                    var8 = var1.lastVisibleMessageRowIndex;
                    var2 = var1.lastVisibleMessagePercentVisible;
                    var9 = var1.source;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 19;
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
                    if(!(!(var5 <= var4))) { _fun0015_ip = 231; continue _fun0015 }
case 346:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 31;
                    var3 = var5[var3];
                    var8 = var4.bind(var1)(var3);
                    var6 = var8.questsVisibleMobileMessagesChanged;
                    var3 = {};
                    var3['visibleMessages'] = var7;
                    var3['source'] = var9;
                    var3 = var6.bind(var8)(var3);
                    var3 = 32;
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
case 231:
                    return var1;
                }
            };
            var _closure2_slot10 = var13;
            var27 = function findMessageIndex(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var4 = arg1;
                    var1 = null;
                    if(!(var1 == var4)) { _fun0016_ip = 218; continue _fun0016 }
case 347:
                    var1 = undefined;
                    return var1;
case 218:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 33;
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
            var _closure2_slot11 = var27;
            var1 = 34;
            var1 = var3[var1];
            var10 = var2.bind(var4)(var1);
            var1 = {};
            var1['chatRef'] = var20;
            var1['chatManager'] = var18;
            var1['chatUpdatesQueue'] = var28;
            var1['pendingUpdatesQueueRef'] = var14;
            var1['animatedRef'] = var32;
            var14 = function fetchMoreBefore() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var6 = var1.channelId;
                    var7 = var1.messages;
                    var1 = var7.hasMoreBefore;
                    if(!var1) { _fun0017_ip = 45; continue _fun0017 }
case 348:
                    var2 = var7.loadingMore;
                    var1 = !var2;
case 45:
                    if(!var1) { _fun0017_ip = 349; continue _fun0017 }
case 350:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 35;
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
                    if(var7) { _fun0017_ip = 351; continue _fun0017 }
case 344:
                    var5 = var6.id;
case 351:
                    var1['before'] = var5;
                    var4 = _closure1_slot17;
                    var1['limit'] = var4;
                    var1 = var2.bind(var3)(var1);
case 349:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['fetchMoreBefore'] = var14;
            var14 = function fetchMoreAfter() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var6 = var1.channelId;
                    var7 = var1.messages;
                    var1 = var7.hasMoreAfter;
                    if(!var1) { _fun0018_ip = 45; continue _fun0018 }
case 348:
                    var2 = var7.loadingMore;
                    var1 = !var2;
case 45:
                    if(!var1) { _fun0018_ip = 349; continue _fun0018 }
case 350:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 35;
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
                    if(var7) { _fun0018_ip = 351; continue _fun0018 }
case 344:
                    var5 = var6.id;
case 351:
                    var1['after'] = var5;
                    var4 = _closure1_slot17;
                    var1['limit'] = var4;
                    var1 = var2.bind(var3)(var1);
case 349:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['fetchMoreAfter'] = var14;
            var1['handleVisibleMessagesChange'] = var13;
            var1['applyNativeRowsUpdate'] = var12;
            var12 = var24.messages;
            var1['messages'] = var12;
            var12 = var24.channel;
            var1['channel'] = var12;
            var12 = var24.channelId;
            var1['channelId'] = var12;
            var12 = var24.screenIndex;
            var1['screenIndex'] = var12;
            var12 = var24.onScroll;
            var1['onScroll'] = var12;
            var12 = var24.useReducedMotion;
            var1['useReducedMotion'] = var12;
            var12 = var24.isStaff;
            var1['isStaff'] = var12;
            var12 = var24.visibleMessagesWindowHandler;
            var1['visibleMessagesWindowHandler'] = var12;
            var10 = var10.bind(var4)(var1);
            var22 = var10.hasHandledScrollRef;
            var _closure2_slot12 = var22;
            var21 = var10.isAtBottomRef;
            var _closure2_slot13 = var21;
            var1 = var10.isNearBottomRef;
            var _closure2_slot14 = var1;
            var1 = var10.isNearTopRef;
            var _closure2_slot15 = var1;
            var1 = var10.deceleratingRef;
            var _closure2_slot16 = var1;
            var1 = var10.draggingRef;
            var _closure2_slot17 = var1;
            var17 = var10.firstIgnoredScrollEventTimestampRef;
            var13 = var10.loadMoreBefore;
            var _closure2_slot18 = var13;
            var1 = var10.loadMoreAfter;
            var _closure2_slot19 = var1;
            var16 = var10.scrollToTop;
            var _closure2_slot20 = var16;
            var26 = var10.scrollToTopMessage;
            var30 = var10.updateNativeRows;
            var12 = var10.handleScrollCallbacks;
            var _closure2_slot21 = var12;
            var14 = var10.handleScrollPosition;
            var12 = var25.useMemo;
            var10 = new Array(8);
            var10[0] = var15;
            var15 = var24.chatInputRef;
            var10[1] = var15;
            var15 = var24.channelId;
            var10[2] = var15;
            var15 = var24.messages;
            var15 = var15.revealedMessageId;
            var10[3] = var15;
            var15 = var24.uploads;
            var10[4] = var15;
            var15 = var24.paymentsBlocked;
            var10[5] = var15;
            var10[6] = var13;
            var10[7] = var1;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 36;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.MessagesHandlers;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var4 = function() {
                    var1 = {};
                    var3 = _closure2_slot9;
                    var1['getMessage'] = var3;
                    var3 = _closure2_slot0;
                    var4 = var3.chatInputRef;
                    var1['chatInputRef'] = var4;
                    var4 = var3.channelId;
                    var1['selectedChannelId'] = var4;
                    var4 = var3.messages;
                    var4 = var4.revealedMessageId;
                    var1['revealedMessageId'] = var4;
                    var4 = var3.uploads;
                    var1['uploads'] = var4;
                    var3 = var3.paymentsBlocked;
                    var1['paymentsBlocked'] = var3;
                    var3 = _closure2_slot18;
                    var1['loadMoreBefore'] = var3;
                    var2 = _closure2_slot19;
                    var1['loadMoreAfter'] = var2;
                    return var1;
                };
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var10 = var12.bind(var25)(var1, var10);
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0019_ip = 352; continue _fun0019 }
case 353:
                            var2 = undefined;
                            var _closure5_slot0 = var2;
                            var5 = _closure2_slot0;
                            var9 = var5.channel;
                            var11 = var5.useReducedMotion;
                            _closure5_slot0 = var11;
                            var5 = var9.isForumPost;
                            var5 = var5.bind(var9)();
                            if(!var5) { _fun0019_ip = 354; continue _fun0019 }
case 28:
                            var5 = _closure2_slot15;
                            var5 = var5.current;
                            if(var5) { _fun0019_ip = 354; continue _fun0019 }
case 43:
                            var6 = _closure2_slot9;
                            var8 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var12 = 20;
                            var5 = var5[var12];
                            var10 = var8.bind(var2)(var5);
                            var8 = var10.castChannelIdAsMessageId;
                            var5 = var9.id;
                            var5 = var8.bind(var10)(var5);
                            var5 = var6.bind(var2)(var5);
                            var6 = null;
                            if(!(var6 != var5)) { _fun0019_ip = 355; continue _fun0019 }
case 356:
                            var8 = _closure2_slot11;
                            var10 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var5 = var5[var12];
                            var12 = var10.bind(var2)(var5);
                            var10 = var12.castChannelIdAsMessageId;
                            var5 = var9.id;
                            var5 = var10.bind(var12)(var5);
                            var5 = var8.bind(var2)(var5);
                            if(!(var6 != var5)) { _fun0019_ip = 357; continue _fun0019 }
case 228:
                            var8 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var6 = 28;
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
                                var3 = _closure2_slot20;
                                var1 = _closure5_slot0;
                                var2 = !var1;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var3 = var6.bind(var2)(var3, var5);
                            _fun0019_ip = 354; continue _fun0019;
case 357:
                            return var2;
case 355:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 35;
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
case 358:
                            return var3;
case 243:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0019_ip = 359; continue _fun0019 }
case 360:
                            var5 = global;
                            var6 = var5.setTimeout;
                            var5 = function() {
                                var3 = _closure2_slot20;
                                var1 = _closure5_slot0;
                                var2 = !var1;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var4 = 50;
                            var4 = var6.bind(var2)(var5, var4);
                            _fun0019_ip = 354; continue _fun0019;
case 359:
                            return var3;
case 354:
                            return var2;
case 352:
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
            var15 = var1.bind(var4)();
            var13 = function scrollToBottom() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var5 = arguments[0];
                    var1 = undefined;
                    if(!(var5 === var1)) { _fun0020_ip = 361; continue _fun0020 }
case 347:
                    var5 = true;
case 361:
                    var3 = _closure2_slot21;
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
                    var2 = 28;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.scrollToBottom;
                    var2 = _closure2_slot8;
                    var2 = var2.current;
                    if(!var5) { _fun0020_ip = 362; continue _fun0020 }
case 344:
                    var6 = _closure2_slot0;
                    var6 = var6.useReducedMotion;
                    var5 = !var6;
case 362:
                    var2 = var3.bind(var4)(var2, var5);
                    return var1;
                }
            };
            var _closure2_slot22 = var13;
            var1 = 37;
            var1 = var3[var1];
            var12 = var2.bind(var4)(var1);
            var1 = {};
            var1['chatManager'] = var18;
            var1['rowGenerator'] = var36;
            var1['animatingStickerMessageIdRef'] = var35;
            var1['canAddNewReactions'] = var34;
            var34 = var24.channel;
            var1['channel'] = var34;
            var34 = var24.messages;
            var1['messages'] = var34;
            var34 = var24.isMessagesReady;
            var1['isMessagesReady'] = var34;
            var34 = var24.uploads;
            var1['uploads'] = var34;
            var34 = var24.roleStyle;
            var1['roleStyle'] = var34;
            var34 = var24.oldestUnreadMessageId;
            var1['oldestUnreadMessageId'] = var34;
            var34 = var24.replyingMessageId;
            var1['replyingMessageId'] = var34;
            var34 = var24.inlineAttachmentMedia;
            var1['inlineAttachmentMedia'] = var34;
            var34 = var24.inlineEmbedMedia;
            var1['inlineEmbedMedia'] = var34;
            var34 = var24.renderEmbeds;
            var1['renderEmbeds'] = var34;
            var34 = var24.renderReactions;
            var1['renderReactions'] = var34;
            var34 = var24.animateEmoji;
            var1['animateEmoji'] = var34;
            var34 = var24.gifAutoPlay;
            var1['gifAutoPlay'] = var34;
            var34 = var24.timestampHourCycle;
            var1['timestampHourCycle'] = var34;
            var34 = var24.currentUserId;
            var1['currentUserId'] = var34;
            var34 = var24.renderCommunicationDisabled;
            var1['renderCommunicationDisabled'] = var34;
            var34 = var24.selectedSummary;
            var1['selectedSummary'] = var34;
            var34 = var24.enableSwipeActions;
            var1['enableSwipeActions'] = var34;
            var34 = var24.isResourceChannel;
            var1['isResourceChannel'] = var34;
            var34 = var24.shouldObscureSpoiler;
            var1['shouldObscureSpoiler'] = var34;
            var34 = var24.shouldDisableInteractiveComponents;
            var1['shouldDisableInteractiveComponents'] = var34;
            var34 = var24.unloadableContentEntryMessageIds;
            var1['unloadableContentEntryMessageIds'] = var34;
            var34 = var24.containerWidth;
            var1['containerWidth'] = var34;
            var1['chatRef'] = var20;
            var1['loadedRef'] = var33;
            var1['animatedRef'] = var32;
            var1['hasMoreMessagesAfterForLastUpdateRef'] = var31;
            var1['updateNativeRows'] = var30;
            var30 = _closure1_slot28;
            var1['isLoadingAtTop'] = var30;
            var1['channelLatestMessageLoadingStatsManager'] = var29;
            var29 = var24.channelId;
            var1['channelId'] = var29;
            var29 = var24.isMessagesCached;
            var1['isMessagesCached'] = var29;
            var1['chatUpdatesQueue'] = var28;
            var1['shouldJumpToOriginalPost'] = var23;
            var1['findMessageIndex'] = var27;
            var1['scrollToTopMessage'] = var26;
            var26 = var24.useReducedMotion;
            var1['useReducedMotion'] = var26;
            var1 = var12.bind(var4)(var1);
            var12 = var1.updateRows;
            var _closure2_slot23 = var12;
            var1 = var1.scrollToMessageId;
            var _closure2_slot24 = var1;
            var1 = function clearRowsState() {
                var1 = _closure2_slot3;
                var3 = false;
                var1['current'] = var3;
                var1 = _closure2_slot12;
                var1['current'] = var3;
                var1 = _closure2_slot14;
                var1['current'] = var3;
                var1 = _closure2_slot13;
                var1['current'] = var3;
                var1 = _closure2_slot15;
                var1['current'] = var3;
                var1 = _closure2_slot16;
                var1['current'] = var3;
                var1 = _closure2_slot17;
                var1['current'] = var3;
                var1 = _closure2_slot4;
                var1['current'] = var3;
                var4 = _closure2_slot5;
                var1 = new Array(0);
                var4['current'] = var1;
                var1 = _closure2_slot7;
                var1['current'] = var3;
                var3 = _closure2_slot6;
                var1 = null;
                var3['current'] = var1;
                var3 = _closure2_slot1;
                var1 = var3.clear;
                var1 = var1.bind(var3)();
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 28;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.clearRows;
                var2 = _closure2_slot8;
                var2 = var2.current;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var _closure2_slot25 = var1;
            var1 = 39;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var5 = var3.firstScreenChatRef;
                    var _closure3_slot2 = var5;
                    var3 = _closure2_slot8;
                    var3 = var3.current;
                    var4 = null;
                    var3 = var4 != var3;
                    if(!var3) { _fun0021_ip = 363; continue _fun0021 }
case 364:
                    var3 = var4 != var5;
case 363:
                    if(!var3) { _fun0021_ip = 365; continue _fun0021 }
case 366:
                    var3 = _closure2_slot8;
                    var3 = var3.current;
                    var5['current'] = var3;
case 365:
                    var3 = _closure2_slot0;
                    var7 = var3.messages;
                    var _closure3_slot0 = var7;
                    var5 = var3.isMessagesReady;
                    var3 = var3.oldestUnreadMessageId;
                    var _closure3_slot1 = var3;
                    var10 = _closure2_slot23;
                    if(var5) { _fun0021_ip = 367; continue _fun0021 }
case 11:
                    var6 = {};
                    var5 = _closure2_slot2;
                    var6['hasJumpedToOriginalPost'] = var5;
                    var5 = undefined;
                    var5 = var10.bind(var5)(var6);
                    _fun0021_ip = 27; continue _fun0021;
case 367:
                    var9 = {};
                    var5 = var7.jumpTargetId;
                    var9['scrollToMessageId'] = var5;
                    var5 = var7.jumpTargetId;
                    var9['jumpTargetId'] = var5;
                    var12 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var8 = 38;
                    var11 = var5[var8];
                    var5 = undefined;
                    var11 = var12.bind(var5)(var11);
                    var11 = var11.JumpTypes;
                    var11 = var11.INSTANT;
                    var9['jumpType'] = var11;
                    var11 = var7.focusTargetId;
                    var9['focusTargetId'] = var11;
                    var11 = _closure2_slot2;
                    var9['hasJumpedToOriginalPost'] = var11;
                    var9 = var10.bind(var5)(var9);
                    var9 = var7.jumpTargetId;
                    if(!(var4 == var9)) { _fun0021_ip = 368; continue _fun0021 }
case 369:
                    if(!(var4 != var3)) { _fun0021_ip = 27; continue _fun0021 }
case 370:
                    var3 = global;
                    var9 = var3.setTimeout;
                    var4 = function() {
                        var3 = _closure2_slot24;
                        var2 = {};
                        var5 = _closure3_slot1;
                        var2['scrollToMessageId'] = var5;
                        var1 = _closure3_slot0;
                        var1 = var1.jumpTargetId;
                        var2['jumpTargetId'] = var1;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 38;
                        var5 = var5[var1];
                        var1 = undefined;
                        var5 = var6.bind(var1)(var5);
                        var5 = var5.JumpTypes;
                        var5 = var5.INSTANT;
                        var2['jumpType'] = var5;
                        var4 = _closure2_slot2;
                        var2['hasJumpedToOriginalPost'] = var4;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3 = 50;
                    var3 = var9.bind(var5)(var4, var3);
                    _fun0021_ip = 27; continue _fun0021;
case 368:
                    var4 = _closure2_slot24;
                    var3 = {};
                    var9 = var7.jumpTargetId;
                    var3['scrollToMessageId'] = var9;
                    var7 = var7.jumpTargetId;
                    var3['jumpTargetId'] = var7;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var6 = var7.bind(var5)(var6);
                    var6 = var6.JumpTypes;
                    var6 = var6.INSTANT;
                    var3['jumpType'] = var6;
                    var6 = _closure2_slot2;
                    var3['hasJumpedToOriginalPost'] = var6;
                    var3 = var4.bind(var5)(var3);
case 27:
                    var5 = _closure1_slot25;
                    var2 = _closure2_slot0;
                    var6 = var2.channelId;
                    var3 = var2.messages;
                    var4 = undefined;
                    var3 = var5.bind(var4)(var6, var3);
                    var3 = var2.channelId;
                    var2 = var2.messages;
                    var2 = var5.bind(var4)(var3, var2);
                    var1 = function() {
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                            var3 = _closure3_slot2;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0022_ip = 31; continue _fun0022 }
case 218:
                            var1 = _closure3_slot2;
                            var1['current'] = var2;
case 31:
                            var2 = _closure2_slot25;
                            var1 = undefined;
                            var2 = var2.bind(var1)();
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var1 = var2.bind(var4)(var1);
            var3 = var25.useEffect;
            var1 = var24.channelId;
            var2 = new Array(2);
            var2[0] = var1;
            var1 = var24.screenIndex;
            var2[1] = var1;
            var1 = function() {
                var1 = function() {
                    var5 = _closure1_slot11;
                    var1 = _closure2_slot0;
                    var4 = var1.channelId;
                    var3 = var1.screenIndex;
                    var1 = undefined;
                    var2 = false;
                    var2 = var5.bind(var1)(var4, var3, var2);
                    return var1;
                };
                return var1;
            };
            var1 = var3.bind(var25)(var1, var2);
            var3 = _closure1_slot21;
            var2 = _closure1_slot24;
            var1 = {};
            var25 = arg2;
            var1['ref'] = var25;
            var39 = var1;
            var38 = var24;
            var24 = copyDataProperties(var39, var38);
            var25 = _closure1_slot25;
            var24 = 'recordTimings';
            var1[23] = var25;
            var25 = _closure1_slot26;
            var24 = 'handleTapShowAltText';
            var1[23] = var25;
            var24 = _closure1_slot27;
            var11 = 'handleMediaPlayFinishedAnalytics';
            var1[10] = var24;
            var11 = 'shouldJumpToOriginalPost';
            var1[10] = var23;
            var23 = function handleTapTableView() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 40;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.isIOS;
                    var2 = var2.bind(var4)();
                    if(!var2) { _fun0023_ip = 371; continue _fun0023 }
case 372:
                    var4 = _closure2_slot0;
                    var4 = var4.keyboardType;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 41;
                    var3 = var6[var3];
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.KeyboardTypes;
                    var3 = var3.SYSTEM;
                    var2 = var4 !== var3;
case 371:
                    if(!var2) { _fun0023_ip = 373; continue _fun0023 }
case 374:
                    var2 = _closure2_slot0;
                    var2 = var2.chatInputRef;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0023_ip = 373; continue _fun0023 }
case 42:
                    var2 = var3.closeCustomKeyboard;
                    var2 = var2.bind(var3)();
case 373:
                    return var1;
                }
            };
            var11 = 'handleTapTableView';
            var1[10] = var23;
            var23 = function handleFirstLayout(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var6 = var1.firstVisibleMessageIndex;
                var5 = var1.lastVisibleMessageIndex;
                var4 = var1.firstVisibleMessagePercentVisible;
                var1 = var1.lastVisibleMessagePercentVisible;
                var3 = _closure2_slot10;
                var2 = {};
                var2['firstVisibleMessageRowIndex'] = var6;
                var2['lastVisibleMessageRowIndex'] = var5;
                var2['firstVisibleMessagePercentVisible'] = var4;
                var2['lastVisibleMessagePercentVisible'] = var1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 42;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var4 = var4.QuestsVisibleMessagesChangedSource;
                var4 = var4.FIRST_LAYOUT;
                var2['source'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var11 = 'handleFirstLayout';
            var1[10] = var23;
            var23 = function handleMessageVisibilityChanged(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var6 = var1.firstVisibleMessageIndex;
                var5 = var1.lastVisibleMessageIndex;
                var4 = var1.firstVisibleMessagePercentVisible;
                var1 = var1.lastVisibleMessagePercentVisible;
                var3 = _closure2_slot10;
                var2 = {};
                var2['firstVisibleMessageRowIndex'] = var6;
                var2['lastVisibleMessageRowIndex'] = var5;
                var2['firstVisibleMessagePercentVisible'] = var4;
                var2['lastVisibleMessagePercentVisible'] = var1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 42;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var4 = var4.QuestsVisibleMessagesChangedSource;
                var4 = var4.VISIBILITY_CHANGED;
                var2['source'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var11 = 'handleMessageVisibilityChanged';
            var1[10] = var23;
            var11 = 'hasHandledScrollRef';
            var1[10] = var22;
            var11 = 'isAtBottomRef';
            var1[10] = var21;
            var11 = 'chatRef';
            var1[10] = var20;
            var11 = 'startOrCancelChannelLatestMessagesLoad';
            var1[10] = var19;
            var11 = 'chatManager';
            var1[10] = var18;
            var11 = '_firstIgnoredScrollEventTimestampRef';
            var1[10] = var17;
            var11 = 'scrollToTop';
            var1[10] = var16;
            var11 = 'handleTapNavBar';
            var1[10] = var15;
            var15 = function scrollToNewMessages() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var4 = _closure1_slot14;
                    var3 = var4.ackMessageId;
                    var7 = _closure2_slot0;
                    var2 = var7.channel;
                    var2 = var2.id;
                    var5 = var3.bind(var4)(var2);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 35;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.jumpToMessage;
                    var2 = {};
                    var7 = var7.channel;
                    var7 = var7.id;
                    var2['channelId'] = var7;
                    var7 = null;
                    if(!(var7 == var5)) { _fun0024_ip = 375; continue _fun0024 }
case 376:
                    var6 = _closure2_slot0;
                    var6 = var6.channel;
                    var5 = var6.id;
case 375:
                    var2['messageId'] = var5;
                    var5 = 1;
                    var2['offset'] = var5;
                    var5 = 'Mark As Read';
                    var2['context'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var11 = 'scrollToNewMessages';
            var1[10] = var15;
            var15 = function getChatRef() {
                var1 = _closure2_slot8;
                return var1;
            };
            var11 = 'getChatRef';
            var1[10] = var15;
            var11 = 'handleScrollPosition';
            var1[10] = var14;
            var11 = 'scrollToBottom';
            var1[10] = var13;
            var13 = function jumpToPresent() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.messages;
                    var5 = var3.channel;
                    var7 = var2.jumpReturnTargetId;
                    var3 = null;
                    if(!(var3 != var7)) { _fun0025_ip = 374; continue _fun0025 }
case 3:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 35;
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
                    _fun0025_ip = 48; continue _fun0025;
case 374:
                    var3 = var2.loadingMore;
                    if(var3) { _fun0025_ip = 48; continue _fun0025 }
case 375:
                    var2 = var2.hasMoreAfter;
                    if(var2) { _fun0025_ip = 41; continue _fun0025 }
case 362:
                    var2 = _closure2_slot22;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    _fun0025_ip = 48; continue _fun0025;
case 41:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 35;
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
case 48:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = 'jumpToPresent';
            var1[10] = var13;
            var13 = function clearRows() {
                var3 = _closure2_slot25;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var5 = _closure1_slot11;
                var2 = _closure2_slot0;
                var4 = var2.channelId;
                var3 = var2.screenIndex;
                var2 = false;
                var2 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var11 = 'clearRows';
            var1[10] = var13;
            var11 = 'updateRows';
            var1[10] = var12;
            var11 = function handleLongPressSticker(arg1) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 43;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getNativeSyntheticEventData;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
                    var6 = var2.messageId;
                    var2 = _closure2_slot6;
                    var7 = var2.current;
                    var2 = global;
                    var5 = var2.Set;
                    var2 = new Array(1);
                    var2[0] = var6;
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {constructor: {value: var5}});
                    var9 = var3;
                    var8 = var2;
                    var2 = new var9[var5](var8, var7);
                    var5 = var2 instanceof Object ? var2 : var3;
                    var3 = null;
                    if(!(var3 != var7)) { _fun0026_ip = 377; continue _fun0026 }
case 378:
                    var2 = var5.add;
                    var2 = var2.bind(var5)(var7);
case 377:
                    var2 = _closure2_slot6;
                    var3 = null;
                    if(!(var7 !== var6)) { _fun0026_ip = 373; continue _fun0026 }
case 379:
                    var3 = var6;
case 373:
                    var2['current'] = var3;
                    var3 = _closure2_slot23;
                    var2 = {};
                    var6 = true;
                    var2['forceRender'] = var6;
                    var2['updateMessageIds'] = var5;
                    var4 = _closure2_slot2;
                    var2['hasJumpedToOriginalPost'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var5 = 'handleLongPressSticker';
            var1[4] = var11;
            var5 = 'handlers';
            var1[4] = var10;
            var5 = 'hasJumpedToOriginalPost';
            var1[4] = var9;
            var5 = 'setHasJumpedToOriginalPost';
            var1[4] = var8;
            var5 = 'shouldForceRender';
            var1[4] = var7;
            var5 = 'setShouldForceRender';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
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