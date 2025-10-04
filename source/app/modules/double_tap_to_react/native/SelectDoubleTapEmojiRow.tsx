// app/modules/double_tap_to_react/native/SelectDoubleTapEmojiRow.tsx
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
        var8 = var4.bind(var1)(var7);
        var _closure1_slot3 = var8;
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot4 = var4;
        var15 = 2;
        var4 = var6[var15];
        var4 = var13.bind(var1)(var4);
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var14 = var4.ACTION_SHEET_BACKGROUND_COLOR;
        var4 = var4.ACTION_SHEET_MAX_WIDTH;
        var _closure1_slot6 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.EMOJI_URL_BASE_SIZE;
        var _closure1_slot7 = var7;
        var4 = var4.EmojiIntention;
        var _closure1_slot8 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot9 = var7;
        var7 = var4.Fragment;
        var _closure1_slot10 = var7;
        var4 = var4.jsxs;
        var _closure1_slot11 = var4;
        var4 = 6;
        var4 = var6[var4];
        var10 = var5.bind(var1)(var4);
        var9 = var10.createStyles;
        var7 = {};
        var17 = 24;
        var4 = {'width': 24, 'height': 24};
        var7['emoji'] = var4;
        var4 = {'width': 24, 'height': 24};
        var7['customEmoji'] = var4;
        var11 = {};
        var12 = 7;
        var4 = var6[var12];
        var16 = var5.bind(var1)(var4);
        var4 = var16.isIOS;
        var18 = var4.bind(var16)();
        var4 = 20;
        var16 = var4;
        if(!var18) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var16 = var17;
case 2:
        var11['fontSize'] = var16;
        var12 = var6[var12];
        var16 = var5.bind(var1)(var12);
        var12 = var16.isIOS;
        var16 = var12.bind(var16)();
        var12 = undefined;
        if(!var16) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var12 = 28;
