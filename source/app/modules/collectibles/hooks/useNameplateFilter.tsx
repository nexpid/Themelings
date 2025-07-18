// app/modules/collectibles/hooks/useNameplateFilter.tsx
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
    var4 = var4.useCallback;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useNameplateFilter.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useNameplateFilter() {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function(arg1) {
            var3 = arg1;
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var3 = var1.items;
                var2 = var3.some;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 1;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.CollectiblesItemType;
                    var1 = var1.NAMEPLATE;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = new Array(0);
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['useNameplateFilter'] = var2;
    return var1;
})();