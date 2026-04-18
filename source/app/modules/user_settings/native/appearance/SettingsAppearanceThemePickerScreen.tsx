// app/modules/user_settings/native/appearance/SettingsAppearanceThemePickerScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var11 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var11;
        var _closure1_slot2 = var6;
        var1 = function getThemeOverride(arg1, arg2, arg3) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg3;
                var3 = arg1;
                var1 = arg2;
                var3 = var3[var1];
                var1 = null;
                var4 = var1 != var3;
                var1 = undefined;
                if(!var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var5 = var3.theme;
                var4 = 'system';
                if(!(var4 !== var5)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = var3.theme;
case 4:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var _closure1_slot38 = var1;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var15 = 0;
        var4 = var6[var15];
        var1 = undefined;
        var4 = var11.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var14 = 1;
        var7 = var6[var14];
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
        var4 = var11.bind(var1)(var4);
        var _closure1_slot7 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot8 = var4;
        var4 = 6;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot9 = var4;
        var4 = 7;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot10 = var4;
        var4 = 8;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.SystemThemeState;
        var _closure1_slot11 = var4;
        var4 = 9;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.ThemeTypes;
        var _closure1_slot12 = var7;
        var4 = 10;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.jsx;
        var _closure1_slot13 = var8;
        var8 = var4.jsxs;
        var _closure1_slot14 = var8;
        var4 = var4.Fragment;
        var _closure1_slot15 = var4;
        var4 = 11;
        var4 = var6[var4];
        var9 = var5.bind(var1)(var4);
        var8 = var9.createStyles;
        var4 = {};
        var12 = {'flex': 1, 'paddingHorizontal': null, 'alignItems': 'center'};
        var10 = 12;
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_16;
        var12['paddingHorizontal'] = var13;
        var13 = 'center';
        var16 = var6[var10];
        var16 = var11.bind(var1)(var16);
        var16 = var16.spacing;
        var16 = var16.PX_24;
        var12['gap'] = var16;
        var16 = 13;
        var16 = var6[var16];
        var17 = var5.bind(var1)(var16);
        var16 = var17.isIOS;
        var16 = var16.bind(var17)();
        if(var16) { _fun0001_ip = 6; continue _fun0001 }
case 7:
        var16 = var6[var10];
        var16 = var11.bind(var1)(var16);
        var16 = var16.spacing;
        var15 = var16.PX_16;
case 6:
        var12['marginBottom'] = var15;
        var4['container'] = var12;
        var12 = {};
        var15 = 'row';
        var12['flexDirection'] = var15;
        var15 = var6[var10];
        var15 = var11.bind(var1)(var15);
        var15 = var15.spacing;
        var15 = var15.PX_16;
        var12['gap'] = var15;
        var4['landscapeContainer'] = var12;
        var12 = {};
        var12['flex'] = var14;
        var4['landscapePreview'] = var12;
        var12 = {'flex': 1, 'justifyContent': 'center', 'overflow': 'hidden'};
        var4['landscapeSelector'] = var12;
        var12 = {'width': '100%', 'gap': null, 'alignItems': 'center'};
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_16;
        var12['gap'] = var14;
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_16;
        var12['paddingHorizontal'] = var14;
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_16;
        var12['marginBottom'] = var14;
        var4['segmentedControlContainer'] = var12;
        var12 = {};
        var12['textAlign'] = var13;
        var4['textCentered'] = var12;
        var4 = var8.bind(var9)(var4);
        var _closure1_slot16 = var4;
        var4 = var6[var10];
        var4 = var11.bind(var1)(var4);
        var12 = var4.internal;
        var9 = var12.resolveSemanticColor;
        var8 = var7.LIGHT;
        var4 = var6[var10];
        var4 = var11.bind(var1)(var4);
        var4 = var4.colors;
        var4 = var4.CARD_SECONDARY_BG;
        var8 = var9.bind(var12)(var8, var4);
        var4 = new Array(3);
        var4[0] = var8;
        var8 = var6[var10];
        var8 = var11.bind(var1)(var8);
        var13 = var8.internal;
        var12 = var13.resolveSemanticColor;
        var9 = var7.DARKER;
        var8 = var6[var10];
        var8 = var11.bind(var1)(var8);
        var8 = var8.colors;
        var8 = var8.CARD_SECONDARY_BG;
        var8 = var12.bind(var13)(var9, var8);
        var4[1] = var8;
        var8 = var6[var10];
        var8 = var11.bind(var1)(var8);
        var13 = var8.internal;
        var12 = var13.resolveSemanticColor;
        var9 = var7.MIDNIGHT;
        var8 = var6[var10];
        var8 = var11.bind(var1)(var8);
        var8 = var8.colors;
        var8 = var8.CARD_SECONDARY_BG;
        var8 = var12.bind(var13)(var9, var8);
        var4[2] = var8;
        var _closure1_slot17 = var4;
        var4 = 14;
        var8 = var6[var4];
        var12 = var5.bind(var1)(var8);
        var9 = var12.createAnimatedThemedStyles;
        var8 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.BACKGROUND_BASE_LOW;
        var8['backgroundColor'] = var13;
        var8 = var9.bind(var12)(var8);
        var _closure1_slot18 = var8;
        var8 = var6[var4];
        var12 = var5.bind(var1)(var8);
        var9 = var12.createAnimatedThemedStyles;
        var8 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.BACKGROUND_MOD_SUBTLE;
        var8['backgroundColor'] = var13;
        var8 = var9.bind(var12)(var8);
        var _closure1_slot19 = var8;
        var8 = var6[var4];
        var12 = var5.bind(var1)(var8);
        var9 = var12.createAnimatedThemedStyles;
        var8 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.BACKGROUND_MOD_STRONG;
        var8['backgroundColor'] = var13;
        var8 = var9.bind(var12)(var8);
        var _closure1_slot20 = var8;
        var8 = var6[var4];
        var12 = var5.bind(var1)(var8);
        var9 = var12.createAnimatedThemedStyles;
        var8 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.BACKGROUND_SURFACE_HIGHEST;
        var8['backgroundColor'] = var13;
        var8 = var9.bind(var12)(var8);
        var _closure1_slot21 = var8;
        var8 = var6[var4];
        var12 = var5.bind(var1)(var8);
        var9 = var12.createAnimatedThemedStyles;
        var8 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.TEXT_DEFAULT;
        var8['color'] = var13;
        var8 = var9.bind(var12)(var8);
        var _closure1_slot22 = var8;
        var8 = var6[var4];
        var12 = var5.bind(var1)(var8);
        var9 = var12.createAnimatedThemedStyles;
        var8 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.MOBILE_TEXT_HEADING_PRIMARY;
        var8['color'] = var13;
        var8 = var9.bind(var12)(var8);
        var _closure1_slot23 = var8;
        var8 = var6[var4];
        var12 = var5.bind(var1)(var8);
        var9 = var12.createAnimatedThemedStyles;
        var8 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.TEXT_SUBTLE;
        var8['color'] = var13;
        var8 = var9.bind(var12)(var8);
        var _closure1_slot24 = var8;
        var8 = var6[var4];
        var12 = var5.bind(var1)(var8);
        var9 = var12.createAnimatedThemedStyles;
        var8 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.TEXT_MUTED;
        var8['color'] = var13;
        var8 = var9.bind(var12)(var8);
        var _closure1_slot25 = var8;
        var8 = var6[var4];
        var12 = var5.bind(var1)(var8);
        var9 = var12.createAnimatedThemedStyles;
        var8 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.BORDER_MUTED;
        var8['borderColor'] = var13;
        var8 = var9.bind(var12)(var8);
        var _closure1_slot26 = var8;
        var8 = var6[var4];
        var12 = var5.bind(var1)(var8);
        var9 = var12.createAnimatedThemedStyles;
        var8 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.BORDER_STRONG;
        var8['borderColor'] = var13;
        var8 = var9.bind(var12)(var8);
        var _closure1_slot27 = var8;
        var8 = var6[var4];
        var12 = var5.bind(var1)(var8);
        var9 = var12.createAnimatedThemedStyles;
        var8 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.REDESIGN_ACTIVITY_CARD_BADGE_ICON;
        var8['tintColor'] = var13;
        var8 = var9.bind(var12)(var8);
        var _closure1_slot28 = var8;
        var8 = var6[var4];
        var12 = var5.bind(var1)(var8);
        var9 = var12.createAnimatedThemedStyles;
        var8 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.TEXT_SUBTLE;
        var8['tintColor'] = var13;
        var8 = var9.bind(var12)(var8);
        var _closure1_slot29 = var8;
        var8 = var6[var4];
        var12 = var5.bind(var1)(var8);
        var9 = var12.createAnimatedThemedStyles;
        var8 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.INTERACTIVE_TEXT_DEFAULT;
        var8['tintColor'] = var13;
        var8 = var9.bind(var12)(var8);
        var _closure1_slot30 = var8;
        var4 = var6[var4];
        var9 = var5.bind(var1)(var4);
        var8 = var9.createAnimatedThemedStyles;
        var4 = {};
        var10 = var6[var10];
        var10 = var11.bind(var1)(var10);
        var10 = var10.colors;
        var10 = var10.TEXT_BRAND;
        var4['color'] = var10;
        var4 = var8.bind(var9)(var4);
        var _closure1_slot31 = var4;
        var4 = function getSegmentedControlItems() {
            var2 = {};
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var9 = 15;
            var3 = var8[var9];
            var7 = undefined;
            var3 = var5.bind(var7)(var3);
            var6 = var3.intl;
            var4 = var6.string;
            var3 = var8[var9];
            var3 = var5.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.K2sFfo;
            var3 = var4.bind(var6)(var3);
            var2['label'] = var3;
            var4 = _closure1_slot12;
            var3 = var4.LIGHT;
            var2['id'] = var3;
            var6 = _closure1_slot13;
            var1 = 16;
            var1 = var8[var1];
            var1 = var5.bind(var7)(var1);
            var3 = var1.ThemeLightIcon;
            var1 = {};
            var1 = var6.bind(var7)(var3, var1);
            var2['icon'] = var1;
            var3 = null;
            var2['page'] = var3;
            var1 = new Array(3);
            var1[0] = var2;
            var2 = {};
            var10 = var8[var9];
            var10 = var5.bind(var7)(var10);
            var12 = var10.intl;
            var11 = var12.string;
            var10 = var8[var9];
            var10 = var5.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.b8Cei3;
            var10 = var11.bind(var12)(var10);
            var2['label'] = var10;
            var10 = var4.DARKER;
            var2['id'] = var10;
            var10 = 17;
            var10 = var8[var10];
            var10 = var5.bind(var7)(var10);
            var11 = var10.ThemeDarkIcon;
            var10 = {};
            var10 = var6.bind(var7)(var11, var10);
            var2['icon'] = var10;
            var2['page'] = var3;
            var1[1] = var2;
            var2 = {};
            var10 = var8[var9];
            var10 = var5.bind(var7)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var8[var9];
            var9 = var5.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.pQwSpQ;
            var9 = var10.bind(var11)(var9);
            var2['label'] = var9;
            var4 = var4.MIDNIGHT;
            var2['id'] = var4;
            var4 = 18;
            var4 = var8[var4];
            var4 = var5.bind(var7)(var4);
            var5 = var4.ThemeMidnightIcon;
            var4 = {};
            var4 = var6.bind(var7)(var5, var4);
            var2['icon'] = var4;
            var2['page'] = var3;
            var1[2] = var2;
            return var1;
        };
        var _closure1_slot32 = var4;
        var8 = var7.LIGHT;
        var4 = new Array(3);
        var4[0] = var8;
        var8 = var7.DARKER;
        var4[1] = var8;
        var7 = var7.MIDNIGHT;
        var4[2] = var7;
        var _closure1_slot33 = var4;
        var4 = {};
        var7 = 'function SettingsAppearanceThemePickerScreenTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}';
        var4['code'] = var7;
        var _closure1_slot34 = var4;
        var4 = {};
        var7 = 'function SettingsAppearanceThemePickerScreenTsx2(activeIndex){const{runOnJS,setPendingThemeIndex}=this.__closure;runOnJS(setPendingThemeIndex)(Math.round(activeIndex));}';
        var4['code'] = var7;
        var _closure1_slot35 = var4;
        var4 = {};
        var7 = 'function SettingsAppearanceThemePickerScreenTsx3(){const{mobileThemes,isClientThemesSelector,currentThemeIndex,themeTypeIndex,ClientThemeType,withTiming,interpolateColor,cardSecondaryStyles,timingStandard,bgRaised}=this.__closure;const theme=mobileThemes[isClientThemesSelector?currentThemeIndex:themeTypeIndex.get()];if(!isClientThemesSelector||theme.type===ClientThemeType.STANDARD_BACKGROUND_THEME){return{backgroundColor:withTiming(interpolateColor(themeTypeIndex.get(),[0,1,2],cardSecondaryStyles),timingStandard)};}else{return{backgroundColor:withTiming(interpolateColor(themeTypeIndex.get(),[0,1,2],[bgRaised,bgRaised,bgRaised]),timingStandard)};}}';
        var4['code'] = var7;
        var _closure1_slot36 = var4;
        var4 = function ThemePicker(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var24 = var3.defaultIndex;
                var11 = var3.mobileThemes;
                var _closure2_slot0 = var11;
                var15 = var3.isPreview;
                var _closure2_slot1 = var15;
                var25 = var3.isSynced;
                var _closure2_slot2 = var25;
                var27 = var3.deviceWidth;
                var2 = var3.deviceHeight;
                var32 = var3.canGoBack;
                var _closure2_slot3 = var32;
                var5 = var3.themeSelector;
                var17 = var3.hasSaveButton;
                var _closure2_slot4 = var17;
                var22 = var3.hasMidnightNux;
                var34 = var3.headerTitle;
                var _closure2_slot5 = var34;
                var31 = var3.onSaveTheme;
                var _closure2_slot6 = var31;
                var4 = undefined;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var _closure2_slot13 = var4;
                var _closure2_slot14 = var4;
                var _closure2_slot15 = var4;
                var _closure2_slot16 = var4;
                var _closure2_slot17 = var4;
                var _closure2_slot18 = var4;
                var _closure2_slot19 = var4;
                var _closure2_slot20 = var4;
                var _closure2_slot21 = var4;
                var3 = _closure1_slot16;
                var19 = var3.bind(var4)();
                var10 = var27 > var2;
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 27;
                var2 = var12[var2];
                var3 = var8.bind(var4)(var2);
                var2 = var3.useNavigation;
                var33 = var2.bind(var3)();
                var _closure2_slot7 = var33;
                var6 = _closure1_slot1;
                var2 = 28;
                var2 = var12[var2];
                var3 = var6.bind(var4)(var2);
                var2 = 29;
                var2 = var12[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.CLIENT_THEMES_THEME_SELECTOR;
                var2 = var3.bind(var4)(var2);
                var35 = var2.analyticsLocations;
                var _closure2_slot8 = var35;
                var7 = _closure1_slot4;
                var2 = var7.useState;
                var6 = var2.bind(var7)(var24);
                var3 = _closure1_slot3;
                var2 = 2;
                var3 = var3.bind(var4)(var6, var2);
                var21 = 0;
                var9 = var3[var21];
                var _closure2_slot9 = var9;
                var20 = 1;
                var3 = var3[var20];
                var _closure2_slot10 = var3;
                var6 = var7.useState;
                var3 = 30;
                var3 = var12[var3];
                var12 = var8.bind(var4)(var3);
                var8 = var12.isThemeDark;
                var3 = var11[var24];
                var3 = var3.theme;
                var8 = var8.bind(var12)(var3);
                var3 = 'dark-content';
                if(!var8) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var3 = 'light-content';
case 8:
                var3 = var6.bind(var7)(var3);
                var6 = _closure1_slot3;
                var3 = var6.bind(var4)(var3, var2);
                var13 = var3[var21];
                var3 = var3[var20];
                _closure2_slot11 = var3;
                var16 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 31;
                var3 = var8[var3];
                var7 = var16.bind(var4)(var3);
                var3 = var7.useHeaderHeight;
                var12 = var3.bind(var7)();
                var3 = 'nitro';
                var5 = var3 === var5;
                _closure2_slot12 = var5;
                var23 = _closure1_slot4;
                var3 = var23.useState;
                var3 = var3.bind(var23)(var21);
                var3 = var6.bind(var4)(var3, var2);
                var29 = var3[var21];
                var3 = var3[var20];
                _closure2_slot13 = var3;
                var18 = var23.useCallback;
                var7 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = var1.width;
                    var2 = _closure2_slot13;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var3 = new Array(0);
                var18 = var18.bind(var23)(var7, var3);
                var26 = var23.useMemo;
                var7 = _closure1_slot32;
                var3 = new Array(0);
                var30 = var26.bind(var23)(var7, var3);
                var26 = var23.useMemo;
                var7 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = _closure1_slot9;
                        var3 = var1.theme;
                        var1 = _closure1_slot12;
                        var1 = var1.DARK;
                        if(!(var3 !== var1)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                        var4 = _closure1_slot33;
                        var3 = var4.findIndex;
                        var1 = function(arg1) {
                            var1 = _closure1_slot9;
                            var2 = var1.theme;
                            var1 = arg1;
                            var1 = var1 === var2;
                            return var1;
                        };
                        var1 = var3.bind(var4)(var1);
                        _fun0004_ip = 12; continue _fun0004;
case 10:
                        var4 = _closure1_slot33;
                        var3 = var4.indexOf;
                        var2 = _closure1_slot12;
                        var2 = var2.DARKER;
                        var1 = var3.bind(var4)(var2);
case 12:
                        return var1;
                    }
                };
                var3 = new Array(0);
                var28 = var26.bind(var23)(var7, var3);
                var3 = 20;
                var3 = var8[var3];
                var36 = var16.bind(var4)(var3);
                var26 = var36.useStateFromStores;
                var3 = _closure1_slot9;
                var7 = new Array(1);
                var7[0] = var3;
                var3 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 30;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.isThemeLight;
                        var1 = _closure1_slot9;
                        var1 = var1.systemTheme;
                        var1 = var3.bind(var4)(var1);
                        var2 = _closure1_slot12;
                        if(var1) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                        var1 = var2.DARKER;
                        _fun0005_ip = 15; continue _fun0005;
case 13:
                        var1 = var2.LIGHT;
case 15:
                        return var1;
                    }
                };
                var7 = var26.bind(var36)(var7, var3);
                _closure2_slot14 = var7;
                var3 = var23.useState;
                var3 = var3.bind(var23)(var28);
                var6 = var6.bind(var4)(var3, var2);
                var3 = var6[var21];
                var37 = var6[var20];
                _closure2_slot15 = var37;
                var6 = 32;
                var6 = var8[var6];
                var26 = var16.bind(var4)(var6);
                var23 = var26.useSegmentedControlState;
                var6 = {};
                var6['items'] = var30;
                var6['pageWidth'] = var29;
                var6['defaultIndex'] = var28;
                var30 = var23.bind(var26)(var6);
                var36 = var30.activeIndex;
                _closure2_slot16 = var36;
                var6 = 33;
                var23 = var8[var6];
                var29 = var16.bind(var4)(var23);
                var28 = var29.useAnimatedReaction;
                var26 = function Y() {
                    var2 = _closure2_slot16;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var23 = {};
                var23['activeIndex'] = var36;
                var26['__closure'] = var23;
                var23 = 12670867470872.0;
                var26['__workletHash'] = var23;
                var23 = _closure1_slot34;
                var26['__initData'] = var23;
                var23 = function J(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 33;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot15;
                    var3 = var3.bind(var4)(var2);
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.round;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var2);
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var36 = {};
                var38 = var8[var6];
                var38 = var16.bind(var4)(var38);
                var38 = var38.runOnJS;
                var36['runOnJS'] = var38;
                var36['setPendingThemeIndex'] = var37;
                var23['__closure'] = var36;
                var36 = 7003433484889.0;
                var23['__workletHash'] = var36;
                var36 = _closure1_slot35;
                var23['__initData'] = var36;
                var23 = var28.bind(var29)(var26, var23);
                var8 = var8[var6];
                var16 = var16.bind(var4)(var8);
                var8 = var16.useSharedValue;
                var23 = var11[var24];
                var26 = var23.theme;
                var23 = 'light';
                if(!(var23 === var26)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var20 = 0;
case 16:
                var8 = var8.bind(var16)(var20);
                var16 = var30.activeIndex;
                if(!var5) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var16 = var8;
case 18:
                _closure2_slot17 = var16;
                var26 = _closure1_slot4;
                var21 = var26.useMemo;
                var20 = function() {
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 34;
                    var1 = var7[var1];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var1);
                    var3 = var4.hexWithOpacity;
                    var1 = 35;
                    var2 = var7[var1];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.OverlayColors;
                    var2 = var2.LIGHT;
                    var1 = var7[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.OverlayOpacity;
                    var1 = var1.LEVEL_1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var8 = new Array(0);
                var37 = var21.bind(var26)(var20, var8);
                _closure2_slot18 = var37;
                var21 = _closure1_slot0;
                var23 = _closure1_slot2;
                var8 = var23[var6];
                var29 = var21.bind(var4)(var8);
                var28 = var29.useAnimatedStyle;
                var8 = function Ee() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = _closure2_slot0;
                        var1 = _closure2_slot12;
                        if(var1) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                        var4 = _closure2_slot17;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        _fun0006_ip = 22; continue _fun0006;
case 20:
                        var1 = _closure2_slot9;
case 22:
                        var1 = var2[var1];
                        var2 = _closure2_slot12;
                        if(!var2) { _fun0006_ip = 23; continue _fun0006 }
case 4:
                        var2 = var1.type;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 24;
                        var1 = var6[var1];
                        var8 = undefined;
                        var1 = var5.bind(var8)(var1);
                        var1 = var1.ClientThemeType;
                        var1 = var1.STANDARD_BACKGROUND_THEME;
                        if(!(var2 === var1)) { _fun0006_ip = 24; continue _fun0006 }
case 23:
                        var1 = {};
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var5 = 36;
                        var5 = var11[var5];
                        var9 = undefined;
                        var7 = var10.bind(var9)(var5);
                        var6 = var7.withTiming;
                        var5 = 33;
                        var5 = var11[var5];
                        var14 = var10.bind(var9)(var5);
                        var13 = var14.interpolateColor;
                        var12 = _closure2_slot17;
                        var5 = var12.get;
                        var12 = var5.bind(var12)();
                        var5 = _closure1_slot17;
                        var2 = [0, 1, 2];
                        var5 = var13.bind(var14)(var12, var2, var5);
                        var2 = 37;
                        var2 = var11[var2];
                        var2 = var10.bind(var9)(var2);
                        var2 = var2.timingStandard;
                        var2 = var6.bind(var7)(var5, var2);
                        var1['backgroundColor'] = var2;
                        _fun0006_ip = 25; continue _fun0006;
case 24:
                        var2 = {};
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 36;
                        var4 = var9[var4];
                        var6 = var7.bind(var8)(var4);
                        var5 = var6.withTiming;
                        var4 = 33;
                        var4 = var9[var4];
                        var12 = var7.bind(var8)(var4);
                        var11 = var12.interpolateColor;
                        var10 = _closure2_slot17;
                        var4 = var10.get;
                        var10 = var4.bind(var10)();
                        var13 = _closure2_slot18;
                        var4 = new Array(3);
                        var4[0] = var13;
                        var13 = _closure2_slot18;
                        var4[1] = var13;
                        var3 = _closure2_slot18;
                        var4[2] = var3;
                        var3 = [0, 1, 2];
                        var4 = var11.bind(var12)(var10, var3, var4);
                        var3 = 37;
                        var3 = var9[var3];
                        var3 = var7.bind(var8)(var3);
                        var3 = var3.timingStandard;
                        var3 = var5.bind(var6)(var4, var3);
                        var2['backgroundColor'] = var3;
                        var1 = var2;
case 25:
                        return var1;
                    }
                };
                var36 = {};
                var36['mobileThemes'] = var11;
                var36['isClientThemesSelector'] = var5;
                var36['currentThemeIndex'] = var9;
                var36['themeTypeIndex'] = var16;
                var20 = 24;
                var38 = var23[var20];
                var38 = var21.bind(var4)(var38);
                var38 = var38.ClientThemeType;
                var36['ClientThemeType'] = var38;
                var38 = 36;
                var38 = var23[var38];
                var38 = var21.bind(var4)(var38);
                var38 = var38.withTiming;
                var36['withTiming'] = var38;
                var38 = var23[var6];
                var38 = var21.bind(var4)(var38);
                var38 = var38.interpolateColor;
                var36['interpolateColor'] = var38;
                var38 = _closure1_slot17;
                var36['cardSecondaryStyles'] = var38;
                var38 = 37;
                var38 = var23[var38];
                var38 = var21.bind(var4)(var38);
                var38 = var38.timingStandard;
                var36['timingStandard'] = var38;
                var36['bgRaised'] = var37;
                var8['__closure'] = var36;
                var36 = 2415891570727.0;
                var8['__workletHash'] = var36;
                var36 = _closure1_slot36;
                var8['__initData'] = var36;
                var28 = var28.bind(var29)(var8);
                var8 = {};
                var29 = _closure1_slot22;
                var29 = var29.bind(var4)(var16);
                var8['textNormal'] = var29;
                var29 = _closure1_slot25;
                var29 = var29.bind(var4)(var16);
                var8['textMuted'] = var29;
                var29 = _closure1_slot31;
                var29 = var29.bind(var4)(var16);
                var8['textBrand'] = var29;
                var29 = _closure1_slot26;
                var29 = var29.bind(var4)(var16);
                var8['borderFaint'] = var29;
                var29 = _closure1_slot27;
                var29 = var29.bind(var4)(var16);
                var8['borderStrong'] = var29;
                var29 = _closure1_slot23;
                var29 = var29.bind(var4)(var16);
                var8['headerPrimary'] = var29;
                var29 = _closure1_slot24;
                var29 = var29.bind(var4)(var16);
                var8['headerSecondary'] = var29;
                var29 = _closure1_slot28;
                var29 = var29.bind(var4)(var16);
                var8['activityIcon'] = var29;
                var29 = _closure1_slot19;
                var29 = var29.bind(var4)(var16);
                var8['bgModSubtle'] = var29;
                var29 = _closure1_slot20;
                var29 = var29.bind(var4)(var16);
                var8['bgModStrong'] = var29;
                var29 = _closure1_slot29;
                var29 = var29.bind(var4)(var16);
                var8['iconHeaderSecondary'] = var29;
                var29 = _closure1_slot30;
                var29 = var29.bind(var4)(var16);
                var8['iconInteractive'] = var29;
                var29 = _closure1_slot18;
                var29 = var29.bind(var4)(var16);
                var8['bgBasePrimary'] = var29;
                var29 = _closure1_slot21;
                var29 = var29.bind(var4)(var16);
                var8['bgSurfaceOverlay'] = var29;
                var8['bgRaised'] = var28;
                _closure2_slot19 = var8;
                var36 = var26.useCallback;
                var29 = new Array(8);
                var29[0] = var9;
                var29[1] = var5;
                var29[2] = var16;
                var29[3] = var31;
                var29[4] = var11;
                var29[5] = var25;
                var29[6] = var35;
                var29[7] = var33;
                var28 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = _closure2_slot12;
                        var3 = _closure2_slot0;
                        if(var1) { _fun0007_ip = 22; continue _fun0007 }
case 21:
                        var4 = _closure2_slot17;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var7 = var3[var1];
                        _fun0007_ip = 26; continue _fun0007;
case 22:
                        var1 = _closure2_slot9;
                        var7 = var3[var1];
case 26:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 26;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.handleSaveTheme;
                        var4 = _closure2_slot8;
                        var3 = _closure2_slot2;
                        var3 = var5.bind(var6)(var7, var4, var3);
                        var4 = _closure2_slot6;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                        var3 = _closure2_slot6;
                        var3 = var3.bind(var1)();
                        _fun0007_ip = 29; continue _fun0007;
case 27:
                        var3 = _closure2_slot7;
                        var2 = var3.goBack;
                        var2 = var2.bind(var3)();
case 29:
                        return var1;
                    }
                };
                var36 = var36.bind(var26)(var28, var29);
                _closure2_slot20 = var36;
                var37 = var26.useCallback;
                var29 = new Array(6);
                var29[0] = var17;
                var29[1] = var11;
                var29[2] = var9;
                var29[3] = var15;
                var29[4] = var35;
                var29[5] = var25;
                var28 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var3 = _closure2_slot0;
                        var1 = _closure2_slot9;
                        var6 = var3[var1];
                        var1 = _closure2_slot4;
                        if(var1) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                        var1 = _closure2_slot1;
                        if(!var1) { _fun0008_ip = 32; continue _fun0008 }
