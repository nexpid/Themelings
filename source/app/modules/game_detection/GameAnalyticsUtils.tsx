// app/modules/game_detection/GameAnalyticsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function normalizePath(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.toLowerCase;
            var5 = var1.bind(var2)();
            var2 = var5.endsWith;
            var1 = '/';
            var2 = var2.bind(var5)(var1);
            var1 = var5;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.slice;
            var3 = 0;
            var2 = -1;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var4 = function removeExecutablePathPrefix(arg1) {
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = arg1;
        var2 = var3.bind(var2)(var1);
        var1 = var2.split;
        var3 = '/';
        var4 = var1.bind(var2)(var3);
        var2 = var4.slice;
        var1 = -2;
        var2 = var2.bind(var4)(var1);
        var1 = var2.join;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/game_detection/GameAnalyticsUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['removeExecutablePathPrefix'] = var4;
    var4 = function getRunningGameAnalytics(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var3 = null;
            if(!(var3 != var6)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var5 = _closure1_slot2;
            var2 = var5.getGameByName;
            var1 = var6.name;
            var9 = var2.bind(var5)(var1);
            var1 = 'exePath';
            var1 = var1 in var6;
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = var6.exe;
            _fun0002_ip = 8; continue _fun0002;
case 6:
            var2 = var6.exePath;
case 8:
            var1 = {};
            var8 = var6.name;
            var10 = var3 != var8;
            var7 = undefined;
            var5 = undefined;
            if(!var10) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var5 = var8;
case 9:
            var1['gameName'] = var5;
            var8 = var6.id;
            if(!(var3 == var8)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var10 = var3 == var9;
            var5 = undefined;
            if(var10) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var5 = var9.id;
case 13:
            var8 = var5;
case 11:
            var9 = var3 != var8;
            var5 = undefined;
            if(!var9) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var5 = var8;
case 15:
            var1['gameId'] = var5;
            var8 = var3 != var2;
            var5 = undefined;
            if(!var8) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var8 = _closure1_slot4;
            var5 = var8.bind(var7)(var2);
case 17:
            var1['exe'] = var5;
            var8 = var6.distributor;
            var9 = var3 != var8;
            var5 = undefined;
            if(!var9) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var5 = var8;
case 19:
            var1['distributor'] = var5;
            var8 = var6.sku;
            var9 = var3 != var8;
            var5 = undefined;
            if(!var9) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var5 = var8;
case 21:
            var1['sku'] = var5;
            var5 = var3 != var6;
            var3 = undefined;
            if(!var5) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var4 = 1;
            var4 = var8[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.getSubgameMetadata;
            var3 = var4.bind(var5)(var6);
case 23:
            var1['gameMetadata'] = var3;
            var1['rawExePath'] = var2;
            return var1;
case 4:
            var1 = {};
            var2 = undefined;
            var1['gameName'] = var2;
            var1['gameId'] = var2;
            var1['exe'] = var2;
            var1['distributor'] = var2;
            var1['sku'] = var2;
            var1['gameMetadata'] = var2;
            var1['rawExePath'] = var2;
            return var1;
        }
    };
    var3['getRunningGameAnalytics'] = var4;
    var2 = function isVerifiedGameExecutable(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var3 = arg2;
            var2 = null;
            if(!(var2 != var6)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            if(!(var2 != var3)) { _fun0003_ip = 25; continue _fun0003 }
case 27:
            var4 = _closure1_slot3;
            var5 = undefined;
            var4 = var4.bind(var5)(var6);
            var _closure2_slot0 = var4;
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 2;
            var2 = var6[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.getPlatformName;
            var2 = var2.bind(var4)();
            var _closure2_slot1 = var2;
            var2 = var3.some;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var2 = var3.os;
                    var1 = _closure2_slot1;
                    var1 = var2 === var1;
                    if(!var1) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var5 = _closure2_slot0;
                    var2 = null;
                    var5 = var2 == var5;
                    var2 = undefined;
                    if(var5) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var5 = _closure2_slot0;
                    var4 = var5.endsWith;
                    var3 = var3.name;
                    var2 = var4.bind(var5)(var3);
case 30:
                    var1 = var2;
case 28:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
case 25:
            var1 = false;
            return var1;
        }
    };
    var3['isVerifiedGameExecutable'] = var2;
    return var1;
})();