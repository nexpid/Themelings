// app/modules/user_profile/native/UserProfileAboutMeCard.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    options = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = options;
    var _closure1_slot3 = oscar;
    entity = function(argFoo) { // Original name: Heading
        entity = argFoo;
        report = entity.children;
        zulu = entity.userProfileType;
        mike = _closure1_slot18;
        tango = undefined;
        mike = mike.bind(tango)(zulu);
        oscar = mike.headingVariant;
        golf = mike.headingSpacing;
        zulu = _closure1_slot13;
        mike = _closure1_slot0;
        options = _closure1_slot3;
        entity = 11;
        entity = options[entity];
        entity = mike.bind(tango)(entity);
        mike = entity.Text;
        entity = {'accessibilityRole': 'header', 'variant': null, 'color': 'header-secondary'};
        entity['variant'] = oscar;
        oscar = {};
        oscar['marginBottom'] = golf;
        entity['style'] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: TextWithIcon
        entity = argFoo;
        golf = entity.icon;
        verify = entity.children;
        mike = entity.userProfileType;
        report = entity.accessibilityLabel;
        entity = _closure1_slot19;
        tango = undefined;
        options = entity.bind(tango)();
        entity = _closure1_slot18;
        entity = entity.bind(tango)(mike);
        offset = entity.textVariant;
        romeo = entity.columnGap;
        zulu = _closure1_slot14;
        mike = _closure1_slot5;
        entity = {};
        yankee = options.textWithIcon;
        options = new Array(2);
        options[0] = yankee;
        yankee = {};
        yankee['columnGap'] = romeo;
        options[1] = yankee;
        entity['style'] = options;
        options = true;
        entity['accessible'] = options;
        entity['accessibilityLabel'] = report;
        report = new Array(2);
        report[0] = golf;
        options = _closure1_slot13;
        golf = _closure1_slot0;
        yankee = _closure1_slot3;
        oscar = 11;
        oscar = yankee[oscar];
        oscar = golf.bind(tango)(oscar);
        golf = oscar.Text;
        oscar = {};
        oscar['variant'] = offset;
        offset = 'text-normal';
        oscar['color'] = offset;
        oscar['children'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[1] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: Bio
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            romeo = entity.userId;
            tango = entity.displayProfile;
            mike = entity.pendingBio;
            backup = entity.userProfileType;
            offset = entity.lineClamp;
            entity = _closure1_slot18;
            report = undefined;
            entity = entity.bind(report)(backup);
            yankee = entity.textVariant;
            zulu = null;
            entity = zulu == tango;
            foxtrot = undefined;
            if(entity) { _fun00002_ip = 90; continue _fun00001 }
 63:
            entity = tango.getPreviewBio;
            entity = entity.bind(tango)(mike);
            mike = zulu == entity;
            foxtrot = undefined;
            if(mike) { _fun00002_ip = 90; continue _fun00001 }
 85:
            foxtrot = entity.value;
 90:
            mike = zulu == foxtrot;
            entity = null;
            if(mike) { _fun00002_ip = 276; continue _fun00001 }
 102:
            mike = '';
            entity = null;
            if(!(mike !== foxtrot)) { _fun00002_ip = 276; continue _fun00001 }
 115:
            tango = _closure1_slot14;
            zulu = _closure1_slot5;
            mike = {};
            verify = _closure1_slot13;
            options = _closure1_slot20;
            oscar = {};
            oscar['userProfileType'] = backup;
            result = _closure1_slot0;
            backup = _closure1_slot3;
            kilo = 12;
            sizing = backup[kilo];
            sizing = result.bind(report)(sizing);
            output = sizing.intl;
            sizing = output.string;
            kilo = backup[kilo];
            kilo = result.bind(report)(kilo);
            kilo = kilo.t;
            kilo = kilo.jGoPJS;
            kilo = sizing.bind(output)(kilo);
            oscar['children'] = kilo;
            options = verify.bind(report)(options, oscar);
            oscar = new Array(2);
            oscar[0] = options;
            verify = _closure1_slot13;
            options = _closure1_slot1;
            golf = 13;
            golf = backup[golf];
            options = options.bind(report)(golf);
            golf = {};
            golf['bio'] = foxtrot;
            golf['userId'] = romeo;
            golf['textVariant'] = yankee;
            golf['lineClamp'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 276:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: MemberJoinDates
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            foxtrot = mike.userId;
            var _closure2_slot0 = foxtrot;
            zulu = mike.guildId;
            var _closure2_slot1 = zulu;
            control = mike.userProfileType;
            mike = _closure1_slot19;
            tango = undefined;
            verify = mike.bind(tango)();
            mike = _closure1_slot18;
            mike = mike.bind(tango)(control);
            output = mike.textVariant;
            romeo = mike.columnGap;
            mike = _closure1_slot0;
            zulu = _closure1_slot3;
            oscar = 14;
            report = zulu[oscar];
            offset = mike.bind(tango)(report);
            options = offset.useStateFromStores;
            report = _closure1_slot6;
            golf = new Array(1);
            golf[0] = report;
            report = function() {
                entity = _closure1_slot6;
                entity = entity.locale;
                return entity;
            };
            report = options.bind(offset)(golf, report);
            golf = zulu[oscar];
            yankee = mike.bind(tango)(golf);
            offset = yankee.useStateFromStores;
            golf = _closure1_slot8;
            options = new Array(1);
            options[0] = golf;
            golf = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = null;
                    zulu = entity != zulu;
                    if(!zulu) { _fun00006_ip = 37; continue _fun00005 }
 16:
                    tango = _closure1_slot8;
                    zulu = tango.getGuild;
                    mike = _closure2_slot1;
                    entity = zulu.bind(tango)(mike);
 37:
                    return entity;
                }
            };
            vacuum = offset.bind(yankee)(options, golf);
            oscar = zulu[oscar];
            options = mike.bind(tango)(oscar);
            golf = options.useStateFromStores;
            offset = _closure1_slot7;
            oscar = new Array(1);
            oscar[0] = offset;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = null;
                    zulu = entity != zulu;
                    if(!zulu) { _fun00008_ip = 43; continue _fun00007 }
 16:
                    report = _closure1_slot7;
                    tango = report.getMember;
                    zulu = _closure2_slot1;
                    mike = _closure2_slot0;
                    entity = tango.bind(report)(zulu, mike);
 43:
                    return entity;
                }
            };
            oscar = golf.bind(options)(oscar, entity);
            entity = 15;
            golf = zulu[entity];
            offset = mike.bind(tango)(golf);
            options = offset.getCreatedAtDate;
            yankee = _closure1_slot1;
            golf = 16;
            golf = zulu[golf];
            yankee = yankee.bind(tango)(golf);
            golf = yankee.extractTimestamp;
            golf = golf.bind(yankee)(foxtrot);
            foxtrot = options.bind(offset)(golf, report);
            entity = zulu[entity];
            zulu = mike.bind(tango)(entity);
            mike = zulu.getCreatedAtDate;
            yankee = null;
            golf = yankee == oscar;
            entity = undefined;
            if(golf) { _fun00004_ip = 268; continue _fun00003 }
 262:
            entity = oscar.joinedAt;
 268:
            result = mike.bind(zulu)(entity, report);
            zulu = _closure1_slot14;
            mike = _closure1_slot5;
            entity = {};
            golf = _closure1_slot13;
            oscar = _closure1_slot20;
            report = {};
            report['userProfileType'] = control;
            kilo = _closure1_slot0;
            backup = _closure1_slot3;
            sequence = 12;
            options = backup[sequence];
            options = kilo.bind(tango)(options);
            sizing = options.intl;
            offset = sizing.string;
            options = backup[sequence];
            options = kilo.bind(tango)(options);
            options = options.t;
            options = options.a6XYDw;
            options = offset.bind(sizing)(options);
            report['children'] = options;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot14;
            golf = _closure1_slot5;
            oscar = {};
            offset = verify.memberJoinDates;
            verify = new Array(2);
            verify[0] = offset;
            offset = {};
            offset['columnGap'] = romeo;
            verify[1] = offset;
            oscar['style'] = verify;
            romeo = _closure1_slot13;
            offset = _closure1_slot21;
            verify = {};
            verify['userProfileType'] = control;
            update = _closure1_slot13;
            sizing = 17;
            sizing = backup[sizing];
            sizing = kilo.bind(tango)(sizing);
            echo = sizing.ClydeIcon;
            sizing = {};
            config = 'xs';
            sizing['size'] = config;
            sizing = update.bind(tango)(echo, sizing);
            verify['icon'] = sizing;
            sizing = backup[sequence];
            sizing = kilo.bind(tango)(sizing);
            echo = sizing.intl;
            sizing = echo.formatToPlainString;
            backup = backup[sequence];
            backup = kilo.bind(tango)(backup);
            backup = backup.t;
            kilo = backup.9t7w5+;
            backup = {};
            backup['date'] = foxtrot;
            backup = sizing.bind(echo)(kilo, backup);
            verify['accessibilityLabel'] = backup;
            verify['children'] = foxtrot;
            offset = romeo.bind(tango)(offset, verify);
            verify = new Array(2);
            verify[0] = offset;
            offset = yankee != vacuum;
            if(!offset) { _fun00004_ip = 557; continue _fun00003 }
 553:
            offset = yankee != result;
 557:
            if(!offset) { _fun00004_ip = 808; continue _fun00003 }
 563:
            foxtrot = _closure1_slot14;
            romeo = _closure1_slot15;
            yankee = {};
            sizing = _closure1_slot13;
            update = _closure1_slot0;
            echo = _closure1_slot3;
            backup = 11;
            backup = echo[backup];
            backup = update.bind(tango)(backup);
            kilo = backup.Text;
            backup = {};
            backup['variant'] = output;
            output = 'text-normal';
            backup['color'] = output;
            output = _closure1_slot9;
            backup['children'] = output;
            kilo = sizing.bind(tango)(kilo, backup);
            backup = new Array(2);
            backup[0] = kilo;
            output = _closure1_slot13;
            sizing = _closure1_slot21;
            kilo = {};
            kilo['userProfileType'] = control;
            config = _closure1_slot13;
            control = _closure1_slot1;
            record = 18;
            source = echo[record];
            control = control.bind(tango)(source);
            source = {};
            source['guild'] = vacuum;
            record = echo[record];
            record = update.bind(tango)(record);
            record = record.GuildIconSizes;
            record = record.XXSMALL;
            source['size'] = record;
            source = config.bind(tango)(control, source);
            kilo['icon'] = source;
            source = echo[sequence];
            source = update.bind(tango)(source);
            control = source.intl;
            source = control.formatToPlainString;
            echo = echo[sequence];
            echo = update.bind(tango)(echo);
            echo = echo.t;
            update = echo.FdLNDA;
            echo = {};
            vacuum = vacuum.name;
            echo['guildName'] = vacuum;
            echo['date'] = result;
            echo = source.bind(control)(update, echo);
            kilo['accessibilityLabel'] = echo;
            kilo['children'] = result;
            kilo = output.bind(tango)(sizing, kilo);
            backup[1] = kilo;
            yankee['children'] = backup;
            offset = foxtrot.bind(tango)(romeo, yankee);
 808:
            verify[1] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: BotSlashCommands
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            offset = entity.applicationId;
            golf = entity.channel;
            var _closure2_slot0 = golf;
            verify = entity.commandIds;
            foxtrot = entity.userProfileType;
            entity = _closure1_slot19;
            report = undefined;
            kilo = entity.bind(report)();
            mike = _closure1_slot1;
            yankee = _closure1_slot3;
            entity = 19;
            entity = yankee[entity];
            entity = mike.bind(report)(entity);
            entity = entity.bind(report)();
            entity = entity.analyticsLocations;
            var _closure2_slot1 = entity;
            zulu = _closure1_slot0;
            mike = 20;
            mike = yankee[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.useUserProfileAnalyticsContext;
            mike = mike.bind(zulu)();
            oscar = mike.context;
            var _closure2_slot2 = oscar;
            romeo = _closure1_slot4;
            tango = romeo.useMemo;
            zulu = new Array(1);
            zulu[0] = golf;
            mike = function() {
                entity = {};
                mike = _closure2_slot0;
                entity['channel'] = mike;
                mike = 'channel';
                entity['type'] = mike;
                return entity;
            };
            tango = tango.bind(romeo)(mike, zulu);
            zulu = _closure1_slot2;
            mike = 21;
            mike = yankee[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.useCommandsForApplication;
            zulu = mike.bind(zulu)(tango, offset, verify);
            mike = zulu.commands;
            var _closure2_slot3 = mike;
            verify = zulu.application;
            var _closure2_slot4 = verify;
            offset = _closure1_slot4;
            tango = offset.useMemo;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zulu = _closure2_slot3;
                    entity = null;
                    zulu = entity == zulu;
                    entity = undefined;
                    if(zulu) { _fun00012_ip = 39; continue _fun00011 }
 18:
                    tango = _closure2_slot3;
                    zulu = tango.filter;
                    mike = function(argFoo) {
                        entity = argFoo;
                        mike = entity.nsfw;
                        entity = true;
                        entity = entity !== mike;
                        return entity;
                    };
                    entity = zulu.bind(tango)(mike);
 39:
                    return entity;
                }
            };
            output = tango.bind(offset)(mike, zulu);
            tango = _closure1_slot4;
            zulu = tango.useCallback;
            mike = new Array(5);
            mike[0] = verify;
            offset = golf.id;
            mike[1] = offset;
            golf = golf.guild_id;
            mike[2] = golf;
            mike[3] = oscar;
            mike[4] = entity;
            entity = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure2_slot4;
                    mike = null;
                    if(!(mike != zulu)) { _fun00014_ip = 192; continue _fun00013 }
 18:
                    zulu = _closure2_slot4;
                    zulu = zulu.bot;
                    if(!(mike != zulu)) { _fun00014_ip = 192; continue _fun00013 }
 35:
                    zulu = _closure2_slot4;
                    zulu = zulu.bot;
                    zulu = zulu.id;
                    var _closure3_slot0 = zulu;
                    report = _closure1_slot0;
                    tango = _closure1_slot3;
                    zulu = 22;
                    zulu = tango[zulu];
                    tango = undefined;
                    report = report.bind(tango)(zulu);
                    zulu = report.getBestActiveInput;
                    report = zulu.bind(report)();
                    if(!(mike != report)) { _fun00014_ip = 167; continue _fun00013 }
 93:
                    zulu = report.openCustomKeyboard;
                    mike = {};
                    oscar = _closure1_slot12;
                    oscar = oscar.APP_LAUNCHER;
                    mike['keyboardType'] = oscar;
                    oscar = {};
                    options = _closure1_slot11;
                    options = options.APPLICATION_VIEW;
                    oscar['initialRouteName'] = options;
                    options = true;
                    oscar['initiallyExpanded'] = options;
                    golf = _closure2_slot4;
                    oscar['application'] = golf;
                    golf = function() { // Original name: onPressBack
                        zulu = _closure1_slot1;
                        mike = _closure1_slot3;
                        entity = 23;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = {};
                        golf = _closure2_slot2;
                        options = mike;
                        report = copyDataProperties(options, golf);
                        oscar = _closure3_slot0;
                        report = 'userId';
                        mike[report] = oscar;
                        report = _closure2_slot0;
                        oscar = report.id;
                        report = 'channelId';
                        mike[report] = oscar;
                        report = _closure2_slot1;
                        tango = 'sourceAnalyticsLocations';
                        mike[tango] = report;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    oscar['onPressBack'] = golf;
                    mike['context'] = oscar;
                    mike = zulu.bind(report)(mike);
 167:
                    mike = global;
                    zulu = mike.setTimeout;
                    mike = function() {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            tango = _closure1_slot0;
                            report = _closure1_slot3;
                            entity = 23;
                            zulu = report[entity];
                            entity = undefined;
                            golf = tango.bind(entity)(zulu);
                            oscar = golf.getUserProfileActionSheetKey;
                            zulu = _closure3_slot0;
                            golf = oscar.bind(golf)(zulu);
                            oscar = _closure1_slot1;
                            zulu = 24;
                            zulu = report[zulu];
                            oscar = oscar.bind(entity)(zulu);
                            zulu = oscar.hideActionSheet;
                            zulu = zulu.bind(oscar)(golf);
                            zulu = 25;
                            zulu = report[zulu];
                            tango = tango.bind(entity)(zulu);
                            zulu = tango.getRootNavigationRef;
                            report = zulu.bind(tango)();
                            tango = null;
                            if(!(tango != report)) { _fun00016_ip = 256; continue _fun00015 }
 101:
                            zulu = report.isReady;
                            zulu = zulu.bind(report)();
                            if(!zulu) { _fun00016_ip = 256; continue _fun00015 }
 117:
                            zulu = report.getState;
                            oscar = zulu.bind(report)();
                            golf = tango == oscar;
                            zulu = undefined;
                            if(golf) { _fun00016_ip = 156; continue _fun00015 }
 136:
                            oscar = oscar.routes;
                            golf = tango == oscar;
                            zulu = undefined;
                            if(golf) { _fun00016_ip = 156; continue _fun00015 }
 151:
                            zulu = oscar.length;
 156:
                            oscar = tango != zulu;
                            tango = 0;
                            if(!oscar) { _fun00016_ip = 168; continue _fun00015 }
 165:
                            tango = zulu;
 168:
                            zulu = 1;
                            if(!(tango > zulu)) { _fun00016_ip = 192; continue _fun00015 }
 175:
                            oscar = report.goBack;
                            oscar = oscar.bind(report)();
                            tango = tango - 1;
                            if(tango > zulu) { _fun00016_ip = 175; continue _fun00015 }
 192:
                            tango = _closure1_slot0;
                            report = _closure1_slot3;
                            zulu = 26;
                            zulu = report[zulu];
                            tango = tango.bind(entity)(zulu);
                            zulu = tango.transitionTo;
                            golf = _closure1_slot10;
                            oscar = golf.CHANNEL;
                            mike = _closure2_slot0;
                            report = mike.guild_id;
                            mike = mike.id;
                            mike = oscar.bind(golf)(report, mike);
                            mike = zulu.bind(tango)(mike);
 256:
                            return entity;
                        }
                    };
                    entity = 300;
                    entity = zulu.bind(tango)(mike, entity);
 192:
                    entity = undefined;
                    return entity;
                }
            };
            yankee = zulu.bind(tango)(entity, mike);
            offset = null;
            mike = offset == output;
            entity = null;
            if(mike) { _fun00010_ip = 586; continue _fun00009 }
 285:
            zulu = output.length;
            mike = 0;
            entity = null;
            if(!(mike !== zulu)) { _fun00010_ip = 586; continue _fun00009 }
 301:
            tango = _closure1_slot14;
            zulu = _closure1_slot5;
            mike = {};
            romeo = _closure1_slot13;
            golf = _closure1_slot20;
            oscar = {};
            oscar['userProfileType'] = foxtrot;
            update = _closure1_slot0;
            foxtrot = _closure1_slot3;
            sizing = 12;
            result = foxtrot[sizing];
            result = update.bind(report)(result);
            echo = result.intl;
            result = echo.string;
            foxtrot = foxtrot[sizing];
            foxtrot = update.bind(report)(foxtrot);
            foxtrot = foxtrot.t;
            foxtrot = foxtrot.0hKkS0;
            foxtrot = result.bind(echo)(foxtrot);
            oscar['children'] = foxtrot;
            golf = romeo.bind(report)(golf, oscar);
            oscar = new Array(3);
            oscar[0] = golf;
            foxtrot = _closure1_slot13;
            romeo = _closure1_slot5;
            golf = {};
            kilo = kilo.slashCommands;
            golf['style'] = kilo;
            kilo = output.map;
            backup = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot13;
                zulu = _closure1_slot1;
                tango = _closure1_slot3;
                mike = 27;
                mike = tango[mike];
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = {};
                golf = _closure2_slot4;
                mike['application'] = golf;
                oscar = _closure2_slot0;
                mike['channel'] = oscar;
                mike['command'] = entity;
                entity = entity.id;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            backup = kilo.bind(output)(backup);
            golf['children'] = backup;
            golf = foxtrot.bind(report)(romeo, golf);
            oscar[1] = golf;
            golf = offset != verify;
            if(!golf) { _fun00010_ip = 465; continue _fun00009 }
 455:
            verify = verify.bot;
            golf = offset != verify;
 465:
            if(!golf) { _fun00010_ip = 572; continue _fun00009 }
 468:
            offset = _closure1_slot13;
            kilo = _closure1_slot0;
            romeo = _closure1_slot3;
            options = 28;
            options = romeo[options];
            options = kilo.bind(report)(options);
            verify = options.Button;
            options = {'size': 'sm', 'variant': 'tertiary'};
            foxtrot = romeo[sizing];
            foxtrot = kilo.bind(report)(foxtrot);
            backup = foxtrot.intl;
            foxtrot = backup.string;
            romeo = romeo[sizing];
            romeo = kilo.bind(report)(romeo);
            romeo = romeo.t;
            romeo = romeo.VEfKyc;
            romeo = foxtrot.bind(backup)(romeo);
            options['text'] = romeo;
            options['onPress'] = yankee;
            golf = offset.bind(report)(verify, options);
 572:
            oscar[2] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 586:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.DIVIDER_DOT;
    var _closure1_slot9 = golf;
    golf = tango.UserProfileType;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Routes;
    var _closure1_slot10 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AppLauncherRouteName;
    var _closure1_slot11 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.KeyboardTypes;
    var _closure1_slot12 = tango;
    tango = 9;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot13 = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsxs;
    var _closure1_slot14 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot15 = tango;
    tango = {'headingVariant': 'text-sm/semibold', 'textVariant': 'text-md/normal', 'headingSpacing': 8, 'rowGap': 24, 'columnGap': 6};
    var _closure1_slot16 = tango;
    tango = {};
    options = golf.PREVIEW;
    golf = {'headingVariant': 'text-xs/semibold', 'textVariant': 'text-sm/normal', 'headingSpacing': 4, 'rowGap': 12, 'columnGap': 3};
    tango[options] = golf;
    var _closure1_slot17 = tango;
    tango = function(argFoo) { // Original name: getStyleConfig
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zulu = argFoo;
            entity = undefined;
            if(!zulu) { _fun00018_ip = 19; continue _fun00017 }
 8:
            mike = _closure1_slot17;
            entity = mike[zulu];
 19:
            mike = null;
            if(!(mike == entity)) { _fun00018_ip = 32; continue _fun00017 }
 25:
            entity = _closure1_slot16;
 32:
            return entity;
        }
    };
    var _closure1_slot18 = tango;
    tango = 10;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    offset = 'column';
    verify['flexDirection'] = offset;
    tango['card'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center'};
    tango['textWithIcon'] = verify;
    verify = {'flexDirection': 'row', 'flexWrap': 'wrap'};
    tango['memberJoinDates'] = verify;
    verify = {'flex': 1, 'flexDirection': 'row', 'flexWrap': 'wrap', 'marginBottom': 12};
    tango['slashCommands'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot19 = tango;
    tango = 30;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/native/UserProfileAboutMeCard.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: UserProfileAboutMeCard
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            backup = entity.userId;
            kilo = entity.displayProfile;
            romeo = entity.channel;
            sizing = entity.pendingBio;
            foxtrot = entity.bioLineClamp;
            offset = entity.userProfileType;
            oscar = entity.style;
            entity = _closure1_slot19;
            tango = undefined;
            report = entity.bind(tango)();
            entity = _closure1_slot18;
            entity = entity.bind(tango)(offset);
            output = entity.rowGap;
            options = null;
            entity = options == kilo;
            yankee = undefined;
            if(entity) { _fun00020_ip = 86; continue _fun00019 }
 81:
            yankee = kilo.application;
 86:
            zulu = _closure1_slot14;
            mike = _closure1_slot1;
            verify = _closure1_slot3;
            entity = 29;
            entity = verify[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            verify = report.card;
            report = new Array(3);
            report[0] = verify;
            verify = {};
            verify['rowGap'] = output;
            report[1] = verify;
            report[2] = oscar;
            entity['style'] = report;
            verify = _closure1_slot13;
            oscar = _closure1_slot22;
            report = {};
            report['userId'] = backup;
            report['displayProfile'] = kilo;
            report['pendingBio'] = sizing;
            report['userProfileType'] = offset;
            report['lineClamp'] = foxtrot;
            oscar = verify.bind(tango)(oscar, report);
            report = new Array(3);
            report[0] = oscar;
            foxtrot = _closure1_slot13;
            verify = _closure1_slot23;
            oscar = {};
            oscar['userId'] = backup;
            sizing = options == kilo;
            backup = undefined;
            if(sizing) { _fun00020_ip = 221; continue _fun00019 }
 216:
            backup = kilo.guildId;
 221:
            oscar['guildId'] = backup;
            oscar['userProfileType'] = offset;
            oscar = foxtrot.bind(tango)(verify, oscar);
            report[1] = oscar;
            verify = options == yankee;
            oscar = undefined;
            if(verify) { _fun00020_ip = 255; continue _fun00019 }
 249:
            oscar = yankee.popularApplicationCommandIds;
 255:
            oscar = options != oscar;
            if(!oscar) { _fun00020_ip = 266; continue _fun00019 }
 262:
            oscar = options != romeo;
 266:
            if(!oscar) { _fun00020_ip = 314; continue _fun00019 }
 269:
            verify = _closure1_slot13;
            options = _closure1_slot24;
            golf = {};
            foxtrot = yankee.id;
            golf['applicationId'] = foxtrot;
            golf['channel'] = romeo;
            yankee = yankee.popularApplicationCommandIds;
            golf['commandIds'] = yankee;
            golf['userProfileType'] = offset;
            oscar = verify.bind(tango)(options, golf);
 314:
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();