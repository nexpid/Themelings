// app/design/components/TextInput/native/TextArea.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function getLengthRemainingTextColor(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var2 = null;
            var4 = var2 == var6;
            var3 = 'text-muted';
            var1 = var3;
            if(var4) { _fun0001_ip = 75; continue _fun0001 }
 24:
            var2 = var2 == var5;
            var1 = var3;
            if(var2) { _fun0001_ip = 75; continue _fun0001 }
 34:
            var2 = 0;
            var4 = var5 <= var2;
            var2 = 'text-danger';
            if(var4) { _fun0001_ip = 72; continue _fun0001 }
 49:
            var4 = 9;
            var4 = var6 / var4;
            var4 = var5 < var4;
            if(!var4) { _fun0001_ip = 69; continue _fun0001 }
 63:
            var3 = 'text-warning';
 69:
            var2 = var3;
 72:
            var1 = var2;
 75:
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
    var4 = native4;
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
 0:
            var9 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var5 = 5;
            var1 = var2[var5];
            var4 = undefined;
            var7 = var3.bind(var4)(var1);
            var6 = var7.useInputStyles;
            var1 = {'size': 'lg', 'isRound': false};
            var8 = var9.isDisabled;
            var1['isDisabled'] = var8;
            var11 = var6.bind(var7)(var1);
            var1 = _closure1_slot5;
            var13 = var1.bind(var4)();
            var17 = var9.maxLength;
            var1 = 6;
            var1 = var2[var1];
            var7 = var3.bind(var4)(var1);
            var6 = var7.useTextField;
            var1 = arg2;
            var1 = var6.bind(var7)(var9, var1);
            var20 = var1.inputProps;
            var14 = var1.innerRef;
            var1 = var1.state;
            var21 = 7;
            var2 = var2[var21];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useFocus;
            var2 = var2.bind(var3)();
            var19 = var2.focusProps;
            var10 = var2.isFocused;
            var6 = null;
            var2 = var6 != var17;
            var15 = undefined;
            if(!var2) { _fun0002_ip = 181; continue _fun0002 }
 167:
            var1 = var1.value;
            var1 = var1.length;
            var15 = var17 - var1;
 181:
            var3 = _closure1_slot3;
            var18 = _closure1_slot0;
            var12 = _closure1_slot1;
            var1 = 8;
            var1 = var12[var1];
            var1 = var18.bind(var4)(var1);
            var2 = var1.Input;
            var1 = {};
            var23 = var1;
            var22 = var9;
            var7 = copyDataProperties(var23, var22);
            var8 = _closure1_slot4;
            var5 = var12[var5];
            var5 = var18.bind(var4)(var5);
            var7 = var5.InputFieldContainer;
            var5 = {};
            var23 = var5;
            var22 = var9;
            var9 = copyDataProperties(var23, var22);
            var9 = 'isFocused';
            var5[var9] = var10;
            var9 = 9;
            var9 = var12[var9];
            var9 = var18.bind(var4)(var9);
            var10 = var9.NativeTextInput;
            var9 = {};
            var12 = var12[var21];
            var18 = var18.bind(var4)(var12);
            var12 = var18.mergeProps;
            var22 = var12.bind(var18)(var20, var19);
            var23 = var9;
            var12 = copyDataProperties(var23, var22);
            var12 = 'ref';
            var9[var12] = var14;
            var12 = var11.padding;
            var14 = new Array(3);
            var14[0] = var12;
            var12 = var11.text;
            var14[1] = var12;
            var12 = var13.area;
            var14[2] = var12;
            var12 = 'style';
            var9[var12] = var14;
            var11 = var11.placeholderText;
            var12 = var11.color;
            var11 = 'placeholderTextColor';
            var9[var11] = var12;
            var12 = true;
            var11 = 'multiline';
            var9[var11] = var12;
            var10 = var3.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var6 = null;
            if(!(var6 != var15)) { _fun0002_ip = 503; continue _fun0002 }
 412:
            var12 = _closure1_slot3;
            var11 = _closure1_slot2;
            var10 = {};
            var13 = var13.maxLengthIndicator;
            var10['style'] = var13;
            var14 = _closure1_slot0;
            var18 = _closure1_slot1;
            var13 = 10;
            var13 = var18[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {};
            var18 = 'text-xs/semibold';
            var13['variant'] = var18;
            var16 = _closure1_slot6;
            var16 = var16.bind(var4)(var17, var15);
            var13['color'] = var16;
            var13['children'] = var15;
            var13 = var12.bind(var4)(var14, var13);
            var10['children'] = var13;
            var6 = var12.bind(var4)(var11, var10);
 503:
            var9[1] = var6;
            var6 = 'children';
            var5[var6] = var9;
            var5 = var8.bind(var4)(var7, var5);
            var1[var6] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/TextInput/native/TextArea.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['TextArea'] = var2;
    return var1;
})();