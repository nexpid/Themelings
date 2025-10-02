// app/modules/chat_input/native/action_buttons/ChatInputActionButtonTransitionItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CHAT_INPUT_TIMING_CONFIG;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = {};
    var7 = 'function ChatInputActionButtonTransitionItemTsx1(finished){const{state,TransitionStates,runOnJS,cleanup}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanup)();}}';
    var4['code'] = var7;
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = "function ChatInputActionButtonTransitionItemTsx2(){const{visible}=this.__closure;return{position:'absolute',opacity:visible.get()};}";
    var4['code'] = var7;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/action_buttons/ChatInputActionButtonTransitionItem.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChatInputActionButtonTransitionItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var11 = var2.state;
            var _closure2_slot0 = var11;
            var1 = var2.cleanup;
            var _closure2_slot1 = var1;
            var5 = var2.children;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 3;
            var6 = var12[var7];
            var9 = var10.bind(var4)(var6);
            var8 = var9.useSharedValue;
            var6 = 4;
            var6 = var12[var6];
            var6 = var10.bind(var4)(var6);
            var6 = var6.TransitionStates;
            var10 = var6.MOUNTED;
            var6 = 0;
            if(!(var11 === var10)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = 1;
case 2:
            var10 = var8.bind(var9)(var6);
            _closure2_slot2 = var10;
            var9 = _closure1_slot3;
            var8 = var9.useEffect;
            var6 = new Array(3);
            var6[0] = var11;
            var6[1] = var10;
            var6[2] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = function withTimingExtended(arg1) {
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var2 = 5;
                        var2 = var11[var2];
                        var9 = undefined;
                        var6 = var10.bind(var9)(var2);
                        var5 = var6.withTiming;
                        var14 = _closure1_slot4;
                        var3 = function s(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                var1 = arg1;
                                if(!var1) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                                var3 = _closure2_slot0;
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 4;
                                var4 = var4[var2];
                                var2 = undefined;
                                var2 = var5.bind(var2)(var4);
                                var2 = var2.TransitionStates;
                                var2 = var2.YEETED;
                                var1 = var3 === var2;
case 4:
                                if(!var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 3;
                                var1 = var2[var1];
                                var2 = undefined;
                                var4 = var3.bind(var2)(var1);
                                var3 = var4.runOnJS;
                                var1 = _closure2_slot1;
                                var1 = var3.bind(var4)(var1);
                                var1 = var1.bind(var2)();
case 6:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = {};
                        var8 = _closure2_slot0;
                        var2['state'] = var8;
                        var8 = 4;
                        var8 = var11[var8];
                        var8 = var10.bind(var9)(var8);
                        var8 = var8.TransitionStates;
                        var2['TransitionStates'] = var8;
                        var8 = 3;
                        var8 = var11[var8];
                        var8 = var10.bind(var9)(var8);
                        var8 = var8.runOnJS;
                        var2['runOnJS'] = var8;
                        var7 = _closure2_slot1;
                        var2['cleanup'] = var7;
                        var3['__closure'] = var2;
                        var2 = 12906909829034.0;
                        var3['__workletHash'] = var2;
                        var1 = _closure1_slot6;
                        var3['__initData'] = var1;
                        var15 = arg1;
                        var13 = 'respect-motion-settings';
                        var16 = var6;
                        var12 = var3;
                        var1 = var16[var5](var15, var14, var13, var12, var11);
                        return var1;
                    };
                    var4 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 4;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.TransitionStates;
                    var3 = var3.YEETED;
                    if(!(var4 !== var3)) { _fun0002_ip = 8; continue _fun0002 }
case 7:
                    var6 = _closure2_slot2;
                    var4 = var6.set;
                    var3 = 1;
                    var3 = var5.bind(var1)(var3);
                    var3 = var4.bind(var6)(var3);
                    _fun0002_ip = 9; continue _fun0002;
case 8:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var2 = 0;
                    var2 = var5.bind(var1)(var2);
                    var2 = var3.bind(var4)(var2);
case 9:
                    return var1;
                }
            };
            var1 = var8.bind(var9)(var1, var6);
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = var1[var7];
            var8 = var8.bind(var4)(var6);
            var6 = var8.useAnimatedStyle;
            var3 = function h() {
                var1 = {};
                var2 = 'absolute';
                var1['position'] = var2;
                var3 = _closure2_slot2;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['opacity'] = var2;
                return var1;
            };
            var9 = {};
            var9['visible'] = var10;
            var3['__closure'] = var9;
            var9 = 3978594527196.0;
            var3['__workletHash'] = var9;
            var9 = _closure1_slot7;
            var3['__initData'] = var9;
            var6 = var6.bind(var8)(var3);
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var1 = var1[var7];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();