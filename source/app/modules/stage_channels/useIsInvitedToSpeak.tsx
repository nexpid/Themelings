// app/modules/stage_channels/useIsInvitedToSpeak.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
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
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/stage_channels/useIsInvitedToSpeak.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useIsInvitedToSpeak
        tangon = _closure1_slot0;
        report = _closure1_slot2;
        oscard = 2;
        golfie = report[oscard];
        zuuluu = undefined;
        offset = tangon.bind(zuuluu)(golfie);
        verify = offset.useStateFromStores;
        golfie = _closure1_slot4;
        option = new Array(1);
        option[0] = golfie;
        golfie = function() {
            michal = _closure1_slot4;
            entity = michal.getVoiceChannelId;
            entity = entity.bind(michal)();
            return entity;
        };
        golfie = verify.bind(offset)(option, golfie);
        oscard = report[oscard];
        verify = tangon.bind(zuuluu)(oscard);
        option = verify.useStateFromStores;
        offset = _closure1_slot3;
        oscard = new Array(1);
        oscard[0] = offset;
        michal = function() {
            michal = _closure1_slot3;
            entity = michal.getId;
            entity = entity.bind(michal)();
            return entity;
        };
        oscard = option.bind(verify)(oscard, michal);
        option = _closure1_slot1;
        entity = 3;
        michal = report[entity];
        michal = option.bind(zuuluu)(michal);
        michal = michal.bind(zuuluu)(oscard, golfie);
        entity = report[entity];
        entity = tangon.bind(zuuluu)(entity);
        entity = entity.RequestToSpeakStates;
        entity = entity.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        entity = michal === entity;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();