// app/modules/search_v2/native/hooks/useEligibleFilterTokens.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: useEligibleFilterTokens
        report = argFoo;
        var _closure2_slot0 = report;
        oscard = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        golfie = oscard.bind(zuuluu)(tangon);
        oscard = golfie.useStateFromStores;
        zuuluu = _closure1_slot3;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            entity = _closure1_slot3;
            entity = entity.hidePersonalInformation;
            return entity;
        };
        oscard = oscard.bind(golfie)(tangon, zuuluu);
        var _closure2_slot1 = oscard;
        tangon = _closure1_slot2;
        zuuluu = tangon.useMemo;
        michal = new Array(2);
        michal[0] = oscard;
        report = report.type;
        michal[1] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = new Array(0);
                michal = _closure2_slot1;
                if(michal) { _fun00002_ip = 57; continue _fun00001 }
 14:
                report = entity.push;
                tangon = _closure1_slot4;
                tangon = tangon.FILTER_FROM;
                tangon = report.bind(entity)(tangon);
                tangon = entity.push;
                michal = _closure1_slot4;
                michal = michal.FILTER_MENTIONS;
                michal = tangon.bind(entity)(michal);
 57:
                report = entity.push;
                tangon = _closure1_slot4;
                tangon = tangon.FILTER_HAS;
                tangon = report.bind(entity)(tangon);
                tangon = _closure2_slot0;
                report = tangon.type;
                tangon = _closure1_slot5;
                tangon = tangon.GUILD;
                if(!(report === tangon)) { _fun00002_ip = 123; continue _fun00001 }
 103:
                report = entity.push;
                tangon = _closure1_slot4;
                tangon = tangon.FILTER_IN;
                tangon = report.bind(entity)(tangon);
 123:
                zuuluu = _closure2_slot0;
                tangon = zuuluu.type;
                zuuluu = _closure1_slot5;
                zuuluu = zuuluu.GUILD_CHANNEL;
                if(!(tangon === zuuluu)) { _fun00002_ip = 166; continue _fun00001 }
 146:
                tangon = entity.push;
                zuuluu = _closure1_slot4;
                zuuluu = zuuluu.FILTER_IN;
                zuuluu = tangon.bind(entity)(zuuluu);
 166:
                tangon = entity.push;
                zuuluu = _closure1_slot4;
                zuuluu = zuuluu.FILTER_ON;
                zuuluu = tangon.bind(entity)(zuuluu);
                tangon = entity.push;
                zuuluu = _closure1_slot4;
                zuuluu = zuuluu.FILTER_BEFORE;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = entity.push;
                michal = _closure1_slot4;
                michal = michal.FILTER_AFTER;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot6 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot2 = report;
    report = 1;
    option = golfie[report];
    report = argBaz;
    report = report.bind(entity)(option);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.SearchTokenTypes;
    var _closure1_slot4 = option;
    report = report.SearchTypes;
    var _closure1_slot5 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/search_v2/native/hooks/useEligibleFilterTokens.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['useEligibleFilterTokens'] = tangon;
    michal = function(argFoo) { // Original name: useEligibleFilterTokensSet
        report = _closure1_slot6;
        tangon = undefined;
        zuuluu = argFoo;
        report = report.bind(tangon)(zuuluu);
        var _closure2_slot0 = report;
        tangon = _closure1_slot2;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            entity = global;
            zuuluu = entity.Set;
            tangon = _closure2_slot0;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useEligibleFilterTokensSet'] = michal;
    return entity;
})();