// app/modules/game_profile/hooks/useShouldOpenGameProfileModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.AnalyticEvents;
    var _closure1_slot6 = var5;
    var4 = var4.ApplicationFlags;
    var _closure1_slot7 = var4;
    var4 = {};
    var5 = 'no match';
    var4['NoMatch'] = var5;
    var5 = 'nsfw';
    var4['NSFW'] = var5;
    var5 = 'no summary';
    var4['NoSummary'] = var5;
    var5 = 'no release date';
    var4['NoReleaseDate'] = var5;
    var5 = 'no cover image';
    var4['NoCoverImage'] = var5;
    var5 = 'profile disabled';
    var4['Disabled'] = var5;
    var _closure1_slot8 = var4;
    var4 = function getRejectionReasons(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = arg2;
            var2 = new Array(0);
            var5 = null;
            if(!(var5 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var5 != var8)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 5;
            var4 = var7[var4];
            var9 = undefined;
            var7 = var6.bind(var9)(var4);
            var6 = var7.hasApplicationFlag;
            var4 = _closure1_slot7;
            var4 = var4.GAME_PROFILE_DISABLED;
            var4 = var6.bind(var7)(var8, var4);
            if(!var4) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = var2.push;
            var4 = _closure1_slot8;
            var4 = var4.Disabled;
            var4 = var6.bind(var2)(var4);
case 5:
            var7 = var1.themes;
            var6 = var7.includes;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 6;
            var4 = var10[var4];
            var4 = var8.bind(var9)(var4);
            var4 = var4.ThirdPartyGameApplicationThemes;
            var4 = var4.EROTIC;
            var4 = var6.bind(var7)(var4);
            if(!var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var6 = var2.push;
            var4 = _closure1_slot8;
            var4 = var4.NSFW;
            var4 = var6.bind(var2)(var4);
case 7:
            var4 = var1.summary;
            var4 = var5 != var4;
            if(!var4) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var6 = var1.summary;
            var7 = var6.length;
            var6 = 0;
            var4 = var6 !== var7;
case 9:
            if(var4) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var6 = var2.push;
            var4 = _closure1_slot8;
            var4 = var4.NoSummary;
            var4 = var6.bind(var2)(var4);
case 11:
            var4 = var1.summary;
            var4 = var5 != var4;
            if(!var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1 = var1.summary;
            var5 = var1.length;
            var1 = 0;
            var4 = var1 !== var5;
case 13:
            var1 = var2;
            if(var4) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var4 = var2.push;
            var3 = _closure1_slot8;
            var3 = var3.NoSummary;
            var3 = var4.bind(var2)(var3);
            var1 = var2;
            _fun0001_ip = 15; continue _fun0001;
case 2:
            var2 = _closure1_slot8;
            var3 = var2.NoMatch;
            var2 = new Array(1);
            var2[0] = var3;
            var1 = var2;
case 15:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var4 = function gameIsAcceptable(arg1, arg2) {
        var4 = _closure1_slot9;
        var3 = undefined;
        var2 = arg1;
        var1 = arg2;
        var1 = var4.bind(var3)(var2, var1);
        var2 = var1.length;
        var1 = 0;
        var1 = var1 === var2;
        return var1;
    };
    var _closure1_slot10 = var4;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/game_profile/hooks/useShouldOpenGameProfileModal.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function _default(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var11 = var2.applicationId;
            var10 = undefined;
            if(!(var11 === var10)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var11 = '';
case 17:
            var _closure2_slot0 = var11;
            var7 = var2.source;
            var _closure2_slot1 = var7;
            var6 = var2.trackEntryPointImpression;
            if(!(var6 === var10)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var6 = true;
case 19:
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var10;
            var _closure2_slot4 = var10;
            var _closure2_slot5 = var10;
            var _closure2_slot6 = var10;
            var _closure2_slot7 = var10;
            var5 = _closure1_slot3;
            var4 = var5.useRef;
            var3 = false;
            var3 = var4.bind(var5)(var3);
            _closure2_slot3 = var3;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 7;
            var3 = var12[var4];
            var15 = var8.bind(var10)(var3);
            var14 = var15.useStateFromStores;
            var3 = _closure1_slot4;
            var13 = new Array(1);
            var13[0] = var3;
            var9 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getApplication;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var14.bind(var15)(var13, var9);
            _closure2_slot4 = var9;
            var14 = var5.useMemo;
            var13 = new Array(2);
            var13[0] = var11;
            var13[1] = var9;
            var11 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure2_slot4;
                    var3 = null;
                    var5 = var3 == var4;
                    var4 = undefined;
                    if(var5) { _fun0003_ip = 21; continue _fun0003 }
case 17:
                    var5 = _closure2_slot4;
                    var7 = var5.linkedGames;
                    var5 = var3 == var7;
                    var4 = undefined;
                    if(var5) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var6 = var7.map;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var4 = var6.bind(var7)(var5);
case 21:
                    if(!(var3 == var4)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var4 = new Array(0);
case 23:
                    var2 = _closure2_slot0;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var8 = 1;
                    var10 = var3;
                    var9 = var4;
                    var2 = arraySpread(var10, var9, var8);
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var3 = arg1;
                            var1 = null;
                            var1 = var1 != var3;
                            if(!var1) { _fun0004_ip = 17; continue _fun0004 }
case 25:
                            var2 = '';
                            var1 = var2 !== var3;
case 17:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var14 = var14.bind(var5)(var11, var13);
            _closure2_slot5 = var14;
            var13 = _closure1_slot1;
            var11 = 8;
            var11 = var12[var11];
            var11 = var13.bind(var10)(var11);
            var11 = var11.bind(var10)(var14);
            var11 = 9;
            var11 = var12[var11];
            var13 = var8.bind(var10)(var11);
            var11 = var13.useGamesWithSupplementalDataRequest;
            var11 = var11.bind(var13)(var14);
            var11 = var12[var4];
            var15 = var8.bind(var10)(var11);
            var14 = var15.useStateFromStores;
            var11 = _closure1_slot5;
            var13 = new Array(2);
            var13[0] = var11;
            var13[1] = var3;
            var2 = function() {
                var3 = _closure2_slot5;
                var2 = var3.find;
                var1 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var6 = arg1;
                        var4 = _closure1_slot10;
                        var3 = _closure1_slot5;
                        var2 = var3.getGame;
                        var5 = var2.bind(var3)(var6);
                        var2 = null;
                        var7 = var2 == var5;
                        var3 = undefined;
                        var2 = undefined;
                        if(var7) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                        var2 = var5.supplementalData;
case 26:
                        var5 = _closure1_slot4;
                        var1 = var5.getApplication;
                        var1 = var1.bind(var5)(var6);
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var14.bind(var15)(var13, var2);
            _closure2_slot6 = var2;
            var4 = var12[var4];
            var10 = var8.bind(var10)(var4);
            var8 = var10.useStateFromStores;
            var4 = new Array(2);
            var4[0] = var11;
            var4[1] = var3;
            var3 = function() {
                var3 = _closure2_slot5;
                var2 = var3.every;
                var1 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var4 = arg1;
                        var3 = _closure1_slot5;
                        var1 = var3.isFetching;
                        var1 = var1.bind(var3)(var4);
                        var1 = !var1;
                        if(!var1) { _fun0006_ip = 19; continue _fun0006 }
case 28:
                        var3 = _closure1_slot4;
                        var2 = var3.isFetchingApplication;
                        var2 = var2.bind(var3)(var4);
                        var1 = !var2;
case 19:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var10)(var4, var3);
            _closure2_slot7 = var8;
            var4 = var5.useEffect;
            var3 = new Array(5);
            var3[0] = var2;
            var3[1] = var9;
            var3[2] = var8;
            var3[3] = var7;
            var3[4] = var6;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var2 = var2.current;
                    if(var2) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0007_ip = 29; continue _fun0007 }
case 31:
                    var2 = _closure2_slot4;
                    var8 = null;
                    if(!(var8 != var2)) { _fun0007_ip = 29; continue _fun0007 }
case 32:
                    var2 = _closure2_slot7;
                    if(var2) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                    var2 = _closure2_slot6;
                    if(!(var8 != var2)) { _fun0007_ip = 29; continue _fun0007 }
case 33:
                    var2 = _closure2_slot6;
                    if(!(var8 == var2)) { _fun0007_ip = 5; continue _fun0007 }
case 35:
                    var4 = _closure1_slot5;
                    var3 = var4.getGame;
                    var2 = _closure2_slot4;
                    var2 = var2.id;
                    var4 = var3.bind(var4)(var2);
                    _fun0007_ip = 36; continue _fun0007;
case 5:
                    var5 = _closure1_slot5;
                    var3 = var5.getGame;
                    var2 = _closure2_slot6;
                    var4 = var3.bind(var5)(var2);
case 36:
                    if(!(var8 != var4)) { _fun0007_ip = 29; continue _fun0007 }
case 37:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 10;
                    var3 = var5[var3];
                    var5 = undefined;
                    var9 = var6.bind(var5)(var3);
                    var6 = _closure2_slot1;
                    var7 = var8 != var6;
                    var3 = 'Cannot track a Game Profile Entry Point Impressions without a source.';
                    var3 = var9.bind(var5)(var7, var3);
                    var9 = _closure1_slot9;
                    var7 = var4.supplementalData;
                    var3 = _closure2_slot4;
                    var3 = var9.bind(var5)(var7, var3);
                    var7 = _closure2_slot6;
                    var9 = var8 != var7;
                    var8 = var4.applicationId;
                    var7 = var3;
                    if(!(var7 === var5)) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                    var7 = new Array(0);
case 38:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = 4;
                    var3 = var10[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot6;
                    var3 = var2.GAME_PROFILE_ENTRY_POINT_AVAILABLE;
                    var2 = {};
                    var2['game_profile_available'] = var9;
                    var2['application_id'] = var8;
                    var2['rejection_reason'] = var7;
                    var2['source'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = _closure2_slot3;
                    var1 = true;
                    var2['current'] = var1;
case 29:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var1, var3);
            var1 = {};
            var3 = null;
            var3 = var3 != var2;
            var1['shouldOpenGameProfile'] = var3;
            var1['applicationId'] = var2;
            return var1;
        }
    };
    var3['default'] = var5;
    var3['gameIsAcceptable'] = var4;
    var2 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var6 = arg1;
            var3 = _closure1_slot5;
            var2 = var3.getGame;
            var2 = var2.bind(var3)(var6);
            var3 = null;
            var5 = var3 == var2;
            var4 = undefined;
            var3 = undefined;
            if(var5) { _fun0008_ip = 40; continue _fun0008 }
case 41:
            var3 = var2.supplementalData;
case 40:
            var5 = _closure1_slot4;
            var2 = var5.getApplication;
            var2 = var2.bind(var5)(var6);
            var1 = _closure1_slot10;
            var1 = var1.bind(var4)(var3, var2);
            return var1;
        }
    };
    var3['gameIdIsAcceptable'] = var2;
    return var1;
})();