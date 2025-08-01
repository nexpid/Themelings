// app/modules/chat_input/native/ChatInputNativeComponent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
        var _closure1_slot3 = var9;
        var12 = 1;
        var2 = var6[var12];
        var2 = var5.bind(var1)(var2);
        var8 = var2.requireNativeComponent;
        var2 = 2;
        var2 = var6[var2];
        var2 = var13.bind(var1)(var2);
        var _closure1_slot4 = var2;
        var2 = 3;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var2 = var2.jsx;
        var _closure1_slot5 = var2;
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
        var _closure1_slot6 = var2;
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
                if(!(var21 === var4)) { _fun0002_ip = 98; continue _fun0002 }
 40:
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
 98:
                var8 = var1.setNoExtractUI;
                var7 = var1.shouldShowCursor;
                var20 = var1.onBeginFocus;
                var19 = var1.onEndBlur;
                var18 = var1.onChangeContentSize;
                var25 = var1.onMount;
                var _closure2_slot0 = var25;
                var17 = var1.onSelectionOrTextChange;
                var16 = var1.onTextFlushed;
                var15 = var1.onPasteImage;
                var14 = var1.onPasteCommand;
                var13 = var1.onTapAction;
                var12 = var1.onRequestSend;
                var _closure2_slot1 = var4;
                var5 = _closure1_slot6;
                var9 = var5.bind(var4)();
                var6 = var9.style;
                var5 = var9.textColor;
                var5 = var5.color;
                var9 = var9.placeholderColor;
                var10 = var9.color;
                var26 = _closure1_slot0;
                var27 = _closure1_slot2;
                var9 = 7;
                var9 = var27[var9];
                var24 = var26.bind(var4)(var9);
                var9 = var24.useTheme;
                var28 = var9.bind(var24)();
                var9 = 8;
                var9 = var27[var9];
                var24 = var26.bind(var4)(var9);
                var9 = var24.isThemeDark;
                var24 = var9.bind(var24)(var28);
                var9 = 9;
                var9 = var27[var9];
                var28 = var26.bind(var4)(var9);
                var27 = var28.hexWithOpacity;
                var26 = _closure1_slot1;
                var29 = _closure1_slot2;
                var9 = 5;
                var9 = var29[var9];
                var9 = var26.bind(var4)(var9);
                var9 = var9.unsafe_rawColors;
                if(var24) { _fun0002_ip = 323; continue _fun0002 }
 315:
                var26 = var9.PRIMARY_500;
                _fun0002_ip = 329; continue _fun0002;
 323:
                var26 = var9.WHITE_500;
 329:
                var9 = _closure1_slot4;
                var29 = var9.gradientPreset;
                var9 = null;
                var29 = var9 != var29;
                var9 = 0.6;
                if(!var29) { _fun0002_ip = 368; continue _fun0002 }
 358:
                var9 = 0.8;
 368:
                var9 = var27.bind(var28)(var26, var9);
                var27 = _closure1_slot3;
                var26 = var27.useRef;
                var26 = var26.bind(var27)(var25);
                _closure2_slot1 = var26;
                var28 = var27.useEffect;
                var26 = new Array(1);
                var26[0] = var25;
                var25 = function() {
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var25 = var28.bind(var27)(var25, var26);
                var26 = var27.useEffect;
                var25 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = _closure2_slot1;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0003_ip = 31; continue _fun0003 }
 18:
                        var2 = _closure2_slot1;
                        var1 = var2.current;
                        var1 = var1.bind(var2)();
 31:
                        var1 = undefined;
                        return var1;
                    }
                };
                var22 = new Array(0);
                var22 = var26.bind(var27)(var25, var22);
                var26 = _closure1_slot0;
                var25 = _closure1_slot2;
                var22 = 10;
                var25 = var25[var22];
                var26 = var26.bind(var4)(var25);
                var25 = var26.isAndroid;
                var25 = var25.bind(var26)();
                var26 = undefined;
                if(var25) { _fun0002_ip = 477; continue _fun0002 }
 474:
                var26 = var3;
 477:
                var25 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var22];
                var25 = var25.bind(var4)(var3);
                var3 = var25.isAndroid;
                var3 = var3.bind(var25)();
                var25 = undefined;
                if(var3) { _fun0002_ip = 511; continue _fun0002 }
 508:
                var25 = var2;
 511:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var22];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                var22 = 'default';
                if(!var2) { _fun0002_ip = 546; continue _fun0002 }
 544:
                var22 = undefined;
 546:
                var3 = _closure1_slot5;
                var2 = _closure1_slot7;
                var1 = {};
                var1['accessibilityLabel'] = var26;
                var1['children'] = var25;
                var1['editable'] = var23;
                var23 = 2;
                if(!var24) { _fun0002_ip = 578; continue _fun0002 }
 575:
                var23 = 1;
 578:
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
        if(var4) { _fun0001_ip = 291; continue _fun0001 }
 278:
        var4 = 'DCDChatInput';
        var4 = var8.bind(var1)(var4);
        _fun0001_ip = 308; continue _fun0001;
 291:
        var8 = 11;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var4 = var8.default;
 308:
        var _closure1_slot7 = var4;
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