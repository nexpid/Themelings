// app/design/components/ThemeContextProvider/native/RootThemeContextProvider.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/ThemeContextProvider/native/RootThemeContextProvider.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function RootThemeContextProvider(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.children;
            var17 = var1.theme;
            var4 = undefined;
            if(!(var17 === var4)) { _fun0001_ip = 35; continue _fun0001 }
 22:
            var3 = _closure1_slot3;
            var17 = var3.DARK;
 35:
            var _closure2_slot0 = var17;
            var16 = var1.primaryColor;
            if(!(var16 === var4)) { _fun0001_ip = 51; continue _fun0001 }
 49:
            var16 = null;
 51:
            var _closure2_slot1 = var16;
            var15 = var1.secondaryColor;
            if(!(var15 === var4)) { _fun0001_ip = 67; continue _fun0001 }
 65:
            var15 = null;
 67:
            var _closure2_slot2 = var15;
            var14 = var1.gradient;
            if(!(var14 === var4)) { _fun0001_ip = 83; continue _fun0001 }
 81:
            var14 = null;
 83:
            var _closure2_slot3 = var14;
            var13 = var1.flags;
            if(!(var13 === var4)) { _fun0001_ip = 98; continue _fun0001 }
 96:
            var13 = 0;
 98:
            var _closure2_slot4 = var13;
            var12 = var1.contrast;
            if(!(var12 === var4)) { _fun0001_ip = 115; continue _fun0001 }
 112:
            var12 = 1;
 115:
            var _closure2_slot5 = var12;
            var11 = var1.saturation;
            if(!(var11 === var4)) { _fun0001_ip = 132; continue _fun0001 }
 129:
            var11 = 1;
 132:
            var _closure2_slot6 = var11;
            var10 = var1.density;
            if(!(var10 === var4)) { _fun0001_ip = 150; continue _fun0001 }
 146:
            var10 = 'compact';
 150:
            var _closure2_slot7 = var10;
            var9 = var1.disableAdaptiveTheme;
            if(!(var9 === var4)) { _fun0001_ip = 166; continue _fun0001 }
 164:
            var9 = false;
 166:
            var _closure2_slot8 = var9;
            var8 = var1.reduceAdaptiveTheme;
            if(!(var8 === var4)) { _fun0001_ip = 182; continue _fun0001 }
 180:
            var8 = false;
 182:
            var _closure2_slot9 = var8;
            var7 = _closure1_slot2;
            var6 = var7.useMemo;
            var3 = new Array(10);
            var3[0] = var17;
            var3[1] = var16;
            var3[2] = var15;
            var3[3] = var14;
            var3[4] = var13;
            var3[5] = var12;
            var3[6] = var11;
            var3[7] = var10;
            var3[8] = var9;
            var3[9] = var8;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.createThemedContext;
                var1 = {};
                var5 = _closure2_slot0;
                var1['theme'] = var5;
                var5 = _closure2_slot1;
                var1['primaryColor'] = var5;
                var5 = _closure2_slot2;
                var1['secondaryColor'] = var5;
                var5 = _closure2_slot3;
                var1['gradient'] = var5;
                var5 = _closure2_slot4;
                var1['flags'] = var5;
                var5 = _closure2_slot5;
                var1['contrast'] = var5;
                var5 = _closure2_slot6;
                var1['saturation'] = var5;
                var5 = _closure2_slot7;
                var1['density'] = var5;
                var5 = _closure2_slot8;
                var1['disableAdaptiveTheme'] = var5;
                var4 = _closure2_slot9;
                var1['reduceAdaptiveTheme'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var7)(var2, var3);
            var3 = _closure1_slot4;
            var2 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 3;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.ThemeContext;
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['RootThemeContextProvider'] = var4;
    var2 = function DisableCustomTheme(arg1) {
        var2 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 3;
        var7 = var6[var1];
        var4 = undefined;
        var8 = var2.bind(var4)(var7);
        var7 = var8.useThemeContext;
        var10 = var7.bind(var8)();
        var _closure2_slot0 = var10;
        var9 = _closure1_slot2;
        var8 = var9.useMemo;
        var7 = new Array(1);
        var7[0] = var10;
        var5 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.createThemedContext;
            var1 = {};
            var6 = _closure2_slot0;
            var7 = var1;
            var4 = copyDataProperties(var7, var6);
            var5 = null;
            var4 = 'primaryColor';
            var1[var4] = var5;
            var4 = 'secondaryColor';
            var1[var4] = var5;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var8.bind(var9)(var5, var7);
        var3 = _closure1_slot4;
        var1 = var6[var1];
        var1 = var2.bind(var4)(var1);
        var1 = var1.ThemeContext;
        var2 = var1.Provider;
        var1 = {};
        var1['value'] = var5;
        var5 = arg1;
        var5 = var5.children;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['DisableCustomTheme'] = var2;
    return var1;
})();