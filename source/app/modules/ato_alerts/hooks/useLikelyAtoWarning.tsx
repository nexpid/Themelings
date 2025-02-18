// app/modules/ato_alerts/hooks/useLikelyAtoWarning.tsx
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
    tangon = tangon.SafetyWarningTypes;
    var _closure1_slot2 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/ato_alerts/hooks/useLikelyAtoWarning.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useLikelyAtoWarning
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = argFoo;
            golfie = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 1;
            zuuluu = verify[entity];
            entity = undefined;
            tangon = golfie.bind(entity)(zuuluu);
            zuuluu = tangon.useIsSpamMessageRequest;
            oscard = zuuluu.bind(tangon)(option);
            zuuluu = 2;
            zuuluu = verify[zuuluu];
            tangon = golfie.bind(entity)(zuuluu);
            zuuluu = tangon.useIsMessageRequest;
            report = zuuluu.bind(tangon)(option);
            zuuluu = 3;
            zuuluu = verify[zuuluu];
            tangon = golfie.bind(entity)(zuuluu);
            zuuluu = tangon.useChannelSafetyWarning;
            michal = _closure1_slot2;
            michal = michal.LIKELY_ATO;
            michal = zuuluu.bind(tangon)(option, michal);
            zuuluu = 4;
            zuuluu = verify[zuuluu];
            tangon = golfie.bind(entity)(zuuluu);
            zuuluu = tangon.useInappropriateConversationWarningsForChannel;
            zuuluu = zuuluu.bind(tangon)(option);
            tangon = zuuluu.length;
            zuuluu = 0;
            tangon = tangon > zuuluu;
            zuuluu = 5;
            zuuluu = verify[zuuluu];
            golfie = golfie.bind(entity)(zuuluu);
            zuuluu = golfie.useStrangerDangerWarning;
            golfie = zuuluu.bind(golfie)(option);
            zuuluu = null;
            zuuluu = zuuluu != golfie;
            if(oscard) { _fun00002_ip = 173; continue _fun00001 }
 162:
            if(report) { _fun00002_ip = 173; continue _fun00001 }
 165:
            if(tangon) { _fun00002_ip = 173; continue _fun00001 }
 168:
            if(zuuluu) { _fun00002_ip = 173; continue _fun00001 }
 171:
            return michal;
 173:
            return entity;
        }
    };
    zuuluu['useLikelyAtoWarning'] = michal;
    return entity;
})();