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
    var11 = 0;
    var4 = var6[var11];
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
    var7 = var4.Image;
    var _closure1_slot5 = var7;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
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
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {'display': 'flex', 'flex': 1};
    var12 = 8;
    var10 = var6[var12];
    var10 = var13.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_BASE_PRIMARY;
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
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.HEADER_SECONDARY;
    var10['color'] = var12;
    var12 = 16;
    var10['padding'] = var12;
    var7['description'] = var10;
    var10 = {'width': 16, 'height': 16};
    var7['closeIcon'] = var10;
    var10 = {};
    var10['flex'] = var11;
    var7['saveButton'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot13 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/ChannelSettingsEditForumTag.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelSettingsEditForumTag(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.channelId;
            var _closure2_slot0 = var1;
            var7 = var2.tag;
            var _closure2_slot1 = var7;
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
            var2 = _closure1_slot13;
            var14 = var2.bind(var4)();
            var _closure2_slot2 = var14;
            var6 = null;
            var9 = var6 == var7;
            var _closure2_slot3 = var9;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useNavigation;
            var10 = var2.bind(var3)();
            var _closure2_slot4 = var10;
            var5 = _closure1_slot4;
            var3 = var5.useState;
            var11 = var6 != var7;
            var2 = null;
            if(!var11) { _fun0001_ip = 167; continue _fun0001 }
 142:
            var11 = {};
            var13 = var7.emojiId;
            var11['id'] = var13;
            var13 = var7.emojiName;
            var11['name'] = var13;
            var2 = var11;
 167:
            var3 = var3.bind(var5)(var2);
            var2 = _closure1_slot3;
            var13 = 2;
            var2 = var2.bind(var4)(var3, var13);
            var5 = 0;
            var19 = var2[var5];
            _closure2_slot5 = var19;
            var3 = 1;
            var2 = var2[var3];
            _closure2_slot6 = var2;
            var15 = _closure1_slot4;
            var11 = var15.useState;
            var2 = var6 == var7;
            var16 = undefined;
            if(var2) { _fun0001_ip = 229; continue _fun0001 }
 224:
            var16 = var7.name;
 229:
            var17 = var6 != var16;
            var22 = '';
            var2 = var22;
            if(!var17) { _fun0001_ip = 246; continue _fun0001 }
 243:
            var2 = var16;
 246:
            var11 = var11.bind(var15)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var11, var13);
            var21 = var2[var5];
            _closure2_slot7 = var21;
            var2 = var2[var3];
            _closure2_slot8 = var2;
            var15 = _closure1_slot4;
            var11 = var15.useState;
            var16 = var6 == var7;
            var2 = undefined;
            if(var16) { _fun0001_ip = 301; continue _fun0001 }
 295:
            var2 = var7.moderated;
 301:
            var11 = var11.bind(var15)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var11, var13);
            var18 = var2[var5];
            _closure2_slot9 = var18;
            var2 = var2[var3];
            _closure2_slot10 = var2;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 10;
            var11 = var5[var2];
            var16 = var3.bind(var4)(var11);
            var15 = var16.useStateFromStores;
            var11 = _closure1_slot8;
            var13 = new Array(1);
            var13[0] = var11;
            var11 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var15.bind(var16)(var13, var11);
            _closure2_slot11 = var11;
            var2 = var5[var2];
            var11 = var3.bind(var4)(var2);
            var5 = var11.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    var4 = var1 == var3;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 27; continue _fun0002 }
 18:
                    var4 = _closure2_slot5;
                    var3 = var4.id;
 27:
                    var3 = var1 != var3;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 63; continue _fun0002 }
 36:
                    var4 = _closure1_slot7;
                    var3 = var4.getUsableCustomEmojiById;
                    var2 = _closure2_slot5;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 63:
                    return var1;
                }
            };
            var31 = var5.bind(var11)(var3, var2);
            var5 = _closure1_slot4;
            var3 = var5.useRef;
            var2 = {};
            var2['emoji'] = var19;
            var2['tagName'] = var21;
            var2['moderated'] = var18;
            var2 = var3.bind(var5)(var2);
            _closure2_slot12 = var2;
            var11 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var19;
            var3[1] = var21;
            var3[2] = var18;
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
            var2 = var11.bind(var5)(var2, var3);
            var11 = var5.useLayoutEffect;
            var3 = new Array(2);
            var3[0] = var10;
            var3[1] = var9;
            var2 = function() {
                var3 = _closure2_slot4;
                var2 = var3.setOptions;
                var1 = {};
                var4 = function headerTitle() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var4 = _closure1_slot11;
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
                        if(var5) { _fun0003_ip = 117; continue _fun0003 }
 102:
                        var5 = var6.zeVg5e;
                        var5 = var7.bind(var8)(var5);
                        _fun0003_ip = 130; continue _fun0003;
 117:
                        var6 = var6./jubeH;
                        var5 = var7.bind(var8)(var6);
 130:
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
            var2 = var11.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = new Array(4);
            var2[0] = var9;
            var2[1] = var10;
            var2[2] = var1;
            var10 = var6 == var7;
            var1 = undefined;
            if(var10) { _fun0001_ip = 560; continue _fun0001 }
 555:
            var1 = var7.id;
 560:
            var2[3] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot12;
                    var2 = var2.current;
                    var8 = var2.tagName;
                    var7 = var2.emoji;
                    var2 = var2.moderated;
                    var3 = '';
                    if(!(var3 !== var8)) { _fun0004_ip = 249; continue _fun0004 }
 41:
                    var3 = _closure2_slot3;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 13;
                    var4 = var6[var4];
                    var6 = undefined;
                    var5 = var5.bind(var6)(var4);
                    if(var3) { _fun0004_ip = 168; continue _fun0004 }
 73:
                    var9 = var5.updateForumTag;
                    var4 = {};
                    var10 = _closure2_slot1;
                    var3 = null;
                    var11 = var3 == var10;
                    var10 = undefined;
                    if(var11) { _fun0004_ip = 105; continue _fun0004 }
 96:
                    var11 = _closure2_slot1;
                    var10 = var11.id;
 105:
                    var4['id'] = var10;
                    var4['name'] = var8;
                    var11 = var3 == var7;
                    var10 = undefined;
                    if(var11) { _fun0004_ip = 127; continue _fun0004 }
 122:
                    var10 = var7.id;
 127:
                    var4['emojiId'] = var10;
                    var10 = var3 == var7;
                    var3 = undefined;
                    if(var10) { _fun0004_ip = 146; continue _fun0004 }
 141:
                    var3 = var7.name;
 146:
                    var4['emojiName'] = var3;
                    var4['moderated'] = var2;
                    var3 = _closure2_slot0;
                    var3 = var9.bind(var5)(var4, var3);
                    _fun0004_ip = 235; continue _fun0004;
 168:
                    var4 = var5.createForumTag;
                    var3 = {};
                    var3['name'] = var8;
                    var8 = null;
                    var10 = var8 == var7;
                    var9 = undefined;
                    if(var10) { _fun0004_ip = 196; continue _fun0004 }
 191:
                    var9 = var7.id;
 196:
                    var3['emojiId'] = var9;
                    var8 = var8 == var7;
                    var6 = undefined;
                    if(var8) { _fun0004_ip = 215; continue _fun0004 }
 210:
                    var6 = var7.name;
 215:
                    var3['emojiName'] = var6;
                    var3['moderated'] = var2;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var3, var2);
 235:
                    var2 = _closure2_slot4;
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
 249:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            _closure2_slot13 = var1;
            var1 = function handlePressEmoji(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.id;
                    var5 = null;
                    if(!(var5 == var2)) { _fun0005_ip = 36; continue _fun0005 }
 14:
                    var2 = var1.surrogates;
                    if(!(var5 != var2)) { _fun0005_ip = 36; continue _fun0005 }
 23:
                    var3 = var1.surrogates;
                    var2 = '';
                    if(!(var2 === var3)) { _fun0005_ip = 43; continue _fun0005 }
 36:
                    var6 = var1.name;
                    _fun0005_ip = 48; continue _fun0005;
 43:
                    var6 = var1.surrogates;
 48:
                    var4 = _closure2_slot6;
                    var3 = {};
                    var7 = var1.id;
                    var3['id'] = var7;
                    var1 = var1.id;
                    var7 = var5 != var1;
                    var1 = undefined;
                    var5 = undefined;
                    if(var7) { _fun0005_ip = 85; continue _fun0005 }
 82:
                    var5 = var6;
 85:
                    var3['name'] = var5;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot7;
                    var3 = '';
                    if(!(var3 !== var4)) { _fun0005_ip = 137; continue _fun0005 }
 106:
                    var4 = _closure2_slot4;
                    var3 = var4.setOptions;
                    var2 = {};
                    var5 = function headerRight() {
                        var4 = _closure1_slot11;
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
 137:
                    return var1;
                }
            };
            _closure2_slot14 = var1;
            var3 = _closure1_slot12;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var14.container;
            var1['style'] = var5;
            var13 = _closure1_slot11;
            var17 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 15;
            var5 = var10[var7];
            var5 = var17.bind(var4)(var5);
            var11 = var5.FormSection;
            var5 = {};
            var15 = var10[var7];
            var15 = var17.bind(var4)(var15);
            var16 = var15.FormRow;
            var15 = {};
            var20 = 16;
            var10 = var10[var20];
            var10 = var17.bind(var4)(var10);
            var17 = var10.PressableOpacity;
            var10 = {};
            var23 = var14.emojiIconWrapper;
            var10['style'] = var23;
            var23 = 'button';
            var10['accessibilityRole'] = var23;
            var24 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEmojiPickerActionSheet;
                var2 = {};
                var7 = _closure2_slot14;
                var2['onPressEmoji'] = var7;
                var6 = _closure1_slot10;
                var6 = var6.COMMUNITY_CONTENT;
                var2['pickerIntention'] = var6;
                var5 = _closure2_slot11;
                var2['channel'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var10['onPress'] = var24;
            if(!(var6 != var19)) { _fun0001_ip = 899; continue _fun0001 }
 716:
            var24 = var19.name;
            if(!(var6 == var24)) { _fun0001_ip = 737; continue _fun0001 }
 725:
            var24 = var19.id;
            if(!(var6 != var24)) { _fun0001_ip = 899; continue _fun0001 }
 737:
            var26 = _closure1_slot11;
            var25 = _closure1_slot1;
            var27 = _closure1_slot2;
            var24 = 18;
            var24 = var27[var24];
            var25 = var25.bind(var4)(var24);
            var24 = {};
            var27 = var14.textEmoji;
            var24['textEmojiStyle'] = var27;
            var27 = var14.imageEmoji;
            var24['fastImageStyle'] = var27;
            var28 = var6 != var31;
            var27 = undefined;
            if(!var28) { _fun0001_ip = 855; continue _fun0001 }
 794:
            var29 = _closure1_slot1;
            var30 = _closure1_slot2;
            var28 = 19;
            var28 = var30[var28];
            var30 = var29.bind(var4)(var28);
            var29 = var30.getEmojiURL;
            var28 = {};
            var32 = var31.id;
            var28['id'] = var32;
            var31 = var31.animated;
            var28['animated'] = var31;
            var31 = _closure1_slot9;
            var28['size'] = var31;
            var27 = var29.bind(var30)(var28);
 855:
            var24['src'] = var27;
            var27 = var6 == var19;
            var28 = undefined;
            if(var27) { _fun0001_ip = 874; continue _fun0001 }
 869:
            var28 = var19.name;
 874:
            var29 = var6 != var28;
            var27 = var22;
            if(!var29) { _fun0001_ip = 887; continue _fun0001 }
 884:
            var27 = var28;
 887:
            var24['name'] = var27;
            var24 = var26.bind(var4)(var25, var24);
            _fun0001_ip = 947; continue _fun0001;
 899:
            var27 = _closure1_slot11;
            var29 = _closure1_slot1;
            var30 = _closure1_slot2;
            var25 = 20;
            var25 = var30[var25];
            var26 = var29.bind(var4)(var25);
            var25 = {};
            var28 = 21;
            var28 = var30[var28];
            var28 = var29.bind(var4)(var28);
            var25['source'] = var28;
            var24 = var27.bind(var4)(var26, var25);
 947:
            var10['children'] = var24;
            var10 = var13.bind(var4)(var17, var10);
            var15['leading'] = var10;
            var26 = _closure1_slot11;
            var30 = _closure1_slot0;
            var27 = _closure1_slot2;
            var10 = 22;
            var17 = var27[var10];
            var17 = var30.bind(var4)(var17);
            var25 = var17.TextInput;
            var24 = {'maxLength': 20, 'style': null, 'value': null, 'autoCorrect': false, 'autoCapitalize': 'none', 'returnKeyType': 'done'};
            var17 = var14.nameInput;
            var24['style'] = var17;
            var24['value'] = var21;
            var17 = function onChangeText(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = arg1;
                    var3 = _closure2_slot8;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    var3 = '';
                    if(!(var3 !== var4)) { _fun0006_ip = 56; continue _fun0006 }
 25:
                    var4 = _closure2_slot4;
                    var3 = var4.setOptions;
                    var2 = {};
                    var5 = function headerRight() {
                        var4 = _closure1_slot11;
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
 56:
                    return var1;
                }
            };
            var24['onChangeText'] = var17;
            var17 = 12;
            var28 = var27[var17];
            var28 = var30.bind(var4)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var27 = var27[var17];
            var27 = var30.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.aMSq0d;
            var27 = var28.bind(var29)(var27);
            var24['placeholder'] = var27;
            var24 = var26.bind(var4)(var25, var24);
            var15['label'] = var24;
            if(!(var6 == var19)) { _fun0001_ip = 1110; continue _fun0001 }
 1104:
            var19 = null;
            if(!(var22 !== var21)) { _fun0001_ip = 1206; continue _fun0001 }
 1110:
            var22 = _closure1_slot11;
            var21 = _closure1_slot0;
            var27 = _closure1_slot2;
            var20 = var27[var20];
            var20 = var21.bind(var4)(var20);
            var21 = var20.PressableOpacity;
            var20 = {};
            var20['accessibilityRole'] = var23;
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
            var20['onPress'] = var23;
            var24 = _closure1_slot5;
            var23 = {};
            var25 = var14.closeIcon;
            var23['style'] = var25;
            var26 = _closure1_slot1;
            var25 = 23;
            var25 = var27[var25];
            var25 = var26.bind(var4)(var25);
            var23['source'] = var25;
            var23 = var22.bind(var4)(var24, var23);
            var20['children'] = var23;
            var19 = var22.bind(var4)(var21, var20);
 1206:
            var15['trailing'] = var19;
            var15 = var13.bind(var4)(var16, var15);
            var5['children'] = var15;
            var11 = var13.bind(var4)(var11, var5);
            var5 = new Array(4);
            var5[0] = var11;
            var13 = _closure1_slot11;
            var21 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = var16[var10];
            var10 = var21.bind(var4)(var10);
            var11 = var10.LegacyText;
            var10 = {};
            var14 = var14.description;
            var10['style'] = var14;
            var14 = var16[var17];
            var14 = var21.bind(var4)(var14);
            var19 = var14.intl;
            var15 = var19.string;
            var14 = var16[var17];
            var14 = var21.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.3v8kZG;
            var14 = var15.bind(var19)(var14);
            var10['children'] = var14;
            var10 = var13.bind(var4)(var11, var10);
            var5[1] = var10;
            var10 = var16[var7];
            var10 = var21.bind(var4)(var10);
            var11 = var10.FormSection;
            var10 = {};
            var14 = var16[var7];
            var14 = var21.bind(var4)(var14);
            var15 = var14.FormSwitchRow;
            var14 = {};
            var19 = var16[var17];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var16 = var16[var17];
            var16 = var21.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.rMH+rq;
            var16 = var19.bind(var20)(var16);
            var14['label'] = var16;
            var16 = var6 != var18;
            if(!var16) { _fun0001_ip = 1425; continue _fun0001 }
 1422:
            var16 = var18;
 1425:
            var14['value'] = var16;
            var16 = function onValueChange() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot9;
                    if(var2) { _fun0007_ip = 25; continue _fun0007 }
 10:
                    var4 = _closure2_slot10;
                    var3 = undefined;
                    var2 = true;
                    var2 = var4.bind(var3)(var2);
                    _fun0007_ip = 78; continue _fun0007;
 25:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var5 = var4 == var2;
                    var3 = undefined;
                    var2 = undefined;
                    if(var5) { _fun0007_ip = 52; continue _fun0007 }
 42:
                    var5 = _closure2_slot1;
                    var2 = var5.moderated;
 52:
                    if(!(var4 != var2)) { _fun0007_ip = 69; continue _fun0007 }
 56:
                    var4 = _closure2_slot10;
                    var2 = false;
                    var2 = var4.bind(var3)(var2);
                    _fun0007_ip = 78; continue _fun0007;
 69:
                    var2 = _closure2_slot10;
                    var2 = var2.bind(var3)(var3);
 78:
                    var3 = _closure2_slot7;
                    var2 = '';
                    if(!(var2 !== var3)) { _fun0007_ip = 121; continue _fun0007 }
 90:
                    var3 = _closure2_slot4;
                    var2 = var3.setOptions;
                    var1 = {};
                    var4 = function headerRight() {
                        var4 = _closure1_slot11;
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
 121:
                    var1 = undefined;
                    return var1;
                }
            };
            var14['onValueChange'] = var16;
            var14 = var13.bind(var4)(var15, var14);
            var10['children'] = var14;
            var10 = var13.bind(var4)(var11, var10);
            var5[2] = var10;
            var6 = null;
            if(var9) { _fun0001_ip = 1601; continue _fun0001 }
 1469:
            var9 = _closure1_slot11;
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = var13[var7];
            var7 = var16.bind(var4)(var7);
            var8 = var7.FormSection;
            var7 = {};
            var10 = 24;
            var10 = var13[var10];
            var10 = var16.bind(var4)(var10);
            var11 = var10.TableRow;
            var10 = {};
            var14 = 'danger';
            var10['variant'] = var14;
            var14 = var13[var17];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var13[var17];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.huYSMj;
            var13 = var14.bind(var15)(var13);
            var10['label'] = var13;
            var12 = function onPress() {
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
 0:
                        var2 = _closure2_slot3;
                        if(var2) { _fun0008_ip = 74; continue _fun0008 }
 10:
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
 74:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2['onConfirm'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var10['onPress'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 1601:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();