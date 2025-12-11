// app/modules/icymi/native/ICYMICardInteractionRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var4 = function onAddReaction(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg3;
            var1 = null;
            if(!(var1 != var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var2 = undefined;
            var5 = var3.bind(var2)(var1);
            var1 = var5.toReactionEmoji;
            var10 = var1.bind(var5)(var6);
            var1 = 11;
            var5 = var4[var1];
            var6 = var3.bind(var2)(var5);
            var5 = var6.addReaction;
            var1 = var4[var1];
            var1 = var3.bind(var2)(var1);
            var1 = var1.ReactionLocations;
            var9 = var1.MESSAGE;
            var3 = {};
            var1 = arg4;
            var3['burst'] = var1;
            var12 = arg1;
            var11 = arg2;
            var13 = var6;
            var8 = var3;
            var1 = var13[var5](var12, var11, var10, var9, var8, var7);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot21 = var4;
    var2 = function useThread(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = arg1;
            var9 = arg2;
            var10 = arg3;
            var _closure2_slot0 = var8;
            var _closure2_slot1 = var9;
            var _closure2_slot2 = var10;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 16;
            var2 = var4[var2];
            var11 = undefined;
            var6 = var3.bind(var11)(var2);
            var4 = var6.useStateFromStoresObject;
            var2 = _closure1_slot9;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = _closure1_slot8;
            var3[1] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var1 = _closure2_slot0;
                    if(!(var4 != var1)) { _fun0003_ip = 4; continue _fun0003 }
case 6:
                    var1 = {};
                    var7 = _closure1_slot9;
                    var6 = var7.getChannel;
                    var5 = _closure2_slot1;
                    var5 = var5.id;
                    var6 = var6.bind(var7)(var5);
                    var7 = var4 != var6;
                    var5 = null;
                    if(!var7) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var5 = var6;
case 7:
                    var1['thread'] = var5;
                    var7 = _closure1_slot8;
                    var6 = var7.getCount;
                    var5 = _closure2_slot1;
                    var5 = var5.id;
                    var5 = var6.bind(var7)(var5);
                    var6 = var4 != var5;
                    var4 = 0;
                    if(!var6) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var4 = var5;
case 9:
                    var1['messageCount'] = var4;
                    var4 = _closure1_slot8;
                    var3 = var4.getMostRecentMessage;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var1['mostRecentMessage'] = var2;
                    _fun0003_ip = 11; continue _fun0003;
case 4:
                    var1 = {'thread': null, 'messageCount': 0, 'mostRecentMessage': null};
case 11:
                    return var1;
                }
            };
            var2 = var4.bind(var6)(var3, var2);
            var4 = var2.thread;
            var3 = var2.messageCount;
            var2 = var2.mostRecentMessage;
            var7 = _closure1_slot4;
            var6 = var7.useEffect;
            var5 = null;
            var5 = var5 == var8;
            if(var5) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var11 = var8.id;
case 12:
            var5 = new Array(4);
            var5[0] = var11;
            var5[1] = var10;
            var5[2] = var9;
            var5[3] = var8;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0004_ip = 6; continue _fun0004 }
case 5:
                    var3 = _closure2_slot0;
                    var2 = var4 != var3;
case 6:
                    if(!var2) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var6 = _closure2_slot1;
                    var5 = var6.hasFlag;
                    var3 = _closure1_slot12;
                    var3 = var3.HAS_THREAD;
                    var3 = var5.bind(var6)(var3);
                    if(var3) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var3 = _closure2_slot2;
case 16:
                    var2 = var3;
