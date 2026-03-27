// app/modules/game_profile/hooks/useGameAnnouncements.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.useEffect;
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/hooks/useGameAnnouncements.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGameAnnouncements(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var2 = var3[var2];
            var3 = undefined;
            var7 = var4.bind(var3)(var2);
            var6 = var7.useStateFromStoresObject;
            var2 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var2 = _closure2_slot0;
                    var4 = null;
                    var5 = var4 != var2;
                    var2 = undefined;
                    if(!var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var7 = _closure1_slot3;
                    var6 = var7.getAnnouncements;
                    var5 = _closure2_slot0;
                    var2 = var6.bind(var7)(var5);
case 2:
                    var1['data'] = var2;
                    var2 = _closure2_slot0;
                    var2 = var4 != var2;
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var7 = _closure1_slot3;
                    var6 = var7.hasAnnouncementsBeenFetched;
                    var5 = _closure2_slot0;
                    var2 = var6.bind(var7)(var5);
case 4:
                    var1['hasFetched'] = var2;
                    var2 = _closure2_slot0;
                    var2 = var4 != var2;
                    if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = _closure1_slot3;
                    var4 = var5.isAnnouncementsFetching;
                    var3 = _closure2_slot0;
                    var2 = var4.bind(var5)(var3);
case 6:
                    var1['isFetching'] = var2;
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var4, var2);
            var4 = var2.data;
            var7 = var2.hasFetched;
            var _closure2_slot1 = var7;
            var2 = var2.isFetching;
            var6 = _closure1_slot2;
            var5 = new Array(2);
            var5[0] = var8;
            var5[1] = var7;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    var2 = var2 == var3;
                    if(var2) { _fun0003_ip = 3; continue _fun0003 }
case 8:
                    var2 = _closure2_slot1;
case 3:
                    if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var5 = _closure1_slot3;
                    var4 = var5.isAnnouncementsFetching;
                    var3 = _closure2_slot0;
                    var2 = var4.bind(var5)(var3);
case 9:
                    if(var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getGameAnnouncements;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
case 11:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var3)(var1, var5);
            var1 = {};
            var5 = null;
            var7 = var5 == var4;
            var6 = undefined;
            if(var7) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var6 = var4.messages;
case 13:
            if(!(var5 == var6)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var6 = new Array(0);
case 15:
            var1['messages'] = var6;
            var7 = var5 == var4;
            var6 = undefined;
            if(var7) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var6 = var4.channelId;
case 17:
            var1['channelId'] = var6;
            var5 = var5 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var3 = var4.guildId;
case 19:
            var1['guildId'] = var3;
            var1['loading'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();