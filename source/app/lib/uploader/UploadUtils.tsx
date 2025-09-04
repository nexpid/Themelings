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
 0:
                var4 = arg1;
                var1 = global;
                var1 = var1.File;
                var2 = var4 instanceof var1;
                var1 = var4;
                if(!var2) { _fun0001_ip = 34; continue _fun0001 }
 21:
                var3 = var4.slice;
                var2 = arg2;
                var1 = var3.bind(var4)(var2);
 34:
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
 0:
                var3 = arg1;
                var1 = arg2;
                var6 = this;
                var5 = null;
                var7 = var5 == var1;
                var4 = undefined;
                var2 = undefined;
                if(var7) { _fun0002_ip = 28; continue _fun0002 }
 22:
                var2 = var1.fileByteRange;
 28:
                if(!(var5 != var2)) { _fun0002_ip = 68; continue _fun0002 }
 32:
                var5 = var6.sliceBody;
                var2 = var3.body;
                var1 = var1.fileByteRange;
                var1 = var1.start;
                var1 = var5.bind(var6)(var2, var1);
                var3['body'] = var1;
 68:
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
 0:
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
                if(var2) { _fun0003_ip = 94; continue _fun0003 }
 58:
                var2 = global;
                var4 = var2.Error;
                var2 = var4.prototype;
                var3 = Object.create(var2, {constructor: {value: var4}});
                var7 = 'Libdiscore is not loaded';
                var8 = var3;
                var2 = new var8[var4](var7, var6);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
 94:
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var5 = 'doUpload';
        var1['key'] = var5;
        var2 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
                if(!(var4 != var5)) { _fun0004_ip = 390; continue _fun0004 }
 60:
                var7 = var6.body;
                var9 = var4 == var7;
                var2 = undefined;
                if(var9) { _fun0004_ip = 79; continue _fun0004 }
 74:
                var2 = var7.uri;
 79:
                var7 = var8 !== var2;
                if(!var7) { _fun0004_ip = 107; continue _fun0004 }
 86:
                var2 = var6.body;
                var2 = var2.uri;
                var9 = 'string';
                var2 = typeof var2;
                var7 = var9 === var2;
 107:
                var2 = undefined;
                if(!var7) { _fun0004_ip = 173; continue _fun0004 }
 112:
                var7 = var6.body;
                var10 = var7.uri;
                var9 = var10.startsWith;
                var7 = 'file://';
                var7 = var9.bind(var10)(var7);
                var9 = var6.body;
                var11 = var9.uri;
                if(var7) { _fun0004_ip = 157; continue _fun0004 }
 152:
                var7 = var11;
                _fun0004_ip = 170; continue _fun0004;
 157:
                var10 = var11.slice;
                var9 = 7;
                var7 = var10.bind(var11)(var9);
 170:
                var2 = var7;
 173:
                if(!(var8 !== var2)) { _fun0004_ip = 354; continue _fun0004 }
 180:
                var7 = '';
                if(!(var7 !== var2)) { _fun0004_ip = 354; continue _fun0004 }
 191:
                var7 = {};
                var7['path'] = var2;
                var9 = var4 == var3;
                var2 = undefined;
                if(var9) { _fun0004_ip = 227; continue _fun0004 }
 207:
                var9 = var3.fileByteRange;
                var10 = var4 == var9;
                var2 = undefined;
                if(var10) { _fun0004_ip = 227; continue _fun0004 }
 222:
                var2 = var9.start;
 227:
                var7['byteRangeStart'] = var2;
                var9 = var4 == var3;
                var2 = undefined;
                if(var9) { _fun0004_ip = 263; continue _fun0004 }
 243:
                var3 = var3.fileByteRange;
                var4 = var4 == var3;
                var2 = undefined;
                if(var4) { _fun0004_ip = 263; continue _fun0004 }
 258:
                var2 = var3.end;
 263:
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
 0:
                            var2 = _closure3_slot0;
                            var2 = var2.signal;
                            var5 = null;
                            if(!(var5 != var2)) { _fun0005_ip = 31; continue _fun0005 }
 19:
                            var2 = var2.aborted;
                            if(var2) { _fun0005_ip = 420; continue _fun0005 }
 31:
                            var4 = _closure3_slot1;
                            var3 = var4.getHttpRequestStatus;
                            var2 = _closure3_slot2;
                            var6 = var3.bind(var4)(var2);
                            var3 = var5 == var6;
                            var2 = undefined;
                            var4 = undefined;
                            if(var3) { _fun0005_ip = 66; continue _fun0005 }
 61:
                            var4 = var6.status;
 66:
                            var3 = 'success';
                            if(!(var3 !== var4)) { _fun0005_ip = 330; continue _fun0005 }
 77:
                            var3 = var5 == var6;
                            var4 = undefined;
                            if(var3) { _fun0005_ip = 91; continue _fun0005 }
 86:
                            var4 = var6.status;
 91:
                            var3 = 'error';
                            if(!(var3 !== var4)) { _fun0005_ip = 283; continue _fun0005 }
 102:
                            var3 = var5 == var6;
                            var4 = undefined;
                            if(var3) { _fun0005_ip = 116; continue _fun0005 }
 111:
                            var4 = var6.status;
 116:
                            var3 = 'progressing';
                            if(!(var3 !== var4)) { _fun0005_ip = 177; continue _fun0005 }
 126:
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
                            _fun0005_ip = 418; continue _fun0005;
 177:
                            var3 = _closure3_slot0;
                            var3 = var3.onRequestProgress;
                            if(!(var2 !== var3)) { _fun0005_ip = 254; continue _fun0005 }
 191:
                            var3 = var6.uploaded_bytes;
                            if(!(var5 != var3)) { _fun0005_ip = 254; continue _fun0005 }
 201:
                            var4 = var6.uploaded_bytes;
                            var3 = 0;
                            if(!(var4 > var3)) { _fun0005_ip = 254; continue _fun0005 }
 213:
                            var7 = {};
                            var3 = var6.uploaded_bytes;
                            var7['loaded'] = var3;
                            var3 = var6.total_bytes;
                            var7['total'] = var3;
                            var4 = _closure3_slot0;
                            var3 = var4.onRequestProgress;
                            var3 = var3.bind(var4)(var7);
 254:
                            var3 = global;
                            var7 = var3.setTimeout;
                            var4 = _closure4_slot2;
                            var3 = 50;
                            var3 = var7.bind(var2)(var4, var3);
                            _fun0005_ip = 418; continue _fun0005;
 283:
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
                            _fun0005_ip = 418; continue _fun0005;
 330:
                            var4 = _closure4_slot0;
                            var3 = {};
                            var8 = var6.response;
                            var9 = var5 == var8;
                            var7 = undefined;
                            if(var9) { _fun0005_ip = 359; continue _fun0005 }
 354:
                            var7 = var8.status;
 359:
                            var3['status'] = var7;
                            var8 = var6.response;
                            var9 = var5 == var8;
                            var7 = undefined;
                            if(var9) { _fun0005_ip = 384; continue _fun0005 }
 378:
                            var7 = var8.headers;
 384:
                            var3['headers'] = var7;
                            var6 = var6.response;
                            var7 = var5 == var6;
                            var5 = undefined;
                            if(var7) { _fun0005_ip = 409; continue _fun0005 }
 404:
                            var5 = var6.body;
 409:
                            var3['text'] = var5;
                            var3 = var4.bind(var2)(var3);
 418:
                            return var2;
 420:
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
 354:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var13 = 'No file path found in request body';
                var14 = var2;
                var1 = new var14[var3](var13, var12);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
 390:
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
 0:
            var4 = arg1;
            var2 = arg2;
            var3 = var2.id;
            var1 = var4.uri;
            if(!(var3 !== var1)) { _fun0006_ip = 172; continue _fun0006 }
 23:
            var3 = var2.id;
            var1 = null;
            if(!(var1 != var3)) { _fun0006_ip = 51; continue _fun0006 }
 34:
            var5 = var2.id;
            var3 = var4.id;
            if(!(var5 !== var3)) { _fun0006_ip = 172; continue _fun0006 }
 51:
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
            if(!(var5 !== var3)) { _fun0006_ip = 107; continue _fun0006 }
 103:
            var3 = false;
            return var3;
 107:
            var2 = var2.item;
            var3 = var4.filename;
            var5 = var2.originalUri;
            var4 = var4.uri;
            if(!(var5 !== var4)) { _fun0006_ip = 168; continue _fun0006 }
 133:
            if(!(var1 != var3)) { _fun0006_ip = 160; continue _fun0006 }
 137:
            var2 = var2.originalUri;
            if(!(var1 != var2)) { _fun0006_ip = 160; continue _fun0006 }
 147:
            var1 = var2.includes;
            var1 = var1.bind(var2)(var3);
            if(var1) { _fun0006_ip = 164; continue _fun0006 }
 160:
            var1 = false;
            return var1;
 164:
            var1 = true;
            return var1;
 168:
            var1 = true;
            return var1;
 172:
            var1 = true;
            return var1;
        }
    };
    var3['doesImageMatchUpload'] = var6;
    var6 = function calculateProgress(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = arg2;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0007_ip = 59; continue _fun0007 }
 9:
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
 59:
            return var1;
        }
    };
    var3['calculateProgress'] = var6;
    var3['DefaultHttpClient'] = var5;
    var4 = function canUploadNatively(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
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
            if(!var1) { _fun0008_ip = 64; continue _fun0008 }
 53:
            var6 = var3.uri;
            var5 = null;
            var1 = var5 != var6;
 64:
            if(!var1) { _fun0008_ip = 103; continue _fun0008 }
 67:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var5 = 4;
            var5 = var7[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.fileIsInAppDir;
            var3 = var3.uri;
            var1 = var5.bind(var6)(var3);
 103:
            if(!var1) { _fun0008_ip = 136; continue _fun0008 }
 106:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 5;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isLibdiscoreLoaded;
            var1 = var2.bind(var3)();
 136:
            return var1;
        }
    };
    var3['canUploadNatively'] = var4;
    var3['LibdiscoreHttpClient'] = var2;
    return var1;
})();