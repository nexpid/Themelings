// app/modules/share/native/ShareChatInput.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var14 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var14;
        var _closure1_slot2 = var6;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var10 = 0;
        var4 = var6[var10];
        var1 = undefined;
        var4 = var14.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 1;
        var7 = var6[var4];
        var4 = metroImportAll;
        var4 = var4.bind(var1)(var7);
        var _closure1_slot4 = var4;
        var11 = 2;
        var4 = var6[var11];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var15 = var4.Fonts;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.EmojiIntention;
        var _closure1_slot6 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot7 = var7;
        var4 = var4.jsxs;
        var _closure1_slot8 = var4;
        var4 = 6;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': null, 'borderRadius': 20};
        var13 = 7;
        var12 = var6[var13];
        var12 = var14.bind(var1)(var12);
        var12 = var12.colors;
        var12 = var12.REDESIGN_CHAT_INPUT_BACKGROUND;
        var9['backgroundColor'] = var12;
        var12 = var6[var13];
        var12 = var14.bind(var1)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_12;
        var9['paddingHorizontal'] = var12;
        var12 = var6[var13];
        var12 = var14.bind(var1)(var12);
        var12 = var12.spacing;
        var17 = var12.PX_8;
        var12 = 8;
        var16 = var6[var12];
        var18 = var5.bind(var1)(var16);
        var16 = var18.isAndroid;
        var18 = var16.bind(var18)();
        var16 = 0;
        if(!var18) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var16 = var11;
case 2:
        var16 = var17 - var16;
        var9['paddingVertical'] = var16;
        var4['container'] = var9;
        var9 = {'flex': 1, 'paddingVertical': 0, 'paddingHorizontal': null, 'maxHeight': 80};
        var16 = var6[var13];
        var16 = var14.bind(var1)(var16);
        var16 = var16.spacing;
        var16 = var16.PX_4;
        var9['paddingHorizontal'] = var16;
        var4['chatInput'] = var9;
        var9 = {'fontSize': 16, 'lineHeight': 20, 'fontFamily': null, 'color': null, 'padding': 0};
        var15 = var15.PRIMARY_NORMAL;
        var9['fontFamily'] = var15;
        var15 = var6[var13];
        var15 = var14.bind(var1)(var15);
        var15 = var15.colors;
        var15 = var15.TEXT_PRIMARY;
        var9['color'] = var15;
        var4['chatText'] = var9;
        var9 = {};
        var13 = var6[var13];
        var13 = var14.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.TEXT_MUTED;
        var9['color'] = var13;
        var4['inputPlaceholder'] = var9;
        var9 = {'alignSelf': 'flex-end', 'marginRight': 4294967294};
        var12 = var6[var12];
        var13 = var5.bind(var1)(var12);
        var12 = var13.isAndroid;
        var12 = var12.bind(var13)();
        var10 = 0;
        if(!var12) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var10 = var11;
