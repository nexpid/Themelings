// app/modules/opt_in_channels/useShowChannelOptInNotice.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NULL_STRING_GUILD_ID;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelFlags;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/opt_in_channels/useShowChannelOptInNotice.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useShowChannelOptInNotice(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 3;
            var1 = var4[var1];
            var4 = undefined;
            var8 = var6.bind(var4)(var1);
            var7 = var8.useOptInEnabledForGuild;
            var6 = null;
            var9 = var6 == var3;
            var1 = undefined;
            if(var9) { _fun0001_ip = 61; continue _fun0001 }
 51:
            var9 = var3.getGuildId;
            var1 = var9.bind(var3)();
 61:
            if(!(var6 == var1)) { _fun0001_ip = 71; continue _fun0001 }
 65:
            var1 = _closure1_slot3;
            _fun0001_ip = 76; continue _fun0001;
 71:
            var1 = var3.guild_id;
 76:
            var1 = var7.bind(var8)(var1);
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var7 = 4;
            var7 = var9[var7];
            var11 = var8.bind(var4)(var7);
            var10 = var11.useStateFromStores;
            var12 = _closure1_slot2;
            var7 = new Array(1);
            var7[0] = var12;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 38; continue _fun0002 }
 16:
                    var4 = _closure1_slot2;
                    var3 = var4.isChannelRecordOrParentOptedIn;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
 38:
                    return var1;
                }
            };
            var2 = var10.bind(var11)(var7, var2);
            var7 = 5;
            var7 = var9[var7];
            var8 = var8.bind(var4)(var7);
            var7 = var8.useCanSeeOnboardingHome;
            var9 = var6 == var3;
            var4 = undefined;
            if(var9) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var4 = var3.guild_id;
 163:
            if(!(var6 == var4)) { _fun0001_ip = 171; continue _fun0001 }
 167:
            var4 = _closure1_slot3;
 171:
            var4 = var7.bind(var8)(var4);
            if(!(var6 != var3)) { _fun0001_ip = 234; continue _fun0001 }
 180:
            if(!var4) { _fun0001_ip = 204; continue _fun0001 }
 183:
            var6 = var3.hasFlag;
            var5 = _closure1_slot4;
            var5 = var5.IS_GUILD_RESOURCE_CHANNEL;
            var4 = var6.bind(var3)(var5);
 204:
            if(!var1) { _fun0001_ip = 210; continue _fun0001 }
 207:
            var1 = !var4;
 210:
            if(!var1) { _fun0001_ip = 216; continue _fun0001 }
 213:
            var1 = !var2;
 216:
            if(!var1) { _fun0001_ip = 232; continue _fun0001 }
 219:
            var2 = var3.isThread;
            var2 = var2.bind(var3)();
            var1 = !var2;
 232:
            return var1;
 234:
            var1 = false;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();