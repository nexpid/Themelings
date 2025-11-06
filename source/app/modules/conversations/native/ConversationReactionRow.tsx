// app/modules/conversations/native/ConversationReactionRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function AddEmojiButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var13 = var2.channel;
            var _closure2_slot0 = var13;
            var12 = var2.onPressEmoji;
            var _closure2_slot1 = var12;
            var6 = var2.showText;
            var5 = var2.disabled;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var2 = _closure1_slot17;
            var10 = var2.bind(var4)();
            var11 = _closure1_slot4;
            var9 = var11.useContext;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 12;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ConversationContext;
            var11 = var9.bind(var11)(var2);
            var2 = 13;
            var2 = var8[var2];
            var8 = var3.bind(var4)(var2);
            var3 = var8.useConversationInteractionHandler;
            var9 = null;
            var14 = var9 == var11;
            var2 = undefined;
            if(var14) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var11.conversationProps;
case 2:
            var11 = var3.bind(var8)(var2);
            _closure2_slot2 = var11;
            var8 = _closure1_slot4;
            var3 = var8.useCallback;
            var2 = new Array(3);
            var2[0] = var13;
            var2[1] = var12;
            var2[2] = var11;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    var2 = 'press_reaction_picker';
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openEmojiPickerActionSheet;
                    var2 = {'pickerIntention': null, 'autoFocus': false, 'startExpanded': false};
                    var5 = _closure1_slot12;
                    var5 = var5.REACTION;
                    var2['pickerIntention'] = var5;
                    var5 = _closure2_slot1;
                    var2['onPressEmoji'] = var5;
                    var7 = _closure2_slot0;
                    var2['channel'] = var7;
                    var5 = null;
                    var7 = var5 == var7;
                    var5 = undefined;
                    if(var7) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = _closure2_slot0;
                    var5 = var6.guild_id;
