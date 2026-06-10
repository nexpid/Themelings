// discord_common/js/shared/lib/RPCError.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot5 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var6);
    var1 = 0;
    var6 = var5[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var _closure1_slot0 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot1 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot2 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var7.bind(var1)(var6);
    var4 = var4.Error;
    var4 = var6.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function RPCError(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var2 = arg2;
                var6 = this;
                var1 = _closure1_slot1;
                var4 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var6, var4);
                var11 = new Array(1);
                var11[0] = var2;
                var1 = _closure1_slot3;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot2;
                var1 = _closure1_slot5;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var8 = global;
                var9 = var8.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot3;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 8:
                var1 = var4.bind(var5)(var6, var1);
                var4 = 'closeCode';
                var4 = var4 in var3;
                if(var4) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var4 = var3.errorCode;
                var1['code'] = var4;
                var4 = var3.errorCode;
                var1['errorCode'] = var4;
                _fun0002_ip = 11; continue _fun0002;
case 9:
                var4 = var3.closeCode;
                var1['code'] = var4;
                var3 = var3.closeCode;
                var1['closeCode'] = var3;
case 11:
                var1['message'] = var2;
                var2 = 'RPCError';
                var1['name'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot4;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot0;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 6;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/shared/lib/RPCError.tsx';
    var4 = var5.bind(var6)(var4);
    var3['RPCError'] = var2;
    return var1;
})();