// app/modules/reactions/native/EmojiReactionRowButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Platform;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 4;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = function(arg1) {
        var3 = arg1;
        var1 = {};
        var2 = {};
        var2['width'] = var3;
        var2['height'] = var3;
        var3 = 'center';
        var2['alignItems'] = var3;
        var2['justifyContent'] = var3;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 5;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.MOBILE_EMOJI_BUTTON_BACKGROUND;
        var2['backgroundColor'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.modules;
        var3 = var3.button;
        var3 = var3.BORDER_RADIUS;
        var2['borderRadius'] = var3;
        var3 = 'hidden';
        var2['overflow'] = var3;
        var1['emojiContainer'] = var2;
        return var1;
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot5 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var4 = arg3;
            var5 = arg4;
            var3 = var6;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4;
case 2:
            var1 = {};
            var2 = {};
            var2['width'] = var6;
            var2['height'] = var6;
            var1['emojiImage'] = var2;
            var2 = {};
            var2['lineHeight'] = var4;
            var4 = arg2;
            var2['fontSize'] = var4;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 5;
            var6 = var6[var4];
            var4 = undefined;
            var6 = var7.bind(var4)(var6);
            var6 = var6.colors;
            var6 = var6.INTERACTIVE_TEXT_DEFAULT;
            var2['color'] = var6;
            var6 = 'center';
            var2['textAlign'] = var6;
            var2['width'] = var3;
            var2['height'] = var3;
            var3 = null;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = undefined;
case 4:
            var9 = var2;
            var8 = var3;
            var3 = copyDataProperties(var9, var8);
            var1['emojiText'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/reactions/native/EmojiReactionRowButton.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var3 = var1.emojiContainerSize;
            var11 = var1.onPress;
            var7 = var1.iconSize;
            var10 = var1.styles;
            var2 = _closure1_slot5;
            var4 = undefined;
            var5 = var2.bind(var4)(var3);
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 6;
            var6 = var8[var2];
            var9 = var3.bind(var4)(var6);
            var6 = var9.useThemeContext;
            var6 = var6.bind(var9)();
            var6 = var6.theme;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isThemeLight;
            var3 = var2.bind(var3)(var6);
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 5;
            var2 = var8[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var8 = var2.PRIMARY_300;
            _fun0002_ip = 8; continue _fun0002;
case 6:
            var8 = var2.PRIMARY_500;
case 8:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = 'EmojiPickerRowButton';
            var3 = var3.bind(var4)(var2);
            var2 = null;
            if(!(var2 == var7)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = 'md';
            if(!var3) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var2 = 'refresh_sm';
case 11:
            var7 = var2;
case 9:
            var3 = _closure1_slot4;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 8;
            var1 = var9[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {'activeOpacity': 0.5, 'accessibilityRole': 'button', 'accessibilityLabel': null, 'hitSlop': 4};
            var12 = 9;
            var13 = var9[var12];
            var13 = var6.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var9[var12];
            var12 = var6.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.lfIHs4;
            var12 = var13.bind(var14)(var12);
            var1['accessibilityLabel'] = var12;
            var1['onPress'] = var11;
            var11 = var5.emojiContainer;
            var5 = new Array(2);
            var5[0] = var11;
            var5[1] = var10;
            var1['style'] = var5;
            var5 = 10;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.ReactionIcon;
            var5 = {};
            var5['color'] = var8;
            var5['size'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['EmojiPickerRowButton'] = var4;
    var4 = function EmojiReactionRowButton(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var14 = var1.emoji;
            var9 = var1.emojiSize;
            var20 = var1.emojiFontSize;
            var2 = var1.emojiContainerSize;
            var19 = var1.emojiLineHeight;
            var7 = var1.onPress;
            var6 = var1.styles;
            var1 = _closure1_slot5;
            var4 = undefined;
            var5 = var1.bind(var4)(var2);
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 7;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = 'EmojiReactionRowButton';
            var18 = var2.bind(var4)(var1);
            var1 = _closure1_slot6;
            var22 = undefined;
            var21 = var9;
            var9 = var22[var1](var21, var20, var19, var18, var17);
            var3 = _closure1_slot4;
            var10 = _closure1_slot0;
            var1 = 8;
            var1 = var11[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {'activeOpacity': 0.5, 'accessibilityRole': 'button', 'accessibilityLabel': null, 'disabled': null, 'hitSlop': 4};
            var8 = 9;
            var12 = var11[var8];
            var12 = var10.bind(var4)(var12);
            var15 = var12.intl;
            var12 = var15.formatToPlainString;
            var8 = var11[var8];
            var8 = var10.bind(var4)(var8);
            var8 = var8.t;
            var11 = var8["/iYSo6"];
            var8 = {};
            var10 = null;
            var17 = var10 == var14;
            var16 = undefined;
            if(var17) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var16 = var14.name;
case 13:
            var8['emojiName'] = var16;
            var8 = var12.bind(var15)(var11, var8);
            var1['accessibilityLabel'] = var8;
            var8 = var10 == var14;
            var1['disabled'] = var8;
            var1['onPress'] = var7;
            var7 = var5.emojiContainer;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var6 = var10 != var14;
            var5 = null;
            if(!var6) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var8 = _closure1_slot4;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 11;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var11 = var9.emojiText;
            var6['textEmojiStyle'] = var11;
            var9 = var9.emojiImage;
            var6['fastImageStyle'] = var9;
            var9 = var14.id;
            var11 = var10 == var9;
            var9 = '';
            if(!var11) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var9 = var14.surrogates;
case 17:
            var6['name'] = var9;
            var9 = var14.id;
            if(!(var10 == var9)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var9 = var14.url;
            _fun0003_ip = 21; continue _fun0003;
case 19:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 12;
            var10 = var12[var10];
            var12 = var11.bind(var4)(var10);
            var11 = var12.getEmojiURL;
            var10 = {};
            var15 = var14.id;
            var10['id'] = var15;
            var14 = var14.animated;
            var10['animated'] = var14;
            var13 = _closure1_slot3;
            var10['size'] = var13;
            var9 = var11.bind(var12)(var10);
case 21:
            var6['src'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 15:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['EmojiReactionRowButton'] = var4;
    var2 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = arg2;
            var2 = null;
            if(!(var2 != var3)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var4 = var3.type;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 13;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var2 = var2.EmojiTypes;
            var2 = var2.UNICODE;
            if(!(var4 !== var2)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var2 = var3.id;
            _fun0004_ip = 26; continue _fun0004;
case 24:
            var2 = var3.surrogates;
case 26:
            var1 = var2;
case 22:
            return var1;
        }
    };
    var3['getEmojiKey'] = var2;
    return var1;
})();