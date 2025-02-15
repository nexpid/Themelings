// app/modules/activities/useSelectGuildOptions.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/useSelectGuildOptions.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: getActivityGuildSuggestion
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = arguments[0];
            entity = undefined;
            if(!(mike === entity)) { _fun00002_ip = 21; continue _fun00001 }
 9:
            zulu = {};
            tango = false;
            zulu['allowGdmActivityChannelSuggestion'] = tango;
            mike = zulu;
 21:
            zulu = mike.allowGdmActivityChannelSuggestion;
            report = _closure1_slot4;
            mike = report.getVoiceChannelId;
            oscar = mike.bind(report)();
            report = _closure1_slot3;
            mike = report.getChannel;
            mike = mike.bind(report)(oscar);
            report = null;
            if(!(report != mike)) { _fun00002_ip = 73; continue _fun00001 }
 64:
            oscar = mike.guild_id;
            if(!(report == oscar)) { _fun00002_ip = 125; continue _fun00001 }
 73:
            if(!(report != mike)) { _fun00002_ip = 82; continue _fun00001 }
 77:
            entity = undefined;
            if(zulu) { _fun00002_ip = 123; continue _fun00001 }
 82:
            oscar = _closure1_slot5;
            zulu = oscar.getLastSelectedGuildId;
            zulu = zulu.bind(oscar)();
            if(!(report == zulu)) { _fun00002_ip = 120; continue _fun00001 }
 100:
            report = _closure1_slot6;
            tango = report.getFlattenedGuildIds;
            report = tango.bind(report)();
            tango = 0;
            zulu = report[tango];
 120:
            entity = zulu;
 123:
            _fun00002_ip = 130; continue _fun00001;
 125:
            entity = mike.guild_id;
 130:
            return entity;
        }
    };
    zulu['getActivityGuildSuggestion'] = tango;
    mike = function() { // Original name: useSelectGuildOptions
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 5;
        tango = tango[zulu];
        zulu = undefined;
        oscar = report.bind(zulu)(tango);
        report = oscar.useStateFromStores;
        zulu = _closure1_slot6;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = function() {
            mike = _closure1_slot6;
            entity = mike.getFlattenedGuildIds;
            entity = entity.bind(mike)();
            return entity;
        };
        report = report.bind(oscar)(tango, zulu);
        var _closure2_slot0 = report;
        tango = _closure1_slot2;
        zulu = tango.useMemo;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            zulu = _closure2_slot0;
            mike = zulu.map;
            entity = function(argFoo) {
                mike = argFoo;
                entity = {};
                entity['label'] = mike;
                entity['value'] = mike;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useSelectGuildOptions'] = mike;
    return entity;
})();