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
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = function(arg1) {
        var7 = arg1;
        var1 = {};
        var2 = {};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 5;
        var8 = var6[var3];
        var4 = undefined;
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.round;
        var2['borderRadius'] = var8;
        var8 = 'hidden';
        var2['overflow'] = var8;
        var1['emojiWrapper'] = var2;
        var2 = {};
        var2['width'] = var7;
        var2['height'] = var7;
        var7 = 'center';
        var2['alignItems'] = var7;
        var2['justifyContent'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.colors;
        var3 = var3.MOBILE_EMOJI_BUTTON_BACKGROUND;
        var2['backgroundColor'] = var3;
        var1['emojiContainer'] = var2;
        return var1;
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot6 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1, arg2, arg3) {
        var3 = arg1;
        var1 = {};
        var2 = {};
        var2['width'] = var3;
        var2['height'] = var3;
        var1['emojiImage'] = var2;
        var2 = {};
        var4 = arg3;
        var2['lineHeight'] = var4;
        var4 = arg2;
        var2['fontSize'] = var4;
        var6 = _closure1_slot1;
        var5 = _closure1_slot2;
        var4 = 5;
        var5 = var5[var4];
        var4 = undefined;
        var4 = var6.bind(var4)(var5);
        var4 = var4.colors;
        var4 = var4.INTERACTIVE_TEXT_DEFAULT;
        var2['color'] = var4;
        var4 = 'center';
        var2['textAlign'] = var4;
        var2['width'] = var3;
        var2['height'] = var3;
        var1['emojiText'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/reactions/native/EmojiReactionRowButton.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.emojiContainerSize;
            var12 = var1.onPress;
            var9 = var1.iconSize;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = 'md';
case 2:
            var1 = _closure1_slot6;
            var7 = var1.bind(var4)(var2);
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 6;
            var3 = var6[var1];
            var8 = var2.bind(var4)(var3);
            var3 = var8.useThemeContext;
            var3 = var3.bind(var8)();
            var3 = var3.theme;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isThemeLight;
            var2 = var1.bind(var2)(var3);
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.unsafe_rawColors;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = var1.PRIMARY_300;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var10 = var1.PRIMARY_500;
case 6:
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var6 = var7.emojiWrapper;
            var1['style'] = var6;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 7;
            var5 = var11[var5];
            var5 = var8.bind(var4)(var5);
            var6 = var5.PressableOpacity;
            var5 = {'activeOpacity': 0.5, 'accessibilityRole': 'button'};
            var13 = 8;
            var14 = var11[var13];
            var14 = var8.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var11[var13];
            var13 = var8.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.lfIHs4;
            var13 = var14.bind(var15)(var13);
            var5['accessibilityLabel'] = var13;
            var5['onPress'] = var12;
            var7 = var7.emojiContainer;
            var5['style'] = var7;
            var7 = 9;
            var7 = var11[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.ReactionIcon;
            var7 = {};
            var7['color'] = var10;
            var7['size'] = var9;
            var7 = var3.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['EmojiPickerRowButton'] = var4;
    var4 = function EmojiReactionRowButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var16 = var1.emoji;
            var5 = var1.emojiSize;
            var3 = var1.emojiFontSize;
            var6 = var1.emojiContainerSize;
            var2 = var1.emojiLineHeight;
            var8 = var1.onPress;
            var1 = _closure1_slot6;
            var4 = undefined;
            var7 = var1.bind(var4)(var6);
            var1 = _closure1_slot7;
            var11 = var1.bind(var4)(var5, var3, var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var7.emojiWrapper;
            var1['style'] = var5;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 7;
            var5 = var12[var5];
            var5 = var10.bind(var4)(var5);
            var6 = var5.PressableOpacity;
            var5 = {'activeOpacity': 0.5, 'accessibilityRole': 'button'};
            var9 = 8;
            var13 = var12[var9];
            var13 = var10.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.formatToPlainString;
            var9 = var12[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            var10 = var9["/iYSo6"];
            var9 = {};
            var12 = null;
            var18 = var12 == var16;
            var17 = undefined;
            if(var18) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var17 = var16.name;
case 7:
            var9['emojiName'] = var17;
            var9 = var13.bind(var14)(var10, var9);
            var5['accessibilityLabel'] = var9;
            var9 = var12 == var16;
            var5['disabled'] = var9;
            var5['onPress'] = var8;
            var7 = var7.emojiContainer;
            var5['style'] = var7;
            var8 = var12 != var16;
            var7 = null;
            if(!var8) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var10 = _closure1_slot5;
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var8 = 10;
            var8 = var13[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var13 = var11.emojiText;
            var8['textEmojiStyle'] = var13;
            var11 = var11.emojiImage;
            var8['fastImageStyle'] = var11;
            var11 = var16.id;
            var13 = var12 == var11;
            var11 = '';
            if(!var13) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var11 = var16.surrogates;
case 11:
            var8['name'] = var11;
            var11 = var16.id;
            if(!(var12 == var11)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var11 = var16.url;
            _fun0002_ip = 15; continue _fun0002;
case 13:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 11;
            var12 = var14[var12];
            var14 = var13.bind(var4)(var12);
            var13 = var14.getEmojiURL;
            var12 = {};
            var17 = var16.id;
            var12['id'] = var17;
            var16 = var16.animated;
            var12['animated'] = var16;
            var15 = _closure1_slot4;
            var12['size'] = var15;
            var11 = var13.bind(var14)(var12);
case 15:
            var8['src'] = var11;
            var7 = var10.bind(var4)(var9, var8);
case 9:
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['EmojiReactionRowButton'] = var4;
    var2 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var1 = arg2;
            var2 = null;
            if(!(var2 != var3)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var4 = var3.type;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 12;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var2 = var2.EmojiTypes;
            var2 = var2.UNICODE;
            if(!(var4 !== var2)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var2 = var3.id;
            _fun0003_ip = 20; continue _fun0003;
case 18:
            var2 = var3.surrogates;
case 20:
            var1 = var2;
case 16:
            return var1;
        }
    };
    var3['getEmojiKey'] = var2;
    return var1;
})();