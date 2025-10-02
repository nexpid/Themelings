// app/modules/screen_recording/native/ScreenRecordingStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var7 = var5.bind(var1)(var4);
    var4 = var7.create;
    var2 = function(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = {'isRecording': false, 'microphoneEnabled': false, 'isICYMIScrolled': false, 'isUploading': false, 'currentStep': 0, 'stepStartedTime': null, 'isCompleted': false, 'currentSurveyId': null, 'currentSurveyConfig': null};
        var3 = function startRecording() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var6 = arguments[0];
                var5 = arguments[1];
                var4 = arguments[2];
                var3 = undefined;
                if(!(var6 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = false;
case 2:
                if(!(var5 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = null;
case 4:
                if(!(var4 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var4 = null;
case 6:
                var2 = _closure2_slot0;
                var1 = {};
                var7 = true;
                var1['isRecording'] = var7;
                var1['microphoneEnabled'] = var6;
                var1['currentSurveyId'] = var5;
                var1['currentSurveyConfig'] = var4;
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var4 = var4.bind(var5)();
                var1['stepStartedTime'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1['startRecording'] = var3;
        var3 = function stopRecording() {
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = {'isRecording': false, 'microphoneEnabled': false, 'currentStep': 0, 'stepStartedTime': null, 'isCompleted': false};
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var1['stopRecording'] = var3;
        var3 = function setICYMIScrolled() {
            var3 = _closure2_slot0;
            var2 = {};
            var1 = true;
            var2['isICYMIScrolled'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1['setICYMIScrolled'] = var3;
        var3 = function setIsUploading(arg1) {
            var3 = _closure2_slot0;
            var2 = {};
            var1 = arg1;
            var2['isUploading'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1['setIsUploading'] = var3;
        var3 = function nextStep() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var5 = var2.currentStep;
                var4 = 1;
                var4 = var5 + var4;
                var6 = var2.currentSurveyConfig;
                var5 = null;
                var7 = var5 == var6;
                var2 = undefined;
                if(var7) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var2 = var6.steps;
case 8:
                if(!(var5 == var2)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var2 = new Array(0);
case 10:
                var2 = var2.length;
                var2 = var4 >= var2;
                var3 = _closure2_slot0;
                if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var2 = {};
                var2['currentStep'] = var4;
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var4 = var4.bind(var5)();
                var2['stepStartedTime'] = var4;
                _fun0002_ip = 14; continue _fun0002;
case 12:
                var4 = {};
                var5 = true;
                var4['isCompleted'] = var5;
                var2 = var4;
case 14:
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var1['nextStep'] = var3;
        var3 = function resetActionSheet() {
            var3 = _closure2_slot0;
            var2 = {'currentStep': 0, 'stepStartedTime': null, 'isCompleted': false};
            var1 = global;
            var4 = var1.Date;
            var1 = var4.now;
            var1 = var1.bind(var4)();
            var2['stepStartedTime'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1['resetActionSheet'] = var3;
        var2 = function completeActionSheet() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.handleStopAndSend;
            var2 = var2.bind(var3)();
            var3 = _closure2_slot0;
            var2 = {'currentStep': 0, 'stepStartedTime': null, 'isCompleted': false};
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1['completeActionSheet'] = var2;
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/screen_recording/native/ScreenRecordingStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['useScreenRecordingStore'] = var2;
    return var1;
})();