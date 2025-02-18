// app/modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx
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
    entity = 3;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useInappropriateConversationSafetyToolsWarningForChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            michal = 0;
            tangon = option[michal];
            zuuluu = undefined;
            oscard = golfie.bind(zuuluu)(tangon);
            report = oscard.useIsEligibleForInappropriateConversationWarning;
            tangon = {};
            verify = 'safety-tools-button';
            tangon['location'] = verify;
            report = report.bind(oscard)(tangon);
            tangon = 1;
            tangon = option[tangon];
            oscard = golfie.bind(zuuluu)(tangon);
            tangon = oscard.useSafetyAlertsSettingOrDefault;
            tangon = tangon.bind(oscard)();
            oscard = 2;
            oscard = option[oscard];
            option = golfie.bind(zuuluu)(oscard);
            golfie = option.useInappropriateConversationWarningsForChannel;
            oscard = argFoo;
            oscard = golfie.bind(option)(oscard);
            if(!report) { _fun00002_ip = 127; continue _fun00001 }
 100:
            if(!tangon) { _fun00002_ip = 127; continue _fun00001 }
 103:
            report = oscard.filter;
            tangon = function(argFoo) {
                entity = argFoo;
                michal = entity.dismiss_timestamp;
                entity = null;
                entity = entity != michal;
                return entity;
            };
            tangon = report.bind(oscard)(tangon);
            report = tangon.length;
            if(!(michal === report)) { _fun00002_ip = 129; continue _fun00001 }
 127:
            return zuuluu;
 129:
            zuuluu = tangon.sort;
            entity = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    entity = argBar;
                    tangon = michal.type;
                    zuuluu = entity.type;
                    if(!(!(tangon > zuuluu))) { _fun00004_ip = 45; continue _fun00003 }
 20:
                    michal = michal.dismiss_timestamp;
                    entity = entity.dismiss_timestamp;
                    michal = michal < entity;
                    entity = -1;
                    if(!michal) { _fun00004_ip = 48; continue _fun00003 }
 45:
                    entity = 1;
 48:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity);
            entity = entity[michal];
            return entity;
        }
    };
    zuuluu['useInappropriateConversationSafetyToolsWarningForChannel'] = michal;
    return entity;
})();