// app/modules/media_channel/MediaPostThumbnailUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_channel/MediaPostThumbnailUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 4;
    var3['MAX_THUMBNAIL_COUNT'] = var4;
    var4 = function getEmbedPreviewImageUrl(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = null;
            if(!(var3 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var1.thumbnail;
            var4 = var1.image;
            if(!(var3 == var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!(var3 == var4)) { _fun0001_ip = 6; continue _fun0001 }
case 2:
            var1 = undefined;
            return var1;
case 6:
            var1 = var4.proxy_url;
            if(!(var3 == var1)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1 = var4.url;
case 7:
            return var1;
case 4:
            var1 = var2.proxy_url;
            if(!(var3 == var1)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var1 = var2.url;
case 9:
            return var1;
        }
    };
    var3['getEmbedPreviewImageUrl'] = var4;
    var4 = function getBackgroundImageUrl(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var4 = 0;
            var2 = var2[var4];
            var3 = undefined;
            var6 = var6.bind(var3)(var2);
            var2 = var6.isAnimatedImageUrl;
            var2 = var2.bind(var6)(var5);
            if(var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var4];
            var2 = var2.bind(var3)(var1);
            var1 = var2.isVideoUrl;
            var2 = var1.bind(var2)(var5);
            var1 = var5;
            if(!var2) { _fun0002_ip = 13; continue _fun0002 }
case 11:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '?format=webp';
            var1 = var4.bind(var3)(var5, var2);
case 13:
            return var1;
        }
    };
    var3['getBackgroundImageUrl'] = var4;
    var2 = function getThumbnailImage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 == var1)) { _fun0003_ip = 14; continue _fun0003 }
case 3:
            var3 = undefined;
            return var3;
case 14:
            var4 = var1.url;
            var6 = var1.proxy_url;
            var1 = var4;
            if(!(var2 != var4)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var1 = var4;
            if(!(var2 != var6)) { _fun0003_ip = 15; continue _fun0003 }
case 17:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 0;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.isVideoUrl;
            var3 = var2.bind(var3)(var4);
            var2 = var6;
            if(!var3) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = '';
            var3 = '?format=webp';
            var2 = var5.bind(var4)(var6, var3);
case 18:
            var1 = var2;
case 15:
            return var1;
        }
    };
    var3['getThumbnailImage'] = var2;
    return var1;
})();