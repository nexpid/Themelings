// app/uikit-native/refresh/form/FormSection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function hasTrailingError(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.length;
            var1 = 1;
            var1 = var3 - var1;
            var1 = var2[var1];
            var4 = _closure1_slot3;
            var3 = var4.isValidElement;
            var3 = var3.bind(var4)(var1);
            if(!var3) { _fun0001_ip = 109; continue _fun0001 }
 40:
            var3 = var1.type;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 8;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            if(!(var3 !== var2)) { _fun0001_ip = 109; continue _fun0001 }
 71:
            var2 = var1.props;
            var3 = null;
            if(!(var3 != var2)) { _fun0001_ip = 109; continue _fun0001 }
 82:
            var2 = var1.props;
            var1 = 'error';
            var1 = var1 in var2;
            if(!var1) { _fun0001_ip = 107; continue _fun0001 }
 98:
            var2 = var2.error;
            var1 = var3 != var2;
 107:
            return var1;
 109:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var7 = var4.StyleSheet;
    var4 = var4.Platform;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TitleStyleType;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'borderTopWidth': 1, 'borderColor': null, 'marginTop': 16};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MODIFIER_ACCENT;
    var9['borderColor'] = var12;
    var4['titledSectionHeader'] = var9;
    var9 = {};
    var12 = 24;
    var9['marginTop'] = var12;
    var4['titledSectionNoBorder'] = var9;
    var9 = {};
    var4['titledSectionNoBorderOrMargin'] = var9;
    var9 = {};
    var9['marginTop'] = var12;
    var4['emptySectionHeader'] = var9;
    var9 = {};
    var4['sectionBody'] = var9;
    var9 = {};
    var4['sectionBodyIOSBorder'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.RED_400;
    var9['color'] = var12;
    var4['error'] = var9;
    var9 = {'paddingHorizontal': 16, 'marginBottom': 24};
    var4['redesignCompatContainer'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.CARD_PRIMARY_BG;
    var9['backgroundColor'] = var10;
    var4['redesignCompatFooter'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/refresh/form/FormSection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FormSection(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var24 = var2.icon;
            var5 = var2.children;
            var22 = var2.thinTitle;
            var17 = var2.inset;
            var4 = undefined;
            if(!(var17 === var4)) { _fun0002_ip = 35; continue _fun0002 }
 33:
            var17 = false;
 35:
            var15 = var2.title;
            var9 = var2.description;
            var19 = var2.accessibilityRole;
            var12 = var2.accessibilityLabel;
            var21 = var2.uppercaseTitle;
            var3 = var2.titleStyleType;
            if(!(var3 === var4)) { _fun0002_ip = 84; continue _fun0002 }
 71:
            var6 = _closure1_slot5;
            var3 = var6.DEFAULT;
 84:
            var25 = var2.titleViewStyle;
            var26 = var2.titleTextStyle;
            var16 = var2.sectionBodyStyle;
            var20 = var2.wrapperStyle;
            var23 = var2.error;
            var10 = var2.hint;
            var14 = var2.hasIcons;
            var2 = _closure1_slot8;
            var18 = var2.bind(var4)();
            var8 = _closure1_slot3;
            var6 = var8.useContext;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 6;
            var2 = var13[var2];
            var2 = var11.bind(var4)(var2);
            var2 = var2.RedesignCompatContext;
            var2 = var6.bind(var8)(var2);
            if(var2) { _fun0002_ip = 608; continue _fun0002 }
 185:
            var13 = null;
            var2 = var13 != var15;
            var11 = undefined;
            if(!var2) { _fun0002_ip = 337; continue _fun0002 }
 199:
            var2 = var13 != var23;
            var28 = '';
            var27 = var28;
            if(!var2) { _fun0002_ip = 240; continue _fun0002 }
 213:
            var2 = global;
            var2 = var2.HermesInternal;
            var8 = var2.concat;
            var6 = '(';
            var2 = ')';
            var27 = var8.bind(var6)(var23, var2);
 240:
            var8 = _closure1_slot6;
            var6 = _closure1_slot1;
            var29 = _closure1_slot2;
            var2 = 10;
            var2 = var29[var2];
            var6 = var6.bind(var4)(var2);
            var2 = {};
            var2['textStyle'] = var26;
            var2['viewStyle'] = var25;
            var25 = global;
            var25 = var25.HermesInternal;
            var26 = var25.concat;
            var25 = ' ';
            var25 = var26.bind(var28)(var15, var25, var27);
            var2['title'] = var25;
            var2['icon'] = var24;
            var23 = var13 != var23;
            var2['error'] = var23;
            var2['thinTitle'] = var22;
            var2['uppercaseTitle'] = var21;
            var2['inset'] = var17;
            var11 = var8.bind(var4)(var6, var2);
 337:
            var6 = var18.emptySectionHeader;
            var21 = var6;
            if(!(var13 != var11)) { _fun0002_ip = 460; continue _fun0002 }
 350:
            var2 = _closure1_slot5;
            var2 = var2.DEFAULT;
            if(!(var2 !== var3)) { _fun0002_ip = 454; continue _fun0002 }
 364:
            var2 = _closure1_slot5;
            var2 = var2.ANDROID_NO_BORDER;
            if(!(var2 !== var3)) { _fun0002_ip = 403; continue _fun0002 }
 378:
            var2 = _closure1_slot5;
            var2 = var2.NO_BORDER_OR_MARGIN;
            var21 = var6;
            if(!(var2 === var3)) { _fun0002_ip = 460; continue _fun0002 }
 395:
            var21 = var18.titledSectionNoBorderOrMargin;
            _fun0002_ip = 460; continue _fun0002;
 403:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 11;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isAndroid;
            var2 = var2.bind(var3)();
            if(var2) { _fun0002_ip = 443; continue _fun0002 }
 435:
            var2 = var18.titledSectionHeader;
            _fun0002_ip = 449; continue _fun0002;
 443:
            var2 = var18.titledSectionNoBorder;
 449:
            var21 = var2;
            _fun0002_ip = 460; continue _fun0002;
 454:
            var21 = var18.titledSectionHeader;
 460:
            var6 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var8 = new Array(2);
            var8[0] = var21;
            var8[1] = var20;
            var2['style'] = var8;
            var20 = var13 != var19;
            var8 = 'list';
            if(!var20) { _fun0002_ip = 500; continue _fun0002 }
 497:
            var8 = var19;
 500:
            var2['accessibilityRole'] = var8;
            var8 = var15;
            if(!(var13 != var12)) { _fun0002_ip = 514; continue _fun0002 }
 511:
            var8 = var12;
 514:
            var2['accessibilityLabel'] = var8;
            var8 = new Array(4);
            var8[0] = var11;
            var8[1] = var9;
            var12 = _closure1_slot6;
            var11 = _closure1_slot4;
            var9 = {};
            var19 = var18.sectionBody;
            var13 = new Array(3);
            var13[0] = var19;
            var17 = !var17;
            if(!var17) { _fun0002_ip = 566; continue _fun0002 }
 560:
            var17 = var18.sectionBodyIOSBorder;
 566:
            var13[1] = var17;
            var13[2] = var16;
            var9['style'] = var13;
            var9['children'] = var5;
            var9 = var12.bind(var4)(var11, var9);
            var8[2] = var9;
            var8[3] = var10;
            var2['children'] = var8;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 608:
            var2 = _closure1_slot3;
            var3 = var2.Children;
            var2 = var3.toArray;
            var3 = var2.bind(var3)(var5);
            var5 = var3.find;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = arg1;
                    var4 = _closure1_slot3;
                    var1 = var4.isValidElement;
                    var1 = var1.bind(var4)(var2);
                    if(!var1) { _fun0003_ip = 55; continue _fun0003 }
 24:
                    var4 = var2.type;
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 7;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5);
                    var1 = var4 === var3;
 55:
                    if(!var1) { _fun0003_ip = 84; continue _fun0003 }
 58:
                    var3 = global;
                    var4 = var3.Boolean;
                    var2 = var2.props;
                    var3 = var2.leading;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3);
 84:
                    return var1;
                }
            };
            var2 = var5.bind(var3)(var2);
            var6 = null;
            var13 = var6 != var2;
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure1_slot3;
                    var1 = var4.isValidElement;
                    var1 = var1.bind(var4)(var3);
                    var4 = !var1;
                    var1 = !var4;
                    if(var4) { _fun0004_ip = 61; continue _fun0004 }
 30:
                    var3 = var3.type;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 8;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var1 = var3 !== var2;
 61:
                    return var1;
                }
            };
            var12 = var2.bind(var3)(var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = {};
            var8 = 24;
            var5['marginBottom'] = var8;
            var1['style'] = var5;
            var8 = _closure1_slot6;
            var5 = {};
            var9 = {};
            var11 = 12;
            var9['paddingHorizontal'] = var11;
            var5['style'] = var9;
            var11 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 9;
            var9 = var16[var9];
            var9 = var11.bind(var4)(var9);
            var11 = var9.TableRowGroup;
            var9 = {};
            var9['title'] = var15;
            if(!(var6 != var14)) { _fun0002_ip = 747; continue _fun0002 }
 744:
            var13 = var14;
 747:
            var9['hasIcons'] = var13;
            var13 = _closure1_slot9;
            var13 = var13.bind(var4)(var12);
            var9['hasTrailingText'] = var13;
            var9['children'] = var12;
            var9 = var8.bind(var4)(var11, var9);
            var5['children'] = var9;
            var8 = var8.bind(var4)(var2, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = var6 != var10;
            var6 = null;
            if(!var8) { _fun0002_ip = 836; continue _fun0002 }
 803:
            var9 = _closure1_slot6;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = {};
            var12 = 8;
            var11['marginTop'] = var12;
            var7['style'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 836:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();