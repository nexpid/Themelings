// app/modules/polls/useCreatePollFormData.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    golf = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    var _closure1_slot3 = oscar;
    entity = function(argFoo, argBar) { // Original name: createPollCreationImageForMedia
        entity = {};
        mike = {};
        zulu = argBar;
        mike['status'] = zulu;
        zulu = argFoo;
        mike['mediaURL'] = zulu;
        entity['mediaAttachmentState'] = mike;
        mike = undefined;
        entity['emoji'] = mike;
        entity['stickerId'] = mike;
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.MAX_NUMBER_OF_ANSWERS_PER_POLL;
    var _closure1_slot7 = golf;
    golf = tango.MIN_NUMBER_OF_ANSWERS_PER_POLL;
    var _closure1_slot8 = golf;
    tango = tango.PollDurations;
    var _closure1_slot9 = tango;
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/polls/useCreatePollFormData.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz) { // Original name: useCreatePollCommonData
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            whiskey = argFoo;
            lima = argBar;
            variable37 = argBaz;
            var _closure2_slot0 = whiskey;
            var _closure2_slot1 = lima;
            var _closure2_slot2 = variable37;
            golf = whiskey.id;
            var _closure2_slot3 = golf;
            offset = _closure1_slot6;
            zulu = offset.useState;
            mike = function() {
                tango = _closure1_slot0;
                report = _closure1_slot3;
                mike = 4;
                entity = report[mike];
                zulu = undefined;
                oscar = tango.bind(zulu)(entity);
                entity = oscar.generateEmptyPollAnswer;
                oscar = entity.bind(oscar)();
                entity = new Array(2);
                entity[0] = oscar;
                mike = report[mike];
                zulu = tango.bind(zulu)(mike);
                mike = zulu.generateEmptyPollAnswer;
                mike = mike.bind(zulu)();
                entity[1] = mike;
                return entity;
            };
            mike = zulu.bind(offset)(mike);
            zulu = _closure1_slot5;
            variable36 = undefined;
            yankee = 2;
            mike = zulu.bind(variable36)(mike, yankee);
            verify = 0;
            papa = mike[verify];
            var _closure2_slot4 = papa;
            report = 1;
            mike = mike[report];
            var _closure2_slot5 = mike;
            tango = offset.useState;
            mike = '';
            mike = tango.bind(offset)(mike);
            mike = zulu.bind(variable36)(mike, yankee);
            context = mike[verify];
            var _closure2_slot6 = context;
            record = mike[report];
            var _closure2_slot7 = record;
            tango = offset.useState;
            options = _closure1_slot0;
            romeo = _closure1_slot3;
            mike = 5;
            mike = romeo[mike];
            mike = options.bind(variable36)(mike);
            mike = mike.PollLayoutTypes;
            mike = mike.DEFAULT;
            mike = tango.bind(offset)(mike);
            mike = zulu.bind(variable36)(mike, yankee);
            config = mike[verify];
            var _closure2_slot8 = config;
            sequence = mike[report];
            mike = offset.useState;
            tango = false;
            mike = mike.bind(offset)(tango);
            mike = zulu.bind(variable36)(mike, yankee);
            vacuum = mike[verify];
            var _closure2_slot9 = vacuum;
            control = mike[report];
            options = offset.useState;
            mike = _closure1_slot9;
            mike = mike.ONE_DAY;
            mike = options.bind(offset)(mike);
            mike = zulu.bind(variable36)(mike, yankee);
            source = mike[verify];
            var _closure2_slot10 = source;
            update = mike[report];
            options = offset.useState;
            mike = {};
            mike = options.bind(offset)(mike);
            mike = zulu.bind(variable36)(mike, yankee);
            options = mike[verify];
            mike = mike[report];
            var _closure2_slot11 = mike;
            mike = offset.useState;
            mike = mike.bind(offset)(tango);
            mike = zulu.bind(variable36)(mike, yankee);
            zulu = mike[verify];
            mike = mike[report];
            var _closure2_slot12 = mike;
            offset = papa.filter;
            tango = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot3;
                entity = 4;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.isAnswerFilled;
                mike = _closure2_slot8;
                entity = argFoo;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            quebec = offset.bind(papa)(tango);
            var _closure2_slot13 = quebec;
            offset = papa.filter;
            tango = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot3;
                entity = 4;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.isIncompleteAnswer;
                mike = _closure2_slot8;
                entity = argFoo;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            tango = offset.bind(papa)(tango);
            offset = context.length;
            echo = offset > verify;
            if(!echo) { _fun00002_ip = 377; continue _fun00001 }
 364:
            romeo = quebec.length;
            offset = _closure1_slot8;
            echo = romeo >= offset;
 377:
            if(!echo) { _fun00002_ip = 389; continue _fun00001 }
 380:
            tango = tango.length;
            echo = verify === tango;
 389:
            romeo = _closure1_slot1;
            foxtrot = _closure1_slot3;
            tango = 6;
            tango = foxtrot[tango];
            offset = romeo.bind(variable36)(tango);
            tango = 7;
            tango = foxtrot[tango];
            tango = romeo.bind(variable36)(tango);
            tango = tango.createPoll;
            offset = offset.bind(variable36)(tango);
            tango = _closure1_slot5;
            tango = tango.bind(variable36)(offset, yankee);
            equality = tango[verify];
            var _closure2_slot14 = equality;
            report = tango[report];
            tango = report.error;
            report = report.loading;
            var _closure2_slot15 = report;
            offset = papa.length;
            verify = _closure1_slot7;
            result = offset < verify;
            var _closure2_slot16 = result;
            offset = papa.length;
            verify = _closure1_slot8;
            output = offset > verify;
            var _closure2_slot17 = output;
            status = _closure1_slot6;
            yankee = status.useCallback;
            offset = function(argFoo) {
                tango = _closure2_slot11;
                entity = undefined;
                zulu = function(argFoo) {
                    entity = {};
                    zulu = argFoo;
                    tango = entity;
                    mike = copyDataProperties(tango, zulu);
                    mike = delete entity.question;
                    return entity;
                };
                zulu = tango.bind(entity)(zulu);
                zulu = _closure2_slot7;
                mike = argFoo;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            verify = new Array(0);
            sizing = yankee.bind(status)(offset, verify);
            yankee = status.useCallback;
            offset = function(argFoo) {
                entity = argFoo;
                zulu = entity.text;
                var _closure3_slot0 = zulu;
                zulu = entity.index;
                var _closure3_slot1 = zulu;
                entity = entity.localCreationAnswerId;
                var _closure3_slot2 = entity;
                report = _closure2_slot11;
                entity = undefined;
                tango = function(argFoo) {
                    entity = {};
                    report = argFoo;
                    oscar = entity;
                    mike = copyDataProperties(oscar, report);
                    tango = _closure3_slot2;
                    mike = global;
                    mike = mike.HermesInternal;
                    zulu = mike.concat;
                    mike = 'answer-';
                    mike = zulu.bind(mike)(tango);
                    mike = delete entity[mike];
                    return entity;
                };
                tango = report.bind(entity)(tango);
                zulu = _closure2_slot5;
                mike = function(argFoo) {
                    entity = new Array(0);
                    golf = argFoo;
                    oscar = 0;
                    options = entity;
                    mike = arraySpread(options, golf, oscar);
                    zulu = _closure3_slot1;
                    mike = {};
                    golf = entity[zulu];
                    options = mike;
                    report = copyDataProperties(options, golf);
                    report = _closure3_slot0;
                    tango = 'text';
                    mike[tango] = report;
                    entity[zulu] = mike;
                    return entity;
                };
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            verify = new Array(0);
            kilo = yankee.bind(status)(offset, verify);
            yankee = status.useCallback;
            offset = function(argFoo, argBar) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = argBar;
                var _closure3_slot1 = entity;
                zulu = _closure2_slot5;
                entity = undefined;
                mike = function(argFoo) {
                    entity = new Array(0);
                    golf = argFoo;
                    oscar = 0;
                    options = entity;
                    mike = arraySpread(options, golf, oscar);
                    zulu = _closure3_slot1;
                    mike = {};
                    golf = entity[zulu];
                    options = mike;
                    report = copyDataProperties(options, golf);
                    report = _closure3_slot0;
                    tango = 'image';
                    mike[tango] = report;
                    entity[zulu] = mike;
                    return entity;
                };
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            verify = new Array(0);
            verify = yankee.bind(status)(offset, verify);
            var _closure2_slot18 = verify;
            romeo = status.useCallback;
            yankee = new Array(1);
            yankee[0] = papa;
            offset = function(argFoo, argBar, argBaz) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot4;
                    entity = argBar;
                    zulu = mike[entity];
                    report = zulu.image;
                    tango = null;
                    oscar = tango == report;
                    entity = undefined;
                    mike = undefined;
                    if(oscar) { _fun00004_ip = 39; continue _fun00003 }
 33:
                    mike = report.mediaAttachmentState;
 39:
                    tango = tango != mike;
                    if(!tango) { _fun00004_ip = 59; continue _fun00003 }
 46:
                    oscar = mike.mediaURL;
                    report = argBaz;
                    tango = oscar !== report;
 59:
                    if(!tango) { _fun00004_ip = 147; continue _fun00003 }
 62:
                    report = _closure1_slot2;
                    verify = _closure1_slot3;
                    tango = 8;
                    tango = verify[tango];
                    oscar = report.bind(entity)(tango);
                    report = oscar.removePollUploadAttachment;
                    tango = zulu.localCreationAnswerId;
                    options = _closure1_slot0;
                    golf = 9;
                    golf = verify[golf];
                    options = options.bind(entity)(golf);
                    golf = options.getFileNameFromGifUrl;
                    zulu = zulu.localCreationAnswerId;
                    mike = mike.mediaURL;
                    zulu = golf.bind(options)(zulu, mike);
                    mike = argFoo;
                    mike = report.bind(oscar)(mike, tango, zulu);
 147:
                    return entity;
                }
            };
            offset = romeo.bind(status)(offset, yankee);
            var _closure2_slot19 = offset;
            foxtrot = status.useCallback;
            yankee = function() {
                tango = _closure1_slot4;
                zulu = undefined;
                mike = function* (argFoo, argBar, argBaz) {
                    entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            StartGenerator();
                            yankee = argFoo;
                            oscar = argBar;
                            options = argBaz;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun00006_ip = 254; continue _fun00005 }
 19:
                            mike = _closure2_slot4;
                            mike = mike[oscar];
                            verify = mike.localCreationAnswerId;
                            mike = _closure2_slot19;
                            zulu = undefined;
                            mike = mike.bind(zulu)(yankee, oscar);
                            golf = _closure2_slot18;
                            foxtrot = _closure1_slot10;
                            backup = _closure1_slot0;
                            romeo = _closure1_slot3;
                            offset = 10;
                            mike = romeo[offset];
                            mike = backup.bind(zulu)(mike);
                            mike = mike.PollMediaUploadAttachmentStatus;
                            mike = mike.PREPARING;
                            mike = foxtrot.bind(zulu)(options, mike);
                            mike = golf.bind(zulu)(mike, oscar);
                            golf = _closure1_slot2;
                            mike = 8;
                            mike = romeo[mike];
                            golf = golf.bind(zulu)(mike);
                            mike = golf.handlePollGifAttachmentAdd;
                            mike = mike.bind(golf)(yankee, verify, options);
                            SaveGenerator(address=136);
 134:
                            return mike;
 136:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                            if(golf) { _fun00006_ip = 251; continue _fun00005 }
 142:
                            golf = null;
                            if(!(golf == mike)) { _fun00006_ip = 199; continue _fun00005 }
 148:
                            verify = _closure2_slot18;
                            yankee = _closure1_slot10;
                            romeo = _closure1_slot0;
                            golf = _closure1_slot3;
                            golf = golf[offset];
                            golf = romeo.bind(zulu)(golf);
                            golf = golf.PollMediaUploadAttachmentStatus;
                            golf = golf.ERROR;
                            golf = yankee.bind(zulu)(options, golf);
                            golf = verify.bind(zulu)(golf, oscar);
                            _fun00006_ip = 248; continue _fun00005;
 199:
                            report = _closure2_slot18;
                            golf = _closure1_slot10;
                            verify = _closure1_slot0;
                            tango = _closure1_slot3;
                            tango = tango[offset];
                            tango = verify.bind(zulu)(tango);
                            tango = tango.PollMediaUploadAttachmentStatus;
                            tango = tango.READY_TO_UPLOAD;
                            tango = golf.bind(zulu)(options, tango);
                            tango = report.bind(zulu)(tango, oscar);
 248:
                            return zulu;
 251:
                            return mike;
 254:
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
            romeo = yankee.bind(variable36)();
            yankee = new Array(3);
            yankee[0] = papa;
            yankee[1] = verify;
            yankee[2] = offset;
            backup = foxtrot.bind(status)(romeo, yankee);
            foxtrot = status.useCallback;
            romeo = new Array(3);
            romeo[0] = papa;
            romeo[1] = verify;
            romeo[2] = offset;
            yankee = function(argFoo, argBar, argBaz) {
                foxtrot = argFoo;
                tango = argBar;
                romeo = argBaz;
                entity = _closure2_slot4;
                entity = entity[tango];
                yankee = entity.localCreationAnswerId;
                entity = global;
                mike = entity.URL;
                entity = mike.createObjectURL;
                oscar = entity.bind(mike)(romeo);
                mike = _closure2_slot19;
                entity = undefined;
                mike = mike.bind(entity)(foxtrot, tango);
                backup = _closure2_slot18;
                report = _closure1_slot10;
                golf = _closure1_slot0;
                options = _closure1_slot3;
                mike = 10;
                offset = options[mike];
                offset = golf.bind(entity)(offset);
                offset = offset.PollMediaUploadAttachmentStatus;
                offset = offset.PREPARING;
                offset = report.bind(entity)(oscar, offset);
                offset = backup.bind(entity)(offset, tango);
                offset = _closure1_slot2;
                verify = 8;
                verify = options[verify];
                offset = offset.bind(entity)(verify);
                verify = offset.handlePollMediaAttachmentAdd;
                verify = verify.bind(offset)(foxtrot, yankee, romeo);
                zulu = _closure2_slot18;
                mike = options[mike];
                mike = golf.bind(entity)(mike);
                mike = mike.PollMediaUploadAttachmentStatus;
                mike = mike.READY_TO_UPLOAD;
                mike = report.bind(entity)(oscar, mike);
                mike = zulu.bind(entity)(mike, tango);
                return entity;
            };
            romeo = foxtrot.bind(status)(yankee, romeo);
            foxtrot = status.useCallback;
            yankee = new Array(3);
            yankee[0] = golf;
            yankee[1] = verify;
            yankee[2] = offset;
            verify = function(argFoo, argBar) {
                tango = argBar;
                report = _closure2_slot19;
                zulu = _closure2_slot3;
                entity = undefined;
                zulu = report.bind(entity)(zulu, tango);
                zulu = _closure2_slot18;
                mike = {};
                report = argFoo;
                mike['emoji'] = report;
                mike['stickerId'] = entity;
                mike['mediaAttachmentState'] = entity;
                mike = zulu.bind(entity)(mike, tango);
                return entity;
            };
            foxtrot = foxtrot.bind(status)(verify, yankee);
            target = status.useCallback;
            yankee = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                zulu = _closure2_slot5;
                entity = undefined;
                mike = function(argFoo) {
                    entity = new Array(0);
                    golf = argFoo;
                    oscar = 0;
                    options = entity;
                    mike = arraySpread(options, golf, oscar);
                    zulu = _closure3_slot0;
                    mike = {};
                    golf = entity[zulu];
                    options = mike;
                    tango = copyDataProperties(options, golf);
                    report = undefined;
                    tango = 'image';
                    mike[tango] = report;
                    entity[zulu] = mike;
                    return entity;
                };
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            verify = new Array(0);
            verify = target.bind(status)(yankee, verify);
            sierra = status.useCallback;
            target = new Array(1);
            target[0] = result;
            yankee = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure2_slot16;
                    if(!mike) { _fun00008_ip = 30; continue _fun00007 }
 10:
                    zulu = _closure2_slot5;
                    mike = undefined;
                    entity = function(argFoo) {
                        entity = new Array(1);
                        golf = argFoo;
                        oscar = 0;
                        options = entity;
                        zulu = arraySpread(options, golf, oscar);
                        report = _closure1_slot0;
                        tango = _closure1_slot3;
                        mike = 4;
                        tango = tango[mike];
                        mike = undefined;
                        tango = report.bind(mike)(tango);
                        mike = tango.generateEmptyPollAnswer;
                        mike = mike.bind(tango)();
                        entity[zulu] = mike;
                        mike = 1;
                        mike = zulu + mike;
                        return entity;
                    };
                    entity = zulu.bind(mike)(entity);
 30:
                    entity = undefined;
                    return entity;
                }
            };
            yankee = sierra.bind(status)(yankee, target);
            sierra = status.useCallback;
            variable38 = papa.length;
            target = new Array(5);
            target[0] = variable38;
            target[1] = output;
            target[2] = golf;
            target[3] = variable37;
            target[4] = offset;
            offset = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    report = argFoo;
                    var _closure3_slot0 = report;
                    zulu = _closure2_slot17;
                    if(!zulu) { _fun00010_ip = 95; continue _fun00009 }
 19:
                    zulu = _closure2_slot4;
                    tango = zulu.length;
                    golf = _closure2_slot19;
                    oscar = _closure2_slot3;
                    zulu = undefined;
                    oscar = golf.bind(zulu)(oscar, report);
                    oscar = _closure2_slot5;
                    mike = function(argFoo) {
                        entity = new Array(0);
                        oscar = argFoo;
                        report = 0;
                        golf = entity;
                        mike = arraySpread(golf, oscar, report);
                        tango = entity.splice;
                        zulu = _closure3_slot0;
                        mike = 1;
                        mike = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
                    mike = oscar.bind(zulu)(mike);
                    oscar = _closure2_slot2;
                    mike = null;
                    if(!(mike != oscar)) { _fun00010_ip = 95; continue _fun00009 }
 70:
                    mike = _closure2_slot2;
                    entity = {};
                    entity['indexToRemove'] = report;
                    entity['numberOfAnswers'] = tango;
                    entity = mike.bind(zulu)(entity);
 95:
                    entity = undefined;
                    return entity;
                }
            };
            offset = sierra.bind(status)(offset, target);
            sierra = status.useEffect;
            target = new Array(1);
            target[0] = golf;
            golf = function() {
                entity = function() {
                    zulu = _closure1_slot2;
                    mike = _closure1_slot3;
                    entity = 8;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.removeAllPollUploadAttachments;
                    mike = _closure2_slot3;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                return entity;
            };
            golf = sierra.bind(status)(golf, target);
            sierra = status.useCallback;
            target = new Array(3);
            target[0] = papa;
            target[1] = context;
            target[2] = config;
            golf = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    mike = true;
                    var _closure3_slot0 = mike;
                    report = {};
                    var _closure3_slot1 = report;
                    tango = _closure2_slot6;
                    zulu = tango.trim;
                    zulu = zulu.bind(tango)();
                    zulu = zulu.length;
                    oscar = 0;
                    if(!(oscar === zulu)) { _fun00012_ip = 114; continue _fun00011 }
 42:
                    zulu = false;
                    _closure3_slot0 = zulu;
                    verify = _closure1_slot0;
                    offset = _closure1_slot3;
                    zulu = 11;
                    tango = offset[zulu];
                    options = undefined;
                    tango = verify.bind(options)(tango);
                    golf = tango.intl;
                    tango = golf.string;
                    zulu = offset[zulu];
                    zulu = verify.bind(options)(zulu);
                    zulu = zulu.t;
                    zulu = zulu.gPX3oK;
                    zulu = tango.bind(golf)(zulu);
                    report['question'] = zulu;
 114:
                    golf = _closure2_slot4;
                    tango = golf.filter;
                    zulu = function(argFoo) {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot3;
                        entity = 4;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.isAnswerFilled;
                        mike = _closure2_slot8;
                        entity = argFoo;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    zulu = tango.bind(golf)(zulu);
                    golf = zulu.length;
                    tango = _closure1_slot8;
                    if(!(golf < tango)) { _fun00012_ip = 256; continue _fun00011 }
 151:
                    tango = false;
                    _closure3_slot0 = tango;
                    tango = _closure2_slot4;
                    tango = tango[oscar];
                    golf = tango.localCreationAnswerId;
                    tango = global;
                    tango = tango.HermesInternal;
                    oscar = tango.concat;
                    tango = 'answer-';
                    tango = oscar.bind(tango)(golf);
                    verify = _closure1_slot0;
                    offset = _closure1_slot3;
                    zulu = 11;
                    oscar = offset[zulu];
                    options = undefined;
                    oscar = verify.bind(options)(oscar);
                    golf = oscar.intl;
                    oscar = golf.string;
                    zulu = offset[zulu];
                    zulu = verify.bind(options)(zulu);
                    zulu = zulu.t;
                    zulu = zulu.fYvzER;
                    zulu = oscar.bind(golf)(zulu);
                    report[tango] = zulu;
 256:
                    oscar = _closure2_slot4;
                    tango = oscar.forEach;
                    zulu = function(argFoo) {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            zulu = argFoo;
                            report = _closure1_slot0;
                            tango = _closure1_slot3;
                            entity = 4;
                            tango = tango[entity];
                            entity = undefined;
                            oscar = report.bind(entity)(tango);
                            report = oscar.isIncompleteAnswer;
                            tango = _closure2_slot8;
                            tango = report.bind(oscar)(zulu, tango);
                            if(!tango) { _fun00014_ip = 152; continue _fun00013 }
 50:
                            report = false;
                            _closure3_slot0 = report;
                            tango = _closure3_slot1;
                            oscar = zulu.localCreationAnswerId;
                            zulu = global;
                            zulu = zulu.HermesInternal;
                            report = zulu.concat;
                            zulu = 'answer-';
                            zulu = report.bind(zulu)(oscar);
                            golf = _closure1_slot0;
                            options = _closure1_slot3;
                            mike = 11;
                            report = options[mike];
                            report = golf.bind(entity)(report);
                            oscar = report.intl;
                            report = oscar.string;
                            mike = options[mike];
                            mike = golf.bind(entity)(mike);
                            mike = mike.t;
                            mike = mike.8Qqkc3;
                            mike = report.bind(oscar)(mike);
                            tango[zulu] = mike;
 152:
                            return entity;
                        }
                    };
                    zulu = tango.bind(oscar)(zulu);
                    zulu = _closure2_slot11;
                    tango = undefined;
                    zulu = zulu.bind(tango)(report);
                    zulu = _closure2_slot12;
                    mike = _closure3_slot0;
                    mike = !mike;
                    mike = zulu.bind(tango)(mike);
                    entity = _closure3_slot0;
                    return entity;
                }
            };
            sierra = sierra.bind(status)(golf, target);
            var _closure2_slot20 = sierra;
            target = status.useCallback;
            golf = _closure1_slot4;
            oscar = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00016_ip = 100; continue _fun00015 }
 7:
                        tango = _closure2_slot14;
                        mike = {};
                        report = _closure2_slot0;
                        mike['channel'] = report;
                        report = _closure2_slot6;
                        mike['question'] = report;
                        report = _closure2_slot13;
                        mike['answers'] = report;
                        report = _closure2_slot9;
                        mike['allowMultiSelect'] = report;
                        report = _closure2_slot10;
                        mike['duration'] = report;
                        report = _closure2_slot8;
                        mike['layout'] = report;
                        zulu = _closure2_slot1;
                        mike['onClose'] = zulu;
                        zulu = undefined;
                        mike = tango.bind(zulu)(mike);
                        SaveGenerator(address=88);
 86:
                        return mike;
 88:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun00016_ip = 97; continue _fun00015 }
 94:
                        return zulu;
 97:
                        return mike;
 100:
                        return entity;
                    }
                };
                return entity;
            };
            golf = golf.bind(variable36)(oscar);
            oscar = new Array(8);
            oscar[0] = context;
            oscar[1] = quebec;
            oscar[2] = vacuum;
            oscar[3] = source;
            oscar[4] = equality;
            oscar[5] = whiskey;
            oscar[6] = config;
            oscar[7] = lima;
            golf = target.bind(status)(golf, oscar);
            var _closure2_slot21 = golf;
            target = status.useCallback;
            oscar = new Array(3);
            oscar[0] = golf;
            oscar[1] = report;
            oscar[2] = sierra;
            entity = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    mike = _closure2_slot15;
                    mike = !mike;
                    if(!mike) { _fun00018_ip = 23; continue _fun00017 }
 13:
                    tango = _closure2_slot20;
                    zulu = undefined;
                    mike = tango.bind(zulu)();
 23:
                    if(!mike) { _fun00018_ip = 36; continue _fun00017 }
 26:
                    mike = _closure2_slot21;
                    entity = undefined;
                    entity = mike.bind(entity)();
 36:
                    entity = undefined;
                    return entity;
                }
            };
            oscar = target.bind(status)(entity, oscar);
            entity = {};
            entity['answers'] = papa;
            entity['question'] = context;
            entity['setQuestion'] = record;
            entity['selectedLayoutType'] = config;
            entity['setSelectedLayoutType'] = sequence;
            entity['allowMultiSelect'] = vacuum;
            entity['setAllowMultiSelect'] = control;
            entity['duration'] = source;
            entity['setDuration'] = update;
            entity['canPost'] = echo;
            entity['canAddMoreAnswers'] = result;
            entity['canRemoveMoreAnswers'] = output;
            entity['handleQuestionChange'] = sizing;
            entity['handleAnswerTextChange'] = kilo;
            entity['handleGifSelect'] = backup;
            entity['handleEmojiSelect'] = foxtrot;
            entity['handleCustomUpload'] = romeo;
            entity['handleAddAnswer'] = yankee;
            entity['handleRemoveAnswer'] = offset;
            entity['handleRemoveAnswerImage'] = verify;
            entity['fieldErrors'] = options;
            entity['createPoll'] = golf;
            entity['handleSubmitPoll'] = oscar;
            entity['submitting'] = report;
            entity['createPollError'] = tango;
            entity['shouldFocusOnInvalidField'] = zulu;
            entity['setShouldFocusOnInvalidField'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();