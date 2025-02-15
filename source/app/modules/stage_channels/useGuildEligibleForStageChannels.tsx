// app/modules/stage_channels/useGuildEligibleForStageChannels.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function(argFoo) { // Original name: isGuildEligibleForStageChannels
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = arguments[1];
            zulu = undefined;
            if(!(tango === zulu)) { _fun00002_ip = 27; continue _fun00001 }
 9:
            mike = _closure1_slot2;
            entity = new Array(1);
            entity[0] = mike;
            tango = entity;
 27:
            mike = tango;
            entity = mike[Symbol.iterator];
            mike = entity().next;
            tango = mike().value;
            mike = entity;
            mike = mike === zulu;
            report = undefined;
            if(mike) { _fun00002_ip = 52; continue _fun00001 }
 49:
            report = tango;
 52:
            if(mike) { _fun00002_ip = 58; continue _fun00001 }
 55:
            entity.return();
 58:
            entity = global;
            mike = entity.Boolean;
            tango = report.getGuild;
            entity = argFoo;
            oscar = tango.bind(report)(entity);
            entity = null;
            tango = entity == oscar;
            entity = undefined;
            if(tango) { _fun00002_ip = 114; continue _fun00001 }
 90:
            report = oscar.hasFeature;
            tango = _closure1_slot3;
            tango = tango.COMMUNITY;
            entity = report.bind(oscar)(tango);
 114:
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot4 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.GuildFeatures;
    var _closure1_slot3 = report;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/stage_channels/useGuildEligibleForStageChannels.tsx';
    report = oscar.bind(golf)(report);
    zulu['isGuildEligibleForStageChannels'] = tango;
    mike = function(argFoo) { // Original name: useGuildEligibleForStageChannels
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 2;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        mike = _closure1_slot2;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            tango = _closure1_slot4;
            zulu = _closure2_slot0;
            entity = _closure1_slot2;
            mike = new Array(1);
            mike[0] = entity;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useGuildEligibleForStageChannels'] = mike;
    return entity;
})();