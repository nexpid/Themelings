// app/modules/guilds_bar/native/utils/isGuildsBarGuildDataEqual.tsx
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
    var2 = 'modules/guilds_bar/native/utils/isGuildsBarGuildDataEqual.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function isGuildsBarGuildDataEqual(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            var4 = var3.icon;
            var1 = var2.icon;
            var1 = var4 === var1;
            if(!var1) { _fun0001_ip = 39; continue _fun0001 }
 23:
            var3 = var3.guildName;
            var2 = var2.guildName;
            var1 = var3 === var2;
 39:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();