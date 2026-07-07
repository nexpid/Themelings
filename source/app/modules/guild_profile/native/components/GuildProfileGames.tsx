// app/modules/guild_profile/native/components/GuildProfileGames.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function ClickableGameIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.style;
            var7 = var1.game;
            var _closure2_slot0 = var7;
            var6 = var1.activityLevel;
            var3 = var1.enabled;
            var5 = var1.onPressFallback;
            var _closure2_slot1 = var5;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var10 = _closure1_slot1;
            var13 = _closure1_slot2;
            var9 = 5;
            var9 = var13[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var11 = var7.id;
            var9['gameId'] = var11;
            var12 = _closure1_slot0;
            var11 = 6;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.GameProfileSources;
            var11 = var11.GuildProfileGames;
            var9['source'] = var11;
            var9['trackEntryPointImpression'] = var3;
            var12 = var10.bind(var4)(var9);
            var _closure2_slot2 = var12;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = null;
            var3 = var9 != var12;
case 2:
            _closure2_slot3 = var3;
            var11 = _closure1_slot3;
            var10 = var11.useCallback;
            var9 = new Array(4);
            var9[0] = var3;
            var9[1] = var12;
            var9[2] = var5;
            var9[3] = var7;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var10.bind(var11)(var2, var9);
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = null;
            var3 = var3 != var5;
            var5 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 8:
            var5 = var2;
case 10:
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 7;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['style'] = var8;
            var1['game'] = var7;
            var1['activityLevel'] = var6;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function FavoriteGame(arg1) {
        var1 = arg1;
        var9 = var1.game;
        var11 = var1.activityLevel;
        var10 = var1.clickable;
        var1 = _closure1_slot7;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var5.favoriteGame;
        var1['style'] = var5;
        var8 = _closure1_slot5;
        var7 = _closure1_slot8;
        var5 = {};
        var5['game'] = var9;
        var5['activityLevel'] = var11;
        var5['enabled'] = var10;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot5;
        var7 = _closure1_slot0;
        var10 = _closure1_slot2;
        var6 = 8;
        var6 = var10[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {'variant': 'text-sm/medium', 'color': 'text-subtle'};
        var9 = var9.name;
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function GuildProfileGamesContent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.profile;
            var _closure2_slot0 = var2;
            var12 = var1.gamesToDisplay;
            var14 = var1.lastGameToDisplay;
            var _closure2_slot1 = var14;
            var1 = var1.remainingGames;
            var _closure2_slot2 = var1;
            var5 = undefined;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var3 = _closure1_slot7;
            var7 = var3.bind(var5)();
            var _closure2_slot3 = var7;
            var11 = var2.gameActivity;
            var _closure2_slot4 = var11;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 10;
            var3 = var9[var3];
            var9 = var4.bind(var5)(var3);
            var4 = var9.useGuildProfileGameProfilesExperiment;
            var3 = {};
            var10 = 'guild_profile_games';
            var3['location'] = var10;
            var3 = var4.bind(var9)(var3);
            var9 = var3.enabled;
            var _closure2_slot5 = var9;
            var4 = null;
            var10 = var4 == var14;
            var3 = undefined;
            if(var10) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var3 = var14.iconHash;
case 11:
            var3 = var4 != var3;
            _closure2_slot6 = var3;
            var13 = _closure1_slot3;
            var10 = var13.useMemo;
            var4 = new Array(6);
            var4[0] = var14;
            var4[1] = var3;
            var4[2] = var1;
            var4[3] = var11;
            var4[4] = var7;
            var4[5] = var9;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var2 = null;
                    var3 = var2 == var1;
                    var1 = null;
                    if(var3) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var3 = _closure2_slot6;
                    var2 = null;
                    if(!var3) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var3 = _closure2_slot2;
                    var5 = var3.length;
                    var3 = 0;
                    if(!(var3 !== var5)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var7 = _closure1_slot6;
                    var6 = _closure1_slot4;
                    var5 = {};
                    var13 = _closure2_slot3;
                    var3 = var13.lastItem;
                    var5['style'] = var3;
                    var10 = _closure1_slot5;
                    var9 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var3 = 7;
                    var8 = var15[var3];
                    var3 = undefined;
                    var9 = var9.bind(var3)(var8);
                    var8 = {};
                    var11 = var13.lastItemImage;
                    var8['style'] = var11;
                    var11 = _closure2_slot1;
                    var8['game'] = var11;
                    var14 = _closure2_slot4;
                    var11 = var11.id;
                    var11 = var14[var11];
                    var8['activityLevel'] = var11;
                    var9 = var10.bind(var3)(var9, var8);
                    var8 = new Array(3);
                    var8[0] = var9;
                    var11 = _closure1_slot5;
                    var10 = _closure1_slot4;
                    var9 = {};
                    var14 = var13.lastItemOverlay;
                    var9['style'] = var14;
                    var9 = var11.bind(var3)(var10, var9);
                    var8[1] = var9;
                    var11 = _closure1_slot5;
                    var10 = _closure1_slot4;
                    var9 = {};
                    var13 = var13.lastItemText;
                    var9['style'] = var13;
                    var14 = _closure1_slot5;
                    var13 = _closure1_slot0;
                    var12 = 8;
                    var12 = var15[var12];
                    var12 = var13.bind(var3)(var12);
                    var13 = var12.Text;
                    var12 = {'variant': 'text-xs/medium', 'color': 'text-overlay-light'};
                    var15 = _closure2_slot2;
                    var17 = var15.length;
                    var15 = global;
                    var15 = var15.HermesInternal;
                    var16 = var15.concat;
                    var15 = '+';
                    var15 = var16.bind(var15)(var17);
                    var12['children'] = var15;
                    var12 = var14.bind(var3)(var13, var12);
                    var9['children'] = var12;
                    var9 = var11.bind(var3)(var10, var9);
                    var8[2] = var9;
                    var5['children'] = var8;
                    var3 = var7.bind(var3)(var6, var5);
                    _fun0004_ip = 19; continue _fun0004;
case 17:
                    var7 = _closure1_slot5;
                    var6 = _closure1_slot8;
                    var5 = {};
                    var8 = _closure2_slot1;
                    var5['game'] = var8;
                    var9 = _closure2_slot4;
                    var8 = var8.id;
                    var8 = var9[var8];
                    var5['activityLevel'] = var8;
                    var4 = _closure2_slot5;
                    var5['enabled'] = var4;
                    var4 = undefined;
                    var3 = var7.bind(var4)(var6, var5);
case 19:
                    var2 = var3;
case 15:
                    var1 = var2;
case 13:
                    return var1;
                }
            };
            var13 = var10.bind(var13)(var3, var4);
            var14 = _closure1_slot3;
            var10 = var14.useCallback;
            var4 = function(arg1) {
                var5 = arg1;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var8 = var5.id;
                var6 = global;
                var6 = var6.HermesInternal;
                var7 = var6.concat;
                var6 = 'profile-game-';
                var6 = var7.bind(var6)(var8);
                var2['key'] = var6;
                var5 = var5.name;
                var2['content'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = new Array(0);
            var3 = var10.bind(var14)(var4, var3);
            _closure2_slot7 = var3;
            var1 = var1.length;
            var10 = 0;
            var1 = var1 > var10;
            var14 = _closure1_slot3;
            var4 = var14.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var4 = var2[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var4);
                var6 = var7.openLazy;
                var4 = _closure1_slot0;
                var3 = 14;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 13;
                var3 = var2[var3];
                var2 = var2.paths;
                var11 = var4.bind(var1)(var3, var2);
                var4 = {};
                var2 = _closure2_slot0;
                var4['profile'] = var2;
                var10 = 'GuildProfileGamesActionSheet{profile.id}';
                var8 = 'stack';
                var12 = var7;
                var9 = var4;
                var2 = var12[var6](var11, var10, var9, var8, var7);
                return var1;
            };
            var14 = var4.bind(var14)(var2, var3);
            var3 = var12.length;
            var2 = 1;
            if(!(var2 !== var3)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var4 = _closure1_slot6;
            if(var1) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var2 = _closure1_slot4;
            var1 = {};
            var3 = var7.container;
            var1['style'] = var3;
            var15 = var12.map;
            var3 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot5;
                var4 = _closure1_slot8;
                var3 = {};
                var3['game'] = var1;
                var7 = _closure2_slot4;
                var6 = var1.id;
                var6 = var7[var6];
                var3['activityLevel'] = var6;
                var6 = _closure2_slot5;
                var3['enabled'] = var6;
                var2 = _closure2_slot7;
                var3['onPressFallback'] = var2;
                var2 = var1.id;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var15 = var15.bind(var12)(var3);
            var3 = new Array(2);
            var3[0] = var15;
            var3[1] = var13;
            var1['children'] = var3;
            var1 = var4.bind(var5)(var2, var1);
            _fun0003_ip = 24; continue _fun0003;
case 22:
            var3 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 15;
            var2 = var15[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.PressableHighlight;
            var2 = {};
            var15 = var7.container;
            var2['style'] = var15;
            var2['onPress'] = var14;
            var14 = var12.map;
            var8 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot5;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 7;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['game'] = var1;
                var7 = _closure2_slot4;
                var6 = var1.id;
                var6 = var7[var6];
                var2['activityLevel'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var14 = var14.bind(var12)(var8);
            var8 = new Array(2);
            var8[0] = var14;
            var8[1] = var13;
            var2['children'] = var8;
            var1 = var4.bind(var5)(var3, var2);
case 24:
            _fun0003_ip = 25; continue _fun0003;
case 20:
            var4 = _closure1_slot5;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var7.container;
            var2['style'] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot9;
            var6 = {};
            var13 = var12[var10];
            var6['game'] = var13;
            var10 = var12[var10];
            var10 = var10.id;
            var10 = var11[var10];
            var6['activityLevel'] = var10;
            var6['clickable'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 25:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot5 = var5;
    var2 = var2.jsxs;
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var5 = var8.createStyles;
    var2 = {};
    var9 = {'display': 'flex', 'flexDirection': 'row', 'gap': 8};
    var2['container'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 8};
    var2['favoriteGame'] = var9;
    var9 = {'position': 'relative', 'width': 32, 'height': 32};
    var2['lastItem'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0};
    var10 = 'absolute';
    var11 = 4;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SCRIM;
    var9['backgroundColor'] = var13;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var9['borderRadius'] = var11;
    var2['lastItemOverlay'] = var9;
    var9 = {};
    var9['position'] = var10;
    var2['lastItemImage'] = var9;
    var9 = {'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'width': 32, 'height': 32};
    var2['lastItemText'] = var9;
    var2 = var5.bind(var8)(var2);
    var _closure1_slot7 = var2;
    var5 = 16;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_profile/native/components/GuildProfileGames.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function GuildProfileGames(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var9 = var1.profile;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 9;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)(var9);
            var8 = var1.gamesToDisplay;
            var7 = var1.lastGameToDisplay;
            var6 = var1.remainingGames;
            var10 = null;
            var3 = var10 == var8;
            var1 = null;
            if(var3) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var4 = var8.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0005_ip = 26; continue _fun0005 }
case 28:
            var4 = _closure1_slot5;
            var3 = _closure1_slot10;
            var2 = {};
            var2['profile'] = var9;
            var2['gamesToDisplay'] = var8;
            var2['lastGameToDisplay'] = var7;
            var2['remainingGames'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 26:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['useStyles'] = var2;
    return var1;
})();