// app/modules/screen_recording/native/ScreenRecordingUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _getLatestVideo() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = undefined;
                    var5 = undefined;
case 4: // try_start_0
                    var6 = _closure1_slot5;
                    var3 = var6.getPhotos;
                    var2 = {'first': 1, 'groupTypes': 'Recents', 'assetType': 'Videos'};
                    var7 = ['filename', 'fileSize', 'playableDuration', 'imageSize'];
                    var2['include'] = var7;
                    var2 = var3.bind(var6)(var2);
                    SaveGenerator(address=65);
case 5:
                    return var2;
case 6:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var5 = var2;
                    var3 = null;
                    if(!var2) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var6 = var5;
                    var6 = var6.edges;
                    var3 = null;
                    if(!var6) { _fun0001_ip = 9; continue _fun0001 }
case 11:
                    var6 = var5;
                    var6 = var6.edges;
                    var7 = var6.length;
                    var6 = 0;
                    var7 = var7 > var6;
                    var3 = null;
                    if(!var7) { _fun0001_ip = 9; continue _fun0001 }
case 12:
                    var5 = var5.edges;
                    var3 = var5[var6];
case 9: // try_end0
                    return var3;
case 7:
                    return var2;
case 13: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 3;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var5 = 'Error';
                    var2['title'] = var5;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var6 = var5.concat;
                    var5 = 'Failed to get latest video from photo gallery, error: ';
                    var5 = var6.bind(var5)(var7);
                    var2['body'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = null;
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _checkAndRequestPermissions() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 14; continue _fun0002 }
case 3:
                    var4 = undefined;
                    var7 = undefined;
case 4: // try_start_0
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 4;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.requestPermissions;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=51);
case 15:
                    return var2;
case 16:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var7 = var2;
                    var3 = var2.photosGranted;
                    if(var3) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 3;
                    var3 = var8[var3];
                    var8 = var5.bind(var4)(var3);
                    var5 = var8.show;
                    var3 = {'title': 'Error', 'body': 'Photos permission is required to save recordings'};
                    var3 = var5.bind(var8)(var3);
                    var3 = false;
                    _fun0002_ip = 21; continue _fun0002;
case 19:
                    var7 = var7.microphoneGranted;
                    var7 = !var7;
                    var5 = !var7;
                    if(!var7) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 3;
                    var6 = var8[var6];
                    var8 = var7.bind(var4)(var6);
                    var7 = var8.show;
                    var6 = {'title': 'Error', 'body': 'Microphone permission is required to record audio'};
                    var6 = var7.bind(var8)(var6);
                    var5 = false;
case 22:
                    var3 = var5;
case 21: // try_end0
                    return var3;
case 17:
                    return var2;
case 24: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 3;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var5 = 'Error';
                    var2['title'] = var5;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var6 = var5.concat;
                    var5 = 'Failed to check permissions, error: ';
                    var5 = var6.bind(var5)(var7);
                    var2['body'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = false;
                    return var2;
case 14:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _startRecordingProcess() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 25; continue _fun0003 }
case 3:
                    var3 = arg1;
                    var5 = undefined;
                    var4 = undefined;
case 26: // try_start_0
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 4;
                    var2 = var8[var2];
                    var7 = var7.bind(var5)(var2);
                    var2 = var7.startRecording;
                    var2 = var2.bind(var7)();
                    SaveGenerator(address=54);
case 27:
                    return var2;
case 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0003_ip = 29; continue _fun0003 }
case 5:
                    var4 = var2;
                    var7 = var2.success;
                    if(var7) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 3;
                    var7 = var9[var7];
                    var9 = var8.bind(var5)(var7);
                    var8 = var9.show;
                    var7 = {'title': 'Error', 'body': 'Failed to start screen recording'};
                    var7 = var8.bind(var9)(var7);
                    var7 = {};
                    var8 = false;
                    var7['success'] = var8;
case 32: // try_end0
                    return var7;
