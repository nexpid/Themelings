// app/modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx
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
    tangon = 0;
    option = oscard[tangon];
    golfie = argBaz;
    entity = undefined;
    golfie = golfie.bind(entity)(option);
    var _closure1_slot2 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SafetyWarningTypes;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useInappropriateConversationWarningsForChannel
        michal = argFoo;
        var _closure2_slot0 = michal;
        oscard = _closure1_slot0;
        report = _closure1_slot1;
        tangon = 1;
        report = report[tangon];
        tangon = undefined;
        oscard = oscard.bind(tangon)(report);
        report = oscard.useStateFromStores;
        zuuluu = _closure1_slot2;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            zuuluu = _closure1_slot2;
            michal = zuuluu.getChannelSafetyWarnings;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        zuuluu = report.bind(oscard)(tangon, michal, zuuluu);
        michal = zuuluu.filter;
        entity = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = argFoo;
                tangon = zuuluu.type;
                entity = _closure1_slot3;
                entity = entity.INAPPROPRIATE_CONVERSATION_TIER_1;
                entity = tangon === entity;
                if(entity) { _fun00002_ip = 47; continue _fun00001 }
 28:
                zuuluu = zuuluu.type;
                michal = _closure1_slot3;
                michal = michal.INAPPROPRIATE_CONVERSATION_TIER_2;
                entity = zuuluu === michal;
 47:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['useInappropriateConversationWarningsForChannel'] = michal;
    return entity;
})();