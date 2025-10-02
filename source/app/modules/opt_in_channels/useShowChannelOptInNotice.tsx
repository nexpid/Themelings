// app/modules/opt_in_channels/useShowChannelOptInNotice.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportDefault;
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
case 0:
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
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = var3.getGuildId;
            var1 = var9.bind(var3)();
case 2:
            if(!(var6 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot3;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var1 = var3.guild_id;
case 6:
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
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var4 = _closure1_slot2;
                    var3 = var4.isChannelRecordOrParentOptedIn;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 7:
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
            if(var9) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = var3.guild_id;
case 9:
            if(!(var6 == var4)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var4 = _closure1_slot3;
case 11:
            var4 = var7.bind(var8)(var4);
            if(!(var6 != var3)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            if(!var4) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var6 = var3.hasFlag;
            var5 = _closure1_slot4;
            var5 = var5.IS_GUILD_RESOURCE_CHANNEL;
            var4 = var6.bind(var3)(var5);
case 15:
            if(!var1) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var1 = !var4;
case 17:
            if(!var1) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var1 = !var2;
case 19:
            if(!var1) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var2 = var3.isThread;
            var2 = var2.bind(var3)();
            var1 = !var2;
case 21:
            return var1;
case 13:
            var1 = false;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();