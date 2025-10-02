// app/stores/UploadStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function storeLocalUriForUpload(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg2;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot13;
            var7 = var1.items;
            var2 = null;
            var6 = var2 == var7;
            var1 = undefined;
            var3 = undefined;
            if(var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = var7.map;
            var5 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var2 = var3.item;
                    var6 = _closure1_slot6;
                    var5 = var6.test;
                    var4 = var2.originalUri;
                    var4 = var5.bind(var6)(var4);
                    if(var4) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var5 = _closure1_slot7;
                    var4 = var5.test;
                    var1 = var2.originalUri;
                    var1 = var4.bind(var5)(var1);
                    if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 10:
                    var1 = undefined;
                    return var1;
case 8:
                    var1 = {};
                    var7 = var2.width;
                    var4 = null;
                    var8 = var4 != var7;
                    var6 = 0;
                    if(!var8) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var6 = var7;
case 11:
                    var1['width'] = var6;
                    var6 = var2.height;
                    var7 = var4 != var6;
                    var5 = 0;
                    if(!var7) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var5 = var6;
case 13:
                    var1['height'] = var5;
                    var6 = var2.originalUri;
                    var7 = var4 != var6;
                    var2 = '';
                    var5 = var2;
                    if(!var7) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var5 = var6;
case 15:
                    var1['localUri'] = var5;
                    var5 = _closure2_slot0;
                    var5 = var5.id;
                    var1['uploaderId'] = var5;
                    var3 = var3.id;
                    var4 = var4 != var3;
                    if(!var4) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var2 = var3;
case 17:
                    var1['uploaderItemId'] = var2;
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var5);
case 6:
            if(!(var2 == var3)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var3 = new Array(0);
case 19:
            var2 = arg1;
            var4[var2] = var3;
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function clearLocalUriForUpload() {
        var1 = {};
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function clearFile(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var6;
            var1 = _closure1_slot9;
            var3 = var1[var4];
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var7 = _closure1_slot9;
            var8 = var3.filter;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 !== var1;
                return var1;
            };
            var5 = var8.bind(var3)(var5);
            var7[var4] = var5;
            var5 = _closure1_slot10;
            var5 = delete var5[var6];
            var5 = _closure1_slot11;
            var5 = delete var5[var6];
            var3 = var3.length;
            var2 = _closure1_slot9;
            var2 = var2[var4];
            var2 = var2.length;
            var1 = var3 !== var2;
case 21:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function updateFile(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var4;
            var2 = _closure1_slot9;
            var8 = var2[var5];
            var3 = null;
            if(!(var3 != var8)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var2 = _closure1_slot9;
            var7 = var8.map;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = arg1;
                    var5 = var4.id;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = var4;
                    if(!(var5 === var2)) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                    var2 = {};
                    var7 = var2;
                    var6 = var4;
                    var4 = copyDataProperties(var7, var6);
                    var6 = _closure2_slot0;
                    var7 = var2;
                    var3 = copyDataProperties(var7, var6);
                    var1 = var2;
case 25:
                    return var1;
                }
            };
            var1 = var7.bind(var8)(var1);
            var2[var5] = var1;
            var2 = _closure1_slot11;
            var1 = var4.id;
            var5 = var2[var1];
            var1 = var3 != var5;
            if(!var1) { _fun0005_ip = 27; continue _fun0005 }
case 5:
            var7 = _closure1_slot12;
            var2 = var5.id;
            var2 = var7[var2];
            var1 = var3 != var2;
case 27:
            if(!var1) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var3 = _closure1_slot12;
            var2 = var5.id;
            var1 = {};
            var6 = _closure1_slot12;
            var5 = var5.id;
            var9 = var6[var5];
            var10 = var1;
            var5 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var4;
            var4 = copyDataProperties(var10, var9);
            var3[var2] = var1;
case 28:
            var1 = undefined;
            return var1;
case 23:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var2 = global;
    var9 = var2.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var7);
    var _closure1_slot0 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot1 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = /^(assets-library|ph|file):\\/\\//;
    var _closure1_slot6 = var7;
    var7 = /^content:\\/\\//;
    var _closure1_slot7 = var7;
    var8 = var2.Object;
    var7 = var8.freeze;
    var2 = new Array(0);
    var2 = var7.bind(var8)(var2);
    var _closure1_slot8 = var2;
    var2 = {};
    var _closure1_slot9 = var2;
    var2 = {};
    var _closure1_slot10 = var2;
    var2 = {};
    var _closure1_slot11 = var2;
    var2 = {};
    var _closure1_slot12 = var2;
    var2 = {};
    var _closure1_slot13 = var2;
    var2 = 6;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function UploadStore() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 32; continue _fun0007;
case 30:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 32:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot5;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getFiles';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = _closure1_slot9;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                var1 = _closure1_slot8;
case 33:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getMessageForFile';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot11;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getUploaderFileForMessageId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot12;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getUploadAttachments';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 == var2)) { _fun0009_ip = 35; continue _fun0009 }
case 36:
                var1 = undefined;
                return var1;
