// app/modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var1 = function Placeholder(arg1) {
        var1 = arg1;
        var6 = var1.start;
        var7 = var1.end;
        var2 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 7;
        var1 = var9[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var1 = var3.useFastestListTableRowPlaceholderStyles;
        var8 = var1.bind(var3)();
        var10 = _closure1_slot4;
        var3 = var10.useState;
        var1 = function() {
            var1 = {};
            var2 = global;
            var3 = var2.Math;
            var2 = var3.random;
            var3 = var2.bind(var3)();
            var2 = 80;
            var3 = var2 * var3;
            var2 = 10;
            var2 = var2 + var3;
            var3 = var2 | 0;
            var2 = '%';
            var2 = var3 + var2;
            var1['width'] = var2;
            return var1;
        };
        var10 = var3.bind(var10)(var1);
        var3 = _closure1_slot3;
        var1 = 1;
        var3 = var3.bind(var4)(var10, var1);
        var1 = 0;
        var11 = var3[var1];
        var3 = _closure1_slot7;
        var1 = 8;
        var1 = var9[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.TableRow;
        var1 = {};
        var1['end'] = var7;
        var1['start'] = var6;
        var9 = _closure1_slot7;
        var7 = _closure1_slot5;
        var6 = {};
        var12 = var8.placeholderUsername;
        var10 = new Array(2);
        var10[0] = var12;
        var10[1] = var11;
        var6['style'] = var10;
        var6 = var9.bind(var4)(var7, var6);
        var1['label'] = var6;
        var7 = _closure1_slot7;
        var6 = _closure1_slot5;
        var5 = {};
        var8 = var8.placeholderAvatar;
        var5['style'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['icon'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function PlaceholderSection() {
        var4 = _closure1_slot7;
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = {};
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var _closure1_slot16 = var1;
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
    var4 = var14.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var13 = 2;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var12 = var4.USERS_LIST_PADDING_BETWEEN_SECTIONS;
    var _closure1_slot6 = var12;
    var15 = var4.USERS_LIST_SECTION_BOTTOM_PADDING;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot7 = var8;
    var8 = var4.jsxs;
    var _closure1_slot8 = var8;
    var4 = var4.Fragment;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 1, 'overflow': 'hidden'};
    var11 = -1;
    var11 = var11 * var15;
    var10['top'] = var11;
    var4['sectionHeader'] = var10;
    var10 = {};
    var11 = 6;
    var15 = var6[var11];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.MOBILE_ACTIONSHEET_BACKGROUND;
    var10['backgroundColor'] = var15;
    var4['stickyHeader'] = var10;
    var10 = {'flex': 1, 'backgroundColor': null, 'paddingHorizontal': 16};
    var15 = var6[var11];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.MOBILE_ACTIONSHEET_BACKGROUND;
    var10['backgroundColor'] = var15;
    var4['list'] = var10;
    var10 = {};
    var10['paddingBottom'] = var12;
    var4['emptySection'] = var10;
    var10 = {'flex': 1, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'flex-start', 'justifyContent': 'space-between', 'paddingTop': null, 'textTransform': 'none'};
    var10['paddingTop'] = var12;
    var4['section'] = var10;
    var10 = {};
    var12 = '100%';
    var10['height'] = var12;
    var4['badgeWrapper'] = var10;
    var10 = {'position': 'absolute', 'left': null, 'top': 5};
    var12 = var6[var11];
    var12 = var14.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var11 = var6[var11];
    var11 = var14.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var11 = var11 / var13;
    var11 = var12 + var11;
    var10['left'] = var11;
    var4['badge'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var8 = 'function UsersFastListTsx1(){const{disableThemedGradient,scrollPosValue,stickyAt}=this.__closure;var _scrollPosValue;if(disableThemedGradient){return false;}const scrollPos=(_scrollPosValue=scrollPosValue)===null||_scrollPosValue===void 0?void 0:_scrollPosValue.get();if(scrollPos==null||stickyAt==null){return false;}return scrollPos>=stickyAt;}';
    var4['code'] = var8;
    var _closure1_slot11 = var4;
    var4 = {};
    var8 = "function UsersFastListTsx2(){const{isSticky,styles}=this.__closure;return{backgroundColor:isSticky.get()?styles.stickyHeader.backgroundColor:'transparent'};}";
    var4['code'] = var8;
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = 'function UsersFastListTsx3(){const{isSticky}=this.__closure;return{opacity:isSticky.get()?1:0};}';
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var8 = var7.memo;
    var4 = function UserSectionInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var16 = var1.title;
            var7 = var1.colorOverride;
            var _closure2_slot0 = var7;
            var20 = var1.actionTitle;
            var19 = var1.action;
            var26 = var1.badge;
            var22 = var1.scrollPosValue;
            var _closure2_slot1 = var22;
            var21 = var1.stickyAt;
            var _closure2_slot2 = var21;
            var3 = var1.disableStickySections;
            var10 = var1.disableThemedGradient;
            var _closure2_slot3 = var10;
            var5 = _closure1_slot10;
            var4 = undefined;
            var5 = var5.bind(var4)();
            var _closure2_slot4 = var5;
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var8 = 9;
            var8 = var6[var8];
            var9 = var9.bind(var4)(var8);
            var8 = 'UserSectionInner';
            var18 = var9.bind(var4)(var8);
            var11 = _closure1_slot4;
            var9 = var11.useMemo;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = {};
                    var3 = _closure2_slot0;
                    var2['color'] = var3;
                    var1 = var2;
case 2:
                    return var1;
                }
            };
            var15 = var9.bind(var11)(var7, var8);
            var7 = _closure1_slot0;
            var8 = 10;
            var8 = var6[var8];
            var9 = var7.bind(var4)(var8);
            var8 = var9.useClientThemesOverride;
            var11 = var8.bind(var9)();
            var _closure2_slot5 = var11;
            var13 = _closure1_slot4;
            var12 = var13.useMemo;
            var8 = var5.section;
            var9 = new Array(2);
            var9[0] = var8;
            var9[1] = var11;
            var8 = function() {
                var1 = _closure2_slot4;
                var3 = var1.section;
                var1 = new Array(2);
                var1[0] = var3;
                var2 = _closure2_slot5;
                var1[1] = var2;
                return var1;
            };
            var9 = var12.bind(var13)(var8, var9);
            var8 = 11;
            var12 = var6[var8];
            var14 = var7.bind(var4)(var12);
            var13 = var14.useDerivedValue;
            var12 = function P() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var1 = _closure2_slot1;
                    var5 = null;
                    var1 = var5 == var1;
                    var3 = undefined;
                    if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var4 = _closure2_slot1;
                    var1 = var4.get;
                    var3 = var1.bind(var4)();
case 6:
                    var1 = var5 != var3;
                    if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var4 = _closure2_slot2;
                    var1 = var5 != var4;
case 8:
                    if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var2 = _closure2_slot2;
                    var1 = var3 >= var2;
case 10:
                    return var1;
case 4:
                    var1 = false;
                    return var1;
                }
            };
            var17 = {};
            var17['disableThemedGradient'] = var10;
            var17['scrollPosValue'] = var22;
            var17['stickyAt'] = var21;
            var12['__closure'] = var17;
            var17 = 5274040210799.0;
            var12['__workletHash'] = var17;
            var17 = _closure1_slot11;
            var12['__initData'] = var17;
            var13 = var13.bind(var14)(var12);
            var _closure2_slot6 = var13;
            var12 = var6[var8];
            var17 = var7.bind(var4)(var12);
            var14 = var17.useAnimatedStyle;
            var12 = function x() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot6;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = 'transparent';
                    if(!var4) { _fun0004_ip = 12; continue _fun0004 }
case 7:
                    var3 = _closure2_slot4;
                    var3 = var3.stickyHeader;
                    var2 = var3.backgroundColor;
case 12:
                    var1['backgroundColor'] = var2;
                    return var1;
                }
            };
            var21 = {};
            var21['isSticky'] = var13;
            var21['styles'] = var5;
            var12['__closure'] = var21;
            var21 = 6340072007400.0;
            var12['__workletHash'] = var21;
            var21 = _closure1_slot12;
            var12['__initData'] = var21;
            var21 = var14.bind(var17)(var12);
            var _closure2_slot7 = var21;
            var17 = _closure1_slot4;
            var14 = var17.useMemo;
            var22 = var5.sectionHeader;
            var12 = new Array(3);
            var12[0] = var22;
            var12[1] = var21;
            var12[2] = var11;
            var11 = function() {
                var1 = _closure2_slot4;
                var3 = var1.sectionHeader;
                var1 = new Array(3);
                var1[0] = var3;
                var3 = _closure2_slot7;
                var1[1] = var3;
                var2 = _closure2_slot5;
                var1[2] = var2;
                return var1;
            };
            var11 = var14.bind(var17)(var11, var12);
            var6 = var6[var8];
            var7 = var7.bind(var4)(var6);
            var6 = var7.useAnimatedStyle;
            var2 = function w() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var3 = _closure2_slot6;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 0;
                    if(!var3) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                    var2 = 1;
