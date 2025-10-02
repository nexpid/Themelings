// app/modules/gateway/GatewayZstdUtils.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = var4.NativeModules;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gateway/GatewayZstdUtils.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function supportsZstd() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 1;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot3;
            var5 = var1.DCDCompressionManager;
            var1 = null;
            var6 = var1 == var5;
            var3 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var5.supportsZstd;
case 4:
            var1 = var1 != var3;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var3;
case 6:
            _fun0001_ip = 8; continue _fun0001;
case 2:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getConstants;
            var2 = var2.bind(var3)();
            var1 = var2.supportsZstd;
case 8:
            return var1;
        }
    };
    var3['supportsZstd'] = var4;
    var2 = function createZstdContextWeb() {
        var1 = global;
        var3 = var1.Error;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var4 = 'Attempting to use createZstdContextWeb in a native context. Use MobileGatewayCompressionHandler instead.';
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        throw var1;
    };
    var3['createZstdContextWeb'] = var2;
    return var1;
})();