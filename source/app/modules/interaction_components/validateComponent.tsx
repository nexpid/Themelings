// app/modules/interaction_components/validateComponent.tsx
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
    entity = 3;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/interaction_components/validateComponent.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: validateComponent
        _fun71793: for(var _fun71793_ip = 0; ; ) switch(_fun71793_ip) {
 0:
            mike = argFoo;
            zulu = argBar;
            entity = null;
            if(!(entity != zulu)) { _fun71793_ip = 63; continue _fun71793 }
 12:
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            tango = 2;
            tango = oscar[tango];
            golf = undefined;
            oscar = report.bind(golf)(tango);
            report = zulu.type;
            tango = mike.type;
            report = report === tango;
            tango = 'component type matches state';
            tango = oscar.bind(golf)(report, tango);
 63:
            oscar = mike.type;
            options = _closure1_slot0;
            report = _closure1_slot2;
            golf = 1;
            report = report[golf];
            verify = undefined;
            report = options.bind(verify)(report);
            report = report.ComponentType;
            report = report.BUTTON;
            if(!(report !== oscar)) { _fun71793_ip = 1039; continue _fun71793 }
 112:
            options = _closure1_slot0;
            report = _closure1_slot2;
            report = report[golf];
            report = options.bind(verify)(report);
            report = report.ComponentType;
            report = report.STRING_SELECT;
            if(!(report !== oscar)) { _fun71793_ip = 572; continue _fun71793 }
 148:
            options = _closure1_slot0;
            report = _closure1_slot2;
            report = report[golf];
            report = options.bind(verify)(report);
            report = report.ComponentType;
            report = report.USER_SELECT;
            if(!(report !== oscar)) { _fun71793_ip = 572; continue _fun71793 }
 184:
            options = _closure1_slot0;
            report = _closure1_slot2;
            report = report[golf];
            report = options.bind(verify)(report);
            report = report.ComponentType;
            report = report.ROLE_SELECT;
            if(!(report !== oscar)) { _fun71793_ip = 572; continue _fun71793 }
 220:
            options = _closure1_slot0;
            report = _closure1_slot2;
            report = report[golf];
            report = options.bind(verify)(report);
            report = report.ComponentType;
            report = report.MENTIONABLE_SELECT;
            if(!(report !== oscar)) { _fun71793_ip = 572; continue _fun71793 }
 256:
            options = _closure1_slot0;
            report = _closure1_slot2;
            report = report[golf];
            report = options.bind(verify)(report);
            report = report.ComponentType;
            report = report.CHANNEL_SELECT;
            if(!(report !== oscar)) { _fun71793_ip = 572; continue _fun71793 }
 292:
            options = _closure1_slot0;
            report = _closure1_slot2;
            report = report[golf];
            report = options.bind(verify)(report);
            report = report.ComponentType;
            report = report.TEXT_INPUT;
            if(!(report !== oscar)) { _fun71793_ip = 361; continue _fun71793 }
 325:
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            report = 2;
            report = options[report];
            options = oscar.bind(verify)(report);
            oscar = false;
            report = 'missing validator for this component';
            report = options.bind(verify)(oscar, report);
            return verify;
 361:
            backup = mike.minLength;
            foxtrot = mike.maxLength;
            options = mike.required;
            if(!(entity != zulu)) { _fun71793_ip = 497; continue _fun71793 }
 383:
            report = zulu.value;
            report = report.length;
            kilo = 0;
            if(!(kilo !== report)) { _fun71793_ip = 497; continue _fun71793 }
 399:
            report = zulu.value;
            report = report.length;
            if(!(!(report < backup))) { _fun71793_ip = 432; continue _fun71793 }
 413:
            report = zulu.value;
            report = report.length;
            oscar = report > foxtrot;
            report = null;
            if(!oscar) { _fun71793_ip = 495; continue _fun71793 }
 432:
            offset = _closure1_slot0;
            oscar = _closure1_slot2;
            yankee = oscar[kilo];
            yankee = offset.bind(verify)(yankee);
            romeo = yankee.intl;
            yankee = romeo.formatToPlainString;
            oscar = oscar[kilo];
            oscar = offset.bind(verify)(oscar);
            oscar = oscar.t;
            offset = oscar.ONSqYW;
            oscar = {};
            oscar['min'] = backup;
            oscar['max'] = foxtrot;
            report = yankee.bind(romeo)(offset, oscar);
 495:
            _fun71793_ip = 570; continue _fun71793;
 497:
            oscar = null;
            if(!options) { _fun71793_ip = 567; continue _fun71793 }
 502:
            offset = _closure1_slot0;
            kilo = _closure1_slot2;
            options = 0;
            yankee = kilo[options];
            yankee = offset.bind(verify)(yankee);
            romeo = yankee.intl;
            yankee = romeo.formatToPlainString;
            options = kilo[options];
            options = offset.bind(verify)(options);
            options = options.t;
            offset = options.ONSqYW;
            options = {};
            options['min'] = backup;
            options['max'] = foxtrot;
            oscar = yankee.bind(romeo)(offset, options);
 567:
            report = oscar;
 570:
            return report;
 572:
            options = mike.minValues;
            offset = mike.maxValues;
            if(!(entity != zulu)) { _fun71793_ip = 967; continue _fun71793 }
 591:
            report = zulu.type;
            oscar = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[golf];
            mike = oscar.bind(verify)(mike);
            mike = mike.ComponentType;
            mike = mike.STRING_SELECT;
            if(!(report !== mike)) { _fun71793_ip = 802; continue _fun71793 }
 632:
            mike = zulu.selectedOptions;
            mike = mike.length;
            if(!(!(mike < options))) { _fun71793_ip = 736; continue _fun71793 }
 647:
            mike = zulu.selectedOptions;
            mike = mike.length;
            report = mike > offset;
            mike = null;
            if(!report) { _fun71793_ip = 1037; continue _fun71793 }
 670:
            oscar = _closure1_slot0;
            romeo = _closure1_slot2;
            report = 0;
            golf = romeo[report];
            golf = oscar.bind(verify)(golf);
            yankee = golf.intl;
            golf = yankee.formatToPlainString;
            report = romeo[report];
            report = oscar.bind(verify)(report);
            report = report.t;
            oscar = report.LDvfRE;
            report = {};
            report['count'] = offset;
            mike = golf.bind(yankee)(oscar, report);
            _fun71793_ip = 1037; continue _fun71793;
 736:
            oscar = _closure1_slot0;
            romeo = _closure1_slot2;
            report = 0;
            golf = romeo[report];
            golf = oscar.bind(verify)(golf);
            yankee = golf.intl;
            golf = yankee.formatToPlainString;
            report = romeo[report];
            report = oscar.bind(verify)(report);
            report = report.t;
            oscar = report.Jmwzd3;
            report = {};
            report['count'] = options;
            mike = golf.bind(yankee)(oscar, report);
            _fun71793_ip = 1037; continue _fun71793;
 802:
            report = zulu.values;
            report = report.length;
            if(!(!(report < options))) { _fun71793_ip = 904; continue _fun71793 }
 816:
            zulu = zulu.values;
            zulu = zulu.length;
            zulu = zulu > offset;
            mike = null;
            if(!zulu) { _fun71793_ip = 1037; continue _fun71793 }
 838:
            report = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 0;
            oscar = yankee[zulu];
            oscar = report.bind(verify)(oscar);
            golf = oscar.intl;
            oscar = golf.formatToPlainString;
            zulu = yankee[zulu];
            zulu = report.bind(verify)(zulu);
            zulu = zulu.t;
            report = zulu.LDvfRE;
            zulu = {};
            zulu['count'] = offset;
            mike = oscar.bind(golf)(report, zulu);
            _fun71793_ip = 1037; continue _fun71793;
 904:
            report = _closure1_slot0;
            offset = _closure1_slot2;
            zulu = 0;
            oscar = offset[zulu];
            oscar = report.bind(verify)(oscar);
            golf = oscar.intl;
            oscar = golf.formatToPlainString;
            zulu = offset[zulu];
            zulu = report.bind(verify)(zulu);
            zulu = zulu.t;
            report = zulu.Jmwzd3;
            zulu = {};
            zulu['count'] = options;
            mike = oscar.bind(golf)(report, zulu);
            _fun71793_ip = 1037; continue _fun71793;
 967:
            offset = 0;
            zulu = null;
            if(!(offset !== options)) { _fun71793_ip = 1034; continue _fun71793 }
 975:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            oscar = tango[offset];
            oscar = report.bind(verify)(oscar);
            golf = oscar.intl;
            oscar = golf.formatToPlainString;
            tango = tango[offset];
            tango = report.bind(verify)(tango);
            tango = tango.t;
            report = tango.Jmwzd3;
            tango = {};
            tango['count'] = options;
            zulu = oscar.bind(golf)(report, tango);
 1034:
            mike = zulu;
 1037:
            return mike;
 1039:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();