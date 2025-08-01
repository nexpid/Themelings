// app/modules/main_tabs_v2/navigator/useGuildsRouteGuildId.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/navigator/useGuildsRouteGuildId.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useGuildsRouteGuildId() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 0;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.useRoute;
            var2 = var2.bind(var3)();
            var2 = var2.params;
            var3 = null;
            var3 = var3 == var2;
            if(var3) { _fun0001_ip = 54; continue _fun0001 }
 49:
            var1 = var2.guildId;
 54:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function useGuildsRouteGuildAndChannelId() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 0;
            var1 = var3[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.useRoute;
            var3 = var1.bind(var2)();
            var4 = null;
            var1 = var4 == var3;
            var2 = undefined;
            if(var1) { _fun0002_ip = 65; continue _fun0002 }
 45:
            var1 = var3.params;
            var6 = var4 == var1;
            var2 = undefined;
            if(var6) { _fun0002_ip = 65; continue _fun0002 }
 60:
            var2 = var1.guildId;
 65:
            var1 = new Array(2);
            var1[0] = var2;
            var6 = var4 == var3;
            var2 = undefined;
            if(var6) { _fun0002_ip = 102; continue _fun0002 }
 82:
            var3 = var3.params;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0002_ip = 102; continue _fun0002 }
 97:
            var2 = var3.channelId;
 102:
            var1[1] = var2;
            return var1;
        }
    };
    var3['useGuildsRouteGuildAndChannelId'] = var2;
    return var1;
})();