case 13:
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var12['isSticky'] = var13;
            var2['__closure'] = var12;
            var12 = 13270974904859.0;
            var2['__workletHash'] = var12;
            var12 = _closure1_slot13;
            var2['__initData'] = var12;
            var13 = var6.bind(var7)(var2);
            var12 = null;
            if(!(var12 == var16)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            if(!(var12 != var20)) { _fun0001_ip = 17; continue _fun0001 }
case 15:
            var7 = _closure1_slot8;
            var6 = _closure1_slot5;
            var2 = {};
            var2['style'] = var9;
            var14 = _closure1_slot0;
            var9 = _closure1_slot2;
            var21 = 12;
            var9 = var9[var21];
            var9 = var14.bind(var4)(var9);
            var14 = var9.Text;
            var9 = {'maxFontSizeMultiplier': 2, 'accessibilityRole': 'header'};
            var17 = 'text-sm/semibold';
            if(!var18) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var17 = 'text-md/medium';
case 18:
            var9['variant'] = var17;
            var17 = 'interactive-text-default';
            if(!var18) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var17 = 'text-subtle';
case 20:
            var9['color'] = var17;
            var9['style'] = var15;
            var15 = new Array(2);
            var15[0] = var16;
            var17 = var12 != var26;
            var16 = null;
            if(!var17) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var22 = _closure1_slot7;
            var18 = _closure1_slot5;
            var17 = {};
            var23 = var5.badgeWrapper;
            var17['style'] = var23;
            var25 = _closure1_slot7;
            var24 = _closure1_slot1;
            var27 = _closure1_slot2;
            var23 = 13;
            var23 = var27[var23];
            var24 = var24.bind(var4)(var23);
            var23 = {};
            var27 = var5.badge;
            var23['style'] = var27;
            var23['value'] = var26;
            var23 = var25.bind(var4)(var24, var23);
            var17['children'] = var23;
            var16 = var22.bind(var4)(var18, var17);
case 22:
            var15[1] = var16;
            var9['children'] = var15;
            var14 = var7.bind(var4)(var14, var9);
            var9 = new Array(2);
            var9[0] = var14;
            var14 = var12 != var20;
            var12 = null;
            if(!var14) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var16 = _closure1_slot7;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var14 = 14;
            var14 = var17[var14];
            var14 = var18.bind(var4)(var14);
            var15 = var14.PressableOpacity;
            var14 = {};
            var14['onPress'] = var19;
            var19 = _closure1_slot7;
            var17 = var17[var21];
            var17 = var18.bind(var4)(var17);
            var18 = var17.Text;
            var17 = {'variant': 'text-sm/semibold', 'color': 'text-brand'};
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var14['children'] = var17;
            var12 = var16.bind(var4)(var15, var14);
case 24:
            var9[1] = var12;
            var2['children'] = var9;
            var9 = var7.bind(var4)(var6, var2);
            var2 = var9;
            if(var3) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var7 = _closure1_slot8;
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var6.bind(var4)(var3);
            var6 = var3.View;
            var3 = {};
            var3['style'] = var11;
            var10 = !var10;
            if(!var10) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var12 = _closure1_slot7;
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var8 = var16[var8];
            var8 = var14.bind(var4)(var8);
            var11 = var8.View;
            var8 = {};
            var8['style'] = var13;
            var15 = _closure1_slot7;
            var13 = 15;
            var13 = var16[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {'absolute': true, 'tall': true, 'wide': true, 'mix': true};
            var13 = var15.bind(var4)(var14, var13);
            var8['children'] = var13;
            var10 = var12.bind(var4)(var11, var8);
case 28:
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var3['children'] = var8;
            var2 = var7.bind(var4)(var6, var3);
case 26:
            return var2;
case 17:
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var5.emptySection;
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot14 = var4;
    var4 = var7.forwardRef;
    var2 = function UsersFastListInner(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var19 = var1.sections;
            var14 = var1.getItemProps;
            var _closure2_slot0 = var14;
            var26 = var1.getSectionProps;
            var _closure2_slot1 = var26;
            var11 = var1.insetStart;
            var10 = var1.insetEnd;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0006_ip = 30; continue _fun0006 }
case 31:
            var10 = 0;
case 30:
            var16 = var1.disableBottomSafeZone;
            if(!(var16 === var4)) { _fun0006_ip = 32; continue _fun0006 }
case 33:
            var16 = false;
case 32:
            var18 = var1.disableStickySections;
            if(!(var18 === var4)) { _fun0006_ip = 34; continue _fun0006 }
case 35:
            var18 = false;
case 34:
            var _closure2_slot2 = var18;
            var12 = var1.disableThemedGradient;
            var _closure2_slot3 = var12;
            var24 = var1.disableBackgroundOverlay;
            var _closure2_slot4 = var24;
            var9 = var1.inActionSheet;
            var5 = var1.listHeaderSize;
            var8 = var1.onScroll;
            var7 = var1.onLayout;
            var13 = var1.renderListHeader;
            var22 = var1.listStyleOverride;
            var _closure2_slot5 = var22;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var2 = _closure1_slot10;
            var6 = var2.bind(var4)();
            _closure2_slot6 = var6;
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 16;
            var2 = var17[var2];
            var2 = var15.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var15 = var2.bottom;
            var2 = 0;
            if(var16) { _fun0006_ip = 36; continue _fun0006 }
case 37:
            var2 = var15;
case 36:
            var10 = var10 + var2;
            var2 = _closure1_slot1;
            var20 = _closure1_slot2;
            var15 = 17;
            var15 = var20[var15];
            var15 = var2.bind(var4)(var15);
            var15 = var15.bind(var4)();
            var16 = 18;
            var16 = var20[var16];
            var16 = var2.bind(var4)(var16);
            var16 = var16.bind(var4)();
            _closure2_slot7 = var16;
            var21 = _closure1_slot0;
            var17 = 10;
            var17 = var20[var17];
            var21 = var21.bind(var4)(var17);
            var17 = var21.useClientThemesOverride;
            var23 = var17.bind(var21)();
            _closure2_slot8 = var23;
            var25 = _closure1_slot4;
            var21 = var25.useCallback;
            var17 = new Array(3);
            var17[0] = var26;
            var17[1] = var18;
            var17[2] = var12;
            var12 = function(arg1, arg2, arg3, arg4) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var4 = undefined;
                    var1 = arg1;
                    var6 = var2.bind(var4)(var1);
                    var1 = null;
                    var2 = var1 == var6;
                    var3 = undefined;
                    if(var2) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                    var3 = var6.type;
case 38:
                    var2 = 'placeholder';
                    if(!(var2 !== var3)) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                    var2 = 'section';
                    if(!(var2 !== var3)) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                    return var1;
case 30:
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot14;
                    var1 = {};
                    var8 = var6.props;
                    var9 = var1;
                    var6 = copyDataProperties(var9, var8);
                    var7 = _closure2_slot2;
                    var6 = 'disableStickySections';
                    var1[var6] = var7;
                    var6 = _closure2_slot3;
                    var5 = 'disableThemedGradient';
                    var1[var5] = var6;
                    var6 = arg3;
                    var5 = 'scrollPosValue';
                    var1[var5] = var6;
                    var6 = arg4;
                    var5 = 'stickyAt';
                    var1[var5] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
case 40:
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot16;
                    var1 = {};
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var12 = var21.bind(var25)(var12, var17);
            var25 = _closure1_slot4;
            var21 = var25.useCallback;
            var17 = new Array(1);
            var17[0] = var14;
            var14 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var2 = arg1;
                    var1 = arg2;
                    var5 = var3.bind(var4)(var2, var1);
                    var1 = null;
                    var2 = var1 == var5;
                    var3 = undefined;
                    if(var2) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                    var3 = var5.type;
case 42:
                    var2 = 'user';
                    if(!(var2 !== var3)) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                    var2 = 'placeholder';
                    if(!(var2 !== var3)) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                    var2 = 'gdm';
                    if(!(var2 !== var3)) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                    var2 = 'channel';
                    if(!(var2 !== var3)) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                    var2 = 'custom';
                    if(!(var2 !== var3)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    return var1;
case 52:
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot9;
                    var1 = {};
                    var6 = var5.component;
                    var6 = var6.bind(var5)();
                    var1['children'] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
case 50:
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 21;
                    var1 = var6[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var7 = var5.props;
                    var8 = var1;
                    var6 = copyDataProperties(var8, var7);
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
case 48:
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 20;
                    var1 = var6[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var7 = var5.props;
                    var8 = var1;
                    var6 = copyDataProperties(var8, var7);
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
case 46:
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot15;
                    var1 = {};
                    var7 = var5.props;
                    var8 = var1;
                    var6 = copyDataProperties(var8, var7);
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
case 44:
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 19;
                    var1 = var6[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var7 = var5.props;
                    var8 = var1;
                    var5 = copyDataProperties(var8, var7);
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var14 = var21.bind(var25)(var14, var17);
            var25 = _closure1_slot4;
            var21 = var25.useCallback;
            var17 = new Array(2);
            var17[0] = var26;
            var17[1] = var16;
            var16 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var5 = undefined;
                    var2 = arg1;
                    var3 = var3.bind(var5)(var2);
                    var4 = null;
                    var2 = var4 == var3;
                    if(var2) { _fun0009_ip = 54; continue _fun0009 }
case 13:
                    var5 = var3.type;
case 54:
                    var2 = 'placeholder';
                    if(!(var2 !== var5)) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                    var2 = 'section';
                    if(!(var2 !== var5)) { _fun0009_ip = 30; continue _fun0009 }
case 57:
                    var2 = 0;
                    return var2;
case 30:
                    var2 = var3.props;
                    var5 = var2.hideTitle;
                    var2 = 0;
                    if(var5) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                    var3 = var3.props;
                    var3 = var3.title;
                    if(!(var4 != var3)) { _fun0009_ip = 52; continue _fun0009 }
case 60:
                    var3 = _closure2_slot7;
                    _fun0009_ip = 61; continue _fun0009;
case 52:
                    var3 = _closure1_slot6;
case 61:
                    var2 = var3;
case 58:
                    return var2;
case 55:
                    var1 = _closure2_slot7;
                    return var1;
                }
            };
            var17 = var21.bind(var25)(var16, var17);
            var21 = _closure1_slot4;
            var16 = var21.useMemo;
            var25 = var6.list;
            var6 = new Array(4);
            var6[0] = var25;
            var6[1] = var24;
            var6[2] = var23;
            var6[3] = var22;
            var3 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot6;
                    var3 = var1.list;
                    var1 = new Array(3);
                    var1[0] = var3;
                    var3 = _closure2_slot4;
                    if(!var3) { _fun0010_ip = 43; continue _fun0010 }
case 39:
                    var3 = _closure2_slot8;
case 43:
                    var1[1] = var3;
                    var2 = _closure2_slot5;
                    var1[2] = var2;
                    return var1;
                }
            };
            var16 = var16.bind(var21)(var3, var6);
            var3 = 7;
            var3 = var20[var3];
            var3 = var2.bind(var4)(var3);
            var6 = var3.bind(var4)();
            var3 = _closure1_slot7;
            var1 = 22;
            var1 = var20[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['sections'] = var19;
            var18 = !var18;
            var1['sectionHeaderIsSticky'] = var18;
            var1['sectionHeaderSize'] = var17;
            var17 = 'windowSize';
            var1['estimatedListSize'] = var17;
            var17 = arg2;
            var1['ref'] = var17;
            var1['style'] = var16;
            var1['itemSize'] = var15;
            var1['renderItem'] = var14;
            var1['renderListHeader'] = var13;
            var1['renderSectionHeader'] = var12;
            var1['insetStart'] = var11;
            var1['insetEnd'] = var10;
            var10 = 'on-drag';
            var1['keyboardDismissMode'] = var10;
            var10 = 'always';
            var1['keyboardShouldPersistTaps'] = var10;
            var1['inActionSheet'] = var9;
            var1['onScroll'] = var8;
            var1['onLayout'] = var7;
            var1['placeholderConfig'] = var6;
            var6 = 'users-fast-list';
            var1['listId'] = var6;
            var1['listHeaderSize'] = var5;
            var5 = true;
            var1['listHeaderAlwaysMounted'] = var5;
            var6 = 'callbacks';
            var1['scrollReporting'] = var6;
            var1['wrapChildren'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['UsersFastList'] = var2;
    return var1;
})();