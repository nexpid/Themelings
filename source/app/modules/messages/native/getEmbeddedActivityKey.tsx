// app/modules/messages/native/getEmbeddedActivityKey.tsx
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
    var4 = 'modules/messages/native/getEmbeddedActivityKey.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getEmbeddedActivityKey(arg1) {
        var1 = arg1;
        var2 = var1.location;
        var11 = var2.id;
        var9 = var1.applicationId;
        var7 = var1.launchId;
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var12 = '';
        var1 = ':';
        var10 = var1;
        var8 = var1;
        var1 = var12[var3](var11, var10, var9, var8, var7, var6);
        return var1;
    };
    var3['default'] = var4;
    var2 = function parseEmbeddedActivityKey(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = var3.split;
            var1 = ':';
            var4 = var2.bind(var3)(var1);
            var2 = var4.length;
            var1 = 3;
            var2 = var2 < var1;
            var1 = null;
            if(var2) { _fun0001_ip = 72; continue _fun0001 }
 34:
            var2 = {};
            var3 = 0;
            var3 = var4[var3];
            var2['channelId'] = var3;
            var3 = 1;
            var3 = var4[var3];
            var2['applicationId'] = var3;
            var3 = 2;
            var3 = var4[var3];
            var2['instanceId'] = var3;
            var1 = var2;
 72:
            return var1;
        }
    };
    var3['parseEmbeddedActivityKey'] = var2;
    return var1;
})();