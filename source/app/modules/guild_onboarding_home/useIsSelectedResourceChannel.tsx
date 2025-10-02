// app/modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelFlags;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsSelectedResourceChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 4;
            var3 = var5[var2];
            var2 = undefined;
            var8 = var4.bind(var2)(var3);
            var7 = var8.useStateFromStores;
            var9 = _closure1_slot2;
            var3 = new Array(2);
            var3[0] = var9;
            var9 = _closure1_slot3;
            var3[1] = var9;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot2;
                    var2 = var4.getChannel;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var4)(var1);
                    var5 = null;
                    if(!(var5 != var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 5;
                    var4 = var4[var2];
                    var2 = undefined;
                    var8 = var6.bind(var2)(var4);
                    var7 = var8.hasFlag;
                    var6 = var1.flags;
                    var4 = _closure1_slot5;
                    var4 = var4.IS_GUILD_RESOURCE_CHANNEL;
                    var4 = var7.bind(var8)(var6, var4);
                    if(!var4) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var4 = _closure1_slot3;
                    var3 = var4.getSelectedResourceChannelId;
                    var5 = var5 == var1;
                    var2 = undefined;
                    if(var5) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var2 = var1.guild_id;
case 5:
                    var3 = var3.bind(var4)(var2);
                    var2 = var1.id;
                    if(!(var3 !== var2)) { _fun0002_ip = 7; continue _fun0002 }
case 2:
                    var2 = undefined;
                    return var2;
case 7:
                    var1 = var1.guild_id;
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var3, var1);
            var1 = 6;
            var1 = var5[var1];
            var5 = var4.bind(var2)(var1);
            var4 = var5.useCanSeeOnboardingHome;
            var1 = null;
            var2 = var3;
            if(!(var1 == var2)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var2 = _closure1_slot4;
case 6:
            var2 = var4.bind(var5)(var2);
            var1 = var1 != var3;
            if(!var1) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var1 = var2;
case 9:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();