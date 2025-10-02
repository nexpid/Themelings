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
        var _closure1_slot37 = var1;
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
        var4 = var4.jsxs;
        var _closure1_slot14 = var4;
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
        var15 = var6[var10];
        var15 = var11.bind(var1)(var15);
        var15 = var15.spacing;
        var15 = var15.PX_24;
        var12['gap'] = var15;
        var15 = 13;
        var15 = var6[var15];
        var16 = var5.bind(var1)(var15);
        var15 = var16.isIOS;
        var15 = var15.bind(var16)();
        if(var15) { _fun0001_ip = 6; continue _fun0001 }
case 7:
        var15 = var6[var10];
        var15 = var11.bind(var1)(var15);
        var15 = var15.spacing;
        var14 = var15.PX_16;
case 6:
        var12['marginBottom'] = var14;
        var4['container'] = var12;
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
        var _closure1_slot15 = var4;
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
        var _closure1_slot16 = var4;
        var4 = 14;
        var8 = var6[var4];
        var12 = var5.bind(var1)(var8);
        var9 = var12.createAnimatedThemedStyles;
        var8 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.BG_BASE_PRIMARY;
        var8['backgroundColor'] = var13;
        var8 = var9.bind(var12)(var8);
        var _closure1_slot17 = var8;
        var8 = var6[var4];
        var12 = var5.bind(var1)(var8);
        var9 = var12.createAnimatedThemedStyles;
        var8 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.BG_MOD_SUBTLE;
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
        var13 = var13.BG_MOD_STRONG;
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
        var13 = var13.BG_SURFACE_OVERLAY;
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
        var13 = var13.TEXT_NORMAL;
        var8['color'] = var13;
        var8 = var9.bind(var12)(var8);
        var _closure1_slot21 = var8;
        var8 = var6[var4];
        var12 = var5.bind(var1)(var8);
        var9 = var12.createAnimatedThemedStyles;
        var8 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.HEADER_PRIMARY;
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
        var13 = var13.HEADER_SECONDARY;
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
        var13 = var13.TEXT_MUTED;
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
        var13 = var13.BORDER_FAINT;
        var8['borderColor'] = var13;
        var8 = var9.bind(var12)(var8);
        var _closure1_slot25 = var8;
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
        var _closure1_slot26 = var8;
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
        var _closure1_slot27 = var8;
        var8 = var6[var4];
        var12 = var5.bind(var1)(var8);
        var9 = var12.createAnimatedThemedStyles;
        var8 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.HEADER_SECONDARY;
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
        var13 = var13.INTERACTIVE_NORMAL;
        var8['tintColor'] = var13;
        var8 = var9.bind(var12)(var8);
        var _closure1_slot29 = var8;
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
        var _closure1_slot30 = var4;
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
            var3 = var3.K2sFfn;
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
            var10 = var10.b8Cei4;
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
            var9 = var9.pQwSpa;
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
        var _closure1_slot31 = var4;
        var8 = var7.LIGHT;
        var4 = new Array(3);
        var4[0] = var8;
        var8 = var7.DARKER;
        var4[1] = var8;
        var7 = var7.MIDNIGHT;
        var4[2] = var7;
        var _closure1_slot32 = var4;
        var4 = {};
        var7 = 'function SettingsAppearanceThemePickerScreenTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}';
        var4['code'] = var7;
        var _closure1_slot33 = var4;
        var4 = {};
        var7 = 'function SettingsAppearanceThemePickerScreenTsx2(activeIndex){const{runOnJS,setPendingThemeIndex}=this.__closure;runOnJS(setPendingThemeIndex)(Math.round(activeIndex));}';
        var4['code'] = var7;
        var _closure1_slot34 = var4;
        var4 = {};
        var7 = 'function SettingsAppearanceThemePickerScreenTsx3(){const{mobileThemes,isClientThemesSelector,currentThemeIndex,themeTypeIndex,ClientThemeType,withTiming,interpolateColor,cardSecondaryStyles,timingStandard,bgRaised}=this.__closure;const theme=mobileThemes[isClientThemesSelector?currentThemeIndex:themeTypeIndex.get()];if(!isClientThemesSelector||theme.type===ClientThemeType.STANDARD_BACKGROUND_THEME){return{backgroundColor:withTiming(interpolateColor(themeTypeIndex.get(),[0,1,2],cardSecondaryStyles),timingStandard)};}else{return{backgroundColor:withTiming(interpolateColor(themeTypeIndex.get(),[0,1,2],[bgRaised,bgRaised,bgRaised]),timingStandard)};}}';
        var4['code'] = var7;
        var _closure1_slot35 = var4;
        var4 = function ThemePicker(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var22 = var2.defaultIndex;
                var17 = var2.mobileThemes;
                var _closure2_slot0 = var17;
                var19 = var2.isPreview;
                var _closure2_slot1 = var19;
                var24 = var2.isSynced;
                var _closure2_slot2 = var24;
                var20 = var2.deviceWidth;
                var30 = var2.canGoBack;
                var _closure2_slot3 = var30;
                var6 = var2.themeSelector;
                var7 = var2.hasSaveButton;
                var _closure2_slot4 = var7;
                var13 = var2.hasMidnightNux;
                var32 = var2.headerTitle;
                var _closure2_slot5 = var32;
                var28 = var2.onSaveTheme;
                var _closure2_slot6 = var28;
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
                var2 = _closure1_slot15;
                var9 = var2.bind(var4)();
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 27;
                var2 = var10[var2];
                var3 = var8.bind(var4)(var2);
                var2 = var3.useNavigation;
                var31 = var2.bind(var3)();
                var _closure2_slot7 = var31;
                var5 = _closure1_slot1;
                var2 = 28;
                var2 = var10[var2];
                var3 = var5.bind(var4)(var2);
                var2 = 29;
                var2 = var10[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.CLIENT_THEMES_THEME_SELECTOR;
                var2 = var3.bind(var4)(var2);
                var33 = var2.analyticsLocations;
                var _closure2_slot8 = var33;
                var5 = _closure1_slot4;
                var2 = var5.useState;
                var3 = var2.bind(var5)(var22);
                var2 = _closure1_slot3;
                var21 = 2;
                var2 = var2.bind(var4)(var3, var21);
                var18 = 0;
                var16 = var2[var18];
                var _closure2_slot9 = var16;
                var11 = 1;
                var2 = var2[var11];
                var _closure2_slot10 = var2;
                var3 = var5.useState;
                var2 = 30;
                var2 = var10[var2];
                var10 = var8.bind(var4)(var2);
                var8 = var10.isThemeDark;
                var2 = var17[var22];
                var2 = var2.theme;
                var8 = var8.bind(var10)(var2);
                var2 = 'dark-content';
                if(!var8) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var2 = 'light-content';
case 8:
                var2 = var3.bind(var5)(var2);
                var5 = _closure1_slot3;
                var2 = var5.bind(var4)(var2, var21);
                var23 = var2[var18];
                var2 = var2[var11];
                _closure2_slot11 = var2;
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = 31;
                var3 = var2[var3];
                var10 = var8.bind(var4)(var3);
                var3 = var10.useHeaderHeight;
                var12 = var3.bind(var10)();
                var3 = 'nitro';
                var14 = var3 === var6;
                _closure2_slot12 = var14;
                var25 = _closure1_slot4;
                var3 = var25.useState;
                var3 = var3.bind(var25)(var18);
                var3 = var5.bind(var4)(var3, var21);
                var27 = var3[var18];
                var3 = var3[var11];
                _closure2_slot13 = var3;
                var10 = var25.useCallback;
                var6 = function(arg1) {
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
                var10 = var10.bind(var25)(var6, var3);
                var26 = var25.useMemo;
                var6 = _closure1_slot31;
                var3 = new Array(0);
                var29 = var26.bind(var25)(var6, var3);
                var26 = var25.useMemo;
                var6 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = _closure1_slot9;
                        var3 = var1.theme;
                        var1 = _closure1_slot12;
                        var1 = var1.DARK;
                        if(!(var3 !== var1)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                        var4 = _closure1_slot32;
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
                        var4 = _closure1_slot32;
                        var3 = var4.indexOf;
                        var2 = _closure1_slot12;
                        var2 = var2.DARKER;
                        var1 = var3.bind(var4)(var2);
case 12:
                        return var1;
                    }
                };
                var3 = new Array(0);
                var26 = var26.bind(var25)(var6, var3);
                var3 = 20;
                var3 = var2[var3];
                var35 = var8.bind(var4)(var3);
                var34 = var35.useStateFromStores;
                var3 = _closure1_slot9;
                var6 = new Array(1);
                var6[0] = var3;
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
case 10:
                        var1 = var2.DARKER;
                        _fun0005_ip = 14; continue _fun0005;
case 13:
                        var1 = var2.LIGHT;
case 14:
                        return var1;
                    }
                };
                var6 = var34.bind(var35)(var6, var3);
                _closure2_slot14 = var6;
                var3 = var25.useState;
                var3 = var3.bind(var25)(var26);
                var5 = var5.bind(var4)(var3, var21);
                var3 = var5[var18];
                var35 = var5[var11];
                _closure2_slot15 = var35;
                var5 = 32;
                var5 = var2[var5];
                var25 = var8.bind(var4)(var5);
                var21 = var25.useSegmentedControlState;
                var5 = {};
                var5['items'] = var29;
                var5['pageWidth'] = var27;
                var5['defaultIndex'] = var26;
                var29 = var21.bind(var25)(var5);
                var34 = var29.activeIndex;
                _closure2_slot16 = var34;
                var5 = 33;
                var21 = var2[var5];
                var27 = var8.bind(var4)(var21);
                var26 = var27.useAnimatedReaction;
                var25 = function j() {
                    var2 = _closure2_slot16;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var21 = {};
                var21['activeIndex'] = var34;
                var25['__closure'] = var21;
                var21 = 12670867470872.0;
                var25['__workletHash'] = var21;
                var21 = _closure1_slot33;
                var25['__initData'] = var21;
                var21 = function F(arg1) {
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
                var34 = {};
                var36 = var2[var5];
                var36 = var8.bind(var4)(var36);
                var36 = var36.runOnJS;
                var34['runOnJS'] = var36;
                var34['setPendingThemeIndex'] = var35;
                var21['__closure'] = var34;
                var34 = 7003433484889.0;
                var21['__workletHash'] = var34;
                var34 = _closure1_slot34;
                var21['__initData'] = var34;
                var21 = var26.bind(var27)(var25, var21);
                var2 = var2[var5];
                var8 = var8.bind(var4)(var2);
                var2 = var8.useSharedValue;
                var21 = var17[var22];
                var25 = var21.theme;
                var21 = 'light';
                if(!(var21 === var25)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var11 = 0;
case 15:
                var8 = var2.bind(var8)(var11);
                var2 = var29.activeIndex;
                if(!var14) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var2 = var8;
case 17:
                _closure2_slot17 = var2;
                var25 = _closure1_slot4;
                var18 = var25.useMemo;
                var11 = function() {
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
                var35 = var18.bind(var25)(var11, var8);
                _closure2_slot18 = var35;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var18 = var11[var5];
                var27 = var8.bind(var4)(var18);
                var26 = var27.useAnimatedStyle;
                var21 = function Ae() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = _closure2_slot0;
                        var1 = _closure2_slot12;
                        if(var1) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                        var4 = _closure2_slot17;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        _fun0006_ip = 21; continue _fun0006;
case 19:
                        var1 = _closure2_slot9;
case 21:
                        var1 = var2[var1];
                        var2 = _closure2_slot12;
                        if(!var2) { _fun0006_ip = 22; continue _fun0006 }
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
                        if(!(var2 === var1)) { _fun0006_ip = 23; continue _fun0006 }
case 22:
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
                        var5 = _closure1_slot16;
                        var2 = [0, 1, 2];
                        var5 = var13.bind(var14)(var12, var2, var5);
                        var2 = 37;
                        var2 = var11[var2];
                        var2 = var10.bind(var9)(var2);
                        var2 = var2.timingStandard;
                        var2 = var6.bind(var7)(var5, var2);
                        var1['backgroundColor'] = var2;
                        _fun0006_ip = 24; continue _fun0006;
case 23:
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
case 24:
                        return var1;
                    }
                };
                var34 = {};
                var34['mobileThemes'] = var17;
                var34['isClientThemesSelector'] = var14;
                var34['currentThemeIndex'] = var16;
                var34['themeTypeIndex'] = var2;
                var18 = 24;
                var36 = var11[var18];
                var36 = var8.bind(var4)(var36);
                var36 = var36.ClientThemeType;
                var34['ClientThemeType'] = var36;
                var36 = 36;
                var36 = var11[var36];
                var36 = var8.bind(var4)(var36);
                var36 = var36.withTiming;
                var34['withTiming'] = var36;
                var36 = var11[var5];
                var36 = var8.bind(var4)(var36);
                var36 = var36.interpolateColor;
                var34['interpolateColor'] = var36;
                var36 = _closure1_slot16;
                var34['cardSecondaryStyles'] = var36;
                var36 = 37;
                var36 = var11[var36];
                var36 = var8.bind(var4)(var36);
                var36 = var36.timingStandard;
                var34['timingStandard'] = var36;
                var34['bgRaised'] = var35;
                var21['__closure'] = var34;
                var34 = 2415891570727.0;
                var21['__workletHash'] = var34;
                var34 = _closure1_slot35;
                var21['__initData'] = var34;
                var26 = var26.bind(var27)(var21);
                var21 = {};
                var27 = _closure1_slot21;
                var27 = var27.bind(var4)(var2);
                var21['textNormal'] = var27;
                var27 = _closure1_slot24;
                var27 = var27.bind(var4)(var2);
                var21['textMuted'] = var27;
                var27 = _closure1_slot30;
                var27 = var27.bind(var4)(var2);
                var21['textBrand'] = var27;
                var27 = _closure1_slot25;
                var27 = var27.bind(var4)(var2);
                var21['borderFaint'] = var27;
                var27 = _closure1_slot26;
                var27 = var27.bind(var4)(var2);
                var21['borderStrong'] = var27;
                var27 = _closure1_slot22;
                var27 = var27.bind(var4)(var2);
                var21['headerPrimary'] = var27;
                var27 = _closure1_slot23;
                var27 = var27.bind(var4)(var2);
                var21['headerSecondary'] = var27;
                var27 = _closure1_slot27;
                var27 = var27.bind(var4)(var2);
                var21['activityIcon'] = var27;
                var27 = _closure1_slot18;
                var27 = var27.bind(var4)(var2);
                var21['bgModSubtle'] = var27;
                var27 = _closure1_slot19;
                var27 = var27.bind(var4)(var2);
                var21['bgModStrong'] = var27;
                var27 = _closure1_slot28;
                var27 = var27.bind(var4)(var2);
                var21['iconHeaderSecondary'] = var27;
                var27 = _closure1_slot29;
                var27 = var27.bind(var4)(var2);
                var21['iconInteractive'] = var27;
                var27 = _closure1_slot17;
                var27 = var27.bind(var4)(var2);
                var21['bgBasePrimary'] = var27;
                var27 = _closure1_slot20;
                var27 = var27.bind(var4)(var2);
                var21['bgSurfaceOverlay'] = var27;
                var21['bgRaised'] = var26;
                _closure2_slot19 = var21;
                var34 = var25.useCallback;
                var27 = new Array(8);
                var27[0] = var16;
                var27[1] = var14;
                var27[2] = var2;
                var27[3] = var28;
                var27[4] = var17;
                var27[5] = var24;
                var27[6] = var33;
                var27[7] = var31;
                var26 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = _closure2_slot12;
                        var3 = _closure2_slot0;
                        if(var1) { _fun0007_ip = 21; continue _fun0007 }
case 20:
                        var4 = _closure2_slot17;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var7 = var3[var1];
                        _fun0007_ip = 25; continue _fun0007;
case 21:
                        var1 = _closure2_slot9;
                        var7 = var3[var1];
case 25:
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
                        if(!(var3 != var4)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                        var3 = _closure2_slot6;
                        var3 = var3.bind(var1)();
                        _fun0007_ip = 28; continue _fun0007;
case 26:
                        var3 = _closure2_slot7;
                        var2 = var3.goBack;
                        var2 = var2.bind(var3)();
case 28:
                        return var1;
                    }
                };
                var34 = var34.bind(var25)(var26, var27);
                _closure2_slot20 = var34;
                var35 = var25.useCallback;
                var27 = new Array(6);
                var27[0] = var7;
                var27[1] = var17;
                var27[2] = var16;
                var27[3] = var19;
                var27[4] = var33;
                var27[5] = var24;
                var26 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var3 = _closure2_slot0;
                        var1 = _closure2_slot9;
                        var6 = var3[var1];
                        var1 = _closure2_slot4;
                        if(var1) { _fun0008_ip = 29; continue _fun0008 }
case 30:
                        var1 = _closure2_slot1;
                        if(!var1) { _fun0008_ip = 31; continue _fun0008 }
case 19:
                        var4 = var6.type;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 24;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var3 = var3.ClientThemeType;
                        var3 = var3.STANDARD_BACKGROUND_THEME;
                        if(!(var4 === var3)) { _fun0008_ip = 32; continue _fun0008 }
case 31:
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
                        _fun0008_ip = 29; continue _fun0008;
case 32:
                        return var1;
case 29:
                        var1 = undefined;
                        return var1;
                    }
                };
                var26 = var35.bind(var25)(var26, var27);
                _closure2_slot21 = var26;
                var35 = var25.useEffect;
                var27 = new Array(2);
                var27[0] = var31;
                var27[1] = var26;
                var26 = function() {
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
                var26 = var35.bind(var25)(var26, var27);
                var27 = var25.useEffect;
                var26 = new Array(16);
                var26[0] = var16;
                var26[1] = var34;
                var26[2] = var33;
                var26[3] = var17;
                var26[4] = var24;
                var26[5] = var19;
                var26[6] = var32;
                var26[7] = var14;
                var26[8] = var31;
                var31 = var21.textNormal;
                var26[9] = var31;
                var31 = var21.textBrand;
                var26[10] = var31;
                var26[11] = var30;
                var26[12] = var28;
                var26[13] = var7;
                var26[14] = var3;
                var26[15] = var6;
                var7 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = _closure2_slot0;
                        var1 = _closure2_slot9;
                        var2 = var2[var1];
                        var1 = _closure2_slot12;
                        if(!var1) { _fun0009_ip = 33; continue _fun0009 }
case 3:
                        var1 = _closure2_slot1;
case 33:
                        if(!var1) { _fun0009_ip = 34; continue _fun0009 }
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
case 34:
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
                                if(var1) { _fun0010_ip = 20; continue _fun0010 }
case 38:
                                var1 = null;
                                return var1;
case 20:
                                var6 = _closure1_slot37;
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
case 31:
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
                                var5 = var5.XAS5Pj;
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
case 32:
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
                                var7 = var7.i4jeWV;
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
                var7 = var27.bind(var25)(var7, var26);
                var7 = 42;
                var7 = var11[var7];
                var11 = var8.bind(var4)(var7);
                var8 = var11.useNavigatorBackPressHandler;
                var7 = function() {
                    var1 = _closure2_slot3;
                    var1 = !var1;
                    return var1;
                };
                var7 = var8.bind(var11)(var7);
                var11 = var25.useCallback;
                var8 = new Array(1);
                var8[0] = var16;
                var7 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var3 = arg1;
                        var2 = _closure2_slot9;
                        if(!(var3 !== var2)) { _fun0013_ip = 44; continue _fun0013 }
case 20:
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
                var11 = var11.bind(var25)(var7, var8);
                var7 = var2;
                if(var14) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                var2 = _closure1_slot37;
                var26 = var2.bind(var4)(var17, var3, var6);
                var8 = _closure1_slot14;
                var3 = _closure1_slot5;
                var2 = {};
                var25 = var9.segmentedControlContainer;
                var2['style'] = var25;
                var2['onLayout'] = var10;
                var27 = _closure1_slot13;
                var31 = _closure1_slot0;
                var32 = _closure1_slot2;
                var10 = 38;
                var10 = var32[var10];
                var10 = var31.bind(var4)(var10);
                var25 = var10.ThemeContextProvider;
                var10 = {};
                var10['theme'] = var26;
                var26 = 45;
                var26 = var32[var26];
                var26 = var31.bind(var4)(var26);
                var28 = var26.SegmentedControl;
                var26 = {};
                var30 = 'experimental_Large';
                var26['variant'] = var30;
                var26['state'] = var29;
                var26 = var27.bind(var4)(var28, var26);
                var10['children'] = var26;
                var25 = var27.bind(var4)(var25, var10);
                var10 = new Array(2);
                var10[0] = var25;
                var25 = 40;
                var25 = var32[var25];
                var25 = var31.bind(var4)(var25);
                var26 = var25.Text;
                var25 = {'animated': true, 'variant': 'text-xs/medium'};
                var29 = var21.headerSecondary;
                var28 = new Array(2);
                var28[0] = var29;
                var29 = var9.textCentered;
                var28[1] = var29;
                var25['style'] = var28;
                var28 = 15;
                var29 = var32[var28];
                var29 = var31.bind(var4)(var29);
                var30 = var29.intl;
                var29 = var30.string;
                var28 = var32[var28];
                var28 = var31.bind(var4)(var28);
                var28 = var28.t;
                var28 = var28.d5Gu9P;
                var28 = var29.bind(var30)(var28);
                var25['children'] = var28;
                var25 = var27.bind(var4)(var26, var25);
                var10[1] = var25;
                var2['children'] = var10;
                var10 = var8.bind(var4)(var3, var2);
                _fun0003_ip = 47; continue _fun0003;
case 45:
                var8 = _closure1_slot13;
                var3 = _closure1_slot1;
                var25 = _closure1_slot2;
                var2 = 44;
                var2 = var25[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['themes'] = var17;
                var2['currentThemeIndex'] = var16;
                var2['isPreview'] = var19;
                var2['isSynced'] = var24;
                var2['defaultIndex'] = var22;
                var2['deviceWidth'] = var20;
                var2['animatedStyles'] = var21;
                var2['hasMidnightNux'] = var13;
                var2['onThemeSelected'] = var11;
                var10 = var8.bind(var4)(var3, var2);
case 47:
                var8 = _closure1_slot4;
                var3 = var8.useEffect;
                var2 = new Array(4);
                var2[0] = var16;
                var2[1] = var17;
                var2[2] = var7;
                var2[3] = var6;
                var1 = function() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var2 = _closure2_slot0;
                        var1 = _closure2_slot9;
                        var1 = var2[var1];
                        var4 = var1.theme;
                        var2 = 'system';
                        if(!(var2 !== var4)) { _fun0014_ip = 48; continue _fun0014 }
case 19:
                        var1 = var1.theme;
                        _fun0014_ip = 49; continue _fun0014;
case 48:
                        var4 = _closure2_slot14;
                        var2 = null;
                        if(!(var2 == var4)) { _fun0014_ip = 50; continue _fun0014 }
case 2:
                        var2 = _closure1_slot12;
                        var2 = var2.DARKER;
                        _fun0014_ip = 51; continue _fun0014;
case 50:
                        var2 = _closure2_slot14;
case 51:
                        var1 = var2;
case 49:
                        var4 = _closure1_slot12;
                        var4 = var4.DARK;
                        if(!(var1 === var4)) { _fun0014_ip = 52; continue _fun0014 }
case 53:
                        var4 = _closure1_slot12;
                        var1 = var4.DARKER;
case 52:
                        var6 = _closure2_slot17;
                        var5 = var6.set;
                        var7 = _closure1_slot32;
                        var4 = var7.indexOf;
                        var4 = var4.bind(var7)(var1);
                        var4 = var5.bind(var6)(var4);
                        var3 = _closure2_slot11;
                        var2 = _closure1_slot12;
                        var4 = var2.LIGHT;
                        var2 = 'light-content';
                        if(!(var1 === var4)) { _fun0014_ip = 54; continue _fun0014 }
case 55:
                        var2 = 'dark-content';
case 54:
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var1 = var3.bind(var8)(var1, var2);
                var7 = var8.useMemo;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 46;
                var3 = var1[var3];
                var6 = var2.bind(var4)(var3);
                var3 = new Array(0);
                var20 = var7.bind(var8)(var6, var3);
                var3 = _closure1_slot14;
                var1 = var1[var5];
                var1 = var2.bind(var4)(var1);
                var2 = var1.View;
                var1 = {};
                var5 = new Array(2);
                var6 = {'width': '100%', 'height': '100%'};
                var5[0] = var6;
                var6 = !var14;
                if(var14) { _fun0003_ip = 56; continue _fun0003 }
case 57:
                var6 = var21.bgBasePrimary;
case 56:
                var5[1] = var6;
                var1['style'] = var5;
                var6 = null;
                if(!var14) { _fun0003_ip = 58; continue _fun0003 }
case 59:
                var8 = _closure1_slot13;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var5 = 47;
                var5 = var11[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var5['themes'] = var17;
                var5['themeIndex'] = var16;
                var11 = true;
                var5['isDimmed'] = var11;
                var6 = var8.bind(var4)(var7, var5);
case 58:
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot14;
                var7 = _closure1_slot0;
                var22 = _closure1_slot2;
                var6 = 48;
                var6 = var22[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.SafeAreaPaddingView;
                var6 = {};
                var24 = true;
                var6['bottom'] = var24;
                var11 = var9.container;
                var9 = new Array(2);
                var9[0] = var11;
                var11 = {};
                var11['marginTop'] = var12;
                var9[1] = var11;
                var6['style'] = var9;
                var13 = _closure1_slot13;
                var12 = _closure1_slot1;
                var9 = 49;
                var9 = var22[var9];
                var11 = var12.bind(var4)(var9);
                var9 = {};
                var9['animated'] = var24;
                var9['barStyle'] = var23;
                var11 = var13.bind(var4)(var11, var9);
                var9 = new Array(3);
                var9[0] = var11;
                var11 = 50;
                var11 = var22[var11];
                var12 = var12.bind(var4)(var11);
                var11 = {};
                var11['themes'] = var17;
                var11['themeIndex'] = var16;
                var11['animatedStyles'] = var21;
                var11['data'] = var20;
                var11['useGradientBackground'] = var14;
                if(!var14) { _fun0003_ip = 60; continue _fun0003 }
case 61:
                var14 = var19;
case 60:
                if(!var14) { _fun0003_ip = 62; continue _fun0003 }
case 63:
                var16 = var17[var16];
                var16 = var16.type;
                var17 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var18];
                var15 = var17.bind(var4)(var15);
                var15 = var15.ClientThemeType;
                var15 = var15.STANDARD_BACKGROUND_THEME;
                var14 = var16 !== var15;
case 62:
                var11['isNitroLocked'] = var14;
                var11 = var13.bind(var4)(var12, var11);
                var9[1] = var11;
                var9[2] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot36 = var4;
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
case 19:
                var10 = true;
case 35:
                var9 = var1.themeSelector;
                if(!(var9 === var4)) { _fun0015_ip = 2; continue _fun0015 }
case 25:
                var9 = 'nitro';
case 2:
                var7 = var1.hasSaveButton;
                if(!(var7 === var4)) { _fun0015_ip = 44; continue _fun0015 }
case 64:
                var7 = false;
case 44:
                var6 = var1.hasMidnightNux;
                if(!(var6 === var4)) { _fun0015_ip = 65; continue _fun0015 }
case 49:
                var6 = false;
case 65:
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
                var20 = var3.userPreset;
                _closure2_slot1 = var20;
                var15 = var3.isPreview;
                var18 = var3.userTheme;
                _closure2_slot2 = var18;
                var3 = var3.hasCustomTheme;
                _closure2_slot3 = var3;
                var3 = 21;
                var3 = var17[var3];
                var19 = var13.bind(var4)(var3);
                var18 = var19.useIsCustomThemeMobileRenderingEnabled;
                var3 = 'ConnectedThemePicker';
                var3 = var18.bind(var19)(var3);
                _closure2_slot4 = var3;
                var3 = 22;
                var3 = var17[var3];
                var13 = var13.bind(var4)(var3);
                var3 = var13.useAllMobileThemes;
                var3 = var3.bind(var13)();
                _closure2_slot5 = var3;
                var19 = _closure1_slot4;
                var18 = var19.useMemo;
                var13 = new Array(2);
                var13[0] = var20;
                var13[1] = var3;
                var3 = function() {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var4 = _closure2_slot1;
                        var3 = null;
                        var3 = var3 == var4;
                        var6 = undefined;
                        var4 = undefined;
                        if(var3) { _fun0016_ip = 35; continue _fun0016 }
case 30:
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
                                if(var1) { _fun0017_ip = 66; continue _fun0017 }
case 67:
                                var3 = var3.id;
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var2 = 23;
                                var2 = var6[var2];
                                var2 = var4.bind(var5)(var2);
                                var2 = var2.BackgroundGradientPresetId;
                                var2 = var2.EASTER_EGG;
                                var1 = var3 !== var2;
case 66:
                                if(var1) { _fun0017_ip = 68; continue _fun0017 }
case 52:
                                var1 = _closure3_slot0;
case 68:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var3 = var18.bind(var19)(var3, var13);
                _closure2_slot6 = var3;
                var18 = var19.useMemo;
                var13 = new Array(1);
                var13[0] = var3;
                var3 = function() {
                    var3 = _closure2_slot6;
                    var1 = 1;
                    var3 = var3[var1];
                    var1 = new Array(2);
                    var1[0] = var3;
                    var4 = _closure2_slot6;
                    var3 = 0;
                    var3 = var4[var3];
                    var1[1] = var3;
                    var4 = _closure2_slot6;
                    var2 = var4.slice;
                    var3 = 2;
                    var6 = var2.bind(var4)(var3);
                    var7 = var1;
                    var5 = var3;
                    var2 = arraySpread(var7, var6, var5);
                    return var1;
                };
                var13 = var18.bind(var19)(var3, var13);
                _closure2_slot7 = var13;
                var3 = 25;
                var3 = var17[var3];
                var3 = var16.bind(var4)(var3);
                var2 = function() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 26;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var6 = var7.getUserThemeIndex;
                        var5 = _closure2_slot1;
                        var4 = _closure2_slot0;
                        var3 = _closure2_slot7;
                        var2 = _closure2_slot2;
                        var1 = _closure2_slot4;
                        if(!var1) { _fun0018_ip = 13; continue _fun0018 }
case 64:
                        var1 = _closure2_slot3;
case 13:
                        var15 = var7;
                        var14 = var5;
                        var13 = var4;
                        var12 = var3;
                        var11 = var2;
                        var10 = var1;
                        var1 = var15[var6](var14, var13, var12, var11, var10, var9);
                        return var1;
                    }
                };
                var16 = var3.bind(var4)(var2);
                var3 = _closure1_slot13;
                var2 = _closure1_slot36;
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