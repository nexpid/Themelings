// app/modules/media/MediaTypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var10;
    var6 = function toContentScanMetadata(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.version;
        var1['version'] = var3;
        var2 = var2.flags;
        var1['flags'] = var2;
        return var1;
    };
    var _closure1_slot6 = var6;
    var4 = function messageAttachmentToUnfurledMediaItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 1;
            var1 = var1[var9];
            var3 = undefined;
            var10 = var2.bind(var3)(var1);
            var8 = var10.hasFlag;
            var1 = var6.flags;
            var7 = null;
            var11 = var7 != var1;
            var5 = 0;
            if(!var11) { _fun0001_ip = 53; continue _fun0001 }
 50:
            var5 = var1;
 53:
            var1 = _closure1_slot3;
            var1 = var1.CONTAINS_EXPLICIT_MEDIA;
            var1 = var8.bind(var10)(var5, var1);
            var5 = 0;
            if(!var1) { _fun0001_ip = 87; continue _fun0001 }
 74:
            var1 = _closure1_slot4;
            var1 = var1.EXPLICIT;
            var5 = var1 | 0;
 87:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var10 = var8.bind(var3)(var1);
            var9 = var10.hasFlag;
            var1 = var6.flags;
            var11 = var7 != var1;
            var8 = 0;
            if(!var11) { _fun0001_ip = 127; continue _fun0001 }
 124:
            var8 = var1;
 127:
            var1 = _closure1_slot3;
            var1 = var1.IS_ANIMATED;
            var1 = var9.bind(var10)(var8, var1);
            var2 = 0;
            if(!var1) { _fun0001_ip = 161; continue _fun0001 }
 148:
            var1 = _closure1_slot5;
            var1 = var1.IS_ANIMATED;
            var2 = var1 | 0;
 161:
            var1 = {};
            var8 = var6.url;
            var1['url'] = var8;
            var8 = var6.proxy_url;
            var1['proxyUrl'] = var8;
            var8 = var6.height;
            var1['height'] = var8;
            var8 = var6.width;
            var1['width'] = var8;
            var8 = var6.content_type;
            var1['contentType'] = var8;
            var8 = var6.placeholder;
            var1['placeholder'] = var8;
            var8 = var6.placeholder_version;
            var1['placeholderVersion'] = var8;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 2;
            var4 = var9[var4];
            var4 = var8.bind(var3)(var4);
            var4 = var4.UnfurledMediaLoadingState;
            var4 = var4.LOADED_SUCCESS;
            var1['loadingState'] = var4;
            var4 = var6.content_scan_version;
            var4 = var7 == var4;
            var3 = undefined;
            if(var4) { _fun0001_ip = 306; continue _fun0001 }
 286:
            var4 = {};
            var6 = var6.content_scan_version;
            var4['version'] = var6;
            var4['flags'] = var5;
            var3 = var4;
 306:
            var1['contentScanMetadata'] = var3;
            var1['flags'] = var2;
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var1 = function getMessageAttachmentMediaItemType(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 3;
            var1 = var1[var6];
            var5 = undefined;
            var7 = var4.bind(var5)(var1);
            var4 = var7.isImageFile;
            var1 = var2.filename;
            var4 = var4.bind(var7)(var1);
            var1 = 'IMAGE';
            if(var4) { _fun0002_ip = 100; continue _fun0002 }
 52:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isVideoFile;
            var2 = var2.filename;
            var3 = var3.bind(var4)(var2);
            var2 = 'INVALID';
            if(!var3) { _fun0002_ip = 97; continue _fun0002 }
 93:
            var2 = 'VIDEO';
 97:
            var1 = var2;
 100:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var5);
    var1 = 0;
    var5 = var10[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var5 = var5.MessageAttachmentFlags;
    var _closure1_slot3 = var5;
    var7 = {};
    var11 = 1;
    var7['EXPLICIT'] = var11;
    var5 = 'EXPLICIT';
    var7[var11] = var5;
    var8 = 2;
    var7['GORE'] = var8;
    var5 = 'GORE';
    var7[var8] = var5;
    var _closure1_slot4 = var7;
    var5 = {};
    var5['IS_ANIMATED'] = var11;
    var8 = 'IS_ANIMATED';
    var5[var11] = var8;
    var _closure1_slot5 = var5;
    var8 = 5;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/media/MediaTypes.tsx';
    var8 = var9.bind(var10)(var8);
    var3['ContentScanFlags'] = var7;
    var3['toContentScanMetadata'] = var6;
    var3['UnfurledMediaItemFlags'] = var5;
    var5 = function toUnfurledMediaItem(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var1 = {};
            var2 = var3.url;
            var1['url'] = var2;
            var2 = var3.proxy_url;
            var1['proxyUrl'] = var2;
            var2 = var3.height;
            var1['height'] = var2;
            var2 = var3.width;
            var1['width'] = var2;
            var2 = var3.placeholder;
            var1['placeholder'] = var2;
            var2 = var3.placeholder_version;
            var1['placeholderVersion'] = var2;
            var2 = var3.content_type;
            var1['contentType'] = var2;
            var2 = var3.loading_state;
            var1['loadingState'] = var2;
            var4 = var3.content_scan_metadata;
            var2 = null;
            var5 = var2 != var4;
            var7 = undefined;
            var4 = undefined;
            if(!var5) { _fun0003_ip = 126; continue _fun0003 }
 108:
            var6 = _closure1_slot6;
            var5 = var3.content_scan_metadata;
            var4 = var6.bind(var7)(var5);
 126:
            var1['contentScanMetadata'] = var4;
            var3 = var3.flags;
            var4 = var2 != var3;
            var2 = 0;
            if(!var4) { _fun0003_ip = 148; continue _fun0003 }
 145:
            var2 = var3;
 148:
            var1['flags'] = var2;
            return var1;
        }
    };
    var3['toUnfurledMediaItem'] = var5;
    var3['messageAttachmentToUnfurledMediaItem'] = var4;
    var4 = function getUnfurledMediaItemType(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 3;
            var1 = var1[var5];
            var8 = undefined;
            var4 = var2.bind(var8)(var1);
            var2 = var4.isImageContentType;
            var1 = var3.contentType;
            var2 = var2.bind(var4)(var1);
            var1 = 'IMAGE';
            if(var2) { _fun0004_ip = 168; continue _fun0004 }
 52:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var5 = var4.bind(var8)(var2);
            var4 = var5.isVideoContentType;
            var2 = var3.contentType;
            var5 = var4.bind(var5)(var2);
            var4 = 'INVALID';
            var2 = var4;
            if(!var5) { _fun0004_ip = 165; continue _fun0004 }
 96:
            var7 = var3.proxyUrl;
            var5 = null;
            var7 = var5 != var7;
            var2 = var4;
            if(!var7) { _fun0004_ip = 165; continue _fun0004 }
 114:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 4;
            var6 = var9[var6];
            var7 = var7.bind(var8)(var6);
            var6 = var7.toURLSafe;
            var3 = var3.proxyUrl;
            var3 = var6.bind(var7)(var3);
            var3 = var5 != var3;
            var2 = var4;
            if(!var3) { _fun0004_ip = 165; continue _fun0004 }
 161:
            var2 = 'VIDEO';
 165:
            var1 = var2;
 168:
            return var1;
        }
    };
    var3['getUnfurledMediaItemType'] = var4;
    var4 = function messageAttachmentToMediaItem(arg1, arg2) {
        var4 = arg1;
        var1 = {};
        var5 = _closure1_slot7;
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var7 = var1;
        var5 = copyDataProperties(var7, var6);
        var2 = _closure1_slot8;
        var3 = var2.bind(var3)(var4);
        var2 = 'type';
        var1[var2] = var3;
        var3 = var4.description;
        var2 = 'alt';
        var1[var2] = var3;
        var3 = {};
        var2 = arg2;
        var3['message'] = var2;
        var2 = {};
        var5 = 'attachment';
        var2['type'] = var5;
        var5 = var4.id;
        var2['attachmentId'] = var5;
        var5 = var4.filename;
        var2['filename'] = var5;
        var5 = var4.title;
        var2['title'] = var5;
        var4 = var4.size;
        var2['size'] = var4;
        var3['identifier'] = var2;
        var2 = 'sourceMetadata';
        var1[var2] = var3;
        return var1;
    };
    var3['messageAttachmentToMediaItem'] = var4;
    var2 = function embedMediaToMediaItem(arg1, arg2, arg3) {
        var2 = arg1;
        var1 = {};
        var3 = arg3;
        var1['type'] = var3;
        var3 = var2.url;
        var1['url'] = var3;
        var3 = var2.proxyURL;
        var1['proxyUrl'] = var3;
        var3 = var2.width;
        var1['width'] = var3;
        var3 = var2.height;
        var1['height'] = var3;
        var3 = var2.placeholder;
        var1['placeholder'] = var3;
        var3 = var2.placeholderVersion;
        var1['placeholderVersion'] = var3;
        var3 = arg2;
        var1['sourceMetadata'] = var3;
        var2 = var2.contentType;
        var1['contentType'] = var2;
        return var1;
    };
    var3['embedMediaToMediaItem'] = var2;
    return var1;
})();