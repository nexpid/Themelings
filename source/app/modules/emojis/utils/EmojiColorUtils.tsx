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
 0:
            var1 = arg1;
            var5 = var1.colors;
            var2 = var1.saturationFactor;
            var3 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 23; continue _fun0001 }
 20:
            var2 = 1;
 23:
            var4 = var1.shouldProcessMobileColors;
            if(!(var4 === var3)) { _fun0001_ip = 35; continue _fun0001 }
 33:
            var4 = false;
 35:
            var1 = {};
            var1['colors'] = var5;
            var1['saturationFactor'] = var2;
            var10 = var1.colors;
            var13 = var1.saturationFactor;
            if(!(var13 === var3)) { _fun0001_ip = 64; continue _fun0001 }
 61:
            var13 = 1;
 64:
            var6 = null;
            var1 = var6 == var10;
            var5 = null;
            if(var1) { _fun0001_ip = 941; continue _fun0001 }
 78:
            var1 = var10.length;
            var7 = 1;
            var1 = var1 < var7;
            var5 = null;
            if(var1) { _fun0001_ip = 941; continue _fun0001 }
 98:
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
            if(var1) { _fun0001_ip = 941; continue _fun0001 }
 167:
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
            if(!(var6 != var1)) { _fun0001_ip = 355; continue _fun0001 }
 352:
            var17 = var1;
 355:
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
            if(!(var6 != var1)) { _fun0001_ip = 490; continue _fun0001 }
 487:
            var14 = var1;
 490:
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
            if(var10) { _fun0001_ip = 667; continue _fun0001 }
 658:
            var10 = var15.hex;
            var7 = var10.bind(var15)();
 667:
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
            if(var10) { _fun0001_ip = 735; continue _fun0001 }
 725:
            var10 = var11.toHexString;
            var7 = var10.bind(var11)();
 735:
            var2['highlightColor'] = var7;
            var7 = var6 == var8;
            var10 = undefined;
            if(var7) { _fun0001_ip = 755; continue _fun0001 }
 749:
            var10 = var8.saturation;
 755:
            var7 = 0.1;
            var15 = var10 < var7;
            var10 = var7;
            if(!var15) { _fun0001_ip = 785; continue _fun0001 }
 775:
            var10 = 0.35;
 785:
            var2['opacity'] = var10;
            var1['LIGHT'] = var2;
            var2 = {};
            var15 = var6 == var16;
            var10 = undefined;
            if(var15) { _fun0001_ip = 814; continue _fun0001 }
 805:
            var15 = var16.hex;
            var10 = var15.bind(var16)();
 814:
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
            if(var10) { _fun0001_ip = 882; continue _fun0001 }
 872:
            var10 = var11.toHexString;
            var9 = var10.bind(var11)();
 882:
            var2['highlightColor'] = var9;
            var9 = var6 == var8;
            var6 = undefined;
            if(var9) { _fun0001_ip = 902; continue _fun0001 }
 896:
            var6 = var8.saturation;
 902:
            var7 = var6 < var7;
            var6 = 0.2;
            if(!var7) { _fun0001_ip = 929; continue _fun0001 }
 919:
            var6 = 0.5;
 929:
            var2['opacity'] = var6;
            var1['DARK'] = var2;
            var5 = var1;
 941:
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
 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0002_ip = 192; continue _fun0002 }
 12:
            var3 = var4.length;
            var2 = 1;
            if(!(!(var3 < var2))) { _fun0002_ip = 192; continue _fun0002 }
 27:
            var3 = _closure1_slot3;
            var2 = {};
            var2['colors'] = var4;
            var4 = arg2;
            var2['saturationFactor'] = var4;
            var4 = undefined;
            var5 = var3.bind(var4)(var2);
            var6 = var1 == var5;
            var2 = arg3;
            if(var2) { _fun0002_ip = 78; continue _fun0002 }
 65:
            var3 = undefined;
            if(var6) { _fun0002_ip = 76; continue _fun0002 }
 70:
            var3 = var5.LIGHT;
 76:
            _fun0002_ip = 92; continue _fun0002;
 78:
            var2 = undefined;
            if(var6) { _fun0002_ip = 89; continue _fun0002 }
 83:
            var2 = var5.DARK;
 89:
            var3 = var2;
 92:
            var2 = {};
            var6 = var1 == var3;
            var5 = undefined;
            if(var6) { _fun0002_ip = 108; continue _fun0002 }
 103:
            var5 = var3.backgroundColor;
 108:
            var2['backgroundColor'] = var5;
            var6 = var1 == var3;
            var5 = undefined;
            if(var6) { _fun0002_ip = 127; continue _fun0002 }
 121:
            var5 = var3.accentColor;
 127:
            var2['accentColor'] = var5;
            var6 = var1 == var3;
            var5 = undefined;
            if(var6) { _fun0002_ip = 147; continue _fun0002 }
 141:
            var5 = var3.highlightColor;
 147:
            var2['highlightColor'] = var5;
            var5 = var1 == var3;
            var4 = undefined;
            if(var5) { _fun0002_ip = 166; continue _fun0002 }
 161:
            var4 = var3.opacity;
 166:
            var5 = var1 != var4;
            var3 = 0.15;
            if(!var5) { _fun0002_ip = 186; continue _fun0002 }
 183:
            var3 = var4;
 186:
            var2['opacity'] = var3;
            return var2;
 192:
            return var1;
        }
    };
    var3['buildEmojiColorPalette'] = var2;
    return var1;
})();