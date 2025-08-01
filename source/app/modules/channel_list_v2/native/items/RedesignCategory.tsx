// app/modules/channel_list_v2/native/items/RedesignCategory.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var7 = require;
        var9 = metroImportDefault;
        var3 = exports;
        var8 = dependencyMap;
        var _closure1_slot0 = var7;
        var _closure1_slot1 = var9;
        var _closure1_slot2 = var8;
        var5 = function renderCategoryItem(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var17 = var1.name;
                var16 = var1.icon;
                var12 = var1.note;
                var19 = var1.muted;
                var5 = undefined;
                if(!(var19 === var5)) { _fun0002_ip = 33; continue _fun0002 }
 31:
                var19 = false;
 33:
                var9 = var1.onPress;
                var8 = var1.onLongPress;
                var6 = var1.withMarginTop;
                var10 = var1.accessibilityState;
                var1 = _closure1_slot14;
                var1 = var1.categoryWrapper;
                var7 = new Array(2);
                var7[0] = var1;
                var3 = {};
                var1 = null;
                var11 = var1 != var16;
                var4 = 16;
                if(!var11) { _fun0002_ip = 94; continue _fun0002 }
 91:
                var4 = 3;
 94:
                var3['paddingLeft'] = var4;
                var4 = 0;
                if(!var6) { _fun0002_ip = 108; continue _fun0002 }
 104:
                var4 = _closure1_slot9;
 108:
                var3['marginTop'] = var4;
                var4 = _closure1_slot8;
                var3['marginBottom'] = var4;
                var7[1] = var3;
                var6 = _closure1_slot13;
                var4 = _closure1_slot12;
                var3 = {};
                var11 = var1 != var16;
                var13 = null;
                if(!var11) { _fun0002_ip = 177; continue _fun0002 }
 143:
                var15 = _closure1_slot11;
                var14 = _closure1_slot4;
                var11 = {};
                var18 = _closure1_slot14;
                var18 = var18.iconWrapperStyles;
                var11['style'] = var18;
                var11['children'] = var16;
                var13 = var15.bind(var5)(var14, var11);
 177:
                var11 = new Array(3);
                var11[0] = var13;
                var15 = 'string';
                var14 = typeof var17;
                var13 = var17;
                if(!(var15 === var14)) { _fun0002_ip = 296; continue _fun0002 }
 199:
                var16 = _closure1_slot11;
                var15 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 8;
                var14 = var18[var14];
                var14 = var15.bind(var5)(var14);
                var15 = var14.Text;
                var14 = {};
                var18 = true;
                var14['experimental_useNativeText'] = var18;
                var18 = _closure1_slot10;
                var14['variant'] = var18;
                var18 = 'header-secondary';
                if(!var19) { _fun0002_ip = 260; continue _fun0002 }
 254:
                var18 = 'interactive-muted';
 260:
                var14['color'] = var18;
                var18 = 1;
                var14['lineClamp'] = var18;
                var18 = _closure1_slot14;
                var18 = var18.categoryText;
                var14['style'] = var18;
                var14['children'] = var17;
                var13 = var16.bind(var5)(var15, var14);
 296:
                var11[1] = var13;
                var11[2] = var12;
                var3['children'] = var11;
                var6 = var6.bind(var5)(var4, var3);
                if(!(var1 == var9)) { _fun0002_ip = 356; continue _fun0002 }
 318:
                if(!(var1 == var8)) { _fun0002_ip = 356; continue _fun0002 }
 322:
                var4 = _closure1_slot11;
                var3 = _closure1_slot4;
                var1 = {};
                var11 = 'header';
                var1['accessibilityRole'] = var11;
                var1['style'] = var7;
                var1['children'] = var6;
                var1 = var4.bind(var5)(var3, var1);
                _fun0002_ip = 424; continue _fun0002;
 356:
                var4 = _closure1_slot11;
                var3 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 9;
                var2 = var11[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.PressableHighlight;
                var2 = {};
                var11 = 'header';
                var2['accessibilityRole'] = var11;
                var2['accessibilityState'] = var10;
                var2['onPress'] = var9;
                var2['onLongPress'] = var8;
                var2['style'] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 424:
                return var1;
            }
        };
        var _closure1_slot17 = var5;
        var1 = function renderCollapsibleCategoryItem(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = arg1;
                var4 = var3.collapsed;
                var1 = null;
                var2 = Object.create(var1);
                var1 = 0;
                var2['collapsed'] = var1;
                var13 = {};
                var12 = var3;
                var11 = var2;
                var6 = copyDataProperties(var13, var12, var11);
                var2 = var6.muted;
                var7 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var7.bind(var3)(var1);
                var1 = var1.colors;
                if(var2) { _fun0003_ip = 80; continue _fun0003 }
 72:
                var9 = var1.HEADER_SECONDARY;
                _fun0003_ip = 86; continue _fun0003;
 80:
                var9 = var1.INTERACTIVE_MUTED;
 86:
                if(var4) { _fun0003_ip = 95; continue _fun0003 }
 89:
                var8 = _closure1_slot16;
                _fun0003_ip = 99; continue _fun0003;
 95:
                var8 = _closure1_slot15;
 99:
                var2 = _closure1_slot17;
                var1 = {};
                var13 = var1;
                var12 = var6;
                var6 = copyDataProperties(var13, var12);
                var7 = _closure1_slot11;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 11;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.ChevronSmallDownIcon;
                var5 = {};
                var10 = 'xxs';
                var5['size'] = var10;
                var5['color'] = var9;
                var5['style'] = var8;
                var6 = var7.bind(var3)(var6, var5);
                var5 = 'icon';
                var1[var5] = var6;
                var5 = {};
                var4 = !var4;
                var5['expanded'] = var4;
                var4 = 'accessibilityState';
                var1[var4] = var5;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var _closure1_slot18 = var1;
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
 0:
                    var3 = _closure2_slot1;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 12;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    if(var3) { _fun0004_ip = 52; continue _fun0004 }
 35:
                    var5 = var4.categoryCollapse;
                    var3 = _closure2_slot0;
                    var3 = var5.bind(var4)(var3);
                    _fun0004_ip = 67; continue _fun0004;
 52:
                    var3 = var4.categoryExpand;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
 67:
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
                var1 = 13;
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
        var _closure1_slot19 = var4;
        var1 = global;
        var11 = var1.Object;
        var10 = var11.defineProperty;
        var6 = {};
        var1 = true;
        var6['value'] = var1;
        var1 = '__esModule';
        var1 = var10.bind(var11)(var3, var1, var6);
        var13 = 0;
        var10 = var8[var13];
        var6 = metroImportAll;
        var1 = undefined;
        var6 = var6.bind(var1)(var10);
        var _closure1_slot3 = var6;
        var14 = 1;
        var6 = var8[var14];
        var6 = var7.bind(var1)(var6);
        var10 = var6.StyleSheet;
        var6 = var6.View;
        var _closure1_slot4 = var6;
        var6 = 2;
        var6 = var8[var6];
        var6 = var9.bind(var1)(var6);
        var _closure1_slot5 = var6;
        var12 = 3;
        var6 = var8[var12];
        var6 = var9.bind(var1)(var6);
        var _closure1_slot6 = var6;
        var6 = 4;
        var6 = var8[var6];
        var6 = var9.bind(var1)(var6);
        var _closure1_slot7 = var6;
        var6 = 5;
        var6 = var8[var6];
        var6 = var7.bind(var1)(var6);
        var9 = var6.CATEGORY_MARGIN_BOTTOM;
        var _closure1_slot8 = var9;
        var9 = var6.CATEGORY_MARGIN_TOP;
        var _closure1_slot9 = var9;
        var9 = var6.CATEGORY_NAME_TEXT_VARIANT;
        var _closure1_slot10 = var9;
        var15 = var6.CATEGORY_VERTICAL_PADDING;
        var6 = 6;
        var6 = var8[var6];
        var6 = var7.bind(var1)(var6);
        var9 = var6.jsx;
        var _closure1_slot11 = var9;
        var9 = var6.Fragment;
        var _closure1_slot12 = var9;
        var6 = var6.jsxs;
        var _closure1_slot13 = var6;
        var9 = var10.create;
        var6 = {};
        var11 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'paddingVertical': null, 'paddingRight': 16};
        var11['paddingVertical'] = var15;
        var6['categoryWrapper'] = var11;
        var11 = {};
        var11['flex'] = var14;
        var14 = 7;
        var14 = var8[var14];
        var15 = var7.bind(var1)(var14);
        var14 = var15.isAndroid;
        var14 = var14.bind(var15)();
        if(!var14) { _fun0001_ip = 342; continue _fun0001 }
 336:
        var13 = -1;
 342:
        var11['marginTop'] = var13;
        var6['categoryText'] = var11;
        var11 = {};
        var11['marginRight'] = var12;
        var6['iconWrapperStyles'] = var11;
        var6 = var9.bind(var10)(var6);
        var _closure1_slot14 = var6;
        var9 = {'flexShrink': 0, 'flexGrow': 0};
        var6 = {};
        var18 = var6;
        var17 = var9;
        var10 = copyDataProperties(var18, var17);
        var10 = {};
        var11 = '-90deg';
        var10['rotate'] = var11;
        var11 = new Array(1);
        var11[0] = var10;
        var10 = 'transform';
        var6[var10] = var11;
        var _closure1_slot15 = var6;
        var6 = {};
        var18 = var6;
        var17 = var9;
        var9 = copyDataProperties(var18, var17);
        var _closure1_slot16 = var6;
        var6 = 20;
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = 'modules/channel_list_v2/native/items/RedesignCategory.tsx';
        var6 = var7.bind(var8)(var6);
        var3['renderCategoryItem'] = var5;
        var3['useCategoryPressEvents'] = var4;
        var4 = function CategoryChannel(arg1) {
            var1 = arg1;
            var9 = var1.channel;
            var _closure2_slot0 = var9;
            var4 = var1.withMarginTop;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 14;
            var5 = var5[var3];
            var3 = undefined;
            var7 = var6.bind(var3)(var5);
            var6 = var7.useStateFromStoresObject;
            var8 = _closure1_slot6;
            var5 = new Array(2);
            var5[0] = var8;
            var8 = _closure1_slot7;
            var5[1] = var8;
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
            var2 = var6.bind(var7)(var5, var2);
            var7 = var2.collapsed;
            var8 = var2.muted;
            var5 = _closure1_slot19;
            var2 = var9.id;
            var2 = var5.bind(var3)(var2, var7);
            var6 = var2.onPress;
            var5 = var2.onLongPress;
            var2 = _closure1_slot18;
            var1 = {};
            var9 = var9.name;
            var1['name'] = var9;
            var1['muted'] = var8;
            var1['collapsed'] = var7;
            var1['onPress'] = var6;
            var1['onLongPress'] = var5;
            var1['withMarginTop'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3['CategoryChannel'] = var4;
        var4 = function RecentlyActiveCategory(arg1) {
            var1 = arg1;
            var9 = var1.guildId;
            var _closure2_slot0 = var9;
            var4 = var1.withMarginTop;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 14;
            var5 = var11[var3];
            var3 = undefined;
            var8 = var10.bind(var3)(var5);
            var7 = var8.useStateFromStores;
            var5 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var3 = _closure1_slot5;
                var2 = var3.isCollapsed;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var7.bind(var8)(var6, var5);
            var _closure2_slot1 = var6;
            var8 = _closure1_slot3;
            var7 = var8.useCallback;
            var5 = new Array(2);
            var5[0] = var9;
            var5[1] = var6;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
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
            var5 = var7.bind(var8)(var2, var5);
            var2 = _closure1_slot18;
            var1 = {};
            var7 = 16;
            var8 = var11[var7];
            var8 = var10.bind(var3)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var3)(var7);
            var7 = var7.t;
            var7 = var7.uZyspK;
            var7 = var8.bind(var9)(var7);
            var1['name'] = var7;
            var1['collapsed'] = var6;
            var1['onPress'] = var5;
            var1['withMarginTop'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3['RecentlyActiveCategory'] = var4;
        var2 = function SuggestedCategory(arg1) {
            var1 = arg1;
            var8 = var1.guildId;
            var _closure2_slot0 = var8;
            var7 = var1.channelIds;
            var _closure2_slot1 = var7;
            var4 = var1.withMarginTop;
            var6 = _closure1_slot3;
            var5 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var8;
            var3[1] = var7;
            var2 = function() {
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 17;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var7.bind(var1)(var2);
                var3 = var4.showSimpleActionSheet;
                var2 = {};
                var5 = 'REDESIGN_SUGGESTED_CHANNELS_CLEAR';
                var2['key'] = var5;
                var6 = {};
                var5 = 16;
                var9 = var8[var5];
                var9 = var7.bind(var1)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var5 = var8[var5];
                var5 = var7.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.VkKicX;
                var5 = var9.bind(var10)(var5);
                var6['label'] = var5;
                var5 = function onPress() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
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
                var5 = 19;
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
            var5 = var5.bind(var6)(var2, var3);
            var3 = _closure1_slot17;
            var2 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 16;
            var7 = var10[var6];
            var1 = undefined;
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.HbJ7eH;
            var6 = var7.bind(var8)(var6);
            var2['name'] = var6;
            var2['onPress'] = var5;
            var2['withMarginTop'] = var4;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var3['SuggestedCategory'] = var2;
        return var1;
    }
})();