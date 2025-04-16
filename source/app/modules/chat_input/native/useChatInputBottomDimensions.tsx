// app/modules/chat_input/native/useChatInputBottomDimensions.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: getChatInputBottomDimensions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            entity = 4;
            entity = report[entity];
            golfie = undefined;
            zuuluu = oscard.bind(golfie)(entity);
            michal = zuuluu.getSystemKeyboardHeight;
            entity = {};
            option = 5;
            report = report[option];
            oscard = oscard.bind(golfie)(report);
            report = oscard.isIOS;
            report = report.bind(oscard)();
            entity['excludeSafeAreaInsets'] = report;
            report = michal.bind(zuuluu)(entity);
            zuuluu = 0;
            if(!(zuuluu === report)) { _fun00002_ip = 305; continue _fun00001 }
 74:
            entity = {};
            oscard = _closure1_slot0;
            michal = _closure1_slot1;
            verify = 6;
            michal = michal[verify];
            oscard = oscard.bind(golfie)(michal);
            michal = oscard.getKeyboardType;
            offset = michal.bind(oscard)();
            michal = _closure1_slot5;
            oscard = michal.SYSTEM;
            michal = 0;
            if(!(offset !== oscard)) { _fun00002_ip = 215; continue _fun00001 }
 122:
            yankee = _closure1_slot0;
            oscard = _closure1_slot1;
            offset = 7;
            offset = oscard[offset];
            romeon = yankee.bind(golfie)(offset);
            offset = romeon.getCustomKeyboardHeight;
            offset = offset.bind(romeon)();
            oscard = oscard[option];
            yankee = yankee.bind(golfie)(oscard);
            oscard = yankee.isIOS;
            yankee = oscard.bind(yankee)();
            oscard = 0;
            if(yankee) { _fun00002_ip = 211; continue _fun00001 }
 176:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot1;
            yankee = 8;
            yankee = foxtra[yankee];
            romeon = romeon.bind(golfie)(yankee);
            yankee = romeon.getSafeAreaInsets;
            yankee = yankee.bind(romeon)();
            oscard = yankee.bottom;
 211:
            michal = offset + oscard;
 215:
            entity['keyboardHeight'] = michal;
            oscard = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[verify];
            oscard = oscard.bind(golfie)(michal);
            michal = oscard.getKeyboardType;
            verify = michal.bind(oscard)();
            michal = _closure1_slot5;
            oscard = michal.SYSTEM;
            michal = 0;
            if(!(verify === oscard)) { _fun00002_ip = 298; continue _fun00001 }
 263:
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            oscard = 8;
            oscard = offset[oscard];
            verify = verify.bind(golfie)(oscard);
            oscard = verify.getSafeAreaInsets;
            oscard = oscard.bind(verify)();
            michal = oscard.bottom;
 298:
            entity['safeAreaBottom'] = michal;
            _fun00002_ip = 355; continue _fun00001;
 305:
            michal = {};
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[option];
            oscard = oscard.bind(golfie)(tangon);
            tangon = oscard.isIOS;
            oscard = tangon.bind(oscard)();
            tangon = 0;
            if(!oscard) { _fun00002_ip = 342; continue _fun00001 }
 339:
            tangon = report;
 342:
            michal['keyboardHeight'] = tangon;
            michal['safeAreaBottom'] = zuuluu;
            entity = michal;
 355:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.KeyboardTypes;
    var _closure1_slot5 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/chat_input/native/useChatInputBottomDimensions.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useChatInputBottomDimensions
        report = _closure1_slot3;
        tangon = report.useState;
        zuuluu = _closure1_slot6;
        oscard = undefined;
        zuuluu = zuuluu.bind(oscard)();
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = _closure1_slot2;
        entity = 2;
        tangon = zuuluu.bind(oscard)(tangon, entity);
        entity = 0;
        entity = tangon[entity];
        zuuluu = 1;
        zuuluu = tangon[zuuluu];
        var _closure2_slot0 = zuuluu;
        tangon = report.useEffect;
        zuuluu = function() {
            zuuluu = _closure1_slot4;
            michal = undefined;
            entity = function() {
                zuuluu = _closure2_slot0;
                michal = _closure1_slot6;
                entity = undefined;
                michal = michal.bind(entity)();
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        michal = new Array(0);
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();