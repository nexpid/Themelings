// discord_common/js/packages/flux/ChangeListeners.tsx
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
        zuuluu = function() { // Original name: ChangeListeners
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            report = _closure1_slot0;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            tangon = global;
            tangon = tangon.Set;
            report = tangon.prototype;
            report = Object.create(report, {constructor: {value: tangon}});
            option = report;
            tangon = new option[tangon](golfie);
            tangon = tangon instanceof Object ? tangon : report;
            zuuluu['listeners'] = tangon;
            tangon = function(argFoo) {
                entity = _closure3_slot0;
                zuuluu = entity.listeners;
                michal = zuuluu.add;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            zuuluu['add'] = tangon;
            tangon = function(argFoo) {
                entity = _closure3_slot0;
                zuuluu = entity.listeners;
                michal = zuuluu.delete;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            zuuluu['remove'] = tangon;
            michal = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = arguments[1];
                    var _closure4_slot0 = zuuluu;
                    entity = undefined;
                    if(!(tangon === entity)) { _fun00002_ip = 20; continue _fun00001 }
 18:
                    tangon = true;
 20:
                    var _closure4_slot1 = entity;
                    if(!tangon) { _fun00002_ip = 37; continue _fun00001 }
 27:
                    tangon = zuuluu.bind(entity)();
                    zuuluu = false;
                    if(!(zuuluu !== tangon)) { _fun00002_ip = 63; continue _fun00001 }
 37:
                    tangon = function() { // Original name: conditionalCallback
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            zuuluu = _closure4_slot0;
                            entity = undefined;
                            tangon = zuuluu.bind(entity)();
                            zuuluu = false;
                            if(!(zuuluu === tangon)) { _fun00004_ip = 41; continue _fun00003 }
 19:
                            tangon = _closure3_slot0;
                            zuuluu = tangon.remove;
                            michal = _closure4_slot1;
                            michal = zuuluu.bind(tangon)(michal);
 41:
                            return entity;
                        }
                    };
                    _closure4_slot1 = tangon;
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.add;
                    michal = michal.bind(zuuluu)(tangon);
 63:
                    return entity;
                }
            };
            zuuluu['addConditional'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'has';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity.listeners;
            michal = zuuluu.has;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        oscard = 'hasAny';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            entity = entity.listeners;
            michal = entity.size;
            entity = 0;
            entity = michal > entity;
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'invokeAll';
        entity['key'] = oscard;
        report = function() { // Original name: value
            entity = this;
            zuuluu = entity.listeners;
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                michal = argFoo;
                entity = undefined;
                entity = michal.bind(entity)();
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        michal[2] = entity;
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
    tangon = '../discord_common/js/packages/flux/ChangeListeners.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['ChangeListeners'] = michal;
    return entity;
})();