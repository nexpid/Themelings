// app/modules/screen_recording/native/ScreenRecordingManager.ios.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.NativeModules;
    var2 = var2.DCDScreenRecordingManager;
    var _closure1_slot0 = var2;
    var2 = {};
    var7 = function requestPermissions() {
        var2 = _closure1_slot0;
        var1 = var2.requestPermissions;
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['requestPermissions'] = var7;
    var7 = function startRecording() {
        var2 = _closure1_slot0;
        var1 = var2.startRecording;
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['startRecording'] = var7;
    var7 = function stopRecording() {
        var2 = _closure1_slot0;
        var1 = var2.stopRecording;
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['stopRecording'] = var7;
    var7 = function isRecording() {
        var2 = _closure1_slot0;
        var1 = var2.isRecording;
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['isRecording'] = var7;
    var7 = function getLatestRecording() {
        var2 = _closure1_slot0;
        var1 = var2.getLatestRecording;
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['getLatestRecording'] = var7;
    var7 = function setRecordingQuality(arg1) {
        var3 = _closure1_slot0;
        var2 = var3.setRecordingQuality;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['setRecordingQuality'] = var7;
    var4 = function getRecordingQuality() {
        var2 = _closure1_slot0;
        var1 = var2.getRecordingQuality;
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['getRecordingQuality'] = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/screen_recording/native/ScreenRecordingManager.ios.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();