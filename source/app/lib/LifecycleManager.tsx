// app/lib/LifecycleManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var2 = function() {
        var4 = _closure1_slot1;
        var3 = function LifecycleManager() {
            var3 = this;
            var4 = _closure1_slot0;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = false;
            var3['isInitialized'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'initialize';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = this;
                var8 = 0;
                var4 = copyRestArgs(var8);
                var1 = var3.isInitialized;
                if(var1) { _fun0001_ip = 61; continue _fun0001 }
 18:
                var1 = true;
                var3['isInitialized'] = var1;
                var2 = var3._initialize;
                var1 = new Array(0);
                var8 = var1;
                var7 = var4;
                var6 = 0;
                var4 = arraySpread(var8, var7, var6);
                var8 = var2;
                var7 = var1;
                var6 = var3;
                var1 = apply(var8, var7, var6);
 61:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'terminate';
        var1['key'] = var6;
        var5 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = this;
                var1 = var2.isInitialized;
                if(!var1) { _fun0002_ip = 30; continue _fun0002 }
 12:
                var1 = false;
                var2['isInitialized'] = var1;
                var1 = var2._terminate;
                var1 = var1.bind(var2)();
 30:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 2;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/LifecycleManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();