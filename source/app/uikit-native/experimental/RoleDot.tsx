// app/uikit-native/experimental/RoleDot.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var10 = 0;
    var7 = var6[var10];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {};
    var4['flexShrink'] = var10;
    var7['container'] = var4;
    var4 = {};
    var10 = 'relative';
    var4['position'] = var10;
    var7['background'] = var4;
    var4 = {};
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SECONDARY_ALT;
    var4['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var4['borderRadius'] = var12;
    var7['backgroundColor'] = var4;
    var4 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_NORMAL;
    var4['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var4['borderRadius'] = var12;
    var7['borderBase'] = var4;
    var4 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.md;
    var4['borderRadius'] = var10;
    var10 = 0.4;
    var4['opacity'] = var10;
    var7['borderColor'] = var4;
    var4 = 10;
    var10 = {'borderRadius': 10, 'position': 'absolute'};
    var7['dot'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot6 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/experimental/RoleDot.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function RoleDot(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var19 = var1.color;
            var16 = var1.colors;
            var4 = var1.size;
            var5 = undefined;
            if(!(var4 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = 'normal';
case 2:
            var11 = var1.background;
            if(!(var11 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = true;
case 4:
            var7 = var1.containerStyles;
            var3 = var1.guildId;
            var1 = _closure1_slot6;
            var13 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 6;
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useFontScale;
            var17 = var1.bind(var2)();
            var2 = _closure1_slot1;
            var1 = 7;
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = null;
            var9 = var2.bind(var5)(var3, var1);
            if(!(var1 == var19)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(!(var1 != var16)) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var2 = 16;
            var3 = 'normal';
            if(!(var3 === var4)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = 20;
case 9:
            var8 = var2 * var17;
            var4 = 2;
            var2 = var8 / var4;
            var6 = var2 + var4;
            var3 = var6 - var4;
            var14 = {};
            var2 = {};
            var10 = var4 * var17;
            var2['paddingRight'] = var10;
            var12 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = 5;
            var10 = var18[var10];
            var12 = var12.bind(var5)(var10);
            var10 = var12.isAndroid;
            var10 = var10.bind(var12)();
            if(var10) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var10 = var4 * var17;
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var12 = 3;
            var10 = var12 * var17;
case 13:
            var2['paddingTop'] = var10;
            var2['height'] = var8;
            var14['container'] = var2;
            var2 = {};
            var2['height'] = var8;
            var2['width'] = var8;
            var8 = var8 - var6;
            var8 = var8 / var4;
            var2['padding'] = var8;
            var14['background'] = var2;
            var2 = {};
            var2['height'] = var6;
            var2['width'] = var6;
            var14['border'] = var2;
            var2 = {};
            var2['height'] = var3;
            var2['width'] = var3;
            var3 = var3 / var4;
            var2['top'] = var3;
            var2['left'] = var3;
            var14['dot'] = var2;
            var4 = _closure1_slot4;
            var3 = _closure1_slot3;
            var2 = {};
            var8 = var13.container;
            var6 = new Array(3);
            var6[0] = var8;
            var8 = var14.container;
            var6[1] = var8;
            var6[2] = var7;
            var2['style'] = var6;
            var7 = _closure1_slot5;
            var6 = {};
            var10 = var13.background;
            var8 = new Array(3);
            var8[0] = var10;
            var10 = null;
            if(!var11) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var10 = var13.backgroundColor;
case 14:
            var8[1] = var10;
            var10 = var14.background;
            var8[2] = var10;
            var6['style'] = var8;
            var11 = _closure1_slot4;
            var10 = _closure1_slot3;
            var8 = {};
            var17 = var13.borderBase;
            var12 = new Array(1);
            var12[0] = var17;
            var8['style'] = var12;
            var12 = {};
            var18 = var13.borderColor;
            var17 = new Array(3);
            var17[0] = var18;
            var18 = var14.border;
            var17[1] = var18;
            var18 = {};
            var21 = var1 != var19;
            var20 = undefined;
            if(!var21) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var20 = var19;
case 16:
            var18['backgroundColor'] = var20;
            var17[2] = var18;
            var12['style'] = var17;
            var12 = var11.bind(var5)(var10, var12);
            var8['children'] = var12;
            var10 = var11.bind(var5)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            if(!var9) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            if(!(var1 != var16)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var9 = var16.secondaryColor;
            if(!(var1 == var9)) { _fun0001_ip = 21; continue _fun0001 }
case 18:
            var11 = _closure1_slot4;
            var10 = _closure1_slot3;
            var9 = {};
            var17 = var13.dot;
            var12 = new Array(3);
            var12[0] = var17;
            var17 = var14.dot;
            var12[1] = var17;
            var17 = {};
            var20 = var1 != var19;
            var18 = undefined;
            if(!var20) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var18 = var19;
case 22:
            var17['backgroundColor'] = var18;
            var12[2] = var17;
            var9['style'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            _fun0001_ip = 24; continue _fun0001;
case 21:
            var12 = _closure1_slot4;
            var11 = _closure1_slot1;
            var19 = _closure1_slot2;
            var10 = 8;
            var10 = var19[var10];
            var11 = var11.bind(var5)(var10);
            var10 = {};
            var18 = var16.primaryColor;
            var17 = new Array(3);
            var17[0] = var18;
            var18 = var16.secondaryColor;
            var17[1] = var18;
            var16 = var16.tertiaryColor;
            var17[2] = var16;
            var16 = var17.filter;
            var18 = _closure1_slot0;
            var15 = 9;
            var15 = var19[var15];
            var15 = var18.bind(var5)(var15);
            var15 = var15.isNotNullish;
            var15 = var16.bind(var17)(var15);
            var10['colors'] = var15;
            var15 = {'x': 0, 'y': 0};
            var10['start'] = var15;
            var15 = {'x': 1, 'y': 0};
            var10['end'] = var15;
            var15 = var13.dot;
            var13 = new Array(2);
            var13[0] = var15;
            var14 = var14.dot;
            var13[1] = var14;
            var10['style'] = var13;
            var9 = var12.bind(var5)(var11, var10);
case 24:
            var8[1] = var9;
            var6['children'] = var8;
            var6 = var7.bind(var5)(var3, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 8:
            return var1;
        }
    };
    var3['RoleDot'] = var2;
    return var1;
})();