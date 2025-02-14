// app/modules/messages/native/renderer/transformUploaderAttachments.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.AttachmentType;
    var _closure1_slot2 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/transformUploaderAttachments.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: createUploaderAttachments
        _fun69351: for(var _fun69351_ip = 0; ; ) switch(_fun69351_ip) {
 0:
            mike = argFoo;
            entity = mike.uploaderFile;
            var _closure2_slot0 = entity;
            tango = mike.isFailedMessage;
            var _closure2_slot1 = tango;
            mike = mike.shouldInlineAttachmentMedia;
            var _closure2_slot2 = mike;
            report = entity.items;
            mike = null;
            tango = mike == report;
            entity = undefined;
            if(tango) { _fun69351_ip = 69; continue _fun69351 }
 52:
            tango = report.map;
            zulu = function(argFoo) {
                _fun69352: for(var _fun69352_ip = 0; ; ) switch(_fun69352_ip) {
 0:
                    report = argFoo;
                    entity = report.filename;
                    tango = null;
                    mike = tango != entity;
                    options = '';
                    backup = options;
                    if(!mike) { _fun69352_ip = 28; continue _fun69352 }
 25:
                    backup = entity;
 28:
                    oscar = report.item;
                    entity = oscar.originalUri;
                    mike = tango != entity;
                    sizing = options;
                    if(!mike) { _fun69352_ip = 52; continue _fun69352 }
 49:
                    sizing = entity;
 52:
                    golf = _closure1_slot0;
                    verify = _closure1_slot1;
                    entity = 1;
                    offset = verify[entity];
                    mike = undefined;
                    yankee = golf.bind(mike)(offset);
                    offset = yankee.isImageFile;
                    foxtrot = offset.bind(yankee)(backup);
                    offset = verify[entity];
                    yankee = golf.bind(mike)(offset);
                    offset = yankee.isVideoFile;
                    romeo = offset.bind(yankee)(backup);
                    entity = verify[entity];
                    golf = golf.bind(mike)(entity);
                    entity = golf.isAudioFile;
                    yankee = entity.bind(golf)(backup);
                    entity = oscar.progress;
                    golf = tango != entity;
                    kilo = 0;
                    output = 0;
                    if(!golf) { _fun69352_ip = 148; continue _fun69352 }
 145:
                    output = entity;
 148:
                    golf = oscar.compressionProgress;
                    verify = tango != golf;
                    entity = 0;
                    if(!verify) { _fun69352_ip = 166; continue _fun69352 }
 163:
                    entity = golf;
 166:
                    verify = 0.7;
                    result = verify;
                    if(!(kilo === entity)) { _fun69352_ip = 195; continue _fun69352 }
 183:
                    golf = output > kilo;
                    result = verify;
                    if(!golf) { _fun69352_ip = 195; continue _fun69352 }
 193:
                    result = 0;
 195:
                    golf = global;
                    verify = golf.Math;
                    golf = verify.floor;
                    offset = entity * result;
                    entity = 0.9;
                    entity = entity - result;
                    entity = output * entity;
                    offset = offset + entity;
                    entity = 10;
                    entity = offset + entity;
                    entity = golf.bind(verify)(entity);
                    verify = _closure2_slot1;
                    if(!verify) { _fun69352_ip = 266; continue _fun69352 }
 257:
                    verify = 100;
                    offset = undefined;
                    if(!(verify === entity)) { _fun69352_ip = 269; continue _fun69352 }
 266:
                    offset = entity;
 269:
                    entity = {};
                    entity['url'] = sizing;
                    verify = undefined;
                    if(!romeo) { _fun69352_ip = 283; continue _fun69352 }
 280:
                    verify = sizing;
 283:
                    entity['videoUrl'] = verify;
                    sizing = _closure1_slot0;
                    output = _closure1_slot1;
                    verify = 2;
                    verify = output[verify];
                    sizing = sizing.bind(mike)(verify);
                    verify = sizing.getAttachmentObscurityDefaults;
                    echo = verify.bind(sizing)();
                    update = entity;
                    verify = copyDataProperties(update, echo);
                    verify = 'filename';
                    entity[verify] = backup;
                    verify = oscar.size;
                    verify = tango != verify;
                    backup = options;
                    if(!verify) { _fun69352_ip = 363; continue _fun69352 }
 349:
                    sizing = oscar.size;
                    verify = sizing.toString;
                    backup = verify.bind(sizing)();
 363:
                    verify = 'size';
                    entity[verify] = backup;
                    backup = false;
                    verify = 'showDescription';
                    entity[verify] = backup;
                    verify = _closure2_slot2;
                    backup = 0;
                    if(!verify) { _fun69352_ip = 411; continue _fun69352 }
 392:
                    verify = oscar.width;
                    verify = tango != verify;
                    backup = 0;
                    if(!verify) { _fun69352_ip = 411; continue _fun69352 }
 406:
                    backup = oscar.width;
 411:
                    verify = 'width';
                    entity[verify] = backup;
                    verify = _closure2_slot2;
                    backup = 0;
                    if(!verify) { _fun69352_ip = 448; continue _fun69352 }
 429:
                    verify = oscar.height;
                    verify = tango != verify;
                    backup = 0;
                    if(!verify) { _fun69352_ip = 448; continue _fun69352 }
 443:
                    backup = oscar.height;
 448:
                    verify = 'height';
                    entity[verify] = backup;
                    backup = _closure1_slot0;
                    verify = _closure1_slot1;
                    output = 3;
                    kilo = verify[output];
                    kilo = backup.bind(mike)(kilo);
                    sizing = kilo.intl;
                    kilo = sizing.string;
                    verify = verify[output];
                    verify = backup.bind(mike)(verify);
                    verify = verify.t;
                    if(romeo) { _fun69352_ip = 517; continue _fun69352 }
 504:
                    backup = verify.IPzNKC;
                    backup = kilo.bind(sizing)(backup);
                    _fun69352_ip = 528; continue _fun69352;
 517:
                    verify = verify.BEWw//;
                    backup = kilo.bind(sizing)(verify);
 528:
                    verify = 'hint';
                    entity[verify] = backup;
                    backup = _closure1_slot0;
                    verify = _closure1_slot1;
                    kilo = verify[output];
                    kilo = backup.bind(mike)(kilo);
                    sizing = kilo.intl;
                    kilo = sizing.string;
                    verify = verify[output];
                    verify = backup.bind(mike)(verify);
                    verify = verify.t;
                    if(romeo) { _fun69352_ip = 594; continue _fun69352 }
 581:
                    backup = verify.fKyfcX;
                    backup = kilo.bind(sizing)(backup);
                    _fun69352_ip = 605; continue _fun69352;
 594:
                    verify = verify./SCpvr;
                    backup = kilo.bind(sizing)(verify);
 605:
                    verify = 'role';
                    entity[verify] = backup;
                    verify = _closure1_slot2;
                    if(foxtrot) { _fun69352_ip = 651; continue _fun69352 }
 621:
                    if(romeo) { _fun69352_ip = 643; continue _fun69352 }
 624:
                    if(yankee) { _fun69352_ip = 635; continue _fun69352 }
 627:
                    yankee = verify.OTHER;
                    _fun69352_ip = 641; continue _fun69352;
 635:
                    yankee = verify.AUDIO;
 641:
                    _fun69352_ip = 649; continue _fun69352;
 643:
                    yankee = verify.VIDEO;
 649:
                    _fun69352_ip = 657; continue _fun69352;
 651:
                    yankee = verify.IMAGE;
 657:
                    verify = 'attachmentType';
                    entity[verify] = yankee;
                    verify = 'progress';
                    entity[verify] = offset;
                    golf = _closure2_slot0;
                    verify = golf.id;
                    golf = 'uploaderId';
                    entity[golf] = verify;
                    golf = report.id;
                    verify = tango != golf;
                    if(!verify) { _fun69352_ip = 708; continue _fun69352 }
 705:
                    options = golf;
 708:
                    golf = 'uploaderItemId';
                    entity[golf] = options;
                    options = oscar.durationSecs;
                    golf = 'durationSecs';
                    entity[golf] = options;
                    golf = oscar.waveform;
                    oscar = 'waveform';
                    entity[oscar] = golf;
                    oscar = _closure1_slot0;
                    golf = _closure1_slot1;
                    zulu = 4;
                    zulu = golf[zulu];
                    zulu = oscar.bind(mike)(zulu);
                    zulu = zulu.CloudUpload;
                    oscar = report instanceof zulu;
                    zulu = undefined;
                    if(!oscar) { _fun69352_ip = 809; continue _fun69352 }
 782:
                    report = report.reactNativeFileIndex;
                    tango = tango == report;
                    mike = undefined;
                    if(tango) { _fun69352_ip = 806; continue _fun69352 }
 797:
                    tango = report.toString;
                    mike = tango.bind(report)();
 806:
                    zulu = mike;
 809:
                    mike = 'id';
                    entity[mike] = zulu;
                    return entity;
                }
            };
            entity = tango.bind(report)(zulu);
 69:
            if(!(mike == entity)) { _fun69351_ip = 77; continue _fun69351 }
 73:
            entity = new Array(0);
 77:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();