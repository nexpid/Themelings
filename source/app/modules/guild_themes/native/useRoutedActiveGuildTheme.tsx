// app/modules/guild_themes/native/useRoutedActiveGuildTheme.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function getGuildIdFromNavigationState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1.routes;
            if(!(var2 == var3)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var4 = undefined;
            return var4;
case 4:
            var1 = var1.index;
            var5 = var3[var1];
            var3 = var2 == var5;
            var4 = undefined;
            var1 = undefined;
            if(var3) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = var5.params;
            var6 = var2 == var3;
            var1 = undefined;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var1 = var3.guildId;
case 5:
            if(!(var2 == var1)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = _closure1_slot5;
            var6 = var2 == var5;
            var2 = undefined;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var5.state;
case 10:
            var1 = var3.bind(var4)(var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = function getActiveGuildThemeGuildIdSnapshot() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var1 = var3[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.getRootNavigationRef;
            var6 = var1.bind(var2)();
            var1 = null;
            if(!(var1 != var6)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = var6.isReady;
            var2 = var2.bind(var6)();
            if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 14:
            var3 = _closure1_slot5;
            var2 = var6.getRootState;
            var2 = var2.bind(var6)();
            var3 = var3.bind(var5)(var2);
            var5 = var1 == var3;
            var2 = null;
            if(var5) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var4 = _closure1_slot4;
            var2 = null;
            if(!(var3 !== var4)) { _fun0002_ip = 15; continue _fun0002 }
case 17:
            var2 = var3;
case 15:
            return var2;
case 12:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
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
    var4 = var4.ME;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_themes/native/useRoutedActiveGuildTheme.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useRoutedActiveGuildTheme() {
        var1 = function useRoutedActiveGuildThemeGuildId() {
            var5 = _closure1_slot3;
            var4 = var5.useState;
            var3 = _closure1_slot6;
            var6 = var4.bind(var5)(var3);
            var4 = _closure1_slot2;
            var3 = undefined;
            var1 = 2;
            var4 = var4.bind(var3)(var6, var1);
            var1 = 0;
            var1 = var4[var1];
            var3 = 1;
            var3 = var4[var3];
            var _closure3_slot0 = var3;
            var4 = var5.useEffect;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 == var4)) { _fun0003_ip = 6; continue _fun0003 }
case 13:
                    return var1;
case 6:
                    var3 = function handleStateChange() {
                        var3 = _closure3_slot0;
                        var2 = _closure1_slot6;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var3.bind(var1)();
                    var2 = var4.addListener;
                    var1 = 'state';
                    var1 = var2.bind(var4)(var1, var3);
                    return var1;
                }
            };
            var2 = new Array(0);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var4 = undefined;
        var3 = var1.bind(var4)();
        var2 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 4;
        var1 = var5[var1];
        var2 = var2.bind(var4)(var1);
        var1 = var2.useActiveGuildThemeForGuildId;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();