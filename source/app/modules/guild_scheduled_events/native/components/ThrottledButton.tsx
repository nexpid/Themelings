// app/modules/guild_scheduled_events/native/components/ThrottledButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function useThrottledActionHandler() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arguments[0];
            var2 = undefined;
            if(!(var3 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 500;
case 2:
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var2;
            var5 = _closure1_slot2;
            var4 = var5.useRef;
            var3 = null;
            var3 = var4.bind(var5)(var3);
            _closure2_slot1 = var3;
            var5 = _closure1_slot2;
            var4 = var5.useEffect;
            var3 = function() {
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var1 = _closure2_slot1;
                    var2 = var1.current;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var2 = new Array(0);
            var2 = var4.bind(var5)(var3, var2);
            var1 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var4 = null;
                        var2 = var4 != var2;
                        if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var3 = _closure2_slot1;
                        var3 = var3.current;
                        var2 = var4 === var3;
case 4:
                        if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var2 = _closure3_slot0;
                        var5 = undefined;
                        var1 = arg1;
                        var1 = var2.bind(var5)(var1);
                        var2 = _closure2_slot1;
                        var3 = global;
                        var4 = var3.setTimeout;
                        var3 = _closure2_slot0;
                        var1 = function() {
                            var2 = _closure2_slot1;
                            var1 = null;
                            var2['current'] = var1;
                            var1 = undefined;
                            return var1;
                        };
                        var1 = var4.bind(var5)(var1, var3);
                        var2['current'] = var1;
case 6:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            return var1;
        }
    };
    var _closure1_slot4 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_scheduled_events/native/components/ThrottledButton.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function ThrottledButton(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var8 = var5.onPress;
            var7 = var5.onPressIn;
            var6 = var5.onPressOut;
            var3 = var5.throttleMs;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0003_ip = 8; continue _fun0003 }
case 4:
            var3 = 500;
case 8:
            var2 = {'onPress': 0, 'onPressIn': 0, 'onPressOut': 0, 'throttleMs': 0};
            var12 = null;
            var13 = var2;
            var1 = silentSetPrototypeOf(var13, var12);
            var13 = {};
            var12 = var5;
            var11 = var2;
            var12 = copyDataProperties(var13, var12, var11);
            var2 = _closure1_slot4;
            var5 = var2.bind(var4)(var3);
            var3 = _closure1_slot3;
            var2 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 2;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {};
            var13 = var1;
            var9 = copyDataProperties(var13, var12);
            var9 = var5.bind(var4)(var8);
            var8 = 'onPress';
            var1[var8] = var9;
            var8 = var5.bind(var4)(var7);
            var7 = 'onPressIn';
            var1[var7] = var8;
            var6 = var5.bind(var4)(var6);
            var5 = 'onPressOut';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['useThrottledActionHandler'] = var2;
    return var1;
})();