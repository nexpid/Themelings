// app/modules/guild_rooms/GuildRoomSpatialAudio.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function getSpatialAudioPointFromGuildRoomPosition(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var2 = arg2;
            var1 = arg3;
            var6 = var1.aspectRatio;
            var1 = null;
            if(!(var1 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot7;
case 2:
            var1 = {};
            var4 = var5.x;
            var3 = var2.x;
            var3 = var4 - var3;
            var4 = 100;
            var3 = var3 / var4;
            var6 = var3 * var6;
            var3 = 8;
            var6 = var6 * var3;
            var1['worldX'] = var6;
            var6 = 0;
            var1['worldY'] = var6;
            var5 = var5.y;
            var2 = var2.y;
            var2 = var5 - var2;
            var2 = var2 / var4;
            var2 = var3 * var2;
            var1['worldZ'] = var2;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var4 = function computeLivingRoomWorldPoints(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var5 = var2.users;
            var3 = var2.currentUserId;
            var _closure2_slot0 = var3;
            var8 = var2.channelId;
            var7 = undefined;
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var7;
            var2 = var5.get;
            var2 = var2.bind(var5)(var3);
            var4 = null;
            var6 = var4 == var2;
            var3 = undefined;
            if(var6) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = var2.position;
case 4:
            var6 = var4 != var3;
            var2 = null;
            if(!var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = var3;
case 6:
            _closure2_slot1 = var2;
            var6 = _closure1_slot4;
            var3 = var6.getRoom;
            var6 = var3.bind(var6)(var8);
            var8 = var4 == var6;
            var3 = undefined;
            if(var8) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = var6.background;
case 8:
            if(!(var4 == var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 3;
            var4 = var8[var4];
            var4 = var6.bind(var7)(var4);
            var4 = var4.GuildRoomBackgrounds;
            var3 = var4.DEFAULT;
case 10:
            var2 = _closure1_slot5;
            var2 = var2[var3];
            var2 = var2.aspectRatio;
            _closure2_slot2 = var2;
            var2 = global;
            var3 = var2.Object;
            var2 = var3.fromEntries;
            var4 = var5.values;
            var10 = var4.bind(var5)();
            var6 = new Array(0);
            var9 = 0;
            var11 = var6;
            var4 = arraySpread(var11, var10, var9);
            var5 = var6.filter;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.userId;
                var1 = _closure2_slot0;
                var1 = var2 !== var1;
                return var1;
            };
            var5 = var5.bind(var6)(var4);
            var4 = var5.map;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.userId;
                var6 = var1.position;
                var1 = new Array(2);
                var1[0] = var2;
                var5 = _closure1_slot8;
                var4 = _closure2_slot1;
                var3 = {};
                var2 = _closure2_slot2;
                var3['aspectRatio'] = var2;
                var2 = undefined;
                var2 = var5.bind(var2)(var6, var4, var3);
                var1[1] = var2;
                return var1;
            };
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.GUILD_ROOM_BACKGROUND_CONFIG;
    var _closure1_slot5 = var8;
    var5 = var5.GUILD_ROOM_SPATIAL_AUDIO_MODE;
    var _closure1_slot6 = var5;
    var5 = {'x': 50, 'y': 50};
    var _closure1_slot7 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_rooms/GuildRoomSpatialAudio.tsx';
    var5 = var6.bind(var7)(var5);
    var3['computeLivingRoomWorldPoints'] = var4;
    var4 = function livingRoomWorldPointToMediaEnginePoint(arg1) {
        var1 = arg1;
        var4 = var1.worldX;
        var3 = var1.worldY;
        var2 = var1.worldZ;
        var1 = {};
        var1['x'] = var4;
        var1['y'] = var3;
        var1['z'] = var2;
        return var1;
    };
    var3['livingRoomWorldPointToMediaEnginePoint'] = var4;
    var2 = function useGuildRoomSpatialAudio(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var8 = var1.channelId;
            var _closure2_slot0 = var8;
            var9 = var1.guildId;
            var5 = var1.mode;
            var6 = undefined;
            var _closure2_slot2 = var6;
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var10 = 4;
            var1 = var11[var10];
            var12 = var4.bind(var6)(var1);
            var7 = var12.useStateFromStores;
            var1 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var7.bind(var12)(var4, var1);
            var _closure2_slot1 = var7;
            var4 = _closure1_slot1;
            var1 = 5;
            var1 = var11[var1];
            var11 = var4.bind(var6)(var1);
            var4 = var11.useExperiment;
            var1 = {};
            var1['guildId'] = var9;
            var12 = 'SpatialAudioPanel';
            var1['location'] = var12;
            var1 = var4.bind(var11)(var1);
            var4 = var1.interactionsEnabled;
            if(!var4) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var1 = null;
            var4 = var1 != var9;
case 12:
            var9 = var4;
            if(!var9) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var1 = _closure1_slot6;
            var9 = var5 === var1;
case 14:
            _closure2_slot2 = var9;
            var1 = {};
            var1['available'] = var4;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var10];
            var6 = var5.bind(var6)(var4);
            var5 = var6.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = new Array(3);
            var3[0] = var9;
            var3[1] = var8;
            var3[2] = var7;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0004_ip = 18; continue _fun0004 }
case 16:
                    var1 = {};
                    _fun0004_ip = 19; continue _fun0004;
case 18:
                    var4 = _closure1_slot9;
                    var3 = {};
                    var7 = _closure1_slot4;
                    var6 = var7.getRoomUsers;
                    var2 = _closure2_slot0;
                    var6 = var6.bind(var7)(var2);
                    var3['users'] = var6;
                    var5 = _closure2_slot1;
                    var3['currentUserId'] = var5;
                    var3['channelId'] = var2;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3);
case 19:
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var4, var2, var3);
            var1['worldPoints'] = var2;
            return var1;
        }
    };
    var3['useGuildRoomSpatialAudio'] = var2;
    return var1;
})();