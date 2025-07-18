// app/design/components/Navigator/native/useFocusRefOnNavigation.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Navigator/native/useFocusRefOnNavigation.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFocusRefOnNavigation(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.inputRef;
            var _closure2_slot0 = var7;
            var8 = var1.enabled;
            var1 = undefined;
            if(!(var8 === var1)) { _fun0001_ip = 28; continue _fun0001 }
 26:
            var8 = true;
 28:
            var _closure2_slot1 = var8;
            var _closure2_slot2 = var1;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 1;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.useIsFocused;
            var6 = var4.bind(var5)();
            _closure2_slot2 = var6;
            var5 = _closure1_slot2;
            var4 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.runAfterInteractions;
                var2 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var2 = _closure2_slot1;
                        if(!var2) { _fun0002_ip = 14; continue _fun0002 }
 10:
                        var2 = _closure2_slot2;
 14:
                        if(!var2) { _fun0002_ip = 42; continue _fun0002 }
 17:
                        var1 = _closure2_slot0;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0002_ip = 42; continue _fun0002 }
 32:
                        var1 = var2.focus;
                        var1 = var1.bind(var2)();
 42:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.cancel;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();