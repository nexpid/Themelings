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
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/replies/native/replyToMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function longPressMessageHandleReply(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.message;
            var2 = var1.channel;
            var4 = var1.chatInputRef;
            var9 = var1.actionSource;
            var6 = var1.invertible;
            var1 = undefined;
            if(!(var6 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var8 = _closure1_slot3;
            var7 = var8.getEditingMessage;
            var5 = var2.id;
            var14 = var7.bind(var8)(var5);
            var5 = null;
            if(!(var5 != var14)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = _closure1_slot4;
            var7 = var8.getCurrentUser;
            var15 = var7.bind(var8)();
            var8 = _closure1_slot1;
            var18 = _closure1_slot2;
            var7 = 4;
            var7 = var18[var7];
            var12 = var8.bind(var1)(var7);
            var11 = var12.track;
            var7 = _closure1_slot6;
            var8 = var7.CHAT_CONTEXT_BAR_ACTION_CANCELED;
            var7 = {};
            var13 = var10.id;
            var7['message_id'] = var13;
            var13 = var2.id;
            var7['channel_id'] = var13;
            var13 = var2.guild_id;
            var7['guild_id'] = var13;
            var17 = 'edit';
            var7['context_action'] = var17;
            var16 = _closure1_slot0;
            var13 = 5;
            var13 = var18[var13];
            var16 = var16.bind(var1)(var13);
            var13 = var16.getContextBarCancelReason;
            var13 = var13.bind(var16)(var17, var9);
            var7['reason'] = var13;
            var13 = var5 != var15;
            if(!var13) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var15 = var15.id;
            var14 = var14.author;
            var14 = var14.id;
            var13 = var15 === var14;
case 6:
            var7['is_own_message'] = var13;
            var7 = var11.bind(var12)(var8, var7);
case 4:
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 6;
            var7 = var11[var7];
            var11 = var8.bind(var1)(var7);
            var8 = var11.endEditMessage;
            var7 = var2.id;
            var7 = var8.bind(var11)(var7);
            var11 = _closure1_slot5;
            var8 = var11.getPendingReply;
            var7 = var2.id;
            var11 = var8.bind(var11)(var7);
            if(!var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = 'message_swipe';
            if(!(var6 === var9)) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            if(!(var5 != var11)) { _fun0001_ip = 8; continue _fun0001 }
case 11:
            var6 = var11.message;
            var7 = var6.id;
            var6 = var10.id;
            if(!(var7 !== var6)) { _fun0001_ip = 12; continue _fun0001 }
case 8:
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 4;
            var6 = var15[var6];
            var12 = var7.bind(var1)(var6);
            var8 = var12.track;
            var6 = _closure1_slot6;
            var7 = var6.REPLY_MESSAGE_STARTED;
            var6 = {};
            var6['source'] = var9;
            var14 = _closure1_slot0;
            var13 = 8;
            var16 = var15[var13];
            var18 = var14.bind(var1)(var16);
            var17 = var18.collectGuildAnalyticsMetadata;
            var16 = var2.guild_id;
            var19 = var17.bind(var18)(var16);
            var20 = var6;
            var16 = copyDataProperties(var20, var19);
            var13 = var15[var13];
            var14 = var14.bind(var1)(var13);
            var13 = var14.collectChannelAnalyticsMetadata;
            var19 = var13.bind(var14)(var2);
            var20 = var6;
            var13 = copyDataProperties(var20, var19);
            var6 = var8.bind(var12)(var7, var6);
            var7 = _closure1_slot4;
            var6 = var7.getCurrentUser;
            var6 = var6.bind(var7)();
            var7 = var2.isDM;
            var7 = var7.bind(var2)();
            var12 = !var7;
            if(!var12) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var12 = var5 != var6;
case 13:
            if(!var12) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var7 = var10.author;
            var7 = var7.id;
            var6 = var6.id;
            var12 = var7 !== var6;
case 15:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 7;
            var6 = var8[var6];
            var8 = var7.bind(var1)(var6);
            var7 = var8.createPendingReply;
            var6 = {};
            var6['message'] = var10;
            var6['channel'] = var2;
            var6['shouldMention'] = var12;
            var6['source'] = var9;
            var6 = var7.bind(var8)(var6);
            var6 = var5 == var4;
            var7 = undefined;
            if(var6) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var8 = var4.current;
            var6 = var5 == var8;
            var7 = var8;
case 17:
            if(var6) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var6 = var7.openSystemKeyboard;
            var6 = var6.bind(var7)();
            _fun0001_ip = 19; continue _fun0001;
case 12:
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
            if(!var10) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var12 = var12.id;
            var11 = var11.message;
            var11 = var11.author;
            var11 = var11.id;
            var10 = var12 === var11;
case 21:
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
            if(var2) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var6 = var4.current;
            var2 = var5 == var6;
            var3 = undefined;
            if(var2) { _fun0001_ip = 23; continue _fun0001 }
case 25:
            var2 = var6.getText;
            var3 = var2.bind(var6)();
case 23:
            var2 = '';
            if(!(var2 === var3)) { _fun0001_ip = 19; continue _fun0001 }
case 26:
            var2 = var5 == var4;
            var3 = undefined;
            if(var2) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var4 = var4.current;
            var2 = var5 == var4;
            var3 = var4;
case 27:
            if(var2) { _fun0001_ip = 19; continue _fun0001 }
case 29:
            var2 = var3.dismissKeyboard;
            var2 = var2.bind(var3)();
case 19:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();