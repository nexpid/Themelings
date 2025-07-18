// app/modules/connections/DomainVerifyUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = native7;
    var1 = 0;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/connections/DomainVerifyUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 'example.com';
    var3['EXAMPLE_DOMAIN'] = var4;
    var4 = function(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '_discord.';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['getDnsName'] = var4;
    var2 = function(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'https://';
        var2 = arg1;
        var1 = '/.well-known/discord';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['getHttpName'] = var2;
    return var1;
})();