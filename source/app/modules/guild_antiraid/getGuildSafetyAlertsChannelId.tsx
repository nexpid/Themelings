// app/modules/guild_antiraid/getGuildSafetyAlertsChannelId.tsx
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
    var2 = 'modules/guild_antiraid/getGuildSafetyAlertsChannelId.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function getGuildSafetyAlertsChannelId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.safetyAlertsChannelId;
            var3 = null;
            if(!(var3 == var1)) { _fun0001_ip = 21; continue _fun0001 }
 15:
            var1 = var2.publicUpdatesChannelId;
 21:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();