// app/modules/activities/ActivitiesInTextUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function isActivityInTextSupportedForChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var5 = null;
            if(!(var5 != var3)) { _fun0001_ip = 234; continue _fun0001 }
 12:
            var6 = _closure1_slot2;
            var4 = var6.getChannel;
            var1 = var3.parent_id;
            var4 = var4.bind(var6)(var1);
            var1 = var5 == var4;
            if(var1) { _fun0001_ip = 94; continue _fun0001 }
 42:
            var6 = var5 == var4;
            var7 = undefined;
            var5 = undefined;
            if(var6) { _fun0001_ip = 58; continue _fun0001 }
 53:
            var5 = var4.type;
 58:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var4 = 3;
            var4 = var8[var4];
            var4 = var6.bind(var7)(var4);
            var4 = var4.ChannelTypes;
            var4 = var4.GUILD_CATEGORY;
            var1 = var5 === var4;
 94:
            if(!var1) { _fun0001_ip = 232; continue _fun0001 }
 100:
            var4 = var3.type;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 3;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var3 = var3.ChannelTypes;
            var8 = var3.GUILD_TEXT;
            var3 = new Array(4);
            var3[0] = var8;
            var8 = var7[var2];
            var8 = var6.bind(var5)(var8);
            var8 = var8.ChannelTypes;
            var8 = var8.GUILD_VOICE;
            var3[1] = var8;
            var8 = var7[var2];
            var8 = var6.bind(var5)(var8);
            var8 = var8.ChannelTypes;
            var8 = var8.GROUP_DM;
            var3[2] = var8;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.ChannelTypes;
            var2 = var2.DM;
            var3[3] = var2;
            var2 = var3.includes;
            var1 = var2.bind(var3)(var4);
 232:
            return var1;
 234:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot5 = var5;
    var1 = function isActivitiesInTextEnabledForChannelWithPermissions(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var3 = arg2;
            var5 = null;
            if(!(var5 != var4)) { _fun0002_ip = 79; continue _fun0002 }
 12:
            var6 = undefined;
            if(!(var6 !== var4)) { _fun0002_ip = 79; continue _fun0002 }
 18:
            var2 = _closure1_slot5;
            var2 = var2.bind(var6)(var4);
            if(var2) { _fun0002_ip = 37; continue _fun0002 }
 33:
            var2 = false;
            return var2;
 37:
            var2 = var4.guild_id;
            if(!(var5 != var2)) { _fun0002_ip = 75; continue _fun0002 }
 46:
            var2 = var3.can;
            var1 = _closure1_slot4;
            var1 = var1.USE_EMBEDDED_ACTIVITIES;
            var1 = var2.bind(var3)(var1, var4);
            if(var1) { _fun0002_ip = 75; continue _fun0002 }
 71:
            var1 = false;
            return var1;
 75:
            var1 = true;
            return var1;
 79:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var4 = function getIsAppLauncherEnabled(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var2 = null;
            var5 = var2 == var4;
            var3 = undefined;
            var1 = undefined;
            if(var5) { _fun0003_ip = 21; continue _fun0003 }
 16:
            var1 = var4.guild_id;
 21:
            var1 = var2 != var1;
            if(var1) { _fun0003_ip = 40; continue _fun0003 }
 28:
            var2 = _closure1_slot5;
            var1 = var2.bind(var3)(var4);
 40:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.Permissions;
    var _closure1_slot4 = var6;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/activities/ActivitiesInTextUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['isActivityInTextSupportedForChannel'] = var5;
    var5 = function isActivitiesInTextEnabled(arg1) {
        var4 = _closure1_slot6;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = arg1;
        var1 = var4.bind(var2)(var1, var3);
        return var1;
    };
    var3['isActivitiesInTextEnabled'] = var5;
    var5 = function useIsActivitiesInTextEnabled(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot3;
        var2[1] = var5;
        var1 = function() {
            var4 = _closure1_slot6;
            var5 = _closure1_slot2;
            var3 = var5.getChannel;
            var2 = _closure2_slot0;
            var3 = var3.bind(var5)(var2);
            var2 = _closure1_slot3;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsActivitiesInTextEnabled'] = var5;
    var3['getIsAppLauncherEnabled'] = var4;
    var4 = function useIsAppLauncherEnabled(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = _closure1_slot2;
                var3 = var4.getChannel;
                var1 = _closure2_slot0;
                var4 = var3.bind(var4)(var1);
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0004_ip = 44; continue _fun0004 }
 33:
                var3 = _closure1_slot7;
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
 44:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsAppLauncherEnabled'] = var4;
    var2 = function useShowActivitiesInOmniButtonMenu() {
        var1 = false;
        return var1;
    };
    var3['useShowActivitiesInOmniButtonMenu'] = var2;
    return var1;
})();