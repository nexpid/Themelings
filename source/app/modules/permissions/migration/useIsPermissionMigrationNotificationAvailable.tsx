// app/modules/permissions/migration/useIsPermissionMigrationNotificationAvailable.tsx
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
    var7 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot5 = var7;
    var7 = var4.GuildFeatures;
    var _closure1_slot6 = var7;
    var4 = var4.Permissions;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/permissions/migration/useIsPermissionMigrationNotificationAvailable.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsPermissionMigrationNotificationAvailable(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var12 = arg1;
            var _closure2_slot0 = var12;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 3;
            var6 = var5[var2];
            var3 = undefined;
            var9 = var4.bind(var3)(var6);
            var8 = var9.useStateFromStores;
            var6 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var4 = _closure1_slot4;
                var3 = var4.can;
                var1 = _closure1_slot7;
                var2 = var1.ADMINISTRATOR;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var6 = var8.bind(var9)(var7, var6);
            var2 = var5[var2];
            var7 = var4.bind(var3)(var2);
            var4 = var7.useStateFromStores;
            var8 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot3;
                    var3 = var4.getNumRoles;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var3 = var3.bind(var4)(var2);
                    var2 = 1;
                    var1 = var3 > var2;
case 2:
                    return var1;
                }
            };
            var1 = var4.bind(var7)(var2, var1);
            var4 = _closure1_slot1;
            var2 = 4;
            var2 = var5[var2];
            var5 = var4.bind(var3)(var2);
            var4 = var5.useExperiment;
            var2 = {};
            var11 = null;
            var8 = var11 == var12;
            var7 = undefined;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var12.id;
case 4:
            var2['guildId'] = var7;
            var7 = 'useIsPermissionMigrationNotificationAvailable';
            var2['location'] = var7;
            var2 = var4.bind(var5)(var2);
            var2 = var2.enabled;
            var4 = var11 == var12;
            var5 = undefined;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var12.features;
            var7 = var8.has;
            var4 = _closure1_slot6;
            var4 = var4.PIN_PERMISSION_MIGRATION_COMPLETE;
            var5 = var7.bind(var8)(var4);
case 6:
            var4 = var11 != var5;
            if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var5;
case 8:
            var5 = var11 == var12;
            var7 = undefined;
            if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = var12.features;
            var8 = var9.has;
            var5 = _closure1_slot6;
            var5 = var5.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE;
            var7 = var8.bind(var9)(var5);
case 10:
            var5 = var11 != var7;
            if(!var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = var7;
case 12:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 5;
            var7 = var14[var7];
            var9 = var13.bind(var3)(var7);
            var8 = var9.useIsSingleUseGuildDismissibleContentDismissed;
            var7 = 6;
            var7 = var14[var7];
            var7 = var13.bind(var3)(var7);
            var7 = var7.DismissibleContent;
            var7 = var7.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION;
            var13 = var11 == var12;
            var3 = undefined;
            if(var13) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = var12.id;
case 14:
            if(!(var11 == var3)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var3 = _closure1_slot5;
case 16:
            var3 = var8.bind(var9)(var7, var3);
            if(!var1) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var1 = var6;
case 18:
            if(!var1) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var4 = !var4;
            if(var4) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var4 = !var5;
case 22:
            var1 = var4;
case 20:
            if(!var1) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var1 = !var3;
case 24:
            if(!var1) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var1 = !var2;
case 26:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();