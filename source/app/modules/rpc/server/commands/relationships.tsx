// app/modules/rpc/server/commands/relationships.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    tango = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    foxtrot = mike.RPC_SCOPE_CONFIG;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    tango = mike.RelationshipTypes;
    var _closure1_slot5 = tango;
    tango = mike.RPCCommands;
    mike = {};
    golf = tango.GET_RELATIONSHIPS;
    options = 4;
    options = oscar[options];
    offset = report.bind(entity)(options);
    verify = offset.createRPCCommand;
    options = tango.GET_RELATIONSHIPS;
    tango = {};
    romeo = {};
    backup = foxtrot.ANY;
    foxtrot = 5;
    foxtrot = oscar[foxtrot];
    foxtrot = report.bind(entity)(foxtrot);
    foxtrot = foxtrot.OAuth2Scopes;
    kilo = foxtrot.RELATIONSHIPS_READ;
    foxtrot = new Array(1);
    foxtrot[0] = kilo;
    romeo[backup] = foxtrot;
    tango['scope'] = romeo;
    yankee = function(argFoo) { // Original name: handler
        entity = argFoo;
        var _closure2_slot0 = entity;
        report = _closure1_slot1;
        golf = _closure1_slot2;
        tango = 6;
        entity = golf[tango];
        oscar = undefined;
        offset = report.bind(oscar)(entity);
        verify = offset.pickBy;
        options = {};
        yankee = _closure1_slot3;
        entity = yankee.getRelationships;
        romeo = entity.bind(yankee)();
        foxtrot = options;
        entity = copyDataProperties(foxtrot, romeo);
        entity = function(argFoo) {
            entity = _closure1_slot5;
            mike = entity.NONE;
            entity = argFoo;
            entity = entity !== mike;
            return entity;
        };
        options = verify.bind(offset)(options, entity);
        entity = {};
        tango = golf[tango];
        report = report.bind(oscar)(tango);
        tango = report.map;
        zulu = function(argFoo, argBar) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = _closure1_slot4;
                zulu = tango.getUser;
                entity = argBar;
                verify = zulu.bind(tango)(entity);
                entity = null;
                if(!(entity != verify)) { _fun00002_ip = 110; continue _fun00001 }
 27:
                tango = _closure1_slot0;
                oscar = _closure1_slot2;
                mike = 7;
                report = oscar[mike];
                zulu = undefined;
                options = tango.bind(zulu)(report);
                golf = options.transformBaseRelationship;
                report = argFoo;
                report = golf.bind(options)(report, verify);
                mike = oscar[mike];
                tango = tango.bind(zulu)(mike);
                zulu = tango.transformApplicationRelationship;
                mike = _closure2_slot0;
                mike = mike.socket;
                mike = mike.application;
                mike = mike.id;
                mike = zulu.bind(tango)(report, mike);
                return mike;
 110:
                return entity;
            }
        };
        tango = tango.bind(report)(options, zulu);
        zulu = tango.filter;
        report = _closure1_slot0;
        mike = 8;
        mike = golf[mike];
        mike = report.bind(oscar)(mike);
        mike = mike.isNotNullish;
        mike = zulu.bind(tango)(mike);
        entity['relationships'] = mike;
        return entity;
    };
    tango['handler'] = yankee;
    tango = verify.bind(offset)(options, tango);
    mike[golf] = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/server/commands/relationships.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();