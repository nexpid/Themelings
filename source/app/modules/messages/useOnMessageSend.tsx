// app/modules/messages/useOnMessageSend.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageStates;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/useOnMessageSend.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useOnMessageSend(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var6 = arguments[1];
            var _closure2_slot0 = var7;
            var1 = undefined;
            if(!(var6 === var1)) { _fun0001_ip = 20; continue _fun0001 }
 18:
            var6 = undefined;
 20:
            var _closure2_slot1 = var6;
            var5 = _closure1_slot2;
            var4 = var5.useEffect;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var2 = function() {
                var5 = function handleMessage(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var3 = _closure2_slot1;
                        var1 = undefined;
                        var3 = var1 !== var3;
                        if(!var3) { _fun0002_ip = 32; continue _fun0002 }
 16:
                        var4 = arg1;
                        var5 = var4.channelId;
                        var4 = _closure2_slot1;
                        var3 = var5 !== var4;
 32:
                        if(var3) { _fun0002_ip = 43; continue _fun0002 }
 35:
                        var2 = _closure2_slot0;
                        var2 = var2.bind(var1)();
 43:
                        return var1;
                    }
                };
                var _closure3_slot0 = var5;
                var10 = function handleMessageCreate(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = arg1;
                        var1 = var3.optimistic;
                        if(var1) { _fun0003_ip = 39; continue _fun0003 }
 12:
                        var2 = var3.message;
                        var4 = var2.state;
                        var2 = _closure1_slot3;
                        var2 = var2.SENDING;
                        var1 = var4 === var2;
 39:
                        if(!var1) { _fun0003_ip = 56; continue _fun0003 }
 42:
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
 56:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot1 = var10;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 2;
                var7 = var6[var2];
                var3 = undefined;
                var9 = var4.bind(var3)(var7);
                var8 = var9.subscribe;
                var7 = 'MESSAGE_CREATE';
                var7 = var8.bind(var9)(var7, var10);
                var7 = var6[var2];
                var9 = var4.bind(var3)(var7);
                var8 = var9.subscribe;
                var7 = 'UPLOAD_START';
                var7 = var8.bind(var9)(var7, var5);
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var3 = var4.subscribe;
                var2 = 'CALL_CREATE';
                var2 = var3.bind(var4)(var2, var5);
                var1 = function() {
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 2;
                    var5 = var4[var2];
                    var1 = undefined;
                    var9 = var3.bind(var1)(var5);
                    var8 = var9.unsubscribe;
                    var7 = _closure3_slot1;
                    var6 = 'MESSAGE_CREATE';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var4[var2];
                    var8 = var3.bind(var1)(var6);
                    var7 = var8.unsubscribe;
                    var5 = _closure3_slot0;
                    var6 = 'UPLOAD_START';
                    var6 = var7.bind(var8)(var6, var5);
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.unsubscribe;
                    var2 = 'CALL_CREATE';
                    var2 = var3.bind(var4)(var2, var5);
                    return var1;
                };
                return var1;
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();