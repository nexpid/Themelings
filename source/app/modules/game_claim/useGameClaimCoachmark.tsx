// app/modules/game_claim/useGameClaimCoachmark.tsx
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
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_claim/useGameClaimCoachmark.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCanShowGameClaimCoachmark(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 2;
            var1 = var8[var1];
            var5 = undefined;
            var9 = var7.bind(var5)(var1);
            var6 = var9.useGameClaimCoachmarkEnabled;
            var1 = 'useCanShowGameClaimCoachmark';
            var1 = var6.bind(var9)(var4, var1);
            var6 = 3;
            var6 = var8[var6];
            var9 = var7.bind(var5)(var6);
            var8 = var9.useStateFromStores;
            var6 = _closure1_slot2;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = new Array(1);
            var6[0] = var4;
            var3 = function() {
                var4 = _closure1_slot2;
                var3 = var4.canWithPartialContext;
                var1 = _closure1_slot3;
                var2 = var1.ADMINISTRATOR;
                var1 = {};
                var5 = _closure2_slot0;
                var1['guildId'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var8.bind(var9)(var7, var3, var6);
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3;
case 2:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 4;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useHasUnclaimedGames;
            var2 = var2.bind(var3)(var4, var1);
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['useCanShowGameClaimCoachmark'] = var2;
    return var1;
})();