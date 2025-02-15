// app/actions/NotificationSettingsModalActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
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
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.Endpoints;
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.ChannelNotificationSettingsFlags;
    var _closure1_slot6 = mike;
    mike = {};
    golf = function(argFoo) { // Original name: open
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'NOTIFICATION_SETTINGS_MODAL_OPEN';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['open'] = golf;
    golf = function() { // Original name: close
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'NOTIFICATION_SETTINGS_MODAL_CLOSE';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['close'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: updateGuildNotificationSettings
        options = argFoo;
        golf = argBar;
        zulu = _closure1_slot0;
        tango = _closure1_slot2;
        mike = 5;
        oscar = tango[mike];
        entity = undefined;
        verify = zulu.bind(entity)(oscar);
        oscar = verify.getCurrentGuildSettings;
        backup = oscar.bind(verify)(options);
        verify = _closure1_slot1;
        report = 6;
        report = tango[report];
        offset = verify.bind(entity)(report);
        report = offset.saveUserGuildSettings;
        report = report.bind(offset)(options, golf);
        report = 4;
        report = tango[report];
        offset = verify.bind(entity)(report);
        verify = offset.dispatch;
        report = {};
        yankee = 'USER_GUILD_SETTINGS_GUILD_UPDATE';
        report['type'] = yankee;
        report['guildId'] = options;
        report['settings'] = golf;
        report = verify.bind(offset)(report);
        mike = tango[mike];
        report = zulu.bind(entity)(mike);
        tango = report.trackGuildNotificationSettingsUpdate;
        foxtrot = argBaz;
        romeo = argCorge;
        output = report;
        sizing = options;
        kilo = golf;
        mike = output[tango](sizing, kilo, backup, foxtrot, romeo, yankee);
        return entity;
    };
    mike['updateGuildNotificationSettings'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: updateGuildAndChannelNotificationSettings
        romeo = argFoo;
        zulu = argBar;
        yankee = argBaz;
        offset = argCorge;
        var _closure2_slot0 = romeo;
        var _closure2_slot1 = zulu;
        var _closure2_slot2 = yankee;
        var _closure2_slot3 = offset;
        report = _closure1_slot1;
        oscar = _closure1_slot2;
        tango = 7;
        options = oscar[tango];
        entity = undefined;
        foxtrot = report.bind(entity)(options);
        verify = foxtrot.keys;
        options = zulu.channel_overrides;
        kilo = verify.bind(foxtrot)(options);
        options = _closure1_slot0;
        golf = 5;
        verify = oscar[golf];
        foxtrot = options.bind(entity)(verify);
        verify = foxtrot.getCurrentGuildSettings;
        echo = verify.bind(foxtrot)(romeo);
        foxtrot = oscar[golf];
        backup = options.bind(entity)(foxtrot);
        foxtrot = backup.getManyCurrentChannelSettings;
        foxtrot = foxtrot.bind(backup)(romeo, kilo);
        var _closure2_slot4 = foxtrot;
        foxtrot = 6;
        foxtrot = oscar[foxtrot];
        backup = report.bind(entity)(foxtrot);
        foxtrot = backup.saveUserGuildSettings;
        foxtrot = foxtrot.bind(backup)(romeo, zulu);
        foxtrot = 4;
        foxtrot = oscar[foxtrot];
        kilo = report.bind(entity)(foxtrot);
        backup = kilo.dispatch;
        foxtrot = {};
        sizing = 'USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE';
        foxtrot['type'] = sizing;
        foxtrot['guildId'] = romeo;
        foxtrot['settings'] = zulu;
        foxtrot = backup.bind(kilo)(foxtrot);
        golf = oscar[golf];
        options = options.bind(entity)(golf);
        golf = options.trackGuildNotificationSettingsUpdate;
        control = options;
        source = romeo;
        update = zulu;
        result = yankee;
        output = offset;
        golf = control[golf](source, update, echo, result, output, sizing);
        tango = oscar[tango];
        report = report.bind(entity)(tango);
        tango = report.keys;
        zulu = zulu.channel_overrides;
        tango = tango.bind(report)(zulu);
        zulu = tango.forEach;
        mike = function(argFoo) {
            verify = argFoo;
            zulu = _closure2_slot4;
            entity = zulu.get;
            romeo = entity.bind(zulu)(verify);
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 5;
            zulu = zulu[entity];
            entity = undefined;
            golf = tango.bind(entity)(zulu);
            oscar = golf.trackChannelNotificationSettingsUpdate;
            kilo = _closure2_slot0;
            zulu = _closure2_slot1;
            zulu = zulu.channel_overrides;
            foxtrot = zulu[verify];
            yankee = _closure2_slot2;
            offset = _closure2_slot3;
            sizing = golf;
            backup = verify;
            mike = sizing[oscar](kilo, backup, foxtrot, romeo, yankee, offset, verify);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['updateGuildAndChannelNotificationSettings'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: updateGuildNotificationSettingsBulk
        report = argFoo;
        entity = argBar;
        var _closure2_slot0 = entity;
        entity = argBaz;
        var _closure2_slot1 = entity;
        tango = _closure1_slot1;
        oscar = _closure1_slot2;
        zulu = 7;
        options = oscar[zulu];
        entity = undefined;
        verify = tango.bind(entity)(options);
        options = verify.keys;
        verify = options.bind(verify)(report);
        options = _closure1_slot0;
        golf = 5;
        golf = oscar[golf];
        options = options.bind(entity)(golf);
        golf = options.getManyCurrentGuildSettings;
        golf = golf.bind(options)(verify);
        var _closure2_slot2 = golf;
        golf = 6;
        golf = oscar[golf];
        options = tango.bind(entity)(golf);
        golf = options.saveUserGuildSettingsBulk;
        golf = golf.bind(options)(report);
        zulu = oscar[zulu];
        tango = tango.bind(entity)(zulu);
        zulu = tango.entries;
        tango = zulu.bind(tango)(report);
        zulu = tango.forEach;
        mike = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = argFoo;
                mike = tango[Symbol.iterator];
                tango = mike().next;
                report = tango().value;
                zulu = mike;
                entity = undefined;
                zulu = zulu === entity;
                options = undefined;
                if(zulu) { _fun00002_ip = 27; continue _fun00001 }
 24:
                options = report;
 27:
                golf = undefined;
                if(zulu) { _fun00002_ip = 57; continue _fun00001 }
 32:
                report = tango().value;
                tango = mike;
                tango = tango === entity;
                golf = undefined;
                zulu = tango;
                if(tango) { _fun00002_ip = 57; continue _fun00001 }
 51:
                golf = report;
                zulu = tango;
 57:
                if(zulu) { _fun00002_ip = 63; continue _fun00001 }
 60:
                mike.return();
 63:
                tango = _closure2_slot2;
                zulu = tango.get;
                backup = zulu.bind(tango)(options);
                verify = _closure1_slot1;
                report = _closure1_slot2;
                tango = 4;
                tango = report[tango];
                offset = verify.bind(entity)(tango);
                verify = offset.dispatch;
                tango = {};
                yankee = 'USER_GUILD_SETTINGS_GUILD_UPDATE';
                tango['type'] = yankee;
                tango['guildId'] = options;
                tango['settings'] = golf;
                tango = verify.bind(offset)(tango);
                tango = _closure1_slot0;
                zulu = 5;
                zulu = report[zulu];
                report = tango.bind(entity)(zulu);
                tango = report.trackGuildNotificationSettingsUpdate;
                foxtrot = _closure2_slot0;
                romeo = _closure2_slot1;
                output = report;
                sizing = options;
                kilo = golf;
                mike = output[tango](sizing, kilo, backup, foxtrot, romeo, yankee);
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['updateGuildNotificationSettingsBulk'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: updateChannelOverrideSettings
        verify = argFoo;
        options = argBar;
        golf = argBaz;
        zulu = _closure1_slot0;
        tango = _closure1_slot2;
        mike = 5;
        oscar = tango[mike];
        entity = undefined;
        offset = zulu.bind(entity)(oscar);
        oscar = offset.getCurrentChannelSettings;
        output = oscar.bind(offset)(verify, options);
        offset = _closure1_slot1;
        report = 6;
        report = tango[report];
        romeo = offset.bind(entity)(report);
        yankee = romeo.saveUserGuildSettings;
        report = {};
        foxtrot = {};
        foxtrot[options] = golf;
        report['channel_overrides'] = foxtrot;
        report = yankee.bind(romeo)(verify, report);
        report = 4;
        report = tango[report];
        yankee = offset.bind(entity)(report);
        offset = yankee.dispatch;
        report = {};
        romeo = 'USER_GUILD_SETTINGS_CHANNEL_UPDATE';
        report['type'] = romeo;
        report['guildId'] = verify;
        report['channelId'] = options;
        report['settings'] = golf;
        report = offset.bind(yankee)(report);
        report = 8;
        report = tango[report];
        report = zulu.bind(entity)(report);
        yankee = report.AccessibilityAnnouncer;
        offset = yankee.announce;
        report = 9;
        romeo = tango[report];
        romeo = zulu.bind(entity)(romeo);
        foxtrot = romeo.intl;
        romeo = foxtrot.string;
        report = tango[report];
        report = zulu.bind(entity)(report);
        report = report.t;
        report = report.MlIsJy;
        report = romeo.bind(foxtrot)(report);
        report = offset.bind(yankee)(report);
        mike = tango[mike];
        report = zulu.bind(entity)(mike);
        tango = report.trackChannelNotificationSettingsUpdate;
        sizing = argCorge;
        kilo = argGrault;
        source = report;
        update = verify;
        echo = options;
        result = golf;
        mike = source[tango](update, echo, result, output, sizing, kilo, backup);
        return entity;
    };
    mike['updateChannelOverrideSettings'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: updateChannelOverrideSettingsBulk
        offset = argFoo;
        report = argBar;
        var _closure2_slot0 = offset;
        var _closure2_slot1 = report;
        entity = argBaz;
        var _closure2_slot2 = entity;
        entity = argCorge;
        var _closure2_slot3 = entity;
        tango = _closure1_slot1;
        oscar = _closure1_slot2;
        zulu = 7;
        options = oscar[zulu];
        entity = undefined;
        verify = tango.bind(entity)(options);
        options = verify.keys;
        verify = options.bind(verify)(report);
        options = _closure1_slot0;
        golf = 5;
        golf = oscar[golf];
        options = options.bind(entity)(golf);
        golf = options.getManyCurrentChannelSettings;
        golf = golf.bind(options)(offset, verify);
        var _closure2_slot4 = golf;
        golf = 6;
        golf = oscar[golf];
        verify = tango.bind(entity)(golf);
        options = verify.saveUserGuildSettings;
        golf = {};
        golf['channel_overrides'] = report;
        golf = options.bind(verify)(offset, golf);
        golf = 4;
        golf = oscar[golf];
        verify = tango.bind(entity)(golf);
        options = verify.dispatch;
        golf = {};
        yankee = 'USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK';
        golf['type'] = yankee;
        golf['guildId'] = offset;
        golf['overrides'] = report;
        golf = options.bind(verify)(golf);
        zulu = oscar[zulu];
        tango = tango.bind(entity)(zulu);
        zulu = tango.keys;
        tango = zulu.bind(tango)(report);
        zulu = tango.forEach;
        mike = function(argFoo) {
            options = argFoo;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            golf = zulu.bind(entity)(mike);
            oscar = golf.trackChannelNotificationSettingsUpdate;
            report = _closure2_slot0;
            mike = _closure2_slot1;
            romeo = mike[options];
            zulu = _closure2_slot4;
            mike = zulu.get;
            yankee = mike.bind(zulu)(options);
            offset = _closure2_slot2;
            verify = _closure2_slot3;
            kilo = golf;
            backup = report;
            foxtrot = options;
            entity = kilo[oscar](backup, foxtrot, romeo, yankee, offset, verify, options);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['updateChannelOverrideSettingsBulk'] = golf;
    golf = function(argFoo, argBar) { // Original name: setForumThreadsCreated
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argFoo;
            verify = argBar;
            golf = this;
            mike = _closure1_slot6;
            if(verify) { _fun00004_ip = 27; continue _fun00003 }
 19:
            options = mike.NEW_FORUM_THREADS_OFF;
            _fun00004_ip = 33; continue _fun00003;
 27:
            options = mike.NEW_FORUM_THREADS_ON;
 33:
            tango = _closure1_slot6;
            if(verify) { _fun00004_ip = 48; continue _fun00003 }
 40:
            mike = tango.NEW_FORUM_THREADS_ON;
            _fun00004_ip = 54; continue _fun00003;
 48:
            mike = tango.NEW_FORUM_THREADS_OFF;
 54:
            report = _closure1_slot4;
            tango = report.getChannelFlags;
            offset = tango.bind(report)(zulu);
            oscar = golf.updateChannelOverrideSettings;
            report = zulu.guild_id;
            foxtrot = zulu.id;
            zulu = {};
            mike = ~mike;
            mike = offset & mike;
            mike = mike | options;
            zulu['flags'] = mike;
            options = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            mike = options.bind(entity)(mike);
            options = mike.NotificationLabel;
            mike = options.forumThreadsCreated;
            yankee = mike.bind(options)(verify);
            kilo = golf;
            backup = report;
            romeo = zulu;
            mike = kilo[oscar](backup, foxtrot, romeo, yankee, offset);
            return entity;
        }
    };
    mike['setForumThreadsCreated'] = golf;
    tango = function(argFoo, argBar) { // Original name: setAccountFlag
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00006_ip = 216; continue _fun00005 }
 10:
                    mike = _closure1_slot4;
                    mike = mike.accountNotificationSettings;
                    offset = mike.flags;
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 10;
                    mike = oscar[mike];
                    tango = undefined;
                    verify = report.bind(tango)(mike);
                    options = verify.setFlag;
                    golf = _closure2_slot0;
                    mike = _closure2_slot1;
                    options = options.bind(verify)(offset, golf, mike);
                    mike = 11;
                    mike = oscar[mike];
                    mike = report.bind(tango)(mike);
                    oscar = mike.HTTP;
                    report = oscar.patch;
                    mike = {};
                    golf = _closure1_slot5;
                    golf = golf.ACCOUNT_NOTIFICATION_SETTINGS;
                    mike['url'] = golf;
                    golf = {};
                    golf['flags'] = options;
                    mike['body'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = report.bind(oscar)(mike);
                    SaveGenerator(address=140);
 138:
                    return mike;
 140:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 213; continue _fun00005 }
 146:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 4;
                    zulu = oscar[zulu];
                    oscar = report.bind(tango)(zulu);
                    report = oscar.dispatch;
                    zulu = {};
                    golf = 'NOTIFICATION_SETTINGS_UPDATE';
                    zulu['type'] = golf;
                    golf = {};
                    golf['flags'] = options;
                    zulu['settings'] = golf;
                    zulu = report.bind(oscar)(zulu);
                    SaveGenerator(address=201);
 199:
                    return zulu;
 201:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 210; continue _fun00005 }
 207:
                    return tango;
 210:
                    return zulu;
 213:
                    return mike;
 216:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['setAccountFlag'] = tango;
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/NotificationSettingsModalActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();