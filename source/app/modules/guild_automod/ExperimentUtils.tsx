// app/modules/guild_automod/ExperimentUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 1;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_automod/ExperimentUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: isInMentionRaidExperiment
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.AutomodMentionRaidLimit;
        michal = zuuluu.getCurrentConfig;
        entity = {};
        tangon = argFoo;
        entity['guildId'] = tangon;
        tangon = '988d4e_3';
        entity['location'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = entity.enabled;
        return entity;
    };
    zuuluu['isInMentionRaidExperiment'] = tangon;
    michal = function(argFoo) { // Original name: useIsMentionRaidExperimentEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = arguments[1];
            zuuluu = undefined;
            if(!(report === zuuluu)) { _fun00002_ip = 11; continue _fun00001 }
 9:
            report = true;
 11:
            michal = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 0;
            entity = tangon[entity];
            entity = michal.bind(zuuluu)(entity);
            tangon = entity.AutomodMentionRaidLimit;
            zuuluu = tangon.useExperiment;
            michal = {};
            entity = argFoo;
            michal['guildId'] = entity;
            entity = '988d4e_4';
            michal['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = entity.enabled;
            return entity;
        }
    };
    zuuluu['useIsMentionRaidExperimentEnabled'] = michal;
    return entity;
})();