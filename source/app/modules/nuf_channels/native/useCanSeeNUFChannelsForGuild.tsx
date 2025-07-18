// app/modules/nuf_channels/native/useCanSeeNUFChannelsForGuild.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildMemberFlags;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nuf_channels/native/useCanSeeNUFChannelsForGuild.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCanSeeNUFChannelsForGuild(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 5;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot4;
        var3 = new Array(3);
        var3[0] = var7;
        var7 = _closure1_slot3;
        var3[1] = var7;
        var2 = _closure1_slot2;
        var3[2] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot4;
                var1 = var3.getCurrentUser;
                var5 = var1.bind(var3)();
                var3 = null;
                if(!(var3 != var5)) { _fun0001_ip = 312; continue _fun0001 }
 25:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 6;
                var1 = var6[var1];
                var7 = undefined;
                var4 = var4.bind(var7)(var1);
                var1 = var4.isNewUser;
                var1 = var1.bind(var4)(var5);
                if(!var1) { _fun0001_ip = 312; continue _fun0001 }
 64:
                var6 = _closure1_slot3;
                var5 = var6.getGuild;
                var1 = _closure2_slot0;
                var1 = var5.bind(var6)(var1);
                if(!(var3 != var1)) { _fun0001_ip = 308; continue _fun0001 }
 92:
                var8 = var1.features;
                var6 = var8.has;
                var5 = _closure1_slot5;
                var5 = var5.HUB;
                var5 = var6.bind(var8)(var5);
                if(var5) { _fun0001_ip = 308; continue _fun0001 }
 124:
                var6 = _closure1_slot2;
                var5 = var6.getSelfMember;
                var4 = _closure2_slot0;
                var6 = var5.bind(var6)(var4);
                var5 = var1.features;
                var4 = var5.has;
                var1 = _closure1_slot5;
                var1 = var1.GUILD_ONBOARDING;
                var1 = var4.bind(var5)(var1);
                if(!var1) { _fun0001_ip = 176; continue _fun0001 }
 172:
                var1 = var3 != var6;
 176:
                if(!var1) { _fun0001_ip = 238; continue _fun0001 }
 179:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 7;
                var4 = var8[var4];
                var9 = var5.bind(var7)(var4);
                var8 = var9.hasFlag;
                var4 = var6.flags;
                var10 = var3 != var4;
                var5 = 0;
                if(!var10) { _fun0001_ip = 222; continue _fun0001 }
 219:
                var5 = var4;
 222:
                var4 = _closure1_slot6;
                var4 = var4.STARTED_ONBOARDING;
                var1 = var8.bind(var9)(var5, var4);
 238:
                if(!var1) { _fun0001_ip = 303; continue _fun0001 }
 241:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 7;
                var4 = var8[var4];
                var5 = var5.bind(var7)(var4);
                var4 = var5.hasFlag;
                var6 = var6.flags;
                var7 = var3 != var6;
                var3 = 0;
                if(!var7) { _fun0001_ip = 284; continue _fun0001 }
 281:
                var3 = var6;
 284:
                var2 = _closure1_slot6;
                var2 = var2.COMPLETED_ONBOARDING;
                var2 = var4.bind(var5)(var3, var2);
                var1 = !var2;
 303:
                var1 = !var1;
                return var1;
 308:
                var1 = false;
                return var1;
 312:
                var1 = false;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useCanSeeNUFChannelsForGuild'] = var2;
    return var1;
})();