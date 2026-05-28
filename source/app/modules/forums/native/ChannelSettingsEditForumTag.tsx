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
            var8 = var2.tag;
            var _closure2_slot1 = var8;
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
            var _closure2_slot15 = var4;
            var2 = _closure1_slot12;
            var21 = var2.bind(var4)();
            var _closure2_slot2 = var21;
            var9 = null;
            var12 = var9 == var8;
            var _closure2_slot3 = var12;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useNavigation;
            var6 = var2.bind(var3)();
            var _closure2_slot4 = var6;
            var5 = _closure1_slot4;
            var3 = var5.useState;
            var7 = var9 != var8;
            var2 = null;
            if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = {};
            var10 = var8.emojiId;
            var7['id'] = var10;
            var10 = var8.emojiName;
            var7['name'] = var10;
            var2 = var7;
case 2:
            var3 = var3.bind(var5)(var2);
            var2 = _closure1_slot3;
            var10 = 2;
            var2 = var2.bind(var4)(var3, var10);
            var5 = 0;
            var22 = var2[var5];
            _closure2_slot5 = var22;
            var3 = 1;
            var2 = var2[var3];
            _closure2_slot6 = var2;
            var13 = _closure1_slot4;
            var7 = var13.useState;
            var2 = var9 == var8;
            var14 = undefined;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = var8.name;
case 4:
            var16 = var9 != var14;
            var26 = '';
            var2 = var26;
            if(!var16) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var14;
case 6:
            var7 = var7.bind(var13)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var7, var10);
            var25 = var2[var5];
            _closure2_slot7 = var25;
            var2 = var2[var3];
            _closure2_slot8 = var2;
            var13 = _closure1_slot4;
            var7 = var13.useState;
            var14 = var9 == var8;
            var2 = undefined;
            if(var14) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var8.moderated;
