// app/modules/search/managers/AbstractSearchFetchManager.tsx
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
        var3 = function AbstractSearchFetchManager() {
            var3 = this;
            var4 = _closure1_slot0;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = global;
            var2 = var2.Map;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var7 = var4;
            var2 = new var7[var2](var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['searchFetchers'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'cleanUp';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var3 = arg1;
            var2 = this;
            var1 = var2.cancel;
            var1 = var1.bind(var2)(var3);
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(5);
        var2[0] = var1;
        var1 = {};
        var6 = 'cancel';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = this;
                var3 = var1.searchFetchers;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                if(!(var1 != var2)) { _fun0001_ip = 38; continue _fun0001 }
 28:
                var1 = var2.cancel;
                var1 = var1.bind(var2)();
 38:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'delete';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.searchFetchers;
            var2 = var3.delete;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'get';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.searchFetchers;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'set';
        var1['key'] = var6;
        var5 = function value(arg1, arg2) {
            var1 = this;
            var4 = var1.searchFetchers;
            var3 = var4.set;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[4] = var1;
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
    var4 = 'modules/search/managers/AbstractSearchFetchManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AbstractSearchFetchManager'] = var2;
    return var1;
})();