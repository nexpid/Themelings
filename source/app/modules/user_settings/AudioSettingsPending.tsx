// app/modules/user_settings/AudioSettingsPending.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var5 = native7;
    var1 = function makeContextUserKey(arg1, arg2) {
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = '';
        var3 = arg1;
        var2 = ':';
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot2 = var1;
    var1 = function unpackContextUserKey(arg1) {
        var3 = arg1;
        var2 = var3.split;
        var1 = ':';
        var4 = var2.bind(var3)(var1);
        var3 = _closure1_slot0;
        var2 = undefined;
        var1 = 2;
        var3 = var3.bind(var2)(var4, var1);
        var1 = 0;
        var2 = var3[var1];
        var1 = new Array(2);
        var1[0] = var2;
        var2 = 1;
        var2 = var3[var2];
        var1[1] = var2;
        return var1;
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = {};
    var _closure1_slot1 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/AudioSettingsPending.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getPendingAudioSettings(arg1, arg2) {
        var5 = _closure1_slot2;
        var4 = undefined;
        var3 = arg1;
        var2 = arg2;
        var2 = var5.bind(var4)(var3, var2);
        var1 = _closure1_slot1;
        var1 = var1[var2];
        return var1;
    };
    var3['getPendingAudioSettings'] = var4;
    var4 = function updatePendingSettings(arg1, arg2, arg3) {
        var5 = _closure1_slot2;
        var1 = undefined;
        var4 = arg1;
        var3 = arg2;
        var4 = var5.bind(var1)(var4, var3);
        var3 = _closure1_slot1;
        var2 = {};
        var6 = var3[var4];
        var7 = var2;
        var5 = copyDataProperties(var7, var6);
        var6 = arg3;
        var7 = var2;
        var5 = copyDataProperties(var7, var6);
        var3[var4] = var2;
        return var1;
    };
    var3['updatePendingSettings'] = var4;
    var2 = function drainPendingAudioSettings(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var11 = arg1;
            var9 = _closure1_slot1;
            var1 = undefined;
            var5 = 2;
            var4 = 0;
            var2 = 1;
            for(var6 in var9)
 28:
            {
 37:
                var15 = var6;
                var12 = _closure1_slot3;
                var13 = var12.bind(var1)(var15);
                var12 = _closure1_slot0;
                var12 = var12.bind(var1)(var13, var5);
                var14 = var12[var4];
                var13 = var12[var2];
                var12 = _closure1_slot1;
                var12 = var12[var15];
                var12 = var11.bind(var1)(var14, var13, var12);
                _fun0001_ip = 28; continue _fun0001;
            }
 84:
            var2 = {};
            _closure1_slot1 = var2;
            return var1;
        }
    };
    var3['drainPendingAudioSettings'] = var2;
    return var1;
})();