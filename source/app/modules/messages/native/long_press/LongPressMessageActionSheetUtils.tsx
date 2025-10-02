// app/modules/messages/native/long_press/LongPressMessageActionSheetUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var12;
    var9 = function getContextBarCancelReason(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var1 = 'message_swipe';
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 'action_sheet';
            if(!(var1 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = 'cancel';
            if(!(var1 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = undefined;
            return var1;
case 6:
            var1 = 'pressed_cancel';
            return var1;
case 4:
            var1 = 'action_sheet_reply';
            var2 = 'reply';
            if(!(var2 === var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = 'action_sheet_edit';
case 8:
            return var1;
case 2:
            var1 = 'swipe_reply';
            var2 = 'reply';
            if(!(var2 === var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = 'swipe_edit';
case 10:
            return var1;
        }
    };
    var _closure1_slot19 = var9;
    var8 = function handleEdit(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var7 = arg2;
            var4 = arg3;
            var11 = arg4;
            var2 = arguments[4];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = false;
case 12:
            var3 = var7.isForumPost;
            var3 = var3.bind(var7)();
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var8 = var7.id;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 12;
            var3 = var10[var3];
            var10 = var9.bind(var1)(var3);
            var9 = var10.castMessageIdAsChannelId;
            var3 = var5.id;
            var3 = var9.bind(var10)(var3);
            if(!(var8 === var3)) { _fun0002_ip = 14; continue _fun0002 }
case 16:
            var8 = var7.parent_id;
            var3 = null;
            if(!(var3 == var8)) { _fun0002_ip = 17; continue _fun0002 }
case 14:
            if(!var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var2 = 'message_swipe';
            if(!(var2 === var11)) { _fun0002_ip = 18; continue _fun0002 }
case 20:
            var10 = _closure1_slot5;
            var9 = var10.isEditing;
            var8 = var7.id;
            var3 = var5.id;
            var3 = var9.bind(var10)(var8, var3);
            if(var3) { _fun0002_ip = 21; continue _fun0002 }
case 18:
            var10 = _closure1_slot3;
            var9 = var10.getPendingReply;
            var8 = var7.id;
            var15 = var9.bind(var10)(var8);
            var10 = null;
            if(!(var10 != var15)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var9 = _closure1_slot7;
            var8 = var9.getCurrentUser;
            var16 = var8.bind(var9)();
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 16;
            var8 = var12[var8];
            var13 = var9.bind(var1)(var8);
            var12 = var13.track;
            var8 = _closure1_slot9;
            var9 = var8.CHAT_CONTEXT_BAR_ACTION_CANCELED;
            var8 = {};
            var14 = var5.id;
            var8['message_id'] = var14;
            var14 = var7.id;
            var8['channel_id'] = var14;
            var14 = var7.guild_id;
            var8['guild_id'] = var14;
            var17 = 'reply';
            var8['context_action'] = var17;
            var14 = _closure1_slot19;
            var14 = var14.bind(var1)(var17, var11);
            var8['reason'] = var14;
            var14 = var10 != var16;
            if(!var14) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var16 = var16.id;
            var15 = var15.message;
            var15 = var15.author;
            var15 = var15.id;
            var14 = var16 === var15;
case 24:
            var8['is_own_message'] = var14;
            var8 = var12.bind(var13)(var9, var8);
case 22:
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var8 = 13;
            var8 = var9[var8];
            var13 = var12.bind(var1)(var8);
            var12 = var13.deletePendingReply;
            var8 = var7.id;
            var8 = var12.bind(var13)(var8);
            var8 = _closure1_slot1;
            var3 = 17;
            var3 = var9[var3];
            var9 = var8.bind(var1)(var3);
            var8 = var9.startEditMessageRecord;
            var3 = var7.id;
            var3 = var8.bind(var9)(var3, var5, var11);
            var3 = var10 == var4;
            var8 = undefined;
            if(var3) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var9 = var4.current;
            var3 = var10 == var9;
            var8 = var9;
case 26:
            if(var3) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var3 = var8.openSystemKeyboard;
            var3 = var3.bind(var8)();
            _fun0002_ip = 28; continue _fun0002;
case 21:
            var8 = _closure1_slot7;
            var3 = var8.getCurrentUser;
            var13 = var3.bind(var8)();
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 16;
            var3 = var9[var3];
            var11 = var8.bind(var1)(var3);
            var10 = var11.track;
            var3 = _closure1_slot9;
            var9 = var3.CHAT_CONTEXT_BAR_ACTION_CANCELED;
            var3 = {};
            var8 = var5.id;
            var3['message_id'] = var8;
            var8 = var7.id;
            var3['channel_id'] = var8;
            var8 = var7.guild_id;
            var3['guild_id'] = var8;
            var8 = 'edit';
            var3['context_action'] = var8;
            var8 = 'swipe_edit_undo';
            var3['reason'] = var8;
            var8 = null;
            var12 = var8 != var13;
            if(!var12) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var14 = var13.id;
            var13 = var5.author;
            var13 = var13.id;
            var12 = var14 === var13;
case 30:
            var3['is_own_message'] = var12;
            var3 = var10.bind(var11)(var9, var3);
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 17;
            var2 = var9[var2];
            var9 = var3.bind(var1)(var2);
            var3 = var9.endEditMessage;
            var2 = var7.id;
            var2 = var3.bind(var9)(var2);
            var2 = var8 == var4;
            var3 = undefined;
            if(var2) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var4 = var4.current;
            var2 = var8 == var4;
            var3 = var4;
case 32:
            if(var2) { _fun0002_ip = 28; continue _fun0002 }
case 34:
            var2 = var3.dismissKeyboard;
            var2 = var2.bind(var3)();
            _fun0002_ip = 28; continue _fun0002;
case 17:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 13;
            var2 = var9[var2];
            var8 = var3.bind(var1)(var2);
            var4 = var8.deletePendingReply;
            var2 = var7.id;
            var2 = var4.bind(var8)(var2);
            var2 = 14;
            var2 = var9[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.openCreateForumPostModal;
            var2 = {};
            var8 = var7.guild_id;
            var2['guildId'] = var8;
            var8 = var7.parent_id;
            var2['parentChannelId'] = var8;
            var7 = var7.id;
            var2['threadId'] = var7;
            var5 = var5.id;
            var2['messageId'] = var5;
            var5 = true;
            var2['isEdit'] = var5;
            var8 = _closure1_slot1;
            var7 = 15;
            var5 = var9[var7];
            var5 = var8.bind(var1)(var5);
            var10 = var5.FORUM_CHANNEL;
            var5 = new Array(2);
            var5[0] = var10;
            var7 = var9[var7];
            var7 = var8.bind(var1)(var7);
            var7 = var7.GUILD_CHANNEL;
            var5[1] = var7;
            var2['analyticsLocations'] = var5;
            var5 = {};
            var7 = _closure1_slot11;
            var7 = var7.GUILD_CHANNEL;
            var5['page'] = var7;
            var7 = _closure1_slot12;
            var7 = var7.FORUM_POST_HEADER;
            var5['section'] = var7;
            var6 = _closure1_slot10;
            var6 = var6.CONTEXT_MENU;
            var5['object'] = var6;
            var2['analyticsLocationObject'] = var5;
            var2 = var3.bind(var4)(var2);
case 28:
            return var1;
        }
    };
    var _closure1_slot20 = var8;
    var1 = function handleConfirmDelete(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arguments[2];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var6 = false;
case 35:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 17;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.deleteMessage;
            var3 = arg1;
            var2 = arg2;
            var2 = var4.bind(var5)(var3, var2, var6);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var7 = function handleCreateThread(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var9 = arguments[2];
            var1 = undefined;
            if(!(var9 === var1)) { _fun0004_ip = 13; continue _fun0004 }
case 37:
            var9 = 'Message';
case 13:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 28;
            var4 = var7[var4];
            var8 = var5.bind(var1)(var4);
            var7 = var8.openThreadCreationForMobile;
            var4 = null;
            var10 = var4 == var2;
            var5 = undefined;
            if(var10) { _fun0004_ip = 8; continue _fun0004 }
case 38:
            var5 = var2.id;
case 8:
            var5 = var7.bind(var8)(var3, var5, var9);
            var4 = var4 == var2;
            if(var4) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 29;
            var5 = var11[var5];
            var9 = var7.bind(var1)(var5);
            var8 = var9.navigateToCreateThread;
            var7 = var3.guild_id;
            var10 = _closure1_slot1;
            var5 = 12;
            var5 = var11[var5];
            var11 = var10.bind(var1)(var5);
            var10 = var11.castMessageIdAsChannelId;
            var5 = var2.id;
            var5 = var10.bind(var11)(var5);
            var4 = var8.bind(var9)(var7, var5);
case 39:
            if(var4) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 30;
            var4 = var8[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.transitionToGuild;
            var3 = var3.guild_id;
            var7 = _closure1_slot1;
            var6 = 12;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.castMessageIdAsChannelId;
            var2 = var2.id;
            var2 = var6.bind(var7)(var2);
            var2 = var4.bind(var5)(var3, var2);
case 41:
            return var1;
        }
    };
    var _closure1_slot22 = var7;
    var6 = function handleCopyMessageLink(arg1, arg2) {
        var2 = arg1;
        var7 = arg2;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 16;
        var3 = var6[var1];
        var1 = undefined;
        var9 = var5.bind(var1)(var3);
        var8 = var9.track;
        var3 = _closure1_slot9;
        var5 = var3.MESSAGE_LINK_COPIED;
        var3 = {};
        var3['message_id'] = var7;
        var10 = var2.id;
        var3['channel'] = var10;
        var3 = var8.bind(var9)(var5, var3);
        var3 = _closure1_slot25;
        var5 = _closure1_slot0;
        var4 = 34;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.getChannelPermalink;
        var4 = var2.guild_id;
        var2 = var2.id;
        var2 = var5.bind(var6)(var4, var2, var7);
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot23 = var6;
    var1 = function getChannelAnalyticsMetadata(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot16;
            var2 = undefined;
            var4 = var1.bind(var2)(var3);
            var1 = {};
            var5 = undefined;
            if(var4) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var5 = var3;
case 43:
            var1['channel_id'] = var5;
            var2 = undefined;
            if(!var4) { _fun0005_ip = 45; continue _fun0005 }
case 15:
            var2 = var3;
case 45:
            var1['channel_static_route'] = var2;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function handleCopyLink(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var7 = arg1;
            var1 = null;
            var1 = var1 != var7;
            if(!var1) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 32;
            var2 = var5[var2];
            var3 = undefined;
            var6 = var4.bind(var3)(var2);
            var2 = var6.copy;
            var2 = var2.bind(var6)(var7);
            var2 = 33;
            var2 = var5[var2];
            var3 = var4.bind(var3)(var2);
            var2 = var3.presentLinkCopied;
            var2 = var2.bind(var3)();
            var1 = true;
case 46:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var5 = function handleReply(arg1, arg2, arg3, arg4) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var10 = arg1;
            var2 = arg2;
            var4 = arg3;
            var9 = arg4;
            var6 = arguments[4];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0007_ip = 12; continue _fun0007 }
case 13:
            var6 = false;
case 12:
            var8 = _closure1_slot5;
            var7 = var8.getEditingMessage;
            var5 = var2.id;
            var14 = var7.bind(var8)(var5);
            var5 = null;
            if(!(var5 != var14)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var8 = _closure1_slot7;
            var7 = var8.getCurrentUser;
            var15 = var7.bind(var8)();
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 16;
            var7 = var11[var7];
            var12 = var8.bind(var1)(var7);
            var11 = var12.track;
            var7 = _closure1_slot9;
            var8 = var7.CHAT_CONTEXT_BAR_ACTION_CANCELED;
            var7 = {};
            var13 = var10.id;
            var7['message_id'] = var13;
            var13 = var2.id;
            var7['channel_id'] = var13;
            var13 = var2.guild_id;
            var7['guild_id'] = var13;
            var16 = 'edit';
            var7['context_action'] = var16;
            var13 = _closure1_slot19;
            var13 = var13.bind(var1)(var16, var9);
            var7['reason'] = var13;
            var13 = var5 != var15;
            if(!var13) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var15 = var15.id;
            var14 = var14.author;
            var14 = var14.id;
            var13 = var15 === var14;
case 50:
            var7['is_own_message'] = var13;
            var7 = var11.bind(var12)(var8, var7);
case 48:
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 17;
            var7 = var11[var7];
            var11 = var8.bind(var1)(var7);
            var8 = var11.endEditMessage;
            var7 = var2.id;
            var7 = var8.bind(var11)(var7);
            var11 = _closure1_slot3;
            var8 = var11.getPendingReply;
            var7 = var2.id;
            var11 = var8.bind(var11)(var7);
            if(!var6) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var6 = 'message_swipe';
            if(!(var6 === var9)) { _fun0007_ip = 52; continue _fun0007 }
case 54:
            if(!(var5 != var11)) { _fun0007_ip = 52; continue _fun0007 }
case 55:
            var6 = var11.message;
            var7 = var6.id;
            var6 = var10.id;
            if(!(var7 !== var6)) { _fun0007_ip = 56; continue _fun0007 }
case 52:
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 16;
            var6 = var15[var6];
            var12 = var7.bind(var1)(var6);
            var8 = var12.track;
            var6 = _closure1_slot9;
            var7 = var6.REPLY_MESSAGE_STARTED;
            var6 = {};
            var6['source'] = var9;
            var14 = _closure1_slot0;
            var13 = 40;
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
            var7 = _closure1_slot7;
            var6 = var7.getCurrentUser;
            var6 = var6.bind(var7)();
            var7 = var2.isDM;
            var7 = var7.bind(var2)();
            var12 = !var7;
            if(!var12) { _fun0007_ip = 21; continue _fun0007 }
case 57:
            var12 = var5 != var6;
case 21:
            if(!var12) { _fun0007_ip = 58; continue _fun0007 }
case 59:
            var7 = var10.author;
            var7 = var7.id;
            var6 = var6.id;
            var12 = var7 !== var6;
case 58:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 13;
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
            if(var6) { _fun0007_ip = 60; continue _fun0007 }
case 61:
            var8 = var4.current;
            var6 = var5 == var8;
            var7 = var8;
case 60:
            if(var6) { _fun0007_ip = 62; continue _fun0007 }
case 63:
            var6 = var7.openSystemKeyboard;
            var6 = var6.bind(var7)();
            _fun0007_ip = 62; continue _fun0007;
case 56:
            var7 = _closure1_slot7;
            var6 = var7.getCurrentUser;
            var12 = var6.bind(var7)();
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var9 = var7.bind(var1)(var6);
            var8 = var9.track;
            var6 = _closure1_slot9;
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
            if(!var10) { _fun0007_ip = 64; continue _fun0007 }
case 65:
            var12 = var12.id;
            var11 = var11.message;
            var11 = var11.author;
            var11 = var11.id;
            var10 = var12 === var11;
case 64:
            var6['is_own_message'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 13;
            var3 = var7[var3];
            var6 = var6.bind(var1)(var3);
            var3 = var6.deletePendingReply;
            var2 = var2.id;
            var2 = var3.bind(var6)(var2);
            var2 = var5 == var4;
            var3 = undefined;
            if(var2) { _fun0007_ip = 66; continue _fun0007 }
case 67:
            var6 = var4.current;
            var2 = var5 == var6;
            var3 = undefined;
            if(var2) { _fun0007_ip = 66; continue _fun0007 }
case 68:
            var2 = var6.getText;
            var3 = var2.bind(var6)();
case 66:
            var2 = '';
            if(!(var2 === var3)) { _fun0007_ip = 62; continue _fun0007 }
case 69:
            var2 = var5 == var4;
            var3 = undefined;
            if(var2) { _fun0007_ip = 70; continue _fun0007 }
case 71:
            var4 = var4.current;
            var2 = var5 == var4;
            var3 = var4;
case 70:
            if(var2) { _fun0007_ip = 62; continue _fun0007 }
case 72:
            var2 = var3.dismissKeyboard;
            var2 = var2.bind(var3)();
case 62:
            return var1;
        }
    };
    var _closure1_slot26 = var5;
    var4 = function handleCopyId(arg1) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 32;
        var2 = var4[var1];
        var1 = undefined;
        var6 = var3.bind(var1)(var2);
        var5 = var6.copy;
        var2 = arg1;
        var2 = var5.bind(var6)(var2);
        var2 = 33;
        var2 = var4[var2];
        var3 = var3.bind(var1)(var2);
        var2 = var3.presentMessageIdCopied;
        var2 = var2.bind(var3)();
        return var1;
    };
    var _closure1_slot27 = var4;
    var1 = function handleSuppressEmbeds(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg2;
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = arg3;
            var _closure2_slot1 = var1;
            var6 = null;
            var2 = var6 == var4;
            var1 = undefined;
            var3 = undefined;
            if(var2) { _fun0008_ip = 73; continue _fun0008 }
case 74:
            var4 = var4.current;
            var2 = var6 == var4;
            var3 = var4;
case 73:
            if(var2) { _fun0008_ip = 75; continue _fun0008 }
case 76:
            var2 = var3.dismissKeyboard;
            var2 = var2.bind(var3)();
case 75:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 20;
            var2 = var10[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.show;
            var2 = {};
            var9 = _closure1_slot0;
            var6 = 21;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.VL1KOj;
            var7 = var8.bind(var11)(var7);
            var2['title'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.vXZ+Fh;
            var7 = var8.bind(var11)(var7);
            var2['body'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.ETE/oK;
            var7 = var8.bind(var11)(var7);
            var2['cancelText'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.YEHppK;
            var6 = var7.bind(var8)(var6);
            var2['confirmText'] = var6;
            var5 = function onConfirm() {
                var5 = _closure2_slot0;
                var4 = _closure2_slot1;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.suppressEmbeds;
                var2 = var2.bind(var3)(var5, var4);
                return var1;
            };
            var2['onConfirm'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function handleRemoveAttachment(arg1, arg2, arg3, arg4) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = arg2;
            var2 = arg4;
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = arg3;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var2;
            var6 = null;
            var7 = var6 == var2;
            var1 = undefined;
            var3 = undefined;
            if(var7) { _fun0009_ip = 77; continue _fun0009 }
case 45:
            var3 = var2.sourceType;
case 77:
            var2 = 'attachment';
            if(!(var2 === var3)) { _fun0009_ip = 78; continue _fun0009 }
case 79:
            var2 = var6 == var4;
            var3 = undefined;
            if(var2) { _fun0009_ip = 80; continue _fun0009 }
case 81:
            var4 = var4.current;
            var2 = var6 == var4;
            var3 = var4;
case 80:
            if(var2) { _fun0009_ip = 82; continue _fun0009 }
case 40:
            var2 = var3.dismissKeyboard;
            var2 = var2.bind(var3)();
case 82:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 20;
            var2 = var10[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.show;
            var2 = {};
            var9 = _closure1_slot0;
            var6 = 21;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.CbTIEh;
            var7 = var8.bind(var11)(var7);
            var2['title'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.faHmOz;
            var7 = var8.bind(var11)(var7);
            var2['body'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.ETE/oK;
            var7 = var8.bind(var11)(var7);
            var2['cancelText'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.kFwAsb;
            var6 = var7.bind(var8)(var6);
            var2['confirmText'] = var6;
            var5 = function onConfirm() {
                var5 = _closure2_slot0;
                var4 = _closure2_slot1;
                var1 = _closure2_slot2;
                var1 = var1.source;
                var3 = var1.id;
                var2 = function handleConfirmRemoveAttachment(arg1, arg2, arg3) {
                    var2 = arg2;
                    var3 = arg3;
                    var _closure4_slot0 = var3;
                    var4 = var2.attachments;
                    var3 = var4.filter;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var6 = var3.bind(var4)(var1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 17;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.patchMessageAttachments;
                    var3 = var2.id;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var2, var3, var6);
                    return var1;
                };
                var1 = undefined;
                var2 = var2.bind(var1)(var5, var4, var3);
                return var1;
            };
            var2['onConfirm'] = var5;
            var2 = var3.bind(var4)(var2);
case 78:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = global;
    var15 = var1.Object;
    var14 = var15.defineProperty;
    var10 = {};
    var1 = true;
    var10['value'] = var1;
    var1 = '__esModule';
    var1 = var14.bind(var15)(var3, var1, var10);
    var1 = 0;
    var14 = var12[var1];
    var10 = metroImportAll;
    var1 = undefined;
    var10 = var10.bind(var1)(var14);
    var10 = 1;
    var10 = var12[var10];
    var10 = var13.bind(var1)(var10);
    var _closure1_slot3 = var10;
    var10 = 2;
    var10 = var12[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.isMessageComponentsV2;
    var _closure1_slot4 = var10;
    var10 = 3;
    var10 = var12[var10];
    var10 = var13.bind(var1)(var10);
    var _closure1_slot5 = var10;
    var10 = 4;
    var10 = var12[var10];
    var10 = var13.bind(var1)(var10);
    var _closure1_slot6 = var10;
    var10 = 5;
    var10 = var12[var10];
    var10 = var13.bind(var1)(var10);
    var _closure1_slot7 = var10;
    var10 = 6;
    var10 = var12[var10];
    var10 = var13.bind(var1)(var10);
    var _closure1_slot8 = var10;
    var10 = 7;
    var10 = var12[var10];
    var10 = var11.bind(var1)(var10);
    var13 = var10.AnalyticEvents;
    var _closure1_slot9 = var13;
    var13 = var10.AnalyticsObjects;
    var _closure1_slot10 = var13;
    var13 = var10.AnalyticsPages;
    var _closure1_slot11 = var13;
    var13 = var10.AnalyticsSections;
    var _closure1_slot12 = var13;
    var13 = var10.MediaType;
    var _closure1_slot13 = var13;
    var13 = var10.MessageStates;
    var _closure1_slot14 = var13;
    var10 = var10.MessageTypes;
    var _closure1_slot15 = var10;
    var10 = 8;
    var10 = var12[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.isStaticChannelRoute;
    var _closure1_slot16 = var10;
    var10 = 9;
    var10 = var12[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
    var _closure1_slot17 = var10;
    var10 = 10;
    var10 = var12[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.jsx;
    var _closure1_slot18 = var10;
    var10 = 58;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/messages/native/long_press/LongPressMessageActionSheetUtils.tsx';
    var10 = var11.bind(var12)(var10);
    var3['getContextBarCancelReason'] = var9;
    var3['handleEdit'] = var8;
    var3['handleCreateThread'] = var7;
    var3['handleCopyMessageLink'] = var6;
    var3['handleReply'] = var5;
    var3['handleCopyId'] = var4;
    var2 = function longPressMessageOptionHandler(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var3 = var1.label;
            var7 = var1.message;
            var12 = var1.channel;
            var9 = var1.chatInputRef;
            var5 = var1.selectedMedia;
            var14 = var1.actionSheetSource;
            var10 = var1.analyticsLocations;
            var2 = var1.onActionExecuted;
            var13 = var1.onBack;
            var4 = var1.disabled;
            var1 = undefined;
            if(!(var4 === var1)) { _fun0010_ip = 83; continue _fun0010 }
case 84:
            var4 = false;
case 83:
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var1;
            var17 = var12.guild_id;
            var11 = var12.id;
            _closure2_slot0 = var11;
            var6 = var7.id;
            _closure2_slot1 = var6;
            if(var4) { _fun0010_ip = 85; continue _fun0010 }
case 86:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var20 = 21;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.PHjkRE;
            var15 = var16.bind(var18)(var15);
            if(!(var3 !== var15)) { _fun0010_ip = 87; continue _fun0010 }
case 88:
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var15 = 42;
            var15 = var18[var15];
            var16 = var16.bind(var1)(var15);
            var15 = var16.hideActionSheet;
            var15 = var15.bind(var16)();
case 87:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.+78Pfn;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 89; continue _fun0010 }
case 90:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.n5EBAA;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 89; continue _fun0010 }
case 91:
            var16 = _closure1_slot0;
            var21 = _closure1_slot2;
            var15 = var21[var20];
            var15 = var16.bind(var1)(var15);
            var18 = var15.intl;
            var16 = var18.string;
            var19 = _closure1_slot1;
            var15 = 47;
            var15 = var21[var15];
            var15 = var19.bind(var1)(var15);
            var15 = var15.1D+vq6;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 92; continue _fun0010 }
case 93:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.k5WiPT;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 94; continue _fun0010 }
case 21:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.zBoHlZ;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 95; continue _fun0010 }
case 96:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.P8tvKC;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 97; continue _fun0010 }
case 98:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.cduTBA;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 99; continue _fun0010 }
case 100:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.fsBWmZ;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 101; continue _fun0010 }
case 102:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.Gp2rPj;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 103; continue _fun0010 }
case 104:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.MFGE5+;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 105; continue _fun0010 }
case 106:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.CvQ18/;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 107; continue _fun0010 }
case 108:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.Bse+Fx;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 109; continue _fun0010 }
case 110:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.xwMqDw;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 111; continue _fun0010 }
case 112:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.5911LS;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 113; continue _fun0010 }
case 114:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.JrGD7O;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 115; continue _fun0010 }
case 116:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.lfIHs7;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 117; continue _fun0010 }
case 118:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.gHp0Cw;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 119; continue _fun0010 }
case 120:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.ZbtGBg;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 121; continue _fun0010 }
case 122:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.g33r/P;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 123; continue _fun0010 }
case 124:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.Xrt5Pj;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 125; continue _fun0010 }
case 126:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.RpE9k5;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 127; continue _fun0010 }
case 128:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.S/xNKS;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 129; continue _fun0010 }
case 130:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.JVuuz8;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 131; continue _fun0010 }
case 132:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.vbAEaG;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 133; continue _fun0010 }
case 134:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.92CPQ0;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 135; continue _fun0010 }
case 136:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.5IEsGx;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 137; continue _fun0010 }
case 138:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.I3ltXF;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 139; continue _fun0010 }
case 140:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.rBIGBA;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 141; continue _fun0010 }
case 142:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.39d0Wl;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 143; continue _fun0010 }
case 144:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.PHjkRE;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 145; continue _fun0010 }
case 146:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.tpxJtr;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 147; continue _fun0010 }
case 148:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.SvXS1d;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 149; continue _fun0010 }
case 150:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.mJ3P0N;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 151; continue _fun0010 }
case 152:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.vrbqs7;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 153; continue _fun0010 }
case 154:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.ZH7P2t;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 155; continue _fun0010 }
case 156:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.grdwws;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 157; continue _fun0010 }
case 158:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.Rjezb2;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 159; continue _fun0010 }
case 160:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.4sxKOT;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 161; continue _fun0010 }
case 162:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.wUIMqa;
            var15 = var16.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0010_ip = 161; continue _fun0010 }