case 8:
            var7 = var7.bind(var13)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var7, var10);
            var23 = var2[var5];
            _closure2_slot9 = var23;
            var2 = var2[var3];
            _closure2_slot10 = var2;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 10;
            var7 = var5[var2];
            var14 = var3.bind(var4)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot7;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var13.bind(var14)(var10, var7);
            _closure2_slot11 = var7;
            var2 = var5[var2];
            var7 = var3.bind(var4)(var2);
            var5 = var7.useStateFromStores;
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
            var36 = var5.bind(var7)(var3, var2);
            var7 = _closure1_slot4;
            var3 = var7.useRef;
            var2 = {};
            var2['emoji'] = var22;
            var2['tagName'] = var25;
            var2['moderated'] = var23;
            var2 = var3.bind(var7)(var2);
            _closure2_slot12 = var2;
            var5 = var7.useEffect;
            var3 = new Array(3);
            var3[0] = var22;
            var3[1] = var25;
            var3[2] = var23;
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
            var2 = var5.bind(var7)(var2, var3);
            var5 = var26 === var25;
            var3 = var9 != var8;
            if(!var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = var8.name;
            var2 = var2 !== var25;
            if(var2) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var10 = var8.emojiId;
            var13 = var9 == var22;
            var7 = undefined;
            if(var13) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = var22.id;
case 18:
            var2 = var10 !== var7;
case 16:
            if(var2) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var10 = var8.emojiName;
            var13 = var9 == var22;
            var7 = undefined;
            if(var13) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var7 = var22.name;
case 22:
            var2 = var10 !== var7;
case 20:
            if(var2) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var7 = var8.moderated;
            var2 = var7 !== var23;
case 24:
            var3 = var2;
case 14:
            var2 = !var5;
            if(var12) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var7 = var2;
            if(var5) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var7 = var3;
case 28:
            _fun0001_ip = 30; continue _fun0001;
case 26:
            var7 = var2;
case 30:
            _closure2_slot13 = var7;
            var5 = _closure1_slot4;
            var10 = var5.useLayoutEffect;
            var3 = new Array(2);
            var3[0] = var6;
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
                        if(var5) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                        var5 = var6.zeVg5d;
                        var5 = var7.bind(var8)(var5);
                        _fun0003_ip = 33; continue _fun0003;
case 31:
                        var6 = var6["/jubeD"];
                        var5 = var7.bind(var8)(var6);
case 33:
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
            var2 = var10.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = new Array(4);
            var2[0] = var12;
            var2[1] = var6;
            var2[2] = var1;
            var10 = var9 == var8;
            var1 = undefined;
            if(var10) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var1 = var8.id;
case 34:
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
                    if(!(var3 !== var8)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var3 = _closure2_slot3;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 13;
                    var4 = var6[var4];
                    var6 = undefined;
                    var5 = var5.bind(var6)(var4);
                    if(var3) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var9 = var5.updateForumTag;
                    var4 = {};
                    var10 = _closure2_slot1;
                    var3 = null;
                    var11 = var3 == var10;
                    var10 = undefined;
                    if(var11) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                    var11 = _closure2_slot1;
                    var10 = var11.id;
case 40:
                    var4['id'] = var10;
                    var4['name'] = var8;
                    var11 = var3 == var7;
                    var10 = undefined;
                    if(var11) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                    var10 = var7.id;
case 42:
                    var4['emojiId'] = var10;
                    var10 = var3 == var7;
                    var3 = undefined;
                    if(var10) { _fun0004_ip = 3; continue _fun0004 }
case 44:
                    var3 = var7.name;
case 3:
                    var4['emojiName'] = var3;
                    var4['moderated'] = var2;
                    var3 = _closure2_slot0;
                    var3 = var9.bind(var5)(var4, var3);
                    _fun0004_ip = 45; continue _fun0004;
case 38:
                    var4 = var5.createForumTag;
                    var3 = {};
                    var3['name'] = var8;
                    var8 = null;
                    var10 = var8 == var7;
                    var9 = undefined;
                    if(var10) { _fun0004_ip = 46; continue _fun0004 }
case 47:
                    var9 = var7.id;
case 46:
                    var3['emojiId'] = var9;
                    var8 = var8 == var7;
                    var6 = undefined;
                    if(var8) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                    var6 = var7.name;
case 48:
                    var3['emojiName'] = var6;
                    var3['moderated'] = var2;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var3, var2);
case 45:
                    var2 = _closure2_slot4;
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
case 36:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            _closure2_slot14 = var1;
            var5 = _closure1_slot4;
            var3 = var5.useEffect;
            var2 = new Array(4);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var1;
            var1 = var21.saveButton;
            var2[3] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure2_slot13;
                    var3 = _closure2_slot4;
                    var2 = var3.setOptions;
                    var1 = {};
                    if(var4) { _fun0005_ip = 13; continue _fun0005 }
case 50:
                    var4 = undefined;
                    var1['headerRight'] = var4;
                    var4 = var2.bind(var3)(var1);
                    _fun0005_ip = 51; continue _fun0005;
case 13:
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
                        var5 = _closure2_slot14;
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
case 51:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var1 = function handlePressEmoji(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.id;
                    var4 = null;
                    if(!(var4 == var2)) { _fun0006_ip = 13; continue _fun0006 }
case 52:
                    var2 = var1.surrogates;
                    if(!(var4 != var2)) { _fun0006_ip = 13; continue _fun0006 }
case 53:
                    var3 = var1.surrogates;
                    var2 = '';
                    if(!(var2 === var3)) { _fun0006_ip = 54; continue _fun0006 }
case 13:
                    var5 = var1.name;
                    _fun0006_ip = 55; continue _fun0006;
case 54:
                    var5 = var1.surrogates;
case 55:
                    var3 = _closure2_slot6;
                    var2 = {};
                    var6 = var1.id;
                    var2['id'] = var6;
                    var1 = var1.id;
                    var6 = var4 != var1;
                    var1 = undefined;
                    var4 = undefined;
                    if(var6) { _fun0006_ip = 56; continue _fun0006 }
case 57:
                    var4 = var5;
case 56:
                    var2['name'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            _closure2_slot15 = var1;
            var3 = _closure1_slot10;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var21.container;
            var1['style'] = var5;
            var7 = _closure1_slot11;
            var20 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 15;
            var5 = var14[var5];
            var5 = var20.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var29 = 24;
            var5['spacing'] = var29;
            var8 = var21.sections;
            var5['style'] = var8;
            var8 = {};
            var10 = 16;
            var13 = var14[var10];
            var13 = var20.bind(var4)(var13);
            var17 = var13.TableRowGroup;
            var16 = {};
            var13 = true;
            var16['hasIcons'] = var13;
            var13 = 17;
            var18 = var14[var13];
            var18 = var20.bind(var4)(var18);
            var19 = var18.TableRow;
            var18 = {};
            var24 = 18;
            var14 = var14[var24];
            var14 = var20.bind(var4)(var14);
            var20 = var14.PressableOpacity;
            var14 = {};
            var27 = var21.emojiIconWrapper;
            var14['style'] = var27;
            var30 = 'button';
            var14['accessibilityRole'] = var30;
            var27 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEmojiPickerActionSheet;
                var2 = {};
                var7 = _closure2_slot15;
                var2['onPressEmoji'] = var7;
                var6 = _closure1_slot9;
                var6 = var6.COMMUNITY_CONTENT;
                var2['pickerIntention'] = var6;
                var5 = _closure2_slot11;
                var2['channel'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var14['onPress'] = var27;
            if(!(var9 != var22)) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var27 = var22.name;
            if(!(var9 == var27)) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var27 = var22.id;
            if(!(var9 != var27)) { _fun0001_ip = 58; continue _fun0001 }
case 60:
            var31 = _closure1_slot10;
            var28 = _closure1_slot1;
            var32 = _closure1_slot2;
            var27 = 20;
            var27 = var32[var27];
            var28 = var28.bind(var4)(var27);
            var27 = {};
            var32 = var21.textEmoji;
            var27['textEmojiStyle'] = var32;
            var32 = var21.imageEmoji;
            var27['fastImageStyle'] = var32;
            var33 = var9 != var36;
            var32 = undefined;
            if(!var33) { _fun0001_ip = 62; continue _fun0001 }
case 63:
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
case 62:
            var27['src'] = var32;
            var32 = var9 == var22;
            var33 = undefined;
            if(var32) { _fun0001_ip = 64; continue _fun0001 }
case 65:
            var33 = var22.name;
case 64:
            var34 = var9 != var33;
            var32 = var26;
            if(!var34) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var32 = var33;
case 66:
            var27['name'] = var32;
            var27 = var31.bind(var4)(var28, var27);
            _fun0001_ip = 68; continue _fun0001;
case 58:
            var32 = _closure1_slot10;
            var31 = _closure1_slot0;
            var33 = _closure1_slot2;
            var28 = 22;
            var28 = var33[var28];
            var28 = var31.bind(var4)(var28);
            var31 = var28.ReactionIcon;
            var28 = {};
            var27 = var32.bind(var4)(var31, var28);
case 68:
            var14['children'] = var27;
            var14 = var3.bind(var4)(var20, var14);
            var18['icon'] = var14;
            var31 = _closure1_slot10;
            var35 = _closure1_slot0;
            var32 = _closure1_slot2;
            var14 = 23;
            var14 = var32[var14];
            var14 = var35.bind(var4)(var14);
            var28 = var14.TextInput;
            var27 = {'maxLength': 20, 'style': null, 'value': null, 'autoCorrect': false, 'autoCapitalize': 'none', 'returnKeyType': 'done'};
            var14 = var21.nameInput;
            var27['style'] = var14;
            var27['value'] = var25;
            var14 = false;
            var20 = function onChangeText(arg1) {
                var3 = _closure2_slot8;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var27['onChangeText'] = var20;
            var20 = 12;
            var33 = var32[var20];
            var33 = var35.bind(var4)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var32 = var32[var20];
            var32 = var35.bind(var4)(var32);
            var32 = var32.t;
            var32 = var32.aMSq0a;
            var32 = var33.bind(var34)(var32);
            var27['placeholder'] = var32;
            var27 = var31.bind(var4)(var28, var27);
            var18['label'] = var27;
            if(!(var9 == var22)) { _fun0001_ip = 69; continue _fun0001 }
case 70:
            var22 = null;
            if(!(var26 !== var25)) { _fun0001_ip = 71; continue _fun0001 }
case 69:
            var26 = _closure1_slot10;
            var28 = _closure1_slot0;
            var27 = _closure1_slot2;
            var24 = var27[var24];
            var24 = var28.bind(var4)(var24);
            var25 = var24.PressableOpacity;
            var24 = {};
            var24['accessibilityRole'] = var30;
            var30 = function onPress() {
                var4 = _closure2_slot6;
                var1 = undefined;
                var3 = null;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot8;
                var2 = '';
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var24['onPress'] = var30;
            var27 = var27[var29];
            var27 = var28.bind(var4)(var27);
            var28 = var27.CircleXIcon;
            var27 = {};
            var29 = 'xs';
            var27['size'] = var29;
            var27 = var26.bind(var4)(var28, var27);
            var24['children'] = var27;
            var22 = var26.bind(var4)(var25, var24);
case 71:
            var18['trailing'] = var22;
            var18 = var3.bind(var4)(var19, var18);
            var16['children'] = var18;
            var17 = var3.bind(var4)(var17, var16);
            var16 = new Array(2);
            var16[0] = var17;
            var18 = _closure1_slot10;
            var19 = _closure1_slot5;
            var17 = {};
            var21 = var21.hint;
            var17['style'] = var21;
            var26 = _closure1_slot0;
            var22 = _closure1_slot2;
            var21 = 11;
            var21 = var22[var21];
            var21 = var26.bind(var4)(var21);
            var24 = var21.Text;
            var21 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var25 = var22[var20];
            var25 = var26.bind(var4)(var25);
            var28 = var25.intl;
            var27 = var28.string;
            var25 = var22[var20];
            var25 = var26.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25["3v8kZH"];
            var25 = var27.bind(var28)(var25);
            var21['children'] = var25;
            var21 = var18.bind(var4)(var24, var21);
            var17['children'] = var21;
            var17 = var18.bind(var4)(var19, var17);
            var16[1] = var17;
            var8['children'] = var16;
            var16 = var7.bind(var4)(var2, var8);
            var8 = new Array(3);
            var8[0] = var16;
            var16 = var22[var10];
            var16 = var26.bind(var4)(var16);
            var17 = var16.TableRowGroup;
            var16 = {};
            var16['hasIcons'] = var14;
            var19 = 25;
            var19 = var22[var19];
            var19 = var26.bind(var4)(var19);
            var21 = var19.TableSwitchRow;
            var19 = {};
            var24 = var22[var20];
            var24 = var26.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var22 = var22[var20];
            var22 = var26.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.rMH+rt;
            var22 = var24.bind(var25)(var22);
            var19['label'] = var22;
            var22 = var9 != var23;
            if(!var22) { _fun0001_ip = 72; continue _fun0001 }
case 73:
            var22 = var23;
case 72:
            var19['value'] = var22;
            var22 = function onValueChange() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot9;
                    if(var2) { _fun0007_ip = 74; continue _fun0007 }
case 75:
                    var4 = _closure2_slot10;
                    var3 = undefined;
                    var2 = true;
                    var2 = var4.bind(var3)(var2);
                    _fun0007_ip = 76; continue _fun0007;
case 74:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var5 = var4 == var2;
                    var2 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0007_ip = 77; continue _fun0007 }
case 78:
                    var5 = _closure2_slot1;
                    var3 = var5.moderated;
case 77:
                    if(!(var4 != var3)) { _fun0007_ip = 79; continue _fun0007 }
case 80:
                    var4 = _closure2_slot10;
                    var3 = false;
                    var3 = var4.bind(var2)(var3);
                    _fun0007_ip = 76; continue _fun0007;
case 79:
                    var1 = _closure2_slot10;
                    var1 = var1.bind(var2)(var2);
case 76:
                    var1 = undefined;
                    return var1;
                }
            };
            var19['onValueChange'] = var22;
            var19 = var18.bind(var4)(var21, var19);
            var16['children'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var8[1] = var16;
            var9 = null;
            if(var12) { _fun0001_ip = 81; continue _fun0001 }
case 82:
            var12 = _closure1_slot10;
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = var16[var10];
            var10 = var19.bind(var4)(var10);
            var11 = var10.TableRowGroup;
            var10 = {};
            var10['hasIcons'] = var14;
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
                        if(var2) { _fun0008_ip = 83; continue _fun0008 }
case 75:
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
case 83:
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
case 81:
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