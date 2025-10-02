// app/modules/conversations/native/util/openConversation.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsObjects;
    var _closure1_slot3 = var7;
    var7 = var4.AnalyticsObjectTypes;
    var _closure1_slot4 = var7;
    var4 = var4.AnalyticsPages;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/native/util/openConversation.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function openConversation(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var2 = {};
            var15 = var2;
            var14 = var6;
            var1 = copyDataProperties(var15, var14);
            var3 = 'icymi-bottom-sheet';
            var1 = 'renderLocation';
            var2[var1] = var3;
            var8 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 1;
            var7 = var4[var1];
            var1 = undefined;
            var9 = var8.bind(var1)(var7);
            var8 = var9.openLazy;
            var10 = _closure1_slot0;
            var7 = 3;
            var7 = var4[var7];
            var10 = var10.bind(var1)(var7);
            var7 = 2;
            var7 = var4[var7];
            var4 = var4.paths;
            var7 = var10.bind(var1)(var7, var4);
            var4 = {};
            var4['conversationProps'] = var2;
            var2 = arg2;
            var4['trackItemInteraction'] = var2;
            var2 = 'ConversationActionSheet';
            var2 = var8.bind(var9)(var7, var2, var4);
            var2 = var6.messages;
            var2 = var2.length;
            var4 = 0;
            if(!(var2 > var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var6.messages;
            var4 = var2[var4];
            var7 = var6.type;
            var2 = 'forum_thread';
            if(!(var2 !== var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var6.type;
            var2 = 'announcement';
            if(!(var2 !== var7)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var8 = var6.type;
            var7 = 'message';
            var2 = var4;
            if(!(var7 === var8)) { _fun0001_ip = 7; continue _fun0001 }
case 4:
            var7 = var6.messages;
            var6 = var7.find;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var6 = null;
            if(!(var6 != var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var5;
case 8:
            var2 = var4;
case 7:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 4;
            var4 = var6[var4];
            var7 = var5.bind(var1)(var4);
            var6 = var7.ack;
            var15 = var2.channel_id;
            var4 = {};
            var8 = _closure1_slot5;
            var8 = var8.ICYMI;
            var4['page'] = var8;
            var8 = _closure1_slot3;
            var8 = var8.ACK_MESSAGE_VIEWED;
            var4['object'] = var8;
            var3 = _closure1_slot4;
            var3 = var3.ACK_SEMI_AUTOMATIC;
            var4['objectType'] = var3;
            var11 = var2.id;
            var16 = var7;
            var14 = var4;
            var13 = true;
            var12 = true;
            var2 = var16[var6](var15, var14, var13, var12, var11, var10);
case 2:
            return var1;
        }
    };
    var3['openConversation'] = var2;
    return var1;
})();