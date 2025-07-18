// app/modules/errors/hooks/useVideoStreamError.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/errors/hooks/useVideoStreamError.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useVideoStreamError(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot2;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot2;
                var2 = var3.getId;
                var3 = var2.bind(var3)();
                var2 = _closure2_slot1;
                if(!(var3 !== var2)) { _fun0001_ip = 134; continue _fun0001 }
 28:
                var7 = _closure1_slot3;
                var4 = var7.getActiveErrorsOfType;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var3 = 3;
                var2 = var10[var3];
                var8 = undefined;
                var2 = var9.bind(var8)(var2);
                var2 = var2.AVError;
                var2 = var2.VIDEO_STREAM_RECEIVER_READY_TIMEOUT;
                var12 = var4.bind(var7)(var2);
                var2 = new Array(0);
                var11 = 0;
                var13 = var2;
                var11 = arraySpread(var13, var12, var11);
                var6 = var7.getActiveErrorsOfType;
                var3 = var10[var3];
                var3 = var9.bind(var8)(var3);
                var3 = var3.AVError;
                var3 = var3.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM;
                var12 = var6.bind(var7)(var3);
                var13 = var2;
                var3 = arraySpread(var13, var12, var11);
                var4 = var2;
                _fun0001_ip = 238; continue _fun0001;
 134:
                var7 = _closure1_slot3;
                var3 = var7.getActiveErrorsOfType;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 3;
                var1 = var10[var2];
                var8 = undefined;
                var1 = var9.bind(var8)(var1);
                var1 = var1.AVError;
                var1 = var1.VIDEO_STREAM_SENDER_READY_TIMEOUT;
                var12 = var3.bind(var7)(var1);
                var1 = new Array(0);
                var11 = 0;
                var13 = var1;
                var11 = arraySpread(var13, var12, var11);
                var6 = var7.getActiveErrorsOfType;
                var2 = var10[var2];
                var2 = var9.bind(var8)(var2);
                var2 = var2.AVError;
                var2 = var2.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM;
                var12 = var6.bind(var7)(var2);
                var13 = var1;
                var2 = arraySpread(var13, var12, var11);
                var4 = var1;
 238:
                var1 = var4.length;
                var3 = 0;
                var1 = var3 < var1;
                if(!var1) { _fun0001_ip = 295; continue _fun0001 }
 252:
                var1 = var4[var3];
                var6 = var1.mediaContext;
                var2 = _closure2_slot0;
                if(!(var6 === var2)) { _fun0001_ip = 283; continue _fun0001 }
 270:
                var6 = var1.userId;
                var2 = _closure2_slot1;
                if(!(var6 !== var2)) { _fun0001_ip = 299; continue _fun0001 }
 283:
                var3 = var3 + 1;
                var2 = var4.length;
                if(var3 < var2) { _fun0001_ip = 252; continue _fun0001 }
 295:
                var2 = undefined;
                return var2;
 299:
                var1 = var1.type;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();