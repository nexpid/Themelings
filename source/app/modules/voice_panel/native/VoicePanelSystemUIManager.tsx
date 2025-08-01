// app/modules/voice_panel/native/VoicePanelSystemUIManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelModes;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelControlsModes;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var8 = var4.Fragment;
    var _closure1_slot10 = var8;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = {};
    var8 = 'function VoicePanelSystemUIManagerTsx1(){const{focused,mode,controlsSpecs,windowDimensions}=this.__closure;var _focused$get;return{focusedId:(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode:mode.get(),controlsMode:controlsSpecs.get().mode,landscape:windowDimensions.get().landscape};}';
    var4['code'] = var8;
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = 'function VoicePanelSystemUIManagerTsx2(props,previous){const{cheapWorkletShallowEqual,runOnJS,handleStateChange}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(handleStateChange)(props);}';
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function VoicePanelSystemUIManager() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = _closure1_slot4;
            var3 = var8.useContext;
            var5 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 7;
            var2 = var15[var2];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var3.bind(var8)(var2);
            var19 = var3.focused;
            var _closure2_slot0 = var19;
            var2 = var3.channelId;
            var _closure2_slot1 = var2;
            var18 = var3.mode;
            var _closure2_slot2 = var18;
            var17 = var3.controlsSpecs;
            var _closure2_slot3 = var17;
            var16 = var3.windowDimensions;
            var _closure2_slot4 = var16;
            var3 = var8.useState;
            var5 = true;
            var3 = var3.bind(var8)(var5);
            var13 = _closure1_slot3;
            var11 = 2;
            var3 = var13.bind(var4)(var3, var11);
            var9 = 0;
            var12 = var3[var9];
            var7 = 1;
            var3 = var3[var7];
            var _closure2_slot5 = var3;
            var3 = var8.useState;
            var3 = var3.bind(var8)(var5);
            var3 = var13.bind(var4)(var3, var11);
            var5 = var3[var9];
            var3 = var3[var7];
            var _closure2_slot6 = var3;
            var3 = var8.useState;
            var14 = false;
            var3 = var3.bind(var8)(var14);
            var3 = var13.bind(var4)(var3, var11);
            var10 = var3[var9];
            var3 = var3[var7];
            var _closure2_slot7 = var3;
            var3 = var8.useState;
            var3 = var3.bind(var8)(var14);
            var3 = var13.bind(var4)(var3, var11);
            var9 = var3[var9];
            var3 = var3[var7];
            var _closure2_slot8 = var3;
            var7 = var8.useMemo;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var6 = function updateState(arg1) {
                    var1 = arg1;
                    var3 = var1.focusedId;
                    var _closure4_slot0 = var3;
                    var3 = var1.mode;
                    var _closure4_slot1 = var3;
                    var3 = var1.controlsMode;
                    var _closure4_slot2 = var3;
                    var1 = var1.landscape;
                    var _closure4_slot3 = var1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.batchUpdates;
                    var2 = function() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var5 = _closure2_slot6;
                            var6 = _closure4_slot1;
                            var1 = _closure1_slot6;
                            var3 = var1.PIP;
                            var1 = undefined;
                            var3 = var6 !== var3;
                            var3 = var5.bind(var1)(var3);
                            var5 = _closure4_slot2;
                            var3 = _closure1_slot7;
                            var3 = var3.HIDDEN;
                            var5 = var5 !== var3;
                            var3 = _closure4_slot0;
                            var6 = null;
                            var8 = var6 != var3;
                            var3 = !var8;
                            if(var8) { _fun0002_ip = 79; continue _fun0002 }
 72:
                            var8 = _closure4_slot3;
                            var3 = !var8;
 79:
                            if(var3) { _fun0002_ip = 85; continue _fun0002 }
 82:
                            var3 = var5;
 85:
                            var5 = _closure2_slot5;
                            var5 = var5.bind(var1)(var3);
                            var5 = _closure4_slot0;
                            var8 = var6 != var5;
                            var5 = var3;
                            var3 = undefined;
                            if(!var8) { _fun0002_ip = 134; continue _fun0002 }
 110:
                            var10 = _closure1_slot5;
                            var9 = var10.getParticipant;
                            var8 = _closure2_slot1;
                            var7 = _closure4_slot0;
                            var3 = var9.bind(var10)(var8, var7);
 134:
                            var7 = var6 == var3;
                            var6 = undefined;
                            if(var7) { _fun0002_ip = 148; continue _fun0002 }
 143:
                            var6 = var3.type;
 148:
                            var3 = _closure1_slot8;
                            var3 = var3.ACTIVITY;
                            var3 = var6 === var3;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 9;
                            var4 = var7[var4];
                            var6 = var6.bind(var1)(var4);
                            var4 = var6.isIOS;
                            var4 = var4.bind(var6)();
                            var6 = !var4;
                            var4 = !var6;
                            if(var6) { _fun0002_ip = 204; continue _fun0002 }
 201:
                            var4 = var3;
 204:
                            var3 = _closure2_slot8;
                            var3 = var3.bind(var1)(var4);
                            var3 = _closure2_slot7;
                            var2 = !var5;
                            if(var5) { _fun0002_ip = 226; continue _fun0002 }
 223:
                            var2 = !var4;
 226:
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var _closure3_slot0 = var6;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = {};
                var3 = 2000;
                var4['maxWait'] = var3;
                var3 = 500;
                var3 = var5.bind(var1)(var6, var3, var4);
                var _closure3_slot1 = var3;
                var _closure3_slot2 = var1;
                var1 = {};
                var3 = function cancelPendingDebounce() {
                    var2 = _closure3_slot1;
                    var1 = var2.cancel;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['cancelPendingDebounce'] = var3;
                var2 = function handleStateChange(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = arg1;
                        var4 = _closure3_slot2;
                        var2 = var3.focusedId;
                        if(!(var4 === var2)) { _fun0003_ip = 47; continue _fun0003 }
 20:
                        var4 = _closure3_slot1;
                        var2 = var4.cancel;
                        var2 = var2.bind(var4)();
                        var4 = _closure3_slot0;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        _fun0003_ip = 68; continue _fun0003;
 47:
                        var2 = var3.focusedId;
                        _closure3_slot2 = var2;
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
 68:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleStateChange'] = var2;
                return var1;
            };
            var3 = var7.bind(var8)(var2, var3);
            var2 = var3.cancelPendingDebounce;
            var _closure2_slot9 = var2;
            var11 = var3.handleStateChange;
            var _closure2_slot10 = var11;
            var7 = var8.useEffect;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = function() {
                    var2 = _closure2_slot9;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    return var1;
                };
                return var1;
            };
            var2 = var7.bind(var8)(var2, var3);
            var14 = _closure1_slot0;
            var13 = 11;
            var2 = var15[var13];
            var7 = var14.bind(var4)(var2);
            var3 = var7.useAnimatedReaction;
            var2 = function v() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = {};
                    var4 = _closure2_slot0;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = null;
                    var5 = var3 == var4;
                    var3 = undefined;
                    if(var5) { _fun0004_ip = 34; continue _fun0004 }
 29:
                    var3 = var4.id;
 34:
                    var1['focusedId'] = var3;
                    var4 = _closure2_slot2;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var1['mode'] = var3;
                    var4 = _closure2_slot3;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var3 = var3.mode;
                    var1['controlsMode'] = var3;
                    var3 = _closure2_slot4;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var2 = var2.landscape;
                    var1['landscape'] = var2;
                    return var1;
                }
            };
            var8 = {};
            var8['focused'] = var19;
            var8['mode'] = var18;
            var8['controlsSpecs'] = var17;
            var8['windowDimensions'] = var16;
            var2['__closure'] = var8;
            var8 = 2478376475717.0;
            var2['__workletHash'] = var8;
            var8 = _closure1_slot12;
            var2['__initData'] = var8;
            var1 = function u(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg1;
                    var7 = arg2;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 12;
                    var4 = var4[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.cheapWorkletShallowEqual;
                    var4 = null;
                    var8 = var4 != var7;
                    var4 = undefined;
                    if(!var8) { _fun0005_ip = 51; continue _fun0005 }
 48:
                    var4 = var7;
 51:
                    var4 = var5.bind(var6)(var3, var4);
                    if(var4) { _fun0005_ip = 102; continue _fun0005 }
 60:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 11;
                    var2 = var5[var2];
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.runOnJS;
                    var2 = _closure2_slot10;
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.bind(var1)(var3);
 102:
                    return var1;
                }
            };
            var8 = {};
            var16 = 12;
            var16 = var15[var16];
            var16 = var14.bind(var4)(var16);
            var16 = var16.cheapWorkletShallowEqual;
            var8['cheapWorkletShallowEqual'] = var16;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.runOnJS;
            var8['runOnJS'] = var13;
            var8['handleStateChange'] = var11;
            var1['__closure'] = var8;
            var8 = 3592680244658.0;
            var1['__workletHash'] = var8;
            var8 = _closure1_slot13;
            var1['__initData'] = var8;
            var1 = var3.bind(var7)(var2, var1);
            var3 = _closure1_slot11;
            var2 = _closure1_slot10;
            var1 = {};
            var7 = null;
            if(!var5) { _fun0001_ip = 531; continue _fun0001 }
 480:
            var11 = _closure1_slot9;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 13;
            var5 = var13[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var12 = !var12;
            var5['hidden'] = var12;
            var12 = 'light-content';
            var5['barStyle'] = var12;
            var7 = var11.bind(var4)(var8, var5);
 531:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 14;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['prefersHidden'] = var10;
            var6['prefersDeferringSystemGestures'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/VoicePanelSystemUIManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();