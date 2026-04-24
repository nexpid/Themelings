// discord_common/js/shared/DevtoolsExtension.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = function reportEvent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot1;
            var1 = undefined;
            var4 = var2.bind(var1)();
            var5 = null;
            var2 = var5 == var4;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.reportEvent;
            var2 = var5 == var3;
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var4.reportEvent;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot0 = var4;
    var1 = function getDevtools() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = global;
            var3 = var2.window;
            var4 = 'undefined';
            var3 = typeof var3;
            var1 = null;
            if(!(var4 !== var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = var2.window;
            var1 = var2.__DISCORD_DEVTOOLS;
case 6:
            return var1;
        }
    };
    var _closure1_slot1 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var5 = dependencyMap;
    var1 = 0;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/shared/DevtoolsExtension.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function logFluxAction(arg1, arg2) {
        var1 = arg1;
        var3 = _closure1_slot0;
        var2 = {};
        var4 = 'Flux-Dispatch';
        var2['type'] = var4;
        var4 = var1.type;
        var2['description'] = var4;
        var2['data'] = var1;
        var1 = arg2;
        var2['durationMs'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['logFluxAction'] = var5;
    var3['reportEvent'] = var4;
    var4 = function notifyStoreCreated(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = _closure1_slot1;
            var1 = undefined;
            var4 = var2.bind(var1)();
            var5 = null;
            var2 = var5 == var4;
            if(var2) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var3 = var4.notifyStoreCreated;
            var2 = var5 == var3;
case 2:
            if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 5:
            var3 = var4.notifyStoreCreated;
            var2 = {};
            var5 = arg1;
            var2['storeName'] = var5;
            var2 = var3.bind(var4)(var2);
case 8:
            return var1;
        }
    };
    var3['notifyStoreCreated'] = var4;
    var2 = function notifyStoreChange(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = _closure1_slot1;
            var1 = undefined;
            var4 = var2.bind(var1)();
            var5 = null;
            var2 = var5 == var4;
            if(var2) { _fun0004_ip = 2; continue _fun0004 }
case 3:
            var3 = var4.notifyStoreChange;
            var2 = var5 == var3;
case 2:
            if(var2) { _fun0004_ip = 8; continue _fun0004 }
case 5:
            var3 = var4.notifyStoreChange;
            var2 = {};
            var5 = arg1;
            var2['storeName'] = var5;
            var2 = var3.bind(var4)(var2);
case 8:
            return var1;
        }
    };
    var3['notifyStoreChange'] = var2;
    return var1;
})();