// app/modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
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
    tango = tango.UserNotificationSettings;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.UnreadSetting;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelNotificationSettingsFlags;
    var _closure1_slot8 = tango;
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useChannelPresetSettings
        mike = argFoo;
        var _closure2_slot0 = mike;
        oscar = _closure1_slot0;
        golf = _closure1_slot2;
        mike = 6;
        report = golf[mike];
        zulu = undefined;
        offset = oscar.bind(zulu)(report);
        options = offset.useStateFromStores;
        verify = _closure1_slot5;
        report = new Array(1);
        report[0] = verify;
        tango = function() {
            zulu = _closure1_slot5;
            mike = zulu.resolveUnreadSetting;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report = options.bind(offset)(report, tango);
        mike = golf[mike];
        options = oscar.bind(zulu)(mike);
        tango = options.useStateFromStores;
        mike = new Array(1);
        mike[0] = verify;
        entity = function() {
            zulu = _closure1_slot5;
            mike = zulu.resolvedMessageNotifications;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        tango = tango.bind(options)(mike, entity);
        entity = {};
        entity['unread'] = report;
        entity['notification'] = tango;
        mike = 7;
        mike = golf[mike];
        zulu = oscar.bind(zulu)(mike);
        mike = zulu.presetFromSettings;
        mike = mike.bind(zulu)(report, tango);
        entity['preset'] = mike;
        return entity;
    };
    zulu['useChannelPresetSettings'] = tango;
    tango = function(argFoo) { // Original name: useChannelPresetInheritance
        tango = argFoo;
        var _closure2_slot0 = tango;
        options = _closure1_slot0;
        verify = _closure1_slot2;
        golf = 6;
        zulu = verify[golf];
        report = undefined;
        romeo = options.bind(report)(zulu);
        yankee = romeo.useStateFromStoresArray;
        zulu = _closure1_slot5;
        offset = new Array(1);
        offset[0] = zulu;
        oscar = function() {
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 8;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.filterOverrides;
            report = _closure1_slot5;
            mike = report.getChannelOverrides;
            entity = _closure2_slot0;
            entity = entity.guild_id;
            mike = mike.bind(report)(entity);
            entity = {'ignoreMute': true, 'ignoreUnreadSetting': false, 'ignoreNotificationSetting': false};
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        oscar = yankee.bind(romeo)(offset, oscar);
        var _closure2_slot1 = oscar;
        golf = verify[golf];
        verify = options.bind(report)(golf);
        options = verify.useStateFromStoresArray;
        golf = new Array(2);
        golf[0] = zulu;
        zulu = _closure1_slot4;
        golf[1] = zulu;
        offset = tango.guild_id;
        zulu = new Array(3);
        zulu[0] = offset;
        offset = tango.parent_id;
        zulu[1] = offset;
        zulu[2] = oscar;
        mike = function() {
            _fun86826: for(var _fun86826_ip = 0; ; ) switch(_fun86826_ip) {
 0:
                report = _closure1_slot4;
                tango = report.getChannel;
                zulu = _closure2_slot0;
                zulu = zulu.parent_id;
                verify = tango.bind(report)(zulu);
                zulu = null;
                if(!(zulu != verify)) { _fun86826_ip = 58; continue _fun86826 }
 36:
                report = _closure2_slot1;
                tango = report.includes;
                zulu = verify.id;
                zulu = tango.bind(report)(zulu);
                if(zulu) { _fun86826_ip = 168; continue _fun86826 }
 58:
                golf = _closure1_slot0;
                options = _closure1_slot2;
                report = 7;
                zulu = options[report];
                oscar = undefined;
                tango = golf.bind(oscar)(zulu);
                zulu = tango.presetName;
                report = options[report];
                golf = golf.bind(oscar)(report);
                oscar = golf.presetFromSettings;
                offset = _closure1_slot5;
                options = offset.getGuildUnreadSetting;
                entity = _closure2_slot0;
                report = entity.guild_id;
                report = options.bind(offset)(report);
                options = offset.getMessageNotifications;
                entity = entity.guild_id;
                entity = options.bind(offset)(entity);
                entity = oscar.bind(golf)(report, entity);
                zulu = zulu.bind(tango)(entity);
                entity = ['guild'];
                entity[1] = zulu;
                _fun86826_ip = 265; continue _fun86826;
 168:
                golf = _closure1_slot0;
                options = _closure1_slot2;
                report = 7;
                zulu = options[report];
                oscar = undefined;
                tango = golf.bind(oscar)(zulu);
                zulu = tango.presetName;
                report = options[report];
                golf = golf.bind(oscar)(report);
                oscar = golf.presetFromSettings;
                options = _closure1_slot5;
                mike = options.resolveUnreadSetting;
                report = mike.bind(options)(verify);
                mike = options.resolvedMessageNotifications;
                mike = mike.bind(options)(verify);
                mike = oscar.bind(golf)(report, mike);
                zulu = zulu.bind(tango)(mike);
                mike = ['parent'];
                mike[1] = zulu;
                entity = mike;
 265:
                return entity;
            }
        };
        zulu = options.bind(verify)(golf, mike, zulu);
        mike = _closure1_slot3;
        entity = 2;
        mike = mike.bind(report)(zulu, entity);
        entity = 0;
        zulu = mike[entity];
        entity = 1;
        mike = mike[entity];
        entity = {};
        report = oscar.includes;
        tango = tango.id;
        tango = report.bind(oscar)(tango);
        tango = !tango;
        entity['inherited'] = tango;
        entity['inheritedFrom'] = zulu;
        entity['inheritedPreset'] = mike;
        return entity;
    };
    zulu['useChannelPresetInheritance'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: updateChannelPreset
        _fun86827: for(var _fun86827_ip = 0; ; ) switch(_fun86827_ip) {
 0:
            golf = argFoo;
            oscar = argBar;
            tango = argBaz;
            zulu = _closure1_slot5;
            entity = zulu.getChannelIdFlags;
            romeo = entity.bind(zulu)(golf, oscar);
            report = _closure1_slot0;
            entity = _closure1_slot2;
            options = 7;
            zulu = entity[options];
            entity = undefined;
            zulu = report.bind(entity)(zulu);
            zulu = zulu.Presets;
            zulu = zulu.ALL_MESSAGES;
            if(!(tango !== zulu)) { _fun86827_ip = 401; continue _fun86827 }
 69:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[options];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.Presets;
            zulu = zulu.MENTIONS;
            if(!(tango !== zulu)) { _fun86827_ip = 271; continue _fun86827 }
 105:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[options];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.Presets;
            zulu = zulu.NOTHING;
            if(!(tango === zulu)) { _fun86827_ip = 526; continue _fun86827 }
 141:
            tango = _closure1_slot1;
            offset = _closure1_slot2;
            zulu = 9;
            zulu = offset[zulu];
            options = tango.bind(entity)(zulu);
            report = options.updateChannelOverrideSettings;
            tango = {};
            zulu = _closure1_slot6;
            zulu = zulu.NO_MESSAGES;
            tango['message_notifications'] = zulu;
            verify = _closure1_slot0;
            zulu = 10;
            zulu = offset[zulu];
            foxtrot = verify.bind(entity)(zulu);
            yankee = foxtrot.withChannelUnreadFlags;
            zulu = _closure1_slot8;
            zulu = zulu.UNREADS_ONLY_MENTIONS;
            zulu = yankee.bind(foxtrot)(romeo, zulu);
            tango['flags'] = zulu;
            zulu = 11;
            zulu = offset[zulu];
            zulu = verify.bind(entity)(zulu);
            zulu = zulu.NotificationLabels;
            backup = zulu.PresetNothing;
            result = options;
            output = golf;
            sizing = oscar;
            kilo = tango;
            zulu = result[report](output, sizing, kilo, backup, foxtrot);
            _fun86827_ip = 526; continue _fun86827;
 271:
            tango = _closure1_slot1;
            offset = _closure1_slot2;
            zulu = 9;
            zulu = offset[zulu];
            options = tango.bind(entity)(zulu);
            report = options.updateChannelOverrideSettings;
            tango = {};
            zulu = _closure1_slot6;
            zulu = zulu.ONLY_MENTIONS;
            tango['message_notifications'] = zulu;
            verify = _closure1_slot0;
            zulu = 10;
            zulu = offset[zulu];
            foxtrot = verify.bind(entity)(zulu);
            yankee = foxtrot.withChannelUnreadFlags;
            zulu = _closure1_slot8;
            zulu = zulu.UNREADS_ONLY_MENTIONS;
            zulu = yankee.bind(foxtrot)(romeo, zulu);
            tango['flags'] = zulu;
            zulu = 11;
            zulu = offset[zulu];
            zulu = verify.bind(entity)(zulu);
            zulu = zulu.NotificationLabels;
            backup = zulu.PresetMentions;
            result = options;
            output = golf;
            sizing = oscar;
            kilo = tango;
            zulu = result[report](output, sizing, kilo, backup, foxtrot);
            _fun86827_ip = 526; continue _fun86827;
 401:
            tango = _closure1_slot1;
            verify = _closure1_slot2;
            zulu = 9;
            zulu = verify[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.updateChannelOverrideSettings;
            zulu = {};
            options = _closure1_slot6;
            options = options.ALL_MESSAGES;
            zulu['message_notifications'] = options;
            options = _closure1_slot0;
            offset = 10;
            offset = verify[offset];
            yankee = options.bind(entity)(offset);
            offset = yankee.withChannelUnreadFlags;
            mike = _closure1_slot8;
            mike = mike.UNREADS_ALL_MESSAGES;
            mike = offset.bind(yankee)(romeo, mike);
            zulu['flags'] = mike;
            mike = 11;
            mike = verify[mike];
            mike = options.bind(entity)(mike);
            mike = mike.NotificationLabels;
            backup = mike.PresetAll;
            result = report;
            output = golf;
            sizing = oscar;
            kilo = zulu;
            mike = result[tango](output, sizing, kilo, backup, foxtrot);
 526:
            return entity;
        }
    };
    zulu['updateChannelPreset'] = tango;
    tango = function(argFoo, argBar) { // Original name: updateChannelToGuildDefault
        golf = argFoo;
        oscar = argBar;
        tango = _closure1_slot1;
        verify = _closure1_slot2;
        entity = 9;
        zulu = verify[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.updateChannelOverrideSettings;
        zulu = {};
        options = _closure1_slot6;
        options = options.NULL;
        zulu['message_notifications'] = options;
        options = _closure1_slot0;
        offset = 10;
        offset = verify[offset];
        yankee = options.bind(entity)(offset);
        offset = yankee.resetChannelUnreadFlags;
        romeo = _closure1_slot5;
        mike = romeo.getChannelIdFlags;
        mike = mike.bind(romeo)(golf, oscar);
        mike = offset.bind(yankee)(mike);
        zulu['flags'] = mike;
        mike = 11;
        mike = verify[mike];
        mike = options.bind(entity)(mike);
        mike = mike.NotificationLabels;
        foxtrot = mike.PresetDefault;
        output = report;
        sizing = golf;
        kilo = oscar;
        backup = zulu;
        mike = output[tango](sizing, kilo, backup, foxtrot, romeo);
        return entity;
    };
    zulu['updateChannelToGuildDefault'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: updateChannelUnreadSetting
        _fun86829: for(var _fun86829_ip = 0; ; ) switch(_fun86829_ip) {
 0:
            golf = argFoo;
            oscar = argBar;
            verify = argBaz;
            zulu = _closure1_slot5;
            entity = zulu.getChannelIdFlags;
            romeo = entity.bind(zulu)(golf, oscar);
            tango = _closure1_slot1;
            yankee = _closure1_slot2;
            entity = 9;
            zulu = yankee[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.updateChannelOverrideSettings;
            zulu = {};
            offset = _closure1_slot0;
            options = 10;
            options = yankee[options];
            yankee = offset.bind(entity)(options);
            offset = yankee.withChannelUnreadFlags;
            options = _closure1_slot7;
            options = options.ALL_MESSAGES;
            if(!(verify !== options)) { _fun86829_ip = 106; continue _fun86829 }
 94:
            options = _closure1_slot8;
            options = options.UNREADS_ONLY_MENTIONS;
            _fun86829_ip = 116; continue _fun86829;
 106:
            foxtrot = _closure1_slot8;
            options = foxtrot.UNREADS_ALL_MESSAGES;
 116:
            options = offset.bind(yankee)(romeo, options);
            zulu['flags'] = options;
            options = _closure1_slot0;
            offset = _closure1_slot2;
            mike = 11;
            mike = offset[mike];
            mike = options.bind(entity)(mike);
            options = mike.NotificationLabel;
            mike = options.unreads;
            backup = mike.bind(options)(verify);
            result = report;
            output = golf;
            sizing = oscar;
            kilo = zulu;
            mike = result[tango](output, sizing, kilo, backup, foxtrot);
            return entity;
        }
    };
    zulu['updateChannelUnreadSetting'] = tango;
    mike = function(argFoo, argBar, argBaz) { // Original name: updateChannelNotificationSetting
        tango = argBaz;
        report = _closure1_slot1;
        options = _closure1_slot2;
        entity = 9;
        zulu = options[entity];
        entity = undefined;
        golf = report.bind(entity)(zulu);
        oscar = golf.updateChannelOverrideSettings;
        report = {};
        report['message_notifications'] = tango;
        zulu = _closure1_slot0;
        mike = 11;
        mike = options[mike];
        mike = zulu.bind(entity)(mike);
        zulu = mike.NotificationLabel;
        mike = zulu.notifications;
        verify = mike.bind(zulu)(tango);
        romeo = argFoo;
        yankee = argBar;
        foxtrot = golf;
        offset = report;
        mike = foxtrot[oscar](romeo, yankee, offset, verify, options);
        return entity;
    };
    zulu['updateChannelNotificationSetting'] = mike;
    return entity;
})();