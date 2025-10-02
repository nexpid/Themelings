// app/components_native/common/MessageLoadingSpinner.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var3 = exports;
        var6 = dependencyMap;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var1 = 0;
        var7 = var6[var1];
        var4 = metroImportAll;
        var1 = undefined;
        var4 = var4.bind(var1)(var7);
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.requireNativeComponent;
        var4 = var4.ActivityIndicator;
        var _closure1_slot0 = var4;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.jsx;
        var _closure1_slot1 = var4;
        var4 = 3;
        var4 = var6[var4];
        var7 = var5.bind(var1)(var4);
        var4 = var7.isAndroid;
        var7 = var4.bind(var7)();
        var4 = null;
        if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var7 = 'DCDMessageLoadingSpinner';
        var4 = var8.bind(var1)(var7);
case 2:
        var _closure1_slot2 = var4;
        var4 = 4;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'components_native/common/MessageLoadingSpinner.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function _default(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var4 = _closure1_slot2;
                var1 = null;
                if(!(var1 == var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var6 = _closure1_slot1;
                var5 = _closure1_slot0;
                var4 = {};
                var1 = var2.animate;
                var4['animating'] = var1;
                var1 = 'large';
                var4['size'] = var1;
                var8 = var4;
                var7 = var2;
                var1 = copyDataProperties(var8, var7);
                var1 = undefined;
                var1 = var6.bind(var1)(var5, var4);
                _fun0002_ip = 6; continue _fun0002;
case 4:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = {};
                var8 = var3;
                var7 = var2;
                var2 = copyDataProperties(var8, var7);
                var2 = undefined;
                var1 = var5.bind(var2)(var4, var3);
case 6:
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();