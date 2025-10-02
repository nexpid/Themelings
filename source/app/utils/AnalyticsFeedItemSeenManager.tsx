// app/utils/AnalyticsFeedItemSeenManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
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
            var9 = _closure1_slot8;
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
            var7 = _closure1_slot8;
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
    var _closure1_slot7 = var1;
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
    var _closure1_slot8 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var10 = 0;
    var4 = var8[var10];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var9 = 1;
    var4 = var8[var9];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var7 = 2;
    var4 = var8[var7];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var6 = {};
    var4 = 'forum_channel';
    var6['FORUM_CHANNEL'] = var4;
    var5 = {};
    var5['IMMEDIATE'] = var10;
    var4 = 'IMMEDIATE';
    var5[var10] = var4;
    var5['IMMEDIATE_WITH_COOLDOWN'] = var9;
    var4 = 'IMMEDIATE_WITH_COOLDOWN';
    var5[var9] = var4;
    var5['IMMEDIATE_WITH_DELAY'] = var7;
    var4 = 'IMMEDIATE_WITH_DELAY';
    var5[var7] = var4;
    var _closure1_slot5 = var5;
    var4 = function() {
        var4 = _closure1_slot4;
        var3 = function TrackedFeedItem() {
            var3 = this;
            var4 = _closure1_slot3;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = new Array(0);
            var3['seenIntervals'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'maybeMarkSeen';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = this;
                var3 = var2.seenIntervals;
                var1 = var2.seenIntervals;
                var4 = var1.length;
                var1 = 1;
                var1 = var4 - var1;
                var3 = var3[var1];
                var4 = null;
                var1 = var4 == var3;
                if(var1) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var3 = var3.endTimeMillis;
                var1 = var4 != var3;
case 36:
                if(!var1) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                var4 = var2.seenIntervals;
                var3 = var4.push;
                var2 = {};
                var5 = arg1;
                var2['startTimeMillis'] = var5;
                var2 = var3.bind(var4)(var2);
                var1 = true;
case 38:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'maybeMarkUnseen';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = this;
                var2 = var1.seenIntervals;
                var1 = var1.seenIntervals;
                var3 = var1.length;
                var1 = 1;
                var1 = var3 - var1;
                var3 = var2[var1];
                var4 = null;
                var1 = var4 != var3;
                if(!var1) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                var2 = var3.endTimeMillis;
                var1 = var4 == var2;
case 36:
                if(!var1) { _fun0005_ip = 40; continue _fun0005 }
case 39:
                var2 = arg1;
                var3['endTimeMillis'] = var2;
                var1 = true;
case 40:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'isVisible';
        var1['key'] = var6;
        var6 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = this;
                var2 = var1.seenIntervals;
                var1 = var1.seenIntervals;
                var3 = var1.length;
                var1 = 1;
                var1 = var3 - var1;
                var4 = var2[var1];
                var3 = null;
                var5 = var3 == var4;
                var1 = undefined;
                if(var5) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                var1 = var4.startTimeMillis;
case 41:
                var1 = var3 != var1;
                if(!var1) { _fun0006_ip = 43; continue _fun0006 }
case 4:
                var5 = var3 == var4;
                var2 = undefined;
                if(var5) { _fun0006_ip = 35; continue _fun0006 }
case 40:
                var2 = var4.endTimeMillis;
case 35:
                var1 = var3 == var2;
case 43:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'computeSeenTimeDestructive';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var12 = arg1;
                var4 = this;
                var2 = new Array(0);
                var3 = _closure1_slot7;
                var1 = var4.seenIntervals;
                var8 = undefined;
                var11 = var3.bind(var8)(var1);
                var7 = var11.bind(var8)();
                var6 = var7.done;
                var1 = global;
                var10 = null;
                var9 = var7;
                var7 = 0;
                var3 = 0;
                if(var6) { _fun0007_ip = 44; continue _fun0007 }
case 28:
                var6 = var9.value;
                var13 = var6.endTimeMillis;
                if(!(var10 != var13)) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                var14 = var6.endTimeMillis;
                var13 = var6.startTimeMillis;
                var13 = var14 - var13;
                var13 = var7 + var13;
                _fun0007_ip = 47; continue _fun0007;
case 45:
                if(var12) { _fun0007_ip = 48; continue _fun0007 }
case 11:
                var14 = var2.push;
                var14 = var14.bind(var2)(var6);
                var13 = var7;
                _fun0007_ip = 47; continue _fun0007;
case 48:
                var15 = var1.Date;
                var14 = var15.now;
                var16 = var14.bind(var15)();
                var6 = var6.startTimeMillis;
                var6 = var16 - var6;
                var13 = var7 + var6;
                var15 = var2.push;
                var14 = {};
                var14['startTimeMillis'] = var16;
                var14 = var15.bind(var2)(var14);
case 47:
                var14 = var11.bind(var8)();
                var6 = var14.done;
                var7 = var13;
                var9 = var14;
                var3 = var7;
                if(!var6) { _fun0007_ip = 28; continue _fun0007 }
case 44:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 3;
                var5 = var7[var5];
                var7 = var6.bind(var8)(var5);
                var6 = var2.length;
                var5 = 2;
                var6 = var6 < var5;
                var5 = 'there should only be a single left over data';
                var5 = var7.bind(var8)(var6, var5);
                var4['seenIntervals'] = var2;
                var2 = var1.Math;
                var1 = var2.round;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot6 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function AnalyticsFeedItemSeenManager(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var3 = this;
                var _closure3_slot0 = var3;
                var4 = var1.id;
                var2 = var1.windowId;
                var5 = var1.isPaused;
                var8 = _closure1_slot3;
                var7 = _closure2_slot0;
                var1 = undefined;
                var7 = var8.bind(var1)(var3, var7);
                var7 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var4 = 4;
                        var2 = var6[var4];
                        var1 = undefined;
                        var10 = var5.bind(var1)(var2);
                        var9 = var10.subscribe;
                        var3 = _closure3_slot0;
                        var8 = var3.handleFeedItemSeen;
                        var7 = 'ANALYTICS_FEED_ITEM_SEEN';
                        var7 = var9.bind(var10)(var7, var8);
                        var7 = var6[var4];
                        var10 = var5.bind(var1)(var7);
                        var9 = var10.subscribe;
                        var8 = var3.handleFeedItemUnseen;
                        var7 = 'ANALYTICS_FEED_ITEM_UNSEEN';
                        var7 = var9.bind(var10)(var7, var8);
                        var7 = var6[var4];
                        var10 = var5.bind(var1)(var7);
                        var9 = var10.subscribe;
                        var8 = var3.handleFeedItemFlush;
                        var7 = 'ANALYTICS_FEED_FLUSH';
                        var7 = var9.bind(var10)(var7, var8);
                        var7 = var6[var4];
                        var10 = var5.bind(var1)(var7);
                        var9 = var10.subscribe;
                        var8 = var3.handleAppStateUpdate;
                        var7 = 'APP_STATE_UPDATE';
                        var7 = var9.bind(var10)(var7, var8);
                        var4 = var6[var4];
                        var7 = var5.bind(var1)(var4);
                        var6 = var7.subscribe;
                        var5 = var3.handleWindowFocus;
                        var4 = 'WINDOW_FOCUS';
                        var4 = var6.bind(var7)(var4, var5);
                        var4 = var3.onInitialize;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0009_ip = 49; continue _fun0009 }
case 50:
                        var3 = var4.call;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
case 49:
                        return var1;
                    }
                };
                var3['initialize'] = var7;
                var7 = function() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var5 = 4;
                        var3 = var7[var5];
                        var1 = undefined;
                        var11 = var6.bind(var1)(var3);
                        var10 = var11.unsubscribe;
                        var4 = _closure3_slot0;
                        var9 = var4.handleFeedItemSeen;
                        var8 = 'ANALYTICS_FEED_ITEM_SEEN';
                        var8 = var10.bind(var11)(var8, var9);
                        var8 = var7[var5];
                        var11 = var6.bind(var1)(var8);
                        var10 = var11.unsubscribe;
                        var9 = var4.handleFeedItemUnseen;
                        var8 = 'ANALYTICS_FEED_ITEM_UNSEEN';
                        var8 = var10.bind(var11)(var8, var9);
                        var8 = var7[var5];
                        var11 = var6.bind(var1)(var8);
                        var10 = var11.unsubscribe;
                        var9 = var4.handleFeedItemFlush;
                        var8 = 'ANALYTICS_FEED_FLUSH';
                        var8 = var10.bind(var11)(var8, var9);
                        var8 = var7[var5];
                        var11 = var6.bind(var1)(var8);
                        var10 = var11.unsubscribe;
                        var9 = var4.handleAppStateUpdate;
                        var8 = 'APP_STATE_UPDATE';
                        var8 = var10.bind(var11)(var8, var9);
                        var5 = var7[var5];
                        var8 = var6.bind(var1)(var5);
                        var7 = var8.unsubscribe;
                        var6 = var4.handleWindowFocus;
                        var5 = 'WINDOW_FOCUS';
                        var5 = var7.bind(var8)(var5, var6);
                        var6 = var4.onTerminate;
                        var4 = null;
                        if(!(var4 != var6)) { _fun0010_ip = 49; continue _fun0010 }
case 50:
                        var5 = var6.call;
                        var4 = _closure3_slot0;
                        var4 = var5.bind(var6)(var4);
case 49:
                        var4 = _closure3_slot0;
                        var3 = var4.maybeFlushSeenItems;
                        var2 = _closure1_slot5;
                        var2 = var2.IMMEDIATE;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var3['terminate'] = var7;
                var7 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.id;
                        var3 = var1.force;
                        var2 = _closure3_slot0;
                        var2 = var2._id;
                        if(!(var2 === var4)) { _fun0011_ip = 2; continue _fun0011 }
case 51:
                        var2 = _closure3_slot0;
                        var1 = var2.maybeFlushSeenItems;
                        var1 = var1.bind(var2)(var3);
case 2:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3['handleFeedItemFlush'] = var7;
                var7 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.id;
                        var6 = var1.timestampMillis;
                        var3 = var1.feedItemId;
                        var1 = _closure3_slot0;
                        var1 = var1._id;
                        if(!(var4 === var1)) { _fun0012_ip = 52; continue _fun0012 }
case 53:
                        var1 = _closure3_slot0;
                        var4 = var1._paused;
                        var1 = _closure3_slot0;
                        if(var4) { _fun0012_ip = 13; continue _fun0012 }
case 54:
                        var4 = var1.getTrackedFeedItem;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.maybeMarkSeen;
                        var6 = var4.bind(var5)(var6);
                        var5 = var1.onFeedItemSeen;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0012_ip = 52; continue _fun0012 }
