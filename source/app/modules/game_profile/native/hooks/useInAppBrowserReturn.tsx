// app/modules/game_profile/native/hooks/useInAppBrowserReturn.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/native/hooks/useInAppBrowserReturn.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useInAppBrowserReturn(arg1) {
        var2 = arg1;
        var6 = var2.gameId;
        var _closure2_slot0 = var6;
        var5 = var2.scrollOffsetRef;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 2;
                var3 = var4[var3];
                var4 = undefined;
                var5 = var5.bind(var4)(var3);
                var3 = var5.isIOS;
                var3 = var3.bind(var5)();
                if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 2:
                var3 = undefined;
                return var3;
case 4:
                var3 = false;
                var _closure3_slot0 = var3;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 3;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.subscribeToIsInAppBrowserOpen;
                var2 = function(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = arg1;
                        var2 = arg2;
                        if(var2) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                        if(!var1) { _fun0002_ip = 5; continue _fun0002 }
case 7:
                        var3 = true;
                        _closure3_slot0 = var3;
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 4;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.setGameProfilePendingReturn;
                        var3 = {};
                        var7 = _closure2_slot0;
                        var3['gameId'] = var7;
                        var6 = _closure2_slot1;
                        var6 = var6.current;
                        var3['initialScrollOffset'] = var6;
                        var3 = var4.bind(var5)(var3);
                        _fun0002_ip = 8; continue _fun0002;
case 5:
                        if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 10:
                        var1 = _closure3_slot1;
                        var7 = undefined;
                        var1 = var1.bind(var7)();
                        var1 = false;
                        _closure3_slot0 = var1;
                        var2 = _closure1_slot4;
                        var1 = var2.getPendingReturn;
                        var4 = var1.bind(var2)();
                        var1 = null;
                        if(!(var1 != var4)) { _fun0002_ip = 8; continue _fun0002 }
case 11:
                        var2 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 4;
                        var1 = var8[var1];
                        var3 = var2.bind(var7)(var1);
                        var2 = var3.returnToGameProfile;
                        var1 = {};
                        var6 = var4.gameId;
                        var1['gameId'] = var6;
                        var6 = _closure1_slot0;
                        var5 = 5;
                        var5 = var8[var5];
                        var5 = var6.bind(var7)(var5);
                        var5 = var5.GameProfileSources;
                        var5 = var5.InAppBrowserReturn;
                        var1['source'] = var5;
                        var4 = var4.initialScrollOffset;
                        var1['initialScrollOffset'] = var4;
                        var1 = var2.bind(var3)(var1);
case 8:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var _closure3_slot1 = var2;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure3_slot0;
                        if(var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 12:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();