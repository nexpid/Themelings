// app/design/components/TableRow/native/TableRowGroup.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var4 = function TableRowGroupTitle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.title;
            var8 = var1.style;
            var6 = var1.lineClamp;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 5;
            var2 = var9[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = 'TableRowGroup';
            var10 = var3.bind(var4)(var2);
            var2 = _closure1_slot8;
            var7 = var2.bind(var4)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var1 = 6;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var9 = 'header';
            var1['accessibilityRole'] = var9;
            var9 = 'text-sm/semibold';
            if(!var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = 'text-md/medium';
case 2:
            var1['variant'] = var9;
            var9 = 'text-default';
            if(!var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = 'text-subtle';
case 4:
            var1['color'] = var9;
            var9 = var7.title;
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var8;
            var1['style'] = var7;
            var1['lineClamp'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var11 = 0;
    var8 = var7[var11];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot5 = var8;
    var8 = var5.Fragment;
    var _closure1_slot6 = var8;
    var5 = var5.jsxs;
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var10['flexShrink'] = var11;
    var5['container'] = var10;
    var10 = {'borderRadius': null, 'overflow': 'hidden', 'flexGrow': 1, 'flexShrink': 0, 'padding': 0};
    var12 = 4;
    var11 = var7[var12];
    var11 = var13.bind(var1)(var11);
    var11 = var11.modules;
    var11 = var11.mobile;
    var11 = var11.TABLE_ROW_BORDER_RADIUS;
    var10['borderRadius'] = var11;
    var5['content'] = var10;
    var10 = {};
    var11 = 8;
    var10['marginBottom'] = var11;
    var5['title'] = var10;
    var10 = {};
    var10['marginBottom'] = var11;
    var5['description'] = var10;
    var10 = {};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.none;
    var10['borderBottomLeftRadius'] = var14;
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.none;
    var10['borderBottomRightRadius'] = var12;
    var5['hasTrailingText'] = var10;
    var10 = {};
    var10['marginTop'] = var11;
    var5['helperText'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot8 = var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/TableRow/native/TableRowGroup.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['TableRowGroupTitle'] = var4;
    var2 = function TableRowGroup(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var7 = var2.children;
            var20 = var2.title;
            var21 = var2.description;
            var13 = var2.helperText;
            var3 = var2.hasIcons;
            var _closure2_slot0 = var3;
            var22 = var2.hasTrailingText;
            var4 = undefined;
            if(!(var22 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var22 = false;
case 6:
            var19 = var2.accessibilityRole;
            if(!(var19 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var19 = 'none';
case 8:
            var18 = var2.accessibilityLabel;
            var _closure2_slot1 = var4;
            var2 = _closure1_slot8;
            var14 = var2.bind(var4)();
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 7;
            var3 = var5[var3];
            var8 = var2.bind(var4)(var3);
            var6 = var8.useToken;
            var9 = _closure1_slot1;
            var3 = 4;
            var3 = var5[var3];
            var3 = var9.bind(var4)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.TABLE_ROW_GROUP_HELPER_TEXT_STYLE;
            var15 = var6.bind(var8)(var3);
            var3 = false;
            _closure2_slot1 = var3;
            var3 = _closure1_slot3;
            var6 = var3.Children;
            var3 = var6.map;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var8 = arg1;
                    var1 = null;
                    var2 = var1 == var8;
                    if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var2 = true;
                    _closure2_slot1 = var2;
                    var2 = var8;
                    _fun0003_ip = 14; continue _fun0003;
case 12:
                    var6 = _closure1_slot7;
                    var5 = _closure1_slot6;
                    var4 = {};
                    var10 = _closure1_slot5;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 8;
                    var7 = var7[var3];
                    var3 = undefined;
                    var7 = var9.bind(var3)(var7);
                    var9 = var7.TableRowDivider;
                    var7 = {};
                    var11 = _closure2_slot0;
                    var7['adjustSpacingForIcon'] = var11;
                    var9 = var10.bind(var3)(var9, var7);
                    var7 = new Array(2);
                    var7[0] = var9;
                    var7[1] = var8;
                    var4['children'] = var7;
                    var2 = var6.bind(var3)(var5, var4);
case 14:
                    var1 = var2;
case 10:
                    return var1;
                }
            };
            var17 = var3.bind(var6)(var7, var1);
            var3 = _closure1_slot5;
            var1 = 9;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.TableRowGroupContext;
            var2 = var1.Provider;
            var1 = {};
            var5 = true;
            var1['value'] = var5;
            var7 = _closure1_slot7;
            var6 = _closure1_slot4;
            var5 = {};
            var8 = var14.container;
            var5['style'] = var8;
            var9 = null;
            var11 = var9 != var20;
            if(!var11) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var16 = _closure1_slot5;
            var12 = _closure1_slot9;
            var8 = {};
            var8['title'] = var20;
            var11 = var16.bind(var4)(var12, var8);
case 15:
            var8 = new Array(4);
            var8[0] = var11;
            var11 = var9 != var21;
            if(!var11) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var20 = _closure1_slot5;
            var16 = _closure1_slot0;
            var23 = _closure1_slot2;
            var12 = 6;
            var12 = var23[var12];
            var12 = var16.bind(var4)(var12);
            var16 = var12.Text;
            var12 = {'variant': 'text-sm/normal', 'color': 'text-subtle'};
            var23 = var14.description;
            var12['style'] = var23;
            var12['children'] = var21;
            var11 = var20.bind(var4)(var16, var12);
case 17:
            var8[1] = var11;
            var16 = _closure1_slot5;
            var12 = _closure1_slot4;
            var11 = {};
            var21 = var14.content;
            var20 = new Array(2);
            var20[0] = var21;
            var21 = null;
            if(!var22) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var21 = var14.hasTrailingText;
case 19:
            var20[1] = var21;
            var11['style'] = var20;
            var11['accessibilityRole'] = var19;
            var11['accessibilityLabel'] = var18;
            var11['children'] = var17;
            var11 = var16.bind(var4)(var12, var11);
            var8[2] = var11;
            var9 = var9 != var13;
            if(!var9) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var12 = _closure1_slot5;
            var11 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 6;
            var10 = var16[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {};
            var10['variant'] = var15;
            var15 = 'text-muted';
            var10['color'] = var15;
            var14 = var14.helperText;
            var10['style'] = var14;
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 21:
            var8[3] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['TableRowGroup'] = var2;
    return var1;
})();