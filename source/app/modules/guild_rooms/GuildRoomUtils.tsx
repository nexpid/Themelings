// app/modules/guild_rooms/GuildRoomUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function mapGuildRoomBaseObjectFields(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.object_id;
            var1['objectId'] = var3;
            var3 = var2.created_by;
            var1['createdBy'] = var3;
            var4 = var2.updated_at;
            var3 = null;
            var4 = var3 != var4;
            var3 = undefined;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = global;
            var6 = var4.Date;
            var7 = var2.updated_at;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var8 = var5;
            var4 = new var8[var6](var7, var6);
            var3 = var4 instanceof Object ? var4 : var5;
case 2:
            var1['updatedAt'] = var3;
            var2 = var2.updated_by;
            var1['updatedBy'] = var2;
            return var1;
        }
    };
    var _closure1_slot2 = var1;
    var1 = function serverGuildRoomObjectToClient(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var2 = var5.object_type;
            var6 = _closure1_slot0;
            var1 = _closure1_slot1;
            var8 = 0;
            var1 = var1[var8];
            var4 = undefined;
            var1 = var6.bind(var4)(var1);
            var1 = var1.GuildRoomObjectTypes;
            var1 = var1.PLANT;
            if(!(var2 !== var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = {};
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var8];
            var2 = var6.bind(var4)(var2);
            var2 = var2.GuildRoomObjectTypes;
            var2 = var2.NOTE;
            var1['objectType'] = var2;
            var2 = _closure1_slot2;
            var9 = var2.bind(var4)(var5);
            var10 = var1;
            var2 = copyDataProperties(var10, var9);
            var6 = var5.content;
            var2 = 'content';
            var1[1] = var6;
            var6 = var5.position;
            var2 = 'position';
            var1[1] = var6;
            _fun0002_ip = 6; continue _fun0002;
case 4:
            var2 = {};
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var8];
            var6 = var7.bind(var4)(var6);
            var6 = var6.GuildRoomObjectTypes;
            var6 = var6.PLANT;
            var2['objectType'] = var6;
            var3 = _closure1_slot2;
            var9 = var3.bind(var4)(var5);
            var10 = var2;
            var3 = copyDataProperties(var10, var9);
            var1 = var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_rooms/GuildRoomUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function serverGuildRoomToClient(arg1) {
        var4 = arg1;
        var1 = {};
        var3 = var4.room_id;
        var1['roomId'] = var3;
        var8 = var4.users;
        var7 = var8.reduce;
        var3 = global;
        var5 = var3.Map;
        var6 = var5.prototype;
        var6 = Object.create(var6, {constructor: {value: var5}});
        var11 = var6;
        var5 = new var11[var5](var10);
        var6 = var5 instanceof Object ? var5 : var6;
        var5 = function(arg1, arg2) {
            var1 = arg1;
            var5 = arg2;
            var4 = var1.set;
            var3 = var5.user_id;
            var2 = {};
            var6 = var5.user_id;
            var2['userId'] = var6;
            var6 = var5.position;
            var2['position'] = var6;
            var6 = var5.status_id;
            var2['statusId'] = var6;
            var5 = var5.status_text;
            var2['statusText'] = var5;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var5 = var7.bind(var8)(var5, var6);
        var1['users'] = var5;
        var5 = var4.background;
        var1['background'] = var5;
        var6 = var4.objects;
        var5 = var3.Object;
        var4 = var5.entries;
        var5 = var4.bind(var5)(var6);
        var4 = var5.reduce;
        var3 = var3.Map;
        var6 = var3.prototype;
        var6 = Object.create(var6, {constructor: {value: var3}});
        var11 = var6;
        var3 = new var11[var3](var10);
        var3 = var3 instanceof Object ? var3 : var6;
        var2 = function(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var5 = arg2;
                var3 = var5[Symbol.iterator];
                var5 = var3().next;
                var6 = var5().value;
                var2 = var3;
                var8 = undefined;
                var4 = var2 === var8;
                var2 = undefined;
                if(var4) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                var2 = var6;
case 7:
                var6 = undefined;
                if(var4) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var7 = var5().value;
                var5 = var3;
                var5 = var5 === var8;
                var6 = undefined;
                var4 = var5;
                if(var5) { _fun0003_ip = 9; continue _fun0003 }
case 11:
                var6 = var7;
                var4 = var5;
case 9:
                if(var4) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var3.return();
case 12:
                var4 = var1.set;
                var3 = var2 - 0;
                var5 = var6.map;
                var2 = _closure1_slot3;
                var2 = var5.bind(var6)(var2);
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['objects'] = var2;
        return var1;
    };
    var3['serverGuildRoomToClient'] = var2;
    return var1;
})();