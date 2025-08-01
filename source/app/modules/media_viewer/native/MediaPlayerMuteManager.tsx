// app/modules/media_viewer/native/MediaPlayerMuteManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var9 = var2.NativeEventEmitter;
    var5 = var2.NativeModules;
    var2 = 3;
    var2 = var7[var2];
    var10 = var6.bind(var1)(var2);
    var8 = var10.create;
    var2 = function() {
        var1 = {};
        var2 = false;
        var1['isMuted'] = var2;
        return var1;
    };
    var2 = var8.bind(var10)(var2);
    var _closure1_slot4 = var2;
    var13 = var5.MediaPlayerManager;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var14 = var8;
    var5 = new var14[var9](var13, var12);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot5 = var5;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = function MediaPlayerMuteManager() {
            var2 = this;
            var4 = _closure1_slot2;
            var3 = _closure2_slot0;
            var1 = undefined;
            var3 = var4.bind(var1)(var2, var3);
            var2['muteSubscription'] = var1;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'initialize';
        var1['key'] = var2;
        var2 = function value() {
            var4 = _closure1_slot5;
            var3 = var4.addListener;
            var2 = 'MediaPlayerMuteStateChanged';
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isMuted;
                var _closure4_slot0 = var1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 4;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.batchUpdates;
                var2 = function() {
                    var3 = _closure1_slot4;
                    var2 = var3.setState;
                    var1 = {};
                    var4 = _closure4_slot0;
                    var1['isMuted'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2, var1);
            var1 = this;
            var1['muteSubscription'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'terminate';
        var1['key'] = var6;
        var5 = function value() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = this;
                var2 = var1.muteSubscription;
                var1 = null;
                if(!(var1 != var2)) { _fun0001_ip = 25; continue _fun0001 }
 15:
                var1 = var2.remove;
                var1 = var1.bind(var2)();
 25:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var14 = var5;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/media_viewer/native/MediaPlayerMuteManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['useMediaPlayerMutedStore'] = var2;
    return var1;
})();