// app/utils/UploadUtils.tsx
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
    var6 = {};
    var1 = /\.jpe?g$/i;
    var6['reName'] = var1;
    var1 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'image';
        var2 = arg1;
        var1 = '.jpg';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var6['name'] = var1;
    var7 = 'image/jpeg';
    var6['type'] = var7;
    var1 = new Array(14);
    var1[0] = var6;
    var6 = {};
    var8 = /\.jfif$/i;
    var6['reName'] = var8;
    var8 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'image';
        var2 = arg1;
        var1 = '.jpg';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var6['name'] = var8;
    var6['type'] = var7;
    var1[1] = var6;
    var6 = {};
    var7 = /\.png$/i;
    var6['reName'] = var7;
    var7 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'image';
        var2 = arg1;
        var1 = '.png';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var6['name'] = var7;
    var7 = 'image/png';
    var6['type'] = var7;
    var1[2] = var6;
    var6 = {};
    var7 = /\.gif$/i;
    var6['reName'] = var7;
    var7 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'image';
        var2 = arg1;
        var1 = '.gif';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var6['name'] = var7;
    var7 = 'image/gif';
    var6['type'] = var7;
    var1[3] = var6;
    var6 = {};
    var7 = /\.webp$/i;
    var6['reName'] = var7;
    var7 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'image';
        var2 = arg1;
        var1 = '.webp';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var6['name'] = var7;
    var7 = 'image/webp';
    var6['type'] = var7;
    var1[4] = var6;
    var6 = {};
    var7 = /\.avif$/i;
    var6['reName'] = var7;
    var7 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'image';
        var2 = arg1;
        var1 = '.avif';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var6['name'] = var7;
    var7 = 'image/avif';
    var6['type'] = var7;
    var1[5] = var6;
    var6 = {};
    var7 = /\.heic$/i;
    var6['reName'] = var7;
    var7 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'image';
        var2 = arg1;
        var1 = '.heic';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var6['name'] = var7;
    var7 = 'image/heic';
    var6['type'] = var7;
    var1[6] = var6;
    var6 = {};
    var7 = /\.heif$/i;
    var6['reName'] = var7;
    var7 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'image';
        var2 = arg1;
        var1 = '.heif';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var6['name'] = var7;
    var7 = 'image/heif';
    var6['type'] = var7;
    var1[7] = var6;
    var6 = {};
    var7 = /\.dng$/i;
    var6['reName'] = var7;
    var7 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'image';
        var2 = arg1;
        var1 = '.dng';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var6['name'] = var7;
    var7 = 'image/x-adobe-dng';
    var6['type'] = var7;
    var1[8] = var6;
    var6 = {};
    var7 = /\.mov$/i;
    var6['reName'] = var7;
    var7 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'video';
        var2 = arg1;
        var1 = '.mov';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var6['name'] = var7;
    var7 = 'video/quicktime';
    var6['type'] = var7;
    var1[9] = var6;
    var6 = {};
    var8 = /\.qt$/i;
    var6['reName'] = var8;
    var8 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'video';
        var2 = arg1;
        var1 = '.qt';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var6['name'] = var8;
    var6['type'] = var7;
    var1[10] = var6;
    var6 = {};
    var7 = /\.avi$/i;
    var6['reName'] = var7;
    var7 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'video';
        var2 = arg1;
        var1 = '.avi';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var6['name'] = var7;
    var7 = 'video/x-msvideo';
    var6['type'] = var7;
    var1[11] = var6;
    var6 = {};
    var7 = /\.mp4$/i;
    var6['reName'] = var7;
    var7 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'video';
        var2 = arg1;
        var1 = '.mp4';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var6['name'] = var7;
    var7 = 'video/mp4';
    var6['type'] = var7;
    var1[12] = var6;
    var6 = {};
    var7 = /\.webm$/i;
    var6['reName'] = var7;
    var7 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'video';
        var2 = arg1;
        var1 = '.webm';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var6['name'] = var7;
    var7 = 'image/webm';
    var6['type'] = var7;
    var1[13] = var6;
    var _closure1_slot2 = var1;
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/UploadUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 524288000;
    var3['MAX_TOTAL_ATTACHMENT_SIZE'] = var4;
    var4 = 500;
    var3['MAX_TOTAL_ATTACHMENT_SIZE_MB'] = var4;
    var4 = function getAttachmentPayload(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var7 = arguments[1];
            var3 = arguments[2];
            var8 = undefined;
            if(!(var7 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = null;
case 2:
            var1 = {};
            var5 = null;
            var6 = var5 == var7;
            var4 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var7.toString;
            var4 = var6.bind(var7)();
case 4:
            if(!(var5 == var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var2.id;
case 6:
            var1['id'] = var4;
            var4 = var2.description;
            if(!(var5 != var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var2.description;
            var1['description'] = var4;
case 8:
            if(!(var5 == var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var2.filename;
case 10:
            var1['filename'] = var3;
            var3 = var2.uploadedFilename;
            var1['uploaded_filename'] = var3;
            var3 = var2.spoiler;
            if(!var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = true;
            var1['is_spoiler'] = var3;
case 12:
            var3 = 'durationSecs';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = var2.durationSecs;
            var3 = var5 != var4;
case 14:
            if(!var3) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var3 = var2.durationSecs;
            var1['duration_secs'] = var3;
case 16:
            var3 = 'waveform';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var4 = var2.waveform;
            var3 = var5 != var4;
case 18:
            if(!var3) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var3 = var2.waveform;
            var1['waveform'] = var3;
case 20:
            var3 = 'isThumbnail';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var6 = var2.isThumbnail;
            var4 = true;
            var3 = var4 === var6;
case 22:
            if(!var3) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var3 = var2.isThumbnail;
            var1['is_thumbnail'] = var3;
case 24:
            var3 = 'clip';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var4 = var2.clip;
            var3 = var5 != var4;
case 26:
            if(!var3) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var3 = true;
            var1['is_clip'] = var3;
            var3 = var2.clip;
            var3 = var3.name;
            var1['title'] = var3;
            var3 = var2.clip;
            var3 = var3.applicationId;
            var1['application_id'] = var3;
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 0;
            var7 = var6[var3];
            var10 = var4.bind(var8)(var7);
            var9 = var10.getClipCreatedAt;
            var7 = var2.clip;
            var7 = var7.createdAt;
            var7 = var9.bind(var10)(var7);
            var1['clip_created_at'] = var7;
            var7 = var6[var3];
            var10 = var4.bind(var8)(var7);
            var9 = var10.getClipParticipantIds;
            var7 = var2.clip;
            var7 = var7.users;
            var7 = var9.bind(var10)(var7);
            var1['clip_participant_ids'] = var7;
            var7 = var2.clip;
            var7 = var7.remoteClipId;
            var1['clip_remote_id'] = var7;
            var3 = var6[var3];
            var6 = var4.bind(var8)(var3);
            var4 = var6.getClipEventsTimeline;
            var3 = var2.clip;
            var3 = var4.bind(var6)(var3);
            var1['clip_events_timeline'] = var3;
case 28:
            var3 = 'item';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var4 = var2.item;
            var3 = var5 != var4;
case 30:
            if(!var3) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var4 = var2.item;
            var6 = var4.platform;
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var4 = 1;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var4 = var4.UploadPlatform;
            var4 = var4.WEB;
            var3 = var6 === var4;
case 32:
            if(!var3) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var4 = 'mimeType';
            var3 = var4 in var2;
case 34:
            if(!var3) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var4 = var2.mimeType;
            var3 = var5 != var4;
case 36:
            if(!var3) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var2 = var2.mimeType;
            var1['original_content_type'] = var2;
case 38:
            return var1;
        }
    };
    var3['getAttachmentPayload'] = var4;
    var4 = function getFileData(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.XMLHttpRequest;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var6 = var4;
        var3 = new var6[var3](var5);
        var3 = var3 instanceof Object ? var3 : var4;
        var _closure2_slot1 = var3;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var5 = function(arg1, arg2) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var2 = _closure2_slot1;
            var6 = var2.open;
            var5 = _closure2_slot0;
            var4 = 'GET';
            var3 = true;
            var3 = var6.bind(var2)(var4, var5, var3);
            var3 = 'blob';
            var2['responseType'] = var3;
            var3 = function(arg1) {
                var3 = _closure3_slot1;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2['onabort'] = var3;
            var3 = function(arg1) {
                var3 = _closure3_slot1;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2['onerror'] = var3;
            var3 = function(arg1) {
                var3 = _closure3_slot1;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2['ontimeout'] = var3;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure3_slot0;
                    var1 = _closure2_slot1;
                    var5 = null;
                    var6 = var5 == var1;
                    var2 = undefined;
                    var1 = undefined;
                    if(var6) { _fun0002_ip = 40; continue _fun0002 }
case 41:
                    var4 = _closure2_slot1;
                    var4 = var4.response;
                    var5 = var5 == var4;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 40; continue _fun0002 }
case 42:
                    var1 = var4.data;
case 40:
                    var1 = var3.bind(var2)(var1);
                    return var1;
                }
            };
            var2['onload'] = var1;
            var1 = var2.send;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var6 = var2;
        var1 = new var6[var3](var5, var4);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['getFileData'] = var4;
    var4 = function getFileContentLength(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1, arg2) {
            var1 = arg2;
            var2 = arg1;
            var _closure3_slot0 = var2;
            var _closure3_slot1 = var1;
            var2 = global;
            var2 = var2.XMLHttpRequest;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var11 = var4;
            var2 = new var11[var2](var10);
            var2 = var2 instanceof Object ? var2 : var4;
            var _closure3_slot2 = var2;
            var7 = var2.open;
            var6 = _closure2_slot0;
            var5 = 'HEAD';
            var4 = true;
            var4 = var7.bind(var2)(var5, var6, var4);
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure3_slot2;
                    var3 = var2.status;
                    var2 = 200;
                    if(!(var3 >= var2)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                    var2 = _closure3_slot2;
                    var3 = var2.status;
                    var2 = 300;
                    if(!(!(var3 < var2))) { _fun0003_ip = 45; continue _fun0003 }
case 43:
                    var4 = _closure3_slot1;
                    var2 = global;
                    var5 = var2.Error;
                    var3 = _closure3_slot2;
                    var6 = var3.status;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = 'HTTP request failed with status code ';
                    var8 = var3.bind(var2)(var6);
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {constructor: {value: var5}});
                    var9 = var3;
                    var2 = new var9[var5](var8, var7);
                    var3 = var2 instanceof Object ? var2 : var3;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0003_ip = 46; continue _fun0003;
case 45:
                    var4 = _closure3_slot2;
                    var3 = var4.getResponseHeader;
                    var2 = 'Content-Length';
                    var5 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var5)) { _fun0003_ip = 17; continue _fun0003 }
case 47:
                    var2 = '';
                    if(!(var2 === var5)) { _fun0003_ip = 48; continue _fun0003 }
case 17:
                    var4 = _closure3_slot1;
                    var2 = global;
                    var6 = var2.Error;
                    var2 = var6.prototype;
                    var3 = Object.create(var2, {constructor: {value: var6}});
                    var8 = 'Content-Length header is missing';
                    var9 = var3;
                    var2 = new var9[var6](var8, var7);
                    var3 = var2 instanceof Object ? var2 : var3;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0003_ip = 46; continue _fun0003;
case 48:
                    var3 = _closure3_slot0;
                    var1 = global;
                    var4 = var1.parseInt;
                    var2 = undefined;
                    var1 = 10;
                    var1 = var4.bind(var2)(var5, var1);
                    var1 = var3.bind(var2)(var1);
case 46:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['onload'] = var3;
            var2['onerror'] = var1;
            var2['onabort'] = var1;
            var2['ontimeout'] = var1;
            var1 = var2.send;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['getFileContentLength'] = var4;
    var2 = function getFile(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var7 = var2.uri;
            var9 = var2.i;
            var15 = var2.overrideFilename;
            var _closure2_slot0 = var15;
            var2 = var2.overrideType;
            var4 = var7.split;
            var3 = '/';
            var4 = var4.bind(var7)(var3);
            var5 = var4.length;
            var3 = 1;
            var3 = var5 - var3;
            var5 = var4[var3];
            var _closure2_slot1 = var5;
            var4 = var5.split;
            var3 = '?';
            var5 = var4.bind(var5)(var3);
            var4 = null;
            var3 = var4 == var5;
            var8 = undefined;
            if(var3) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var3 = 0;
            var5 = var5[var3];
            var3 = var4 == var5;
            var8 = undefined;
            if(var3) { _fun0004_ip = 49; continue _fun0004 }
case 51:
            var3 = var5.toLowerCase;
            var8 = var3.bind(var5)();
case 49:
            var10 = var4 != var8;
            var5 = '';
            var3 = var5;
            if(!var10) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var3 = var8;
case 52:
            _closure2_slot1 = var3;
            var11 = _closure1_slot2;
            var10 = var11.find;
            var8 = function(arg1) {
                var1 = arg1;
                var3 = var1.reName;
                var2 = var3.test;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var10.bind(var11)(var8);
            var10 = var4 == var8;
            if(!var10) { _fun0004_ip = 54; continue _fun0004 }
case 19:
            var10 = var4 != var15;
case 54:
            if(!var10) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            var10 = _closure1_slot2;
            var3 = var10.find;
            var1 = function(arg1) {
                var1 = arg1;
                var3 = var1.reName;
                var2 = var3.test;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var3.bind(var10)(var1);
case 55:
            if(!(var4 != var8)) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            if(!(var4 == var15)) { _fun0004_ip = 59; continue _fun0004 }
case 57:
            if(!(var4 == var8)) { _fun0004_ip = 60; continue _fun0004 }
case 61:
            var1 = var4 != var15;
            var3 = 'unknown';
            if(!var1) { _fun0004_ip = 62; continue _fun0004 }
case 63:
            var3 = var15;
case 62:
            _fun0004_ip = 24; continue _fun0004;
case 60:
            var1 = var8.name;
            var3 = var1.bind(var8)(var9);
case 24:
            _fun0004_ip = 64; continue _fun0004;
case 59:
            var1 = var8.name;
            var10 = var1.bind(var8)(var9);
            var1 = var10.split;
            var13 = '.';
            var10 = var1.bind(var10)(var13);
            var1 = var10.pop;
            var12 = var1.bind(var10)();
            var1 = var15.lastIndexOf;
            var14 = var1.bind(var15)(var13);
            var1 = -1;
            if(!(var1 === var14)) { _fun0004_ip = 65; continue _fun0004 }
case 66:
            var1 = global;
            var1 = var1.HermesInternal;
            var1 = var1.concat;
            var1 = var1.bind(var5)(var15, var13, var12);
            _fun0004_ip = 67; continue _fun0004;
case 65:
            var11 = var15.substr;
            var10 = 0;
            var11 = var11.bind(var15)(var10, var14);
            var10 = global;
            var10 = var10.HermesInternal;
            var10 = var10.concat;
            var1 = var10.bind(var5)(var11, var13, var12);
case 67:
            var3 = var1;
case 64:
            var1 = {};
            var1['uri'] = var7;
            var1['filename'] = var3;
            var7 = var2;
            if(!(var4 == var2)) { _fun0004_ip = 68; continue _fun0004 }
case 69:
            var10 = var4 == var8;
            var3 = undefined;
            if(var10) { _fun0004_ip = 70; continue _fun0004 }
case 71:
            var3 = var8.type;
case 70:
            var7 = var3;
case 68:
            var10 = var4 != var7;
            var3 = 'unknown';
            if(!var10) { _fun0004_ip = 72; continue _fun0004 }
case 73:
            var3 = var7;
case 72:
            var1['type'] = var3;
            var3 = var2;
            if(!(var4 == var2)) { _fun0004_ip = 74; continue _fun0004 }
case 75:
            var10 = var4 == var8;
            var7 = undefined;
            if(var10) { _fun0004_ip = 76; continue _fun0004 }
case 77:
            var10 = var8.name;
            var7 = var10.bind(var8)(var9);
case 76:
            var3 = var7;
case 74:
            var7 = var4 != var3;
            var10 = var5;
            if(!var7) { _fun0004_ip = 78; continue _fun0004 }
case 79:
            var10 = var3;
case 78:
            var7 = var10.indexOf;
            var3 = 'video';
            var7 = var7.bind(var10)(var3);
            var3 = -1;
            var7 = var3 !== var7;
            var1['isVideo'] = var7;
            if(!(var4 == var2)) { _fun0004_ip = 80; continue _fun0004 }
case 81:
            var7 = var4 == var8;
            var6 = undefined;
            if(var7) { _fun0004_ip = 82; continue _fun0004 }
case 83:
            var7 = var8.name;
            var6 = var7.bind(var8)(var9);
case 82:
            var2 = var6;
case 80:
            var4 = var4 != var2;
            if(!var4) { _fun0004_ip = 84; continue _fun0004 }
case 85:
            var5 = var2;
case 84:
            var4 = var5.indexOf;
            var2 = 'image';
            var2 = var4.bind(var5)(var2);
            var2 = var3 !== var2;
            var1['isImage'] = var2;
            return var1;
        }
    };
    var3['getFile'] = var2;
    return var1;
})();