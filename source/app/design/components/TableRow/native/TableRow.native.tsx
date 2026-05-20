// app/design/components/TableRow/native/TableRow.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var4 = function TableRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var23 = var3.label;
            var22 = var3.subLabel;
            var11 = var3.icon;
            var21 = var3.trailing;
            var20 = var3.arrow;
            var9 = var3.onPress;
            var19 = var3.disabled;
            var5 = undefined;
            if(!(var19 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var19 = false;
case 2:
            var25 = var3.start;
            var4 = var3.end;
            var18 = var3.labelLineClamp;
            var17 = var3.subLabelLineClamp;
            var16 = var3.variant;
            if(!(var16 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var16 = 'default';
case 4:
            var15 = var3.draggable;
            var14 = var3.dragHandlePressableProps;
            var2 = {'label': 0, 'subLabel': 0, 'icon': 0, 'trailing': 0, 'arrow': 0, 'onPress': 0, 'disabled': 0, 'start': 0, 'end': 0, 'labelLineClamp': 0, 'subLabelLineClamp': 0, 'variant': 0, 'draggable': 0, 'dragHandlePressableProps': 0};
            var10 = null;
            var29 = var2;
            var28 = null;
            var1 = silentSetPrototypeOf(var29, var28);
            var29 = {};
            var28 = var3;
            var27 = var2;
            var8 = copyDataProperties(var29, var28, var27);
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 5;
            var1 = var12[var1];
            var1 = var6.bind(var5)(var1);
            var3 = var1.MobileVisualRefreshExperiment;
            var2 = var3.useConfig;
            var1 = {};
            var13 = 'TableRow';
            var1['location'] = var13;
            var1 = var2.bind(var3)(var1);
            var13 = var1.enabled;
            var3 = _closure1_slot3;
            var2 = var3.useContext;
            var1 = 6;
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
            var4 = _closure1_slot0;
            var24 = _closure1_slot2;
            var1 = 7;
            var1 = var24[var1];
            var12 = var4.bind(var5)(var1);
            var6 = var12.useToken;
            var26 = _closure1_slot1;
            var1 = 4;
            var1 = var24[var1];
            var1 = var26.bind(var5)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.TABLE_ROW_BORDER_RADIUS;
            var12 = var6.bind(var12)(var1);
            var6 = _closure1_slot6;
            var1 = 8;
            var1 = var24[var1];
            var1 = var4.bind(var5)(var1);
            var4 = var1.InternalCard;
            var1 = {'radius': null, 'shadow': 'none', 'border': 'none'};
            var1['radius'] = var12;
            var12 = undefined;
            if(!var13) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var12 = 'muted';
case 8:
            var1['variant'] = var12;
            var12 = !var3;
            if(!var12) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var24 = true;
            var12 = var24 === var25;
case 10:
            var1['start'] = var12;
            var1['end'] = var2;
            var1['onPress'] = var9;
            var1['disabled'] = var19;
            var9 = _closure1_slot9;
            var1['style'] = var9;
            var29 = var1;
            var28 = var8;
            var8 = copyDataProperties(var29, var28);
            var12 = _closure1_slot6;
            var9 = _closure1_slot11;
            var8 = {};
            var8['label'] = var23;
            var8['subLabel'] = var22;
            var8['icon'] = var11;
            var8['trailing'] = var21;
            var8['arrow'] = var20;
            var8['disabled'] = var19;
            var8['labelLineClamp'] = var18;
            var8['subLabelLineClamp'] = var17;
            var8['variant'] = var16;
            var8['draggable'] = var15;
            var8['dragHandlePressableProps'] = var14;
            var8['isRefreshEnabled'] = var13;
            var9 = var12.bind(var5)(var9, var8);
            var8 = 'children';
            var1[7] = var9;
            var8 = var6.bind(var5)(var4, var1);
            var1 = var8;
            if(var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = var8;
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var4 = _closure1_slot8;
            var3 = _closure1_slot7;
            var2 = {};
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot6;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 9;
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
case 12:
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
            if(!(var28 === var4)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var28 = 'default';
case 15:
            var8 = var1.draggable;
            if(!(var8 === var4)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var8 = false;
case 17:
            var15 = var1.dragHandlePressableProps;
            var17 = var1.borderRadius;
            var14 = var1.height;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = 'TableRowInner';
            var29 = var2.bind(var4)(var1);
            var2 = _closure1_slot3;
            var1 = var2.isValidElement;
            var1 = var1.bind(var2)(var12);
            var10 = undefined;
            if(!var1) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var2 = var12.type;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 12;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.TableRowTrailingText;
            var10 = undefined;
            if(!(var2 === var1)) { _fun0002_ip = 19; continue _fun0002 }
case 21:
            var10 = var12;
case 19:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 13;
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useFontScale;
            var2 = var1.bind(var2)();
            var1 = 14;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if(var1) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var1 = 1.5;
            var5 = var2 > var1;
            _fun0002_ip = 24; continue _fun0002;
case 22:
            var1 = 1.2;
            var5 = var2 > var1;
case 24:
            var3 = _closure1_slot10;
            var9 = null;
            var32 = var9 != var10;
            var1 = true;
            var33 = var1 === var11;
            var34 = undefined;
            var31 = var5;
            var30 = var29;
            var13 = var34[var3](var33, var32, var31, var30, var29);
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 7;
            var1 = var11[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useToken;
            var5 = _closure1_slot1;
            var1 = 4;
            var1 = var11[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.TABLE_ROW_LABEL_TEXT_STYLE;
            var26 = var2.bind(var3)(var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var11 = var13.row;
            var5 = new Array(2);
            var5[0] = var11;
            var11 = {};
            var11['borderRadius'] = var17;
            var11['height'] = var14;
            var5[1] = var11;
            var1['style'] = var5;
            if(!var8) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var14 = _closure1_slot6;
            var11 = _closure1_slot4;
            var5 = {};
            var33 = var5;
            var32 = var15;
            var15 = copyDataProperties(var33, var32);
            var18 = _closure1_slot6;
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 15;
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
            var5[14] = var17;
            var8 = var14.bind(var4)(var11, var5);
case 25:
            var5 = new Array(5);
            var5[0] = var8;
            var8 = var9 != var16;
            if(!var8) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var15 = _closure1_slot6;
            var14 = _closure1_slot5;
            var11 = {};
            var17 = var13.iconContainer;
            var11['style'] = var17;
            var11['children'] = var16;
            var8 = var15.bind(var4)(var14, var11);
case 27:
            var5[1] = var8;
            var14 = _closure1_slot8;
            var11 = _closure1_slot5;
            var8 = {};
            var15 = var13.content;
            var8['style'] = var15;
            var17 = _closure1_slot8;
            var16 = _closure1_slot5;
            var15 = {};
            var18 = var13.labels;
            var15['style'] = var18;
            var19 = _closure1_slot3;
            var18 = var19.isValidElement;
            var18 = var18.bind(var19)(var22);
            var19 = var22;
            if(var18) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var21 = _closure1_slot6;
            var20 = _closure1_slot0;
            var27 = _closure1_slot2;
            var18 = 16;
            var18 = var27[var18];
            var18 = var20.bind(var4)(var18);
            var20 = var18.Text;
            var18 = {};
            var18['variant'] = var26;
            var26 = 'text-feedback-critical';
            var27 = 'danger';
            if(!(var27 !== var28)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var27 = 'mobile-text-heading-primary';
            if(!var29) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var27 = 'text-strong';
case 33:
            var26 = var27;
case 31:
            var18['color'] = var26;
            var18['lineClamp'] = var23;
            var18['children'] = var22;
            var19 = var21.bind(var4)(var20, var18);
case 29:
            var18 = new Array(2);
            var18[0] = var19;
            var19 = var9 != var24;
            if(!var19) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var21 = _closure1_slot3;
            var20 = var21.isValidElement;
            var21 = var20.bind(var21)(var24);
            var20 = var24;
            if(var21) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var23 = _closure1_slot6;
            var22 = _closure1_slot0;
            var26 = _closure1_slot2;
            var21 = 16;
            var21 = var26[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.Text;
            var21 = {};
            var26 = 'text-xs/medium';
            var21['variant'] = var26;
            var26 = 'text-subtle';
            var27 = 'danger';
            if(!(var27 === var28)) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var26 = 'text-feedback-critical';
case 39:
            var21['color'] = var26;
            var21['lineClamp'] = var25;
            var21['children'] = var24;
            var20 = var23.bind(var4)(var22, var21);
case 37:
            var19 = var20;
case 35:
            var18[1] = var19;
            var15['children'] = var18;
            var16 = var17.bind(var4)(var16, var15);
            var15 = new Array(2);
            var15[0] = var16;
            var16 = var9 != var10;
            if(!var16) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var19 = _closure1_slot6;
            var18 = _closure1_slot5;
            var17 = {};
            var21 = var13.trailing;
            var20 = new Array(2);
            var20[0] = var21;
            var21 = var13.trailingText;
            var20[1] = var21;
            var17['style'] = var20;
            var17['children'] = var10;
            var16 = var19.bind(var4)(var18, var17);
case 41:
            var15[1] = var16;
            var8['children'] = var15;
            var8 = var14.bind(var4)(var11, var8);
            var5[2] = var8;
            var8 = var9 != var12;
            if(!var8) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var8 = var9 == var10;
case 43:
            if(!var8) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var11 = _closure1_slot6;
            var10 = _closure1_slot5;
            var9 = {};
            var13 = var13.trailing;
            var9['style'] = var13;
            var9['children'] = var12;
            var8 = var11.bind(var4)(var10, var9);
case 45:
            var5[3] = var8;
            if(!var6) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var9 = _closure1_slot6;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 11;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.TableRowArrow;
            var7 = {};
            var6 = var9.bind(var4)(var8, var7);
case 47:
            var5[4] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var2;
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
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.Pressable;
    var _closure1_slot4 = var10;
    var5 = var5.View;
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.jsx;
    var _closure1_slot6 = var10;
    var10 = var5.Fragment;
    var _closure1_slot7 = var10;
    var5 = var5.jsxs;
    var _closure1_slot8 = var5;
    var5 = {};
    var5['padding'] = var9;
    var _closure1_slot9 = var5;
    var5 = 3;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = function(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg2;
            var4 = arg3;
            var12 = arguments[3];
            var7 = undefined;
            if(!(var12 === var7)) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var12 = false;
case 49:
            var1 = {};
            var2 = {};
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var11 = 4;
            var9 = var5[var11];
            var9 = var6.bind(var7)(var9);
            var9 = var9.modules;
            var9 = var9.mobile;
            var9 = var9.TABLE_ROW_PADDING;
            var2['padding'] = var9;
            var5 = var5[var11];
            var5 = var6.bind(var7)(var5);
            var5 = var5.modules;
            var5 = var5.mobile;
            var5 = var5.TABLE_ROW_HEIGHT;
            var2['minHeight'] = var5;
            var9 = 'row';
            var2['flexDirection'] = var9;
            var6 = 'center';
            var2['alignItems'] = var6;
            var5 = 1;
            var13 = arg1;
            var10 = var5;
            if(!var13) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            var10 = 0.5;
case 51:
            var2['opacity'] = var10;
            var10 = undefined;
            if(!var12) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var12 = var12[var11];
            var12 = var13.bind(var7)(var12);
            var12 = var12.radii;
            var10 = var12.md;
case 53:
            var2['borderRadius'] = var10;
            var1['row'] = var2;
            var2 = {};
            var10 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var3 = var10.bind(var7)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.TABLE_ROW_PADDING;
            var2['marginEnd'] = var3;
            var1['iconContainer'] = var2;
            var2 = {};
            var3 = 18;
            var2['marginStart'] = var3;
            var1['trailing'] = var2;
            var2 = {'flexShrink': 1, 'flexGrow': 1, 'flexDirection': null, 'alignItems': null, 'justifyContent': 'space-between'};
            if(!var4) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            var9 = 'column';
case 55:
            var2['flexDirection'] = var9;
            if(!var4) { _fun0003_ip = 57; continue _fun0003 }
case 58:
            var6 = 'stretch';
case 57:
            var2['alignItems'] = var6;
            var1['content'] = var2;
            var2 = {};
            var2['flexGrow'] = var5;
            var6 = var5;
            if(!var8) { _fun0003_ip = 59; continue _fun0003 }
case 60:
            var6 = var5;
            if(var4) { _fun0003_ip = 59; continue _fun0003 }
case 61:
            var6 = undefined;
case 59:
            var2['flexShrink'] = var6;
            var6 = undefined;
            if(!var8) { _fun0003_ip = 62; continue _fun0003 }
case 63:
            var6 = undefined;
            if(var4) { _fun0003_ip = 62; continue _fun0003 }
case 64:
            var6 = '70%';
case 62:
            var2['maxWidth'] = var6;
            var1['labels'] = var2;
            var2 = {};
            var2['flexShrink'] = var5;
            if(!var4) { _fun0003_ip = 65; continue _fun0003 }
case 66:
            var3 = 0;
case 65:
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
    var _closure1_slot10 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.TableRowIcon;
    var4['Icon'] = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.TableRowArrow;
    var4['Arrow'] = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.TableRowTrailingText;
    var4['TrailingText'] = var5;
    var5 = 17;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/TableRow/native/TableRow.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['TableRow'] = var4;
    var3['TableRowInner'] = var2;
    return var1;
})();