case 163:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var20];
            var16 = var19.bind(var1)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.kFwAsb;
            var15 = var16.bind(var18)(var15);
            if(!(var15 === var3)) { _fun0010_ip = 164; continue _fun0010 }
case 165:
            var15 = _closure1_slot29;
            var28 = undefined;
            var27 = var11;
            var26 = var9;
            var25 = var7;
            var24 = var5;
            var15 = var28[var15](var27, var26, var25, var24, var23);
            _fun0010_ip = 164; continue _fun0010;
case 161:
            var15 = _closure1_slot28;
            var15 = var15.bind(var1)(var11, var9, var6);
            _fun0010_ip = 164; continue _fun0010;
case 159:
            var18 = _closure1_slot1;
            var15 = _closure1_slot2;
            var16 = 42;
            var16 = var15[var16];
            var20 = var18.bind(var1)(var16);
            var19 = var20.openLazy;
            var18 = _closure1_slot0;
            var16 = 44;
            var16 = var15[var16];
            var18 = var18.bind(var1)(var16);
            var16 = 57;
            var16 = var15[var16];
            var15 = var15.paths;
            var18 = var18.bind(var1)(var16, var15);
            var16 = {};
            var16['message'] = var7;
            var16['guildId'] = var17;
            var16['onBack'] = var13;
            var15 = 'AppInteractionInfoActionSheet';
            var15 = var19.bind(var20)(var18, var15, var16);
            _fun0010_ip = 164; continue _fun0010;
