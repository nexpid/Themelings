// app/modules/gateway/getCachedUseAltGateway.native.tsx
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
    var4 = 'modules/gateway/getCachedUseAltGateway.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getCachedUseAltGateway() {
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
            var1 = var1.DCDFastConnectManager;
            var3 = var1.useAltGateway;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var3;
case 4:
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getConstants;
            var2 = var2.bind(var3)();
            var3 = var2.useAltGateway;
            var2 = null;
            var2 = var2 != var3;
            if(!var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = var3;
case 7:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();