// app/modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionSettingsUtils.tsx
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
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionSettingsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getCoverImageURI(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = _closure1_slot2;
            var4 = var5.getApplicationIdForGuild;
            var2 = var1.guild_id;
            var6 = var4.bind(var5)(var2);
            var5 = null;
            var4 = var5 != var6;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var1.cover_image_asset;
            var4 = var5 != var2;
case 2:
            var2 = '';
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 1;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.getAssetURL;
            var3 = var1.cover_image_asset;
            var1 = 1024;
            var2 = var4.bind(var5)(var6, var3, var1);
case 4:
            var1 = {};
            var1['uri'] = var2;
            return var1;
        }
    };
    var3['getCoverImageURI'] = var2;
    return var1;
})();