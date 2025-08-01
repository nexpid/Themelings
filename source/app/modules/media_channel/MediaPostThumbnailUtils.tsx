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
 0:
            var1 = arg1;
            var3 = null;
            if(!(var3 != var1)) { _fun0001_ip = 29; continue _fun0001 }
 9:
            var2 = var1.thumbnail;
            var4 = var1.image;
            if(!(var3 == var2)) { _fun0001_ip = 50; continue _fun0001 }
 25:
            if(!(var3 == var4)) { _fun0001_ip = 33; continue _fun0001 }
 29:
            var1 = undefined;
            return var1;
 33:
            var1 = var4.proxy_url;
            if(!(var3 == var1)) { _fun0001_ip = 48; continue _fun0001 }
 43:
            var1 = var4.url;
 48:
            return var1;
 50:
            var1 = var2.proxy_url;
            if(!(var3 == var1)) { _fun0001_ip = 65; continue _fun0001 }
 60:
            var1 = var2.url;
 65:
            return var1;
        }
    };
    var3['getEmbedPreviewImageUrl'] = var4;
    var4 = function getBackgroundImageUrl(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var4 = 0;
            var2 = var2[var4];
            var3 = undefined;
            var6 = var6.bind(var3)(var2);
            var2 = var6.isAnimatedImageUrl;
            var2 = var2.bind(var6)(var5);
            if(var2) { _fun0002_ip = 75; continue _fun0002 }
 41:
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var4];
            var2 = var2.bind(var3)(var1);
            var1 = var2.isVideoUrl;
            var2 = var1.bind(var2)(var5);
            var1 = var5;
            if(!var2) { _fun0002_ip = 104; continue _fun0002 }
 75:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '?format=webp';
            var1 = var4.bind(var3)(var5, var2);
 104:
            return var1;
        }
    };
    var3['getBackgroundImageUrl'] = var4;
    var2 = function getThumbnailImage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 == var1)) { _fun0003_ip = 13; continue _fun0003 }
 9:
            var3 = undefined;
            return var3;
 13:
            var4 = var1.url;
            var6 = var1.proxy_url;
            var1 = var4;
            if(!(var2 != var4)) { _fun0003_ip = 111; continue _fun0003 }
 31:
            var1 = var4;
            if(!(var2 != var6)) { _fun0003_ip = 111; continue _fun0003 }
 38:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 0;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.isVideoUrl;
            var3 = var2.bind(var3)(var4);
            var2 = var6;
            if(!var3) { _fun0003_ip = 108; continue _fun0003 }
 79:
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = '';
            var3 = '?format=webp';
            var2 = var5.bind(var4)(var6, var3);
 108:
            var1 = var2;
 111:
            return var1;
        }
    };
    var3['getThumbnailImage'] = var2;
    return var1;
})();