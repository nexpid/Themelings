// app/utils/ErrorUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function getUnderlyingIOSExceptionRecursively(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.userInfo;
            var1 = var1.NSUnderlyingError;
            var3 = null;
            if(!(var3 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot2;
            var1 = var2.userInfo;
            var4 = var1.NSUnderlyingError;
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            if(!(var3 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var2 = var2.userInfo;
            var2 = var2.NSLocalizedDescription;
            return var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot2 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/ErrorUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getUnderlyingIOSError(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = undefined;
            var2 = undefined;
case 5: // try_start_0
            var3 = _closure1_slot2;
            var3 = var3.bind(var4)(var1);
            var2 = var3;
            var1 = null;
            var3 = var1 != var3;
            if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var2;
case 6: // try_end0
            return var1;
case 8: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = null;
            return var1;
        }
    };
    var3['getUnderlyingIOSError'] = var4;
    var2 = function serializeError(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var1 = global;
            var2 = var1.Boolean;
            var6 = undefined;
            var2 = var2.bind(var6)(var3);
            if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 3:
            var5 = var1.Error;
            var2 = var5.prototype;
            var4 = Object.create(var2, {constructor: {value: var5}});
            var8 = 'unknown error';
            var9 = var4;
            var2 = new var9[var5](var8, var7);
            var3 = var2 instanceof Object ? var2 : var4;
case 9:
            var4 = 'object';
            var2 = typeof var3;
            var5 = var3;
            if(!(var4 !== var2)) { _fun0003_ip = 10; continue _fun0003 }
case 4:
            var4 = var1.Error;
            var2 = var1.String;
            var8 = var2.bind(var6)(var3);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var9 = var3;
            var2 = new var9[var4](var8, var7);
            var5 = var2 instanceof Object ? var2 : var3;
case 10:
            var3 = var1.JSON;
            var2 = var3.stringify;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 0;
            var1 = var7[var1];
            var4 = var4.bind(var6)(var1);
            var1 = var4.normalizeToSize;
            var1 = var1.bind(var4)(var5);
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['serializeError'] = var2;
    return var1;
})();