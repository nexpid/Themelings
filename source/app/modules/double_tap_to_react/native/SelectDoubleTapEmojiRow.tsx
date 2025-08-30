// app/modules/double_tap_to_react/native/SelectDoubleTapEmojiRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var12 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var12;
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
        var7 = var4.bind(var1)(var7);
        var _closure1_slot3 = var7;
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot4 = var4;
        var14 = 2;
        var4 = var6[var14];
        var4 = var5.bind(var1)(var4);
        var13 = var4.ACTION_SHEET_BACKGROUND_COLOR;
        var4 = var4.ACTION_SHEET_MAX_WIDTH;
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.EMOJI_URL_BASE_SIZE;
        var _closure1_slot6 = var8;
        var4 = var4.EmojiIntention;
        var _closure1_slot7 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.jsx;
        var _closure1_slot8 = var8;
        var8 = var4.Fragment;
        var _closure1_slot9 = var8;
        var4 = var4.jsxs;
        var _closure1_slot10 = var4;
        var4 = 5;
        var4 = var6[var4];
        var9 = var5.bind(var1)(var4);
        var8 = var9.createStyles;
        var4 = {};
        var16 = 24;
        var10 = {'width': 24, 'height': 24};
        var4['emoji'] = var10;
        var10 = {'width': 24, 'height': 24};
        var4['customEmoji'] = var10;
        var10 = {};
        var11 = 6;
        var15 = var6[var11];
        var17 = var5.bind(var1)(var15);
        var15 = var17.isIOS;
        var17 = var15.bind(var17)();
        var15 = 20;
        if(!var17) { _fun0001_ip = 292; continue _fun0001 }
 289:
        var15 = var16;
 292:
        var10['fontSize'] = var15;
        var11 = var6[var11];
        var15 = var5.bind(var1)(var11);
        var11 = var15.isIOS;
        var15 = var11.bind(var15)();
        var11 = undefined;
        if(!var15) { _fun0001_ip = 324; continue _fun0001 }
 321:
        var11 = 28;
 324:
        var10['lineHeight'] = var11;
        var11 = 'center';
        var10['textAlign'] = var11;
        var4['textEmoji'] = var10;
        var10 = {};
        var10['textAlign'] = var11;
        var4['alignCenter'] = var10;
        var10 = {};
        var11 = 'row';
        var10['flexDirection'] = var11;
        var11 = 7;
        var15 = var6[var11];
        var15 = var12.bind(var1)(var15);
        var15 = var15.spacing;
        var15 = var15.PX_8;
        var10['gap'] = var15;
        var4['emojiRow'] = var10;
        var10 = {'borderRadius': null, 'borderWidth': 2, 'borderColor': 'transparent'};
        var15 = var6[var11];
        var15 = var12.bind(var1)(var15);
        var15 = var15.radii;
        var15 = var15.md;
        var10['borderRadius'] = var15;
        var4['emojiPressable'] = var10;
        var10 = {};
        var15 = var6[var11];
        var15 = var12.bind(var1)(var15);
        var15 = var15.colors;
        var15 = var15.BG_BRAND;
        var10['borderColor'] = var15;
        var4['selectedEmojiPressable'] = var10;
        var10 = {};
        var15 = var6[var11];
        var15 = var12.bind(var1)(var15);
        var15 = var15.radii;
        var15 = var15.sm;
        var10['borderRadius'] = var15;
        var15 = var6[var11];
        var15 = var12.bind(var1)(var15);
        var15 = var15.spacing;
        var15 = var15.PX_8;
        var10['padding'] = var15;
        var10['margin'] = var14;
        var4['emojiWrapper'] = var10;
        var10 = {};
        var14 = var6[var11];
        var14 = var12.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.BG_MOD_STRONG;
        var10['backgroundColor'] = var14;
        var4['selectedEmojiWrapper'] = var10;
        var10 = {};
        var14 = var6[var11];
        var14 = var12.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.REDESIGN_BUTTON_TERTIARY_TEXT;
        var10['color'] = var14;
        var4['chooseEmojiButton'] = var10;
        var10 = {'backgroundColor': null, 'height': 24, 'width': 24, 'position': 'absolute', 'right': 4294967288, 'bottom': 4294967288, 'borderRadius': null, 'alignItems': 'center', 'justifyContent': 'center', 'borderColor': null, 'borderWidth': 2, 'boxSizing': 'content-box'};
        var14 = var6[var11];
        var14 = var12.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.BG_BRAND;
        var10['backgroundColor'] = var14;
        var14 = var6[var11];
        var14 = var12.bind(var1)(var14);
        var14 = var14.radii;
        var14 = var14.round;
        var10['borderRadius'] = var14;
        var10['borderColor'] = var13;
        var4['customReactionOverlay'] = var10;
        var10 = {'height': 12, 'width': 12};
        var11 = var6[var11];
        var11 = var12.bind(var1)(var11);
        var11 = var11.colors;
        var11 = var11.REDESIGN_BUTTON_PRIMARY_TEXT;
        var10['color'] = var11;
        var4['selectedCustomReactionIcon'] = var10;
        var4 = var8.bind(var9)(var4);
        var _closure1_slot11 = var4;
        var8 = var7.memo;
        var4 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var16 = var1.emoji;
                var _closure2_slot0 = var16;
                var2 = var1.onPress;
                var _closure2_slot1 = var2;
                var10 = var1.selected;
                var1 = _closure1_slot11;
                var4 = undefined;
                var11 = var1.bind(var4)();
                var3 = _closure1_slot8;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 8;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var6 = 'button';
                var1['accessibilityRole'] = var6;
                var13 = null;
                var6 = var13 == var16;
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
                if(!var10) { _fun0002_ip = 129; continue _fun0002 }
 123:
                var6 = var11.selectedEmojiPressable;
 129:
                var5[1] = var6;
                var1['style'] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot4;
                var5 = {};
                var9 = var11.emojiWrapper;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = undefined;
                if(!var10) { _fun0002_ip = 172; continue _fun0002 }
 166:
                var9 = var11.selectedEmojiWrapper;
 172:
                var8[1] = var9;
                var5['style'] = var8;
                var10 = _closure1_slot8;
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                var8 = 9;
                var8 = var12[var8];
                var9 = var9.bind(var4)(var8);
                var8 = {};
                var12 = var11.emoji;
                var8['style'] = var12;
                var12 = var11.customEmoji;
                var8['fastImageStyle'] = var12;
                var11 = var11.textEmoji;
                var8['textEmojiStyle'] = var11;
                var11 = var16.id;
                var14 = var13 == var11;
                var11 = '';
                var12 = var11;
                if(!var14) { _fun0002_ip = 262; continue _fun0002 }
 257:
                var12 = var16.surrogates;
 262:
                var8['name'] = var12;
                var12 = var16.id;
                var12 = var13 != var12;
                if(!var12) { _fun0002_ip = 339; continue _fun0002 }
 278:
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var12 = 10;
                var12 = var14[var12];
                var14 = var13.bind(var4)(var12);
                var13 = var14.getEmojiURL;
                var12 = {};
                var17 = var16.id;
                var12['id'] = var17;
                var16 = var16.animated;
                var12['animated'] = var16;
                var15 = _closure1_slot6;
                var12['size'] = var15;
                var11 = var13.bind(var14)(var12);
 339:
                var8['src'] = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var4 = var8.bind(var7)(var4);
        var _closure1_slot12 = var4;
        var4 = var7.memo;
        var2 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var25 = var1.selectedEmoji;
                var _closure2_slot0 = var25;
                var2 = var1.onPressEmoji;
                var _closure2_slot1 = var2;
                var6 = var1.style;
                var1 = _closure1_slot11;
                var4 = undefined;
                var22 = var1.bind(var4)();
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 11;
                var1 = var10[var1];
                var2 = var7.bind(var4)(var1);
                var1 = var2.useFrequentlyUsedReactionEmojis;
                var5 = var1.bind(var2)(var4);
                var2 = _closure1_slot1;
                var1 = 12;
                var1 = var10[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.bind(var4)();
                var11 = var1.width;
                var1 = global;
                var8 = var1.Math;
                var3 = var8.min;
                var2 = _closure1_slot5;
                var8 = var3.bind(var8)(var11, var2);
                var3 = var1.Math;
                var2 = var3.floor;
                var1 = 60;
                var1 = var8 / var1;
                var2 = var2.bind(var3)(var1);
                var3 = var5.filter;
                var1 = function(arg1) {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var5 = undefined;
                    var3 = var2.bind(var5)(var1);
                    var2 = var3.isEmojiFilteredOrLocked;
                    var1 = {};
                    var6 = arg1;
                    var1['emoji'] = var6;
                    var1['channel'] = var5;
                    var4 = _closure1_slot7;
                    var4 = var4.DEFAULT_REACT_EMOJI;
                    var1['intention'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
                var5 = var3.bind(var5)(var1);
                var3 = var5.slice;
                var1 = 1;
                var2 = var2 - var1;
                var1 = 0;
                var8 = var3.bind(var5)(var1, var2);
                var _closure2_slot2 = var8;
                var5 = _closure1_slot3;
                var3 = var5.useMemo;
                var2 = new Array(2);
                var2[0] = var8;
                var2[1] = var25;
                var1 = function() {
                    var3 = _closure2_slot2;
                    var2 = var3.findIndex;
                    var1 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
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
                var11 = var3.bind(var5)(var1, var2);
                var _closure2_slot3 = var11;
                var3 = _closure1_slot10;
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
 0:
                        var2 = arg1;
                        var6 = arg2;
                        var1 = null;
                        var3 = var1 != var2;
                        if(!var3) { _fun0004_ip = 66; continue _fun0004 }
 15:
                        var5 = _closure1_slot8;
                        var4 = _closure1_slot12;
                        var3 = {};
                        var3['emoji'] = var2;
                        var7 = _closure2_slot3;
                        var7 = var6 === var7;
                        var3['selected'] = var7;
                        var2 = _closure2_slot1;
                        var3['onPress'] = var2;
                        var2 = undefined;
                        var1 = var5.bind(var2)(var4, var3, var6);
 66:
                        return var1;
                    }
                };
                var6 = var6.bind(var8)(var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot8;
                var6 = 8;
                var6 = var10[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.PressableOpacity;
                var6 = {};
                var10 = 'button';
                var6['accessibilityRole'] = var10;
                var9 = function onPress() {
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 15;
                    var3 = var7[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var3);
                    var4 = var5.openEmojiPickerActionSheet;
                    var3 = {};
                    var8 = _closure2_slot1;
                    var3['onPressEmoji'] = var8;
                    var3['channel'] = var1;
                    var2 = _closure1_slot7;
                    var2 = var2.DEFAULT_REACT_EMOJI;
                    var3['pickerIntention'] = var2;
                    var2 = 16;
                    var2 = var7[var2];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.ReactionTypes;
                    var2 = var2.NORMAL;
                    var3['reactionType'] = var2;
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
                if(!var12) { _fun0003_ip = 361; continue _fun0003 }
 355:
                var10 = var22.selectedEmojiPressable;
 361:
                var9[1] = var10;
                var6['style'] = var9;
                var11 = _closure1_slot8;
                var10 = _closure1_slot4;
                var9 = {};
                var14 = var22.emojiWrapper;
                var13 = new Array(2);
                var13[0] = var14;
                var14 = var12;
                if(!var14) { _fun0003_ip = 405; continue _fun0003 }
 399:
                var14 = var22.selectedEmojiWrapper;
 405:
                var13[1] = var14;
                var9['style'] = var13;
                if(var12) { _fun0003_ip = 474; continue _fun0003 }
 416:
                var14 = _closure1_slot8;
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var12 = 17;
                var12 = var15[var12];
                var12 = var13.bind(var4)(var12);
                var13 = var12.ReactionIcon;
                var12 = {};
                var15 = var22.chooseEmojiButton;
                var15 = var15.color;
                var12['color'] = var15;
                var12 = var14.bind(var4)(var13, var12);
                _fun0003_ip = 767; continue _fun0003;
 474:
                var15 = _closure1_slot10;
                var14 = _closure1_slot9;
                var13 = {};
                var18 = _closure1_slot8;
                var17 = _closure1_slot1;
                var19 = _closure1_slot2;
                var16 = 9;
                var16 = var19[var16];
                var17 = var17.bind(var4)(var16);
                var16 = {};
                var19 = var22.emoji;
                var16['style'] = var19;
                var19 = var22.customEmoji;
                var16['fastImageStyle'] = var19;
                var19 = var22.textEmoji;
                var16['textEmojiStyle'] = var19;
                var19 = var25.id;
                var23 = null;
                var24 = var23 == var19;
                var19 = '';
                var21 = var19;
                if(!var24) { _fun0003_ip = 568; continue _fun0003 }
 563:
                var21 = var25.surrogates;
 568:
                var16['name'] = var21;
                var21 = var25.id;
                var21 = var23 != var21;
                if(!var21) { _fun0003_ip = 645; continue _fun0003 }
 584:
                var23 = _closure1_slot1;
                var24 = _closure1_slot2;
                var21 = 10;
                var21 = var24[var21];
                var24 = var23.bind(var4)(var21);
                var23 = var24.getEmojiURL;
                var21 = {};
                var26 = var25.id;
                var21['id'] = var26;
                var25 = var25.animated;
                var21['animated'] = var25;
                var25 = _closure1_slot6;
                var21['size'] = var25;
                var19 = var23.bind(var24)(var21);
 645:
                var16['src'] = var19;
                var17 = var18.bind(var4)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var19 = _closure1_slot8;
                var18 = _closure1_slot4;
                var17 = {};
                var21 = var22.customReactionOverlay;
                var17['style'] = var21;
                var21 = _closure1_slot0;
                var23 = _closure1_slot2;
                var20 = 17;
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
 767:
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
        var2 = var4.bind(var7)(var2);
        var4 = 18;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/double_tap_to_react/native/SelectDoubleTapEmojiRow.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();