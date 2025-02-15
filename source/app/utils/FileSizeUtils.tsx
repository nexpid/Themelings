// app/utils/FileSizeUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    tango = function(argFoo) { // Original name: formatSize
        _fun55442: for(var _fun55442_ip = 0; ; ) switch(_fun55442_ip) {
 0:
            entity = arguments[1];
            golf = undefined;
            if(!(entity === golf)) { _fun55442_ip = 16; continue _fun55442 }
 9:
            entity = _closure1_slot4;
 16:
            zulu = entity.useKibibytes;
            mike = 1000;
            options = mike;
            if(!zulu) { _fun55442_ip = 41; continue _fun55442 }
 34:
            options = _closure1_slot2;
 41:
            zulu = entity.useKibibytes;
            if(!zulu) { _fun55442_ip = 57; continue _fun55442 }
 50:
            mike = _closure1_slot3;
 57:
            tango = global;
            oscar = tango.Math;
            report = oscar.ceil;
            zulu = argFoo;
            zulu = zulu / options;
            oscar = report.bind(oscar)(zulu);
            if(!(!(oscar < mike))) { _fun55442_ip = 232; continue _fun55442 }
 90:
            mike = oscar / mike;
            zulu = entity.showDecimalForGB;
            report = tango.Math;
            tango = report.round;
            if(zulu) { _fun55442_ip = 121; continue _fun55442 }
 114:
            verify = tango.bind(report)(mike);
            _fun55442_ip = 137; continue _fun55442;
 121:
            zulu = 10;
            mike = zulu * mike;
            mike = tango.bind(report)(mike);
            verify = mike / zulu;
 137:
            mike = entity.useSpace;
            tango = _closure1_slot0;
            offset = _closure1_slot1;
            zulu = 0;
            report = offset[zulu];
            report = tango.bind(golf)(report);
            options = report.intl;
            report = options.formatToPlainString;
            zulu = offset[zulu];
            zulu = tango.bind(golf)(zulu);
            zulu = zulu.t;
            if(mike) { _fun55442_ip = 212; continue _fun55442 }
 192:
            tango = zulu.TbMX9P;
            mike = {};
            mike['size'] = verify;
            mike = report.bind(options)(tango, mike);
            _fun55442_ip = 230; continue _fun55442;
 212:
            tango = zulu.yhEXX1;
            zulu = {};
            zulu['size'] = verify;
            mike = report.bind(options)(tango, zulu);
 230:
            return mike;
 232:
            entity = entity.useSpace;
            zulu = _closure1_slot0;
            options = _closure1_slot1;
            mike = 0;
            tango = options[mike];
            tango = zulu.bind(golf)(tango);
            report = tango.intl;
            tango = report.formatToPlainString;
            mike = options[mike];
            mike = zulu.bind(golf)(mike);
            mike = mike.t;
            if(entity) { _fun55442_ip = 307; continue _fun55442 }
 287:
            zulu = mike.pIn7AQ;
            entity = {};
            entity['size'] = oscar;
            entity = tango.bind(report)(zulu, entity);
            _fun55442_ip = 325; continue _fun55442;
 307:
            zulu = mike.cS889P;
            mike = {};
            mike['size'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 325:
            return entity;
        }
    };
    var _closure1_slot5 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    report = 1024;
    var _closure1_slot2 = report;
    var _closure1_slot3 = report;
    entity = {'useKibibytes': false, 'showDecimalForGB': true, 'useSpace': true};
    var _closure1_slot4 = entity;
    entity = 1;
    oscar = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'utils/FileSizeUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['BYTE_IN_KB'] = report;
    zulu['KB_IN_MB'] = report;
    zulu['formatSize'] = tango;
    mike = function(argFoo) { // Original name: formatKbSize
        _fun55443: for(var _fun55443_ip = 0; ; ) switch(_fun55443_ip) {
 0:
            report = arguments[1];
            tango = undefined;
            if(!(report === tango)) { _fun55443_ip = 16; continue _fun55443 }
 9:
            report = _closure1_slot4;
 16:
            mike = report.useKibibytes;
            entity = 1000;
            zulu = entity;
            if(!mike) { _fun55443_ip = 40; continue _fun55443 }
 34:
            zulu = 1024;
 40:
            mike = argFoo;
            zulu = mike / zulu;
            mike = report.useKibibytes;
            if(!mike) { _fun55443_ip = 63; continue _fun55443 }
 56:
            entity = _closure1_slot2;
 63:
            mike = zulu / entity;
            entity = 1;
            if(!(!(mike >= entity))) { _fun55443_ip = 210; continue _fun55443 }
 77:
            entity = report.useSpace;
            oscar = _closure1_slot0;
            verify = _closure1_slot1;
            mike = 0;
            golf = verify[mike];
            golf = oscar.bind(tango)(golf);
            options = golf.intl;
            golf = options.formatToPlainString;
            mike = verify[mike];
            mike = oscar.bind(tango)(mike);
            mike = mike.t;
            if(entity) { _fun55443_ip = 171; continue _fun55443 }
 132:
            oscar = mike.kEk9pq;
            entity = {};
            verify = global;
            offset = verify.Math;
            verify = offset.ceil;
            verify = verify.bind(offset)(zulu);
            entity['size'] = verify;
            entity = golf.bind(options)(oscar, entity);
            _fun55443_ip = 208; continue _fun55443;
 171:
            oscar = mike.bTzRR0;
            mike = {};
            verify = global;
            offset = verify.Math;
            verify = offset.ceil;
            verify = verify.bind(offset)(zulu);
            mike['size'] = verify;
            entity = golf.bind(options)(oscar, mike);
 208:
            _fun55443_ip = 223; continue _fun55443;
 210:
            mike = _closure1_slot5;
            entity = mike.bind(tango)(zulu, report);
 223:
            return entity;
        }
    };
    zulu['formatKbSize'] = mike;
    return entity;
})();