case 4:
                    var2['guildId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var8 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot14;
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 15;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var1['onPress'] = var8;
            var11 = var10.emojiContainer;
            var8 = new Array(3);
            var8[0] = var11;
            var11 = var10.addEmojiContainer;
            var8[1] = var11;
            var9 = null;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var10.disabled;
case 6:
            var8[2] = var9;
            var1['style'] = var8;
            var8 = true;
            var1['accessible'] = var8;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var14 = 16;
            var9 = var10[var14];
            var9 = var8.bind(var4)(var9);
            var12 = var9.intl;
            var11 = var12.string;
            var9 = var10[var14];
            var9 = var8.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.lfIHs4;
            var9 = var11.bind(var12)(var9);
            var1['accessibilityLabel'] = var9;
            var1['disabled'] = var5;
            var9 = _closure1_slot13;
            var5 = 17;
            var5 = var10[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.ReactionIcon;
            var5 = {};
            var10 = 'sm';
            var5['size'] = var10;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = _closure1_slot13;
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 18;
            var7 = var10[var7];
            var7 = var13.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-sm/semibold', 'color': 'redesign-button-tertiary-text'};
            var11 = var10[var14];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var10[var14];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.m9O1gd;
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 8:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function EmojiReaction(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var22 = var2.messageId;
            var _closure2_slot0 = var22;
            var23 = var2.channel;
            var _closure2_slot1 = var23;
            var19 = var2.reaction;
            var _closure2_slot2 = var19;
            var15 = var2.count;
            var14 = var2.isBurstReaction;
            var _closure2_slot3 = var14;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var2 = _closure1_slot17;
            var17 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 19;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useEmojiColorPalette;
            var2 = var19.burst_colors;
            var12 = null;
            if(!(var12 == var2)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var2 = new Array(0);
case 10:
            var3 = var3.bind(var5)(var2);
            var8 = _closure1_slot4;
            var7 = var8.useContext;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 12;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.ConversationContext;
            var7 = var7.bind(var8)(var2);
            var2 = 13;
            var2 = var6[var2];
            var6 = var5.bind(var4)(var2);
            var5 = var6.useConversationInteractionHandler;
            var8 = var12 == var7;
            var2 = undefined;
            if(var8) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var2 = var7.conversationProps;
case 12:
            var18 = var5.bind(var6)(var2);
            _closure2_slot4 = var18;
            var10 = {};
            var5 = var12 != var3;
            var7 = '';
            var2 = var7;
            if(!var5) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 20;
            var5 = var8[var5];
            var11 = var6.bind(var4)(var5);
            var8 = var11.hex2rgb;
            var5 = var12 == var3;
            var6 = undefined;
            if(var5) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var6 = var3.backgroundColor;
case 16:
            var5 = var12 == var3;
            var13 = undefined;
            if(var5) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var13 = var3.opacity;
case 18:
            var16 = var12 != var13;
            var5 = 0.15;
            if(!var16) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var5 = var13;
case 20:
            var5 = var8.bind(var11)(var6, var5);
            var6 = var12 != var5;
            var2 = var7;
            if(!var6) { _fun0003_ip = 14; continue _fun0003 }
case 22:
            var2 = var5;
case 14:
            var10['backgroundColor'] = var2;
            var5 = var12 == var3;
            var2 = undefined;
            if(var5) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var2 = var3.backgroundColor;
case 23:
            var10['borderColor'] = var2;
            var5 = var12 == var3;
            var2 = undefined;
            if(var5) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var2 = var3.accentColor;
case 25:
            var2 = var12 != var2;
            var13 = null;
            if(!var2) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var2 = {};
            var3 = var3.accentColor;
            var2['color'] = var3;
            var13 = var2;
case 27:
            var20 = var19.emoji;
            _closure2_slot5 = var20;
            if(var14) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var11 = var19.me;
            _fun0003_ip = 31; continue _fun0003;
case 29:
            var11 = var19.me_burst;
case 31:
            var8 = undefined;
            if(!var11) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var8 = var17.selected;
case 32:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 21;
            var3 = var7[var3];
            var16 = var2.bind(var4)(var3);
            var6 = var16.useStateFromStores;
            var3 = _closure1_slot8;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var3 = var1.guild_id;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                    var4 = _closure1_slot8;
                    var3 = var4.canChatInGuild;
                    var2 = _closure2_slot1;
                    var2 = var2.guild_id;
                    var1 = var3.bind(var4)(var2);
case 34:
                    return var1;
                }
            };
            var5 = var6.bind(var16)(var5, var3);
            var21 = _closure1_slot4;
            var16 = var21.useMemo;
            var6 = new Array(1);
            var6[0] = var20;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var2 = var1.id;
                    var1 = null;
                    var2 = var1 != var2;
                    var5 = undefined;
                    var1 = undefined;
                    if(!var2) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var2 = {};
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 22;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.getEmojiURL;
                    var3 = {};
                    var7 = _closure2_slot5;
                    var7 = var7.id;
                    var3['id'] = var7;
                    var6 = _closure2_slot5;
                    var6 = var6.animated;
                    var3['animated'] = var6;
                    var6 = 48;
                    var3['size'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var2['uri'] = var3;
                    var1 = var2;
case 36:
                    return var1;
                }
            };
            var21 = var16.bind(var21)(var3, var6);
            var16 = _closure1_slot4;
            var6 = var16.useCallback;
            var3 = new Array(5);
            var3[0] = var23;
            var3[1] = var14;
            var3[2] = var22;
            var3[3] = var19;
            var3[4] = var18;
            var1 = function() {
                var4 = _closure2_slot4;
                var1 = undefined;
                var3 = 'press_reaction';
                var3 = var4.bind(var1)(var3);
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 23;
                var3 = var10[var3];
                var8 = var9.bind(var1)(var3);
                var7 = var8.handleAddOrRemoveReaction;
                var6 = _closure2_slot0;
                var14 = _closure2_slot1;
                var13 = _closure2_slot2;
                var12 = _closure2_slot3;
                var2 = 24;
                var2 = var10[var2];
                var2 = var9.bind(var1)(var2);
                var2 = var2.ReactionLocations;
                var11 = var2.MESSAGE;
                var16 = var8;
                var15 = var6;
                var2 = var16[var7](var15, var14, var13, var12, var11, var10);
                return var1;
            };
            var6 = var6.bind(var16)(var1, var3);
            var3 = _closure1_slot14;
            var1 = 15;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var16 = var17.emojiContainer;
            var7 = new Array(3);
            var7[0] = var16;
            var7[1] = var8;
            var8 = var14;
            if(!var8) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var8 = var10;
case 38:
            var7[2] = var8;
            var1['style'] = var7;
            var1['onPress'] = var6;
            var16 = true;
            var1['accessible'] = var16;
            var6 = var20.name;
            var1['accessibilityLabel'] = var6;
            var5 = !var5;
            var1['disabled'] = var5;
            var7 = _closure1_slot13;
            var6 = _closure1_slot5;
            var5 = {};
            var10 = var17.innerEmojiContainer;
            var8 = new Array(2);
            var8[0] = var10;
            var10 = var11;
            if(!var11) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var10 = var17.selectedInnerEmojiContainer;
case 40:
            var8[1] = var10;
            var5['style'] = var8;
            var8 = var20.id;
            if(!(var12 != var8)) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var10 = _closure1_slot0;
            var18 = _closure1_slot2;
            var8 = 10;
            var8 = var18[var8];
            var10 = var10.bind(var4)(var8);
            var8 = var10.isAndroid;
            var8 = var8.bind(var10)();
            var19 = _closure1_slot13;
            if(var8) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var10 = _closure1_slot1;
            var18 = _closure1_slot2;
            var8 = 25;
            var8 = var18[var8];
            var10 = var10.bind(var4)(var8);
            var8 = {};
            var8['emoji'] = var20;
            var18 = _closure1_slot16;
            var8['size'] = var18;
            var18 = var17.defaultEmoji;
            var8['style'] = var18;
            var8['animate'] = var16;
            var8 = var19.bind(var4)(var10, var8);
            _fun0003_ip = 46; continue _fun0003;
case 44:
            var18 = _closure1_slot6;
            var10 = {};
            var23 = var17.defaultEmoji;
            var22 = new Array(2);
            var22[0] = var23;
            var23 = var17.emojiImage;
            var22[1] = var23;
            var10['style'] = var22;
            var10['source'] = var21;
            var8 = var19.bind(var4)(var18, var10);
case 46:
            _fun0003_ip = 47; continue _fun0003;
case 42:
            var19 = _closure1_slot13;
            var18 = _closure1_slot0;
            var21 = _closure1_slot2;
            var10 = 18;
            var10 = var21[var10];
            var10 = var18.bind(var4)(var10);
            var18 = var10.Text;
            var10 = {'variant': 'text-md/medium', 'color': 'interactive-normal', 'style': null, 'allowFontScaling': false};
            var22 = var17.defaultEmoji;
            var21 = new Array(2);
            var21[0] = var22;
            var22 = var17.emojiText;
            var21[1] = var22;
            var10['style'] = var21;
            var20 = var20.name;
            var10['children'] = var20;
            var8 = var19.bind(var4)(var18, var10);
case 47:
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot5;
            var6 = {};
            var18 = var17.innerTextContainer;
            var10 = new Array(2);
            var10[0] = var18;
            if(!var11) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var11 = var17.selectedInnerTextContainer;
case 48:
            var10[1] = var11;
            var6['style'] = var10;
            var11 = _closure1_slot13;
            var10 = _closure1_slot1;
            var17 = _closure1_slot2;
            var9 = 26;
            var9 = var17[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['animate'] = var16;
            var9['count'] = var15;
            var12 = null;
            if(!var14) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var12 = var13;
case 50:
            var9['textStyle'] = var12;
            var12 = 'text-md/semibold';
            var9['textVariant'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function ForwardButton(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var7 = var1.onPress;
            var6 = var1.disabled;
            var1 = _closure1_slot17;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot13;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 15;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var1['onPress'] = var7;
            var8 = var9.emojiContainer;
            var7 = new Array(3);
            var7[0] = var8;
            var8 = var9.addEmojiContainer;
            var7[1] = var8;
            var8 = null;
            if(!var6) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var8 = var9.disabled;
case 52:
            var7[2] = var8;
            var1['style'] = var7;
            var7 = true;
            var1['accessible'] = var7;
            var1['disabled'] = var6;
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 16;
            var7 = var8[var6];
            var7 = var10.bind(var4)(var7);
            var9 = var7.intl;
            var7 = var9.string;
            var6 = var8[var6];
            var6 = var10.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.xIUfJS;
            var6 = var7.bind(var9)(var6);
            var1['accessibilityLabel'] = var6;
            var7 = _closure1_slot13;
            var6 = _closure1_slot1;
            var5 = 27;
            var5 = var8[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var8 = 'sm';
            var5['size'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function ReplyButton(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var7 = var1.onPress;
            var6 = var1.disabled;
            var1 = _closure1_slot17;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot13;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 15;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var1['onPress'] = var7;
            var8 = var9.emojiContainer;
            var7 = new Array(3);
            var7[0] = var8;
            var8 = var9.addEmojiContainer;
            var7[1] = var8;
            var8 = null;
            if(!var6) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var8 = var9.disabled;
case 52:
            var7[2] = var8;
            var1['style'] = var7;
            var7 = true;
            var1['accessible'] = var7;
            var1['disabled'] = var6;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 16;
            var9 = var8[var7];
            var9 = var6.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var8[var7];
            var7 = var6.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.5NwaNY;
            var7 = var9.bind(var10)(var7);
            var1['accessibilityLabel'] = var7;
            var7 = _closure1_slot13;
            var5 = 28;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.ArrowAngleLeftUpIcon;
            var5 = {};
            var8 = 'sm';
            var5['size'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function ThreadAsCommentsButton(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var12 = var1.parentMessage;
            var _closure2_slot0 = var12;
            var2 = var1.threadData;
            var _closure2_slot1 = var2;
            var8 = var1.style;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var1 = _closure1_slot17;
            var16 = var1.bind(var5)();
            var9 = _closure1_slot4;
            var7 = var9.useContext;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 12;
            var1 = var6[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.ConversationContext;
            var9 = var7.bind(var9)(var1);
            var1 = 13;
            var1 = var6[var1];
            var7 = var3.bind(var5)(var1);
            var6 = var7.useConversationInteractionHandler;
            var1 = null;
            var11 = var1 == var9;
            var3 = undefined;
            if(var11) { _fun0008_ip = 54; continue _fun0008 }
case 55:
            var3 = var9.conversationProps;
case 54:
            var11 = var6.bind(var7)(var3);
            _closure2_slot2 = var11;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 21;
            var3 = var7[var3];
            var9 = var6.bind(var5)(var3);
            var7 = var9.useStateFromStores;
            var3 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var4 = _closure1_slot9;
                var3 = var4.canWithPartialContext;
                var1 = _closure1_slot10;
                var2 = var1.VIEW_CHANNEL;
                var1 = {};
                var5 = _closure2_slot0;
                var5 = var5.id;
                var1['channelId'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var7.bind(var9)(var6, var3);
            var9 = _closure1_slot4;
            var7 = var9.useCallback;
            var6 = new Array(3);
            var6[0] = var12;
            var12 = var2.thread;
            var6[1] = var12;
            var6[2] = var11;
            var4 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = _closure2_slot2;
                    var1 = undefined;
                    var2 = 'press_comments';
                    var2 = var4.bind(var1)(var2);
                    var2 = _closure2_slot0;
                    var5 = null;
                    var2 = var5 != var2;
                    if(!var2) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                    var4 = _closure2_slot1;
                    var4 = var4.thread;
                    var2 = var5 != var4;
case 56:
                    if(!var2) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 29;
                    var2 = var5[var2];
                    var6 = var4.bind(var1)(var2);
                    var5 = var6.navigateToMessage;
                    var2 = _closure2_slot0;
                    var4 = var2.getChannelId;
                    var4 = var4.bind(var2)();
                    var3 = _closure2_slot1;
                    var3 = var3.thread;
                    var3 = var3.guild_id;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var4, var3, var2);
case 58:
                    return var1;
                }
            };
            var6 = var7.bind(var9)(var4, var6);
            if(!var3) { _fun0008_ip = 60; continue _fun0008 }
case 61:
            var4 = var2.messageCount;
            var3 = 0;
            if(!(var3 !== var4)) { _fun0008_ip = 60; continue _fun0008 }
case 62:
            var3 = var2.thread;
            if(!(var1 != var3)) { _fun0008_ip = 18; continue _fun0008 }
case 63:
            var3 = var2.mostRecentMessage;
            if(!(var1 == var3)) { _fun0008_ip = 64; continue _fun0008 }
case 18:
            var7 = _closure1_slot13;
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var3 = 15;
            var3 = var17[var3];
            var3 = var14.bind(var5)(var3);
            var4 = var3.PressableHighlight;
            var3 = {};
            var11 = var16.comments;
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var8;
            var3['style'] = var9;
            var3['onPress'] = var6;
            var12 = _closure1_slot13;
            var11 = _closure1_slot5;
            var9 = {};
            var13 = var16.commentCount;
            var9['style'] = var13;
            var15 = _closure1_slot13;
            var13 = 30;
            var13 = var17[var13];
            var13 = var14.bind(var5)(var13);
            var14 = var13.ChatIcon;
            var13 = {};
            var17 = var16.commentsIcon;
            var13['style'] = var17;
            var13 = var15.bind(var5)(var14, var13);
            var9['children'] = var13;
            var9 = var12.bind(var5)(var11, var9);
            var3['children'] = var9;
            var3 = var7.bind(var5)(var4, var3);
            return var3;
case 64:
            var4 = var2.messageCount;
            var3 = 9;
            var3 = var4 > var3;
            var13 = '9+';
            if(var3) { _fun0008_ip = 65; continue _fun0008 }
case 66:
            var13 = var2.messageCount;
case 65:
            var4 = _closure1_slot13;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 15;
            var2 = var14[var2];
            var2 = var11.bind(var5)(var2);
            var3 = var2.PressableHighlight;
            var2 = {};
            var9 = var16.comments;
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var8;
            var2['style'] = var7;
            var2['onPress'] = var6;
            var8 = _closure1_slot14;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var16.commentCount;
            var6['style'] = var9;
            var15 = _closure1_slot13;
            var9 = 30;
            var9 = var14[var9];
            var9 = var11.bind(var5)(var9);
            var12 = var9.ChatIcon;
            var9 = {};
            var16 = var16.commentsIcon;
            var9['style'] = var16;
            var12 = var15.bind(var5)(var12, var9);
            var9 = new Array(2);
            var9[0] = var12;
            var12 = _closure1_slot13;
            var10 = 18;
            var10 = var14[var10];
            var10 = var11.bind(var5)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-md/semibold', 'color': 'text-primary'};
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 60:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function ConversationReactionRowBase(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var38 = var1.message;
            var _closure2_slot0 = var38;
            var29 = var1.channel;
            var _closure2_slot1 = var29;
            var8 = var1.guild;
            var24 = var1.hideAdditionalButtons;
            var5 = undefined;
            if(!(var24 === var5)) { _fun0010_ip = 67; continue _fun0010 }
case 68:
            var24 = false;
case 67:
            var _closure2_slot2 = var24;
            var10 = var1.isKeyMessage;
            if(!(var10 === var5)) { _fun0010_ip = 69; continue _fun0010 }
case 70:
            var10 = false;
case 69:
            var _closure2_slot3 = var10;
            var7 = var1.inForum;
            if(!(var7 === var5)) { _fun0010_ip = 71; continue _fun0010 }
case 72:
            var7 = false;
case 71:
            var11 = var1.backgroundVariant;
            if(!(var11 === var5)) { _fun0010_ip = 73; continue _fun0010 }
case 74:
            var11 = 'primary';
case 73:
            var _closure2_slot4 = var11;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var1 = _closure1_slot17;
            var22 = var1.bind(var5)();
            var6 = _closure1_slot4;
            var4 = var6.useContext;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.ConversationContext;
            var4 = var4.bind(var6)(var1);
            var1 = 13;
            var1 = var3[var1];
            var3 = var2.bind(var5)(var1);
            var2 = var3.useConversationInteractionHandler;
            var16 = null;
            var6 = var16 == var4;
            var1 = undefined;
            if(var6) { _fun0010_ip = 75; continue _fun0010 }
case 76:
            var1 = var4.conversationProps;
case 75:
            var1 = var2.bind(var3)(var1);
            _closure2_slot5 = var1;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 31;
            var2 = var6[var2];
            var4 = var3.bind(var5)(var2);
            var2 = var4.useThread;
            var39 = var2.bind(var4)(var8, var38, var7);
            _closure2_slot6 = var39;
            var8 = _closure1_slot4;
            var7 = var8.useMemo;
            var2 = var38.reactions;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var1 = new Array(0);
                var _closure3_slot0 = var1;
                var3 = _closure2_slot0;
                var4 = var3.reactions;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var4 = arg1;
                        var2 = var4.me_vote;
                        var1 = null;
                        if(!(var1 == var2)) { _fun0011_ip = 77; continue _fun0011 }
case 78:
                        var1 = var4.burst_count;
                        var2 = 0;
                        if(!(var1 > var2)) { _fun0011_ip = 36; continue _fun0011 }
case 79:
                        var5 = _closure3_slot0;
                        var3 = var5.push;
                        var1 = {};
                        var10 = var1;
                        var9 = var4;
                        var6 = copyDataProperties(var10, var9);
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var6 = 32;
                        var7 = var7[var6];
                        var6 = undefined;
                        var6 = var8.bind(var6)(var7);
                        var6 = var6.ReactionTypes;
                        var7 = var6.BURST;
                        var6 = 'type';
                        var1[var6] = var7;
                        var1 = var3.bind(var5)(var1);
case 36:
                        var1 = var4.count;
                        if(!(var1 > var2)) { _fun0011_ip = 77; continue _fun0011 }
case 80:
                        var3 = _closure3_slot0;
                        var2 = var3.push;
                        var1 = {};
                        var10 = var1;
                        var9 = var4;
                        var4 = copyDataProperties(var10, var9);
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 32;
                        var5 = var5[var4];
                        var4 = undefined;
                        var4 = var6.bind(var4)(var5);
                        var4 = var4.ReactionTypes;
                        var5 = var4.NORMAL;
                        var4 = 'type';
                        var1[var4] = var5;
                        var1 = var2.bind(var3)(var1);
case 77:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var30 = var7.bind(var8)(var2, var4);
            _closure2_slot7 = var30;
            var8 = _closure1_slot4;
            var7 = var8.useMemo;
            var4 = new Array(1);
            var4[0] = var29;
            var2 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0012_ip = 59; continue _fun0012 }
case 81:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 33;
                    var3 = var4[var3];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var3);
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 59:
                    return var1;
                }
            };
            var23 = var7.bind(var8)(var2, var4);
            var2 = 34;
            var2 = var6[var2];
            var4 = var3.bind(var5)(var2);
            var2 = var4.useCanForwardMessage;
            var42 = var2.bind(var4)(var38);
            _closure2_slot8 = var42;
            var2 = 21;
            var2 = var6[var2];
            var8 = var3.bind(var5)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var4 = _closure1_slot9;
                var3 = var4.can;
                var1 = _closure1_slot10;
                var2 = var1.SEND_MESSAGES;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var41 = var7.bind(var8)(var4, var2);
            _closure2_slot9 = var41;
            var8 = _closure1_slot4;
            var7 = var8.useMemo;
            var4 = new Array(5);
            var4[0] = var24;
            var2 = var39.messageCount;
            var4[1] = var2;
            var2 = var30.length;
            var4[2] = var2;
            var4[3] = var41;
            var4[4] = var42;
            var2 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var3 = 3;
                    if(!var1) { _fun0013_ip = 81; continue _fun0013 }
case 82:
                    var3 = 6;
case 81:
                    var1 = _closure2_slot6;
                    var1 = var1.messageCount;
                    var4 = 0;
                    var2 = var3;
                    if(!(var1 > var4)) { _fun0013_ip = 67; continue _fun0013 }
case 83:
                    var1 = 1;
                    var2 = var3 - var1;
case 67:
                    var1 = _closure2_slot7;
                    var1 = var1.length;
                    var1 = var1 > var2;
                    var3 = 0;
                    if(!var1) { _fun0013_ip = 84; continue _fun0013 }
case 85:
                    var1 = _closure2_slot7;
                    var1 = var1.length;
                    var3 = var1 - var2;
case 84:
                    var1 = _closure2_slot6;
                    var1 = var1.messageCount;
                    var2 = var1 > var4;
                    var1 = {};
                    var3 = var3 > var4;
                    var1['hasOverflow'] = var3;
                    var3 = _closure2_slot2;
                    var3 = !var3;
                    if(!var3) { _fun0013_ip = 3; continue _fun0013 }
case 11:
                    var4 = _closure2_slot9;
                    if(var4) { _fun0013_ip = 86; continue _fun0013 }
case 80:
                    var4 = _closure2_slot8;
case 86:
                    var3 = var4;
case 3:
                    var1['showReplyForwardButtons'] = var3;
                    var1['showThreadAsComments'] = var2;
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var2, var4);
            var17 = var2.hasOverflow;
            var34 = var2.showReplyForwardButtons;
            var35 = var2.showThreadAsComments;
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var2 = var29.id;
            var4 = new Array(3);
            var4[0] = var2;
            var2 = var38.id;
            var4[1] = var2;
            var4[2] = var1;
            var2 = function(arg1, arg2) {
                var4 = _closure2_slot5;
                var1 = undefined;
                var3 = 'press_reaction';
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 35;
                var3 = var5[var3];
                var7 = var4.bind(var1)(var3);
                var6 = var7.onAddReaction;
                var3 = _closure2_slot1;
                var11 = var3.id;
                var2 = _closure2_slot0;
                var10 = var2.id;
                var9 = arg1;
                var8 = arg2;
                var12 = var7;
                var2 = var12[var6](var11, var10, var9, var8, var7);
                return var1;
            };
            var28 = var7.bind(var8)(var2, var4);
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var4 = new Array(2);
            var4[0] = var38;
            var4[1] = var1;
            var2 = function() {
                var3 = _closure2_slot5;
                var1 = undefined;
                var2 = 'press_forward';
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 36;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openForwardModal;
                var2 = {};
                var5 = _closure2_slot0;
                var2['message'] = var5;
                var5 = 'icymi-tab';
                var2['source'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var43 = var7.bind(var8)(var2, var4);
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var4 = new Array(3);
            var4[0] = var29;
            var4[1] = var38;
            var4[2] = var1;
            var2 = function() {
                var4 = _closure2_slot5;
                var1 = undefined;
                var3 = 'press_reply';
                var3 = var4.bind(var1)(var3);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = 29;
                var5 = var4[var5];
                var10 = var3.bind(var1)(var5);
                var9 = var10.navigateToMessage;
                var6 = _closure2_slot1;
                var8 = var6.id;
                var7 = var6.guild_id;
                var5 = _closure2_slot0;
                var2 = var5.id;
                var2 = var9.bind(var10)(var8, var7, var2);
                var2 = 37;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.createPendingReply;
                var2 = {};
                var2['channel'] = var6;
                var2['message'] = var5;
                var5 = true;
                var2['shouldMention'] = var5;
                var2['showMentionToggle'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var44 = var7.bind(var8)(var2, var4);
            var2 = 38;
            var2 = var6[var2];
            var4 = var3.bind(var5)(var2);
            var2 = var4.useConversationBackgroundColors;
            var2 = var2.bind(var4)();
            var9 = var2.primaryBackground;
            _closure2_slot10 = var9;
            var2 = var2.secondaryBackground;
            _closure2_slot11 = var2;
            var8 = _closure1_slot4;
            var7 = var8.useMemo;
            var4 = new Array(4);
            var4[0] = var11;
            var4[1] = var10;
            var4[2] = var9;
            var4[3] = var2;
            var2 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0014_ip = 87; continue _fun0014 }
case 88:
                    var3 = _closure2_slot4;
                    var2 = 'primary';
                    if(!(var2 !== var3)) { _fun0014_ip = 89; continue _fun0014 }
case 90:
                    var2 = 'secondary';
                    if(!(var2 !== var3)) { _fun0014_ip = 91; continue _fun0014 }
case 79:
                    var2 = 'base';
                    if(!(var2 !== var3)) { _fun0014_ip = 67; continue _fun0014 }
case 92:
                    var2 = undefined;
                    return var2;
case 67:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.colors;
                    var2 = var2.BG_BASE_PRIMARY;
                    return var2;
case 91:
                    var2 = _closure2_slot11;
                    return var2;
case 89:
                    var1 = _closure2_slot10;
                    return var1;
case 87:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.colors;
                    var1 = var1.BACKGROUND_MESSAGE_HIGHLIGHT;
                    return var1;
                }
            };
            var4 = var7.bind(var8)(var2, var4);
            var2 = 39;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useToken;
            var25 = var2.bind(var3)(var4);
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var31 = true;
            var4 = var2.bind(var3)(var31);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var5)(var4, var2);
            var27 = 0;
            var15 = var3[var27];
            var2 = 1;
            var2 = var3[var2];
            _closure2_slot12 = var2;
            var6 = _closure1_slot4;
            var4 = var6.useCallback;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var2 = var1.contentOffset;
                var4 = var2.x;
                var2 = var1.contentSize;
                var2 = var2.width;
                var1 = var1.layoutMeasurement;
                var1 = var1.width;
                var3 = _closure2_slot12;
                var1 = var4 + var1;
                var2 = var1 >= var2;
                var1 = undefined;
                var2 = !var2;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var26 = var4.bind(var6)(var3, var2);
            var4 = _closure1_slot4;
            var3 = var4.useCallback;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure2_slot5;
                var1 = undefined;
                var2 = 'scroll_reaction_row';
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var20 = var3.bind(var4)(var1, var2);
            var1 = var30.length;
            if(!(var27 === var1)) { _fun0010_ip = 93; continue _fun0010 }
case 46:
            var1 = null;
            if(var24) { _fun0010_ip = 94; continue _fun0010 }
case 93:
            var4 = _closure1_slot13;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var22.container;
            var2['style'] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var22.emojisRowContainer;
            var6['style'] = var9;
            var9 = var30.length;
            if(!(!(var9 > var27))) { _fun0010_ip = 95; continue _fun0010 }
case 96:
            var9 = null;
            if(!var23) { _fun0010_ip = 97; continue _fun0010 }
case 95:
            var12 = _closure1_slot14;
            var11 = _closure1_slot5;
            var10 = {};
            var14 = var22.emojisContainer;
            var13 = new Array(1);
            var13[0] = var14;
            var10['style'] = var13;
            var18 = _closure1_slot14;
            var14 = _closure1_slot7;
            var13 = {};
            var13['horizontal'] = var31;
            var13['scrollEnabled'] = var17;
            var31 = {};
            var32 = 6;
            var31['gap'] = var32;
            var13['contentContainerStyle'] = var31;
            var13['onScroll'] = var26;
            var13['onScrollEndDrag'] = var20;
            var20 = false;
            var13['showsHorizontalScrollIndicator'] = var20;
            var26 = !var24;
            if(!var26) { _fun0010_ip = 98; continue _fun0010 }
case 99:
            var20 = var34;
            if(var34) { _fun0010_ip = 100; continue _fun0010 }
case 101:
            var20 = var35;
case 100:
            var26 = var20;
case 98:
            if(!var26) { _fun0010_ip = 102; continue _fun0010 }
case 103:
            var32 = _closure1_slot14;
            var31 = _closure1_slot5;
            var20 = {};
            var33 = var22.replyForwardButtonContainer;
            var20['style'] = var33;
            if(!var35) { _fun0010_ip = 104; continue _fun0010 }
case 51:
            var37 = _closure1_slot13;
            var36 = _closure1_slot22;
            var33 = {};
            var33['threadData'] = var39;
            var33['parentMessage'] = var38;
            var35 = var37.bind(var5)(var36, var33);
case 104:
            var33 = new Array(2);
            var33[0] = var35;
            if(!var34) { _fun0010_ip = 105; continue _fun0010 }
case 106:
            var37 = _closure1_slot14;
            var36 = _closure1_slot15;
            var35 = {};
            var40 = _closure1_slot13;
            var39 = _closure1_slot21;
            var38 = {};
            var38['onPress'] = var44;
            var41 = !var41;
            var38['disabled'] = var41;
            var39 = var40.bind(var5)(var39, var38);
            var38 = new Array(2);
            var38[0] = var39;
            var41 = _closure1_slot13;
            var40 = _closure1_slot20;
            var39 = {};
            var39['onPress'] = var43;
            var42 = !var42;
            var39['disabled'] = var42;
            var39 = var41.bind(var5)(var40, var39);
            var38[1] = var39;
            var35['children'] = var38;
            var34 = var37.bind(var5)(var36, var35);
case 105:
            var33[1] = var34;
            var20['children'] = var33;
            var26 = var32.bind(var5)(var31, var20);
case 102:
            var20 = new Array(3);
            var20[0] = var26;
            var26 = var30.map;
            var21 = function(arg1, arg2) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var8 = arg1;
                    var5 = _closure1_slot13;
                    var4 = _closure1_slot5;
                    var3 = {};
                    var6 = _closure1_slot19;
                    var1 = {};
                    var9 = _closure2_slot0;
                    var9 = var9.id;
                    var1['messageId'] = var9;
                    var2 = _closure2_slot1;
                    var1['channel'] = var2;
                    var1['reaction'] = var8;
                    var11 = var8.type;
                    var12 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var10 = 32;
                    var9 = var2[var10];
                    var2 = undefined;
                    var9 = var12.bind(var2)(var9);
                    var9 = var9.ReactionTypes;
                    var9 = var9.BURST;
                    if(!(var11 !== var9)) { _fun0015_ip = 107; continue _fun0015 }
case 108:
                    var9 = var8.count;
                    _fun0015_ip = 11; continue _fun0015;
case 107:
                    var9 = var8.burst_count;
case 11:
                    var1['count'] = var9;
                    var8 = var8.type;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var10];
                    var7 = var9.bind(var2)(var7);
                    var7 = var7.ReactionTypes;
                    var7 = var7.BURST;
                    var7 = var8 === var7;
                    var1['isBurstReaction'] = var7;
                    var1 = var5.bind(var2)(var6, var1);
                    var3['children'] = var1;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var6 = 'reaction-';
                    var1 = arg2;
                    var1 = var7.bind(var6)(var1);
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var21 = var26.bind(var30)(var21);
            var20[1] = var21;
            var21 = null;
            if(var24) { _fun0010_ip = 109; continue _fun0010 }
case 110:
            var21 = null;
            if(!var23) { _fun0010_ip = 109; continue _fun0010 }
case 111:
            var26 = _closure1_slot13;
            var24 = _closure1_slot18;
            var23 = {};
            var23['channel'] = var29;
            var23['onPressEmoji'] = var28;
            var21 = var26.bind(var5)(var24, var23);
case 109:
            var20[2] = var21;
            var13['children'] = var20;
            var14 = var18.bind(var5)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var14 = null;
            if(!var17) { _fun0010_ip = 112; continue _fun0010 }
case 113:
            var14 = null;
            if(!var15) { _fun0010_ip = 112; continue _fun0010 }
case 114:
            var17 = _closure1_slot14;
            var16 = _closure1_slot15;
            var15 = {};
            var21 = _closure1_slot13;
            var26 = _closure1_slot1;
            var23 = _closure1_slot2;
            var18 = 40;
            var18 = var23[var18];
            var20 = var26.bind(var5)(var18);
            var18 = {};
            var24 = var22.gradient;
            var18['style'] = var24;
            var24 = _closure1_slot11;
            var24 = var24.START;
            var18['start'] = var24;
            var24 = _closure1_slot11;
            var24 = var24.END;
            var18['end'] = var24;
            var24 = 41;
            var24 = var23[var24];
            var24 = var26.bind(var5)(var24);
            var26 = var24.bind(var5)(var25);
            var24 = var26.alpha;
            var26 = var24.bind(var26)(var27);
            var24 = var26.hex;
            var26 = var24.bind(var26)();
            var24 = new Array(3);
            var24[0] = var26;
            var24[1] = var25;
            var24[2] = var25;
            var18['colors'] = var24;
            var24 = [0, 0.8, 1];
            var18['locations'] = var24;
            var20 = var21.bind(var5)(var20, var18);
            var18 = new Array(2);
            var18[0] = var20;
            var21 = _closure1_slot13;
            var20 = _closure1_slot0;
            var19 = 42;
            var19 = var23[var19];
            var19 = var20.bind(var5)(var19);
            var20 = var19.ChevronSmallRightIcon;
            var19 = {'style': null, 'size': 'xs', 'color': 'interactive-muted'};
            var23 = var22.overflowChevron;
            var22 = new Array(1);
            var22[0] = var23;
            var19['style'] = var22;
            var19 = var21.bind(var5)(var20, var19);
            var18[1] = var19;
            var15['children'] = var18;
            var14 = var17.bind(var5)(var16, var15);
case 112:
            var13[1] = var14;
            var10['children'] = var13;
            var9 = var12.bind(var5)(var11, var10);
case 97:
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 94:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot5 = var8;
    var8 = var4.Image;
    var _closure1_slot6 = var8;
    var4 = var4.ScrollView;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Permissions;
    var _closure1_slot10 = var7;
    var4 = var4.HorizontalGradient;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiIntention;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var7 = var4.jsxs;
    var _closure1_slot14 = var7;
    var4 = var4.Fragment;
    var _closure1_slot15 = var4;
    var4 = 20;
    var _closure1_slot16 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = {};
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'flexWrap': 'wrap', 'justifyContent': 'space-between'};
            var1['container'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'flexWrap': 'wrap', 'gap': 6};
            var1['replyForwardButtonContainer'] = var2;
            var2 = {'position': 'relative', 'flexDirection': 'row', 'alignItems': 'center', 'flexWrap': 'wrap', 'gap': 6};
            var1['emojisRowContainer'] = var2;
            var2 = {'position': 'relative', 'flexDirection': 'row', 'alignItems': 'center', 'flexWrap': 'wrap', 'gap': 6};
            var1['emojisContainer'] = var2;
            var2 = {'flexDirection': 'row', 'backgroundColor': null, 'borderRadius': null, 'flexShrink': 3, 'paddingHorizontal': 8, 'gap': 6};
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 9;
            var3 = var8[var6];
            var5 = undefined;
            var3 = var4.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
            var2['backgroundColor'] = var3;
            var3 = var8[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.radii;
            var3 = var3.sm;
            var2['borderRadius'] = var3;
            var1['emojiContainer'] = var2;
            var2 = {};
            var3 = 5;
            var2['paddingVertical'] = var3;
            var1['innerEmojiContainer'] = var2;
            var2 = {};
            var3 = 4;
            var2['paddingVertical'] = var3;
            var1['selectedInnerEmojiContainer'] = var2;
            var2 = {'minHeight': 30, 'alignItems': 'center'};
            var1['addEmojiContainer'] = var2;
            var2 = {};
            var3 = 0.4;
            var2['opacity'] = var3;
            var1['disabled'] = var2;
            var2 = {};
            var3 = _closure1_slot16;
            var2['width'] = var3;
            var3 = _closure1_slot16;
            var2['height'] = var3;
            var1['defaultEmoji'] = var2;
            var2 = {'lineHeight': null, 'fontSize': 16, 'textAlign': 'center', 'paddingTop': 2};
            var4 = _closure1_slot0;
            var3 = 10;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isAndroid;
            var4 = var3.bind(var4)();
            var3 = 16;
            if(var4) { _fun0016_ip = 115; continue _fun0016 }
case 116:
            var3 = _closure1_slot16;
case 115:
            var2['lineHeight'] = var3;
            var1['emojiText'] = var2;
            var2 = {};
            var3 = 3.5;
            var2['paddingBottom'] = var3;
            var1['selectedInnerTextContainer'] = var2;
            var2 = {'alignSelf': 'flex-end', 'paddingBottom': 4.5};
            var1['innerTextContainer'] = var2;
            var2 = {};
            var3 = 'contain';
            var2['resizeMode'] = var3;
            var3 = _closure1_slot16;
            var2['width'] = var3;
            var3 = _closure1_slot16;
            var2['height'] = var3;
            var1['emojiImage'] = var2;
            var2 = {'borderColor': null, 'borderWidth': 1, 'paddingHorizontal': 7};
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var8 = var3[var6];
            var8 = var4.bind(var5)(var8);
            var8 = var8.unsafe_rawColors;
            var8 = var8.BRAND_560;
            var2['borderColor'] = var8;
            var8 = _closure1_slot0;
            var7 = 11;
            var7 = var3[var7];
            var10 = var8.bind(var5)(var7);
            var9 = var10.hexWithOpacity;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.unsafe_rawColors;
            var8 = var7.BRAND_500;
            var7 = 0.3;
            var7 = var9.bind(var10)(var8, var7);
            var2['backgroundColor'] = var7;
            var1['selected'] = var2;
            var2 = {'position': 'absolute', 'right': 0, 'top': 0, 'bottom': 0, 'width': 48};
            var1['gradient'] = var2;
            var2 = {'position': 'absolute', 'right': 0};
            var1['overflowChevron'] = var2;
            var2 = {'paddingVertical': 6, 'paddingHorizontal': 8, 'backgroundColor': null, 'borderRadius': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 8};
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
            var2['backgroundColor'] = var7;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.radii;
            var7 = var7.sm;
            var2['borderRadius'] = var7;
            var1['comments'] = var2;
            var2 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 4, 'justifySelf': 'end'};
            var1['commentCount'] = var2;
            var2 = {'width': 20, 'height': 20};
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.INTERACTIVE_NORMAL;
            var2['tintColor'] = var3;
            var1['commentsIcon'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var4 = 44;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/native/ConversationReactionRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConversationReactionRow(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var9 = arg1;
            var2 = var9.conversationProps;
            var1 = null;
            if(!(var1 == var2)) { _fun0017_ip = 34; continue _fun0017 }
case 117:
            var4 = _closure1_slot13;
            var3 = _closure1_slot23;
            var2 = {};
            var11 = var2;
            var10 = var9;
            var1 = copyDataProperties(var11, var10);
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            _fun0017_ip = 118; continue _fun0017;
case 34:
            var5 = _closure1_slot13;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 43;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.ConversationProvider;
            var2 = {};
            var7 = var9.conversationProps;
            var2['conversationProps'] = var7;
            var8 = _closure1_slot13;
            var7 = _closure1_slot23;
            var6 = {};
            var11 = var6;
            var10 = var9;
            var9 = copyDataProperties(var11, var10);
            var6 = var8.bind(var4)(var7, var6);
            var2['children'] = var6;
            var1 = var5.bind(var4)(var3, var2);
case 118:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();