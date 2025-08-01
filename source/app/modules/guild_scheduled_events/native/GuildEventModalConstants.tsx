// app/modules/guild_scheduled_events/native/GuildEventModalConstants.tsx
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
    var2 = 'modules/guild_scheduled_events/native/GuildEventModalConstants.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = 'create-guild-event-modal';
    var3['CREATE_GUILD_EVENT_MODAL_KEY'] = var2;
    var2 = 'start-event-modal';
    var3['START_EVENT_MODAL_KEY'] = var2;
    var2 = 'guild-scheduled-events-list';
    var3['GUILD_EVENTS_LIST_ACTION_SHEET_KEY'] = var2;
    var2 = 'guild-scheduled-events-info';
    var3['GUILD_EVENT_INFO_ACTION_SHEET_KEY'] = var2;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = '';
            var1 = arg1;
            var1 = var2 !== var1;
            if(!var1) { _fun0001_ip = 23; continue _fun0001 }
 14:
            var3 = null;
            var2 = arg2;
            var1 = var3 != var2;
 23:
            return var1;
        }
    };
    var3['isGuildEventValid'] = var2;
    return var1;
})();