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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 213; continue _fun0001 }
 10:
                    var4 = undefined;
                    var5 = undefined;
 14: // try_start_0
                    var6 = _closure1_slot5;
                    var3 = var6.getPhotos;
                    var2 = {'first': 1, 'groupTypes': 'Recents', 'assetType': 'Videos'};
                    var7 = ['filename', 'fileSize', 'playableDuration', 'imageSize'];
                    var2['include'] = var7;
                    var2 = var3.bind(var6)(var2);
                    SaveGenerator(address=65);
 63:
                    return var2;
 65:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 131; continue _fun0001 }
 71:
                    var5 = var2;
                    var3 = null;
                    if(!var2) { _fun0001_ip = 128; continue _fun0001 }
 79:
                    var6 = var5;
                    var6 = var6.edges;
                    var3 = null;
                    if(!var6) { _fun0001_ip = 128; continue _fun0001 }
 93:
                    var6 = var5;
                    var6 = var6.edges;
                    var7 = var6.length;
                    var6 = 0;
                    var7 = var7 > var6;
                    var3 = null;
                    if(!var7) { _fun0001_ip = 128; continue _fun0001 }
 118:
                    var5 = var5.edges;
                    var3 = var5[var6];
 128: // try_end0
                    return var3;
 131:
                    return var2;
 134: // catch_target0
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
 213:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 275; continue _fun0002 }
 10:
                    var4 = undefined;
                    var7 = undefined;
 14: // try_start_0
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 4;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.requestPermissions;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=51);
 49:
                    return var2;
 51:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 193; continue _fun0002 }
 60:
                    var7 = var2;
                    var3 = var2.photosGranted;
                    if(var3) { _fun0002_ip = 123; continue _fun0002 }
 74:
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 3;
                    var3 = var8[var3];
                    var8 = var5.bind(var4)(var3);
                    var5 = var8.show;
                    var3 = {'title': 'Error', 'body': 'Photos permission is required to save recordings'};
                    var3 = var5.bind(var8)(var3);
                    var3 = false;
                    _fun0002_ip = 190; continue _fun0002;
 123:
                    var7 = var7.microphoneGranted;
                    var7 = !var7;
                    var5 = !var7;
                    if(!var7) { _fun0002_ip = 187; continue _fun0002 }
 140:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 3;
                    var6 = var8[var6];
                    var8 = var7.bind(var4)(var6);
                    var7 = var8.show;
                    var6 = {'title': 'Error', 'body': 'Microphone permission is required to record audio'};
                    var6 = var7.bind(var8)(var6);
                    var5 = false;
 187:
                    var3 = var5;
 190: // try_end0
                    return var3;
 193:
                    return var2;
 196: // catch_target0
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
 275:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 440; continue _fun0003 }
 10:
                    var3 = arg1;
                    var5 = undefined;
                    var4 = undefined;
 17: // try_start_0
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 4;
                    var2 = var8[var2];
                    var7 = var7.bind(var5)(var2);
                    var2 = var7.startRecording;
                    var2 = var2.bind(var7)();
                    SaveGenerator(address=54);
 52:
                    return var2;
 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0003_ip = 327; continue _fun0003 }
 63:
                    var4 = var2;
                    var7 = var2.success;
                    if(var7) { _fun0003_ip = 132; continue _fun0003 }
 75:
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
 129: // try_end0
                    return var7;
 132: // try_start_1
                    var7 = var3;
                    var10 = null;
                    if(!(var5 !== var7)) { _fun0003_ip = 175; continue _fun0003 }
 141:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 5;
                    var7 = var9[var7];
                    var9 = var8.bind(var5)(var7);
                    var8 = var9.getSurveyConfig;
                    var7 = var3;
                    var10 = var8.bind(var9)(var7);
 175:
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
 324: // try_end1
                    return var3;
 327:
                    return var2;
 330: // catch_target0 // catch_target1
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
 440:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 228; continue _fun0004 }
 10: // try_start_0
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 4;
                    var2 = var6[var2];
                    var6 = undefined;
                    var5 = var5.bind(var6)(var2);
                    var2 = var5.stopRecording;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=49);
 47:
                    return var2;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 120; continue _fun0004 }
 55:
                    var5 = var2.success;
                    var5 = !var5;
                    var3 = !var5;
                    if(!var5) { _fun0004_ip = 117; continue _fun0004 }
 70:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 3;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.show;
                    var4 = {'title': 'Error', 'body': 'Failed to stop screen recording, but not error'};
                    var4 = var5.bind(var6)(var4);
                    var3 = false;
 117: // try_end0
                    return var3;
 120:
                    return var2;
 123: // catch_target0
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
 228:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 1693; continue _fun0005 }
 12:
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
 44: // try_start_0
                    var9 = _closure1_slot4;
                    var5 = var9.getState;
                    var5 = var5.bind(var9)();
                    var5 = var5.currentSurveyId;
                    var4 = var5;
                    var15 = null;
                    if(!(var15 != var5)) { _fun0005_ip = 1590; continue _fun0005 }
 79:
                    var5 = var4;
                    var9 = '';
                    if(!(var9 !== var5)) { _fun0005_ip = 1590; continue _fun0005 }
 93:
                    var11 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var5 = 5;
                    var5 = var16[var5];
                    var11 = var11.bind(var2)(var5);
                    var5 = var11.getSurveyConfig;
                    var4 = var5.bind(var11)(var4);
                    var12 = var4;
                    _closure4_slot0 = var4;
                    if(!(var15 != var4)) { _fun0005_ip = 1540; continue _fun0005 }
 138:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var11 = 9;
                    var4 = var4[var11];
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.fetchBugReportConfig;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=172);
 170:
                    return var4;
 172:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 1537; continue _fun0005 }
 181:
                    var20 = var4.features;
                    var16 = var20.find;
                    var5 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var4 = arg1;
                            var6 = var4.name;
                            var3 = null;
                            var5 = var3 == var6;
                            var1 = undefined;
                            if(var5) { _fun0006_ip = 68; continue _fun0006 }
 19:
                            var5 = var6.toLowerCase;
                            var7 = var5.bind(var6)();
                            var6 = var7.includes;
                            var5 = _closure4_slot0;
                            var5 = var5.uploadConfig;
                            var8 = var5.featureName;
                            var5 = var8.toLowerCase;
                            var5 = var5.bind(var8)();
                            var1 = var6.bind(var7)(var5);
 68:
                            if(var1) { _fun0006_ip = 138; continue _fun0006 }
 71:
                            var4 = var4.squad;
                            var3 = var3 == var4;
                            var2 = undefined;
                            if(var3) { _fun0006_ip = 135; continue _fun0006 }
 86:
                            var3 = var4.toLowerCase;
                            var5 = var3.bind(var4)();
                            var4 = var5.includes;
                            var3 = _closure4_slot0;
                            var3 = var3.uploadConfig;
                            var6 = var3.squadName;
                            var3 = var6.toLowerCase;
                            var3 = var3.bind(var6)();
                            var2 = var4.bind(var5)(var3);
 135:
                            var1 = var2;
 138:
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
 222:
                    return var5;
 224:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=15);
                    if(var16) { _fun0005_ip = 1534; continue _fun0005 }
 233:
                    var18 = var5;
                    if(!(var15 != var5)) { _fun0005_ip = 539; continue _fun0005 }
 243:
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
                    if(!(var15 == var21)) { _fun0005_ip = 308; continue _fun0005 }
 286:
                    var21 = var18;
                    var21 = var21.node;
                    var21 = var21.image;
                    var21 = var21.uri;
                    _fun0005_ip = 311; continue _fun0005;
 308:
                    var21 = var24;
 311:
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
 539:
                    var16 = var23;
                    if(!(var15 != var16)) { _fun0005_ip = 841; continue _fun0005 }
 549:
                    var16 = var23;
                    if(!(var9 !== var16)) { _fun0005_ip = 841; continue _fun0005 }
 559:
                    var20 = var23;
                    var18 = var20.split;
                    var16 = '/';
                    var18 = var18.bind(var20)(var16);
                    var16 = var18.pop;
                    var16 = var16.bind(var18)();
                    var13 = var16;
                    if(!(var15 == var16)) { _fun0005_ip = 641; continue _fun0005 }
 593:
                    var16 = global;
                    var20 = var16.Date;
                    var18 = var20.now;
                    var21 = var18.bind(var20)();
                    var16 = var16.HermesInternal;
                    var20 = var16.concat;
                    var18 = 'audio_';
                    var16 = '.wav';
                    var20 = var20.bind(var18)(var21, var16);
                    _fun0005_ip = 644; continue _fun0005;
 641:
                    var20 = var13;
 644:
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
 841:
                    var13 = var10;
                    if(!(var2 !== var13)) { _fun0005_ip = 1154; continue _fun0005 }
 851:
                    var13 = var10;
                    var16 = var13.length;
                    var13 = 0;
                    if(!(var16 > var13)) { _fun0005_ip = 1154; continue _fun0005 }
 868:
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
 977:
                    return var6;
 979:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=9);
                    if(var10) { _fun0005_ip = 1531; continue _fun0005 }
 988:
                    var19 = var6;
                    if(!(var15 != var6)) { _fun0005_ip = 1154; continue _fun0005 }
 998:
                    var10 = var19;
                    if(!(var9 !== var10)) { _fun0005_ip = 1154; continue _fun0005 }
 1008:
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
 1154:
                    var13 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var10 = 12;
                    var10 = var16[var10];
                    var13 = var13.bind(var2)(var10);
                    var10 = var13.getAttachments;
                    var7 = var10.bind(var13)(var7);
                    SaveGenerator(address=1189);
 1187:
                    return var7;
 1189:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                    if(var10) { _fun0005_ip = 1528; continue _fun0005 }
 1198:
                    var8 = var7;
                    if(!(var15 != var7)) { _fun0005_ip = 1478; continue _fun0005 }
 1208:
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
                    if(!(var15 == var10)) { _fun0005_ip = 1314; continue _fun0005 }
 1269:
                    var10 = {};
                    var15 = var12;
                    var16 = var15.uploadConfig;
                    var16 = var16.featureName;
                    var10['name'] = var16;
                    var15 = var15.uploadConfig;
                    var15 = var15.squadName;
                    var10['squad'] = var15;
                    var10['asana_inbox_id'] = var2;
                    _fun0005_ip = 1317; continue _fun0005;
 1314:
                    var10 = var14;
 1317:
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
 1367:
                    return var8;
 1369:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0005_ip = 1475; continue _fun0005 }
 1375:
                    var9 = var8.ok;
                    var11 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var10 = 3;
                    var10 = var13[var10];
                    var11 = var11.bind(var2)(var10);
                    var10 = var11.show;
                    if(var9) { _fun0005_ip = 1431; continue _fun0005 }
 1410:
                    var9 = {'title': 'Submission Failed', 'body': "Something went wrong and there's no way to fix it. Thanks anyway!"};
                    var9 = var10.bind(var11)(var9);
                    _fun0005_ip = 1470; continue _fun0005;
 1431:
                    var9 = {};
                    var13 = var12.uploadConfig;
                    var13 = var13.successTitle;
                    var9['title'] = var13;
                    var12 = var12.uploadConfig;
                    var12 = var12.successMessage;
                    var9['body'] = var12;
                    var9 = var10.bind(var11)(var9);
 1470: // try_end0
                    _fun0005_ip = 1690; continue _fun0005;
 1475:
                    return var8;
 1478: // try_start_1
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 3;
                    var8 = var10[var8];
                    var10 = var9.bind(var2)(var8);
                    var9 = var10.show;
                    var8 = {'title': 'Submission Failed', 'body': "Something went wrong and there's no way to fix it. Thanks anyway!"};
                    var8 = var9.bind(var10)(var8);
 1523: // try_end1
                    var8 = undefined;
                    return var8;
 1528:
                    return var7;
 1531:
                    return var6;
 1534:
                    return var5;
 1537:
                    return var4;
 1540: // try_start_2
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 3;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.show;
                    var4 = {'title': 'Submission Failed', 'body': 'Survey configuration not found'};
                    var4 = var5.bind(var6)(var4);
 1585: // try_end2
                    var4 = undefined;
                    return var4;
 1590: // try_start_3
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 3;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.show;
                    var3 = {'title': 'Submission Failed', 'body': 'No survey selected'};
                    var3 = var4.bind(var5)(var3);
 1635: // try_end3
                    var3 = undefined;
                    return var3;
 1640: // catch_target0 // catch_target1 // catch_target2 // catch_target3
                    CatchBlockStart(arg_register=2);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 3;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.show;
                    var3 = {'title': 'Submission Failed', 'body': "Something went wrong and there's no way to fix it. Thanks anyway!"};
                    var3 = var4.bind(var5)(var3);
 1690:
                    return var2;
 1693:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 112; continue _fun0007 }
 9:
                    var3 = arg1;
                    var _closure4_slot0 = var3;
                    var3 = undefined;
                    var _closure4_slot1 = var3;
                    var8 = _closure1_slot6;
                    var7 = var8.addListener;
                    var6 = 'ScreenRecordingPreviewFinished';
                    var5 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var6 = arg1;
                            var _closure5_slot0 = var6;
                            var3 = _closure4_slot1;
                            var2 = var3.remove;
                            var2 = var2.bind(var3)();
                            var3 = var6.saved;
                            if(var3) { _fun0008_ip = 116; continue _fun0008 }
 40:
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
                            if(!(var7 === var8)) { _fun0008_ip = 105; continue _fun0008 }
 99:
                            var6 = 'Recording was cancelled and not saved.';
 105:
                            var3['body'] = var6;
                            var3 = var4.bind(var5)(var3);
                            _fun0008_ip = 154; continue _fun0008;
 116:
                            var3 = global;
                            var4 = var3.setTimeout;
                            var2 = _closure1_slot3;
                            var3 = undefined;
                            var1 = function* () {
                                var1 = function* anon_0_() {
                                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                        if(var2) { _fun0009_ip = 143; continue _fun0009 }
 10:
                                        var4 = _closure4_slot0;
                                        var3 = null;
                                        if(!(var3 != var4)) { _fun0009_ip = 33; continue _fun0009 }
 23:
                                        var3 = _closure4_slot0;
                                        var2 = undefined;
                                        var2 = var3.bind(var2)();
 33:
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
 75:
                                        return var2;
 77:
                                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                        if(var4) { _fun0009_ip = 140; continue _fun0009 }
 83:
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
 140:
                                        return var2;
 143:
                                        return var1;
                                    }
                                };
                                return var1;
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = 1000;
                            var1 = var4.bind(var3)(var2, var1);
 154:
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
 98:
                    return var2;
 100:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 109; continue _fun0007 }
 106:
                    return var3;
 109:
                    return var2;
 112:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 196; continue _fun0010 }
 12:
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
 27:
                    return var2;
 29:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 193; continue _fun0010 }
 38:
                    if(!var2) { _fun0010_ip = 184; continue _fun0010 }
 44:
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
 145:
                    return var3;
 147:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0010_ip = 190; continue _fun0010 }
 153:
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
 170:
                    return var4;
 172:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0010_ip = 187; continue _fun0010 }
 178:
                    var6 = var4.success;
 184:
                    return var5;
 187:
                    return var4;
 190:
                    return var3;
 193:
                    return var2;
 196:
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