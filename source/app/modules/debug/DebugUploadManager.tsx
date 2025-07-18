// app/modules/debug/DebugUploadManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var1 = native4;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var1 = function _uploadDebugLogFiles() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 582; continue _fun0001 }
 10:
                    var3 = arg1;
                    var4 = arg2;
                    var9 = undefined;
                    var6 = undefined;
 20: // try_start_0
                    var7 = _closure1_slot12;
                    var3 = var7.bind(var9)(var3);
                    SaveGenerator(address=36);
 34:
                    return var3;
 36:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 99; continue _fun0001 }
 42:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 7;
                    var5 = var8[var5];
                    var8 = var7.bind(var9)(var5);
                    var7 = var8.uploadRtcLogFiles;
                    var5 = var4;
                    var4 = 14680064;
                    var4 = var7.bind(var8)(var4, var5);
                    SaveGenerator(address=87);
 85:
                    return var4;
 87:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 96; continue _fun0001 }
 93: // try_end0
                    return var9;
 96:
                    return var4;
 99:
                    return var3;
 102: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var2 = var5;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var8 = 5;
                    var4 = var4[var8];
                    var4 = var7.bind(var9)(var4);
                    var4 = var4.UploadVoiceDebugLogsError;
                    var4 = var5 instanceof var4;
                    if(!var4) { _fun0001_ip = 507; continue _fun0001 }
 146:
                    var4 = var2;
                    var7 = var4.code;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var4 = var5.bind(var9)(var4);
                    var4 = var4.UploadErrorCodes;
                    var4 = var4.GENERAL;
                    if(!(var4 !== var7)) { _fun0001_ip = 472; continue _fun0001 }
 190:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var4 = var5.bind(var9)(var4);
                    var4 = var4.UploadErrorCodes;
                    var4 = var4.NO_FILE;
                    if(!(var4 !== var7)) { _fun0001_ip = 438; continue _fun0001 }
 226:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var4 = var5.bind(var9)(var4);
                    var4 = var4.UploadErrorCodes;
                    var4 = var4.PROGRESS;
                    if(!(var4 !== var7)) { _fun0001_ip = 404; continue _fun0001 }
 262:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var4 = var5.bind(var9)(var4);
                    var4 = var4.UploadErrorCodes;
                    var4 = var4.UPLOAD;
                    if(!(var4 !== var7)) { _fun0001_ip = 370; continue _fun0001 }
 295:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var4 = var5.bind(var9)(var4);
                    var4 = var4.UploadErrorCodes;
                    var5 = var4.READ;
                    var4 = undefined;
                    if(!(var5 === var7)) { _fun0001_ip = 504; continue _fun0001 }
 333:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 6;
                    var5 = var8[var5];
                    var5 = var7.bind(var9)(var5);
                    var5 = var5.AVUnderlyingError;
                    var4 = var5.UploadErrorRead;
                    _fun0001_ip = 504; continue _fun0001;
 370:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 6;
                    var5 = var8[var5];
                    var5 = var7.bind(var9)(var5);
                    var5 = var5.AVUnderlyingError;
                    var4 = var5.UploadErrorUpload;
                    _fun0001_ip = 504; continue _fun0001;
 404:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 6;
                    var5 = var8[var5];
                    var5 = var7.bind(var9)(var5);
                    var5 = var5.AVUnderlyingError;
                    var4 = var5.UploadErrorProgress;
                    _fun0001_ip = 504; continue _fun0001;
 438:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 6;
                    var5 = var8[var5];
                    var5 = var7.bind(var9)(var5);
                    var5 = var5.AVUnderlyingError;
                    var4 = var5.UploadErrorNoFile;
                    _fun0001_ip = 504; continue _fun0001;
 472:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 6;
                    var5 = var8[var5];
                    var5 = var7.bind(var9)(var5);
                    var5 = var5.AVUnderlyingError;
                    var4 = var5.UploadErrorGeneral;
 504:
                    var6 = var4;
 507:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var7 = 6;
                    var3 = var10[var7];
                    var5 = var8.bind(var9)(var3);
                    var4 = var5.reportAVError;
                    var3 = {};
                    var7 = var10[var7];
                    var7 = var8.bind(var9)(var7);
                    var7 = var7.AVError;
                    var7 = var7.DEBUG_LOG_UPLOAD_FAILED;
                    var3['type'] = var7;
                    var3['underlyingError'] = var6;
                    var6 = var2.message;
                    var3['errorMessage'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
 582:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var2 = function uploadAppLogFiles() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var2;
    var1 = function _uploadAppLogFiles() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 1097; continue _fun0002 }
 12:
                    var3 = arg1;
                    var2 = undefined;
                    var11 = undefined;
                    var10 = undefined;
                    var8 = undefined;
                    var9 = undefined;
                    var6 = undefined;
                    var4 = undefined;
 29: // try_start_0 // try_start_4
                    var12 = _closure1_slot2;
                    var13 = _closure1_slot3;
                    var7 = 8;
                    var7 = var13[var7];
                    var12 = var12.bind(var2)(var7);
                    var7 = var12.stringify;
                    var11 = var7.bind(var12)();
 62: // try_end0
                    _fun0002_ip = 90; continue _fun0002;
 64: // catch_target0
                    CatchBlockStart(arg_register=12);
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var12 = var7.concat;
                    var7 = 'Logs failed: ';
                    var11 = var12.bind(var7)(var13);
 90: // try_start_1
                    var7 = _closure1_slot9;
                    var12 = null;
                    var14 = var12 == var7;
                    var7 = undefined;
                    if(var14) { _fun0002_ip = 118; continue _fun0002 }
 108:
                    var13 = _closure1_slot9;
                    var7 = var13.getSystemLog;
 118:
                    var7 = var12 != var7;
                    var12 = '';
                    if(!var7) { _fun0002_ip = 177; continue _fun0002 }
 129:
                    var7 = global;
                    var14 = var7.Promise;
                    var7 = var14.prototype;
                    var13 = Object.create(var7, {constructor: {value: var14}});
                    var39 = function(arg1) {
                        var3 = _closure1_slot9;
                        var2 = var3.getSystemLog;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var40 = var13;
                    var7 = new var40[var14](var39, var38);
                    var7 = var7 instanceof Object ? var7 : var13;
                    SaveGenerator(address=168);
 166:
                    return var7;
 168:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=12);
                    var12 = var7;
                    if(var13) { _fun0002_ip = 182; continue _fun0002 }
 177:
                    var10 = var12;
 180: // try_end1
                    _fun0002_ip = 211; continue _fun0002;
 182: // try_end4
                    return var7;
 185: // try_start_5 // catch_target1
                    CatchBlockStart(arg_register=12);
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var12 = var7.concat;
                    var7 = 'System Logs failed ';
                    var10 = var12.bind(var7)(var13);
 211: // try_start_2
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var7 = 9;
                    var7 = var13[var7];
                    var7 = var12.bind(var2)(var7);
                    var12 = var7.bind(var2)();
                    var7 = var12.then;
                    var5 = function(arg1) {
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 10;
                        var1 = var3[var1];
                        var4 = undefined;
                        var3 = var2.bind(var4)(var1);
                        var2 = arg1;
                        var1 = true;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var5 = var7.bind(var12)(var5);
                    SaveGenerator(address=259);
 257:
                    return var5;
 259:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 270; continue _fun0002 }
 265:
                    var8 = var5;
 268: // try_end2
                    _fun0002_ip = 299; continue _fun0002;
 270: // try_end5
                    return var5;
 273: // try_start_6 // catch_target2
                    CatchBlockStart(arg_register=11);
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var7 = var5.concat;
                    var5 = 'Push logs failed: ';
                    var8 = var7.bind(var5)(var12);
 299: // try_start_3
                    var7 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var5 = 11;
                    var5 = var12[var5];
                    var7 = var7.bind(var2)(var5);
                    var5 = var7.consumeLogs;
                    var7 = var5.bind(var7)();
                    var6 = var7;
                    var5 = null;
                    var7 = var5 != var7;
                    var5 = '';
                    if(!var7) { _fun0002_ip = 351; continue _fun0002 }
 348:
                    var5 = var6;
 351:
                    var9 = var5;
 354: // try_end3
                    _fun0002_ip = 382; continue _fun0002;
 356: // catch_target3
                    CatchBlockStart(arg_register=6);
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var6 = var5.concat;
                    var5 = 'LibDiscore logs failed: ';
                    var9 = var6.bind(var5)(var7);
 382:
                    var5 = var11;
                    var6 = var5.length;
                    var5 = var10;
                    var5 = var5.length;
                    var6 = var6 + var5;
                    var5 = var8;
                    var5 = var5.length;
                    var6 = var6 + var5;
                    var5 = var9;
                    var5 = var5.length;
                    var6 = var6 + var5;
                    var4 = var6;
                    var5 = _closure1_slot7;
                    if(!(var6 > var5)) { _fun0002_ip = 652; continue _fun0002 }
 443:
                    var5 = _closure1_slot7;
                    var5 = var5 / var4;
                    var4 = 1;
                    var15 = var4 - var5;
                    var12 = var11;
                    var6 = var12.slice;
                    var13 = var12.length;
                    var4 = global;
                    var16 = var4.Math;
                    var14 = var16.floor;
                    var5 = var12.length;
                    var5 = var5 * var15;
                    var5 = var14.bind(var16)(var5);
                    var5 = var13 - var5;
                    var11 = var6.bind(var12)(var5);
                    var12 = var10;
                    var6 = var12.slice;
                    var13 = var12.length;
                    var16 = var4.Math;
                    var14 = var16.floor;
                    var5 = var12.length;
                    var5 = var5 * var15;
                    var5 = var14.bind(var16)(var5);
                    var5 = var13 - var5;
                    var10 = var6.bind(var12)(var5);
                    var12 = var8;
                    var6 = var12.slice;
                    var13 = var12.length;
                    var16 = var4.Math;
                    var14 = var16.floor;
                    var5 = var12.length;
                    var5 = var5 * var15;
                    var5 = var14.bind(var16)(var5);
                    var5 = var13 - var5;
                    var8 = var6.bind(var12)(var5);
                    var6 = var9;
                    var5 = var6.slice;
                    var12 = var6.length;
                    var14 = var4.Math;
                    var13 = var14.floor;
                    var4 = var6.length;
                    var4 = var4 * var15;
                    var4 = var13.bind(var14)(var4);
                    var4 = var12 - var4;
                    var9 = var5.bind(var6)(var4);
 652:
                    var4 = _closure1_slot10;
                    var6 = null;
                    var5 = var6 == var4;
                    var4 = undefined;
                    if(var5) { _fun0002_ip = 677; continue _fun0002 }
 667:
                    var5 = _closure1_slot10;
                    var4 = var5.AppOpenedTimestamp;
 677:
                    var4 = var6 != var4;
                    var6 = null;
                    if(!var4) { _fun0002_ip = 696; continue _fun0002 }
 686:
                    var4 = _closure1_slot10;
                    var6 = var4.AppOpenedTimestamp;
 696:
                    var15 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var4 = 12;
                    var4 = var5[var4];
                    var4 = var15.bind(var2)(var4);
                    var23 = var4.bind(var2)(var6);
                    var4 = _closure1_slot0;
                    var6 = 13;
                    var6 = var5[var6];
                    var12 = var4.bind(var2)(var6);
                    var6 = var12.serializeComponentRenderAverages;
                    var22 = var6.bind(var12)();
                    var6 = global;
                    var14 = var6.JSON;
                    var13 = var14.stringify;
                    var12 = 14;
                    var12 = var5[var12];
                    var12 = var15.bind(var2)(var12);
                    var12 = var12.bind(var2)();
                    var15 = 2;
                    var35 = var13.bind(var14)(var12, var2, var15);
                    var14 = var6.JSON;
                    var13 = var14.stringify;
                    var16 = _closure1_slot5;
                    var12 = var16.getDebugInfo;
                    var12 = var12.bind(var16)();
                    var33 = var13.bind(var14)(var12, var2, var15);
                    var31 = var11;
                    var29 = var10;
                    var27 = var9;
                    var25 = var8;
                    var6 = var6.HermesInternal;
                    var15 = var6.concat;
                    var14 = '\n    ';
                    var38 = '\n\n    ';
                    var36 = '\n\n    Metadata:\n    ';
                    var34 = '\n\n    ChannelStore:\n    ';
                    var32 = '\n\n    Logs:\n    ';
                    var30 = '\n\n    System logs:\n    ';
                    var28 = '\n\n    LibDiscore logs:\n    ';
                    var26 = '\n\n    Push Notifications:\n    ';
                    var40 = var14;
                    var39 = var23;
                    var37 = var22;
                    var24 = var14;
                    var6 = var40[var15](var39, var38, var37, var36, var35, var34, var33, var32, var31, var30, var29, var28, var27, var26, var25, var24, var23);
                    var9 = _closure1_slot2;
                    var8 = 8;
                    var8 = var5[var8];
                    var9 = var9.bind(var2)(var8);
                    var8 = var9.clear;
                    var8 = var8.bind(var9)();
                    var9 = _closure1_slot6;
                    var8 = var9.DEBUG_LOG;
                    var7 = var3;
                    var3 = 'discord_app_logs';
                    var7 = var8.bind(var9)(var7, var3);
                    var3 = 15;
                    var3 = var5[var3];
                    var3 = var4.bind(var2)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.post;
                    var3 = {'url': null, 'body': null, 'retries': 3, 'headers': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var3['url'] = var7;
                    var3['body'] = var6;
                    var6 = {};
                    var7 = 'text/plain';
                    var6['Content-Type'] = var7;
                    var3['headers'] = var6;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=1035);
 1033:
                    return var3;
 1035:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 1043; continue _fun0002 }
 1041: // try_end6
                    _fun0002_ip = 1094; continue _fun0002;
 1043:
                    return var3;
 1046: // catch_target4 // catch_target5 // catch_target6
                    CatchBlockStart(arg_register=2);
                    var5 = _closure1_slot8;
                    var4 = var5.error;
                    var7 = var3.message;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var6 = var3.concat;
                    var3 = 'uploadAppLogFiles: upload app log files error ';
                    var3 = var6.bind(var3)(var7);
                    var3 = var4.bind(var5)(var3);
 1094:
                    return var2;
 1097:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Endpoints;
    var _closure1_slot6 = var5;
    var5 = 9437184;
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var7[var5];
    var9 = var8.bind(var1)(var5);
    var5 = var9.prototype;
    var8 = Object.create(var5, {constructor: {value: var9}});
    var13 = 'DebugUploadManager';
    var14 = var8;
    var5 = new var14[var9](var13, var12);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot8 = var5;
    var5 = 4;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.NativeModules;
    var8 = var8.CrashReportingManager;
    var _closure1_slot9 = var8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.NativeModules;
    var5 = var5.TTIManager;
    var _closure1_slot10 = var5;
    var5 = 16;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/debug/DebugUploadManager.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function uploadDebugLogFiles() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['uploadDebugLogFiles'] = var4;
    var3['uploadAppLogFiles'] = var2;
    return var1;
})();