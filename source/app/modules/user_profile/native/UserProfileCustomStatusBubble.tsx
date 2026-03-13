// app/modules/user_profile/native/UserProfileCustomStatusBubble.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function EmojiImage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.emojiId;
            var5 = var1.size;
            var12 = var1.animated;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = false;
case 2:
            var6 = var1.style;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 8;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.AnimateEmoji;
            var1 = var2.useSetting;
            var11 = var1.bind(var2)();
            var3 = _closure1_slot7;
            var7 = _closure1_slot1;
            var1 = 9;
            var1 = var8[var1];
            var2 = var7.bind(var4)(var1);
            var1 = {};
            var13 = {};
            var13['height'] = var5;
            var13['width'] = var5;
            var5 = new Array(2);
            var5[0] = var13;
            var5[1] = var6;
            var1['style'] = var5;
            var5 = {};
            var6 = 10;
            var6 = var8[var6];
            var8 = var7.bind(var4)(var6);
            var7 = var8.getEmojiURL;
            var6 = {};
            var6['id'] = var10;
            var10 = global;
            var10 = var10.Boolean;
            var10 = var10.bind(var4)(var12);
            if(!var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = var11;
case 4:
            var6['animated'] = var10;
            var9 = _closure1_slot6;
            var6['size'] = var9;
            var6 = var7.bind(var8)(var6);
            var5['uri'] = var6;
            var1['source'] = var5;
            var5 = 'contain';
            var1['resizeMode'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function TextStatusContent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var6 = var1.text;
            var17 = var1.emoji;
            var9 = var1.textVariant;
            var8 = var1.lineClamp;
            var7 = var1.onTextLayout;
            var16 = var1.lineHeight;
            var1 = var1.isPlaceholderText;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = false;
case 6:
            var5 = {};
            var2 = 10;
            var2 = var16 / var2;
            var5['paddingVertical'] = var2;
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = {};
            var3 = 'italic';
            var2['fontStyle'] = var3;
            var1 = var2;
case 8:
            var21 = var5;
            var20 = var1;
            var1 = copyDataProperties(var21, var20);
            var3 = _closure1_slot9;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 11;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var1['variant'] = var9;
            var9 = 'text-default';
            var1['color'] = var9;
            var1['lineClamp'] = var8;
            var1['onTextLayout'] = var7;
            var1['style'] = var5;
            var7 = null;
            var8 = var7 == var17;
            var5 = undefined;
            if(var8) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var5 = var17.id;
case 10:
            if(!(var7 == var5)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = var7 == var17;
            var5 = undefined;
            if(var8) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var5 = var17.name;
case 14:
            var5 = var7 != var5;
            var7 = null;
            if(!var5) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var9 = _closure1_slot9;
            var8 = _closure1_slot8;
            var5 = {};
            var12 = var17.name;
            var10 = new Array(2);
            var10[0] = var12;
            var14 = _closure1_slot7;
            var13 = _closure1_slot5;
            var12 = {};
            var15 = {};
            var18 = 0.4;
            var18 = var18 * var16;
            var15['width'] = var18;
            var12['style'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var10[1] = var12;
            var5['children'] = var10;
            var7 = var9.bind(var4)(var8, var5);
case 16:
            _fun0002_ip = 18; continue _fun0002;
case 12:
            var9 = _closure1_slot9;
            var8 = _closure1_slot8;
            var5 = {};
            var13 = _closure1_slot7;
            var12 = _closure1_slot5;
            var10 = {};
            var15 = _closure1_slot14;
            var14 = {};
            var18 = var17.id;
            var14['emojiId'] = var18;
            var18 = 0.9;
            var18 = var18 * var16;
            var14['size'] = var18;
            var17 = var17.animated;
            var14['animated'] = var17;
            var17 = {};
            var19 = -var16;
            var18 = 0.1;
            var18 = var18 * var19;
            var17['marginBottom'] = var18;
            var14['style'] = var17;
            var14 = var13.bind(var4)(var15, var14);
            var10['children'] = var14;
            var12 = var13.bind(var4)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var13 = _closure1_slot7;
            var12 = _closure1_slot5;
            var11 = {};
            var14 = {};
            var15 = 0.5;
            var15 = var15 * var16;
            var14['width'] = var15;
            var11['style'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var5['children'] = var10;
            var7 = var9.bind(var4)(var8, var5);
case 18:
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function EmojiOnlyStatusContent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var10 = var1.emoji;
            var12 = var1.size;
            var1 = _closure1_slot13;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.AnimateEmoji;
            var1 = var2.useSetting;
            var11 = var1.bind(var2)();
            var8 = null;
            var2 = var8 == var10;
            var1 = undefined;
            if(var2) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var1 = var10.id;
case 19:
            var1 = var8 != var1;
            var9 = undefined;
            if(!var1) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getEmojiURL;
            var1 = {};
            var7 = var10.id;
            var1['id'] = var7;
            var7 = global;
            var13 = var7.Boolean;
            var14 = var8 == var10;
            var7 = undefined;
            if(var14) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var7 = var10.animated;
case 23:
            var7 = var13.bind(var4)(var7);
            if(!var7) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var7 = var11;
case 25:
            var1['animated'] = var7;
            var7 = _closure1_slot6;
            var1['size'] = var7;
            var9 = var2.bind(var3)(var1);
case 21:
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = var6.container;
            var1['style'] = var6;
            var7 = _closure1_slot7;
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 12;
            var5 = var11[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var11 = {};
            var11['fontSize'] = var12;
            var5['textEmojiStyle'] = var11;
            var11 = {};
            var11['width'] = var12;
            var11['height'] = var12;
            var5['fastImageStyle'] = var11;
            var5['src'] = var9;
            var11 = var8 == var10;
            var9 = undefined;
            if(var11) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var9 = var10.name;
case 27:
            var10 = var8 != var9;
            var8 = '';
            if(!var10) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var8 = var9;
case 29:
            var5['name'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.UserProfileThemeTypes;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot7 = var8;
    var8 = var4.Fragment;
    var _closure1_slot8 = var8;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var8 = var6[var4];
    var11 = var5.bind(var1)(var8);
    var10 = var11.createStyles;
    var8 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var2 = {};
            var4 = 'relative';
            var2['position'] = var4;
            var1['container'] = var2;
            var2 = {};
            var8 = _closure1_slot1;
            var5 = _closure1_slot2;
            var7 = 7;
            var5 = var5[var7];
            var6 = undefined;
            var5 = var8.bind(var6)(var5);
            var8 = var5.colors;
            if(var3) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var5 = var8.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
            _fun0004_ip = 33; continue _fun0004;
case 31:
            var5 = var8.CUSTOM_STATUS_BUBBLE_BG;
case 33:
            var2['backgroundColor'] = var5;
            var8 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var6)(var5);
            var5 = var5.colors;
            if(var3) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var3 = var5.CONTROL_SECONDARY_BORDER_DEFAULT;
            _fun0004_ip = 36; continue _fun0004;
case 34:
            var3 = var5.BORDER_MUTED;
case 36:
            var2['borderColor'] = var3;
            var3 = 1;
            var2['borderWidth'] = var3;
            var1['bubble'] = var2;
            var2 = {'alignSelf': 'flex-start', 'alignItems': 'center', 'justifyContent': 'center'};
            var3 = 'flex-start';
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.radii;
            var8 = var8.lg;
            var2['borderRadius'] = var8;
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.shadows;
            var10 = var8.SHADOW_LOW;
            var11 = var2;
            var8 = copyDataProperties(var11, var10);
            var9 = -14;
            var8 = 'top';
            var2[var8] = var9;
            var1['statusBubble'] = var2;
            var2 = {'position': 'absolute', 'top': 0, 'left': 0, 'opacity': 0};
            var1['statusBubbleMeasureable'] = var2;
            var2 = {'position': 'absolute', 'top': 4294967266, 'width': 12, 'height': 12};
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.radii;
            var8 = var8.round;
            var2['borderRadius'] = var8;
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.shadows;
            var10 = var8.SHADOW_LOW;
            var11 = var2;
            var8 = copyDataProperties(var11, var10);
            var1['smallCircle'] = var2;
            var2 = {'position': 'absolute', 'top': 4294967288, 'left': 12, 'width': 20, 'height': 20};
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.radii;
            var8 = var8.round;
            var2['borderRadius'] = var8;
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.shadows;
            var10 = var8.SHADOW_LOW;
            var11 = var2;
            var8 = copyDataProperties(var11, var10);
            var1['largeCircle'] = var2;
            var2 = {'position': 'absolute', 'top': -7.5, 'left': 13, 'width': 16, 'height': 16, 'borderWidth': 0};
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.radii;
            var8 = var8.round;
            var2['borderTopLeftRadius'] = var8;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.radii;
            var4 = var4.round;
            var2['borderTopRightRadius'] = var4;
            var1['largeCircleInner'] = var2;
            var4 = 6;
            var2 = {'flexDirection': 'row', 'alignItems': 'flex-start', 'justifyContent': 'center', 'gap': 6, 'marginTop': 1};
            var1['addStatusButton'] = var2;
            var2 = {};
            var2['width'] = var4;
            var1['addStatusIconSpacer'] = var2;
            var2 = {};
            var2['alignItems'] = var3;
            var1['statusBubbleLeftAligned'] = var2;
            return var1;
        }
    };
    var8 = var10.bind(var11)(var8);
    var _closure1_slot10 = var8;
    var8 = {'textVariant': 'text-md/normal', 'emojiOnlyEmojiSize': 32, 'textMinWidth': 42, 'statusBubblePaddingHorizontal': 12, 'statusBubblePaddingVertical': 7};
    var _closure1_slot11 = var8;
    var8 = {};
    var10 = var9.PREVIEW;
    var9 = {'textVariant': 'text-sm/normal', 'emojiOnlyEmojiSize': 26, 'textMinWidth': 53, 'statusBubblePaddingHorizontal': 10, 'statusBubblePaddingVertical': 6};
    var8[var10] = var9;
    var _closure1_slot12 = var8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {};
        var3 = 'center';
        var2['alignItems'] = var3;
        var1['container'] = var2;
        return var1;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var10 = var1.customStatusActivity;
            var3 = var1.themeType;
            var2 = var1.hasCustomProfileTheme;
            var5 = var1.editEnabled;
            var4 = undefined;
            var11 = var4 !== var5;
            if(!var11) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var11 = var5;
case 37:
            var7 = var1.showFullStatus;
            var5 = var4 !== var7;
            if(!var5) { _fun0005_ip = 39; continue _fun0005 }
case 32:
            var5 = var7;
case 39:
            var _closure2_slot0 = var5;
            var13 = var1.onPressTruncatedStatus;
            var _closure2_slot1 = var13;
            var7 = var1.style;
            var8 = var1.emojiOnlyStyle;
            var26 = var1.previewEmoji;
            var28 = var1.previewText;
            var25 = var1.placeholderText;
            var1 = var1.prompt;
            var _closure2_slot2 = var1;
            var1 = _closure1_slot10;
            var22 = var1.bind(var4)(var2);
            var _closure2_slot3 = var22;
            var1 = undefined;
            if(!var3) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var2 = _closure1_slot12;
            var1 = var2[var3];
case 40:
            var29 = null;
            if(!(var29 == var1)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var1 = _closure1_slot11;
case 42:
            var5 = var1.textVariant;
            var _closure2_slot4 = var5;
            var17 = var1.emojiOnlyEmojiSize;
            var _closure2_slot5 = var17;
            var18 = var1.textMinWidth;
            var2 = var1.statusBubblePaddingHorizontal;
            var3 = var1.statusBubblePaddingVertical;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 13;
            var1 = var12[var1];
            var9 = var9.bind(var4)(var1);
            var1 = var9.useUserProfileAnalyticsContext;
            var1 = var1.bind(var9)();
            var1 = var1.trackUserProfileAction;
            var _closure2_slot6 = var1;
            if(!(var4 !== var28)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var1 = '';
            if(!(var1 === var28)) { _fun0005_ip = 46; continue _fun0005 }
case 44:
            var9 = var29 == var10;
            var1 = undefined;
            if(var9) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var1 = var10.state;
case 47:
            var28 = var1;
case 46:
            var1 = var29 != var28;
            if(!var1) { _fun0005_ip = 49; continue _fun0005 }
case 28:
            var9 = '';
            var1 = var9 !== var28;
case 49:
            if(!(var4 === var26)) { _fun0005_ip = 50; continue _fun0005 }
case 16:
            var12 = var29 == var10;
            var9 = undefined;
            if(var12) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var9 = var10.emoji;
case 51:
            var26 = var9;
case 50:
            var _closure2_slot7 = var26;
            var9 = var29 != var26;
            var23 = var9;
            if(!var9) { _fun0005_ip = 53; continue _fun0005 }
case 54:
            var23 = !var1;
case 53:
            var _closure2_slot8 = var23;
            var20 = !var1;
            if(var1) { _fun0005_ip = 55; continue _fun0005 }
case 56:
            var20 = !var9;
case 55:
            if(!var20) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            var20 = var4 !== var25;
case 57:
            if(!var20) { _fun0005_ip = 59; continue _fun0005 }
case 60:
            var10 = '';
            var20 = var10 !== var25;
case 59:
            var _closure2_slot9 = var20;
            if(!var20) { _fun0005_ip = 61; continue _fun0005 }
case 62:
            var28 = var25;
case 61:
            var _closure2_slot10 = var28;
            var14 = var29 != var28;
            if(!var14) { _fun0005_ip = 63; continue _fun0005 }
case 64:
            var10 = '';
            var14 = var10 !== var28;
case 63:
            var _closure2_slot11 = var14;
            if(var1) { _fun0005_ip = 65; continue _fun0005 }
case 66:
            var1 = var9;
case 65:
            if(var1) { _fun0005_ip = 67; continue _fun0005 }
case 68:
            var9 = !var11;
            if(!var9) { _fun0005_ip = 69; continue _fun0005 }
case 70:
            var9 = var20;
case 69:
            var1 = var9;
case 67:
            var12 = !var1;
            if(var1) { _fun0005_ip = 71; continue _fun0005 }
case 72:
            var12 = var11;
case 71:
            var15 = _closure1_slot4;
            var10 = var15.useState;
            var9 = false;
            var10 = var10.bind(var15)(var9);
            var9 = _closure1_slot3;
            var16 = 2;
            var21 = var9.bind(var4)(var10, var16);
            var9 = 0;
            var10 = var21[var9];
            var15 = 1;
            var15 = var21[var15];
            var _closure2_slot12 = var15;
            var21 = {};
            var15 = 0;
            if(!var14) { _fun0005_ip = 73; continue _fun0005 }
case 74:
            var15 = var18;
case 73:
            var21['minWidth'] = var15;
            var15 = 0;
            if(!var23) { _fun0005_ip = 75; continue _fun0005 }
case 76:
            var16 = var16 * var3;
            var15 = var17 + var16;
case 75:
            var21['minHeight'] = var15;
            if(var14) { _fun0005_ip = 77; continue _fun0005 }
case 78:
            var9 = 0;
            if(!var12) { _fun0005_ip = 79; continue _fun0005 }
case 77:
            var9 = var3;
case 79:
            var21['paddingVertical'] = var9;
            var21['paddingHorizontal'] = var2;
            var _closure2_slot13 = var21;
            var14 = {};
            var14['top'] = var3;
            var14['bottom'] = var3;
            var14['left'] = var2;
            var14['right'] = var2;
            var16 = _closure1_slot4;
            var2 = var16.useRef;
            var9 = var2.bind(var16)(var29);
            var _closure2_slot14 = var9;
            var15 = var16.useImperativeHandle;
            var3 = arg2;
            var2 = function() {
                var1 = _closure2_slot14;
                var1 = var1.current;
                return var1;
            };
            var2 = var15.bind(var16)(var3, var2);
            var3 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 14;
            var2 = var15[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useScaledTextLineHeight;
            var27 = var2.bind(var3)(var5);
            var _closure2_slot15 = var27;
            if(var1) { _fun0005_ip = 80; continue _fun0005 }
case 81:
            if(var12) { _fun0005_ip = 80; continue _fun0005 }
case 82:
            return var29;
case 80:
            var15 = function handlePressAddOrEditStatus() {
                var3 = _closure2_slot6;
                var2 = {};
                var1 = 'PRESS_EDIT_CUSTOM_STATUS';
                var2['action'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 15;
                var3 = var8[var3];
                var4 = var7.bind(var1)(var3);
                var3 = var4.hideActionSheet;
                var3 = var3.bind(var4)();
                var3 = _closure1_slot0;
                var2 = 16;
                var2 = var8[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEditCustomStatusModal;
                var2 = {};
                var6 = 17;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var7 = var6.USER_PROFILE_CUSTOM_STATUS_BUBBLE;
                var6 = new Array(1);
                var6[0] = var7;
                var2['analyticsLocations'] = var6;
                var5 = _closure2_slot2;
                var2['prompt'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var16 = function renderStatusContent() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot11;
                    if(var1) { _fun0006_ip = 83; continue _fun0006 }
case 84:
                    var3 = _closure2_slot8;
                    var6 = undefined;
                    var1 = undefined;
                    if(!var3) { _fun0006_ip = 39; continue _fun0006 }
case 85:
                    var5 = _closure1_slot7;
                    var4 = _closure1_slot16;
                    var3 = {};
                    var7 = _closure2_slot7;
                    var3['emoji'] = var7;
                    var7 = _closure2_slot5;
                    var3['size'] = var7;
                    var1 = var5.bind(var6)(var4, var3);
case 39:
                    _fun0006_ip = 86; continue _fun0006;
case 83:
                    var5 = _closure1_slot7;
                    var4 = _closure1_slot15;
                    var3 = {};
                    var6 = _closure2_slot10;
                    var3['text'] = var6;
                    var6 = _closure2_slot9;
                    var3['isPlaceholderText'] = var6;
                    var6 = _closure2_slot7;
                    var3['emoji'] = var6;
                    var6 = _closure2_slot4;
                    var3['textVariant'] = var6;
                    var7 = _closure2_slot0;
                    var6 = 2;
                    if(!var7) { _fun0006_ip = 87; continue _fun0006 }
case 88:
                    var6 = undefined;
case 87:
                    var3['lineClamp'] = var6;
                    var2 = _closure2_slot15;
                    var3['lineHeight'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
case 86:
                    return var1;
                }
            };
            var17 = {};
            var2 = var29 == var26;
            var1 = undefined;
            if(var2) { _fun0005_ip = 89; continue _fun0005 }
case 90:
            var1 = var26.name;
case 89:
            var3 = new Array(2);
            var3[0] = var1;
            var3[1] = var28;
            var2 = var3.filter;
            var1 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.join;
            var1 = ' ';
            var1 = var2.bind(var3)(var1);
            var17['text'] = var1;
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = new Array(2);
            var5[0] = var7;
            var7 = undefined;
            if(!var23) { _fun0005_ip = 91; continue _fun0005 }
case 92:
            var7 = var8;
case 91:
            var5[1] = var7;
            var1['style'] = var5;
            var8 = _closure1_slot7;
            var7 = _closure1_slot5;
            var5 = {};
            var24 = var22.bubble;
            var18 = new Array(2);
            var18[0] = var24;
            var24 = var22.smallCircle;
            var18[1] = var24;
            var5['style'] = var18;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(4);
            var5[0] = var7;
            var18 = _closure1_slot7;
            var8 = _closure1_slot5;
            var7 = {};
            var30 = var22.bubble;
            var24 = new Array(2);
            var24[0] = var30;
            var30 = var22.largeCircle;
            var24[1] = var30;
            var7['style'] = var24;
            var7 = var18.bind(var4)(var8, var7);
            var5[1] = var7;
            var6 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 93; continue _fun0007 }
case 94:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0007_ip = 93; continue _fun0007 }
case 3:
                    var2 = _closure2_slot11;
                    if(!var2) { _fun0007_ip = 93; continue _fun0007 }
case 95:
                    var4 = _closure1_slot7;
                    var3 = _closure1_slot5;
                    var2 = {};
                    var6 = _closure2_slot3;
                    var7 = var6.bubble;
                    var6 = new Array(4);
                    var6[0] = var7;
                    var7 = _closure2_slot3;
                    var7 = var7.statusBubble;
                    var6[1] = var7;
                    var7 = _closure2_slot13;
                    var6[2] = var7;
                    var7 = _closure2_slot3;
                    var7 = var7.statusBubbleMeasureable;
                    var6[3] = var7;
                    var2['style'] = var6;
                    var7 = _closure1_slot7;
                    var6 = _closure1_slot15;
                    var5 = {};
                    var8 = _closure2_slot10;
                    var5['text'] = var8;
                    var8 = _closure2_slot9;
                    var5['isPlaceholderText'] = var8;
                    var8 = _closure2_slot7;
                    var5['emoji'] = var8;
                    var8 = _closure2_slot4;
                    var5['textVariant'] = var8;
                    var8 = function onTextLayout(arg1) {
                        var3 = _closure2_slot12;
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var1 = var1.lines;
                        var2 = var1.length;
                        var1 = 2;
                        var2 = var2 > var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var5['onTextLayout'] = var8;
                    var1 = _closure2_slot15;
                    var5['lineHeight'] = var1;
                    var1 = undefined;
                    var5 = var7.bind(var1)(var6, var5);
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
case 93:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var6.bind(var4)();
            var5[2] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot5;
            var6 = {};
            var24 = var22.bubble;
            var18 = new Array(4);
            var18[0] = var24;
            var24 = var22.statusBubble;
            var18[1] = var24;
            var18[2] = var21;
            var21 = !var23;
            if(var23) { _fun0005_ip = 96; continue _fun0005 }
case 97:
            var21 = var22.statusBubbleLeftAligned;
case 96:
            var18[3] = var21;
            var6['style'] = var18;
            var6['ref'] = var9;
            var21 = _closure1_slot7;
            var18 = _closure1_slot5;
            var9 = {};
            var24 = var22.bubble;
            var23 = new Array(2);
            var23[0] = var24;
            var24 = var22.largeCircleInner;
            var23[1] = var24;
            var9['style'] = var23;
            var18 = var21.bind(var4)(var18, var9);
            var9 = new Array(2);
            var9[0] = var18;
            if(var12) { _fun0005_ip = 98; continue _fun0005 }
case 99:
            if(var11) { _fun0005_ip = 100; continue _fun0005 }
case 101:
            if(!(var29 != var13)) { _fun0005_ip = 102; continue _fun0005 }
case 103:
            if(!var10) { _fun0005_ip = 102; continue _fun0005 }
case 104:
            if(var20) { _fun0005_ip = 102; continue _fun0005 }
case 105:
            var12 = _closure1_slot7;
            var21 = _closure1_slot0;
            var30 = _closure1_slot2;
            var10 = 19;
            var10 = var30[var10];
            var10 = var21.bind(var4)(var10);
            var11 = var10.PressableOpacity;
            var10 = {};
            var18 = 'button';
            var10['accessibilityRole'] = var18;
            var18 = 18;
            var23 = var30[var18];
            var23 = var21.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.formatToPlainString;
            var18 = var30[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var21 = var18.UpF5Qa;
            var18 = {};
            var30 = var29 == var26;
            var31 = undefined;
            if(var30) { _fun0005_ip = 106; continue _fun0005 }
case 107:
            var31 = var26.name;
case 106:
            var32 = var29 != var31;
            var26 = '';
            var30 = var26;
            if(!var32) { _fun0005_ip = 108; continue _fun0005 }
case 109:
            var30 = var31;
case 108:
            var18['emoji'] = var30;
            var29 = var29 != var28;
            if(!var29) { _fun0005_ip = 110; continue _fun0005 }
case 111:
            var26 = var28;
case 110:
            var18['status'] = var26;
            var18 = var23.bind(var24)(var21, var18);
            var10['accessibilityLabel'] = var18;
            var10['onPress'] = var13;
            var10['hitSlop'] = var14;
            var13 = var16.bind(var4)();
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            _fun0005_ip = 112; continue _fun0005;
case 102:
            var10 = var16.bind(var4)();
case 112:
            _fun0005_ip = 113; continue _fun0005;
case 100:
            var13 = _closure1_slot7;
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var11 = 19;
            var11 = var26[var11];
            var11 = var24.bind(var4)(var11);
            var12 = var11.PressableOpacity;
            var11 = {};
            var18 = 'button';
            var11['accessibilityRole'] = var18;
            var18 = 18;
            var21 = var26[var18];
            var21 = var24.bind(var4)(var21);
            var23 = var21.intl;
            var21 = var23.string;
            var18 = var26[var18];
            var18 = var24.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.QdHxos;
            var18 = var21.bind(var23)(var18);
            var11['accessibilityLabel'] = var18;
            var11['accessibilityValue'] = var17;
            var11['onPress'] = var15;
            var11['hitSlop'] = var14;
            var16 = var16.bind(var4)();
            var11['children'] = var16;
            var10 = var13.bind(var4)(var12, var11);
case 113:
            _fun0005_ip = 114; continue _fun0005;
case 98:
            if(var20) { _fun0005_ip = 115; continue _fun0005 }
case 116:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var11 = 18;
            var12 = var17[var11];
            var12 = var16.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var17[var11];
            var11 = var16.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.Vq4UmS;
            var18 = var12.bind(var13)(var11);
            _fun0005_ip = 117; continue _fun0005;
case 115:
            var18 = var25;
case 117:
            var13 = _closure1_slot7;
            var23 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 19;
            var11 = var16[var11];
            var11 = var23.bind(var4)(var11);
            var12 = var11.PressableOpacity;
            var11 = {};
            var17 = 'button';
            var11['accessibilityRole'] = var17;
            var26 = 18;
            var17 = var16[var26];
            var17 = var23.bind(var4)(var17);
            var21 = var17.intl;
            var17 = var21.string;
            var16 = var16[var26];
            var16 = var23.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.zrpF/b;
            var16 = var17.bind(var21)(var16);
            var11['accessibilityLabel'] = var16;
            var16 = undefined;
            if(!var20) { _fun0005_ip = 118; continue _fun0005 }
case 119:
            var21 = _closure1_slot0;
            var17 = _closure1_slot2;
            var23 = var17[var26];
            var23 = var21.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.formatToPlainString;
            var17 = var17[var26];
            var17 = var21.bind(var4)(var17);
            var17 = var17.t;
            var21 = var17.ioWOMP;
            var17 = {};
            var17['prompt'] = var25;
            var16 = var23.bind(var24)(var21, var17);
case 118:
            var11['accessibilityHint'] = var16;
            var11['onPress'] = var15;
            var11['hitSlop'] = var14;
            var14 = var22.addStatusButton;
            var11['style'] = var14;
            var16 = _closure1_slot9;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var14 = 11;
            var14 = var17[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {};
            var17 = 'text-md/medium';
            if(!var20) { _fun0005_ip = 120; continue _fun0005 }
case 121:
            var17 = 'text-md/normal';
case 120:
            var14['variant'] = var17;
            var17 = 'control-secondary-text-default';
            var14['color'] = var17;
            var17 = undefined;
            if(!var20) { _fun0005_ip = 122; continue _fun0005 }
case 123:
            var20 = {};
            var21 = 'italic';
            var20['fontStyle'] = var21;
            var17 = var20;
case 122:
            var14['style'] = var17;
            var21 = _closure1_slot7;
            var20 = _closure1_slot5;
            var17 = {};
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var23 = 20;
            var23 = var28[var23];
            var23 = var26.bind(var4)(var23);
            var24 = var23.CirclePlusIcon;
            var23 = {};
            var29 = _closure1_slot1;
            var25 = 7;
            var25 = var28[var25];
            var25 = var29.bind(var4)(var25);
            var25 = var25.colors;
            var25 = var25.CONTROL_SECONDARY_TEXT_DEFAULT;
            var23['color'] = var25;
            var25 = 'xs';
            var23['size'] = var25;
            var25 = 21;
            var25 = var28[var25];
            var26 = var26.bind(var4)(var25);
            var25 = var26.isAndroid;
            var26 = var25.bind(var26)();
            var25 = undefined;
            if(!var26) { _fun0005_ip = 124; continue _fun0005 }
case 125:
            var26 = {};
            var28 = -var27;
            var27 = 0.1;
            var27 = var27 * var28;
            var26['marginBottom'] = var27;
            var25 = var26;
case 124:
            var23['style'] = var25;
            var23 = var21.bind(var4)(var24, var23);
            var17['children'] = var23;
            var20 = var21.bind(var4)(var20, var17);
            var17 = new Array(3);
            var17[0] = var20;
            var21 = _closure1_slot7;
            var20 = _closure1_slot5;
            var19 = {};
            var22 = var22.addStatusIconSpacer;
            var19['style'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var17[1] = var19;
            var17[2] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 114:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileCustomStatusBubble.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();