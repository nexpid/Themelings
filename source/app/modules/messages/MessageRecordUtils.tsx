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
            var2 = arg1;
            var1 = arguments[1];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var1 = {};
case 9:
            var13 = var1.reactions;
            var10 = var1.interactionData;
            var1 = _closure1_slot16;
            var9 = var1.bind(var6)(var2);
            var4 = var2.mentions;
            var7 = null;
            var1 = var7 == var4;
            var20 = undefined;
            if(var1) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var3 = var4.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var20 = var3.bind(var4)(var1);
case 11:
            if(!(var7 == var20)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var20 = new Array(0);
case 13:
            var19 = var2.mention_roles;
            if(!(var7 == var19)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var19 = new Array(0);
case 15:
            var18 = var2.mention_channels;
            if(!(var7 == var18)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var18 = new Array(0);
case 17:
            var17 = var2.message_reference;
            var1 = var2.author;
            if(!(var7 != var1)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var1 = var2.webhook_id;
            if(!(var7 == var1)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var4 = _closure1_slot10;
            var3 = var4.getUser;
            var1 = var2.author;
            var1 = var1.id;
            var21 = var3.bind(var4)(var1);
            if(!(var7 == var21)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var4 = _closure1_slot7;
            var26 = var2.author;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var27 = var3;
            var1 = new var27[var4](var26, var25);
            var21 = var1 instanceof Object ? var1 : var3;
case 23:
            _fun0002_ip = 25; continue _fun0002;
case 21:
            var4 = _closure1_slot7;
            var26 = var2.author;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var27 = var3;
            var1 = new var27[var4](var26, var25);
            var21 = var1 instanceof Object ? var1 : var3;
case 25:
            _fun0002_ip = 26; continue _fun0002;
case 19:
            var21 = _closure1_slot15;
case 26:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var4 = var3.bind(var6)(var1);
            var3 = var4.getMessageAuthor;
            var1 = {};
            var5 = var2.channel_id;
            var1['channel_id'] = var5;
            var1['author'] = var21;
            var12 = var3.bind(var4)(var1);
            var1 = var7 == var2;
            var4 = undefined;
            if(var1) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var4 = var2.gift_info;
case 27:
            var5 = var2.gifting_prompt;
            var1 = var2.interaction;
            var1 = var7 != var1;
            var11 = null;
            if(!var1) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var14 = _closure1_slot3;
            var3 = var14.createFromServer;
            var1 = var2.interaction;
            var11 = var3.bind(var14)(var1);
case 29:
            var3 = var2.type;
            var1 = _closure1_slot13;
            var1 = var1.THREAD_STARTER_MESSAGE;
            var24 = undefined;
            if(!(var3 === var1)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var3 = var2.referenced_message;
            var14 = var7 == var3;
            var1 = undefined;
            if(var14) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var3 = var3.author;
            var14 = var7 == var3;
            var1 = undefined;
            if(var14) { _fun0002_ip = 33; continue _fun0002 }
case 35:
            var1 = var3.id;
case 33:
            var24 = var1;
case 31:
            var16 = var2.content;
            var3 = var2.type;
            var1 = _closure1_slot13;
            var1 = var1.PREMIUM_REFERRAL;
            var15 = undefined;
            if(!(var3 === var1)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 11;
            var1 = var14[var1];
            var14 = var3.bind(var6)(var1);
            var3 = var14.isProbablyAValidSnowflake;
            var1 = var2.content;
            var1 = var3.bind(var14)(var1);
            var3 = undefined;
            if(!var1) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var3 = var2.content;
case 38:
            var16 = '';
            var15 = var3;
case 36:
            var3 = var2.type;
            var1 = _closure1_slot13;
            var1 = var1.PREMIUM_GROUP_INVITE;
            var14 = undefined;
            if(!(var3 === var1)) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var3 = _closure1_slot1;
            var22 = _closure1_slot2;
            var1 = 11;
            var1 = var22[var1];
            var22 = var3.bind(var6)(var1);
            var3 = var22.isProbablyAValidSnowflake;
            var1 = var2.content;
            var1 = var3.bind(var22)(var1);
            var3 = undefined;
            if(!var1) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var3 = var2.content;
case 42:
            var16 = '';
            var14 = var3;
case 40:
            var3 = _closure1_slot6;
            var1 = {};
            var26 = var1;
            var25 = var2;
            var22 = copyDataProperties(var26, var25);
            var26 = var1;
            var25 = var12;
            var12 = copyDataProperties(var26, var25);
            var12 = var9.toJS;
            var25 = var12.bind(var9)();
            var26 = var1;
            var12 = copyDataProperties(var26, var25);
            var12 = 'author';
            var1[var12] = var21;
            var21 = var2.webhook_id;
            var12 = 'webhookId';
            var1[var12] = var21;
            var21 = _closure1_slot9;
            var12 = var21.isBlockedForMessage;
            var21 = var12.bind(var21)(var2);
            if(var21) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var12 = var7 != var24;
            if(!var12) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var23 = _closure1_slot9;
            var22 = var23.isBlocked;
            var12 = var22.bind(var23)(var24);
case 46:
            var21 = var12;
case 44:
            var12 = 'blocked';
            var1[var12] = var21;
            var21 = _closure1_slot9;
            var12 = var21.isIgnoredForMessage;
            var21 = var12.bind(var21)(var2);
            if(var21) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var12 = var7 != var24;
            if(!var12) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var23 = _closure1_slot9;
            var22 = var23.isIgnored;
            var12 = var22.bind(var23)(var24);
case 50:
            var21 = var12;
case 48:
            var12 = 'ignored';
            var1[var12] = var21;
            var21 = var2.mention_everyone;
            var12 = 'mentionEveryone';
            var1[var12] = var21;
            var12 = 'mentions';
            var1[var12] = var20;
            var12 = 'mentionRoles';
            var1[var12] = var19;
            var12 = 'mentionChannels';
            var1[var12] = var18;
            var12 = 'messageReference';
            var1[var12] = var17;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var12 = 12;
            var12 = var18[var12];
            var18 = var17.bind(var6)(var12);
            var17 = var18.isMentioned;
            var12 = {};
            var22 = _closure1_slot8;
            var21 = var22.getId;
            var21 = var21.bind(var22)();
            var12['userId'] = var21;
            var21 = var2.channel_id;
            var12['channelId'] = var21;
            var22 = var2.mention_everyone;
            var21 = var7 != var22;
            if(!var21) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var21 = var22;
case 52:
            var12['mentionEveryone'] = var21;
            var12['mentionUsers'] = var20;
            var12['mentionRoles'] = var19;
            var17 = var17.bind(var18)(var12);
            var12 = 'mentioned';
            var1[var12] = var17;
            var17 = _closure1_slot0;
            var12 = _closure1_slot2;
            var19 = 13;
            var12 = var12[var19];
            var17 = var17.bind(var6)(var12);
            var12 = var17.isGiftCodeEmbed;
            var12 = var12.bind(var17)(var2);
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var19];
            var19 = var18.bind(var6)(var17);
            var18 = var19.findGiftCodes;
            if(var12) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var12 = var2.content;
            var17 = var18.bind(var19)(var12);
            _fun0002_ip = 56; continue _fun0002;
case 54:
            var20 = var7 == var2;
            var12 = undefined;
            if(var20) { _fun0002_ip = 57; continue _fun0002 }
case 58:
            var21 = var2.embeds;
            var20 = 0;
            var20 = var21[var20];
            var12 = var20.url;
case 57:
            var17 = var18.bind(var19)(var12);
case 56:
            var12 = 'giftCodes';
            var1[var12] = var17;
            var12 = 'content';
            var1[var12] = var16;
            var12 = 'referralTrialOfferId';
            var1[var12] = var15;
            var12 = 'premiumGroupInviteId';
            var1[var12] = var14;
            var14 = _closure1_slot19;
            var12 = var2.call;
            var9 = var9.timestamp;
            var12 = var14.bind(var6)(var12, var9);
            var9 = 'call';
            var1[var9] = var12;
            var9 = _closure1_slot22;
            var12 = var9.bind(var6)(var2);
            var9 = 'messageSnapshots';
            var1[var9] = var12;
            var12 = _closure1_slot21;
            if(!(var7 == var13)) { _fun0002_ip = 59; continue _fun0002 }
case 60:
            var13 = var2.reactions;
case 59:
            var9 = var2.poll;
            var12 = var12.bind(var6)(var13, var9);
            var9 = 'reactions';
            var1[var9] = var12;
            var9 = 'interaction';
            var1[var9] = var11;
            if(!(var7 == var10)) { _fun0002_ip = 61; continue _fun0002 }
case 62:
            var10 = var2.interaction_data;
case 61:
            var9 = 'interactionData';
            var1[var9] = var10;
            var10 = var2.interaction_metadata;
            var9 = 'interactionMetadata';
            var1[var9] = var10;
            var10 = var2.role_subscription_data;
            var9 = 'roleSubscriptionData';
            var1[var9] = var10;
            var10 = var2.purchase_notification;
            var9 = 'purchaseNotification';
            var1[var9] = var10;
            var9 = var2.poll;
            var10 = var7 == var9;
            var9 = undefined;
            if(var10) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 14;
            var8 = var11[var8];
            var10 = var10.bind(var6)(var8);
            var8 = var2.poll;
            var9 = var10.bind(var6)(var8);
case 63:
            var8 = 'poll';
            var1[var8] = var9;
            var9 = var2.shared_client_theme;
            var8 = 'sharedClientTheme';
            var1[var8] = var9;
            var7 = var7 == var4;
            var6 = undefined;
            if(var7) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var6 = var4;
case 65:
            var4 = 'giftInfo';
            var1[var4] = var6;
            var4 = 'giftingPrompt';
            var1[var4] = var5;
            var4 = var2.boosting_prompt;
            var2 = 'boostingPrompt';
            var1[var2] = var4;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var27 = var2;
            var26 = var1;
            var1 = new var27[var3](var26, var25);
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
            if(!(var2 != var3)) { _fun0003_ip = 67; continue _fun0003 }
case 68:
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
            _fun0003_ip = 69; continue _fun0003;
case 67:
            var1 = new Array(0);
case 69:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function transformMessageCall(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var2 = null;
            if(!(var2 == var4)) { _fun0004_ip = 70; continue _fun0004 }
case 71:
            return var2;
case 70:
            var1 = var4.ended_timestamp;
            var1 = var2 != var1;
            var3 = null;
            if(!var1) { _fun0004_ip = 16; continue _fun0004 }
case 72:
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
            if(!var1) { _fun0004_ip = 73; continue _fun0004 }
case 74:
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
case 73:
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
case 75:
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
            if(!(var5 == var6)) { _fun0006_ip = 76; continue _fun0006 }
case 9:
            var4 = var5 == var2;
            var3 = undefined;
            if(var4) { _fun0006_ip = 77; continue _fun0006 }
case 78:
            var3 = var2.results;
case 77:
            if(!(var5 != var3)) { _fun0006_ip = 79; continue _fun0006 }
case 76:
            var3 = var5 == var2;
            var4 = undefined;
            if(var3) { _fun0006_ip = 13; continue _fun0006 }
case 80:
            var2 = var2.results;
            var3 = var5 == var2;
            var4 = undefined;
            if(var3) { _fun0006_ip = 13; continue _fun0006 }
case 81:
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
                    if(var3) { _fun0007_ip = 77; continue _fun0007 }
case 78:
                    var2 = var1.count_details;
case 77:
                    if(!(var4 != var2)) { _fun0007_ip = 85; continue _fun0007 }
case 76:
                    var2 = var1.count_details;
                    var5 = var2.burst;
                    var6 = var4 != var5;
                    var3 = 0;
                    if(!var6) { _fun0007_ip = 81; continue _fun0007 }
case 86:
                    var3 = var5;
case 81:
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
case 18:
                    var1['count'] = var2;
case 88:
                    var3 = var1.burst_count;
                    if(!(var3 < var2)) { _fun0007_ip = 89; continue _fun0007 }
case 90:
                    var1['burst_count'] = var2;
case 89:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
case 79:
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
            if(!(var2 != var3)) { _fun0008_ip = 67; continue _fun0008 }
case 68:
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
            _fun0008_ip = 69; continue _fun0008;
case 67:
            var1 = new Array(0);
case 69:
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
            if(!(var1 == var2)) { _fun0009_ip = 80; continue _fun0009 }
case 91:
            var1 = {};
            var7 = var1;
            var6 = var3;
            var2 = copyDataProperties(var7, var6);
            var7 = var1;
            var6 = var4;
            var2 = copyDataProperties(var7, var6);
            _fun0009_ip = 87; continue _fun0009;
case 80:
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
            if(!(var5 == var2)) { _fun0010_ip = 92; continue _fun0010 }
case 75:
            var2 = var4.call;
            var7 = var1;
            if(!(var5 != var2)) { _fun0010_ip = 93; continue _fun0010 }
case 76:
            var6 = var1.set;
            var9 = _closure1_slot19;
            var8 = var4.call;
            var3 = var1.timestamp;
            var2 = undefined;
            var3 = var9.bind(var2)(var8, var3);
            var2 = 'call';
            var7 = var6.bind(var1)(var2, var3);
case 93:
            var2 = var4.attachments;
            var8 = var7;
            if(!(var5 != var2)) { _fun0010_ip = 94; continue _fun0010 }
case 87:
            var6 = var7.set;
            var3 = _closure1_slot18;
            var2 = undefined;
            var3 = var3.bind(var2)(var4);
            var2 = 'attachments';
            var8 = var6.bind(var7)(var2, var3);
case 94:
            var2 = var4.application;
            var7 = var8;
            if(!(var5 != var2)) { _fun0010_ip = 73; continue _fun0010 }
case 95:
            var6 = var8.set;
            var3 = var4.application;
            var2 = 'application';
            var7 = var6.bind(var8)(var2, var3);
case 73:
            var2 = var4.activity;
            var8 = var7;
            if(!(var5 != var2)) { _fun0010_ip = 96; continue _fun0010 }
case 97:
            var6 = var7.set;
            var3 = var4.activity;
            var2 = 'activity';
            var8 = var6.bind(var7)(var2, var3);
case 96:
            var2 = var4.content;
            var2 = var5 != var2;
            if(!var2) { _fun0010_ip = 98; continue _fun0010 }
case 23:
            var6 = var4.content;
            var3 = '';
            var2 = var3 !== var6;
case 98:
            var7 = var8;
            if(!var2) { _fun0010_ip = 99; continue _fun0010 }
case 100:
            var6 = var8.set;
            var3 = var4.content;
            var2 = 'content';
            var7 = var6.bind(var8)(var2, var3);
case 99:
            var2 = var4.embeds;
            var8 = var7;
            if(!(var5 != var2)) { _fun0010_ip = 6; continue _fun0010 }
case 101:
            var6 = var7.set;
            var3 = _closure1_slot20;
            var2 = undefined;
            var3 = var3.bind(var2)(var4);
            var2 = 'embeds';
            var8 = var6.bind(var7)(var2, var3);
case 6:
            var2 = var4.message_snapshots;
            var7 = var8;
            if(!(var5 != var2)) { _fun0010_ip = 102; continue _fun0010 }
case 28:
            var6 = var8.set;
            var3 = _closure1_slot22;
            var2 = undefined;
            var3 = var3.bind(var2)(var4);
            var2 = 'messageSnapshots';
            var7 = var6.bind(var8)(var2, var3);
case 102:
            var3 = var4.pinned;
            var2 = var7.pinned;
            var8 = var7;
            if(!(var3 !== var2)) { _fun0010_ip = 32; continue _fun0010 }
case 29:
            var6 = var7.set;
            var3 = var4.pinned;
            var2 = 'pinned';
            var8 = var6.bind(var7)(var2, var3);
case 32:
            var2 = var8.webhookId;
            var2 = var5 != var2;
            if(!var2) { _fun0010_ip = 103; continue _fun0010 }
case 104:
            var3 = var4.author;
            var2 = var5 != var3;
case 103:
            var7 = var8;
            if(!var2) { _fun0010_ip = 105; continue _fun0010 }
case 106:
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
case 105:
            var2 = var4.flags;
            var2 = var5 != var2;
            if(!var2) { _fun0010_ip = 107; continue _fun0010 }
case 108:
            var6 = var4.flags;
            var3 = var7.flags;
            var2 = var6 !== var3;
case 107:
            var8 = var7;
            if(!var2) { _fun0010_ip = 109; continue _fun0010 }
case 110:
            var6 = var7.set;
            var3 = var4.flags;
            var2 = 'flags';
            var8 = var6.bind(var7)(var2, var3);
case 109:
            var2 = var4.components;
            var7 = var8;
            if(!(var5 != var2)) { _fun0010_ip = 111; continue _fun0010 }
case 112:
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
case 111:
            var2 = var4.role_subscription_data;
            var8 = var7;
            if(!(var5 != var2)) { _fun0010_ip = 113; continue _fun0010 }
case 114:
            var6 = var7.set;
            var3 = var4.role_subscription_data;
            var2 = 'roleSubscriptionData';
            var8 = var6.bind(var7)(var2, var3);
case 113:
            var2 = var4.reactions;
            var7 = var8;
            if(!(var5 != var2)) { _fun0010_ip = 115; continue _fun0010 }
case 116:
            var6 = var8.set;
            var9 = _closure1_slot21;
            var3 = var1.reactions;
            if(!(var5 == var3)) { _fun0010_ip = 117; continue _fun0010 }
case 118:
            var3 = var4.reactions;
case 117:
            var2 = undefined;
            var3 = var9.bind(var2)(var3);
            var2 = 'reactions';
            var7 = var6.bind(var8)(var2, var3);
case 115:
            var2 = var4.poll;
            var8 = var7;
            if(!(var5 != var2)) { _fun0010_ip = 119; continue _fun0010 }
case 120:
            var6 = var7.set;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 14;
            var2 = var9[var2];
            var9 = undefined;
            var3 = var3.bind(var9)(var2);
            var2 = var4.poll;
            var3 = var3.bind(var9)(var2);
            var2 = 'poll';
            var8 = var6.bind(var7)(var2, var3);
case 119:
            var2 = var4.mentions;
            var2 = var5 != var2;
            var9 = var8;
            var3 = false;
            if(!var2) { _fun0010_ip = 121; continue _fun0010 }
case 122:
            var7 = var8.set;
            var10 = var4.mentions;
            var6 = var10.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var6 = var6.bind(var10)(var2);
            var2 = 'mentions';
            var9 = var7.bind(var8)(var2, var6);
            var3 = true;
case 121:
            var2 = var4.mention_everyone;
            var8 = var9;
            if(!(var5 != var2)) { _fun0010_ip = 123; continue _fun0010 }
case 124:
            var7 = var9.set;
            var6 = var4.mention_everyone;
            var2 = 'mentionEveryone';
            var8 = var7.bind(var9)(var2, var6);
            var3 = true;
case 123:
            var2 = var4.mention_roles;
            var7 = var8;
            if(!(var5 != var2)) { _fun0010_ip = 125; continue _fun0010 }
case 126:
            var6 = var8.set;
            var5 = var4.mention_roles;
            var2 = 'mentionRoles';
            var7 = var6.bind(var8)(var2, var5);
            var3 = true;
case 125:
            var2 = var7;
            if(!var3) { _fun0010_ip = 127; continue _fun0010 }
case 128:
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
case 127:
            return var2;
case 92:
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
            if(var1) { _fun0011_ip = 129; continue _fun0011 }
case 130:
            var3 = var2.content;
            var2 = '';
            var1 = var2 !== var3;
case 129:
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
            if(!var1) { _fun0012_ip = 131; continue _fun0012 }
case 132:
            var3 = var3.type;
            var2 = _closure1_slot13;
            var2 = var2.IN_GAME_MESSAGE_NUX;
            var1 = var3 !== var2;
case 131:
            return var1;
        }
    };
    var3['hasEphemeralAppearance'] = var2;
    return var1;
})();