case 20:
                        var4 = var6.type;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 24;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var3 = var3.ClientThemeType;
                        var3 = var3.STANDARD_BACKGROUND_THEME;
                        if(!(var4 === var3)) { _fun0008_ip = 33; continue _fun0008 }
case 32:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 26;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.handleSaveTheme;
                        var3 = _closure2_slot8;
                        var2 = _closure2_slot2;
                        var2 = var4.bind(var5)(var6, var3, var2);
                        _fun0008_ip = 30; continue _fun0008;
case 33:
                        return var1;
case 30:
                        var1 = undefined;
                        return var1;
                    }
                };
                var28 = var37.bind(var26)(var28, var29);
                _closure2_slot21 = var28;
                var37 = var26.useEffect;
                var29 = new Array(2);
                var29[0] = var33;
                var29[1] = var28;
                var28 = function() {
                    var4 = _closure2_slot7;
                    var3 = var4.addListener;
                    var2 = 'beforeRemove';
                    var1 = function() {
                        var2 = _closure2_slot21;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var28 = var37.bind(var26)(var28, var29);
                var29 = var26.useEffect;
                var28 = new Array(16);
                var28[0] = var9;
                var28[1] = var36;
                var28[2] = var35;
                var28[3] = var11;
                var28[4] = var25;
                var28[5] = var15;
                var28[6] = var34;
                var28[7] = var5;
                var28[8] = var33;
                var33 = var8.textNormal;
                var28[9] = var33;
                var33 = var8.textBrand;
                var28[10] = var33;
                var28[11] = var32;
                var28[12] = var31;
                var28[13] = var17;
                var28[14] = var3;
                var28[15] = var7;
                var17 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = _closure2_slot0;
                        var1 = _closure2_slot9;
                        var2 = var2[var1];
                        var1 = _closure2_slot12;
                        if(!var1) { _fun0009_ip = 34; continue _fun0009 }
case 3:
                        var1 = _closure2_slot1;
case 34:
                        if(!var1) { _fun0009_ip = 12; continue _fun0009 }
case 35:
                        var3 = var2.type;
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 24;
                        var4 = var4[var2];
                        var2 = undefined;
                        var2 = var7.bind(var2)(var4);
                        var2 = var2.ClientThemeType;
                        var2 = var2.STANDARD_BACKGROUND_THEME;
                        var1 = var3 !== var2;
case 12:
                        var _closure3_slot0 = var1;
                        var4 = _closure2_slot7;
                        var3 = var4.setOptions;
                        var2 = {'headerBackground': null, 'headerTransparent': true, 'headerBackVisible': false, 'headerLeft': null, 'headerTitle': null, 'headerTitleAlign': 'center'};
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 13;
                        var7 = var7[var1];
                        var1 = undefined;
                        var8 = var8.bind(var1)(var7);
                        var7 = var8.isIOS;
                        var8 = var7.bind(var8)();
                        var7 = undefined;
                        if(var8) { _fun0009_ip = 36; continue _fun0009 }
case 37:
                        var7 = function() {
                            var4 = _closure1_slot13;
                            var3 = _closure1_slot5;
                            var2 = undefined;
                            var1 = {};
                            var1 = var4.bind(var2)(var3, var1);
                            return var1;
                        };
case 36:
                        var2['headerBackground'] = var7;
                        var7 = function headerLeft() {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                var1 = _closure2_slot3;
                                if(var1) { _fun0010_ip = 21; continue _fun0010 }
case 38:
                                var1 = null;
                                return var1;
case 21:
                                var6 = _closure1_slot38;
                                var3 = _closure2_slot0;
                                var2 = _closure2_slot9;
                                var1 = _closure2_slot14;
                                var4 = undefined;
                                var6 = var6.bind(var4)(var3, var2, var1);
                                var3 = _closure1_slot13;
                                var2 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var1 = 38;
                                var1 = var8[var1];
                                var1 = var2.bind(var4)(var1);
                                var2 = var1.ThemeContextProvider;
                                var1 = {};
                                var1['theme'] = var6;
                                var6 = _closure1_slot1;
                                var5 = 39;
                                var5 = var8[var5];
                                var6 = var6.bind(var4)(var5);
                                var5 = {};
                                var7 = _closure2_slot7;
                                var5['navigation'] = var7;
                                var5 = var3.bind(var4)(var6, var5);
                                var1['children'] = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var1;
                            }
                        };
                        var2['headerLeft'] = var7;
                        var7 = function headerTitle() {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                var4 = _closure1_slot13;
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 40;
                                var1 = var3[var1];
                                var3 = undefined;
                                var1 = var2.bind(var3)(var1);
                                var2 = var1.Text;
                                var1 = {'animated': true, 'variant': 'redesign/heading-18/bold'};
                                var7 = _closure2_slot19;
                                var7 = var7.textNormal;
                                var1['style'] = var7;
                                var8 = _closure2_slot5;
                                var7 = null;
                                if(!(var7 == var8)) { _fun0011_ip = 39; continue _fun0011 }
case 32:
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var5 = 15;
                                var7 = var10[var5];
                                var7 = var9.bind(var3)(var7);
                                var8 = var7.intl;
                                var7 = var8.string;
                                var5 = var10[var5];
                                var5 = var9.bind(var3)(var5);
                                var5 = var5.t;
                                var5 = var5.XAS5Pi;
                                var5 = var7.bind(var8)(var5);
                                _fun0011_ip = 40; continue _fun0011;
case 39:
                                var5 = _closure2_slot5;
case 40:
                                var1['children'] = var5;
                                var1 = var4.bind(var3)(var2, var1);
                                return var1;
                            }
                        };
                        var2['headerTitle'] = var7;
                        var7 = _closure2_slot4;
                        var5 = undefined;
                        if(!var7) { _fun0009_ip = 41; continue _fun0009 }
