// discord_common/js/packages/rpc-schema/helpers.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var3 = native6;
    var8 = native7;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var5 = var4.RPCCommands;
    var4 = var4.RPCEvents;
    var6 = 1;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = '../discord_common/js/packages/rpc-schema/helpers.tsx';
    var6 = var7.bind(var8)(var6);
    var3['RPCCommand'] = var5;
    var3['RPCEvent'] = var4;
    var4 = function joiReqObj(arg1) {
        var2 = arg1;
        var1 = var2.required;
        var3 = var1.bind(var2)();
        var2 = var3.unknown;
        var1 = true;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['joiReqObj'] = var4;
    var2 = function joiEnum(arg1) {
        var1 = global;
        var3 = var1.Object;
        var2 = var3.values;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['joiEnum'] = var2;
    return var1;
})();