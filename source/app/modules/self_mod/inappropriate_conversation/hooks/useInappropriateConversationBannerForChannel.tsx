// app/modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx
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
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useInappropriateConversationBannerForChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = argFoo;
            golfie = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 1;
            zuuluu = verify[entity];
            entity = undefined;
            report = golfie.bind(entity)(zuuluu);
            tangon = report.useIsEligibleForInappropriateConversationWarning;
            zuuluu = {};
            oscard = argBar;
            zuuluu['location'] = oscard;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = 2;
            zuuluu = verify[zuuluu];
            report = golfie.bind(entity)(zuuluu);
            zuuluu = report.useSafetyAlertsSettingOrDefault;
            zuuluu = zuuluu.bind(report)();
            report = 3;
            report = verify[report];
            oscard = golfie.bind(entity)(report);
            report = oscard.useInappropriateConversationWarningsForChannel;
            report = report.bind(oscard)(option);
            oscard = 4;
            oscard = verify[oscard];
            golfie = golfie.bind(entity)(oscard);
            oscard = golfie.useChannelSafetyWarning;
            michal = _closure1_slot2;
            michal = michal.INAPPROPRIATE_CONVERSATION_TIER_2;
            michal = oscard.bind(golfie)(option, michal);
            if(!tangon) { _fun00002_ip = 167; continue _fun00001 }
 130:
            if(!zuuluu) { _fun00002_ip = 167; continue _fun00001 }
 133:
            tangon = report.length;
            zuuluu = 0;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 167; continue _fun00001 }
 144:
            tangon = report.some;
            zuuluu = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = zuuluu.type;
                    entity = _closure1_slot2;
                    entity = entity.INAPPROPRIATE_CONVERSATION_TIER_1;
                    entity = tangon === entity;
                    if(entity) { _fun00004_ip = 65; continue _fun00003 }
 28:
                    tangon = zuuluu.type;
                    michal = _closure1_slot2;
                    michal = michal.INAPPROPRIATE_CONVERSATION_TIER_2;
                    michal = tangon === michal;
                    if(!michal) { _fun00004_ip = 62; continue _fun00003 }
 50:
                    tangon = zuuluu.dismiss_timestamp;
                    zuuluu = null;
                    michal = zuuluu != tangon;
 62:
                    entity = michal;
 65:
                    return entity;
                }
            };
            zuuluu = tangon.bind(report)(zuuluu);
            if(zuuluu) { _fun00002_ip = 167; continue _fun00001 }
 165:
            return michal;
 167:
            return entity;
        }
    };
    zuuluu['useInappropriateConversationBannerForChannel'] = michal;
    return entity;
})();