case 14:
                    if(!var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var6 = _closure1_slot8;
                    var5 = var6.getMostRecentMessage;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var3 = var5.bind(var6)(var3);
                    var2 = var4 == var3;
case 18:
                    if(!var2) { _fun0004_ip = 20; continue _fun0004 }
case 10:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 17;
                    var4 = var5[var2];
                    var2 = undefined;
                    var8 = var3.bind(var2)(var4);
                    var7 = var8.preload;
                    var4 = _closure2_slot0;
                    var6 = var4.id;
                    var4 = _closure2_slot1;
                    var1 = var4.id;
                    var1 = var7.bind(var8)(var6, var1);
                    var1 = 18;
                    var1 = var5[var1];
                    var3 = var3.bind(var2)(var1);
                    var2 = var3.fetchMessages;
                    var1 = {'channelId': null, 'isPreload': true, 'limit': 25};
                    var4 = var4.id;
                    var1['channelId'] = var4;
                    var1 = var2.bind(var3)(var1);
case 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var5);
            var1 = {};
            var1['thread'] = var4;
            var1['messageCount'] = var3;
            var1['mostRecentMessage'] = var2;
            return var1;
        }
    };
    var _closure1_slot22 = var2;
    var1 = function AddEmojiButton(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var12 = var2.channel;
            var _closure2_slot0 = var12;
            var11 = var2.onPressEmoji;
            var _closure2_slot1 = var11;
            var6 = var2.showText;
            var5 = var2.disabled;
            var9 = var2.handleItemInteracted;
            var _closure2_slot2 = var9;
            var2 = _closure1_slot20;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var8 = _closure1_slot4;
            var3 = var8.useCallback;
            var2 = new Array(3);
            var2[0] = var12;
            var2[1] = var11;
            var2[2] = var9;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure2_slot2;
                    var7 = null;
                    var1 = undefined;
                    var3 = 'press_reaction_picker';
                    var2 = {'actionGestureType': 'press', 'actionTargetElement': 'reaction_picker_button', 'actionIntentType': 'open', 'actionDestinationType': null};
                    var2 = var4.bind(var1)(var3, var2);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 19;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openEmojiPickerActionSheet;
                    var2 = {'pickerIntention': null, 'autoFocus': false, 'startExpanded': false};
                    var5 = _closure1_slot15;
                    var5 = var5.REACTION;
                    var2['pickerIntention'] = var5;
                    var5 = _closure2_slot1;
                    var2['onPressEmoji'] = var5;
                    var5 = _closure2_slot0;
                    var2['channel'] = var5;
                    var7 = var7 == var5;
                    var5 = undefined;
                    if(var7) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                    var6 = _closure2_slot0;
                    var5 = var6.guild_id;
case 21:
                    var2['guildId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var8 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot17;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 20;
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
            if(!var5) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var9 = var10.disabled;
case 23:
            var8[2] = var9;
            var1['style'] = var8;
            var8 = true;
            var1['accessible'] = var8;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var14 = 21;
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
            var9 = _closure1_slot16;
            var5 = 22;
            var5 = var10[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.ReactionIcon;
            var5 = {};
            var10 = 'sm';
            var5['size'] = var10;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var9 = _closure1_slot16;
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 23;
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
case 25:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function EmojiReaction(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
            var18 = var2.handleItemInteracted;
            var _closure2_slot4 = var18;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var2 = _closure1_slot20;
            var17 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 24;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useEmojiColorPalette;
            var2 = var19.burst_colors;
            var12 = null;
            if(!(var12 == var2)) { _fun0007_ip = 27; continue _fun0007 }
case 28:
            var2 = new Array(0);
case 27:
            var3 = var3.bind(var5)(var2);
            var10 = {};
            var5 = var12 != var3;
            var7 = '';
            var2 = var7;
            if(!var5) { _fun0007_ip = 29; continue _fun0007 }
case 30:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 25;
            var5 = var8[var5];
            var11 = var6.bind(var4)(var5);
            var8 = var11.hex2rgb;
            var5 = var12 == var3;
            var6 = undefined;
            if(var5) { _fun0007_ip = 31; continue _fun0007 }
case 32:
            var6 = var3.backgroundColor;
case 31:
            var5 = var12 == var3;
            var13 = undefined;
            if(var5) { _fun0007_ip = 33; continue _fun0007 }
case 34:
            var13 = var3.opacity;
case 33:
            var16 = var12 != var13;
            var5 = 0.15;
            if(!var16) { _fun0007_ip = 35; continue _fun0007 }
case 36:
            var5 = var13;
case 35:
            var5 = var8.bind(var11)(var6, var5);
            var6 = var12 != var5;
            var2 = var7;
            if(!var6) { _fun0007_ip = 29; continue _fun0007 }
case 37:
            var2 = var5;
case 29:
            var10['backgroundColor'] = var2;
            var5 = var12 == var3;
            var2 = undefined;
            if(var5) { _fun0007_ip = 38; continue _fun0007 }
case 39:
            var2 = var3.backgroundColor;
case 38:
            var10['borderColor'] = var2;
            var5 = var12 == var3;
            var2 = undefined;
            if(var5) { _fun0007_ip = 40; continue _fun0007 }
case 41:
            var2 = var3.accentColor;
case 40:
            var2 = var12 != var2;
            var13 = null;
            if(!var2) { _fun0007_ip = 42; continue _fun0007 }
case 43:
            var2 = {};
            var3 = var3.accentColor;
            var2['color'] = var3;
            var13 = var2;
case 42:
            var20 = var19.emoji;
            _closure2_slot5 = var20;
            if(var14) { _fun0007_ip = 44; continue _fun0007 }
case 45:
            var11 = var19.me;
            _fun0007_ip = 46; continue _fun0007;
case 44:
            var11 = var19.me_burst;
case 46:
            var8 = undefined;
            if(!var11) { _fun0007_ip = 47; continue _fun0007 }
case 48:
            var8 = var17.selected;
case 47:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 16;
            var3 = var7[var3];
            var16 = var2.bind(var4)(var3);
            var6 = var16.useStateFromStores;
            var3 = _closure1_slot10;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var3 = var1.guild_id;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                    var4 = _closure1_slot10;
                    var3 = var4.canChatInGuild;
                    var2 = _closure2_slot1;
                    var2 = var2.guild_id;
                    var1 = var3.bind(var4)(var2);
case 49:
                    return var1;
                }
            };
            var5 = var6.bind(var16)(var5, var3);
            var21 = _closure1_slot4;
            var16 = var21.useMemo;
            var6 = new Array(1);
            var6[0] = var20;
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var2 = var1.id;
                    var1 = null;
                    var2 = var1 != var2;
                    var5 = undefined;
                    var1 = undefined;
                    if(!var2) { _fun0009_ip = 9; continue _fun0009 }
case 51:
                    var2 = {};
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 26;
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
case 9:
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
                var5 = _closure2_slot4;
                var1 = undefined;
                var4 = 'press_reaction';
                var3 = {'actionGestureType': 'press', 'actionTargetElement': 'toggle_existing_reaction_button', 'actionIntentType': 'react', 'actionDestinationType': null};
                var3 = var5.bind(var1)(var4, var3);
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 27;
                var3 = var10[var3];
                var8 = var9.bind(var1)(var3);
                var7 = var8.handleAddOrRemoveReaction;
                var6 = _closure2_slot0;
                var14 = _closure2_slot1;
                var13 = _closure2_slot2;
                var12 = _closure2_slot3;
                var2 = 11;
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
            var3 = _closure1_slot17;
            var1 = 20;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var16 = var17.emojiContainer;
            var7 = new Array(3);
            var7[0] = var16;
            var7[1] = var8;
            var8 = var14;
            if(!var8) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var8 = var10;
case 52:
            var7[2] = var8;
            var1['style'] = var7;
            var1['onPress'] = var6;
            var16 = true;
            var1['accessible'] = var16;
            var6 = var20.name;
            var1['accessibilityLabel'] = var6;
            var5 = !var5;
            var1['disabled'] = var5;
            var7 = _closure1_slot16;
            var6 = _closure1_slot5;
            var5 = {};
            var10 = var17.innerEmojiContainer;
            var8 = new Array(2);
            var8[0] = var10;
            var10 = var11;
            if(!var11) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var10 = var17.selectedInnerEmojiContainer;
case 54:
            var8[1] = var10;
            var5['style'] = var8;
            var8 = var20.id;
            if(!(var12 != var8)) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var10 = _closure1_slot0;
            var18 = _closure1_slot2;
            var8 = 14;
            var8 = var18[var8];
            var10 = var10.bind(var4)(var8);
            var8 = var10.isAndroid;
            var8 = var8.bind(var10)();
            var19 = _closure1_slot16;
            if(var8) { _fun0007_ip = 58; continue _fun0007 }
case 59:
            var10 = _closure1_slot1;
            var18 = _closure1_slot2;
            var8 = 28;
            var8 = var18[var8];
            var10 = var10.bind(var4)(var8);
            var8 = {};
            var8['emoji'] = var20;
            var18 = _closure1_slot19;
            var8['size'] = var18;
            var18 = var17.defaultEmoji;
            var8['style'] = var18;
            var8['animate'] = var16;
            var8 = var19.bind(var4)(var10, var8);
            _fun0007_ip = 60; continue _fun0007;
case 58:
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
case 60:
            _fun0007_ip = 61; continue _fun0007;
case 56:
            var19 = _closure1_slot16;
            var18 = _closure1_slot0;
            var21 = _closure1_slot2;
            var10 = 23;
            var10 = var21[var10];
            var10 = var18.bind(var4)(var10);
            var18 = var10.Text;
            var10 = {'variant': 'text-md/medium', 'color': 'interactive-text-default', 'style': null, 'allowFontScaling': false};
            var22 = var17.defaultEmoji;
            var21 = new Array(2);
            var21[0] = var22;
            var22 = var17.emojiText;
            var21[1] = var22;
            var10['style'] = var21;
            var20 = var20.name;
            var10['children'] = var20;
            var8 = var19.bind(var4)(var18, var10);
case 61:
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot16;
            var7 = _closure1_slot5;
            var6 = {};
            var18 = var17.innerTextContainer;
            var10 = new Array(2);
            var10[0] = var18;
            if(!var11) { _fun0007_ip = 62; continue _fun0007 }
case 63:
            var11 = var17.selectedInnerTextContainer;
case 62:
            var10[1] = var11;
            var6['style'] = var10;
            var11 = _closure1_slot16;
            var10 = _closure1_slot1;
            var17 = _closure1_slot2;
            var9 = 29;
            var9 = var17[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['animate'] = var16;
            var9['count'] = var15;
            var12 = null;
            if(!var14) { _fun0007_ip = 64; continue _fun0007 }
case 65:
            var12 = var13;
case 64:
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
    var _closure1_slot24 = var1;
    var1 = function ForwardButton(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var7 = var1.onPress;
            var6 = var1.disabled;
            var1 = _closure1_slot20;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot16;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 20;
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
            if(!var6) { _fun0010_ip = 66; continue _fun0010 }
case 67:
            var8 = var9.disabled;
case 66:
            var7[2] = var8;
            var1['style'] = var7;
            var7 = true;
            var1['accessible'] = var7;
            var1['disabled'] = var6;
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 21;
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
            var7 = _closure1_slot16;
            var6 = _closure1_slot1;
            var5 = 30;
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
    var _closure1_slot25 = var1;
    var1 = function ReplyButton(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var7 = var1.onPress;
            var6 = var1.disabled;
            var1 = _closure1_slot20;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot16;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 20;
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
            if(!var6) { _fun0011_ip = 66; continue _fun0011 }
case 67:
            var8 = var9.disabled;
case 66:
            var7[2] = var8;
            var1['style'] = var7;
            var7 = true;
            var1['accessible'] = var7;
            var1['disabled'] = var6;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 21;
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
            var7 = _closure1_slot16;
            var5 = 31;
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
    var _closure1_slot26 = var1;
    var1 = function ThreadAsCommentsButton(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var11 = var2.parentMessage;
            var _closure2_slot0 = var11;
            var1 = var2.threadData;
            var _closure2_slot1 = var1;
            var7 = var2.style;
            var10 = var2.handleItemInteracted;
            var _closure2_slot2 = var10;
            var2 = _closure1_slot20;
            var4 = undefined;
            var15 = var2.bind(var4)();
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 16;
            var2 = var6[var2];
            var8 = var5.bind(var4)(var2);
            var6 = var8.useStateFromStores;
            var2 = _closure1_slot11;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var4 = _closure1_slot11;
                var3 = var4.canWithPartialContext;
                var1 = _closure1_slot13;
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
            var5 = new Array(3);
            var5[0] = var11;
            var11 = var1.thread;
            var5[1] = var11;
            var5[2] = var10;
            var3 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var5 = _closure2_slot2;
                    var1 = undefined;
                    var4 = 'press_comments';
                    var2 = {'actionGestureType': 'press', 'actionTargetElement': 'thread_comments_button', 'actionIntentType': 'navigate', 'actionDestinationType': 'channel'};
                    var2 = var5.bind(var1)(var4, var2);
                    var2 = _closure2_slot0;
                    var5 = null;
                    var2 = var5 != var2;
                    if(!var2) { _fun0013_ip = 17; continue _fun0013 }
case 68:
                    var4 = _closure2_slot1;
                    var4 = var4.thread;
                    var2 = var5 != var4;
case 17:
                    if(!var2) { _fun0013_ip = 21; continue _fun0013 }
case 8:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 32;
                    var2 = var5[var2];
                    var6 = var4.bind(var1)(var2);
                    var5 = var6.navigateToPost;
                    var2 = _closure2_slot0;
                    var4 = var2.getChannelId;
                    var4 = var4.bind(var2)();
                    var3 = _closure2_slot1;
                    var3 = var3.thread;
                    var3 = var3.guild_id;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var4, var3, var2);
case 21:
                    return var1;
                }
            };
            var5 = var6.bind(var8)(var3, var5);
            if(!var2) { _fun0012_ip = 69; continue _fun0012 }
case 70:
            var3 = var1.messageCount;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0012_ip = 69; continue _fun0012 }
case 23:
            var2 = var1.thread;
            var3 = null;
            if(!(var3 != var2)) { _fun0012_ip = 33; continue _fun0012 }
case 71:
            var2 = var1.mostRecentMessage;
            if(!(var3 == var2)) { _fun0012_ip = 72; continue _fun0012 }
case 33:
            var6 = _closure1_slot16;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 20;
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
            var11 = _closure1_slot16;
            var10 = _closure1_slot5;
            var8 = {};
            var12 = var15.commentCount;
            var8['style'] = var12;
            var14 = _closure1_slot16;
            var12 = 33;
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
case 72:
            var3 = var1.messageCount;
            var2 = 9;
            var2 = var3 > var2;
            var12 = '9+';
            if(var2) { _fun0012_ip = 73; continue _fun0012 }
case 74:
            var12 = var1.messageCount;
case 73:
            var3 = _closure1_slot16;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 20;
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
            var7 = _closure1_slot17;
            var6 = _closure1_slot5;
            var5 = {};
            var8 = var15.commentCount;
            var5['style'] = var8;
            var14 = _closure1_slot16;
            var8 = 33;
            var8 = var13[var8];
            var8 = var10.bind(var4)(var8);
            var11 = var8.ChatIcon;
            var8 = {};
            var15 = var15.commentsIcon;
            var8['style'] = var15;
            var11 = var14.bind(var4)(var11, var8);
            var8 = new Array(2);
            var8[0] = var11;
            var11 = _closure1_slot16;
            var9 = 23;
            var9 = var13[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'text-md/semibold', 'color': 'text-strong'};
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 69:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var10 = var8[var6];
    var6 = metroImportAll;
    var6 = var6.bind(var1)(var10);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var10 = var6.View;
    var _closure1_slot5 = var10;
    var10 = var6.Image;
    var _closure1_slot6 = var10;
    var6 = var6.ScrollView;
    var _closure1_slot7 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot9 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot10 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot11 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.MessageFlags;
    var _closure1_slot12 = var9;
    var9 = var6.Permissions;
    var _closure1_slot13 = var9;
    var6 = var6.HorizontalGradient;
    var _closure1_slot14 = var6;
    var6 = 8;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.EmojiIntention;
    var _closure1_slot15 = var6;
    var6 = 9;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.jsx;
    var _closure1_slot16 = var9;
    var9 = var6.jsxs;
    var _closure1_slot17 = var9;
    var6 = var6.Fragment;
    var _closure1_slot18 = var6;
    var6 = 20;
    var _closure1_slot19 = var6;
    var6 = 12;
    var6 = var8[var6];
    var10 = var7.bind(var1)(var6);
    var9 = var10.createStyles;
    var6 = function() {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
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
            var6 = 13;
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
            var3 = _closure1_slot19;
            var2['width'] = var3;
            var3 = _closure1_slot19;
            var2['height'] = var3;
            var1['defaultEmoji'] = var2;
            var2 = {'lineHeight': null, 'fontSize': 16, 'textAlign': 'center', 'paddingTop': 2};
            var4 = _closure1_slot0;
            var3 = 14;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isAndroid;
            var4 = var3.bind(var4)();
            var3 = 16;
            if(var4) { _fun0014_ip = 45; continue _fun0014 }
case 75:
            var3 = _closure1_slot19;
case 45:
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
            var3 = _closure1_slot19;
            var2['width'] = var3;
            var3 = _closure1_slot19;
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
            var7 = 15;
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
            var3 = var3.INTERACTIVE_TEXT_DEFAULT;
            var2['tintColor'] = var3;
            var1['commentsIcon'] = var2;
            return var1;
        }
    };
    var6 = var9.bind(var10)(var6);
    var _closure1_slot20 = var6;
    var6 = 44;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/icymi/native/ICYMICardInteractionRow.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function ICYMICardInteractionRow(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = arg1;
            var38 = var2.message;
            var _closure2_slot0 = var38;
            var30 = var2.channel;
            var _closure2_slot1 = var30;
            var6 = var2.guild;
            var24 = var2.hideAdditionalButtons;
            var5 = undefined;
            if(!(var24 === var5)) { _fun0015_ip = 76; continue _fun0015 }
case 77:
            var24 = false;
case 76:
            var _closure2_slot2 = var24;
            var1 = var2.isKeyMessage;
            if(!(var1 === var5)) { _fun0015_ip = 78; continue _fun0015 }
case 17:
            var1 = false;
case 78:
            var _closure2_slot3 = var1;
            var4 = var2.inForum;
            if(!(var4 === var5)) { _fun0015_ip = 79; continue _fun0015 }
case 80:
            var4 = false;
case 79:
            var8 = var2.backgroundVariant;
            if(!(var8 === var5)) { _fun0015_ip = 81; continue _fun0015 }
case 82:
            var8 = 'primary';
case 81:
            var _closure2_slot4 = var8;
            var10 = var2.id;
            var _closure2_slot5 = var10;
            var3 = var2.itemType;
            var _closure2_slot6 = var3;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var2 = _closure1_slot20;
            var22 = var2.bind(var5)();
            var2 = _closure1_slot22;
            var39 = var2.bind(var5)(var6, var38, var4);
            _closure2_slot7 = var39;
            var7 = _closure1_slot4;
            var6 = var7.useMemo;
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
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var4 = arg1;
                        var2 = var4.me_vote;
                        var1 = null;
                        if(!(var1 == var2)) { _fun0016_ip = 83; continue _fun0016 }
case 84:
                        var1 = var4.burst_count;
                        var2 = 0;
                        if(!(var1 > var2)) { _fun0016_ip = 9; continue _fun0016 }
case 85:
                        var5 = _closure3_slot0;
                        var3 = var5.push;
                        var1 = {};
                        var10 = var1;
                        var9 = var4;
                        var6 = copyDataProperties(var10, var9);
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var6 = 34;
                        var7 = var7[var6];
                        var6 = undefined;
                        var6 = var8.bind(var6)(var7);
                        var6 = var6.ReactionTypes;
                        var7 = var6.BURST;
                        var6 = 'type';
                        var1[var6] = var7;
                        var1 = var3.bind(var5)(var1);
case 9:
                        var1 = var4.count;
                        if(!(var1 > var2)) { _fun0016_ip = 83; continue _fun0016 }
case 86:
                        var3 = _closure3_slot0;
                        var2 = var3.push;
                        var1 = {};
                        var10 = var1;
                        var9 = var4;
                        var4 = copyDataProperties(var10, var9);
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 34;
                        var5 = var5[var4];
                        var4 = undefined;
                        var4 = var6.bind(var4)(var5);
                        var4 = var4.ReactionTypes;
                        var5 = var4.NORMAL;
                        var4 = 'type';
                        var1[var4] = var5;
                        var1 = var2.bind(var3)(var1);
case 83:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var26 = var6.bind(var7)(var2, var4);
            _closure2_slot8 = var26;
            var7 = _closure1_slot4;
            var6 = var7.useMemo;
            var4 = new Array(1);
            var4[0] = var30;
            var2 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0017_ip = 87; continue _fun0017 }
case 5:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 35;
                    var3 = var4[var3];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var3);
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 87:
                    return var1;
                }
            };
            var23 = var6.bind(var7)(var2, var4);
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = 36;
            var6 = var4[var6];
            var7 = var2.bind(var5)(var6);
            var6 = var7.useCanForwardMessage;
            var42 = var6.bind(var7)(var38);
            _closure2_slot9 = var42;
            var6 = 16;
            var6 = var4[var6];
            var11 = var2.bind(var5)(var6);
            var9 = var11.useStateFromStores;
            var6 = _closure1_slot11;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var4 = _closure1_slot11;
                var3 = var4.can;
                var1 = _closure1_slot13;
                var2 = var1.SEND_MESSAGES;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var41 = var9.bind(var11)(var7, var6);
            _closure2_slot10 = var41;
            var11 = _closure1_slot4;
            var9 = var11.useMemo;
            var7 = new Array(5);
            var7[0] = var24;
            var6 = var39.messageCount;
            var7[1] = var6;
            var6 = var26.length;
            var7[2] = var6;
            var7[3] = var41;
            var7[4] = var42;
            var6 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var3 = 4;
                    if(!var1) { _fun0018_ip = 5; continue _fun0018 }
