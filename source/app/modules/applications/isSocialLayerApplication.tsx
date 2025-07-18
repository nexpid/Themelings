// app/modules/applications/isSocialLayerApplication.tsx
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
    var4 = var4.ApplicationFlags;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/isSocialLayerApplication.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isSocialLayerApplication(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var2 = var4.flags;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 119; continue _fun0001 }
 17:
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var8 = 1;
            var2 = var2[var8];
            var7 = undefined;
            var9 = var5.bind(var7)(var2);
            var6 = var9.hasFlag;
            var5 = var4.flags;
            var2 = _closure1_slot2;
            var2 = var2.SOCIAL_LAYER_INTEGRATION_LIMITED;
            var2 = var6.bind(var9)(var5, var2);
            if(var2) { _fun0001_ip = 116; continue _fun0001 }
 72:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var8];
            var6 = var6.bind(var7)(var5);
            var5 = var6.hasFlag;
            var4 = var4.flags;
            var3 = _closure1_slot2;
            var3 = var3.SOCIAL_LAYER_INTEGRATION;
            var2 = var5.bind(var6)(var4, var3);
 116:
            var1 = var2;
 119:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();