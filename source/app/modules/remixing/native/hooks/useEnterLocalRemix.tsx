// app/modules/remixing/native/hooks/useEnterLocalRemix.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.REMIX_VIEW_MODAL_KEY;
    var _closure1_slot5 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/hooks/useEnterLocalRemix.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1, arg2, arg3) {
        var6 = arg1;
        var7 = arg2;
        var5 = arg3;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var7;
        var _closure2_slot2 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 225; continue _fun0001 }
 18:
                var3 = {};
                var2 = _closure2_slot1;
                var10 = var3;
                var9 = var2;
                var5 = copyDataProperties(var10, var9);
                var6 = true;
                var5 = 'local';
                var3[var5] = var6;
                var5 = _closure2_slot0;
                var4 = 'channelId';
                var3[var4] = var5;
                var _closure3_slot0 = var3;
                var5 = _closure1_slot4;
                var4 = var5.initializeIfNeeded;
                var4 = var4.bind(var5)();
                var4 = var5.startRemixing;
                var4 = var4.bind(var5)();
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 3;
                var7 = var6[var3];
                var4 = undefined;
                var8 = var5.bind(var4)(var7);
                var7 = var8.triggerHapticFeedback;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.HapticFeedbackTypes;
                var3 = var3.IMPACT_LIGHT;
                var3 = var7.bind(var8)(var3);
                var3 = 4;
                var3 = var6[var3];
                var5 = var5.bind(var4)(var3);
                var4 = var5.resolveMediaToLocalFilePath;
                var3 = var2.uri;
                var2 = var2.filename;
                var4 = var4.bind(var5)(var3, var2);
                var3 = var4.then;
                var2 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = arg1;
                    var3['uri'] = var2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.enterRemixing;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.then;
                var2 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 6;
                        var4 = var3[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.pushLazy;
                        var8 = _closure1_slot0;
                        var4 = 8;
                        var4 = var3[var4];
                        var8 = var8.bind(var1)(var4);
                        var4 = 7;
                        var4 = var3[var4];
                        var3 = var3.paths;
                        var4 = var8.bind(var1)(var4, var3);
                        var3 = {};
                        var8 = _closure3_slot0;
                        var3['source'] = var8;
                        var8 = function onEnter() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var3['onEnter'] = var8;
                        var7 = function onExit() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.pop;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var3['onExit'] = var7;
                        var2 = _closure1_slot5;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        var4 = _closure2_slot2;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0002_ip = 132; continue _fun0002 }
 124:
                        var2 = _closure2_slot2;
                        var2 = var2.bind(var1)();
 132:
                        return var1;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.catch;
                var1 = function() {
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 10;
                    var2 = var8[var1];
                    var1 = undefined;
                    var4 = var7.bind(var1)(var2);
                    var3 = var4.presentError;
                    var2 = 11;
                    var5 = var8[var2];
                    var5 = var7.bind(var1)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var2 = var8[var2];
                    var2 = var7.bind(var1)(var2);
                    var2 = var2.t;
                    var2 = var2.HxKEh4;
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
 225:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();