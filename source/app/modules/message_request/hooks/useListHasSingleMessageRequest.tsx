// app/modules/message_request/hooks/useListHasSingleMessageRequest.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_request/hooks/useListHasSingleMessageRequest.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useListHasSingleMessageRequest() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 3;
            var2 = var6[var2];
            var4 = undefined;
            var3 = var8.bind(var4)(var2);
            var2 = var3.useMessageRequestsCount;
            var3 = var2.bind(var3)();
            var _closure2_slot0 = var3;
            var9 = _closure1_slot3;
            var2 = var9.useRef;
            var2 = var2.bind(var9)(var3);
            var _closure2_slot1 = var2;
            var7 = 4;
            var7 = var6[var7];
            var11 = var8.bind(var4)(var7);
            var10 = var11.useStateFromStores;
            var7 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot4;
                var1 = var2.isReady;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var10.bind(var11)(var8, var7);
            var _closure2_slot2 = var10;
            var7 = var9.useRef;
            var7 = var7.bind(var9)(var10);
            var _closure2_slot3 = var7;
            var8 = var9.useEffect;
            var7 = new Array(2);
            var7[0] = var10;
            var7[1] = var3;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0002_ip = 22; continue _fun0002 }
 10:
                    var3 = _closure2_slot3;
                    var3 = var3.current;
                    var2 = !var3;
 22:
                    if(!var2) { _fun0002_ip = 51; continue _fun0002 }
 25:
                    var3 = _closure2_slot3;
                    var2 = true;
                    var3['current'] = var2;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var2['current'] = var1;
 51:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var8.bind(var9)(var5, var7);
            var5 = _closure1_slot1;
            var1 = 5;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)(var2);
            var2 = 1;
            var1 = var1 <= var2;
            if(!var1) { _fun0001_ip = 184; continue _fun0001 }
 180:
            var1 = var2 === var3;
 184:
            return var1;
        }
    };
    var3['useListHasSingleMessageRequest'] = var4;
    var2 = function useListHasSingleSpamMessageRequest() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var4 = undefined;
            var3 = var8.bind(var4)(var2);
            var2 = var3.useSpamMessageRequestCount;
            var3 = var2.bind(var3)();
            var _closure2_slot0 = var3;
            var9 = _closure1_slot3;
            var2 = var9.useRef;
            var2 = var2.bind(var9)(var3);
            var _closure2_slot1 = var2;
            var7 = 4;
            var7 = var6[var7];
            var11 = var8.bind(var4)(var7);
            var10 = var11.useStateFromStores;
            var7 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot5;
                var1 = var2.isReady;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var10.bind(var11)(var8, var7);
            var _closure2_slot2 = var10;
            var7 = var9.useRef;
            var7 = var7.bind(var9)(var10);
            var _closure2_slot3 = var7;
            var8 = var9.useEffect;
            var7 = new Array(2);
            var7[0] = var10;
            var7[1] = var3;
            var5 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0004_ip = 22; continue _fun0004 }
 10:
                    var3 = _closure2_slot3;
                    var3 = var3.current;
                    var2 = !var3;
 22:
                    if(!var2) { _fun0004_ip = 51; continue _fun0004 }
 25:
                    var3 = _closure2_slot3;
                    var2 = true;
                    var3['current'] = var2;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var2['current'] = var1;
 51:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var8.bind(var9)(var5, var7);
            var5 = _closure1_slot1;
            var1 = 5;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)(var2);
            var2 = 1;
            var1 = var1 <= var2;
            if(!var1) { _fun0003_ip = 184; continue _fun0003 }
 180:
            var1 = var2 === var3;
 184:
            return var1;
        }
    };
    var3['useListHasSingleSpamMessageRequest'] = var2;
    return var1;
})();