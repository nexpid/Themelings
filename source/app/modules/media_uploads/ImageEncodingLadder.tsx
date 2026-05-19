// app/modules/media_uploads/ImageEncodingLadder.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var4 = function getAdaptiveImageCompressionQuality(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = arg2;
            var3 = var2.useAdaptiveCompression;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot2;
            var3 = var3.HIGH;
            return var3;
case 2:
            var3 = var1.width;
            var4 = null;
            if(!(var4 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var1.height;
            if(!(var4 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var3 = var1.width;
            var1 = var1.height;
            var5 = var3 * var1;
            var1 = _closure1_slot3;
            var1 = var1.SMALL;
            if(!(!(var5 <= var1))) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1 = _closure1_slot3;
            var1 = var1.MEDIUM;
            if(!(!(var5 <= var1))) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var1 = _closure1_slot3;
            var1 = var1.LARGE;
            if(!(!(var5 <= var1))) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = _closure1_slot3;
            var1 = var1.VERY_LARGE;
            if(!(!(var5 <= var1))) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1 = var2.veryLowQuality;
            if(!(var4 == var1)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var5 = _closure1_slot2;
            var1 = var5.HIGH;
case 15:
            _fun0001_ip = 17; continue _fun0001;
case 13:
            var5 = var2.lowQuality;
            if(!(var4 == var5)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var6 = _closure1_slot2;
            var5 = var6.HIGH;
case 18:
            var1 = var5;
case 17:
            _fun0001_ip = 20; continue _fun0001;
case 11:
            var5 = var2.mediumQuality;
            if(!(var4 == var5)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var6 = _closure1_slot2;
            var5 = var6.HIGH;
case 21:
            var1 = var5;
case 20:
            _fun0001_ip = 23; continue _fun0001;
case 9:
            var5 = var2.highQuality;
            if(!(var4 == var5)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var6 = _closure1_slot2;
            var5 = var6.HIGH;
case 24:
            var1 = var5;
case 23:
            _fun0001_ip = 26; continue _fun0001;
case 7:
            var2 = var2.veryHighQuality;
            if(!(var4 == var2)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var3 = _closure1_slot2;
            var2 = var3.HIGH;
case 27:
            var1 = var2;
case 26:
            return var1;
case 4:
            var1 = _closure1_slot2;
            var1 = var1.HIGH;
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var9[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot0 = var5;
    var5 = 1;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot1 = var5;
    var5 = 2;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.CompressionQuality;
    var _closure1_slot2 = var5;
    var6 = {'SMALL': 921600, 'MEDIUM': 2073600, 'LARGE': 3686400, 'VERY_LARGE': 8294400};
    var _closure1_slot3 = var6;
    var5 = {'useAdaptiveCompression': true, 'veryHighQuality': 0.8, 'highQuality': 0.7, 'mediumQuality': 0.6, 'lowQuality': 0.5, 'veryLowQuality': 0.4, 'useOriginalIfSmaller': true};
    var _closure1_slot4 = var5;
    var2 = function() {
        var5 = function ImageEncodingLadder() {
            var4 = _closure1_slot0;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot1;
        var1 = {};
        var3 = 'selectEncodingConfig';
        var1['key'] = var3;
        var3 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var7 = _closure2_slot0;
                var6 = var7.clampDimensions;
                var12 = var1.width;
                var11 = var1.height;
                var10 = 3840;
                var9 = 2160;
                var13 = var7;
                var2 = var13[var6](var12, var11, var10, var9, var8);
                var4 = var2.targetWidth;
                var3 = var2.targetHeight;
                var2 = var1.width;
                if(!(var2 === var4)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                var1 = var1.height;
                if(!(var1 !== var3)) { _fun0002_ip = 31; continue _fun0002 }
case 29:
                var1 = {};
                var2 = _closure1_slot4;
                var2 = var2.lowQuality;
                var5 = null;
                var6 = var5 != var2;
                var5 = 0.5;
                if(!var6) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                var5 = var2;
case 32:
                var2 = 100;
                var2 = var2 * var5;
                var1['compressionQuality'] = var2;
                var1['targetWidth'] = var4;
                var1['targetHeight'] = var3;
                _fun0002_ip = 34; continue _fun0002;
case 31:
                var2 = {};
                var8 = _closure1_slot5;
                var7 = {};
                var7['width'] = var4;
                var7['height'] = var3;
                var6 = _closure1_slot4;
                var5 = undefined;
                var6 = var8.bind(var5)(var7, var6);
                var5 = 100;
                var5 = var5 * var6;
                var2['compressionQuality'] = var5;
                var2['targetWidth'] = var4;
                var2['targetHeight'] = var3;
                var1 = var2;
case 34:
                return var1;
            }
        };
        var1['value'] = var3;
        var3 = new Array(2);
        var3[0] = var1;
        var1 = {};
        var6 = 'clampDimensions';
        var1['key'] = var6;
        var2 = function value(arg1, arg2, arg3, arg4) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var2 = arg2;
                var10 = arg3;
                var6 = arg4;
                var8 = global;
                var4 = var8.Math;
                var1 = var4.max;
                var9 = var1.bind(var4)(var3, var2);
                var4 = var8.Math;
                var1 = var4.min;
                var7 = var1.bind(var4)(var3, var2);
                var4 = var8.Math;
                var1 = var4.max;
                var4 = var1.bind(var4)(var10, var6);
                var5 = var8.Math;
                var1 = var5.min;
                var1 = var1.bind(var5)(var10, var6);
                if(!(var9 <= var4)) { _fun0003_ip = 8; continue _fun0003 }
case 35:
                if(!(!(var7 <= var1))) { _fun0003_ip = 36; continue _fun0003 }
case 8:
                var6 = var8.Math;
                var5 = var6.min;
                var4 = var4 / var9;
                var1 = var1 / var7;
                var4 = var5.bind(var6)(var4, var1);
                var1 = {};
                var9 = var8.Math;
                var6 = var9.max;
                var10 = var8.Math;
                var7 = var10.round;
                var5 = var3 * var4;
                var5 = var7.bind(var10)(var5);
                var7 = 1;
                var5 = var6.bind(var9)(var7, var5);
                var1['targetWidth'] = var5;
                var6 = var8.Math;
                var5 = var6.max;
                var9 = var8.Math;
                var8 = var9.round;
                var4 = var2 * var4;
                var4 = var8.bind(var9)(var4);
                var4 = var5.bind(var6)(var7, var4);
                var1['targetHeight'] = var4;
                return var1;
case 36:
                var1 = {};
                var1['targetWidth'] = var3;
                var1['targetHeight'] = var2;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[1] = var1;
        var2 = undefined;
        var1 = null;
        var1 = var4.bind(var2)(var5, var1, var3);
        return var1;
    };
    var2 = var2.bind(var1)();
    var7 = 3;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/media_uploads/ImageEncodingLadder.tsx';
    var7 = var8.bind(var9)(var7);
    var3['IMAGE_COMPRESSION_THRESHOLDS'] = var6;
    var3['ADAPTIVE_COMPRESSION_CONFIG'] = var5;
    var3['getAdaptiveImageCompressionQuality'] = var4;
    var3['ImageEncodingLadder'] = var2;
    return var1;
})();