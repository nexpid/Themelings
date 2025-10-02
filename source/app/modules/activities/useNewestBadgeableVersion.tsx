// app/modules/activities/useNewestBadgeableVersion.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.useEffect;
    var _closure1_slot2 = var7;
    var4 = var4.useMemo;
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/useNewestBadgeableVersion.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = var2.surface;
            var _closure2_slot0 = var5;
            var3 = var2.skipFetchingShelf;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = true;
case 2:
            var _closure2_slot1 = var3;
            var _closure2_slot2 = var4;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var6 = 2;
            var6 = var8[var6];
            var9 = var7.bind(var4)(var6);
            var8 = var9.useStateFromStores;
            var6 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var8.bind(var9)(var7, var6);
            _closure2_slot2 = var6;
            var8 = _closure1_slot2;
            var9 = var6.lastCheckedForBadgeableActivities;
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var7 = var1.lastCheckedForBadgeableActivities;
                    var4 = null;
                    var1 = var4 == var7;
                    if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = global;
                    var5 = var3.Date;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {constructor: {value: var5}});
                    var9 = var6;
                    var8 = var7;
                    var5 = new var9[var5](var8, var7);
                    var6 = var5 instanceof Object ? var5 : var6;
                    var5 = var6.getTime;
                    var5 = var5.bind(var6)();
                    var6 = var3.Date;
                    var3 = var6.now;
                    var6 = var3.bind(var6)();
                    var3 = 43200000;
                    var3 = var6 - var3;
                    var1 = var5 < var3;
case 4:
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = _closure2_slot1;
                    var1 = !var2;
case 6:
                    if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.fetchShelf;
                    var1 = {};
                    var1['guildId'] = var4;
                    var1 = var2.bind(var3)(var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var4)(var3, var7);
            var3 = _closure1_slot3;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getNewestBadgeableVersion;
                var1 = {};
                var5 = _closure2_slot2;
                var1['storeState'] = var5;
                var4 = _closure2_slot0;
                var1['surface'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useNewestBadgeableVersion'] = var2;
    return var1;
})();