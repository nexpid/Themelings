// app/utils/native/RunAfterInteractionsUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function runAfterInteractions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arguments[1];
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 24; continue _fun0001 }
 18:
            var5 = 2000;
 24:
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var7 = _closure1_slot2;
            var6 = var7.runAfterInteractions;
            var3 = function() {
                var3 = _closure2_slot2;
                var2 = var3.cancel;
                var2 = var2.bind(var3)();
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var3 = var6.bind(var7)(var3);
            _closure2_slot1 = var3;
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 1;
            var1 = var6[var1];
            var1 = var3.bind(var4)(var1);
            var4 = var1.DelayedCall;
            var1 = var4.prototype;
            var3 = Object.create(var1, {constructor: {value: var4}});
            var8 = function() {
                var3 = _closure2_slot1;
                var2 = var3.cancel;
                var2 = var2.bind(var3)();
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var10 = var3;
            var9 = var5;
            var1 = new var10[var4](var9, var8, var7);
            var3 = var1 instanceof Object ? var1 : var3;
            _closure2_slot2 = var3;
            var1 = var3.delay;
            var1 = var1.bind(var3)();
            var1 = {};
            var2 = function cancel() {
                var3 = _closure2_slot2;
                var2 = var3.cancel;
                var2 = var2.bind(var3)();
                var2 = _closure2_slot1;
                var1 = var2.cancel;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var1['cancel'] = var2;
            return var1;
        }
    };
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.InteractionManager;
    var _closure1_slot2 = var4;
    var4 = {};
    var4['runAfterInteractions'] = var2;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/native/RunAfterInteractionsUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['runAfterInteractions'] = var2;
    return var1;
})();