// app/modules/guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function transitionGuildsBarToGuildOrOpenSelectedChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 0;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getRootNavigationRef;
            var10 = var3.bind(var4)();
            var3 = null;
            var4 = var3 == var10;
            var5 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var10.isReady;
            var5 = var4.bind(var10)();
case 2:
            var8 = true;
            var4 = undefined;
            if(!(var8 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 1;
            var5 = var9[var5];
            var9 = var7.bind(var1)(var5);
            var7 = var9.coerceGuildsRoute;
            var5 = var10.getCurrentRoute;
            var5 = var5.bind(var10)();
            var5 = var7.bind(var9)(var5);
            var7 = var3 != var5;
            var4 = undefined;
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var9 = var5.params;
            var10 = var3 == var9;
            var7 = undefined;
            if(var10) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var7 = var9.drawerOpen;
case 7:
            var4 = undefined;
            if(!(var8 !== var7)) { _fun0001_ip = 4; continue _fun0001 }
case 9:
            var8 = var5.params;
            var9 = var3 == var8;
            var7 = undefined;
            if(var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var8.guildId;
case 10:
            var4 = undefined;
            if(!(var7 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 12:
            var7 = var5.params;
            var8 = var3 == var7;
            var5 = undefined;
            if(var8) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var5 = var7.channelId;
case 13:
            var4 = var5;
case 4:
            if(!(var3 == var4)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 3;
            var3 = var7[var3];
            var5 = var5.bind(var1)(var3);
            var3 = var5.transitionToGuild;
            var3 = var3.bind(var5)(var6);
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 2;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.transitionToChannel;
            var2 = var2.bind(var3)(var4);
case 17:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();