// app/utils/PlatformUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var6 = function isWindows() {
        var3 = /^win/;
        var2 = var3.test;
        var1 = _closure1_slot1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot2 = var6;
    var5 = function isDesktop() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = false;
case 2:
            return var1;
        }
    };
    var _closure1_slot3 = var5;
    var4 = function isOculusWeb() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = global;
            var1 = var1.navigator;
            var5 = var1.userAgent;
            var2 = null;
            var3 = var2 == var5;
            var1 = undefined;
            if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = var5.match;
            var3 = /OculusBrowser/i;
            var1 = var4.bind(var5)(var3);
case 4:
            var1 = var2 != var1;
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var7 = true;
    var8['value'] = var7;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var8 = {};
    var1 = 'WINDOWS';
    var8['WINDOWS'] = var1;
    var1 = 'OSX';
    var8['OSX'] = var1;
    var1 = 'LINUX';
    var8['LINUX'] = var1;
    var1 = 'WEB';
    var8['WEB'] = var1;
    var _closure1_slot0 = var8;
    var1 = 'android';
    var _closure1_slot1 = var1;
    var9 = dependencyMap;
    var1 = 0;
    var10 = var9[var1];
    var9 = require;
    var1 = undefined;
    var11 = var9.bind(var1)(var10);
    var10 = var11.fileFinishedImporting;
    var9 = 'utils/PlatformUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var3['PlatformTypes'] = var8;
    var3['isPlatformEmbedded'] = var7;
    var3['isWindows'] = var6;
    var6 = function isMac() {
        var1 = false;
        return var1;
    };
    var3['isMac'] = var6;
    var6 = function isLinux() {
        var1 = false;
        return var1;
    };
    var3['isLinux'] = var6;
    var3['isDesktop'] = var5;
    var5 = function isWeb() {
        var1 = false;
        return var1;
    };
    var3['isWeb'] = var5;
    var5 = function isAndroidChrome() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = global;
            var1 = var2.navigator;
            var1 = var1.userAgent;
            var3 = null;
            var1 = var3 != var1;
            if(!var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var2 = var2.navigator;
            var4 = var2.userAgent;
            var2 = var4.toLowerCase;
            var5 = var2.bind(var4)();
            var4 = var5.match;
            var2 = '(android ).+chrome/[.0-9]* mobile';
            var2 = var4.bind(var5)(var2);
            var1 = var3 != var2;
case 6:
            return var1;
        }
    };
    var3['isAndroidChrome'] = var5;
    var5 = function isAndroidWeb() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = global;
            var1 = var1.navigator;
            var5 = var1.userAgent;
            var2 = null;
            var3 = var2 == var5;
            var1 = undefined;
            if(var3) { _fun0004_ip = 4; continue _fun0004 }
case 5:
            var4 = var5.match;
            var3 = /android/i;
            var1 = var4.bind(var5)(var3);
case 4:
            var1 = var2 != var1;
            return var1;
        }
    };
    var3['isAndroidWeb'] = var5;
    var5 = function isMacWeb() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = global;
            var1 = var1.navigator;
            var5 = var1.userAgent;
            var2 = null;
            var3 = var2 == var5;
            var1 = undefined;
            if(var3) { _fun0005_ip = 4; continue _fun0005 }
case 5:
            var4 = var5.match;
            var3 = /Macintosh/i;
            var1 = var4.bind(var5)(var3);
case 4:
            var1 = var2 != var1;
            return var1;
        }
    };
    var3['isMacWeb'] = var5;
    var5 = function isAndroid() {
        var1 = true;
        return var1;
    };
    var3['isAndroid'] = var5;
    var5 = function isIOS() {
        var1 = false;
        return var1;
    };
    var3['isIOS'] = var5;
    var3['isOculusWeb'] = var4;
    var4 = function platformPrefersDeepLink() {
        var2 = _closure1_slot4;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var3['platformPrefersDeepLink'] = var4;
    var4 = function platformSupportsActivityJoin() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = _closure1_slot3;
            var3 = undefined;
            var1 = var1.bind(var3)();
            if(var1) { _fun0006_ip = 8; continue _fun0006 }
case 3:
            var2 = _closure1_slot4;
            var1 = var2.bind(var3)();
case 8:
            if(var1) { _fun0006_ip = 9; continue _fun0006 }
case 10:
            var1 = true;
case 9:
            return var1;
        }
    };
    var3['platformSupportsActivityJoin'] = var4;
    var4 = function getPlatform() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot2;
            var1 = undefined;
            var1 = var3.bind(var1)();
            var2 = _closure1_slot0;
            if(var1) { _fun0007_ip = 11; continue _fun0007 }
case 12:
            var1 = var2.WEB;
            _fun0007_ip = 13; continue _fun0007;
case 11:
            var1 = var2.WINDOWS;
case 13:
            return var1;
        }
    };
    var3['getPlatform'] = var4;
    var4 = function getPlatformName() {
        var1 = _closure1_slot1;
        return var1;
    };
    var3['getPlatformName'] = var4;
    var4 = function getNativePlatform() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = _closure1_slot1;
            var2 = 'ios';
            if(!(var2 !== var3)) { _fun0008_ip = 9; continue _fun0008 }
case 14:
            var2 = 'android';
            if(!(var2 !== var3)) { _fun0008_ip = 9; continue _fun0008 }
case 7:
            var2 = 'web';
            return var2;
case 9:
            var1 = _closure1_slot1;
            return var1;
        }
    };
    var3['getNativePlatform'] = var4;
    var2 = function getOS() {
        var1 = global;
        var1 = var1.window;
        var1 = var1.navigator;
        var1 = var1.userAgent;
        var1 = 'android';
        return var1;
    };
    var3['getOS'] = var2;
    return var1;
})();