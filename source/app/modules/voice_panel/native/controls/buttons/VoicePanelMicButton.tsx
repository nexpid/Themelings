// app/modules/voice_panel/native/controls/buttons/VoicePanelMicButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function useMuteHandlers(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot4;
        var4 = var5.useRef;
        var3 = null;
        var3 = var4.bind(var5)(var3);
        var _closure2_slot1 = var3;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 13;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresObject;
        var7 = _closure1_slot8;
        var3 = new Array(7);
        var3[0] = var7;
        var7 = _closure1_slot7;
        var3[1] = var7;
        var7 = _closure1_slot12;
        var3[2] = var7;
        var7 = _closure1_slot9;
        var3[3] = var7;
        var7 = _closure1_slot10;
        var3[4] = var7;
        var7 = _closure1_slot6;
        var3[5] = var7;
        var2 = _closure1_slot5;
        var3[6] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = _closure1_slot8;
                var4 = var5.getChannel;
                var3 = _closure2_slot0;
                var8 = var4.bind(var5)(var3);
                var5 = null;
                if(!(var5 == var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = {'selfMute': false, 'suppress': false, 'mute': false};
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 14;
                var6 = var6[var3];
                var3 = undefined;
                var7 = var7.bind(var3)(var6);
                var6 = var7.getMuteStates;
                var3 = {};
                var3['channel'] = var8;
                var8 = _closure1_slot7;
                var3['authenticationStore'] = var8;
                var8 = _closure1_slot12;
                var3['voiceStateStore'] = var8;
                var8 = _closure1_slot9;
                var3['mediaEngineStore'] = var8;
                var8 = _closure1_slot10;
                var3['permissionStore'] = var8;
                var8 = _closure1_slot6;
                var3['impersonateStore'] = var8;
                var4 = var6.bind(var7)(var3);
case 4:
                var3 = _closure2_slot1;
                var3 = var3.current;
                var8 = var5 == var3;
                var6 = undefined;
                var7 = undefined;
                if(var8) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var7 = var3.selfMute;
case 5:
                var3 = var4.selfMute;
                var3 = var7 !== var3;
                var8 = undefined;
                if(!var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                var9 = _closure1_slot11;
                var7 = var9.getCurrentUser;
                var7 = var7.bind(var9)();
                var3 = var5 != var7;
                var8 = var7;
case 7:
                if(!var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                var7 = var8.isStaff;
                var3 = var7.bind(var8)();
case 9:
                if(!var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                var11 = _closure1_slot16;
                var10 = var11.info;
                var3 = _closure2_slot1;
                var3 = var3.current;
                var7 = var5 == var3;
                var9 = undefined;
                if(var7) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                var9 = var3.selfMute;
case 13:
                var12 = var4.selfMute;
                var15 = 'Self mute changed';
                var13 = '>';
                var16 = var11;
                var14 = var9;
                var3 = var16[var10](var15, var14, var13, var12, var11);
case 11:
                var2 = _closure2_slot1;
                var2['current'] = var4;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 15;
                var2 = var7[var2];
                var3 = var3.bind(var6)(var2);
                var2 = var3.createMuteHandler;
                var6 = _closure1_slot5;
                var1 = var6.getAwaitingRemoteSessionInfo;
                var1 = var1.bind(var6)();
                var1 = var5 != var1;
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot13 = var8;
    var8 = var4.Fragment;
    var _closure1_slot14 = var8;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'VoicePanelMicButton';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot16 = var4;
    var4 = 12;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'left': 0, 'right': 0, 'bottom': 4, 'textAlign': 'center', 'opacity': 0.5};
    var4['text'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var4 = {};
    var7 = 'function VoicePanelMicButtonTsx1(){const{runOnJS,handlePTTEnd}=this.__closure;runOnJS(handlePTTEnd)();}';
    var4['code'] = var7;
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = 'function VoicePanelMicButtonTsx2(event,manager){const{State,runOnJS,handleDragStart}=this.__closure;if(event.state!==State.BEGAN)return;manager.activate();runOnJS(handleDragStart)();}';
    var4['code'] = var7;
    var _closure1_slot19 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controls/buttons/VoicePanelMicButton.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function PTTButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var15 = var2.props;
            var3 = var2.wrapperSpecs;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var2 = _closure1_slot17;
            var10 = var2.bind(var4)();
            var7 = _closure1_slot4;
            var5 = var7.useContext;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 17;
            var2 = var9[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var5.bind(var7)(var2);
            var5 = var2.channelId;
            var7 = _closure1_slot4;
            var2 = var7.useState;
            var8 = false;
            var9 = var2.bind(var7)(var8);
            var7 = _closure1_slot3;
            var2 = 2;
            var7 = var7.bind(var4)(var9, var2);
            var2 = 0;
            var17 = var7[var2];
            var2 = 1;
            var2 = var7[var2];
            var _closure2_slot0 = var2;
            var2 = _closure1_slot20;
            var2 = var2.bind(var4)(var5);
            var9 = var2.mute;
            var7 = var2.onPress;
            var2 = function useDeafHandlers(arg1) {
                var6 = arg1;
                var _closure3_slot0 = var6;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 13;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.useStateFromStoresObject;
                var7 = _closure1_slot8;
                var3 = new Array(6);
                var3[0] = var7;
                var7 = _closure1_slot7;
                var3[1] = var7;
                var7 = _closure1_slot12;
                var3[2] = var7;
                var7 = _closure1_slot9;
                var3[3] = var7;
                var7 = _closure1_slot10;
                var3[4] = var7;
                var2 = _closure1_slot6;
                var3[5] = var2;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var4 = _closure1_slot8;
                        var3 = var4.getChannel;
                        var2 = _closure3_slot0;
                        var8 = var3.bind(var4)(var2);
                        var2 = null;
                        if(!(var2 == var8)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                        var3 = {'selfDeaf': false, 'deaf': false};
                        _fun0003_ip = 15; continue _fun0003;
case 2:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 16;
                        var4 = var4[var2];
                        var2 = undefined;
                        var7 = var5.bind(var2)(var4);
                        var6 = var7.getDeafStates;
                        var11 = _closure1_slot12;
                        var10 = _closure1_slot9;
                        var9 = _closure1_slot7;
                        var13 = var7;
                        var12 = var8;
                        var3 = var13[var6](var12, var11, var10, var9, var8);
case 15:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 15;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var4.bind(var1)(var2);
                        var1 = var2.createDeafHandler;
                        var1 = var1.bind(var2)(var3);
                        return var1;
                    }
                };
                var1 = var4.bind(var5)(var3, var1, var2);
                return var1;
            };
            var5 = var2.bind(var4)(var5);
            var2 = var5.deaf;
            var5 = var5.onPress;
            if(var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var2 = undefined;
            if(!var9) { _fun0002_ip = 18; continue _fun0002 }
case 10:
            var2 = var7;
case 18:
            var5 = var2;
case 16:
            _closure2_slot1 = var5;
            var18 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 18;
            var2 = var14[var2];
            var7 = var18.bind(var4)(var2);
            var2 = var7.useSharedValue;
            var13 = var2.bind(var7)(var8);
            _closure2_slot2 = var13;
            var12 = _closure1_slot1;
            var2 = 19;
            var2 = var14[var2];
            var2 = var12.bind(var4)(var2);
            var2 = var2.bind(var4)();
            _closure2_slot3 = var2;
            var9 = _closure1_slot4;
            var8 = var9.useRef;
            var7 = {'active': false, 'dragging': false};
            var7 = var8.bind(var9)(var7);
            _closure2_slot4 = var7;
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = new Array(3);
            var7[0] = var2;
            var7[1] = var13;
            var7[2] = var5;
            var5 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var2 = var2.current;
                    var2 = var2.active;
                    if(var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
case 21:
                    var2 = _closure2_slot4;
                    var2 = var2.current;
                    var3 = true;
                    var2['active'] = var3;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 20;
                    var7 = var6[var4];
                    var2 = undefined;
                    var8 = var5.bind(var2)(var7);
                    var7 = var8.triggerHapticFeedback;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var4 = var4.HapticFeedbackTypes;
                    var4 = var4.IMPACT_MEDIUM;
                    var4 = var7.bind(var8)(var4);
                    var4 = 21;
                    var4 = var6[var4];
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.setPushToTalkState;
                    var4 = var4.bind(var5)(var3);
                    var5 = _closure2_slot3;
                    var4 = var5.lock;
                    var4 = var4.bind(var5)();
                    var5 = _closure2_slot2;
                    var4 = var5.set;
                    var4 = var4.bind(var5)(var3);
                    var1 = _closure2_slot0;
                    var1 = var1.bind(var2)(var3);
case 19:
                    var1 = undefined;
                    return var1;
                }
            };
            var19 = var8.bind(var9)(var5, var7);
            _closure2_slot5 = var19;
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var5 = new Array(2);
            var5[0] = var2;
            var5[1] = var13;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var2 = var2.current;
                    var2 = var2.active;
                    if(!var2) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var2 = _closure2_slot4;
                    var2 = var2.current;
                    var3 = false;
                    var2['active'] = var3;
                    var2 = _closure2_slot4;
                    var2 = var2.current;
                    var2['dragging'] = var3;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 21;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.setPushToTalkState;
                    var4 = var4.bind(var5)(var3);
                    var5 = _closure2_slot3;
                    var4 = var5.unlock;
                    var4 = var4.bind(var5)();
                    var5 = _closure2_slot2;
                    var4 = var5.set;
                    var4 = var4.bind(var5)(var3);
                    var1 = _closure2_slot0;
                    var1 = var1.bind(var2)(var3);
case 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var7.bind(var8)(var2, var5);
            _closure2_slot6 = var8;
            var9 = _closure1_slot4;
            var7 = var9.useCallback;
            var5 = new Array(1);
            var5[0] = var8;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var2 = var2.current;
                    var2 = var2.dragging;
                    if(var2) { _fun0006_ip = 25; continue _fun0006 }
case 24:
                    var2 = _closure2_slot6;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var7.bind(var9)(var2, var5);
            var9 = _closure1_slot4;
            var7 = var9.useCallback;
            var5 = new Array(1);
            var5[0] = var19;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var2 = var2.current;
                    var2 = var2.dragging;
                    if(var2) { _fun0007_ip = 26; continue _fun0007 }
case 24:
                    var2 = _closure2_slot4;
                    var3 = var2.current;
                    var2 = true;
                    var3['dragging'] = var2;
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 26:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var7.bind(var9)(var2, var5);
            _closure2_slot7 = var2;
            var9 = _closure1_slot4;
            var7 = var9.useMemo;
            var5 = new Array(2);
            var5[0] = var2;
            var5[1] = var8;
            var2 = function() {
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 22;
                var2 = var10[var6];
                var8 = undefined;
                var2 = var9.bind(var8)(var2);
                var3 = var2.Gesture;
                var2 = var3.Pan;
                var5 = var2.bind(var3)();
                var3 = var5.manualActivation;
                var2 = true;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onTouchesMove;
                var2 = function n(arg1, arg2) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var4 = arg2;
                        var1 = arg1;
                        var5 = var1.state;
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 22;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var6.bind(var1)(var3);
                        var3 = var3.State;
                        var3 = var3.BEGAN;
                        if(!(var5 === var3)) { _fun0008_ip = 27; continue _fun0008 }
case 28:
                        var3 = var4.activate;
                        var3 = var3.bind(var4)();
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 18;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.runOnJS;
                        var2 = _closure2_slot7;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.bind(var1)();
case 27:
                        return var1;
                    }
                };
                var11 = {};
                var6 = var10[var6];
                var6 = var9.bind(var8)(var6);
                var6 = var6.State;
                var11['State'] = var6;
                var7 = 18;
                var6 = var10[var7];
                var6 = var9.bind(var8)(var6);
                var6 = var6.runOnJS;
                var11['runOnJS'] = var6;
                var12 = _closure2_slot7;
                var11['handleDragStart'] = var12;
                var2['__closure'] = var11;
                var11 = 13866422602014.0;
                var2['__workletHash'] = var11;
                var11 = _closure1_slot19;
                var2['__initData'] = var11;
                var3 = var3.bind(var5)(var2);
                var2 = var3.onFinalize;
                var1 = function t() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot6;
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var5 = {};
                var7 = var10[var7];
                var7 = var9.bind(var8)(var7);
                var7 = var7.runOnJS;
                var5['runOnJS'] = var7;
                var6 = _closure2_slot6;
                var5['handlePTTEnd'] = var6;
                var1['__closure'] = var5;
                var5 = 12941114426646.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot18;
                var1['__initData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var7.bind(var9)(var2, var5);
            var7 = _closure1_slot4;
            var5 = var7.useEffect;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var1 = function() {
                    var2 = _closure2_slot6;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    return var1;
                };
                return var1;
            };
            var1 = var5.bind(var7)(var1, var2);
            var1 = 23;
            var1 = var14[var1];
            var2 = var18.bind(var4)(var1);
            var1 = var2.useVoicePanelButtonStyles;
            var11 = var1.bind(var2)(var3);
            var3 = _closure1_slot15;
            var2 = _closure1_slot14;
            var1 = {};
            var8 = _closure1_slot13;
            var5 = 22;
            var5 = var14[var5];
            var5 = var18.bind(var4)(var5);
            var7 = var5.GestureDetector;
            var5 = {};
            var5['gesture'] = var9;
            var9 = 24;
            var9 = var14[var9];
            var12 = var12.bind(var4)(var9);
            var9 = {};
            var9['onPressIn'] = var19;
            var9['onPressOut'] = var16;
            var9['props'] = var15;
            var9['pressed'] = var13;
            var13 = 25;
            var15 = var14[var13];
            var15 = var18.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var13];
            var14 = var18.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.Q8gkVL;
            var14 = var15.bind(var16)(var14);
            var9['accessibilityLabel'] = var14;
            if(var17) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var14 = var11.iconBg;
            _fun0002_ip = 31; continue _fun0002;
case 29:
            var14 = var11.iconBgSelected;
case 31:
            var9['style'] = var14;
            var16 = _closure1_slot13;
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 26;
            var14 = var18[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.MicrophoneIcon;
            var14 = {};
            if(var17) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var17 = var11.iconFill;
            var17 = var17.color;
            _fun0002_ip = 34; continue _fun0002;
case 32:
            var18 = var11.iconFillSelected;
            var17 = var18.color;
case 34:
            var14['color'] = var17;
            var17 = 'lg';
            var14['size'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var9['children'] = var14;
            var9 = var8.bind(var4)(var12, var9);
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot13;
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 27;
            var6 = var9[var6];
            var6 = var12.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {};
            var14 = var10.text;
            var10 = new Array(2);
            var10[0] = var14;
            var11 = var11.iconFill;
            var10[1] = var11;
            var6['style'] = var10;
            var10 = 'text-xxs/medium';
            var6['variant'] = var10;
            var10 = var9[var13];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var9[var13];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.Q8gkVL;
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['PTTButton'] = var4;
    var2 = function MicButton(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var10 = var2.props;
            var7 = var2.wrapperSpecs;
            var5 = _closure1_slot20;
            var9 = _closure1_slot4;
            var6 = var9.useContext;
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 17;
            var3 = var11[var3];
            var4 = undefined;
            var3 = var2.bind(var4)(var3);
            var3 = var6.bind(var9)(var3);
            var3 = var3.channelId;
            var3 = var5.bind(var4)(var3);
            var6 = var3.mute;
            var _closure2_slot0 = var6;
            var9 = var3.onPress;
            var13 = var3.dominantMuteState;
            var _closure2_slot1 = var13;
            var5 = _closure1_slot0;
            var3 = 23;
            var3 = var11[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useVoicePanelButtonStyles;
            var7 = var3.bind(var5)(var7);
            var _closure2_slot2 = var7;
            var12 = _closure1_slot4;
            var5 = var12.useMemo;
            var3 = new Array(3);
            var3[0] = var7;
            var3[1] = var6;
            var3[2] = var13;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 15;
                    var1 = var5[var1];
                    var5 = undefined;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.DominantMuteState;
                    var1 = var1.SERVER_MUTE;
                    if(!(var3 !== var1)) { _fun0010_ip = 35; continue _fun0010 }
case 26:
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 29;
                    var1 = var7[var1];
                    var1 = var3.bind(var5)(var1);
                    var3 = var1.VoicePanelRiveMicButton;
                    var1 = {};
                    var7 = _closure2_slot0;
                    var8 = _closure2_slot2;
                    if(var7) { _fun0010_ip = 36; continue _fun0010 }
case 37:
                    var7 = var8.iconFill;
                    var7 = var7.color;
                    _fun0010_ip = 38; continue _fun0010;
case 36:
                    var8 = var8.iconFillRed;
                    var7 = var8.color;
case 38:
                    var1['color'] = var7;
                    var7 = _closure2_slot0;
                    var1['muted'] = var7;
                    var1 = var4.bind(var5)(var3, var1);
                    _fun0010_ip = 39; continue _fun0010;
case 35:
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 28;
                    var2 = var7[var2];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.MicrophoneDenyIcon;
                    var2 = {};
                    var6 = _closure2_slot2;
                    var6 = var6.iconFillRed;
                    var6 = var6.color;
                    var2['color'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 39:
                    return var1;
                }
            };
            var5 = var5.bind(var12)(var1, var3);
            var3 = _closure1_slot13;
            var1 = 24;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['props'] = var10;
            var1['onPress'] = var9;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 25;
            var10 = var12[var8];
            var10 = var9.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var8 = var12[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.t;
            if(var6) { _fun0009_ip = 40; continue _fun0009 }
case 41:
            var8 = var9.w4m945;
            var8 = var10.bind(var11)(var8);
            _fun0009_ip = 42; continue _fun0009;
case 40:
            var9 = var9.YqAjXy;
            var8 = var10.bind(var11)(var9);
case 42:
            var1['accessibilityLabel'] = var8;
            if(var6) { _fun0009_ip = 43; continue _fun0009 }
case 44:
            var6 = var7.iconBg;
            _fun0009_ip = 45; continue _fun0009;
case 43:
            var6 = var7.iconBgSelected;
case 45:
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['MicButton'] = var2;
    return var1;
})();