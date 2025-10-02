// app/records/AuditLogRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var5 = function getTargetType(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var1 = _closure1_slot8;
            var1 = var1.ALL;
            if(!(var6 !== var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = _closure1_slot8;
            var1 = var1.GUILD_UPDATE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = _closure1_slot8;
            var1 = var1.CHANNEL_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = _closure1_slot8;
            var1 = var1.MESSAGE_BULK_DELETE;
            if(!(var6 !== var1)) { _fun0002_ip = 10; continue _fun0002 }
case 5:
            var1 = _closure1_slot8;
            var1 = var1.CHANNEL_OVERWRITE_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var1 = _closure1_slot8;
            var1 = var1.BOT_ADD;
            if(!(!(var6 <= var1))) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var1 = _closure1_slot8;
            var1 = var1.MESSAGE_DELETE;
            if(!(var6 !== var1)) { _fun0002_ip = 14; continue _fun0002 }
case 16:
            var1 = _closure1_slot8;
            var1 = var1.MESSAGE_PIN;
            if(!(var6 !== var1)) { _fun0002_ip = 14; continue _fun0002 }
case 17:
            var1 = _closure1_slot8;
            var1 = var1.MESSAGE_UNPIN;
            if(!(var6 !== var1)) { _fun0002_ip = 14; continue _fun0002 }
case 18:
            var1 = _closure1_slot8;
            var1 = var1.ROLE_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var1 = _closure1_slot8;
            var1 = var1.INVITE_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var1 = _closure1_slot8;
            var1 = var1.WEBHOOK_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var1 = _closure1_slot8;
            var1 = var1.EMOJI_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var1 = _closure1_slot8;
            var1 = var1.INTEGRATION_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var1 = _closure1_slot8;
            var1 = var1.STAGE_INSTANCE_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var1 = _closure1_slot8;
            var1 = var1.STICKER_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var1 = _closure1_slot8;
            var1 = var1.GUILD_SCHEDULED_EVENT_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var1 = _closure1_slot8;
            var1 = var1.THREAD_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var1 = _closure1_slot8;
            var1 = var1.APPLICATION_COMMAND_PERMISSION_UPDATE;
            if(!(var6 !== var1)) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var1 = _closure1_slot8;
            var1 = var1.SOUNDBOARD_SOUND_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var1 = _closure1_slot8;
            var1 = var1.AUTO_MODERATION_BLOCK_MESSAGE;
            if(!(!(var6 < var1))) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var1 = _closure1_slot8;
            var1 = var1.AUTO_MODERATION_BLOCK_MESSAGE;
            if(!(var6 !== var1)) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var1 = _closure1_slot8;
            var1 = var1.AUTO_MODERATION_FLAG_TO_CHANNEL;
            if(!(var6 !== var1)) { _fun0002_ip = 43; continue _fun0002 }
case 45:
            var1 = _closure1_slot8;
            var1 = var1.AUTO_MODERATION_USER_COMMUNICATION_DISABLED;
            if(!(var6 !== var1)) { _fun0002_ip = 43; continue _fun0002 }
case 46:
            var1 = _closure1_slot8;
            var1 = var1.AUTO_MODERATION_QUARANTINE_USER;
            if(!(var6 !== var1)) { _fun0002_ip = 43; continue _fun0002 }
case 47:
            var1 = _closure1_slot8;
            var1 = var1.CREATOR_MONETIZATION_TERMS_ACCEPTED;
            if(!(!(var6 <= var1))) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var1 = _closure1_slot8;
            var1 = var1.ONBOARDING_PROMPT_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var1 = _closure1_slot8;
            var1 = var1.ONBOARDING_UPDATE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var1 = _closure1_slot8;
            var1 = var1.GUILD_HOME_REMOVE_ITEM;
            if(!(!(var6 <= var1))) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var1 = _closure1_slot8;
            var1 = var1.HARMFUL_LINKS_BLOCKED_MESSAGE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var1 = _closure1_slot8;
            var1 = var1.HOME_SETTINGS_UPDATE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var1 = _closure1_slot8;
            var1 = var1.VOICE_CHANNEL_STATUS_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var1 = _closure1_slot8;
            var1 = var1.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var1 = _closure1_slot8;
            var1 = var1.GUILD_MEMBER_VERIFICATION_UPDATE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 64; continue _fun0002 }
case 65:
            var1 = _closure1_slot8;
            var1 = var1.GUILD_PROFILE_UPDATE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 66; continue _fun0002 }
