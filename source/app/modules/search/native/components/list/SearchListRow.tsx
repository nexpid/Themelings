// app/modules/search/native/components/list/SearchListRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SEARCH_ROW_TAP_STATE_PADDING;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot5 = var8;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1) {
        var1 = {};
        var2 = {};
        var3 = 16;
        var2['paddingHorizontal'] = var3;
        var3 = _closure1_slot4;
        var2['paddingVertical'] = var3;
        var1['pressable'] = var2;
        var2 = {'flexDirection': 'row', 'alignItems': 'center'};
        var1['body'] = var2;
        var3 = 1;
        var2 = {'justifyContent': 'center', 'flex': 1};
        var1['labels'] = var2;
        var2 = {};
        var6 = _closure1_slot1;
        var5 = _closure1_slot2;
        var4 = 5;
        var5 = var5[var4];
        var4 = undefined;
        var4 = var6.bind(var4)(var5);
        var4 = var4.colors;
        var4 = var4.BACKGROUND_MODIFIER_ACTIVE;
        var2['backgroundColor'] = var4;
        var1['underlayColor'] = var2;
        var2 = {};
        var2['flexShrink'] = var3;
        var1['text'] = var2;
        var2 = {};
        var3 = 12;
        var2['marginRight'] = var3;
        var1['iconContainer'] = var2;
        var2 = {};
        var3 = arg1;
        var2['marginLeft'] = var3;
        var1['extrasContainer'] = var2;
        return var1;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var12 = var1.containerStyle;
            var5 = var1.onPress;
            var20 = var1.label;
            var16 = var1.subLabel;
            var15 = var1.icon;
            var18 = var1.iconContainerStyle;
            var3 = var1.iconWidth;
            var13 = var1.trailing;
            var10 = var1.extras;
            var8 = var1.header;
            var22 = var1.accessible;
            var4 = undefined;
            if(!(var22 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var22 = true;
case 2:
            var21 = var1.accessibilityRole;
            if(!(var21 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var21 = 'button';
case 4:
            var19 = var1.accessibilityLabel;
            var17 = var1.accessibilityActions;
            var9 = var1.onAccessibilityAction;
            var14 = var1.bodyStyle;
            var2 = _closure1_slot7;
            var6 = null;
            var11 = var6 != var3;
            var1 = 0;
            if(!var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var3;
case 6:
            var11 = var2.bind(var4)(var1);
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var23 = _closure1_slot2;
            var1 = 6;
            var1 = var23[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableHighlight;
            var1 = {};
            var1['accessible'] = var22;
            var1['accessibilityRole'] = var21;
            var1['accessibilityLabel'] = var19;
            var1['accessibilityActions'] = var17;
            var1['onAccessibilityAction'] = var9;
            var17 = var11.pressable;
            var9 = new Array(2);
            var9[0] = var17;
            var9[1] = var12;
            var1['style'] = var9;
            var1['onPress'] = var5;
            var5 = 130;
            var1['unstable_pressDelay'] = var5;
            var5 = var11.underlayColor;
            var5 = var5.backgroundColor;
            var1['underlayColor'] = var5;
            var5 = new Array(3);
            var5[0] = var8;
            var9 = _closure1_slot3;
            var8 = {};
            var17 = var11.body;
            var12 = new Array(2);
            var12[0] = var17;
            var12[1] = var14;
            var8['style'] = var12;
            var14 = _closure1_slot5;
            var12 = {};
            var19 = var11.iconContainer;
            var17 = new Array(2);
            var17[0] = var19;
            var17[1] = var18;
            var12['style'] = var17;
            var12['children'] = var15;
            var14 = var14.bind(var4)(var9, var12);
            var12 = new Array(3);
            var12[0] = var14;
            var14 = {};
            var15 = var11.labels;
            var14['style'] = var15;
            var18 = 'string';
            var15 = typeof var20;
            var17 = var20;
            if(!(var18 === var15)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var19 = _closure1_slot5;
            var18 = _closure1_slot0;
            var21 = _closure1_slot2;
            var15 = 7;
            var15 = var21[var15];
            var15 = var18.bind(var4)(var15);
            var18 = var15.Text;
            var15 = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            var21 = var11.text;
            var15['style'] = var21;
            var15['children'] = var20;
            var17 = var19.bind(var4)(var18, var15);
case 8:
            var15 = new Array(2);
            var15[0] = var17;
            var15[1] = var16;
            var14['children'] = var15;
            var14 = var3.bind(var4)(var9, var14);
            var12[1] = var14;
            var12[2] = var13;
            var8['children'] = var12;
            var8 = var3.bind(var4)(var9, var8);
            var5[1] = var8;
            var6 = var6 != var10;
            if(!var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = _closure1_slot5;
            var8 = _closure1_slot3;
            var7 = {};
            var12 = var11.extrasContainer;
            var11 = new Array(1);
            var11[0] = var12;
            var7['style'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 10:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/list/SearchListRow.tsx';
    var4 = var5.bind(var6)(var4);
    var3['SearchListRow'] = var2;
    return var1;
})();