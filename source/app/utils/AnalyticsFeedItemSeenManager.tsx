// app/utils/AnalyticsFeedItemSeenManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
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
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
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
            var9 = _closure1_slot8;
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
            var7 = _closure1_slot8;
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
 343:
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
 0:
                var2 = this;
                var3 = var2.seenIntervals;
                var1 = var2.seenIntervals;
                var4 = var1.length;
                var1 = 1;
                var1 = var4 - var1;
                var3 = var3[var1];
                var4 = null;
                var1 = var4 == var3;
                if(var1) { _fun0004_ip = 50; continue _fun0004 }
 40:
                var3 = var3.endTimeMillis;
                var1 = var4 != var3;
 50:
                if(!var1) { _fun0004_ip = 81; continue _fun0004 }
 53:
                var4 = var2.seenIntervals;
                var3 = var4.push;
                var2 = {};
                var5 = arg1;
                var2['startTimeMillis'] = var5;
                var2 = var3.bind(var4)(var2);
                var1 = true;
 81:
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
 0:
                var1 = this;
                var2 = var1.seenIntervals;
                var1 = var1.seenIntervals;
                var3 = var1.length;
                var1 = 1;
                var1 = var3 - var1;
                var3 = var2[var1];
                var4 = null;
                var1 = var4 != var3;
                if(!var1) { _fun0005_ip = 50; continue _fun0005 }
 40:
                var2 = var3.endTimeMillis;
                var1 = var4 == var2;
 50:
                if(!var1) { _fun0005_ip = 64; continue _fun0005 }
 53:
                var2 = arg1;
                var3['endTimeMillis'] = var2;
                var1 = true;
 64:
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
 0:
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
                if(var5) { _fun0006_ip = 48; continue _fun0006 }
 42:
                var1 = var4.startTimeMillis;
 48:
                var1 = var3 != var1;
                if(!var1) { _fun0006_ip = 74; continue _fun0006 }
 55:
                var5 = var3 == var4;
                var2 = undefined;
                if(var5) { _fun0006_ip = 70; continue _fun0006 }
 64:
                var2 = var4.endTimeMillis;
 70:
                var1 = var3 == var2;
 74:
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
 0:
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
                if(var6) { _fun0007_ip = 178; continue _fun0007 }
 56:
                var6 = var9.value;
                var13 = var6.endTimeMillis;
                if(!(var10 != var13)) { _fun0007_ip = 93; continue _fun0007 }
 71:
                var14 = var6.endTimeMillis;
                var13 = var6.startTimeMillis;
                var13 = var14 - var13;
                var13 = var7 + var13;
                _fun0007_ip = 157; continue _fun0007;
 93:
                if(var12) { _fun0007_ip = 111; continue _fun0007 }
 96:
                var14 = var2.push;
                var14 = var14.bind(var2)(var6);
                var13 = var7;
                _fun0007_ip = 157; continue _fun0007;
 111:
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
 157:
                var14 = var11.bind(var8)();
                var6 = var14.done;
                var7 = var13;
                var9 = var14;
                var3 = var7;
                if(!var6) { _fun0007_ip = 56; continue _fun0007 }
 178:
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
 0:
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
 0:
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
                        if(!(var3 != var4)) { _fun0009_ip = 212; continue _fun0009 }
 198:
                        var3 = var4.call;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
 212:
                        return var1;
                    }
                };
                var3['initialize'] = var7;
                var7 = function() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
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
                        if(!(var4 != var6)) { _fun0010_ip = 212; continue _fun0010 }
 198:
                        var5 = var6.call;
                        var4 = _closure3_slot0;
                        var4 = var5.bind(var6)(var4);
 212:
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
 0:
                        var1 = arg1;
                        var4 = var1.id;
                        var3 = var1.force;
                        var2 = _closure3_slot0;
                        var2 = var2._id;
                        if(!(var2 === var4)) { _fun0011_ip = 46; continue _fun0011 }
 31:
                        var2 = _closure3_slot0;
                        var1 = var2.maybeFlushSeenItems;
                        var1 = var1.bind(var2)(var3);
 46:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3['handleFeedItemFlush'] = var7;
                var7 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.id;
                        var6 = var1.timestampMillis;
                        var3 = var1.feedItemId;
                        var1 = _closure3_slot0;
                        var1 = var1._id;
                        if(!(var4 === var1)) { _fun0012_ip = 126; continue _fun0012 }
 37:
                        var1 = _closure3_slot0;
                        var4 = var1._paused;
                        var1 = _closure3_slot0;
                        if(var4) { _fun0012_ip = 110; continue _fun0012 }
 54:
                        var4 = var1.getTrackedFeedItem;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.maybeMarkSeen;
                        var6 = var4.bind(var5)(var6);
                        var5 = var1.onFeedItemSeen;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0012_ip = 126; continue _fun0012 }
 92:
                        var4 = var5.call;
                        var2 = _closure3_slot0;
                        var2 = var4.bind(var5)(var2, var3, var6);
                        _fun0012_ip = 126; continue _fun0012;
 110:
                        var2 = var1._pausedFeedItemIds;
                        var1 = var2.add;
                        var1 = var1.bind(var2)(var3);
 126:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3['handleFeedItemSeen'] = var7;
                var7 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.id;
                        var5 = var1.timestampMillis;
                        var6 = var1.feedItemId;
                        var2 = _closure3_slot0;
                        var2 = var2._id;
                        if(!(var3 === var2)) { _fun0013_ip = 142; continue _fun0013 }
 37:
                        var2 = _closure3_slot0;
                        var2 = var2._paused;
                        if(!var2) { _fun0013_ip = 70; continue _fun0013 }
 50:
                        var2 = _closure3_slot0;
                        var3 = var2._pausedFeedItemIds;
                        var2 = var3.delete;
                        var2 = var2.bind(var3)(var6);
 70:
                        var2 = _closure3_slot0;
                        var3 = var2.getTrackedFeedItem;
                        var4 = var3.bind(var2)(var6);
                        var3 = var4.maybeMarkUnseen;
                        var5 = var3.bind(var4)(var5);
                        var4 = var2.onFeedItemUnseen;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0013_ip = 128; continue _fun0013 }
 112:
                        var3 = var4.call;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2, var6, var5);
 128:
                        var2 = _closure3_slot0;
                        var1 = var2.maybeFlushSeenItems;
                        var1 = var1.bind(var2)();
 142:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3['handleFeedItemUnseen'] = var7;
                var7 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                        var2 = arg1;
                        var3 = _closure3_slot0;
                        var3 = var3.trackedFeedItems;
                        var4 = var3[var2];
                        var3 = null;
                        if(!(var3 == var4)) { _fun0014_ip = 67; continue _fun0014 }
 26:
                        var3 = _closure3_slot0;
                        var4 = var3.trackedFeedItems;
                        var3 = _closure1_slot6;
                        var5 = var3.prototype;
                        var5 = Object.create(var5, {constructor: {value: var3}});
                        var6 = var5;
                        var3 = new var6[var3](var5);
                        var3 = var3 instanceof Object ? var3 : var5;
                        var4[var2] = var3;
 67:
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
 0:
                            var1 = _closure3_slot0;
                            var2 = var1.trackedFeedItems;
                            var1 = arg1;
                            var3 = var2[var1];
                            var1 = null;
                            var2 = var1 == var3;
                            var1 = undefined;
                            if(var2) { _fun0015_ip = 41; continue _fun0015 }
 31:
                            var2 = var3.isVisible;
                            var1 = var2.bind(var3)();
 41:
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
 0:
                        var1 = arg1;
                        var2 = var1.state;
                        var1 = 'active';
                        var1 = var1 === var2;
                        if(!var1) { _fun0016_ip = 32; continue _fun0016 }
 19:
                        var3 = _closure3_slot0;
                        var1 = var3._isReactNavigationFocused;
 32:
                        if(!var1) { _fun0016_ip = 52; continue _fun0016 }
 35:
                        var3 = _closure3_slot0;
                        var1 = var3.resume;
                        var1 = var1.bind(var3)();
 52:
                        var1 = 'background';
                        if(!(var1 === var2)) { _fun0016_ip = 118; continue _fun0016 }
 60:
                        var2 = _closure3_slot0;
                        var2 = var2._isReactNavigationFocused;
                        if(!var2) { _fun0016_ip = 90; continue _fun0016 }
 76:
                        var3 = _closure3_slot0;
                        var2 = var3.pause;
                        var2 = var2.bind(var3)();
 90:
                        var3 = _closure3_slot0;
                        var2 = var3.maybeFlushSeenItems;
                        var1 = _closure1_slot5;
                        var1 = var1.IMMEDIATE;
                        var1 = var2.bind(var3)(var1);
 118:
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
 0:
                        var2 = _closure3_slot0;
                        var2 = var2._paused;
                        if(var2) { _fun0017_ip = 61; continue _fun0017 }
 16:
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
 61:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3['pause'] = var7;
                var7 = function() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var2 = _closure3_slot0;
                        var2 = var2._paused;
                        if(!var2) { _fun0018_ip = 61; continue _fun0018 }
 16:
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
 61:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3['resume'] = var7;
                var7 = function(arg1) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                        var1 = _closure3_slot0;
                        var3 = arg1;
                        var1['_isReactNavigationFocused'] = var3;
                        var1 = var1._isReactNavigationFocused;
                        var2 = _closure3_slot0;
                        if(var1) { _fun0019_ip = 41; continue _fun0019 }
 29:
                        var1 = var2.pause;
                        var1 = var1.bind(var2)();
                        _fun0019_ip = 51; continue _fun0019;
 41:
                        var1 = var2.resume;
                        var1 = var1.bind(var2)();
 51:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3['handleReactNavigationFocus'] = var7;
                var6 = function(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                        var1 = arg1;
                        var3 = _closure3_slot0;
                        var4 = var3._windowId;
                        var3 = var1.windowId;
                        if(!(var4 === var3)) { _fun0020_ip = 61; continue _fun0020 }
 26:
                        var1 = var1.focused;
                        var2 = _closure3_slot0;
                        if(var1) { _fun0020_ip = 51; continue _fun0020 }
 39:
                        var1 = var2.pause;
                        var1 = var1.bind(var2)();
                        _fun0020_ip = 61; continue _fun0020;
 51:
                        var1 = var2.resume;
                        var1 = var1.bind(var2)();
 61:
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
                if(!var4) { _fun0008_ip = 260; continue _fun0008 }
 257:
                var4 = var5;
 260:
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
 0:
                var6 = arg1;
                var8 = this;
                var7 = null;
                if(!(var7 == var6)) { _fun0021_ip = 54; continue _fun0021 }
 14:
                var1 = global;
                var3 = var1.Date;
                var2 = var3.now;
                var3 = var2.bind(var3)();
                var2 = var8._lastFlushTimeMillis;
                var3 = var3 - var2;
                var2 = 60000;
                if(!(!(var3 < var2))) { _fun0021_ip = 294; continue _fun0021 }
 54:
                var2 = _closure1_slot5;
                var2 = var2.IMMEDIATE_WITH_COOLDOWN;
                if(!(var6 === var2)) { _fun0021_ip = 111; continue _fun0021 }
 71:
                var2 = global;
                var9 = var2.Date;
                var5 = var9.now;
                var9 = var5.bind(var9)();
                var5 = var8._lastFlushTimeMillis;
                var9 = var9 - var5;
                var5 = 3000;
                if(!(!(var9 < var5))) { _fun0021_ip = 276; continue _fun0021 }
 111:
                var5 = var8.createFlushSeenItemsFunction;
                var5 = var5.bind(var8)(var6);
                var _closure3_slot0 = var5;
                if(!(var7 != var5)) { _fun0021_ip = 256; continue _fun0021 }
 133:
                var5 = global;
                var9 = var5.Date;
                var7 = var9.now;
                var7 = var7.bind(var9)();
                var8['_lastFlushTimeMillis'] = var7;
                var7 = _closure1_slot5;
                var7 = var7.IMMEDIATE;
                if(!(var6 !== var7)) { _fun0021_ip = 217; continue _fun0021 }
 170:
                var3 = _closure1_slot5;
                var3 = var3.IMMEDIATE_WITH_COOLDOWN;
                if(!(var6 !== var3)) { _fun0021_ip = 217; continue _fun0021 }
 184:
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
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0022_ip = 47; continue _fun0022 }
 7:
                                var2 = _closure3_slot0;
                                var3 = undefined;
                                var2 = var2.bind(var3)();
                                SaveGenerator(address=24);
 22:
                                return var2;
 24:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0022_ip = 44; continue _fun0022 }
 30:
                                var4 = _closure4_slot0;
                                var4 = var4.bind(var3)();
                                return var3;
 44:
                                return var2;
 47:
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
                _fun0021_ip = 254; continue _fun0021;
 217:
                var6 = var5.Promise;
                var5 = function() {
                    var4 = _closure1_slot2;
                    var3 = undefined;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0023_ip = 43; continue _fun0023 }
 7:
                                var2 = _closure3_slot0;
                                var3 = undefined;
                                var2 = var2.bind(var3)();
                                SaveGenerator(address=24);
 22:
                                return var2;
 24:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0023_ip = 40; continue _fun0023 }
 30:
                                var4 = arg1;
                                var4 = var4.bind(var3)();
                                return var3;
 40:
                                return var2;
 43:
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
 254:
                _fun0021_ip = 274; continue _fun0021;
 256:
                var4 = global;
                var5 = var4.Promise;
                var4 = var5.resolve;
                var3 = var4.bind(var5)();
 274:
                return var3;
 276:
                var3 = var2.Promise;
                var2 = var3.resolve;
                var2 = var2.bind(var3)();
                return var2;
 294:
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