// app/modules/app_launcher/hooks/useDelayedSwapToActivityActionLeave.tsx
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
    var7 = var6[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/hooks/useDelayedSwapToActivityActionLeave.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useDelayedSwapToActivityActionLeave(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot3;
        var3 = var5.useState;
        var7 = var3.bind(var5)(var6);
        var4 = _closure1_slot2;
        var3 = undefined;
        var1 = 2;
        var4 = var4.bind(var3)(var7, var1);
        var1 = 0;
        var1 = var4[var1];
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot1 = var3;
        var4 = var5.useLayoutEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure2_slot0;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 2;
                var3 = var5[var3];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var3 = var3.ActivityAction;
                var3 = var3.LEAVE;
                if(!(var4 !== var3)) { _fun0001_ip = 65; continue _fun0001 }
 50:
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var2 = var3.bind(var5)(var2);
                return var5;
 65:
                var2 = global;
                var4 = var2.setTimeout;
                var3 = function() {
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = 100;
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useDelayedSwapToActivityActionLeave'] = var2;
    return var1;
})();