// app/modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoController.tsx
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
    var1 = {};
    var6 = 'function useSafeAreaBottomKeyboardInfoControllerTsx1(e){const{keyboardOpenedHeight,keyboardOpenOrOpening}=this.__closure;if(e.height!==0){keyboardOpenedHeight.set(e.height);}keyboardOpenOrOpening.set(e.height!==0);}';
    var1['code'] = var6;
    var _closure1_slot2 = var1;
    var1 = {};
    var6 = 'function useSafeAreaBottomKeyboardInfoControllerTsx2(e){const{keyboardOpenOrOpening}=this.__closure;keyboardOpenOrOpening.set(e.height!==0);}';
    var1['code'] = var6;
    var _closure1_slot3 = var1;
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoController.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSafeAreaBottomKeyboardInfoController() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var9 = 0;
            var4 = var2[var9];
            var6 = undefined;
            var5 = var3.bind(var6)(var4);
            var4 = var5.useSharedValue;
            var8 = 1;
            var2 = var2[var8];
            var2 = var3.bind(var6)(var2);
            var3 = var2.KeyboardController;
            var2 = var3.state;
            var2 = var2.bind(var3)();
            var3 = null;
            var11 = var3 == var2;
            var10 = undefined;
            if(var11) { _fun0001_ip = 74; continue _fun0001 }
 69:
            var10 = var2.height;
 74:
            var11 = var3 != var10;
            var2 = 0;
            if(!var11) { _fun0001_ip = 86; continue _fun0001 }
 83:
            var2 = var10;
 86:
            var2 = var4.bind(var5)(var2);
            var _closure2_slot0 = var2;
            var11 = _closure1_slot0;
            var10 = _closure1_slot1;
            var4 = var10[var9];
            var5 = var11.bind(var6)(var4);
            var4 = var5.useSharedValue;
            var10 = var10[var8];
            var10 = var11.bind(var6)(var10);
            var11 = var10.KeyboardController;
            var10 = var11.state;
            var11 = var10.bind(var11)();
            var12 = var3 == var11;
            var10 = undefined;
            if(var12) { _fun0001_ip = 155; continue _fun0001 }
 150:
            var10 = var11.height;
 155:
            var11 = var3 != var10;
            var3 = 0;
            if(!var11) { _fun0001_ip = 167; continue _fun0001 }
 164:
            var3 = var10;
 167:
            var3 = var9 !== var3;
            var3 = var4.bind(var5)(var3);
            var _closure2_slot1 = var3;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var8];
            var6 = var5.bind(var6)(var4);
            var5 = var6.useKeyboardHandler;
            var4 = {};
            var8 = function u(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.height;
                    var4 = 0;
                    if(!(var4 !== var2)) { _fun0002_ip = 36; continue _fun0002 }
 14:
                    var5 = _closure2_slot0;
                    var3 = var5.set;
                    var2 = var1.height;
                    var2 = var3.bind(var5)(var2);
 36:
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var1 = var1.height;
                    var1 = var4 !== var1;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = {};
            var9['keyboardOpenedHeight'] = var2;
            var9['keyboardOpenOrOpening'] = var3;
            var8['__closure'] = var9;
            var9 = 4783149037264.0;
            var8['__workletHash'] = var9;
            var9 = _closure1_slot2;
            var8['__initData'] = var9;
            var4['onStart'] = var8;
            var1 = function h(arg1) {
                var3 = _closure2_slot1;
                var2 = var3.set;
                var1 = arg1;
                var4 = var1.height;
                var1 = 0;
                var1 = var1 !== var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var8 = {};
            var8['keyboardOpenOrOpening'] = var3;
            var1['__closure'] = var8;
            var8 = 1708981016368.0;
            var1['__workletHash'] = var8;
            var7 = _closure1_slot3;
            var1['__initData'] = var7;
            var4['onEnd'] = var1;
            var1 = new Array(0);
            var1 = var5.bind(var6)(var4, var1);
            var1 = {};
            var1['keyboardOpenOrOpening'] = var3;
            var1['keyboardOpenedHeight'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();