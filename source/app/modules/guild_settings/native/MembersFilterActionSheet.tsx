// app/modules/guild_settings/native/MembersFilterActionSheet.tsx
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
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var12 = 4;
    var4 = var6[var12];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 7;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var13;
    var4['background'] = var9;
    var9 = {'marginVertical': 8, 'borderRadius': null, 'overflow': 'hidden'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9['borderRadius'] = var13;
    var4['listView'] = var9;
    var9 = {};
    var13 = 12;
    var9['marginHorizontal'] = var13;
    var4['listViewRedesign'] = var9;
    var9 = {};
    var9['marginEnd'] = var12;
    var4['roleDot'] = var9;
    var9 = {};
    var12 = 'row';
    var9['flexDirection'] = var12;
    var4['labelContainer'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_NORMAL;
    var9['color'] = var10;
    var4['label'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/MembersFilterActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MembersFilterActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guild;
            var _closure2_slot0 = var2;
            var3 = var1.selectedRoleId;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot7;
            var2 = var5.getProps;
            var2 = var2.bind(var5)();
            var3 = var2.selectedRoleId;
case 2:
            var _closure2_slot1 = var3;
            var5 = var1.onFilterRoleId;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var1 = _closure1_slot10;
            var11 = var1.bind(var4)();
            _closure2_slot3 = var11;
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 8;
            var6 = var14[var1];
            var12 = var8.bind(var4)(var6);
            var9 = var12.useStateFromStores;
            var6 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getSortedRoles;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var9.bind(var12)(var7, var6);
            var7 = var9.map;
            var6 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.id;
                var1['value'] = var3;
                var5 = var1;
                var4 = var2;
                var2 = copyDataProperties(var5, var4);
                return var1;
            };
            var13 = var7.bind(var9)(var6);
            var6 = var13.length;
            var12 = 1;
            var9 = var6 - var12;
            var7 = var13.unshift;
            var6 = var13.splice;
            var9 = var6.bind(var13)(var9, var12);
            var6 = 0;
            var6 = var9[var6];
            var6 = var7.bind(var13)(var6);
            var7 = _closure1_slot3;
            var9 = var7.useCallback;
            var6 = new Array(2);
            var6[0] = var5;
            var6[1] = var3;
            var5 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot1;
                    if(!(var3 !== var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var5.bind(var2)(var4);
                    var2 = var4.selectRole;
                    var2 = var2.bind(var4)(var3);
                    _fun0002_ip = 8; continue _fun0002;
case 6:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 8:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var1 = 'MembersFilter';
                    var1 = var2.bind(var3)(var1);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var9.bind(var7)(var5, var6);
            _closure2_slot4 = var15;
            var1 = var14[var1];
            var9 = var8.bind(var4)(var1);
            var6 = var9.useStateFromStores;
            var1 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var1 = _closure1_slot5;
                var1 = var1.roleStyle;
                return var1;
            };
            var9 = var6.bind(var9)(var5, var1);
            _closure2_slot5 = var9;
            var6 = var7.useContext;
            var1 = 11;
            var5 = var14[var1];
            var5 = var8.bind(var4)(var5);
            var5 = var5.RedesignCompatContext;
            var12 = var6.bind(var7)(var5);
            var6 = var7.useCallback;
            var5 = new Array(4);
            var5[0] = var15;
            var5[1] = var9;
            var5[2] = var3;
            var5[3] = var11;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var15 = var1.item;
                    var _closure3_slot0 = var15;
                    var4 = _closure1_slot9;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var11 = _closure1_slot8;
                    var8 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var9 = 12;
                    var5 = var1[var9];
                    var1 = undefined;
                    var5 = var8.bind(var1)(var5);
                    var10 = var5.FormRow;
                    var5 = {};
                    var8 = {};
                    var12 = _closure2_slot3;
                    var12 = var12.labelContainer;
                    var8['style'] = var12;
                    var13 = _closure2_slot5;
                    var12 = 'dot';
                    var13 = var12 === var13;
                    if(!var13) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var16 = var15.colorString;
                    var12 = null;
                    var13 = var12 != var16;
case 9:
                    if(!var13) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var17 = _closure1_slot8;
                    var16 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var12 = 13;
                    var12 = var18[var12];
                    var12 = var16.bind(var1)(var12);
                    var16 = var12.RoleDot;
                    var12 = {};
                    var18 = _closure2_slot3;
                    var18 = var18.roleDot;
                    var12['containerStyles'] = var18;
                    var18 = var15.colorString;
                    var12['color'] = var18;
                    var18 = var15.colorStrings;
                    var12['colors'] = var18;
                    var13 = var17.bind(var1)(var16, var12);
case 11:
                    var12 = new Array(2);
                    var12[0] = var13;
                    var17 = _closure1_slot8;
                    var16 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var13 = 14;
                    var13 = var18[var13];
                    var13 = var16.bind(var1)(var13);
                    var16 = var13.Text;
                    var13 = {};
                    var18 = 'text-md/medium';
                    var13['variant'] = var18;
                    var18 = _closure2_slot3;
                    var19 = var18.label;
                    var18 = new Array(2);
                    var18[0] = var19;
                    var19 = var15.colorString;
                    var22 = null;
                    var20 = var22 != var19;
                    var19 = null;
                    if(!var20) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var21 = _closure2_slot5;
                    var20 = 'username';
                    var19 = null;
                    if(!(var20 === var21)) { _fun0003_ip = 13; continue _fun0003 }
case 15:
                    var20 = {};
                    var21 = var15.colorString;
                    var20['color'] = var21;
                    var19 = var20;
case 13:
                    var18[1] = var19;
                    var13['style'] = var18;
                    var18 = var15.name;
                    var13['children'] = var18;
                    var13 = var17.bind(var1)(var16, var13);
                    var12[1] = var13;
                    var8['children'] = var12;
                    var8 = var4.bind(var1)(var3, var8);
                    var5['label'] = var8;
                    var7 = function onPress() {
                        var3 = _closure2_slot4;
                        var1 = _closure3_slot0;
                        var2 = var1.id;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var5['onPress'] = var7;
                    var8 = _closure1_slot8;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var12 = var6[var9];
                    var12 = var7.bind(var1)(var12);
                    var12 = var12.FormRow;
                    var13 = var12.Radio;
                    var12 = {};
                    var15 = var15.id;
                    var14 = _closure2_slot1;
                    var14 = var15 === var14;
                    var12['selected'] = var14;
                    var12 = var8.bind(var1)(var13, var12);
                    var5['trailing'] = var12;
                    var10 = var11.bind(var1)(var10, var5);
                    var5 = new Array(2);
                    var5[0] = var10;
                    var6 = var6[var9];
                    var6 = var7.bind(var1)(var6);
                    var7 = var6.FormDivider;
                    var6 = {};
                    var9 = true;
                    var6['outer'] = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var9 = var6.bind(var7)(var3, var5);
            var3 = _closure1_slot8;
            var1 = var14[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.RedesignCompat;
            var1 = {};
            var5 = 15;
            var5 = var14[var5];
            var5 = var8.bind(var4)(var5);
            var6 = var5.ActionSheet;
            var5 = {};
            var7 = true;
            var5['scrollable'] = var7;
            var7 = 16;
            var7 = var14[var7];
            var7 = var8.bind(var4)(var7);
            var15 = var7.BottomSheetTitleHeader;
            var7 = {};
            var16 = 17;
            var17 = var14[var16];
            var17 = var8.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var14[var16];
            var16 = var8.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.pEasFR;
            var16 = var17.bind(var18)(var16);
            var7['title'] = var16;
            var7 = var3.bind(var4)(var15, var7);
            var5['header'] = var7;
            var7 = 18;
            var7 = var14[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.BottomSheetFlatList;
            var7 = {};
            var7['data'] = var13;
            var10 = function keyExtractor(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var7['keyExtractor'] = var10;
            var7['renderItem'] = var9;
            var10 = var11.listView;
            var9 = new Array(2);
            var9[0] = var10;
            var10 = undefined;
            if(!var12) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var10 = var11.listViewRedesign;
case 16:
            var9[1] = var10;
            var7['contentContainerStyle'] = var9;
            var9 = 10;
            var7['initialNumToRender'] = var9;
            var9 = false;
            var7['removeClippedSubviews'] = var9;
            var7 = var3.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();