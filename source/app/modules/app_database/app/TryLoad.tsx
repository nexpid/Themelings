// app/modules/app_database/app/TryLoad.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function _tryLoadAsync() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = arg1;
case 4: // try_start_0
                    var3 = var2;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    SaveGenerator(address=23);
case 5:
                    return var2;
case 6:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 7; continue _fun0001 }
case 8: // try_end0
                    return var2;
case 7:
                    return var2;
case 9: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot3;
                    var3 = var4.log;
                    var2 = 'database load failed.';
                    var2 = var3.bind(var4)(var2, var5);
                    var2 = null;
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot4 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = function _tryLoadOrResetCacheGatewayAsync() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 4:
                    var8 = arg1;
                    var2 = arg2;
                    var11 = arg3;
case 11: // try_start_0
                    var3 = var2;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    SaveGenerator(address=32);
case 12:
                    return var2;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 14: // try_end0
                    return var2;
case 13:
                    return var2;
case 15: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var9 = _closure1_slot3;
                    var6 = var9.log;
                    var12 = var8;
                    var7 = global;
                    var4 = var7.HermesInternal;
                    var10 = var4.concat;
                    var5 = '';
                    var4 = ': exception thrown, resetting socket.';
                    var5 = var10.bind(var5)(var12, var4);
                    var4 = var2.stack;
                    var4 = var6.bind(var9)(var5, var2, var4);
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 2;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'RESET_SOCKET';
                    var3['type'] = var6;
                    var6 = {};
                    var6['error'] = var2;
                    var2 = var7.HermesInternal;
                    var2 = var2.concat;
                    var10 = 'tryLoadOrResetCacheGatewayAsync (';
                    var9 = ')';
                    var2 = var2.bind(var10)(var12, var9);
                    var6['action'] = var2;
                    var12 = var11;
                    var2 = null;
                    if(!(var2 == var12)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    _fun0002_ip = 18; continue _fun0002;
case 16:
                    var8 = var11;
case 18:
                    var7 = var7.HermesInternal;
                    var7 = var7.concat;
                    var7 = var7.bind(var10)(var8, var9);
                    var6['metricAction'] = var7;
                    var7 = true;
                    var6['clearCache'] = var7;
                    var3['args'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 10:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var7 = var6.bind(var1)(var4);
    var4 = var7.prototype;
    var6 = Object.create(var4, {constructor: {value: var7}});
    var11 = 'TryLoad';
    var12 = var6;
    var4 = new var12[var7](var11, var10);
    var4 = var4 instanceof Object ? var4 : var6;
    var _closure1_slot3 = var4;
    var4 = 3;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/app/TryLoad.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function tryLoad(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
case 19: // try_start_0
            var2 = var1;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 20: // try_end0
            return var1;
case 21: // catch_target0
            CatchBlockStart(arg_register=3);
            var3 = _closure1_slot3;
            var2 = var3.log;
            var1 = 'database load failed.';
            var1 = var2.bind(var3)(var1, var4);
            var1 = null;
            return var1;
        }
    };
    var3['tryLoad'] = var4;
    var4 = function tryLoadAsync() {
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['tryLoadAsync'] = var4;
    var4 = function tryLoadOrResetCacheGateway(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var7 = arg1;
            var1 = arg2;
            var10 = arg3;
case 22: // try_start_0
            var2 = var1;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 23: // try_end0
            return var1;
case 24: // catch_target0
            CatchBlockStart(arg_register=0);
            var8 = _closure1_slot3;
            var5 = var8.log;
            var11 = var7;
            var6 = global;
            var3 = var6.HermesInternal;
            var9 = var3.concat;
            var4 = '';
            var3 = ': exception thrown, resetting socket.';
            var4 = var9.bind(var4)(var11, var3);
            var3 = var1.stack;
            var3 = var5.bind(var8)(var4, var1, var3);
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'RESET_SOCKET';
            var2['type'] = var5;
            var5 = {};
            var5['error'] = var1;
            var1 = var6.HermesInternal;
            var1 = var1.concat;
            var9 = 'tryLoadOrResetCacheGateway (';
            var8 = ')';
            var1 = var1.bind(var9)(var11, var8);
            var5['action'] = var1;
            var11 = var10;
            var1 = null;
            if(!(var1 == var11)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            _fun0004_ip = 27; continue _fun0004;
case 25:
            var7 = var10;
case 27:
            var6 = var6.HermesInternal;
            var6 = var6.concat;
            var6 = var6.bind(var9)(var7, var8);
            var5['metricAction'] = var6;
            var6 = true;
            var5['clearCache'] = var6;
            var2['args'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['tryLoadOrResetCacheGateway'] = var4;
    var2 = function tryLoadOrResetCacheGatewayAsync() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['tryLoadOrResetCacheGatewayAsync'] = var2;
    return var1;
})();