// app/modules/polls/chat/PollInteractivityHelper.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function PollReferenceInflater(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.message;
            var _closure2_slot0 = var6;
            var5 = var1.children;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 4;
            var3 = var4[var3];
            var4 = undefined;
            var10 = var7.bind(var4)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = var6.channel_id;
            var7 = new Array(2);
            var7[0] = var3;
            var3 = var6.id;
            var7[1] = var3;
            var3 = function() {
                var4 = _closure1_slot4;
                var3 = var4.getMessage;
                var1 = _closure2_slot0;
                var2 = var1.channel_id;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7 = var9.bind(var10)(var8, var3, var7);
            var8 = null;
            var11 = var8 != var7;
            var _closure2_slot1 = var11;
            var10 = _closure1_slot3;
            var9 = var10.useEffect;
            var3 = new Array(3);
            var3[0] = var11;
            var11 = var6.channel_id;
            var3[1] = var11;
            var11 = var6.id;
            var3[2] = var11;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0002_ip = 70; continue _fun0002 }
 10:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.focusMessage;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var5 = var4.channel_id;
                    var1['channelId'] = var5;
                    var4 = var4.id;
                    var1['messageId'] = var4;
                    var1 = var2.bind(var3)(var1);
 70:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var9.bind(var10)(var2, var3);
            var3 = _closure1_slot5;
            var1 = _closure1_slot6;
            var2 = var1.Provider;
            var1 = {};
            if(!(var8 != var7)) { _fun0001_ip = 178; continue _fun0001 }
 175:
            var6 = var7;
 178:
            var1['value'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = var7.createContext;
    var4 = var4.bind(var7)(var1);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/chat/PollInteractivityHelper.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function PollInteractivityHelper(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var7 = var1.message;
            var6 = var1.children;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.isPollMessageDirectlyInteractive;
            var3 = var1.bind(var3)(var7);
            var1 = var6;
            if(var3) { _fun0003_ip = 79; continue _fun0003 }
 55:
            var4 = _closure1_slot5;
            var3 = _closure1_slot7;
            var2 = {};
            var2['message'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 79:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function useInteractivePollMessage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var5 = _closure1_slot3;
            var4 = var5.useContext;
            var2 = _closure1_slot6;
            var4 = var4.bind(var5)(var2);
            var2 = null;
            if(!(var2 != var4)) { _fun0004_ip = 34; continue _fun0004 }
 31:
            var1 = var4;
 34:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 3;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = var2 != var1;
            var2 = 'Using PollReferenceMessageContext without a provider (or a fallback)';
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['useInteractivePollMessage'] = var2;
    return var1;
})();