case 55:
                        var4 = var5.call;
                        var2 = _closure3_slot0;
                        var2 = var4.bind(var5)(var2, var3, var6);
                        _fun0012_ip = 52; continue _fun0012;
case 13:
                        var2 = var1._pausedFeedItemIds;
                        var1 = var2.add;
                        var1 = var1.bind(var2)(var3);
case 52:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3['handleFeedItemSeen'] = var7;
                var7 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.id;
                        var5 = var1.timestampMillis;
                        var6 = var1.feedItemId;
                        var2 = _closure3_slot0;
                        var2 = var2._id;
                        if(!(var3 === var2)) { _fun0013_ip = 56; continue _fun0013 }
case 53:
                        var2 = _closure3_slot0;
                        var2 = var2._paused;
                        if(!var2) { _fun0013_ip = 35; continue _fun0013 }
case 36:
                        var2 = _closure3_slot0;
                        var3 = var2._pausedFeedItemIds;
                        var2 = var3.delete;
                        var2 = var2.bind(var3)(var6);
case 35:
                        var2 = _closure3_slot0;
                        var3 = var2.getTrackedFeedItem;
                        var4 = var3.bind(var2)(var6);
                        var3 = var4.maybeMarkUnseen;
                        var5 = var3.bind(var4)(var5);
                        var4 = var2.onFeedItemUnseen;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0013_ip = 57; continue _fun0013 }
