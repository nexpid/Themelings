// app/uikit-native/refresh/form/FormDivider.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var5 = 0;
    var8 = var7[var5];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var8);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var8 = var2.View;
    var _closure1_slot3 = var8;
    var13 = var2.StyleSheet;
    var2 = var2.Platform;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var8 = var2.ThemeTypes;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot4 = var2;
    var2 = 4;
    var2 = var7[var2];
    var11 = var6.bind(var1)(var2);
    var10 = var11.createStyles;
    var2 = {};
    var12 = {};
    var2['divider'] = var12;
    var12 = {};
    var12['marginLeft'] = var5;
    var5 = var13.hairlineWidth;
    var12['height'] = var5;
    var5 = 5;
    var14 = var7[var5];
    var14 = var9.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MODIFIER_ACCENT;
    var12['backgroundColor'] = var14;
    var14 = var13.hairlineWidth;
    var13 = -1;
    var13 = var13 * var14;
    var12['marginTop'] = var13;
    var2['dividerOuter'] = var12;
    var12 = {};
    var13 = 56;
    var12['marginLeft'] = var13;
    var2['dividerHasIcon'] = var12;
    var2 = var10.bind(var11)(var2);
    var _closure1_slot5 = var2;
    var2 = {};
    var11 = var8.LIGHT;
    var10 = var7[var5];
    var10 = var9.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.BLACK_500;
    var2[var11] = var10;
    var11 = var8.DARK;
    var10 = var7[var5];
    var10 = var9.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.WHITE_500;
    var2[var11] = var10;
    var11 = var8.DARKER;
    var10 = var7[var5];
    var10 = var9.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.WHITE_500;
    var2[var11] = var10;
    var8 = var8.MIDNIGHT;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var5 = var5.unsafe_rawColors;
    var5 = var5.WHITE_500;
    var2[var8] = var5;
    var _closure1_slot6 = var2;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'uikit-native/refresh/form/FormDivider.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function Divider(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.outer;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var9 = var1.iconPush;
            if(!(var9 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = false;
case 4:
            var8 = var1.style;
            var1 = _closure1_slot5;
            var10 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 6;
            var1 = var4[var1];
            var7 = var3.bind(var5)(var1);
            var1 = var7.useThemeContext;
            var1 = var1.bind(var7)();
            var14 = var1.theme;
            var7 = var1.primaryColor;
            var1 = 7;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useProfileThemeValues;
            var4 = var1.bind(var3)(var14);
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var10.divider;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var1 = var10.dividerOuter;
case 8:
            var3 = var1.backgroundColor;
            var1 = null;
            var3 = var1 != var3;
            if(!var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = var1 != var7;
case 9:
            if(!var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = var1 != var4;
case 11:
            var7 = null;
            if(!var3) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = {};
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var11 = 8;
            var11 = var13[var11];
            var13 = var12.bind(var5)(var11);
            var12 = var13.hexOpacityToRgba;
            var11 = _closure1_slot6;
            var11 = var11[var14];
            var4 = var4.dividerOpacity;
            var4 = var12.bind(var13)(var11, var4);
            var3['backgroundColor'] = var4;
            var7 = var3;
case 13:
            var11 = _closure1_slot2;
            var4 = var11.useContext;
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var3 = 9;
            var3 = var13[var3];
            var3 = var12.bind(var5)(var3);
            var3 = var3.RedesignCompatContext;
            var3 = var4.bind(var11)(var3);
            var1 = null;
            if(var3) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var4 = _closure1_slot4;
            var3 = _closure1_slot3;
            var2 = {};
            if(var6) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var11 = var10.divider;
            _fun0001_ip = 19; continue _fun0001;
case 17:
            var11 = var10.dividerOuter;
case 19:
            var6 = new Array(4);
            var6[0] = var11;
            if(!var9) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var9 = var10.dividerHasIcon;
case 20:
            var6[1] = var9;
            var6[2] = var8;
            var6[3] = var7;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 15:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['DIVIDER_COLORS'] = var2;
    return var1;
})();