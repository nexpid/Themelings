// app/modules/application_commands/native/ApplicationCommandBar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var14 = 0;
    var4 = var6[var14];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var15 = 1;
    var7 = var6[var15];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var17 = var4.StyleSheet;
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var7 = var4.Fragment;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var16 = 4;
    var4 = var6[var16];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {};
    var10 = 'column';
    var4['flexDirection'] = var10;
    var11 = 5;
    var10 = var6[var11];
    var10 = var5.bind(var1)(var10);
    var10 = var10.DARK_PRIMARY_700_LIGHT_PRIMARY_230;
    var4['backgroundColor'] = var10;
    var7['applicationCommandBar'] = var4;
    var10 = {'width': 24, 'height': 24, 'borderRadius': null, 'marginRight': 16};
    var12 = 6;
    var4 = var6[var12];
    var4 = var13.bind(var1)(var4);
    var4 = var4.radii;
    var4 = var4.md;
    var10['borderRadius'] = var4;
    var4 = 16;
    var7['applicationIcon'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'paddingHorizontal': 16, 'paddingVertical': 8};
    var7['applicationTopWrapperScrollView'] = var10;
    var10 = {'textAlignVertical': 'center', 'marginRight': 12};
    var7['applicationName'] = var10;
    var10 = {'width': null, 'marginVertical': 8, 'marginHorizontal': 12, 'backgroundColor': null, 'height': '100%'};
    var17 = var17.hairlineWidth;
    var10['width'] = var17;
    var17 = var6[var12];
    var17 = var13.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_SECONDARY_ALT;
    var10['backgroundColor'] = var17;
    var7['applicationOptionalOptionsDivider'] = var10;
    var10 = {};
    var10['marginLeft'] = var16;
    var7['applicationOptionalOptionsDividerWithNoRequired'] = var10;
    var10 = {'marginHorizontal': 4, 'paddingVertical': 8};
    var7['applicationOptionalOptionsIndicator'] = var10;
    var10 = {};
    var10['flexShrink'] = var15;
    var7['applicationDescriptionContainer'] = var10;
    var10 = {};
    var10['marginLeft'] = var14;
    var14 = var6[var11];
    var14 = var5.bind(var1)(var14);
    var14 = var14.DARK_PRIMARY_800_LIGHT_PRIMARY_300;
    var10['backgroundColor'] = var14;
    var7['applicationDescriptionDivider'] = var10;
    var10 = {'marginHorizontal': 4, 'padding': 8, 'fontSize': 12, 'alignItems': 'center'};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var10['borderRadius'] = var14;
    var14 = var6[var11];
    var14 = var5.bind(var1)(var14);
    var14 = var14.DARK_PRIMARY_800_LIGHT_PRIMARY_300;
    var10['backgroundColor'] = var14;
    var7['applicationCommandOption'] = var10;
    var10 = {};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_NORMAL;
    var10['color'] = var14;
    var7['applicationCommandOptionText'] = var10;
    var10 = {};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_BRAND;
    var10['backgroundColor'] = var14;
    var7['activeCommandOption'] = var10;
    var10 = {};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.WHITE;
    var10['color'] = var14;
    var7['activeCommandOptionText'] = var10;
    var10 = {};
    var14 = 0.5;
    var10['opacity'] = var14;
    var7['completeCommandOptionText'] = var10;
    var10 = {};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_DANGER;
    var10['color'] = var14;
    var7['errorCommandOptionText'] = var10;
    var10 = {'overflow': 'hidden', 'paddingHorizontal': 16, 'paddingVertical': 8, 'flexDirection': 'row'};
    var7['optionDescriptionContainer'] = var10;
    var10 = {};
    var14 = 10;
    var10['marginLeft'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_FLOATING;
    var10['backgroundColor'] = var14;
    var7['descriptionEllipsis'] = var10;
    var10 = {};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_NORMAL;
    var10['backgroundColor'] = var12;
    var7['descriptionEllipsisDots'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var11 = var11.DARK_PRIMARY_660_LIGHT_PRIMARY_300;
    var10['backgroundColor'] = var11;
    var7['completeCommandOption'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot10 = var7;
    var7 = function ApplicationCommandOptionItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var8 = var3.option;
            var12 = var3.optionState;
            var14 = null;
            var2 = Object.create(var14);
            var1 = 0;
            var2['option'] = var1;
            var2['optionState'] = var1;
            var20 = {};
            var19 = var3;
            var18 = var2;
            var6 = copyDataProperties(var20, var19, var18);
            var1 = _closure1_slot10;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var2 = var14 == var12;
            var1 = undefined;
            if(var2) { _fun0001_ip = 72; continue _fun0001 }
 66:
            var1 = var12.isActive;
 72:
            var10 = var14 != var1;
            if(!var10) { _fun0001_ip = 82; continue _fun0001 }
 79:
            var10 = var1;
 82:
            var3 = _closure1_slot7;
            var9 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 7;
            var1 = var16[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var7 = 8;
            var13 = var16[var7];
            var13 = var9.bind(var4)(var13);
            var15 = var13.intl;
            var13 = var15.formatToPlainString;
            var7 = var16[var7];
            var7 = var9.bind(var4)(var7);
            var7 = var7.t;
            var9 = var7.evoEHR;
            var7 = {};
            var16 = var8.displayName;
            var7['optionName'] = var16;
            var7 = var13.bind(var15)(var9, var7);
            var1['accessibilityLabel'] = var7;
            var7 = 'button';
            var1['accessibilityRole'] = var7;
            var1['disabled'] = var10;
            var9 = var11.applicationCommandOption;
            var7 = new Array(3);
            var7[0] = var9;
            var9 = var10;
            if(!var10) { _fun0001_ip = 218; continue _fun0001 }
 212:
            var9 = var11.activeCommandOption;
 218:
            var7[1] = var9;
            var9 = !var10;
            if(!var9) { _fun0001_ip = 261; continue _fun0001 }
 228:
            var15 = var14 == var12;
            var13 = undefined;
            if(var15) { _fun0001_ip = 258; continue _fun0001 }
 237:
            var15 = var12.lastValidationResult;
            var16 = var14 == var15;
            var13 = undefined;
            if(var16) { _fun0001_ip = 258; continue _fun0001 }
 252:
            var13 = var15.success;
 258:
            var9 = var13;
 261:
            if(!var9) { _fun0001_ip = 270; continue _fun0001 }
 264:
            var9 = var11.completeCommandOption;
 270:
            var7[2] = var9;
            var1['style'] = var7;
            var20 = var1;
            var19 = var6;
            var6 = copyDataProperties(var20, var19);
            var7 = _closure1_slot7;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 9;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.LegacyText;
            var5 = {};
            var13 = var11.applicationCommandOptionText;
            var9 = new Array(4);
            var9[0] = var13;
            var13 = var10;
            if(!var13) { _fun0001_ip = 346; continue _fun0001 }
 340:
            var13 = var11.activeCommandOptionText;
 346:
            var9[1] = var13;
            var13 = !var10;
            if(!var13) { _fun0001_ip = 389; continue _fun0001 }
 356:
            var16 = var14 == var12;
            var15 = undefined;
            if(var16) { _fun0001_ip = 386; continue _fun0001 }
 365:
            var16 = var12.lastValidationResult;
            var17 = var14 == var16;
            var15 = undefined;
            if(var17) { _fun0001_ip = 386; continue _fun0001 }
 380:
            var15 = var16.success;
 386:
            var13 = var15;
 389:
            if(!var13) { _fun0001_ip = 398; continue _fun0001 }
 392:
            var13 = var11.completeCommandOptionText;
 398:
            var9[2] = var13;
            var10 = !var10;
            if(!var10) { _fun0001_ip = 444; continue _fun0001 }
 408:
            var15 = var14 == var12;
            var13 = undefined;
            if(var15) { _fun0001_ip = 438; continue _fun0001 }
 417:
            var12 = var12.lastValidationResult;
            var14 = var14 == var12;
            var13 = undefined;
            if(var14) { _fun0001_ip = 438; continue _fun0001 }
 432:
            var13 = var12.success;
 438:
            var12 = false;
            var10 = var12 === var13;
 444:
            if(!var10) { _fun0001_ip = 453; continue _fun0001 }
 447:
            var10 = var11.errorCommandOptionText;
 453:
            var9[3] = var10;
            var5['style'] = var9;
            var9 = 1;
            var5['numberOfLines'] = var9;
            var8 = var8.displayName;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var7;
    var7 = function ApplicationCommandOptionDescription(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var17 = var1.command;
            var21 = var1.option;
            var _closure2_slot0 = var21;
            var18 = var1.optionState;
            var1 = _closure1_slot10;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 14;
            var1 = var6[var3];
            var1 = var5.bind(var4)(var1);
            var8 = var1.bind(var4)(var21);
            var _closure2_slot1 = var8;
            var7 = _closure1_slot4;
            var1 = var7.useState;
            var1 = var1.bind(var7)(var4);
            var15 = _closure1_slot3;
            var14 = 2;
            var9 = var15.bind(var4)(var1, var14);
            var11 = 0;
            var20 = var9[var11];
            var _closure2_slot2 = var20;
            var1 = 1;
            var9 = var9[var1];
            var _closure2_slot3 = var9;
            var9 = var7.useState;
            var9 = var9.bind(var7)(var11);
            var9 = var15.bind(var4)(var9, var14);
            var12 = var9[var11];
            var _closure2_slot4 = var12;
            var9 = var9[var1];
            var _closure2_slot5 = var9;
            var9 = var7.useState;
            var9 = var9.bind(var7)(var11);
            var9 = var15.bind(var4)(var9, var14);
            var11 = var9[var11];
            var9 = var9[var1];
            var _closure2_slot6 = var9;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)(var12);
            var _closure2_slot7 = var3;
            var6 = var7.useEffect;
            var5 = new Array(4);
            var5[0] = var8;
            var5[1] = var21;
            var5[2] = var12;
            var5[3] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    if(!(var3 === var2)) { _fun0003_ip = 55; continue _fun0003 }
 15:
                    var2 = _closure2_slot4;
                    var4 = 0;
                    var2 = var2 > var4;
                    if(!var2) { _fun0003_ip = 36; continue _fun0003 }
 28:
                    var3 = _closure2_slot7;
                    var2 = var4 === var3;
 36:
                    if(!var2) { _fun0003_ip = 86; continue _fun0003 }
 39:
                    var4 = _closure2_slot3;
                    var3 = undefined;
                    var2 = 1;
                    var2 = var4.bind(var3)(var2);
                    _fun0003_ip = 86; continue _fun0003;
 55:
                    var3 = _closure2_slot5;
                    var2 = undefined;
                    var4 = 0;
                    var3 = var3.bind(var2)(var4);
                    var3 = _closure2_slot6;
                    var3 = var3.bind(var2)(var4);
                    var1 = _closure2_slot3;
                    var1 = var1.bind(var2)(var2);
 86:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var3, var5);
            var6 = var7.useCallback;
            var5 = new Array(1);
            var5[0] = var20;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = _closure2_slot2;
                    var2 = 1;
                    if(!(var2 === var1)) { _fun0004_ip = 20; continue _fun0004 }
 18:
                    var2 = undefined;
 20:
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var3, var5);
            var19 = function onDescriptionLayout(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = var1.height;
                    var1 = global;
                    var2 = var1.Math;
                    var1 = var2.trunc;
                    var3 = var1.bind(var2)(var3);
                    var4 = _closure2_slot2;
                    var1 = undefined;
                    var4 = var1 === var4;
                    if(var4) { _fun0005_ip = 62; continue _fun0005 }
 54:
                    var5 = _closure2_slot4;
                    var4 = var3 > var5;
 62:
                    if(!var4) { _fun0005_ip = 74; continue _fun0005 }
 65:
                    var4 = _closure2_slot5;
                    var4 = var4.bind(var1)(var3);
 74:
                    var2 = _closure2_slot6;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var6 = var1 === var20;
            if(!var6) { _fun0002_ip = 277; continue _fun0002 }
 273:
            var6 = var11 === var12;
 277:
            var7 = 'button';
            if(!var6) { _fun0002_ip = 288; continue _fun0002 }
 284:
            var7 = 'text';
 288:
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 7;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var1['accessibilityRole'] = var7;
            var1['disabled'] = var6;
            var1['onPress'] = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot5;
            var5 = {};
            var8 = var13.optionDescriptionContainer;
            var5['style'] = var8;
            var8 = {};
            var9 = var13.applicationDescriptionContainer;
            var8['style'] = var9;
            var9 = null;
            var15 = var9 == var18;
            var14 = undefined;
            if(var15) { _fun0002_ip = 395; continue _fun0002 }
 375:
            var15 = var18.lastValidationResult;
            var16 = var9 == var15;
            var14 = undefined;
            if(var16) { _fun0002_ip = 395; continue _fun0002 }
 390:
            var14 = var15.error;
 395:
            if(!(var9 == var14)) { _fun0002_ip = 488; continue _fun0002 }
 399:
            var16 = _closure1_slot7;
            var15 = _closure1_slot0;
            var22 = _closure1_slot2;
            var14 = 12;
            var14 = var22[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {};
            var14['lineClamp'] = var20;
            var14['onLayout'] = var19;
            var22 = 'text-sm/medium';
            var14['variant'] = var22;
            var22 = 'header-primary';
            var14['color'] = var22;
            if(!(var9 == var21)) { _fun0002_ip = 470; continue _fun0002 }
 462:
            var17 = var17.displayDescription;
            _fun0002_ip = 476; continue _fun0002;
 470:
            var17 = var21.displayDescription;
 476:
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            _fun0002_ip = 568; continue _fun0002;
 488:
            var17 = _closure1_slot7;
            var16 = _closure1_slot0;
            var21 = _closure1_slot2;
            var15 = 12;
            var15 = var21[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {};
            var15['lineClamp'] = var20;
            var15['onLayout'] = var19;
            var19 = 'text-sm/medium';
            var15['variant'] = var19;
            var19 = 'text-danger';
            var15['color'] = var19;
            var18 = var18.lastValidationResult;
            var18 = var18.error;
            var15['children'] = var18;
            var14 = var17.bind(var4)(var16, var15);
 568:
            var8['children'] = var14;
            var14 = var3.bind(var4)(var6, var8);
            var8 = new Array(2);
            var8[0] = var14;
            var9 = null;
            if(!(var11 !== var12)) { _fun0002_ip = 645; continue _fun0002 }
 592:
            var12 = _closure1_slot7;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 15;
            var10 = var14[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var14 = var13.descriptionEllipsis;
            var10['style'] = var14;
            var13 = var13.descriptionEllipsisDots;
            var10['dotStyle'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 645:
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/native/ApplicationCommandBar.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var15 = var3.command;
            var _closure2_slot0 = var15;
            var1 = var3.section;
            var _closure2_slot1 = var1;
            var14 = var3.currentOption;
            var _closure2_slot2 = var14;
            var2 = var3.optionStates;
            var _closure2_slot3 = var2;
            var3 = var3.onPressOption;
            var _closure2_slot4 = var3;
            var3 = _closure1_slot10;
            var4 = undefined;
            var9 = var3.bind(var4)();
            var _closure2_slot5 = var9;
            var6 = _closure1_slot4;
            var3 = var6.useRef;
            var18 = null;
            var7 = var3.bind(var6)(var18);
            var _closure2_slot6 = var7;
            var5 = var6.useRef;
            var3 = {};
            var3 = var5.bind(var6)(var3);
            var _closure2_slot7 = var3;
            var3 = var6.useState;
            var16 = false;
            var3 = var3.bind(var6)(var16);
            var13 = _closure1_slot3;
            var12 = 2;
            var5 = var13.bind(var4)(var3, var12);
            var3 = 0;
            var10 = var5[var3];
            var8 = 1;
            var5 = var5[var8];
            var _closure2_slot8 = var5;
            var5 = var6.useState;
            var5 = var5.bind(var6)(var16);
            var5 = var13.bind(var4)(var5, var12);
            var24 = var5[var3];
            var5 = var5[var8];
            var _closure2_slot9 = var5;
            var5 = var6.useState;
            var5 = var5.bind(var6)();
            var5 = var13.bind(var4)(var5, var12);
            var3 = var5[var3];
            var _closure2_slot10 = var3;
            var5 = var5[var8];
            var _closure2_slot11 = var5;
            var12 = var6.useEffect;
            var8 = new Array(1);
            var8[0] = var15;
            var5 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = false;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var1;
                    var1 = _closure2_slot0;
                    var5 = var1.options;
                    var1 = null;
                    if(!(var1 != var5)) { _fun0007_ip = 47; continue _fun0007 }
 30:
                    var4 = var5.forEach;
                    var1 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var1 = arg1;
                            var1 = var1.required;
                            var2 = true;
                            if(!(var2 === var1)) { _fun0008_ip = 24; continue _fun0008 }
 15:
                            _closure3_slot1 = var2;
                            _fun0008_ip = 31; continue _fun0008;
 24:
                            _closure3_slot0 = var2;
 31:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var4.bind(var5)(var1);
 47:
                    var5 = _closure2_slot8;
                    var4 = _closure3_slot0;
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var3 = _closure2_slot9;
                    var2 = _closure3_slot1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var5 = var12.bind(var6)(var5, var8);
            var12 = var6.useEffect;
            var8 = new Array(1);
            var8[0] = var14;
            var5 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure2_slot11;
                    var2 = _closure2_slot2;
                    var1 = null;
                    var5 = var1 == var2;
                    var1 = undefined;
                    var2 = undefined;
                    if(var5) { _fun0009_ip = 33; continue _fun0009 }
 24:
                    var4 = _closure2_slot2;
                    var2 = var4.name;
 33:
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var5 = var12.bind(var6)(var5, var8);
            var8 = var6.useEffect;
            var5 = new Array(2);
            var5[0] = var3;
            var5[1] = var9;
            var3 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var2 = _closure2_slot10;
                    var1 = null;
                    var2 = var1 != var2;
                    var5 = null;
                    if(!var2) { _fun0010_ip = 35; continue _fun0010 }
 18:
                    var2 = _closure2_slot7;
                    var3 = var2.current;
                    var2 = _closure2_slot10;
                    var5 = var3[var2];
 35:
                    if(!(var1 != var5)) { _fun0010_ip = 100; continue _fun0010 }
 39:
                    var2 = _closure2_slot6;
                    var3 = var2.current;
                    if(!(var1 != var3)) { _fun0010_ip = 100; continue _fun0010 }
 52:
                    var2 = var3.scrollTo;
                    var1 = {};
                    var5 = var5.x;
                    var4 = _closure2_slot5;
                    var4 = var4.applicationTopWrapperScrollView;
                    var4 = var4.paddingHorizontal;
                    var4 = var5 - var4;
                    var1['x'] = var4;
                    var4 = true;
                    var1['animated'] = var4;
                    var1 = var2.bind(var3)(var1);
 100:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var6)(var3, var5);
            var5 = var6.useMemo;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getApplicationCommandsIconSource;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var5.bind(var6)(var1, var3);
            var5 = var6.useCallback;
            var3 = function(arg1, arg2) {
                var1 = arg1;
                var5 = var1.nativeEvent;
                var2 = _closure2_slot7;
                var1 = var2.current;
                var3 = arg2;
                var4 = var3.name;
                var3 = {};
                var6 = var5.layout;
                var6 = var6.x;
                var3['x'] = var6;
                var5 = var5.layout;
                var5 = var5.width;
                var3['width'] = var5;
                var1[var4] = var3;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var1 = new Array(0);
            var1 = var5.bind(var6)(var3, var1);
            var _closure2_slot12 = var1;
            var3 = var18 == var14;
            var1 = undefined;
            if(var3) { _fun0006_ip = 356; continue _fun0006 }
 351:
            var1 = var14.name;
 356:
            var1 = var18 != var1;
            var13 = undefined;
            if(!var1) { _fun0006_ip = 383; continue _fun0006 }
 365:
            var3 = var18 == var14;
            var1 = undefined;
            if(var3) { _fun0006_ip = 379; continue _fun0006 }
 374:
            var1 = var14.name;
 379:
            var13 = var2[var1];
 383:
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var9.applicationCommandBar;
            var1['style'] = var5;
            var6 = _closure1_slot6;
            var5 = {'ref': null, 'contentContainerStyle': null, 'keyboardShouldPersistTaps': 'always', 'showsHorizontalScrollIndicator': false, 'horizontal': true};
            var5['ref'] = var7;
            var7 = var9.applicationTopWrapperScrollView;
            var5['contentContainerStyle'] = var7;
            var8 = var18 != var17;
            if(!var8) { _fun0006_ip = 492; continue _fun0006 }
 446:
            var16 = _closure1_slot7;
            var12 = _closure1_slot1;
            var20 = _closure1_slot2;
            var7 = 11;
            var7 = var20[var7];
            var12 = var12.bind(var4)(var7);
            var7 = {};
            var20 = var9.applicationIcon;
            var7['style'] = var20;
            var7['source'] = var17;
            var8 = var16.bind(var4)(var12, var7);
 492:
            var7 = new Array(4);
            var7[0] = var8;
            var16 = _closure1_slot7;
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var20 = 12;
            var8 = var8[var20];
            var8 = var12.bind(var4)(var8);
            var12 = var8.Text;
            var8 = {'style': null, 'lineClamp': 1, 'variant': 'text-sm/semibold', 'color': 'header-primary'};
            var17 = var9.applicationName;
            var8['style'] = var17;
            var21 = var15.displayName;
            var17 = '/ ';
            var17 = var17 + var21;
            var8['children'] = var17;
            var8 = var16.bind(var4)(var12, var8);
            var7[1] = var8;
            var17 = var15.options;
            var12 = var18 == var17;
            var8 = undefined;
            if(var12) { _fun0006_ip = 615; continue _fun0006 }
 598:
            var16 = var17.map;
            var12 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var4 = var2.required;
                    var1 = null;
                    if(!var4) { _fun0011_ip = 96; continue _fun0011 }
 20:
                    var6 = _closure1_slot7;
                    var5 = _closure1_slot11;
                    var4 = {};
                    var4['option'] = var2;
                    var7 = function onPress() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var3 = _closure2_slot4;
                            var1 = null;
                            var3 = var1 == var3;
                            var4 = undefined;
                            var1 = undefined;
                            if(var3) { _fun0012_ip = 36; continue _fun0012 }
 20:
                            var3 = _closure2_slot4;
                            var2 = _closure3_slot0;
                            var1 = var3.bind(var4)(var2);
 36:
                            return var1;
                        }
                    };
                    var4['onPress'] = var7;
                    var8 = _closure2_slot3;
                    var7 = var2.name;
                    var7 = var8[var7];
                    var4['optionState'] = var7;
                    var3 = function onLayout(arg1) {
                        var4 = _closure2_slot12;
                        var3 = _closure3_slot0;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var1, var3);
                        return var1;
                    };
                    var4['onLayout'] = var3;
                    var3 = var2.name;
                    var2 = undefined;
                    var1 = var6.bind(var2)(var5, var4, var3);
 96:
                    return var1;
                }
            };
            var8 = var16.bind(var17)(var12);
 615:
            var7[2] = var8;
            var8 = null;
            if(!var10) { _fun0006_ip = 855; continue _fun0006 }
 627:
            var16 = _closure1_slot9;
            var12 = _closure1_slot8;
            var10 = {};
            var22 = _closure1_slot7;
            var21 = _closure1_slot5;
            var17 = {};
            var25 = var9.applicationOptionalOptionsDivider;
            var23 = new Array(2);
            var23[0] = var25;
            var24 = !var24;
            if(!var24) { _fun0006_ip = 673; continue _fun0006 }
 667:
            var24 = var9.applicationOptionalOptionsDividerWithNoRequired;
 673:
            var23[1] = var24;
            var17['style'] = var23;
            var21 = var22.bind(var4)(var21, var17);
            var17 = new Array(3);
            var17[0] = var21;
            var22 = _closure1_slot7;
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var20 = var27[var20];
            var20 = var26.bind(var4)(var20);
            var21 = var20.Text;
            var20 = {'style': null, 'lineClamp': 1, 'variant': 'eyebrow', 'color': 'text-muted'};
            var23 = var9.applicationOptionalOptionsIndicator;
            var20['style'] = var23;
            var23 = 8;
            var24 = var27[var23];
            var24 = var26.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var27[var23];
            var23 = var26.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.U19GMz;
            var23 = var24.bind(var25)(var23);
            var20['children'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var17[1] = var20;
            var21 = var15.options;
            var20 = var18 == var21;
            var18 = undefined;
            if(var20) { _fun0006_ip = 841; continue _fun0006 }
 824:
            var20 = var21.map;
            var19 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var4 = var2.required;
                    var1 = null;
                    if(var4) { _fun0013_ip = 96; continue _fun0013 }
 20:
                    var6 = _closure1_slot7;
                    var5 = _closure1_slot11;
                    var4 = {};
                    var4['option'] = var2;
                    var7 = function onPress() {
                        var3 = _closure2_slot4;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var4['onPress'] = var7;
                    var8 = _closure2_slot3;
                    var7 = var2.name;
                    var7 = var8[var7];
                    var4['optionState'] = var7;
                    var3 = function onLayout(arg1) {
                        var4 = _closure2_slot12;
                        var3 = _closure3_slot0;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var1, var3);
                        return var1;
                    };
                    var4['onLayout'] = var3;
                    var3 = var2.name;
                    var2 = undefined;
                    var1 = var6.bind(var2)(var5, var4, var3);
 96:
                    return var1;
                }
            };
            var18 = var20.bind(var21)(var19);
 841:
            var17[2] = var18;
            var10['children'] = var17;
            var8 = var16.bind(var4)(var12, var10);
 855:
            var7[3] = var8;
            var5['children'] = var7;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(4);
            var5[0] = var6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 13;
            var12 = var10[var6];
            var12 = var7.bind(var4)(var12);
            var16 = var12.FormDivider;
            var12 = {};
            var17 = var9.applicationDescriptionDivider;
            var12['style'] = var17;
            var12 = var8.bind(var4)(var16, var12);
            var5[1] = var12;
            var12 = _closure1_slot12;
            var11 = {};
            var11['command'] = var15;
            var11['option'] = var14;
            var11['optionState'] = var13;
            var11 = var8.bind(var4)(var12, var11);
            var5[2] = var11;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.FormDivider;
            var6 = {};
            var9 = var9.applicationDescriptionDivider;
            var6['style'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();