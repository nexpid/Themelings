// app/modules/core/isActionRequired.tsx
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
    var4 = 2;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/core/isActionRequired.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isActionRequired() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arguments[0];
            var2 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 19; continue _fun0001 }
 12:
            var5 = _closure1_slot0;
 19:
            if(!(var2 === var1)) { _fun0001_ip = 30; continue _fun0001 }
 23:
            var2 = _closure1_slot1;
 30:
            var1 = var2.getAction;
            var2 = var1.bind(var2)();
            var1 = null;
            var1 = var1 != var2;
            if(var1) { _fun0001_ip = 88; continue _fun0001 }
 49:
            var2 = global;
            var4 = var2.Object;
            var3 = var4.keys;
            var2 = var5.getState;
            var2 = var2.bind(var5)();
            var2 = var3.bind(var4)(var2);
            var3 = var2.length;
            var2 = 0;
            var1 = var3 > var2;
 88:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();