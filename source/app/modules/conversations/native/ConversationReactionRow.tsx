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
 0:
            var2 = arg1;
            var12 = var2.channel;
            var _closure2_slot0 = var12;
            var9 = var2.onOpenPicker;
            var _closure2_slot1 = var9;
            var11 = var2.onPressEmoji;
            var _closure2_slot2 = var11;
            var6 = var2.showText;
            var5 = var2.disabled;
            var2 = _closure1_slot16;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var8 = _closure1_slot4;
            var3 = var8.useCallback;
            var2 = new Array(3);
            var2[0] = var12;
            var2[1] = var11;
            var2[2] = var9;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot1;
                    var7 = null;
                    if(!(var7 != var1)) { _fun0002_ip = 23; continue _fun0002 }
 13:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 23:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openEmojiPickerActionSheet;
                    var2 = {'pickerIntention': null, 'autoFocus': false, 'startExpanded': false};
                    var5 = _closure1_slot12;
                    var5 = var5.REACTION;
                    var2['pickerIntention'] = var5;
                    var5 = _closure2_slot2;
                    var2['onPressEmoji'] = var5;
                    var5 = _closure2_slot0;
                    var2['channel'] = var5;
                    var7 = var7 == var5;
                    var5 = undefined;
                    if(var7) { _fun0002_ip = 119; continue _fun0002 }
 110:
                    var6 = _closure2_slot0;
                    var5 = var6.guild_id;
 119:
                    var2['guildId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var8 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot14;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 13;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var1['onPress'] = var8;
            var9 = var10.emojiContainer;
            var8 = new Array(3);
            var8[0] = var9;
            var9 = var10.addEmojiContainer;
            var8[1] = var9;
            var9 = null;
            if(!var5) { _fun0001_ip = 166; continue _fun0001 }
 161:
            var9 = var10.disabled;
 166:
            var8[2] = var9;
            var1['style'] = var8;
            var8 = true;
            var1['accessible'] = var8;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var14 = 14;
            var9 = var10[var14];
            var9 = var8.bind(var4)(var9);
            var12 = var9.intl;
            var11 = var12.string;
            var9 = var10[var14];
            var9 = var8.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.lfIHs7;
            var9 = var11.bind(var12)(var9);
            var1['accessibilityLabel'] = var9;
            var1['disabled'] = var5;
            var9 = _closure1_slot13;
            var5 = 15;
            var5 = var10[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.ReactionIcon;
            var5 = {};
            var10 = 'sm';
            var5['size'] = var10;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0001_ip = 390; continue _fun0001 }
 293:
            var9 = _closure1_slot13;
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 16;
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
            var10 = var10.m9O1gY;
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 390:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function EmojiReaction(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var21 = var2.messageId;
            var _closure2_slot0 = var21;
            var22 = var2.channel;
            var _closure2_slot1 = var22;
            var18 = var2.reaction;
            var _closure2_slot2 = var18;
            var15 = var2.count;
            var14 = var2.isBurstReaction;
            var _closure2_slot3 = var14;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var2 = _closure1_slot16;
            var17 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 17;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useEmojiColorPalette;
            var2 = var18.burst_colors;
            var12 = null;
            if(!(var12 == var2)) { _fun0003_ip = 108; continue _fun0003 }
 104:
            var2 = new Array(0);
 108:
            var3 = var3.bind(var5)(var2);
            var10 = {};
            var5 = var12 != var3;
            var7 = '';
            var2 = var7;
            if(!var5) { _fun0003_ip = 222; continue _fun0003 }
 129:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 18;
            var5 = var8[var5];
            var11 = var6.bind(var4)(var5);
            var8 = var11.hex2rgb;
            var5 = var12 == var3;
            var6 = undefined;
            if(var5) { _fun0003_ip = 169; continue _fun0003 }
 164:
            var6 = var3.backgroundColor;
 169:
            var5 = var12 == var3;
            var13 = undefined;
            if(var5) { _fun0003_ip = 183; continue _fun0003 }
 178:
            var13 = var3.opacity;
 183:
            var16 = var12 != var13;
            var5 = 0.15;
            if(!var16) { _fun0003_ip = 203; continue _fun0003 }
 200:
            var5 = var13;
 203:
            var5 = var8.bind(var11)(var6, var5);
            var6 = var12 != var5;
            var2 = var7;
            if(!var6) { _fun0003_ip = 222; continue _fun0003 }
 219:
            var2 = var5;
 222:
            var10['backgroundColor'] = var2;
            var5 = var12 == var3;
            var2 = undefined;
            if(var5) { _fun0003_ip = 240; continue _fun0003 }
 235:
            var2 = var3.backgroundColor;
 240:
            var10['borderColor'] = var2;
            var5 = var12 == var3;
            var2 = undefined;
            if(var5) { _fun0003_ip = 260; continue _fun0003 }
 254:
            var2 = var3.accentColor;
 260:
            var2 = var12 != var2;
            var13 = null;
            if(!var2) { _fun0003_ip = 284; continue _fun0003 }
 269:
            var2 = {};
            var3 = var3.accentColor;
            var2['color'] = var3;
            var13 = var2;
 284:
            var20 = var18.emoji;
            _closure2_slot4 = var20;
            if(var14) { _fun0003_ip = 304; continue _fun0003 }
 296:
            var11 = var18.me;
            _fun0003_ip = 310; continue _fun0003;
 304:
            var11 = var18.me_burst;
 310:
            var8 = undefined;
            if(!var11) { _fun0003_ip = 321; continue _fun0003 }
 315:
            var8 = var17.selected;
 321:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 19;
            var3 = var7[var3];
            var16 = var2.bind(var4)(var3);
            var6 = var16.useStateFromStores;
            var3 = _closure1_slot8;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot1;
                    var3 = var1.guild_id;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0004_ip = 48; continue _fun0004 }
 21:
                    var4 = _closure1_slot8;
                    var3 = var4.canChatInGuild;
                    var2 = _closure2_slot1;
                    var2 = var2.guild_id;
                    var1 = var3.bind(var4)(var2);
 48:
                    return var1;
                }
            };
            var5 = var6.bind(var16)(var5, var3);
            var19 = _closure1_slot4;
            var16 = var19.useMemo;
            var6 = new Array(1);
            var6[0] = var20;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot4;
                    var2 = var1.id;
                    var1 = null;
                    var2 = var1 != var2;
                    var5 = undefined;
                    var1 = undefined;
                    if(!var2) { _fun0005_ip = 105; continue _fun0005 }
 25:
                    var2 = {};
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 20;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.getEmojiURL;
                    var3 = {};
                    var7 = _closure2_slot4;
                    var7 = var7.id;
                    var3['id'] = var7;
                    var6 = _closure2_slot4;
                    var6 = var6.animated;
                    var3['animated'] = var6;
                    var6 = 48;
                    var3['size'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var2['uri'] = var3;
                    var1 = var2;
 105:
                    return var1;
                }
            };
            var19 = var16.bind(var19)(var3, var6);
            var16 = _closure1_slot4;
            var6 = var16.useCallback;
            var3 = new Array(4);
            var3[0] = var22;
            var3[1] = var14;
            var3[2] = var21;
            var3[3] = var18;
            var1 = function() {
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 21;
                var2 = var10[var1];
                var1 = undefined;
                var8 = var9.bind(var1)(var2);
                var7 = var8.handleAddOrRemoveReaction;
                var6 = _closure2_slot0;
                var14 = _closure2_slot1;
                var13 = _closure2_slot2;
                var12 = _closure2_slot3;
                var2 = 22;
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
            var1 = 13;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var16 = var17.emojiContainer;
            var7 = new Array(3);
            var7[0] = var16;
            var7[1] = var8;
            var8 = var14;
            if(!var8) { _fun0003_ip = 494; continue _fun0003 }
 491:
            var8 = var10;
 494:
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
            if(!var11) { _fun0003_ip = 565; continue _fun0003 }
 559:
            var10 = var17.selectedInnerEmojiContainer;
 565:
            var8[1] = var10;
            var5['style'] = var8;
            var8 = var20.id;
            if(!(var12 != var8)) { _fun0003_ip = 632; continue _fun0003 }
 582:
            var18 = _closure1_slot13;
            var10 = _closure1_slot6;
            var8 = {};
            var22 = var17.defaultEmoji;
            var21 = new Array(2);
            var21[0] = var22;
            var22 = var17.emojiImage;
            var21[1] = var22;
            var8['style'] = var21;
            var8['source'] = var19;
            var8 = var18.bind(var4)(var10, var8);
            _fun0003_ip = 720; continue _fun0003;
 632:
            var19 = _closure1_slot13;
            var18 = _closure1_slot0;
            var21 = _closure1_slot2;
            var10 = 16;
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
 720:
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
            if(!var11) { _fun0003_ip = 771; continue _fun0003 }
 765:
            var11 = var17.selectedInnerTextContainer;
 771:
            var10[1] = var11;
            var6['style'] = var10;
            var11 = _closure1_slot13;
            var10 = _closure1_slot1;
            var17 = _closure1_slot2;
            var9 = 23;
            var9 = var17[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['animate'] = var16;
            var9['count'] = var15;
            var12 = null;
            if(!var14) { _fun0003_ip = 823; continue _fun0003 }
 820:
            var12 = var13;
 823:
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
    var _closure1_slot18 = var1;
    var1 = function ForwardButton(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var7 = var1.onPress;
            var6 = var1.disabled;
            var1 = _closure1_slot16;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot13;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 13;
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
            if(!var6) { _fun0006_ip = 96; continue _fun0006 }
 91:
            var8 = var9.disabled;
 96:
            var7[2] = var8;
            var1['style'] = var7;
            var7 = true;
            var1['accessible'] = var7;
            var1['disabled'] = var6;
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 14;
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
            var5 = 24;
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
    var _closure1_slot19 = var1;
    var1 = function ReplyButton(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var7 = var1.onPress;
            var6 = var1.disabled;
            var1 = _closure1_slot16;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot13;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 13;
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
            if(!var6) { _fun0007_ip = 96; continue _fun0007 }
 91:
            var8 = var9.disabled;
 96:
            var7[2] = var8;
            var1['style'] = var7;
            var7 = true;
            var1['accessible'] = var7;
            var1['disabled'] = var6;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 14;
            var9 = var8[var7];
            var9 = var6.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var8[var7];
            var7 = var6.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.5NwaNT;
            var7 = var9.bind(var10)(var7);
            var1['accessibilityLabel'] = var7;
            var7 = _closure1_slot13;
            var5 = 25;
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
    var _closure1_slot20 = var1;
    var1 = function ThreadAsCommentsButton(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var10 = var2.parentMessage;
            var _closure2_slot0 = var10;
            var1 = var2.threadData;
            var _closure2_slot1 = var1;
            var7 = var2.style;
            var2 = _closure1_slot16;
            var4 = undefined;
            var15 = var2.bind(var4)();
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 19;
            var2 = var6[var2];
            var8 = var5.bind(var4)(var2);
            var6 = var8.useStateFromStores;
            var2 = _closure1_slot9;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
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
            var2 = var6.bind(var8)(var5, var2);
            var8 = _closure1_slot4;
            var6 = var8.useCallback;
            var5 = new Array(2);
            var5[0] = var10;
            var10 = var1.thread;
            var5[1] = var10;
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    var1 = var4 != var1;
                    if(!var1) { _fun0009_ip = 30; continue _fun0009 }
 16:
                    var3 = _closure2_slot1;
                    var3 = var3.thread;
                    var1 = var4 != var3;
 30:
                    if(!var1) { _fun0009_ip = 105; continue _fun0009 }
 33:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 26;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.navigateToMessage;
                    var1 = _closure2_slot0;
                    var3 = var1.getChannelId;
                    var3 = var3.bind(var1)();
                    var2 = _closure2_slot1;
                    var2 = var2.thread;
                    var2 = var2.guild_id;
                    var1 = var1.id;
                    var1 = var4.bind(var5)(var3, var2, var1);
 105:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var6.bind(var8)(var3, var5);
            if(!var2) { _fun0008_ip = 544; continue _fun0008 }
 139:
            var3 = var1.messageCount;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0008_ip = 544; continue _fun0008 }
 154:
            var2 = var1.thread;
            var3 = null;
            if(!(var3 != var2)) { _fun0008_ip = 179; continue _fun0008 }
 166:
            var2 = var1.mostRecentMessage;
            if(!(var3 == var2)) { _fun0008_ip = 319; continue _fun0008 }
 179:
            var6 = _closure1_slot13;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 13;
            var2 = var16[var2];
            var2 = var13.bind(var4)(var2);
            var3 = var2.PressableHighlight;
            var2 = {};
            var10 = var15.comments;
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var7;
            var2['style'] = var8;
            var2['onPress'] = var5;
            var11 = _closure1_slot13;
            var10 = _closure1_slot5;
            var8 = {};
            var12 = var15.commentCount;
            var8['style'] = var12;
            var14 = _closure1_slot13;
            var12 = 27;
            var12 = var16[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.ChatIcon;
            var12 = {};
            var16 = var15.commentsIcon;
            var12['style'] = var16;
            var12 = var14.bind(var4)(var13, var12);
            var8['children'] = var12;
            var8 = var11.bind(var4)(var10, var8);
            var2['children'] = var8;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 319:
            var3 = var1.messageCount;
            var2 = 9;
            var2 = var3 > var2;
            var12 = '9+';
            if(var2) { _fun0008_ip = 347; continue _fun0008 }
 341:
            var12 = var1.messageCount;
 347:
            var3 = _closure1_slot13;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 13;
            var1 = var13[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.PressableHighlight;
            var1 = {};
            var8 = var15.comments;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var1['onPress'] = var5;
            var7 = _closure1_slot14;
            var6 = _closure1_slot5;
            var5 = {};
            var8 = var15.commentCount;
            var5['style'] = var8;
            var14 = _closure1_slot13;
            var8 = 27;
            var8 = var13[var8];
            var8 = var10.bind(var4)(var8);
            var11 = var8.ChatIcon;
            var8 = {};
            var15 = var15.commentsIcon;
            var8['style'] = var15;
            var11 = var14.bind(var4)(var11, var8);
            var8 = new Array(2);
            var8[0] = var11;
            var11 = _closure1_slot13;
            var9 = 16;
            var9 = var13[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'text-md/semibold', 'color': 'text-primary'};
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 544:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot21 = var1;
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
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
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
            var9 = _closure1_slot2;
            var6 = 9;
            var3 = var9[var6];
            var5 = undefined;
            var3 = var4.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
            var2['backgroundColor'] = var3;
            var3 = var9[var6];
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
            var3 = 20;
            var2 = {'width': 20, 'height': 20};
            var1['defaultEmoji'] = var2;
            var2 = {'lineHeight': null, 'fontSize': 16, 'textAlign': 'center', 'paddingTop': 2};
            var8 = _closure1_slot0;
            var4 = 10;
            var4 = var9[var4];
            var8 = var8.bind(var5)(var4);
            var4 = var8.isAndroid;
            var4 = var4.bind(var8)();
            if(!var4) { _fun0010_ip = 296; continue _fun0010 }
 293:
            var3 = 16;
 296:
            var2['lineHeight'] = var3;
            var1['emojiText'] = var2;
            var2 = {};
            var3 = 3.5;
            var2['paddingBottom'] = var3;
            var1['selectedInnerTextContainer'] = var2;
            var2 = {'alignSelf': 'flex-end', 'paddingBottom': 4.5};
            var1['innerTextContainer'] = var2;
            var2 = {'resizeMode': 'contain', 'width': 20, 'height': 20};
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
    var _closure1_slot16 = var4;
    var4 = 39;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/native/ConversationReactionRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConversationReactionRow(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var2 = arg1;
            var37 = var2.message;
            var _closure2_slot0 = var37;
            var29 = var2.channel;
            var _closure2_slot1 = var29;
            var9 = var2.guild;
            var24 = var2.hideAdditionalButtons;
            var5 = undefined;
            if(!(var24 === var5)) { _fun0011_ip = 42; continue _fun0011 }
 40:
            var24 = false;
 42:
            var _closure2_slot2 = var24;
            var1 = var2.isKeyMessage;
            if(!(var1 === var5)) { _fun0011_ip = 58; continue _fun0011 }
 56:
            var1 = false;
 58:
            var8 = var2.inForum;
            if(!(var8 === var5)) { _fun0011_ip = 70; continue _fun0011 }
 68:
            var8 = false;
 70:
            var7 = var2.backgroundVariant;
            if(!(var7 === var5)) { _fun0011_ip = 84; continue _fun0011 }
 80:
            var7 = 'primary';
 84:
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var2 = _closure1_slot16;
            var22 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 28;
            var2 = var4[var2];
            var6 = var3.bind(var5)(var2);
            var2 = var6.useThread;
            var38 = var2.bind(var6)(var9, var37, var8);
            _closure2_slot3 = var38;
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var2 = var37.reactions;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var1 = new Array(0);
                var _closure3_slot0 = var1;
                var3 = _closure2_slot0;
                var4 = var3.reactions;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var4 = arg1;
                        var2 = var4.me_vote;
                        var1 = null;
                        if(!(var1 == var2)) { _fun0012_ip = 190; continue _fun0012 }
 18:
                        var1 = var4.burst_count;
                        var2 = 0;
                        if(!(var1 > var2)) { _fun0012_ip = 105; continue _fun0012 }
 30:
                        var5 = _closure3_slot0;
                        var3 = var5.push;
                        var1 = {};
                        var10 = var1;
                        var9 = var4;
                        var6 = copyDataProperties(var10, var9);
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var6 = 29;
                        var7 = var7[var6];
                        var6 = undefined;
                        var6 = var8.bind(var6)(var7);
                        var6 = var6.ReactionTypes;
                        var7 = var6.BURST;
                        var6 = 'type';
                        var1[var6] = var7;
                        var1 = var3.bind(var5)(var1);
 105:
                        var1 = var4.count;
                        if(!(var1 > var2)) { _fun0012_ip = 190; continue _fun0012 }
 115:
                        var3 = _closure3_slot0;
                        var2 = var3.push;
                        var1 = {};
                        var10 = var1;
                        var9 = var4;
                        var4 = copyDataProperties(var10, var9);
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 29;
                        var5 = var5[var4];
                        var4 = undefined;
                        var4 = var6.bind(var4)(var5);
                        var4 = var4.ReactionTypes;
                        var5 = var4.NORMAL;
                        var4 = 'type';
                        var1[var4] = var5;
                        var1 = var2.bind(var3)(var1);
 190:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var26 = var8.bind(var9)(var2, var6);
            _closure2_slot4 = var26;
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var6 = new Array(1);
            var6[0] = var29;
            var2 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0013_ip = 50; continue _fun0013 }
 16:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 30;
                    var3 = var4[var3];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var3);
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
 50:
                    return var1;
                }
            };
            var23 = var8.bind(var9)(var2, var6);
            var2 = 31;
            var2 = var4[var2];
            var6 = var3.bind(var5)(var2);
            var2 = var6.useCanForwardMessage;
            var41 = var2.bind(var6)(var37);
            _closure2_slot5 = var41;
            var2 = 19;
            var2 = var4[var2];
            var9 = var3.bind(var5)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var4 = _closure1_slot9;
                var3 = var4.can;
                var1 = _closure1_slot10;
                var2 = var1.SEND_MESSAGES;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var40 = var8.bind(var9)(var6, var2);
            _closure2_slot6 = var40;
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var6 = new Array(5);
            var6[0] = var24;
            var2 = var38.messageCount;
            var6[1] = var2;
            var2 = var26.length;
            var6[2] = var2;
            var6[3] = var40;
            var6[4] = var41;
            var2 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var1 = _closure2_slot2;
                    var3 = 3;
                    if(!var1) { _fun0014_ip = 16; continue _fun0014 }
 13:
                    var3 = 6;
 16:
                    var1 = _closure2_slot3;
                    var1 = var1.messageCount;
                    var4 = 0;
                    var2 = var3;
                    if(!(var1 > var4)) { _fun0014_ip = 42; continue _fun0014 }
 35:
                    var1 = 1;
                    var2 = var3 - var1;
 42:
                    var1 = _closure2_slot4;
                    var1 = var1.length;
                    var1 = var1 > var2;
                    var3 = 0;
                    if(!var1) { _fun0014_ip = 73; continue _fun0014 }
 60:
                    var1 = _closure2_slot4;
                    var1 = var1.length;
                    var3 = var1 - var2;
 73:
                    var1 = _closure2_slot3;
                    var1 = var1.messageCount;
                    var2 = var1 > var4;
                    var1 = {};
                    var3 = var3 > var4;
                    var1['hasOverflow'] = var3;
                    var3 = _closure2_slot2;
                    var3 = !var3;
                    if(!var3) { _fun0014_ip = 122; continue _fun0014 }
 108:
                    var4 = _closure2_slot6;
                    if(var4) { _fun0014_ip = 119; continue _fun0014 }
 115:
                    var4 = _closure2_slot5;
 119:
                    var3 = var4;
 122:
                    var1['showReplyForwardButtons'] = var3;
                    var1['showThreadAsComments'] = var2;
                    return var1;
                }
            };
            var2 = var8.bind(var9)(var2, var6);
            var17 = var2.hasOverflow;
            var33 = var2.showReplyForwardButtons;
            var34 = var2.showThreadAsComments;
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var2 = var29.id;
            var6 = new Array(2);
            var6[0] = var2;
            var2 = var37.id;
            var6[1] = var2;
            var2 = function(arg1, arg2) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 32;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
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
            var28 = var8.bind(var9)(var2, var6);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var6 = new Array(1);
            var6[0] = var37;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 33;
                var2 = var2[var1];
                var1 = undefined;
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
            var42 = var8.bind(var9)(var2, var6);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var6 = new Array(2);
            var6[0] = var29;
            var6[1] = var37;
            var2 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 26;
                var2 = var4[var1];
                var1 = undefined;
                var10 = var3.bind(var1)(var2);
                var9 = var10.navigateToMessage;
                var6 = _closure2_slot1;
                var8 = var6.id;
                var7 = var6.guild_id;
                var5 = _closure2_slot0;
                var2 = var5.id;
                var2 = var9.bind(var10)(var8, var7, var2);
                var2 = 34;
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
            var43 = var8.bind(var9)(var2, var6);
            var2 = 35;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useToken;
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 9;
            var4 = var8[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.colors;
            if(var1) { _fun0011_ip = 546; continue _fun0011 }
 524:
            var1 = 'CARD_SECONDARY_BG';
            var6 = 'primary';
            if(!(var6 === var7)) { _fun0011_ip = 540; continue _fun0011 }
 536:
            var1 = 'CARD_PRIMARY_BG';
 540:
            var1 = var4[var1];
            _fun0011_ip = 552; continue _fun0011;
 546:
            var1 = var4.BACKGROUND_MESSAGE_HIGHLIGHT;
 552:
            var25 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var1 = var2.useState;
            var21 = true;
            var3 = var1.bind(var2)(var21);
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var5)(var3, var1);
            var27 = 0;
            var15 = var2[var27];
            var1 = 1;
            var1 = var2[var1];
            _closure2_slot7 = var1;
            var4 = _closure1_slot4;
            var3 = var4.useCallback;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var2 = var1.contentOffset;
                var4 = var2.x;
                var2 = var1.contentSize;
                var2 = var2.width;
                var1 = var1.layoutMeasurement;
                var1 = var1.width;
                var3 = _closure2_slot7;
                var1 = var4 + var1;
                var2 = var1 >= var2;
                var1 = undefined;
                var2 = !var2;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var20 = var3.bind(var4)(var2, var1);
            var1 = var26.length;
            if(!(var27 === var1)) { _fun0011_ip = 646; continue _fun0011 }
 638:
            var1 = null;
            if(var24) { _fun0011_ip = 1324; continue _fun0011 }
 646:
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
            var9 = var26.length;
            if(!(!(var9 > var27))) { _fun0011_ip = 702; continue _fun0011 }
 694:
            var9 = null;
            if(!var23) { _fun0011_ip = 1304; continue _fun0011 }
 702:
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
            var13['horizontal'] = var21;
            var13['scrollEnabled'] = var17;
            var21 = {};
            var30 = 6;
            var21['gap'] = var30;
            var13['contentContainerStyle'] = var21;
            var13['onScroll'] = var20;
            var20 = false;
            var13['showsHorizontalScrollIndicator'] = var20;
            var21 = var33;
            if(var33) { _fun0011_ip = 786; continue _fun0011 }
 783:
            var21 = var34;
 786:
            if(!var21) { _fun0011_ip = 952; continue _fun0011 }
 792:
            var31 = _closure1_slot14;
            var30 = _closure1_slot5;
            var20 = {};
            var32 = var22.replyForwardButtonContainer;
            var20['style'] = var32;
            if(!var34) { _fun0011_ip = 841; continue _fun0011 }
 815:
            var36 = _closure1_slot13;
            var35 = _closure1_slot21;
            var32 = {};
            var32['threadData'] = var38;
            var32['parentMessage'] = var37;
            var34 = var36.bind(var5)(var35, var32);
 841:
            var32 = new Array(2);
            var32[0] = var34;
            if(!var33) { _fun0011_ip = 938; continue _fun0011 }
 852:
            var36 = _closure1_slot14;
            var35 = _closure1_slot15;
            var34 = {};
            var39 = _closure1_slot13;
            var38 = _closure1_slot20;
            var37 = {};
            var37['onPress'] = var43;
            var40 = !var40;
            var37['disabled'] = var40;
            var38 = var39.bind(var5)(var38, var37);
            var37 = new Array(2);
            var37[0] = var38;
            var40 = _closure1_slot13;
            var39 = _closure1_slot19;
            var38 = {};
            var38['onPress'] = var42;
            var41 = !var41;
            var38['disabled'] = var41;
            var38 = var40.bind(var5)(var39, var38);
            var37[1] = var38;
            var34['children'] = var37;
            var33 = var36.bind(var5)(var35, var34);
 938:
            var32[1] = var33;
            var20['children'] = var32;
            var21 = var31.bind(var5)(var30, var20);
 952:
            var20 = new Array(3);
            var20[0] = var21;
            var21 = var26.map;
            var16 = function(arg1, arg2) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var8 = arg1;
                    var5 = _closure1_slot13;
                    var4 = _closure1_slot5;
                    var3 = {};
                    var6 = _closure1_slot18;
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
                    var10 = 29;
                    var9 = var2[var10];
                    var2 = undefined;
                    var9 = var12.bind(var2)(var9);
                    var9 = var9.ReactionTypes;
                    var9 = var9.BURST;
                    if(!(var11 !== var9)) { _fun0015_ip = 102; continue _fun0015 }
 94:
                    var9 = var8.count;
                    _fun0015_ip = 108; continue _fun0015;
 102:
                    var9 = var8.burst_count;
 108:
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
            var16 = var21.bind(var26)(var16);
            var20[1] = var16;
            var21 = null;
            if(var24) { _fun0011_ip = 1016; continue _fun0011 }
 986:
            var21 = null;
            if(!var23) { _fun0011_ip = 1016; continue _fun0011 }
 991:
            var26 = _closure1_slot13;
            var24 = _closure1_slot17;
            var23 = {};
            var23['channel'] = var29;
            var23['onPressEmoji'] = var28;
            var21 = var26.bind(var5)(var24, var23);
 1016:
            var20[2] = var21;
            var13['children'] = var20;
            var14 = var18.bind(var5)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var14 = null;
            if(!var17) { _fun0011_ip = 1290; continue _fun0011 }
 1046:
            var14 = null;
            if(!var15) { _fun0011_ip = 1290; continue _fun0011 }
 1054:
            var17 = _closure1_slot14;
            var16 = _closure1_slot15;
            var15 = {};
            var21 = _closure1_slot13;
            var26 = _closure1_slot1;
            var23 = _closure1_slot2;
            var18 = 36;
            var18 = var23[var18];
            var20 = var26.bind(var5)(var18);
            var18 = {};
            var24 = var22.gradient;
            var18['style'] = var24;
            var24 = _closure1_slot11;
            var28 = var24.START;
            var18['start'] = var28;
            var24 = var24.END;
            var18['end'] = var24;
            var24 = 37;
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
            var19 = 38;
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
 1290:
            var13[1] = var14;
            var10['children'] = var13;
            var9 = var12.bind(var5)(var11, var10);
 1304:
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1324:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();