case 42:
                        var5 = function() {
                            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                                var4 = _closure1_slot13;
                                var6 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var1 = 41;
                                var1 = var10[var1];
                                var3 = undefined;
                                var1 = var6.bind(var3)(var1);
                                var2 = var1.PressableOpacity;
                                var1 = {};
                                var5 = 8;
                                var1['hitSlop'] = var5;
                                var5 = _closure3_slot0;
                                var1['disabled'] = var5;
                                var5 = _closure2_slot20;
                                var1['onPress'] = var5;
                                var5 = 40;
                                var5 = var10[var5];
                                var5 = var6.bind(var3)(var5);
                                var6 = var5.Text;
                                var5 = {'animated': true, 'variant': 'text-md/semibold'};
                                var8 = _closure2_slot19;
                                var10 = var8.textBrand;
                                var8 = new Array(2);
                                var8[0] = var10;
                                var9 = _closure3_slot0;
                                if(!var9) { _fun0012_ip = 43; continue _fun0012 }
case 33:
                                var10 = {};
                                var11 = 0.4;
                                var10['opacity'] = var11;
                                var9 = var10;
case 43:
                                var8[1] = var9;
                                var5['style'] = var8;
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var7 = 15;
                                var8 = var11[var7];
                                var8 = var10.bind(var3)(var8);
                                var9 = var8.intl;
                                var8 = var9.string;
                                var7 = var11[var7];
                                var7 = var10.bind(var3)(var7);
                                var7 = var7.t;
                                var7 = var7.i4jeWR;
                                var7 = var8.bind(var9)(var7);
                                var5['children'] = var7;
                                var5 = var4.bind(var3)(var6, var5);
                                var1['children'] = var5;
                                var1 = var4.bind(var3)(var2, var1);
                                return var1;
                            }
                        };
