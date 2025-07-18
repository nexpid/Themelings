// app/errors/V6OrEarlierAPIError.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = var4.V6OrEarlierAPIError;
    var2 = function(arg1) {
        var3 = function APIErrorWithDefaultMessage(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
                if(!(var1 == var13)) { _fun0002_ip = 124; continue _fun0002 }
 49:
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
                _fun0002_ip = 224; continue _fun0002;
 124:
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
 224:
                var9[2] = var1;
                var1 = _closure1_slot5;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot8;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 265; continue _fun0002 }
 252:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0002_ip = 299; continue _fun0002;
 265:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot5;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
 299:
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
    var4 = 'errors/V6OrEarlierAPIError.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();