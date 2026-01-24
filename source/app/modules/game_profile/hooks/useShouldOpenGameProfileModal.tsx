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
            var4 = arg2;
            var2 = new Array(0);
            var5 = null;
            if(!(var5 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var5 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 5;
            var6 = var8[var6];
            var9 = undefined;
            var8 = var7.bind(var9)(var6);
            var7 = var8.hasFlag;
            var6 = var4.flags;
            var4 = _closure1_slot7;
            var4 = var4.GAME_PROFILE_DISABLED;
            var4 = var7.bind(var8)(var6, var4);
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
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/game_profile/hooks/useShouldOpenGameProfileModal.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function _default(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var12 = var3.location;
            var2 = var3.applicationId;
            var7 = undefined;
            if(!(var2 === var7)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var2 = '';
case 17:
            var _closure2_slot0 = var2;
            var11 = var3.autoTrackExposure;
            if(!(var11 === var7)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var11 = true;
case 19:
            var9 = var3.source;
            var _closure2_slot1 = var9;
            var8 = var3.trackEntryPointImpression;
            if(!(var8 === var7)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var8 = true;
case 21:
            var _closure2_slot2 = var8;
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var _closure2_slot5 = var7;
            var _closure2_slot6 = var7;
            var _closure2_slot7 = var7;
            var6 = _closure1_slot3;
            var4 = var6.useRef;
            var3 = false;
            var3 = var4.bind(var6)(var3);
            _closure2_slot3 = var3;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 7;
            var3 = var10[var3];
            var4 = var6.bind(var7)(var3);
            var3 = var4.useCanSeeGameProfile;
            var3 = var3.bind(var4)(var12, var11);
            _closure2_slot4 = var3;
            var4 = 8;
            var4 = var10[var4];
            var10 = var6.bind(var7)(var4);
            var6 = var10.useRequestDetectableGameSupplementalData;
            var4 = null;
            if(!var3) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var11 = '';
            var4 = null;
            if(!(var11 !== var2)) { _fun0002_ip = 23; continue _fun0002 }
case 25:
            var4 = var2;
case 23:
            var4 = var6.bind(var10)(var4);
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 9;
            var4 = var11[var4];
            var13 = var6.bind(var7)(var4);
            var12 = var13.useStateFromStores;
            var4 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var4;
            var4 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getGame;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var12.bind(var13)(var10, var4);
            _closure2_slot5 = var10;
            var4 = 10;
            var4 = var11[var4];
            var6 = var6.bind(var7)(var4);
            var4 = var6.useGetOrFetchApplicationBatched;
            var4 = var4.bind(var6)(var2);
            _closure2_slot6 = var4;
            var7 = _closure1_slot3;
            var6 = var7.useMemo;
            var5 = new Array(2);
            var5[0] = var4;
            var5[1] = var10;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var3 = _closure2_slot6;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0003_ip = 26; continue _fun0003 }
case 28:
                    var5 = _closure1_slot10;
                    var4 = _closure2_slot5;
                    var3 = _closure2_slot6;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
case 26:
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var4, var5);
            _closure2_slot7 = var5;
            var6 = var7.useEffect;
            var4 = new Array(6);
            var4[0] = var5;
            var4[1] = var2;
            var4[2] = var3;
            var4[3] = var10;
            var4[4] = var9;
            var4[5] = var8;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var2 = var2.current;
                    if(var2) { _fun0004_ip = 29; continue _fun0004 }
case 27:
                    var2 = _closure2_slot4;
                    if(!var2) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0004_ip = 29; continue _fun0004 }
case 31:
                    var5 = _closure1_slot5;
                    var4 = var5.isFetching;
                    var3 = _closure2_slot0;
                    var4 = var4.bind(var5)(var3);
                    var3 = false;
                    if(!(var3 === var4)) { _fun0004_ip = 29; continue _fun0004 }
case 32:
                    var4 = _closure2_slot5;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0004_ip = 29; continue _fun0004 }
case 33:
                    var4 = _closure2_slot7;
                    if(!(var3 != var4)) { _fun0004_ip = 29; continue _fun0004 }
case 34:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 11;
                    var4 = var5[var4];
                    var5 = undefined;
                    var7 = var6.bind(var5)(var4);
                    var6 = _closure2_slot1;
                    var4 = var3 != var6;
                    var3 = 'Cannot track a Game Profile Entry Point Impressions without a source.';
                    var3 = var7.bind(var5)(var4, var3);
                    var4 = _closure1_slot9;
                    var3 = _closure2_slot5;
                    var7 = var4.bind(var5)(var3);
                    var9 = _closure2_slot7;
                    var8 = _closure2_slot0;
                    if(!(var7 === var5)) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                    var7 = new Array(0);
case 35:
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
            var1 = var6.bind(var7)(var1, var4);
            var1 = {};
            if(!var3) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var4 = true;
            var3 = var4 === var5;
case 37:
            var1['shouldOpenGameProfile'] = var3;
            var1['applicationId'] = var2;
            return var1;
        }
    };
    var3['default'] = var5;
    var3['gameIsAcceptable'] = var4;
    var2 = function(arg1) {
        var5 = arg1;
        var3 = _closure1_slot5;
        var2 = var3.getGame;
        var4 = var2.bind(var3)(var5);
        var3 = _closure1_slot4;
        var2 = var3.getApplication;
        var3 = var2.bind(var3)(var5);
        var2 = _closure1_slot10;
        var1 = undefined;
        var1 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var3['gameIdIsAcceptable'] = var2;
    return var1;
})();