// app/modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 2;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useTrackNavigatorScreenImpression
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = entity.impressionName;
            zulu = entity.impressionProperties;
            mike = 'function';
            entity = typeof zulu;
            tango = zulu;
            if(!(mike === entity)) { _fun00002_ip = 45; continue _fun00001 }
 29:
            entity = argBar;
            mike = entity.params;
            entity = undefined;
            tango = zulu.bind(entity)(mike);
 45:
            zulu = _closure1_slot1;
            options = _closure1_slot2;
            entity = 0;
            mike = options[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = {};
            golf = _closure1_slot0;
            oscar = 1;
            oscar = options[oscar];
            oscar = golf.bind(entity)(oscar);
            oscar = oscar.ImpressionTypes;
            oscar = oscar.PAGE;
            mike['type'] = oscar;
            mike['name'] = report;
            mike['properties'] = tango;
            mike = zulu.bind(entity)(mike);
            return entity;
        }
    };
    zulu['useTrackNavigatorScreenImpression'] = mike;
    return entity;
})();