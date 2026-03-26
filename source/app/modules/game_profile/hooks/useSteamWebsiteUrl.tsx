// app/modules/game_profile/hooks/useSteamWebsiteUrl.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
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
    var _closure1_slot5 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Distributors;
    var _closure1_slot4 = var5;
    var5 = 8;
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
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot3;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot2;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = _closure1_slot3;
                var5 = var6.getGame;
                var4 = _closure2_slot0;
                var6 = var5.bind(var6)(var4);
                var8 = var1 == var6;
                var5 = undefined;
                var4 = undefined;
                if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = var6.supplementalData;
case 4:
                var9 = _closure1_slot2;
                var8 = var9.getApplication;
                var7 = _closure2_slot0;
                var8 = var8.bind(var9)(var7);
                var7 = var1 == var4;
                var9 = undefined;
                if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var9 = var4.steamReleaseStatus;
case 6:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var7 = 4;
                var7 = var11[var7];
                var7 = var10.bind(var5)(var7);
                var7 = var7.SteamReleaseStatus;
                var7 = var7.RETIRED_ABANDONED;
                if(!(var9 !== var7)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var9 = var1 == var8;
                var7 = undefined;
                if(var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var10 = var8.linkedGames;
                var8 = var1 == var10;
                var7 = undefined;
                if(var8) { _fun0001_ip = 10; continue _fun0001 }
case 12:
                var9 = var10.some;
                var8 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 5;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.GameLinkTypes;
                    var1 = var1.OFFICIAL;
                    var1 = var2 === var1;
                    return var1;
                };
                var7 = var9.bind(var10)(var8);
case 10:
                if(var7) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                var8 = var1 == var4;
                var7 = undefined;
                if(var8) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                var7 = var4.websites;
case 15:
                if(!(var1 != var7)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                var8 = var4.websites;
                var7 = var8.find;
                var4 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.category;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.ThirdPartyGameApplicationWebsiteCategory;
                    var1 = var1.STEAM;
                    var1 = var2 === var1;
                    return var1;
                };
                var4 = var7.bind(var8)(var4);
                var8 = var1 == var4;
                var7 = undefined;
                if(var8) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                var7 = var4.url;
case 19:
                var8 = var1 != var7;
                var4 = null;
                if(!var8) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                var4 = var7;
case 21:
                return var4;
case 17:
                return var1;
case 13:
                var7 = var1 == var6;
                var4 = undefined;
                if(var7) { _fun0001_ip = 23; continue _fun0001 }
case 24:
                var7 = var6.thirdPartySkus;
                var6 = var1 == var7;
                var4 = undefined;
                if(var6) { _fun0001_ip = 23; continue _fun0001 }
case 25:
                var6 = var7.find;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.distributor;
                    var1 = _closure1_slot4;
                    var1 = var1.STEAM;
                    var1 = var2 === var1;
                    return var1;
                };
                var4 = var6.bind(var7)(var2);
case 23:
                var6 = var1 == var4;
                var2 = undefined;
                if(var6) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                var2 = var4.id;
case 26:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 6;
                var4 = var7[var4];
                var6 = var6.bind(var5)(var4);
                var4 = var6.isNullOrEmpty;
                var6 = var4.bind(var6)(var2);
                var4 = var2;
                var2 = null;
                if(var6) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                var3 = _closure1_slot5;
                var2 = var3.bind(var5)(var4);
case 28:
                return var2;
case 8:
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