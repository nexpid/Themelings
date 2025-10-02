// app/modules/game_console/coercePlatformTypeToConsoleType.tsx
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
    var4 = var4.GameConsoleTypes;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PlatformTypes;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_console/coercePlatformTypeToConsoleType.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function coercePlatformTypeToConsoleType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot1;
            var2 = var2.XBOX;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot1;
            var2 = var2.PLAYSTATION;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot1;
            var2 = var2.PLAYSTATION_STAGING;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var2 = null;
            return var2;
case 4:
            var2 = _closure1_slot0;
            var2 = var2.PLAYSTATION;
            return var2;
case 2:
            var1 = _closure1_slot0;
            var1 = var1.XBOX;
            return var1;
        }
    };
    var3['coercePlatformTypeToConsoleType'] = var4;
    var2 = function coerceConsoleTypeToPlatformType(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var5 = arg2;
            var2 = _closure1_slot0;
            var2 = var2.XBOX;
            if(!(var2 !== var4)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var2 = _closure1_slot0;
            var2 = var2.PLAYSTATION;
            if(!(var2 !== var4)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = null;
            return var2;
case 9:
            var4 = var5.some;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.type;
                    var2 = var1.twoWayLink;
                    var1 = _closure1_slot1;
                    var1 = var1.PLAYSTATION_STAGING;
                    var1 = var3 === var1;
                    if(!var1) { _fun0003_ip = 11; continue _fun0003 }
case 5:
                    var1 = var2;
case 11:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2);
            var4 = var5.some;
            var3 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.type;
                    var2 = var1.twoWayLink;
                    var1 = _closure1_slot1;
                    var1 = var1.PLAYSTATION;
                    var1 = var3 === var1;
                    if(!var1) { _fun0004_ip = 11; continue _fun0004 }
case 5:
                    var1 = var2;
case 11:
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 14:
            var2 = _closure1_slot1;
            var2 = var2.PLAYSTATION_STAGING;
            _fun0002_ip = 15; continue _fun0002;
case 12:
            var3 = _closure1_slot1;
            var2 = var3.PLAYSTATION;
case 15:
            return var2;
case 7:
            var1 = _closure1_slot1;
            var1 = var1.XBOX;
            return var1;
        }
    };
    var3['coerceConsoleTypeToPlatformType'] = var2;
    return var1;
})();