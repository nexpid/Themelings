// app/modules/search/native/components/list/SearchMediaImage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getMediaSize(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var2 = arg2;
            var4 = arg3;
            var3 = arg4;
            if(!(!(var6 > var2))) { _fun0001_ip = 56; continue _fun0001 }
 16:
            var1 = new Array(2);
            var1[0] = var4;
            var5 = global;
            var7 = var5.Math;
            var5 = var7.round;
            var4 = var4 / var6;
            var4 = var2 * var4;
            var4 = var5.bind(var7)(var4);
            var1[1] = var4;
            _fun0001_ip = 97; continue _fun0001;
 56:
            var4 = global;
            var5 = var4.Math;
            var4 = var5.round;
            var2 = var3 / var2;
            var2 = var6 * var2;
            var4 = var4.bind(var5)(var2);
            var2 = new Array(2);
            var2[0] = var4;
            var2[1] = var3;
            var1 = var2;
 97:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function SearchMediaObscurityIcon(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
            if(!var3) { _fun0002_ip = 108; continue _fun0002 }
 104:
            var8 = 'dark';
 108:
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
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot0;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 8;
                    var2 = var2[var6];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.ObscureReason;
                    var2 = var2.SPOILER;
                    if(!(var2 !== var3)) { _fun0003_ip = 204; continue _fun0003 }
 51:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.ObscureReason;
                    var2 = var2.EXPLICIT_CONTENT;
                    if(!(var2 !== var3)) { _fun0003_ip = 156; continue _fun0003 }
 84:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.ObscureReason;
                    var2 = var2.GORE_CONTENT;
                    if(!(var2 !== var3)) { _fun0003_ip = 156; continue _fun0003 }
 117:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.ObscureReason;
                    var2 = var2.POTENTIAL_EXPLICIT_CONTENT;
                    if(!(var2 !== var3)) { _fun0003_ip = 152; continue _fun0003 }
 150:
                    return var4;
 152:
                    var2 = null;
                    return var2;
 156:
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
 204:
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
            if(!var6) { _fun0002_ip = 313; continue _fun0002 }
 262:
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
 313:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function SearchMediaImage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var8 = var2.containerStyle;
            var9 = var2.uri;
            var _closure2_slot0 = var9;
            var18 = var2.placeholder;
            var17 = var2.placeholderVersion;
            var3 = var2.obscureReason;
            var6 = var2.renderFallback;
            var15 = var2.imageHeight;
            var _closure2_slot1 = var15;
            var11 = var2.imageWidth;
            var _closure2_slot2 = var11;
            var10 = _closure1_slot4;
            var7 = var10.useMemo;
            var5 = new Array(2);
            var5[0] = var15;
            var5[1] = var11;
            var4 = function() {
                var1 = {};
                var3 = _closure2_slot1;
                var1['height'] = var3;
                var2 = _closure2_slot2;
                var1['width'] = var2;
                return var1;
            };
            var14 = var7.bind(var10)(var4, var5);
            var7 = _closure1_slot4;
            var5 = var7.useMemo;
            var4 = new Array(1);
            var4[0] = var9;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var2 = var1 != var2;
                    if(!var2) { _fun0005_ip = 30; continue _fun0005 }
 16:
                    var2 = {};
                    var3 = _closure2_slot0;
                    var2['uri'] = var3;
                    var1 = var2;
 30:
                    return var1;
                }
            };
            var13 = var5.bind(var7)(var1, var4);
            var1 = null;
            if(!(var1 != var13)) { _fun0004_ip = 529; continue _fun0004 }
 141:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 12;
            var4 = var7[var4];
            var7 = undefined;
            var5 = var5.bind(var7)(var4);
            var4 = var5.getObscuredAlt;
            var12 = var4.bind(var5)(var3);
            var4 = var1 != var3;
            var9 = null;
            if(!var4) { _fun0004_ip = 212; continue _fun0004 }
 183:
            var10 = _closure1_slot9;
            var5 = _closure1_slot14;
            var4 = {};
            var4['obscureReason'] = var3;
            var4['height'] = var15;
            var4['width'] = var11;
            var9 = var10.bind(var7)(var5, var4);
 212:
            var10 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = 13;
            var4 = var4[var5];
            var10 = var10.bind(var7)(var4);
            var4 = var10.isAndroid;
            var4 = var4.bind(var10)();
            if(!var4) { _fun0004_ip = 251; continue _fun0004 }
 244:
            if(!(var1 == var3)) { _fun0004_ip = 446; continue _fun0004 }
 251:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var4 = var4.bind(var7)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            var16 = var12;
            if(!var3) { _fun0004_ip = 340; continue _fun0004 }
 283:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 14;
            var4 = var11[var3];
            var4 = var10.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var11[var3];
            var3 = var10.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.jes7FB;
            var16 = var4.bind(var5)(var3);
 340:
            var5 = _closure1_slot11;
            var4 = _closure1_slot7;
            var3 = {};
            var3['style'] = var8;
            var15 = _closure1_slot9;
            var11 = _closure1_slot0;
            var19 = _closure1_slot2;
            var10 = 15;
            var10 = var19[var10];
            var10 = var11.bind(var7)(var10);
            var11 = var10.ImageWithPlaceholder;
            var10 = {};
            var10['style'] = var14;
            var19 = var13.uri;
            var10['uri'] = var19;
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
 446:
            var5 = _closure1_slot11;
            var4 = _closure1_slot7;
            var3 = {};
            var3['style'] = var8;
            var11 = _closure1_slot9;
            var10 = _closure1_slot5;
            var8 = {};
            var8['style'] = var14;
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
 529:
            var3 = var1 != var6;
            var1 = null;
            if(!var3) { _fun0004_ip = 564; continue _fun0004 }
 538:
            var5 = _closure1_slot9;
            var4 = _closure1_slot10;
            var3 = {};
            var2 = undefined;
            var6 = var6.bind(var2)();
            var3['children'] = var6;
            var1 = var5.bind(var2)(var4, var3);
 564:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ImageBackground;
    var _closure1_slot5 = var8;
    var8 = var4.StyleSheet;
    var _closure1_slot6 = var8;
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
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'justifyContent': 'center', 'alignItems': 'center'};
    var4['container'] = var9;
    var9 = {'justifyContent': 'center', 'alignItems': 'center'};
    var4['sound'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/list/SearchMediaImage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function SearchAttachmentMediaImage(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var9 = var1.attachment;
            var _closure2_slot0 = var9;
            var13 = var1.channelId;
            var12 = var1.authorId;
            var3 = var1.scale;
            var6 = var1.imageHeight;
            var5 = var1.imageWidth;
            var11 = var1.containerStyle;
            var7 = var1.renderFallback;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var15 = var9.width;
            var14 = var9.height;
            var10 = _closure1_slot1;
            var16 = _closure1_slot2;
            var8 = 16;
            var8 = var16[var8];
            var16 = var10.bind(var4)(var8);
            var8 = null;
            var10 = var8 != var14;
            if(!var10) { _fun0006_ip = 108; continue _fun0006 }
 104:
            var10 = var8 != var15;
 108:
            var8 = '[SearchMediaImage] Attachment image dimensions should not be null.';
            var8 = var16.bind(var4)(var10, var8);
            var10 = _closure1_slot13;
            var19 = var5 * var3;
            var18 = var6 * var3;
            var22 = undefined;
            var21 = var15;
            var20 = var14;
            var10 = var22[var10](var21, var20, var19, var18, var17);
            var8 = _closure1_slot3;
            var3 = 2;
            var8 = var8.bind(var4)(var10, var3);
            var3 = 0;
            var16 = var8[var3];
            var3 = 1;
            var15 = var8[var3];
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 17;
            var3 = var14[var3];
            var10 = var8.bind(var4)(var3);
            var3 = var10.getAttachmentThumbnailURI;
            var10 = var3.bind(var10)(var9, var16, var15);
            var3 = 18;
            var3 = var14[var3];
            var8 = var8.bind(var4)(var3);
            var3 = var8.useEnabledHarmTypesBitmaskForChannelAndAuthorId;
            var13 = var3.bind(var8)(var13, var12);
            _closure2_slot1 = var13;
            var12 = _closure1_slot4;
            var8 = var12.useMemo;
            var3 = new Array(2);
            var3[0] = var9;
            var3[1] = var13;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getObscureReasonForAttachment;
                var2 = _closure2_slot0;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var8 = var8.bind(var12)(var2, var3);
            var3 = _closure1_slot9;
            var2 = _closure1_slot15;
            var1 = {};
            var1['containerStyle'] = var11;
            var1['uri'] = var10;
            var10 = var9.placeholder;
            var1['placeholder'] = var10;
            var9 = var9.placeholder_version;
            var1['placeholderVersion'] = var9;
            var1['obscureReason'] = var8;
            var1['renderFallback'] = var7;
            var1['imageHeight'] = var6;
            var1['imageWidth'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['SearchAttachmentMediaImage'] = var4;
    var4 = function SearchEmbedMediaImage(arg1) {
        var1 = arg1;
        var13 = var1.embed;
        var _closure2_slot0 = var13;
        var3 = var1.messageId;
        var _closure2_slot1 = var3;
        var15 = var1.channelId;
        var14 = var1.authorId;
        var3 = var1.scale;
        var6 = var1.imageHeight;
        var5 = var1.imageWidth;
        var4 = var1.hasSpoilerEmbeds;
        var _closure2_slot2 = var4;
        var11 = var1.containerStyle;
        var7 = var1.renderFallback;
        var8 = _closure1_slot0;
        var12 = _closure1_slot2;
        var4 = 19;
        var9 = var12[var4];
        var4 = undefined;
        var10 = var8.bind(var4)(var9);
        var9 = var10.getEmbedImage;
        var9 = var9.bind(var10)(var13);
        var13 = _closure1_slot1;
        var10 = 16;
        var10 = var12[var10];
        var16 = var13.bind(var4)(var10);
        var10 = null;
        var13 = var10 != var9;
        var10 = '[SearchMediaImage] Embed image should not be null.';
        var10 = var16.bind(var4)(var13, var10);
        var17 = _closure1_slot13;
        var21 = var9.width;
        var20 = var9.height;
        var19 = var5 * var3;
        var18 = var6 * var3;
        var22 = undefined;
        var13 = var22[var17](var21, var20, var19, var18, var17);
        var10 = _closure1_slot3;
        var3 = 2;
        var10 = var10.bind(var4)(var13, var3);
        var3 = 0;
        var16 = var10[var3];
        var3 = 1;
        var13 = var10[var3];
        var3 = 17;
        var3 = var12[var3];
        var10 = var8.bind(var4)(var3);
        var3 = var10.getEmbedMediaURI;
        var10 = var3.bind(var10)(var9, var16, var13);
        var3 = 18;
        var3 = var12[var3];
        var13 = var8.bind(var4)(var3);
        var3 = var13.useEnabledHarmTypesBitmaskForChannelAndAuthorId;
        var3 = var3.bind(var13)(var15, var14);
        var _closure2_slot3 = var3;
        var3 = 20;
        var3 = var12[var3];
        var12 = var8.bind(var4)(var3);
        var8 = var12.useStateFromStores;
        var13 = _closure1_slot8;
        var3 = new Array(1);
        var3[0] = var13;
        var2 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var5 = _closure1_slot8;
                var4 = var5.getMessage;
                var1 = _closure2_slot1;
                var7 = var4.bind(var5)(var1);
                var1 = null;
                var4 = var1 == var7;
                if(var4) { _fun0007_ip = 84; continue _fun0007 }
 34:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 12;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.getObscureReasonForEmbed;
                var11 = _closure2_slot0;
                var9 = _closure2_slot2;
                var8 = _closure2_slot3;
                var12 = var6;
                var10 = var7;
                var1 = var12[var5](var11, var10, var9, var8, var7);
 84:
                return var1;
            }
        };
        var8 = var8.bind(var12)(var3, var2);
        var3 = _closure1_slot9;
        var2 = _closure1_slot15;
        var1 = {};
        var1['containerStyle'] = var11;
        var1['uri'] = var10;
        var10 = var9.placeholder;
        var1['placeholder'] = var10;
        var9 = var9.placeholderVersion;
        var1['placeholderVersion'] = var9;
        var1['obscureReason'] = var8;
        var1['renderFallback'] = var7;
        var1['imageHeight'] = var6;
        var1['imageWidth'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
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
        var5 = 21;
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
        var5 = 22;
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