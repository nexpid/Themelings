// app/modules/video_calls/useVideoSpinnerTimer.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var7 = var6[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/useVideoSpinnerTimer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useVideoSpinnerTimer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.location;
            var _closure2_slot0 = var3;
            var7 = var1.videoSpinnerContext;
            var _closure2_slot1 = var7;
            var6 = var1.userId;
            var _closure2_slot2 = var6;
            var9 = var1.streamId;
            var _closure2_slot3 = var9;
            var11 = var1.loading;
            var _closure2_slot4 = var11;
            var10 = var1.paused;
            var1 = undefined;
            if(!(var10 === var1)) { _fun0001_ip = 67; continue _fun0001 }
 65:
            var10 = false;
 67:
            var _closure2_slot5 = var10;
            var _closure2_slot6 = var1;
            var5 = _closure1_slot3;
            var8 = var5.useState;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.VideoSpinnerTimer;
                var4 = _closure2_slot0;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var8 = var8.bind(var5)(var4);
            var4 = _closure1_slot2;
            var3 = 1;
            var4 = var4.bind(var1)(var8, var3);
            var3 = 0;
            var8 = var4[var3];
            _closure2_slot6 = var8;
            var4 = var5.useEffect;
            var3 = new Array(6);
            var3[0] = var11;
            var3[1] = var10;
            var3[2] = var9;
            var3[3] = var8;
            var3[4] = var7;
            var3[5] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot5;
                    if(var2) { _fun0002_ip = 76; continue _fun0002 }
 10:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0002_ip = 60; continue _fun0002 }
 17:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 76; continue _fun0002 }
 27:
                    var6 = _closure2_slot6;
                    var5 = var6.trackSpinnerDuration;
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot3;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    _fun0002_ip = 76; continue _fun0002;
 60:
                    var2 = _closure2_slot6;
                    var1 = var2.onSpinnerStarted;
                    var1 = var1.bind(var2)();
 76:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();