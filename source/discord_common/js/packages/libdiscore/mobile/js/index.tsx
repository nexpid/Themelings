// discord_common/js/packages/libdiscore/mobile/js/index.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var7 = require;
        var6 = metroImportDefault;
        var3 = exports;
        var8 = dependencyMap;
        var5 = global;
        var10 = var5.Object;
        var9 = var10.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var9.bind(var10)(var3, var1, var4);
        var1 = 0;
        var4 = var8[var1];
        var1 = undefined;
        var4 = var6.bind(var1)(var4);
        var _closure1_slot0 = var4;
        var4 = 1;
        var4 = var8[var4];
        var4 = var6.bind(var1)(var4);
        var _closure1_slot1 = var4;
        var4 = 2;
        var4 = var8[var4];
        var4 = var7.bind(var1)(var4);
        var4 = var4.NativeModules;
        var6 = var4.LibDiscoreModule;
        if(var6) { _fun0001_ip = 150; continue _fun0001 }
 106:
        var10 = var5.Proxy;
        var9 = {};
        var5 = function get() {
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = "The package 'react-native-libdiscore-jsi-module' doesn't seem to be linked";
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        };
        var9['get'] = var5;
        var5 = var10.prototype;
        var6 = Object.create(var5, {constructor: {value: var10}});
        var13 = {};
        var14 = var6;
        var12 = var9;
        var5 = new var14[var10](var13, var12, var11);
        var5 = var5 instanceof Object ? var5 : var6;
        _fun0001_ip = 156; continue _fun0001;
 150:
        var5 = var4.LibDiscoreModule;
 156:
        var4 = var5.bridgeJSIFunctions;
        var4 = var4.bind(var5)();
        var4 = global;
        var4 = var4.LIBDISCORE_JSI;
        var _closure1_slot2 = var4;
        var5 = var4.ExperimentCacher;
        var4 = function() {
            var5 = _closure1_slot1;
            var4 = function BlockedDomainsStore() {
                var4 = _closure1_slot0;
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = this;
                var2 = var4.bind(var1)(var2, var3);
                return var1;
            };
            var _closure2_slot0 = var4;
            var1 = {};
            var3 = 'isBlockedDomain';
            var1['key'] = var3;
            var3 = function value(arg1) {
                var3 = _closure1_slot2;
                var2 = var3.isBlockedDomain;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['value'] = var3;
            var3 = new Array(2);
            var3[0] = var1;
            var1 = {};
            var6 = 'startFetchingBlockedDomains';
            var1['key'] = var6;
            var2 = function value(arg1) {
                var3 = _closure1_slot2;
                var2 = var3.startFetchingBlockedDomains;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1['value'] = var2;
            var3[1] = var1;
            var2 = undefined;
            var1 = null;
            var1 = var5.bind(var2)(var4, var1, var3);
            return var1;
        };
        var4 = var4.bind(var1)();
        var6 = 3;
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = '../discord_common/js/packages/libdiscore/mobile/js/index.tsx';
        var6 = var7.bind(var8)(var6);
        var3['ExperimentCacher'] = var5;
        var5 = function rustMultiply(arg1, arg2) {
            var4 = _closure1_slot2;
            var3 = var4.rustMultiply;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var3['rustMultiply'] = var5;
        var5 = function consumeLogs() {
            var2 = _closure1_slot2;
            var1 = var2.consumeLogs;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3['consumeLogs'] = var5;
        var3['BlockedDomainsStore'] = var4;
        var4 = function getKvDatabaseAPI() {
            var1 = {};
            var3 = function registerStore(arg1, arg2, arg3) {
                var5 = arg2;
                var4 = _closure1_slot2;
                var3 = var4.registerKvStore;
                var2 = arg1;
                var1 = arg3;
                var1 = var3.bind(var4)(var2, var5, var1);
                var2 = var1.storeToken;
                var4 = var1.root;
                var3 = var1.derived;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3);
                var1 = {};
                var1['storeToken'] = var2;
                return var1;
            };
            var1['registerStore'] = var3;
            var4 = _closure1_slot2;
            var4 = var4.findStoresThatCanHandleActionType;
            var1['findStoresThatCanHandleActionType'] = var4;
            var4 = _closure1_slot2;
            var4 = var4.getRegisteredActionTypes;
            var1['getActions'] = var4;
            var3 = _closure1_slot2;
            var3 = var3.dispatchAction;
            var1['dispatchAction'] = var3;
            var2 = function getMemoryStatistics(arg1) {
                var3 = _closure1_slot2;
                var2 = var3.getKvStoreMemoryStatistics;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['getMemoryStatistics'] = var2;
            return var1;
        };
        var3['getKvDatabaseAPI'] = var4;
        var4 = function crash() {
            var2 = _closure1_slot2;
            var1 = var2.crash;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var3['crash'] = var4;
        var2 = function generateLaunchSignature(arg1) {
            var3 = _closure1_slot2;
            var2 = var3.generateLaunchSignature;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3['generateLaunchSignature'] = var2;
        return var1;
    }
})();