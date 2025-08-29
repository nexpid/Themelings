// app/modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoController.tsx
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
    var4 = {};
    var7 = 'function useSafeAreaBottomKeyboardInfoControllerTsx1(e){const{keyboardOpenedHeight,keyboardOpenOrOpening}=this.__closure;if(e.height!==0){keyboardOpenedHeight.set(e.height);}keyboardOpenOrOpening.set(e.height!==0);}';
    var4['code'] = var7;
    var _closure1_slot3 = var4;
    var4 = {};
    var7 = 'function useSafeAreaBottomKeyboardInfoControllerTsx2(e){const{keyboardOpenOrOpening}=this.__closure;keyboardOpenOrOpening.set(e.height!==0);}';
    var4['code'] = var7;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoController.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSafeAreaBottomKeyboardInfoController() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var4 = 1;
            var5 = var2[var4];
            var6 = undefined;
            var10 = var3.bind(var6)(var5);
            var5 = var10.useSharedValue;
            var8 = 2;
            var2 = var2[var8];
            var2 = var3.bind(var6)(var2);
            var3 = var2.KeyboardController;
            var2 = var3.state;
            var2 = var2.bind(var3)();
            var3 = null;
            var9 = var3 == var2;
            var11 = undefined;
            if(var9) { _fun0001_ip = 76; continue _fun0001 }
 71:
            var11 = var2.height;
 76:
            var12 = var3 != var11;
            var9 = 0;
            var2 = 0;
            if(!var12) { _fun0001_ip = 90; continue _fun0001 }
 87:
            var2 = var11;
 90:
            var2 = var5.bind(var10)(var2);
            var _closure2_slot0 = var2;
            var11 = _closure1_slot0;
            var10 = _closure1_slot1;
            var4 = var10[var4];
            var5 = var11.bind(var6)(var4);
            var4 = var5.useSharedValue;
            var10 = var10[var8];
            var10 = var11.bind(var6)(var10);
            var11 = var10.KeyboardController;
            var10 = var11.state;
            var11 = var10.bind(var11)();
            var12 = var3 == var11;
            var10 = undefined;
            if(var12) { _fun0001_ip = 160; continue _fun0001 }
 155:
            var10 = var11.height;
 160:
            var11 = var3 != var10;
            var3 = 0;
            if(!var11) { _fun0001_ip = 172; continue _fun0001 }
 169:
            var3 = var10;
 172:
            var3 = var9 !== var3;
            var3 = var4.bind(var5)(var3);
            var _closure2_slot1 = var3;
            var10 = _closure1_slot2;
            var9 = var10.useEffect;
            var5 = new Array(2);
            var5[0] = var3;
            var5[1] = var2;
            var4 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 2;
                var6 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var9 = var6.KeyboardEvents;
                var8 = var9.addListener;
                var7 = 'keyboardWillShow';
                var6 = function(arg1) {
                    var4 = _closure2_slot1;
                    var3 = var4.set;
                    var2 = true;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot0;
                    var2 = var3.set;
                    var1 = arg1;
                    var1 = var1.height;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var6 = var8.bind(var9)(var7, var6);
                var _closure3_slot0 = var6;
                var6 = var5[var2];
                var6 = var4.bind(var3)(var6);
                var9 = var6.KeyboardEvents;
                var8 = var9.addListener;
                var7 = 'keyboardDidShow';
                var6 = function(arg1) {
                    var4 = _closure2_slot1;
                    var3 = var4.set;
                    var2 = true;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot0;
                    var2 = var3.set;
                    var1 = arg1;
                    var1 = var1.height;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var6 = var8.bind(var9)(var7, var6);
                var _closure3_slot1 = var6;
                var6 = var5[var2];
                var6 = var4.bind(var3)(var6);
                var9 = var6.KeyboardEvents;
                var8 = var9.addListener;
                var7 = 'keyboardWillHide';
                var6 = function() {
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var6 = var8.bind(var9)(var7, var6);
                var _closure3_slot2 = var6;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var5 = var2.KeyboardEvents;
                var4 = var5.addListener;
                var3 = 'keyboardDidHide';
                var2 = function() {
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot3 = var2;
                var1 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.remove;
                    var2 = var2.bind(var3)();
                    var3 = _closure3_slot1;
                    var2 = var3.remove;
                    var2 = var2.bind(var3)();
                    var3 = _closure3_slot2;
                    var2 = var3.remove;
                    var2 = var2.bind(var3)();
                    var2 = _closure3_slot3;
                    var1 = var2.remove;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var4 = var9.bind(var10)(var4, var5);
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var8];
            var6 = var5.bind(var6)(var4);
            var5 = var6.useKeyboardHandler;
            var4 = {};
            var8 = function b(arg1) {
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
            var9 = _closure1_slot3;
            var8['__initData'] = var9;
            var4['onStart'] = var8;
            var1 = function u(arg1) {
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
            var7 = _closure1_slot4;
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