case 30: // try_start_1
                    var7 = var3;
                    var10 = null;
                    if(!(var5 !== var7)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 5;
                    var7 = var9[var7];
                    var9 = var8.bind(var5)(var7);
                    var8 = var9.getSurveyConfig;
                    var7 = var3;
                    var10 = var8.bind(var9)(var7);
case 33:
                    var8 = _closure1_slot4;
                    var7 = var8.getState;
                    var9 = var7.bind(var8)();
                    var8 = var9.startRecording;
                    var7 = var4.microphoneEnabled;
                    var3 = var8.bind(var9)(var7, var3, var10);
                    var7 = _closure1_slot4;
                    var3 = var7.getState;
                    var7 = var3.bind(var7)();
                    var3 = var7.resetActionSheet;
                    var3 = var3.bind(var7)();
                    var8 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var7 = 6;
                    var7 = var3[var7];
                    var8 = var8.bind(var5)(var7);
                    var7 = var8.openLazy;
                    var9 = _closure1_slot0;
                    var6 = 8;
                    var6 = var3[var6];
                    var9 = var9.bind(var5)(var6);
                    var6 = 7;
                    var6 = var3[var6];
                    var3 = var3.paths;
                    var6 = var9.bind(var5)(var6, var3);
                    var3 = 'ScreenRecordingActionSheet';
                    var3 = var7.bind(var8)(var6, var3);
                    var3 = {};
                    var6 = true;
                    var3['success'] = var6;
                    var4 = var4.microphoneEnabled;
                    var3['microphoneEnabled'] = var4;
case 35: // try_end1
                    return var3;
case 29:
                    return var2;
case 36: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=7);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 3;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.show;
                    var3 = {};
                    var6 = 'Error';
                    var3['title'] = var6;
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var7 = var6.concat;
                    var6 = 'Failed to start screen recording, error: ';
                    var6 = var7.bind(var6)(var8);
                    var3['body'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure1_slot4;
                    var2 = var3.getState;
                    var3 = var2.bind(var3)();
                    var2 = var3.stopRecording;
                    var2 = var2.bind(var3)();
                    var2 = {};
                    var3 = false;
                    var2['success'] = var3;
                    return var2;
case 25:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function _stopRecordingProcess() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 37; continue _fun0004 }
case 3: // try_start_0
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 4;
                    var2 = var6[var2];
                    var6 = undefined;
                    var5 = var5.bind(var6)(var2);
                    var2 = var5.stopRecording;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=49);
case 38:
                    return var2;
case 15:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                    var5 = var2.success;
                    var5 = !var5;
                    var3 = !var5;
                    if(!var5) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 3;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.show;
                    var4 = {'title': 'Error', 'body': 'Failed to stop screen recording, but not error'};
                    var4 = var5.bind(var6)(var4);
                    var3 = false;
case 41: // try_end0
                    return var3;
case 39:
                    return var2;
