// app/modules/bug_reporter/native/BugReportUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun87086: for(var _fun87086_ip = 0; ; ) switch(_fun87086_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun87086_ip = 46; continue _fun87086 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun87086_ip = 55; continue _fun87086 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun87086_ip = 345; continue _fun87086 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun87086_ip = 323; continue _fun87086 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun87086_ip = 283; continue _fun87086 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun87086_ip = 270; continue _fun87086 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun87086_ip = 163; continue _fun87086 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun87086_ip = 179; continue _fun87086 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun87086_ip = 249; continue _fun87086 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun87086_ip = 249; continue _fun87086 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun87086_ip = 234; continue _fun87086 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun87086_ip = 247; continue _fun87086 }
 234:
            verify = _closure1_slot4;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun87086_ip = 265; continue _fun87086;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun87086_ip = 283; continue _fun87086;
 270:
            golf = _closure1_slot4;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun87086_ip = 323; continue _fun87086 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun87086_ip = 330; continue _fun87086 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun87087: for(var _fun87087_ip = 0; ; ) switch(_fun87087_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun87087_ip = 56; continue _fun87087 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun87087_ip = 67; continue _fun87087;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun87088: for(var _fun87088_ip = 0; ; ) switch(_fun87088_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun87088_ip = 23; continue _fun87088 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun87088_ip = 33; continue _fun87088 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun87088_ip = 70; continue _fun87088 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun87088_ip = 55; continue _fun87088 }
 70:
            return entity;
        }
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
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    mike = function() {
        tango = _closure1_slot2;
        zulu = undefined;
        mike = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun87091: for(var _fun87091_ip = 0; ; ) switch(_fun87091_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun87091_ip = 202; continue _fun87091 }
 10:
                    zulu = undefined;
                    verify = undefined;
                    offset = undefined;
                    yankee = undefined;
                    romeo = undefined;
                    mike = new Array(0);
                    report = _closure1_slot3;
                    tango = argFoo;
                    tango = report.bind(zulu)(tango);
                    offset = tango;
                    tango = tango.bind(zulu)();
                    verify = tango;
                    tango = tango.done;
                    golf = 1;
                    oscar = 2;
                    if(tango) { _fun87091_ip = 199; continue _fun87091 }
 66:
                    tango = verify;
                    yankee = tango.value;
 74: // try_start_0
                    report = _closure1_slot0;
                    tango = _closure1_slot1;
                    foxtrot = tango[golf];
                    backup = report.bind(zulu)(foxtrot);
                    foxtrot = backup.v4;
                    romeo = foxtrot.bind(backup)();
                    tango = tango[oscar];
                    foxtrot = report.bind(zulu)(tango);
                    report = foxtrot.getFileInfo;
                    tango = yankee;
                    tango = report.bind(foxtrot)(tango);
                    SaveGenerator(address=128);
 126:
                    return tango;
 128:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun87091_ip = 191; continue _fun87091 }
 134:
                    backup = mike;
                    foxtrot = backup.push;
                    report = {};
                    report['file'] = tango;
                    kilo = romeo;
                    report['name'] = kilo;
                    kilo = tango.name;
                    report['filename'] = kilo;
                    report = foxtrot.bind(backup)(report);
 171: // try_end0
                    report = offset;
                    report = report.bind(zulu)();
                    verify = report;
                    report = report.done;
                    if(report) { _fun87091_ip = 199; continue _fun87091 }
 189:
                    _fun87091_ip = 66; continue _fun87091;
 191:
                    return tango;
 194: // catch_target0
                    CatchBlockStart(arg_register=3);
                    return zulu;
 199:
                    return mike;
 202:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/bug_reporter/native/BugReportUtils.tsx';
    tango = report.bind(oscar)(tango);
    zulu['getAttachments'] = mike;
    return entity;
})();