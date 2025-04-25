// app/modules/search_v2/native/SearchFetchPendingManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    golfie = option.bind(entity)(tangon);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.subscribeTextInputValue;
    var _closure1_slot3 = tangon;
    tangon = function() { // Original name: SearchFetchPendingManager
        zuuluu = this;
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot2;
        tangon = _closure1_slot5;
        entity = undefined;
        tangon = report.bind(entity)(zuuluu, tangon);
        tangon = global;
        tangon = tangon.Set;
        report = tangon.prototype;
        report = Object.create(report, {constructor: {value: tangon}});
        option = report;
        tangon = new option[tangon](golfie);
        tangon = tangon instanceof Object ? tangon : report;
        zuuluu['pending'] = tangon;
        tangon = function(argFoo) {
            entity = _closure2_slot0;
            zuuluu = entity.pending;
            michal = zuuluu.add;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        zuuluu['add'] = tangon;
        tangon = function(argFoo) {
            entity = _closure2_slot0;
            zuuluu = entity.pending;
            michal = zuuluu.delete;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        zuuluu['remove'] = tangon;
        tangon = function(argFoo) {
            entity = _closure2_slot0;
            zuuluu = entity.pending;
            michal = zuuluu.has;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        zuuluu['has'] = tangon;
        tangon = function(argFoo, argBar) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = argBar;
                tangon = _closure2_slot0;
                michal = tangon.has;
                michal = michal.bind(tangon)(zuuluu);
                if(!michal) { _fun00002_ip = 81; continue _fun00001 }
 23:
                report = _closure1_slot0;
                tangon = _closure1_slot1;
                michal = 3;
                tangon = tangon[michal];
                michal = undefined;
                report = report.bind(michal)(tangon);
                tangon = report.fetchNextMessages;
                michal = argFoo;
                michal = tangon.bind(report)(michal, zuuluu);
                if(!michal) { _fun00002_ip = 81; continue _fun00001 }
 66:
                michal = _closure2_slot0;
                entity = michal.remove;
                entity = entity.bind(michal)(zuuluu);
 81:
                entity = undefined;
                return entity;
            }
        };
        zuuluu['flush'] = tangon;
        michal = function() {
            michal = _closure2_slot0;
            entity = global;
            entity = entity.Set;
            zuuluu = entity.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
            tangon = zuuluu;
            entity = new tangon[entity](zuuluu);
            entity = entity instanceof Object ? entity : zuuluu;
            michal['pending'] = entity;
            entity = undefined;
            return entity;
        };
        zuuluu['reset'] = michal;
        return entity;
    };
    var _closure1_slot5 = tangon;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/SearchFetchPendingManager.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useSearchFetchPendingManager
        tangon = _closure1_slot0;
        report = _closure1_slot1;
        entity = 4;
        entity = report[entity];
        report = undefined;
        tangon = tangon.bind(report)(entity);
        entity = function() {
            entity = _closure1_slot4;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            zuuluu = michal;
            entity = new zuuluu[entity](michal);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        entity = tangon.bind(report)(entity);
        var _closure2_slot0 = entity;
        tangon = _closure1_slot3;
        zuuluu = argFoo;
        michal = function(argFoo, argBar) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = argBar;
                entity = argFoo;
                if(!(michal !== entity)) { _fun00004_ip = 27; continue _fun00003 }
 10:
                michal = _closure2_slot0;
                entity = michal.reset;
                entity = entity.bind(michal)();
 27:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['useSearchFetchPendingManager'] = michal;
    return entity;
})();