case 41:
                        var2['headerRight'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var17 = var29.bind(var26)(var17, var28);
                var17 = 42;
                var17 = var23[var17];
                var23 = var21.bind(var4)(var17);
                var21 = var23.useNavigatorBackPressHandler;
                var17 = function() {
                    var1 = _closure2_slot3;
                    var1 = !var1;
                    return var1;
                };
                var17 = var21.bind(var23)(var17);
                var23 = var26.useCallback;
                var21 = new Array(1);
                var21[0] = var9;
                var17 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var3 = arg1;
                        var2 = _closure2_slot9;
                        if(!(var3 !== var2)) { _fun0013_ip = 44; continue _fun0013 }
case 21:
                        var1 = _closure2_slot10;
                        var4 = undefined;
                        var1 = var1.bind(var4)(var3);
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 43;
                        var1 = var5[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.updateMobilePendingThemeIndex;
                        var1 = var1.bind(var2)(var3);
case 44:
                        var1 = undefined;
                        return var1;
                    }
                };
                var21 = var23.bind(var26)(var17, var21);
                var23 = var27;
                if(!var10) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                var17 = global;
                var26 = var17.Math;
                var17 = var26.floor;
                var2 = var27 / var2;
                var23 = var17.bind(var26)(var2);
case 45:
                if(var5) { _fun0003_ip = 47; continue _fun0003 }
