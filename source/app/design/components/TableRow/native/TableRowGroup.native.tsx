// app/design/components/TableRow/native/TableRowGroup.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function TableRowGroupTitle(arg1) {
        var1 = arg1;
        var5 = var1.title;
        var2 = _closure1_slot7;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot4;
        var2 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 5;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Text;
        var1 = {'accessibilityRole': 'header', 'variant': 'text-sm/semibold', 'color': 'header-secondary'};
        var6 = var6.title;
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot8 = var4;
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
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot4 = var8;
    var8 = var5.Fragment;
    var _closure1_slot5 = var8;
    var5 = var5.jsxs;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var10['flexShrink'] = var11;
    var5['container'] = var10;
    var10 = {'borderRadius': null, 'overflow': 'hidden', 'flexGrow': 1, 'flexShrink': 0, 'padding': 0};
    var11 = 4;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var10['borderRadius'] = var13;
    var5['content'] = var10;
    var10 = {};
    var13 = 8;
    var10['marginBottom'] = var13;
    var5['title'] = var10;
    var10 = {};
    var10['marginBottom'] = var13;
    var5['description'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.none;
    var10['borderBottomLeftRadius'] = var13;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.none;
    var10['borderBottomRightRadius'] = var11;
    var5['hasTrailingText'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot7 = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/TableRow/native/TableRowGroup.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['TableRowGroupTitle'] = var4;
    var2 = function TableRowGroup(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = var3.children;
            var19 = var3.title;
            var20 = var3.description;
            var2 = var3.hasIcons;
            var18 = var3.hasTrailingText;
            var4 = undefined;
            if(!(var18 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var18 = false;
case 2:
            var14 = var3.accessibilityRole;
            if(!(var14 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = 'none';
case 4:
            var13 = var3.accessibilityLabel;
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var3 = _closure1_slot7;
            var17 = var3.bind(var4)();
            _closure2_slot0 = var2;
            var2 = false;
            _closure2_slot1 = var2;
            var2 = _closure1_slot2;
            var3 = var2.Children;
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var8 = arg1;
                    var3 = null;
                    var2 = var3 == var8;
                    var1 = null;
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = _closure2_slot0;
                    var2 = var3 == var2;
                    if(!var2) { _fun0002_ip = 5; continue _fun0002 }
case 8:
                    var5 = _closure1_slot2;
                    var4 = var5.isValidElement;
                    var2 = var4.bind(var5)(var8);
case 5:
                    if(!var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var5 = var8.type;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var4 = 6;
                    var6 = var6[var4];
                    var4 = undefined;
                    var4 = var7.bind(var4)(var6);
                    var4 = var4.TableRow;
                    var2 = var5 === var4;
case 9:
                    if(!var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var2 = var8.props;
                    var2 = var2.icon;
                    var2 = var3 != var2;
                    _closure2_slot0 = var2;
case 11:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var2 = true;
                    _closure2_slot1 = var2;
                    var2 = var8;
                    _fun0002_ip = 15; continue _fun0002;
case 13:
                    var6 = _closure1_slot6;
                    var5 = _closure1_slot5;
                    var4 = {};
                    var10 = _closure1_slot4;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 7;
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
case 15:
                    var1 = var2;
case 6:
                    return var1;
                }
            };
            var12 = var2.bind(var3)(var5, var1);
            var3 = _closure1_slot4;
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 8;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.TableRowGroupContext;
            var2 = var1.Provider;
            var1 = {};
            var5 = true;
            var1['value'] = var5;
            var7 = _closure1_slot6;
            var6 = _closure1_slot3;
            var5 = {};
            var8 = var17.container;
            var5['style'] = var8;
            var16 = null;
            var10 = var16 != var19;
            if(!var10) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var15 = _closure1_slot4;
            var11 = _closure1_slot8;
            var8 = {};
            var8['title'] = var19;
            var10 = var15.bind(var4)(var11, var8);
case 16:
            var8 = new Array(3);
            var8[0] = var10;
            var10 = var16 != var20;
            if(!var10) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var19 = _closure1_slot4;
            var15 = _closure1_slot0;
            var21 = _closure1_slot1;
            var11 = 5;
            var11 = var21[var11];
            var11 = var15.bind(var4)(var11);
            var15 = var11.Text;
            var11 = {'variant': 'text-sm/normal', 'color': 'text-secondary'};
            var21 = var17.description;
            var11['style'] = var21;
            var11['children'] = var20;
            var10 = var19.bind(var4)(var15, var11);
case 18:
            var8[1] = var10;
            var11 = _closure1_slot4;
            var10 = _closure1_slot3;
            var9 = {};
            var19 = var17.content;
            var15 = new Array(2);
            var15[0] = var19;
            var16 = null;
            if(!var18) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var16 = var17.hasTrailingText;
case 20:
            var15[1] = var16;
            var9['style'] = var15;
            var9['accessibilityRole'] = var14;
            var9['accessibilityLabel'] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[2] = var9;
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