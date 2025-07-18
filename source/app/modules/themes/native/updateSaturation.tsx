// app/modules/themes/native/updateSaturation.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = var4.NativeModules;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/themes/native/updateSaturation.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function updateSaturation(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 1;
            var1 = var5[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 63; continue _fun0001 }
 40:
            var1 = _closure1_slot3;
            var3 = var1.DCDTheme;
            var1 = var3.updateSaturation;
            var1 = var1.bind(var3)(var4);
            _fun0001_ip = 94; continue _fun0001;
 63:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.updateSaturation;
            var1 = var2.bind(var3)(var4);
 94:
            return var1;
        }
    };
    var3['updateSaturation'] = var2;
    return var1;
})();