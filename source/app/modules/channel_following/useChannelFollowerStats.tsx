// app/modules/channel_following/useChannelFollowerStats.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
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
    var7 = 1;
    var9 = var6[var7];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var9);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.HOUR;
    var4 = var7 * var4;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_following/useChannelFollowerStats.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useChannelFollowerStats(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var6 = _closure1_slot4;
        var4 = var6.useState;
        var2 = false;
        var5 = var4.bind(var6)(var2);
        var4 = _closure1_slot3;
        var8 = undefined;
        var2 = 2;
        var5 = var4.bind(var8)(var5, var2);
        var2 = 0;
        var2 = var5[var2];
        var _closure2_slot1 = var2;
        var4 = 1;
        var4 = var5[var4];
        var _closure2_slot2 = var4;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var4 = 4;
        var4 = var9[var4];
        var9 = var5.bind(var8)(var4);
        var8 = var9.useStateFromStores;
        var3 = _closure1_slot5;
        var5 = new Array(1);
        var5[0] = var3;
        var4 = new Array(1);
        var4[0] = var7;
        var3 = function() {
            var3 = _closure1_slot5;
            var2 = var3.getFollowerStatsForChannel;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var8.bind(var9)(var5, var3, var4);
        var _closure2_slot3 = var3;
        var5 = var6.useEffect;
        var4 = new Array(3);
        var4[0] = var7;
        var4[1] = var3;
        var4[2] = var2;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot3;
                var3 = null;
                if(!(var3 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var4 = var2.bind(var4)();
                var2 = _closure2_slot3;
                var2 = var2.lastFetched;
                var4 = var4 - var2;
                var2 = _closure1_slot6;
                if(!(var4 > var2)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
                var2 = _closure2_slot1;
                if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = _closure2_slot2;
                var5 = undefined;
                var2 = true;
                var2 = var4.bind(var5)(var2);
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 5;
                var2 = var6[var2];
                var5 = var4.bind(var5)(var2);
                var4 = var5.fetchChannelFollowerStats;
                var2 = _closure2_slot0;
                var2 = var4.bind(var5)(var2);
                _fun0001_ip = 6; continue _fun0001;
case 4:
                var2 = _closure2_slot3;
                var2 = var3 != var2;
                if(!var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                var2 = _closure2_slot1;
case 7:
                if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 9:
                var3 = _closure2_slot2;
                var2 = undefined;
                var1 = false;
                var1 = var3.bind(var2)(var1);
case 6:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var6)(var1, var4);
        var1 = new Array(2);
        var1[0] = var3;
        var1[1] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();