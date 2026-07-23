// app/modules/messages/native/long_press/LongPressMessageActionSheetUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var11;
    var8 = function getContextBarCancelReason(arg1, arg2) {
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
    var _closure1_slot21 = var8;
    var7 = function handleEdit(arg1, arg2, arg3, arg4) {
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
            var14 = _closure1_slot21;
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
    var _closure1_slot22 = var7;
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
    var _closure1_slot23 = var1;
    var6 = function handleCreateThread(arg1, arg2) {
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
            var4 = 26;
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
            var5 = 27;
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
            var4 = 28;
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
    var _closure1_slot24 = var6;
    var5 = function handleCopyMessageLink(arg1, arg2) {
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
        var3 = _closure1_slot27;
        var5 = _closure1_slot0;
        var4 = 32;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.getChannelPermalink;
        var4 = var2.guild_id;
        var2 = var2.id;
        var2 = var5.bind(var6)(var4, var2, var7);
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot25 = var5;
    var1 = function getChannelAnalyticsMetadata(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot18;
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
    var _closure1_slot26 = var1;
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
            var2 = 30;
            var2 = var5[var2];
            var3 = undefined;
            var6 = var4.bind(var3)(var2);
            var2 = var6.copy;
            var2 = var2.bind(var6)(var7);
            var2 = 31;
            var2 = var5[var2];
            var3 = var4.bind(var3)(var2);
            var2 = var3.presentLinkCopied;
            var2 = var2.bind(var3)();
            var1 = true;
case 46:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var4 = function handleCopyId(arg1) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 30;
        var2 = var4[var1];
        var1 = undefined;
        var6 = var3.bind(var1)(var2);
        var5 = var6.copy;
        var2 = arg1;
        var2 = var5.bind(var6)(var2);
        var2 = 31;
        var2 = var4[var2];
        var3 = var3.bind(var1)(var2);
        var2 = var3.presentMessageIdCopied;
        var2 = var2.bind(var3)();
        return var1;
    };
    var _closure1_slot28 = var4;
    var1 = function handleSuppressEmbeds(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
            if(var2) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var4 = var4.current;
            var2 = var6 == var4;
            var3 = var4;
case 48:
            if(var2) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var2 = var3.dismissKeyboard;
            var2 = var2.bind(var3)();
case 50:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 18;
            var2 = var10[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.show;
            var2 = {};
            var9 = _closure1_slot0;
            var6 = 19;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.VL1KOk;
            var7 = var8.bind(var11)(var7);
            var2['title'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.vXZ+Fo;
            var7 = var8.bind(var11)(var7);
            var2['body'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.ETE/oC;
            var7 = var8.bind(var11)(var7);
            var2['cancelText'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.YEHppG;
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
    var _closure1_slot29 = var1;
    var1 = function handleRemoveAttachment(arg1, arg2, arg3, arg4) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
            if(var7) { _fun0008_ip = 52; continue _fun0008 }
case 45:
            var3 = var2.sourceType;
case 52:
            var2 = 'attachment';
            if(!(var2 === var3)) { _fun0008_ip = 53; continue _fun0008 }
case 54:
            var2 = var6 == var4;
            var3 = undefined;
            if(var2) { _fun0008_ip = 55; continue _fun0008 }
case 56:
            var4 = var4.current;
            var2 = var6 == var4;
            var3 = var4;
case 55:
            if(var2) { _fun0008_ip = 57; continue _fun0008 }
case 40:
            var2 = var3.dismissKeyboard;
            var2 = var2.bind(var3)();
case 57:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 18;
            var2 = var10[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.show;
            var2 = {};
            var9 = _closure1_slot0;
            var6 = 19;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.CbTIEo;
            var7 = var8.bind(var11)(var7);
            var2['title'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.faHmO3;
            var7 = var8.bind(var11)(var7);
            var2['body'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.ETE/oC;
            var7 = var8.bind(var11)(var7);
            var2['cancelText'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.kFwAsa;
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
case 53:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = global;
    var14 = var1.Object;
    var13 = var14.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var9);
    var1 = 0;
    var13 = var11[var1];
    var9 = metroImportAll;
    var1 = undefined;
    var9 = var9.bind(var1)(var13);
    var9 = 1;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 2;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.isMessageComponentsV2;
    var _closure1_slot4 = var9;
    var9 = 3;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 4;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 5;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 6;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = 7;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var12 = var9.AnalyticEvents;
    var _closure1_slot9 = var12;
    var12 = var9.AnalyticsObjects;
    var _closure1_slot10 = var12;
    var12 = var9.AnalyticsPages;
    var _closure1_slot11 = var12;
    var12 = var9.AnalyticsSections;
    var _closure1_slot12 = var12;
    var12 = var9.ComponentActions;
    var _closure1_slot13 = var12;
    var12 = var9.GIF_RE_IOS;
    var _closure1_slot14 = var12;
    var12 = var9.MediaType;
    var _closure1_slot15 = var12;
    var12 = var9.MessageStates;
    var _closure1_slot16 = var12;
    var9 = var9.MessageTypes;
    var _closure1_slot17 = var9;
    var9 = 8;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.isStaticChannelRoute;
    var _closure1_slot18 = var9;
    var9 = 9;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
    var _closure1_slot19 = var9;
    var9 = 10;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.jsx;
    var _closure1_slot20 = var9;
    var9 = 61;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/messages/native/long_press/LongPressMessageActionSheetUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var3['getContextBarCancelReason'] = var8;
    var3['handleEdit'] = var7;
    var3['handleCreateThread'] = var6;
    var3['handleCopyMessageLink'] = var5;
    var3['handleCopyId'] = var4;
    var2 = function longPressMessageOptionHandler(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var3 = var1.label;
            var7 = var1.message;
            var5 = var1.channel;
            var _closure2_slot0 = var5;
            var10 = var1.chatInputRef;
            var14 = var1.selectedMedia;
            var13 = var1.actionSheetSource;
            var11 = var1.analyticsLocations;
            var2 = var1.onActionExecuted;
            var9 = var1.onBack;
            var4 = var1.disabled;
            var1 = undefined;
            if(!(var4 === var1)) { _fun0009_ip = 58; continue _fun0009 }
case 59:
            var4 = false;
case 58:
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var1;
            var16 = var5.guild_id;
            var12 = var5.id;
            _closure2_slot1 = var12;
            var8 = var7.id;
            _closure2_slot2 = var8;
            if(var4) { _fun0009_ip = 60; continue _fun0009 }
case 61:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var20 = 19;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.PHjkRE;
            var15 = var17.bind(var18)(var15);
            if(!(var3 !== var15)) { _fun0009_ip = 62; continue _fun0009 }
case 63:
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var15 = 42;
            var15 = var18[var15];
            var17 = var17.bind(var1)(var15);
            var15 = var17.hideActionSheet;
            var15 = var15.bind(var17)();
case 62:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15["+78Pfm"];
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 64; continue _fun0009 }
case 65:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.n5EBAJ;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 64; continue _fun0009 }
case 66:
            var17 = _closure1_slot0;
            var21 = _closure1_slot2;
            var15 = var21[var20];
            var15 = var17.bind(var1)(var15);
            var18 = var15.intl;
            var17 = var18.string;
            var19 = _closure1_slot1;
            var15 = 47;
            var15 = var21[var15];
            var15 = var19.bind(var1)(var15);
            var15 = var15["1D+vqy"];
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 67; continue _fun0009 }
case 68:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.k5WiPf;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 69; continue _fun0009 }
case 70:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15["+TSRGD"];
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 71; continue _fun0009 }
case 72:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.zBoHlf;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 73; continue _fun0009 }
case 74:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.P8tvKG;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 75; continue _fun0009 }
case 76:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.cduTBL;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 77; continue _fun0009 }
case 78:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.fsBWmS;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 79; continue _fun0009 }
case 80:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.MFGE51;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 81; continue _fun0009 }
case 82:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.CvQ18w;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 83; continue _fun0009 }
case 84:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.Bse+F/;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 85; continue _fun0009 }
case 86:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.lE/PG3;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 87; continue _fun0009 }
case 88:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15["2km5Gf"];
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 89; continue _fun0009 }
case 90:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.xwMqD7;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 91; continue _fun0009 }
case 92:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15["5911Lb"];
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 93; continue _fun0009 }
case 94:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.JrGD7E;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 95; continue _fun0009 }
case 96:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.lfIHs4;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 97; continue _fun0009 }
case 98:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.gHp0C4;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 99; continue _fun0009 }
case 100:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.ZbtGBm;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 101; continue _fun0009 }
case 102:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.g33r/P;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 103; continue _fun0009 }
case 104:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.Xrt5Po;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 105; continue _fun0009 }
case 106:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.RpE9k7;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 107; continue _fun0009 }
case 108:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.S/xNKV;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 109; continue _fun0009 }
case 110:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.JVuuz3;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 111; continue _fun0009 }
case 112:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.vbAEaA;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 113; continue _fun0009 }
case 114:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15["92CPQ+"];
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 115; continue _fun0009 }
case 116:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15["8xHmxo"];
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 115; continue _fun0009 }
case 117:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15["5IEsGx"];
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 118; continue _fun0009 }
case 119:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.I3ltXO;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 120; continue _fun0009 }
case 121:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.rBIGBL;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 122; continue _fun0009 }
case 123:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15["39d0Wj"];
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 124; continue _fun0009 }
case 125:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.PHjkRE;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 126; continue _fun0009 }
case 127:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.tpxJto;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 128; continue _fun0009 }
case 129:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.SvXS1Z;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 130; continue _fun0009 }
case 131:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.mJ3P0N;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 132; continue _fun0009 }
case 133:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.vrbqs1;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 134; continue _fun0009 }
case 135:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.ZH7P2h;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 136; continue _fun0009 }
case 137:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.grdwwt;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 138; continue _fun0009 }
case 139:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.Rjezbz;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 140; continue _fun0009 }
case 141:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15["4sxKOb"];
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 142; continue _fun0009 }
case 143:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.wUIMqa;
            var15 = var17.bind(var18)(var15);
            if(!(var15 !== var3)) { _fun0009_ip = 142; continue _fun0009 }
