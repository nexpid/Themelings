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
case 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot6;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot5;
            var1 = _closure1_slot13;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = new Array(0);
case 5:
            var5 = _closure1_slot6;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 7: // try_start_0
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
case 8: // try_end0
            _fun0002_ip = 9; continue _fun0002;
case 10: // catch_target0
            CatchBlockStart(arg_register=1);
case 9:
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
case 0:
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
                if(!(var4 == var2)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var5 = _closure1_slot10;
                var2 = var5.DEFAULT;
case 11:
                var1['type'] = var2;
                var5 = var3.content;
                var6 = var4 != var5;
                var2 = '';
                if(!var6) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var2 = var5;
case 13:
                var1['content'] = var2;
                var2 = var3.attachments;
                if(!(var4 == var2)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var2 = new Array(0);
case 15:
                var1['attachments'] = var2;
                var2 = var3.embeds;
                if(!(var4 == var2)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var2 = new Array(0);
case 17:
                var1['embeds'] = var2;
                var2 = var3.timestamp;
                if(!(var4 == var2)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var5 = global;
                var5 = var5.Date;
                var6 = var5.prototype;
                var6 = Object.create(var6, {constructor: {value: var5}});
                var9 = var6;
                var5 = new var9[var5](var8);
                var2 = var5 instanceof Object ? var5 : var6;
case 19:
                var1['timestamp'] = var2;
                var5 = var3.editedTimestamp;
                var6 = var4 != var5;
                var2 = null;
                if(!var6) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                var2 = var5;
case 21:
                var1['editedTimestamp'] = var2;
                var5 = var3.flags;
                var6 = var4 != var5;
                var2 = 0;
                if(!var6) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                var2 = var5;
case 23:
                var1['flags'] = var2;
                var2 = var3.components;
                if(!(var4 == var2)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                var2 = new Array(0);
case 25:
                var1['components'] = var2;
                var2 = var3.codedLinks;
                if(!(var4 == var2)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                var2 = new Array(0);
case 27:
                var1['codedLinks'] = var2;
                var2 = var3.stickers;
                if(!(var4 == var2)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                var2 = new Array(0);
case 29:
                var1['stickers'] = var2;
                var2 = var3.sticker_items;
                if(!(var4 == var2)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                var2 = var3.stickerItems;
case 31:
                if(!(var4 == var2)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                var2 = new Array(0);
case 33:
                var1['stickerItems'] = var2;
                var2 = var3.soundboard_sounds;
                if(!(var4 == var2)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                var2 = var3.soundboardSounds;
case 35:
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
case 0:
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
                if(!var4) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                var2 = var3;
case 37:
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
case 0:
                var3 = arg1;
                var7 = this;
                var1 = _closure1_slot3;
                var6 = _closure2_slot0;
                var2 = undefined;
                var1 = var1.bind(var2)(var7, var6);
                var4 = _closure1_slot12;
                var1 = new Array(1);
                var1[0] = var3;
                var1 = var4.bind(var2)(var7, var6, var1);
                var4 = var3.id;
                var1['id'] = var4;
                var4 = var3.channel_id;
                var1['channel_id'] = var4;
                var4 = var3.author;
                var1['author'] = var4;
                var4 = var3.customRenderedContent;
                var1['customRenderedContent'] = var4;
                var4 = var3.mentions;
                if(var4) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var4 = new Array(0);
case 39:
                var1['mentions'] = var4;
                var4 = var3.mentionRoles;
                if(var4) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                var4 = new Array(0);
case 41:
                var1['mentionRoles'] = var4;
                var4 = var3.mentionChannels;
                if(var4) { _fun0005_ip = 43; continue _fun0005 }
case 20:
                var4 = new Array(0);
case 43:
                var1['mentionChannels'] = var4;
                var4 = var3.mentionGames;
                if(var4) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                var4 = new Array(0);
case 44:
                var1['mentionGames'] = var4;
                var4 = var3.mentioned;
                if(var4) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                var4 = false;
case 46:
                var1['mentioned'] = var4;
                var4 = var3.pinned;
                if(var4) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                var4 = false;
case 48:
                var1['pinned'] = var4;
                var4 = var3.mentionEveryone;
                if(var4) { _fun0005_ip = 50; continue _fun0005 }
case 24:
                var4 = false;
case 50:
                var1['mentionEveryone'] = var4;
                var4 = var3.tts;
                if(var4) { _fun0005_ip = 26; continue _fun0005 }
case 51:
                var4 = false;
case 26:
                var1['tts'] = var4;
                var4 = var3.giftCodes;
                if(var4) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                var4 = new Array(0);
case 52:
                var1['giftCodes'] = var4;
                var4 = var3.state;
                if(var4) { _fun0005_ip = 54; continue _fun0005 }
case 55:
                var5 = _closure1_slot9;
                var4 = var5.SENT;
case 54:
                var1['state'] = var4;
                var5 = var3.nonce;
                var4 = null;
                var6 = var4 != var5;
                var2 = undefined;
                if(!var6) { _fun0005_ip = 56; continue _fun0005 }
case 31:
                var2 = var5;
case 56:
                var1['nonce'] = var2;
                var2 = var3.blocked;
                if(var2) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                var2 = false;
case 57:
                var1['blocked'] = var2;
                var2 = var3.ignored;
                if(var2) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                var2 = false;
case 59:
                var1['ignored'] = var2;
                var2 = var3.call;
                if(var2) { _fun0005_ip = 61; continue _fun0005 }
case 62:
                var2 = null;
case 61:
                var1['call'] = var2;
                var2 = var3.bot;
                if(var2) { _fun0005_ip = 63; continue _fun0005 }
case 64:
                var2 = false;
case 63:
                var1['bot'] = var2;
                var2 = var3.webhookId;
                if(var2) { _fun0005_ip = 65; continue _fun0005 }
case 66:
                var2 = null;
case 65:
                var1['webhookId'] = var2;
                var2 = var3.reactions;
                if(var2) { _fun0005_ip = 67; continue _fun0005 }
case 68:
                var2 = new Array(0);
case 67:
                var1['reactions'] = var2;
                var2 = var3.application_id;
                if(var2) { _fun0005_ip = 69; continue _fun0005 }
case 70:
                var2 = var3.applicationId;
case 69:
                if(var2) { _fun0005_ip = 71; continue _fun0005 }
case 72:
                var2 = null;
case 71:
                var1['applicationId'] = var2;
                var2 = var3.application;
                if(var2) { _fun0005_ip = 73; continue _fun0005 }
case 74:
                var2 = null;
case 73:
                var1['application'] = var2;
                var2 = var3.activity;
                if(var2) { _fun0005_ip = 75; continue _fun0005 }
case 76:
                var2 = null;
case 75:
                var1['activity'] = var2;
                var2 = var3.activity_instance;
                if(var2) { _fun0005_ip = 77; continue _fun0005 }
case 78:
                var2 = var3.activityInstance;
case 77:
                if(var2) { _fun0005_ip = 79; continue _fun0005 }
case 80:
                var2 = null;
case 79:
                var1['activityInstance'] = var2;
                var2 = var3.messageReference;
                if(var2) { _fun0005_ip = 81; continue _fun0005 }
case 82:
                var2 = null;
case 81:
                var1['messageReference'] = var2;
                var2 = var3.hit;
                if(var2) { _fun0005_ip = 83; continue _fun0005 }
case 84:
                var2 = var3.isSearchHit;
case 83:
                if(var2) { _fun0005_ip = 85; continue _fun0005 }
case 86:
                var2 = false;
case 85:
                var1['isSearchHit'] = var2;
                var2 = var3.loggingName;
                if(var2) { _fun0005_ip = 87; continue _fun0005 }
case 88:
                var2 = null;
case 87:
                var1['loggingName'] = var2;
                var2 = var3.colorString;
                var1['colorString'] = var2;
                var2 = var3.nick;
                var1['nick'] = var2;
                var2 = var3.interaction;
                if(var2) { _fun0005_ip = 89; continue _fun0005 }
case 90:
                var2 = null;
case 89:
                var1['interaction'] = var2;
                var2 = var3.interactionData;
                if(var2) { _fun0005_ip = 91; continue _fun0005 }
case 92:
                var2 = null;
case 91:
                var1['interactionData'] = var2;
                var2 = var3.interactionMetadata;
                if(var2) { _fun0005_ip = 93; continue _fun0005 }
case 94:
                var2 = null;
case 93:
                var1['interactionMetadata'] = var2;
                var2 = var3.interactionError;
                if(var2) { _fun0005_ip = 95; continue _fun0005 }
case 96:
                var2 = null;
case 95:
                var1['interactionError'] = var2;
                var2 = var3.roleSubscriptionData;
                var1['roleSubscriptionData'] = var2;
                var2 = var3.purchaseNotification;
                var1['purchaseNotification'] = var2;
                var2 = var3.poll;
                var1['poll'] = var2;
                var2 = var3.shared_client_theme;
                if(var2) { _fun0005_ip = 97; continue _fun0005 }
case 98:
                var2 = var3.sharedClientTheme;
case 97:
                var1['sharedClientTheme'] = var2;
                var2 = var3.potions;
                var1['potions'] = var2;
                var2 = var3.referralTrialOfferId;
                if(var2) { _fun0005_ip = 99; continue _fun0005 }
case 100:
                var2 = null;
case 99:
                var1['referralTrialOfferId'] = var2;
                var2 = var3.gift_info;
                if(!(var4 == var2)) { _fun0005_ip = 101; continue _fun0005 }
case 102:
                var2 = var3.giftInfo;
case 101:
                var1['giftInfo'] = var2;
                var2 = var3.giftingPrompt;
                if(var2) { _fun0005_ip = 103; continue _fun0005 }
case 104:
                var2 = null;
case 103:
                var1['giftingPrompt'] = var2;
                var2 = var3.messageSnapshots;
                if(var2) { _fun0005_ip = 105; continue _fun0005 }
case 106:
                var2 = new Array(0);
case 105:
                var1['messageSnapshots'] = var2;
                var2 = var3.isUnsupported;
                if(var2) { _fun0005_ip = 107; continue _fun0005 }
case 108:
                var2 = false;
case 107:
                var1['isUnsupported'] = var2;
                var2 = var3.changelog_id;
                if(!(var4 == var2)) { _fun0005_ip = 109; continue _fun0005 }
case 110:
                var3 = var3.changelogId;
                if(var3) { _fun0005_ip = 111; continue _fun0005 }
case 112:
                var3 = null;
case 111:
                var2 = var3;
case 109:
                var1['changelogId'] = var2;
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
case 0:
                var2 = this;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var3 = var1.bind(var3)(var2);
                var1 = var2;
                if(!var3) { _fun0006_ip = 113; continue _fun0006 }
case 114:
                var3 = var2.messageSnapshots;
                var2 = 0;
                var2 = var3[var2];
                var1 = var2.message;
case 113:
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
case 0:
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
                    if(var4) { _fun0007_ip = 115; continue _fun0007 }
case 116:
                    return var1;
case 115:
                    var1 = _closure3_slot1;
                    if(!var1) { _fun0007_ip = 8; continue _fun0007 }
case 117:
                    var1 = var3.me;
case 8:
                    if(var1) { _fun0007_ip = 4; continue _fun0007 }
case 118:
                    var2 = _closure3_slot1;
                    var2 = !var2;
                    if(!var2) { _fun0007_ip = 119; continue _fun0007 }
case 120:
                    var2 = var3.me_burst;
case 119:
                    var1 = var2;
case 4:
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
case 0:
                var7 = arg1;
                var6 = arguments[1];
                var5 = arguments[2];
                var2 = arguments[3];
                var4 = this;
                var _closure3_slot0 = var7;
                var9 = undefined;
                if(!(var6 === var9)) { _fun0008_ip = 121; continue _fun0008 }
case 122:
                var6 = false;
case 121:
                var _closure3_slot1 = var6;
                if(!(var5 === var9)) { _fun0008_ip = 123; continue _fun0008 }
case 124:
                var5 = new Array(0);
case 123:
                var _closure3_slot2 = var5;
                if(!(var2 === var9)) { _fun0008_ip = 13; continue _fun0008 }
case 12:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 10;
                var3 = var10[var3];
                var3 = var8.bind(var9)(var3);
                var3 = var3.ReactionTypes;
                var2 = var3.NORMAL;
case 13:
                var _closure3_slot3 = var2;
                var8 = -1;
                var _closure3_slot4 = var8;
                var11 = var4.reactions;
                var10 = var11.map;
                var3 = function(arg1, arg2) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
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
                        if(!var6) { _fun0009_ip = 125; continue _fun0009 }
case 126:
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
                        if(!(var7 !== var6)) { _fun0009_ip = 127; continue _fun0009 }
case 128:
                        var6 = _closure3_slot3;
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var8];
                        var5 = var7.bind(var3)(var5);
                        var5 = var5.ReactionTypes;
                        var5 = var5.VOTE;
                        if(!(var6 !== var5)) { _fun0009_ip = 129; continue _fun0009 }
case 130:
                        var5 = _closure3_slot1;
                        if(!var5) { _fun0009_ip = 131; continue _fun0009 }
case 132:
                        var5 = var1.me_burst;
                        if(var5) { _fun0009_ip = 31; continue _fun0009 }
case 131:
                        var5 = _closure3_slot1;
                        if(!var5) { _fun0009_ip = 133; continue _fun0009 }
case 134:
                        var5 = var1.me;
                        if(var5) { _fun0009_ip = 135; continue _fun0009 }
case 133:
                        var6 = var1.count;
                        var5 = 1;
                        var8 = var6 + var5;
                        _fun0009_ip = 136; continue _fun0009;
case 135:
                        var8 = var1.count;
case 136:
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
                        if(!var6) { _fun0009_ip = 137; continue _fun0009 }
case 54:
                        var7 = var1.me;
case 137:
                        var6 = 'me';
                        var5[var6] = var7;
                        var2 = var5;
                        _fun0009_ip = 125; continue _fun0009;
case 31:
                        return var1;
case 129:
                        var6 = var1.count_details;
                        var5 = null;
                        var7 = var5 == var6;
                        var3 = undefined;
                        if(var7) { _fun0009_ip = 138; continue _fun0009 }
case 139:
                        var3 = var6.vote;
case 138:
                        var6 = var5 != var3;
                        var5 = 0;
                        if(!var6) { _fun0009_ip = 59; continue _fun0009 }
case 140:
                        var5 = var3;
case 59:
                        var3 = _closure3_slot1;
                        if(!var3) { _fun0009_ip = 141; continue _fun0009 }
case 142:
                        var3 = var1.me_vote;
                        var7 = var5;
                        if(var3) { _fun0009_ip = 143; continue _fun0009 }
case 141:
                        var3 = 1;
                        var7 = var5 + var3;
case 143:
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
                        if(!var5) { _fun0009_ip = 144; continue _fun0009 }
case 70:
                        var6 = var1.me_vote;
case 144:
                        var5 = 'me_vote';
                        var3[var5] = var6;
                        var2 = var3;
                        _fun0009_ip = 125; continue _fun0009;
case 127:
                        var3 = _closure3_slot1;
                        if(!var3) { _fun0009_ip = 145; continue _fun0009 }
case 146:
                        var3 = var1.me;
                        if(var3) { _fun0009_ip = 147; continue _fun0009 }
case 145:
                        var3 = _closure3_slot1;
                        if(!var3) { _fun0009_ip = 78; continue _fun0009 }
case 148:
                        var3 = var1.me_burst;
                        if(var3) { _fun0009_ip = 149; continue _fun0009 }
case 78:
                        var5 = var1.burst_count;
                        var3 = 1;
                        var7 = var5 + var3;
                        _fun0009_ip = 150; continue _fun0009;
case 149:
                        var7 = var1.burst_count;
case 150:
                        var5 = var1.burst_colors;
                        var3 = null;
                        if(!(var3 != var5)) { _fun0009_ip = 151; continue _fun0009 }
case 152:
                        var3 = var1.burst_colors;
                        var5 = var3.length;
                        var3 = 0;
                        if(!(!(var5 > var3))) { _fun0009_ip = 85; continue _fun0009 }
case 151:
                        var5 = _closure3_slot2;
                        _fun0009_ip = 153; continue _fun0009;
case 85:
                        var5 = var1.burst_colors;
case 153:
                        var3 = {};
                        var11 = var3;
                        var10 = var1;
                        var6 = copyDataProperties(var11, var10);
                        var4 = _closure3_slot1;
                        var4 = !var4;
                        var6 = !var4;
                        if(!var4) { _fun0009_ip = 154; continue _fun0009 }
case 155:
                        var6 = var1.me_burst;
case 154:
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
case 125:
                        return var2;
case 147:
                        return var1;
                    }
                };
                var3 = var10.bind(var11)(var3);
                var1 = _closure3_slot4;
                if(!(var8 === var1)) { _fun0008_ip = 67; continue _fun0008 }
case 156:
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var10 = 10;
                var8 = var8[var10];
                var8 = var11.bind(var9)(var8);
                var8 = var8.ReactionTypes;
                var8 = var8.BURST;
                if(!(var2 !== var8)) { _fun0008_ip = 157; continue _fun0008 }
case 158:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var10];
                var1 = var8.bind(var9)(var1);
                var1 = var1.ReactionTypes;
                var1 = var1.VOTE;
                if(!(var2 !== var1)) { _fun0008_ip = 29; continue _fun0008 }
case 159:
                var2 = var3.push;
                var1 = {'emoji': null, 'me': null, 'me_burst': false, 'count': 1, 'count_details': null, 'burst_count': 0};
                var1['emoji'] = var7;
                var1['me'] = var6;
                var8 = {'burst': 0, 'normal': 1};
                var1['count_details'] = var8;
                var8 = new Array(0);
                var1['burst_colors'] = var8;
                var1 = var2.bind(var3)(var1);
                _fun0008_ip = 67; continue _fun0008;
case 29:
                var2 = var3.push;
                var1 = {'emoji': null, 'me': false, 'me_burst': false, 'me_vote': null, 'count': 0, 'count_details': null, 'burst_count': 0};
                var1['emoji'] = var7;
                var1['me_vote'] = var6;
                var8 = {'burst': 0, 'normal': 0, 'vote': 1};
                var1['count_details'] = var8;
                var8 = new Array(0);
                var1['burst_colors'] = var8;
                var1 = var2.bind(var3)(var1);
                _fun0008_ip = 67; continue _fun0008;
case 157:
                var2 = var3.push;
                var1 = {'emoji': null, 'me': false, 'me_burst': null, 'count': 0, 'count_details': null, 'burst_count': 1};
                var1['emoji'] = var7;
                var1['me_burst'] = var6;
                var6 = {'burst': 1, 'normal': 0};
                var1['count_details'] = var6;
                var1['burst_colors'] = var5;
                var1 = var2.bind(var3)(var1);
case 67:
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
case 0:
                var5 = arguments[1];
                var3 = arguments[2];
                var4 = this;
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = undefined;
                if(!(var5 === var2)) { _fun0010_ip = 160; continue _fun0010 }
case 161:
                var5 = false;
case 160:
                var _closure3_slot1 = var5;
                if(!(var3 === var2)) { _fun0010_ip = 162; continue _fun0010 }
case 163:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 10;
                var5 = var7[var5];
                var5 = var6.bind(var2)(var5);
                var5 = var5.ReactionTypes;
                var3 = var5.NORMAL;
case 162:
                var _closure3_slot2 = var3;
                var11 = -1;
                var _closure3_slot3 = var11;
                var6 = var4.reactions;
                var5 = var6.map;
                var3 = function(arg1, arg2) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
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
                        if(!var6) { _fun0011_ip = 86; continue _fun0011 }
case 126:
                        var7 = _closure3_slot2;
                        var9 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var8 = 10;
                        var6 = var6[var8];
                        var6 = var9.bind(var3)(var6);
                        var6 = var6.ReactionTypes;
                        var6 = var6.BURST;
                        if(!(var7 !== var6)) { _fun0011_ip = 164; continue _fun0011 }
case 15:
                        var6 = _closure3_slot2;
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var8];
                        var2 = var7.bind(var3)(var2);
                        var2 = var2.ReactionTypes;
                        var2 = var2.VOTE;
                        if(!(var6 !== var2)) { _fun0011_ip = 165; continue _fun0011 }
case 43:
                        var2 = _closure3_slot1;
                        if(!var2) { _fun0011_ip = 19; continue _fun0011 }
case 130:
                        var2 = var5.me;
                        if(var2) { _fun0011_ip = 19; continue _fun0011 }
case 166:
                        var8 = var5.count;
                        _fun0011_ip = 167; continue _fun0011;
case 19:
                        var6 = var5.count;
                        var2 = 1;
                        var8 = var6 - var2;
case 167:
                        var2 = {};
                        var11 = var2;
                        var10 = var5;
                        var6 = copyDataProperties(var11, var10);
                        var6 = 'count';
                        var2[var6] = var8;
                        var6 = _closure3_slot1;
                        var7 = !var6;
                        if(!var7) { _fun0011_ip = 168; continue _fun0011 }
case 24:
                        var7 = var5.me;
case 168:
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
                        _fun0011_ip = 169; continue _fun0011;
case 165:
                        var7 = var5.count_details;
                        var6 = null;
                        var8 = var6 == var7;
                        var3 = undefined;
                        if(var8) { _fun0011_ip = 170; continue _fun0011 }
case 171:
                        var3 = var7.vote;
case 170:
                        var7 = var6 != var3;
                        var6 = 0;
                        if(!var7) { _fun0011_ip = 56; continue _fun0011 }
case 31:
                        var6 = var3;
case 56:
                        var3 = _closure3_slot1;
                        if(!var3) { _fun0011_ip = 172; continue _fun0011 }
case 173:
                        var3 = var5.me_vote;
                        var8 = var6;
                        if(!var3) { _fun0011_ip = 174; continue _fun0011 }
case 172:
                        var3 = 1;
                        var8 = var6 - var3;
case 174:
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
                        if(!var7) { _fun0011_ip = 175; continue _fun0011 }
case 176:
                        var7 = var5.me_vote;
case 175:
                        var6 = 'me_vote';
                        var3[var6] = var7;
                        var2 = var3;
                        _fun0011_ip = 169; continue _fun0011;
case 164:
                        var3 = _closure3_slot1;
                        if(!var3) { _fun0011_ip = 177; continue _fun0011 }
case 178:
                        var3 = var5.me_burst;
                        if(var3) { _fun0011_ip = 177; continue _fun0011 }
case 179:
                        var7 = var5.burst_count;
                        _fun0011_ip = 180; continue _fun0011;
case 177:
                        var6 = var5.burst_count;
                        var3 = 1;
                        var7 = var6 - var3;
case 180:
                        var3 = {};
                        var11 = var3;
                        var10 = var5;
                        var6 = copyDataProperties(var11, var10);
                        var6 = 'burst_count';
                        var3[var6] = var7;
                        var6 = _closure3_slot1;
                        var8 = !var6;
                        if(!var8) { _fun0011_ip = 181; continue _fun0011 }
case 182:
                        var8 = var5.me_burst;
case 181:
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
case 169:
                        var3 = arg2;
                        _closure3_slot3 = var3;
                        var1 = var2;
case 86:
                        return var1;
                    }
                };
                var3 = var5.bind(var6)(var3);
                var5 = _closure3_slot3;
                var6 = var3[var5];
                var5 = null;
                if(!(var5 == var6)) { _fun0010_ip = 18; continue _fun0010 }
case 183:
                var6 = {};
case 18:
                var10 = var6.count;
                var9 = var6.burst_count;
                var12 = var6.count_details;
                var6 = var5 == var12;
                var7 = undefined;
                if(var6) { _fun0010_ip = 184; continue _fun0010 }
case 185:
                var7 = var12.normal;
case 184:
                var13 = var5 != var7;
                var6 = 0;
                var8 = 0;
                if(!var13) { _fun0010_ip = 186; continue _fun0010 }
case 187:
                var8 = var7;
case 186:
                var7 = var5 == var12;
                var13 = undefined;
                if(var7) { _fun0010_ip = 188; continue _fun0010 }
case 189:
                var13 = var12.burst;
case 188:
                var14 = var5 != var13;
                var7 = 0;
                if(!var14) { _fun0010_ip = 190; continue _fun0010 }
case 191:
                var7 = var13;
case 190:
                var13 = var5 == var12;
                var2 = undefined;
                if(var13) { _fun0010_ip = 192; continue _fun0010 }
case 193:
                var2 = var12.vote;
case 192:
                var12 = var5 != var2;
                var5 = 0;
                if(!var12) { _fun0010_ip = 194; continue _fun0010 }
case 168:
                var5 = var2;
case 194:
                var2 = _closure3_slot3;
                var2 = var11 !== var2;
                if(!var2) { _fun0010_ip = 195; continue _fun0010 }
case 196:
                var2 = var10 <= var6;
case 195:
                if(!var2) { _fun0010_ip = 197; continue _fun0010 }
case 198:
                var2 = var9 <= var6;
case 197:
                if(!var2) { _fun0010_ip = 52; continue _fun0010 }
case 53:
                var2 = var8 <= var6;
case 52:
                if(!var2) { _fun0010_ip = 199; continue _fun0010 }
case 200:
                var2 = var7 <= var6;
case 199:
                if(!var2) { _fun0010_ip = 55; continue _fun0010 }
case 201:
                var2 = var5 <= var6;
case 55:
                if(!var2) { _fun0010_ip = 202; continue _fun0010 }
case 203:
                var5 = var3.splice;
                var2 = _closure3_slot3;
                var1 = 1;
                var1 = var5.bind(var3)(var2, var1);
case 202:
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
case 0:
                var3 = this;
                var4 = var3.type;
                var1 = _closure1_slot10;
                var1 = var1.CHAT_INPUT_COMMAND;
                var1 = var4 === var1;
                if(var1) { _fun0012_ip = 204; continue _fun0012 }
case 205:
                var3 = var3.type;
                var2 = _closure1_slot10;
                var2 = var2.CONTEXT_MENU_COMMAND;
                var1 = var3 === var2;
case 204:
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
case 0:
                var1 = this;
                var2 = var1.potions;
                var1 = null;
                var4 = var1 == var2;
                var3 = undefined;
                if(var4) { _fun0013_ip = 206; continue _fun0013 }
case 207:
                var3 = var2.length;
case 206:
                var4 = var1 != var3;
                var2 = 0;
                var1 = 0;
                if(!var4) { _fun0013_ip = 114; continue _fun0013 }
case 208:
                var1 = var3;
case 114:
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
case 0:
                var2 = this;
                var3 = var2.interaction;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0014_ip = 163; continue _fun0014 }
case 209:
                var3 = var2.author;
                var2 = var3.isNonUserBot;
                var1 = var2.bind(var3)();
case 163:
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
case 0:
                var2 = arg1;
                var4 = this;
                var1 = var4.author;
                var1 = var1.id;
                if(!(var1 !== var2)) { _fun0015_ip = 210; continue _fun0015 }
case 161:
                var6 = var4.interactionMetadata;
                var1 = null;
                var7 = var1 == var6;
                var5 = undefined;
                var3 = undefined;
                if(var7) { _fun0015_ip = 12; continue _fun0015 }
case 211:
                var3 = var6.authorizing_integration_owners;
case 12:
                if(!(var1 == var3)) { _fun0015_ip = 116; continue _fun0015 }
case 212:
                var3 = {};
case 116:
                var4 = var4.interactionMetadata;
                var6 = var1 == var4;
                var1 = undefined;
                if(var6) { _fun0015_ip = 213; continue _fun0015 }
case 8:
                var4 = var4.user;
                var1 = var4.id;
case 213:
                var1 = var1 === var2;
                if(!var1) { _fun0015_ip = 214; continue _fun0015 }
case 215:
                var2 = global;
                var4 = var2.Object;
                var2 = var4.keys;
                var2 = var2.bind(var4)(var3);
                var4 = var2.length;
                var2 = 1;
                var1 = var2 === var4;
case 214:
                if(!var1) { _fun0015_ip = 45; continue _fun0015 }
case 18:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 11;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ApplicationIntegrationType;
                var2 = var2.USER_INSTALL;
                var1 = var2 in var3;
case 45:
                return var1;
case 210:
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
case 0:
                var3 = arg1;
                var1 = this;
                var2 = var1.id;
                var1 = var1.channel_id;
                var1 = var2 === var1;
                if(!var1) { _fun0016_ip = 216; continue _fun0016 }
case 217:
                var2 = var3.isForumPost;
                var1 = var2.bind(var3)();
case 216:
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