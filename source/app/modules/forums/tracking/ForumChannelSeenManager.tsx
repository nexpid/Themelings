// app/modules/forums/tracking/ForumChannelSeenManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var4 = function getForumPostSeenManagerId(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.AnalyticsFeedTypes;
        var5 = var1.FORUM_CHANNEL;
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = '';
        var2 = '_';
        var1 = arg1;
        var1 = var4.bind(var3)(var5, var2, var1);
        return var1;
    };
    var _closure1_slot8 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var6 = var5.AnalyticsFeedItemSeenManager;
    var5 = function(arg1) {
        var3 = function ForumChannelSeenManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var8 = this;
                var3 = var1.guildId;
                var4 = var1.channelId;
                var10 = var1.windowId;
                var9 = var1.isPaused;
                var1 = _closure1_slot3;
                var7 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var8, var7);
                var1 = {};
                var1['windowId'] = var10;
                var1['isPaused'] = var9;
                var9 = _closure1_slot8;
                var9 = var9.bind(var5)(var4);
                var1['id'] = var9;
                var13 = new Array(1);
                var13[0] = var1;
                var1 = _closure1_slot5;
                var12 = var1.bind(var5)(var7);
                var7 = _closure1_slot4;
                var1 = _closure1_slot7;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 122; continue _fun0002 }
 109:
                var1 = var12.apply;
                var1 = var1.bind(var12)(var8, var13);
                _fun0002_ip = 156; continue _fun0002;
 122:
                var9 = global;
                var11 = var9.Reflect;
                var10 = var11.construct;
                var9 = _closure1_slot5;
                var9 = var9.bind(var5)(var8);
                var9 = var9.constructor;
                var1 = var10.bind(var11)(var12, var13, var9);
 156:
                var1 = var7.bind(var5)(var8, var1);
                var _closure3_slot0 = var1;
                var6 = function(arg1) {
                    var4 = _closure3_slot0;
                    var3 = var4.trackedFeedItems;
                    var5 = var4.channelId;
                    var2 = {};
                    var6 = var4.guildId;
                    var2['guildId'] = var6;
                    var2['channelId'] = var5;
                    var4 = var4.sessionId;
                    var2['sessionId'] = var4;
                    var2['trackedFeedItems'] = var3;
                    var4 = null;
                    var3 = arg1;
                    var3 = var4 != var3;
                    var2['isForcedFlush'] = var3;
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = _closure4_slot0;
                            var8 = var1.guildId;
                            var7 = var1.channelId;
                            var6 = var1.sessionId;
                            var11 = var1.trackedFeedItems;
                            var10 = var1.isForcedFlush;
                            var5 = new Array(0);
                            var4 = new Array(0);
                            var1 = global;
                            var2 = var1.Object;
                            var1 = var2.keys;
                            var9 = var1.bind(var2)(var11);
                            var1 = var9.length;
                            var2 = 0;
                            var1 = var2 < var1;
                            var3 = 0;
                            if(!var1) { _fun0003_ip = 134; continue _fun0003 }
 77:
                            var13 = var9[var3];
                            var12 = var11[var13];
                            var1 = var12.computeSeenTimeDestructive;
                            var12 = var1.bind(var12)(var10);
                            if(!(var12 > var2)) { _fun0003_ip = 122; continue _fun0003 }
 102:
                            var1 = var5.push;
                            var1 = var1.bind(var5)(var13);
                            var1 = var4.push;
                            var1 = var1.bind(var4)(var12);
 122:
                            var3 = var3 + 1;
                            var1 = var9.length;
                            if(var3 < var1) { _fun0003_ip = 77; continue _fun0003 }
 134:
                            var1 = var5.length;
                            if(!(var2 !== var1)) { _fun0003_ip = 204; continue _fun0003 }
 143:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 7;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.trackForumChannelSeenBatch;
                            var1 = {};
                            var1['guildId'] = var8;
                            var1['channelId'] = var7;
                            var1['sessionId'] = var6;
                            var1['postIds'] = var5;
                            var1['additionalTimes'] = var4;
                            var1 = var2.bind(var3)(var1);
 204:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                };
                var1['createFlushSeenItemsFunction'] = var6;
                var1['guildId'] = var3;
                var1['channelId'] = var4;
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 8;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.getForumChannelSessionId;
                var2 = var2.bind(var3)(var4);
                var1['sessionId'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot2;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var5 = var5.bind(var1)(var6);
    var6 = 9;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/forums/tracking/ForumChannelSeenManager.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['getForumPostSeenManagerId'] = var4;
    var4 = function markForumPostItemAsSeen(arg1, arg2, arg3) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var6 = var4.bind(var1)(var3);
        var5 = var6.markAnalyticsFeedItemSeen;
        var3 = _closure1_slot8;
        var2 = arg1;
        var4 = var3.bind(var1)(var2);
        var3 = arg2;
        var2 = arg3;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['markForumPostItemAsSeen'] = var4;
    var2 = function markForumPostItemAsUnseen(arg1, arg2, arg3) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var6 = var4.bind(var1)(var3);
        var5 = var6.markAnalyticsFeedItemUnseen;
        var3 = _closure1_slot8;
        var2 = arg1;
        var4 = var3.bind(var1)(var2);
        var3 = arg2;
        var2 = arg3;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['markForumPostItemAsUnseen'] = var2;
    return var1;
})();