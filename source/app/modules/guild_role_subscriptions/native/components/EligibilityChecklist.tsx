// app/modules/guild_role_subscriptions/native/components/EligibilityChecklist.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function EligibilityChecklistRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.isLast;
            var22 = var1.item;
            var1 = _closure1_slot7;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot6;
            var1 = {};
            var8 = _closure1_slot3;
            var5 = {};
            var11 = var10.row;
            var9 = new Array(2);
            var9[0] = var11;
            var11 = var22.checked;
            if(!var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = var10.eligibleRow;
case 2:
            var9[1] = var11;
            var5['style'] = var9;
            var12 = _closure1_slot4;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var9 = 5;
            var9 = var13[var9];
            var11 = var11.bind(var4)(var9);
            var9 = {};
            var13 = var10.rowStatusIcon;
            var9['style'] = var13;
            var13 = var22.checked;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            if(var13) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = 7;
            var13 = var16[var13];
            var13 = var15.bind(var4)(var13);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var14 = 6;
            var14 = var16[var14];
            var13 = var15.bind(var4)(var14);
case 6:
            var9['source'] = var13;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var13 = _closure1_slot5;
            var12 = _closure1_slot3;
            var11 = {};
            var14 = var10.rowTextColumn;
            var11['style'] = var14;
            var16 = _closure1_slot4;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var27 = 8;
            var14 = var14[var27];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'style': null, 'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var17 = var10.rowLabel;
            var14['style'] = var17;
            var26 = 'text-md/semibold';
            var17 = var22.checked;
            if(var17) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var17 = var22.uncheckedLabel;
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var17 = var22.checkedLabel;
case 9:
            var14['children'] = var17;
            var15 = var16.bind(var4)(var15, var14);
            var14 = new Array(3);
            var14[0] = var15;
            var17 = _closure1_slot4;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var27];
            var15 = var16.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-sm/normal', 'color': 'interactive-text-default'};
            var18 = var22.description;
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[1] = var15;
            var15 = var22.actionHandler;
            var17 = null;
            var15 = var17 != var15;
            if(!var15) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var16 = var22.actionLabel;
            var15 = var17 != var16;
case 10:
            if(!var15) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var18 = _closure1_slot4;
            var17 = _closure1_slot3;
            var16 = {};
            var19 = var10.actionButtonWrapper;
            var16['style'] = var19;
            var21 = _closure1_slot4;
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var19 = 9;
            var19 = var23[var19];
            var19 = var24.bind(var4)(var19);
            var20 = var19.BaseTextButton;
            var19 = {};
            var25 = var10.actionButtonPill;
            var19['pillStyle'] = var25;
            var25 = _closure1_slot4;
            var23 = var23[var27];
            var23 = var24.bind(var4)(var23);
            var24 = var23.Text;
            var23 = {};
            var23['variant'] = var26;
            var26 = var10.actionButtonText;
            var23['style'] = var26;
            var26 = var22.actionLabel;
            var23['children'] = var26;
            var23 = var25.bind(var4)(var24, var23);
            var19['textElement'] = var23;
            var22 = var22.actionHandler;
            var19['onPress'] = var22;
            var22 = true;
            var19['grow'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var16['children'] = var19;
            var15 = var18.bind(var4)(var17, var16);
case 12:
            var14[2] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var9[1] = var11;
            var5['children'] = var9;
            var8 = var3.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var9 = _closure1_slot4;
            if(var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 11;
            var6 = var11[var6];
            var8 = var8.bind(var4)(var6);
            var6 = {};
            var10 = var10.divider;
            var6['style'] = var10;
            var6 = var9.bind(var4)(var8, var6);
            _fun0001_ip = 16; continue _fun0001;
case 14:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 10;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Spacer;
            var7 = {};
            var10 = 16;
            var7['size'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 16:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var14 = 1;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var7 = var4.jsxs;
    var _closure1_slot5 = var7;
    var4 = var4.Fragment;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var11 = 24;
    var4 = {'paddingHorizontal': 24, 'paddingTop': 16, 'flex': 0, 'flexDirection': 'row'};
    var7['row'] = var4;
    var4 = {};
    var10 = 0.8;
    var4['opacity'] = var10;
    var7['eligibleRow'] = var4;
    var4 = {'height': 20, 'width': 20, 'marginRight': 16};
    var7['rowStatusIcon'] = var4;
    var4 = {'flex': 1, 'flexDirection': 'column'};
    var7['rowTextColumn'] = var4;
    var4 = {};
    var12 = 4;
    var4['marginBottom'] = var12;
    var7['rowLabel'] = var4;
    var10 = {};
    var4 = 12;
    var10['marginTop'] = var4;
    var7['actionButtonWrapper'] = var10;
    var10 = {};
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.xl;
    var10['borderRadius'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.INTERACTIVE_TEXT_ACTIVE;
    var10['borderColor'] = var15;
    var10['borderWidth'] = var14;
    var14 = 'transparent';
    var10['backgroundColor'] = var14;
    var7['actionButtonPill'] = var10;
    var10 = {};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
    var10['color'] = var12;
    var7['actionButtonText'] = var10;
    var10 = {};
    var10['marginHorizontal'] = var11;
    var7['divider'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot7 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/EligibilityChecklist.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EligibilityChecklist(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = var2.items;
            var _closure2_slot0 = var3;
            var5 = var2.style;
            var4 = var3.length;
            var2 = 0;
            if(!(var2 !== var4)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var2 = var3.map;
            var1 = function(arg1, arg2) {
                var1 = arg1;
                var5 = _closure1_slot4;
                var4 = _closure1_slot8;
                var3 = {};
                var3['item'] = var1;
                var2 = _closure2_slot0;
                var6 = var2.length;
                var2 = 1;
                var6 = var6 - var2;
                var2 = arg2;
                var2 = var2 === var6;
                var3['isLast'] = var2;
                var2 = var1.checkedLabel;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var4 = _closure1_slot4;
            var3 = _closure1_slot3;
            var2 = {};
            var2['style'] = var5;
            var2['children'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
case 17:
            var1 = null;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();