case 144:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var1)(var15);
            var15 = var15.t;
            var15 = var15.kFwAsa;
            var15 = var17.bind(var18)(var15);
            if(!(var15 === var3)) { _fun0009_ip = 145; continue _fun0009 }
case 146:
            var15 = _closure1_slot30;
            var28 = undefined;
            var27 = var12;
            var26 = var10;
            var25 = var7;
            var24 = var14;
            var15 = var28[var15](var27, var26, var25, var24, var23);
            _fun0009_ip = 145; continue _fun0009;
case 142:
            var15 = _closure1_slot29;
            var15 = var15.bind(var1)(var12, var10, var8);
            _fun0009_ip = 145; continue _fun0009;
case 140:
            var18 = _closure1_slot1;
            var15 = _closure1_slot2;
            var17 = 42;
            var17 = var15[var17];
            var20 = var18.bind(var1)(var17);
            var19 = var20.openLazy;
            var18 = _closure1_slot0;
            var17 = 44;
            var17 = var15[var17];
            var18 = var18.bind(var1)(var17);
            var17 = 60;
            var17 = var15[var17];
            var15 = var15.paths;
            var18 = var18.bind(var1)(var17, var15);
            var17 = {};
            var17['message'] = var7;
            var17['guildId'] = var16;
            var17['onBack'] = var9;
            var15 = 'AppInteractionInfoActionSheet';
            var15 = var19.bind(var20)(var18, var15, var17);
            _fun0009_ip = 145; continue _fun0009;
case 138:
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var15 = 59;
            var15 = var18[var15];
            var18 = var17.bind(var1)(var15);
            var17 = var18.endPollEarly;
            var15 = {};
            var19 = var7.channel_id;
            var15['channelId'] = var19;
            var19 = var7.id;
            var15['messageId'] = var19;
            var15 = var17.bind(var18)(var15);
            _fun0009_ip = 145; continue _fun0009;
case 136:
            var15 = null;
            if(!(var15 != var14)) { _fun0009_ip = 145; continue _fun0009 }