case 35:
                var1 = _closure1_slot13;
                var1 = var1[var2];
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'UploadStore';
    var7['displayName'] = var2;
    var2 = 7;
    var2 = var5[var2];
    var12 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleConnectionOpen() {
        var2 = _closure1_slot16;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['CONNECTION_OPEN'] = var8;
    var8 = function handleLogout() {
        var2 = _closure1_slot16;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['LOGOUT'] = var8;
    var8 = function handleUploadStart(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var7 = var1.channelId;
            var4 = var1.file;
            var8 = var1.uploader;
            var1 = var1.message;
            var2 = var8._aborted;
            if(var2) { _fun0010_ip = 37; continue _fun0010 }
case 38:
            var2 = var8._errored;
            if(var2) { _fun0010_ip = 37; continue _fun0010 }
case 39:
            var3 = _closure1_slot9;
            var9 = var3[var7];
            var5 = null;
            if(!(var5 == var9)) { _fun0010_ip = 3; continue _fun0010 }
case 40:
            var9 = _closure1_slot8;
case 3:
            var6 = _closure1_slot10;
            var3 = var4.id;
            var6[var3] = var8;
            var6 = _closure1_slot9;
            var3 = new Array(1);
            var10 = 0;
            var12 = var3;
            var11 = var9;
            var9 = arraySpread(var12, var11, var10);
            var3[var9] = var4;
            var8 = 1;
            var8 = var9 + var8;
            var6[var7] = var3;
            if(!(var5 != var1)) { _fun0010_ip = 37; continue _fun0010 }
case 41:
            var6 = _closure1_slot11;
            var3 = var4.id;
            var6[var3] = var1;
            var9 = var4.items;
            if(!(var5 != var9)) { _fun0010_ip = 42; continue _fun0010 }
case 43:
            var7 = _closure1_slot12;
            var6 = var1.id;
            var3 = {};
            var12 = var3;
            var11 = var4;
            var8 = copyDataProperties(var12, var11);
            var8 = 'items';
            var3[var8] = var9;
            var7[var6] = var3;
case 42:
            var3 = _closure1_slot15;
            var2 = var1.nonce;
            if(!(var5 == var2)) { _fun0010_ip = 44; continue _fun0010 }
case 45:
            var2 = var1.id;
case 44:
            var1 = undefined;
            var1 = var3.bind(var1)(var2, var4);
case 37:
            var1 = undefined;
            return var1;
        }
    };
    var2['UPLOAD_START'] = var8;
    var8 = function handleUploadCompressionProgress(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var3 = var1.file;
        var2 = _closure1_slot18;
        var1 = undefined;
        var2 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var2['UPLOAD_COMPRESSION_PROGRESS'] = var8;
    var8 = function handleUploadProgress(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var3 = var1.file;
        var2 = _closure1_slot18;
        var1 = undefined;
        var2 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var2['UPLOAD_PROGRESS'] = var8;
    var8 = function handleUploadComplete(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var1 = var1.file;
        var3 = _closure1_slot17;
        var2 = var1.id;
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var2['UPLOAD_COMPLETE'] = var8;
    var8 = function handleUploadFail(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var1 = var1.file;
        var3 = _closure1_slot17;
        var2 = var1.id;
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var2['UPLOAD_FAIL'] = var8;
    var8 = function handleUploadCancel(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var1 = var1.file;
            var3 = _closure1_slot10;
            var1 = var1.id;
            var3 = var3[var1];
            var _closure2_slot0 = var3;
            var1 = null;
            if(!(var1 != var3)) { _fun0011_ip = 46; continue _fun0011 }
case 38:
            var1 = global;
            var3 = var1.setImmediate;
            var1 = undefined;
            var2 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var3 = var1.cancel;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0012_ip = 47; continue _fun0012 }
case 33:
                    var3 = _closure2_slot0;
                    var2 = var3.cancel;
                    var1 = var2.bind(var3)();
case 47:
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var2);
            return var1;
case 46:
            var1 = false;
            return var1;
        }
    };
    var2['UPLOAD_CANCEL_REQUEST'] = var8;
    var8 = function handleUploadItemCancel(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var3 = arg1;
            var1 = var3.file;
            var3 = var3.itemId;
            var _closure2_slot0 = var3;
            var3 = _closure1_slot10;
            var1 = var1.id;
            var3 = var3[var1];
            var _closure2_slot1 = var3;
            var1 = null;
            if(!(var1 != var3)) { _fun0013_ip = 30; continue _fun0013 }
case 48:
            var1 = global;
            var3 = var1.setImmediate;
            var1 = undefined;
            var2 = function() {
                var3 = _closure2_slot1;
                var2 = var3.cancelItem;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var1)(var2);
            return var1;
case 30:
            var1 = false;
            return var1;
        }
    };
    var2['UPLOAD_ITEM_CANCEL_REQUEST'] = var8;
    var8 = function handleUploadFileUpdate(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var3 = var1.file;
            var5 = _closure1_slot11;
            var2 = var3.id;
            var2 = var5[var2];
            var7 = null;
            if(!(var7 != var2)) { _fun0014_ip = 49; continue _fun0014 }
case 50:
            var6 = _closure1_slot15;
            var5 = var2.nonce;
            if(!(var7 == var5)) { _fun0014_ip = 51; continue _fun0014 }
case 6:
            var5 = var2.id;
case 51:
            var2 = undefined;
            var2 = var6.bind(var2)(var5, var3);
case 49:
            var2 = _closure1_slot18;
            var1 = undefined;
            var2 = var2.bind(var1)(var4, var3);
            return var1;
        }
    };
    var2['UPLOAD_FILE_UPDATE'] = var8;
    var4 = function restoreFailedUpload(arg1) {
        var1 = arg1;
        var3 = var1.file;
        var2 = var1.messageId;
        var1 = _closure1_slot12;
        var1[var2] = var3;
        var1 = undefined;
        return var1;
    };
    var2['UPLOAD_RESTORE_FAILED_UPLOAD'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var7](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/UploadStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();