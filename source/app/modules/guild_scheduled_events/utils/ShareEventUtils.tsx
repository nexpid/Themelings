// app/modules/guild_scheduled_events/utils/ShareEventUtils.tsx
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
    var2 = 'modules/guild_scheduled_events/utils/ShareEventUtils.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function(arg1) {
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
    var3['SHARE_EVENT_DETAILS_LINK'] = var2;
    return var1;
})();