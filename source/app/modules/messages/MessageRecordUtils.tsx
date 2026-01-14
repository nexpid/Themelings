// app/modules/messages/MessageRecordUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function createMinimalMessageRecord(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot5;
            var1 = {};
            var11 = var1;
            var10 = var2;
            var5 = copyDataProperties(var11, var10);
            var5 = global;
            var8 = var5.Date;
            var11 = var2.timestamp;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var12 = var7;
            var6 = new var12[var8](var11, var10);
            var7 = var6 instanceof Object ? var6 : var7;
            var6 = 'timestamp';
            var1[var6] = var7;
            var6 = var2.edited_timestamp;
            var9 = null;
            var7 = var9 != var6;
            var6 = null;
            if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var5.Date;
            var11 = var2.edited_timestamp;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var12 = var7;
            var5 = new var12[var8](var11, var10);
            var6 = var5 instanceof Object ? var5 : var7;
case 2:
            var5 = 'editedTimestamp';
            var1[var5] = var6;
            var6 = _closure1_slot18;
            var5 = undefined;
            var7 = var6.bind(var5)(var2);
            var6 = 'attachments';
            var1[var6] = var7;
            var6 = _closure1_slot20;
            var7 = var6.bind(var5)(var2);
            var6 = 'embeds';
            var1[var6] = var7;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 8;
            var6 = var8[var6];
            var8 = var7.bind(var5)(var6);
            var7 = var8.transformComponents;
            var6 = var2.components;
            if(!(var9 == var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = new Array(0);
case 4:
            var7 = var7.bind(var8)(var6);
            var6 = 'components';
            var1[var6] = var7;
            var6 = _closure1_slot14;
            var8 = var6.NON_PARSED;
            var7 = var8.has;
            var6 = var2.type;
            var6 = var7.bind(var8)(var6);
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 9;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var2 = var2.content;
            var4 = var4.bind(var5)(var2);
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var4 = new Array(0);
case 8:
            var2 = 'codedLinks';
            var1[var2] = var4;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var12 = var2;
            var11 = var1;
            var1 = new var12[var3](var11, var10);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var4 = function createMessageRecord(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var1 = arguments[1];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var1 = {};
case 9:
            var13 = var1.reactions;
            var10 = var1.interactionData;
            var1 = _closure1_slot16;
            var9 = var1.bind(var5)(var7);
            var3 = var7.mentions;
            var6 = null;
            var1 = var6 == var3;
            var22 = undefined;
            if(var1) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var22 = var2.bind(var3)(var1);
case 11:
            if(!(var6 == var22)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var22 = new Array(0);
case 13:
            var20 = var7.mention_roles;
            if(!(var6 == var20)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var20 = new Array(0);
case 15:
            var18 = var7.mention_channels;
            if(!(var6 == var18)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var18 = new Array(0);
case 17:
            var21 = var7.mention_games;
            if(!(var6 == var21)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var21 = new Array(0);
case 19:
            var17 = var7.message_reference;
            var1 = var7.author;
            if(!(var6 != var1)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var1 = var7.webhook_id;
            if(!(var6 == var1)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var3 = _closure1_slot10;
            var2 = var3.getUser;
            var1 = var7.author;
            var1 = var1.id;
            var23 = var2.bind(var3)(var1);
            if(!(var6 == var23)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var3 = _closure1_slot7;
            var28 = var7.author;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var29 = var2;
            var1 = new var29[var3](var28, var27);
            var23 = var1 instanceof Object ? var1 : var2;
case 25:
            _fun0002_ip = 27; continue _fun0002;
case 23:
            var3 = _closure1_slot7;
            var28 = var7.author;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var29 = var2;
            var1 = new var29[var3](var28, var27);
            var23 = var1 instanceof Object ? var1 : var2;
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 21:
            var23 = _closure1_slot15;
case 28:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var3 = var2.bind(var5)(var1);
            var2 = var3.getMessageAuthor;
            var1 = {};
            var4 = var7.channel_id;
            var1['channel_id'] = var4;
            var1['author'] = var23;
            var12 = var2.bind(var3)(var1);
            var1 = var6 == var7;
            var2 = undefined;
            if(var1) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var2 = var7.gift_info;
case 29:
            var4 = var7.gifting_prompt;
            var1 = var7.interaction;
            var1 = var6 != var1;
            var11 = null;
            if(!var1) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var14 = _closure1_slot3;
            var3 = var14.createFromServer;
            var1 = var7.interaction;
            var11 = var3.bind(var14)(var1);
case 31:
            var3 = var7.type;
            var1 = _closure1_slot13;
            var1 = var1.THREAD_STARTER_MESSAGE;
            var26 = undefined;
            if(!(var3 === var1)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var3 = var7.referenced_message;
            var14 = var6 == var3;
            var1 = undefined;
            if(var14) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var3 = var3.author;
            var14 = var6 == var3;
            var1 = undefined;
            if(var14) { _fun0002_ip = 35; continue _fun0002 }
case 37:
            var1 = var3.id;
case 35:
            var26 = var1;
case 33:
            var16 = var7.content;
            var3 = var7.type;
            var1 = _closure1_slot13;
            var1 = var1.PREMIUM_REFERRAL;
            var15 = undefined;
            if(!(var3 === var1)) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 11;
            var1 = var14[var1];
            var14 = var3.bind(var5)(var1);
            var3 = var14.isProbablyAValidSnowflake;
            var1 = var7.content;
            var1 = var3.bind(var14)(var1);
            var3 = undefined;
            if(!var1) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var3 = var7.content;
case 40:
            var16 = '';
            var15 = var3;
case 38:
            var3 = var7.type;
            var1 = _closure1_slot13;
            var1 = var1.PREMIUM_GROUP_INVITE;
            var14 = undefined;
            if(!(var3 === var1)) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var3 = _closure1_slot1;
            var24 = _closure1_slot2;
            var1 = 11;
            var1 = var24[var1];
            var24 = var3.bind(var5)(var1);
            var3 = var24.isProbablyAValidSnowflake;
            var1 = var7.content;
            var1 = var3.bind(var24)(var1);
            var3 = undefined;
            if(!var1) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var3 = var7.content;
case 44:
            var16 = '';
            var14 = var3;
case 42:
            var3 = _closure1_slot6;
            var1 = {};
            var28 = var1;
            var27 = var7;
            var24 = copyDataProperties(var28, var27);
            var28 = var1;
            var27 = var12;
            var12 = copyDataProperties(var28, var27);
            var12 = var9.toJS;
            var27 = var12.bind(var9)();
            var28 = var1;
            var12 = copyDataProperties(var28, var27);
            var12 = 'author';
            var1[var12] = var23;
            var23 = var7.webhook_id;
            var12 = 'webhookId';
            var1[var12] = var23;
            var23 = _closure1_slot9;
            var12 = var23.isBlockedForMessage;
            var23 = var12.bind(var23)(var7);
            if(var23) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var12 = var6 != var26;
            if(!var12) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var25 = _closure1_slot9;
            var24 = var25.isBlocked;
            var12 = var24.bind(var25)(var26);
case 48:
            var23 = var12;
case 46:
            var12 = 'blocked';
            var1[var12] = var23;
            var23 = _closure1_slot9;
            var12 = var23.isIgnoredForMessage;
            var23 = var12.bind(var23)(var7);
            if(var23) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var12 = var6 != var26;
            if(!var12) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var25 = _closure1_slot9;
            var24 = var25.isIgnored;
            var12 = var24.bind(var25)(var26);
case 52:
            var23 = var12;
case 50:
            var12 = 'ignored';
            var1[var12] = var23;
            var23 = var7.mention_everyone;
            var12 = 'mentionEveryone';
            var1[var12] = var23;
            var12 = 'mentions';
            var1[var12] = var22;
            var12 = 'mentionRoles';
            var1[var12] = var20;
            var12 = 'mentionChannels';
            var1[var12] = var18;
            var12 = 'mentionGames';
            var1[var12] = var21;
            var12 = 'messageReference';
            var1[var12] = var17;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var12 = 12;
            var12 = var18[var12];
            var18 = var17.bind(var5)(var12);
            var17 = var18.isMentioned;
            var12 = {};
            var24 = _closure1_slot8;
            var23 = var24.getId;
            var23 = var23.bind(var24)();
            var12['userId'] = var23;
            var23 = var7.channel_id;
            var12['channelId'] = var23;
            var24 = var7.mention_everyone;
            var23 = var6 != var24;
            if(!var23) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var23 = var24;
case 54:
            var12['mentionEveryone'] = var23;
            var12['mentionUsers'] = var22;
            var12['mentionRoles'] = var20;
            var20 = var21.map;
            var19 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var19 = var20.bind(var21)(var19);
            var12['mentionGames'] = var19;
            var17 = var17.bind(var18)(var12);
            var12 = 'mentioned';
            var1[var12] = var17;
            var17 = _closure1_slot0;
            var12 = _closure1_slot2;
            var19 = 13;
            var12 = var12[var19];
            var17 = var17.bind(var5)(var12);
            var12 = var17.isGiftCodeEmbed;
            var12 = var12.bind(var17)(var7);
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var19];
            var19 = var18.bind(var5)(var17);
            var18 = var19.findGiftCodes;
            if(var12) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var12 = var7.content;
            var17 = var18.bind(var19)(var12);
            _fun0002_ip = 58; continue _fun0002;
case 56:
            var20 = var6 == var7;
            var12 = undefined;
            if(var20) { _fun0002_ip = 59; continue _fun0002 }
case 60:
            var21 = var7.embeds;
            var20 = 0;
            var20 = var21[var20];
            var12 = var20.url;
case 59:
            var17 = var18.bind(var19)(var12);
case 58:
            var12 = 'giftCodes';
            var1[var12] = var17;
            var12 = 'content';
            var1[var12] = var16;
            var12 = 'referralTrialOfferId';
            var1[var12] = var15;
            var12 = 'premiumGroupInviteId';
            var1[var12] = var14;
            var14 = _closure1_slot19;
            var12 = var7.call;
            var9 = var9.timestamp;
            var12 = var14.bind(var5)(var12, var9);
            var9 = 'call';
            var1[var9] = var12;
            var9 = _closure1_slot22;
            var12 = var9.bind(var5)(var7);
            var9 = 'messageSnapshots';
            var1[var9] = var12;
            var12 = _closure1_slot21;
            if(!(var6 == var13)) { _fun0002_ip = 61; continue _fun0002 }
case 62:
            var13 = var7.reactions;
case 61:
            var9 = var7.poll;
            var12 = var12.bind(var5)(var13, var9);
            var9 = 'reactions';
            var1[var9] = var12;
            var9 = 'interaction';
            var1[var9] = var11;
            if(!(var6 == var10)) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            var10 = var7.interaction_data;
case 63:
            var9 = 'interactionData';
            var1[var9] = var10;
            var10 = var7.interaction_metadata;
            var9 = 'interactionMetadata';
            var1[var9] = var10;
            var10 = var7.role_subscription_data;
            var9 = 'roleSubscriptionData';
            var1[var9] = var10;
            var10 = var7.purchase_notification;
            var9 = 'purchaseNotification';
            var1[var9] = var10;
            var9 = var7.poll;
            var10 = var6 == var9;
            var9 = undefined;
            if(var10) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 14;
            var8 = var11[var8];
            var10 = var10.bind(var5)(var8);
            var8 = var7.poll;
            var9 = var10.bind(var5)(var8);
case 65:
            var8 = 'poll';
            var1[var8] = var9;
            var8 = var7.shared_client_theme;
            var7 = 'sharedClientTheme';
            var1[var7] = var8;
            var6 = var6 == var2;
            var5 = undefined;
            if(var6) { _fun0002_ip = 67; continue _fun0002 }
case 68:
            var5 = var2;
case 67:
            var2 = 'giftInfo';
            var1[var2] = var5;
            var2 = 'giftingPrompt';
            var1[var2] = var4;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var29 = var2;
            var28 = var1;
            var1 = new var29[var3](var28, var27);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var _closure1_slot17 = var4;
    var1 = function transformAttachments(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var3 = var1.attachments;
            var2 = null;
            if(!(var2 != var3)) { _fun0003_ip = 69; continue _fun0003 }
case 70:
            var3 = var1.attachments;
            var2 = var3.map;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var6 = var1;
                var5 = var2;
                var3 = copyDataProperties(var6, var5);
                var4 = var2.filename;
                var3 = var4.startsWith;
                var2 = _closure1_slot11;
                var3 = var3.bind(var4)(var2);
                var2 = 'spoiler';
                var1[var2] = var3;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            _fun0003_ip = 71; continue _fun0003;
case 69:
            var1 = new Array(0);
case 71:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function transformMessageCall(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var2 = null;
            if(!(var2 == var4)) { _fun0004_ip = 72; continue _fun0004 }
case 73:
            return var2;
case 72:
            var1 = var4.ended_timestamp;
            var1 = var2 != var1;
            var3 = null;
            if(!var1) { _fun0004_ip = 16; continue _fun0004 }
case 74:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 15;
            var1 = var6[var1];
            var6 = undefined;
            var5 = var5.bind(var6)(var1);
            var1 = global;
            var8 = var1.Date;
            var9 = var4.ended_timestamp;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var10 = var7;
            var1 = new var10[var8](var9, var8);
            var1 = var1 instanceof Object ? var1 : var7;
            var3 = var5.bind(var6)(var1);
case 16:
            var1 = var2 != var3;
            var2 = null;
            if(!var1) { _fun0004_ip = 24; continue _fun0004 }
case 75:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 15;
            var5 = var5[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = var6.duration;
            var7 = var3.diff;
            var1 = arg2;
            var1 = var7.bind(var3)(var1);
            var2 = var5.bind(var6)(var1);
case 24:
            var1 = {};
            var4 = var4.participants;
            var1['participants'] = var4;
            var1['endedTimestamp'] = var3;
            var1['duration'] = var2;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function transformEmbeds(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var4 = var2.embeds;
            var3 = null;
            if(!(var3 != var4)) { _fun0005_ip = 13; continue _fun0005 }
case 76:
            var3 = var2.embeds;
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.sanitizeEmbed;
                var1 = _closure2_slot0;
                var3 = var1.channel_id;
                var2 = var1.id;
                var1 = arg1;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.mergeEmbedsOnURL;
            var1 = var1.bind(var2)(var3);
            return var1;
case 13:
            var1 = new Array(0);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function transformReactions(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var2 = arg2;
            var5 = null;
            if(!(var5 == var6)) { _fun0006_ip = 77; continue _fun0006 }
case 10:
            var4 = var5 == var2;
            var3 = undefined;
            if(var4) { _fun0006_ip = 78; continue _fun0006 }
case 79:
            var3 = var2.results;
case 78:
            if(!(var5 != var3)) { _fun0006_ip = 80; continue _fun0006 }
case 77:
            var3 = var5 == var2;
            var4 = undefined;
            if(var3) { _fun0006_ip = 13; continue _fun0006 }
case 81:
            var2 = var2.results;
            var3 = var5 == var2;
            var4 = undefined;
            if(var3) { _fun0006_ip = 13; continue _fun0006 }
case 12:
            var7 = var2.answer_counts;
            var3 = var7.map;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = {};
                var4 = var2.count;
                var3['vote'] = var4;
                var1['count_details'] = var3;
                var3 = var2.me_voted;
                var1['me_vote'] = var3;
                var4 = {'id': null, 'name': '', 'animated': false};
                var5 = var2.id;
                var3 = var5.toString;
                var3 = var3.bind(var5)();
                var4['id'] = var3;
                var3 = false;
                var1['emoji'] = var4;
                var1['me'] = var3;
                var1['me_burst'] = var3;
                var2 = var2.count;
                var1['count'] = var2;
                var2 = 0;
                var1['burst_count'] = var2;
                return var1;
            };
            var4 = var3.bind(var7)(var2);
case 13:
            if(!(var5 == var6)) { _fun0006_ip = 82; continue _fun0006 }
case 83:
            var6 = new Array(0);
case 82:
            var3 = new Array(0);
            var8 = 0;
            var10 = var3;
            var9 = var6;
            var2 = arraySpread(var10, var9, var8);
            if(!(var5 == var4)) { _fun0006_ip = 84; continue _fun0006 }
case 17:
            var4 = new Array(0);
case 84:
            var10 = var3;
            var9 = var4;
            var8 = var2;
            var2 = arraySpread(var10, var9, var8);
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = {};
                    var7 = arg1;
                    var8 = var1;
                    var2 = copyDataProperties(var8, var7);
                    var4 = null;
                    var3 = var4 == var1;
                    var2 = undefined;
                    if(var3) { _fun0007_ip = 78; continue _fun0007 }
case 79:
                    var2 = var1.count_details;
case 78:
                    if(!(var4 != var2)) { _fun0007_ip = 85; continue _fun0007 }
case 77:
                    var2 = var1.count_details;
                    var5 = var2.burst;
                    var6 = var4 != var5;
                    var3 = 0;
                    if(!var6) { _fun0007_ip = 12; continue _fun0007 }
case 86:
                    var3 = var5;
case 12:
                    var1['burst_count'] = var3;
                    var3 = var1.count_details;
                    var3 = var3.normal;
                    var4 = var4 != var3;
                    var2 = 0;
                    if(!var4) { _fun0007_ip = 87; continue _fun0007 }
case 83:
                    var2 = var3;
case 87:
                    var1['count'] = var2;
case 85:
                    var3 = var1.count;
                    var2 = 0;
                    if(!(var3 < var2)) { _fun0007_ip = 88; continue _fun0007 }
case 89:
                    var1['count'] = var2;
case 88:
                    var3 = var1.burst_count;
                    if(!(var3 < var2)) { _fun0007_ip = 90; continue _fun0007 }
case 91:
                    var1['burst_count'] = var2;
case 90:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
case 80:
            var1 = new Array(0);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function transformMessageSnapshots(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var3 = var1.message_snapshots;
            var2 = null;
            if(!(var2 != var3)) { _fun0008_ip = 69; continue _fun0008 }
case 70:
            var3 = var1.message_snapshots;
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var6 = var1.message;
                var2 = var1.moderator_report;
                var3 = _closure1_slot4;
                var1 = {};
                var5 = _closure1_slot16;
                var4 = undefined;
                var4 = var5.bind(var4)(var6);
                var1['message'] = var4;
                var1['moderator_report'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var8 = var2;
                var7 = var1;
                var1 = new var8[var3](var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            _fun0008_ip = 71; continue _fun0008;
case 69:
            var1 = new Array(0);
case 71:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var9 = var6.bind(var1)(var9);
    var10 = var9.MessageSnapshotRecord;
    var _closure1_slot4 = var10;
    var9 = var9.MinimalMessageRecord;
    var _closure1_slot5 = var9;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 2;
    var5 = var7[var5];
    var9 = var8.bind(var1)(var5);
    var _closure1_slot7 = var9;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.SPOILER_ATTACHMENT_PREFIX;
    var _closure1_slot11 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.MessageFlags;
    var _closure1_slot12 = var8;
    var8 = var5.MessageTypes;
    var _closure1_slot13 = var8;
    var5 = var5.MessageTypesSets;
    var _closure1_slot14 = var5;
    var5 = var9.prototype;
    var8 = Object.create(var5, {constructor: {value: var9}});
    var13 = {'id': '???', 'username': '???'};
    var14 = var8;
    var5 = new var14[var9](var13, var12);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot15 = var5;
    var5 = 18;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/MessageRecordUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['createMessageRecord'] = var4;
    var4 = function updateServerMessage(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var2 = var4.edited_timestamp;
            var1 = null;
            if(!(var1 == var2)) { _fun0009_ip = 81; continue _fun0009 }
case 92:
            var1 = {};
            var7 = var1;
            var6 = var3;
            var2 = copyDataProperties(var7, var6);
            var7 = var1;
            var6 = var4;
            var2 = copyDataProperties(var7, var6);
            _fun0009_ip = 87; continue _fun0009;
case 81:
            var2 = {};
            var7 = var2;
            var6 = var4;
            var4 = copyDataProperties(var7, var6);
            var5 = var3.reactions;
            var4 = 'reactions';
            var2[var4] = var5;
            var4 = var3.interaction_data;
            var3 = 'interaction_data';
            var2[var3] = var4;
            var1 = var2;
case 87:
            return var1;
        }
    };
    var3['updateServerMessage'] = var4;
    var4 = function updateMessageRecord(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var4 = arg2;
            var2 = var4.edited_timestamp;
            var5 = null;
            if(!(var5 == var2)) { _fun0010_ip = 93; continue _fun0010 }
case 76:
            var2 = var4.call;
            var7 = var1;
            if(!(var5 != var2)) { _fun0010_ip = 94; continue _fun0010 }
case 77:
            var6 = var1.set;
            var9 = _closure1_slot19;
            var8 = var4.call;
            var3 = var1.timestamp;
            var2 = undefined;
            var3 = var9.bind(var2)(var8, var3);
            var2 = 'call';
            var7 = var6.bind(var1)(var2, var3);
case 94:
            var2 = var4.attachments;
            var8 = var7;
            if(!(var5 != var2)) { _fun0010_ip = 95; continue _fun0010 }
case 87:
            var6 = var7.set;
            var3 = _closure1_slot18;
            var2 = undefined;
            var3 = var3.bind(var2)(var4);
            var2 = 'attachments';
            var8 = var6.bind(var7)(var2, var3);
case 95:
            var2 = var4.application;
            var7 = var8;
            if(!(var5 != var2)) { _fun0010_ip = 24; continue _fun0010 }
case 96:
            var6 = var8.set;
            var3 = var4.application;
            var2 = 'application';
            var7 = var6.bind(var8)(var2, var3);
case 24:
            var2 = var4.activity;
            var8 = var7;
            if(!(var5 != var2)) { _fun0010_ip = 97; continue _fun0010 }
case 98:
            var6 = var7.set;
            var3 = var4.activity;
            var2 = 'activity';
            var8 = var6.bind(var7)(var2, var3);
case 97:
            var2 = var4.content;
            var2 = var5 != var2;
            if(!var2) { _fun0010_ip = 99; continue _fun0010 }
case 100:
            var6 = var4.content;
            var3 = '';
            var2 = var3 !== var6;
case 99:
            var7 = var8;
            if(!var2) { _fun0010_ip = 101; continue _fun0010 }
case 102:
            var6 = var8.set;
            var3 = var4.content;
            var2 = 'content';
            var7 = var6.bind(var8)(var2, var3);
case 101:
            var2 = var4.embeds;
            var8 = var7;
            if(!(var5 != var2)) { _fun0010_ip = 6; continue _fun0010 }
case 28:
            var6 = var7.set;
            var3 = _closure1_slot20;
            var2 = undefined;
            var3 = var3.bind(var2)(var4);
            var2 = 'embeds';
            var8 = var6.bind(var7)(var2, var3);
case 6:
            var2 = var4.message_snapshots;
            var7 = var8;
            if(!(var5 != var2)) { _fun0010_ip = 103; continue _fun0010 }
case 104:
            var6 = var8.set;
            var3 = _closure1_slot22;
            var2 = undefined;
            var3 = var3.bind(var2)(var4);
            var2 = 'messageSnapshots';
            var7 = var6.bind(var8)(var2, var3);
case 103:
            var3 = var4.pinned;
            var2 = var7.pinned;
            var8 = var7;
            if(!(var3 !== var2)) { _fun0010_ip = 105; continue _fun0010 }
case 106:
            var6 = var7.set;
            var3 = var4.pinned;
            var2 = 'pinned';
            var8 = var6.bind(var7)(var2, var3);
case 105:
            var2 = var8.webhookId;
            var2 = var5 != var2;
            if(!var2) { _fun0010_ip = 107; continue _fun0010 }
case 108:
            var3 = var4.author;
            var2 = var5 != var3;
case 107:
            var7 = var8;
            if(!var2) { _fun0010_ip = 109; continue _fun0010 }
case 36:
            var6 = var8.set;
            var9 = _closure1_slot7;
            var12 = var4.author;
            var3 = var9.prototype;
            var3 = Object.create(var3, {constructor: {value: var9}});
            var13 = var3;
            var2 = new var13[var9](var12, var11);
            var3 = var2 instanceof Object ? var2 : var3;
            var2 = 'author';
            var7 = var6.bind(var8)(var2, var3);
case 109:
            var2 = var4.flags;
            var2 = var5 != var2;
            if(!var2) { _fun0010_ip = 110; continue _fun0010 }
case 111:
            var6 = var4.flags;
            var3 = var7.flags;
            var2 = var6 !== var3;
case 110:
            var8 = var7;
            if(!var2) { _fun0010_ip = 112; continue _fun0010 }
case 113:
            var6 = var7.set;
            var3 = var4.flags;
            var2 = 'flags';
            var8 = var6.bind(var7)(var2, var3);
case 112:
            var2 = var4.components;
            var7 = var8;
            if(!(var5 != var2)) { _fun0010_ip = 114; continue _fun0010 }
case 115:
            var6 = var8.set;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var9 = var9.bind(var2)(var3);
            var3 = var9.transformComponents;
            var2 = var4.components;
            var3 = var3.bind(var9)(var2);
            var2 = 'components';
            var7 = var6.bind(var8)(var2, var3);
case 114:
            var2 = var4.role_subscription_data;
            var8 = var7;
            if(!(var5 != var2)) { _fun0010_ip = 116; continue _fun0010 }
case 117:
            var6 = var7.set;
            var3 = var4.role_subscription_data;
            var2 = 'roleSubscriptionData';
            var8 = var6.bind(var7)(var2, var3);
case 116:
            var2 = var4.reactions;
            var7 = var8;
            if(!(var5 != var2)) { _fun0010_ip = 118; continue _fun0010 }
case 119:
            var6 = var8.set;
            var9 = _closure1_slot21;
            var3 = var1.reactions;
            if(!(var5 == var3)) { _fun0010_ip = 120; continue _fun0010 }
case 121:
            var3 = var4.reactions;
case 120:
            var2 = undefined;
            var3 = var9.bind(var2)(var3);
            var2 = 'reactions';
            var7 = var6.bind(var8)(var2, var3);
case 118:
            var2 = var4.poll;
            var9 = var7;
            if(!(var5 != var2)) { _fun0010_ip = 122; continue _fun0010 }
case 123:
            var6 = var7.set;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 14;
            var2 = var8[var2];
            var8 = undefined;
            var3 = var3.bind(var8)(var2);
            var2 = var4.poll;
            var3 = var3.bind(var8)(var2);
            var2 = 'poll';
            var9 = var6.bind(var7)(var2, var3);
case 122:
            var2 = var4.mentions;
            var2 = var5 != var2;
            var8 = var9;
            var3 = false;
            if(!var2) { _fun0010_ip = 124; continue _fun0010 }
case 125:
            var7 = var9.set;
            var10 = var4.mentions;
            var6 = var10.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var6 = var6.bind(var10)(var2);
            var2 = 'mentions';
            var8 = var7.bind(var9)(var2, var6);
            var3 = true;
case 124:
            var2 = var4.mention_games;
            var9 = var8;
            if(!(var5 != var2)) { _fun0010_ip = 126; continue _fun0010 }
case 127:
            var7 = var8.set;
            var6 = var4.mention_games;
            var2 = 'mentionGames';
            var9 = var7.bind(var8)(var2, var6);
            var3 = true;
case 126:
            var2 = var4.mention_everyone;
            var8 = var9;
            if(!(var5 != var2)) { _fun0010_ip = 128; continue _fun0010 }
case 129:
            var7 = var9.set;
            var6 = var4.mention_everyone;
            var2 = 'mentionEveryone';
            var8 = var7.bind(var9)(var2, var6);
            var3 = true;
case 128:
            var2 = var4.mention_roles;
            var7 = var8;
            if(!(var5 != var2)) { _fun0010_ip = 130; continue _fun0010 }
case 131:
            var6 = var8.set;
            var5 = var4.mention_roles;
            var2 = 'mentionRoles';
            var7 = var6.bind(var8)(var2, var5);
            var3 = true;
case 130:
            var2 = var7;
            if(!var3) { _fun0010_ip = 132; continue _fun0010 }
case 133:
            var6 = var7.set;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 12;
            var3 = var8[var3];
            var8 = undefined;
            var5 = var5.bind(var8)(var3);
            var3 = {};
            var3['message'] = var7;
            var10 = _closure1_slot8;
            var9 = var10.getId;
            var9 = var9.bind(var10)();
            var3['userId'] = var9;
            var5 = var5.bind(var8)(var3);
            var3 = 'mentioned';
            var2 = var6.bind(var7)(var3, var5);
case 132:
            return var2;
case 93:
            var3 = _closure1_slot17;
            var2 = {};
            var5 = var1.reactions;
            var2['reactions'] = var5;
            var1 = var1.interactionData;
            var2['interactionData'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var4, var2);
            return var1;
        }
    };
    var3['updateMessageRecord'] = var4;
    var4 = function(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 17;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var1 = var3.getMessageStickers;
            var1 = var1.bind(var3)(var2);
            var3 = var1.length;
            var1 = 0;
            var1 = var1 === var3;
            if(var1) { _fun0011_ip = 134; continue _fun0011 }
case 135:
            var3 = var2.content;
            var2 = '';
            var1 = var2 !== var3;
case 134:
            return var1;
        }
    };
    var3['canEditMessageWithStickers'] = var4;
    var2 = function hasEphemeralAppearance(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var3 = arg1;
            var4 = var3.hasFlag;
            var1 = _closure1_slot12;
            var1 = var1.EPHEMERAL;
            var1 = var4.bind(var3)(var1);
            if(!var1) { _fun0012_ip = 136; continue _fun0012 }
case 137:
            var3 = var3.type;
            var2 = _closure1_slot13;
            var2 = var2.IN_GAME_MESSAGE_NUX;
            var1 = var3 !== var2;
case 136:
            return var1;
        }
    };
    var3['hasEphemeralAppearance'] = var2;
    return var1;
})();