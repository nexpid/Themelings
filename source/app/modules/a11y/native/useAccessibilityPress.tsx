// app/modules/a11y/native/useAccessibilityPress.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var5 = native7;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/a11y/native/useAccessibilityPress.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAccessibilityPress(arg1, arg2) {
        var2 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var2;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot0;
        var3 = var4.useRef;
        var3 = var3.bind(var4)(var2);
        var _closure2_slot2 = var3;
        var6 = var4.useEffect;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var2 = _closure2_slot2;
            var1 = _closure2_slot0;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var2 = var6.bind(var4)(var2, var3);
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var1 = {};
            var2 = function onAccessibilityAction(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.actionName;
                    var1 = 'activate';
                    if(!(var1 === var2)) { _fun0001_ip = 38; continue _fun0001 }
 22:
                    var2 = _closure2_slot2;
                    var1 = var2.current;
                    var1 = var1.bind(var2)();
 38:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onAccessibilityAction'] = var2;
            var3 = {};
            var2 = 'activate';
            var3['name'] = var2;
            var2 = _closure2_slot1;
            var3['label'] = var2;
            var2 = new Array(1);
            var2[0] = var3;
            var1['accessibilityActions'] = var2;
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();