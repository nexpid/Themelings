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
    var6 = function showInstantInviteActionSheet(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var6 = arg2;
            var5 = arg3;
            var11 = {'isActionSheet': true, 'location': 'IOS Instant Invite Action Sheet Mount'};
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var9 = 11;
            var3 = var1[var9];
            var1 = undefined;
            var10 = var4.bind(var1)(var3);
            var8 = var10.track;
            var3 = _closure1_slot13;
            var4 = var3.OPEN_POPOUT;
            var3 = {};
            var12 = 'Instant Invite';
            var3['type'] = var12;
            var3['source'] = var6;
            var3 = var8.bind(var10)(var4, var3);
            var4 = null;
            var8 = var4 == var5;
            var3 = undefined;
            if(var8) { _fun0001_ip = 102; continue _fun0001 }
 96:
            var3 = var5.stream;
 102:
            if(!(var4 == var3)) { _fun0001_ip = 161; continue _fun0001 }
 106:
            var8 = var4 == var5;
            var3 = undefined;
            if(var8) { _fun0001_ip = 121; continue _fun0001 }
 115:
            var3 = var5.targetApplicationId;
 121:
            if(!(var4 != var3)) { _fun0001_ip = 354; continue _fun0001 }
 128:
            var3 = _closure1_slot11;
            var3 = var3.EMBEDDED_APPLICATION;
            var11['targetType'] = var3;
            var3 = var5.targetApplicationId;
            var11['targetApplicationId'] = var3;
            _fun0001_ip = 354; continue _fun0001;
 161:
            var12 = var5.stream;
            var3 = _closure1_slot11;
            var3 = var3.STREAM;
            var11['targetType'] = var3;
            var3 = var12.ownerId;
            var11['targetUserId'] = var3;
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = 12;
            var8 = var3[var8];
            var13 = var10.bind(var1)(var8);
            var10 = var13.getStreamerApplication;
            var8 = _closure1_slot8;
            var13 = var10.bind(var13)(var12, var8);
            var8 = _closure1_slot1;
            var3 = var3[var9];
            var10 = var8.bind(var1)(var3);
            var9 = var10.track;
            var3 = _closure1_slot13;
            var8 = var3.OPEN_MODAL;
            var3 = {};
            var14 = 'Send Stream Invite';
            var3['type'] = var14;
            var14 = var11.location;
            var3['location'] = var14;
            var12 = var12.ownerId;
            var3['other_user_id'] = var12;
            var14 = var4 == var13;
            var12 = undefined;
            if(var14) { _fun0001_ip = 305; continue _fun0001 }
 300:
            var12 = var13.id;
 305:
            var3['application_id'] = var12;
            var14 = var4 == var13;
            var12 = undefined;
            if(var14) { _fun0001_ip = 324; continue _fun0001 }
 319:
            var12 = var13.name;
 324:
            var3['application_name'] = var12;
            var14 = var4 == var13;
            var12 = undefined;
            if(var14) { _fun0001_ip = 343; continue _fun0001 }
 338:
            var12 = var13.id;
 343:
            var3['game_id'] = var12;
            var3 = var9.bind(var10)(var8, var3);
 354:
            var3 = var4 == var5;
            var8 = undefined;
            if(var3) { _fun0001_ip = 369; continue _fun0001 }
 363:
            var8 = var5.createInvite;
 369:
            var3 = false;
            var3 = var3 !== var8;
            if(!var3) { _fun0001_ip = 396; continue _fun0001 }
 378:
            var9 = var4 == var5;
            var8 = undefined;
            if(var9) { _fun0001_ip = 392; continue _fun0001 }
 387:
            var8 = var5.code;
 392:
            var3 = var4 == var8;
 396:
            if(!var3) { _fun0001_ip = 447; continue _fun0001 }
 399:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 13;
            var3 = var9[var3];
            var10 = var8.bind(var1)(var3);
            var9 = var10.init;
            var3 = var7.getGuildId;
            var8 = var3.bind(var7)();
            var3 = var7.id;
            var3 = var9.bind(var10)(var8, var3, var11);
 447:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 14;
            var2 = var8[var2];
            var3 = var3.bind(var1)(var2);
            var2 = {};
            var2['channel'] = var7;
            var2['source'] = var6;
            var7 = var4 == var5;
            var6 = undefined;
            if(var7) { _fun0001_ip = 492; continue _fun0001 }
 486:
            var6 = var5.guildScheduledEventId;
 492:
            var2['guildScheduledEventId'] = var6;
            var7 = var4 == var5;
            var6 = undefined;
            if(var7) { _fun0001_ip = 512; continue _fun0001 }
 506:
            var6 = var5.targetApplicationId;
 512:
            var2['targetApplicationId'] = var6;
            var7 = var4 == var5;
            var6 = undefined;
            if(var7) { _fun0001_ip = 531; continue _fun0001 }
 526:
            var6 = var5.code;
 531:
            var2['code'] = var6;
            var2['vanityURLCode'] = var4;
            var6 = var4 == var5;
            var4 = undefined;
            if(var6) { _fun0001_ip = 555; continue _fun0001 }
 549:
            var4 = var5.stackingBehavior;
 555:
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
 0:
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
            if(var11) { _fun0002_ip = 120; continue _fun0002 }
 115:
            var9 = var10.guild_id;
 120:
            var2['guild_id'] = var9;
            var11 = var8 == var10;
            var9 = undefined;
            if(var11) { _fun0002_ip = 138; continue _fun0002 }
 133:
            var9 = var10.id;
 138:
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
            if(var11) { _fun0002_ip = 189; continue _fun0002 }
 184:
            var9 = var10.type;
 189:
            var2['invite_channel_type'] = var9;
            var9 = _closure1_slot9;
            var6 = var9.getCurrentUser;
            var9 = var6.bind(var9)();
            var10 = var8 == var9;
            var6 = undefined;
            if(var10) { _fun0002_ip = 221; continue _fun0002 }
 216:
            var6 = var9.id;
 221:
            var2['invite_inviter_id'] = var6;
            var6 = arg4;
            var2['location'] = var6;
            var9 = var8 == var7;
            var6 = undefined;
            if(var9) { _fun0002_ip = 262; continue _fun0002 }
 242:
            var7 = var7.target_application;
            var8 = var8 == var7;
            var6 = undefined;
            if(var8) { _fun0002_ip = 262; continue _fun0002 }
 257:
            var6 = var7.id;
 262:
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
 0:
            var4 = _closure1_slot4;
            var3 = var4.getChannel;
            var2 = arg1;
            var4 = var3.bind(var4)(var2);
            var3 = null;
            if(!(var3 != var4)) { _fun0003_ip = 38; continue _fun0003 }
 26:
            var2 = _closure1_slot16;
            var1 = undefined;
            var1 = var2.bind(var1)(var4, var3);
 38:
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
 0:
            var7 = arg1;
            var5 = arg2;
            var6 = arg4;
            var3 = arguments[4];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0004_ip = 20; continue _fun0004 }
 18:
            var3 = true;
 20:
            var13 = null;
            if(!(var13 != var7)) { _fun0004_ip = 379; continue _fun0004 }
 29:
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
            if(var15) { _fun0004_ip = 131; continue _fun0004 }
 126:
            var14 = var5.guild_id;
 131:
            var4['guild_id'] = var14;
            var15 = var13 == var5;
            var14 = undefined;
            if(var15) { _fun0004_ip = 149; continue _fun0004 }
 144:
            var14 = var5.id;
 149:
            var4['channel_id'] = var14;
            var14 = var11.baseCode;
            var4['invite_code'] = var14;
            var15 = var13 == var5;
            var14 = undefined;
            if(var15) { _fun0004_ip = 178; continue _fun0004 }
 173:
            var14 = var5.type;
 178:
            var4['invite_channel_type'] = var14;
            var15 = _closure1_slot9;
            var14 = var15.getCurrentUser;
            var15 = var14.bind(var15)();
            var16 = var13 == var15;
            var14 = undefined;
            if(var16) { _fun0004_ip = 210; continue _fun0004 }
 205:
            var14 = var15.id;
 210:
            var4['invite_inviter_id'] = var14;
            var11 = var11.guildScheduledEventId;
            var4['invite_guild_scheduled_event_id'] = var11;
            var4['location'] = var6;
            var14 = var13 == var12;
            var11 = undefined;
            if(var14) { _fun0004_ip = 261; continue _fun0004 }
 241:
            var12 = var12.target_application;
            var13 = var13 == var12;
            var11 = undefined;
            if(var13) { _fun0004_ip = 261; continue _fun0004 }
 256:
            var11 = var12.id;
 261:
            var4['application_id'] = var11;
            var4 = var9.bind(var10)(var8, var4);
            if(!var3) { _fun0004_ip = 304; continue _fun0004 }
 275:
            var4 = _closure1_slot18;
            var3 = _closure1_slot14;
            var18 = var3.SHARE;
            var21 = undefined;
            var20 = var7;
            var19 = var5;
            var17 = var6;
            var3 = var21[var4](var20, var19, var18, var17, var16);
 304:
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
 0:
                    var4 = arg1;
                    var3 = var4.includes;
                    var2 = _closure1_slot12;
                    var2 = var3.bind(var4)(var2);
                    if(var2) { _fun0005_ip = 55; continue _fun0005 }
 23:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.presentInviteSent;
                    var1 = var1.bind(var2)();
 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var6, var2);
 379:
            return var1;
        }
    };
    var3['handleOpenShareSheet'] = var4;
    var4 = function(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var3 = arguments[3];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0006_ip = 17; continue _fun0006 }
 15:
            var3 = true;
 17:
            var12 = null;
            if(!(var12 != var6)) { _fun0006_ip = 332; continue _fun0006 }
 26:
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
            if(var14) { _fun0006_ip = 168; continue _fun0006 }
 163:
            var13 = var5.guild_id;
 168:
            var4['server'] = var13;
            var14 = var12 == var5;
            var13 = undefined;
            if(var14) { _fun0006_ip = 187; continue _fun0006 }
 182:
            var13 = var5.id;
 187:
            var4['channel'] = var13;
            var14 = var12 == var5;
            var13 = undefined;
            if(var14) { _fun0006_ip = 205; continue _fun0006 }
 200:
            var13 = var5.type;
 205:
            var4['channel_type'] = var13;
            var13 = arg3;
            var4['location'] = var13;
            var13 = var10.baseCode;
            var4['code'] = var13;
            var10 = var10.guildScheduledEventId;
            var4['guild_scheduled_event_id'] = var10;
            var13 = var12 == var11;
            var10 = undefined;
            if(var13) { _fun0006_ip = 267; continue _fun0006 }
 247:
            var11 = var11.target_application;
            var12 = var12 == var11;
            var10 = undefined;
            if(var12) { _fun0006_ip = 267; continue _fun0006 }
 262:
            var10 = var11.id;
 267:
            var4['application_id'] = var10;
            var4 = var8.bind(var9)(var7, var4);
            if(!var3) { _fun0006_ip = 302; continue _fun0006 }
 281:
            var4 = _closure1_slot18;
            var3 = _closure1_slot14;
            var3 = var3.COPY;
            var3 = var4.bind(var1)(var6, var5, var3);
 302:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 18;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.presentLinkCopied;
            var2 = var2.bind(var3)();
 332:
            return var1;
        }
    };
    var3['handleCopy'] = var4;
    var4 = function(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
            if(!var9) { _fun0007_ip = 118; continue _fun0007 }
 115:
            var3 = var8;
 118:
            var10 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = _closure2_slot1;
                    var6 = null;
                    if(!(var6 == var2)) { _fun0008_ip = 84; continue _fun0008 }
 13:
                    var5 = _closure1_slot16;
                    var4 = _closure2_slot0;
                    var3 = {};
                    var2 = false;
                    var3['createInvite'] = var2;
                    var2 = _closure2_slot2;
                    var7 = var6 == var2;
                    var2 = undefined;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 58; continue _fun0008 }
 48:
                    var7 = _closure2_slot2;
                    var8 = var7.targetApplicationId;
 58:
                    var9 = var6 != var8;
                    var7 = undefined;
                    if(!var9) { _fun0008_ip = 70; continue _fun0008 }
 67:
                    var7 = var8;
 70:
                    var3['targetApplicationId'] = var7;
                    var2 = var5.bind(var2)(var4, var6, var3);
                    _fun0008_ip = 94; continue _fun0008;
 84:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 94:
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
 0:
            var5 = arg1;
            var4 = arg4;
            var6 = _closure1_slot4;
            var3 = var6.getChannel;
            var1 = arg2;
            var3 = var3.bind(var6)(var1);
            var6 = null;
            if(!(var6 == var3)) { _fun0009_ip = 66; continue _fun0009 }
 32:
            var10 = _closure1_slot6;
            var9 = var10.getDefaultChannel;
            var8 = var5.id;
            var1 = _closure1_slot15;
            var7 = var1.CREATE_INSTANT_INVITE;
            var1 = true;
            var3 = var9.bind(var10)(var8, var1, var7);
 66:
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
            if(!(var6 != var7)) { _fun0009_ip = 131; continue _fun0009 }
 114:
            var8 = var5.vanityURLCode;
            var7 = '';
            if(!(var7 === var8)) { _fun0009_ip = 266; continue _fun0009 }
 131:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 23;
            var7 = var10[var7];
            var12 = var8.bind(var1)(var7);
            var10 = var12.getInviteChannelId;
            var8 = var3.id;
            var7 = arg3;
            var10 = var10.bind(var12)(var8, var7);
            if(!(var6 != var10)) { _fun0009_ip = 277; continue _fun0009 }
 175:
            var8 = _closure1_slot4;
            var7 = var8.getChannel;
            var7 = var7.bind(var8)(var10);
            if(!(var6 == var7)) { _fun0009_ip = 227; continue _fun0009 }
 193:
            var14 = _closure1_slot6;
            var13 = var14.getDefaultChannel;
            var12 = var5.id;
            var8 = _closure1_slot15;
            var10 = var8.CREATE_INSTANT_INVITE;
            var8 = true;
            var7 = var13.bind(var14)(var12, var8, var10);
 227:
            var10 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var11];
            var8 = var10.bind(var1)(var8);
            var6 = var6 != var7;
            var6 = var8.bind(var1)(var6, var9);
            var6 = _closure1_slot16;
            var6 = var6.bind(var1)(var7, var4);
            _fun0009_ip = 277; continue _fun0009;
 266:
            var2 = _closure1_slot17;
            var2 = var2.bind(var1)(var5, var3, var4);
 277:
            return var1;
        }
    };
    var3['handleOpenInviteActionsheet'] = var4;
    var2 = function() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var2 = _closure1_slot10;
            var1 = var2.getDisplayedInviteCode;
            var7 = var1.bind(var2)();
            var2 = _closure1_slot3;
            var1 = var2.getDisplayedGuildTemplateCode;
            var6 = var1.bind(var2)();
            var3 = null;
            var2 = var3 != var7;
            var1 = null;
            if(!var2) { _fun0010_ip = 57; continue _fun0010 }
 42:
            var5 = _closure1_slot7;
            var2 = var5.getInvite;
            var1 = var2.bind(var5)(var7);
 57:
            var5 = var3 != var6;
            var2 = null;
            if(!var5) { _fun0010_ip = 81; continue _fun0010 }
 66:
            var5 = _closure1_slot3;
            var4 = var5.getGuildTemplate;
            var2 = var4.bind(var5)(var6);
 81:
            var1 = var3 != var1;
            if(var1) { _fun0010_ip = 92; continue _fun0010 }
 88:
            var1 = var3 != var2;
 92:
            return var1;
        }
    };
    var3['hasDeferredInvite'] = var2;
    return var1;
})();