// app/modules/game_update/useGameUpdateData.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var7 = var1.Object;
    var4 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var7)(var3, var1, var2);
    var1 = 0;
    var4 = var6[var1];
    var2 = metroImportDefault;
    var1 = undefined;
    var8 = var2.bind(var1)(var4);
    var _closure1_slot2 = var8;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.QueryIds;
    var2 = 2;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createFetchStore;
    var2 = {};
    var10 = var10.GAME_UPDATE;
    var2['getQueryId'] = var10;
    var10 = function get(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg2;
            var4 = null;
            var2 = var4 != var5;
            var1 = null;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot2;
            var2 = var3.get;
            var2 = var2.bind(var3)(var5);
            var3 = var4 != var2;
            var1 = null;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var2['get'] = var10;
    var10 = function load(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var1 = null;
            if(!(var1 != var5)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            if(!(var1 == var4)) { _fun0002_ip = 7; continue _fun0002 }
case 5:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            _fun0002_ip = 8; continue _fun0002;
case 7:
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var2 = var3.fetchGameUpdate;
            var1 = var2.bind(var3)(var5, var4);
case 8:
            return var1;
        }
    };
    var2['load'] = var10;
    var10 = function getIsLoading(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg2;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 6:
            var3 = _closure1_slot2;
            var2 = var3.isLoading;
            var1 = var2.bind(var3)(var4);
case 9:
            return var1;
        }
    };
    var2['getIsLoading'] = var10;
    var9 = function getError(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg2;
            var1 = null;
            var2 = var1 != var4;
            if(!var2) { _fun0004_ip = 9; continue _fun0004 }
case 6:
            var3 = _closure1_slot2;
            var2 = var3.getError;
            var1 = var2.bind(var3)(var4);
case 9:
            return var1;
        }
    };
    var2['getError'] = var9;
    var2 = var4.bind(var7)(var8, var2);
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_update/useGameUpdateData.tsx';
    var4 = var5.bind(var6)(var4);
    var3['useGameUpdateData'] = var2;
    return var1;
})();