// app/modules/applications/message_embed/utils/activityBookmarkUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    tangon = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tangon;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    entity = 1;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/applications/message_embed/utils/activityBookmarkUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: extractActivityBookmarkParams
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 0;
            entity = michal[entity];
            michal = undefined;
            tangon = zuuluu.bind(michal)(entity);
            zuuluu = tangon.toURLSafe;
            entity = argFoo;
            report = zuuluu.bind(tangon)(entity);
            entity = {};
            tangon = null;
            zuuluu = tangon == report;
            oscard = undefined;
            if(zuuluu) { _fun00002_ip = 71; continue _fun00001 }
 51:
            option = report.searchParams;
            golfie = option.get;
            zuuluu = 'referrer_id';
            oscard = golfie.bind(option)(zuuluu);
 71:
            golfie = tangon != oscard;
            zuuluu = undefined;
            if(!golfie) { _fun00002_ip = 83; continue _fun00001 }
 80:
            zuuluu = oscard;
 83:
            entity['referrerId'] = zuuluu;
            zuuluu = tangon == report;
            oscard = undefined;
            if(zuuluu) { _fun00002_ip = 117; continue _fun00001 }
 97:
            option = report.searchParams;
            golfie = option.get;
            zuuluu = 'custom_id';
            oscard = golfie.bind(option)(zuuluu);
 117:
            golfie = tangon != oscard;
            zuuluu = undefined;
            if(!golfie) { _fun00002_ip = 129; continue _fun00001 }
 126:
            zuuluu = oscard;
 129:
            entity['customId'] = zuuluu;
            oscard = tangon == report;
            zuuluu = undefined;
            if(oscard) { _fun00002_ip = 163; continue _fun00001 }
 143:
            golfie = report.searchParams;
            oscard = golfie.get;
            report = 'link_id';
            zuuluu = oscard.bind(golfie)(report);
 163:
            tangon = tangon != zuuluu;
            michal = undefined;
            if(!tangon) { _fun00002_ip = 175; continue _fun00001 }
 172:
            michal = zuuluu;
 175:
            entity['linkId'] = michal;
            return entity;
        }
    };
    zuuluu['extractActivityBookmarkParams'] = michal;
    return entity;
})();