// app/modules/guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SubscriptionGatedChannelIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.locked;
            var5 = var1.isInMainTabsExperiment;
            var4 = _closure1_slot2;
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var9 = 2;
            var1 = var11[var9];
            var3 = undefined;
            var2 = var10.bind(var3)(var1);
            var1 = {};
            var8 = 3;
            var8 = var11[var8];
            var8 = var10.bind(var3)(var8);
            var1['source'] = var8;
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var7 = var7[var9];
            var7 = var8.bind(var3)(var7);
            var7 = var7.Sizes;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var7.SMALL;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var5 = var7.EXTRA_SMALL_10;
case 4:
            var1['size'] = var5;
            var5 = false;
            var5 = var5 !== var6;
            var1['disableColor'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();