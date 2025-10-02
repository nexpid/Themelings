// app/modules/game_console/activityPlatformToConnectedAccountType.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityGamePlatforms;
    var _closure1_slot0 = var7;
    var4 = var4.PlatformTypes;
    var _closure1_slot1 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_console/activityPlatformToConnectedAccountType.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function activityPlatformToConnectedAccountType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot0;
            var2 = var2.PS4;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            var2 = var2.PS5;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = _closure1_slot0;
            var2 = var2.XBOX;
            if(!(var2 !== var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = undefined;
            return var2;
case 5:
            var2 = _closure1_slot1;
            var2 = var2.XBOX;
            return var2;
case 2:
            var1 = _closure1_slot1;
            var1 = var1.PLAYSTATION;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();