// app/modules/react_asset/native/reactAssetProvider.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var6;
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
        var7 = var4.Image;
        var _closure1_slot2 = var7;
        var4 = var4.NativeModules;
        var7 = 1;
        var7 = var6[var7];
        var8 = var5.bind(var1)(var7);
        var7 = var8.isAndroid;
        var7 = var7.bind(var8)();
        if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var4 = var4.NativeReactAssetModule;
        _fun0001_ip = 4; continue _fun0001;
case 2:
        var7 = 2;
        var8 = var6[var7];
        var7 = metroImportDefault;
        var4 = var7.bind(var1)(var8);
case 4:
        var _closure1_slot3 = var4;
        var4 = 4;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/react_asset/native/reactAssetProvider.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function reactAssetProvider() {
            var1 = global;
            var3 = var1.Promise;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var3 = _closure1_slot3;
                var2 = var3.keysRequest;
                var1 = function(arg1) {
                    var5 = arg1;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 3;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.NATIVE_REQUIRED_ASSETS;
                    var _closure4_slot0 = var4;
                    var4 = var5.map;
                    var3 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var5 = arg1;
                            var1 = _closure4_slot0;
                            var3 = var1[var5];
                            var1 = null;
                            var3 = var1 != var3;
                            var1 = '';
                            if(!var3) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                            var4 = _closure1_slot2;
                            var3 = var4.resolveAssetSource;
                            var2 = _closure4_slot0;
                            var2 = var2[var5];
                            var2 = var3.bind(var4)(var2);
                            var1 = var2.uri;
case 5:
                            return var1;
                        }
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = _closure1_slot3;
                    var2 = var3.valuesResult;
                    var2 = var2.bind(var3)(var4);
                    var3 = _closure3_slot0;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var3['default'] = var2;
        return var1;
    }
})();