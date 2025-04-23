// app/modules/game_relationships/GameRelationshipManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RelationshipTypes;
    var _closure1_slot8 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: GameRelationshipManager
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = this;
                romeon = 0;
                entity = copyRestArgs(romeon);
                golfie = _closure1_slot2;
                michal = _closure2_slot0;
                zuuluu = undefined;
                golfie = golfie.bind(zuuluu)(tangon, michal);
                verify = new Array(0);
                romeon = verify;
                yankee = entity;
                offset = 0;
                entity = arraySpread(romeon, yankee, offset);
                entity = _closure1_slot5;
                option = entity.bind(zuuluu)(michal);
                michal = _closure1_slot4;
                entity = _closure1_slot9;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00004_ip = 84; continue _fun00003 }
 71:
                entity = option.apply;
                entity = entity.bind(option)(tangon, verify);
                _fun00004_ip = 118; continue _fun00003;
 84:
                oscard = global;
                golfie = oscard.Reflect;
                oscard = golfie.construct;
                report = _closure1_slot5;
                report = report.bind(zuuluu)(tangon);
                report = report.constructor;
                entity = oscard.bind(golfie)(option, verify, report);
 118:
                entity = michal.bind(zuuluu)(tangon, entity);
                michal = function() {
                    tangon = _closure1_slot7;
                    michal = tangon.getGameRelationships;
                    report = michal.bind(tangon)();
                    michal = global;
                    tangon = michal.Set;
                    oscard = tangon.prototype;
                    oscard = Object.create(oscard, {constructor: {value: tangon}});
                    option = oscard;
                    tangon = new option[tangon](golfie);
                    oscard = tangon instanceof Object ? tangon : oscard;
                    var _closure4_slot0 = oscard;
                    tangon = report.values;
                    report = tangon.bind(report)();
                    tangon = report.forEach;
                    zuuluu = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            entity = argFoo;
                            zuuluu = entity.type;
                            michal = _closure1_slot8;
                            michal = michal.PENDING_INCOMING;
                            if(!(zuuluu === michal)) { _fun00006_ip = 47; continue _fun00005 }
 25:
                            zuuluu = _closure4_slot0;
                            michal = zuuluu.add;
                            entity = entity.applicationId;
                            entity = michal.bind(zuuluu)(entity);
 47:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zuuluu = tangon.bind(report)(zuuluu);
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    entity = 7;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.fetchApplications;
                    report = michal.Array;
                    michal = report.from;
                    michal = michal.bind(report)(oscard);
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                entity['handlePostConnectionOpen'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = '_initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.subscribe;
            michal = this;
            zuuluu = michal.handlePostConnectionOpen;
            michal = 'POST_CONNECTION_OPEN';
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = '_terminate';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.unsubscribe;
            michal = this;
            zuuluu = michal.handlePostConnectionOpen;
            michal = 'POST_CONNECTION_OPEN';
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'destroy';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.unsubscribe;
            michal = this;
            zuuluu = michal.handlePostConnectionOpen;
            michal = 'POST_CONNECTION_OPEN';
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/game_relationships/GameRelationshipManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();