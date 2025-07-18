// app/records/AuditLogRecord.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var7 = native3;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
 0:
            var6 = arg1;
            var1 = _closure1_slot8;
            var1 = var1.ALL;
            if(!(var6 !== var1)) { _fun0002_ip = 1017; continue _fun0002 }
 23:
            var1 = _closure1_slot8;
            var1 = var1.GUILD_UPDATE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 1005; continue _fun0002 }
 40:
            var1 = _closure1_slot8;
            var1 = var1.CHANNEL_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 993; continue _fun0002 }
 57:
            var1 = _closure1_slot8;
            var1 = var1.MESSAGE_BULK_DELETE;
            if(!(var6 !== var1)) { _fun0002_ip = 993; continue _fun0002 }
 74:
            var1 = _closure1_slot8;
            var1 = var1.CHANNEL_OVERWRITE_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 981; continue _fun0002 }
 91:
            var1 = _closure1_slot8;
            var1 = var1.BOT_ADD;
            if(!(!(var6 <= var1))) { _fun0002_ip = 969; continue _fun0002 }
 108:
            var1 = _closure1_slot8;
            var1 = var1.MESSAGE_DELETE;
            if(!(var6 !== var1)) { _fun0002_ip = 969; continue _fun0002 }
 125:
            var1 = _closure1_slot8;
            var1 = var1.MESSAGE_PIN;
            if(!(var6 !== var1)) { _fun0002_ip = 969; continue _fun0002 }
 142:
            var1 = _closure1_slot8;
            var1 = var1.MESSAGE_UNPIN;
            if(!(var6 !== var1)) { _fun0002_ip = 969; continue _fun0002 }
 159:
            var1 = _closure1_slot8;
            var1 = var1.ROLE_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 957; continue _fun0002 }
 176:
            var1 = _closure1_slot8;
            var1 = var1.INVITE_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 945; continue _fun0002 }
 193:
            var1 = _closure1_slot8;
            var1 = var1.WEBHOOK_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 933; continue _fun0002 }
 210:
            var1 = _closure1_slot8;
            var1 = var1.EMOJI_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 921; continue _fun0002 }
 227:
            var1 = _closure1_slot8;
            var1 = var1.INTEGRATION_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 909; continue _fun0002 }
 244:
            var1 = _closure1_slot8;
            var1 = var1.STAGE_INSTANCE_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 897; continue _fun0002 }
 261:
            var1 = _closure1_slot8;
            var1 = var1.STICKER_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 885; continue _fun0002 }
 278:
            var1 = _closure1_slot8;
            var1 = var1.GUILD_SCHEDULED_EVENT_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 873; continue _fun0002 }
 295:
            var1 = _closure1_slot8;
            var1 = var1.THREAD_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 861; continue _fun0002 }
 312:
            var1 = _closure1_slot8;
            var1 = var1.APPLICATION_COMMAND_PERMISSION_UPDATE;
            if(!(var6 !== var1)) { _fun0002_ip = 849; continue _fun0002 }
 329:
            var1 = _closure1_slot8;
            var1 = var1.SOUNDBOARD_SOUND_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 837; continue _fun0002 }
 346:
            var1 = _closure1_slot8;
            var1 = var1.AUTO_MODERATION_BLOCK_MESSAGE;
            if(!(!(var6 < var1))) { _fun0002_ip = 825; continue _fun0002 }
 363:
            var1 = _closure1_slot8;
            var1 = var1.AUTO_MODERATION_BLOCK_MESSAGE;
            if(!(var6 !== var1)) { _fun0002_ip = 813; continue _fun0002 }
 380:
            var1 = _closure1_slot8;
            var1 = var1.AUTO_MODERATION_FLAG_TO_CHANNEL;
            if(!(var6 !== var1)) { _fun0002_ip = 813; continue _fun0002 }
 397:
            var1 = _closure1_slot8;
            var1 = var1.AUTO_MODERATION_USER_COMMUNICATION_DISABLED;
            if(!(var6 !== var1)) { _fun0002_ip = 813; continue _fun0002 }
 414:
            var1 = _closure1_slot8;
            var1 = var1.AUTO_MODERATION_QUARANTINE_USER;
            if(!(var6 !== var1)) { _fun0002_ip = 813; continue _fun0002 }
 431:
            var1 = _closure1_slot8;
            var1 = var1.CREATOR_MONETIZATION_TERMS_ACCEPTED;
            if(!(!(var6 <= var1))) { _fun0002_ip = 801; continue _fun0002 }
 448:
            var1 = _closure1_slot8;
            var1 = var1.ONBOARDING_PROMPT_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 789; continue _fun0002 }
 465:
            var1 = _closure1_slot8;
            var1 = var1.ONBOARDING_UPDATE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 777; continue _fun0002 }
 482:
            var1 = _closure1_slot8;
            var1 = var1.GUILD_HOME_REMOVE_ITEM;
            if(!(!(var6 <= var1))) { _fun0002_ip = 765; continue _fun0002 }
 499:
            var1 = _closure1_slot8;
            var1 = var1.HARMFUL_LINKS_BLOCKED_MESSAGE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 753; continue _fun0002 }
 516:
            var1 = _closure1_slot8;
            var1 = var1.HOME_SETTINGS_UPDATE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 741; continue _fun0002 }
 533:
            var1 = _closure1_slot8;
            var1 = var1.VOICE_CHANNEL_STATUS_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 729; continue _fun0002 }
 550:
            var1 = _closure1_slot8;
            var1 = var1.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 717; continue _fun0002 }
 567:
            var1 = _closure1_slot8;
            var1 = var1.GUILD_MEMBER_VERIFICATION_UPDATE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 705; continue _fun0002 }
 584:
            var1 = _closure1_slot8;
            var1 = var1.GUILD_PROFILE_UPDATE;
            if(!(!(var6 <= var1))) { _fun0002_ip = 693; continue _fun0002 }
 598:
            var1 = _closure1_slot8;
            var1 = var1.GUILD_MIGRATE_PIN_PERMISSION;
            if(!(!(var6 <= var1))) { _fun0002_ip = 681; continue _fun0002 }
 612:
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
            _fun0002_ip = 691; continue _fun0002;
 681:
            var3 = _closure1_slot7;
            var1 = var3.GUILD;
 691:
            _fun0002_ip = 703; continue _fun0002;
 693:
            var3 = _closure1_slot7;
            var1 = var3.GUILD_PROFILE;
 703:
            _fun0002_ip = 715; continue _fun0002;
 705:
            var3 = _closure1_slot7;
            var1 = var3.GUILD_MEMBER_VERIFICATION;
 715:
            _fun0002_ip = 727; continue _fun0002;
 717:
            var3 = _closure1_slot7;
            var1 = var3.GUILD_SCHEDULED_EVENT_EXCEPTION;
 727:
            _fun0002_ip = 739; continue _fun0002;
 729:
            var3 = _closure1_slot7;
            var1 = var3.VOICE_CHANNEL_STATUS;
 739:
            _fun0002_ip = 751; continue _fun0002;
 741:
            var3 = _closure1_slot7;
            var1 = var3.HOME_SETTINGS;
 751:
            _fun0002_ip = 763; continue _fun0002;
 753:
            var3 = _closure1_slot7;
            var1 = var3.GUILD;
 763:
            _fun0002_ip = 775; continue _fun0002;
 765:
            var3 = _closure1_slot7;
            var1 = var3.GUILD_HOME;
 775:
            _fun0002_ip = 787; continue _fun0002;
 777:
            var3 = _closure1_slot7;
            var1 = var3.GUILD_ONBOARDING;
 787:
            _fun0002_ip = 799; continue _fun0002;
 789:
            var3 = _closure1_slot7;
            var1 = var3.ONBOARDING_PROMPT;
 799:
            _fun0002_ip = 811; continue _fun0002;
 801:
            var3 = _closure1_slot7;
            var1 = var3.GUILD;
 811:
            _fun0002_ip = 823; continue _fun0002;
 813:
            var3 = _closure1_slot7;
            var1 = var3.USER;
 823:
            _fun0002_ip = 835; continue _fun0002;
 825:
            var3 = _closure1_slot7;
            var1 = var3.AUTO_MODERATION_RULE;
 835:
            _fun0002_ip = 847; continue _fun0002;
 837:
            var3 = _closure1_slot7;
            var1 = var3.GUILD_SOUNDBOARD;
 847:
            _fun0002_ip = 859; continue _fun0002;
 849:
            var3 = _closure1_slot7;
            var1 = var3.APPLICATION_COMMAND;
 859:
            _fun0002_ip = 871; continue _fun0002;
 861:
            var3 = _closure1_slot7;
            var1 = var3.THREAD;
 871:
            _fun0002_ip = 883; continue _fun0002;
 873:
            var3 = _closure1_slot7;
            var1 = var3.GUILD_SCHEDULED_EVENT;
 883:
            _fun0002_ip = 895; continue _fun0002;
 885:
            var3 = _closure1_slot7;
            var1 = var3.STICKER;
 895:
            _fun0002_ip = 907; continue _fun0002;
 897:
            var3 = _closure1_slot7;
            var1 = var3.STAGE_INSTANCE;
 907:
            _fun0002_ip = 919; continue _fun0002;
 909:
            var3 = _closure1_slot7;
            var1 = var3.INTEGRATION;
 919:
            _fun0002_ip = 931; continue _fun0002;
 921:
            var3 = _closure1_slot7;
            var1 = var3.EMOJI;
 931:
            _fun0002_ip = 943; continue _fun0002;
 933:
            var3 = _closure1_slot7;
            var1 = var3.WEBHOOK;
 943:
            _fun0002_ip = 955; continue _fun0002;
 945:
            var3 = _closure1_slot7;
            var1 = var3.INVITE;
 955:
            _fun0002_ip = 967; continue _fun0002;
 957:
            var3 = _closure1_slot7;
            var1 = var3.ROLE;
 967:
            _fun0002_ip = 979; continue _fun0002;
 969:
            var3 = _closure1_slot7;
            var1 = var3.USER;
 979:
            _fun0002_ip = 991; continue _fun0002;
 981:
            var3 = _closure1_slot7;
            var1 = var3.CHANNEL_OVERWRITE;
 991:
            _fun0002_ip = 1003; continue _fun0002;
 993:
            var3 = _closure1_slot7;
            var1 = var3.CHANNEL;
 1003:
            _fun0002_ip = 1015; continue _fun0002;
 1005:
            var3 = _closure1_slot7;
            var1 = var3.GUILD;
 1015:
            _fun0002_ip = 1027; continue _fun0002;
 1017:
            var2 = _closure1_slot7;
            var1 = var2.ALL;
 1027:
            return var1;
        }
    };
    var _closure1_slot11 = var5;
    var4 = function getActionType(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot8;
            var2 = var2.CHANNEL_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1327; continue _fun0003 }
 23:
            var2 = _closure1_slot8;
            var2 = var2.CHANNEL_OVERWRITE_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1327; continue _fun0003 }
 40:
            var2 = _closure1_slot8;
            var2 = var2.MEMBER_BAN_REMOVE;
            if(!(var2 !== var3)) { _fun0003_ip = 1327; continue _fun0003 }
 57:
            var2 = _closure1_slot8;
            var2 = var2.ROLE_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1327; continue _fun0003 }
 74:
            var2 = _closure1_slot8;
            var2 = var2.INVITE_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1327; continue _fun0003 }
 91:
            var2 = _closure1_slot8;
            var2 = var2.WEBHOOK_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1327; continue _fun0003 }
 108:
            var2 = _closure1_slot8;
            var2 = var2.EMOJI_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1327; continue _fun0003 }
 125:
            var2 = _closure1_slot8;
            var2 = var2.STICKER_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1327; continue _fun0003 }
 142:
            var2 = _closure1_slot8;
            var2 = var2.MESSAGE_PIN;
            if(!(var2 !== var3)) { _fun0003_ip = 1327; continue _fun0003 }
 159:
            var2 = _closure1_slot8;
            var2 = var2.BOT_ADD;
            if(!(var2 !== var3)) { _fun0003_ip = 1327; continue _fun0003 }
 176:
            var2 = _closure1_slot8;
            var2 = var2.INTEGRATION_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1327; continue _fun0003 }
 193:
            var2 = _closure1_slot8;
            var2 = var2.STAGE_INSTANCE_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1327; continue _fun0003 }
 210:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_SCHEDULED_EVENT_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1327; continue _fun0003 }
 227:
            var2 = _closure1_slot8;
            var2 = var2.THREAD_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1327; continue _fun0003 }
 244:
            var2 = _closure1_slot8;
            var2 = var2.AUTO_MODERATION_RULE_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1327; continue _fun0003 }
 261:
            var2 = _closure1_slot8;
            var2 = var2.CREATOR_MONETIZATION_REQUEST_CREATED;
            if(!(var2 !== var3)) { _fun0003_ip = 1327; continue _fun0003 }
 278:
            var2 = _closure1_slot8;
            var2 = var2.ONBOARDING_PROMPT_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1327; continue _fun0003 }
 295:
            var2 = _closure1_slot8;
            var2 = var2.ONBOARDING_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1327; continue _fun0003 }
 312:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_HOME_FEATURE_ITEM;
            if(!(var2 !== var3)) { _fun0003_ip = 1327; continue _fun0003 }
 329:
            var2 = _closure1_slot8;
            var2 = var2.SOUNDBOARD_SOUND_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1327; continue _fun0003 }
 346:
            var2 = _closure1_slot8;
            var2 = var2.HOME_SETTINGS_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1327; continue _fun0003 }
 363:
            var2 = _closure1_slot8;
            var2 = var2.VOICE_CHANNEL_STATUS_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1327; continue _fun0003 }
 380:
            var2 = _closure1_slot8;
            var2 = var2.CHANNEL_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 397:
            var2 = _closure1_slot8;
            var2 = var2.CHANNEL_OVERWRITE_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 414:
            var2 = _closure1_slot8;
            var2 = var2.MEMBER_KICK;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 431:
            var2 = _closure1_slot8;
            var2 = var2.MEMBER_PRUNE;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 448:
            var2 = _closure1_slot8;
            var2 = var2.MEMBER_BAN_ADD;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 465:
            var2 = _closure1_slot8;
            var2 = var2.ROLE_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 482:
            var2 = _closure1_slot8;
            var2 = var2.INVITE_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 499:
            var2 = _closure1_slot8;
            var2 = var2.WEBHOOK_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 516:
            var2 = _closure1_slot8;
            var2 = var2.EMOJI_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 533:
            var2 = _closure1_slot8;
            var2 = var2.STICKER_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 550:
            var2 = _closure1_slot8;
            var2 = var2.MESSAGE_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 567:
            var2 = _closure1_slot8;
            var2 = var2.MESSAGE_BULK_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 584:
            var2 = _closure1_slot8;
            var2 = var2.MESSAGE_UNPIN;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 601:
            var2 = _closure1_slot8;
            var2 = var2.INTEGRATION_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 618:
            var2 = _closure1_slot8;
            var2 = var2.MEMBER_DISCONNECT;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 635:
            var2 = _closure1_slot8;
            var2 = var2.STAGE_INSTANCE_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 652:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_SCHEDULED_EVENT_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 669:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 686:
            var2 = _closure1_slot8;
            var2 = var2.THREAD_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 703:
            var2 = _closure1_slot8;
            var2 = var2.AUTO_MODERATION_BLOCK_MESSAGE;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 720:
            var2 = _closure1_slot8;
            var2 = var2.AUTO_MODERATION_RULE_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 737:
            var2 = _closure1_slot8;
            var2 = var2.ONBOARDING_PROMPT_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 754:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_HOME_REMOVE_ITEM;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 771:
            var2 = _closure1_slot8;
            var2 = var2.SOUNDBOARD_SOUND_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 788:
            var2 = _closure1_slot8;
            var2 = var2.VOICE_CHANNEL_STATUS_DELETE;
            if(!(var2 !== var3)) { _fun0003_ip = 1315; continue _fun0003 }
 805:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 822:
            var2 = _closure1_slot8;
            var2 = var2.CHANNEL_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 839:
            var2 = _closure1_slot8;
            var2 = var2.CHANNEL_OVERWRITE_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 856:
            var2 = _closure1_slot8;
            var2 = var2.MEMBER_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 873:
            var2 = _closure1_slot8;
            var2 = var2.MEMBER_ROLE_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 890:
            var2 = _closure1_slot8;
            var2 = var2.ROLE_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 907:
            var2 = _closure1_slot8;
            var2 = var2.INVITE_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 924:
            var2 = _closure1_slot8;
            var2 = var2.WEBHOOK_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 941:
            var2 = _closure1_slot8;
            var2 = var2.EMOJI_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 958:
            var2 = _closure1_slot8;
            var2 = var2.STICKER_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 975:
            var2 = _closure1_slot8;
            var2 = var2.INTEGRATION_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 992:
            var2 = _closure1_slot8;
            var2 = var2.MEMBER_MOVE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 1009:
            var2 = _closure1_slot8;
            var2 = var2.STAGE_INSTANCE_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 1026:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_SCHEDULED_EVENT_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 1043:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 1060:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 1077:
            var2 = _closure1_slot8;
            var2 = var2.THREAD_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 1094:
            var2 = _closure1_slot8;
            var2 = var2.APPLICATION_COMMAND_PERMISSION_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 1111:
            var2 = _closure1_slot8;
            var2 = var2.CREATOR_MONETIZATION_TERMS_ACCEPTED;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 1128:
            var2 = _closure1_slot8;
            var2 = var2.AUTO_MODERATION_RULE_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 1145:
            var2 = _closure1_slot8;
            var2 = var2.AUTO_MODERATION_FLAG_TO_CHANNEL;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 1162:
            var2 = _closure1_slot8;
            var2 = var2.AUTO_MODERATION_USER_COMMUNICATION_DISABLED;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 1179:
            var2 = _closure1_slot8;
            var2 = var2.AUTO_MODERATION_QUARANTINE_USER;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 1193:
            var2 = _closure1_slot8;
            var2 = var2.ONBOARDING_PROMPT_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 1207:
            var2 = _closure1_slot8;
            var2 = var2.ONBOARDING_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 1221:
            var2 = _closure1_slot8;
            var2 = var2.SOUNDBOARD_SOUND_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 1235:
            var2 = _closure1_slot8;
            var2 = var2.HOME_SETTINGS_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 1249:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_MEMBER_VERIFICATION_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 1263:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_PROFILE_UPDATE;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 1277:
            var2 = _closure1_slot8;
            var2 = var2.GUILD_MIGRATE_PIN_PERMISSION;
            if(!(var2 !== var3)) { _fun0003_ip = 1303; continue _fun0003 }
 1291:
            var2 = _closure1_slot9;
            var2 = var2.ALL;
            return var2;
 1303:
            var2 = _closure1_slot9;
            var2 = var2.UPDATE;
            return var2;
 1315:
            var2 = _closure1_slot9;
            var2 = var2.DELETE;
            return var2;
 1327:
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
 0:
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
                if(var1) { _fun0004_ip = 65; continue _fun0004 }
 52:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var5, var6);
                _fun0004_ip = 103; continue _fun0004;
 65:
                var7 = global;
                var10 = var7.Reflect;
                var9 = var10.construct;
                var7 = _closure1_slot3;
                var7 = var7.bind(var6)(var5);
                var8 = var7.constructor;
                var7 = new Array(0);
                var1 = var9.bind(var10)(var11, var7, var8);
 103:
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
                if(!(var2 == var5)) { _fun0004_ip = 228; continue _fun0004 }
 175:
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
 228:
                var1['timestampStart'] = var5;
                var5 = var3.timestampEnd;
                if(!(var2 == var5)) { _fun0004_ip = 250; continue _fun0004 }
 244:
                var5 = var1.timestampStart;
 250:
                var1['timestampEnd'] = var5;
                var5 = var3.userId;
                var1['userId'] = var5;
                var5 = var3.changes;
                if(!(var2 == var5)) { _fun0004_ip = 281; continue _fun0004 }
 277:
                var5 = new Array(0);
 281:
                var1['changes'] = var5;
                var5 = _closure1_slot11;
                var4 = var1.action;
                var4 = var5.bind(var6)(var4);
                var1['targetType'] = var4;
                var4 = var3.options;
                if(!(var2 == var4)) { _fun0004_ip = 318; continue _fun0004 }
 316:
                var4 = {};
 318:
                var1['options'] = var4;
                var4 = var3.target;
                if(!(var2 == var4)) { _fun0004_ip = 339; continue _fun0004 }
 334:
                var4 = var3.id;
 339:
                var1['target'] = var4;
                var3 = var3.user;
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0004_ip = 362; continue _fun0004 }
 359:
                var2 = var3;
 362:
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