// app/design/components/Navigator/native/NavigatorHeader.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var12 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var8;
    var4 = function HeaderBackImage() {
        var2 = _closure1_slot8;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 8;
        var1 = var6[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.ArrowLargeLeftIcon;
        var1 = {};
        var6 = 'md';
        var1['size'] = var6;
        var5 = var5.headerButtonIcon;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot9 = var4;
    var1 = function CloseButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var8 = var4.onPress;
            var2 = null;
            var3 = Object.create(var2);
            var1 = 0;
            var3['onPress'] = var1;
            var13 = {};
            var12 = var4;
            var11 = var3;
            var7 = copyDataProperties(var13, var12, var11);
            var4 = undefined;
            var _closure2_slot2 = var4;
            var3 = _closure1_slot8;
            var3 = var3.bind(var4)();
            var _closure2_slot0 = var3;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 9;
            var3 = var9[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.useNavigation;
            var3 = var3.bind(var6)();
            var _closure2_slot1 = var3;
            if(!(var2 == var8)) { _fun0001_ip = 97; continue _fun0001 }
 92:
            var8 = function() {
                var2 = _closure2_slot1;
                var1 = var2.pop;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
 97:
            _closure2_slot2 = var8;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 10;
            var3 = var9[var3];
            var10 = var2.bind(var4)(var3);
            var6 = var10.useNavigatorBackPressHandler;
            var3 = function() {
                var2 = _closure2_slot2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var1 = true;
                return var1;
            };
            var3 = var6.bind(var10)(var3);
            var3 = 11;
            var6 = var9[var3];
            var6 = var2.bind(var4)(var6);
            var10 = var6.intl;
            var6 = var10.string;
            var3 = var9[var3];
            var3 = var2.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.cpT0Cg;
            var6 = var6.bind(var10)(var3);
            var3 = _closure1_slot6;
            var1 = 12;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.HeaderBackButton;
            var1 = {};
            var13 = var1;
            var12 = var7;
            var7 = copyDataProperties(var13, var12);
            var7 = 'onPress';
            var1[var7] = var8;
            var7 = 'label';
            var1[var7] = var6;
            var8 = false;
            var7 = 'labelVisible';
            var1[var7] = var8;
            var7 = function backImage(arg1) {
                var1 = arg1;
                var7 = var1.tintColor;
                var4 = _closure1_slot6;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.XSmallIcon;
                var1 = {};
                var5 = 'md';
                var1['size'] = var5;
                var5 = _closure2_slot0;
                var6 = var5.headerButtonIcon;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var6['tintColor'] = var7;
                var5[1] = var6;
                var1['style'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var5 = 'backImage';
            var1[var5] = var7;
            var5 = 'accessibilityLabel';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function CustomHeaderBackButton(arg1) {
        var3 = arg1;
        var7 = var3.onPress;
        var _closure2_slot0 = var7;
        var1 = null;
        var2 = Object.create(var1);
        var1 = 0;
        var2['onPress'] = var1;
        var13 = {};
        var12 = var3;
        var11 = var2;
        var12 = copyDataProperties(var13, var12, var11);
        var2 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 10;
        var3 = var8[var3];
        var4 = undefined;
        var10 = var2.bind(var4)(var3);
        var9 = var10.useNavigatorBackPressHandler;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0002_ip = 26; continue _fun0002 }
 16:
                var3 = _closure2_slot0;
                var2 = undefined;
                var2 = var3.bind(var2)();
 26:
                return var1;
            }
        };
        var3 = var9.bind(var10)(var3);
        var3 = _closure1_slot6;
        var1 = 12;
        var1 = var8[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.HeaderBackButton;
        var1 = {};
        var13 = var1;
        var6 = copyDataProperties(var13, var12);
        var6 = 'onPress';
        var1[var6] = var7;
        var7 = false;
        var6 = 'labelVisible';
        var1[var6] = var7;
        var6 = function backImage() {
            var4 = _closure1_slot6;
            var3 = _closure1_slot9;
            var2 = undefined;
            var1 = {};
            var1 = var4.bind(var2)(var3, var1);
            return var1;
        };
        var5 = 'backImage';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function HeaderTextButton(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var5 = var4.text;
            var2 = var4.labelStyle;
            var1 = null;
            var3 = Object.create(var1);
            var1 = 0;
            var3['text'] = var1;
            var3['labelStyle'] = var1;
            var13 = {};
            var12 = var4;
            var11 = var3;
            var6 = copyDataProperties(var13, var12, var11);
            var3 = {};
            var7 = _closure1_slot8;
            var4 = undefined;
            var7 = var7.bind(var4)();
            var12 = var7.headerBackTitleStyle;
            var13 = var3;
            var7 = copyDataProperties(var13, var12);
            var8 = 16;
            var7 = 'marginHorizontal';
            var3[var7] = var8;
            var9 = new Array(2);
            var9[0] = var3;
            var9[1] = var2;
            var3 = _closure1_slot6;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 12;
            var1 = var8[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.HeaderBackButton;
            var1 = {};
            var13 = var1;
            var12 = var6;
            var6 = copyDataProperties(var13, var12);
            var6 = 'label';
            var1[var6] = var5;
            var10 = true;
            var6 = 'labelVisible';
            var1[var6] = var10;
            var6 = 'labelStyle';
            var1[var6] = var9;
            var9 = function backImage() {
                var1 = null;
                return var1;
            };
            var6 = 'backImage';
            var1[var6] = var9;
            var6 = 14;
            var6 = var8[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.isAndroid;
            var7 = var6.bind(var7)();
            var6 = undefined;
            if(!var7) { _fun0003_ip = 210; continue _fun0003 }
 207:
            var6 = var5;
 210:
            var5 = 'accessibilityLabel';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var12.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var6 = var8[var5];
    var5 = native4;
    var5 = var5.bind(var1)(var6);
    var5 = 2;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var6 = var5.View;
    var _closure1_slot4 = var6;
    var5 = var5.ActivityIndicator;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var13 = var5.Fonts;
    var5 = 4;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var6 = var5.jsx;
    var _closure1_slot6 = var6;
    var5 = var5.jsxs;
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var8[var5];
    var9 = var7.bind(var1)(var5);
    var6 = var9.createStyles;
    var5 = {};
    var10 = {};
    var11 = 6;
    var14 = var8[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOBILE_SECONDARY;
    var10['backgroundColor'] = var14;
    var14 = 'hidden';
    var10['overflow'] = var14;
    var5['fauxHeaderWrapper'] = var10;
    var10 = {};
    var14 = 7;
    var14 = var8[var14];
    var14 = var7.bind(var1)(var14);
    var14 = var14.TextStyleSheet;
    var17 = var14.redesign/heading-18/bold;
    var18 = var10;
    var14 = copyDataProperties(var18, var17);
    var14 = var8[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var15 = var14.HEADER_PRIMARY;
    var14 = 'color';
    var10[var14] = var15;
    var5['headerTitle'] = var10;
    var10 = {'fontFamily': null, 'fontSize': 16, 'letterSpacing': 0, 'lineHeight': 20};
    var13 = var13.PRIMARY_MEDIUM;
    var10['fontFamily'] = var13;
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.HEADER_PRIMARY;
    var10['color'] = var13;
    var5['headerBackTitleStyle'] = var10;
    var10 = {'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'center'};
    var5['navigatorHeaderTitleContainer'] = var10;
    var10 = {'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center'};
    var5['navigatorHeaderContainer'] = var10;
    var10 = {};
    var13 = -2;
    var10['marginTop'] = var13;
    var5['navigatorHeaderSubtitle'] = var10;
    var10 = {'width': 24, 'height': 24};
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.HEADER_PRIMARY;
    var10['tintColor'] = var13;
    var5['headerButtonIcon'] = var10;
    var10 = {'width': 22, 'height': 22};
    var11 = var8[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_NORMAL;
    var10['color'] = var11;
    var5['submittingIndicator'] = var10;
    var5 = var6.bind(var9)(var5);
    var _closure1_slot8 = var5;
    var6 = 17;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'design/components/Navigator/native/NavigatorHeader.native.tsx';
    var6 = var7.bind(var8)(var6);
    var3['useStyles'] = var5;
    var5 = function NavigatorHeader(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var14 = var1.title;
            var10 = var1.subtitle;
            var8 = var1.icon;
            var1 = _closure1_slot8;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var11.navigatorHeaderContainer;
            var1['style'] = var5;
            var5 = {};
            var6 = var11.navigatorHeaderTitleContainer;
            var5['style'] = var6;
            var6 = new Array(2);
            var6[0] = var8;
            var13 = _closure1_slot6;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var12 = 7;
            var8 = var8[var12];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'accessibilityRole': 'header', 'aria-level': '1', 'lineClamp': 1, 'variant': 'redesign/heading-18/bold', 'color': 'header-primary'};
            var8['children'] = var14;
            var8 = var13.bind(var4)(var9, var8);
            var6[1] = var8;
            var5['children'] = var6;
            var6 = var3.bind(var4)(var2, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = null;
            var6 = var6 != var10;
            if(!var6) { _fun0004_ip = 164; continue _fun0004 }
 156:
            var8 = '';
            var6 = var8 !== var10;
 164:
            if(!var6) { _fun0004_ip = 229; continue _fun0004 }
 167:
            var9 = _closure1_slot6;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var12];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'lineClamp': 1, 'style': null, 'variant': 'text-xs/medium', 'color': 'text-muted'};
            var11 = var11.navigatorHeaderSubtitle;
            var7['style'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 229:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['NavigatorHeader'] = var5;
    var3['HeaderBackImage'] = var4;
    var4 = function renderBackImage() {
        var4 = _closure1_slot6;
        var3 = _closure1_slot9;
        var2 = undefined;
        var1 = {};
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var3['renderBackImage'] = var4;
    var4 = function getHeaderCloseButton(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            var4 = _closure1_slot6;
            var3 = _closure1_slot10;
            var2 = {};
            var6 = arg1;
            var7 = var2;
            var1 = copyDataProperties(var7, var6);
            var5 = _closure2_slot0;
            var1 = 'onPress';
            var2[var1] = var5;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        return var1;
    };
    var3['getHeaderCloseButton'] = var4;
    var4 = function getHeaderConditionalBackButton(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            var4 = arg1;
            var2 = var4.onPress;
            var _closure3_slot0 = var2;
            var2 = null;
            var3 = Object.create(var2);
            var2 = 0;
            var3['onPress'] = var2;
            var9 = {};
            var8 = var4;
            var7 = var3;
            var8 = copyDataProperties(var9, var8, var7);
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0005_ip = 60; continue _fun0005 }
 7:
                            var2 = _closure2_slot0;
                            var3 = undefined;
                            var2 = var2.bind(var3)();
                            SaveGenerator(address=24);
 22:
                            return var2;
 24:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0005_ip = 57; continue _fun0005 }
 30:
                            if(!var2) { _fun0005_ip = 54; continue _fun0005 }
 33:
                            var6 = _closure3_slot0;
                            var5 = null;
                            if(!(var5 != var6)) { _fun0005_ip = 54; continue _fun0005 }
 46:
                            var4 = _closure3_slot0;
                            var4 = var4.bind(var3)();
 54:
                            return var3;
 57:
                            return var2;
 60:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure4_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure4_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var4 = undefined;
            var6 = var1.bind(var4)();
            var3 = _closure1_slot6;
            var2 = _closure1_slot11;
            var1 = {};
            var9 = var1;
            var5 = copyDataProperties(var9, var8);
            var5 = 'onPress';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        return var1;
    };
    var3['getHeaderConditionalBackButton'] = var4;
    var4 = function getHeaderBackButton(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arguments[1];
            var3 = arg1;
            var _closure2_slot0 = var3;
            var3 = undefined;
            if(!(var2 === var3)) { _fun0006_ip = 20; continue _fun0006 }
 18:
            var2 = false;
 20:
            var _closure2_slot1 = var2;
            var1 = function(arg1) {
                var4 = arg1;
                var2 = var4.onPress;
                var _closure3_slot0 = var2;
                var2 = null;
                var3 = Object.create(var2);
                var2 = 0;
                var3['onPress'] = var2;
                var8 = {};
                var7 = var4;
                var6 = var3;
                var7 = copyDataProperties(var8, var7, var6);
                var4 = _closure1_slot6;
                var3 = _closure1_slot11;
                var2 = {};
                var8 = var2;
                var5 = copyDataProperties(var8, var7);
                var5 = function onPress() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var2 = _closure2_slot0;
                        var3 = null;
                        if(!(var3 != var2)) { _fun0007_ip = 23; continue _fun0007 }
 13:
                        var4 = _closure2_slot0;
                        var2 = undefined;
                        var2 = var4.bind(var2)();
 23:
                        var1 = _closure2_slot1;
                        var1 = !var1;
                        if(!var1) { _fun0007_ip = 54; continue _fun0007 }
 33:
                        var2 = _closure3_slot0;
                        if(!(var3 != var2)) { _fun0007_ip = 54; continue _fun0007 }
 44:
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 54:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = 'onPress';
                var2[var1] = var5;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            return var1;
        }
    };
    var3['getHeaderBackButton'] = var4;
    var4 = function getHeaderTextButton(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var1 = function(arg1) {
            var4 = _closure1_slot6;
            var3 = _closure1_slot12;
            var2 = {};
            var7 = arg1;
            var8 = var2;
            var1 = copyDataProperties(var8, var7);
            var6 = _closure2_slot0;
            var5 = 'text';
            var2[var5] = var6;
            var5 = _closure2_slot1;
            var1 = 'onPress';
            var2[var1] = var5;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        return var1;
    };
    var3['getHeaderTextButton'] = var4;
    var4 = function getHeaderNoTitle() {
        var1 = function() {
            var1 = null;
            return var1;
        };
        return var1;
    };
    var3['getHeaderNoTitle'] = var4;
    var4 = function FauxHeader(arg1) {
        var1 = arg1;
        var5 = var1.children;
        var7 = var1.style;
        var1 = _closure1_slot8;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var2 = _closure1_slot1;
        var12 = _closure1_slot2;
        var1 = 15;
        var1 = var12[var1];
        var1 = var2.bind(var4)(var1);
        var1 = var1.bind(var4)();
        var10 = var1.top;
        var3 = _closure1_slot6;
        var2 = _closure1_slot4;
        var1 = {};
        var8 = var6.fauxHeaderWrapper;
        var6 = new Array(3);
        var6[0] = var8;
        var8 = {};
        var8['paddingTop'] = var10;
        var11 = _closure1_slot0;
        var9 = 16;
        var9 = var12[var9];
        var9 = var11.bind(var4)(var9);
        var9 = var9.NAV_BAR_HEIGHT;
        var9 = var10 + var9;
        var8['height'] = var9;
        var6[1] = var8;
        var6[2] = var7;
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['FauxHeader'] = var4;
    var2 = function HeaderSubmittingIndicator() {
        var2 = _closure1_slot8;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = true;
        var1['animating'] = var6;
        var6 = var5.submittingIndicator;
        var1['style'] = var6;
        var5 = var5.submittingIndicator;
        var5 = var5.color;
        var1['color'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['HeaderSubmittingIndicator'] = var2;
    return var1;
})();