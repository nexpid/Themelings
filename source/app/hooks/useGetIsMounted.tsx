// app/hooks/useGetIsMounted.tsx
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
    var4 = 'hooks/useGetIsMounted.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default() {
        var4 = _closure1_slot0;
        var3 = var4.useRef;
        var2 = true;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot0 = var2;
        var5 = var4.useEffect;
        var3 = function() {
            var1 = function() {
                var2 = _closure2_slot0;
                var1 = false;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            return var1;
        };
        var2 = new Array(0);
        var2 = var5.bind(var4)(var3, var2);
        var3 = var4.useCallback;
        var2 = function() {
            var1 = _closure2_slot0;
            var1 = var1.current;
            return var1;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();