// app/modules/messages/MediaFormatTesters.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var6 = require;
        var3 = exports;
        var7 = dependencyMap;
        var1 = global;
        var8 = var1.Object;
        var5 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var5.bind(var8)(var3, var1, var4);
        var1 = 0;
        var5 = var7[var1];
        var4 = metroImportDefault;
        var1 = undefined;
        var4 = var4.bind(var1)(var5);
        var _closure1_slot0 = var4;
        var4 = function urlMatchesFileExtension(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = arg1;
                var3 = arg2;
                var1 = null;
                if(!(var1 != var5)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var2 = var5.split;
                var1 = /\?/;
                var4 = 1;
                var6 = var2.bind(var5)(var1, var4);
                var5 = _closure1_slot0;
                var2 = undefined;
                var1 = 2;
                var1 = var5.bind(var2)(var6, var1);
                var2 = 0;
                var2 = var1[var2];
                var1 = var1[var4];
                var1 = var3.test;
                var1 = var1.bind(var3)(var2);
                return var1;
case 2:
                var1 = false;
                return var1;
            }
        };
        var _closure1_slot1 = var4;
        var5 = function contentTypeMatches(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 != var3)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                var2 = var3.split;
                var1 = '/';
                var4 = var2.bind(var3)(var1);
                var3 = _closure1_slot0;
                var2 = undefined;
                var1 = 2;
                var3 = var3.bind(var2)(var4, var1);
                var1 = 0;
                var2 = var3[var1];
                var1 = 1;
                var1 = var3[var1];
                var1 = arg2;
                var1 = var2 === var1;
                return var1;
case 4:
                var1 = false;
                return var1;
            }
        };
        var _closure1_slot2 = var5;
        var5 = /\.(png|jpe?g|webp|gif|heic|heif|dng|avif)$/i;
        var _closure1_slot3 = var5;
        var5 = /\.(webp|gif|avif)$/i;
        var _closure1_slot4 = var5;
        var5 = 1;
        var8 = var7[var5];
        var9 = var6.bind(var1)(var8);
        var8 = var9.isIOS;
        var8 = var8.bind(var9)();
        if(var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
        var8 = var7[var5];
        var9 = var6.bind(var1)(var8);
        var8 = var9.isAndroid;
        var8 = var8.bind(var9)();
        if(var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
        var8 = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i;
        _fun0001_ip = 10; continue _fun0001;
case 8:
        var8 = /\.(mp3|m4a|wav|ogg|opus|flac)$/i;
case 10:
        _fun0001_ip = 11; continue _fun0001;
case 6:
        var8 = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i;
case 11:
        var _closure1_slot5 = var8;
        var8 = var7[var5];
        var9 = var6.bind(var1)(var8);
        var8 = var9.isIOS;
        var8 = var8.bind(var9)();
        if(var8) { _fun0001_ip = 12; continue _fun0001 }
case 13:
        var5 = var7[var5];
        var8 = var6.bind(var1)(var5);
        var5 = var8.isAndroid;
        var5 = var5.bind(var8)();
        var5 = /\.(mp4|webm|mov)$/i;
        _fun0001_ip = 14; continue _fun0001;
case 12:
        var5 = /\.(mp4|mov)$/i;
case 14:
        var _closure1_slot6 = var5;
        var5 = 2;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/messages/MediaFormatTesters.tsx';
        var5 = var6.bind(var7)(var5);
        var3['urlMatchesFileExtension'] = var4;
        var4 = function(arg1) {
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            return var1;
        };
        var3['isImageUrl'] = var4;
        var4 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0004_ip = 15; continue _fun0004 }
case 3:
                var3 = _closure1_slot3;
                var2 = var3.test;
                var1 = var2.bind(var3)(var4);
case 15:
                return var1;
            }
        };
        var3['isImageFile'] = var4;
        var4 = function(arg1) {
            var4 = _closure1_slot2;
            var3 = undefined;
            var2 = arg1;
            var1 = 'image';
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['isImageContentType'] = var4;
        var4 = function(arg1) {
            var4 = _closure1_slot1;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            return var1;
        };
        var3['isAnimatedImageUrl'] = var4;
        var4 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0005_ip = 15; continue _fun0005 }
case 3:
                var3 = _closure1_slot5;
                var2 = var3.test;
                var1 = var2.bind(var3)(var4);
case 15:
                return var1;
            }
        };
        var3['isAudioFile'] = var4;
        var4 = function(arg1) {
            var4 = _closure1_slot1;
            var3 = _closure1_slot6;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            return var1;
        };
        var3['isVideoUrl'] = var4;
        var4 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0006_ip = 15; continue _fun0006 }
case 3:
                var3 = _closure1_slot6;
                var2 = var3.test;
                var1 = var2.bind(var3)(var4);
case 15:
                return var1;
            }
        };
        var3['isVideoFile'] = var4;
        var2 = function(arg1) {
            var4 = _closure1_slot2;
            var3 = undefined;
            var2 = arg1;
            var1 = 'video';
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['isVideoContentType'] = var2;
        return var1;
    }
})();