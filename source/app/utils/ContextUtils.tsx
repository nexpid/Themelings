// app/utils/ContextUtils.tsx
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/ContextUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createDefinedContext() {
        var3 = function useContext() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot0;
                var2 = var3.useContext;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if(!(var2 != var1)) { _fun0001_ip = 33; continue _fun0001 }
 31:
                return var1;
 33:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var4 = 'Context was used outside of defined provider.';
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot1 = var3;
        var5 = _closure1_slot0;
        var4 = var5.createContext;
        var1 = undefined;
        var4 = var4.bind(var5)(var1);
        var _closure2_slot0 = var4;
        var1 = new Array(3);
        var1[0] = var4;
        var1[1] = var3;
        var2 = function() {
            var3 = _closure2_slot1;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var _closure3_slot0 = var2;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.children;
                var4 = _closure1_slot1;
                var2 = _closure2_slot0;
                var3 = var2.Provider;
                var2 = {};
                var5 = _closure3_slot0;
                var2['value'] = var5;
                var2['children'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            return var1;
        };
        var1[2] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();