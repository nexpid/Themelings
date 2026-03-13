// app/design/components/TableRow/native/TableRowGroup.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var4 = function TableRowGroupTitle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.title;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 5;
            var3 = var7[var3];
            var4 = undefined;
            var3 = var2.bind(var4)(var3);
            var8 = var3.MobileVisualRefreshExperiment;
            var6 = var8.useConfig;
            var3 = {};
            var9 = 'TableRowGroupTitle';
            var3['location'] = var9;
            var3 = var6.bind(var8)(var3);
            var8 = var3.enabled;
            var6 = _closure1_slot8;
            var3 = !var8;
            var6 = var6.bind(var4)(var3);
            var3 = _closure1_slot5;
            var1 = 6;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var7 = 'header';
            var1['accessibilityRole'] = var7;
            var7 = 'text-sm/semibold';
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = 'text-md/medium';
case 2:
            var1['variant'] = var7;
            var7 = 'text-default';
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = 'text-subtle';
case 4:
            var1['color'] = var7;
            var6 = var6.title;
            var1['style'] = var6;
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
    var1 = 0;
    var8 = var7[var1];
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
    var5 = function() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arguments[0];
            var7 = undefined;
            if(!(var5 === var7)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = true;
case 6:
            var1 = {};
            var2 = {};
            var3 = 0;
            var2['flexShrink'] = var3;
            var1['container'] = var2;
            var2 = {'borderRadius': null, 'overflow': 'hidden', 'flexGrow': 1, 'flexShrink': 0, 'padding': 0};
            var3 = undefined;
            if(!var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 4;
            var4 = var8[var4];
            var4 = var6.bind(var7)(var4);
            var4 = var4.radii;
            var3 = var4.lg;
case 8:
            var2['borderRadius'] = var3;
            var1['content'] = var2;
            var2 = {};
            var3 = 8;
            var2['marginBottom'] = var3;
            var1['title'] = var2;
            var2 = {};
            var2['marginBottom'] = var3;
            var1['description'] = var2;
            var2 = {};
            var4 = undefined;
            if(!var5) { _fun0002_ip = 10; continue _fun0002 }
case 2:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 4;
            var6 = var9[var6];
            var6 = var8.bind(var7)(var6);
            var6 = var6.radii;
            var4 = var6.none;
case 10:
            var2['borderBottomLeftRadius'] = var4;
            var4 = undefined;
            if(!var5) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 4;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.radii;
            var4 = var5.none;
case 11:
            var2['borderBottomRightRadius'] = var4;
            var1['hasTrailingText'] = var2;
            var2 = {};
            var2['marginTop'] = var3;
            var1['helperText'] = var2;
            return var1;
        }
    };
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
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var7 = var2.children;
            var19 = var2.title;
            var20 = var2.description;
            var13 = var2.helperText;
            var3 = var2.hasIcons;
            var21 = var2.hasTrailingText;
            var4 = undefined;
            if(!(var21 === var4)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var21 = false;
case 13:
            var18 = var2.accessibilityRole;
            if(!(var18 === var4)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var18 = 'none';
case 15:
            var17 = var2.accessibilityLabel;
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = 5;
            var6 = var5[var6];
            var6 = var2.bind(var4)(var6);
            var9 = var6.MobileVisualRefreshExperiment;
            var8 = var9.useConfig;
            var6 = {};
            var11 = 'TableRowGroup';
            var6['location'] = var11;
            var6 = var8.bind(var9)(var6);
            var6 = var6.enabled;
            var8 = _closure1_slot8;
            var6 = !var6;
            var14 = var8.bind(var4)(var6);
            _closure2_slot0 = var3;
            var3 = false;
            _closure2_slot1 = var3;
            var3 = _closure1_slot3;
            var6 = var3.Children;
            var3 = var6.map;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var8 = arg1;
                    var3 = null;
                    var2 = var3 == var8;
                    var1 = null;
                    if(var2) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var2 = _closure2_slot0;
                    var2 = var3 == var2;
                    if(!var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var5 = _closure1_slot3;
                    var4 = var5.isValidElement;
                    var2 = var4.bind(var5)(var8);
case 19:
                    if(!var2) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var5 = var8.type;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 7;
                    var6 = var6[var4];
                    var4 = undefined;
                    var4 = var7.bind(var4)(var6);
                    var4 = var4.TableRow;
                    var2 = var5 === var4;
case 21:
                    if(!var2) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var2 = var8.props;
                    var2 = var2.icon;
                    var2 = var3 != var2;
                    _closure2_slot0 = var2;
case 23:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var2 = true;
                    _closure2_slot1 = var2;
                    var2 = var8;
                    _fun0004_ip = 27; continue _fun0004;
case 25:
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
case 27:
                    var1 = var2;
case 17:
                    return var1;
                }
            };
            var16 = var3.bind(var6)(var7, var1);
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
            var11 = var9 != var19;
            if(!var11) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var15 = _closure1_slot5;
            var12 = _closure1_slot9;
            var8 = {};
            var8['title'] = var19;
            var11 = var15.bind(var4)(var12, var8);
case 28:
            var8 = new Array(4);
            var8[0] = var11;
            var11 = var9 != var20;
            if(!var11) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var19 = _closure1_slot5;
            var15 = _closure1_slot0;
            var22 = _closure1_slot2;
            var12 = 6;
            var12 = var22[var12];
            var12 = var15.bind(var4)(var12);
            var15 = var12.Text;
            var12 = {'variant': 'text-sm/normal', 'color': 'text-subtle'};
            var22 = var14.description;
            var12['style'] = var22;
            var12['children'] = var20;
            var11 = var19.bind(var4)(var15, var12);
case 30:
            var8[1] = var11;
            var15 = _closure1_slot5;
            var12 = _closure1_slot4;
            var11 = {};
            var20 = var14.content;
            var19 = new Array(2);
            var19[0] = var20;
            var20 = null;
            if(!var21) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var20 = var14.hasTrailingText;
case 32:
            var19[1] = var20;
            var11['style'] = var19;
            var11['accessibilityRole'] = var18;
            var11['accessibilityLabel'] = var17;
            var11['children'] = var16;
            var11 = var15.bind(var4)(var12, var11);
            var8[2] = var11;
            var9 = var9 != var13;
            if(!var9) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var12 = _closure1_slot5;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 6;
            var10 = var15[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var14 = var14.helperText;
            var10['style'] = var14;
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 34:
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