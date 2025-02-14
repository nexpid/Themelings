// app/modules/app_launcher/hooks/useCommandContext.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    zulu = argFred;
    oscar = argPlugh;
    tango = function(argFoo) { // Original name: getCommandContext
        _fun100597: for(var _fun100597_ip = 0; ; ) switch(_fun100597_ip) {
 0:
            mike = argFoo;
            zulu = mike.type;
            entity = 'contextless';
            if(!(entity !== zulu)) { _fun100597_ip = 62; continue _fun100597 }
 18:
            entity = {};
            zulu = mike.channel;
            entity['channel'] = zulu;
            tango = _closure1_slot1;
            zulu = tango.getGuild;
            mike = mike.channel;
            mike = mike.guild_id;
            mike = zulu.bind(tango)(mike);
            entity['guild'] = mike;
            _fun100597_ip = 77; continue _fun100597;
 62:
            mike = {};
            zulu = undefined;
            mike['channel'] = zulu;
            mike['guild'] = zulu;
            entity = mike;
 77:
            return entity;
        }
    };
    var _closure1_slot2 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, report);
    entity = 0;
    golf = oscar[entity];
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(golf);
    var _closure1_slot0 = report;
    report = 1;
    golf = oscar[report];
    report = argBaz;
    report = report.bind(entity)(golf);
    var _closure1_slot1 = report;
    report = 2;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'modules/app_launcher/hooks/useCommandContext.tsx';
    report = oscar.bind(golf)(report);
    zulu['getCommandContext'] = tango;
    mike = function(argFoo) { // Original name: useCommandContext
        report = argFoo;
        var _closure2_slot0 = report;
        tango = _closure1_slot0;
        zulu = tango.useMemo;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            zulu = _closure1_slot2;
            mike = _closure2_slot0;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useCommandContext'] = mike;
    return entity;
})();