case 67:
            var1 = _closure1_slot8;
            var1 = var1.GUILD_MIGRATE_PIN_PERMISSION;
            if(!(!(var6 <= var1))) { _fun0002_ip = 68; continue _fun0002 }
case 69:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.captureMessage;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var1 = 'Unknown target type for: ';
            var1 = var5.bind(var1)(var6);
            var1 = var3.bind(var4)(var1);
            var1 = _closure1_slot7;
            var1 = var1.UNKNOWN;
            _fun0002_ip = 70; continue _fun0002;
case 68:
            var3 = _closure1_slot7;
            var1 = var3.GUILD;
case 70:
            _fun0002_ip = 71; continue _fun0002;
case 66:
            var3 = _closure1_slot7;
            var1 = var3.GUILD_PROFILE;
case 71:
            _fun0002_ip = 72; continue _fun0002;
case 64:
            var3 = _closure1_slot7;
            var1 = var3.GUILD_MEMBER_VERIFICATION;
case 72:
            _fun0002_ip = 73; continue _fun0002;
case 62:
            var3 = _closure1_slot7;
            var1 = var3.GUILD_SCHEDULED_EVENT_EXCEPTION;
case 73:
            _fun0002_ip = 74; continue _fun0002;
case 60:
            var3 = _closure1_slot7;
            var1 = var3.VOICE_CHANNEL_STATUS;
case 74:
            _fun0002_ip = 75; continue _fun0002;
case 58:
            var3 = _closure1_slot7;
            var1 = var3.HOME_SETTINGS;
case 75:
            _fun0002_ip = 76; continue _fun0002;
case 56:
            var3 = _closure1_slot7;
            var1 = var3.GUILD;
case 76:
            _fun0002_ip = 77; continue _fun0002;
case 54:
            var3 = _closure1_slot7;
            var1 = var3.GUILD_HOME;
case 77:
            _fun0002_ip = 78; continue _fun0002;
case 52:
            var3 = _closure1_slot7;
            var1 = var3.GUILD_ONBOARDING;
case 78:
            _fun0002_ip = 79; continue _fun0002;
case 50:
            var3 = _closure1_slot7;
            var1 = var3.ONBOARDING_PROMPT;
case 79:
            _fun0002_ip = 80; continue _fun0002;
case 48:
            var3 = _closure1_slot7;
            var1 = var3.GUILD;
case 80:
            _fun0002_ip = 81; continue _fun0002;
case 43:
            var3 = _closure1_slot7;
            var1 = var3.USER;
case 81:
            _fun0002_ip = 82; continue _fun0002;
case 41:
            var3 = _closure1_slot7;
            var1 = var3.AUTO_MODERATION_RULE;
case 82:
            _fun0002_ip = 83; continue _fun0002;
case 39:
            var3 = _closure1_slot7;
            var1 = var3.GUILD_SOUNDBOARD;
case 83:
            _fun0002_ip = 84; continue _fun0002;
case 37:
            var3 = _closure1_slot7;
            var1 = var3.APPLICATION_COMMAND;
case 84:
            _fun0002_ip = 85; continue _fun0002;
case 35:
            var3 = _closure1_slot7;
            var1 = var3.THREAD;
case 85:
            _fun0002_ip = 86; continue _fun0002;
case 33:
            var3 = _closure1_slot7;
            var1 = var3.GUILD_SCHEDULED_EVENT;
case 86:
            _fun0002_ip = 87; continue _fun0002;
case 31:
            var3 = _closure1_slot7;
            var1 = var3.STICKER;
case 87:
            _fun0002_ip = 88; continue _fun0002;
case 29:
            var3 = _closure1_slot7;
            var1 = var3.STAGE_INSTANCE;
case 88:
            _fun0002_ip = 89; continue _fun0002;
case 27:
            var3 = _closure1_slot7;
            var1 = var3.INTEGRATION;
case 89:
            _fun0002_ip = 90; continue _fun0002;
case 25:
            var3 = _closure1_slot7;
            var1 = var3.EMOJI;
case 90:
            _fun0002_ip = 91; continue _fun0002;
case 23:
            var3 = _closure1_slot7;
            var1 = var3.WEBHOOK;
case 91:
            _fun0002_ip = 92; continue _fun0002;
