// app/modules/messages/native/renderer/system_messages/RoleSubscriptionPurchaseSystemMessage.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: RoleSubscriptionPurchaseSystemMessageInner
        _fun72482: for(var _fun72482_ip = 0; ; ) switch(_fun72482_ip) {
 0:
            mike = argFoo;
            backup = mike.row;
            romeo = mike.roleSubscriptionData;
            var _closure2_slot0 = romeo;
            kilo = mike.guildId;
            var _closure2_slot1 = kilo;
            report = backup.message;
            var _closure2_slot2 = report;
            foxtrot = report.author;
            var _closure2_slot3 = foxtrot;
            mike = report.getChannelId;
            sizing = mike.bind(report)();
            var _closure2_slot4 = sizing;
            zulu = _closure1_slot0;
            verify = _closure1_slot2;
            mike = 5;
            mike = verify[mike];
            tango = undefined;
            oscar = zulu.bind(tango)(mike);
            mike = oscar.useNullableMessageAuthor;
            mike = mike.bind(oscar)(report);
            yankee = mike.nick;
            var _closure2_slot5 = yankee;
            echo = mike.guildMemberAvatar;
            oscar = _closure1_slot1;
            mike = 6;
            mike = verify[mike];
            mike = oscar.bind(tango)(mike);
            offset = mike.bind(tango)(report);
            mike = 7;
            mike = verify[mike];
            options = oscar.bind(tango)(mike);
            mike = {};
            oscar = 8;
            output = verify[oscar];
            update = zulu.bind(tango)(output);
            result = update.pickRoleSubscriptionPurchaseSticker;
            output = report.id;
            output = result.bind(update)(output);
            mike['sticker'] = output;
            mike['isStickerReplyEnabled'] = offset;
            options = options.bind(tango)(mike);
            mike = 9;
            mike = verify[mike];
            verify = zulu.bind(tango)(mike);
            zulu = verify.ensureAvatarSource;
            mike = null;
            if(!(mike != echo)) { _fun72482_ip = 221; continue _fun72482 }
 217:
            if(!(mike == kilo)) { _fun72482_ip = 234; continue _fun72482 }
 221:
            mike = foxtrot.getAvatarSource;
            mike = mike.bind(foxtrot)(tango);
            _fun72482_ip = 286; continue _fun72482;
 234:
            output = _closure1_slot0;
            result = _closure1_slot2;
            offset = 10;
            offset = result[offset];
            result = output.bind(tango)(offset);
            output = result.getGuildMemberAvatarSource;
            offset = {};
            update = foxtrot.id;
            offset['userId'] = update;
            offset['guildMemberAvatar'] = echo;
            offset['guildId'] = kilo;
            mike = output.bind(result)(offset, foxtrot);
 286:
            offset = zulu.bind(verify)(mike);
            verify = _closure1_slot3;
            zulu = verify.useMemo;
            mike = new Array(6);
            mike[0] = sizing;
            mike[1] = kilo;
            kilo = report.id;
            mike[2] = kilo;
            mike[3] = yankee;
            mike[4] = romeo;
            foxtrot = foxtrot.id;
            mike[5] = foxtrot;
            entity = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 8;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.getRoleSubscriptionPurchaseSystemMessageContentMobile;
                entity = {};
                report = _closure2_slot5;
                entity['username'] = report;
                golf = _closure2_slot1;
                entity['guildId'] = golf;
                report = {};
                oscar = 'bindUserMenu';
                report['action'] = oscar;
                oscar = _closure2_slot3;
                oscar = oscar.id;
                report['userId'] = oscar;
                oscar = _closure2_slot4;
                report['messageChannelId'] = oscar;
                entity['usernameOnClickHandler'] = report;
                report = {};
                options = 'bindOpenRoleSubscriptionOverview';
                report['action'] = options;
                report['guildId'] = golf;
                golf = _closure2_slot2;
                golf = golf.id;
                report['messageId'] = golf;
                report['channelId'] = oscar;
                tango = _closure2_slot0;
                oscar = tango.role_subscription_listing_id;
                report['roleSubscriptionListingId'] = oscar;
                entity['roleSubscriptionOnClickHandler'] = report;
                entity['roleSubscriptionData'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            foxtrot = zulu.bind(verify)(entity, mike);
            zulu = _closure1_slot7;
            mike = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 13;
            entity = verify[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['row'] = backup;
            entity['content'] = foxtrot;
            romeo = romeo.total_months_subscribed;
            entity['totalMonthsSubscribed'] = romeo;
            entity['username'] = yankee;
            offset = offset.uri;
            entity['avatarURL'] = offset;
            entity['sticker'] = options;
            options = _closure1_slot0;
            oscar = verify[oscar];
            offset = options.bind(tango)(oscar);
            golf = offset.getRoleSubscriptionPurchaseStickerCTA;
            oscar = report.id;
            report = false;
            report = golf.bind(offset)(oscar, report);
            entity['stickerLabel'] = report;
            report = 11;
            oscar = verify[report];
            oscar = options.bind(tango)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            report = verify[report];
            report = options.bind(tango)(report);
            report = report.t;
            report = report.piPHvb;
            report = oscar.bind(golf)(report);
            entity['welcomeLabel'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SystemChannelFlags;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot7 = tango;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/system_messages/RoleSubscriptionPurchaseSystemMessage.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: RoleSubscriptionPurchaseSystemMessage
        _fun72484: for(var _fun72484_ip = 0; ; ) switch(_fun72484_ip) {
 0:
            mike = argFoo;
            options = mike.row;
            zulu = options.message;
            mike = zulu.getChannelId;
            offset = mike.bind(zulu)();
            var _closure2_slot0 = offset;
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            tango = 14;
            tango = report[tango];
            report = undefined;
            verify = oscar.bind(report)(tango);
            golf = verify.useStateFromStores;
            tango = _closure1_slot4;
            oscar = new Array(1);
            oscar[0] = tango;
            tango = new Array(1);
            tango[0] = offset;
            entity = function() {
                zulu = _closure1_slot4;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = golf.bind(verify)(oscar, entity, tango);
            entity = null;
            oscar = entity == golf;
            tango = undefined;
            if(oscar) { _fun72484_ip = 115; continue _fun72484 }
 105:
            oscar = golf.getGuildId;
            tango = oscar.bind(golf)();
 115:
            golf = entity != tango;
            oscar = undefined;
            if(!golf) { _fun72484_ip = 127; continue _fun72484 }
 124:
            oscar = tango;
 127:
            golf = zulu.roleSubscriptionData;
            zulu = entity == golf;
            entity = null;
            if(zulu) { _fun72484_ip = 172; continue _fun72484 }
 142:
            tango = _closure1_slot7;
            zulu = _closure1_slot8;
            mike = {};
            mike['row'] = options;
            mike['roleSubscriptionData'] = golf;
            mike['guildId'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 172:
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: createRoleSubscriptionPurchaseSystemMessage
        _fun72486: for(var _fun72486_ip = 0; ; ) switch(_fun72486_ip) {
 0:
            report = argFoo;
            oscar = report.message;
            yankee = oscar.roleSubscriptionData;
            entity = null;
            if(!(entity != yankee)) { _fun72486_ip = 734; continue _fun72486 }
 23:
            mike = oscar.author;
            options = _closure1_slot4;
            golf = options.getChannel;
            tango = oscar.getChannelId;
            tango = tango.bind(oscar)();
            romeo = golf.bind(options)(tango);
            options = entity == romeo;
            tango = undefined;
            golf = undefined;
            if(options) { _fun72486_ip = 77; continue _fun72486 }
 67:
            options = romeo.getGuildId;
            golf = options.bind(romeo)();
 77:
            verify = _closure1_slot5;
            options = verify.getGuild;
            options = options.bind(verify)(golf);
            offset = _closure1_slot0;
            foxtrot = _closure1_slot2;
            verify = 5;
            verify = foxtrot[verify];
            offset = offset.bind(tango)(verify);
            verify = offset.getMessageAuthor;
            verify = verify.bind(offset)(oscar);
            offset = verify.nick;
            output = verify.guildMemberAvatar;
            verify = entity != golf;
            result = golf;
            golf = undefined;
            if(!verify) { _fun72486_ip = 303; continue _fun72486 }
 149:
            verify = entity != romeo;
            golf = undefined;
            if(!verify) { _fun72486_ip = 303; continue _fun72486 }
 161:
            foxtrot = entity != options;
            if(!foxtrot) { _fun72486_ip = 194; continue _fun72486 }
 168:
            verify = options.systemChannelFlags;
            options = _closure1_slot6;
            options = options.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES;
            verify = verify & options;
            options = 0;
            foxtrot = options == verify;
 194:
            verify = _closure1_slot0;
            backup = _closure1_slot2;
            options = 6;
            options = backup[options];
            verify = verify.bind(tango)(options);
            options = verify.computeIsStickerReplyEnabled;
            sequence = verify;
            vacuum = result;
            control = romeo;
            source = oscar;
            update = foxtrot;
            options = sequence[options](vacuum, control, source, update, echo);
            golf = undefined;
            if(!options) { _fun72486_ip = 303; continue _fun72486 }
 244:
            backup = _closure1_slot0;
            kilo = _closure1_slot2;
            options = 7;
            options = kilo[options];
            foxtrot = backup.bind(tango)(options);
            verify = foxtrot.transformSticker;
            options = 8;
            options = kilo[options];
            kilo = backup.bind(tango)(options);
            backup = kilo.pickRoleSubscriptionPurchaseSticker;
            options = oscar.id;
            options = backup.bind(kilo)(options);
            golf = verify.bind(foxtrot)(options);
 303:
            verify = _closure1_slot0;
            foxtrot = _closure1_slot2;
            options = 9;
            options = foxtrot[options];
            foxtrot = verify.bind(tango)(options);
            verify = foxtrot.ensureAvatarSource;
            if(!(entity != output)) { _fun72486_ip = 337; continue _fun72486 }
 333:
            if(!(entity == result)) { _fun72486_ip = 350; continue _fun72486 }
 337:
            options = mike.getAvatarSource;
            options = options.bind(mike)(tango);
            _fun72486_ip = 402; continue _fun72486;
 350:
            kilo = _closure1_slot0;
            sizing = _closure1_slot2;
            backup = 10;
            backup = sizing[backup];
            sizing = kilo.bind(tango)(backup);
            kilo = sizing.getGuildMemberAvatarSource;
            backup = {};
            echo = mike.id;
            backup['userId'] = echo;
            backup['guildMemberAvatar'] = output;
            backup['guildId'] = result;
            options = kilo.bind(sizing)(backup, mike);
 402:
            verify = verify.bind(foxtrot)(options);
            kilo = {};
            options = 'bindOpenRoleSubscriptionOverview';
            kilo['action'] = options;
            kilo['guildId'] = result;
            options = oscar.id;
            kilo['messageId'] = options;
            foxtrot = entity == romeo;
            options = undefined;
            if(foxtrot) { _fun72486_ip = 446; continue _fun72486 }
 441:
            options = romeo.id;
 446:
            kilo['channelId'] = options;
            romeo = oscar.roleSubscriptionData;
            foxtrot = entity == romeo;
            options = undefined;
            if(foxtrot) { _fun72486_ip = 471; continue _fun72486 }
 465:
            options = romeo.role_subscription_listing_id;
 471:
            kilo['roleSubscriptionListingId'] = options;
            sizing = {};
            options = 'bindUserMenu';
            sizing['action'] = options;
            mike = mike.id;
            sizing['userId'] = mike;
            mike = oscar.channel_id;
            sizing['messageChannelId'] = mike;
            mike = {};
            foxtrot = _closure1_slot0;
            romeo = _closure1_slot2;
            options = 8;
            romeo = romeo[options];
            backup = foxtrot.bind(tango)(romeo);
            foxtrot = backup.getRoleSubscriptionPurchaseSystemMessageContentMobile;
            romeo = {};
            romeo['username'] = offset;
            echo = entity != result;
            output = undefined;
            if(!echo) { _fun72486_ip = 553; continue _fun72486 }
 550:
            output = result;
 553:
            romeo['guildId'] = output;
            romeo['usernameOnClickHandler'] = sizing;
            romeo['roleSubscriptionOnClickHandler'] = kilo;
            romeo['roleSubscriptionData'] = yankee;
            romeo = foxtrot.bind(backup)(romeo);
            mike['content'] = romeo;
            yankee = yankee.total_months_subscribed;
            mike['totalMonthsSubscribed'] = yankee;
            mike['username'] = offset;
            verify = verify.uri;
            mike['avatarURL'] = verify;
            mike['sticker'] = golf;
            offset = _closure1_slot0;
            golf = _closure1_slot2;
            options = golf[options];
            yankee = offset.bind(tango)(options);
            verify = yankee.getRoleSubscriptionPurchaseStickerCTA;
            options = oscar.id;
            oscar = false;
            oscar = verify.bind(yankee)(options, oscar);
            mike['stickerLabel'] = oscar;
            oscar = 11;
            options = golf[oscar];
            options = offset.bind(tango)(options);
            verify = options.intl;
            options = verify.string;
            oscar = golf[oscar];
            oscar = offset.bind(tango)(oscar);
            oscar = oscar.t;
            oscar = oscar.piPHvb;
            oscar = options.bind(verify)(oscar);
            mike['welcomeLabel'] = oscar;
            oscar = _closure1_slot1;
            zulu = 12;
            zulu = golf[zulu];
            zulu = oscar.bind(tango)(zulu);
            control = zulu.bind(tango)(report);
            vacuum = mike;
            zulu = copyDataProperties(vacuum, control);
            return mike;
 734:
            return entity;
        }
    };
    zulu['createRoleSubscriptionPurchaseSystemMessage'] = mike;
    return entity;
})();