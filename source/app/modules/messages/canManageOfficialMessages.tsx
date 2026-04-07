// app/modules/messages/canManageOfficialMessages.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot5 = var7;
    var4 = var4.Permissions;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/canManageOfficialMessages.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function canManageGuildOfficialMessages(arg1, arg2, arg3) {
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
            var5 = arg3;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = var2.enabled;
case 4:
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot4;
            var4 = var5.can;
            var2 = _closure1_slot6;
            var3 = var2.MANAGE_OFFICIAL_MESSAGES;
            var2 = arg2;
            var1 = var4.bind(var5)(var3, var2);
case 6:
            return var1;
        }
    };
    var3['canManageGuildOfficialMessages'] = var4;
    var2 = function useCanManageGuildOfficialMessages(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var9 = arg1;
            var11 = arg2;
            var _closure2_slot0 = var9;
            var _closure2_slot1 = var11;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 4;
            var5 = var6[var2];
            var8 = undefined;
            var13 = var3.bind(var8)(var5);
            var12 = var13.useStateFromStores;
            var5 = _closure1_slot3;
            var10 = new Array(1);
            var10[0] = var5;
            var7 = new Array(1);
            var7[0] = var9;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var4 = _closure1_slot3;
                    var3 = var4.getGuild;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 8:
                    return var1;
                }
            };
            var5 = var12.bind(var13)(var10, var5, var7);
            var2 = var6[var2];
            var10 = var3.bind(var8)(var2);
            var7 = var10.useStateFromStores;
            var2 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(1);
            var2[0] = var11;
            var1 = function() {
                var4 = _closure1_slot4;
                var3 = var4.can;
                var1 = _closure1_slot6;
                var2 = var1.MANAGE_OFFICIAL_MESSAGES;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var7.bind(var10)(var3, var1, var2);
            var3 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var7 = var3.bind(var8)(var1);
            var6 = var7.useExperiment;
            var3 = {};
            var1 = null;
            var10 = var1 != var9;
            if(!var10) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var8 = var9;
case 10:
            var3['guildId'] = var8;
            var8 = arg3;
            var3['location'] = var8;
            var3 = var6.bind(var7)(var3);
            var3 = var3.enabled;
            var1 = var1 != var5;
            if(!var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var6 = var5.features;
            var5 = var6.has;
            var4 = _closure1_slot5;
            var4 = var4.VERIFIED;
            var1 = var5.bind(var6)(var4);
case 12:
            if(!var1) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var1 = var3;
case 14:
            if(!var1) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var1 = var2;
case 16:
            return var1;
        }
    };
    var3['useCanManageGuildOfficialMessages'] = var2;
    return var1;
})();