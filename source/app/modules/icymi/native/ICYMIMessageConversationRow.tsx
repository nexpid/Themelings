// app/modules/icymi/native/ICYMIMessageConversationRow.tsx
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
    var8 = var4.bind(var1)(var7);
    var _closure1_slot3 = var8;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var7 = var2.message;
            var9 = var2.channel;
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 2;
            var2 = var11[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.useConversationContext;
            var2 = var2.bind(var3)();
            var5 = var2.conversationProps;
            var _closure2_slot0 = var5;
            var10 = var2.conversation;
            var6 = _closure1_slot3;
            var3 = var6.useCallback;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openConversation;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var1 = 4;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var11 = null;
            if(!(var11 != var10)) { _fun0001_ip = 142; continue _fun0001 }
 124:
            var10 = var10.messages;
            var11 = var10.length;
            var10 = 1;
            if(!(!(var11 > var10))) { _fun0001_ip = 199; continue _fun0001 }
 142:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 5;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.hMFMY2;
            var10 = var11.bind(var12)(var10);
            _fun0001_ip = 256; continue _fun0001;
 199:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 5;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.1sgOc3;
            var10 = var12.bind(var13)(var11);
 256:
            var1['actionLabel'] = var10;
            var10 = var7.id;
            var1['id'] = var10;
            var10 = 'conversation';
            var1['type'] = var10;
            var9 = var9.id;
            var1['channelId'] = var9;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 6;
            var8 = var10[var8];
            var9 = var9.bind(var4)(var8);
            var8 = var9.extractTimestamp;
            var7 = var7.id;
            var7 = var8.bind(var9)(var7);
            var1['timestamp'] = var7;
            var1['onHeaderPress'] = var6;
            var1['onHeaderLongPress'] = var6;
            var1['conversationProps'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ICYMIMessageConversationRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MessageConversationRow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var9 = var2.message;
            var _closure2_slot0 = var9;
            var8 = var2.channel;
            var7 = var2.guild;
            var _closure2_slot1 = var7;
            var10 = _closure1_slot3;
            var6 = var10.useEffect;
            var2 = null;
            var3 = var2 == var7;
            var4 = undefined;
            var2 = undefined;
            if(var3) { _fun0002_ip = 58; continue _fun0002 }
 53:
            var2 = var7.id;
 58:
            var3 = new Array(2);
            var3[0] = var2;
            var2 = var9.author;
            var2 = var2.id;
            var3[1] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot1;
                    var6 = null;
                    var4 = var6 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0003_ip = 29; continue _fun0003 }
 20:
                    var4 = _closure2_slot1;
                    var3 = var4.id;
 29:
                    if(!(var6 != var3)) { _fun0003_ip = 105; continue _fun0003 }
 33:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 7;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.requestMembersById;
                    var3 = _closure2_slot1;
                    var6 = var6 == var3;
                    var3 = undefined;
                    if(var6) { _fun0003_ip = 84; continue _fun0003 }
 75:
                    var6 = _closure2_slot1;
                    var3 = var6.id;
 84:
                    var2 = _closure2_slot0;
                    var2 = var2.author;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
 105:
                    return var1;
                }
            };
            var2 = var6.bind(var10)(var2, var3);
            var6 = _closure1_slot3;
            var3 = var6.useMemo;
            var2 = new Array(1);
            var2[0] = var9;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot0;
                var2 = var3.id;
                var1['id'] = var2;
                var2 = 'message';
                var1['type'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['messages'] = var2;
                var2 = 'icymi-card';
                var1['renderLocation'] = var2;
                return var1;
            };
            var6 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot4;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 8;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ConversationProvider;
            var1 = {};
            var1['conversationProps'] = var6;
            var6 = _closure1_slot5;
            var5 = {};
            var5['message'] = var9;
            var5['channel'] = var8;
            var5['guild'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['MessageConversationRow'] = var2;
    return var1;
})();