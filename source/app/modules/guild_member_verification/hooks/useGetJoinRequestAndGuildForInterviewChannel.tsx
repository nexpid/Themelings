// app/modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var8 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var8);
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot9 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGetJoinRequestAndGuildForInterviewChannel(arg1) {
        var7 = _closure1_slot4;
        var3 = var7.useState;
        var11 = false;
        var3 = var3.bind(var7)(var11);
        var10 = _closure1_slot3;
        var9 = undefined;
        var8 = 2;
        var3 = var10.bind(var9)(var3, var8);
        var5 = 0;
        var4 = var3[var5];
        var6 = 1;
        var3 = var3[var6];
        var _closure2_slot0 = var3;
        var3 = var7.useState;
        var3 = var3.bind(var7)(var11);
        var3 = var10.bind(var9)(var3, var8);
        var5 = var3[var5];
        var _closure2_slot1 = var5;
        var3 = var3[var6];
        var _closure2_slot2 = var3;
        var6 = _closure1_slot1;
        var10 = _closure1_slot2;
        var3 = 7;
        var3 = var10[var3];
        var8 = var6.bind(var9)(var3);
        var6 = var8.cast;
        var3 = arg1;
        var8 = var6.bind(var8)(var3);
        var _closure2_slot3 = var8;
        var6 = _closure1_slot0;
        var3 = 8;
        var3 = var10[var3];
        var9 = var6.bind(var9)(var3);
        var6 = var9.useStateFromStoresObject;
        var10 = _closure1_slot7;
        var3 = new Array(4);
        var3[0] = var10;
        var10 = _closure1_slot8;
        var3[1] = var10;
        var10 = _closure1_slot5;
        var3[2] = var10;
        var2 = _closure1_slot6;
        var3[3] = var2;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot7;
                var2 = var3.getRequest;
                var1 = _closure2_slot3;
                var5 = var2.bind(var3)(var1);
                var3 = null;
                if(!(var3 != var5)) { _fun0001_ip = 125; continue _fun0001 }
 31:
                var6 = _closure1_slot5;
                var2 = var6.getGuild;
                var1 = var5.guildId;
                var2 = var2.bind(var6)(var1);
                if(!(var3 == var2)) { _fun0001_ip = 74; continue _fun0001 }
 54:
                var7 = _closure1_slot8;
                var6 = var7.getJoinRequestGuild;
                var1 = var5.guildId;
                var2 = var6.bind(var7)(var1);
 74:
                var1 = {};
                var1['joinRequest'] = var5;
                var3 = var3 != var2;
                if(!var3) { _fun0001_ip = 114; continue _fun0001 }
 88:
                var6 = _closure1_slot6;
                var5 = var6.can;
                var4 = _closure1_slot9;
                var4 = var4.KICK_MEMBERS;
                var3 = var5.bind(var6)(var4, var2);
 114:
                var1['isModmin'] = var3;
                var1['guild'] = var2;
                return var1;
 125:
                var1 = {'joinRequest': null, 'isModmin': false, 'guild': null};
                return var1;
            }
        };
        var2 = var6.bind(var9)(var3, var2);
        var3 = var2.joinRequest;
        var _closure2_slot4 = var3;
        var2 = var2.guild;
        var _closure2_slot5 = var2;
        var9 = var7.useEffect;
        var6 = new Array(2);
        var6[0] = var2;
        var6[1] = var5;
        var5 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot5;
                var2 = null;
                var2 = var2 != var3;
                if(var2) { _fun0002_ip = 20; continue _fun0002 }
 16:
                var2 = _closure2_slot1;
 20:
                if(var2) { _fun0002_ip = 69; continue _fun0002 }
 23:
                var2 = _closure2_slot2;
                var3 = undefined;
                var1 = true;
                var1 = var2.bind(var3)(var1);
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.fetchRequestToJoinGuilds;
                var1 = var1.bind(var2)();
 69:
                var1 = undefined;
                return var1;
            }
        };
        var5 = var9.bind(var7)(var5, var6);
        var6 = var7.useEffect;
        var5 = new Array(2);
        var5[0] = var3;
        var5[1] = var8;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure2_slot4;
                var2 = null;
                if(!(var2 == var3)) { _fun0003_ip = 84; continue _fun0003 }
 13:
                var3 = _closure2_slot0;
                var4 = undefined;
                var2 = true;
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 9;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.fetchGuildJoinRequest;
                var1 = _closure2_slot3;
                var3 = var2.bind(var3)(var1);
                var2 = var3.finally;
                var1 = function() {
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
 84:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var6.bind(var7)(var1, var5);
        var1 = {};
        var1['loading'] = var4;
        var1['joinRequest'] = var3;
        var1['joinRequestGuild'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();