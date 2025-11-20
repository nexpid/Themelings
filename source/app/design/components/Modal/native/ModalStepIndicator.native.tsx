// app/design/components/Modal/native/ModalStepIndicator.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function StepPill(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.isActive;
            var _closure2_slot0 = var7;
            var15 = var1.activeColor;
            var4 = undefined;
            if(!(var15 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.colors;
            var15 = var2.TEXT_BRAND;
case 2:
            var12 = var1.inactiveColor;
            if(!(var12 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.colors;
            var12 = var2.BG_MOD_STRONG;
case 4:
            var10 = var1.inactiveOpacity;
            if(!(var10 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = 1;
case 6:
            var _closure2_slot1 = var10;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var1 = _closure1_slot7;
            var6 = var1.bind(var4)();
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 5;
            var1 = var1[var5];
            var9 = var8.bind(var4)(var1);
            var8 = var9.useSharedValue;
            var1 = 0;
            if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = 1;
case 8:
            var13 = var8.bind(var9)(var1);
            _closure2_slot2 = var13;
            var14 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 6;
            var9 = var1[var8];
            var11 = var14.bind(var4)(var9);
            var9 = var11.useToken;
            var11 = var9.bind(var11)(var15);
            _closure2_slot3 = var11;
            var8 = var1[var8];
            var9 = var14.bind(var4)(var8);
            var8 = var9.useToken;
            var12 = var8.bind(var9)(var12);
            _closure2_slot4 = var12;
            var15 = _closure1_slot3;
            var9 = var15.useEffect;
            var8 = new Array(2);
            var8[0] = var7;
            var8[1] = var13;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var7 = 0;
                    if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var7 = 1;
case 10:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 7;
                    var5 = var5[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.withSpring;
                    var2 = _closure1_slot6;
                    var2 = var5.bind(var6)(var7, var2);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var7 = var9.bind(var15)(var7, var8);
            var7 = var1[var5];
            var8 = var14.bind(var4)(var7);
            var7 = var8.useAnimatedStyle;
            var3 = function T() {
                var1 = {};
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 5;
                var2 = var6[var3];
                var4 = undefined;
                var11 = var5.bind(var4)(var2);
                var10 = var11.interpolate;
                var8 = _closure2_slot2;
                var7 = var8.get;
                var9 = var7.bind(var8)();
                var8 = [0, 1];
                var7 = [12, 36];
                var7 = var10.bind(var11)(var9, var8, var7);
                var1['width'] = var7;
                var7 = var6[var3];
                var11 = var5.bind(var4)(var7);
                var10 = var11.interpolateColor;
                var8 = _closure2_slot2;
                var7 = var8.get;
                var9 = var7.bind(var8)();
                var7 = _closure2_slot4;
                var8 = new Array(2);
                var8[0] = var7;
                var7 = _closure2_slot3;
                var8[1] = var7;
                var7 = [0, 1];
                var7 = var10.bind(var11)(var9, var7, var8);
                var1['backgroundColor'] = var7;
                var3 = var6[var3];
                var6 = var5.bind(var4)(var3);
                var5 = var6.interpolate;
                var4 = _closure2_slot2;
                var3 = var4.get;
                var4 = var3.bind(var4)();
                var2 = _closure2_slot1;
                var3 = new Array(2);
                var3[0] = var2;
                var2 = 1;
                var3[1] = var2;
                var2 = [0, 1];
                var2 = var5.bind(var6)(var4, var2, var3);
                var1['opacity'] = var2;
                return var1;
            };
            var9 = {};
            var15 = var1[var5];
            var15 = var14.bind(var4)(var15);
            var15 = var15.interpolate;
            var9['interpolate'] = var15;
            var9['sharedValue'] = var13;
            var13 = 12;
            var9['WIDTH_INACTIVE'] = var13;
            var13 = 36;
            var9['WIDTH_ACTIVE'] = var13;
            var13 = var1[var5];
            var13 = var14.bind(var4)(var13);
            var13 = var13.interpolateColor;
            var9['interpolateColor'] = var13;
            var9['inactiveColor'] = var12;
            var9['activeColor'] = var11;
            var9['inactiveOpacity'] = var10;
            var3['__closure'] = var9;
            var9 = 12485955218699.0;
            var3['__workletHash'] = var9;
            var9 = _closure1_slot8;
            var3['__initData'] = var9;
            var7 = var7.bind(var8)(var3);
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var5 = new Array(2);
            var5[0] = var7;
            var6 = var6.stepPill;
            var5[1] = var6;
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var7 = true;
    var4['value'] = var7;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = {};
    var4['overshootClamping'] = var7;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'gap': 4};
    var4['container'] = var9;
    var9 = {'height': 4, 'borderRadius': 2};
    var4['stepPill'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'function ModalStepIndicatorNativeTsx1(){const{interpolate,sharedValue,WIDTH_INACTIVE,WIDTH_ACTIVE,interpolateColor,inactiveColor,activeColor,inactiveOpacity}=this.__closure;return{width:interpolate(sharedValue.get(),[0,1],[WIDTH_INACTIVE,WIDTH_ACTIVE]),backgroundColor:interpolateColor(sharedValue.get(),[0,1],[inactiveColor,activeColor]),opacity:interpolate(sharedValue.get(),[0,1],[inactiveOpacity,1])};}';
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Modal/native/ModalStepIndicator.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ModalStepIndicator(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var10 = var1.currentStep;
            var9 = var1.totalSteps;
            var8 = var1.activeColor;
            var7 = var1.inactiveColor;
            var3 = var1.inactiveOpacity;
            var2 = _closure1_slot7;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var5 = new Array(0);
            var2 = 0;
            var11 = var2 < var9;
            if(!var11) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var12 = var5.push;
            var14 = _closure1_slot5;
            var13 = _closure1_slot9;
            var11 = {};
            var15 = var2 === var10;
            var11['isActive'] = var15;
            var11['activeColor'] = var8;
            var11['inactiveColor'] = var7;
            var11['inactiveOpacity'] = var3;
            var11 = var14.bind(var4)(var13, var11, var2);
            var11 = var12.bind(var5)(var11);
            var2 = var2 + 1;
            if(var2 < var9) { _fun0003_ip = 13; continue _fun0003 }
case 12:
            var3 = _closure1_slot5;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var6.container;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ModalStepIndicator'] = var2;
    return var1;
})();