// app/modules/stage_channels/useGuildEligibleForStageChannels.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: isGuildEligibleForStageChannels
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = arguments[1];
            zuuluu = undefined;
            if(!(tangon === zuuluu)) { _fun00002_ip = 27; continue _fun00001 }
 9:
            michal = _closure1_slot2;
            entity = new Array(1);
            entity[0] = michal;
            tangon = entity;
 27:
            michal = tangon;
            entity = michal[Symbol.iterator];
            michal = entity().next;
            tangon = michal().value;
            michal = entity;
            michal = michal === zuuluu;
            report = undefined;
            if(michal) { _fun00002_ip = 52; continue _fun00001 }
 49:
            report = tangon;
 52:
            if(michal) { _fun00002_ip = 58; continue _fun00001 }
 55:
            entity.return();
 58:
            entity = global;
            michal = entity.Boolean;
            tangon = report.getGuild;
            entity = argFoo;
            tangon = tangon.bind(report)(entity);
            entity = null;
            report = entity == tangon;
            entity = undefined;
            if(report) { _fun00002_ip = 119; continue _fun00001 }
 90:
            oscard = tangon.features;
            report = oscard.has;
            tangon = _closure1_slot3;
            tangon = tangon.COMMUNITY;
            entity = report.bind(oscard)(tangon);
 119:
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot4 = tangon;
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
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.GuildFeatures;
    var _closure1_slot3 = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/stage_channels/useGuildEligibleForStageChannels.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['isGuildEligibleForStageChannels'] = tangon;
    michal = function(argFoo) { // Original name: useGuildEligibleForStageChannels
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 2;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        michal = _closure1_slot2;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            tangon = _closure1_slot4;
            zuuluu = _closure2_slot0;
            entity = _closure1_slot2;
            michal = new Array(1);
            michal[0] = entity;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useGuildEligibleForStageChannels'] = michal;
    return entity;
})();