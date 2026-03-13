// app/modules/voice_panel/native/controller/usePanelOpenState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
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
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelModes;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ComponentActions;
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 'function usePanelOpenStateTsx1(){const{connected}=this.__closure;return{connected:connected.get()};}';
    var4['code'] = var7;
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'function usePanelOpenStateTsx2(props,previous){const{runOnJS,doCloseChannel}=this.__closure;const isConnected=props.connected;const wasConnected=(previous===null||previous===void 0?void 0:previous.connected)===true;if(wasConnected&&!isConnected){runOnJS(doCloseChannel)();}}';
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controller/usePanelOpenState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePanelOpenState(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var12 = arg1;
            var11 = arg2;
            var10 = arg3;
            var4 = arg4;
            var _closure2_slot0 = var12;
            var _closure2_slot1 = var11;
            var _closure2_slot2 = var10;
            var _closure2_slot3 = var4;
            var15 = function doCloseChannel() {
                var2 = _closure1_slot4;
                var1 = var2.getState;
                var3 = var1.bind(var2)();
                var2 = var3.closeChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var _closure2_slot4 = var15;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var16 = 4;
            var7 = var6[var16];
            var1 = undefined;
            var13 = var5.bind(var1)(var7);
            var9 = var13.useAnimatedReaction;
            var8 = function v() {
                var1 = {};
                var3 = _closure2_slot3;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['connected'] = var2;
                return var1;
            };
            var7 = {};
            var7['connected'] = var4;
            var8['__closure'] = var7;
            var7 = 8350408810765.0;
            var8['__workletHash'] = var7;
            var7 = _closure1_slot7;
            var8['__initData'] = var7;
            var7 = function O(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg2;
                    var1 = arg1;
                    var3 = var1.connected;
                    var1 = null;
                    var5 = var1 == var2;
                    var1 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = var2.connected;
case 2:
                    var2 = true;
                    var2 = var2 === var4;
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = !var3;
case 4:
                    if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 4;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot4;
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.bind(var1)();
case 6:
                    return var1;
                }
            };
            var14 = {};
            var16 = var6[var16];
            var16 = var5.bind(var1)(var16);
            var16 = var16.runOnJS;
            var14['runOnJS'] = var16;
            var14['doCloseChannel'] = var15;
            var7['__closure'] = var14;
            var14 = 9166012598595.0;
            var7['__workletHash'] = var14;
            var14 = _closure1_slot8;
            var7['__initData'] = var14;
            var7 = var9.bind(var13)(var8, var7);
            var7 = _closure1_slot3;
            var9 = var7.useEffect;
            var8 = new Array(4);
            var8[0] = var12;
            var8[1] = var11;
            var8[2] = var10;
            var8[3] = var4;
            var4 = function() {
                var11 = function componentActionOpen(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure2_slot0;
                        var2 = arg1;
                        var2 = var2.channelId;
                        var2 = var3 === var2;
                        if(!var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                        var4 = _closure2_slot1;
                        var3 = var4.get;
                        var4 = var3.bind(var4)();
                        var3 = _closure1_slot5;
                        var3 = var3.PANEL;
                        var2 = var4 !== var3;
case 8:
                        if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var3 = _closure2_slot2;
                        var1 = _closure1_slot5;
                        var2 = var1.PANEL;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
case 10:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot0 = var11;
                var5 = function componentActionClose() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure2_slot3;
                        var1 = var3.get;
                        var3 = var1.bind(var3)();
                        if(var3) { _fun0004_ip = 12; continue _fun0004 }
case 9:
                        var4 = _closure1_slot4;
                        var3 = var4.getState;
                        var5 = var3.bind(var4)();
                        var4 = var5.closeChannel;
                        var3 = _closure2_slot0;
                        var3 = var4.bind(var5)(var3);
                        _fun0004_ip = 13; continue _fun0004;
case 12:
                        var4 = _closure2_slot1;
                        var3 = var4.get;
                        var4 = var3.bind(var4)();
                        var3 = _closure1_slot5;
                        var3 = var3.PIP;
                        if(!(var4 !== var3)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                        var3 = _closure2_slot2;
                        var1 = _closure1_slot5;
                        var2 = var1.PIP;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
case 13:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot1 = var5;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 5;
                var8 = var7[var3];
                var4 = undefined;
                var8 = var6.bind(var4)(var8);
                var10 = var8.ComponentDispatch;
                var9 = var10.subscribe;
                var2 = _closure1_slot6;
                var8 = var2.VOICE_PANEL_OPEN;
                var8 = var9.bind(var10)(var8, var11);
                var3 = var7[var3];
                var3 = var6.bind(var4)(var3);
                var4 = var3.ComponentDispatch;
                var3 = var4.subscribe;
                var2 = var2.VOICE_PANEL_CLOSE;
                var2 = var3.bind(var4)(var2, var5);
                var1 = function() {
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var3 = var6[var4];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var10 = var3.ComponentDispatch;
                    var9 = var10.unsubscribe;
                    var3 = _closure1_slot6;
                    var8 = var3.VOICE_PANEL_OPEN;
                    var7 = _closure3_slot0;
                    var7 = var9.bind(var10)(var8, var7);
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var5 = var4.ComponentDispatch;
                    var4 = var5.unsubscribe;
                    var3 = var3.VOICE_PANEL_CLOSE;
                    var2 = _closure3_slot1;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                return var1;
            };
            var4 = var9.bind(var7)(var4, var8);
            var4 = 6;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.getRootNavigationRef;
            var9 = var4.bind(var5)();
            var5 = var7.useRef;
            var6 = null;
            var8 = var6 != var9;
            var4 = 0;
            if(!var8) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var8 = var9.isReady;
            var8 = var8.bind(var9)();
            var4 = 0;
            if(!var8) { _fun0001_ip = 15; continue _fun0001 }
case 17:
            var8 = var9.getState;
            var8 = var8.bind(var9)();
            var4 = var8.index;
case 15:
            var4 = var5.bind(var7)(var4);
            var _closure2_slot5 = var4;
            var5 = _closure1_slot3;
            var4 = var5.useRef;
            var5 = var4.bind(var5)(var1);
            var _closure2_slot6 = var5;
            var4 = var5.current;
            if(!(var6 == var4)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 7;
            var4 = var7[var4];
            var6 = var6.bind(var1)(var4);
            var4 = var6.getChatLayout;
            var4 = var4.bind(var6)();
            var4 = var4.isChatLockedOpen;
            var5['current'] = var4;
case 18:
            var5 = _closure1_slot3;
            var4 = var5.useEffect;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getRootNavigationRef;
                    var5 = var3.bind(var4)();
                    var _closure3_slot0 = var5;
                    var3 = null;
                    if(!(var3 != var5)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var3 = var5.isReady;
                    var3 = var3.bind(var5)();
                    if(var3) { _fun0005_ip = 22; continue _fun0005 }
case 20:
                    return var2;
case 22:
                    var4 = function handleStateChange(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var1 = arg1;
                            var1 = var1.data;
                            var1 = var1.state;
                            var1 = var1.index;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 7;
                            var2 = var3[var2];
                            var3 = undefined;
                            var4 = var4.bind(var3)(var2);
                            var2 = var4.getChatLayout;
                            var2 = var2.bind(var4)();
                            var4 = var2.isChatLockedOpen;
                            var6 = _closure2_slot6;
                            var6 = var6.current;
                            if(!(var6 === var4)) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                            var7 = 0;
                            if(!(!(var1 > var7))) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                            var6 = _closure2_slot5;
                            var6 = var6.current;
                            if(!(!(var6 > var7))) { _fun0006_ip = 25; continue _fun0006 }
case 27:
                            var6 = _closure2_slot5;
                            var6['current'] = var1;
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 8;
                            var5 = var7[var5];
                            var5 = var6.bind(var3)(var5);
                            var5 = var5.bind(var3)();
                            _fun0006_ip = 28; continue _fun0006;
case 25:
                            var5 = _closure2_slot5;
                            var5['current'] = var1;
case 28:
                            return var3;
case 23:
                            var3 = _closure2_slot6;
                            var3['current'] = var4;
                            var2 = _closure2_slot5;
                            var2['current'] = var1;
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure3_slot1 = var4;
                    var3 = var5.addListener;
                    var2 = 'state';
                    var2 = var3.bind(var5)(var2, var4);
                    var1 = function() {
                        var4 = _closure3_slot0;
                        var3 = var4.removeListener;
                        var2 = _closure3_slot1;
                        var1 = 'state';
                        var1 = var3.bind(var4)(var1, var2);
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                }
            };
            var2 = new Array(0);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();