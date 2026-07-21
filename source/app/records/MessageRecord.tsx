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
                var4 = arg1;
                var7 = this;
                var1 = _closure1_slot3;
                var6 = _closure2_slot0;
                var3 = undefined;
                var1 = var1.bind(var3)(var7, var6);
                var2 = _closure1_slot12;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var2.bind(var3)(var7, var6, var1);
                var2 = var4.id;
                var1['id'] = var2;
                var2 = var4.channel_id;
                var1['channel_id'] = var2;
                var2 = var4.author;
                var1['author'] = var2;
                var2 = var4.customRenderedContent;
                var1['customRenderedContent'] = var2;
                var2 = var4.mentions;
                if(var2) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var2 = new Array(0);
case 39:
                var1['mentions'] = var2;
                var2 = var4.mentionRoles;
                if(var2) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                var2 = new Array(0);
case 41:
                var1['mentionRoles'] = var2;
                var2 = var4.mentionChannels;
                if(var2) { _fun0005_ip = 43; continue _fun0005 }
case 20:
                var2 = new Array(0);
case 43:
                var1['mentionChannels'] = var2;
                var7 = var4.mentionGames;
                var2 = global;
                var6 = var2.Map;
                var6 = var7 instanceof var6;
                if(var6) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                var7 = var2.Map;
                var8 = var4.mentionGames;
                var2 = null;
                if(!(var2 == var8)) { _fun0005_ip = 46; continue _fun0005 }
case 22:
                var8 = new Array(0);
case 46:
                var6 = var8.map;
                var2 = function(arg1) {
                    var2 = arg1;
                    var3 = var2.id;
                    var1 = new Array(2);
                    var1[0] = var3;
                    var1[1] = var2;
                    return var1;
                };
                var11 = var6.bind(var8)(var2);
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var12 = var6;
                var2 = new var12[var7](var11, var10);
                var2 = var2 instanceof Object ? var2 : var6;
                _fun0005_ip = 47; continue _fun0005;
case 44:
                var2 = var4.mentionGames;
case 47:
                var1['mentionGames'] = var2;
                var2 = var4.mentioned;
                if(var2) { _fun0005_ip = 27; continue _fun0005 }
case 48:
                var2 = false;
case 27:
                var1['mentioned'] = var2;
                var2 = var4.pinned;
                if(var2) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                var2 = false;
case 49:
                var1['pinned'] = var2;
                var2 = var4.mentionEveryone;
                if(var2) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                var2 = false;
case 51:
                var1['mentionEveryone'] = var2;
                var2 = var4.tts;
                if(var2) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                var2 = false;
case 53:
                var1['tts'] = var2;
                var2 = var4.giftCodes;
                if(var2) { _fun0005_ip = 55; continue _fun0005 }
case 36:
                var2 = new Array(0);
case 55:
                var1['giftCodes'] = var2;
                var2 = var4.state;
                if(var2) { _fun0005_ip = 56; continue _fun0005 }
case 57:
                var5 = _closure1_slot9;
                var2 = var5.SENT;
case 56:
                var1['state'] = var2;
                var6 = var4.nonce;
                var2 = null;
                var7 = var2 != var6;
                var5 = undefined;
                if(!var7) { _fun0005_ip = 58; continue _fun0005 }
case 59:
                var5 = var6;
case 58:
                var1['nonce'] = var5;
                var5 = var4.blocked;
                if(var5) { _fun0005_ip = 60; continue _fun0005 }
case 61:
                var5 = false;
case 60:
                var1['blocked'] = var5;
                var5 = var4.ignored;
                if(var5) { _fun0005_ip = 62; continue _fun0005 }
case 63:
                var5 = false;
case 62:
                var1['ignored'] = var5;
                var5 = var4.call;
                if(var5) { _fun0005_ip = 64; continue _fun0005 }
case 65:
                var5 = null;
case 64:
                var1['call'] = var5;
                var5 = var4.bot;
                if(var5) { _fun0005_ip = 66; continue _fun0005 }
case 67:
                var5 = false;
case 66:
                var1['bot'] = var5;
                var5 = var4.webhookId;
                if(var5) { _fun0005_ip = 68; continue _fun0005 }
case 69:
                var5 = null;
