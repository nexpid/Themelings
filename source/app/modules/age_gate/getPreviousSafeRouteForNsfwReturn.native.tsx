// app/modules/age_gate/getPreviousSafeRouteForNsfwReturn.native.tsx
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
    var4 = 0;
    var8 = var6[var4];
    var1 = undefined;
    var8 = var5.bind(var1)(var8);
    var9 = var8.CHANNEL_PREFIX;
    var _closure1_slot2 = var9;
    var9 = var8.GUILD_PREFIX;
    var _closure1_slot3 = var9;
    var8 = var8.getIdFromHistoryItem;
    var _closure1_slot4 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ME;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_gate/getPreviousSafeRouteForNsfwReturn.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getPreviousSafeRouteForNsfwReturn() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot5;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var11 = var1.history;
            var2 = var11.length;
            var1 = 2;
            var10 = var2 - var1;
            var9 = undefined;
            var8 = 0;
            var7 = 5;
            var6 = 4;
            var1 = null;
            var5 = undefined;
            var4 = undefined;
            var3 = undefined;
            var2 = undefined;
            if(!(var10 >= var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var15 = var11[var10];
            var13 = _closure1_slot4;
            var18 = var13.bind(var9)(var15);
            var14 = var15.startsWith;
            var13 = _closure1_slot2;
            var13 = var14.bind(var15)(var13);
            if(var13) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = var15.startsWith;
            var13 = _closure1_slot3;
            var17 = var14.bind(var15)(var13);
            var16 = var5;
            var15 = var4;
            var14 = var3;
            var13 = var2;
            if(!var17) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var19 = _closure1_slot7;
            var17 = var19.getDefaultChannel;
            var19 = var17.bind(var19)(var18);
            var16 = var5;
            var15 = var4;
            var14 = var18;
            var13 = var19;
            if(!(var1 != var13)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var20 = _closure1_slot0;
            var17 = _closure1_slot1;
            var17 = var17[var6];
            var20 = var20.bind(var9)(var17);
            var17 = var20.isChannelContentGated;
            var17 = var17.bind(var20)(var19);
            var16 = var5;
            var15 = var4;
            var14 = var18;
            var13 = var19;
            if(var17) { _fun0001_ip = 6; continue _fun0001 }
case 9:
            var20 = _closure1_slot0;
            var17 = _closure1_slot1;
            var17 = var17[var7];
            var20 = var20.bind(var9)(var17);
            var17 = var20.isChannelSpoilerGated;
            var17 = var17.bind(var20)(var19);
            var16 = var5;
            var15 = var4;
            var14 = var18;
            var13 = var19;
            if(var17) { _fun0001_ip = 6; continue _fun0001 }
case 10:
            var17 = {};
            var17['guildId'] = var18;
            var19 = var19.id;
            var17['channelId'] = var19;
            return var17;
case 4:
            var19 = _closure1_slot6;
            var17 = var19.getChannel;
            var19 = var17.bind(var19)(var18);
            var16 = var18;
            var15 = var19;
            var14 = var3;
            var13 = var2;
            if(!(var1 != var19)) { _fun0001_ip = 6; continue _fun0001 }
case 11:
            var20 = _closure1_slot0;
            var17 = _closure1_slot1;
            var17 = var17[var6];
            var20 = var20.bind(var9)(var17);
            var17 = var20.isChannelContentGated;
            var17 = var17.bind(var20)(var19);
            var16 = var18;
            var15 = var19;
            var14 = var3;
            var13 = var2;
            if(var17) { _fun0001_ip = 6; continue _fun0001 }
case 12:
            var20 = _closure1_slot0;
            var17 = _closure1_slot1;
            var17 = var17[var7];
            var20 = var20.bind(var9)(var17);
            var17 = var20.isChannelSpoilerGated;
            var17 = var17.bind(var20)(var19);
            var16 = var18;
            var15 = var19;
            var14 = var3;
            var13 = var2;
            if(var17) { _fun0001_ip = 6; continue _fun0001 }
case 13:
            var17 = {};
            var19 = var19.guild_id;
            if(!(var1 == var19)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var19 = _closure1_slot8;
case 14:
            var17['guildId'] = var19;
            var17['channelId'] = var18;
            return var17;
case 6:
            var10 = var10 - 1;
            var5 = var16;
            var4 = var15;
            var3 = var14;
            var2 = var13;
            if(var10 >= var8) { _fun0001_ip = 3; continue _fun0001 }
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();