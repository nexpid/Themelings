// app/modules/welcome_screen/useWelcomeScreenEnabled.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildTextChannelType;
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
    var4 = var4.GuildFeatures;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/welcome_screen/useWelcomeScreenEnabled.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useWelcomeScreenEnabled(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot3;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = _closure1_slot4;
        var2[1] = var6;
        var5 = _closure1_slot5;
        var2[2] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var5 = _closure1_slot4;
                var4 = var5.getGuild;
                var2 = _closure2_slot1;
                var5 = var4.bind(var5)(var2);
                var6 = null;
                var2 = var6 == var5;
                var4 = undefined;
                var7 = undefined;
                if(var2) { _fun0001_ip = 63; continue _fun0001 }
 37:
                var9 = var5.features;
                var8 = var9.has;
                var2 = _closure1_slot6;
                var2 = var2.WELCOME_SCREEN_ENABLED;
                var7 = var8.bind(var9)(var2);
 63:
                var2 = true;
                if(!(var2 === var7)) { _fun0001_ip = 98; continue _fun0001 }
 69:
                var8 = var5.features;
                var7 = var8.has;
                var2 = _closure1_slot6;
                var2 = var2.COMMUNITY;
                var2 = var7.bind(var8)(var2);
                if(var2) { _fun0001_ip = 102; continue _fun0001 }
 98:
                var2 = false;
                return var2;
 102:
                var8 = var5.features;
                var7 = var8.has;
                var2 = _closure1_slot6;
                var2 = var2.GUILD_SERVER_GUIDE;
                var2 = var7.bind(var8)(var2);
                if(var2) { _fun0001_ip = 220; continue _fun0001 }
 131:
                var8 = _closure1_slot3;
                var2 = var8.getChannel;
                var7 = _closure2_slot0;
                var2 = var2.bind(var8)(var7);
                var9 = _closure1_slot5;
                var8 = var9.getChannelId;
                var1 = _closure2_slot1;
                var1 = var8.bind(var9)(var1);
                var1 = var7 === var1;
                if(!var1) { _fun0001_ip = 179; continue _fun0001 }
 175:
                var1 = var6 != var2;
 179:
                if(!var1) { _fun0001_ip = 201; continue _fun0001 }
 182:
                var6 = var2.getGuildId;
                var6 = var6.bind(var2)();
                var5 = var5.id;
                var1 = var6 === var5;
 201:
                if(!var1) { _fun0001_ip = 218; continue _fun0001 }
 204:
                var3 = _closure1_slot2;
                var2 = var2.type;
                var1 = var3.bind(var4)(var2);
 218:
                return var1;
 220:
                var1 = false;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();