// app/modules/chat/native/useChatLayout.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
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
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/chat/native/useChatLayout.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: useChatLayout
        report = _closure1_slot1;
        tangon = _closure1_slot2;
        zuuluu = 1;
        zuuluu = tangon[zuuluu];
        tangon = undefined;
        zuuluu = report.bind(tangon)(zuuluu);
        report = zuuluu.bind(tangon)();
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            entity = {};
            zuuluu = _closure2_slot0;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 1;
            golfie = oscard[michal];
            tangon = undefined;
            golfie = report.bind(tangon)(golfie);
            golfie = golfie.WindowSizeClassifier;
            golfie = golfie.LARGE;
            golfie = zuuluu >= golfie;
            entity['isChatBesideChannelList'] = golfie;
            michal = oscard[michal];
            michal = report.bind(tangon)(michal);
            michal = michal.WindowSizeClassifier;
            michal = michal.XLARGE;
            michal = zuuluu >= michal;
            entity['isChatLockedOpen'] = michal;
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = tangon;
    michal = function() { // Original name: getChatLayout
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        michal = 1;
        entity = oscard[michal];
        tangon = undefined;
        zuuluu = report.bind(tangon)(entity);
        entity = zuuluu.getWindowSizeClassifier;
        zuuluu = entity.bind(zuuluu)();
        entity = {};
        golfie = oscard[michal];
        golfie = report.bind(tangon)(golfie);
        golfie = golfie.WindowSizeClassifier;
        golfie = golfie.LARGE;
        golfie = zuuluu >= golfie;
        entity['isChatBesideChannelList'] = golfie;
        michal = oscard[michal];
        michal = report.bind(tangon)(michal);
        michal = michal.WindowSizeClassifier;
        michal = michal.XLARGE;
        michal = zuuluu >= michal;
        entity['isChatLockedOpen'] = michal;
        return entity;
    };
    zuuluu['getChatLayout'] = michal;
    return entity;
})();