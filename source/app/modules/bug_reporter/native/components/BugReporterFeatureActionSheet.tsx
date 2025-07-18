// app/modules/bug_reporter/native/components/BugReporterFeatureActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot4 = var8;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 5;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var10['paddingHorizontal'] = var13;
    var4['list'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var10['paddingHorizontal'] = var13;
    var4['searchBar'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_PRIMARY;
    var10['backgroundColor'] = var11;
    var11 = 'center';
    var10['justifyContent'] = var11;
    var4['sectionHeader'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var7 = var1.title;
        var9 = var1.height;
        var1 = _closure1_slot8;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot5;
        var1 = {};
        var8 = var6.sectionHeader;
        var6 = new Array(2);
        var6[0] = var8;
        var8 = {};
        var8['height'] = var9;
        var6[1] = var8;
        var1['style'] = var6;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var5 = 6;
        var5 = var8[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.Text;
        var5 = {'variant': 'text-sm/bold', 'color': 'text-muted'};
        var5['children'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var10 = var1.item;
        var _closure2_slot0 = var10;
        var7 = var1.feature;
        var2 = var1.setFeature;
        var _closure2_slot1 = var2;
        var12 = var1.start;
        var11 = var1.end;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 7;
        var3 = var9[var2];
        var4 = undefined;
        var8 = var6.bind(var4)(var3);
        var3 = var8.getFeatureId;
        var8 = var3.bind(var8)(var10);
        var2 = var9[var2];
        var3 = var6.bind(var4)(var2);
        var2 = var3.getFeatureId;
        var7 = var2.bind(var3)(var7);
        var3 = _closure1_slot6;
        var1 = 8;
        var1 = var9[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.TableRow;
        var1 = {};
        var1['start'] = var12;
        var1['end'] = var11;
        var10 = var10.name;
        var1['label'] = var10;
        var5 = function onPress() {
            var3 = _closure2_slot1;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.hideActionSheet;
            var2 = var2.bind(var3)();
            return var1;
        };
        var1['onPress'] = var5;
        var5 = 10;
        var5 = var9[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.FormRadio;
        var5 = {};
        var7 = var8 === var7;
        var5['selected'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['trailing'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/bug_reporter/native/components/BugReporterFeatureActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BugReporterFeatureActionSheet(arg1) {
        var3 = arg1;
        var10 = var3.features;
        var _closure2_slot0 = var10;
        var2 = var3.feature;
        var _closure2_slot1 = var2;
        var13 = var3.setFeature;
        var _closure2_slot2 = var13;
        var3 = _closure1_slot8;
        var4 = undefined;
        var18 = var3.bind(var4)();
        var6 = _closure1_slot4;
        var7 = var6.useState;
        var3 = '';
        var8 = var7.bind(var6)(var3);
        var7 = _closure1_slot3;
        var3 = 2;
        var8 = var7.bind(var4)(var8, var3);
        var3 = 0;
        var3 = var8[var3];
        var _closure2_slot3 = var3;
        var7 = 1;
        var20 = var8[var7];
        var11 = _closure1_slot1;
        var12 = _closure1_slot2;
        var7 = 11;
        var7 = var12[var7];
        var7 = var11.bind(var4)(var7);
        var7 = var7.bind(var4)();
        var9 = var7.insets;
        var8 = var6.useMemo;
        var7 = new Array(2);
        var7[0] = var10;
        var7[1] = var3;
        var3 = function() {
            var4 = _closure2_slot0;
            var2 = var4.filter;
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var7 = arg1;
                    var1 = var7.asana_inbox_id;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0001_ip = 230; continue _fun0001 }
 21:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 12;
                    var2 = var6[var2];
                    var6 = undefined;
                    var9 = var4.bind(var6)(var2);
                    var8 = var9.isEmpty;
                    var2 = _closure2_slot3;
                    var2 = var8.bind(var9)(var2);
                    if(var2) { _fun0001_ip = 145; continue _fun0001 }
 67:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 13;
                    var8 = var10[var8];
                    var10 = var9.bind(var6)(var8);
                    var9 = _closure2_slot3;
                    var8 = var9.toLowerCase;
                    var9 = var8.bind(var9)();
                    var12 = var7.name;
                    var8 = var3 == var12;
                    var11 = undefined;
                    if(var8) { _fun0001_ip = 125; continue _fun0001 }
 115:
                    var8 = var12.toLowerCase;
                    var11 = var8.bind(var12)();
 125:
                    var12 = var3 != var11;
                    var8 = '';
                    if(!var12) { _fun0001_ip = 139; continue _fun0001 }
 136:
                    var8 = var11;
 139:
                    var2 = var10.bind(var6)(var9, var8);
 145:
                    if(var2) { _fun0001_ip = 227; continue _fun0001 }
 148:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var5 = 13;
                    var5 = var9[var5];
                    var5 = var8.bind(var6)(var5);
                    var8 = _closure2_slot3;
                    var4 = var8.toLowerCase;
                    var4 = var4.bind(var8)();
                    var9 = var7.squad;
                    var8 = var3 == var9;
                    var7 = undefined;
                    if(var8) { _fun0001_ip = 207; continue _fun0001 }
 197:
                    var8 = var9.toLowerCase;
                    var7 = var8.bind(var9)();
 207:
                    var8 = var3 != var7;
                    var3 = '';
                    if(!var8) { _fun0001_ip = 221; continue _fun0001 }
 218:
                    var3 = var7;
 221:
                    var2 = var5.bind(var6)(var4, var3);
 227:
                    var1 = var2;
 230:
                    return var1;
                }
            };
            var7 = var2.bind(var4)(var1);
            var1 = global;
            var4 = var1.Object;
            var2 = var4.entries;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 12;
            var5 = var5[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = var6.groupBy;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.squad;
                return var1;
            };
            var1 = var5.bind(var6)(var7, var1);
            var5 = var2.bind(var4)(var1);
            var2 = var5.map;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = arg1;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var1 = var4().value;
                    var1 = var2;
                    var6 = undefined;
                    var3 = var1 === var6;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 49; continue _fun0002 }
 24:
                    var5 = var4().value;
                    var4 = var2;
                    var4 = var4 === var6;
                    var1 = undefined;
                    var3 = var4;
                    if(var4) { _fun0002_ip = 49; continue _fun0002 }
 43:
                    var1 = var5;
                    var3 = var4;
 49:
                    if(var3) { _fun0002_ip = 55; continue _fun0002 }
 52:
                    var2.return();
 55:
                    var1 = var1.length;
                    return var1;
                }
            };
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var4 = var5.map;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = arg1;
                    var1 = var5[Symbol.iterator];
                    var5 = var1().next;
                    var2 = var5().value;
                    var3 = var1;
                    var7 = undefined;
                    var4 = var3 === var7;
                    var3 = undefined;
                    if(var4) { _fun0003_ip = 27; continue _fun0003 }
 24:
                    var3 = var2;
 27:
                    var2 = undefined;
                    if(var4) { _fun0003_ip = 57; continue _fun0003 }
 32:
                    var6 = var5().value;
                    var5 = var1;
                    var5 = var5 === var7;
                    var2 = undefined;
                    var4 = var5;
                    if(var5) { _fun0003_ip = 57; continue _fun0003 }
 51:
                    var2 = var6;
                    var4 = var5;
 57:
                    if(var4) { _fun0003_ip = 63; continue _fun0003 }
 60:
                    var1.return();
 63:
                    var1 = {};
                    var1['title'] = var3;
                    var1['data'] = var2;
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var1['items'] = var3;
            var1['sections'] = var2;
            return var1;
        };
        var3 = var8.bind(var6)(var3, var7);
        var7 = var3.items;
        var _closure2_slot4 = var7;
        var16 = var3.sections;
        var3 = 14;
        var3 = var12[var3];
        var3 = var11.bind(var4)(var3);
        var15 = var3.bind(var4)();
        var3 = 15;
        var3 = var12[var3];
        var3 = var11.bind(var4)(var3);
        var10 = var3.bind(var4)();
        var _closure2_slot5 = var10;
        var8 = var6.useCallback;
        var3 = new Array(3);
        var3[0] = var7;
        var3[1] = var13;
        var3[2] = var2;
        var2 = function(arg1, arg2) {
            var6 = arg1;
            var5 = arg2;
            var4 = _closure1_slot6;
            var3 = _closure1_slot10;
            var2 = {};
            var1 = _closure2_slot4;
            var8 = var1[var6];
            var8 = var8.data;
            var8 = var8[var5];
            var2['item'] = var8;
            var8 = _closure2_slot1;
            var2['feature'] = var8;
            var7 = _closure2_slot2;
            var2['setFeature'] = var7;
            var7 = 0;
            var7 = var7 === var5;
            var2['start'] = var7;
            var1 = var1[var6];
            var1 = var1.data;
            var6 = var1.length;
            var1 = 1;
            var1 = var6 - var1;
            var1 = var5 === var1;
            var2['end'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var14 = var8.bind(var6)(var2, var3);
        var3 = var6.useCallback;
        var2 = new Array(2);
        var2[0] = var10;
        var2[1] = var7;
        var1 = function(arg1) {
            var4 = _closure1_slot6;
            var3 = _closure1_slot9;
            var2 = {};
            var6 = _closure2_slot4;
            var5 = arg1;
            var5 = var6[var5];
            var5 = var5.title;
            var2['title'] = var5;
            var1 = _closure2_slot5;
            var2['height'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var13 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot7;
        var19 = _closure1_slot0;
        var1 = 16;
        var1 = var12[var1];
        var1 = var19.bind(var4)(var1);
        var2 = var1.BottomSheet;
        var1 = {'scrollable': true, 'startExpanded': true};
        var17 = true;
        var8 = _closure1_slot6;
        var6 = 17;
        var6 = var12[var6];
        var6 = var19.bind(var4)(var6);
        var7 = var6.BottomSheetTitleHeader;
        var6 = {};
        var21 = 18;
        var22 = var12[var21];
        var22 = var19.bind(var4)(var22);
        var23 = var22.intl;
        var22 = var23.string;
        var21 = var12[var21];
        var21 = var19.bind(var4)(var21);
        var21 = var21.t;
        var21 = var21.77VVd3;
        var21 = var22.bind(var23)(var21);
        var6['title'] = var21;
        var6 = var8.bind(var4)(var7, var6);
        var1['header'] = var6;
        var6 = _closure1_slot5;
        var5 = {};
        var7 = var18.searchBar;
        var5['style'] = var7;
        var7 = 19;
        var7 = var12[var7];
        var7 = var19.bind(var4)(var7);
        var19 = var7.SearchField;
        var7 = {};
        var21 = 'md';
        var7['size'] = var21;
        var7['onChange'] = var20;
        var7 = var8.bind(var4)(var19, var7);
        var5['children'] = var7;
        var6 = var8.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var6 = 20;
        var6 = var12[var6];
        var7 = var11.bind(var4)(var6);
        var6 = {};
        var18 = var18.list;
        var6['style'] = var18;
        var6['inActionSheet'] = var17;
        var6['sections'] = var16;
        var6['itemSize'] = var15;
        var15 = 'windowSize';
        var6['estimatedListSize'] = var15;
        var6['renderItem'] = var14;
        var6['renderSectionHeader'] = var13;
        var6['sectionHeaderSize'] = var10;
        var10 = 5;
        var10 = var12[var10];
        var10 = var11.bind(var4)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_16;
        var9 = var9.bottom;
        var9 = var10 + var9;
        var6['insetEnd'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();