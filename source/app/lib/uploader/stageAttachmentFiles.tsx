// app/lib/uploader/stageAttachmentFiles.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _stageAttachmentFiles() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = undefined;
                    if(!(var2 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var2 = false;
case 4:
                    var _closure4_slot0 = var2;
                    var2 = arguments[2];
                    var _closure4_slot1 = var2;
                    SaveGenerator(address=38);
case 6:
                    return var4;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var5 = var6.map;
                    var3 = function(arg1) {
                        var2 = arg1;
                        var _closure5_slot0 = var2;
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {constructor: {value: var3}});
                        var4 = function(arg1, arg2) {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                                var5 = arg1;
                                var6 = arg2;
                                var _closure6_slot0 = var5;
                                var _closure6_slot1 = var6;
                                var1 = _closure5_slot0;
                                var8 = var1.status;
                                var9 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var10 = 2;
                                var7 = var1[var10];
                                var1 = undefined;
                                var7 = var9.bind(var1)(var7);
                                var7 = var7.CloudUploadStatus;
                                var7 = var7.NOT_STARTED;
                                if(!(var7 !== var8)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                                var9 = _closure1_slot0;
                                var7 = _closure1_slot1;
                                var7 = var7[var10];
                                var7 = var9.bind(var1)(var7);
                                var7 = var7.CloudUploadStatus;
                                var7 = var7.COMPLETED;
                                if(!(var7 !== var8)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                                var9 = _closure1_slot0;
                                var7 = _closure1_slot1;
                                var7 = var7[var10];
                                var7 = var9.bind(var1)(var7);
                                var7 = var7.CloudUploadStatus;
                                var7 = var7.ERROR;
                                if(!(var7 !== var8)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                                var9 = _closure1_slot0;
                                var7 = _closure1_slot1;
                                var7 = var7[var10];
                                var7 = var9.bind(var1)(var7);
                                var7 = var7.CloudUploadStatus;
                                var7 = var7.CANCELED;
                                if(!(var7 !== var8)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                                var9 = _closure1_slot0;
                                var7 = _closure1_slot1;
                                var7 = var7[var10];
                                var7 = var9.bind(var1)(var7);
                                var7 = var7.CloudUploadStatus;
                                var7 = var7.REMOVED_FROM_MSG_DRAFT;
                                if(!(var7 === var8)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                                var7 = global;
                                var9 = var7.Error;
                                var7 = var9.prototype;
                                var8 = Object.create(var7, {constructor: {value: var9}});
                                var12 = 'Upload is removed from draft';
                                var13 = var8;
                                var7 = new var13[var9](var12, var11);
                                var7 = var7 instanceof Object ? var7 : var8;
                                var7 = var6.bind(var1)(var7);
                                _fun0002_ip = 18; continue _fun0002;
case 16:
                                var7 = global;
                                var9 = var7.Error;
                                var7 = var9.prototype;
                                var8 = Object.create(var7, {constructor: {value: var9}});
                                var12 = 'Upload is canceled';
                                var13 = var8;
                                var7 = new var13[var9](var12, var11);
                                var7 = var7 instanceof Object ? var7 : var8;
                                var7 = var6.bind(var1)(var7);
                                _fun0002_ip = 18; continue _fun0002;
case 14:
                                var7 = _closure4_slot0;
                                if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                                var7 = _closure5_slot0;
                                var7 = var7.error;
                                var4 = _closure1_slot3;
                                var4 = var4.ENTITY_TOO_LARGE;
                                if(!(var7 === var4)) { _fun0002_ip = 22; continue _fun0002 }
case 20:
                                var4 = global;
                                var8 = var4.Error;
                                var4 = var8.prototype;
                                var7 = Object.create(var4, {constructor: {value: var8}});
                                var12 = 'File failed to upload';
                                var13 = var7;
                                var4 = new var13[var8](var12, var11);
                                var4 = var4 instanceof Object ? var4 : var7;
                                var4 = var6.bind(var1)(var4);
                                _fun0002_ip = 18; continue _fun0002;
case 22:
                                var6 = _closure5_slot0;
                                var4 = var6.upload;
                                var4 = var4.bind(var6)();
                                _fun0002_ip = 18; continue _fun0002;
case 12:
                                var4 = 'complete';
                                var4 = var5.bind(var1)(var4);
                                _fun0002_ip = 18; continue _fun0002;
case 10:
                                var5 = _closure5_slot0;
                                var4 = var5.upload;
                                var4 = var4.bind(var5)();
case 18:
                                var5 = _closure5_slot0;
                                var6 = var5.on;
                                var4 = 'complete';
                                var3 = function() {
                                    var3 = _closure6_slot0;
                                    var1 = undefined;
                                    var2 = 'complete';
                                    var2 = var3.bind(var1)(var2);
                                    return var1;
                                };
                                var3 = var6.bind(var5)(var4, var3);
                                var6 = var5.on;
                                var4 = 'error';
                                var3 = function() {
                                    var3 = _closure6_slot1;
                                    var1 = global;
                                    var4 = var1.Error;
                                    var2 = _closure5_slot0;
                                    var6 = var2.id;
                                    var1 = var1.HermesInternal;
                                    var5 = var1.concat;
                                    var2 = 'File ';
                                    var1 = ' failed to upload';
                                    var8 = var5.bind(var2)(var6, var1);
                                    var2 = var4.prototype;
                                    var2 = Object.create(var2, {constructor: {value: var4}});
                                    var9 = var2;
                                    var1 = new var9[var4](var8, var7);
                                    var2 = var1 instanceof Object ? var1 : var2;
                                    var1 = undefined;
                                    var2 = var3.bind(var1)(var2);
                                    return var1;
                                };
                                var3 = var6.bind(var5)(var4, var3);
                                var4 = var5.on;
                                var3 = 'progress';
                                var2 = function(arg1, arg2) {
                                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                        var3 = _closure4_slot1;
                                        var2 = null;
                                        if(!(var2 != var3)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                                        var4 = _closure4_slot1;
                                        var3 = undefined;
                                        var2 = arg1;
                                        var1 = arg2;
                                        var1 = var4.bind(var3)(var2, var1);
case 23:
                                        var1 = undefined;
                                        return var1;
                                    }
                                };
                                var2 = var4.bind(var5)(var3, var2);
                                return var1;
                            }
                        };
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    };
                    var6 = var5.bind(var6)(var3);
                    var3 = global;
                    var5 = var3.Promise;
                    var3 = var5.all;
                    var3 = var3.bind(var5)(var6);
                    SaveGenerator(address=82);
case 25:
                    return var3;
case 26:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 27; continue _fun0001 }
case 28:
                    return var4;
case 27:
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot4 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AbortCodes;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/uploader/stageAttachmentFiles.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function stageAttachmentFiles() {
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();