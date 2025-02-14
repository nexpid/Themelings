// app/modules/message_request/MessageRequestStoreUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    tango = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tango;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, report);
    entity = 1;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/message_request/MessageRequestStoreUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: sortChannelIds
        zulu = argFoo;
        mike = zulu.sort;
        entity = function(argFoo, argBar) {
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 0;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.compare;
            entity = argFoo;
            mike = entity.lastMessageId;
            entity = argBar;
            entity = entity.lastMessageId;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        mike = mike.bind(zulu)(entity);
        entity = mike.reverse;
        entity = entity.bind(mike)();
        return entity;
    };
    zulu['sortChannelIds'] = mike;
    return entity;
})();