case 147:
            var17 = var14.sourceType;
            var15 = 'embed';
            var21 = undefined;
            if(!(var15 === var17)) { _fun0009_ip = 148; continue _fun0009 }
case 149:
            var15 = var14.source;
            var21 = var15.id;
case 148:
            var17 = var14.sourceType;
            var15 = 'attachment';
            var22 = undefined;
            if(!(var15 === var17)) { _fun0009_ip = 150; continue _fun0009 }
case 151:
            var15 = var14.source;
            var22 = var15.id;
case 150:
            var15 = var1 !== var21;
            if(var15) { _fun0009_ip = 152; continue _fun0009 }
case 153:
            var15 = var1 !== var22;
case 152:
            if(var15) { _fun0009_ip = 154; continue _fun0009 }
case 155:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var17 = 41;
            var17 = var19[var17];
            var18 = var18.bind(var1)(var17);
            var17 = var18.messageHasObscurableMedia;
            var15 = var17.bind(var18)(var7);
case 154:
            if(!var15) { _fun0009_ip = 145; continue _fun0009 }
case 156:
            var18 = _closure1_slot1;
            var15 = _closure1_slot2;
            var17 = 42;
            var17 = var15[var17];
            var20 = var18.bind(var1)(var17);
            var19 = var20.openLazy;
            var18 = _closure1_slot0;
            var17 = 44;
            var17 = var15[var17];
            var18 = var18.bind(var1)(var17);
            var17 = 43;
            var17 = var15[var17];
            var15 = var15.paths;
            var18 = var18.bind(var1)(var17, var15);
            var17 = _closure1_slot19;
            var15 = {};
            var23 = var7.channel_id;
            var15['channelId'] = var23;
            var23 = var7.id;
            var15['messageId'] = var23;
            var15['attachmentId'] = var22;
            var15['embedId'] = var21;
            var15 = var19.bind(var20)(var18, var17, var15);
            _fun0009_ip = 145; continue _fun0009;
