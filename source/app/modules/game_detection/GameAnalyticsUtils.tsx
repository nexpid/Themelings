// app/modules/game_detection/GameAnalyticsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function removeExecutablePathPrefix(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.toLowerCase;
            var6 = var1.bind(var2)();
            var1 = var6.endsWith;
            var3 = '/';
            var1 = var1.bind(var6)(var3);
            var2 = var6;
            if(!var1) { _fun0001_ip = 53; continue _fun0001 }
 34:
            var5 = var6.slice;
            var4 = 0;
            var1 = -1;
            var2 = var5.bind(var6)(var4, var1);
 53:
            var1 = var2.split;
            var4 = var1.bind(var2)(var3);
            var2 = var4.slice;
            var1 = -2;
            var2 = var2.bind(var4)(var1);
            var1 = var2.join;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot3 = var4;
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
 0:
            var5 = arg1;
            var2 = null;
            if(!(var2 != var5)) { _fun0002_ip = 221; continue _fun0002 }
 12:
            var6 = _closure1_slot2;
            var4 = var6.getGameByName;
            var1 = var5.name;
            var7 = var4.bind(var6)(var1);
            var1 = 'exePath';
            var1 = var1 in var5;
            if(var1) { _fun0002_ip = 54; continue _fun0002 }
 46:
            var8 = var5.exe;
            _fun0002_ip = 60; continue _fun0002;
 54:
            var8 = var5.exePath;
 60:
            var1 = {};
            var9 = var5.name;
            var10 = var2 != var9;
            var6 = undefined;
            var4 = undefined;
            if(!var10) { _fun0002_ip = 81; continue _fun0002 }
 78:
            var4 = var9;
 81:
            var1['gameName'] = var4;
            var9 = var2 == var7;
            var4 = undefined;
            if(var9) { _fun0002_ip = 100; continue _fun0002 }
 95:
            var4 = var7.id;
 100:
            var1['gameId'] = var4;
            var7 = var2 != var8;
            var4 = undefined;
            if(!var7) { _fun0002_ip = 123; continue _fun0002 }
 114:
            var7 = _closure1_slot3;
            var4 = var7.bind(var6)(var8);
 123:
            var1['exe'] = var4;
            var7 = var5.distributor;
            var8 = var2 != var7;
            var4 = undefined;
            if(!var8) { _fun0002_ip = 146; continue _fun0002 }
 143:
            var4 = var7;
 146:
            var1['distributor'] = var4;
            var7 = var5.sku;
            var8 = var2 != var7;
            var4 = undefined;
            if(!var8) { _fun0002_ip = 169; continue _fun0002 }
 166:
            var4 = var7;
 169:
            var1['sku'] = var4;
            var4 = var2 != var5;
            var2 = undefined;
            if(!var4) { _fun0002_ip = 214; continue _fun0002 }
 183:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 1;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.getSubgameMetadata;
            var2 = var3.bind(var4)(var5);
 214:
            var1['gameMetadata'] = var2;
            return var1;
 221:
            var1 = {};
            var2 = undefined;
            var1['gameName'] = var2;
            var1['gameId'] = var2;
            var1['exe'] = var2;
            var1['distributor'] = var2;
            var1['sku'] = var2;
            var1['gameMetadata'] = var2;
            return var1;
        }
    };
    var3['getRunningGameAnalytics'] = var4;
    var2 = function isVerifiedGameExecutable(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var6 = arg1;
            var3 = arg2;
            var2 = null;
            if(!(var2 != var6)) { _fun0003_ip = 88; continue _fun0003 }
 14:
            if(!(var2 != var3)) { _fun0003_ip = 88; continue _fun0003 }
 18:
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
 0:
                    var3 = arg1;
                    var2 = var3.os;
                    var1 = _closure2_slot1;
                    var1 = var2 === var1;
                    if(!var1) { _fun0004_ip = 61; continue _fun0004 }
 23:
                    var5 = _closure2_slot0;
                    var2 = null;
                    var5 = var2 == var5;
                    var2 = undefined;
                    if(var5) { _fun0004_ip = 58; continue _fun0004 }
 38:
                    var5 = _closure2_slot0;
                    var4 = var5.endsWith;
                    var3 = var3.name;
                    var2 = var4.bind(var5)(var3);
 58:
                    var1 = var2;
 61:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
 88:
            var1 = false;
            return var1;
        }
    };
    var3['isVerifiedGameExecutable'] = var2;
    return var1;
})();