// app/modules/media_viewer/native/useMediaViewerSources.tsx
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
    tangon = oscard.bind(entity)(tangon);
    report = tangon.createZustandStore;
    tangon = function() {
        entity = {};
        michal = new Array(0);
        entity['sources'] = michal;
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
    tangon = report.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/media_viewer/native/useMediaViewerSources.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['MediaViewerSourcesStore'] = tangon;
    tangon = function(argFoo) { // Original name: setMediaViewerSources
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tangon = entity.sources;
            zuuluu = entity.initialIndex;
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00002_ip = 25; continue _fun00001 }
 23:
            zuuluu = null;
 25:
            var _closure2_slot0 = zuuluu;
            var _closure2_slot2 = entity;
            oscard = new Array(0);
            var _closure2_slot1 = oscard;
            zuuluu = global;
            zuuluu = zuuluu.Set;
            report = zuuluu.prototype;
            report = Object.create(report, {constructor: {value: zuuluu}});
            option = report;
            zuuluu = new option[zuuluu](golfie);
            report = zuuluu instanceof Object ? zuuluu : report;
            _closure2_slot2 = report;
            zuuluu = tangon.forEach;
            michal = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = argFoo;
                    report = argBar;
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot1;
                    entity = 1;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.flattenSource;
                    zuuluu = michal.bind(zuuluu)(tangon);
                    michal = zuuluu.spoiler;
                    if(michal) { _fun00004_ip = 57; continue _fun00003 }
 51:
                    michal = zuuluu.obscure;
 57:
                    if(!michal) { _fun00004_ip = 71; continue _fun00003 }
 60:
                    zuuluu = _closure2_slot0;
                    michal = zuuluu !== report;
 71:
                    if(!michal) { _fun00004_ip = 91; continue _fun00003 }
 74:
                    zuuluu = _closure2_slot2;
                    michal = zuuluu.add;
                    michal = michal.bind(zuuluu)(report);
 91:
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.push;
                    michal = michal.bind(zuuluu)(tangon);
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            tangon = _closure1_slot2;
            zuuluu = tangon.setState;
            michal = {};
            michal['sources'] = oscard;
            michal['spoilerIndexes'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['setMediaViewerSources'] = tangon;
    tangon = function(argFoo) { // Original name: removeSpoiler
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            report = _closure1_slot2;
            tangon = report.getField;
            michal = 'spoilerIndexes';
            report = tangon.bind(report)(michal);
            michal = report.has;
            michal = michal.bind(report)(zuuluu);
            if(!michal) { _fun00006_ip = 101; continue _fun00005 }
 38:
            michal = global;
            michal = michal.Set;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            golfie = tangon;
            oscard = report;
            michal = new golfie[michal](oscard, report);
            tangon = michal instanceof Object ? michal : tangon;
            michal = tangon.delete;
            michal = michal.bind(tangon)(zuuluu);
            zuuluu = _closure1_slot2;
            michal = zuuluu.setState;
            entity = {};
            entity['spoilerIndexes'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 101:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['removeSpoiler'] = tangon;
    michal = function(argFoo) { // Original name: toggleSpoiler
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            report = _closure1_slot2;
            tangon = report.getField;
            michal = 'spoilerIndexes';
            oscard = tangon.bind(report)(michal);
            michal = global;
            michal = michal.Set;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            golfie = tangon;
            michal = new golfie[michal](oscard, report);
            tangon = michal instanceof Object ? michal : tangon;
            michal = tangon.has;
            michal = michal.bind(tangon)(zuuluu);
            if(michal) { _fun00008_ip = 78; continue _fun00007 }
 66:
            michal = tangon.add;
            michal = michal.bind(tangon)(zuuluu);
            _fun00008_ip = 88; continue _fun00007;
 78:
            michal = tangon.delete;
            michal = michal.bind(tangon)(zuuluu);
 88:
            zuuluu = _closure1_slot2;
            michal = zuuluu.setState;
            entity = {};
            entity['spoilerIndexes'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        }
    };
    zuuluu['toggleSpoiler'] = michal;
    return entity;
})();