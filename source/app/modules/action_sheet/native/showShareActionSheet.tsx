// app/modules/action_sheet/native/showShareActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var7 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var7;
        var _closure1_slot2 = var6;
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
        var4 = var5.bind(var1)(var4);
        var8 = var4.NativeEventEmitter;
        var4 = 1;
        var4 = var6[var4];
        var9 = var5.bind(var1)(var4);
        var4 = var9.isAndroid;
        var4 = var4.bind(var9)();
        if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var4 = 2;
        var4 = var6[var4];
        var12 = var7.bind(var1)(var4);
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
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.trackAppClickInNativeShareSheet;
            var2 = var2.bind(var3)(var5, var4);
            return var1;
        };
        var4 = var8.bind(var9)(var7, var4);
case 2:
        var4 = 5;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/action_sheet/native/showShareActionSheet.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function showShareActionSheet(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var11 = arg2;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var11;
                var1 = var3.source;
                var9 = null;
                if(!(var9 == var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var1 = {};
                var4 = undefined;
                var1['mediaFallbackUrl'] = var4;
                var1['mediaStagingOptions'] = var4;
                _fun0002_ip = 6; continue _fun0002;
case 4:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 3;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.getMediaShareParams;
                var4 = var3.source;
                var1 = var5.bind(var6)(var4);
case 6:
                var4 = var1.mediaFallbackUrl;
                var10 = var1.mediaStagingOptions;
                var1 = var3.source;
                if(!(var9 == var1)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var4 = var3.url;
case 7:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 2;
                var5 = var5[var1];
                var1 = undefined;
                var8 = var6.bind(var1)(var5);
                var7 = var8.share;
                var5 = var3.message;
                var12 = var9 != var5;
                var6 = null;
                if(!var12) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var6 = var5;
case 9:
                var12 = var9 != var4;
                var5 = null;
                if(!var12) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var5 = var4;
case 11:
                var3 = var3.subject;
                var12 = var9 != var3;
                var4 = null;
                if(!var12) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var4 = var3;
case 13:
                var12 = var9 != var11;
                var3 = null;
                if(!var12) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var3 = var11;
case 15:
                var11 = var9 != var10;
                var9 = null;
                if(!var11) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var9 = var10;
case 17:
                var18 = var8;
                var17 = var6;
                var16 = var5;
                var15 = var4;
                var14 = var3;
                var13 = var9;
                var5 = var18[var7](var17, var16, var15, var14, var13, var12);
                var4 = var5.then;
                var3 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = arg1;
                        var6 = null;
                        if(!(var6 != var1)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                        var5 = var1.success;
                        var4 = var1.method;
                        var2 = _closure2_slot0;
                        var2 = var2.iOSOnlyShareCallback;
                        if(!(var6 != var2)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                        var3 = _closure2_slot0;
                        var2 = var3.iOSOnlyShareCallback;
                        var7 = var6 != var4;
                        var6 = null;
                        if(!var7) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                        var6 = var4;
case 23:
                        var2 = var2.bind(var3)(var5, var6);
case 21:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 3;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var5.bind(var2)(var3);
                        var2 = var3.trackAppClickInNativeShareSheet;
                        var1 = _closure2_slot1;
                        var1 = var2.bind(var3)(var4, var1);
case 19:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.catch;
                var2 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 4;
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
                        if(!var9) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                        var8 = _closure2_slot1;
case 25:
                        var3['location'] = var8;
                        var4['tags'] = var3;
                        var3 = arg1;
                        var3 = var6.bind(var7)(var3, var4);
                        var3 = _closure2_slot0;
                        var3 = var3.iOSOnlyShareCallback;
                        if(!(var5 != var3)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                        var4 = _closure2_slot0;
                        var3 = var4.iOSOnlyShareCallback;
                        var2 = false;
                        var2 = var3.bind(var4)(var2, var5);
case 27:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var3['showShareActionSheet'] = var2;
        return var1;
    }
})();