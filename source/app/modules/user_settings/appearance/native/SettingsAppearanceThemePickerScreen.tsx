// app/modules/user_settings/appearance/native/SettingsAppearanceThemePickerScreen.tsx
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
        var _closure1_slot42 = var1;
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
        var7 = var4.SystemTheme;
        var _closure1_slot11 = var7;
        var4 = var4.SystemThemeState;
        var _closure1_slot12 = var4;
        var4 = 9;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.ThemeTypes;
        var _closure1_slot13 = var4;
        var7 = 10;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
        var8 = var7.jsx;
        var _closure1_slot14 = var8;
        var8 = var7.jsxs;
        var _closure1_slot15 = var8;
        var7 = var7.Fragment;
        var _closure1_slot16 = var7;
        var7 = 11;
        var7 = var6[var7];
        var9 = var5.bind(var1)(var7);
        var8 = var9.createStyles;
        var7 = {};
        var12 = {'flex': 1, 'paddingHorizontal': null, 'alignItems': 'center'};
        var10 = 12;
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.space;
        var13 = var13.PX_16;
        var12['paddingHorizontal'] = var13;
        var13 = 'center';
        var16 = var6[var10];
        var16 = var11.bind(var1)(var16);
        var16 = var16.space;
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
        var16 = var16.space;
        var15 = var16.PX_16;
