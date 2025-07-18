// app/modules/parent_tools/hooks/useSelectedTeen.tsx
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
    var4 = 'modules/parent_tools/hooks/useSelectedTeen.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var3 = 2;
        var7 = var6[var3];
        var4 = undefined;
        var10 = var5.bind(var4)(var7);
        var9 = var10.useStateFromStores;
        var7 = _closure1_slot3;
        var8 = new Array(1);
        var8[0] = var7;
        var7 = function() {
            var2 = _closure1_slot3;
            var1 = var2.getSelectedTeenId;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7 = var9.bind(var10)(var8, var7);
        var _closure2_slot0 = var7;
        var3 = var6[var3];
        var4 = var5.bind(var4)(var3);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure2_slot0;
                var3 = null;
                var1 = undefined;
                if(!(var3 !== var4)) { _fun0001_ip = 37; continue _fun0001 }
 15:
                var4 = _closure1_slot2;
                var3 = var4.getUser;
                var2 = _closure2_slot0;
                var1 = var3.bind(var4)(var2);
 37:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useSelectedTeen'] = var4;
    var2 = function() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var2 = _closure1_slot3;
            var1 = var2.getSelectedTeenId;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useSelectedTeenId'] = var2;
    return var1;
})();