// app/modules/activities/useActivityShelfItemData.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var5 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var5;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot2 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/useActivityShelfItemData.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useActivityShelfItemData(arg1, arg2) {
        var5 = arg2;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var6 = _closure1_slot1;
        var3 = 1;
        var3 = var6[var3];
        var6 = undefined;
        var4 = var4.bind(var6)(var3);
        var3 = {};
        var7 = arg1;
        var3['guildId'] = var7;
        var6 = var4.bind(var6)(var3);
        var _closure2_slot1 = var6;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot1;
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.application;
                    var2 = var1.id;
                    var1 = _closure2_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0001_ip = 38; continue _fun0001 }
 35:
                var1 = var2;
 38:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useActivityShelfItemData'] = var2;
    return var1;
})();