case 48:
                var2 = _closure1_slot38;
                var27 = var2.bind(var4)(var11, var3, var7);
                var17 = _closure1_slot14;
                var3 = _closure1_slot5;
                var2 = {};
                var26 = var19.segmentedControlContainer;
                var2['style'] = var26;
                var2['onLayout'] = var18;
                var28 = _closure1_slot13;
                var32 = _closure1_slot0;
                var33 = _closure1_slot2;
                var18 = 38;
                var18 = var33[var18];
                var18 = var32.bind(var4)(var18);
                var26 = var18.ThemeContextProvider;
                var18 = {};
                var18['theme'] = var27;
                var27 = 45;
                var27 = var33[var27];
                var27 = var32.bind(var4)(var27);
                var29 = var27.SegmentedControl;
                var27 = {};
                var31 = 'experimental_Large';
                var27['variant'] = var31;
                var27['state'] = var30;
                var27 = var28.bind(var4)(var29, var27);
                var18['children'] = var27;
                var26 = var28.bind(var4)(var26, var18);
                var18 = new Array(2);
                var18[0] = var26;
                var26 = 40;
                var26 = var33[var26];
                var26 = var32.bind(var4)(var26);
                var27 = var26.Text;
                var26 = {'animated': true, 'variant': 'text-xs/medium'};
                var30 = var8.headerSecondary;
                var29 = new Array(2);
                var29[0] = var30;
                var30 = var19.textCentered;
                var29[1] = var30;
                var26['style'] = var29;
                var29 = 15;
                var30 = var33[var29];
                var30 = var32.bind(var4)(var30);
                var31 = var30.intl;
                var30 = var31.string;
                var29 = var33[var29];
                var29 = var32.bind(var4)(var29);
                var29 = var29.t;
                var29 = var29.d5Gu9A;
                var29 = var30.bind(var31)(var29);
                var26['children'] = var29;
                var26 = var28.bind(var4)(var27, var26);
                var18[1] = var26;
                var2['children'] = var18;
                var18 = var17.bind(var4)(var3, var2);
                _fun0003_ip = 49; continue _fun0003;
