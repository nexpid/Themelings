// app/modules/activities/useSelectGuildOptions.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/useSelectGuildOptions.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: getActivityGuildSuggestion
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = arguments[0];
            entity = undefined;
            if(!(michal === entity)) { _fun00002_ip = 21; continue _fun00001 }
 9:
            zuuluu = {};
            tangon = false;
            zuuluu['allowGdmActivityChannelSuggestion'] = tangon;
            michal = zuuluu;
 21:
            zuuluu = michal.allowGdmActivityChannelSuggestion;
            report = _closure1_slot4;
            michal = report.getVoiceChannelId;
            oscard = michal.bind(report)();
            report = _closure1_slot3;
            michal = report.getChannel;
            michal = michal.bind(report)(oscard);
            report = null;
            if(!(report != michal)) { _fun00002_ip = 73; continue _fun00001 }
 64:
            oscard = michal.guild_id;
            if(!(report == oscard)) { _fun00002_ip = 125; continue _fun00001 }
 73:
            if(!(report != michal)) { _fun00002_ip = 82; continue _fun00001 }
 77:
            entity = undefined;
            if(zuuluu) { _fun00002_ip = 123; continue _fun00001 }
 82:
            oscard = _closure1_slot5;
            zuuluu = oscard.getLastSelectedGuildId;
            zuuluu = zuuluu.bind(oscard)();
            if(!(report == zuuluu)) { _fun00002_ip = 120; continue _fun00001 }
 100:
            report = _closure1_slot6;
            tangon = report.getFlattenedGuildIds;
            report = tangon.bind(report)();
            tangon = 0;
            zuuluu = report[tangon];
 120:
            entity = zuuluu;
 123:
            _fun00002_ip = 130; continue _fun00001;
 125:
            entity = michal.guild_id;
 130:
            return entity;
        }
    };
    zuuluu['getActivityGuildSuggestion'] = tangon;
    michal = function() { // Original name: useSelectGuildOptions
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 5;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        oscard = report.bind(zuuluu)(tangon);
        report = oscard.useStateFromStores;
        zuuluu = _closure1_slot6;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            michal = _closure1_slot6;
            entity = michal.getFlattenedGuildIds;
            entity = entity.bind(michal)();
            return entity;
        };
        report = report.bind(oscard)(tangon, zuuluu);
        var _closure2_slot0 = report;
        tangon = _closure1_slot2;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            zuuluu = _closure2_slot0;
            michal = zuuluu.map;
            entity = function(argFoo) {
                michal = argFoo;
                entity = {};
                entity['label'] = michal;
                entity['value'] = michal;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useSelectGuildOptions'] = michal;
    return entity;
})();