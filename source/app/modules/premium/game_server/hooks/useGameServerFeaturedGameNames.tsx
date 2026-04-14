// app/modules/premium/game_server/hooks/useGameServerFeaturedGameNames.tsx
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
    var7 = var4.MINECRAFT_GAME_ID;
    var _closure1_slot2 = var7;
    var4 = var4.HYTALE_GAME_ID;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/game_server/hooks/useGameServerFeaturedGameNames.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGameServerFeaturedGameNames() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 1;
            var5 = var6[var2];
            var3 = undefined;
            var8 = var4.bind(var3)(var5);
            var7 = var8.useGame;
            var5 = _closure1_slot2;
            var5 = var7.bind(var8)(var5);
            var5 = var5.data;
            var2 = var6[var2];
            var4 = var4.bind(var3)(var2);
            var2 = var4.useGame;
            var1 = _closure1_slot3;
            var1 = var2.bind(var4)(var1);
            var4 = var1.data;
            var1 = {};
            var2 = null;
            var7 = var2 == var5;
            var6 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var5.name;
case 2:
            var7 = var2 != var6;
            var5 = 'Minecraft';
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var6;
case 4:
            var1['gameName'] = var5;
            var5 = var2 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var4.name;
case 6:
            var4 = var2 != var3;
            var2 = 'Hytale';
            if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var3;
case 8:
            var1['gameName2'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();