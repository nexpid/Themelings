// app/modules/safety_education/hooks/useIsMemberOfLargeServer.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
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
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/safety_education/hooks/useIsMemberOfLargeServer.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useUserIsInLargeGuilds
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 1;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        entity = _closure1_slot2;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            entity = global;
            zulu = entity.Object;
            mike = zulu.values;
            tango = _closure1_slot2;
            entity = tango.getMemberCounts;
            entity = entity.bind(tango)();
            zulu = mike.bind(zulu)(entity);
            mike = zulu.some;
            entity = function(argFoo) {
                mike = argFoo;
                entity = 200;
                entity = mike >= entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useUserIsInLargeGuilds'] = mike;
    return entity;
})();