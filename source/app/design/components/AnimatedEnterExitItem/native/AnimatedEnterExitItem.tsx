// app/design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function AnimatedRenderItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.renderItem;
            var6 = var1.item;
            var20 = var1.shouldAnimate;
            var _closure2_slot0 = var20;
            var16 = var1.entering;
            var _closure2_slot1 = var16;
            var8 = var1.exiting;
            var _closure2_slot2 = var8;
            var19 = var1.state;
            var _closure2_slot3 = var19;
            var11 = var1.cleanUp;
            var _closure2_slot4 = var11;
            var15 = var1.useReducedMotion;
            var _closure2_slot5 = var15;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var10 = _closure1_slot0;
            var3 = _closure1_slot1;
            var14 = 2;
            var5 = var3[var14];
            var9 = var10.bind(var4)(var5);
            var5 = var9.useSharedValue;
            var18 = 3;
            var3 = var3[var18];
            var3 = var10.bind(var4)(var3);
            var3 = var3.TransitionStates;
            var10 = var3.MOUNTED;
            var3 = 0;
            if(!(var19 === var10)) { _fun0001_ip = 146; continue _fun0001 }
 143:
            var3 = 1;
 146:
            var17 = var5.bind(var9)(var3);
            _closure2_slot6 = var17;
            var10 = _closure1_slot2;
            var9 = var10.useEffect;
            var5 = new Array(2);
            var5[0] = var19;
            var5[1] = var17;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure2_slot3;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 3;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.TransitionStates;
                    var3 = var3.YEETED;
                    if(!(var4 !== var3)) { _fun0002_ip = 67; continue _fun0002 }
 48:
                    var5 = _closure2_slot6;
                    var4 = var5.set;
                    var3 = 1;
                    var3 = var4.bind(var5)(var3);
                    _fun0002_ip = 83; continue _fun0002;
 67:
                    var4 = _closure2_slot6;
                    var3 = var4.set;
                    var2 = 0;
                    var2 = var3.bind(var4)(var2);
 83:
                    return var1;
                }
            };
            var3 = var9.bind(var10)(var3, var5);
            var13 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = var12[var14];
            var9 = var13.bind(var4)(var3);
            var5 = var9.useAnimatedStyle;
            var3 = function T() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot5;
                    if(var1) { _fun0003_ip = 168; continue _fun0003 }
 13:
                    var1 = _closure2_slot0;
                    var3 = null;
                    var1 = var3 == var1;
                    var5 = undefined;
                    var4 = undefined;
                    if(var1) { _fun0003_ip = 43; continue _fun0003 }
 30:
                    var6 = _closure2_slot0;
                    var1 = var6.get;
                    var4 = var1.bind(var6)();
 43:
                    var1 = false;
                    if(!(var1 !== var4)) { _fun0003_ip = 168; continue _fun0003 }
 49:
                    var4 = _closure2_slot3;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var1 = 3;
                    var1 = var7[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.TransitionStates;
                    var1 = var1.YEETED;
                    if(!(var4 === var1)) { _fun0003_ip = 100; continue _fun0003 }
 92:
                    var1 = _closure2_slot2;
                    if(!(var3 == var1)) { _fun0003_ip = 136; continue _fun0003 }
 100:
                    var1 = _closure2_slot1;
                    if(!(var3 == var1)) { _fun0003_ip = 112; continue _fun0003 }
 108:
                    var1 = {};
                    _fun0003_ip = 134; continue _fun0003;
 112:
                    var4 = _closure2_slot1;
                    var6 = _closure2_slot6;
                    var3 = var6.get;
                    var3 = var3.bind(var6)();
                    var1 = var4.bind(var5)(var3);
 134:
                    _fun0003_ip = 166; continue _fun0003;
 136:
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot6;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var1 = arg1;
                            if(!var1) { _fun0004_ip = 52; continue _fun0004 }
 6:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 2;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot4;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
 52:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var4.bind(var5)(var3, var2);
 166:
                    _fun0003_ip = 170; continue _fun0003;
 168:
                    var1 = {};
 170:
                    return var1;
                }
            };
            var10 = {};
            var10['useReducedMotion'] = var15;
            var10['shouldAnimate'] = var20;
            var10['state'] = var19;
            var20 = var12[var18];
            var20 = var13.bind(var4)(var20);
            var20 = var20.TransitionStates;
            var10['TransitionStates'] = var20;
            var10['exiting'] = var8;
            var10['visible'] = var17;
            var20 = var12[var14];
            var20 = var13.bind(var4)(var20);
            var20 = var20.runOnJS;
            var10['runOnJS'] = var20;
            var10['cleanUp'] = var11;
            var10['entering'] = var16;
            var3['__closure'] = var10;
            var10 = 2197269661090.0;
            var3['__workletHash'] = var10;
            var10 = _closure1_slot6;
            var3['__initData'] = var10;
            var5 = var5.bind(var9)(var3);
            var3 = null;
            var16 = var3 != var8;
            _closure2_slot7 = var16;
            var3 = var12[var14];
            var9 = var13.bind(var4)(var3);
            var8 = var9.useAnimatedReaction;
            var3 = function I() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot3;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 3;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.TransitionStates;
                    var1 = var1.YEETED;
                    var1 = var2 === var1;
                    if(!var1) { _fun0005_ip = 70; continue _fun0005 }
 51:
                    var4 = _closure2_slot6;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = 0;
                    var1 = var2 === var4;
 70:
                    if(!var1) { _fun0005_ip = 90; continue _fun0005 }
 73:
                    var4 = _closure2_slot7;
                    var2 = !var4;
                    if(!var4) { _fun0005_ip = 87; continue _fun0005 }
 83:
                    var2 = _closure2_slot5;
 87:
                    var1 = var2;
 90:
                    return var1;
                }
            };
            var10 = {};
            var10['state'] = var19;
            var18 = var12[var18];
            var18 = var13.bind(var4)(var18);
            var18 = var18.TransitionStates;
            var10['TransitionStates'] = var18;
            var10['visible'] = var17;
            var10['hasExiting'] = var16;
            var10['useReducedMotion'] = var15;
            var3['__closure'] = var10;
            var10 = 11984384474891.0;
            var3['__workletHash'] = var10;
            var10 = _closure1_slot7;
            var3['__initData'] = var10;
            var2 = function v(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = arg1;
                    var1 = var3;
                    if(!var1) { _fun0006_ip = 16; continue _fun0006 }
 9:
                    var2 = arg2;
                    var1 = var3 !== var2;
 16:
                    if(!var1) { _fun0006_ip = 65; continue _fun0006 }
 19:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 2;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.runOnJS;
                    var1 = _closure2_slot4;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
 65:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = {};
            var12 = var12[var14];
            var12 = var13.bind(var4)(var12);
            var12 = var12.runOnJS;
            var10['runOnJS'] = var12;
            var10['cleanUp'] = var11;
            var2['__closure'] = var10;
            var10 = 2105667466259.0;
            var2['__workletHash'] = var10;
            var10 = _closure1_slot8;
            var2['__initData'] = var10;
            var2 = var8.bind(var9)(var3, var2);
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function renderAnimatedItem(arg1, arg2, arg3, arg4) {
        var4 = _closure1_slot5;
        var3 = _closure1_slot9;
        var2 = {};
        var6 = arg2;
        var7 = var2;
        var1 = copyDataProperties(var7, var6);
        var5 = arg1;
        var1 = 'key';
        var2[var1] = var5;
        var5 = arg3;
        var1 = 'state';
        var2[var1] = var5;
        var5 = arg4;
        var1 = 'cleanUp';
        var2[var1] = var5;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var4 = 0;
    var8 = var6[var4];
    var7 = native4;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.Fragment;
    var _closure1_slot3 = var8;
    var7 = var7.jsx;
    var _closure1_slot4 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.createElement;
    var _closure1_slot5 = var4;
    var4 = {};
    var7 = 'function AnimatedEnterExitItemTsx1(){const{useReducedMotion,shouldAnimate,state,TransitionStates,exiting,visible,runOnJS,cleanUp,entering}=this.__closure;var _shouldAnimate;if(useReducedMotion)return{};if(((_shouldAnimate=shouldAnimate)===null||_shouldAnimate===void 0?void 0:_shouldAnimate.get())===false)return{};if(state===TransitionStates.YEETED&&exiting!=null){return exiting(visible.get(),function(finished){if(finished){runOnJS(cleanUp)();}});}if(entering!=null){return entering(visible.get());}return{};}';
    var4['code'] = var7;
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 'function AnimatedEnterExitItemTsx2(){const{state,TransitionStates,visible,hasExiting,useReducedMotion}=this.__closure;return state===TransitionStates.YEETED&&visible.get()===0&&(!hasExiting||useReducedMotion);}';
    var4['code'] = var7;
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'function AnimatedEnterExitItemTsx3(hasExited,previous){const{runOnJS,cleanUp}=this.__closure;if(!hasExited||hasExited===previous)return;runOnJS(cleanUp)();}';
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AnimatedEnterExitItem(arg1) {
        var2 = arg1;
        var6 = var2.useReducedMotion;
        var _closure2_slot0 = var6;
        var10 = var2.shouldAnimate;
        var _closure2_slot1 = var10;
        var9 = var2.entering;
        var _closure2_slot2 = var9;
        var8 = var2.exiting;
        var _closure2_slot3 = var8;
        var11 = var2.item;
        var _closure2_slot4 = var11;
        var7 = var2.renderItem;
        var _closure2_slot5 = var7;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(6);
        var2[0] = var11;
        var2[1] = var10;
        var2[2] = var9;
        var2[3] = var8;
        var2[4] = var7;
        var2[5] = var6;
        var1 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = _closure2_slot4;
                var1 = null;
                if(!(var1 == var3)) { _fun0007_ip = 17; continue _fun0007 }
 13:
                var1 = undefined;
                return var1;
 17:
                var1 = {};
                var3 = _closure2_slot1;
                var1['shouldAnimate'] = var3;
                var3 = _closure2_slot2;
                var1['entering'] = var3;
                var3 = _closure2_slot3;
                var1['exiting'] = var3;
                var3 = _closure2_slot5;
                var1['renderItem'] = var3;
                var3 = _closure2_slot4;
                var1['item'] = var3;
                var2 = _closure2_slot0;
                var1['useReducedMotion'] = var2;
                return var1;
            }
        };
        var6 = var3.bind(var4)(var1, var2);
        var4 = _closure1_slot4;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 3;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.TransitionItem;
        var1 = {};
        var1['item'] = var6;
        var5 = _closure1_slot10;
        var1['renderItem'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();