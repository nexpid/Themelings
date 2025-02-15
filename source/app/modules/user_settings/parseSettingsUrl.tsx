// app/modules/user_settings/parseSettingsUrl.tsx
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
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.UserSettingsSections;
    var _closure1_slot3 = tango;
    tango = /-/g;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_settings/parseSettingsUrl.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: parseSettingsUrl
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            mike = zulu.split;
            entity = '/';
            zulu = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            options = undefined;
            entity = 4;
            mike = mike.bind(options)(zulu, entity);
            verify = 2;
            zulu = mike[verify];
            entity = 3;
            mike = mike[entity];
            oscar = null;
            entity = oscar == zulu;
            report = undefined;
            if(entity) { _fun00002_ip = 89; continue _fun00001 }
 60:
            entity = zulu.toUpperCase;
            offset = entity.bind(zulu)();
            golf = offset.replace;
            zulu = _closure1_slot4;
            entity = '_';
            report = golf.bind(offset)(zulu, entity);
 89:
            entity = oscar == mike;
            zulu = undefined;
            if(entity) { _fun00002_ip = 127; continue _fun00001 }
 98:
            entity = mike.toUpperCase;
            offset = entity.bind(mike)();
            golf = offset.replace;
            mike = _closure1_slot4;
            entity = '_';
            zulu = golf.bind(offset)(mike, entity);
 127:
            mike = _closure1_slot3;
            entity = mike.hasOwnProperty;
            mike = entity.bind(mike)(report);
            entity = null;
            if(!mike) { _fun00002_ip = 252; continue _fun00001 }
 147:
            if(!(oscar != zulu)) { _fun00002_ip = 179; continue _fun00001 }
 151:
            mike = '';
            if(!(mike !== zulu)) { _fun00002_ip = 179; continue _fun00001 }
 159:
            golf = _closure1_slot3;
            mike = golf.hasOwnProperty;
            mike = mike.bind(golf)(zulu);
            entity = null;
            if(!mike) { _fun00002_ip = 252; continue _fun00001 }
 179:
            mike = {};
            golf = _closure1_slot0;
            oscar = _closure1_slot1;
            oscar = oscar[verify];
            options = golf.bind(options)(oscar);
            golf = options.parse;
            oscar = global;
            oscar = oscar.location;
            oscar = oscar.search;
            oscar = golf.bind(options)(oscar);
            oscar = oscar.source;
            mike['source'] = oscar;
            tango = _closure1_slot3;
            tango = tango[report];
            mike['section'] = tango;
            mike['subsection'] = zulu;
            entity = mike;
 252:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();