// app/modules/guild_rooms/GuildRoomUtils.tsx
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
    var2 = 'modules/guild_rooms/GuildRoomUtils.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function serverGuildRoomToClient(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.room_id;
        var1['roomId'] = var3;
        var5 = var2.users;
        var4 = var5.map;
        var3 = function(arg1) {
            var2 = arg1;
            var1 = {};
            var3 = var2.user_id;
            var1['userId'] = var3;
            var3 = var2.position;
            var1['position'] = var3;
            var3 = var2.status_id;
            var1['statusId'] = var3;
            var2 = var2.status_text;
            var1['statusText'] = var2;
            return var1;
        };
        var3 = var4.bind(var5)(var3);
        var1['users'] = var3;
        var2 = var2.background;
        var1['background'] = var2;
        return var1;
    };
    var3['serverGuildRoomToClient'] = var2;
    return var1;
})();