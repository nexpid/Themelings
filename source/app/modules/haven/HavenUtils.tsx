// app/modules/haven/HavenUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var5 = function parseParticipant(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.user_id;
        var1['userId'] = var3;
        var3 = var2.position;
        var1['position'] = var3;
        var2 = var2.avatar;
        var1['avatar'] = var2;
        return var1;
    };
    var _closure1_slot3 = var5;
    var4 = function parseSeat(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.id;
        var1['id'] = var3;
        var2 = var2.claimed_by;
        var1['claimedBy'] = var2;
        return var1;
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 3;
    var6 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/haven/HavenUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['parseParticipant'] = var5;
    var3['parseSeat'] = var4;
    var4 = function parseRoom(arg1) {
        var3 = arg1;
        var1 = {};
        var2 = var3.room_id;
        var1['roomId'] = var2;
        var6 = var3.participants;
        var5 = var6.map;
        var4 = _closure1_slot3;
        var4 = var5.bind(var6)(var4);
        var1['participants'] = var4;
        var4 = var3.seats;
        var3 = var4.map;
        var2 = _closure1_slot4;
        var2 = var3.bind(var4)(var2);
        var1['seats'] = var2;
        return var1;
    };
    var3['parseRoom'] = var4;
    var2 = function getHavenSoundControlName(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 0;
            var2 = var2[var6];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var2 = var2.HavenSoundKeys;
            var2 = var2.RADIO;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.HavenSoundKeys;
            var2 = var2.ENVIRONMENT;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.HavenSoundKeys;
            var2 = var2.CAMPFIRE;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = '';
            return var2;
case 6:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 1;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var6 = _closure1_slot1;
            var2 = 2;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.Vk9+Ez;
            var2 = var3.bind(var4)(var2);
            return var2;
case 4:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 1;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var6 = _closure1_slot1;
            var2 = 2;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.YEYIbI;
            var2 = var3.bind(var4)(var2);
            return var2;
case 2:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 1;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var4 = _closure1_slot1;
            var1 = 2;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.AjiGKB;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getHavenSoundControlName'] = var2;
    return var1;
})();