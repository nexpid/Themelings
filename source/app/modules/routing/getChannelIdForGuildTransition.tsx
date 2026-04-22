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
    var4 = var5.bind(var1)(var4);
    var4 = var4.ME;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/routing/getChannelIdForGuildTransition.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getChannelIdForGuildTransition(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var2 = _closure1_slot5;
            var1 = var2.getChannelId;
            var1 = var1.bind(var2)(var7);
            var3 = _closure1_slot4;
            var2 = var3.getDefaultChannel;
            var5 = var2.bind(var3)(var7);
            var2 = null;
            var6 = var2 == var5;
            var8 = undefined;
            var3 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var5.id;
case 2:
            if(!(var2 == var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot7;
            var5 = undefined;
            if(!(var7 === var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = _closure1_slot6;
            var6 = var9.getPrivateChannelIds;
            var10 = var6.bind(var9)();
            var6 = var10.length;
            var9 = 0;
            var11 = var6 > var9;
            var6 = undefined;
            if(!var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var10[var9];
case 8:
            var5 = var6;
case 6:
            var3 = var5;
case 4:
            var5 = _closure1_slot8;
            var5 = var5.GUILD_ONBOARDING;
            if(!(var1 === var5)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = _closure1_slot2;
            var5 = var6.shouldShowOnboarding;
            var5 = var5.bind(var6)(var7);
            if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            return var3;
case 10:
            var5 = _closure1_slot8;
            var5 = var5.GUILD_HOME;
            if(!(var1 === var5)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 7;
            var5 = var9[var5];
            var6 = var6.bind(var8)(var5);
            var5 = var6.canSeeOnboardingHome;
            var5 = var5.bind(var6)(var7);
            if(var5) { _fun0001_ip = 13; continue _fun0001 }
case 15:
            return var3;
case 13:
            var5 = _closure1_slot8;
            var5 = var5.GAME_SHOP;
            if(!(var1 === var5)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 8;
            var5 = var9[var5];
            var6 = var6.bind(var8)(var5);
            var5 = var6.canSeeGameShop;
            var5 = var5.bind(var6)(var7);
            if(var5) { _fun0001_ip = 18; continue _fun0001 }
case 16:
            var5 = _closure1_slot3;
            var4 = var5.getChannel;
            var4 = var4.bind(var5)(var1);
            if(!(var2 != var4)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var2 = var4.isGuildVocal;
            var4 = var2.bind(var4)();
            var2 = var1;
            if(!var4) { _fun0001_ip = 21; continue _fun0001 }
case 19:
            var2 = var3;
case 21:
            return var2;
case 18:
            return var1;
        }
    };
    var3['getChannelIdForGuildTransition'] = var2;
    return var1;
})();