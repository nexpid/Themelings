// app/modules/profile_effects/utils.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
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
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/profile_effects/utils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) {
        zuuluu = argFoo;
        michal = zuuluu.sort;
        entity = function(argFoo, argBar) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.zIndex;
                tangon = null;
                report = tangon != zuuluu;
                entity = 0;
                if(!report) { _fun00002_ip = 23; continue _fun00001 }
 20:
                entity = zuuluu;
 23:
                zuuluu = argBar;
                zuuluu = zuuluu.zIndex;
                tangon = tangon != zuuluu;
                michal = 0;
                if(!tangon) { _fun00002_ip = 44; continue _fun00001 }
 41:
                michal = zuuluu;
 44:
                entity = entity - michal;
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['sortEffectLayers'] = tangon;
    michal = function(argFoo) {
        report = argFoo;
        var _closure2_slot0 = report;
        tangon = _closure1_slot2;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = _closure2_slot0;
                michal = null;
                if(!(michal != tangon)) { _fun00004_ip = 175; continue _fun00003 }
 18:
                report = _closure1_slot0;
                michal = _closure1_slot1;
                verify = 1;
                tangon = michal[verify];
                michal = undefined;
                report = report.bind(michal)(tangon);
                tangon = report.cloneDeep;
                michal = _closure2_slot0;
                michal = tangon.bind(report)(michal);
                oscard = michal.effects;
                report = oscard.reduce;
                tangon = function(argFoo, argBar) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        oscard = argFoo;
                        entity = argBar;
                        entity = entity.randomizedSources;
                        michal = null;
                        michal = michal == entity;
                        report = undefined;
                        if(michal) { _fun00006_ip = 28; continue _fun00005 }
 23:
                        report = entity.length;
 28:
                        zuuluu = 0;
                        entity = oscard;
                        if(!(report > zuuluu)) { _fun00006_ip = 66; continue _fun00005 }
 37:
                        michal = report;
                        if(!(zuuluu !== oscard)) { _fun00006_ip = 63; continue _fun00005 }
 44:
                        zuuluu = global;
                        tangon = zuuluu.Math;
                        zuuluu = tangon.min;
                        michal = zuuluu.bind(tangon)(oscard, report);
 63:
                        entity = michal;
 66:
                        return entity;
                    }
                };
                golfie = 0;
                tangon = report.bind(oscard)(tangon, golfie);
                tangon = tangon - verify;
                option = global;
                oscard = option.Math;
                report = oscard.floor;
                offset = option.Math;
                option = offset.random;
                option = option.bind(offset)();
                tangon = tangon - golfie;
                tangon = tangon + verify;
                tangon = option * tangon;
                tangon = tangon + golfie;
                tangon = report.bind(oscard)(tangon);
                var _closure3_slot0 = tangon;
                report = michal.effects;
                tangon = report.map;
                zuuluu = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        michal = entity.randomizedSources;
                        zuuluu = null;
                        tangon = zuuluu == michal;
                        zuuluu = undefined;
                        if(tangon) { _fun00008_ip = 25; continue _fun00007 }
 20:
                        zuuluu = michal.length;
 25:
                        michal = 0;
                        if(!(zuuluu > michal)) { _fun00008_ip = 60; continue _fun00007 }
 31:
                        zuuluu = entity.randomizedSources;
                        michal = _closure3_slot0;
                        michal = zuuluu[michal];
                        michal = michal.src;
                        entity['src'] = michal;
 60:
                        return entity;
                    }
                };
                zuuluu = tangon.bind(report)(zuuluu);
                michal['effects'] = zuuluu;
                return michal;
 175:
                entity = _closure2_slot0;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['usePotentiallyRandomizedConfig'] = michal;
    return entity;
})();