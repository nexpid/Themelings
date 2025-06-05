// app/modules/keyboard/native/AnimatedKeyboardProviderLegacy.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    offset = function(argFoo) { // Original name: getKeyboardHeight
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 2;
            entity = oscard[entity];
            tangon = undefined;
            zuuluu = report.bind(tangon)(entity);
            entity = zuuluu.getKeyboardType;
            zuuluu = entity.bind(zuuluu)();
            entity = 3;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.KeyboardTypes;
            entity = entity.SYSTEM;
            if(!(zuuluu !== entity)) { _fun00002_ip = 126; continue _fun00001 }
 63:
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 5;
            entity = oscard[entity];
            zuuluu = report.bind(tangon)(entity);
            entity = zuuluu.getCustomKeyboardHeight;
            zuuluu = entity.bind(zuuluu)();
            entity = 6;
            entity = oscard[entity];
            report = report.bind(tangon)(entity);
            entity = report.getSafeAreaInsets;
            entity = entity.bind(report)();
            entity = entity.bottom;
            entity = zuuluu + entity;
            _fun00002_ip = 159; continue _fun00001;
 126:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 4;
            michal = report[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.getSystemKeyboardHeight;
            michal = michal.bind(zuuluu)();
            entity = michal;
 159:
            return entity;
        }
    };
    var _closure1_slot5 = offset;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    michal = true;
    tangon['value'] = michal;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argBaz;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    golfie = 7;
    tangon = oscard[golfie];
    yankee = report.bind(entity)(tangon);
    verify = yankee.makeMutable;
    tangon = oscard[golfie];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.KeyboardState;
    tangon = tangon.UNKNOWN;
    tangon = verify.bind(yankee)(tangon);
    golfie = oscard[golfie];
    verify = report.bind(entity)(golfie);
    golfie = verify.makeMutable;
    michal = offset.bind(entity)(michal);
    golfie = golfie.bind(verify)(michal);
    var _closure1_slot4 = golfie;
    michal = {};
    option = function(argFoo) { // Original name: Component
        entity = argFoo;
        entity = entity.children;
        report = _closure1_slot2;
        tangon = report.useEffect;
        zuuluu = function() {
            zuuluu = _closure1_slot3;
            michal = undefined;
            entity = function() {
                tangon = _closure1_slot4;
                zuuluu = tangon.set;
                report = _closure1_slot5;
                entity = undefined;
                michal = true;
                michal = report.bind(entity)(michal);
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        michal = new Array(0);
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    michal['Component'] = option;
    michal['animatedKeyboardHeight'] = golfie;
    michal['animatedKeyboardState'] = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/keyboard/native/AnimatedKeyboardProviderLegacy.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();