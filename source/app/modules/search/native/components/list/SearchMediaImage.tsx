// app/modules/search/native/components/list/SearchMediaImage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function SearchMediaObscurityIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = var2.obscureReason;
            var _closure2_slot0 = var6;
            var9 = var2.height;
            var _closure2_slot1 = var9;
            var2 = var2.width;
            var _closure2_slot2 = var2;
            var3 = _closure1_slot12;
            var4 = undefined;
            var12 = var3.bind(var4)();
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 6;
            var3 = var8[var3];
            var3 = var5.bind(var4)(var3);
            var7 = var3.bind(var4)();
            var5 = _closure1_slot0;
            var3 = 7;
            var3 = var8[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.isThemeDark;
            var3 = var3.bind(var5)(var7);
            var8 = 'light';
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = 'dark';
case 2:
            var7 = _closure1_slot4;
            var5 = var7.useMemo;
            var3 = new Array(2);
            var3[0] = var9;
            var3[1] = var2;
            var2 = function() {
                var1 = {};
                var3 = _closure2_slot1;
                var1['height'] = var3;
                var2 = _closure2_slot2;
                var1['width'] = var2;
                return var1;
            };
            var9 = var5.bind(var7)(var2, var3);
            var5 = _closure1_slot4;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 8;
                    var2 = var2[var6];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.ObscureReason;
                    var2 = var2.SPOILER;
                    if(!(var2 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.ObscureReason;
                    var2 = var2.EXPLICIT_CONTENT;
                    if(!(var2 !== var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.ObscureReason;
                    var2 = var2.GORE_CONTENT;
                    if(!(var2 !== var3)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.ObscureReason;
                    var2 = var2.POTENTIAL_EXPLICIT_CONTENT;
                    if(!(var2 !== var3)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    return var4;
case 9:
                    var2 = null;
                    return var2;
case 6:
                    var5 = _closure1_slot9;
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 10;
                    var2 = var6[var2];
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.ImageWarningIcon;
                    var2 = {};
                    var6 = 'lg';
                    var2['size'] = var6;
                    var2 = var5.bind(var4)(var3, var2);
                    return var2;
case 4:
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 9;
                    var1 = var5[var1];
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.SpoilerIcon;
                    var1 = {};
                    var5 = 'lg';
                    var1['size'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var10 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot10;
            var1 = {};
            var7 = _closure1_slot9;
            var6 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 11;
            var5 = var13[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['blurTheme'] = var8;
            var8 = _closure1_slot6;
            var13 = var8.absoluteFill;
            var8 = new Array(2);
            var8[0] = var13;
            var8[1] = var9;
            var5['style'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = null;
            var6 = var6 != var10;
            if(!var6) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var9 = _closure1_slot9;
            var8 = _closure1_slot7;
            var7 = {};
            var11 = _closure1_slot6;
            var13 = var11.absoluteFill;
            var11 = new Array(2);
            var11[0] = var13;
            var12 = var12.container;
            var11[1] = var12;
            var7['style'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 11:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.ImageBackground;
    var _closure1_slot5 = var9;
    var9 = var4.StyleSheet;
    var _closure1_slot6 = var9;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var7 = var4.Fragment;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {'justifyContent': 'center', 'alignItems': 'center'};
    var4['container'] = var10;
    var10 = {'justifyContent': 'center', 'alignItems': 'center'};
    var4['sound'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var21 = var2.mediaUrl;
            var19 = var2.mediaHeight;
            var20 = var2.mediaWidth;
            var8 = var2.containerStyle;
            var18 = var2.placeholder;
            var17 = var2.placeholderVersion;
            var6 = var2.renderFallback;
            var3 = var2.obscureReason;
            var15 = var2.containerHeight;
            var _closure2_slot0 = var15;
            var11 = var2.containerWidth;
            var _closure2_slot1 = var11;
            var5 = var2.scale;
            var9 = _closure1_slot4;
            var7 = var9.useMemo;
            var4 = new Array(2);
            var4[0] = var15;
            var4[1] = var11;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot0;
                var1['height'] = var3;
                var2 = _closure2_slot1;
                var1['width'] = var2;
                return var1;
            };
            var13 = var7.bind(var9)(var1, var4);
            var1 = null;
            if(!(var1 != var21)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            if(!(var1 != var19)) { _fun0003_ip = 13; continue _fun0003 }
case 15:
            if(!(var1 != var20)) { _fun0003_ip = 13; continue _fun0003 }
case 16:
            var4 = var15 * var5;
            var5 = var11 * var5;
            if(!(!(var20 > var19))) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var9 = new Array(2);
            var9[0] = var4;
            var7 = global;
            var10 = var7.Math;
            var7 = var10.round;
            var4 = var4 / var20;
            var4 = var19 * var4;
            var4 = var7.bind(var10)(var4);
            var9[1] = var4;
            _fun0003_ip = 19; continue _fun0003;
case 17:
            var4 = global;
            var10 = var4.Math;
            var7 = var10.round;
            var4 = var5 / var19;
            var4 = var20 * var4;
            var7 = var7.bind(var10)(var4);
            var4 = new Array(2);
            var4[0] = var7;
            var4[1] = var5;
            var9 = var4;
case 19:
            var5 = _closure1_slot3;
            var7 = undefined;
            var4 = 2;
            var5 = var5.bind(var7)(var9, var4);
            var4 = 0;
            var16 = var5[var4];
            var4 = 1;
            var14 = var5[var4];
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 12;
            var4 = var9[var4];
            var12 = var5.bind(var7)(var4);
            var10 = var12.getSrcWithWidthAndHeight;
            var4 = {};
            var4['src'] = var21;
            var4['sourceWidth'] = var20;
            var4['sourceHeight'] = var19;
            var4['targetWidth'] = var16;
            var4['targetHeight'] = var14;
            var14 = 'png';
            var4['format'] = var14;
            var14 = var10.bind(var12)(var4);
            var4 = 13;
            var4 = var9[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.getObscuredAlt;
            var12 = var4.bind(var5)(var3);
            var4 = var1 != var3;
            var9 = null;
            if(!var4) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var10 = _closure1_slot9;
            var5 = _closure1_slot14;
            var4 = {};
            var4['obscureReason'] = var3;
            var4['height'] = var15;
            var4['width'] = var11;
            var9 = var10.bind(var7)(var5, var4);
case 20:
            var10 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = 14;
            var4 = var4[var5];
            var10 = var10.bind(var7)(var4);
            var4 = var10.isAndroid;
            var4 = var4.bind(var10)();
            if(!var4) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            if(!(var1 == var3)) { _fun0003_ip = 24; continue _fun0003 }
case 22:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var4 = var4.bind(var7)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            var16 = var12;
            if(!var3) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 15;
            var4 = var11[var3];
            var4 = var10.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var11[var3];
            var3 = var10.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.jes7FB;
            var16 = var4.bind(var5)(var3);
case 25:
            var5 = _closure1_slot11;
            var4 = _closure1_slot7;
            var3 = {};
            var3['style'] = var8;
            var15 = _closure1_slot9;
            var11 = _closure1_slot0;
            var19 = _closure1_slot2;
            var10 = 16;
            var10 = var19[var10];
            var10 = var11.bind(var7)(var10);
            var11 = var10.ImageWithPlaceholder;
            var10 = {};
            var10['style'] = var13;
            var10['uri'] = var14;
            var10['placeholder'] = var18;
            var10['placeholderVersion'] = var17;
            var10['alt'] = var16;
            var11 = var15.bind(var7)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var10[1] = var9;
            var3['children'] = var10;
            var3 = var5.bind(var7)(var4, var3);
            return var3;
case 24:
            var5 = _closure1_slot11;
            var4 = _closure1_slot7;
            var3 = {};
            var3['style'] = var8;
            var11 = _closure1_slot9;
            var10 = _closure1_slot5;
            var8 = {};
            var8['style'] = var13;
            var13 = {};
            var13['uri'] = var14;
            var8['source'] = var13;
            var13 = 10;
            var8['blurRadius'] = var13;
            var13 = 'cover';
            var8['resizeMode'] = var13;
            var8['accessibilityLabel'] = var12;
            var10 = var11.bind(var7)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var3['children'] = var8;
            var3 = var5.bind(var7)(var4, var3);
            return var3;
case 13:
            var3 = var1 != var6;
            var1 = null;
            if(!var3) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var5 = _closure1_slot9;
            var4 = _closure1_slot10;
            var3 = {};
            var2 = undefined;
            var6 = var6.bind(var2)();
            var3['children'] = var6;
            var1 = var5.bind(var2)(var4, var3);
case 27:
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/list/SearchMediaImage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function SearchAttachmentMediaImage(arg1) {
        var4 = arg1;
        var5 = var4.attachment;
        var _closure2_slot0 = var5;
        var11 = var4.channelId;
        var10 = var4.authorId;
        var3 = {'attachment': 0, 'channelId': 0, 'authorId': 0};
        var14 = null;
        var15 = var3;
        var1 = silentSetPrototypeOf(var15, var14);
        var15 = {};
        var14 = var4;
        var13 = var3;
        var6 = copyDataProperties(var15, var14, var13);
        var3 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 17;
        var8 = var7[var4];
        var4 = undefined;
        var9 = var3.bind(var4)(var8);
        var8 = var9.useEnabledHarmTypesBitmaskForChannelAndAuthorId;
        var11 = var8.bind(var9)(var11, var10);
        var _closure2_slot1 = var11;
        var10 = _closure1_slot4;
        var9 = var10.useMemo;
        var8 = new Array(2);
        var8[0] = var5;
        var8[1] = var11;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.getObscureReasonForAttachment;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var8 = var9.bind(var10)(var2, var8);
        var2 = 18;
        var2 = var7[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.getAttachmentUrl;
        var7 = var2.bind(var3)(var5);
        var3 = _closure1_slot9;
        var2 = _closure1_slot13;
        var1 = {};
        var15 = var1;
        var14 = var6;
        var6 = copyDataProperties(var15, var14);
        var6 = 'obscureReason';
        var1[var6] = var8;
        var6 = 'mediaUrl';
        var1[var6] = var7;
        var7 = var5.height;
        var6 = 'mediaHeight';
        var1[var6] = var7;
        var6 = var5.width;
        var5 = 'mediaWidth';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['SearchAttachmentMediaImage'] = var4;
    var4 = function SearchEmbedMediaImage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var8 = var4.embed;
            var _closure2_slot0 = var8;
            var1 = var4.sources;
            var _closure2_slot1 = var1;
            var1 = var4.messageId;
            var _closure2_slot2 = var1;
            var12 = var4.channelId;
            var11 = var4.authorId;
            var3 = {'embed': 0, 'sources': 0, 'messageId': 0, 'channelId': 0, 'authorId': 0};
            var6 = null;
            var15 = var3;
            var14 = null;
            var1 = silentSetPrototypeOf(var15, var14);
            var15 = {};
            var14 = var4;
            var13 = var3;
            var5 = copyDataProperties(var15, var14, var13);
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 17;
            var9 = var3[var4];
            var4 = undefined;
            var10 = var7.bind(var4)(var9);
            var9 = var10.useEnabledHarmTypesBitmaskForChannelAndAuthorId;
            var9 = var9.bind(var10)(var12, var11);
            var _closure2_slot3 = var9;
            var9 = 19;
            var9 = var3[var9];
            var11 = var7.bind(var4)(var9);
            var10 = var11.useStateFromStores;
            var12 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var12;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = _closure1_slot8;
                    var4 = var5.getMessage;
                    var1 = _closure2_slot2;
                    var7 = var4.bind(var5)(var1);
                    var1 = null;
                    if(!(var1 != var7)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 18;
                    var4 = var5[var4];
                    var5 = undefined;
                    var9 = var6.bind(var5)(var4);
                    var8 = var9.flattenSource;
                    var6 = _closure2_slot1;
                    var4 = false;
                    var6 = var8.bind(var9)(var6, var4);
                    var8 = var1 == var6;
                    var4 = undefined;
                    if(var8) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                    var4 = var6.spoiler;
case 31:
                    var6 = var1 != var4;
                    if(!var6) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                    var6 = var4;
case 33:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 13;
                    var3 = var8[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.getObscureReasonForEmbed;
                    var13 = _closure2_slot0;
                    var10 = _closure2_slot3;
                    var14 = var5;
                    var12 = var7;
                    var11 = var6;
                    var2 = var14[var4](var13, var12, var11, var10, var9);
                    return var2;
case 29:
                    return var1;
                }
            };
            var9 = var10.bind(var11)(var9, var2);
            var2 = var8.thumbnail;
            var11 = 18;
            var3 = var3[var11];
            var7 = var7.bind(var4)(var3);
            var3 = var7.getEmbedMedia;
            var3 = var3.bind(var7)(var8);
            var7 = var6 != var3;
            var8 = null;
            if(!var7) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var10 = var10.bind(var4)(var7);
            var7 = var10.getEmbedUrl;
            var8 = var7.bind(var10)(var3);
case 35:
            if(!(var6 != var2)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var8 = var2.url;
case 37:
            if(!(var6 == var2)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var10 = var6 == var3;
            var7 = undefined;
            if(var10) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var7 = var3.height;
case 41:
            _fun0004_ip = 43; continue _fun0004;
case 39:
            var7 = var2.height;
case 43:
            if(!(var6 == var2)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var10 = var6 == var3;
            var6 = undefined;
            if(var10) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var6 = var3.width;
case 46:
            _fun0004_ip = 48; continue _fun0004;
case 44:
            var6 = var2.width;
case 48:
            var3 = _closure1_slot9;
            var2 = _closure1_slot13;
            var1 = {};
            var15 = var1;
            var14 = var5;
            var5 = copyDataProperties(var15, var14);
            var5 = 'obscureReason';
            var1[var5] = var9;
            var5 = 'mediaUrl';
            var1[var5] = var8;
            var5 = 'mediaHeight';
            var1[var5] = var7;
            var5 = 'mediaWidth';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['SearchEmbedMediaImage'] = var4;
    var4 = function SearchSoundMediaImage(arg1) {
        var2 = arg1;
        var10 = var2.height;
        var _closure2_slot0 = var10;
        var9 = var2.width;
        var _closure2_slot1 = var9;
        var8 = var2.containerStyle;
        var2 = _closure1_slot12;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var7 = _closure1_slot4;
        var3 = var7.useMemo;
        var2 = new Array(2);
        var2[0] = var10;
        var2[1] = var9;
        var1 = function() {
            var1 = {};
            var3 = _closure2_slot0;
            var1['height'] = var3;
            var2 = _closure2_slot1;
            var1['width'] = var2;
            return var1;
        };
        var7 = var3.bind(var7)(var1, var2);
        var3 = _closure1_slot9;
        var2 = _closure1_slot7;
        var1 = {};
        var9 = var6.sound;
        var6 = new Array(3);
        var6[0] = var9;
        var6[1] = var8;
        var6[2] = var7;
        var1['style'] = var6;
        var7 = _closure1_slot9;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var5 = 20;
        var5 = var8[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.CirclePlayIcon;
        var5 = {'size': 'lg', 'color': 'interactive-normal'};
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['SearchSoundMediaImage'] = var4;
    var2 = function SearchFileMediaImage(arg1) {
        var2 = arg1;
        var8 = var2.fileName;
        var11 = var2.height;
        var _closure2_slot0 = var11;
        var10 = var2.width;
        var _closure2_slot1 = var10;
        var9 = var2.containerStyle;
        var2 = _closure1_slot12;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var7 = _closure1_slot4;
        var3 = var7.useMemo;
        var2 = new Array(2);
        var2[0] = var11;
        var2[1] = var10;
        var1 = function() {
            var1 = {};
            var3 = _closure2_slot0;
            var1['height'] = var3;
            var2 = _closure2_slot1;
            var1['width'] = var2;
            return var1;
        };
        var7 = var3.bind(var7)(var1, var2);
        var3 = _closure1_slot9;
        var2 = _closure1_slot7;
        var1 = {};
        var10 = var6.sound;
        var6 = new Array(3);
        var6[0] = var10;
        var6[1] = var9;
        var6[2] = var7;
        var1['style'] = var6;
        var7 = _closure1_slot9;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var5 = 21;
        var5 = var9[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.AttachmentIcon;
        var5 = {};
        var5['fileName'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['SearchFileMediaImage'] = var2;
    return var1;
})();