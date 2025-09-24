// discord_common/js/packages/libdiscore/js_shim/js/initLibdiscore.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _initLibdiscore() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot0;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 12; continue _fun0001 }
 7:
                    var2 = undefined;
                    return var2;
 12:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot2 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot2 = var1;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot1 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var4 = var7.registerTimerPolyfills;
    var4 = var4.bind(var7)();
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/libdiscore/js_shim/js/initLibdiscore.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isLibdiscoreLoaded() {
        var1 = _closure1_slot1;
        var2 = var1.LibDiscoreModule;
        var1 = undefined;
        var1 = var1 !== var2;
        return var1;
    };
    var3['isLibdiscoreLoaded'] = var4;
    var2 = function initLibdiscore() {
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['initLibdiscore'] = var2;
    return var1;
})();