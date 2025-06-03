// app/modules/keyboard/native/AnimatedKeyboardProviderLegacy.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    yankee = function(argFoo) { // Original name: getKeyboardHeight
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 2;
            entity = oscard[entity];
            report = undefined;
            michal = tangon.bind(report)(entity);
            entity = michal.getKeyboardType;
            michal = entity.bind(michal)();
            entity = 3;
            entity = oscard[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.KeyboardTypes;
            entity = entity.SYSTEM;
            if(!(michal !== entity)) { _fun00002_ip = 126; continue _fun00001 }
 63:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 5;
            entity = oscard[entity];
            michal = tangon.bind(report)(entity);
            entity = michal.getCustomKeyboardHeight;
            michal = entity.bind(michal)();
            entity = 6;
            entity = oscard[entity];
            tangon = tangon.bind(report)(entity);
            entity = tangon.getSafeAreaInsets;
            entity = entity.bind(tangon)();
            entity = entity.bottom;
            entity = michal + entity;
            _fun00002_ip = 167; continue _fun00001;
 126:
            tangon = argFoo;
            michal = 0;
            if(!tangon) { _fun00002_ip = 164; continue _fun00001 }
 134:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 4;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.getSystemKeyboardHeight;
            michal = zuuluu.bind(tangon)();
 164:
            entity = michal;
 167:
            return entity;
        }
    };
    var _closure1_slot6 = yankee;
    entity = global;
    option = entity.Object;
    tangon = option.defineProperty;
    michal = {};
    golfie = true;
    michal['value'] = golfie;
    entity = '__esModule';
    entity = tangon.bind(option)(zuuluu, entity, michal);
    entity = 0;
    tangon = oscard[entity];
    michal = argCor;
    entity = undefined;
    michal = michal.bind(entity)(tangon);
    var _closure1_slot2 = michal;
    michal = 1;
    tangon = oscard[michal];
    michal = argBaz;
    michal = michal.bind(entity)(tangon);
    var _closure1_slot3 = michal;
    michal = 7;
    tangon = oscard[michal];
    offset = report.bind(entity)(tangon);
    option = offset.makeMutable;
    tangon = oscard[michal];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.KeyboardState;
    tangon = tangon.UNKNOWN;
    tangon = option.bind(offset)(tangon);
    option = oscard[michal];
    offset = report.bind(entity)(option);
    option = offset.makeMutable;
    golfie = yankee.bind(entity)(golfie);
    option = option.bind(offset)(golfie);
    var _closure1_slot4 = option;
    michal = oscard[michal];
    offset = report.bind(entity)(michal);
    golfie = offset.makeMutable;
    michal = false;
    michal = yankee.bind(entity)(michal);
    golfie = golfie.bind(offset)(michal);
    var _closure1_slot5 = golfie;
    michal = {};
    verify = function() { // Original name: Component
        tangon = _closure1_slot2;
        zuuluu = tangon.useEffect;
        michal = function() {
            zuuluu = _closure1_slot3;
            michal = undefined;
            entity = function() {
                oscard = _closure1_slot4;
                tangon = oscard.set;
                report = _closure1_slot6;
                entity = undefined;
                zuuluu = true;
                zuuluu = report.bind(entity)(zuuluu);
                zuuluu = tangon.bind(oscard)(zuuluu);
                tangon = _closure1_slot5;
                zuuluu = tangon.set;
                michal = false;
                michal = report.bind(entity)(michal);
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        entity = new Array(0);
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = null;
        return entity;
    };
    michal['Component'] = verify;
    michal['animatedKeyboardHeight'] = option;
    michal['animatedKeyboardHeightExludingSystemKeyboard'] = golfie;
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