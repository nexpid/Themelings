// app/modules/links/getLocalizedLink.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 1;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/links/getLocalizedLink.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: getLocalizedLink
        _fun43948: for(var _fun43948_ip = 0; ; ) switch(_fun43948_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 0;
            mike = mike[entity];
            entity = undefined;
            entity = tango.bind(entity)(mike);
            entity = entity.intl;
            mike = entity.currentLocale;
            entity = mike.toLowerCase;
            mike = entity.bind(mike)();
            entity = mike in zulu;
            if(entity) { _fun43948_ip = 62; continue _fun43948 }
 55:
            entity = zulu.default;
            _fun43948_ip = 66; continue _fun43948;
 62:
            entity = zulu[mike];
 66:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();