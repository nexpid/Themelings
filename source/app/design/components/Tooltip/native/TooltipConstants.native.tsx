// app/design/components/Tooltip/native/TooltipConstants.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = {'overshootClamping': true, 'damping': 35, 'stiffness': 450, 'mass': 0.5, 'restDisplacementThreshold': 0.001};
    var _closure1_slot2 = var1;
    var1 = {};
    var6 = "function TooltipConstantsNativeTsx1(visible,cleanUp){const{withSpring,translateY,TOOLTIP_SPRING}=this.__closure;return{transform:[{translateY:withSpring(visible===1?0:translateY,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)}],opacity:withSpring(visible,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)};}";
    var1['code'] = var6;
    var _closure1_slot3 = var1;
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Tooltip/native/TooltipConstants.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function tooltipEnterExitAnimation(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = -8;
            var3 = 'top';
            var2 = arg1;
            if(!(var3 === var2)) { _fun0001_ip = 22; continue _fun0001 }
 19:
            var4 = 8;
 22:
            var _closure2_slot0 = var4;
            var1 = function o(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var7 = arg1;
                    var6 = arg2;
                    var1 = {};
                    var10 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var9 = 0;
                    var3 = var3[var9];
                    var8 = undefined;
                    var12 = var4.bind(var8)(var3);
                    var11 = var12.withSpring;
                    var4 = 1;
                    var3 = 0;
                    if(!(var4 !== var7)) { _fun0002_ip = 55; continue _fun0002 }
 48:
                    var3 = _closure2_slot0;
 55:
                    var5 = _closure1_slot2;
                    var4 = 'respect-motion-settings';
                    var17 = var12;
                    var16 = var3;
                    var15 = var5;
                    var14 = var4;
                    var13 = var6;
                    var3 = var17[var11](var16, var15, var14, var13, var12);
                    var10['translateY'] = var3;
                    var3 = new Array(1);
                    var3[0] = var10;
                    var1['transform'] = var3;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var9];
                    var3 = var3.bind(var8)(var2);
                    var2 = var3.withSpring;
                    var17 = var3;
                    var16 = var7;
                    var15 = var5;
                    var13 = var6;
                    var2 = var17[var2](var16, var15, var14, var13, var12);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var3 = {};
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var5 = 0;
            var6 = var6[var5];
            var5 = undefined;
            var5 = var7.bind(var5)(var6);
            var5 = var5.withSpring;
            var3['withSpring'] = var5;
            var3['translateY'] = var4;
            var4 = _closure1_slot2;
            var3['TOOLTIP_SPRING'] = var4;
            var1['__closure'] = var3;
            var3 = 7727487832145.0;
            var1['__workletHash'] = var3;
            var2 = _closure1_slot3;
            var1['__initData'] = var2;
            return var1;
        }
    };
    var3['tooltipEnterExitAnimation'] = var2;
    return var1;
})();