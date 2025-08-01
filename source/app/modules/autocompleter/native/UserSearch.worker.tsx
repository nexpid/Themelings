// app/modules/autocompleter/native/UserSearch.worker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = require;
    var6 = metroImportDefault;
    var4 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot6 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = 0;
    var5 = var4[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot0 = var5;
    var5 = 1;
    var5 = var4[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot1 = var5;
    var5 = 2;
    var5 = var4[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 3;
    var5 = var4[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var4[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 5;
    var5 = var4[var5];
    var5 = var3.bind(var1)(var5);
    var6 = var5.NativeModules;
    var5 = var5.NativeEventEmitter;
    var6 = var6.UserSearchWorkerManager;
    var _closure1_slot5 = var6;
    var2 = function(arg1) {
        var4 = function UserSearchWorker() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var1 = _closure1_slot0;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = _closure1_slot5;
                var10 = new Array(1);
                var10[0] = var1;
                var1 = _closure1_slot3;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot2;
                var1 = _closure1_slot6;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 76; continue _fun0002 }
 63:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 110; continue _fun0002;
 76:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 110:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = global;
                var3 = var3.Set;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var14 = var4;
                var3 = new var14[var3](var13);
                var3 = var3 instanceof Object ? var3 : var4;
                var1['handlers'] = var3;
                var3 = null;
                var1['subscription'] = var3;
                var2 = function(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var2 = _closure3_slot0;
                    var3 = var2.handlers;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var3 = {};
                        var1 = _closure4_slot0;
                        var3['data'] = var1;
                        var2 = arg1;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleCallback'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'postMessage';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var5 = arg1;
                var1 = global;
                if(var5) { _fun0003_ip = 42; continue _fun0003 }
 8:
                var4 = var1.Error;
                var2 = var4.prototype;
                var3 = Object.create(var2, {constructor: {value: var4}});
                var6 = 'Invalid data';
                var7 = var3;
                var2 = new var7[var4](var6, var5);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
 42:
                var3 = _closure1_slot5;
                var2 = var3.onmessage;
                var4 = var1.JSON;
                var1 = var4.stringify;
                var1 = var1.bind(var4)(var5);
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'addEventListener';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = this;
                var3 = 'message';
                var2 = arg1;
                if(!(var3 === var2)) { _fun0004_ip = 75; continue _fun0004 }
 14:
                var3 = var1.subscription;
                var2 = null;
                if(!(var2 == var3)) { _fun0004_ip = 56; continue _fun0004 }
 26:
                var4 = var1.addListener;
                var3 = var1.handleCallback;
                var2 = 'ReturnResults';
                var2 = var4.bind(var1)(var2, var3);
                var1['subscription'] = var2;
 56:
                var3 = var1.handlers;
                var2 = var3.add;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
 75:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'removeEventListener';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = this;
                var3 = 'message';
                var1 = arg1;
                if(!(var3 === var1)) { _fun0005_ip = 78; continue _fun0005 }
 14:
                var4 = var2.handlers;
                var3 = var4.delete;
                var1 = arg2;
                var1 = var3.bind(var4)(var1);
                var1 = var2.handlers;
                var3 = var1.size;
                var1 = 0;
                if(!(var1 === var3)) { _fun0005_ip = 78; continue _fun0005 }
 50:
                var4 = var2.subscription;
                var1 = null;
                if(!(var1 != var4)) { _fun0005_ip = 72; continue _fun0005 }
 62:
                var3 = var4.remove;
                var3 = var3.bind(var4)();
 72:
                var2['subscription'] = var1;
 78:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'terminate';
        var5['key'] = var7;
        var6 = function value() {
            var2 = _closure1_slot5;
            var1 = var2.terminate;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var5);
    var5 = var2.prototype;
    var5 = Object.create(var5, {constructor: {value: var2}});
    var8 = var5;
    var2 = new var8[var2](var7);
    var5 = var2 instanceof Object ? var2 : var5;
    var2 = moduleObject;
    var2['exports'] = var5;
    var2 = 6;
    var2 = var4[var2];
    var4 = var3.bind(var1)(var2);
    var3 = var4.fileFinishedImporting;
    var2 = 'modules/autocompleter/native/UserSearch.worker.tsx';
    var2 = var3.bind(var4)(var2);
    return var1;
})();