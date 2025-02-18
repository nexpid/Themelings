// app/utils/native/RunAfterInteractionsUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function(argFoo) { // Original name: runAfterInteractions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = arguments[1];
            entity = argFoo;
            var _closure2_slot0 = entity;
            tangon = undefined;
            if(!(report === tangon)) { _fun00002_ip = 24; continue _fun00001 }
 18:
            report = 2000;
 24:
            var _closure2_slot1 = tangon;
            var _closure2_slot2 = tangon;
            golfie = _closure1_slot2;
            oscard = golfie.runAfterInteractions;
            zuuluu = function() {
                zuuluu = _closure2_slot2;
                michal = zuuluu.cancel;
                michal = michal.bind(zuuluu)();
                michal = _closure2_slot0;
                entity = undefined;
                michal = michal.bind(entity)();
                return entity;
            };
            zuuluu = oscard.bind(golfie)(zuuluu);
            _closure2_slot1 = zuuluu;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 1;
            entity = oscard[entity];
            entity = zuuluu.bind(tangon)(entity);
            tangon = entity.DelayedCall;
            entity = tangon.prototype;
            zuuluu = Object.create(entity, {constructor: {value: tangon}});
            option = function() {
                zuuluu = _closure2_slot1;
                michal = zuuluu.cancel;
                michal = michal.bind(zuuluu)();
                michal = _closure2_slot0;
                entity = undefined;
                michal = michal.bind(entity)();
                return entity;
            };
            offset = zuuluu;
            verify = report;
            entity = new offset[tangon](verify, option, golfie);
            zuuluu = entity instanceof Object ? entity : zuuluu;
            _closure2_slot2 = zuuluu;
            entity = zuuluu.delay;
            entity = entity.bind(zuuluu)();
            entity = {};
            michal = function() { // Original name: cancel
                zuuluu = _closure2_slot2;
                michal = zuuluu.cancel;
                michal = michal.bind(zuuluu)();
                michal = _closure2_slot1;
                entity = michal.cancel;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            entity['cancel'] = michal;
            return entity;
        }
    };
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.InteractionManager;
    var _closure1_slot2 = tangon;
    tangon = {};
    tangon['runAfterInteractions'] = michal;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'utils/native/RunAfterInteractionsUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['runAfterInteractions'] = michal;
    return entity;
})();