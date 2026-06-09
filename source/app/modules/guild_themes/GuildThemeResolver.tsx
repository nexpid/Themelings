// app/modules/guild_themes/GuildThemeResolver.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var7 = function resolveRenderableGuildThemeSettings(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var3.customUserThemeSettings;
            var4 = var1 == var5;
            var6 = undefined;
            var2 = undefined;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var5.colors;
case 4:
            var4 = var1 == var2;
            var2 = null;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var5.colors;
            var7 = var4.length;
            var4 = 1;
            var2 = null;
            if(!(var4 === var7)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var4 = var5.gradientColorStops;
            if(!(var1 != var4)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = var5.gradientColorStops;
            var7 = var4.length;
            var4 = 0;
            var4 = var7 > var4;
            var2 = null;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 9:
            var4 = {};
            var7 = 'custom';
            var4['type'] = var7;
            var4['customUserThemeSettings'] = var5;
            var2 = var4;
case 6:
            if(!(var1 == var2)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 7;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.getGuildThemePreset;
            var3 = var3.presetId;
            var5 = var4.bind(var5)(var3);
            var4 = var1 != var5;
            var3 = null;
            if(!var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var4 = {};
            var6 = 'preset';
            var4['type'] = var6;
            var4['preset'] = var5;
            var3 = var4;
case 13:
            return var3;
case 11:
            return var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot9 = var7;
    var6 = function resolveSavedActiveGuildTheme(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var3 = var1 == var2;
            var4 = undefined;
            var5 = undefined;
            if(var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var5 = var2.enabled;
case 15:
            var3 = true;
            var1 = null;
            if(!(var3 === var5)) { _fun0002_ip = 17; continue _fun0002 }
case 5:
            var3 = _closure1_slot9;
            var2 = var2.themeSettings;
            var1 = var3.bind(var4)(var2);
case 17:
            return var1;
        }
    };
    var _closure1_slot10 = var6;
    var1 = function useSavedActiveGuildThemeForGuildId(arg1, arg2) {
        var8 = arg1;
        var3 = arg2;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var3;
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var4 = 8;
        var5 = var5[var4];
        var4 = undefined;
        var7 = var6.bind(var4)(var5);
        var6 = var7.useStateFromStores;
        var4 = _closure1_slot4;
        var5 = new Array(2);
        var5[0] = var4;
        var4 = _closure1_slot7;
        var5[1] = var4;
        var4 = new Array(2);
        var4[0] = var8;
        var4[1] = var3;
        var3 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var3)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var3 = _closure2_slot1;
                if(!var3) { _fun0003_ip = 18; continue _fun0003 }
case 20:
                var6 = _closure1_slot4;
                var5 = var6.getGuild;
                var3 = _closure2_slot0;
                var3 = var5.bind(var6)(var3);
                if(!(var1 != var3)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                var7 = var3.features;
                var6 = var7.has;
                var5 = _closure1_slot8;
                var5 = var5.GUILD_THEME;
                var5 = var6.bind(var7)(var5);
                if(!var5) { _fun0003_ip = 21; continue _fun0003 }
case 23:
                var5 = _closure1_slot7;
                var4 = var5.getGuildThemeSnapshot;
                var2 = _closure2_slot0;
                var2 = var4.bind(var5)(var2);
                var4 = undefined;
                if(!(var4 === var2)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                var2 = var3.guildTheme;
case 24:
                return var2;
case 21:
                return var1;
case 18:
                return var1;
            }
        };
        var5 = var6.bind(var7)(var5, var3, var4);
        var _closure2_slot2 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot10;
            var2 = _closure2_slot2;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var5 = function getActiveGuildThemeForGuildId(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var7 = arg1;
            var6 = arguments[1];
            var4 = undefined;
            if(!(var6 === var4)) { _fun0004_ip = 26; continue _fun0004 }
case 3:
            var6 = 'getActiveGuildThemeForGuildId';
case 26:
            var1 = null;
            if(!(var1 != var7)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 9;
            var2 = var8[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.getServerThemeUserEnabled;
            var2 = var2.bind(var5)(var6);
            if(!var2) { _fun0004_ip = 27; continue _fun0004 }
case 29:
            var5 = _closure1_slot4;
            var2 = var5.getGuild;
            var5 = var2.bind(var5)(var7);
            if(!(var1 != var5)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var8 = var5.features;
            var6 = var8.has;
            var2 = _closure1_slot8;
            var2 = var2.GUILD_THEME;
            var2 = var6.bind(var8)(var2);
            if(!var2) { _fun0004_ip = 30; continue _fun0004 }
case 32:
            var6 = _closure1_slot3;
            var2 = var6.resolveGuildThemeSourcePreference;
            var6 = var2.bind(var6)(var7);
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 10;
            var2 = var9[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.GuildThemeSourcePreference;
            var2 = var2.PERSONAL;
            if(!(var6 !== var2)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var6 = _closure1_slot7;
            var2 = var6.getGuildThemeSnapshot;
            var2 = var2.bind(var6)(var7);
            var3 = _closure1_slot10;
            if(!(var4 === var2)) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var5.guildTheme;
case 35:
            var2 = var3.bind(var4)(var2);
            return var2;
case 33:
            return var1;
case 30:
            return var1;
case 27:
            return var1;
        }
    };
    var _closure1_slot12 = var5;
    var4 = function useActiveGuildThemeForGuildId(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var10 = arg1;
            var5 = arguments[1];
            var _closure2_slot0 = var10;
            var8 = undefined;
            if(!(var5 === var8)) { _fun0005_ip = 37; continue _fun0005 }
case 26:
            var5 = 'useActiveGuildThemeForGuildId';
case 37:
            var _closure2_slot1 = var8;
            var _closure2_slot2 = var8;
            var _closure2_slot3 = var8;
            var _closure2_slot4 = var8;
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 9;
            var3 = var9[var3];
            var4 = var6.bind(var8)(var3);
            var3 = var4.useServerThemeUserEnabled;
            var3 = var3.bind(var4)(var5);
            _closure2_slot1 = var3;
            var4 = 8;
            var5 = var9[var4];
            var13 = var6.bind(var8)(var5);
            var12 = var13.useStateFromStores;
            var5 = _closure1_slot6;
            var11 = new Array(1);
            var11[0] = var5;
            var7 = new Array(2);
            var7[0] = var10;
            var7[1] = var3;
            var5 = function() {
                var1 = undefined;
                return var1;
            };
            var5 = var12.bind(var13)(var11, var5, var7);
            _closure2_slot2 = var5;
            var7 = _closure1_slot11;
            var7 = var7.bind(var8)(var10, var3);
            _closure2_slot3 = var7;
            var4 = var9[var4];
            var9 = var6.bind(var8)(var4);
            var8 = var9.useStateFromStores;
            var4 = _closure1_slot3;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = new Array(2);
            var4[0] = var10;
            var4[1] = var3;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0006_ip = 20; continue _fun0006 }
case 19:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0006_ip = 38; continue _fun0006 }
case 20:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 10;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.GuildThemeSourcePreference;
                    var1 = var1.PERSONAL;
                    _fun0006_ip = 39; continue _fun0006;
case 38:
                    var4 = _closure1_slot3;
                    var3 = var4.resolveGuildThemeSourcePreference;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 39:
                    return var1;
                }
            };
            var6 = var8.bind(var9)(var6, var3, var4);
            _closure2_slot4 = var6;
            var4 = _closure1_slot2;
            var3 = var4.useMemo;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var5;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var4 = undefined;
                    if(!(var4 === var1)) { _fun0007_ip = 40; continue _fun0007 }
case 19:
                    var5 = _closure2_slot4;
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 10;
                    var1 = var6[var1];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.GuildThemeSourcePreference;
                    var3 = var1.PERSONAL;
                    var1 = null;
                    if(!(var5 !== var3)) { _fun0007_ip = 8; continue _fun0007 }
case 41:
                    var1 = _closure2_slot3;
case 8:
                    _fun0007_ip = 42; continue _fun0007;
case 40:
                    var3 = _closure1_slot9;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
case 42:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var8);
    var1 = 0;
    var12 = var10[var1];
    var8 = metroImportAll;
    var1 = undefined;
    var8 = var8.bind(var1)(var12);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.GuildFeatures;
    var _closure1_slot8 = var8;
    var8 = 11;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/guild_themes/GuildThemeResolver.tsx';
    var8 = var9.bind(var10)(var8);
    var3['resolveRenderableGuildThemeSettings'] = var7;
    var7 = function isRenderableGuildThemeSettings(arg1) {
        var3 = _closure1_slot9;
        var2 = undefined;
        var1 = arg1;
        var2 = var3.bind(var2)(var1);
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var3['isRenderableGuildThemeSettings'] = var7;
    var3['resolveSavedActiveGuildTheme'] = var6;
    var6 = function useEnabledGuildThemeForGuildId(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arguments[1];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0008_ip = 43; continue _fun0008 }
case 44:
            var5 = 'useEnabledGuildThemeForGuildId';
case 43:
            var3 = _closure1_slot11;
            var2 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 9;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useServerThemeUserEnabled;
            var2 = var1.bind(var2)(var5);
            var1 = arg1;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useEnabledGuildThemeForGuildId'] = var6;
    var3['getActiveGuildThemeForGuildId'] = var5;
    var5 = function getActiveGuildTheme() {
        var4 = _closure1_slot12;
        var2 = _closure1_slot5;
        var1 = var2.getGuildId;
        var3 = var1.bind(var2)();
        var2 = undefined;
        var1 = 'getActiveGuildTheme';
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var3['getActiveGuildTheme'] = var5;
    var3['useActiveGuildThemeForGuildId'] = var4;
    var4 = function useActiveGuildTheme() {
        var4 = _closure1_slot13;
        var5 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 8;
        var2 = var3[var2];
        var3 = undefined;
        var6 = var5.bind(var3)(var2);
        var5 = var6.useStateFromStores;
        var1 = _closure1_slot5;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getGuildId;
            var1 = var1.bind(var2)();
            return var1;
        };
        var2 = var5.bind(var6)(var2, var1);
        var1 = 'useActiveGuildTheme';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['useActiveGuildTheme'] = var4;
    var2 = function useIsGuildThemePreviewActive() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 8;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot6;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var1 = false;
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsGuildThemePreviewActive'] = var2;
    return var1;
})();