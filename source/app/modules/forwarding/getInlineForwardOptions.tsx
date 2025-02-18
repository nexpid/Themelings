// app/modules/forwarding/getInlineForwardOptions.tsx
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
    tangon = tangon.MessageReferenceTypes;
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/forwarding/getInlineForwardOptions.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: getInlineForwardOptions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = argBar;
            report = michal.targetKind;
            oscard = michal.embedIndex;
            michal = 'media';
            if(!(michal !== report)) { _fun00002_ip = 78; continue _fun00001 }
 30:
            michal = 'embed';
            if(!(michal === report)) { _fun00002_ip = 44; continue _fun00001 }
 38:
            michal = null;
            if(!(michal == oscard)) { _fun00002_ip = 58; continue _fun00001 }
 44:
            tangon = 'shortcut';
            michal = undefined;
            if(!(tangon === report)) { _fun00002_ip = 56; continue _fun00001 }
 54:
            michal = {};
 56:
            _fun00002_ip = 76; continue _fun00001;
 58:
            tangon = {};
            report = new Array(1);
            report[0] = oscard;
            tangon['onlyEmbedIndices'] = report;
            michal = tangon;
 76:
            return michal;
 78:
            tangon = entity.messageReference;
            report = null;
            oscard = report == tangon;
            golfie = undefined;
            if(oscard) { _fun00002_ip = 100; continue _fun00001 }
 95:
            golfie = tangon.type;
 100:
            tangon = _closure1_slot2;
            oscard = tangon.FORWARD;
            tangon = entity;
            if(!(golfie === oscard)) { _fun00002_ip = 149; continue _fun00001 }
 120:
            oscard = entity.messageSnapshots;
            entity = 0;
            oscard = oscard[entity];
            golfie = report == oscard;
            entity = undefined;
            if(golfie) { _fun00002_ip = 146; continue _fun00001 }
 141:
            entity = oscard.message;
 146:
            tangon = entity;
 149:
            entity = {};
            report = report == tangon;
            michal = undefined;
            if(report) { _fun00002_ip = 200; continue _fun00001 }
 160:
            oscard = tangon.attachments;
            report = oscard.filter;
            tangon = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.filename;
                    zuuluu = _closure1_slot0;
                    entity = _closure1_slot1;
                    oscard = 1;
                    entity = entity[oscard];
                    report = undefined;
                    zuuluu = zuuluu.bind(report)(entity);
                    entity = zuuluu.isImageFile;
                    entity = entity.bind(zuuluu)(tangon);
                    if(entity) { _fun00004_ip = 76; continue _fun00003 }
 48:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot1;
                    michal = michal[oscard];
                    zuuluu = zuuluu.bind(report)(michal);
                    michal = zuuluu.isVideoFile;
                    entity = michal.bind(zuuluu)(tangon);
 76:
                    return entity;
                }
            };
            report = report.bind(oscard)(tangon);
            tangon = report.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            michal = tangon.bind(report)(zuuluu);
 200:
            entity['onlyAttachmentIds'] = michal;
            return entity;
        }
    };
    zuuluu['getInlineForwardOptions'] = michal;
    return entity;
})();