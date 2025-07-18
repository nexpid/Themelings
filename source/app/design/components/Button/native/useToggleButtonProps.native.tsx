// app/design/components/Button/native/useToggleButtonProps.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = native7;
    var1 = 0;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Button/native/useToggleButtonProps.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useToggleButtonProps(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var2 = arg2;
            var1 = {};
            if(var2) { _fun0001_ip = 19; continue _fun0001 }
 11:
            var3 = var4.off;
            _fun0001_ip = 25; continue _fun0001;
 19:
            var3 = var4.on;
 25:
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
 0:
            var4 = arg1;
            var2 = arg2;
            var1 = {};
            if(var2) { _fun0002_ip = 19; continue _fun0002 }
 11:
            var3 = var4.off;
            _fun0002_ip = 25; continue _fun0002;
 19:
            var3 = var4.on;
 25:
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