case 157:
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var15 = 56;
            var15 = var18[var15];
            var18 = var16.bind(var1)(var15);
            var16 = var18.endPollEarly;
            var15 = {};
            var19 = var7.channel_id;
            var15['channelId'] = var19;
            var19 = var7.id;
            var15['messageId'] = var19;
            var15 = var16.bind(var18)(var15);
            _fun0010_ip = 164; continue _fun0010;
case 155:
            var15 = null;
            if(!(var15 != var5)) { _fun0010_ip = 164; continue _fun0010 }
case 166:
            var16 = var5.sourceType;
            var15 = 'embed';
            var21 = undefined;
            if(!(var15 === var16)) { _fun0010_ip = 167; continue _fun0010 }
case 168:
            var15 = var5.source;
            var21 = var15.id;
case 167:
            var16 = var5.sourceType;
            var15 = 'attachment';
            var22 = undefined;
            if(!(var15 === var16)) { _fun0010_ip = 169; continue _fun0010 }
case 170:
            var15 = var5.source;
            var22 = var15.id;
case 169:
            var15 = var1 !== var21;
            if(var15) { _fun0010_ip = 171; continue _fun0010 }
case 172:
            var15 = var1 !== var22;
case 171:
            if(var15) { _fun0010_ip = 173; continue _fun0010 }
