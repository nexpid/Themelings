// app/modules/applications/message_embed/native/createActivityMessageEmbed.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
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
            tangon = _closure1_slot2;
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
            if(!(entity != michal)) { _fun00002_ip = 347; continue _fun00001 }
 92:
            oscard = _closure1_slot1;
            verify = _closure1_slot2;
            report = 2;
            report = verify[report];
            oscard = oscard.bind(tangon)(report);
            report = oscard.toURLSafe;
            report = report.bind(oscard)(option);
            oscard = entity == report;
            option = undefined;
            if(oscard) { _fun00002_ip = 152; continue _fun00001 }
 132:
            verify = report.searchParams;
            oscard = verify.get;
            report = 'link_id';
            option = oscard.bind(verify)(report);
 152:
            if(!(entity != option)) { _fun00002_ip = 345; continue _fun00001 }
 159:
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            report = 3;
            report = verify[report];
            oscard = oscard.bind(tangon)(report);
            report = oscard.getOrFetchCustomActivityLink;
            report = report.bind(oscard)(golfie, option);
            if(!(entity != report)) { _fun00002_ip = 343; continue _fun00001 }
 198:
            oscard = _closure1_slot3;
            zuuluu = oscard.getApplication;
            oscard = zuuluu.bind(oscard)(golfie);
            zuuluu = {};
            yankee = zuuluu;
            offset = michal;
            golfie = copyDataProperties(yankee, offset);
            golfie = entity == oscard;
            tangon = undefined;
            if(golfie) { _fun00002_ip = 239; continue _fun00001 }
 234:
            tangon = oscard.name;
 239:
            golfie = entity != tangon;
            oscard = null;
            if(!golfie) { _fun00002_ip = 251; continue _fun00001 }
 248:
            oscard = tangon;
 251:
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
            if(!oscard) { _fun00002_ip = 323; continue _fun00001 }
 320:
            report = tangon;
 323:
            tangon = 'staticBannerSrc';
            zuuluu[tangon] = report;
            tangon = 'tagline';
            zuuluu[tangon] = entity;
            return zuuluu;
 343:
            return entity;
 345:
            return michal;
 347:
            return entity;
        }
    };
    zuuluu['createActivityMessageEmbed'] = michal;
    return entity;
})();