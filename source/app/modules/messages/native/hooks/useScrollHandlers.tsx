// app/modules/messages/native/hooks/useScrollHandlers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.updateIsAtBottom;
    var _closure1_slot4 = var8;
    var4 = var4.updateShouldShowJumpToPresentButton;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'useScrollHandlers';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/hooks/useScrollHandlers.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useScrollHandlers(arg1) {
        var1 = arg1;
        var3 = var1.chatRef;
        var _closure2_slot0 = var3;
        var3 = var1.chatManager;
        var _closure2_slot1 = var3;
        var3 = var1.chatUpdatesQueue;
        var _closure2_slot2 = var3;
        var3 = var1.pendingUpdatesQueueRef;
        var _closure2_slot3 = var3;
        var3 = var1.animatedRef;
        var _closure2_slot4 = var3;
        var3 = var1.fetchMoreBefore;
        var _closure2_slot5 = var3;
        var3 = var1.fetchMoreAfter;
        var _closure2_slot6 = var3;
        var3 = var1.handleVisibleMessagesChange;
        var _closure2_slot7 = var3;
        var3 = var1.applyNativeRowsUpdate;
        var _closure2_slot8 = var3;
        var3 = var1.messages;
        var _closure2_slot9 = var3;
        var3 = var1.channel;
        var _closure2_slot10 = var3;
        var3 = var1.channelId;
        var _closure2_slot11 = var3;
        var3 = var1.screenIndex;
        var _closure2_slot12 = var3;
        var3 = var1.onScroll;
        var _closure2_slot13 = var3;
        var3 = var1.useReducedMotion;
        var _closure2_slot14 = var3;
        var3 = var1.isStaff;
        var _closure2_slot15 = var3;
        var1 = var1.visibleMessagesWindowHandler;
        var _closure2_slot16 = var1;
        var4 = _closure1_slot3;
        var3 = var4.useRef;
        var1 = undefined;
        var7 = var3.bind(var4)(var1);
        var _closure2_slot17 = var7;
        var1 = var4.useRef;
        var3 = false;
        var13 = var1.bind(var4)(var3);
        var _closure2_slot18 = var13;
        var1 = var4.useRef;
        var12 = var1.bind(var4)(var3);
        var _closure2_slot19 = var12;
        var1 = var4.useRef;
        var11 = var1.bind(var4)(var3);
        var _closure2_slot20 = var11;
        var1 = var4.useRef;
        var10 = var1.bind(var4)(var3);
        var _closure2_slot21 = var10;
        var1 = var4.useRef;
        var9 = var1.bind(var4)(var3);
        var _closure2_slot22 = var9;
        var1 = var4.useRef;
        var8 = var1.bind(var4)(var3);
        var _closure2_slot23 = var8;
        var6 = function loadMoreBefore() {
            var3 = _closure2_slot4;
            var2 = true;
            var3['current'] = var2;
            var2 = _closure2_slot5;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var _closure2_slot24 = var6;
        var5 = function loadMoreAfter() {
            var3 = _closure2_slot4;
            var2 = true;
            var3['current'] = var2;
            var2 = _closure2_slot6;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var _closure2_slot25 = var5;
        var4 = function handleScrollCallbacks(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = arg1;
                var10 = var1.eventTimestamp;
                var2 = var1.isAtBottom;
                var7 = var1.isNearBottom;
                var4 = undefined;
                if(!(var7 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var7 = false;
case 2:
                var8 = var1.isNearTop;
                if(!(var8 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var8 = false;
case 4:
                var11 = var1.dragging;
                if(!(var11 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var11 = false;
case 6:
                var13 = var1.decelerating;
                if(!(var13 === var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var13 = false;
case 8:
                var5 = var1.isFirstMessageVisible;
                if(!(var5 === var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var5 = false;
case 10:
                var6 = _closure2_slot10;
                var3 = null;
                if(!(var3 != var6)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                var3 = _closure2_slot9;
                var3 = var3.length;
                var9 = 0;
                if(!(var9 === var3)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                var3 = _closure2_slot9;
                var3 = var3.loadingMore;
                if(var3) { _fun0001_ip = 12; continue _fun0001 }
case 14:
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 3;
                var6 = var14[var6];
                var12 = var12.bind(var4)(var6);
                var6 = var12.getIsScreenReaderEnabled;
                var12 = var6.bind(var12)();
                var6 = _closure2_slot9;
                var6 = var6.loadingMore;
                var6 = !var6;
                if(!var6) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                if(var11) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                var11 = var13;
case 18:
                if(var11) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                var11 = var12;
case 20:
                var6 = var11;
case 16:
                if(!var6) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                var11 = _closure2_slot3;
                var11 = var11.current;
                var11 = var11.length;
                var6 = var9 === var11;
case 22:
                var11 = _closure2_slot21;
                var11 = var11.current;
                if(var11) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                if(!var8) { _fun0001_ip = 24; continue _fun0001 }
case 26:
                var8 = _closure2_slot9;
                var8 = var8.hasMoreBefore;
                if(!var8) { _fun0001_ip = 24; continue _fun0001 }
case 27:
                if(!var6) { _fun0001_ip = 24; continue _fun0001 }
case 28:
                var8 = _closure2_slot24;
                var8 = var8.bind(var4)();
                _fun0001_ip = 29; continue _fun0001;
case 24:
                var8 = _closure2_slot20;
                var8 = var8.current;
                if(var8) { _fun0001_ip = 30; continue _fun0001 }
case 31:
                if(!var7) { _fun0001_ip = 30; continue _fun0001 }
case 32:
                var7 = _closure2_slot9;
                var7 = var7.hasMoreAfter;
                if(!var7) { _fun0001_ip = 30; continue _fun0001 }
case 33:
                if(!var6) { _fun0001_ip = 30; continue _fun0001 }
case 34:
                var6 = _closure2_slot25;
                var6 = var6.bind(var4)();
                _fun0001_ip = 29; continue _fun0001;
case 30:
                var6 = _closure2_slot19;
                var6 = var6.current;
                var6 = var6 === var2;
                if(!var6) { _fun0001_ip = 35; continue _fun0001 }
case 36:
                var7 = _closure2_slot18;
                var6 = var7.current;
case 35:
                if(var6) { _fun0001_ip = 29; continue _fun0001 }
case 37:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 4;
                var3 = var7[var3];
                var8 = var6.bind(var4)(var3);
                var7 = var8.updateChannelDimensions;
                var3 = _closure2_slot10;
                var6 = var3.id;
                var3 = 0;
                if(!var2) { _fun0001_ip = 38; continue _fun0001 }
case 39:
                var3 = 1;
case 38:
                var16 = 1;
                var20 = var8;
                var19 = var6;
                var18 = var10;
                var17 = var3;
                var15 = 0;
                var2 = var20[var7](var19, var18, var17, var16, var15, var14);
                var3 = _closure2_slot18;
                var2 = true;
                var3['current'] = var2;
case 29:
                var3 = _closure2_slot13;
                var2 = {};
                var2['isFirstMessageVisible'] = var5;
                var2 = var3.bind(var4)(var2);
                var2 = _closure2_slot2;
                var1 = var2.tryFlush;
                var1 = var1.bind(var2)();
                var1 = true;
                return var1;
case 12:
                var1 = false;
                return var1;
            }
        };
        var _closure2_slot26 = var4;
        var3 = function handleScroll(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var13 = var3.eventTimestamp;
                var9 = var3.isAtBottom;
                var _closure3_slot0 = var9;
                var8 = var3.isNearBottom;
                var1 = undefined;
                if(!(var8 === var1)) { _fun0002_ip = 40; continue _fun0002 }
case 41:
                var8 = false;
case 40:
                var7 = var3.isNearTop;
                if(!(var7 === var1)) { _fun0002_ip = 42; continue _fun0002 }
case 43:
                var7 = false;
case 42:
                var6 = var3.dragging;
                if(!(var6 === var1)) { _fun0002_ip = 44; continue _fun0002 }
case 45:
                var6 = false;
case 44:
                var4 = var3.decelerating;
                if(!(var4 === var1)) { _fun0002_ip = 46; continue _fun0002 }
case 47:
                var4 = false;
case 46:
                var12 = var3.shouldShowJumpToPresent;
                if(!(var12 === var1)) { _fun0002_ip = 48; continue _fun0002 }
case 49:
                var12 = false;
case 48:
                var _closure3_slot1 = var12;
                var11 = var3.isFirstMessageVisible;
                if(!(var11 === var1)) { _fun0002_ip = 50; continue _fun0002 }
case 51:
                var11 = false;
case 50:
                var10 = _closure2_slot26;
                var5 = {};
                var5['eventTimestamp'] = var13;
                var5['isAtBottom'] = var9;
                var5['isNearBottom'] = var8;
                var5['isNearTop'] = var7;
                var5['dragging'] = var6;
                var5['decelerating'] = var4;
                var5['shouldShowJumpToPresent'] = var12;
                var5['isFirstMessageVisible'] = var11;
                var5 = var10.bind(var1)(var5);
                if(!var5) { _fun0002_ip = 52; continue _fun0002 }
case 53:
                var5 = _closure2_slot19;
                var5['current'] = var9;
                var5 = _closure2_slot20;
                var5['current'] = var8;
                var5 = _closure2_slot21;
                var5['current'] = var7;
                var5 = _closure2_slot23;
                var5['current'] = var6;
                var3 = _closure2_slot22;
                var3['current'] = var4;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 5;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.batchUpdates;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var8 = _closure1_slot5;
                        var7 = _closure2_slot11;
                        var6 = _closure2_slot12;
                        var5 = _closure3_slot1;
                        if(var5) { _fun0003_ip = 54; continue _fun0003 }
case 55:
                        var1 = _closure2_slot9;
                        var5 = var1.hasMoreAfter;
case 54:
                        var1 = undefined;
                        var5 = var8.bind(var1)(var7, var6, var5);
                        var4 = _closure1_slot4;
                        var3 = _closure2_slot12;
                        var2 = _closure3_slot0;
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
case 52:
                return var1;
            }
        };
        var _closure2_slot27 = var3;
        var1 = {};
        var1['hasHandledScrollRef'] = var13;
        var1['isAtBottomRef'] = var12;
        var1['isNearBottomRef'] = var11;
        var1['isNearTopRef'] = var10;
        var1['deceleratingRef'] = var9;
        var1['draggingRef'] = var8;
        var1['firstIgnoredScrollEventTimestampRef'] = var7;
        var1['loadMoreBefore'] = var6;
        var1['loadMoreAfter'] = var5;
        var5 = function scrollToTop() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var5 = arguments[0];
                var1 = undefined;
                if(!(var5 === var1)) { _fun0004_ip = 56; continue _fun0004 }
case 57:
                var5 = true;
case 56:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 6;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.scrollToTop;
                var2 = _closure2_slot0;
                var2 = var2.current;
                if(!var5) { _fun0004_ip = 58; continue _fun0004 }
case 59:
                var6 = _closure2_slot14;
                var5 = !var6;
case 58:
                var2 = var3.bind(var4)(var2, var5);
                return var1;
            }
        };
        var1['scrollToTop'] = var5;
        var5 = function scrollToRelativeOffset(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var6 = arguments[1];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0005_ip = 56; continue _fun0005 }
case 57:
                var6 = true;
case 56:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 6;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var4 = var5.scrollToRelativeOffset;
                var3 = _closure2_slot0;
                var3 = var3.current;
                if(!var6) { _fun0005_ip = 58; continue _fun0005 }
case 59:
                var2 = _closure2_slot14;
                var6 = !var2;
case 58:
                var2 = arg1;
                var2 = var4.bind(var5)(var3, var2, var6);
                return var1;
            }
        };
        var1['scrollToRelativeOffset'] = var5;
        var5 = function scrollToTopMessage() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure2_slot1;
                var1 = var3.getPreviousRows;
                var1 = var1.bind(var3)();
                var4 = var1.length;
                var3 = 0;
                if(!(var4 > var3)) { _fun0006_ip = 60; continue _fun0006 }
case 55:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.scrollTo;
                var2 = _closure2_slot0;
                var2 = var2.current;
                var5 = var1.length;
                var1 = 1;
                var1 = var5 - var1;
                var1 = var3.bind(var4)(var2, var1);
case 60:
                var1 = undefined;
                return var1;
            }
        };
        var1['scrollToTopMessage'] = var5;
        var5 = function updateNativeRows(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var2 = _closure2_slot2;
                var2 = var2.isBlocking;
                if(var2) { _fun0007_ip = 49; continue _fun0007 }
case 61:
                var2 = var3.isLoadingAtTop;
                if(!var2) { _fun0007_ip = 62; continue _fun0007 }
case 55:
                var2 = _closure2_slot22;
                var2 = var2.current;
                if(var2) { _fun0007_ip = 8; continue _fun0007 }
case 63:
                var2 = _closure2_slot23;
                var2 = var2.current;
                if(var2) { _fun0007_ip = 8; continue _fun0007 }
case 62:
                var4 = _closure2_slot8;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                _fun0007_ip = 64; continue _fun0007;
case 8:
                var4 = _closure2_slot2;
                var2 = var4.add;
                var2 = var2.bind(var4)(var3);
                _fun0007_ip = 64; continue _fun0007;
case 49:
                var2 = _closure2_slot2;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
case 64:
                var1 = undefined;
                return var1;
            }
        };
        var1['updateNativeRows'] = var5;
        var1['handleScrollCallbacks'] = var4;
        var1['handleScroll'] = var3;
        var2 = function handleScrollPosition(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var8 = var1.timeStamp;
                var1 = var1.nativeEvent;
                var17 = var1.isAtBottom;
                var16 = var1.isNearBottom;
                var15 = var1.isNearTop;
                var14 = var1.dragging;
                var13 = var1.decelerating;
                var12 = var1.shouldShowJumpToPresent;
                var9 = var1.isFirstMessageVisible;
                var11 = var1.firstVisibleMessageIndex;
                var19 = var1.firstVisibleMessagePercentVisible;
                var10 = var1.lastVisibleMessageIndex;
                var7 = var1.changesetUpdateId;
                var18 = var1.lastVisibleMessagePercentVisible;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var2);
                var5 = var6.getChangesetIdForChat;
                var4 = _closure2_slot0;
                var4 = var4.current;
                var6 = var5.bind(var6)(var4);
                if(!(var7 === var6)) { _fun0008_ip = 65; continue _fun0008 }
case 66:
                var5 = _closure2_slot7;
                var4 = {};
                var4['firstVisibleMessageRowIndex'] = var11;
                var4['lastVisibleMessageRowIndex'] = var10;
                var4['firstVisibleMessagePercentVisible'] = var19;
                var4['lastVisibleMessagePercentVisible'] = var18;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var18 = 8;
                var18 = var20[var18];
                var18 = var19.bind(var1)(var18);
                var18 = var18.QuestsVisibleMessagesChangedSource;
                var18 = var18.SCROLL;
                var4['source'] = var18;
                var4 = var5.bind(var1)(var4);
                var4 = _closure2_slot17;
                var4 = var4.current;
                var5 = null;
                var18 = var8;
                if(!(var5 != var4)) { _fun0008_ip = 67; continue _fun0008 }
case 68:
                var18 = var4;
case 67:
                var4 = _closure2_slot17;
                var4['current'] = var1;
                var5 = _closure2_slot27;
                var4 = {};
                var4['eventTimestamp'] = var18;
                var4['isAtBottom'] = var17;
                var4['isNearBottom'] = var16;
                var4['isNearTop'] = var15;
                var4['dragging'] = var14;
                var4['decelerating'] = var13;
                var4['shouldShowJumpToPresent'] = var12;
                var4['isFirstMessageVisible'] = var9;
                var4 = var5.bind(var1)(var4);
                var9 = _closure2_slot16;
                var5 = var9.handleScrollPosition;
                var4 = {};
                var12 = _closure2_slot1;
                var12 = var12._rows;
                var4['rows'] = var12;
                var4['firstVisibleMessageRowIndex'] = var11;
                var4['lastVisibleMessageRowIndex'] = var10;
                var4 = var5.bind(var9)(var4);
                return var1;
case 65:
                var1 = _closure2_slot17;
                var4 = var1.current;
                var1 = null;
                if(!(var1 == var4)) { _fun0008_ip = 69; continue _fun0008 }
case 70:
                var1 = _closure2_slot17;
                var1['current'] = var8;
case 69:
                var1 = _closure2_slot15;
                if(!var1) { _fun0008_ip = 71; continue _fun0008 }
case 72:
                var5 = _closure1_slot6;
                var4 = var5.log;
                var24 = _closure2_slot11;
                var25 = 'STAFF-ACK-LOG: Ignoring outdated scroll event.';
                var26 = var5;
                var23 = var7;
                var22 = var6;
                var21 = var8;
                var1 = var26[var4](var25, var24, var23, var22, var21, var20);
case 71:
                var1 = undefined;
                return var1;
            }
        };
        var1['handleScrollPosition'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();