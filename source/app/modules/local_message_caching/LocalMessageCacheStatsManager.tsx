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
    var1 = function handleAppStateUpdate(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.state;
            var1 = _closure1_slot8;
            var1 = var1.BACKGROUND;
            if(!(var2 === var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 6;
            var1 = var9[var1];
            var7 = undefined;
            var4 = var8.bind(var7)(var1);
            var3 = var4.track;
            var1 = _closure1_slot7;
            var2 = var1.CACHE_STATS_RECORDED;
            var1 = {};
            var5 = 7;
            var10 = var9[var5];
            var10 = var8.bind(var7)(var10);
            var10 = var10.channelsFetchStarted;
            var10 = var10.size;
            var1['num_channels_fetch_started'] = var10;
            var10 = var9[var5];
            var10 = var8.bind(var7)(var10);
            var10 = var10.channelsFetchedWithLocalMessages;
            var10 = var10.size;
            var1['num_channels_local_cached'] = var10;
            var5 = var9[var5];
            var5 = var8.bind(var7)(var5);
            var5 = var5.channelsFetchedNetwork;
            var5 = var5.size;
            var1['num_channels_fetched_network'] = var5;
            var5 = _closure1_slot9;
            var5 = var5 + 1;
            _closure1_slot9 = var5;
            var1['num_times_backgrounded'] = var5;
            var1 = var3.bind(var4)(var2, var1);
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0003_ip = 10; continue _fun0003;
case 8:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 10:
                var1 = var2.bind(var4)(var5, var1);
                var2 = {};
                var3 = _closure1_slot11;
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