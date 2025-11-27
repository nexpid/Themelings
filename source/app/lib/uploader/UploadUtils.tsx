// app/lib/uploader/UploadUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var8[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var8[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function DefaultHttpClient() {
            var4 = _closure1_slot2;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'sliceBody';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = arg1;
                var1 = global;
                var1 = var1.File;
                var2 = var4 instanceof var1;
                var1 = var4;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = var4.slice;
                var2 = arg2;
                var1 = var3.bind(var4)(var2);
case 2:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'doUpload';
        var1['key'] = var6;
        var5 = function value(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var1 = arg2;
                var6 = this;
                var5 = null;
                var7 = var5 == var1;
                var4 = undefined;
                var2 = undefined;
                if(var7) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = var1.fileByteRange;
case 4:
                if(!(var5 != var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var5 = var6.sliceBody;
                var2 = var3.body;
                var1 = var1.fileByteRange;
                var1 = var1.start;
                var1 = var5.bind(var6)(var2, var1);
                var3['body'] = var1;
case 6:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.HTTP;
                var1 = var2.put;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var5 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function LibdiscoreHttpClient() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = _closure1_slot2;
                var4 = _closure2_slot0;
                var1 = undefined;
                var3 = this;
                var3 = var5.bind(var1)(var3, var4);
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 5;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.isLibdiscoreLoaded;
                var2 = var2.bind(var3)();
                if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var2 = global;
                var4 = var2.Error;
                var2 = var4.prototype;
                var3 = Object.create(var2, {constructor: {value: var4}});
                var7 = 'Libdiscore is not loaded';
                var8 = var3;
                var2 = new var8[var4](var7, var6);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
case 8:
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var5 = 'doUpload';
        var1['key'] = var5;
        var2 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var6 = arg1;
                var3 = arg2;
                var _closure3_slot0 = var6;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 5;
                var2 = var5[var2];
                var8 = undefined;
                var4 = var4.bind(var8)(var2);
                var2 = var4.getHttpClientAPI;
                var5 = var2.bind(var4)();
                var _closure3_slot1 = var5;
                var4 = null;
                if(!(var4 != var5)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                var7 = var6.body;
                var9 = var4 == var7;
                var2 = undefined;
                if(var9) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                var2 = var7.uri;
case 12:
                var7 = var8 !== var2;
                if(!var7) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var2 = var6.body;
                var2 = var2.uri;
                var9 = 'string';
                var2 = typeof var2;
                var7 = var9 === var2;
case 14:
                var2 = undefined;
                if(!var7) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var7 = var6.body;
                var10 = var7.uri;
                var9 = var10.startsWith;
                var7 = 'file://';
                var7 = var9.bind(var10)(var7);
                var9 = var6.body;
                var11 = var9.uri;
                if(var7) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var7 = var11;
                _fun0004_ip = 20; continue _fun0004;
case 18:
                var10 = var11.slice;
                var9 = 7;
                var7 = var10.bind(var11)(var9);
case 20:
                var2 = var7;
case 16:
                if(!(var8 !== var2)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                var7 = '';
                if(!(var7 !== var2)) { _fun0004_ip = 21; continue _fun0004 }
case 23:
                var7 = {};
                var7['path'] = var2;
                var9 = var4 == var3;
                var2 = undefined;
                if(var9) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var9 = var3.fileByteRange;
                var10 = var4 == var9;
                var2 = undefined;
                if(var10) { _fun0004_ip = 24; continue _fun0004 }
case 26:
                var2 = var9.start;
case 24:
                var7['byteRangeStart'] = var2;
                var9 = var4 == var3;
                var2 = undefined;
                if(var9) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                var3 = var3.fileByteRange;
                var4 = var4 == var3;
                var2 = undefined;
                if(var4) { _fun0004_ip = 27; continue _fun0004 }
case 29:
                var2 = var3.end;
case 27:
                var7['byteRangeEnd'] = var2;
                var4 = var5.httpRequest;
                var3 = var6.url;
                var2 = {};
                var8 = 'PUT';
                var2['method'] = var8;
                var2['body'] = var7;
                var6 = var6.headers;
                var2['headers'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot2 = var2;
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var13 = function(arg1, arg2) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var2 = arg2;
                    var _closure4_slot1 = var2;
                    var2 = function pollStatus() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var2 = _closure3_slot0;
                            var2 = var2.signal;
                            var5 = null;
                            if(!(var5 != var2)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                            var2 = var2.aborted;
                            if(var2) { _fun0005_ip = 32; continue _fun0005 }
case 30:
                            var4 = _closure3_slot1;
                            var3 = var4.getHttpRequestStatus;
                            var2 = _closure3_slot2;
                            var6 = var3.bind(var4)(var2);
                            var3 = var5 == var6;
                            var2 = undefined;
                            var4 = undefined;
                            if(var3) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                            var4 = var6.status;
case 33:
                            var3 = 'success';
                            if(!(var3 !== var4)) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                            var3 = var5 == var6;
                            var4 = undefined;
                            if(var3) { _fun0005_ip = 37; continue _fun0005 }
case 15:
                            var4 = var6.status;
case 37:
                            var3 = 'error';
                            if(!(var3 !== var4)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                            var3 = var5 == var6;
                            var4 = undefined;
                            if(var3) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                            var4 = var6.status;
case 40:
                            var3 = 'progressing';
                            if(!(var3 !== var4)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                            var4 = _closure4_slot1;
                            var3 = global;
                            var8 = var3.Error;
                            var3 = var8.prototype;
                            var7 = Object.create(var3, {constructor: {value: var8}});
                            var11 = 'Unknown upload status';
                            var12 = var7;
                            var3 = new var12[var8](var11, var10);
                            var3 = var3 instanceof Object ? var3 : var7;
                            var3 = var4.bind(var2)(var3);
                            _fun0005_ip = 44; continue _fun0005;
case 42:
                            var3 = _closure3_slot0;
                            var3 = var3.onRequestProgress;
                            if(!(var2 !== var3)) { _fun0005_ip = 45; continue _fun0005 }
case 23:
                            var3 = var6.uploaded_bytes;
                            if(!(var5 != var3)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                            var4 = var6.uploaded_bytes;
                            var3 = 0;
                            if(!(var4 > var3)) { _fun0005_ip = 45; continue _fun0005 }
case 47:
                            var7 = {};
                            var3 = var6.uploaded_bytes;
                            var7['loaded'] = var3;
                            var3 = var6.total_bytes;
                            var7['total'] = var3;
                            var4 = _closure3_slot0;
                            var3 = var4.onRequestProgress;
                            var3 = var3.bind(var4)(var7);
case 45:
                            var3 = global;
                            var7 = var3.setTimeout;
                            var4 = _closure4_slot2;
                            var3 = 50;
                            var3 = var7.bind(var2)(var4, var3);
                            _fun0005_ip = 44; continue _fun0005;
case 38:
                            var4 = _closure4_slot1;
                            var3 = global;
                            var8 = var3.Error;
                            var11 = var6.error;
                            var7 = var8.prototype;
                            var7 = Object.create(var7, {constructor: {value: var8}});
                            var12 = var7;
                            var3 = new var12[var8](var11, var10);
                            var3 = var3 instanceof Object ? var3 : var7;
                            var3 = var4.bind(var2)(var3);
                            _fun0005_ip = 44; continue _fun0005;
case 35:
                            var4 = _closure4_slot0;
                            var3 = {};
                            var8 = var6.response;
                            var9 = var5 == var8;
                            var7 = undefined;
                            if(var9) { _fun0005_ip = 48; continue _fun0005 }
case 21:
                            var7 = var8.status;
case 48:
                            var3['status'] = var7;
                            var8 = var6.response;
                            var9 = var5 == var8;
                            var7 = undefined;
                            if(var9) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                            var7 = var8.headers;
case 49:
                            var3['headers'] = var7;
                            var6 = var6.response;
                            var7 = var5 == var6;
                            var5 = undefined;
                            if(var7) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                            var5 = var6.body;
case 51:
                            var3['text'] = var5;
                            var3 = var4.bind(var2)(var3);
case 44:
                            return var2;
case 32:
                            var4 = _closure4_slot1;
                            var2 = global;
                            var5 = var2.Error;
                            var2 = var5.prototype;
                            var3 = Object.create(var2, {constructor: {value: var5}});
                            var11 = 'Request cancelled';
                            var12 = var3;
                            var2 = new var12[var5](var11, var10);
                            var3 = var2 instanceof Object ? var2 : var3;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            var3 = _closure3_slot1;
                            var2 = var3.cancelHttpRequest;
                            var1 = _closure3_slot2;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure4_slot2 = var2;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var14 = var2;
                var1 = new var14[var3](var13, var12);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
case 21:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var13 = 'No file path found in request body';
                var14 = var2;
                var1 = new var14[var3](var13, var12);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
case 10:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var13 = 'Libdiscore client is not available';
                var14 = var2;
                var1 = new var14[var3](var13, var12);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'lib/uploader/UploadUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function doesImageMatchUpload(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var3 = var2.id;
            var1 = var4.uri;
            if(!(var3 !== var1)) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var3 = var2.id;
            var1 = null;
            if(!(var1 != var3)) { _fun0006_ip = 55; continue _fun0006 }
case 2:
            var5 = var2.id;
            var3 = var4.id;
            if(!(var5 !== var3)) { _fun0006_ip = 53; continue _fun0006 }
case 55:
            var3 = var2.item;
            var5 = var3.platform;
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 2;
            var6 = var6[var3];
            var3 = undefined;
            var3 = var7.bind(var3)(var6);
            var3 = var3.UploadPlatform;
            var3 = var3.REACT_NATIVE;
            if(!(var5 !== var3)) { _fun0006_ip = 14; continue _fun0006 }
case 56:
            var3 = false;
            return var3;
case 14:
            var2 = var2.item;
            var3 = var4.filename;
            var5 = var2.originalUri;
            var4 = var4.uri;
            if(!(var5 !== var4)) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            if(!(var1 != var3)) { _fun0006_ip = 59; continue _fun0006 }
case 60:
            var2 = var2.originalUri;
            if(!(var1 != var2)) { _fun0006_ip = 59; continue _fun0006 }
case 61:
            var1 = var2.includes;
            var1 = var1.bind(var2)(var3);
            if(var1) { _fun0006_ip = 62; continue _fun0006 }
case 59:
            var1 = false;
            return var1;
case 62:
            var1 = true;
            return var1;
case 57:
            var1 = true;
            return var1;
case 53:
            var1 = true;
            return var1;
        }
    };
    var3['doesImageMatchUpload'] = var6;
    var6 = function calculateProgress(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg2;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0007_ip = 63; continue _fun0007 }
case 64:
            var2 = global;
            var5 = var2.Math;
            var4 = var5.min;
            var7 = var2.Math;
            var6 = var7.floor;
            var2 = arg1;
            var2 = var2 / var3;
            var3 = 100;
            var2 = var2 * var3;
            var2 = var6.bind(var7)(var2);
            var1 = var4.bind(var5)(var2, var3);
case 63:
            return var1;
        }
    };
    var3['calculateProgress'] = var6;
    var3['DefaultHttpClient'] = var5;
    var4 = function canUploadNatively(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var5 = var3.platform;
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var6.bind(var4)(var1);
            var1 = var1.UploadPlatform;
            var1 = var1.REACT_NATIVE;
            var1 = var5 === var1;
            if(!var1) { _fun0008_ip = 65; continue _fun0008 }
case 66:
            var6 = var3.uri;
            var5 = null;
            var1 = var5 != var6;
case 65:
            if(!var1) { _fun0008_ip = 56; continue _fun0008 }
case 67:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var5 = 4;
            var5 = var7[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.fileIsInAppDir;
            var3 = var3.uri;
            var1 = var5.bind(var6)(var3);
case 56:
            if(!var1) { _fun0008_ip = 68; continue _fun0008 }
case 69:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 5;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isLibdiscoreLoaded;
            var1 = var2.bind(var3)();
case 68:
            return var1;
        }
    };
    var3['canUploadNatively'] = var4;
    var3['LibdiscoreHttpClient'] = var2;
    return var1;
})();