// app/modules/guild_sidebar/showChannelBadge.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = native7;
    var1 = 0;
    var4 = var2[var1];
    var2 = native2;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/guild_sidebar/showChannelBadge.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function showChannelBadge(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.mentionsCount;
            var2 = var1.isNewChannel;
            var4 = var1.postsWithUnreadsCount;
            var5 = var1.muted;
            var3 = null;
            var1 = var3 != var7;
            if(!var1) { _fun0001_ip = 42; continue _fun0001 }
 36:
            var6 = 0;
            var1 = var7 > var6;
 42:
            if(var1) { _fun0001_ip = 48; continue _fun0001 }
 45:
            var1 = var2;
 48:
            if(var1) { _fun0001_ip = 80; continue _fun0001 }
 51:
            var2 = var3 != var5;
            if(!var2) { _fun0001_ip = 61; continue _fun0001 }
 58:
            var2 = !var5;
 61:
            if(!var2) { _fun0001_ip = 68; continue _fun0001 }
 64:
            var2 = var3 != var4;
 68:
            if(!var2) { _fun0001_ip = 77; continue _fun0001 }
 71:
            var3 = 0;
            var2 = var4 > var3;
 77:
            var1 = var2;
 80:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();