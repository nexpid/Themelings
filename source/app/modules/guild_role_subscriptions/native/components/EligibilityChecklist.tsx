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
 0:
            var1 = arg1;
            var6 = var1.isLast;
            var20 = var1.item;
            var1 = _closure1_slot7;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot6;
            var1 = {};
            var8 = _closure1_slot3;
            var5 = {};
            var10 = var11.row;
            var9 = new Array(2);
            var9[0] = var10;
            var10 = var20.checked;
            if(!var10) { _fun0001_ip = 72; continue _fun0001 }
 66:
            var10 = var11.eligibleRow;
 72:
            var9[1] = var10;
            var5['style'] = var9;
            var12 = _closure1_slot4;
            var10 = _closure1_slot1;
            var13 = _closure1_slot2;
            var9 = 5;
            var9 = var13[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var13 = var11.rowStatusIcon;
            var9['style'] = var13;
            var13 = var20.checked;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            if(var13) { _fun0001_ip = 147; continue _fun0001 }
 133:
            var13 = 7;
            var13 = var16[var13];
            var13 = var15.bind(var4)(var13);
            _fun0001_ip = 159; continue _fun0001;
 147:
            var14 = 6;
            var14 = var16[var14];
            var13 = var15.bind(var4)(var14);
 159:
            var9['source'] = var13;
            var10 = var12.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var13 = _closure1_slot5;
            var12 = _closure1_slot3;
            var10 = {};
            var14 = var11.rowTextColumn;
            var10['style'] = var14;
            var16 = _closure1_slot4;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var18 = 8;
            var14 = var14[var18];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            var17 = var11.rowLabel;
            var14['style'] = var17;
            var17 = var20.checked;
            if(var17) { _fun0001_ip = 269; continue _fun0001 }
 261:
            var17 = var20.uncheckedLabel;
            _fun0001_ip = 275; continue _fun0001;
 269:
            var17 = var20.checkedLabel;
 275:
            var14['children'] = var17;
            var15 = var16.bind(var4)(var15, var14);
            var14 = new Array(3);
            var14[0] = var15;
            var17 = _closure1_slot4;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var18];
            var15 = var16.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-sm/normal', 'color': 'interactive-normal'};
            var18 = var20.description;
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[1] = var15;
            var15 = var20.actionHandler;
            var17 = null;
            var15 = var17 != var15;
            if(!var15) { _fun0001_ip = 377; continue _fun0001 }
 367:
            var16 = var20.actionLabel;
            var15 = var17 != var16;
 377:
            if(!var15) { _fun0001_ip = 511; continue _fun0001 }
 383:
            var18 = _closure1_slot4;
            var23 = _closure1_slot1;
            var21 = _closure1_slot2;
            var19 = 9;
            var16 = var21[var19];
            var17 = var23.bind(var4)(var16);
            var16 = {};
            var22 = var11.actionButton;
            var16['style'] = var22;
            var22 = var21[var19];
            var22 = var23.bind(var4)(var22);
            var22 = var22.Colors;
            var22 = var22.PRIMARY;
            var16['color'] = var22;
            var22 = var20.actionLabel;
            var16['text'] = var22;
            var20 = var20.actionHandler;
            var16['onPress'] = var20;
            var20 = _closure1_slot0;
            var19 = var21[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.ButtonLooks;
            var19 = var19.OUTLINED;
            var16['look'] = var19;
            var19 = var11.actionButtonText;
            var16['textStyle'] = var19;
            var15 = var18.bind(var4)(var17, var16);
 511:
            var14[2] = var15;
            var10['children'] = var14;
            var10 = var13.bind(var4)(var12, var10);
            var9[1] = var10;
            var5['children'] = var9;
            var8 = var3.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var9 = _closure1_slot4;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            if(var6) { _fun0001_ip = 594; continue _fun0001 }
 562:
            var6 = 11;
            var6 = var10[var6];
            var7 = var8.bind(var4)(var6);
            var6 = {};
            var11 = var11.divider;
            var6['style'] = var11;
            var6 = var9.bind(var4)(var7, var6);
            _fun0001_ip = 621; continue _fun0001;
 594:
            var7 = 10;
            var7 = var10[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var10 = 16;
            var7['size'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 621:
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
    var4 = 1;
    var4 = var6[var4];
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
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xl;
    var10['borderRadius'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_ACTIVE;
    var10['borderColor'] = var14;
    var7['actionButton'] = var10;
    var10 = {};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.HEADER_PRIMARY;
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
 0:
            var2 = arg1;
            var3 = var2.items;
            var _closure2_slot0 = var3;
            var5 = var2.style;
            var4 = var3.length;
            var2 = 0;
            if(!(var2 !== var4)) { _fun0002_ip = 79; continue _fun0002 }
 31:
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
 79:
            var1 = null;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();