case 174:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var16 = 41;
            var16 = var19[var16];
            var18 = var18.bind(var1)(var16);
            var16 = var18.messageHasObscurableMedia;
            var15 = var16.bind(var18)(var7);
case 173:
            if(!var15) { _fun0010_ip = 164; continue _fun0010 }
case 175:
            var18 = _closure1_slot1;
            var15 = _closure1_slot2;
            var16 = 42;
            var16 = var15[var16];
            var20 = var18.bind(var1)(var16);
            var19 = var20.openLazy;
            var18 = _closure1_slot0;
            var16 = 44;
            var16 = var15[var16];
            var18 = var18.bind(var1)(var16);
            var16 = 43;
            var16 = var15[var16];
            var15 = var15.paths;
            var18 = var18.bind(var1)(var16, var15);
            var16 = _closure1_slot17;
            var15 = {};
            var23 = var7.channel_id;
            var15['channelId'] = var23;
            var23 = var7.id;
            var15['messageId'] = var23;
            var15['attachmentId'] = var22;
            var15['embedId'] = var21;
            var15 = var19.bind(var20)(var18, var16, var15);
            _fun0010_ip = 164; continue _fun0010;
case 153:
            var18 = _closure1_slot1;
            var15 = _closure1_slot2;
            var16 = 42;
            var16 = var15[var16];
            var20 = var18.bind(var1)(var16);
            var19 = var20.openLazy;
            var18 = _closure1_slot0;
            var16 = 44;
            var16 = var15[var16];
            var18 = var18.bind(var1)(var16);
            var16 = 55;
            var16 = var15[var16];
            var15 = var15.paths;
            var18 = var18.bind(var1)(var16, var15);
            var16 = {};
            var15 = function createReminder(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 54;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.addOrUpdateSavedMessage;
                var1 = {};
                var5 = _closure2_slot0;
                var1['channelId'] = var5;
                var4 = _closure2_slot1;
                var1['messageId'] = var4;
                var4 = arg1;
                var1['dueAt'] = var4;
                var4 = true;
                var1['displayToast'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16['createReminder'] = var15;
            var15 = function removeReminder() {
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 54;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = var3.addOrUpdateSavedMessage;
                var1 = {};
                var6 = _closure2_slot0;
                var1['channelId'] = var6;
                var5 = _closure2_slot1;
                var1['messageId'] = var5;
                var1['dueAt'] = var4;
                var4 = true;
                var1['displayToast'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16['removeReminder'] = var15;
            var15 = var7.channel_id;
            var16['channelId'] = var15;
            var15 = var7.id;
            var16['messageId'] = var15;
            var16['onBack'] = var13;
            var15 = 'MessageReminderDurationActionSheet';
            var15 = var19.bind(var20)(var18, var15, var16);
            _fun0010_ip = 164; continue _fun0010;
case 151:
            var18 = _closure1_slot1;
            var15 = _closure1_slot2;
            var16 = 42;
            var16 = var15[var16];
            var20 = var18.bind(var1)(var16);
            var19 = var20.openLazy;
            var18 = _closure1_slot0;
            var16 = 44;
            var16 = var15[var16];
            var18 = var18.bind(var1)(var16);
            var16 = 55;
            var16 = var15[var16];
            var15 = var15.paths;
            var18 = var18.bind(var1)(var16, var15);
            var16 = {};
            var15 = function createReminder(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 54;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.addOrUpdateSavedMessage;
                var1 = {};
                var5 = _closure2_slot0;
                var1['channelId'] = var5;
                var4 = _closure2_slot1;
                var1['messageId'] = var4;
                var4 = arg1;
                var1['dueAt'] = var4;
                var4 = true;
                var1['displayToast'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16['createReminder'] = var15;
            var15 = var7.channel_id;
            var16['channelId'] = var15;
            var15 = var7.id;
            var16['messageId'] = var15;
            var16['onBack'] = var13;
            var15 = 'MessageReminderDurationActionSheet';
            var15 = var19.bind(var20)(var18, var15, var16);
            _fun0010_ip = 164; continue _fun0010;
case 149:
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var15 = 54;
            var15 = var18[var15];
            var18 = var16.bind(var1)(var15);
            var16 = var18.removeSavedMessage;
            var15 = {};
            var15['channelId'] = var11;
            var15['messageId'] = var6;
            var19 = true;
            var15['displayToast'] = var19;
            var15 = var16.bind(var18)(var15);
            _fun0010_ip = 164; continue _fun0010;
case 147:
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var15 = 54;
            var15 = var18[var15];
            var18 = var16.bind(var1)(var15);
            var16 = var18.addOrUpdateSavedMessage;
            var15 = {};
            var15['channelId'] = var11;
            var15['messageId'] = var6;
            var19 = true;
            var15['displayToast'] = var19;
            var15 = var16.bind(var18)(var15);
            _fun0010_ip = 164; continue _fun0010;
case 145:
            var16 = _closure1_slot1;
            var22 = _closure1_slot2;
            var15 = 42;
            var15 = var22[var15];
            var19 = var16.bind(var1)(var15);
            var18 = var19.openLazy;
            var21 = _closure1_slot0;
            var15 = 44;
            var15 = var22[var15];
            var20 = var21.bind(var1)(var15);
            var15 = 52;
            var16 = var22[var15];
            var15 = var22.paths;
            var16 = var20.bind(var1)(var16, var15);
            var15 = {};
            var15['channel'] = var12;
            var20 = 53;
            var20 = var22[var20];
            var20 = var21.bind(var1)(var20);
            var20 = var20.ApplicationCommandType;
            var20 = var20.MESSAGE;
            var15['commandType'] = var20;
            var20 = var7.id;
            var15['commandTargetId'] = var20;
            var15['onBack'] = var13;
            var13 = 'CommandContextMenuActionSheet';
            var13 = var18.bind(var19)(var16, var13, var15);
            _fun0010_ip = 164; continue _fun0010;
case 143:
            var15 = _closure1_slot0;
            var20 = _closure1_slot2;
            var13 = 30;
            var13 = var20[var13];
            var18 = var15.bind(var1)(var13);
            var16 = var18.transitionToGuild;
            var15 = var12.guild_id;
            var19 = _closure1_slot1;
            var13 = 12;
            var13 = var20[var13];
            var20 = var19.bind(var1)(var13);
            var19 = var20.castMessageIdAsChannelId;
            var13 = var7.id;
            var13 = var19.bind(var20)(var13);
            var13 = var16.bind(var18)(var15, var13);
            _fun0010_ip = 164; continue _fun0010;
case 141:
            var13 = _closure1_slot22;
            var13 = var13.bind(var1)(var12, var7);
            _fun0010_ip = 164; continue _fun0010;
case 139:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = 51;
            var13 = var16[var13];
            var16 = var15.bind(var1)(var13);
            var15 = var16.openForwardModal;
            var13 = {};
            var13['message'] = var7;
            var18 = 'long-press-sheet';
            var13['source'] = var18;
            var13 = var15.bind(var16)(var13);
            _fun0010_ip = 164; continue _fun0010;
case 137:
            var15 = _closure1_slot26;
            var24 = 'action_sheet';
            var28 = undefined;
            var27 = var7;
            var26 = var12;
            var25 = var9;
            var13 = var28[var15](var27, var26, var25, var24, var23);
            _fun0010_ip = 164; continue _fun0010;
case 135:
            var19 = null;
            var13 = var19 == var5;
            var15 = undefined;
            if(var13) { _fun0010_ip = 176; continue _fun0010 }
case 177:
            var15 = var5.mediaUrl;
case 176:
            var13 = _closure1_slot25;
            var13 = var13.bind(var1)(var15);
            var22 = var15;
            if(!var13) { _fun0010_ip = 164; continue _fun0010 }
case 178:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 16;
            var13 = var16[var13];
            var18 = var15.bind(var1)(var13);
            var16 = var18.track;
            var13 = _closure1_slot9;
            var15 = var13.CONTEXT_MENU_MEDIA_LINK_COPIED;
            var13 = {};
            var20 = var19 != var22;
            var19 = undefined;
            if(!var20) { _fun0010_ip = 179; continue _fun0010 }
case 180:
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 39;
            var20 = var23[var20];
            var21 = var21.bind(var1)(var20);
            var20 = var21.getHostname;
            var19 = var20.bind(var21)(var22);
case 179:
            var13['hostname'] = var19;
            var19 = _closure1_slot24;
            var26 = var19.bind(var1)(var11);
            var27 = var13;
            var19 = copyDataProperties(var27, var26);
            var13 = var16.bind(var18)(var15, var13);
            _fun0010_ip = 164; continue _fun0010;
case 133:
            var13 = null;
            var15 = var13 == var5;
            var18 = undefined;
            if(var15) { _fun0010_ip = 181; continue _fun0010 }
case 182:
            var18 = var5.mediaUrl;
case 181:
            if(!(var13 != var18)) { _fun0010_ip = 164; continue _fun0010 }
case 183:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = 38;
            var13 = var16[var13];
            var16 = var15.bind(var1)(var13);
            var15 = var16.handleClick;
            var13 = {};
            var13['href'] = var18;
            var13 = var15.bind(var16)(var13);
            _fun0010_ip = 164; continue _fun0010;
case 131:
            var13 = function handleSaveVideo(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = arg1;
                    var5 = null;
                    var6 = var5 == var3;
                    var1 = undefined;
                    var4 = undefined;
                    if(var6) { _fun0011_ip = 44; continue _fun0011 }
case 184:
                    var4 = var3.mediaUrl;
case 44:
                    if(!(var5 != var4)) { _fun0011_ip = 185; continue _fun0011 }
case 186:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 37;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.downloadMediaAssetWithContentType;
                    var5 = var3.mediaUrl;
                    var4 = _closure1_slot13;
                    var4 = var4.VIDEO;
                    var3 = var3.contentType;
                    var5 = var6.bind(var7)(var5, var4, var3);
                    var4 = var5.then;
                    var3 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 33;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.presentVideoSaved;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 20;
                        var2 = var9[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var8 = _closure1_slot0;
                        var5 = 21;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var10 = var6.intl;
                        var7 = var10.string;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var6 = var6.t;
                        var6 = var6.cV3alJ;
                        var6 = var7.bind(var10)(var6);
                        var2['title'] = var6;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var1)(var5);
                        var5 = var5.t;
                        var5 = var5.r4Zjzs;
                        var5 = var6.bind(var7)(var5);
                        var2['body'] = var5;
                        var5 = true;
                        var2['isDismissable'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var3, var2);
case 185:
                    return var1;
                }
            };
            var13 = var13.bind(var1)(var5);
            _fun0010_ip = 164; continue _fun0010;
case 129:
            var13 = function handleSaveImage(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    var _closure3_slot0 = var1;
                    var5 = null;
                    var6 = var5 == var3;
                    var1 = undefined;
                    var4 = undefined;
                    if(var6) { _fun0012_ip = 187; continue _fun0012 }
case 188:
                    var4 = var3.mediaUrl;
case 187:
                    if(!(var5 != var4)) { _fun0012_ip = 189; continue _fun0012 }
case 190:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 37;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.downloadMediaAssetWithContentType;
                    var5 = var3.mediaUrl;
                    var4 = _closure1_slot13;
                    var4 = var4.IMAGE;
                    var3 = var3.contentType;
                    var5 = var6.bind(var7)(var5, var4, var3);
                    var4 = var5.then;
                    var3 = function() {
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 33;
                        var2 = var4[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.presentImageSaved;
                        var2 = var2.bind(var3)();
                        var3 = _closure1_slot1;
                        var2 = 16;
                        var2 = var4[var2];
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.track;
                        var2 = _closure1_slot9;
                        var3 = var2.CONTEXT_MENU_IMAGE_SAVED;
                        var2 = {};
                        var7 = _closure1_slot24;
                        var6 = _closure3_slot0;
                        var8 = var7.bind(var1)(var6);
                        var9 = var2;
                        var6 = copyDataProperties(var9, var8);
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 20;
                        var2 = var4[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var5 = var7.show;
                        var2 = {};
                        var11 = _closure1_slot0;
                        var8 = 21;
                        var9 = var4[var8];
                        var9 = var11.bind(var1)(var9);
                        var12 = var9.intl;
                        var10 = var12.string;
                        var9 = var4[var8];
                        var9 = var11.bind(var1)(var9);
                        var9 = var9.t;
                        var9 = var9.cV3alJ;
                        var9 = var10.bind(var12)(var9);
                        var2['title'] = var9;
                        var9 = var4[var8];
                        var9 = var11.bind(var1)(var9);
                        var10 = var9.intl;
                        var9 = var10.string;
                        var8 = var4[var8];
                        var8 = var11.bind(var1)(var8);
                        var8 = var8.t;
                        var8 = var8.r4Zjzs;
                        var8 = var9.bind(var10)(var8);
                        var2['body'] = var8;
                        var8 = true;
                        var2['isDismissable'] = var8;
                        var2 = var5.bind(var7)(var2);
                        var2 = 16;
                        var2 = var4[var2];
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.track;
                        var2 = _closure1_slot9;
                        var3 = var2.CONTEXT_MENU_IMAGE_SAVE_FAILED;
                        var2 = {};
                        var7 = _closure1_slot24;
                        var6 = _closure3_slot0;
                        var13 = var7.bind(var1)(var6);
                        var14 = var2;
                        var6 = copyDataProperties(var14, var13);
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var3, var2);
case 189:
                    return var1;
                }
            };
            var13 = var13.bind(var1)(var5, var11);
            _fun0010_ip = 164; continue _fun0010;
case 127:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 36;
            var13 = var16[var13];
            var13 = var15.bind(var1)(var13);
            var13 = var13.bind(var1)(var11, var6);
            _fun0010_ip = 164; continue _fun0010;
case 125:
            var13 = _closure1_slot23;
            var13 = var13.bind(var1)(var12, var6);
            _fun0010_ip = 164; continue _fun0010;
case 123:
            var13 = var7.author;
            var18 = var13.id;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 35;
            var13 = var16[var13];
            var16 = var15.bind(var1)(var13);
            var15 = var16.openPrivateChannel;
            var13 = {};
            var13['recipientIds'] = var18;
            var13 = var15.bind(var16)(var13);
            _fun0010_ip = 164; continue _fun0010;
case 121:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = 50;
            var13 = var16[var13];
            var15 = var15.bind(var1)(var13);
            var13 = var15.handleRemoveAllReactions;
            var13 = var13.bind(var15)(var11, var6);
            _fun0010_ip = 164; continue _fun0010;
case 119:
            var13 = 'Preview';
            if(!(var13 !== var14)) { _fun0010_ip = 191; continue _fun0010 }
case 192:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 50;
            var13 = var15[var13];
            var15 = var14.bind(var1)(var13);
            var14 = var15.handleViewReactions;
            var13 = {};
            var13['messageId'] = var6;
            var13['channelId'] = var11;
            var16 = {};
            var18 = _closure1_slot10;
            var18 = var18.MESSAGE_ACTION_SHEET;
            var16['object'] = var18;
            var13['location'] = var16;
            var13 = var14.bind(var15)(var13);
            _fun0010_ip = 164; continue _fun0010;
case 191:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 50;
            var13 = var15[var13];
            var14 = var14.bind(var1)(var13);
            var13 = var14.handleViewPreviewReactions;
            var13 = var13.bind(var14)(var6, var11);
            _fun0010_ip = 164; continue _fun0010;
case 117:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 50;
            var13 = var15[var13];
            var14 = var14.bind(var1)(var13);
            var13 = var14.handleAddNewReactions;
            var13 = var13.bind(var14)(var12, var6);
            _fun0010_ip = 164; continue _fun0010;
case 115:
            var13 = var7.getContentMessage;
            var13 = var13.bind(var7)();
            var14 = _closure1_slot4;
            var14 = var14.bind(var1)(var13);
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            if(var14) { _fun0010_ip = 193; continue _fun0010 }
case 194:
            var14 = 32;
            var14 = var16[var14];
            var19 = var15.bind(var1)(var14);
            var18 = var19.copy;
            var14 = var13.content;
            var14 = var18.bind(var19)(var14);
            _fun0010_ip = 195; continue _fun0010;
case 193:
            var14 = 31;
            var14 = var16[var14];
            var15 = var15.bind(var1)(var14);
            var14 = var15.getAllTextDisplayContent;
            var13 = var13.components;
            var15 = var14.bind(var15)(var13);
            var13 = null;
            if(!(var13 != var15)) { _fun0010_ip = 195; continue _fun0010 }
case 196:
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = 32;
            var13 = var16[var13];
            var14 = var14.bind(var1)(var13);
            var13 = var14.copy;
            var13 = var13.bind(var14)(var15);
case 195:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 33;
            var13 = var15[var13];
            var14 = var14.bind(var1)(var13);
            var13 = var14.presentMessageCopied;
            var13 = var13.bind(var14)();
            _fun0010_ip = 164; continue _fun0010;
case 113:
            var15 = _closure1_slot6;
            var14 = var15.getUploaderFileForMessageId;
            var13 = var7.id;
            var15 = var14.bind(var15)(var13);
            var14 = null;
            var16 = var14 == var15;
            var13 = undefined;
            if(var16) { _fun0010_ip = 197; continue _fun0010 }
case 198:
            var13 = var15.items;
case 197:
            var14 = var14 != var13;
            var18 = undefined;
            if(!var14) { _fun0010_ip = 199; continue _fun0010 }
case 200:
            var18 = var13;
case 199:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 27;
            var13 = var15[var13];
            var16 = var14.bind(var1)(var13);
            var20 = _closure1_slot8;
            var19 = var20.getOptions;
            var13 = var7.id;
            var24 = var19.bind(var20)(var13);
            var28 = undefined;
            var27 = var12;
            var26 = var7;
            var25 = var18;
            var13 = var28[var16](var27, var26, var25, var24, var23);
            var13 = 40;
            var13 = var15[var13];
            var16 = var14.bind(var1)(var13);
            var15 = var16.trackWithMetadata;
            var13 = _closure1_slot9;
            var14 = var13.MESSAGE_ACTION_SHEET_OPTION_PRESSED;
            var13 = {};
            var13['channel_id'] = var11;
            var13['guild_id'] = var17;
            var18 = 'retry';
            var13['action_sheet_option'] = var18;
            var18 = var7.state;
            var13['message_state'] = var18;
            var13 = var15.bind(var16)(var14, var13);
            _fun0010_ip = 164; continue _fun0010;
case 111:
            var14 = var7.state;
            var13 = _closure1_slot14;
            var13 = var13.SENDING;
            if(!(var14 !== var13)) { _fun0010_ip = 201; continue _fun0010 }
case 202:
            var14 = var7.state;
            var13 = _closure1_slot14;
            var13 = var13.SEND_FAILED;
            if(!(var14 !== var13)) { _fun0010_ip = 203; continue _fun0010 }
case 204:
            var13 = function handleDelete(arg1, arg2, arg3) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var4 = arg2;
                    var12 = arg3;
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var12;
                    var6 = null;
                    var2 = var6 == var4;
                    var1 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0013_ip = 73; continue _fun0013 }
case 74:
                    var4 = var4.current;
                    var2 = var6 == var4;
                    var3 = var4;
case 73:
                    if(var2) { _fun0013_ip = 75; continue _fun0013 }
case 76:
                    var2 = var3.dismissKeyboard;
                    var2 = var2.bind(var3)();
case 75:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 20;
                    var2 = var10[var2];
                    var4 = var8.bind(var1)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var9 = _closure1_slot0;
                    var6 = 21;
                    var11 = var10[var6];
                    var11 = var9.bind(var1)(var11);
                    var14 = var11.intl;
                    var13 = var14.string;
                    var11 = var10[var6];
                    var11 = var9.bind(var1)(var11);
                    var11 = var11.t;
                    var11 = var11.MWMcg4;
                    var11 = var13.bind(var14)(var11);
                    var2['title'] = var11;
                    var11 = _closure1_slot18;
                    var7 = 23;
                    var7 = var10[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = {};
                    var13 = var10[var6];
                    var13 = var9.bind(var1)(var13);
                    var15 = var13.intl;
                    var14 = var15.string;
                    var13 = var10[var6];
                    var13 = var9.bind(var1)(var13);
                    var13 = var13.t;
                    var13 = var13.AMvpS0;
                    var13 = var14.bind(var15)(var13);
                    var7['title'] = var13;
                    var7['message'] = var12;
                    var7 = var11.bind(var1)(var8, var7);
                    var2['children'] = var7;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var11 = var7.intl;
                    var8 = var11.string;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var7 = var7.t;
                    var7 = var7.gm1Ven;
                    var7 = var8.bind(var11)(var7);
                    var2['cancelText'] = var7;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.p89ACg;
                    var6 = var7.bind(var8)(var6);
                    var2['confirmText'] = var6;
                    var5 = function onConfirm() {
                        var4 = _closure1_slot21;
                        var3 = _closure3_slot0;
                        var1 = _closure3_slot1;
                        var2 = var1.id;
                        var1 = undefined;
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var2['onConfirm'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var13 = var13.bind(var1)(var11, var9, var7);
            _fun0010_ip = 205; continue _fun0010;
case 203:
            var14 = _closure1_slot21;
            var13 = true;
            var13 = var14.bind(var1)(var11, var6, var13);
            _fun0010_ip = 205; continue _fun0010;
case 201:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 26;
            var13 = var15[var13];
            var14 = var14.bind(var1)(var13);
            var13 = var14.cancelRequest;
            var13 = var13.bind(var14)(var6);
case 205:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 40;
            var13 = var15[var13];
            var16 = var14.bind(var1)(var13);
            var15 = var16.trackWithMetadata;
            var13 = _closure1_slot9;
            var14 = var13.MESSAGE_ACTION_SHEET_OPTION_PRESSED;
            var13 = {};
            var13['channel_id'] = var11;
            var13['guild_id'] = var17;
            var17 = 'delete';
            var13['action_sheet_option'] = var17;
            var17 = var7.state;
            var13['message_state'] = var17;
            var13 = var15.bind(var16)(var14, var13);
            _fun0010_ip = 164; continue _fun0010;
case 109:
            var13 = function handleUnpin(arg1, arg2, arg3) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var4 = arg2;
                    var12 = arg3;
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var12;
                    var6 = null;
                    var2 = var6 == var4;
                    var1 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0014_ip = 73; continue _fun0014 }
case 74:
                    var4 = var4.current;
                    var2 = var6 == var4;
                    var3 = var4;
case 73:
                    if(var2) { _fun0014_ip = 75; continue _fun0014 }
case 76:
                    var2 = var3.dismissKeyboard;
                    var2 = var2.bind(var3)();
case 75:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 20;
                    var2 = var10[var2];
                    var4 = var8.bind(var1)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var9 = _closure1_slot0;
                    var6 = 21;
                    var11 = var10[var6];
                    var11 = var9.bind(var1)(var11);
                    var14 = var11.intl;
                    var13 = var14.string;
                    var11 = var10[var6];
                    var11 = var9.bind(var1)(var11);
                    var11 = var11.t;
                    var11 = var11.Bse+Fx;
                    var11 = var13.bind(var14)(var11);
                    var2['title'] = var11;
                    var11 = _closure1_slot18;
                    var7 = 23;
                    var7 = var10[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = {};
                    var13 = var10[var6];
                    var13 = var9.bind(var1)(var13);
                    var15 = var13.intl;
                    var14 = var15.string;
                    var13 = var10[var6];
                    var13 = var9.bind(var1)(var13);
                    var13 = var13.t;
                    var13 = var13.NjEPp6;
                    var13 = var14.bind(var15)(var13);
                    var7['title'] = var13;
                    var7['message'] = var12;
                    var7 = var11.bind(var1)(var8, var7);
                    var2['children'] = var7;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var11 = var7.intl;
                    var8 = var11.string;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var7 = var7.t;
                    var7 = var7.gm1Ven;
                    var7 = var8.bind(var11)(var7);
                    var2['cancelText'] = var7;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.p89ACg;
                    var6 = var7.bind(var8)(var6);
                    var2['confirmText'] = var6;
                    var5 = function onConfirm() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 24;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.unpinMessage;
                        var2 = _closure3_slot0;
                        var1 = _closure3_slot1;
                        var1 = var1.id;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var2['onConfirm'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var13 = var13.bind(var1)(var12, var9, var7);
            _fun0010_ip = 164; continue _fun0010;
case 107:
            var13 = function handlePin(arg1, arg2, arg3) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var4 = arg2;
                    var12 = arg3;
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var12;
                    var6 = null;
                    var2 = var6 == var4;
                    var1 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0015_ip = 73; continue _fun0015 }
case 74:
                    var4 = var4.current;
                    var2 = var6 == var4;
                    var3 = var4;
case 73:
                    if(var2) { _fun0015_ip = 75; continue _fun0015 }
case 76:
                    var2 = var3.dismissKeyboard;
                    var2 = var2.bind(var3)();
case 75:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 20;
                    var2 = var10[var2];
                    var4 = var8.bind(var1)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var9 = _closure1_slot0;
                    var6 = 21;
                    var11 = var10[var6];
                    var11 = var9.bind(var1)(var11);
                    var14 = var11.intl;
                    var13 = var14.string;
                    var11 = var10[var6];
                    var11 = var9.bind(var1)(var11);
                    var11 = var11.t;
                    var11 = var11.CvQ18/;
                    var11 = var13.bind(var14)(var11);
                    var2['title'] = var11;
                    var11 = _closure1_slot18;
                    var7 = 23;
                    var7 = var10[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = {};
                    var13 = var10[var6];
                    var13 = var9.bind(var1)(var13);
                    var15 = var13.intl;
                    var14 = var15.string;
                    var13 = var10[var6];
                    var13 = var9.bind(var1)(var13);
                    var13 = var13.t;
                    var13 = var13.WG5dys;
                    var13 = var14.bind(var15)(var13);
                    var7['title'] = var13;
                    var7['message'] = var12;
                    var7 = var11.bind(var1)(var8, var7);
                    var2['children'] = var7;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var11 = var7.intl;
                    var8 = var11.string;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var7 = var7.t;
                    var7 = var7.gm1Ven;
                    var7 = var8.bind(var11)(var7);
                    var2['cancelText'] = var7;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.p89ACg;
                    var6 = var7.bind(var8)(var6);
                    var2['confirmText'] = var6;
                    var5 = function onConfirm() {
                        var4 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 24;
                        var3 = var8[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.pinMessage;
                        var4 = _closure3_slot0;
                        var3 = _closure3_slot1;
                        var3 = var3.id;
                        var3 = var5.bind(var6)(var4, var3);
                        var7 = _closure1_slot0;
                        var2 = 25;
                        var2 = var8[var2];
                        var2 = var7.bind(var1)(var2);
                        var4 = var2.AccessibilityAnnouncer;
                        var3 = var4.announce;
                        var2 = 21;
                        var5 = var8[var2];
                        var5 = var7.bind(var1)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var2 = var8[var2];
                        var2 = var7.bind(var1)(var2);
                        var2 = var2.t;
                        var2 = var2.sCfDDg;
                        var2 = var5.bind(var6)(var2);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2['onConfirm'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var13 = var13.bind(var1)(var12, var9, var7);
            _fun0010_ip = 164; continue _fun0010;
case 105:
            var8 = function handlePublish(arg1, arg2, arg3) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var12 = arg1;
                    var4 = arg2;
                    var _closure3_slot0 = var12;
                    var1 = arg3;
                    var _closure3_slot1 = var1;
                    var6 = null;
                    var2 = var6 == var4;
                    var1 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0016_ip = 73; continue _fun0016 }
case 74:
                    var4 = var4.current;
                    var2 = var6 == var4;
                    var3 = var4;
case 73:
                    if(var2) { _fun0016_ip = 75; continue _fun0016 }
case 76:
                    var2 = var3.dismissKeyboard;
                    var2 = var2.bind(var3)();
case 75:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 20;
                    var2 = var10[var2];
                    var4 = var8.bind(var1)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var9 = _closure1_slot0;
                    var6 = 21;
                    var11 = var10[var6];
                    var11 = var9.bind(var1)(var11);
                    var14 = var11.intl;
                    var13 = var14.string;
                    var11 = var10[var6];
                    var11 = var9.bind(var1)(var11);
                    var11 = var11.t;
                    var11 = var11.aIz1oa;
                    var11 = var13.bind(var14)(var11);
                    var2['title'] = var11;
                    var11 = _closure1_slot18;
                    var7 = 22;
                    var7 = var10[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = {};
                    var7['channelId'] = var12;
                    var7 = var11.bind(var1)(var8, var7);
                    var2['children'] = var7;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var11 = var7.intl;
                    var8 = var11.string;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var7 = var7.t;
                    var7 = var7.ETE/oK;
                    var7 = var8.bind(var11)(var7);
                    var2['cancelText'] = var7;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.cY+Ooa;
                    var6 = var7.bind(var8)(var6);
                    var2['confirmText'] = var6;
                    var5 = function onConfirm() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.crosspostMessage;
                        var2 = _closure3_slot0;
                        var1 = _closure3_slot1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var2['onConfirm'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var8 = var8.bind(var1)(var11, var9, var6);
            _fun0010_ip = 164; continue _fun0010;
case 103:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 18;
            var8 = var14[var8];
            var13 = var13.bind(var1)(var8);
            var8 = var13.canRemix;
            var8 = var8.bind(var13)();
            if(!var8) { _fun0010_ip = 206; continue _fun0010 }
case 207:
            var8 = null;
            if(!(var8 != var5)) { _fun0010_ip = 206; continue _fun0010 }
case 208:
            var13 = var5.mediaType;
            var8 = 'image';
            if(!(var8 === var13)) { _fun0010_ip = 206; continue _fun0010 }
case 209:
            var13 = var5.sourceType;
            var8 = 'attachment';
            if(!(var8 !== var13)) { _fun0010_ip = 210; continue _fun0010 }
case 206:
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = 19;
            var8 = var16[var8];
            var14 = var13.bind(var1)(var8);
            var13 = var14.showRemixActionSheet;
            var15 = _closure1_slot1;
            var8 = 15;
            var8 = var16[var8];
            var8 = var15.bind(var1)(var8);
            var8 = var8.MESSAGE_LONG_PRESS_MENU;
            var8 = var13.bind(var14)(var7, var8);
            _fun0010_ip = 164; continue _fun0010;
case 210:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 19;
            var8 = var14[var8];
            var13 = var13.bind(var1)(var8);
            var8 = var13.remixImage;
            var5 = var5.source;
            var5 = var8.bind(var13)(var7, var5);
            _fun0010_ip = 164; continue _fun0010;
case 101:
            var8 = _closure1_slot20;
            var24 = 'action_sheet';
            var28 = undefined;
            var27 = var7;
            var26 = var12;
            var25 = var9;
            var5 = var28[var8](var27, var26, var25, var24, var23);
            _fun0010_ip = 164; continue _fun0010;
case 99:
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var5 = 49;
            var5 = var12[var5];
            var8 = var8.bind(var1)(var5);
            var5 = {};
            var12 = var7.author;
            var12 = var12.id;
            var5['userId'] = var12;
            var5['channelId'] = var11;
            var11 = var7.id;
            var5['messageId'] = var11;
            var5['sourceAnalyticsLocations'] = var10;
            var5 = var8.bind(var1)(var5);
            _fun0010_ip = 164; continue _fun0010;
case 97:
            var5 = var7.author;
            var10 = var5.id;
            var8 = _closure1_slot7;
            var5 = var8.getUser;
            var14 = var5.bind(var8)(var10);
            var10 = null;
            if(!(var10 != var14)) { _fun0010_ip = 164; continue _fun0010 }
case 211:
            var5 = var10 == var9;
            var12 = undefined;
            if(var5) { _fun0010_ip = 212; continue _fun0010 }
case 213:
            var8 = var9.current;
            var5 = var10 == var8;
            var12 = var8;
case 212:
            if(var5) { _fun0010_ip = 214; continue _fun0010 }
case 215:
            var11 = var12.insertText;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 11;
            var5 = var13[var5];
            var13 = var8.bind(var1)(var5);
            var8 = var13.getUserTag;
            var5 = {};
            var15 = 'never';
            var5['decoration'] = var15;
            var13 = var8.bind(var13)(var14, var5);
            var5 = global;
            var5 = var5.HermesInternal;
            var8 = var5.concat;
            var5 = '@';
            var8 = var8.bind(var5)(var13);
            var5 = true;
            var5 = var11.bind(var12)(var8, var10, var5);
case 214:
            var5 = var10 == var9;
            var8 = undefined;
            if(var5) { _fun0010_ip = 216; continue _fun0010 }
case 217:
            var11 = var9.current;
            var5 = var10 == var11;
            var8 = var11;
case 216:
            if(var5) { _fun0010_ip = 218; continue _fun0010 }
case 219:
            var5 = var8.focus;
            var5 = var5.bind(var8)();
case 218:
            var5 = var10 == var9;
            var8 = undefined;
            if(var5) { _fun0010_ip = 220; continue _fun0010 }
case 221:
            var9 = var9.current;
            var5 = var10 == var9;
            var8 = var9;
case 220:
            if(var5) { _fun0010_ip = 164; continue _fun0010 }
case 222:
            var5 = var8.openSystemKeyboard;
            var5 = var5.bind(var8)();
            _fun0010_ip = 164; continue _fun0010;
case 95:
            var5 = _closure1_slot27;
            var5 = var5.bind(var1)(var6);
            _fun0010_ip = 164; continue _fun0010;
case 94:
            var6 = var7.type;
            var5 = _closure1_slot15;
            var5 = var5.THREAD_STARTER_MESSAGE;
            if(!(var6 === var5)) { _fun0010_ip = 164; continue _fun0010 }
case 223:
            var6 = var7.messageReference;
            var5 = null;
            if(!(var5 != var6)) { _fun0010_ip = 164; continue _fun0010 }
case 224:
            var6 = var7.messageReference;
            var10 = var6.message_id;
            var9 = var6.guild_id;
            var8 = var6.channel_id;
            if(!(var5 != var9)) { _fun0010_ip = 164; continue _fun0010 }
case 225:
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 30;
            var5 = var11[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.transitionToGuild;
            var5 = var5.bind(var6)(var9, var8, var10);
            _fun0010_ip = 164; continue _fun0010;
case 92:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 48;
            var5 = var8[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.canReportMessageToMods;
            var5 = var5.bind(var6)(var7);
            if(!var5) { _fun0010_ip = 164; continue _fun0010 }
case 226:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 46;
            var5 = var8[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.showReportToModMessageModal;
            var5 = var5.bind(var6)(var7);
            _fun0010_ip = 164; continue _fun0010;
case 89:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 45;
            var5 = var8[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.canReportMessage;
            var5 = var5.bind(var6)(var7);
            if(!var5) { _fun0010_ip = 164; continue _fun0010 }
case 227:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 46;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.showReportModalForMessage;
            var4 = 'mobile_message_action_sheet';
            var4 = var5.bind(var6)(var7, var4);
case 164:
            var4 = null;
            if(!(var4 != var2)) { _fun0010_ip = 85; continue _fun0010 }
case 228:
            var2 = var2.bind(var1)(var3);
case 85:
            return var1;
        }
    };
    var3['longPressMessageOptionHandler'] = var2;
    return var1;
})();