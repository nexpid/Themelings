// app/records/AuditLogRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    golf = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun125146: for(var _fun125146_ip = 0; ; ) switch(_fun125146_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot11;
            entity = entity.bind(zulu)();
            if(entity) { _fun125146_ip = 48; continue _fun125146 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun125146_ip = 86; continue _fun125146;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun125147: for(var _fun125147_ip = 0; ; ) switch(_fun125147_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun125147_ip = 76; continue _fun125147;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot11 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    report = function(argFoo) { // Original name: getTargetType
        _fun125150: for(var _fun125150_ip = 0; ; ) switch(_fun125150_ip) {
 0:
            oscar = argFoo;
            entity = _closure1_slot8;
            entity = entity.ALL;
            if(!(oscar !== entity)) { _fun125150_ip = 959; continue _fun125150 }
 23:
            entity = _closure1_slot8;
            entity = entity.GUILD_UPDATE;
            if(!(!(oscar <= entity))) { _fun125150_ip = 947; continue _fun125150 }
 40:
            entity = _closure1_slot8;
            entity = entity.CHANNEL_DELETE;
            if(!(!(oscar <= entity))) { _fun125150_ip = 935; continue _fun125150 }
 57:
            entity = _closure1_slot8;
            entity = entity.MESSAGE_BULK_DELETE;
            if(!(oscar !== entity)) { _fun125150_ip = 935; continue _fun125150 }
 74:
            entity = _closure1_slot8;
            entity = entity.CHANNEL_OVERWRITE_DELETE;
            if(!(!(oscar <= entity))) { _fun125150_ip = 923; continue _fun125150 }
 91:
            entity = _closure1_slot8;
            entity = entity.BOT_ADD;
            if(!(!(oscar <= entity))) { _fun125150_ip = 911; continue _fun125150 }
 108:
            entity = _closure1_slot8;
            entity = entity.MESSAGE_DELETE;
            if(!(oscar !== entity)) { _fun125150_ip = 911; continue _fun125150 }
 125:
            entity = _closure1_slot8;
            entity = entity.MESSAGE_PIN;
            if(!(oscar !== entity)) { _fun125150_ip = 911; continue _fun125150 }
 142:
            entity = _closure1_slot8;
            entity = entity.MESSAGE_UNPIN;
            if(!(oscar !== entity)) { _fun125150_ip = 911; continue _fun125150 }
 159:
            entity = _closure1_slot8;
            entity = entity.ROLE_DELETE;
            if(!(!(oscar <= entity))) { _fun125150_ip = 899; continue _fun125150 }
 176:
            entity = _closure1_slot8;
            entity = entity.INVITE_DELETE;
            if(!(!(oscar <= entity))) { _fun125150_ip = 887; continue _fun125150 }
 193:
            entity = _closure1_slot8;
            entity = entity.WEBHOOK_DELETE;
            if(!(!(oscar <= entity))) { _fun125150_ip = 875; continue _fun125150 }
 210:
            entity = _closure1_slot8;
            entity = entity.EMOJI_DELETE;
            if(!(!(oscar <= entity))) { _fun125150_ip = 863; continue _fun125150 }
 227:
            entity = _closure1_slot8;
            entity = entity.INTEGRATION_DELETE;
            if(!(!(oscar <= entity))) { _fun125150_ip = 851; continue _fun125150 }
 244:
            entity = _closure1_slot8;
            entity = entity.STAGE_INSTANCE_DELETE;
            if(!(!(oscar <= entity))) { _fun125150_ip = 839; continue _fun125150 }
 261:
            entity = _closure1_slot8;
            entity = entity.STICKER_DELETE;
            if(!(!(oscar <= entity))) { _fun125150_ip = 827; continue _fun125150 }
 278:
            entity = _closure1_slot8;
            entity = entity.GUILD_SCHEDULED_EVENT_DELETE;
            if(!(!(oscar <= entity))) { _fun125150_ip = 815; continue _fun125150 }
 295:
            entity = _closure1_slot8;
            entity = entity.THREAD_DELETE;
            if(!(!(oscar <= entity))) { _fun125150_ip = 803; continue _fun125150 }
 312:
            entity = _closure1_slot8;
            entity = entity.APPLICATION_COMMAND_PERMISSION_UPDATE;
            if(!(oscar !== entity)) { _fun125150_ip = 791; continue _fun125150 }
 329:
            entity = _closure1_slot8;
            entity = entity.SOUNDBOARD_SOUND_DELETE;
            if(!(!(oscar <= entity))) { _fun125150_ip = 779; continue _fun125150 }
 346:
            entity = _closure1_slot8;
            entity = entity.AUTO_MODERATION_BLOCK_MESSAGE;
            if(!(!(oscar < entity))) { _fun125150_ip = 767; continue _fun125150 }
 363:
            entity = _closure1_slot8;
            entity = entity.AUTO_MODERATION_BLOCK_MESSAGE;
            if(!(oscar !== entity)) { _fun125150_ip = 755; continue _fun125150 }
 380:
            entity = _closure1_slot8;
            entity = entity.AUTO_MODERATION_FLAG_TO_CHANNEL;
            if(!(oscar !== entity)) { _fun125150_ip = 755; continue _fun125150 }
 397:
            entity = _closure1_slot8;
            entity = entity.AUTO_MODERATION_USER_COMMUNICATION_DISABLED;
            if(!(oscar !== entity)) { _fun125150_ip = 755; continue _fun125150 }
 414:
            entity = _closure1_slot8;
            entity = entity.AUTO_MODERATION_QUARANTINE_USER;
            if(!(oscar !== entity)) { _fun125150_ip = 755; continue _fun125150 }
 431:
            entity = _closure1_slot8;
            entity = entity.CREATOR_MONETIZATION_TERMS_ACCEPTED;
            if(!(!(oscar <= entity))) { _fun125150_ip = 743; continue _fun125150 }
 448:
            entity = _closure1_slot8;
            entity = entity.ONBOARDING_PROMPT_DELETE;
            if(!(!(oscar <= entity))) { _fun125150_ip = 731; continue _fun125150 }
 465:
            entity = _closure1_slot8;
            entity = entity.ONBOARDING_UPDATE;
            if(!(!(oscar <= entity))) { _fun125150_ip = 719; continue _fun125150 }
 482:
            entity = _closure1_slot8;
            entity = entity.GUILD_HOME_REMOVE_ITEM;
            if(!(!(oscar <= entity))) { _fun125150_ip = 707; continue _fun125150 }
 499:
            entity = _closure1_slot8;
            entity = entity.HARMFUL_LINKS_BLOCKED_MESSAGE;
            if(!(!(oscar <= entity))) { _fun125150_ip = 695; continue _fun125150 }
 516:
            entity = _closure1_slot8;
            entity = entity.HOME_SETTINGS_UPDATE;
            if(!(!(oscar <= entity))) { _fun125150_ip = 683; continue _fun125150 }
 533:
            entity = _closure1_slot8;
            entity = entity.VOICE_CHANNEL_STATUS_DELETE;
            if(!(!(oscar <= entity))) { _fun125150_ip = 671; continue _fun125150 }
 550:
            entity = _closure1_slot8;
            entity = entity.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE;
            if(!(!(oscar <= entity))) { _fun125150_ip = 659; continue _fun125150 }
 564:
            entity = _closure1_slot8;
            entity = entity.GUILD_MEMBER_VERIFICATION_UPDATE;
            if(!(!(oscar <= entity))) { _fun125150_ip = 647; continue _fun125150 }
 578:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 7;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.captureMessage;
            entity = global;
            entity = entity.HermesInternal;
            report = entity.concat;
            entity = 'Unknown target type for: ';
            entity = report.bind(entity)(oscar);
            entity = zulu.bind(tango)(entity);
            entity = _closure1_slot7;
            entity = entity.UNKNOWN;
            _fun125150_ip = 657; continue _fun125150;
 647:
            zulu = _closure1_slot7;
            entity = zulu.GUILD_MEMBER_VERIFICATION;
 657:
            _fun125150_ip = 669; continue _fun125150;
 659:
            zulu = _closure1_slot7;
            entity = zulu.GUILD_SCHEDULED_EVENT_EXCEPTION;
 669:
            _fun125150_ip = 681; continue _fun125150;
 671:
            zulu = _closure1_slot7;
            entity = zulu.VOICE_CHANNEL_STATUS;
 681:
            _fun125150_ip = 693; continue _fun125150;
 683:
            zulu = _closure1_slot7;
            entity = zulu.HOME_SETTINGS;
 693:
            _fun125150_ip = 705; continue _fun125150;
 695:
            zulu = _closure1_slot7;
            entity = zulu.GUILD;
 705:
            _fun125150_ip = 717; continue _fun125150;
 707:
            zulu = _closure1_slot7;
            entity = zulu.GUILD_HOME;
 717:
            _fun125150_ip = 729; continue _fun125150;
 719:
            zulu = _closure1_slot7;
            entity = zulu.GUILD_ONBOARDING;
 729:
            _fun125150_ip = 741; continue _fun125150;
 731:
            zulu = _closure1_slot7;
            entity = zulu.ONBOARDING_PROMPT;
 741:
            _fun125150_ip = 753; continue _fun125150;
 743:
            zulu = _closure1_slot7;
            entity = zulu.GUILD;
 753:
            _fun125150_ip = 765; continue _fun125150;
 755:
            zulu = _closure1_slot7;
            entity = zulu.USER;
 765:
            _fun125150_ip = 777; continue _fun125150;
 767:
            zulu = _closure1_slot7;
            entity = zulu.AUTO_MODERATION_RULE;
 777:
            _fun125150_ip = 789; continue _fun125150;
 779:
            zulu = _closure1_slot7;
            entity = zulu.GUILD_SOUNDBOARD;
 789:
            _fun125150_ip = 801; continue _fun125150;
 791:
            zulu = _closure1_slot7;
            entity = zulu.APPLICATION_COMMAND;
 801:
            _fun125150_ip = 813; continue _fun125150;
 803:
            zulu = _closure1_slot7;
            entity = zulu.THREAD;
 813:
            _fun125150_ip = 825; continue _fun125150;
 815:
            zulu = _closure1_slot7;
            entity = zulu.GUILD_SCHEDULED_EVENT;
 825:
            _fun125150_ip = 837; continue _fun125150;
 827:
            zulu = _closure1_slot7;
            entity = zulu.STICKER;
 837:
            _fun125150_ip = 849; continue _fun125150;
 839:
            zulu = _closure1_slot7;
            entity = zulu.STAGE_INSTANCE;
 849:
            _fun125150_ip = 861; continue _fun125150;
 851:
            zulu = _closure1_slot7;
            entity = zulu.INTEGRATION;
 861:
            _fun125150_ip = 873; continue _fun125150;
 863:
            zulu = _closure1_slot7;
            entity = zulu.EMOJI;
 873:
            _fun125150_ip = 885; continue _fun125150;
 875:
            zulu = _closure1_slot7;
            entity = zulu.WEBHOOK;
 885:
            _fun125150_ip = 897; continue _fun125150;
 887:
            zulu = _closure1_slot7;
            entity = zulu.INVITE;
 897:
            _fun125150_ip = 909; continue _fun125150;
 899:
            zulu = _closure1_slot7;
            entity = zulu.ROLE;
 909:
            _fun125150_ip = 921; continue _fun125150;
 911:
            zulu = _closure1_slot7;
            entity = zulu.USER;
 921:
            _fun125150_ip = 933; continue _fun125150;
 923:
            zulu = _closure1_slot7;
            entity = zulu.CHANNEL_OVERWRITE;
 933:
            _fun125150_ip = 945; continue _fun125150;
 935:
            zulu = _closure1_slot7;
            entity = zulu.CHANNEL;
 945:
            _fun125150_ip = 957; continue _fun125150;
 947:
            zulu = _closure1_slot7;
            entity = zulu.GUILD;
 957:
            _fun125150_ip = 969; continue _fun125150;
 959:
            mike = _closure1_slot7;
            entity = mike.ALL;
 969:
            return entity;
        }
    };
    var _closure1_slot12 = report;
    tango = function(argFoo) { // Original name: getActionType
        _fun125151: for(var _fun125151_ip = 0; ; ) switch(_fun125151_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot8;
            mike = mike.CHANNEL_CREATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1293; continue _fun125151 }
 23:
            mike = _closure1_slot8;
            mike = mike.CHANNEL_OVERWRITE_CREATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1293; continue _fun125151 }
 40:
            mike = _closure1_slot8;
            mike = mike.MEMBER_BAN_REMOVE;
            if(!(mike !== zulu)) { _fun125151_ip = 1293; continue _fun125151 }
 57:
            mike = _closure1_slot8;
            mike = mike.ROLE_CREATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1293; continue _fun125151 }
 74:
            mike = _closure1_slot8;
            mike = mike.INVITE_CREATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1293; continue _fun125151 }
 91:
            mike = _closure1_slot8;
            mike = mike.WEBHOOK_CREATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1293; continue _fun125151 }
 108:
            mike = _closure1_slot8;
            mike = mike.EMOJI_CREATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1293; continue _fun125151 }
 125:
            mike = _closure1_slot8;
            mike = mike.STICKER_CREATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1293; continue _fun125151 }
 142:
            mike = _closure1_slot8;
            mike = mike.MESSAGE_PIN;
            if(!(mike !== zulu)) { _fun125151_ip = 1293; continue _fun125151 }
 159:
            mike = _closure1_slot8;
            mike = mike.BOT_ADD;
            if(!(mike !== zulu)) { _fun125151_ip = 1293; continue _fun125151 }
 176:
            mike = _closure1_slot8;
            mike = mike.INTEGRATION_CREATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1293; continue _fun125151 }
 193:
            mike = _closure1_slot8;
            mike = mike.STAGE_INSTANCE_CREATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1293; continue _fun125151 }
 210:
            mike = _closure1_slot8;
            mike = mike.GUILD_SCHEDULED_EVENT_CREATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1293; continue _fun125151 }
 227:
            mike = _closure1_slot8;
            mike = mike.THREAD_CREATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1293; continue _fun125151 }
 244:
            mike = _closure1_slot8;
            mike = mike.AUTO_MODERATION_RULE_CREATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1293; continue _fun125151 }
 261:
            mike = _closure1_slot8;
            mike = mike.CREATOR_MONETIZATION_REQUEST_CREATED;
            if(!(mike !== zulu)) { _fun125151_ip = 1293; continue _fun125151 }
 278:
            mike = _closure1_slot8;
            mike = mike.ONBOARDING_PROMPT_CREATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1293; continue _fun125151 }
 295:
            mike = _closure1_slot8;
            mike = mike.ONBOARDING_CREATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1293; continue _fun125151 }
 312:
            mike = _closure1_slot8;
            mike = mike.GUILD_HOME_FEATURE_ITEM;
            if(!(mike !== zulu)) { _fun125151_ip = 1293; continue _fun125151 }
 329:
            mike = _closure1_slot8;
            mike = mike.SOUNDBOARD_SOUND_CREATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1293; continue _fun125151 }
 346:
            mike = _closure1_slot8;
            mike = mike.HOME_SETTINGS_CREATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1293; continue _fun125151 }
 363:
            mike = _closure1_slot8;
            mike = mike.VOICE_CHANNEL_STATUS_CREATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1293; continue _fun125151 }
 380:
            mike = _closure1_slot8;
            mike = mike.CHANNEL_DELETE;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 397:
            mike = _closure1_slot8;
            mike = mike.CHANNEL_OVERWRITE_DELETE;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 414:
            mike = _closure1_slot8;
            mike = mike.MEMBER_KICK;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 431:
            mike = _closure1_slot8;
            mike = mike.MEMBER_PRUNE;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 448:
            mike = _closure1_slot8;
            mike = mike.MEMBER_BAN_ADD;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 465:
            mike = _closure1_slot8;
            mike = mike.ROLE_DELETE;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 482:
            mike = _closure1_slot8;
            mike = mike.INVITE_DELETE;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 499:
            mike = _closure1_slot8;
            mike = mike.WEBHOOK_DELETE;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 516:
            mike = _closure1_slot8;
            mike = mike.EMOJI_DELETE;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 533:
            mike = _closure1_slot8;
            mike = mike.STICKER_DELETE;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 550:
            mike = _closure1_slot8;
            mike = mike.MESSAGE_DELETE;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 567:
            mike = _closure1_slot8;
            mike = mike.MESSAGE_BULK_DELETE;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 584:
            mike = _closure1_slot8;
            mike = mike.MESSAGE_UNPIN;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 601:
            mike = _closure1_slot8;
            mike = mike.INTEGRATION_DELETE;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 618:
            mike = _closure1_slot8;
            mike = mike.MEMBER_DISCONNECT;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 635:
            mike = _closure1_slot8;
            mike = mike.STAGE_INSTANCE_DELETE;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 652:
            mike = _closure1_slot8;
            mike = mike.GUILD_SCHEDULED_EVENT_DELETE;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 669:
            mike = _closure1_slot8;
            mike = mike.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 686:
            mike = _closure1_slot8;
            mike = mike.THREAD_DELETE;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 703:
            mike = _closure1_slot8;
            mike = mike.AUTO_MODERATION_BLOCK_MESSAGE;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 720:
            mike = _closure1_slot8;
            mike = mike.AUTO_MODERATION_RULE_DELETE;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 737:
            mike = _closure1_slot8;
            mike = mike.ONBOARDING_PROMPT_DELETE;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 754:
            mike = _closure1_slot8;
            mike = mike.GUILD_HOME_REMOVE_ITEM;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 771:
            mike = _closure1_slot8;
            mike = mike.SOUNDBOARD_SOUND_DELETE;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 788:
            mike = _closure1_slot8;
            mike = mike.VOICE_CHANNEL_STATUS_DELETE;
            if(!(mike !== zulu)) { _fun125151_ip = 1281; continue _fun125151 }
 805:
            mike = _closure1_slot8;
            mike = mike.GUILD_UPDATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 822:
            mike = _closure1_slot8;
            mike = mike.CHANNEL_UPDATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 839:
            mike = _closure1_slot8;
            mike = mike.CHANNEL_OVERWRITE_UPDATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 856:
            mike = _closure1_slot8;
            mike = mike.MEMBER_UPDATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 873:
            mike = _closure1_slot8;
            mike = mike.MEMBER_ROLE_UPDATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 890:
            mike = _closure1_slot8;
            mike = mike.ROLE_UPDATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 907:
            mike = _closure1_slot8;
            mike = mike.INVITE_UPDATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 924:
            mike = _closure1_slot8;
            mike = mike.WEBHOOK_UPDATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 941:
            mike = _closure1_slot8;
            mike = mike.EMOJI_UPDATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 958:
            mike = _closure1_slot8;
            mike = mike.STICKER_UPDATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 975:
            mike = _closure1_slot8;
            mike = mike.INTEGRATION_UPDATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 992:
            mike = _closure1_slot8;
            mike = mike.MEMBER_MOVE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 1009:
            mike = _closure1_slot8;
            mike = mike.STAGE_INSTANCE_UPDATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 1026:
            mike = _closure1_slot8;
            mike = mike.GUILD_SCHEDULED_EVENT_UPDATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 1043:
            mike = _closure1_slot8;
            mike = mike.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 1060:
            mike = _closure1_slot8;
            mike = mike.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 1077:
            mike = _closure1_slot8;
            mike = mike.THREAD_UPDATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 1094:
            mike = _closure1_slot8;
            mike = mike.APPLICATION_COMMAND_PERMISSION_UPDATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 1111:
            mike = _closure1_slot8;
            mike = mike.CREATOR_MONETIZATION_TERMS_ACCEPTED;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 1128:
            mike = _closure1_slot8;
            mike = mike.AUTO_MODERATION_RULE_UPDATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 1145:
            mike = _closure1_slot8;
            mike = mike.AUTO_MODERATION_FLAG_TO_CHANNEL;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 1159:
            mike = _closure1_slot8;
            mike = mike.AUTO_MODERATION_USER_COMMUNICATION_DISABLED;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 1173:
            mike = _closure1_slot8;
            mike = mike.AUTO_MODERATION_QUARANTINE_USER;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 1187:
            mike = _closure1_slot8;
            mike = mike.ONBOARDING_PROMPT_UPDATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 1201:
            mike = _closure1_slot8;
            mike = mike.ONBOARDING_UPDATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 1215:
            mike = _closure1_slot8;
            mike = mike.SOUNDBOARD_SOUND_UPDATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 1229:
            mike = _closure1_slot8;
            mike = mike.HOME_SETTINGS_UPDATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 1243:
            mike = _closure1_slot8;
            mike = mike.GUILD_MEMBER_VERIFICATION_UPDATE;
            if(!(mike !== zulu)) { _fun125151_ip = 1269; continue _fun125151 }
 1257:
            mike = _closure1_slot9;
            mike = mike.ALL;
            return mike;
 1269:
            mike = _closure1_slot9;
            mike = mike.UPDATE;
            return mike;
 1281:
            mike = _closure1_slot9;
            mike = mike.DELETE;
            return mike;
 1293:
            entity = _closure1_slot9;
            entity = entity.CREATE;
            return entity;
        }
    };
    var _closure1_slot13 = tango;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, mike);
    entity = 0;
    mike = verify[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = verify[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = verify[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = verify[mike];
    offset = golf.bind(entity)(mike);
    var _closure1_slot5 = offset;
    mike = 4;
    mike = verify[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 5;
    mike = verify[mike];
    golf = golf.bind(entity)(mike);
    mike = 6;
    mike = verify[mike];
    mike = options.bind(entity)(mike);
    yankee = mike.AuditLogTargetTypes;
    var _closure1_slot7 = yankee;
    yankee = mike.AuditLogActions;
    var _closure1_slot8 = yankee;
    mike = mike.AuditLogActionTypes;
    var _closure1_slot9 = mike;
    mike = function(argFoo, argBar, argBaz) { // Original name: AuditLogChange
        zulu = this;
        tango = _closure1_slot6;
        mike = _closure1_slot14;
        entity = undefined;
        mike = tango.bind(entity)(zulu, mike);
        mike = argFoo;
        zulu['key'] = mike;
        mike = argBar;
        zulu['oldValue'] = mike;
        mike = argBaz;
        zulu['newValue'] = mike;
        return entity;
    };
    var _closure1_slot14 = mike;
    mike = offset.bind(entity)(mike);
    oscar = function(argFoo) {
        zulu = function(argFoo) { // Original name: AuditLogRecord
            _fun125154: for(var _fun125154_ip = 0; ; ) switch(_fun125154_ip) {
 0:
                zulu = argFoo;
                report = this;
                entity = _closure1_slot6;
                mike = _closure2_slot0;
                oscar = undefined;
                entity = entity.bind(oscar)(report, mike);
                entity = _closure1_slot10;
                entity = entity.bind(oscar)(report, mike);
                mike = zulu.id;
                entity['id'] = mike;
                mike = zulu.action;
                entity['action'] = mike;
                report = _closure1_slot13;
                mike = entity.action;
                mike = report.bind(oscar)(mike);
                entity['actionType'] = mike;
                mike = zulu.targetId;
                entity['targetId'] = mike;
                report = zulu.timestampStart;
                mike = null;
                if(!(mike == report)) { _fun125154_ip = 157; continue _fun125154 }
 104:
                verify = _closure1_slot0;
                offset = _closure1_slot1;
                golf = 8;
                golf = offset[golf];
                options = verify.bind(oscar)(golf);
                golf = 9;
                golf = offset[golf];
                offset = verify.bind(oscar)(golf);
                verify = offset.extractTimestamp;
                golf = entity.id;
                golf = verify.bind(offset)(golf);
                report = options.bind(oscar)(golf);
 157:
                entity['timestampStart'] = report;
                report = zulu.timestampEnd;
                if(!(mike == report)) { _fun125154_ip = 179; continue _fun125154 }
 173:
                report = entity.timestampStart;
 179:
                entity['timestampEnd'] = report;
                report = zulu.userId;
                entity['userId'] = report;
                report = zulu.changes;
                if(!(mike == report)) { _fun125154_ip = 210; continue _fun125154 }
 206:
                report = new Array(0);
 210:
                entity['changes'] = report;
                report = _closure1_slot12;
                tango = entity.action;
                tango = report.bind(oscar)(tango);
                entity['targetType'] = tango;
                tango = zulu.options;
                if(!(mike == tango)) { _fun125154_ip = 247; continue _fun125154 }
 245:
                tango = {};
 247:
                entity['options'] = tango;
                tango = zulu.target;
                if(!(mike == tango)) { _fun125154_ip = 268; continue _fun125154 }
 263:
                tango = zulu.id;
 268:
                entity['target'] = tango;
                zulu = zulu.user;
                tango = mike != zulu;
                mike = null;
                if(!tango) { _fun125154_ip = 291; continue _fun125154 }
 288:
                mike = zulu;
 291:
                entity['user'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot4;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot5;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    oscar = oscar.bind(entity)(golf);
    golf = 10;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'records/AuditLogRecord.tsx';
    golf = options.bind(verify)(golf);
    zulu['default'] = oscar;
    zulu['getTargetType'] = report;
    zulu['getActionType'] = tango;
    zulu['AuditLogChange'] = mike;
    return entity;
})();