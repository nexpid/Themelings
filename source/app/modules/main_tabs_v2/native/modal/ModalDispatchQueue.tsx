// app/modules/main_tabs_v2/native/modal/ModalDispatchQueue.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
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
    var2 = function() {
        var4 = _closure1_slot1;
        var3 = function ModalDispatchQueue() {
            var3 = this;
            var4 = _closure1_slot0;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = new Array(0);
            var3['queue'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'enqueue';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var1 = this;
            var3 = var1.queue;
            var2 = var3.push;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'flush';
        var1['key'] = var6;
        var5 = function value() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var5 = this;
                var1 = var5.queue;
                var2 = var1.length;
                var4 = 0;
                var1 = undefined;
                var3 = null;
                if(!(var2 > var4)) { _fun0001_ip = 63; continue _fun0001 }
 24:
                var6 = var5.queue;
                var2 = var6.shift;
                var2 = var2.bind(var6)();
                if(!(var3 != var2)) { _fun0001_ip = 48; continue _fun0001 }
 44:
                var2 = var2.bind(var1)();
 48:
                var2 = var5.queue;
                var2 = var2.length;
                if(var2 > var4) { _fun0001_ip = 24; continue _fun0001 }
 63:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var12 = var4;
    var2 = new var12[var2](var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/modal/ModalDispatchQueue.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();