// app/design/components/ThemeContextProvider/ThemeContextProvider.tsx
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/ThemeContextProvider/ThemeContextProvider.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ThemeContextProvider(arg1) {
        var1 = arg1;
        var5 = var1.children;
        var21 = var1.theme;
        var _closure2_slot0 = var21;
        var19 = var1.primaryColor;
        var _closure2_slot1 = var19;
        var18 = var1.secondaryColor;
        var _closure2_slot2 = var18;
        var17 = var1.gradient;
        var _closure2_slot3 = var17;
        var16 = var1.flags;
        var _closure2_slot4 = var16;
        var15 = var1.contrast;
        var _closure2_slot5 = var15;
        var14 = var1.saturation;
        var _closure2_slot6 = var14;
        var13 = var1.density;
        var _closure2_slot7 = var13;
        var12 = var1.disableAdaptiveTheme;
        var _closure2_slot8 = var12;
        var11 = var1.reduceAdaptiveTheme;
        var _closure2_slot9 = var11;
        var10 = _closure1_slot2;
        var9 = var10.useContext;
        var2 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 2;
        var8 = var7[var1];
        var4 = undefined;
        var8 = var2.bind(var4)(var8);
        var8 = var8.ThemeContext;
        var20 = var9.bind(var10)(var8);
        var _closure2_slot10 = var20;
        var8 = var7[var1];
        var8 = var2.bind(var4)(var8);
        var8 = var8.FALLBACK_THEME_CONTEXT_VALUE;
        var9 = var10.useMemo;
        var8 = new Array(20);
        var8[0] = var21;
        var21 = var20.theme;
        var8[1] = var21;
        var21 = var20.primaryColor;
        var8[2] = var21;
        var21 = var20.secondaryColor;
        var8[3] = var21;
        var21 = var20.gradient;
        var8[4] = var21;
        var21 = var20.flags;
        var8[5] = var21;
        var21 = var20.contrast;
        var8[6] = var21;
        var21 = var20.saturation;
        var8[7] = var21;
        var21 = var20.density;
        var8[8] = var21;
        var21 = var20.disableAdaptiveTheme;
        var8[9] = var21;
        var20 = var20.reduceAdaptiveTheme;
        var8[10] = var20;
        var8[11] = var19;
        var8[12] = var18;
        var8[13] = var17;
        var8[14] = var16;
        var8[15] = var15;
        var8[16] = var14;
        var8[17] = var13;
        var8[18] = var12;
        var8[19] = var11;
        var6 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.createThemedContext;
                var1 = {};
                var4 = _closure2_slot0;
                var6 = null;
                if(!(var6 == var4)) { _fun0001_ip = 57; continue _fun0001 }
 46:
                var4 = _closure2_slot10;
                var4 = var4.theme;
                _fun0001_ip = 61; continue _fun0001;
 57:
                var4 = _closure2_slot0;
 61:
                var1['theme'] = var4;
                var4 = _closure2_slot1;
                if(!(var6 == var4)) { _fun0001_ip = 85; continue _fun0001 }
 73:
                var4 = _closure2_slot10;
                var4 = var4.primaryColor;
                _fun0001_ip = 89; continue _fun0001;
 85:
                var4 = _closure2_slot1;
 89:
                var1['primaryColor'] = var4;
                var4 = _closure2_slot2;
                if(!(var6 == var4)) { _fun0001_ip = 114; continue _fun0001 }
 102:
                var4 = _closure2_slot10;
                var4 = var4.secondaryColor;
                _fun0001_ip = 118; continue _fun0001;
 114:
                var4 = _closure2_slot2;
 118:
                var1['secondaryColor'] = var4;
                var4 = _closure2_slot3;
                if(!(var6 == var4)) { _fun0001_ip = 143; continue _fun0001 }
 131:
                var4 = _closure2_slot10;
                var4 = var4.gradient;
                _fun0001_ip = 147; continue _fun0001;
 143:
                var4 = _closure2_slot3;
 147:
                var1['gradient'] = var4;
                var4 = _closure2_slot4;
                if(!(var6 == var4)) { _fun0001_ip = 171; continue _fun0001 }
 160:
                var4 = _closure2_slot10;
                var4 = var4.flags;
                _fun0001_ip = 175; continue _fun0001;
 171:
                var4 = _closure2_slot4;
 175:
                var1['flags'] = var4;
                var4 = _closure2_slot5;
                if(!(var6 == var4)) { _fun0001_ip = 199; continue _fun0001 }
 187:
                var4 = _closure2_slot10;
                var4 = var4.contrast;
                _fun0001_ip = 203; continue _fun0001;
 199:
                var4 = _closure2_slot5;
 203:
                var1['contrast'] = var4;
                var4 = _closure2_slot6;
                if(!(var6 == var4)) { _fun0001_ip = 228; continue _fun0001 }
 216:
                var4 = _closure2_slot10;
                var4 = var4.saturation;
                _fun0001_ip = 232; continue _fun0001;
 228:
                var4 = _closure2_slot6;
 232:
                var1['saturation'] = var4;
                var4 = _closure2_slot7;
                if(!(var6 == var4)) { _fun0001_ip = 257; continue _fun0001 }
 245:
                var4 = _closure2_slot10;
                var4 = var4.density;
                _fun0001_ip = 261; continue _fun0001;
 257:
                var4 = _closure2_slot7;
 261:
                var1['density'] = var4;
                var4 = _closure2_slot8;
                if(!(var6 == var4)) { _fun0001_ip = 286; continue _fun0001 }
 274:
                var4 = _closure2_slot10;
                var4 = var4.disableAdaptiveTheme;
                _fun0001_ip = 290; continue _fun0001;
 286:
                var4 = _closure2_slot8;
 290:
                var1['disableAdaptiveTheme'] = var4;
                var4 = _closure2_slot9;
                if(!(var6 == var4)) { _fun0001_ip = 315; continue _fun0001 }
 303:
                var4 = _closure2_slot10;
                var4 = var4.reduceAdaptiveTheme;
                _fun0001_ip = 319; continue _fun0001;
 315:
                var4 = _closure2_slot9;
 319:
                var1['reduceAdaptiveTheme'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var6 = var9.bind(var10)(var6, var8);
        var3 = _closure1_slot3;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var1 = var1.ThemeContext;
        var2 = var1.Provider;
        var1 = {};
        var1['value'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['ThemeContextProvider'] = var2;
    return var1;
})();