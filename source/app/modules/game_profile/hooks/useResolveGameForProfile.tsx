// app/modules/game_profile/hooks/useResolveGameForProfile.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 5;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/hooks/useResolveGameForProfile.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useResolveGameForProfile(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.applicationId;
            var3 = var1.gameId;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 0;
            var1 = var4[var1];
            var8 = undefined;
            var5 = var2.bind(var8)(var1);
            var2 = var5.useGetOrFetchApplication;
            var4 = null;
            var9 = var4 == var3;
            var1 = undefined;
            if(!var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var7;
case 2:
            var9 = var2.bind(var5)(var1);
            var5 = var4 != var9;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 1;
            var1 = var10[var1];
            var2 = var2.bind(var8)(var1);
            var1 = var2.isRobloxSubgameApplication;
            var5 = var1.bind(var2)(var9);
case 4:
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 2;
            var1 = var9[var1];
            var2 = var2.bind(var8)(var1);
            var1 = {};
            var1['applicationId'] = var7;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 3;
            var5 = var9[var5];
            var5 = var7.bind(var8)(var5);
            var3 = var5.ROBLOX_GAME_ID;
case 6:
            var1['gameId'] = var3;
            var1 = var2.bind(var8)(var1);
            var2 = var1.gameRecord;
            var2 = var4 != var2;
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 1;
            var3 = var7[var3];
            var7 = var5.bind(var8)(var3);
            var5 = var7.isRobloxSubgameGame;
            var3 = var1.gameRecord;
            var2 = var5.bind(var7)(var3);
case 8:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 4;
            var3 = var7[var3];
            var7 = var5.bind(var8)(var3);
            var5 = var7.useGame;
            var3 = undefined;
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 3;
            var9 = var11[var9];
            var9 = var10.bind(var8)(var9);
            var3 = var9.ROBLOX_GAME_ID;
case 10:
            var3 = var5.bind(var7)(var3);
            var5 = var3.data;
            var3 = var3.isLoading;
            if(!var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = {};
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 3;
            var6 = var9[var6];
            var6 = var7.bind(var8)(var6);
            var6 = var6.ROBLOX_GAME_ID;
            var2['gameId'] = var6;
            var6 = var4 != var5;
            var4 = null;
            if(!var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = var5;
case 14:
            var2['gameRecord'] = var4;
            var2['isLoading'] = var3;
            var1 = var2;
case 12:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();