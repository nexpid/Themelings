// app/lib/uploader/native/CloudUploaderUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    offset = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = option;
    entity = function(argFoo, argBar, argBaz) { // Original name: _prepareMessageRequestBodyCloud
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = argBar;
            oscard = argBaz;
            offset = new Array(0);
            var _closure2_slot0 = offset;
            zuuluu = tangon.forEach;
            entity = function(argFoo, argBar) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.getAttachmentPayload;
                zuuluu = argFoo;
                michal = argBar;
                oscard = tangon.bind(report)(zuuluu, michal);
                tangon = _closure2_slot0;
                zuuluu = tangon.push;
                michal = {};
                golfie = michal;
                report = copyDataProperties(golfie, oscard);
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity);
            entity = null;
            if(!(entity != oscard)) { _fun00002_ip = 44; continue _fun00001 }
 40:
            if(!(entity == michal)) { _fun00002_ip = 67; continue _fun00001 }
 44:
            entity = {};
            backup = entity;
            foxtra = michal;
            zuuluu = copyDataProperties(backup, foxtra);
            zuuluu = 'attachments';
            entity[zuuluu] = offset;
            _fun00002_ip = 164; continue _fun00001;
 67:
            report = {};
            backup = report;
            foxtra = michal;
            michal = copyDataProperties(backup, foxtra);
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            michal = 4;
            tangon = option[michal];
            zuuluu = undefined;
            yankee = golfie.bind(zuuluu)(tangon);
            verify = yankee.get;
            tangon = new Array(0);
            foxtra = verify.bind(yankee)(report, oscard, tangon);
            tangon = new Array(0);
            romeon = 0;
            backup = tangon;
            romeon = arraySpread(backup, foxtra, romeon);
            backup = tangon;
            foxtra = offset;
            verify = arraySpread(backup, foxtra, romeon);
            michal = option[michal];
            zuuluu = golfie.bind(zuuluu)(michal);
            michal = zuuluu.set;
            entity = michal.bind(zuuluu)(report, oscard, tangon);
 164:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    oscard = function(argFoo) { // Original name: prepareMessageRequestHeaders
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = {};
            michal = argFoo;
            entity['Authorization'] = michal;
            tangon = _closure1_slot5;
            zuuluu = tangon.getDebugOptionsHeaderValue;
            zuuluu = zuuluu.bind(tangon)();
            entity['X-Debug-Options'] = zuuluu;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.locale;
            entity['Accept-Language'] = zuuluu;
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 5;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            tangon = report.bind(zuuluu)(tangon);
            zuuluu = tangon.getSuperPropertiesBase64;
            tangon = zuuluu.bind(tangon)();
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00004_ip = 95; continue _fun00003 }
 89:
            entity['X-Super-Properties'] = tangon;
 95:
            tangon = _closure1_slot4;
            michal = tangon.getFingerprint;
            michal = michal.bind(tangon)();
            if(!(zuuluu != michal)) { _fun00004_ip = 119; continue _fun00003 }
 113:
            entity['X-Fingerprint'] = michal;
 119:
            return entity;
        }
    };
    var _closure1_slot7 = oscard;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: prepareMessagePayload
        oscard = _closure1_slot6;
        report = undefined;
        tangon = argBar;
        michal = argBaz;
        entity = argCor;
        michal = oscard.bind(report)(tangon, michal, entity);
        entity = {};
        tangon = _closure1_slot7;
        zuuluu = argFoo;
        zuuluu = tangon.bind(report)(zuuluu);
        entity['headers'] = zuuluu;
        entity['body'] = michal;
        return entity;
    };
    michal = function(argFoo) { // Original name: getUploadPayload
        michal = argFoo;
        entity = {};
        zuuluu = michal.filename;
        entity['filename'] = zuuluu;
        michal = michal.currentSize;
        entity['file_size'] = michal;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        michal = 4;
        zuuluu = zuuluu[michal];
        michal = undefined;
        zuuluu = tangon.bind(michal)(zuuluu);
        michal = zuuluu.uniqueId;
        michal = michal.bind(zuuluu)();
        entity['id'] = michal;
        return entity;
    };
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, report);
    entity = 0;
    report = option[entity];
    entity = undefined;
    report = offset.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = option[report];
    report = offset.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = option[report];
    report = offset.bind(entity)(report);
    var _closure1_slot5 = report;
    report = {};
    report['getUploadPayload'] = michal;
    report['prepareMessagePayload'] = tangon;
    report['prepareMessageRequestHeaders'] = oscard;
    oscard = 6;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'lib/uploader/native/CloudUploaderUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['prepareMessagePayload'] = tangon;
    zuuluu['getUploadPayload'] = michal;
    return entity;
})();