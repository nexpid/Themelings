// app/modules/messages/canUseOfficialMessages.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function isGuildOfficialMessagesEnabled(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.features;
            var3 = var4.has;
            var2 = _closure1_slot5;
            var2 = var2.VERIFIED;
            var1 = var3.bind(var4)(var2);
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.getCurrentConfig;
            var2 = {};
            var5 = var5.id;
            var2['guildId'] = var5;
            var5 = arg2;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = var2.enabled;
case 4:
            return var1;
        }
    };
    var _closure1_slot7 = var5;
    var4 = function useIsGuildOfficialMessagesEnabled(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 4;
            var2 = var5[var2];
            var7 = undefined;
            var9 = var4.bind(var7)(var2);
            var6 = var9.useStateFromStores;
            var2 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var4 = _closure1_slot3;
                    var3 = var4.getGuild;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 6:
                    return var1;
                }
            };
            var4 = var6.bind(var9)(var4, var1, var2);
            var2 = _closure1_slot1;
            var1 = 3;
            var1 = var5[var1];
            var6 = var2.bind(var7)(var1);
            var5 = var6.useExperiment;
            var2 = {};
            var1 = null;
            var9 = var1 != var8;
            if(!var9) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var7 = var8;
case 8:
            var2['guildId'] = var7;
            var7 = arg2;
            var2['location'] = var7;
            var2 = var5.bind(var6)(var2);
            var2 = var2.enabled;
            var1 = var1 != var4;
            if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var5 = var4.features;
            var4 = var5.has;
            var3 = _closure1_slot5;
            var3 = var3.VERIFIED;
            var1 = var4.bind(var5)(var3);
case 10:
            if(!var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var1 = var2;
case 12:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.GuildFeatures;
    var _closure1_slot5 = var9;
    var6 = var6.Permissions;
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/messages/canUseOfficialMessages.tsx';
    var6 = var7.bind(var8)(var6);
    var3['isGuildOfficialMessagesEnabled'] = var5;
    var3['useIsGuildOfficialMessagesEnabled'] = var4;
    var4 = function canManageGuildOfficialMessages(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = _closure1_slot7;
            var4 = undefined;
            var3 = arg1;
            var1 = arg3;
            var1 = var5.bind(var4)(var3, var1);
            if(!var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var5 = _closure1_slot4;
            var4 = var5.can;
            var2 = _closure1_slot6;
            var3 = var2.MANAGE_OFFICIAL_MESSAGES;
            var2 = arg2;
            var1 = var4.bind(var5)(var3, var2);
case 14:
            return var1;
        }
    };
    var3['canManageGuildOfficialMessages'] = var4;
    var2 = function useCanManageGuildOfficialMessages(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var7 = arg2;
            var _closure2_slot0 = var7;
            var5 = _closure1_slot8;
            var6 = undefined;
            var4 = arg1;
            var1 = arg3;
            var1 = var5.bind(var6)(var4, var1);
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 4;
            var4 = var8[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = new Array(1);
            var3[0] = var7;
            var2 = function() {
                var4 = _closure1_slot4;
                var3 = var4.can;
                var1 = _closure1_slot6;
                var2 = var1.MANAGE_OFFICIAL_MESSAGES;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var5.bind(var6)(var4, var2, var3);
            if(!var1) { _fun0005_ip = 16; continue _fun0005 }
case 17:
            var1 = var2;
case 16:
            return var1;
        }
    };
    var3['useCanManageGuildOfficialMessages'] = var2;
    return var1;
})();