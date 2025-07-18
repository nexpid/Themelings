// discord_common/js/shared/utils/MathUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var2 = true;
    var4['value'] = var2;
    var2 = '__esModule';
    var2 = var5.bind(var6)(var3, var2, var4);
    var2 = {};
    var4 = 'function roundIfClose_MathUtilsTsx1(num,precision){const decimalPart=num-Math.floor(num);if(decimalPart>=1-precision){return Math.ceil(num);}if(decimalPart<=precision){return Math.floor(num);}return num;}';
    var2['code'] = var4;
    var _closure1_slot0 = var2;
    var2 = function() {
        var1 = function roundIfClose(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = arg1;
                var5 = arg2;
                var2 = global;
                var3 = var2.Math;
                var1 = var3.floor;
                var1 = var1.bind(var3)(var4);
                var3 = var4 - var1;
                var1 = 1;
                var1 = var1 - var5;
                if(!(!(var3 >= var1))) { _fun0001_ip = 66; continue _fun0001 }
 40:
                var1 = var4;
                if(!(var3 <= var5)) { _fun0001_ip = 64; continue _fun0001 }
 47:
                var5 = var2.Math;
                var3 = var5.floor;
                var1 = var3.bind(var5)(var4);
 64:
                _fun0001_ip = 83; continue _fun0001;
 66:
                var3 = var2.Math;
                var2 = var3.ceil;
                var1 = var2.bind(var3)(var4);
 83:
                return var1;
            }
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 15933993422996.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot0;
        var1['__initData'] = var2;
        return var1;
    };
    var1 = undefined;
    var2 = var2.bind(var1)();
    var5 = native7;
    var4 = 0;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/shared/utils/MathUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['roundIfClose'] = var2;
    return var1;
})();