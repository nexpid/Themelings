// app/design/components/themes/ThemeUtilities.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
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
    golf = tango.ThemeTypes;
    var _closure1_slot0 = golf;
    tango = tango.ThemeExtends;
    var _closure1_slot1 = tango;
    tango = 1;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/themes/ThemeUtilities.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: isThemeLight
        entity = _closure1_slot0;
        mike = entity.LIGHT;
        entity = argFoo;
        entity = entity === mike;
        return entity;
    };
    zulu['isThemeLight'] = tango;
    tango = function(argFoo) { // Original name: isThemeDark
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot0;
            zulu = zulu.DARK;
            if(!(zulu !== mike)) { _fun00002_ip = 52; continue _fun00001 }
 20:
            zulu = _closure1_slot0;
            zulu = zulu.MIDNIGHT;
            if(!(zulu !== mike)) { _fun00002_ip = 52; continue _fun00001 }
 34:
            entity = _closure1_slot0;
            entity = entity.DARKER;
            if(!(entity !== mike)) { _fun00002_ip = 52; continue _fun00001 }
 48:
            entity = false;
            return entity;
 52:
            entity = true;
            return entity;
        }
    };
    zulu['isThemeDark'] = tango;
    mike = function(argFoo) { // Original name: getThemeClass
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golf = argFoo;
            entity = null;
            if(!(entity == golf)) { _fun00004_ip = 13; continue _fun00003 }
 9:
            mike = undefined;
            return mike;
 13:
            zulu = _closure1_slot1;
            mike = zulu.get;
            oscar = mike.bind(zulu)(golf);
            if(!(entity == oscar)) { _fun00004_ip = 68; continue _fun00003 }
 34:
            entity = global;
            entity = entity.HermesInternal;
            zulu = entity.concat;
            mike = 'theme-';
            entity = ' images-';
            entity = zulu.bind(mike)(golf, entity, golf);
            _fun00004_ip = 112; continue _fun00003;
 68:
            mike = global;
            mike = mike.HermesInternal;
            report = mike.concat;
            foxtrot = 'theme-';
            yankee = ' theme-';
            verify = ' images-';
            romeo = oscar;
            offset = golf;
            options = oscar;
            entity = foxtrot[report](romeo, yankee, offset, verify, options, golf);
 112:
            return entity;
        }
    };
    zulu['getThemeClass'] = mike;
    return entity;
})();