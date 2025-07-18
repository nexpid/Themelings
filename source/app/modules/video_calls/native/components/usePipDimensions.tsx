// app/modules/video_calls/native/components/usePipDimensions.tsx
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
 0:
            var2 = arg1;
            var8 = var2.channelId;
            var6 = var2.forcedOrientation;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 24; continue _fun0001 }
 22:
            var6 = null;
 24:
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
 0:
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
                    if(var5) { _fun0002_ip = 109; continue _fun0002 }
 63:
                    var2 = var4;
                    if(!var4) { _fun0002_ip = 106; continue _fun0002 }
 69:
                    var6 = _closure2_slot0;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var9];
                    var3 = var7.bind(var8)(var3);
                    var3 = var3.OrientationType;
                    var3 = var3.PORTRAIT;
                    var2 = var6 !== var3;
 106:
                    var5 = var2;
 109:
                    var6 = _closure2_slot1;
                    var2 = 96;
                    var3 = var2;
                    if(var6) { _fun0002_ip = 413; continue _fun0002 }
 125:
                    if(var4) { _fun0002_ip = 196; continue _fun0002 }
 128:
                    if(var5) { _fun0002_ip = 196; continue _fun0002 }
 131:
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
                    _fun0002_ip = 413; continue _fun0002;
 196:
                    if(var4) { _fun0002_ip = 267; continue _fun0002 }
 199:
                    if(!var5) { _fun0002_ip = 267; continue _fun0002 }
 202:
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
                    _fun0002_ip = 413; continue _fun0002;
 267:
                    if(!var4) { _fun0002_ip = 273; continue _fun0002 }
 270:
                    if(var5) { _fun0002_ip = 353; continue _fun0002 }
 273:
                    if(!var4) { _fun0002_ip = 279; continue _fun0002 }
 276:
                    var4 = !var5;
 279:
                    var2 = 1;
                    var3 = var2;
                    if(!var4) { _fun0002_ip = 413; continue _fun0002 }
 291:
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
                    _fun0002_ip = 413; continue _fun0002;
 353:
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
 413:
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