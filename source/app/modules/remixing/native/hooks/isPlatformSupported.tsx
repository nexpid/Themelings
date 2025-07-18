// app/modules/remixing/native/hooks/isPlatformSupported.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = var4.Platform;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/hooks/isPlatformSupported.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var2 = var3[var2];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.isIOS;
            var2 = var2.bind(var4)();
            if(!var2) { _fun0001_ip = 68; continue _fun0001 }
 38:
            var2 = global;
            var2 = var2.Number;
            var1 = _closure1_slot2;
            var1 = var1.Version;
            var2 = var2.bind(var3)(var1);
            var1 = 13;
            if(!(!(var2 < var1))) { _fun0001_ip = 72; continue _fun0001 }
 68:
            var1 = true;
            return var1;
 72:
            var1 = false;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();