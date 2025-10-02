// app/modules/remixing/native/animation/useScaleIn.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = {'delay': 50, 'autoplay': true, 'loop': false};
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/animation/useScaleIn.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[1];
            var8 = arguments[2];
            var1 = arg1;
            var _closure2_slot0 = var1;
            var5 = undefined;
            if(!(var2 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
case 2:
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var4 = _closure1_slot4;
            var4 = var4.useReducedMotion;
            _closure2_slot1 = var4;
            var13 = {};
            var17 = _closure1_slot5;
            var18 = var13;
            var4 = copyDataProperties(var18, var17);
            var18 = var13;
            var17 = var2;
            var2 = copyDataProperties(var18, var17);
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 2;
            var2 = var2[var9];
            var4 = var4.bind(var5)(var2);
            var2 = var4.useValue;
            var7 = 0;
            var10 = var2.bind(var4)(var7);
            _closure2_slot2 = var10;
            var4 = {'value': null, 'timing': 0, 'duration': 200};
            var2 = null;
            var11 = var2 != var8;
            var2 = 1;
            var6 = var2;
            if(!var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var8;
case 4:
            var4['value'] = var6;
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var8 = 3;
            var12 = var6[var8];
            var12 = var11.bind(var5)(var12);
            var14 = var12.Easing;
            var12 = var14.inOut;
            var8 = var6[var8];
            var8 = var11.bind(var5)(var8);
            var15 = var8.Easing;
            var8 = var15.back;
            var8 = var8.bind(var15)();
            var8 = var12.bind(var14)(var8);
            var4['easing'] = var8;
            var8 = new Array(1);
            var8[0] = var4;
            var4 = var6[var9];
            var12 = var11.bind(var5)(var4);
            var11 = var12.useValueEffect;
            var4 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var3 = _closure2_slot0;
                var2 = var3.set;
                var4 = var3.get;
                var5 = var4.bind(var3)();
                var4 = var5.map;
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = arg1;
                        var2 = 'scale';
                        var2 = var2 in var1;
                        if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var2 = {};
                        var3 = _closure3_slot0;
                        var2['scale'] = var3;
                        var1 = var2;
case 6:
                        return var1;
                    }
                };
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var4 = var11.bind(var12)(var10, var4);
            var4 = _closure1_slot1;
            var11 = 4;
            var11 = var6[var11];
            var12 = var4.bind(var5)(var11);
            var11 = new Array(1);
            var11[0] = var10;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = {};
            var18 = var8;
            var17 = var13;
            var13 = copyDataProperties(var18, var17);
            var13 = 'reducedMotionFreezePercent';
            var8[var13] = var2;
            var8 = var12.bind(var5)(var11, var10, var8);
            var1 = _closure1_slot3;
            var1 = var1.bind(var5)(var8, var9);
            var7 = var1[var7];
            _closure2_slot3 = var7;
            var2 = var1[var2];
            var1 = 5;
            var1 = var6[var1];
            var4 = var4.bind(var5)(var1);
            var1 = function() {
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                        var2 = _closure2_slot2;
                        var1 = var2.dispose;
                        var1 = var1.bind(var2)();
case 8:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var4.bind(var5)(var1);
            var1 = new Array(2);
            var3 = function() {
                var4 = _closure2_slot0;
                var3 = var4.set;
                var2 = var4.get;
                var6 = var2.bind(var4)();
                var5 = var6.map;
                var2 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        var2 = 'scale';
                        var2 = var2 in var1;
                        if(!var2) { _fun0004_ip = 10; continue _fun0004 }
case 7:
                        var2 = {};
                        var4 = _closure2_slot1;
                        var3 = 0;
                        if(!var4) { _fun0004_ip = 6; continue _fun0004 }
case 11:
                        var3 = 1;
case 6:
                        var2['scale'] = var3;
                        var1 = var2;
case 10:
                        return var1;
                    }
                };
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var2);
                var3 = _closure2_slot2;
                var2 = 0;
                var3['current'] = var2;
                var2 = _closure2_slot3;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();