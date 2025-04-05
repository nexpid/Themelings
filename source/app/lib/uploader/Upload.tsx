// app/lib/uploader/Upload.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    option = argBar;
    report = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = report;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = verify;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, michal);
    offset = 0;
    michal = verify[offset];
    entity = undefined;
    michal = report.bind(entity)(michal);
    var _closure1_slot4 = michal;
    golfie = 1;
    michal = verify[golfie];
    michal = report.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 2;
    michal = verify[michal];
    michal = report.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 3;
    michal = verify[michal];
    michal = report.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 4;
    michal = verify[michal];
    michal = report.bind(entity)(michal);
    var _closure1_slot8 = michal;
    report = {};
    report['REACT_NATIVE'] = offset;
    michal = 'REACT_NATIVE';
    report[offset] = michal;
    report['WEB'] = golfie;
    michal = 'WEB';
    report[golfie] = michal;
    var _closure1_slot9 = report;
    michal = {};
    michal['FILE_ATTACHMENT'] = offset;
    oscard = 'FILE_ATTACHMENT';
    michal[offset] = oscard;
    michal['IMAGE_PICKER'] = golfie;
    oscard = 'IMAGE_PICKER';
    michal[golfie] = oscard;
    oscard = 9;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    golfie = oscard.EventEmitter;
    oscard = function(argFoo) {
        tangon = function(argFoo, argBar) { // Original name: Upload
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = argFoo;
                oscard = this;
                entity = _closure1_slot4;
                report = _closure2_slot0;
                tangon = undefined;
                entity = entity.bind(tangon)(oscard, report);
                entity = _closure1_slot7;
                yankee = entity.bind(tangon)(report);
                report = _closure1_slot6;
                entity = _closure1_slot10;
                entity = entity.bind(tangon)();
                if(entity) { _fun00004_ip = 65; continue _fun00003 }
 52:
                entity = yankee.apply;
                entity = entity.bind(yankee)(oscard, tangon);
                _fun00004_ip = 103; continue _fun00003;
 65:
                golfie = global;
                offset = golfie.Reflect;
                verify = offset.construct;
                golfie = _closure1_slot7;
                golfie = golfie.bind(tangon)(oscard);
                option = golfie.constructor;
                golfie = new Array(0);
                entity = verify.bind(offset)(yankee, golfie, option);
 103:
                entity = report.bind(tangon)(oscard, entity);
                entity['item'] = zuuluu;
                oscard = zuuluu.platform;
                report = _closure1_slot9;
                report = report.REACT_NATIVE;
                if(!(oscard !== report)) { _fun00004_ip = 312; continue _fun00003 }
 138:
                report = zuuluu.id;
                oscard = null;
                if(!(oscard == report)) { _fun00004_ip = 184; continue _fun00003 }
 149:
                golfie = _closure1_slot1;
                option = _closure1_slot3;
                oscard = 6;
                oscard = option[oscard];
                option = golfie.bind(tangon)(oscard);
                golfie = option.uniqueId;
                oscard = 'upload';
                report = golfie.bind(option)(oscard);
 184:
                entity['id'] = report;
                oscard = _closure1_slot2;
                golfie = _closure1_slot3;
                report = 7;
                report = golfie[report];
                golfie = oscard.bind(tangon)(report);
                oscard = golfie.classifyFile;
                report = zuuluu.file;
                report = oscard.bind(golfie)(report);
                entity['classification'] = report;
                oscard = entity.classification;
                report = 'image';
                report = report === oscard;
                entity['isImage'] = report;
                oscard = entity.classification;
                report = 'video';
                report = report === oscard;
                entity['isVideo'] = report;
                report = zuuluu.file;
                report = report.name;
                entity['filename'] = report;
                report = zuuluu.file;
                report = report.type;
                entity['mimeType'] = report;
                _fun00004_ip = 496; continue _fun00003;
 312:
                report = zuuluu.id;
                oscard = null;
                if(!(oscard == report)) { _fun00004_ip = 329; continue _fun00003 }
 323:
                report = zuuluu.uri;
 329:
                entity['id'] = report;
                oscard = _closure1_slot0;
                golfie = _closure1_slot3;
                report = 5;
                report = golfie[report];
                golfie = oscard.bind(tangon)(report);
                oscard = golfie.getFile;
                report = {};
                option = zuuluu.uri;
                report['uri'] = option;
                option = zuuluu.filename;
                report['overrideFilename'] = option;
                option = zuuluu.mimeType;
                report['overrideType'] = option;
                report = oscard.bind(golfie)(report);
                oscard = report.filename;
                entity['filename'] = oscard;
                oscard = report.isImage;
                entity['isImage'] = oscard;
                oscard = report.isVideo;
                entity['isVideo'] = oscard;
                report = report.type;
                entity['mimeType'] = report;
                report = zuuluu.origin;
                entity['origin'] = report;
                report = zuuluu.durationSecs;
                entity['durationSecs'] = report;
                report = zuuluu.waveform;
                entity['waveform'] = report;
                report = zuuluu.isRemix;
                entity['isRemix'] = report;
 496:
                report = zuuluu.isThumbnail;
                entity['isThumbnail'] = report;
                zuuluu = zuuluu.clip;
                entity['clip'] = zuuluu;
                zuuluu = _closure1_slot0;
                report = _closure1_slot3;
                michal = 8;
                michal = report[michal];
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.v4;
                michal = michal.bind(zuuluu)();
                entity['uniqueId'] = michal;
                michal = argBar;
                entity['showLargeMessageDialog'] = michal;
                michal = false;
                entity['spoiler'] = michal;
                michal = null;
                entity['description'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot8;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot5;
        report = {};
        entity = 'cancel';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = 'resetState';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = this;
            return entity;
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    oscard = oscard.bind(entity)(golfie);
    golfie = 10;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'lib/uploader/Upload.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['default'] = oscard;
    zuuluu['UploadPlatform'] = report;
    tangon = function(argFoo) { // Original name: isResolvedUpload
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = michal.isVideo;
            zuuluu = undefined;
            entity = zuuluu !== entity;
            if(!entity) { _fun00006_ip = 28; continue _fun00005 }
 18:
            michal = michal.isImage;
            entity = zuuluu !== michal;
 28:
            return entity;
        }
    };
    zuuluu['isResolvedUpload'] = tangon;
    zuuluu['UploadOrigin'] = michal;
    return entity;
})();