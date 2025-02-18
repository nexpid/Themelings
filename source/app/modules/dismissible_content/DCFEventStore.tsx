// app/modules/dismissible_content/DCFEventStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot3;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot2;
            entity = _closure1_slot8;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    option = entity.Object;
    tangon = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(option)(zuuluu, entity, michal);
    offset = 0;
    michal = oscard[offset];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot0 = michal;
    verify = 1;
    michal = oscard[verify];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot1 = michal;
    option = 2;
    michal = oscard[option];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = {};
    michal['DC_SHOWN'] = offset;
    tangon = 'DC_SHOWN';
    michal[offset] = tangon;
    michal['DC_SHOW_REQUEST'] = verify;
    tangon = 'DC_SHOW_REQUEST';
    michal[verify] = tangon;
    michal['DC_DISMISSED'] = option;
    tangon = 'DC_DISMISSED';
    michal[option] = tangon;
    var _closure1_slot5 = michal;
    tangon = new Array(0);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    option = tangon.Store;
    tangon = function(argFoo) {
        tangon = function() { // Original name: DCFEventStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot0;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot7;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        oscard = _closure1_slot4;
        zuuluu = undefined;
        report = argFoo;
        report = oscard.bind(zuuluu)(tangon, report);
        michal = _closure1_slot1;
        report = {};
        oscard = 'getDCFEvents';
        report['key'] = oscard;
        entity = function() { // Original name: value
            entity = _closure1_slot6;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = tangon.bind(entity)(option);
    tangon = 'DCFEventStore';
    option['displayName'] = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    foxtra = golfie.bind(entity)(tangon);
    tangon = {};
    verify = function() { // Original name: LOGOUT
        entity = new Array(0);
        _closure1_slot6 = entity;
        entity = undefined;
        return entity;
    };
    tangon['LOGOUT'] = verify;
    verify = function(argFoo) { // Original name: DCF_EVENT_LOGGED
        entity = argFoo;
        michal = entity.eventType;
        entity = entity.dismissibleContent;
        entity = undefined;
        return entity;
    };
    tangon['DCF_EVENT_LOGGED'] = verify;
    verify = function(argFoo) { // Original name: DCF_HANDLE_DC_DISMISSED
        entity = argFoo;
        entity = entity.dismissibleContent;
        entity = _closure1_slot5;
        entity = entity.DC_DISMISSED;
        entity = undefined;
        return entity;
    };
    tangon['DCF_HANDLE_DC_DISMISSED'] = verify;
    report = function(argFoo) { // Original name: DCF_HANDLE_DC_SHOWN
        entity = argFoo;
        entity = entity.dismissibleContent;
        entity = _closure1_slot5;
        entity = entity.DC_SHOWN;
        entity = undefined;
        return entity;
    };
    tangon['DCF_HANDLE_DC_SHOWN'] = report;
    report = option.prototype;
    report = Object.create(report, {constructor: {value: option}});
    backup = report;
    romeon = tangon;
    tangon = new backup[option](foxtra, romeon, yankee);
    tangon = tangon instanceof Object ? tangon : report;
    report = 7;
    oscard = oscard[report];
    report = argBar;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/dismissible_content/DCFEventStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['DCFEventTypes'] = michal;
    return entity;
})();