// app/modules/in_app_reports/IarSettingsUpsellsConfigSensitiveMedia.tsx
export default (function(_, argBar, __, ___, ____, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    mike = {};
    entity = function() { // Original name: getTitle
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 2;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.5Qu1IS;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['getTitle'] = entity;
    entity = function() { // Original name: getDisabledTitle
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 2;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.YdZZtL;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['getDisabledTitle'] = entity;
    entity = function() { // Original name: getDescription
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 2;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.Vzp5BA;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['getDescription'] = entity;
    options = 3;
    golf = oscar[options];
    entity = undefined;
    golf = report.bind(entity)(golf);
    golf = golf.ReportSubType;
    verify = golf.SUB_CSAM;
    golf = new Array(5);
    golf[0] = verify;
    verify = oscar[options];
    verify = report.bind(entity)(verify);
    verify = verify.ReportSubType;
    verify = verify.SUB_LOLI;
    golf[1] = verify;
    verify = oscar[options];
    verify = report.bind(entity)(verify);
    verify = verify.ReportSubType;
    verify = verify.SUB_NCP;
    golf[2] = verify;
    verify = oscar[options];
    verify = report.bind(entity)(verify);
    verify = verify.ReportSubType;
    verify = verify.SUB_SEXUALLY_DEGRADING_CONTENT;
    golf[3] = verify;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.ReportSubType;
    options = options.SUB_UNSOLICITED_PORN;
    golf[4] = options;
    mike['eligibleReportSubtypes'] = golf;
    golf = function() { // Original name: onApply
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            yankee = _closure1_slot0;
            report = _closure1_slot1;
            entity = 0;
            mike = report[entity];
            oscar = undefined;
            zulu = yankee.bind(oscar)(mike);
            mike = zulu.updateExplicitContentSetting;
            entity = report[entity];
            golf = yankee.bind(oscar)(entity);
            entity = golf.getExplicitContentSettingOrDefault;
            entity = entity.bind(golf)();
            offset = entity.explicitContentGuilds;
            verify = entity.explicitContentFriendDm;
            options = entity.explicitContentNonFriendDm;
            entity = {};
            golf = 1;
            report = report[golf];
            report = yankee.bind(oscar)(report);
            report = report.ExplicitContentRedaction;
            report = report.SHOW;
            if(!(offset === report)) { _fun00002_ip = 132; continue _fun00001 }
 97:
            offset = _closure1_slot0;
            report = _closure1_slot1;
            report = report[golf];
            report = offset.bind(oscar)(report);
            report = report.ExplicitContentRedaction;
            report = report.BLUR;
            entity['explicitContentGuilds'] = report;
 132:
            offset = _closure1_slot0;
            report = _closure1_slot1;
            report = report[golf];
            report = offset.bind(oscar)(report);
            report = report.ExplicitContentRedaction;
            report = report.SHOW;
            if(!(verify === report)) { _fun00002_ip = 200; continue _fun00001 }
 165:
            verify = _closure1_slot0;
            report = _closure1_slot1;
            report = report[golf];
            report = verify.bind(oscar)(report);
            report = report.ExplicitContentRedaction;
            report = report.BLUR;
            entity['explicitContentFriendDm'] = report;
 200:
            verify = _closure1_slot0;
            report = _closure1_slot1;
            report = report[golf];
            report = verify.bind(oscar)(report);
            report = report.ExplicitContentRedaction;
            report = report.SHOW;
            if(!(options === report)) { _fun00002_ip = 268; continue _fun00001 }
 233:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[golf];
            tango = report.bind(oscar)(tango);
            tango = tango.ExplicitContentRedaction;
            tango = tango.BLUR;
            entity['explicitContentNonFriendDm'] = tango;
 268:
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    mike['onApply'] = golf;
    tango = function() { // Original name: predicate
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            options = _closure1_slot0;
            entity = _closure1_slot1;
            zulu = 0;
            zulu = entity[zulu];
            report = undefined;
            tango = options.bind(report)(zulu);
            zulu = tango.getExplicitContentSettingOrDefault;
            zulu = zulu.bind(tango)();
            tango = zulu.explicitContentGuilds;
            golf = zulu.explicitContentFriendDm;
            zulu = zulu.explicitContentNonFriendDm;
            oscar = 1;
            entity = entity[oscar];
            entity = options.bind(report)(entity);
            entity = entity.ExplicitContentRedaction;
            entity = entity.SHOW;
            entity = tango === entity;
            if(entity) { _fun00004_ip = 116; continue _fun00003 }
 83:
            options = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[oscar];
            tango = options.bind(report)(tango);
            tango = tango.ExplicitContentRedaction;
            tango = tango.SHOW;
            entity = golf === tango;
 116:
            if(entity) { _fun00004_ip = 152; continue _fun00003 }
 119:
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[oscar];
            mike = tango.bind(report)(mike);
            mike = mike.ExplicitContentRedaction;
            mike = mike.SHOW;
            entity = zulu === mike;
 152:
            return entity;
        }
    };
    mike['predicate'] = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/in_app_reports/IarSettingsUpsellsConfigSensitiveMedia.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();