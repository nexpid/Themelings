// app/modules/polls/chat/usePollMessageChatData.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useChannelPollInteractions;
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/chat/usePollMessageChatData.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePollMessageChatData(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg2;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 2;
            var4 = var6[var4];
            var10 = undefined;
            var7 = var5.bind(var10)(var4);
            var5 = var7.useInteractivePollMessage;
            var4 = arg1;
            var8 = var5.bind(var7)(var4);
            var _closure2_slot0 = var8;
            var5 = _closure1_slot4;
            var4 = var8.getChannelId;
            var4 = var4.bind(var8)();
            var5 = var5.bind(var10)(var4);
            var4 = var8.id;
            var7 = var5[var4];
            var _closure2_slot1 = var7;
            var5 = _closure1_slot1;
            var4 = 3;
            var4 = var6[var4];
            var6 = var5.bind(var10)(var4);
            var9 = var8.poll;
            var4 = null;
            var11 = var4 == var9;
            var5 = undefined;
            if(var11) { _fun0001_ip = 119; continue _fun0001 }
 113:
            var5 = var9.expiry;
 119:
            var6 = var6.bind(var10)(var5);
            var _closure2_slot2 = var6;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 4;
            var5 = var12[var5];
            var5 = var9.bind(var10)(var5);
            var9 = var5.AnimateEmoji;
            var5 = var9.useSetting;
            var9 = var5.bind(var9)();
            var _closure2_slot3 = var9;
            var11 = _closure1_slot1;
            var5 = 5;
            var5 = var12[var5];
            var5 = var11.bind(var10)(var5);
            var5 = var5.bind(var10)();
            if(!(var4 != var3)) { _fun0001_ip = 195; continue _fun0001 }
 192:
            var5 = var3;
 195:
            var _closure2_slot4 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(5);
            var2[0] = var9;
            var2[1] = var8;
            var2[2] = var7;
            var2[3] = var6;
            var2[4] = var5;
            var1 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var5 = undefined;
                var4 = var2.bind(var5)(var1);
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = {};
                var7 = _closure2_slot3;
                var1['animateEmoji'] = var7;
                var7 = _closure2_slot4;
                var1['theme'] = var7;
                var6 = _closure2_slot2;
                var1['formattedExpirationLabel'] = var6;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();