// app/records/MessageRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var10;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot6;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot5;
            var1 = _closure1_slot13;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 51; continue _fun0001 }
 38:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 92; continue _fun0001;
 51:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 71; continue _fun0001 }
 67:
            var6 = new Array(0);
 71:
            var5 = _closure1_slot6;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
 92:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0002_ip = 74; continue _fun0002;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var7 = var1.Object;
    var5 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var7)(var3, var1, var4);
    var1 = 0;
    var4 = var10[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var10[var4];
    var5 = var6.bind(var1)(var4);
    var _closure1_slot4 = var5;
    var4 = 2;
    var4 = var10[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var10[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var10[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var10[var4];
    var7 = var6.bind(var1)(var4);
    var4 = 6;
    var4 = var10[var4];
    var4 = var9.bind(var1)(var4);
    var6 = var4.MessageFlags;
    var _closure1_slot8 = var6;
    var6 = var4.MessageStates;
    var _closure1_slot9 = var6;
    var4 = var4.MessageTypes;
    var _closure1_slot10 = var4;
    var4 = function(arg1) {
        var4 = function MinimalMessageRecord(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = arg1;
                var6 = this;
                var1 = _closure1_slot3;
                var4 = _closure2_slot0;
                var2 = undefined;
                var1 = var1.bind(var2)(var6, var4);
                var1 = _closure1_slot12;
                var1 = var1.bind(var2)(var6, var4);
                var2 = var3.type;
                var4 = null;
                if(!(var4 == var2)) { _fun0003_ip = 59; continue _fun0003 }
 49:
                var5 = _closure1_slot10;
                var2 = var5.DEFAULT;
 59:
                var1['type'] = var2;
                var5 = var3.content;
                var6 = var4 != var5;
                var2 = '';
                if(!var6) { _fun0003_ip = 84; continue _fun0003 }
 81:
                var2 = var5;
 84:
                var1['content'] = var2;
                var2 = var3.attachments;
                if(!(var4 == var2)) { _fun0003_ip = 104; continue _fun0003 }
 100:
                var2 = new Array(0);
 104:
                var1['attachments'] = var2;
                var2 = var3.embeds;
                if(!(var4 == var2)) { _fun0003_ip = 124; continue _fun0003 }
 120:
                var2 = new Array(0);
 124:
                var1['embeds'] = var2;
                var2 = var3.timestamp;
                if(!(var4 == var2)) { _fun0003_ip = 168; continue _fun0003 }
 140:
                var5 = global;
                var5 = var5.Date;
                var6 = var5.prototype;
                var6 = Object.create(var6, {constructor: {value: var5}});
                var9 = var6;
                var5 = new var9[var5](var8);
                var2 = var5 instanceof Object ? var5 : var6;
 168:
                var1['timestamp'] = var2;
                var5 = var3.editedTimestamp;
                var6 = var4 != var5;
                var2 = null;
                if(!var6) { _fun0003_ip = 192; continue _fun0003 }
 189:
                var2 = var5;
 192:
                var1['editedTimestamp'] = var2;
                var5 = var3.flags;
                var6 = var4 != var5;
                var2 = 0;
                if(!var6) { _fun0003_ip = 215; continue _fun0003 }
 212:
                var2 = var5;
 215:
                var1['flags'] = var2;
                var2 = var3.components;
                if(!(var4 == var2)) { _fun0003_ip = 235; continue _fun0003 }
 231:
                var2 = new Array(0);
 235:
                var1['components'] = var2;
                var2 = var3.codedLinks;
                if(!(var4 == var2)) { _fun0003_ip = 255; continue _fun0003 }
 251:
                var2 = new Array(0);
 255:
                var1['codedLinks'] = var2;
                var2 = var3.stickers;
                if(!(var4 == var2)) { _fun0003_ip = 275; continue _fun0003 }
 271:
                var2 = new Array(0);
 275:
                var1['stickers'] = var2;
                var2 = var3.sticker_items;
                if(!(var4 == var2)) { _fun0003_ip = 297; continue _fun0003 }
 291:
                var2 = var3.stickerItems;
 297:
                if(!(var4 == var2)) { _fun0003_ip = 305; continue _fun0003 }
 301:
                var2 = new Array(0);
 305:
                var1['stickerItems'] = var2;
                var2 = var3.soundboard_sounds;
                if(!(var4 == var2)) { _fun0003_ip = 327; continue _fun0003 }
 321:
                var2 = var3.soundboardSounds;
 327:
                var1['soundboardSounds'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot7;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot4;
        var5 = {};
        var6 = 'hasFlag';
        var5['key'] = var6;
        var1 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.hasFlag;
            var1 = this;
            var2 = var1.flags;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var6 = var4.bind(var1)(var7);
    var _closure1_slot11 = var6;
    var4 = function ModeratorReport(arg1) {
        var2 = arg1;
        var3 = this;
        var5 = _closure1_slot3;
        var4 = _closure1_slot14;
        var1 = undefined;
        var4 = var5.bind(var1)(var3, var4);
        var4 = var2.reporting_user_id;
        var3['reporting_user_id'] = var4;
        var4 = var2.reported_user_id;
        var3['reported_user_id'] = var4;
        var4 = var2.reporting_member;
        var3['reporting_member'] = var4;
        var2 = var2.reported_member;
        var3['reported_member'] = var2;
        return var1;
    };
    var _closure1_slot14 = var4;
    var5 = var5.bind(var1)(var4);
    var4 = function(arg1) {
        var3 = function MessageSnapshotRecord(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = arg1;
                var6 = this;
                var1 = _closure1_slot3;
                var5 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var6, var5);
                var1 = _closure1_slot12;
                var1 = var1.bind(var4)(var6, var5);
                var5 = _closure1_slot11;
                var8 = var2.message;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var9 = var4;
                var3 = new var9[var5](var8, var7);
                var3 = var3 instanceof Object ? var3 : var4;
                var1['message'] = var3;
                var3 = var2.moderator_report;
                var2 = null;
                var4 = var2 != var3;
                if(!var4) { _fun0004_ip = 91; continue _fun0004 }
 88:
                var2 = var3;
 91:
                var1['moderatorReport'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var4 = var4.bind(var1)(var7);
    var7 = function(arg1) {
        var4 = function MessageRecord(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = arg1;
                var7 = this;
                var1 = _closure1_slot3;
                var6 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var7, var6);
                var3 = _closure1_slot12;
                var1 = new Array(1);
                var1[0] = var2;
                var1 = var3.bind(var4)(var7, var6, var1);
                var3 = var2.id;
                var1['id'] = var3;
                var3 = var2.channel_id;
                var1['channel_id'] = var3;
                var3 = var2.author;
                var1['author'] = var3;
                var3 = var2.customRenderedContent;
                var1['customRenderedContent'] = var3;
                var3 = var2.mentions;
                if(var3) { _fun0005_ip = 106; continue _fun0005 }
 102:
                var3 = new Array(0);
 106:
                var1['mentions'] = var3;
                var3 = var2.mentionRoles;
                if(var3) { _fun0005_ip = 125; continue _fun0005 }
 121:
                var3 = new Array(0);
 125:
                var1['mentionRoles'] = var3;
                var3 = var2.mentionChannels;
                if(var3) { _fun0005_ip = 144; continue _fun0005 }
 140:
                var3 = new Array(0);
 144:
                var1['mentionChannels'] = var3;
                var3 = var2.mentionGames;
                if(var3) { _fun0005_ip = 163; continue _fun0005 }
 159:
                var3 = new Array(0);
 163:
                var1['mentionGames'] = var3;
                var3 = var2.mentioned;
                if(var3) { _fun0005_ip = 180; continue _fun0005 }
 178:
                var3 = false;
 180:
                var1['mentioned'] = var3;
                var3 = var2.pinned;
                if(var3) { _fun0005_ip = 197; continue _fun0005 }
 195:
                var3 = false;
 197:
                var1['pinned'] = var3;
                var3 = var2.mentionEveryone;
                if(var3) { _fun0005_ip = 214; continue _fun0005 }
 212:
                var3 = false;
 214:
                var1['mentionEveryone'] = var3;
                var3 = var2.tts;
                if(var3) { _fun0005_ip = 231; continue _fun0005 }
 229:
                var3 = false;
 231:
                var1['tts'] = var3;
                var3 = var2.giftCodes;
                if(var3) { _fun0005_ip = 250; continue _fun0005 }
 246:
                var3 = new Array(0);
 250:
                var1['giftCodes'] = var3;
                var3 = var2.state;
                if(var3) { _fun0005_ip = 274; continue _fun0005 }
 264:
                var5 = _closure1_slot9;
                var3 = var5.SENT;
 274:
                var1['state'] = var3;
                var5 = var2.nonce;
                var3 = null;
                var6 = var3 != var5;
                var4 = undefined;
                if(!var6) { _fun0005_ip = 300; continue _fun0005 }
 297:
                var4 = var5;
 300:
                var1['nonce'] = var4;
                var4 = var2.blocked;
                if(var4) { _fun0005_ip = 317; continue _fun0005 }
 315:
                var4 = false;
 317:
                var1['blocked'] = var4;
                var4 = var2.ignored;
                if(var4) { _fun0005_ip = 334; continue _fun0005 }
 332:
                var4 = false;
 334:
                var1['ignored'] = var4;
                var4 = var2.call;
                if(var4) { _fun0005_ip = 350; continue _fun0005 }
 348:
                var4 = null;
 350:
                var1['call'] = var4;
                var4 = var2.bot;
                if(var4) { _fun0005_ip = 367; continue _fun0005 }
 365:
                var4 = false;
 367:
                var1['bot'] = var4;
                var4 = var2.webhookId;
                if(var4) { _fun0005_ip = 384; continue _fun0005 }
 382:
                var4 = null;
 384:
                var1['webhookId'] = var4;
                var4 = var2.reactions;
                if(var4) { _fun0005_ip = 403; continue _fun0005 }
 399:
                var4 = new Array(0);
 403:
                var1['reactions'] = var4;
                var4 = var2.application_id;
                if(var4) { _fun0005_ip = 423; continue _fun0005 }
 418:
                var4 = var2.applicationId;
 423:
                if(var4) { _fun0005_ip = 428; continue _fun0005 }
 426:
                var4 = null;
 428:
                var1['applicationId'] = var4;
                var4 = var2.application;
                if(var4) { _fun0005_ip = 444; continue _fun0005 }
 442:
                var4 = null;
 444:
                var1['application'] = var4;
                var4 = var2.activity;
                if(var4) { _fun0005_ip = 461; continue _fun0005 }
 459:
                var4 = null;
 461:
                var1['activity'] = var4;
                var4 = var2.activity_instance;
                if(var4) { _fun0005_ip = 482; continue _fun0005 }
 476:
                var4 = var2.activityInstance;
 482:
                if(var4) { _fun0005_ip = 487; continue _fun0005 }
 485:
                var4 = null;
 487:
                var1['activityInstance'] = var4;
                var4 = var2.messageReference;
                if(var4) { _fun0005_ip = 504; continue _fun0005 }
 502:
                var4 = null;
 504:
                var1['messageReference'] = var4;
                var4 = var2.hit;
                if(var4) { _fun0005_ip = 527; continue _fun0005 }
 521:
                var4 = var2.isSearchHit;
 527:
                if(var4) { _fun0005_ip = 532; continue _fun0005 }
 530:
                var4 = false;
 532:
                var1['isSearchHit'] = var4;
                var4 = var2.loggingName;
                if(var4) { _fun0005_ip = 549; continue _fun0005 }
 547:
                var4 = null;
 549:
                var1['loggingName'] = var4;
                var4 = var2.colorString;
                var1['colorString'] = var4;
                var4 = var2.nick;
                var1['nick'] = var4;
                var4 = var2.interaction;
                if(var4) { _fun0005_ip = 590; continue _fun0005 }
 588:
                var4 = null;
 590:
                var1['interaction'] = var4;
                var4 = var2.interactionData;
                if(var4) { _fun0005_ip = 607; continue _fun0005 }
 605:
                var4 = null;
 607:
                var1['interactionData'] = var4;
                var4 = var2.interactionMetadata;
                if(var4) { _fun0005_ip = 624; continue _fun0005 }
 622:
                var4 = null;
 624:
                var1['interactionMetadata'] = var4;
                var4 = var2.interactionError;
                if(var4) { _fun0005_ip = 641; continue _fun0005 }
 639:
                var4 = null;
 641:
                var1['interactionError'] = var4;
                var4 = var2.roleSubscriptionData;
                var1['roleSubscriptionData'] = var4;
                var4 = var2.purchaseNotification;
                var1['purchaseNotification'] = var4;
                var4 = var2.poll;
                var1['poll'] = var4;
                var4 = var2.potions;
                var1['potions'] = var4;
                var4 = var2.referralTrialOfferId;
                if(var4) { _fun0005_ip = 706; continue _fun0005 }
 704:
                var4 = null;
 706:
                var1['referralTrialOfferId'] = var4;
                var4 = var2.gift_info;
                if(!(var3 == var4)) { _fun0005_ip = 728; continue _fun0005 }
 722:
                var4 = var2.giftInfo;
 728:
                var1['giftInfo'] = var4;
                var4 = var2.giftingPrompt;
                if(var4) { _fun0005_ip = 745; continue _fun0005 }
 743:
                var4 = null;
 745:
                var1['giftingPrompt'] = var4;
                var4 = var2.messageSnapshots;
                if(var4) { _fun0005_ip = 764; continue _fun0005 }
 760:
                var4 = new Array(0);
 764:
                var1['messageSnapshots'] = var4;
                var4 = var2.isUnsupported;
                if(var4) { _fun0005_ip = 781; continue _fun0005 }
 779:
                var4 = false;
 781:
                var1['isUnsupported'] = var4;
                var4 = var2.changelog_id;
                if(!(var3 == var4)) { _fun0005_ip = 811; continue _fun0005 }
 797:
                var5 = var2.changelogId;
                if(var5) { _fun0005_ip = 808; continue _fun0005 }
 806:
                var5 = null;
 808:
                var4 = var5;
 811:
                var1['changelogId'] = var4;
                var2 = var2.chatWallpaperInfo;
                if(var2) { _fun0005_ip = 828; continue _fun0005 }
 826:
                var2 = null;
 828:
                var1['chatWallpaperInfo'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'isEdited';
        var5['key'] = var1;
        var1 = function value() {
            var1 = this;
            var2 = var1.editedTimestamp;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(17);
        var1[0] = var5;
        var5 = {};
        var7 = 'getChannelId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.channel_id;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getReaction';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = this;
            var3 = var2.reactions;
            var2 = var3.find;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.emojiEquals;
                var1 = arg1;
                var2 = var1.emoji;
                var1 = _closure3_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getContentMessage';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = this;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var3 = var1.bind(var3)(var2);
                var1 = var2;
                if(!var3) { _fun0006_ip = 56; continue _fun0006 }
 39:
                var3 = var2.messageSnapshots;
                var2 = 0;
                var2 = var3[var2];
                var1 = var2.message;
 56:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'userHasReactedWithEmoji';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var2 = this;
            var3 = var2.reactions;
            var2 = var3.some;
            var1 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var2);
                    var6 = var7.emojiEquals;
                    var5 = var3.emoji;
                    var4 = _closure3_slot0;
                    var4 = var6.bind(var7)(var5, var4);
                    if(var4) { _fun0007_ip = 58; continue _fun0007 }
 56:
                    return var1;
 58:
                    var1 = _closure3_slot1;
                    if(!var1) { _fun0007_ip = 71; continue _fun0007 }
 65:
                    var1 = var3.me;
 71:
                    if(var1) { _fun0007_ip = 93; continue _fun0007 }
 74:
                    var2 = _closure3_slot1;
                    var2 = !var2;
                    if(!var2) { _fun0007_ip = 90; continue _fun0007 }
 84:
                    var2 = var3.me_burst;
 90:
                    var1 = var2;
 93:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'addReaction';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var7 = arg1;
                var6 = arguments[1];
                var5 = arguments[2];
                var2 = arguments[3];
                var4 = this;
                var _closure3_slot0 = var7;
                var9 = undefined;
                if(!(var6 === var9)) { _fun0008_ip = 29; continue _fun0008 }
 27:
                var6 = false;
 29:
                var _closure3_slot1 = var6;
                if(!(var5 === var9)) { _fun0008_ip = 41; continue _fun0008 }
 37:
                var5 = new Array(0);
 41:
                var _closure3_slot2 = var5;
                if(!(var2 === var9)) { _fun0008_ip = 84; continue _fun0008 }
 49:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 10;
                var3 = var10[var3];
                var3 = var8.bind(var9)(var3);
                var3 = var3.ReactionTypes;
                var2 = var3.NORMAL;
 84:
                var _closure3_slot3 = var2;
                var8 = -1;
                var _closure3_slot4 = var8;
                var11 = var4.reactions;
                var10 = var11.map;
                var3 = function(arg1, arg2) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var1 = arg1;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 8;
                        var2 = var3[var2];
                        var3 = undefined;
                        var8 = var4.bind(var3)(var2);
                        var7 = var8.emojiEquals;
                        var6 = var1.emoji;
                        var2 = _closure3_slot0;
                        var6 = var7.bind(var8)(var6, var2);
                        var2 = var1;
                        if(!var6) { _fun0009_ip = 633; continue _fun0009 }
 62:
                        var6 = arg2;
                        _closure3_slot4 = var6;
                        var7 = _closure3_slot3;
                        var9 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var8 = 10;
                        var6 = var6[var8];
                        var6 = var9.bind(var3)(var6);
                        var6 = var6.ReactionTypes;
                        var6 = var6.BURST;
                        if(!(var7 !== var6)) { _fun0009_ip = 442; continue _fun0009 }
 112:
                        var6 = _closure3_slot3;
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var8];
                        var5 = var7.bind(var3)(var5);
                        var5 = var5.ReactionTypes;
                        var5 = var5.VOTE;
                        if(!(var6 !== var5)) { _fun0009_ip = 300; continue _fun0009 }
 152:
                        var5 = _closure3_slot1;
                        if(!var5) { _fun0009_ip = 171; continue _fun0009 }
 159:
                        var5 = var1.me_burst;
                        if(var5) { _fun0009_ip = 298; continue _fun0009 }
 171:
                        var5 = _closure3_slot1;
                        if(!var5) { _fun0009_ip = 187; continue _fun0009 }
 178:
                        var5 = var1.me;
                        if(var5) { _fun0009_ip = 202; continue _fun0009 }
 187:
                        var6 = var1.count;
                        var5 = 1;
                        var8 = var6 + var5;
                        _fun0009_ip = 208; continue _fun0009;
 202:
                        var8 = var1.count;
 208:
                        var5 = {};
                        var11 = var5;
                        var10 = var1;
                        var6 = copyDataProperties(var11, var10);
                        var6 = 'count';
                        var5[var6] = var8;
                        var7 = {};
                        var10 = var1.count_details;
                        var11 = var7;
                        var6 = copyDataProperties(var11, var10);
                        var6 = 'normal';
                        var7[var6] = var8;
                        var6 = 'count_details';
                        var5[var6] = var7;
                        var6 = _closure3_slot1;
                        var6 = !var6;
                        var7 = !var6;
                        if(!var6) { _fun0009_ip = 281; continue _fun0009 }
 275:
                        var7 = var1.me;
 281:
                        var6 = 'me';
                        var5[var6] = var7;
                        var2 = var5;
                        _fun0009_ip = 633; continue _fun0009;
 298:
                        return var1;
 300:
                        var6 = var1.count_details;
                        var5 = null;
                        var7 = var5 == var6;
                        var3 = undefined;
                        if(var7) { _fun0009_ip = 323; continue _fun0009 }
 317:
                        var3 = var6.vote;
 323:
                        var6 = var5 != var3;
                        var5 = 0;
                        if(!var6) { _fun0009_ip = 335; continue _fun0009 }
 332:
                        var5 = var3;
 335:
                        var3 = _closure3_slot1;
                        if(!var3) { _fun0009_ip = 354; continue _fun0009 }
 342:
                        var3 = var1.me_vote;
                        var7 = var5;
                        if(var3) { _fun0009_ip = 361; continue _fun0009 }
 354:
                        var3 = 1;
                        var7 = var5 + var3;
 361:
                        var3 = {};
                        var11 = var3;
                        var10 = var1;
                        var5 = copyDataProperties(var11, var10);
                        var6 = {};
                        var10 = var1.count_details;
                        var11 = var6;
                        var5 = copyDataProperties(var11, var10);
                        var5 = 'vote';
                        var6[var5] = var7;
                        var5 = 'count_details';
                        var3[var5] = var6;
                        var5 = _closure3_slot1;
                        var5 = !var5;
                        var6 = !var5;
                        if(!var5) { _fun0009_ip = 425; continue _fun0009 }
 419:
                        var6 = var1.me_vote;
 425:
                        var5 = 'me_vote';
                        var3[var5] = var6;
                        var2 = var3;
                        _fun0009_ip = 633; continue _fun0009;
 442:
                        var3 = _closure3_slot1;
                        if(!var3) { _fun0009_ip = 461; continue _fun0009 }
 449:
                        var3 = var1.me;
                        if(var3) { _fun0009_ip = 635; continue _fun0009 }
 461:
                        var3 = _closure3_slot1;
                        if(!var3) { _fun0009_ip = 477; continue _fun0009 }
 468:
                        var3 = var1.me_burst;
                        if(var3) { _fun0009_ip = 492; continue _fun0009 }
 477:
                        var5 = var1.burst_count;
                        var3 = 1;
                        var7 = var5 + var3;
                        _fun0009_ip = 498; continue _fun0009;
 492:
                        var7 = var1.burst_count;
 498:
                        var5 = var1.burst_colors;
                        var3 = null;
                        if(!(var3 != var5)) { _fun0009_ip = 527; continue _fun0009 }
 510:
                        var3 = var1.burst_colors;
                        var5 = var3.length;
                        var3 = 0;
                        if(!(!(var5 > var3))) { _fun0009_ip = 533; continue _fun0009 }
 527:
                        var5 = _closure3_slot2;
                        _fun0009_ip = 539; continue _fun0009;
 533:
                        var5 = var1.burst_colors;
 539:
                        var3 = {};
                        var11 = var3;
                        var10 = var1;
                        var6 = copyDataProperties(var11, var10);
                        var4 = _closure3_slot1;
                        var4 = !var4;
                        var6 = !var4;
                        if(!var4) { _fun0009_ip = 570; continue _fun0009 }
 564:
                        var6 = var1.me_burst;
 570:
                        var4 = 'me_burst';
                        var3[var4] = var6;
                        var4 = 'burst_count';
                        var3[var4] = var7;
                        var6 = {};
                        var10 = var1.count_details;
                        var11 = var6;
                        var4 = copyDataProperties(var11, var10);
                        var4 = 'burst';
                        var6[var4] = var7;
                        var4 = 'count_details';
                        var3[var4] = var6;
                        var4 = 'burst_colors';
                        var3[var4] = var5;
                        var2 = var3;
 633:
                        return var2;
 635:
                        return var1;
                    }
                };
                var3 = var10.bind(var11)(var3);
                var1 = _closure3_slot4;
                if(!(var8 === var1)) { _fun0008_ip = 391; continue _fun0008 }
 130:
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var10 = 10;
                var8 = var8[var10];
                var8 = var11.bind(var9)(var8);
                var8 = var8.ReactionTypes;
                var8 = var8.BURST;
                if(!(var2 !== var8)) { _fun0008_ip = 334; continue _fun0008 }
 172:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var10];
                var1 = var8.bind(var9)(var1);
                var1 = var1.ReactionTypes;
                var1 = var1.VOTE;
                if(!(var2 !== var1)) { _fun0008_ip = 267; continue _fun0008 }
 205:
                var2 = var3.push;
                var1 = {'emoji': null, 'me': null, 'me_burst': false, 'count': 1, 'count_details': null, 'burst_count': 0};
                var1['emoji'] = var7;
                var1['me'] = var6;
                var8 = {'burst': 0, 'normal': 1};
                var1['count_details'] = var8;
                var8 = new Array(0);
                var1['burst_colors'] = var8;
                var1 = var2.bind(var3)(var1);
                _fun0008_ip = 391; continue _fun0008;
 267:
                var2 = var3.push;
                var1 = {'emoji': null, 'me': false, 'me_burst': false, 'me_vote': null, 'count': 0, 'count_details': null, 'burst_count': 0};
                var1['emoji'] = var7;
                var1['me_vote'] = var6;
                var8 = {'burst': 0, 'normal': 0, 'vote': 1};
                var1['count_details'] = var8;
                var8 = new Array(0);
                var1['burst_colors'] = var8;
                var1 = var2.bind(var3)(var1);
                _fun0008_ip = 391; continue _fun0008;
 334:
                var2 = var3.push;
                var1 = {'emoji': null, 'me': false, 'me_burst': null, 'count': 0, 'count_details': null, 'burst_count': 1};
                var1['emoji'] = var7;
                var1['me_burst'] = var6;
                var6 = {'burst': 1, 'normal': 0};
                var1['count_details'] = var6;
                var1['burst_colors'] = var5;
                var1 = var2.bind(var3)(var1);
 391:
                var2 = var4.set;
                var1 = 'reactions';
                var1 = var2.bind(var4)(var1, var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'addReactionBatch';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = arg1;
            var2 = arg2;
            var _closure3_slot0 = var2;
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                var2 = arg2;
                var4 = var2.users;
                var3 = var2.emoji;
                var _closure4_slot0 = var3;
                var2 = var2.reactionType;
                var _closure4_slot1 = var2;
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    var6 = arg1;
                    var5 = var6.addReaction;
                    var10 = _closure4_slot0;
                    var2 = _closure3_slot0;
                    var7 = _closure4_slot1;
                    var1 = arg2;
                    var9 = var1 === var2;
                    var8 = new Array(0);
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var1;
                };
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = this;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'removeReaction';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var5 = arguments[1];
                var3 = arguments[2];
                var4 = this;
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = undefined;
                if(!(var5 === var2)) { _fun0010_ip = 26; continue _fun0010 }
 24:
                var5 = false;
 26:
                var _closure3_slot1 = var5;
                if(!(var3 === var2)) { _fun0010_ip = 69; continue _fun0010 }
 34:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 10;
                var5 = var7[var5];
                var5 = var6.bind(var2)(var5);
                var5 = var5.ReactionTypes;
                var3 = var5.NORMAL;
 69:
                var _closure3_slot2 = var3;
                var11 = -1;
                var _closure3_slot3 = var11;
                var6 = var4.reactions;
                var5 = var6.map;
                var3 = function(arg1, arg2) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var5 = arg1;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 8;
                        var1 = var3[var1];
                        var3 = undefined;
                        var8 = var4.bind(var3)(var1);
                        var7 = var8.emojiEquals;
                        var6 = var5.emoji;
                        var1 = _closure3_slot0;
                        var6 = var7.bind(var8)(var6, var1);
                        var1 = var5;
                        if(!var6) { _fun0011_ip = 531; continue _fun0011 }
 62:
                        var7 = _closure3_slot2;
                        var9 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var8 = 10;
                        var6 = var6[var8];
                        var6 = var9.bind(var3)(var6);
                        var6 = var6.ReactionTypes;
                        var6 = var6.BURST;
                        if(!(var7 !== var6)) { _fun0011_ip = 402; continue _fun0011 }
 105:
                        var6 = _closure3_slot2;
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var8];
                        var2 = var7.bind(var3)(var2);
                        var2 = var2.ReactionTypes;
                        var2 = var2.VOTE;
                        if(!(var6 !== var2)) { _fun0011_ip = 266; continue _fun0011 }
 145:
                        var2 = _closure3_slot1;
                        if(!var2) { _fun0011_ip = 169; continue _fun0011 }
 152:
                        var2 = var5.me;
                        if(var2) { _fun0011_ip = 169; continue _fun0011 }
 161:
                        var8 = var5.count;
                        _fun0011_ip = 182; continue _fun0011;
 169:
                        var6 = var5.count;
                        var2 = 1;
                        var8 = var6 - var2;
 182:
                        var2 = {};
                        var11 = var2;
                        var10 = var5;
                        var6 = copyDataProperties(var11, var10);
                        var6 = 'count';
                        var2[var6] = var8;
                        var6 = _closure3_slot1;
                        var7 = !var6;
                        if(!var7) { _fun0011_ip = 219; continue _fun0011 }
 213:
                        var7 = var5.me;
 219:
                        var6 = 'me';
                        var2[var6] = var7;
                        var7 = {};
                        var10 = var5.count_details;
                        var11 = var7;
                        var6 = copyDataProperties(var11, var10);
                        var6 = 'normal';
                        var7[var6] = var8;
                        var6 = 'count_details';
                        var2[var6] = var7;
                        _fun0011_ip = 521; continue _fun0011;
 266:
                        var7 = var5.count_details;
                        var6 = null;
                        var8 = var6 == var7;
                        var3 = undefined;
                        if(var8) { _fun0011_ip = 289; continue _fun0011 }
 283:
                        var3 = var7.vote;
 289:
                        var7 = var6 != var3;
                        var6 = 0;
                        if(!var7) { _fun0011_ip = 301; continue _fun0011 }
 298:
                        var6 = var3;
 301:
                        var3 = _closure3_slot1;
                        if(!var3) { _fun0011_ip = 320; continue _fun0011 }
 308:
                        var3 = var5.me_vote;
                        var8 = var6;
                        if(!var3) { _fun0011_ip = 327; continue _fun0011 }
 320:
                        var3 = 1;
                        var8 = var6 - var3;
 327:
                        var3 = {};
                        var11 = var3;
                        var10 = var5;
                        var6 = copyDataProperties(var11, var10);
                        var7 = {};
                        var10 = var5.count_details;
                        var11 = var7;
                        var6 = copyDataProperties(var11, var10);
                        var6 = 'vote';
                        var7[var6] = var8;
                        var6 = 'count_details';
                        var3[var6] = var7;
                        var6 = _closure3_slot1;
                        var7 = !var6;
                        if(!var7) { _fun0011_ip = 388; continue _fun0011 }
 382:
                        var7 = var5.me_vote;
 388:
                        var6 = 'me_vote';
                        var3[var6] = var7;
                        var2 = var3;
                        _fun0011_ip = 521; continue _fun0011;
 402:
                        var3 = _closure3_slot1;
                        if(!var3) { _fun0011_ip = 426; continue _fun0011 }
 409:
                        var3 = var5.me_burst;
                        if(var3) { _fun0011_ip = 426; continue _fun0011 }
 418:
                        var7 = var5.burst_count;
                        _fun0011_ip = 439; continue _fun0011;
 426:
                        var6 = var5.burst_count;
                        var3 = 1;
                        var7 = var6 - var3;
 439:
                        var3 = {};
                        var11 = var3;
                        var10 = var5;
                        var6 = copyDataProperties(var11, var10);
                        var6 = 'burst_count';
                        var3[var6] = var7;
                        var6 = _closure3_slot1;
                        var8 = !var6;
                        if(!var8) { _fun0011_ip = 476; continue _fun0011 }
 470:
                        var8 = var5.me_burst;
 476:
                        var6 = 'me_burst';
                        var3[var6] = var8;
                        var6 = {};
                        var10 = var5.count_details;
                        var11 = var6;
                        var5 = copyDataProperties(var11, var10);
                        var5 = 'burst';
                        var6[var5] = var7;
                        var5 = 'count_details';
                        var3[var5] = var6;
                        var2 = var3;
 521:
                        var3 = arg2;
                        _closure3_slot3 = var3;
                        var1 = var2;
 531:
                        return var1;
                    }
                };
                var3 = var5.bind(var6)(var3);
                var5 = _closure3_slot3;
                var6 = var3[var5];
                var5 = null;
                if(!(var5 == var6)) { _fun0010_ip = 120; continue _fun0010 }
 118:
                var6 = {};
 120:
                var10 = var6.count;
                var9 = var6.burst_count;
                var12 = var6.count_details;
                var6 = var5 == var12;
                var7 = undefined;
                if(var6) { _fun0010_ip = 153; continue _fun0010 }
 147:
                var7 = var12.normal;
 153:
                var13 = var5 != var7;
                var6 = 0;
                var8 = 0;
                if(!var13) { _fun0010_ip = 167; continue _fun0010 }
 164:
                var8 = var7;
 167:
                var7 = var5 == var12;
                var13 = undefined;
                if(var7) { _fun0010_ip = 182; continue _fun0010 }
 176:
                var13 = var12.burst;
 182:
                var14 = var5 != var13;
                var7 = 0;
                if(!var14) { _fun0010_ip = 194; continue _fun0010 }
 191:
                var7 = var13;
 194:
                var13 = var5 == var12;
                var2 = undefined;
                if(var13) { _fun0010_ip = 209; continue _fun0010 }
 203:
                var2 = var12.vote;
 209:
                var12 = var5 != var2;
                var5 = 0;
                if(!var12) { _fun0010_ip = 221; continue _fun0010 }
 218:
                var5 = var2;
 221:
                var2 = _closure3_slot3;
                var2 = var11 !== var2;
                if(!var2) { _fun0010_ip = 236; continue _fun0010 }
 232:
                var2 = var10 <= var6;
 236:
                if(!var2) { _fun0010_ip = 243; continue _fun0010 }
 239:
                var2 = var9 <= var6;
 243:
                if(!var2) { _fun0010_ip = 250; continue _fun0010 }
 246:
                var2 = var8 <= var6;
 250:
                if(!var2) { _fun0010_ip = 257; continue _fun0010 }
 253:
                var2 = var7 <= var6;
 257:
                if(!var2) { _fun0010_ip = 264; continue _fun0010 }
 260:
                var2 = var5 <= var6;
 264:
                if(!var2) { _fun0010_ip = 286; continue _fun0010 }
 267:
                var5 = var3.splice;
                var2 = _closure3_slot3;
                var1 = 1;
                var1 = var5.bind(var3)(var2, var1);
 286:
                var2 = var4.set;
                var1 = 'reactions';
                var1 = var2.bind(var4)(var1, var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'removeReactionsForEmoji';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = this;
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = var4.set;
            var5 = var4.reactions;
            var2 = var5.filter;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.emojiEquals;
                var1 = arg1;
                var2 = var1.emoji;
                var1 = _closure3_slot0;
                var1 = var3.bind(var4)(var2, var1);
                var1 = !var1;
                return var1;
            };
            var2 = var2.bind(var5)(var1);
            var1 = 'reactions';
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'isSystemDM';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.author;
            var1 = var2.isSystemUser;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'isCommandType';
        var5['key'] = var7;
        var7 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var3 = this;
                var4 = var3.type;
                var1 = _closure1_slot10;
                var1 = var1.CHAT_INPUT_COMMAND;
                var1 = var4 === var1;
                if(var1) { _fun0012_ip = 47; continue _fun0012 }
 28:
                var3 = var3.type;
                var2 = _closure1_slot10;
                var2 = var2.CONTEXT_MENU_COMMAND;
                var1 = var3 === var2;
 47:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'isPoll';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.poll;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'hasPotions';
        var5['key'] = var7;
        var7 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var1 = this;
                var2 = var1.potions;
                var1 = null;
                var4 = var1 == var2;
                var3 = undefined;
                if(var4) { _fun0013_ip = 25; continue _fun0013 }
 20:
                var3 = var2.length;
 25:
                var4 = var1 != var3;
                var2 = 0;
                var1 = 0;
                if(!var4) { _fun0013_ip = 39; continue _fun0013 }
 36:
                var1 = var3;
 39:
                var1 = var1 > var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'isInteractionPlaceholder';
        var5['key'] = var7;
        var7 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var2 = this;
                var3 = var2.interaction;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0014_ip = 34; continue _fun0014 }
 18:
                var3 = var2.author;
                var2 = var3.isNonUserBot;
                var1 = var2.bind(var3)();
 34:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'canDeleteOwnMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var2 = arg1;
                var4 = this;
                var1 = var4.author;
                var1 = var1.id;
                if(!(var1 !== var2)) { _fun0015_ip = 161; continue _fun0015 }
 24:
                var6 = var4.interactionMetadata;
                var1 = null;
                var7 = var1 == var6;
                var5 = undefined;
                var3 = undefined;
                if(var7) { _fun0015_ip = 49; continue _fun0015 }
 43:
                var3 = var6.authorizing_integration_owners;
 49:
                if(!(var1 == var3)) { _fun0015_ip = 55; continue _fun0015 }
 53:
                var3 = {};
 55:
                var4 = var4.interactionMetadata;
                var6 = var1 == var4;
                var1 = undefined;
                if(var6) { _fun0015_ip = 80; continue _fun0015 }
 70:
                var4 = var4.user;
                var1 = var4.id;
 80:
                var1 = var1 === var2;
                if(!var1) { _fun0015_ip = 117; continue _fun0015 }
 87:
                var2 = global;
                var4 = var2.Object;
                var2 = var4.keys;
                var2 = var2.bind(var4)(var3);
                var4 = var2.length;
                var2 = 1;
                var1 = var2 === var4;
 117:
                if(!var1) { _fun0015_ip = 159; continue _fun0015 }
 120:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 11;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ApplicationIntegrationType;
                var2 = var2.USER_INSTALL;
                var1 = var2 in var3;
 159:
                return var1;
 161:
                var1 = true;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'toJS';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = {};
            var6 = var1;
            var5 = var2;
            var3 = copyDataProperties(var6, var5);
            var4 = var2.webhookId;
            var3 = 'webkhook_id';
            var1[var3] = var4;
            var4 = var2.editedTimestamp;
            var3 = 'edited_timestamp';
            var1[var3] = var4;
            var3 = var2.mentionEveryone;
            var2 = 'mention_everyone';
            var1[var2] = var3;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'isFirstMessageInForumPost';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var3 = arg1;
                var1 = this;
                var2 = var1.id;
                var1 = var1.channel_id;
                var1 = var2 === var1;
                if(!var1) { _fun0016_ip = 33; continue _fun0016 }
 23:
                var2 = var3.isForumPost;
                var1 = var2.bind(var3)();
 33:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[16] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var7.bind(var1)(var6);
    var8 = 12;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'records/MessageRecord.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var3['MinimalMessageRecord'] = var6;
    var3['ModeratorReport'] = var5;
    var3['MessageSnapshotRecord'] = var4;
    var2 = function isMessageComponentsV2(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 7;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.hasFlag;
        var2 = arg1;
        var2 = var2.flags;
        var1 = _closure1_slot8;
        var1 = var1.IS_COMPONENTS_V2;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['isMessageComponentsV2'] = var2;
    return var1;
})();