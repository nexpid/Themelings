// app/modules/activities/useIsActivitiesAvailableInShelf.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/useIsActivitiesAvailableInShelf.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsActivitiesAvailableInShelf(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 1;
            var1 = var8[var1];
            var6 = undefined;
            var2 = var2.bind(var6)(var1);
            var1 = var2.useIsActivitiesEnabledForCurrentPlatform;
            var2 = var1.bind(var2)();
            var _closure2_slot1 = var2;
            var5 = _closure1_slot1;
            var1 = 2;
            var1 = var8[var1];
            var5 = var5.bind(var6)(var1);
            var1 = arg2;
            var5 = var5.bind(var6)(var1);
            var1 = null;
            var1 = var1 != var7;
            if(!var1) { _fun0001_ip = 89; continue _fun0001 }
 81:
            var6 = '';
            var1 = var6 !== var7;
 89:
            if(var1) { _fun0001_ip = 95; continue _fun0001 }
 92:
            var1 = var5;
 95:
            var _closure2_slot2 = var1;
            var6 = _closure1_slot3;
            var5 = var6.useEffect;
            var4 = new Array(3);
            var4[0] = var7;
            var4[1] = var2;
            var4[2] = var1;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0002_ip = 14; continue _fun0002 }
 10:
                    var1 = _closure2_slot1;
 14:
                    if(!var1) { _fun0002_ip = 63; continue _fun0002 }
 17:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.fetchShelf;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1['guildId'] = var4;
                    var1 = var2.bind(var3)(var1);
 63:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var3, var4);
            if(!var1) { _fun0001_ip = 141; continue _fun0001 }
 138:
            var1 = var2;
 141:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();