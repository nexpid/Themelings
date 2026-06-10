// app/modules/guild_themes/native/GuildThemePreviewArt.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function PreviewOverlay() {
        var1 = _closure1_slot6;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot5;
        var2 = _closure1_slot4;
        var1 = {};
        var7 = 'none';
        var1['pointerEvents'] = var7;
        var6 = var6.previewOverlay;
        var1['style'] = var6;
        var7 = _closure1_slot5;
        var6 = _closure1_slot1;
        var8 = _closure1_slot2;
        var5 = 6;
        var5 = var8[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot7 = var1;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'relative', 'width': 256, 'aspectRatio': 1.5705521472392638, 'overflow': 'hidden'};
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var9['borderRadius'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SURFACE_HIGH;
    var9['backgroundColor'] = var10;
    var4['previewArt'] = var9;
    var9 = {'position': 'absolute', 'top': 7.314, 'left': 7.461, 'width': 259.862, 'height': 154.514};
    var4['previewOverlay'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_themes/native/GuildThemePreviewArt.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildThemePreviewArt(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.themeSettings;
            var _closure2_slot0 = var10;
            var1 = var1.style;
            var2 = _closure1_slot6;
            var5 = undefined;
            var2 = var2.bind(var5)();
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 7;
            var4 = var8[var4];
            var4 = var7.bind(var5)(var4);
            var9 = var4.bind(var5)();
            var _closure2_slot1 = var9;
            var8 = _closure1_slot3;
            var7 = var8.useMemo;
            var4 = new Array(2);
            var4[0] = var10;
            var4[1] = var9;
            var3 = function() {
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var2 = function getGradientConfig(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var5 = arg1;
                        var1 = null;
                        if(!(var1 != var5)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var4 = var5.customUserThemeSettings;
                        if(!(var1 != var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var2 = var4.colors;
                        var3 = 0;
                        var7 = var2[var3];
                        if(!(var1 == var7)) { _fun0002_ip = 6; continue _fun0002 }
case 4:
                        var11 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var10 = 5;
                        var9 = var8[var10];
                        var8 = undefined;
                        var11 = var11.bind(var8)(var9);
                        var9 = var11.getGuildThemePreset;
                        var5 = var5.presetId;
                        var9 = var9.bind(var11)(var5);
                        if(!(var1 == var9)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                        return var1;
case 7:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var10];
                        var8 = var5.bind(var8)(var2);
                        var5 = var8.getGuildThemePresetAppearance;
                        var2 = arg2;
                        var5 = var5.bind(var8)(var9, var2);
                        var2 = {};
                        var10 = var5.colors;
                        var9 = var10.map;
                        var8 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.hex;
                            return var1;
                        };
                        var8 = var9.bind(var10)(var8);
                        var2['colors'] = var8;
                        var9 = var5.colors;
                        var8 = var9.map;
                        var6 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.stop;
                            var1 = 100;
                            var1 = var2 / var1;
                            return var1;
                        };
                        var6 = var8.bind(var9)(var6);
                        var2['locations'] = var6;
                        var5 = var5.angle;
                        var2['angle'] = var5;
                        return var2;
case 6:
                        var2 = {};
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var5 = 5;
                        var6 = var6[var5];
                        var5 = undefined;
                        var6 = var8.bind(var5)(var6);
                        var5 = var6.getSingleColorGuildThemeGradientColors;
                        var13 = var5.bind(var6)(var7);
                        var5 = new Array(0);
                        var14 = var5;
                        var12 = 0;
                        var6 = arraySpread(var14, var13, var12);
                        var2['colors'] = var5;
                        var4 = var4.gradientAngle;
                        var5 = var1 != var4;
                        var3 = 0;
                        if(!var5) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                        var3 = var4;
case 9:
                        var2['angle'] = var3;
                        return var2;
case 2:
                        return var1;
                    }
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var4, var3);
                return var1;
            };
            var4 = var7.bind(var8)(var3, var4);
            var2 = var2.previewArt;
            var7 = new Array(2);
            var7[0] = var2;
            var7[1] = var1;
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 8;
            var1 = var8[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var8 = var4.colors;
            var1['colors'] = var8;
            var8 = var4.locations;
            var1['locations'] = var8;
            var8 = true;
            var1['useAngle'] = var8;
            var4 = var4.angle;
            var1['angle'] = var4;
            var1['style'] = var7;
            var9 = _closure1_slot5;
            var8 = _closure1_slot7;
            var4 = {};
            var4 = var9.bind(var5)(var8, var4);
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var4 = _closure1_slot5;
            var3 = _closure1_slot4;
            var2 = {};
            var2['style'] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot7;
            var6 = {};
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 13:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();