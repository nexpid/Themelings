// app/uikit-native/refresh/form/FormSwitch.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Switch;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = -5;
    var9['marginVertical'] = var10;
    var4['switch'] = var9;
    var9 = {};
    var10 = 4;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.REDESIGN_INPUT_CONTROL_SELECTED;
    var9['color'] = var10;
    var4['track'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/refresh/form/FormSwitch.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FormSwitch(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.value;
            var4 = undefined;
            var8 = var4 !== var1;
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var1;
case 2:
            var1 = var2.disabled;
            var9 = var4 !== var1;
            if(!var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var1;
case 4:
            var11 = var2.style;
            var13 = var2.borderColor;
            var7 = var2.onValueChange;
            var12 = var2.accessible;
            var6 = var2.accessibilityLabel;
            var5 = var2.accessibilityHint;
            var1 = var2.renderIosBackground;
            var14 = var4 !== var1;
            if(!var14) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var14 = var1;
case 6:
            var3 = _closure1_slot5;
            var10 = var3.bind(var4)();
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var3 = 5;
            var3 = var16[var3];
            var3 = var15.bind(var4)(var3);
            var16 = var3.bind(var4)();
            var15 = var2.tintColor;
            var2 = null;
            if(!(var2 == var15)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var10.track;
            var15 = var3.color;
case 8:
            if(!(var2 == var13)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 6;
            var2 = var17[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isThemeDark;
            var2 = var2.bind(var3)(var16);
            var13 = undefined;
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 4;
            var2 = var16[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            var13 = var2.PRIMARY_400;
case 10:
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = {};
            var1['accessible'] = var12;
            var12 = {};
            var12['true'] = var15;
            var12['false'] = var13;
            var1['trackColor'] = var12;
            var15 = false;
            var12 = undefined;
            if(!(var15 === var8)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var12 = undefined;
            if(!var14) { _fun0001_ip = 13; continue _fun0001 }
case 15:
            var12 = var13;
case 13:
            var1['ios_backgroundColor'] = var12;
            var1['value'] = var8;
            var1['disabled'] = var9;
            var12 = var10.switch;
            var10 = new Array(2);
            var10[0] = var12;
            var10[1] = var11;
            var1['style'] = var10;
            var1['onValueChange'] = var7;
            var7 = {};
            var7['disabled'] = var9;
            var7['selected'] = var8;
            var1['accessibilityState'] = var7;
            var1['accessibilityLabel'] = var6;
            var1['accessibilityHint'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();