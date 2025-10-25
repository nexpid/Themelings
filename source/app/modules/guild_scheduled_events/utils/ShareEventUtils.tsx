// app/modules/guild_scheduled_events/utils/ShareEventUtils.tsx
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
    var4 = 'modules/guild_scheduled_events/utils/ShareEventUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        var1 = arg1;
        var5 = var1.guildId;
        var4 = var1.guildEventId;
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'https://discord.com/events/';
        var1 = '/';
        var1 = var3.bind(var2)(var5, var1, var4);
        return var1;
    };
    var3['SHARE_EVENT_DETAILS_LINK'] = var4;
    var2 = function canUseInviteModal(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = arg2;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = null;
            var2 = arg3;
            var1 = var3 != var2;
case 4:
            return var1;
        }
    };
    var3['canUseInviteModal'] = var2;
    return var1;
})();