case 21:
            var3 = _closure1_slot7;
            var1 = var3.INVITE;
case 92:
            _fun0002_ip = 93; continue _fun0002;
case 19:
            var3 = _closure1_slot7;
            var1 = var3.ROLE;
case 93:
            _fun0002_ip = 94; continue _fun0002;
case 14:
            var3 = _closure1_slot7;
            var1 = var3.USER;
case 94:
            _fun0002_ip = 95; continue _fun0002;
case 12:
            var3 = _closure1_slot7;
            var1 = var3.CHANNEL_OVERWRITE;
case 95:
            _fun0002_ip = 96; continue _fun0002;
case 10:
            var3 = _closure1_slot7;
            var1 = var3.CHANNEL;
case 96:
            _fun0002_ip = 97; continue _fun0002;
case 8:
            var3 = _closure1_slot7;
            var1 = var3.GUILD;
case 97:
            _fun0002_ip = 98; continue _fun0002;
case 6:
            var2 = _closure1_slot7;
            var1 = var2.ALL;
case 98:
            return var1;
        }
    };
    var _closure1_slot11 = var5;
    var4 = function getActionType(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot8;
            var2 = var2.CHANNEL_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 7:
            var2 = _closure1_slot8;
            var2 = var2.CHANNEL_OVERWRITE_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 9:
            var2 = _closure1_slot8;
            var2 = var2.MEMBER_BAN_REMOVE;
            if(!(var2 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 11:
            var2 = _closure1_slot8;
            var2 = var2.ROLE_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 5:
            var2 = _closure1_slot8;
            var2 = var2.INVITE_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 13:
            var2 = _closure1_slot8;
            var2 = var2.WEBHOOK_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 15:
            var2 = _closure1_slot8;
            var2 = var2.EMOJI_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 16:
            var2 = _closure1_slot8;
            var2 = var2.STICKER_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 17:
            var2 = _closure1_slot8;
            var2 = var2.MESSAGE_PIN;
            if(!(var2 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 18:
            var2 = _closure1_slot8;
            var2 = var2.BOT_ADD;
            if(!(var2 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 20:
            var2 = _closure1_slot8;
            var2 = var2.INTEGRATION_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 22:
            var2 = _closure1_slot8;
            var2 = var2.STAGE_INSTANCE_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 24:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_SCHEDULED_EVENT_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 26:
            var2 = _closure1_slot8;
            var2 = var2.THREAD_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 28:
            var2 = _closure1_slot8;
            var2 = var2.AUTO_MODERATION_RULE_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 30:
            var2 = _closure1_slot8;
            var2 = var2.CREATOR_MONETIZATION_REQUEST_CREATED;
            if(!(var2 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 32:
            var2 = _closure1_slot8;
            var2 = var2.ONBOARDING_PROMPT_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 34:
            var2 = _closure1_slot8;
            var2 = var2.ONBOARDING_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 36:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_HOME_FEATURE_ITEM;
            if(!(var2 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 38:
            var2 = _closure1_slot8;
            var2 = var2.SOUNDBOARD_SOUND_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 40:
            var2 = _closure1_slot8;
            var2 = var2.HOME_SETTINGS_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 42:
            var2 = _closure1_slot8;
            var2 = var2.VOICE_CHANNEL_STATUS_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 44:
            var2 = _closure1_slot8;
            var2 = var2.CHANNEL_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 45:
            var2 = _closure1_slot8;
            var2 = var2.CHANNEL_OVERWRITE_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 46:
            var2 = _closure1_slot8;
            var2 = var2.MEMBER_KICK;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 47:
            var2 = _closure1_slot8;
            var2 = var2.MEMBER_PRUNE;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 49:
            var2 = _closure1_slot8;
            var2 = var2.MEMBER_BAN_ADD;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 51:
            var2 = _closure1_slot8;
            var2 = var2.ROLE_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 53:
            var2 = _closure1_slot8;
            var2 = var2.INVITE_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 55:
            var2 = _closure1_slot8;
            var2 = var2.WEBHOOK_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 57:
            var2 = _closure1_slot8;
            var2 = var2.EMOJI_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 59:
            var2 = _closure1_slot8;
            var2 = var2.STICKER_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 61:
            var2 = _closure1_slot8;
            var2 = var2.MESSAGE_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 63:
            var2 = _closure1_slot8;
            var2 = var2.MESSAGE_BULK_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 65:
            var2 = _closure1_slot8;
            var2 = var2.MESSAGE_UNPIN;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 101:
            var2 = _closure1_slot8;
            var2 = var2.INTEGRATION_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 102:
            var2 = _closure1_slot8;
            var2 = var2.MEMBER_DISCONNECT;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 103:
            var2 = _closure1_slot8;
            var2 = var2.STAGE_INSTANCE_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 104:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_SCHEDULED_EVENT_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 105:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 106:
            var2 = _closure1_slot8;
            var2 = var2.THREAD_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 71:
            var2 = _closure1_slot8;
            var2 = var2.AUTO_MODERATION_BLOCK_MESSAGE;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 107:
            var2 = _closure1_slot8;
            var2 = var2.AUTO_MODERATION_RULE_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 108:
            var2 = _closure1_slot8;
            var2 = var2.ONBOARDING_PROMPT_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 109:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_HOME_REMOVE_ITEM;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 110:
            var2 = _closure1_slot8;
            var2 = var2.SOUNDBOARD_SOUND_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 111:
            var2 = _closure1_slot8;
            var2 = var2.VOICE_CHANNEL_STATUS_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
case 112:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 114:
            var2 = _closure1_slot8;
            var2 = var2.CHANNEL_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 115:
            var2 = _closure1_slot8;
            var2 = var2.CHANNEL_OVERWRITE_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 116:
            var2 = _closure1_slot8;
            var2 = var2.MEMBER_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 33:
            var2 = _closure1_slot8;
            var2 = var2.MEMBER_ROLE_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 117:
            var2 = _closure1_slot8;
            var2 = var2.ROLE_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 88:
            var2 = _closure1_slot8;
            var2 = var2.INVITE_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 118:
            var2 = _closure1_slot8;
            var2 = var2.WEBHOOK_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 119:
            var2 = _closure1_slot8;
            var2 = var2.EMOJI_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 120:
            var2 = _closure1_slot8;
            var2 = var2.STICKER_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 121:
            var2 = _closure1_slot8;
            var2 = var2.INTEGRATION_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 122:
            var2 = _closure1_slot8;
            var2 = var2.MEMBER_MOVE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 123:
            var2 = _closure1_slot8;
            var2 = var2.STAGE_INSTANCE_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 124:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_SCHEDULED_EVENT_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 125:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 126:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 127:
            var2 = _closure1_slot8;
            var2 = var2.THREAD_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 128:
            var2 = _closure1_slot8;
            var2 = var2.APPLICATION_COMMAND_PERMISSION_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 129:
            var2 = _closure1_slot8;
            var2 = var2.CREATOR_MONETIZATION_TERMS_ACCEPTED;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 130:
            var2 = _closure1_slot8;
            var2 = var2.AUTO_MODERATION_RULE_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 131:
            var2 = _closure1_slot8;
            var2 = var2.AUTO_MODERATION_FLAG_TO_CHANNEL;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 132:
            var2 = _closure1_slot8;
            var2 = var2.AUTO_MODERATION_USER_COMMUNICATION_DISABLED;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 133:
            var2 = _closure1_slot8;
            var2 = var2.AUTO_MODERATION_QUARANTINE_USER;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 134:
            var2 = _closure1_slot8;
            var2 = var2.ONBOARDING_PROMPT_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 135:
            var2 = _closure1_slot8;
            var2 = var2.ONBOARDING_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 136:
            var2 = _closure1_slot8;
            var2 = var2.SOUNDBOARD_SOUND_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 137:
            var2 = _closure1_slot8;
            var2 = var2.HOME_SETTINGS_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 138:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_MEMBER_VERIFICATION_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 139:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_PROFILE_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 140:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_MIGRATE_PIN_PERMISSION;
            if(!(var2 !== var3)) { _fun0003_ip = 113; continue _fun0003 }
case 141:
            var2 = _closure1_slot9;
            var2 = var2.ALL;
            return var2;
case 113:
            var2 = _closure1_slot9;
            var2 = var2.UPDATE;
            return var2;
case 100:
            var2 = _closure1_slot9;
            var2 = var2.DELETE;
            return var2;
case 99:
            var1 = _closure1_slot9;
            var1 = var1.CREATE;
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var9[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var9[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var9[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var9[var2];
    var10 = var7.bind(var1)(var2);
    var _closure1_slot5 = var10;
    var2 = 4;
    var2 = var9[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var9[var2];
    var7 = var7.bind(var1)(var2);
    var2 = 6;
    var2 = var9[var2];
    var2 = var8.bind(var1)(var2);
    var11 = var2.AuditLogTargetTypes;
    var _closure1_slot7 = var11;
    var11 = var2.AuditLogActions;
    var _closure1_slot8 = var11;
    var2 = var2.AuditLogActionTypes;
    var _closure1_slot9 = var2;
    var2 = function AuditLogChange(arg1, arg2, arg3) {
        var3 = this;
        var4 = _closure1_slot6;
        var2 = _closure1_slot13;
        var1 = undefined;
        var2 = var4.bind(var1)(var3, var2);
        var2 = arg1;
        var3['key'] = var2;
        var2 = arg2;
        var3['oldValue'] = var2;
        var2 = arg3;
        var3['newValue'] = var2;
        return var1;
    };
    var _closure1_slot13 = var2;
    var2 = var10.bind(var1)(var2);
    var6 = function(arg1) {
        var3 = function AuditLogRecord(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = arg1;
                var5 = this;
                var1 = _closure1_slot6;
                var2 = _closure2_slot0;
                var6 = undefined;
                var1 = var1.bind(var6)(var5, var2);
                var1 = _closure1_slot3;
                var11 = var1.bind(var6)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot10;
                var1 = var1.bind(var6)();
                if(var1) { _fun0004_ip = 142; continue _fun0004 }
case 143:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var5, var6);
                _fun0004_ip = 144; continue _fun0004;
case 142:
                var7 = global;
                var10 = var7.Reflect;
                var9 = var10.construct;
                var7 = _closure1_slot3;
                var7 = var7.bind(var6)(var5);
                var8 = var7.constructor;
                var7 = new Array(0);
                var1 = var9.bind(var10)(var11, var7, var8);
case 144:
                var1 = var2.bind(var6)(var5, var1);
                var2 = var3.id;
                var1['id'] = var2;
                var2 = var3.action;
                var1['action'] = var2;
                var5 = _closure1_slot12;
                var2 = var1.action;
                var2 = var5.bind(var6)(var2);
                var1['actionType'] = var2;
                var2 = var3.targetId;
                var1['targetId'] = var2;
                var5 = var3.timestampStart;
                var2 = null;
                if(!(var2 == var5)) { _fun0004_ip = 145; continue _fun0004 }
case 146:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var7 = 8;
                var7 = var10[var7];
                var8 = var9.bind(var6)(var7);
                var7 = 9;
                var7 = var10[var7];
                var10 = var9.bind(var6)(var7);
                var9 = var10.extractTimestamp;
                var7 = var1.id;
                var7 = var9.bind(var10)(var7);
                var5 = var8.bind(var6)(var7);
case 145:
                var1['timestampStart'] = var5;
                var5 = var3.timestampEnd;
                if(!(var2 == var5)) { _fun0004_ip = 147; continue _fun0004 }
case 28:
                var5 = var1.timestampStart;
case 147:
                var1['timestampEnd'] = var5;
                var5 = var3.userId;
                var1['userId'] = var5;
                var5 = var3.changes;
                if(!(var2 == var5)) { _fun0004_ip = 148; continue _fun0004 }
case 149:
                var5 = new Array(0);
case 148:
                var1['changes'] = var5;
                var5 = _closure1_slot11;
                var4 = var1.action;
                var4 = var5.bind(var6)(var4);
                var1['targetType'] = var4;
                var4 = var3.options;
                if(!(var2 == var4)) { _fun0004_ip = 150; continue _fun0004 }
case 151:
                var4 = {};
case 150:
                var1['options'] = var4;
                var4 = var3.target;
                if(!(var2 == var4)) { _fun0004_ip = 152; continue _fun0004 }
case 153:
                var4 = var3.id;
case 152:
                var1['target'] = var4;
                var3 = var3.user;
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0004_ip = 154; continue _fun0004 }
case 155:
                var2 = var3;
case 154:
                var1['user'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot4;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot5;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var6 = var6.bind(var1)(var7);
    var7 = 10;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'records/AuditLogRecord.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['getTargetType'] = var5;
    var3['getActionType'] = var4;
    var3['AuditLogChange'] = var2;
    return var1;
})();