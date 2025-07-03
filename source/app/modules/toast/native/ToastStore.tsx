// app/modules/toast/native/ToastStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
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
            _closure1_slot6 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = report[entity];
    entity = undefined;
    michal = oscard.bind(entity)(michal);
    var _closure1_slot0 = michal;
    michal = 1;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot1 = michal;
    michal = 2;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 3;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 4;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = null;
    var _closure1_slot5 = michal;
    michal = 5;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    golfie = michal.Store;
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: ToastStore
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = this;
                romeon = 0;
                entity = copyRestArgs(romeon);
                golfie = _closure1_slot1;
                michal = _closure2_slot0;
                zuuluu = undefined;
                golfie = golfie.bind(zuuluu)(tangon, michal);
                verify = new Array(0);
                romeon = verify;
                yankee = entity;
                offset = 0;
                entity = arraySpread(romeon, yankee, offset);
                entity = _closure1_slot3;
                option = entity.bind(zuuluu)(michal);
                michal = _closure1_slot2;
                entity = _closure1_slot6;
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
                report = _closure1_slot3;
                report = report.bind(zuuluu)(tangon);
                report = report.constructor;
                entity = oscard.bind(golfie)(option, verify, report);
 118:
                entity = michal.bind(zuuluu)(tangon, entity);
                michal = function() {
                    entity = _closure1_slot5;
                    return entity;
                };
                entity['getContent'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot4;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot0;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    golfie = michal.bind(entity)(golfie);
    michal = 'ToastStore';
    golfie['displayName'] = michal;
    michal = 6;
    michal = report[michal];
    yankee = oscard.bind(entity)(michal);
    michal = {};
    option = function(argFoo) { // Original name: TOAST_OPEN
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.toastProps;
            tangon = _closure1_slot5;
            entity = null;
            oscard = entity == tangon;
            entity = undefined;
            report = undefined;
            if(oscard) { _fun00006_ip = 34; continue _fun00005 }
 29:
            report = tangon.key;
 34:
            tangon = zuuluu.key;
            if(!(report !== tangon)) { _fun00006_ip = 49; continue _fun00005 }
 43:
            _closure1_slot5 = zuuluu;
            return entity;
 49:
            entity = false;
            return entity;
        }
    };
    michal['TOAST_OPEN'] = option;
    tangon = function() { // Original name: TOAST_CLOSE
        entity = null;
        _closure1_slot5 = entity;
        entity = undefined;
        return entity;
    };
    michal['TOAST_CLOSE'] = tangon;
    tangon = golfie.prototype;
    tangon = Object.create(tangon, {constructor: {value: golfie}});
    romeon = tangon;
    offset = michal;
    michal = new romeon[golfie](yankee, offset, verify);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 7;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/toast/native/ToastStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();