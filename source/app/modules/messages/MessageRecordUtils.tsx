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
 0:
            var2 = arg1;
            var3 = _closure1_slot5;
            var1 = {};
            var12 = var1;
            var11 = var2;
            var5 = copyDataProperties(var12, var11);
            var5 = global;
            var8 = var5.Date;
            var12 = var2.timestamp;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var13 = var7;
            var6 = new var13[var8](var12, var11);
            var7 = var6 instanceof Object ? var6 : var7;
            var6 = 'timestamp';
            var1[var6] = var7;
            var7 = var2.edited_timestamp;
            var6 = null;
            var8 = var6 != var7;
            var7 = null;
            if(!var8) { _fun0001_ip = 114; continue _fun0001 }
 82:
            var9 = var5.Date;
            var12 = var2.edited_timestamp;
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var13 = var8;
            var5 = new var13[var9](var12, var11);
            var7 = var5 instanceof Object ? var5 : var8;
 114:
            var5 = 'editedTimestamp';
            var1[var5] = var7;
            var7 = _closure1_slot17;
            var5 = undefined;
            var8 = var7.bind(var5)(var2);
            var7 = 'attachments';
            var1[var7] = var8;
            var7 = _closure1_slot19;
            var8 = var7.bind(var5)(var2);
            var7 = 'embeds';
            var1[var7] = var8;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 8;
            var7 = var9[var7];
            var9 = var8.bind(var5)(var7);
            var8 = var9.transformComponents;
            var7 = var2.components;
            if(!(var6 == var7)) { _fun0001_ip = 201; continue _fun0001 }
 197:
            var7 = new Array(0);
 201:
            var6 = {};
            var10 = true;
            var6['includeEmojiSrc'] = var10;
            var7 = var8.bind(var9)(var7, var6);
            var6 = 'components';
            var1[var6] = var7;
            var7 = var2.type;
            var6 = _closure1_slot13;
            var6 = var6.THREAD_CREATED;
            if(!(var7 !== var6)) { _fun0001_ip = 276; continue _fun0001 }
 244:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 9;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var2 = var2.content;
            var4 = var4.bind(var5)(var2);
            _fun0001_ip = 280; continue _fun0001;
 276:
            var4 = new Array(0);
 280:
            var2 = 'codedLinks';
            var1[var2] = var4;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var13 = var2;
            var12 = var1;
            var1 = new var13[var3](var12, var11);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var4 = function createMessageRecord(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var8 = arg1;
            var1 = arguments[1];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0002_ip = 16; continue _fun0002 }
 14:
            var1 = {};
 16:
            var14 = var1.reactions;
            var11 = var1.interactionData;
            var1 = _closure1_slot15;
            var10 = var1.bind(var6)(var8);
            var3 = var8.mentions;
            var7 = null;
            var1 = var7 == var3;
            var22 = undefined;
            if(var1) { _fun0002_ip = 72; continue _fun0002 }
 57:
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var22 = var2.bind(var3)(var1);
 72:
            if(!(var7 == var22)) { _fun0002_ip = 80; continue _fun0002 }
 76:
            var22 = new Array(0);
 80:
            var20 = var8.mention_roles;
            if(!(var7 == var20)) { _fun0002_ip = 94; continue _fun0002 }
 90:
            var20 = new Array(0);
 94:
            var18 = var8.mention_channels;
            if(!(var7 == var18)) { _fun0002_ip = 108; continue _fun0002 }
 104:
            var18 = new Array(0);
 108:
            var21 = var8.mention_games;
            if(!(var7 == var21)) { _fun0002_ip = 122; continue _fun0002 }
 118:
            var21 = new Array(0);
 122:
            var17 = var8.message_reference;
            var1 = var8.author;
            if(!(var7 != var1)) { _fun0002_ip = 242; continue _fun0002 }
 138:
            var1 = var8.webhook_id;
            if(!(var7 == var1)) { _fun0002_ip = 210; continue _fun0002 }
 148:
            var3 = _closure1_slot10;
            var2 = var3.getUser;
            var1 = var8.author;
            var1 = var1.id;
            var23 = var2.bind(var3)(var1);
            if(!(var7 == var23)) { _fun0002_ip = 208; continue _fun0002 }
 178:
            var3 = _closure1_slot7;
            var28 = var8.author;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var29 = var2;
            var1 = new var29[var3](var28, var27);
            var23 = var1 instanceof Object ? var1 : var2;
 208:
            _fun0002_ip = 240; continue _fun0002;
 210:
            var3 = _closure1_slot7;
            var28 = var8.author;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var29 = var2;
            var1 = new var29[var3](var28, var27);
            var23 = var1 instanceof Object ? var1 : var2;
 240:
            _fun0002_ip = 246; continue _fun0002;
 242:
            var23 = _closure1_slot14;
 246:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var3 = var2.bind(var6)(var1);
            var2 = var3.getMessageAuthor;
            var1 = {};
            var4 = var8.channel_id;
            var1['channel_id'] = var4;
            var1['author'] = var23;
            var13 = var2.bind(var3)(var1);
            var1 = var7 == var8;
            var2 = undefined;
            if(var1) { _fun0002_ip = 308; continue _fun0002 }
 302:
            var2 = var8.gift_info;
 308:
            var5 = var8.gifting_prompt;
            var1 = var8.interaction;
            var1 = var7 != var1;
            var12 = null;
            if(!var1) { _fun0002_ip = 350; continue _fun0002 }
 329:
            var4 = _closure1_slot3;
            var3 = var4.createFromServer;
            var1 = var8.interaction;
            var12 = var3.bind(var4)(var1);
 350:
            var3 = var8.type;
            var1 = _closure1_slot13;
            var1 = var1.THREAD_STARTER_MESSAGE;
            var26 = undefined;
            if(!(var3 === var1)) { _fun0002_ip = 409; continue _fun0002 }
 371:
            var3 = var8.referenced_message;
            var4 = var7 == var3;
            var1 = undefined;
            if(var4) { _fun0002_ip = 406; continue _fun0002 }
 386:
            var3 = var3.author;
            var4 = var7 == var3;
            var1 = undefined;
            if(var4) { _fun0002_ip = 406; continue _fun0002 }
 401:
            var1 = var3.id;
 406:
            var26 = var1;
 409:
            var16 = var8.content;
            var3 = var8.type;
            var1 = _closure1_slot13;
            var1 = var1.PREMIUM_REFERRAL;
            if(!(var3 !== var1)) { _fun0002_ip = 494; continue _fun0002 }
 433:
            var3 = var8.type;
            var1 = _closure1_slot13;
            var1 = var1.CHAT_WALLPAPER_SET;
            var15 = undefined;
            var4 = undefined;
            if(!(var3 === var1)) { _fun0002_ip = 549; continue _fun0002 }
 456:
            var3 = _closure1_slot1;
            var24 = _closure1_slot2;
            var1 = 12;
            var1 = var24[var1];
            var3 = var3.bind(var6)(var1);
            var1 = var8.content;
            var4 = var3.bind(var6)(var1);
            var16 = '';
            var15 = undefined;
            _fun0002_ip = 549; continue _fun0002;
 494:
            var3 = _closure1_slot1;
            var24 = _closure1_slot2;
            var1 = 11;
            var1 = var24[var1];
            var24 = var3.bind(var6)(var1);
            var3 = var24.isProbablyAValidSnowflake;
            var1 = var8.content;
            var1 = var3.bind(var24)(var1);
            var3 = undefined;
            if(!var1) { _fun0002_ip = 540; continue _fun0002 }
 535:
            var3 = var8.content;
 540:
            var16 = '';
            var15 = var3;
            var4 = undefined;
 549:
            var3 = _closure1_slot6;
            var1 = {};
            var28 = var1;
            var27 = var8;
            var24 = copyDataProperties(var28, var27);
            var28 = var1;
            var27 = var13;
            var13 = copyDataProperties(var28, var27);
            var13 = var10.toJS;
            var27 = var13.bind(var10)();
            var28 = var1;
            var13 = copyDataProperties(var28, var27);
            var13 = 'author';
            var1[var13] = var23;
            var23 = var8.webhook_id;
            var13 = 'webhookId';
            var1[var13] = var23;
            var23 = _closure1_slot9;
            var13 = var23.isBlockedForMessage;
            var23 = var13.bind(var23)(var8);
            if(var23) { _fun0002_ip = 659; continue _fun0002 }
 634:
            var13 = var7 != var26;
            if(!var13) { _fun0002_ip = 656; continue _fun0002 }
 641:
            var25 = _closure1_slot9;
            var24 = var25.isBlocked;
            var13 = var24.bind(var25)(var26);
 656:
            var23 = var13;
 659:
            var13 = 'blocked';
            var1[var13] = var23;
            var23 = _closure1_slot9;
            var13 = var23.isIgnoredForMessage;
            var23 = var13.bind(var23)(var8);
            if(var23) { _fun0002_ip = 711; continue _fun0002 }
 686:
            var13 = var7 != var26;
            if(!var13) { _fun0002_ip = 708; continue _fun0002 }
 693:
            var25 = _closure1_slot9;
            var24 = var25.isIgnored;
            var13 = var24.bind(var25)(var26);
 708:
            var23 = var13;
 711:
            var13 = 'ignored';
            var1[var13] = var23;
            var23 = var8.mention_everyone;
            var13 = 'mentionEveryone';
            var1[var13] = var23;
            var13 = 'mentions';
            var1[var13] = var22;
            var13 = 'mentionRoles';
            var1[var13] = var20;
            var13 = 'mentionChannels';
            var1[var13] = var18;
            var13 = 'mentionGames';
            var1[var13] = var21;
            var13 = 'messageReference';
            var1[var13] = var17;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var13 = 13;
            var13 = var18[var13];
            var18 = var17.bind(var6)(var13);
            var17 = var18.isMentioned;
            var13 = {};
            var24 = _closure1_slot8;
            var23 = var24.getId;
            var23 = var23.bind(var24)();
            var13['userId'] = var23;
            var23 = var8.channel_id;
            var13['channelId'] = var23;
            var24 = var8.mention_everyone;
            var23 = var7 != var24;
            if(!var23) { _fun0002_ip = 851; continue _fun0002 }
 848:
            var23 = var24;
 851:
            var13['mentionEveryone'] = var23;
            var13['mentionUsers'] = var22;
            var13['mentionRoles'] = var20;
            var20 = var21.map;
            var19 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var19 = var20.bind(var21)(var19);
            var13['mentionGames'] = var19;
            var17 = var17.bind(var18)(var13);
            var13 = 'mentioned';
            var1[var13] = var17;
            var17 = _closure1_slot0;
            var13 = _closure1_slot2;
            var19 = 14;
            var13 = var13[var19];
            var17 = var17.bind(var6)(var13);
            var13 = var17.isGiftCodeEmbed;
            var13 = var13.bind(var17)(var8);
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var19];
            var19 = var18.bind(var6)(var17);
            var18 = var19.findGiftCodes;
            if(var13) { _fun0002_ip = 969; continue _fun0002 }
 957:
            var13 = var8.content;
            var17 = var18.bind(var19)(var13);
            _fun0002_ip = 1000; continue _fun0002;
 969:
            var20 = var7 == var8;
            var13 = undefined;
            if(var20) { _fun0002_ip = 995; continue _fun0002 }
 978:
            var21 = var8.embeds;
            var20 = 0;
            var20 = var21[var20];
            var13 = var20.url;
 995:
            var17 = var18.bind(var19)(var13);
 1000:
            var13 = 'giftCodes';
            var1[var13] = var17;
            var13 = 'content';
            var1[var13] = var16;
            var13 = 'referralTrialOfferId';
            var1[var13] = var15;
            var15 = _closure1_slot18;
            var13 = var8.call;
            var10 = var10.timestamp;
            var13 = var15.bind(var6)(var13, var10);
            var10 = 'call';
            var1[var10] = var13;
            var10 = _closure1_slot21;
            var13 = var10.bind(var6)(var8);
            var10 = 'messageSnapshots';
            var1[var10] = var13;
            var13 = _closure1_slot20;
            if(!(var7 == var14)) { _fun0002_ip = 1089; continue _fun0002 }
 1083:
            var14 = var8.reactions;
 1089:
            var10 = var8.poll;
            var13 = var13.bind(var6)(var14, var10);
            var10 = 'reactions';
            var1[var10] = var13;
            var10 = 'interaction';
            var1[var10] = var12;
            if(!(var7 == var11)) { _fun0002_ip = 1129; continue _fun0002 }
 1123:
            var11 = var8.interaction_data;
 1129:
            var10 = 'interactionData';
            var1[var10] = var11;
            var11 = var8.interaction_metadata;
            var10 = 'interactionMetadata';
            var1[var10] = var11;
            var11 = var8.role_subscription_data;
            var10 = 'roleSubscriptionData';
            var1[var10] = var11;
            var11 = var8.purchase_notification;
            var10 = 'purchaseNotification';
            var1[var10] = var11;
            var10 = var8.poll;
            var11 = var7 == var10;
            var10 = undefined;
            if(var11) { _fun0002_ip = 1229; continue _fun0002 }
 1198:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 15;
            var9 = var12[var9];
            var11 = var11.bind(var6)(var9);
            var9 = var8.poll;
            var10 = var11.bind(var6)(var9);
 1229:
            var9 = 'poll';
            var1[var9] = var10;
            var9 = var8.potions;
            var8 = 'potions';
            var1[var8] = var9;
            var7 = var7 == var2;
            var6 = undefined;
            if(var7) { _fun0002_ip = 1265; continue _fun0002 }
 1262:
            var6 = var2;
 1265:
            var2 = 'giftInfo';
            var1[var2] = var6;
            var2 = 'giftingPrompt';
            var1[var2] = var5;
            var2 = 'chatWallpaperInfo';
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
    var _closure1_slot16 = var4;
    var1 = function transformAttachments(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var3 = var1.attachments;
            var2 = null;
            if(!(var2 != var3)) { _fun0003_ip = 40; continue _fun0003 }
 15:
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
            _fun0003_ip = 44; continue _fun0003;
 40:
            var1 = new Array(0);
 44:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function transformMessageCall(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var2 = null;
            if(!(var2 == var4)) { _fun0004_ip = 11; continue _fun0004 }
 9:
            return var2;
 11:
            var1 = var4.ended_timestamp;
            var1 = var2 != var1;
            var3 = null;
            if(!var1) { _fun0004_ip = 90; continue _fun0004 }
 26:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 16;
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
 90:
            var1 = var2 != var3;
            var2 = null;
            if(!var1) { _fun0004_ip = 148; continue _fun0004 }
 99:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 16;
            var5 = var5[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = var6.duration;
            var7 = var3.diff;
            var1 = arg2;
            var1 = var7.bind(var3)(var1);
            var2 = var5.bind(var6)(var1);
 148:
            var1 = {};
            var4 = var4.participants;
            var1['participants'] = var4;
            var1['endedTimestamp'] = var3;
            var1['duration'] = var2;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function transformEmbeds(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var4 = var2.embeds;
            var3 = null;
            if(!(var3 != var4)) { _fun0005_ip = 80; continue _fun0005 }
 21:
            var3 = var2.embeds;
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
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
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.mergeEmbedsOnURL;
            var1 = var1.bind(var2)(var3);
            return var1;
 80:
            var1 = new Array(0);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function transformReactions(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var6 = arg1;
            var2 = arg2;
            var5 = null;
            if(!(var5 == var6)) { _fun0006_ip = 33; continue _fun0006 }
 14:
            var4 = var5 == var2;
            var3 = undefined;
            if(var4) { _fun0006_ip = 29; continue _fun0006 }
 23:
            var3 = var2.results;
 29:
            if(!(var5 != var3)) { _fun0006_ip = 142; continue _fun0006 }
 33:
            var3 = var5 == var2;
            var4 = undefined;
            if(var3) { _fun0006_ip = 80; continue _fun0006 }
 42:
            var2 = var2.results;
            var3 = var5 == var2;
            var4 = undefined;
            if(var3) { _fun0006_ip = 80; continue _fun0006 }
 57:
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
 80:
            if(!(var5 == var6)) { _fun0006_ip = 88; continue _fun0006 }
 84:
            var6 = new Array(0);
 88:
            var3 = new Array(0);
            var8 = 0;
            var10 = var3;
            var9 = var6;
            var2 = arraySpread(var10, var9, var8);
            if(!(var5 == var4)) { _fun0006_ip = 112; continue _fun0006 }
 108:
            var4 = new Array(0);
 112:
            var10 = var3;
            var9 = var4;
            var8 = var2;
            var2 = arraySpread(var10, var9, var8);
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = {};
                    var9 = arg1;
                    var10 = var1;
                    var2 = copyDataProperties(var10, var9);
                    var4 = null;
                    var3 = var4 == var1;
                    var7 = undefined;
                    var2 = undefined;
                    if(var3) { _fun0007_ip = 31; continue _fun0007 }
 25:
                    var2 = var1.count_details;
 31:
                    if(!(var4 != var2)) { _fun0007_ip = 95; continue _fun0007 }
 35:
                    var2 = var1.count_details;
                    var5 = var2.burst;
                    var6 = var4 != var5;
                    var3 = 0;
                    if(!var6) { _fun0007_ip = 59; continue _fun0007 }
 56:
                    var3 = var5;
 59:
                    var1['burst_count'] = var3;
                    var3 = var1.count_details;
                    var3 = var3.normal;
                    var4 = var4 != var3;
                    var2 = 0;
                    if(!var4) { _fun0007_ip = 89; continue _fun0007 }
 86:
                    var2 = var3;
 89:
                    var1['count'] = var2;
 95:
                    var2 = var1.count;
                    var4 = 0;
                    if(!(var2 < var4)) { _fun0007_ip = 112; continue _fun0007 }
 106:
                    var1['count'] = var4;
 112:
                    var2 = var1.burst_count;
                    if(!(var2 < var4)) { _fun0007_ip = 128; continue _fun0007 }
 122:
                    var1['burst_count'] = var4;
 128:
                    var2 = global;
                    var5 = var2.Array;
                    var3 = var5.isArray;
                    var2 = var1.burst_colors;
                    var2 = var3.bind(var5)(var2);
                    if(!var2) { _fun0007_ip = 170; continue _fun0007 }
 155:
                    var3 = var1.burst_colors;
                    var3 = var3.length;
                    var2 = var3 > var4;
 170:
                    if(!var2) { _fun0007_ip = 252; continue _fun0007 }
 173:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 18;
                    var2 = var8[var2];
                    var4 = var6.bind(var7)(var2);
                    var3 = var4.buildPlatformedThemedEmojiColorPalette;
                    var2 = {};
                    var5 = var1.burst_colors;
                    var2['colors'] = var5;
                    var5 = 19;
                    var5 = var8[var5];
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.isIOS;
                    var5 = var5.bind(var6)();
                    var2['shouldProcessMobileColors'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var1['themedBurstColors'] = var2;
 252:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
 142:
            var1 = new Array(0);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function transformMessageSnapshots(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var3 = var1.message_snapshots;
            var2 = null;
            if(!(var2 != var3)) { _fun0008_ip = 40; continue _fun0008 }
 15:
            var3 = var1.message_snapshots;
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var6 = var1.message;
                var2 = var1.moderator_report;
                var3 = _closure1_slot4;
                var1 = {};
                var5 = _closure1_slot15;
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
            _fun0008_ip = 44; continue _fun0008;
 40:
            var1 = new Array(0);
 44:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
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
    var5 = var5.MessageTypes;
    var _closure1_slot13 = var5;
    var5 = var9.prototype;
    var8 = Object.create(var5, {constructor: {value: var9}});
    var13 = {'id': '???', 'username': '???'};
    var14 = var8;
    var5 = new var14[var9](var13, var12);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot14 = var5;
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/MessageRecordUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['createMessageRecord'] = var4;
    var4 = function updateServerMessage(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var3 = arg1;
            var4 = arg2;
            var2 = var4.edited_timestamp;
            var1 = null;
            if(!(var1 == var2)) { _fun0009_ip = 42; continue _fun0009 }
 18:
            var1 = {};
            var7 = var1;
            var6 = var3;
            var2 = copyDataProperties(var7, var6);
            var7 = var1;
            var6 = var4;
            var2 = copyDataProperties(var7, var6);
            _fun0009_ip = 87; continue _fun0009;
 42:
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
 87:
            return var1;
        }
    };
    var3['updateServerMessage'] = var4;
    var4 = function updateMessageRecord(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var4 = arg2;
            var2 = var4.edited_timestamp;
            var5 = null;
            if(!(var5 == var2)) { _fun0010_ip = 933; continue _fun0010 }
 21:
            var2 = var4.call;
            var7 = var1;
            if(!(var5 != var2)) { _fun0010_ip = 74; continue _fun0010 }
 33:
            var6 = var1.set;
            var9 = _closure1_slot18;
            var8 = var4.call;
            var3 = var1.timestamp;
            var2 = undefined;
            var3 = var9.bind(var2)(var8, var3);
            var2 = 'call';
            var7 = var6.bind(var1)(var2, var3);
 74:
            var2 = var4.attachments;
            var8 = var7;
            if(!(var5 != var2)) { _fun0010_ip = 116; continue _fun0010 }
 87:
            var6 = var7.set;
            var3 = _closure1_slot17;
            var2 = undefined;
            var3 = var3.bind(var2)(var4);
            var2 = 'attachments';
            var8 = var6.bind(var7)(var2, var3);
 116:
            var2 = var4.content;
            var2 = var5 != var2;
            if(!var2) { _fun0010_ip = 141; continue _fun0010 }
 128:
            var6 = var4.content;
            var3 = '';
            var2 = var3 !== var6;
 141:
            var7 = var8;
            if(!var2) { _fun0010_ip = 167; continue _fun0010 }
 147:
            var6 = var8.set;
            var3 = var4.content;
            var2 = 'content';
            var7 = var6.bind(var8)(var2, var3);
 167:
            var2 = var4.embeds;
            var8 = var7;
            if(!(var5 != var2)) { _fun0010_ip = 209; continue _fun0010 }
 180:
            var6 = var7.set;
            var3 = _closure1_slot19;
            var2 = undefined;
            var3 = var3.bind(var2)(var4);
            var2 = 'embeds';
            var8 = var6.bind(var7)(var2, var3);
 209:
            var2 = var4.message_snapshots;
            var7 = var8;
            if(!(var5 != var2)) { _fun0010_ip = 251; continue _fun0010 }
 222:
            var6 = var8.set;
            var3 = _closure1_slot21;
            var2 = undefined;
            var3 = var3.bind(var2)(var4);
            var2 = 'messageSnapshots';
            var7 = var6.bind(var8)(var2, var3);
 251:
            var3 = var4.pinned;
            var2 = var7.pinned;
            var8 = var7;
            if(!(var3 !== var2)) { _fun0010_ip = 291; continue _fun0010 }
 270:
            var6 = var7.set;
            var3 = var4.pinned;
            var2 = 'pinned';
            var8 = var6.bind(var7)(var2, var3);
 291:
            var2 = var8.webhookId;
            var2 = var5 != var2;
            if(!var2) { _fun0010_ip = 314; continue _fun0010 }
 304:
            var3 = var4.author;
            var2 = var5 != var3;
 314:
            var7 = var8;
            if(!var2) { _fun0010_ip = 368; continue _fun0010 }
 320:
            var6 = var8.set;
            var9 = _closure1_slot7;
            var13 = var4.author;
            var3 = var9.prototype;
            var3 = Object.create(var3, {constructor: {value: var9}});
            var14 = var3;
            var2 = new var14[var9](var13, var12);
            var3 = var2 instanceof Object ? var2 : var3;
            var2 = 'author';
            var7 = var6.bind(var8)(var2, var3);
 368:
            var2 = var4.flags;
            var2 = var5 != var2;
            if(!var2) { _fun0010_ip = 394; continue _fun0010 }
 380:
            var6 = var4.flags;
            var3 = var7.flags;
            var2 = var6 !== var3;
 394:
            var8 = var7;
            if(!var2) { _fun0010_ip = 420; continue _fun0010 }
 400:
            var6 = var7.set;
            var3 = var4.flags;
            var2 = 'flags';
            var8 = var6.bind(var7)(var2, var3);
 420:
            var2 = var4.components;
            var7 = var8;
            if(!(var5 != var2)) { _fun0010_ip = 500; continue _fun0010 }
 433:
            var6 = var8.set;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var10 = var9.bind(var2)(var3);
            var9 = var10.transformComponents;
            var3 = var4.components;
            var2 = {};
            var11 = true;
            var2['includeEmojiSrc'] = var11;
            var3 = var9.bind(var10)(var3, var2);
            var2 = 'components';
            var7 = var6.bind(var8)(var2, var3);
 500:
            var2 = var4.role_subscription_data;
            var8 = var7;
            if(!(var5 != var2)) { _fun0010_ip = 534; continue _fun0010 }
 513:
            var6 = var7.set;
            var3 = var4.role_subscription_data;
            var2 = 'roleSubscriptionData';
            var8 = var6.bind(var7)(var2, var3);
 534:
            var2 = var4.reactions;
            var7 = var8;
            if(!(var5 != var2)) { _fun0010_ip = 592; continue _fun0010 }
 547:
            var6 = var8.set;
            var9 = _closure1_slot20;
            var3 = var1.reactions;
            if(!(var5 == var3)) { _fun0010_ip = 575; continue _fun0010 }
 569:
            var3 = var4.reactions;
 575:
            var2 = undefined;
            var3 = var9.bind(var2)(var3);
            var2 = 'reactions';
            var7 = var6.bind(var8)(var2, var3);
 592:
            var2 = var4.poll;
            var8 = var7;
            if(!(var5 != var2)) { _fun0010_ip = 656; continue _fun0010 }
 605:
            var6 = var7.set;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 15;
            var2 = var9[var2];
            var9 = undefined;
            var3 = var3.bind(var9)(var2);
            var2 = var4.poll;
            var3 = var3.bind(var9)(var2);
            var2 = 'poll';
            var8 = var6.bind(var7)(var2, var3);
 656:
            var2 = var4.mentions;
            var2 = var5 != var2;
            var9 = var8;
            var3 = false;
            if(!var2) { _fun0010_ip = 714; continue _fun0010 }
 674:
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
 714:
            var2 = var4.mention_games;
            var8 = var9;
            if(!(var5 != var2)) { _fun0010_ip = 750; continue _fun0010 }
 727:
            var7 = var9.set;
            var6 = var4.mention_games;
            var2 = 'mentionGames';
            var8 = var7.bind(var9)(var2, var6);
            var3 = true;
 750:
            var2 = var4.mention_everyone;
            var9 = var8;
            if(!(var5 != var2)) { _fun0010_ip = 786; continue _fun0010 }
 763:
            var7 = var8.set;
            var6 = var4.mention_everyone;
            var2 = 'mentionEveryone';
            var9 = var7.bind(var8)(var2, var6);
            var3 = true;
 786:
            var2 = var4.mention_roles;
            var8 = var9;
            if(!(var5 != var2)) { _fun0010_ip = 822; continue _fun0010 }
 799:
            var7 = var9.set;
            var6 = var4.mention_roles;
            var2 = 'mentionRoles';
            var8 = var7.bind(var9)(var2, var6);
            var3 = true;
 822:
            var2 = var4.potions;
            var7 = var8;
            if(!(var5 != var2)) { _fun0010_ip = 856; continue _fun0010 }
 835:
            var6 = var8.set;
            var5 = var4.potions;
            var2 = 'potions';
            var7 = var6.bind(var8)(var2, var5);
 856:
            var2 = var7;
            if(!var3) { _fun0010_ip = 931; continue _fun0010 }
 862:
            var6 = var7.set;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 13;
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
 931:
            return var2;
 933:
            var3 = _closure1_slot16;
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
 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 20;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var1 = var3.getMessageStickers;
            var1 = var1.bind(var3)(var2);
            var3 = var1.length;
            var1 = 0;
            var1 = var1 === var3;
            if(var1) { _fun0011_ip = 66; continue _fun0011 }
 53:
            var3 = var2.content;
            var2 = '';
            var1 = var2 !== var3;
 66:
            return var1;
        }
    };
    var3['canEditMessageWithStickers'] = var4;
    var2 = function hasEphemeralAppearance(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var3 = arg1;
            var4 = var3.hasFlag;
            var1 = _closure1_slot12;
            var1 = var1.EPHEMERAL;
            var1 = var4.bind(var3)(var1);
            if(!var1) { _fun0012_ip = 49; continue _fun0012 }
 30:
            var3 = var3.type;
            var2 = _closure1_slot13;
            var2 = var2.IN_GAME_MESSAGE_NUX;
            var1 = var3 !== var2;
 49:
            return var1;
        }
    };
    var3['hasEphemeralAppearance'] = var2;
    return var1;
})();