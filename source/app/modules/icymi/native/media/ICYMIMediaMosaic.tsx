// app/modules/icymi/native/media/ICYMIMediaMosaic.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function isMediaSourceGif(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.isGIFV;
            if(var1) { _fun0001_ip = 73; continue _fun0001 }
 12:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 10;
            var3 = var8[var3];
            var6 = undefined;
            var5 = var7.bind(var6)(var3);
            var4 = var5.urlMatchesFileExtension;
            var3 = var2.sourceURI;
            var2 = 11;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.GIF_RE_IOS;
            var1 = var4.bind(var5)(var3, var2);
 73:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function MediaMosaicVideo(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var6 = var1.source;
            var11 = var1.height;
            var10 = var1.width;
            var8 = var1.autoplay;
            var9 = var1.style;
            var2 = _closure1_slot16;
            var4 = undefined;
            var7 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 12;
            var2 = var12[var2];
            var13 = var3.bind(var4)(var2);
            var5 = var13.useStateFromStores;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot9;
                var1 = var2.videosMuted;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var5.bind(var13)(var3, var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var1 = 13;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var12 = {};
            var13 = var6.videoURI;
            var14 = null;
            if(!(var14 == var13)) { _fun0002_ip = 136; continue _fun0002 }
 130:
            var13 = var6.sourceURI;
 136:
            if(!(var14 == var13)) { _fun0002_ip = 145; continue _fun0002 }
 140:
            var13 = var6.uri;
 145:
            var12['videoURI'] = var13;
            var1['src'] = var12;
            var1['height'] = var11;
            var1['width'] = var10;
            var10 = false;
            var1['postponeRender'] = var10;
            var8 = !var8;
            var1['paused'] = var8;
            var1['muted'] = var5;
            var8 = 'cover';
            var1['resizeMode'] = var8;
            var10 = var7.media;
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var1['style'] = var8;
            var7 = var7.video;
            var1['videoStyle'] = var7;
            if(var5) { _fun0002_ip = 234; continue _fun0002 }
 228:
            var5 = var6.isGIFV;
 234:
            var1['disableFocus'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function MediaMosaicImage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var6 = var1.source;
            var _closure2_slot0 = var6;
            var14 = var1.dimensions;
            var15 = var1.style;
            var11 = var1.isSpoiler;
            var1 = _closure1_slot16;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var1 = false;
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var10 = 0;
            var8 = var2[var10];
            var _closure2_slot1 = var8;
            var1 = 1;
            var1 = var2[var1];
            var _closure2_slot2 = var1;
            var18 = _closure1_slot0;
            var16 = _closure1_slot2;
            var7 = 14;
            var1 = var16[var7];
            var3 = var18.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function u() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.withTiming;
                    var2 = _closure2_slot1;
                    var3 = 1;
                    if(!var2) { _fun0004_ip = 47; continue _fun0004 }
 45:
                    var3 = 0;
 47:
                    var2 = {};
                    var6 = 150;
                    var2['duration'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var17 = 15;
            var17 = var16[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.withTiming;
            var5['withTiming'] = var17;
            var5['imageFinishedLoading'] = var8;
            var1['__closure'] = var5;
            var5 = 7803531897566.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot17;
            var1['__initData'] = var5;
            var20 = var2.bind(var3)(var1);
            var5 = _closure1_slot4;
            var3 = var5.useMemo;
            var1 = var6.height;
            var2 = new Array(3);
            var2[0] = var1;
            var1 = var6.placeholder;
            var2[1] = var1;
            var1 = var6.width;
            var2[2] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = var1.placeholder;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0005_ip = 23; continue _fun0005 }
 19:
                    var1 = undefined;
                    return var1;
 23:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 16;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.createThumbhashImageFromPlaceholder;
                    var2 = _closure2_slot0;
                    var3 = var2.placeholder;
                    var3 = var4.bind(var5)(var3);
                    var1['uri'] = var3;
                    var3 = var2.width;
                    var1['width'] = var3;
                    var2 = var2.height;
                    var1['height'] = var2;
                    return var1;
                }
            };
            var22 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot15;
            var2 = _closure1_slot14;
            var1 = {};
            var18 = _closure1_slot13;
            var8 = _closure1_slot1;
            var5 = var16[var7];
            var5 = var8.bind(var4)(var5);
            var17 = var5.View;
            var5 = {};
            var19 = new Array(2);
            var19[0] = var20;
            var20 = var13.thumbhashMedia;
            var19[1] = var20;
            var5['style'] = var19;
            var21 = _closure1_slot13;
            var19 = 17;
            var19 = var16[var19];
            var20 = var8.bind(var4)(var19);
            var19 = {};
            var19['source'] = var22;
            var22 = new Array(3);
            var22[0] = var15;
            var23 = var13.media;
            var22[1] = var23;
            var22[2] = var14;
            var19['style'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var5['children'] = var19;
            var17 = var18.bind(var4)(var17, var5);
            var5 = new Array(2);
            var5[0] = var17;
            var9 = _closure1_slot13;
            var7 = var16[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Image;
            var7 = {};
            var7['source'] = var6;
            var16 = var13.media;
            var13 = new Array(3);
            var13[0] = var16;
            var13[1] = var15;
            var13[2] = var14;
            var7['style'] = var13;
            var12 = function onLoadEnd() {
                var3 = _closure2_slot2;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var7['onLoadEnd'] = var12;
            if(!var11) { _fun0003_ip = 445; continue _fun0003 }
 442:
            var10 = 100;
 445:
            var7['blurRadius'] = var10;
            var6 = var6.uri;
            var6 = var9.bind(var4)(var8, var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function Media(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var13 = var2.source;
            var12 = var2.dimensions;
            var1 = var2.initialIndex;
            var _closure2_slot0 = var1;
            var9 = var2.handlePressMedia;
            var _closure2_slot1 = var9;
            var11 = var2.style;
            var10 = var2.visible;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var2 = _closure1_slot16;
            var25 = var2.bind(var4)();
            var3 = _closure1_slot4;
            var2 = var3.useRef;
            var8 = null;
            var6 = var2.bind(var3)(var8);
            var _closure2_slot2 = var6;
            var5 = _closure1_slot4;
            var3 = var5.useState;
            var14 = var13.spoiler;
            var2 = var8 != var14;
            if(!var2) { _fun0006_ip = 117; continue _fun0006 }
 114:
            var2 = var14;
 117:
            var5 = var3.bind(var5)(var2);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var5, var2);
            var2 = 0;
            var14 = var3[var2];
            _closure2_slot3 = var14;
            var2 = 1;
            var2 = var3[var2];
            _closure2_slot4 = var2;
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(3);
            var2[0] = var9;
            var2[1] = var1;
            var2[2] = var14;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0007_ip = 42; continue _fun0007 }
 10:
                    var4 = _closure2_slot1;
                    var3 = {};
                    var2 = _closure2_slot2;
                    var3['ref'] = var2;
                    var2 = _closure2_slot0;
                    var3['initialIndex'] = var2;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0007_ip = 55; continue _fun0007;
 42:
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var3.bind(var5)(var1, var2);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var9 = var3[var1];
            var17 = var2.bind(var4)(var9);
            var16 = var17.useStateFromStores;
            var9 = _closure1_slot9;
            var15 = new Array(1);
            var15[0] = var9;
            var9 = function() {
                var2 = _closure1_slot9;
                var1 = var2.videosMuted;
                var1 = var1.bind(var2)();
                return var1;
            };
            var21 = var16.bind(var17)(var15, var9);
            _closure2_slot5 = var21;
            var1 = var3[var1];
            var9 = var2.bind(var4)(var1);
            var3 = var9.useStateFromStores;
            var1 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot7;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var9 = var3.bind(var9)(var2, var1);
            var3 = _closure1_slot15;
            var2 = _closure1_slot5;
            var1 = {};
            var1['ref'] = var6;
            var1['onPress'] = var5;
            var1['style'] = var12;
            var6 = var14;
            if(!var6) { _fun0006_ip = 488; continue _fun0006 }
 318:
            var16 = _closure1_slot13;
            var15 = _closure1_slot6;
            var5 = {};
            var17 = var25.centerContainer;
            var5['style'] = var17;
            var19 = _closure1_slot13;
            var18 = _closure1_slot6;
            var17 = {};
            var20 = var25.spoilerText;
            var17['style'] = var20;
            var24 = _closure1_slot13;
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var20 = 18;
            var20 = var30[var20];
            var20 = var29.bind(var4)(var20);
            var23 = var20.Text;
            var20 = {'maxFontSizeMultiplier': 1, 'variant': 'heading-md/semibold', 'color': 'header-primary'};
            var26 = 19;
            var27 = var30[var26];
            var27 = var29.bind(var4)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var26 = var30[var26];
            var26 = var29.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.F+x38P;
            var27 = var27.bind(var28)(var26);
            var26 = var27.toUpperCase;
            var26 = var26.bind(var27)();
            var20['children'] = var26;
            var20 = var24.bind(var4)(var23, var20);
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var5['children'] = var17;
            var6 = var16.bind(var4)(var15, var5);
 488:
            var5 = new Array(4);
            var5[0] = var6;
            var6 = var13.videoURI;
            var6 = var8 != var6;
            if(!var6) { _fun0006_ip = 512; continue _fun0006 }
 509:
            var6 = !var14;
 512:
            if(!var6) { _fun0006_ip = 527; continue _fun0006 }
 515:
            var15 = _closure1_slot18;
            var15 = var15.bind(var4)(var13);
            var6 = !var15;
 527:
            if(!var6) { _fun0006_ip = 533; continue _fun0006 }
 530:
            var6 = var9;
 533:
            if(!var6) { _fun0006_ip = 676; continue _fun0006 }
 539:
            var16 = _closure1_slot13;
            var15 = _closure1_slot6;
            var9 = {};
            var17 = var25.centerContainer;
            var9['style'] = var17;
            var19 = _closure1_slot13;
            var18 = _closure1_slot6;
            var17 = {};
            var20 = var25.videoIcon;
            var17['style'] = var20;
            var24 = _closure1_slot13;
            var23 = _closure1_slot0;
            var28 = _closure1_slot2;
            var20 = 20;
            var20 = var28[var20];
            var20 = var23.bind(var4)(var20);
            var23 = var20.PlayIcon;
            var20 = {};
            var27 = _closure1_slot1;
            var26 = 9;
            var26 = var28[var26];
            var26 = var27.bind(var4)(var26);
            var26 = var26.colors;
            var26 = var26.REDESIGN_BUTTON_TERTIARY_TEXT;
            var20['color'] = var26;
            var26 = 'lg';
            var20['size'] = var26;
            var20 = var24.bind(var4)(var23, var20);
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var9['children'] = var17;
            var6 = var16.bind(var4)(var15, var9);
 676:
            var5[1] = var6;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var15 = 21;
            var6 = var6[var15];
            var16 = var9.bind(var4)(var6);
            var9 = var16.isVideo;
            var6 = var13.uri;
            var9 = var9.bind(var16)(var6);
            var6 = null;
            if(!var9) { _fun0006_ip = 1025; continue _fun0006 }
 724:
            var9 = _closure1_slot18;
            var9 = var9.bind(var4)(var13);
            var6 = null;
            if(var9) { _fun0006_ip = 1025; continue _fun0006 }
 741:
            var17 = _closure1_slot13;
            var16 = _closure1_slot6;
            var9 = {};
            var18 = var25.absoluteContainer;
            var9['style'] = var18;
            var20 = _closure1_slot13;
            var19 = _closure1_slot0;
            var23 = _closure1_slot2;
            var18 = 22;
            var18 = var23[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.PressableOpacity;
            var18 = {};
            var24 = var25.muteIcon;
            var23 = new Array(2);
            var23[0] = var24;
            if(var21) { _fun0006_ip = 818; continue _fun0006 }
 810:
            var24 = var25.iconBgSelected;
            _fun0006_ip = 824; continue _fun0006;
 818:
            var24 = var25.iconBg;
 824:
            var23[1] = var24;
            var18['style'] = var23;
            var22 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.setVideosMuted;
                var1 = _closure2_slot5;
                var1 = !var1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18['onPress'] = var22;
            var22 = 0.8;
            var18['activeOpacity'] = var22;
            var24 = _closure1_slot13;
            var23 = _closure1_slot0;
            var27 = _closure1_slot2;
            if(var21) { _fun0006_ip = 940; continue _fun0006 }
 873:
            var21 = 25;
            var21 = var27[var21];
            var21 = var23.bind(var4)(var21);
            var22 = var21.VoiceNormalIcon;
            var21 = {};
            var26 = _closure1_slot1;
            var25 = 9;
            var25 = var27[var25];
            var25 = var26.bind(var4)(var25);
            var25 = var25.colors;
            var25 = var25.BLACK;
            var21['color'] = var25;
            var25 = 'sm';
            var21['size'] = var25;
            var21 = var24.bind(var4)(var22, var21);
            _fun0006_ip = 1005; continue _fun0006;
 940:
            var22 = 24;
            var22 = var27[var22];
            var22 = var23.bind(var4)(var22);
            var23 = var22.VoiceXIcon;
            var22 = {};
            var26 = _closure1_slot1;
            var25 = 9;
            var25 = var27[var25];
            var25 = var26.bind(var4)(var25);
            var25 = var25.colors;
            var25 = var25.INTERACTIVE_NORMAL;
            var22['color'] = var25;
            var25 = 'sm';
            var22['size'] = var25;
            var21 = var24.bind(var4)(var23, var22);
 1005:
            var18['children'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var9['children'] = var18;
            var6 = var17.bind(var4)(var16, var9);
 1025:
            var5[2] = var6;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var15];
            var15 = var9.bind(var4)(var6);
            var9 = var15.isVideo;
            var6 = var13.uri;
            var6 = var9.bind(var15)(var6);
            if(var6) { _fun0006_ip = 1077; continue _fun0006 }
 1065:
            var6 = _closure1_slot18;
            var6 = var6.bind(var4)(var13);
            if(!var6) { _fun0006_ip = 1087; continue _fun0006 }
 1077:
            var6 = var13.videoURI;
            if(!(var8 == var6)) { _fun0006_ip = 1123; continue _fun0006 }
 1087:
            var9 = _closure1_slot13;
            var8 = _closure1_slot20;
            var6 = {};
            var6['source'] = var13;
            var6['style'] = var11;
            var6['dimensions'] = var12;
            var6['isSpoiler'] = var14;
            var6 = var9.bind(var4)(var8, var6);
            _fun0006_ip = 1176; continue _fun0006;
 1123:
            var9 = _closure1_slot13;
            var8 = _closure1_slot19;
            var7 = {};
            var7['source'] = var13;
            var13 = var12.height;
            var7['height'] = var13;
            var12 = var12.width;
            var7['width'] = var12;
            var7['style'] = var11;
            var10 = !var10;
            var10 = !var10;
            var7['autoplay'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 1176:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function OneImageRow(arg1) {
        var1 = arg1;
        var8 = var1.source;
        var9 = var1.handlePressMedia;
        var2 = var1.widthOverride;
        var1 = _closure1_slot16;
        var4 = undefined;
        var7 = var1.bind(var4)();
        var1 = _closure1_slot29;
        var10 = var1.bind(var4)(var2);
        var3 = _closure1_slot13;
        var2 = _closure1_slot6;
        var1 = {};
        var11 = var7.imageRow;
        var6 = new Array(2);
        var6[0] = var11;
        var7 = var7.topRow;
        var6[1] = var7;
        var1['style'] = var6;
        var7 = _closure1_slot13;
        var6 = _closure1_slot21;
        var5 = {};
        var5['handlePressMedia'] = var9;
        var9 = 0;
        var5['initialIndex'] = var9;
        var5['source'] = var8;
        var8 = {};
        var8['width'] = var10;
        var9 = 1.5;
        var9 = var10 / var9;
        var8['height'] = var9;
        var5['dimensions'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function ThreeImagesRow(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var7 = var1.sources;
            var10 = var1.start;
            var8 = var1.end;
            var2 = var1.offset;
            var _closure2_slot0 = var2;
            var2 = var1.handlePressMedia;
            var _closure2_slot1 = var2;
            var3 = var1.widthOverride;
            var2 = _closure1_slot16;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var2 = _closure1_slot29;
            var2 = var2.bind(var4)(var3);
            var _closure2_slot2 = var2;
            var3 = _closure1_slot13;
            var2 = _closure1_slot6;
            var1 = {};
            var11 = var9.imageRow;
            var6 = new Array(3);
            var6[0] = var11;
            if(!var10) { _fun0008_ip = 106; continue _fun0008 }
 100:
            var10 = var9.topRow;
 106:
            var6[1] = var10;
            if(!var8) { _fun0008_ip = 119; continue _fun0008 }
 113:
            var8 = var9.bottomRow;
 119:
            var6[2] = var8;
            var1['style'] = var6;
            var6 = var7.map;
            var5 = function(arg1, arg2) {
                var2 = arg2;
                var5 = _closure1_slot13;
                var4 = _closure1_slot21;
                var3 = {};
                var1 = _closure2_slot1;
                var3['handlePressMedia'] = var1;
                var1 = _closure2_slot0;
                var6 = var1 + var2;
                var3['initialIndex'] = var6;
                var6 = arg1;
                var3['source'] = var6;
                var6 = {};
                var9 = _closure2_slot2;
                var7 = 8;
                var10 = var9 - var7;
                var8 = 3;
                var10 = var10 / var8;
                var6['width'] = var10;
                var7 = var9 - var7;
                var7 = var7 / var8;
                var6['height'] = var7;
                var3['dimensions'] = var6;
                var2 = var1 + var2;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function TwoImagesRow(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var7 = var1.sources;
            var2 = var1.handlePressMedia;
            var _closure2_slot0 = var2;
            var8 = var1.end;
            var3 = var1.widthOverride;
            var2 = _closure1_slot16;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var2 = _closure1_slot29;
            var10 = var2.bind(var4)(var3);
            var2 = {};
            var3 = 4;
            var11 = var10 - var3;
            var6 = 2;
            var11 = var11 / var6;
            var2['width'] = var11;
            var3 = var10 - var3;
            var6 = var3 / var6;
            var3 = 0.75;
            var3 = var6 / var3;
            var2['height'] = var3;
            var _closure2_slot1 = var2;
            var3 = _closure1_slot13;
            var2 = _closure1_slot6;
            var1 = {};
            var10 = var9.imageRow;
            var6 = new Array(3);
            var6[0] = var10;
            var10 = var9.topRow;
            var6[1] = var10;
            if(!var8) { _fun0009_ip = 147; continue _fun0009 }
 141:
            var8 = var9.bottomRow;
 147:
            var6[2] = var8;
            var1['style'] = var6;
            var6 = var7.map;
            var5 = function(arg1, arg2) {
                var5 = arg2;
                var4 = _closure1_slot13;
                var3 = _closure1_slot21;
                var2 = {};
                var6 = _closure2_slot0;
                var2['handlePressMedia'] = var6;
                var2['initialIndex'] = var5;
                var6 = arg1;
                var2['source'] = var6;
                var1 = _closure2_slot1;
                var2['dimensions'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function ThreeImages(arg1) {
        var1 = arg1;
        var16 = var1.sources;
        var17 = var1.handlePressMedia;
        var2 = var1.widthOverride;
        var1 = _closure1_slot16;
        var4 = undefined;
        var9 = var1.bind(var4)();
        var1 = _closure1_slot29;
        var15 = var1.bind(var4)(var2);
        var3 = _closure1_slot15;
        var2 = _closure1_slot6;
        var1 = {};
        var6 = var9.imagesContainer;
        var5 = new Array(2);
        var5[0] = var6;
        var6 = var9.imageRow;
        var5[1] = var6;
        var1['style'] = var5;
        var7 = _closure1_slot13;
        var6 = _closure1_slot6;
        var5 = {};
        var8 = var9.leftColumn;
        var5['style'] = var8;
        var11 = _closure1_slot13;
        var12 = _closure1_slot21;
        var8 = {};
        var8['handlePressMedia'] = var17;
        var13 = 0;
        var8['initialIndex'] = var13;
        var13 = var16[var13];
        var8['source'] = var13;
        var18 = {};
        var13 = 2;
        var19 = var13 * var15;
        var14 = 3;
        var20 = var19 / var14;
        var19 = 4;
        var19 = var20 - var19;
        var18['width'] = var19;
        var19 = var13 * var15;
        var19 = var19 / var14;
        var18['height'] = var19;
        var8['dimensions'] = var18;
        var8 = var11.bind(var4)(var12, var8);
        var5['children'] = var8;
        var6 = var7.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var8 = _closure1_slot15;
        var7 = _closure1_slot6;
        var6 = {};
        var9 = var9.rightColumn;
        var6['style'] = var9;
        var11 = _closure1_slot13;
        var9 = {};
        var9['handlePressMedia'] = var17;
        var18 = 1;
        var9['initialIndex'] = var18;
        var18 = var16[var18];
        var9['source'] = var18;
        var18 = {};
        var19 = var15 / var14;
        var18['width'] = var19;
        var19 = var15 / var14;
        var18['height'] = var19;
        var9['dimensions'] = var18;
        var11 = var11.bind(var4)(var12, var9);
        var9 = new Array(2);
        var9[0] = var11;
        var11 = _closure1_slot13;
        var10 = {};
        var10['handlePressMedia'] = var17;
        var10['initialIndex'] = var13;
        var13 = var16[var13];
        var10['source'] = var13;
        var13 = {};
        var16 = var15 / var14;
        var13['width'] = var16;
        var14 = var15 / var14;
        var13['height'] = var14;
        var10['dimensions'] = var13;
        var10 = var11.bind(var4)(var12, var10);
        var9[1] = var10;
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function FourImages(arg1) {
        var1 = arg1;
        var15 = var1.sources;
        var14 = var1.handlePressMedia;
        var2 = var1.widthOverride;
        var1 = _closure1_slot16;
        var4 = undefined;
        var11 = var1.bind(var4)();
        var1 = _closure1_slot29;
        var1 = var1.bind(var4)(var2);
        var13 = {};
        var16 = 2;
        var3 = var1 / var16;
        var2 = 4;
        var3 = var3 - var2;
        var13['width'] = var3;
        var1 = var1 / var16;
        var2 = var1 - var2;
        var1 = 1.5;
        var1 = var2 / var1;
        var13['height'] = var1;
        var3 = _closure1_slot15;
        var2 = _closure1_slot6;
        var1 = {};
        var5 = var11.imagesContainer;
        var1['style'] = var5;
        var7 = _closure1_slot15;
        var6 = _closure1_slot6;
        var5 = {};
        var9 = var11.imageRow;
        var8 = new Array(2);
        var8[0] = var9;
        var9 = var11.topRow;
        var8[1] = var9;
        var5['style'] = var8;
        var9 = _closure1_slot13;
        var12 = _closure1_slot21;
        var8 = {};
        var8['handlePressMedia'] = var14;
        var17 = 0;
        var8['initialIndex'] = var17;
        var17 = var15[var17];
        var8['source'] = var17;
        var8['dimensions'] = var13;
        var9 = var9.bind(var4)(var12, var8);
        var8 = new Array(2);
        var8[0] = var9;
        var17 = _closure1_slot13;
        var9 = {};
        var9['handlePressMedia'] = var14;
        var18 = 1;
        var9['initialIndex'] = var18;
        var18 = var15[var18];
        var9['source'] = var18;
        var9['dimensions'] = var13;
        var9 = var17.bind(var4)(var12, var9);
        var8[1] = var9;
        var5['children'] = var8;
        var6 = var7.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var8 = _closure1_slot15;
        var7 = _closure1_slot6;
        var6 = {};
        var17 = var11.imageRow;
        var9 = new Array(2);
        var9[0] = var17;
        var11 = var11.bottomRow;
        var9[1] = var11;
        var6['style'] = var9;
        var11 = _closure1_slot13;
        var9 = {};
        var9['handlePressMedia'] = var14;
        var9['initialIndex'] = var16;
        var16 = var15[var16];
        var9['source'] = var16;
        var9['dimensions'] = var13;
        var11 = var11.bind(var4)(var12, var9);
        var9 = new Array(2);
        var9[0] = var11;
        var11 = _closure1_slot13;
        var10 = {};
        var10['handlePressMedia'] = var14;
        var14 = 3;
        var10['initialIndex'] = var14;
        var14 = var15[var14];
        var10['source'] = var14;
        var10['dimensions'] = var13;
        var10 = var11.bind(var4)(var12, var10);
        var9[1] = var10;
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function SingleImage(arg1) {
        var2 = arg1;
        var11 = var2.source;
        var _closure2_slot0 = var11;
        var12 = var2.initialIndex;
        var13 = var2.handlePressMedia;
        var8 = var2.visible;
        var3 = var2.widthOverride;
        var2 = _closure1_slot16;
        var4 = undefined;
        var9 = var2.bind(var4)();
        var2 = _closure1_slot29;
        var7 = var2.bind(var4)(var3);
        var _closure2_slot1 = var7;
        var6 = _closure1_slot4;
        var3 = var6.useMemo;
        var10 = var11.width;
        var2 = new Array(3);
        var2[0] = var10;
        var10 = var11.height;
        var2[1] = var10;
        var2[2] = var7;
        var1 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = _closure2_slot0;
                var3 = var2.width;
                var2 = var2.height;
                var3 = var3 / var2;
                var2 = 1;
                if(!(!(var3 >= var2))) { _fun0010_ip = 109; continue _fun0010 }
 28:
                var2 = global;
                var6 = var2.Math;
                var5 = var6.min;
                var2 = _closure2_slot0;
                var4 = var2.height;
                var2 = 330;
                var4 = var5.bind(var6)(var4, var2);
                var5 = var4 * var3;
                var2 = _closure2_slot1;
                if(!(!(var5 > var2))) { _fun0010_ip = 86; continue _fun0010 }
 74:
                var2 = {};
                var2['width'] = var5;
                var2['height'] = var4;
                _fun0010_ip = 107; continue _fun0010;
 86:
                var4 = {};
                var5 = _closure2_slot1;
                var4['width'] = var5;
                var5 = var5 / var3;
                var4['height'] = var5;
                var2 = var4;
 107:
                return var2;
 109:
                var2 = global;
                var5 = var2.Math;
                var4 = var5.min;
                var2 = _closure2_slot0;
                var2 = var2.width;
                var1 = _closure2_slot1;
                var2 = var4.bind(var5)(var2, var1);
                var1 = {};
                var3 = var2 / var3;
                var1['height'] = var3;
                var1['width'] = var2;
                return var1;
            }
        };
        var10 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot13;
        var2 = _closure1_slot6;
        var1 = {};
        var6 = var9.imagesContainer;
        var1['style'] = var6;
        var7 = _closure1_slot13;
        var6 = _closure1_slot21;
        var5 = {};
        var5['handlePressMedia'] = var13;
        var5['initialIndex'] = var12;
        var5['source'] = var11;
        var5['dimensions'] = var10;
        var9 = var9.singleImage;
        var5['style'] = var9;
        var5['visible'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot27 = var1;
    var2 = function GravityAttachmentMediaMosaic(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var9 = var1.sources;
            var _closure2_slot0 = var9;
            var10 = var1.handlePressMedia;
            var _closure2_slot1 = var10;
            var7 = var1.visible;
            var11 = var1.widthOverride;
            var _closure2_slot2 = var11;
            var4 = var9.length;
            var _closure2_slot3 = var4;
            var1 = _closure1_slot16;
            var6 = undefined;
            var13 = var1.bind(var6)();
            var8 = _closure1_slot4;
            var5 = var8.useMemo;
            var2 = new Array(2);
            var2[0] = var4;
            var2[1] = var9;
            var1 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = new Array(0);
                    var2 = _closure2_slot3;
                    var4 = 3;
                    var2 = var2 % var4;
                    var8 = 0;
                    var3 = var4;
                    if(!(var8 !== var2)) { _fun0012_ip = 30; continue _fun0012 }
 27:
                    var3 = var2;
 30:
                    var6 = var1.push;
                    var7 = _closure2_slot0;
                    var2 = var7.slice;
                    var2 = var2.bind(var7)(var8, var3);
                    var2 = var6.bind(var1)(var2);
                    var2 = _closure2_slot3;
                    if(!(var3 < var2)) { _fun0012_ip = 103; continue _fun0012 }
 63:
                    var7 = var1.push;
                    var8 = _closure2_slot0;
                    var2 = var8.slice;
                    var6 = var3 + var4;
                    var2 = var2.bind(var8)(var3, var6);
                    var2 = var7.bind(var1)(var2);
                    var2 = _closure2_slot3;
                    var3 = var6;
                    if(var3 < var2) { _fun0012_ip = 63; continue _fun0012 }
 103:
                    return var1;
                }
            };
            var14 = var5.bind(var8)(var1, var2);
            var _closure2_slot4 = var14;
            var8 = 0;
            var1 = null;
            if(!(var8 !== var4)) { _fun0011_ip = 298; continue _fun0011 }
 112:
            var2 = 1;
            if(!(var2 !== var4)) { _fun0011_ip = 251; continue _fun0011 }
 122:
            var2 = 3;
            if(!(var2 !== var4)) { _fun0011_ip = 218; continue _fun0011 }
 129:
            var2 = 4;
            if(!(var2 !== var4)) { _fun0011_ip = 185; continue _fun0011 }
 136:
            var5 = _closure1_slot13;
            var4 = _closure1_slot6;
            var2 = {};
            var13 = var13.imagesContainer;
            var2['style'] = var13;
            var13 = var14.map;
            var12 = function(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var6 = arg1;
                    var5 = arg2;
                    var1 = var6.length;
                    var7 = 1;
                    if(!(var7 !== var1)) { _fun0013_ip = 229; continue _fun0013 }
 21:
                    var2 = var6.length;
                    var1 = 2;
                    if(!(var1 !== var2)) { _fun0013_ip = 158; continue _fun0013 }
 36:
                    var2 = 0;
                    var8 = var2 === var5;
                    var9 = 0;
                    if(var8) { _fun0013_ip = 78; continue _fun0013 }
 47:
                    var1 = _closure2_slot4;
                    var1 = var1[var2];
                    var2 = var1.length;
                    var3 = var5 - var7;
                    var1 = 3;
                    var1 = var1 * var3;
                    var9 = var2 + var1;
 78:
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot23;
                    var2 = {};
                    var10 = _closure2_slot2;
                    var2['widthOverride'] = var10;
                    var10 = _closure2_slot1;
                    var2['handlePressMedia'] = var10;
                    var2['offset'] = var9;
                    var2['sources'] = var6;
                    var2['start'] = var8;
                    var1 = _closure2_slot4;
                    var1 = var1.length;
                    var1 = var1 - var7;
                    var1 = var5 === var1;
                    var2['end'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2, var5);
                    return var1;
 158:
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot24;
                    var2 = {};
                    var8 = _closure2_slot2;
                    var2['widthOverride'] = var8;
                    var2['sources'] = var6;
                    var8 = _closure2_slot1;
                    var2['handlePressMedia'] = var8;
                    var1 = _closure2_slot4;
                    var1 = var1.length;
                    var1 = var1 - var7;
                    var1 = var5 === var1;
                    var2['end'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2, var5);
                    return var1;
 229:
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot22;
                    var2 = {};
                    var1 = _closure2_slot1;
                    var2['handlePressMedia'] = var1;
                    var1 = 0;
                    var1 = var6[var1];
                    var2['source'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2, var5);
                    return var1;
                }
            };
            var12 = var13.bind(var14)(var12);
            var2['children'] = var12;
            var2 = var5.bind(var6)(var4, var2);
            _fun0011_ip = 216; continue _fun0011;
 185:
            var12 = _closure1_slot13;
            var5 = _closure1_slot26;
            var4 = {};
            var4['widthOverride'] = var11;
            var4['handlePressMedia'] = var10;
            var4['sources'] = var9;
            var2 = var12.bind(var6)(var5, var4);
 216:
            _fun0011_ip = 249; continue _fun0011;
 218:
            var12 = _closure1_slot13;
            var5 = _closure1_slot25;
            var4 = {};
            var4['widthOverride'] = var11;
            var4['handlePressMedia'] = var10;
            var4['sources'] = var9;
            var2 = var12.bind(var6)(var5, var4);
 249:
            _fun0011_ip = 295; continue _fun0011;
 251:
            var5 = _closure1_slot13;
            var4 = _closure1_slot27;
            var3 = {};
            var3['widthOverride'] = var11;
            var3['initialIndex'] = var8;
            var3['handlePressMedia'] = var10;
            var8 = var9[var8];
            var3['source'] = var8;
            var3['visible'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 295:
            var1 = var2;
 298:
            return var1;
        }
    };
    var _closure1_slot28 = var2;
    var1 = function useMaxWidth(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var5 = _closure1_slot4;
            var3 = var5.useContext;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 26;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var6.bind(var4)(var2);
            var2 = var2.ICYMIContext;
            var2 = var3.bind(var5)(var2);
            var3 = null;
            if(!(var3 == var1)) { _fun0014_ip = 96; continue _fun0014 }
 55:
            var3 = var3 == var2;
            var4 = undefined;
            if(var3) { _fun0014_ip = 69; continue _fun0014 }
 64:
            var4 = var2.width;
 69:
            var3 = var2.inset;
            var3 = var4 - var3;
            var4 = var2.margin;
            var2 = 2;
            var2 = var2 * var4;
            var1 = var3 - var2;
 96:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.Pressable;
    var _closure1_slot5 = var9;
    var5 = var5.View;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.AnalyticsObjectTypes;
    var _closure1_slot10 = var8;
    var8 = var5.AnalyticsObjects;
    var _closure1_slot11 = var8;
    var5 = var5.AnalyticsPages;
    var _closure1_slot12 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot13 = var8;
    var8 = var5.Fragment;
    var _closure1_slot14 = var8;
    var5 = var5.jsxs;
    var _closure1_slot15 = var5;
    var5 = 8;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = function() {
        var1 = {};
        var2 = {};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 9;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.xs;
        var2['borderRadius'] = var7;
        var1['media'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BG_SURFACE_RAISED;
        var2['backgroundColor'] = var7;
        var1['video'] = var2;
        var2 = {'position': 'absolute', 'top': 0, 'left': 0, 'zIndex': 1};
        var1['thumbhashMedia'] = var2;
        var2 = {};
        var7 = 4;
        var2['gap'] = var7;
        var1['container'] = var2;
        var2 = {'justifyContent': 'center', 'gap': 4, 'width': '100%'};
        var1['imagesContainer'] = var2;
        var2 = {'flexDirection': 'row', 'gap': 4};
        var1['imageRow'] = var2;
        var2 = {};
        var7 = 'hidden';
        var2['overflow'] = var7;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.lg;
        var2['borderTopEndRadius'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.lg;
        var2['borderTopStartRadius'] = var8;
        var1['topRow'] = var2;
        var2 = {};
        var2['overflow'] = var7;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.lg;
        var2['borderBottomEndRadius'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.lg;
        var2['borderBottomStartRadius'] = var8;
        var1['bottomRow'] = var2;
        var2 = {};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.BACKGROUND_MOBILE_SECONDARY;
        var2['backgroundColor'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.round;
        var2['borderRadius'] = var8;
        var8 = 16;
        var2['padding'] = var8;
        var1['videoIcon'] = var2;
        var2 = {'position': 'absolute', 'borderRadius': null, 'padding': null, 'bottom': 8, 'right': 8};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.round;
        var2['borderRadius'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_4;
        var2['padding'] = var8;
        var1['muteIcon'] = var2;
        var2 = {};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.INTERACTIVE_ACTIVE;
        var2['backgroundColor'] = var8;
        var1['muteIconActive'] = var2;
        var2 = {};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.SPOILER_HIDDEN_BACKGROUND;
        var2['backgroundColor'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.lg;
        var2['borderRadius'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_12;
        var2['paddingHorizontal'] = var8;
        var8 = 6;
        var2['paddingVertical'] = var8;
        var1['spoilerText'] = var2;
        var2 = {};
        var2['overflow'] = var7;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.lg;
        var2['borderTopStartRadius'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.lg;
        var2['borderBottomStartRadius'] = var8;
        var1['leftColumn'] = var2;
        var2 = {};
        var2['overflow'] = var7;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.lg;
        var2['borderTopEndRadius'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.lg;
        var2['borderBottomEndRadius'] = var8;
        var8 = 2;
        var2['gap'] = var8;
        var1['rightColumn'] = var2;
        var2 = {};
        var2['overflow'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.lg;
        var2['borderRadius'] = var7;
        var1['singleImage'] = var2;
        var2 = {'position': 'absolute', 'width': '100%', 'height': '100%', 'alignItems': 'center', 'justifyContent': 'center', 'zIndex': 2};
        var1['centerContainer'] = var2;
        var2 = {'position': 'absolute', 'width': '100%', 'height': '100%', 'zIndex': 2};
        var1['absoluteContainer'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BG_BASE_SECONDARY;
        var2['backgroundColor'] = var7;
        var1['iconBg'] = var2;
        var2 = {};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.colors;
        var3 = var3.WHITE;
        var2['backgroundColor'] = var3;
        var1['iconBgSelected'] = var2;
        return var1;
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot16 = var5;
    var5 = {};
    var8 = 'function ICYMIMediaMosaicTsx1(){const{withTiming,imageFinishedLoading}=this.__closure;return{opacity:withTiming(imageFinishedLoading?0:1,{duration:150})};}';
    var5['code'] = var8;
    var _closure1_slot17 = var5;
    var5 = 35;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/icymi/native/media/ICYMIMediaMosaic.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function ICYMIMediaMosaic(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var2 = var1.message;
            var _closure2_slot0 = var2;
            var16 = var1.widthOverride;
            var _closure2_slot1 = var16;
            var13 = var1.visible;
            var _closure2_slot2 = var13;
            var6 = undefined;
            var _closure2_slot6 = var6;
            var1 = _closure1_slot16;
            var10 = var1.bind(var6)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 12;
            var1 = var4[var1];
            var5 = var3.bind(var6)(var1);
            var4 = var5.useStateFromStores;
            var1 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getChannel;
                var4 = _closure2_slot0;
                var1 = var4.getChannelId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var4.bind(var5)(var3, var1);
            var _closure2_slot3 = var12;
            var5 = _closure1_slot4;
            var4 = var5.useMemo;
            var3 = new Array(1);
            var3[0] = var2;
            var1 = function() {
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 27;
                var3 = var7[var3];
                var5 = undefined;
                var9 = var6.bind(var5)(var3);
                var8 = var9.extractMediaSourcesFromMessage;
                var4 = _closure2_slot0;
                var3 = 28;
                var3 = var7[var3];
                var3 = var6.bind(var5)(var3);
                var10 = var3.GRAVITY_VALID_EMBED_TYPES;
                var14 = var9;
                var13 = var4;
                var12 = var4;
                var11 = undefined;
                var8 = var14[var8](var13, var12, var11, var10, var9);
                var4 = var8.map;
                var3 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.flattenSource;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var8 = var4.bind(var8)(var3);
                var4 = var8.filter;
                var3 = 29;
                var3 = var7[var3];
                var3 = var6.bind(var5)(var3);
                var3 = var3.isNotNullish;
                var3 = var4.bind(var8)(var3);
                var4 = 30;
                var4 = var7[var4];
                var6 = var6.bind(var5)(var4);
                var4 = var6.partition;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.accessoryType;
                    var1 = 'embed';
                    var1 = var1 === var2;
                    return var1;
                };
                var4 = var4.bind(var6)(var3, var2);
                var2 = _closure1_slot3;
                var1 = 2;
                var4 = var2.bind(var5)(var4, var1);
                var1 = 0;
                var2 = var4[var1];
                var1 = {};
                var1['allMediaSources'] = var3;
                var3 = 1;
                var3 = var4[var3];
                var1['nonEmbedSources'] = var3;
                var1['embedSources'] = var2;
                return var1;
            };
            var3 = var4.bind(var5)(var1, var3);
            var1 = var3.allMediaSources;
            var _closure2_slot4 = var1;
            var15 = var3.nonEmbedSources;
            var _closure2_slot5 = var15;
            var11 = var3.embedSources;
            var5 = _closure1_slot4;
            var4 = var5.useCallback;
            var8 = var2.channel_id;
            var3 = new Array(6);
            var3[0] = var8;
            var8 = var2.id;
            var3[1] = var8;
            var3[2] = var1;
            var8 = null;
            var14 = var8 == var12;
            var1 = undefined;
            if(var14) { _fun0015_ip = 212; continue _fun0015 }
 207:
            var1 = var12.guild_id;
 212:
            var3[3] = var1;
            var14 = var8 == var12;
            var1 = undefined;
            if(var14) { _fun0015_ip = 230; continue _fun0015 }
 225:
            var1 = var12.type;
 230:
            var3[4] = var1;
            var14 = var8 == var12;
            var1 = undefined;
            if(var14) { _fun0015_ip = 248; continue _fun0015 }
 243:
            var1 = var12.name;
 248:
            var3[5] = var1;
            var1 = function(arg1) {
                var1 = arg1;
                var3 = var1.ref;
                var _closure3_slot0 = var3;
                var1 = var1.initialIndex;
                var _closure3_slot1 = var1;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 31;
                var4 = var3[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var9 = var4.ICYMIAnalytics;
                var8 = var9.trackItemInteraction;
                var4 = _closure2_slot0;
                var7 = var4.id;
                var6 = 'message';
                var4 = 'press_media';
                var4 = var8.bind(var9)(var7, var6, var4);
                var4 = 33;
                var4 = var3[var4];
                var5 = var5.bind(var1)(var4);
                var4 = 32;
                var4 = var3[var4];
                var3 = var3.paths;
                var4 = var5.bind(var1)(var4, var3);
                var3 = var4.then;
                var2 = function(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.openMediaModal;
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 34;
                        var2 = var2[var1];
                        var1 = undefined;
                        var10 = var6.bind(var1)(var2);
                        var9 = var10.ack;
                        var2 = _closure2_slot0;
                        var16 = var2.channel_id;
                        var6 = {};
                        var11 = _closure1_slot12;
                        var11 = var11.ICYMI;
                        var6['page'] = var11;
                        var11 = _closure1_slot11;
                        var11 = var11.ACK_MEDIA_VIEWED;
                        var6['object'] = var11;
                        var5 = _closure1_slot10;
                        var5 = var5.ACK_SEMI_AUTOMATIC;
                        var6['objectType'] = var5;
                        var12 = var2.id;
                        var17 = var10;
                        var15 = var6;
                        var14 = true;
                        var13 = true;
                        var2 = var17[var9](var16, var15, var14, var13, var12, var11);
                        var2 = new Array(0);
                        var _closure4_slot0 = var2;
                        var6 = _closure2_slot4;
                        var5 = var6.forEach;
                        var3 = function(arg1) {
                            var4 = _closure4_slot0;
                            var3 = var4.push;
                            var2 = {};
                            var6 = arg1;
                            var7 = var2;
                            var1 = copyDataProperties(var7, var6);
                            var1 = undefined;
                            var5 = 'embedURI';
                            var2[var5] = var1;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var3 = var5.bind(var6)(var3);
                        var3 = {};
                        var5 = false;
                        var3['disableDownload'] = var5;
                        var3['initialSources'] = var2;
                        var2 = _closure3_slot1;
                        var3['initialIndex'] = var2;
                        var2 = 'Channel';
                        var3['analyticsSource'] = var2;
                        var6 = _closure2_slot3;
                        var2 = null;
                        var8 = var2 == var6;
                        var6 = undefined;
                        if(var8) { _fun0016_ip = 208; continue _fun0016 }
 199:
                        var8 = _closure2_slot3;
                        var6 = var8.guild_id;
 208:
                        var3['guildId'] = var6;
                        var6 = _closure2_slot0;
                        var6 = var6.channel_id;
                        var3['channelId'] = var6;
                        var6 = _closure2_slot3;
                        var8 = var2 == var6;
                        var6 = undefined;
                        if(var8) { _fun0016_ip = 247; continue _fun0016 }
 238:
                        var8 = _closure2_slot3;
                        var6 = var8.type;
 247:
                        var3['channelType'] = var6;
                        var6 = _closure2_slot3;
                        var8 = var2 == var6;
                        var6 = undefined;
                        if(var8) { _fun0016_ip = 274; continue _fun0016 }
 265:
                        var7 = _closure2_slot3;
                        var6 = var7.name;
 274:
                        var3['contextName'] = var6;
                        var3['contextIcon'] = var1;
                        var5 = _closure3_slot0;
                        var5 = var5.current;
                        var6 = var2 != var5;
                        var2 = undefined;
                        if(!var6) { _fun0016_ip = 305; continue _fun0016 }
 302:
                        var2 = var5;
 305:
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var14 = var4.bind(var5)(var1, var3);
            _closure2_slot6 = var14;
            var1 = var15.length;
            var4 = 0;
            if(!(var4 === var1)) { _fun0015_ip = 294; continue _fun0015 }
 280:
            var3 = var11.length;
            var1 = null;
            if(!(var4 !== var3)) { _fun0015_ip = 427; continue _fun0015 }
 294:
            var5 = _closure1_slot15;
            var4 = _closure1_slot6;
            var3 = {};
            var10 = var10.container;
            var3['style'] = var10;
            var12 = _closure1_slot13;
            var10 = _closure1_slot28;
            var7 = {};
            var7['widthOverride'] = var16;
            var7['sources'] = var15;
            var7['handlePressMedia'] = var14;
            var7['visible'] = var13;
            var10 = var12.bind(var6)(var10, var7);
            var7 = new Array(2);
            var7[0] = var10;
            var10 = var8 == var11;
            var8 = undefined;
            if(var10) { _fun0015_ip = 383; continue _fun0015 }
 366:
            var10 = var11.map;
            var9 = function(arg1, arg2) {
                var6 = arg2;
                var5 = _closure1_slot13;
                var4 = _closure1_slot27;
                var3 = {};
                var2 = _closure2_slot1;
                var3['widthOverride'] = var2;
                var2 = _closure2_slot6;
                var3['handlePressMedia'] = var2;
                var2 = _closure2_slot5;
                var2 = var2.length;
                var2 = var6 + var2;
                var3['initialIndex'] = var2;
                var2 = arg1;
                var3['source'] = var2;
                var1 = _closure2_slot2;
                var3['visible'] = var1;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'gif-';
                var2 = var2.bind(var1)(var6);
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var8 = var10.bind(var11)(var9);
 383:
            var7[1] = var8;
            var3['children'] = var7;
            var8 = var2.id;
            var2 = global;
            var2 = var2.HermesInternal;
            var7 = var2.concat;
            var2 = 'message-image-';
            var2 = var7.bind(var2)(var8);
            var1 = var5.bind(var6)(var4, var3, var2);
 427:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['GravityAttachmentMediaMosaic'] = var2;
    return var1;
})();