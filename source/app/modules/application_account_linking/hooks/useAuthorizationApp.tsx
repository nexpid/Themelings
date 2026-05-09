// app/modules/application_account_linking/hooks/useAuthorizationApp.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function getAuthorizationApp(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var2.type;
            var4 = _closure1_slot5;
            var4 = var4.GAME;
            if(!(var5 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var2.linkedGames;
            var4 = var1 == var8;
            var7 = undefined;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var8.find;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 4;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.GameLinkTypes;
                var1 = var1.OFFICIAL;
                var1 = var2 === var1;
                return var1;
            };
            var7 = var5.bind(var8)(var4);
case 6:
            var5 = var1 == var7;
            var4 = undefined;
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var7.application;
case 8:
            if(!(var1 == var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = _closure1_slot3;
            var3 = var5.getApplication;
            var8 = var1 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = var7.id;
case 12:
            var4 = var3.bind(var5)(var6);
case 10:
            var5 = var1 != var4;
            var3 = null;
            if(!var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = var4;
case 14:
            return var3;
case 4:
            return var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ApplicationTypes;
    var _closure1_slot5 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/application_account_linking/hooks/useAuthorizationApp.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getAuthorizationApp'] = var4;
    var2 = function useAuthorizationApp(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var2 = null;
            var2 = var2 == var6;
            var7 = undefined;
            var5 = undefined;
            if(var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var2 = _closure1_slot4;
            var2 = var6 instanceof var2;
            var5 = undefined;
            if(var2) { _fun0002_ip = 16; continue _fun0002 }
case 18:
            var2 = var6.getOfficialApplicationId;
            var5 = var2.bind(var6)();
case 16:
            var4 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 5;
            var3 = var8[var3];
            var4 = var4.bind(var7)(var3);
            var3 = var4.useGetOrFetchApplication;
            var5 = var3.bind(var4)(var5);
            var _closure2_slot1 = var5;
            var4 = _closure1_slot2;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = null;
                    if(var4) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var6 = _closure2_slot0;
                    var5 = _closure1_slot4;
                    var5 = var6 instanceof var5;
                    if(var5) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var5 = _closure2_slot1;
                    var5 = var2 != var5;
                    var2 = null;
                    if(!var5) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var2 = _closure2_slot1;
case 23:
                    _fun0003_ip = 25; continue _fun0003;
case 21:
                    var5 = _closure1_slot6;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var2 = var5.bind(var3)(var4);
case 25:
                    var1 = var2;
case 19:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useAuthorizationApp'] = var2;
    return var1;
})();