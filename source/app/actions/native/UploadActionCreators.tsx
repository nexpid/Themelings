// app/actions/native/UploadActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    offset = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun82141: for(var _fun82141_ip = 0; ; ) switch(_fun82141_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun82141_ip = 46; continue _fun82141 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun82141_ip = 55; continue _fun82141 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun82141_ip = 345; continue _fun82141 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun82141_ip = 323; continue _fun82141 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun82141_ip = 283; continue _fun82141 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun82141_ip = 270; continue _fun82141 }
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
            if(!golf) { _fun82141_ip = 163; continue _fun82141 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun82141_ip = 179; continue _fun82141 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun82141_ip = 249; continue _fun82141 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun82141_ip = 249; continue _fun82141 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun82141_ip = 234; continue _fun82141 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun82141_ip = 247; continue _fun82141 }
 234:
            verify = _closure1_slot28;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun82141_ip = 265; continue _fun82141;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun82141_ip = 283; continue _fun82141;
 270:
            golf = _closure1_slot28;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun82141_ip = 323; continue _fun82141 }
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
            if(!tango) { _fun82141_ip = 330; continue _fun82141 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun82142: for(var _fun82142_ip = 0; ; ) switch(_fun82142_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun82142_ip = 56; continue _fun82142 }
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
                    _fun82142_ip = 67; continue _fun82142;
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
    var _closure1_slot27 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun82143: for(var _fun82143_ip = 0; ; ) switch(_fun82143_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun82143_ip = 23; continue _fun82143 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun82143_ip = 33; continue _fun82143 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun82143_ip = 70; continue _fun82143 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun82143_ip = 55; continue _fun82143 }
 70:
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    golf = function() { // Original name: uploadFiles
        entity = undefined;
        tango = _closure1_slot30;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot29 = golf;
    entity = function() { // Original name: _uploadFiles
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun82147: for(var _fun82147_ip = 0; ; ) switch(_fun82147_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun82147_ip = 1183; continue _fun82147 }
 15:
                    romeo = mike.channel;
                    verify = mike.items;
                    var _closure4_slot0 = verify;
                    kilo = mike.token;
                    oscar = mike.parsedMessage;
                    report = mike.flags;
                    output = mike.nonce;
                    yankee = undefined;
                    if(!(output === yankee)) { _fun82147_ip = 92; continue _fun82147 }
 59:
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    tango = 12;
                    tango = options[tango];
                    golf = golf.bind(yankee)(tango);
                    tango = golf.createNonce;
                    output = tango.bind(golf)();
 92:
                    var _closure4_slot1 = output;
                    echo = mike.maxSizeCallback;
                    var _closure4_slot2 = echo;
                    backup = mike.analyticsLocations;
                    if(!(backup === yankee)) { _fun82147_ip = 120; continue _fun82147 }
 116:
                    backup = new Array(0);
 120:
                    var _closure4_slot3 = backup;
                    golf = mike.poll;
                    mike = mike.raiseEndpointErrors;
                    if(!(mike === yankee)) { _fun82147_ip = 142; continue _fun82147 }
 140:
                    mike = false;
 142:
                    var _closure4_slot4 = mike;
                    var _closure4_slot5 = yankee;
                    var _closure4_slot6 = yankee;
                    var _closure4_slot7 = yankee;
                    var _closure4_slot8 = yankee;
                    var _closure4_slot9 = yankee;
                    var _closure4_slot10 = yankee;
                    var _closure4_slot11 = yankee;
                    SaveGenerator(address=178);
 176:
                    return yankee;
 178:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun82147_ip = 1180; continue _fun82147 }
 187:
                    result = null;
                    if(!(result != output)) { _fun82147_ip = 216; continue _fun82147 }
 193:
                    tango = _closure1_slot26;
                    zulu = tango.has;
                    zulu = zulu.bind(tango)(output);
                    if(zulu) { _fun82147_ip = 403; continue _fun82147 }
 216:
                    sizing = romeo.id;
                    _closure4_slot5 = sizing;
                    options = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    zulu = 13;
                    zulu = foxtrot[zulu];
                    zulu = options.bind(yankee)(zulu);
                    zulu = zulu.bind(yankee)(sizing);
                    SaveGenerator(address=257);
 255:
                    return zulu;
 257:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(options) { _fun82147_ip = 1177; continue _fun82147 }
 266:
                    if(!(result != zulu)) { _fun82147_ip = 409; continue _fun82147 }
 273:
                    foxtrot = _closure1_slot8;
                    options = foxtrot.getChannel;
                    update = options.bind(foxtrot)(zulu);
                    if(!(result != update)) { _fun82147_ip = 406; continue _fun82147 }
 291:
                    options = _closure1_slot27;
                    control = options.bind(yankee)(verify);
                    foxtrot = control.bind(yankee)();
                    options = foxtrot.done;
                    source = 'channelId';
                    if(options) { _fun82147_ip = 349; continue _fun82147 }
 316:
                    options = foxtrot.value;
                    vacuum = source in options;
                    if(!vacuum) { _fun82147_ip = 334; continue _fun82147 }
 328:
                    options['channelId'] = zulu;
 334:
                    vacuum = control.bind(yankee)();
                    options = vacuum.done;
                    foxtrot = vacuum;
                    if(!options) { _fun82147_ip = 316; continue _fun82147 }
 349:
                    foxtrot = _closure1_slot29;
                    options = {};
                    options['channel'] = update;
                    options['items'] = verify;
                    options['token'] = kilo;
                    options['parsedMessage'] = oscar;
                    options['flags'] = report;
                    options['nonce'] = output;
                    options['maxSizeCallback'] = echo;
                    options['analyticsLocations'] = backup;
                    options['poll'] = golf;
                    options = foxtrot.bind(yankee)(options);
 403:
                    return yankee;
 406:
                    return yankee;
 409:
                    options = {};
                    oscar = oscar.content;
                    options['content'] = oscar;
                    options['channel_id'] = sizing;
                    oscar = _closure1_slot19;
                    oscar = oscar.DEFAULT;
                    options['type'] = oscar;
                    options['flags'] = report;
                    options['poll'] = golf;
                    _closure4_slot6 = options;
                    oscar = verify.map;
                    report = function(argFoo, argBar) {
                        _fun82148: for(var _fun82148_ip = 0; ; ) switch(_fun82148_ip) {
 0:
                            mike = argFoo;
                            entity = {};
                            zulu = global;
                            report = zulu.String;
                            tango = undefined;
                            zulu = argBar;
                            zulu = report.bind(tango)(zulu);
                            entity['id'] = zulu;
                            tango = mike.description;
                            zulu = null;
                            if(!(zulu != tango)) { _fun82148_ip = 49; continue _fun82148 }
 38:
                            mike = mike.description;
                            entity['description'] = mike;
 49:
                            return entity;
                        }
                    };
                    report = oscar.bind(verify)(report);
                    options['attachments'] = report;
                    oscar = _closure1_slot5;
                    report = oscar.getPendingReply;
                    backup = report.bind(oscar)(sizing);
                    if(!(result != backup)) { _fun82147_ip = 591; continue _fun82147 }
 493:
                    oscar = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    report = 14;
                    report = foxtrot[report];
                    oscar = oscar.bind(yankee)(report);
                    report = oscar.getSendMessageOptionsForReply;
                    report = report.bind(oscar)(backup);
                    oscar = _closure1_slot19;
                    oscar = oscar.REPLY;
                    options['type'] = oscar;
                    oscar = report.messageReference;
                    options['message_reference'] = oscar;
                    report = report.allowedMentions;
                    options['allowed_mentions'] = report;
                    oscar = _closure1_slot0;
                    report = 15;
                    report = foxtrot[report];
                    oscar = oscar.bind(yankee)(report);
                    report = oscar.deletePendingReply;
                    report = report.bind(oscar)(sizing);
 591:
                    oscar = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    report = 16;
                    report = foxtrot[report];
                    oscar = oscar.bind(yankee)(report);
                    report = options.content;
                    foxtrot = oscar.bind(yankee)(report);
                    oscar = _closure1_slot3;
                    report = 2;
                    foxtrot = oscar.bind(yankee)(foxtrot, report);
                    backup = 0;
                    oscar = foxtrot[backup];
                    report = 1;
                    report = foxtrot[report];
                    if(!oscar) { _fun82147_ip = 721; continue _fun82147 }
 650:
                    options['content'] = report;
                    oscar = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    report = 17;
                    report = foxtrot[report];
                    foxtrot = oscar.bind(yankee)(report);
                    oscar = foxtrot.addFlag;
                    report = options.flags;
                    result = result != report;
                    backup = 0;
                    if(!result) { _fun82147_ip = 699; continue _fun82147 }
 696:
                    backup = report;
 699:
                    report = _closure1_slot20;
                    report = report.SUPPRESS_NOTIFICATIONS;
                    report = oscar.bind(foxtrot)(backup, report);
                    options['flags'] = report;
 721:
                    oscar = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    report = 18;
                    report = foxtrot[report];
                    report = oscar.bind(yankee)(report);
                    report = report.Future;
                    backup = report.prototype;
                    backup = Object.create(backup, {constructor: {value: report}});
                    context = backup;
                    report = new context[report](record);
                    report = report instanceof Object ? report : backup;
                    _closure4_slot7 = report;
                    backup = _closure1_slot1;
                    result = 19;
                    result = foxtrot[result];
                    echo = backup.bind(yankee)(result);
                    result = {};
                    result['channelId'] = sizing;
                    update = options.content;
                    result['content'] = update;
                    update = options.type;
                    result['type'] = update;
                    update = options.message_reference;
                    result['messageReference'] = update;
                    update = options.flags;
                    result['flags'] = update;
                    result['nonce'] = output;
                    update = 20;
                    update = foxtrot[update];
                    source = oscar.bind(yankee)(update);
                    update = source.createPollServerDataFromCreateRequest;
                    update = update.bind(source)(golf);
                    result['poll'] = update;
                    result = echo.bind(yankee)(result);
                    _closure4_slot8 = result;
                    options['nonce'] = output;
                    options['poll'] = golf;
                    golf = 21;
                    golf = foxtrot[golf];
                    backup = backup.bind(yankee)(golf);
                    golf = _closure1_slot14;
                    tango = golf.MESSAGES;
                    record = tango.bind(golf)(sizing);
                    golf = backup.prototype;
                    golf = Object.create(golf, {constructor: {value: backup}});
                    context = golf;
                    config = kilo;
                    tango = new context[backup](record, config, sequence);
                    golf = tango instanceof Object ? tango : golf;
                    _closure4_slot10 = golf;
                    tango = 22;
                    tango = foxtrot[tango];
                    yankee = oscar.bind(yankee)(tango);
                    oscar = yankee.maxFileSize;
                    tango = romeo.getGuildId;
                    tango = tango.bind(romeo)();
                    tango = oscar.bind(yankee)(tango);
                    _closure4_slot11 = tango;
                    yankee = golf.on;
                    oscar = 'start';
                    tango = function(argFoo) {
                        options = argFoo;
                        report = _closure1_slot26;
                        tango = report.add;
                        entity = _closure4_slot1;
                        entity = tango.bind(report)(entity);
                        oscar = _closure1_slot0;
                        report = _closure1_slot2;
                        entity = 23;
                        tango = report[entity];
                        entity = undefined;
                        golf = oscar.bind(entity)(tango);
                        oscar = golf.createMessageRecord;
                        tango = {};
                        romeo = _closure4_slot8;
                        foxtrot = tango;
                        verify = copyDataProperties(foxtrot, romeo);
                        yankee = options.id;
                        verify = global;
                        verify = verify.HermesInternal;
                        offset = verify.concat;
                        verify = 'pending-upload-';
                        offset = offset.bind(verify)(yankee);
                        verify = 'key';
                        tango[verify] = offset;
                        tango = oscar.bind(golf)(tango);
                        _closure4_slot9 = tango;
                        tango = _closure1_slot1;
                        zulu = 24;
                        zulu = report[zulu];
                        golf = tango.bind(entity)(zulu);
                        oscar = golf.dispatch;
                        zulu = {};
                        verify = 'UPLOAD_START';
                        zulu['type'] = verify;
                        verify = _closure4_slot5;
                        zulu['channelId'] = verify;
                        zulu['file'] = options;
                        options = _closure4_slot9;
                        zulu['message'] = options;
                        options = _closure4_slot10;
                        zulu['uploader'] = options;
                        zulu = oscar.bind(golf)(zulu);
                        zulu = 14;
                        zulu = report[zulu];
                        report = tango.bind(entity)(zulu);
                        tango = report.receiveMessage;
                        zulu = _closure4_slot5;
                        mike = _closure4_slot8;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    tango = yankee.bind(golf)(oscar, tango);
                    yankee = golf.on;
                    oscar = 'compression-progress';
                    tango = function(argFoo) {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 24;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.dispatch;
                        mike = {};
                        report = 'UPLOAD_COMPRESSION_PROGRESS';
                        mike['type'] = report;
                        report = _closure4_slot5;
                        mike['channelId'] = report;
                        report = argFoo;
                        mike['file'] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    tango = yankee.bind(golf)(oscar, tango);
                    yankee = golf.on;
                    oscar = 'progress';
                    tango = function(argFoo) {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 24;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.dispatch;
                        mike = {};
                        report = 'UPLOAD_PROGRESS';
                        mike['type'] = report;
                        report = _closure4_slot5;
                        mike['channelId'] = report;
                        report = argFoo;
                        mike['file'] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    tango = yankee.bind(golf)(oscar, tango);
                    yankee = golf.on;
                    oscar = 'error';
                    tango = function(argFoo, argBar, argBaz, argCorge) {
                        _fun82152: for(var _fun82152_ip = 0; ; ) switch(_fun82152_ip) {
 0:
                            oscar = argFoo;
                            options = argBar;
                            golf = argCorge;
                            report = _closure1_slot26;
                            mike = report.delete;
                            entity = _closure4_slot1;
                            entity = mike.bind(report)(entity);
                            report = _closure1_slot0;
                            mike = _closure1_slot2;
                            entity = 25;
                            mike = mike[entity];
                            entity = undefined;
                            offset = report.bind(entity)(mike);
                            verify = offset.logMessageSendFailure;
                            report = {};
                            mike = oscar.items;
                            report['fileItems'] = mike;
                            report['failureCode'] = options;
                            mike = null;
                            romeo = mike == golf;
                            yankee = undefined;
                            if(romeo) { _fun82152_ip = 96; continue _fun82152 }
 90:
                            yankee = golf.msg;
 96:
                            report['errorMessage'] = yankee;
                            report = verify.bind(offset)(report);
                            report = _closure1_slot15;
                            report = report.ENTITY_TOO_LARGE;
                            if(!(options !== report)) { _fun82152_ip = 604; continue _fun82152 }
 123:
                            report = _closure1_slot15;
                            report = report.TOO_MANY_ATTACHMENTS;
                            if(!(options !== report)) { _fun82152_ip = 440; continue _fun82152 }
 140:
                            report = _closure1_slot15;
                            report = report.ENTITY_EMPTY;
                            if(!(options !== report)) { _fun82152_ip = 221; continue _fun82152 }
 154:
                            options = _closure1_slot1;
                            verify = _closure1_slot2;
                            report = 24;
                            report = verify[report];
                            verify = options.bind(entity)(report);
                            options = verify.dispatch;
                            report = {};
                            offset = 'UPLOAD_FAIL';
                            report['type'] = offset;
                            offset = _closure4_slot5;
                            report['channelId'] = offset;
                            report['file'] = oscar;
                            offset = _closure4_slot9;
                            report['messageRecord'] = offset;
                            report = options.bind(verify)(report);
                            _fun82152_ip = 670; continue _fun82152;
 221:
                            options = _closure4_slot10;
                            report = options.cancel;
                            report = report.bind(options)();
                            report = _closure4_slot6;
                            options = mike == report;
                            report = undefined;
                            if(options) { _fun82152_ip = 272; continue _fun82152 }
 248:
                            options = _closure4_slot6;
                            options = options.attachments;
                            verify = mike == options;
                            report = undefined;
                            if(verify) { _fun82152_ip = 272; continue _fun82152 }
 267:
                            report = options.length;
 272:
                            verify = mike != report;
                            options = 0;
                            if(!verify) { _fun82152_ip = 284; continue _fun82152 }
 281:
                            options = report;
 284:
                            report = 1;
                            if(!(options > report)) { _fun82152_ip = 299; continue _fun82152 }
 291:
                            report = _closure4_slot2;
                            report = report.bind(entity)();
 299:
                            options = _closure1_slot1;
                            backup = _closure1_slot2;
                            report = 26;
                            report = backup[report];
                            verify = options.bind(entity)(report);
                            options = verify.show;
                            report = {};
                            foxtrot = _closure1_slot0;
                            offset = 27;
                            yankee = backup[offset];
                            yankee = foxtrot.bind(entity)(yankee);
                            kilo = yankee.intl;
                            romeo = kilo.string;
                            yankee = backup[offset];
                            yankee = foxtrot.bind(entity)(yankee);
                            yankee = yankee.t;
                            yankee = yankee.B3vFdX;
                            yankee = romeo.bind(kilo)(yankee);
                            report['title'] = yankee;
                            yankee = backup[offset];
                            yankee = foxtrot.bind(entity)(yankee);
                            romeo = yankee.intl;
                            yankee = romeo.string;
                            offset = backup[offset];
                            offset = foxtrot.bind(entity)(offset);
                            offset = offset.t;
                            offset = offset.9ZpT2N;
                            offset = yankee.bind(romeo)(offset);
                            report['body'] = offset;
                            report = options.bind(verify)(report);
                            _fun82152_ip = 670; continue _fun82152;
 440:
                            options = _closure4_slot10;
                            report = options.cancel;
                            report = report.bind(options)();
                            options = _closure1_slot1;
                            backup = _closure1_slot2;
                            report = 26;
                            report = backup[report];
                            verify = options.bind(entity)(report);
                            options = verify.show;
                            report = {};
                            yankee = _closure1_slot0;
                            offset = 27;
                            romeo = backup[offset];
                            romeo = yankee.bind(entity)(romeo);
                            kilo = romeo.intl;
                            foxtrot = kilo.string;
                            romeo = backup[offset];
                            romeo = yankee.bind(entity)(romeo);
                            romeo = romeo.t;
                            romeo = romeo.wOr6hI;
                            romeo = foxtrot.bind(kilo)(romeo);
                            report['title'] = romeo;
                            romeo = backup[offset];
                            romeo = yankee.bind(entity)(romeo);
                            foxtrot = romeo.intl;
                            romeo = foxtrot.formatToPlainString;
                            offset = backup[offset];
                            offset = yankee.bind(entity)(offset);
                            offset = offset.t;
                            yankee = offset.qqyp/f;
                            offset = {};
                            backup = _closure1_slot13;
                            offset['limit'] = backup;
                            offset = romeo.bind(foxtrot)(yankee, offset);
                            report['body'] = offset;
                            report = options.bind(verify)(report);
                            _fun82152_ip = 670; continue _fun82152;
 604:
                            options = _closure4_slot10;
                            report = options.cancel;
                            report = report.bind(options)();
                            report = _closure4_slot2;
                            report = report.bind(entity)();
                            report = _closure1_slot31;
                            tango = _closure4_slot11;
                            zulu = _closure4_slot3;
                            options = mike == golf;
                            mike = undefined;
                            if(options) { _fun82152_ip = 652; continue _fun82152 }
 647:
                            mike = golf.type;
 652:
                            update = undefined;
                            echo = oscar;
                            result = tango;
                            output = zulu;
                            sizing = mike;
                            mike = update[report](echo, result, output, sizing, kilo);
 670:
                            return entity;
                        }
                    };
                    tango = yankee.bind(golf)(oscar, tango);
                    yankee = golf.on;
                    oscar = 'complete';
                    tango = function(argFoo) {
                        _fun82153: for(var _fun82153_ip = 0; ; ) switch(_fun82153_ip) {
 0:
                            golf = argFoo;
                            tango = _closure1_slot26;
                            zulu = tango.delete;
                            mike = _closure4_slot1;
                            mike = zulu.bind(tango)(mike);
                            tango = _closure1_slot11;
                            zulu = tango.getMessageForFile;
                            mike = golf.id;
                            report = zulu.bind(tango)(mike);
                            mike = null;
                            mike = mike != report;
                            if(!mike) { _fun82153_ip = 69; continue _fun82153 }
 56:
                            tango = report.content;
                            zulu = '';
                            mike = zulu === tango;
 69:
                            if(!mike) { _fun82153_ip = 82; continue _fun82153 }
 72:
                            zulu = _closure4_slot10;
                            mike = zulu._aborted;
 82:
                            if(!mike) { _fun82153_ip = 146; continue _fun82153 }
 85:
                            tango = _closure1_slot1;
                            zulu = _closure1_slot2;
                            mike = 24;
                            zulu = zulu[mike];
                            mike = undefined;
                            tango = tango.bind(mike)(zulu);
                            zulu = tango.dispatch;
                            mike = {};
                            options = 'MESSAGE_DELETE';
                            mike['type'] = options;
                            options = report.nonce;
                            mike['id'] = options;
                            options = golf.channelId;
                            mike['channelId'] = options;
                            mike = zulu.bind(tango)(mike);
 146:
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 24;
                            mike = mike[entity];
                            entity = undefined;
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.dispatch;
                            mike = {};
                            options = 'UPLOAD_COMPLETE';
                            mike['type'] = options;
                            options = _closure4_slot5;
                            mike['channelId'] = options;
                            mike['file'] = golf;
                            oscar = _closure4_slot10;
                            oscar = oscar._aborted;
                            mike['aborted'] = oscar;
                            mike['messageRecord'] = report;
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        }
                    };
                    tango = yankee.bind(golf)(oscar, tango);
                    yankee = golf.on;
                    oscar = 'cancel-upload-item';
                    tango = function(argFoo) {
                        report = argFoo;
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 24;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.dispatch;
                        mike = {};
                        oscar = 'UPLOAD_FILE_UPDATE';
                        mike['type'] = oscar;
                        mike['file'] = report;
                        report = report.channelId;
                        mike['channelId'] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    tango = yankee.bind(golf)(oscar, tango);
                    oscar = golf.uploadFiles;
                    tango = {};
                    offset = function(argFoo, argBar, argBaz) { // Original name: handleRequestError
                        _fun82155: for(var _fun82155_ip = 0; ; ) switch(_fun82155_ip) {
 0:
                            tango = argFoo;
                            oscar = argBar;
                            zulu = null;
                            if(!(zulu != tango)) { _fun82155_ip = 489; continue _fun82155 }
 15:
                            if(!(zulu != oscar)) { _fun82155_ip = 489; continue _fun82155 }
 22:
                            entity = zulu == tango;
                            golf = undefined;
                            report = undefined;
                            if(entity) { _fun82155_ip = 38; continue _fun82155 }
 33:
                            report = tango.code;
 38:
                            mike = _closure1_slot15;
                            mike = mike.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS;
                            if(!(report !== mike)) { _fun82155_ip = 489; continue _fun82155 }
 58:
                            report = _closure1_slot1;
                            options = _closure1_slot2;
                            mike = 28;
                            mike = options[mike];
                            report = report.bind(golf)(mike);
                            mike = {};
                            mike['status'] = oscar;
                            mike['body'] = tango;
                            tango = report.prototype;
                            tango = Object.create(tango, {constructor: {value: report}});
                            output = tango;
                            sizing = mike;
                            mike = new output[report](sizing, kilo);
                            mike = mike instanceof Object ? mike : tango;
                            tango = mike.getAnyErrorMessage;
                            options = tango.bind(mike)();
                            if(!(zulu == options)) { _fun82155_ip = 130; continue _fun82155 }
 125:
                            options = mike.message;
 130:
                            tango = _closure1_slot0;
                            verify = _closure1_slot2;
                            zulu = 25;
                            zulu = verify[zulu];
                            oscar = tango.bind(golf)(zulu);
                            report = oscar.logMessageSendFailure;
                            tango = {};
                            offset = _closure4_slot0;
                            tango['fileItems'] = offset;
                            offset = mike.code;
                            tango['failureCode'] = offset;
                            tango['errorMessage'] = options;
                            tango = report.bind(oscar)(tango);
                            report = mike.code;
                            tango = _closure1_slot15;
                            tango = tango.EXPLICIT_CONTENT;
                            tango = report === tango;
                            oscar = _closure1_slot1;
                            report = 24;
                            report = verify[report];
                            verify = oscar.bind(golf)(report);
                            oscar = verify.dispatch;
                            report = {};
                            offset = 'UPLOAD_FAIL';
                            report['type'] = offset;
                            offset = _closure4_slot5;
                            report['channelId'] = offset;
                            offset = _closure4_slot9;
                            report['messageRecord'] = offset;
                            offset = _closure4_slot10;
                            offset = offset._file;
                            report['file'] = offset;
                            offset = undefined;
                            if(!tango) { _fun82155_ip = 287; continue _fun82155 }
 277:
                            yankee = _closure1_slot21;
                            offset = yankee.EXPLICIT_CONTENT;
 287:
                            report['reason'] = offset;
                            report = oscar.bind(verify)(report);
                            if(tango) { _fun82155_ip = 418; continue _fun82155 }
 300:
                            tango = _closure4_slot4;
                            if(tango) { _fun82155_ip = 401; continue _fun82155 }
 307:
                            report = _closure1_slot1;
                            foxtrot = _closure1_slot2;
                            tango = 26;
                            tango = foxtrot[tango];
                            oscar = report.bind(golf)(tango);
                            report = oscar.show;
                            tango = {};
                            romeo = _closure1_slot0;
                            verify = 27;
                            offset = foxtrot[verify];
                            offset = romeo.bind(golf)(offset);
                            yankee = offset.intl;
                            offset = yankee.string;
                            verify = foxtrot[verify];
                            verify = romeo.bind(golf)(verify);
                            verify = verify.t;
                            verify = verify.B3vFdX;
                            verify = offset.bind(yankee)(verify);
                            tango['title'] = verify;
                            tango['body'] = options;
                            tango = report.bind(oscar)(tango);
                            _fun82155_ip = 489; continue _fun82155;
 401:
                            report = _closure4_slot7;
                            tango = report.reject;
                            tango = tango.bind(report)(mike);
                            _fun82155_ip = 489; continue _fun82155;
 418:
                            report = _closure1_slot1;
                            options = _closure1_slot2;
                            tango = 14;
                            tango = options[tango];
                            report = report.bind(golf)(tango);
                            tango = report.sendExplicitMediaClydeError;
                            zulu = _closure4_slot5;
                            mike = mike.attachments;
                            oscar = _closure1_slot0;
                            entity = 29;
                            entity = options[entity];
                            entity = oscar.bind(golf)(entity);
                            entity = entity.TrackMediaRedactionContext;
                            entity = entity.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED;
                            entity = tango.bind(report)(zulu, mike, entity);
 489:
                            entity = undefined;
                            return entity;
                        }
                    };
                    tango['handleRequestError'] = offset;
                    tango = oscar.bind(golf)(verify, options, tango);
                    SaveGenerator(address=1149);
 1147:
                    return tango;
 1149:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscar) { _fun82147_ip = 1174; continue _fun82147 }
 1155:
                    oscar = report.resolve;
                    oscar = oscar.bind(report)();
                    report = report.promise;
                    return report;
 1174:
                    return tango;
 1177:
                    return zulu;
 1180:
                    return mike;
 1183:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot30 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot30 = entity;
    options = function(argFoo, argBar, argBaz, argCorge) { // Original name: showFileSizeError
        _fun82156: for(var _fun82156_ip = 0; ; ) switch(_fun82156_ip) {
 0:
            backup = argFoo;
            offset = argBar;
            tango = argCorge;
            report = _closure1_slot12;
            entity = report.getCurrentUser;
            options = entity.bind(report)();
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            entity = 32;
            report = report[entity];
            entity = undefined;
            golf = oscar.bind(entity)(report);
            oscar = golf.isPremiumExactly;
            report = _closure1_slot22;
            report = report.TIER_2;
            foxtrot = oscar.bind(golf)(options, report);
            report = backup.items;
            golf = null;
            if(!(golf == report)) { _fun82156_ip = 89; continue _fun82156 }
 83:
            kilo = new Array(0);
            _fun82156_ip = 126; continue _fun82156;
 89:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            report = 25;
            report = options[report];
            options = oscar.bind(entity)(report);
            oscar = options.getAttachmentMimeTypes;
            report = backup.items;
            kilo = oscar.bind(options)(report);
 126:
            report = new Array(0);
            var _closure2_slot0 = report;
            yankee = new Array(0);
            var _closure2_slot1 = yankee;
            oscar = backup.items;
            if(!(golf != oscar)) { _fun82156_ip = 175; continue _fun82156 }
 152:
            options = backup.items;
            oscar = options.forEach;
            zulu = function(argFoo) {
                _fun82157: for(var _fun82157_ip = 0; ; ) switch(_fun82157_ip) {
 0:
                    entity = argFoo;
                    report = _closure2_slot0;
                    tango = report.push;
                    oscar = entity.postCompressionSize;
                    zulu = null;
                    golf = zulu != oscar;
                    zulu = 0;
                    if(!golf) { _fun82157_ip = 35; continue _fun82157 }
 32:
                    zulu = oscar;
 35:
                    zulu = tango.bind(report)(zulu);
                    zulu = _closure2_slot1;
                    mike = zulu.push;
                    entity = entity.preCompressionSize;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                }
            };
            zulu = oscar.bind(options)(zulu);
 175:
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            verify = 33;
            zulu = zulu[verify];
            romeo = oscar.bind(entity)(zulu);
            options = romeo.trackWithMetadata;
            zulu = _closure1_slot18;
            oscar = zulu.FILE_SIZE_LIMIT_EXCEEDED;
            zulu = {};
            zulu['user_individual_file_size_limit'] = offset;
            sizing = backup.attachmentsCount;
            zulu['num_attachments'] = sizing;
            zulu['pre_compression_file_sizes'] = yankee;
            sizing = backup.totalPreCompressionSize;
            zulu['pre_compression_aggregate_file_size'] = sizing;
            zulu['post_compression_file_sizes'] = report;
            sizing = backup.totalPostCompressionSize;
            zulu['post_compression_aggregate_file_size'] = sizing;
            zulu['attachment_mimetypes'] = kilo;
            kilo = tango;
            if(!(golf == kilo)) { _fun82156_ip = 295; continue _fun82156 }
 285:
            sizing = _closure1_slot21;
            kilo = sizing.ERROR_SOURCE_UNKNOWN;
 295:
            zulu['error_type'] = kilo;
            zulu = options.bind(romeo)(oscar, zulu);
            options = 0;
            if(foxtrot) { _fun82156_ip = 403; continue _fun82156 }
 311:
            oscar = backup.items;
            zulu = offset;
            if(!(golf != oscar)) { _fun82156_ip = 400; continue _fun82156 }
 324:
            oscar = _closure1_slot21;
            oscar = oscar.ERROR_SOURCE_UNKNOWN;
            zulu = offset;
            if(!(tango !== oscar)) { _fun82156_ip = 400; continue _fun82156 }
 341:
            oscar = global;
            golf = oscar.Math;
            oscar = golf.max;
            kilo = _closure1_slot21;
            kilo = kilo.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
            if(!(tango === kilo)) { _fun82156_ip = 371; continue _fun82156 }
 368:
            yankee = report;
 371:
            report = new Array(0);
            update = report;
            echo = yankee;
            result = 0;
            yankee = arraySpread(update, echo, result);
            update = oscar;
            echo = report;
            result = golf;
            zulu = apply(update, echo, result);
 400:
            options = zulu;
 403:
            zulu = _closure1_slot21;
            zulu = zulu.POSTCOMPRESSION_SUM_TOO_LARGE;
            report = tango === zulu;
            if(report) { _fun82156_ip = 434; continue _fun82156 }
 420:
            zulu = _closure1_slot21;
            zulu = zulu.PRECOMPRESSION_SUM_TOO_LARGE;
            report = tango === zulu;
 434:
            zulu = foxtrot;
            if(zulu) { _fun82156_ip = 468; continue _fun82156 }
 440:
            golf = _closure1_slot24;
            oscar = _closure1_slot22;
            oscar = oscar.TIER_2;
            oscar = golf[oscar];
            oscar = oscar.fileSize;
            zulu = options > oscar;
 468:
            if(zulu) { _fun82156_ip = 501; continue _fun82156 }
 471:
            golf = _closure1_slot0;
            yankee = _closure1_slot2;
            oscar = 34;
            oscar = yankee[oscar];
            oscar = golf.bind(entity)(oscar);
            oscar = oscar.MAX_TOTAL_ATTACHMENT_SIZE;
            zulu = options > oscar;
 501:
            if(zulu) { _fun82156_ip = 507; continue _fun82156 }
 504:
            zulu = report;
 507:
            if(zulu) { _fun82156_ip = 524; continue _fun82156 }
 510:
            oscar = _closure1_slot21;
            oscar = oscar.ERROR_SOURCE_UNKNOWN;
            zulu = tango === oscar;
 524:
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[verify];
            yankee = golf.bind(entity)(oscar);
            verify = yankee.trackWithMetadata;
            oscar = _closure1_slot18;
            golf = oscar.FILE_UPLOAD_ALERT_VIEWED;
            oscar = {};
            sizing = _closure1_slot25;
            if(zulu) { _fun82156_ip = 574; continue _fun82156 }
 566:
            kilo = sizing.NITRO_UPSELL;
            _fun82156_ip = 580; continue _fun82156;
 574:
            kilo = sizing.OVER_MAX_SIZE;
 580:
            oscar['alert_type'] = kilo;
            kilo = backup.attachmentsCount;
            oscar['num_attachments'] = kilo;
            kilo = backup.currentSize;
            oscar['total_attachment_size'] = kilo;
            kilo = backup.hasImage;
            oscar['has_image'] = kilo;
            backup = backup.hasVideo;
            oscar['has_video'] = backup;
            oscar['is_premium'] = foxtrot;
            backup = _closure1_slot0;
            kilo = _closure1_slot2;
            foxtrot = 35;
            foxtrot = kilo[foxtrot];
            backup = backup.bind(entity)(foxtrot);
            foxtrot = backup.getImageCompressionQuality;
            foxtrot = foxtrot.bind(backup)();
            oscar['image_compression_quality'] = foxtrot;
            foxtrot = _closure1_slot6;
            foxtrot = foxtrot.dataSavingMode;
            oscar['image_compression_setting_enabled'] = foxtrot;
            oscar = verify.bind(yankee)(golf, oscar);
            if(zulu) { _fun82156_ip = 859; continue _fun82156 }
 708:
            foxtrot = _closure1_slot1;
            backup = _closure1_slot2;
            zulu = 36;
            zulu = backup[zulu];
            golf = foxtrot.bind(entity)(zulu);
            oscar = golf.handleShowUpsellAlert;
            zulu = {};
            verify = _closure1_slot16;
            verify = verify.UPLOAD;
            zulu['initialUpsellKey'] = verify;
            verify = {};
            yankee = _closure1_slot17;
            yankee = yankee.FILE_UPLOAD_POPOUT;
            verify['section'] = yankee;
            zulu['analyticsLocation'] = verify;
            verify = new Array(1);
            echo = argBaz;
            update = verify;
            result = 0;
            romeo = arraySpread(update, echo, result);
            yankee = 37;
            yankee = backup[yankee];
            yankee = foxtrot.bind(entity)(yankee);
            yankee = yankee.FILE_UPLOAD_POPOUT;
            verify[romeo] = yankee;
            yankee = 1;
            yankee = romeo + yankee;
            zulu['analyticsLocations'] = verify;
            verify = {};
            yankee = _closure1_slot23;
            yankee = yankee.UPLOAD_ERROR_UPSELL;
            verify['type'] = yankee;
            zulu['analyticsProperties'] = verify;
            zulu['largestFileSize'] = options;
            zulu = oscar.bind(golf)(zulu);
            _fun82156_ip = 1282; continue _fun82156;
 859:
            zulu = _closure1_slot21;
            zulu = zulu.ERROR_SOURCE_UNKNOWN;
            if(!(tango !== zulu)) { _fun82156_ip = 1142; continue _fun82156 }
 876:
            options = _closure1_slot0;
            zulu = _closure1_slot2;
            tango = 27;
            oscar = zulu[tango];
            oscar = options.bind(entity)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            zulu = zulu[tango];
            zulu = options.bind(entity)(zulu);
            zulu = zulu.t;
            zulu = zulu./tGlcn;
            zulu = oscar.bind(golf)(zulu);
            foxtrot = _closure1_slot0;
            backup = _closure1_slot2;
            oscar = backup[tango];
            oscar = foxtrot.bind(entity)(oscar);
            options = oscar.intl;
            golf = options.formatToPlainString;
            tango = backup[tango];
            tango = foxtrot.bind(entity)(tango);
            tango = tango.t;
            if(report) { _fun82156_ip = 1048; continue _fun82156 }
 975:
            oscar = tango.fxEKdX;
            report = {};
            verify = 38;
            yankee = backup[verify];
            romeo = foxtrot.bind(entity)(yankee);
            yankee = romeo.formatSize;
            verify = backup[verify];
            verify = foxtrot.bind(entity)(verify);
            verify = verify.BYTE_IN_KB;
            offset = offset / verify;
            verify = {};
            kilo = true;
            verify['useKibibytes'] = kilo;
            verify = yankee.bind(romeo)(offset, verify);
            report['maxSize'] = verify;
            report = golf.bind(options)(oscar, report);
            _fun82156_ip = 1137; continue _fun82156;
 1048:
            oscar = tango.tUOJdH;
            tango = {};
            verify = 38;
            offset = backup[verify];
            romeo = foxtrot.bind(entity)(offset);
            yankee = romeo.formatSize;
            offset = 34;
            offset = backup[offset];
            offset = foxtrot.bind(entity)(offset);
            offset = offset.MAX_TOTAL_ATTACHMENT_SIZE;
            verify = backup[verify];
            verify = foxtrot.bind(entity)(verify);
            verify = verify.BYTE_IN_KB;
            offset = offset / verify;
            verify = {};
            foxtrot = true;
            verify['useKibibytes'] = foxtrot;
            verify = yankee.bind(romeo)(offset, verify);
            tango['maxSize'] = verify;
            report = golf.bind(options)(oscar, tango);
 1137:
            oscar = zulu;
            _fun82156_ip = 1241; continue _fun82156;
 1142:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 27;
            zulu = offset[tango];
            zulu = verify.bind(entity)(zulu);
            options = zulu.intl;
            golf = options.string;
            zulu = offset[tango];
            zulu = verify.bind(entity)(zulu);
            zulu = zulu.t;
            zulu = zulu.B3vFdX;
            oscar = golf.bind(options)(zulu);
            golf = offset[tango];
            golf = verify.bind(entity)(golf);
            options = golf.intl;
            golf = options.string;
            tango = offset[tango];
            tango = verify.bind(entity)(tango);
            tango = tango.t;
            tango = tango.zMEjJi;
            report = golf.bind(options)(tango);
 1241:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 26;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.show;
            mike = {};
            mike['title'] = oscar;
            mike['body'] = report;
            mike = zulu.bind(tango)(mike);
 1282:
            return entity;
        }
    };
    var _closure1_slot31 = options;
    mike = global;
    romeo = mike.Object;
    yankee = romeo.defineProperty;
    verify = {};
    entity = true;
    verify['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, verify);
    entity = 0;
    verify = oscar[entity];
    entity = undefined;
    verify = offset.bind(entity)(verify);
    var _closure1_slot3 = verify;
    verify = 1;
    verify = oscar[verify];
    verify = offset.bind(entity)(verify);
    var _closure1_slot4 = verify;
    verify = 2;
    verify = oscar[verify];
    verify = offset.bind(entity)(verify);
    var _closure1_slot5 = verify;
    verify = 3;
    verify = oscar[verify];
    verify = offset.bind(entity)(verify);
    var _closure1_slot6 = verify;
    verify = 4;
    verify = oscar[verify];
    verify = offset.bind(entity)(verify);
    var _closure1_slot7 = verify;
    verify = 5;
    verify = oscar[verify];
    verify = offset.bind(entity)(verify);
    var _closure1_slot8 = verify;
    verify = 6;
    yankee = oscar[verify];
    yankee = offset.bind(entity)(yankee);
    var _closure1_slot9 = yankee;
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    verify = verify.DraftType;
    var _closure1_slot10 = verify;
    verify = 7;
    verify = oscar[verify];
    verify = offset.bind(entity)(verify);
    var _closure1_slot11 = verify;
    verify = 8;
    verify = oscar[verify];
    verify = offset.bind(entity)(verify);
    var _closure1_slot12 = verify;
    verify = 9;
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    offset = verify.MAX_UPLOAD_COUNT;
    var _closure1_slot13 = offset;
    offset = verify.Endpoints;
    var _closure1_slot14 = offset;
    offset = verify.AbortCodes;
    var _closure1_slot15 = offset;
    offset = verify.UpsellTypes;
    var _closure1_slot16 = offset;
    offset = verify.AnalyticsSections;
    var _closure1_slot17 = offset;
    offset = verify.AnalyticEvents;
    var _closure1_slot18 = offset;
    offset = verify.MessageTypes;
    var _closure1_slot19 = offset;
    verify = verify.MessageFlags;
    var _closure1_slot20 = verify;
    verify = 10;
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    verify = verify.FileUploadErrorTypes;
    var _closure1_slot21 = verify;
    verify = 11;
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    offset = verify.PremiumTypes;
    var _closure1_slot22 = offset;
    offset = verify.PremiumUpsellTypes;
    var _closure1_slot23 = offset;
    verify = verify.PremiumUserLimits;
    var _closure1_slot24 = verify;
    verify = {};
    offset = 'Nitro Upsell';
    verify['NITRO_UPSELL'] = offset;
    offset = 'Over Max Size';
    verify['OVER_MAX_SIZE'] = offset;
    var _closure1_slot25 = verify;
    mike = mike.Set;
    verify = mike.prototype;
    verify = Object.create(verify, {constructor: {value: mike}});
    sizing = verify;
    mike = new sizing[mike](kilo);
    mike = mike instanceof Object ? mike : verify;
    var _closure1_slot26 = mike;
    mike = {};
    mike['showFileSizeError'] = options;
    mike['uploadLocalFiles'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: uploadVoiceMessage
        _fun82158: for(var _fun82158_ip = 0; ; ) switch(_fun82158_ip) {
 0:
            options = argFoo;
            verify = argBar;
            mike = _closure1_slot7;
            entity = mike.getToken;
            golf = entity.bind(mike)();
            entity = null;
            if(!(entity != golf)) { _fun82158_ip = 292; continue _fun82158 }
 32:
            zulu = _closure1_slot29;
            mike = {};
            mike['channel'] = options;
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 30;
            offset = oscar[entity];
            entity = undefined;
            offset = report.bind(entity)(offset);
            yankee = offset.CloudUpload;
            offset = {};
            offset['uri'] = verify;
            offset['originalUri'] = verify;
            verify = 'audio/ogg';
            offset['mimeType'] = verify;
            verify = 'voice-message.ogg';
            offset['filename'] = verify;
            verify = 31;
            verify = oscar[verify];
            verify = report.bind(entity)(verify);
            verify = verify.UploadPlatform;
            verify = verify.REACT_NATIVE;
            offset['platform'] = verify;
            verify = argBaz;
            offset['durationSecs'] = verify;
            verify = argCorge;
            offset['waveform'] = verify;
            foxtrot = options.id;
            verify = yankee.prototype;
            verify = Object.create(verify, {constructor: {value: yankee}});
            kilo = verify;
            backup = offset;
            options = new kilo[yankee](backup, foxtrot, romeo);
            verify = options instanceof Object ? options : verify;
            options = new Array(1);
            options[0] = verify;
            mike['items'] = options;
            mike['token'] = golf;
            golf = {'content': '', 'tts': false};
            options = new Array(0);
            golf['invalidEmojis'] = options;
            options = new Array(0);
            golf['validNonShortcutEmojis'] = options;
            mike['parsedMessage'] = golf;
            tango = _closure1_slot20;
            tango = tango.IS_VOICE_MESSAGE;
            mike['flags'] = tango;
            tango = 12;
            tango = oscar[tango];
            report = report.bind(entity)(tango);
            tango = report.createNonce;
            tango = tango.bind(report)();
            mike['nonce'] = tango;
            tango = function() { // Original name: maxSizeCallback
                entity = undefined;
                return entity;
            };
            mike['maxSizeCallback'] = tango;
            entity = zulu.bind(entity)(mike);
 292:
            entity = undefined;
            return entity;
        }
    };
    mike['uploadVoiceMessage'] = golf;
    golf = function(argFoo, argBar) { // Original name: restoreFailedUpload
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 24;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'UPLOAD_RESTORE_FAILED_UPLOAD';
        mike['type'] = report;
        report = argFoo;
        mike['messageId'] = report;
        report = argBar;
        mike['file'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['restoreFailedUpload'] = golf;
    golf = function(argFoo) { // Original name: cancel
        _fun82161: for(var _fun82161_ip = 0; ; ) switch(_fun82161_ip) {
 0:
            oscar = argFoo;
            zulu = _closure1_slot1;
            entity = _closure1_slot2;
            tango = 24;
            mike = entity[tango];
            entity = undefined;
            golf = zulu.bind(entity)(mike);
            zulu = golf.dispatch;
            mike = {};
            options = 'UPLOAD_CANCEL_REQUEST';
            mike['type'] = options;
            mike['file'] = oscar;
            mike = zulu.bind(golf)(mike);
            mike = oscar.draftContent;
            golf = null;
            mike = golf != mike;
            if(!mike) { _fun82161_ip = 77; continue _fun82161 }
 68:
            zulu = oscar.channelId;
            mike = golf != zulu;
 77:
            if(!mike) { _fun82161_ip = 193; continue _fun82161 }
 80:
            options = _closure1_slot9;
            golf = options.getDraft;
            zulu = oscar.channelId;
            mike = _closure1_slot10;
            mike = mike.ChannelMessage;
            zulu = golf.bind(options)(zulu, mike);
            mike = '';
            if(!(mike === zulu)) { _fun82161_ip = 193; continue _fun82161 }
 119:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            mike = mike[tango];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            golf = 'DRAFT_SAVE';
            mike['type'] = golf;
            golf = oscar.channelId;
            mike['channelId'] = golf;
            oscar = oscar.draftContent;
            mike['draft'] = oscar;
            report = _closure1_slot10;
            report = report.ChannelMessage;
            mike['draftType'] = report;
            mike = zulu.bind(tango)(mike);
 193:
            return entity;
        }
    };
    mike['cancel'] = golf;
    tango = function(argFoo, argBar) { // Original name: cancelUploadItem
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 24;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'UPLOAD_ITEM_CANCEL_REQUEST';
        mike['type'] = report;
        report = argFoo;
        mike['file'] = report;
        report = argBar;
        mike['itemId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['cancelUploadItem'] = tango;
    tango = 39;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/native/UploadActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();