case 68:
                var1['webhookId'] = var5;
                var5 = var4.reactions;
                if(var5) { _fun0005_ip = 70; continue _fun0005 }
case 71:
                var5 = new Array(0);
case 70:
                var1['reactions'] = var5;
                var5 = var4.application_id;
                if(var5) { _fun0005_ip = 72; continue _fun0005 }
case 73:
                var5 = var4.applicationId;
case 72:
                if(var5) { _fun0005_ip = 74; continue _fun0005 }
case 75:
                var5 = null;
case 74:
                var1['applicationId'] = var5;
                var5 = var4.application;
                if(var5) { _fun0005_ip = 76; continue _fun0005 }
case 77:
                var5 = null;
case 76:
                var1['application'] = var5;
                var5 = var4.activity;
                if(var5) { _fun0005_ip = 78; continue _fun0005 }
case 79:
                var5 = null;
case 78:
                var1['activity'] = var5;
                var5 = var4.activity_instance;
                if(var5) { _fun0005_ip = 80; continue _fun0005 }
case 81:
                var5 = var4.activityInstance;
case 80:
                if(var5) { _fun0005_ip = 82; continue _fun0005 }
case 83:
                var5 = null;
case 82:
                var1['activityInstance'] = var5;
                var5 = var4.messageReference;
                if(var5) { _fun0005_ip = 84; continue _fun0005 }
case 85:
                var5 = null;
case 84:
                var1['messageReference'] = var5;
                var5 = var4.hit;
                if(var5) { _fun0005_ip = 86; continue _fun0005 }
case 87:
                var5 = var4.isSearchHit;
case 86:
                if(var5) { _fun0005_ip = 88; continue _fun0005 }
case 89:
                var5 = false;
case 88:
                var1['isSearchHit'] = var5;
                var5 = var4.loggingName;
                if(var5) { _fun0005_ip = 90; continue _fun0005 }
case 91:
                var5 = null;
case 90:
                var1['loggingName'] = var5;
                var5 = var4.colorString;
                var1['colorString'] = var5;
                var5 = var4.nick;
                var1['nick'] = var5;
                var5 = var4.interaction;
                if(var5) { _fun0005_ip = 92; continue _fun0005 }
case 93:
                var5 = null;
case 92:
                var1['interaction'] = var5;
                var5 = var4.interactionData;
                if(var5) { _fun0005_ip = 94; continue _fun0005 }
case 95:
                var5 = null;
case 94:
                var1['interactionData'] = var5;
                var5 = var4.interactionMetadata;
                if(var5) { _fun0005_ip = 96; continue _fun0005 }
case 97:
                var5 = null;
case 96:
                var1['interactionMetadata'] = var5;
                var5 = var4.interactionError;
                if(var5) { _fun0005_ip = 98; continue _fun0005 }
case 99:
                var5 = null;
case 98:
                var1['interactionError'] = var5;
                var5 = var4.roleSubscriptionData;
                var1['roleSubscriptionData'] = var5;
                var5 = var4.purchaseNotification;
                var1['purchaseNotification'] = var5;
                var5 = var4.poll;
                var1['poll'] = var5;
                var5 = var4.shared_client_theme;
                if(var5) { _fun0005_ip = 100; continue _fun0005 }
case 101:
                var5 = var4.sharedClientTheme;
case 100:
                var1['sharedClientTheme'] = var5;
                var5 = var4.referralTrialOfferId;
                if(var5) { _fun0005_ip = 102; continue _fun0005 }
case 103:
                var5 = null;
case 102:
                var1['referralTrialOfferId'] = var5;
                var5 = var4.premiumGroupInviteId;
                if(var5) { _fun0005_ip = 104; continue _fun0005 }
case 105:
                var5 = null;
case 104:
                var1['premiumGroupInviteId'] = var5;
                var5 = var4.gift_info;
                if(!(var2 == var5)) { _fun0005_ip = 106; continue _fun0005 }
case 107:
                var5 = var4.giftInfo;
case 106:
                var1['giftInfo'] = var5;
                var5 = var4.giftingPrompt;
                if(var5) { _fun0005_ip = 108; continue _fun0005 }
case 109:
                var5 = null;
