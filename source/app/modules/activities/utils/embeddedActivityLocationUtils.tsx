// app/modules/activities/utils/embeddedActivityLocationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/embeddedActivityLocationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getEmbeddedActivityLocationChannelId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = undefined;
            return var1;
case 2:
            var1 = 'channel_id';
            var3 = var1 in var2;
            var1 = undefined;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2.channel_id;
case 4:
            return var1;
        }
    };
    var3['getEmbeddedActivityLocationChannelId'] = var4;
    var2 = function getEmbeddedActivityLocationGuildId(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 == var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var1 = undefined;
            return var1;
case 2:
            var1 = 'guild_id';
            var3 = var1 in var2;
            var1 = undefined;
            if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = var2.guild_id;
case 4:
            return var1;
        }
    };
    var3['getEmbeddedActivityLocationGuildId'] = var2;
    return var1;
})();