// app/modules/guild_onboarding/LandingAssetUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/guild_onboarding/LandingAssetUtils.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function replaceFlagIconAndFlagColor(arg1, arg2, arg3) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var3 = arg3;
        var _closure2_slot1 = var3;
        var3 = var1.assets;
        var4 = 0;
        var5 = var3[var4];
        var3 = arg2;
        var5['p'] = var3;
        var6 = var1.layers;
        var5 = var6.findIndex;
        var3 = function(arg1) {
            var1 = arg1;
            var2 = var1.nm;
            var1 = 'flag';
            var1 = var1 === var2;
            return var1;
        };
        var5 = var5.bind(var6)(var3);
        var _closure2_slot2 = var5;
        var3 = var1.layers;
        var3 = var3[var5];
        var3 = var3.shapes;
        var3 = var3[var4];
        var4 = var3.it;
        var3 = var4.forEach;
        var2 = function(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = arg2;
                var2 = _closure2_slot0;
                var5 = var2.layers;
                var2 = _closure2_slot2;
                var2 = var5[var2];
                var2 = var2.shapes;
                var5 = 0;
                var2 = var2[var5];
                var2 = var2.it;
                var2 = var2[var4];
                var6 = var2.ty;
                var2 = 'gr';
                if(!(var2 === var6)) { _fun0001_ip = 225; continue _fun0001 }
 64:
                var2 = _closure2_slot0;
                var6 = var2.layers;
                var2 = _closure2_slot2;
                var2 = var6[var2];
                var2 = var2.shapes;
                var2 = var2[var5];
                var2 = var2.it;
                var2 = var2[var4];
                var7 = var2.it;
                var6 = var7.findIndex;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.ty;
                    var1 = 'fl';
                    var1 = var1 === var2;
                    return var1;
                };
                var2 = var6.bind(var7)(var2);
                if(!(var2 >= var5)) { _fun0001_ip = 225; continue _fun0001 }
 125:
                var2 = _closure2_slot0;
                var6 = var2.layers;
                var2 = _closure2_slot2;
                var2 = var6[var2];
                var2 = var2.shapes;
                var2 = var2[var5];
                var2 = var2.it;
                var2 = var2[var4];
                var2 = var2.it;
                var4 = 1;
                var2 = var2[var4];
                var2 = var2.c;
                var6 = _closure2_slot1;
                var3 = var6.map;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = 256;
                    var1 = var2 / var1;
                    return var1;
                };
                var9 = var3.bind(var6)(var1);
                var1 = new Array(1);
                var10 = var1;
                var8 = 0;
                var3 = arraySpread(var10, var9, var8);
                var1[var3] = var4;
                var3 = var3 + var4;
                var2['k'] = var1;
 225:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();