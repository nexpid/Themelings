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
            var3 = 3;
            var6 = var5[var3];
            var2 = undefined;
            var9 = var4.bind(var2)(var6);
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
            var3 = var5[var3];
            var7 = var4.bind(var2)(var3);
            var4 = var7.useStateFromStores;
            var8 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var8;
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
            var1 = var4.bind(var7)(var3, var1);
            var4 = _closure1_slot1;
            var3 = 4;
            var3 = var5[var3];
            var5 = var4.bind(var2)(var3);
            var4 = var5.useExperiment;
            var3 = {};
            var11 = null;
            var8 = var11 == var12;
            var7 = undefined;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var12.id;
case 4:
            var3['guildId'] = var7;
            var7 = 'useIsPermissionMigrationNotificationAvailable';
            var3['location'] = var7;
            var3 = var4.bind(var5)(var3);
            var5 = var3.enabled;
            var3 = var11 == var12;
            var4 = undefined;
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var12.features;
            var7 = var8.has;
            var3 = _closure1_slot6;
            var3 = var3.PIN_PERMISSION_MIGRATION_COMPLETE;
            var4 = var7.bind(var8)(var3);
case 6:
            var3 = var11 != var4;
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var4;
case 8:
            var4 = var11 == var12;
            var7 = undefined;
            if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = var12.features;
            var8 = var9.has;
            var4 = _closure1_slot6;
            var4 = var4.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE;
            var7 = var8.bind(var9)(var4);
case 10:
            var4 = var11 != var7;
            if(!var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = var7;
case 12:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 5;
            var7 = var9[var7];
            var7 = var8.bind(var2)(var7);
            var7 = var7.DismissibleContent;
            if(var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var9 = var7.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION;
            _fun0001_ip = 16; continue _fun0001;
case 14:
            var9 = var7.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION;
case 16:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 6;
            var7 = var13[var7];
            var8 = var8.bind(var2)(var7);
            var7 = var8.useIsSingleUseGuildDismissibleContentDismissed;
            var13 = var11 == var12;
            var2 = undefined;
            if(var13) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var2 = var12.id;
case 17:
            if(!(var11 == var2)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var2 = _closure1_slot5;
case 19:
            var2 = var7.bind(var8)(var9, var2);
            if(!var1) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var1 = var6;
case 21:
            if(!var1) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var3 = !var3;
            if(var3) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var4 = !var4;
            if(!var4) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var4 = var5;
case 27:
            var3 = var4;
case 25:
            var1 = var3;
case 23:
            if(!var1) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var1 = !var2;
case 29:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();