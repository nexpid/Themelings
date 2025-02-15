// app/modules/opt_in_channels/OptInChannelsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    options = argBar;
    golf = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = verify;
    entity = function() { // Original name: _persistOptInChannelUpdates2
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    golf = argFoo;
                    oscar = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 164; continue _fun00001 }
 16:
                    mike = null;
                    if(!(mike != golf)) { _fun00002_ip = 159; continue _fun00001 }
 25:
                    tango = _closure1_slot4;
                    mike = tango.isFullServerPreview;
                    mike = mike.bind(tango)(golf);
                    if(mike) { _fun00002_ip = 159; continue _fun00001 }
 46:
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    mike = 9;
                    mike = report[mike];
                    report = undefined;
                    options = tango.bind(report)(mike);
                    tango = options.saveUserGuildSettingsBulk;
                    mike = {};
                    verify = {};
                    verify['channel_overrides'] = oscar;
                    mike[golf] = verify;
                    mike = tango.bind(options)(mike);
                    SaveGenerator(address=97);
 95:
                    return mike;
 97:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00002_ip = 156; continue _fun00001 }
 103:
                    tango = _closure1_slot1;
                    options = _closure1_slot2;
                    zulu = 10;
                    zulu = options[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    options = 'USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES';
                    zulu['type'] = options;
                    zulu['guildId'] = golf;
                    zulu['updates'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    _fun00002_ip = 159; continue _fun00001;
 156:
                    return mike;
 159:
                    mike = undefined;
                    return mike;
 164:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot10 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = entity;
    report = function(argFoo, argBar, argBaz) { // Original name: bulkOptOutChannels
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            tango = argBar;
            var _closure2_slot0 = report;
            entity = null;
            if(!(entity != report)) { _fun00004_ip = 262; continue _fun00003 }
 21:
            oscar = _closure1_slot4;
            zulu = oscar.isFullServerPreview;
            zulu = zulu.bind(oscar)(report);
            if(zulu) { _fun00004_ip = 223; continue _fun00003 }
 45:
            options = {};
            var _closure2_slot1 = options;
            zulu = tango.forEach;
            mike = function(argFoo) {
                tango = argFoo;
                oscar = _closure1_slot6;
                zulu = oscar.getChannelIdFlags;
                mike = _closure2_slot0;
                verify = zulu.bind(oscar)(mike, tango);
                zulu = _closure2_slot1;
                mike = {};
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                oscar = oscar[entity];
                entity = undefined;
                options = golf.bind(entity)(oscar);
                golf = options.setFlag;
                report = _closure1_slot8;
                oscar = report.OPT_IN_ENABLED;
                report = false;
                report = golf.bind(options)(verify, oscar, report);
                mike['flags'] = report;
                zulu[tango] = mike;
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            zulu = _closure1_slot1;
            yankee = _closure1_slot2;
            mike = 14;
            mike = yankee[mike];
            offset = undefined;
            golf = zulu.bind(offset)(mike);
            oscar = golf.updateChannelOverrideSettingsBulk;
            verify = _closure1_slot0;
            mike = 8;
            mike = yankee[mike];
            mike = verify.bind(offset)(mike);
            mike = mike.NotificationLabels;
            mike = mike.OptedOut;
            mike = oscar.bind(golf)(report, options, mike);
            mike = 11;
            mike = yankee[mike];
            golf = zulu.bind(offset)(mike);
            oscar = golf.track;
            mike = _closure1_slot7;
            zulu = mike.CHANNEL_LIST_UPDATED;
            mike = {};
            options = 12;
            options = yankee[options];
            verify = verify.bind(offset)(options);
            options = verify.collectGuildAnalyticsMetadata;
            foxtrot = options.bind(verify)(report);
            backup = mike;
            options = copyDataProperties(backup, foxtrot);
            verify = 'remove_many';
            options = 'action_type';
            mike[options] = verify;
            verify = argBaz;
            options = 'location';
            mike[options] = verify;
            mike = oscar.bind(golf)(zulu, mike);
            _fun00004_ip = 262; continue _fun00003;
 223:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.updateImpersonatedChannels;
            entity = new Array(0);
            entity = mike.bind(zulu)(report, entity, tango);
 262:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot11 = report;
    tango = function(argFoo) { // Original name: dismissGuildNotice
        zulu = _closure1_slot0;
        tango = _closure1_slot2;
        mike = 15;
        report = tango[mike];
        entity = undefined;
        oscar = zulu.bind(entity)(report);
        report = oscar.updateUserGuildSettings;
        mike = tango[mike];
        mike = zulu.bind(entity)(mike);
        mike = mike.UserSettingsDelay;
        tango = mike.INFREQUENT_USER_ACTION;
        zulu = argFoo;
        mike = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = argFoo;
                offset = _closure1_slot0;
                entity = _closure1_slot2;
                report = 7;
                tango = entity[report];
                options = undefined;
                golf = offset.bind(options)(tango);
                oscar = golf.hasFlag;
                tango = zulu.guildOnboardingProgress;
                verify = 16;
                entity = entity[verify];
                entity = offset.bind(options)(entity);
                entity = entity.GuildOnboardingProgress;
                entity = entity.GUILD_NOTICE_CLEARED;
                entity = oscar.bind(golf)(tango, entity);
                if(!entity) { _fun00006_ip = 132; continue _fun00005 }
 73:
                yankee = _closure1_slot0;
                tango = _closure1_slot2;
                oscar = tango[report];
                offset = yankee.bind(options)(oscar);
                golf = offset.hasFlag;
                oscar = zulu.guildOnboardingProgress;
                tango = tango[verify];
                tango = yankee.bind(options)(tango);
                tango = tango.GuildOnboardingProgress;
                tango = tango.GUILD_NOTICE_SHOWN;
                tango = golf.bind(offset)(oscar, tango);
                entity = !tango;
 132:
                entity = !entity;
                if(!entity) { _fun00006_ip = 259; continue _fun00005 }
 138:
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                oscar = mike[report];
                yankee = tango.bind(options)(oscar);
                offset = yankee.addFlag;
                golf = zulu.guildOnboardingProgress;
                oscar = mike[verify];
                oscar = tango.bind(options)(oscar);
                oscar = oscar.GuildOnboardingProgress;
                oscar = oscar.GUILD_NOTICE_CLEARED;
                oscar = offset.bind(yankee)(golf, oscar);
                zulu['guildOnboardingProgress'] = oscar;
                report = mike[report];
                golf = tango.bind(options)(report);
                oscar = golf.setFlag;
                report = zulu.guildOnboardingProgress;
                mike = mike[verify];
                mike = tango.bind(options)(mike);
                mike = mike.GuildOnboardingProgress;
                tango = mike.GUILD_NOTICE_SHOWN;
                mike = false;
                mike = oscar.bind(golf)(report, tango, mike);
                zulu['guildOnboardingProgress'] = mike;
                entity = true;
 259:
                return entity;
            }
        };
        mike = report.bind(oscar)(zulu, mike, tango);
        return entity;
    };
    var _closure1_slot12 = tango;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = verify[entity];
    entity = undefined;
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 1;
    oscar = verify[oscar];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 2;
    oscar = verify[oscar];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 3;
    oscar = verify[oscar];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot6 = oscar;
    oscar = 4;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    oscar = oscar.AnalyticEvents;
    var _closure1_slot7 = oscar;
    oscar = 5;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    golf = oscar.ChannelNotificationSettingsFlags;
    var _closure1_slot8 = golf;
    oscar = oscar.GuildNotificationSettingsFlags;
    var _closure1_slot9 = oscar;
    oscar = 13;
    oscar = verify[oscar];
    yankee = options.bind(entity)(oscar);
    offset = yankee.debounce;
    golf = function(argFoo, argBar) {
        tango = function() { // Original name: _persistOptInChannelUpdates
            entity = undefined;
            tango = _closure1_slot10;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        zulu = undefined;
        mike = argFoo;
        entity = argBar;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    oscar = 1000;
    oscar = offset.bind(yankee)(golf, oscar);
    golf = 17;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/opt_in_channels/OptInChannelsActionCreators.tsx';
    golf = options.bind(verify)(golf);
    golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: setOptInChannel
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            oscar = argBar;
            entity = argBaz;
            offset = argCorge;
            mike = null;
            if(!(mike != report)) { _fun00008_ip = 560; continue _fun00007 }
 21:
            tango = _closure1_slot4;
            zulu = tango.isFullServerPreview;
            zulu = zulu.bind(tango)(report);
            if(zulu) { _fun00008_ip = 488; continue _fun00007 }
 45:
            tango = _closure1_slot6;
            zulu = tango.getChannelIdFlags;
            verify = zulu.bind(tango)(report, oscar);
            kilo = verify;
            if(entity) { _fun00008_ip = 114; continue _fun00007 }
 67:
            golf = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 7;
            tango = tango[zulu];
            zulu = undefined;
            options = golf.bind(zulu)(tango);
            golf = options.setFlag;
            zulu = _closure1_slot8;
            tango = zulu.FAVORITED;
            zulu = false;
            kilo = golf.bind(options)(verify, tango, zulu);
 114:
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            zulu = 8;
            tango = foxtrot[zulu];
            yankee = undefined;
            golf = romeo.bind(yankee)(tango);
            tango = golf.getCurrentChannelSettings;
            source = tango.bind(golf)(report, oscar);
            verify = {};
            tango = 7;
            tango = foxtrot[tango];
            options = romeo.bind(yankee)(tango);
            golf = options.setFlag;
            tango = _closure1_slot8;
            tango = tango.OPT_IN_ENABLED;
            tango = golf.bind(options)(kilo, tango, entity);
            verify['flags'] = tango;
            tango = _closure1_slot1;
            golf = 9;
            golf = foxtrot[golf];
            kilo = tango.bind(yankee)(golf);
            options = kilo.saveUserGuildSettingsBulk;
            golf = {};
            sizing = {};
            output = {};
            output[oscar] = verify;
            sizing['channel_overrides'] = output;
            golf[report] = sizing;
            golf = options.bind(kilo)(golf);
            golf = 10;
            golf = foxtrot[golf];
            kilo = tango.bind(yankee)(golf);
            options = kilo.dispatch;
            golf = {};
            sizing = 'USER_GUILD_SETTINGS_CHANNEL_UPDATE';
            golf['type'] = sizing;
            golf['guildId'] = report;
            golf['channelId'] = oscar;
            golf['settings'] = verify;
            golf = options.bind(kilo)(golf);
            golf = foxtrot[zulu];
            options = romeo.bind(yankee)(golf);
            golf = options.trackChannelNotificationSettingsUpdate;
            zulu = foxtrot[zulu];
            zulu = romeo.bind(yankee)(zulu);
            kilo = zulu.NotificationLabel;
            zulu = kilo.optedIn;
            update = zulu.bind(kilo)(entity);
            config = options;
            sequence = report;
            vacuum = oscar;
            control = verify;
            echo = offset;
            zulu = config[golf](sequence, vacuum, control, source, update, echo, result);
            zulu = _closure1_slot12;
            zulu = zulu.bind(yankee)(report);
            zulu = 11;
            zulu = foxtrot[zulu];
            options = tango.bind(yankee)(zulu);
            golf = options.track;
            zulu = _closure1_slot7;
            tango = zulu.CHANNEL_LIST_UPDATED;
            zulu = {};
            verify = 12;
            backup = foxtrot[verify];
            kilo = romeo.bind(yankee)(backup);
            backup = kilo.collectGuildAnalyticsMetadata;
            vacuum = backup.bind(kilo)(report);
            sequence = zulu;
            backup = copyDataProperties(sequence, vacuum);
            verify = foxtrot[verify];
            romeo = romeo.bind(yankee)(verify);
            yankee = romeo.collectChannelAnalyticsMetadata;
            foxtrot = _closure1_slot5;
            verify = foxtrot.getChannel;
            verify = verify.bind(foxtrot)(oscar);
            vacuum = yankee.bind(romeo)(verify);
            sequence = zulu;
            verify = copyDataProperties(sequence, vacuum);
            yankee = 'remove';
            if(!entity) { _fun00008_ip = 462; continue _fun00007 }
 458:
            yankee = 'add';
 462:
            verify = 'action_type';
            zulu[verify] = yankee;
            verify = 'location';
            zulu[verify] = offset;
            zulu = golf.bind(options)(tango, zulu);
            _fun00008_ip = 560; continue _fun00007;
 488:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 6;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.updateImpersonatedChannels;
            if(entity) { _fun00008_ip = 525; continue _fun00007 }
 519:
            mike = new Array(0);
            _fun00008_ip = 536; continue _fun00007;
 525:
            golf = new Array(1);
            golf[0] = oscar;
            mike = golf;
 536:
            if(entity) { _fun00008_ip = 549; continue _fun00007 }
 539:
            entity = new Array(1);
            entity[0] = oscar;
            _fun00008_ip = 553; continue _fun00007;
 549:
            entity = new Array(0);
 553:
            entity = zulu.bind(tango)(report, mike, entity);
 560:
            entity = undefined;
            return entity;
        }
    };
    zulu['setOptInChannel'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: updateOptInChannelsImmediate
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tango = argFoo;
            verify = argBar;
            mike = argBaz;
            offset = argCorge;
            entity = null;
            if(!(entity != tango)) { _fun00010_ip = 580; continue _fun00009 }
 21:
            report = _closure1_slot4;
            zulu = report.isFullServerPreview;
            zulu = zulu.bind(report)(tango);
            if(zulu) { _fun00010_ip = 584; continue _fun00009 }
 45:
            report = _closure1_slot6;
            zulu = report.getChannelIdFlags;
            options = zulu.bind(report)(tango, verify);
            foxtrot = options;
            if(mike) { _fun00010_ip = 114; continue _fun00009 }
 67:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 7;
            report = report[zulu];
            zulu = undefined;
            golf = oscar.bind(zulu)(report);
            oscar = golf.setFlag;
            zulu = _closure1_slot8;
            report = zulu.FAVORITED;
            zulu = false;
            foxtrot = oscar.bind(golf)(options, report, zulu);
 114:
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 8;
            report = oscar[zulu];
            romeo = undefined;
            options = golf.bind(romeo)(report);
            report = options.getCurrentChannelSettings;
            backup = report.bind(options)(tango, verify);
            options = {};
            report = 7;
            oscar = oscar[report];
            yankee = golf.bind(romeo)(oscar);
            golf = yankee.setFlag;
            oscar = _closure1_slot8;
            oscar = oscar.OPT_IN_ENABLED;
            oscar = golf.bind(yankee)(foxtrot, oscar, mike);
            options['flags'] = oscar;
            golf = _closure1_slot6;
            oscar = golf.isOptInEnabled;
            oscar = oscar.bind(golf)(tango);
            if(oscar) { _fun00010_ip = 316; continue _fun00009 }
 207:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            report = golf[report];
            kilo = oscar.bind(romeo)(report);
            foxtrot = kilo.setFlag;
            oscar = _closure1_slot6;
            report = oscar.getGuildFlags;
            yankee = report.bind(oscar)(tango);
            report = _closure1_slot9;
            oscar = report.OPT_IN_CHANNELS_ON;
            report = true;
            foxtrot = foxtrot.bind(kilo)(yankee, oscar, report);
            oscar = _closure1_slot1;
            report = 9;
            report = golf[report];
            golf = oscar.bind(romeo)(report);
            oscar = golf.saveUserGuildSettingsBulk;
            report = {};
            yankee = {};
            kilo = {};
            kilo[verify] = options;
            yankee['channel_overrides'] = kilo;
            yankee['flags'] = foxtrot;
            report[tango] = yankee;
            report = oscar.bind(golf)(report);
 316:
            report = _closure1_slot1;
            foxtrot = _closure1_slot2;
            oscar = 10;
            oscar = foxtrot[oscar];
            yankee = report.bind(romeo)(oscar);
            golf = yankee.dispatch;
            oscar = {};
            kilo = 'USER_GUILD_SETTINGS_CHANNEL_UPDATE';
            oscar['type'] = kilo;
            oscar['guildId'] = tango;
            oscar['channelId'] = verify;
            oscar['settings'] = options;
            oscar = golf.bind(yankee)(oscar);
            yankee = _closure1_slot0;
            oscar = foxtrot[zulu];
            golf = yankee.bind(romeo)(oscar);
            oscar = golf.trackChannelNotificationSettingsUpdate;
            zulu = foxtrot[zulu];
            zulu = yankee.bind(romeo)(zulu);
            kilo = zulu.NotificationLabel;
            zulu = kilo.optedIn;
            result = zulu.bind(kilo)(mike);
            vacuum = golf;
            control = tango;
            source = verify;
            update = options;
            echo = backup;
            output = offset;
            zulu = vacuum[oscar](control, source, update, echo, result, output, sizing);
            zulu = _closure1_slot12;
            zulu = zulu.bind(romeo)(tango);
            zulu = 11;
            zulu = foxtrot[zulu];
            golf = report.bind(romeo)(zulu);
            oscar = golf.track;
            zulu = _closure1_slot7;
            report = zulu.CHANNEL_LIST_UPDATED;
            zulu = {};
            options = 12;
            backup = foxtrot[options];
            kilo = yankee.bind(romeo)(backup);
            backup = kilo.collectGuildAnalyticsMetadata;
            source = backup.bind(kilo)(tango);
            control = zulu;
            backup = copyDataProperties(control, source);
            options = foxtrot[options];
            romeo = yankee.bind(romeo)(options);
            yankee = romeo.collectChannelAnalyticsMetadata;
            foxtrot = _closure1_slot5;
            options = foxtrot.getChannel;
            options = options.bind(foxtrot)(verify);
            source = yankee.bind(romeo)(options);
            control = zulu;
            options = copyDataProperties(control, source);
            yankee = 'remove';
            if(!mike) { _fun00010_ip = 556; continue _fun00009 }
 552:
            yankee = 'add';
 556:
            options = 'action_type';
            zulu[options] = yankee;
            options = 'location';
            zulu[options] = offset;
            zulu = oscar.bind(golf)(report, zulu);
 580:
            zulu = undefined;
            return zulu;
 584:
            golf = _closure1_slot0;
            zulu = _closure1_slot2;
            report = 6;
            oscar = zulu[report];
            zulu = undefined;
            options = golf.bind(zulu)(oscar);
            golf = options.updateImpersonatedChannels;
            if(mike) { _fun00010_ip = 621; continue _fun00009 }
 615:
            oscar = new Array(0);
            _fun00010_ip = 632; continue _fun00009;
 621:
            offset = new Array(1);
            offset[0] = verify;
            oscar = offset;
 632:
            if(mike) { _fun00010_ip = 645; continue _fun00009 }
 635:
            mike = new Array(1);
            mike[0] = verify;
            _fun00010_ip = 649; continue _fun00009;
 645:
            mike = new Array(0);
 649:
            mike = golf.bind(options)(tango, oscar, mike);
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[report];
            zulu = mike.bind(zulu)(entity);
            mike = zulu.updateImpersonatedData;
            entity = {};
            report = true;
            entity['optInEnabled'] = report;
            entity = mike.bind(zulu)(tango, entity);
            entity = undefined;
            return entity;
        }
    };
    zulu['updateOptInChannelsImmediate'] = golf;
    zulu['updateOptInChannelsBatched'] = oscar;
    oscar = function(argFoo, argBar) { // Original name: bulkOptInChannels
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            verify = argBar;
            entity = arguments[2];
            yankee = arguments[3];
            var _closure2_slot0 = report;
            tango = undefined;
            if(!(entity === tango)) { _fun00012_ip = 26; continue _fun00011 }
 24:
            entity = false;
 26:
            var _closure2_slot1 = tango;
            mike = null;
            if(!(mike != report)) { _fun00012_ip = 458; continue _fun00011 }
 39:
            golf = _closure1_slot4;
            zulu = golf.isFullServerPreview;
            zulu = zulu.bind(golf)(report);
            if(zulu) { _fun00012_ip = 460; continue _fun00011 }
 63:
            zulu = {};
            _closure2_slot1 = zulu;
            golf = verify.forEach;
            oscar = function(argFoo) {
                tango = argFoo;
                oscar = _closure1_slot6;
                zulu = oscar.getChannelIdFlags;
                mike = _closure2_slot0;
                verify = zulu.bind(oscar)(mike, tango);
                zulu = _closure2_slot1;
                mike = {};
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                oscar = oscar[entity];
                entity = undefined;
                options = golf.bind(entity)(oscar);
                golf = options.setFlag;
                report = _closure1_slot8;
                oscar = report.OPT_IN_ENABLED;
                report = true;
                report = golf.bind(options)(verify, oscar, report);
                mike['flags'] = report;
                zulu[tango] = mike;
                return entity;
            };
            oscar = golf.bind(verify)(oscar);
            if(entity) { _fun00012_ip = 245; continue _fun00011 }
 90:
            golf = _closure1_slot1;
            backup = _closure1_slot2;
            oscar = 14;
            oscar = backup[oscar];
            offset = golf.bind(tango)(oscar);
            options = offset.updateChannelOverrideSettingsBulk;
            foxtrot = _closure1_slot0;
            oscar = 8;
            oscar = backup[oscar];
            oscar = foxtrot.bind(tango)(oscar);
            oscar = oscar.NotificationLabels;
            oscar = oscar.OptedIn;
            oscar = options.bind(offset)(report, zulu, oscar);
            oscar = 11;
            oscar = backup[oscar];
            offset = golf.bind(tango)(oscar);
            options = offset.track;
            oscar = _closure1_slot7;
            golf = oscar.CHANNEL_LIST_UPDATED;
            oscar = {};
            romeo = 12;
            romeo = backup[romeo];
            foxtrot = foxtrot.bind(tango)(romeo);
            romeo = foxtrot.collectGuildAnalyticsMetadata;
            sizing = romeo.bind(foxtrot)(report);
            output = oscar;
            romeo = copyDataProperties(output, sizing);
            foxtrot = 'add_many';
            romeo = 'action_type';
            oscar[romeo] = foxtrot;
            romeo = 'location';
            oscar[romeo] = yankee;
            oscar = options.bind(offset)(golf, oscar);
            _fun00012_ip = 458; continue _fun00011;
 245:
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            oscar = 7;
            oscar = foxtrot[oscar];
            backup = romeo.bind(tango)(oscar);
            offset = backup.setFlag;
            golf = _closure1_slot6;
            oscar = golf.getGuildFlags;
            options = oscar.bind(golf)(report);
            oscar = _closure1_slot9;
            golf = oscar.OPT_IN_CHANNELS_ON;
            oscar = true;
            backup = offset.bind(backup)(options, golf, oscar);
            oscar = _closure1_slot1;
            golf = 14;
            golf = foxtrot[golf];
            offset = oscar.bind(tango)(golf);
            options = offset.updateGuildAndChannelNotificationSettings;
            golf = {};
            golf['flags'] = backup;
            golf['channel_overrides'] = zulu;
            zulu = 8;
            zulu = foxtrot[zulu];
            zulu = romeo.bind(tango)(zulu);
            zulu = zulu.NotificationLabels;
            zulu = zulu.OptedIn;
            zulu = options.bind(offset)(report, golf, zulu);
            zulu = 11;
            zulu = foxtrot[zulu];
            options = oscar.bind(tango)(zulu);
            golf = options.track;
            zulu = _closure1_slot7;
            oscar = zulu.CHANNEL_LIST_UPDATED;
            zulu = {};
            offset = 12;
            offset = foxtrot[offset];
            romeo = romeo.bind(tango)(offset);
            offset = romeo.collectGuildAnalyticsMetadata;
            sizing = offset.bind(romeo)(report);
            output = zulu;
            offset = copyDataProperties(output, sizing);
            romeo = 'add_many_and_enable_guild';
            offset = 'action_type';
            zulu[offset] = romeo;
            offset = 'location';
            zulu[offset] = yankee;
            zulu = golf.bind(options)(oscar, zulu);
 458:
            return tango;
 460:
            golf = _closure1_slot0;
            zulu = _closure1_slot2;
            oscar = 6;
            zulu = zulu[oscar];
            options = golf.bind(tango)(zulu);
            golf = options.updateImpersonatedChannels;
            zulu = new Array(0);
            zulu = golf.bind(options)(report, verify, zulu);
            if(!entity) { _fun00012_ip = 538; continue _fun00011 }
 500:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            tango = zulu.bind(tango)(mike);
            zulu = tango.updateImpersonatedData;
            mike = {};
            oscar = true;
            mike['optInEnabled'] = oscar;
            entity = zulu.bind(tango)(report, mike);
 538:
            entity = undefined;
            return entity;
        }
    };
    zulu['bulkOptInChannels'] = oscar;
    zulu['bulkOptOutChannels'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: setGuildOptIn
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tango = argFoo;
            report = argBar;
            zulu = _closure1_slot4;
            mike = zulu.isFullServerPreview;
            mike = mike.bind(zulu)(tango);
            if(mike) { _fun00014_ip = 257; continue _fun00013 }
 30:
            zulu = _closure1_slot6;
            mike = zulu.getGuildFlags;
            backup = mike.bind(zulu)(tango);
            zulu = _closure1_slot1;
            yankee = _closure1_slot2;
            mike = 14;
            mike = yankee[mike];
            offset = undefined;
            options = zulu.bind(offset)(mike);
            golf = options.updateGuildNotificationSettings;
            oscar = {};
            verify = _closure1_slot0;
            mike = 7;
            mike = yankee[mike];
            foxtrot = verify.bind(offset)(mike);
            romeo = foxtrot.setFlag;
            mike = _closure1_slot9;
            mike = mike.OPT_IN_CHANNELS_ON;
            mike = romeo.bind(foxtrot)(backup, mike, report);
            oscar['flags'] = mike;
            mike = 8;
            mike = yankee[mike];
            mike = verify.bind(offset)(mike);
            romeo = mike.NotificationLabel;
            mike = romeo.optedIn;
            mike = mike.bind(romeo)(report);
            mike = golf.bind(options)(tango, oscar, mike);
            mike = 11;
            mike = yankee[mike];
            golf = zulu.bind(offset)(mike);
            oscar = golf.track;
            mike = _closure1_slot7;
            zulu = mike.CHANNEL_LIST_UPDATED;
            mike = {};
            options = 12;
            options = yankee[options];
            verify = verify.bind(offset)(options);
            options = verify.collectGuildAnalyticsMetadata;
            sizing = options.bind(verify)(tango);
            output = mike;
            options = copyDataProperties(output, sizing);
            verify = 'guild_disabled';
            if(!report) { _fun00014_ip = 228; continue _fun00013 }
 222:
            verify = 'guild_enabled';
 228:
            options = 'action_type';
            mike[options] = verify;
            verify = argBaz;
            options = 'location';
            mike[options] = verify;
            mike = oscar.bind(golf)(zulu, mike);
            _fun00014_ip = 298; continue _fun00013;
 257:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.updateImpersonatedData;
            entity = {};
            entity['optInEnabled'] = report;
            entity = mike.bind(zulu)(tango, entity);
 298:
            entity = undefined;
            return entity;
        }
    };
    zulu['setGuildOptIn'] = report;
    report = function(argFoo, argBar, argBaz, argCorge) { // Original name: setIsFavorite
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            options = argFoo;
            romeo = argBar;
            report = argBaz;
            entity = null;
            if(!(entity != options)) { _fun00016_ip = 371; continue _fun00015 }
 18:
            zulu = _closure1_slot4;
            mike = zulu.isFullServerPreview;
            mike = mike.bind(zulu)(options);
            if(mike) { _fun00016_ip = 371; continue _fun00015 }
 42:
            zulu = _closure1_slot6;
            mike = zulu.getChannelIdFlags;
            offset = mike.bind(zulu)(options, romeo);
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 7;
            zulu = zulu[mike];
            verify = undefined;
            oscar = tango.bind(verify)(zulu);
            tango = oscar.hasFlag;
            zulu = _closure1_slot8;
            zulu = zulu.OPT_IN_ENABLED;
            zulu = tango.bind(oscar)(offset, zulu);
            zulu = !zulu;
            if(!zulu) { _fun00016_ip = 111; continue _fun00015 }
 108:
            zulu = report;
 111:
            kilo = offset;
            if(!zulu) { _fun00016_ip = 159; continue _fun00015 }
 117:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[mike];
            golf = tango.bind(verify)(zulu);
            oscar = golf.setFlag;
            zulu = _closure1_slot8;
            tango = zulu.OPT_IN_ENABLED;
            zulu = true;
            kilo = oscar.bind(golf)(offset, tango, zulu);
 159:
            zulu = _closure1_slot1;
            offset = _closure1_slot2;
            tango = 14;
            tango = offset[tango];
            yankee = zulu.bind(verify)(tango);
            oscar = yankee.updateChannelOverrideSettings;
            tango = {};
            golf = _closure1_slot0;
            mike = offset[mike];
            backup = golf.bind(verify)(mike);
            foxtrot = backup.setFlag;
            mike = _closure1_slot8;
            mike = mike.FAVORITED;
            mike = foxtrot.bind(backup)(kilo, mike, report);
            tango['flags'] = mike;
            mike = 8;
            mike = offset[mike];
            mike = golf.bind(verify)(mike);
            foxtrot = mike.NotificationLabel;
            mike = foxtrot.favorited;
            sizing = mike.bind(foxtrot)(report);
            update = yankee;
            echo = options;
            result = romeo;
            output = tango;
            mike = update[oscar](echo, result, output, sizing, kilo);
            mike = 11;
            mike = offset[mike];
            tango = zulu.bind(verify)(mike);
            zulu = tango.track;
            entity = _closure1_slot7;
            mike = entity.CHANNEL_LIST_UPDATED;
            entity = {};
            oscar = 12;
            oscar = offset[oscar];
            golf = golf.bind(verify)(oscar);
            oscar = golf.collectGuildAnalyticsMetadata;
            result = oscar.bind(golf)(options);
            echo = entity;
            oscar = copyDataProperties(echo, result);
            oscar = 'unfavorited';
            if(!report) { _fun00016_ip = 344; continue _fun00015 }
 340:
            oscar = 'favorited';
 344:
            report = 'action_type';
            entity[report] = oscar;
            oscar = argCorge;
            report = 'location';
            entity[report] = oscar;
            entity = zulu.bind(tango)(mike, entity);
 371:
            entity = undefined;
            return entity;
        }
    };
    zulu['setIsFavorite'] = report;
    report = function(argFoo, argBar) { // Original name: setMessagesFavorite
        golf = argFoo;
        verify = argBar;
        zulu = _closure1_slot6;
        entity = zulu.getChannelIdFlags;
        oscar = null;
        foxtrot = entity.bind(zulu)(oscar, golf);
        tango = _closure1_slot1;
        offset = _closure1_slot2;
        entity = 14;
        zulu = offset[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.updateChannelOverrideSettings;
        zulu = {};
        options = _closure1_slot0;
        yankee = 7;
        yankee = offset[yankee];
        romeo = options.bind(entity)(yankee);
        yankee = romeo.setFlag;
        mike = _closure1_slot8;
        mike = mike.FAVORITED;
        mike = yankee.bind(romeo)(foxtrot, mike, verify);
        zulu['flags'] = mike;
        mike = 8;
        mike = offset[mike];
        mike = options.bind(entity)(mike);
        options = mike.NotificationLabel;
        mike = options.favorited;
        backup = mike.bind(options)(verify);
        result = report;
        output = null;
        sizing = golf;
        kilo = zulu;
        mike = result[tango](output, sizing, kilo, backup, foxtrot);
        return entity;
    };
    zulu['setMessagesFavorite'] = report;
    report = function(argFoo, argBar) { // Original name: setAddToMessages
        golf = argFoo;
        verify = argBar;
        zulu = _closure1_slot6;
        entity = zulu.getChannelIdFlags;
        oscar = null;
        foxtrot = entity.bind(zulu)(oscar, golf);
        tango = _closure1_slot1;
        offset = _closure1_slot2;
        entity = 14;
        zulu = offset[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.updateChannelOverrideSettings;
        zulu = {};
        options = _closure1_slot0;
        yankee = 7;
        yankee = offset[yankee];
        romeo = options.bind(entity)(yankee);
        yankee = romeo.setFlag;
        mike = _closure1_slot8;
        mike = mike.OPT_IN_ENABLED;
        mike = yankee.bind(romeo)(foxtrot, mike, verify);
        zulu['flags'] = mike;
        mike = 8;
        mike = offset[mike];
        mike = options.bind(entity)(mike);
        options = mike.NotificationLabel;
        mike = options.optedIn;
        backup = mike.bind(options)(verify);
        result = report;
        output = null;
        sizing = golf;
        kilo = zulu;
        mike = result[tango](output, sizing, kilo, backup, foxtrot);
        return entity;
    };
    zulu['setAddToMessages'] = report;
    report = function(argFoo) { // Original name: enableGuildNotice
        zulu = _closure1_slot0;
        tango = _closure1_slot2;
        mike = 15;
        report = tango[mike];
        entity = undefined;
        oscar = zulu.bind(entity)(report);
        report = oscar.updateUserGuildSettings;
        mike = tango[mike];
        mike = zulu.bind(entity)(mike);
        mike = mike.UserSettingsDelay;
        tango = mike.INFREQUENT_USER_ACTION;
        zulu = argFoo;
        mike = function(argFoo) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zulu = argFoo;
                offset = _closure1_slot0;
                entity = _closure1_slot2;
                tango = 7;
                report = entity[tango];
                options = undefined;
                golf = offset.bind(options)(report);
                oscar = golf.hasFlag;
                report = zulu.guildOnboardingProgress;
                verify = 16;
                entity = entity[verify];
                entity = offset.bind(options)(entity);
                entity = entity.GuildOnboardingProgress;
                entity = entity.GUILD_NOTICE_SHOWN;
                entity = oscar.bind(golf)(report, entity);
                entity = !entity;
                if(!entity) { _fun00018_ip = 140; continue _fun00017 }
 76:
                golf = _closure1_slot0;
                mike = _closure1_slot2;
                tango = mike[tango];
                oscar = golf.bind(options)(tango);
                report = oscar.addFlag;
                tango = zulu.guildOnboardingProgress;
                mike = mike[verify];
                mike = golf.bind(options)(mike);
                mike = mike.GuildOnboardingProgress;
                mike = mike.GUILD_NOTICE_SHOWN;
                mike = report.bind(oscar)(tango, mike);
                zulu['guildOnboardingProgress'] = mike;
                entity = true;
 140:
                return entity;
            }
        };
        mike = report.bind(oscar)(zulu, mike, tango);
        return entity;
    };
    zulu['enableGuildNotice'] = report;
    zulu['dismissGuildNotice'] = tango;
    tango = function(argFoo) { // Original name: clearGuildNotice
        oscar = argFoo;
        tango = _closure1_slot11;
        zulu = _closure1_slot6;
        entity = zulu.getOptedInChannels;
        verify = entity.bind(zulu)(oscar);
        zulu = new Array(0);
        options = 0;
        offset = zulu;
        entity = arraySpread(offset, verify, options);
        entity = undefined;
        zulu = tango.bind(entity)(oscar, zulu);
        zulu = _closure1_slot0;
        golf = _closure1_slot2;
        mike = 15;
        tango = golf[mike];
        report = zulu.bind(entity)(tango);
        tango = report.updateUserGuildSettings;
        mike = golf[mike];
        mike = zulu.bind(entity)(mike);
        mike = mike.UserSettingsDelay;
        zulu = mike.INFREQUENT_USER_ACTION;
        mike = function(argFoo) {
            mike = argFoo;
            options = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 7;
            entity = verify[zulu];
            golf = undefined;
            yankee = options.bind(golf)(entity);
            offset = yankee.setFlag;
            report = mike.guildOnboardingProgress;
            entity = 16;
            tango = verify[entity];
            tango = options.bind(golf)(tango);
            tango = tango.GuildOnboardingProgress;
            tango = tango.GUILD_NOTICE_SHOWN;
            oscar = false;
            tango = offset.bind(yankee)(report, tango, oscar);
            mike['guildOnboardingProgress'] = tango;
            zulu = verify[zulu];
            report = options.bind(golf)(zulu);
            tango = report.setFlag;
            zulu = mike.guildOnboardingProgress;
            entity = verify[entity];
            entity = options.bind(golf)(entity);
            entity = entity.GuildOnboardingProgress;
            entity = entity.GUILD_NOTICE_CLEARED;
            entity = tango.bind(report)(zulu, entity, oscar);
            mike['guildOnboardingProgress'] = entity;
            entity = true;
            return entity;
        };
        mike = tango.bind(report)(oscar, mike, zulu);
        return entity;
    };
    zulu['clearGuildNotice'] = tango;
    tango = function(argFoo, argBar) { // Original name: dimissFavoriteSuggestion
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 10;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'DISMISS_FAVORITE_SUGGESTION';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = argBar;
        mike['channelId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['dimissFavoriteSuggestion'] = tango;
    mike = function(argFoo, argBar) { // Original name: setRecentlyActiveCollapsed
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 10;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'SET_RECENTLY_ACTIVE_COLLAPSED';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = argBar;
        mike['collapsed'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setRecentlyActiveCollapsed'] = mike;
    return entity;
})();