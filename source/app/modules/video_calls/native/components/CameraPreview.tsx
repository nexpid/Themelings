// app/modules/video_calls/native/components/CameraPreview.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function CameraPreview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var26 = var1.channel;
            var24 = var1.nonSelfPipParticipant;
            var25 = var1.selfParticipant;
            var11 = var1.participantScreenIsFocused;
            var _closure2_slot0 = var11;
            var4 = undefined;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 17;
            var1 = var8[var6];
            var5 = var7.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot12;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot12;
                var1 = var2.isReactingToThermalState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var23 = var3.bind(var5)(var2, var1);
            var _closure2_slot1 = var23;
            var9 = _closure1_slot1;
            var1 = 18;
            var1 = var8[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.bind(var4)();
            var1 = _closure1_slot3;
            var5 = 2;
            var1 = var1.bind(var4)(var2, var5);
            var2 = 0;
            var30 = var1[var2];
            var14 = 1;
            var29 = var1[var14];
            var _closure2_slot2 = var29;
            var10 = _closure1_slot4;
            var3 = var10.useContext;
            var1 = 19;
            var1 = var8[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.RevealContext;
            var1 = var3.bind(var10)(var1);
            var15 = var1.reveal;
            var _closure2_slot3 = var15;
            var1 = 20;
            var1 = var8[var1];
            var1 = var9.bind(var4)(var1);
            var10 = var1.bind(var4)();
            var _closure2_slot4 = var10;
            var12 = _closure1_slot9;
            var3 = var12.useField;
            var1 = 'chatInputContainerHeight';
            var12 = var3.bind(var12)(var1);
            var _closure2_slot5 = var12;
            var1 = 21;
            var1 = var8[var1];
            var3 = var9.bind(var4)(var1);
            var1 = var26.id;
            var3 = var3.bind(var4)(var1);
            var _closure2_slot6 = var3;
            var1 = 22;
            var1 = var8[var1];
            var13 = var7.bind(var4)(var1);
            var1 = var13.useIsScreenLandscape;
            var13 = var1.bind(var13)();
            var1 = 23;
            var1 = var8[var1];
            var1 = var9.bind(var4)(var1);
            var16 = var1.bind(var4)();
            var1 = var16.bottom;
            var _closure2_slot7 = var1;
            var9 = var16.top;
            var _closure2_slot8 = var9;
            var33 = var16.left;
            var32 = var16.right;
            var16 = 24;
            var16 = var8[var16];
            var18 = var7.bind(var4)(var16);
            var17 = var18.useIsViewingActivity;
            var16 = {};
            var20 = var26.id;
            var16['channelId'] = var20;
            var22 = var17.bind(var18)(var16);
            var6 = var8[var6];
            var16 = var7.bind(var4)(var6);
            var8 = var16.useStateFromStores;
            var6 = _closure1_slot12;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getVoiceCallOverlayLayoutStates;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var8.bind(var16)(var7, var6);
            var6 = _closure1_slot17;
            var6 = var6.CAMERA_PREVIEW_PICTURE_IN_PICTURE;
            var8 = var7[var6];
            var7 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 25;
            var6 = var16[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.OrientationType;
            if(var13) { _fun0001_ip = 467; continue _fun0001 }
 459:
            var16 = var6.PORTRAIT;
            _fun0001_ip = 473; continue _fun0001;
 467:
            var16 = var6.LANDSCAPE;
 473:
            _closure2_slot9 = var16;
            var7 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 26;
            var6 = var17[var6];
            var6 = var7.bind(var4)(var6);
            var17 = var6.bind(var4)(var16);
            var6 = null;
            var18 = var16;
            if(!(var6 == var17)) { _fun0001_ip = 529; continue _fun0001 }
 511:
            var16 = var6 == var8;
            var7 = undefined;
            if(var16) { _fun0001_ip = 526; continue _fun0001 }
 520:
            var7 = var8.screenOrientation;
 526:
            var17 = var7;
 529:
            _closure2_slot10 = var17;
            var16 = _closure1_slot4;
            var8 = var16.useEffect;
            var7 = new Array(4);
            var7[0] = var18;
            var7[1] = var17;
            var7[2] = var3;
            var7[3] = var29;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot10;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0002_ip = 28; continue _fun0002 }
 16:
                    var4 = _closure2_slot10;
                    var3 = _closure2_slot9;
                    var2 = var4 !== var3;
 28:
                    if(!var2) { _fun0002_ip = 35; continue _fun0002 }
 31:
                    var2 = _closure2_slot6;
 35:
                    if(!var2) { _fun0002_ip = 78; continue _fun0002 }
 38:
                    var3 = _closure2_slot2;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 27;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var4.bind(var2)(var1);
                    var1 = var1.DEFAULT_PIP_POSITION;
                    var1 = var3.bind(var2)(var1);
 78:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var16)(var3, var7);
            var8 = _closure1_slot4;
            var7 = var8.useState;
            var3 = _closure1_slot16;
            var3 = var9 + var3;
            var7 = var7.bind(var8)(var3);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var7, var5);
            var18 = var3[var2];
            _closure2_slot11 = var18;
            var3 = var3[var14];
            _closure2_slot12 = var3;
            var8 = _closure1_slot4;
            var7 = var8.useState;
            var3 = _closure1_slot16;
            var3 = var1 + var3;
            var7 = var7.bind(var8)(var3);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var7, var5);
            var16 = var3[var2];
            _closure2_slot13 = var16;
            var3 = var3[var14];
            _closure2_slot14 = var3;
            var8 = _closure1_slot4;
            var7 = var8.useEffect;
            var3 = new Array(6);
            var3[0] = var15;
            var3[1] = var12;
            var3[2] = var11;
            var3[3] = var10;
            var3[4] = var9;
            var3[5] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot8;
                    var1 = _closure1_slot16;
                    var4 = var3 + var1;
                    var3 = _closure2_slot7;
                    var1 = _closure1_slot16;
                    var1 = var3 + var1;
                    var3 = _closure2_slot0;
                    if(var3) { _fun0003_ip = 62; continue _fun0003 }
 37:
                    var5 = _closure2_slot5;
                    var3 = _closure2_slot7;
                    var5 = var5 + var3;
                    var3 = _closure1_slot16;
                    var3 = var5 + var3;
                    var5 = var4;
                    _fun0003_ip = 146; continue _fun0003;
 62:
                    var7 = _closure2_slot3;
                    if(!var7) { _fun0003_ip = 113; continue _fun0003 }
 69:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 28;
                    var8 = var8[var7];
                    var7 = undefined;
                    var7 = var9.bind(var7)(var8);
                    var8 = var7.NAV_BAR_HEIGHT;
                    var7 = _closure2_slot8;
                    var8 = var8 + var7;
                    var7 = _closure1_slot16;
                    var4 = var8 + var7;
 113:
                    var7 = _closure2_slot3;
                    if(!var7) { _fun0003_ip = 140; continue _fun0003 }
 120:
                    var8 = _closure2_slot4;
                    var7 = _closure2_slot7;
                    var7 = var8 + var7;
                    var6 = _closure1_slot16;
                    var1 = var7 + var6;
 140:
                    var3 = var1;
                    var5 = var4;
 146:
                    var4 = _closure2_slot12;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var5);
                    var2 = _closure2_slot14;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var1 = var7.bind(var8)(var1, var3);
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 15;
            var1 = var12[var10];
            var7 = var11.bind(var4)(var1);
            var3 = var7.useAnimatedStyle;
            var1 = function te() {
                var1 = {};
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 29;
                var3 = var7[var4];
                var5 = undefined;
                var11 = var6.bind(var5)(var3);
                var10 = var11.withTiming;
                var9 = _closure2_slot11;
                var8 = _closure1_slot25;
                var8 = var10.bind(var11)(var9, var8);
                var1['marginTop'] = var8;
                var4 = var7[var4];
                var5 = var6.bind(var5)(var4);
                var4 = var5.withTiming;
                var3 = _closure2_slot13;
                var2 = _closure1_slot25;
                var2 = var4.bind(var5)(var3, var2);
                var1['marginBottom'] = var2;
                return var1;
            };
            var8 = {};
            var9 = 29;
            var9 = var12[var9];
            var9 = var11.bind(var4)(var9);
            var9 = var9.withTiming;
            var8['withTiming'] = var9;
            var8['marginTopState'] = var18;
            var9 = _closure1_slot25;
            var8['TIMING_CONFIG'] = var9;
            var8['marginBottomState'] = var16;
            var1['__closure'] = var8;
            var8 = 17411027531876.0;
            var1['__workletHash'] = var8;
            var8 = _closure1_slot27;
            var1['__initData'] = var8;
            var15 = var3.bind(var7)(var1);
            var3 = _closure1_slot4;
            var1 = var3.useRef;
            var27 = var1.bind(var3)(var6);
            var3 = _closure1_slot4;
            var1 = var3.useState;
            var3 = var1.bind(var3)(var6);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var3, var5);
            var5 = var1[var2];
            var1 = var1[var14];
            _closure2_slot15 = var1;
            var1 = _closure1_slot26;
            var1 = var1.HIDE_PIP;
            if(!(var1 !== var5)) { _fun0001_ip = 1015; continue _fun0001 }
 895:
            var1 = _closure1_slot26;
            var1 = var1.HANDLE_THERMAL_EVENT;
            if(!(var1 !== var5)) { _fun0001_ip = 918; continue _fun0001 }
 909:
            var20 = new Array(0);
            _fun0001_ip = 1099; continue _fun0001;
 918:
            var2 = {};
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 31;
            var8 = var7[var1];
            var8 = var3.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var1 = var7[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.1fRDnZ;
            var1 = var8.bind(var9)(var1);
            var2['text'] = var1;
            var1 = 32;
            var1 = var7[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.openIgnoreThermalStateAlert;
            var2['onClick'] = var1;
            var1 = new Array(1);
            var1[0] = var2;
            var20 = var1;
            _fun0001_ip = 1099; continue _fun0001;
 1015:
            var2 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 31;
            var3 = var9[var1];
            var3 = var8.bind(var4)(var3);
            var7 = var3.intl;
            var3 = var7.string;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.L3I0Ji;
            var1 = var3.bind(var7)(var1);
            var2['text'] = var1;
            var1 = function handleHidePip() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 30;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setPipEnabledWhileFocusedOnActivityOrStream;
                var2 = false;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2['onClick'] = var1;
            var1 = new Array(1);
            var1[0] = var2;
            var20 = var1;
 1099:
            var1 = function useGesture(arg1) {
                var5 = arg1;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot4;
                var3 = var4.useMemo;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = _closure3_slot0;
                        var2 = var2.current;
                        var3 = null;
                        var3 = var3 == var2;
                        var8 = undefined;
                        var6 = undefined;
                        if(var3) { _fun0004_ip = 33; continue _fun0004 }
 27:
                        var6 = var2.close;
 33:
                        var _closure4_slot0 = var6;
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 14;
                        var2 = var9[var2];
                        var2 = var7.bind(var8)(var2);
                        var3 = var2.Gesture;
                        var2 = var3.Tap;
                        var3 = var2.bind(var3)();
                        var2 = var3.onTouchesUp;
                        var1 = function l() {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                var3 = _closure4_slot0;
                                var2 = null;
                                if(!(var2 != var3)) { _fun0005_ip = 56; continue _fun0005 }
 13:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 15;
                                var3 = var3[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.runOnJS;
                                var1 = _closure4_slot0;
                                var1 = var3.bind(var4)(var1);
                                var1 = var1.bind(var2)();
 56:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var5 = {};
                        var5['closeFunc'] = var6;
                        var6 = 15;
                        var6 = var9[var6];
                        var6 = var7.bind(var8)(var6);
                        var6 = var6.runOnJS;
                        var5['runOnJS'] = var6;
                        var1['__closure'] = var5;
                        var5 = 9707001557651.0;
                        var1['__workletHash'] = var5;
                        var4 = _closure1_slot24;
                        var1['__initData'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var9 = var1.bind(var4)(var27);
            var3 = _closure1_slot23;
            var2 = _closure1_slot22;
            var1 = {};
            var5 = var6 == var5;
            var6 = null;
            if(var5) { _fun0001_ip = 1205; continue _fun0001 }
 1128:
            var8 = _closure1_slot21;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 14;
            var5 = var11[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.GestureDetector;
            var5 = {};
            var5['gesture'] = var9;
            var12 = _closure1_slot21;
            var11 = _closure1_slot6;
            var9 = {};
            var17 = _closure1_slot5;
            var17 = var17.absoluteFill;
            var9['style'] = var17;
            var9 = var12.bind(var4)(var11, var9);
            var5['children'] = var9;
            var6 = var8.bind(var4)(var7, var5);
 1205:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot21;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = _closure1_slot5;
            var9 = var9.absoluteFill;
            var6['style'] = var9;
            var9 = 'box-none';
            var6['pointerEvents'] = var9;
            var12 = _closure1_slot21;
            var17 = _closure1_slot1;
            var28 = _closure1_slot2;
            var10 = var28[var10];
            var10 = var17.bind(var4)(var10);
            var11 = var10.View;
            var10 = {};
            var31 = {};
            var31['flex'] = var14;
            var14 = _closure1_slot15;
            var14 = var33 + var14;
            var31['marginLeft'] = var14;
            var14 = _closure1_slot15;
            var14 = var32 + var14;
            var31['marginRight'] = var14;
            var14 = new Array(2);
            var14[0] = var31;
            var14[1] = var15;
            var10['style'] = var14;
            var10['pointerEvents'] = var9;
            var15 = _closure1_slot21;
            var9 = 27;
            var9 = var28[var9];
            var14 = var17.bind(var4)(var9);
            var9 = {};
            var9['channel'] = var26;
            var9['preferredPosition'] = var30;
            var9['onMove'] = var29;
            var29 = true;
            var9['isInCallScreen'] = var29;
            var9['marginTop'] = var18;
            var9['marginBottom'] = var16;
            var18 = _closure1_slot21;
            var16 = 33;
            var16 = var28[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var16['ref'] = var27;
            if(!var22) { _fun0001_ip = 1406; continue _fun0001 }
 1403:
            var22 = var23;
 1406:
            var22 = !var22;
            var16['disabled'] = var22;
            var23 = _closure1_slot21;
            var22 = _closure1_slot1;
            var27 = _closure1_slot2;
            var21 = 34;
            var21 = var27[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var21['channel'] = var26;
            var21['selfParticipant'] = var25;
            var21['pipParticipant'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var16['trigger'] = var21;
            var16['rows'] = var20;
            var20 = function onOpen() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot15;
                    var2 = _closure2_slot1;
                    var1 = _closure1_slot26;
                    if(var2) { _fun0006_ip = 29; continue _fun0006 }
 21:
                    var2 = var1.HIDE_PIP;
                    _fun0006_ip = 35; continue _fun0006;
 29:
                    var2 = var1.HANDLE_THERMAL_EVENT;
 35:
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var16['onOpen'] = var20;
            var19 = function onClose() {
                var3 = _closure2_slot15;
                var1 = undefined;
                var2 = null;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var16['onClose'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var9['children'] = var16;
            var9 = var15.bind(var4)(var14, var9);
            var10['children'] = var9;
            var9 = 'portrait';
            if(!var13) { _fun0001_ip = 1522; continue _fun0001 }
 1518:
            var9 = 'landscape';
 1522:
            var9 = var12.bind(var4)(var11, var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot28 = var1;
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
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.StyleSheet;
    var _closure1_slot5 = var8;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useChannelCallStore;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.VoiceChatDrawerState;
    var _closure1_slot14 = var7;
    var7 = var4.VOICE_CALL_OVERLAY_HORIZONTAL_MARGIN;
    var _closure1_slot15 = var7;
    var7 = var4.VOICE_CALL_OVERLAY_VERTICAL_MARGIN;
    var _closure1_slot16 = var7;
    var4 = var4.VoiceCallOverlayType;
    var _closure1_slot17 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ApplicationStreamStates;
    var _closure1_slot18 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ParticipantTypes;
    var _closure1_slot19 = var7;
    var4 = var4.isStreamParticipant;
    var _closure1_slot20 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot21 = var7;
    var7 = var4.Fragment;
    var _closure1_slot22 = var7;
    var4 = var4.jsxs;
    var _closure1_slot23 = var4;
    var4 = {};
    var7 = 'function CameraPreviewTsx1(){const{closeFunc,runOnJS}=this.__closure;if(closeFunc!=null){runOnJS(closeFunc)();}}';
    var4['code'] = var7;
    var _closure1_slot24 = var4;
    var4 = {};
    var7 = 250;
    var4['duration'] = var7;
    var7 = 16;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.STANDARD_EASING;
    var4['easing'] = var7;
    var _closure1_slot25 = var4;
    var4 = {};
    var7 = 'HIDE_PIP';
    var4['HIDE_PIP'] = var7;
    var7 = 'HANDLE_THERMAL_EVENT';
    var4['HANDLE_THERMAL_EVENT'] = var7;
    var _closure1_slot26 = var4;
    var4 = {};
    var7 = 'function CameraPreviewTsx2(){const{withTiming,marginTopState,TIMING_CONFIG,marginBottomState}=this.__closure;return{marginTop:withTiming(marginTopState,TIMING_CONFIG),marginBottom:withTiming(marginBottomState,TIMING_CONFIG)};}';
    var4['code'] = var7;
    var _closure1_slot27 = var4;
    var4 = 40;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/CameraPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CameraPreviewContainer(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            var9 = var2.channel;
            var _closure2_slot0 = var9;
            var8 = var2.participantScreenIsFocused;
            var5 = undefined;
            if(!(var8 === var5)) { _fun0007_ip = 28; continue _fun0007 }
 26:
            var8 = true;
 28:
            var _closure2_slot1 = var8;
            var3 = var2.isChannelCallModalOpen;
            if(!(var3 === var5)) { _fun0007_ip = 44; continue _fun0007 }
 42:
            var3 = false;
 44:
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 36;
            var4 = var6[var4];
            var4 = var7.bind(var5)(var4);
            var10 = var4.bind(var5)(var9);
            _closure2_slot2 = var10;
            var11 = _closure1_slot0;
            var15 = 17;
            var4 = var6[var15];
            var14 = var11.bind(var5)(var4);
            var13 = var14.useStateFromStores;
            var4 = _closure1_slot8;
            var12 = new Array(3);
            var12[0] = var4;
            var7 = _closure1_slot11;
            var12[1] = var7;
            var7 = _closure1_slot10;
            var12[2] = var7;
            var7 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = _closure1_slot11;
                    var1 = var4.getId;
                    var1 = var1.bind(var4)();
                    var _closure3_slot0 = var1;
                    var4 = _closure1_slot10;
                    var1 = var4.getCurrentUserActiveStream;
                    var5 = var1.bind(var4)();
                    var1 = null;
                    var4 = var1 != var5;
                    if(!var4) { _fun0008_ip = 65; continue _fun0008 }
 46:
                    var6 = var5.state;
                    var5 = _closure1_slot18;
                    var5 = var5.ACTIVE;
                    var4 = var6 === var5;
 65:
                    var _closure3_slot1 = var4;
                    var6 = _closure1_slot8;
                    var5 = var6.getStreamParticipants;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.find;
                    var2 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var1 = arg1;
                            var1 = var1.user;
                            var3 = var1.id;
                            var1 = _closure3_slot0;
                            var1 = var3 === var1;
                            if(!var1) { _fun0009_ip = 31; continue _fun0009 }
 27:
                            var1 = _closure3_slot1;
 31:
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
                    var4 = _closure2_slot2;
                    if(!(var1 != var4)) { _fun0008_ip = 150; continue _fun0008 }
 119:
                    if(!(var1 != var2)) { _fun0008_ip = 150; continue _fun0008 }
 123:
                    var4 = _closure2_slot2;
                    var5 = var4.id;
                    var4 = var2.id;
                    if(!(var5 === var4)) { _fun0008_ip = 150; continue _fun0008 }
 141:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(var3) { _fun0008_ip = 153; continue _fun0008 }
 150:
                    var1 = var2;
 153:
                    return var1;
                }
            };
            var14 = var13.bind(var14)(var12, var7);
            var12 = _closure1_slot13;
            var7 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.voiceChatDrawerState;
                    var1 = _closure1_slot14;
                    var1 = var1.OPEN;
                    var1 = var3 === var1;
                    if(var1) { _fun0010_ip = 43; continue _fun0010 }
 29:
                    var2 = _closure1_slot14;
                    var2 = var2.OPENING;
                    var1 = var3 === var2;
 43:
                    return var1;
                }
            };
            var7 = var12.bind(var5)(var7);
            var6 = var6[var15];
            var12 = var11.bind(var5)(var6);
            var11 = var12.useStateFromStores;
            var6 = new Array(2);
            var6[0] = var4;
            var4 = _closure1_slot7;
            var6[1] = var4;
            var4 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var4 = _closure1_slot7;
                    var1 = var4.getCurrentEmbeddedActivity;
                    var4 = var1.bind(var4)();
                    var _closure3_slot0 = var4;
                    var1 = null;
                    var4 = var1 == var4;
                    if(var4) { _fun0011_ip = 74; continue _fun0011 }
 32:
                    var5 = _closure1_slot8;
                    var4 = var5.getParticipants;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 37;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.getEmbeddedActivityParticipantId;
                        var1 = {};
                        var5 = _closure3_slot0;
                        var6 = var5.applicationId;
                        var1['applicationId'] = var6;
                        var5 = var5.compositeInstanceId;
                        var1['instanceId'] = var5;
                        var1 = var3.bind(var4)(var1);
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
 74:
                    return var1;
                }
            };
            var6 = var11.bind(var12)(var6, var4);
            var4 = null;
            var12 = var4 != var6;
            if(!var12) { _fun0007_ip = 244; continue _fun0007 }
 212:
            var13 = var4 == var10;
            var11 = undefined;
            if(var13) { _fun0007_ip = 226; continue _fun0007 }
 221:
            var11 = var10.id;
 226:
            var13 = var4 == var6;
            var10 = undefined;
            if(var13) { _fun0007_ip = 240; continue _fun0007 }
 235:
            var10 = var6.id;
 240:
            var12 = var11 === var10;
 244:
            if(!var12) { _fun0007_ip = 250; continue _fun0007 }
 247:
            var12 = !var7;
 250:
            _closure2_slot3 = var12;
            var16 = null;
            if(var12) { _fun0007_ip = 262; continue _fun0007 }
 259:
            var16 = var6;
 262:
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var6 = 38;
            var6 = var17[var6];
            var10 = var18.bind(var5)(var6);
            var7 = var10.useIsStreamFocused;
            var6 = var9.id;
            var11 = var7.bind(var10)(var6);
            var6 = 24;
            var6 = var17[var6];
            var10 = var18.bind(var5)(var6);
            var7 = var10.useIsViewingActivity;
            var6 = {};
            var13 = var9.id;
            var6['channelId'] = var13;
            var10 = var7.bind(var10)(var6);
            var6 = var17[var15];
            var21 = var18.bind(var5)(var6);
            var20 = var21.useStateFromStores;
            var7 = _closure1_slot8;
            var19 = new Array(2);
            var19[0] = var7;
            var6 = _closure1_slot11;
            var19[1] = var6;
            var13 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var3 = _closure1_slot11;
                    var2 = var3.getId;
                    var7 = var2.bind(var3)();
                    var3 = _closure1_slot8;
                    var2 = var3.getParticipant;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var2 = var2.bind(var3)(var1, var7);
                    var1 = null;
                    var5 = var1 == var2;
                    var6 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0012_ip = 64; continue _fun0012 }
 58:
                    var3 = var2.streamId;
 64:
                    if(!(var1 == var3)) { _fun0012_ip = 77; continue _fun0012 }
 68:
                    var3 = _closure2_slot3;
                    if(var3) { _fun0012_ip = 77; continue _fun0012 }
 75:
                    return var1;
 77:
                    var3 = _closure2_slot1;
                    if(var3) { _fun0012_ip = 86; continue _fun0012 }
 84:
                    return var2;
 86:
                    var3 = _closure2_slot2;
                    var3 = var1 != var3;
                    if(!var3) { _fun0012_ip = 123; continue _fun0012 }
 97:
                    var5 = _closure2_slot2;
                    var8 = var1 == var5;
                    var5 = undefined;
                    if(var8) { _fun0012_ip = 119; continue _fun0012 }
 110:
                    var8 = _closure2_slot2;
                    var5 = var8.id;
 119:
                    var3 = var5 !== var7;
 123:
                    var5 = _closure2_slot2;
                    if(!(var1 == var5)) { _fun0012_ip = 173; continue _fun0012 }
 131:
                    var8 = _closure2_slot0;
                    var5 = var8.isGuildStageVoice;
                    var5 = var5.bind(var8)();
                    if(var5) { _fun0012_ip = 173; continue _fun0012 }
 148:
                    var4 = _closure2_slot0;
                    var5 = var4.id;
                    var4 = function isSmallRoom(arg1, arg2) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                            var2 = arg2;
                            var _closure4_slot0 = var2;
                            var4 = _closure1_slot8;
                            var3 = var4.getParticipants;
                            var2 = arg1;
                            var4 = var3.bind(var4)(var2);
                            var5 = var4.length;
                            var3 = 4;
                            var2 = var4;
                            if(!(var5 <= var3)) { _fun0013_ip = 60; continue _fun0013 }
 45:
                            var3 = var4.filter;
                            var1 = function(arg1) {
                                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                                    var2 = arg1;
                                    var3 = _closure1_slot20;
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var2);
                                    if(!var1) { _fun0014_ip = 41; continue _fun0014 }
 20:
                                    var2 = var2.user;
                                    var3 = var2.id;
                                    var2 = _closure4_slot0;
                                    var1 = var3 === var2;
 41:
                                    var1 = !var1;
                                    return var1;
                                }
                            };
                            var2 = var3.bind(var4)(var1);
 60:
                            var3 = var2.length;
                            var1 = 1;
                            var1 = var3 > var1;
                            if(!var1) { _fun0013_ip = 87; continue _fun0013 }
 75:
                            var3 = var2.length;
                            var2 = 3;
                            var1 = var3 <= var2;
 87:
                            return var1;
                        }
                    };
                    var4 = var4.bind(var6)(var5, var7);
                    if(var4) { _fun0012_ip = 178; continue _fun0012 }
 173:
                    var1 = null;
                    if(!var3) { _fun0012_ip = 181; continue _fun0012 }
 178:
                    var1 = var2;
 181:
                    return var1;
                }
            };
            var13 = var20.bind(var21)(var19, var13);
            var19 = var17[var15];
            var21 = var18.bind(var5)(var19);
            var20 = var21.useStateFromStores;
            var19 = new Array(2);
            var19[0] = var6;
            var19[1] = var7;
            var6 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var2 = _closure1_slot20;
                    var1 = _closure2_slot2;
                    var3 = undefined;
                    var7 = var2.bind(var3)(var1);
                    var2 = _closure2_slot2;
                    var1 = null;
                    var2 = var1 == var2;
                    var6 = undefined;
                    if(var2) { _fun0015_ip = 45; continue _fun0015 }
 36:
                    var2 = _closure2_slot2;
                    var6 = var2.type;
 45:
                    var2 = _closure1_slot19;
                    var2 = var2.USER;
                    var6 = var6 === var2;
                    if(var7) { _fun0015_ip = 65; continue _fun0015 }
 62:
                    if(!var6) { _fun0015_ip = 108; continue _fun0015 }
 65:
                    var2 = _closure2_slot2;
                    var8 = var1 == var2;
                    var2 = undefined;
                    if(var8) { _fun0015_ip = 88; continue _fun0015 }
 78:
                    var8 = _closure2_slot2;
                    var2 = var8.streamId;
 88:
                    if(!(var1 != var2)) { _fun0015_ip = 108; continue _fun0015 }
 92:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0015_ip = 108; continue _fun0015 }
 99:
                    var2 = _closure2_slot2;
                    _fun0015_ip = 264; continue _fun0015;
 108:
                    if(!var7) { _fun0015_ip = 156; continue _fun0015 }
 111:
                    var7 = _closure2_slot2;
                    var7 = var1 == var7;
                    var8 = undefined;
                    if(var7) { _fun0015_ip = 138; continue _fun0015 }
 124:
                    var7 = _closure2_slot2;
                    var7 = var7.user;
                    var8 = var7.id;
 138:
                    var9 = _closure1_slot11;
                    var7 = var9.getId;
                    var7 = var7.bind(var9)();
                    if(!(var8 === var7)) { _fun0015_ip = 204; continue _fun0015 }
 156:
                    var2 = undefined;
                    if(!var6) { _fun0015_ip = 264; continue _fun0015 }
 161:
                    var8 = _closure1_slot8;
                    var7 = var8.getStreamParticipants;
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.find;
                    var6 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.user;
                        var2 = var1.id;
                        var1 = _closure2_slot2;
                        var1 = var1.user;
                        var1 = var1.id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var7.bind(var8)(var6);
                    _fun0015_ip = 264; continue _fun0015;
 204:
                    var7 = _closure1_slot8;
                    var6 = var7.getParticipant;
                    var5 = _closure2_slot0;
                    var5 = var5.id;
                    var4 = _closure2_slot2;
                    var4 = var4.user;
                    var4 = var4.id;
                    var5 = var6.bind(var7)(var5, var4);
                    var4 = var1 != var5;
                    if(!var4) { _fun0015_ip = 256; continue _fun0015 }
 250:
                    var4 = var5.localVideoDisabled;
 256:
                    var2 = var5;
                    if(!var4) { _fun0015_ip = 264; continue _fun0015 }
 262:
                    var2 = null;
 264:
                    var4 = var1 == var2;
                    var3 = undefined;
                    if(var4) { _fun0015_ip = 279; continue _fun0015 }
 273:
                    var3 = var2.streamId;
 279:
                    var3 = var1 != var3;
                    var1 = null;
                    if(!var3) { _fun0015_ip = 291; continue _fun0015 }
 288:
                    var1 = var2;
 291:
                    return var1;
                }
            };
            var6 = var20.bind(var21)(var19, var6);
            var19 = var9.id;
            _closure2_slot4 = var19;
            var17 = var17[var15];
            var19 = var18.bind(var5)(var17);
            var18 = var19.useStateFromStores;
            var17 = new Array(1);
            var17[0] = var7;
            var7 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var1 = _closure2_slot4;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0016_ip = 42; continue _fun0016 }
 16:
                    var5 = _closure1_slot8;
                    var4 = var5.getSelectedParticipant;
                    var2 = _closure2_slot4;
                    var2 = var4.bind(var5)(var2);
                    var1 = var3 != var2;
 42:
                    return var1;
                }
            };
            var17 = var18.bind(var19)(var17, var7);
            var7 = function useOtherPipParticipant(arg1, arg2, arg3) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 17;
                    var5 = var7[var3];
                    var3 = undefined;
                    var8 = var6.bind(var3)(var5);
                    var6 = var8.useStateFromStores;
                    var9 = _closure1_slot8;
                    var5 = new Array(1);
                    var5[0] = var9;
                    var2 = function() {
                        var3 = _closure1_slot8;
                        var2 = var3.getSelectedParticipant;
                        var1 = _closure3_slot0;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6 = var6.bind(var8)(var5, var2);
                    var5 = _closure1_slot1;
                    var2 = 35;
                    var2 = var7[var2];
                    var2 = var5.bind(var3)(var2);
                    var1 = var1.id;
                    var2 = var2.bind(var3)(var1);
                    var5 = null;
                    var7 = var5 == var2;
                    var1 = null;
                    if(var7) { _fun0017_ip = 171; continue _fun0017 }
 99:
                    var7 = var2.user;
                    var7 = var7.id;
                    var8 = _closure1_slot11;
                    var4 = var8.getId;
                    var4 = var4.bind(var8)();
                    var1 = null;
                    if(!(var7 !== var4)) { _fun0017_ip = 171; continue _fun0017 }
 129:
                    var4 = arg2;
                    if(!var4) { _fun0017_ip = 143; continue _fun0017 }
 135:
                    var4 = arg3;
                    var1 = null;
                    if(!var4) { _fun0017_ip = 171; continue _fun0017 }
 143:
                    var4 = var2.id;
                    var7 = var5 == var6;
                    var3 = undefined;
                    if(var7) { _fun0017_ip = 162; continue _fun0017 }
 157:
                    var3 = var6.id;
 162:
                    var1 = null;
                    if(!(var4 !== var3)) { _fun0017_ip = 171; continue _fun0017 }
 168:
                    var1 = var2;
 171:
                    return var1;
                }
            };
            var7 = var7.bind(var5)(var9, var8, var17);
            if(!(var4 != var16)) { _fun0007_ip = 475; continue _fun0007 }
 472:
            var14 = var16;
 475:
            if(!(var4 != var14)) { _fun0007_ip = 482; continue _fun0007 }
 479:
            var6 = var14;
 482:
            if(!(var4 != var6)) { _fun0007_ip = 489; continue _fun0007 }
 486:
            var7 = var6;
 489:
            var6 = null;
            if(!(var13 !== var7)) { _fun0007_ip = 498; continue _fun0007 }
 495:
            var6 = var13;
 498:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var15];
            var15 = var14.bind(var5)(var13);
            var14 = var15.useStateFromStores;
            var16 = _closure1_slot12;
            var13 = new Array(1);
            var13[0] = var16;
            var1 = function() {
                var2 = _closure1_slot12;
                var1 = var2.isPipEnabledWhileFocusedOnActivityOrStream;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var14.bind(var15)(var13, var1);
            if(!var3) { _fun0007_ip = 556; continue _fun0007 }
 546:
            var13 = var9.isGuildStageVoice;
            var3 = var13.bind(var9)();
 556:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 39;
            var13 = var15[var13];
            var13 = var14.bind(var5)(var13);
            var13 = var13.bind(var5)(var9);
            if(var12) { _fun0007_ip = 587; continue _fun0007 }
 584:
            if(!var11) { _fun0007_ip = 595; continue _fun0007 }
 587:
            if(var1) { _fun0007_ip = 595; continue _fun0007 }
 590:
            var1 = null;
            if(!var10) { _fun0007_ip = 648; continue _fun0007 }
 595:
            if(!(var4 == var6)) { _fun0007_ip = 608; continue _fun0007 }
 599:
            var10 = var4 == var7;
            var1 = null;
            if(var10) { _fun0007_ip = 648; continue _fun0007 }
 608:
            var1 = null;
            if(var3) { _fun0007_ip = 648; continue _fun0007 }
 613:
            var4 = _closure1_slot21;
            var3 = _closure1_slot28;
            var2 = {};
            var2['channel'] = var9;
            var2['participantScreenIsFocused'] = var8;
            var2['nonSelfPipParticipant'] = var7;
            var2['selfParticipant'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 648:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();