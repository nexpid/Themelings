// app/modules/app_startup/native/executeRunnable.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.init;
    var _closure1_slot5 = var7;
    var4 = var4.applicationReady;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_startup/native/executeRunnable.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function executeRunnable(arg1, arg2) {
        var8 = arg1;
        var _closure2_slot0 = var8;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot1;
        var7 = _closure1_slot3;
        var2 = 2;
        var2 = var7[var2];
        var6 = undefined;
        var2 = var3.bind(var6)(var2);
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var14 = var3;
        var13 = var8;
        var2 = new var14[var2](var13, var12);
        var9 = var2 instanceof Object ? var2 : var3;
        var4 = var9.log;
        var2 = global;
        var3 = var2.HermesInternal;
        var11 = var3.concat;
        var10 = 'Loading the ';
        var3 = ' Discord runnable';
        var3 = var11.bind(var10)(var8, var3);
        var3 = var4.bind(var9)(var3);
        var4 = _closure1_slot2;
        var3 = 3;
        var3 = var7[var3];
        var10 = var4.bind(var6)(var3);
        var9 = var10.setIsPaused;
        var3 = false;
        var3 = var9.bind(var10)(var3);
        var3 = 4;
        var3 = var7[var3];
        var4 = var4.bind(var6)(var3);
        var3 = var4.withRequest;
        var2 = var2.HermesInternal;
        var7 = var2.concat;
        var2 = 'executeRunnable:';
        var2 = var7.bind(var2)(var8);
        var5 = _closure1_slot4;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 247; continue _fun0001 }
 10:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 5;
                    var2 = var5[var2];
                    var6 = undefined;
                    var3 = var3.bind(var6)(var2);
                    var2 = var3.identifyWebSocket;
                    var2 = var2.bind(var3)();
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var2 = var5[var2];
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.init;
                    var3 = var5.measureAsync;
                    var2 = _closure1_slot5;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=86);
 84:
                    return var2;
 86:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 244; continue _fun0001 }
 95:
                    var3 = _closure1_slot6;
                    var3 = var3.promise;
                    SaveGenerator(address=109);
 107:
                    return var3;
 109:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 241; continue _fun0001 }
 118:
                    var8 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var5 = 4;
                    var5 = var7[var5];
                    var9 = var8.bind(var6)(var5);
                    var8 = var9.startBridgeTo;
                    var10 = _closure2_slot0;
                    var5 = var10.toLowerCase;
                    var11 = var5.bind(var10)();
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var10 = var5.concat;
                    var5 = 'AppContainer:';
                    var5 = var10.bind(var5)(var11);
                    var5 = var8.bind(var9)(var5);
                    var5 = _closure1_slot1;
                    var4 = 7;
                    var4 = var7[var4];
                    var8 = var5.bind(var6)(var4);
                    var7 = var8.time;
                    var6 = '🏃';
                    var5 = 'Run';
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.Emitter;
                        var2 = var3.batched;
                        var1 = _closure2_slot1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = var7.bind(var8)(var6, var5, var4);
                    return var4;
 241:
                    return var3;
 244:
                    return var2;
 247:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var5.bind(var6)(var1);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();