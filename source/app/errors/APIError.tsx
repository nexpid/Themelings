// app/errors/APIError.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Links;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.V8APIError;
    var2 = function(arg1) {
        var3 = function APIErrorWithDefaultMessage(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var13 = arg2;
                var4 = this;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var3 = undefined;
                var1 = var1.bind(var3)(var4, var2);
                var9 = new Array(3);
                var1 = arg1;
                var9[0] = var1;
                var9[1] = var13;
                var1 = null;
                if(!(var1 == var13)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var6 = _closure1_slot0;
                var10 = _closure1_slot1;
                var1 = 6;
                var7 = var10[var1];
                var7 = var6.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var1 = var10[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.t;
                var6 = var1.aTVNen;
                var1 = {};
                var10 = _closure1_slot7;
                var10 = var10.STATUS;
                var1['statusPageURL'] = var10;
                var1 = var7.bind(var8)(var6, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = _closure1_slot0;
                var11 = _closure1_slot1;
                var6 = 6;
                var8 = var11[var6];
                var8 = var7.bind(var3)(var8);
                var10 = var8.intl;
                var8 = var10.formatToPlainString;
                var6 = var11[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.t;
                var7 = var6.aKRa0d;
                var6 = {};
                var11 = _closure1_slot7;
                var11 = var11.STATUS;
                var6['statusPageURL'] = var11;
                var11 = global;
                var11 = var11.HermesInternal;
                var12 = var11.concat;
                var11 = '';
                var11 = var12.bind(var11)(var13);
                var6['details'] = var11;
                var1 = var8.bind(var10)(var7, var6);
case 8:
                var9[2] = var1;
                var1 = _closure1_slot5;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot8;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0002_ip = 11; continue _fun0002;
case 9:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot5;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
case 11:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot2;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'errors/APIError.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();