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
            var2 = 'text-feedback-critical';
            if(var4) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = 9;
            var4 = var6 / var4;
            var4 = var5 < var4;
            if(!var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var3 = 'text-feedback-warning';
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
    var13 = var13.space;
    var13 = var13.PX_4;
    var10['bottom'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
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
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 5;
            var5 = var2[var1];
            var4 = undefined;
            var8 = var3.bind(var4)(var5);
            var7 = var8.useInputStyles;
            var5 = {'size': 'lg', 'isRound': false};
            var9 = var6.isDisabled;
            var5['isDisabled'] = var9;
            var9 = var7.bind(var8)(var5);
            var5 = _closure1_slot5;
            var10 = var5.bind(var4)();
            var16 = var6.maxLength;
            var5 = 6;
            var5 = var2[var5];
            var8 = var3.bind(var4)(var5);
            var7 = var8.useTextField;
            var5 = arg2;
            var5 = var7.bind(var8)(var6, var5);
            var19 = var5.inputProps;
            var13 = var5.innerRef;
            var17 = var5.state;
            var20 = 7;
            var2 = var2[var20];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useFocus;
            var2 = var2.bind(var3)();
            var18 = var2.focusProps;
            var7 = var2.isFocused;
            var5 = null;
            var2 = var5 != var16;
            var12 = undefined;
            if(!var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = var17.value;
            var2 = var2.length;
            var12 = var16 - var2;
case 9:
            var14 = _closure1_slot0;
            var11 = _closure1_slot1;
            var2 = 8;
            var2 = var11[var2];
            var8 = var14.bind(var4)(var2);
            var3 = var8.useCharacterLimitAnnouncement;
            var2 = {};
            var17 = var17.value;
            var17 = var17.length;
            var2['currentLength'] = var17;
            var2['maxLength'] = var16;
            var17 = 9;
            var21 = var11[var17];
            var21 = var14.bind(var4)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var11[var17];
            var21 = var14.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.c2Jqed;
            var21 = var22.bind(var23)(var21);
            var2['message'] = var21;
            var2 = var3.bind(var8)(var2);
            var3 = _closure1_slot4;
            var1 = var11[var1];
            var1 = var14.bind(var4)(var1);
            var2 = var1.InputFieldContainer;
            var1 = {};
            var25 = var1;
            var24 = var6;
            var6 = copyDataProperties(var25, var24);
            var6 = 'isFocused';
            var1[5] = var7;
            var8 = _closure1_slot3;
            var6 = 10;
            var6 = var11[var6];
            var6 = var14.bind(var4)(var6);
            var7 = var6.NativeTextInput;
            var6 = {};
            var11 = var11[var20];
            var14 = var14.bind(var4)(var11);
            var11 = var14.mergeProps;
            var24 = var11.bind(var14)(var19, var18);
            var25 = var6;
            var11 = copyDataProperties(var25, var24);
            var11 = 'ref';
            var6[10] = var13;
            var11 = var9.padding;
            var13 = new Array(3);
            var13[0] = var11;
            var11 = var9.text;
            var13[1] = var11;
            var11 = var10.area;
            var13[2] = var11;
            var11 = 'style';
            var6[10] = var13;
            var9 = var9.placeholderText;
            var11 = var9.color;
            var9 = 'placeholderTextColor';
            var6[8] = var11;
            var11 = true;
            var9 = 'multiline';
            var6[8] = var11;
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
            var14 = _closure1_slot0;
            var13 = _closure1_slot1;
            var10 = 11;
            var10 = var13[var10];
            var10 = var14.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {};
            var18 = 'text-xs/semibold';
            var10['variant'] = var18;
            var15 = _closure1_slot6;
            var15 = var15.bind(var4)(var16, var12);
            var10['color'] = var15;
            var15 = var13[var17];
            var15 = var14.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.formatToPlainString;
            var13 = var13[var17];
            var13 = var14.bind(var4)(var13);
            var13 = var13.t;
            var14 = var13.fR1cof;
            var13 = {};
            var13['remainingCharacters'] = var12;
            var13 = var15.bind(var16)(var14, var13);
            var10['accessibilityLabel'] = var13;
            var10['children'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var5 = var9.bind(var4)(var8, var7);
case 11:
            var6[1] = var5;
            var5 = 'children';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/TextField/native/TextAreaField.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['TextAreaField'] = var2;
    return var1;
})();