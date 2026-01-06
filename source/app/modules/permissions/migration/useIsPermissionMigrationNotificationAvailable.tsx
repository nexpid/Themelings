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
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/permissions/migration/useIsPermissionMigrationNotificationAvailable.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsPermissionMigrationNotificationAvailable(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var13 = arg1;
            var _closure2_slot0 = var13;
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
            var7 = var8.bind(var9)(var7, var6);
            var2 = var5[var2];
            var6 = var4.bind(var3)(var2);
            var4 = var6.useStateFromStores;
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
            var1 = var4.bind(var6)(var2, var1);
            var4 = _closure1_slot1;
            var2 = 4;
            var2 = var5[var2];
            var5 = var4.bind(var3)(var2);
            var4 = var5.useExperiment;
            var2 = {};
            var12 = null;
            var8 = var12 == var13;
            var6 = undefined;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var13.id;
case 4:
            var2['guildId'] = var6;
            var8 = 'useIsPermissionMigrationNotificationAvailable';
            var2['location'] = var8;
            var2 = var4.bind(var5)(var2);
            var2 = var2.enabled;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 5;
            var4 = var6[var4];
            var6 = var5.bind(var3)(var4);
            var5 = var6.useExperiment;
            var4 = {};
            var10 = var12 == var13;
            var9 = undefined;
            if(var10) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var13.id;
case 6:
            var4['guildId'] = var9;
            var4['location'] = var8;
            var4 = var5.bind(var6)(var4);
            var6 = var4.enabled;
            var4 = var12 == var13;
            var5 = undefined;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = var13.features;
            var8 = var9.has;
            var4 = _closure1_slot6;
            var4 = var4.PIN_PERMISSION_MIGRATION_COMPLETE;
            var5 = var8.bind(var9)(var4);
case 8:
            var4 = var12 != var5;
            if(!var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = var5;
case 10:
            var5 = var12 == var13;
            var8 = undefined;
            if(var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var10 = var13.features;
            var9 = var10.has;
            var5 = _closure1_slot6;
            var5 = var5.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE;
            var8 = var9.bind(var10)(var5);
case 12:
            var5 = var12 != var8;
            if(!var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = var8;
case 14:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 6;
            var8 = var10[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.DismissibleContent;
            if(var6) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var10 = var8.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION;
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var10 = var8.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION;
case 18:
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 7;
            var8 = var14[var8];
            var9 = var9.bind(var3)(var8);
            var8 = var9.useIsSingleUseGuildDismissibleContentDismissed;
            var14 = var12 == var13;
            var3 = undefined;
            if(var14) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var3 = var13.id;
case 19:
            if(!(var12 == var3)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var3 = _closure1_slot5;
case 21:
            var3 = var8.bind(var9)(var10, var3);
            if(!var1) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var1 = var7;
case 23:
            if(!var1) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var4 = !var4;
            if(var4) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var5 = !var5;
            if(!var5) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var5 = var6;
case 29:
            var4 = var5;
case 27:
            var1 = var4;
case 25:
            if(!var1) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var1 = !var3;
case 31:
            if(!var1) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var1 = !var2;
case 33:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();