// app/modules/in_app_reports/IarSettingsUpsellsConfigLanguageFilter.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    michal = {};
    entity = function() { // Original name: getTitle
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 0;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.DPVOLS;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['getTitle'] = entity;
    entity = function() { // Original name: getDisabledTitle
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 0;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.B/dag4;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['getDisabledTitle'] = entity;
    entity = function() { // Original name: getDescription
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 0;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.+Esd3N;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['getDescription'] = entity;
    option = 1;
    golfie = oscard[option];
    entity = undefined;
    golfie = report.bind(entity)(golfie);
    golfie = golfie.ReportSubType;
    verify = golfie.SUB_GENERAL_HARASSMENT;
    golfie = new Array(3);
    golfie[0] = verify;
    verify = oscard[option];
    verify = report.bind(entity)(verify);
    verify = verify.ReportSubType;
    verify = verify.SUB_RACIST_OR_DICRIMINATORY_LANGUAGE_OR_IMAGERY;
    golfie[1] = verify;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.ReportSubType;
    option = option.SUB_VULGAR_LANGUAGE;
    golfie[2] = option;
    michal['eligibleReportSubtypes'] = golfie;
    golfie = function() { // Original name: onApply
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.KeywordFilterSettings;
        michal = zuuluu.updateSetting;
        entity = {'profanity': true, 'slurs': true, 'sexualContent': true};
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['onApply'] = golfie;
    tangon = function() { // Original name: predicate
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 3;
            entity = tangon[entity];
            tangon = undefined;
            report = zuuluu.bind(tangon)(entity);
            zuuluu = report.isEligibleForKeywordFiltering;
            entity = {};
            oscard = 'iar_settings_upsells';
            entity['location'] = oscard;
            entity = zuuluu.bind(report)(entity);
            if(!entity) { _fun00002_ip = 84; continue _fun00001 }
 51:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 4;
            michal = report[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.getKeywordFilterSetting;
            michal = michal.bind(zuuluu)();
            entity = !michal;
 84:
            return entity;
        }
    };
    michal['predicate'] = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/in_app_reports/IarSettingsUpsellsConfigLanguageFilter.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();