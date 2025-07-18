// app/modules/main_tabs_v2/native/utils/useTabSelectedGuildId.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/utils/useTabSelectedGuildId.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTabSelectedGuildId() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var5;
        var1 = _closure1_slot3;
        var2[1] = var1;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot2;
                var2 = var3.getGuildId;
                var4 = var2.bind(var3)();
                var2 = var3.getLastSelectedGuildId;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot3;
                var1 = var3.getFlattenedGuildIds;
                var3 = var1.bind(var3)();
                var1 = 0;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 != var4)) { _fun0001_ip = 56; continue _fun0001 }
 53:
                var2 = var4;
 56:
                if(!(var3 != var2)) { _fun0001_ip = 63; continue _fun0001 }
 60:
                var1 = var2;
 63:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();