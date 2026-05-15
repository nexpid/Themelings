// app/modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx
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
    var4 = var4.GuildFeatures;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useIsServerThemeAvailableForGuild(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var5 = arg2;
            var _closure2_slot0 = var8;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 2;
            var3 = var7[var3];
            var6 = undefined;
            var11 = var4.bind(var6)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot2;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot2;
                    var3 = var4.getGuild;
                    var2 = _closure2_slot0;
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    var4 = var2 == var3;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = var3.features;
                    var3 = var4.has;
                    var1 = _closure1_slot3;
                    var1 = var1.GUILD_THEME;
                    var2 = var3.bind(var4)(var1);
case 2:
                    var1 = true;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var1 = var10.bind(var11)(var9, var1, var3);
            var3 = 3;
            var3 = var7[var3];
            var7 = var4.bind(var6)(var3);
            var4 = var7.useServerThemeEnabled;
            var3 = null;
            var9 = var3 != var8;
            var3 = undefined;
            if(!var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var8;
case 4:
            var3 = var4.bind(var7)(var3, var5);
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 4;
            var2 = var7[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.useServerThemeUserEnabled;
            var2 = var2.bind(var4)(var5);
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var3;
case 6:
            if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function getIsServerThemeAvailableForGuild(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg1;
            var4 = arg2;
            var3 = _closure1_slot2;
            var1 = var3.getGuild;
            var1 = var1.bind(var3)(var8);
            var3 = null;
            var7 = var3 == var1;
            var5 = undefined;
            var6 = undefined;
            if(var7) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var9 = var1.features;
            var7 = var9.has;
            var1 = _closure1_slot3;
            var1 = var1.GUILD_THEME;
            var6 = var7.bind(var9)(var1);
case 10:
            var1 = true;
            var1 = var1 === var6;
            if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 3;
            var6 = var9[var6];
            var7 = var7.bind(var5)(var6);
            var6 = var7.getServerThemeEnabled;
            var9 = var3 != var8;
            var3 = undefined;
            if(!var9) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var3 = var8;
case 14:
            var1 = var6.bind(var7)(var3, var4);
case 12:
            if(!var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 4;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getServerThemeUserEnabled;
            var1 = var2.bind(var3)(var4);
case 16:
            return var1;
        }
    };
    var3['getIsServerThemeAvailableForGuild'] = var2;
    return var1;
})();