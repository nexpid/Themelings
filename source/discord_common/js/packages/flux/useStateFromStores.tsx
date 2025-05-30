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
            golfie = argFoo;
            option = argBar;
            romeon = argBaz;
            offset = arguments[3];
            var _closure2_slot0 = golfie;
            var _closure2_slot1 = option;
            var _closure2_slot2 = romeon;
            report = undefined;
            if(!(offset === report)) { _fun00002_ip = 39; continue _fun00001 }
 32:
            offset = _closure1_slot7;
 39:
            var _closure2_slot3 = offset;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            entity = _closure1_slot5;
            oscard = null;
            entity = entity.bind(report)(oscard);
            tangon = entity.current;
            if(!(oscard == tangon)) { _fun00002_ip = 145; continue _fun00001 }
 78:
            tangon = {};
            tangon['stores'] = golfie;
            tangon['areStatesEqual'] = offset;
            tangon['getStateFromStores'] = option;
            tangon['prevDeps'] = report;
            tangon['state'] = report;
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            golfie = 2;
            golfie = yankee[golfie];
            verify = verify.bind(report)(golfie);
            golfie = verify.createContext;
            golfie = golfie.bind(verify)();
            tangon['libDiscoreContext'] = golfie;
            entity['current'] = tangon;
 145:
            golfie = entity.current;
            _closure2_slot4 = golfie;
            tangon = golfie.state;
            _closure2_slot5 = tangon;
            if(!(oscard != romeon)) { _fun00002_ip = 214; continue _fun00001 }
 167:
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 3;
            entity = yankee[entity];
            yankee = verify.bind(report)(entity);
            verify = yankee.areArraysShallowEqual;
            entity = golfie.prevDeps;
            verify = verify.bind(yankee)(romeon, entity);
            entity = tangon;
            if(verify) { _fun00002_ip = 346; continue _fun00001 }
 214:
            verify = golfie.libDiscoreContext;
            if(!(report !== verify)) { _fun00002_ip = 261; continue _fun00001 }
 224:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            verify = 2;
            verify = romeon[verify];
            romeon = yankee.bind(report)(verify);
            yankee = romeon.enterContext;
            verify = golfie.libDiscoreContext;
            verify = yankee.bind(romeon)(verify);
 261:
            verify = option.bind(report)();
            option = oscard != tangon;
            if(!option) { _fun00002_ip = 278; continue _fun00001 }
 272:
            option = offset.bind(report)(tangon, verify);
 278:
            offset = false;
            if(option) { _fun00002_ip = 292; continue _fun00001 }
 283:
            _closure2_slot5 = verify;
            offset = true;
            tangon = verify;
 292:
            option = golfie.libDiscoreContext;
            entity = tangon;
            if(!(report !== option)) { _fun00002_ip = 346; continue _fun00001 }
 305:
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            option = 2;
            option = yankee[option];
            verify = verify.bind(report)(option);
            option = verify.exitContext;
            golfie = golfie.libDiscoreContext;
            golfie = option.bind(verify)(golfie, offset);
            entity = tangon;
 346:
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
                michal = 4;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                oscard = michal.BatchedStoreListener;
                verify = _closure2_slot0;
                michal = _closure2_slot4;
                golfie = michal.libDiscoreContext;
                michal = oscard.prototype;
                zuuluu = Object.create(michal, {constructor: {value: oscard}});
                option = function() {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        entity = _closure2_slot4;
                        zuuluu = entity.libDiscoreContext;
                        entity = undefined;
                        if(!(entity !== zuuluu)) { _fun00004_ip = 63; continue _fun00003 }
 19:
                        tangon = _closure1_slot0;
                        report = _closure1_slot2;
                        zuuluu = 2;
                        zuuluu = report[zuuluu];
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.enterContext;
                        zuuluu = _closure2_slot4;
                        zuuluu = zuuluu.libDiscoreContext;
                        zuuluu = tangon.bind(report)(zuuluu);
 63:
                        tangon = _closure2_slot4;
                        zuuluu = tangon.getStateFromStores;
                        tangon = zuuluu.bind(tangon)();
                        report = _closure2_slot3;
                        zuuluu = _closure2_slot4;
                        zuuluu = zuuluu.state;
                        zuuluu = report.bind(entity)(zuuluu, tangon);
                        report = false;
                        if(zuuluu) { _fun00004_ip = 124; continue _fun00003 }
 101:
                        zuuluu = _closure2_slot4;
                        zuuluu['state'] = tangon;
                        tangon = _closure2_slot6;
                        zuuluu = {};
                        zuuluu = tangon.bind(entity)(zuuluu);
                        report = true;
 124:
                        zuuluu = _closure2_slot4;
                        zuuluu = zuuluu.libDiscoreContext;
                        if(!(entity !== zuuluu)) { _fun00004_ip = 183; continue _fun00003 }
 138:
                        tangon = _closure1_slot0;
                        oscard = _closure1_slot2;
                        zuuluu = 2;
                        zuuluu = oscard[zuuluu];
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.exitContext;
                        michal = _closure2_slot4;
                        michal = michal.libDiscoreContext;
                        michal = zuuluu.bind(tangon)(michal, report);
 183:
                        return entity;
                    }
                };
                offset = zuuluu;
                michal = new offset[oscard](verify, option, golfie, oscard);
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
    report = 5;
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
        entity = 3;
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
        entity = 3;
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