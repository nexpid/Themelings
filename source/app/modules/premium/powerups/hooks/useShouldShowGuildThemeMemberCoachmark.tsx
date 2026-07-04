// app/modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.GUILD_THEME_POWERUP_BOOST_PRICE;
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useShouldShowGuildThemeMemberCoachmark(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 1;
            var1 = var10[var1];
            var6 = undefined;
            var1 = var9.bind(var6)(var1);
            var4 = var1.bind(var6)(var8);
            var3 = _closure1_slot0;
            var1 = 2;
            var1 = var10[var1];
            var2 = var3.bind(var6)(var1);
            var1 = var2.useServerThemeEnabled;
            var7 = 'useShouldShowGuildThemeMemberCoachmark';
            var2 = var1.bind(var2)(var8, var7);
            var1 = 3;
            var1 = var10[var1];
            var3 = var3.bind(var6)(var1);
            var1 = var3.useServerThemeUserEnabled;
            var7 = var1.bind(var3)(var7);
            var1 = 4;
            var1 = var10[var1];
            var1 = var9.bind(var6)(var1);
            var3 = var1.bind(var6)(var8);
            var1 = 5;
            var1 = var10[var1];
            var1 = var9.bind(var6)(var1);
            var1 = var1.bind(var6)(var8);
            var6 = var1.available;
            var1 = var1.isLoading;
            var1 = !var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var7;
case 4:
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot3;
            var2 = var6 < var5;
case 6:
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = !var3;
case 8:
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = false;
            var2 = var3 === var4;
case 10:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();