case 4:
        var9['paddingBottom'] = var10;
        var4['emojiButton'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot9 = var4;
        var4 = 15;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/share/native/ShareChatInput.tsx';
        var4 = var5.bind(var6)(var4);
        var4 = function ShareChatInput(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var17 = var1.text;
                var20 = var1.inputRef;
                var16 = var1.onChange;
                var18 = var1.onSelectionChange;
                var15 = var1.onFocus;
                var7 = var1.onBlur;
                var13 = var1.onPressEmoji;
                var19 = var1.onSend;
                var9 = var1.disabled;
                var4 = undefined;
                if(!(var9 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var9 = false;
case 6:
                var1 = _closure1_slot9;
                var12 = var1.bind(var4)();
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 10;
                var1 = var11[var1];
                var1 = var6.bind(var4)(var1);
                var14 = var1.bind(var4)();
                var3 = _closure1_slot8;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = var12.container;
                var1['style'] = var5;
                var8 = _closure1_slot7;
                var5 = 11;
                var5 = var11[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5['ref'] = var20;
                var5['maxLength'] = var14;
                var10 = _closure1_slot0;
                var14 = 12;
                var20 = var11[var14];
                var20 = var10.bind(var4)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var11[var14];
                var20 = var10.bind(var4)(var20);
                var20 = var20.t;
                var20 = var20.ZroO3N;
                var20 = var21.bind(var22)(var20);
                var5['placeholder'] = var20;
                var20 = var12.inputPlaceholder;
                var20 = var20.color;
                var5['placeholderTextColor'] = var20;
                var20 = var11[var14];
                var20 = var10.bind(var4)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var11[var14];
                var20 = var10.bind(var4)(var20);
                var20 = var20.t;
                var20 = var20./+MXm5;
                var20 = var21.bind(var22)(var20);
                var5['accessibilityLabel'] = var20;
                var5['onSubmitEditing'] = var19;
                var5['onSelectionChange'] = var18;
                var18 = var12.chatInput;
                var5['style'] = var18;
                var5['value'] = var17;
                var5['onChange'] = var16;
                var5['onFocus'] = var15;
                var5['onBlur'] = var7;
                var7 = true;
                var5['multiline'] = var7;
                var7 = false;
                var5['showBorder'] = var7;
                var5['showTopContainer'] = var7;
                var7 = 'center';
                var5['textAlignVertical'] = var7;
                var7 = var12.chatText;
                var5['inputTextStyle'] = var7;
                var7 = !var9;
                var5['editable'] = var7;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = 13;
                var6 = var11[var6];
                var6 = var10.bind(var4)(var6);
                var7 = var6.PressableOpacity;
                var6 = {};
                var15 = var11[var14];
                var15 = var10.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var11[var14];
                var14 = var10.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.iZ7Mz8;
                var14 = var15.bind(var16)(var14);
                var6['accessibilityLabel'] = var14;
                var14 = 'button';
                var6['accessibilityRole'] = var14;
                var6['onPress'] = var13;
                var12 = var12.emojiButton;
                var6['style'] = var12;
                var6['disabled'] = var9;
                var9 = 14;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.ReactionIcon;
                var9 = {};
                var11 = 'md';
                var9['size'] = var11;
                var9 = var8.bind(var4)(var10, var9);
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var4;
        var2 = function useShareChatInputActions(arg1, arg2) {
            var2 = arg1;
            var10 = arg2;
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var10;
            var9 = _closure1_slot4;
            var5 = var9.useRef;
            var3 = null;
            var7 = var5.bind(var9)(var3);
            var _closure2_slot2 = var7;
            var6 = var9.useRef;
            var3 = 0;
            var5 = {'start': 0, 'end': 0};
            var5 = var6.bind(var9)(var5);
            var _closure2_slot3 = var5;
            var6 = var9.useState;
            var5 = false;
            var8 = var6.bind(var9)(var5);
            var6 = _closure1_slot3;
            var5 = undefined;
            var4 = 2;
            var4 = var6.bind(var5)(var8, var4);
            var6 = var4[var3];
            var3 = 1;
            var3 = var4[var3];
            var _closure2_slot4 = var3;
            var5 = var9.useCallback;
            var4 = function(arg1) {
                var2 = _closure2_slot3;
                var1 = {};
                var3 = arg1;
                var3 = var3.nativeEvent;
                var4 = var3.selection;
                var5 = var1;
                var3 = copyDataProperties(var5, var4);
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var3 = new Array(0);
            var5 = var5.bind(var9)(var4, var3);
            var8 = var9.useCallback;
            var4 = function() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = new Array(0);
            var4 = var8.bind(var9)(var4, var3);
            var11 = var9.useCallback;
            var8 = function() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = new Array(0);
            var3 = var11.bind(var9)(var8, var3);
            var11 = var9.useCallback;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var5 = '';
                    var _closure3_slot0 = var5;
                    var3 = var1.id;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var3 = var1.surrogates;
                    if(!(var2 == var3)) { _fun0003_ip = 10; continue _fun0003 }
case 8:
                    var3 = var1.uniqueName;
                    if(!(var2 != var3)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var3 = var1.uniqueName;
                    if(!(var5 === var3)) { _fun0003_ip = 13; continue _fun0003 }
case 11:
                    var7 = var1.name;
                    _fun0003_ip = 14; continue _fun0003;
case 13:
                    var7 = var1.uniqueName;
case 14:
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var6 = var3.concat;
                    var5 = ':';
                    var3 = ': ';
                    var3 = var6.bind(var5)(var7, var3);
                    _closure3_slot0 = var3;
                    _fun0003_ip = 15; continue _fun0003;
case 10:
                    var1 = var1.surrogates;
                    _closure3_slot0 = var1;
case 15:
                    var5 = _closure2_slot0;
                    var1 = undefined;
                    var4 = function(arg1) {
                        var4 = arg1;
                        var5 = var4.slice;
                        var1 = _closure2_slot3;
                        var2 = var1.current;
                        var3 = var2.start;
                        var2 = 0;
                        var3 = var5.bind(var4)(var2, var3);
                        var2 = _closure3_slot0;
                        var2 = var3 + var2;
                        var3 = var4.slice;
                        var1 = var1.current;
                        var1 = var1.end;
                        var1 = var3.bind(var4)(var1);
                        var1 = var2 + var1;
                        return var1;
                    };
                    var4 = var5.bind(var1)(var4);
                    var3 = _closure2_slot2;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var2 = var3.focus;
                    var2 = var2.bind(var3)();
case 16:
                    return var1;
                }
            };
            var11 = var11.bind(var9)(var2, var8);
            var _closure2_slot5 = var11;
            var12 = var9.useCallback;
            var8 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var1 = var2.focus;
                    var1 = var1.bind(var2)();
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = new Array(0);
            var12 = var12.bind(var9)(var8, var2);
            var _closure2_slot6 = var12;
            var8 = var9.useCallback;
            var2 = new Array(3);
            var2[0] = var12;
            var2[1] = var11;
            var2[2] = var10;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var2 = var1.current;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var1 = var2.blur;
                    var1 = var1.bind(var2)();
case 18:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openEmojiPickerActionSheet;
                    var2 = {};
                    var8 = _closure2_slot5;
                    var2['onPressEmoji'] = var8;
                    var8 = _closure2_slot6;
                    var2['onClose'] = var8;
                    var6 = _closure1_slot6;
                    var6 = var6.CHAT;
                    var2['pickerIntention'] = var6;
                    var6 = false;
                    var2['autoFocus'] = var6;
                    var2['startExpanded'] = var6;
                    var6 = _closure2_slot1;
                    var2['channel'] = var6;
                    var8 = var5 == var6;
                    var6 = undefined;
                    if(var8) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var8 = _closure2_slot1;
                    var7 = var8.getGuildId;
                    var6 = var7.bind(var8)();
case 20:
                    var7 = var5 != var6;
                    var5 = undefined;
                    if(!var7) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var5 = var6;
case 22:
                    var2['guildId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = var8.bind(var9)(var1, var2);
            var1 = {};
            var1['textInputRef'] = var7;
            var1['isInputFocused'] = var6;
            var1['handleSelectionChange'] = var5;
            var1['handleMessageFocus'] = var4;
            var1['handleMessageBlur'] = var3;
            var1['handlePressEmoji'] = var2;
            return var1;
        };
        var3['useShareChatInputActions'] = var2;
        return var1;
    }
})();