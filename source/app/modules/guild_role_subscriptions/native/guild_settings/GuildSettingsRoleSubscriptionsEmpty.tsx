// app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEmpty.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function GuildSettingsRoleSubscriptionsEmptyContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.guild;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.useNavigation;
            var7 = var1.bind(var3)();
            var3 = _closure1_slot1;
            var1 = 6;
            var1 = var4[var1];
            var4 = var3.bind(var5)(var1);
            var3 = var8.id;
            var1 = _closure1_slot6;
            var1 = var1.GUILD_ROLE_SUBSCRIPTIONS;
            var1 = var4.bind(var5)(var3, var1);
            var4 = var1.application;
            var1 = var1.loading;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var8.features;
            var3 = var6.has;
            var1 = _closure1_slot4;
            var1 = var1.CREATOR_MONETIZABLE;
            var1 = var3.bind(var6)(var1);
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var8.features;
            var3 = var6.has;
            var1 = _closure1_slot4;
            var1 = var1.CREATOR_MONETIZABLE_PROVISIONAL;
            var1 = var3.bind(var6)(var1);
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var6 = _closure1_slot7;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 8;
            var1 = var9[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['guild'] = var8;
            var1 = var6.bind(var5)(var3, var1);
            _fun0001_ip = 7; continue _fun0001;
case 4:
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var7.replace;
            var4 = _closure1_slot5;
            var4 = var4.ROLE_SUBSCRIPTIONS_TIERS;
            var4 = var6.bind(var7)(var4);
            var1 = null;
            _fun0001_ip = 7; continue _fun0001;
case 8:
            var6 = var7.replace;
            var4 = _closure1_slot5;
            var4 = var4.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION;
            var4 = var6.bind(var7)(var4);
            var1 = null;
case 7:
            _fun0001_ip = 10; continue _fun0001;
case 2:
            var4 = _closure1_slot7;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
case 10:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot4 = var7;
    var4 = var4.GuildSettingsSections;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ApplicationTypes;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEmpty.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsRoleSubscriptionsEmpty(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var2 = var2.guildId;
            var _closure2_slot0 = var2;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 9;
            var3 = var4[var3];
            var5 = undefined;
            var7 = var6.bind(var5)(var3);
            var6 = var7.useStateFromStores;
            var8 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var6.bind(var7)(var3, var1);
            var3 = _closure1_slot1;
            var1 = 10;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var7 = var1.bind(var5)(var8);
            var1 = null;
            if(!(var1 != var8)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            if(!(var1 == var7)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var4 = _closure1_slot7;
            var3 = _closure1_slot8;
            var1 = {};
            var1['guild'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 15; continue _fun0002;
case 13:
            var6 = _closure1_slot7;
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 11;
            var3 = var9[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['guild'] = var8;
            var3['config'] = var7;
            var1 = var6.bind(var5)(var4, var3);
case 15:
            _fun0002_ip = 16; continue _fun0002;
case 11:
            var4 = _closure1_slot7;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
case 16:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();