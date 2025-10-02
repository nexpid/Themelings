// app/modules/video_calls/native/components/usePipDimensions.tsx
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
    var4 = var4.useWindowDimensions;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/usePipDimensions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePipDimensions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var8 = var2.channelId;
            var6 = var2.forcedOrientation;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = null;
case 2:
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 2;
            var3 = var7[var3];
            var7 = var5.bind(var4)(var3);
            var5 = var7.useIsViewingActivity;
            var3 = {};
            var3['channelId'] = var8;
            var5 = var5.bind(var7)(var3);
            _closure2_slot1 = var5;
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)();
            var7 = var3.width;
            _closure2_slot2 = var7;
            var8 = var3.height;
            _closure2_slot3 = var8;
            var4 = _closure1_slot2;
            var3 = var4.useMemo;
            var2 = new Array(4);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var2[3] = var5;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot3;
                    var4 = var3 > var2;
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var9 = 3;
                    var2 = var2[var9];
                    var8 = undefined;
                    var2 = var6.bind(var8)(var2);
                    var2 = var2.OrientationType;
                    var2 = var2.LANDSCAPE;
                    var5 = var5 === var2;
                    if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = var4;
                    if(!var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var6 = _closure2_slot0;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var9];
                    var3 = var7.bind(var8)(var3);
                    var3 = var3.OrientationType;
                    var3 = var3.PORTRAIT;
                    var2 = var6 !== var3;
case 6:
                    var5 = var2;
case 4:
                    var6 = _closure2_slot1;
                    var2 = 96;
                    var3 = var2;
                    if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    if(var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    if(var5) { _fun0002_ip = 10; continue _fun0002 }
case 12:
                    var6 = global;
                    var9 = var6.Math;
                    var8 = var9.min;
                    var7 = _closure2_slot3;
                    var6 = 0.25;
                    var7 = var6 * var7;
                    var6 = 300;
                    var6 = var8.bind(var9)(var7, var6);
                    var7 = 0.5625;
                    var2 = var6 * var7;
                    var3 = var6;
                    _fun0002_ip = 8; continue _fun0002;
case 10:
                    if(var4) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    if(!var5) { _fun0002_ip = 13; continue _fun0002 }
case 15:
                    var6 = global;
                    var9 = var6.Math;
                    var8 = var9.min;
                    var7 = _closure2_slot2;
                    var6 = 0.5;
                    var7 = var6 * var7;
                    var6 = 400;
                    var7 = var8.bind(var9)(var7, var6);
                    var6 = 0.5625;
                    var3 = var7 * var6;
                    var2 = var7;
                    _fun0002_ip = 8; continue _fun0002;
case 13:
                    if(!var4) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    if(var5) { _fun0002_ip = 18; continue _fun0002 }
case 16:
                    if(!var4) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var4 = !var5;
case 19:
                    var2 = 1;
                    var3 = var2;
                    if(!var4) { _fun0002_ip = 8; continue _fun0002 }
case 21:
                    var4 = global;
                    var7 = var4.Math;
                    var6 = var7.min;
                    var5 = _closure2_slot3;
                    var4 = 0.5;
                    var5 = var4 * var5;
                    var4 = 300;
                    var4 = var6.bind(var7)(var5, var4);
                    var5 = 0.5625;
                    var2 = var4 * var5;
                    var3 = var4;
                    _fun0002_ip = 8; continue _fun0002;
case 18:
                    var4 = global;
                    var6 = var4.Math;
                    var5 = var6.min;
                    var4 = _closure2_slot2;
                    var1 = 0.25;
                    var4 = var1 * var4;
                    var1 = 400;
                    var4 = var5.bind(var6)(var4, var1);
                    var1 = 0.5625;
                    var3 = var4 * var1;
                    var2 = var4;
case 8:
                    var1 = {};
                    var1['height'] = var3;
                    var1['width'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();