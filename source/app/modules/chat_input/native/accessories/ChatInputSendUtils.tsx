// app/modules/chat_input/native/accessories/ChatInputSendUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun100429: for(var _fun100429_ip = 0; ; ) switch(_fun100429_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun100429_ip = 46; continue _fun100429 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun100429_ip = 55; continue _fun100429 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun100429_ip = 345; continue _fun100429 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun100429_ip = 323; continue _fun100429 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun100429_ip = 283; continue _fun100429 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun100429_ip = 270; continue _fun100429 }
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
            if(!golf) { _fun100429_ip = 163; continue _fun100429 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun100429_ip = 179; continue _fun100429 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun100429_ip = 249; continue _fun100429 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun100429_ip = 249; continue _fun100429 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun100429_ip = 234; continue _fun100429 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun100429_ip = 247; continue _fun100429 }
 234:
            verify = _closure1_slot14;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun100429_ip = 265; continue _fun100429;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun100429_ip = 283; continue _fun100429;
 270:
            golf = _closure1_slot14;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun100429_ip = 323; continue _fun100429 }
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
            if(!tango) { _fun100429_ip = 330; continue _fun100429 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun100430: for(var _fun100430_ip = 0; ; ) switch(_fun100430_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun100430_ip = 56; continue _fun100430 }
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
                    _fun100430_ip = 67; continue _fun100430;
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
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun100431: for(var _fun100431_ip = 0; ; ) switch(_fun100431_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun100431_ip = 23; continue _fun100431 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun100431_ip = 33; continue _fun100431 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun100431_ip = 70; continue _fun100431 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun100431_ip = 55; continue _fun100431 }
 70:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: chatInputSendMessage
        _fun100432: for(var _fun100432_ip = 0; ; ) switch(_fun100432_ip) {
 0:
            mike = argFoo;
            foxtrot = mike.text;
            var _closure2_slot0 = foxtrot;
            romeo = mike.parsedMessage;
            yankee = mike.tts;
            entity = undefined;
            if(!(yankee === entity)) { _fun100432_ip = 34; continue _fun100432 }
 32:
            yankee = false;
 34:
            output = mike.source;
            mike = mike.params;
            offset = mike.channel;
            var _closure2_slot1 = offset;
            golf = mike.chatInputRef;
            zulu = mike.hasAttachmentsToUpload;
            kilo = mike.pendingReply;
            report = mike.analyticsLocations;
            var _closure2_slot2 = entity;
            options = '';
            if(!(options === foxtrot)) { _fun100432_ip = 154; continue _fun100432 }
 90:
            tango = _closure1_slot1;
            verify = _closure1_slot2;
            mike = 8;
            mike = verify[mike];
            verify = tango.bind(entity)(mike);
            tango = verify.addBreadcrumb;
            mike = {};
            backup = global;
            backup = backup.HermesInternal;
            sizing = backup.concat;
            backup = 'Empty text from ';
            backup = sizing.bind(backup)(output);
            mike['message'] = backup;
            mike = tango.bind(verify)(mike);
 154:
            verify = _closure1_slot1;
            backup = _closure1_slot2;
            tango = 9;
            tango = backup[tango];
            sizing = verify.bind(entity)(tango);
            backup = sizing.saveDraft;
            verify = offset.id;
            tango = _closure1_slot5;
            tango = tango.ChannelMessage;
            tango = backup.bind(sizing)(verify, options, tango);
            backup = golf.current;
            tango = null;
            if(!(tango != backup)) { _fun100432_ip = 226; continue _fun100432 }
 216:
            verify = backup.clearText;
            verify = verify.bind(backup)();
 226:
            verify = golf.current;
            if(!(tango != verify)) { _fun100432_ip = 245; continue _fun100432 }
 235:
            golf = verify.showSideActions;
            golf = golf.bind(verify)();
 245:
            verify = _closure1_slot0;
            backup = _closure1_slot2;
            golf = 10;
            golf = backup[golf];
            backup = verify.bind(entity)(golf);
            verify = backup.handleLegacyCommands;
            golf = {};
            golf['channel'] = offset;
            sizing = false;
            golf['isEdit'] = sizing;
            sizing = verify.bind(backup)(foxtrot, golf);
            backup = foxtrot;
            golf = romeo;
            verify = yankee;
            if(!(tango != sizing)) { _fun100432_ip = 351; continue _fun100432 }
 303:
            output = sizing.content;
            if(!(tango != output)) { _fun100432_ip = 326; continue _fun100432 }
 312:
            output = sizing.content;
            _closure2_slot0 = output;
            foxtrot = output;
            romeo = undefined;
 326:
            output = sizing.tts;
            if(!(tango != output)) { _fun100432_ip = 342; continue _fun100432 }
 336:
            yankee = sizing.tts;
 342:
            verify = yankee;
            backup = foxtrot;
            golf = romeo;
 351:
            if(!(tango == golf)) { _fun100432_ip = 387; continue _fun100432 }
 355:
            romeo = _closure1_slot1;
            foxtrot = _closure1_slot2;
            yankee = 11;
            yankee = foxtrot[yankee];
            romeo = romeo.bind(entity)(yankee);
            yankee = romeo.parse;
            golf = yankee.bind(romeo)(offset, backup);
 387:
            golf['tts'] = verify;
            foxtrot = _closure1_slot7;
            romeo = foxtrot.getUploads;
            yankee = offset.id;
            verify = _closure1_slot5;
            verify = verify.ChannelMessage;
            verify = romeo.bind(foxtrot)(yankee, verify);
            _closure2_slot2 = verify;
            if(zulu) { _fun100432_ip = 603; continue _fun100432 }
 434:
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            zulu = 12;
            zulu = romeo[zulu];
            romeo = yankee.bind(entity)(zulu);
            yankee = romeo.deletePendingReply;
            zulu = offset.id;
            zulu = yankee.bind(romeo)(zulu);
            zulu = golf.content;
            if(!(options === zulu)) { _fun100432_ip = 532; continue _fun100432 }
 479:
            yankee = _closure1_slot1;
            romeo = _closure1_slot2;
            zulu = 8;
            zulu = romeo[zulu];
            romeo = yankee.bind(entity)(zulu);
            yankee = romeo.addBreadcrumb;
            zulu = {};
            foxtrot = 'Parsed empty message content from text';
            zulu['message'] = foxtrot;
            foxtrot = {};
            foxtrot['text'] = backup;
            zulu['data'] = foxtrot;
            zulu = yankee.bind(romeo)(zulu);
 532:
            backup = _closure1_slot1;
            sizing = _closure1_slot2;
            zulu = 13;
            yankee = sizing[zulu];
            foxtrot = backup.bind(entity)(yankee);
            romeo = foxtrot.sendMessage;
            yankee = offset.id;
            zulu = sizing[zulu];
            backup = backup.bind(entity)(zulu);
            zulu = backup.getSendMessageOptionsForReply;
            echo = zulu.bind(backup)(kilo);
            vacuum = foxtrot;
            control = yankee;
            source = golf;
            update = undefined;
            zulu = vacuum[romeo](control, source, update, echo, result);
            _fun100432_ip = 742; continue _fun100432;
 603:
            if(!(tango != verify)) { _fun100432_ip = 742; continue _fun100432 }
 610:
            yankee = _closure1_slot4;
            zulu = yankee.getToken;
            zulu = zulu.bind(yankee)();
            tango = tango != zulu;
            if(!tango) { _fun100432_ip = 634; continue _fun100432 }
 631:
            options = zulu;
 634:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            yankee = 14;
            yankee = tango[yankee];
            foxtrot = zulu.bind(entity)(yankee);
            romeo = foxtrot.clearAll;
            yankee = offset.id;
            mike = _closure1_slot5;
            mike = mike.ChannelMessage;
            mike = romeo.bind(foxtrot)(yankee, mike);
            mike = 15;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.uploadLocalFiles;
            mike = {};
            mike['channel'] = offset;
            mike['items'] = verify;
            mike['token'] = options;
            mike['parsedMessage'] = golf;
            oscar = function() { // Original name: maxSizeCallback
                oscar = _closure1_slot1;
                golf = _closure1_slot2;
                entity = 14;
                zulu = golf[entity];
                entity = undefined;
                verify = oscar.bind(entity)(zulu);
                options = verify.setUploads;
                report = {};
                tango = _closure2_slot1;
                offset = tango.id;
                report['channelId'] = offset;
                offset = _closure2_slot2;
                report['uploads'] = offset;
                offset = _closure1_slot5;
                offset = offset.ChannelMessage;
                report['draftType'] = offset;
                offset = true;
                report['resetState'] = offset;
                report = options.bind(verify)(report);
                report = 9;
                report = golf[report];
                oscar = oscar.bind(entity)(report);
                report = oscar.saveDraft;
                tango = tango.id;
                zulu = _closure2_slot0;
                mike = _closure1_slot5;
                mike = mike.ChannelMessage;
                mike = report.bind(oscar)(tango, zulu, mike);
                return entity;
            };
            mike['maxSizeCallback'] = oscar;
            mike['analyticsLocations'] = report;
            mike = zulu.bind(tango)(mike);
 742:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _chatInputSendApplicationCommand
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun100436: for(var _fun100436_ip = 0; ; ) switch(_fun100436_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun100436_ip = 305; continue _fun100436 }
 13:
                    tango = mike.applicationCommand;
                    oscar = tango.command;
                    offset = tango.optionValues;
                    golf = mike.params;
                    tango = undefined;
                    SaveGenerator(address=43);
 41:
                    return tango;
 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun100436_ip = 302; continue _fun100436 }
 52:
                    foxtrot = golf.channel;
                    zulu = golf.chatInputRef;
                    report = zulu.current;
                    options = null;
                    if(!(options != report)) { _fun100436_ip = 84; continue _fun100436 }
 74:
                    zulu = report.clearText;
                    zulu = zulu.bind(report)();
 84:
                    verify = _closure1_slot1;
                    romeo = _closure1_slot2;
                    zulu = 27;
                    zulu = romeo[zulu];
                    verify = verify.bind(tango)(zulu);
                    zulu = {};
                    zulu['command'] = oscar;
                    zulu['optionValues'] = offset;
                    yankee = _closure1_slot0;
                    offset = 28;
                    offset = romeo[offset];
                    romeo = yankee.bind(tango)(offset);
                    yankee = romeo.getCommandContext;
                    offset = {};
                    offset['channel'] = foxtrot;
                    foxtrot = 'channel';
                    offset['type'] = foxtrot;
                    offset = yankee.bind(romeo)(offset);
                    zulu['context'] = offset;
                    offset = function(argFoo, argBar) { // Original name: maxSizeCallback
                        _fun100437: for(var _fun100437_ip = 0; ; ) switch(_fun100437_ip) {
 0:
                            mike = _closure1_slot8;
                            entity = mike.getCurrentUser;
                            tango = entity.bind(mike)();
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 17;
                            mike = mike[entity];
                            entity = undefined;
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.canUploadLargeFiles;
                            mike = mike.bind(zulu)(tango);
                            zulu = _closure1_slot1;
                            yankee = _closure1_slot2;
                            if(mike) { _fun100437_ip = 189; continue _fun100437 }
 63:
                            mike = 18;
                            mike = yankee[mike];
                            oscar = zulu.bind(entity)(mike);
                            tango = oscar.handleShowUpsellAlert;
                            mike = {};
                            golf = _closure1_slot11;
                            golf = golf.UPLOAD;
                            mike['initialUpsellKey'] = golf;
                            golf = {};
                            options = _closure1_slot10;
                            options = options.FILE_UPLOAD_POPOUT;
                            golf['section'] = options;
                            mike['analyticsLocation'] = golf;
                            golf = 30;
                            golf = yankee[golf];
                            golf = zulu.bind(entity)(golf);
                            options = golf.FILE_UPLOAD_POPOUT;
                            golf = new Array(1);
                            golf[0] = options;
                            mike['analyticsLocations'] = golf;
                            golf = {};
                            options = _closure1_slot12;
                            options = options.UPLOAD_ERROR_UPSELL;
                            golf['type'] = options;
                            mike['analyticsProperties'] = golf;
                            golf = argBar;
                            mike['largestFileSize'] = golf;
                            mike = tango.bind(oscar)(mike);
                            _fun100437_ip = 351; continue _fun100437;
 189:
                            mike = 19;
                            mike = yankee[mike];
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.show;
                            mike = {};
                            offset = _closure1_slot0;
                            report = 20;
                            oscar = yankee[report];
                            oscar = offset.bind(entity)(oscar);
                            options = oscar.intl;
                            golf = options.string;
                            oscar = yankee[report];
                            oscar = offset.bind(entity)(oscar);
                            oscar = oscar.t;
                            oscar = oscar./tGlcn;
                            oscar = golf.bind(options)(oscar);
                            mike['title'] = oscar;
                            oscar = yankee[report];
                            oscar = offset.bind(entity)(oscar);
                            options = oscar.intl;
                            golf = options.formatToPlainString;
                            report = yankee[report];
                            report = offset.bind(entity)(report);
                            report = report.t;
                            oscar = report.fxEKdX;
                            report = {};
                            verify = 29;
                            verify = yankee[verify];
                            yankee = offset.bind(entity)(verify);
                            offset = yankee.sizeString;
                            verify = argFoo;
                            verify = offset.bind(yankee)(verify);
                            report['maxSize'] = verify;
                            report = golf.bind(options)(oscar, report);
                            mike['body'] = report;
                            mike = zulu.bind(tango)(mike);
 351:
                            return entity;
                        }
                    };
                    zulu['maxSizeCallback'] = offset;
                    zulu = verify.bind(tango)(zulu);
                    SaveGenerator(address=187);
 185:
                    return zulu;
 187:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(verify) { _fun100436_ip = 299; continue _fun100436 }
 193:
                    verify = oscar.inputType;
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    oscar = 31;
                    oscar = yankee[oscar];
                    oscar = offset.bind(tango)(oscar);
                    oscar = oscar.ApplicationCommandInputType;
                    oscar = oscar.BUILT_IN_TEXT;
                    oscar = verify === oscar;
                    if(!oscar) { _fun100436_ip = 242; continue _fun100436 }
 238:
                    oscar = options != zulu;
 242:
                    if(!oscar) { _fun100436_ip = 296; continue _fun100436 }
 245:
                    oscar = _closure1_slot15;
                    report = {};
                    options = zulu.content;
                    report['text'] = options;
                    report['parsedMessage'] = tango;
                    options = zulu.tts;
                    report['tts'] = options;
                    options = 'handleSendApplicationCommand';
                    report['source'] = options;
                    report['params'] = golf;
                    report = oscar.bind(tango)(report);
 296:
                    return tango;
 299:
                    return zulu;
 302:
                    return mike;
 305:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
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
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.DraftType;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot9 = golf;
    golf = tango.AnalyticsSections;
    var _closure1_slot10 = golf;
    tango = tango.UpsellTypes;
    var _closure1_slot11 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PremiumUpsellTypes;
    var _closure1_slot12 = tango;
    tango = 32;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/chat_input/native/accessories/ChatInputSendUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: chatInputHandleSendText
        _fun100438: for(var _fun100438_ip = 0; ; ) switch(_fun100438_ip) {
 0:
            entity = argFoo;
            romeo = entity.text;
            var _closure2_slot0 = romeo;
            oscar = entity.params;
            var _closure2_slot1 = oscar;
            entity = undefined;
            var _closure2_slot2 = entity;
            yankee = oscar.channel;
            verify = oscar.analyticsLocations;
            tango = oscar.hasAttachmentsToUpload;
            golf = _closure1_slot6;
            report = golf.isChannelOnCooldown;
            report = report.bind(golf)(yankee);
            if(report) { _fun100438_ip = 1066; continue _fun100438 }
 71:
            golf = romeo.length;
            report = 0;
            if(!(report === golf)) { _fun100438_ip = 88; continue _fun100438 }
 82:
            if(!tango) { _fun100438_ip = 1066; continue _fun100438 }
 88:
            golf = _closure1_slot1;
            tango = _closure1_slot2;
            report = 11;
            report = tango[report];
            golf = golf.bind(entity)(report);
            report = golf.parse;
            options = report.bind(golf)(yankee, romeo);
            _closure2_slot2 = options;
            report = options.content;
            golf = report.length;
            report = _closure1_slot0;
            backup = 16;
            tango = tango[backup];
            report = report.bind(entity)(tango);
            tango = report.getMaxMessageLength;
            tango = tango.bind(report)();
            if(!(!(golf > tango))) { _fun100438_ip = 715; continue _fun100438 }
 167:
            report = _closure1_slot13;
            offset = _closure1_slot0;
            foxtrot = _closure1_slot2;
            tango = 22;
            tango = foxtrot[tango];
            tango = offset.bind(entity)(tango);
            tango = tango.RESTRICTIONS;
            kilo = report.bind(entity)(tango);
            offset = kilo.bind(entity)();
            report = offset.done;
            tango = null;
            foxtrot = false;
            if(report) { _fun100438_ip = 488; continue _fun100438 }
 221:
            report = offset.value;
            sizing = report.check;
            report = yankee.getGuildId;
            report = report.bind(yankee)();
            report = tango != report;
            sizing = sizing.bind(entity)(romeo, yankee, report);
            if(!(foxtrot === sizing)) { _fun100438_ip = 277; continue _fun100438 }
 257:
            output = kilo.bind(entity)();
            report = output.done;
            offset = output;
            if(report) { _fun100438_ip = 488; continue _fun100438 }
 275:
            _fun100438_ip = 221; continue _fun100438;
 277:
            offset = _closure1_slot1;
            echo = _closure1_slot2;
            report = 19;
            report = echo[report];
            foxtrot = offset.bind(entity)(report);
            offset = foxtrot.show;
            report = {};
            result = _closure1_slot0;
            kilo = 20;
            output = echo[kilo];
            output = result.bind(entity)(output);
            source = output.intl;
            update = source.string;
            output = echo[kilo];
            output = result.bind(entity)(output);
            output = output.t;
            output = output.mY3Y39;
            output = update.bind(source)(output);
            report['title'] = output;
            sizing = sizing.body;
            report['body'] = sizing;
            sizing = echo[kilo];
            sizing = result.bind(entity)(sizing);
            update = sizing.intl;
            output = update.string;
            sizing = echo[kilo];
            sizing = result.bind(entity)(sizing);
            sizing = sizing.t;
            sizing = sizing.KJnHq6;
            sizing = output.bind(update)(sizing);
            report['confirmText'] = sizing;
            sizing = function() { // Original name: onConfirm
                zulu = _closure1_slot15;
                mike = {};
                entity = _closure2_slot0;
                mike['text'] = entity;
                entity = _closure2_slot2;
                mike['parsedMessage'] = entity;
                entity = undefined;
                mike['tts'] = entity;
                report = 'alert onConfirm';
                mike['source'] = report;
                tango = _closure2_slot1;
                mike['params'] = tango;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            report['onConfirm'] = sizing;
            sizing = echo[kilo];
            sizing = result.bind(entity)(sizing);
            output = sizing.intl;
            sizing = output.string;
            kilo = echo[kilo];
            kilo = result.bind(entity)(kilo);
            kilo = kilo.t;
            kilo = kilo.fsBWmZ;
            kilo = sizing.bind(output)(kilo);
            report['cancelText'] = kilo;
            report = offset.bind(foxtrot)(report);
            report = undefined;
            return report;
 488:
            kilo = _closure1_slot7;
            foxtrot = kilo.getUploads;
            offset = yankee.id;
            report = _closure1_slot5;
            report = report.ChannelMessage;
            offset = foxtrot.bind(kilo)(offset, report);
            if(!(tango != offset)) { _fun100438_ip = 563; continue _fun100438 }
 523:
            report = _closure1_slot0;
            foxtrot = _closure1_slot2;
            tango = 23;
            tango = foxtrot[tango];
            foxtrot = report.bind(entity)(tango);
            report = foxtrot.shouldShowAddMediaToOriginalPostModal;
            tango = yankee.id;
            tango = report.bind(foxtrot)(offset, tango);
            if(tango) { _fun100438_ip = 608; continue _fun100438 }
 563:
            report = _closure1_slot15;
            tango = {};
            tango['text'] = romeo;
            tango['parsedMessage'] = options;
            tango['tts'] = entity;
            options = 'handleSendMessage';
            tango['source'] = options;
            tango['params'] = oscar;
            tango = report.bind(entity)(tango);
            _fun100438_ip = 1066; continue _fun100438;
 608:
            oscar = _closure1_slot1;
            tango = _closure1_slot2;
            report = 24;
            report = tango[report];
            options = oscar.bind(entity)(report);
            oscar = options.openLazy;
            romeo = _closure1_slot0;
            report = 26;
            report = tango[report];
            romeo = romeo.bind(entity)(report);
            report = 25;
            report = tango[report];
            tango = tango.paths;
            report = romeo.bind(entity)(report, tango);
            tango = {};
            yankee = yankee.id;
            tango['threadId'] = yankee;
            tango['attachments'] = offset;
            mike = function() { // Original name: sendMessage
                zulu = _closure1_slot15;
                mike = {};
                entity = _closure2_slot0;
                mike['text'] = entity;
                entity = _closure2_slot2;
                mike['parsedMessage'] = entity;
                entity = undefined;
                mike['tts'] = entity;
                report = 'AddMediaToOriginalForumPostActionSheet';
                mike['source'] = report;
                tango = _closure2_slot1;
                mike['params'] = tango;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            tango['sendMessage'] = mike;
            mike = 'add-media-to-original-forum-post';
            mike = oscar.bind(options)(report, mike, tango);
            _fun100438_ip = 1066; continue _fun100438;
 715:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            mike = 17;
            mike = report[mike];
            report = tango.bind(entity)(mike);
            tango = report.canUseIncreasedMessageLength;
            oscar = _closure1_slot8;
            mike = oscar.getCurrentUser;
            mike = mike.bind(oscar)();
            mike = tango.bind(report)(mike);
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            if(mike) { _fun100438_ip = 850; continue _fun100438 }
 770:
            mike = 18;
            mike = oscar[mike];
            options = report.bind(entity)(mike);
            tango = options.handleShowUpsellAlert;
            mike = {};
            offset = _closure1_slot11;
            offset = offset.LONGER_MESSAGE;
            mike['initialUpsellKey'] = offset;
            offset = {};
            mike['analyticsLocation'] = offset;
            mike['analyticsLocations'] = verify;
            verify = {};
            offset = _closure1_slot12;
            offset = offset.MESSAGE_LENGTH_UPSELL;
            verify['type'] = offset;
            mike['analyticsProperties'] = verify;
            mike = tango.bind(options)(mike);
            mike = undefined;
            _fun100438_ip = 1064; continue _fun100438;
 850:
            tango = 19;
            tango = oscar[tango];
            verify = report.bind(entity)(tango);
            options = verify.show;
            tango = {};
            kilo = _closure1_slot0;
            offset = 20;
            yankee = oscar[offset];
            yankee = kilo.bind(entity)(yankee);
            foxtrot = yankee.intl;
            romeo = foxtrot.string;
            yankee = oscar[offset];
            yankee = kilo.bind(entity)(yankee);
            yankee = yankee.t;
            yankee = yankee.l8rYLi;
            yankee = romeo.bind(foxtrot)(yankee);
            tango['title'] = yankee;
            yankee = oscar[offset];
            yankee = kilo.bind(entity)(yankee);
            foxtrot = yankee.intl;
            romeo = foxtrot.formatToPlainString;
            offset = oscar[offset];
            offset = kilo.bind(entity)(offset);
            offset = offset.t;
            yankee = offset.FfjF19;
            offset = {};
            offset['currentLength'] = golf;
            backup = oscar[backup];
            kilo = kilo.bind(entity)(backup);
            backup = kilo.getMaxMessageLength;
            backup = backup.bind(kilo)();
            offset['maxLength'] = backup;
            offset = romeo.bind(foxtrot)(yankee, offset);
            tango['body'] = offset;
            tango = options.bind(verify)(tango);
            tango = 21;
            tango = oscar[tango];
            oscar = report.bind(entity)(tango);
            report = oscar.track;
            zulu = _closure1_slot9;
            tango = zulu.OPEN_MODAL;
            zulu = {};
            options = 'Message Too Long Alert iOS';
            zulu['type'] = options;
            zulu['message_content_length'] = golf;
            zulu = report.bind(oscar)(tango, zulu);
            mike = undefined;
 1064:
            return mike;
 1066:
            return entity;
        }
    };
    zulu['chatInputHandleSendText'] = tango;
    tango = function(argFoo) { // Original name: chatInputCreateThread
        _fun100441: for(var _fun100441_ip = 0; ; ) switch(_fun100441_ip) {
 0:
            entity = argFoo;
            zulu = entity.text;
            mike = entity.threadCreationCallback;
            report = zulu.length;
            oscar = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 16;
            tango = tango[entity];
            entity = undefined;
            oscar = oscar.bind(entity)(tango);
            tango = oscar.getMaxMessageLength;
            tango = tango.bind(oscar)();
            if(!(report > tango)) { _fun100441_ip = 178; continue _fun100441 }
 58:
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            tango = 17;
            tango = oscar[tango];
            oscar = report.bind(entity)(tango);
            report = oscar.canUseIncreasedMessageLength;
            golf = _closure1_slot8;
            tango = golf.getCurrentUser;
            tango = tango.bind(golf)();
            tango = report.bind(oscar)(tango);
            if(tango) { _fun100441_ip = 178; continue _fun100441 }
 105:
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            tango = 18;
            tango = oscar[tango];
            oscar = report.bind(entity)(tango);
            report = oscar.handleShowUpsellAlert;
            tango = {};
            golf = _closure1_slot11;
            golf = golf.LONGER_MESSAGE;
            tango['initialUpsellKey'] = golf;
            golf = {};
            options = _closure1_slot12;
            options = options.MESSAGE_LENGTH_UPSELL;
            golf['type'] = options;
            tango['analyticsProperties'] = golf;
            tango = report.bind(oscar)(tango);
            tango = undefined;
            return tango;
 178:
            mike = mike.bind(entity)(zulu);
            return entity;
        }
    };
    zulu['chatInputCreateThread'] = tango;
    mike = function() { // Original name: chatInputSendApplicationCommand
        entity = undefined;
        tango = _closure1_slot16;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['chatInputSendApplicationCommand'] = mike;
    return entity;
})();