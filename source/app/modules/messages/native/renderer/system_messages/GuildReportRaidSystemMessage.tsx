// app/modules/messages/native/renderer/system_messages/GuildReportRaidSystemMessage.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot7 = tango;
    tango = 16;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/system_messages/GuildReportRaidSystemMessage.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: GuildReportRaidSystemMessage
        _fun72553: for(var _fun72553_ip = 0; ; ) switch(_fun72553_ip) {
 0:
            mike = argFoo;
            offset = mike.row;
            zulu = _closure1_slot0;
            verify = _closure1_slot2;
            mike = 13;
            report = verify[mike];
            tango = undefined;
            romeo = zulu.bind(tango)(report);
            yankee = romeo.useStateFromStores;
            report = _closure1_slot4;
            golf = new Array(1);
            golf[0] = report;
            oscar = function() {
                entity = _closure1_slot4;
                entity = entity.roleStyle;
                return entity;
            };
            report = new Array(0);
            foxtrot = yankee.bind(romeo)(golf, oscar, report);
            var _closure2_slot0 = foxtrot;
            report = 14;
            report = verify[report];
            oscar = zulu.bind(tango)(report);
            report = oscar.useThemeContext;
            report = report.bind(oscar)();
            golf = report.theme;
            yankee = offset.message;
            var _closure2_slot1 = yankee;
            romeo = yankee.author;
            var _closure2_slot2 = romeo;
            report = yankee.channel_id;
            var _closure2_slot3 = report;
            oscar = verify[mike];
            sizing = zulu.bind(tango)(oscar);
            kilo = sizing.useStateFromStores;
            oscar = _closure1_slot5;
            backup = new Array(1);
            backup[0] = oscar;
            oscar = new Array(1);
            oscar[0] = report;
            report = function() {
                zulu = _closure1_slot5;
                mike = zulu.getChannel;
                entity = _closure2_slot3;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report = kilo.bind(sizing)(backup, report, oscar);
            var _closure2_slot4 = report;
            mike = verify[mike];
            kilo = zulu.bind(tango)(mike);
            backup = kilo.useStateFromStores;
            mike = _closure1_slot6;
            oscar = new Array(1);
            oscar[0] = mike;
            mike = function() {
                _fun72556: for(var _fun72556_ip = 0; ; ) switch(_fun72556_ip) {
 0:
                    zulu = _closure1_slot6;
                    mike = zulu.getGuild;
                    report = _closure2_slot4;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun72556_ip = 39; continue _fun72556 }
 30:
                    tango = _closure2_slot4;
                    entity = tango.guild_id;
 39:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            sizing = backup.bind(kilo)(oscar, mike);
            var _closure2_slot5 = sizing;
            mike = 6;
            mike = verify[mike];
            oscar = zulu.bind(tango)(mike);
            mike = oscar.useMessageAuthorWithProcessedColor;
            mike = mike.bind(oscar)(yankee);
            backup = mike.nick;
            var _closure2_slot6 = backup;
            oscar = mike.colorString;
            var _closure2_slot7 = oscar;
            mike = 7;
            mike = verify[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.resolveAlertModeColors;
            mike = mike.bind(zulu)(golf);
            golf = mike.automodUsernameColor;
            verify = _closure1_slot3;
            zulu = verify.useMemo;
            mike = new Array(6);
            mike[0] = oscar;
            oscar = null;
            output = oscar == sizing;
            kilo = undefined;
            if(output) { _fun72553_ip = 331; continue _fun72553 }
 326:
            kilo = sizing.name;
 331:
            mike[1] = kilo;
            kilo = yankee.channel_id;
            mike[2] = kilo;
            mike[3] = backup;
            mike[4] = foxtrot;
            romeo = romeo.id;
            mike[5] = romeo;
            entity = function() {
                _fun72557: for(var _fun72557_ip = 0; ; ) switch(_fun72557_ip) {
 0:
                    tango = {};
                    entity = _closure2_slot6;
                    tango['username'] = entity;
                    mike = {};
                    entity = 'bindUserMenu';
                    mike['action'] = entity;
                    entity = _closure2_slot2;
                    entity = entity.id;
                    mike['userId'] = entity;
                    entity = _closure2_slot7;
                    mike['colorString'] = entity;
                    golf = _closure2_slot0;
                    entity = null;
                    oscar = 'username';
                    report = null;
                    if(!(oscar === golf)) { _fun72557_ip = 67; continue _fun72557 }
 63:
                    report = _closure2_slot7;
 67:
                    mike['linkColor'] = report;
                    report = _closure2_slot7;
                    mike['roleColor'] = report;
                    oscar = _closure2_slot0;
                    report = 'dot';
                    report = report === oscar;
                    if(!report) { _fun72557_ip = 104; continue _fun72557 }
 96:
                    oscar = _closure2_slot7;
                    report = entity != oscar;
 104:
                    mike['shouldShowRoleDot'] = report;
                    report = _closure2_slot1;
                    report = report.channel_id;
                    mike['messageChannelId'] = report;
                    report = true;
                    mike['medium'] = report;
                    tango['usernameOnClick'] = mike;
                    mike = _closure2_slot5;
                    report = entity == mike;
                    oscar = undefined;
                    mike = undefined;
                    if(report) { _fun72557_ip = 159; continue _fun72557 }
 150:
                    zulu = _closure2_slot5;
                    mike = zulu.name;
 159:
                    zulu = entity != mike;
                    entity = '';
                    if(!zulu) { _fun72557_ip = 173; continue _fun72557 }
 170:
                    entity = mike;
 173:
                    tango['guildName'] = entity;
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    entity = 10;
                    mike = golf[entity];
                    mike = report.bind(oscar)(mike);
                    zulu = mike.intl;
                    mike = zulu.formatToParts;
                    entity = golf[entity];
                    entity = report.bind(oscar)(entity);
                    entity = entity.t;
                    entity = entity.MTmH+v;
                    entity = mike.bind(zulu)(entity, tango);
                    return entity;
                }
            };
            verify = zulu.bind(verify)(entity, mike);
            mike = _closure1_slot1;
            backup = _closure1_slot2;
            entity = 8;
            entity = backup[entity];
            zulu = mike.bind(tango)(entity);
            entity = {};
            entity['message'] = yankee;
            entity['channel'] = report;
            report = true;
            entity['isSystemDM'] = report;
            report = {};
            entity['colors'] = report;
            report = zulu.bind(tango)(entity);
            zulu = _closure1_slot7;
            entity = 15;
            entity = backup[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['row'] = offset;
            entity['content'] = verify;
            foxtrot = _closure1_slot0;
            options = 10;
            verify = backup[options];
            verify = foxtrot.bind(tango)(verify);
            offset = verify.intl;
            verify = offset.string;
            options = backup[options];
            options = foxtrot.bind(tango)(options);
            options = options.t;
            options = options.hG1StL;
            options = verify.bind(offset)(options);
            entity['username'] = options;
            options = 11;
            verify = backup[options];
            offset = foxtrot.bind(tango)(verify);
            verify = offset.ensureAvatarSource;
            yankee = 12;
            yankee = backup[yankee];
            romeo = foxtrot.bind(tango)(yankee);
            yankee = romeo.makeSource;
            options = backup[options];
            foxtrot = foxtrot.bind(tango)(options);
            options = foxtrot.getAutomodAvatarURL;
            options = options.bind(foxtrot)();
            options = yankee.bind(romeo)(options);
            options = verify.bind(offset)(options);
            options = options.uri;
            entity['avatarURL'] = options;
            options = oscar != golf;
            oscar = null;
            if(!options) { _fun72553_ip = 592; continue _fun72553 }
 589:
            oscar = golf;
 592:
            entity['usernameColor'] = oscar;
            update = entity;
            echo = report;
            report = copyDataProperties(update, echo);
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: createGuildReportRaidSystemMessage
        _fun72558: for(var _fun72558_ip = 0; ; ) switch(_fun72558_ip) {
 0:
            options = argFoo;
            kilo = options.message;
            romeo = options.roleStyle;
            backup = options.theme;
            mike = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 5;
            entity = tango[entity];
            verify = undefined;
            entity = mike.bind(verify)(entity);
            oscar = entity.bind(verify)(backup);
            golf = kilo.author;
            tango = _closure1_slot5;
            mike = tango.getChannel;
            entity = kilo.channel_id;
            foxtrot = mike.bind(tango)(entity);
            tango = _closure1_slot6;
            mike = tango.getGuild;
            report = null;
            offset = report == foxtrot;
            entity = undefined;
            if(offset) { _fun72558_ip = 100; continue _fun72558 }
 95:
            entity = foxtrot.guild_id;
 100:
            entity = mike.bind(tango)(entity);
            offset = _closure1_slot0;
            sizing = _closure1_slot2;
            mike = 6;
            mike = sizing[mike];
            tango = offset.bind(verify)(mike);
            mike = tango.getMessageAuthorWithProcessedColor;
            tango = mike.bind(tango)(kilo);
            mike = tango.nick;
            yankee = tango.colorString;
            tango = 7;
            tango = sizing[tango];
            offset = offset.bind(verify)(tango);
            tango = offset.resolveAlertModeColors;
            tango = tango.bind(offset)(backup);
            tango = tango.automodUsernameColor;
            backup = {};
            backup['username'] = mike;
            mike = {};
            offset = 'bindUserMenu';
            mike['action'] = offset;
            golf = golf.id;
            mike['userId'] = golf;
            mike['colorString'] = yankee;
            golf = 'username';
            offset = null;
            if(!(golf === romeo)) { _fun72558_ip = 222; continue _fun72558 }
 219:
            offset = yankee;
 222:
            mike['linkColor'] = offset;
            mike['roleColor'] = yankee;
            offset = 'dot';
            offset = offset === romeo;
            if(!offset) { _fun72558_ip = 247; continue _fun72558 }
 243:
            offset = report != yankee;
 247:
            mike['shouldShowRoleDot'] = offset;
            offset = kilo.channel_id;
            mike['messageChannelId'] = offset;
            yankee = true;
            mike['medium'] = yankee;
            backup['usernameOnClick'] = mike;
            offset = report == entity;
            mike = undefined;
            if(offset) { _fun72558_ip = 288; continue _fun72558 }
 283:
            mike = entity.name;
 288:
            offset = report != mike;
            entity = '';
            if(!offset) { _fun72558_ip = 302; continue _fun72558 }
 299:
            entity = mike;
 302:
            backup['guildName'] = entity;
            offset = _closure1_slot1;
            romeo = _closure1_slot2;
            entity = 8;
            entity = romeo[entity];
            mike = offset.bind(verify)(entity);
            entity = {};
            entity['message'] = kilo;
            entity['channel'] = foxtrot;
            entity['isSystemDM'] = yankee;
            entity['colors'] = oscar;
            mike = mike.bind(verify)(entity);
            entity = {};
            oscar = 9;
            oscar = romeo[oscar];
            oscar = offset.bind(verify)(oscar);
            output = oscar.bind(verify)(options);
            result = entity;
            oscar = copyDataProperties(result, output);
            yankee = _closure1_slot0;
            oscar = 10;
            options = romeo[oscar];
            options = yankee.bind(verify)(options);
            foxtrot = options.intl;
            offset = foxtrot.formatToParts;
            options = romeo[oscar];
            options = yankee.bind(verify)(options);
            options = options.t;
            options = options.MTmH+v;
            offset = offset.bind(foxtrot)(options, backup);
            options = 'content';
            entity[options] = offset;
            options = romeo[oscar];
            options = yankee.bind(verify)(options);
            offset = options.intl;
            options = offset.string;
            oscar = romeo[oscar];
            oscar = yankee.bind(verify)(oscar);
            oscar = oscar.t;
            oscar = oscar.hG1StL;
            oscar = options.bind(offset)(oscar);
            entity[golf] = oscar;
            oscar = report != tango;
            report = null;
            if(!oscar) { _fun72558_ip = 500; continue _fun72558 }
 497:
            report = tango;
 500:
            tango = 'usernameColor';
            entity[tango] = report;
            options = _closure1_slot0;
            offset = _closure1_slot2;
            zulu = 11;
            tango = offset[zulu];
            report = options.bind(verify)(tango);
            tango = report.ensureAvatarSource;
            oscar = 12;
            oscar = offset[oscar];
            golf = options.bind(verify)(oscar);
            oscar = golf.makeSource;
            zulu = offset[zulu];
            options = options.bind(verify)(zulu);
            zulu = options.getAutomodAvatarURL;
            zulu = zulu.bind(options)();
            zulu = oscar.bind(golf)(zulu);
            zulu = tango.bind(report)(zulu);
            tango = zulu.uri;
            zulu = 'avatarURL';
            entity[zulu] = tango;
            result = entity;
            output = mike;
            mike = copyDataProperties(result, output);
            return entity;
        }
    };
    zulu['createGuildReportRaidSystemMessage'] = mike;
    return entity;
})();