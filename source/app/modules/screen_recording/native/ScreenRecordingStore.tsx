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
 0:
                var6 = arguments[0];
                var5 = arguments[1];
                var4 = arguments[2];
                var3 = undefined;
                if(!(var6 === var3)) { _fun0001_ip = 17; continue _fun0001 }
 15:
                var6 = false;
 17:
                if(!(var5 === var3)) { _fun0001_ip = 23; continue _fun0001 }
 21:
                var5 = null;
 23:
                if(!(var4 === var3)) { _fun0001_ip = 29; continue _fun0001 }
 27:
                var4 = null;
 29:
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
 0:
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
                if(var7) { _fun0002_ip = 49; continue _fun0002 }
 43:
                var2 = var6.steps;
 49:
                if(!(var5 == var2)) { _fun0002_ip = 57; continue _fun0002 }
 53:
                var2 = new Array(0);
 57:
                var2 = var2.length;
                var2 = var4 >= var2;
                var3 = _closure2_slot0;
                if(var2) { _fun0002_ip = 104; continue _fun0002 }
 73:
                var2 = {};
                var2['currentStep'] = var4;
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var4 = var4.bind(var5)();
                var2['stepStartedTime'] = var4;
                _fun0002_ip = 116; continue _fun0002;
 104:
                var4 = {};
                var5 = true;
                var4['isCompleted'] = var5;
                var2 = var4;
 116:
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