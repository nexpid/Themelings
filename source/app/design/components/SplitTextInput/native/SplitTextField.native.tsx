// app/design/components/SplitTextInput/native/SplitTextField.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var8 = var4.Pressable;
    var _closure1_slot2 = var8;
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var14 = arg1;
            var3 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 3;
            var2 = var7[var2];
            var4 = undefined;
            var6 = var3.bind(var4)(var2);
            var5 = var6.useInputStyles;
            var2 = {};
            var8 = var14.size;
            var2['size'] = var8;
            var8 = var14.isRound;
            var2['isRound'] = var8;
            var13 = var5.bind(var6)(var2);
            var2 = 4;
            var2 = var7[var2];
            var6 = var3.bind(var4)(var2);
            var5 = var6.useTextField;
            var2 = arg2;
            var2 = var5.bind(var6)(var14, var2);
            var9 = var2.innerRef;
            var5 = var2.inputProps;
            var6 = var2.state;
            var2 = 5;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useInputClearButtonConfig;
            var6 = var2.bind(var3)(var14, var6);
            var3 = null;
            var2 = var3 != var6;
            var7 = undefined;
            if(!var2) { _fun0001_ip = 166; continue _fun0001 }
 140:
            var2 = {};
            var8 = var6.content;
            var2['trailing'] = var8;
            var6 = var6.pressableProps;
            var2['trailingPressableProps'] = var6;
            var7 = var2;
 166:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var17 = 6;
            var2 = var2[var17];
            var6 = var6.bind(var4)(var2);
            var2 = var6.useInputAttachments;
            var2 = var2.bind(var6)(var14, var7);
            var7 = var2.trailing;
            var6 = var2.inputStyle;
            var2 = var14.leadingText;
            var2 = var3 != var2;
            var8 = null;
            if(!var2) { _fun0001_ip = 368; continue _fun0001 }
 228:
            var2 = var14.leadingText;
            var10 = var2.length;
            var2 = 0;
            var2 = var10 > var2;
            var8 = null;
            if(!var2) { _fun0001_ip = 368; continue _fun0001 }
 250:
            var10 = _closure1_slot4;
            var3 = _closure1_slot3;
            var2 = {};
            var11 = var13.splitBorder;
            var2['style'] = var11;
            var12 = _closure1_slot2;
            var11 = {};
            var15 = function style(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.pressed;
                    var2 = undefined;
                    if(!var1) { _fun0002_ip = 33; continue _fun0002 }
 14:
                    var1 = {};
                    var3 = 0.2;
                    var1['opacity'] = var3;
                    var2 = var1;
 33:
                    var1 = new Array(1);
                    var1[0] = var2;
                    return var1;
                }
            };
            var11['style'] = var15;
            var19 = var14.leadingPressableProps;
            var20 = var11;
            var15 = copyDataProperties(var20, var19);
            var16 = _closure1_slot0;
            var15 = _closure1_slot1;
            var15 = var15[var17];
            var16 = var16.bind(var4)(var15);
            var15 = var16.renderInputAttachment;
            var14 = var14.leadingText;
            var13 = var13.text;
            var14 = var15.bind(var16)(var4, var14, var13);
            var13 = 'children';
            var11[var13] = var14;
            var11 = var10.bind(var4)(var12, var11);
            var2['children'] = var11;
            var8 = var10.bind(var4)(var3, var2);
 368:
            var3 = _closure1_slot4;
            var2 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 7;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BaseTextField;
            var1 = {};
            var20 = var1;
            var19 = var5;
            var5 = copyDataProperties(var20, var19);
            var5 = 'ref';
            var1[var5] = var9;
            var5 = 'leading';
            var1[var5] = var8;
            var5 = 'trailing';
            var1[var5] = var7;
            var5 = 'inputStyle';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/SplitTextInput/native/SplitTextField.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['SplitTextField'] = var2;
    return var1;
})();