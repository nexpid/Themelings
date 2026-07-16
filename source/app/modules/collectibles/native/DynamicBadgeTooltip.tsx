// app/modules/collectibles/native/DynamicBadgeTooltip.tsx
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = {'top': 14, 'bottom': 14, 'left': 14, 'right': 14};
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/DynamicBadgeTooltip.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DynamicBadgeTooltip(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = var2.children;
            var7 = var2.accessibilityLabel;
            var15 = var2.tooltipPosition;
            var4 = undefined;
            if(!(var15 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var15 = 'bottom';
case 2:
            var _closure2_slot0 = var15;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var12 = _closure1_slot3;
            var3 = var12.useRef;
            var2 = null;
            var10 = var3.bind(var12)(var2);
            var3 = var12.useState;
            var2 = false;
            var6 = var3.bind(var12)(var2);
            var3 = _closure1_slot2;
            var2 = 2;
            var6 = var3.bind(var4)(var6, var2);
            var2 = 0;
            var3 = var6[var2];
            _closure2_slot1 = var3;
            var2 = 1;
            var2 = var6[var2];
            _closure2_slot2 = var2;
            var2 = _closure1_slot0;
            var11 = _closure1_slot1;
            var6 = 3;
            var9 = var11[var6];
            var9 = var2.bind(var4)(var9);
            var13 = var9.intl;
            var9 = var13.string;
            var6 = var11[var6];
            var6 = var2.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.dCou7i;
            var6 = var9.bind(var13)(var6);
            _closure2_slot3 = var6;
            var14 = var12.useCallback;
            var13 = function() {
                var3 = _closure2_slot2;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var9 = new Array(0);
            var9 = var14.bind(var12)(var13, var9);
            _closure2_slot4 = var9;
            var14 = var12.useMemo;
            var13 = new Array(4);
            var13[0] = var15;
            var13[1] = var6;
            var13[2] = var3;
            var13[3] = var9;
            var9 = function() {
                var1 = {};
                var3 = _closure2_slot0;
                var1['position'] = var3;
                var3 = _closure2_slot3;
                var1['label'] = var3;
                var3 = _closure2_slot1;
                var1['visible'] = var3;
                var2 = _closure2_slot4;
                var1['onPress'] = var2;
                return var1;
            };
            var14 = var14.bind(var12)(var9, var13);
            var9 = 4;
            var9 = var11[var9];
            var13 = var2.bind(var4)(var9);
            var9 = var13.useTooltip;
            var9 = var9.bind(var13)(var10, var14);
            var13 = var12.useEffect;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var5 = undefined;
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    return var5;
case 4:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = function() {
                        var3 = _closure2_slot2;
                        var2 = undefined;
                        var1 = false;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = 2500;
                    var2 = var4.bind(var5)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var3 = var13.bind(var12)(var3, var9);
            var9 = var12.useCallback;
            var3 = function() {
                var3 = _closure2_slot2;
                var1 = undefined;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = !var1;
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var9 = var9.bind(var12)(var3, var1);
            var3 = _closure1_slot4;
            var1 = 5;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var1['ref'] = var10;
            var1['onPress'] = var9;
            var8 = _closure1_slot5;
            var1['hitSlop'] = var8;
            var8 = 'button';
            var1['accessibilityRole'] = var8;
            var1['accessibilityLabel'] = var7;
            var1['accessibilityHint'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['DynamicBadgeTooltip'] = var2;
    return var1;
})();