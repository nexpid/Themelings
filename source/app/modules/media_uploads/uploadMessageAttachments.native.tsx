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
                    if(zuuluu) { _fun00002_ip = 407; continue _fun00001 }
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
                    if(report) { _fun00002_ip = 404; continue _fun00001 }
 78:
                    option = _closure1_slot5;
                    oscard = option.has;
                    oscard = oscard.bind(option)(verify);
                    if(oscard) { _fun00002_ip = 401; continue _fun00001 }
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
                            var _closure5_slot0 = tangon;
                            golfie = _closure1_slot5;
                            oscard = golfie.delete;
                            report = _closure4_slot1;
                            report = oscard.bind(golfie)(report);
                            oscard = _closure1_slot4;
                            report = oscard.getMessageForFile;
                            tangon = tangon.id;
                            oscard = report.bind(oscard)(tangon);
                            option = null;
                            tangon = option != oscard;
                            if(!tangon) { _fun00004_ip = 75; continue _fun00003 }
 62:
                            golfie = oscard.content;
                            report = '';
                            tangon = report === golfie;
 75:
                            if(!tangon) { _fun00004_ip = 88; continue _fun00003 }
 78:
                            report = _closure4_slot3;
                            tangon = report._aborted;
 88:
                            if(!tangon) { _fun00004_ip = 161; continue _fun00003 }
 91:
                            report = _closure1_slot1;
                            tangon = _closure1_slot2;
                            zuuluu = 4;
                            tangon = tangon[zuuluu];
                            zuuluu = undefined;
                            report = report.bind(zuuluu)(tangon);
                            tangon = report.dispatch;
                            zuuluu = {};
                            golfie = 'MESSAGE_DELETE';
                            zuuluu['type'] = golfie;
                            golfie = oscard.nonce;
                            if(!(option == golfie)) { _fun00004_ip = 143; continue _fun00003 }
 138:
                            golfie = oscard.id;
 143:
                            zuuluu['id'] = golfie;
                            oscard = oscard.channel_id;
                            zuuluu['channelId'] = oscard;
                            zuuluu = tangon.bind(report)(zuuluu);
 161:
                            michal = _closure4_slot3;
                            michal = michal._aborted;
                            if(!michal) { _fun00004_ip = 197; continue _fun00003 }
 174:
                            michal = global;
                            tangon = michal.setTimeout;
                            zuuluu = undefined;
                            michal = function() {
                                zuuluu = _closure1_slot1;
                                michal = _closure1_slot2;
                                entity = 4;
                                michal = michal[entity];
                                entity = undefined;
                                tangon = zuuluu.bind(entity)(michal);
                                zuuluu = tangon.dispatch;
                                michal = {};
                                report = 'UPLOAD_COMPLETE';
                                michal['type'] = report;
                                report = _closure4_slot0;
                                michal['channelId'] = report;
                                report = _closure5_slot0;
                                michal['file'] = report;
                                report = true;
                                michal['aborted'] = report;
                                michal = zuuluu.bind(tangon)(michal);
                                return entity;
                            };
                            entity = 0;
                            entity = tangon.bind(zuuluu)(michal, entity);
 197:
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
                    tangon = oscard.uploadFiles;
                    tangon = tangon.bind(oscard)(golfie);
                    SaveGenerator(address=379);
 377:
                    return tangon;
 379:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 398; continue _fun00001 }
 385:
                    report['attachments'] = tangon;
                    report['uploader'] = oscard;
                    return report;
 398:
                    return tangon;
 401:
                    return zuuluu;
 404:
                    return michal;
 407:
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