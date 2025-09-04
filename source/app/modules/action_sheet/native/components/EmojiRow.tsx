// app/modules/action_sheet/native/components/EmojiRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function DoubleTapEmojiNudge() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = _closure1_slot13;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var _closure2_slot0 = var6;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 27;
            var1 = var4[var1];
            var7 = var3.bind(var5)(var1);
            var4 = var7.useStateFromStoresObject;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure1_slot5;
                    var1 = var1.settings;
                    var3 = var1.textAndImages;
                    var2 = null;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 36; continue _fun0002 }
 30:
                    var1 = var3.defaultReactionEmoji;
 36:
                    if(!(var2 == var1)) { _fun0002_ip = 42; continue _fun0002 }
 40:
                    var1 = {};
 42:
                    return var1;
                }
            };
            var1 = var4.bind(var7)(var3, var1);
            var _closure2_slot1 = var1;
            var7 = _closure1_slot3;
            var4 = var7.useMemo;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.disambiguatedEmojiFromProtoValue;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var7)(var1, var3);
            var _closure2_slot2 = var3;
            var8 = _closure1_slot3;
            var7 = var8.useMemo;
            var4 = new Array(1);
            var4[0] = var3;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot2;
                    var2 = null;
                    var3 = var2 == var1;
                    var4 = undefined;
                    var1 = undefined;
                    if(var3) { _fun0003_ip = 29; continue _fun0003 }
 20:
                    var3 = _closure2_slot2;
                    var1 = var3.id;
 29:
                    var2 = var2 != var1;
                    var1 = undefined;
                    if(!var2) { _fun0003_ip = 105; continue _fun0003 }
 38:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 26;
                    var2 = var6[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.getEmojiURL;
                    var2 = {};
                    var5 = _closure2_slot2;
                    var6 = var5.id;
                    var2['id'] = var6;
                    var6 = 16;
                    var2['size'] = var6;
                    var5 = var5.animated;
                    var2['animated'] = var5;
                    var1 = var3.bind(var4)(var2);
 105:
                    return var1;
                }
            };
            var1 = var7.bind(var8)(var1, var4);
            var _closure2_slot3 = var1;
            var1 = null;
            var3 = var1 == var3;
            if(var3) { _fun0001_ip = 281; continue _fun0001 }
 154:
            var4 = _closure1_slot11;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 28;
            var2 = var11[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'color': 'text-secondary', 'variant': 'text-sm/normal'};
            var6 = var6.doubleTapEmojiNudgeText;
            var2['style'] = var6;
            var6 = 20;
            var8 = var11[var6];
            var8 = var7.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.format;
            var6 = var11[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.t;
            var7 = var6.EQnNv7;
            var6 = {};
            var10 = function emojiHook(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var5 = _closure1_slot11;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 25;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = {};
                    var1 = _closure2_slot0;
                    var7 = var1.doubleTapEmojiContainer;
                    var2['style'] = var7;
                    var7 = var1.doubleTapCustomEmoji;
                    var2['fastImageStyle'] = var7;
                    var1 = var1.doubleTapTextEmoji;
                    var2['textEmojiStyle'] = var1;
                    var1 = _closure2_slot3;
                    var2['src'] = var1;
                    var1 = _closure2_slot2;
                    var7 = var1.id;
                    var1 = null;
                    var7 = var1 == var7;
                    var1 = '';
                    if(!var7) { _fun0004_ip = 110; continue _fun0004 }
 101:
                    var6 = _closure2_slot2;
                    var1 = var6.surrogates;
 110:
                    var2['name'] = var1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var6['emojiHook'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 281:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var10 = 2;
    var4 = var6[var10];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ContentDismissActionType;
    var _closure1_slot7 = var7;
    var4 = var4.DismissibleContentGroupName;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot9 = var7;
    var4 = var4.EmojiIntention;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var11 = 7;
    var4 = var6[var11];
    var4 = var12.bind(var1)(var4);
    var4 = var4.colors;
    var13 = var4.BG_MOD_STRONG;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': 28, 'height': 28};
    var4['emojiImage'] = var9;
    var9 = {'paddingTop': 5, 'lineHeight': 28, 'fontSize': 28, 'color': null, 'textAlign': 'center', 'width': 28, 'height': 28};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_NORMAL;
    var9['color'] = var14;
    var4['emojiText'] = var9;
    var9 = {'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center'};
    var4['emojiRowContainer'] = var9;
    var9 = {'height': 52, 'alignSelf': 'stretch', 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'marginTop': 0, 'marginBottom': 0};
    var4['emojiRow'] = var9;
    var9 = {'borderRadius': 24, 'overflow': 'hidden'};
    var4['emojiWrapper'] = var9;
    var9 = {'width': 48, 'height': 48, 'alignItems': 'center', 'justifyContent': 'center'};
    var9['backgroundColor'] = var13;
    var4['emojiContainer'] = var9;
    var9 = {};
    var9['backgroundColor'] = var13;
    var4['addReaction'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_NORMAL;
    var9['color'] = var13;
    var4['icon'] = var9;
    var9 = {'marginLeft': 6, 'marginTop': 6};
    var4['sparklingIcon'] = var9;
    var9 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var9['marginTop'] = var11;
    var4['doubleTapEmojiNudgeText'] = var9;
    var9 = {};
    var9['paddingLeft'] = var10;
    var4['doubleTapEmojiContainer'] = var9;
    var9 = {'fontSize': 12, 'lineHeight': 16, 'width': 16, 'height': 16, 'marginTop': 4};
    var4['doubleTapTextEmoji'] = var9;
    var9 = {'height': 16, 'width': 16, 'marginTop': 4};
    var4['doubleTapCustomEmoji'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = function AddReactionButton(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
            var14 = var1.bind(var4)();
            var _closure2_slot2 = var14;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 16;
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
            var1 = 7;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.unsafe_rawColors;
            if(var3) { _fun0005_ip = 154; continue _fun0005 }
 146:
            var10 = var1.PRIMARY_300;
            _fun0005_ip = 160; continue _fun0005;
 154:
            var10 = var1.PRIMARY_500;
 160:
            _closure2_slot3 = var10;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 17;
            var1 = var11[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.ReactionTypes;
            var1 = var1.BURST;
            var8 = var2 === var1;
            _closure2_slot4 = var8;
            var1 = 18;
            var3 = var11[var1];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ADD_REACTION_ICONS;
            var3 = var3[var2];
            _closure2_slot5 = var3;
            var1 = var11[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.ADD_REACTION_ICON_COMPONENTS;
            var9 = var1[var2];
            _closure2_slot6 = var9;
            var3 = _closure1_slot11;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var14.emojiWrapper;
            var1['style'] = var5;
            var7 = _closure1_slot11;
            var5 = 19;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.PressableOpacity;
            var5 = {};
            var11 = 'button';
            var5['accessibilityRole'] = var11;
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = 20;
            var16 = var18[var11];
            var16 = var15.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var11 = var18[var11];
            var11 = var15.bind(var4)(var11);
            var15 = var11.t;
            if(var8) { _fun0005_ip = 365; continue _fun0005 }
 352:
            var11 = var15.lfIHs7;
            var11 = var16.bind(var17)(var11);
            _fun0005_ip = 378; continue _fun0005;
 365:
            var15 = var15.Kfcszs;
            var11 = var16.bind(var17)(var15);
 378:
            var5['accessibilityLabel'] = var11;
            var11 = function onPress() {
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 18;
                var1 = var9[var1];
                var2 = undefined;
                var6 = var8.bind(var2)(var1);
                var5 = var6.handleAddNewReactions;
                var4 = _closure2_slot1;
                var1 = _closure2_slot0;
                var12 = var1.id;
                var1 = 12;
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
            var5['onPress'] = var11;
            var15 = var14.emojiContainer;
            var11 = new Array(2);
            var11[0] = var15;
            var14 = var14.addReaction;
            var11[1] = var14;
            var5['style'] = var11;
            var11 = _closure1_slot11;
            if(var8) { _fun0005_ip = 442; continue _fun0005 }
 428:
            var8 = {};
            var8['color'] = var10;
            var8 = var11.bind(var4)(var9, var8);
            _fun0005_ip = 537; continue _fun0005;
 442:
            var10 = _closure1_slot1;
            var16 = _closure1_slot2;
            var9 = 21;
            var9 = var16[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var15 = _closure1_slot0;
            var14 = 22;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.DismissibleContent;
            var15 = var14.SUPER_REACTIONS_SPARKLES_ACTION_SHEET_MOBILE;
            var14 = new Array(1);
            var14[0] = var15;
            var9['contentTypes'] = var14;
            var13 = _closure1_slot8;
            var13 = var13.SUPER_REACTIONS_SPARKLES;
            var9['groupName'] = var13;
            var12 = function children(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = arg1;
                    var4 = var1.visibleContent;
                    var1 = var1.markAsDismissed;
                    var _closure3_slot0 = var1;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 22;
                    var1 = var5[var1];
                    var5 = undefined;
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.DismissibleContent;
                    var1 = var1.SUPER_REACTIONS_SPARKLES_ACTION_SHEET_MOBILE;
                    if(!(var4 !== var1)) { _fun0006_ip = 91; continue _fun0006 }
 62:
                    var6 = _closure1_slot11;
                    var4 = _closure2_slot6;
                    var1 = {};
                    var7 = _closure2_slot3;
                    var1['color'] = var7;
                    var1 = var6.bind(var5)(var4, var1);
                    _fun0006_ip = 183; continue _fun0006;
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
                    var2 = 23;
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
            var9['children'] = var12;
            var8 = var11.bind(var4)(var10, var9);
 537:
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var4 = function AddEmojiButton(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var2 = var1.message;
            var _closure2_slot0 = var2;
            var17 = var1.emoji;
            var _closure2_slot1 = var17;
            var1 = _closure1_slot13;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 24;
            var1 = var13[var1];
            var3 = var10.bind(var4)(var1);
            var2 = var3.useDoubleTapToReactUpsell;
            var1 = 'EmojiRow';
            var1 = var2.bind(var3)(var1);
            var2 = var1.showDoubleTapUpsell;
            var _closure2_slot2 = var2;
            var1 = var1.markAsDismissed;
            var _closure2_slot3 = var1;
            var3 = _closure1_slot11;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var12.emojiWrapper;
            var1['style'] = var5;
            var7 = _closure1_slot11;
            var5 = 19;
            var5 = var13[var5];
            var5 = var10.bind(var4)(var5);
            var6 = var5.PressableOpacity;
            var5 = {};
            var9 = 'button';
            var5['accessibilityRole'] = var9;
            var9 = 20;
            var11 = var13[var9];
            var11 = var10.bind(var4)(var11);
            var14 = var11.intl;
            var11 = var14.formatToPlainString;
            var9 = var13[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            var10 = var9./iYSo6;
            var9 = {};
            var13 = null;
            var18 = var13 == var17;
            var15 = undefined;
            if(var18) { _fun0007_ip = 206; continue _fun0007 }
 201:
            var15 = var17.name;
 206:
            var9['emojiName'] = var15;
            var9 = var11.bind(var14)(var10, var9);
            var5['accessibilityLabel'] = var9;
            var9 = var13 == var17;
            var5['disabled'] = var9;
            var8 = function onPress() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var8 = _closure2_slot0;
                    var5 = _closure2_slot1;
                    var4 = {};
                    var2 = _closure2_slot2;
                    var4['showDoubleTapUpsell'] = var2;
                    var1 = _closure2_slot3;
                    var4['markAsDismissed'] = var1;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var3);
                    var3 = var6.hideActionSheet;
                    var3 = var3.bind(var6)();
                    var3 = null;
                    if(!(var3 != var5)) { _fun0008_ip = 276; continue _fun0008 }
 75:
                    var13 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 10;
                    var3 = var7[var3];
                    var10 = var13.bind(var1)(var3);
                    var9 = var10.triggerHapticFeedback;
                    var6 = _closure1_slot1;
                    var3 = 11;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.IMPACT_LIGHT;
                    var3 = var9.bind(var10)(var3);
                    var3 = 12;
                    var3 = var7[var3];
                    var12 = var13.bind(var1)(var3);
                    var11 = var12.addReaction;
                    var10 = var8.channel_id;
                    var9 = var8.id;
                    var3 = 13;
                    var3 = var7[var3];
                    var13 = var13.bind(var1)(var3);
                    var3 = var13.toReactionEmoji;
                    var3 = var3.bind(var13)(var5);
                    var3 = var11.bind(var12)(var10, var9, var3);
                    var3 = 14;
                    var3 = var7[var3];
                    var7 = var6.bind(var1)(var3);
                    var6 = var7.focusMessage;
                    var3 = {};
                    var9 = var8.channel_id;
                    var3['channelId'] = var9;
                    var8 = var8.id;
                    var3['messageId'] = var8;
                    var3 = var6.bind(var7)(var3);
                    var3 = var4.showDoubleTapUpsell;
                    var4 = var4.markAsDismissed;
                    if(!var3) { _fun0008_ip = 276; continue _fun0008 }
 244:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 15;
                    var2 = var6[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.initializeDoubleTapEmojiAndUpsell;
                    var2 = var2.bind(var3)(var5, var4);
 276:
                    return var1;
                }
            };
            var5['onPress'] = var8;
            var8 = var12.emojiContainer;
            var5['style'] = var8;
            var9 = var13 != var17;
            var8 = null;
            if(!var9) { _fun0007_ip = 423; continue _fun0007 }
 262:
            var11 = _closure1_slot11;
            var10 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 25;
            var9 = var14[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var14 = var12.emojiText;
            var9['textEmojiStyle'] = var14;
            var12 = var12.emojiImage;
            var9['fastImageStyle'] = var12;
            var12 = var17.id;
            var14 = var13 == var12;
            var12 = '';
            if(!var14) { _fun0007_ip = 331; continue _fun0007 }
 326:
            var12 = var17.surrogates;
 331:
            var9['name'] = var12;
            var12 = var17.id;
            if(!(var13 == var12)) { _fun0007_ip = 351; continue _fun0007 }
 344:
            var12 = var17.url;
            _fun0007_ip = 412; continue _fun0007;
 351:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 26;
            var13 = var15[var13];
            var15 = var14.bind(var4)(var13);
            var14 = var15.getEmojiURL;
            var13 = {};
            var18 = var17.id;
            var13['id'] = var18;
            var17 = var17.animated;
            var13['animated'] = var17;
            var16 = _closure1_slot9;
            var13['size'] = var16;
            var12 = var14.bind(var15)(var13);
 412:
            var9['src'] = var12;
            var8 = var11.bind(var4)(var10, var9);
 423:
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var4 = 36;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/action_sheet/native/components/EmojiRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var13 = var1.message;
            var _closure2_slot0 = var13;
            var14 = var1.channel;
            var _closure2_slot1 = var14;
            var1 = _closure1_slot13;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var1 = var14.getGuildId;
            var5 = var1.bind(var14)();
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 30;
            var2 = var12[var1];
            var3 = var8.bind(var4)(var2);
            var2 = var3.useFrequentlyUsedEmojis;
            var3 = var2.bind(var3)(var5);
            var1 = var12[var1];
            var2 = var8.bind(var4)(var1);
            var1 = var2.useFrequentlyUsedReactionEmojis;
            var1 = var1.bind(var2)(var5);
            var2 = 31;
            var2 = var12[var2];
            var6 = var8.bind(var4)(var2);
            var5 = var6.useCanSplitFrecencyList;
            var15 = 'EmojiRow';
            var18 = true;
            var2 = {'location': 'EmojiRow', 'autoTrackExposure': true};
            var2 = var5.bind(var6)(var2);
            var5 = var2.canSplitFrecencyList;
            var6 = 32;
            var2 = var12[var6];
            var16 = var8.bind(var4)(var2);
            var11 = var16.useCanUseReactionFrecency;
            var2 = {'location': 'EmojiRow', 'autoTrackExposure': true};
            var2 = var11.bind(var16)(var2);
            var6 = var12[var6];
            var6 = var8.bind(var4)(var6);
            var17 = var6.RetriggerReactionFrecencyAlgorithmsExperiment;
            var16 = var17.useExperiment;
            var11 = {};
            var11['location'] = var15;
            var6 = {};
            var6['autoTrackExposure'] = var18;
            var6 = var16.bind(var17)(var11, var6);
            var6 = 33;
            var6 = var12[var6];
            var11 = var8.bind(var4)(var6);
            var8 = var11.useDoubleTapToReactExperiment;
            var6 = {};
            var16 = false;
            var6['autoTrackExposure'] = var16;
            var6 = var8.bind(var11)(var15, var6);
            var8 = var6.enabled;
            var11 = _closure1_slot1;
            var6 = 34;
            var6 = var12[var6];
            var6 = var11.bind(var4)(var6);
            var6 = var6.bind(var4)();
            var16 = var6.width;
            var6 = global;
            var15 = var6.Math;
            var12 = var15.min;
            var11 = _closure1_slot6;
            var15 = var12.bind(var15)(var16, var11);
            var12 = var6.Math;
            var11 = var12.floor;
            var6 = 60;
            var6 = var15 / var6;
            var11 = var11.bind(var12)(var6);
            if(var5) { _fun0009_ip = 339; continue _fun0009 }
 336:
            if(!var2) { _fun0009_ip = 342; continue _fun0009 }
 339:
            var3 = var1;
 342:
            var2 = var3.filter;
            var1 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 35;
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
            var15 = var2.bind(var3)(var1);
            var1 = var15.length;
            var6 = null;
            if(!(var1 < var11)) { _fun0009_ip = 389; continue _fun0009 }
 370:
            var1 = var15.push;
            var1 = var1.bind(var15)(var6);
            var1 = var15.length;
            if(var1 < var11) { _fun0009_ip = 370; continue _fun0009 }
 389:
            var3 = _closure1_slot12;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var10.emojiRowContainer;
            var1['style'] = var5;
            var5 = {};
            var10 = var10.emojiRow;
            var5['style'] = var10;
            var12 = var15.slice;
            var10 = 1;
            var11 = var11 - var10;
            var10 = 0;
            var11 = var12.bind(var15)(var10, var11);
            var10 = var11.map;
            var9 = function(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var6 = arg1;
                    var5 = arg2;
                    var4 = _closure1_slot11;
                    var3 = _closure1_slot15;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var2['message'] = var7;
                    var2['emoji'] = var6;
                    var7 = null;
                    if(!(var7 != var6)) { _fun0010_ip = 99; continue _fun0010 }
 41:
                    var7 = var6.type;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 29;
                    var8 = var8[var1];
                    var1 = undefined;
                    var1 = var9.bind(var1)(var8);
                    var1 = var1.EmojiTypes;
                    var1 = var1.UNICODE;
                    if(!(var7 !== var1)) { _fun0010_ip = 91; continue _fun0010 }
 84:
                    var1 = var6.id;
                    _fun0010_ip = 96; continue _fun0010;
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
            var10 = var10.bind(var11)(var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot11;
            var11 = _closure1_slot14;
            var10 = {};
            var10['channel'] = var14;
            var10['message'] = var13;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 17;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.ReactionTypes;
            var13 = var13.NORMAL;
            var10['reactionType'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var5['children'] = var9;
            var9 = var3.bind(var4)(var2, var5);
            var5 = new Array(2);
            var5[0] = var9;
            var6 = null;
            if(!var8) { _fun0009_ip = 570; continue _fun0009 }
 554:
            var9 = _closure1_slot11;
            var8 = _closure1_slot16;
            var7 = {};
            var6 = var9.bind(var4)(var8, var7);
 570:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();