// app/modules/collectibles/CollectiblesMarketingsStore.tsx
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
            entity = _closure1_slot9;
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
    var _closure1_slot8 = entity;
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
            _closure1_slot9 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    option = entity.Object;
    tangon = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot0 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot1 = michal;
    michal = 2;
    michal = oscard[michal];
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
    tangon = 'NOT_FETCHED';
    michal['NOT_FETCHED'] = tangon;
    tangon = 'FETCHING';
    michal['FETCHING'] = tangon;
    tangon = 'FETCHED';
    michal['FETCHED'] = tangon;
    var _closure1_slot5 = michal;
    tangon = {};
    var _closure1_slot6 = tangon;
    tangon = michal.NOT_FETCHED;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    option = tangon.Store;
    tangon = function(argFoo) {
        tangon = function() { // Original name: CollectiblesMarketingsStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot0;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot8;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot4;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot1;
        report = {};
        entity = 'getMarketingBySurface';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            michal = _closure1_slot6;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = 'fetchState';
        report['key'] = golfie;
        oscard = function() { // Original name: get
            entity = _closure1_slot7;
            return entity;
        };
        report['get'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = tangon.bind(entity)(option);
    tangon = 'CollectiblesMarketingsStore';
    option['displayName'] = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    romeon = golfie.bind(entity)(tangon);
    tangon = {};
    verify = function() { // Original name: COLLECTIBLES_MARKETING_FETCH
        entity = _closure1_slot5;
        entity = entity.FETCHING;
        _closure1_slot7 = entity;
        entity = undefined;
        return entity;
    };
    tangon['COLLECTIBLES_MARKETING_FETCH'] = verify;
    verify = function(argFoo) { // Original name: COLLECTIBLES_MARKETING_FETCH_SUCCESS
        entity = argFoo;
        entity = entity.marketings;
        entity = entity.marketingsBySurfaces;
        _closure1_slot6 = entity;
        entity = _closure1_slot5;
        entity = entity.FETCHED;
        _closure1_slot7 = entity;
        entity = undefined;
        return entity;
    };
    tangon['COLLECTIBLES_MARKETING_FETCH_SUCCESS'] = verify;
    report = function() { // Original name: LOGOUT
        entity = {};
        _closure1_slot6 = entity;
        entity = _closure1_slot5;
        entity = entity.NOT_FETCHED;
        _closure1_slot7 = entity;
        entity = undefined;
        return entity;
    };
    tangon['LOGOUT'] = report;
    report = option.prototype;
    report = Object.create(report, {constructor: {value: option}});
    foxtra = report;
    yankee = tangon;
    tangon = new foxtra[option](romeon, yankee, offset);
    tangon = tangon instanceof Object ? tangon : report;
    report = 7;
    oscard = oscard[report];
    report = argBar;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/collectibles/CollectiblesMarketingsStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['FetchState'] = michal;
    return entity;
})();