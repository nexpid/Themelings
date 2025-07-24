// app/modules/messages/GuildPinPermissionExperiment.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var11 = true;
    var4['value'] = var11;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot3 = var5;
    var5 = var4.GuildFeatures;
    var _closure1_slot4 = var5;
    var4 = var4.Permissions;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createExperiment;
    var4 = {'kind': 'guild', 'id': '2025-06_guild_pin_permission', 'label': 'Guild Pin Permission'};
    var9 = {};
    var10 = false;
    var9['enabled'] = var10;
    var4['defaultConfig'] = var9;
    var10 = {'id': 1, 'label': 'Allows use of the Pin Messages permission'};
    var9 = {};
    var9['enabled'] = var11;
    var10['config'] = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var4['treatments'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/GuildPinPermissionExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['GuildPinPermissionExperiment'] = var4;
    var2 = function useIsPinPermissionMigrationNotificationAvailable(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var10 = arg1;
            var _closure2_slot0 = var10;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = var5.useStateFromStores;
            var6 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var6;
            var1 = function() {
                var4 = _closure1_slot2;
                var3 = var4.can;
                var1 = _closure1_slot5;
                var2 = var1.ADMINISTRATOR;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var4.bind(var5)(var3, var1);
            var5 = _closure1_slot6;
            var4 = var5.useExperiment;
            var3 = {};
            var9 = null;
            var7 = var9 == var10;
            var6 = undefined;
            if(var7) { _fun0001_ip = 92; continue _fun0001 }
 87:
            var6 = var10.id;
 92:
            var3['guildId'] = var6;
            var6 = 'useIsPinPermissionMigrationNotificationAvailable';
            var3['location'] = var6;
            var3 = var4.bind(var5)(var3);
            var4 = var3.enabled;
            var5 = var9 == var10;
            var3 = undefined;
            if(var5) { _fun0001_ip = 149; continue _fun0001 }
 123:
            var7 = var10.features;
            var6 = var7.has;
            var5 = _closure1_slot4;
            var5 = var5.PIN_PERMISSION_MIGRATION_COMPLETE;
            var3 = var6.bind(var7)(var5);
 149:
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var5 = 4;
            var5 = var12[var5];
            var7 = var11.bind(var2)(var5);
            var6 = var7.useIsSingleUseGuildDismissibleContentDismissed;
            var5 = 5;
            var5 = var12[var5];
            var5 = var11.bind(var2)(var5);
            var5 = var5.DismissibleContent;
            var5 = var5.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION;
            var11 = var9 == var10;
            var2 = undefined;
            if(var11) { _fun0001_ip = 213; continue _fun0001 }
 208:
            var2 = var10.id;
 213:
            if(!(var9 == var2)) { _fun0001_ip = 221; continue _fun0001 }
 217:
            var2 = _closure1_slot3;
 221:
            var2 = var6.bind(var7)(var5, var2);
            if(!var1) { _fun0001_ip = 233; continue _fun0001 }
 230:
            var1 = var4;
 233:
            if(!var1) { _fun0001_ip = 239; continue _fun0001 }
 236:
            var1 = !var3;
 239:
            if(!var1) { _fun0001_ip = 245; continue _fun0001 }
 242:
            var1 = !var2;
 245:
            return var1;
        }
    };
    var3['useIsPinPermissionMigrationNotificationAvailable'] = var2;
    return var1;
})();