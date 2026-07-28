// app/modules/channel_list_v2/native/items/RedesignCategory.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var9;
    var5 = function renderCategoryItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var10 = var2.name;
            var14 = var2.icon;
            var21 = var2.note;
            var25 = var2.muted;
            var5 = undefined;
            if(!(var25 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var25 = false;
case 2:
            var9 = var2.onPress;
            var8 = var2.onLongPress;
            var4 = var2.withMarginTop;
            var13 = var2.accessibilityState;
            var22 = var2.styles;
            var1 = var2.isRefreshEnabled;
            var12 = var2.trailingAction;
            var _closure2_slot0 = var12;
            var2 = var22.categoryWrapper;
            var7 = new Array(2);
            var7[0] = var2;
            var3 = {};
            var6 = 16;
            var2 = var6;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var15 = null;
            var15 = var15 != var14;
            if(!var15) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = 3;
case 6:
            var2 = var6;
case 4:
            var3['paddingLeft'] = var2;
            var2 = 0;
            if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = _closure1_slot9;
case 8:
            var3['marginTop'] = var2;
            var4 = _closure1_slot8;
            var3['marginBottom'] = var4;
            var7[1] = var3;
            var4 = 'string';
            var3 = typeof var10;
            var17 = var10;
            if(!(var4 === var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = _closure1_slot11;
            var4 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = 10;
            var3 = var15[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.Text;
            var3 = {'experimental_useNativeText': true, 'variant': 'text-sm/semibold', 'color': null, 'lineClamp': 1};
            var15 = 'text-subtle';
            if(!var25) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var15 = 'text-muted';
case 12:
            var3['color'] = var15;
            var15 = var22.categoryText;
            var3['style'] = var15;
            var3['children'] = var10;
            var17 = var6.bind(var5)(var4, var3);
case 10:
            var10 = null;
            var3 = var10 != var14;
            var16 = null;
            if(!var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var6 = _closure1_slot11;
            var4 = _closure1_slot4;
            var3 = {};
            var15 = var22.iconWrapperStyles;
            var3['style'] = var15;
            var3['children'] = var14;
            var16 = var6.bind(var5)(var4, var3);
case 14:
            var3 = var10 != var12;
            var15 = null;
            if(!var3) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var6 = _closure1_slot11;
            var4 = _closure1_slot4;
            var3 = {};
            var14 = var22.trailingActionWrapper;
            var3['style'] = var14;
            var19 = _closure1_slot11;
            var23 = _closure1_slot0;
            var26 = _closure1_slot2;
            var14 = 11;
            var14 = var26[var14];
            var14 = var23.bind(var5)(var14);
            var18 = var14.PressableOpacity;
            var14 = {};
            var20 = false;
            var14['accessible'] = var20;
            var20 = var12.perform;
            var14['onPress'] = var20;
            var20 = _closure1_slot15;
            var14['hitSlop'] = var20;
            var20 = _closure1_slot16;
            var14['androidRippleConfig'] = var20;
            var24 = _closure1_slot11;
            var20 = 12;
            var20 = var26[var20];
            var20 = var23.bind(var5)(var20);
            var23 = var20.PlusMediumIcon;
            var20 = {};
            var26 = 'xxs';
            var20['size'] = var26;
            var27 = _closure1_slot1;
            var28 = _closure1_slot2;
            var26 = 9;
            var26 = var28[var26];
            var26 = var27.bind(var5)(var26);
            var26 = var26.colors;
            if(var25) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var25 = var26.TEXT_SUBTLE;
            _fun0001_ip = 20; continue _fun0001;
case 18:
            var25 = var26.ICON_MUTED;
case 20:
            var20['color'] = var25;
            var20 = var24.bind(var5)(var23, var20);
            var14['children'] = var20;
            var14 = var19.bind(var5)(var18, var14);
            var3['children'] = var14;
            var15 = var6.bind(var5)(var4, var3);
case 16:
            var4 = _closure1_slot13;
            var3 = _closure1_slot12;
            var6 = {};
            var14 = new Array(4);
            if(var1) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var14[0] = var16;
            var14[1] = var17;
            var14[2] = var21;
            var14[3] = var15;
            var6['children'] = var14;
            var1 = var6;
            _fun0001_ip = 23; continue _fun0001;
case 21:
            var14[0] = var17;
            var18 = var10 != var21;
            var17 = null;
            if(!var18) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var20 = _closure1_slot11;
            var19 = _closure1_slot4;
            var18 = {};
            var22 = var22.noteWrapper;
            var18['style'] = var22;
            var18['children'] = var21;
            var17 = var20.bind(var5)(var19, var18);
case 24:
            var14[1] = var17;
            var14[2] = var16;
            var14[3] = var15;
            var6['children'] = var14;
            var1 = var6;
case 23:
            var6 = var4.bind(var5)(var3, var1);
            if(!(var10 == var9)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            if(!(var10 == var8)) { _fun0001_ip = 26; continue _fun0001 }
case 28:
            var4 = _closure1_slot11;
            var3 = _closure1_slot4;
            var1 = {};
            var14 = 'header';
            var1['accessibilityRole'] = var14;
            var1['style'] = var7;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 29; continue _fun0001;
case 26:
            var4 = _closure1_slot11;
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 11;
            var2 = var14[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.PressableHighlight;
            var2 = {};
            var14 = 'header';
            var2['accessibilityRole'] = var14;
            var2['accessibilityState'] = var13;
            var14 = var10 != var12;
            var13 = undefined;
            if(!var14) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var15 = {};
            var14 = 'add-to-category';
            var15['name'] = var14;
            var14 = var12.label;
            var15['label'] = var14;
            var14 = new Array(1);
            var14[0] = var15;
            var13 = var14;
case 30:
            var2['accessibilityActions'] = var13;
            var12 = var10 != var12;
            var10 = undefined;
            if(!var12) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var10 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.actionName;
                    var1 = 'add-to-category';
                    if(!(var1 === var2)) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                    var2 = _closure2_slot0;
                    var1 = var2.perform;
                    var1 = var1.bind(var2)();
case 34:
                    var1 = undefined;
                    return var1;
                }
            };
case 32:
            var2['onAccessibilityAction'] = var10;
            var2['onPress'] = var9;
            var2['onLongPress'] = var8;
            var2['style'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 29:
            return var1;
        }
    };
    var _closure1_slot19 = var5;
    var1 = function renderCollapsibleCategoryItem(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var4 = var3.collapsed;
            var5 = var3.isRefreshEnabled;
            var1 = null;
            var2 = Object.create(var1);
            var1 = 0;
            var2['collapsed'] = var1;
            var2['isRefreshEnabled'] = var1;
            var14 = {};
            var13 = var3;
            var12 = var2;
            var7 = copyDataProperties(var14, var13, var12);
            var2 = var7.muted;
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var8.bind(var3)(var1);
            var1 = var1.colors;
            if(var2) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var10 = var1.TEXT_SUBTLE;
            _fun0003_ip = 38; continue _fun0003;
case 36:
            var10 = var1.ICON_MUTED;
case 38:
            if(var4) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var9 = _closure1_slot18;
            _fun0003_ip = 41; continue _fun0003;
case 39:
            var9 = _closure1_slot17;
case 41:
            var2 = _closure1_slot19;
            var1 = {};
            var14 = var1;
            var13 = var7;
            var7 = copyDataProperties(var14, var13);
            var8 = _closure1_slot11;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 13;
            var6 = var11[var6];
            var6 = var7.bind(var3)(var6);
            var7 = var6.ChevronSmallDownIcon;
            var6 = {};
            var11 = 'xxs';
            var6['size'] = var11;
            var6['color'] = var10;
            var6['style'] = var9;
            var7 = var8.bind(var3)(var7, var6);
            var6 = 'icon';
            var1[5] = var7;
            var6 = {};
            var4 = !var4;
            var6['expanded'] = var4;
            var4 = 'accessibilityState';
            var1[3] = var6;
            var4 = 'isRefreshEnabled';
            var1[3] = var5;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var4 = function useCategoryPressEvents(arg1, arg2) {
        var6 = arg1;
        var4 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var4;
        var1 = {};
        var8 = _closure1_slot3;
        var7 = var8.useCallback;
        var5 = new Array(2);
        var5[0] = var6;
        var5[1] = var4;
        var4 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure2_slot1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 14;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                if(var3) { _fun0004_ip = 42; continue _fun0004 }
case 2:
                var5 = var4.categoryCollapse;
                var3 = _closure2_slot0;
                var3 = var5.bind(var4)(var3);
                _fun0004_ip = 43; continue _fun0004;
case 42:
                var3 = var4.categoryExpand;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
case 43:
                return var1;
            }
        };
        var4 = var7.bind(var8)(var4, var5);
        var1['onPress'] = var4;
        var5 = _closure1_slot3;
        var4 = var5.useCallback;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.openChannelLongPressActionSheet;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['onLongPress'] = var2;
        return var1;
    };
    var _closure1_slot21 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var10 = var9[var1];
    var6 = metroImportAll;
    var1 = undefined;
    var6 = var6.bind(var1)(var10);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var6 = var6.View;
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var9[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var9[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var9[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var7 = var6.CATEGORY_MARGIN_BOTTOM;
    var _closure1_slot8 = var7;
    var7 = var6.CATEGORY_MARGIN_TOP;
    var _closure1_slot9 = var7;
    var6 = var6.CATEGORY_VERTICAL_PADDING;
    var _closure1_slot10 = var6;
    var6 = 6;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var7 = var6.jsx;
    var _closure1_slot11 = var7;
    var7 = var6.Fragment;
    var _closure1_slot12 = var7;
    var6 = var6.jsxs;
    var _closure1_slot13 = var6;
    var6 = 7;
    var6 = var9[var6];
    var10 = var8.bind(var1)(var6);
    var7 = var10.createStyles;
    var6 = function() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arguments[0];
            var5 = undefined;
            if(!(var4 === var5)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var4 = false;
case 44:
            var1 = {};
            var2 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'paddingVertical': null, 'paddingRight': 16};
            var6 = _closure1_slot10;
            var2['paddingVertical'] = var6;
            var1['categoryWrapper'] = var2;
            var2 = {};
            var7 = {};
            var8 = 1;
            if(var4) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var7['flex'] = var8;
            var6 = var7;
            _fun0005_ip = 48; continue _fun0005;
case 46:
            var7['flexShrink'] = var8;
            var6 = var7;
case 48:
            var11 = var2;
            var10 = var6;
            var6 = copyDataProperties(var11, var10);
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 8;
            var6 = var8[var6];
            var7 = var7.bind(var5)(var6);
            var6 = var7.isAndroid;
            var6 = var6.bind(var7)();
            var7 = 0;
            if(!var6) { _fun0005_ip = 49; continue _fun0005 }
case 6:
            var7 = -1;
case 49:
            var6 = 'marginTop';
            var2[5] = var7;
            var1['categoryText'] = var2;
            var2 = {};
            var7 = 4;
            var2['marginLeft'] = var7;
            var1['noteWrapper'] = var2;
            var2 = {};
            var6 = {};
            if(var4) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var4 = 3;
            var6['marginRight'] = var4;
            var4 = var6;
            _fun0005_ip = 52; continue _fun0005;
case 50:
            var6['marginLeft'] = var7;
            var4 = var6;
case 52:
            var11 = var2;
            var10 = var4;
            var4 = copyDataProperties(var11, var10);
            var1['iconWrapperStyles'] = var2;
            var2 = {};
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 9;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.space;
            var3 = var3.PX_8;
            var2['paddingLeft'] = var3;
            var3 = 'auto';
            var2['marginLeft'] = var3;
            var1['trailingActionWrapper'] = var2;
            return var1;
        }
    };
    var6 = var7.bind(var10)(var6);
    var _closure1_slot14 = var6;
    var7 = {'top': 16, 'bottom': 16, 'left': 16, 'right': 16};
    var _closure1_slot15 = var7;
    var7 = {'borderless': true, 'radius': 16};
    var _closure1_slot16 = var7;
    var10 = {'flexShrink': 0, 'flexGrow': 0};
    var7 = {};
    var15 = var7;
    var14 = var10;
    var11 = copyDataProperties(var15, var14);
    var11 = {};
    var12 = '-90deg';
    var11['rotate'] = var12;
    var12 = new Array(1);
    var12[0] = var11;
    var11 = 'transform';
    var7[10] = var12;
    var _closure1_slot17 = var7;
    var7 = {};
    var15 = var7;
    var14 = var10;
    var10 = copyDataProperties(var15, var14);
    var _closure1_slot18 = var7;
    var7 = 25;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/channel_list_v2/native/items/RedesignCategory.tsx';
    var7 = var8.bind(var9)(var7);
    var3['useCategoryStyles'] = var6;
    var3['renderCategoryItem'] = var5;
    var3['useCategoryPressEvents'] = var4;
    var4 = function CategoryChannel(arg1) {
        var1 = arg1;
        var5 = var1.channel;
        var _closure2_slot0 = var5;
        var9 = var1.withMarginTop;
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var3 = 16;
        var4 = var7[var3];
        var3 = undefined;
        var8 = var6.bind(var3)(var4);
        var4 = 'CategoryChannel';
        var4 = var8.bind(var3)(var4);
        var8 = _closure1_slot14;
        var8 = var8.bind(var3)(var4);
        var11 = _closure1_slot0;
        var10 = 17;
        var10 = var7[var10];
        var12 = var11.bind(var3)(var10);
        var11 = var12.useStateFromStoresObject;
        var13 = _closure1_slot6;
        var10 = new Array(2);
        var10[0] = var13;
        var13 = _closure1_slot7;
        var10[1] = var13;
        var2 = function() {
            var1 = {};
            var6 = _closure1_slot6;
            var5 = var6.isCollapsed;
            var2 = _closure2_slot0;
            var4 = var2.id;
            var4 = var5.bind(var6)(var4);
            var1['collapsed'] = var4;
            var5 = _closure1_slot7;
            var4 = var5.isChannelMuted;
            var3 = var2.getGuildId;
            var3 = var3.bind(var2)();
            var2 = var2.id;
            var2 = var4.bind(var5)(var3, var2);
            var1['muted'] = var2;
            return var1;
        };
        var2 = var11.bind(var12)(var10, var2);
        var12 = var2.collapsed;
        var13 = var2.muted;
        var10 = _closure1_slot21;
        var2 = var5.id;
        var2 = var10.bind(var3)(var2, var12);
        var11 = var2.onPress;
        var10 = var2.onLongPress;
        var2 = _closure1_slot20;
        var1 = {};
        var14 = 18;
        var14 = var7[var14];
        var14 = var6.bind(var3)(var14);
        var14 = var14.bind(var3)(var5);
        var1['name'] = var14;
        var1['muted'] = var13;
        var1['collapsed'] = var12;
        var1['onPress'] = var11;
        var1['onLongPress'] = var10;
        var1['withMarginTop'] = var9;
        var1['styles'] = var8;
        var1['isRefreshEnabled'] = var4;
        var4 = 19;
        var4 = var7[var4];
        var4 = var6.bind(var3)(var4);
        var4 = var4.bind(var3)(var5);
        var1['trailingAction'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['CategoryChannel'] = var4;
    var4 = function RecentlyActiveCategory(arg1) {
        var1 = arg1;
        var11 = var1.guildId;
        var _closure2_slot0 = var11;
        var6 = var1.withMarginTop;
        var5 = _closure1_slot1;
        var13 = _closure1_slot2;
        var3 = 16;
        var4 = var13[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = 'RecentlyActiveCategory';
        var4 = var5.bind(var3)(var4);
        var5 = _closure1_slot14;
        var5 = var5.bind(var3)(var4);
        var12 = _closure1_slot0;
        var7 = 17;
        var7 = var13[var7];
        var10 = var12.bind(var3)(var7);
        var9 = var10.useStateFromStores;
        var7 = _closure1_slot5;
        var8 = new Array(1);
        var8[0] = var7;
        var7 = function() {
            var3 = _closure1_slot5;
            var2 = var3.isCollapsed;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var8 = var9.bind(var10)(var8, var7);
        var _closure2_slot1 = var8;
        var10 = _closure1_slot3;
        var9 = var10.useCallback;
        var7 = new Array(2);
        var7[0] = var11;
        var7[1] = var8;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 20;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.setRecentlyActiveCollapsed;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var1 = !var1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var7 = var9.bind(var10)(var2, var7);
        var2 = _closure1_slot20;
        var1 = {};
        var9 = 21;
        var10 = var13[var9];
        var10 = var12.bind(var3)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.uZyspD;
        var9 = var10.bind(var11)(var9);
        var1['name'] = var9;
        var1['collapsed'] = var8;
        var1['onPress'] = var7;
        var1['withMarginTop'] = var6;
        var1['styles'] = var5;
        var1['isRefreshEnabled'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['RecentlyActiveCategory'] = var4;
    var2 = function SuggestedCategory(arg1) {
        var2 = arg1;
        var11 = var2.guildId;
        var _closure2_slot0 = var11;
        var10 = var2.channelIds;
        var _closure2_slot1 = var10;
        var6 = var2.withMarginTop;
        var4 = _closure1_slot1;
        var12 = _closure1_slot2;
        var2 = 16;
        var2 = var12[var2];
        var3 = undefined;
        var4 = var4.bind(var3)(var2);
        var2 = 'SuggestedCategory';
        var4 = var4.bind(var3)(var2);
        var2 = _closure1_slot14;
        var5 = var2.bind(var3)(var4);
        var9 = _closure1_slot3;
        var7 = var9.useCallback;
        var2 = new Array(2);
        var2[0] = var11;
        var2[1] = var10;
        var1 = function() {
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 22;
            var2 = var8[var1];
            var1 = undefined;
            var4 = var7.bind(var1)(var2);
            var3 = var4.showSimpleActionSheet;
            var2 = {'key': 'REDESIGN_SUGGESTED_CHANNELS_CLEAR', 'options': null, 'hasIcons': true};
            var6 = {};
            var5 = 21;
            var9 = var8[var5];
            var9 = var7.bind(var1)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var5 = var8[var5];
            var5 = var7.bind(var1)(var5);
            var5 = var5.t;
            var5 = var5.VkKicb;
            var5 = var9.bind(var10)(var5);
            var6['label'] = var5;
            var5 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.clearRecentChannels;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var6['onPress'] = var5;
            var5 = 24;
            var5 = var8[var5];
            var5 = var7.bind(var1)(var5);
            var5 = var5.CircleXIcon;
            var6['IconComponent'] = var5;
            var5 = new Array(1);
            var5[0] = var6;
            var2['options'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var7 = var7.bind(var9)(var1, var2);
        var2 = _closure1_slot19;
        var1 = {};
        var11 = _closure1_slot0;
        var8 = 21;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.HbJ7eD;
        var8 = var9.bind(var10)(var8);
        var1['name'] = var8;
        var1['onPress'] = var7;
        var1['withMarginTop'] = var6;
        var1['styles'] = var5;
        var1['isRefreshEnabled'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['SuggestedCategory'] = var2;
    return var1;
})();