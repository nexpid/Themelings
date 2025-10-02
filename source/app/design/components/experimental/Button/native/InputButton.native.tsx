// app/design/components/experimental/Button/native/InputButton.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = ['size', 'isRound', 'text', 'value', 'icon', 'iconPosition', 'accessibilityLabel', 'accessibilityValue', 'maxFontSizeMultiplier'];
    var _closure1_slot2 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Text;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flexGrow': 1, 'flexShrink': 1, 'width': '100%'};
    var4['buttonText'] = var10;
    var10 = {};
    var11 = 5;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INPUT_PLACEHOLDER_TEXT;
    var10['color'] = var13;
    var4['buttonTextPlaceholder'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.REDESIGN_BUTTON_TERTIARY_TEXT;
    var10['color'] = var11;
    var4['buttonTextValue'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var1 = var6.size;
            var18 = 'lg';
            var4 = undefined;
            if(!(var4 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var18 = var1;
case 2:
            var1 = var6.isRound;
            var12 = var4 !== var1;
            if(!var12) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = var1;
case 4:
            var8 = var6.text;
            var9 = var6.value;
            var17 = var6.icon;
            var2 = var6.iconPosition;
            var1 = 'start';
            var16 = var1;
            if(!(var4 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var16 = var2;
case 6:
            var14 = var6.accessibilityLabel;
            var7 = var6.accessibilityValue;
            var11 = var6.maxFontSizeMultiplier;
            if(!(var4 === var11)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 6;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var11 = var2.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
case 8:
            var3 = _closure1_slot3;
            var2 = _closure1_slot2;
            var6 = var3.bind(var4)(var6, var2);
            var3 = _closure1_slot0;
            var10 = _closure1_slot1;
            var2 = 7;
            var2 = var10[var2];
            var10 = var3.bind(var4)(var2);
            var3 = var10.useInputStyles;
            var2 = {};
            var2['size'] = var18;
            var2['isRound'] = var12;
            var1 = var1 === var16;
            var2['hasLeadingIcon'] = var1;
            var12 = var3.bind(var10)(var2);
            var2 = _closure1_slot6;
            var15 = var2.bind(var4)();
            var10 = null;
            if(!(var10 == var17)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var13 = {};
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var2 = {};
            if(var1) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1 = var12.trailingIcon;
            var1 = var1.paddingStart;
            var2['paddingEnd'] = var1;
            var1 = var2;
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var3 = var12.leadingIcon;
            var3 = var3.paddingEnd;
            var2['paddingStart'] = var3;
            var1 = var2;
case 15:
            var13 = var1;
case 12:
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var19 = _closure1_slot1;
            var1 = 8;
            var1 = var19[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BaseTextButton;
            var1 = {};
            var21 = var1;
            var20 = var6;
            var6 = copyDataProperties(var21, var20);
            var19 = arg2;
            var6 = 'ref';
            var1[var6] = var19;
            var6 = 'size';
            var1[var6] = var18;
            var18 = 'tertiary';
            var6 = 'variant';
            var1[var6] = var18;
            var6 = 'icon';
            var1[var6] = var17;
            var6 = 'iconPosition';
            var1[var6] = var16;
            var6 = var12.padding;
            var16 = new Array(2);
            var16[0] = var6;
            var6 = var12.radius;
            var16[1] = var6;
            var6 = 'pillStyle';
            var1[var6] = var16;
            if(!(var10 == var14)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var16 = var10 == var8;
            var6 = undefined;
            if(var16) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var16 = var8.toString;
            var6 = var16.bind(var8)();
case 18:
            var14 = var6;
case 16:
            var6 = 'accessibilityLabel';
            var1[var6] = var14;
            if(!(var10 == var7)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var6 = {};
            var6['text'] = var9;
            var7 = var6;
case 20:
            var6 = 'accessibilityValue';
            var1[var6] = var7;
            var7 = _closure1_slot5;
            var6 = _closure1_slot4;
            var5 = {};
            var14 = var12.text;
            var12 = new Array(4);
            var12[0] = var14;
            var14 = var15.buttonText;
            var12[1] = var14;
            if(!(var10 == var9)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var14 = var15.buttonTextPlaceholder;
            _fun0001_ip = 24; continue _fun0001;
case 22:
            var14 = var15.buttonTextValue;
case 24:
            var12[2] = var14;
            var12[3] = var13;
            var5['style'] = var12;
            var12 = 1;
            var5['numberOfLines'] = var12;
            var5['maxFontSizeMultiplier'] = var11;
            if(!(var10 != var9)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var8 = var9;
case 25:
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = 'textElement';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/experimental/Button/native/InputButton.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['InputButton'] = var2;
    return var1;
})();