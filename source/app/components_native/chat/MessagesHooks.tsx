// app/components_native/chat/MessagesHooks.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.findNodeHandle;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.updateShouldShowJumpToPresentButton;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/chat/MessagesHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useMessageAuthorActivities(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var6 = _closure1_slot4;
        var5 = var6.useMemo;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var1 = {};
            var _closure3_slot0 = var1;
            var4 = _closure2_slot0;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.author;
                    var3 = null;
                    var2 = var3 != var2;
                    if(!var2) { _fun0001_ip = 28; continue _fun0001 }
 18:
                    var4 = var1.activity;
                    var2 = var3 != var4;
 28:
                    if(!var2) { _fun0001_ip = 53; continue _fun0001 }
 31:
                    var2 = _closure3_slot0;
                    var1 = var1.author;
                    var1 = var1.id;
                    var2[var1] = var3;
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6 = var5.bind(var6)(var3, var4);
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 5;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresObject;
        var2 = _closure1_slot7;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.mapValues;
            var2 = _closure2_slot1;
            var1 = function(arg1, arg2) {
                var3 = _closure1_slot7;
                var2 = var3.getPrimaryActivity;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useMessageAuthorActivities'] = var4;
    var4 = function useFetchMessageApplications(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot4;
        var5 = var4.useMemo;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var1 = global;
            var3 = var1.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var7 = var4;
            var3 = new var7[var3](var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var _closure3_slot0 = var3;
            var5 = _closure2_slot0;
            var4 = var5.forEach;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.applicationId;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0002_ip = 26; continue _fun0002 }
 17:
                    var3 = var1.application;
                    var2 = var4 == var3;
 26:
                    if(!var2) { _fun0002_ip = 51; continue _fun0002 }
 29:
                    var3 = _closure3_slot0;
                    var2 = var3.add;
                    var1 = var1.applicationId;
                    var1 = var2.bind(var3)(var1);
 51:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2);
            var2 = var1.Array;
            var1 = var2.from;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var5 = var5.bind(var4)(var2, var3);
        var _closure2_slot1 = var5;
        var3 = var4.useRef;
        var2 = new Array(0);
        var2 = var3.bind(var4)(var2);
        var _closure2_slot2 = var2;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.areArraysShallowEqual;
                var5 = _closure2_slot1;
                var3 = _closure2_slot2;
                var3 = var3.current;
                var3 = var6.bind(var7)(var5, var3);
                if(var3) { _fun0003_ip = 172; continue _fun0003 }
 56:
                var5 = _closure1_slot1;
                var10 = _closure1_slot2;
                var3 = 8;
                var3 = var10[var3];
                var7 = var5.bind(var1)(var3);
                var6 = var7.fetchApplications;
                var3 = 6;
                var3 = var10[var3];
                var5 = var5.bind(var1)(var3);
                var3 = _closure2_slot1;
                var8 = var5.bind(var1)(var3);
                var5 = var8.filter;
                var9 = _closure1_slot0;
                var4 = 9;
                var4 = var10[var4];
                var4 = var9.bind(var1)(var4);
                var4 = var4.isNotNullish;
                var5 = var5.bind(var8)(var4);
                var4 = var5.uniq;
                var5 = var4.bind(var5)();
                var4 = var5.value;
                var5 = var4.bind(var5)();
                var4 = false;
                var4 = var6.bind(var7)(var5, var4);
                var2 = _closure2_slot2;
                var2['current'] = var3;
 172:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useFetchMessageApplications'] = var4;
    var4 = function useMessagesLifecycle(arg1) {
        var2 = arg1;
        var3 = var2.messages;
        var _closure2_slot0 = var3;
        var3 = var2.isMessagesReady;
        var _closure2_slot1 = var3;
        var3 = var2.oldestUnreadMessageId;
        var _closure2_slot2 = var3;
        var6 = var2.channelId;
        var _closure2_slot3 = var6;
        var5 = var2.screenIndex;
        var _closure2_slot4 = var5;
        var3 = var2.updateRows;
        var _closure2_slot5 = var3;
        var2 = var2.scrollToMessageId;
        var _closure2_slot6 = var2;
        var4 = _closure1_slot4;
        var7 = var4.useEffect;
        var3 = function() {
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 10;
            var4 = var6[var2];
            var1 = undefined;
            var9 = var3.bind(var1)(var4);
            var8 = var9.syncMessageDisplay;
            var7 = {};
            var5 = _closure2_slot0;
            var7['messages'] = var5;
            var4 = _closure2_slot1;
            var7['isMessagesReady'] = var4;
            var4 = _closure2_slot2;
            var7['oldestUnreadMessageId'] = var4;
            var4 = _closure2_slot3;
            var7['channelId'] = var4;
            var11 = _closure2_slot5;
            var7['updateRows'] = var11;
            var10 = _closure2_slot6;
            var7['scrollToMessageId'] = var10;
            var7 = var8.bind(var9)(var7);
            var2 = var6[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.recordTimings;
            var2 = var2.bind(var3)(var4, var5);
            return var1;
        };
        var2 = new Array(0);
        var2 = var7.bind(var4)(var3, var2);
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var1 = function() {
                var5 = _closure1_slot6;
                var4 = _closure2_slot3;
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = false;
                var2 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useMessagesLifecycle'] = var4;
    var4 = function useScrollState() {
        var5 = _closure1_slot4;
        var4 = var5.useState;
        var3 = {'animated': false, 'hasHandledScroll': false, 'isAtBottom': false, 'isNearBottom': false, 'isNearTop': false, 'decelerating': false, 'dragging': false, 'hasMoreMessagesAfterForLastUpdate': false, '_loaded': false};
        var6 = var4.bind(var5)(var3);
        var4 = _closure1_slot3;
        var3 = undefined;
        var1 = 2;
        var4 = var4.bind(var3)(var6, var1);
        var1 = 0;
        var3 = var4[var1];
        var1 = 1;
        var1 = var4[var1];
        var _closure2_slot0 = var1;
        var1 = new Array(2);
        var1[0] = var3;
        var4 = var5.useCallback;
        var3 = function(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = function(arg1) {
                var1 = {};
                var3 = arg1;
                var4 = var1;
                var2 = copyDataProperties(var4, var3);
                var3 = _closure3_slot0;
                var4 = var1;
                var2 = copyDataProperties(var4, var3);
                return var1;
            };
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        var1[1] = var2;
        return var1;
    };
    var3['useScrollState'] = var4;
    var4 = function useChatUpdatesQueue(arg1, arg2) {
        var6 = arg1;
        var1 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var1;
        var5 = _closure1_slot4;
        var4 = var5.useMemo;
        var3 = new Array(2);
        var3[0] = var6;
        var3[1] = var1;
        var1 = function() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 11;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var4 = var2.ChatUpdatesQueue;
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 !== var3)) { _fun0004_ip = 41; continue _fun0004 }
 18:
                    var4 = _closure1_slot5;
                    var2 = _closure2_slot0;
                    var3 = var2.current;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3);
 41:
                    return var1;
                }
            };
            var5 = function(arg1) {
                var3 = _closure2_slot1;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7 = var2;
            var1 = new var7[var4](var6, var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1 = var4.bind(var5)(var1, var3);
        var _closure2_slot2 = var1;
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var1;
        var2 = function() {
            var1 = function() {
                var2 = _closure2_slot2;
                var1 = var2.cleanup;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useChatUpdatesQueue'] = var4;
    var2 = function useMessagesState() {
        var10 = _closure1_slot4;
        var1 = var10.useState;
        var9 = false;
        var1 = var1.bind(var10)(var9);
        var8 = _closure1_slot3;
        var7 = undefined;
        var3 = 2;
        var1 = var8.bind(var7)(var1, var3);
        var5 = 0;
        var6 = var1[var5];
        var4 = 1;
        var2 = var1[var4];
        var1 = var10.useState;
        var1 = var1.bind(var10)(var9);
        var3 = var8.bind(var7)(var1, var3);
        var1 = {};
        var1['shouldForceRender'] = var6;
        var5 = var3[var5];
        var1['hasJumpedToOriginalPost'] = var5;
        var3 = var3[var4];
        var1['setHasJumpedToOriginalPost'] = var3;
        var1['setShouldForceRender'] = var2;
        return var1;
    };
    var3['useMessagesState'] = var2;
    return var1;
})();