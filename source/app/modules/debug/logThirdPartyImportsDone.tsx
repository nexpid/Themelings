// app/modules/debug/logThirdPartyImportsDone.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native7;
    var1 = 0;
    var4 = var3[var1];
    var2 = native3;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var2 = var5.prototype;
    var4 = Object.create(var2, {constructor: {value: var5}});
    var6 = 'app';
    var7 = var4;
    var2 = new var7[var5](var6, var5);
    var5 = var2 instanceof Object ? var2 : var4;
    var4 = var5.log;
    var2 = 'Finished loading third party imports';
    var2 = var4.bind(var5)(var2);
    var2 = 1;
    var3 = var3[var2];
    var2 = native2;
    var4 = var2.bind(var1)(var3);
    var3 = var4.fileFinishedImporting;
    var2 = 'modules/debug/logThirdPartyImportsDone.tsx';
    var2 = var3.bind(var4)(var2);
    return var1;
})();