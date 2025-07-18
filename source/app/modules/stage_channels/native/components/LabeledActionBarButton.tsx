// app/modules/stage_channels/native/components/LabeledActionBarButton.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var13 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var9 = 0;
    var5 = var7[var9];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var8 = 1;
    var4 = var7[var8];
    var4 = var6.bind(var1)(var4);
    var5 = var4.Image;
    var _closure1_slot2 = var5;
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var14 = var4.Fonts;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot4 = var5;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var7[var4];
    var10 = var6.bind(var1)(var4);
    var5 = var10.createStyles;
    var4 = {};
    var11 = {'minHeight': 56, 'minWidth': 56, 'alignItems': 'center', 'justifyContent': 'center', 'borderRadius': 28};
    var12 = 5;
    var12 = var7[var12];
    var12 = var6.bind(var1)(var12);
    var12 = var12.ACTION_BAR_BUTTON_BACKGROUND;
    var11['backgroundColor'] = var12;
    var4['buttonContainer'] = var11;
    var11 = {};
    var12 = 12;
    var11['marginHorizontal'] = var12;
    var4['container'] = var11;
    var11 = {'minWidth': '50%', 'maxWidth': '70%', 'flexShrink': 1};
    var4['containerWithLabel'] = var11;
    var11 = {'marginHorizontal': 12, 'borderRadius': 28};
    var4['pressable'] = var11;
    var11 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var4['buttonContent'] = var11;
    var11 = {'marginStart': 8, 'fontSize': 14, 'color': null, 'fontFamily': null, 'paddingStart': 3};
    var12 = 6;
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.WHITE;
    var11['color'] = var15;
    var14 = var14.PRIMARY_SEMIBOLD;
    var11['fontFamily'] = var14;
    var4['buttonText'] = var11;
    var11 = {'marginStart': 0, 'marginEnd': 8};
    var4['rightTextMargin'] = var11;
    var11 = {};
    var4['notifiedButtonContainer'] = var11;
    var11 = {'position': 'absolute', 'top': 4294967292, 'right': 4294967292, 'height': 24, 'width': 24, 'borderRadius': 12, 'borderWidth': 4, 'borderColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.PRIMARY_760;
    var11['borderColor'] = var14;
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BUTTON_DANGER_BACKGROUND;
    var11['backgroundColor'] = var12;
    var4['notificationArea'] = var11;
    var11 = {};
    var12 = 16;
    var11['lineHeight'] = var12;
    var4['notificationText'] = var11;
    var4 = var5.bind(var10)(var4);
    var _closure1_slot6 = var4;
    var4 = {};
    var4['LEFT'] = var9;
    var5 = 'LEFT';
    var4[var9] = var5;
    var4['RIGHT'] = var8;
    var5 = 'RIGHT';
    var4[var8] = var5;
    var _closure1_slot7 = var4;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stage_channels/native/components/LabeledActionBarButton.tsx';
    var5 = var6.bind(var7)(var5);
    var3['IconPosition'] = var4;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var15 = var3.backgroundColor;
            var20 = var3.imageStyle;
            var12 = var3.children;
            var21 = var3.source;
            var19 = var3.disabled;
            var24 = var3.label;
            var18 = var3.iconPosition;
            var4 = undefined;
            if(!(var18 === var4)) { _fun0001_ip = 59; continue _fun0001 }
 46:
            var1 = _closure1_slot7;
            var18 = var1.LEFT;
 59:
            var2 = {'backgroundColor': 0, 'imageStyle': 0, 'children': 0, 'source': 0, 'disabled': 0, 'label': 0, 'iconPosition': 0};
            var16 = null;
            var31 = var2;
            var30 = null;
            var1 = silentSetPrototypeOf(var31, var30);
            var31 = {};
            var30 = var3;
            var29 = var2;
            var8 = copyDataProperties(var31, var30, var29);
            var1 = _closure1_slot6;
            var27 = var1.bind(var4)();
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = {};
            var6 = var27.container;
            var5 = new Array(2);
            var5[0] = var6;
            var7 = var16 != var24;
            var6 = null;
            if(!var7) { _fun0001_ip = 145; continue _fun0001 }
 139:
            var6 = var27.containerWithLabel;
 145:
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot4;
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 7;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.PressableOpacity;
            var5 = {};
            var9 = 'button';
            var5['accessibilityRole'] = var9;
            var5['disabled'] = var19;
            var9 = var27.pressable;
            var5['style'] = var9;
            var31 = var5;
            var30 = var8;
            var8 = copyDataProperties(var31, var30);
            var10 = _closure1_slot5;
            var9 = _closure1_slot3;
            var8 = {};
            var13 = var27.buttonContainer;
            var11 = new Array(3);
            var11[0] = var13;
            var13 = {};
            var14 = 1;
            if(!var19) { _fun0001_ip = 259; continue _fun0001 }
 249:
            var14 = 0.25;
 259:
            var13['opacity'] = var14;
            var11[1] = var13;
            var14 = var16 != var15;
            var13 = null;
            if(!var14) { _fun0001_ip = 285; continue _fun0001 }
 276:
            var14 = {};
            var14['backgroundColor'] = var15;
            var13 = var14;
 285:
            var11[2] = var13;
            var8['style'] = var11;
            var14 = _closure1_slot5;
            var13 = _closure1_slot3;
            var11 = {};
            var19 = var27.buttonContent;
            var15 = new Array(2);
            var15[0] = var19;
            var22 = var16 != var24;
            var19 = null;
            if(!var22) { _fun0001_ip = 338; continue _fun0001 }
 326:
            var22 = {};
            var23 = 16;
            var22['paddingHorizontal'] = var23;
            var19 = var22;
 338:
            var15[1] = var19;
            var11['style'] = var15;
            var15 = _closure1_slot7;
            var15 = var15.LEFT;
            var19 = var18 === var15;
            if(!var19) { _fun0001_ip = 387; continue _fun0001 }
 363:
            var23 = _closure1_slot4;
            var22 = _closure1_slot2;
            var15 = {};
            var15['source'] = var21;
            var15['style'] = var20;
            var19 = var23.bind(var4)(var22, var15);
 387:
            var15 = new Array(3);
            var15[0] = var19;
            var19 = var16 != var24;
            var16 = null;
            if(!var19) { _fun0001_ip = 499; continue _fun0001 }
 404:
            var23 = _closure1_slot4;
            var22 = _closure1_slot0;
            var25 = _closure1_slot1;
            var19 = 8;
            var19 = var25[var19];
            var19 = var22.bind(var4)(var19);
            var22 = var19.LegacyText;
            var19 = {};
            var25 = 2;
            var19['numberOfLines'] = var25;
            var26 = var27.buttonText;
            var25 = new Array(2);
            var25[0] = var26;
            var26 = _closure1_slot7;
            var26 = var26.RIGHT;
            var26 = var18 === var26;
            if(!var26) { _fun0001_ip = 481; continue _fun0001 }
 475:
            var26 = var27.rightTextMargin;
 481:
            var25[1] = var26;
            var19['style'] = var25;
            var19['children'] = var24;
            var16 = var23.bind(var4)(var22, var19);
 499:
            var15[1] = var16;
            var16 = _closure1_slot7;
            var16 = var16.RIGHT;
            var16 = var18 === var16;
            if(!var16) { _fun0001_ip = 544; continue _fun0001 }
 520:
            var19 = _closure1_slot4;
            var18 = _closure1_slot2;
            var17 = {};
            var17['source'] = var21;
            var17['style'] = var20;
            var16 = var19.bind(var4)(var18, var17);
 544:
            var15[2] = var16;
            var11['children'] = var15;
            var13 = var14.bind(var4)(var13, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var11[1] = var12;
            var8['children'] = var11;
            var9 = var10.bind(var4)(var9, var8);
            var8 = 'children';
            var5[var8] = var9;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['LabeledActionButton'] = var2;
    return var1;
})();