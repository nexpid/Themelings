// app/modules/remixing/native/hooks/useTransforms.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
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
    var4 = 'modules/remixing/native/hooks/useTransforms.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 0;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.useSharedValue;
            var1 = arg3;
            var1 = var4.bind(var5)(var1);
            var5 = var2[var3];
            var4 = null;
            var4 = var4 != var5;
            if(var4) { _fun0001_ip = 75; continue _fun0001 }
 56:
            var5 = global;
            var6 = var5.Object;
            var5 = var6.isFrozen;
            var4 = var5.bind(var6)(var2);
 75:
            if(var4) { _fun0001_ip = 82; continue _fun0001 }
 78:
            var2[var3] = var1;
 82:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();