// app/lib/uploader/UploadUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 1;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/uploader/UploadUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: doesImageMatchUpload
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = argBar;
            zuuluu = michal.id;
            entity = tangon.uri;
            if(!(zuuluu !== entity)) { _fun00002_ip = 168; continue _fun00001 }
 23:
            zuuluu = michal.id;
            entity = null;
            if(!(entity != zuuluu)) { _fun00002_ip = 48; continue _fun00001 }
 34:
            report = michal.id;
            zuuluu = tangon.id;
            if(!(report !== zuuluu)) { _fun00002_ip = 168; continue _fun00001 }
 48:
            zuuluu = michal.item;
            report = zuuluu.platform;
            golfie = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 0;
            oscard = oscard[zuuluu];
            zuuluu = undefined;
            zuuluu = golfie.bind(zuuluu)(oscard);
            zuuluu = zuuluu.UploadPlatform;
            zuuluu = zuuluu.REACT_NATIVE;
            if(!(report !== zuuluu)) { _fun00002_ip = 103; continue _fun00001 }
 99:
            zuuluu = false;
            return zuuluu;
 103:
            michal = michal.item;
            zuuluu = tangon.filename;
            report = michal.originalUri;
            tangon = tangon.uri;
            if(!(report !== tangon)) { _fun00002_ip = 164; continue _fun00001 }
 129:
            if(!(entity != zuuluu)) { _fun00002_ip = 156; continue _fun00001 }
 133:
            michal = michal.originalUri;
            if(!(entity != michal)) { _fun00002_ip = 156; continue _fun00001 }
 143:
            entity = michal.includes;
            entity = entity.bind(michal)(zuuluu);
            if(entity) { _fun00002_ip = 160; continue _fun00001 }
 156:
            entity = false;
            return entity;
 160:
            entity = true;
            return entity;
 164:
            entity = true;
            return entity;
 168:
            entity = true;
            return entity;
        }
    };
    zuuluu['doesImageMatchUpload'] = tangon;
    michal = function(argFoo, argBar) { // Original name: calculateProgress
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argBar;
            entity = 0;
            if(!(entity !== zuuluu)) { _fun00004_ip = 59; continue _fun00003 }
 9:
            michal = global;
            report = michal.Math;
            tangon = report.min;
            golfie = michal.Math;
            oscard = golfie.floor;
            michal = argFoo;
            michal = michal / zuuluu;
            zuuluu = 100;
            michal = michal * zuuluu;
            michal = oscard.bind(golfie)(michal);
            entity = tangon.bind(report)(michal, zuuluu);
 59:
            return entity;
        }
    };
    zuuluu['calculateProgress'] = michal;
    return entity;
})();