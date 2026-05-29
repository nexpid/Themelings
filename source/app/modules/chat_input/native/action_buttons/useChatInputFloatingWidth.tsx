// app/modules/chat_input/native/action_buttons/useChatInputFloatingWidth.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CHAT_INPUT_FLOATING_SLIDE_TIMING_CONFIG;
    var _closure1_slot3 = var4;
    var4 = {};
    var7 = 'function useChatInputFloatingWidthTsx1(){const{collapsedWidth,expandedWidth,progress}=this.__closure;return{width:collapsedWidth+(expandedWidth-collapsedWidth)*progress.get()};}';
    var4['code'] = var7;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/action_buttons/useChatInputFloatingWidth.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useChatInputFloatingWidth(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var12 = var1.expanded;
            var _closure2_slot0 = var12;
            var9 = var1.collapsedWidth;
            var _closure2_slot1 = var9;
            var8 = var1.expandedWidth;
            var _closure2_slot2 = var8;
            var1 = var1.enterDelayMs;
            var6 = undefined;
            if(!(var1 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 0;
case 2:
            var _closure2_slot3 = var1;
            var _closure2_slot4 = var6;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var10 = 2;
            var3 = var3[var10];
            var7 = var4.bind(var6)(var3);
            var4 = var7.useSharedValue;
            var3 = 0;
            if(!var12) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = 1;
case 4:
            var7 = var4.bind(var7)(var3);
            _closure2_slot4 = var7;
            var11 = _closure1_slot2;
            var4 = var11.useEffect;
            var3 = new Array(3);
            var3[0] = var12;
            var3[1] = var1;
            var3[2] = var7;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = _closure2_slot3;
                    var1 = 0;
                    if(!(!(var2 > var1))) { _fun0002_ip = 8; continue _fun0002 }
case 6:
                    var3 = _closure2_slot4;
                    var2 = var3.set;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var5 = 3;
                    var6 = var6[var5];
                    var5 = undefined;
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.withTiming;
                    var5 = _closure2_slot0;
                    var6 = 0;
                    if(!var5) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var6 = 1;
case 9:
                    var5 = _closure1_slot3;
                    var1 = 'respect-motion-settings';
                    var1 = var7.bind(var8)(var6, var5, var1);
                    var1 = var2.bind(var3)(var1);
                    _fun0002_ip = 11; continue _fun0002;
case 8:
                    var3 = _closure2_slot4;
                    var2 = var3.set;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var5 = 2;
                    var5 = var10[var5];
                    var8 = undefined;
                    var6 = var9.bind(var8)(var5);
                    var5 = var6.withDelay;
                    var4 = _closure2_slot3;
                    var7 = 3;
                    var7 = var10[var7];
                    var10 = var9.bind(var8)(var7);
                    var9 = var10.withTiming;
                    var8 = _closure1_slot3;
                    var7 = 1;
                    var1 = 'respect-motion-settings';
                    var1 = var9.bind(var10)(var7, var8, var1);
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
case 11:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var11)(var1, var3);
            var1 = {};
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var10];
            var4 = var4.bind(var6)(var3);
            var3 = var4.useAnimatedStyle;
            var2 = function p() {
                var1 = {};
                var3 = _closure2_slot1;
                var4 = _closure2_slot2;
                var4 = var4 - var3;
                var5 = _closure2_slot4;
                var2 = var5.get;
                var2 = var2.bind(var5)();
                var2 = var4 * var2;
                var2 = var3 + var2;
                var1['width'] = var2;
                return var1;
            };
            var6 = {};
            var6['collapsedWidth'] = var9;
            var6['expandedWidth'] = var8;
            var6['progress'] = var7;
            var2['__closure'] = var6;
            var6 = 2289574047387.0;
            var2['__workletHash'] = var6;
            var5 = _closure1_slot4;
            var2['__initData'] = var5;
            var2 = var3.bind(var4)(var2);
            var1['animatedStyle'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();