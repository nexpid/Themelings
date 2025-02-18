// app/modules/instant_invite/native/DCDSendUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
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
    tangon = tangon.NativeModules;
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/instant_invite/native/DCDSendUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) {
        entity = _closure1_slot0;
        tangon = entity.DCDSend;
        zuuluu = tangon.sendSMS;
        michal = argFoo;
        entity = argBar;
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = undefined;
        return entity;
    };
    zuuluu['sendSMS'] = tangon;
    tangon = function(argFoo, argBar) {
        entity = _closure1_slot0;
        tangon = entity.DCDSend;
        zuuluu = tangon.sendMail;
        michal = argFoo;
        entity = argBar;
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = undefined;
        return entity;
    };
    zuuluu['sendMail'] = tangon;
    tangon = function() {
        entity = _closure1_slot0;
        michal = entity.DCDSend;
        entity = michal.canSendSMS;
        entity = entity.bind(michal)();
        return entity;
    };
    zuuluu['canSendSMS'] = tangon;
    michal = function() {
        entity = _closure1_slot0;
        michal = entity.DCDSend;
        entity = michal.canSendMail;
        entity = entity.bind(michal)();
        return entity;
    };
    zuuluu['canSendMail'] = michal;
    return entity;
})();