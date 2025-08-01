// app/modules/main_tabs_v2/native/settings/screens/appearance/components/SettingsAppearanceThemeCarousel.tsx
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
    var12 = 0;
    var7 = var6[var12];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot5 = var4;
    var14 = 2;
    var4 = var6[var14];
    var15 = var11.bind(var1)(var4);
    var _closure1_slot6 = var15;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var7 = var4.jsxs;
    var _closure1_slot8 = var7;
    var4 = var4.Fragment;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var11.bind(var1)(var4);
    var7 = var8.createAnimatedComponent;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 7;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var9['gap'] = var13;
    var13 = 'center';
    var9['alignItems'] = var13;
    var4['container'] = var9;
    var9 = {};
    var9['textAlign'] = var13;
    var4['textCentered'] = var9;
    var9 = {'minHeight': 20, 'marginTop': null, 'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'center'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var9['marginTop'] = var13;
    var13 = 'row';
    var4['titleContainer'] = var9;
    var9 = {};
    var16 = 'absolute';
    var9['position'] = var16;
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_24;
    var9['left'] = var16;
    var4['floatingNuxContainer'] = var9;
    var9 = {'borderRadius': null, 'flexDirection': 'row', 'alignItems': 'center'};
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var9['borderRadius'] = var16;
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_4;
    var9['padding'] = var16;
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var9['paddingRight'] = var16;
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.shadows;
    var19 = var16.SHADOW_LOW;
    var20 = var9;
    var16 = copyDataProperties(var20, var19);
    var17 = '#000000';
    var16 = 'shadowColor';
    var9[var16] = var17;
    var4['floatingNux'] = var9;
    var9 = {};
    var17 = {};
    var16 = '90deg';
    var17['rotate'] = var16;
    var16 = new Array(1);
    var16[0] = var17;
    var9['transform'] = var16;
    var4['arrowLeft'] = var9;
    var9 = {'position': 'absolute', 'alignSelf': 'center'};
    var16 = var15.THEME_ITEM_WIDTH;
    var9['width'] = var16;
    var15 = var15.THEME_ITEM_HEIGHT;
    var9['height'] = var15;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.md;
    var9['borderRadius'] = var15;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BUTTON_OUTLINE_BRAND_BORDER;
    var9['borderColor'] = var15;
    var9['borderWidth'] = var14;
    var4['selectionBorder'] = var9;
    var9 = {};
    var9['flexDirection'] = var13;
    var4['a11yThemeList'] = var9;
    var9 = {};
    var9['flexGrow'] = var12;
    var4['a11yThemeListScroll'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['marginHorizontal'] = var13;
    var9['flexGrow'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9['borderRadius'] = var10;
    var4['button'] = var9;
    var9 = {'width': '100%', 'height': '100%', 'position': 'absolute', 'overflow': 'hidden'};
    var4['gradient'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = "function SettingsAppearanceThemeCarouselTsx1(){const{withTiming,isMidnightNuxVisible,timingStandard}=this.__closure;return{opacity:withTiming(isMidnightNuxVisible.get()?1:0,timingStandard),pointerEvents:isMidnightNuxVisible.get()?'auto':'none'};}";
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/screens/appearance/components/SettingsAppearanceThemeCarousel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SettingsAppearanceThemeCarousel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var18 = var1.themes;
            var _closure2_slot0 = var18;
            var16 = var1.currentThemeIndex;
            var _closure2_slot1 = var16;
            var19 = var1.isPreview;
            var _closure2_slot2 = var19;
            var30 = var1.defaultIndex;
            var32 = var1.deviceWidth;
            var _closure2_slot3 = var32;
            var10 = var1.isSynced;
            var13 = var1.animatedStyles;
            var2 = var1.hasMidnightNux;
            var _closure2_slot4 = var2;
            var29 = var1.onThemeSelected;
            var _closure2_slot5 = var29;
            var1 = function renderA11yThemeItem(arg1) {
                var1 = arg1;
                var6 = var1.item;
                var7 = var1.index;
                var _closure3_slot0 = var7;
                var4 = _closure1_slot7;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1['themePreset'] = var6;
                var8 = _closure2_slot2;
                var1['isPreview'] = var8;
                var6 = _closure2_slot1;
                var6 = var7 === var6;
                var1['isSelected'] = var6;
                var5 = function onPress() {
                    var3 = _closure2_slot5;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onPress'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var _closure2_slot12 = var1;
            var1 = _closure1_slot11;
            var4 = undefined;
            var15 = var1.bind(var4)();
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 8;
            var1 = var9[var1];
            var2 = var7.bind(var4)(var1);
            var1 = var2.useIsScreenReaderEnabled;
            var20 = var1.bind(var2)();
            var5 = _closure1_slot3;
            var1 = var5.useRef;
            var17 = null;
            var34 = var1.bind(var5)(var17);
            var _closure2_slot6 = var34;
            var1 = var5.useRef;
            var1 = var1.bind(var5)(var30);
            var _closure2_slot7 = var1;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var18;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = var3.findIndex;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.theme;
                        var1 = 'midnight';
                        var1 = var1 === var2;
                        return var1;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = 0;
                    var3 = var2 >= var1;
                    if(!var3) { _fun0002_ip = 39; continue _fun0002 }
 36:
                    var1 = var2;
 39:
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var _closure2_slot8 = var1;
            var8 = 4;
            var1 = var9[var8];
            var2 = var7.bind(var4)(var1);
            var1 = var2.useSharedValue;
            var31 = false;
            var6 = var1.bind(var2)(var31);
            var _closure2_slot9 = var6;
            var1 = var9[var8];
            var2 = var7.bind(var4)(var1);
            var1 = var2.useSharedValue;
            var1 = var1.bind(var2)(var31);
            var _closure2_slot10 = var1;
            var3 = var5.useEffect;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var1;
            var1 = function() {
                var2 = global;
                var5 = var2.setTimeout;
                var4 = undefined;
                var3 = function() {
                    var4 = _closure2_slot9;
                    var3 = var4.set;
                    var2 = false;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot10;
                    var2 = var3.set;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = 5500;
                var2 = var5.bind(var4)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var2 = _closure1_slot1;
            var1 = 9;
            var1 = var9[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.debounce;
            var1 = 180;
            var1 = var2.bind(var3)(var29, var1);
            var _closure2_slot11 = var1;
            var3 = var5.useCallback;
            var2 = new Array(3);
            var2[0] = var19;
            var2[1] = var29;
            var2[2] = var16;
            var1 = function(arg1) {
                var1 = arg1;
                var6 = var1.item;
                var7 = var1.index;
                var _closure3_slot0 = var7;
                var4 = _closure1_slot7;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1['themePreset'] = var6;
                var8 = _closure2_slot2;
                var1['isPreview'] = var8;
                var6 = _closure2_slot1;
                var6 = var7 === var6;
                var1['isSelected'] = var6;
                var5 = function onPress() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = _closure2_slot6;
                        var1 = var1.current;
                        var3 = null;
                        if(!(var3 != var1)) { _fun0003_ip = 146; continue _fun0003 }
 21:
                        var1 = _closure2_slot6;
                        var4 = var1.current;
                        var1 = var4.getCurrentIndex;
                        var5 = var1.bind(var4)();
                        var4 = _closure3_slot0;
                        if(!(var5 !== var4)) { _fun0003_ip = 181; continue _fun0003 }
 54:
                        var4 = _closure3_slot0;
                        if(!(var5 !== var4)) { _fun0003_ip = 105; continue _fun0003 }
 62:
                        var4 = 0;
                        if(!(var4 !== var5)) { _fun0003_ip = 150; continue _fun0003 }
 68:
                        var4 = _closure2_slot6;
                        var6 = var4.current;
                        var5 = var6.scrollTo;
                        var4 = {};
                        var7 = _closure3_slot0;
                        var4['index'] = var7;
                        var7 = true;
                        var4['animated'] = var7;
                        var4 = var5.bind(var6)(var4);
 105:
                        var4 = _closure2_slot6;
                        var5 = var4.current;
                        if(!(var3 != var5)) { _fun0003_ip = 146; continue _fun0003 }
 118:
                        var4 = var5.scrollTo;
                        var3 = {};
                        var6 = _closure3_slot0;
                        var3['index'] = var6;
                        var6 = true;
                        var3['animated'] = var6;
                        var3 = var4.bind(var5)(var3);
 146:
                        var3 = undefined;
                        return var3;
 150:
                        var3 = _closure2_slot6;
                        var5 = var3.current;
                        var4 = var5.next;
                        var3 = {};
                        var6 = _closure3_slot0;
                        var3['count'] = var6;
                        var3 = var4.bind(var5)(var3);
                        return var3;
 181:
                        var3 = _closure2_slot5;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var1['onPress'] = var5;
                var5 = false;
                var1['isNew'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var33 = var3.bind(var5)(var1, var2);
            var1 = var9[var8];
            var3 = var7.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function P() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 11;
                    var2 = var5[var2];
                    var8 = undefined;
                    var6 = var4.bind(var8)(var2);
                    var5 = var6.withTiming;
                    var7 = _closure2_slot9;
                    var4 = var7.get;
                    var7 = var4.bind(var7)();
                    var4 = 0;
                    if(!var7) { _fun0004_ip = 56; continue _fun0004 }
 53:
                    var4 = 1;
 56:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 12;
                    var3 = var9[var3];
                    var3 = var7.bind(var8)(var3);
                    var3 = var3.timingStandard;
                    var3 = var5.bind(var6)(var4, var3);
                    var1['opacity'] = var3;
                    var3 = _closure2_slot9;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 'none';
                    if(!var3) { _fun0004_ip = 116; continue _fun0004 }
 112:
                    var2 = 'auto';
 116:
                    var1['pointerEvents'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var11 = 11;
            var11 = var9[var11];
            var11 = var7.bind(var4)(var11);
            var11 = var11.withTiming;
            var5['withTiming'] = var11;
            var5['isMidnightNuxVisible'] = var6;
            var6 = 12;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.timingStandard;
            var5['timingStandard'] = var6;
            var1['__closure'] = var5;
            var5 = 3854555745742.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot12;
            var1['__initData'] = var5;
            var12 = var2.bind(var3)(var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot9;
            var1 = {};
            var6 = _closure1_slot4;
            var5 = {};
            var7 = var15.titleContainer;
            var5['style'] = var7;
            var7 = var18[var16];
            var7 = var7.colors;
            var7 = var17 != var7;
            var9 = null;
            if(!var7) { _fun0001_ip = 589; continue _fun0001 }
 507:
            var21 = _closure1_slot7;
            var11 = _closure1_slot10;
            var7 = {};
            var23 = _closure1_slot1;
            var25 = _closure1_slot2;
            var22 = 13;
            var22 = var25[var22];
            var22 = var23.bind(var4)(var22);
            var7['source'] = var22;
            var22 = var13.iconHeaderSecondary;
            var7['style'] = var22;
            var23 = _closure1_slot0;
            var22 = 5;
            var22 = var25[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.IconSizes;
            var22 = var22.SMALL_20;
            var7['size'] = var22;
            var9 = var21.bind(var4)(var11, var7);
 589:
            var7 = new Array(2);
            var7[0] = var9;
            var9 = _closure1_slot7;
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var11 = 14;
            var21 = var21[var11];
            var21 = var22.bind(var4)(var21);
            var22 = var21.Text;
            var21 = {'animated': true, 'style': null, 'variant': 'heading-sm/semibold'};
            var25 = true;
            var23 = var13.headerSecondary;
            var21['style'] = var23;
            var26 = var18[var16];
            var23 = var26.getName;
            var23 = var23.bind(var26)();
            var21['children'] = var23;
            var21 = var9.bind(var4)(var22, var21);
            var7[1] = var21;
            var5['children'] = var7;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var7 = _closure1_slot4;
            var6 = {};
            if(var20) { _fun0001_ip = 931; continue _fun0001 }
 712:
            var22 = _closure1_slot8;
            var21 = _closure1_slot9;
            var20 = {};
            var28 = _closure1_slot7;
            var26 = _closure1_slot4;
            var23 = {};
            var27 = 'none';
            var23['pointerEvents'] = var27;
            var27 = var15.selectionBorder;
            var23['style'] = var27;
            var26 = var28.bind(var4)(var26, var23);
            var23 = new Array(2);
            var23[0] = var26;
            var27 = _closure1_slot1;
            var35 = _closure1_slot2;
            var26 = 15;
            var26 = var35[var26];
            var27 = var27.bind(var4)(var26);
            var26 = {};
            var26['ref'] = var34;
            var26['data'] = var18;
            var26['renderItem'] = var33;
            var33 = {'width': null, 'justifyContent': 'center', 'alignItems': 'center'};
            var33['width'] = var32;
            var32 = _closure1_slot6;
            var34 = var32.THEME_ITEM_HORIZONTAL_MARGIN;
            var33['marginLeft'] = var34;
            var26['style'] = var33;
            var34 = var32.THEME_ITEM_WIDTH;
            var33 = var32.THEME_ITEM_HORIZONTAL_MARGIN;
            var33 = var34 + var33;
            var26['width'] = var33;
            var32 = var32.THEME_ITEM_HEIGHT;
            var26['height'] = var32;
            var26['loop'] = var31;
            var26['pagingEnabled'] = var31;
            var26['defaultIndex'] = var30;
            var26['onSnapToItem'] = var29;
            var29 = 200;
            var26['scrollAnimationDuration'] = var29;
            var29 = function onProgressChange(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg2;
                    var2 = global;
                    var4 = var2.Math;
                    var1 = var4.round;
                    var6 = var1.bind(var4)(var3);
                    var4 = _closure2_slot7;
                    var4 = var4.current;
                    if(!(var6 !== var4)) { _fun0005_ip = 113; continue _fun0005 }
 37:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 16;
                    var7 = var10[var4];
                    var5 = undefined;
                    var8 = var9.bind(var5)(var7);
                    var7 = var8.triggerHapticFeedback;
                    var4 = var10[var4];
                    var4 = var9.bind(var5)(var4);
                    var4 = var4.HapticFeedbackTypes;
                    var4 = var4.IMPACT_LIGHT;
                    var4 = var7.bind(var8)(var4);
                    var4 = _closure2_slot7;
                    var4['current'] = var6;
                    var4 = _closure2_slot11;
                    var4 = var4.bind(var5)(var6);
 113:
                    var4 = _closure2_slot4;
                    if(!var4) { _fun0005_ip = 245; continue _fun0005 }
 123:
                    var4 = _closure1_slot6;
                    var5 = var4.THEME_ITEM_WIDTH;
                    var4 = var4.THEME_ITEM_HORIZONTAL_MARGIN;
                    var6 = var5 + var4;
                    var5 = var2.Math;
                    var4 = var5.ceil;
                    var2 = _closure2_slot3;
                    var2 = var2 / var6;
                    var5 = var4.bind(var5)(var2);
                    var4 = _closure2_slot8;
                    var2 = 2;
                    var2 = var5 / var2;
                    var2 = var4 + var2;
                    var4 = var3 < var2;
                    if(!var4) { _fun0005_ip = 209; continue _fun0005 }
 193:
                    var5 = _closure2_slot10;
                    var3 = var5.set;
                    var2 = true;
                    var2 = var3.bind(var5)(var2);
 209:
                    var3 = _closure2_slot9;
                    var2 = var3.set;
                    var5 = _closure2_slot10;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = !var1;
                    if(!var1) { _fun0005_ip = 240; continue _fun0005 }
 237:
                    var1 = !var4;
 240:
                    var1 = var2.bind(var3)(var1);
 245:
                    var1 = undefined;
                    return var1;
                }
            };
            var26['onProgressChange'] = var29;
            var26 = var28.bind(var4)(var27, var26);
            var23[1] = var26;
            var20['children'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            _fun0001_ip = 994; continue _fun0001;
 931:
            var23 = _closure1_slot7;
            var22 = _closure1_slot5;
            var21 = {};
            var21['horizontal'] = var25;
            var25 = var15.a11yThemeListScroll;
            var21['style'] = var25;
            var25 = var15.a11yThemeList;
            var21['contentContainerStyle'] = var25;
            var25 = var18.map;
            var24 = function(arg1, arg2) {
                var7 = arg2;
                var5 = _closure1_slot7;
                var4 = _closure1_slot4;
                var3 = {};
                var6 = _closure2_slot12;
                var1 = {};
                var2 = arg1;
                var1['item'] = var2;
                var1['index'] = var7;
                var2 = undefined;
                var1 = var6.bind(var2)(var1);
                var3['children'] = var1;
                var1 = global;
                var1 = var1.HermesInternal;
                var6 = var1.concat;
                var1 = 'theme-';
                var1 = var6.bind(var1)(var7);
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var24 = var25.bind(var18)(var24);
            var21['children'] = var24;
            var20 = var23.bind(var4)(var22, var21);
 994:
            var6['children'] = var20;
            var6 = var9.bind(var4)(var7, var6);
            var5[1] = var6;
            var9 = _closure1_slot7;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var11];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'animated': true, 'style': null, 'variant': 'text-sm/medium'};
            var21 = var13.headerSecondary;
            var20 = new Array(2);
            var20[0] = var21;
            var21 = var15.textCentered;
            var20[1] = var21;
            var6['style'] = var20;
            if(!var19) { _fun0001_ip = 1094; continue _fun0001 }
 1081:
            var16 = var18[var16];
            var16 = var16.colors;
            if(!(var17 == var16)) { _fun0001_ip = 1169; continue _fun0001 }
 1094:
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 17;
            var17 = var20[var16];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            if(var10) { _fun0001_ip = 1154; continue _fun0001 }
 1141:
            var10 = var16.d5Gu9P;
            var10 = var17.bind(var18)(var10);
            _fun0001_ip = 1167; continue _fun0001;
 1154:
            var16 = var16.lhV0Y2;
            var10 = var17.bind(var18)(var16);
 1167:
            _fun0001_ip = 1226; continue _fun0001;
 1169:
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 17;
            var17 = var20[var16];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.VqGKm5;
            var10 = var17.bind(var18)(var16);
 1226:
            var6['children'] = var10;
            var6 = var9.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var6 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var15.container;
            var1['style'] = var5;
            var7 = _closure1_slot7;
            var5 = {};
            var9 = var15.floatingNuxContainer;
            var5['style'] = var9;
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var8 = var17[var8];
            var8 = var16.bind(var4)(var8);
            var9 = var8.View;
            var8 = {};
            var18 = var15.floatingNux;
            var10 = new Array(4);
            var10[0] = var18;
            var10[1] = var12;
            var12 = var13.bgSurfaceOverlay;
            var10[2] = var12;
            var12 = var13.borderFaint;
            var10[3] = var12;
            var8['style'] = var10;
            var12 = _closure1_slot10;
            var10 = {};
            var18 = var15.arrowLeft;
            var15 = new Array(2);
            var15[0] = var18;
            var18 = var13.iconInteractive;
            var15[1] = var18;
            var10['style'] = var15;
            var15 = 18;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var10['source'] = var15;
            var16 = _closure1_slot0;
            var14 = 5;
            var14 = var17[var14];
            var14 = var16.bind(var4)(var14);
            var14 = var14.IconSizes;
            var14 = var14.REFRESH_SMALL_16;
            var10['size'] = var14;
            var12 = var7.bind(var4)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var11 = var17[var11];
            var11 = var16.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'animated': true, 'style': null, 'variant': 'eyebrow', 'maxFontSizeMultiplier': 1.5};
            var13 = var13.textNormal;
            var11['style'] = var13;
            var13 = 17;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.y2b7CA;
            var13 = var14.bind(var15)(var13);
            var11['children'] = var13;
            var11 = var7.bind(var4)(var12, var11);
            var10[1] = var11;
            var8['children'] = var10;
            var8 = var3.bind(var4)(var9, var8);
            var5['children'] = var8;
            var7 = var7.bind(var4)(var2, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();