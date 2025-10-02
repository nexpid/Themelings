// app/modules/instant_invite/native/InstantInviteUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var9;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.InviteTargetTypes;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.IOS_COPY_TO_PASTEBOARD;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var5 = var4.AnalyticEvents;
    var _closure1_slot13 = var5;
    var5 = var4.InviteOptionsType;
    var _closure1_slot14 = var5;
    var4 = var4.Permissions;
    var _closure1_slot15 = var4;
    var6 = function showInstantInviteActionSheet(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var10 = {'isActionSheet': true, 'location': 'IOS Instant Invite Action Sheet Mount'};
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var8 = 11;
            var3 = var1[var8];
            var1 = undefined;
            var11 = var4.bind(var1)(var3);
            var9 = var11.track;
            var3 = _closure1_slot13;
            var7 = var3.OPEN_POPOUT;
            var3 = {};
            var4 = 'Instant Invite';
            var3['type'] = var4;
            var4 = null;
            var13 = var4 == var5;
            var12 = undefined;
            if(var13) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = var5.source;
case 2:
            var3['source'] = var12;
            var3 = var9.bind(var11)(var7, var3);
            var7 = var4 == var5;
            var3 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var5.stream;
case 4:
            if(!(var4 == var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var4 == var5;
            var3 = undefined;
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var5.targetApplicationId;
case 8:
            if(!(var4 != var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = _closure1_slot11;
            var3 = var3.EMBEDDED_APPLICATION;
            var10['targetType'] = var3;
            var3 = var5.targetApplicationId;
            var10['targetApplicationId'] = var3;
            _fun0001_ip = 10; continue _fun0001;
case 6:
            var11 = var5.stream;
            var3 = _closure1_slot11;
            var3 = var3.STREAM;
            var10['targetType'] = var3;
            var3 = var11.ownerId;
            var10['targetUserId'] = var3;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 12;
            var7 = var3[var7];
            var12 = var9.bind(var1)(var7);
            var9 = var12.getStreamerApplication;
            var7 = _closure1_slot8;
            var12 = var9.bind(var12)(var11, var7);
            var7 = _closure1_slot1;
            var3 = var3[var8];
            var9 = var7.bind(var1)(var3);
            var8 = var9.track;
            var3 = _closure1_slot13;
            var7 = var3.OPEN_MODAL;
            var3 = {};
            var13 = 'Send Stream Invite';
            var3['type'] = var13;
            var13 = var10.location;
            var3['location'] = var13;
            var11 = var11.ownerId;
            var3['other_user_id'] = var11;
            var13 = var4 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var11 = var12.id;
case 12:
            var3['application_id'] = var11;
            var13 = var4 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var11 = var12.name;
case 14:
            var3['application_name'] = var11;
            var13 = var4 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var11 = var12.id;
case 16:
            var3['game_id'] = var11;
            var3 = var8.bind(var9)(var7, var3);
case 10:
            var3 = var4 == var5;
            var7 = undefined;
            if(var3) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = var5.createInvite;
case 18:
            var3 = false;
            var3 = var3 !== var7;
            if(!var3) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var8 = var4 == var5;
            var7 = undefined;
            if(var8) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var7 = var5.code;
case 22:
            var3 = var4 == var7;
case 20:
            if(!var3) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 13;
            var3 = var8[var3];
            var9 = var7.bind(var1)(var3);
            var8 = var9.init;
            var3 = var6.getGuildId;
            var7 = var3.bind(var6)();
            var3 = var6.id;
            var3 = var8.bind(var9)(var7, var3, var10);
case 24:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 14;
            var2 = var7[var2];
            var3 = var3.bind(var1)(var2);
            var2 = {};
            var2['channel'] = var6;
            var7 = var4 == var5;
            var6 = undefined;
            if(var7) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var6 = var5.source;
case 26:
            var2['source'] = var6;
            var7 = var4 == var5;
            var6 = undefined;
            if(var7) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var6 = var5.guildScheduledEventId;
case 28:
            var2['guildScheduledEventId'] = var6;
            var7 = var4 == var5;
            var6 = undefined;
            if(var7) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var6 = var5.targetApplicationId;
case 30:
            var2['targetApplicationId'] = var6;
            var7 = var4 == var5;
            var6 = undefined;
            if(var7) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var6 = var5.code;
case 32:
            var2['code'] = var6;
            var2['vanityURLCode'] = var4;
            var6 = var4 == var5;
            var4 = undefined;
            if(var6) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var4 = var5.stackingBehavior;
case 34:
            var2['stackingBehavior'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var _closure1_slot16 = var6;
    var5 = function showVanityUrlInviteActionSheet(arg1, arg2, arg3) {
        var4 = arg3;
        var3 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 11;
        var6 = var5[var1];
        var1 = undefined;
        var8 = var3.bind(var1)(var6);
        var7 = var8.track;
        var2 = _closure1_slot13;
        var6 = var2.OPEN_POPOUT;
        var2 = {};
        var9 = 'Vanity URL Invite';
        var2['type'] = var9;
        var2['source'] = var4;
        var2 = var7.bind(var8)(var6, var2);
        var2 = 14;
        var2 = var5[var2];
        var3 = var3.bind(var1)(var2);
        var2 = {};
        var5 = arg1;
        var5 = var5.vanityURLCode;
        var2['vanityURLCode'] = var5;
        var5 = arg2;
        var2['channel'] = var5;
        var2['source'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot17 = var5;
    var4 = function trackOptionClicked(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var12 = arg1;
            var10 = arg2;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var13 = 15;
            var2 = var4[var13];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.parseExtraDataFromInviteKey;
            var2 = var2.bind(var3)(var12);
            var5 = _closure1_slot7;
            var3 = var5.getInvite;
            var2 = var2.baseCode;
            var7 = var3.bind(var5)(var2);
            var3 = _closure1_slot1;
            var2 = 11;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot13;
            var3 = var2.INSTANT_INVITE_OPTION_CLICKED;
            var2 = {};
            var8 = arg3;
            var2['invite_type'] = var8;
            var8 = null;
            var11 = var8 == var10;
            var9 = undefined;
            if(var11) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var9 = var10.guild_id;
case 36:
            var2['guild_id'] = var9;
            var11 = var8 == var10;
            var9 = undefined;
            if(var11) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var9 = var10.id;
case 38:
            var2['channel_id'] = var9;
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var13];
            var11 = var11.bind(var1)(var9);
            var9 = var11.parseInviteCodeFromInviteKey;
            var9 = var9.bind(var11)(var12);
            var2['invite_code'] = var9;
            var11 = var8 == var10;
            var9 = undefined;
            if(var11) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var9 = var10.type;
case 40:
            var2['invite_channel_type'] = var9;
            var9 = _closure1_slot9;
            var6 = var9.getCurrentUser;
            var9 = var6.bind(var9)();
            var10 = var8 == var9;
            var6 = undefined;
            if(var10) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var6 = var9.id;
case 42:
            var2['invite_inviter_id'] = var6;
            var6 = arg4;
            var2['location'] = var6;
            var9 = var8 == var7;
            var6 = undefined;
            if(var9) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var7 = var7.target_application;
            var8 = var8 == var7;
            var6 = undefined;
            if(var8) { _fun0002_ip = 44; continue _fun0002 }
case 46:
            var6 = var7.id;
case 44:
            var2['application_id'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot18 = var4;
    var7 = 24;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/instant_invite/native/InstantInviteUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function showInstantInviteActionSheetForChannel(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = _closure1_slot4;
            var3 = var4.getChannel;
            var2 = arg1;
            var3 = var3.bind(var4)(var2);
            var2 = null;
            if(!(var2 != var3)) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var2 = _closure1_slot16;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
case 47:
            var1 = undefined;
            return var1;
        }
    };
    var3['showInstantInviteActionSheetForChannel'] = var7;
    var3['showInstantInviteActionSheet'] = var6;
    var3['showVanityUrlInviteActionSheet'] = var5;
    var3['trackOptionClicked'] = var4;
    var4 = function(arg1) {
        var1 = arg1;
        return var1;
    };
    var3['getShareMessage'] = var4;
    var4 = function(arg1, arg2, arg3, arg4) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var7 = arg1;
            var5 = arg2;
            var6 = arg4;
            var3 = arguments[4];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var3 = true;
case 49:
            var13 = null;
            if(!(var13 != var7)) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 15;
            var4 = var9[var4];
            var8 = var8.bind(var1)(var4);
            var4 = var8.parseExtraDataFromInviteKey;
            var11 = var4.bind(var8)(var7);
            var10 = _closure1_slot7;
            var8 = var10.getInvite;
            var4 = var11.baseCode;
            var12 = var8.bind(var10)(var4);
            var8 = _closure1_slot1;
            var4 = 11;
            var4 = var9[var4];
            var10 = var8.bind(var1)(var4);
            var9 = var10.track;
            var4 = _closure1_slot13;
            var8 = var4.INSTANT_INVITE_SHARED;
            var4 = {};
            var15 = var13 == var5;
            var14 = undefined;
            if(var15) { _fun0004_ip = 53; continue _fun0004 }
case 9:
            var14 = var5.guild_id;
case 53:
            var4['guild_id'] = var14;
            var15 = var13 == var5;
            var14 = undefined;
            if(var15) { _fun0004_ip = 54; continue _fun0004 }
case 55:
            var14 = var5.id;
case 54:
            var4['channel_id'] = var14;
            var14 = var11.baseCode;
            var4['invite_code'] = var14;
            var15 = var13 == var5;
            var14 = undefined;
            if(var15) { _fun0004_ip = 56; continue _fun0004 }
case 57:
            var14 = var5.type;
case 56:
            var4['invite_channel_type'] = var14;
            var15 = _closure1_slot9;
            var14 = var15.getCurrentUser;
            var15 = var14.bind(var15)();
            var16 = var13 == var15;
            var14 = undefined;
            if(var16) { _fun0004_ip = 58; continue _fun0004 }
case 59:
            var14 = var15.id;
case 58:
            var4['invite_inviter_id'] = var14;
            var11 = var11.guildScheduledEventId;
            var4['invite_guild_scheduled_event_id'] = var11;
            var4['location'] = var6;
            var14 = var13 == var12;
            var11 = undefined;
            if(var14) { _fun0004_ip = 60; continue _fun0004 }
case 61:
            var12 = var12.target_application;
            var13 = var13 == var12;
            var11 = undefined;
            if(var13) { _fun0004_ip = 60; continue _fun0004 }
case 62:
            var11 = var12.id;
case 60:
            var4['application_id'] = var11;
            var4 = var9.bind(var10)(var8, var4);
            if(!var3) { _fun0004_ip = 63; continue _fun0004 }
case 64:
            var4 = _closure1_slot18;
            var3 = _closure1_slot14;
            var18 = var3.SHARE;
            var21 = undefined;
            var20 = var7;
            var19 = var5;
            var17 = var6;
            var3 = var21[var4](var20, var19, var18, var17, var16);
case 63:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 16;
            var3 = var4[var3];
            var5 = var5.bind(var1)(var3);
            var3 = var5.hideActionSheet;
            var3 = var3.bind(var5)();
            var3 = _closure1_slot0;
            var2 = 17;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.showShareActionSheet;
            var3 = {};
            var2 = arg3;
            var3['message'] = var2;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = arg1;
                    var3 = var4.includes;
                    var2 = _closure1_slot12;
                    var2 = var3.bind(var4)(var2);
                    if(var2) { _fun0005_ip = 65; continue _fun0005 }
case 66:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.presentInviteSent;
                    var1 = var1.bind(var2)();
case 65:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var6, var2);
case 51:
            return var1;
        }
    };
    var3['handleOpenShareSheet'] = var4;
    var4 = function(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var3 = arguments[3];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0006_ip = 67; continue _fun0006 }
case 68:
            var3 = true;
case 67:
            var12 = null;
            if(!(var12 != var6)) { _fun0006_ip = 69; continue _fun0006 }
case 48:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 15;
            var4 = var8[var4];
            var7 = var9.bind(var1)(var4);
            var4 = var7.parseExtraDataFromInviteKey;
            var10 = var4.bind(var7)(var6);
            var7 = _closure1_slot1;
            var4 = 19;
            var4 = var8[var4];
            var4 = var7.bind(var1)(var4);
            var11 = var4.bind(var1)(var6);
            var4 = 20;
            var4 = var8[var4];
            var9 = var9.bind(var1)(var4);
            var4 = var9.copy;
            var4 = var4.bind(var9)(var11);
            var11 = _closure1_slot7;
            var9 = var11.getInvite;
            var4 = var10.baseCode;
            var11 = var9.bind(var11)(var4);
            var4 = 11;
            var4 = var8[var4];
            var9 = var7.bind(var1)(var4);
            var8 = var9.track;
            var4 = _closure1_slot13;
            var7 = var4.COPY_INSTANT_INVITE;
            var4 = {};
            var14 = var12 == var5;
            var13 = undefined;
            if(var14) { _fun0006_ip = 70; continue _fun0006 }
case 71:
            var13 = var5.guild_id;
case 70:
            var4['server'] = var13;
            var14 = var12 == var5;
            var13 = undefined;
            if(var14) { _fun0006_ip = 72; continue _fun0006 }
case 73:
            var13 = var5.id;
case 72:
            var4['channel'] = var13;
            var14 = var12 == var5;
            var13 = undefined;
            if(var14) { _fun0006_ip = 59; continue _fun0006 }
case 74:
            var13 = var5.type;
case 59:
            var4['channel_type'] = var13;
            var13 = arg3;
            var4['location'] = var13;
            var13 = var10.baseCode;
            var4['code'] = var13;
            var10 = var10.guildScheduledEventId;
            var4['guild_scheduled_event_id'] = var10;
            var13 = var12 == var11;
            var10 = undefined;
            if(var13) { _fun0006_ip = 75; continue _fun0006 }
case 76:
            var11 = var11.target_application;
            var12 = var12 == var11;
            var10 = undefined;
            if(var12) { _fun0006_ip = 75; continue _fun0006 }
case 44:
            var10 = var11.id;
case 75:
            var4['application_id'] = var10;
            var4 = var8.bind(var9)(var7, var4);
            if(!var3) { _fun0006_ip = 77; continue _fun0006 }
case 78:
            var4 = _closure1_slot18;
            var3 = _closure1_slot14;
            var3 = var3.COPY;
            var3 = var4.bind(var1)(var6, var5, var3);
case 77:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 18;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.presentLinkCopied;
            var2 = var2.bind(var3)();
case 69:
            return var1;
        }
    };
    var3['handleCopy'] = var4;
    var4 = function(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var8 = arg3;
            var _closure2_slot0 = var3;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 16;
            var7 = var6[var1];
            var1 = undefined;
            var9 = var5.bind(var1)(var7);
            var7 = var9.hideActionSheet;
            var7 = var7.bind(var9)();
            var7 = _closure1_slot5;
            var4 = var7.getPendingSettings;
            var4 = var4.bind(var7)();
            var _closure2_slot2 = var4;
            var4 = 13;
            var4 = var6[var4];
            var7 = var5.bind(var1)(var4);
            var6 = var7.openSettings;
            var5 = var3.guild_id;
            var4 = var3.id;
            var3 = null;
            var9 = var3 != var8;
            var3 = 'Instant Invite Action Sheet';
            if(!var9) { _fun0007_ip = 79; continue _fun0007 }
case 37:
            var3 = var8;
case 79:
            var10 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var6 = null;
                    if(!(var6 == var2)) { _fun0008_ip = 3; continue _fun0008 }
case 80:
                    var5 = _closure1_slot16;
                    var4 = _closure2_slot0;
                    var3 = {};
                    var2 = false;
                    var3['createInvite'] = var2;
                    var2 = _closure2_slot2;
                    var8 = var6 == var2;
                    var2 = undefined;
                    var7 = undefined;
                    if(var8) { _fun0008_ip = 81; continue _fun0008 }
case 82:
                    var8 = _closure2_slot2;
                    var7 = var8.targetApplicationId;
case 81:
                    var8 = var6 != var7;
                    var6 = undefined;
                    if(!var8) { _fun0008_ip = 83; continue _fun0008 }
case 84:
                    var6 = var7;
case 83:
                    var3['targetApplicationId'] = var6;
                    var2 = var5.bind(var2)(var4, var3);
                    _fun0008_ip = 85; continue _fun0008;
case 3:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 85:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var7;
            var13 = var5;
            var12 = var4;
            var11 = var3;
            var2 = var14[var6](var13, var12, var11, var10, var9);
            return var1;
        }
    };
    var3['handlePressSettings'] = var4;
    var4 = function isAppInstalled(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 21;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.canOpenUrlScheme;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isAppInstalled'] = var4;
    var4 = function(arg1, arg2, arg3, arg4) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var4 = arg4;
            var6 = _closure1_slot4;
            var3 = var6.getChannel;
            var1 = arg2;
            var3 = var3.bind(var6)(var1);
            var6 = null;
            if(!(var6 == var3)) { _fun0009_ip = 86; continue _fun0009 }
case 87:
            var10 = _closure1_slot6;
            var9 = var10.getDefaultChannel;
            var8 = var5.id;
            var1 = _closure1_slot15;
            var7 = var1.CREATE_INSTANT_INVITE;
            var1 = true;
            var3 = var9.bind(var10)(var8, var1, var7);
case 86:
            var8 = _closure1_slot1;
            var1 = _closure1_slot2;
            var11 = 22;
            var7 = var1[var11];
            var1 = undefined;
            var8 = var8.bind(var1)(var7);
            var7 = var6 != var3;
            var9 = 'Channel cannot be null';
            var7 = var8.bind(var1)(var7, var9);
            var7 = var5.vanityURLCode;
            if(!(var6 != var7)) { _fun0009_ip = 53; continue _fun0009 }
case 88:
            var8 = var5.vanityURLCode;
            var7 = '';
            if(!(var7 === var8)) { _fun0009_ip = 89; continue _fun0009 }
case 53:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 23;
            var7 = var10[var7];
            var12 = var8.bind(var1)(var7);
            var10 = var12.getInviteChannelId;
            var8 = var3.id;
            var7 = arg3;
            var10 = var10.bind(var12)(var8, var7);
            if(!(var6 != var10)) { _fun0009_ip = 90; continue _fun0009 }
case 91:
            var8 = _closure1_slot4;
            var7 = var8.getChannel;
            var8 = var7.bind(var8)(var10);
            if(!(var6 == var8)) { _fun0009_ip = 92; continue _fun0009 }
case 93:
            var14 = _closure1_slot6;
            var13 = var14.getDefaultChannel;
            var12 = var5.id;
            var7 = _closure1_slot15;
            var10 = var7.CREATE_INSTANT_INVITE;
            var7 = true;
            var8 = var13.bind(var14)(var12, var7, var10);
case 92:
            var10 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var7 = var10.bind(var1)(var7);
            var6 = var6 != var8;
            var6 = var7.bind(var1)(var6, var9);
            var7 = _closure1_slot16;
            var6 = {};
            var6['source'] = var4;
            var6 = var7.bind(var1)(var8, var6);
            _fun0009_ip = 90; continue _fun0009;
case 89:
            var2 = _closure1_slot17;
            var2 = var2.bind(var1)(var5, var3, var4);
case 90:
            return var1;
        }
    };
    var3['handleOpenInviteActionsheet'] = var4;
    var2 = function() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = _closure1_slot10;
            var1 = var2.getDisplayedInviteCode;
            var7 = var1.bind(var2)();
            var2 = _closure1_slot3;
            var1 = var2.getDisplayedGuildTemplateCode;
            var6 = var1.bind(var2)();
            var3 = null;
            var2 = var3 != var7;
            var1 = null;
            if(!var2) { _fun0010_ip = 94; continue _fun0010 }
case 95:
            var5 = _closure1_slot7;
            var2 = var5.getInvite;
            var1 = var2.bind(var5)(var7);
case 94:
            var5 = var3 != var6;
            var2 = null;
            if(!var5) { _fun0010_ip = 96; continue _fun0010 }
case 86:
            var5 = _closure1_slot3;
            var4 = var5.getGuildTemplate;
            var2 = var4.bind(var5)(var6);
case 96:
            var1 = var3 != var1;
            if(var1) { _fun0010_ip = 97; continue _fun0010 }
case 2:
            var1 = var3 != var2;
case 97:
            return var1;
        }
    };
    var3['hasDeferredInvite'] = var2;
    return var1;
})();