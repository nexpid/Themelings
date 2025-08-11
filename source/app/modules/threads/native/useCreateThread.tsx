// app/modules/threads/native/useCreateThread.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageSendLocation;
    var _closure1_slot6 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/native/useCreateThread.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useCreateThread(arg1) {
        var1 = arg1;
        var11 = var1.parentChannel;
        var10 = var1.parentMessageId;
        var9 = var1.threadSettings;
        var8 = var1.privateThreadMode;
        var7 = var1.location;
        var6 = var1.onThreadCreated;
        var5 = var1.useDefaultThreadName;
        var13 = _closure1_slot1;
        var12 = _closure1_slot2;
        var2 = 4;
        var2 = var12[var2];
        var3 = undefined;
        var2 = var13.bind(var3)(var2);
        var2 = var2.bind(var3)();
        var2 = var2.analyticsLocations;
        var _closure2_slot0 = var2;
        var2 = _closure1_slot0;
        var1 = 5;
        var1 = var12[var1];
        var3 = var2.bind(var3)(var1);
        var2 = var3.useCreateThreadCommon;
        var1 = {};
        var1['parentChannel'] = var11;
        var1['parentMessageId'] = var10;
        var1['threadSettings'] = var9;
        var1['privateThreadMode'] = var8;
        var1['location'] = var7;
        var1['onThreadCreated'] = var6;
        var1['useDefaultThreadName'] = var5;
        var4 = function uploadHandler(arg1, arg2, arg3) {
            var11 = arg1;
            var8 = arg2;
            var _closure3_slot0 = var11;
            var _closure3_slot1 = var8;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 6;
            var2 = var10[var1];
            var1 = undefined;
            var6 = var3.bind(var1)(var2);
            var5 = var6.sendMessage;
            var4 = var11.id;
            var2 = 7;
            var2 = var10[var2];
            var10 = var3.bind(var1)(var2);
            var3 = var10.parse;
            var2 = arg3;
            var14 = var3.bind(var10)(var11, var2);
            var2 = {};
            var9 = _closure1_slot6;
            var9 = var9.THREAD_CREATION;
            var2['location'] = var9;
            var2['attachmentsToUpload'] = var8;
            var7 = function onAttachmentUploadError(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleUploadMessageAttachmentsErrors;
                    var2 = {};
                    var6 = arg1;
                    var2['file'] = var6;
                    var8 = _closure3_slot0;
                    var7 = var8.getGuildId;
                    var7 = var7.bind(var8)();
                    var2['guildId'] = var7;
                    var7 = _closure2_slot0;
                    var2['analyticsLocations'] = var7;
                    var7 = arg2;
                    var2['code'] = var7;
                    var7 = arg3;
                    var2['reason'] = var7;
                    var2 = var3.bind(var4)(var2);
                    if(!var2) { _fun0001_ip = 174; continue _fun0001 }
 97:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setUploads;
                    var2 = {};
                    var7 = _closure3_slot0;
                    var7 = var7.id;
                    var2['channelId'] = var7;
                    var6 = _closure3_slot1;
                    var2['uploads'] = var6;
                    var5 = _closure1_slot5;
                    var5 = var5.FirstThreadMessage;
                    var2['draftType'] = var5;
                    var5 = true;
                    var2['resetState'] = var5;
                    var2 = var3.bind(var4)(var2);
 174:
                    return var1;
                }
            };
            var2['onAttachmentUploadError'] = var7;
            var16 = var6;
            var15 = var4;
            var13 = undefined;
            var12 = var2;
            var2 = var16[var5](var15, var14, var13, var12, var11);
            return var1;
        };
        var1['uploadHandler'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var4;
    var2 = function useCreateForumPost(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var8 = var1.parentChannel;
            var _closure2_slot0 = var8;
            var10 = var1.threadSettings;
            var7 = var1.appliedTags;
            var5 = var1.onThreadCreated;
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 4;
            var4 = var3[var4];
            var9 = undefined;
            var4 = var6.bind(var9)(var4);
            var4 = var4.bind(var9)();
            var6 = var4.analyticsLocations;
            var _closure2_slot1 = var6;
            var12 = _closure1_slot4;
            var11 = var12.useCallback;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            StartGenerator();
                            var3 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                            if(var4) { _fun0003_ip = 192; continue _fun0003 }
 15:
                            var _closure5_slot0 = var3;
                            var7 = undefined;
                            var _closure5_slot1 = var7;
                            var _closure5_slot2 = var7;
                            var6 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var4 = 10;
                            var4 = var8[var4];
                            var4 = var6.bind(var7)(var4);
                            var6 = var4.prototype;
                            var6 = Object.create(var6, {constructor: {value: var4}});
                            var11 = var6;
                            var4 = new var11[var4](var10);
                            var4 = var4 instanceof Object ? var4 : var6;
                            _closure5_slot1 = var4;
                            var6 = _closure1_slot0;
                            var5 = 11;
                            var5 = var8[var5];
                            var7 = var6.bind(var7)(var5);
                            var6 = var7.maxFileSize;
                            var8 = _closure2_slot0;
                            var5 = var8.getGuildId;
                            var5 = var5.bind(var8)();
                            var5 = var6.bind(var7)(var5);
                            _closure5_slot2 = var5;
                            var6 = var4.on;
                            var5 = 'progress';
                            var2 = function(arg1) {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                    var6 = arg1;
                                    var2 = var6.currentSize;
                                    var1 = _closure5_slot2;
                                    if(!(var2 > var1)) { _fun0004_ip = 164; continue _fun0004 }
 23:
                                    var2 = _closure5_slot1;
                                    var1 = var2.cancel;
                                    var1 = var1.bind(var2)();
                                    var2 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var1 = 9;
                                    var1 = var7[var1];
                                    var3 = undefined;
                                    var9 = var2.bind(var3)(var1);
                                    var8 = var9.setUploads;
                                    var1 = {};
                                    var11 = _closure2_slot0;
                                    var11 = var11.id;
                                    var1['channelId'] = var11;
                                    var11 = _closure5_slot0;
                                    var1['uploads'] = var11;
                                    var10 = _closure1_slot5;
                                    var10 = var10.FirstThreadMessage;
                                    var1['draftType'] = var10;
                                    var10 = true;
                                    var1['resetState'] = var10;
                                    var1 = var8.bind(var9)(var1);
                                    var1 = 12;
                                    var1 = var7[var1];
                                    var2 = var2.bind(var3)(var1);
                                    var1 = {};
                                    var1['file'] = var6;
                                    var5 = _closure5_slot2;
                                    var1['maxSize'] = var5;
                                    var4 = _closure2_slot1;
                                    var1['analyticsLocations'] = var4;
                                    var1 = var2.bind(var3)(var1);
 164:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var2 = var6.bind(var4)(var5, var2);
                            var2 = var4.uploadFiles;
                            var2 = var2.bind(var4)(var3);
                            SaveGenerator(address=162);
 160:
                            return var2;
 162:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0003_ip = 189; continue _fun0003 }
 168:
                            var3 = {};
                            var4 = var4._file;
                            var3['uploaderFile'] = var4;
                            var3['files'] = var2;
                            return var3;
 189:
                            return var2;
 192:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var4 = var2.bind(var9)();
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var8;
            var4 = var11.bind(var12)(var4, var2);
            var2 = _closure1_slot0;
            var1 = 5;
            var1 = var3[var1];
            var3 = var2.bind(var9)(var1);
            var2 = var3.useCreateForumPostCommon;
            var1 = {};
            var1['parentChannel'] = var8;
            var8 = null;
            var11 = var8 == var10;
            if(var11) { _fun0002_ip = 153; continue _fun0002 }
 148:
            var9 = var10.name;
 153:
            var10 = var8 != var9;
            var8 = '';
            if(!var10) { _fun0002_ip = 167; continue _fun0002 }
 164:
            var8 = var9;
 167:
            var1['name'] = var8;
            var1['appliedTags'] = var7;
            var1['analyticsLocations'] = var6;
            var1['onThreadCreated'] = var5;
            var1['upload'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['useCreateForumPost'] = var2;
    return var1;
})();