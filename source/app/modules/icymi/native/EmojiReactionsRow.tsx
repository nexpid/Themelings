// app/modules/icymi/native/EmojiReactionsRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var5 = function AddEmojiButton(arg1) {
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
            var2 = _closure1_slot18;
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
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 15;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openEmojiPickerActionSheet;
                    var2 = {'pickerIntention': null, 'autoFocus': false, 'startExpanded': false};
                    var5 = _closure1_slot14;
                    var5 = var5.REACTION;
                    var2['pickerIntention'] = var5;
                    var5 = _closure2_slot2;
                    var2['onPressEmoji'] = var5;
                    var7 = _closure2_slot0;
                    var2['channel'] = var7;
                    var5 = null;
                    var7 = var5 == var7;
                    var5 = undefined;
                    if(var7) { _fun0002_ip = 109; continue _fun0002 }
 100:
                    var6 = _closure2_slot0;
                    var5 = var6.guild_id;
 109:
                    var2['guildId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var8 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot16;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 16;
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
            var14 = 17;
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
            var9 = _closure1_slot15;
            var5 = 18;
            var5 = var10[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.ReactionIcon;
            var5 = {};
            var10 = 'sm';
            var5['size'] = var10;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0001_ip = 392; continue _fun0001 }
 293:
            var9 = _closure1_slot15;
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 19;
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
 392:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var5;
    var1 = function EmojiReaction(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var21 = var2.messageId;
            var _closure2_slot0 = var21;
            var22 = var2.channel;
            var _closure2_slot1 = var22;
            var19 = var2.reaction;
            var _closure2_slot2 = var19;
            var15 = var2.count;
            var14 = var2.isBurstReaction;
            var _closure2_slot3 = var14;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var2 = _closure1_slot18;
            var17 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 20;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useEmojiColorPalette;
            var2 = var19.burst_colors;
            var12 = null;
            if(!(var12 == var2)) { _fun0003_ip = 107; continue _fun0003 }
 103:
            var2 = new Array(0);
 107:
            var3 = var3.bind(var5)(var2);
            var5 = var22.type;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 21;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.ChannelTypes;
            var2 = var2.GUILD_ANNOUNCEMENT;
            var18 = 'message';
            if(!(var5 === var2)) { _fun0003_ip = 161; continue _fun0003 }
 157:
            var18 = 'announcement';
 161:
            _closure2_slot4 = var18;
            var10 = {};
            var5 = var12 != var3;
            var7 = '';
            var2 = var7;
            if(!var5) { _fun0003_ip = 274; continue _fun0003 }
 181:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 22;
            var5 = var8[var5];
            var11 = var6.bind(var4)(var5);
            var8 = var11.hex2rgb;
            var5 = var12 == var3;
            var6 = undefined;
            if(var5) { _fun0003_ip = 221; continue _fun0003 }
 216:
            var6 = var3.backgroundColor;
 221:
            var5 = var12 == var3;
            var13 = undefined;
            if(var5) { _fun0003_ip = 235; continue _fun0003 }
 230:
            var13 = var3.opacity;
 235:
            var16 = var12 != var13;
            var5 = 0.15;
            if(!var16) { _fun0003_ip = 255; continue _fun0003 }
 252:
            var5 = var13;
 255:
            var5 = var8.bind(var11)(var6, var5);
            var6 = var12 != var5;
            var2 = var7;
            if(!var6) { _fun0003_ip = 274; continue _fun0003 }
 271:
            var2 = var5;
 274:
            var10['backgroundColor'] = var2;
            var5 = var12 == var3;
            var2 = undefined;
            if(var5) { _fun0003_ip = 292; continue _fun0003 }
 287:
            var2 = var3.backgroundColor;
 292:
            var10['borderColor'] = var2;
            var5 = var12 == var3;
            var2 = undefined;
            if(var5) { _fun0003_ip = 312; continue _fun0003 }
 306:
            var2 = var3.accentColor;
 312:
            var2 = var12 != var2;
            var13 = null;
            if(!var2) { _fun0003_ip = 336; continue _fun0003 }
 321:
            var2 = {};
            var3 = var3.accentColor;
            var2['color'] = var3;
            var13 = var2;
 336:
            var20 = var19.emoji;
            if(var14) { _fun0003_ip = 353; continue _fun0003 }
 345:
            var11 = var19.me;
            _fun0003_ip = 359; continue _fun0003;
 353:
            var11 = var19.me_burst;
 359:
            var8 = undefined;
            if(!var11) { _fun0003_ip = 370; continue _fun0003 }
 364:
            var8 = var17.selected;
 370:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 23;
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
            var16 = _closure1_slot4;
            var6 = var16.useCallback;
            var3 = new Array(5);
            var3[0] = var22;
            var3[1] = var14;
            var3[2] = var21;
            var3[3] = var19;
            var3[4] = var18;
            var1 = function() {
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 24;
                var2 = var10[var1];
                var1 = undefined;
                var2 = var9.bind(var1)(var2);
                var6 = var2.ICYMIAnalytics;
                var5 = var6.trackItemInteraction;
                var8 = _closure2_slot0;
                var4 = _closure2_slot4;
                var3 = 'press_reaction';
                var3 = var5.bind(var6)(var8, var4, var3);
                var3 = 25;
                var3 = var10[var3];
                var7 = var9.bind(var1)(var3);
                var6 = var7.handleAddOrRemoveReaction;
                var14 = _closure2_slot1;
                var13 = _closure2_slot2;
                var12 = _closure2_slot3;
                var2 = 14;
                var2 = var10[var2];
                var2 = var9.bind(var1)(var2);
                var2 = var2.ReactionLocations;
                var11 = var2.MESSAGE;
                var16 = var7;
                var15 = var8;
                var2 = var16[var6](var15, var14, var13, var12, var11, var10);
                return var1;
            };
            var6 = var6.bind(var16)(var1, var3);
            var3 = _closure1_slot16;
            var1 = 16;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var16 = var17.emojiContainer;
            var7 = new Array(3);
            var7[0] = var16;
            var7[1] = var8;
            var8 = var14;
            if(!var8) { _fun0003_ip = 517; continue _fun0003 }
 514:
            var8 = var10;
 517:
            var7[2] = var8;
            var1['style'] = var7;
            var1['onPress'] = var6;
            var16 = true;
            var1['accessible'] = var16;
            var6 = var20.name;
            var1['accessibilityLabel'] = var6;
            var5 = !var5;
            var1['disabled'] = var5;
            var7 = _closure1_slot15;
            var6 = _closure1_slot5;
            var5 = {};
            var10 = var17.innerEmojiContainer;
            var8 = new Array(2);
            var8[0] = var10;
            var10 = var11;
            if(!var11) { _fun0003_ip = 588; continue _fun0003 }
 582:
            var10 = var17.selectedInnerEmojiContainer;
 588:
            var8[1] = var10;
            var5['style'] = var8;
            var8 = var20.id;
            if(!(var12 != var8)) { _fun0003_ip = 721; continue _fun0003 }
 605:
            var18 = _closure1_slot15;
            var10 = _closure1_slot6;
            var8 = {};
            var21 = var17.defaultEmoji;
            var19 = new Array(2);
            var19[0] = var21;
            var21 = var17.emojiImage;
            var19[1] = var21;
            var8['style'] = var19;
            var19 = {};
            var22 = _closure1_slot1;
            var23 = _closure1_slot2;
            var21 = 26;
            var21 = var23[var21];
            var23 = var22.bind(var4)(var21);
            var22 = var23.getEmojiURL;
            var21 = {};
            var24 = var20.id;
            var21['id'] = var24;
            var24 = var20.animated;
            var21['animated'] = var24;
            var24 = 48;
            var21['size'] = var24;
            var21 = var22.bind(var23)(var21);
            var19['uri'] = var21;
            var8['source'] = var19;
            var8 = var18.bind(var4)(var10, var8);
            _fun0003_ip = 809; continue _fun0003;
 721:
            var19 = _closure1_slot15;
            var18 = _closure1_slot0;
            var21 = _closure1_slot2;
            var10 = 19;
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
 809:
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot15;
            var7 = _closure1_slot5;
            var6 = {};
            var18 = var17.innerTextContainer;
            var10 = new Array(2);
            var10[0] = var18;
            if(!var11) { _fun0003_ip = 860; continue _fun0003 }
 854:
            var11 = var17.selectedInnerTextContainer;
 860:
            var10[1] = var11;
            var6['style'] = var10;
            var11 = _closure1_slot15;
            var10 = _closure1_slot1;
            var17 = _closure1_slot2;
            var9 = 27;
            var9 = var17[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['animate'] = var16;
            var9['count'] = var15;
            var12 = null;
            if(!var14) { _fun0003_ip = 911; continue _fun0003 }
 908:
            var12 = var13;
 911:
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
    var _closure1_slot20 = var1;
    var4 = function ForwardButton(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var7 = var1.onPress;
            var6 = var1.disabled;
            var1 = _closure1_slot18;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot15;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 16;
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
            if(!var6) { _fun0005_ip = 96; continue _fun0005 }
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
            var6 = 17;
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
            var7 = _closure1_slot15;
            var6 = _closure1_slot1;
            var5 = 28;
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
    var _closure1_slot21 = var4;
    var2 = function ReplyButton(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var7 = var1.onPress;
            var6 = var1.disabled;
            var1 = _closure1_slot18;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot15;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 16;
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
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 17;
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
            var7 = _closure1_slot15;
            var5 = 29;
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
    var _closure1_slot22 = var2;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var11 = var9[var7];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var11);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var11 = var7.View;
    var _closure1_slot5 = var11;
    var11 = var7.Image;
    var _closure1_slot6 = var11;
    var7 = var7.ScrollView;
    var _closure1_slot7 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.ICYMI_MARGIN;
    var _closure1_slot10 = var10;
    var7 = var7.MESSAGE_CONTENT_INSET;
    var _closure1_slot11 = var7;
    var7 = 6;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.HorizontalGradient;
    var _closure1_slot12 = var10;
    var7 = var7.Permissions;
    var _closure1_slot13 = var7;
    var7 = 7;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.EmojiIntention;
    var _closure1_slot14 = var7;
    var7 = 8;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.jsx;
    var _closure1_slot15 = var10;
    var10 = var7.jsxs;
    var _closure1_slot16 = var10;
    var7 = var7.Fragment;
    var _closure1_slot17 = var7;
    var7 = 9;
    var7 = var9[var7];
    var11 = var8.bind(var1)(var7);
    var10 = var11.createStyles;
    var7 = function() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
            var8 = 10;
            var3 = var9[var8];
            var7 = undefined;
            var3 = var4.bind(var7)(var3);
            var3 = var3.colors;
            var3 = var3.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
            var2['backgroundColor'] = var3;
            var3 = var9[var8];
            var3 = var4.bind(var7)(var3);
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
            var6 = _closure1_slot0;
            var4 = 11;
            var4 = var9[var4];
            var6 = var6.bind(var7)(var4);
            var4 = var6.isAndroid;
            var4 = var4.bind(var6)();
            if(!var4) { _fun0007_ip = 296; continue _fun0007 }
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
            var6 = var3[var8];
            var6 = var4.bind(var7)(var6);
            var6 = var6.unsafe_rawColors;
            var6 = var6.BRAND_560;
            var2['borderColor'] = var6;
            var6 = _closure1_slot0;
            var5 = 12;
            var5 = var3[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.hexWithOpacity;
            var3 = var3[var8];
            var3 = var4.bind(var7)(var3);
            var3 = var3.unsafe_rawColors;
            var4 = var3.BRAND_500;
            var3 = 0.3;
            var3 = var5.bind(var6)(var4, var3);
            var2['backgroundColor'] = var3;
            var1['selected'] = var2;
            var3 = 0;
            var2 = {'position': 'absolute', 'right': 0, 'top': 0, 'bottom': 0, 'width': 48};
            var1['gradient'] = var2;
            var2 = {'position': 'absolute', 'right': 0};
            var1['overflowChevron'] = var2;
            var2 = {};
            var2['opacity'] = var3;
            var1['chevronHidden'] = var2;
            return var1;
        }
    };
    var7 = var10.bind(var11)(var7);
    var _closure1_slot18 = var7;
    var7 = 41;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/icymi/native/EmojiReactionsRow.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function EmojiReactionsRow(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var1 = var2.message;
            var _closure2_slot0 = var1;
            var23 = var2.channel;
            var _closure2_slot1 = var23;
            var7 = var2.hideAdditionalButtons;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0008_ip = 37; continue _fun0008 }
 35:
            var7 = false;
 37:
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot18;
            var10 = var2.bind(var4)();
            var5 = var23.type;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 21;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ChannelTypes;
            var3 = var2.GUILD_ANNOUNCEMENT;
            var2 = 'message';
            if(!(var5 === var3)) { _fun0008_ip = 105; continue _fun0008 }
 101:
            var2 = 'announcement';
 105:
            _closure2_slot2 = var2;
            var6 = _closure1_slot4;
            var5 = var6.useCallback;
            var2 = var23.id;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = var1.id;
            var3[1] = var2;
            var2 = function(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var4 = arg1;
                    var2 = _closure2_slot1;
                    var7 = var2.id;
                    var1 = _closure2_slot0;
                    var6 = var1.id;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0009_ip = 131; continue _fun0009 }
 30:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 13;
                    var1 = var9[var1];
                    var2 = undefined;
                    var3 = var8.bind(var2)(var1);
                    var1 = var3.toReactionEmoji;
                    var12 = var1.bind(var3)(var4);
                    var1 = 14;
                    var3 = var9[var1];
                    var4 = var8.bind(var2)(var3);
                    var3 = var4.addReaction;
                    var1 = var9[var1];
                    var1 = var8.bind(var2)(var1);
                    var1 = var1.ReactionLocations;
                    var11 = var1.MESSAGE;
                    var1 = {};
                    var8 = arg2;
                    var1['burst'] = var8;
                    var15 = var4;
                    var14 = var7;
                    var13 = var6;
                    var10 = var1;
                    var1 = var15[var3](var14, var13, var12, var11, var10, var9);
 131:
                    var1 = undefined;
                    return var1;
                }
            };
            var22 = var5.bind(var6)(var2, var3);
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 30;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var13 = var2.bind(var4)(var23);
            var3 = _closure1_slot0;
            var2 = 31;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.useCanForwardMessage;
            var14 = var2.bind(var6)(var1);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var6 = new Array(1);
            var6[0] = var1;
            var2 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 24;
                var2 = var4[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var9 = var2.ICYMIAnalytics;
                var8 = var9.trackItemInteraction;
                var5 = _closure2_slot0;
                var7 = var5.id;
                var6 = 'message';
                var2 = 'press_forward';
                var2 = var8.bind(var9)(var7, var6, var2);
                var2 = 32;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openForwardModal;
                var2 = {};
                var2['message'] = var5;
                var5 = 'icymi-tab';
                var2['source'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var15 = var8.bind(var9)(var2, var6);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var6 = new Array(2);
            var6[0] = var23;
            var6[1] = var1;
            var2 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 24;
                var2 = var4[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var10 = var2.ICYMIAnalytics;
                var9 = var10.trackItemInteraction;
                var5 = _closure2_slot0;
                var8 = var5.id;
                var7 = 'message';
                var6 = 'press_reply';
                var6 = var9.bind(var10)(var8, var7, var6);
                var6 = 33;
                var6 = var4[var6];
                var10 = var3.bind(var1)(var6);
                var9 = var10.navigateToPost;
                var6 = _closure2_slot1;
                var8 = var6.id;
                var7 = var6.guild_id;
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
            var17 = var8.bind(var9)(var2, var6);
            var2 = 23;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot9;
                var3 = var4.can;
                var1 = _closure1_slot13;
                var2 = var1.SEND_MESSAGES;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var16 = var5.bind(var6)(var3, var2);
            var5 = _closure1_slot4;
            var3 = var5.useMemo;
            var1 = var1.reactions;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = new Array(0);
                var _closure3_slot0 = var1;
                var3 = _closure2_slot0;
                var4 = var3.reactions;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var4 = arg1;
                        var2 = var4.me_vote;
                        var1 = null;
                        if(!(var1 == var2)) { _fun0010_ip = 189; continue _fun0010 }
 18:
                        var1 = var4.burst_count;
                        var2 = 0;
                        if(!(var1 > var2)) { _fun0010_ip = 105; continue _fun0010 }
 30:
                        var5 = _closure3_slot0;
                        var3 = var5.push;
                        var1 = {};
                        var10 = var1;
                        var9 = var4;
                        var6 = copyDataProperties(var10, var9);
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var6 = 35;
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
                        if(!(var1 > var2)) { _fun0010_ip = 189; continue _fun0010 }
 114:
                        var3 = _closure3_slot0;
                        var2 = var3.push;
                        var1 = {};
                        var10 = var1;
                        var9 = var4;
                        var4 = copyDataProperties(var10, var9);
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 35;
                        var5 = var5[var4];
                        var4 = undefined;
                        var4 = var6.bind(var4)(var5);
                        var4 = var4.ReactionTypes;
                        var5 = var4.NORMAL;
                        var4 = 'type';
                        var1[var4] = var5;
                        var1 = var2.bind(var3)(var1);
 189:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9 = var3.bind(var5)(var1, var2);
            var1 = var9.length;
            var3 = 3;
            var20 = var9;
            if(!(var1 > var3)) { _fun0008_ip = 375; continue _fun0008 }
 362:
            var2 = var9.slice;
            var1 = 0;
            var20 = var2.bind(var9)(var1, var3);
 375:
            var1 = var9.length;
            var2 = var1 > var3;
            var21 = 0;
            var1 = 0;
            if(!var2) { _fun0008_ip = 400; continue _fun0008 }
 391:
            var2 = var9.length;
            var1 = var2 - var3;
 400:
            var12 = _closure1_slot0;
            var19 = _closure1_slot2;
            var2 = 36;
            var2 = var19[var2];
            var5 = var12.bind(var4)(var2);
            var3 = var5.useToken;
            var6 = _closure1_slot1;
            var2 = 10;
            var2 = var19[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.colors;
            var2 = var2.BG_BASE_PRIMARY;
            var36 = var3.bind(var5)(var2);
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var6 = true;
            var3 = var2.bind(var3)(var6);
            var2 = _closure1_slot3;
            var18 = 2;
            var3 = var2.bind(var4)(var3, var18);
            var28 = var3[var21];
            var2 = 1;
            var2 = var3[var2];
            _closure2_slot3 = var2;
            var8 = _closure1_slot4;
            var5 = var8.useCallback;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var2 = var1.contentOffset;
                var4 = var2.x;
                var2 = var1.contentSize;
                var2 = var2.width;
                var1 = var1.layoutMeasurement;
                var1 = var1.width;
                var3 = _closure2_slot3;
                var1 = var4 + var1;
                var2 = var1 >= var2;
                var1 = undefined;
                var2 = !var2;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var5 = var5.bind(var8)(var3, var2);
            var8 = _closure1_slot4;
            var3 = var8.useContext;
            var2 = 37;
            var2 = var19[var2];
            var2 = var12.bind(var4)(var2);
            var2 = var2.ICYMIContext;
            var2 = var3.bind(var8)(var2);
            var12 = var2.width;
            var29 = var1 > var21;
            if(var29) { _fun0008_ip = 592; continue _fun0008 }
 573:
            var2 = var9.map;
            var1 = function(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var8 = arg1;
                    var5 = _closure1_slot15;
                    var4 = _closure1_slot5;
                    var3 = {};
                    var6 = _closure1_slot20;
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
                    var10 = 35;
                    var9 = var2[var10];
                    var2 = undefined;
                    var9 = var12.bind(var2)(var9);
                    var9 = var9.ReactionTypes;
                    var9 = var9.BURST;
                    if(!(var11 !== var9)) { _fun0011_ip = 101; continue _fun0011 }
 94:
                    var9 = var8.count;
                    _fun0011_ip = 107; continue _fun0011;
 101:
                    var9 = var8.burst_count;
 107:
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
            var27 = var2.bind(var9)(var1);
            _fun0008_ip = 704; continue _fun0008;
 592:
            var3 = _closure1_slot15;
            var2 = _closure1_slot7;
            var1 = {};
            var1['horizontal'] = var6;
            var1['scrollEnabled'] = var29;
            var6 = {};
            var8 = _closure1_slot10;
            var8 = var18 * var8;
            var12 = var12 - var8;
            var8 = _closure1_slot11;
            var12 = var12 - var8;
            var8 = 120;
            var8 = var12 - var8;
            var6['maxWidth'] = var8;
            var1['style'] = var6;
            var6 = {};
            var8 = 6;
            var6['gap'] = var8;
            var1['contentContainerStyle'] = var6;
            var6 = false;
            var1['showsHorizontalScrollIndicator'] = var6;
            var1['onScroll'] = var5;
            var6 = var9.map;
            var5 = function(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var8 = arg1;
                    var5 = _closure1_slot15;
                    var4 = _closure1_slot5;
                    var3 = {};
                    var6 = _closure1_slot20;
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
                    var10 = 35;
                    var9 = var2[var10];
                    var2 = undefined;
                    var9 = var12.bind(var2)(var9);
                    var9 = var9.ReactionTypes;
                    var9 = var9.BURST;
                    if(!(var11 !== var9)) { _fun0012_ip = 101; continue _fun0012 }
 94:
                    var9 = var8.count;
                    _fun0012_ip = 107; continue _fun0012;
 101:
                    var9 = var8.burst_count;
 107:
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
            var5 = var6.bind(var9)(var5);
            var1['children'] = var5;
            var27 = var3.bind(var4)(var2, var1);
 704:
            var3 = _closure1_slot16;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var10.container;
            var1['style'] = var5;
            var8 = _closure1_slot16;
            var6 = _closure1_slot5;
            var5 = {};
            var12 = var10.emojisRowContainer;
            var5['style'] = var12;
            var9 = var9.length;
            var9 = var9 > var21;
            var12 = null;
            if(!var9) { _fun0008_ip = 1071; continue _fun0008 }
 760:
            var25 = _closure1_slot16;
            var19 = _closure1_slot5;
            var9 = {};
            var30 = var10.emojisContainer;
            var26 = new Array(1);
            var26[0] = var30;
            var9['style'] = var26;
            var26 = new Array(2);
            var26[0] = var27;
            var27 = null;
            if(!var29) { _fun0008_ip = 1057; continue _fun0008 }
 804:
            var27 = null;
            if(!var28) { _fun0008_ip = 1057; continue _fun0008 }
 812:
            var30 = _closure1_slot16;
            var29 = _closure1_slot17;
            var28 = {};
            var33 = _closure1_slot15;
            var37 = _closure1_slot1;
            var35 = _closure1_slot2;
            var31 = 38;
            var31 = var35[var31];
            var32 = var37.bind(var4)(var31);
            var31 = {};
            var34 = var10.gradient;
            var31['style'] = var34;
            var34 = _closure1_slot12;
            var38 = var34.START;
            var31['start'] = var38;
            var34 = var34.END;
            var31['end'] = var34;
            var34 = 39;
            var34 = var35[var34];
            var34 = var37.bind(var4)(var34);
            var37 = var34.bind(var4)(var36);
            var34 = var37.alpha;
            var37 = var34.bind(var37)(var21);
            var34 = var37.hex;
            var37 = var34.bind(var37)();
            var34 = new Array(3);
            var34[0] = var37;
            var34[1] = var36;
            var34[2] = var36;
            var31['colors'] = var34;
            var34 = [0, 0.8, 1];
            var31['locations'] = var34;
            var34 = 'none';
            var31['pointerEvents'] = var34;
            var32 = var33.bind(var4)(var32, var31);
            var31 = new Array(2);
            var31[0] = var32;
            var34 = _closure1_slot15;
            var33 = _closure1_slot0;
            var32 = 40;
            var32 = var35[var32];
            var32 = var33.bind(var4)(var32);
            var33 = var32.ChevronSmallRightIcon;
            var32 = {'style': null, 'size': 'xs', 'color': 'interactive-muted'};
            var36 = var10.overflowChevron;
            var35 = new Array(1);
            var35[0] = var36;
            var32['style'] = var35;
            var32 = var34.bind(var4)(var33, var32);
            var31[1] = var32;
            var28['children'] = var31;
            var27 = var30.bind(var4)(var29, var28);
 1057:
            var26[1] = var27;
            var9['children'] = var26;
            var12 = var25.bind(var4)(var19, var9);
 1071:
            var9 = new Array(2);
            var9[0] = var12;
            var12 = null;
            if(var7) { _fun0008_ip = 1140; continue _fun0008 }
 1084:
            var12 = null;
            if(!var13) { _fun0008_ip = 1140; continue _fun0008 }
 1089:
            var19 = _closure1_slot15;
            var18 = _closure1_slot19;
            var13 = {};
            var24 = function onOpenPicker() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var5 = var1.ICYMIAnalytics;
                var4 = var5.trackItemInteraction;
                var2 = _closure2_slot0;
                var3 = var2.id;
                var2 = _closure2_slot2;
                var1 = 'press_reaction_picker';
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var13['onOpenPicker'] = var24;
            var13['channel'] = var23;
            var13['onPressEmoji'] = var22;
            var20 = var20.length;
            var20 = var21 === var20;
            var13['showText'] = var20;
            var12 = var19.bind(var4)(var18, var13);
 1140:
            var9[1] = var12;
            var5['children'] = var9;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = var16;
            if(var6) { _fun0008_ip = 1171; continue _fun0008 }
 1168:
            var6 = var14;
 1171:
            if(!var6) { _fun0008_ip = 1177; continue _fun0008 }
 1174:
            var6 = !var7;
 1177:
            if(!var6) { _fun0008_ip = 1276; continue _fun0008 }
 1180:
            var9 = _closure1_slot16;
            var8 = _closure1_slot5;
            var7 = {};
            var10 = var10.replyForwardButtonContainer;
            var7['style'] = var10;
            var13 = _closure1_slot15;
            var12 = _closure1_slot22;
            var10 = {};
            var10['onPress'] = var17;
            var16 = !var16;
            var10['disabled'] = var16;
            var12 = var13.bind(var4)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var13 = _closure1_slot15;
            var12 = _closure1_slot21;
            var11 = {};
            var11['onPress'] = var15;
            var14 = !var14;
            var11['disabled'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 1276:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var6;
    var3['AddEmojiButton'] = var5;
    var3['ForwardButton'] = var4;
    var3['ReplyButton'] = var2;
    return var1;
})();