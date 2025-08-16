// app/modules/forums/native/posts/ForumPostMedia.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var8;
    var1 = function ForumPostMediaAndroid(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var8 = var2.shouldSpoiler;
            var1 = var2.blurTheme;
            var6 = var2.source;
            var7 = var2.androidStyle;
            var4 = _closure1_slot10;
            var3 = _closure1_slot7;
            var2 = {};
            var2['style'] = var7;
            var2['source'] = var6;
            var6 = 0;
            if(!var8) { _fun0001_ip = 55; continue _fun0001 }
 52:
            var6 = 10;
 55:
            var2['blurRadius'] = var6;
            var6 = 'cover';
            var2['resizeMode'] = var6;
            var7 = _closure1_slot10;
            var6 = _closure1_slot16;
            var5 = {};
            var5['shouldSpoiler'] = var8;
            var5['blurTheme'] = var1;
            var1 = undefined;
            var5 = var7.bind(var1)(var6, var5);
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function ForumPostMediaIOS(arg1) {
        var1 = arg1;
        var10 = var1.shouldSpoiler;
        var9 = var1.blurTheme;
        var11 = var1.source;
        var12 = var1.iosStyle;
        var4 = _closure1_slot12;
        var3 = _closure1_slot11;
        var2 = {};
        var8 = _closure1_slot10;
        var7 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 8;
        var5 = var5[var1];
        var1 = undefined;
        var7 = var7.bind(var1)(var5);
        var5 = {};
        var5['style'] = var12;
        var5['source'] = var11;
        var11 = 'cover';
        var5['resizeMode'] = var11;
        var7 = var8.bind(var1)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot10;
        var7 = _closure1_slot16;
        var6 = {};
        var6['shouldSpoiler'] = var10;
        var6['blurTheme'] = var9;
        var6 = var8.bind(var1)(var7, var6);
        var5[1] = var6;
        var2['children'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var5 = function ForumPostMediaSpoiler(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.shouldSpoiler;
            var9 = var1.blurTheme;
            var1 = _closure1_slot13;
            var5 = undefined;
            var13 = var1.bind(var5)();
            var1 = null;
            if(!var2) { _fun0002_ip = 197; continue _fun0002 }
 36:
            var4 = _closure1_slot12;
            var3 = _closure1_slot11;
            var2 = {};
            var8 = _closure1_slot10;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var6 = 9;
            var6 = var14[var6];
            var7 = var11.bind(var5)(var6);
            var6 = {};
            var6['blurTheme'] = var9;
            var9 = _closure1_slot6;
            var9 = var9.absoluteFill;
            var6['style'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot10;
            var8 = _closure1_slot5;
            var7 = {};
            var12 = var13.spoilerIconContainer;
            var7['style'] = var12;
            var12 = _closure1_slot10;
            var10 = 10;
            var10 = var14[var10];
            var11 = var11.bind(var5)(var10);
            var10 = {'style': null, 'height': 30, 'width': 30};
            var13 = var13.spoilerIcon;
            var10['style'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 197:
            return var1;
        }
    };
    var _closure1_slot16 = var5;
    var1 = function ForumPostMedia(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var1 = _closure1_slot13;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var3 = _closure1_slot4;
            var1 = var3.useRef;
            var2 = null;
            var6 = var1.bind(var3)(var2);
            var _closure2_slot1 = var6;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 11;
            var1 = var4[var1];
            var4 = var3.bind(var5)(var1);
            var3 = var4.useShouldAgeVerifyForReason;
            var1 = var8.obscureReason;
            var1 = var3.bind(var4)(var1);
            var3 = var8.isMediaPost;
            if(var3) { _fun0003_ip = 172; continue _fun0003 }
 88:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 13;
            var3 = var9[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            var12 = _closure1_slot10;
            if(var3) { _fun0003_ip = 148; continue _fun0003 }
 124:
            var4 = _closure1_slot15;
            var3 = {};
            var17 = var3;
            var16 = var8;
            var9 = copyDataProperties(var17, var16);
            var9 = var12.bind(var5)(var4, var3);
            _fun0003_ip = 170; continue _fun0003;
 148:
            var4 = _closure1_slot14;
            var3 = {};
            var17 = var3;
            var16 = var8;
            var13 = copyDataProperties(var17, var16);
            var9 = var12.bind(var5)(var4, var3);
 170:
            _fun0003_ip = 214; continue _fun0003;
 172:
            var12 = _closure1_slot10;
            var4 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 12;
            var3 = var13[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var17 = var3;
            var16 = var8;
            var13 = copyDataProperties(var17, var16);
            var9 = var12.bind(var5)(var4, var3);
 214:
            var3 = var8.obscureReason;
            if(!(var2 != var3)) { _fun0003_ip = 275; continue _fun0003 }
 224:
            var4 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 14;
            var3 = var12[var3];
            var3 = var4.bind(var5)(var3);
            var12 = var3.AGE_VERIFICATION_OBSCURABLE_REASONS;
            var4 = var12.has;
            var3 = var8.obscureReason;
            var3 = var4.bind(var12)(var3);
            if(!var3) { _fun0003_ip = 275; continue _fun0003 }
 269:
            if(var1) { _fun0003_ip = 472; continue _fun0003 }
 275:
            var1 = var8.onPress;
            if(!(var2 == var1)) { _fun0003_ip = 341; continue _fun0003 }
 284:
            var3 = _closure1_slot10;
            var2 = _closure1_slot5;
            var1 = {};
            var12 = var7.mediaContainer;
            var4 = new Array(2);
            var4[0] = var12;
            var12 = var8.containerStyle;
            var4[1] = var12;
            var1['style'] = var4;
            var1['ref'] = var6;
            var1['children'] = var9;
            var1 = var3.bind(var5)(var2, var1);
            _fun0003_ip = 470; continue _fun0003;
 341:
            var4 = _closure1_slot10;
            var3 = _closure1_slot5;
            var2 = {};
            var13 = var7.mediaContainer;
            var12 = new Array(2);
            var12[0] = var13;
            var13 = var8.containerStyle;
            var12[1] = var13;
            var2['style'] = var12;
            var2['ref'] = var6;
            var14 = _closure1_slot10;
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = 15;
            var12 = var15[var12];
            var12 = var13.bind(var5)(var12);
            var13 = var12.PressableOpacity;
            var12 = {};
            var15 = _closure1_slot9;
            var12['androidRippleConfig'] = var15;
            var15 = 0.8;
            var12['activeOpacity'] = var15;
            var15 = function onPress() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = var1.onPress;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0004_ip = 41; continue _fun0004 }
 23:
                    var4 = _closure2_slot0;
                    var3 = var4.onPress;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
 41:
                    return var1;
                }
            };
            var12['onPress'] = var15;
            var12['children'] = var9;
            var12 = var14.bind(var5)(var13, var12);
            var2['children'] = var12;
            var1 = var4.bind(var5)(var3, var2);
 470:
            _fun0003_ip = 593; continue _fun0003;
 472:
            var4 = _closure1_slot10;
            var3 = _closure1_slot5;
            var2 = {};
            var12 = var7.mediaContainer;
            var7 = new Array(2);
            var7[0] = var12;
            var8 = var8.containerStyle;
            var7[1] = var8;
            var2['style'] = var7;
            var2['ref'] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 15;
            var6 = var12[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.PressableOpacity;
            var6 = {};
            var11 = _closure1_slot9;
            var6['androidRippleConfig'] = var11;
            var11 = 0;
            var6['activeOpacity'] = var11;
            var10 = function onPress() {
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 16;
                var3 = var6[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.showAgeVerificationGetStartedModal;
                var5 = _closure1_slot0;
                var2 = 17;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2.AgeVerificationModalEntryPoint;
                var2 = var2.FORUM_POST_MEDIA_PREVIEW;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6['onPress'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 593:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var4 = function useSharedMediaProps(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var8 = var1.channel;
            var9 = var1.media;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 18;
            var1 = var6[var1];
            var4 = undefined;
            var7 = var5.bind(var4)(var1);
            var3 = var7.useShouldObscure;
            var1 = {};
            var1['media'] = var9;
            var1['channel'] = var8;
            var7 = var3.bind(var7)(var1);
            var3 = _closure1_slot3;
            var1 = 2;
            var7 = var3.bind(var4)(var7, var1);
            var1 = {};
            var3 = 0;
            var3 = var7[var3];
            var1['shouldObscure'] = var3;
            var3 = 1;
            var3 = var7[var3];
            var1['obscureReason'] = var3;
            var3 = 19;
            var3 = var6[var3];
            var6 = var5.bind(var4)(var3);
            var5 = var6.isThemeDark;
            var3 = _closure1_slot8;
            var3 = var3.theme;
            var5 = var5.bind(var6)(var3);
            var3 = 'light';
            if(!var5) { _fun0005_ip = 143; continue _fun0005 }
 139:
            var3 = 'dark';
 143:
            var1['blurTheme'] = var3;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 20;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.GifAutoPlay;
            var2 = var3.useSetting;
            var3 = var2.bind(var3)();
            var2 = 'png';
            if(!var3) { _fun0005_ip = 195; continue _fun0005 }
 193:
            var2 = null;
 195:
            var1['format'] = var2;
            return var1;
        }
    };
    var _closure1_slot18 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var14.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var9 = var8[var6];
    var6 = metroImportAll;
    var6 = var6.bind(var1)(var9);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.View;
    var _closure1_slot5 = var9;
    var9 = var6.StyleSheet;
    var _closure1_slot6 = var9;
    var6 = var6.ImageBackground;
    var _closure1_slot7 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ANDROID_FOREGROUND_RIPPLE;
    var _closure1_slot9 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.jsx;
    var _closure1_slot10 = var9;
    var9 = var6.Fragment;
    var _closure1_slot11 = var9;
    var6 = var6.jsxs;
    var _closure1_slot12 = var6;
    var6 = 6;
    var6 = var8[var6];
    var10 = var7.bind(var1)(var6);
    var9 = var10.createStyles;
    var6 = {};
    var11 = {'position': 'relative', 'overflow': 'hidden'};
    var6['mediaContainer'] = var11;
    var11 = {};
    var13 = 7;
    var12 = var8[var13];
    var12 = var14.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var11['borderRadius'] = var12;
    var6['thumbnailBorder'] = var11;
    var11 = {'height': 80, 'width': 80};
    var6['thumbnail'] = var11;
    var12 = 'center';
    var11 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'justifyContent': 'center'};
    var6['spoilerIconContainer'] = var11;
    var11 = {};
    var13 = var8[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.PRIMARY_300;
    var11['color'] = var13;
    var11['alignSelf'] = var12;
    var6['spoilerIcon'] = var11;
    var11 = {'borderRadius': 2, 'overflow': 'hidden'};
    var6['gridMediaContainer'] = var11;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot13 = var6;
    var6 = 23;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/forums/native/posts/ForumPostMedia.tsx';
    var6 = var7.bind(var8)(var6);
    var3['ForumPostMediaSpoiler'] = var5;
    var3['useSharedMediaProps'] = var4;
    var4 = function ForumPostMediaThumbnail(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var6 = var1.channel;
            var17 = var1.isLocalDeviceMedia;
            var _closure2_slot0 = var17;
            var9 = var1.firstMessageId;
            var _closure2_slot1 = var9;
            var16 = var1.media;
            var _closure2_slot2 = var16;
            var13 = var1.isEmbed;
            var15 = var1.embedLeftBorderColor;
            var12 = var1.containerStyle;
            var3 = _closure1_slot13;
            var4 = undefined;
            var11 = var3.bind(var4)();
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 21;
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var3 = {};
            var7 = var6.id;
            var3['threadId'] = var7;
            var3 = var5.bind(var4)(var3);
            var3 = var3.onTapMedia;
            var _closure2_slot3 = var3;
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var5 = new Array(3);
            var5[0] = var9;
            var5[1] = var16;
            var5[2] = var3;
            var3 = function(arg1) {
                var3 = _closure2_slot3;
                var2 = {};
                var4 = _closure2_slot1;
                var2['messageId'] = var4;
                var4 = _closure2_slot2;
                var1 = new Array(1);
                var1[0] = var4;
                var2['mediaItems'] = var1;
                var1 = arg1;
                var2['containerRef'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = var7.bind(var8)(var3, var5);
            var7 = _closure1_slot18;
            var3 = {};
            var3['channel'] = var6;
            var3['media'] = var16;
            var3 = var7.bind(var4)(var3);
            var10 = var3.shouldObscure;
            var9 = var3.obscureReason;
            var8 = var3.blurTheme;
            var18 = var3.format;
            var _closure2_slot4 = var18;
            var14 = _closure1_slot4;
            var7 = var14.useMemo;
            var3 = new Array(6);
            var3[0] = var18;
            var3[1] = var17;
            var17 = var16.height;
            var3[2] = var17;
            var17 = var16.src;
            var3[3] = var17;
            var17 = var16.width;
            var3[4] = var17;
            var16 = var16.srcIsAnimated;
            var3[5] = var16;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot0;
                    var2 = {};
                    if(var1) { _fun0007_ip = 129; continue _fun0007 }
 12:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 22;
                    var4 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.getSrcWithWidthAndHeight;
                    var1 = {};
                    var6 = _closure2_slot2;
                    var7 = var6.src;
                    var1['src'] = var7;
                    var7 = var6.width;
                    var1['sourceWidth'] = var7;
                    var7 = var6.height;
                    var1['sourceHeight'] = var7;
                    var7 = 320;
                    var1['targetWidth'] = var7;
                    var1['targetHeight'] = var7;
                    var7 = _closure2_slot4;
                    var1['format'] = var7;
                    var6 = var6.srcIsAnimated;
                    var1['animated'] = var6;
                    var1 = var4.bind(var5)(var1);
                    var2['uri'] = var1;
                    var1 = var2;
                    _fun0007_ip = 146; continue _fun0007;
 129:
                    var3 = _closure2_slot2;
                    var3 = var3.src;
                    var2['uri'] = var3;
                    var1 = var2;
 146:
                    return var1;
                }
            };
            var7 = var7.bind(var14)(var2, var3);
            var3 = _closure1_slot10;
            var2 = _closure1_slot17;
            var1 = {};
            var14 = var11.thumbnail;
            var1['iosStyle'] = var14;
            var14 = var11.thumbnail;
            var1['androidStyle'] = var14;
            var14 = var11.thumbnailBorder;
            var11 = new Array(3);
            var11[0] = var14;
            if(!var13) { _fun0006_ip = 342; continue _fun0006 }
 324:
            var14 = {};
            var16 = 2;
            var14['borderLeftWidth'] = var16;
            var14['borderLeftColor'] = var15;
            var13 = var14;
 342:
            var11[1] = var13;
            var11[2] = var12;
            var1['containerStyle'] = var11;
            var1['obscureReason'] = var9;
            var9 = null;
            var9 = var9 != var10;
            if(!var9) { _fun0006_ip = 372; continue _fun0006 }
 369:
            var9 = var10;
 372:
            var1['shouldSpoiler'] = var9;
            var1['blurTheme'] = var8;
            var1['source'] = var7;
            var1['onPress'] = var5;
            var5 = var6.isMediaPost;
            var5 = var5.bind(var6)();
            var1['isMediaPost'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ForumPostMediaThumbnail'] = var4;
    var2 = function ForumPostGridMedia(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var5 = var1.channel;
            var6 = var1.media;
            var _closure2_slot0 = var6;
            var12 = var1.targetWidth;
            var _closure2_slot1 = var12;
            var13 = var1.targetHeight;
            var _closure2_slot2 = var13;
            var3 = _closure1_slot13;
            var4 = undefined;
            var10 = var3.bind(var4)();
            var7 = _closure1_slot18;
            var3 = {};
            var3['channel'] = var5;
            var3['media'] = var6;
            var3 = var7.bind(var4)(var3);
            var11 = var3.shouldObscure;
            var9 = var3.obscureReason;
            var8 = var3.blurTheme;
            var15 = var3.format;
            var _closure2_slot3 = var15;
            var3 = var5.isMediaPost;
            var5 = var3.bind(var5)();
            var _closure2_slot4 = var5;
            var14 = _closure1_slot4;
            var7 = var14.useMemo;
            var16 = var6.src;
            var3 = new Array(7);
            var3[0] = var16;
            var16 = var6.width;
            var3[1] = var16;
            var16 = var6.height;
            var3[2] = var16;
            var3[3] = var12;
            var3[4] = var13;
            var3[5] = var15;
            var3[6] = var5;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot4;
                    var2 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 22;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getSrcWithWidthAndHeight;
                    var3 = {};
                    var7 = _closure2_slot0;
                    var8 = var7.src;
                    var3['src'] = var8;
                    var8 = var7.width;
                    var3['sourceWidth'] = var8;
                    var8 = var7.height;
                    var3['sourceHeight'] = var8;
                    if(var1) { _fun0009_ip = 131; continue _fun0009 }
 80:
                    var1 = _closure2_slot1;
                    var8 = 4;
                    var1 = var8 * var1;
                    var3['targetWidth'] = var1;
                    var1 = _closure2_slot2;
                    var1 = var8 * var1;
                    var3['targetHeight'] = var1;
                    var1 = _closure2_slot3;
                    var3['format'] = var1;
                    var1 = var4.bind(var5)(var3);
                    var2['uri'] = var1;
                    var1 = var2;
                    _fun0009_ip = 171; continue _fun0009;
 131:
                    var8 = var7.width;
                    var3['targetWidth'] = var8;
                    var7 = var7.height;
                    var3['targetHeight'] = var7;
                    var6 = _closure2_slot3;
                    var3['format'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var2['uri'] = var3;
                    var1 = var2;
 171:
                    return var1;
                }
            };
            var7 = var7.bind(var14)(var2, var3);
            var3 = _closure1_slot10;
            var2 = _closure1_slot17;
            var1 = {};
            var10 = var10.gridMediaContainer;
            var1['containerStyle'] = var10;
            var10 = {};
            var10['height'] = var13;
            var10['width'] = var12;
            var1['iosStyle'] = var10;
            var10 = {};
            var10['height'] = var13;
            var10['width'] = var12;
            var1['androidStyle'] = var10;
            var10 = null;
            var10 = var10 != var11;
            if(!var10) { _fun0008_ip = 247; continue _fun0008 }
 244:
            var10 = var11;
 247:
            var1['shouldSpoiler'] = var10;
            var1['obscureReason'] = var9;
            var1['blurTheme'] = var8;
            var1['source'] = var7;
            var7 = var6.height;
            var6 = var6.width;
            var6 = var7 >= var6;
            var1['isPortrait'] = var6;
            var1['isMediaPost'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ForumPostGridMedia'] = var2;
    return var1;
})();