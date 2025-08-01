// app/stores/UploadStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
 0:
            var1 = arg2;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot13;
            var7 = var1.items;
            var2 = null;
            var6 = var2 == var7;
            var1 = undefined;
            var3 = undefined;
            if(var6) { _fun0002_ip = 50; continue _fun0002 }
 35:
            var6 = var7.map;
            var5 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = arg1;
                    var2 = var3.item;
                    var6 = _closure1_slot6;
                    var5 = var6.test;
                    var4 = var2.originalUri;
                    var4 = var5.bind(var6)(var4);
                    if(var4) { _fun0003_ip = 61; continue _fun0003 }
 34:
                    var5 = _closure1_slot7;
                    var4 = var5.test;
                    var1 = var2.originalUri;
                    var1 = var4.bind(var5)(var1);
                    if(var1) { _fun0003_ip = 61; continue _fun0003 }
 57:
                    var1 = undefined;
                    return var1;
 61:
                    var1 = {};
                    var7 = var2.width;
                    var4 = null;
                    var8 = var4 != var7;
                    var6 = 0;
                    if(!var8) { _fun0003_ip = 82; continue _fun0003 }
 79:
                    var6 = var7;
 82:
                    var1['width'] = var6;
                    var6 = var2.height;
                    var7 = var4 != var6;
                    var5 = 0;
                    if(!var7) { _fun0003_ip = 103; continue _fun0003 }
 100:
                    var5 = var6;
 103:
                    var1['height'] = var5;
                    var6 = var2.originalUri;
                    var7 = var4 != var6;
                    var2 = '';
                    var5 = var2;
                    if(!var7) { _fun0003_ip = 130; continue _fun0003 }
 127:
                    var5 = var6;
 130:
                    var1['localUri'] = var5;
                    var5 = _closure2_slot0;
                    var5 = var5.id;
                    var1['uploaderId'] = var5;
                    var3 = var3.id;
                    var4 = var4 != var3;
                    if(!var4) { _fun0003_ip = 167; continue _fun0003 }
 164:
                    var2 = var3;
 167:
                    var1['uploaderItemId'] = var2;
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var5);
 50:
            if(!(var2 == var3)) { _fun0002_ip = 58; continue _fun0002 }
 54:
            var3 = new Array(0);
 58:
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
 0:
            var4 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var6;
            var1 = _closure1_slot9;
            var3 = var1[var4];
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0004_ip = 93; continue _fun0004 }
 32:
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
 93:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function updateFile(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var4;
            var2 = _closure1_slot9;
            var8 = var2[var5];
            var3 = null;
            if(!(var3 != var8)) { _fun0005_ip = 141; continue _fun0005 }
 29:
            var2 = _closure1_slot9;
            var7 = var8.map;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = arg1;
                    var5 = var4.id;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = var4;
                    if(!(var5 === var2)) { _fun0006_ip = 53; continue _fun0006 }
 27:
                    var2 = {};
                    var7 = var2;
                    var6 = var4;
                    var4 = copyDataProperties(var7, var6);
                    var6 = _closure2_slot0;
                    var7 = var2;
                    var3 = copyDataProperties(var7, var6);
                    var1 = var2;
 53:
                    return var1;
                }
            };
            var1 = var7.bind(var8)(var1);
            var2[var5] = var1;
            var2 = _closure1_slot11;
            var1 = var4.id;
            var5 = var2[var1];
            var1 = var3 != var5;
            if(!var1) { _fun0005_ip = 89; continue _fun0005 }
 72:
            var7 = _closure1_slot12;
            var2 = var5.id;
            var2 = var7[var2];
            var1 = var3 != var2;
 89:
            if(!var1) { _fun0005_ip = 137; continue _fun0005 }
 92:
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
 137:
            var1 = undefined;
            return var1;
 141:
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
 0:
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
                if(var1) { _fun0007_ip = 69; continue _fun0007 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 105; continue _fun0007;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
 0:
                var3 = _closure1_slot9;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0008_ip = 24; continue _fun0008 }
 20:
                var1 = _closure1_slot8;
 24:
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
 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 == var2)) { _fun0009_ip = 13; continue _fun0009 }
 9:
                var1 = undefined;
                return var1;
 13:
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
 0:
            var1 = arg1;
            var7 = var1.channelId;
            var4 = var1.file;
            var8 = var1.uploader;
            var1 = var1.message;
            var2 = var8._aborted;
            if(var2) { _fun0010_ip = 207; continue _fun0010 }
 37:
            var2 = var8._errored;
            if(var2) { _fun0010_ip = 207; continue _fun0010 }
 49:
            var3 = _closure1_slot9;
            var9 = var3[var7];
            var5 = null;
            if(!(var5 == var9)) { _fun0010_ip = 70; continue _fun0010 }
 66:
            var9 = _closure1_slot8;
 70:
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
            if(!(var5 != var1)) { _fun0010_ip = 207; continue _fun0010 }
 123:
            var6 = _closure1_slot11;
            var3 = var4.id;
            var6[var3] = var1;
            var9 = var4.items;
            if(!(var5 != var9)) { _fun0010_ip = 180; continue _fun0010 }
 146:
            var7 = _closure1_slot12;
            var6 = var1.id;
            var3 = {};
            var12 = var3;
            var11 = var4;
            var8 = copyDataProperties(var12, var11);
            var8 = 'items';
            var3[var8] = var9;
            var7[var6] = var3;
 180:
            var3 = _closure1_slot15;
            var2 = var1.nonce;
            if(!(var5 == var2)) { _fun0010_ip = 199; continue _fun0010 }
 194:
            var2 = var1.id;
 199:
            var1 = undefined;
            var1 = var3.bind(var1)(var2, var4);
 207:
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
 0:
            var1 = arg1;
            var1 = var1.file;
            var3 = _closure1_slot10;
            var1 = var1.id;
            var3 = var3[var1];
            var _closure2_slot0 = var3;
            var1 = null;
            if(!(var1 != var3)) { _fun0011_ip = 59; continue _fun0011 }
 37:
            var1 = global;
            var3 = var1.setImmediate;
            var1 = undefined;
            var2 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = var1.cancel;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0012_ip = 38; continue _fun0012 }
 24:
                    var3 = _closure2_slot0;
                    var2 = var3.cancel;
                    var1 = var2.bind(var3)();
 38:
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var2);
            return var1;
 59:
            var1 = false;
            return var1;
        }
    };
    var2['UPLOAD_CANCEL_REQUEST'] = var8;
    var8 = function handleUploadItemCancel(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var3 = arg1;
            var1 = var3.file;
            var3 = var3.itemId;
            var _closure2_slot0 = var3;
            var3 = _closure1_slot10;
            var1 = var1.id;
            var3 = var3[var1];
            var _closure2_slot1 = var3;
            var1 = null;
            if(!(var1 != var3)) { _fun0013_ip = 69; continue _fun0013 }
 47:
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
 69:
            var1 = false;
            return var1;
        }
    };
    var2['UPLOAD_ITEM_CANCEL_REQUEST'] = var8;
    var8 = function handleUploadFileUpdate(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var3 = var1.file;
            var5 = _closure1_slot11;
            var2 = var3.id;
            var2 = var5[var2];
            var7 = null;
            if(!(var7 != var2)) { _fun0014_ip = 63; continue _fun0014 }
 36:
            var6 = _closure1_slot15;
            var5 = var2.nonce;
            if(!(var7 == var5)) { _fun0014_ip = 55; continue _fun0014 }
 50:
            var5 = var2.id;
 55:
            var2 = undefined;
            var2 = var6.bind(var2)(var5, var3);
 63:
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