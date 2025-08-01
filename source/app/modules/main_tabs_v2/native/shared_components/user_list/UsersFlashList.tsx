// app/modules/main_tabs_v2/native/shared_components/user_list/UsersFlashList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var6;
    var1 = function Placeholder(arg1) {
        var1 = arg1;
        var7 = var1.start;
        var6 = var1.end;
        var1 = _closure1_slot12;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot4;
        var2 = var3.useState;
        var1 = function() {
            var1 = {};
            var2 = global;
            var3 = var2.Math;
            var2 = var3.random;
            var3 = var2.bind(var3)();
            var2 = 40;
            var3 = var2 * var3;
            var2 = 10;
            var2 = var2 + var3;
            var3 = var2 | 0;
            var2 = '%';
            var2 = var3 + var2;
            var1['width'] = var2;
            return var1;
        };
        var3 = var2.bind(var3)(var1);
        var2 = _closure1_slot3;
        var1 = 1;
        var2 = var2.bind(var4)(var3, var1);
        var1 = 0;
        var11 = var2[var1];
        var3 = _closure1_slot8;
        var2 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 7;
        var1 = var9[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.TableRow;
        var1 = {};
        var1['start'] = var7;
        var1['end'] = var6;
        var9 = _closure1_slot8;
        var7 = _closure1_slot5;
        var6 = {};
        var12 = var8.placeholderUsername;
        var10 = new Array(2);
        var10[0] = var12;
        var10[1] = var11;
        var6['style'] = var10;
        var6 = var9.bind(var4)(var7, var6);
        var1['label'] = var6;
        var7 = _closure1_slot8;
        var6 = _closure1_slot5;
        var5 = {};
        var8 = var8.placeholderAvatar;
        var5['style'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['icon'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function PlaceholderSection() {
        var4 = _closure1_slot8;
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = {};
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var _closure1_slot17 = var1;
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
    var4 = var15.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var7 = var6[var11];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot4 = var8;
    var14 = 2;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var16 = var4.StyleSheet;
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var7 = var4.ActivityIndicator;
    var _closure1_slot6 = var7;
    var4 = var4.useWindowDimensions;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var17 = var4.USERS_LIST_PADDING_BETWEEN_SECTIONS;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var7 = var4.jsxs;
    var _closure1_slot9 = var7;
    var4 = var4.Fragment;
    var _closure1_slot10 = var4;
    var4 = {'waitForInteraction': false, 'viewAreaCoveragePercentThreshold': 100, 'minimumViewTime': 1000};
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var10 = var5.bind(var1)(var4);
    var9 = var10.createStyles;
    var7 = {};
    var4 = {};
    var12 = 6;
    var13 = var6[var12];
    var13 = var15.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var4['paddingHorizontal'] = var13;
    var13 = 'hidden';
    var4['overflow'] = var13;
    var7['stickyHeader'] = var4;
    var4 = {};
    var13 = var6[var12];
    var13 = var15.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var13 = var17 - var13;
    var4['paddingTop'] = var13;
    var7['stickyHeaderSection'] = var4;
    var4 = {};
    var4['flex'] = var11;
    var7['container'] = var4;
    var4 = {'flex': 1, 'width': '100%'};
    var13 = '100%';
    var11 = var6[var12];
    var11 = var15.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BASE_SECONDARY;
    var4['backgroundColor'] = var11;
    var7['list'] = var4;
    var4 = {'width': 40, 'height': 40, 'borderRadius': null, 'backgroundColor': null, 'marginRight': 16};
    var11 = var6[var12];
    var11 = var15.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.xl;
    var4['borderRadius'] = var11;
    var11 = var6[var12];
    var11 = var15.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_ACCENT;
    var4['backgroundColor'] = var11;
    var7['placeholderAvatar'] = var4;
    var11 = {};
    var4 = 20;
    var11['height'] = var4;
    var18 = var6[var12];
    var18 = var15.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.md;
    var11['borderRadius'] = var18;
    var18 = var6[var12];
    var18 = var15.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_ACCENT;
    var11['backgroundColor'] = var18;
    var7['placeholderUsername'] = var11;
    var11 = {};
    var11['paddingBottom'] = var17;
    var7['emptySection'] = var11;
    var11 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'paddingBottom': null, 'paddingTop': null, 'textTransform': 'none'};
    var18 = var6[var12];
    var18 = var15.bind(var1)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_8;
    var11['paddingBottom'] = var18;
    var11['paddingTop'] = var17;
    var17 = var6[var12];
    var17 = var15.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BG_BASE_SECONDARY;
    var11['backgroundColor'] = var17;
    var7['section'] = var11;
    var11 = {};
    var20 = var16.absoluteFillObject;
    var21 = var11;
    var16 = copyDataProperties(var21, var20);
    var16 = var6[var12];
    var16 = var15.bind(var1)(var16);
    var16 = var16.colors;
    var17 = var16.BG_BASE_SECONDARY;
    var16 = 'backgroundColor';
    var11[var16] = var17;
    var17 = 'center';
    var16 = 'justifyContent';
    var11[var16] = var17;
    var16 = 'alignItems';
    var11[var16] = var17;
    var7['loading'] = var11;
    var11 = {};
    var11['height'] = var13;
    var7['badgeWrapper'] = var11;
    var11 = {'position': 'absolute', 'left': null, 'top': 5};
    var13 = var6[var12];
    var13 = var15.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var12 = var6[var12];
    var12 = var15.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var12 = var12 / var14;
    var12 = var13 + var12;
    var11['left'] = var12;
    var7['badge'] = var11;
    var7 = var9.bind(var10)(var7);
    var _closure1_slot12 = var7;
    var7 = function getItemType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = var3.type;
            var1 = 'item';
            if(!(var1 !== var2)) { _fun0001_ip = 23; continue _fun0001 }
 16:
            var1 = var3.type;
            _fun0001_ip = 87; continue _fun0001;
 23:
            var4 = var3.props;
            var5 = null;
            var7 = var5 == var4;
            var6 = undefined;
            if(var7) { _fun0001_ip = 44; continue _fun0001 }
 39:
            var6 = var4.type;
 44:
            var4 = 'custom';
            if(!(var4 !== var6)) { _fun0001_ip = 73; continue _fun0001 }
 52:
            var4 = var3.props;
            var5 = var5 == var4;
            var2 = undefined;
            if(var5) { _fun0001_ip = 71; continue _fun0001 }
 66:
            var2 = var4.type;
 71:
            _fun0001_ip = 84; continue _fun0001;
 73:
            var3 = var3.props;
            var2 = var3.itemType;
 84:
            var1 = var2;
 87:
            return var1;
        }
    };
    var _closure1_slot13 = var7;
    var9 = var8.memo;
    var7 = function UserSectionInner(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var12 = var2.title;
            var8 = var2.colorOverride;
            var _closure2_slot0 = var8;
            var15 = var2.actionTitle;
            var14 = var2.action;
            var22 = var2.badge;
            var9 = var2.sticky;
            var3 = _closure1_slot12;
            var5 = undefined;
            var6 = var3.bind(var5)();
            var7 = _closure1_slot4;
            var4 = var7.useMemo;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0003_ip = 29; continue _fun0003 }
 16:
                    var2 = {};
                    var3 = _closure2_slot0;
                    var2['color'] = var3;
                    var1 = var2;
 29:
                    return var1;
                }
            };
            var11 = var4.bind(var7)(var1, var3);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useClientThemesOverride;
            var10 = var1.bind(var3)();
            var8 = null;
            if(!(var8 == var12)) { _fun0002_ip = 131; continue _fun0002 }
 124:
            if(!(var8 != var15)) { _fun0002_ip = 450; continue _fun0002 }
 131:
            var4 = _closure1_slot9;
            var3 = _closure1_slot5;
            var1 = {};
            var13 = var6.section;
            var7 = new Array(3);
            var7[0] = var13;
            var7[1] = var10;
            if(!var9) { _fun0002_ip = 167; continue _fun0002 }
 161:
            var9 = var6.stickyHeaderSection;
 167:
            var7[2] = var9;
            var1['style'] = var7;
            var10 = _closure1_slot9;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var16 = 9;
            var7 = var7[var16];
            var7 = var9.bind(var5)(var7);
            var9 = var7.Text;
            var7 = {'maxFontSizeMultiplier': 2, 'accessibilityRole': 'header', 'variant': 'text-sm/semibold', 'color': 'interactive-normal'};
            var7['style'] = var11;
            var11 = new Array(2);
            var11[0] = var12;
            var13 = var8 != var22;
            var12 = null;
            if(!var13) { _fun0002_ip = 315; continue _fun0002 }
 239:
            var18 = _closure1_slot8;
            var17 = _closure1_slot5;
            var13 = {};
            var19 = var6.badgeWrapper;
            var13['style'] = var19;
            var21 = _closure1_slot8;
            var20 = _closure1_slot1;
            var23 = _closure1_slot2;
            var19 = 10;
            var19 = var23[var19];
            var20 = var20.bind(var5)(var19);
            var19 = {};
            var23 = var6.badge;
            var19['style'] = var23;
            var19['value'] = var22;
            var19 = var21.bind(var5)(var20, var19);
            var13['children'] = var19;
            var12 = var18.bind(var5)(var17, var13);
 315:
            var11[1] = var12;
            var7['children'] = var11;
            var9 = var10.bind(var5)(var9, var7);
            var7 = new Array(2);
            var7[0] = var9;
            var9 = var8 != var15;
            var8 = null;
            if(!var9) { _fun0002_ip = 434; continue _fun0002 }
 346:
            var11 = _closure1_slot8;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 11;
            var9 = var12[var9];
            var9 = var13.bind(var5)(var9);
            var10 = var9.PressableOpacity;
            var9 = {};
            var9['onPress'] = var14;
            var14 = _closure1_slot8;
            var12 = var12[var16];
            var12 = var13.bind(var5)(var12);
            var13 = var12.Text;
            var12 = {'variant': 'text-sm/semibold', 'color': 'text-brand'};
            var12['children'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var9['children'] = var12;
            var8 = var11.bind(var5)(var10, var9);
 434:
            var7[1] = var8;
            var1['children'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 476; continue _fun0002;
 450:
            var4 = _closure1_slot8;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var6.emptySection;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 476:
            return var1;
        }
    };
    var7 = var9.bind(var8)(var7);
    var _closure1_slot14 = var7;
    var7 = function keyExtractor(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var9 = arg2;
            var2 = var3.type;
            var1 = 'header';
            if(!(var1 !== var2)) { _fun0004_ip = 518; continue _fun0004 }
 22:
            var4 = var3.type;
            var2 = 'section';
            if(!(var2 !== var4)) { _fun0004_ip = 486; continue _fun0004 }
 38:
            var4 = var3.type;
            var2 = 'footer';
            if(!(var2 !== var4)) { _fun0004_ip = 484; continue _fun0004 }
 54:
            var4 = var3.props;
            var6 = null;
            var8 = var6 == var4;
            var7 = undefined;
            if(var8) { _fun0004_ip = 75; continue _fun0004 }
 70:
            var7 = var4.type;
 75:
            var4 = 'user';
            if(!(var4 !== var7)) { _fun0004_ip = 426; continue _fun0004 }
 86:
            var4 = var3.props;
            var8 = var6 == var4;
            var7 = undefined;
            if(var8) { _fun0004_ip = 105; continue _fun0004 }
 100:
            var7 = var4.type;
 105:
            var4 = 'gdm';
            if(!(var4 !== var7)) { _fun0004_ip = 369; continue _fun0004 }
 118:
            var4 = var3.props;
            var8 = var6 == var4;
            var7 = undefined;
            if(var8) { _fun0004_ip = 137; continue _fun0004 }
 132:
            var7 = var4.type;
 137:
            var4 = 'channel';
            if(!(var4 !== var7)) { _fun0004_ip = 312; continue _fun0004 }
 148:
            var4 = var3.props;
            var8 = var6 == var4;
            var7 = undefined;
            if(var8) { _fun0004_ip = 167; continue _fun0004 }
 162:
            var7 = var4.type;
 167:
            var4 = 'placeholder';
            if(!(var4 !== var7)) { _fun0004_ip = 275; continue _fun0004 }
 175:
            var4 = var3.props;
            var6 = var6 == var4;
            var5 = undefined;
            if(var6) { _fun0004_ip = 194; continue _fun0004 }
 189:
            var5 = var4.type;
 194:
            var4 = 'custom';
            if(!(var4 !== var5)) { _fun0004_ip = 228; continue _fun0004 }
 202:
            var4 = global;
            var4 = var4.HermesInternal;
            var5 = var4.concat;
            var4 = 'default-';
            var4 = var5.bind(var4)(var9);
            _fun0004_ip = 273; continue _fun0004;
 228:
            var10 = var3.section;
            var5 = var3.props;
            var8 = var5.key;
            var5 = global;
            var5 = var5.HermesInternal;
            var7 = var5.concat;
            var6 = 'custom-';
            var5 = '-';
            var4 = var7.bind(var6)(var10, var5, var8);
 273:
            _fun0004_ip = 310; continue _fun0004;
 275:
            var8 = var3.section;
            var5 = global;
            var5 = var5.HermesInternal;
            var7 = var5.concat;
            var6 = 'placeholder-';
            var5 = '-';
            var4 = var7.bind(var6)(var8, var5, var9);
 310:
            _fun0004_ip = 367; continue _fun0004;
 312:
            var9 = var3.section;
            var5 = var3.props;
            var5 = var5.props;
            var5 = var5.channel;
            var8 = var5.id;
            var5 = global;
            var5 = var5.HermesInternal;
            var7 = var5.concat;
            var6 = 'channel-';
            var5 = '-';
            var4 = var7.bind(var6)(var9, var5, var8);
 367:
            _fun0004_ip = 424; continue _fun0004;
 369:
            var9 = var3.section;
            var5 = var3.props;
            var5 = var5.props;
            var5 = var5.channel;
            var8 = var5.id;
            var5 = global;
            var5 = var5.HermesInternal;
            var7 = var5.concat;
            var6 = 'user-';
            var5 = '-';
            var4 = var7.bind(var6)(var9, var5, var8);
 424:
            _fun0004_ip = 481; continue _fun0004;
 426:
            var9 = var3.section;
            var5 = var3.props;
            var5 = var5.props;
            var5 = var5.user;
            var8 = var5.id;
            var5 = global;
            var5 = var5.HermesInternal;
            var7 = var5.concat;
            var6 = 'user-';
            var5 = '-';
            var4 = var7.bind(var6)(var9, var5, var8);
 481:
            var2 = var4;
 484:
            _fun0004_ip = 515; continue _fun0004;
 486:
            var5 = var3.section;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = 'section-';
            var2 = var4.bind(var3)(var5);
 515:
            var1 = var2;
 518:
            return var1;
        }
    };
    var _closure1_slot15 = var7;
    var7 = var8.forwardRef;
    var2 = function UsersFlashListInner(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var9 = var2.sections;
            var _closure2_slot0 = var9;
            var34 = var2.getItemProps;
            var _closure2_slot1 = var34;
            var31 = var2.getSectionProps;
            var _closure2_slot2 = var31;
            var22 = var2.keyboardDismissMode;
            var4 = undefined;
            if(!(var22 === var4)) { _fun0005_ip = 53; continue _fun0005 }
 47:
            var22 = 'on-drag';
 53:
            var21 = var2.keyboardShouldPersistTaps;
            if(!(var21 === var4)) { _fun0005_ip = 67; continue _fun0005 }
 63:
            var21 = 'always';
 67:
            var30 = var2.insetEnd;
            var18 = var2.disableStickySections;
            if(!(var18 === var4)) { _fun0005_ip = 85; continue _fun0005 }
 83:
            var18 = false;
 85:
            var23 = var2.onScroll;
            var12 = var2.renderAccessory;
            var32 = var2.renderFooter;
            var _closure2_slot3 = var32;
            var24 = var2.onLayout;
            var33 = var2.renderHeader;
            var _closure2_slot4 = var33;
            var8 = var2.style;
            var _closure2_slot5 = var8;
            var5 = var2.showLoading;
            if(!(var5 === var4)) { _fun0005_ip = 144; continue _fun0005 }
 142:
            var5 = false;
 144:
            var3 = var2.inActionSheet;
            var1 = var2.disableThemedGradient;
            var _closure2_slot6 = var1;
            var7 = var2.disableBackgroundOverlay;
            if(!(var7 === var4)) { _fun0005_ip = 172; continue _fun0005 }
 170:
            var7 = false;
 172:
            var _closure2_slot7 = var7;
            var16 = var2.onViewableItemsChanged;
            var36 = var2.fastTransitionAllowInitialBlankRender;
            if(!(var36 === var4)) { _fun0005_ip = 196; continue _fun0005 }
 194:
            var36 = true;
 196:
            var _closure2_slot8 = var36;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var2 = _closure1_slot12;
            var13 = var2.bind(var4)();
            _closure2_slot9 = var13;
            var6 = _closure1_slot4;
            var2 = var6.useState;
            var14 = false;
            var6 = var2.bind(var6)(var14);
            var2 = _closure1_slot3;
            var20 = 2;
            var2 = var2.bind(var4)(var6, var20);
            var29 = 0;
            var6 = var2[var29];
            var11 = 1;
            var2 = var2[var11];
            _closure2_slot10 = var2;
            var10 = _closure1_slot4;
            var2 = var10.useState;
            var10 = var2.bind(var10)(var14);
            var2 = _closure1_slot3;
            var10 = var2.bind(var4)(var10, var20);
            var2 = var10[var29];
            var10 = var10[var11];
            _closure2_slot11 = var10;
            var17 = _closure1_slot1;
            var10 = _closure1_slot2;
            var14 = 12;
            var14 = var10[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.bind(var4)();
            var28 = var14.bottom;
            var14 = 13;
            var14 = var10[var14];
            var14 = var17.bind(var4)(var14);
            var19 = var14.bind(var4)();
            var14 = _closure1_slot7;
            var14 = var14.bind(var4)();
            var35 = var14.width;
            _closure2_slot12 = var35;
            var14 = var14.height;
            _closure2_slot13 = var14;
            var27 = _closure1_slot4;
            var26 = var27.useMemo;
            var17 = new Array(3);
            var17[0] = var36;
            var17[1] = var35;
            var17[2] = var14;
            var14 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot8;
                    var1 = undefined;
                    if(var2) { _fun0006_ip = 33; continue _fun0006 }
 12:
                    var2 = {};
                    var4 = _closure2_slot12;
                    var2['width'] = var4;
                    var3 = _closure2_slot13;
                    var2['height'] = var3;
                    var1 = var2;
 33:
                    return var1;
                }
            };
            var17 = var26.bind(var27)(var14, var17);
            var35 = _closure1_slot4;
            var27 = var35.useEffect;
            var26 = function() {
                var2 = global;
                var5 = var2.setTimeout;
                var4 = undefined;
                var3 = function() {
                    var3 = _closure2_slot10;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var2 = 100;
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
            var14 = new Array(0);
            var14 = var27.bind(var35)(var26, var14);
            var27 = _closure1_slot4;
            var26 = var27.useMemo;
            var14 = new Array(5);
            var14[0] = var34;
            var14[1] = var31;
            var14[2] = var33;
            var14[3] = var32;
            var14[4] = var9;
            var9 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = new Array(0);
                    var3 = new Array(0);
                    var5 = _closure2_slot4;
                    var4 = null;
                    var5 = var4 != var5;
                    var12 = 0;
                    var11 = 0;
                    if(!var5) { _fun0007_ip = 51; continue _fun0007 }
 28:
                    var6 = var3.push;
                    var5 = {};
                    var7 = 'header';
                    var5['type'] = var7;
                    var5 = var6.bind(var3)(var5);
                    var11 = 1;
 51:
                    var5 = _closure2_slot0;
                    var5 = var5.length;
                    var5 = var12 < var5;
                    var10 = undefined;
                    var9 = 'section';
                    var8 = 'item';
                    var7 = 0;
                    var6 = undefined;
                    if(!var5) { _fun0007_ip = 281; continue _fun0007 }
 84:
                    var5 = _closure2_slot2;
                    var15 = var5.bind(var10)(var7);
                    var5 = var7;
                    var14 = var11;
                    var13 = var6;
                    if(!(var4 != var15)) { _fun0007_ip = 256; continue _fun0007 }
 109:
                    var15 = _closure2_slot0;
                    var15 = var15[var5];
                    var14 = var11;
                    var13 = var6;
                    if(!(var12 !== var15)) { _fun0007_ip = 256; continue _fun0007 }
 130:
                    var16 = var3.push;
                    var15 = {};
                    var15['type'] = var9;
                    var15['section'] = var5;
                    var17 = _closure2_slot2;
                    var17 = var17.bind(var10)(var5);
                    var15['props'] = var17;
                    var15 = var16.bind(var3)(var15);
                    var15 = var2.push;
                    var15 = var15.bind(var2)(var11);
                    var17 = var11 + 1;
                    var15 = _closure2_slot0;
                    var15 = var15[var5];
                    var15 = var12 < var15;
                    var16 = 0;
                    var14 = var17;
                    var13 = 0;
                    if(!var15) { _fun0007_ip = 256; continue _fun0007 }
 198:
                    var18 = var3.push;
                    var15 = {};
                    var15['type'] = var8;
                    var15['section'] = var5;
                    var19 = _closure2_slot1;
                    var19 = var19.bind(var10)(var5, var16);
                    var15['props'] = var19;
                    var15 = var18.bind(var3)(var15);
                    var17 = var17 + 1;
                    var16 = var16 + 1;
                    var15 = _closure2_slot0;
                    var15 = var15[var5];
                    var14 = var17;
                    var13 = var16;
                    if(var13 < var15) { _fun0007_ip = 198; continue _fun0007 }
 256:
                    var7 = var5 + 1;
                    var5 = _closure2_slot0;
                    var5 = var5.length;
                    var11 = var14;
                    var6 = var13;
                    if(var7 < var5) { _fun0007_ip = 84; continue _fun0007 }
 281:
                    var1 = _closure2_slot3;
                    if(!(var4 != var1)) { _fun0007_ip = 309; continue _fun0007 }
 289:
                    var4 = var3.push;
                    var1 = {};
                    var5 = 'footer';
                    var1['type'] = var5;
                    var1 = var4.bind(var3)(var1);
 309:
                    var1 = new Array(2);
                    var1[0] = var3;
                    var1[1] = var2;
                    return var1;
                }
            };
            var14 = var26.bind(var27)(var9, var14);
            var9 = _closure1_slot3;
            var9 = var9.bind(var4)(var14, var20);
            var26 = var9[var29];
            var11 = var9[var11];
            var27 = _closure1_slot4;
            var20 = var27.useCallback;
            var14 = new Array(1);
            var14[0] = var1;
            var9 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var6 = arg1;
                    var1 = null;
                    var2 = var1 == var6;
                    var4 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0008_ip = 21; continue _fun0008 }
 16:
                    var3 = var6.type;
 21:
                    var2 = 'placeholder';
                    if(!(var2 !== var3)) { _fun0008_ip = 118; continue _fun0008 }
 29:
                    var2 = 'section';
                    if(!(var2 !== var3)) { _fun0008_ip = 39; continue _fun0008 }
 37:
                    return var1;
 39:
                    var2 = var6.props;
                    var2 = var2.hideTitle;
                    var1 = null;
                    if(var2) { _fun0008_ip = 116; continue _fun0008 }
 55:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot14;
                    var2 = {};
                    var8 = var6.props;
                    var9 = var2;
                    var6 = copyDataProperties(var9, var8);
                    var7 = arg2;
                    var6 = 'sticky';
                    var2[var6] = var7;
                    var7 = _closure2_slot6;
                    var6 = 'disableThemedGradient';
                    var2[var6] = var7;
                    var1 = var5.bind(var4)(var3, var2);
 116:
                    return var1;
 118:
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot17;
                    var1 = {};
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var27 = var20.bind(var27)(var9, var14);
            _closure2_slot14 = var27;
            var31 = _closure1_slot4;
            var20 = var31.useCallback;
            var14 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var5 = arg1;
                    var1 = null;
                    var2 = var1 == var5;
                    var4 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0009_ip = 21; continue _fun0009 }
 16:
                    var3 = var5.type;
 21:
                    var2 = 'user';
                    if(!(var2 !== var3)) { _fun0009_ip = 237; continue _fun0009 }
 32:
                    var2 = 'placeholder';
                    if(!(var2 !== var3)) { _fun0009_ip = 204; continue _fun0009 }
 43:
                    var2 = 'gdm';
                    if(!(var2 !== var3)) { _fun0009_ip = 155; continue _fun0009 }
 53:
                    var2 = 'channel';
                    if(!(var2 !== var3)) { _fun0009_ip = 106; continue _fun0009 }
 61:
                    var2 = 'custom';
                    if(!(var2 !== var3)) { _fun0009_ip = 71; continue _fun0009 }
 69:
                    return var1;
 71:
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot10;
                    var1 = {};
                    var6 = var5.component;
                    var6 = var6.bind(var5)();
                    var1['children'] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
 106:
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 16;
                    var1 = var6[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var7 = var5.props;
                    var8 = var1;
                    var6 = copyDataProperties(var8, var7);
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
 155:
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 15;
                    var1 = var6[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var7 = var5.props;
                    var8 = var1;
                    var6 = copyDataProperties(var8, var7);
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
 204:
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot16;
                    var1 = {};
                    var7 = var5.props;
                    var8 = var1;
                    var6 = copyDataProperties(var8, var7);
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
 237:
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 14;
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
            var9 = new Array(0);
            var31 = var20.bind(var31)(var14, var9);
            _closure2_slot15 = var31;
            var20 = _closure1_slot4;
            var14 = var20.useCallback;
            var9 = new Array(6);
            var9[0] = var33;
            var9[1] = var32;
            var9[2] = var31;
            var9[3] = var27;
            var27 = var13.stickyHeader;
            var9[4] = var27;
            var9[5] = var1;
            var1 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = arg1;
                    var8 = var1.item;
                    var3 = var1.target;
                    var5 = var1.index;
                    var2 = var8.type;
                    var1 = 'header';
                    if(!(var1 !== var2)) { _fun0010_ip = 344; continue _fun0010 }
 35:
                    var2 = var8.type;
                    var1 = 'section';
                    if(!(var1 !== var2)) { _fun0010_ip = 131; continue _fun0010 }
 48:
                    var2 = var8.type;
                    var1 = 'footer';
                    if(!(var1 !== var2)) { _fun0010_ip = 97; continue _fun0010 }
 61:
                    var4 = var8.type;
                    var2 = 'item';
                    var1 = null;
                    if(!(var2 === var4)) { _fun0010_ip = 95; continue _fun0010 }
 76:
                    var6 = _closure2_slot15;
                    var4 = var8.props;
                    var2 = undefined;
                    var1 = var6.bind(var2)(var4);
 95:
                    _fun0010_ip = 126; continue _fun0010;
 97:
                    var6 = _closure2_slot3;
                    var2 = null;
                    var6 = var2 != var6;
                    if(!var6) { _fun0010_ip = 123; continue _fun0010 }
 113:
                    var6 = _closure2_slot3;
                    var4 = undefined;
                    var2 = var6.bind(var4)();
 123:
                    var1 = var2;
 126:
                    _fun0010_ip = 342; continue _fun0010;
 131:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 17;
                    var2 = var6[var2];
                    var6 = undefined;
                    var2 = var4.bind(var6)(var2);
                    var2 = var2.RenderTargetOptions;
                    var2 = var2.StickyHeader;
                    if(!(var3 !== var2)) { _fun0010_ip = 201; continue _fun0010 }
 172:
                    var4 = _closure2_slot14;
                    var3 = var8.props;
                    var2 = 0;
                    var2 = var2 === var5;
                    var2 = var4.bind(var6)(var3, var2);
                    _fun0010_ip = 339; continue _fun0010;
 201:
                    var5 = _closure1_slot9;
                    var4 = _closure1_slot5;
                    var3 = {};
                    var10 = _closure2_slot9;
                    var10 = var10.stickyHeader;
                    var3['style'] = var10;
                    var10 = _closure2_slot6;
                    var10 = !var10;
                    if(!var10) { _fun0010_ip = 300; continue _fun0010 }
 238:
                    var12 = _closure1_slot8;
                    var11 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var7 = 18;
                    var7 = var13[var7];
                    var11 = var11.bind(var6)(var7);
                    var7 = {'absolute': true, 'tall': true, 'wide': true, 'componentStyles': null, 'mix': true};
                    var13 = {};
                    var14 = -52;
                    var13['top'] = var14;
                    var7['componentStyles'] = var13;
                    var10 = var12.bind(var6)(var11, var7);
 300:
                    var7 = new Array(2);
                    var7[0] = var10;
                    var10 = _closure2_slot14;
                    var9 = var8.props;
                    var8 = true;
                    var8 = var10.bind(var6)(var9, var8);
                    var7[1] = var8;
                    var3['children'] = var7;
                    var2 = var5.bind(var6)(var4, var3);
 339:
                    var1 = var2;
 342:
                    _fun0010_ip = 373; continue _fun0010;
 344:
                    var4 = _closure2_slot4;
                    var2 = null;
                    var4 = var2 != var4;
                    if(!var4) { _fun0010_ip = 370; continue _fun0010 }
 360:
                    var4 = _closure2_slot4;
                    var3 = undefined;
                    var2 = var4.bind(var3)();
 370:
                    var1 = var2;
 373:
                    return var1;
                }
            };
            var20 = var14.bind(var20)(var1, var9);
            var9 = _closure1_slot0;
            var1 = 8;
            var1 = var10[var1];
            var9 = var9.bind(var4)(var1);
            var1 = var9.useClientThemesOverride;
            var1 = var1.bind(var9)();
            _closure2_slot16 = var1;
            if(!var5) { _fun0005_ip = 688; continue _fun0005 }
 685:
            var5 = var6;
 688:
            if(!var5) { _fun0005_ip = 694; continue _fun0005 }
 691:
            var5 = !var2;
 694:
            _closure2_slot17 = var5;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 17;
            var2 = var9[var2];
            var2 = var6.bind(var4)(var2);
            if(var3) { _fun0005_ip = 729; continue _fun0005 }
 721:
            var14 = var2.AnimatedFlashList;
            _fun0005_ip = 735; continue _fun0005;
 729:
            var14 = var2.BottomSheetFlashList;
 735:
            var6 = _closure1_slot4;
            var3 = var6.useMemo;
            var9 = var13.list;
            var2 = new Array(5);
            var2[0] = var9;
            var2[1] = var5;
            var2[2] = var8;
            var2[3] = var7;
            var2[4] = var1;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = _closure2_slot9;
                    var2 = var1.list;
                    var1 = new Array(4);
                    var1[0] = var2;
                    var4 = _closure2_slot17;
                    var2 = undefined;
                    if(!var4) { _fun0011_ip = 41; continue _fun0011 }
 30:
                    var4 = {};
                    var5 = 0;
                    var4['opacity'] = var5;
                    var2 = var4;
 41:
                    var1[1] = var2;
                    var2 = _closure2_slot5;
                    var1[2] = var2;
                    var2 = _closure2_slot7;
                    if(!var2) { _fun0011_ip = 64; continue _fun0011 }
 60:
                    var2 = _closure2_slot16;
 64:
                    var1[3] = var2;
                    return var1;
                }
            };
            var9 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = var13.container;
            var1['style'] = var6;
            var10 = null;
            var6 = null;
            if(!var5) { _fun0005_ip = 908; continue _fun0005 }
 813:
            var8 = _closure1_slot8;
            var7 = _closure1_slot5;
            var5 = {};
            var13 = var13.loading;
            var5['style'] = var13;
            var31 = _closure1_slot8;
            var27 = _closure1_slot6;
            var13 = {'animating': true, 'color': null, 'size': 'large'};
            var33 = _closure1_slot1;
            var34 = _closure1_slot2;
            var32 = 6;
            var32 = var34[var32];
            var32 = var33.bind(var4)(var32);
            var32 = var32.unsafe_rawColors;
            var32 = var32.BRAND_500;
            var13['color'] = var32;
            var13 = var31.bind(var4)(var27, var13);
            var5['children'] = var13;
            var6 = var8.bind(var4)(var7, var5);
 908:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot5;
            var6 = {};
            var6['style'] = var9;
            var13 = _closure1_slot8;
            var9 = {};
            var27 = {};
            var32 = _closure1_slot1;
            var33 = _closure1_slot2;
            var31 = 6;
            var34 = var33[var31];
            var34 = var32.bind(var4)(var34);
            var34 = var34.spacing;
            var34 = var34.PX_16;
            var27['paddingLeft'] = var34;
            var34 = var33[var31];
            var34 = var32.bind(var4)(var34);
            var34 = var34.spacing;
            var34 = var34.PX_16;
            var27['paddingRight'] = var34;
            var31 = var33[var31];
            var31 = var32.bind(var4)(var31);
            var31 = var31.spacing;
            var31 = var31.PX_8;
            var27['paddingTop'] = var31;
            var31 = var10 != var30;
            var29 = 0;
            if(!var31) { _fun0005_ip = 1034; continue _fun0005 }
 1031:
            var29 = var30;
 1034:
            var28 = var28 + var29;
            var27['paddingBottom'] = var28;
            var9['contentContainerStyle'] = var27;
            var28 = _closure1_slot1;
            var29 = _closure1_slot2;
            var27 = 19;
            var27 = var29[var27];
            var28 = var28.bind(var4)(var27);
            var27 = arg2;
            var27 = var28.bind(var4)(var27);
            var9['ref'] = var27;
            var9['data'] = var26;
            var25 = function onLoad() {
                var3 = _closure2_slot11;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var9['onLoad'] = var25;
            var9['onLayout'] = var24;
            var9['onScroll'] = var23;
            var9['keyboardDismissMode'] = var22;
            var9['keyboardShouldPersistTaps'] = var21;
            var21 = _closure1_slot15;
            var9['keyExtractor'] = var21;
            var9['renderItem'] = var20;
            var9['estimatedItemSize'] = var19;
            var9['estimatedListSize'] = var17;
            var17 = undefined;
            if(var18) { _fun0005_ip = 1148; continue _fun0005 }
 1145:
            var17 = var11;
 1148:
            var9['stickyHeaderIndices'] = var17;
            var17 = _closure1_slot13;
            var9['getItemType'] = var17;
            var9['onViewableItemsChanged'] = var16;
            var15 = _closure1_slot11;
            var9['viewabilityConfig'] = var15;
            var13 = var13.bind(var4)(var14, var9);
            var9 = new Array(2);
            var9[0] = var13;
            var10 = var10 != var12;
            if(!var10) { _fun0005_ip = 1202; continue _fun0005 }
 1197:
            var10 = var12.bind(var4)(var11);
 1202:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var7.bind(var8)(var2);
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/user_list/UsersFlashList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['UsersFlashList'] = var2;
    return var1;
})();