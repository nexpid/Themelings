// app/modules/modals/native/useModalPanGesture.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = {};
    var6 = "function useModalPanGestureTsx1({velocityY:velocityY}){const{translateY,thresholdTranslate,thresholdVelocity,withSpring,height,runOnJS,ModalActionCreators,onClose,onEnd}=this.__closure;const config={damping:15,mass:1,stiffness:250,overshootClamping:true,restSpeedThreshold:0.001,restDisplacementThreshold:0.001,velocity:velocityY};if(translateY.get()>=thresholdTranslate||velocityY>=thresholdVelocity){translateY.set(withSpring(height,config,'respect-motion-settings',function(){runOnJS(ModalActionCreators.pop)();}));if(onClose!=null){runOnJS(onClose)();}}else{translateY.set(withSpring(0,config));}if(onEnd!=null){runOnJS(onEnd)();}}";
    var1['code'] = var6;
    var _closure1_slot3 = var1;
    var1 = {};
    var6 = 'function useModalPanGestureTsx2({translationY:translationY}){const{translateY,interpolate,start,maxTranslate,Extrapolate}=this.__closure;translateY.set(interpolate(start.get().y+translationY,[0,maxTranslate],[0,maxTranslate],Extrapolate.CLAMP));}';
    var1['code'] = var6;
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = 'function useModalPanGestureTsx3(){const{onStart,runOnJS,start,translateY}=this.__closure;if(onStart!=null){runOnJS(onStart)();}start.set({y:translateY.get()});}';
    var1['code'] = var6;
    var _closure1_slot5 = var1;
    var1 = {};
    var6 = 'function useModalPanGestureTsx4(){const{runOnJS,ModalActionCreators}=this.__closure;runOnJS(ModalActionCreators.pop)();}';
    var1['code'] = var6;
    var _closure1_slot6 = var1;
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/modals/native/useModalPanGesture.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useModalPanGesture(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var13 = var2.thresholdVelocity;
            var10 = undefined;
            if(!(var13 === var10)) { _fun0001_ip = 23; continue _fun0001 }
 17:
            var13 = 500;
 23:
            var _closure2_slot0 = var13;
            var5 = var2.gestureEnabled;
            var17 = var2.maxTranslate;
            var _closure2_slot1 = var17;
            var14 = var2.thresholdTranslate;
            var _closure2_slot2 = var14;
            var12 = var2.height;
            var _closure2_slot3 = var12;
            var15 = var2.translateY;
            var _closure2_slot4 = var15;
            var19 = var2.onStart;
            var _closure2_slot5 = var19;
            var6 = var2.onEnd;
            var _closure2_slot6 = var6;
            var7 = var2.onClose;
            var _closure2_slot7 = var7;
            var _closure2_slot8 = var10;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 0;
            var2 = var11[var8];
            var16 = var9.bind(var10)(var2);
            var3 = var16.useSharedValue;
            var2 = {};
            var2['y'] = var8;
            var18 = var3.bind(var16)(var2);
            _closure2_slot8 = var18;
            var2 = 1;
            var2 = var11[var2];
            var2 = var9.bind(var10)(var2);
            var3 = var2.Gesture;
            var2 = var3.Pan;
            var3 = var2.bind(var3)();
            var2 = var3.enabled;
            var5 = var2.bind(var3)(var5);
            var3 = var5.onStart;
            var2 = function J() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 55; continue _fun0002 }
 13:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 0;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var3.bind(var2)(var1);
                    var3 = var5.runOnJS;
                    var1 = _closure2_slot5;
                    var1 = var3.bind(var5)(var1);
                    var1 = var1.bind(var2)();
 55:
                    var3 = _closure2_slot8;
                    var2 = var3.set;
                    var1 = {};
                    var5 = _closure2_slot4;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var1['y'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = {};
            var16['onStart'] = var19;
            var19 = var11[var8];
            var19 = var9.bind(var10)(var19);
            var19 = var19.runOnJS;
            var16['runOnJS'] = var19;
            var16['start'] = var18;
            var16['translateY'] = var15;
            var2['__closure'] = var16;
            var16 = 15847989720945.0;
            var2['__workletHash'] = var16;
            var16 = _closure1_slot5;
            var2['__initData'] = var16;
            var5 = var3.bind(var5)(var2);
            var3 = var5.onUpdate;
            var2 = function x(arg1) {
                var1 = arg1;
                var7 = var1.translationY;
                var4 = _closure2_slot4;
                var3 = var4.set;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 0;
                var6 = var11[var2];
                var1 = undefined;
                var9 = var10.bind(var1)(var6);
                var8 = var9.interpolate;
                var12 = _closure2_slot8;
                var6 = var12.get;
                var6 = var6.bind(var12)();
                var6 = var6.y;
                var7 = var6 + var7;
                var12 = _closure2_slot1;
                var6 = [0];
                var6[1] = var12;
                var5 = [0];
                var5[1] = var12;
                var2 = var11[var2];
                var2 = var10.bind(var1)(var2);
                var2 = var2.Extrapolate;
                var13 = var2.CLAMP;
                var17 = var9;
                var16 = var7;
                var15 = var6;
                var14 = var5;
                var2 = var17[var8](var16, var15, var14, var13, var12);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var16 = {};
            var16['translateY'] = var15;
            var19 = var11[var8];
            var19 = var9.bind(var10)(var19);
            var19 = var19.interpolate;
            var16['interpolate'] = var19;
            var16['start'] = var18;
            var16['maxTranslate'] = var17;
            var17 = var11[var8];
            var17 = var9.bind(var10)(var17);
            var17 = var17.Extrapolate;
            var16['Extrapolate'] = var17;
            var2['__closure'] = var16;
            var16 = 6809176231356.0;
            var2['__workletHash'] = var16;
            var16 = _closure1_slot4;
            var2['__initData'] = var16;
            var3 = var3.bind(var5)(var2);
            var2 = var3.onEnd;
            var1 = function O(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.velocityY;
                    var12 = {'damping': 15, 'mass': 1, 'stiffness': 250, 'overshootClamping': true, 'restSpeedThreshold': 0.001, 'restDisplacementThreshold': 0.001};
                    var12['velocity'] = var3;
                    var4 = _closure2_slot4;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = _closure2_slot2;
                    if(!(!(var4 >= var2))) { _fun0003_ip = 117; continue _fun0003 }
 52:
                    var2 = _closure2_slot0;
                    if(!(!(var3 >= var2))) { _fun0003_ip = 117; continue _fun0003 }
 60:
                    var4 = _closure2_slot4;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 2;
                    var5 = var5[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.withSpring;
                    var2 = 0;
                    var2 = var5.bind(var6)(var2, var12);
                    var2 = var3.bind(var4)(var2);
                    _fun0003_ip = 316; continue _fun0003;
 117:
                    var7 = _closure2_slot4;
                    var6 = var7.set;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var3 = 2;
                    var4 = var15[var3];
                    var3 = undefined;
                    var11 = var14.bind(var3)(var4);
                    var10 = var11.withSpring;
                    var9 = _closure2_slot3;
                    var8 = function n() {
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 0;
                        var3 = var6[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.runOnJS;
                        var5 = _closure1_slot1;
                        var2 = 3;
                        var2 = var6[var2];
                        var2 = var5.bind(var1)(var2);
                        var2 = var2.pop;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var4 = {};
                    var5 = 0;
                    var13 = var15[var5];
                    var13 = var14.bind(var3)(var13);
                    var13 = var13.runOnJS;
                    var4['runOnJS'] = var13;
                    var14 = _closure1_slot1;
                    var13 = 3;
                    var13 = var15[var13];
                    var13 = var14.bind(var3)(var13);
                    var4['ModalActionCreators'] = var13;
                    var8['__closure'] = var4;
                    var4 = 14223008059411.0;
                    var8['__workletHash'] = var4;
                    var4 = _closure1_slot6;
                    var8['__initData'] = var4;
                    var17 = 'respect-motion-settings';
                    var20 = var11;
                    var19 = var9;
                    var18 = var12;
                    var16 = var8;
                    var4 = var20[var10](var19, var18, var17, var16, var15);
                    var4 = var6.bind(var7)(var4);
                    var6 = _closure2_slot7;
                    var4 = null;
                    if(!(var4 != var6)) { _fun0003_ip = 316; continue _fun0003 }
 281:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.runOnJS;
                    var2 = _closure2_slot7;
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.bind(var3)();
 316:
                    var3 = _closure2_slot6;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 368; continue _fun0003 }
 326:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 0;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.runOnJS;
                    var1 = _closure2_slot6;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
 368:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = {};
            var5['translateY'] = var15;
            var5['thresholdTranslate'] = var14;
            var5['thresholdVelocity'] = var13;
            var13 = 2;
            var13 = var11[var13];
            var13 = var9.bind(var10)(var13);
            var13 = var13.withSpring;
            var5['withSpring'] = var13;
            var5['height'] = var12;
            var8 = var11[var8];
            var8 = var9.bind(var10)(var8);
            var8 = var8.runOnJS;
            var5['runOnJS'] = var8;
            var9 = _closure1_slot1;
            var8 = 3;
            var8 = var11[var8];
            var8 = var9.bind(var10)(var8);
            var5['ModalActionCreators'] = var8;
            var5['onClose'] = var7;
            var5['onEnd'] = var6;
            var1['__closure'] = var5;
            var5 = 16881029664873.0;
            var1['__workletHash'] = var5;
            var4 = _closure1_slot3;
            var1['__initData'] = var4;
            var3 = var2.bind(var3)(var1);
            var2 = var3.failOffsetY;
            var1 = -0.01;
            var3 = var2.bind(var3)(var1);
            var2 = var3.activeOffsetY;
            var1 = new Array(2);
            var4 = -5;
            var1[0] = var4;
            var4 = 15;
            var1[1] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();