// app/modules/libdiscore/KvStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
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
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot5 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot5 = entity;
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
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Store;
    michal = function(argFoo) {
        tangon = function(argFoo, argBar) { // Original name: KvStore
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = argBar;
                golfie = this;
                michal = _closure1_slot0;
                entity = _closure2_slot0;
                oscard = undefined;
                entity = michal.bind(oscard)(golfie, entity);
                michal = null;
                verify = michal == zuuluu;
                entity = undefined;
                if(verify) { _fun00004_ip = 77; continue _fun00003 }
 41:
                verify = {};
                offset = function() { // Original name: reset
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.setKv;
                    entity = {};
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                verify['reset'] = offset;
                offset = function(argFoo, argBar) { // Original name: set
                    entity = _closure3_slot0;
                    zuuluu = entity.kv;
                    michal = argBar;
                    entity = argFoo;
                    zuuluu[entity] = michal;
                    entity = undefined;
                    return entity;
                };
                verify['set'] = offset;
                offset = function(argFoo) { // Original name: remove
                    entity = _closure3_slot0;
                    michal = entity.kv;
                    entity = argFoo;
                    entity = delete michal[entity];
                    entity = undefined;
                    return entity;
                };
                verify['remove'] = offset;
                entity = zuuluu.bind(oscard)(verify);
 77:
                report = _closure2_slot0;
                romeon = new Array(2);
                verify = argFoo;
                romeon[0] = verify;
                romeon[1] = entity;
                entity = _closure1_slot3;
                yankee = entity.bind(oscard)(report);
                report = _closure1_slot2;
                entity = _closure1_slot5;
                entity = entity.bind(oscard)();
                if(entity) { _fun00004_ip = 133; continue _fun00003 }
 120:
                entity = yankee.apply;
                entity = entity.bind(yankee)(golfie, romeon);
                _fun00004_ip = 167; continue _fun00003;
 133:
                verify = global;
                offset = verify.Reflect;
                verify = offset.construct;
                option = _closure1_slot3;
                option = option.bind(oscard)(golfie);
                option = option.constructor;
                entity = verify.bind(offset)(yankee, romeon, option);
 167:
                entity = report.bind(oscard)(golfie, entity);
                var _closure3_slot0 = entity;
                tangon = {};
                entity['kv'] = tangon;
                michal = michal == zuuluu;
                entity['actionsHandledByLibdiscore'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        oscard = _closure1_slot4;
        zuuluu = undefined;
        report = argFoo;
        report = oscard.bind(zuuluu)(tangon, report);
        michal = _closure1_slot1;
        report = {};
        oscard = 'setKv';
        report['key'] = oscard;
        entity = function(argFoo) { // Original name: value
            michal = argFoo;
            entity = this;
            entity['kv'] = michal;
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/libdiscore/KvStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['KvStore'] = michal;
    return entity;
})();