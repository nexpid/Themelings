// app/lib/uploader/UploaderQueue.tsx
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
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var5[var4];
    var7 = var6.bind(var1)(var4);
    var4 = var7.prototype;
    var6 = Object.create(var4, {constructor: {value: var7}});
    var11 = 'UploaderQueue.tsx';
    var12 = var6;
    var4 = new var12[var7](var11, var10);
    var4 = var4 instanceof Object ? var4 : var6;
    var _closure1_slot3 = var4;
    var2 = function() {
        var4 = _closure1_slot2;
        var3 = function UploaderQueue() {
            var3 = this;
            var4 = _closure1_slot1;
            var2 = _closure2_slot1;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = new Array(0);
            var3['queue'] = var2;
            var2 = false;
            var3['drainingQueue'] = var2;
            return var1;
        };
        var _closure2_slot1 = var3;
        var5 = {};
        var2 = 'enqueue';
        var5['key'] = var2;
        var2 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = this;
                var4 = var2.queue;
                var3 = var4.unshift;
                var1 = arg1;
                var1 = var3.bind(var4)(var1);
                var4 = _closure1_slot3;
                var3 = var4.log;
                var1 = var2.drainingQueue;
                var5 = 'no';
                if(!var1) { _fun0001_ip = 55; continue _fun0001 }
 49:
                var5 = 'yes';
 55:
                var1 = 'enqueue() - alreadying draining? ';
                var1 = var1 + var5;
                var1 = var3.bind(var4)(var1);
                var1 = var2.drainingQueue;
                if(var1) { _fun0001_ip = 89; continue _fun0001 }
 79:
                var1 = var2.drainQueue;
                var1 = var1.bind(var2)();
 89:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var2;
        var2 = new Array(2);
        var2[0] = var5;
        var5 = {};
        var7 = 'drainQueue';
        var5['key'] = var7;
        var8 = _closure1_slot0;
        var1 = undefined;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 297; continue _fun0002 }
 15:
                    var2 = undefined;
                    var7 = undefined;
                    var9 = undefined;
                    var _closure4_slot0 = var2;
                    var3 = true;
                    var4['drainingQueue'] = var3;
                    var11 = _closure1_slot3;
                    var10 = var11.log;
                    var6 = var4.queue;
                    var13 = var6.length;
                    var6 = global;
                    var8 = var6.HermesInternal;
                    var12 = var8.concat;
                    var8 = 'drainQueue() - starting, queue length: ';
                    var8 = var12.bind(var8)(var13);
                    var8 = var10.bind(var11)(var8);
                    var10 = var4.queue;
                    var8 = var10.pop;
                    var10 = var8.bind(var10)();
                    var7 = var10;
                    var8 = null;
                    if(!(var8 != var10)) { _fun0002_ip = 265; continue _fun0002 }
 114: // try_start_0
                    var11 = _closure1_slot3;
                    var10 = var11.log;
                    var8 = 'drainQueue() - start uploader';
                    var8 = var10.bind(var11)(var8);
                    var7 = var7.bind(var2)();
                    var9 = var7;
                    _closure4_slot0 = var7;
                    var8 = var6.Promise;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {constructor: {value: var8}});
                    var14 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var4 = arg1;
                            var _closure5_slot0 = var4;
                            var3 = _closure4_slot0;
                            var3 = var3._aborted;
                            if(var3) { _fun0003_ip = 35; continue _fun0003 }
 25:
                            var5 = _closure4_slot0;
                            var3 = var5._errored;
 35:
                            if(!var3) { _fun0003_ip = 44; continue _fun0003 }
 38:
                            var3 = undefined;
                            var3 = var4.bind(var3)();
 44:
                            var6 = _closure4_slot0;
                            var5 = var6.addListener;
                            var4 = 'complete';
                            var3 = function() {
                                var2 = _closure5_slot0;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                                return var1;
                            };
                            var3 = var5.bind(var6)(var4, var3);
                            var4 = _closure4_slot0;
                            var3 = var4.addListener;
                            var2 = 'error';
                            var1 = function() {
                                var2 = _closure5_slot0;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                                return var1;
                            };
                            var1 = var3.bind(var4)(var2, var1);
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var15 = var7;
                    var5 = new var15[var8](var14, var13);
                    var5 = var5 instanceof Object ? var5 : var7;
                    SaveGenerator(address=183);
 181:
                    return var5;
 183:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 233; continue _fun0002 }
 189:
                    var8 = _closure1_slot3;
                    var7 = var8.log;
                    var10 = var9.id;
                    var6 = var6.HermesInternal;
                    var9 = var6.concat;
                    var6 = 'drainQueue() Uploader complete - ';
                    var6 = var9.bind(var6)(var10);
                    var6 = var7.bind(var8)(var6);
 231: // try_end0
                    _fun0002_ip = 252; continue _fun0002;
 233:
                    return var5;
 236: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var6 = _closure1_slot3;
                    var5 = var6.error;
                    var5 = var5.bind(var6)(var7);
 252:
                    var5 = var4.drainQueue;
                    var5 = var5.bind(var4)();
                    return var2;
 265:
                    var6 = _closure1_slot3;
                    var5 = var6.log;
                    var3 = 'drainQueue() - No uploads left, setting drainingQueue to false';
                    var3 = var5.bind(var6)(var3);
                    var3 = false;
                    var4['drainingQueue'] = var3;
                    return var2;
 297:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var1)(var7);
        var _closure2_slot0 = var7;
        var6 = function drainQueue() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var6;
        var2[1] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var12 = var4;
    var2 = new var12[var2](var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 4;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/uploader/UploaderQueue.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();