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
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelModes;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ComponentActions;
    var _closure1_slot7 = var7;
    var4 = var4.Routes;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 'function usePanelOpenStateTsx1(){const{connected}=this.__closure;return{connected:connected.get()};}';
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function usePanelOpenStateTsx2(props,previous){const{runOnJS,doCloseChannel}=this.__closure;const isConnected=props.connected;const wasConnected=(previous===null||previous===void 0?void 0:previous.connected)===true;if(wasConnected&&!isConnected){runOnJS(doCloseChannel)();}}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controller/usePanelOpenState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePanelOpenState(arg1, arg2, arg3, arg4) {
        var7 = arg1;
        var10 = arg2;
        var9 = arg3;
        var4 = arg4;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var10;
        var _closure2_slot2 = var9;
        var _closure2_slot3 = var4;
        var13 = function doCloseChannel() {
            var2 = _closure1_slot5;
            var1 = var2.getState;
            var3 = var1.bind(var2)();
            var2 = var3.closeChannel;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var _closure2_slot4 = var13;
        var15 = _closure1_slot0;
        var16 = _closure1_slot2;
        var14 = 5;
        var5 = var16[var14];
        var1 = undefined;
        var11 = var15.bind(var1)(var5);
        var8 = var11.useAnimatedReaction;
        var6 = function v() {
            var1 = {};
            var3 = _closure2_slot3;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var1['connected'] = var2;
            return var1;
        };
        var5 = {};
        var5['connected'] = var4;
        var6['__closure'] = var5;
        var5 = 8350408810765.0;
        var6['__workletHash'] = var5;
        var5 = _closure1_slot9;
        var6['__initData'] = var5;
        var5 = function O(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = arg2;
                var1 = arg1;
                var3 = var1.connected;
                var1 = null;
                var5 = var1 == var2;
                var1 = undefined;
                var4 = undefined;
                if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = var2.connected;
case 2:
                var2 = true;
                var2 = var2 === var4;
                if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = !var3;
case 4:
                if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 5;
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
        var12 = {};
        var14 = var16[var14];
        var14 = var15.bind(var1)(var14);
        var14 = var14.runOnJS;
        var12['runOnJS'] = var14;
        var12['doCloseChannel'] = var13;
        var5['__closure'] = var12;
        var12 = 9166012598595.0;
        var5['__workletHash'] = var12;
        var12 = _closure1_slot10;
        var5['__initData'] = var12;
        var5 = var8.bind(var11)(var6, var5);
        var5 = _closure1_slot4;
        var8 = var5.useEffect;
        var6 = new Array(4);
        var6[0] = var7;
        var6[1] = var10;
        var6[2] = var9;
        var6[3] = var4;
        var4 = function() {
            var11 = function componentActionOpen(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = arg1;
                    var2 = var2.channelId;
                    var2 = var3 === var2;
                    if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = _closure2_slot1;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = _closure1_slot6;
                    var3 = var3.PANEL;
                    var2 = var4 !== var3;
case 8:
                    if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var3 = _closure2_slot2;
                    var1 = _closure1_slot6;
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
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    if(var3) { _fun0003_ip = 12; continue _fun0003 }
case 9:
                    var4 = _closure1_slot5;
                    var3 = var4.getState;
                    var5 = var3.bind(var4)();
                    var4 = var5.closeChannel;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    _fun0003_ip = 13; continue _fun0003;
case 12:
                    var4 = _closure2_slot1;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = _closure1_slot6;
                    var3 = var3.PIP;
                    if(!(var4 !== var3)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var3 = _closure2_slot2;
                    var1 = _closure1_slot6;
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
            var3 = 6;
            var8 = var7[var3];
            var4 = undefined;
            var8 = var6.bind(var4)(var8);
            var10 = var8.ComponentDispatch;
            var9 = var10.subscribe;
            var2 = _closure1_slot7;
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
                var4 = 6;
                var3 = var6[var4];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var10 = var3.ComponentDispatch;
                var9 = var10.unsubscribe;
                var3 = _closure1_slot7;
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
        var4 = var8.bind(var5)(var4, var6);
        var6 = var5.useState;
        var4 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.getHistory;
            var1 = var1.bind(var2)();
            var1 = var1.location;
            var1 = var1.pathname;
            return var1;
        };
        var6 = var6.bind(var5)(var4);
        var4 = _closure1_slot3;
        var3 = 2;
        var4 = var4.bind(var1)(var6, var3);
        var3 = 0;
        var6 = var4[var3];
        var _closure2_slot5 = var6;
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot6 = var3;
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.addRouteChangeListener;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var7 = arg1;
                    var2 = _closure2_slot5;
                    var1 = var7.pathname;
                    if(!(var2 !== var1)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var3 = _closure2_slot6;
                    var1 = _closure2_slot5;
                    var2 = undefined;
                    var1 = var3.bind(var2)(var1);
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 8;
                    var3 = var8[var3];
                    var10 = var6.bind(var2)(var3);
                    var9 = var10.matchPath;
                    var5 = var7.pathname;
                    var3 = {};
                    var14 = _closure1_slot8;
                    var13 = var14.CHANNEL;
                    var11 = 9;
                    var12 = var8[var11];
                    var12 = var6.bind(var2)(var12);
                    var15 = var12.RouteParam;
                    var12 = var15.guildId;
                    var12 = var12.bind(var15)();
                    var11 = var8[var11];
                    var11 = var6.bind(var2)(var11);
                    var15 = var11.RouteParam;
                    var11 = var15.channelId;
                    var11 = var11.bind(var15)();
                    var11 = var13.bind(var14)(var12, var11);
                    var3['path'] = var11;
                    var5 = var9.bind(var10)(var5, var3);
                    var3 = 10;
                    var3 = var8[var3];
                    var6 = var6.bind(var2)(var3);
                    var3 = var6.extractParamsFromVoiceModalRoute;
                    var3 = var3.bind(var6)(var7);
                    var6 = var3.voiceChannelId;
                    var3 = null;
                    if(!(var3 == var6)) { _fun0004_ip = 15; continue _fun0004 }
case 17:
                    var3 = var3 != var5;
                    if(!var3) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var5 = var5.params;
                    var5 = var5.channelId;
                    var4 = _closure2_slot0;
                    var3 = var5 === var4;
case 18:
                    if(var3) { _fun0004_ip = 15; continue _fun0004 }
case 20:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 11;
                    var1 = var4[var1];
                    var1 = var3.bind(var2)(var1);
                    var1 = var1.bind(var2)();
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.removeRouteChangeListener;
                var2 = _closure3_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();