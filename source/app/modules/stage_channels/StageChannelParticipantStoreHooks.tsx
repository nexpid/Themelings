// app/modules/stage_channels/StageChannelParticipantStoreHooks.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/stage_channels/StageChannelParticipantStoreHooks.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: useStageParticipants
        yankee = argFoo;
        zulu = argBar;
        var _closure2_slot0 = yankee;
        var _closure2_slot1 = zulu;
        verify = _closure1_slot0;
        offset = _closure1_slot1;
        tango = 2;
        report = offset[tango];
        tango = undefined;
        options = verify.bind(tango)(report);
        golf = options.useStateFromStores;
        report = _closure1_slot3;
        oscar = new Array(1);
        oscar[0] = report;
        report = new Array(2);
        report[0] = yankee;
        report[1] = zulu;
        zulu = 3;
        zulu = offset[zulu];
        zulu = verify.bind(tango)(zulu);
        romeo = zulu.isVersionEqual;
        backup = function() {
            tango = _closure1_slot3;
            mike = tango.getMutableParticipants;
            zulu = _closure2_slot0;
            entity = _closure2_slot1;
            mike = mike.bind(tango)(zulu, entity);
            entity = new Array(2);
            entity[0] = mike;
            mike = tango.getParticipantsVersion;
            mike = mike.bind(tango)(zulu);
            entity[1] = mike;
            return entity;
        };
        sizing = options;
        kilo = oscar;
        foxtrot = report;
        zulu = sizing[golf](kilo, backup, foxtrot, romeo, yankee);
        mike = _closure1_slot2;
        entity = 1;
        mike = mike.bind(tango)(zulu, entity);
        entity = 0;
        entity = mike[entity];
        return entity;
    };
    zulu['useStageParticipants'] = tango;
    tango = function(argFoo, argBar) { // Original name: useStageParticipantsCount
        golf = argFoo;
        oscar = argBar;
        var _closure2_slot0 = golf;
        var _closure2_slot1 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 2;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        mike = _closure1_slot3;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(2);
        mike[0] = golf;
        mike[1] = oscar;
        entity = function() {
            tango = _closure1_slot3;
            zulu = tango.getParticipantCount;
            mike = _closure2_slot0;
            entity = _closure2_slot1;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useStageParticipantsCount'] = tango;
    tango = function(argFoo) { // Original name: useSortedRequestToSpeakParticipants
        zulu = argFoo;
        var _closure2_slot0 = zulu;
        verify = _closure1_slot0;
        offset = _closure1_slot1;
        tango = 2;
        report = offset[tango];
        tango = undefined;
        options = verify.bind(tango)(report);
        golf = options.useStateFromStores;
        report = _closure1_slot3;
        oscar = new Array(1);
        oscar[0] = report;
        report = new Array(1);
        report[0] = zulu;
        zulu = 3;
        zulu = offset[zulu];
        zulu = verify.bind(tango)(zulu);
        yankee = zulu.isVersionEqual;
        foxtrot = function() {
            tango = _closure1_slot3;
            entity = tango.getMutableRequestToSpeakParticipants;
            zulu = _closure2_slot0;
            mike = entity.bind(tango)(zulu);
            entity = new Array(2);
            entity[0] = mike;
            mike = tango.getRequestToSpeakParticipantsVersion;
            mike = mike.bind(tango)(zulu);
            entity[1] = mike;
            return entity;
        };
        kilo = options;
        backup = oscar;
        romeo = report;
        zulu = kilo[golf](backup, foxtrot, romeo, yankee, offset);
        mike = _closure1_slot2;
        entity = 1;
        mike = mike.bind(tango)(zulu, entity);
        entity = 0;
        entity = mike[entity];
        return entity;
    };
    zulu['useSortedRequestToSpeakParticipants'] = tango;
    mike = function(argFoo) { // Original name: useActualStageSpeakerCount
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 2;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        mike = _closure1_slot3;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            tango = _closure1_slot3;
            zulu = tango.getMutableParticipants;
            mike = _closure2_slot0;
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            entity = 4;
            report = report[entity];
            entity = undefined;
            entity = oscar.bind(entity)(report);
            entity = entity.StageChannelParticipantNamedIndex;
            entity = entity.SPEAKER;
            zulu = zulu.bind(tango)(mike, entity);
            mike = zulu.filter;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                entity = 4;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = entity.StageChannelParticipantTypes;
                entity = entity.VOICE;
                entity = mike === entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = entity.length;
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useActualStageSpeakerCount'] = mike;
    return entity;
})();