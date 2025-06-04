// app/lib/uploader/stageAttachmentFiles.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: _stageAttachmentFiles
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    oscard = argFoo;
                    michal = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 97; continue _fun00001 }
 15:
                    tangon = undefined;
                    if(!(michal === tangon)) { _fun00002_ip = 23; continue _fun00001 }
 21:
                    michal = false;
 23:
                    var _closure4_slot0 = michal;
                    michal = arguments[2];
                    var _closure4_slot1 = michal;
                    SaveGenerator(address=38);
 36:
                    return tangon;
 38:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 94; continue _fun00001 }
 44:
                    report = oscard.map;
                    zuuluu = function(argFoo) {
                        michal = argFoo;
                        var _closure5_slot0 = michal;
                        michal = global;
                        zuuluu = michal.Promise;
                        michal = zuuluu.prototype;
                        michal = Object.create(michal, {constructor: {value: zuuluu}});
                        tangon = function(argFoo, argBar) {
                            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                                report = argFoo;
                                oscard = argBar;
                                var _closure6_slot0 = report;
                                var _closure6_slot1 = oscard;
                                entity = _closure5_slot0;
                                option = entity.status;
                                verify = _closure1_slot0;
                                entity = _closure1_slot1;
                                offset = 2;
                                golfie = entity[offset];
                                entity = undefined;
                                golfie = verify.bind(entity)(golfie);
                                golfie = golfie.CloudUploadStatus;
                                golfie = golfie.NOT_STARTED;
                                if(!(golfie !== option)) { _fun00004_ip = 319; continue _fun00003 }
 72:
                                verify = _closure1_slot0;
                                golfie = _closure1_slot1;
                                golfie = golfie[offset];
                                golfie = verify.bind(entity)(golfie);
                                golfie = golfie.CloudUploadStatus;
                                golfie = golfie.COMPLETED;
                                if(!(golfie !== option)) { _fun00004_ip = 308; continue _fun00003 }
 108:
                                verify = _closure1_slot0;
                                golfie = _closure1_slot1;
                                golfie = golfie[offset];
                                golfie = verify.bind(entity)(golfie);
                                golfie = golfie.CloudUploadStatus;
                                golfie = golfie.ERROR;
                                if(!(golfie !== option)) { _fun00004_ip = 218; continue _fun00003 }
 141:
                                verify = _closure1_slot0;
                                golfie = _closure1_slot1;
                                golfie = golfie[offset];
                                golfie = verify.bind(entity)(golfie);
                                golfie = golfie.CloudUploadStatus;
                                golfie = golfie.CANCELED;
                                if(!(golfie === option)) { _fun00004_ip = 333; continue _fun00003 }
 177:
                                golfie = global;
                                verify = golfie.Error;
                                golfie = verify.prototype;
                                option = Object.create(golfie, {constructor: {value: verify}});
                                romeon = 'Upload is canceled';
                                foxtra = option;
                                golfie = new foxtra[verify](romeon, yankee);
                                golfie = golfie instanceof Object ? golfie : option;
                                golfie = oscard.bind(entity)(golfie);
                                _fun00004_ip = 333; continue _fun00003;
 218:
                                golfie = _closure4_slot0;
                                if(!golfie) { _fun00004_ip = 251; continue _fun00003 }
 228:
                                golfie = _closure5_slot0;
                                golfie = golfie.error;
                                tangon = _closure1_slot3;
                                tangon = tangon.ENTITY_TOO_LARGE;
                                if(!(golfie === tangon)) { _fun00004_ip = 292; continue _fun00003 }
 251:
                                tangon = global;
                                option = tangon.Error;
                                tangon = option.prototype;
                                golfie = Object.create(tangon, {constructor: {value: option}});
                                romeon = 'File failed to upload';
                                foxtra = golfie;
                                tangon = new foxtra[option](romeon, yankee);
                                tangon = tangon instanceof Object ? tangon : golfie;
                                tangon = oscard.bind(entity)(tangon);
                                _fun00004_ip = 333; continue _fun00003;
 292:
                                oscard = _closure5_slot0;
                                tangon = oscard.upload;
                                tangon = tangon.bind(oscard)();
                                _fun00004_ip = 333; continue _fun00003;
 308:
                                tangon = 'complete';
                                tangon = report.bind(entity)(tangon);
                                _fun00004_ip = 333; continue _fun00003;
 319:
                                report = _closure5_slot0;
                                tangon = report.upload;
                                tangon = tangon.bind(report)();
 333:
                                report = _closure5_slot0;
                                oscard = report.on;
                                tangon = 'complete';
                                zuuluu = function() {
                                    zuuluu = _closure6_slot0;
                                    entity = undefined;
                                    michal = 'complete';
                                    michal = zuuluu.bind(entity)(michal);
                                    return entity;
                                };
                                zuuluu = oscard.bind(report)(tangon, zuuluu);
                                oscard = report.on;
                                tangon = 'error';
                                zuuluu = function() {
                                    zuuluu = _closure6_slot1;
                                    entity = global;
                                    tangon = entity.Error;
                                    michal = _closure5_slot0;
                                    oscard = michal.id;
                                    entity = entity.HermesInternal;
                                    report = entity.concat;
                                    michal = 'File ';
                                    entity = ' failed to upload';
                                    option = report.bind(michal)(oscard, entity);
                                    michal = tangon.prototype;
                                    michal = Object.create(michal, {constructor: {value: tangon}});
                                    verify = michal;
                                    entity = new verify[tangon](option, golfie);
                                    michal = entity instanceof Object ? entity : michal;
                                    entity = undefined;
                                    michal = zuuluu.bind(entity)(michal);
                                    return entity;
                                };
                                zuuluu = oscard.bind(report)(tangon, zuuluu);
                                tangon = report.on;
                                zuuluu = 'progress';
                                michal = function(argFoo, argBar) {
                                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                                        zuuluu = _closure4_slot1;
                                        michal = null;
                                        if(!(michal != zuuluu)) { _fun00006_ip = 31; continue _fun00005 }
 13:
                                        tangon = _closure4_slot1;
                                        zuuluu = undefined;
                                        michal = argFoo;
                                        entity = argBar;
                                        entity = tangon.bind(zuuluu)(michal, entity);
 31:
                                        entity = undefined;
                                        return entity;
                                    }
                                };
                                michal = tangon.bind(report)(zuuluu, michal);
                                return entity;
                            }
                        };
                        report = michal;
                        entity = new report[zuuluu](tangon, zuuluu);
                        entity = entity instanceof Object ? entity : michal;
                        return entity;
                    };
                    oscard = report.bind(oscard)(zuuluu);
                    zuuluu = global;
                    report = zuuluu.Promise;
                    zuuluu = report.all;
                    zuuluu = zuuluu.bind(report)(oscard);
                    SaveGenerator(address=82);
 80:
                    return zuuluu;
 82:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 91; continue _fun00001 }
 88:
                    return tangon;
 91:
                    return zuuluu;
 94:
                    return michal;
 97:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot4 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AbortCodes;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/uploader/stageAttachmentFiles.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: stageAttachmentFiles
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();