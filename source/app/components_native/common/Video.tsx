// app/components_native/common/Video.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var12 = metroImportDefault;
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
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var2);
    var1 = 0;
    var2 = var8[var1];
    var1 = undefined;
    var2 = var12.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var13 = 1;
    var2 = var8[var13];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var8[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var8[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var8[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var5 = var8[var2];
    var2 = metroImportAll;
    var5 = var2.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var2 = 7;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var9 = var2.StyleSheet;
    var6 = var2.TouchableWithoutFeedback;
    var _closure1_slot9 = var6;
    var6 = var2.View;
    var _closure1_slot10 = var6;
    var6 = var2.Image;
    var _closure1_slot11 = var6;
    var2 = var2.AppState;
    var _closure1_slot12 = var2;
    var2 = 8;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot13 = var2;
    var6 = var9.create;
    var2 = {};
    var10 = {'flex': 1, 'shadowColor': null, 'shadowOpacity': 0.5, 'shadowOffset': null, 'shadowRadius': 16};
    var11 = 9;
    var14 = var8[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.BLACK_500;
    var10['shadowColor'] = var14;
    var14 = {'height': 1, 'width': 0};
    var10['shadowOffset'] = var14;
    var14 = var8[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.BRAND_500;
    var10['backgroundColor'] = var14;
    var2['container'] = var10;
    var10 = {};
    var10['flex'] = var13;
    var11 = var8[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.BRAND_500;
    var10['backgroundColor'] = var11;
    var2['video'] = var10;
    var2 = var6.bind(var9)(var2);
    var _closure1_slot14 = var2;
    var2 = function VideoComponent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var23 = var1.style;
            var22 = var1.source;
            var20 = var1.poster;
            var12 = var1.onLoadStart;
            var11 = var1.onLoad;
            var10 = var1.onError;
            var9 = var1.onEnd;
            var16 = var1.paused;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var16 = false;
case 6:
            var19 = var1.muted;
            if(!(var19 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var19 = true;
case 8:
            var15 = var1.posterResizeMode;
            if(!(var15 === var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var15 = 'contain';
case 10:
            var14 = var1.resizeMode;
            if(!(var14 === var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var14 = 'contain';
case 12:
            var8 = var1.disableFocus;
            var6 = var1.controls;
            var7 = var1.ariaHidden;
            var5 = var1.mixWithOthers;
            var21 = var1.importantForAccessibility;
            var17 = var1.pauseWhileAppInactive;
            if(!(var17 === var4)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var17 = true;
case 14:
            var _closure2_slot0 = var17;
            var13 = var1.playInBackground;
            if(!(var13 === var4)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var13 = false;
case 16:
            var _closure2_slot1 = var4;
            var18 = _closure1_slot0;
            var24 = _closure1_slot1;
            var3 = 10;
            var3 = var24[var3];
            var3 = var18.bind(var4)(var3);
            var3 = var3.default;
            var26 = _closure1_slot8;
            var24 = var26.useState;
            var18 = _closure1_slot12;
            var25 = var18.currentState;
            var18 = 'active';
            var18 = var18 === var25;
            var25 = var24.bind(var26)(var18);
            var24 = _closure1_slot7;
            var18 = 2;
            var25 = var24.bind(var4)(var25, var18);
            var18 = 0;
            var18 = var25[var18];
            var24 = 1;
            var24 = var25[var24];
            _closure2_slot1 = var24;
            var25 = var26.useEffect;
            var24 = new Array(1);
            var24[0] = var17;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var2 = undefined;
                    return var2;
case 18:
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
            var2 = var25.bind(var26)(var2, var24);
            var2 = _closure1_slot13;
            var1 = {};
            var1['style'] = var23;
            var1['source'] = var22;
            var1['importantForAccessibility'] = var21;
            var1['poster'] = var20;
            var1['muted'] = var19;
            if(var16) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            if(!var17) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var17 = !var18;
case 22:
            var16 = var17;
case 20:
            var1['paused'] = var16;
            var1['posterResizeMode'] = var15;
            var1['resizeMode'] = var14;
            var14 = true;
            var1['repeat'] = var14;
            var1['playInBackground'] = var13;
            var13 = false;
            var1['pictureInPicture'] = var13;
            var1['playWhenInactive'] = var13;
            var1['onLoadStart'] = var12;
            var1['onLoad'] = var11;
            var1['onError'] = var10;
            var1['onEnd'] = var9;
            var1['disableFocus'] = var8;
            var1['aria-hidden'] = var7;
            var1['mixWithOthers'] = var5;
            var5 = null;
            var8 = var5 == var6;
            var7 = undefined;
            if(var8) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var8 = var6.props;
            var9 = var5 == var8;
            var7 = undefined;
            if(var9) { _fun0002_ip = 24; continue _fun0002 }
case 26:
            var7 = var8.ref;
case 24:
            var1['ref'] = var7;
            var7 = var5 == var6;
            var5 = undefined;
            if(var7) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var5 = var6.props;
case 27:
            var29 = var1;
            var28 = var5;
            var5 = copyDataProperties(var29, var28);
            var1 = var2.bind(var4)(var3, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var2;
    var6 = var5.PureComponent;
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
                var1 = _closure1_slot16;
                var1 = var1.bind(var5)();
                if(var1) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0004_ip = 31; continue _fun0004;
case 29:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot5;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 31:
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
                        if(!var1) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                        var4 = 'videoURI';
                        var1 = var4 in var2;
case 32:
                        if(!var1) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                        var2 = var2.videoURI;
                        var1 = var3 != var2;
case 34:
                        return var1;
                    }
                };
                var1['isVideo'] = var3;
                var2 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var3 = var1.src;
                        var _closure4_slot0 = var3;
                        var3 = var1.onPress;
                        var4 = var1.width;
                        var _closure4_slot1 = var4;
                        var4 = var1.height;
                        var _closure4_slot2 = var4;
                        var4 = var1.muted;
                        var _closure4_slot3 = var4;
                        var1 = var1.unmutedOnFullScreen;
                        var _closure4_slot4 = var1;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0006_ip = 36; continue _fun0006 }
case 30:
                        var1 = undefined;
                        var1 = var3.bind(var1)();
case 36:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 12;
                        var4 = var3[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var4);
                        var4 = 11;
                        var4 = var3[var4];
                        var3 = var3.paths;
                        var4 = var5.bind(var1)(var4, var3);
                        var3 = var4.then;
                        var2 = function(arg1) {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                var1 = arg1;
                                var4 = var1.openMediaModal;
                                var1 = _closure3_slot0;
                                var1 = var1.ref;
                                var3 = var1.current;
                                var1 = null;
                                if(!(var1 != var3)) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                                var2 = {};
                                var6 = {};
                                var8 = _closure4_slot0;
                                var9 = var6;
                                var1 = copyDataProperties(var9, var8);
                                var7 = _closure4_slot1;
                                var1 = 'width';
                                var6[var1] = var7;
                                var7 = _closure4_slot2;
                                var1 = 'height';
                                var6[var1] = var7;
                                var1 = new Array(1);
                                var1[0] = var6;
                                var2['initialSources'] = var1;
                                var1 = _closure4_slot3;
                                if(var1) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                                var5 = _closure4_slot4;
                                var1 = !var5;
case 39:
                                var2['muted'] = var1;
                                var1 = undefined;
                                var1 = var4.bind(var1)(var2, var3);
case 37:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
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
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = this;
                var3 = var1._renderTask;
                var2 = null;
                if(!(var2 != var3)) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                var2 = var1._renderTask;
                var1 = var2.cancel;
                var1 = var1.bind(var2)();
case 41:
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
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = this;
                var2 = var1.props;
                var1 = var2.src;
                var11 = var2.poster;
                var17 = var2.width;
                var16 = var2.height;
                var10 = var2.muted;
                var9 = var2.paused;
                var8 = var2.resizeMode;
                var14 = var2.videoStyle;
                var7 = var2.ariaHidden;
                var6 = var2.disableFocus;
                var2 = 'videoURI';
                var2 = var2 in var1;
                if(!var2) { _fun0009_ip = 43; continue _fun0009 }
case 36:
                var3 = var1.videoURI;
                var2 = '';
                if(!(var2 !== var3)) { _fun0009_ip = 43; continue _fun0009 }
case 40:
                var13 = var1.videoURI;
                var1 = null;
                var2 = var1 != var13;
                var5 = undefined;
                var1 = undefined;
                if(!var2) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                var4 = _closure1_slot13;
                var3 = _closure1_slot15;
                var2 = {};
                var12 = _closure1_slot14;
                var15 = var12.video;
                var12 = new Array(3);
                var12[0] = var15;
                var15 = {};
                var15['width'] = var17;
                var15['height'] = var16;
                var12[1] = var15;
                var12[2] = var14;
                var2['style'] = var12;
                var12 = {};
                var12['uri'] = var13;
                var2['source'] = var12;
                var2['poster'] = var11;
                var2['muted'] = var10;
                var2['paused'] = var9;
                var2['resizeMode'] = var8;
                var2['posterResizeMode'] = var8;
                var2['ariaHidden'] = var7;
                var2['disableFocus'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 44:
                return var1;
case 43:
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
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = this;
                var1 = var1.props;
                var8 = var1.src;
                var7 = var1.width;
                var6 = var1.height;
                var1 = var1.ariaHidden;
                var2 = 'uri';
                var2 = var2 in var8;
                if(!var2) { _fun0010_ip = 46; continue _fun0010 }
case 47:
                var3 = var8.uri;
                var2 = '';
                if(!(var2 === var3)) { _fun0010_ip = 48; continue _fun0010 }
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
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var7 = this;
                var1 = var7.props;
                var6 = var1.style;
                var12 = var1.width;
                var11 = var1.height;
                var2 = var1.canOpenFullscreen;
                var9 = var1.postponeRender;
                var4 = _closure1_slot13;
                var3 = _closure1_slot10;
                var1 = {};
                var5 = var7.ref;
                var1['ref'] = var5;
                var5 = _closure1_slot14;
                var10 = var5.container;
                var5 = new Array(3);
                var5[0] = var10;
                var10 = {};
                var10['width'] = var12;
                var10['height'] = var11;
                var5[1] = var10;
                var5[2] = var6;
                var1['style'] = var5;
                var5 = var7.state;
                var5 = var5.postponeRender;
                if(!var5) { _fun0011_ip = 49; continue _fun0011 }
case 50:
                var6 = false;
                var5 = null;
                if(!(var6 === var9)) { _fun0011_ip = 16; continue _fun0011 }
case 49:
                var6 = var7.isVideo;
                var6 = var6.bind(var7)();
                if(var6) { _fun0011_ip = 51; continue _fun0011 }
case 52:
                var6 = var7.renderImage;
                var6 = var6.bind(var7)();
                _fun0011_ip = 53; continue _fun0011;
case 51:
                var9 = var7.renderVideo;
                var6 = var9.bind(var7)();
case 53:
                var5 = var6;
case 16:
                var1['children'] = var5;
                var5 = undefined;
                var6 = var4.bind(var5)(var3, var1);
                var1 = var6;
                if(!var2) { _fun0011_ip = 54; continue _fun0011 }
case 55:
                var4 = _closure1_slot13;
                var3 = _closure1_slot9;
                var2 = {};
                var9 = 'button';
                var2['accessibilityRole'] = var9;
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var8 = 14;
                var9 = var12[var8];
                var9 = var11.bind(var5)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var5)(var8);
                var8 = var8.t;
                var8 = var8.OIDkcn;
                var8 = var9.bind(var10)(var8);
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
    var5 = var5.bind(var1)(var6);
    var6 = 15;
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
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = _closure2_slot4;
                var3 = var1.current;
                var4 = null;
                var1 = var4 == var3;
                if(var1) { _fun0012_ip = 41; continue _fun0012 }
case 56:
                var2 = var3.seek;
                var1 = var4 == var2;
case 41:
                if(var1) { _fun0012_ip = 34; continue _fun0012 }
case 57:
                var2 = var3.seek;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
case 34:
                var1 = undefined;
                return var1;
            }
        };
        var1['seek'] = var2;
        var2 = function pause(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = arg1;
                var4 = _closure2_slot0;
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var4 = _closure2_slot8;
                if(!(var4 !== var3)) { _fun0013_ip = 58; continue _fun0013 }
case 59:
                _closure2_slot8 = var3;
                var4 = _closure2_slot2;
                var3 = null;
                if(!(var3 != var4)) { _fun0013_ip = 58; continue _fun0013 }
case 60:
                var3 = _closure2_slot2;
                var2 = _closure2_slot8;
                var2 = var3.bind(var1)(var2);
case 58:
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
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0014_ip = 61; continue _fun0014 }
case 62:
                    var6 = _closure2_slot1;
                    var5 = _closure2_slot5;
                    var4 = _closure2_slot6;
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5, var4);
case 61:
                    var2 = _closure2_slot2;
                    if(!(var3 != var2)) { _fun0014_ip = 63; continue _fun0014 }
case 47:
                    var5 = _closure2_slot2;
                    var4 = _closure2_slot8;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
case 63:
                    var2 = _closure2_slot3;
                    if(!(var3 != var2)) { _fun0014_ip = 36; continue _fun0014 }
case 64:
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot7;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 36:
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
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var1 = arg1;
                var2 = var1.playbackRate;
                var1 = 0;
                var2 = var1 === var2;
                var3 = _closure2_slot8;
                if(!(var3 !== var2)) { _fun0015_ip = 65; continue _fun0015 }
case 66:
                _closure2_slot8 = var2;
                var3 = _closure2_slot2;
                var2 = null;
                if(!(var2 != var3)) { _fun0015_ip = 65; continue _fun0015 }
case 67:
                var3 = _closure2_slot2;
                var2 = _closure2_slot8;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 65:
                var1 = undefined;
                return var1;
            }
        };
        var2['onPlaybackRateChange'] = var4;
        var4 = function onProgress(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var2 = arg1;
                var3 = var2.currentTime;
                _closure2_slot5 = var3;
                var2 = var2.seekableDuration;
                _closure2_slot6 = var2;
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0016_ip = 63; continue _fun0016 }
case 68:
                var4 = _closure2_slot1;
                var3 = _closure2_slot5;
                var2 = _closure2_slot6;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
case 63:
                var1 = undefined;
                return var1;
            }
        };
        var2['onProgress'] = var4;
        var3 = function onDownloadProgress(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var1 = arg1;
                var2 = var1.progressPercent;
                _closure2_slot7 = var2;
                var3 = _closure2_slot3;
                var2 = null;
                if(!(var2 != var3)) { _fun0017_ip = 47; continue _fun0017 }
case 66:
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