case 88:
                    var3 = 6;
case 5:
                    var1 = _closure2_slot7;
                    var1 = var1.messageCount;
                    var4 = 0;
                    var2 = var3;
                    if(!(var1 > var4)) { _fun0018_ip = 76; continue _fun0018 }
case 89:
                    var1 = 1;
                    var2 = var3 - var1;
case 76:
                    var1 = _closure2_slot8;
                    var1 = var1.length;
                    var1 = var1 > var2;
                    var3 = 0;
                    if(!var1) { _fun0018_ip = 90; continue _fun0018 }
case 78:
                    var1 = _closure2_slot8;
                    var1 = var1.length;
                    var3 = var1 - var2;
case 90:
                    var1 = _closure2_slot7;
                    var1 = var1.messageCount;
                    var2 = var1 > var4;
                    var1 = {};
                    var3 = var3 > var4;
                    var1['hasOverflow'] = var3;
                    var3 = _closure2_slot2;
                    var3 = !var3;
                    if(!var3) { _fun0018_ip = 22; continue _fun0018 }
case 91:
                    var4 = _closure2_slot10;
                    if(var4) { _fun0018_ip = 92; continue _fun0018 }
case 86:
                    var4 = _closure2_slot9;
case 92:
                    var3 = var4;
case 22:
                    var1['showReplyForwardButtons'] = var3;
                    var1['showThreadAsComments'] = var2;
                    return var1;
                }
            };
            var6 = var9.bind(var11)(var6, var7);
            var17 = var6.hasOverflow;
            var34 = var6.showReplyForwardButtons;
            var35 = var6.showThreadAsComments;
            var9 = _closure1_slot4;
            var7 = var9.useCallback;
            var6 = new Array(2);
            var6[0] = var10;
            var6[1] = var3;
            var3 = function(arg1, arg2) {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 37;
                var5 = var4[var2];
                var1 = undefined;
                var9 = var3.bind(var1)(var5);
                var8 = var9.itemInteracted;
                var6 = _closure2_slot5;
                var5 = _closure2_slot6;
                var7 = arg1;
                var7 = var8.bind(var9)(var6, var5, var7);
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.feedItemActioned;
                var2 = {};
                var2['itemId'] = var6;
                var2['itemType'] = var5;
                var5 = arg2;
                var2['actionParameters'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var28 = var7.bind(var9)(var3, var6);
            _closure2_slot11 = var28;
            var9 = _closure1_slot4;
            var7 = var9.useCallback;
            var3 = var30.id;
            var6 = new Array(3);
            var6[0] = var3;
            var3 = var38.id;
            var6[1] = var3;
            var6[2] = var28;
            var3 = function(arg1, arg2) {
                var5 = _closure2_slot11;
                var1 = undefined;
                var4 = 'press_reaction';
                var3 = {'actionGestureType': 'press', 'actionTargetElement': 'add_new_reaction_button', 'actionIntentType': 'open', 'actionDestinationType': null};
                var3 = var5.bind(var1)(var4, var3);
                var6 = _closure1_slot21;
                var3 = _closure2_slot1;
                var10 = var3.id;
                var2 = _closure2_slot0;
                var9 = var2.id;
                var8 = arg1;
                var7 = arg2;
                var11 = undefined;
                var2 = var11[var6](var10, var9, var8, var7, var6);
                return var1;
            };
            var29 = var7.bind(var9)(var3, var6);
            var9 = _closure1_slot4;
            var7 = var9.useCallback;
            var6 = new Array(2);
            var6[0] = var38;
            var6[1] = var28;
            var3 = function() {
                var4 = _closure2_slot11;
                var1 = undefined;
                var3 = 'press_forward';
                var2 = {'actionGestureType': 'press', 'actionTargetElement': 'forward_button', 'actionIntentType': 'share', 'actionDestinationType': 'channel'};
                var2 = var4.bind(var1)(var3, var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 38;
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
            var43 = var7.bind(var9)(var3, var6);
            var9 = _closure1_slot4;
            var7 = var9.useCallback;
            var6 = new Array(3);
            var6[0] = var30;
            var6[1] = var38;
            var6[2] = var28;
            var3 = function() {
                var5 = _closure2_slot11;
                var1 = undefined;
                var4 = 'press_reply';
                var3 = {'actionGestureType': 'press', 'actionTargetElement': 'reply_button', 'actionIntentType': 'reply', 'actionDestinationType': 'channel'};
                var3 = var5.bind(var1)(var4, var3);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = 32;
                var5 = var4[var5];
                var10 = var3.bind(var1)(var5);
                var9 = var10.navigateToPost;
                var6 = _closure2_slot1;
                var8 = var6.id;
                var7 = var6.guild_id;
                var5 = _closure2_slot0;
                var2 = var5.id;
                var2 = var9.bind(var10)(var8, var7, var2);
                var2 = 39;
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
            var44 = var7.bind(var9)(var3, var6);
            var7 = _closure1_slot4;
            var6 = var7.useMemo;
            var3 = new Array(2);
            var3[0] = var8;
            var3[1] = var1;
            var1 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0019_ip = 93; continue _fun0019 }
case 88:
                    var2 = _closure2_slot4;
                    var1 = 'primary';
                    if(!(var1 !== var2)) { _fun0019_ip = 94; continue _fun0019 }
case 51:
                    var1 = 'secondary';
                    if(!(var1 !== var2)) { _fun0019_ip = 95; continue _fun0019 }
case 96:
                    var1 = 'base';
                    if(!(var1 !== var2)) { _fun0019_ip = 97; continue _fun0019 }
case 98:
                    var1 = undefined;
                    return var1;
case 97:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.colors;
                    var1 = var1.BACKGROUND_BASE_LOW;
                    return var1;
case 95:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.colors;
                    var1 = var1.CARD_SECONDARY_BG;
                    return var1;
case 94:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.colors;
                    var1 = var1.CARD_BACKGROUND_DEFAULT;
                    return var1;
case 93:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.colors;
                    var1 = var1.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT;
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var1, var3);
            var1 = 40;
            var1 = var4[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useToken;
            var25 = var1.bind(var2)(var3);
            var2 = _closure1_slot4;
            var1 = var2.useState;
            var31 = true;
            var3 = var1.bind(var2)(var31);
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var5)(var3, var1);
            var27 = 0;
            var15 = var2[var27];
            var1 = 1;
            var1 = var2[var1];
            _closure2_slot12 = var1;
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
                var3 = _closure2_slot12;
                var1 = var4 + var1;
                var2 = var1 >= var2;
                var1 = undefined;
                var2 = !var2;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var21 = var3.bind(var4)(var2, var1);
            var4 = _closure1_slot4;
            var3 = var4.useCallback;
            var2 = new Array(1);
            var2[0] = var28;
            var1 = function() {
                var4 = _closure2_slot11;
                var1 = undefined;
                var3 = 'scroll_reaction_row';
                var2 = {'actionGestureType': 'swipe', 'actionTargetElement': 'reaction_row_container', 'actionIntentType': 'scroll', 'actionDestinationType': null};
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var20 = var3.bind(var4)(var1, var2);
            var1 = var26.length;
            if(!(var27 === var1)) { _fun0015_ip = 99; continue _fun0015 }
case 100:
            var1 = null;
            if(var24) { _fun0015_ip = 101; continue _fun0015 }
case 99:
            var4 = _closure1_slot16;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var22.container;
            var2['style'] = var6;
            var8 = _closure1_slot16;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var22.emojisRowContainer;
            var6['style'] = var9;
            var9 = var26.length;
            if(!(!(var9 > var27))) { _fun0015_ip = 102; continue _fun0015 }
case 103:
            var9 = null;
            if(!var23) { _fun0015_ip = 104; continue _fun0015 }
case 102:
            var12 = _closure1_slot17;
            var11 = _closure1_slot5;
            var10 = {};
            var14 = var22.emojisContainer;
            var13 = new Array(1);
            var13[0] = var14;
            var10['style'] = var13;
            var18 = _closure1_slot17;
            var14 = _closure1_slot7;
            var13 = {};
            var13['horizontal'] = var31;
            var13['scrollEnabled'] = var17;
            var31 = {};
            var32 = 6;
            var31['gap'] = var32;
            var13['contentContainerStyle'] = var31;
            var13['onScroll'] = var21;
            var13['onScrollEndDrag'] = var20;
            var20 = false;
            var13['showsHorizontalScrollIndicator'] = var20;
            var21 = !var24;
            if(!var21) { _fun0015_ip = 105; continue _fun0015 }
case 106:
            var20 = var34;
            if(var34) { _fun0015_ip = 107; continue _fun0015 }
case 108:
            var20 = var35;
case 107:
            var21 = var20;
case 105:
            if(!var21) { _fun0015_ip = 109; continue _fun0015 }
case 110:
            var32 = _closure1_slot17;
            var31 = _closure1_slot5;
            var20 = {};
            var33 = var22.replyForwardButtonContainer;
            var20['style'] = var33;
            if(!var35) { _fun0015_ip = 111; continue _fun0015 }
case 112:
            var37 = _closure1_slot16;
            var36 = _closure1_slot27;
            var33 = {};
            var33['threadData'] = var39;
            var33['parentMessage'] = var38;
            var33['handleItemInteracted'] = var28;
            var35 = var37.bind(var5)(var36, var33);
case 111:
            var33 = new Array(2);
            var33[0] = var35;
            if(!var34) { _fun0015_ip = 113; continue _fun0015 }
case 114:
            var37 = _closure1_slot17;
            var36 = _closure1_slot18;
            var35 = {};
            var40 = _closure1_slot16;
            var39 = _closure1_slot26;
            var38 = {};
            var38['onPress'] = var44;
            var41 = !var41;
            var38['disabled'] = var41;
            var39 = var40.bind(var5)(var39, var38);
            var38 = new Array(2);
            var38[0] = var39;
            var41 = _closure1_slot16;
            var40 = _closure1_slot25;
            var39 = {};
            var39['onPress'] = var43;
            var42 = !var42;
            var39['disabled'] = var42;
            var39 = var41.bind(var5)(var40, var39);
            var38[1] = var39;
            var35['children'] = var38;
            var34 = var37.bind(var5)(var36, var35);
case 113:
            var33[1] = var34;
            var20['children'] = var33;
            var21 = var32.bind(var5)(var31, var20);
case 109:
            var20 = new Array(3);
            var20[0] = var21;
            var21 = var26.map;
            var16 = function(arg1, arg2) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var9 = arg1;
                    var5 = _closure1_slot16;
                    var4 = _closure1_slot5;
                    var3 = {};
                    var6 = _closure1_slot24;
                    var1 = {};
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1['messageId'] = var2;
                    var2 = _closure2_slot1;
                    var1['channel'] = var2;
                    var1['reaction'] = var9;
                    var12 = var9.type;
                    var13 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var11 = 34;
                    var10 = var2[var11];
                    var2 = undefined;
                    var10 = var13.bind(var2)(var10);
                    var10 = var10.ReactionTypes;
                    var10 = var10.BURST;
                    if(!(var12 !== var10)) { _fun0020_ip = 10; continue _fun0020 }
case 115:
                    var10 = var9.count;
                    _fun0020_ip = 91; continue _fun0020;
case 10:
                    var10 = var9.burst_count;
case 91:
                    var1['count'] = var10;
                    var9 = var9.type;
                    var10 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var11];
                    var8 = var10.bind(var2)(var8);
                    var8 = var8.ReactionTypes;
                    var8 = var8.BURST;
                    var8 = var9 === var8;
                    var1['isBurstReaction'] = var8;
                    var7 = _closure2_slot11;
                    var1['handleItemInteracted'] = var7;
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
            if(var24) { _fun0015_ip = 116; continue _fun0015 }
case 117:
            var21 = null;
            if(!var23) { _fun0015_ip = 116; continue _fun0015 }
case 118:
            var26 = _closure1_slot16;
            var24 = _closure1_slot23;
            var23 = {};
            var23['channel'] = var30;
            var23['onPressEmoji'] = var29;
            var23['handleItemInteracted'] = var28;
            var21 = var26.bind(var5)(var24, var23);
case 116:
            var20[2] = var21;
            var13['children'] = var20;
            var14 = var18.bind(var5)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var14 = null;
            if(!var17) { _fun0015_ip = 119; continue _fun0015 }
case 120:
            var14 = null;
            if(!var15) { _fun0015_ip = 119; continue _fun0015 }
case 121:
            var17 = _closure1_slot17;
            var16 = _closure1_slot18;
            var15 = {};
            var21 = _closure1_slot16;
            var26 = _closure1_slot1;
            var23 = _closure1_slot2;
            var18 = 41;
            var18 = var23[var18];
            var20 = var26.bind(var5)(var18);
            var18 = {};
            var24 = var22.gradient;
            var18['style'] = var24;
            var24 = _closure1_slot14;
            var28 = var24.START;
            var18['start'] = var28;
            var24 = var24.END;
            var18['end'] = var24;
            var24 = 42;
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
            var21 = _closure1_slot16;
            var20 = _closure1_slot0;
            var19 = 43;
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
case 119:
            var13[1] = var14;
            var10['children'] = var13;
            var9 = var12.bind(var5)(var11, var10);
case 104:
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 101:
            return var1;
        }
    };
    var3['default'] = var5;
    var3['onAddReaction'] = var4;
    var3['useThread'] = var2;
    return var1;
})();