// app/modules/routing/getChannelIdForGuildTransition.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/routing/getChannelIdForGuildTransition.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getChannelIdForGuildTransition(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var2 = _closure1_slot6;
            var1 = var2.getChannelId;
            var1 = var1.bind(var2)(var8);
            var3 = _closure1_slot5;
            var2 = var3.getDefaultChannel;
            var5 = var2.bind(var3)(var8);
            var3 = null;
            var6 = var3 == var5;
            var9 = undefined;
            var2 = undefined;
            if(var6) { _fun0001_ip = 54; continue _fun0001 }
 49:
            var2 = var5.id;
 54:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 5;
            var5 = var7[var5];
            var10 = var6.bind(var9)(var5);
            var7 = var10.getCurrentConfig;
            var6 = {};
            var6['guildId'] = var8;
            var5 = 'getChannelIdForGuildTransition';
            var6['location'] = var5;
            var5 = {};
            var11 = false;
            var5['autoTrackExposure'] = var11;
            var5 = var7.bind(var10)(var6, var5);
            var5 = var5.enabled;
            var6 = _closure1_slot7;
            var6 = var6.GUILD_ONBOARDING;
            if(!(var1 === var6)) { _fun0001_ip = 148; continue _fun0001 }
 128:
            var7 = _closure1_slot3;
            var6 = var7.shouldShowOnboarding;
            var6 = var6.bind(var7)(var8);
            if(var6) { _fun0001_ip = 148; continue _fun0001 }
 146:
            return var2;
 148:
            var6 = _closure1_slot7;
            var6 = var6.GUILD_HOME;
            if(!(var1 === var6)) { _fun0001_ip = 198; continue _fun0001 }
 162:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 6;
            var6 = var10[var6];
            var7 = var7.bind(var9)(var6);
            var6 = var7.canSeeOnboardingHome;
            var6 = var6.bind(var7)(var8);
            if(var6) { _fun0001_ip = 198; continue _fun0001 }
 196:
            return var2;
 198:
            var6 = _closure1_slot7;
            var6 = var6.MEMBER_SAFETY;
            if(!(var1 === var6)) { _fun0001_ip = 217; continue _fun0001 }
 212:
            if(var5) { _fun0001_ip = 217; continue _fun0001 }
 215:
            return var2;
 217:
            var5 = _closure1_slot4;
            var4 = var5.getChannel;
            var4 = var4.bind(var5)(var1);
            if(!(var3 != var4)) { _fun0001_ip = 248; continue _fun0001 }
 235:
            var3 = var4.isGuildVocal;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0001_ip = 251; continue _fun0001 }
 248:
            var1 = var2;
 251:
            return var1;
        }
    };
    var3['getChannelIdForGuildTransition'] = var2;
    return var1;
})();