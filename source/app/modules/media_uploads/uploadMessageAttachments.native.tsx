// app/modules/media_uploads/uploadMessageAttachments.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _uploadMessageAttachments
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 419; continue _fun00001 }
 15:
                    zuuluu = michal.channelId;
                    var _closure4_slot0 = zuuluu;
                    offset = michal.message;
                    verify = michal.nonce;
                    var _closure4_slot1 = verify;
                    golfie = michal.items;
                    michal = michal.shouldUploadFailureSendNotification;
                    var _closure4_slot2 = michal;
                    zuuluu = undefined;
                    var _closure4_slot3 = zuuluu;
                    var _closure4_slot4 = zuuluu;
                    SaveGenerator(address=69);
 67:
                    return zuuluu;
 69:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 416; continue _fun00001 }
 78:
                    option = _closure1_slot5;
                    oscard = option.has;
                    oscard = oscard.bind(option)(verify);
                    if(oscard) { _fun00002_ip = 413; continue _fun00001 }
 101:
                    option = _closure1_slot1;
                    verify = _closure1_slot2;
                    oscard = 2;
                    oscard = verify[oscard];
                    oscard = option.bind(zuuluu)(oscard);
                    option = oscard.prototype;
                    option = Object.create(option, {constructor: {value: oscard}});
                    kiloes = option;
                    oscard = new kiloes[oscard](backup);
                    oscard = oscard instanceof Object ? oscard : option;
                    _closure4_slot3 = oscard;
                    option = oscard._file;
                    romeon = option.id;
                    option = global;
                    option = option.HermesInternal;
                    yankee = option.concat;
                    option = 'pending-upload-';
                    yankee = yankee.bind(option)(romeon);
                    option = _closure1_slot0;
                    report = 3;
                    report = verify[report];
                    verify = option.bind(zuuluu)(report);
                    option = verify.createMessageRecord;
                    report = {};
                    backup = report;
                    foxtra = offset;
                    offset = copyDataProperties(backup, foxtra);
                    offset = 'key';
                    report[offset] = yankee;
                    report = option.bind(verify)(report);
                    _closure4_slot4 = report;
                    verify = oscard.on;
                    option = 'start';
                    report = function(argFoo) {
                        tangon = _closure1_slot5;
                        zuuluu = tangon.add;
                        michal = _closure4_slot1;
                        michal = zuuluu.bind(tangon)(michal);
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 4;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.dispatch;
                        michal = {};
                        oscard = 'UPLOAD_START';
                        michal['type'] = oscard;
                        oscard = _closure4_slot0;
                        michal['channelId'] = oscard;
                        oscard = argFoo;
                        michal['file'] = oscard;
                        oscard = _closure4_slot3;
                        michal['uploader'] = oscard;
                        report = _closure4_slot4;
                        michal['message'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    report = verify.bind(oscard)(option, report);
                    verify = oscard.on;
                    option = 'compression-progress';
                    report = function(argFoo) {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 4;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.dispatch;
                        michal = {};
                        report = 'UPLOAD_COMPRESSION_PROGRESS';
                        michal['type'] = report;
                        report = _closure4_slot0;
                        michal['channelId'] = report;
                        report = argFoo;
                        michal['file'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    report = verify.bind(oscard)(option, report);
                    verify = oscard.on;
                    option = 'progress';
                    report = function(argFoo) {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 4;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.dispatch;
                        michal = {};
                        report = 'UPLOAD_PROGRESS';
                        michal['type'] = report;
                        report = _closure4_slot0;
                        michal['channelId'] = report;
                        report = argFoo;
                        michal['file'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    report = verify.bind(oscard)(option, report);
                    verify = oscard.on;
                    option = 'error';
                    report = function(argFoo) {
                        tangon = _closure1_slot5;
                        zuuluu = tangon.delete;
                        michal = _closure4_slot1;
                        michal = zuuluu.bind(tangon)(michal);
                        zuuluu = _closure4_slot3;
                        michal = zuuluu.cancel;
                        michal = michal.bind(zuuluu)();
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 4;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.dispatch;
                        michal = {};
                        oscard = 'UPLOAD_FAIL';
                        michal['type'] = oscard;
                        oscard = _closure4_slot0;
                        michal['channelId'] = oscard;
                        oscard = argFoo;
                        michal['file'] = oscard;
                        oscard = _closure4_slot4;
                        oscard = oscard.id;
                        michal['messageId'] = oscard;
                        report = _closure4_slot2;
                        michal['shouldSendNotification'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    report = verify.bind(oscard)(option, report);
                    verify = oscard.on;
                    option = 'complete';
                    report = function(argFoo) {
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            tangon = argFoo;
                            oscard = _closure1_slot5;
                            zuuluu = oscard.delete;
                            michal = _closure4_slot1;
                            michal = zuuluu.bind(oscard)(michal);
                            oscard = _closure1_slot4;
                            zuuluu = oscard.getMessageForFile;
                            michal = tangon.id;
                            golfie = zuuluu.bind(oscard)(michal);
                            verify = null;
                            michal = verify != golfie;
                            if(!michal) { _fun00004_ip = 69; continue _fun00003 }
 56:
                            oscard = golfie.content;
                            zuuluu = '';
                            michal = zuuluu === oscard;
 69:
                            if(!michal) { _fun00004_ip = 82; continue _fun00003 }
 72:
                            zuuluu = _closure4_slot3;
                            michal = zuuluu._aborted;
 82:
                            if(!michal) { _fun00004_ip = 155; continue _fun00003 }
 85:
                            oscard = _closure1_slot1;
                            zuuluu = _closure1_slot2;
                            michal = 4;
                            zuuluu = zuuluu[michal];
                            michal = undefined;
                            oscard = oscard.bind(michal)(zuuluu);
                            zuuluu = oscard.dispatch;
                            michal = {};
                            option = 'MESSAGE_DELETE';
                            michal['type'] = option;
                            option = golfie.nonce;
                            if(!(verify == option)) { _fun00004_ip = 137; continue _fun00003 }
 132:
                            option = golfie.id;
 137:
                            michal['id'] = option;
                            golfie = golfie.channel_id;
                            michal['channelId'] = golfie;
                            michal = zuuluu.bind(oscard)(michal);
 155:
                            michal = _closure4_slot3;
                            michal = michal._aborted;
                            if(!michal) { _fun00004_ip = 232; continue _fun00003 }
 168:
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 4;
                            michal = michal[entity];
                            entity = undefined;
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.dispatch;
                            entity = {};
                            oscard = 'UPLOAD_COMPLETE';
                            entity['type'] = oscard;
                            report = _closure4_slot0;
                            entity['channelId'] = report;
                            entity['file'] = tangon;
                            tangon = true;
                            entity['aborted'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
 232:
                            entity = undefined;
                            return entity;
                        }
                    };
                    report = verify.bind(oscard)(option, report);
                    option = oscard.on;
                    report = 'cancel-upload-item';
                    tangon = function(argFoo) {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 4;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.dispatch;
                        michal = {};
                        report = 'UPLOAD_FILE_UPDATE';
                        michal['type'] = report;
                        report = argFoo;
                        michal['file'] = report;
                        report = _closure4_slot0;
                        michal['channelId'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    tangon = option.bind(oscard)(report, tangon);
                    report = {};
                    tangon = oscard.uploadFilesSimple;
                    tangon = tangon.bind(oscard)(golfie);
                    SaveGenerator(address=391);
 389:
                    return tangon;
 391:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 410; continue _fun00001 }
 397:
                    report['attachments'] = tangon;
                    report['uploader'] = oscard;
                    return report;
 410:
                    return tangon;
 413:
                    return zuuluu;
 416:
                    return michal;
 419:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot6 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot6 = entity;
    tangon = global;
    offset = tangon.Object;
    verify = offset.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, golfie);
    entity = 0;
    golfie = oscard[entity];
    entity = undefined;
    golfie = option.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    tangon = tangon.Set;
    golfie = tangon.prototype;
    golfie = Object.create(golfie, {constructor: {value: tangon}});
    backup = golfie;
    tangon = new backup[tangon](foxtra);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_uploads/uploadMessageAttachments.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: uploadMessageAttachments
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['uploadMessageAttachments'] = michal;
    return entity;
})();