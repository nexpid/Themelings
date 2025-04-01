// app/modules/messages/native/renderer/context/JumpContext.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    report = golfie[entity];
    tangon = argCor;
    entity = undefined;
    option = tangon.bind(entity)(report);
    var _closure1_slot2 = option;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot3 = tangon;
    report = {'scrollToMessageId': null, 'jumpTargetId': null, 'jumpType': null, 'jumpSequenceId': 0, 'minimizeScrolling': false, 'focusTargetId': null};
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.JumpTypes;
    tangon = tangon.ANIMATED;
    report['jumpType'] = tangon;
    var _closure1_slot4 = report;
    tangon = option.createContext;
    tangon = tangon.bind(option)(report);
    var _closure1_slot5 = tangon;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/messages/native/renderer/context/JumpContext.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['JumpContext'] = tangon;
    michal = function(argFoo) { // Original name: JumpContextProvider
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = entity.value;
            tangon = undefined;
            if(!(michal === tangon)) { _fun00002_ip = 21; continue _fun00001 }
 14:
            michal = _closure1_slot4;
 21:
            report = entity.children;
            oscard = _closure1_slot2;
            zuuluu = oscard.useRef;
            oscard = zuuluu.bind(oscard)(michal);
            zuuluu = oscard.current;
            zuuluu = michal === zuuluu;
            if(zuuluu) { _fun00002_ip = 86; continue _fun00001 }
 55:
            option = _closure1_slot0;
            verify = _closure1_slot1;
            golfie = 3;
            golfie = verify[golfie];
            option = option.bind(tangon)(golfie);
            golfie = oscard.current;
            zuuluu = option.bind(tangon)(michal, golfie);
 86:
            if(zuuluu) { _fun00002_ip = 95; continue _fun00001 }
 89:
            oscard['current'] = michal;
 95:
            zuuluu = _closure1_slot3;
            entity = _closure1_slot5;
            michal = entity.Provider;
            entity = {};
            oscard = oscard.current;
            entity['value'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['JumpContextProvider'] = michal;
    return entity;
})();