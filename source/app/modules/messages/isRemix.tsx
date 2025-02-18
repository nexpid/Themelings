// app/modules/messages/isRemix.tsx
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
    tangon = tangon.MessageAttachmentFlags;
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/isRemix.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            tangon = null;
            zuuluu = tangon == michal;
            if(zuuluu) { _fun00002_ip = 22; continue _fun00001 }
 12:
            entity = michal.attachments;
            zuuluu = tangon == entity;
 22:
            if(zuuluu) { _fun00002_ip = 43; continue _fun00001 }
 25:
            entity = michal.attachments;
            tangon = entity.length;
            entity = 1;
            zuuluu = tangon < entity;
 43:
            entity = !zuuluu;
            if(zuuluu) { _fun00002_ip = 73; continue _fun00001 }
 49:
            tangon = michal.attachments;
            zuuluu = tangon.some;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    michal = zuuluu.flags;
                    entity = null;
                    entity = entity != michal;
                    if(!entity) { _fun00004_ip = 69; continue _fun00003 }
 17:
                    oscard = _closure1_slot0;
                    report = _closure1_slot1;
                    tangon = 1;
                    report = report[tangon];
                    tangon = undefined;
                    report = oscard.bind(tangon)(report);
                    tangon = report.hasFlag;
                    zuuluu = zuuluu.flags;
                    michal = _closure1_slot2;
                    michal = michal.IS_REMIX;
                    entity = tangon.bind(report)(zuuluu, michal);
 69:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal);
 73:
            return entity;
        }
    };
    zuuluu['isRemix'] = michal;
    return entity;
})();