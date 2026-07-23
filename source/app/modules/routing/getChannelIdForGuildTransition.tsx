// app/modules/routing/getChannelIdForGuildTransition.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ME;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot9 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/routing/getChannelIdForGuildTransition.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getChannelIdForGuildTransition(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var2 = _closure1_slot6;
            var1 = var2.getChannelId;
            var2 = var1.bind(var2)(var7);
            var4 = _closure1_slot4;
            var1 = var4.getDefaultChannel;
            var5 = var1.bind(var4)(var7);
            var4 = null;
            var8 = var4 == var5;
            var6 = undefined;
            var1 = undefined;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var5.id;
case 2:
            if(!(var4 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = _closure1_slot8;
            var5 = undefined;
            if(!(var7 === var8)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = _closure1_slot7;
            var8 = var9.getPrivateChannelIds;
            var10 = var8.bind(var9)();
            var8 = var10.length;
            var9 = 0;
            var11 = var8 > var9;
            var8 = undefined;
            if(!var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = var10[var9];
case 8:
            var5 = var8;
case 6:
            var1 = var5;
case 4:
            var5 = _closure1_slot9;
            var5 = var5.GUILD_ONBOARDING;
            if(!(var2 === var5)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = _closure1_slot2;
            var5 = var8.shouldShowOnboarding;
            var5 = var5.bind(var8)(var7);
            if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            return var1;
case 10:
            var5 = _closure1_slot9;
            var5 = var5.GUILD_HOME;
            if(!(var2 === var5)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 8;
            var5 = var9[var5];
            var8 = var8.bind(var6)(var5);
            var5 = var8.canSeeOnboardingHome;
            var5 = var5.bind(var8)(var7);
            if(var5) { _fun0001_ip = 13; continue _fun0001 }
case 15:
            return var1;
case 13:
            var5 = _closure1_slot9;
            var5 = var5.GUILD_SPACE;
            if(!(var2 !== var5)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var5 = _closure1_slot9;
            var5 = var5.GAME_SHOP;
            if(!(var2 === var5)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 10;
            var5 = var9[var5];
            var8 = var8.bind(var6)(var5);
            var5 = var8.canSeeGameShop;
            var5 = var5.bind(var8)(var7);
            if(var5) { _fun0001_ip = 20; continue _fun0001 }
case 18:
            var8 = _closure1_slot3;
            var5 = var8.getChannel;
            var5 = var5.bind(var8)(var2);
            if(!(var4 != var5)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var4 = var5.isGuildVocal;
            var5 = var4.bind(var5)();
            var4 = var2;
            if(!var5) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var4 = var1;
case 23:
            return var4;
case 20:
            return var2;
case 16:
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var4 = 9;
            var4 = var8[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.canUseGuildSpace;
            var4 = _closure1_slot5;
            var3 = var4.getGuild;
            var4 = var3.bind(var4)(var7);
            var3 = 'getChannelIdForGuildTransition';
            var3 = var5.bind(var6)(var4, var3);
            if(!var3) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var1 = var2;
case 24:
            return var1;
        }
    };
    var3['getChannelIdForGuildTransition'] = var2;
    return var1;
})();