case 19: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 3;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.show;
                    var3 = {};
                    var6 = 'Error';
                    var3['title'] = var6;
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var7 = var6.concat;
                    var6 = 'Failed to stop screen recording, error: ';
                    var6 = var7.bind(var6)(var8);
                    var3['body'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure1_slot4;
                    var2 = var3.getState;
                    var3 = var2.bind(var3)();
                    var2 = var3.stopRecording;
                    var2 = var2.bind(var3)();
                    var2 = false;
                    return var2;
case 37:
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
    var1 = function _submitBugReportWithScreenRecording() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                    var10 = arg1;
                    var23 = arg2;
                    var2 = undefined;
                    var4 = undefined;
                    var12 = undefined;
                    var _closure4_slot0 = var2;
                    var14 = undefined;
                    var7 = undefined;
                    var18 = undefined;
                    var24 = undefined;
                    var13 = undefined;
                    var17 = undefined;
                    var19 = undefined;
                    var8 = undefined;
case 45: // try_start_0
                    var9 = _closure1_slot4;
                    var5 = var9.getState;
                    var5 = var5.bind(var9)();
                    var5 = var5.currentSurveyId;
                    var4 = var5;
                    var15 = null;
                    if(!(var15 != var5)) { _fun0005_ip = 46; continue _fun0005 }
case 10:
                    var5 = var4;
                    var9 = '';
                    if(!(var9 !== var5)) { _fun0005_ip = 46; continue _fun0005 }
case 11:
                    var11 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var5 = 5;
                    var5 = var16[var5];
                    var11 = var11.bind(var2)(var5);
                    var5 = var11.getSurveyConfig;
                    var4 = var5.bind(var11)(var4);
                    var12 = var4;
                    _closure4_slot0 = var4;
                    if(!(var15 != var4)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var11 = 9;
                    var4 = var4[var11];
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.fetchBugReportConfig;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=172);
case 49:
                    return var4;
case 50:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                    var20 = var4.features;
                    var16 = var20.find;
                    var5 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var4 = arg1;
                            var6 = var4.name;
                            var3 = null;
                            var5 = var3 == var6;
                            var1 = undefined;
                            if(var5) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                            var5 = var6.toLowerCase;
                            var7 = var5.bind(var6)();
                            var6 = var7.includes;
                            var5 = _closure4_slot0;
                            var5 = var5.uploadConfig;
                            var8 = var5.featureName;
                            var5 = var8.toLowerCase;
                            var5 = var5.bind(var8)();
                            var1 = var6.bind(var7)(var5);
case 53:
                            if(var1) { _fun0006_ip = 48; continue _fun0006 }
case 8:
                            var4 = var4.squad;
                            var3 = var3 == var4;
                            var2 = undefined;
                            if(var3) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                            var3 = var4.toLowerCase;
                            var5 = var3.bind(var4)();
                            var4 = var5.includes;
                            var3 = _closure4_slot0;
                            var3 = var3.uploadConfig;
                            var6 = var3.squadName;
                            var3 = var6.toLowerCase;
                            var3 = var3.bind(var6)();
                            var2 = var4.bind(var5)(var3);
case 55:
                            var1 = var2;
case 48:
                            return var1;
                        }
                    };
                    var14 = var16.bind(var20)(var5);
                    var7 = new Array(0);
                    var5 = function getLatestVideo() {
                        var1 = undefined;
                        var4 = _closure1_slot7;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var5 = var5.bind(var2)();
                    SaveGenerator(address=224);
case 57:
                    return var5;
case 58:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=15);
                    if(var16) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                    var18 = var5;
                    if(!(var15 != var5)) { _fun0005_ip = 61; continue _fun0005 }
case 62:
                    var20 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var22 = 10;
                    var16 = var16[var22];
                    var20 = var20.bind(var2)(var16);
                    var16 = {};
                    var21 = var18;
                    var21 = var21.node;
                    var21 = var21.id;
                    var24 = var21;
                    if(!(var15 == var21)) { _fun0005_ip = 63; continue _fun0005 }
case 64:
                    var21 = var18;
                    var21 = var21.node;
                    var21 = var21.image;
                    var21 = var21.uri;
                    _fun0005_ip = 65; continue _fun0005;
case 63:
                    var21 = var24;
case 65:
                    var16['id'] = var21;
                    var21 = var18.node;
                    var21 = var21.image;
                    var21 = var21.uri;
                    var16['uri'] = var21;
                    var21 = var18.node;
                    var21 = var21.image;
                    var21 = var21.uri;
                    var16['originalUri'] = var21;
                    var21 = var18.node;
                    var21 = var21.image;
                    var21 = var21.mimeType;
                    var16['mimeType'] = var21;
                    var21 = var18.node;
                    var21 = var21.image;
                    var21 = var21.width;
                    var16['width'] = var21;
                    var21 = var18.node;
                    var21 = var21.image;
                    var21 = var21.height;
                    var16['height'] = var21;
                    var21 = var18.node;
                    var21 = var21.image;
                    var21 = var21.filename;
                    var16['filename'] = var21;
                    var18 = var18.node;
                    var18 = var18.image;
                    var18 = var18.playableDuration;
                    var16['playableDuration'] = var18;
                    var21 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var18 = var18[var22];
                    var18 = var21.bind(var2)(var18);
                    var18 = var18.UploadPlatform;
                    var18 = var18.REACT_NATIVE;
                    var16['platform'] = var18;
                    var18 = var20.prototype;
                    var18 = Object.create(var18, {constructor: {value: var20}});
                    var31 = var18;
                    var30 = var16;
                    var16 = new var31[var20](var30, var29);
                    var20 = var16 instanceof Object ? var16 : var18;
                    var18 = var7;
                    var16 = var18.push;
                    var16 = var16.bind(var18)(var20);
case 61:
                    var16 = var23;
                    if(!(var15 != var16)) { _fun0005_ip = 66; continue _fun0005 }
