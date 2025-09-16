// app/modules/virtual_currency/native/OrbLottieAnimation.tsx
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
    var4 = 0;
    var8 = var6[var4];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot2 = var7;
    var4 = var6[var4];
    var7 = var5.bind(var1)(var4);
    var4 = var7.forwardRef;
    var8 = var7.useRef;
    var _closure1_slot3 = var8;
    var7 = var7.useEffect;
    var _closure1_slot4 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot5 = var7;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.animationType;
            var _closure2_slot0 = var6;
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 2;
            var2 = var8[var2];
            var4 = undefined;
            var7 = var5.bind(var4)(var2);
            var2 = var7.useTheme;
            var7 = var2.bind(var7)();
            var2 = 3;
            var2 = var8[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.isThemeLight;
            var2 = var2.bind(var5)(var7);
            var7 = _closure1_slot3;
            var5 = null;
            var7 = var7.bind(var4)(var5);
            var _closure2_slot1 = var7;
            var10 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var6;
            var8 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 !== var3)) { _fun0002_ip = 36; continue _fun0002 }
 13:
                    var2 = _closure2_slot1;
                    var2 = var2.current;
                    if(!(var1 != var2)) { _fun0002_ip = 36; continue _fun0002 }
 26:
                    var1 = var2.play;
                    var1 = var1.bind(var2)();
 36:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var10.bind(var4)(var8, var9);
            var10 = _closure1_slot2;
            var9 = var10.useImperativeHandle;
            var8 = arg2;
            var3 = function() {
                var1 = {};
                var2 = function play() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = _closure2_slot1;
                        var3 = var1.current;
                        var1 = null;
                        var2 = var1 == var3;
                        var1 = undefined;
                        if(var2) { _fun0003_ip = 33; continue _fun0003 }
 23:
                        var2 = var3.play;
                        var1 = var2.bind(var3)();
 33:
                        return var1;
                    }
                };
                var1['play'] = var2;
                return var1;
            };
            var3 = var9.bind(var10)(var8, var3);
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            if(var2) { _fun0001_ip = 170; continue _fun0001 }
 150:
            var2 = 5;
            var2 = var9[var2];
            var2 = var8.bind(var4)(var2);
            var3 = var2.SpendEarnOrbsLottie;
            _fun0001_ip = 188; continue _fun0001;
 170:
            var2 = 4;
            var2 = var9[var2];
            var2 = var8.bind(var4)(var2);
            var3 = var2.SpendEarnOrbsLightThemeLottie;
 188:
            var2 = _closure1_slot5;
            var1 = {'ref': null, 'size': 'custom', 'width': 60, 'height': 60};
            var1['ref'] = var7;
            var7 = var5 != var6;
            var5 = 'spend';
            if(!var7) { _fun0001_ip = 228; continue _fun0001 }
 225:
            var5 = var6;
 228:
            var1['animation'] = var5;
            var1 = var2.bind(var4)(var3, var1);
            return var1;
        }
    };
    var2 = var4.bind(var1)(var2);
    var4 = 'OrbsLottieAnimation';
    var2['displayName'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/native/OrbLottieAnimation.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['OrbLottieAnimation'] = var2;
    return var1;
})();