// app/modules/game_console/coercePlatformTypeToConsoleType.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
 0:
            var3 = arg1;
            var2 = _closure1_slot1;
            var2 = var2.XBOX;
            if(!(var2 !== var3)) { _fun0001_ip = 64; continue _fun0001 }
 20:
            var2 = _closure1_slot1;
            var2 = var2.PLAYSTATION;
            if(!(var2 !== var3)) { _fun0001_ip = 52; continue _fun0001 }
 34:
            var2 = _closure1_slot1;
            var2 = var2.PLAYSTATION_STAGING;
            if(!(var2 !== var3)) { _fun0001_ip = 52; continue _fun0001 }
 48:
            var2 = null;
            return var2;
 52:
            var2 = _closure1_slot0;
            var2 = var2.PLAYSTATION;
            return var2;
 64:
            var1 = _closure1_slot0;
            var1 = var1.XBOX;
            return var1;
        }
    };
    var3['coercePlatformTypeToConsoleType'] = var4;
    var2 = function coerceConsoleTypeToPlatformType(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var5 = arg2;
            var2 = _closure1_slot0;
            var2 = var2.XBOX;
            if(!(var2 !== var4)) { _fun0002_ip = 109; continue _fun0002 }
 25:
            var2 = _closure1_slot0;
            var2 = var2.PLAYSTATION;
            if(!(var2 !== var4)) { _fun0002_ip = 43; continue _fun0002 }
 39:
            var2 = null;
            return var2;
 43:
            var4 = var5.some;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.type;
                    var2 = var1.twoWayLink;
                    var1 = _closure1_slot1;
                    var1 = var1.PLAYSTATION_STAGING;
                    var1 = var3 === var1;
                    if(!var1) { _fun0003_ip = 37; continue _fun0003 }
 34:
                    var1 = var2;
 37:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2);
            var4 = var5.some;
            var3 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.type;
                    var2 = var1.twoWayLink;
                    var1 = _closure1_slot1;
                    var1 = var1.PLAYSTATION;
                    var1 = var3 === var1;
                    if(!var1) { _fun0004_ip = 37; continue _fun0004 }
 34:
                    var1 = var2;
 37:
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0002_ip = 97; continue _fun0002 }
 82:
            if(!var2) { _fun0002_ip = 97; continue _fun0002 }
 85:
            var2 = _closure1_slot1;
            var2 = var2.PLAYSTATION_STAGING;
            _fun0002_ip = 107; continue _fun0002;
 97:
            var3 = _closure1_slot1;
            var2 = var3.PLAYSTATION;
 107:
            return var2;
 109:
            var1 = _closure1_slot1;
            var1 = var1.XBOX;
            return var1;
        }
    };
    var3['coerceConsoleTypeToPlatformType'] = var2;
    return var1;
})();