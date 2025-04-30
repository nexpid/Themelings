// app/lib/native/Linking.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    michal = michal.Linking;
    var _closure1_slot2 = michal;
    michal = {};
    golfie = function(argFoo, argBar) { // Original name: openURL
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = arguments[2];
            entity = undefined;
            if(!(michal === entity)) { _fun00002_ip = 11; continue _fun00001 }
 9:
            michal = true;
 11:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 1;
            zuuluu = report[zuuluu];
            zuuluu = tangon.bind(entity)(zuuluu);
            report = zuuluu.default;
            tangon = {};
            tangon['allowExternal'] = michal;
            zuuluu = argFoo;
            michal = argBar;
            michal = report.bind(entity)(zuuluu, michal, tangon);
            return entity;
        }
    };
    michal['openURL'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: openURLExternally
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        report = michal.default;
        tangon = {};
        michal = true;
        tangon['forceExternalBrowser'] = michal;
        zuuluu = argFoo;
        michal = argBar;
        michal = report.bind(entity)(zuuluu, michal, tangon);
        return entity;
    };
    michal['openURLExternally'] = golfie;
    tangon = function(argFoo) { // Original name: performURLNavigation
        zuuluu = _closure1_slot2;
        michal = zuuluu.openURL;
        entity = argFoo;
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.catch;
        entity = function() {
            entity = undefined;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['performURLNavigation'] = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/native/Linking.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();