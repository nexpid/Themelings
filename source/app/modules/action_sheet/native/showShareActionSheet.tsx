// app/modules/action_sheet/native/showShareActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var1 = metroImportDefault;
        var _closure1_slot1 = var1;
        var _closure1_slot2 = var6;
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
        var4 = var5.bind(var1)(var4);
        var8 = var4.NativeEventEmitter;
        var4 = var4.NativeModules;
        var _closure1_slot3 = var4;
        var7 = 1;
        var7 = var6[var7];
        var9 = var5.bind(var1)(var7);
        var7 = var9.isAndroid;
        var7 = var7.bind(var9)();
        if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var12 = var4.ShareManager;
        var7 = var8.prototype;
        var7 = Object.create(var7, {constructor: {value: var8}});
        var13 = var7;
        var4 = new var13[var8](var12, var11);
        var9 = var4 instanceof Object ? var4 : var7;
        var8 = var9.addListener;
        var7 = 'share-broadcast-receiver-app-clicked';
        var4 = function(arg1) {
            var1 = arg1;
            var5 = var1.app;
            var4 = var1.location;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.trackAppClickInNativeShareSheet;
            var2 = var2.bind(var3)(var5, var4);
            return var1;
        };
        var4 = var8.bind(var9)(var7, var4);
case 2:
        var4 = 4;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/action_sheet/native/showShareActionSheet.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function showShareActionSheet(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var8 = arg2;
                var _closure2_slot0 = var2;
                var _closure2_slot1 = var8;
                var3 = var2.source;
                var4 = null;
                if(!(var4 == var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var3 = {};
                var5 = undefined;
                var3['mediaFallbackUrl'] = var5;
                var3['mediaStagingOptions'] = var5;
                _fun0002_ip = 6; continue _fun0002;
case 4:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 2;
                var6 = var6[var5];
                var5 = undefined;
                var7 = var7.bind(var5)(var6);
                var6 = var7.getMediaShareParams;
                var5 = var2.source;
                var3 = var6.bind(var7)(var5);
case 6:
                var7 = var3.mediaFallbackUrl;
                var6 = var3.mediaStagingOptions;
                var3 = var2.source;
                if(!(var4 == var3)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var7 = var2.url;
case 7:
                var3 = _closure1_slot3;
                var5 = var3.ShareManager;
                var4 = var5.share;
                var13 = var2.message;
                var11 = var2.subject;
                var14 = var5;
                var12 = var7;
                var10 = var8;
                var9 = var6;
                var4 = var14[var4](var13, var12, var11, var10, var9, var8);
                var3 = var4.then;
                var2 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = arg1;
                        var6 = null;
                        if(!(var6 != var2)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var5 = var2.success;
                        var7 = var2.method;
                        var3 = _closure2_slot0;
                        var3 = var3.iOSOnlyShareCallback;
                        if(!(var6 != var3)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var4 = _closure2_slot0;
                        var3 = var4.iOSOnlyShareCallback;
                        var8 = var6 != var7;
                        var6 = null;
                        if(!var8) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                        var6 = var7;
case 13:
                        var3 = var3.bind(var4)(var5, var6);
case 11:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 2;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.trackAppClickInNativeShareSheet;
                        var2 = var2.method;
                        var1 = _closure2_slot1;
                        var1 = var3.bind(var4)(var2, var1);
case 9:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.catch;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var6 = var7.captureException;
                        var4 = {};
                        var3 = {};
                        var8 = _closure2_slot1;
                        var5 = null;
                        var9 = var5 != var8;
                        var8 = '';
                        if(!var9) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                        var8 = _closure2_slot1;
case 15:
                        var3['location'] = var8;
                        var4['tags'] = var3;
                        var3 = arg1;
                        var3 = var6.bind(var7)(var3, var4);
                        var3 = _closure2_slot0;
                        var3 = var3.iOSOnlyShareCallback;
                        if(!(var5 != var3)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                        var4 = _closure2_slot0;
                        var3 = var4.iOSOnlyShareCallback;
                        var2 = false;
                        var2 = var3.bind(var4)(var2, var5);
case 17:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var3['showShareActionSheet'] = var2;
        return var1;
    }
})();