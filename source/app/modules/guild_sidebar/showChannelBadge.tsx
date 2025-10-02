// app/modules/guild_sidebar/showChannelBadge.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/guild_sidebar/showChannelBadge.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function showChannelBadge(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.mentionsCount;
            var2 = var1.isNewChannel;
            var4 = var1.postsWithUnreadsCount;
            var5 = var1.muted;
            var3 = null;
            var1 = var3 != var7;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = 0;
            var1 = var7 > var6;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var3 != var5;
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = !var5;
case 8:
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var3 != var4;
case 10:
            if(!var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = 0;
            var2 = var4 > var3;
case 12:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();