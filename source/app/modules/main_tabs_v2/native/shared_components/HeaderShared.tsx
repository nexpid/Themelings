// app/modules/main_tabs_v2/native/shared_components/HeaderShared.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var11;
    var8 = function GenericHeaderTitle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var2 = var5.title;
            var _closure2_slot0 = var2;
            var12 = var5.subtitle;
            var2 = var5.color;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 'mobile-text-heading-primary';
case 2:
            var _closure2_slot1 = var2;
            var15 = var5.subtitleColor;
            if(!(var15 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var15 = 'text-default';
case 4:
            var2 = var5.icon;
            var _closure2_slot2 = var2;
            var13 = var5.maxFontSizeMultiplier;
            if(!(var13 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var13 = 2;
case 6:
            var _closure2_slot3 = var13;
            var3 = {'title': 0, 'subtitle': 0, 'color': 0, 'subtitleColor': 0, 'icon': 0, 'maxFontSizeMultiplier': 0};
            var8 = null;
            var19 = var3;
            var18 = null;
            var2 = silentSetPrototypeOf(var19, var18);
            var19 = {};
            var18 = var5;
            var17 = var3;
            var3 = copyDataProperties(var19, var18, var17);
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 7;
            var2 = var10[var2];
            var6 = var5.bind(var4)(var2);
            var5 = var6.useToken;
            var7 = _closure1_slot1;
            var2 = 5;
            var2 = var10[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.modules;
            var2 = var2.mobile;
            var2 = var2.HEADER_TITLE_TEXT_STYLE;
            var2 = var5.bind(var6)(var2);
            var3 = var3.variant;
            if(!(var8 != var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var3;
case 8:
            _closure2_slot4 = var2;
            var2 = _closure1_slot8;
            var14 = var2.bind(var4)();
            _closure2_slot5 = var14;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 8;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = 'os-drawn';
            var7 = var3.bind(var4)(var2);
            var3 = function renderTitleContainer(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var6 = arg1;
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var4 = _closure1_slot6;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.Text;
                    var1 = {};
                    var1['accessibilityRole'] = var6;
                    var5 = 1;
                    var1['lineClamp'] = var5;
                    var5 = _closure2_slot4;
                    var1['variant'] = var5;
                    var5 = _closure2_slot1;
                    var1['color'] = var5;
                    var5 = _closure2_slot5;
                    var5 = var5.headerText;
                    var1['style'] = var5;
                    var5 = _closure2_slot3;
                    var1['maxFontSizeMultiplier'] = var5;
                    var5 = _closure2_slot0;
                    var1['children'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    _fun0002_ip = 12; continue _fun0002;
case 10:
                    var5 = _closure1_slot7;
                    var4 = _closure1_slot4;
                    var3 = {};
                    var7 = true;
                    var3['accessible'] = var7;
                    var3['accessibilityRole'] = var6;
                    var6 = _closure2_slot5;
                    var6 = var6.titleContainer;
                    var3['style'] = var6;
                    var7 = _closure2_slot2;
                    var6 = new Array(2);
                    var6[0] = var7;
                    var9 = _closure1_slot6;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var7 = var8.bind(var2)(var7);
                    var8 = var7.Text;
                    var7 = {};
                    var11 = 1;
                    var7['lineClamp'] = var11;
                    var11 = _closure2_slot4;
                    var7['variant'] = var11;
                    var11 = _closure2_slot1;
                    var7['color'] = var11;
                    var11 = _closure2_slot5;
                    var11 = var11.headerText;
                    var7['style'] = var11;
                    var11 = _closure2_slot3;
                    var7['maxFontSizeMultiplier'] = var11;
                    var10 = _closure2_slot0;
                    var7['children'] = var10;
                    var7 = var9.bind(var2)(var8, var7);
                    var6[1] = var7;
                    var3['children'] = var6;
                    var1 = var5.bind(var2)(var4, var3);
case 12:
                    return var1;
                }
            };
            if(!(var8 == var12)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            if(!(var8 != var7)) { _fun0001_ip = 15; continue _fun0001 }
case 13:
            var5 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {'accessible': true, 'accessibilityRole': 'header'};
            var6 = 'header';
            var10 = var8 != var12;
            if(!var10) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var6 = undefined;
case 16:
            var10 = var3.bind(var4)(var6);
            var6 = new Array(3);
            var6[0] = var10;
            var10 = var8 != var12;
            var8 = null;
            if(!var10) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var11 = _closure1_slot6;
            var10 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 6;
            var9 = var16[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'lineClamp': 1, 'variant': 'text-xs/medium'};
            var9['color'] = var15;
            var14 = var14.subtitleText;
            var9['style'] = var14;
            var9['maxFontSizeMultiplier'] = var13;
            var9['children'] = var12;
            var8 = var11.bind(var4)(var10, var9);
case 18:
            var6[1] = var8;
            var6[2] = var7;
            var1['children'] = var6;
            var1 = var5.bind(var4)(var2, var1);
            _fun0001_ip = 20; continue _fun0001;
case 15:
            var2 = 'header';
            var1 = var3.bind(var4)(var2);
case 20:
            return var1;
        }
    };
    var _closure1_slot10 = var8;
    var7 = function renderGenericTitle(arg1) {
        var1 = arg1;
        var1 = var1.children;
        var4 = _closure1_slot6;
        var3 = _closure1_slot10;
        var2 = {};
        var2['title'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot11 = var7;
    var6 = function HeaderTextButton(arg1) {
        var3 = arg1;
        var7 = var3.labelStyle;
        var1 = null;
        var2 = Object.create(var1);
        var1 = 0;
        var2['labelStyle'] = var1;
        var11 = {};
        var10 = var3;
        var9 = var2;
        var5 = copyDataProperties(var11, var10, var9);
        var2 = _closure1_slot8;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 9;
        var1 = var8[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.HeaderBackButton;
        var1 = {};
        var8 = var6.backButtonLabel;
        var6 = new Array(2);
        var6[0] = var8;
        var6[1] = var7;
        var1['labelStyle'] = var6;
        var6 = true;
        var1['labelVisible'] = var6;
        var6 = function backImage() {
            var1 = null;
            return var1;
        };
        var1['backImage'] = var6;
        var6 = var5.label;
        var1['truncatedLabel'] = var6;
        var6 = var5.label;
        var1['accessibilityLabel'] = var6;
        var11 = var1;
        var10 = var5;
        var5 = copyDataProperties(var11, var10);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot12 = var6;
    var5 = function getRenderBackImage(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            var4 = _closure1_slot6;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.PressableNavigatorBackIcon;
            var1 = {};
            var7 = arg1;
            var8 = var1;
            var5 = copyDataProperties(var8, var7);
            var6 = _closure2_slot0;
            var5 = 'navigation';
            var1[4] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        return var1;
    };
    var _closure1_slot13 = var5;
    var1 = function HeaderChannelActions(arg1) {
        var1 = arg1;
        var5 = var1.route;
        var6 = var1.screenIndex;
        var2 = _closure1_slot8;
        var4 = undefined;
        var7 = var2.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 18;
        var1 = var8[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var7 = var7.headerRightContainer;
        var1['containerStyle'] = var7;
        var9 = var5.params;
        var10 = var1;
        var5 = copyDataProperties(var10, var9);
        var5 = 'screenIndex';
        var1[4] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var12 = var1.Object;
    var9 = var12.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var12)(var3, var1, var4);
    var1 = 0;
    var9 = var11[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var13 = var4.bind(var1)(var9);
    var _closure1_slot3 = var13;
    var4 = 1;
    var4 = var11[var4];
    var4 = var10.bind(var1)(var4);
    var9 = var4.View;
    var _closure1_slot4 = var9;
    var4 = var4.Platform;
    var4 = 2;
    var4 = var11[var4];
    var4 = var10.bind(var1)(var4);
    var4 = var4.MIN_HEADER_HEIGHT;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var11[var4];
    var4 = var10.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot6 = var9;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var11[var4];
    var12 = var10.bind(var1)(var4);
    var9 = var12.createStyles;
    var4 = {};
    var14 = {};
    var15 = 16;
    var14['marginRight'] = var15;
    var4['headerRightContainer'] = var14;
    var14 = {'backgroundColor': null, 'flexDirection': 'row', 'alignItems': 'center', 'flexShrink': 0, 'flexGrow': 1, 'borderColor': null, 'borderBottomWidth': 1};
    var15 = 5;
    var17 = var11[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_BASE_LOW;
    var14['backgroundColor'] = var17;
    var17 = 'center';
    var18 = var11[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.MOBILE_HEADER_BORDER;
    var14['borderColor'] = var18;
    var4['headerWrapper'] = var14;
    var14 = {'padding': 8, 'zIndex': 100, 'width': 40, 'height': 40, 'borderRadius': 20};
    var4['actionButtonPressable'] = var14;
    var14 = {};
    var18 = var11[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.MOBILE_HEADER_ICON_DEFAULT;
    var14['tintColor'] = var18;
    var4['actionButtonIcon'] = var14;
    var14 = {'textAlign': 'center', 'fontSize': 18};
    var4['headerText'] = var14;
    var14 = {};
    var14['textAlign'] = var17;
    var4['subtitleText'] = var14;
    var14 = {};
    var17 = 6;
    var17 = var11[var17];
    var17 = var10.bind(var1)(var17);
    var17 = var17.TextStyleSheet;
    var20 = var17.text-md/semibold;
    var21 = var14;
    var17 = copyDataProperties(var21, var20);
    var17 = var11[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.colors;
    var18 = var17.TEXT_BRAND;
    var17 = 'color';
    var14[16] = var18;
    var4['backButtonLabel'] = var14;
    var14 = {'flexDirection': 'row', 'alignItems': 'center'};
    var15 = var11[var15];
    var15 = var16.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_8;
    var14['gap'] = var15;
    var4['titleContainer'] = var14;
    var4 = var9.bind(var12)(var4);
    var _closure1_slot8 = var4;
    var12 = var13.memo;
    var9 = function HeaderInner(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var13 = var1.navigation;
            var14 = var1.options;
            var18 = var1.back;
            var15 = var1.route;
            var6 = var1.shouldHandleSafeArea;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var6 = true;
case 21:
            var3 = var1.style;
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var5 = _closure1_slot8;
            var11 = var5.bind(var4)();
            _closure2_slot1 = var11;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 13;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.bind(var4)();
            var5 = var5.top;
            var17 = 0;
            if(!var6) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var17 = var5;
case 23:
            _closure2_slot2 = var17;
            var8 = var14.headerLeft;
            if(!(var4 === var8)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var5 = _closure1_slot13;
            var8 = var5.bind(var4)(var13);
case 25:
            var12 = var14.headerTitle;
            var9 = var14.headerRight;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 14;
            var5 = var7[var5];
            var10 = var6.bind(var4)(var5);
            var5 = var10.useTheme;
            var5 = var5.bind(var10)();
            var5 = var5.colors;
            var10 = var5.text;
            var5 = 15;
            var5 = var7[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.useGradientTop;
            var16 = var5.bind(var6)();
            _closure2_slot3 = var16;
            var7 = _closure1_slot3;
            var6 = var7.useMemo;
            var5 = new Array(4);
            var5[0] = var17;
            var5[1] = var16;
            var5[2] = var11;
            var5[3] = var3;
            var3 = function() {
                var1 = _closure2_slot1;
                var3 = var1.headerWrapper;
                var1 = new Array(4);
                var1[0] = var3;
                var3 = _closure2_slot3;
                var1[1] = var3;
                var3 = {};
                var4 = _closure2_slot2;
                var3['paddingTop'] = var4;
                var5 = _closure2_slot2;
                var4 = _closure1_slot5;
                var4 = var5 + var4;
                var3['minHeight'] = var4;
                var1[2] = var3;
                var2 = _closure2_slot0;
                var1[3] = var2;
                return var1;
            };
            var5 = var6.bind(var7)(var3, var5);
            var6 = 'string';
            var3 = typeof var12;
            var16 = var6 === var3;
            if(var16) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var3 = null;
            var11 = var12;
            if(!(var3 == var12)) { _fun0003_ip = 29; continue _fun0003 }
case 27:
            var11 = _closure1_slot11;
case 29:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 8;
            var3 = var7[var3];
            var6 = var6.bind(var4)(var3);
            var3 = 'custom-drawn';
            var6 = var6.bind(var4)(var3);
            var7 = _closure1_slot3;
            var3 = var7.useLayoutEffect;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.DeprecatedLayoutAnimation;
                var1 = {};
                var4 = 0;
                var1['duration'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var7)(var2);
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var5;
            var5 = {};
            var7 = null;
            var19 = var7 == var18;
            var17 = undefined;
            if(var19) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var17 = var18.title;
case 30:
            var5['label'] = var17;
            var17 = var13.isFocused;
            var17 = var17.bind(var13)();
            if(!var17) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var18 = var13.canGoBack;
            var17 = var18.bind(var13)();
case 32:
            var5['canGoBack'] = var17;
            var5['tintColor'] = var10;
            var8 = var8.bind(var4)(var5);
            var5 = new Array(4);
            var5[0] = var8;
            var8 = {};
            if(var16) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var14 = var14.title;
            if(!(var7 == var14)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var14 = var15.name;
case 36:
            var12 = var14;
case 34:
            var8['children'] = var12;
            var8['tintColor'] = var10;
            var8 = var11.bind(var4)(var8);
            var5[1] = var8;
            var8 = var7 == var9;
            var7 = undefined;
            if(var8) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var8 = {};
            var11 = var13.isFocused;
            var11 = var11.bind(var13)();
            if(!var11) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var12 = var13.canGoBack;
            var11 = var12.bind(var13)();
case 40:
            var8['canGoBack'] = var11;
            var8['tintColor'] = var10;
            var7 = var9.bind(var4)(var8);
case 38:
            var5[2] = var7;
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var7 = 17;
            var1 = var1[var7];
            var5 = undefined;
            var6 = var6.bind(var5)(var1);
            var1 = ['back'];
            var1 = var6.bind(var5)(var3, var2, var1);
            var6 = !var1;
            var1 = !var6;
            if(var6) { _fun0004_ip = 42; continue _fun0004 }
case 4:
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var6.bind(var5)(var4);
            var3 = var3.back;
            var6 = null;
            if(!(var6 == var3)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var3 = {};
case 43:
            var2 = var2.back;
            if(!(var6 == var2)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var2 = {};
case 45:
            var1 = var4.bind(var5)(var3, var2);
case 42:
            return var1;
        }
    };
    var4 = var12.bind(var13)(var9, var4);
    var _closure1_slot9 = var4;
    var9 = 22;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/main_tabs_v2/native/shared_components/HeaderShared.tsx';
    var9 = var10.bind(var11)(var9);
    var3['GenericHeaderTitle'] = var8;
    var3['renderGenericTitle'] = var7;
    var3['HeaderTextButton'] = var6;
    var6 = function getRenderHeaderTextButton(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var1 = function(arg1) {
            var4 = _closure1_slot6;
            var3 = _closure1_slot12;
            var2 = {};
            var5 = _closure2_slot0;
            var2['label'] = var5;
            var1 = _closure2_slot1;
            var2['onPress'] = var1;
            var6 = arg1;
            var7 = var2;
            var1 = copyDataProperties(var7, var6);
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        return var1;
    };
    var3['getRenderHeaderTextButton'] = var6;
    var6 = function renderHeader(arg1) {
        var4 = _closure1_slot6;
        var3 = _closure1_slot9;
        var2 = {};
        var5 = arg1;
        var6 = var2;
        var1 = copyDataProperties(var6, var5);
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['renderHeader'] = var6;
    var3['getRenderBackImage'] = var5;
    var5 = function getRenderModalBackImage(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(var3) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var2 = function() {
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot0;
                var1['navigation'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            return var2;
case 47:
            return var1;
        }
    };
    var3['getRenderModalBackImage'] = var5;
    var5 = function getRenderModalCloseImage(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(var3) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var2 = function() {
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot0;
                var1['navigation'] = var5;
                var5 = 'close';
                var1['type'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            return var2;
case 47:
            return var1;
        }
    };
    var3['getRenderModalCloseImage'] = var5;
    var3['Header'] = var4;
    var4 = function getDefaultStackHeaderProps(arg1) {
        var1 = {};
        var5 = _closure1_slot13;
        var4 = undefined;
        var3 = arg1;
        var3 = var5.bind(var4)(var3);
        var1['headerLeft'] = var3;
        var2 = _closure1_slot11;
        var1['headerTitle'] = var2;
        var2 = false;
        var1['headerBackVisible'] = var2;
        return var1;
    };
    var3['getDefaultStackHeaderProps'] = var4;
    var4 = function getDefaultChannelStackHeaderProps(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var1;
            var1 = var5.getState;
            var1 = var1.bind(var5)();
            var4 = var1.routes;
            var3 = var4.findIndex;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.key;
                var1 = _closure2_slot0;
                var1 = var1.key;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var3.bind(var4)(var1);
            var1 = null;
            var4 = var1 != var3;
            var1 = 'none';
            if(!var4) { _fun0007_ip = 49; continue _fun0007 }
case 50:
            var1 = var3;
case 49:
            var _closure2_slot1 = var1;
            var1 = {};
            var4 = _closure1_slot13;
            var3 = undefined;
            var3 = var4.bind(var3)(var5);
            var1['headerLeft'] = var3;
            var3 = function headerTitle() {
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 19;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot0;
                var8 = var6.params;
                var9 = var1;
                var6 = copyDataProperties(var9, var8);
                var7 = true;
                var6 = 'isNavigationScreen';
                var1[5] = var7;
                var6 = _closure2_slot1;
                var5 = 'screenIndex';
                var1[4] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1['headerTitle'] = var3;
            var2 = function headerRight() {
                var4 = _closure1_slot6;
                var3 = _closure1_slot14;
                var2 = {};
                var5 = _closure2_slot0;
                var2['route'] = var5;
                var1 = _closure2_slot1;
                var2['screenIndex'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1['headerRight'] = var2;
            var2 = false;
            var1['headerBackVisible'] = var2;
            return var1;
        }
    };
    var3['getDefaultChannelStackHeaderProps'] = var4;
    var2 = function HeaderIconButton(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var13 = var1.accessibilityLabel;
            var7 = var1.onPress;
            var9 = var1.source;
            var8 = var1.resizeMode;
            var10 = var1.color;
            var1 = _closure1_slot8;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot6;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 20;
            var1 = var12[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var14 = 'button';
            var1['accessibilityRole'] = var14;
            var1['accessibilityLabel'] = var13;
            var13 = var11.actionButtonPressable;
            var1['style'] = var13;
            var1['onPress'] = var7;
            var7 = _closure1_slot6;
            var5 = 21;
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Icon;
            var5 = {};
            var12 = null;
            if(!(var12 == var10)) { _fun0008_ip = 25; continue _fun0008 }
case 51:
            var11 = var11.actionButtonIcon;
            var10 = var11.tintColor;
case 25:
            var5['color'] = var10;
            var5['source'] = var9;
            var5['resizeMode'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['HeaderIconButton'] = var2;
    return var1;
})();