// app/modules/in_app_reports/IarSettingsUpsellsConfigSensitiveMedia.tsx
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
        entity = 2;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.5Qu1IS;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['getTitle'] = entity;
    entity = function() { // Original name: getDisabledTitle
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 2;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.YdZZtL;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['getDisabledTitle'] = entity;
    entity = function() { // Original name: getDescription
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 2;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.Vzp5BA;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['getDescription'] = entity;
    option = 3;
    golfie = oscard[option];
    entity = undefined;
    golfie = report.bind(entity)(golfie);
    golfie = golfie.ReportSubType;
    verify = golfie.SUB_CSAM;
    golfie = new Array(5);
    golfie[0] = verify;
    verify = oscard[option];
    verify = report.bind(entity)(verify);
    verify = verify.ReportSubType;
    verify = verify.SUB_LOLI;
    golfie[1] = verify;
    verify = oscard[option];
    verify = report.bind(entity)(verify);
    verify = verify.ReportSubType;
    verify = verify.SUB_NCP;
    golfie[2] = verify;
    verify = oscard[option];
    verify = report.bind(entity)(verify);
    verify = verify.ReportSubType;
    verify = verify.SUB_SEXUALLY_DEGRADING_CONTENT;
    golfie[3] = verify;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.ReportSubType;
    option = option.SUB_UNSOLICITED_PORN;
    golfie[4] = option;
    michal['eligibleReportSubtypes'] = golfie;
    golfie = function() { // Original name: onApply
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            yankee = _closure1_slot0;
            report = _closure1_slot1;
            entity = 0;
            michal = report[entity];
            oscard = undefined;
            zuuluu = yankee.bind(oscard)(michal);
            michal = zuuluu.updateExplicitContentSetting;
            entity = report[entity];
            golfie = yankee.bind(oscard)(entity);
            entity = golfie.getExplicitContentSettingOrDefault;
            entity = entity.bind(golfie)();
            offset = entity.explicitContentGuilds;
            verify = entity.explicitContentFriendDm;
            option = entity.explicitContentNonFriendDm;
            entity = {};
            golfie = 1;
            report = report[golfie];
            report = yankee.bind(oscard)(report);
            report = report.ExplicitContentRedaction;
            report = report.SHOW;
            if(!(offset === report)) { _fun00002_ip = 132; continue _fun00001 }
 97:
            offset = _closure1_slot0;
            report = _closure1_slot1;
            report = report[golfie];
            report = offset.bind(oscard)(report);
            report = report.ExplicitContentRedaction;
            report = report.BLUR;
            entity['explicitContentGuilds'] = report;
 132:
            offset = _closure1_slot0;
            report = _closure1_slot1;
            report = report[golfie];
            report = offset.bind(oscard)(report);
            report = report.ExplicitContentRedaction;
            report = report.SHOW;
            if(!(verify === report)) { _fun00002_ip = 200; continue _fun00001 }
 165:
            verify = _closure1_slot0;
            report = _closure1_slot1;
            report = report[golfie];
            report = verify.bind(oscard)(report);
            report = report.ExplicitContentRedaction;
            report = report.BLUR;
            entity['explicitContentFriendDm'] = report;
 200:
            verify = _closure1_slot0;
            report = _closure1_slot1;
            report = report[golfie];
            report = verify.bind(oscard)(report);
            report = report.ExplicitContentRedaction;
            report = report.SHOW;
            if(!(option === report)) { _fun00002_ip = 268; continue _fun00001 }
 233:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[golfie];
            tangon = report.bind(oscard)(tangon);
            tangon = tangon.ExplicitContentRedaction;
            tangon = tangon.BLUR;
            entity['explicitContentNonFriendDm'] = tangon;
 268:
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    michal['onApply'] = golfie;
    tangon = function() { // Original name: predicate
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            option = _closure1_slot0;
            entity = _closure1_slot1;
            zuuluu = 0;
            zuuluu = entity[zuuluu];
            report = undefined;
            tangon = option.bind(report)(zuuluu);
            zuuluu = tangon.getExplicitContentSettingOrDefault;
            zuuluu = zuuluu.bind(tangon)();
            tangon = zuuluu.explicitContentGuilds;
            golfie = zuuluu.explicitContentFriendDm;
            zuuluu = zuuluu.explicitContentNonFriendDm;
            oscard = 1;
            entity = entity[oscard];
            entity = option.bind(report)(entity);
            entity = entity.ExplicitContentRedaction;
            entity = entity.SHOW;
            entity = tangon === entity;
            if(entity) { _fun00004_ip = 116; continue _fun00003 }
 83:
            option = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[oscard];
            tangon = option.bind(report)(tangon);
            tangon = tangon.ExplicitContentRedaction;
            tangon = tangon.SHOW;
            entity = golfie === tangon;
 116:
            if(entity) { _fun00004_ip = 152; continue _fun00003 }
 119:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[oscard];
            michal = tangon.bind(report)(michal);
            michal = michal.ExplicitContentRedaction;
            michal = michal.SHOW;
            entity = zuuluu === michal;
 152:
            return entity;
        }
    };
    michal['predicate'] = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/in_app_reports/IarSettingsUpsellsConfigSensitiveMedia.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();