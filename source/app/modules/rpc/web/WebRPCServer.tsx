// app/modules/rpc/web/WebRPCServer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var2 = function() {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 1;
                    var3 = var6[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.importWithRetry;
                    var2 = {};
                    var5 = function createPromise() {
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var2 = 3;
                        var2 = var1[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = 2;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var2['createPromise'] = var5;
                    var5 = 4;
                    var5 = var6[var5];
                    var2['webpackId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=75);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = var2.default;
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var7 = var2.bind(var1)();
    var2 = 5;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var12 = var7;
    var2 = new var13[var2](var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/web/WebRPCServer.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();