// app/modules/guild_themes/useGuildThemeNuxTrigger.tsx
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DismissibleContentGroupName;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_themes/useGuildThemeNuxTrigger.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildThemeNuxTrigger(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var8;
            var9 = var1.isNuxOpen;
            var _closure2_slot1 = var9;
            var6 = var1.openNux;
            var _closure2_slot2 = var6;
            var1 = undefined;
            var _closure2_slot3 = var1;
            var _closure2_slot4 = var1;
            var _closure2_slot5 = var1;
            var7 = _closure1_slot0;
            var10 = _closure1_slot1;
            var4 = 3;
            var4 = var10[var4];
            var11 = var7.bind(var1)(var4);
            var5 = var11.useEnabledGuildThemeForGuildId;
            var4 = 'GuildThemeNuxTrigger';
            var5 = var5.bind(var11)(var8, var4);
            var4 = 4;
            var4 = var10[var4];
            var10 = var7.bind(var1)(var4);
            var7 = var10.useSelectedDismissibleContent;
            var4 = null;
            if(!(var4 == var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = new Array(0);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var4 = 5;
            var4 = var12[var4];
            var4 = var11.bind(var1)(var4);
            var4 = var4.DismissibleContent;
            var11 = var4.GUILD_THEME_NUX;
            var4 = new Array(1);
            var4[0] = var11;
            var5 = var4;
case 4:
            var4 = _closure1_slot4;
            var4 = var4.GUILD_THEME_NUX;
            var7 = var7.bind(var10)(var5, var4);
            var5 = _closure1_slot2;
            var4 = 2;
            var7 = var5.bind(var1)(var7, var4);
            var4 = 0;
            var5 = var7[var4];
            var4 = 1;
            var7 = var7[var4];
            _closure2_slot3 = var7;
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var4 = 5;
            var4 = var11[var4];
            var4 = var10.bind(var1)(var4);
            var4 = var4.DismissibleContent;
            var4 = var4.GUILD_THEME_NUX;
            var10 = var5 === var4;
            _closure2_slot4 = var10;
            var5 = _closure1_slot3;
            var4 = var5.useRef;
            var3 = false;
            var3 = var4.bind(var5)(var3);
            _closure2_slot5 = var3;
            var11 = var5.useEffect;
            var4 = new Array(1);
            var4[0] = var8;
            var3 = function() {
                var2 = _closure2_slot5;
                var1 = false;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var3 = var11.bind(var5)(var3, var4);
            var4 = var5.useEffect;
            var3 = new Array(5);
            var3[0] = var10;
            var3[1] = var9;
            var3[2] = var8;
            var3[3] = var7;
            var3[4] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot4;
                    if(!var3) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var3 = _closure2_slot1;
                    if(var3) { _fun0002_ip = 5; continue _fun0002 }
case 7:
                    var2 = _closure2_slot5;
                    var2 = var2.current;
                    if(var2) { _fun0002_ip = 5; continue _fun0002 }
case 8:
                    var2 = global;
                    var5 = var2.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        var4 = _closure2_slot5;
                        var3 = true;
                        var4['current'] = var3;
                        var3 = false;
                        var _closure4_slot0 = var3;
                        var3 = global;
                        var5 = var3.Promise;
                        var4 = var5.resolve;
                        var6 = _closure2_slot2;
                        var3 = {};
                        var1 = _closure2_slot0;
                        var3['guildId'] = var1;
                        var1 = function markAsDismissed(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                var2 = _closure4_slot0;
                                if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                                var4 = true;
                                _closure4_slot0 = var4;
                                var3 = _closure2_slot3;
                                var2 = undefined;
                                var1 = arg1;
                                var1 = var3.bind(var2)(var1, var4);
case 9:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var3['markAsDismissed'] = var1;
                        var1 = undefined;
                        var3 = var6.bind(var1)(var3);
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.catch;
                        var2 = function() {
                            var2 = _closure2_slot5;
                            var1 = false;
                            var2['current'] = var1;
                            var1 = undefined;
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = 2000;
                    var2 = var5.bind(var4)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
case 5:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['default'] = var2;
    var2 = 2000;
    var3['GUILD_THEME_NUX_DELAY_MS'] = var2;
    return var1;
})();