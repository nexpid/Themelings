// app/modules/chat_input/native/ChatInputNativeComponent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var13 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var13;
        var _closure1_slot2 = var6;
        var1 = global;
        var8 = var1.Object;
        var4 = var8.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var4.bind(var8)(var3, var1, var2);
        var1 = 0;
        var4 = var6[var1];
        var2 = metroImportAll;
        var1 = undefined;
        var9 = var2.bind(var1)(var4);
        var12 = 1;
        var2 = var6[var12];
        var2 = var5.bind(var1)(var2);
        var8 = var2.requireNativeComponent;
        var2 = 2;
        var2 = var6[var2];
        var2 = var13.bind(var1)(var2);
        var _closure1_slot3 = var2;
        var2 = 3;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var2 = var2.jsx;
        var _closure1_slot4 = var2;
        var2 = 4;
        var2 = var6[var2];
        var10 = var5.bind(var1)(var2);
        var4 = var10.createStyles;
        var2 = {};
        var11 = {};
        var11['flex'] = var12;
        var2['style'] = var11;
        var11 = {};
        var12 = 5;
        var14 = var6[var12];
        var14 = var13.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.TEXT_DEFAULT;
        var11['color'] = var14;
        var2['textColor'] = var11;
        var11 = {};
        var12 = var6[var12];
        var12 = var13.bind(var1)(var12);
        var12 = var12.colors;
        var12 = var12.TEXT_MUTED;
        var11['color'] = var12;
        var2['placeholderColor'] = var11;
        var2 = var4.bind(var10)(var2);
        var _closure1_slot5 = var2;
        var4 = var9.forwardRef;
        var2 = function(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var24 = var1.accessibilityLabel;
                var22 = var1.customKeyboard;
                var12 = var1.placeholder;
                var26 = var1.editable;
                var23 = var1.markAsSpoilerTitle;
                var4 = undefined;
                if(!(var23 === var4)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 6;
                var3 = var7[var2];
                var3 = var6.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2.gsI+xC;
                var23 = var3.bind(var5)(var2);
case 2:
                var9 = var1.setNoExtractUI;
                var8 = var1.shouldShowCursor;
                var21 = var1.onBeginFocus;
                var20 = var1.onEndBlur;
                var19 = var1.onChangeContentSize;
                var3 = var1.onMaxHeightChanged;
                var18 = var1.onSelectionOrTextChange;
                var17 = var1.onTextFlushed;
                var16 = var1.onPasteImage;
                var15 = var1.onPasteCommand;
                var14 = var1.onTapAction;
                var13 = var1.onRequestSend;
                var5 = var1.verticalInset;
                var2 = _closure1_slot5;
                var2 = var2.bind(var4)();
                var7 = var2.style;
                var6 = var2.textColor;
                var6 = var6.color;
                var2 = var2.placeholderColor;
                var11 = var2.color;
                var25 = _closure1_slot0;
                var27 = _closure1_slot2;
                var2 = 7;
                var2 = var27[var2];
                var10 = var25.bind(var4)(var2);
                var2 = var10.useTheme;
                var28 = var2.bind(var10)();
                var2 = 8;
                var2 = var27[var2];
                var10 = var25.bind(var4)(var2);
                var2 = var10.isThemeDark;
                var2 = var2.bind(var10)(var28);
                var10 = 9;
                var10 = var27[var10];
                var28 = var25.bind(var4)(var10);
                var27 = var28.hexWithOpacity;
                var25 = _closure1_slot1;
                var29 = _closure1_slot2;
                var10 = 5;
                var10 = var29[var10];
                var10 = var25.bind(var4)(var10);
                var10 = var10.unsafe_rawColors;
                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var25 = var10.PRIMARY_500;
                _fun0002_ip = 6; continue _fun0002;
case 4:
                var25 = var10.WHITE;
case 6:
                var10 = _closure1_slot3;
                var29 = var10.gradientPreset;
                var10 = null;
                var29 = var10 != var29;
                var10 = 0.6;
                if(!var29) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var10 = 0.8;
case 7:
                var10 = var27.bind(var28)(var25, var10);
                var28 = _closure1_slot0;
                var27 = _closure1_slot2;
                var25 = 10;
                var27 = var27[var25];
                var28 = var28.bind(var4)(var27);
                var27 = var28.isAndroid;
                var27 = var27.bind(var28)();
                var28 = undefined;
                if(var27) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var28 = var24;
case 9:
                var27 = _closure1_slot0;
                var24 = _closure1_slot2;
                var24 = var24[var25];
                var27 = var27.bind(var4)(var24);
                var24 = var27.isAndroid;
                var24 = var24.bind(var27)();
                var27 = undefined;
                if(var24) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var27 = var22;
case 11:
                var24 = _closure1_slot0;
                var22 = _closure1_slot2;
                var22 = var22[var25];
                var24 = var24.bind(var4)(var22);
                var22 = var24.isAndroid;
                var22 = var22.bind(var24)();
                var24 = 'default';
                if(!var22) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var24 = undefined;
case 13:
                var25 = 2;
                if(!var2) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var25 = 1;
case 15:
                var22 = _closure1_slot1;
                var29 = _closure1_slot2;
                var2 = 11;
                var2 = var29[var2];
                var2 = var22.bind(var4)(var2);
                var22 = var2.bind(var4)(var3);
                var3 = _closure1_slot4;
                var2 = _closure1_slot6;
                var1 = {};
                var1['accessibilityLabel'] = var28;
                var1['children'] = var27;
                var1['editable'] = var26;
                var1['keyboardAppearance'] = var25;
                var1['keyboardType'] = var24;
                var1['markAsSpoilerTitle'] = var23;
                var1['maxHeight'] = var22;
                var1['onBeginFocus'] = var21;
                var1['onEndBlur'] = var20;
                var1['onChangeContentSize'] = var19;
                var1['onSelectionOrTextChange'] = var18;
                var1['onTextFlushed'] = var17;
                var1['onPasteImage'] = var16;
                var1['onPasteCommand'] = var15;
                var1['onTapAction'] = var14;
                var1['onRequestSend'] = var13;
                var1['placeholder'] = var12;
                var1['placeholderColor'] = var11;
                var11 = arg2;
                var1['ref'] = var11;
                var1['selectionColor'] = var10;
                var1['setNoExtractUI'] = var9;
                var1['shouldShowCursor'] = var8;
                var1['style'] = var7;
                var1['textColor'] = var6;
                var1['verticalInset'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var2 = var4.bind(var9)(var2);
        var4 = 10;
        var4 = var6[var4];
        var9 = var5.bind(var1)(var4);
        var4 = var9.isAndroid;
        var4 = var4.bind(var9)();
        if(var4) { _fun0001_ip = 17; continue _fun0001 }
case 18:
        var4 = 'DCDChatInput';
        var4 = var8.bind(var1)(var4);
        _fun0001_ip = 19; continue _fun0001;
case 17:
        var8 = 12;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var4 = var8.default;
case 19:
        var _closure1_slot6 = var4;
        var4 = 'ChatInputNativeComponent';
        var2['displayName'] = var4;
        var4 = 13;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/chat_input/native/ChatInputNativeComponent.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();