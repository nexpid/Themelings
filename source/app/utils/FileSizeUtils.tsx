// app/utils/FileSizeUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    tango = function(argFoo) { // Original name: formatSize
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = arguments[1];
            golf = undefined;
            if(!(entity === golf)) { _fun00002_ip = 16; continue _fun00001 }
 9:
            entity = _closure1_slot4;
 16:
            zulu = entity.useKibibytes;
            mike = 1000;
            options = mike;
            if(!zulu) { _fun00002_ip = 41; continue _fun00001 }
 34:
            options = _closure1_slot2;
 41:
            zulu = entity.useKibibytes;
            if(!zulu) { _fun00002_ip = 57; continue _fun00001 }
 50:
            mike = _closure1_slot3;
 57:
            tango = global;
            oscar = tango.Math;
            report = oscar.ceil;
            zulu = argFoo;
            zulu = zulu / options;
            oscar = report.bind(oscar)(zulu);
            if(!(!(oscar < mike))) { _fun00002_ip = 236; continue _fun00001 }
 90:
            mike = oscar / mike;
            zulu = entity.showDecimalForGB;
            report = tango.Math;
            tango = report.round;
            if(zulu) { _fun00002_ip = 121; continue _fun00001 }
 114:
            verify = tango.bind(report)(mike);
            _fun00002_ip = 137; continue _fun00001;
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
            if(mike) { _fun00002_ip = 214; continue _fun00001 }
 192:
            tango = zulu.TbMX9P;
            mike = {};
            mike['size'] = verify;
            mike = report.bind(options)(tango, mike);
            _fun00002_ip = 234; continue _fun00001;
 214:
            tango = zulu.yhEXX1;
            zulu = {};
            zulu['size'] = verify;
            mike = report.bind(options)(tango, zulu);
 234:
            return mike;
 236:
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
            if(entity) { _fun00002_ip = 311; continue _fun00001 }
 291:
            zulu = mike.pIn7AQ;
            entity = {};
            entity['size'] = oscar;
            entity = tango.bind(report)(zulu, entity);
            _fun00002_ip = 331; continue _fun00001;
 311:
            zulu = mike.cS889P;
            mike = {};
            mike['size'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 331:
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
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = arguments[1];
            tango = undefined;
            if(!(report === tango)) { _fun00004_ip = 16; continue _fun00003 }
 9:
            report = _closure1_slot4;
 16:
            mike = report.useKibibytes;
            entity = 1000;
            zulu = entity;
            if(!mike) { _fun00004_ip = 40; continue _fun00003 }
 34:
            zulu = 1024;
 40:
            mike = argFoo;
            zulu = mike / zulu;
            mike = report.useKibibytes;
            if(!mike) { _fun00004_ip = 63; continue _fun00003 }
 56:
            entity = _closure1_slot2;
 63:
            mike = zulu / entity;
            entity = 1;
            if(!(!(mike >= entity))) { _fun00004_ip = 214; continue _fun00003 }
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
            if(entity) { _fun00004_ip = 173; continue _fun00003 }
 132:
            oscar = mike.kEk9pq;
            entity = {};
            verify = global;
            offset = verify.Math;
            verify = offset.ceil;
            verify = verify.bind(offset)(zulu);
            entity['size'] = verify;
            entity = golf.bind(options)(oscar, entity);
            _fun00004_ip = 212; continue _fun00003;
 173:
            oscar = mike.bTzRR0;
            mike = {};
            verify = global;
            offset = verify.Math;
            verify = offset.ceil;
            verify = verify.bind(offset)(zulu);
            mike['size'] = verify;
            entity = golf.bind(options)(oscar, mike);
 212:
            _fun00004_ip = 227; continue _fun00003;
 214:
            mike = _closure1_slot5;
            entity = mike.bind(tango)(zulu, report);
 227:
            return entity;
        }
    };
    zulu['formatKbSize'] = mike;
    return entity;
})();