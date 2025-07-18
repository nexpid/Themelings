// app/modules/routing/getChannelIdForGuildTransition.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/routing/getChannelIdForGuildTransition.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getChannelIdForGuildTransition(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var2 = _closure1_slot5;
            var1 = var2.getChannelId;
            var1 = var1.bind(var2)(var7);
            var3 = _closure1_slot4;
            var2 = var3.getDefaultChannel;
            var5 = var2.bind(var3)(var7);
            var3 = null;
            var6 = var3 == var5;
            var8 = undefined;
            var2 = undefined;
            if(var6) { _fun0001_ip = 54; continue _fun0001 }
 49:
            var2 = var5.id;
 54:
            var5 = _closure1_slot6;
            var5 = var5.GUILD_ONBOARDING;
            if(!(var1 === var5)) { _fun0001_ip = 88; continue _fun0001 }
 68:
            var6 = _closure1_slot2;
            var5 = var6.shouldShowOnboarding;
            var5 = var5.bind(var6)(var7);
            if(var5) { _fun0001_ip = 88; continue _fun0001 }
 86:
            return var2;
 88:
            var5 = _closure1_slot6;
            var5 = var5.GUILD_HOME;
            if(!(var1 === var5)) { _fun0001_ip = 138; continue _fun0001 }
 102:
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 5;
            var5 = var9[var5];
            var6 = var6.bind(var8)(var5);
            var5 = var6.canSeeOnboardingHome;
            var5 = var5.bind(var6)(var7);
            if(var5) { _fun0001_ip = 138; continue _fun0001 }
 136:
            return var2;
 138:
            var5 = _closure1_slot3;
            var4 = var5.getChannel;
            var4 = var4.bind(var5)(var1);
            if(!(var3 != var4)) { _fun0001_ip = 169; continue _fun0001 }
 156:
            var3 = var4.isGuildVocal;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0001_ip = 172; continue _fun0001 }
 169:
            var1 = var2;
 172:
            return var1;
        }
    };
    var3['getChannelIdForGuildTransition'] = var2;
    return var1;
})();