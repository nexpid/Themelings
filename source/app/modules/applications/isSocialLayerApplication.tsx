// app/modules/applications/isSocialLayerApplication.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function isSocialLayerApplication(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var7 = 1;
            var1 = var1[var7];
            var6 = undefined;
            var4 = var3.bind(var6)(var1);
            var3 = var4.hasApplicationFlag;
            var1 = _closure1_slot2;
            var1 = var1.SOCIAL_LAYER_INTEGRATION_LIMITED;
            var1 = var3.bind(var4)(var5, var1);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var4 = var4.bind(var6)(var3);
            var3 = var4.hasApplicationFlag;
            var2 = _closure1_slot2;
            var2 = var2.SOCIAL_LAYER_INTEGRATION;
            var1 = var3.bind(var4)(var5, var2);
case 2:
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
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.ApplicationFlags;
    var _closure1_slot2 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/applications/isSocialLayerApplication.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function isSocialLayerSDKAuthorization(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg2;
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = var4.some;
            var2 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isSocialLayerUmbrellaScope;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var3['isSocialLayerSDKAuthorization'] = var2;
    return var1;
})();