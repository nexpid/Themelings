// app/modules/chat/native/SlowModeIndicator.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
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
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot6 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {'alignItems': 'center', 'flexDirection': 'row'};
    tango['container'] = offset;
    offset = {};
    yankee = 5;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_4;
    offset['marginLeft'] = yankee;
    tango['icon'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot8 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: SlowModeIndicator
        mike = argFoo;
        zulu = mike.channelId;
        var _closure2_slot0 = zulu;
        yankee = mike.hasTypingText;
        var _closure2_slot1 = yankee;
        mike = mike.slowmodeType;
        var _closure2_slot2 = mike;
        mike = _closure1_slot8;
        tango = undefined;
        verify = mike.bind(tango)();
        golf = _closure1_slot0;
        offset = _closure1_slot2;
        mike = 6;
        mike = offset[mike];
        options = golf.bind(tango)(mike);
        oscar = options.useStateFromStores;
        mike = _closure1_slot5;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            tango = _closure1_slot5;
            zulu = tango.getSlowmodeCooldownGuess;
            mike = _closure2_slot0;
            entity = _closure2_slot2;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        options = oscar.bind(options)(zulu, mike);
        var _closure2_slot3 = options;
        oscar = _closure1_slot3;
        zulu = oscar.useMemo;
        mike = new Array(2);
        mike[0] = yankee;
        mike[1] = options;
        entity = function() {
            _fun100633: for(var _fun100633_ip = 0; ; ) switch(_fun100633_ip) {
 0:
                offset = _closure1_slot1;
                options = _closure1_slot2;
                entity = 7;
                entity = options[entity];
                yankee = undefined;
                tango = offset.bind(yankee)(entity);
                mike = tango.duration;
                verify = _closure2_slot3;
                tango = mike.bind(tango)(verify);
                mike = tango.minutes;
                oscar = mike.bind(tango)();
                mike = global;
                report = mike.HermesInternal;
                report = report.concat;
                golf = '';
                oscar = report.bind(golf)(oscar);
                report = oscar.padStart;
                backup = 2;
                foxtrot = '0';
                oscar = report.bind(oscar)(backup, foxtrot);
                report = tango.seconds;
                romeo = report.bind(tango)();
                report = mike.HermesInternal;
                report = report.concat;
                romeo = report.bind(golf)(romeo);
                report = romeo.padStart;
                report = report.bind(romeo)(backup, foxtrot);
                romeo = 8;
                options = options[romeo];
                options = offset.bind(yankee)(options);
                options = options.Millis;
                options = options.HOUR;
                if(!(!(verify >= options))) { _fun100633_ip = 335; continue _fun100633 }
 164:
                verify = _closure2_slot3;
                offset = _closure1_slot1;
                options = _closure1_slot2;
                options = options[romeo];
                options = offset.bind(yankee)(options);
                options = options.Millis;
                options = options.MINUTE;
                if(!(!(verify >= options))) { _fun100633_ip = 301; continue _fun100633 }
 201:
                verify = _closure2_slot3;
                options = 0;
                if(!(!(verify > options))) { _fun100633_ip = 277; continue _fun100633 }
 211:
                options = _closure2_slot1;
                entity = null;
                if(options) { _fun100633_ip = 275; continue _fun100633 }
 220:
                offset = _closure1_slot0;
                romeo = _closure1_slot2;
                zulu = 9;
                options = romeo[zulu];
                options = offset.bind(yankee)(options);
                verify = options.intl;
                options = verify.string;
                zulu = romeo[zulu];
                zulu = offset.bind(yankee)(zulu);
                zulu = zulu.t;
                zulu = zulu.Icu3bW;
                entity = options.bind(verify)(zulu);
 275:
                _fun100633_ip = 299; continue _fun100633;
 277:
                zulu = mike.HermesInternal;
                options = zulu.concat;
                zulu = '0:';
                entity = options.bind(zulu)(report);
 299:
                _fun100633_ip = 333; continue _fun100633;
 301:
                zulu = tango.minutes;
                verify = zulu.bind(tango)();
                zulu = mike.HermesInternal;
                options = zulu.concat;
                zulu = ':';
                entity = options.bind(golf)(verify, zulu, report);
 333:
                _fun100633_ip = 379; continue _fun100633;
 335:
                zulu = tango.hours;
                echo = zulu.bind(tango)();
                mike = mike.HermesInternal;
                zulu = mike.concat;
                mike = ':';
                update = golf;
                result = mike;
                output = oscar;
                sizing = mike;
                kilo = report;
                entity = update[zulu](echo, result, output, sizing, kilo, backup);
 379:
                return entity;
            }
        };
        yankee = zulu.bind(oscar)(entity, mike);
        zulu = _closure1_slot7;
        mike = _closure1_slot4;
        entity = {};
        oscar = verify.container;
        entity['style'] = oscar;
        options = _closure1_slot6;
        report = 10;
        report = offset[report];
        report = golf.bind(tango)(report);
        oscar = report.Text;
        report = {'lineClamp': 1, 'allowFontScaling': false, 'variant': 'text-xs/medium', 'color': 'interactive-normal'};
        report['children'] = yankee;
        oscar = options.bind(tango)(oscar, report);
        report = new Array(2);
        report[0] = oscar;
        oscar = 11;
        oscar = offset[oscar];
        oscar = golf.bind(tango)(oscar);
        golf = oscar.TimerIcon;
        oscar = {};
        verify = verify.icon;
        oscar['style'] = verify;
        verify = 'xxs';
        oscar['size'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[1] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike = tango.bind(golf)(mike);
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/chat/native/SlowModeIndicator.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();