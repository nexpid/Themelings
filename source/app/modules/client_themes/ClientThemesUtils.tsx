// app/modules/client_themes/ClientThemesUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
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
    verify = 0;
    tango = oscar[verify];
    entity = undefined;
    tango = report.bind(entity)(tango);
    options = tango.BACKGROUND_GRADIENT_PRESETS_MOBILE;
    yankee = tango.REDESIGN_STANDARD_BACKGROUND_THEMES;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ThemeTypes;
    var _closure1_slot2 = tango;
    tango = new Array(0);
    romeo = tango;
    offset = 0;
    offset = arraySpread(romeo, yankee, offset);
    romeo = tango;
    yankee = options;
    golf = arraySpread(romeo, yankee, offset);
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/client_themes/ClientThemesUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getThemeForColor
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            mike = entity.l;
            entity = 0.3;
            if(!(!(mike <= entity))) { _fun00002_ip = 37; continue _fun00001 }
 22:
            entity = _closure1_slot2;
            entity = entity.LIGHT;
            _fun00002_ip = 50; continue _fun00001;
 37:
            mike = _closure1_slot2;
            entity = mike.DARK;
 50:
            return entity;
        }
    };
    zulu['getThemeForColor'] = tango;
    tango = function(argFoo) { // Original name: getLinearGradientForBackgroundGradient
        entity = argFoo;
        oscar = entity.angle;
        zulu = entity.colors;
        mike = zulu.map;
        entity = function(argFoo) {
            entity = argFoo;
            zulu = entity.token;
            options = entity.stop;
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 2;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            entity = mike.getColor;
            offset = entity.bind(mike)(zulu);
            entity = global;
            entity = entity.HermesInternal;
            tango = entity.concat;
            yankee = '';
            verify = ' ';
            golf = '%';
            entity = yankee[tango](offset, verify, options, golf, oscar);
            return entity;
        };
        zulu = mike.bind(zulu)(entity);
        mike = zulu.join;
        entity = ', ';
        options = mike.bind(zulu)(entity);
        entity = global;
        entity = entity.HermesInternal;
        tango = entity.concat;
        yankee = 'linear-gradient(';
        verify = 'deg, ';
        golf = ')';
        offset = oscar;
        entity = yankee[tango](offset, verify, options, golf, oscar);
        return entity;
    };
    zulu['getLinearGradientForBackgroundGradient'] = tango;
    tango = function() { // Original name: getMobileThemesPresets
        entity = _closure1_slot3;
        return entity;
    };
    zulu['getMobileThemesPresets'] = tango;
    mike = function(argFoo, argBar) { // Original name: areThemesEqualForGradientThemes
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            entity = oscar === report;
            if(entity) { _fun00004_ip = 87; continue _fun00003 }
 13:
            mike = _closure1_slot2;
            mike = mike.DARK;
            mike = oscar === mike;
            if(!mike) { _fun00004_ip = 47; continue _fun00003 }
 33:
            zulu = _closure1_slot2;
            zulu = zulu.DARKER;
            mike = report === zulu;
 47:
            if(mike) { _fun00004_ip = 84; continue _fun00003 }
 50:
            zulu = _closure1_slot2;
            zulu = zulu.DARKER;
            zulu = oscar === zulu;
            if(!zulu) { _fun00004_ip = 81; continue _fun00003 }
 67:
            tango = _closure1_slot2;
            tango = tango.DARK;
            zulu = report === tango;
 81:
            mike = zulu;
 84:
            entity = mike;
 87:
            return entity;
        }
    };
    zulu['areThemesEqualForGradientThemes'] = mike;
    return entity;
})();