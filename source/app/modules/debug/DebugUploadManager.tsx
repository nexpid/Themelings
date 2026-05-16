// app/modules/debug/DebugUploadManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var1 = function _uploadDebugLogFiles() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = arg1;
                    var4 = arg2;
                    var9 = undefined;
                    var6 = undefined;
case 4: // try_start_0
                    var7 = _closure1_slot11;
                    var3 = var7.bind(var9)(var3);
                    SaveGenerator(address=36);
case 5:
                    return var3;
case 6:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 7; continue _fun0001 }
case 8:
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
case 9:
                    return var4;
case 10:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 11; continue _fun0001 }
case 12: // try_end0
                    return var9;
case 11:
                    return var4;
case 7:
                    return var3;
case 13: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var2 = var5;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var8 = 5;
                    var4 = var4[var8];
                    var4 = var7.bind(var9)(var4);
                    var4 = var4.UploadVoiceDebugLogsError;
                    var4 = var5 instanceof var4;
                    if(!var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var4 = var2;
                    var7 = var4.code;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var4 = var5.bind(var9)(var4);
                    var4 = var4.UploadErrorCodes;
                    var4 = var4.GENERAL;
                    if(!(var4 !== var7)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var4 = var5.bind(var9)(var4);
                    var4 = var4.UploadErrorCodes;
                    var4 = var4.NO_FILE;
                    if(!(var4 !== var7)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var4 = var5.bind(var9)(var4);
                    var4 = var4.UploadErrorCodes;
                    var4 = var4.PROGRESS;
                    if(!(var4 !== var7)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var4 = var5.bind(var9)(var4);
                    var4 = var4.UploadErrorCodes;
                    var4 = var4.UPLOAD;
                    if(!(var4 !== var7)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var4 = var5.bind(var9)(var4);
                    var4 = var4.UploadErrorCodes;
                    var5 = var4.READ;
                    var4 = undefined;
                    if(!(var5 === var7)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 6;
                    var5 = var8[var5];
                    var5 = var7.bind(var9)(var5);
                    var5 = var5.AVUnderlyingError;
                    var4 = var5.UploadErrorRead;
                    _fun0001_ip = 24; continue _fun0001;
case 22:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 6;
                    var5 = var8[var5];
                    var5 = var7.bind(var9)(var5);
                    var5 = var5.AVUnderlyingError;
                    var4 = var5.UploadErrorUpload;
                    _fun0001_ip = 24; continue _fun0001;
case 20:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 6;
                    var5 = var8[var5];
                    var5 = var7.bind(var9)(var5);
                    var5 = var5.AVUnderlyingError;
                    var4 = var5.UploadErrorProgress;
                    _fun0001_ip = 24; continue _fun0001;
case 18:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 6;
                    var5 = var8[var5];
                    var5 = var7.bind(var9)(var5);
                    var5 = var5.AVUnderlyingError;
                    var4 = var5.UploadErrorNoFile;
                    _fun0001_ip = 24; continue _fun0001;
case 16:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 6;
                    var5 = var8[var5];
                    var5 = var7.bind(var9)(var5);
                    var5 = var5.AVUnderlyingError;
                    var4 = var5.UploadErrorGeneral;
case 24:
                    var6 = var4;
case 14:
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
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var2 = function uploadAppLogFiles() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var2;
    var1 = function _uploadAppLogFiles() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var4 = arg1;
                    var2 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    var9 = undefined;
                    var10 = undefined;
                    var6 = undefined;
                    var3 = undefined;
case 28: // try_start_0 // try_start_4
                    var8 = _closure1_slot2;
                    var13 = _closure1_slot3;
                    var7 = 8;
                    var7 = var13[var7];
                    var8 = var8.bind(var2)(var7);
                    var7 = var8.stringify;
                    var12 = var7.bind(var8)();
case 29: // try_end0
                    _fun0002_ip = 30; continue _fun0002;
case 31: // catch_target0
                    CatchBlockStart(arg_register=12);
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var8 = var7.concat;
                    var7 = 'Logs failed: ';
                    var12 = var8.bind(var7)(var13);
case 30: // try_start_1
                    var7 = _closure1_slot9;
                    var8 = null;
                    var14 = var8 == var7;
                    var7 = undefined;
                    if(var14) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                    var13 = _closure1_slot9;
                    var7 = var13.getSystemLog;
case 32:
                    var7 = var8 != var7;
                    var8 = '';
                    if(!var7) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                    var7 = global;
                    var14 = var7.Promise;
                    var7 = var14.prototype;
                    var13 = Object.create(var7, {constructor: {value: var14}});
                    var40 = function(arg1) {
                        var3 = _closure1_slot9;
                        var2 = var3.getSystemLog;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var41 = var13;
                    var7 = new var41[var14](var40, var39);
                    var7 = var7 instanceof Object ? var7 : var13;
                    SaveGenerator(address=168);
case 36:
                    return var7;
case 37:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=12);
                    var8 = var7;
                    if(var13) { _fun0002_ip = 38; continue _fun0002 }
case 34:
                    var11 = var8;
case 39: // try_end1
                    _fun0002_ip = 40; continue _fun0002;
case 38: // try_end4
                    return var7;
case 41: // try_start_5 // catch_target1
                    CatchBlockStart(arg_register=12);
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var8 = var7.concat;
                    var7 = 'System Logs failed ';
                    var11 = var8.bind(var7)(var13);
case 40: // try_start_2
                    var8 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var7 = 9;
                    var7 = var13[var7];
                    var7 = var8.bind(var2)(var7);
                    var8 = var7.bind(var2)();
                    var7 = var8.then;
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
                    var5 = var7.bind(var8)(var5);
                    SaveGenerator(address=259);
case 42:
                    return var5;
case 43:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 44; continue _fun0002 }
case 45:
                    var9 = var5;
case 46: // try_end2
                    _fun0002_ip = 47; continue _fun0002;
case 44: // try_end5
                    return var5;
case 48: // try_start_6 // catch_target2
                    CatchBlockStart(arg_register=7);
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var7 = var5.concat;
                    var5 = 'Push logs failed: ';
                    var9 = var7.bind(var5)(var8);
case 47: // try_start_3
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 11;
                    var5 = var8[var5];
                    var7 = var7.bind(var2)(var5);
                    var5 = var7.consumeLogs;
                    var7 = var5.bind(var7)();
                    var6 = var7;
                    var5 = null;
                    var7 = var5 != var7;
                    var5 = '';
                    if(!var7) { _fun0002_ip = 49; continue _fun0002 }
case 50:
                    var5 = var6;
case 49:
                    var10 = var5;
case 51: // try_end3
                    _fun0002_ip = 52; continue _fun0002;
case 53: // catch_target3
                    CatchBlockStart(arg_register=6);
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var6 = var5.concat;
                    var5 = 'LibDiscore logs failed: ';
                    var10 = var6.bind(var5)(var7);
case 52:
                    var5 = var12;
                    var6 = var5.length;
                    var5 = var11;
                    var5 = var5.length;
                    var6 = var6 + var5;
                    var5 = var9;
                    var5 = var5.length;
                    var6 = var6 + var5;
                    var5 = var10;
                    var5 = var5.length;
                    var6 = var6 + var5;
                    var3 = var6;
                    var5 = _closure1_slot7;
                    if(!(var6 > var5)) { _fun0002_ip = 54; continue _fun0002 }
case 55:
                    var5 = _closure1_slot7;
                    var5 = var5 / var3;
                    var3 = 1;
                    var15 = var3 - var5;
                    var7 = var12;
                    var6 = var7.slice;
                    var13 = var7.length;
                    var3 = global;
                    var16 = var3.Math;
                    var14 = var16.floor;
                    var5 = var7.length;
                    var5 = var5 * var15;
                    var5 = var14.bind(var16)(var5);
                    var5 = var13 - var5;
                    var12 = var6.bind(var7)(var5);
                    var7 = var11;
                    var6 = var7.slice;
                    var13 = var7.length;
                    var16 = var3.Math;
                    var14 = var16.floor;
                    var5 = var7.length;
                    var5 = var5 * var15;
                    var5 = var14.bind(var16)(var5);
                    var5 = var13 - var5;
                    var11 = var6.bind(var7)(var5);
                    var7 = var9;
                    var6 = var7.slice;
                    var13 = var7.length;
                    var16 = var3.Math;
                    var14 = var16.floor;
                    var5 = var7.length;
                    var5 = var5 * var15;
                    var5 = var14.bind(var16)(var5);
                    var5 = var13 - var5;
                    var9 = var6.bind(var7)(var5);
                    var6 = var10;
                    var5 = var6.slice;
                    var7 = var6.length;
                    var14 = var3.Math;
                    var13 = var14.floor;
                    var3 = var6.length;
                    var3 = var3 * var15;
                    var3 = var13.bind(var14)(var3);
                    var3 = var7 - var3;
                    var10 = var5.bind(var6)(var3);
case 54:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var6 = 12;
                    var3 = var3[var6];
                    var3 = var5.bind(var2)(var3);
                    var3 = var3.default;
                    var7 = null;
                    var3 = var7 != var3;
                    if(!var3) { _fun0002_ip = 56; continue _fun0002 }
case 57:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var6];
                    var3 = var5.bind(var2)(var3);
                    var5 = var3.default;
                    var3 = var5.getAppFirstVisibleTimestamp;
                    var3 = var3.bind(var5)();
                    SaveGenerator(address=722);
case 58:
                    return var3;
case 59:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    var7 = var3;
                    if(var5) { _fun0002_ip = 60; continue _fun0002 }
case 56:
                    var16 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var5 = 13;
                    var5 = var6[var5];
                    var5 = var16.bind(var2)(var5);
                    var24 = var5.bind(var2)(var7);
                    var5 = _closure1_slot0;
                    var7 = 14;
                    var7 = var6[var7];
                    var13 = var5.bind(var2)(var7);
                    var7 = var13.serializeComponentRenderAverages;
                    var23 = var7.bind(var13)();
                    var7 = global;
                    var15 = var7.JSON;
                    var14 = var15.stringify;
                    var13 = 15;
                    var13 = var6[var13];
                    var13 = var16.bind(var2)(var13);
                    var13 = var13.bind(var2)();
                    var16 = 2;
                    var36 = var14.bind(var15)(var13, var2, var16);
                    var15 = var7.JSON;
                    var14 = var15.stringify;
                    var17 = _closure1_slot5;
                    var13 = var17.getDebugInfo;
                    var13 = var13.bind(var17)();
                    var34 = var14.bind(var15)(var13, var2, var16);
                    var32 = var12;
                    var30 = var11;
                    var28 = var10;
                    var26 = var9;
                    var7 = var7.HermesInternal;
                    var16 = var7.concat;
                    var15 = '\n    ';
                    var39 = '\n\n    ';
                    var37 = '\n\n    Metadata:\n    ';
                    var35 = '\n\n    ChannelStore:\n    ';
                    var33 = '\n\n    Logs:\n    ';
                    var31 = '\n\n    System logs:\n    ';
                    var29 = '\n\n    LibDiscore logs:\n    ';
                    var27 = '\n\n    Push Notifications:\n    ';
                    var41 = var15;
                    var40 = var24;
                    var38 = var23;
                    var25 = var15;
                    var7 = var41[var16](var40, var39, var38, var37, var36, var35, var34, var33, var32, var31, var30, var29, var28, var27, var26, var25, var24);
                    var10 = _closure1_slot2;
                    var9 = 8;
                    var9 = var6[var9];
                    var10 = var10.bind(var2)(var9);
                    var9 = var10.clear;
                    var9 = var9.bind(var10)();
                    var10 = _closure1_slot6;
                    var9 = var10.DEBUG_LOG;
                    var8 = var4;
                    var4 = 'discord_app_logs';
                    var8 = var9.bind(var10)(var8, var4);
                    var4 = 16;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.post;
                    var4 = {'url': null, 'body': null, 'retries': 3, 'headers': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var4['url'] = var8;
                    var4['body'] = var7;
                    var7 = {};
                    var8 = 'text/plain';
                    var7['Content-Type'] = var8;
                    var4['headers'] = var7;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=1075);
case 61:
                    return var4;
case 62:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 63; continue _fun0002 }
case 64: // try_end6
                    _fun0002_ip = 65; continue _fun0002;
case 63:
                    return var4;
case 60:
                    return var3;
case 66: // catch_target4 // catch_target5 // catch_target6
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
case 65:
                    return var2;
case 26:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
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
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.NativeModules;
    var5 = var5.CrashReportingManager;
    var _closure1_slot9 = var5;
    var5 = 17;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/debug/DebugUploadManager.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function uploadDebugLogFiles() {
        var1 = undefined;
        var4 = _closure1_slot10;
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