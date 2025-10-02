// app/modules/messages/GuildPinPermissionExperiment.tsx
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
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot3 = var7;
    var7 = var4.GuildFeatures;
    var _closure1_slot4 = var7;
    var4 = var4.Permissions;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/GuildPinPermissionExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsPinPermissionMigrationNotificationAvailable(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var9 = arg1;
            var _closure2_slot0 = var9;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
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
            var8 = null;
            var4 = var8 == var9;
            var3 = undefined;
            if(var4) { _fun0001_ip = 101; continue _fun0001 }
 75:
            var6 = var9.features;
            var5 = var6.has;
            var4 = _closure1_slot4;
            var4 = var4.PIN_PERMISSION_MIGRATION_COMPLETE;
            var3 = var5.bind(var6)(var4);
 101:
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var4 = 3;
            var4 = var11[var4];
            var6 = var10.bind(var2)(var4);
            var5 = var6.useIsSingleUseGuildDismissibleContentDismissed;
            var4 = 4;
            var4 = var11[var4];
            var4 = var10.bind(var2)(var4);
            var4 = var4.DismissibleContent;
            var4 = var4.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION;
            var10 = var8 == var9;
            var2 = undefined;
            if(var10) { _fun0001_ip = 165; continue _fun0001 }
 160:
            var2 = var9.id;
 165:
            if(!(var8 == var2)) { _fun0001_ip = 173; continue _fun0001 }
 169:
            var2 = _closure1_slot3;
 173:
            var2 = var5.bind(var6)(var4, var2);
            if(!var1) { _fun0001_ip = 185; continue _fun0001 }
 182:
            var1 = !var3;
 185:
            if(!var1) { _fun0001_ip = 191; continue _fun0001 }
 188:
            var1 = !var2;
 191:
            return var1;
        }
    };
    var3['useIsPinPermissionMigrationNotificationAvailable'] = var2;
    return var1;
})();