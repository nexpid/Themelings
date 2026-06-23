// app/modules/messages/native/hooks/useRowManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
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
            var9 = _closure1_slot4;
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
            var7 = _closure1_slot4;
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
    var _closure1_slot3 = var1;
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
    var _closure1_slot4 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 6;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/hooks/useRowManager.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useRowManager(arg1) {
        var2 = arg1;
        var3 = var2.chatManager;
        var _closure2_slot0 = var3;
        var3 = var2.rowGenerator;
        var _closure2_slot1 = var3;
        var3 = var2.animatingStickerMessageIdRef;
        var _closure2_slot2 = var3;
        var3 = var2.canAddNewReactions;
        var _closure2_slot3 = var3;
        var3 = var2.channel;
        var _closure2_slot4 = var3;
        var3 = var2.messages;
        var _closure2_slot5 = var3;
        var3 = var2.isMessagesReady;
        var _closure2_slot6 = var3;
        var3 = var2.uploads;
        var _closure2_slot7 = var3;
        var3 = var2.roleStyle;
        var _closure2_slot8 = var3;
        var3 = var2.oldestUnreadMessageId;
        var _closure2_slot9 = var3;
        var3 = var2.replyingMessageId;
        var _closure2_slot10 = var3;
        var3 = var2.inlineAttachmentMedia;
        var _closure2_slot11 = var3;
        var3 = var2.inlineEmbedMedia;
        var _closure2_slot12 = var3;
        var3 = var2.renderEmbeds;
        var _closure2_slot13 = var3;
        var3 = var2.renderReactions;
        var _closure2_slot14 = var3;
        var3 = var2.animateEmoji;
        var _closure2_slot15 = var3;
        var3 = var2.gifAutoPlay;
        var _closure2_slot16 = var3;
        var3 = var2.timestampHourCycle;
        var _closure2_slot17 = var3;
        var3 = var2.currentUserId;
        var _closure2_slot18 = var3;
        var3 = var2.renderCommunicationDisabled;
        var _closure2_slot19 = var3;
        var3 = var2.selectedSummary;
        var _closure2_slot20 = var3;
        var3 = var2.enableSwipeActions;
        var _closure2_slot21 = var3;
        var3 = var2.isResourceChannel;
        var _closure2_slot22 = var3;
        var3 = var2.shouldObscureSpoiler;
        var _closure2_slot23 = var3;
        var3 = var2.shouldDisableInteractiveComponents;
        var _closure2_slot24 = var3;
        var3 = var2.unloadableContentEntryMessageIds;
        var _closure2_slot25 = var3;
        var3 = var2.containerWidth;
        var _closure2_slot26 = var3;
        var3 = var2.chatRef;
        var _closure2_slot27 = var3;
        var3 = var2.loadedRef;
        var _closure2_slot28 = var3;
        var3 = var2.animatedRef;
        var _closure2_slot29 = var3;
        var3 = var2.hasMoreMessagesAfterForLastUpdateRef;
        var _closure2_slot30 = var3;
        var3 = var2.updateNativeRows;
        var _closure2_slot31 = var3;
        var3 = var2.isLoadingAtTop;
        var _closure2_slot32 = var3;
        var3 = var2.channelLatestMessageLoadingStatsManager;
        var _closure2_slot33 = var3;
        var3 = var2.channelId;
        var _closure2_slot34 = var3;
        var3 = var2.isMessagesCached;
        var _closure2_slot35 = var3;
        var3 = var2.chatUpdatesQueue;
        var _closure2_slot36 = var3;
        var3 = var2.shouldJumpToOriginalPost;
        var _closure2_slot37 = var3;
        var3 = var2.findMessageIndex;
        var _closure2_slot38 = var3;
        var3 = var2.scrollToTopMessage;
        var _closure2_slot39 = var3;
        var2 = var2.useReducedMotion;
        var _closure2_slot40 = var2;
        var5 = function createRows(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var3 = var1.forceRender;
                var _closure3_slot0 = var3;
                var3 = var1.updateMessageIds;
                var _closure3_slot1 = var3;
                var1 = var1.ignoreEmbedDescriptionCache;
                var _closure3_slot2 = var1;
                var1 = _closure2_slot4;
                var4 = null;
                var5 = var4 != var1;
                var1 = null;
                if(!var5) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var5 = _closure2_slot5;
                var5 = var4 != var5;
                var1 = null;
                if(!var5) { _fun0004_ip = 36; continue _fun0004 }
case 38:
                var3 = _closure2_slot6;
                var1 = null;
                if(!var3) { _fun0004_ip = 36; continue _fun0004 }
case 39:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 0;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var4 = var3.firstRowGenerator;
                var3 = var4.measure;
                var2 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var7 = _closure2_slot0;
                        var2 = var7.setup;
                        var8 = _closure2_slot5;
                        var2 = var2.bind(var7)(var8);
                        var4 = _closure2_slot1;
                        var3 = var4.setOptions;
                        var2 = {};
                        var5 = _closure2_slot11;
                        var2['inlineAttachmentMedia'] = var5;
                        var5 = _closure2_slot12;
                        var2['inlineEmbedMedia'] = var5;
                        var5 = _closure2_slot13;
                        var2['renderEmbeds'] = var5;
                        var5 = _closure2_slot14;
                        var2['renderReactions'] = var5;
                        var5 = _closure2_slot15;
                        var2['animateEmoji'] = var5;
                        var5 = _closure2_slot2;
                        var5 = var5.current;
                        var2['animatingStickerMessageId'] = var5;
                        var5 = _closure2_slot26;
                        var2['constrainedWidth'] = var5;
                        var5 = _closure2_slot16;
                        var2['gifAutoPlay'] = var5;
                        var5 = _closure2_slot17;
                        var2['timestampHourCycle'] = var5;
                        var5 = _closure2_slot19;
                        var2['renderCommunicationDisabled'] = var5;
                        var5 = _closure3_slot2;
                        var2['ignoreEmbedDescriptionCache'] = var5;
                        var5 = _closure2_slot21;
                        var2['enableSwipeActions'] = var5;
                        var5 = _closure2_slot23;
                        var2['shouldObscureSpoiler'] = var5;
                        var5 = _closure2_slot24;
                        var2['shouldDisableInteractiveComponents'] = var5;
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure1_slot3;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 1;
                        var2 = var5[var2];
                        var5 = undefined;
                        var4 = var4.bind(var5)(var2);
                        var2 = {};
                        var9 = _closure2_slot4;
                        var2['channel'] = var9;
                        var2['messages'] = var8;
                        var8 = _closure2_slot7;
                        var2['uploads'] = var8;
                        var8 = _closure2_slot9;
                        var2['oldestUnreadMessageId'] = var8;
                        var8 = _closure2_slot10;
                        var2['replyingMessageId'] = var8;
                        var8 = _closure2_slot18;
                        var2['currentUserId'] = var8;
                        var8 = _closure2_slot3;
                        var8 = var8.bind(var5)();
                        var2['canAddNewReactions'] = var8;
                        var8 = _closure2_slot20;
                        var2['selectedSummary'] = var8;
                        var2['chatManager'] = var7;
                        var7 = _closure2_slot8;
                        var2['roleStyle'] = var7;
                        var7 = _closure3_slot0;
                        var2['forceRender'] = var7;
                        var6 = _closure3_slot1;
                        var2['updateMessageIds'] = var6;
                        var6 = _closure2_slot22;
                        var2['isResourceChannel'] = var6;
                        var6 = _closure2_slot25;
                        var2['unloadableContentEntryMessageIds'] = var6;
                        var2 = var4.bind(var5)(var2);
                        var4 = var3.bind(var5)(var2);
                        var3 = var4.bind(var5)();
                        var2 = var3.done;
                        if(var2) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                        var7 = var3.value;
                        var6 = _closure2_slot1;
                        var2 = var6.generate;
                        var7 = var2.bind(var6)(var7);
                        var6 = _closure2_slot0;
                        var2 = var6.createRow;
                        var2 = var2.bind(var6)(var7);
                        var6 = var4.bind(var5)();
                        var2 = var6.done;
                        var3 = var6;
                        if(!var2) { _fun0005_ip = 41; continue _fun0005 }
case 40:
                        var2 = _closure2_slot0;
                        var1 = var2.createChangeset;
                        var1 = var1.bind(var2)();
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
case 36:
                return var1;
            }
        };
        var _closure2_slot41 = var5;
        var2 = function maybeRescrollToMessageId(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = arg1;
                var6 = arguments[1];
                var5 = arguments[2];
                var3 = arguments[3];
                var _closure3_slot0 = var4;
                var1 = undefined;
                if(!(var6 === var1)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                var6 = false;
case 42:
                var _closure3_slot1 = var6;
                if(!(var5 === var1)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 2;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.JumpType;
                var5 = var6.INSTANT;
case 44:
                var _closure3_slot2 = var5;
                if(!(var3 === var1)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                var3 = false;
case 46:
                var _closure3_slot3 = var3;
                var3 = null;
                if(!(var3 != var4)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                var3 = global;
                var4 = var3.setTimeout;
                var3 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var4 = _closure2_slot38;
                        var3 = _closure3_slot0;
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var4 = null;
                        if(!(var4 != var6)) { _fun0007_ip = 50; continue _fun0007 }
case 3:
                        var3 = _closure2_slot27;
                        var3 = var3.current;
                        if(!(var4 != var3)) { _fun0007_ip = 50; continue _fun0007 }
case 2:
                        var4 = _closure3_slot1;
                        var3 = false;
                        if(!var4) { _fun0007_ip = 51; continue _fun0007 }
case 4:
                        var7 = _closure2_slot44;
                        var5 = {};
                        var4 = _closure3_slot0;
                        var5['scrollToMessageId'] = var4;
                        var5['jumpTargetId'] = var4;
                        var9 = _closure3_slot2;
                        var5['jumpType'] = var9;
                        var5['focusTargetId'] = var4;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var4 = 2;
                        var4 = var10[var4];
                        var4 = var9.bind(var1)(var4);
                        var4 = var4.JumpType;
                        var4 = var4.INSTANT;
                        var5['overrideScrollJumpType'] = var4;
                        var4 = true;
                        var5['isRescrolling'] = var4;
                        var9 = _closure3_slot3;
                        var5['hasJumpedToOriginalPost'] = var9;
                        var5 = var7.bind(var1)(var5);
                        var3 = true;
case 51:
                        if(var3) { _fun0007_ip = 50; continue _fun0007 }
case 52:
                        var4 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var3 = 3;
                        var3 = var10[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.scrollTo;
                        var2 = _closure2_slot27;
                        var3 = var2.current;
                        var2 = {};
                        var8 = _closure3_slot2;
                        var9 = _closure1_slot0;
                        var7 = 2;
                        var7 = var10[var7];
                        var7 = var9.bind(var1)(var7);
                        var7 = var7.JumpType;
                        var7 = var7.ANIMATED;
                        var7 = var8 === var7;
                        var2['animated'] = var7;
                        var2 = var4.bind(var5)(var3, var6, var2);
case 50:
                        return var1;
                    }
                };
                var2 = 50;
                var2 = var4.bind(var1)(var3, var2);
case 48:
                return var1;
            }
        };
        var _closure2_slot42 = var2;
        var3 = function scrollToMessageId(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = arg1;
                var10 = var3.scrollToMessageId;
                var _closure3_slot0 = var10;
                var9 = var3.jumpTargetId;
                var1 = undefined;
                if(!(var9 === var1)) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                var9 = null;
case 53:
                var _closure3_slot1 = var9;
                var11 = var3.jumpType;
                if(!(var11 === var1)) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 2;
                var4 = var6[var4];
                var4 = var5.bind(var1)(var4);
                var4 = var4.JumpType;
                var11 = var4.ANIMATED;
case 55:
                var8 = var3.scrollPosition;
                if(!(var8 === var1)) { _fun0008_ip = 36; continue _fun0008 }
case 57:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 3;
                var4 = var6[var4];
                var4 = var5.bind(var1)(var4);
                var4 = var4.ChatScrollPosition;
                var8 = var4.TOP;
case 36:
                var5 = var3.minimizeScrolling;
                if(!(var5 === var1)) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                var5 = false;
case 58:
                var6 = var3.isRescrolling;
                if(!(var6 === var1)) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                var6 = false;
case 60:
                var13 = var3.hasJumpedToOriginalPost;
                if(!(var13 === var1)) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                var13 = false;
case 62:
                var _closure3_slot2 = var1;
                var _closure3_slot3 = var1;
                var4 = _closure2_slot40;
                if(var4) { _fun0008_ip = 64; continue _fun0008 }
case 65:
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 2;
                var7 = var14[var7];
                var7 = var12.bind(var1)(var7);
                var7 = var7.JumpType;
                var7 = var7.INSTANT;
                var4 = var11 === var7;
case 64:
                var11 = !var4;
                _closure3_slot2 = var11;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 4;
                var7 = var14[var7];
                var12 = var12.bind(var1)(var7);
                var7 = var12.isIOS;
                var7 = var7.bind(var12)();
                if(!var7) { _fun0008_ip = 66; continue _fun0008 }
case 67:
                if(var6) { _fun0008_ip = 66; continue _fun0008 }
case 68:
                var12 = _closure2_slot42;
                var7 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 2;
                var6 = var14[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.JumpType;
                if(var11) { _fun0008_ip = 69; continue _fun0008 }
case 70:
                var7 = var6.INSTANT;
                _fun0008_ip = 71; continue _fun0008;
case 69:
                var7 = var6.ANIMATED;
case 71:
                var17 = true;
                var19 = undefined;
                var18 = var10;
                var16 = var7;
                var15 = var13;
                var6 = var19[var12](var18, var17, var16, var15, var14);
                _fun0008_ip = 72; continue _fun0008;
case 66:
                var6 = _closure2_slot38;
                var7 = var6.bind(var1)(var10);
                _closure3_slot3 = var7;
                var6 = null;
                if(!(var6 != var7)) { _fun0008_ip = 72; continue _fun0008 }
case 41:
                if(var5) { _fun0008_ip = 73; continue _fun0008 }
case 74:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 3;
                var4 = var6[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.scrollTo;
                var3 = _closure2_slot27;
                var4 = var3.current;
                var3 = {};
                var3['animated'] = var11;
                var9 = var9 === var10;
                var3['highlight'] = var9;
                var3['position'] = var8;
                var3 = var5.bind(var6)(var4, var7, var3);
                _fun0008_ip = 72; continue _fun0008;
case 73:
                var3 = global;
                var4 = var3.setTimeout;
                var3 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.scrollIntoView;
                    var2 = _closure2_slot27;
                    var4 = var2.current;
                    var3 = _closure3_slot3;
                    var2 = {};
                    var8 = _closure3_slot2;
                    var2['animated'] = var8;
                    var8 = _closure3_slot1;
                    var7 = _closure3_slot0;
                    var7 = var8 === var7;
                    var2['highlight'] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                };
                var2 = 5;
                var2 = var4.bind(var1)(var3, var2);
case 72:
                return var1;
            }
        };
        var _closure2_slot43 = var3;
        var4 = function updateRows() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arguments[0];
                var1 = undefined;
                if(!(var2 === var1)) { _fun0009_ip = 75; continue _fun0009 }
case 76:
                var2 = {};
case 75:
                var12 = var2.forceRender;
                if(!(var12 === var1)) { _fun0009_ip = 31; continue _fun0009 }
case 77:
                var12 = false;
case 31:
                var7 = var2.forceReload;
                var10 = var2.updateMessageIds;
                if(!(var10 === var1)) { _fun0009_ip = 30; continue _fun0009 }
case 78:
                var3 = global;
                var3 = var3.Set;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var24 = var4;
                var3 = new var24[var3](var23);
                var10 = var3 instanceof Object ? var3 : var4;
case 30:
                var16 = var2.scrollToMessageId;
                if(!(var16 === var1)) { _fun0009_ip = 46; continue _fun0009 }
case 47:
                var16 = null;
case 46:
                var15 = var2.jumpTargetId;
                if(!(var15 === var1)) { _fun0009_ip = 79; continue _fun0009 }
case 49:
                var15 = null;
case 79:
                var20 = var2.jumpType;
                if(!(var20 === var1)) { _fun0009_ip = 80; continue _fun0009 }
case 81:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 2;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var3 = var3.JumpType;
                var20 = var3.ANIMATED;
case 80:
                var9 = var2.focusTargetId;
                if(!(var9 === var1)) { _fun0009_ip = 82; continue _fun0009 }
case 83:
                var9 = null;
case 82:
                var5 = var2.ignoreEmbedDescriptionCache;
                if(!(var5 === var1)) { _fun0009_ip = 84; continue _fun0009 }
case 15:
                var5 = false;
case 84:
                var8 = var2.messagesNewlyLoaded;
                if(!(var8 === var1)) { _fun0009_ip = 85; continue _fun0009 }
case 86:
                var8 = false;
case 85:
                var13 = var2.shouldInitialScroll;
                if(!(var13 === var1)) { _fun0009_ip = 87; continue _fun0009 }
case 88:
                var13 = false;
case 87:
                var19 = var2.minimizeScrolling;
                if(!(var19 === var1)) { _fun0009_ip = 89; continue _fun0009 }
case 90:
                var19 = false;
case 89:
                var18 = var2.isRescrolling;
                if(!(var18 === var1)) { _fun0009_ip = 91; continue _fun0009 }
case 92:
                var18 = false;
case 91:
                var11 = var2.overrideScrollJumpType;
                var6 = var2.isAnimated;
                if(!(var6 === var1)) { _fun0009_ip = 93; continue _fun0009 }
case 94:
                var6 = true;
case 93:
                var17 = var2.hasJumpedToOriginalPost;
                if(!(var17 === var1)) { _fun0009_ip = 95; continue _fun0009 }
case 96:
                var17 = false;
case 95:
                var2 = _closure2_slot27;
                var2 = var2.current;
                var14 = null;
                if(!(var14 != var2)) { _fun0009_ip = 97; continue _fun0009 }
case 67:
                var4 = _closure2_slot41;
                var2 = {};
                var2['forceRender'] = var12;
                var2['updateMessageIds'] = var10;
                var2['ignoreEmbedDescriptionCache'] = var5;
                var12 = var4.bind(var1)(var2);
                var2 = _closure2_slot28;
                var5 = var2.current;
                var2 = _closure2_slot20;
                var2 = var14 != var2;
                var10 = undefined;
                if(!var2) { _fun0009_ip = 98; continue _fun0009 }
case 99:
                var2 = _closure2_slot20;
                var2 = var2.startId;
                var10 = undefined;
                if(!(var2 === var16)) { _fun0009_ip = 98; continue _fun0009 }
case 8:
                var4 = _closure1_slot0;
                var21 = _closure1_slot2;
                var2 = 3;
                var2 = var21[var2];
                var2 = var4.bind(var1)(var2);
                var2 = var2.ChatScrollPosition;
                var10 = var2.MIDDLE;
case 98:
                if(!(var14 != var12)) { _fun0009_ip = 100; continue _fun0009 }
case 101:
                var4 = var12.length;
                var2 = 0;
                if(!(!(var4 > var2))) { _fun0009_ip = 102; continue _fun0009 }
case 100:
                var2 = _closure2_slot28;
                var2 = var2.current;
                if(!var2) { _fun0009_ip = 103; continue _fun0009 }
case 104:
                var4 = _closure2_slot36;
                var2 = var4.hasUpdates;
                var2 = var2.bind(var4)();
                if(var2) { _fun0009_ip = 105; continue _fun0009 }
case 103:
                var2 = _closure2_slot28;
                var2 = var2.current;
                if(var2) { _fun0009_ip = 106; continue _fun0009 }
case 107:
                if(!(var14 != var12)) { _fun0009_ip = 106; continue _fun0009 }
case 108:
                var4 = var12.length;
                var2 = 0;
                if(!(var2 === var4)) { _fun0009_ip = 106; continue _fun0009 }
case 109:
                var4 = _closure1_slot1;
                var21 = _closure1_slot2;
                var2 = 3;
                var2 = var21[var2];
                var21 = var4.bind(var1)(var2);
                var4 = var21.fadeIn;
                var2 = _closure2_slot27;
                var2 = var2.current;
                var2 = var4.bind(var21)(var2);
                _fun0009_ip = 110; continue _fun0009;
case 106:
                if(!(var14 != var16)) { _fun0009_ip = 111; continue _fun0009 }
case 112:
                var2 = _closure2_slot37;
                var2 = var2.bind(var1)(var17);
                if(var2) { _fun0009_ip = 111; continue _fun0009 }
case 113:
                var4 = _closure2_slot43;
                var2 = {};
                var2['scrollToMessageId'] = var16;
                var2['jumpTargetId'] = var15;
                var2['jumpType'] = var20;
                var2['scrollPosition'] = var10;
                var2['minimizeScrolling'] = var19;
                var2['isRescrolling'] = var18;
                var2['hasJumpedToOriginalPost'] = var17;
                var2 = var4.bind(var1)(var2);
                _fun0009_ip = 110; continue _fun0009;
case 111:
                if(!(var14 != var9)) { _fun0009_ip = 110; continue _fun0009 }
case 114:
                var2 = _closure2_slot38;
                var18 = var2.bind(var1)(var9);
                if(!(var14 != var18)) { _fun0009_ip = 110; continue _fun0009 }
case 115:
                var4 = _closure1_slot1;
                var17 = _closure1_slot2;
                var2 = 3;
                var2 = var17[var2];
                var17 = var4.bind(var1)(var2);
                var4 = var17.focus;
                var2 = _closure2_slot27;
                var2 = var2.current;
                var2 = var4.bind(var17)(var2, var18);
                _fun0009_ip = 110; continue _fun0009;
case 105:
                var4 = _closure2_slot36;
                var2 = var4.tryFlush;
                var2 = var2.bind(var4)();
                _fun0009_ip = 110; continue _fun0009;
case 102:
                var4 = _closure1_slot1;
                var17 = _closure1_slot2;
                var2 = 5;
                var2 = var17[var2];
                var4 = var4.bind(var1)(var2);
                var2 = {};
                var18 = _closure2_slot0;
                var17 = var18.getPreviousRows;
                var17 = var17.bind(var18)();
                var2['rows'] = var17;
                var2['scrollToMessageId'] = var16;
                var2['jumpTargetId'] = var15;
                if(!(var14 == var11)) { _fun0009_ip = 116; continue _fun0009 }
case 117:
                var14 = _closure2_slot5;
                var11 = var14.jumpType;
case 116:
                var2['jumpType'] = var11;
                var11 = _closure2_slot28;
                var11 = var11.current;
                var11 = !var11;
                if(var11) { _fun0009_ip = 118; continue _fun0009 }
case 119:
                var11 = var13;
case 118:
                var2['shouldInitialScroll'] = var11;
                var11 = _closure2_slot29;
                var11 = var11.current;
                var2['animated'] = var11;
                var2['scrollPosition'] = var10;
                var2['focusTargetId'] = var9;
                var9 = var4.bind(var1)(var2);
                var4 = _closure2_slot28;
                var2 = true;
                var4['current'] = var2;
                var4 = _closure2_slot31;
                var2 = {};
                var2['rows'] = var12;
                var10 = _closure2_slot5;
                var10 = var10.hasMoreAfter;
                var2['hasMoreMessagesAfter'] = var10;
                var11 = _closure2_slot32;
                var10 = _closure2_slot30;
                var10 = var10.current;
                var10 = var11.bind(var1)(var12, var10);
                var2['isLoadingAtTop'] = var10;
                var2['scrollData'] = var9;
                var2['HACK_iOSForceAnimations'] = var8;
                var2['forceReload'] = var7;
                var2['isAnimated'] = var6;
                var2 = var4.bind(var1)(var2);
                if(var5) { _fun0009_ip = 110; continue _fun0009 }
case 120:
                var6 = _closure2_slot33;
                var4 = var6.finish;
                var2 = {};
                var7 = _closure2_slot34;
                var2['channelId'] = var7;
                var7 = _closure2_slot35;
                var2['areMessagesCached'] = var7;
                var2 = var4.bind(var6)(var2);
case 110:
                var2 = _closure2_slot28;
                var2 = var2.current;
                if(!var2) { _fun0009_ip = 121; continue _fun0009 }
case 122:
                var4 = _closure2_slot28;
                var4 = var4.current;
                var2 = var4 !== var5;
case 121:
                if(!var2) { _fun0009_ip = 123; continue _fun0009 }
case 124:
                var2 = _closure2_slot22;
case 123:
                if(!var2) { _fun0009_ip = 97; continue _fun0009 }
case 125:
                var2 = global;
                var4 = var2.setTimeout;
                var3 = function() {
                    var2 = _closure2_slot39;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    return var1;
                };
                var2 = 100;
                var2 = var4.bind(var1)(var3, var2);
case 97:
                return var1;
            }
        };
        var _closure2_slot44 = var4;
        var1 = {};
        var1['createRows'] = var5;
        var1['updateRows'] = var4;
        var1['scrollToMessageId'] = var3;
        var1['maybeRescrollToMessageId'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();