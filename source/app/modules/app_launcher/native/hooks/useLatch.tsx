// app/modules/app_launcher/native/hooks/useLatch.tsx
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
    var4 = 'modules/app_launcher/native/hooks/useLatch.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useLatch(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var3 = var5.useRef;
        var1 = false;
        var1 = var3.bind(var5)(var1);
        var _closure2_slot1 = var1;
        var1 = {};
        var7 = var5.useCallback;
        var4 = function(arg1) {
            var1 = arg1;
            var2 = _closure2_slot1;
            var2['current'] = var1;
            return var1;
        };
        var3 = new Array(0);
        var3 = var7.bind(var5)(var4, var3);
        var1['setLatch'] = var3;
        var4 = var5.useCallback;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot1;
                var2 = var2.current;
                if(!var2) { _fun0001_ip = 37; continue _fun0001 }
 15:
                var3 = _closure2_slot1;
                var2 = false;
                var3['current'] = var2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var2.bind(var1)();
 37:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['tryCallback'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();