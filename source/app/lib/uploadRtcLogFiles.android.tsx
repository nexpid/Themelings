// app/lib/uploadRtcLogFiles.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _uploadRtcLogFiles() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var16 = arg1;
                    var5 = undefined;
                    var19 = undefined;
                    var20 = undefined;
                    var4 = 0;
                    var17 = 0;
                    var2 = ['discord-webrtc_0', 'discord-webrtc_1', 'discord-last-webrtc_0', 'discord-last-webrtc_1'];
                    var18 = var2;
                    var3 = var2.length;
                    var15 = 'uploadRtcLogFiles: Log file is too big, skipping upload';
                    var14 = 5;
                    var13 = 'text/plain';
                    var12 = false;
                    var11 = null;
                    var10 = 3;
                    var9 = 'documents';
                    var8 = 'utf8';
                    var7 = '';
                    if(!(var4 < var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4 = var18;
                    var3 = var17;
                    var19 = var4[var3];
                    var20 = var7;
case 6: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var10];
                    var6 = var4.bind(var5)(var3);
                    var4 = var6.readFile;
                    var3 = var19;
                    var3 = var4.bind(var6)(var9, var3, var8);
                    SaveGenerator(address=137);
case 7:
                    return var3;
case 8:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var20 = var3;
                    if(!(var11 != var3)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var4 = var20;
                    var6 = var4.length;
                    var4 = var16;
                    if(!(!(var6 > var4))) { _fun0001_ip = 13; continue _fun0001 }
case 14: // try_start_1 // try_end0
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var14];
                    var4 = var6.bind(var5)(var4);
                    var21 = var4.HTTP;
                    var6 = var21.post;
                    var4 = {};
                    var25 = _closure1_slot4;
                    var24 = var25.DEBUG_LOG;
                    var22 = _closure1_slot3;
                    var23 = var22.ANDROID_APP;
                    var22 = var19;
                    var22 = var24.bind(var25)(var23, var22);
                    var4['url'] = var22;
                    var22 = var20;
                    var4['body'] = var22;
                    var22 = {};
                    var22['Content-Type'] = var13;
                    var4['headers'] = var22;
                    var4['rejectWithError'] = var12;
                    var4 = var6.bind(var21)(var4);
                    SaveGenerator(address=269);
case 15:
                    return var4;
case 16:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 17; continue _fun0001 }
case 18: // try_end1
                    _fun0001_ip = 11; continue _fun0001;
case 17:
                    return var4;
case 19: // catch_target1
                    CatchBlockStart(arg_register=3);
                    var22 = _closure1_slot5;
                    var21 = var22.error;
                    var26 = var4.status;
                    var25 = var4.message;
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var24 = var6.concat;
                    var23 = 'uploadRtcLogFiles: Log file upload error: status: ';
                    var6 = ', message: ';
                    var6 = var24.bind(var23)(var26, var6, var25);
                    var6 = var21.bind(var22)(var6);
                    var6 = var4.status;
                    var4 = 429;
                    if(!(var4 !== var6)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var6 = _closure1_slot0;
                    var22 = _closure1_slot1;
                    var4 = 4;
                    var21 = var22[var4];
                    var21 = var6.bind(var5)(var21);
                    var21 = var21.UploadVoiceDebugLogsError;
                    var4 = var22[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.UploadErrorCodes;
                    var29 = var4.UPLOAD;
                    var6 = var21.prototype;
                    var6 = Object.create(var6, {constructor: {value: var21}});
                    var30 = var6;
                    var4 = new var30[var21](var29, var28);
                    var4 = var4 instanceof Object ? var4 : var6;
                    throw var4;
case 20:
                    var6 = _closure1_slot0;
                    var22 = _closure1_slot1;
                    var4 = 4;
                    var21 = var22[var4];
                    var21 = var6.bind(var5)(var21);
                    var21 = var21.UploadVoiceDebugLogsError;
                    var4 = var22[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.UploadErrorCodes;
                    var29 = var4.PROGRESS;
                    var6 = var21.prototype;
                    var6 = Object.create(var6, {constructor: {value: var21}});
                    var30 = var6;
                    var4 = new var30[var21](var29, var28);
                    var4 = var4 instanceof Object ? var4 : var6;
                    throw var4;
case 13: // try_start_2
                    var6 = _closure1_slot5;
                    var4 = var6.warn;
                    var4 = var4.bind(var6)(var15);
case 22: // try_end2
                    _fun0001_ip = 11; continue _fun0001;
case 11:
                    var4 = var17;
                    var6 = var4 + 1;
                    var17 = var6;
                    var4 = var18;
                    var4 = var4.length;
                    if(var6 < var4) { _fun0001_ip = 5; continue _fun0001 }
case 4:
                    return var5;
case 9:
                    return var3;
case 23: // catch_target0 // catch_target2
                    CatchBlockStart(arg_register=2);
                    var6 = _closure1_slot5;
                    var4 = var6.error;
                    var8 = var3.message;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var7 = var3.concat;
                    var3 = 'uploadRtcLogFiles: Log file reading error: ';
                    var3 = var7.bind(var3)(var8);
                    var3 = var4.bind(var6)(var3);
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 4;
                    var4 = var6[var2];
                    var4 = var3.bind(var5)(var4);
                    var4 = var4.UploadVoiceDebugLogsError;
                    var2 = var6[var2];
                    var2 = var3.bind(var5)(var2);
                    var2 = var2.UploadErrorCodes;
                    var29 = var2.READ;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var30 = var3;
                    var2 = new var30[var4](var29, var28);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 2:
                    return var1;
                }
            };
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.DebugLogCategory;
    var _closure1_slot3 = var8;
    var4 = var4.Endpoints;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'uploadRtcLogFiles';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/uploadRtcLogFiles.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function uploadRtcLogFiles() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['uploadRtcLogFiles'] = var2;
    return var1;
})();