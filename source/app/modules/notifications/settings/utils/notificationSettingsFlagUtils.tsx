// app/modules/notifications/settings/utils/notificationSettingsFlagUtils.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    entity = argCorge;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = options;
    report = function(argFoo) { // Original name: resetGuildUnreadFlags
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 1;
        zulu = zulu[mike];
        mike = undefined;
        report = tango.bind(mike)(zulu);
        tango = report.removeFlags;
        mike = _closure1_slot2;
        zulu = mike.UNREADS_ALL_MESSAGES;
        entity = _closure1_slot2;
        mike = entity.UNREADS_ONLY_MENTIONS;
        entity = argFoo;
        entity = tango.bind(report)(entity, zulu, mike);
        return entity;
    };
    var _closure1_slot5 = report;
    entity = global;
    verify = entity.Object;
    oscar = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = options[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    oscar = tango.GuildNotificationSettingsFlags;
    var _closure1_slot2 = oscar;
    tango = tango.ChannelNotificationSettingsFlags;
    var _closure1_slot3 = tango;
    tango = function(argFoo) { // Original name: resetChannelUnreadFlags
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 1;
        zulu = zulu[mike];
        mike = undefined;
        report = tango.bind(mike)(zulu);
        tango = report.removeFlags;
        entity = _closure1_slot3;
        zulu = entity.UNREADS_ALL_MESSAGES;
        mike = entity.UNREADS_ONLY_MENTIONS;
        entity = argFoo;
        entity = tango.bind(report)(entity, zulu, mike);
        return entity;
    };
    var _closure1_slot4 = tango;
    oscar = 2;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/notifications/settings/utils/notificationSettingsFlagUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['resetGuildUnreadFlags'] = report;
    report = function(argFoo, argBar) { // Original name: withGuildUnreadFlags
        zulu = _closure1_slot0;
        tango = _closure1_slot1;
        mike = 1;
        mike = tango[mike];
        report = undefined;
        tango = zulu.bind(report)(mike);
        zulu = tango.addFlag;
        mike = _closure1_slot5;
        entity = argFoo;
        mike = mike.bind(report)(entity);
        entity = argBar;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['withGuildUnreadFlags'] = report;
    zulu['resetChannelUnreadFlags'] = tango;
    mike = function(argFoo, argBar) { // Original name: withChannelUnreadFlags
        zulu = _closure1_slot0;
        tango = _closure1_slot1;
        mike = 1;
        mike = tango[mike];
        report = undefined;
        tango = zulu.bind(report)(mike);
        zulu = tango.addFlag;
        mike = _closure1_slot4;
        entity = argFoo;
        mike = mike.bind(report)(entity);
        entity = argBar;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['withChannelUnreadFlags'] = mike;
    return entity;
})();