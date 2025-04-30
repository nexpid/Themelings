// app/modules/links/native/LinkingModule.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    michal = michal.NativeModules;
    var _closure1_slot3 = michal;
    michal = {};
    golfie = function(argFoo) { // Original name: tryOpenUrlAsUniversalLink
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 1;
            entity = report[entity];
            report = undefined;
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.isAndroid;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 63; continue _fun00001 }
 40:
            entity = _closure1_slot3;
            zuuluu = entity.DCDLinkingManager;
            entity = zuuluu.tryOpenUrlAsUniversalLink;
            entity = entity.bind(zuuluu)(tangon);
            _fun00002_ip = 133; continue _fun00001;
 63:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 2;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.tryOpenUrlAsUniversalLink;
            michal = michal.bind(zuuluu)(tangon);
            zuuluu = global;
            report = zuuluu.Promise;
            if(michal) { _fun00002_ip = 117; continue _fun00001 }
 105:
            michal = report.reject;
            michal = michal.bind(report)();
            _fun00002_ip = 130; continue _fun00001;
 117:
            tangon = report.resolve;
            zuuluu = true;
            michal = tangon.bind(report)(zuuluu);
 130:
            entity = michal;
 133:
            return entity;
        }
    };
    michal['tryOpenUrlAsUniversalLink'] = golfie;
    tangon = function(argFoo) { // Original name: tryOpenScheme
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 1;
            entity = report[entity];
            report = undefined;
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.isAndroid;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00004_ip = 63; continue _fun00003 }
 40:
            entity = _closure1_slot3;
            zuuluu = entity.DCDLinkingManager;
            entity = zuuluu.tryOpenScheme;
            entity = entity.bind(zuuluu)(tangon);
            _fun00004_ip = 133; continue _fun00003;
 63:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 2;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.tryOpenScheme;
            michal = michal.bind(zuuluu)(tangon);
            zuuluu = global;
            report = zuuluu.Promise;
            if(michal) { _fun00004_ip = 117; continue _fun00003 }
 105:
            michal = report.reject;
            michal = michal.bind(report)();
            _fun00004_ip = 130; continue _fun00003;
 117:
            tangon = report.resolve;
            zuuluu = true;
            michal = tangon.bind(report)(zuuluu);
 130:
            entity = michal;
 133:
            return entity;
        }
    };
    michal['tryOpenScheme'] = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/links/native/LinkingModule.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();