case 6:
        var12['marginBottom'] = var15;
        var7['container'] = var12;
        var12 = {};
        var15 = 'row';
        var12['flexDirection'] = var15;
        var15 = var6[var10];
        var15 = var11.bind(var1)(var15);
        var15 = var15.space;
        var15 = var15.PX_16;
        var12['gap'] = var15;
        var7['landscapeContainer'] = var12;
        var12 = {};
        var12['flex'] = var14;
        var7['landscapePreview'] = var12;
        var12 = {'flex': 1, 'justifyContent': 'center', 'overflow': 'hidden'};
        var7['landscapeSelector'] = var12;
        var12 = {'width': '100%', 'gap': null, 'alignItems': 'center'};
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.space;
        var14 = var14.PX_16;
        var12['gap'] = var14;
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.space;
        var14 = var14.PX_16;
        var12['paddingHorizontal'] = var14;
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.space;
        var14 = var14.PX_16;
        var12['marginBottom'] = var14;
        var7['segmentedControlContainer'] = var12;
        var12 = {};
        var12['textAlign'] = var13;
        var7['textCentered'] = var12;
        var7 = var8.bind(var9)(var7);
        var _closure1_slot17 = var7;
        var7 = var4.LIGHT;
        var9 = new Array(4);
        var9[0] = var7;
        var7 = var4.DARKER;
        var9[1] = var7;
        var7 = var4.MIDNIGHT;
        var9[2] = var7;
        var4 = var4.DARK;
        var9[3] = var4;
        var _closure1_slot18 = var9;
        var7 = var9.map;
        var4 = function(arg1) {
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 12;
            var3 = var6[var1];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var4 = var3.internal;
            var3 = var4.resolveSemanticColor;
            var1 = var6[var1];
            var1 = var5.bind(var2)(var1);
            var1 = var1.colors;
            var2 = var1.CARD_SECONDARY_BG;
            var1 = arg1;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var4 = var7.bind(var9)(var4);
        var _closure1_slot19 = var4;
        var7 = var9.map;
        var4 = function(arg1, arg2) {
            var1 = arg2;
            return var1;
        };
        var4 = var7.bind(var9)(var4);
        var _closure1_slot20 = var4;
        var4 = 14;
        var7 = var6[var4];
        var12 = var5.bind(var1)(var7);
        var8 = var12.createAnimatedThemedStyles;
        var7 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.BACKGROUND_BASE_LOW;
        var7['backgroundColor'] = var13;
        var7 = var8.bind(var12)(var7, var9);
        var _closure1_slot21 = var7;
        var7 = var6[var4];
        var12 = var5.bind(var1)(var7);
        var8 = var12.createAnimatedThemedStyles;
        var7 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.BACKGROUND_MOD_SUBTLE;
        var7['backgroundColor'] = var13;
        var7 = var8.bind(var12)(var7, var9);
        var _closure1_slot22 = var7;
        var7 = var6[var4];
        var12 = var5.bind(var1)(var7);
        var8 = var12.createAnimatedThemedStyles;
        var7 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.BACKGROUND_MOD_STRONG;
        var7['backgroundColor'] = var13;
        var7 = var8.bind(var12)(var7, var9);
        var _closure1_slot23 = var7;
        var7 = var6[var4];
        var12 = var5.bind(var1)(var7);
        var8 = var12.createAnimatedThemedStyles;
        var7 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.BACKGROUND_SURFACE_HIGHEST;
        var7['backgroundColor'] = var13;
        var7 = var8.bind(var12)(var7, var9);
        var _closure1_slot24 = var7;
        var7 = var6[var4];
        var12 = var5.bind(var1)(var7);
        var8 = var12.createAnimatedThemedStyles;
        var7 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.BACKGROUND_SURFACE_HIGH;
        var7['backgroundColor'] = var13;
        var7 = var8.bind(var12)(var7, var9);
        var _closure1_slot25 = var7;
        var7 = var6[var4];
        var12 = var5.bind(var1)(var7);
        var8 = var12.createAnimatedThemedStyles;
        var7 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.TEXT_DEFAULT;
        var7['color'] = var13;
        var7 = var8.bind(var12)(var7, var9);
        var _closure1_slot26 = var7;
        var7 = var6[var4];
        var12 = var5.bind(var1)(var7);
        var8 = var12.createAnimatedThemedStyles;
        var7 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.MOBILE_TEXT_HEADING_PRIMARY;
        var7['color'] = var13;
        var7 = var8.bind(var12)(var7, var9);
        var _closure1_slot27 = var7;
        var7 = var6[var4];
        var12 = var5.bind(var1)(var7);
        var8 = var12.createAnimatedThemedStyles;
        var7 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.TEXT_SUBTLE;
        var7['color'] = var13;
        var7 = var8.bind(var12)(var7, var9);
        var _closure1_slot28 = var7;
        var7 = var6[var4];
        var12 = var5.bind(var1)(var7);
        var8 = var12.createAnimatedThemedStyles;
        var7 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.TEXT_MUTED;
        var7['color'] = var13;
        var7 = var8.bind(var12)(var7, var9);
        var _closure1_slot29 = var7;
        var7 = var6[var4];
        var12 = var5.bind(var1)(var7);
        var8 = var12.createAnimatedThemedStyles;
        var7 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.BORDER_MUTED;
        var7['borderColor'] = var13;
        var7 = var8.bind(var12)(var7, var9);
        var _closure1_slot30 = var7;
        var7 = var6[var4];
        var12 = var5.bind(var1)(var7);
        var8 = var12.createAnimatedThemedStyles;
        var7 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.BORDER_STRONG;
        var7['borderColor'] = var13;
        var7 = var8.bind(var12)(var7, var9);
        var _closure1_slot31 = var7;
        var7 = var6[var4];
        var12 = var5.bind(var1)(var7);
        var8 = var12.createAnimatedThemedStyles;
        var7 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.BORDER_NORMAL;
        var7['borderColor'] = var13;
        var7 = var8.bind(var12)(var7, var9);
        var _closure1_slot32 = var7;
        var7 = var6[var4];
        var12 = var5.bind(var1)(var7);
        var8 = var12.createAnimatedThemedStyles;
        var7 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.REDESIGN_ACTIVITY_CARD_BADGE_ICON;
        var7['tintColor'] = var13;
        var7 = var8.bind(var12)(var7, var9);
        var _closure1_slot33 = var7;
        var7 = var6[var4];
        var12 = var5.bind(var1)(var7);
        var8 = var12.createAnimatedThemedStyles;
        var7 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.TEXT_SUBTLE;
        var7['tintColor'] = var13;
        var7 = var8.bind(var12)(var7, var9);
        var _closure1_slot34 = var7;
        var7 = var6[var4];
        var12 = var5.bind(var1)(var7);
        var8 = var12.createAnimatedThemedStyles;
        var7 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.INTERACTIVE_TEXT_DEFAULT;
        var7['tintColor'] = var13;
        var7 = var8.bind(var12)(var7, var9);
        var _closure1_slot35 = var7;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createAnimatedThemedStyles;
        var4 = {};
        var10 = var6[var10];
        var10 = var11.bind(var1)(var10);
        var10 = var10.colors;
        var10 = var10.TEXT_BRAND;
        var4['color'] = var10;
        var4 = var7.bind(var8)(var4, var9);
        var _closure1_slot36 = var4;
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
            var4 = _closure1_slot13;
            var3 = var4.LIGHT;
            var2['id'] = var3;
            var6 = _closure1_slot14;
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
        var _closure1_slot37 = var4;
        var4 = {};
        var7 = 'function SettingsAppearanceThemePickerScreenTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}';
        var4['code'] = var7;
        var _closure1_slot38 = var4;
        var4 = {};
        var7 = 'function SettingsAppearanceThemePickerScreenTsx2(activeIndex){const{runOnJS,setPendingThemeIndex}=this.__closure;runOnJS(setPendingThemeIndex)(Math.round(activeIndex));}';
        var4['code'] = var7;
        var _closure1_slot39 = var4;
        var4 = {};
        var7 = 'function SettingsAppearanceThemePickerScreenTsx3(){const{mobileThemes,isClientThemesSelector,currentThemeIndex,themeTypeIndex,ClientThemeType,withTiming,interpolateColor,cardSecondaryStops,cardSecondaryStyles,timingStandard,bgRaised}=this.__closure;const theme=mobileThemes[isClientThemesSelector?currentThemeIndex:themeTypeIndex.get()];if(!isClientThemesSelector||theme.type===ClientThemeType.STANDARD_BACKGROUND_THEME){return{backgroundColor:withTiming(interpolateColor(themeTypeIndex.get(),cardSecondaryStops,cardSecondaryStyles),timingStandard)};}else{return{backgroundColor:withTiming(bgRaised,timingStandard)};}}';
        var4['code'] = var7;
        var _closure1_slot40 = var4;
        var4 = function ThemePicker(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var25 = var3.defaultIndex;
                var _closure2_slot0 = var25;
                var11 = var3.mobileThemes;
                var _closure2_slot1 = var11;
                var15 = var3.isPreview;
                var _closure2_slot2 = var15;
                var26 = var3.isSynced;
                var _closure2_slot3 = var26;
                var28 = var3.deviceWidth;
                var2 = var3.deviceHeight;
                var33 = var3.canGoBack;
                var _closure2_slot4 = var33;
                var5 = var3.themeSelector;
                var21 = var3.hasSaveButton;
                var _closure2_slot5 = var21;
                var23 = var3.hasMidnightNux;
                var35 = var3.headerTitle;
                var _closure2_slot6 = var35;
                var32 = var3.onSaveTheme;
                var _closure2_slot7 = var32;
                var7 = var3.isRefreshEnabled;
                var _closure2_slot8 = var7;
                var29 = var3.mode;
                var _closure2_slot9 = var29;
                var4 = undefined;
                var _closure2_slot14 = var4;
                var _closure2_slot15 = var4;
                var _closure2_slot16 = var4;
                var _closure2_slot17 = var4;
                var _closure2_slot18 = var4;
                var _closure2_slot19 = var4;
                var _closure2_slot20 = var4;
                var _closure2_slot21 = var4;
                var _closure2_slot22 = var4;
                var _closure2_slot23 = var4;
                var _closure2_slot24 = var4;
                var3 = _closure1_slot17;
                var19 = var3.bind(var4)();
                var10 = var28 > var2;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 28;
                var2 = var13[var2];
                var3 = var12.bind(var4)(var2);
                var2 = var3.useNavigation;
                var34 = var2.bind(var3)();
                var _closure2_slot10 = var34;
                var6 = _closure1_slot1;
                var2 = 29;
                var2 = var13[var2];
                var3 = var6.bind(var4)(var2);
                var2 = 30;
                var2 = var13[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.CLIENT_THEMES_THEME_SELECTOR;
                var2 = var3.bind(var4)(var2);
                var36 = var2.analyticsLocations;
                var _closure2_slot11 = var36;
                var8 = _closure1_slot4;
                var2 = var8.useState;
                var6 = var2.bind(var8)(var25);
                var3 = _closure1_slot3;
                var2 = 2;
                var3 = var3.bind(var4)(var6, var2);
                var22 = 0;
                var9 = var3[var22];
                var _closure2_slot12 = var9;
                var20 = 1;
                var3 = var3[var20];
                var _closure2_slot13 = var3;
                var6 = var8.useState;
                var3 = 25;
                var3 = var13[var3];
                var13 = var12.bind(var4)(var3);
                var12 = var13.isThemeDark;
                var3 = var11[var25];
                var3 = var3.theme;
                var12 = var12.bind(var13)(var3);
                var3 = 'dark-content';
                if(!var12) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var3 = 'light-content';
case 8:
                var3 = var6.bind(var8)(var3);
                var6 = _closure1_slot3;
                var3 = var6.bind(var4)(var3, var2);
                var13 = var3[var22];
                var3 = var3[var20];
                _closure2_slot14 = var3;
                var17 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 31;
                var3 = var8[var3];
                var12 = var17.bind(var4)(var3);
                var3 = var12.useHeaderHeight;
                var12 = var3.bind(var12)();
                var3 = 'nitro';
                var5 = var3 === var5;
                _closure2_slot15 = var5;
                var24 = _closure1_slot4;
                var3 = var24.useState;
                var3 = var3.bind(var24)(var22);
                var3 = var6.bind(var4)(var3, var2);
                var31 = var3[var22];
                var3 = var3[var20];
                _closure2_slot16 = var3;
                var18 = var24.useCallback;
                var16 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = var1.width;
                    var2 = _closure2_slot16;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var3 = new Array(0);
                var18 = var18.bind(var24)(var16, var3);
                var27 = var24.useMemo;
                var16 = _closure1_slot37;
                var3 = new Array(0);
                var37 = var27.bind(var24)(var16, var3);
                var27 = var24.useMemo;
                var16 = new Array(1);
                var16[0] = var7;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = _closure1_slot9;
                        var3 = var1.theme;
                        var1 = _closure1_slot13;
                        var1 = var1.DARK;
                        if(!(var3 === var1)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                        var1 = _closure2_slot8;
                        if(var1) { _fun0004_ip = 10; continue _fun0004 }
case 12:
                        var4 = _closure1_slot18;
                        var3 = var4.indexOf;
                        var1 = _closure1_slot13;
                        var1 = var1.DARKER;
                        var1 = var3.bind(var4)(var1);
                        _fun0004_ip = 13; continue _fun0004;
case 10:
                        var4 = _closure1_slot18;
                        var3 = var4.findIndex;
                        var2 = function(arg1) {
                            var1 = _closure1_slot9;
                            var2 = var1.theme;
                            var1 = arg1;
                            var1 = var1 === var2;
                            return var1;
                        };
                        var1 = var3.bind(var4)(var2);
case 13:
                        return var1;
                    }
                };
                var30 = var27.bind(var24)(var3, var16);
                var3 = 20;
                var3 = var8[var3];
                var38 = var17.bind(var4)(var3);
                var27 = var38.useStateFromStores;
                var3 = _closure1_slot9;
                var16 = new Array(1);
                var16[0] = var3;
                var3 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 25;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.isThemeLight;
                        var1 = _closure1_slot9;
                        var1 = var1.systemTheme;
                        var1 = var3.bind(var4)(var1);
                        var2 = _closure1_slot13;
                        if(var1) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                        var1 = var2.DARKER;
                        _fun0005_ip = 16; continue _fun0005;
case 14:
                        var1 = var2.LIGHT;
case 16:
                        return var1;
                    }
                };
                var16 = var27.bind(var38)(var16, var3);
                _closure2_slot17 = var16;
                var3 = var24.useState;
                var3 = var3.bind(var24)(var30);
                var6 = var6.bind(var4)(var3, var2);
                var3 = var6[var22];
                var39 = var6[var20];
                _closure2_slot18 = var39;
                var6 = 32;
                var6 = var8[var6];
                var27 = var17.bind(var4)(var6);
                var24 = var27.useSegmentedControlState;
                var6 = {};
                var6['items'] = var37;
                var6['pageWidth'] = var31;
                var6['defaultIndex'] = var30;
                var31 = var24.bind(var27)(var6);
                var38 = var31.activeIndex;
                _closure2_slot19 = var38;
                var6 = 33;
                var24 = var8[var6];
                var37 = var17.bind(var4)(var24);
                var30 = var37.useAnimatedReaction;
                var27 = function Z() {
                    var2 = _closure2_slot19;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var24 = {};
                var24['activeIndex'] = var38;
                var27['__closure'] = var24;
                var24 = 12670867470872.0;
                var27['__workletHash'] = var24;
                var24 = _closure1_slot38;
                var27['__initData'] = var24;
                var24 = function q(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 33;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot18;
                    var3 = var3.bind(var4)(var2);
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.round;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var2);
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var38 = {};
                var40 = var8[var6];
                var40 = var17.bind(var4)(var40);
                var40 = var40.runOnJS;
                var38['runOnJS'] = var40;
                var38['setPendingThemeIndex'] = var39;
                var24['__closure'] = var38;
                var38 = 7003433484889.0;
                var24['__workletHash'] = var38;
                var38 = _closure1_slot39;
                var24['__initData'] = var38;
                var24 = var30.bind(var37)(var27, var24);
                var8 = var8[var6];
                var17 = var17.bind(var4)(var8);
                var8 = var17.useSharedValue;
                var24 = var11[var25];
                var27 = var24.theme;
                var24 = 'light';
                if(!(var24 === var27)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var20 = 0;
case 17:
                var8 = var8.bind(var17)(var20);
                var17 = var31.activeIndex;
                if(!var5) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var17 = var8;
case 19:
                _closure2_slot20 = var17;
                var27 = _closure1_slot4;
                var22 = var27.useMemo;
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
                var39 = var22.bind(var27)(var20, var8);
                _closure2_slot21 = var39;
                var22 = _closure1_slot0;
                var24 = _closure1_slot2;
                var8 = var24[var6];
                var37 = var22.bind(var4)(var8);
                var30 = var37.useAnimatedStyle;
                var8 = function De() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot15;
                        if(var1) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                        var4 = _closure2_slot20;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        _fun0006_ip = 23; continue _fun0006;
case 21:
                        var1 = _closure2_slot12;
case 23:
                        var1 = var2[var1];
                        var2 = _closure2_slot15;
                        if(!var2) { _fun0006_ip = 24; continue _fun0006 }
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
                        if(!(var2 === var1)) { _fun0006_ip = 25; continue _fun0006 }
case 24:
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
                        var12 = _closure2_slot20;
                        var5 = var12.get;
                        var12 = var5.bind(var12)();
                        var5 = _closure1_slot20;
                        var2 = _closure1_slot19;
                        var5 = var13.bind(var14)(var12, var5, var2);
                        var2 = 37;
                        var2 = var11[var2];
                        var2 = var10.bind(var9)(var2);
                        var2 = var2.timingStandard;
                        var2 = var6.bind(var7)(var5, var2);
                        var1['backgroundColor'] = var2;
                        _fun0006_ip = 26; continue _fun0006;
case 25:
                        var2 = {};
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 36;
                        var4 = var9[var4];
                        var6 = var7.bind(var8)(var4);
                        var5 = var6.withTiming;
                        var4 = _closure2_slot21;
                        var3 = 37;
                        var3 = var9[var3];
                        var3 = var7.bind(var8)(var3);
                        var3 = var3.timingStandard;
                        var3 = var5.bind(var6)(var4, var3);
                        var2['backgroundColor'] = var3;
                        var1 = var2;
case 26:
                        return var1;
                    }
                };
                var38 = {};
                var38['mobileThemes'] = var11;
                var38['isClientThemesSelector'] = var5;
                var38['currentThemeIndex'] = var9;
                var38['themeTypeIndex'] = var17;
                var20 = 24;
                var40 = var24[var20];
                var40 = var22.bind(var4)(var40);
                var40 = var40.ClientThemeType;
                var38['ClientThemeType'] = var40;
                var40 = 36;
                var40 = var24[var40];
                var40 = var22.bind(var4)(var40);
                var40 = var40.withTiming;
                var38['withTiming'] = var40;
                var40 = var24[var6];
                var40 = var22.bind(var4)(var40);
                var40 = var40.interpolateColor;
                var38['interpolateColor'] = var40;
                var40 = _closure1_slot20;
                var38['cardSecondaryStops'] = var40;
                var40 = _closure1_slot19;
                var38['cardSecondaryStyles'] = var40;
                var40 = 37;
                var40 = var24[var40];
                var40 = var22.bind(var4)(var40);
                var40 = var40.timingStandard;
                var38['timingStandard'] = var40;
                var38['bgRaised'] = var39;
                var8['__closure'] = var38;
                var38 = 10807943820408.0;
                var8['__workletHash'] = var38;
                var38 = _closure1_slot40;
                var8['__initData'] = var38;
                var30 = var30.bind(var37)(var8);
                var8 = {};
                var37 = _closure1_slot26;
                var37 = var37.bind(var4)(var17);
                var8['textNormal'] = var37;
                var37 = _closure1_slot29;
                var37 = var37.bind(var4)(var17);
                var8['textMuted'] = var37;
                var37 = _closure1_slot36;
                var37 = var37.bind(var4)(var17);
                var8['textBrand'] = var37;
                var37 = _closure1_slot30;
                var37 = var37.bind(var4)(var17);
                var8['borderFaint'] = var37;
                var37 = _closure1_slot31;
                var37 = var37.bind(var4)(var17);
                var8['borderStrong'] = var37;
                var37 = _closure1_slot32;
                var37 = var37.bind(var4)(var17);
                var8['borderNormal'] = var37;
                var37 = _closure1_slot27;
                var37 = var37.bind(var4)(var17);
                var8['headerPrimary'] = var37;
                var37 = _closure1_slot28;
                var37 = var37.bind(var4)(var17);
                var8['headerSecondary'] = var37;
                var37 = _closure1_slot33;
                var37 = var37.bind(var4)(var17);
                var8['activityIcon'] = var37;
                var37 = _closure1_slot22;
                var37 = var37.bind(var4)(var17);
                var8['bgModSubtle'] = var37;
                var37 = _closure1_slot23;
                var37 = var37.bind(var4)(var17);
                var8['bgModStrong'] = var37;
                var37 = _closure1_slot34;
                var37 = var37.bind(var4)(var17);
                var8['iconHeaderSecondary'] = var37;
                var37 = _closure1_slot35;
                var37 = var37.bind(var4)(var17);
                var8['iconInteractive'] = var37;
                var37 = _closure1_slot21;
                var37 = var37.bind(var4)(var17);
                var8['bgBasePrimary'] = var37;
                var37 = _closure1_slot24;
                var37 = var37.bind(var4)(var17);
                var8['bgSurfaceOverlay'] = var37;
                var37 = _closure1_slot25;
                var37 = var37.bind(var4)(var17);
                var8['bgSurfaceHigh'] = var37;
                var8['bgRaised'] = var30;
                _closure2_slot22 = var8;
                var38 = var27.useCallback;
                var37 = new Array(9);
                var37[0] = var9;
                var37[1] = var5;
                var37[2] = var17;
                var37[3] = var32;
                var37[4] = var11;
                var37[5] = var26;
                var37[6] = var36;
                var37[7] = var34;
                var37[8] = var29;
                var30 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var2 = _closure2_slot15;
                        var3 = _closure2_slot1;
                        if(var2) { _fun0007_ip = 23; continue _fun0007 }
