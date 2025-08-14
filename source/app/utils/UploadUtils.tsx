// app/utils/UploadUtils.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.SPOILER_ATTACHMENT_PREFIX;
    var _closure1_slot2 = var4;
    var7 = {};
    var4 = /\.jpe?g$/i;
    var7['reName'] = var4;
    var4 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'image';
        var2 = arg1;
        var1 = '.jpg';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var7['name'] = var4;
    var4 = 'image/jpeg';
    var7['type'] = var4;
    var4 = new Array(12);
    var4[0] = var7;
    var7 = {};
    var8 = /\.png$/i;
    var7['reName'] = var8;
    var8 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'image';
        var2 = arg1;
        var1 = '.png';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var7['name'] = var8;
    var8 = 'image/png';
    var7['type'] = var8;
    var4[1] = var7;
    var7 = {};
    var8 = /\.gif$/i;
    var7['reName'] = var8;
    var8 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'image';
        var2 = arg1;
        var1 = '.gif';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var7['name'] = var8;
    var8 = 'image/gif';
    var7['type'] = var8;
    var4[2] = var7;
    var7 = {};
    var8 = /\.webp$/i;
    var7['reName'] = var8;
    var8 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'image';
        var2 = arg1;
        var1 = '.webp';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var7['name'] = var8;
    var8 = 'image/webp';
    var7['type'] = var8;
    var4[3] = var7;
    var7 = {};
    var8 = /\.avif$/i;
    var7['reName'] = var8;
    var8 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'image';
        var2 = arg1;
        var1 = '.avif';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var7['name'] = var8;
    var8 = 'image/avif';
    var7['type'] = var8;
    var4[4] = var7;
    var7 = {};
    var8 = /\.heic$/i;
    var7['reName'] = var8;
    var8 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'image';
        var2 = arg1;
        var1 = '.heic';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var7['name'] = var8;
    var8 = 'image/heic';
    var7['type'] = var8;
    var4[5] = var7;
    var7 = {};
    var8 = /\.heif$/i;
    var7['reName'] = var8;
    var8 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'image';
        var2 = arg1;
        var1 = '.heif';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var7['name'] = var8;
    var8 = 'image/heif';
    var7['type'] = var8;
    var4[6] = var7;
    var7 = {};
    var8 = /\.dng$/i;
    var7['reName'] = var8;
    var8 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'image';
        var2 = arg1;
        var1 = '.dng';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var7['name'] = var8;
    var8 = 'image/x-adobe-dng';
    var7['type'] = var8;
    var4[7] = var7;
    var7 = {};
    var8 = /\.mov$/i;
    var7['reName'] = var8;
    var8 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'video';
        var2 = arg1;
        var1 = '.mov';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var7['name'] = var8;
    var8 = 'video/quicktime';
    var7['type'] = var8;
    var4[8] = var7;
    var7 = {};
    var8 = /\.avi$/i;
    var7['reName'] = var8;
    var8 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'video';
        var2 = arg1;
        var1 = '.avi';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var7['name'] = var8;
    var8 = 'video/x-msvideo';
    var7['type'] = var8;
    var4[9] = var7;
    var7 = {};
    var8 = /\.mp4$/i;
    var7['reName'] = var8;
    var8 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'video';
        var2 = arg1;
        var1 = '.mp4';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var7['name'] = var8;
    var8 = 'video/mp4';
    var7['type'] = var8;
    var4[10] = var7;
    var7 = {};
    var8 = /\.webm$/i;
    var7['reName'] = var8;
    var8 = function name(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = 'video';
        var2 = arg1;
        var1 = '.webm';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var7['name'] = var8;
    var8 = 'image/webm';
    var7['type'] = var8;
    var4[11] = var7;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/UploadUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 524288000;
    var3['MAX_TOTAL_ATTACHMENT_SIZE'] = var4;
    var4 = function getAttachmentPayload(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var7 = arguments[1];
            var8 = arguments[2];
            var6 = undefined;
            if(!(var7 === var6)) { _fun0001_ip = 17; continue _fun0001 }
 15:
            var7 = null;
 17:
            var1 = {};
            var5 = null;
            var4 = var5 == var7;
            var3 = undefined;
            if(var4) { _fun0001_ip = 39; continue _fun0001 }
 30:
            var4 = var7.toString;
            var3 = var4.bind(var7)();
 39:
            if(!(var5 == var3)) { _fun0001_ip = 48; continue _fun0001 }
 43:
            var3 = var2.id;
 48:
            var1['id'] = var3;
            var3 = var2.description;
            if(!(var5 != var3)) { _fun0001_ip = 72; continue _fun0001 }
 61:
            var3 = var2.description;
            var1['description'] = var3;
 72:
            var3 = {};
            var4 = var2.spoiler;
            var3['spoiler'] = var4;
            var3 = var3.spoiler;
            var7 = '';
            var4 = var7;
            if(!var3) { _fun0001_ip = 108; continue _fun0001 }
 101:
            var4 = _closure1_slot2;
 108:
            if(!(var5 == var8)) { _fun0001_ip = 118; continue _fun0001 }
 112:
            var8 = var2.filename;
 118:
            var3 = global;
            var3 = var3.HermesInternal;
            var3 = var3.concat;
            var3 = var3.bind(var7)(var4, var8);
            var1['filename'] = var3;
            var3 = var2.uploadedFilename;
            var1['uploaded_filename'] = var3;
            var3 = 'durationSecs';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var4 = var2.durationSecs;
            var3 = var5 != var4;
 178:
            if(!var3) { _fun0001_ip = 193; continue _fun0001 }
 181:
            var3 = var2.durationSecs;
            var1['duration_secs'] = var3;
 193:
            var3 = 'waveform';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 214; continue _fun0001 }
 204:
            var4 = var2.waveform;
            var3 = var5 != var4;
 214:
            if(!var3) { _fun0001_ip = 229; continue _fun0001 }
 217:
            var3 = var2.waveform;
            var1['waveform'] = var3;
 229:
            var3 = 'isThumbnail';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 252; continue _fun0001 }
 240:
            var7 = var2.isThumbnail;
            var4 = true;
            var3 = var4 === var7;
 252:
            if(!var3) { _fun0001_ip = 269; continue _fun0001 }
 255:
            var3 = var2.isThumbnail;
            var1['is_thumbnail'] = var3;
 269:
            var3 = 'isRemix';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 292; continue _fun0001 }
 280:
            var7 = var2.isRemix;
            var4 = true;
            var3 = var4 === var7;
 292:
            if(!var3) { _fun0001_ip = 309; continue _fun0001 }
 295:
            var3 = var2.isRemix;
            var1['is_remix'] = var3;
 309:
            var3 = 'clip';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 330; continue _fun0001 }
 320:
            var4 = var2.clip;
            var3 = var5 != var4;
 330:
            if(!var3) { _fun0001_ip = 473; continue _fun0001 }
 336:
            var3 = true;
            var1['is_clip'] = var3;
            var3 = var2.clip;
            var3 = var3.name;
            var1['title'] = var3;
            var3 = var2.clip;
            var3 = var3.applicationId;
            var1['application_id'] = var3;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 1;
            var8 = var7[var3];
            var10 = var4.bind(var6)(var8);
            var9 = var10.getClipCreatedAt;
            var8 = var2.clip;
            var8 = var8.id;
            var8 = var9.bind(var10)(var8);
            var1['clip_created_at'] = var8;
            var3 = var7[var3];
            var6 = var4.bind(var6)(var3);
            var4 = var6.getClipParticipantIds;
            var3 = var2.clip;
            var3 = var3.users;
            var3 = var4.bind(var6)(var3);
            var1['clip_participant_ids'] = var3;
 473:
            var3 = 'item';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 493; continue _fun0001 }
 484:
            var4 = var2.item;
            var3 = var5 != var4;
 493:
            if(!var3) { _fun0001_ip = 509; continue _fun0001 }
 496:
            var5 = var2.item;
            var4 = 'originalContentType';
            var3 = var4 in var5;
 509:
            if(!var3) { _fun0001_ip = 529; continue _fun0001 }
 512:
            var2 = var2.item;
            var2 = var2.originalContentType;
            var1['original_content_type'] = var2;
 529:
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
 0:
                    var3 = _closure3_slot0;
                    var1 = _closure2_slot1;
                    var5 = null;
                    var6 = var5 == var1;
                    var2 = undefined;
                    var1 = undefined;
                    if(var6) { _fun0002_ip = 51; continue _fun0002 }
 27:
                    var4 = _closure2_slot1;
                    var4 = var4.response;
                    var5 = var5 == var4;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 51; continue _fun0002 }
 46:
                    var1 = var4.data;
 51:
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
 0:
                    var2 = _closure3_slot2;
                    var3 = var2.status;
                    var2 = 200;
                    if(!(var3 >= var2)) { _fun0003_ip = 38; continue _fun0003 }
 19:
                    var2 = _closure3_slot2;
                    var3 = var2.status;
                    var2 = 300;
                    if(!(!(var3 < var2))) { _fun0003_ip = 110; continue _fun0003 }
 38:
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
                    _fun0003_ip = 218; continue _fun0003;
 110:
                    var4 = _closure3_slot2;
                    var3 = var4.getResponseHeader;
                    var2 = 'Content-Length';
                    var5 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var5)) { _fun0003_ip = 143; continue _fun0003 }
 135:
                    var2 = '';
                    if(!(var2 === var5)) { _fun0003_ip = 190; continue _fun0003 }
 143:
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
                    _fun0003_ip = 218; continue _fun0003;
 190:
                    var3 = _closure3_slot0;
                    var1 = global;
                    var4 = var1.parseInt;
                    var2 = undefined;
                    var1 = 10;
                    var1 = var4.bind(var2)(var5, var1);
                    var1 = var3.bind(var2)(var1);
 218:
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
    var4 = function getFile(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
            if(var3) { _fun0004_ip = 116; continue _fun0004 }
 91:
            var3 = 0;
            var5 = var5[var3];
            var3 = var4 == var5;
            var8 = undefined;
            if(var3) { _fun0004_ip = 116; continue _fun0004 }
 106:
            var3 = var5.toLowerCase;
            var8 = var3.bind(var5)();
 116:
            var10 = var4 != var8;
            var5 = '';
            var3 = var5;
            if(!var10) { _fun0004_ip = 133; continue _fun0004 }
 130:
            var3 = var8;
 133:
            _closure2_slot1 = var3;
            var11 = _closure1_slot3;
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
            if(!var10) { _fun0004_ip = 171; continue _fun0004 }
 167:
            var10 = var4 != var15;
 171:
            if(!var10) { _fun0004_ip = 194; continue _fun0004 }
 174:
            var10 = _closure1_slot3;
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
 194:
            if(!(var4 != var8)) { _fun0004_ip = 202; continue _fun0004 }
 198:
            if(!(var4 == var15)) { _fun0004_ip = 234; continue _fun0004 }
 202:
            if(!(var4 == var8)) { _fun0004_ip = 222; continue _fun0004 }
 206:
            var1 = var4 != var15;
            var3 = 'unknown';
            if(!var1) { _fun0004_ip = 220; continue _fun0004 }
 217:
            var3 = var15;
 220:
            _fun0004_ip = 232; continue _fun0004;
 222:
            var1 = var8.name;
            var3 = var1.bind(var8)(var9);
 232:
            _fun0004_ip = 348; continue _fun0004;
 234:
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
            if(!(var1 === var14)) { _fun0004_ip = 311; continue _fun0004 }
 289:
            var1 = global;
            var1 = var1.HermesInternal;
            var1 = var1.concat;
            var1 = var1.bind(var5)(var15, var13, var12);
            _fun0004_ip = 345; continue _fun0004;
 311:
            var11 = var15.substr;
            var10 = 0;
            var11 = var11.bind(var15)(var10, var14);
            var10 = global;
            var10 = var10.HermesInternal;
            var10 = var10.concat;
            var1 = var10.bind(var5)(var11, var13, var12);
 345:
            var3 = var1;
 348:
            var1 = {};
            var1['uri'] = var7;
            var1['filename'] = var3;
            var7 = var2;
            if(!(var4 == var2)) { _fun0004_ip = 384; continue _fun0004 }
 367:
            var10 = var4 == var8;
            var3 = undefined;
            if(var10) { _fun0004_ip = 381; continue _fun0004 }
 376:
            var3 = var8.type;
 381:
            var7 = var3;
 384:
            var10 = var4 != var7;
            var3 = 'unknown';
            if(!var10) { _fun0004_ip = 398; continue _fun0004 }
 395:
            var3 = var7;
 398:
            var1['type'] = var3;
            var3 = var2;
            if(!(var4 == var2)) { _fun0004_ip = 431; continue _fun0004 }
 409:
            var10 = var4 == var8;
            var7 = undefined;
            if(var10) { _fun0004_ip = 428; continue _fun0004 }
 418:
            var10 = var8.name;
            var7 = var10.bind(var8)(var9);
 428:
            var3 = var7;
 431:
            var7 = var4 != var3;
            var10 = var5;
            if(!var7) { _fun0004_ip = 444; continue _fun0004 }
 441:
            var10 = var3;
 444:
            var7 = var10.indexOf;
            var3 = 'video';
            var7 = var7.bind(var10)(var3);
            var3 = -1;
            var7 = var3 !== var7;
            var1['isVideo'] = var7;
            if(!(var4 == var2)) { _fun0004_ip = 500; continue _fun0004 }
 478:
            var7 = var4 == var8;
            var6 = undefined;
            if(var7) { _fun0004_ip = 497; continue _fun0004 }
 487:
            var7 = var8.name;
            var6 = var7.bind(var8)(var9);
 497:
            var2 = var6;
 500:
            var4 = var4 != var2;
            if(!var4) { _fun0004_ip = 510; continue _fun0004 }
 507:
            var5 = var2;
 510:
            var4 = var5.indexOf;
            var2 = 'image';
            var2 = var4.bind(var5)(var2);
            var2 = var3 !== var2;
            var1['isImage'] = var2;
            return var1;
        }
    };
    var3['getFile'] = var4;
    var2 = function getOptimalChunkSize(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arguments[1];
            var7 = arguments[2];
            var6 = arguments[3];
            var1 = undefined;
            if(!(var4 === var1)) { _fun0005_ip = 21; continue _fun0005 }
 15:
            var4 = 4096;
 21:
            if(!(var7 === var1)) { _fun0005_ip = 31; continue _fun0005 }
 25:
            var7 = 8388608;
 31:
            if(!(var6 === var1)) { _fun0005_ip = 45; continue _fun0005 }
 35:
            var6 = 0.01;
 45:
            var1 = global;
            var5 = var1.Math;
            var3 = var5.ceil;
            var2 = arg1;
            var2 = var2 * var6;
            var6 = var3.bind(var5)(var2);
            var3 = var1.Math;
            var2 = var3.max;
            var5 = var1.Math;
            var1 = var5.min;
            var1 = var1.bind(var5)(var6, var7);
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var3['getOptimalChunkSize'] = var2;
    return var1;
})();