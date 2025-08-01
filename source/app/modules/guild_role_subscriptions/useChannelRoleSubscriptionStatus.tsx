// app/modules/guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function getChannelRoleSubscriptionStatus(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arguments[1];
            var4 = arguments[2];
            var7 = arguments[3];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0001_ip = 22; continue _fun0001 }
 15:
            var3 = _closure1_slot3;
 22:
            if(!(var4 === var1)) { _fun0001_ip = 33; continue _fun0001 }
 26:
            var4 = _closure1_slot2;
 33:
            if(!(var7 === var1)) { _fun0001_ip = 44; continue _fun0001 }
 37:
            var7 = _closure1_slot4;
 44:
            var2 = var3.getChannel;
            var1 = arg1;
            var6 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 != var6)) { _fun0001_ip = 76; continue _fun0001 }
 63:
            var2 = var6.isRoleSubscriptionTemplatePreviewChannel;
            var2 = var2.bind(var6)();
            if(var2) { _fun0001_ip = 191; continue _fun0001 }
 76:
            if(!(var1 != var6)) { _fun0001_ip = 105; continue _fun0001 }
 80:
            var3 = var4.isChannelGated;
            var2 = var6.guild_id;
            var1 = var6.id;
            var1 = var3.bind(var4)(var2, var1);
            if(var1) { _fun0001_ip = 114; continue _fun0001 }
 105:
            var1 = _closure1_slot6;
            _fun0001_ip = 189; continue _fun0001;
 114:
            var2 = {};
            var3 = true;
            var2['isSubscriptionGated'] = var3;
            var3 = var6.isGuildVocal;
            var3 = var3.bind(var6)();
            var5 = var7.can;
            var4 = _closure1_slot5;
            if(var3) { _fun0001_ip = 166; continue _fun0001 }
 149:
            var3 = var4.VIEW_CHANNEL;
            var3 = var5.bind(var7)(var3, var6);
            var3 = !var3;
            _fun0001_ip = 181; continue _fun0001;
 166:
            var4 = var4.CONNECT;
            var4 = var5.bind(var7)(var4, var6);
            var3 = !var4;
 181:
            var2['needSubscriptionToAccess'] = var3;
            var1 = var2;
 189:
            _fun0001_ip = 205; continue _fun0001;
 191:
            var1 = {'isSubscriptionGated': true, 'needSubscriptionToAccess': true};
 205:
            return var1;
        }
    };
    var _closure1_slot7 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Permissions;
    var _closure1_slot5 = var5;
    var5 = {'needSubscriptionToAccess': false, 'isSubscriptionGated': false};
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useChannelRoleSubscriptionStatus(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresObject;
        var7 = _closure1_slot3;
        var3 = new Array(3);
        var3[0] = var7;
        var7 = _closure1_slot2;
        var3[1] = var7;
        var2 = _closure1_slot4;
        var3[2] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var6 = _closure1_slot7;
            var10 = _closure2_slot0;
            var9 = _closure1_slot3;
            var8 = _closure1_slot2;
            var7 = _closure1_slot4;
            var11 = undefined;
            var1 = var11[var6](var10, var9, var8, var7, var6);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var3['getChannelRoleSubscriptionStatus'] = var2;
    return var1;
})();