// app/modules/message_request/hooks/useMessageRequestPreview.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun120448: for(var _fun120448_ip = 0; ; ) switch(_fun120448_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun120448_ip = 46; continue _fun120448 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun120448_ip = 55; continue _fun120448 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun120448_ip = 345; continue _fun120448 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun120448_ip = 323; continue _fun120448 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun120448_ip = 283; continue _fun120448 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun120448_ip = 270; continue _fun120448 }
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
            if(!golf) { _fun120448_ip = 163; continue _fun120448 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun120448_ip = 179; continue _fun120448 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun120448_ip = 249; continue _fun120448 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun120448_ip = 249; continue _fun120448 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun120448_ip = 234; continue _fun120448 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun120448_ip = 247; continue _fun120448 }
 234:
            verify = _closure1_slot12;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun120448_ip = 265; continue _fun120448;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun120448_ip = 283; continue _fun120448;
 270:
            golf = _closure1_slot12;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun120448_ip = 323; continue _fun120448 }
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
            if(!tango) { _fun120448_ip = 330; continue _fun120448 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun120449: for(var _fun120449_ip = 0; ; ) switch(_fun120449_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun120449_ip = 56; continue _fun120449 }
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
                    _fun120449_ip = 67; continue _fun120449;
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
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun120450: for(var _fun120450_ip = 0; ; ) switch(_fun120450_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun120450_ip = 23; continue _fun120450 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun120450_ip = 33; continue _fun120450 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun120450_ip = 70; continue _fun120450 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun120450_ip = 55; continue _fun120450 }
 70:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: loadMessageRequestData
        entity = undefined;
        tango = _closure1_slot14;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _loadMessageRequestData
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun120454: for(var _fun120454_ip = 0; ; ) switch(_fun120454_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun120454_ip = 139; continue _fun120454 }
 10: // try_start_0
                    report = _closure1_slot1;
                    mike = _closure1_slot2;
                    oscar = 6;
                    zulu = mike[oscar];
                    mike = undefined;
                    golf = report.bind(mike)(zulu);
                    report = golf.isEmpty;
                    zulu = _closure1_slot9;
                    zulu = report.bind(golf)(zulu);
                    if(zulu) { _fun120454_ip = 117; continue _fun120454 }
 53:
                    zulu = _closure1_slot15;
                    zulu = zulu.bind(mike)();
                    SaveGenerator(address=65);
 63:
                    return zulu;
 65:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun120454_ip = 108; continue _fun120454 }
 71:
                    golf = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[oscar];
                    options = golf.bind(mike)(report);
                    golf = options.isEmpty;
                    report = _closure1_slot9;
                    report = golf.bind(options)(report);
                    if(report) { _fun120454_ip = 117; continue _fun120454 }
 106:
                    _fun120454_ip = 53; continue _fun120454;
 108: // try_end0
                    report = null;
                    _closure1_slot10 = report;
                    return zulu;
 117:
                    zulu = null;
                    _closure1_slot10 = zulu;
                    return mike;
 126: // catch_target0
                    CatchBlockStart(arg_register=1);
                    zulu = null;
                    _closure1_slot10 = zulu;
                    throw mike;
 139:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot14 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: loadMessageRequestDataHelper
        entity = undefined;
        tango = _closure1_slot16;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _loadMessageRequestDataHelper
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun120458: for(var _fun120458_ip = 0; ; ) switch(_fun120458_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun120458_ip = 473; continue _fun120458 }
 10:
                    report = undefined;
                    zulu = undefined;
                    oscar = undefined;
                    golf = undefined;
                    mike = global;
                    verify = mike.Array;
                    options = verify.from;
                    mike = _closure1_slot9;
                    offset = options.bind(verify)(mike);
                    verify = offset.slice;
                    options = _closure1_slot8;
                    mike = 0;
                    zulu = verify.bind(offset)(mike, options);
 60: // try_start_0 // try_start_1
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    mike = 7;
                    mike = verify[mike];
                    mike = options.bind(report)(mike);
                    verify = mike.HTTP;
                    options = verify.get;
                    mike = {};
                    offset = _closure1_slot7;
                    offset = offset.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA;
                    mike['url'] = offset;
                    offset = {};
                    yankee = zulu;
                    offset['channel_ids'] = yankee;
                    mike['query'] = offset;
                    offset = true;
                    mike['rejectWithError'] = offset;
                    mike = options.bind(verify)(mike);
                    SaveGenerator(address=135);
 133:
                    return mike;
 135:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(options) { _fun120458_ip = 204; continue _fun120458 }
 141:
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    options = 8;
                    options = offset[options];
                    offset = verify.bind(report)(options);
                    verify = offset.dispatch;
                    options = {};
                    yankee = 'LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS';
                    options['type'] = yankee;
                    yankee = zulu;
                    options['requestedChannelIds'] = yankee;
                    yankee = mike.body;
                    options['supplementalData'] = yankee;
                    options = verify.bind(offset)(options);
 199: // try_end0
                    _fun120458_ip = 329; continue _fun120458;
 204: // try_end1
                    verify = _closure1_slot11;
                    options = zulu;
                    options = verify.bind(report)(options);
                    golf = options;
                    options = options.bind(report)();
                    oscar = options;
                    options = options.done;
                    if(options) { _fun120458_ip = 274; continue _fun120458 }
 234:
                    options = oscar;
                    offset = options.value;
                    verify = _closure1_slot9;
                    options = verify.delete;
                    options = options.bind(verify)(offset);
                    options = golf;
                    options = options.bind(report)();
                    oscar = options;
                    options = options.done;
                    if(!options) { _fun120458_ip = 234; continue _fun120458 }
 274:
                    return mike;
 277: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=1);
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    mike = 8;
                    mike = verify[mike];
                    verify = options.bind(report)(mike);
                    options = verify.dispatch;
                    mike = {};
                    offset = 'LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR';
                    mike['type'] = offset;
                    offset = zulu;
                    mike['requestedChannelIds'] = offset;
                    mike = options.bind(verify)(mike);
 329: // try_end2
                    options = _closure1_slot11;
                    mike = zulu;
                    mike = options.bind(report)(mike);
                    golf = mike;
                    mike = mike.bind(report)();
                    oscar = mike;
                    mike = mike.done;
                    if(mike) { _fun120458_ip = 399; continue _fun120458 }
 359:
                    mike = oscar;
                    verify = mike.value;
                    options = _closure1_slot9;
                    mike = options.delete;
                    mike = mike.bind(options)(verify);
                    mike = golf;
                    mike = mike.bind(report)();
                    oscar = mike;
                    mike = mike.done;
                    if(!mike) { _fun120458_ip = 359; continue _fun120458 }
 399:
                    return report;
 402: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    options = _closure1_slot11;
                    zulu = options.bind(report)(zulu);
                    golf = zulu;
                    zulu = zulu.bind(report)();
                    oscar = zulu;
                    zulu = zulu.done;
                    if(zulu) { _fun120458_ip = 471; continue _fun120458 }
 431:
                    zulu = oscar;
                    verify = zulu.value;
                    options = _closure1_slot9;
                    zulu = options.delete;
                    zulu = zulu.bind(options)(verify);
                    zulu = golf;
                    zulu = zulu.bind(report)();
                    oscar = zulu;
                    zulu = zulu.done;
                    if(!zulu) { _fun120458_ip = 431; continue _fun120458 }
 471:
                    throw mike;
 473:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot16 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot16 = entity;
    tango = global;
    offset = tango.Object;
    verify = offset.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, golf);
    entity = 0;
    golf = oscar[entity];
    entity = undefined;
    golf = options.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 1;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 2;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 3;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot6 = golf;
    golf = 4;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.Endpoints;
    var _closure1_slot7 = golf;
    golf = 25;
    var _closure1_slot8 = golf;
    tango = tango.Set;
    golf = tango.prototype;
    golf = Object.create(golf, {constructor: {value: tango}});
    backup = golf;
    tango = new backup[tango](foxtrot);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot9 = tango;
    tango = null;
    var _closure1_slot10 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/message_request/hooks/useMessageRequestPreview.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useMessageRequestPreview
        _fun120459: for(var _fun120459_ip = 0; ; ) switch(_fun120459_ip) {
 0:
            mike = argFoo;
            golf = mike.id;
            var _closure2_slot0 = golf;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            verify = 5;
            mike = yankee[verify];
            options = undefined;
            foxtrot = offset.bind(options)(mike);
            romeo = foxtrot.useStateFromStoresObject;
            oscar = _closure1_slot6;
            tango = new Array(3);
            tango[0] = oscar;
            mike = _closure1_slot4;
            tango[1] = mike;
            mike = _closure1_slot5;
            tango[2] = mike;
            zulu = new Array(1);
            zulu[0] = golf;
            mike = function() {
                _fun120460: for(var _fun120460_ip = 0; ; ) switch(_fun120460_ip) {
 0:
                    zulu = _closure1_slot5;
                    entity = zulu.lastMessageId;
                    report = _closure2_slot0;
                    oscar = entity.bind(zulu)(report);
                    zulu = _closure1_slot6;
                    entity = zulu.getMessageRequestPreview;
                    entity = entity.bind(zulu)(report);
                    report = entity.message;
                    zulu = null;
                    if(!(zulu == report)) { _fun120460_ip = 81; continue _fun120460 }
 53:
                    if(!(zulu != oscar)) { _fun120460_ip = 81; continue _fun120460 }
 57:
                    report = _closure1_slot4;
                    tango = report.getMessage;
                    mike = _closure2_slot0;
                    mike = tango.bind(report)(mike, oscar);
                    if(!(zulu == mike)) { _fun120460_ip = 83; continue _fun120460 }
 81:
                    return entity;
 83:
                    entity = {'loaded': true, 'error': false};
                    entity['message'] = mike;
                    return entity;
                }
            };
            zulu = romeo.bind(foxtrot)(tango, mike, zulu);
            tango = zulu.loaded;
            mike = zulu.message;
            zulu = zulu.error;
            verify = yankee[verify];
            yankee = offset.bind(options)(verify);
            offset = yankee.useStateFromStores;
            verify = new Array(1);
            verify[0] = oscar;
            oscar = new Array(1);
            oscar[0] = golf;
            entity = function() {
                zulu = _closure1_slot6;
                mike = zulu.shouldLoadMessageRequestPreview;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = offset.bind(yankee)(verify, entity, oscar);
            entity = !tango;
            if(!entity) { _fun120459_ip = 167; continue _fun120459 }
 161:
            verify = null;
            entity = verify == mike;
 167:
            if(!entity) { _fun120459_ip = 173; continue _fun120459 }
 170:
            entity = oscar;
 173:
            if(!entity) { _fun120459_ip = 224; continue _fun120459 }
 176:
            oscar = _closure1_slot9;
            entity = oscar.add;
            entity = entity.bind(oscar)(golf);
            oscar = _closure1_slot10;
            entity = null;
            if(!(entity == oscar)) { _fun120459_ip = 224; continue _fun120459 }
 200:
            entity = global;
            golf = entity.setTimeout;
            oscar = _closure1_slot13;
            entity = 0;
            entity = golf.bind(options)(oscar, entity);
            _closure1_slot10 = entity;
 224:
            entity = {};
            entity['loaded'] = tango;
            entity['error'] = zulu;
            entity['message'] = mike;
            return entity;
        }
    };
    zulu['useMessageRequestPreview'] = mike;
    return entity;
})();