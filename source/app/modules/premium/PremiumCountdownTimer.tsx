// app/modules/premium/PremiumCountdownTimer.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: formatCountdownNumerals
        tango = argFoo;
        zulu = tango.toLocaleString;
        entity = _closure1_slot3;
        mike = entity.locale;
        entity = {'minimumIntegerDigits': 2, 'useGrouping': false};
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot6 = entity;
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
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.Fragment;
    var _closure1_slot4 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/PremiumCountdownTimer.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: PremiumCountdownTimer
        _fun105101: for(var _fun105101_ip = 0; ; ) switch(_fun105101_ip) {
 0:
            entity = argFoo;
            oscar = entity.endDate;
            mike = global;
            zulu = mike.Date;
            entity = zulu.now;
            tango = entity.bind(zulu)();
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 3;
            entity = report[entity];
            report = undefined;
            zulu = zulu.bind(report)(entity);
            entity = zulu.diffAsUnits;
            entity = entity.bind(zulu)(tango, oscar);
            zulu = oscar.getTime;
            zulu = zulu.bind(oscar)();
            tango = tango > zulu;
            entity = entity.days;
            options = 0;
            entity = entity > options;
            zulu = 1000;
            if(!entity) { _fun105101_ip = 104; continue _fun105101 }
 98:
            zulu = 3600000;
 104:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 4;
            entity = offset[entity];
            entity = verify.bind(report)(entity);
            result = undefined;
            output = oscar;
            sizing = zulu;
            kilo = undefined;
            backup = tango;
            yankee = result[entity](output, sizing, kilo, backup, foxtrot);
            entity = null;
            if(tango) { _fun105101_ip = 404; continue _fun105101 }
 149:
            tango = mike.Object;
            mike = tango.values;
            oscar = mike.bind(tango)(yankee);
            tango = oscar.every;
            mike = function(argFoo) {
                mike = 0;
                entity = argFoo;
                entity = mike === entity;
                return entity;
            };
            mike = tango.bind(oscar)(mike);
            entity = null;
            if(mike) { _fun105101_ip = 404; continue _fun105101 }
 193:
            tango = _closure1_slot5;
            zulu = _closure1_slot4;
            mike = {};
            oscar = yankee.days;
            if(!(!(oscar > options))) { _fun105101_ip = 325; continue _fun105101 }
 213:
            options = _closure1_slot0;
            romeo = _closure1_slot2;
            oscar = 5;
            verify = romeo[oscar];
            verify = options.bind(report)(verify);
            offset = verify.intl;
            verify = offset.formatToPlainString;
            oscar = romeo[oscar];
            oscar = options.bind(report)(oscar);
            oscar = oscar.t;
            options = oscar.3MT4MT;
            oscar = {};
            foxtrot = _closure1_slot6;
            romeo = yankee.hours;
            romeo = foxtrot.bind(report)(romeo);
            oscar['hours'] = romeo;
            romeo = yankee.minutes;
            romeo = foxtrot.bind(report)(romeo);
            oscar['minutes'] = romeo;
            romeo = yankee.seconds;
            romeo = foxtrot.bind(report)(romeo);
            oscar['seconds'] = romeo;
            oscar = verify.bind(offset)(options, oscar);
            _fun105101_ip = 394; continue _fun105101;
 325:
            options = _closure1_slot0;
            romeo = _closure1_slot2;
            golf = 5;
            verify = romeo[golf];
            verify = options.bind(report)(verify);
            offset = verify.intl;
            verify = offset.formatToPlainString;
            golf = romeo[golf];
            golf = options.bind(report)(golf);
            golf = golf.t;
            options = golf.f0QaSU;
            golf = {};
            yankee = yankee.days;
            golf['days'] = yankee;
            oscar = verify.bind(offset)(options, golf);
 394:
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 404:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();