case 67:
                    var16 = var23;
                    if(!(var9 !== var16)) { _fun0005_ip = 66; continue _fun0005 }
case 68:
                    var20 = var23;
                    var18 = var20.split;
                    var16 = '/';
                    var18 = var18.bind(var20)(var16);
                    var16 = var18.pop;
                    var16 = var16.bind(var18)();
                    var13 = var16;
                    if(!(var15 == var16)) { _fun0005_ip = 69; continue _fun0005 }
case 70:
                    var16 = global;
                    var20 = var16.Date;
                    var18 = var20.now;
                    var21 = var18.bind(var20)();
                    var16 = var16.HermesInternal;
                    var20 = var16.concat;
                    var18 = 'audio_';
                    var16 = '.wav';
                    var20 = var20.bind(var18)(var21, var16);
                    _fun0005_ip = 71; continue _fun0005;
case 69:
                    var20 = var13;
case 71:
                    var18 = _closure1_slot1;
                    var21 = _closure1_slot2;
                    var16 = 10;
                    var13 = var21[var16];
                    var18 = var18.bind(var2)(var13);
                    var13 = {};
                    var22 = global;
                    var25 = var22.Date;
                    var24 = var25.now;
                    var26 = var24.bind(var25)();
                    var24 = var22.HermesInternal;
                    var25 = var24.concat;
                    var24 = 'audio_';
                    var24 = var25.bind(var24)(var26);
                    var13['id'] = var24;
                    var24 = var23;
                    var23 = var22.HermesInternal;
                    var25 = var23.concat;
                    var23 = 'file://';
                    var25 = var25.bind(var23)(var24);
                    var13['uri'] = var25;
                    var22 = var22.HermesInternal;
                    var22 = var22.concat;
                    var22 = var22.bind(var23)(var24);
                    var13['originalUri'] = var22;
                    var22 = 'audio/wav';
                    var13['mimeType'] = var22;
                    var13['filename'] = var20;
                    var20 = _closure1_slot0;
                    var16 = var21[var16];
                    var16 = var20.bind(var2)(var16);
                    var16 = var16.UploadPlatform;
                    var16 = var16.REACT_NATIVE;
                    var13['platform'] = var16;
                    var16 = var18.prototype;
                    var16 = Object.create(var16, {constructor: {value: var18}});
                    var31 = var16;
                    var30 = var13;
                    var13 = new var31[var18](var30, var29);
                    var18 = var13 instanceof Object ? var13 : var16;
                    var16 = var7;
                    var13 = var16.push;
                    var13 = var13.bind(var16)(var18);
case 66:
                    var13 = var10;
                    if(!(var2 !== var13)) { _fun0005_ip = 72; continue _fun0005 }
case 73:
                    var13 = var10;
                    var16 = var13.length;
                    var13 = 0;
                    if(!(var16 > var13)) { _fun0005_ip = 72; continue _fun0005 }
case 74:
                    var6 = function formatTranscription(arg1) {
                        var4 = arg1;
                        var5 = {};
                        var1 = global;
                        var2 = var1.Date;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {constructor: {value: var2}});
                        var9 = var3;
                        var2 = new var9[var2](var8);
                        var3 = var2 instanceof Object ? var2 : var3;
                        var2 = var3.toISOString;
                        var2 = var2.bind(var3)();
                        var5['generated'] = var2;
                        var2 = var4.length;
                        var5['totalSegments'] = var2;
                        var3 = var4.map;
                        var2 = function(arg1) {
                            var2 = arg1;
                            var1 = {};
                            var3 = var2.text;
                            var1['text'] = var3;
                            var3 = var2.startTime;
                            var1['startTime'] = var3;
                            var2 = var2.duration;
                            var1['duration'] = var2;
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        var5['segments'] = var2;
                        var4 = var1.JSON;
                        var3 = var4.stringify;
                        var2 = null;
                        var1 = 2;
                        var1 = var3.bind(var4)(var5, var2, var1);
                        return var1;
                    };
                    var28 = var6.bind(var2)(var10);
                    var20 = global;
                    var10 = var20.Date;
                    var6 = var10.now;
                    var13 = var6.bind(var10)();
                    var6 = var20.HermesInternal;
                    var10 = var6.concat;
                    var22 = 'transcription_';
                    var6 = '.json';
                    var18 = var10.bind(var22)(var13, var6);
                    var17 = var18;
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var6 = 11;
                    var6 = var13[var6];
                    var16 = var10.bind(var2)(var6);
                    var13 = var16.writeFile;
                    var30 = 'cache';
                    var27 = 'utf8';
                    var31 = var16;
                    var29 = var18;
                    var6 = var31[var13](var30, var29, var28, var27, var26);
                    SaveGenerator(address=979);
