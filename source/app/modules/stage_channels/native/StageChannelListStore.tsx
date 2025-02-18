// app/modules/stage_channels/native/StageChannelListStore.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createWithEqualityFn;
    tangon = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = {'showActiveSpeakerPill': false, 'setShowActiveSpeakerPill': null, 'listRef': null};
        zuuluu = function(argFoo) { // Original name: setShowActiveSpeakerPill
            michal = argFoo;
            var _closure3_slot0 = michal;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 3;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = tangon.bind(michal)(zuuluu);
            michal = zuuluu.batchUpdates;
            entity = function() {
                zuuluu = _closure2_slot0;
                michal = {};
                entity = _closure3_slot0;
                michal['showActiveSpeakerPill'] = entity;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['setShowActiveSpeakerPill'] = zuuluu;
        michal = function(argFoo) { // Original name: setListRef
            michal = argFoo;
            var _closure3_slot0 = michal;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 3;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = tangon.bind(michal)(zuuluu);
            michal = zuuluu.batchUpdates;
            entity = function() {
                zuuluu = _closure2_slot0;
                michal = {};
                entity = _closure3_slot0;
                michal['listRef'] = entity;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['setListRef'] = michal;
        return entity;
    };
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/stage_channels/native/StageChannelListStore.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: useActiveSpeakerPillScrollHandler
        report = _closure1_slot4;
        tangon = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 4;
        entity = oscard[entity];
        oscard = undefined;
        entity = tangon.bind(oscard)(entity);
        tangon = entity.shallow;
        entity = function(argFoo) {
            michal = argFoo;
            zuuluu = michal.listRef;
            entity = new Array(2);
            entity[0] = zuuluu;
            michal = michal.setListRef;
            entity[1] = michal;
            return entity;
        };
        report = report.bind(oscard)(entity, tangon);
        tangon = _closure1_slot2;
        entity = 2;
        tangon = tangon.bind(oscard)(report, entity);
        entity = 0;
        oscard = tangon[entity];
        var _closure2_slot0 = oscard;
        entity = 1;
        entity = tangon[entity];
        var _closure2_slot1 = entity;
        report = _closure1_slot3;
        tangon = report.useCallback;
        zuuluu = new Array(1);
        zuuluu[0] = entity;
        entity = function(argFoo) {
            zuuluu = _closure2_slot1;
            entity = undefined;
            michal = argFoo;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        zuuluu = tangon.bind(report)(entity, zuuluu);
        entity = new Array(2);
        entity[0] = zuuluu;
        tangon = report.useCallback;
        zuuluu = new Array(1);
        zuuluu[0] = oscard;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot0;
                michal = null;
                if(!(michal != zuuluu)) { _fun00002_ip = 42; continue _fun00001 }
 13:
                zuuluu = _closure2_slot0;
                michal = zuuluu.scrollToLocation;
                entity = {'section': 0, 'item': 0, 'animated': true};
                entity = michal.bind(zuuluu)(entity);
 42:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        entity[1] = michal;
        return entity;
    };
    zuuluu['useActiveSpeakerPillScrollHandler'] = tangon;
    michal = function() { // Original name: useActiveSpeakerPillState
        tangon = _closure1_slot4;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 4;
        entity = zuuluu[entity];
        zuuluu = undefined;
        entity = michal.bind(zuuluu)(entity);
        michal = entity.shallow;
        entity = function(argFoo) {
            michal = argFoo;
            zuuluu = michal.showActiveSpeakerPill;
            entity = new Array(2);
            entity[0] = zuuluu;
            michal = michal.setShowActiveSpeakerPill;
            entity[1] = michal;
            return entity;
        };
        entity = tangon.bind(zuuluu)(entity, michal);
        return entity;
    };
    zuuluu['useActiveSpeakerPillState'] = michal;
    return entity;
})();