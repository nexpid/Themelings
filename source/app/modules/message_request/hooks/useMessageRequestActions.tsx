// app/modules/message_request/hooks/useMessageRequestActions.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
            verify = _closure1_slot11;
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
            golf = _closure1_slot11;
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
    var _closure1_slot10 = entity;
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
    var _closure1_slot11 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.MessageRequestAnalyticsAction;
    var _closure1_slot7 = golf;
    tango = tango.BATCH_REJECT_LIMIT;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot9 = tango;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/message_request/hooks/useMessageRequestActions.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useMessageRequestActions
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            kilo = mike.user;
            var _closure2_slot0 = kilo;
            offset = mike.onAcceptSuccess;
            var _closure2_slot1 = offset;
            result = mike.onRejectSuccess;
            var _closure2_slot2 = result;
            output = mike.onError;
            var _closure2_slot3 = output;
            yankee = undefined;
            var _closure2_slot9 = yankee;
            var _closure2_slot10 = yankee;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 6;
            mike = tango[mike];
            mike = zulu.bind(yankee)(mike);
            romeo = mike.bind(yankee)();
            echo = _closure1_slot5;
            mike = echo.useState;
            sizing = false;
            mike = mike.bind(echo)(sizing);
            backup = _closure1_slot4;
            foxtrot = 2;
            zulu = backup.bind(yankee)(mike, foxtrot);
            mike = 0;
            oscar = zulu[mike];
            verify = 1;
            zulu = zulu[verify];
            var _closure2_slot4 = zulu;
            zulu = echo.useState;
            zulu = zulu.bind(echo)(sizing);
            zulu = backup.bind(yankee)(zulu, foxtrot);
            report = zulu[mike];
            zulu = zulu[verify];
            var _closure2_slot5 = zulu;
            zulu = echo.useState;
            zulu = zulu.bind(echo)(sizing);
            zulu = backup.bind(yankee)(zulu, foxtrot);
            tango = zulu[mike];
            zulu = zulu[verify];
            var _closure2_slot6 = zulu;
            zulu = echo.useState;
            zulu = zulu.bind(echo)(sizing);
            options = backup.bind(yankee)(zulu, foxtrot);
            zulu = options[mike];
            options = options[verify];
            var _closure2_slot7 = options;
            options = echo.useState;
            options = options.bind(echo)(sizing);
            options = backup.bind(yankee)(options, foxtrot);
            mike = options[mike];
            options = options[verify];
            var _closure2_slot8 = options;
            sizing = oscar;
            if(sizing) { _fun00008_ip = 248; continue _fun00007 }
 245:
            sizing = report;
 248:
            if(sizing) { _fun00008_ip = 254; continue _fun00007 }
 251:
            sizing = tango;
 254:
            _closure2_slot9 = sizing;
            backup = _closure1_slot5;
            verify = backup.useCallback;
            golf = function() {
                tango = _closure1_slot3;
                zulu = undefined;
                mike = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun00010_ip = 232; continue _fun00009 }
 10:
                            report = argFoo;
                            mike = undefined;
                            zulu = undefined;
                            oscar = _closure2_slot9;
                            if(oscar) { _fun00010_ip = 229; continue _fun00009 }
 30:
                            oscar = _closure2_slot4;
                            golf = true;
                            oscar = oscar.bind(mike)(golf);
 41: // try_start_0 // try_start_1
                            options = _closure1_slot0;
                            verify = _closure1_slot2;
                            oscar = 7;
                            oscar = verify[oscar];
                            options = options.bind(mike)(oscar);
                            oscar = options.acceptMessageRequest;
                            report = oscar.bind(options)(report);
                            SaveGenerator(address=79);
 77:
                            return report;
 79:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(oscar) { _fun00010_ip = 114; continue _fun00009 }
 85:
                            oscar = _closure2_slot7;
                            oscar = oscar.bind(mike)(golf);
                            golf = _closure2_slot1;
                            oscar = null;
                            if(!(oscar != golf)) { _fun00010_ip = 112; continue _fun00009 }
 104:
                            oscar = _closure2_slot1;
                            oscar = oscar.bind(mike)();
 112: // try_end0
                            _fun00010_ip = 201; continue _fun00009;
 114: // try_end1
                            golf = _closure2_slot4;
                            oscar = false;
                            oscar = golf.bind(mike)(oscar);
                            return report;
 128: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=6);
                            oscar = _closure1_slot0;
                            options = _closure1_slot2;
                            report = 8;
                            report = options[report];
                            report = oscar.bind(mike)(report);
                            report = report.APIError;
                            oscar = report.prototype;
                            oscar = Object.create(oscar, {constructor: {value: report}});
                            yankee = oscar;
                            offset = golf;
                            report = new yankee[report](offset, verify);
                            zulu = report instanceof Object ? report : oscar;
                            oscar = _closure2_slot3;
                            report = null;
                            if(!(report != oscar)) { _fun00010_ip = 201; continue _fun00009 }
 192:
                            report = _closure2_slot3;
                            zulu = report.bind(mike)(zulu);
 201: // try_end2
                            report = _closure2_slot4;
                            zulu = false;
                            zulu = report.bind(mike)(zulu);
                            _fun00010_ip = 229; continue _fun00009;
 214: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=2);
                            report = _closure2_slot4;
                            tango = false;
                            tango = report.bind(mike)(tango);
                            throw zulu;
 229:
                            return mike;
 232:
                            return entity;
                        }
                    };
                    return entity;
                };
                mike = tango.bind(zulu)(mike);
                var _closure3_slot0 = mike;
                entity = function() {
                    entity = undefined;
                    tango = _closure3_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                return entity;
            };
            options = golf.bind(yankee)();
            golf = new Array(3);
            golf[0] = sizing;
            golf[1] = offset;
            golf[2] = output;
            offset = verify.bind(backup)(options, golf);
            _closure2_slot10 = offset;
            verify = backup.useCallback;
            golf = function() {
                tango = _closure1_slot3;
                zulu = undefined;
                mike = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun00012_ip = 232; continue _fun00011 }
 10:
                            report = argFoo;
                            mike = undefined;
                            zulu = undefined;
                            oscar = _closure2_slot9;
                            if(oscar) { _fun00012_ip = 229; continue _fun00011 }
 30:
                            oscar = _closure2_slot5;
                            golf = true;
                            oscar = oscar.bind(mike)(golf);
 41: // try_start_0 // try_start_1
                            options = _closure1_slot0;
                            verify = _closure1_slot2;
                            oscar = 7;
                            oscar = verify[oscar];
                            options = options.bind(mike)(oscar);
                            oscar = options.rejectMessageRequest;
                            report = oscar.bind(options)(report);
                            SaveGenerator(address=79);
 77:
                            return report;
 79:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(oscar) { _fun00012_ip = 114; continue _fun00011 }
 85:
                            oscar = _closure2_slot8;
                            oscar = oscar.bind(mike)(golf);
                            golf = _closure2_slot2;
                            oscar = null;
                            if(!(oscar != golf)) { _fun00012_ip = 112; continue _fun00011 }
 104:
                            oscar = _closure2_slot2;
                            oscar = oscar.bind(mike)();
 112: // try_end0
                            _fun00012_ip = 201; continue _fun00011;
 114: // try_end1
                            golf = _closure2_slot5;
                            oscar = false;
                            oscar = golf.bind(mike)(oscar);
                            return report;
 128: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=6);
                            oscar = _closure1_slot0;
                            options = _closure1_slot2;
                            report = 8;
                            report = options[report];
                            report = oscar.bind(mike)(report);
                            report = report.APIError;
                            oscar = report.prototype;
                            oscar = Object.create(oscar, {constructor: {value: report}});
                            yankee = oscar;
                            offset = golf;
                            report = new yankee[report](offset, verify);
                            zulu = report instanceof Object ? report : oscar;
                            oscar = _closure2_slot3;
                            report = null;
                            if(!(report != oscar)) { _fun00012_ip = 201; continue _fun00011 }
 192:
                            report = _closure2_slot3;
                            zulu = report.bind(mike)(zulu);
 201: // try_end2
                            report = _closure2_slot5;
                            zulu = false;
                            zulu = report.bind(mike)(zulu);
                            _fun00012_ip = 229; continue _fun00011;
 214: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=2);
                            report = _closure2_slot5;
                            tango = false;
                            tango = report.bind(mike)(tango);
                            throw zulu;
 229:
                            return mike;
 232:
                            return entity;
                        }
                    };
                    return entity;
                };
                mike = tango.bind(zulu)(mike);
                var _closure3_slot0 = mike;
                entity = function() {
                    entity = undefined;
                    tango = _closure3_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                return entity;
            };
            options = golf.bind(yankee)();
            golf = new Array(3);
            golf[0] = sizing;
            golf[1] = result;
            golf[2] = output;
            verify = verify.bind(backup)(options, golf);
            foxtrot = backup.useCallback;
            golf = function() {
                tango = _closure1_slot3;
                zulu = undefined;
                mike = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun00014_ip = 323; continue _fun00013 }
 10:
                            options = argFoo;
                            mike = undefined;
                            oscar = undefined;
                            offset = undefined;
                            yankee = undefined;
                            zulu = undefined;
                            report = _closure2_slot9;
                            if(report) { _fun00014_ip = 320; continue _fun00013 }
 36:
                            report = _closure2_slot5;
                            golf = true;
                            report = report.bind(mike)(golf);
                            romeo = _closure1_slot1;
                            foxtrot = _closure1_slot2;
                            verify = 9;
                            verify = foxtrot[verify];
                            romeo = romeo.bind(mike)(verify);
                            verify = options;
                            options = _closure1_slot8;
                            oscar = romeo.bind(mike)(verify, options);
 83: // try_start_0 // try_start_2
                            options = _closure1_slot10;
                            oscar = options.bind(mike)(oscar);
                            yankee = oscar;
                            oscar = oscar.bind(mike)();
                            offset = oscar;
                            oscar = oscar.done;
                            verify = 7;
                            if(oscar) { _fun00014_ip = 193; continue _fun00013 }
 113:
                            oscar = offset;
                            romeo = oscar.value;
                            options = _closure1_slot0;
                            oscar = _closure1_slot2;
                            oscar = oscar[verify];
                            options = options.bind(mike)(oscar);
                            oscar = options.rejectMessageRequestBatch;
                            oscar = oscar.bind(options)(romeo);
                            SaveGenerator(address=153);
 151:
                            return oscar;
 153:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                            if(options) { _fun00014_ip = 179; continue _fun00013 }
 159:
                            options = yankee;
                            options = options.bind(mike)();
                            offset = options;
                            options = options.done;
                            if(options) { _fun00014_ip = 193; continue _fun00013 }
 177:
                            _fun00014_ip = 113; continue _fun00013;
 179: // try_end0 // try_end2
                            verify = _closure2_slot5;
                            options = false;
                            options = verify.bind(mike)(options);
                            return oscar;
 193: // try_start_1 // try_start_3
                            oscar = _closure2_slot8;
                            oscar = oscar.bind(mike)(golf);
                            golf = _closure2_slot2;
                            oscar = null;
                            if(!(oscar != golf)) { _fun00014_ip = 220; continue _fun00013 }
 212:
                            oscar = _closure2_slot2;
                            oscar = oscar.bind(mike)();
 220: // try_end1
                            _fun00014_ip = 292; continue _fun00013;
 222: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=6);
                            oscar = _closure1_slot0;
                            options = _closure1_slot2;
                            report = 8;
                            report = options[report];
                            report = oscar.bind(mike)(report);
                            report = report.APIError;
                            oscar = report.prototype;
                            oscar = Object.create(oscar, {constructor: {value: report}});
                            sizing = oscar;
                            kilo = golf;
                            report = new sizing[report](kilo, backup);
                            zulu = report instanceof Object ? report : oscar;
                            oscar = _closure2_slot3;
                            report = null;
                            if(!(report != oscar)) { _fun00014_ip = 292; continue _fun00013 }
 283:
                            report = _closure2_slot3;
                            zulu = report.bind(mike)(zulu);
 292: // try_end3
                            report = _closure2_slot5;
                            zulu = false;
                            zulu = report.bind(mike)(zulu);
                            _fun00014_ip = 320; continue _fun00013;
 305: // catch_target2 // catch_target3
                            CatchBlockStart(arg_register=2);
                            report = _closure2_slot5;
                            tango = false;
                            tango = report.bind(mike)(tango);
                            throw zulu;
 320:
                            return mike;
 323:
                            return entity;
                        }
                    };
                    return entity;
                };
                mike = tango.bind(zulu)(mike);
                var _closure3_slot0 = mike;
                entity = function() {
                    entity = undefined;
                    tango = _closure3_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                return entity;
            };
            options = golf.bind(yankee)();
            golf = new Array(3);
            golf[0] = sizing;
            golf[1] = result;
            golf[2] = output;
            options = foxtrot.bind(backup)(options, golf);
            foxtrot = backup.useCallback;
            golf = function() {
                tango = _closure1_slot3;
                zulu = undefined;
                mike = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            StartGenerator();
                            verify = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun00016_ip = 285; continue _fun00015 }
 15:
                            var _closure5_slot0 = verify;
                            mike = _closure2_slot9;
                            if(mike) { _fun00016_ip = 280; continue _fun00015 }
 32:
                            mike = _closure2_slot0;
                            report = null;
                            if(!(report != mike)) { _fun00016_ip = 193; continue _fun00015 }
 45:
                            options = _closure1_slot6;
                            oscar = options.getMutualGuilds;
                            tango = _closure2_slot0;
                            tango = tango.id;
                            tango = oscar.bind(options)(tango);
                            if(!(report == tango)) { _fun00016_ip = 193; continue _fun00015 }
 76:
                            oscar = _closure2_slot6;
                            report = undefined;
                            tango = true;
                            tango = oscar.bind(report)(tango);
 89: // try_start_0 // try_start_1
                            tango = _closure1_slot1;
                            oscar = _closure1_slot2;
                            mike = 10;
                            mike = oscar[mike];
                            options = tango.bind(report)(mike);
                            offset = _closure2_slot0;
                            oscar = offset.id;
                            tango = offset.getAvatarURL;
                            mike = 80;
                            tango = tango.bind(offset)(report, mike);
                            mike = {'withMutualGuilds': true, 'withMutualFriendsCount': true};
                            mike = options.bind(report)(oscar, tango, mike);
                            SaveGenerator(address=158);
 156:
                            return mike;
 158:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(tango) { _fun00016_ip = 166; continue _fun00015 }
 164: // try_end0
                            _fun00016_ip = 182; continue _fun00015;
 166: // try_end1
                            oscar = _closure2_slot6;
                            tango = false;
                            tango = oscar.bind(report)(tango);
                            return mike;
 180: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=1);
 182: // try_end2
                            tango = _closure2_slot6;
                            mike = false;
                            mike = tango.bind(report)(mike);
 193:
                            mike = function() {
                                tango = _closure1_slot3;
                                zulu = undefined;
                                mike = function* () {
                                    entity = function* () { // Original name: ?anon_0_
                                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(mike) { _fun00018_ip = 229; continue _fun00017 }
 10:
                                            mike = _closure2_slot0;
                                            offset = null;
                                            if(!(offset == mike)) { _fun00018_ip = 29; continue _fun00017 }
 23:
                                            verify = new Array(0);
                                            _fun00018_ip = 87; continue _fun00017;
 29:
                                            report = _closure1_slot6;
                                            zulu = report.getMutualGuilds;
                                            mike = _closure2_slot0;
                                            mike = mike.id;
                                            oscar = zulu.bind(report)(mike);
                                            zulu = offset == oscar;
                                            mike = undefined;
                                            if(zulu) { _fun00018_ip = 84; continue _fun00017 }
 65:
                                            report = oscar.map;
                                            zulu = function(argFoo) {
                                                entity = argFoo;
                                                entity = entity.guild;
                                                entity = entity.id;
                                                return entity;
                                            };
                                            mike = report.bind(oscar)(zulu);
 84:
                                            verify = mike;
 87:
                                            oscar = _closure1_slot1;
                                            report = _closure1_slot2;
                                            zulu = 11;
                                            report = report[zulu];
                                            zulu = undefined;
                                            options = oscar.bind(zulu)(report);
                                            golf = options.track;
                                            report = _closure1_slot9;
                                            oscar = report.MESSAGE_REQUEST_ACTION;
                                            report = {};
                                            mike = _closure1_slot7;
                                            mike = mike.ACCEPT_CONFIRMATION_PROMPT;
                                            report['action'] = mike;
                                            yankee = _closure5_slot0;
                                            report['channel_id'] = yankee;
                                            if(!(offset == verify)) { _fun00018_ip = 162; continue _fun00017 }
 158:
                                            verify = new Array(0);
 162:
                                            report['mutual_guild_ids'] = verify;
                                            verify = _closure2_slot0;
                                            offset = offset == verify;
                                            verify = undefined;
                                            if(offset) { _fun00018_ip = 189; continue _fun00017 }
 180:
                                            offset = _closure2_slot0;
                                            verify = offset.id;
 189:
                                            report['other_user_id'] = verify;
                                            report = golf.bind(options)(oscar, report);
                                            tango = _closure2_slot10;
                                            mike = _closure5_slot0;
                                            mike = tango.bind(zulu)(mike);
                                            SaveGenerator(address=217);
 215:
                                            return mike;
 217:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(tango) { _fun00018_ip = 226; continue _fun00017 }
 223:
                                            return zulu;
 226:
                                            return mike;
 229:
                                            return entity;
                                        }
                                    };
                                    return entity;
                                };
                                mike = tango.bind(zulu)(mike);
                                var _closure6_slot0 = mike;
                                entity = function() {
                                    entity = undefined;
                                    tango = _closure6_slot0;
                                    zulu = tango.apply;
                                    entity = arguments;
                                    mike = entity;
                                    entity = this;
                                    entity = zulu.bind(tango)(entity, mike);
                                    return entity;
                                };
                                return entity;
                            };
                            oscar = undefined;
                            options = mike.bind(oscar)();
                            tango = _closure1_slot0;
                            offset = _closure1_slot2;
                            mike = 12;
                            mike = offset[mike];
                            oscar = tango.bind(oscar)(mike);
                            tango = oscar.openAcceptMessageRequestConfirmModal;
                            mike = {};
                            mike['channelId'] = verify;
                            mike['onConfirm'] = options;
                            golf = function() { // Original name: onCancel
                                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                                    entity = _closure2_slot0;
                                    options = null;
                                    if(!(options == entity)) { _fun00020_ip = 19; continue _fun00019 }
 13:
                                    oscar = new Array(0);
                                    _fun00020_ip = 77; continue _fun00019;
 19:
                                    zulu = _closure1_slot6;
                                    mike = zulu.getMutualGuilds;
                                    entity = _closure2_slot0;
                                    entity = entity.id;
                                    tango = mike.bind(zulu)(entity);
                                    mike = options == tango;
                                    entity = undefined;
                                    if(mike) { _fun00020_ip = 74; continue _fun00019 }
 55:
                                    zulu = tango.map;
                                    mike = function(argFoo) {
                                        entity = argFoo;
                                        entity = entity.guild;
                                        entity = entity.id;
                                        return entity;
                                    };
                                    entity = zulu.bind(tango)(mike);
 74:
                                    oscar = entity;
 77:
                                    zulu = _closure1_slot1;
                                    mike = _closure1_slot2;
                                    entity = 11;
                                    mike = mike[entity];
                                    entity = undefined;
                                    report = zulu.bind(entity)(mike);
                                    tango = report.track;
                                    mike = _closure1_slot9;
                                    zulu = mike.MESSAGE_REQUEST_ACTION;
                                    mike = {};
                                    verify = _closure1_slot7;
                                    verify = verify.DISMISS_CONFIRMATION_PROMPT;
                                    mike['action'] = verify;
                                    verify = _closure5_slot0;
                                    mike['channel_id'] = verify;
                                    if(!(options == oscar)) { _fun00020_ip = 152; continue _fun00019 }
 148:
                                    oscar = new Array(0);
 152:
                                    mike['mutual_guild_ids'] = oscar;
                                    oscar = _closure2_slot0;
                                    options = options == oscar;
                                    oscar = undefined;
                                    if(options) { _fun00020_ip = 179; continue _fun00019 }
 170:
                                    golf = _closure2_slot0;
                                    oscar = golf.id;
 179:
                                    mike['other_user_id'] = oscar;
                                    mike = tango.bind(report)(zulu, mike);
                                    return entity;
                                }
                            };
                            mike['onCancel'] = golf;
                            mike = tango.bind(oscar)(mike);
                            _fun00016_ip = 280; continue _fun00015;
 265: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=1);
                            tango = _closure2_slot6;
                            zulu = false;
                            zulu = tango.bind(report)(zulu);
                            throw mike;
 280:
                            mike = undefined;
                            return mike;
 285:
                            return entity;
                        }
                    };
                    return entity;
                };
                mike = tango.bind(zulu)(mike);
                var _closure3_slot0 = mike;
                entity = function() {
                    entity = undefined;
                    tango = _closure3_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                return entity;
            };
            yankee = golf.bind(yankee)();
            golf = new Array(3);
            golf[0] = offset;
            golf[1] = sizing;
            golf[2] = kilo;
            yankee = foxtrot.bind(backup)(yankee, golf);
            foxtrot = backup.useCallback;
            golf = new Array(1);
            golf[0] = offset;
            entity = function(argFoo, argBar, argBaz) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    golf = argFoo;
                    var _closure3_slot0 = golf;
                    entity = argBar;
                    var _closure3_slot1 = entity;
                    entity = argBaz;
                    var _closure3_slot2 = entity;
                    oscar = function(argFoo, argBar) { // Original name: onConfirm
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            golf = argFoo;
                            options = argBar;
                            if(!options) { _fun00024_ip = 51; continue _fun00023 }
 9:
                            zulu = _closure1_slot0;
                            mike = _closure1_slot2;
                            entity = 13;
                            mike = mike[entity];
                            entity = undefined;
                            entity = zulu.bind(entity)(mike);
                            mike = entity.NonSpamRetrainingOptIn;
                            entity = mike.updateSetting;
                            entity = entity.bind(mike)(golf);
 51:
                            entity = golf;
                            if(!entity) { _fun00024_ip = 70; continue _fun00023 }
 57:
                            zulu = _closure3_slot1;
                            mike = null;
                            entity = mike != zulu;
 70:
                            if(!entity) { _fun00024_ip = 116; continue _fun00023 }
 73:
                            zulu = _closure1_slot0;
                            mike = _closure1_slot2;
                            entity = 14;
                            mike = mike[entity];
                            entity = undefined;
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.submitHamReportForFirstDM;
                            entity = _closure3_slot1;
                            entity = mike.bind(zulu)(entity);
 116:
                            tango = _closure2_slot10;
                            verify = _closure3_slot0;
                            zulu = verify.id;
                            entity = undefined;
                            zulu = tango.bind(entity)(zulu);
                            tango = _closure1_slot1;
                            report = _closure1_slot2;
                            zulu = 11;
                            zulu = report[zulu];
                            oscar = tango.bind(entity)(zulu);
                            report = oscar.track;
                            zulu = _closure1_slot9;
                            tango = zulu.MESSAGE_REQUEST_ACTION;
                            zulu = {};
                            offset = _closure1_slot7;
                            offset = offset.ACCEPT_HAM_CONFIRMATION_PROMPT;
                            zulu['action'] = offset;
                            verify = verify.id;
                            zulu['channel_id'] = verify;
                            zulu['is_dont_show_again_checked'] = options;
                            zulu['non_spam_retraining_opt_in'] = golf;
                            zulu = report.bind(oscar)(tango, zulu);
                            tango = _closure3_slot2;
                            zulu = null;
                            if(!(zulu != tango)) { _fun00024_ip = 243; continue _fun00023 }
 235:
                            mike = _closure3_slot2;
                            mike = mike.bind(entity)();
 243:
                            return entity;
                        }
                    };
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 13;
                    zulu = zulu[entity];
                    entity = undefined;
                    zulu = tango.bind(entity)(zulu);
                    tango = zulu.NonSpamRetrainingOptIn;
                    zulu = tango.getSetting;
                    zulu = zulu.bind(tango)();
                    tango = null;
                    if(!(tango != zulu)) { _fun00022_ip = 84; continue _fun00021 }
 77:
                    zulu = oscar.bind(entity)(zulu);
                    _fun00022_ip = 138; continue _fun00021;
 84:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 12;
                    mike = tango[mike];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.onMarkAsNotSpamConfirmationModal;
                    mike = {};
                    mike['channel'] = golf;
                    mike['onConfirm'] = oscar;
                    report = function() { // Original name: onCancel
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 11;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.track;
                        mike = _closure1_slot9;
                        zulu = mike.MESSAGE_REQUEST_ACTION;
                        mike = {};
                        oscar = _closure1_slot7;
                        oscar = oscar.DISMISS_HAM_CONFIRMATION_PROMPT;
                        mike['action'] = oscar;
                        oscar = _closure3_slot0;
                        oscar = oscar.id;
                        mike['channel_id'] = oscar;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    mike['onCancel'] = report;
                    mike = zulu.bind(tango)(mike);
 138:
                    return entity;
                }
            };
            golf = foxtrot.bind(backup)(entity, golf);
            entity = {};
            if(!romeo) { _fun00008_ip = 452; continue _fun00007 }
 449:
            offset = yankee;
 452:
            entity['acceptMessageRequest'] = offset;
            entity['rejectMessageRequest'] = verify;
            entity['rejectAll'] = options;
            entity['markAsNotSpam'] = golf;
            entity['isAcceptLoading'] = oscar;
            entity['isRejectLoading'] = report;
            entity['isUserProfileLoading'] = tango;
            entity['isOptimisticAccepted'] = zulu;
            entity['isOptimisticRejected'] = mike;
            return entity;
        }
    };
    zulu['useMessageRequestActions'] = mike;
    return entity;
})();