// app/modules/parent_tools/native/FamilyCenterActivitySection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function FamilyCenterActivitySectionHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.displayType;
            var1 = _closure1_slot11;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 7;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var8 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var1 = 8;
            var1 = var9[var1];
            var5 = var3.bind(var4)(var1);
            var2 = var5.useIsFamilyCenterV2Enabled;
            var1 = 'family_center_activity_section_native';
            var5 = var2.bind(var5)(var1);
            var1 = 9;
            var1 = var9[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.getActivityTypeTextConfigs;
            var2 = var1.bind(var2)(var5);
            var1 = var2.get;
            var5 = var1.bind(var2)(var6);
            var2 = 10;
            var1 = var9[var2];
            var10 = var3.bind(var4)(var1);
            var1 = var10.useActionsForDisplayType;
            var1 = var1.bind(var10)(var6);
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useFormattedTotalForDisplayType;
            var2 = var2.bind(var3)(var6);
            var3 = _closure1_slot8;
            var3 = var3.PURCHASES;
            if(!(var6 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = null;
            if(!(var3 === var2)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var2 = var1.length;
case 4:
            var6 = null;
            var1 = var6 == var5;
            var13 = undefined;
            if(var1) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var1 = var5.sectionHeader;
            var13 = var1.bind(var5)(var2);
case 5:
            var2 = var6 == var5;
            var1 = undefined;
            if(var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1 = var5.sectionDescription;
case 7:
            var10 = null;
            if(!(var4 !== var1)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = var6 == var5;
            var1 = undefined;
            if(var2) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = var5.sectionDescription;
            var2 = var6 != var8;
            if(!var2) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var2 = var8;
case 13:
            var1 = var3.bind(var5)(var2);
case 11:
            var10 = var1;
case 9:
            var3 = _closure1_slot10;
            var2 = _closure1_slot6;
            var1 = {};
            var9 = _closure1_slot9;
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var12 = 11;
            var5 = var5[var12];
            var5 = var8.bind(var4)(var5);
            var8 = var5.Text;
            var5 = {};
            var14 = 'text-sm/semibold';
            var5['variant'] = var14;
            var14 = var11.header;
            var5['style'] = var14;
            var5['children'] = var13;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var6 = null;
            if(!(var6 !== var10)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var9 = _closure1_slot9;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var12];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var11 = var11.description;
            var7['style'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 15:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot5 = var7;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS;
    var _closure1_slot7 = var7;
    var4 = var4.TeenActionDisplayType;
    var _closure1_slot8 = var4;
    var10 = 4;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 5;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var13 = {};
    var11 = 6;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var13['marginBottom'] = var14;
    var7['header'] = var13;
    var13 = {};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var13['marginBottom'] = var14;
    var7['description'] = var13;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot11 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var13 = 'flex';
    var9['display'] = var13;
    var4['container'] = var9;
    var9 = {};
    var13 = 'hidden';
    var9['overflow'] = var13;
    var4['actionContainer'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'flex': 1, 'alignItems': 'center', 'justifyContent': 'center', 'width': '100%'};
    var4['loadMoreContainer'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderBottomRightRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderBottomLeftRadius'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_ACCENT;
    var9['backgroundColor'] = var11;
    var11 = '60%';
    var9['width'] = var11;
    var4['loadMore'] = var9;
    var9 = {};
    var9['paddingVertical'] = var10;
    var4['loadMoreButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/native/FamilyCenterActivitySection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FamilyCenterActivitySection(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var13 = var1.displayType;
            var _closure2_slot0 = var13;
            var1 = _closure1_slot12;
            var4 = undefined;
            var17 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 10;
            var1 = var5[var2];
            var6 = var3.bind(var4)(var1);
            var1 = var6.useActionsForDisplayType;
            var1 = var1.bind(var6)(var13);
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.useActionTotalsForDisplayType;
            var7 = var2.bind(var6)(var13);
            var2 = 12;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useFamilyCenterActions;
            var2 = {};
            var2 = var3.bind(var5)(var2);
            var3 = var2.loadMore;
            var _closure2_slot1 = var3;
            var10 = var2.isMoreLoading;
            var11 = _closure1_slot4;
            var5 = var11.useState;
            var2 = _closure1_slot7;
            var6 = var5.bind(var11)(var2);
            var5 = _closure1_slot3;
            var2 = 2;
            var9 = var5.bind(var4)(var6, var2);
            var2 = 0;
            var6 = var9[var2];
            var5 = 1;
            var5 = var9[var5];
            var _closure2_slot2 = var5;
            var5 = var1.slice;
            var6 = var5.bind(var1)(var2, var6);
            var9 = var11.useCallback;
            var5 = new Array(2);
            var5[0] = var3;
            var5[1] = var13;
            var3 = function() {
                var4 = _closure2_slot2;
                var1 = undefined;
                var3 = function(arg1) {
                    var2 = _closure1_slot7;
                    var1 = arg1;
                    var1 = var1 + var2;
                    return var1;
                };
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var12 = var9.bind(var11)(var3, var5);
            var1 = var1.length;
            if(!(var2 !== var1)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 13;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var5 = var1.intl;
            var3 = var5.formatToPlainString;
            var2 = _closure1_slot1;
            var1 = 14;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.7dMmJS;
            var1 = {};
            var9 = global;
            var16 = var9.Math;
            var15 = var16.min;
            var9 = var6.length;
            var11 = var7 - var9;
            var9 = _closure1_slot7;
            var9 = var15.bind(var16)(var11, var9);
            var1['pageSize'] = var9;
            var18 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot10;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var17.container;
            var1['style'] = var5;
            var11 = _closure1_slot9;
            var9 = _closure1_slot13;
            var5 = {};
            var5['displayType'] = var13;
            var9 = var11.bind(var4)(var9, var5);
            var5 = new Array(3);
            var5[0] = var9;
            var9 = var6.map;
            var8 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot9;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 15;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['action'] = var1;
                var1 = var1.event_id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var8 = var9.bind(var6)(var8);
            var5[1] = var8;
            var6 = var6.length;
            var7 = var6 < var7;
            var6 = null;
            if(!var7) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var9 = _closure1_slot9;
            var8 = _closure1_slot6;
            var7 = {};
            var11 = var17.loadMoreContainer;
            var7['style'] = var11;
            var13 = _closure1_slot9;
            if(var10) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var15 = _closure1_slot0;
            var19 = _closure1_slot2;
            var10 = 16;
            var10 = var19[var10];
            var10 = var15.bind(var4)(var10);
            var11 = var10.PressableOpacity;
            var10 = {};
            var16 = var17.loadMore;
            var10['style'] = var16;
            var10['accessibilityLabel'] = var18;
            var16 = 'button';
            var10['accessibilityRole'] = var16;
            var10['onPress'] = var12;
            var16 = _closure1_slot9;
            var12 = 11;
            var12 = var19[var12];
            var12 = var15.bind(var4)(var12);
            var15 = var12.Text;
            var12 = {'style': null, 'variant': 'text-xs/semibold', 'color': 'always-white'};
            var19 = var17.loadMoreButton;
            var12['style'] = var19;
            var12['children'] = var18;
            var12 = var16.bind(var4)(var15, var12);
            var10['children'] = var12;
            var10 = var13.bind(var4)(var11, var10);
            _fun0002_ip = 23; continue _fun0002;
case 21:
            var12 = _closure1_slot6;
            var11 = {};
            var15 = var17.loadMore;
            var11['style'] = var15;
            var16 = _closure1_slot9;
            var15 = _closure1_slot5;
            var14 = {'style': null, 'animating': true, 'color': '#fff', 'size': 'small'};
            var17 = var17.loadMoreButton;
            var14['style'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 23:
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 19:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 17:
            var1 = null;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();