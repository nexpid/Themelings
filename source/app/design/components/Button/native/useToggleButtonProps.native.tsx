// app/design/components/Button/native/useToggleButtonProps.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Button/native/useToggleButtonProps.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useToggleButtonProps(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var1 = {};
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.off;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var3 = var4.on;
case 4:
            var7 = var1;
            var6 = var3;
            var3 = copyDataProperties(var7, var6);
            var4 = 'togglebutton';
            var3 = 'accessibilityRole';
            var1[var3] = var4;
            var3 = {};
            var3['checked'] = var2;
            var2 = 'accessibilityState';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['useToggleButtonProps'] = var4;
    var2 = function useToggleIconButtonProps(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var1 = {};
            if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var3 = var4.off;
            _fun0002_ip = 4; continue _fun0002;
case 2:
            var3 = var4.on;
case 4:
            var7 = var1;
            var6 = var3;
            var3 = copyDataProperties(var7, var6);
            var4 = 'togglebutton';
            var3 = 'accessibilityRole';
            var1[var3] = var4;
            var3 = {};
            var3['checked'] = var2;
            var2 = 'accessibilityState';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['useToggleIconButtonProps'] = var2;
    return var1;
})();