// app/modules/game_profile/hooks/useSteamWebsiteUrl.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function buildSteamStoreUrl(arg1) {
        var1 = global;
        var4 = var1.encodeURIComponent;
        var3 = undefined;
        var2 = arg1;
        var3 = var4.bind(var3)(var2);
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = 'https://store.steampowered.com/app/';
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Distributors;
    var _closure1_slot3 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/game_profile/hooks/useSteamWebsiteUrl.tsx';
    var5 = var6.bind(var7)(var5);
    var3['buildSteamStoreUrl'] = var4;
    var2 = function useSteamWebsiteUrl(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = _closure1_slot2;
                var4 = var6.getGame;
                var3 = _closure2_slot0;
                var4 = var4.bind(var6)(var3);
                var6 = var1 == var4;
                var3 = undefined;
                var7 = undefined;
                if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var7 = var4.steamReleaseStatus;
case 4:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 3;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var6 = var6.SteamReleaseStatus;
                var6 = var6.RETIRED_ABANDONED;
                if(!(var7 !== var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var6 = var1 == var4;
                var7 = undefined;
                if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var9 = var4.thirdPartySkus;
                var6 = var1 == var9;
                var7 = undefined;
                if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 10:
                var8 = var9.find;
                var6 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.distributor;
                    var1 = _closure1_slot3;
                    var1 = var1.STEAM;
                    var1 = var2 === var1;
                    return var1;
                };
                var7 = var8.bind(var9)(var6);
case 8:
                var8 = var1 == var7;
                var6 = undefined;
                if(var8) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                var6 = var7.id;
case 11:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var7 = 4;
                var7 = var9[var7];
                var8 = var8.bind(var3)(var7);
                var7 = var8.isNullOrEmpty;
                var7 = var7.bind(var8)(var6);
                if(var7) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                var5 = _closure1_slot4;
                var5 = var5.bind(var3)(var6);
                return var5;
case 13:
                var6 = var1 == var4;
                var5 = undefined;
                if(var6) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                var5 = var4.websites;
case 15:
                if(!(var1 != var5)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                var5 = var4.websites;
                var4 = var5.find;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.category;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 5;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.ThirdPartyGameApplicationWebsiteCategory;
                    var1 = var1.STEAM;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var4.bind(var5)(var2);
                var4 = var1 == var2;
                var3 = undefined;
                if(var4) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                var3 = var2.url;
case 19:
                if(!(var1 == var3)) { _fun0001_ip = 21; continue _fun0001 }
case 17:
                return var1;
case 21:
                var2 = var2.url;
                return var2;
case 6:
                return var1;
case 2:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useSteamWebsiteUrl'] = var2;
    return var1;
})();