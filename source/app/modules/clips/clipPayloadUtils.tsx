// app/modules/clips/clipPayloadUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.CLIPS_MAX_PARTICIPANTS;
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/clips/clipPayloadUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getClipCreatedAt
        entity = global;
        zulu = entity.Date;
        tango = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = tango.bind(entity)(mike);
        mike = tango.extractTimestamp;
        entity = argFoo;
        report = mike.bind(tango)(entity);
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        oscar = mike;
        entity = new oscar[zulu](report, tango);
        mike = entity instanceof Object ? entity : mike;
        entity = mike.toISOString;
        entity = entity.bind(mike)();
        return entity;
    };
    zulu['getClipCreatedAt'] = tango;
    mike = function(argFoo) { // Original name: getClipParticipantIds
        tango = argFoo;
        zulu = tango.slice;
        mike = _closure1_slot2;
        entity = 0;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['getClipParticipantIds'] = mike;
    return entity;
})();