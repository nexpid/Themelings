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
case 0:
            var2 = arg1;
            var8 = var2.message;
            var _closure2_slot0 = var8;
            var10 = var2.channel;
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 2;
            var2 = var12[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.useConversationContext;
            var2 = var2.bind(var3)();
            var5 = var2.conversationProps;
            var _closure2_slot1 = var5;
            var11 = var2.conversation;
            var7 = _closure1_slot3;
            var6 = var7.useCallback;
            var3 = new Array(1);
            var3[0] = var5;
            var2 = function() {
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 3;
                var3 = var7[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.openConversation;
                var3 = _closure2_slot1;
                var6 = _closure1_slot1;
                var2 = 4;
                var2 = var7[var2];
                var2 = var6.bind(var1)(var2);
                var2 = var2.itemInteracted;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var6 = var6.bind(var7)(var2, var3);
            var _closure2_slot2 = var6;
            var3 = var7.useCallback;
            var2 = new Array(2);
            var2[0] = var6;
            var13 = var8.id;
            var2[1] = var13;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.itemInteracted;
                var3 = _closure2_slot0;
                var5 = var3.id;
                var4 = 'conversation';
                var3 = 'press_message';
                var3 = var6.bind(var7)(var5, var4, var3);
                var2 = _closure2_slot2;
                var2 = var2.bind(var1)();
                return var1;
            };
            var7 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var1 = 5;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var12 = null;
            if(!(var12 != var11)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = var11.messages;
            var12 = var11.length;
            var11 = 1;
            if(!(!(var12 > var11))) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 6;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.hMFMY2;
            var11 = var12.bind(var13)(var11);
            _fun0001_ip = 5; continue _fun0001;
case 4:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 6;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.1sgOc3;
            var11 = var13.bind(var14)(var12);
case 5:
            var1['actionLabel'] = var11;
            var11 = var8.id;
            var1['id'] = var11;
            var11 = 'conversation';
            var1['type'] = var11;
            var10 = var10.id;
            var1['channelId'] = var10;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 7;
            var9 = var11[var9];
            var10 = var10.bind(var4)(var9);
            var9 = var10.extractTimestamp;
            var8 = var8.id;
            var8 = var9.bind(var10)(var8);
            var1['timestamp'] = var8;
            var1['onHeaderPress'] = var7;
            var1['onHeaderLongPress'] = var6;
            var1['conversationProps'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ICYMIMessageConversationRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MessageConversationRow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var9 = var2.message;
            var _closure2_slot0 = var9;
            var8 = var2.channel;
            var7 = var2.guild;
            var _closure2_slot1 = var7;
            var6 = _closure1_slot3;
            var3 = var6.useEffect;
            var2 = null;
            var2 = var2 == var7;
            var4 = undefined;
            var10 = undefined;
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var10 = var7.id;
case 6:
            var2 = new Array(2);
            var2[0] = var10;
            var10 = var9.author;
            var10 = var10.id;
            var2[1] = var10;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var6 = null;
                    var4 = var6 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var4 = _closure2_slot1;
                    var3 = var4.id;
case 8:
                    if(!(var6 != var3)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 8;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.requestMembersById;
                    var3 = _closure2_slot1;
                    var6 = var6 == var3;
                    var3 = undefined;
                    if(var6) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var6 = _closure2_slot1;
                    var3 = var6.id;
case 12:
                    var2 = _closure2_slot0;
                    var2 = var2.author;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
case 10:
                    return var1;
                }
            };
            var1 = var3.bind(var6)(var1, var2);
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 9;
            var1 = var10[var1];
            var3 = var2.bind(var4)(var1);
            var1 = var3.useMessageConversationProps;
            var6 = var1.bind(var3)(var9);
            var3 = _closure1_slot4;
            var1 = 10;
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