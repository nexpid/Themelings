// app/modules/user_settings/native/premium_marketing/PremiumFeaturesTable.tsx
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
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HorizontalGradient;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    var _closure1_slot8 = var7;
    var4 = var4.PremiumTypes;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 7;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {'display': 'flex', 'flex': 1, 'width': '100%'};
    var7['container'] = var10;
    var10 = {};
    var12 = 'center';
    var10['textAlign'] = var12;
    var7['headerText'] = var10;
    var10 = 8;
    var12 = {'marginTop': 8, 'marginBottom': 4294967290};
    var7['logo'] = var12;
    var12 = {};
    var13 = 16;
    var12['marginTop'] = var13;
    var7['table'] = var12;
    var12 = {'display': 'flex', 'flexDirection': 'row'};
    var7['row'] = var12;
    var12 = {'borderBottomColor': 'rgba(106, 116, 128, 0.24)', 'borderBottomWidth': 1};
    var7['bottomBorder'] = var12;
    var12 = {};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var12['borderTopLeftRadius'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var12['borderTopRightRadius'] = var14;
    var7['topBorderRadius'] = var12;
    var12 = {};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var12['borderBottomLeftRadius'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var12['borderBottomRightRadius'] = var14;
    var7['bottomBorderRadius'] = var12;
    var12 = {};
    var14 = 12;
    var12['paddingVertical'] = var14;
    var7['cell'] = var12;
    var12 = {'flex': 1, 'justifyContent': 'flex-start'};
    var7['labelCell'] = var12;
    var12 = {'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'center', 'width': 82};
    var7['dataCell'] = var12;
    var12 = {};
    var14 = 9;
    var14 = var6[var14];
    var14 = var5.bind(var1)(var14);
    var14 = var14.PREMIUM_FEATURES_TABLE_HIGHLIGHTED_CELL_BG;
    var12['backgroundColor'] = var14;
    var7['themedHighlightedCell'] = var12;
    var12 = {'borderLeftColor': 'rgba(184, 69, 193, 0.5)', 'borderLeftWidth': 2, 'borderRightColor': 'rgba(184, 69, 193, 0.5)', 'borderRightWidth': 2};
    var7['nitroHomeHightlightedBorderLeftRight'] = var12;
    var12 = {};
    var12['marginTop'] = var13;
    var7['premiumGroupCard'] = var12;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot12 = var7;
    var7 = function CheckIcon() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var3 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var1 = 11;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isThemeDark;
            var2 = var1.bind(var2)(var3);
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 8;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.unsafe_rawColors;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var1.PRIMARY_860;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var8 = var1.WHITE_500;
case 4:
            var3 = _closure1_slot10;
            var10 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 12;
            var1 = var7[var5];
            var2 = var10.bind(var4)(var1);
            var1 = {};
            var9 = 13;
            var9 = var7[var9];
            var9 = var10.bind(var4)(var9);
            var1['source'] = var9;
            var1['color'] = var8;
            var6 = _closure1_slot0;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.IconSizes;
            var5 = var5.SMALL;
            var1['size'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_MUTED;
    var9['tintColor'] = var10;
    var4['icon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = function CloseIcon() {
        var1 = _closure1_slot14;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot10;
        var10 = _closure1_slot1;
        var7 = _closure1_slot2;
        var5 = 12;
        var1 = var7[var5];
        var2 = var10.bind(var4)(var1);
        var1 = {};
        var9 = 14;
        var9 = var7[var9];
        var9 = var10.bind(var4)(var9);
        var1['source'] = var9;
        var8 = var8.icon;
        var1['style'] = var8;
        var6 = _closure1_slot0;
        var5 = var7[var5];
        var5 = var6.bind(var4)(var5);
        var5 = var5.IconSizes;
        var5 = var5.SMALL;
        var1['size'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var4;
    var4 = function CellText(arg1) {
        var1 = arg1;
        var5 = var1.text;
        var4 = _closure1_slot10;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 15;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.Text;
        var1 = {'variant': 'text-md/medium', 'color': 'header-primary'};
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot16 = var4;
    var4 = function getAccesibilityLabel(arg1, arg2, arg3, arg4, arg5) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 16;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.EZjXN3;
        var1 = {};
        var5 = arg1;
        var1['accessibilityLabel'] = var5;
        var5 = arg2;
        var1['rowNumber'] = var5;
        var5 = arg4;
        var1['rowName'] = var5;
        var5 = arg3;
        var1['columnNumber'] = var5;
        var5 = arg5;
        var1['columnName'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot17 = var4;
    var4 = function Row(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var6 = var1.label;
            var14 = var1.column1;
            var10 = var1.column2;
            var8 = var1.withBottomBorder;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var8 = true;
case 5:
            var21 = var1.withTopBorderRadius;
            if(!(var21 === var4)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var21 = false;
case 7:
            var19 = var1.withBottomBorderRadius;
            if(!(var19 === var4)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var19 = false;
case 9:
            var22 = var1.highlightColumn1;
            var23 = var1.disableHighlightColumn2;
            if(!(var23 === var4)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var23 = false;
case 11:
            var9 = var1.variant;
            if(!(var9 === var4)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var9 = 'default';
case 13:
            var11 = var1.disableAccessibility;
            if(!(var11 === var4)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var11 = false;
case 15:
            var18 = var1.rowName;
            var32 = var1.column1AccessibilityLabel;
            var17 = var1.column2AccessibilityLabel;
            var16 = var1.rowNumber;
            var _closure2_slot0 = var4;
            var1 = _closure1_slot12;
            var20 = var1.bind(var4)();
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var1 = 0;
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot3;
            var15 = 2;
            var2 = var2.bind(var4)(var3, var15);
            var27 = var2[var1];
            var31 = 1;
            var2 = var2[var31];
            _closure2_slot0 = var2;
            var29 = 0;
            if(!var8) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var29 = var31;
case 17:
            var25 = 0;
            if(!var21) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var25 = var15;
case 19:
            var28 = 0;
            if(!var19) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var28 = var15;
case 21:
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var12 = var20.row;
            var7 = new Array(2);
            var7[0] = var12;
            if(!var8) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var8 = var20.bottomBorder;
case 23:
            var7[1] = var8;
            var1['style'] = var7;
            var5 = function onLayout(arg1) {
                var3 = _closure2_slot0;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.height;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onLayout'] = var5;
            var8 = _closure1_slot10;
            var7 = _closure1_slot5;
            var5 = {};
            var24 = var20.labelCell;
            var12 = new Array(2);
            var12[0] = var24;
            var24 = var20.cell;
            var12[1] = var24;
            var5['style'] = var12;
            var5['children'] = var6;
            var6 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var6 = {};
            var24 = var20.cell;
            var12 = new Array(5);
            var12[0] = var24;
            var24 = var20.dataCell;
            var12[1] = var24;
            var24 = var22;
            if(!var24) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var24 = var20.themedHighlightedCell;
case 25:
            var12[2] = var24;
            var24 = var21;
            if(!var21) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var24 = var20.topBorderRadius;
case 27:
            var12[3] = var24;
            var24 = var19;
            if(!var19) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var24 = var20.bottomBorderRadius;
case 29:
            var12[4] = var24;
            var6['style'] = var12;
            var12 = null;
            var26 = var12 != var32;
            var24 = undefined;
            if(!var26) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var30 = _closure1_slot17;
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var26 = 16;
            var33 = var36[var26];
            var33 = var35.bind(var4)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var26 = var36[var26];
            var26 = var35.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.t9uG/o;
            var37 = var33.bind(var34)(var26);
            var42 = undefined;
            var41 = var32;
            var40 = var16;
            var39 = var31;
            var38 = var18;
            var24 = var42[var30](var41, var40, var39, var38, var37, var36);
case 31:
            var6['accessibilityLabel'] = var24;
            var24 = !var11;
            var6['accessible'] = var24;
            var6['children'] = var14;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot5;
            var6 = 'nitro_home';
            if(!(var6 === var9)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            if(var22) { _fun0002_ip = 33; continue _fun0002 }
case 35:
            if(var23) { _fun0002_ip = 33; continue _fun0002 }
case 36:
            var6 = {};
            var14 = var21;
            if(!var21) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var14 = var20.topBorderRadius;
case 37:
            var9 = new Array(6);
            var9[0] = var14;
            var14 = var21;
            if(!var21) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var14 = {'borderTopColor': 'rgba(184, 69, 193, 0.5)', 'borderTopWidth': 2};
case 39:
            var9[1] = var14;
            var14 = var19;
            if(!var19) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var14 = var20.bottomBorderRadius;
case 41:
            var9[2] = var14;
            var14 = var19;
            if(!var19) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var14 = {'borderBottomColor': 'rgba(184, 69, 193, 0.5)', 'borderBottomWidth': 2};
case 43:
            var9[3] = var14;
            var14 = var20.nitroHomeHightlightedBorderLeftRight;
            var9[4] = var14;
            var14 = {};
            var24 = 'hidden';
            var14['overflow'] = var24;
            var9[5] = var14;
            var6['style'] = var9;
            var14 = var12 != var17;
            var9 = undefined;
            if(!var14) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var24 = _closure1_slot17;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var14 = 16;
            var26 = var32[var14];
            var26 = var31.bind(var4)(var26);
            var30 = var26.intl;
            var26 = var30.string;
            var14 = var32[var14];
            var14 = var31.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.lG6a5x;
            var37 = var26.bind(var30)(var14);
            var42 = undefined;
            var41 = var17;
            var40 = var16;
            var39 = var15;
            var38 = var18;
            var9 = var42[var24](var41, var40, var39, var38, var37, var36);
case 45:
            var6['accessibilityLabel'] = var9;
            var9 = !var11;
            var6['accessible'] = var9;
            var24 = _closure1_slot10;
            var14 = _closure1_slot1;
            var26 = _closure1_slot2;
            var9 = 17;
            var9 = var26[var9];
            var14 = var14.bind(var4)(var9);
            var9 = {};
            var26 = {};
            var25 = var29 + var25;
            var25 = var25 + var28;
            var25 = var27 - var25;
            var26['height'] = var25;
            var25 = new Array(2);
            var25[0] = var26;
            var26 = var20.dataCell;
            var25[1] = var26;
            var9['style'] = var25;
            var25 = _closure1_slot7;
            var26 = var25.START;
            var9['start'] = var26;
            var25 = var25.END;
            var9['end'] = var25;
            var25 = ['rgba(133, 71, 198, 0.10)', 'rgba(184, 69, 193, 0.10)', 'rgba(171, 93, 138, 0.10)'];
            var9['colors'] = var25;
            var9['children'] = var10;
            var9 = var24.bind(var4)(var14, var9);
            var6['children'] = var9;
            _fun0002_ip = 47; continue _fun0002;
case 33:
            var9 = {};
            var24 = var20.cell;
            var14 = new Array(5);
            var14[0] = var24;
            var24 = var20.dataCell;
            var14[1] = var24;
            var22 = !var22;
            if(!var22) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var22 = !var23;
case 48:
            if(!var22) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var22 = var20.themedHighlightedCell;
case 50:
            var14[2] = var22;
            if(!var21) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var21 = var20.topBorderRadius;
case 52:
            var14[3] = var21;
            if(!var19) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var19 = var20.bottomBorderRadius;
case 54:
            var14[4] = var19;
            var9['style'] = var14;
            var14 = var12 != var17;
            var12 = undefined;
            if(!var14) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var14 = _closure1_slot17;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var13 = 16;
            var19 = var22[var13];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var13 = var22[var13];
            var13 = var21.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.lG6a5x;
            var37 = var19.bind(var20)(var13);
            var42 = undefined;
            var41 = var17;
            var40 = var16;
            var39 = var15;
            var38 = var18;
            var12 = var42[var14](var41, var40, var39, var38, var37, var36);
case 56:
            var9['accessibilityLabel'] = var12;
            var11 = !var11;
            var9['accessible'] = var11;
            var9['children'] = var10;
            var6 = var9;
case 47:
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/premium_marketing/PremiumFeaturesTable.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var18 = var1.style;
            var2 = var1.highlightNitroBasic;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0003_ip = 58; continue _fun0003 }
case 59:
            var2 = false;
case 58:
            var _closure2_slot0 = var2;
            var2 = var1.variant;
            if(!(var2 === var4)) { _fun0003_ip = 60; continue _fun0003 }
case 61:
            var2 = 'default';
case 60:
            var _closure2_slot1 = var2;
            var13 = var1.titleOverride;
            var2 = var1.isFractionalOnly;
            var5 = var1.hidePrice;
            var7 = var1.isPremiumGroup;
            if(!(var7 === var4)) { _fun0003_ip = 62; continue _fun0003 }
case 63:
            var7 = false;
case 62:
            var _closure2_slot2 = var7;
            var14 = var1.premiumGroupRole;
            var1 = _closure1_slot12;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 10;
            var1 = var8[var1];
            var1 = var3.bind(var4)(var1);
            var24 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var1 = 18;
            var1 = var8[var1];
            var11 = var3.bind(var4)(var1);
            var8 = var11.useStateFromStoresArray;
            var1 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var4 = _closure1_slot6;
                var3 = var4.getProduct;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 19;
                var1 = var7[var2];
                var5 = undefined;
                var1 = var6.bind(var5)(var1);
                var1 = var1.ProductIds;
                var1 = var1.PREMIUM_TIER_0_MONTHLY;
                var3 = var3.bind(var4)(var1);
                var1 = new Array(2);
                var1[0] = var3;
                var3 = var4.getProduct;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.ProductIds;
                var2 = var2.PREMIUM_TIER_2_MONTHLY;
                var2 = var3.bind(var4)(var2);
                var1[1] = var2;
                return var1;
            };
            var8 = var8.bind(var11)(var3, var1);
            var3 = _closure1_slot3;
            var1 = 2;
            var3 = var3.bind(var4)(var8, var1);
            var1 = 0;
            var8 = var3[var1];
            var1 = 1;
            var3 = var3[var1];
            var15 = null;
            var11 = var15 == var8;
            var1 = undefined;
            if(var11) { _fun0003_ip = 64; continue _fun0003 }
case 65:
            var1 = var8.priceString;
case 64:
            var8 = var15 != var1;
            var11 = '$...';
            var22 = var11;
            if(!var8) { _fun0003_ip = 66; continue _fun0003 }
case 67:
            var22 = var1;
case 66:
            var8 = var15 == var3;
            var1 = undefined;
            if(var8) { _fun0003_ip = 68; continue _fun0003 }
case 69:
            var1 = var3.priceString;
case 68:
            var3 = var15 != var1;
            if(!var3) { _fun0003_ip = 70; continue _fun0003 }
case 71:
            var11 = var1;
case 70:
            var27 = _closure1_slot0;
            var26 = _closure1_slot2;
            var3 = 20;
            var1 = var26[var3];
            var16 = var27.bind(var4)(var1);
            var12 = var16.getMaxFileSizeForPremiumType;
            var1 = _closure1_slot9;
            var8 = var1.TIER_0;
            var21 = var12.bind(var16)(var8);
            var3 = var26[var3];
            var8 = var27.bind(var4)(var3);
            var3 = var8.getMaxFileSizeForPremiumType;
            var1 = var1.TIER_2;
            var17 = var3.bind(var8)(var1);
            var1 = {};
            var20 = _closure1_slot10;
            var16 = _closure1_slot1;
            var3 = 21;
            var3 = var26[var3];
            var8 = var16.bind(var4)(var3);
            var3 = {'style': null, 'width': 48, 'height': 9};
            var12 = var10.logo;
            var3['style'] = var12;
            var3 = var20.bind(var4)(var8, var3);
            var1['column1'] = var3;
            var3 = 22;
            var3 = var26[var3];
            var8 = var16.bind(var4)(var3);
            var3 = {'style': null, 'width': 50, 'height': 9};
            var12 = var10.logo;
            var3['style'] = var12;
            var3 = var20.bind(var4)(var8, var3);
            var1['column2'] = var3;
            var3 = false;
            var1['withBottomBorder'] = var3;
            var23 = true;
            var1['disableAccessibility'] = var23;
            var3 = !var7;
            var1['hidden'] = var3;
            var3 = new Array(11);
            var3[0] = var1;
            var1 = {'column1': null, 'column2': null, 'withBottomBorder': false, 'withTopBorderRadius': true, 'disableAccessibility': true};
            var8 = 23;
            var12 = var26[var8];
            var16 = var16.bind(var4)(var12);
            var12 = {};
            var12['accessible'] = var23;
            var19 = 16;
            var25 = var26[var19];
            var25 = var27.bind(var4)(var25);
            var29 = var25.intl;
            var28 = var29.string;
            var25 = var26[var19];
            var25 = var27.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.t9uG/o;
            var25 = var28.bind(var29)(var25);
            var12['accessibilityLabel'] = var25;
            var25 = var10.logo;
            var12['style'] = var25;
            var25 = 11;
            var26 = var26[var25];
            var27 = var27.bind(var4)(var26);
            var26 = var27.isThemeDark;
            var26 = var26.bind(var27)(var24);
            var28 = _closure1_slot1;
            var29 = _closure1_slot2;
            if(var26) { _fun0003_ip = 72; continue _fun0003 }
case 73:
            var26 = 25;
            var26 = var29[var26];
            var26 = var28.bind(var4)(var26);
            _fun0003_ip = 74; continue _fun0003;
case 72:
            var27 = 24;
            var27 = var29[var27];
            var26 = var28.bind(var4)(var27);
case 74:
            var12['source'] = var26;
            var12 = var20.bind(var4)(var16, var12);
            var1['column1'] = var12;
            var16 = _closure1_slot10;
            var12 = _closure1_slot1;
            var20 = _closure1_slot2;
            var8 = var20[var8];
            var12 = var12.bind(var4)(var8);
            var8 = {};
            var8['accessible'] = var23;
            var23 = _closure1_slot0;
            var26 = var20[var19];
            var26 = var23.bind(var4)(var26);
            var28 = var26.intl;
            var27 = var28.string;
            var26 = var20[var19];
            var26 = var23.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.lG6a5x;
            var26 = var27.bind(var28)(var26);
            var8['accessibilityLabel'] = var26;
            var26 = var10.logo;
            var8['style'] = var26;
            var20 = var20[var25];
            var23 = var23.bind(var4)(var20);
            var20 = var23.isThemeDark;
            var20 = var20.bind(var23)(var24);
            var24 = _closure1_slot1;
            var25 = _closure1_slot2;
            if(var20) { _fun0003_ip = 75; continue _fun0003 }
case 76:
            var20 = 27;
            var20 = var25[var20];
            var20 = var24.bind(var4)(var20);
            _fun0003_ip = 77; continue _fun0003;
case 75:
            var23 = 26;
            var23 = var25[var23];
            var20 = var24.bind(var4)(var23);
case 77:
            var8['source'] = var20;
            var8 = var16.bind(var4)(var12, var8);
            var1['column2'] = var8;
            var1['hidden'] = var7;
            var3[1] = var1;
            var1 = {};
            var12 = _closure1_slot10;
            var20 = _closure1_slot16;
            var23 = {};
            var8 = _closure1_slot0;
            var16 = _closure1_slot2;
            var24 = var16[var19];
            var24 = var8.bind(var4)(var24);
            var26 = var24.intl;
            var25 = var26.string;
            var24 = var16[var19];
            var24 = var8.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.LkKGZ2;
            var24 = var25.bind(var26)(var24);
            var23['text'] = var24;
            var23 = var12.bind(var4)(var20, var23);
            var1['label'] = var23;
            var23 = var16[var19];
            var23 = var8.bind(var4)(var23);
            var25 = var23.intl;
            var24 = var25.string;
            var23 = var16[var19];
            var23 = var8.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.LkKGZ2;
            var23 = var24.bind(var25)(var23);
            var1['rowName'] = var23;
            var23 = {};
            var23['text'] = var22;
            var23 = var12.bind(var4)(var20, var23);
            var1['column1'] = var23;
            var1['column1AccessibilityLabel'] = var22;
            var22 = {};
            var22['text'] = var11;
            var22 = var12.bind(var4)(var20, var22);
            var1['column2'] = var22;
            var1['column2AccessibilityLabel'] = var11;
            var1['hidden'] = var5;
            var3[2] = var1;
            var1 = {};
            var5 = {};
            var11 = var16[var19];
            var11 = var8.bind(var4)(var11);
            var23 = var11.intl;
            var22 = var23.string;
            var11 = var16[var19];
            var11 = var8.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.ORlUdL;
            var11 = var22.bind(var23)(var11);
            var5['text'] = var11;
            var5 = var12.bind(var4)(var20, var5);
            var1['label'] = var5;
            var5 = var16[var19];
            var5 = var8.bind(var4)(var5);
            var22 = var5.intl;
            var11 = var22.string;
            var5 = var16[var19];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.ORlUdL;
            var5 = var11.bind(var22)(var5);
            var1['rowName'] = var5;
            var11 = _closure1_slot13;
            var5 = {};
            var5 = var12.bind(var4)(var11, var5);
            var1['column1'] = var5;
            var5 = var16[var19];
            var5 = var8.bind(var4)(var5);
            var23 = var5.intl;
            var22 = var23.string;
            var5 = var16[var19];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.tq+6t/;
            var5 = var22.bind(var23)(var5);
            var1['column1AccessibilityLabel'] = var5;
            var5 = {};
            var5 = var12.bind(var4)(var11, var5);
            var1['column2'] = var5;
            var5 = var16[var19];
            var5 = var8.bind(var4)(var5);
            var23 = var5.intl;
            var22 = var23.string;
            var5 = var16[var19];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.tq+6t/;
            var5 = var22.bind(var23)(var5);
            var1['column2AccessibilityLabel'] = var5;
            var3[3] = var1;
            var1 = {};
            var5 = {};
            var22 = var16[var19];
            var22 = var8.bind(var4)(var22);
            var24 = var22.intl;
            var23 = var24.string;
            var22 = var16[var19];
            var22 = var8.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.ufhQC+;
            var22 = var23.bind(var24)(var22);
            var5['text'] = var22;
            var5 = var12.bind(var4)(var20, var5);
            var1['label'] = var5;
            var5 = var16[var19];
            var5 = var8.bind(var4)(var5);
            var23 = var5.intl;
            var22 = var23.string;
            var5 = var16[var19];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.ufhQC+;
            var5 = var22.bind(var23)(var5);
            var1['rowName'] = var5;
            var5 = 15;
            var22 = var16[var5];
            var22 = var8.bind(var4)(var22);
            var23 = var22.Text;
            var22 = {'variant': 'text-md/medium', 'color': 'header-primary'};
            var22['children'] = var21;
            var22 = var12.bind(var4)(var23, var22);
            var1['column1'] = var22;
            var1['column1AccessibilityLabel'] = var21;
            var21 = var16[var5];
            var21 = var8.bind(var4)(var21);
            var22 = var21.Text;
            var21 = {'variant': 'text-md/medium', 'color': 'header-primary'};
            var21['children'] = var17;
            var21 = var12.bind(var4)(var22, var21);
            var1['column2'] = var21;
            var1['column2AccessibilityLabel'] = var17;
            var3[4] = var1;
            var1 = {};
            var17 = {};
            var21 = var16[var19];
            var21 = var8.bind(var4)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var16[var19];
            var21 = var8.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.svn/YX;
            var21 = var22.bind(var23)(var21);
            var17['text'] = var21;
            var17 = var12.bind(var4)(var20, var17);
            var1['label'] = var17;
            var17 = var16[var19];
            var17 = var8.bind(var4)(var17);
            var22 = var17.intl;
            var21 = var22.string;
            var17 = var16[var19];
            var17 = var8.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.svn/YX;
            var17 = var21.bind(var22)(var17);
            var1['rowName'] = var17;
            var17 = {};
            var17 = var12.bind(var4)(var11, var17);
            var1['column1'] = var17;
            var17 = var16[var19];
            var17 = var8.bind(var4)(var17);
            var22 = var17.intl;
            var21 = var22.string;
            var17 = var16[var19];
            var17 = var8.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.tq+6t/;
            var17 = var21.bind(var22)(var17);
            var1['column1AccessibilityLabel'] = var17;
            var17 = {};
            var17 = var12.bind(var4)(var11, var17);
            var1['column2'] = var17;
            var17 = var16[var19];
            var17 = var8.bind(var4)(var17);
            var22 = var17.intl;
            var21 = var22.string;
            var17 = var16[var19];
            var17 = var8.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.tq+6t/;
            var17 = var21.bind(var22)(var17);
            var1['column2AccessibilityLabel'] = var17;
            var1['hidden'] = var2;
            var3[5] = var1;
            var1 = {};
            var17 = {};
            var21 = var16[var19];
            var21 = var8.bind(var4)(var21);
            var25 = var21.intl;
            var23 = var25.formatToPlainString;
            var21 = var16[var19];
            var21 = var8.bind(var4)(var21);
            var21 = var21.t;
            var22 = var21.DbkNFj;
            var21 = {};
            var24 = _closure1_slot8;
            var21['numBoosts'] = var24;
            var21 = var23.bind(var25)(var22, var21);
            var17['text'] = var21;
            var17 = var12.bind(var4)(var20, var17);
            var1['label'] = var17;
            var17 = var16[var19];
            var17 = var8.bind(var4)(var17);
            var23 = var17.intl;
            var22 = var23.formatToPlainString;
            var17 = var16[var19];
            var17 = var8.bind(var4)(var17);
            var17 = var17.t;
            var21 = var17.DbkNFj;
            var17 = {};
            var17['numBoosts'] = var24;
            var17 = var22.bind(var23)(var21, var17);
            var1['rowName'] = var17;
            var17 = _closure1_slot15;
            var21 = {};
            var21 = var12.bind(var4)(var17, var21);
            var1['column1'] = var21;
            var21 = var16[var19];
            var21 = var8.bind(var4)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var16[var19];
            var21 = var8.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.l4qZrp;
            var21 = var22.bind(var23)(var21);
            var1['column1AccessibilityLabel'] = var21;
            var21 = {};
            var21 = var12.bind(var4)(var11, var21);
            var1['column2'] = var21;
            var21 = var16[var19];
            var21 = var8.bind(var4)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var16[var19];
            var21 = var8.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.tq+6t/;
            var21 = var22.bind(var23)(var21);
            var1['column2AccessibilityLabel'] = var21;
            var1['hidden'] = var2;
            var3[6] = var1;
            var1 = {};
            var2 = {};
            var21 = var16[var19];
            var21 = var8.bind(var4)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var16[var19];
            var21 = var8.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.Gv/rQ6;
            var21 = var22.bind(var23)(var21);
            var2['text'] = var21;
            var2 = var12.bind(var4)(var20, var2);
            var1['label'] = var2;
            var2 = var16[var19];
            var2 = var8.bind(var4)(var2);
            var22 = var2.intl;
            var21 = var22.string;
            var2 = var16[var19];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.Gv/rQ6;
            var2 = var21.bind(var22)(var2);
            var1['rowName'] = var2;
            var2 = {};
            var2 = var12.bind(var4)(var17, var2);
            var1['column1'] = var2;
            var2 = var16[var19];
            var2 = var8.bind(var4)(var2);
            var22 = var2.intl;
            var21 = var22.string;
            var2 = var16[var19];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.l4qZrp;
            var2 = var21.bind(var22)(var2);
            var1['column1AccessibilityLabel'] = var2;
            var2 = {};
            var2 = var12.bind(var4)(var11, var2);
            var1['column2'] = var2;
            var2 = var16[var19];
            var2 = var8.bind(var4)(var2);
            var22 = var2.intl;
            var21 = var22.string;
            var2 = var16[var19];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.tq+6t/;
            var2 = var21.bind(var22)(var2);
            var1['column2AccessibilityLabel'] = var2;
            var3[7] = var1;
            var1 = {};
            var2 = {};
            var21 = var16[var19];
            var21 = var8.bind(var4)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var16[var19];
            var21 = var8.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.myyAEr;
            var21 = var22.bind(var23)(var21);
            var2['text'] = var21;
            var2 = var12.bind(var4)(var20, var2);
            var1['label'] = var2;
            var2 = var16[var19];
            var2 = var8.bind(var4)(var2);
            var22 = var2.intl;
            var21 = var22.string;
            var2 = var16[var19];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.myyAEr;
            var2 = var21.bind(var22)(var2);
            var1['rowName'] = var2;
            var2 = {};
            var2 = var12.bind(var4)(var17, var2);
            var1['column1'] = var2;
            var2 = var16[var19];
            var2 = var8.bind(var4)(var2);
            var22 = var2.intl;
            var21 = var22.string;
            var2 = var16[var19];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.l4qZrp;
            var2 = var21.bind(var22)(var2);
            var1['column1AccessibilityLabel'] = var2;
            var2 = {};
            var2 = var12.bind(var4)(var11, var2);
            var1['column2'] = var2;
            var2 = var16[var19];
            var2 = var8.bind(var4)(var2);
            var22 = var2.intl;
            var21 = var22.string;
            var2 = var16[var19];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.tq+6t/;
            var2 = var21.bind(var22)(var2);
            var1['column2AccessibilityLabel'] = var2;
            var3[8] = var1;
            var1 = {};
            var2 = {};
            var21 = var16[var19];
            var21 = var8.bind(var4)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var16[var19];
            var21 = var8.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.S6yQr8;
            var21 = var22.bind(var23)(var21);
            var2['text'] = var21;
            var2 = var12.bind(var4)(var20, var2);
            var1['label'] = var2;
            var2 = var16[var19];
            var2 = var8.bind(var4)(var2);
            var21 = var2.intl;
            var20 = var21.string;
            var2 = var16[var19];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.S6yQr8;
            var2 = var20.bind(var21)(var2);
            var1['rowName'] = var2;
            var2 = {};
            var2 = var12.bind(var4)(var17, var2);
            var1['column1'] = var2;
            var2 = var16[var19];
            var2 = var8.bind(var4)(var2);
            var20 = var2.intl;
            var17 = var20.string;
            var2 = var16[var19];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.l4qZrp;
            var2 = var17.bind(var20)(var2);
            var1['column1AccessibilityLabel'] = var2;
            var2 = {};
            var2 = var12.bind(var4)(var11, var2);
            var1['column2'] = var2;
            var2 = var16[var19];
            var2 = var8.bind(var4)(var2);
            var17 = var2.intl;
            var11 = var17.string;
            var2 = var16[var19];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.tq+6t/;
            var2 = var11.bind(var17)(var2);
            var1['column2AccessibilityLabel'] = var2;
            var3[9] = var1;
            var1 = {'withBottomBorder': false, 'withBottomBorderRadius': true, 'disableAccessibility': true};
            var3[10] = var1;
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0004_ip = 78; continue _fun0004 }
case 79:
                    var2 = var2.hidden;
                    var1 = !var2;
case 78:
                    return var1;
                }
            };
            var11 = var2.bind(var3)(var1);
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var20 = var10.container;
            var17 = new Array(2);
            var17[0] = var20;
            var17[1] = var18;
            var1['style'] = var17;
            var5 = var16[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.Text;
            var5 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'header-primary', 'accessibilityRole': 'header'};
            var16 = var10.headerText;
            var5['style'] = var16;
            if(!(var15 == var13)) { _fun0003_ip = 80; continue _fun0003 }
case 81:
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var19];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var19];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.vLz3Zs;
            var13 = var16.bind(var17)(var15);
case 80:
            var5['children'] = var13;
            var8 = var12.bind(var4)(var8, var5);
            var5 = new Array(3);
            var5[0] = var8;
            if(!var7) { _fun0003_ip = 82; continue _fun0003 }
case 83:
            var13 = _closure1_slot10;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var8 = 28;
            var8 = var15[var8];
            var12 = var12.bind(var4)(var8);
            var8 = {};
            var15 = var10.premiumGroupCard;
            var8['style'] = var15;
            var8['premiumGroupRole'] = var14;
            var7 = var13.bind(var4)(var12, var8);
case 82:
            var5[1] = var7;
            var8 = _closure1_slot10;
            var7 = _closure1_slot5;
            var6 = {};
            var10 = var10.table;
            var6['style'] = var10;
            var10 = var11.map;
            var9 = function(arg1, arg2) {
                var5 = arg2;
                var4 = _closure1_slot10;
                var3 = _closure1_slot18;
                var2 = {};
                var9 = arg1;
                var10 = var2;
                var1 = copyDataProperties(var10, var9);
                var7 = _closure2_slot0;
                var6 = 'highlightColumn1';
                var2[var6] = var7;
                var7 = _closure2_slot2;
                var6 = 'disableHighlightColumn2';
                var2[var6] = var7;
                var6 = _closure2_slot1;
                var1 = 'variant';
                var2[var1] = var6;
                var1 = 'rowNumber';
                var2[var1] = var5;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            };
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();