case 108:
                var1['giftingPrompt'] = var5;
                var5 = var4.boostingPrompt;
                if(var5) { _fun0005_ip = 110; continue _fun0005 }
case 111:
                var5 = null;
case 110:
                var1['boostingPrompt'] = var5;
                var5 = var4.messageSnapshots;
                if(var5) { _fun0005_ip = 112; continue _fun0005 }
case 113:
                var5 = new Array(0);
case 112:
                var1['messageSnapshots'] = var5;
                var5 = var4.isUnsupported;
                if(var5) { _fun0005_ip = 114; continue _fun0005 }
case 115:
                var5 = false;
case 114:
                var1['isUnsupported'] = var5;
                var5 = var4.changelog_id;
                if(!(var2 == var5)) { _fun0005_ip = 116; continue _fun0005 }
case 117:
                var6 = var4.changelogId;
                if(var6) { _fun0005_ip = 118; continue _fun0005 }
case 119:
                var6 = null;
case 118:
                var5 = var6;
case 116:
                var1['changelogId'] = var5;
                var6 = var4.media_mention;
                if(!(var2 == var6)) { _fun0005_ip = 120; continue _fun0005 }
case 121:
                var6 = var4.mediaMention;
case 120:
                var7 = var2 != var6;
                var5 = null;
                if(!var7) { _fun0005_ip = 122; continue _fun0005 }
case 123:
                var5 = var6;
case 122:
                var1['mediaMention'] = var5;
                var5 = var4.lobby_member;
                var6 = var2 == var5;
                var3 = undefined;
                if(var6) { _fun0005_ip = 124; continue _fun0005 }
case 125:
                var3 = var5.additional_name;
case 124:
                if(!(var2 == var3)) { _fun0005_ip = 126; continue _fun0005 }
case 127:
                var3 = var4.additionalName;
case 126:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0005_ip = 128; continue _fun0005 }
case 129:
                var2 = var3;
case 128:
                var1['additionalName'] = var2;
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
        var1 = new Array(16);
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
                if(!var3) { _fun0006_ip = 130; continue _fun0006 }
case 131:
                var3 = var2.messageSnapshots;
                var2 = 0;
                var2 = var3[var2];
                var1 = var2.message;
case 130:
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
                    if(var4) { _fun0007_ip = 132; continue _fun0007 }
case 130:
                    return var1;
case 132:
                    var1 = _closure3_slot1;
                    if(!var1) { _fun0007_ip = 5; continue _fun0007 }
case 133:
                    var1 = var3.me;
case 5:
                    if(var1) { _fun0007_ip = 134; continue _fun0007 }
case 9:
                    var2 = _closure3_slot1;
                    var2 = !var2;
                    if(!var2) { _fun0007_ip = 135; continue _fun0007 }
case 13:
                    var2 = var3.me_burst;
case 135:
                    var1 = var2;
case 134:
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
                if(!(var6 === var9)) { _fun0008_ip = 136; continue _fun0008 }
case 137:
                var6 = false;
case 136:
                var _closure3_slot1 = var6;
                if(!(var5 === var9)) { _fun0008_ip = 138; continue _fun0008 }
case 139:
                var5 = new Array(0);
case 138:
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
                        if(!var6) { _fun0009_ip = 140; continue _fun0009 }
case 141:
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
                        if(!(var7 !== var6)) { _fun0009_ip = 142; continue _fun0009 }
case 143:
                        var6 = _closure3_slot3;
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var8];
                        var5 = var7.bind(var3)(var5);
                        var5 = var5.ReactionTypes;
                        var5 = var5.VOTE;
                        if(!(var6 !== var5)) { _fun0009_ip = 144; continue _fun0009 }
case 145:
                        var5 = _closure3_slot1;
                        if(!var5) { _fun0009_ip = 146; continue _fun0009 }
case 147:
                        var5 = var1.me;
                        if(var5) { _fun0009_ip = 148; continue _fun0009 }
