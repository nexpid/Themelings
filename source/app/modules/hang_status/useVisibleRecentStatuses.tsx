// app/modules/hang_status/useVisibleRecentStatuses.tsx
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hang_status/useVisibleRecentStatuses.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useVisibleRecentStatuses() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresObject;
        var2 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var1 = {};
            var3 = _closure1_slot3;
            var2 = var3.getRecentStatuses;
            var2 = var2.bind(var3)();
            var1['recentStatuses'] = var2;
            var2 = var3.getCurrentHangStatus;
            var2 = var2.bind(var3)();
            var1['currentHangStatus'] = var2;
            var2 = var3.getCustomHangStatus;
            var2 = var2.bind(var3)();
            var1['customHangStatus'] = var2;
            var2 = var3.getFavoritedStatuses;
            var2 = var2.bind(var3)();
            var1['favoritedStatuses'] = var2;
            return var1;
        };
        var2 = var4.bind(var5)(var3, var2);
        var3 = var2.recentStatuses;
        var4 = var2.currentHangStatus;
        var _closure2_slot0 = var4;
        var4 = var2.customHangStatus;
        var _closure2_slot1 = var4;
        var2 = var2.favoritedStatuses;
        var4 = var2.length;
        var2 = 6;
        var4 = var2 - var4;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = arg1;
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 2;
                var2 = var5[var2];
                var5 = undefined;
                var2 = var3.bind(var5)(var2);
                var2 = var2.bind(var5)(var4);
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 3;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = _closure2_slot1;
                var2 = var3.bind(var5)(var4, var2);
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var3 = _closure2_slot0;
                var2 = var4 === var3;
case 4:
                var3 = _closure1_slot3;
                var1 = var3.isFavorited;
                var1 = var1.bind(var3)(var4);
                var1 = !var1;
                if(!var1) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var1 = !var2;
case 5:
                return var1;
            }
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.slice;
        var1 = 0;
        var1 = var2.bind(var3)(var1, var4);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();