case 4:
        var11['lineHeight'] = var12;
        var16 = 'center';
        var11['textAlign'] = var16;
        var12 = 8;
        var17 = var6[var12];
        var17 = var13.bind(var1)(var17);
        var17 = var17.colors;
        var17 = var17.INTERACTIVE_NORMAL;
        var11['color'] = var17;
        var7['textEmoji'] = var11;
        var11 = {};
        var11['textAlign'] = var16;
        var7['alignCenter'] = var11;
        var11 = {};
        var16 = 'row';
        var11['flexDirection'] = var16;
        var16 = var6[var12];
        var16 = var13.bind(var1)(var16);
        var16 = var16.spacing;
        var16 = var16.PX_8;
        var11['gap'] = var16;
        var7['emojiRow'] = var11;
        var11 = {'borderRadius': null, 'borderWidth': 2, 'borderColor': 'transparent'};
        var16 = var6[var12];
        var16 = var13.bind(var1)(var16);
        var16 = var16.radii;
        var16 = var16.md;
        var11['borderRadius'] = var16;
        var7['emojiPressable'] = var11;
        var11 = {};
        var16 = var6[var12];
        var16 = var13.bind(var1)(var16);
        var16 = var16.colors;
        var16 = var16.BG_BRAND;
        var11['borderColor'] = var16;
        var7['selectedEmojiPressable'] = var11;
        var11 = {};
        var16 = var6[var12];
        var16 = var13.bind(var1)(var16);
        var16 = var16.radii;
        var16 = var16.sm;
        var11['borderRadius'] = var16;
        var16 = var6[var12];
        var16 = var13.bind(var1)(var16);
        var16 = var16.spacing;
        var16 = var16.PX_8;
        var11['padding'] = var16;
        var11['margin'] = var15;
        var7['emojiWrapper'] = var11;
        var11 = {};
        var15 = var6[var12];
        var15 = var13.bind(var1)(var15);
        var15 = var15.colors;
        var15 = var15.BG_MOD_STRONG;
        var11['backgroundColor'] = var15;
        var7['selectedEmojiWrapper'] = var11;
        var11 = {};
        var15 = var6[var12];
        var15 = var13.bind(var1)(var15);
        var15 = var15.colors;
        var15 = var15.REDESIGN_BUTTON_TERTIARY_TEXT;
        var11['color'] = var15;
        var7['chooseEmojiButton'] = var11;
        var11 = {'backgroundColor': null, 'height': 24, 'width': 24, 'position': 'absolute', 'right': 4294967288, 'bottom': 4294967288, 'borderRadius': null, 'alignItems': 'center', 'justifyContent': 'center', 'borderColor': null, 'borderWidth': 2, 'boxSizing': 'content-box'};
        var15 = var6[var12];
        var15 = var13.bind(var1)(var15);
        var15 = var15.colors;
        var15 = var15.BG_BRAND;
        var11['backgroundColor'] = var15;
        var15 = var6[var12];
        var15 = var13.bind(var1)(var15);
        var15 = var15.radii;
        var15 = var15.round;
        var11['borderRadius'] = var15;
        var11['borderColor'] = var14;
        var7['customReactionOverlay'] = var11;
        var11 = {'height': 12, 'width': 12};
        var12 = var6[var12];
        var12 = var13.bind(var1)(var12);
        var12 = var12.colors;
        var12 = var12.REDESIGN_BUTTON_PRIMARY_TEXT;
        var11['color'] = var12;
        var7['selectedCustomReactionIcon'] = var11;
        var7 = var9.bind(var10)(var7);
        var _closure1_slot12 = var7;
        var9 = var8.memo;
        var7 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var17 = var1.emoji;
                var _closure2_slot0 = var17;
                var2 = var1.onPress;
                var _closure2_slot1 = var2;
                var10 = var1.selected;
                var1 = _closure1_slot12;
                var4 = undefined;
                var11 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 9;
                var1 = var6[var1];
                var8 = var2.bind(var4)(var1);
                var7 = var8.useStateFromStores;
                var1 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() {
                    var1 = _closure1_slot5;
                    var1 = var1.useReducedMotion;
                    return var1;
                };
                var16 = var7.bind(var8)(var3, var1);
                var3 = _closure1_slot9;
                var1 = 10;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var6 = 'button';
                var1['accessibilityRole'] = var6;
                var12 = null;
                var6 = var12 == var17;
                var1['disabled'] = var6;
                var5 = function onPress() {
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onPress'] = var5;
                var6 = var11.emojiPressable;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = undefined;
                if(!var10) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var6 = var11.selectedEmojiPressable;
case 6:
                var5[1] = var6;
                var1['style'] = var5;
                var7 = _closure1_slot9;
                var6 = _closure1_slot4;
                var5 = {};
                var9 = var11.emojiWrapper;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = undefined;
                if(!var10) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var9 = var11.selectedEmojiWrapper;
case 8:
                var8[1] = var9;
                var5['style'] = var8;
                var10 = _closure1_slot9;
                var9 = _closure1_slot1;
                var13 = _closure1_slot2;
                var8 = 11;
                var8 = var13[var8];
                var9 = var9.bind(var4)(var8);
                var8 = {};
                var13 = var11.emoji;
                var8['style'] = var13;
                var13 = var11.customEmoji;
                var8['fastImageStyle'] = var13;
                var11 = var11.textEmoji;
                var8['textEmojiStyle'] = var11;
                var11 = var17.id;
                var13 = var12 == var11;
                var11 = '';
                if(!var13) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var11 = var17.surrogates;
case 10:
                var8['name'] = var11;
                var11 = var17.id;
                if(!(var12 == var11)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var11 = var17.url;
                _fun0002_ip = 14; continue _fun0002;
case 12:
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var12 = 12;
                var12 = var14[var12];
                var14 = var13.bind(var4)(var12);
                var13 = var14.getEmojiURL;
                var12 = {};
                var18 = var17.id;
                var12['id'] = var18;
                var16 = !var16;
                if(!var16) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var16 = var17.animated;
case 15:
                var12['animated'] = var16;
                var15 = _closure1_slot7;
                var12['size'] = var15;
                var11 = var13.bind(var14)(var12);
case 14:
                var8['src'] = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var7 = var9.bind(var8)(var7);
        var _closure1_slot13 = var7;
        var7 = var8.memo;
        var2 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var26 = var2.selectedEmoji;
                var _closure2_slot0 = var26;
                var1 = var2.onPressEmoji;
                var _closure2_slot1 = var1;
                var6 = var2.style;
                var2 = _closure1_slot12;
                var4 = undefined;
                var22 = var2.bind(var4)();
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 13;
                var2 = var10[var2];
                var3 = var7.bind(var4)(var2);
                var2 = var3.useFrequentlyUsedReactionEmojis;
                var8 = var2.bind(var3)(var4);
                var3 = _closure1_slot1;
                var2 = 14;
                var2 = var10[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var12 = var2.width;
                var2 = global;
                var11 = var2.Math;
                var5 = var11.min;
                var3 = _closure1_slot6;
                var11 = var5.bind(var11)(var12, var3);
                var5 = var2.Math;
                var3 = var5.floor;
                var2 = 60;
                var2 = var11 / var2;
                var3 = var3.bind(var5)(var2);
                var2 = 9;
                var2 = var10[var2];
                var12 = var7.bind(var4)(var2);
                var11 = var12.useStateFromStores;
                var2 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() {
                    var1 = _closure1_slot5;
                    var1 = var1.useReducedMotion;
                    return var1;
                };
                var25 = var11.bind(var12)(var5, var2);
                var5 = var8.filter;
                var2 = function(arg1) {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 15;
                    var1 = var3[var1];
                    var5 = undefined;
                    var3 = var2.bind(var5)(var1);
                    var2 = var3.isEmojiFilteredOrLocked;
                    var1 = {};
                    var6 = arg1;
                    var1['emoji'] = var6;
                    var1['channel'] = var5;
                    var4 = _closure1_slot8;
                    var4 = var4.DEFAULT_REACT_EMOJI;
                    var1['intention'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
                var8 = var5.bind(var8)(var2);
                var5 = var8.slice;
                var2 = 1;
                var3 = var3 - var2;
                var2 = 0;
                var8 = var5.bind(var8)(var2, var3);
                var _closure2_slot2 = var8;
                var5 = _closure1_slot3;
                var11 = var5.useMemo;
                var3 = new Array(2);
                var3[0] = var8;
                var3[1] = var26;
                var2 = function() {
                    var3 = _closure2_slot2;
                    var2 = var3.findIndex;
                    var1 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 16;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.areEmojisEqual;
                        var2 = _closure2_slot0;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var11 = var11.bind(var5)(var2, var3);
                var _closure2_slot3 = var11;
                var12 = var5.useCallback;
                var3 = new Array(1);
                var3[0] = var1;
                var2 = function(arg1) {
                    var4 = _closure2_slot1;
                    var1 = undefined;
                    var3 = arg1;
                    var2 = true;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var2 = var12.bind(var5)(var2, var3);
                var _closure2_slot4 = var2;
                var3 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function(arg1) {
                    var4 = _closure2_slot1;
                    var1 = undefined;
                    var3 = arg1;
                    var2 = false;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var1 = var3.bind(var5)(var1, var2);
                var _closure2_slot5 = var1;
                var3 = _closure1_slot11;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = new Array(2);
                var5[0] = var6;
                var6 = var22.emojiRow;
                var5[1] = var6;
                var1['style'] = var5;
                var6 = var8.map;
                var5 = function(arg1, arg2) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = arg1;
                        var6 = arg2;
                        var1 = null;
                        var3 = var1 != var2;
                        if(!var3) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                        var5 = _closure1_slot9;
                        var4 = _closure1_slot13;
                        var3 = {};
                        var3['emoji'] = var2;
                        var7 = _closure2_slot3;
                        var7 = var6 === var7;
                        var3['selected'] = var7;
                        var2 = _closure2_slot4;
                        var3['onPress'] = var2;
                        var2 = undefined;
                        var1 = var5.bind(var2)(var4, var3, var6);
case 17:
                        return var1;
                    }
                };
                var6 = var6.bind(var8)(var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot9;
                var6 = 10;
                var6 = var10[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.PressableOpacity;
                var6 = {};
                var10 = 'button';
                var6['accessibilityRole'] = var10;
                var9 = function onPress() {
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 17;
                    var3 = var7[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var3);
                    var4 = var5.openEmojiPickerActionSheet;
                    var3 = {};
                    var8 = _closure2_slot5;
                    var3['onPressEmoji'] = var8;
                    var3['channel'] = var1;
                    var2 = _closure1_slot8;
                    var2 = var2.DEFAULT_REACT_EMOJI;
                    var3['pickerIntention'] = var2;
                    var2 = 18;
                    var2 = var7[var2];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.ReactionTypes;
                    var2 = var2.NORMAL;
                    var3['reactionType'] = var2;
                    var2 = true;
                    var3['startExpanded'] = var2;
                    var2 = 'stack';
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var6['onPress'] = var9;
                var10 = var22.emojiPressable;
                var9 = new Array(2);
                var9[0] = var10;
                var10 = -1;
                var12 = var10 === var11;
                var10 = var12;
                if(!var12) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var10 = var22.selectedEmojiPressable;
case 19:
                var9[1] = var10;
                var6['style'] = var9;
                var11 = _closure1_slot9;
                var10 = _closure1_slot4;
                var9 = {};
                var14 = var22.emojiWrapper;
                var13 = new Array(2);
                var13[0] = var14;
                var14 = var12;
                if(!var14) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                var14 = var22.selectedEmojiWrapper;
case 21:
                var13[1] = var14;
                var9['style'] = var13;
                if(var12) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                var14 = _closure1_slot9;
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var12 = 19;
                var12 = var15[var12];
                var12 = var13.bind(var4)(var12);
                var13 = var12.ReactionIcon;
                var12 = {};
                var15 = var22.chooseEmojiButton;
                var15 = var15.color;
                var12['color'] = var15;
                var12 = var14.bind(var4)(var13, var12);
                _fun0003_ip = 25; continue _fun0003;
case 23:
                var15 = _closure1_slot11;
                var14 = _closure1_slot10;
                var13 = {};
                var18 = _closure1_slot9;
                var17 = _closure1_slot1;
                var19 = _closure1_slot2;
                var16 = 11;
                var16 = var19[var16];
                var17 = var17.bind(var4)(var16);
                var16 = {};
                var19 = var22.emoji;
                var16['style'] = var19;
                var19 = var22.customEmoji;
                var16['fastImageStyle'] = var19;
                var19 = var22.textEmoji;
                var16['textEmojiStyle'] = var19;
                var19 = var26.id;
                var21 = null;
                var23 = var21 == var19;
                var19 = '';
                if(!var23) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                var19 = var26.surrogates;
case 26:
                var16['name'] = var19;
                var19 = var26.id;
                if(!(var21 == var19)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                var19 = var26.url;
                _fun0003_ip = 30; continue _fun0003;
case 28:
                var23 = _closure1_slot1;
                var24 = _closure1_slot2;
                var21 = 12;
                var21 = var24[var21];
                var24 = var23.bind(var4)(var21);
                var23 = var24.getEmojiURL;
                var21 = {};
                var27 = var26.id;
                var21['id'] = var27;
                var25 = !var25;
                if(!var25) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                var25 = var26.animated;
case 31:
                var21['animated'] = var25;
                var25 = _closure1_slot7;
                var21['size'] = var25;
                var19 = var23.bind(var24)(var21);
case 30:
                var16['src'] = var19;
                var17 = var18.bind(var4)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var19 = _closure1_slot9;
                var18 = _closure1_slot4;
                var17 = {};
                var21 = var22.customReactionOverlay;
                var17['style'] = var21;
                var21 = _closure1_slot0;
                var23 = _closure1_slot2;
                var20 = 19;
                var20 = var23[var20];
                var20 = var21.bind(var4)(var20);
                var21 = var20.ReactionIcon;
                var20 = {};
                var23 = var22.selectedCustomReactionIcon;
                var23 = var23.color;
                var20['color'] = var23;
                var22 = var22.selectedCustomReactionIcon;
                var20['style'] = var22;
                var20 = var19.bind(var4)(var21, var20);
                var17['children'] = var20;
                var17 = var19.bind(var4)(var18, var17);
                var16[1] = var17;
                var13['children'] = var16;
                var12 = var15.bind(var4)(var14, var13);
case 25:
                var9['children'] = var12;
                var9 = var11.bind(var4)(var10, var9);
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var2 = var7.bind(var8)(var2);
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/double_tap_to_react/native/SelectDoubleTapEmojiRow.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();