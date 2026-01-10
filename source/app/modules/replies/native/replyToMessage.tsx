// app/modules/replies/native/replyToMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot6 = var7;
    var4 = var4.Routes;
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/replies/native/replyToMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function longPressMessageHandleReply(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var10 = var3.message;
            var2 = var3.channel;
            var4 = var3.chatInputRef;
            var12 = var3.actionSource;
            var7 = var3.invertible;
            var1 = undefined;
            if(!(var7 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = false;
case 2:
            var6 = var3.scrollToMessage;
            if(!(var6 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = false;
case 4:
            var9 = _closure1_slot3;
            var8 = var9.getEditingMessage;
            var5 = var2.id;
            var15 = var8.bind(var9)(var5);
            var5 = null;
            if(!(var5 != var15)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = _closure1_slot4;
            var8 = var9.getCurrentUser;
            var16 = var8.bind(var9)();
            var9 = _closure1_slot1;
            var19 = _closure1_slot2;
            var8 = 4;
            var8 = var19[var8];
            var13 = var9.bind(var1)(var8);
            var11 = var13.track;
            var8 = _closure1_slot6;
            var9 = var8.CHAT_CONTEXT_BAR_ACTION_CANCELED;
            var8 = {};
            var14 = var10.id;
            var8['message_id'] = var14;
            var14 = var2.id;
            var8['channel_id'] = var14;
            var14 = var2.guild_id;
            var8['guild_id'] = var14;
            var18 = 'edit';
            var8['context_action'] = var18;
            var17 = _closure1_slot0;
            var14 = 5;
            var14 = var19[var14];
            var17 = var17.bind(var1)(var14);
            var14 = var17.getContextBarCancelReason;
            var14 = var14.bind(var17)(var18, var12);
            var8['reason'] = var14;
            var14 = var5 != var16;
            if(!var14) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var16 = var16.id;
            var15 = var15.author;
            var15 = var15.id;
            var14 = var16 === var15;
case 8:
            var8['is_own_message'] = var14;
            var8 = var11.bind(var13)(var9, var8);
case 6:
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 6;
            var8 = var11[var8];
            var11 = var9.bind(var1)(var8);
            var9 = var11.endEditMessage;
            var8 = var2.id;
            var8 = var9.bind(var11)(var8);
            var11 = _closure1_slot5;
            var9 = var11.getPendingReply;
            var8 = var2.id;
            var11 = var9.bind(var11)(var8);
            if(!var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = 'message_swipe';
            if(!(var7 === var12)) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            if(!(var5 != var11)) { _fun0001_ip = 10; continue _fun0001 }
case 13:
            var7 = var11.message;
            var8 = var7.id;
            var7 = var10.id;
            if(!(var8 !== var7)) { _fun0001_ip = 14; continue _fun0001 }
case 10:
            var8 = _closure1_slot1;
            var16 = _closure1_slot2;
            var7 = 4;
            var7 = var16[var7];
            var13 = var8.bind(var1)(var7);
            var9 = var13.track;
            var7 = _closure1_slot6;
            var8 = var7.REPLY_MESSAGE_STARTED;
            var7 = {};
            var7['source'] = var12;
            var15 = _closure1_slot0;
            var14 = 8;
            var17 = var16[var14];
            var19 = var15.bind(var1)(var17);
            var18 = var19.collectGuildAnalyticsMetadata;
            var17 = var2.guild_id;
            var21 = var18.bind(var19)(var17);
            var22 = var7;
            var17 = copyDataProperties(var22, var21);
            var14 = var16[var14];
            var15 = var15.bind(var1)(var14);
            var14 = var15.collectChannelAnalyticsMetadata;
            var21 = var14.bind(var15)(var2);
            var22 = var7;
            var14 = copyDataProperties(var22, var21);
            var7 = var9.bind(var13)(var8, var7);
            var8 = _closure1_slot4;
            var7 = var8.getCurrentUser;
            var7 = var7.bind(var8)();
            var8 = var2.isDM;
            var8 = var8.bind(var2)();
            var13 = !var8;
            if(!var13) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var13 = var5 != var7;
case 15:
            if(!var13) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var8 = var10.author;
            var8 = var8.id;
            var7 = var7.id;
            var13 = var8 !== var7;
case 17:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 7;
            var7 = var9[var7];
            var9 = var8.bind(var1)(var7);
            var8 = var9.createPendingReply;
            var7 = {};
            var7['message'] = var10;
            var7['channel'] = var2;
            var7['shouldMention'] = var13;
            var7['source'] = var12;
            var7 = var8.bind(var9)(var7);
            var7 = var5 == var4;
            var8 = undefined;
            if(var7) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var9 = var4.current;
            var7 = var5 == var9;
            var8 = var9;
case 19:
            if(var7) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var7 = var8.openSystemKeyboard;
            var7 = var7.bind(var8)();
case 21:
            if(!var6) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 9;
            var6 = var8[var6];
            var8 = var7.bind(var1)(var6);
            var7 = var8.transitionTo;
            var14 = _closure1_slot7;
            var13 = var14.CHANNEL;
            var6 = var2.getGuildId;
            var12 = var6.bind(var2)();
            var9 = var2.id;
            var6 = var10.id;
            var6 = var13.bind(var14)(var12, var9, var6);
            var6 = var7.bind(var8)(var6);
            _fun0001_ip = 23; continue _fun0001;
case 14:
            var7 = _closure1_slot4;
            var6 = var7.getCurrentUser;
            var12 = var6.bind(var7)();
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 4;
            var6 = var8[var6];
            var9 = var7.bind(var1)(var6);
            var8 = var9.track;
            var6 = _closure1_slot6;
            var7 = var6.CHAT_CONTEXT_BAR_ACTION_CANCELED;
            var6 = {};
            var10 = var10.id;
            var6['message_id'] = var10;
            var10 = var2.id;
            var6['channel_id'] = var10;
            var10 = var2.guild_id;
            var6['guild_id'] = var10;
            var10 = 'reply';
            var6['context_action'] = var10;
            var10 = 'swipe_reply_undo';
            var6['reason'] = var10;
            var10 = var5 != var12;
            if(!var10) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var12 = var12.id;
            var11 = var11.message;
            var11 = var11.author;
            var11 = var11.id;
            var10 = var12 === var11;
case 25:
            var6['is_own_message'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 7;
            var3 = var7[var3];
            var6 = var6.bind(var1)(var3);
            var3 = var6.deletePendingReply;
            var2 = var2.id;
            var2 = var3.bind(var6)(var2);
            var2 = var5 == var4;
            var3 = undefined;
            if(var2) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var6 = var4.current;
            var2 = var5 == var6;
            var3 = undefined;
            if(var2) { _fun0001_ip = 27; continue _fun0001 }
case 29:
            var2 = var6.getText;
            var3 = var2.bind(var6)();
case 27:
            var2 = '';
            if(!(var2 === var3)) { _fun0001_ip = 23; continue _fun0001 }
case 30:
            var2 = var5 == var4;
            var3 = undefined;
            if(var2) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var4 = var4.current;
            var2 = var5 == var4;
            var3 = var4;
case 31:
            if(var2) { _fun0001_ip = 23; continue _fun0001 }
case 33:
            var2 = var3.dismissKeyboard;
            var2 = var2.bind(var3)();
case 23:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();