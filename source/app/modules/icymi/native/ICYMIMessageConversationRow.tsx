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
            var9 = var2.message;
            var _closure2_slot0 = var9;
            var11 = var2.channel;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var8 = _closure1_slot3;
            var3 = var8.useContext;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.ConversationContext;
            var6 = var3.bind(var8)(var2);
            var _closure2_slot1 = var6;
            var7 = var8.useCallback;
            var5 = null;
            var3 = var5 == var6;
            var2 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var6.conversationProps;
case 2:
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var5 = var4 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure2_slot1;
                    var3 = var5.conversationProps;
case 4:
                    if(!(var4 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 3;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.openConversation;
                    var2 = _closure2_slot1;
                    var2 = var2.conversationProps;
                    var2 = var3.bind(var4)(var2);
case 6:
                    return var1;
                }
            };
            var7 = var7.bind(var8)(var2, var3);
            _closure2_slot2 = var7;
            var8 = _closure1_slot3;
            var3 = var8.useCallback;
            var2 = new Array(2);
            var2[0] = var7;
            var12 = var9.id;
            var2[1] = var12;
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
            var8 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 5;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var13 = var5 == var6;
            var12 = undefined;
            if(var13) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var12 = var6.conversation;
case 8:
            if(!(var5 != var12)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var12 = var6.conversation;
            var12 = var12.messages;
            var13 = var12.length;
            var12 = 1;
            if(!(!(var13 > var12))) { _fun0001_ip = 12; continue _fun0001 }
case 10:
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
            var12 = var12.hMFMY9;
            var12 = var13.bind(var14)(var12);
            _fun0001_ip = 13; continue _fun0001;
case 12:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 6;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.1sgOc0;
            var12 = var14.bind(var15)(var13);
case 13:
            var1['actionLabel'] = var12;
            var12 = var9.id;
            var1['id'] = var12;
            var12 = 'conversation';
            var1['type'] = var12;
            var11 = var11.id;
            var1['channelId'] = var11;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 7;
            var10 = var12[var10];
            var11 = var11.bind(var4)(var10);
            var10 = var11.extractTimestamp;
            var9 = var9.id;
            var9 = var10.bind(var11)(var9);
            var1['timestamp'] = var9;
            var1['onHeaderPress'] = var8;
            var1['onHeaderLongPress'] = var7;
            var7 = var5 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = var6.conversationProps;
case 14:
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
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
            if(var2) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var10 = var7.id;
case 16:
            var2 = new Array(2);
            var2[0] = var10;
            var10 = var9.author;
            var10 = var10.id;
            var2[1] = var10;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var6 = null;
                    var4 = var6 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0004_ip = 18; continue _fun0004 }
case 5:
                    var4 = _closure2_slot1;
                    var3 = var4.id;
case 18:
                    if(!(var6 != var3)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 8;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.requestMembersById;
                    var3 = _closure2_slot1;
                    var6 = var6 == var3;
                    var3 = undefined;
                    if(var6) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var6 = _closure2_slot1;
                    var3 = var6.id;
case 21:
                    var2 = _closure2_slot0;
                    var2 = var2.author;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
case 19:
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