case 22:
                        var4 = _closure2_slot20;
                        var2 = var4.get;
                        var2 = var2.bind(var4)();
                        var7 = var3[var2];
                        _fun0007_ip = 27; continue _fun0007;
case 23:
                        var2 = _closure2_slot12;
                        var7 = var3[var2];
case 27:
                        var2 = _closure2_slot9;
                        var3 = null;
                        if(!(var3 == var2)) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 27;
                        var4 = var4[var2];
                        var2 = undefined;
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.handleSaveTheme;
                        var4 = _closure2_slot11;
                        var2 = _closure2_slot3;
                        var2 = var5.bind(var6)(var7, var4, var2);
                        _fun0007_ip = 30; continue _fun0007;
case 28:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 27;
                        var4 = var4[var2];
                        var2 = undefined;
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.handleSaveSyncedModeTheme;
                        var4 = _closure2_slot9;
                        var2 = _closure2_slot11;
                        var2 = var5.bind(var6)(var7, var4, var2);
case 30:
                        var2 = _closure2_slot7;
                        if(!(var3 != var2)) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                        var3 = _closure2_slot7;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
                        _fun0007_ip = 33; continue _fun0007;
case 31:
                        var2 = _closure2_slot10;
                        var1 = var2.goBack;
                        var1 = var1.bind(var2)();
