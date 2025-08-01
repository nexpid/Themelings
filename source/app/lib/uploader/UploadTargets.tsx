// app/lib/uploader/UploadTargets.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var10 = 0;
    var4 = var7[var10];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var9 = 1;
    var4 = var7[var9];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var8 = 2;
    var4 = var7[var8];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.Endpoints;
    var _closure1_slot7 = var5;
    var4 = var4.MAX_UPLOAD_COUNT;
    var _closure1_slot8 = var4;
    var4 = function() {
        var4 = _closure1_slot5;
        var3 = function MessageAttachmentUploadTarget() {
            var4 = _closure1_slot4;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'getCreateAttachmentURL';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var3 = _closure1_slot7;
            var2 = var3.MESSAGE_CREATE_ATTACHMENT_UPLOAD;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(6);
        var2[0] = var1;
        var1 = {};
        var6 = 'getDeleteUploadURL';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = _closure1_slot7;
            var2 = var3.MESSAGE_DELETE_UPLOAD;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'getMaxFileSize';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot6;
                var3 = var4.getBasicChannel;
                var2 = arg1;
                var4 = var3.bind(var4)(var2);
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.maxFileSize;
                var5 = null;
                var5 = var5 == var4;
                if(var5) { _fun0001_ip = 63; continue _fun0001 }
 58:
                var1 = var4.guild_id;
 63:
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getMaxAttachmentsCount';
        var1['key'] = var6;
        var6 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getMaxTotalAttachmentSize';
        var1['key'] = var6;
        var6 = function value() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.MAX_TOTAL_ATTACHMENT_SIZE;
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'shouldReactNativeCompressUploads';
        var1['key'] = var6;
        var5 = function get() {
            var1 = true;
            return var1;
        };
        var1['get'] = var5;
        var2[5] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot9 = var4;
    var4 = {};
    var4['MESSAGE_ATTACHMENT'] = var10;
    var5 = 'MESSAGE_ATTACHMENT';
    var4[var10] = var5;
    var4['GUILD_PRODUCT_ATTACHMENT'] = var9;
    var5 = 'GUILD_PRODUCT_ATTACHMENT';
    var4[var9] = var5;
    var4['GRAVITY_ATTACHMENT'] = var8;
    var5 = 'GRAVITY_ATTACHMENT';
    var4[var8] = var5;
    var _closure1_slot10 = var4;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'lib/uploader/UploadTargets.tsx';
    var5 = var6.bind(var7)(var5);
    var3['UploadTargets'] = var4;
    var2 = function getUploadTarget(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot10;
            var2 = var2.GUILD_PRODUCT_ATTACHMENT;
            if(!(var2 !== var3)) { _fun0002_ip = 114; continue _fun0002 }
 20:
            var2 = _closure1_slot10;
            var2 = var2.GRAVITY_ATTACHMENT;
            if(!(var2 !== var3)) { _fun0002_ip = 70; continue _fun0002 }
 34:
            var2 = _closure1_slot10;
            var2 = var2.MESSAGE_ATTACHMENT;
            var2 = _closure1_slot9;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var6 = var3;
            var2 = new var6[var2](var5);
            var2 = var2 instanceof Object ? var2 : var3;
            return var2;
 70:
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var6 = var3;
            var2 = new var6[var2](var5);
            var2 = var2 instanceof Object ? var2 : var3;
            return var2;
 114:
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var6 = var2;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var3['getUploadTarget'] = var2;
    return var1;
})();