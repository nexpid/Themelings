// app/modules/guild_settings/apps/native/GuildSettingsModalLobbiesLinked.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function SyncingToGamesItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = var1.applicationId;
            var8 = var1.channels;
            var _closure2_slot0 = var8;
            var1 = var1.isOnlySection;
            var _closure2_slot1 = var1;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 3;
            var1 = var7[var1];
            var5 = undefined;
            var9 = var3.bind(var5)(var1);
            var1 = var9.useNavigation;
            var1 = var1.bind(var9)();
            var _closure2_slot2 = var1;
            var1 = 4;
            var1 = var7[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useGetOrFetchApplication;
            var9 = var1.bind(var3)(var4);
            var4 = var8.length;
            var7 = null;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0001_ip = 184; continue _fun0001 }
 107:
            var4 = _closure1_slot4;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 5;
            var2 = var10[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.FormSection;
            var2 = {};
            var10 = var7 == var9;
            var7 = undefined;
            if(var10) { _fun0001_ip = 153; continue _fun0001 }
 148:
            var7 = var9.name;
 153:
            var2['title'] = var7;
            var7 = var8.map;
            var6 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure1_slot4;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 5;
                var2 = var10[var7];
                var4 = undefined;
                var2 = var8.bind(var4)(var2);
                var3 = var2.FormRow;
                var2 = {};
                var11 = var1.name;
                var2['label'] = var11;
                var11 = 6;
                var11 = var10[var11];
                var12 = var8.bind(var4)(var11);
                var11 = var12.getChannelIconComponent;
                var11 = var11.bind(var12)(var1);
                var2['leading'] = var11;
                var9 = _closure1_slot4;
                var7 = var10[var7];
                var7 = var8.bind(var4)(var7);
                var7 = var7.FormRow;
                var8 = var7.Arrow;
                var7 = {};
                var7 = var9.bind(var4)(var8, var7);
                var2['trailing'] = var7;
                var6 = function onPress() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var4 = _closure2_slot2;
                        var3 = var4.push;
                        var1 = _closure1_slot3;
                        var2 = var1.EDIT_LINKED_LOBBY;
                        var1 = {};
                        var5 = _closure3_slot0;
                        var1['channel'] = var5;
                        var8 = _closure2_slot1;
                        var7 = 1;
                        var5 = var7;
                        if(!var8) { _fun0002_ip = 70; continue _fun0002 }
 51:
                        var6 = _closure2_slot0;
                        var6 = var6.length;
                        var5 = var7;
                        if(!(var5 === var6)) { _fun0002_ip = 70; continue _fun0002 }
 67:
                        var5 = 2;
 70:
                        var1['numScreensToPop'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var2['onPress'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 184:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildSettingsSections;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/apps/native/GuildSettingsModalLobbiesLinked.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsModalLobbiesLinked(arg1) {
        var1 = arg1;
        var12 = var1.contentContainerStyle;
        var3 = var1.guildId;
        var7 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 7;
        var1 = var9[var1];
        var4 = undefined;
        var2 = var7.bind(var4)(var1);
        var1 = var2.useChannelsAllowedToUnlink;
        var5 = var1.bind(var2)(var3);
        var2 = _closure1_slot1;
        var1 = 8;
        var1 = var9[var1];
        var3 = var2.bind(var4)(var1);
        var2 = var3.groupBy;
        var1 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var2 = var1.linkedLobby;
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0003_ip = 26; continue _fun0003 }
 20:
                var1 = var2.application_id;
 26:
                return var1;
            }
        };
        var3 = var2.bind(var3)(var5, var1);
        var _closure2_slot0 = var3;
        var1 = global;
        var2 = var1.Object;
        var1 = var2.keys;
        var13 = var1.bind(var2)(var3);
        var _closure2_slot1 = var13;
        var3 = _closure1_slot5;
        var1 = 9;
        var1 = var9[var1];
        var1 = var7.bind(var4)(var1);
        var2 = var1.RedesignCompat;
        var1 = {};
        var10 = _closure1_slot4;
        var5 = 5;
        var5 = var9[var5];
        var5 = var7.bind(var4)(var5);
        var8 = var5.Form;
        var5 = {};
        var5['contentContainerStyle'] = var12;
        var12 = var13.map;
        var11 = function(arg1) {
            var5 = arg1;
            var4 = _closure1_slot4;
            var3 = _closure1_slot6;
            var2 = {};
            var2['applicationId'] = var5;
            var6 = _closure2_slot0;
            var6 = var6[var5];
            var2['channels'] = var6;
            var1 = _closure2_slot1;
            var6 = var1.length;
            var1 = 1;
            var1 = var1 === var6;
            var2['isOnlySection'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2, var5);
            return var1;
        };
        var11 = var12.bind(var13)(var11);
        var5['children'] = var11;
        var8 = var10.bind(var4)(var8, var5);
        var5 = new Array(2);
        var5[0] = var8;
        var8 = _closure1_slot4;
        var6 = 10;
        var6 = var9[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.NavScrim;
        var6 = {};
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();