case 146:
                        var6 = var1.count;
                        var5 = 1;
                        var8 = var6 + var5;
                        var5 = {};
                        var11 = var5;
                        var10 = var1;
                        var6 = copyDataProperties(var11, var10);
                        var6 = 'count';
                        var5[5] = var8;
                        var7 = {};
                        var10 = var1.count_details;
                        var11 = var7;
                        var6 = copyDataProperties(var11, var10);
                        var6 = 'normal';
                        var7[5] = var8;
                        var6 = 'count_details';
                        var5[5] = var7;
                        var6 = _closure3_slot1;
                        var6 = !var6;
                        var7 = !var6;
                        if(!var6) { _fun0009_ip = 149; continue _fun0009 }
case 150:
                        var7 = var1.me;
case 149:
                        var6 = 'me';
                        var5[5] = var7;
                        var2 = var5;
                        _fun0009_ip = 140; continue _fun0009;
case 148:
                        return var1;
case 144:
                        var6 = var1.count_details;
                        var5 = null;
                        var7 = var5 == var6;
                        var3 = undefined;
                        if(var7) { _fun0009_ip = 151; continue _fun0009 }
case 152:
                        var3 = var6.vote;
case 151:
                        var6 = var5 != var3;
                        var5 = 0;
                        if(!var6) { _fun0009_ip = 54; continue _fun0009 }
case 34:
                        var5 = var3;
case 54:
                        var3 = _closure3_slot1;
                        if(!var3) { _fun0009_ip = 153; continue _fun0009 }
case 154:
                        var3 = var1.me_vote;
                        var7 = var5;
                        if(var3) { _fun0009_ip = 155; continue _fun0009 }
case 153:
                        var3 = 1;
                        var7 = var5 + var3;
case 155:
                        var3 = {};
                        var11 = var3;
                        var10 = var1;
                        var5 = copyDataProperties(var11, var10);
                        var6 = {};
                        var10 = var1.count_details;
                        var11 = var6;
                        var5 = copyDataProperties(var11, var10);
                        var5 = 'vote';
                        var6[4] = var7;
                        var5 = 'count_details';
                        var3[4] = var6;
                        var5 = _closure3_slot1;
                        var5 = !var5;
                        var6 = !var5;
                        if(!var5) { _fun0009_ip = 156; continue _fun0009 }
case 157:
                        var6 = var1.me_vote;
case 156:
                        var5 = 'me_vote';
                        var3[4] = var6;
                        var2 = var3;
                        _fun0009_ip = 140; continue _fun0009;
case 142:
                        var3 = _closure3_slot1;
                        if(!var3) { _fun0009_ip = 158; continue _fun0009 }
case 159:
                        var3 = var1.me_burst;
                        if(var3) { _fun0009_ip = 160; continue _fun0009 }
case 158:
                        var5 = var1.burst_count;
                        var3 = 1;
                        var7 = var5 + var3;
                        var5 = var1.burst_colors;
                        var3 = null;
                        if(!(var3 != var5)) { _fun0009_ip = 161; continue _fun0009 }
case 162:
                        var3 = var1.burst_colors;
                        var5 = var3.length;
                        var3 = 0;
                        if(!(!(var5 > var3))) { _fun0009_ip = 70; continue _fun0009 }
case 161:
                        var5 = _closure3_slot2;
                        _fun0009_ip = 163; continue _fun0009;
case 70:
                        var5 = var1.burst_colors;
case 163:
                        var3 = {};
                        var11 = var3;
                        var10 = var1;
                        var6 = copyDataProperties(var11, var10);
                        var4 = _closure3_slot1;
                        var4 = !var4;
                        var6 = !var4;
                        if(!var4) { _fun0009_ip = 164; continue _fun0009 }
case 165:
                        var6 = var1.me_burst;
case 164:
                        var4 = 'me_burst';
                        var3[3] = var6;
                        var4 = 'burst_count';
                        var3[3] = var7;
                        var6 = {};
                        var10 = var1.count_details;
                        var11 = var6;
                        var4 = copyDataProperties(var11, var10);
                        var4 = 'burst';
                        var6[3] = var7;
                        var4 = 'count_details';
                        var3[3] = var6;
                        var4 = 'burst_colors';
                        var3[3] = var5;
                        var2 = var3;
case 140:
                        return var2;
case 160:
                        return var1;
                    }
                };
                var3 = var10.bind(var11)(var3);
                var1 = _closure3_slot4;
                if(!(var8 === var1)) { _fun0008_ip = 166; continue _fun0008 }
