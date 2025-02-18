// app/modules/messages/native/renderer/transformUploaderAttachments.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AttachmentType;
    var _closure1_slot2 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/transformUploaderAttachments.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: createUploaderAttachments
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.uploaderFile;
            var _closure2_slot0 = entity;
            tangon = michal.isFailedMessage;
            var _closure2_slot1 = tangon;
            michal = michal.shouldInlineAttachmentMedia;
            var _closure2_slot2 = michal;
            report = entity.items;
            michal = null;
            tangon = michal == report;
            entity = undefined;
            if(tangon) { _fun00002_ip = 67; continue _fun00001 }
 52:
            tangon = report.map;
            zuuluu = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = argFoo;
                    entity = report.filename;
                    tangon = null;
                    michal = tangon != entity;
                    option = '';
                    backup = option;
                    if(!michal) { _fun00004_ip = 28; continue _fun00003 }
 25:
                    backup = entity;
 28:
                    oscard = report.item;
                    entity = oscard.originalUri;
                    michal = tangon != entity;
                    sizing = option;
                    if(!michal) { _fun00004_ip = 52; continue _fun00003 }
 49:
                    sizing = entity;
 52:
                    golfie = _closure1_slot0;
                    verify = _closure1_slot1;
                    entity = 1;
                    offset = verify[entity];
                    michal = undefined;
                    yankee = golfie.bind(michal)(offset);
                    offset = yankee.isImageFile;
                    foxtra = offset.bind(yankee)(backup);
                    offset = verify[entity];
                    yankee = golfie.bind(michal)(offset);
                    offset = yankee.isVideoFile;
                    romeon = offset.bind(yankee)(backup);
                    entity = verify[entity];
                    golfie = golfie.bind(michal)(entity);
                    entity = golfie.isAudioFile;
                    yankee = entity.bind(golfie)(backup);
                    entity = oscard.progress;
                    golfie = tangon != entity;
                    kiloes = 0;
                    output = 0;
                    if(!golfie) { _fun00004_ip = 148; continue _fun00003 }
 145:
                    output = entity;
 148:
                    golfie = oscard.compressionProgress;
                    verify = tangon != golfie;
                    entity = 0;
                    if(!verify) { _fun00004_ip = 166; continue _fun00003 }
 163:
                    entity = golfie;
 166:
                    verify = 0.7;
                    result = verify;
                    if(!(kiloes === entity)) { _fun00004_ip = 195; continue _fun00003 }
 183:
                    golfie = output > kiloes;
                    result = verify;
                    if(!golfie) { _fun00004_ip = 195; continue _fun00003 }
 193:
                    result = 0;
 195:
                    golfie = global;
                    verify = golfie.Math;
                    golfie = verify.floor;
                    offset = entity * result;
                    entity = 0.9;
                    entity = entity - result;
                    entity = output * entity;
                    offset = offset + entity;
                    entity = 10;
                    entity = offset + entity;
                    entity = golfie.bind(verify)(entity);
                    verify = _closure2_slot1;
                    if(!verify) { _fun00004_ip = 266; continue _fun00003 }
 257:
                    verify = 100;
                    offset = undefined;
                    if(!(verify === entity)) { _fun00004_ip = 269; continue _fun00003 }
 266:
                    offset = entity;
 269:
                    entity = {};
                    entity['url'] = sizing;
                    verify = undefined;
                    if(!romeon) { _fun00004_ip = 283; continue _fun00003 }
 280:
                    verify = sizing;
 283:
                    entity['videoUrl'] = verify;
                    sizing = _closure1_slot0;
                    output = _closure1_slot1;
                    verify = 2;
                    verify = output[verify];
                    sizing = sizing.bind(michal)(verify);
                    verify = sizing.getAttachmentObscurityDefaults;
                    echoed = verify.bind(sizing)();
                    update = entity;
                    verify = copyDataProperties(update, echoed);
                    verify = 'filename';
                    entity[verify] = backup;
                    verify = oscard.size;
                    verify = tangon != verify;
                    backup = option;
                    if(!verify) { _fun00004_ip = 363; continue _fun00003 }
 349:
                    sizing = oscard.size;
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
                    if(!verify) { _fun00004_ip = 411; continue _fun00003 }
 392:
                    verify = oscard.width;
                    verify = tangon != verify;
                    backup = 0;
                    if(!verify) { _fun00004_ip = 411; continue _fun00003 }
 406:
                    backup = oscard.width;
 411:
                    verify = 'width';
                    entity[verify] = backup;
                    verify = _closure2_slot2;
                    backup = 0;
                    if(!verify) { _fun00004_ip = 448; continue _fun00003 }
 429:
                    verify = oscard.height;
                    verify = tangon != verify;
                    backup = 0;
                    if(!verify) { _fun00004_ip = 448; continue _fun00003 }
 443:
                    backup = oscard.height;
 448:
                    verify = 'height';
                    entity[verify] = backup;
                    backup = _closure1_slot0;
                    verify = _closure1_slot1;
                    output = 3;
                    kiloes = verify[output];
                    kiloes = backup.bind(michal)(kiloes);
                    sizing = kiloes.intl;
                    kiloes = sizing.string;
                    verify = verify[output];
                    verify = backup.bind(michal)(verify);
                    verify = verify.t;
                    if(romeon) { _fun00004_ip = 517; continue _fun00003 }
 504:
                    backup = verify.IPzNKC;
                    backup = kiloes.bind(sizing)(backup);
                    _fun00004_ip = 528; continue _fun00003;
 517:
                    verify = verify.BEWw//;
                    backup = kiloes.bind(sizing)(verify);
 528:
                    verify = 'hint';
                    entity[verify] = backup;
                    backup = _closure1_slot0;
                    verify = _closure1_slot1;
                    kiloes = verify[output];
                    kiloes = backup.bind(michal)(kiloes);
                    sizing = kiloes.intl;
                    kiloes = sizing.string;
                    verify = verify[output];
                    verify = backup.bind(michal)(verify);
                    verify = verify.t;
                    if(romeon) { _fun00004_ip = 594; continue _fun00003 }
 581:
                    backup = verify.fKyfcX;
                    backup = kiloes.bind(sizing)(backup);
                    _fun00004_ip = 605; continue _fun00003;
 594:
                    verify = verify./SCpvr;
                    backup = kiloes.bind(sizing)(verify);
 605:
                    verify = 'role';
                    entity[verify] = backup;
                    verify = _closure1_slot2;
                    if(foxtra) { _fun00004_ip = 651; continue _fun00003 }
 621:
                    if(romeon) { _fun00004_ip = 643; continue _fun00003 }
 624:
                    if(yankee) { _fun00004_ip = 635; continue _fun00003 }
 627:
                    yankee = verify.OTHER;
                    _fun00004_ip = 641; continue _fun00003;
 635:
                    yankee = verify.AUDIO;
 641:
                    _fun00004_ip = 649; continue _fun00003;
 643:
                    yankee = verify.VIDEO;
 649:
                    _fun00004_ip = 657; continue _fun00003;
 651:
                    yankee = verify.IMAGE;
 657:
                    verify = 'attachmentType';
                    entity[verify] = yankee;
                    verify = 'progress';
                    entity[verify] = offset;
                    golfie = _closure2_slot0;
                    verify = golfie.id;
                    golfie = 'uploaderId';
                    entity[golfie] = verify;
                    golfie = report.id;
                    verify = tangon != golfie;
                    if(!verify) { _fun00004_ip = 708; continue _fun00003 }
 705:
                    option = golfie;
 708:
                    golfie = 'uploaderItemId';
                    entity[golfie] = option;
                    option = oscard.durationSecs;
                    golfie = 'durationSecs';
                    entity[golfie] = option;
                    golfie = oscard.waveform;
                    oscard = 'waveform';
                    entity[oscard] = golfie;
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot1;
                    zuuluu = 4;
                    zuuluu = golfie[zuuluu];
                    zuuluu = oscard.bind(michal)(zuuluu);
                    zuuluu = zuuluu.CloudUpload;
                    oscard = report instanceof zuuluu;
                    zuuluu = undefined;
                    if(!oscard) { _fun00004_ip = 809; continue _fun00003 }
 782:
                    report = report.reactNativeFileIndex;
                    tangon = tangon == report;
                    michal = undefined;
                    if(tangon) { _fun00004_ip = 806; continue _fun00003 }
 797:
                    tangon = report.toString;
                    michal = tangon.bind(report)();
 806:
                    zuuluu = michal;
 809:
                    michal = 'id';
                    entity[michal] = zuuluu;
                    return entity;
                }
            };
            entity = tangon.bind(report)(zuuluu);
 67:
            if(!(michal == entity)) { _fun00002_ip = 75; continue _fun00001 }
 71:
            entity = new Array(0);
 75:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();