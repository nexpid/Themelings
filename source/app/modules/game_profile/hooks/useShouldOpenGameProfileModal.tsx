// app/modules/game_profile/hooks/useShouldOpenGameProfileModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var7;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = {};
    var5 = 'no match';
    var4['NoMatch'] = var5;
    var5 = 'nsfw';
    var4['NSFW'] = var5;
    var5 = 'profile disabled';
    var4['Disabled'] = var5;
    var _closure1_slot7 = var4;
    var4 = function getRejectionReasons(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = new Array(0);
            var5 = _closure1_slot2;
            var10 = _closure1_slot3;
            var4 = 4;
            var4 = var10[var4];
            var7 = undefined;
            var8 = var5.bind(var7)(var4);
            var6 = var8.hasFlag;
            var5 = var3.gameFlags;
            var9 = _closure1_slot0;
            var4 = 5;
            var4 = var10[var4];
            var4 = var9.bind(var7)(var4);
            var4 = var4.GameFlags;
            var4 = var4.GAME_PROFILE_DISABLED;
            var4 = var6.bind(var8)(var5, var4);
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var1.push;
            var4 = _closure1_slot7;
            var4 = var4.Disabled;
            var4 = var5.bind(var1)(var4);
case 4:
            var5 = var3.themes;
            var4 = var5.includes;
            var6 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 6;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.ThirdPartyGameApplicationThemes;
            var3 = var3.EROTIC;
            var3 = var4.bind(var5)(var3);
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var1.push;
            var2 = _closure1_slot7;
            var2 = var2.NSFW;
            var2 = var3.bind(var1)(var2);
case 6:
            return var1;
case 2:
            var1 = _closure1_slot7;
            var2 = var1.NoMatch;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var4 = function gameIsAcceptable(arg1) {
        var3 = _closure1_slot8;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        var2 = var1.length;
        var1 = 0;
        var1 = var1 === var2;
        return var1;
    };
    var _closure1_slot9 = var4;
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
            var6 = undefined;
            if(!(var11 === var6)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var11 = '';
case 8:
            var10 = var2.gameId;
            var9 = var2.source;
            var _closure2_slot0 = var9;
            var8 = var2.trackEntryPointImpression;
            if(!(var8 === var6)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var8 = true;
case 10:
            var _closure2_slot1 = var8;
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var6;
            var _closure2_slot4 = var6;
            var _closure2_slot5 = var6;
            var _closure2_slot6 = var6;
            var4 = _closure1_slot4;
            var3 = var4.useRef;
            var2 = false;
            var2 = var3.bind(var4)(var2);
            _closure2_slot2 = var2;
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 7;
            var2 = var4[var2];
            var4 = var3.bind(var6)(var2);
            var3 = var4.useCanSeeGameProfileMobile;
            var2 = 'useShouldOpenGameProfileModal';
            var3 = var3.bind(var4)(var2);
            if(!var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var4 = _closure1_slot0;
            var2 = _closure1_slot3;
            var12 = 8;
            var2 = var2[var12];
            var4 = var4.bind(var6)(var2);
            var2 = var4.isAndroid;
            var2 = var2.bind(var4)();
            if(var2) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var7 = _closure1_slot0;
            var4 = _closure1_slot3;
            var4 = var4[var12];
            var7 = var7.bind(var6)(var4);
            var4 = var7.isIOS;
            var2 = var4.bind(var7)();
case 14:
            var3 = var2;
case 12:
            if(var3) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var4 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 8;
            var2 = var7[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.isDesktop;
            var3 = var2.bind(var4)();
case 16:
            if(var3) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var4 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 8;
            var2 = var7[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.isWeb;
            var3 = var2.bind(var4)();
case 18:
            _closure2_slot3 = var3;
            var4 = _closure1_slot1;
            var7 = _closure1_slot3;
            var2 = 9;
            var2 = var7[var2];
            var4 = var4.bind(var6)(var2);
            var2 = {};
            var7 = undefined;
            if(!var3) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var11;
case 20:
            var2['applicationId'] = var7;
            var7 = undefined;
            if(!var3) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = var10;
case 22:
            var2['gameId'] = var7;
            var4 = var4.bind(var6)(var2);
            var2 = var4.gameId;
            var11 = var4.gameRecord;
            _closure2_slot4 = var11;
            var10 = var4.isLoading;
            _closure2_slot5 = var10;
            var4 = _closure1_slot9;
            var4 = var4.bind(var6)(var11);
            _closure2_slot6 = var4;
            var7 = _closure1_slot4;
            var6 = var7.useEffect;
            var5 = new Array(6);
            var5[0] = var3;
            var5[1] = var11;
            var5[2] = var4;
            var5[3] = var10;
            var5[4] = var9;
            var5[5] = var8;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var2 = var2.current;
                    if(var2) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0003_ip = 24; continue _fun0003 }
case 26:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0003_ip = 24; continue _fun0003 }
case 27:
                    var2 = _closure2_slot5;
                    if(var2) { _fun0003_ip = 24; continue _fun0003 }
case 28:
                    var2 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0003_ip = 24; continue _fun0003 }
case 29:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var4 = 10;
                    var4 = var5[var4];
                    var5 = undefined;
                    var7 = var6.bind(var5)(var4);
                    var6 = _closure2_slot0;
                    var4 = var3 != var6;
                    var3 = 'Cannot track a Game Profile Entry Point Impressions without a source.';
                    var3 = var7.bind(var5)(var4, var3);
                    var4 = _closure1_slot8;
                    var3 = _closure2_slot4;
                    var7 = var4.bind(var5)(var3);
                    var9 = _closure2_slot6;
                    var4 = _closure2_slot4;
                    var8 = var4.id;
                    if(!(var7 === var5)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var7 = new Array(0);
case 30:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var3 = 3;
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
                    var2 = _closure2_slot2;
                    var1 = true;
                    var2['current'] = var1;
case 24:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var5);
            var1 = {};
            if(!var3) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var3 = var4;
case 32:
            var1['shouldOpenGameProfile'] = var3;
            var1['gameId'] = var2;
            return var1;
        }
    };
    var3['default'] = var5;
    var3['gameIsAcceptable'] = var4;
    var2 = function(arg1) {
        var3 = _closure1_slot9;
        var4 = _closure1_slot5;
        var2 = var4.getGame;
        var1 = arg1;
        var2 = var2.bind(var4)(var1);
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['gameIdIsAcceptable'] = var2;
    return var1;
})();