case 75:
                    return var6;
case 76:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=9);
                    if(var10) { _fun0005_ip = 77; continue _fun0005 }
case 78:
                    var19 = var6;
                    if(!(var15 != var6)) { _fun0005_ip = 72; continue _fun0005 }
case 79:
                    var10 = var19;
                    if(!(var9 !== var10)) { _fun0005_ip = 72; continue _fun0005 }
case 80:
                    var16 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var13 = 10;
                    var10 = var18[var13];
                    var16 = var16.bind(var2)(var10);
                    var10 = {};
                    var23 = var20.Date;
                    var21 = var23.now;
                    var21 = var21.bind(var23)();
                    var20 = var20.HermesInternal;
                    var20 = var20.concat;
                    var20 = var20.bind(var22)(var21);
                    var10['id'] = var20;
                    var10['uri'] = var19;
                    var10['originalUri'] = var19;
                    var19 = 'application/json';
                    var10['mimeType'] = var19;
                    var10['filename'] = var17;
                    var17 = _closure1_slot0;
                    var13 = var18[var13];
                    var13 = var17.bind(var2)(var13);
                    var13 = var13.UploadPlatform;
                    var13 = var13.REACT_NATIVE;
                    var10['platform'] = var13;
                    var13 = var16.prototype;
                    var13 = Object.create(var13, {constructor: {value: var16}});
                    var31 = var13;
                    var30 = var10;
                    var10 = new var31[var16](var30, var29);
                    var16 = var10 instanceof Object ? var10 : var13;
                    var13 = var7;
                    var10 = var13.push;
                    var10 = var10.bind(var13)(var16);
case 72:
                    var13 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var10 = 12;
                    var10 = var16[var10];
                    var13 = var13.bind(var2)(var10);
                    var10 = var13.getAttachments;
                    var7 = var10.bind(var13)(var7);
                    SaveGenerator(address=1189);
case 81:
                    return var7;
case 82:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                    if(var10) { _fun0005_ip = 83; continue _fun0005 }
case 84:
                    var8 = var7;
                    if(!(var15 != var7)) { _fun0005_ip = 85; continue _fun0005 }
case 86:
                    var13 = {};
                    var10 = var12;
                    var16 = var10.uploadConfig;
                    var16 = var16.reportTitle;
                    var13['name'] = var16;
                    var16 = var10.uploadConfig;
                    var16 = var16.reportDescription;
                    var13['description'] = var16;
                    var10 = var10.uploadConfig;
                    var10 = var10.priority;
                    var13['priority'] = var10;
                    var10 = var14;
                    if(!(var15 == var10)) { _fun0005_ip = 87; continue _fun0005 }
case 88:
                    var10 = {};
                    var15 = var12;
                    var16 = var15.uploadConfig;
                    var16 = var16.featureName;
                    var10['name'] = var16;
                    var15 = var15.uploadConfig;
                    var15 = var15.squadName;
                    var10['squad'] = var15;
                    var10['asana_inbox_id'] = var2;
                    _fun0005_ip = 89; continue _fun0005;
case 87:
                    var10 = var14;
case 89:
                    var13['feature'] = var10;
                    var13['url'] = var9;
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var11];
                    var11 = var10.bind(var2)(var9);
                    var10 = var11.submitReport;
                    var9 = {};
                    var14 = false;
                    var9['overridePlatformInformation'] = var14;
                    var8 = var10.bind(var11)(var13, var9, var8);
                    SaveGenerator(address=1369);
case 90:
                    return var8;
case 91:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0005_ip = 92; continue _fun0005 }
case 93:
                    var9 = var8.ok;
                    var11 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var10 = 3;
                    var10 = var13[var10];
                    var11 = var11.bind(var2)(var10);
                    var10 = var11.show;
                    if(var9) { _fun0005_ip = 94; continue _fun0005 }
