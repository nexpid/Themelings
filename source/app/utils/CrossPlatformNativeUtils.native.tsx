// app/utils/CrossPlatformNativeUtils.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var2 = true;
    var4['value'] = var2;
    var2 = '__esModule';
    var2 = var5.bind(var6)(var3, var2, var4);
    var2 = {};
    var4 = function flushDNSCache() {
        var1 = undefined;
        return var1;
    };
    var2['flushDNSCache'] = var4;
    var4 = function flushCookies() {
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.resolve;
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['flushCookies'] = var4;
    var4 = function setApplicationBackgroundColor() {
        var1 = undefined;
        return var1;
    };
    var2['setApplicationBackgroundColor'] = var4;
    var4 = function setZoomFactor() {
        var1 = false;
        return var1;
    };
    var2['setZoomFactor'] = var4;
    var4 = function focus() {
        var1 = undefined;
        return var1;
    };
    var2['focus'] = var4;
    var4 = function submitLiveCrashReport() {
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.resolve;
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['submitLiveCrashReport'] = var4;
    var4 = function getPidFromDesktopSource() {
        var1 = undefined;
        return var1;
    };
    var2['getPidFromDesktopSource'] = var4;
    var4 = function getAudioPid() {
        var1 = undefined;
        return var1;
    };
    var2['getAudioPid'] = var4;
    var4 = function generateSessionFromPid() {
        var1 = '';
        return var1;
    };
    var2['generateSessionFromPid'] = var4;
    var1 = function getAppHardwareAccelerationEnabled() {
        var1 = true;
        return var1;
    };
    var2['getAppHardwareAccelerationEnabled'] = var1;
    var4 = native7;
    var1 = 0;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/CrossPlatformNativeUtils.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();