case 167:
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var10 = 10;
                var8 = var8[var10];
                var8 = var11.bind(var9)(var8);
                var8 = var8.ReactionTypes;
                var8 = var8.BURST;
                if(!(var2 !== var8)) { _fun0008_ip = 168; continue _fun0008 }
case 169:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var10];
                var1 = var8.bind(var9)(var1);
                var1 = var1.ReactionTypes;
                var1 = var1.VOTE;
                if(!(var2 !== var1)) { _fun0008_ip = 29; continue _fun0008 }
case 170:
                var2 = var3.push;
                var1 = {'emoji': null, 'me': null, 'me_burst': false, 'count': 1, 'count_details': null, 'burst_count': 0};
                var1['emoji'] = var7;
                var1['me'] = var6;
                var8 = {'burst': 0, 'normal': 1};
                var1['count_details'] = var8;
                var8 = new Array(0);
                var1['burst_colors'] = var8;
                var1 = var2.bind(var3)(var1);
                _fun0008_ip = 166; continue _fun0008;
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
                _fun0008_ip = 166; continue _fun0008;
case 168:
                var2 = var3.push;
                var1 = {'emoji': null, 'me': false, 'me_burst': null, 'count': 0, 'count_details': null, 'burst_count': 1};
                var1['emoji'] = var7;
                var1['me_burst'] = var6;
                var6 = {'burst': 1, 'normal': 0};
                var1['count_details'] = var6;
                var1['burst_colors'] = var5;
                var1 = var2.bind(var3)(var1);
case 166:
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
                if(!(var5 === var2)) { _fun0010_ip = 171; continue _fun0010 }
case 172:
                var5 = false;
case 171:
                var _closure3_slot1 = var5;
                if(!(var3 === var2)) { _fun0010_ip = 173; continue _fun0010 }
case 174:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 10;
                var5 = var7[var5];
                var5 = var6.bind(var2)(var5);
                var5 = var5.ReactionTypes;
                var3 = var5.NORMAL;
case 173:
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
                        if(!var6) { _fun0011_ip = 175; continue _fun0011 }
case 141:
                        var7 = _closure3_slot2;
                        var9 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var8 = 10;
                        var6 = var6[var8];
                        var6 = var9.bind(var3)(var6);
                        var6 = var6.ReactionTypes;
                        var6 = var6.BURST;
                        if(!(var7 !== var6)) { _fun0011_ip = 176; continue _fun0011 }
case 177:
                        var6 = _closure3_slot2;
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var8];
                        var2 = var7.bind(var3)(var2);
                        var2 = var2.ReactionTypes;
                        var2 = var2.VOTE;
                        if(!(var6 !== var2)) { _fun0011_ip = 178; continue _fun0011 }
case 179:
                        var2 = _closure3_slot1;
                        if(!var2) { _fun0011_ip = 146; continue _fun0011 }
case 145:
                        var2 = var5.me;
                        if(var2) { _fun0011_ip = 146; continue _fun0011 }
case 180:
                        var8 = var5.count;
                        _fun0011_ip = 181; continue _fun0011;
case 146:
                        var6 = var5.count;
                        var2 = 1;
                        var8 = var6 - var2;
case 181:
                        var2 = {};
                        var11 = var2;
                        var10 = var5;
                        var6 = copyDataProperties(var11, var10);
                        var6 = 'count';
                        var2[5] = var8;
                        var6 = _closure3_slot1;
                        var7 = !var6;
                        if(!var7) { _fun0011_ip = 182; continue _fun0011 }
case 183:
                        var7 = var5.me;
case 182:
                        var6 = 'me';
                        var2[5] = var7;
                        var7 = {};
                        var10 = var5.count_details;
                        var11 = var7;
                        var6 = copyDataProperties(var11, var10);
                        var6 = 'normal';
                        var7[5] = var8;
                        var6 = 'count_details';
                        var2[5] = var7;
                        _fun0011_ip = 184; continue _fun0011;
case 178:
                        var7 = var5.count_details;
                        var6 = null;
                        var8 = var6 == var7;
                        var3 = undefined;
                        if(var8) { _fun0011_ip = 185; continue _fun0011 }
