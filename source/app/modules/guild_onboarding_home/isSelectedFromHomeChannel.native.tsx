// app/modules/guild_onboarding_home/isSelectedFromHomeChannel.native.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildHomeChannel;
    var _closure1_slot2 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding_home/isSelectedFromHomeChannel.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isSelectedFromHomeChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 3;
            var2 = var4[var2];
            var4 = undefined;
            var5 = var5.bind(var4)(var2);
            var2 = var5.getRootNavigationRef;
            var6 = var2.bind(var5)();
            var12 = null;
            var5 = var12 == var6;
            var2 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var6.getRootState;
            var2 = var5.bind(var6)();
case 2:
            if(!(var12 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var11 = 4;
            var5 = var5[var11];
            var6 = var6.bind(var4)(var5);
            var5 = var6.coerceMainRoute;
            var7 = var2.routes;
            var2 = var2.index;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            if(!(var12 != var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = var2.state;
            if(!(var12 != var10)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = var10.index;
            var8 = 0;
            var2 = var9 >= var8;
            var7 = 1;
            var6 = undefined;
            var5 = undefined;
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var10.routes;
            var15 = var2[var9];
            var13 = var5;
            if(!(var12 != var15)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var14 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var11];
            var14 = var14.bind(var4)(var2);
            var2 = var14.coerceChannelRoute;
            var14 = var2.bind(var14)(var15);
            var6 = var14;
            var13 = var5;
            if(!(var12 != var14)) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var2 = var14.params;
            var15 = var2.channelId;
            var2 = var1.id;
            var6 = var14;
            var13 = var5;
            if(!(var15 === var2)) { _fun0001_ip = 12; continue _fun0001 }
case 15:
            var15 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var11];
            var16 = var15.bind(var4)(var2);
            var15 = var16.coerceChannelRoute;
            var17 = var10.routes;
            var2 = var9 - var7;
            var2 = var17[var2];
            var2 = var15.bind(var16)(var2);
            var6 = var14;
            var13 = var2;
            if(!(var12 == var13)) { _fun0001_ip = 16; continue _fun0001 }
case 12:
            var9 = var9 - 1;
            var5 = var13;
            if(var9 >= var8) { _fun0001_ip = 11; continue _fun0001 }
case 10:
            var5 = false;
            return var5;
case 16:
            var5 = var2.params;
            var5 = var5.guildId;
            var1 = var1.guild_id;
            var1 = var5 === var1;
            if(!var1) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var3 = _closure1_slot2;
            var2 = var2.params;
            var2 = var2.channelId;
            var1 = var3.bind(var4)(var2);
case 17:
            return var1;
case 8:
            var1 = false;
            return var1;
case 6:
            var1 = false;
            return var1;
case 4:
            var1 = false;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();