case 33:
                        var1 = undefined;
                        return var1;
                    }
                };
                var37 = var38.bind(var27)(var30, var37);
                _closure2_slot23 = var37;
                var38 = var27.useCallback;
                var30 = new Array(8);
                var30[0] = var21;
                var30[1] = var11;
                var30[2] = var9;
                var30[3] = var25;
                var30[4] = var15;
                var30[5] = var36;
                var30[6] = var26;
                var30[7] = var29;
                var29 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var3 = _closure2_slot1;
                        var1 = _closure2_slot12;
                        var6 = var3[var1];
                        var1 = _closure2_slot5;
                        if(var1) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                        var1 = _closure2_slot2;
                        if(!var1) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                        var4 = var6.type;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 24;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var3 = var3.ClientThemeType;
                        var3 = var3.STANDARD_BACKGROUND_THEME;
                        if(!(var4 === var3)) { _fun0008_ip = 38; continue _fun0008 }
case 36:
                        var4 = _closure2_slot9;
                        var3 = null;
                        if(!(var3 == var4)) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 27;
                        var4 = var4[var3];
                        var3 = undefined;
                        var7 = var5.bind(var3)(var4);
                        var5 = var7.handleSaveTheme;
                        var4 = _closure2_slot11;
                        var3 = _closure2_slot3;
                        var3 = var5.bind(var7)(var6, var4, var3);
                        _fun0008_ip = 34; continue _fun0008;
