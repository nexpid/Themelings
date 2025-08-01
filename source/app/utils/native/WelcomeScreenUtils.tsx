// app/utils/native/WelcomeScreenUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NO_WELCOME_SCREEN;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.JoinGuildSources;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = false;
    var4['welcomeScreenModalVisible'] = var7;
    var4['shouldFetchGuildId'] = var1;
    var _closure1_slot10 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/WelcomeScreenUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useShowWelcomeModal(arg1, arg2) {
        var8 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 6;
        var1 = var6[var1];
        var4 = undefined;
        var9 = var5.bind(var4)(var1);
        var1 = var9.useLocation;
        var1 = var1.bind(var9)();
        var1 = var1.welcomeModalChannelId;
        var _closure2_slot2 = var1;
        var9 = _closure1_slot1;
        var1 = 7;
        var1 = var6[var1];
        var1 = var9.bind(var4)(var1);
        var1 = var1.bind(var4)(var7, var8);
        var _closure2_slot3 = var1;
        var1 = 8;
        var1 = var6[var1];
        var6 = var5.bind(var4)(var1);
        var5 = var6.useStateFromStoresObject;
        var1 = _closure1_slot8;
        var4 = new Array(3);
        var4[0] = var1;
        var1 = _closure1_slot5;
        var4[1] = var1;
        var1 = _closure1_slot7;
        var4[2] = var1;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot3;
                if(var2) { _fun0001_ip = 19; continue _fun0001 }
 13:
                var2 = _closure1_slot10;
                return var2;
 19:
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var4 = _closure2_slot0;
                var3 = var2.bind(var3)(var4);
                var5 = _closure1_slot7;
                var2 = var5.getSelectableChannelIds;
                var5 = var2.bind(var5)(var4);
                var8 = _closure1_slot5;
                var2 = var8.get;
                var6 = var2.bind(var8)(var4);
                var2 = var8.hasSeen;
                var2 = var2.bind(var8)(var4);
                var4 = var8.hasError;
                var7 = var4.bind(var8)();
                var4 = var8.isFetching;
                var8 = var4.bind(var8)();
                var4 = !var2;
                if(!var4) { _fun0001_ip = 107; continue _fun0001 }
 103:
                var4 = _closure2_slot3;
 107:
                if(!var4) { _fun0001_ip = 122; continue _fun0001 }
 110:
                var2 = _closure2_slot2;
                var1 = _closure2_slot1;
                var4 = var2 === var1;
 122:
                var1 = {};
                var2 = var4;
                if(!var2) { _fun0001_ip = 136; continue _fun0001 }
 130:
                var10 = null;
                var2 = var10 != var6;
 136:
                if(!var2) { _fun0001_ip = 147; continue _fun0001 }
 139:
                var9 = _closure1_slot6;
                var2 = var6 !== var9;
 147:
                if(!var2) { _fun0001_ip = 153; continue _fun0001 }
 150:
                var2 = !var8;
 153:
                if(!var2) { _fun0001_ip = 159; continue _fun0001 }
 156:
                var2 = !var7;
 159:
                if(!var2) { _fun0001_ip = 173; continue _fun0001 }
 162:
                var7 = var5.length;
                var5 = 0;
                var2 = var7 > var5;
 173:
                var1['welcomeScreenModalVisible'] = var2;
                var2 = undefined;
                if(!var4) { _fun0001_ip = 208; continue _fun0001 }
 183:
                var4 = null;
                var6 = var4 == var6;
                var2 = undefined;
                if(!var6) { _fun0001_ip = 208; continue _fun0001 }
 194:
                var4 = var4 != var3;
                var2 = undefined;
                if(!var4) { _fun0001_ip = 208; continue _fun0001 }
 203:
                var2 = var3.id;
 208:
                var1['shouldFetchGuildId'] = var2;
                return var1;
            }
        };
        var4 = var5.bind(var6)(var4, var1);
        var1 = var4.welcomeScreenModalVisible;
        var6 = var4.shouldFetchGuildId;
        var _closure2_slot4 = var6;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot4;
                var2 = null;
                if(!(var2 != var3)) { _fun0002_ip = 53; continue _fun0002 }
 13:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.fetchWelcomeScreen;
                var1 = _closure2_slot4;
                var1 = var2.bind(var3)(var1);
 53:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useShowWelcomeModal'] = var4;
    var2 = function openWelcomeActionSheet(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var2 = var2.onHide;
            var _closure2_slot1 = var2;
            var4 = function openWelcomeActionSheet() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 12;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 11;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var8 = _closure2_slot0;
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'GuildWelcomeActionSheet';
                var3 = var3.bind(var2)(var8);
                var2 = {};
                var2['guildId'] = var8;
                var7 = _closure2_slot1;
                var2['onHide'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var3 = _closure1_slot4;
            var1 = var3.getLurkingSource;
            var5 = var1.bind(var3)();
            var1 = null;
            var6 = var1 == var5;
            var1 = undefined;
            var3 = undefined;
            if(var6) { _fun0003_ip = 66; continue _fun0003 }
 61:
            var3 = var5.type;
 66:
            var2 = _closure1_slot9;
            var2 = var2.MOBILE_GUILD_DISCOVERY;
            if(!(var3 !== var2)) { _fun0003_ip = 86; continue _fun0003 }
 80:
            var2 = var4.bind(var1)();
            _fun0003_ip = 106; continue _fun0003;
 86:
            var2 = global;
            var3 = var2.setTimeout;
            var2 = 600;
            var2 = var3.bind(var1)(var4, var2);
 106:
            return var1;
        }
    };
    var3['openWelcomeActionSheet'] = var2;
    return var1;
})();