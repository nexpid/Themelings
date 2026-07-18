// app/modules/age_assurance/native/AgeVerificationWebViewScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AGE_VERIFICATION_MODAL_KEY;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AgeVerificationIncodeResultStatus;
    var _closure1_slot7 = var7;
    var7 = var4.buildIncodeFallbackSessionInjection;
    var _closure1_slot8 = var7;
    var4 = var4.parseIncodeWebViewMessage;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var11.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var16 = 'AgeVerificationWebViewScreen';
    var17 = var7;
    var4 = new var17[var8](var16, var15);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var12;
    var10 = 8;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var9['backgroundColor'] = var13;
    var4['container'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'alignItems': 'center', 'justifyContent': 'center'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var9['backgroundColor'] = var13;
    var4['loadingOverlay'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWEST;
    var9['backgroundColor'] = var10;
    var4['webView'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_assurance/native/AgeVerificationWebViewScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AgeVerificationWebViewScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var16 = var3.webviewUrl;
            var _closure2_slot0 = var16;
            var2 = var3.onComplete;
            var _closure2_slot1 = var2;
            var1 = var3.onClose;
            var _closure2_slot2 = var1;
            var9 = var3.injectedJavaScriptBeforeContentLoaded;
            var5 = _closure1_slot4;
            var4 = var5.useRef;
            var3 = null;
            var15 = var4.bind(var5)(var3);
            var _closure2_slot3 = var15;
            var3 = var5.useRef;
            var4 = false;
            var3 = var3.bind(var5)(var4);
            var _closure2_slot4 = var3;
            var3 = var5.useRef;
            var3 = var3.bind(var5)(var4);
            var _closure2_slot5 = var3;
            var4 = var5.useState;
            var3 = true;
            var7 = var4.bind(var5)(var3);
            var6 = _closure1_slot3;
            var4 = undefined;
            var3 = 2;
            var7 = var6.bind(var4)(var7, var3);
            var3 = 0;
            var6 = var7[var3];
            var3 = 1;
            var3 = var7[var3];
            var _closure2_slot6 = var3;
            var8 = var5.useCallback;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var2 = var2.current;
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot5;
                    var2 = true;
                    var3['current'] = var2;
                    var3 = _closure2_slot6;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = new Array(0);
            var3 = var8.bind(var5)(var7, var3);
            var _closure2_slot7 = var3;
            var8 = var5.useEffect;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var2 = global;
                var5 = var2.setTimeout;
                var4 = undefined;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure2_slot5;
                        var2 = var2.current;
                        if(var2) { _fun0003_ip = 4; continue _fun0003 }
case 3:
                        var5 = _closure1_slot12;
                        var4 = var5.warn;
                        var3 = {};
                        var2 = 15000;
                        var3['timeoutMs'] = var2;
                        var2 = 'WebView initial load timed out';
                        var2 = var4.bind(var5)(var2, var3);
case 4:
                        var2 = _closure2_slot7;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    }
                };
                var2 = 15000;
                var2 = var5.bind(var4)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var3 = var8.bind(var5)(var3, var7);
            var7 = var5.useCallback;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var1;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var2 = var2.current;
                    if(var2) { _fun0004_ip = 5; continue _fun0004 }
case 3:
                    var3 = _closure2_slot4;
                    var2 = true;
                    var3['current'] = var2;
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var3 = var3.bind(var2)();
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var2)();
case 5:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var7.bind(var5)(var2, var3);
            var _closure2_slot8 = var8;
            var7 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var8;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.isModalOpen;
                    var2 = _closure1_slot6;
                    var2 = var4.bind(var5)(var2);
                    if(!var2) { _fun0005_ip = 6; continue _fun0005 }
case 7:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 10;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isAgeVerified;
                    var2 = var3.bind(var4)();
case 6:
                    if(!var2) { _fun0005_ip = 8; continue _fun0005 }
case 9:
                    var2 = _closure2_slot8;
                    var2 = var2.bind(var1)();
case 8:
                    return var1;
                }
            };
            var7 = var7.bind(var5)(var2, var3);
            var3 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 10;
            var2 = var17[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useWatchAgeVerificationStatusChange;
            var2 = var2.bind(var3)(var7);
            var7 = var5.useCallback;
            var3 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0006_ip = 10; continue _fun0006 }
