// app/hooks/useThrottle.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = native4;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot2 = var2;
    var2 = function throttleStateFn(arg1) {
        var1 = arg1;
        return var1;
    };
    var _closure1_slot3 = var2;
    var2 = function useThrottledFunction(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var9 = arg1;
            var8 = arg2;
            var7 = arguments[2];
            var6 = arguments[3];
            var _closure2_slot0 = var9;
            var _closure2_slot1 = var8;
            var10 = undefined;
            if(!(var7 === var10)) { _fun0001_ip = 32; continue _fun0001 }
 28:
            var7 = new Array(0);
 32:
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var10;
            var5 = _closure1_slot2;
            var3 = var5.useRef;
            var4 = _closure1_slot0;
            var11 = _closure1_slot1;
            var1 = 1;
            var1 = var11[var1];
            var4 = var4.bind(var10)(var1);
            var1 = var4.throttle;
            var1 = var1.bind(var4)(var9, var8, var6);
            var1 = var3.bind(var5)(var1);
            _closure2_slot3 = var1;
            var4 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var9;
            var3[1] = var8;
            var3[2] = var6;
            var12 = 3;
            var14 = var3;
            var13 = var7;
            var6 = arraySpread(var14, var13, var12);
            var2 = function() {
                var2 = _closure2_slot3;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 1;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.throttle;
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var1 = _closure2_slot2;
                var1 = var5.bind(var6)(var4, var3, var1);
                var2['current'] = var1;
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var1 = _closure2_slot3;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0002_ip = 28; continue _fun0002 }
 18:
                        var1 = var2.cancel;
                        var1 = var1.bind(var2)();
 28:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var5)(var2, var3);
            var1 = var1.current;
            return var1;
        }
    };
    var _closure1_slot4 = var2;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'hooks/useThrottle.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var4 = arg2;
            var9 = arguments[2];
            var _closure2_slot0 = var1;
            var8 = undefined;
            if(!(var9 === var8)) { _fun0003_ip = 25; continue _fun0003 }
 21:
            var9 = new Array(0);
 25:
            var _closure2_slot1 = var8;
            var _closure2_slot2 = var8;
            var7 = _closure1_slot4;
            var13 = _closure1_slot3;
            var10 = arguments[3];
            var14 = undefined;
            var12 = var4;
            var11 = var9;
            var8 = var14[var7](var13, var12, var11, var10, var9);
            _closure2_slot1 = var8;
            var7 = _closure1_slot2;
            var2 = var7.useRef;
            var2 = var2.bind(var7)(var1);
            _closure2_slot2 = var2;
            var6 = var7.useEffect;
            var5 = new Array(2);
            var5[0] = var1;
            var5[1] = var8;
            var3 = function() {
                var4 = _closure2_slot1;
                var3 = _closure2_slot0;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot2;
                var2['current'] = var3;
                return var1;
            };
            var3 = var6.bind(var7)(var3, var5);
            var3 = 0;
            if(!(var3 !== var4)) { _fun0003_ip = 122; continue _fun0003 }
 117:
            var1 = var2.current;
 122:
            return var1;
        }
    };
    var3['useThrottledState'] = var4;
    var3['useThrottledFunction'] = var2;
    return var1;
})();