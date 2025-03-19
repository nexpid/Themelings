// app/modules/activities/embedded-application-presence-utils.tsx
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
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ActivityFlags;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/embedded-application-presence-utils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: applyContextlessFlags
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tangon = entity.flags;
            entity = entity.embeddedActivity;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.CONTEXTLESS;
            zuuluu = tangon | zuuluu;
            report = _closure1_slot2;
            tangon = report.getChannelId;
            report = tangon.bind(report)();
            tangon = null;
            tangon = tangon != report;
            if(!tangon) { _fun00002_ip = 102; continue _fun00001 }
 54:
            oscard = entity.location;
            golfie = oscard.kind;
            verify = _closure1_slot0;
            option = _closure1_slot1;
            oscard = 2;
            option = option[oscard];
            oscard = undefined;
            oscard = verify.bind(oscard)(option);
            oscard = oscard.EmbeddedActivityLocationKind;
            oscard = oscard.CONTEXTLESS;
            tangon = golfie === oscard;
 102:
            if(!tangon) { _fun00002_ip = 120; continue _fun00001 }
 105:
            entity = entity.location;
            entity = entity.starting_channel_id;
            tangon = entity === report;
 120:
            entity = zuuluu;
            if(!tangon) { _fun00002_ip = 140; continue _fun00001 }
 126:
            michal = _closure1_slot3;
            michal = michal.PARTY_PRIVACY_VOICE_CHANNEL;
            entity = zuuluu | michal;
 140:
            return entity;
        }
    };
    zuuluu['applyContextlessFlags'] = michal;
    michal = [1, 0];
    zuuluu['DEFAULT_EMBEDDED_ACTIVITY_PARTY_SIZE'] = michal;
    return entity;
})();