case 11:
                    var2 = var3.injectJavaScript;
                    var5 = _closure1_slot8;
                    var4 = undefined;
                    var1 = arg1;
                    var1 = var5.bind(var4)(var1);
                    var1 = var2.bind(var3)(var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = new Array(0);
            var7 = var7.bind(var5)(var3, var2);
            var _closure2_slot9 = var7;
            var3 = var5.useCallback;
            var2 = new Array(3);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var1;
            var1 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = arg1;
                    var1 = undefined;
                    var3 = undefined;
case 12: // try_start_0
                    var6 = _closure1_slot9;
                    var5 = var5.nativeEvent;
                    var5 = var5.data;
                    var6 = var6.bind(var1)(var5);
                    var3 = var6;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0007_ip = 13; continue _fun0007 }
case 14:
                    var5 = var3;
                    var6 = var5.kind;
                    var5 = 'capture_complete';
                    if(!(var5 !== var6)) { _fun0007_ip = 15; continue _fun0007 }
case 16:
                    var5 = var3;
                    var6 = var5.kind;
                    var5 = 'fallback_request';
                    if(!(var5 !== var6)) { _fun0007_ip = 17; continue _fun0007 }
case 18:
                    var5 = var3;
                    var6 = var5.status;
                    var5 = _closure1_slot7;
                    var5 = var5.COMPLETED;
                    if(!(var6 !== var5)) { _fun0007_ip = 19; continue _fun0007 }
case 20:
                    var6 = _closure2_slot4;
                    var6 = var6.current;
                    if(var6) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                    var7 = _closure2_slot4;
                    var6 = true;
                    var7['current'] = var6;
                    var5 = _closure2_slot2;
                    var5 = var5.bind(var1)();
case 21: // try_end0
                    _fun0007_ip = 23; continue _fun0007;
case 19: // try_start_1
                    var5 = _closure2_slot8;
                    var5 = var5.bind(var1)();
case 24: // try_end1
                    var5 = undefined;
                    return var5;
case 17: // try_start_2
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 11;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.requestIncodeSessionBootstrap;
                    var5 = {};
                    var8 = var3;
                    var8 = var8.previousInterviewId;
                    var5['previousInterviewId'] = var8;
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.then;
                    var5 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var1 = arg1;
                            var4 = var1.incode_parameters;
                            var3 = null;
                            var5 = var3 == var4;
                            var1 = undefined;
                            var2 = undefined;
                            if(var5) { _fun0008_ip = 25; continue _fun0008 }
case 26:
                            var2 = var4.session_token;
case 25:
                            if(!(var3 != var2)) { _fun0008_ip = 27; continue _fun0008 }
case 28:
                            var2 = var4.interview_id;
                            if(!(var3 == var2)) { _fun0008_ip = 29; continue _fun0008 }
case 27:
                            var3 = _closure2_slot9;
                            var2 = {};
                            var5 = true;
                            var2['error'] = var5;
                            var2 = var3.bind(var1)(var2);
                            _fun0008_ip = 30; continue _fun0008;
case 29:
                            var3 = _closure2_slot9;
                            var2 = {};
                            var5 = var4.session_token;
                            var2['sessionToken'] = var5;
                            var4 = var4.interview_id;
                            var2['interviewId'] = var4;
                            var2 = var3.bind(var1)(var2);
