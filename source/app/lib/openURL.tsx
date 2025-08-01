// app/lib/openURL.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _openURL() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 121; continue _fun0001 }
 10:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var3 = 1;
                    var4 = var2[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var4 = var4.default;
                    var4 = var4.bind(var3)(var6);
                    var4 = 3;
                    var4 = var2[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = 2;
                    var4 = var2[var4];
                    var2 = var2.paths;
                    var2 = var5.bind(var3)(var4, var2);
                    SaveGenerator(address=79);
 77:
                    return var2;
 79:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 118; continue _fun0001 }
 85:
                    var5 = var2.default;
                    var4 = {};
                    var7 = arg2;
                    var4['skipExtensionCheck'] = var7;
                    var7 = new Array(0);
                    var4['analyticsLocations'] = var7;
                    var4 = var5.bind(var3)(var6, var4);
                    return var3;
 118:
                    return var2;
 121:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot3 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot3 = var1;
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/openURL.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function openURL() {
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();