case 47:
                var17 = _closure1_slot13;
                var3 = _closure1_slot1;
                var26 = _closure1_slot2;
                var2 = 44;
                var2 = var26[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['themes'] = var11;
                var2['currentThemeIndex'] = var9;
                var2['isPreview'] = var15;
                var2['isSynced'] = var25;
                var2['defaultIndex'] = var24;
                var2['deviceWidth'] = var23;
                var2['animatedStyles'] = var8;
                var2['hasMidnightNux'] = var22;
                var2['onThemeSelected'] = var21;
                var18 = var17.bind(var4)(var3, var2);
case 49:
                var17 = _closure1_slot4;
                var3 = var17.useEffect;
                var2 = new Array(4);
                var2[0] = var9;
                var2[1] = var11;
                var2[2] = var16;
                var2[3] = var7;
                var1 = function() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var2 = _closure2_slot0;
                        var1 = _closure2_slot9;
                        var1 = var2[var1];
                        var4 = var1.theme;
                        var2 = 'system';
                        if(!(var2 !== var4)) { _fun0014_ip = 50; continue _fun0014 }
case 20:
                        var1 = var1.theme;
                        _fun0014_ip = 51; continue _fun0014;
case 50:
                        var4 = _closure2_slot14;
                        var2 = null;
                        if(!(var2 == var4)) { _fun0014_ip = 52; continue _fun0014 }
case 2:
                        var2 = _closure1_slot12;
                        var2 = var2.DARKER;
                        _fun0014_ip = 15; continue _fun0014;
case 52:
                        var2 = _closure2_slot14;
case 15:
                        var1 = var2;
case 51:
                        var4 = _closure1_slot12;
                        var4 = var4.DARK;
                        if(!(var1 === var4)) { _fun0014_ip = 53; continue _fun0014 }
case 54:
                        var4 = _closure1_slot12;
                        var1 = var4.DARKER;
case 53:
                        var6 = _closure2_slot17;
                        var5 = var6.set;
                        var7 = _closure1_slot33;
                        var4 = var7.indexOf;
                        var4 = var4.bind(var7)(var1);
                        var4 = var5.bind(var6)(var4);
                        var3 = _closure2_slot11;
                        var2 = _closure1_slot12;
                        var4 = var2.LIGHT;
                        var2 = 'light-content';
                        if(!(var1 === var4)) { _fun0014_ip = 55; continue _fun0014 }
case 56:
                        var2 = 'dark-content';
case 55:
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var1 = var3.bind(var17)(var1, var2);
                var7 = var17.useMemo;
                var2 = _closure1_slot1;
                var16 = _closure1_slot2;
                var1 = 46;
                var1 = var16[var1];
                var3 = var2.bind(var4)(var1);
                var1 = new Array(0);
                var7 = var7.bind(var17)(var3, var1);
                var3 = _closure1_slot13;
                var1 = 47;
                var1 = var16[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1['themes'] = var11;
                var1['themeIndex'] = var9;
                var1['animatedStyles'] = var8;
                var1['data'] = var7;
                var1['useGradientBackground'] = var5;
                var7 = var5;
                if(!var7) { _fun0003_ip = 57; continue _fun0003 }
case 58:
                var7 = var15;
case 57:
                if(!var7) { _fun0003_ip = 59; continue _fun0003 }
case 60:
                var15 = var11[var9];
                var16 = var15.type;
                var17 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var20];
                var15 = var17.bind(var4)(var15);
                var15 = var15.ClientThemeType;
                var15 = var15.STANDARD_BACKGROUND_THEME;
                var7 = var16 !== var15;
case 59:
                var1['isNitroLocked'] = var7;
                var15 = var3.bind(var4)(var2, var1);
                var3 = _closure1_slot14;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var2.bind(var4)(var1);
                var2 = var1.View;
                var1 = {};
                var6 = new Array(2);
                var7 = {'width': '100%', 'height': '100%'};
                var6[0] = var7;
                var7 = !var5;
                if(var5) { _fun0003_ip = 61; continue _fun0003 }
case 62:
                var7 = var8.bgBasePrimary;
case 61:
                var6[1] = var7;
                var1['style'] = var6;
                var6 = null;
                if(!var5) { _fun0003_ip = 63; continue _fun0003 }
case 64:
                var8 = _closure1_slot13;
                var7 = _closure1_slot1;
                var16 = _closure1_slot2;
                var5 = 48;
                var5 = var16[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var5['themes'] = var11;
                var5['themeIndex'] = var9;
                var9 = true;
                var5['isDimmed'] = var9;
                var6 = var8.bind(var4)(var7, var5);
case 63:
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot14;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 49;
                var6 = var9[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.SafeAreaPaddingView;
                var6 = {};
                var16 = true;
                var6['bottom'] = var16;
                var11 = var19.container;
                var9 = new Array(3);
                var9[0] = var11;
                var11 = var10;
                if(!var11) { _fun0003_ip = 65; continue _fun0003 }
case 66:
                var11 = var19.landscapeContainer;
case 65:
                var9[1] = var11;
                var11 = {};
                var11['marginTop'] = var12;
                var9[2] = var11;
                var6['style'] = var9;
                var12 = _closure1_slot13;
                var11 = _closure1_slot1;
                var17 = _closure1_slot2;
                var9 = 50;
                var9 = var17[var9];
                var11 = var11.bind(var4)(var9);
                var9 = {};
                var9['animated'] = var16;
                var9['barStyle'] = var13;
                var11 = var12.bind(var4)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var12 = _closure1_slot14;
                var11 = _closure1_slot15;
                var13 = {};
                if(var10) { _fun0003_ip = 67; continue _fun0003 }
case 68:
                var10 = new Array(2);
                var10[0] = var15;
                var10[1] = var18;
                var13['children'] = var10;
                var10 = var13;
                _fun0003_ip = 69; continue _fun0003;
case 67:
                var17 = _closure1_slot13;
                var16 = _closure1_slot5;
                var14 = {};
                var20 = var19.landscapePreview;
                var14['style'] = var20;
                var14['children'] = var15;
                var15 = var17.bind(var4)(var16, var14);
                var14 = new Array(2);
                var14[0] = var15;
                var15 = {};
                var19 = var19.landscapeSelector;
                var15['style'] = var19;
                var15['children'] = var18;
                var15 = var17.bind(var4)(var16, var15);
                var14[1] = var15;
                var13['children'] = var14;
                var10 = var13;
case 69:
                var10 = var12.bind(var4)(var11, var10);
                var9[1] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot37 = var4;
        var4 = 51;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/user_settings/native/appearance/SettingsAppearanceThemePickerScreen.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function _default(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var1 = arg1;
                var8 = var1.onSaveTheme;
                var5 = var1.headerTitle;
                var10 = var1.canGoBack;
                var4 = undefined;
                if(!(var10 === var4)) { _fun0015_ip = 35; continue _fun0015 }
case 20:
                var10 = true;
case 35:
                var9 = var1.themeSelector;
                if(!(var9 === var4)) { _fun0015_ip = 2; continue _fun0015 }
case 26:
                var9 = 'nitro';
case 2:
                var7 = var1.hasSaveButton;
                if(!(var7 === var4)) { _fun0015_ip = 44; continue _fun0015 }
case 70:
                var7 = false;
case 44:
                var6 = var1.hasMidnightNux;
                if(!(var6 === var4)) { _fun0015_ip = 71; continue _fun0015 }
case 51:
                var6 = false;
case 71:
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var3 = 19;
                var3 = var17[var3];
                var3 = var16.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var12 = var3.width;
                var11 = var3.height;
                var13 = _closure1_slot0;
                var3 = 20;
                var3 = var17[var3];
                var18 = var13.bind(var4)(var3);
                var15 = var18.useStateFromStoresObject;
                var3 = _closure1_slot6;
                var14 = new Array(5);
                var14[0] = var3;
                var3 = _closure1_slot9;
                var14[1] = var3;
                var3 = _closure1_slot10;
                var14[2] = var3;
                var3 = _closure1_slot8;
                var14[3] = var3;
                var3 = _closure1_slot7;
                var14[4] = var3;
                var3 = function() {
                    var1 = {};
                    var3 = _closure1_slot6;
                    var4 = var3.gradientPreset;
                    var1['userPreset'] = var4;
                    var3 = var3.isPreview;
                    var1['isPreview'] = var3;
                    var3 = _closure1_slot10;
                    var4 = var3.useSystemTheme;
                    var3 = _closure1_slot11;
                    var3 = var3.ON;
                    var3 = var4 === var3;
                    var1['usingSystemTheme'] = var3;
                    var5 = _closure1_slot8;
                    var4 = var5.shouldSync;
                    var3 = 'appearance';
                    var3 = var4.bind(var5)(var3);
                    var1['isSynced'] = var3;
                    var3 = _closure1_slot9;
                    var3 = var3.theme;
                    var1['userTheme'] = var3;
                    var3 = _closure1_slot7;
                    var2 = var3.hasCustomTheme;
                    var2 = var2.bind(var3)();
                    var1['hasCustomTheme'] = var2;
                    return var1;
                };
                var3 = var15.bind(var18)(var14, var3);
                var14 = var3.isSynced;
                var15 = var3.usingSystemTheme;
                _closure2_slot0 = var15;
                var21 = var3.userPreset;
                _closure2_slot1 = var21;
                var15 = var3.isPreview;
                var18 = var3.userTheme;
                _closure2_slot2 = var18;
                var3 = var3.hasCustomTheme;
                _closure2_slot3 = var3;
                var3 = 21;
                var3 = var17[var3];
                var13 = var13.bind(var4)(var3);
                var3 = var13.useAllMobileThemes;
                var13 = var3.bind(var13)();
                _closure2_slot4 = var13;
                var3 = 22;
                var3 = var17[var3];
                var18 = var16.bind(var4)(var3);
                var3 = 'SettingsAppearanceThemePickerScreen';
                var3 = var18.bind(var4)(var3);
                _closure2_slot5 = var3;
                var19 = _closure1_slot4;
                var20 = var19.useMemo;
                var18 = new Array(2);
                var18[0] = var21;
                var18[1] = var13;
                var13 = function() {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var4 = _closure2_slot1;
                        var3 = null;
                        var3 = var3 == var4;
                        var6 = undefined;
                        var4 = undefined;
                        if(var3) { _fun0016_ip = 35; continue _fun0016 }
case 31:
                        var3 = _closure2_slot1;
                        var4 = var3.id;
case 35:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 23;
                        var3 = var7[var3];
                        var3 = var5.bind(var6)(var3);
                        var3 = var3.BackgroundGradientPresetId;
                        var3 = var3.EASTER_EGG;
                        var3 = var4 === var3;
                        var _closure3_slot0 = var3;
                        var3 = _closure2_slot4;
                        var2 = var3.filter;
                        var1 = function(arg1) {
                            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                                var3 = arg1;
                                var4 = var3.type;
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var1 = 24;
                                var1 = var5[var1];
                                var5 = undefined;
                                var1 = var6.bind(var5)(var1);
                                var1 = var1.ClientThemeType;
                                var1 = var1.BACKGROUND_GRADIENT_PRESET;
                                var1 = var4 !== var1;
                                if(var1) { _fun0017_ip = 72; continue _fun0017 }
case 10:
                                var3 = var3.id;
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var2 = 23;
                                var2 = var6[var2];
                                var2 = var4.bind(var5)(var2);
                                var2 = var2.BackgroundGradientPresetId;
                                var2 = var2.EASTER_EGG;
                                var1 = var3 !== var2;
case 72:
                                if(var1) { _fun0017_ip = 73; continue _fun0017 }
case 74:
                                var1 = _closure3_slot0;
case 73:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var20 = var20.bind(var19)(var13, var18);
                _closure2_slot6 = var20;
                var18 = var19.useMemo;
                var13 = new Array(2);
                var13[0] = var20;
                var13[1] = var3;
                var3 = function() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var1 = _closure2_slot5;
                        var2 = _closure2_slot6;
                        if(var1) { _fun0018_ip = 75; continue _fun0018 }
case 21:
                        var1 = 1;
                        var4 = var2[var1];
                        var1 = new Array(2);
                        var1[0] = var4;
                        var5 = _closure2_slot6;
                        var4 = 0;
                        var4 = var5[var4];
                        var1[1] = var4;
                        var5 = _closure2_slot6;
                        var3 = var5.slice;
                        var4 = 2;
                        var7 = var3.bind(var5)(var4);
                        var8 = var1;
                        var6 = var4;
                        var3 = arraySpread(var8, var7, var6);
                        _fun0018_ip = 32; continue _fun0018;
case 75:
                        var1 = var2;
case 32:
                        return var1;
                    }
                };
                var13 = var18.bind(var19)(var3, var13);
                _closure2_slot7 = var13;
                var3 = 25;
                var3 = var17[var3];
                var3 = var16.bind(var4)(var3);
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 26;
                    var2 = var2[var1];
                    var1 = undefined;
                    var7 = var3.bind(var1)(var2);
                    var6 = var7.getUserThemeIndex;
                    var12 = _closure2_slot1;
                    var11 = _closure2_slot0;
                    var10 = _closure2_slot7;
                    var9 = _closure2_slot2;
                    var8 = _closure2_slot3;
                    var13 = var7;
                    var1 = var13[var6](var12, var11, var10, var9, var8, var7);
                    return var1;
                };
                var16 = var3.bind(var4)(var2);
                var3 = _closure1_slot13;
                var2 = _closure1_slot37;
                var1 = {};
                var1['defaultIndex'] = var16;
                var1['isPreview'] = var15;
                var1['isSynced'] = var14;
                var1['mobileThemes'] = var13;
                var1['deviceWidth'] = var12;
                var1['deviceHeight'] = var11;
                var1['canGoBack'] = var10;
                var1['themeSelector'] = var9;
                var1['onSaveTheme'] = var8;
                var1['hasSaveButton'] = var7;
                var1['hasMidnightNux'] = var6;
                var1['headerTitle'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();