case 58:
                        var3 = var4.call;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2, var6, var5);
case 57:
                        var2 = _closure3_slot0;
                        var1 = var2.maybeFlushSeenItems;
                        var1 = var1.bind(var2)();
case 56:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3['handleFeedItemUnseen'] = var7;
                var7 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var2 = arg1;
                        var3 = _closure3_slot0;
                        var3 = var3.trackedFeedItems;
                        var4 = var3[var2];
                        var3 = null;
                        if(!(var3 == var4)) { _fun0014_ip = 30; continue _fun0014 }
case 59:
                        var3 = _closure3_slot0;
                        var4 = var3.trackedFeedItems;
                        var3 = _closure1_slot6;
                        var5 = var3.prototype;
                        var5 = Object.create(var5, {constructor: {value: var3}});
                        var6 = var5;
                        var3 = new var6[var3](var5);
                        var3 = var3 instanceof Object ? var3 : var5;
                        var4[var2] = var3;
case 30:
                        var1 = _closure3_slot0;
                        var1 = var1.trackedFeedItems;
                        var1 = var1[var2];
                        return var1;
                    }
                };
                var3['getTrackedFeedItem'] = var7;
                var7 = function() {
                    var1 = global;
                    var4 = var1.Object;
                    var3 = var4.keys;
                    var2 = _closure3_slot0;
                    var2 = var2.trackedFeedItems;
                    var4 = var3.bind(var4)(var2);
                    var3 = var1.Set;
                    var2 = var4.filter;
                    var1 = function(arg1) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var1 = _closure3_slot0;
                            var2 = var1.trackedFeedItems;
                            var1 = arg1;
                            var3 = var2[var1];
                            var1 = null;
                            var2 = var1 == var3;
                            var1 = undefined;
                            if(var2) { _fun0015_ip = 60; continue _fun0015 }
case 51:
                            var2 = var3.isVisible;
                            var1 = var2.bind(var3)();
case 60:
                            return var1;
                        }
                    };
                    var5 = var2.bind(var4)(var1);
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var6 = var2;
                    var1 = new var6[var3](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                };
                var3['getVisibleFeedItemIds'] = var7;
                var7 = function(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.state;
                        var1 = 'active';
                        var1 = var1 === var2;
                        if(!var1) { _fun0016_ip = 61; continue _fun0016 }
case 62:
                        var3 = _closure3_slot0;
                        var1 = var3._isReactNavigationFocused;
case 61:
                        if(!var1) { _fun0016_ip = 63; continue _fun0016 }
case 64:
                        var3 = _closure3_slot0;
                        var1 = var3.resume;
                        var1 = var1.bind(var3)();
case 63:
                        var1 = 'background';
                        if(!(var1 === var2)) { _fun0016_ip = 65; continue _fun0016 }
case 66:
                        var2 = _closure3_slot0;
                        var2 = var2._isReactNavigationFocused;
                        if(!var2) { _fun0016_ip = 67; continue _fun0016 }
case 68:
                        var3 = _closure3_slot0;
                        var2 = var3.pause;
                        var2 = var2.bind(var3)();
case 67:
                        var3 = _closure3_slot0;
                        var2 = var3.maybeFlushSeenItems;
                        var1 = _closure1_slot5;
                        var1 = var1.IMMEDIATE;
                        var1 = var2.bind(var3)(var1);
case 65:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3['handleAppStateUpdate'] = var7;
                var7 = function() {
                    var2 = _closure3_slot0;
                    var1 = global;
                    var1 = var1.Set;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {constructor: {value: var1}});
                    var4 = var3;
                    var1 = new var4[var1](var3);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var2['_pausedFeedItemIds'] = var1;
                    var1 = false;
                    var2['_paused'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var3['clearPausedFeedItemIds'] = var7;
                var7 = function() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2._paused;
                        if(var2) { _fun0017_ip = 7; continue _fun0017 }
case 69:
                        var2 = _closure3_slot0;
                        var1 = var2.getVisibleFeedItemIds;
                        var1 = var1.bind(var2)();
                        var4 = var1.forEach;
                        var3 = function(arg1) {
                            var3 = _closure3_slot0;
                            var2 = var3.handleFeedItemUnseen;
                            var1 = {};
                            var4 = var3._id;
                            var1['id'] = var4;
                            var4 = arg1;
                            var1['feedItemId'] = var4;
                            var4 = global;
                            var5 = var4.Date;
                            var4 = var5.now;
                            var4 = var4.bind(var5)();
                            var1['timestampMillis'] = var4;
                            var4 = 'ANALYTICS_FEED_ITEM_UNSEEN';
                            var1['type'] = var4;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var3 = var4.bind(var1)(var3);
                        var3 = true;
                        var2['_paused'] = var3;
                        var2['_pausedFeedItemIds'] = var1;
case 7:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3['pause'] = var7;
                var7 = function() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2._paused;
                        if(!var2) { _fun0018_ip = 7; continue _fun0018 }
case 69:
                        var2 = _closure3_slot0;
                        var1 = false;
                        var2['_paused'] = var1;
                        var4 = var2._pausedFeedItemIds;
                        var3 = var4.forEach;
                        var1 = function(arg1) {
                            var3 = _closure3_slot0;
                            var2 = var3.handleFeedItemSeen;
                            var1 = {};
                            var4 = var3._id;
                            var1['id'] = var4;
                            var4 = arg1;
                            var1['feedItemId'] = var4;
                            var4 = global;
                            var5 = var4.Date;
                            var4 = var5.now;
                            var4 = var4.bind(var5)();
                            var1['timestampMillis'] = var4;
                            var4 = 'ANALYTICS_FEED_ITEM_SEEN';
                            var1['type'] = var4;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var1 = var3.bind(var4)(var1);
                        var1 = var2.clearPausedFeedItemIds;
                        var1 = var1.bind(var2)();
case 7:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3['resume'] = var7;
                var7 = function(arg1) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var3 = arg1;
                        var1['_isReactNavigationFocused'] = var3;
                        var1 = var1._isReactNavigationFocused;
                        var2 = _closure3_slot0;
                        if(var1) { _fun0019_ip = 60; continue _fun0019 }
case 70:
                        var1 = var2.pause;
                        var1 = var1.bind(var2)();
                        _fun0019_ip = 71; continue _fun0019;
case 60:
                        var1 = var2.resume;
                        var1 = var1.bind(var2)();
case 71:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3['handleReactNavigationFocus'] = var7;
                var6 = function(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var1 = arg1;
                        var3 = _closure3_slot0;
                        var4 = var3._windowId;
                        var3 = var1.windowId;
                        if(!(var4 === var3)) { _fun0020_ip = 7; continue _fun0020 }
case 59:
                        var1 = var1.focused;
                        var2 = _closure3_slot0;
                        if(var1) { _fun0020_ip = 71; continue _fun0020 }
case 72:
                        var1 = var2.pause;
                        var1 = var1.bind(var2)();
                        _fun0020_ip = 7; continue _fun0020;
case 71:
                        var1 = var2.resume;
                        var1 = var1.bind(var2)();
case 7:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3['handleWindowFocus'] = var6;
                var6 = {};
                var3['trackedFeedItems'] = var6;
                var3['_id'] = var4;
                var3['_windowId'] = var2;
                var2 = global;
                var4 = var2.Set;
                var6 = var4.prototype;
                var6 = Object.create(var6, {constructor: {value: var4}});
                var11 = var6;
                var4 = new var11[var4](var10);
                var4 = var4 instanceof Object ? var4 : var6;
                var3['_pausedFeedItemIds'] = var4;
                var4 = null;
                var4 = var4 != var5;
                if(!var4) { _fun0008_ip = 73; continue _fun0008 }
case 74:
                var4 = var5;
case 73:
                var3['_paused'] = var4;
                var4 = true;
                var3['_isReactNavigationFocused'] = var4;
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var3['_lastFlushTimeMillis'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var5 = 'maybeFlushSeenItems';
        var1['key'] = var5;
        var2 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var6 = arg1;
                var8 = this;
                var7 = null;
                if(!(var7 == var6)) { _fun0021_ip = 54; continue _fun0021 }
case 32:
                var1 = global;
                var3 = var1.Date;
                var2 = var3.now;
                var3 = var2.bind(var3)();
                var2 = var8._lastFlushTimeMillis;
                var3 = var3 - var2;
                var2 = 60000;
                if(!(!(var3 < var2))) { _fun0021_ip = 75; continue _fun0021 }
case 54:
                var2 = _closure1_slot5;
                var2 = var2.IMMEDIATE_WITH_COOLDOWN;
                if(!(var6 === var2)) { _fun0021_ip = 48; continue _fun0021 }
case 46:
                var2 = global;
                var9 = var2.Date;
                var5 = var9.now;
                var9 = var5.bind(var9)();
                var5 = var8._lastFlushTimeMillis;
                var9 = var9 - var5;
                var5 = 3000;
                if(!(!(var9 < var5))) { _fun0021_ip = 76; continue _fun0021 }
case 48:
                var5 = var8.createFlushSeenItemsFunction;
                var5 = var5.bind(var8)(var6);
                var _closure3_slot0 = var5;
                if(!(var7 != var5)) { _fun0021_ip = 77; continue _fun0021 }
case 78:
                var5 = global;
                var9 = var5.Date;
                var7 = var9.now;
                var7 = var7.bind(var9)();
                var8['_lastFlushTimeMillis'] = var7;
                var7 = _closure1_slot5;
                var7 = var7.IMMEDIATE;
                if(!(var6 !== var7)) { _fun0021_ip = 79; continue _fun0021 }
case 80:
                var3 = _closure1_slot5;
                var3 = var3.IMMEDIATE_WITH_COOLDOWN;
                if(!(var6 !== var3)) { _fun0021_ip = 79; continue _fun0021 }
case 81:
                var7 = var5.Promise;
                var3 = var7.prototype;
                var6 = Object.create(var3, {constructor: {value: var7}});
                var10 = function(arg1) {
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var1 = global;
                    var4 = var1.setTimeout;
                    var3 = _closure1_slot2;
                    var1 = undefined;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0022_ip = 82; continue _fun0022 }
case 83:
                                var2 = _closure3_slot0;
                                var3 = undefined;
                                var2 = var2.bind(var3)();
                                SaveGenerator(address=24);
case 84:
                                return var2;
case 85:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0022_ip = 86; continue _fun0022 }
case 3:
                                var4 = _closure4_slot0;
                                var4 = var4.bind(var3)();
                                return var3;
case 86:
                                return var2;
case 82:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var3 = var3.bind(var1)(var2);
                    var2 = 100;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var11 = var6;
                var3 = new var11[var7](var10, var9);
                var3 = var3 instanceof Object ? var3 : var6;
                _fun0021_ip = 87; continue _fun0021;
case 79:
                var6 = var5.Promise;
                var5 = function() {
                    var4 = _closure1_slot2;
                    var3 = undefined;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0023_ip = 88; continue _fun0023 }
case 83:
                                var2 = _closure3_slot0;
                                var3 = undefined;
                                var2 = var2.bind(var3)();
                                SaveGenerator(address=24);
case 84:
                                return var2;
case 85:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0023_ip = 37; continue _fun0023 }
case 3:
                                var4 = arg1;
                                var4 = var4.bind(var3)();
                                return var3;
case 37:
                                return var2;
case 88:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var4 = undefined;
                var10 = var5.bind(var4)();
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var11 = var5;
                var4 = new var11[var6](var10, var9);
                var3 = var4 instanceof Object ? var4 : var5;
case 87:
                _fun0021_ip = 89; continue _fun0021;
case 77:
                var4 = global;
                var5 = var4.Promise;
                var4 = var5.resolve;
                var3 = var4.bind(var5)();
case 89:
                return var3;
case 76:
                var3 = var2.Promise;
                var2 = var3.resolve;
                var2 = var2.bind(var3)();
                return var2;
case 75:
                var2 = var1.Promise;
                var1 = var2.resolve;
                var1 = var1.bind(var2)();
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var7 = 5;
    var8 = var8[var7];
    var7 = require;
    var9 = var7.bind(var1)(var8);
    var8 = var9.fileFinishedImporting;
    var7 = 'utils/AnalyticsFeedItemSeenManager.tsx';
    var7 = var8.bind(var9)(var7);
    var3['AnalyticsFeedTypes'] = var6;
    var3['ForceFlushType'] = var5;
    var3['TrackedFeedItem'] = var4;
    var3['AnalyticsFeedItemSeenManager'] = var2;
    return var1;
})();