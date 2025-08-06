// app/modules/favorites/useGuildIdForChannelRoute.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FAVORITES;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/favorites/useGuildIdForChannelRoute.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useGuildIdForChannelRoute(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 3;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.useStateFromStores;
            var1 = _closure1_slot2;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var4.bind(var5)(var2, var1);
            var2 = null;
            if(!(var2 == var1)) { _fun0001_ip = 74; continue _fun0001 }
 64:
            var2 = var3.getGuildId;
            var1 = var2.bind(var3)();
 74:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function getGuildIdForGenericRedirect(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var4 = _closure1_slot2;
            var1 = var4.getGuildId;
            var4 = var1.bind(var4)();
            var1 = _closure1_slot4;
            if(!(var4 === var1)) { _fun0002_ip = 106; continue _fun0002 }
 28:
            var5 = _closure1_slot3;
            var4 = var5.isFavorite;
            var1 = var3.id;
            var1 = var4.bind(var5)(var1);
            if(var1) { _fun0002_ip = 100; continue _fun0002 }
 51:
            var1 = var3.isThread;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0002_ip = 88; continue _fun0002 }
 64:
            var5 = _closure1_slot3;
            var4 = var5.isFavorite;
            var1 = var3.parent_id;
            var1 = var4.bind(var5)(var1);
            if(var1) { _fun0002_ip = 100; continue _fun0002 }
 88:
            var1 = var3.getGuildId;
            var1 = var1.bind(var3)();
            _fun0002_ip = 104; continue _fun0002;
 100:
            var1 = _closure1_slot4;
 104:
            _fun0002_ip = 116; continue _fun0002;
 106:
            var2 = var3.getGuildId;
            var1 = var2.bind(var3)();
 116:
            return var1;
        }
    };
    var3['getGuildIdForGenericRedirect'] = var2;
    return var1;
})();