case 95:
                    var9 = {'title': 'Submission Failed', 'body': "Something went wrong and there's no way to fix it. Thanks anyway!"};
                    var9 = var10.bind(var11)(var9);
                    _fun0005_ip = 96; continue _fun0005;
case 94:
                    var9 = {};
                    var13 = var12.uploadConfig;
                    var13 = var13.successTitle;
                    var9['title'] = var13;
                    var12 = var12.uploadConfig;
                    var12 = var12.successMessage;
                    var9['body'] = var12;
                    var9 = var10.bind(var11)(var9);
case 96: // try_end0
                    _fun0005_ip = 97; continue _fun0005;
case 92:
                    return var8;
case 85: // try_start_1
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 3;
                    var8 = var10[var8];
                    var10 = var9.bind(var2)(var8);
                    var9 = var10.show;
                    var8 = {'title': 'Submission Failed', 'body': "Something went wrong and there's no way to fix it. Thanks anyway!"};
                    var8 = var9.bind(var10)(var8);
case 98: // try_end1
                    var8 = undefined;
                    return var8;
case 83:
                    return var7;
case 77:
                    return var6;
case 59:
                    return var5;
case 51:
                    return var4;
case 47: // try_start_2
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 3;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.show;
                    var4 = {'title': 'Submission Failed', 'body': 'Survey configuration not found'};
                    var4 = var5.bind(var6)(var4);
case 99: // try_end2
                    var4 = undefined;
                    return var4;
case 46: // try_start_3
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 3;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.show;
                    var3 = {'title': 'Submission Failed', 'body': 'No survey selected'};
                    var3 = var4.bind(var5)(var3);
case 100: // try_end3
                    var3 = undefined;
                    return var3;
case 101: // catch_target0 // catch_target1 // catch_target2 // catch_target3
                    CatchBlockStart(arg_register=2);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 3;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.show;
                    var3 = {'title': 'Submission Failed', 'body': "Something went wrong and there's no way to fix it. Thanks anyway!"};
                    var3 = var4.bind(var5)(var3);
case 97:
                    return var2;
case 43:
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
    var1 = function _handleStopAndSend() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 102; continue _fun0007 }
case 103:
                    var3 = arg1;
                    var _closure4_slot0 = var3;
                    var3 = undefined;
                    var _closure4_slot1 = var3;
                    var8 = _closure1_slot6;
                    var7 = var8.addListener;
                    var6 = 'ScreenRecordingPreviewFinished';
                    var5 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var6 = arg1;
                            var _closure5_slot0 = var6;
                            var3 = _closure4_slot1;
                            var2 = var3.remove;
                            var2 = var2.bind(var3)();
                            var3 = var6.saved;
                            if(var3) { _fun0008_ip = 104; continue _fun0008 }
case 105:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var3 = 3;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.show;
                            var3 = {};
                            var7 = 'Recording Not Sent';
                            var3['title'] = var7;
                            var8 = var6.action;
                            var6 = 'Recording was shared but not saved to Photos, so it cannot be sent.';
                            var7 = 'cancelled';
                            if(!(var7 === var8)) { _fun0008_ip = 106; continue _fun0008 }
case 107:
                            var6 = 'Recording was cancelled and not saved.';
case 106:
                            var3['body'] = var6;
                            var3 = var4.bind(var5)(var3);
                            _fun0008_ip = 108; continue _fun0008;
