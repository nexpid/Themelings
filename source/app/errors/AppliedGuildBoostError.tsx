// app/errors/AppliedGuildBoostError.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function AppliedGuildBoostError(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = arg1;
                var5 = this;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var2);
                var10 = new Array(2);
                var10[0] = var3;
                var1 = arg2;
                var10[1] = var1;
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot8;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 80; continue _fun0002 }
 67:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 114; continue _fun0002;
 80:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 114:
                var1 = var2.bind(var4)(var5, var1);
                var4 = var1.status;
                var2 = 429;
                if(!(var2 === var4)) { _fun0002_ip = 154; continue _fun0002 }
 135:
                var2 = var1._getMessageFromRateLimit;
                var2 = var2.bind(var1)(var3);
                var1['message'] = var2;
 154:
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot7;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot4;
        var5 = {};
        var6 = '_getMessageFromRateLimit';
        var5['key'] = var6;
        var1 = function value(arg1) {
            var1 = arg1;
            var1 = var1.body;
            var3 = var1.retry_after;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 5;
            var4 = var8[var1];
            var6 = undefined;
            var5 = var7.bind(var6)(var4);
            var4 = var5.diffAsUnits;
            var9 = _closure1_slot1;
            var2 = 6;
            var2 = var8[var2];
            var2 = var9.bind(var6)(var2);
            var2 = var2.Millis;
            var2 = var2.SECOND;
            var3 = var3 * var2;
            var2 = 0;
            var4 = var4.bind(var5)(var2, var3);
            var1 = var8[var1];
            var3 = var7.bind(var6)(var1);
            var2 = var3.unitsAsStrings;
            var1 = {};
            var5 = 7;
            var9 = var8[var5];
            var9 = var7.bind(var6)(var9);
            var9 = var9.t;
            var9 = var9.iXc/IS;
            var1['days'] = var9;
            var9 = var8[var5];
            var9 = var7.bind(var6)(var9);
            var9 = var9.t;
            var9 = var9.WW9P5+;
            var1['hours'] = var9;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var5 = var5.t;
            var5 = var5.I7rYen;
            var1['minutes'] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'errors/AppliedGuildBoostError.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();