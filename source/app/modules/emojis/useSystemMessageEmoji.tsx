// app/modules/emojis/useSystemMessageEmoji.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
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
    tangon = tangon.bind(entity)(report);
    var _closure1_slot2 = tangon;
    tangon = 1;
    report = golfie[tangon];
    tangon = argBaz;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot3 = tangon;
    tangon = /^<(a?):(\w+):(\d+)>/;
    var _closure1_slot4 = tangon;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/emojis/useSystemMessageEmoji.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['CUSTOM_EMOJI_REGEX'] = tangon;
    tangon = function(argFoo) { // Original name: getSystemMessageEmoji
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot4;
            zuuluu = tangon.exec;
            entity = argFoo;
            report = zuuluu.bind(tangon)(entity);
            entity = null;
            zuuluu = entity == report;
            tangon = undefined;
            if(zuuluu) { _fun00002_ip = 39; continue _fun00001 }
 32:
            zuuluu = 3;
            tangon = report[zuuluu];
 39:
            zuuluu = entity == tangon;
            entity = null;
            if(zuuluu) { _fun00002_ip = 63; continue _fun00001 }
 48:
            zuuluu = _closure1_slot3;
            michal = zuuluu.getCustomEmojiById;
            entity = michal.bind(zuuluu)(tangon);
 63:
            return entity;
        }
    };
    zuuluu['getSystemMessageEmoji'] = tangon;
    michal = function(argFoo) { // Original name: useSystemMessageEmoji
        zuuluu = argFoo;
        var _closure2_slot0 = zuuluu;
        oscard = _closure1_slot2;
        report = oscard.useMemo;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure1_slot4;
                michal = zuuluu.exec;
                entity = _closure2_slot0;
                zuuluu = michal.bind(zuuluu)(entity);
                entity = null;
                michal = entity == zuuluu;
                entity = undefined;
                if(michal) { _fun00004_ip = 43; continue _fun00003 }
 36:
                michal = 3;
                entity = zuuluu[michal];
 43:
                return entity;
            }
        };
        zuuluu = report.bind(oscard)(zuuluu, tangon);
        var _closure2_slot1 = zuuluu;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 2;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot3;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure2_slot1;
                entity = null;
                zuuluu = entity == zuuluu;
                if(zuuluu) { _fun00006_ip = 38; continue _fun00005 }
 16:
                tangon = _closure1_slot3;
                zuuluu = tangon.getCustomEmojiById;
                michal = _closure2_slot1;
                entity = zuuluu.bind(tangon)(michal);
 38:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useSystemMessageEmoji'] = michal;
    return entity;
})();