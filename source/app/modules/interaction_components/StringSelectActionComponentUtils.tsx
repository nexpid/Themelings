// app/modules/interaction_components/StringSelectActionComponentUtils.tsx
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
    tango = 'modules/interaction_components/StringSelectActionComponentUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: getInitialStringSelectOptions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            golf = _closure1_slot2;
            oscar = golf.getInteractionComponentState;
            report = zulu.id;
            mike = argBar;
            mike = oscar.bind(golf)(mike, report);
            report = null;
            oscar = report == mike;
            golf = undefined;
            report = undefined;
            if(oscar) { _fun00002_ip = 50; continue _fun00001 }
 45:
            report = mike.type;
 50:
            oscar = _closure1_slot0;
            options = _closure1_slot1;
            tango = 1;
            tango = options[tango];
            tango = oscar.bind(golf)(tango);
            tango = tango.ComponentType;
            tango = tango.STRING_SELECT;
            if(!(report !== tango)) { _fun00002_ip = 127; continue _fun00001 }
 86:
            report = zulu.options;
            tango = report.filter;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.default;
                return entity;
            };
            tango = tango.bind(report)(zulu);
            zulu = tango.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.value;
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            _fun00002_ip = 132; continue _fun00001;
 127:
            entity = mike.values;
 132:
            return entity;
        }
    };
    zulu['getInitialStringSelectOptions'] = mike;
    return entity;
})();