// app/modules/action_sheet/native/components/EmojiRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ContentDismissActionType;
    var _closure1_slot5 = var7;
    var4 = var4.DismissibleContentGroupName;
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
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var10 = 6;
    var4 = var6[var10];
    var4 = var11.bind(var1)(var4);
    var4 = var4.colors;
    var12 = var4.BG_MOD_STRONG;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': 28, 'height': 28};
    var4['emojiImage'] = var9;
    var9 = {'paddingTop': 5, 'lineHeight': 28, 'fontSize': 28, 'color': null, 'textAlign': 'center', 'width': 28, 'height': 28};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_NORMAL;
    var9['color'] = var13;
    var4['emojiText'] = var9;
    var9 = {'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center'};
    var4['emojiRowContainer'] = var9;
    var9 = {'height': 52, 'alignSelf': 'stretch', 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'marginTop': 0, 'marginBottom': 0};
    var4['emojiRow'] = var9;
    var9 = {'borderRadius': 24, 'overflow': 'hidden'};
    var4['emojiWrapper'] = var9;
    var9 = {'width': 48, 'height': 48, 'alignItems': 'center', 'justifyContent': 'center'};
    var9['backgroundColor'] = var12;
    var4['emojiContainer'] = var9;
    var9 = {};
    var9['backgroundColor'] = var12;
    var4['addReaction'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_NORMAL;
    var9['color'] = var10;
    var4['icon'] = var9;
    var9 = {'marginLeft': 6, 'marginTop': 6};
    var4['sparklingIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = function AddReactionButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.message;
            var _closure2_slot0 = var2;
            var2 = var1.channel;
            var _closure2_slot1 = var2;
            var2 = var1.reactionType;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var1 = _closure1_slot11;
            var13 = var1.bind(var4)();
            var _closure2_slot2 = var13;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 14;
            var5 = var6[var1];
            var7 = var3.bind(var4)(var5);
            var5 = var7.useThemeContext;
            var5 = var5.bind(var7)();
            var5 = var5.theme;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.isThemeLight;
            var3 = var1.bind(var3)(var5);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 6;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.unsafe_rawColors;
            if(var3) { _fun0001_ip = 154; continue _fun0001 }
 146:
            var9 = var1.PRIMARY_300;
            _fun0001_ip = 160; continue _fun0001;
 154:
            var9 = var1.PRIMARY_500;
 160:
            _closure2_slot3 = var9;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 15;
            var1 = var10[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.ReactionTypes;
            var1 = var1.BURST;
            var7 = var2 === var1;
            _closure2_slot4 = var7;
            var1 = 16;
            var3 = var10[var1];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ADD_REACTION_ICONS;
            var3 = var3[var2];
            _closure2_slot5 = var3;
            var1 = var10[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.ADD_REACTION_ICON_COMPONENTS;
            var8 = var1[var2];
            _closure2_slot6 = var8;
            var3 = _closure1_slot9;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var13.emojiWrapper;
            var1['style'] = var5;
            var5 = 17;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.PressableOpacity;
            var5 = {};
            var10 = 'button';
            var5['accessibilityRole'] = var10;
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 18;
            var15 = var17[var10];
            var15 = var14.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var10 = var17[var10];
            var10 = var14.bind(var4)(var10);
            var14 = var10.t;
            if(var7) { _fun0001_ip = 361; continue _fun0001 }
 348:
            var10 = var14.lfIHs7;
            var10 = var15.bind(var16)(var10);
            _fun0001_ip = 374; continue _fun0001;
 361:
            var14 = var14.Kfcszs;
            var10 = var15.bind(var16)(var14);
 374:
            var5['accessibilityLabel'] = var10;
            var10 = function onPress() {
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 16;
                var1 = var9[var1];
                var2 = undefined;
                var6 = var8.bind(var2)(var1);
                var5 = var6.handleAddNewReactions;
                var4 = _closure2_slot1;
                var1 = _closure2_slot0;
                var12 = var1.id;
                var1 = 10;
                var1 = var9[var1];
                var1 = var8.bind(var2)(var1);
                var1 = var1.ReactionLocations;
                var11 = var1.MESSAGE;
                var1 = {};
                var7 = _closure2_slot4;
                var1['burst'] = var7;
                var14 = var6;
                var13 = var4;
                var10 = var1;
                var1 = var14[var5](var13, var12, var11, var10, var9);
                return var1;
            };
            var5['onPress'] = var10;
            var14 = var13.emojiContainer;
            var10 = new Array(2);
            var10[0] = var14;
            var13 = var13.addReaction;
            var10[1] = var13;
            var5['style'] = var10;
            var10 = _closure1_slot9;
            if(var7) { _fun0001_ip = 438; continue _fun0001 }
 424:
            var7 = {};
            var7['color'] = var9;
            var7 = var10.bind(var4)(var8, var7);
            _fun0001_ip = 533; continue _fun0001;
 438:
            var9 = _closure1_slot1;
            var15 = _closure1_slot2;
            var8 = 19;
            var8 = var15[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var14 = _closure1_slot0;
            var13 = 20;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.DismissibleContent;
            var14 = var13.SUPER_REACTIONS_SPARKLES_ACTION_SHEET_MOBILE;
            var13 = new Array(1);
            var13[0] = var14;
            var8['contentTypes'] = var13;
            var12 = _closure1_slot6;
            var12 = var12.SUPER_REACTIONS_SPARKLES;
            var8['groupName'] = var12;
            var11 = function children(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var4 = var1.visibleContent;
                    var1 = var1.markAsDismissed;
                    var _closure3_slot0 = var1;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 20;
                    var1 = var5[var1];
                    var5 = undefined;
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.DismissibleContent;
                    var1 = var1.SUPER_REACTIONS_SPARKLES_ACTION_SHEET_MOBILE;
                    if(!(var4 !== var1)) { _fun0002_ip = 91; continue _fun0002 }
 62:
                    var6 = _closure1_slot9;
                    var4 = _closure2_slot6;
                    var1 = {};
                    var7 = _closure2_slot3;
                    var1['color'] = var7;
                    var1 = var6.bind(var5)(var4, var1);
                    _fun0002_ip = 183; continue _fun0002;
 91:
                    var4 = global;
                    var6 = var4.setTimeout;
                    var4 = function() {
                        var3 = _closure3_slot0;
                        var1 = _closure1_slot5;
                        var2 = var1.UNKNOWN;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3 = 10000;
                    var3 = var6.bind(var5)(var4, var3);
                    var4 = _closure1_slot9;
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 21;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = {};
                    var7 = _closure2_slot2;
                    var7 = var7.sparklingIcon;
                    var2['style'] = var7;
                    var7 = _closure2_slot5;
                    var2['source'] = var7;
                    var6 = _closure2_slot3;
                    var2['color'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
 183:
                    return var1;
                }
            };
            var8['children'] = var11;
            var7 = var10.bind(var4)(var9, var8);
 533:
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var4 = function AddEmojiButton(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var2 = var1.message;
            var _closure2_slot0 = var2;
            var16 = var1.emoji;
            var _closure2_slot1 = var16;
            var1 = _closure1_slot11;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot9;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var11.emojiWrapper;
            var1['style'] = var5;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 17;
            var5 = var12[var5];
            var5 = var9.bind(var4)(var5);
            var6 = var5.PressableOpacity;
            var5 = {};
            var8 = 'button';
            var5['accessibilityRole'] = var8;
            var8 = 18;
            var10 = var12[var8];
            var10 = var9.bind(var4)(var10);
            var13 = var10.intl;
            var10 = var13.formatToPlainString;
            var8 = var12[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.t;
            var9 = var8./iYSo6;
            var8 = {};
            var12 = null;
            var17 = var12 == var16;
            var14 = undefined;
            if(var17) { _fun0003_ip = 154; continue _fun0003 }
 149:
            var14 = var16.name;
 154:
            var8['emojiName'] = var14;
            var8 = var10.bind(var13)(var9, var8);
            var5['accessibilityLabel'] = var8;
            var8 = var12 == var16;
            var5['disabled'] = var8;
            var7 = function onPress() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var8 = _closure2_slot0;
                    var4 = _closure2_slot1;
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.hideActionSheet;
                    var3 = var3.bind(var5)();
                    var3 = null;
                    if(!(var3 != var4)) { _fun0004_ip = 235; continue _fun0004 }
 55:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var6 = 9;
                    var7 = var5[var6];
                    var9 = var3.bind(var1)(var7);
                    var7 = var9.triggerHapticFeedback;
                    var6 = var5[var6];
                    var6 = var3.bind(var1)(var6);
                    var6 = var6.HapticFeedbackTypes;
                    var6 = var6.IMPACT_LIGHT;
                    var6 = var7.bind(var9)(var6);
                    var6 = 10;
                    var6 = var5[var6];
                    var11 = var3.bind(var1)(var6);
                    var10 = var11.addReaction;
                    var9 = var8.channel_id;
                    var7 = var8.id;
                    var6 = 11;
                    var6 = var5[var6];
                    var12 = var3.bind(var1)(var6);
                    var6 = var12.toReactionEmoji;
                    var6 = var6.bind(var12)(var4);
                    var6 = var10.bind(var11)(var9, var7, var6);
                    var6 = _closure1_slot1;
                    var2 = 12;
                    var2 = var5[var2];
                    var7 = var6.bind(var1)(var2);
                    var6 = var7.focusMessage;
                    var2 = {};
                    var9 = var8.channel_id;
                    var2['channelId'] = var9;
                    var8 = var8.id;
                    var2['messageId'] = var8;
                    var2 = var6.bind(var7)(var2);
                    var2 = 13;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.initializeDoubleTapEmojiAndUpsell;
                    var2 = var2.bind(var3)(var4);
 235:
                    return var1;
                }
            };
            var5['onPress'] = var7;
            var7 = var11.emojiContainer;
            var5['style'] = var7;
            var8 = var12 != var16;
            var7 = null;
            if(!var8) { _fun0003_ip = 371; continue _fun0003 }
 210:
            var10 = _closure1_slot9;
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var8 = 22;
            var8 = var13[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var13 = var11.emojiText;
            var8['textEmojiStyle'] = var13;
            var11 = var11.emojiImage;
            var8['fastImageStyle'] = var11;
            var11 = var16.id;
            var13 = var12 == var11;
            var11 = '';
            if(!var13) { _fun0003_ip = 279; continue _fun0003 }
 274:
            var11 = var16.surrogates;
 279:
            var8['name'] = var11;
            var11 = var16.id;
            if(!(var12 == var11)) { _fun0003_ip = 299; continue _fun0003 }
 292:
            var11 = var16.url;
            _fun0003_ip = 360; continue _fun0003;
 299:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 23;
            var12 = var14[var12];
            var14 = var13.bind(var4)(var12);
            var13 = var14.getEmojiURL;
            var12 = {};
            var17 = var16.id;
            var12['id'] = var17;
            var16 = var16.animated;
            var12['animated'] = var16;
            var15 = _closure1_slot7;
            var12['size'] = var15;
            var11 = var13.bind(var14)(var12);
 360:
            var8['src'] = var11;
            var7 = var10.bind(var4)(var9, var8);
 371:
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/action_sheet/native/components/EmojiRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var13 = var1.message;
            var _closure2_slot0 = var13;
            var14 = var1.channel;
            var _closure2_slot1 = var14;
            var1 = _closure1_slot11;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var1 = var14.getGuildId;
            var6 = var1.bind(var14)();
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 25;
            var1 = var5[var1];
            var3 = var2.bind(var4)(var1);
            var1 = var3.useFrequentlyUsedReactionEmojis;
            var3 = var1.bind(var3)(var6);
            var1 = 26;
            var1 = var5[var1];
            var7 = var2.bind(var4)(var1);
            var6 = var7.useDoubleTapToReactExperiment;
            var2 = {};
            var1 = false;
            var2['autoTrackExposure'] = var1;
            var1 = 'EmojiRow';
            var1 = var6.bind(var7)(var1, var2);
            var7 = var1.enabled;
            var2 = _closure1_slot1;
            var1 = 27;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var11 = var1.width;
            var1 = global;
            var6 = var1.Math;
            var5 = var6.min;
            var2 = _closure1_slot4;
            var6 = var5.bind(var6)(var11, var2);
            var5 = var1.Math;
            var2 = var5.floor;
            var1 = 60;
            var1 = var6 / var1;
            var11 = var2.bind(var5)(var1);
            var2 = var3.filter;
            var1 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isEmojiFilteredOrLocked;
                var1 = {};
                var5 = arg1;
                var1['emoji'] = var5;
                var5 = _closure2_slot1;
                var1['channel'] = var5;
                var4 = _closure1_slot8;
                var4 = var4.REACTION;
                var1['intention'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var15 = var2.bind(var3)(var1);
            var1 = var15.length;
            var6 = null;
            if(!(var1 < var11)) { _fun0005_ip = 238; continue _fun0005 }
 219:
            var1 = var15.push;
            var1 = var1.bind(var15)(var6);
            var1 = var15.length;
            if(var1 < var11) { _fun0005_ip = 219; continue _fun0005 }
 238:
            var3 = _closure1_slot10;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var9.emojiRowContainer;
            var1['style'] = var5;
            var5 = {};
            var9 = var9.emojiRow;
            var5['style'] = var9;
            var12 = var15.slice;
            var9 = 1;
            var11 = var11 - var9;
            var9 = 0;
            var11 = var12.bind(var15)(var9, var11);
            var9 = var11.map;
            var8 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var6 = arg1;
                    var5 = arg2;
                    var4 = _closure1_slot9;
                    var3 = _closure1_slot13;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var2['message'] = var7;
                    var2['emoji'] = var6;
                    var7 = null;
                    if(!(var7 != var6)) { _fun0006_ip = 98; continue _fun0006 }
 40:
                    var7 = var6.type;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 24;
                    var8 = var8[var1];
                    var1 = undefined;
                    var1 = var9.bind(var1)(var8);
                    var1 = var1.EmojiTypes;
                    var1 = var1.UNICODE;
                    if(!(var7 !== var1)) { _fun0006_ip = 90; continue _fun0006 }
 83:
                    var1 = var6.id;
                    _fun0006_ip = 95; continue _fun0006;
 90:
                    var1 = var6.surrogates;
 95:
                    var5 = var1;
 98:
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2, var5);
                    return var1;
                }
            };
            var9 = var9.bind(var11)(var8);
            var8 = new Array(2);
            var8[0] = var9;
            var12 = _closure1_slot9;
            var11 = _closure1_slot12;
            var9 = {};
            var9['channel'] = var14;
            var9['message'] = var13;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 15;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.ReactionTypes;
            var13 = var13.NORMAL;
            var9['reactionType'] = var13;
            var9 = var12.bind(var4)(var11, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var8 = var3.bind(var4)(var2, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var6 = null;
            if(!var7) { _fun0005_ip = 467; continue _fun0005 }
 403:
            var9 = _closure1_slot9;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 29;
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.DoubleTapEmojiEditNudge;
            var7 = {};
            var11 = _closure1_slot1;
            var10 = 30;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.MESSAGE_LONG_PRESS_MENU;
            var7['location'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 467:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();