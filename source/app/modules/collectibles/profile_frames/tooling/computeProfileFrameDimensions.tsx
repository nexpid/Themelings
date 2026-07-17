// app/modules/collectibles/profile_frames/tooling/computeProfileFrameDimensions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function maxOverflowOrFallback(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var1 = arg2;
            var2 = var6.length;
            var5 = 0;
            if(!(var2 > var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = global;
            var4 = var2.Math;
            var3 = var4.max;
            var2 = new Array(0);
            var9 = var2;
            var8 = var6;
            var7 = 0;
            var5 = arraySpread(var9, var8, var7);
            var9 = var3;
            var8 = var2;
            var7 = var4;
            var1 = apply(var9, var8, var7);
case 2:
            return var1;
        }
    };
    var _closure1_slot2 = var1;
    var1 = function stapleOverflow(arg1, arg2, arg3) {
        var1 = global;
        var4 = var1.Math;
        var3 = var4.max;
        var2 = arg2;
        var1 = arg3;
        var2 = var2 - var1;
        var1 = arg1;
        var2 = var1 - var2;
        var1 = 0;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/profile_frames/tooling/computeProfileFrameDimensions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function computeProfileFrameDimensions(arg1) {
        var10 = arg1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var7 = 0;
        var3 = var3[var7];
        var6 = undefined;
        var3 = var4.bind(var6)(var3);
        var3 = var3.DefaultProfileFrameDimensions;
        var5 = var3.INNER_WIDTH;
        var _closure2_slot0 = var5;
        var3 = _closure1_slot2;
        var4 = var10.map;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.dims;
            var4 = global;
            var3 = var4.Math;
            var2 = var3.round;
            var6 = var4.Math;
            var5 = var6.max;
            var4 = var1.width;
            var1 = _closure2_slot0;
            var4 = var4 - var1;
            var1 = 2;
            var4 = var4 / var1;
            var1 = 0;
            var1 = var5.bind(var6)(var1, var4);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var4.bind(var10)(var2);
        var2 = var3.bind(var6)(var2, var7);
        var8 = var10.filter;
        var4 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var3 = var1.layer;
                var4 = var3.type;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 1;
                var1 = var5[var1];
                var5 = undefined;
                var1 = var6.bind(var5)(var1);
                var1 = var1.ProfileFrameLayerType;
                var1 = var1.STAPLE;
                var1 = var4 === var1;
                if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var3 = var3.anchor;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 2;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ProfileFrameLayerAnchor;
                var2 = var2.TOP;
                var1 = var3 === var2;
case 4:
                return var1;
            }
        };
        var9 = var8.bind(var10)(var4);
        var8 = var9.map;
        var4 = function(arg1) {
            var1 = arg1;
            var2 = var1.dims;
            var5 = _closure1_slot3;
            var4 = var2.height;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 0;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var1 = var1.DefaultProfileFrameDimensions;
            var2 = var1.OVERFLOW_TOP;
            var1 = 716;
            var1 = var5.bind(var3)(var4, var1, var2);
            return var1;
        };
        var4 = var8.bind(var9)(var4);
        var4 = var3.bind(var6)(var4, var7);
        var9 = var10.filter;
        var8 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var3 = var1.layer;
                var4 = var3.type;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 1;
                var1 = var5[var1];
                var5 = undefined;
                var1 = var6.bind(var5)(var1);
                var1 = var1.ProfileFrameLayerType;
                var1 = var1.STAPLE;
                var1 = var4 === var1;
                if(!var1) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                var3 = var3.anchor;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 2;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ProfileFrameLayerAnchor;
                var2 = var2.BOTTOM;
                var1 = var3 === var2;
case 4:
                return var1;
            }
        };
        var9 = var9.bind(var10)(var8);
        var8 = var9.map;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.dims;
            var5 = _closure1_slot3;
            var4 = var2.height;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 0;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var1 = var1.DefaultProfileFrameDimensions;
            var2 = var1.OVERFLOW_BOTTOM;
            var1 = 424;
            var1 = var5.bind(var3)(var4, var1, var2);
            return var1;
        };
        var1 = var8.bind(var9)(var1);
        var3 = var3.bind(var6)(var1, var7);
        var1 = {};
        var1['innerWidth'] = var5;
        var1['overflowTop'] = var4;
        var1['overflowBottom'] = var3;
        var1['overflowHorizontal'] = var2;
        return var1;
    };
    var3['computeProfileFrameDimensions'] = var2;
    return var1;
})();