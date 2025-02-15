// app/modules/message_previews/RemoteFetchData.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
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
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot5;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot5;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
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
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
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
                    _fun00004_ip = 67; continue _fun00003;
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
    var _closure1_slot4 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    options = 0;
    tango = oscar[options];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot0 = tango;
    golf = 1;
    tango = oscar[golf];
    tango = report.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = {};
    tango['Pending'] = options;
    report = 'Pending';
    tango[options] = report;
    tango['Fetching'] = golf;
    report = 'Fetching';
    tango[golf] = report;
    var _closure1_slot3 = tango;
    mike = function() {
        tango = _closure1_slot2;
        zulu = function() { // Original name: RemoteFetchData
            zulu = this;
            tango = _closure1_slot1;
            mike = _closure2_slot1;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = global;
            tango = mike.Set;
            report = tango.prototype;
            report = Object.create(report, {constructor: {value: tango}});
            options = report;
            tango = new options[tango](golf);
            tango = tango instanceof Object ? tango : report;
            zulu['pending'] = tango;
            mike = mike.Set;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            options = tango;
            mike = new options[mike](golf);
            mike = mike instanceof Object ? mike : tango;
            zulu['fetching'] = mike;
            return entity;
        };
        var _closure2_slot1 = zulu;
        report = {};
        mike = 'empty';
        report['key'] = mike;
        mike = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                mike = this;
                entity = mike.pending;
                entity = entity.size;
                zulu = 0;
                entity = zulu === entity;
                if(!entity) { _fun00008_ip = 38; continue _fun00007 }
 23:
                mike = mike.fetching;
                mike = mike.size;
                entity = zulu === mike;
 38:
                return entity;
            }
        };
        report['value'] = mike;
        mike = new Array(9);
        mike[0] = report;
        report = {};
        golf = 'status';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zulu = argFoo;
                entity = this;
                tango = entity.pending;
                mike = tango.has;
                mike = mike.bind(tango)(zulu);
                if(mike) { _fun00010_ip = 61; continue _fun00009 }
 25:
                mike = entity.fetching;
                entity = mike.has;
                mike = entity.bind(mike)(zulu);
                entity = null;
                if(!mike) { _fun00010_ip = 59; continue _fun00009 }
 46:
                mike = _closure1_slot3;
                entity = mike.Fetching;
 59:
                _fun00010_ip = 74; continue _fun00009;
 61:
                mike = _closure1_slot3;
                entity = mike.Pending;
 74:
                return entity;
            }
        };
        report['value'] = golf;
        mike[1] = report;
        report = {};
        golf = 'addWant';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zulu = argFoo;
                entity = this;
                tango = entity.fetching;
                mike = tango.has;
                mike = mike.bind(tango)(zulu);
                if(mike) { _fun00012_ip = 41; continue _fun00011 }
 25:
                mike = entity.pending;
                entity = mike.add;
                entity = entity.bind(mike)(zulu);
 41:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        mike[2] = report;
        report = {};
        golf = 'removeWant';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = argFoo;
            entity = this;
            tango = entity.pending;
            mike = tango.delete;
            mike = mike.bind(tango)(zulu);
            mike = entity.fetching;
            entity = mike.delete;
            entity = entity.bind(mike)(zulu);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        mike[3] = report;
        report = {};
        golf = 'nextWants';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = this;
            golf = entity.pending;
            entity = new Array(0);
            oscar = 0;
            options = entity;
            mike = arraySpread(options, golf, oscar);
            mike = global;
            report = mike.Math;
            tango = report.min;
            zulu = entity.length;
            mike = argFoo;
            mike = tango.bind(report)(mike, zulu);
            entity['length'] = mike;
            return entity;
        };
        report['value'] = golf;
        mike[4] = report;
        report = {};
        golf = 'markFetching';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = this;
                zulu = _closure1_slot4;
                entity = undefined;
                mike = argFoo;
                tango = zulu.bind(entity)(mike);
                zulu = tango.bind(entity)();
                mike = zulu.done;
                if(mike) { _fun00014_ip = 84; continue _fun00013 }
 32:
                golf = zulu.value;
                oscar = report.pending;
                mike = oscar.delete;
                mike = mike.bind(oscar)(golf);
                oscar = report.fetching;
                mike = oscar.add;
                mike = mike.bind(oscar)(golf);
                oscar = tango.bind(entity)();
                mike = oscar.done;
                zulu = oscar;
                if(!mike) { _fun00014_ip = 32; continue _fun00013 }
 84:
                return entity;
            }
        };
        report['value'] = golf;
        mike[5] = report;
        report = {};
        golf = 'markCompleted';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                report = this;
                zulu = _closure1_slot4;
                entity = undefined;
                mike = argFoo;
                tango = zulu.bind(entity)(mike);
                zulu = tango.bind(entity)();
                mike = zulu.done;
                if(mike) { _fun00016_ip = 84; continue _fun00015 }
 32:
                golf = zulu.value;
                oscar = report.pending;
                mike = oscar.delete;
                mike = mike.bind(oscar)(golf);
                oscar = report.fetching;
                mike = oscar.delete;
                mike = mike.bind(oscar)(golf);
                oscar = tango.bind(entity)();
                mike = oscar.done;
                zulu = oscar;
                if(!mike) { _fun00016_ip = 32; continue _fun00015 }
 84:
                return entity;
            }
        };
        report['value'] = golf;
        mike[6] = report;
        report = {};
        golf = 'markFailed';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                report = this;
                zulu = _closure1_slot4;
                entity = undefined;
                mike = argFoo;
                tango = zulu.bind(entity)(mike);
                zulu = tango.bind(entity)();
                mike = zulu.done;
                if(mike) { _fun00018_ip = 84; continue _fun00017 }
 32:
                golf = zulu.value;
                oscar = report.pending;
                mike = oscar.add;
                mike = mike.bind(oscar)(golf);
                oscar = report.fetching;
                mike = oscar.delete;
                mike = mike.bind(oscar)(golf);
                oscar = tango.bind(entity)();
                mike = oscar.done;
                zulu = oscar;
                if(!mike) { _fun00018_ip = 32; continue _fun00017 }
 84:
                return entity;
            }
        };
        report['value'] = golf;
        mike[7] = report;
        report = {};
        golf = 'try';
        report['key'] = golf;
        options = _closure1_slot0;
        entity = undefined;
        golf = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    StartGenerator();
                    report = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tango) { _fun00020_ip = 90; continue _fun00019 }
 10:
                    zulu = argFoo;
                    mike = argBar;
 16: // try_start_0
                    oscar = report.markFetching;
                    tango = zulu;
                    tango = oscar.bind(report)(tango);
                    tango = mike;
                    mike = undefined;
                    mike = tango.bind(mike)();
                    SaveGenerator(address=45);
 43:
                    return mike;
 45:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00020_ip = 70; continue _fun00019 }
 51:
                    oscar = report.markCompleted;
                    tango = zulu;
                    tango = oscar.bind(report)(tango);
 67: // try_end0
                    return mike;
 70:
                    return mike;
 73: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tango = report.markFailed;
                    zulu = tango.bind(report)(zulu);
                    throw mike;
 90:
                    return entity;
                }
            };
            return entity;
        };
        golf = options.bind(entity)(golf);
        var _closure2_slot0 = golf;
        oscar = function() { // Original name: _try
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = oscar;
        mike[8] = report;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    report = 3;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'modules/message_previews/RemoteFetchData.tsx';
    report = oscar.bind(golf)(report);
    zulu['FetchStatus'] = tango;
    zulu['RemoteFetchData'] = mike;
    return entity;
})();