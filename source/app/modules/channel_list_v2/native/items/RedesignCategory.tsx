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
            var1 = arg1;
            var11 = var1.name;
            var12 = var1.icon;
            var18 = var1.note;
            var15 = var1.muted;
            var5 = undefined;
            if(!(var15 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var15 = false;
case 2:
            var9 = var1.onPress;
            var8 = var1.onLongPress;
            var4 = var1.withMarginTop;
            var10 = var1.accessibilityState;
            var19 = var1.styles;
            var3 = var1.isRefreshEnabled;
            var1 = var19.categoryWrapper;
            var7 = new Array(2);
            var7[0] = var1;
            var1 = {};
            var6 = 16;
            var2 = var6;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = null;
            var13 = var13 != var12;
            if(!var13) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = 3;
case 6:
            var2 = var6;
case 4:
            var1['paddingLeft'] = var2;
            var2 = 0;
            if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = _closure1_slot9;
case 8:
            var1['marginTop'] = var2;
            var4 = _closure1_slot8;
            var1['marginBottom'] = var4;
            var7[1] = var1;
            var4 = 'string';
            var1 = typeof var11;
            var14 = var11;
            if(!(var4 === var1)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = _closure1_slot11;
            var4 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 9;
            var1 = var13[var1];
            var1 = var4.bind(var5)(var1);
            var4 = var1.Text;
            var1 = {'experimental_useNativeText': true, 'variant': 'text-sm/semibold', 'color': null, 'lineClamp': 1};
            var13 = 'text-subtle';
            if(!var15) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var13 = 'text-muted';
case 12:
            var1['color'] = var13;
            var13 = var19.categoryText;
            var1['style'] = var13;
            var1['children'] = var11;
            var14 = var6.bind(var5)(var4, var1);
case 10:
            var1 = null;
            var4 = var1 != var12;
            var13 = null;
            if(!var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var11 = _closure1_slot11;
            var6 = _closure1_slot4;
            var4 = {};
            var15 = var19.iconWrapperStyles;
            var4['style'] = var15;
            var4['children'] = var12;
            var13 = var11.bind(var5)(var6, var4);
case 14:
            var6 = _closure1_slot13;
            var4 = _closure1_slot12;
            var11 = {};
            var12 = new Array(3);
            if(var3) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var12[0] = var13;
            var12[1] = var14;
            var12[2] = var18;
            var11['children'] = var12;
            var3 = var11;
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var12[0] = var14;
            var15 = var1 != var18;
            var14 = null;
            if(!var15) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var17 = _closure1_slot11;
            var16 = _closure1_slot4;
            var15 = {};
            var19 = var19.noteWrapper;
            var15['style'] = var19;
            var15['children'] = var18;
            var14 = var17.bind(var5)(var16, var15);
case 19:
            var12[1] = var14;
            var12[2] = var13;
            var11['children'] = var12;
            var3 = var11;
case 18:
            var6 = var6.bind(var5)(var4, var3);
            if(!(var1 == var9)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            if(!(var1 == var8)) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            var4 = _closure1_slot11;
            var3 = _closure1_slot4;
            var1 = {};
            var11 = 'header';
            var1['accessibilityRole'] = var11;
            var1['style'] = var7;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 24; continue _fun0001;
case 21:
            var4 = _closure1_slot11;
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 10;
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
case 24:
            return var1;
        }
    };
    var _closure1_slot17 = var5;
    var1 = function renderCollapsibleCategoryItem(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
            var1 = 11;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var8.bind(var3)(var1);
            var1 = var1.colors;
            if(var2) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var10 = var1.TEXT_SUBTLE;
            _fun0002_ip = 27; continue _fun0002;
case 25:
            var10 = var1.ICON_MUTED;
case 27:
            if(var4) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var9 = _closure1_slot16;
            _fun0002_ip = 30; continue _fun0002;
case 28:
            var9 = _closure1_slot15;
case 30:
            var2 = _closure1_slot17;
            var1 = {};
            var14 = var1;
            var13 = var7;
            var7 = copyDataProperties(var14, var13);
            var8 = _closure1_slot11;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 12;
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
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure2_slot1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 13;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                if(var3) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                var5 = var4.categoryCollapse;
                var3 = _closure2_slot0;
                var3 = var5.bind(var4)(var3);
                _fun0003_ip = 33; continue _fun0003;
case 31:
                var3 = var4.categoryExpand;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
case 33:
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
            var1 = 14;
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
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arguments[0];
            var6 = undefined;
            if(!(var3 === var6)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var3 = false;
case 34:
            var1 = {};
            var2 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'paddingVertical': null, 'paddingRight': 16};
            var5 = _closure1_slot10;
            var2['paddingVertical'] = var5;
            var1['categoryWrapper'] = var2;
            var2 = {};
            var7 = {};
            var8 = 1;
            if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var7['flex'] = var8;
            var5 = var7;
            _fun0004_ip = 38; continue _fun0004;
case 36:
            var7['flexShrink'] = var8;
            var5 = var7;
case 38:
            var11 = var2;
            var10 = var5;
            var5 = copyDataProperties(var11, var10);
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 8;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.isAndroid;
            var4 = var4.bind(var5)();
            var5 = 0;
            if(!var4) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var5 = -1;
case 39:
            var4 = 'marginTop';
            var2[3] = var5;
            var1['categoryText'] = var2;
            var2 = {};
            var5 = 4;
            var2['marginLeft'] = var5;
            var1['noteWrapper'] = var2;
            var2 = {};
            var4 = {};
            if(var3) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var3 = 3;
            var4['marginRight'] = var3;
            var3 = var4;
            _fun0004_ip = 43; continue _fun0004;
case 41:
            var4['marginLeft'] = var5;
            var3 = var4;
case 43:
            var11 = var2;
            var10 = var3;
            var3 = copyDataProperties(var11, var10);
            var1['iconWrapperStyles'] = var2;
            return var1;
        }
    };
    var6 = var7.bind(var10)(var6);
    var _closure1_slot14 = var6;
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
    var _closure1_slot15 = var7;
    var7 = {};
    var15 = var7;
    var14 = var10;
    var10 = copyDataProperties(var15, var14);
    var _closure1_slot16 = var7;
    var7 = 22;
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
        var11 = var1.channel;
        var _closure2_slot0 = var11;
        var6 = var1.withMarginTop;
        var5 = _closure1_slot1;
        var9 = _closure1_slot2;
        var3 = 15;
        var4 = var9[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = 'CategoryChannel';
        var4 = var5.bind(var3)(var4);
        var5 = _closure1_slot14;
        var5 = var5.bind(var3)(var4);
        var8 = _closure1_slot0;
        var7 = 16;
        var7 = var9[var7];
        var9 = var8.bind(var3)(var7);
        var8 = var9.useStateFromStoresObject;
        var10 = _closure1_slot6;
        var7 = new Array(2);
        var7[0] = var10;
        var10 = _closure1_slot7;
        var7[1] = var10;
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
        var2 = var8.bind(var9)(var7, var2);
        var9 = var2.collapsed;
        var10 = var2.muted;
        var7 = _closure1_slot19;
        var2 = var11.id;
        var2 = var7.bind(var3)(var2, var9);
        var8 = var2.onPress;
        var7 = var2.onLongPress;
        var2 = _closure1_slot18;
        var1 = {};
        var11 = var11.name;
        var1['name'] = var11;
        var1['muted'] = var10;
        var1['collapsed'] = var9;
        var1['onPress'] = var8;
        var1['onLongPress'] = var7;
        var1['withMarginTop'] = var6;
        var1['styles'] = var5;
        var1['isRefreshEnabled'] = var4;
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
        var3 = 15;
        var4 = var13[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = 'RecentlyActiveCategory';
        var4 = var5.bind(var3)(var4);
        var5 = _closure1_slot14;
        var5 = var5.bind(var3)(var4);
        var12 = _closure1_slot0;
        var7 = 16;
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
            var1 = 17;
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
        var2 = _closure1_slot18;
        var1 = {};
        var9 = 18;
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
        var2 = 15;
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
            var1 = 19;
            var2 = var8[var1];
            var1 = undefined;
            var4 = var7.bind(var1)(var2);
            var3 = var4.showSimpleActionSheet;
            var2 = {};
            var5 = 'REDESIGN_SUGGESTED_CHANNELS_CLEAR';
            var2['key'] = var5;
            var6 = {};
            var5 = 18;
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
                var1 = 20;
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
            var5 = 21;
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
        var2 = _closure1_slot17;
        var1 = {};
        var11 = _closure1_slot0;
        var8 = 18;
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