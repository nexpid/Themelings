// app/modules/forums/native/posts/reactions/ForumPostReactionButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var8;
    var4 = function BurstReactionButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var13 = var1.colors;
            var12 = var1.emoji;
            var9 = var1.onPress;
            var8 = var1.onLongPress;
            var16 = var1.containerStyle;
            var11 = var1.count;
            var7 = var1.emojiSize;
            var14 = var1.selected;
            var10 = var1.animate;
            var6 = var1.animateCount;
            var5 = var1.accessible;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.useEmojiColorPalette;
            var3 = var2.bind(var3)(var13);
            var15 = {};
            var2 = null;
            var17 = var2 != var3;
            var19 = '';
            var13 = var19;
            if(!var17) { _fun0001_ip = 213; continue _fun0001 }
 120:
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var17 = 15;
            var17 = var20[var17];
            var21 = var18.bind(var4)(var17);
            var20 = var21.hex2rgb;
            var17 = var2 == var3;
            var18 = undefined;
            if(var17) { _fun0001_ip = 160; continue _fun0001 }
 155:
            var18 = var3.backgroundColor;
 160:
            var17 = var2 == var3;
            var22 = undefined;
            if(var17) { _fun0001_ip = 174; continue _fun0001 }
 169:
            var22 = var3.opacity;
 174:
            var23 = var2 != var22;
            var17 = 0.15;
            if(!var23) { _fun0001_ip = 194; continue _fun0001 }
 191:
            var17 = var22;
 194:
            var17 = var20.bind(var21)(var18, var17);
            var18 = var2 != var17;
            var13 = var19;
            if(!var18) { _fun0001_ip = 213; continue _fun0001 }
 210:
            var13 = var17;
 213:
            var15['backgroundColor'] = var13;
            var17 = var2 == var3;
            var13 = undefined;
            if(var17) { _fun0001_ip = 231; continue _fun0001 }
 226:
            var13 = var3.backgroundColor;
 231:
            var15['borderColor'] = var13;
            var13 = 0;
            if(!var14) { _fun0001_ip = 251; continue _fun0001 }
 241:
            var13 = 1.5;
 251:
            var15['borderWidth'] = var13;
            var13 = {};
            var14 = var2 == var3;
            var2 = undefined;
            if(var14) { _fun0001_ip = 273; continue _fun0001 }
 267:
            var2 = var3.accentColor;
 273:
            var13['color'] = var2;
            var3 = _closure1_slot6;
            var2 = _closure1_slot9;
            var1 = {};
            var14 = new Array(2);
            var14[0] = var16;
            var14[1] = var15;
            var1['containerStyle'] = var14;
            var1['textStyle'] = var13;
            var13 = false;
            var1['selected'] = var13;
            var1['emoji'] = var12;
            var1['count'] = var11;
            var1['animate'] = var10;
            var1['onPress'] = var9;
            var1['onLongPress'] = var8;
            var1['emojiSize'] = var7;
            var1['animateCount'] = var6;
            var1['accessible'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var2 = function ReactionButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var9 = var1.emoji;
            var8 = var1.onPress;
            var7 = var1.onLongPress;
            var15 = var1.textStyle;
            var22 = var1.containerStyle;
            var14 = var1.count;
            var16 = var1.emojiSize;
            var20 = var1.selected;
            var18 = var1.animate;
            var13 = var1.animateCount;
            var17 = var1.accessible;
            var5 = var1.disabled;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0002_ip = 80; continue _fun0002 }
 78:
            var5 = false;
 80:
            var1 = _closure1_slot7;
            var11 = var1.bind(var4)();
            var1 = var9.id;
            var6 = null;
            var1 = var6 != var1;
            var12 = undefined;
            if(!var1) { _fun0002_ip = 167; continue _fun0002 }
 107:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 16;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getEmojiURL;
            var1 = {};
            var19 = var9.id;
            var1['id'] = var19;
            if(!var18) { _fun0002_ip = 153; continue _fun0002 }
 147:
            var18 = var9.animated;
 153:
            var1['animated'] = var18;
            var1['size'] = var16;
            var12 = var2.bind(var3)(var1);
 167:
            var21 = undefined;
            if(!var20) { _fun0002_ip = 178; continue _fun0002 }
 172:
            var21 = var11.selected;
 178:
            var3 = _closure1_slot5;
            var18 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 7;
            var1 = var16[var1];
            var1 = var18.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var23 = var11.container;
            var19 = new Array(3);
            var19[0] = var23;
            var19[1] = var22;
            var19[2] = var21;
            var1['style'] = var19;
            var1['accessible'] = var17;
            var17 = 17;
            var17 = var16[var17];
            var19 = var18.bind(var4)(var17);
            var18 = var19.getAccessibleEmojiDisplayName;
            var24 = false;
            var28 = var19;
            var27 = var20;
            var26 = var14;
            var25 = var9;
            var17 = var28[var18](var27, var26, var25, var24, var23);
            var1['accessibilityLabel'] = var17;
            var1['onPress'] = var8;
            var1['onLongPress'] = var7;
            var1['disabled'] = var5;
            var8 = _closure1_slot6;
            var7 = _closure1_slot1;
            var5 = 18;
            var5 = var16[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var16 = var11.textEmoji;
            var5['textEmojiStyle'] = var16;
            var16 = var11.imageEmoji;
            var5['fastImageStyle'] = var16;
            var5['src'] = var12;
            var9 = var9.name;
            var5['name'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var6 = var6 != var14;
            if(!var6) { _fun0002_ip = 378; continue _fun0002 }
 372:
            var7 = 0;
            var6 = var14 > var7;
 378:
            if(!var6) { _fun0002_ip = 458; continue _fun0002 }
 381:
            var9 = _closure1_slot6;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var11.countContainer;
            var7['style'] = var11;
            var12 = _closure1_slot6;
            var11 = _closure1_slot1;
            var16 = _closure1_slot2;
            var10 = 19;
            var10 = var16[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['textStyle'] = var15;
            var10['count'] = var14;
            var10['animate'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 458:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var9 = var8[var1];
    var6 = metroImportAll;
    var1 = undefined;
    var6 = var6.bind(var1)(var9);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.View;
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.jsxs;
    var _closure1_slot5 = var9;
    var6 = var6.jsx;
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var8[var6];
    var10 = var7.bind(var1)(var6);
    var9 = var10.createStyles;
    var6 = {};
    var11 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'paddingHorizontal': 8, 'borderRadius': null, 'borderWidth': 1.5, 'borderColor': null, 'backgroundColor': null, 'minWidth': 32, 'minHeight': 26, 'maxHeight': 26};
    var12 = 4;
    var13 = var8[var12];
    var13 = var14.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var11['borderRadius'] = var13;
    var13 = 1.5;
    var15 = var8[var12];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_MOD_SUBTLE;
    var11['borderColor'] = var15;
    var15 = var8[var12];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_MOD_SUBTLE;
    var11['backgroundColor'] = var15;
    var6['container'] = var11;
    var11 = {};
    var15 = var8[var12];
    var15 = var14.bind(var1)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.BRAND_560;
    var11['borderColor'] = var15;
    var11['borderWidth'] = var13;
    var13 = 5;
    var13 = var8[var13];
    var16 = var7.bind(var1)(var13);
    var15 = var16.hexWithOpacity;
    var13 = var8[var12];
    var13 = var14.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var14 = var13.BRAND_500;
    var13 = 0.3;
    var13 = var15.bind(var16)(var14, var13);
    var11['backgroundColor'] = var13;
    var6['selected'] = var11;
    var11 = {};
    var13 = 12;
    var11['fontSize'] = var13;
    var6['textEmoji'] = var11;
    var11 = {'height': 16, 'width': 16};
    var6['imageEmoji'] = var11;
    var11 = {};
    var11['paddingStart'] = var12;
    var6['countContainer'] = var11;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot7 = var6;
    var6 = 20;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/forums/native/posts/reactions/ForumPostReactionButton.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = 14;
    var3['DEFAULT_EMOJI_SIZE'] = var6;
    var6 = function AdditionalReactionCount(arg1) {
        var1 = arg1;
        var9 = var1.count;
        var3 = var1.threadId;
        var11 = var1.containerStyle;
        var1 = _closure1_slot7;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var2 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 6;
        var1 = var8[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['threadId'] = var3;
        var1 = var2.bind(var4)(var1);
        var7 = var1.onTapReactionCount;
        var3 = _closure1_slot6;
        var6 = _closure1_slot0;
        var1 = 7;
        var1 = var8[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.PressableOpacity;
        var1 = {};
        var12 = true;
        var1['accessible'] = var12;
        var12 = 8;
        var13 = var8[var12];
        var13 = var6.bind(var4)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var8[var12];
        var12 = var6.bind(var4)(var12);
        var12 = var12.t;
        var12 = var12.N8hbZG;
        var12 = var13.bind(var14)(var12);
        var1['accessibilityLabel'] = var12;
        var12 = var10.container;
        var10 = new Array(2);
        var10[0] = var12;
        var10[1] = var11;
        var1['style'] = var10;
        var1['onPress'] = var7;
        var7 = _closure1_slot5;
        var5 = 9;
        var5 = var8[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.Text;
        var5 = {'variant': 'heading-sm/medium', 'color': 'interactive-normal'};
        var8 = ['+'];
        var8[1] = var9;
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['AdditionalReactionCount'] = var6;
    var6 = function AddReactionButton(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var6 = var1.threadId;
            var9 = var1.containerStyle;
            var2 = var1.reactionType;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0003_ip = 62; continue _fun0003 }
 27:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ReactionTypes;
            var2 = var1.NORMAL;
 62:
            var1 = _closure1_slot7;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 6;
            var1 = var12[var1];
            var3 = var3.bind(var4)(var1);
            var1 = {};
            var1['threadId'] = var6;
            var1['reactionType'] = var2;
            var1 = var3.bind(var4)(var1);
            var6 = var1.onTapAddReaction;
            var11 = _closure1_slot0;
            var1 = 11;
            var1 = var12[var1];
            var1 = var11.bind(var4)(var1);
            var1 = var1.ADD_REACTION_ICON_COMPONENTS;
            var7 = var1[var2];
            var3 = _closure1_slot6;
            var1 = 7;
            var1 = var12[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var10 = var8.container;
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var1['style'] = var8;
            var8 = true;
            var1['accessible'] = var8;
            var8 = 8;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.lfIHs7;
            var8 = var9.bind(var10)(var8);
            var1['accessibilityLabel'] = var8;
            var1['onPress'] = var6;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = 'xs';
            var5['size'] = var8;
            var5 = var6.bind(var4)(var7, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['AddReactionButton'] = var6;
    var5 = function ForumPostReactionButton(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var12 = var1.thread;
            var13 = var1.reaction;
            var _closure2_slot0 = var13;
            var6 = var1.animateCount;
            var10 = var1.containerStyle;
            var9 = var1.textStyle;
            var17 = var1.locationAnalyticsObject;
            var _closure2_slot1 = var17;
            var8 = var1.emojiSize;
            var5 = undefined;
            if(!(var8 === var5)) { _fun0004_ip = 64; continue _fun0004 }
 61:
            var8 = 14;
 64:
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 12;
            var1 = var14[var1];
            var1 = var11.bind(var5)(var1);
            var1 = var1.bind(var5)(var12);
            var3 = var1.disableReactionCreates;
            _closure2_slot2 = var3;
            var1 = var1.disableReactionUpdates;
            _closure2_slot3 = var1;
            var7 = 6;
            var7 = var14[var7];
            var11 = var11.bind(var5)(var7);
            var7 = {};
            var12 = var12.id;
            var7['threadId'] = var12;
            var7 = var11.bind(var5)(var7);
            var11 = var7.onTapReaction;
            _closure2_slot4 = var11;
            var16 = var7.onLongTapReaction;
            _closure2_slot5 = var16;
            var12 = _closure1_slot0;
            var7 = 13;
            var7 = var14[var7];
            var7 = var12.bind(var5)(var7);
            var12 = var7.AnimateEmoji;
            var7 = var12.useSetting;
            var7 = var7.bind(var12)();
            var15 = _closure1_slot3;
            var14 = var15.useCallback;
            var12 = new Array(5);
            var12[0] = var3;
            var12[1] = var1;
            var12[2] = var17;
            var12[3] = var11;
            var12[4] = var13;
            var11 = function() {
                var3 = _closure2_slot4;
                var2 = {};
                var4 = _closure2_slot0;
                var2['reaction'] = var4;
                var4 = _closure2_slot2;
                var2['disableReactionCreates'] = var4;
                var4 = _closure2_slot3;
                var2['disableReactionUpdates'] = var4;
                var1 = _closure2_slot1;
                var2['locationAnalyticsObject'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var12 = var14.bind(var15)(var11, var12);
            var14 = var15.useCallback;
            var11 = new Array(2);
            var11[0] = var16;
            var11[1] = var13;
            var4 = function() {
                var3 = _closure2_slot5;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var11 = var14.bind(var15)(var4, var11);
            var14 = !var3;
            if(var14) { _fun0004_ip = 294; continue _fun0004 }
 291:
            var14 = !var1;
 294:
            var3 = var13.burst_count;
            var1 = 0;
            if(!(!(var3 > var1))) { _fun0004_ip = 394; continue _fun0004 }
 306:
            var4 = _closure1_slot6;
            var3 = _closure1_slot9;
            var1 = {};
            var1['accessible'] = var14;
            var15 = var13.emoji;
            var1['emoji'] = var15;
            var15 = var13.me;
            var1['selected'] = var15;
            var15 = var13.count;
            var1['count'] = var15;
            var1['onPress'] = var12;
            var1['onLongPress'] = var11;
            var1['containerStyle'] = var10;
            var1['textStyle'] = var9;
            var1['emojiSize'] = var8;
            var1['animate'] = var7;
            var1['animateCount'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0004_ip = 500; continue _fun0004;
 394:
            var4 = _closure1_slot6;
            var3 = _closure1_slot8;
            var2 = {};
            var2['accessible'] = var14;
            var14 = var13.emoji;
            var2['emoji'] = var14;
            var14 = var13.me_burst;
            var2['selected'] = var14;
            var14 = var13.burst_colors;
            var15 = null;
            if(!(var15 == var14)) { _fun0004_ip = 445; continue _fun0004 }
 441:
            var14 = new Array(0);
 445:
            var2['colors'] = var14;
            var13 = var13.burst_count;
            var2['count'] = var13;
            var2['onPress'] = var12;
            var2['onLongPress'] = var11;
            var2['containerStyle'] = var10;
            var2['textStyle'] = var9;
            var2['emojiSize'] = var8;
            var2['animate'] = var7;
            var2['animateCount'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 500:
            return var1;
        }
    };
    var3['ForumPostReactionButton'] = var5;
    var3['BurstReactionButton'] = var4;
    var3['ReactionButton'] = var2;
    return var1;
})();