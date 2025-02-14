// app/actions/DimensionActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    zulu = argFred;
    tango = argPlugh;
    mike = argBaz;
    var _closure1_slot0 = mike;
    var _closure1_slot1 = tango;
    mike = global;
    golf = mike.Object;
    oscar = golf.defineProperty;
    report = {};
    mike = true;
    report['value'] = mike;
    mike = '__esModule';
    mike = oscar.bind(golf)(zulu, mike, report);
    mike = {};
    report = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: updateChannelDimensions
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = argBaz;
        var _closure2_slot2 = entity;
        entity = argCorge;
        var _closure2_slot3 = entity;
        entity = argGrault;
        var _closure2_slot4 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 0;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.wait;
        mike = function() {
            _fun86079: for(var _fun86079_ip = 0; ; ) switch(_fun86079_ip) {
 0:
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 0;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.dispatch;
                zulu = {};
                mike = 'UPDATE_CHANNEL_DIMENSIONS';
                zulu['type'] = mike;
                oscar = _closure2_slot0;
                zulu['channelId'] = oscar;
                oscar = _closure2_slot1;
                zulu['scrollTop'] = oscar;
                oscar = _closure2_slot2;
                zulu['scrollHeight'] = oscar;
                oscar = _closure2_slot3;
                zulu['offsetHeight'] = oscar;
                zulu = tango.bind(report)(zulu);
                tango = _closure2_slot4;
                zulu = null;
                if(!(zulu != tango)) { _fun86079_ip = 100; continue _fun86079 }
 92:
                mike = _closure2_slot4;
                mike = mike.bind(entity)();
 100:
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['updateChannelDimensions'] = report;
    report = function(argFoo, argBar) { // Original name: updateChannelListScroll
        _fun86080: for(var _fun86080_ip = 0; ; ) switch(_fun86080_ip) {
 0:
            report = arguments[2];
            entity = undefined;
            if(!(report === entity)) { _fun86080_ip = 13; continue _fun86080 }
 9:
            report = new Array(0);
 13:
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 0;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'UPDATE_CHANNEL_LIST_DIMENSIONS';
            mike['type'] = oscar;
            oscar = argFoo;
            mike['guildId'] = oscar;
            oscar = argBar;
            mike['scrollTop'] = oscar;
            mike['channelIds'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['updateChannelListScroll'] = report;
    report = function(argFoo, argBar) { // Original name: channelListScrollTo
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'UPDATE_CHANNEL_LIST_DIMENSIONS';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = argBar;
        mike['scrollTo'] = report;
        report = new Array(0);
        mike['channelIds'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['channelListScrollTo'] = report;
    report = function(argFoo) { // Original name: clearChannelListScrollTo
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {'type': 'UPDATE_CHANNEL_LIST_DIMENSIONS', 'guildId': null, 'scrollTo': null};
        report = argFoo;
        mike['guildId'] = report;
        report = new Array(0);
        mike['channelIds'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['clearChannelListScrollTo'] = report;
    report = function(argFoo, argBar) { // Original name: clearChannelDimensions
        report = this;
        tango = report.updateChannelDimensions;
        offset = argFoo;
        oscar = argBar;
        yankee = report;
        verify = null;
        options = null;
        golf = null;
        entity = yankee[tango](offset, verify, options, golf, oscar, report);
        entity = undefined;
        return entity;
    };
    mike['clearChannelDimensions'] = report;
    entity = function(argFoo) { // Original name: updateGuildListScrollTo
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'UPDATE_GUILD_LIST_DIMENSIONS';
        mike['type'] = report;
        report = argFoo;
        mike['scrollTop'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['updateGuildListScrollTo'] = entity;
    entity = 1;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'actions/DimensionActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();