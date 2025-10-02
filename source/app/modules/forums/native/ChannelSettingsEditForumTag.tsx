// app/modules/forums/native/ChannelSettingsEditForumTag.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
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
    var11 = 0;
    var4 = var6[var11];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot8 = var7;
    var4 = var4.EmojiIntention;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {'display': 'flex', 'flex': 1};
    var10 = 8;
    var10 = var6[var10];
    var10 = var12.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_BASE_SECONDARY;
    var4['backgroundColor'] = var10;
    var7['container'] = var4;
    var4 = {'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'height': 24, 'width': 24};
    var7['emojiIconWrapper'] = var4;
    var4 = {'height': 20, 'width': 20};
    var7['imageEmoji'] = var4;
    var4 = 26;
    var10 = {'fontSize': 20, 'lineHeight': 26};
    var7['textEmoji'] = var10;
    var10 = {'width': '100%', 'flexGrow': 1};
    var7['nameInput'] = var10;
    var10 = {};
    var10['flex'] = var11;
    var7['saveButton'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot12 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/ChannelSettingsEditForumTag.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelSettingsEditForumTag(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.channelId;
            var _closure2_slot0 = var1;
            var6 = var2.tag;
            var _closure2_slot1 = var6;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var2 = _closure1_slot12;
            var28 = var2.bind(var4)();
            var _closure2_slot2 = var28;
            var9 = null;
            var12 = var9 == var6;
            var _closure2_slot3 = var12;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useNavigation;
            var7 = var2.bind(var3)();
            var _closure2_slot4 = var7;
            var5 = _closure1_slot4;
            var3 = var5.useState;
            var8 = var9 != var6;
            var2 = null;
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = {};
            var10 = var6.emojiId;
            var8['id'] = var10;
            var10 = var6.emojiName;
            var8['name'] = var10;
            var2 = var8;
case 2:
            var3 = var3.bind(var5)(var2);
            var2 = _closure1_slot3;
            var10 = 2;
            var2 = var2.bind(var4)(var3, var10);
            var5 = 0;
            var17 = var2[var5];
            _closure2_slot5 = var17;
            var3 = 1;
            var2 = var2[var3];
            _closure2_slot6 = var2;
            var13 = _closure1_slot4;
            var8 = var13.useState;
            var2 = var9 == var6;
            var14 = undefined;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = var6.name;
case 4:
            var16 = var9 != var14;
            var22 = '';
            var2 = var22;
            if(!var16) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var14;
case 6:
            var8 = var8.bind(var13)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var8, var10);
            var19 = var2[var5];
            _closure2_slot7 = var19;
            var2 = var2[var3];
            _closure2_slot8 = var2;
            var13 = _closure1_slot4;
            var8 = var13.useState;
            var14 = var9 == var6;
            var2 = undefined;
            if(var14) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var6.moderated;
case 8:
            var8 = var8.bind(var13)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var8, var10);
            var21 = var2[var5];
            _closure2_slot9 = var21;
            var2 = var2[var3];
            _closure2_slot10 = var2;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 10;
            var8 = var5[var2];
            var14 = var3.bind(var4)(var8);
            var13 = var14.useStateFromStores;
            var8 = _closure1_slot7;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var13.bind(var14)(var10, var8);
            _closure2_slot11 = var8;
            var2 = var5[var2];
            var8 = var3.bind(var4)(var2);
            var5 = var8.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    var4 = var1 == var3;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var4 = _closure2_slot5;
                    var3 = var4.id;
case 10:
                    var3 = var1 != var3;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = _closure1_slot6;
                    var3 = var4.getUsableCustomEmojiById;
                    var2 = _closure2_slot5;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 12:
                    return var1;
                }
            };
            var34 = var5.bind(var8)(var3, var2);
            var5 = _closure1_slot4;
            var3 = var5.useRef;
            var2 = {};
            var2['emoji'] = var17;
            var2['tagName'] = var19;
            var2['moderated'] = var21;
            var2 = var3.bind(var5)(var2);
            _closure2_slot12 = var2;
            var8 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var17;
            var3[1] = var19;
            var3[2] = var21;
            var2 = function() {
                var2 = _closure2_slot12;
                var1 = {};
                var4 = _closure2_slot5;
                var1['emoji'] = var4;
                var4 = _closure2_slot7;
                var1['tagName'] = var4;
                var3 = _closure2_slot9;
                var1['moderated'] = var3;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var2 = var8.bind(var5)(var2, var3);
            var8 = var5.useLayoutEffect;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var12;
            var2 = function() {
                var3 = _closure2_slot4;
                var2 = var3.setOptions;
                var1 = {};
                var4 = function headerTitle() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var4 = _closure1_slot10;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 11;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.Text;
                        var1 = {'variant': 'redesign/heading-18/bold', 'color': 'header-primary', 'accessibilityRole': 'header'};
                        var5 = _closure2_slot3;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var6 = 12;
                        var7 = var10[var6];
                        var7 = var9.bind(var3)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var6 = var10[var6];
                        var6 = var9.bind(var3)(var6);
                        var6 = var6.t;
                        if(var5) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                        var5 = var6.zeVg5e;
                        var5 = var7.bind(var8)(var5);
                        _fun0003_ip = 16; continue _fun0003;
case 14:
                        var6 = var6./jubeH;
                        var5 = var7.bind(var8)(var6);
case 16:
                        var1['children'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    }
                };
                var1['headerTitle'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var8.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = new Array(4);
            var2[0] = var12;
            var2[1] = var7;
            var2[2] = var1;
            var7 = var9 == var6;
            var1 = undefined;
            if(var7) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var1 = var6.id;
case 17:
            var2[3] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot12;
                    var2 = var2.current;
                    var8 = var2.tagName;
                    var7 = var2.emoji;
                    var2 = var2.moderated;
                    var3 = '';
                    if(!(var3 !== var8)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var3 = _closure2_slot3;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 13;
                    var4 = var6[var4];
                    var6 = undefined;
                    var5 = var5.bind(var6)(var4);
                    if(var3) { _fun0004_ip = 2; continue _fun0004 }
case 21:
                    var9 = var5.updateForumTag;
                    var4 = {};
                    var10 = _closure2_slot1;
                    var3 = null;
                    var11 = var3 == var10;
                    var10 = undefined;
                    if(var11) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var11 = _closure2_slot1;
                    var10 = var11.id;
case 22:
                    var4['id'] = var10;
                    var4['name'] = var8;
                    var11 = var3 == var7;
                    var10 = undefined;
                    if(var11) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var10 = var7.id;
case 24:
                    var4['emojiId'] = var10;
                    var10 = var3 == var7;
                    var3 = undefined;
                    if(var10) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var3 = var7.name;
case 26:
                    var4['emojiName'] = var3;
                    var4['moderated'] = var2;
                    var3 = _closure2_slot0;
                    var3 = var9.bind(var5)(var4, var3);
                    _fun0004_ip = 28; continue _fun0004;
case 2:
                    var4 = var5.createForumTag;
                    var3 = {};
                    var3['name'] = var8;
                    var8 = null;
                    var10 = var8 == var7;
                    var9 = undefined;
                    if(var10) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var9 = var7.id;
case 29:
                    var3['emojiId'] = var9;
                    var8 = var8 == var7;
                    var6 = undefined;
                    if(var8) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var6 = var7.name;
case 31:
                    var3['emojiName'] = var6;
                    var3['moderated'] = var2;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var3, var2);
case 28:
                    var2 = _closure2_slot4;
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
case 19:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            _closure2_slot13 = var1;
            var1 = function handlePressEmoji(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.id;
                    var5 = null;
                    if(!(var5 == var2)) { _fun0005_ip = 13; continue _fun0005 }
case 33:
                    var2 = var1.surrogates;
                    if(!(var5 != var2)) { _fun0005_ip = 13; continue _fun0005 }
case 34:
                    var3 = var1.surrogates;
                    var2 = '';
                    if(!(var2 === var3)) { _fun0005_ip = 35; continue _fun0005 }
case 13:
                    var6 = var1.name;
                    _fun0005_ip = 36; continue _fun0005;
case 35:
                    var6 = var1.surrogates;
case 36:
                    var4 = _closure2_slot6;
                    var3 = {};
                    var7 = var1.id;
                    var3['id'] = var7;
                    var1 = var1.id;
                    var7 = var5 != var1;
                    var1 = undefined;
                    var5 = undefined;
                    if(var7) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    var5 = var6;
case 37:
                    var3['name'] = var5;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot7;
                    var3 = '';
                    if(!(var3 !== var4)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var4 = _closure2_slot4;
                    var3 = var4.setOptions;
                    var2 = {};
                    var5 = function headerRight() {
                        var4 = _closure1_slot10;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 14;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var5 = _closure2_slot13;
                        var1['onPress'] = var5;
                        var5 = 12;
                        var6 = var9[var5];
                        var6 = var8.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var5 = var5.t;
                        var5 = var5.R3BPHx;
                        var5 = var6.bind(var7)(var5);
                        var1['text'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2['headerRight'] = var5;
                    var2 = var3.bind(var4)(var2);
case 39:
                    return var1;
                }
            };
            _closure2_slot14 = var1;
            var3 = _closure1_slot10;
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var1 = 15;
            var1 = var23[var1];
            var1 = var24.bind(var4)(var1);
            var2 = var1.RedesignCompat;
            var1 = {};
            var7 = _closure1_slot11;
            var6 = _closure1_slot5;
            var5 = {};
            var8 = var28.container;
            var5['style'] = var8;
            var10 = 16;
            var8 = var23[var10];
            var8 = var24.bind(var4)(var8);
            var13 = var8.FormSection;
            var8 = {};
            var14 = var23[var10];
            var14 = var24.bind(var4)(var14);
            var16 = var14.FormHint;
            var14 = {};
            var20 = 12;
            var18 = var23[var20];
            var18 = var24.bind(var4)(var18);
            var26 = var18.intl;
            var25 = var26.string;
            var18 = var23[var20];
            var18 = var24.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.3v8kZG;
            var18 = var25.bind(var26)(var18);
            var14['children'] = var18;
            var14 = var3.bind(var4)(var16, var14);
            var8['hint'] = var14;
            var14 = var23[var10];
            var14 = var24.bind(var4)(var14);
            var16 = var14.FormRow;
            var14 = {};
            var18 = 17;
            var23 = var23[var18];
            var23 = var24.bind(var4)(var23);
            var25 = var23.PressableOpacity;
            var24 = {};
            var23 = var28.emojiIconWrapper;
            var24['style'] = var23;
            var23 = 'button';
            var24['accessibilityRole'] = var23;
            var26 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEmojiPickerActionSheet;
                var2 = {};
                var7 = _closure2_slot14;
                var2['onPressEmoji'] = var7;
                var6 = _closure1_slot9;
                var6 = var6.COMMUNITY_CONTENT;
                var2['pickerIntention'] = var6;
                var5 = _closure2_slot11;
                var2['channel'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var24['onPress'] = var26;
            if(!(var9 != var17)) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var26 = var17.name;
            if(!(var9 == var26)) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var26 = var17.id;
            if(!(var9 != var26)) { _fun0001_ip = 41; continue _fun0001 }
case 43:
            var29 = _closure1_slot10;
            var27 = _closure1_slot1;
            var30 = _closure1_slot2;
            var26 = 19;
            var26 = var30[var26];
            var27 = var27.bind(var4)(var26);
            var26 = {};
            var30 = var28.textEmoji;
            var26['textEmojiStyle'] = var30;
            var30 = var28.imageEmoji;
            var26['fastImageStyle'] = var30;
            var31 = var9 != var34;
            var30 = undefined;
            if(!var31) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var32 = _closure1_slot1;
            var33 = _closure1_slot2;
            var31 = 20;
            var31 = var33[var31];
            var33 = var32.bind(var4)(var31);
            var32 = var33.getEmojiURL;
            var31 = {};
            var35 = var34.id;
            var31['id'] = var35;
            var34 = var34.animated;
            var31['animated'] = var34;
            var34 = _closure1_slot8;
            var31['size'] = var34;
            var30 = var32.bind(var33)(var31);
case 45:
            var26['src'] = var30;
            var30 = var9 == var17;
            var31 = undefined;
            if(var30) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var31 = var17.name;
case 47:
            var32 = var9 != var31;
            var30 = var22;
            if(!var32) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var30 = var31;
case 49:
            var26['name'] = var30;
            var26 = var29.bind(var4)(var27, var26);
            _fun0001_ip = 51; continue _fun0001;
case 41:
            var30 = _closure1_slot10;
            var29 = _closure1_slot0;
            var31 = _closure1_slot2;
            var27 = 21;
            var27 = var31[var27];
            var27 = var29.bind(var4)(var27);
            var29 = var27.ReactionIcon;
            var27 = {};
            var26 = var30.bind(var4)(var29, var27);
case 51:
            var24['children'] = var26;
            var24 = var3.bind(var4)(var25, var24);
            var14['leading'] = var24;
            var26 = _closure1_slot10;
            var30 = _closure1_slot0;
            var27 = _closure1_slot2;
            var24 = 22;
            var24 = var27[var24];
            var24 = var30.bind(var4)(var24);
            var25 = var24.TextInput;
            var24 = {'maxLength': 20, 'style': null, 'value': null, 'autoCorrect': false, 'autoCapitalize': 'none', 'returnKeyType': 'done'};
            var28 = var28.nameInput;
            var24['style'] = var28;
            var24['value'] = var19;
            var28 = function onChangeText(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure2_slot8;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    var3 = '';
                    if(!(var3 !== var4)) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                    var4 = _closure2_slot4;
                    var3 = var4.setOptions;
                    var2 = {};
                    var5 = function headerRight() {
                        var4 = _closure1_slot10;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 14;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var6 = _closure2_slot2;
                        var6 = var6.saveButton;
                        var1['style'] = var6;
                        var5 = _closure2_slot13;
                        var1['onPress'] = var5;
                        var5 = 12;
                        var6 = var9[var5];
                        var6 = var8.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var5 = var5.t;
                        var5 = var5.R3BPHx;
                        var5 = var6.bind(var7)(var5);
                        var1['text'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2['headerRight'] = var5;
                    var2 = var3.bind(var4)(var2);
case 52:
                    return var1;
                }
            };
            var24['onChangeText'] = var28;
            var28 = var27[var20];
            var28 = var30.bind(var4)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var27 = var27[var20];
            var27 = var30.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.aMSq0d;
            var27 = var28.bind(var29)(var27);
            var24['placeholder'] = var27;
            var24 = var26.bind(var4)(var25, var24);
            var14['label'] = var24;
            if(!(var9 == var17)) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var17 = null;
            if(!(var22 !== var19)) { _fun0001_ip = 56; continue _fun0001 }
case 54:
            var22 = _closure1_slot10;
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var18 = var25[var18];
            var18 = var24.bind(var4)(var18);
            var19 = var18.PressableOpacity;
            var18 = {};
            var18['accessibilityRole'] = var23;
            var23 = function onPress() {
                var4 = _closure2_slot6;
                var1 = undefined;
                var3 = null;
                var3 = var4.bind(var1)(var3);
                var4 = _closure2_slot8;
                var3 = '';
                var3 = var4.bind(var1)(var3);
                var4 = _closure2_slot4;
                var3 = var4.setOptions;
                var2 = {};
                var2['headerRight'] = var1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var18['onPress'] = var23;
            var23 = 23;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var24 = var23.CircleXIcon;
            var23 = {};
            var25 = 'xs';
            var23['size'] = var25;
            var23 = var22.bind(var4)(var24, var23);
            var18['children'] = var23;
            var17 = var22.bind(var4)(var19, var18);
case 56:
            var14['trailing'] = var17;
            var14 = var3.bind(var4)(var16, var14);
            var8['children'] = var14;
            var13 = var3.bind(var4)(var13, var8);
            var8 = new Array(3);
            var8[0] = var13;
            var16 = _closure1_slot10;
            var24 = _closure1_slot0;
            var19 = _closure1_slot2;
            var13 = var19[var10];
            var13 = var24.bind(var4)(var13);
            var14 = var13.FormSection;
            var13 = {};
            var17 = var19[var10];
            var17 = var24.bind(var4)(var17);
            var18 = var17.FormSwitchRow;
            var17 = {};
            var22 = var19[var20];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var19 = var19[var20];
            var19 = var24.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.rMH+rq;
            var19 = var22.bind(var23)(var19);
            var17['label'] = var19;
            var19 = var9 != var21;
            if(!var19) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            var19 = var21;
case 57:
            var17['value'] = var19;
            var19 = function onValueChange() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot9;
                    if(var2) { _fun0007_ip = 53; continue _fun0007 }
case 59:
                    var4 = _closure2_slot10;
                    var3 = undefined;
                    var2 = true;
                    var2 = var4.bind(var3)(var2);
                    _fun0007_ip = 60; continue _fun0007;
case 53:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var5 = var4 == var2;
                    var3 = undefined;
                    var2 = undefined;
                    if(var5) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                    var5 = _closure2_slot1;
                    var2 = var5.moderated;
case 61:
                    if(!(var4 != var2)) { _fun0007_ip = 63; continue _fun0007 }
case 52:
                    var4 = _closure2_slot10;
                    var2 = false;
                    var2 = var4.bind(var3)(var2);
                    _fun0007_ip = 60; continue _fun0007;
case 63:
                    var2 = _closure2_slot10;
                    var2 = var2.bind(var3)(var3);
case 60:
                    var3 = _closure2_slot7;
                    var2 = '';
                    if(!(var2 !== var3)) { _fun0007_ip = 25; continue _fun0007 }
case 64:
                    var3 = _closure2_slot4;
                    var2 = var3.setOptions;
                    var1 = {};
                    var4 = function headerRight() {
                        var4 = _closure1_slot10;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 14;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var6 = _closure2_slot2;
                        var6 = var6.saveButton;
                        var1['style'] = var6;
                        var5 = _closure2_slot13;
                        var1['onPress'] = var5;
                        var5 = 12;
                        var6 = var9[var5];
                        var6 = var8.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var5 = var5.t;
                        var5 = var5.R3BPHx;
                        var5 = var6.bind(var7)(var5);
                        var1['text'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var1['headerRight'] = var4;
                    var1 = var2.bind(var3)(var1);
case 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var17['onValueChange'] = var19;
            var17 = var16.bind(var4)(var18, var17);
            var13['children'] = var17;
            var13 = var16.bind(var4)(var14, var13);
            var8[1] = var13;
            var9 = null;
            if(var12) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var12 = _closure1_slot10;
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = var16[var10];
            var10 = var19.bind(var4)(var10);
            var11 = var10.FormSection;
            var10 = {};
            var13 = 24;
            var13 = var16[var13];
            var13 = var19.bind(var4)(var13);
            var14 = var13.TableRow;
            var13 = {};
            var17 = 'danger';
            var13['variant'] = var17;
            var17 = var16[var20];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var20];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.huYSMj;
            var16 = var17.bind(var18)(var16);
            var13['label'] = var16;
            var15 = function onPress() {
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 25;
                var2 = var9[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.show;
                var2 = {};
                var8 = _closure1_slot0;
                var5 = 12;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var6 = var6.t;
                var6 = var6.huYSMj;
                var6 = var7.bind(var10)(var6);
                var2['title'] = var6;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var6 = var6.t;
                var6 = var6.bkAFCQ;
                var6 = var7.bind(var10)(var6);
                var2['body'] = var6;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var6 = var6.t;
                var6 = var6.gm1Ven;
                var6 = var7.bind(var10)(var6);
                var2['cancelText'] = var6;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.p89ACg;
                var5 = var6.bind(var7)(var5);
                var2['confirmText'] = var5;
                var5 = function onConfirm() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var2 = _closure2_slot3;
                        if(var2) { _fun0008_ip = 67; continue _fun0008 }
case 59:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 13;
                        var3 = var3[var2];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.deleteForumTag;
                        var3 = _closure2_slot0;
                        var2 = _closure2_slot1;
                        var2 = var2.id;
                        var2 = var4.bind(var5)(var3, var2);
                        var2 = _closure2_slot4;
                        var1 = var2.pop;
                        var1 = var1.bind(var2)();
case 67:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2['onConfirm'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var13['onPress'] = var15;
            var13 = var12.bind(var4)(var14, var13);
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 65:
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();