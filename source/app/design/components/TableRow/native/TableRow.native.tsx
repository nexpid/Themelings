// app/design/components/TableRow/native/TableRow.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function TableRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var22 = var3.label;
            var21 = var3.subLabel;
            var11 = var3.icon;
            var20 = var3.trailing;
            var19 = var3.arrow;
            var9 = var3.onPress;
            var18 = var3.disabled;
            var5 = undefined;
            if(!(var18 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var18 = false;
case 2:
            var24 = var3.start;
            var4 = var3.end;
            var17 = var3.labelLineClamp;
            var16 = var3.subLabelLineClamp;
            var15 = var3.variant;
            if(!(var15 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var15 = 'default';
case 4:
            var14 = var3.draggable;
            var13 = var3.dragHandlePressableProps;
            var2 = {'label': 0, 'subLabel': 0, 'icon': 0, 'trailing': 0, 'arrow': 0, 'onPress': 0, 'disabled': 0, 'start': 0, 'end': 0, 'labelLineClamp': 0, 'subLabelLineClamp': 0, 'variant': 0, 'draggable': 0, 'dragHandlePressableProps': 0};
            var10 = null;
            var27 = var2;
            var26 = null;
            var1 = silentSetPrototypeOf(var27, var26);
            var27 = {};
            var26 = var3;
            var25 = var2;
            var8 = copyDataProperties(var27, var26, var25);
            var3 = _closure1_slot2;
            var2 = var3.useContext;
            var6 = _closure1_slot0;
            var12 = _closure1_slot1;
            var1 = 5;
            var1 = var12[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.TableRowGroupContext;
            var3 = var2.bind(var3)(var1);
            var2 = !var3;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = true;
            var2 = var1 === var4;
case 6:
            var6 = _closure1_slot7;
            var4 = _closure1_slot0;
            var12 = _closure1_slot1;
            var1 = 6;
            var1 = var12[var1];
            var1 = var4.bind(var5)(var1);
            var4 = var1.Card;
            var1 = {'shadow': 'none', 'border': 'none'};
            var12 = !var3;
            if(!var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var23 = true;
            var12 = var23 === var24;
case 8:
            var1['start'] = var12;
            var1['end'] = var2;
            var1['onPress'] = var9;
            var1['disabled'] = var18;
            var9 = _closure1_slot10;
            var1['style'] = var9;
            var27 = var1;
            var26 = var8;
            var8 = copyDataProperties(var27, var26);
            var12 = _closure1_slot7;
            var9 = _closure1_slot12;
            var8 = {};
            var8['label'] = var22;
            var8['subLabel'] = var21;
            var8['icon'] = var11;
            var8['trailing'] = var20;
            var8['arrow'] = var19;
            var8['disabled'] = var18;
            var8['labelLineClamp'] = var17;
            var8['subLabelLineClamp'] = var16;
            var8['variant'] = var15;
            var8['draggable'] = var14;
            var8['dragHandlePressableProps'] = var13;
            var9 = var12.bind(var5)(var9, var8);
            var8 = 'children';
            var1[var8] = var9;
            var8 = var6.bind(var5)(var4, var1);
            var1 = var8;
            if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var8;
            if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var4 = _closure1_slot9;
            var3 = _closure1_slot8;
            var2 = {};
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot7;
            var8 = _closure1_slot0;
            var12 = _closure1_slot1;
            var7 = 7;
            var7 = var12[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.TableRowDivider;
            var7 = {};
            var10 = var10 != var11;
            var7['adjustSpacingForIcon'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 10:
            return var1;
        }
    };
    var2 = function TableRowInner(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var22 = var1.label;
            var23 = var1.labelLineClamp;
            var24 = var1.subLabel;
            var25 = var1.subLabelLineClamp;
            var16 = var1.icon;
            var12 = var1.trailing;
            var6 = var1.arrow;
            var11 = var1.disabled;
            var28 = var1.variant;
            var4 = undefined;
            if(!(var28 === var4)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var28 = 'default';
case 13:
            var8 = var1.draggable;
            if(!(var8 === var4)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var8 = false;
case 15:
            var15 = var1.dragHandlePressableProps;
            var2 = _closure1_slot2;
            var1 = var2.isValidElement;
            var1 = var1.bind(var2)(var12);
            var10 = undefined;
            if(!var1) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var2 = var12.type;
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 10;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.TableRowTrailingText;
            var10 = undefined;
            if(!(var2 === var1)) { _fun0002_ip = 17; continue _fun0002 }
case 19:
            var10 = var12;
case 17:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 11;
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useFontScale;
            var2 = var1.bind(var2)();
            var1 = 12;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if(var1) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var1 = 1.5;
            var5 = var2 > var1;
            _fun0002_ip = 22; continue _fun0002;
case 20:
            var1 = 1.2;
            var5 = var2 > var1;
case 22:
            var3 = _closure1_slot11;
            var9 = null;
            var2 = var9 != var10;
            var1 = true;
            var1 = var1 === var11;
            var13 = var3.bind(var4)(var1, var2, var5);
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var13.row;
            var1['style'] = var5;
            if(!var8) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var14 = _closure1_slot7;
            var11 = _closure1_slot3;
            var5 = {};
            var31 = var5;
            var30 = var15;
            var15 = copyDataProperties(var31, var30);
            var18 = _closure1_slot7;
            var17 = _closure1_slot0;
            var19 = _closure1_slot1;
            var15 = 13;
            var15 = var19[var15];
            var15 = var17.bind(var4)(var15);
            var17 = var15.DragIcon;
            var15 = {};
            var19 = 'xs';
            var15['size'] = var19;
            var19 = var13.dragHandle;
            var15['style'] = var19;
            var17 = var18.bind(var4)(var17, var15);
            var15 = 'children';
            var5[var15] = var17;
            var8 = var14.bind(var4)(var11, var5);
case 23:
            var5 = new Array(5);
            var5[0] = var8;
            var8 = var9 != var16;
            if(!var8) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var15 = _closure1_slot7;
            var14 = _closure1_slot4;
            var11 = {};
            var17 = var13.iconContainer;
            var11['style'] = var17;
            var11['children'] = var16;
            var8 = var15.bind(var4)(var14, var11);
case 25:
            var5[1] = var8;
            var14 = _closure1_slot9;
            var11 = _closure1_slot4;
            var8 = {};
            var15 = var13.content;
            var8['style'] = var15;
            var17 = _closure1_slot9;
            var16 = _closure1_slot4;
            var15 = {};
            var18 = var13.labels;
            var15['style'] = var18;
            var19 = _closure1_slot2;
            var18 = var19.isValidElement;
            var18 = var18.bind(var19)(var22);
            var19 = var22;
            if(var18) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var21 = _closure1_slot7;
            var20 = _closure1_slot0;
            var26 = _closure1_slot1;
            var18 = 14;
            var18 = var26[var18];
            var18 = var20.bind(var4)(var18);
            var20 = var18.Text;
            var18 = {};
            var26 = 'text-md/semibold';
            var18['variant'] = var26;
            var26 = 'header-primary';
            var27 = 'danger';
            if(!(var27 === var28)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var26 = 'text-danger';
case 29:
            var18['color'] = var26;
            var18['lineClamp'] = var23;
            var18['children'] = var22;
            var19 = var21.bind(var4)(var20, var18);
case 27:
            var18 = new Array(2);
            var18[0] = var19;
            var19 = var9 != var24;
            if(!var19) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var21 = _closure1_slot2;
            var20 = var21.isValidElement;
            var21 = var20.bind(var21)(var24);
            var20 = var24;
            if(var21) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var23 = _closure1_slot7;
            var22 = _closure1_slot0;
            var26 = _closure1_slot1;
            var21 = 14;
            var21 = var26[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.Text;
            var21 = {};
            var26 = 'text-xs/medium';
            var21['variant'] = var26;
            var26 = 'text-secondary';
            var27 = 'danger';
            if(!(var27 === var28)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var26 = 'text-danger';
case 35:
            var21['color'] = var26;
            var21['lineClamp'] = var25;
            var21['children'] = var24;
            var20 = var23.bind(var4)(var22, var21);
case 33:
            var19 = var20;
case 31:
            var18[1] = var19;
            var15['children'] = var18;
            var16 = var17.bind(var4)(var16, var15);
            var15 = new Array(2);
            var15[0] = var16;
            var16 = var9 != var10;
            if(!var16) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var19 = _closure1_slot7;
            var18 = _closure1_slot4;
            var17 = {};
            var21 = var13.trailing;
            var20 = new Array(2);
            var20[0] = var21;
            var21 = var13.trailingText;
            var20[1] = var21;
            var17['style'] = var20;
            var17['children'] = var10;
            var16 = var19.bind(var4)(var18, var17);
case 37:
            var15[1] = var16;
            var8['children'] = var15;
            var8 = var14.bind(var4)(var11, var8);
            var5[2] = var8;
            var8 = var9 != var12;
            if(!var8) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var8 = var9 == var10;
case 39:
            if(!var8) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var11 = _closure1_slot7;
            var10 = _closure1_slot4;
            var9 = {};
            var13 = var13.trailing;
            var9['style'] = var13;
            var9['children'] = var12;
            var8 = var11.bind(var4)(var10, var9);
case 41:
            var5[3] = var8;
            if(!var6) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var9 = _closure1_slot7;
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var7 = 9;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.TableRowArrow;
            var7 = {};
            var6 = var9.bind(var4)(var8, var7);
case 43:
            var5[4] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var9 = 0;
    var10 = var7[var9];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var10);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.Pressable;
    var _closure1_slot3 = var10;
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.TABLE_ROW_HEIGHT;
    var _closure1_slot5 = var10;
    var5 = var5.TABLE_ROW_PADDING;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.jsx;
    var _closure1_slot7 = var10;
    var10 = var5.Fragment;
    var _closure1_slot8 = var10;
    var5 = var5.jsxs;
    var _closure1_slot9 = var5;
    var5 = {};
    var5['padding'] = var9;
    var _closure1_slot10 = var5;
    var5 = 4;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = function(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg2;
            var4 = arg3;
            var1 = {};
            var2 = {};
            var5 = _closure1_slot6;
            var2['padding'] = var5;
            var5 = _closure1_slot5;
            var2['minHeight'] = var5;
            var7 = 'row';
            var2['flexDirection'] = var7;
            var6 = 'center';
            var2['alignItems'] = var6;
            var5 = 1;
            var10 = arg1;
            var9 = var5;
            if(!var10) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var9 = 0.5;
case 45:
            var2['opacity'] = var9;
            var1['row'] = var2;
            var2 = {};
            var3 = _closure1_slot6;
            var2['marginEnd'] = var3;
            var1['iconContainer'] = var2;
            var2 = {};
            var3 = 18;
            var2['marginStart'] = var3;
            var1['trailing'] = var2;
            var2 = {'flexShrink': 1, 'flexGrow': 1, 'flexDirection': null, 'alignItems': null, 'justifyContent': 'space-between'};
            if(!var4) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var7 = 'column';
case 47:
            var2['flexDirection'] = var7;
            if(!var4) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var6 = 'stretch';
case 49:
            var2['alignItems'] = var6;
            var1['content'] = var2;
            var2 = {};
            var2['flexGrow'] = var5;
            var6 = var5;
            if(!var8) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            var6 = var5;
            if(var4) { _fun0003_ip = 51; continue _fun0003 }
case 53:
            var6 = undefined;
case 51:
            var2['flexShrink'] = var6;
            var6 = undefined;
            if(!var8) { _fun0003_ip = 54; continue _fun0003 }
case 7:
            var6 = undefined;
            if(var4) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            var6 = '70%';
case 54:
            var2['maxWidth'] = var6;
            var1['labels'] = var2;
            var2 = {};
            var2['flexShrink'] = var5;
            if(!var4) { _fun0003_ip = 56; continue _fun0003 }
case 20:
            var3 = 0;
case 56:
            var2['marginStart'] = var3;
            var1['trailingText'] = var2;
            var2 = {};
            var3 = 8;
            var2['marginEnd'] = var3;
            var1['dragHandle'] = var2;
            return var1;
        }
    };
    var5 = var9.bind(var10)(var5);
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.TableRowIcon;
    var4['Icon'] = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.TableRowArrow;
    var4['Arrow'] = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.TableRowTrailingText;
    var4['TrailingText'] = var5;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/TableRow/native/TableRow.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['TableRow'] = var4;
    var3['TableRowInner'] = var2;
    return var1;
})();