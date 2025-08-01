// app/modules/guild_onboarding_home/hasPendingMemberAction.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildMemberFlags;
    var _closure1_slot9 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding_home/hasPendingMemberAction.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function hasPendingMemberAction(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot5;
            var2 = var3.getGuild;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var5 = _closure1_slot3;
            var2 = var5.getChannel;
            var1 = arg2;
            var2 = var2.bind(var5)(var1);
            var6 = null;
            var1 = var6 != var3;
            if(!var1) { _fun0001_ip = 50; continue _fun0001 }
 46:
            var1 = var6 != var2;
 50:
            if(!var1) { _fun0001_ip = 80; continue _fun0001 }
 53:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 7;
            var5 = var7[var5];
            var7 = undefined;
            var5 = var8.bind(var7)(var5);
            var1 = var5.bind(var7)(var3);
 80:
            if(!var1) { _fun0001_ip = 109; continue _fun0001 }
 83:
            var8 = var3.features;
            var7 = var8.has;
            var5 = _closure1_slot8;
            var5 = var5.GUILD_SERVER_GUIDE;
            var1 = var7.bind(var8)(var5);
 109:
            if(!var1) { _fun0001_ip = 203; continue _fun0001 }
 112:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 8;
            var7 = var7[var5];
            var5 = undefined;
            var8 = var8.bind(var5)(var7);
            var7 = var8.hasFlag;
            var11 = _closure1_slot4;
            var10 = var11.getSelfMember;
            var9 = var3.id;
            var9 = var10.bind(var11)(var9);
            var10 = var6 == var9;
            if(var10) { _fun0001_ip = 172; continue _fun0001 }
 167:
            var5 = var9.flags;
 172:
            var9 = var6 != var5;
            var6 = 0;
            if(!var9) { _fun0001_ip = 184; continue _fun0001 }
 181:
            var6 = var5;
 184:
            var5 = _closure1_slot9;
            var5 = var5.COMPLETED_HOME_ACTIONS;
            var5 = var7.bind(var8)(var6, var5);
            var1 = !var5;
 203:
            if(!var1) { _fun0001_ip = 234; continue _fun0001 }
 206:
            var8 = _closure1_slot6;
            var7 = var8.hasMemberAction;
            var6 = var3.id;
            var5 = var2.id;
            var1 = var7.bind(var8)(var6, var5);
 234:
            if(!var1) { _fun0001_ip = 268; continue _fun0001 }
 237:
            var5 = _closure1_slot7;
            var4 = var5.hasCompletedActionForChannel;
            var3 = var3.id;
            var2 = var2.id;
            var2 = var4.bind(var5)(var3, var2);
            var1 = !var2;
 268:
            return var1;
        }
    };
    var3['hasPendingMemberAction'] = var2;
    return var1;
})();