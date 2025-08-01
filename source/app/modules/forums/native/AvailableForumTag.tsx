// app/modules/forums/native/AvailableForumTag.tsx
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
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.Fonts;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ANDROID_FOREGROUND_RIPPLE;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var11 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'paddingHorizontal': 12, 'borderRadius': 20, 'backgroundColor': null, 'margin': 6, 'borderWidth': 2, 'borderColor': null, 'overflow': 'hidden', 'height': 32};
    var9 = 7;
    var14 = var6[var9];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_TERTIARY;
    var11['backgroundColor'] = var14;
    var14 = var6[var9];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_TERTIARY;
    var11['borderColor'] = var14;
    var4['pill'] = var11;
    var11 = {};
    var14 = var6[var9];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_BRAND;
    var11['borderColor'] = var14;
    var11['borderWidth'] = var12;
    var4['pillSelected'] = var11;
    var11 = {};
    var12 = 0.6;
    var11['opacity'] = var12;
    var4['pillDisabled'] = var11;
    var11 = {'height': 18, 'width': 18, 'marginRight': 4, 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
    var4['emoji'] = var11;
    var11 = {'height': 16, 'width': 16};
    var4['imageEmoji'] = var11;
    var12 = 14;
    var11 = {'fontSize': 14, 'lineHeight': 20};
    var4['textEmoji'] = var11;
    var11 = 8;
    var11 = var6[var11];
    var11 = var13.bind(var1)(var11);
    var10 = var10.PRIMARY_SEMIBOLD;
    var9 = var6[var9];
    var9 = var13.bind(var1)(var9);
    var9 = var9.colors;
    var9 = var9.HEADER_PRIMARY;
    var9 = var11.bind(var1)(var10, var9, var12);
    var4['tagName'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/AvailableForumTag.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AvailableForumTag(arg1) {
        var1 = arg1;
        var6 = var1.tag;
        var _closure2_slot0 = var6;
        var2 = var1.onPress;
        var _closure2_slot1 = var2;
        var11 = var1.disabled;
        var _closure2_slot2 = var11;
        var10 = var1.selected;
        var _closure2_slot3 = var10;
        var2 = _closure1_slot9;
        var4 = undefined;
        var2 = var2.bind(var4)();
        var _closure2_slot4 = var2;
        var3 = var6.name;
        var _closure2_slot5 = var3;
        var3 = var6.emojiId;
        var _closure2_slot6 = var3;
        var3 = var6.emojiName;
        var _closure2_slot7 = var3;
        var8 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 9;
        var3 = var7[var3];
        var12 = var8.bind(var4)(var3);
        var9 = var12.useStateFromStores;
        var3 = _closure1_slot4;
        var8 = new Array(1);
        var8[0] = var3;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot6;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0001_ip = 38; continue _fun0001 }
 16:
                var4 = _closure1_slot4;
                var3 = var4.getUsableCustomEmojiById;
                var2 = _closure2_slot6;
                var1 = var3.bind(var4)(var2);
 38:
                return var1;
            }
        };
        var3 = var9.bind(var12)(var8, var3);
        var _closure2_slot8 = var3;
        var3 = function handlePress() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure2_slot2;
                if(var2) { _fun0002_ip = 25; continue _fun0002 }
 10:
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
 25:
                var1 = undefined;
                return var1;
            }
        };
        var _closure2_slot9 = var3;
        var9 = _closure1_slot3;
        var8 = var9.useMemo;
        var3 = new Array(3);
        var3[0] = var11;
        var3[1] = var10;
        var3[2] = var2;
        var2 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = new Array(0);
                var4 = var1.push;
                var3 = _closure2_slot4;
                var3 = var3.pill;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot3;
                if(!var3) { _fun0003_ip = 54; continue _fun0003 }
 34:
                var4 = var1.push;
                var3 = _closure2_slot4;
                var3 = var3.pillSelected;
                var3 = var4.bind(var1)(var3);
 54:
                var3 = _closure2_slot2;
                if(!var3) { _fun0003_ip = 81; continue _fun0003 }
 61:
                var3 = var1.push;
                var2 = _closure2_slot4;
                var2 = var2.pillDisabled;
                var2 = var3.bind(var1)(var2);
 81:
                return var1;
            }
        };
        var2 = var8.bind(var9)(var2, var3);
        var _closure2_slot10 = var2;
        var3 = _closure1_slot7;
        var2 = _closure1_slot1;
        var1 = 10;
        var1 = var7[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var6 = var6.id;
        var1['tagId'] = var6;
        var5 = function children(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = arg1;
                var7 = var3.ref;
                var12 = null;
                var2 = Object.create(var12);
                var1 = 0;
                var2['ref'] = var1;
                var20 = {};
                var19 = var3;
                var18 = var2;
                var19 = copyDataProperties(var20, var19, var18);
                var4 = _closure1_slot8;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 11;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var8 = _closure2_slot10;
                var1['style'] = var8;
                var8 = _closure1_slot6;
                var1['androidRippleConfig'] = var8;
                var8 = 'button';
                var1['accessibilityRole'] = var8;
                var8 = {};
                var10 = _closure2_slot3;
                var8['selected'] = var10;
                var1['accessibilityState'] = var8;
                var8 = _closure2_slot2;
                var1['disabled'] = var8;
                var1['ref'] = var7;
                var20 = var1;
                var6 = copyDataProperties(var20, var19);
                var7 = _closure2_slot9;
                var6 = 'onPress';
                var1[var6] = var7;
                var6 = _closure2_slot8;
                var7 = var12 != var6;
                if(var7) { _fun0004_ip = 163; continue _fun0004 }
 155:
                var6 = _closure2_slot7;
                var7 = var12 != var6;
 163:
                if(!var7) { _fun0004_ip = 343; continue _fun0004 }
 169:
                var10 = _closure1_slot7;
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 12;
                var6 = var11[var6];
                var8 = var8.bind(var3)(var6);
                var6 = {};
                var11 = _closure2_slot4;
                var13 = var11.emoji;
                var6['style'] = var13;
                var13 = var11.textEmoji;
                var6['textEmojiStyle'] = var13;
                var11 = var11.imageEmoji;
                var6['fastImageStyle'] = var11;
                var11 = _closure2_slot8;
                var13 = var12 != var11;
                var11 = undefined;
                if(!var13) { _fun0004_ip = 309; continue _fun0004 }
 244:
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var13 = 13;
                var13 = var15[var13];
                var15 = var14.bind(var3)(var13);
                var14 = var15.getEmojiURL;
                var13 = {};
                var16 = _closure2_slot8;
                var17 = var16.id;
                var13['id'] = var17;
                var16 = var16.animated;
                var13['animated'] = var16;
                var16 = _closure1_slot5;
                var13['size'] = var16;
                var11 = var14.bind(var15)(var13);
 309:
                var6['src'] = var11;
                var11 = _closure2_slot7;
                var12 = var12 != var11;
                var11 = '';
                if(!var12) { _fun0004_ip = 333; continue _fun0004 }
 329:
                var11 = _closure2_slot7;
 333:
                var6['name'] = var11;
                var7 = var10.bind(var3)(var8, var6);
 343:
                var6 = new Array(2);
                var6[0] = var7;
                var8 = _closure1_slot7;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 14;
                var5 = var10[var5];
                var5 = var7.bind(var3)(var5);
                var7 = var5.LegacyText;
                var5 = {};
                var10 = _closure2_slot4;
                var10 = var10.tagName;
                var5['style'] = var10;
                var9 = _closure2_slot5;
                var5['children'] = var9;
                var5 = var8.bind(var3)(var7, var5);
                var6[1] = var5;
                var5 = 'children';
                var1[var5] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            }
        };
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();