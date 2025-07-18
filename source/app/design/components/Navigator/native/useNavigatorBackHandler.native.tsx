// app/design/components/Navigator/native/useNavigatorBackHandler.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = {};
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Navigator/native/useNavigatorBackHandler.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useNavigatorBackHandler() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arguments[0];
            var5 = undefined;
            if(!(var2 === var5)) { _fun0001_ip = 18; continue _fun0001 }
 11:
            var2 = _closure1_slot3;
 18:
            var6 = var2.onBeforeGoBack;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 1;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useNavigation;
            var7 = var3.bind(var4)();
            _closure2_slot1 = var7;
            var5 = _closure1_slot2;
            var3 = var5.useRef;
            var2 = true;
            var2 = var3.bind(var5)(var2);
            _closure2_slot2 = var2;
            var4 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var7;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = arguments[0];
                    var1 = undefined;
                    if(!(var4 === var1)) { _fun0002_ip = 11; continue _fun0002 }
 9:
                    var4 = false;
 11:
                    var3 = _closure2_slot2;
                    var3['current'] = var4;
                    var3 = _closure2_slot1;
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            var4 = var5.useEffect;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var1 = function() {
                var4 = _closure2_slot1;
                var3 = var4.addListener;
                var2 = 'beforeRemove';
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = arg1;
                        var _closure4_slot0 = var3;
                        var4 = _closure2_slot2;
                        var4 = var4.current;
                        if(!var4) { _fun0003_ip = 170; continue _fun0003 }
 27:
                        var3 = var3.data;
                        var3 = var3.action;
                        var4 = var3.type;
                        var3 = 'POP';
                        if(!(var3 === var4)) { _fun0003_ip = 90; continue _fun0003 }
 52:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var3 = 2;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.isIOS;
                        var4 = var4.bind(var5)();
                        if(var4) { _fun0003_ip = 142; continue _fun0003 }
 90:
                        var5 = _closure2_slot0;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0003_ip = 170; continue _fun0003 }
 100:
                        var5 = _closure2_slot0;
                        var4 = {};
                        var6 = true;
                        var4['preventable'] = var6;
                        var6 = function preventDefault() {
                            var2 = _closure4_slot0;
                            var1 = var2.preventDefault;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var4['preventDefault'] = var6;
                        var2 = function goBack() {
                            var2 = _closure2_slot1;
                            var1 = var2.goBack;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var4['goBack'] = var2;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var4);
                        _fun0003_ip = 170; continue _fun0003;
 142:
                        var4 = _closure2_slot0;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0003_ip = 170; continue _fun0003 }
 152:
                        var2 = _closure2_slot0;
                        var1 = {};
                        var4 = false;
                        var1['preventable'] = var4;
                        var1 = var2.bind(var3)(var1);
 170:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var4.bind(var5)(var1, var3);
            var1 = {};
            var1['onGoBack'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();