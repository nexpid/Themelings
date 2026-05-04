// app/modules/freeze/native/SuspenseVisibleView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var3 = exports;
        var6 = dependencyMap;
        var1 = metroImportDefault;
        var _closure1_slot0 = var1;
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
        var7 = var6[var1];
        var4 = metroImportAll;
        var1 = undefined;
        var7 = var4.bind(var1)(var7);
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot2 = var4;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.jsx;
        var _closure1_slot3 = var4;
        var4 = 3;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var4 = var8.isIOS;
        var4 = var4.bind(var8)();
        if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var8 = 4;
        var8 = var6[var8];
        var9 = var5.bind(var1)(var8);
        var8 = var9.isFabric;
        var8 = var8.bind(var9)();
        var4 = !var8;
case 2:
        var _closure1_slot4 = var4;
        var4 = var7.forwardRef;
        var2 = function(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = _closure1_slot3;
                var2 = _closure1_slot4;
                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                _fun0002_ip = 6; continue _fun0002;
case 4:
                var3 = _closure1_slot2;
case 6:
                var2 = {};
                var1 = arg2;
                var2['ref'] = var1;
                var6 = arg1;
                var7 = var2;
                var1 = copyDataProperties(var7, var6);
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            }
        };
        var2 = var4.bind(var7)(var2);
        var4 = 6;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/freeze/native/SuspenseVisibleView.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();