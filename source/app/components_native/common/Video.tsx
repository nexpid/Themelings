// app/components_native/common/Video.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var2 = function VideoComponent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var25 = var1.style;
            var24 = var1.source;
            var22 = var1.poster;
            var14 = var1.onLoadStart;
            var13 = var1.onLoad;
            var12 = var1.onError;
            var11 = var1.onEnd;
            var18 = var1.paused;
            var4 = undefined;
            if(!(var18 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var18 = false;
case 6:
            var21 = var1.muted;
            if(!(var21 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var21 = true;
case 8:
            var17 = var1.posterResizeMode;
            if(!(var17 === var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var17 = 'contain';
case 10:
            var16 = var1.resizeMode;
            if(!(var16 === var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var16 = 'contain';
case 12:
            var10 = var1.disableFocus;
            var6 = var1.controls;
            var9 = var1.ariaHidden;
            var8 = var1.mixWithOthers;
            var23 = var1.importantForAccessibility;
            var19 = var1.pauseWhileAppInactive;
            if(!(var19 === var4)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var19 = true;
case 14:
            var _closure2_slot0 = var19;
            var15 = var1.playInBackground;
            if(!(var15 === var4)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var15 = false;
case 16:
            var7 = var1.preventsDisplaySleepDuringVideoPlayback;
            if(!(var7 === var4)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = true;
case 18:
            var5 = var1.httpEngine;
            var _closure2_slot1 = var4;
            var20 = _closure1_slot0;
            var26 = _closure1_slot1;
            var3 = 11;
            var3 = var26[var3];
            var3 = var20.bind(var4)(var3);
            var3 = var3.default;
            var27 = _closure1_slot8;
            var26 = var27.useState;
            var20 = _closure1_slot12;
            var28 = var20.currentState;
            var20 = 'active';
            var20 = var20 === var28;
            var27 = var26.bind(var27)(var20);
            var26 = _closure1_slot7;
            var20 = 2;
            var27 = var26.bind(var4)(var27, var20);
            var20 = 0;
            var20 = var27[var20];
            var26 = 1;
            var26 = var27[var26];
            _closure2_slot1 = var26;
            var28 = _closure1_slot8;
            var27 = var28.useEffect;
            var26 = new Array(1);
            var26[0] = var19;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var2 = undefined;
                    return var2;
case 20:
                    var5 = _closure1_slot12;
                    var4 = var5.addEventListener;
                    var3 = 'change';
                    var2 = function(arg1) {
                        var3 = _closure2_slot1;
                        var1 = undefined;
                        var4 = 'active';
                        var2 = arg1;
                        var2 = var4 === var2;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var2 = _closure3_slot0;
                        var1 = var2.remove;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                }
            };
            var2 = var27.bind(var28)(var2, var26);
            var2 = _closure1_slot13;
            var1 = {};
            var1['style'] = var25;
            var1['source'] = var24;
            var1['importantForAccessibility'] = var23;
            var1['poster'] = var22;
            var1['muted'] = var21;
            if(var18) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            if(!var19) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var19 = !var20;
case 24:
            var18 = var19;
case 22:
            var1['paused'] = var18;
            var1['posterResizeMode'] = var17;
            var1['resizeMode'] = var16;
            var16 = true;
            var1['repeat'] = var16;
            var1['playInBackground'] = var15;
            var15 = false;
            var1['pictureInPicture'] = var15;
            var1['playWhenInactive'] = var15;
            var1['onLoadStart'] = var14;
            var1['onLoad'] = var13;
            var1['onError'] = var12;
            var1['onEnd'] = var11;
            var1['disableFocus'] = var10;
            var1['aria-hidden'] = var9;
            var1['mixWithOthers'] = var8;
            var1['preventsDisplaySleepDuringVideoPlayback'] = var7;
            var1['httpEngine'] = var5;
            var5 = null;
            var7 = var5 == var6;
            var5 = undefined;
            if(var7) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var5 = var6.props;
case 26:
            var31 = var1;
            var30 = var5;
            var5 = copyDataProperties(var31, var30);
            var1 = var2.bind(var4)(var3, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var2;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var14.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var15 = 1;
    var5 = var8[var15];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 6;
    var6 = var8[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var6);
    var _closure1_slot8 = var5;
    var6 = 7;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.TouchableWithoutFeedback;
    var _closure1_slot9 = var9;
    var9 = var6.View;
    var _closure1_slot10 = var9;
    var9 = var6.Image;
    var _closure1_slot11 = var9;
    var6 = var6.AppState;
    var _closure1_slot12 = var6;
    var6 = 8;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.jsx;
    var _closure1_slot13 = var6;
    var6 = 9;
    var6 = var8[var6];
    var11 = var7.bind(var1)(var6);
    var10 = var11.createLegacyClassComponentStyles;
    var9 = {};
    var12 = {'flex': 1, 'shadowColor': null, 'shadowOpacity': 0.5, 'shadowOffset': null, 'shadowRadius': 16};
    var13 = 10;
    var6 = var8[var13];
    var6 = var14.bind(var1)(var6);
    var6 = var6.unsafe_rawColors;
    var6 = var6.BLACK;
    var12['shadowColor'] = var6;
    var6 = {'height': 1, 'width': 0};
    var12['shadowOffset'] = var6;
    var6 = 16;
    var16 = var8[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BRAND;
    var12['backgroundColor'] = var16;
    var9['container'] = var12;
    var12 = {};
    var12['flex'] = var15;
    var13 = var8[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BRAND;
    var12['backgroundColor'] = var13;
    var9['video'] = var12;
    var9 = var10.bind(var11)(var9);
    var _closure1_slot14 = var9;
    var9 = var5.PureComponent;
    var5 = function(arg1) {
        var4 = function Video(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot2;
                var4 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot5;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot4;
                var1 = _closure1_slot15;
                var1 = var1.bind(var5)();
                if(var1) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0004_ip = 30; continue _fun0004;
case 28:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot5;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 30:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = {};
                var5 = true;
                var4['postponeRender'] = var5;
                var1['state'] = var4;
                var4 = _closure1_slot8;
                var3 = var4.createRef;
                var3 = var3.bind(var4)();
                var1['ref'] = var3;
                var3 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var2 = var1.src;
                        var3 = null;
                        var1 = var3 != var2;
                        if(!var1) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                        var4 = 'videoURI';
                        var1 = var4 in var2;
case 31:
                        if(!var1) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                        var2 = var2.videoURI;
                        var1 = var3 != var2;
case 33:
                        return var1;
                    }
                };
                var1['isVideo'] = var3;
                var2 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var5 = var1.src;
                        var4 = var1.onPress;
                        var8 = var1.width;
                        var7 = var1.height;
                        var1 = null;
                        if(!(var1 != var4)) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                        var3 = undefined;
                        var3 = var4.bind(var3)();
case 35:
                        var2 = _closure3_slot0;
                        var2 = var2.ref;
                        var4 = var2.current;
                        if(!(var1 != var4)) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.openMediaModal;
                        var1 = {};
                        var6 = {};
                        var10 = var6;
                        var9 = var5;
                        var5 = copyDataProperties(var10, var9);
                        var5 = 'width';
                        var6[4] = var8;
                        var5 = 'height';
                        var6[4] = var7;
                        var5 = new Array(1);
                        var5[0] = var6;
                        var1['initialSources'] = var5;
                        var1['originViewOrOriginLayout'] = var4;
                        var1 = var2.bind(var3)(var1);
case 37:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleOpenFullScreen'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'componentDidMount';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 13;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.runAfterInteractions;
            var2 = function() {
                var3 = _closure3_slot0;
                var2 = var3.setState;
                var1 = {};
                var4 = false;
                var1['postponeRender'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var3['_renderTask'] = var2;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'componentWillUnmount';
        var5['key'] = var7;
        var7 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = this;
                var3 = var1._renderTask;
                var2 = null;
                if(!(var2 != var3)) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                var2 = var1._renderTask;
                var1 = var2.cancel;
                var1 = var1.bind(var2)();
case 39:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'renderVideo';
        var5['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = this;
                var4 = _closure1_slot14;
                var3 = var1.context;
                var5 = undefined;
                var13 = var4.bind(var5)(var3);
                var3 = var1.props;
                var1 = var3.src;
                var12 = var3.poster;
                var18 = var3.width;
                var17 = var3.height;
                var11 = var3.muted;
                var10 = var3.paused;
                var9 = var3.resizeMode;
                var15 = var3.videoStyle;
                var8 = var3.ariaHidden;
                var7 = var3.disableFocus;
                var6 = var3.httpEngine;
                var3 = 'videoURI';
                var3 = var3 in var1;
                if(!var3) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                var4 = var1.videoURI;
                var3 = '';
                if(!(var3 !== var4)) { _fun0008_ip = 41; continue _fun0008 }
case 43:
                var14 = var1.videoURI;
                var1 = null;
                var3 = var1 != var14;
                var1 = undefined;
                if(!var3) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                var4 = _closure1_slot13;
                var3 = _closure1_slot16;
                var2 = {};
                var16 = var13.video;
                var13 = new Array(3);
                var13[0] = var16;
                var16 = {};
                var16['width'] = var18;
                var16['height'] = var17;
                var13[1] = var16;
                var13[2] = var15;
                var2['style'] = var13;
                var13 = {};
                var13['uri'] = var14;
                var2['source'] = var13;
                var2['poster'] = var12;
                var2['muted'] = var11;
                var2['paused'] = var10;
                var2['resizeMode'] = var9;
                var2['posterResizeMode'] = var9;
                var2['ariaHidden'] = var8;
                var2['disableFocus'] = var7;
                var2['httpEngine'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 44:
                return var1;
case 41:
                var1 = null;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'renderImage';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = this;
                var1 = var1.props;
                var8 = var1.src;
                var7 = var1.width;
                var6 = var1.height;
                var1 = var1.ariaHidden;
                var2 = 'uri';
                var2 = var2 in var8;
                if(!var2) { _fun0009_ip = 46; continue _fun0009 }
case 47:
                var3 = var8.uri;
                var2 = '';
                if(!(var2 === var3)) { _fun0009_ip = 48; continue _fun0009 }
case 46:
                var2 = undefined;
                return var2;
case 48:
                var4 = _closure1_slot13;
                var3 = _closure1_slot11;
                var2 = {};
                var5 = {};
                var8 = var8.uri;
                var5['uri'] = var8;
                var2['source'] = var5;
                var5 = {};
                var5['width'] = var7;
                var5['height'] = var6;
                var2['style'] = var5;
                var2['aria-hidden'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var7 = this;
                var2 = _closure1_slot14;
                var1 = var7.context;
                var5 = undefined;
                var6 = var2.bind(var5)(var1);
                var1 = var7.props;
                var10 = var1.style;
                var14 = var1.width;
                var13 = var1.height;
                var2 = var1.canOpenFullscreen;
                var12 = var1.postponeRender;
                var8 = var1.accessibilityLabel;
                var4 = _closure1_slot13;
                var3 = _closure1_slot10;
                var1 = {};
                var11 = var7.ref;
                var1['ref'] = var11;
                var11 = var6.container;
                var6 = new Array(3);
                var6[0] = var11;
                var11 = {};
                var11['width'] = var14;
                var11['height'] = var13;
                var6[1] = var11;
                var6[2] = var10;
                var1['style'] = var6;
                var10 = null;
                var6 = var10 != var8;
                var1['accessible'] = var6;
                var1['accessibilityLabel'] = var8;
                var6 = var7.state;
                var6 = var6.postponeRender;
                if(!var6) { _fun0010_ip = 37; continue _fun0010 }
case 49:
                var11 = false;
                var6 = null;
                if(!(var11 === var12)) { _fun0010_ip = 50; continue _fun0010 }
case 37:
                var11 = var7.isVideo;
                var11 = var11.bind(var7)();
                if(var11) { _fun0010_ip = 51; continue _fun0010 }
case 52:
                var11 = var7.renderImage;
                var11 = var11.bind(var7)();
                _fun0010_ip = 53; continue _fun0010;
case 51:
                var12 = var7.renderVideo;
                var11 = var12.bind(var7)();
case 53:
                var6 = var11;
case 50:
                var1['children'] = var6;
                var6 = var4.bind(var5)(var3, var1);
                var1 = var6;
                if(!var2) { _fun0010_ip = 54; continue _fun0010 }
case 55:
                var4 = _closure1_slot13;
                var3 = _closure1_slot9;
                var2 = {};
                var11 = 'button';
                var2['accessibilityRole'] = var11;
                if(!(var10 == var8)) { _fun0010_ip = 56; continue _fun0010 }
case 57:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var9 = 14;
                var10 = var13[var9];
                var10 = var12.bind(var5)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var5)(var9);
                var9 = var9.t;
                var9 = var9.OIDkcp;
                var8 = var10.bind(var11)(var9);
case 56:
                var2['accessibilityLabel'] = var8;
                var7 = var7.handleOpenFullScreen;
                var2['onPress'] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 54:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var5 = var5.bind(var1)(var9);
    var9 = 15;
    var9 = var8[var9];
    var9 = var7.bind(var1)(var9);
    var9 = var9.ThemeContext;
    var5['contextType'] = var9;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'components_native/common/Video.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var4 = function createVideoControls(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot8;
        var1 = var2.createRef;
        var4 = var1.bind(var2)();
        var _closure2_slot4 = var4;
        var1 = 0;
        var _closure2_slot5 = var1;
        var _closure2_slot6 = var1;
        var _closure2_slot7 = var1;
        var1 = false;
        var _closure2_slot8 = var1;
        var1 = {};
        var2 = function seek(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = _closure2_slot4;
                var3 = var1.current;
                var4 = null;
                var1 = var4 == var3;
                if(var1) { _fun0011_ip = 39; continue _fun0011 }
case 58:
                var2 = var3.seek;
                var1 = var4 == var2;
case 39:
                if(var1) { _fun0011_ip = 33; continue _fun0011 }
case 59:
                var2 = var3.seek;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
case 33:
                var1 = undefined;
                return var1;
            }
        };
        var1['seek'] = var2;
        var2 = function pause(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = arg1;
                var4 = _closure2_slot0;
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var4 = _closure2_slot8;
                if(!(var4 !== var3)) { _fun0012_ip = 60; continue _fun0012 }
case 61:
                _closure2_slot8 = var3;
                var4 = _closure2_slot2;
                var3 = null;
                if(!(var3 != var4)) { _fun0012_ip = 60; continue _fun0012 }
case 36:
                var3 = _closure2_slot2;
                var2 = _closure2_slot8;
                var2 = var3.bind(var1)(var2);
case 60:
                return var1;
            }
        };
        var1['pause'] = var2;
        var2 = function useSubscribe(arg1, arg2, arg3) {
            var1 = arg1;
            var _closure2_slot1 = var1;
            var1 = arg2;
            var _closure2_slot2 = var1;
            var1 = arg3;
            var _closure2_slot3 = var1;
            var4 = _closure1_slot8;
            var3 = var4.useLayoutEffect;
            var2 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0013_ip = 62; continue _fun0013 }
case 63:
                    var6 = _closure2_slot1;
                    var5 = _closure2_slot5;
                    var4 = _closure2_slot6;
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5, var4);
case 62:
                    var2 = _closure2_slot2;
                    if(!(var3 != var2)) { _fun0013_ip = 64; continue _fun0013 }
case 47:
                    var5 = _closure2_slot2;
                    var4 = _closure2_slot8;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
case 64:
                    var2 = _closure2_slot3;
                    if(!(var3 != var2)) { _fun0013_ip = 65; continue _fun0013 }
case 66:
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot7;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 65:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = new Array(0);
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var1['useSubscribe'] = var2;
        var2 = {};
        var2['ref'] = var4;
        var4 = function onPlaybackRateChange(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = arg1;
                var2 = var1.playbackRate;
                var1 = 0;
                var2 = var1 === var2;
                var3 = _closure2_slot8;
                if(!(var3 !== var2)) { _fun0014_ip = 67; continue _fun0014 }
case 68:
                _closure2_slot8 = var2;
                var3 = _closure2_slot2;
                var2 = null;
                if(!(var2 != var3)) { _fun0014_ip = 67; continue _fun0014 }
case 69:
                var3 = _closure2_slot2;
                var2 = _closure2_slot8;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 67:
                var1 = undefined;
                return var1;
            }
        };
        var2['onPlaybackRateChange'] = var4;
        var4 = function onProgress(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var2 = arg1;
                var3 = var2.currentTime;
                _closure2_slot5 = var3;
                var2 = var2.seekableDuration;
                _closure2_slot6 = var2;
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0015_ip = 64; continue _fun0015 }
case 70:
                var4 = _closure2_slot1;
                var3 = _closure2_slot5;
                var2 = _closure2_slot6;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
case 64:
                var1 = undefined;
                return var1;
            }
        };
        var2['onProgress'] = var4;
        var3 = function onDownloadProgress(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var1 = arg1;
                var2 = var1.progressPercent;
                _closure2_slot7 = var2;
                var3 = _closure2_slot3;
                var2 = null;
                if(!(var2 != var3)) { _fun0016_ip = 47; continue _fun0016 }
case 68:
                var3 = _closure2_slot3;
                var2 = _closure2_slot7;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 47:
                var1 = undefined;
                return var1;
            }
        };
        var2['onDownloadProgress'] = var3;
        var1['props'] = var2;
        return var1;
    };
    var3['createVideoControls'] = var4;
    var3['VideoComponent'] = var2;
    return var1;
})();