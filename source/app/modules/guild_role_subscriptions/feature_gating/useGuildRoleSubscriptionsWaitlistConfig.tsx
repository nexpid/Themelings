// app/modules/guild_role_subscriptions/feature_gating/useGuildRoleSubscriptionsWaitlistConfig.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildSettingsSections;
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/feature_gating/useGuildRoleSubscriptionsWaitlistConfig.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildRoleSubscriptionsWaitlistConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 1;
            var5 = var1[var7];
            var8 = undefined;
            var9 = var6.bind(var8)(var5);
            var5 = var9.useGuildRoleSubscriptionSettingsVisibility;
            var5 = var5.bind(var9)(var4);
            var1 = var1[var7];
            var1 = var6.bind(var8)(var1);
            var1 = var1.GuildRoleSubscriptionSettingsVisibility;
            var1 = var1.NEEDS_COMMUNITY;
            if(!(var1 !== var5)) { _fun0001_ip = 249; continue _fun0001 }
 73:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var6.bind(var8)(var1);
            var1 = var1.GuildRoleSubscriptionSettingsVisibility;
            var1 = var1.WAITLIST_ONLY;
            if(!(var1 !== var5)) { _fun0001_ip = 108; continue _fun0001 }
 106:
            return var8;
 108:
            var1 = {};
            var1['visibility'] = var5;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 2;
            var7 = var11[var6];
            var7 = var10.bind(var8)(var7);
            var12 = var7.intl;
            var9 = var12.string;
            var7 = var11[var6];
            var7 = var10.bind(var8)(var7);
            var7 = var7.t;
            var7 = var7.5vz88P;
            var7 = var9.bind(var12)(var7);
            var1['noticeText'] = var7;
            var7 = var11[var6];
            var7 = var10.bind(var8)(var7);
            var9 = var7.intl;
            var7 = var9.string;
            var6 = var11[var6];
            var6 = var10.bind(var8)(var6);
            var6 = var6.t;
            var6 = var6.6yjvmp;
            var6 = var7.bind(var9)(var6);
            var1['ctaLabel'] = var6;
            var6 = true;
            var1['ctaClickable'] = var6;
            var6 = function onCtaClicked() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = 'https://dis.gd/creators-waitlist';
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onCtaClicked'] = var6;
            return var1;
 249:
            var1 = {};
            var1['visibility'] = var5;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 2;
            var5 = var9[var3];
            var5 = var7.bind(var8)(var5);
            var10 = var5.intl;
            var6 = var10.string;
            var5 = var9[var3];
            var5 = var7.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.0Z2Qxs;
            var5 = var6.bind(var10)(var5);
            var1['noticeText'] = var5;
            var5 = var9[var3];
            var5 = var7.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var3 = var9[var3];
            var3 = var7.bind(var8)(var3);
            var3 = var3.t;
            var3 = var3.BOJpl5;
            var3 = var5.bind(var6)(var3);
            var1['ctaLabel'] = var3;
            var3 = null;
            var3 = var3 != var4;
            var1['ctaClickable'] = var3;
            var2 = function onCtaClicked() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 3;
                    var3 = var8[var1];
                    var1 = undefined;
                    var10 = var5.bind(var1)(var3);
                    var6 = _closure2_slot0;
                    var3 = null;
                    var9 = var3 != var6;
                    var4 = 'Guild must be not null open COMMUNITY settings';
                    var4 = var10.bind(var1)(var9, var4);
                    var4 = 4;
                    var4 = var8[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.open;
                    var8 = var3 == var6;
                    var6 = undefined;
                    if(var8) { _fun0002_ip = 86; continue _fun0002 }
 77:
                    var7 = _closure2_slot0;
                    var6 = var7.id;
 86:
                    var7 = var3 != var6;
                    var3 = '';
                    if(!var7) { _fun0002_ip = 100; continue _fun0002 }
 97:
                    var3 = var6;
 100:
                    var2 = _closure1_slot3;
                    var2 = var2.COMMUNITY;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var1['onCtaClicked'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();