// app/modules/gateway/AltGatewayTracker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var7);
    var _closure1_slot0 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot1 = var7;
    var4 = var4.window;
    var4 = var4.GLOBAL_ENV;
    var4 = var4.GATEWAY_ALT_ENDPOINT;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.bind(var1)();
    var _closure1_slot3 = var4;
    var2 = function() {
        var4 = _closure1_slot1;
        var3 = function AltGatewayTracker() {
            var3 = this;
            var4 = _closure1_slot0;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = 0;
            var3['failures'] = var2;
            var2 = false;
            var3['fallbackTripped'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'shouldUseAltGateway';
        var1['key'] = var2;
        var2 = function value() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = this;
                var1 = var1.fallbackTripped;
                var1 = !var1;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure1_slot2;
                var2 = null;
                var1 = var2 != var3;
case 2:
                if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var1 = _closure1_slot3;
case 4:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(5);
        var2[0] = var1;
        var1 = {};
        var6 = 'getAltGatewayUrl';
        var1['key'] = var6;
        var6 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = this;
                var1 = var2.shouldUseAltGateway;
                var2 = var1.bind(var2)();
                var1 = null;
                if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = _closure1_slot2;
case 6:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'recordSuccess';
        var1['key'] = var6;
        var6 = function value() {
            var2 = 0;
            var1 = this;
            var1['failures'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'recordFailure';
        var1['key'] = var6;
        var6 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = this;
                var1 = var2.shouldUseAltGateway;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var3 = var2.failures;
                var1 = 1;
                var1 = var3 + var1;
                var2['failures'] = var1;
                var3 = var2.failures;
                var1 = 3;
                if(!(var3 >= var1)) { _fun0003_ip = 8; continue _fun0003 }
case 10:
                var1 = true;
                var2['fallbackTripped'] = var1;
case 8:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'reset';
        var1['key'] = var6;
        var5 = function value() {
            var2 = this;
            var1 = 0;
            var2['failures'] = var1;
            var1 = false;
            var2['fallbackTripped'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[4] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 3;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gateway/AltGatewayTracker.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();