case 39:
                        var4 = _closure2_slot12;
                        var3 = _closure2_slot0;
                        if(!(var4 !== var3)) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 27;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.handleSaveSyncedModeTheme;
                        var3 = _closure2_slot9;
                        var2 = _closure2_slot11;
                        var2 = var4.bind(var5)(var6, var3, var2);
                        _fun0008_ip = 34; continue _fun0008;
case 41:
                        var2 = undefined;
                        return var2;
case 38:
                        return var1;
case 34:
                        var1 = undefined;
                        return var1;
                    }
                };
                var29 = var38.bind(var27)(var29, var30);
                _closure2_slot24 = var29;
                var38 = var27.useEffect;
                var30 = new Array(2);
                var30[0] = var34;
                var30[1] = var29;
                var29 = function() {
                    var4 = _closure2_slot10;
                    var3 = var4.addListener;
                    var2 = 'beforeRemove';
                    var1 = function() {
                        var2 = _closure2_slot24;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var29 = var38.bind(var27)(var29, var30);
                var30 = var27.useEffect;
                var29 = new Array(16);
                var29[0] = var9;
                var29[1] = var37;
                var29[2] = var36;
                var29[3] = var11;
                var29[4] = var26;
                var29[5] = var15;
                var29[6] = var35;
                var29[7] = var5;
                var29[8] = var34;
                var34 = var8.textNormal;
                var29[9] = var34;
                var34 = var8.textBrand;
                var29[10] = var34;
                var29[11] = var33;
                var29[12] = var32;
                var29[13] = var21;
                var29[14] = var3;
                var29[15] = var16;
                var21 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot12;
                        var2 = var2[var1];
                        var1 = _closure2_slot15;
                        if(!var1) { _fun0009_ip = 43; continue _fun0009 }
case 3:
                        var1 = _closure2_slot2;
case 43:
                        if(!var1) { _fun0009_ip = 44; continue _fun0009 }
case 45:
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
case 44:
                        var _closure3_slot0 = var1;
                        var4 = _closure2_slot10;
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
                        if(var8) { _fun0009_ip = 46; continue _fun0009 }
case 30:
                        var7 = function() {
                            var4 = _closure1_slot14;
                            var3 = _closure1_slot5;
                            var2 = undefined;
                            var1 = {};
                            var1 = var4.bind(var2)(var3, var1);
                            return var1;
                        };
case 46:
                        var2['headerBackground'] = var7;
                        var7 = function headerLeft() {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                var1 = _closure2_slot4;
                                if(var1) { _fun0010_ip = 22; continue _fun0010 }
case 47:
                                var1 = null;
                                return var1;
case 22:
                                var6 = _closure1_slot42;
                                var3 = _closure2_slot1;
                                var2 = _closure2_slot12;
                                var1 = _closure2_slot17;
                                var4 = undefined;
                                var6 = var6.bind(var4)(var3, var2, var1);
                                var3 = _closure1_slot14;
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
                                var7 = _closure2_slot10;
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
                                var4 = _closure1_slot14;
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 40;
                                var1 = var3[var1];
                                var3 = undefined;
                                var1 = var2.bind(var3)(var1);
                                var2 = var1.Text;
                                var1 = {'animated': true, 'variant': 'redesign/heading-18/bold'};
                                var7 = _closure2_slot22;
                                var7 = var7.textNormal;
                                var1['style'] = var7;
                                var8 = _closure2_slot6;
                                var7 = null;
                                if(!(var7 == var8)) { _fun0011_ip = 48; continue _fun0011 }
case 49:
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
                                _fun0011_ip = 50; continue _fun0011;
case 48:
                                var5 = _closure2_slot6;
case 50:
                                var1['children'] = var5;
                                var1 = var4.bind(var3)(var2, var1);
                                return var1;
                            }
                        };
                        var2['headerTitle'] = var7;
                        var7 = _closure2_slot5;
                        var5 = undefined;
                        if(!var7) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                        var5 = function() {
                            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                                var4 = _closure1_slot14;
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
                                var5 = _closure2_slot23;
                                var1['onPress'] = var5;
                                var5 = 40;
                                var5 = var10[var5];
                                var5 = var6.bind(var3)(var5);
                                var6 = var5.Text;
                                var5 = {'animated': true, 'variant': 'text-md/semibold'};
                                var8 = _closure2_slot22;
                                var10 = var8.textBrand;
                                var8 = new Array(2);
                                var8[0] = var10;
                                var9 = _closure3_slot0;
                                if(!var9) { _fun0012_ip = 53; continue _fun0012 }
case 54:
                                var10 = {};
                                var11 = 0.4;
                                var10['opacity'] = var11;
                                var9 = var10;
case 53:
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
case 51:
                        var2['headerRight'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var21 = var30.bind(var27)(var21, var29);
                var21 = 42;
                var21 = var24[var21];
                var24 = var22.bind(var4)(var21);
                var22 = var24.useNavigatorBackPressHandler;
                var21 = function() {
                    var1 = _closure2_slot4;
                    var1 = !var1;
                    return var1;
                };
                var21 = var22.bind(var24)(var21);
                var24 = var27.useCallback;
                var22 = new Array(1);
                var22[0] = var9;
                var21 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var3 = arg1;
                        var2 = _closure2_slot12;
                        if(!(var3 !== var2)) { _fun0013_ip = 55; continue _fun0013 }
case 22:
                        var1 = _closure2_slot13;
                        var4 = undefined;
                        var1 = var1.bind(var4)(var3);
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 43;
                        var1 = var5[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.updateMobilePendingThemeIndex;
                        var1 = var1.bind(var2)(var3);
case 55:
                        var1 = undefined;
                        return var1;
                    }
                };
                var22 = var24.bind(var27)(var21, var22);
                var21 = var17;
                var24 = var28;
                if(!var10) { _fun0003_ip = 56; continue _fun0003 }
case 57:
                var17 = global;
                var27 = var17.Math;
                var17 = var27.floor;
                var2 = var28 / var2;
                var24 = var17.bind(var27)(var2);
case 56:
                if(var5) { _fun0003_ip = 58; continue _fun0003 }
case 59:
                var2 = _closure1_slot42;
                var28 = var2.bind(var4)(var11, var3, var16);
                var17 = _closure1_slot15;
                var3 = _closure1_slot5;
                var2 = {};
                var27 = var19.segmentedControlContainer;
                var2['style'] = var27;
                var2['onLayout'] = var18;
                var29 = _closure1_slot14;
                var33 = _closure1_slot0;
                var34 = _closure1_slot2;
                var18 = 38;
                var18 = var34[var18];
                var18 = var33.bind(var4)(var18);
                var27 = var18.ThemeContextProvider;
                var18 = {};
                var18['theme'] = var28;
                var28 = 45;
                var28 = var34[var28];
                var28 = var33.bind(var4)(var28);
                var30 = var28.SegmentedControl;
                var28 = {};
                var32 = 'experimental_Large';
                var28['variant'] = var32;
                var28['state'] = var31;
                var28 = var29.bind(var4)(var30, var28);
                var18['children'] = var28;
                var27 = var29.bind(var4)(var27, var18);
                var18 = new Array(2);
                var18[0] = var27;
                var27 = 40;
                var27 = var34[var27];
                var27 = var33.bind(var4)(var27);
                var28 = var27.Text;
                var27 = {'animated': true, 'variant': 'text-xs/medium'};
                var31 = var8.headerSecondary;
                var30 = new Array(2);
                var30[0] = var31;
                var31 = var19.textCentered;
                var30[1] = var31;
                var27['style'] = var30;
                var30 = 15;
                var31 = var34[var30];
                var31 = var33.bind(var4)(var31);
                var32 = var31.intl;
                var31 = var32.string;
                var30 = var34[var30];
                var30 = var33.bind(var4)(var30);
                var30 = var30.t;
                var30 = var30.d5Gu9A;
                var30 = var31.bind(var32)(var30);
                var27['children'] = var30;
                var27 = var29.bind(var4)(var28, var27);
                var18[1] = var27;
                var2['children'] = var18;
                var18 = var17.bind(var4)(var3, var2);
                _fun0003_ip = 60; continue _fun0003;
case 58:
                var17 = _closure1_slot14;
                var3 = _closure1_slot1;
                var27 = _closure1_slot2;
                var2 = 44;
                var2 = var27[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['themes'] = var11;
                var2['currentThemeIndex'] = var9;
                var2['isPreview'] = var15;
                var2['isSynced'] = var26;
                var2['defaultIndex'] = var25;
                var2['deviceWidth'] = var24;
                var2['animatedStyles'] = var8;
                var2['hasMidnightNux'] = var23;
                var2['isRefreshEnabled'] = var7;
                var2['onThemeSelected'] = var22;
                var18 = var17.bind(var4)(var3, var2);
case 60:
                var17 = _closure1_slot4;
                var3 = var17.useEffect;
                var2 = new Array(5);
                var2[0] = var9;
                var2[1] = var11;
                var2[2] = var21;
                var2[3] = var16;
                var2[4] = var7;
                var1 = function() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot12;
                        var1 = var2[var1];
                        var4 = var1.theme;
                        var2 = 'system';
                        if(!(var2 !== var4)) { _fun0014_ip = 61; continue _fun0014 }
case 21:
                        var1 = var1.theme;
                        _fun0014_ip = 62; continue _fun0014;
case 61:
                        var4 = _closure2_slot17;
                        var2 = null;
                        if(!(var2 == var4)) { _fun0014_ip = 63; continue _fun0014 }
case 2:
                        var2 = _closure1_slot13;
                        var2 = var2.DARKER;
                        _fun0014_ip = 16; continue _fun0014;
case 63:
                        var2 = _closure2_slot17;
case 16:
                        var1 = var2;
case 62:
                        var4 = _closure1_slot13;
                        var4 = var4.DARK;
                        var4 = var1 !== var4;
                        if(var4) { _fun0014_ip = 64; continue _fun0014 }
case 65:
                        var4 = _closure2_slot8;
case 64:
                        if(var4) { _fun0014_ip = 66; continue _fun0014 }
case 67:
                        var4 = _closure1_slot13;
                        var1 = var4.DARKER;
case 66:
                        var6 = _closure2_slot20;
                        var5 = var6.set;
                        var7 = _closure1_slot18;
                        var4 = var7.indexOf;
                        var4 = var4.bind(var7)(var1);
                        var4 = var5.bind(var6)(var4);
                        var3 = _closure2_slot14;
                        var2 = _closure1_slot13;
                        var4 = var2.LIGHT;
                        var2 = 'light-content';
                        if(!(var1 === var4)) { _fun0014_ip = 68; continue _fun0014 }
case 69:
                        var2 = 'dark-content';
case 68:
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
                var3 = _closure1_slot14;
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
                if(!var7) { _fun0003_ip = 70; continue _fun0003 }
case 71:
                var7 = var15;
case 70:
                if(!var7) { _fun0003_ip = 72; continue _fun0003 }
case 73:
                var15 = var11[var9];
                var16 = var15.type;
                var17 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var20];
                var15 = var17.bind(var4)(var15);
                var15 = var15.ClientThemeType;
                var15 = var15.STANDARD_BACKGROUND_THEME;
                var7 = var16 !== var15;
case 72:
                var1['isNitroLocked'] = var7;
                var15 = var3.bind(var4)(var2, var1);
                var3 = _closure1_slot15;
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
                if(var5) { _fun0003_ip = 74; continue _fun0003 }
case 75:
                var7 = var8.bgBasePrimary;
case 74:
                var6[1] = var7;
                var1['style'] = var6;
                var6 = null;
                if(!var5) { _fun0003_ip = 76; continue _fun0003 }
case 77:
                var8 = _closure1_slot14;
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
case 76:
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot15;
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
                if(!var11) { _fun0003_ip = 78; continue _fun0003 }
case 79:
                var11 = var19.landscapeContainer;
case 78:
                var9[1] = var11;
                var11 = {};
                var11['marginTop'] = var12;
                var9[2] = var11;
                var6['style'] = var9;
                var12 = _closure1_slot14;
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
                var12 = _closure1_slot15;
                var11 = _closure1_slot16;
                var13 = {};
                if(var10) { _fun0003_ip = 80; continue _fun0003 }
case 81:
                var10 = new Array(2);
                var10[0] = var15;
                var10[1] = var18;
                var13['children'] = var10;
                var10 = var13;
                _fun0003_ip = 82; continue _fun0003;
case 80:
                var17 = _closure1_slot14;
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
case 82:
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
        var _closure1_slot41 = var4;
        var4 = 51;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/user_settings/appearance/native/SettingsAppearanceThemePickerScreen.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function ConnectedThemePicker(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var1 = arg1;
                var10 = var1.onSaveTheme;
                var7 = var1.headerTitle;
                var12 = var1.canGoBack;
                var4 = undefined;
                if(!(var12 === var4)) { _fun0015_ip = 45; continue _fun0015 }
case 21:
                var12 = true;
case 45:
                var11 = var1.themeSelector;
                if(!(var11 === var4)) { _fun0015_ip = 2; continue _fun0015 }
case 27:
                var11 = 'nitro';
case 2:
                var9 = var1.hasSaveButton;
                if(!(var9 === var4)) { _fun0015_ip = 55; continue _fun0015 }
case 83:
                var9 = false;
case 55:
                var8 = var1.hasMidnightNux;
                if(!(var8 === var4)) { _fun0015_ip = 84; continue _fun0015 }
case 62:
                var8 = false;
case 84:
                var5 = var1.mode;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var18 = _closure1_slot1;
                var19 = _closure1_slot2;
                var3 = 19;
                var3 = var19[var3];
                var3 = var18.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var14 = var3.width;
                var13 = var3.height;
                var6 = _closure1_slot0;
                var3 = 20;
                var3 = var19[var3];
                var17 = var6.bind(var4)(var3);
                var16 = var17.useStateFromStoresObject;
                var3 = _closure1_slot6;
                var15 = new Array(5);
                var15[0] = var3;
                var3 = _closure1_slot9;
                var15[1] = var3;
                var3 = _closure1_slot10;
                var15[2] = var3;
                var3 = _closure1_slot8;
                var15[3] = var3;
                var3 = _closure1_slot7;
                var15[4] = var3;
                var3 = function() {
                    var1 = {};
                    var3 = _closure1_slot6;
                    var4 = var3.gradientPreset;
                    var1['userPreset'] = var4;
                    var3 = var3.isPreview;
                    var1['isPreview'] = var3;
                    var3 = _closure1_slot10;
                    var4 = var3.useSystemTheme;
                    var3 = _closure1_slot12;
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
                var3 = var16.bind(var17)(var15, var3);
                var16 = var3.isSynced;
                var15 = var3.usingSystemTheme;
                _closure2_slot1 = var15;
                var22 = var3.userPreset;
                _closure2_slot2 = var22;
                var17 = var3.isPreview;
                var15 = var3.userTheme;
                _closure2_slot3 = var15;
                var3 = var3.hasCustomTheme;
                _closure2_slot4 = var3;
                var3 = 21;
                var3 = var19[var3];
                var6 = var6.bind(var4)(var3);
                var3 = var6.useAllMobileThemes;
                var3 = var3.bind(var6)(var5);
                _closure2_slot5 = var3;
                var6 = 22;
                var6 = var19[var6];
                var15 = var18.bind(var4)(var6);
                var6 = 'SettingsAppearanceThemePickerScreen';
                var6 = var15.bind(var4)(var6);
                _closure2_slot6 = var6;
                var21 = _closure1_slot4;
                var20 = var21.useMemo;
                var15 = new Array(2);
                var15[0] = var22;
                var15[1] = var3;
                var3 = function() {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var4 = _closure2_slot2;
                        var3 = null;
                        var3 = var3 == var4;
                        var6 = undefined;
                        var4 = undefined;
                        if(var3) { _fun0016_ip = 45; continue _fun0016 }
case 85:
                        var3 = _closure2_slot2;
                        var4 = var3.id;
case 45:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 23;
                        var3 = var7[var3];
                        var3 = var5.bind(var6)(var3);
                        var3 = var3.BackgroundGradientPresetId;
                        var3 = var3.EASTER_EGG;
                        var3 = var4 === var3;
                        var _closure3_slot0 = var3;
                        var3 = _closure2_slot5;
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
                                if(var1) { _fun0017_ip = 86; continue _fun0017 }
case 87:
                                var3 = var3.id;
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var2 = 23;
                                var2 = var6[var2];
                                var2 = var4.bind(var5)(var2);
                                var2 = var2.BackgroundGradientPresetId;
                                var2 = var2.EASTER_EGG;
                                var1 = var3 !== var2;
case 86:
                                if(var1) { _fun0017_ip = 88; continue _fun0017 }
case 89:
                                var1 = _closure3_slot0;
case 88:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var3 = var20.bind(var21)(var3, var15);
                _closure2_slot7 = var3;
                var20 = var21.useMemo;
                var15 = new Array(2);
                var15[0] = var3;
                var15[1] = var6;
                var3 = function() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var1 = _closure2_slot6;
                        var2 = _closure2_slot7;
                        if(var1) { _fun0018_ip = 90; continue _fun0018 }
case 22:
                        var1 = 1;
                        var4 = var2[var1];
                        var1 = new Array(2);
                        var1[0] = var4;
                        var5 = _closure2_slot7;
                        var4 = 0;
                        var4 = var5[var4];
                        var1[1] = var4;
                        var5 = _closure2_slot7;
                        var3 = var5.slice;
                        var4 = 2;
                        var7 = var3.bind(var5)(var4);
                        var8 = var1;
                        var6 = var4;
                        var3 = arraySpread(var8, var7, var6);
                        _fun0018_ip = 49; continue _fun0018;
case 90:
                        var1 = var2;
case 49:
                        return var1;
                    }
                };
                var3 = var20.bind(var21)(var3, var15);
                _closure2_slot8 = var3;
                var20 = var21.useMemo;
                var15 = new Array(2);
                var15[0] = var3;
                var15[1] = var5;
                var3 = function() {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var3 = _closure2_slot0;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0019_ip = 5; continue _fun0019 }
case 91:
                        var4 = _closure2_slot8;
                        var3 = var4.filter;
                        var1 = function(arg1) {
                            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                                var3 = arg1;
                                var2 = var3.theme;
                                var1 = 'system';
                                var1 = var1 !== var2;
                                if(!var1) { _fun0020_ip = 92; continue _fun0020 }
case 93:
                                var5 = _closure2_slot0;
                                var2 = _closure1_slot11;
                                var2 = var2.DARK;
                                if(!(var5 !== var2)) { _fun0020_ip = 94; continue _fun0020 }
case 95:
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 25;
                                var5 = var5[var2];
                                var2 = undefined;
                                var6 = var6.bind(var2)(var5);
                                var5 = var6.isThemeLight;
                                var2 = var3.theme;
                                var2 = var5.bind(var6)(var2);
                                _fun0020_ip = 54; continue _fun0020;
case 94:
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var4 = 25;
                                var5 = var5[var4];
                                var4 = undefined;
                                var5 = var6.bind(var4)(var5);
                                var4 = var5.isThemeDark;
                                var3 = var3.theme;
                                var2 = var4.bind(var5)(var3);
case 54:
                                var1 = var2;
case 92:
                                return var1;
                            }
                        };
                        var1 = var3.bind(var4)(var1);
                        _fun0019_ip = 96; continue _fun0019;
case 5:
                        var1 = _closure2_slot8;
case 96:
                        return var1;
                    }
                };
                var15 = var20.bind(var21)(var3, var15);
                _closure2_slot9 = var15;
                var3 = 26;
                var3 = var19[var3];
                var3 = var18.bind(var4)(var3);
                var2 = function() {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        var3 = _closure2_slot0;
                        var1 = null;
                        if(!(var1 == var3)) { _fun0021_ip = 97; continue _fun0021 }
case 91:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 27;
                        var3 = var3[var1];
                        var1 = undefined;
                        var8 = var4.bind(var1)(var3);
                        var7 = var8.getUserThemeIndex;
                        var13 = _closure2_slot2;
                        var12 = _closure2_slot1;
                        var11 = _closure2_slot8;
                        var10 = _closure2_slot3;
                        var9 = _closure2_slot4;
                        var14 = var8;
                        var1 = var14[var7](var13, var12, var11, var10, var9, var8);
                        _fun0021_ip = 98; continue _fun0021;
case 97:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 27;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.getSyncedModeThemeIndex;
                        var3 = _closure2_slot9;
                        var2 = _closure2_slot0;
                        var1 = var4.bind(var5)(var3, var2);
case 98:
                        return var1;
                    }
                };
                var18 = var3.bind(var4)(var2);
                var3 = _closure1_slot14;
                var2 = _closure1_slot41;
                var1 = {};
                var1['defaultIndex'] = var18;
                var1['isPreview'] = var17;
                var1['isSynced'] = var16;
                var1['mobileThemes'] = var15;
                var1['deviceWidth'] = var14;
                var1['deviceHeight'] = var13;
                var1['canGoBack'] = var12;
                var1['themeSelector'] = var11;
                var1['onSaveTheme'] = var10;
                var1['hasSaveButton'] = var9;
                var1['hasMidnightNux'] = var8;
                var1['headerTitle'] = var7;
                var1['isRefreshEnabled'] = var6;
                var1['mode'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();