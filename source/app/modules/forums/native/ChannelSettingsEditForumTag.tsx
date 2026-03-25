// app/modules/forums/native/ChannelSettingsEditForumTag.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
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
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
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
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
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
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'display': 'flex', 'flex': 1};
    var11 = 8;
    var12 = var6[var11];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var9['backgroundColor'] = var12;
    var4['container'] = var9;
    var9 = {};
    var12 = 12;
    var9['paddingHorizontal'] = var12;
    var4['sections'] = var9;
    var9 = {};
    var9['marginTop'] = var11;
    var4['hint'] = var9;
    var9 = {'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'height': 24, 'width': 24};
    var4['emojiIconWrapper'] = var9;
    var9 = {'height': 20, 'width': 20};
    var4['imageEmoji'] = var9;
    var9 = {'fontSize': 20, 'lineHeight': 26};
    var4['textEmoji'] = var9;
    var9 = {'width': '100%', 'flexGrow': 1};
    var4['nameInput'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['saveButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 27;
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
            var19 = var2.bind(var4)();
            var _closure2_slot2 = var19;
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
            var21 = var2[var5];
            _closure2_slot5 = var21;
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
            var25 = '';
            var2 = var25;
            if(!var16) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var14;
case 6:
            var8 = var8.bind(var13)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var8, var10);
            var24 = var2[var5];
            _closure2_slot7 = var24;
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
            var22 = var2[var5];
            _closure2_slot9 = var22;
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
            var36 = var5.bind(var8)(var3, var2);
            var5 = _closure1_slot4;
            var3 = var5.useRef;
            var2 = {};
            var2['emoji'] = var21;
            var2['tagName'] = var24;
            var2['moderated'] = var22;
            var2 = var3.bind(var5)(var2);
            _closure2_slot12 = var2;
            var8 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var21;
            var3[1] = var24;
            var3[2] = var22;
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
                        var1 = {'variant': 'redesign/heading-18/bold', 'color': 'mobile-text-heading-primary', 'accessibilityRole': 'header'};
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
                        var5 = var6.zeVg5d;
                        var5 = var7.bind(var8)(var5);
                        _fun0003_ip = 16; continue _fun0003;
case 14:
                        var6 = var6["/jubeD"];
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
                    if(var3) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var9 = var5.updateForumTag;
                    var4 = {};
                    var10 = _closure2_slot1;
                    var3 = null;
                    var11 = var3 == var10;
                    var10 = undefined;
                    if(var11) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var11 = _closure2_slot1;
                    var10 = var11.id;
case 23:
                    var4['id'] = var10;
                    var4['name'] = var8;
                    var11 = var3 == var7;
                    var10 = undefined;
                    if(var11) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var10 = var7.id;
case 25:
                    var4['emojiId'] = var10;
                    var10 = var3 == var7;
                    var3 = undefined;
                    if(var10) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var3 = var7.name;
case 27:
                    var4['emojiName'] = var3;
                    var4['moderated'] = var2;
                    var3 = _closure2_slot0;
                    var3 = var9.bind(var5)(var4, var3);
                    _fun0004_ip = 29; continue _fun0004;
case 21:
                    var4 = var5.createForumTag;
                    var3 = {};
                    var3['name'] = var8;
                    var8 = null;
                    var10 = var8 == var7;
                    var9 = undefined;
                    if(var10) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var9 = var7.id;
case 30:
                    var3['emojiId'] = var9;
                    var8 = var8 == var7;
                    var6 = undefined;
                    if(var8) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var6 = var7.name;
case 32:
                    var3['emojiName'] = var6;
                    var3['moderated'] = var2;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var3, var2);
case 29:
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
case 34:
                    var2 = var1.surrogates;
                    if(!(var5 != var2)) { _fun0005_ip = 13; continue _fun0005 }
case 35:
                    var3 = var1.surrogates;
                    var2 = '';
                    if(!(var2 === var3)) { _fun0005_ip = 36; continue _fun0005 }
case 13:
                    var6 = var1.name;
                    _fun0005_ip = 37; continue _fun0005;
case 36:
                    var6 = var1.surrogates;
case 37:
                    var4 = _closure2_slot6;
                    var3 = {};
                    var7 = var1.id;
                    var3['id'] = var7;
                    var1 = var1.id;
                    var7 = var5 != var1;
                    var1 = undefined;
                    var5 = undefined;
                    if(var7) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var5 = var6;
case 38:
                    var3['name'] = var5;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot7;
                    var3 = '';
                    if(!(var3 !== var4)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
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
                        var5 = var5.R3BPH+;
                        var5 = var6.bind(var7)(var5);
                        var1['text'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2['headerRight'] = var5;
                    var2 = var3.bind(var4)(var2);
case 40:
                    return var1;
                }
            };
            _closure2_slot14 = var1;
            var3 = _closure1_slot10;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var19.container;
            var1['style'] = var5;
            var7 = _closure1_slot11;
            var26 = _closure1_slot0;
            var20 = _closure1_slot2;
            var5 = 15;
            var5 = var20[var5];
            var5 = var26.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var28 = 24;
            var5['spacing'] = var28;
            var8 = var19.sections;
            var5['style'] = var8;
            var8 = {};
            var10 = 16;
            var13 = var20[var10];
            var13 = var26.bind(var4)(var13);
            var16 = var13.TableRowGroup;
            var14 = {};
            var13 = 17;
            var17 = var20[var13];
            var17 = var26.bind(var4)(var17);
            var18 = var17.TableRow;
            var17 = {};
            var23 = 18;
            var20 = var20[var23];
            var20 = var26.bind(var4)(var20);
            var26 = var20.PressableOpacity;
            var20 = {};
            var27 = var19.emojiIconWrapper;
            var20['style'] = var27;
            var29 = 'button';
            var20['accessibilityRole'] = var29;
            var27 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
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
            var20['onPress'] = var27;
            if(!(var9 != var21)) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var27 = var21.name;
            if(!(var9 == var27)) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var27 = var21.id;
            if(!(var9 != var27)) { _fun0001_ip = 42; continue _fun0001 }
case 44:
            var31 = _closure1_slot10;
            var30 = _closure1_slot1;
            var32 = _closure1_slot2;
            var27 = 20;
            var27 = var32[var27];
            var30 = var30.bind(var4)(var27);
            var27 = {};
            var32 = var19.textEmoji;
            var27['textEmojiStyle'] = var32;
            var32 = var19.imageEmoji;
            var27['fastImageStyle'] = var32;
            var33 = var9 != var36;
            var32 = undefined;
            if(!var33) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var34 = _closure1_slot1;
            var35 = _closure1_slot2;
            var33 = 21;
            var33 = var35[var33];
            var35 = var34.bind(var4)(var33);
            var34 = var35.getEmojiURL;
            var33 = {};
            var37 = var36.id;
            var33['id'] = var37;
            var36 = var36.animated;
            var33['animated'] = var36;
            var36 = _closure1_slot8;
            var33['size'] = var36;
            var32 = var34.bind(var35)(var33);
case 46:
            var27['src'] = var32;
            var32 = var9 == var21;
            var33 = undefined;
            if(var32) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var33 = var21.name;
case 48:
            var34 = var9 != var33;
            var32 = var25;
            if(!var34) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var32 = var33;
case 50:
            var27['name'] = var32;
            var27 = var31.bind(var4)(var30, var27);
            _fun0001_ip = 52; continue _fun0001;
case 42:
            var32 = _closure1_slot10;
            var31 = _closure1_slot0;
            var33 = _closure1_slot2;
            var30 = 22;
            var30 = var33[var30];
            var30 = var31.bind(var4)(var30);
            var31 = var30.ReactionIcon;
            var30 = {};
            var27 = var32.bind(var4)(var31, var30);
case 52:
            var20['children'] = var27;
            var20 = var3.bind(var4)(var26, var20);
            var17['icon'] = var20;
            var30 = _closure1_slot10;
            var34 = _closure1_slot0;
            var31 = _closure1_slot2;
            var20 = 23;
            var20 = var31[var20];
            var20 = var34.bind(var4)(var20);
            var27 = var20.TextInput;
            var26 = {'maxLength': 20, 'style': null, 'value': null, 'autoCorrect': false, 'autoCapitalize': 'none', 'returnKeyType': 'done'};
            var20 = var19.nameInput;
            var26['style'] = var20;
            var26['value'] = var24;
            var20 = function onChangeText(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure2_slot8;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    var3 = '';
                    if(!(var3 !== var4)) { _fun0006_ip = 53; continue _fun0006 }
case 54:
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
                        var5 = var5.R3BPH+;
                        var5 = var6.bind(var7)(var5);
                        var1['text'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2['headerRight'] = var5;
                    var2 = var3.bind(var4)(var2);
case 53:
                    return var1;
                }
            };
            var26['onChangeText'] = var20;
            var20 = 12;
            var32 = var31[var20];
            var32 = var34.bind(var4)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var31 = var31[var20];
            var31 = var34.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31.aMSq0a;
            var31 = var32.bind(var33)(var31);
            var26['placeholder'] = var31;
            var26 = var30.bind(var4)(var27, var26);
            var17['label'] = var26;
            if(!(var9 == var21)) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var21 = null;
            if(!(var25 !== var24)) { _fun0001_ip = 57; continue _fun0001 }
case 55:
            var25 = _closure1_slot10;
            var27 = _closure1_slot0;
            var26 = _closure1_slot2;
            var23 = var26[var23];
            var23 = var27.bind(var4)(var23);
            var24 = var23.PressableOpacity;
            var23 = {};
            var23['accessibilityRole'] = var29;
            var29 = function onPress() {
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
            var23['onPress'] = var29;
            var26 = var26[var28];
            var26 = var27.bind(var4)(var26);
            var27 = var26.CircleXIcon;
            var26 = {};
            var28 = 'xs';
            var26['size'] = var28;
            var26 = var25.bind(var4)(var27, var26);
            var23['children'] = var26;
            var21 = var25.bind(var4)(var24, var23);
case 57:
            var17['trailing'] = var21;
            var17 = var3.bind(var4)(var18, var17);
            var14['children'] = var17;
            var16 = var3.bind(var4)(var16, var14);
            var14 = new Array(2);
            var14[0] = var16;
            var17 = _closure1_slot10;
            var18 = _closure1_slot5;
            var16 = {};
            var19 = var19.hint;
            var16['style'] = var19;
            var25 = _closure1_slot0;
            var21 = _closure1_slot2;
            var19 = 11;
            var19 = var21[var19];
            var19 = var25.bind(var4)(var19);
            var23 = var19.Text;
            var19 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var24 = var21[var20];
            var24 = var25.bind(var4)(var24);
            var27 = var24.intl;
            var26 = var27.string;
            var24 = var21[var20];
            var24 = var25.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24["3v8kZH"];
            var24 = var26.bind(var27)(var24);
            var19['children'] = var24;
            var19 = var17.bind(var4)(var23, var19);
            var16['children'] = var19;
            var16 = var17.bind(var4)(var18, var16);
            var14[1] = var16;
            var8['children'] = var14;
            var14 = var7.bind(var4)(var2, var8);
            var8 = new Array(3);
            var8[0] = var14;
            var14 = var21[var10];
            var14 = var25.bind(var4)(var14);
            var16 = var14.TableRowGroup;
            var14 = {};
            var18 = 25;
            var18 = var21[var18];
            var18 = var25.bind(var4)(var18);
            var19 = var18.TableSwitchRow;
            var18 = {};
            var23 = var21[var20];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var21 = var21[var20];
            var21 = var25.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.rMH+rt;
            var21 = var23.bind(var24)(var21);
            var18['label'] = var21;
            var21 = var9 != var22;
            if(!var21) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var21 = var22;
case 58:
            var18['value'] = var21;
            var21 = function onValueChange() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot9;
                    if(var2) { _fun0007_ip = 54; continue _fun0007 }
case 60:
                    var4 = _closure2_slot10;
                    var3 = undefined;
                    var2 = true;
                    var2 = var4.bind(var3)(var2);
                    _fun0007_ip = 61; continue _fun0007;
case 54:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var5 = var4 == var2;
                    var3 = undefined;
                    var2 = undefined;
                    if(var5) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                    var5 = _closure2_slot1;
                    var2 = var5.moderated;
case 62:
                    if(!(var4 != var2)) { _fun0007_ip = 64; continue _fun0007 }
case 53:
                    var4 = _closure2_slot10;
                    var2 = false;
                    var2 = var4.bind(var3)(var2);
                    _fun0007_ip = 61; continue _fun0007;
case 64:
                    var2 = _closure2_slot10;
                    var2 = var2.bind(var3)(var3);
case 61:
                    var3 = _closure2_slot7;
                    var2 = '';
                    if(!(var2 !== var3)) { _fun0007_ip = 65; continue _fun0007 }
case 66:
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
                        var5 = var5.R3BPH+;
                        var5 = var6.bind(var7)(var5);
                        var1['text'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var1['headerRight'] = var4;
                    var1 = var2.bind(var3)(var1);
case 65:
                    var1 = undefined;
                    return var1;
                }
            };
            var18['onValueChange'] = var21;
            var18 = var17.bind(var4)(var19, var18);
            var14['children'] = var18;
            var14 = var17.bind(var4)(var16, var14);
            var8[1] = var14;
            var9 = null;
            if(var12) { _fun0001_ip = 67; continue _fun0001 }
case 68:
            var12 = _closure1_slot10;
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = var16[var10];
            var10 = var19.bind(var4)(var10);
            var11 = var10.TableRowGroup;
            var10 = {};
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
            var16 = var16.huYSMr;
            var16 = var17.bind(var18)(var16);
            var13['label'] = var16;
            var15 = function onPress() {
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 26;
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
                var6 = var6.huYSMr;
                var6 = var7.bind(var10)(var6);
                var2['title'] = var6;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var6 = var6.t;
                var6 = var6.bkAFCf;
                var6 = var7.bind(var10)(var6);
                var2['body'] = var6;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var6 = var6.t;
                var6 = var6.gm1Vej;
                var6 = var7.bind(var10)(var6);
                var2['cancelText'] = var6;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.p89ACt;
                var5 = var6.bind(var7)(var5);
                var2['confirmText'] = var5;
                var5 = function onConfirm() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var2 = _closure2_slot3;
                        if(var2) { _fun0008_ip = 69; continue _fun0008 }
case 60:
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
case 69:
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
case 67:
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