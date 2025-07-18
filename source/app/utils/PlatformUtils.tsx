// app/utils/PlatformUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var4 = function isWindows() {
        var3 = /^win/;
        var2 = var3.test;
        var1 = _closure1_slot1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var5 = true;
    var6['value'] = var5;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var6 = {};
    var1 = 'WINDOWS';
    var6['WINDOWS'] = var1;
    var1 = 'OSX';
    var6['OSX'] = var1;
    var1 = 'LINUX';
    var6['LINUX'] = var1;
    var1 = 'WEB';
    var6['WEB'] = var1;
    var _closure1_slot0 = var6;
    var1 = 'android';
    var _closure1_slot1 = var1;
    var7 = native7;
    var1 = 0;
    var8 = var7[var1];
    var7 = native2;
    var1 = undefined;
    var9 = var7.bind(var1)(var8);
    var8 = var9.fileFinishedImporting;
    var7 = 'utils/PlatformUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['PlatformTypes'] = var6;
    var3['isPlatformEmbedded'] = var5;
    var3['isWindows'] = var4;
    var4 = function isMac() {
        var1 = false;
        return var1;
    };
    var3['isMac'] = var4;
    var4 = function isLinux() {
        var1 = false;
        return var1;
    };
    var3['isLinux'] = var4;
    var4 = function isDesktop() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            if(var1) { _fun0001_ip = 18; continue _fun0001 }
 16:
            var1 = false;
 18:
            return var1;
        }
    };
    var3['isDesktop'] = var4;
    var4 = function isWeb() {
        var1 = false;
        return var1;
    };
    var3['isWeb'] = var4;
    var4 = function isAndroidChrome() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = global;
            var1 = var2.navigator;
            var1 = var1.userAgent;
            var3 = null;
            var1 = var3 != var1;
            if(!var1) { _fun0002_ip = 66; continue _fun0002 }
 23:
            var2 = var2.navigator;
            var4 = var2.userAgent;
            var2 = var4.toLowerCase;
            var5 = var2.bind(var4)();
            var4 = var5.match;
            var2 = '(android ).+chrome/[.0-9]* mobile';
            var2 = var4.bind(var5)(var2);
            var1 = var3 != var2;
 66:
            return var1;
        }
    };
    var3['isAndroidChrome'] = var4;
    var4 = function isAndroidWeb() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = global;
            var1 = var1.navigator;
            var5 = var1.userAgent;
            var2 = null;
            var3 = var2 == var5;
            var1 = undefined;
            if(var3) { _fun0003_ip = 50; continue _fun0003 }
 25:
            var4 = var5.match;
            var3 = /android/i;
            var1 = var4.bind(var5)(var3);
 50:
            var1 = var2 != var1;
            return var1;
        }
    };
    var3['isAndroidWeb'] = var4;
    var4 = function isMacWeb() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = global;
            var1 = var1.navigator;
            var5 = var1.userAgent;
            var2 = null;
            var3 = var2 == var5;
            var1 = undefined;
            if(var3) { _fun0004_ip = 50; continue _fun0004 }
 25:
            var4 = var5.match;
            var3 = /Macintosh/i;
            var1 = var4.bind(var5)(var3);
 50:
            var1 = var2 != var1;
            return var1;
        }
    };
    var3['isMacWeb'] = var4;
    var4 = function isAndroid() {
        var1 = true;
        return var1;
    };
    var3['isAndroid'] = var4;
    var4 = function isIOS() {
        var1 = false;
        return var1;
    };
    var3['isIOS'] = var4;
    var4 = function getPlatform() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = _closure1_slot2;
            var1 = undefined;
            var1 = var3.bind(var1)();
            var2 = _closure1_slot0;
            if(var1) { _fun0005_ip = 28; continue _fun0005 }
 20:
            var1 = var2.WEB;
            _fun0005_ip = 34; continue _fun0005;
 28:
            var1 = var2.WINDOWS;
 34:
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
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = _closure1_slot1;
            var2 = 'ios';
            if(!(var2 !== var3)) { _fun0006_ip = 29; continue _fun0006 }
 15:
            var2 = 'android';
            if(!(var2 !== var3)) { _fun0006_ip = 29; continue _fun0006 }
 23:
            var2 = 'web';
            return var2;
 29:
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