// app/modules/main_tabs_v2/native/settings/screens/appearance/SettingsAppearanceThemePickerScreen.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = native2;
        var11 = native3;
        var3 = native6;
        var6 = native7;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var11;
        var _closure1_slot2 = var6;
        var1 = function getThemeOverride(arg1, arg2, arg3) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg3;
                var3 = arg1;
                var1 = arg2;
                var3 = var3[var1];
                var1 = null;
                var4 = var1 != var3;
                var1 = undefined;
                if(!var4) { _fun0002_ip = 45; continue _fun0002 }
 24:
                var5 = var3.theme;
                var4 = 'system';
                if(!(var4 !== var5)) { _fun0002_ip = 42; continue _fun0002 }
 37:
                var2 = var3.theme;
 42:
                var1 = var2;
 45:
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
        var4 = native4;
        var4 = var4.bind(var1)(var7);
        var _closure1_slot4 = var4;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.BackHandler;
        var _closure1_slot5 = var7;
        var4 = var4.View;
        var _closure1_slot6 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot7 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot8 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot9 = var4;
        var4 = 6;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot10 = var4;
        var4 = 7;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.SystemThemeState;
        var _closure1_slot11 = var4;
        var4 = 8;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.ThemeTypes;
        var _closure1_slot12 = var7;
        var4 = 9;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.jsx;
        var _closure1_slot13 = var8;
        var4 = var4.jsxs;
        var _closure1_slot14 = var4;
        var4 = 10;
        var4 = var6[var4];
        var9 = var5.bind(var1)(var4);
        var8 = var9.createStyles;
        var4 = {};
        var12 = {'flex': 1, 'paddingHorizontal': null, 'alignItems': 'center'};
        var10 = 11;
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
        var15 = 12;
        var15 = var6[var15];
        var16 = var5.bind(var1)(var15);
        var15 = var16.isIOS;
        var15 = var15.bind(var16)();
        if(var15) { _fun0001_ip = 408; continue _fun0001 }
 389:
        var15 = var6[var10];
        var15 = var11.bind(var1)(var15);
        var15 = var15.spacing;
        var14 = var15.PX_16;
 408:
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
        var4 = 13;
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
            var9 = 14;
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
            var1 = 15;
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
            var10 = 16;
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
            var4 = 17;
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
        var7 = 'function SettingsAppearanceThemePickerScreenTsx3(){const{mobileThemes,isClientThemesSelector,currentThemeIndex,themeTypeIndex,withTiming,interpolateColor,cardSecondaryStyles,timingStandard,bgRaised}=this.__closure;const theme=mobileThemes[isClientThemesSelector?currentThemeIndex:themeTypeIndex.get()];if(!isClientThemesSelector||theme.colors==null){return{backgroundColor:withTiming(interpolateColor(themeTypeIndex.get(),[0,1,2],cardSecondaryStyles),timingStandard)};}else{return{backgroundColor:withTiming(interpolateColor(themeTypeIndex.get(),[0,1,2],[bgRaised,bgRaised,bgRaised]),timingStandard)};}}';
        var4['code'] = var7;
        var _closure1_slot35 = var4;
        var4 = function ThemePicker(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var21 = var2.defaultIndex;
                var17 = var2.mobileThemes;
                var _closure2_slot0 = var17;
                var18 = var2.isPreview;
                var _closure2_slot1 = var18;
                var23 = var2.isSynced;
                var _closure2_slot2 = var23;
                var19 = var2.deviceWidth;
                var7 = var2.canGoBack;
                var _closure2_slot3 = var7;
                var6 = var2.themeSelector;
                var26 = var2.hasSaveButton;
                var _closure2_slot4 = var26;
                var16 = var2.hasMidnightNux;
                var32 = var2.headerTitle;
                var _closure2_slot5 = var32;
                var30 = var2.onSaveTheme;
                var _closure2_slot6 = var30;
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
                var11 = var2.bind(var4)();
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var25 = 24;
                var2 = var10[var25];
                var3 = var8.bind(var4)(var2);
                var2 = var3.useNavigation;
                var31 = var2.bind(var3)();
                var _closure2_slot7 = var31;
                var5 = _closure1_slot1;
                var2 = 25;
                var2 = var10[var2];
                var3 = var5.bind(var4)(var2);
                var2 = 26;
                var2 = var10[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.CLIENT_THEMES_THEME_SELECTOR;
                var2 = var3.bind(var4)(var2);
                var33 = var2.analyticsLocations;
                var _closure2_slot8 = var33;
                var5 = _closure1_slot4;
                var2 = var5.useState;
                var3 = var2.bind(var5)(var21);
                var2 = _closure1_slot3;
                var24 = 2;
                var2 = var2.bind(var4)(var3, var24);
                var20 = 0;
                var15 = var2[var20];
                var _closure2_slot9 = var15;
                var12 = 1;
                var2 = var2[var12];
                var _closure2_slot10 = var2;
                var3 = var5.useState;
                var2 = 27;
                var2 = var10[var2];
                var10 = var8.bind(var4)(var2);
                var8 = var10.isThemeDark;
                var2 = var17[var21];
                var2 = var2.theme;
                var8 = var8.bind(var10)(var2);
                var2 = 'dark-content';
                if(!var8) { _fun0003_ip = 339; continue _fun0003 }
 333:
                var2 = 'light-content';
 339:
                var2 = var3.bind(var5)(var2);
                var5 = _closure1_slot3;
                var2 = var5.bind(var4)(var2, var24);
                var22 = var2[var20];
                var2 = var2[var12];
                _closure2_slot11 = var2;
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = 28;
                var3 = var2[var3];
                var10 = var8.bind(var4)(var3);
                var3 = var10.useHeaderHeight;
                var13 = var3.bind(var10)();
                var3 = 'nitro';
                var14 = var3 === var6;
                _closure2_slot12 = var14;
                var27 = _closure1_slot4;
                var3 = var27.useState;
                var3 = var3.bind(var27)(var20);
                var3 = var5.bind(var4)(var3, var24);
                var29 = var3[var20];
                var3 = var3[var12];
                _closure2_slot13 = var3;
                var10 = var27.useCallback;
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
                var10 = var10.bind(var27)(var6, var3);
                var28 = var27.useMemo;
                var6 = _closure1_slot31;
                var3 = new Array(0);
                var34 = var28.bind(var27)(var6, var3);
                var28 = var27.useMemo;
                var6 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = _closure1_slot9;
                        var3 = var1.theme;
                        var1 = _closure1_slot12;
                        var1 = var1.DARK;
                        if(!(var3 !== var1)) { _fun0004_ip = 52; continue _fun0004 }
 26:
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
                        _fun0004_ip = 77; continue _fun0004;
 52:
                        var4 = _closure1_slot32;
                        var3 = var4.indexOf;
                        var2 = _closure1_slot12;
                        var2 = var2.DARKER;
                        var1 = var3.bind(var4)(var2);
 77:
                        return var1;
                    }
                };
                var3 = new Array(0);
                var28 = var28.bind(var27)(var6, var3);
                var3 = 19;
                var3 = var2[var3];
                var36 = var8.bind(var4)(var3);
                var35 = var36.useStateFromStores;
                var3 = _closure1_slot9;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 27;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.isThemeLight;
                        var1 = _closure1_slot9;
                        var1 = var1.systemTheme;
                        var1 = var3.bind(var4)(var1);
                        var2 = _closure1_slot12;
                        if(var1) { _fun0005_ip = 61; continue _fun0005 }
 53:
                        var1 = var2.DARKER;
                        _fun0005_ip = 67; continue _fun0005;
 61:
                        var1 = var2.LIGHT;
 67:
                        return var1;
                    }
                };
                var6 = var35.bind(var36)(var6, var3);
                _closure2_slot14 = var6;
                var3 = var27.useState;
                var3 = var3.bind(var27)(var28);
                var5 = var5.bind(var4)(var3, var24);
                var3 = var5[var20];
                var36 = var5[var12];
                _closure2_slot15 = var36;
                var5 = 29;
                var5 = var2[var5];
                var27 = var8.bind(var4)(var5);
                var24 = var27.useSegmentedControlState;
                var5 = {};
                var5['items'] = var34;
                var5['pageWidth'] = var29;
                var5['defaultIndex'] = var28;
                var28 = var24.bind(var27)(var5);
                var35 = var28.activeIndex;
                _closure2_slot16 = var35;
                var5 = 30;
                var24 = var2[var5];
                var34 = var8.bind(var4)(var24);
                var29 = var34.useAnimatedReaction;
                var27 = function J() {
                    var2 = _closure2_slot16;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var24 = {};
                var24['activeIndex'] = var35;
                var27['__closure'] = var24;
                var24 = 12670867470872.0;
                var27['__workletHash'] = var24;
                var24 = _closure1_slot33;
                var27['__initData'] = var24;
                var24 = function W(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 30;
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
                var35 = {};
                var37 = var2[var5];
                var37 = var8.bind(var4)(var37);
                var37 = var37.runOnJS;
                var35['runOnJS'] = var37;
                var35['setPendingThemeIndex'] = var36;
                var24['__closure'] = var35;
                var35 = 7003433484889.0;
                var24['__workletHash'] = var35;
                var35 = _closure1_slot34;
                var24['__initData'] = var35;
                var24 = var29.bind(var34)(var27, var24);
                var2 = var2[var5];
                var8 = var8.bind(var4)(var2);
                var2 = var8.useSharedValue;
                var24 = var17[var21];
                var27 = var24.theme;
                var24 = 'light';
                if(!(var24 === var27)) { _fun0003_ip = 798; continue _fun0003 }
 796:
                var12 = 0;
 798:
                var8 = var2.bind(var8)(var12);
                var2 = var28.activeIndex;
                if(!var14) { _fun0003_ip = 815; continue _fun0003 }
 812:
                var2 = var8;
 815:
                _closure2_slot17 = var2;
                var24 = _closure1_slot4;
                var20 = var24.useMemo;
                var12 = function() {
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 31;
                    var1 = var7[var1];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var1);
                    var3 = var4.hexWithOpacity;
                    var1 = 32;
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
                var35 = var20.bind(var24)(var12, var8);
                _closure2_slot18 = var35;
                var12 = _closure1_slot0;
                var8 = _closure1_slot2;
                var20 = var8[var5];
                var29 = var12.bind(var4)(var20);
                var27 = var29.useAnimatedStyle;
                var20 = function Ie() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var2 = _closure2_slot0;
                        var1 = _closure2_slot12;
                        if(var1) { _fun0006_ip = 29; continue _fun0006 }
 14:
                        var4 = _closure2_slot17;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        _fun0006_ip = 33; continue _fun0006;
 29:
                        var1 = _closure2_slot9;
 33:
                        var1 = var2[var1];
                        var2 = _closure2_slot12;
                        if(!var2) { _fun0006_ip = 55; continue _fun0006 }
 44:
                        var2 = var1.colors;
                        var1 = null;
                        if(!(var1 == var2)) { _fun0006_ip = 172; continue _fun0006 }
 55:
                        var1 = {};
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 33;
                        var4 = var9[var4];
                        var7 = undefined;
                        var6 = var8.bind(var7)(var4);
                        var5 = var6.withTiming;
                        var4 = 30;
                        var4 = var9[var4];
                        var12 = var8.bind(var7)(var4);
                        var11 = var12.interpolateColor;
                        var10 = _closure2_slot17;
                        var4 = var10.get;
                        var10 = var4.bind(var10)();
                        var4 = _closure1_slot16;
                        var2 = [0, 1, 2];
                        var4 = var11.bind(var12)(var10, var2, var4);
                        var2 = 34;
                        var2 = var9[var2];
                        var2 = var8.bind(var7)(var2);
                        var2 = var2.timingStandard;
                        var2 = var5.bind(var6)(var4, var2);
                        var1['backgroundColor'] = var2;
                        _fun0006_ip = 311; continue _fun0006;
 172:
                        var2 = {};
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 33;
                        var4 = var9[var4];
                        var7 = undefined;
                        var6 = var8.bind(var7)(var4);
                        var5 = var6.withTiming;
                        var4 = 30;
                        var4 = var9[var4];
                        var12 = var8.bind(var7)(var4);
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
                        var3 = 34;
                        var3 = var9[var3];
                        var3 = var8.bind(var7)(var3);
                        var3 = var3.timingStandard;
                        var3 = var5.bind(var6)(var4, var3);
                        var2['backgroundColor'] = var3;
                        var1 = var2;
 311:
                        return var1;
                    }
                };
                var34 = {};
                var34['mobileThemes'] = var17;
                var34['isClientThemesSelector'] = var14;
                var34['currentThemeIndex'] = var15;
                var34['themeTypeIndex'] = var2;
                var36 = 33;
                var36 = var8[var36];
                var36 = var12.bind(var4)(var36);
                var36 = var36.withTiming;
                var34['withTiming'] = var36;
                var36 = var8[var5];
                var36 = var12.bind(var4)(var36);
                var36 = var36.interpolateColor;
                var34['interpolateColor'] = var36;
                var36 = _closure1_slot16;
                var34['cardSecondaryStyles'] = var36;
                var36 = 34;
                var36 = var8[var36];
                var36 = var12.bind(var4)(var36);
                var36 = var36.timingStandard;
                var34['timingStandard'] = var36;
                var34['bgRaised'] = var35;
                var20['__closure'] = var34;
                var34 = 7123197128081.0;
                var20['__workletHash'] = var34;
                var34 = _closure1_slot35;
                var20['__initData'] = var34;
                var27 = var27.bind(var29)(var20);
                var20 = {};
                var29 = _closure1_slot21;
                var29 = var29.bind(var4)(var2);
                var20['textNormal'] = var29;
                var29 = _closure1_slot24;
                var29 = var29.bind(var4)(var2);
                var20['textMuted'] = var29;
                var29 = _closure1_slot30;
                var29 = var29.bind(var4)(var2);
                var20['textBrand'] = var29;
                var29 = _closure1_slot25;
                var29 = var29.bind(var4)(var2);
                var20['borderFaint'] = var29;
                var29 = _closure1_slot26;
                var29 = var29.bind(var4)(var2);
                var20['borderStrong'] = var29;
                var29 = _closure1_slot22;
                var29 = var29.bind(var4)(var2);
                var20['headerPrimary'] = var29;
                var29 = _closure1_slot23;
                var29 = var29.bind(var4)(var2);
                var20['headerSecondary'] = var29;
                var29 = _closure1_slot27;
                var29 = var29.bind(var4)(var2);
                var20['activityIcon'] = var29;
                var29 = _closure1_slot18;
                var29 = var29.bind(var4)(var2);
                var20['bgModSubtle'] = var29;
                var29 = _closure1_slot19;
                var29 = var29.bind(var4)(var2);
                var20['bgModStrong'] = var29;
                var29 = _closure1_slot28;
                var29 = var29.bind(var4)(var2);
                var20['iconHeaderSecondary'] = var29;
                var29 = _closure1_slot29;
                var29 = var29.bind(var4)(var2);
                var20['iconInteractive'] = var29;
                var29 = _closure1_slot17;
                var29 = var29.bind(var4)(var2);
                var20['bgBasePrimary'] = var29;
                var29 = _closure1_slot20;
                var29 = var29.bind(var4)(var2);
                var20['bgSurfaceOverlay'] = var29;
                var20['bgRaised'] = var27;
                _closure2_slot19 = var20;
                var34 = var24.useCallback;
                var29 = new Array(8);
                var29[0] = var15;
                var29[1] = var14;
                var29[2] = var2;
                var29[3] = var30;
                var29[4] = var17;
                var29[5] = var23;
                var29[6] = var33;
                var29[7] = var31;
                var27 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var1 = _closure2_slot12;
                        var3 = _closure2_slot0;
                        if(var1) { _fun0007_ip = 33; continue _fun0007 }
 14:
                        var4 = _closure2_slot17;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var7 = var3[var1];
                        _fun0007_ip = 41; continue _fun0007;
 33:
                        var1 = _closure2_slot9;
                        var7 = var3[var1];
 41:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 23;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.handleSaveTheme;
                        var4 = _closure2_slot8;
                        var3 = _closure2_slot2;
                        var3 = var5.bind(var6)(var7, var4, var3);
                        var4 = _closure2_slot6;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0007_ip = 107; continue _fun0007 }
 97:
                        var3 = _closure2_slot6;
                        var3 = var3.bind(var1)();
                        _fun0007_ip = 121; continue _fun0007;
 107:
                        var3 = _closure2_slot7;
                        var2 = var3.goBack;
                        var2 = var2.bind(var3)();
 121:
                        return var1;
                    }
                };
                var34 = var34.bind(var24)(var27, var29);
                _closure2_slot20 = var34;
                var35 = var24.useCallback;
                var29 = new Array(6);
                var29[0] = var26;
                var29[1] = var17;
                var29[2] = var15;
                var29[3] = var18;
                var29[4] = var33;
                var29[5] = var23;
                var27 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var3 = _closure2_slot0;
                        var2 = _closure2_slot9;
                        var5 = var3[var2];
                        var2 = _closure2_slot4;
                        if(var2) { _fun0008_ip = 92; continue _fun0008 }
 22:
                        var2 = _closure2_slot1;
                        if(!var2) { _fun0008_ip = 40; continue _fun0008 }
 29:
                        var3 = var5.colors;
                        var2 = null;
                        if(!(var2 == var3)) { _fun0008_ip = 88; continue _fun0008 }
 40:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 23;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.handleSaveTheme;
                        var2 = _closure2_slot8;
                        var1 = _closure2_slot2;
                        var1 = var3.bind(var4)(var5, var2, var1);
                        _fun0008_ip = 92; continue _fun0008;
 88:
                        var1 = undefined;
                        return var1;
 92:
                        var1 = undefined;
                        return var1;
                    }
                };
                var27 = var35.bind(var24)(var27, var29);
                _closure2_slot21 = var27;
                var35 = var24.useEffect;
                var29 = new Array(2);
                var29[0] = var31;
                var29[1] = var27;
                var27 = function() {
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
                var27 = var35.bind(var24)(var27, var29);
                var29 = var24.useEffect;
                var27 = new Array(16);
                var27[0] = var15;
                var27[1] = var34;
                var27[2] = var33;
                var27[3] = var17;
                var27[4] = var23;
                var27[5] = var18;
                var27[6] = var32;
                var27[7] = var14;
                var27[8] = var31;
                var31 = var20.textNormal;
                var27[9] = var31;
                var31 = var20.textBrand;
                var27[10] = var31;
                var27[11] = var7;
                var27[12] = var30;
                var27[13] = var26;
                var27[14] = var3;
                var27[15] = var6;
                var26 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var2 = _closure2_slot0;
                        var1 = _closure2_slot9;
                        var2 = var2[var1];
                        var1 = _closure2_slot12;
                        if(!var1) { _fun0009_ip = 28; continue _fun0009 }
 24:
                        var1 = _closure2_slot1;
 28:
                        if(!var1) { _fun0009_ip = 42; continue _fun0009 }
 31:
                        var3 = var2.colors;
                        var2 = null;
                        var1 = var2 != var3;
 42:
                        var _closure3_slot0 = var1;
                        var4 = _closure2_slot7;
                        var3 = var4.setOptions;
                        var2 = {'headerBackground': null, 'headerTransparent': true, 'headerBackVisible': false, 'headerLeft': null, 'headerTitle': null, 'headerTitleAlign': 'center'};
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 12;
                        var7 = var7[var1];
                        var1 = undefined;
                        var8 = var8.bind(var1)(var7);
                        var7 = var8.isIOS;
                        var8 = var7.bind(var8)();
                        var7 = undefined;
                        if(var8) { _fun0009_ip = 117; continue _fun0009 }
 110:
                        var7 = function() {
                            var4 = _closure1_slot13;
                            var3 = _closure1_slot6;
                            var2 = undefined;
                            var1 = {};
                            var1 = var4.bind(var2)(var3, var1);
                            return var1;
                        };
 117:
                        var2['headerBackground'] = var7;
                        var7 = function headerLeft() {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                                var1 = _closure2_slot3;
                                if(var1) { _fun0010_ip = 14; continue _fun0010 }
 10:
                                var1 = null;
                                return var1;
 14:
                                var6 = _closure1_slot37;
                                var3 = _closure2_slot0;
                                var2 = _closure2_slot9;
                                var1 = _closure2_slot14;
                                var4 = undefined;
                                var6 = var6.bind(var4)(var3, var2, var1);
                                var3 = _closure1_slot13;
                                var2 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var1 = 35;
                                var1 = var8[var1];
                                var1 = var2.bind(var4)(var1);
                                var2 = var1.ThemeContextProvider;
                                var1 = {};
                                var1['theme'] = var6;
                                var6 = _closure1_slot1;
                                var5 = 36;
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
 0:
                                var4 = _closure1_slot13;
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 37;
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
                                if(!(var7 == var8)) { _fun0011_ip = 134; continue _fun0011 }
 75:
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var5 = 14;
                                var7 = var10[var5];
                                var7 = var9.bind(var3)(var7);
                                var8 = var7.intl;
                                var7 = var8.string;
                                var5 = var10[var5];
                                var5 = var9.bind(var3)(var5);
                                var5 = var5.t;
                                var5 = var5.XAS5Pj;
                                var5 = var7.bind(var8)(var5);
                                _fun0011_ip = 138; continue _fun0011;
 134:
                                var5 = _closure2_slot5;
 138:
                                var1['children'] = var5;
                                var1 = var4.bind(var3)(var2, var1);
                                return var1;
                            }
                        };
                        var2['headerTitle'] = var7;
                        var7 = _closure2_slot4;
                        var5 = undefined;
                        if(!var7) { _fun0009_ip = 165; continue _fun0009 }
 158:
                        var5 = function() {
                            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                                var4 = _closure1_slot13;
                                var6 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var1 = 38;
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
                                var5 = 37;
                                var5 = var10[var5];
                                var5 = var6.bind(var3)(var5);
                                var6 = var5.Text;
                                var5 = {'animated': true, 'variant': 'text-md/semibold'};
                                var8 = _closure2_slot19;
                                var10 = var8.textBrand;
                                var8 = new Array(2);
                                var8[0] = var10;
                                var9 = _closure3_slot0;
                                if(!var9) { _fun0012_ip = 142; continue _fun0012 }
 123:
                                var10 = {};
                                var11 = 0.4;
                                var10['opacity'] = var11;
                                var9 = var10;
 142:
                                var8[1] = var9;
                                var5['style'] = var8;
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var7 = 14;
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
 165:
                        var2['headerRight'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var26 = var29.bind(var24)(var26, var27);
                var8 = var8[var25];
                var12 = var12.bind(var4)(var8);
                var8 = var12.useFocusEffect;
                var26 = var24.useCallback;
                var25 = new Array(1);
                var25[0] = var7;
                var7 = function() {
                    var5 = _closure1_slot5;
                    var4 = var5.addEventListener;
                    var3 = 'hardwareBackPress';
                    var2 = function() {
                        var1 = _closure2_slot3;
                        var1 = !var1;
                        return var1;
                    };
                    var2 = var4.bind(var5)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var2 = _closure3_slot0;
                        var1 = var2.remove;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    return var1;
                };
                var7 = var26.bind(var24)(var7, var25);
                var7 = var8.bind(var12)(var7);
                var12 = var24.useCallback;
                var8 = new Array(1);
                var8[0] = var15;
                var7 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        var3 = arg1;
                        var2 = _closure2_slot9;
                        if(!(var3 !== var2)) { _fun0013_ip = 59; continue _fun0013 }
 14:
                        var1 = _closure2_slot10;
                        var4 = undefined;
                        var1 = var1.bind(var4)(var3);
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 39;
                        var1 = var5[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.updateMobilePendingThemeIndex;
                        var1 = var1.bind(var2)(var3);
 59:
                        var1 = undefined;
                        return var1;
                    }
                };
                var12 = var12.bind(var24)(var7, var8);
                var7 = var2;
                if(var14) { _fun0003_ip = 1808; continue _fun0003 }
 1546:
                var2 = _closure1_slot37;
                var25 = var2.bind(var4)(var17, var3, var6);
                var8 = _closure1_slot14;
                var3 = _closure1_slot6;
                var2 = {};
                var24 = var11.segmentedControlContainer;
                var2['style'] = var24;
                var2['onLayout'] = var10;
                var26 = _closure1_slot13;
                var30 = _closure1_slot0;
                var31 = _closure1_slot2;
                var10 = 35;
                var10 = var31[var10];
                var10 = var30.bind(var4)(var10);
                var24 = var10.ThemeContextProvider;
                var10 = {};
                var10['theme'] = var25;
                var25 = 41;
                var25 = var31[var25];
                var25 = var30.bind(var4)(var25);
                var27 = var25.SegmentedControl;
                var25 = {};
                var29 = 'experimental_Large';
                var25['variant'] = var29;
                var25['state'] = var28;
                var25 = var26.bind(var4)(var27, var25);
                var10['children'] = var25;
                var24 = var26.bind(var4)(var24, var10);
                var10 = new Array(2);
                var10[0] = var24;
                var24 = 37;
                var24 = var31[var24];
                var24 = var30.bind(var4)(var24);
                var25 = var24.Text;
                var24 = {'animated': true, 'variant': 'text-xs/medium'};
                var28 = var20.headerSecondary;
                var27 = new Array(2);
                var27[0] = var28;
                var28 = var11.textCentered;
                var27[1] = var28;
                var24['style'] = var27;
                var27 = 14;
                var28 = var31[var27];
                var28 = var30.bind(var4)(var28);
                var29 = var28.intl;
                var28 = var29.string;
                var27 = var31[var27];
                var27 = var30.bind(var4)(var27);
                var27 = var27.t;
                var27 = var27.d5Gu9P;
                var27 = var28.bind(var29)(var27);
                var24['children'] = var27;
                var24 = var26.bind(var4)(var25, var24);
                var10[1] = var24;
                var2['children'] = var10;
                var10 = var8.bind(var4)(var3, var2);
                _fun0003_ip = 1885; continue _fun0003;
 1808:
                var8 = _closure1_slot13;
                var3 = _closure1_slot1;
                var24 = _closure1_slot2;
                var2 = 40;
                var2 = var24[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['themes'] = var17;
                var2['currentThemeIndex'] = var15;
                var2['isPreview'] = var18;
                var2['isSynced'] = var23;
                var2['defaultIndex'] = var21;
                var2['deviceWidth'] = var19;
                var2['animatedStyles'] = var20;
                var2['hasMidnightNux'] = var16;
                var2['onThemeSelected'] = var12;
                var10 = var8.bind(var4)(var3, var2);
 1885:
                var8 = _closure1_slot4;
                var3 = var8.useEffect;
                var2 = new Array(4);
                var2[0] = var15;
                var2[1] = var17;
                var2[2] = var7;
                var2[3] = var6;
                var1 = function() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                        var2 = _closure2_slot0;
                        var1 = _closure2_slot9;
                        var1 = var2[var1];
                        var4 = var1.theme;
                        var2 = 'system';
                        if(!(var2 !== var4)) { _fun0014_ip = 35; continue _fun0014 }
 28:
                        var1 = var1.theme;
                        _fun0014_ip = 67; continue _fun0014;
 35:
                        var4 = _closure2_slot14;
                        var2 = null;
                        if(!(var2 == var4)) { _fun0014_ip = 60; continue _fun0014 }
 45:
                        var2 = _closure1_slot12;
                        var2 = var2.DARKER;
                        _fun0014_ip = 64; continue _fun0014;
 60:
                        var2 = _closure2_slot14;
 64:
                        var1 = var2;
 67:
                        var4 = _closure1_slot12;
                        var4 = var4.DARK;
                        if(!(var1 === var4)) { _fun0014_ip = 94; continue _fun0014 }
 84:
                        var4 = _closure1_slot12;
                        var1 = var4.DARKER;
 94:
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
                        if(!(var1 === var4)) { _fun0014_ip = 153; continue _fun0014 }
 147:
                        var2 = 'dark-content';
 153:
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var1 = var3.bind(var8)(var1, var2);
                var7 = var8.useMemo;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 42;
                var3 = var1[var3];
                var6 = var2.bind(var4)(var3);
                var3 = new Array(0);
                var19 = var7.bind(var8)(var6, var3);
                var3 = _closure1_slot14;
                var1 = var1[var5];
                var1 = var2.bind(var4)(var1);
                var2 = var1.View;
                var1 = {};
                var5 = new Array(2);
                var6 = {'width': '100%', 'height': '100%'};
                var5[0] = var6;
                var6 = !var14;
                if(var14) { _fun0003_ip = 2012; continue _fun0003 }
 2006:
                var6 = var20.bgBasePrimary;
 2012:
                var5[1] = var6;
                var1['style'] = var5;
                var16 = null;
                var6 = null;
                if(!var14) { _fun0003_ip = 2076; continue _fun0003 }
 2027:
                var8 = _closure1_slot13;
                var7 = _closure1_slot1;
                var12 = _closure1_slot2;
                var5 = 43;
                var5 = var12[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var5['themes'] = var17;
                var5['themeIndex'] = var15;
                var12 = true;
                var5['isDimmed'] = var12;
                var6 = var8.bind(var4)(var7, var5);
 2076:
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot14;
                var7 = _closure1_slot0;
                var21 = _closure1_slot2;
                var6 = 44;
                var6 = var21[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.SafeAreaPaddingView;
                var6 = {};
                var23 = true;
                var6['bottom'] = var23;
                var12 = var11.container;
                var11 = new Array(2);
                var11[0] = var12;
                var12 = {};
                var12['marginTop'] = var13;
                var11[1] = var12;
                var6['style'] = var11;
                var13 = _closure1_slot13;
                var12 = _closure1_slot1;
                var9 = 45;
                var9 = var21[var9];
                var11 = var12.bind(var4)(var9);
                var9 = {};
                var9['animated'] = var23;
                var9['barStyle'] = var22;
                var11 = var13.bind(var4)(var11, var9);
                var9 = new Array(3);
                var9[0] = var11;
                var11 = 46;
                var11 = var21[var11];
                var12 = var12.bind(var4)(var11);
                var11 = {};
                var11['themes'] = var17;
                var11['themeIndex'] = var15;
                var11['animatedStyles'] = var20;
                var11['data'] = var19;
                var11['useGradientBackground'] = var14;
                if(!var14) { _fun0003_ip = 2239; continue _fun0003 }
 2236:
                var14 = var18;
 2239:
                if(!var14) { _fun0003_ip = 2255; continue _fun0003 }
 2242:
                var15 = var17[var15];
                var15 = var15.colors;
                var14 = var16 != var15;
 2255:
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
        var4 = 47;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/main_tabs_v2/native/settings/screens/appearance/SettingsAppearanceThemePickerScreen.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function _default(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var1 = arg1;
                var8 = var1.onSaveTheme;
                var5 = var1.headerTitle;
                var10 = var1.canGoBack;
                var4 = undefined;
                if(!(var10 === var4)) { _fun0015_ip = 31; continue _fun0015 }
 29:
                var10 = true;
 31:
                var9 = var1.themeSelector;
                if(!(var9 === var4)) { _fun0015_ip = 47; continue _fun0015 }
 41:
                var9 = 'nitro';
 47:
                var7 = var1.hasSaveButton;
                if(!(var7 === var4)) { _fun0015_ip = 59; continue _fun0015 }
 57:
                var7 = false;
 59:
                var6 = var1.hasMidnightNux;
                if(!(var6 === var4)) { _fun0015_ip = 71; continue _fun0015 }
 69:
                var6 = false;
 71:
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var3 = 18;
                var3 = var17[var3];
                var3 = var16.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var12 = var3.width;
                var11 = var3.height;
                var13 = _closure1_slot0;
                var3 = 19;
                var3 = var17[var3];
                var15 = var13.bind(var4)(var3);
                var14 = var15.useStateFromStoresObject;
                var3 = _closure1_slot7;
                var13 = new Array(4);
                var13[0] = var3;
                var3 = _closure1_slot9;
                var13[1] = var3;
                var3 = _closure1_slot10;
                var13[2] = var3;
                var3 = _closure1_slot8;
                var13[3] = var3;
                var3 = function() {
                    var1 = {};
                    var3 = _closure1_slot7;
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
                    var2 = _closure1_slot9;
                    var2 = var2.theme;
                    var1['userTheme'] = var2;
                    return var1;
                };
                var13 = var14.bind(var15)(var13, var3);
                var14 = var13.isSynced;
                var3 = var13.usingSystemTheme;
                _closure2_slot0 = var3;
                var3 = var13.userPreset;
                _closure2_slot1 = var3;
                var15 = var13.isPreview;
                var13 = var13.userTheme;
                _closure2_slot2 = var13;
                var19 = _closure1_slot4;
                var18 = var19.useMemo;
                var13 = new Array(1);
                var13[0] = var3;
                var3 = function() {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 20;
                        var3 = var5[var3];
                        var6 = undefined;
                        var4 = var4.bind(var6)(var3);
                        var3 = var4.getMobileThemesPresets;
                        var3 = var3.bind(var4)();
                        var7 = _closure2_slot1;
                        var4 = null;
                        var7 = var4 == var7;
                        var4 = undefined;
                        if(var7) { _fun0016_ip = 64; continue _fun0016 }
 55:
                        var5 = _closure2_slot1;
                        var4 = var5.id;
 64:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 21;
                        var2 = var7[var2];
                        var2 = var5.bind(var6)(var2);
                        var2 = var2.BackgroundGradientPresetId;
                        var2 = var2.EASTER_EGG;
                        var2 = var4 === var2;
                        var _closure3_slot0 = var2;
                        var2 = var3.filter;
                        var1 = function(arg1) {
                            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                                var1 = arg1;
                                var2 = var1.id;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 21;
                                var3 = var3[var1];
                                var1 = undefined;
                                var1 = var4.bind(var1)(var3);
                                var1 = var1.BackgroundGradientPresetId;
                                var1 = var1.EASTER_EGG;
                                var1 = var2 !== var1;
                                if(var1) { _fun0017_ip = 59; continue _fun0017 }
 52:
                                var1 = _closure3_slot0;
 59:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var3 = var18.bind(var19)(var3, var13);
                _closure2_slot3 = var3;
                var18 = var19.useMemo;
                var13 = new Array(1);
                var13[0] = var3;
                var3 = function() {
                    var3 = _closure2_slot3;
                    var1 = 1;
                    var3 = var3[var1];
                    var1 = new Array(2);
                    var1[0] = var3;
                    var4 = _closure2_slot3;
                    var3 = 0;
                    var3 = var4[var3];
                    var1[1] = var3;
                    var4 = _closure2_slot3;
                    var2 = var4.slice;
                    var3 = 2;
                    var6 = var2.bind(var4)(var3);
                    var7 = var1;
                    var5 = var3;
                    var2 = arraySpread(var7, var6, var5);
                    return var1;
                };
                var13 = var18.bind(var19)(var3, var13);
                _closure2_slot4 = var13;
                var3 = 22;
                var3 = var17[var3];
                var3 = var16.bind(var4)(var3);
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 23;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.getUserThemeIndex;
                    var10 = _closure2_slot1;
                    var9 = _closure2_slot0;
                    var8 = _closure2_slot4;
                    var7 = _closure2_slot2;
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var1;
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