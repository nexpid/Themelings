// app/design/components/TextField/native/TextAreaField.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function getLengthRemainingTextColor(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var2 = null;
            var4 = var2 == var6;
            var3 = 'text-muted';
            var1 = var3;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var2 == var5;
            var1 = var3;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = 0;
            var4 = var5 <= var2;
            var2 = 'text-danger';
            if(var4) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = 9;
            var4 = var6 / var4;
            var4 = var5 < var4;
            if(!var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var3 = 'text-warning';
case 7:
            var2 = var3;
case 5:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot3 = var8;
    var4 = var4.jsxs;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'height': 128, 'textAlignVertical': 'top'};
    var4['area'] = var10;
    var10 = {};
    var11 = 'absolute';
    var10['position'] = var11;
    var11 = 4;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var10['bottom'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var10['right'] = var11;
    var4['maxLengthIndicator'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot5 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 5;
            var2 = var3[var1];
            var4 = undefined;
            var8 = var5.bind(var4)(var2);
            var7 = var8.useInputStyles;
            var2 = {'size': 'lg', 'isRound': false};
            var9 = var6.isDisabled;
            var2['isDisabled'] = var9;
            var9 = var7.bind(var8)(var2);
            var2 = _closure1_slot5;
            var10 = var2.bind(var4)();
            var14 = var6.maxLength;
            var2 = 6;
            var2 = var3[var2];
            var8 = var5.bind(var4)(var2);
            var7 = var8.useTextField;
            var2 = arg2;
            var2 = var7.bind(var8)(var6, var2);
            var18 = var2.inputProps;
            var15 = var2.innerRef;
            var2 = var2.state;
            var19 = 7;
            var3 = var3[var19];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useFocus;
            var3 = var3.bind(var5)();
            var17 = var3.focusProps;
            var7 = var3.isFocused;
            var5 = null;
            var3 = var5 != var14;
            var12 = undefined;
            if(!var3) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = var2.value;
            var2 = var2.length;
            var12 = var14 - var2;
case 9:
            var3 = _closure1_slot4;
            var16 = _closure1_slot0;
            var11 = _closure1_slot1;
            var1 = var11[var1];
            var1 = var16.bind(var4)(var1);
            var2 = var1.InputFieldContainer;
            var1 = {};
            var21 = var1;
            var20 = var6;
            var6 = copyDataProperties(var21, var20);
            var6 = 'isFocused';
            var1[var6] = var7;
            var8 = _closure1_slot3;
            var6 = 8;
            var6 = var11[var6];
            var6 = var16.bind(var4)(var6);
            var7 = var6.NativeTextInput;
            var6 = {};
            var11 = var11[var19];
            var16 = var16.bind(var4)(var11);
            var11 = var16.mergeProps;
            var20 = var11.bind(var16)(var18, var17);
            var21 = var6;
            var11 = copyDataProperties(var21, var20);
            var11 = 'ref';
            var6[var11] = var15;
            var11 = var9.padding;
            var15 = new Array(3);
            var15[0] = var11;
            var11 = var9.text;
            var15[1] = var11;
            var11 = var10.area;
            var15[2] = var11;
            var11 = 'style';
            var6[var11] = var15;
            var9 = var9.placeholderText;
            var11 = var9.color;
            var9 = 'placeholderTextColor';
            var6[var9] = var11;
            var11 = true;
            var9 = 'multiline';
            var6[var9] = var11;
            var7 = var8.bind(var4)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var5 = null;
            if(!(var5 != var12)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var9 = _closure1_slot3;
            var8 = _closure1_slot2;
            var7 = {};
            var10 = var10.maxLengthIndicator;
            var7['style'] = var10;
            var11 = _closure1_slot0;
            var15 = _closure1_slot1;
            var10 = 9;
            var10 = var15[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {};
            var15 = 'text-xs/semibold';
            var10['variant'] = var15;
            var13 = _closure1_slot6;
            var13 = var13.bind(var4)(var14, var12);
            var10['color'] = var13;
            var10['children'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var5 = var9.bind(var4)(var8, var7);
case 11:
            var6[1] = var5;
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/TextField/native/TextAreaField.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['TextAreaField'] = var2;
    return var1;
})();