// app/modules/guild_tag/GuildTagTypes.tsx
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
    var2 = 'modules/guild_tag/GuildTagTypes.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function toServerGuildProfile(arg1) {
        var1 = {};
        var2 = arg1;
        var2 = var2.tag;
        var1['tag'] = var2;
        return var1;
    };
    var3['toServerGuildProfile'] = var2;
    return var1;
})();