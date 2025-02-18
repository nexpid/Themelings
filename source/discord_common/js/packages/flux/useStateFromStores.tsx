// discord_common/js/packages/flux/useStateFromStores.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = function(argFoo, argBar) { // Original name: defaultAreStatesEqual
        michal = argFoo;
        entity = argBar;
        entity = michal === entity;
        return entity;
    };
    var _closure1_slot7 = entity;
    tangon = function(argFoo, argBar, argBaz) { // Original name: useStateFromStores
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = argFoo;
            tangon = argBar;
            yankee = argBaz;
            verify = arguments[3];
            var _closure2_slot0 = option;
            var _closure2_slot1 = tangon;
            var _closure2_slot2 = yankee;
            report = undefined;
            if(!(verify === report)) { _fun00002_ip = 39; continue _fun00001 }
 32:
            verify = _closure1_slot7;
 39:
            var _closure2_slot3 = verify;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            entity = _closure1_slot5;
            oscard = null;
            entity = entity.bind(report)(oscard);
            golfie = entity.current;
            if(!(oscard == golfie)) { _fun00002_ip = 110; continue _fun00001 }
 78:
            golfie = {};
            golfie['stores'] = option;
            golfie['areStatesEqual'] = verify;
            golfie['getStateFromStores'] = tangon;
            golfie['prevDeps'] = report;
            golfie['state'] = report;
            entity['current'] = golfie;
 110:
            entity = entity.current;
            _closure2_slot4 = entity;
            option = entity.state;
            _closure2_slot5 = option;
            if(!(oscard != yankee)) { _fun00002_ip = 176; continue _fun00001 }
 132:
            offset = _closure1_slot0;
            romeon = _closure1_slot2;
            golfie = 2;
            golfie = romeon[golfie];
            offset = offset.bind(report)(golfie);
            golfie = offset.areArraysShallowEqual;
            entity = entity.prevDeps;
            golfie = golfie.bind(offset)(yankee, entity);
            entity = option;
            if(golfie) { _fun00002_ip = 206; continue _fun00001 }
 176:
            tangon = tangon.bind(report)();
            golfie = oscard != option;
            if(!golfie) { _fun00002_ip = 193; continue _fun00001 }
 187:
            golfie = verify.bind(report)(option, tangon);
 193:
            entity = option;
            if(golfie) { _fun00002_ip = 206; continue _fun00001 }
 199:
            _closure2_slot5 = tangon;
            entity = tangon;
 206:
            golfie = _closure1_slot6;
            tangon = function() {
                zuuluu = _closure2_slot4;
                michal = _closure2_slot1;
                zuuluu['getStateFromStores'] = michal;
                zuuluu = _closure2_slot4;
                michal = _closure2_slot2;
                zuuluu['prevDeps'] = michal;
                michal = _closure2_slot4;
                entity = _closure2_slot5;
                michal['state'] = entity;
                entity = undefined;
                return entity;
            };
            tangon = golfie.bind(report)(tangon);
            tangon = _closure1_slot4;
            golfie = tangon.bind(report)(oscard);
            oscard = _closure1_slot3;
            tangon = 2;
            oscard = oscard.bind(report)(golfie, tangon);
            tangon = 1;
            tangon = oscard[tangon];
            _closure2_slot6 = tangon;
            tangon = _closure1_slot6;
            zuuluu = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 3;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                report = michal.BatchedStoreListener;
                golfie = _closure2_slot0;
                michal = report.prototype;
                zuuluu = Object.create(michal, {constructor: {value: report}});
                oscard = function() {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = _closure2_slot4;
                        entity = zuuluu.getStateFromStores;
                        tangon = entity.bind(zuuluu)();
                        report = _closure2_slot3;
                        entity = _closure2_slot4;
                        zuuluu = entity.state;
                        entity = undefined;
                        zuuluu = report.bind(entity)(zuuluu, tangon);
                        if(zuuluu) { _fun00004_ip = 62; continue _fun00003 }
 41:
                        zuuluu = _closure2_slot4;
                        zuuluu['state'] = tangon;
                        zuuluu = _closure2_slot6;
                        michal = {};
                        michal = zuuluu.bind(entity)(michal);
 62:
                        return entity;
                    }
                };
                option = zuuluu;
                michal = new option[report](golfie, oscard, report);
                tangon = michal instanceof Object ? michal : zuuluu;
                var _closure3_slot0 = tangon;
                zuuluu = tangon.attach;
                michal = 'useStateFromStores';
                michal = zuuluu.bind(tangon)(michal);
                entity = function() {
                    michal = _closure3_slot0;
                    entity = michal.detach;
                    entity = entity.bind(michal)();
                    return entity;
                };
                return entity;
            };
            michal = new Array(0);
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.useState;
    var _closure1_slot4 = option;
    option = report.useRef;
    var _closure1_slot5 = option;
    report = report.useInsertionEffect;
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = '../discord_common/js/packages/flux/useStateFromStores.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: statesWillNeverBeEqual
        entity = false;
        return entity;
    };
    zuuluu['statesWillNeverBeEqual'] = report;
    zuuluu['useStateFromStores'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: useStateFromStoresObject
        oscard = _closure1_slot8;
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 2;
        entity = zuuluu[entity];
        report = undefined;
        golfie = michal.bind(report)(entity);
        offset = argFoo;
        verify = argBar;
        option = argBaz;
        yankee = undefined;
        entity = yankee[oscard](offset, verify, option, golfie, oscard);
        return entity;
    };
    zuuluu['useStateFromStoresObject'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: useStateFromStoresArray
        oscard = _closure1_slot8;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 2;
        entity = zuuluu[entity];
        report = undefined;
        entity = michal.bind(report)(entity);
        golfie = entity.areArraysShallowEqual;
        offset = argFoo;
        verify = argBar;
        option = argBaz;
        yankee = undefined;
        entity = yankee[oscard](offset, verify, option, golfie, oscard);
        return entity;
    };
    zuuluu['useStateFromStoresArray'] = michal;
    return entity;
})();