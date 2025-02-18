// discord_common/js/packages/media-engine/webrtc/GetUserMediaPool.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    michal = function() {
        tangon = _closure1_slot1;
        zuuluu = function() { // Original name: GetUserMediaPool
            tangon = _closure1_slot0;
            zuuluu = _closure2_slot0;
            entity = undefined;
            michal = this;
            michal = tangon.bind(entity)(michal, zuuluu);
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'acquire';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            entity = global;
            entity = entity.navigator;
            zuuluu = entity.mediaDevices;
            michal = zuuluu.getUserMedia;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(2);
        michal[0] = entity;
        entity = {};
        oscard = 'release';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            michal = argFoo;
            entity = michal.getTracks;
            zuuluu = entity.bind(michal)();
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                michal = argFoo;
                entity = function() {
                    entity = undefined;
                    return entity;
                };
                michal['onended'] = entity;
                entity = michal.stop;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        michal[1] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 2;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/media-engine/webrtc/GetUserMediaPool.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();