case 30:
                            return var1;
                        }
                    };
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.catch;
                    var5 = function(arg1) {
                        var4 = _closure1_slot12;
                        var3 = var4.warn;
                        var2 = {};
                        var1 = arg1;
                        var2['error'] = var1;
                        var1 = 'Failed to bootstrap Incode fallback session from WebView';
                        var1 = var3.bind(var4)(var1, var2);
                        var3 = _closure2_slot9;
                        var2 = {};
                        var1 = true;
                        var2['error'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var5 = var6.bind(var7)(var5);
case 31: // try_end2
                    var5 = undefined;
                    return var5;
case 15: // try_start_3
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 11;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.registerIncodeInterview;
                    var3 = var3.interviewId;
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.then;
                    var3 = function() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var2 = _closure2_slot4;
                            var2 = var2.current;
                            var2 = !var2;
                            if(!var2) { _fun0009_ip = 32; continue _fun0009 }
case 11:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 10;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.isAgeVerified;
                            var2 = var3.bind(var4)();
case 32:
                            if(!var2) { _fun0009_ip = 33; continue _fun0009 }
case 34:
                            var2 = _closure2_slot8;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
case 33:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.catch;
                    var2 = function(arg1) {
                        var4 = _closure1_slot12;
                        var3 = var4.warn;
                        var2 = {};
                        var1 = arg1;
                        var2['error'] = var1;
                        var1 = 'Failed to register Incode interview from WebView';
                        var1 = var3.bind(var4)(var1, var2);
                        var1 = undefined;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
case 35: // try_end3
                    var2 = undefined;
                    return var2;
case 13:
                    return var1;
case 36: // catch_target0 // catch_target1 // catch_target2 // catch_target3
                    CatchBlockStart(arg_register=1);
                    var5 = _closure1_slot12;
                    var4 = var5.warn;
                    var3 = {};
                    var3['error'] = var2;
                    var2 = 'Failed to parse WebView message';
                    var2 = var4.bind(var5)(var2, var3);
case 23:
                    return var1;
                }
            };
            var13 = var3.bind(var5)(var1, var2);
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var16;
            var1 = function() {
                var1 = global;
                var3 = var1.URL;
                var4 = _closure2_slot0;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                var1 = var1.origin;
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var _closure2_slot10 = var1;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1;
                    var5 = undefined;
                    var3 = undefined;
                    var4 = var1.isTopFrame;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0010_ip = 37; continue _fun0010 }
case 26:
                    var4 = var2;
                    var4 = var4.isTopFrame;
                    if(var4) { _fun0010_ip = 37; continue _fun0010 }
case 38:
                    var4 = true;
                    return var4;
case 37:
                    var3 = null;
case 2: // try_start_0
                    var4 = global;
                    var7 = var4.URL;
                    var4 = var2;
                    var8 = var4.url;
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {constructor: {value: var7}});
                    var9 = var6;
                    var4 = new var9[var7](var8, var7);
                    var4 = var4 instanceof Object ? var4 : var6;
                    var3 = var4.origin;
case 39: // try_end0
                    _fun0010_ip = 40; continue _fun0010;
case 41: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var3 = null;
case 40:
                    var4 = var3;
                    var3 = _closure2_slot10;
                    var3 = var4 === var3;
                    var1 = var3;
                    if(var3) { _fun0010_ip = 42; continue _fun0010 }
case 43:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 12;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.openURL;
                    var2 = var2.url;
                    var2 = var3.bind(var4)(var2);
                    var1 = false;
case 42:
                    return var1;
                }
            };
            var14 = var3.bind(var5)(var1, var2);
            var1 = _closure1_slot13;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var11.container;
            var1['style'] = var5;
            var8 = _closure1_slot10;
            var7 = _closure1_slot1;
            var5 = 13;
            var5 = var17[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {'ref': null, 'allowsInlineMediaPlayback': true, 'mediaCapturePermissionGrantType': 'grant', 'javaScriptEnabled': true};
            var5['ref'] = var15;
            var15 = {};
            var15['uri'] = var16;
            var5['source'] = var15;
            var5['onShouldStartLoadWithRequest'] = var14;
            var5['onMessage'] = var13;
            var13 = function onError(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var4 = _closure1_slot12;
                var3 = var4.warn;
                var2 = {};
                var1 = var1.code;
                var2['code'] = var1;
                var1 = 'WebView load error';
                var1 = var3.bind(var4)(var1, var2);
                var2 = _closure2_slot7;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var5['onError'] = var13;
            var12 = function onLoadEnd() {
                var2 = _closure2_slot7;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var5['onLoadEnd'] = var12;
            var5['injectedJavaScriptBeforeContentLoaded'] = var9;
            var9 = var11.webView;
            var5['style'] = var9;
            var9 = var11.webView;
            var5['containerStyle'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            if(!var6) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var9 = _closure1_slot10;
            var8 = _closure1_slot5;
            var7 = {};
            var11 = var11.loadingOverlay;
            var7['style'] = var11;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 14;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.ActivityIndicator;
            var10 = {};
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 44:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();