// app/modules/emojis/utils/EmojiColorUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var4 = function buildPlatformedThemedEmojiColorPalette(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.colors;
            var2 = var1.saturationFactor;
            var3 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 1;
case 2:
            var4 = var1.shouldProcessMobileColors;
            if(!(var4 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = false;
case 4:
            var1 = {};
            var1['colors'] = var5;
            var1['saturationFactor'] = var2;
            var10 = var1.colors;
            var13 = var1.saturationFactor;
            if(!(var13 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var13 = 1;
case 6:
            var6 = null;
            var1 = var6 == var10;
            var5 = null;
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var10.length;
            var7 = 1;
            var1 = var1 < var7;
            var5 = null;
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var12 = 0;
            var2 = var1[var12];
            var8 = var8.bind(var3)(var2);
            var2 = var8.findColorByHsv;
            var22 = var2.bind(var8)(var10);
            var2 = _closure1_slot1;
            var1 = var1[var7];
            var2 = var2.bind(var3)(var1);
            var1 = var2.parseString;
            var11 = var1.bind(var2)(var22);
            var1 = var6 == var11;
            var5 = null;
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 11:
            var17 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = var10[var12];
            var14 = var17.bind(var3)(var1);
            var8 = var14.rawRgbToHsl;
            var7 = var11.red;
            var2 = var11.blue;
            var1 = var11.green;
            var8 = var8.bind(var14)(var7, var2, var1);
            var1 = var10[var12];
            var7 = var17.bind(var3)(var1);
            var2 = var7.getAccessibleForegroundColor;
            var1 = {};
            var14 = _closure1_slot1;
            var20 = 2;
            var15 = var10[var20];
            var16 = var14.bind(var3)(var15);
            var15 = var10[var12];
            var18 = var17.bind(var3)(var15);
            var17 = var18.getColorLightnessAdjusted;
            var23 = 0.6;
            var15 = true;
            var17 = var17.bind(var18)(var11, var23, var15);
            var15 = var17.toHexString;
            var15 = var15.bind(var17)();
            var15 = var16.bind(var3)(var15);
            var1['foreground'] = var15;
            var10 = var10[var20];
            var10 = var14.bind(var3)(var10);
            var21 = '#ffffff';
            var10 = var10.bind(var3)(var21);
            var1['background'] = var10;
            var10 = 3;
            var1['ratio'] = var10;
            var1['saturationFactor'] = var13;
            var1 = var2.bind(var7)(var1);
            var17 = var11;
            if(!(var6 != var1)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var17 = var1;
case 12:
            var18 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = var10[var12];
            var7 = var18.bind(var3)(var1);
            var2 = var7.getAccessibleForegroundColor;
            var1 = {};
            var14 = _closure1_slot1;
            var15 = var10[var20];
            var16 = var14.bind(var3)(var15);
            var15 = var10[var12];
            var19 = var18.bind(var3)(var15);
            var18 = var19.getColorLightnessAdjusted;
            var15 = false;
            var18 = var18.bind(var19)(var11, var23, var15);
            var15 = var18.toHexString;
            var15 = var15.bind(var18)();
            var15 = var16.bind(var3)(var15);
            var1['foreground'] = var15;
            var10 = var10[var20];
            var10 = var14.bind(var3)(var10);
            var18 = '#36393e';
            var10 = var10.bind(var3)(var18);
            var1['background'] = var10;
            var10 = 5;
            var1['ratio'] = var10;
            var1['saturationFactor'] = var13;
            var1 = var2.bind(var7)(var1);
            var14 = var11;
            if(!(var6 != var1)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var14 = var1;
case 14:
            var2 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = var16[var12];
            var15 = var2.bind(var3)(var1);
            var7 = var15.getAccessibleForegroundColor;
            var1 = {};
            var19 = _closure1_slot1;
            var10 = var16[var20];
            var10 = var19.bind(var3)(var10);
            var10 = var10.bind(var3)(var22);
            var1['foreground'] = var10;
            var10 = var16[var20];
            var10 = var19.bind(var3)(var10);
            var10 = var10.bind(var3)(var21);
            var1['background'] = var10;
            var10 = 7;
            var1['ratio'] = var10;
            var1['saturationFactor'] = var13;
            var15 = var7.bind(var15)(var1);
            var1 = var16[var12];
            var7 = var2.bind(var3)(var1);
            var2 = var7.getAccessibleForegroundColor;
            var1 = {};
            var21 = var16[var20];
            var21 = var19.bind(var3)(var21);
            var21 = var21.bind(var3)(var22);
            var1['foreground'] = var21;
            var16 = var16[var20];
            var16 = var19.bind(var3)(var16);
            var16 = var16.bind(var3)(var18);
            var1['background'] = var16;
            var1['ratio'] = var10;
            var1['saturationFactor'] = var13;
            var16 = var2.bind(var7)(var1);
            var1 = {};
            var2 = {};
            var10 = var6 == var15;
            var7 = undefined;
            if(var10) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var10 = var15.hex;
            var7 = var10.bind(var15)();
case 16:
            var2['accentColor'] = var7;
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var12];
            var15 = var10.bind(var3)(var7);
            var10 = var15.getSaturatedColorHex;
            var7 = {};
            var7['colorRGB'] = var17;
            var7['saturationFactor'] = var13;
            var7 = var10.bind(var15)(var7);
            var2['backgroundColor'] = var7;
            var10 = var6 == var11;
            var7 = undefined;
            if(var10) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var10 = var11.toHexString;
            var7 = var10.bind(var11)();
case 18:
            var2['highlightColor'] = var7;
            var7 = var6 == var8;
            var10 = undefined;
            if(var7) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var10 = var8.saturation;
case 20:
            var7 = 0.1;
            var15 = var10 < var7;
            var10 = var7;
            if(!var15) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var10 = 0.35;
case 22:
            var2['opacity'] = var10;
            var1['LIGHT'] = var2;
            var2 = {};
            var15 = var6 == var16;
            var10 = undefined;
            if(var15) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var15 = var16.hex;
            var10 = var15.bind(var16)();
case 24:
            var2['accentColor'] = var10;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var12];
            var12 = var10.bind(var3)(var9);
            var10 = var12.getSaturatedColorHex;
            var9 = {};
            var9['colorRGB'] = var14;
            var9['saturationFactor'] = var13;
            var9 = var10.bind(var12)(var9);
            var2['backgroundColor'] = var9;
            var10 = var6 == var11;
            var9 = undefined;
            if(var10) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var10 = var11.toHexString;
            var9 = var10.bind(var11)();
case 26:
            var2['highlightColor'] = var9;
            var9 = var6 == var8;
            var6 = undefined;
            if(var9) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var6 = var8.saturation;
case 28:
            var7 = var6 < var7;
            var6 = 0.2;
            if(!var7) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var6 = 0.5;
case 30:
            var2['opacity'] = var6;
            var1['DARK'] = var2;
            var5 = var1;
case 8:
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.applyPlatformToThemedEmojiColorPalette;
            var1 = {};
            var1['palette'] = var5;
            var1['shouldProcessMobileColors'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot3 = var4;
    var1 = 4;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/emojis/utils/EmojiColorUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['buildPlatformedThemedEmojiColorPalette'] = var4;
    var2 = function(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var3 = var4.length;
            var2 = 1;
            if(!(!(var3 < var2))) { _fun0002_ip = 32; continue _fun0002 }
case 34:
            var3 = _closure1_slot3;
            var2 = {};
            var2['colors'] = var4;
            var4 = arg2;
            var2['saturationFactor'] = var4;
            var4 = undefined;
            var5 = var3.bind(var4)(var2);
            var6 = var1 == var5;
            var2 = arg3;
            if(var2) { _fun0002_ip = 9; continue _fun0002 }
case 35:
            var3 = undefined;
            if(var6) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var3 = var5.LIGHT;
case 36:
            _fun0002_ip = 38; continue _fun0002;
case 9:
            var2 = undefined;
            if(var6) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var2 = var5.DARK;
case 39:
            var3 = var2;
case 38:
            var2 = {};
            var6 = var1 == var3;
            var5 = undefined;
            if(var6) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var5 = var3.backgroundColor;
case 41:
            var2['backgroundColor'] = var5;
            var6 = var1 == var3;
            var5 = undefined;
            if(var6) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var5 = var3.accentColor;
case 43:
            var2['accentColor'] = var5;
            var6 = var1 == var3;
            var5 = undefined;
            if(var6) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var5 = var3.highlightColor;
case 45:
            var2['highlightColor'] = var5;
            var5 = var1 == var3;
            var4 = undefined;
            if(var5) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var4 = var3.opacity;
case 47:
            var5 = var1 != var4;
            var3 = 0.15;
            if(!var5) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var3 = var4;
case 49:
            var2['opacity'] = var3;
            return var2;
case 32:
            return var1;
        }
    };
    var3['buildEmojiColorPalette'] = var2;
    return var1;
})();