case 104:
                            var3 = global;
                            var4 = var3.setTimeout;
                            var2 = _closure1_slot3;
                            var3 = undefined;
                            var1 = function* () {
                                var1 = function* anon_0_() {
                                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                        if(var2) { _fun0009_ip = 109; continue _fun0009 }
case 3:
                                        var4 = _closure4_slot0;
                                        var3 = null;
                                        if(!(var3 != var4)) { _fun0009_ip = 110; continue _fun0009 }
case 111:
                                        var3 = _closure4_slot0;
                                        var2 = undefined;
                                        var2 = var3.bind(var2)();
case 110:
                                        var2 = _closure5_slot0;
                                        var5 = var2.timestampedTranscription;
                                        var4 = var2.audioFilePath;
                                        var2 = function submitBugReportWithScreenRecording() {
                                            var1 = undefined;
                                            var4 = _closure1_slot11;
                                            var3 = var4.apply;
                                            var1 = arguments;
                                            var2 = var1;
                                            var1 = this;
                                            var1 = var3.bind(var4)(var1, var2);
                                            return var1;
                                        };
                                        var3 = undefined;
                                        var2 = var2.bind(var3)(var5, var4);
                                        SaveGenerator(address=77);
case 31:
                                        return var2;
case 112:
                                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                        if(var4) { _fun0009_ip = 23; continue _fun0009 }
case 113:
                                        var6 = _closure1_slot4;
                                        var5 = var6.getState;
                                        var7 = var5.bind(var6)();
                                        var6 = var7.setIsUploading;
                                        var5 = false;
                                        var5 = var6.bind(var7)(var5);
                                        var5 = _closure1_slot4;
                                        var4 = var5.getState;
                                        var5 = var4.bind(var5)();
                                        var4 = var5.stopRecording;
                                        var4 = var4.bind(var5)();
                                        return var3;
case 23:
                                        return var2;
case 109:
                                        return var1;
                                    }
                                };
                                return var1;
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = 1000;
                            var1 = var4.bind(var3)(var2, var1);
case 108:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = var7.bind(var8)(var6, var5);
                    _closure4_slot1 = var5;
                    var5 = _closure1_slot4;
                    var4 = var5.getState;
                    var6 = var4.bind(var5)();
                    var5 = var6.setIsUploading;
                    var4 = true;
                    var4 = var5.bind(var6)(var4);
                    var2 = function stopRecordingProcess() {
                        var1 = undefined;
                        var4 = _closure1_slot10;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=100);
case 114:
                    return var2;
case 115:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 116; continue _fun0007 }
case 117:
                    return var3;
case 116:
                    return var2;
case 102:
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
    var1 = function _handleRecordingPhase() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 24; continue _fun0010 }
case 44:
                    var2 = function checkAndRequestPermissions() {
                        var1 = undefined;
                        var4 = _closure1_slot8;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var5 = undefined;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=29);
case 118:
                    return var2;
case 119:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 17; continue _fun0010 }
case 120:
                    if(!var2) { _fun0010_ip = 121; continue _fun0010 }
case 45:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 13;
                    var6 = var7[var6];
                    var8 = var8.bind(var5)(var6);
                    var6 = var8.getWindowDimensions;
                    var6 = var6.bind(var8)();
                    var9 = var6.width;
                    var8 = var6.height;
                    var6 = _closure1_slot1;
                    var3 = 4;
                    var3 = var7[var3];
                    var7 = var6.bind(var5)(var3);
                    var6 = var7.setRecordingQuality;
                    var3 = {};
                    var3['width'] = var9;
                    var3['height'] = var8;
                    var8 = 50000;
                    var3['bitrate'] = var8;
                    var8 = 15;
                    var3['frameRate'] = var8;
                    var3 = var6.bind(var7)(var3);
                    SaveGenerator(address=147);
case 122:
                    return var3;
case 123:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0010_ip = 21; continue _fun0010 }
case 124:
                    var6 = function startRecordingProcess() {
                        var1 = undefined;
                        var4 = _closure1_slot9;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var4 = arg1;
                    var4 = var6.bind(var5)(var4);
                    SaveGenerator(address=172);
case 49:
                    return var4;
case 50:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0010_ip = 22; continue _fun0010 }
case 125:
                    var6 = var4.success;
case 121:
                    return var5;
case 22:
                    return var4;
case 21:
                    return var3;
case 17:
                    return var2;
case 24:
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
    var4 = var6[var4];
    var7 = var5.bind(var1)(var4);
    var4 = var7.NativeModules;
    var8 = var7.NativeEventEmitter;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.useScreenRecordingStore;
    var _closure1_slot4 = var7;
    var7 = var4.DCDPhotos;
    var _closure1_slot5 = var7;
    var12 = var4.DCDScreenRecordingManager;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot6 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/screen_recording/native/ScreenRecordingUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function handleStopAndSend() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['handleStopAndSend'] = var4;
    var2 = function handleRecordingPhase() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['handleRecordingPhase'] = var2;
    return var1;
})();