case 186:
                        var3 = var7.vote;
case 185:
                        var7 = var6 != var3;
                        var6 = 0;
                        if(!var7) { _fun0011_ip = 187; continue _fun0011 }
case 188:
                        var6 = var3;
case 187:
                        var3 = _closure3_slot1;
                        if(!var3) { _fun0011_ip = 189; continue _fun0011 }
case 190:
                        var3 = var5.me_vote;
                        var8 = var6;
                        if(!var3) { _fun0011_ip = 191; continue _fun0011 }
case 189:
                        var3 = 1;
                        var8 = var6 - var3;
case 191:
                        var3 = {};
                        var11 = var3;
                        var10 = var5;
                        var6 = copyDataProperties(var11, var10);
                        var7 = {};
                        var10 = var5.count_details;
                        var11 = var7;
                        var6 = copyDataProperties(var11, var10);
                        var6 = 'vote';
                        var7[5] = var8;
                        var6 = 'count_details';
                        var3[5] = var7;
                        var6 = _closure3_slot1;
                        var7 = !var6;
                        if(!var7) { _fun0011_ip = 192; continue _fun0011 }
case 193:
                        var7 = var5.me_vote;
case 192:
                        var6 = 'me_vote';
                        var3[5] = var7;
                        var2 = var3;
                        _fun0011_ip = 184; continue _fun0011;
case 176:
                        var3 = _closure3_slot1;
                        if(!var3) { _fun0011_ip = 194; continue _fun0011 }
case 195:
                        var3 = var5.me_burst;
                        if(var3) { _fun0011_ip = 194; continue _fun0011 }
case 196:
                        var7 = var5.burst_count;
                        _fun0011_ip = 197; continue _fun0011;
case 194:
                        var6 = var5.burst_count;
                        var3 = 1;
                        var7 = var6 - var3;
case 197:
                        var3 = {};
                        var11 = var3;
                        var10 = var5;
                        var6 = copyDataProperties(var11, var10);
                        var6 = 'burst_count';
                        var3[5] = var7;
                        var6 = _closure3_slot1;
                        var8 = !var6;
                        if(!var8) { _fun0011_ip = 198; continue _fun0011 }
case 199:
                        var8 = var5.me_burst;
case 198:
                        var6 = 'me_burst';
                        var3[5] = var8;
                        var6 = {};
                        var10 = var5.count_details;
                        var11 = var6;
                        var5 = copyDataProperties(var11, var10);
                        var5 = 'burst';
                        var6[4] = var7;
                        var5 = 'count_details';
                        var3[4] = var6;
                        var2 = var3;
case 184:
                        var3 = arg2;
                        _closure3_slot3 = var3;
                        var1 = var2;
case 175:
                        return var1;
                    }
                };
                var3 = var5.bind(var6)(var3);
                var5 = _closure3_slot3;
                var6 = var3[var5];
                var5 = null;
                if(!(var5 == var6)) { _fun0010_ip = 18; continue _fun0010 }
case 200:
                var6 = {};
case 18:
                var10 = var6.count;
                var9 = var6.burst_count;
                var12 = var6.count_details;
                var6 = var5 == var12;
                var7 = undefined;
                if(var6) { _fun0010_ip = 201; continue _fun0010 }
case 202:
                var7 = var12.normal;
case 201:
                var13 = var5 != var7;
                var6 = 0;
                var8 = 0;
                if(!var13) { _fun0010_ip = 203; continue _fun0010 }
case 204:
                var8 = var7;
case 203:
                var7 = var5 == var12;
                var13 = undefined;
                if(var7) { _fun0010_ip = 205; continue _fun0010 }
case 206:
                var13 = var12.burst;
case 205:
                var14 = var5 != var13;
                var7 = 0;
                if(!var14) { _fun0010_ip = 46; continue _fun0010 }
case 207:
                var7 = var13;
case 46:
                var13 = var5 == var12;
                var2 = undefined;
                if(var13) { _fun0010_ip = 183; continue _fun0010 }
case 208:
                var2 = var12.vote;
case 183:
                var12 = var5 != var2;
                var5 = 0;
                if(!var12) { _fun0010_ip = 209; continue _fun0010 }
case 210:
                var5 = var2;
