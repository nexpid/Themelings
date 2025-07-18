// app/modules/external_pip/useExternalPipAspectRatioUpdater.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var5 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/external_pip/useExternalPipAspectRatioUpdater.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useExternalPipAspectRatioUpdater(arg1, arg2, arg3) {
        var5 = arg2;
        var3 = arg3;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var3;
        var4 = _closure1_slot2;
        var2 = var4.useRef;
        var2 = var2.bind(var4)(var3);
        var _closure2_slot2 = var2;
        var3 = var4.useInsertionEffect;
        var2 = function() {
            var2 = _closure2_slot2;
            var1 = _closure2_slot1;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure2_slot0;
            var4 = var3.getTargetDimensions;
            var2 = _closure2_slot2;
            var2 = var2.current;
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 1;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.setPipAspectRatio;
            var4 = var2.width;
            var2 = var2.height;
            var2 = var5.bind(var6)(var4, var2);
            var2 = var3.subscribeFromItem;
            var1 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = var3.getTargetDimensions;
                    var1 = _closure2_slot2;
                    var1 = var1.current;
                    var1 = var2.bind(var3)(var1);
                    var4 = var1.width;
                    var3 = var1.height;
                    var1 = _closure3_slot0;
                    var1 = var1.width;
                    var1 = var4 === var1;
                    if(!var1) { _fun0001_ip = 69; continue _fun0001 }
 56:
                    var5 = _closure3_slot0;
                    var5 = var5.height;
                    var1 = var3 === var5;
 69:
                    if(var1) { _fun0001_ip = 123; continue _fun0001 }
 72:
                    var1 = {};
                    var1['width'] = var4;
                    var1['height'] = var3;
                    _closure3_slot0 = var1;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 1;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var1 = var2.setPipAspectRatio;
                    var1 = var1.bind(var2)(var4, var3);
 123:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();