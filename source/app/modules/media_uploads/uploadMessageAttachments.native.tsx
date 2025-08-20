// app/modules/media_uploads/uploadMessageAttachments.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function _uploadMessageAttachments() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 407; continue _fun0001 }
 15:
                    var3 = var2.channelId;
                    var _closure4_slot0 = var3;
                    var10 = var2.message;
                    var9 = var2.nonce;
                    var _closure4_slot1 = var9;
                    var7 = var2.items;
                    var2 = var2.shouldUploadFailureSendNotification;
                    var _closure4_slot2 = var2;
                    var3 = undefined;
                    var _closure4_slot3 = var3;
                    var _closure4_slot4 = var3;
                    SaveGenerator(address=69);
 67:
                    return var3;
 69:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 404; continue _fun0001 }
 78:
                    var8 = _closure1_slot5;
                    var6 = var8.has;
                    var6 = var6.bind(var8)(var9);
                    if(var6) { _fun0001_ip = 401; continue _fun0001 }
 101:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 2;
                    var6 = var9[var6];
                    var6 = var8.bind(var3)(var6);
                    var8 = var6.prototype;
                    var8 = Object.create(var8, {constructor: {value: var6}});
                    var15 = var8;
                    var6 = new var15[var6](var14);
                    var6 = var6 instanceof Object ? var6 : var8;
                    _closure4_slot3 = var6;
                    var8 = var6._file;
                    var12 = var8.id;
                    var8 = global;
                    var8 = var8.HermesInternal;
                    var11 = var8.concat;
                    var8 = 'pending-upload-';
                    var11 = var11.bind(var8)(var12);
                    var8 = _closure1_slot0;
                    var5 = 3;
                    var5 = var9[var5];
                    var9 = var8.bind(var3)(var5);
                    var8 = var9.createMessageRecord;
                    var5 = {};
                    var14 = var5;
                    var13 = var10;
                    var10 = copyDataProperties(var14, var13);
                    var10 = 'key';
                    var5[var10] = var11;
                    var5 = var8.bind(var9)(var5);
                    _closure4_slot4 = var5;
                    var9 = var6.on;
                    var8 = 'start';
                    var5 = function(arg1) {
                        var4 = _closure1_slot5;
                        var3 = var4.add;
                        var2 = _closure4_slot1;
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'UPLOAD_START';
                        var2['type'] = var6;
                        var6 = _closure4_slot0;
                        var2['channelId'] = var6;
                        var6 = arg1;
                        var2['file'] = var6;
                        var6 = _closure4_slot3;
                        var2['uploader'] = var6;
                        var5 = _closure4_slot4;
                        var2['message'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var5 = var9.bind(var6)(var8, var5);
                    var9 = var6.on;
                    var8 = 'compression-progress';
                    var5 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'UPLOAD_COMPRESSION_PROGRESS';
                        var2['type'] = var5;
                        var5 = _closure4_slot0;
                        var2['channelId'] = var5;
                        var5 = arg1;
                        var2['file'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var5 = var9.bind(var6)(var8, var5);
                    var9 = var6.on;
                    var8 = 'progress';
                    var5 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'UPLOAD_PROGRESS';
                        var2['type'] = var5;
                        var5 = _closure4_slot0;
                        var2['channelId'] = var5;
                        var5 = arg1;
                        var2['file'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var5 = var9.bind(var6)(var8, var5);
                    var9 = var6.on;
                    var8 = 'error';
                    var5 = function(arg1) {
                        var4 = _closure1_slot5;
                        var3 = var4.delete;
                        var2 = _closure4_slot1;
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure4_slot3;
                        var2 = var3.cancel;
                        var2 = var2.bind(var3)();
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'UPLOAD_FAIL';
                        var2['type'] = var6;
                        var6 = _closure4_slot0;
                        var2['channelId'] = var6;
                        var6 = arg1;
                        var2['file'] = var6;
                        var6 = _closure4_slot4;
                        var6 = var6.id;
                        var2['messageId'] = var6;
                        var5 = _closure4_slot2;
                        var2['shouldSendNotification'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var5 = var9.bind(var6)(var8, var5);
                    var9 = var6.on;
                    var8 = 'complete';
                    var5 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var4 = arg1;
                            var _closure5_slot0 = var4;
                            var7 = _closure1_slot5;
                            var6 = var7.delete;
                            var5 = _closure4_slot1;
                            var5 = var6.bind(var7)(var5);
                            var6 = _closure1_slot4;
                            var5 = var6.getMessageForFile;
                            var4 = var4.id;
                            var6 = var5.bind(var6)(var4);
                            var8 = null;
                            var4 = var8 != var6;
                            if(!var4) { _fun0002_ip = 75; continue _fun0002 }
 62:
                            var7 = var6.content;
                            var5 = '';
                            var4 = var5 === var7;
 75:
                            if(!var4) { _fun0002_ip = 88; continue _fun0002 }
 78:
                            var5 = _closure4_slot3;
                            var4 = var5._aborted;
 88:
                            if(!var4) { _fun0002_ip = 161; continue _fun0002 }
 91:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var3 = 4;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.dispatch;
                            var3 = {};
                            var7 = 'MESSAGE_DELETE';
                            var3['type'] = var7;
                            var7 = var6.nonce;
                            if(!(var8 == var7)) { _fun0002_ip = 143; continue _fun0002 }
 138:
                            var7 = var6.id;
 143:
                            var3['id'] = var7;
                            var6 = var6.channel_id;
                            var3['channelId'] = var6;
                            var3 = var4.bind(var5)(var3);
 161:
                            var2 = _closure4_slot3;
                            var2 = var2._aborted;
                            if(!var2) { _fun0002_ip = 197; continue _fun0002 }
 174:
                            var2 = global;
                            var4 = var2.setTimeout;
                            var3 = undefined;
                            var2 = function() {
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 4;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.dispatch;
                                var2 = {};
                                var5 = 'UPLOAD_COMPLETE';
                                var2['type'] = var5;
                                var5 = _closure4_slot0;
                                var2['channelId'] = var5;
                                var5 = _closure5_slot0;
                                var2['file'] = var5;
                                var5 = true;
                                var2['aborted'] = var5;
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            };
                            var1 = 0;
                            var1 = var4.bind(var3)(var2, var1);
 197:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = var9.bind(var6)(var8, var5);
                    var8 = var6.on;
                    var5 = 'cancel-upload-item';
                    var4 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'UPLOAD_FILE_UPDATE';
                        var2['type'] = var5;
                        var5 = arg1;
                        var2['file'] = var5;
                        var5 = _closure4_slot0;
                        var2['channelId'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var8.bind(var6)(var5, var4);
                    var5 = {};
                    var4 = var6.uploadFiles;
                    var4 = var4.bind(var6)(var7);
                    SaveGenerator(address=379);
 377:
                    return var4;
 379:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 398; continue _fun0001 }
 385:
                    var5['attachments'] = var4;
                    var5['uploader'] = var6;
                    return var5;
 398:
                    return var4;
 401:
                    return var3;
 404:
                    return var2;
 407:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = var4.Set;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var14 = var7;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_uploads/uploadMessageAttachments.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function uploadMessageAttachments() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['uploadMessageAttachments'] = var2;
    return var1;
})();