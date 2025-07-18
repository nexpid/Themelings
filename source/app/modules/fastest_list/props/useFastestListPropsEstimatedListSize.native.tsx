// app/modules/fastest_list/props/useFastestListPropsEstimatedListSize.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot0 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Dimensions;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/fastest_list/props/useFastestListPropsEstimatedListSize.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFastestListPropsEstimatedListSize(arg1) {
        var1 = arg1;
        var3 = var1.estimatedListSize;
        var _closure2_slot0 = var3;
        var1 = var1.horizontal;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot1;
        var3 = var4.useState;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = 'windowSize';
                if(!(var1 !== var3)) { _fun0001_ip = 21; continue _fun0001 }
 15:
                var1 = _closure2_slot0;
                _fun0001_ip = 64; continue _fun0001;
 21:
                var2 = _closure2_slot1;
                var5 = _closure1_slot2;
                var4 = var5.get;
                var3 = 'window';
                var3 = var4.bind(var5)(var3);
                if(var2) { _fun0001_ip = 56; continue _fun0001 }
 49:
                var2 = var3.height;
                _fun0001_ip = 61; continue _fun0001;
 56:
                var2 = var3.width;
 61:
                var1 = var2;
 64:
                return var1;
            }
        };
        var4 = var3.bind(var4)(var2);
        var3 = _closure1_slot0;
        var2 = undefined;
        var1 = 2;
        var3 = var3.bind(var2)(var4, var1);
        var1 = 0;
        var1 = var3[var1];
        var2 = 1;
        var2 = var3[var2];
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();