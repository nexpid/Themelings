// app/lib/uploader/native/CloudUploaderUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var10 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var8;
    var1 = function _prepareMessageRequestBodyCloud(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(!(var1 != var6)) { _fun0001_ip = 44; continue _fun0001 }
 40:
            if(!(var1 == var2)) { _fun0001_ip = 67; continue _fun0001 }
 44:
            var1 = {};
            var14 = var1;
            var13 = var2;
            var3 = copyDataProperties(var14, var13);
            var3 = 'attachments';
            var1[var3] = var10;
            _fun0001_ip = 164; continue _fun0001;
 67:
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
 164:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var6 = function prepareMessageRequestHeaders(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = {};
            var2 = arg1;
            var1['Authorization'] = var2;
            var4 = _closure1_slot5;
            var3 = var4.getDebugOptionsHeaderValue;
            var3 = var3.bind(var4)();
            var1['X-Debug-Options'] = var3;
            var3 = _closure1_slot3;
            var3 = var3.locale;
            var1['Accept-Language'] = var3;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 5;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.getSuperPropertiesBase64;
            var4 = var3.bind(var4)();
            var3 = null;
            if(!(var3 != var4)) { _fun0002_ip = 95; continue _fun0002 }
 89:
            var1['X-Super-Properties'] = var4;
 95:
            var4 = _closure1_slot4;
            var2 = var4.getFingerprint;
            var2 = var2.bind(var4)();
            if(!(var3 != var2)) { _fun0002_ip = 119; continue _fun0002 }
 113:
            var1['X-Fingerprint'] = var2;
 119:
            return var1;
        }
    };
    var _closure1_slot7 = var6;
    var4 = function prepareMessagePayload(arg1, arg2, arg3, arg4) {
        var6 = _closure1_slot6;
        var5 = undefined;
        var4 = arg2;
        var2 = arg3;
        var1 = arg4;
        var2 = var6.bind(var5)(var4, var2, var1);
        var1 = {};
        var4 = _closure1_slot7;
        var3 = arg1;
        var3 = var4.bind(var5)(var3);
        var1['headers'] = var3;
        var1['body'] = var2;
        return var1;
    };
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
        var3 = var4.bind(var2)(var3);
        var2 = var3.uniqueId;
        var2 = var2.bind(var3)();
        var1['id'] = var2;
        return var1;
    };
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var10.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var10.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var10.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = {};
    var5['getUploadPayload'] = var2;
    var5['prepareMessagePayload'] = var4;
    var5['prepareMessageRequestHeaders'] = var6;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'lib/uploader/native/CloudUploaderUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['prepareMessagePayload'] = var4;
    var3['getUploadPayload'] = var2;
    return var1;
})();