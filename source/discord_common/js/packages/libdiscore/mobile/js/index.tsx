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
        var4 = 3;
        var4 = var8[var4];
        var4 = var7.bind(var1)(var4);
        var4 = var4.typedGlobal;
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
        var6 = 4;
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
        var4 = function getFluxApi() {
            var1 = {};
            var4 = _closure1_slot2;
            var4 = var4.registerKvStore;
            var1['registerKvStore'] = var4;
            var4 = _closure1_slot2;
            var4 = var4.registerKkvStore;
            var1['registerKkvStore'] = var4;
            var4 = _closure1_slot2;
            var4 = var4.findStoresThatCanHandleActionType;
            var1['findStoresThatCanHandleActionType'] = var4;
            var3 = _closure1_slot2;
            var3 = var3.getRegisteredActionTypes;
            var1['getActions'] = var3;
            var3 = function dispatchAction(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var1 = arg2;
 6: // try_start_0
                    var5 = _closure1_slot2;
                    var4 = var5.dispatchAction;
                    var1 = var4.bind(var5)(var2, var1);
 25: // try_end0
                    return var1;
 27: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var3 = var5;
                    var1 = {};
                    var2 = false;
                    var1['ok'] = var2;
                    var2 = global;
                    var4 = var2.Error;
                    var4 = var5 instanceof var4;
                    if(var4) { _fun0002_ip = 74; continue _fun0002 }
 56:
                    var5 = var2.String;
                    var4 = var3;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    _fun0002_ip = 79; continue _fun0002;
 74:
                    var2 = var3.message;
 79:
                    var1['error'] = var2;
                    return var1;
                }
            };
            var1['dispatchAction'] = var3;
            var2 = function getMemoryStatistics(arg1) {
                var3 = _closure1_slot2;
                var2 = var3.getStoreMemoryStatistics;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['getMemoryStatistics'] = var2;
            return var1;
        };
        var3['getFluxApi'] = var4;
        var4 = function crash() {
            var2 = _closure1_slot2;
            var1 = var2.crash;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var3['crash'] = var4;
        var4 = function generateLaunchSignature(arg1) {
            var3 = _closure1_slot2;
            var2 = var3.generateLaunchSignature;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3['generateLaunchSignature'] = var4;
        var2 = function getHttpClientAPI() {
            var1 = {};
            var3 = _closure1_slot2;
            var3 = var3.httpRequest;
            var1['httpRequest'] = var3;
            var3 = _closure1_slot2;
            var3 = var3.getHttpRequestStatus;
            var1['getHttpRequestStatus'] = var3;
            var3 = _closure1_slot2;
            var3 = var3.cancelHttpRequest;
            var1['cancelHttpRequest'] = var3;
            var2 = _closure1_slot2;
            var2 = var2.getTrackedRequestCount;
            var1['getTrackedRequestCount'] = var2;
            return var1;
        };
        var3['getHttpClientAPI'] = var2;
        return var1;
    }
})();