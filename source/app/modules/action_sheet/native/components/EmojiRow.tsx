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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ContentDismissActionType;
    var _closure1_slot7 = var7;
    var4 = var4.DismissibleContentGroupName;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot9 = var7;
    var4 = var4.EmojiIntention;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var10 = 8;
    var4 = var6[var10];
    var4 = var11.bind(var1)(var4);
    var4 = var4.colors;
    var12 = var4.BG_MOD_STRONG;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': 28, 'height': 28};
    var4['emoji'] = var9;
    var9 = {'width': 28, 'height': 28};
    var4['emojiImage'] = var9;
    var9 = {'paddingTop': 5, 'lineHeight': 28, 'fontSize': 28, 'color': null, 'textAlign': 'center'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_NORMAL;
    var9['color'] = var13;
    var4['emojiText'] = var9;
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
    var _closure1_slot13 = var4;
    var4 = function Emoji(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.url;
            var6 = var1.surrogates;
            var1 = _closure1_slot13;
            var5 = undefined;
            var8 = var1.bind(var5)();
            var1 = '';
            if(!(var1 === var7)) { _fun0001_ip = 113; continue _fun0001 }
 34:
            var4 = _closure1_slot11;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 21;
            var1 = var9[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.LegacyText;
            var1 = {};
            var10 = var8.emoji;
            var9 = new Array(2);
            var9[0] = var10;
            var10 = var8.emojiText;
            var9[1] = var10;
            var1['style'] = var9;
            var9 = false;
            var1['allowFontScaling'] = var9;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 192; continue _fun0001;
 113:
            var4 = _closure1_slot11;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 20;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var6 = 'contain';
            var2['resizeMode'] = var6;
            var9 = var8.emoji;
            var6 = new Array(2);
            var6[0] = var9;
            var8 = var8.emojiImage;
            var6[1] = var8;
            var2['style'] = var6;
            var6 = {};
            var6['uri'] = var7;
            var2['source'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 192:
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var4 = function AddReactionButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
            var1 = _closure1_slot13;
            var13 = var1.bind(var4)();
            var _closure2_slot2 = var13;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 22;
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
            var1 = 8;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.unsafe_rawColors;
            if(var3) { _fun0002_ip = 154; continue _fun0002 }
 146:
            var9 = var1.PRIMARY_300;
            _fun0002_ip = 160; continue _fun0002;
 154:
            var9 = var1.PRIMARY_500;
 160:
            _closure2_slot3 = var9;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 23;
            var1 = var10[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.ReactionTypes;
            var1 = var1.BURST;
            var7 = var2 === var1;
            _closure2_slot4 = var7;
            var1 = 24;
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
            var3 = _closure1_slot11;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var13.emojiWrapper;
            var1['style'] = var5;
            var5 = 25;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.PressableOpacity;
            var5 = {};
            var10 = 'button';
            var5['accessibilityRole'] = var10;
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 26;
            var15 = var17[var10];
            var15 = var14.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var10 = var17[var10];
            var10 = var14.bind(var4)(var10);
            var14 = var10.t;
            if(var7) { _fun0002_ip = 361; continue _fun0002 }
 348:
            var10 = var14.lfIHs7;
            var10 = var15.bind(var16)(var10);
            _fun0002_ip = 374; continue _fun0002;
 361:
            var14 = var14.Kfcszs;
            var10 = var15.bind(var16)(var14);
 374:
            var5['accessibilityLabel'] = var10;
            var10 = function onPress() {
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 24;
                var1 = var9[var1];
                var2 = undefined;
                var6 = var8.bind(var2)(var1);
                var5 = var6.handleAddNewReactions;
                var4 = _closure2_slot1;
                var1 = _closure2_slot0;
                var12 = var1.id;
                var1 = 13;
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
            var10 = _closure1_slot11;
            if(var7) { _fun0002_ip = 438; continue _fun0002 }
 424:
            var7 = {};
            var7['color'] = var9;
            var7 = var10.bind(var4)(var8, var7);
            _fun0002_ip = 533; continue _fun0002;
 438:
            var9 = _closure1_slot1;
            var15 = _closure1_slot2;
            var8 = 27;
            var8 = var15[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var14 = _closure1_slot0;
            var13 = 28;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.DismissibleContent;
            var14 = var13.SUPER_REACTIONS_SPARKLES_ACTION_SHEET_MOBILE;
            var13 = new Array(1);
            var13[0] = var14;
            var8['contentTypes'] = var13;
            var12 = _closure1_slot8;
            var12 = var12.SUPER_REACTIONS_SPARKLES;
            var8['groupName'] = var12;
            var11 = function children(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var4 = var1.visibleContent;
                    var1 = var1.markAsDismissed;
                    var _closure3_slot0 = var1;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 28;
                    var1 = var5[var1];
                    var5 = undefined;
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.DismissibleContent;
                    var1 = var1.SUPER_REACTIONS_SPARKLES_ACTION_SHEET_MOBILE;
                    if(!(var4 !== var1)) { _fun0003_ip = 91; continue _fun0003 }
 62:
                    var6 = _closure1_slot11;
                    var4 = _closure2_slot6;
                    var1 = {};
                    var7 = _closure2_slot3;
                    var1['color'] = var7;
                    var1 = var6.bind(var5)(var4, var1);
                    _fun0003_ip = 183; continue _fun0003;
 91:
                    var4 = global;
                    var6 = var4.setTimeout;
                    var4 = function() {
                        var3 = _closure3_slot0;
                        var1 = _closure1_slot7;
                        var2 = var1.UNKNOWN;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3 = 10000;
                    var3 = var6.bind(var5)(var4, var3);
                    var4 = _closure1_slot11;
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 29;
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
    var _closure1_slot15 = var4;
    var4 = function AddEmojiButton(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var2 = var1.message;
            var _closure2_slot0 = var2;
            var16 = var1.emoji;
            var _closure2_slot1 = var16;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var1 = _closure1_slot13;
            var7 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 16;
            var1 = var5[var1];
            var9 = var3.bind(var4)(var1);
            var6 = var9.useDoubleTapToReactExperiment;
            var2 = {};
            var1 = false;
            var2['autoTrackExposure'] = var1;
            var1 = 'EmojiRow';
            var1 = var6.bind(var9)(var1, var2);
            var2 = var1.enabled;
            var1 = 30;
            var1 = var5[var1];
            var6 = var3.bind(var4)(var1);
            var5 = var6.useStateFromStoresObject;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure1_slot5;
                    var1 = var1.settings;
                    var3 = var1.textAndImages;
                    var2 = null;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0005_ip = 36; continue _fun0005 }
 30:
                    var1 = var3.defaultReactionEmoji;
 36:
                    if(!(var2 == var1)) { _fun0005_ip = 42; continue _fun0005 }
 40:
                    var1 = {};
 42:
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var3, var1);
            var5 = var3.emojiId;
            var12 = null;
            var6 = var12 == var5;
            var1 = undefined;
            if(var6) { _fun0004_ip = 160; continue _fun0004 }
 155:
            var1 = var5.value;
 160:
            var1 = var12 == var1;
            if(!var1) { _fun0004_ip = 191; continue _fun0004 }
 167:
            var5 = var3.emojiName;
            var6 = var12 == var5;
            var3 = undefined;
            if(var6) { _fun0004_ip = 187; continue _fun0004 }
 182:
            var3 = var5.value;
 187:
            var1 = var12 == var3;
 191:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 27;
            var3 = var6[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useSelectedDismissibleContent;
            if(!var2) { _fun0004_ip = 223; continue _fun0004 }
 220:
            if(var1) { _fun0004_ip = 229; continue _fun0004 }
 223:
            var2 = new Array(0);
            _fun0004_ip = 272; continue _fun0004;
 229:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 28;
            var1 = var9[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.DismissibleContent;
            var6 = var1.DOUBLE_TAP_TO_REACT_UPSELL;
            var1 = new Array(1);
            var1[0] = var6;
            var2 = var1;
 272:
            var1 = true;
            var3 = var3.bind(var5)(var2, var4, var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var3 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var2 = var3[var1];
            var1 = 1;
            var1 = var3[var1];
            _closure2_slot2 = var1;
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 28;
            var1 = var14[var1];
            var1 = var10.bind(var4)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.DOUBLE_TAP_TO_REACT_UPSELL;
            var1 = var2 === var1;
            _closure2_slot3 = var1;
            var3 = _closure1_slot11;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var7.emojiWrapper;
            var1['style'] = var5;
            var5 = 25;
            var5 = var14[var5];
            var5 = var10.bind(var4)(var5);
            var6 = var5.PressableOpacity;
            var5 = {};
            var9 = 'button';
            var5['accessibilityRole'] = var9;
            var9 = 26;
            var11 = var14[var9];
            var11 = var10.bind(var4)(var11);
            var13 = var11.intl;
            var11 = var13.formatToPlainString;
            var9 = var14[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            var10 = var9./iYSo6;
            var9 = {};
            var17 = var12 == var16;
            var14 = undefined;
            if(var17) { _fun0004_ip = 459; continue _fun0004 }
 454:
            var14 = var16.name;
 459:
            var9['emojiName'] = var14;
            var9 = var11.bind(var13)(var10, var9);
            var5['accessibilityLabel'] = var9;
            var9 = var12 == var16;
            var5['disabled'] = var9;
            var8 = function onPress() {
                var5 = _closure2_slot0;
                var4 = _closure2_slot1;
                var3 = {};
                var2 = _closure2_slot3;
                var3['showDoubleTapUpsell'] = var2;
                var1 = _closure2_slot2;
                var3['markAsDismissed'] = var1;
                var2 = function(arg1, arg2, arg3) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var8 = arg1;
                        var7 = arg2;
                        var3 = arg3;
                        var5 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var9 = 10;
                        var4 = var1[var9];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.hideActionSheet;
                        var4 = var4.bind(var5)();
                        var4 = null;
                        if(!(var4 != var7)) { _fun0006_ip = 460; continue _fun0006 }
 55:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var4 = 11;
                        var4 = var11[var4];
                        var13 = var10.bind(var1)(var4);
                        var12 = var13.triggerHapticFeedback;
                        var5 = _closure1_slot1;
                        var4 = 12;
                        var4 = var11[var4];
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.IMPACT_LIGHT;
                        var4 = var12.bind(var13)(var4);
                        var4 = 13;
                        var4 = var11[var4];
                        var15 = var10.bind(var1)(var4);
                        var14 = var15.addReaction;
                        var13 = var8.channel_id;
                        var12 = var8.id;
                        var4 = 14;
                        var4 = var11[var4];
                        var16 = var10.bind(var1)(var4);
                        var4 = var16.toReactionEmoji;
                        var4 = var4.bind(var16)(var7);
                        var4 = var14.bind(var15)(var13, var12, var4);
                        var4 = 15;
                        var4 = var11[var4];
                        var12 = var5.bind(var1)(var4);
                        var5 = var12.focusMessage;
                        var4 = {};
                        var13 = var8.channel_id;
                        var4['channelId'] = var13;
                        var13 = var8.id;
                        var4['messageId'] = var13;
                        var4 = var5.bind(var12)(var4);
                        var4 = var3.showDoubleTapUpsell;
                        var5 = var3.markAsDismissed;
                        var _closure4_slot0 = var5;
                        var3 = 16;
                        var3 = var11[var3];
                        var12 = var10.bind(var1)(var3);
                        var11 = var12.getDoubleTapToReactExperiment;
                        var10 = {};
                        var3 = true;
                        var10['autoTrackExposure'] = var3;
                        var3 = 'EmojiRow';
                        var10 = var11.bind(var12)(var3, var10);
                        var3 = var10.enabled;
                        var10 = var10.showToast;
                        if(!var3) { _fun0006_ip = 279; continue _fun0006 }
 276:
                        var3 = var4;
 279:
                        if(!var3) { _fun0006_ip = 460; continue _fun0006 }
 285:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        if(var10) { _fun0006_ip = 372; continue _fun0006 }
 296:
                        var9 = var4[var9];
                        var12 = var3.bind(var1)(var9);
                        var11 = var12.openLazy;
                        var9 = _closure1_slot0;
                        var2 = 19;
                        var2 = var4[var2];
                        var10 = var9.bind(var1)(var2);
                        var2 = 18;
                        var9 = var4[var2];
                        var2 = var4.paths;
                        var10 = var10.bind(var1)(var9, var2);
                        var9 = {};
                        var9['emoji'] = var7;
                        var9['markAsDismissed'] = var5;
                        var2 = 'DoubleTapToReactActionSheet';
                        var2 = var11.bind(var12)(var10, var2, var9);
                        _fun0006_ip = 460; continue _fun0006;
 372:
                        var2 = 17;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.enqueueNotification;
                        var2 = {};
                        var9 = 'REACTION_USER_EDU';
                        var2['type'] = var9;
                        var10 = var8.id;
                        var8 = global;
                        var8 = var8.HermesInternal;
                        var9 = var8.concat;
                        var8 = 'reaction_edu_';
                        var8 = var9.bind(var8)(var10);
                        var2['key'] = var8;
                        var2['emoji'] = var7;
                        var6 = function onDismiss() {
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 17;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.clearNotification;
                            var3 = var3.bind(var4)();
                            var3 = _closure4_slot0;
                            var2 = _closure1_slot7;
                            var2 = var2.UNKNOWN;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2['onDismiss'] = var6;
                        var2['markAsDismissed'] = var5;
                        var2 = var3.bind(var4)(var2);
 460:
                        return var1;
                    }
                };
                var1 = undefined;
                var2 = var2.bind(var1)(var5, var4, var3);
                return var1;
            };
            var5['onPress'] = var8;
            var7 = var7.emojiContainer;
            var5['style'] = var7;
            var8 = var12 != var16;
            var7 = null;
            if(!var8) { _fun0004_ip = 632; continue _fun0004 }
 512:
            var10 = _closure1_slot11;
            var9 = _closure1_slot14;
            var8 = {};
            var11 = var16.id;
            var13 = var12 == var11;
            var11 = undefined;
            if(!var13) { _fun0004_ip = 541; continue _fun0004 }
 536:
            var11 = var16.surrogates;
 541:
            var8['surrogates'] = var11;
            var11 = var16.id;
            if(!(var12 == var11)) { _fun0004_ip = 561; continue _fun0004 }
 554:
            var11 = var16.url;
            _fun0004_ip = 622; continue _fun0004;
 561:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 31;
            var12 = var14[var12];
            var14 = var13.bind(var4)(var12);
            var13 = var14.getEmojiURL;
            var12 = {};
            var17 = var16.id;
            var12['id'] = var17;
            var16 = var16.animated;
            var12['animated'] = var16;
            var15 = _closure1_slot9;
            var12['size'] = var15;
            var11 = var13.bind(var14)(var12);
 622:
            var8['url'] = var11;
            var7 = var10.bind(var4)(var9, var8);
 632:
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var4;
    var4 = 38;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/action_sheet/native/components/EmojiRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var10 = var1.message;
            var _closure2_slot0 = var10;
            var11 = var1.channel;
            var _closure2_slot1 = var11;
            var8 = var1.style;
            var1 = _closure1_slot13;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var1 = var11.getGuildId;
            var7 = var1.bind(var11)();
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 33;
            var2 = var14[var1];
            var3 = var15.bind(var4)(var2);
            var2 = var3.useFrequentlyUsedEmojis;
            var3 = var2.bind(var3)(var7);
            var1 = var14[var1];
            var2 = var15.bind(var4)(var1);
            var1 = var2.useFrequentlyUsedReactionEmojis;
            var1 = var1.bind(var2)(var7);
            var2 = 34;
            var2 = var14[var2];
            var13 = var15.bind(var4)(var2);
            var12 = var13.useCanSplitFrecencyList;
            var7 = 'EmojiRow';
            var17 = true;
            var2 = {'location': 'EmojiRow', 'autoTrackExposure': true};
            var2 = var12.bind(var13)(var2);
            var12 = var2.canSplitFrecencyList;
            var13 = 35;
            var2 = var14[var13];
            var18 = var15.bind(var4)(var2);
            var16 = var18.useCanUseReactionFrecency;
            var2 = {'location': 'EmojiRow', 'autoTrackExposure': true};
            var2 = var16.bind(var18)(var2);
            var13 = var14[var13];
            var13 = var15.bind(var4)(var13);
            var16 = var13.RetriggerReactionFrecencyAlgorithmsExperiment;
            var15 = var16.useExperiment;
            var13 = {};
            var13['location'] = var7;
            var7 = {};
            var7['autoTrackExposure'] = var17;
            var7 = var15.bind(var16)(var13, var7);
            var13 = _closure1_slot1;
            var7 = 36;
            var7 = var14[var7];
            var7 = var13.bind(var4)(var7);
            var7 = var7.bind(var4)();
            var16 = var7.width;
            var7 = global;
            var15 = var7.Math;
            var14 = var15.min;
            var13 = _closure1_slot6;
            var15 = var14.bind(var15)(var16, var13);
            var14 = var7.Math;
            var13 = var14.floor;
            var7 = 60;
            var7 = var15 / var7;
            var7 = var13.bind(var14)(var7);
            if(var12) { _fun0007_ip = 306; continue _fun0007 }
 303:
            if(!var2) { _fun0007_ip = 309; continue _fun0007 }
 306:
            var3 = var1;
 309:
            var2 = var3.filter;
            var1 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 37;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isEmojiFilteredOrLocked;
                var1 = {};
                var5 = arg1;
                var1['emoji'] = var5;
                var5 = _closure2_slot1;
                var1['channel'] = var5;
                var4 = _closure1_slot10;
                var4 = var4.REACTION;
                var1['intention'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var12 = var2.bind(var3)(var1);
            var1 = var12.length;
            var2 = null;
            if(!(var1 < var7)) { _fun0007_ip = 356; continue _fun0007 }
 337:
            var1 = var12.push;
            var1 = var1.bind(var12)(var2);
            var1 = var12.length;
            if(var1 < var7) { _fun0007_ip = 337; continue _fun0007 }
 356:
            var3 = _closure1_slot12;
            var2 = _closure1_slot4;
            var1 = {};
            var13 = var6.emojiRow;
            var6 = new Array(2);
            var6[0] = var13;
            var6[1] = var8;
            var1['style'] = var6;
            var8 = var12.slice;
            var6 = 1;
            var7 = var7 - var6;
            var6 = 0;
            var7 = var8.bind(var12)(var6, var7);
            var6 = var7.map;
            var5 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var6 = arg1;
                    var5 = arg2;
                    var4 = _closure1_slot11;
                    var3 = _closure1_slot16;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var2['message'] = var7;
                    var2['emoji'] = var6;
                    var7 = null;
                    if(!(var7 != var6)) { _fun0008_ip = 99; continue _fun0008 }
 41:
                    var7 = var6.type;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 32;
                    var8 = var8[var1];
                    var1 = undefined;
                    var1 = var9.bind(var1)(var8);
                    var1 = var1.EmojiTypes;
                    var1 = var1.UNICODE;
                    if(!(var7 !== var1)) { _fun0008_ip = 91; continue _fun0008 }
 84:
                    var1 = var6.id;
                    _fun0008_ip = 96; continue _fun0008;
 91:
                    var1 = var6.surrogates;
 96:
                    var5 = var1;
 99:
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2, var5);
                    return var1;
                }
            };
            var6 = var6.bind(var7)(var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot15;
            var6 = {};
            var6['channel'] = var11;
            var6['message'] = var10;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 23;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.ReactionTypes;
            var9 = var9.NORMAL;
            var6['reactionType'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();