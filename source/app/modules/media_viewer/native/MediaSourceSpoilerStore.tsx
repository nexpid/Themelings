// app/modules/media_viewer/native/MediaSourceSpoilerStore.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    option = oscard.bind(entity)(tangon);
    report = option.create;
    tangon = function() {
        entity = {};
        michal = global;
        michal = michal.Set;
        zuuluu = michal.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
        tangon = zuuluu;
        michal = new tangon[michal](zuuluu);
        michal = michal instanceof Object ? michal : zuuluu;
        entity['spoilerIndexes'] = michal;
        return entity;
    };
    tangon = report.bind(option)(tangon);
    var _closure1_slot2 = tangon;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/media_viewer/native/MediaSourceSpoilerStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['useMediaSourceSpoilerStore'] = tangon;
    tangon = function(argFoo) { // Original name: removeSpoiler
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = global;
            report = michal.Set;
            tangon = _closure1_slot2;
            zuuluu = tangon.getState;
            zuuluu = zuuluu.bind(tangon)();
            oscard = zuuluu.spoilerIndexes;
            tangon = report.prototype;
            tangon = Object.create(tangon, {constructor: {value: report}});
            golfie = tangon;
            zuuluu = new golfie[report](oscard, report);
            report = zuuluu instanceof Object ? zuuluu : tangon;
            var _closure2_slot0 = report;
            tangon = report.delete;
            zuuluu = argFoo;
            zuuluu = tangon.bind(report)(zuuluu);
            if(!zuuluu) { _fun00002_ip = 111; continue _fun00001 }
 73:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 1;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = tangon.bind(michal)(zuuluu);
            michal = zuuluu.batchUpdates;
            entity = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.setState;
                entity = {};
                tangon = _closure2_slot0;
                entity['spoilerIndexes'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
 111:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['removeSpoiler'] = tangon;
    tangon = function(argFoo) { // Original name: addSpoiler
        entity = global;
        report = entity.Set;
        tangon = _closure1_slot2;
        zuuluu = tangon.getState;
        zuuluu = zuuluu.bind(tangon)();
        oscard = zuuluu.spoilerIndexes;
        tangon = report.prototype;
        tangon = Object.create(tangon, {constructor: {value: report}});
        golfie = tangon;
        zuuluu = new golfie[report](oscard, report);
        report = zuuluu instanceof Object ? zuuluu : tangon;
        var _closure2_slot0 = report;
        tangon = report.add;
        zuuluu = argFoo;
        zuuluu = tangon.bind(report)(zuuluu);
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 1;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot2;
            michal = zuuluu.setState;
            entity = {};
            tangon = _closure2_slot0;
            entity['spoilerIndexes'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['addSpoiler'] = tangon;
    tangon = function(argFoo) { // Original name: toggleSpoiler
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            entity = global;
            oscard = entity.Set;
            tangon = _closure1_slot2;
            zuuluu = tangon.getState;
            zuuluu = zuuluu.bind(tangon)();
            golfie = zuuluu.spoilerIndexes;
            tangon = oscard.prototype;
            tangon = Object.create(tangon, {constructor: {value: oscard}});
            option = tangon;
            zuuluu = new option[oscard](golfie, oscard);
            tangon = zuuluu instanceof Object ? zuuluu : tangon;
            var _closure2_slot0 = tangon;
            zuuluu = tangon.has;
            zuuluu = zuuluu.bind(tangon)(report);
            if(zuuluu) { _fun00004_ip = 85; continue _fun00003 }
 73:
            zuuluu = tangon.add;
            zuuluu = zuuluu.bind(tangon)(report);
            _fun00004_ip = 95; continue _fun00003;
 85:
            zuuluu = tangon.delete;
            zuuluu = zuuluu.bind(tangon)(report);
 95:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 1;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.setState;
                entity = {};
                tangon = _closure2_slot0;
                entity['spoilerIndexes'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['toggleSpoiler'] = tangon;
    michal = function() { // Original name: resetSpoilers
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot2;
            michal = zuuluu.setState;
            entity = {};
            tangon = global;
            tangon = tangon.Set;
            report = tangon.prototype;
            report = Object.create(report, {constructor: {value: tangon}});
            golfie = report;
            tangon = new golfie[tangon](oscard);
            tangon = tangon instanceof Object ? tangon : report;
            entity['spoilerIndexes'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['resetSpoilers'] = michal;
    return entity;
})();