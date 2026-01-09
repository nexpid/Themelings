// app/modules/local_message_caching/LocalMessageCacheStatsManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function makeLogLine(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var1 = var4.channelId;
            var3 = new Array(4);
            var3[0] = var1;
            var1 = var4.localMessageDetails;
            var6 = null;
            var5 = var6 != var1;
            var1 = '-1';
            var2 = var1;
            if(!var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = var4.localMessageDetails;
            var7 = var5.loadTime;
            var5 = var4.startTime;
            var2 = var7 - var5;
case 6:
            var3[1] = var2;
            var2 = var4.networkMessageDetails;
            var2 = var6 != var2;
            if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var4.networkMessageDetails;
            var5 = var2.loadTime;
            var2 = var4.startTime;
            var1 = var5 - var2;
case 8:
            var3[2] = var1;
            var1 = var4.localMessageDetails;
            var2 = var6 == var1;
            var5 = 'incomplete';
            var1 = var5;
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = var4.networkMessageDetails;
            var2 = var6 == var2;
            var1 = var5;
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 12:
            var2 = var4.localMessageDetails;
            var7 = var2.count;
            var2 = var4.networkMessageDetails;
            var5 = var2.count;
            var6 = 'mismatch';
            var2 = var6;
            if(!(var7 === var5)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var5 = var4.localMessageDetails;
            var5 = var5.lastMessageId;
            var4 = var4.networkMessageDetails;
            var4 = var4.lastMessageId;
            var2 = var6;
            if(!(var5 === var4)) { _fun0002_ip = 13; continue _fun0002 }
case 15:
            var2 = 'match';
case 13:
            var1 = var2;
case 10:
            var3[3] = var1;
            var2 = var3.join;
            var1 = ':';
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function handleAppStateUpdate(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.state;
            var1 = _closure1_slot8;
            var1 = var1.BACKGROUND;
            if(!(var2 === var1)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var1 = global;
            var3 = var1.Array;
            var2 = var3.from;
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var6 = 6;
            var1 = var10[var6];
            var8 = undefined;
            var1 = var9.bind(var8)(var1);
            var4 = var1.fetchLogs;
            var1 = var4.values;
            var1 = var1.bind(var4)();
            var3 = var2.bind(var3)(var1);
            var2 = var3.map;
            var1 = _closure1_slot11;
            var5 = var2.bind(var3)(var1);
            var1 = 7;
            var1 = var10[var1];
            var4 = var9.bind(var8)(var1);
            var3 = var4.track;
            var1 = _closure1_slot7;
            var2 = var1.CACHE_STATS_RECORDED;
            var1 = {};
            var11 = var10[var6];
            var11 = var9.bind(var8)(var11);
            var11 = var11.channelsFetchStarted;
            var11 = var11.size;
            var1['num_channels_fetch_started'] = var11;
            var11 = var10[var6];
            var11 = var9.bind(var8)(var11);
            var11 = var11.channelsFetchedWithLocalMessages;
            var11 = var11.size;
            var1['num_channels_local_cached'] = var11;
            var6 = var10[var6];
            var6 = var9.bind(var8)(var6);
            var6 = var6.channelsFetchedNetwork;
            var6 = var6.size;
            var1['num_channels_fetched_network'] = var6;
            var6 = _closure1_slot9;
            var6 = var6 + 1;
            _closure1_slot9 = var6;
            var1['num_times_backgrounded'] = var6;
            var1['fetch_entries'] = var5;
            var1 = var3.bind(var4)(var2, var1);
case 16:
            var1 = undefined;
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
    var4 = 0;
    var8 = var6[var4];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.AnalyticEvents;
    var _closure1_slot7 = var9;
    var8 = var8.AppStates;
    var _closure1_slot8 = var8;
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function LocalMessageCacheStatsManager(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot3;
                var2 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot10;
                var1 = var1.bind(var4)();
                if(var1) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0004_ip = 20; continue _fun0004;
case 18:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 20:
                var1 = var2.bind(var4)(var5, var1);
                var2 = {};
                var3 = _closure1_slot12;
                var2['APP_STATE_UPDATE'] = var3;
                var1['actions'] = var2;
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
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/local_message_caching/LocalMessageCacheStatsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();