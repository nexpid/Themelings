// app/modules/chat_input/native/ChatInputNativeComponent.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = native2;
        var13 = native3;
        var3 = native6;
        var6 = native7;
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
        var2 = native4;
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
 0:
                var1 = arg1;
                var3 = var1.accessibilityLabel;
                var2 = var1.customKeyboard;
                var11 = var1.placeholder;
                var23 = var1.editable;
                var21 = var1.markAsSpoilerTitle;
                var4 = undefined;
                if(!(var21 === var4)) { _fun0002_ip = 96; continue _fun0002 }
 38:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 6;
                var6 = var9[var5];
                var6 = var8.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.gsI+xM;
                var21 = var6.bind(var7)(var5);
 96:
                var8 = var1.setNoExtractUI;
                var7 = var1.shouldShowCursor;
                var20 = var1.onBeginFocus;
                var19 = var1.onEndBlur;
                var18 = var1.onChangeContentSize;
                var17 = var1.onSelectionOrTextChange;
                var16 = var1.onTextFlushed;
                var15 = var1.onPasteImage;
                var14 = var1.onPasteCommand;
                var13 = var1.onTapAction;
                var12 = var1.onRequestSend;
                var5 = _closure1_slot5;
                var9 = var5.bind(var4)();
                var6 = var9.style;
                var5 = var9.textColor;
                var5 = var5.color;
                var9 = var9.placeholderColor;
                var10 = var9.color;
                var22 = _closure1_slot0;
                var25 = _closure1_slot2;
                var9 = 7;
                var9 = var25[var9];
                var24 = var22.bind(var4)(var9);
                var9 = var24.useTheme;
                var26 = var9.bind(var24)();
                var9 = 8;
                var9 = var25[var9];
                var24 = var22.bind(var4)(var9);
                var9 = var24.isThemeDark;
                var24 = var9.bind(var24)(var26);
                var9 = 9;
                var9 = var25[var9];
                var26 = var22.bind(var4)(var9);
                var25 = var26.hexWithOpacity;
                var22 = _closure1_slot1;
                var27 = _closure1_slot2;
                var9 = 5;
                var9 = var27[var9];
                var9 = var22.bind(var4)(var9);
                var9 = var9.unsafe_rawColors;
                if(var24) { _fun0002_ip = 307; continue _fun0002 }
 299:
                var22 = var9.PRIMARY_500;
                _fun0002_ip = 313; continue _fun0002;
 307:
                var22 = var9.WHITE_500;
 313:
                var9 = _closure1_slot3;
                var27 = var9.gradientPreset;
                var9 = null;
                var27 = var9 != var27;
                var9 = 0.6;
                if(!var27) { _fun0002_ip = 352; continue _fun0002 }
 342:
                var9 = 0.8;
 352:
                var9 = var25.bind(var26)(var22, var9);
                var26 = _closure1_slot0;
                var25 = _closure1_slot2;
                var22 = 10;
                var25 = var25[var22];
                var26 = var26.bind(var4)(var25);
                var25 = var26.isAndroid;
                var25 = var25.bind(var26)();
                var26 = undefined;
                if(var25) { _fun0002_ip = 395; continue _fun0002 }
 392:
                var26 = var3;
 395:
                var25 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var22];
                var25 = var25.bind(var4)(var3);
                var3 = var25.isAndroid;
                var3 = var3.bind(var25)();
                var25 = undefined;
                if(var3) { _fun0002_ip = 429; continue _fun0002 }
 426:
                var25 = var2;
 429:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var22];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                var22 = 'default';
                if(!var2) { _fun0002_ip = 464; continue _fun0002 }
 462:
                var22 = undefined;
 464:
                var3 = _closure1_slot4;
                var2 = _closure1_slot6;
                var1 = {};
                var1['accessibilityLabel'] = var26;
                var1['children'] = var25;
                var1['editable'] = var23;
                var23 = 2;
                if(!var24) { _fun0002_ip = 496; continue _fun0002 }
 493:
                var23 = 1;
 496:
                var1['keyboardAppearance'] = var23;
                var1['keyboardType'] = var22;
                var1['markAsSpoilerTitle'] = var21;
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
        if(var4) { _fun0001_ip = 287; continue _fun0001 }
 274:
        var4 = 'DCDChatInput';
        var4 = var8.bind(var1)(var4);
        _fun0001_ip = 304; continue _fun0001;
 287:
        var8 = 11;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var4 = var8.default;
 304:
        var _closure1_slot6 = var4;
        var4 = 'ChatInputNativeComponent';
        var2['displayName'] = var4;
        var4 = 12;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/chat_input/native/ChatInputNativeComponent.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();