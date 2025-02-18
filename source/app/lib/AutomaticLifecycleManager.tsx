// app/lib/AutomaticLifecycleManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function() { // Original name: AutomaticLifecycleManager
            zuuluu = this;
            tangon = _closure1_slot2;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = 0;
            zuuluu['initializedCount'] = michal;
            michal = {};
            zuuluu['actions'] = michal;
            michal = global;
            michal = michal.Map;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            golfie = tangon;
            michal = new golfie[michal](oscard);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['stores'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'initialize';
        entity['key'] = michal;
        michal = function() { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = this;
                zuuluu = michal.initializedCount;
                zuuluu = zuuluu + 1;
                michal['initializedCount'] = zuuluu;
                tangon = michal.initializedCount;
                zuuluu = 1;
                if(!(!(tangon > zuuluu))) { _fun00002_ip = 104; continue _fun00001 }
 33:
                zuuluu = michal._initialize;
                zuuluu = zuuluu.bind(michal)();
                zuuluu = global;
                report = zuuluu.Object;
                tangon = report.entries;
                zuuluu = michal.actions;
                report = tangon.bind(report)(zuuluu);
                tangon = report.forEach;
                zuuluu = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        tangon = argFoo;
                        michal = tangon[Symbol.iterator];
                        tangon = michal().next;
                        oscard = tangon().value;
                        zuuluu = michal;
                        entity = undefined;
                        zuuluu = zuuluu === entity;
                        report = undefined;
                        if(zuuluu) { _fun00004_ip = 27; continue _fun00003 }
 24:
                        report = oscard;
 27:
                        oscard = undefined;
                        if(zuuluu) { _fun00004_ip = 57; continue _fun00003 }
 32:
                        golfie = tangon().value;
                        tangon = michal;
                        tangon = tangon === entity;
                        oscard = undefined;
                        zuuluu = tangon;
                        if(tangon) { _fun00004_ip = 57; continue _fun00003 }
 51:
                        oscard = golfie;
                        zuuluu = tangon;
 57:
                        if(zuuluu) { _fun00004_ip = 63; continue _fun00003 }
 60:
                        michal.return();
 63:
                        zuuluu = _closure1_slot0;
                        tangon = _closure1_slot1;
                        michal = 2;
                        michal = tangon[michal];
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.subscribe;
                        option = 'function';
                        golfie = typeof oscard;
                        michal = oscard;
                        if(!(option !== golfie)) { _fun00004_ip = 112; continue _fun00003 }
 106:
                        michal = oscard.callback;
 112:
                        michal = zuuluu.bind(tangon)(report, michal);
                        return entity;
                    }
                };
                zuuluu = tangon.bind(report)(zuuluu);
                zuuluu = michal.stores;
                michal = zuuluu.forEach;
                entity = function(argFoo, argBar) {
                    michal = argFoo;
                    zuuluu = argBar;
                    entity = zuuluu.addChangeListener;
                    entity = entity.bind(zuuluu)(michal);
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
 104:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(4);
        michal[0] = entity;
        entity = {};
        oscard = 'terminate';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = this;
                michal = entity.initializedCount;
                zuuluu = 0;
                if(!(!(michal <= zuuluu))) { _fun00006_ip = 106; continue _fun00005 }
 15:
                michal = argFoo;
                if(michal) { _fun00006_ip = 38; continue _fun00005 }
 21:
                michal = entity.initializedCount;
                michal = michal - 1;
                entity['initializedCount'] = michal;
                _fun00006_ip = 44; continue _fun00005;
 38:
                entity['initializedCount'] = zuuluu;
 44:
                michal = entity.initializedCount;
                if(!(zuuluu === michal)) { _fun00006_ip = 106; continue _fun00005 }
 54:
                michal = entity._terminate;
                michal = michal.bind(entity)();
                michal = global;
                zuuluu = michal.Object;
                michal = zuuluu.entries;
                entity = entity.actions;
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.forEach;
                entity = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        tangon = argFoo;
                        michal = tangon[Symbol.iterator];
                        tangon = michal().next;
                        oscard = tangon().value;
                        zuuluu = michal;
                        entity = undefined;
                        zuuluu = zuuluu === entity;
                        report = undefined;
                        if(zuuluu) { _fun00008_ip = 27; continue _fun00007 }
 24:
                        report = oscard;
 27:
                        oscard = undefined;
                        if(zuuluu) { _fun00008_ip = 57; continue _fun00007 }
 32:
                        golfie = tangon().value;
                        tangon = michal;
                        tangon = tangon === entity;
                        oscard = undefined;
                        zuuluu = tangon;
                        if(tangon) { _fun00008_ip = 57; continue _fun00007 }
 51:
                        oscard = golfie;
                        zuuluu = tangon;
 57:
                        if(zuuluu) { _fun00008_ip = 63; continue _fun00007 }
 60:
                        michal.return();
 63:
                        zuuluu = _closure1_slot0;
                        tangon = _closure1_slot1;
                        michal = 2;
                        michal = tangon[michal];
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.unsubscribe;
                        option = 'function';
                        golfie = typeof oscard;
                        michal = oscard;
                        if(!(option !== golfie)) { _fun00008_ip = 112; continue _fun00007 }
 106:
                        michal = oscard.callback;
 112:
                        michal = zuuluu.bind(tangon)(report, michal);
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
 106:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = '_initialize';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = '_terminate';
        entity['key'] = oscard;
        report = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        michal[3] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 3;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/AutomaticLifecycleManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();