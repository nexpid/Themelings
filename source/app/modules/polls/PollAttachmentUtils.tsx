// app/modules/polls/PollAttachmentUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = function() { // Original name: _downloadPollGif
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot0;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 78; continue _fun00001 }
 7:
                    michal = global;
                    zuuluu = michal.fetch;
                    report = undefined;
                    michal = argFoo;
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=29);
 27:
                    return michal;
 29:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 75; continue _fun00001 }
 35:
                    zuuluu = michal.blob;
                    zuuluu = zuuluu.bind(michal)();
                    SaveGenerator(address=49);
 47:
                    return zuuluu;
 49:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 72; continue _fun00001 }
 55:
                    tangon = function(argFoo) { // Original name: convertBlobToBase64
                        michal = argFoo;
                        var _closure5_slot0 = michal;
                        michal = global;
                        zuuluu = michal.FileReader;
                        tangon = zuuluu.prototype;
                        tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                        oscard = tangon;
                        zuuluu = new oscard[zuuluu](report);
                        zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                        var _closure5_slot1 = zuuluu;
                        zuuluu = michal.Promise;
                        michal = zuuluu.prototype;
                        michal = Object.create(michal, {constructor: {value: zuuluu}});
                        report = function(argFoo, argBar) {
                            entity = argFoo;
                            var _closure6_slot0 = entity;
                            zuuluu = _closure5_slot1;
                            michal = function() {
                                entity = _closure5_slot1;
                                zuuluu = entity.result;
                                michal = zuuluu.split;
                                entity = ',';
                                michal = michal.bind(zuuluu)(entity);
                                entity = michal.pop;
                                zuuluu = entity.bind(michal)();
                                michal = _closure6_slot0;
                                entity = undefined;
                                michal = michal.bind(entity)(zuuluu);
                                return entity;
                            };
                            zuuluu['onload'] = michal;
                            michal = argBar;
                            zuuluu['onerror'] = michal;
                            michal = zuuluu.readAsDataURL;
                            entity = _closure5_slot0;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        oscard = michal;
                        entity = new oscard[zuuluu](report, tangon);
                        entity = entity instanceof Object ? entity : michal;
                        return entity;
                    };
                    tangon = tangon.bind(report)(zuuluu);
                    return tangon;
 72:
                    return zuuluu;
 75:
                    return michal;
 78:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot2 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot2 = entity;
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
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.POLL_ATTACHMENT_FOLDER;
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/polls/PollAttachmentUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: getFileNameFromGifUrl
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = global;
            tangon = entity.decodeURIComponent;
            zuuluu = undefined;
            michal = argBar;
            tangon = tangon.bind(zuuluu)(michal);
            zuuluu = tangon.split;
            michal = '/';
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.pop;
            michal = michal.bind(zuuluu)();
            zuuluu = null;
            zuuluu = zuuluu != michal;
            report = 'temp.gif';
            if(!zuuluu) { _fun00004_ip = 60; continue _fun00003 }
 57:
            report = michal;
 60:
            entity = entity.HermesInternal;
            tangon = entity.concat;
            zuuluu = '';
            michal = argFoo;
            entity = '-';
            entity = tangon.bind(zuuluu)(michal, entity, report);
            return entity;
        }
    };
    zuuluu['getFileNameFromGifUrl'] = tangon;
    tangon = function(argFoo) { // Original name: getFilePathForGif
        michal = _closure1_slot1;
        entity = '/';
        michal = michal + entity;
        entity = argFoo;
        entity = michal + entity;
        return entity;
    };
    zuuluu['getFilePathForGif'] = tangon;
    michal = function() { // Original name: downloadPollGif
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['downloadPollGif'] = michal;
    return entity;
})();