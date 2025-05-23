// app/modules/applications/message_embed/native/createActivityMessageEmbed.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/applications/message_embed/native/createActivityMessageEmbed.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: createActivityMessageEmbed
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.theme;
            golfie = entity.appId;
            option = entity.embedUrl;
            oscard = entity.message;
            michal = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 1;
            entity = tangon[entity];
            tangon = undefined;
            report = michal.bind(tangon)(entity);
            michal = report.createAppMessageEmbed;
            entity = {};
            entity['theme'] = verify;
            entity['appId'] = golfie;
            entity['embedUrl'] = option;
            entity['message'] = oscard;
            michal = michal.bind(report)(entity);
            entity = null;
            if(!(entity != michal)) { _fun00002_ip = 322; continue _fun00001 }
 90:
            oscard = _closure1_slot0;
            verify = _closure1_slot1;
            report = 2;
            report = verify[report];
            oscard = oscard.bind(tangon)(report);
            report = oscard.extractActivityBookmarkParams;
            report = report.bind(oscard)(option);
            option = report.linkId;
            if(!(entity != option)) { _fun00002_ip = 320; continue _fun00001 }
 134:
            oscard = _closure1_slot0;
            verify = _closure1_slot1;
            report = 3;
            report = verify[report];
            oscard = oscard.bind(tangon)(report);
            report = oscard.getOrFetchCustomActivityLink;
            report = report.bind(oscard)(golfie, option);
            if(!(entity != report)) { _fun00002_ip = 318; continue _fun00001 }
 173:
            oscard = _closure1_slot2;
            zuuluu = oscard.getApplication;
            oscard = zuuluu.bind(oscard)(golfie);
            zuuluu = {};
            yankee = zuuluu;
            offset = michal;
            golfie = copyDataProperties(yankee, offset);
            golfie = entity == oscard;
            tangon = undefined;
            if(golfie) { _fun00002_ip = 214; continue _fun00001 }
 209:
            tangon = oscard.name;
 214:
            golfie = entity != tangon;
            oscard = null;
            if(!golfie) { _fun00002_ip = 226; continue _fun00001 }
 223:
            oscard = tangon;
 226:
            tangon = 'title';
            zuuluu[tangon] = oscard;
            oscard = report.title;
            tangon = 'header';
            zuuluu[tangon] = oscard;
            oscard = report.description;
            tangon = 'info';
            zuuluu[tangon] = oscard;
            oscard = 'bot';
            tangon = 'bannerRatio';
            zuuluu[tangon] = oscard;
            tangon = report.getAssetURL;
            tangon = tangon.bind(report)();
            oscard = entity != tangon;
            report = null;
            if(!oscard) { _fun00002_ip = 298; continue _fun00001 }
 295:
            report = tangon;
 298:
            tangon = 'staticBannerSrc';
            zuuluu[tangon] = report;
            tangon = 'tagline';
            zuuluu[tangon] = entity;
            return zuuluu;
 318:
            return entity;
 320:
            return michal;
 322:
            return entity;
        }
    };
    zuuluu['createActivityMessageEmbed'] = michal;
    return entity;
})();