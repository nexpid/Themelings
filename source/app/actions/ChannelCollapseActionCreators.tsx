// app/actions/ChannelCollapseActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = report[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = {};
    oscar = function(argFoo) { // Original name: update
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CHANNEL_COLLAPSE';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['update'] = oscar;
    tango = function(argFoo) { // Original name: toggleCollapseGuild
        report = argFoo;
        zulu = _closure1_slot0;
        tango = _closure1_slot1;
        entity = 2;
        mike = tango[entity];
        entity = undefined;
        golf = zulu.bind(entity)(mike);
        oscar = golf.saveUserGuildSettings;
        mike = {};
        verify = _closure1_slot2;
        options = verify.isGuildCollapsed;
        options = options.bind(verify)(report);
        options = !options;
        mike['hide_muted_channels'] = options;
        mike = oscar.bind(golf)(report, mike);
        mike = 1;
        mike = tango[mike];
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        oscar = 'GUILD_TOGGLE_COLLAPSE_MUTED';
        mike['type'] = oscar;
        mike['guildId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['toggleCollapseGuild'] = tango;
    tango = 3;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'actions/ChannelCollapseActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();