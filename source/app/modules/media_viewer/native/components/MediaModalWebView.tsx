// app/modules/media_viewer/native/components/MediaModalWebView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var6 = require;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var1 = metroImportDefault;
        var _closure1_slot1 = var1;
        var _closure1_slot2 = var7;
        var1 = global;
        var8 = var1.Object;
        var5 = var8.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var5.bind(var8)(var3, var1, var2);
        var13 = 0;
        var5 = var7[var13];
        var2 = metroImportAll;
        var1 = undefined;
        var9 = var2.bind(var1)(var5);
        var _closure1_slot3 = var9;
        var12 = 1;
        var2 = var7[var12];
        var2 = var6.bind(var1)(var2);
        var5 = var2.ActivityIndicator;
        var _closure1_slot4 = var5;
        var11 = var2.StyleSheet;
        var2 = var2.View;
        var _closure1_slot5 = var2;
        var10 = 2;
        var2 = var7[var10];
        var2 = var6.bind(var1)(var2);
        var5 = var2.jsx;
        var _closure1_slot6 = var5;
        var2 = var2.jsxs;
        var _closure1_slot7 = var2;
        var8 = 3;
        var2 = var7[var8];
        var5 = var6.bind(var1)(var2);
        var2 = var5.isIOS;
        var5 = var2.bind(var5)();
        var2 = '';
        if(!var5) { _fun0001_ip = 180; continue _fun0001 }
 174:
        var2 = "\n  window.addEventListener('click', function(event) {\n    window.ReactNativeWebView.postMessage(JSON.stringify({event: 'click'}));\n  });\n";
 180:
        var _closure1_slot8 = var2;
        var2 = {};
        var2['UNREADY'] = var13;
        var5 = 'UNREADY';
        var2[var13] = var5;
        var2['READY'] = var12;
        var5 = 'READY';
        var2[var12] = var5;
        var2['ERRORED'] = var10;
        var5 = 'ERRORED';
        var2[var10] = var5;
        var2['UNSTARTED'] = var8;
        var5 = 'UNSTARTED';
        var2[var8] = var5;
        var8 = 4;
        var2['ENDED'] = var8;
        var5 = 'ENDED';
        var2[var8] = var5;
        var8 = 5;
        var2['PLAYING'] = var8;
        var5 = 'PLAYING';
        var2[var8] = var5;
        var8 = 6;
        var2['PAUSED'] = var8;
        var5 = 'PAUSED';
        var2[var8] = var5;
        var8 = 7;
        var2['BUFFERING'] = var8;
        var5 = 'BUFFERING';
        var2[var8] = var5;
        var5 = 8;
        var2['VIDEO_CUED'] = var5;
        var8 = 'VIDEO_CUED';
        var2[var5] = var8;
        var _closure1_slot9 = var2;
        var10 = var11.create;
        var8 = {};
        var12 = {'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'position': 'absolute', 'alignItems': 'center', 'justifyContent': 'center'};
        var8['loading'] = var12;
        var8 = var10.bind(var11)(var8);
        var _closure1_slot10 = var8;
        var8 = {};
        var10 = 'function MediaModalWebViewTsx1(){const{withTiming,webviewOpacity}=this.__closure;return{opacity:withTiming(webviewOpacity.get())};}';
        var8['code'] = var10;
        var _closure1_slot11 = var8;
        var8 = {};
        var10 = 'function MediaModalWebViewTsx2(){const{withTiming,loaderOpacity}=this.__closure;return{opacity:withTiming(loaderOpacity.get())};}';
        var8['code'] = var10;
        var _closure1_slot12 = var8;
        var8 = var9.forwardRef;
        var4 = function(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var6 = arg1;
                var5 = var6.style;
                var8 = var6.playerState;
                var _closure2_slot0 = var8;
                var13 = var6.onDataReceived;
                var _closure2_slot1 = var13;
                var7 = var6.baseURL;
                var _closure2_slot2 = var7;
                var20 = var6.injectedJavaScript;
                var2 = var6.panGestureConfig;
                var _closure2_slot3 = var2;
                var4 = {'style': 0, 'playerState': 0, 'onDataReceived': 0, 'baseURL': 0, 'injectedJavaScript': 0, 'panGestureConfig': 0};
                var24 = null;
                var25 = var4;
                var3 = silentSetPrototypeOf(var25, var24);
                var9 = 0;
                var25 = {};
                var24 = var6;
                var23 = var4;
                var14 = copyDataProperties(var25, var24, var23);
                var22 = _closure1_slot0;
                var16 = _closure1_slot2;
                var11 = 4;
                var3 = var16[var11];
                var4 = undefined;
                var6 = var22.bind(var4)(var3);
                var3 = var6.useSharedValue;
                var19 = 1;
                var18 = var3.bind(var6)(var19);
                var _closure2_slot4 = var18;
                var3 = var16[var11];
                var6 = var22.bind(var4)(var3);
                var3 = var6.useSharedValue;
                var3 = var3.bind(var6)(var9);
                var _closure2_slot5 = var3;
                var6 = var16[var11];
                var12 = var22.bind(var4)(var6);
                var9 = var12.useAnimatedStyle;
                var6 = function f() {
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.withTiming;
                    var5 = _closure2_slot5;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var2 = var3.bind(var4)(var2);
                    var1['opacity'] = var2;
                    return var1;
                };
                var15 = {};
                var21 = 5;
                var17 = var16[var21];
                var17 = var22.bind(var4)(var17);
                var17 = var17.withTiming;
                var15['withTiming'] = var17;
                var15['webviewOpacity'] = var3;
                var6['__closure'] = var15;
                var15 = 2179142865986.0;
                var6['__workletHash'] = var15;
                var15 = _closure1_slot11;
                var6['__initData'] = var15;
                var17 = var9.bind(var12)(var6);
                var6 = var16[var11];
                var12 = var22.bind(var4)(var6);
                var9 = var12.useAnimatedStyle;
                var6 = function S() {
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.withTiming;
                    var5 = _closure2_slot4;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var2 = var3.bind(var4)(var2);
                    var1['opacity'] = var2;
                    return var1;
                };
                var15 = {};
                var21 = var16[var21];
                var21 = var22.bind(var4)(var21);
                var21 = var21.withTiming;
                var15['withTiming'] = var21;
                var15['loaderOpacity'] = var18;
                var6['__closure'] = var15;
                var15 = 7752174298017.0;
                var6['__workletHash'] = var15;
                var15 = _closure1_slot12;
                var6['__initData'] = var15;
                var12 = var9.bind(var12)(var6);
                var6 = _closure1_slot3;
                var15 = var6.useEffect;
                var9 = new Array(3);
                var9[0] = var8;
                var9[1] = var18;
                var9[2] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var4 = _closure2_slot0;
                        var2 = _closure1_slot9;
                        var2 = var2.BUFFERING;
                        var2 = var4 !== var2;
                        if(!var2) { _fun0003_ip = 45; continue _fun0003 }
 27:
                        var5 = _closure2_slot0;
                        var4 = _closure1_slot9;
                        var4 = var4.PLAYING;
                        var2 = var5 !== var4;
 45:
                        if(!var2) { _fun0003_ip = 66; continue _fun0003 }
 48:
                        var4 = _closure2_slot0;
                        var3 = _closure1_slot9;
                        var3 = var3.ERRORED;
                        var2 = var4 !== var3;
 66:
                        if(var2) { _fun0003_ip = 102; continue _fun0003 }
 69:
                        var4 = _closure2_slot4;
                        var3 = var4.set;
                        var2 = 0;
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure2_slot5;
                        var2 = var3.set;
                        var1 = 1;
                        var1 = var2.bind(var3)(var1);
 102:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var15.bind(var6)(var3, var9);
                var9 = var6.useCallback;
                var3 = new Array(2);
                var3[0] = var13;
                var3[1] = var2;
                var2 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = arg1;
                        var2 = global;
                        var4 = var2.JSON;
                        var3 = var4.parse;
                        var2 = var1.nativeEvent;
                        var2 = var2.data;
                        var2 = var3.bind(var4)(var2);
                        var3 = null;
                        if(!(var3 != var2)) { _fun0004_ip = 52; continue _fun0004 }
 38:
                        var3 = var2.event;
                        var2 = 'click';
                        if(!(var2 !== var3)) { _fun0004_ip = 78; continue _fun0004 }
 52:
                        var3 = _closure2_slot1;
                        var1 = var1.nativeEvent;
                        var2 = var1.data;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        _fun0004_ip = 119; continue _fun0004;
 78:
                        var1 = _closure2_slot3;
                        var3 = var1.overlayEnabled;
                        var2 = var3.set;
                        var4 = var1.overlayEnabled;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var1 = !var1;
                        var1 = var2.bind(var3)(var1);
 119:
                        var1 = undefined;
                        return var1;
                    }
                };
                var18 = var9.bind(var6)(var2, var3);
                var3 = var6.useCallback;
                var2 = new Array(1);
                var2[0] = var7;
                var1 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var2 = arg1;
                        var3 = var2.url;
                        var1 = 'about:blank';
                        var1 = var1 !== var3;
                        if(!var1) { _fun0005_ip = 47; continue _fun0005 }
 21:
                        var5 = var2.url;
                        var4 = var5.startsWith;
                        var3 = _closure2_slot2;
                        var3 = var4.bind(var5)(var3);
                        var1 = !var3;
 47:
                        if(!var1) { _fun0005_ip = 74; continue _fun0005 }
 50:
                        var4 = var2.isTopFrame;
                        var3 = null;
                        var3 = var3 == var4;
                        if(var3) { _fun0005_ip = 71; continue _fun0005 }
 65:
                        var3 = var2.isTopFrame;
 71:
                        var1 = var3;
 74:
                        var1 = !var1;
                        if(var1) { _fun0005_ip = 123; continue _fun0005 }
 80:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 6;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.openURL;
                        var2 = var2.url;
                        var2 = var3.bind(var4)(var2);
                        var1 = false;
 123:
                        return var1;
                    }
                };
                var15 = var3.bind(var6)(var1, var2);
                var3 = _closure1_slot7;
                var2 = _closure1_slot5;
                var1 = {};
                var1['style'] = var5;
                var7 = _closure1_slot6;
                var13 = _closure1_slot1;
                var5 = var16[var11];
                var5 = var13.bind(var4)(var5);
                var6 = var5.View;
                var5 = {};
                var9 = new Array(2);
                var9[0] = var17;
                var17 = {};
                var17['flex'] = var19;
                var9[1] = var17;
                var5['style'] = var9;
                var9 = 7;
                var9 = var16[var9];
                var13 = var13.bind(var4)(var9);
                var9 = {};
                var25 = var9;
                var24 = var14;
                var14 = copyDataProperties(var25, var24);
                var19 = _closure1_slot8;
                var14 = global;
                var14 = var14.HermesInternal;
                var17 = var14.concat;
                var16 = '';
                var14 = '\n';
                var16 = var17.bind(var16)(var20, var14, var19);
                var14 = 'injectedJavaScript';
                var9[var14] = var16;
                var16 = false;
                var14 = 'bounces';
                var9[var14] = var16;
                var17 = arg2;
                var14 = 'ref';
                var9[var14] = var17;
                var14 = 'scrollEnabled';
                var9[var14] = var16;
                var17 = true;
                var14 = 'javaScriptEnabled';
                var9[var14] = var17;
                var14 = 'onMessage';
                var9[var14] = var18;
                var14 = 'allowsInlineMediaPlayback';
                var9[var14] = var17;
                var14 = 'mediaPlaybackRequiresUserAction';
                var9[var14] = var16;
                var14 = 'onShouldStartLoadWithRequest';
                var9[var14] = var15;
                var9 = var7.bind(var4)(var13, var9);
                var5['children'] = var9;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = _closure1_slot9;
                var6 = var6.PLAYING;
                var6 = var8 !== var6;
                if(!var6) { _fun0002_ip = 686; continue _fun0002 }
 672:
                var7 = _closure1_slot9;
                var7 = var7.PAUSED;
                var6 = var8 !== var7;
 686:
                if(!var6) { _fun0002_ip = 777; continue _fun0002 }
 689:
                var9 = _closure1_slot6;
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var11];
                var7 = var8.bind(var4)(var7);
                var8 = var7.View;
                var7 = {};
                var11 = new Array(2);
                var11[0] = var12;
                var12 = _closure1_slot10;
                var12 = var12.loading;
                var11[1] = var12;
                var7['style'] = var11;
                var11 = _closure1_slot4;
                var10 = {'color': 'white', 'size': 'large'};
                var10 = var9.bind(var4)(var11, var10);
                var7['children'] = var10;
                var6 = var9.bind(var4)(var8, var7);
 777:
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var8 = var8.bind(var9)(var4);
        var4 = var9.memo;
        var4 = var4.bind(var9)(var8);
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/media_viewer/native/components/MediaModalWebView.tsx';
        var5 = var6.bind(var7)(var5);
        var3['default'] = var4;
        var3['PlayerState'] = var2;
        return var1;
    }
})();