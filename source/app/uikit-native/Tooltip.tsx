// app/uikit-native/Tooltip.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = global;
    var6 = var1.Object;
    var4 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var6)(var3, var1, var2);
    var1 = 0;
    var4 = var8[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var4);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var14 = var2.Fonts;
    var2 = 3;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var4 = var2.jsx;
    var _closure1_slot4 = var4;
    var2 = var2.jsxs;
    var _closure1_slot5 = var2;
    var4 = {};
    var2 = 'UP';
    var4['UP'] = var2;
    var2 = 'DOWN';
    var4['DOWN'] = var2;
    var _closure1_slot6 = var4;
    var2 = {};
    var6 = 'CENTER';
    var2['CENTER'] = var6;
    var6 = 'RIGHT';
    var2['RIGHT'] = var6;
    var6 = 'LEFT';
    var2['LEFT'] = var6;
    var _closure1_slot7 = var2;
    var6 = 4;
    var6 = var8[var6];
    var10 = var7.bind(var1)(var6);
    var9 = var10.createStyles;
    var6 = {};
    var11 = {'padding': 10, 'borderRadius': null, 'alignSelf': 'flex-start', 'minWidth': 60, 'alignItems': 'center'};
    var12 = 5;
    var15 = var8[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.xs;
    var11['borderRadius'] = var15;
    var15 = var8[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_BRAND;
    var11['backgroundColor'] = var15;
    var6['container'] = var11;
    var11 = {};
    var15 = var14.PRIMARY_MEDIUM;
    var11['fontFamily'] = var15;
    var15 = 12;
    var11['fontSize'] = var15;
    var15 = var8[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.WHITE;
    var11['color'] = var15;
    var6['label'] = var11;
    var11 = {'fontFamily': null, 'fontSize': 16, 'lineHeight': 20, 'marginBottom': 4};
    var14 = var14.PRIMARY_SEMIBOLD;
    var11['fontFamily'] = var14;
    var14 = var8[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.WHITE;
    var11['color'] = var14;
    var6['title'] = var11;
    var11 = {'width': 0, 'height': 0, 'borderStyle': 'solid', 'borderLeftColor': 'transparent', 'borderRightColor': 'transparent'};
    var14 = var8[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_BRAND;
    var11['borderTopColor'] = var14;
    var12 = var8[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BRAND;
    var11['borderBottomColor'] = var12;
    var6['arrow'] = var11;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot8 = var6;
    var6 = 8;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'uikit-native/Tooltip.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function Tooltip(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = var2.style;
            var11 = var2.arrowStyle;
            var22 = var2.label;
            var23 = var2.title;
            var18 = var2.containerStyle;
            var24 = var2.labelStyle;
            var17 = var2.children;
            var16 = var2.arrowWidth;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var16 = 16;
case 2:
            var14 = var2.arrowHeight;
            if(!(var14 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = 8;
case 4:
            var9 = var2.arrowOffset;
            if(!(var9 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = 0;
case 6:
            var _closure2_slot0 = var9;
            var12 = var2.arrowPosition;
            if(!(var12 === var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = _closure1_slot7;
            var12 = var3.LEFT;
case 8:
            var _closure2_slot1 = var12;
            var8 = var2.arrowDirection;
            if(!(var8 === var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = _closure1_slot6;
            var8 = var3.UP;
case 10:
            var15 = var2.onLayout;
            var2 = _closure1_slot8;
            var10 = var2.bind(var4)();
            var6 = _closure1_slot2;
            var3 = var6.useMemo;
            var2 = new Array(2);
            var2[0] = var12;
            var2[1] = var9;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = _closure1_slot7;
                    var3 = var3.LEFT;
                    if(!(var3 !== var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var3 = _closure1_slot7;
                    var3 = var3.CENTER;
                    if(!(var3 !== var4)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var3 = _closure1_slot7;
                    var3 = var3.RIGHT;
                    if(!(var3 !== var4)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.assertNever;
                    var3 = _closure2_slot1;
                    var3 = var4.bind(var5)(var3);
                    return var1;
case 16:
                    var1 = {};
                    var3 = 'flex-end';
                    var1['alignSelf'] = var3;
                    var3 = _closure2_slot0;
                    var1['right'] = var3;
                    return var1;
case 14:
                    var1 = {};
                    var3 = 'center';
                    var1['alignSelf'] = var3;
                    return var1;
case 12:
                    var1 = {};
                    var3 = 'flex-start';
                    var1['alignSelf'] = var3;
                    var2 = _closure2_slot0;
                    var1['left'] = var2;
                    return var1;
                }
            };
            var12 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var1['style'] = var5;
            var5 = _closure1_slot6;
            var5 = var5.UP;
            var6 = var8 === var5;
            if(!var6) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var13 = _closure1_slot4;
            var9 = _closure1_slot3;
            var5 = {};
            var20 = var10.arrow;
            var19 = new Array(4);
            var19[0] = var20;
            var20 = {};
            var21 = 2;
            var25 = var16 / var21;
            var20['borderLeftWidth'] = var25;
            var21 = var16 / var21;
            var20['borderRightWidth'] = var21;
            var20['borderBottomWidth'] = var14;
            var19[1] = var20;
            var19[2] = var12;
            var19[3] = var11;
            var5['style'] = var19;
            var6 = var13.bind(var4)(var9, var5);
case 18:
            var5 = new Array(3);
            var5[0] = var6;
            var13 = _closure1_slot5;
            var9 = _closure1_slot3;
            var6 = {};
            var6['onLayout'] = var15;
            var19 = var10.container;
            var15 = new Array(2);
            var15[0] = var19;
            var15[1] = var18;
            var6['style'] = var15;
            var18 = null;
            var15 = var18 != var23;
            var19 = null;
            if(!var15) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var21 = _closure1_slot4;
            var20 = _closure1_slot0;
            var25 = _closure1_slot1;
            var15 = 7;
            var15 = var25[var15];
            var15 = var20.bind(var4)(var15);
            var20 = var15.LegacyText;
            var15 = {};
            var25 = var10.title;
            var15['style'] = var25;
            var25 = 'header';
            var15['accessibilityRole'] = var25;
            var15['children'] = var23;
            var19 = var21.bind(var4)(var20, var15);
case 20:
            var15 = new Array(3);
            var15[0] = var19;
            var19 = var18 != var22;
            var18 = null;
            if(!var19) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var21 = _closure1_slot4;
            var20 = _closure1_slot0;
            var23 = _closure1_slot1;
            var19 = 7;
            var19 = var23[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.LegacyText;
            var19 = {};
            var25 = var10.label;
            var23 = new Array(2);
            var23[0] = var25;
            var23[1] = var24;
            var19['style'] = var23;
            var19['children'] = var22;
            var18 = var21.bind(var4)(var20, var19);
case 22:
            var15[1] = var18;
            var15[2] = var17;
            var6['children'] = var15;
            var6 = var13.bind(var4)(var9, var6);
            var5[1] = var6;
            var6 = _closure1_slot6;
            var6 = var6.DOWN;
            var6 = var8 === var6;
            if(!var6) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var9 = _closure1_slot4;
            var8 = _closure1_slot3;
            var7 = {};
            var13 = var10.arrow;
            var10 = new Array(4);
            var10[0] = var13;
            var13 = {};
            var15 = 2;
            var17 = var16 / var15;
            var13['borderLeftWidth'] = var17;
            var15 = var16 / var15;
            var13['borderRightWidth'] = var15;
            var13['borderTopWidth'] = var14;
            var10[1] = var13;
            var10[2] = var12;
            var10[3] = var11;
            var7['style'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 24:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var5;
    var3['TooltipArrowDirections'] = var4;
    var3['TooltipArrowPositions'] = var2;
    return var1;
})();