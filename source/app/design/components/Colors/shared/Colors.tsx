// app/design/components/Colors/shared/Colors.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo) { // Original name: toRGBAString
        mike = argFoo;
        entity = mike.rgba;
        tango = entity.bind(mike)();
        zulu = _closure1_slot2;
        mike = undefined;
        entity = 4;
        mike = zulu.bind(mike)(tango, entity);
        entity = 0;
        sizing = mike[entity];
        entity = 1;
        backup = mike[entity];
        entity = 2;
        romeo = mike[entity];
        entity = 3;
        offset = mike[entity];
        entity = global;
        entity = entity.HermesInternal;
        tango = entity.concat;
        output = 'rgba(';
        mike = ', ';
        verify = ')';
        kilo = mike;
        foxtrot = mike;
        yankee = mike;
        entity = output[tango](sizing, kilo, backup, foxtrot, romeo, yankee, offset, verify, options);
        return entity;
    };
    var _closure1_slot4 = entity;
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
    var _closure1_slot2 = tango;
    tango = {'NonText': 3, 'Text': 4.5, 'HighContrastText': 7};
    var _closure1_slot3 = tango;
    report = 2;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'design/components/Colors/shared/Colors.tsx';
    report = oscar.bind(golf)(report);
    zulu['WCAGContrastRatios'] = tango;
    tango = function(argFoo) { // Original name: getContrastingColor
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            mike = arguments[1];
            zulu = undefined;
            if(!(mike === zulu)) { _fun00002_ip = 14; continue _fun00001 }
 12:
            mike = {};
 14:
            foxtrot = mike.contrastRatio;
            golf = null;
            if(!(golf == foxtrot)) { _fun00002_ip = 39; continue _fun00001 }
 26:
            entity = _closure1_slot3;
            foxtrot = entity.NonText;
 39:
            entity = mike.tolerance;
            tango = golf != entity;
            romeo = 3;
            if(!tango) { _fun00002_ip = 58; continue _fun00001 }
 55:
            romeo = entity;
 58:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            yankee = 1;
            tango = tango[yankee];
            tango = report.bind(zulu)(tango);
            report = mike.base;
            mike = oscar;
            if(!(golf != report)) { _fun00002_ip = 97; continue _fun00001 }
 94:
            mike = report;
 97:
            offset = tango.bind(zulu)(mike);
            report = _closure1_slot0;
            mike = _closure1_slot1;
            tango = mike[yankee];
            tango = report.bind(zulu)(tango);
            tango = tango.bind(zulu)(oscar);
            oscar = offset.luminance;
            verify = oscar.bind(offset)();
            mike = mike[yankee];
            report = report.bind(zulu)(mike);
            mike = report.contrast;
            report = mike.bind(report)(offset, tango);
            options = 99;
            golf = 0;
            oscar = tango;
 163:
            backup = report < foxtrot;
            mike = foxtrot + romeo;
            kilo = report > mike;
            if(backup) { _fun00002_ip = 184; continue _fun00001 }
 178:
            mike = oscar;
            if(!kilo) { _fun00002_ip = 277; continue _fun00001 }
 184:
            tango = oscar.luminance;
            tango = tango.bind(oscar)();
            tango = tango > verify;
            if(!kilo) { _fun00002_ip = 204; continue _fun00001 }
 201:
            if(tango) { _fun00002_ip = 222; continue _fun00001 }
 204:
            if(!backup) { _fun00002_ip = 210; continue _fun00001 }
 207:
            if(!tango) { _fun00002_ip = 222; continue _fun00001 }
 210:
            tango = oscar.brighten;
            backup = tango.bind(oscar)();
            _fun00002_ip = 232; continue _fun00001;
 222:
            tango = oscar.darken;
            backup = tango.bind(oscar)();
 232:
            kilo = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[yankee];
            kilo = kilo.bind(zulu)(tango);
            tango = kilo.contrast;
            report = tango.bind(kilo)(offset, backup);
            tango = parseFloat(options);
            options = tango - 1;
            oscar = backup;
            mike = oscar;
            if(tango > golf) { _fun00002_ip = 163; continue _fun00001 }
 277:
            entity = _closure1_slot4;
            entity = entity.bind(zulu)(mike);
            return entity;
        }
    };
    zulu['getContrastingColor'] = tango;
    tango = function(argFoo, argBar) { // Original name: darkenColor
        zulu = _closure1_slot4;
        tango = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 1;
        entity = mike[entity];
        mike = undefined;
        tango = tango.bind(mike)(entity);
        entity = argFoo;
        report = tango.bind(mike)(entity);
        tango = report.darken;
        entity = argBar;
        entity = tango.bind(report)(entity);
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['darkenColor'] = tango;
    tango = function(argFoo, argBar) { // Original name: brightenColor
        zulu = _closure1_slot4;
        tango = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 1;
        entity = mike[entity];
        mike = undefined;
        tango = tango.bind(mike)(entity);
        entity = argFoo;
        report = tango.bind(mike)(entity);
        tango = report.brighten;
        entity = argBar;
        entity = tango.bind(report)(entity);
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['brightenColor'] = tango;
    mike = function(argFoo, argBar) { // Original name: setColorOpacity
        zulu = _closure1_slot4;
        tango = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 1;
        entity = mike[entity];
        mike = undefined;
        tango = tango.bind(mike)(entity);
        entity = argFoo;
        report = tango.bind(mike)(entity);
        tango = report.alpha;
        entity = argBar;
        entity = tango.bind(report)(entity);
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['setColorOpacity'] = mike;
    return entity;
})();