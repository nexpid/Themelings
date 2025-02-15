// app/modules/recent_channels/RecentChannelsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _bulkClearRecents
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun90312: for(var _fun90312_ip = 0; ; ) switch(_fun90312_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun90312_ip = 195; continue _fun90312 }
 13:
                    report = _closure1_slot0;
                    options = _closure1_slot2;
                    mike = 2;
                    oscar = options[mike];
                    zulu = undefined;
                    golf = report.bind(zulu)(oscar);
                    oscar = golf.updateUserGuildSettings;
                    mike = options[mike];
                    mike = report.bind(zulu)(mike);
                    mike = mike.UserSettingsDelay;
                    report = mike.INFREQUENT_USER_ACTION;
                    mike = function(argFoo) {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 3;
                        mike = mike[entity];
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        zulu = entity.Timestamp;
                        mike = zulu.fromDate;
                        entity = global;
                        entity = entity.Date;
                        tango = entity.prototype;
                        tango = Object.create(tango, {constructor: {value: entity}});
                        oscar = tango;
                        entity = new oscar[entity](report);
                        entity = entity instanceof Object ? entity : tango;
                        mike = mike.bind(zulu)(entity);
                        entity = argFoo;
                        entity['guildRecentsDismissedAt'] = mike;
                        entity = true;
                        return entity;
                    };
                    mike = oscar.bind(golf)(offset, mike, report);
                    SaveGenerator(address=85);
 83:
                    return mike;
 85:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun90312_ip = 192; continue _fun90312 }
 91:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    report = 4;
                    report = golf[report];
                    verify = oscar.bind(zulu)(report);
                    options = verify.dispatch;
                    report = {};
                    yankee = 'BULK_CLEAR_RECENTS';
                    report['type'] = yankee;
                    report['guildId'] = offset;
                    offset = argBar;
                    report['channelIds'] = offset;
                    report = options.bind(verify)(report);
                    report = 5;
                    report = golf[report];
                    golf = oscar.bind(zulu)(report);
                    oscar = golf.track;
                    tango = _closure1_slot4;
                    report = tango.CHANNEL_LIST_UPDATED;
                    tango = {};
                    options = 'recents_dismissed';
                    tango['action_type'] = options;
                    tango = oscar.bind(golf)(report, tango);
                    return zulu;
 192:
                    return mike;
 195:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot5 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot5 = entity;
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
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot4 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/recent_channels/RecentChannelsActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: bulkClearRecents
        entity = undefined;
        tango = _closure1_slot5;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['bulkClearRecents'] = mike;
    return entity;
})();