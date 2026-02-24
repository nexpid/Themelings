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
    var9 = {'marginVertical': 8, 'borderRadius': null, 'overflow': 'hidden'};
    var10 = 7;
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
    var10 = var10.INTERACTIVE_TEXT_DEFAULT;
    var9['color'] = var10;
    var4['label'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 18;
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
            var2 = var1.selectedRoleId;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot7;
            var3 = var5.getProps;
            var3 = var3.bind(var5)();
            var2 = var3.selectedRoleId;
case 2:
            var _closure2_slot1 = var2;
            var5 = var1.onFilterRoleId;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var3 = _closure1_slot10;
            var8 = var3.bind(var4)();
            _closure2_slot3 = var8;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 8;
            var7 = var11[var3];
            var13 = var6.bind(var4)(var7);
            var12 = var13.useStateFromStores;
            var7 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getSortedRoles;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var12.bind(var13)(var10, var7);
            var10 = var12.map;
            var7 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.id;
                var1['value'] = var3;
                var5 = var1;
                var4 = var2;
                var2 = copyDataProperties(var5, var4);
                return var1;
            };
            var10 = var10.bind(var12)(var7);
            var7 = var10.length;
            var14 = 1;
            var13 = var7 - var14;
            var12 = var10.unshift;
            var7 = var10.splice;
            var13 = var7.bind(var10)(var13, var14);
            var7 = 0;
            var7 = var13[var7];
            var7 = var12.bind(var10)(var7);
            var7 = _closure1_slot3;
            var13 = var7.useCallback;
            var12 = new Array(2);
            var12[0] = var5;
            var12[1] = var2;
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
            var13 = var13.bind(var7)(var5, var12);
            _closure2_slot4 = var13;
            var3 = var11[var3];
            var14 = var6.bind(var4)(var3);
            var12 = var14.useStateFromStores;
            var3 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var1 = _closure1_slot5;
                var1 = var1.roleStyle;
                return var1;
            };
            var12 = var12.bind(var14)(var5, var3);
            _closure2_slot5 = var12;
            var5 = var7.useCallback;
            var3 = new Array(4);
            var3[0] = var13;
            var3[1] = var12;
            var3[2] = var2;
            var3[3] = var8;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var6 = var1.item;
                    var _closure3_slot0 = var6;
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.TableRadioRow;
                    var1 = {};
                    var5 = var6.id;
                    var1['value'] = var5;
                    var10 = _closure1_slot9;
                    var9 = _closure1_slot4;
                    var8 = {};
                    var11 = _closure2_slot3;
                    var11 = var11.labelContainer;
                    var8['style'] = var11;
                    var13 = _closure2_slot5;
                    var11 = 'dot';
                    var13 = var11 === var13;
                    if(!var13) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var14 = var6.colorString;
                    var11 = null;
                    var13 = var11 != var14;
case 9:
                    if(!var13) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var15 = _closure1_slot8;
                    var14 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var11 = 12;
                    var11 = var16[var11];
                    var11 = var14.bind(var3)(var11);
                    var14 = var11.RoleDot;
                    var11 = {};
                    var16 = _closure2_slot3;
                    var16 = var16.roleDot;
                    var11['containerStyles'] = var16;
                    var16 = var6.colorString;
                    var11['color'] = var16;
                    var16 = var6.colorStrings;
                    var11['colors'] = var16;
                    var13 = var15.bind(var3)(var14, var11);
case 11:
                    var11 = new Array(2);
                    var11[0] = var13;
                    var14 = _closure1_slot8;
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var12 = 13;
                    var12 = var15[var12];
                    var12 = var13.bind(var3)(var12);
                    var13 = var12.Text;
                    var12 = {};
                    var15 = 'text-md/medium';
                    var12['variant'] = var15;
                    var15 = _closure2_slot3;
                    var16 = var15.label;
                    var15 = new Array(2);
                    var15[0] = var16;
                    var16 = var6.colorString;
                    var19 = null;
                    var17 = var19 != var16;
                    var16 = null;
                    if(!var17) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var18 = _closure2_slot5;
                    var17 = 'username';
                    var16 = null;
                    if(!(var17 === var18)) { _fun0003_ip = 13; continue _fun0003 }
case 15:
                    var17 = {};
                    var18 = var6.colorString;
                    var17['color'] = var18;
                    var16 = var17;
case 13:
                    var15[1] = var16;
                    var12['style'] = var15;
                    var15 = var6.name;
                    var12['children'] = var15;
                    var12 = var14.bind(var3)(var13, var12);
                    var11[1] = var12;
                    var8['children'] = var11;
                    var8 = var10.bind(var3)(var9, var8);
                    var1['label'] = var8;
                    var7 = function legacyCompat_onPress() {
                        var3 = _closure2_slot4;
                        var1 = _closure3_slot0;
                        var2 = var1.id;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1['legacyCompat_onPress'] = var7;
                    var6 = var6.id;
                    var5 = _closure2_slot1;
                    var5 = var6 === var5;
                    var1['legacyCompat_selected'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var7 = var5.bind(var7)(var2, var3);
            var3 = _closure1_slot8;
            var1 = 14;
            var1 = var11[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var5 = true;
            var1['scrollable'] = var5;
            var5 = 15;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var12 = var5.BottomSheetTitleHeader;
            var5 = {};
            var13 = 16;
            var14 = var11[var13];
            var14 = var6.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var11[var13];
            var13 = var6.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.pEasFX;
            var13 = var14.bind(var15)(var13);
            var5['title'] = var13;
            var5 = var3.bind(var4)(var12, var5);
            var1['header'] = var5;
            var5 = 17;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheetFlatList;
            var5 = {};
            var5['data'] = var10;
            var9 = function keyExtractor(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var5['keyExtractor'] = var9;
            var5['renderItem'] = var7;
            var9 = var8.listView;
            var7 = new Array(2);
            var7[0] = var9;
            var8 = var8.listViewRedesign;
            var7[1] = var8;
            var5['contentContainerStyle'] = var7;
            var7 = 10;
            var5['initialNumToRender'] = var7;
            var7 = false;
            var5['removeClippedSubviews'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();