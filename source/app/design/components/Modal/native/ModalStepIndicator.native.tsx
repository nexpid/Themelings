// app/design/components/Modal/native/ModalStepIndicator.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var1 = function StepPill(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.isActive;
            var _closure2_slot0 = var1;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var5 = _closure1_slot7;
            var6 = var5.bind(var4)();
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 5;
            var7 = var7[var5];
            var9 = var8.bind(var4)(var7);
            var8 = var9.useSharedValue;
            var7 = 0;
            if(!var1) { _fun0001_ip = 73; continue _fun0001 }
 70:
            var7 = 1;
 73:
            var12 = var8.bind(var9)(var7);
            _closure2_slot1 = var12;
            var7 = _closure1_slot8;
            var7 = var7.bind(var4)();
            var10 = var7.activeColor;
            _closure2_slot2 = var10;
            var11 = var7.inactiveColor;
            _closure2_slot3 = var11;
            var9 = _closure1_slot3;
            var8 = var9.useEffect;
            var7 = new Array(2);
            var7[0] = var1;
            var7[1] = var12;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot0;
                    var7 = 0;
                    if(!var2) { _fun0002_ip = 15; continue _fun0002 }
 12:
                    var7 = 1;
 15:
                    var4 = _closure2_slot1;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 6;
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
            var1 = var8.bind(var9)(var1, var7);
            var13 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = var1[var5];
            var8 = var13.bind(var4)(var7);
            var7 = var8.useAnimatedStyle;
            var3 = function I() {
                var1 = {};
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 5;
                var2 = var6[var3];
                var4 = undefined;
                var11 = var5.bind(var4)(var2);
                var10 = var11.interpolate;
                var8 = _closure2_slot1;
                var7 = var8.get;
                var9 = var7.bind(var8)();
                var8 = [0, 1];
                var7 = [12, 36];
                var7 = var10.bind(var11)(var9, var8, var7);
                var1['width'] = var7;
                var3 = var6[var3];
                var6 = var5.bind(var4)(var3);
                var5 = var6.interpolateColor;
                var4 = _closure2_slot1;
                var3 = var4.get;
                var4 = var3.bind(var4)();
                var7 = _closure2_slot3;
                var3 = new Array(2);
                var3[0] = var7;
                var2 = _closure2_slot2;
                var3[1] = var2;
                var2 = [0, 1];
                var2 = var5.bind(var6)(var4, var2, var3);
                var1['backgroundColor'] = var2;
                return var1;
            };
            var9 = {};
            var14 = var1[var5];
            var14 = var13.bind(var4)(var14);
            var14 = var14.interpolate;
            var9['interpolate'] = var14;
            var9['sharedValue'] = var12;
            var12 = 12;
            var9['WIDTH_INACTIVE'] = var12;
            var12 = 36;
            var9['WIDTH_ACTIVE'] = var12;
            var12 = var1[var5];
            var12 = var13.bind(var4)(var12);
            var12 = var12.interpolateColor;
            var9['interpolateColor'] = var12;
            var9['inactiveColor'] = var11;
            var9['activeColor'] = var10;
            var3['__closure'] = var9;
            var9 = 607318056197.0;
            var3['__workletHash'] = var9;
            var9 = _closure1_slot9;
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
    var _closure1_slot10 = var1;
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
    var7 = var6[var4];
    var11 = var5.bind(var1)(var7);
    var8 = var11.createStyles;
    var7 = {};
    var9 = 4;
    var12 = {'flexDirection': 'row', 'gap': 4};
    var7['container'] = var12;
    var12 = {'height': 4, 'borderRadius': 2};
    var7['stepPill'] = var12;
    var7 = var8.bind(var11)(var7);
    var _closure1_slot7 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyleProperties;
    var4 = {};
    var11 = var6[var9];
    var11 = var10.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_BRAND;
    var4['activeColor'] = var11;
    var9 = var6[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.colors;
    var9 = var9.BG_MOD_STRONG;
    var4['inactiveColor'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 'function ModalStepIndicatorNativeTsx1(){const{interpolate,sharedValue,WIDTH_INACTIVE,WIDTH_ACTIVE,interpolateColor,inactiveColor,activeColor}=this.__closure;return{width:interpolate(sharedValue.get(),[0,1],[WIDTH_INACTIVE,WIDTH_ACTIVE]),backgroundColor:interpolateColor(sharedValue.get(),[0,1],[inactiveColor,activeColor])};}';
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Modal/native/ModalStepIndicator.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ModalStepIndicator(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var7 = var1.currentStep;
            var3 = var1.totalSteps;
            var2 = _closure1_slot7;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var5 = new Array(0);
            var2 = 0;
            var8 = var2 < var3;
            if(!var8) { _fun0003_ip = 84; continue _fun0003 }
 41:
            var9 = var5.push;
            var11 = _closure1_slot5;
            var10 = _closure1_slot10;
            var8 = {};
            var12 = var2 === var7;
            var8['isActive'] = var12;
            var8 = var11.bind(var4)(var10, var8, var2);
            var8 = var9.bind(var5)(var8);
            var2 = var2 + 1;
            if(var2 < var3) { _fun0003_ip = 41; continue _fun0003 }
 84:
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