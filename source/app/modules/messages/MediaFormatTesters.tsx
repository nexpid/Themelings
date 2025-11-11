// app/modules/messages/MediaFormatTesters.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var8 = require;
        var5 = metroImportDefault;
        var3 = exports;
        var9 = dependencyMap;
        var _closure1_slot0 = var8;
        var _closure1_slot1 = var5;
        var _closure1_slot2 = var9;
        var1 = global;
        var7 = var1.Object;
        var6 = var7.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var6.bind(var7)(var3, var1, var4);
        var1 = 0;
        var4 = var9[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var6 = function urlMatchesFileExtension(arg1, arg2) {
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
                var5 = _closure1_slot3;
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
        var _closure1_slot4 = var6;
        var4 = function contentTypeMatches(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 != var3)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                var2 = var3.split;
                var1 = '/';
                var4 = var2.bind(var3)(var1);
                var3 = _closure1_slot3;
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
        var _closure1_slot5 = var4;
        var4 = /\.(png|jpe?g|jfif|webp|gif|heic|heif|dng|avif)$/i;
        var _closure1_slot6 = var4;
        var4 = /\.(webp|gif|avif)$/i;
        var _closure1_slot7 = var4;
        var4 = 1;
        var5 = var9[var4];
        var7 = var8.bind(var1)(var5);
        var5 = var7.isIOS;
        var5 = var5.bind(var7)();
        if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
        var5 = var9[var4];
        var7 = var8.bind(var1)(var5);
        var5 = var7.isAndroid;
        var5 = var5.bind(var7)();
        if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
        var5 = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i;
        _fun0001_ip = 10; continue _fun0001;
case 8:
        var5 = /\.(mp3|m4a|wav|ogg|opus|flac)$/i;
case 10:
        _fun0001_ip = 11; continue _fun0001;
case 6:
        var5 = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i;
case 11:
        var _closure1_slot8 = var5;
        var5 = /\.(webm)$/i;
        var _closure1_slot9 = var5;
        var5 = var9[var4];
        var7 = var8.bind(var1)(var5);
        var5 = var7.isIOS;
        var5 = var5.bind(var7)();
        if(var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
        var4 = var9[var4];
        var5 = var8.bind(var1)(var4);
        var4 = var5.isAndroid;
        var4 = var4.bind(var5)();
        var4 = /\.(mp4|webm|mov)$/i;
        _fun0001_ip = 14; continue _fun0001;
case 12:
        var4 = /\.(mp4|mov)$/i;
case 14:
        var _closure1_slot10 = var4;
        var5 = function isWebPlayerVideoUrl(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 2;
                var1 = var4[var1];
                var5 = undefined;
                var3 = var3.bind(var5)(var1);
                var1 = var3.isIOSWithWebM;
                var1 = var1.bind(var3)();
                if(!var1) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 3;
                var3 = var6[var3];
                var6 = var4.bind(var5)(var3);
                var4 = var6.getConfig;
                var3 = {};
                var7 = 'isWebPlayerVideoUrl';
                var3['location'] = var7;
                var3 = var4.bind(var6)(var3);
                var1 = var3.enabled;
case 15:
                if(!var1) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var4 = _closure1_slot4;
                var3 = _closure1_slot9;
                var2 = arg1;
                var1 = var4.bind(var5)(var2, var3);
case 17:
                return var1;
            }
        };
        var _closure1_slot11 = var5;
        var4 = function isWebPlayerVideoFile(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0005_ip = 19; continue _fun0005 }
case 3:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.isIOSWithWebM;
                var1 = var2.bind(var3)();
case 19:
                if(!var1) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var5.bind(var2)(var3);
                var3 = var5.getConfig;
                var2 = {};
                var6 = 'isWebPlayerVideoFile';
                var2['location'] = var6;
                var2 = var3.bind(var5)(var2);
                var1 = var2.enabled;
case 20:
                if(!var1) { _fun0005_ip = 22; continue _fun0005 }
case 17:
                var3 = _closure1_slot9;
                var2 = var3.test;
                var1 = var2.bind(var3)(var4);
case 22:
                return var1;
            }
        };
        var _closure1_slot12 = var4;
        var7 = 4;
        var7 = var9[var7];
        var9 = var8.bind(var1)(var7);
        var8 = var9.fileFinishedImporting;
        var7 = 'modules/messages/MediaFormatTesters.tsx';
        var7 = var8.bind(var9)(var7);
        var3['urlMatchesFileExtension'] = var6;
        var6 = function(arg1) {
            var4 = _closure1_slot4;
            var3 = _closure1_slot6;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            return var1;
        };
        var3['isImageUrl'] = var6;
        var6 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0006_ip = 23; continue _fun0006 }
case 3:
                var3 = _closure1_slot6;
                var2 = var3.test;
                var1 = var2.bind(var3)(var4);
case 23:
                return var1;
            }
        };
        var3['isImageFile'] = var6;
        var6 = function(arg1) {
            var4 = _closure1_slot5;
            var3 = undefined;
            var2 = arg1;
            var1 = 'image';
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['isImageContentType'] = var6;
        var6 = function(arg1) {
            var4 = _closure1_slot4;
            var3 = _closure1_slot7;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            return var1;
        };
        var3['isAnimatedImageUrl'] = var6;
        var6 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0007_ip = 23; continue _fun0007 }
case 3:
                var3 = _closure1_slot8;
                var2 = var3.test;
                var1 = var2.bind(var3)(var4);
case 23:
                return var1;
            }
        };
        var3['isAudioFile'] = var6;
        var3['isWebPlayerVideoUrl'] = var5;
        var5 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = arg1;
                var5 = _closure1_slot4;
                var1 = _closure1_slot10;
                var3 = undefined;
                var1 = var5.bind(var3)(var4, var1);
                if(var1) { _fun0008_ip = 24; continue _fun0008 }
case 25:
                var2 = _closure1_slot11;
                var1 = var2.bind(var3)(var4);
case 24:
                return var1;
            }
        };
        var3['isVideoUrl'] = var5;
        var3['isWebPlayerVideoFile'] = var4;
        var4 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var5 = arg1;
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0009_ip = 26; continue _fun0009 }
case 3:
                var4 = _closure1_slot10;
                var2 = var4.test;
                var2 = var2.bind(var4)(var5);
                if(var2) { _fun0009_ip = 27; continue _fun0009 }
case 28:
                var4 = _closure1_slot12;
                var3 = undefined;
                var2 = var4.bind(var3)(var5);
case 27:
                var1 = var2;
case 26:
                return var1;
            }
        };
        var3['isVideoFile'] = var4;
        var2 = function(arg1) {
            var4 = _closure1_slot5;
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