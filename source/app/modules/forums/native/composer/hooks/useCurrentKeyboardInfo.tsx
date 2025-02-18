// app/modules/forums/native/composer/hooks/useCurrentKeyboardInfo.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.KeyboardTypes;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/forums/native/composer/hooks/useCurrentKeyboardInfo.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useCurrentKeyboardInfo
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 2;
            entity = tangon[entity];
            zuuluu = undefined;
            entity = michal.bind(zuuluu)(entity);
            entity = entity.bind(zuuluu)();
            oscard = entity.bottom;
            michal = _closure1_slot0;
            entity = 3;
            entity = tangon[entity];
            tangon = michal.bind(zuuluu)(entity);
            zuuluu = tangon.useStateFromStoresObject;
            entity = _closure1_slot3;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                entity = {};
                michal = _closure1_slot3;
                zuuluu = michal.keyboardType;
                entity['keyboardType'] = zuuluu;
                zuuluu = michal.expressionType;
                entity['expressionType'] = zuuluu;
                zuuluu = michal.keyboardOpen;
                entity['keyboardOpen'] = zuuluu;
                zuuluu = michal.keyboardHeight;
                entity['keyboardHeight'] = zuuluu;
                michal = michal.customKeyboardHeight;
                entity['customKeyboardHeight'] = michal;
                return entity;
            };
            golfie = zuuluu.bind(tangon)(michal, entity);
            tangon = golfie.keyboardType;
            zuuluu = golfie.expressionType;
            michal = golfie.keyboardOpen;
            entity = golfie.keyboardHeight;
            option = golfie.customKeyboardHeight;
            golfie = _closure1_slot4;
            golfie = golfie.SYSTEM;
            if(!(tangon !== golfie)) { _fun00002_ip = 182; continue _fun00001 }
 127:
            golfie = _closure1_slot4;
            golfie = golfie.MEDIA;
            verify = tangon === golfie;
            if(verify) { _fun00002_ip = 158; continue _fun00001 }
 144:
            report = _closure1_slot4;
            report = report.EXPRESSION;
            verify = tangon === report;
 158:
            if(!verify) { _fun00002_ip = 167; continue _fun00001 }
 161:
            report = 0;
            verify = option > report;
 167:
            golfie = null;
            report = 0;
            if(!verify) { _fun00002_ip = 196; continue _fun00001 }
 174:
            golfie = tangon;
            report = option;
            _fun00002_ip = 196; continue _fun00001;
 182:
            option = null;
            if(!michal) { _fun00002_ip = 190; continue _fun00001 }
 187:
            option = tangon;
 190:
            golfie = option;
            report = entity;
 196:
            entity = {};
            entity['currentKeyboardHeight'] = report;
            report = null;
            golfie = report == golfie;
            report = 0;
            if(!golfie) { _fun00002_ip = 217; continue _fun00001 }
 214:
            report = oscard;
 217:
            entity['currentSafeAreaBottom'] = report;
            entity['keyboardType'] = tangon;
            entity['expressionType'] = zuuluu;
            entity['keyboardOpen'] = michal;
            return entity;
        }
    };
    zuuluu['useCurrentKeyboardInfo'] = michal;
    return entity;
})();