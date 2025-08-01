// app/modules/emoji_terms/LazyPromiseInitializer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
        var3 = function LazyPromiseInitializer(arg1) {
            var3 = this;
            var4 = _closure1_slot0;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = false;
            var3['loading'] = var2;
            var3['loaded'] = var2;
            var2 = arg1;
            var3['loader'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'setParams';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var2 = this;
                var3 = var2.param;
                if(!(var3 !== var1)) { _fun0001_ip = 36; continue _fun0001 }
 16:
                var2['param'] = var1;
                var1 = false;
                var2['loading'] = var1;
                var2['loaded'] = var1;
 36:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'get';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.ensureLoaded;
            var2 = var2.bind(var1)();
            var1 = var1.val;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'ensureLoaded';
        var1['key'] = var6;
        var5 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var _closure3_slot0 = var4;
                var2 = var4.loaded;
                if(var2) { _fun0002_ip = 83; continue _fun0002 }
 18:
                var2 = var4.loading;
                if(var2) { _fun0002_ip = 83; continue _fun0002 }
 27:
                var3 = var4.param;
                var2 = undefined;
                if(!(var2 !== var3)) { _fun0002_ip = 83; continue _fun0002 }
 39:
                var3 = var4.param;
                var _closure3_slot1 = var3;
                var2 = true;
                var4['loading'] = var2;
                var2 = var4.loader;
                var3 = var2.bind(var4)(var3);
                var2 = var3.then;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure3_slot1;
                        var2 = _closure3_slot0;
                        var2 = var2.param;
                        if(!(var3 === var2)) { _fun0003_ip = 50; continue _fun0003 }
 21:
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var2['val'] = var1;
                        var1 = false;
                        var2['loading'] = var1;
                        var1 = true;
                        var2['loaded'] = var1;
 50:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
 83:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emoji_terms/LazyPromiseInitializer.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();