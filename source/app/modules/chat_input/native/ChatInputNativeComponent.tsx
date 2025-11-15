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
        var14 = var14.TEXT_NORMAL;
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
                var23 = var1.accessibilityLabel;
                var21 = var1.customKeyboard;
                var11 = var1.placeholder;
                var25 = var1.editable;
                var22 = var1.markAsSpoilerTitle;
                var4 = undefined;
                if(!(var22 === var4)) { _fun0002_ip = 2; continue _fun0002 }
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
                var22 = var3.bind(var5)(var2);
case 2:
                var8 = var1.setNoExtractUI;
                var7 = var1.shouldShowCursor;
                var20 = var1.onBeginFocus;
                var19 = var1.onEndBlur;
                var18 = var1.onChangeContentSize;
                var3 = var1.onMaxHeightChanged;
                var17 = var1.onSelectionOrTextChange;
                var16 = var1.onTextFlushed;
                var15 = var1.onPasteImage;
                var14 = var1.onPasteCommand;
                var13 = var1.onTapAction;
                var12 = var1.onRequestSend;
                var2 = _closure1_slot5;
                var2 = var2.bind(var4)();
                var6 = var2.style;
                var5 = var2.textColor;
                var5 = var5.color;
                var2 = var2.placeholderColor;
                var10 = var2.color;
                var24 = _closure1_slot0;
                var26 = _closure1_slot2;
                var2 = 7;
                var2 = var26[var2];
                var9 = var24.bind(var4)(var2);
                var2 = var9.useTheme;
                var27 = var2.bind(var9)();
                var2 = 8;
                var2 = var26[var2];
                var9 = var24.bind(var4)(var2);
                var2 = var9.isThemeDark;
                var2 = var2.bind(var9)(var27);
                var9 = 9;
                var9 = var26[var9];
                var27 = var24.bind(var4)(var9);
                var26 = var27.hexWithOpacity;
                var24 = _closure1_slot1;
                var28 = _closure1_slot2;
                var9 = 5;
                var9 = var28[var9];
                var9 = var24.bind(var4)(var9);
                var9 = var9.unsafe_rawColors;
                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var24 = var9.PRIMARY_500;
                _fun0002_ip = 6; continue _fun0002;
case 4:
                var24 = var9.WHITE_500;
case 6:
                var9 = _closure1_slot3;
                var28 = var9.gradientPreset;
                var9 = null;
                var28 = var9 != var28;
                var9 = 0.6;
                if(!var28) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var9 = 0.8;
case 7:
                var9 = var26.bind(var27)(var24, var9);
                var27 = _closure1_slot0;
                var26 = _closure1_slot2;
                var24 = 10;
                var26 = var26[var24];
                var27 = var27.bind(var4)(var26);
                var26 = var27.isAndroid;
                var26 = var26.bind(var27)();
                var27 = undefined;
                if(var26) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var27 = var23;
case 9:
                var26 = _closure1_slot0;
                var23 = _closure1_slot2;
                var23 = var23[var24];
                var26 = var26.bind(var4)(var23);
                var23 = var26.isAndroid;
                var23 = var23.bind(var26)();
                var26 = undefined;
                if(var23) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var26 = var21;
case 11:
                var23 = _closure1_slot0;
                var21 = _closure1_slot2;
                var21 = var21[var24];
                var23 = var23.bind(var4)(var21);
                var21 = var23.isAndroid;
                var21 = var21.bind(var23)();
                var23 = 'default';
                if(!var21) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var23 = undefined;
case 13:
                var24 = 2;
                if(!var2) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var24 = 1;
case 15:
                var21 = _closure1_slot1;
                var28 = _closure1_slot2;
                var2 = 11;
                var2 = var28[var2];
                var2 = var21.bind(var4)(var2);
                var21 = var2.bind(var4)(var3);
                var3 = _closure1_slot4;
                var2 = _closure1_slot6;
                var1 = {};
                var1['accessibilityLabel'] = var27;
                var1['children'] = var26;
                var1['editable'] = var25;
                var1['keyboardAppearance'] = var24;
                var1['keyboardType'] = var23;
                var1['markAsSpoilerTitle'] = var22;
                var1['maxHeight'] = var21;
                var1['onBeginFocus'] = var20;
                var1['onEndBlur'] = var19;
                var1['onChangeContentSize'] = var18;
                var1['onSelectionOrTextChange'] = var17;
                var1['onTextFlushed'] = var16;
                var1['onPasteImage'] = var15;
                var1['onPasteCommand'] = var14;
                var1['onTapAction'] = var13;
                var1['onRequestSend'] = var12;
                var1['placeholder'] = var11;
                var1['placeholderColor'] = var10;
                var10 = arg2;
                var1['ref'] = var10;
                var1['selectionColor'] = var9;
                var1['setNoExtractUI'] = var8;
                var1['shouldShowCursor'] = var7;
                var1['style'] = var6;
                var1['textColor'] = var5;
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
        _fun0001_ip = 5; continue _fun0001;
case 17:
        var8 = 12;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var4 = var8.default;
case 5:
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