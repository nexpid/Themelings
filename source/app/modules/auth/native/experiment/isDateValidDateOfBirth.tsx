// app/modules/auth/native/experiment/isDateValidDateOfBirth.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var4 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 1;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/experiment/isDateValidDateOfBirth.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isDateValidDateOfBirth(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0001_ip = 63; continue _fun0001 }
 12:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 0;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var4 = var2.bind(var3)();
            var3 = var4.diff;
            var2 = 'days';
            var3 = var3.bind(var4)(var5, var2);
            var2 = 1;
            var1 = var3 >= var2;
 63:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();