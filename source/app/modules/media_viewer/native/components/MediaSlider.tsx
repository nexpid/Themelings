// app/modules/media_viewer/native/components/MediaSlider.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var7 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var7;
        var _closure1_slot2 = var6;
        var1 = global;
        var9 = var1.Object;
        var8 = var9.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var4);
        var11 = 0;
        var4 = var6[var11];
        var1 = undefined;
        var4 = var7.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 1;
        var7 = var6[var4];
        var4 = metroImportAll;
        var4 = var4.bind(var1)(var7);
        var _closure1_slot4 = var4;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.View;
        var _closure1_slot5 = var7;
        var8 = var4.StyleSheet;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot6 = var7;
        var4 = var4.jsxs;
        var _closure1_slot7 = var4;
        var7 = var8.create;
        var4 = {};
        var14 = 12;
        var9 = {'flex': 1, 'marginHorizontal': 12, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
        var4['container'] = var9;
        var9 = {};
        var10 = 16;
        var9['marginRight'] = var10;
        var4['icon'] = var9;
        var9 = {};
        var12 = 4;
        var13 = var6[var12];
        var15 = var5.bind(var1)(var13);
        var13 = var15.isAndroid;
        var15 = var13.bind(var15)();
        var13 = undefined;
        if(!var15) { _fun0001_ip = 224; continue _fun0001 }
 221:
        var13 = var14;
 224:
        var9['lineHeight'] = var13;
        var4['centerText'] = var9;
        var9 = {'flex': 1, 'marginHorizontal': 16, 'backgroundColor': 'transparent', 'zIndex': 0};
        var4['downloadProgressTrack'] = var9;
        var9 = {'position': 'relative', 'flex': 1, 'marginHorizontal': null, 'justifyContent': 'center'};
        var12 = var6[var12];
        var13 = var5.bind(var1)(var12);
        var12 = var13.isAndroid;
        var12 = var12.bind(var13)();
        if(!var12) { _fun0001_ip = 292; continue _fun0001 }
 290:
        var10 = 0;
 292:
        var9['marginHorizontal'] = var10;
        var4['sliderContainer'] = var9;
        var9 = {'position': 'relative', 'flex': 1, 'marginHorizontal': 0, 'justifyContent': 'center'};
        var4['progressSliderContainer'] = var9;
        var9 = {'position': 'absolute', 'width': '100%', 'backgroundColor': 'transparent', 'zIndex': 0};
        var4['timelineBackgroundSlider'] = var9;
        var9 = {'position': 'absolute', 'width': '100%', 'backgroundColor': 'transparent', 'zIndex': 1};
        var4['downloadProgressSlider'] = var9;
        var9 = {'position': 'absolute', 'width': '100%', 'zIndex': 2};
        var4['playbackSlider'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot8 = var4;
        var4 = 17;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/media_viewer/native/components/MediaSlider.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function MediaSlider(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var7 = var2.style;
                var1 = var2.controls;
                var _closure2_slot0 = var1;
                var8 = var2.paused;
                var _closure2_slot1 = var8;
                var3 = var2.setPaused;
                var _closure2_slot2 = var3;
                var2 = var2.onPlayPress;
                var _closure2_slot3 = var2;
                var5 = _closure1_slot4;
                var3 = var5.useRef;
                var2 = false;
                var2 = var3.bind(var5)(var2);
                var _closure2_slot4 = var2;
                var2 = var5.useState;
                var24 = 0;
                var2 = var2.bind(var5)(var24);
                var10 = _closure1_slot3;
                var4 = undefined;
                var6 = 2;
                var2 = var10.bind(var4)(var2, var6);
                var26 = var2[var24];
                var3 = 1;
                var2 = var2[var3];
                var _closure2_slot5 = var2;
                var2 = var5.useState;
                var2 = var2.bind(var5)(var24);
                var2 = var10.bind(var4)(var2, var6);
                var32 = var2[var24];
                var2 = var2[var3];
                var _closure2_slot6 = var2;
                var2 = var5.useState;
                var23 = 'transparent';
                var2 = var2.bind(var5)(var23);
                var2 = var10.bind(var4)(var2, var6);
                var29 = var2[var24];
                var2 = var2[var3];
                var _closure2_slot7 = var2;
                var2 = var5.useRef;
                var9 = var2.bind(var5)(var24);
                var _closure2_slot8 = var9;
                var2 = var5.useState;
                var2 = var2.bind(var5)(var24);
                var2 = var10.bind(var4)(var2, var6);
                var19 = var2[var24];
                var2 = var2[var3];
                var _closure2_slot9 = var2;
                var3 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 5;
                var6 = var10[var2];
                var11 = var3.bind(var4)(var6);
                var6 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.throttle;
                    var2 = function(arg1) {
                        var3 = _closure2_slot5;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = 100;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var22 = var11.bind(var4)(var6);
                var _closure2_slot10 = var22;
                var2 = var10[var2];
                var3 = var3.bind(var4)(var2);
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.throttle;
                    var2 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var5 = arg1;
                            var3 = _closure2_slot6;
                            var1 = undefined;
                            var3 = var3.bind(var1)(var5);
                            var3 = _closure2_slot7;
                            var2 = 'transparent';
                            var4 = 1;
                            if(!(var4 === var5)) { _fun0003_ip = 96; continue _fun0003 }
 32:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 7;
                            var4 = var6[var4];
                            var5 = var5.bind(var1)(var4);
                            var4 = '#FFFFFF';
                            var6 = var5.bind(var1)(var4);
                            var5 = var6.alpha;
                            var4 = 0.2;
                            var5 = var5.bind(var6)(var4);
                            var4 = var5.hex;
                            var2 = var4.bind(var5)();
 96:
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var1 = 100;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var _closure2_slot11 = var2;
                var6 = var5.useEffect;
                var3 = new Array(1);
                var3[0] = var22;
                var2 = function() {
                    var1 = function() {
                        var2 = _closure2_slot10;
                        var1 = var2.cancel;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                };
                var2 = var6.bind(var5)(var2, var3);
                var11 = var1.useSubscribe;
                var6 = function(arg1, arg2) {
                    var4 = _closure2_slot10;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot8;
                    var2 = arg2;
                    var3['current'] = var2;
                    return var1;
                };
                var3 = function(arg1) {
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = function(arg1) {
                    var3 = _closure2_slot11;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var11.bind(var1)(var6, var3, var2);
                var6 = var5.useCallback;
                var3 = new Array(2);
                var3[0] = var1;
                var3[1] = var8;
                var2 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = _closure2_slot1;
                        if(var2) { _fun0004_ip = 37; continue _fun0004 }
 10:
                        var4 = _closure2_slot0;
                        var3 = var4.pause;
                        var2 = true;
                        var3 = var3.bind(var4)(var2);
                        var1 = _closure2_slot4;
                        var1['current'] = var2;
 37:
                        var1 = undefined;
                        return var1;
                    }
                };
                var21 = var6.bind(var5)(var2, var3);
                var3 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var4 = _closure2_slot0;
                        var3 = var4.seek;
                        var2 = arg1;
                        var2 = var3.bind(var4)(var2);
                        var2 = _closure2_slot4;
                        var2 = var2.current;
                        if(!var2) { _fun0005_ip = 60; continue _fun0005 }
 33:
                        var4 = _closure2_slot0;
                        var3 = var4.pause;
                        var2 = false;
                        var3 = var3.bind(var4)(var2);
                        var1 = _closure2_slot4;
                        var1['current'] = var2;
 60:
                        var1 = undefined;
                        return var1;
                    }
                };
                var20 = var3.bind(var5)(var1, var2);
                var6 = _closure1_slot0;
                var12 = 8;
                var1 = var10[var12];
                var2 = var6.bind(var4)(var1);
                var1 = var2.getTimeFormat;
                var16 = var1.bind(var2)(var26);
                var3 = _closure1_slot7;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = _closure1_slot8;
                var11 = var5.container;
                var5 = new Array(2);
                var5[0] = var11;
                var5[1] = var7;
                var1['style'] = var5;
                var7 = _closure1_slot6;
                var5 = 9;
                var5 = var10[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.PressableOpacity;
                var5 = {};
                var10 = _closure1_slot8;
                var10 = var10.icon;
                var5['style'] = var10;
                var10 = 'button';
                var5['accessibilityRole'] = var10;
                var11 = _closure1_slot0;
                var18 = _closure1_slot2;
                var10 = 10;
                var15 = var18[var10];
                var15 = var11.bind(var4)(var15);
                var17 = var15.intl;
                var15 = var17.string;
                var10 = var18[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.t;
                if(var8) { _fun0002_ip = 561; continue _fun0002 }
 548:
                var10 = var11.ZcgDJS;
                var10 = var15.bind(var17)(var10);
                _fun0002_ip = 572; continue _fun0002;
 561:
                var11 = var11.RscU7O;
                var10 = var15.bind(var17)(var11);
 572:
                var5['accessibilityLabel'] = var10;
                var10 = function onPress() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var2 = _closure2_slot1;
                        if(!var2) { _fun0006_ip = 20; continue _fun0006 }
 10:
                        var3 = _closure2_slot3;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
 20:
                        var3 = _closure2_slot0;
                        var2 = var3.pause;
                        var1 = _closure2_slot1;
                        var1 = !var1;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var5['onPress'] = var10;
                var10 = {'top': 8, 'right': 8, 'bottom': 8, 'left': 8};
                var5['hitSlop'] = var10;
                var11 = _closure1_slot6;
                var15 = _closure1_slot0;
                var17 = _closure1_slot2;
                if(var8) { _fun0002_ip = 641; continue _fun0002 }
 621:
                var8 = 12;
                var8 = var17[var8];
                var8 = var15.bind(var4)(var8);
                var10 = var8.PauseIcon;
                _fun0002_ip = 659; continue _fun0002;
 641:
                var8 = 11;
                var8 = var17[var8];
                var8 = var15.bind(var4)(var8);
                var10 = var8.PlayIcon;
 659:
                var8 = {'size': 'md', 'color': 'white'};
                var8 = var11.bind(var4)(var10, var8);
                var5['children'] = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(4);
                var5[0] = var6;
                var8 = _closure1_slot6;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 13;
                var7 = var10[var6];
                var7 = var11.bind(var4)(var7);
                var15 = var7.Text;
                var7 = {'style': null, 'tabularNumbers': true, 'lineClamp': 1, 'color': 'white', 'variant': 'text-xs/medium'};
                var17 = _closure1_slot8;
                var18 = var17.centerText;
                var17 = new Array(2);
                var17[0] = var18;
                var18 = {};
                var18['width'] = var19;
                var17[1] = var18;
                var7['style'] = var17;
                var7['children'] = var16;
                var7 = var8.bind(var4)(var15, var7);
                var5[1] = var7;
                var16 = _closure1_slot7;
                var15 = _closure1_slot5;
                var7 = {};
                var17 = _closure1_slot8;
                var17 = var17.sliderContainer;
                var7['style'] = var17;
                var17 = {};
                var18 = 'none';
                var17['pointerEvents'] = var18;
                var18 = _closure1_slot8;
                var18 = var18.progressSliderContainer;
                var17['style'] = var18;
                var25 = _closure1_slot1;
                var18 = 14;
                var19 = var10[var18];
                var27 = var25.bind(var4)(var19);
                var19 = {'style': null, 'value': 1, 'minimumValue': 0, 'maximumValue': 1, 'thumbTintColor': 'transparent'};
                var28 = _closure1_slot8;
                var28 = var28.timelineBackgroundSlider;
                var19['style'] = var28;
                var30 = 7;
                var28 = var10[var30];
                var28 = var25.bind(var4)(var28);
                var31 = '#FFFFFF';
                var33 = var28.bind(var4)(var31);
                var28 = var33.alpha;
                var34 = 0.1;
                var33 = var28.bind(var33)(var34);
                var28 = var33.hex;
                var28 = var28.bind(var33)();
                var19['minimumTrackTintColor'] = var28;
                var28 = var10[var30];
                var28 = var25.bind(var4)(var28);
                var33 = var28.bind(var4)(var31);
                var28 = var33.alpha;
                var33 = var28.bind(var33)(var34);
                var28 = var33.hex;
                var28 = var28.bind(var33)();
                var19['maximumTrackTintColor'] = var28;
                var27 = var8.bind(var4)(var27, var19);
                var19 = new Array(2);
                var19[0] = var27;
                var27 = var10[var18];
                var28 = var25.bind(var4)(var27);
                var27 = {'style': null, 'value': null, 'minimumValue': 0, 'maximumValue': 1, 'thumbTintColor': 'transparent'};
                var33 = _closure1_slot8;
                var33 = var33.downloadProgressSlider;
                var27['style'] = var33;
                var27['value'] = var32;
                var30 = var10[var30];
                var30 = var25.bind(var4)(var30);
                var32 = var30.bind(var4)(var31);
                var31 = var32.alpha;
                var30 = 0.2;
                var31 = var31.bind(var32)(var30);
                var30 = var31.hex;
                var30 = var30.bind(var31)();
                var27['minimumTrackTintColor'] = var30;
                var27['maximumTrackTintColor'] = var29;
                var27 = var8.bind(var4)(var28, var27);
                var19[1] = var27;
                var17['children'] = var19;
                var19 = var16.bind(var4)(var15, var17);
                var17 = new Array(2);
                var17[0] = var19;
                var18 = var10[var18];
                var19 = var25.bind(var4)(var18);
                var18 = {};
                var27 = _closure1_slot8;
                var27 = var27.playbackSlider;
                var18['style'] = var27;
                var18['value'] = var26;
                var26 = 15;
                var26 = var10[var26];
                var26 = var25.bind(var4)(var26);
                var18['thumbImage'] = var26;
                var18['minimumValue'] = var24;
                var24 = var9.current;
                var18['maximumValue'] = var24;
                var24 = 16;
                var24 = var10[var24];
                var24 = var25.bind(var4)(var24);
                var24 = var24.unsafe_rawColors;
                var24 = var24.WHITE_500;
                var18['minimumTrackTintColor'] = var24;
                var18['maximumTrackTintColor'] = var23;
                var18['onValueChange'] = var22;
                var18['onSlidingStart'] = var21;
                var18['onSlidingComplete'] = var20;
                var18 = var8.bind(var4)(var19, var18);
                var17[1] = var18;
                var7['children'] = var17;
                var7 = var16.bind(var4)(var15, var7);
                var5[2] = var7;
                var6 = var10[var6];
                var6 = var11.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {'style': null, 'variant': 'text-xs/medium', 'color': 'white', 'tabularNumbers': true, 'lineClamp': 1};
                var14 = _closure1_slot8;
                var14 = var14.centerText;
                var6['style'] = var14;
                var13 = function onLayout(arg1) {
                    var3 = _closure2_slot9;
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var2 = var1.width;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var6['onLayout'] = var13;
                var10 = var10[var12];
                var11 = var11.bind(var4)(var10);
                var10 = var11.getTimeFormat;
                var9 = var9.current;
                var9 = var10.bind(var11)(var9);
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[3] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();