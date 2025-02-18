// app/modules/messages/useMessageMaxLength.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: getMaxMessageLength_
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.canUseIncreasedMessageLength;
            entity = report.getCurrentUser;
            entity = entity.bind(report)();
            entity = zuuluu.bind(tangon)(entity);
            if(entity) { _fun00002_ip = 57; continue _fun00001 }
 51:
            entity = _closure1_slot5;
            _fun00002_ip = 61; continue _fun00001;
 57:
            entity = _closure1_slot4;
 61:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    tangon = report.bind(entity)(tangon);
    golfie = tangon.MAX_MESSAGE_LENGTH_PREMIUM;
    var _closure1_slot4 = golfie;
    tangon = tangon.MAX_MESSAGE_LENGTH;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/useMessageMaxLength.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: useMessageMaxLength
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        entity = _closure1_slot3;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            zuuluu = _closure1_slot6;
            michal = _closure1_slot3;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    michal = function() { // Original name: getMaxMessageLength
        zuuluu = _closure1_slot6;
        michal = _closure1_slot3;
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['getMaxMessageLength'] = michal;
    return entity;
})();