case 209:
                var2 = _closure3_slot3;
                var2 = var11 !== var2;
                if(!var2) { _fun0010_ip = 25; continue _fun0010 }
case 26:
                var2 = var10 <= var6;
case 25:
                if(!var2) { _fun0010_ip = 211; continue _fun0010 }
case 47:
                var2 = var9 <= var6;
case 211:
                if(!var2) { _fun0010_ip = 212; continue _fun0010 }
case 213:
                var2 = var8 <= var6;
case 212:
                if(!var2) { _fun0010_ip = 214; continue _fun0010 }
case 215:
                var2 = var7 <= var6;
case 214:
                if(!var2) { _fun0010_ip = 216; continue _fun0010 }
case 217:
                var2 = var5 <= var6;
case 216:
                if(!var2) { _fun0010_ip = 218; continue _fun0010 }
case 219:
                var5 = var3.splice;
                var2 = _closure3_slot3;
                var1 = 1;
                var1 = var5.bind(var3)(var2, var1);
case 218:
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
                if(var1) { _fun0012_ip = 220; continue _fun0012 }
case 221:
                var3 = var3.type;
                var2 = _closure1_slot10;
                var2 = var2.CONTEXT_MENU_COMMAND;
                var1 = var3 === var2;
case 220:
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
        var7 = 'isInteractionPlaceholder';
        var5['key'] = var7;
        var7 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = this;
                var3 = var2.interaction;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0013_ip = 174; continue _fun0013 }
case 222:
                var3 = var2.author;
                var2 = var3.isNonUserBot;
                var1 = var2.bind(var3)();
case 174:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'canDeleteOwnMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var2 = arg1;
                var4 = this;
                var1 = var4.author;
                var1 = var1.id;
                if(!(var1 !== var2)) { _fun0014_ip = 223; continue _fun0014 }
case 172:
                var6 = var4.interactionMetadata;
                var1 = null;
                var7 = var1 == var6;
                var5 = undefined;
                var3 = undefined;
                if(var7) { _fun0014_ip = 12; continue _fun0014 }
case 224:
                var3 = var6.authorizing_integration_owners;
case 12:
                if(!(var1 == var3)) { _fun0014_ip = 225; continue _fun0014 }
case 226:
                var3 = {};
case 225:
                var4 = var4.interactionMetadata;
                var6 = var1 == var4;
                var1 = undefined;
                if(var6) { _fun0014_ip = 227; continue _fun0014 }
case 8:
                var4 = var4.user;
                var1 = var4.id;
case 227:
                var1 = var1 === var2;
                if(!var1) { _fun0014_ip = 228; continue _fun0014 }
case 229:
                var2 = global;
                var4 = var2.Object;
                var2 = var4.keys;
                var2 = var2.bind(var4)(var3);
                var4 = var2.length;
                var2 = 1;
                var1 = var2 === var4;
case 228:
                if(!var1) { _fun0014_ip = 230; continue _fun0014 }
case 18:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 11;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ApplicationIntegrationType;
                var2 = var2.USER_INSTALL;
                var1 = var2 in var3;
case 230:
                return var1;
case 223:
                var1 = true;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'toJS';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = {};
            var8 = var1;
            var7 = var2;
            var3 = copyDataProperties(var8, var7);
            var4 = var2.mentionGames;
            var3 = var4.values;
            var7 = var3.bind(var4)();
            var4 = new Array(0);
            var6 = 0;
            var8 = var4;
            var3 = arraySpread(var8, var7, var6);
            var3 = 'mentionGames';
            var1[2] = var4;
            var4 = var2.webhookId;
            var3 = 'webkhook_id';
            var1[2] = var4;
            var4 = var2.editedTimestamp;
            var3 = 'edited_timestamp';
            var1[2] = var4;
            var3 = var2.mentionEveryone;
            var2 = 'mention_everyone';
            var1[1] = var3;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'isFirstMessageInForumPost';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var2 = var1.id;
                var1 = var1.channel_id;
                var1 = var2 === var1;
                if(!var1) { _fun0015_ip = 231; continue _fun0015 }
case 232:
                var2 = var3.isForumPost;
                var1 = var2.bind(var3)();
case 231:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[15] = var5;
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