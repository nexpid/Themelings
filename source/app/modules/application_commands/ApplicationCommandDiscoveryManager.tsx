// app/modules/application_commands/ApplicationCommandDiscoveryManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var8 = var6.bind(var1)(var4);
    var5 = var8.create;
    var4 = function() {
        var1 = {};
        var2 = undefined;
        var1['initialSectionId'] = var2;
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/application_commands/ApplicationCommandDiscoveryManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useCommandDiscoveryManager'] = var4;
    var2 = function updateInitialSectionId(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot2;
            var2 = var3.setState;
            var1 = function() {
                var1 = {};
                var2 = _closure2_slot0;
                var1['initialSectionId'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateInitialSectionId'] = var2;
    return var1;
})();