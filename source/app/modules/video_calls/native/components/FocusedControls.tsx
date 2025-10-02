// app/modules/video_calls/native/components/FocusedControls.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = function FocusedControlsHeader(arg1) {
        var1 = arg1;
        var11 = var1.header;
        var14 = var1.reveal;
        var _closure2_slot0 = var14;
        var9 = var1.isTouchingLeftScreenEdge;
        var1 = _closure1_slot9;
        var4 = undefined;
        var12 = var1.bind(var4)();
        var6 = _closure1_slot0;
        var13 = _closure1_slot2;
        var1 = 6;
        var2 = var13[var1];
        var7 = var6.bind(var4)(var2);
        var5 = var7.useDerivedValue;
        var2 = function l() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = -54;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = 0;
case 2:
                return var1;
            }
        };
        var10 = {};
        var10['reveal'] = var14;
        var14 = 54;
        var10['FOCUSED_CONTROLS_HEADER_HEIGHT'] = var14;
        var2['__closure'] = var10;
        var10 = 15509217225804.0;
        var2['__workletHash'] = var10;
        var10 = _closure1_slot11;
        var2['__initData'] = var10;
        var15 = var5.bind(var7)(var2);
        var _closure2_slot1 = var15;
        var2 = _closure1_slot1;
        var5 = 7;
        var5 = var13[var5];
        var5 = var2.bind(var4)(var5);
        var10 = var5.bind(var4)();
        var5 = var13[var1];
        var7 = var6.bind(var4)(var5);
        var5 = var7.useAnimatedStyle;
        var3 = function c() {
            var1 = {};
            var3 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 8;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.withTiming;
            var7 = _closure2_slot1;
            var4 = var7.get;
            var4 = var4.bind(var7)();
            var2 = _closure1_slot10;
            var2 = var5.bind(var6)(var4, var2);
            var3['translateY'] = var2;
            var2 = new Array(1);
            var2[0] = var3;
            var1['transform'] = var2;
            return var1;
        };
        var14 = {};
        var16 = 8;
        var16 = var13[var16];
        var16 = var6.bind(var4)(var16);
        var16 = var16.withTiming;
        var14['withTiming'] = var16;
        var14['offsetY'] = var15;
        var15 = _closure1_slot10;
        var14['TIMING_CONFIG'] = var15;
        var3['__closure'] = var14;
        var14 = 12710345257882.0;
        var3['__workletHash'] = var14;
        var14 = _closure1_slot12;
        var3['__initData'] = var14;
        var5 = var5.bind(var7)(var3);
        var3 = _closure1_slot7;
        var1 = var13[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var1['style'] = var5;
        var7 = _closure1_slot7;
        var5 = 9;
        var5 = var13[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.SafeAreaPaddingView;
        var5 = {};
        var10 = !var10;
        var5['top'] = var10;
        var5['left'] = var9;
        var9 = true;
        var5['right'] = var9;
        var10 = _closure1_slot7;
        var9 = _closure1_slot5;
        var8 = {};
        var12 = var12.headerContainer;
        var8['style'] = var12;
        var8['children'] = var11;
        var8 = var10.bind(var4)(var9, var8);
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function FocusedControlsHeaderGradient() {
        var1 = _closure1_slot9;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var2 = _closure1_slot1;
        var13 = _closure1_slot2;
        var1 = 10;
        var1 = var13[var1];
        var1 = var2.bind(var4)(var1);
        var1 = var1.bind(var4)();
        var12 = var1.width;
        var3 = _closure1_slot7;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = var5.backgroundGradient;
        var5 = new Array(2);
        var5[0] = var6;
        var6 = {};
        var6['width'] = var12;
        var5[1] = var6;
        var1['style'] = var5;
        var7 = _closure1_slot8;
        var10 = _closure1_slot0;
        var9 = 11;
        var5 = var13[var9];
        var5 = var10.bind(var4)(var5);
        var6 = var5.Svg;
        var5 = {};
        var8 = '100%';
        var5['height'] = var8;
        var5['width'] = var12;
        var15 = _closure1_slot7;
        var8 = var13[var9];
        var8 = var10.bind(var4)(var8);
        var14 = var8.Defs;
        var8 = {};
        var18 = _closure1_slot8;
        var16 = var13[var9];
        var16 = var10.bind(var4)(var16);
        var17 = var16.LinearGradient;
        var16 = {'id': 'grad', 'y1': '0%', 'x1': '0', 'x2': '0', 'y2': '100%'};
        var21 = _closure1_slot7;
        var19 = var13[var9];
        var19 = var10.bind(var4)(var19);
        var20 = var19.Stop;
        var19 = {'offset': '0%', 'stopColor': 'black', 'stopOpacity': '.8'};
        var20 = var21.bind(var4)(var20, var19);
        var19 = new Array(3);
        var19[0] = var20;
        var22 = _closure1_slot7;
        var20 = var13[var9];
        var20 = var10.bind(var4)(var20);
        var21 = var20.Stop;
        var20 = {'offset': '66%', 'stopColor': 'black', 'stopOpacity': '.51'};
        var20 = var22.bind(var4)(var21, var20);
        var19[1] = var20;
        var22 = _closure1_slot7;
        var20 = var13[var9];
        var20 = var10.bind(var4)(var20);
        var21 = var20.Stop;
        var20 = {'offset': '100%', 'stopColor': 'black', 'stopOpacity': '0'};
        var20 = var22.bind(var4)(var21, var20);
        var19[2] = var20;
        var16['children'] = var19;
        var16 = var18.bind(var4)(var17, var16);
        var8['children'] = var16;
        var14 = var15.bind(var4)(var14, var8);
        var8 = new Array(2);
        var8[0] = var14;
        var11 = _closure1_slot7;
        var9 = var13[var9];
        var9 = var10.bind(var4)(var9);
        var10 = var9.Rect;
        var9 = {'height': '100%', 'width': null, 'fill': 'url(#grad)'};
        var9['width'] = var12;
        var9 = var11.bind(var4)(var10, var9);
        var8[1] = var9;
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var8 = var2.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.StyleSheet;
    var _closure1_slot4 = var5;
    var2 = var2.View;
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot7 = var5;
    var2 = var2.jsxs;
    var _closure1_slot8 = var2;
    var2 = 4;
    var2 = var7[var2];
    var10 = var6.bind(var1)(var2);
    var9 = var10.createStyles;
    var5 = {};
    var2 = {'position': 'absolute', 'left': 0, 'right': 0, 'top': 0, 'height': 130};
    var5['backgroundGradient'] = var2;
    var2 = 54;
    var11 = {'position': 'relative', 'height': 54};
    var5['headerContainer'] = var11;
    var11 = {'margin': 0, 'marginHorizontal': 16, 'marginBottom': 8};
    var5['ptbButton'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot9 = var5;
    var5 = {};
    var9 = 5;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var9 = var9.STANDARD_EASING;
    var5['easing'] = var9;
    var9 = 250;
    var5['duration'] = var9;
    var _closure1_slot10 = var5;
    var5 = {};
    var9 = 'function FocusedControlsTsx1(){const{reveal,FOCUSED_CONTROLS_HEADER_HEIGHT}=this.__closure;return reveal?0:-FOCUSED_CONTROLS_HEADER_HEIGHT;}';
    var5['code'] = var9;
    var _closure1_slot11 = var5;
    var5 = {};
    var9 = 'function FocusedControlsTsx2(){const{withTiming,offsetY,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withTiming(offsetY.get(),TIMING_CONFIG)}]};}';
    var5['code'] = var9;
    var _closure1_slot12 = var5;
    var5 = {};
    var9 = 'function FocusedControlsTsx3(){const{isInvitedToSpeak,statusIndicatorHeight}=this.__closure;return isInvitedToSpeak?statusIndicatorHeight.get():0;}';
    var5['code'] = var9;
    var _closure1_slot13 = var5;
    var5 = {};
    var9 = 'function FocusedControlsTsx4(){const{reveal}=this.__closure;return reveal?1:0;}';
    var5['code'] = var9;
    var _closure1_slot14 = var5;
    var5 = {};
    var9 = 'function FocusedControlsTsx5(){const{withTiming,top,TIMING_CONFIG,revealOpacity}=this.__closure;return{top:withTiming(top.get(),TIMING_CONFIG),opacity:withTiming(revealOpacity.get(),TIMING_CONFIG)};}';
    var5['code'] = var9;
    var _closure1_slot15 = var5;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var20 = var1.header;
            var14 = var1.expandedControls;
            var15 = var1.actionBar;
            var10 = var1.children;
            var2 = var1.forceReveal;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = false;
case 4:
            var5 = var1.disableGradient;
            if(!(var5 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = false;
case 6:
            var18 = var1.containerStyle;
            var16 = var1.omitPTT;
            var13 = var1.bottomHeader;
            var12 = var1.onDrawerClose;
            var3 = var1.channel;
            var _closure2_slot0 = var3;
            var19 = var1.isTouchingLeftScreenEdge;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 12;
            var1 = var6[var1];
            var8 = var3.bind(var4)(var1);
            var1 = var8.useGlobalStatusIndicatorState;
            var9 = var1.bind(var8)();
            var1 = 13;
            var1 = var6[var1];
            var8 = var3.bind(var4)(var1);
            var1 = var8.useGlobalStatusIndicatorHeightSharedValue;
            var21 = var1.bind(var8)(var9);
            _closure2_slot1 = var21;
            var8 = _closure1_slot1;
            var1 = 7;
            var1 = var6[var1];
            var1 = var8.bind(var4)(var1);
            var22 = var1.bind(var4)();
            _closure2_slot2 = var22;
            var9 = _closure1_slot3;
            var8 = var9.useContext;
            var1 = 14;
            var1 = var6[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.RevealContext;
            var1 = var8.bind(var9)(var1);
            var11 = var1.reveal;
            var1 = 15;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useIsScreenReaderEnabled;
            var1 = var1.bind(var3)();
            if(var11) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var11 = var2;
case 8:
            if(var11) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var11 = var1;
case 10:
            _closure2_slot3 = var11;
            var24 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 6;
            var2 = var6[var1];
            var8 = var24.bind(var4)(var2);
            var3 = var8.useDerivedValue;
            var2 = function D() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = 0;
                    if(!var3) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var1 = var2.bind(var3)();
case 12:
                    return var1;
                }
            };
            var9 = {};
            var9['isInvitedToSpeak'] = var22;
            var9['statusIndicatorHeight'] = var21;
            var2['__closure'] = var9;
            var9 = 14833624951450.0;
            var2['__workletHash'] = var9;
            var9 = _closure1_slot13;
            var2['__initData'] = var9;
            var22 = var3.bind(var8)(var2);
            _closure2_slot4 = var22;
            var2 = var6[var1];
            var8 = var24.bind(var4)(var2);
            var3 = var8.useDerivedValue;
            var2 = function F() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = 0;
                    if(!var2) { _fun0004_ip = 14; continue _fun0004 }
case 13:
                    var1 = 1;
case 14:
                    return var1;
                }
            };
            var9 = {};
            var9['reveal'] = var11;
            var2['__closure'] = var9;
            var9 = 15022275245977.0;
            var2['__workletHash'] = var9;
            var9 = _closure1_slot14;
            var2['__initData'] = var9;
            var21 = var3.bind(var8)(var2);
            _closure2_slot5 = var21;
            var2 = var6[var1];
            var8 = var24.bind(var4)(var2);
            var3 = var8.useAnimatedStyle;
            var2 = function y() {
                var1 = {};
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 8;
                var3 = var7[var4];
                var5 = undefined;
                var11 = var6.bind(var5)(var3);
                var10 = var11.withTiming;
                var9 = _closure2_slot4;
                var8 = var9.get;
                var9 = var8.bind(var9)();
                var8 = _closure1_slot10;
                var8 = var10.bind(var11)(var9, var8);
                var1['top'] = var8;
                var4 = var7[var4];
                var5 = var6.bind(var5)(var4);
                var4 = var5.withTiming;
                var6 = _closure2_slot5;
                var3 = var6.get;
                var3 = var3.bind(var6)();
                var2 = _closure1_slot10;
                var2 = var4.bind(var5)(var3, var2);
                var1['opacity'] = var2;
                return var1;
            };
            var9 = {};
            var23 = 8;
            var23 = var6[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.withTiming;
            var9['withTiming'] = var23;
            var9['top'] = var22;
            var22 = _closure1_slot10;
            var9['TIMING_CONFIG'] = var22;
            var9['revealOpacity'] = var21;
            var2['__closure'] = var9;
            var9 = 8532538341439.0;
            var2['__workletHash'] = var9;
            var9 = _closure1_slot15;
            var2['__initData'] = var9;
            var8 = var3.bind(var8)(var2);
            var2 = _closure1_slot1;
            var3 = 16;
            var3 = var6[var3];
            var9 = var2.bind(var4)(var3);
            var3 = 17;
            var3 = var6[var3];
            var3 = var2.bind(var4)(var3);
            var3 = var3.FOCUSED_VOICE_CONTROLS;
            var3 = var9.bind(var4)(var3);
            var3 = var3.analyticsLocations;
            _closure2_slot6 = var3;
            var3 = 18;
            var3 = var6[var3];
            var3 = var2.bind(var4)(var3);
            var3 = var3.bind(var4)();
            _closure2_slot7 = var3;
            var3 = _closure1_slot8;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var9 = null;
            if(!(var9 == var18)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var6 = _closure1_slot4;
            var18 = var6.absoluteFill;
case 15:
            var6 = new Array(2);
            var6[0] = var18;
            var6[1] = var8;
            var1['style'] = var6;
            var6 = 'none';
            if(!var11) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var6 = 'box-none';
case 17:
            var1['pointerEvents'] = var6;
            var6 = null;
            if(var5) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var18 = _closure1_slot7;
            var8 = _closure1_slot17;
            var5 = {};
            var6 = var18.bind(var4)(var8, var5);
case 19:
            var5 = new Array(3);
            var5[0] = var6;
            var18 = _closure1_slot7;
            var8 = _closure1_slot16;
            var6 = {};
            var6['header'] = var20;
            var6['reveal'] = var11;
            var6['isTouchingLeftScreenEdge'] = var19;
            var6 = var18.bind(var4)(var8, var6);
            var5[1] = var6;
            var8 = var9 != var15;
            var6 = null;
            if(!var8) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var8 = var9 != var14;
            var6 = null;
            if(!var8) { _fun0002_ip = 21; continue _fun0002 }
case 23:
            var9 = _closure1_slot7;
            var8 = _closure1_slot1;
            var18 = _closure1_slot2;
            var7 = 19;
            var7 = var18[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var17 = function onDrawerOpen() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 20;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot6;
                    var3 = var2.VOICE_BOTTOM_SHEET_EXPANDED;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var8 = var7.id;
                    var2['channel_id'] = var8;
                    var7 = var7.guild_id;
                    var2['guild_id'] = var7;
                    var7 = _closure2_slot7;
                    var8 = null;
                    var9 = var8 == var7;
                    var7 = undefined;
                    if(var9) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                    var9 = _closure2_slot7;
                    var7 = var9.applicationId;
case 24:
                    var2['application_id'] = var7;
                    var7 = _closure2_slot7;
                    var8 = var8 == var7;
                    var7 = undefined;
                    if(var8) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                    var8 = _closure2_slot7;
                    var7 = var8.compositeInstanceId;
case 26:
                    var2['activity_session_id'] = var7;
                    var6 = _closure2_slot6;
                    var2['location_stack'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var7['onDrawerOpen'] = var17;
            var7['omitPTT'] = var16;
            var7['actionBar'] = var15;
            var7['expandedControls'] = var14;
            var7['header'] = var13;
            var7['onDrawerClose'] = var12;
            var7['reveal'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 21:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_calls/native/components/FocusedControls.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['FOCUSED_CONTROLS_HEADER_HEIGHT'] = var2;
    return var1;
})();