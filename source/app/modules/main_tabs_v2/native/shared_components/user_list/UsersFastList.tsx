// app/modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var14 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var1 = function Placeholder(arg1) {
        var1 = arg1;
        var7 = var1.start;
        var6 = var1.end;
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
        var1['start'] = var7;
        var1['end'] = var6;
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
    var4 = native4;
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
    var15 = var15.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var15;
    var4['stickyHeader'] = var10;
    var10 = {'flex': 1, 'backgroundColor': null, 'paddingHorizontal': 16};
    var15 = var6[var11];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_BASE_SECONDARY;
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
 0:
            var1 = arg1;
            var16 = var1.title;
            var6 = var1.colorOverride;
            var _closure2_slot0 = var6;
            var20 = var1.actionTitle;
            var19 = var1.action;
            var26 = var1.badge;
            var21 = var1.scrollPosValue;
            var _closure2_slot1 = var21;
            var18 = var1.stickyAt;
            var _closure2_slot2 = var18;
            var3 = var1.disableStickySections;
            var10 = var1.disableThemedGradient;
            var _closure2_slot3 = var10;
            var5 = _closure1_slot10;
            var4 = undefined;
            var5 = var5.bind(var4)();
            var _closure2_slot4 = var5;
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0002_ip = 29; continue _fun0002 }
 16:
                    var2 = {};
                    var3 = _closure2_slot0;
                    var2['color'] = var3;
                    var1 = var2;
 29:
                    return var1;
                }
            };
            var15 = var8.bind(var9)(var6, var7);
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var8 = 9;
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
            var8 = 10;
            var12 = var6[var8];
            var14 = var7.bind(var4)(var12);
            var13 = var14.useDerivedValue;
            var12 = function T() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0003_ip = 66; continue _fun0003 }
 10:
                    var1 = _closure2_slot1;
                    var5 = null;
                    var1 = var5 == var1;
                    var3 = undefined;
                    if(var1) { _fun0003_ip = 38; continue _fun0003 }
 25:
                    var4 = _closure2_slot1;
                    var1 = var4.get;
                    var3 = var1.bind(var4)();
 38:
                    var1 = var5 != var3;
                    if(!var1) { _fun0003_ip = 53; continue _fun0003 }
 45:
                    var4 = _closure2_slot2;
                    var1 = var5 != var4;
 53:
                    if(!var1) { _fun0003_ip = 64; continue _fun0003 }
 56:
                    var2 = _closure2_slot2;
                    var1 = var3 >= var2;
 64:
                    return var1;
 66:
                    var1 = false;
                    return var1;
                }
            };
            var17 = {};
            var17['disableThemedGradient'] = var10;
            var17['scrollPosValue'] = var21;
            var17['stickyAt'] = var18;
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
            var12 = function w() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = {};
                    var4 = _closure2_slot6;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = 'transparent';
                    if(!var4) { _fun0004_ip = 40; continue _fun0004 }
 25:
                    var3 = _closure2_slot4;
                    var3 = var3.stickyHeader;
                    var2 = var3.backgroundColor;
 40:
                    var1['backgroundColor'] = var2;
                    return var1;
                }
            };
            var18 = {};
            var18['isSticky'] = var13;
            var18['styles'] = var5;
            var12['__closure'] = var18;
            var18 = 6340072007400.0;
            var12['__workletHash'] = var18;
            var18 = _closure1_slot12;
            var12['__initData'] = var18;
            var18 = var14.bind(var17)(var12);
            var _closure2_slot7 = var18;
            var17 = _closure1_slot4;
            var14 = var17.useMemo;
            var21 = var5.sectionHeader;
            var12 = new Array(3);
            var12[0] = var21;
            var12[1] = var18;
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
            var2 = function x() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = {};
                    var3 = _closure2_slot6;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 0;
                    if(!var3) { _fun0005_ip = 26; continue _fun0005 }
 23:
                    var2 = 1;
 26:
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
            if(!(var12 == var16)) { _fun0001_ip = 474; continue _fun0001 }
 467:
            if(!(var12 != var20)) { _fun0001_ip = 906; continue _fun0001 }
 474:
            var7 = _closure1_slot8;
            var6 = _closure1_slot5;
            var2 = {};
            var2['style'] = var9;
            var14 = _closure1_slot0;
            var9 = _closure1_slot2;
            var21 = 11;
            var9 = var9[var21];
            var9 = var14.bind(var4)(var9);
            var14 = var9.Text;
            var9 = {'maxFontSizeMultiplier': 2, 'accessibilityRole': 'header', 'variant': 'text-sm/semibold', 'color': 'interactive-normal'};
            var9['style'] = var15;
            var15 = new Array(2);
            var15[0] = var16;
            var17 = var12 != var26;
            var16 = null;
            if(!var17) { _fun0001_ip = 624; continue _fun0001 }
 548:
            var22 = _closure1_slot7;
            var18 = _closure1_slot5;
            var17 = {};
            var23 = var5.badgeWrapper;
            var17['style'] = var23;
            var25 = _closure1_slot7;
            var24 = _closure1_slot1;
            var27 = _closure1_slot2;
            var23 = 12;
            var23 = var27[var23];
            var24 = var24.bind(var4)(var23);
            var23 = {};
            var27 = var5.badge;
            var23['style'] = var27;
            var23['value'] = var26;
            var23 = var25.bind(var4)(var24, var23);
            var17['children'] = var23;
            var16 = var22.bind(var4)(var18, var17);
 624:
            var15[1] = var16;
            var9['children'] = var15;
            var14 = var7.bind(var4)(var14, var9);
            var9 = new Array(2);
            var9[0] = var14;
            var14 = var12 != var20;
            var12 = null;
            if(!var14) { _fun0001_ip = 743; continue _fun0001 }
 655:
            var16 = _closure1_slot7;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var14 = 13;
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
 743:
            var9[1] = var12;
            var2['children'] = var9;
            var9 = var7.bind(var4)(var6, var2);
            var2 = var9;
            if(var3) { _fun0001_ip = 904; continue _fun0001 }
 766:
            var7 = _closure1_slot8;
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var6.bind(var4)(var3);
            var6 = var3.View;
            var3 = {};
            var3['style'] = var11;
            var10 = !var10;
            if(!var10) { _fun0001_ip = 882; continue _fun0001 }
 804:
            var12 = _closure1_slot7;
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var8 = var16[var8];
            var8 = var14.bind(var4)(var8);
            var11 = var8.View;
            var8 = {};
            var8['style'] = var13;
            var15 = _closure1_slot7;
            var13 = 14;
            var13 = var16[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {'absolute': true, 'tall': true, 'wide': true, 'mix': true};
            var13 = var15.bind(var4)(var14, var13);
            var8['children'] = var13;
            var10 = var12.bind(var4)(var11, var8);
 882:
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var3['children'] = var8;
            var2 = var7.bind(var4)(var6, var3);
 904:
            return var2;
 906:
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
 0:
            var1 = arg1;
            var19 = var1.sections;
            var14 = var1.getItemProps;
            var _closure2_slot0 = var14;
            var26 = var1.getSectionProps;
            var _closure2_slot1 = var26;
            var11 = var1.insetStart;
            var10 = var1.insetEnd;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0006_ip = 51; continue _fun0006 }
 49:
            var10 = 0;
 51:
            var16 = var1.disableBottomSafeZone;
            if(!(var16 === var4)) { _fun0006_ip = 63; continue _fun0006 }
 61:
            var16 = false;
 63:
            var18 = var1.disableStickySections;
            if(!(var18 === var4)) { _fun0006_ip = 75; continue _fun0006 }
 73:
            var18 = false;
 75:
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
            var2 = 15;
            var2 = var17[var2];
            var2 = var15.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var15 = var2.bottom;
            var2 = 0;
            if(var16) { _fun0006_ip = 203; continue _fun0006 }
 200:
            var2 = var15;
 203:
            var10 = var10 + var2;
            var2 = _closure1_slot1;
            var20 = _closure1_slot2;
            var15 = 16;
            var15 = var20[var15];
            var15 = var2.bind(var4)(var15);
            var15 = var15.bind(var4)();
            var16 = 17;
            var16 = var20[var16];
            var16 = var2.bind(var4)(var16);
            var16 = var16.bind(var4)();
            _closure2_slot7 = var16;
            var21 = _closure1_slot0;
            var17 = 9;
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
 0:
                    var2 = _closure2_slot1;
                    var4 = undefined;
                    var1 = arg1;
                    var6 = var2.bind(var4)(var1);
                    var1 = null;
                    var2 = var1 == var6;
                    var3 = undefined;
                    if(var2) { _fun0007_ip = 33; continue _fun0007 }
 28:
                    var3 = var6.type;
 33:
                    var2 = 'placeholder';
                    if(!(var2 !== var3)) { _fun0007_ip = 134; continue _fun0007 }
 41:
                    var2 = 'section';
                    if(!(var2 !== var3)) { _fun0007_ip = 51; continue _fun0007 }
 49:
                    return var1;
 51:
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
 134:
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
 0:
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var2 = arg1;
                    var1 = arg2;
                    var5 = var3.bind(var4)(var2, var1);
                    var1 = null;
                    var2 = var1 == var5;
                    var3 = undefined;
                    if(var2) { _fun0008_ip = 37; continue _fun0008 }
 32:
                    var3 = var5.type;
 37:
                    var2 = 'user';
                    if(!(var2 !== var3)) { _fun0008_ip = 253; continue _fun0008 }
 48:
                    var2 = 'placeholder';
                    if(!(var2 !== var3)) { _fun0008_ip = 220; continue _fun0008 }
 59:
                    var2 = 'gdm';
                    if(!(var2 !== var3)) { _fun0008_ip = 171; continue _fun0008 }
 69:
                    var2 = 'channel';
                    if(!(var2 !== var3)) { _fun0008_ip = 122; continue _fun0008 }
 77:
                    var2 = 'custom';
                    if(!(var2 !== var3)) { _fun0008_ip = 87; continue _fun0008 }
 85:
                    return var1;
 87:
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot9;
                    var1 = {};
                    var6 = var5.component;
                    var6 = var6.bind(var5)();
                    var1['children'] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
 122:
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
 171:
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 19;
                    var1 = var6[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var7 = var5.props;
                    var8 = var1;
                    var6 = copyDataProperties(var8, var7);
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
 220:
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot15;
                    var1 = {};
                    var7 = var5.props;
                    var8 = var1;
                    var6 = copyDataProperties(var8, var7);
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
 253:
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 18;
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
 0:
                    var3 = _closure2_slot1;
                    var5 = undefined;
                    var2 = arg1;
                    var3 = var3.bind(var5)(var2);
                    var4 = null;
                    var2 = var4 == var3;
                    if(var2) { _fun0009_ip = 31; continue _fun0009 }
 26:
                    var5 = var3.type;
 31:
                    var2 = 'placeholder';
                    if(!(var2 !== var5)) { _fun0009_ip = 99; continue _fun0009 }
 39:
                    var2 = 'section';
                    if(!(var2 !== var5)) { _fun0009_ip = 51; continue _fun0009 }
 47:
                    var2 = 0;
                    return var2;
 51:
                    var2 = var3.props;
                    var5 = var2.hideTitle;
                    var2 = 0;
                    if(var5) { _fun0009_ip = 97; continue _fun0009 }
 67:
                    var3 = var3.props;
                    var3 = var3.title;
                    if(!(var4 != var3)) { _fun0009_ip = 87; continue _fun0009 }
 81:
                    var3 = _closure2_slot7;
                    _fun0009_ip = 94; continue _fun0009;
 87:
                    var3 = _closure1_slot6;
 94:
                    var2 = var3;
 97:
                    return var2;
 99:
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
 0:
                    var1 = _closure2_slot6;
                    var3 = var1.list;
                    var1 = new Array(3);
                    var1[0] = var3;
                    var3 = _closure2_slot4;
                    if(!var3) { _fun0010_ip = 32; continue _fun0010 }
 28:
                    var3 = _closure2_slot8;
 32:
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
            var1 = 21;
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
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['UsersFastList'] = var2;
    return var1;
})();