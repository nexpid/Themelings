// app/modules/activities/native/doesOrientationMatchLockState.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.OrientationLockState;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/native/doesOrientationMatchLockState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function doesOrientationMatchLockState(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var4 = arg2;
            var1 = null;
            var1 = var1 == var4;
            if(var1) { _fun0001_ip = 32; continue _fun0001 }
 15:
            var3 = _closure1_slot0;
            var3 = var3.UNLOCKED;
            var1 = var4 === var3;
 32:
            if(var1) { _fun0001_ip = 61; continue _fun0001 }
 35:
            var3 = !var2;
            if(!var3) { _fun0001_ip = 58; continue _fun0001 }
 41:
            var5 = _closure1_slot0;
            var5 = var5.PORTRAIT;
            var3 = var4 === var5;
 58:
            var1 = var3;
 61:
            if(var1) { _fun0001_ip = 87; continue _fun0001 }
 64:
            if(!var2) { _fun0001_ip = 84; continue _fun0001 }
 67:
            var3 = _closure1_slot0;
            var3 = var3.LANDSCAPE;
            var2 = var4 === var3;
 84:
            var1 = var2;
 87:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();