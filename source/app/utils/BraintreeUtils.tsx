// app/utils/BraintreeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function getBraintreeSDK() {
        var4 = _closure1_slot0;
        var6 = _closure1_slot1;
        var2 = 2;
        var3 = var6[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.importWithRetry;
        var2 = {};
        var5 = function createPromise() {
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var2 = 4;
            var2 = var1[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = 3;
            var2 = var1[var2];
            var1 = var1.paths;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var2['createPromise'] = var5;
        var5 = 5;
        var5 = var6[var5];
        var2['webpackId'] = var5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.default;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot4 = var4;
    var1 = function getDeviceData(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var3 = var3.bind(var2)();
        var2 = var3.then;
        var1 = function(arg1) {
            var2 = arg1;
            var4 = var2.dataCollector;
            var3 = var4.create;
            var2 = {};
            var5 = _closure2_slot0;
            var2['client'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.deviceData;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function() {
                var1 = null;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot5 = var1;
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
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.PaymentSettings;
    var _closure1_slot3 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/BraintreeUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getBraintreeSDK'] = var4;
    var2 = function collectDeviceData() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot2;
            var1 = var3.getClient;
            var4 = var1.bind(var3)();
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot5;
            var1 = undefined;
            var1 = var3.bind(var1)(var4);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var3 = _closure1_slot4;
            var2 = undefined;
            var4 = var3.bind(var2)();
            var3 = var4.then;
            var2 = function(arg1) {
                var2 = arg1;
                var4 = var2.client;
                var3 = var4.create;
                var2 = {};
                var5 = _closure1_slot3;
                var5 = var5.BRAINTREE;
                var5 = var5.KEY;
                var2['authorization'] = var5;
                var4 = var3.bind(var4)(var2);
                var3 = var4.then;
                var2 = function(arg1) {
                    var3 = _closure1_slot5;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.catch;
                var1 = function() {
                    var1 = null;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var3['collectDeviceData'] = var2;
    return var1;
})();