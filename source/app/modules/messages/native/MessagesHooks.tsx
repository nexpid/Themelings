// app/modules/messages/native/MessagesHooks.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.updateShouldShowJumpToPresentButton;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/MessagesHooks.tsx';
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
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.author;
                    var3 = null;
                    var2 = var3 != var2;
                    if(!var2) { _fun0004_ip = 34; continue _fun0004 }
case 36:
                    var4 = var1.activity;
                    var2 = var3 != var4;
case 34:
                    if(!var2) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var2 = _closure3_slot0;
                    var1 = var1.author;
                    var1 = var1.id;
                    var2[var1] = var3;
case 37:
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
        var3 = 8;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresObject;
        var2 = _closure1_slot10;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.mapValues;
            var2 = _closure2_slot1;
            var1 = function(arg1, arg2) {
                var3 = _closure1_slot10;
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
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.applicationId;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var3 = var1.application;
                    var2 = var4 == var3;
case 39:
                    if(!var2) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var3 = _closure3_slot0;
                    var2 = var3.add;
                    var1 = var1.applicationId;
                    var1 = var2.bind(var3)(var1);
case 41:
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.areArraysShallowEqual;
                var5 = _closure2_slot1;
                var3 = _closure2_slot2;
                var3 = var3.current;
                var3 = var6.bind(var7)(var5, var3);
                if(var3) { _fun0006_ip = 43; continue _fun0006 }
case 28:
                var5 = _closure1_slot1;
                var10 = _closure1_slot2;
                var3 = 11;
                var3 = var10[var3];
                var7 = var5.bind(var1)(var3);
                var6 = var7.fetchApplications;
                var3 = 9;
                var3 = var10[var3];
                var5 = var5.bind(var1)(var3);
                var3 = _closure2_slot1;
                var8 = var5.bind(var1)(var3);
                var5 = var8.filter;
                var9 = _closure1_slot0;
                var4 = 12;
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
case 43:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useFetchMessageApplications'] = var4;
    var4 = function useFetchVoiceChannelInviteStartTimes(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 8;
        var4 = var4[var1];
        var1 = undefined;
        var9 = var5.bind(var1)(var4);
        var8 = var9.useStateFromStoresObject;
        var4 = _closure1_slot9;
        var6 = new Array(2);
        var6[0] = var4;
        var4 = _closure1_slot8;
        var6[1] = var4;
        var5 = new Array(1);
        var5[0] = var7;
        var4 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = {};
                var3 = _closure1_slot11;
                var4 = _closure2_slot0;
                var2 = var4.values;
                var2 = var2.bind(var4)();
                var8 = undefined;
                var7 = var3.bind(var8)(var2);
                var3 = var7.bind(var8)();
                var2 = var3.done;
                var6 = null;
                var5 = 13;
                var4 = var3;
                var3 = undefined;
                if(var2) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                var2 = var4.value;
                var11 = var2.guild;
                var10 = var3;
                if(!(var6 != var11)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var5];
                var12 = var12.bind(var8)(var11);
                var11 = var12.isVoiceChannelInvite;
                var11 = var11.bind(var12)(var2);
                var10 = var3;
                if(!var11) { _fun0007_ip = 46; continue _fun0007 }
case 48:
                var2 = var2.guild;
                var2 = var2.id;
                var12 = _closure1_slot9;
                var11 = var12.getGuild;
                var11 = var11.bind(var12)(var2);
                var11 = var6 != var11;
                if(!var11) { _fun0007_ip = 15; continue _fun0007 }
case 49:
                var13 = _closure1_slot8;
                var12 = var13.isUnavailable;
                var12 = var12.bind(var13)(var2);
                var11 = !var12;
case 15:
                var1[var2] = var11;
                var10 = var2;
case 46:
                var11 = var7.bind(var8)();
                var2 = var11.done;
                var3 = var10;
                var4 = var11;
                if(!var2) { _fun0007_ip = 45; continue _fun0007 }
case 44:
                return var1;
            }
        };
        var6 = var8.bind(var9)(var6, var4, var5);
        var _closure2_slot1 = var6;
        var5 = _closure1_slot4;
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = _closure1_slot11;
                var2 = _closure2_slot0;
                var1 = var2.values;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var9 = var3.bind(var1)(var2);
                var3 = var9.bind(var1)();
                var2 = var3.done;
                var8 = 14;
                var7 = true;
                var6 = 13;
                var5 = null;
                var4 = var3;
                var3 = undefined;
                if(var2) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                var2 = var4.value;
                var13 = var2.guild;
                var12 = var3;
                if(!(var5 != var13)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var6];
                var14 = var14.bind(var1)(var13);
                var13 = var14.isVoiceChannelInvite;
                var13 = var13.bind(var14)(var2);
                var12 = var3;
                if(!var13) { _fun0008_ip = 52; continue _fun0008 }
case 54:
                var2 = var2.guild;
                var2 = var2.id;
                var13 = _closure2_slot1;
                var13 = var13[var2];
                var13 = var7 !== var13;
                if(var13) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                var15 = _closure1_slot6;
                var14 = var15.hasRequestedStartTimes;
                var13 = var14.bind(var15)(var2);
case 55:
                var12 = var2;
                if(var13) { _fun0008_ip = 52; continue _fun0008 }
case 57:
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var8];
                var14 = var14.bind(var1)(var13);
                var13 = var14.fetchChannelInfo;
                var13 = var13.bind(var14)(var2);
                var12 = var2;
case 52:
                var13 = var9.bind(var1)();
                var2 = var13.done;
                var3 = var12;
                var4 = var13;
                if(!var2) { _fun0008_ip = 51; continue _fun0008 }
case 50:
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useFetchVoiceChannelInviteStartTimes'] = var4;
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
            var2 = 15;
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
            var11 = _closure2_slot4;
            var7['screenIndex'] = var11;
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
                var5 = _closure1_slot7;
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
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 16;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var6 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 !== var3)) { _fun0009_ip = 58; continue _fun0009 }
case 36:
                    var4 = _closure1_slot5;
                    var2 = _closure2_slot0;
                    var3 = var2.current;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3);
case 58:
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