case 134:
            var18 = _closure1_slot1;
            var15 = _closure1_slot2;
            var17 = 42;
            var17 = var15[var17];
            var20 = var18.bind(var1)(var17);
            var19 = var20.openLazy;
            var18 = _closure1_slot0;
            var17 = 44;
            var17 = var15[var17];
            var18 = var18.bind(var1)(var17);
            var17 = 58;
            var17 = var15[var17];
            var15 = var15.paths;
            var18 = var18.bind(var1)(var17, var15);
            var17 = {};
            var15 = function createReminder(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 57;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.addOrUpdateSavedMessage;
                var1 = {};
                var5 = _closure2_slot1;
                var1['channelId'] = var5;
                var4 = _closure2_slot2;
                var1['messageId'] = var4;
                var4 = arg1;
                var1['dueAt'] = var4;
                var4 = true;
                var1['displayToast'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17['createReminder'] = var15;
            var15 = function removeReminder() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 57;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.removeSavedMessage;
                var1 = {};
                var5 = _closure2_slot1;
                var1['channelId'] = var5;
                var4 = _closure2_slot2;
                var1['messageId'] = var4;
                var4 = true;
                var1['displayToast'] = var4;
                var1['isReminder'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17['removeReminder'] = var15;
            var15 = var7.channel_id;
            var17['channelId'] = var15;
            var15 = var7.id;
            var17['messageId'] = var15;
            var17['onBack'] = var9;
            var15 = 'MessageReminderDurationActionSheet';
            var15 = var19.bind(var20)(var18, var15, var17);
            _fun0009_ip = 145; continue _fun0009;
case 132:
            var18 = _closure1_slot1;
            var15 = _closure1_slot2;
            var17 = 42;
            var17 = var15[var17];
            var19 = var18.bind(var1)(var17);
            var18 = var19.openLazy;
            var20 = _closure1_slot0;
            var17 = 44;
            var17 = var15[var17];
            var20 = var20.bind(var1)(var17);
            var17 = 58;
            var17 = var15[var17];
            var15 = var15.paths;
            var17 = var20.bind(var1)(var17, var15);
            var15 = {};
            var20 = function createReminder(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 57;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.addOrUpdateSavedMessage;
                var1 = {};
                var5 = _closure2_slot1;
                var1['channelId'] = var5;
                var4 = _closure2_slot2;
                var1['messageId'] = var4;
                var4 = arg1;
                var1['dueAt'] = var4;
                var4 = true;
                var1['displayToast'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15['createReminder'] = var20;
            var20 = var7.channel_id;
            var15['channelId'] = var20;
            var20 = var7.id;
            var15['messageId'] = var20;
            var15['onBack'] = var9;
            var9 = 'MessageReminderDurationActionSheet';
            var9 = var18.bind(var19)(var17, var9, var15);
            _fun0009_ip = 145; continue _fun0009;
case 130:
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 57;
            var9 = var17[var9];
            var17 = var15.bind(var1)(var9);
            var15 = var17.removeSavedMessage;
            var9 = {};
            var9['channelId'] = var12;
            var9['messageId'] = var8;
            var18 = true;
            var9['displayToast'] = var18;
            var9 = var15.bind(var17)(var9);
            _fun0009_ip = 145; continue _fun0009;
case 128:
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 57;
            var9 = var17[var9];
            var17 = var15.bind(var1)(var9);
            var15 = var17.addOrUpdateSavedMessage;
            var9 = {};
            var9['channelId'] = var12;
            var9['messageId'] = var8;
            var18 = true;
            var9['displayToast'] = var18;
            var9 = var15.bind(var17)(var9);
            _fun0009_ip = 145; continue _fun0009;
case 126:
            var15 = _closure1_slot1;
            var20 = _closure1_slot2;
            var9 = 42;
            var9 = var20[var9];
            var15 = var15.bind(var1)(var9);
            var9 = var15.hideActionSheet;
            var9 = var9.bind(var15)();
            var19 = _closure1_slot0;
            var9 = 27;
            var9 = var20[var9];
            var17 = var19.bind(var1)(var9);
            var15 = var17.navigateToContextMenuCommands;
            var9 = {};
            var9['channel'] = var5;
            var18 = 56;
            var18 = var20[var18];
            var18 = var19.bind(var1)(var18);
            var18 = var18.ApplicationCommandType;
            var18 = var18.MESSAGE;
            var9['commandType'] = var18;
            var18 = var7.id;
            var9['commandTargetId'] = var18;
            var9 = var15.bind(var17)(var9);
            _fun0009_ip = 145; continue _fun0009;
case 124:
            var15 = _closure1_slot0;
            var20 = _closure1_slot2;
            var9 = 28;
            var9 = var20[var9];
            var18 = var15.bind(var1)(var9);
            var17 = var18.transitionToGuild;
            var15 = var5.guild_id;
            var19 = _closure1_slot1;
            var9 = 12;
            var9 = var20[var9];
            var20 = var19.bind(var1)(var9);
            var19 = var20.castMessageIdAsChannelId;
            var9 = var7.id;
            var9 = var19.bind(var20)(var9);
            var9 = var17.bind(var18)(var15, var9);
            _fun0009_ip = 145; continue _fun0009;
case 122:
            var9 = _closure1_slot24;
            var9 = var9.bind(var1)(var5, var7);
            _fun0009_ip = 145; continue _fun0009;
case 120:
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 55;
            var9 = var17[var9];
            var17 = var15.bind(var1)(var9);
            var15 = var17.openForwardModal;
            var9 = {};
            var9['message'] = var7;
            var18 = 'long-press-sheet';
            var9['source'] = var18;
            var9 = var15.bind(var17)(var9);
            _fun0009_ip = 145; continue _fun0009;
case 118:
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var9 = 53;
            var9 = var17[var9];
            var15 = var15.bind(var1)(var9);
            var9 = {};
            var9['message'] = var7;
            var9['channel'] = var5;
            var9['chatInputRef'] = var10;
            var17 = 'action_sheet';
            var9['actionSource'] = var17;
            var9 = var15.bind(var1)(var9);
            var9 = 'Preview';
            if(!(var9 === var13)) { _fun0009_ip = 145; continue _fun0009 }
case 157:
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 49;
            var9 = var17[var9];
            var18 = var15.bind(var1)(var9);
            var17 = var18.transitionToMessage;
            var15 = var5.id;
            var9 = var7.id;
            var9 = var17.bind(var18)(var15, var9);
            var9 = global;
            var17 = var9.setTimeout;
            var15 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 54;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.ComponentDispatch;
                var3 = var4.dispatch;
                var1 = _closure1_slot13;
                var2 = var1.TEXTAREA_FOCUS;
                var1 = {};
                var5 = _closure2_slot0;
                var5 = var5.id;
                var1['channelId'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var9 = 500;
            var9 = var17.bind(var1)(var15, var9);
            _fun0009_ip = 145; continue _fun0009;
case 115:
            var19 = null;
            var9 = var19 == var14;
            var15 = undefined;
            if(var9) { _fun0009_ip = 158; continue _fun0009 }
case 159:
            var15 = var14.mediaUrl;
case 158:
            var9 = _closure1_slot27;
            var9 = var9.bind(var1)(var15);
            var22 = var15;
            if(!var9) { _fun0009_ip = 145; continue _fun0009 }
case 160:
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var9 = 16;
            var9 = var17[var9];
            var18 = var15.bind(var1)(var9);
            var17 = var18.track;
            var9 = _closure1_slot9;
            var15 = var9.CONTEXT_MENU_MEDIA_LINK_COPIED;
            var9 = {};
            var20 = var19 != var22;
            var19 = undefined;
            if(!var20) { _fun0009_ip = 161; continue _fun0009 }
case 162:
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 40;
            var20 = var23[var20];
            var21 = var21.bind(var1)(var20);
            var20 = var21.getHostname;
            var19 = var20.bind(var21)(var22);
case 161:
            var9['hostname'] = var19;
            var19 = _closure1_slot26;
            var26 = var19.bind(var1)(var12);
            var27 = var9;
            var19 = copyDataProperties(var27, var26);
            var9 = var17.bind(var18)(var15, var9);
            _fun0009_ip = 145; continue _fun0009;
case 113:
            var9 = null;
            var15 = var9 == var14;
            var18 = undefined;
            if(var15) { _fun0009_ip = 163; continue _fun0009 }
case 164:
            var18 = var14.mediaUrl;
case 163:
            if(!(var9 != var18)) { _fun0009_ip = 145; continue _fun0009 }
case 165:
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 39;
            var9 = var17[var9];
            var17 = var15.bind(var1)(var9);
            var15 = var17.handleClick;
            var9 = {};
            var9['href'] = var18;
            var9 = var15.bind(var17)(var9);
            _fun0009_ip = 145; continue _fun0009;
case 111:
            var9 = function handleSaveVideo(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = arg1;
                    var5 = null;
                    var6 = var5 == var3;
                    var1 = undefined;
                    var4 = undefined;
                    if(var6) { _fun0010_ip = 44; continue _fun0010 }
case 166:
                    var4 = var3.mediaUrl;
case 44:
                    if(!(var5 != var4)) { _fun0010_ip = 167; continue _fun0010 }
case 168:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 38;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.downloadMediaAssetWithContentType;
                    var5 = var3.mediaUrl;
                    var4 = _closure1_slot15;
                    var4 = var4.VIDEO;
                    var3 = var3.contentType;
                    var5 = var6.bind(var7)(var5, var4, var3);
                    var4 = var5.then;
                    var3 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 31;
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
                        var1 = 18;
                        var2 = var9[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var8 = _closure1_slot0;
                        var5 = 19;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var10 = var6.intl;
                        var7 = var10.string;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var6 = var6.t;
                        var6 = var6.cV3alD;
                        var6 = var7.bind(var10)(var6);
                        var2['title'] = var6;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var1)(var5);
                        var5 = var5.t;
                        var5 = var5.r4Zjzv;
                        var5 = var6.bind(var7)(var5);
                        var2['body'] = var5;
                        var5 = true;
                        var2['isDismissable'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var3, var2);
case 167:
                    return var1;
                }
            };
            var9 = var9.bind(var1)(var14);
            _fun0009_ip = 145; continue _fun0009;
case 109:
            var9 = function handleSaveImage(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = arg1;
                    var _closure3_slot0 = var3;
                    var1 = arg2;
                    var _closure3_slot1 = var1;
                    var5 = null;
                    var6 = var5 == var3;
                    var1 = undefined;
                    var4 = undefined;
                    if(var6) { _fun0011_ip = 169; continue _fun0011 }
case 170:
                    var4 = var3.mediaUrl;
case 169:
                    if(!(var5 != var4)) { _fun0011_ip = 171; continue _fun0011 }
case 172:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 35;
                    var6 = var8[var6];
                    var10 = var7.bind(var1)(var6);
                    var9 = var10.urlMatchesFileExtension;
                    var7 = var3.mediaUrl;
                    var6 = _closure1_slot14;
                    var6 = var9.bind(var10)(var7, var6);
                    var _closure3_slot2 = var6;
                    var7 = _closure1_slot1;
                    var6 = 36;
                    var6 = var8[var6];
                    var8 = var7.bind(var1)(var6);
                    var7 = var8.toURLSafe;
                    var6 = var3.mediaUrl;
                    var8 = var7.bind(var8)(var6);
                    if(!(var5 != var8)) { _fun0011_ip = 173; continue _fun0011 }
case 174:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var7 = 37;
                    var5 = var5[var7];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.isAttachmentUrl;
                    var5 = var5.bind(var6)(var8);
                    if(var5) { _fun0011_ip = 175; continue _fun0011 }
case 173:
                    var5 = global;
                    var8 = var5.Promise;
                    var6 = var8.resolve;
                    var5 = var3.mediaUrl;
                    var5 = var6.bind(var8)(var5);
                    _fun0011_ip = 176; continue _fun0011;
case 175:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.maybeRefreshAttachmentUrl;
                    var3 = var3.mediaUrl;
                    var5 = var4.bind(var6)(var3);
case 176:
                    var4 = var5.then;
                    var3 = function(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 38;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.downloadMediaAssetWithContentType;
                            var3 = _closure3_slot2;
                            var2 = _closure1_slot15;
                            if(var3) { _fun0012_ip = 177; continue _fun0012 }
case 52:
                            var3 = var2.IMAGE;
                            _fun0012_ip = 178; continue _fun0012;
case 177:
                            var3 = var2.GIF;
case 178:
                            var1 = _closure3_slot0;
                            var2 = var1.contentType;
                            var1 = arg1;
                            var1 = var4.bind(var5)(var1, var3, var2);
                            return var1;
                        }
                    };
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.then;
                    var3 = function() {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var2 = _closure3_slot2;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 31;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var4.bind(var1)(var3);
                            if(var2) { _fun0013_ip = 51; continue _fun0013 }
case 169:
                            var2 = var3.presentImageSaved;
                            var2 = var2.bind(var3)();
                            _fun0013_ip = 50; continue _fun0013;
case 51:
                            var2 = var3.presentGifSaved;
                            var2 = var2.bind(var3)();
case 50:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 16;
                            var2 = var4[var2];
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.track;
                            var2 = _closure1_slot9;
                            var3 = var2.CONTEXT_MENU_IMAGE_SAVED;
                            var2 = {};
                            var7 = _closure1_slot26;
                            var6 = _closure3_slot1;
                            var8 = var7.bind(var1)(var6);
                            var9 = var2;
                            var6 = copyDataProperties(var9, var8);
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        }
                    };
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 18;
                        var2 = var4[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var5 = var7.show;
                        var2 = {};
                        var11 = _closure1_slot0;
                        var8 = 19;
                        var9 = var4[var8];
                        var9 = var11.bind(var1)(var9);
                        var12 = var9.intl;
                        var10 = var12.string;
                        var9 = var4[var8];
                        var9 = var11.bind(var1)(var9);
                        var9 = var9.t;
                        var9 = var9.cV3alD;
                        var9 = var10.bind(var12)(var9);
                        var2['title'] = var9;
                        var9 = var4[var8];
                        var9 = var11.bind(var1)(var9);
                        var10 = var9.intl;
                        var9 = var10.string;
                        var8 = var4[var8];
                        var8 = var11.bind(var1)(var8);
                        var8 = var8.t;
                        var8 = var8.r4Zjzv;
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
                        var7 = _closure1_slot26;
                        var6 = _closure3_slot1;
                        var13 = var7.bind(var1)(var6);
                        var14 = var2;
                        var6 = copyDataProperties(var14, var13);
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var3, var2);
case 171:
                    return var1;
                }
            };
            var9 = var9.bind(var1)(var14, var12);
            _fun0009_ip = 145; continue _fun0009;
case 107:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 34;
            var9 = var15[var9];
            var9 = var14.bind(var1)(var9);
            var9 = var9.bind(var1)(var12, var8);
            _fun0009_ip = 145; continue _fun0009;
case 105:
            var9 = _closure1_slot25;
            var9 = var9.bind(var1)(var5, var8);
            _fun0009_ip = 145; continue _fun0009;
case 103:
            var9 = var7.author;
            var17 = var9.id;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 33;
            var9 = var15[var9];
            var15 = var14.bind(var1)(var9);
            var14 = var15.openPrivateChannel;
            var9 = {};
            var9['recipientIds'] = var17;
            var9 = var14.bind(var15)(var9);
            _fun0009_ip = 145; continue _fun0009;
case 101:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 52;
            var9 = var15[var9];
            var14 = var14.bind(var1)(var9);
            var9 = var14.handleRemoveAllReactions;
            var9 = var9.bind(var14)(var12, var8);
            _fun0009_ip = 145; continue _fun0009;
case 99:
            var9 = 'Preview';
            if(!(var9 !== var13)) { _fun0009_ip = 179; continue _fun0009 }
case 180:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 52;
            var9 = var14[var9];
            var14 = var13.bind(var1)(var9);
            var13 = var14.handleViewReactions;
            var9 = {};
            var9['messageId'] = var8;
            var9['channelId'] = var12;
            var15 = {};
            var17 = _closure1_slot10;
            var17 = var17.MESSAGE_ACTION_SHEET;
            var15['object'] = var17;
            var9['location'] = var15;
            var9 = var13.bind(var14)(var9);
            _fun0009_ip = 145; continue _fun0009;
case 179:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 52;
            var9 = var14[var9];
            var13 = var13.bind(var1)(var9);
            var9 = var13.handleViewPreviewReactions;
            var9 = var9.bind(var13)(var8, var12);
            _fun0009_ip = 145; continue _fun0009;
case 97:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 52;
            var9 = var14[var9];
            var13 = var13.bind(var1)(var9);
            var9 = var13.handleAddNewReactions;
            var9 = var9.bind(var13)(var5, var8);
            _fun0009_ip = 145; continue _fun0009;
case 95:
            var9 = var7.getContentMessage;
            var9 = var9.bind(var7)();
            var13 = _closure1_slot4;
            var13 = var13.bind(var1)(var9);
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            if(var13) { _fun0009_ip = 181; continue _fun0009 }
case 182:
            var13 = 30;
            var13 = var15[var13];
            var18 = var14.bind(var1)(var13);
            var17 = var18.copy;
            var13 = var9.content;
            var13 = var17.bind(var18)(var13);
            _fun0009_ip = 183; continue _fun0009;
case 181:
            var13 = 29;
            var13 = var15[var13];
            var14 = var14.bind(var1)(var13);
            var13 = var14.getAllTextDisplayContent;
            var9 = var9.components;
            var14 = var13.bind(var14)(var9);
            var9 = null;
            if(!(var9 != var14)) { _fun0009_ip = 183; continue _fun0009 }
case 184:
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 30;
            var9 = var15[var9];
            var13 = var13.bind(var1)(var9);
            var9 = var13.copy;
            var9 = var9.bind(var13)(var14);
case 183:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 31;
            var9 = var14[var9];
            var13 = var13.bind(var1)(var9);
            var9 = var13.presentMessageCopied;
            var9 = var9.bind(var13)();
            _fun0009_ip = 145; continue _fun0009;
case 93:
            var14 = _closure1_slot6;
            var13 = var14.getUploaderFileForMessageId;
            var9 = var7.id;
            var14 = var13.bind(var14)(var9);
            var13 = null;
            var15 = var13 == var14;
            var9 = undefined;
            if(var15) { _fun0009_ip = 185; continue _fun0009 }
case 186:
            var9 = var14.items;
case 185:
            var13 = var13 != var9;
            var17 = undefined;
            if(!var13) { _fun0009_ip = 187; continue _fun0009 }
case 188:
            var17 = var9;
case 187:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 25;
            var9 = var14[var9];
            var15 = var13.bind(var1)(var9);
            var19 = _closure1_slot8;
            var18 = var19.getOptions;
            var9 = var7.id;
            var24 = var18.bind(var19)(var9);
            var28 = undefined;
            var27 = var5;
            var26 = var7;
            var25 = var17;
            var9 = var28[var15](var27, var26, var25, var24, var23);
            var9 = 51;
            var9 = var14[var9];
            var15 = var13.bind(var1)(var9);
            var14 = var15.trackWithMetadata;
            var9 = _closure1_slot9;
            var13 = var9.MESSAGE_ACTION_SHEET_OPTION_PRESSED;
            var9 = {};
            var9['channel_id'] = var12;
            var9['guild_id'] = var16;
            var17 = 'retry';
            var9['action_sheet_option'] = var17;
            var17 = var7.state;
            var9['message_state'] = var17;
            var9 = var14.bind(var15)(var13, var9);
            _fun0009_ip = 145; continue _fun0009;
case 91:
            var13 = var7.state;
            var9 = _closure1_slot16;
            var9 = var9.SENDING;
            if(!(var13 !== var9)) { _fun0009_ip = 189; continue _fun0009 }
case 190:
            var13 = var7.state;
            var9 = _closure1_slot16;
            var9 = var9.SEND_FAILED;
            if(!(var13 !== var9)) { _fun0009_ip = 191; continue _fun0009 }
case 192:
            var9 = function handleDelete(arg1, arg2, arg3) {
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
                    if(var2) { _fun0014_ip = 48; continue _fun0014 }
case 49:
                    var4 = var4.current;
                    var2 = var6 == var4;
                    var3 = var4;
case 48:
                    if(var2) { _fun0014_ip = 50; continue _fun0014 }
case 51:
                    var2 = var3.dismissKeyboard;
                    var2 = var2.bind(var3)();
case 50:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 18;
                    var2 = var10[var2];
                    var4 = var8.bind(var1)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var9 = _closure1_slot0;
                    var6 = 19;
                    var11 = var10[var6];
                    var11 = var9.bind(var1)(var11);
                    var14 = var11.intl;
                    var13 = var14.string;
                    var11 = var10[var6];
                    var11 = var9.bind(var1)(var11);
                    var11 = var11.t;
                    var11 = var11.MWMcg7;
                    var11 = var13.bind(var14)(var11);
                    var2['title'] = var11;
                    var11 = var10[var6];
                    var11 = var9.bind(var1)(var11);
                    var14 = var11.intl;
                    var13 = var14.string;
                    var11 = var10[var6];
                    var11 = var9.bind(var1)(var11);
                    var11 = var11.t;
                    var11 = var11.AMvpS4;
                    var11 = var13.bind(var14)(var11);
                    var2['body'] = var11;
                    var11 = _closure1_slot20;
                    var7 = 21;
                    var7 = var10[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = {};
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
                    var7 = var7.gm1Vej;
                    var7 = var8.bind(var11)(var7);
                    var2['cancelText'] = var7;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.p89ACt;
                    var6 = var7.bind(var8)(var6);
                    var2['confirmText'] = var6;
                    var5 = function onConfirm() {
                        var4 = _closure1_slot23;
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
            var9 = var9.bind(var1)(var12, var10, var7);
            _fun0009_ip = 193; continue _fun0009;
case 191:
            var13 = _closure1_slot23;
            var9 = true;
            var9 = var13.bind(var1)(var12, var8, var9);
            _fun0009_ip = 193; continue _fun0009;
case 189:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 24;
            var9 = var14[var9];
            var13 = var13.bind(var1)(var9);
            var9 = var13.cancelRequest;
            var9 = var9.bind(var13)(var8);
case 193:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 51;
            var9 = var14[var9];
            var15 = var13.bind(var1)(var9);
            var14 = var15.trackWithMetadata;
            var9 = _closure1_slot9;
            var13 = var9.MESSAGE_ACTION_SHEET_OPTION_PRESSED;
            var9 = {};
            var9['channel_id'] = var12;
            var9['guild_id'] = var16;
            var16 = 'delete';
            var9['action_sheet_option'] = var16;
            var16 = var7.state;
            var9['message_state'] = var16;
            var9 = var14.bind(var15)(var13, var9);
            _fun0009_ip = 145; continue _fun0009;
case 89:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 17;
            var9 = var14[var9];
            var14 = var13.bind(var1)(var9);
            var13 = var14.patchMessageGuildOfficial;
            var9 = false;
            var9 = var13.bind(var14)(var12, var8, var9);
            _fun0009_ip = 145; continue _fun0009;
case 87:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 17;
            var9 = var14[var9];
            var14 = var13.bind(var1)(var9);
            var13 = var14.patchMessageGuildOfficial;
            var9 = true;
            var9 = var13.bind(var14)(var12, var8, var9);
            _fun0009_ip = 145; continue _fun0009;
case 85:
            var9 = function handleUnpin(arg1, arg2, arg3) {
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
                    if(var2) { _fun0015_ip = 48; continue _fun0015 }
case 49:
                    var4 = var4.current;
                    var2 = var6 == var4;
                    var3 = var4;
case 48:
                    if(var2) { _fun0015_ip = 50; continue _fun0015 }
case 51:
                    var2 = var3.dismissKeyboard;
                    var2 = var2.bind(var3)();
case 50:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 18;
                    var2 = var10[var2];
                    var4 = var8.bind(var1)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var9 = _closure1_slot0;
                    var6 = 19;
                    var11 = var10[var6];
                    var11 = var9.bind(var1)(var11);
                    var14 = var11.intl;
                    var13 = var14.string;
                    var11 = var10[var6];
                    var11 = var9.bind(var1)(var11);
                    var11 = var11.t;
                    var11 = var11.Bse+F/;
                    var11 = var13.bind(var14)(var11);
                    var2['title'] = var11;
                    var11 = var10[var6];
                    var11 = var9.bind(var1)(var11);
                    var14 = var11.intl;
                    var13 = var14.string;
                    var11 = var10[var6];
                    var11 = var9.bind(var1)(var11);
                    var11 = var11.t;
                    var11 = var11.NjEPp7;
                    var11 = var13.bind(var14)(var11);
                    var2['body'] = var11;
                    var11 = _closure1_slot20;
                    var7 = 21;
                    var7 = var10[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = {};
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
                    var7 = var7.gm1Vej;
                    var7 = var8.bind(var11)(var7);
                    var2['cancelText'] = var7;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.p89ACt;
                    var6 = var7.bind(var8)(var6);
                    var2['confirmText'] = var6;
                    var5 = function onConfirm() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 22;
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
            var9 = var9.bind(var1)(var5, var10, var7);
            _fun0009_ip = 145; continue _fun0009;
case 83:
            var9 = function handlePin(arg1, arg2, arg3) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
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
                    if(var2) { _fun0016_ip = 48; continue _fun0016 }
case 49:
                    var4 = var4.current;
                    var2 = var6 == var4;
                    var3 = var4;
case 48:
                    if(var2) { _fun0016_ip = 50; continue _fun0016 }
case 51:
                    var2 = var3.dismissKeyboard;
                    var2 = var2.bind(var3)();
case 50:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 18;
                    var2 = var10[var2];
                    var4 = var8.bind(var1)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var9 = _closure1_slot0;
                    var6 = 19;
                    var11 = var10[var6];
                    var11 = var9.bind(var1)(var11);
                    var14 = var11.intl;
                    var13 = var14.string;
                    var11 = var10[var6];
                    var11 = var9.bind(var1)(var11);
                    var11 = var11.t;
                    var11 = var11.CvQ18w;
                    var11 = var13.bind(var14)(var11);
                    var2['title'] = var11;
                    var11 = var10[var6];
                    var11 = var9.bind(var1)(var11);
                    var14 = var11.intl;
                    var13 = var14.string;
                    var11 = var10[var6];
                    var11 = var9.bind(var1)(var11);
                    var11 = var11.t;
                    var11 = var11.WG5dyo;
                    var11 = var13.bind(var14)(var11);
                    var2['body'] = var11;
                    var11 = _closure1_slot20;
                    var7 = 21;
                    var7 = var10[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = {};
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
                    var7 = var7.gm1Vej;
                    var7 = var8.bind(var11)(var7);
                    var2['cancelText'] = var7;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.p89ACt;
                    var6 = var7.bind(var8)(var6);
                    var2['confirmText'] = var6;
                    var5 = function onConfirm() {
                        var4 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 22;
                        var3 = var8[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.pinMessage;
                        var4 = _closure3_slot0;
                        var3 = _closure3_slot1;
                        var3 = var3.id;
                        var3 = var5.bind(var6)(var4, var3);
                        var7 = _closure1_slot0;
                        var2 = 23;
                        var2 = var8[var2];
                        var2 = var7.bind(var1)(var2);
                        var4 = var2.AccessibilityAnnouncer;
                        var3 = var4.announce;
                        var2 = 19;
                        var5 = var8[var2];
                        var5 = var7.bind(var1)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var2 = var8[var2];
                        var2 = var7.bind(var1)(var2);
                        var2 = var2.t;
                        var2 = var2.sCfDDl;
                        var2 = var5.bind(var6)(var2);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2['onConfirm'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var9 = var9.bind(var1)(var5, var10, var7);
            _fun0009_ip = 145; continue _fun0009;
case 81:
            var6 = function handlePublish(arg1, arg2, arg3) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
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
                    if(var2) { _fun0017_ip = 48; continue _fun0017 }
case 49:
                    var4 = var4.current;
                    var2 = var6 == var4;
                    var3 = var4;
case 48:
                    if(var2) { _fun0017_ip = 50; continue _fun0017 }
case 51:
                    var2 = var3.dismissKeyboard;
                    var2 = var2.bind(var3)();
case 50:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 18;
                    var2 = var10[var2];
                    var4 = var8.bind(var1)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var9 = _closure1_slot0;
                    var6 = 19;
                    var11 = var10[var6];
                    var11 = var9.bind(var1)(var11);
                    var14 = var11.intl;
                    var13 = var14.string;
                    var11 = var10[var6];
                    var11 = var9.bind(var1)(var11);
                    var11 = var11.t;
                    var11 = var11.aIz1oV;
                    var11 = var13.bind(var14)(var11);
                    var2['title'] = var11;
                    var11 = _closure1_slot20;
                    var7 = 20;
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
                    var7 = var7.ETE/oC;
                    var7 = var8.bind(var11)(var7);
                    var2['cancelText'] = var7;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.cY+Oob;
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
            var6 = var6.bind(var1)(var12, var10, var8);
            _fun0009_ip = 145; continue _fun0009;
case 79:
            var9 = _closure1_slot22;
            var24 = 'action_sheet';
            var28 = undefined;
            var27 = var7;
            var26 = var5;
            var25 = var10;
            var6 = var28[var9](var27, var26, var25, var24, var23);
            _fun0009_ip = 145; continue _fun0009;
case 77:
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 50;
            var6 = var13[var6];
            var9 = var9.bind(var1)(var6);
            var6 = {};
            var13 = var7.author;
            var13 = var13.id;
            var6['userId'] = var13;
            var6['channelId'] = var12;
            var12 = var7.id;
            var6['messageId'] = var12;
            var6['sourceAnalyticsLocations'] = var11;
            var6 = var9.bind(var1)(var6);
            _fun0009_ip = 145; continue _fun0009;
case 75:
            var6 = var7.author;
            var11 = var6.id;
            var9 = _closure1_slot7;
            var6 = var9.getUser;
            var15 = var6.bind(var9)(var11);
            var11 = null;
            if(!(var11 != var15)) { _fun0009_ip = 145; continue _fun0009 }
case 194:
            var6 = var11 == var10;
            var13 = undefined;
            if(var6) { _fun0009_ip = 195; continue _fun0009 }
case 196:
            var9 = var10.current;
            var6 = var11 == var9;
            var13 = var9;
case 195:
            if(var6) { _fun0009_ip = 197; continue _fun0009 }
case 198:
            var12 = var13.insertText;
            var9 = _closure1_slot1;
            var14 = _closure1_slot2;
            var6 = 11;
            var6 = var14[var6];
            var14 = var9.bind(var1)(var6);
            var9 = var14.getUserTag;
            var6 = {};
            var16 = 'never';
            var6['decoration'] = var16;
            var14 = var9.bind(var14)(var15, var6);
            var6 = global;
            var6 = var6.HermesInternal;
            var9 = var6.concat;
            var6 = '@';
            var9 = var9.bind(var6)(var14);
            var6 = true;
            var6 = var12.bind(var13)(var9, var11, var6);
case 197:
            var6 = var11 == var10;
            var9 = undefined;
            if(var6) { _fun0009_ip = 199; continue _fun0009 }
case 200:
            var12 = var10.current;
            var6 = var11 == var12;
            var9 = var12;
case 199:
            if(var6) { _fun0009_ip = 201; continue _fun0009 }
case 202:
            var6 = var9.focus;
            var6 = var6.bind(var9)();
case 201:
            var6 = var11 == var10;
            var9 = undefined;
            if(var6) { _fun0009_ip = 203; continue _fun0009 }
case 204:
            var10 = var10.current;
            var6 = var11 == var10;
            var9 = var10;
case 203:
            if(var6) { _fun0009_ip = 145; continue _fun0009 }
case 205:
            var6 = var9.openSystemKeyboard;
            var6 = var6.bind(var9)();
            _fun0009_ip = 145; continue _fun0009;
case 73:
            var6 = _closure1_slot28;
            var6 = var6.bind(var1)(var8);
            _fun0009_ip = 145; continue _fun0009;
case 71:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 49;
            var6 = var9[var6];
            var9 = var8.bind(var1)(var6);
            var8 = var9.transitionToMessage;
            var6 = var5.id;
            var5 = var7.id;
            var5 = var8.bind(var9)(var6, var5);
            _fun0009_ip = 145; continue _fun0009;
case 69:
            var6 = var7.type;
            var5 = _closure1_slot17;
            var5 = var5.THREAD_STARTER_MESSAGE;
            if(!(var6 === var5)) { _fun0009_ip = 145; continue _fun0009 }
case 206:
            var6 = var7.messageReference;
            var5 = null;
            if(!(var5 != var6)) { _fun0009_ip = 145; continue _fun0009 }
case 207:
            var6 = var7.messageReference;
            var10 = var6.message_id;
            var9 = var6.guild_id;
            var8 = var6.channel_id;
            if(!(var5 != var9)) { _fun0009_ip = 145; continue _fun0009 }
case 208:
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 28;
            var5 = var11[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.transitionToGuild;
            var5 = var5.bind(var6)(var9, var8, var10);
            _fun0009_ip = 145; continue _fun0009;
case 67:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 48;
            var5 = var8[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.canReportMessageToMods;
            var5 = var5.bind(var6)(var7);
            if(!var5) { _fun0009_ip = 145; continue _fun0009 }
case 209:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 46;
            var5 = var8[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.showReportToModMessageModal;
            var5 = var5.bind(var6)(var7);
            _fun0009_ip = 145; continue _fun0009;
case 64:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 45;
            var5 = var8[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.canReportMessage;
            var5 = var5.bind(var6)(var7);
            if(!var5) { _fun0009_ip = 145; continue _fun0009 }
case 210:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 46;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.showReportModalForMessage;
            var4 = 'mobile_message_action_sheet';
            var4 = var5.bind(var6)(var7, var4);
case 145:
            var4 = null;
            if(!(var4 != var2)) { _fun0009_ip = 60; continue _fun0009 }
case 211:
            var2 = var2.bind(var1)(var3);
case 60:
            return var1;
        }
    };
    var3['longPressMessageOptionHandler'] = var2;
    return var1;
})();