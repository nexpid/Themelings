// app/lib/uploader/native/CloudUploaderUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var1 = function _prepareMessageRequestBodyCloud(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var6 = arg3;
            var10 = new Array(0);
            var _closure2_slot0 = var10;
            var3 = var4.forEach;
            var1 = function(arg1, arg2) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.getAttachmentPayload;
                var3 = arg1;
                var2 = arg2;
                var6 = var4.bind(var5)(var3, var2);
                var4 = _closure2_slot0;
                var3 = var4.push;
                var2 = {};
                var7 = var2;
                var5 = copyDataProperties(var7, var6);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var1 = null;
            if(!(var1 != var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var1 == var2)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var1 = {};
            var14 = var1;
            var13 = var2;
            var3 = copyDataProperties(var14, var13);
            var3 = 'attachments';
            var1[var3] = var10;
            _fun0001_ip = 5; continue _fun0001;
case 4:
            var5 = {};
            var14 = var5;
            var13 = var2;
            var2 = copyDataProperties(var14, var13);
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 4;
            var4 = var8[var2];
            var3 = undefined;
            var11 = var7.bind(var3)(var4);
            var9 = var11.get;
            var4 = new Array(0);
            var13 = var9.bind(var11)(var5, var6, var4);
            var4 = new Array(0);
            var12 = 0;
            var14 = var4;
            var12 = arraySpread(var14, var13, var12);
            var14 = var4;
            var13 = var10;
            var9 = arraySpread(var14, var13, var12);
            var2 = var8[var2];
            var3 = var7.bind(var3)(var2);
            var2 = var3.set;
            var1 = var2.bind(var3)(var5, var6, var4);
case 5:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var2 = function getUploadPayload(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.filename;
        var1['filename'] = var3;
        var2 = var2.currentSize;
        var1['file_size'] = var2;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.uniqueId;
        var3 = var3.bind(var4)();
        var1['id'] = var3;
        var1['original_content_type'] = var2;
        return var1;
    };
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = {};
    var5['getUploadPayload'] = var2;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'lib/uploader/native/CloudUploaderUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var4 = function prepareMessagePayload(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = _closure1_slot6;
            var7 = undefined;
            var3 = arg2;
            var2 = arg3;
            var1 = arg4;
            var2 = var5.bind(var7)(var3, var2, var1);
            var1 = {};
            var3 = {};
            var5 = arg1;
            var3['Authorization'] = var5;
            var6 = _closure1_slot5;
            var5 = var6.getDebugOptionsHeaderValue;
            var5 = var5.bind(var6)();
            var3['X-Debug-Options'] = var5;
            var5 = _closure1_slot3;
            var5 = var5.locale;
            var3['Accept-Language'] = var5;
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 5;
            var5 = var8[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.getSuperPropertiesBase64;
            var6 = var5.bind(var6)();
            var5 = null;
            if(!(var5 != var6)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3['X-Super-Properties'] = var6;
case 6:
            var6 = _closure1_slot4;
            var4 = var6.getFingerprint;
            var4 = var4.bind(var6)();
            if(!(var5 != var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3['X-Fingerprint'] = var4;
case 8:
            var1['headers'] = var3;
            var1['body'] = var2;
            return var1;
        }
    };
    var3['prepareMessagePayload'] = var4;
    var3['getUploadPayload'] = var2;
    return var1;
})();