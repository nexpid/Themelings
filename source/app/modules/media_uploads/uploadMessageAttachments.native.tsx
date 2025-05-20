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
                    if(zuuluu) { _fun00002_ip = 346; continue _fun00001 }
 15:
                    zuuluu = michal.channelId;
                    var _closure4_slot0 = zuuluu;
                    zuuluu = michal.message;
                    var _closure4_slot1 = zuuluu;
                    verify = michal.nonce;
                    var _closure4_slot2 = verify;
                    golfie = michal.items;
                    michal = michal.shouldUploadFailureSendNotification;
                    var _closure4_slot3 = michal;
                    zuuluu = undefined;
                    var _closure4_slot4 = zuuluu;
                    var _closure4_slot5 = zuuluu;
                    SaveGenerator(address=73);
 71:
                    return zuuluu;
 73:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 343; continue _fun00001 }
 82:
                    option = _closure1_slot5;
                    oscard = option.has;
                    oscard = oscard.bind(option)(verify);
                    if(oscard) { _fun00002_ip = 340; continue _fun00001 }
 105:
                    oscard = _closure1_slot1;
                    option = _closure1_slot2;
                    report = 2;
                    report = option[report];
                    option = oscard.bind(zuuluu)(report);
                    report = option.prototype;
                    oscard = Object.create(report, {constructor: {value: option}});
                    report = 'missing';
                    romeon = oscard;
                    yankee = report;
                    offset = report;
                    report = new romeon[option](yankee, offset, verify);
                    oscard = report instanceof Object ? report : oscard;
                    _closure4_slot5 = oscard;
                    verify = oscard.on;
                    option = 'start';
                    report = function(argFoo) {
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            oscard = argFoo;
                            tangon = _closure1_slot5;
                            zuuluu = tangon.add;
                            michal = _closure4_slot2;
                            michal = zuuluu.bind(tangon)(michal);
                            zuuluu = _closure4_slot1;
                            michal = null;
                            if(!(michal != zuuluu)) { _fun00004_ip = 125; continue _fun00003 }
 37:
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            michal = 3;
                            zuuluu = zuuluu[michal];
                            michal = undefined;
                            tangon = tangon.bind(michal)(zuuluu);
                            zuuluu = tangon.createMessageRecord;
                            michal = {};
                            offset = _closure4_slot1;
                            yankee = michal;
                            golfie = copyDataProperties(yankee, offset);
                            verify = oscard.id;
                            golfie = global;
                            golfie = golfie.HermesInternal;
                            option = golfie.concat;
                            golfie = 'pending-upload-';
                            option = option.bind(golfie)(verify);
                            golfie = 'key';
                            michal[golfie] = option;
                            michal = zuuluu.bind(tangon)(michal);
                            _closure4_slot4 = michal;
 125:
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 4;
                            michal = michal[entity];
                            entity = undefined;
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.dispatch;
                            michal = {};
                            golfie = 'UPLOAD_START';
                            michal['type'] = golfie;
                            golfie = _closure4_slot0;
                            michal['channelId'] = golfie;
                            michal['file'] = oscard;
                            oscard = _closure4_slot5;
                            michal['uploader'] = oscard;
                            report = _closure4_slot4;
                            michal['message'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        }
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
                        michal = _closure4_slot2;
                        michal = zuuluu.bind(tangon)(michal);
                        zuuluu = _closure4_slot5;
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
                        michal['messageRecord'] = oscard;
                        report = _closure4_slot3;
                        michal['shouldSendNotification'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    report = verify.bind(oscard)(option, report);
                    verify = oscard.on;
                    option = 'complete';
                    report = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            golfie = argFoo;
                            tangon = _closure1_slot5;
                            zuuluu = tangon.delete;
                            michal = _closure4_slot2;
                            michal = zuuluu.bind(tangon)(michal);
                            tangon = _closure1_slot4;
                            zuuluu = tangon.getMessageForFile;
                            michal = golfie.id;
                            report = zuuluu.bind(tangon)(michal);
                            michal = null;
                            michal = michal != report;
                            if(!michal) { _fun00006_ip = 69; continue _fun00005 }
 56:
                            tangon = report.content;
                            zuuluu = '';
                            michal = zuuluu === tangon;
 69:
                            if(!michal) { _fun00006_ip = 82; continue _fun00005 }
 72:
                            zuuluu = _closure4_slot5;
                            michal = zuuluu._aborted;
 82:
                            if(!michal) { _fun00006_ip = 146; continue _fun00005 }
 85:
                            tangon = _closure1_slot1;
                            zuuluu = _closure1_slot2;
                            michal = 4;
                            zuuluu = zuuluu[michal];
                            michal = undefined;
                            tangon = tangon.bind(michal)(zuuluu);
                            zuuluu = tangon.dispatch;
                            michal = {};
                            option = 'MESSAGE_DELETE';
                            michal['type'] = option;
                            option = report.nonce;
                            michal['id'] = option;
                            option = report.channel_id;
                            michal['channelId'] = option;
                            michal = zuuluu.bind(tangon)(michal);
 146:
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 4;
                            michal = michal[entity];
                            entity = undefined;
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.dispatch;
                            michal = {};
                            option = 'UPLOAD_COMPLETE';
                            michal['type'] = option;
                            option = _closure4_slot0;
                            michal['channelId'] = option;
                            michal['file'] = golfie;
                            oscard = _closure4_slot5;
                            oscard = oscard._aborted;
                            michal['aborted'] = oscard;
                            michal['messageRecord'] = report;
                            michal = zuuluu.bind(tangon)(michal);
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
                    SaveGenerator(address=318);
 316:
                    return tangon;
 318:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 337; continue _fun00001 }
 324:
                    report['attachments'] = tangon;
                    report['uploader'] = oscard;
                    return report;
 337:
                    return tangon;
 340:
                    return zuuluu;
 343:
                    return michal;
 346:
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