// app/modules/messages/native/renderer/row_data/EphemeralIndication.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.HelpdeskArticles;
    var _closure1_slot4 = golf;
    tango = tango.MessageFlags;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    tango = 7;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.makeKeyedDataComponent;
    tango = 'ephemeralIndication';
    tango = golf.bind(options)(tango);
    var _closure1_slot7 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/row_data/EphemeralIndication.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: EphemeralIndication
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            romeo = mike.message;
            var _closure2_slot0 = romeo;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 8;
            mike = tango[mike];
            tango = undefined;
            report = zulu.bind(tango)(mike);
            zulu = report.useStateFromStores;
            oscar = _closure1_slot3;
            mike = new Array(1);
            mike[0] = oscar;
            entity = function() {
                zulu = _closure1_slot3;
                mike = zulu.getMessage;
                entity = _closure2_slot0;
                entity = entity.id;
                mike = mike.bind(zulu)(entity);
                entity = null;
                entity = entity != mike;
                return entity;
            };
            report = zulu.bind(report)(mike, entity);
            mike = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 6;
            entity = offset[entity];
            zulu = mike.bind(tango)(entity);
            mike = zulu.getArticleURL;
            entity = _closure1_slot4;
            if(report) { _fun00002_ip = 164; continue _fun00001 }
 100:
            report = entity.EPHEMERAL_MESSAGES;
            oscar = mike.bind(zulu)(report);
            yankee = _closure1_slot0;
            report = 5;
            options = offset[report];
            options = yankee.bind(tango)(options);
            verify = options.intl;
            options = verify.string;
            report = offset[report];
            report = yankee.bind(tango)(report);
            report = report.t;
            report = report.htHOrq;
            report = options.bind(verify)(report);
            _fun00002_ip = 226; continue _fun00001;
 164:
            entity = entity.GUILD_AUTOMOD_BLOCKED_MESSAGE;
            oscar = mike.bind(zulu)(entity);
            verify = _closure1_slot0;
            entity = 5;
            zulu = offset[entity];
            zulu = verify.bind(tango)(zulu);
            options = zulu.intl;
            zulu = options.string;
            entity = offset[entity];
            entity = verify.bind(tango)(entity);
            entity = entity.t;
            entity = entity.OiCBhI;
            report = zulu.bind(options)(entity);
 226:
            zulu = _closure1_slot6;
            mike = _closure1_slot7;
            entity = {};
            options = _closure1_slot0;
            yankee = _closure1_slot2;
            golf = 5;
            verify = yankee[golf];
            verify = options.bind(tango)(verify);
            offset = verify.intl;
            verify = offset.formatToParts;
            golf = yankee[golf];
            golf = options.bind(tango)(golf);
            golf = golf.t;
            options = golf.uX3ecH;
            golf = {'count': 1, 'countMessages': 1};
            yankee = {};
            foxtrot = 'bindDismissMessage';
            yankee['action'] = foxtrot;
            yankee['message'] = romeo;
            golf['handleDelete'] = yankee;
            golf = verify.bind(offset)(options, golf);
            entity['content'] = golf;
            entity['helpArticleLink'] = oscar;
            entity['helpButtonAccessibilityLabel'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: createEphemeralIndication
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            foxtrot = argFoo;
            mike = foxtrot.hasFlag;
            entity = _closure1_slot5;
            entity = entity.EPHEMERAL;
            entity = mike.bind(foxtrot)(entity);
            oscar = undefined;
            if(entity) { _fun00004_ip = 34; continue _fun00003 }
 32:
            return oscar;
 34:
            tango = foxtrot.interactionMetadata;
            entity = null;
            report = entity == tango;
            mike = undefined;
            if(report) { _fun00004_ip = 57; continue _fun00003 }
 51:
            mike = tango.ephemerality_reason;
 57:
            if(!(entity == mike)) { _fun00004_ip = 373; continue _fun00003 }
 64:
            mike = {};
            offset = _closure1_slot0;
            tango = _closure1_slot2;
            verify = 5;
            report = tango[verify];
            report = offset.bind(oscar)(report);
            yankee = report.intl;
            options = yankee.formatToParts;
            report = tango[verify];
            report = offset.bind(oscar)(report);
            report = report.t;
            golf = report.uX3ecH;
            report = {'count': 1, 'countMessages': 1};
            romeo = {};
            backup = 'bindDismissMessage';
            romeo['action'] = backup;
            romeo['message'] = foxtrot;
            report['handleDelete'] = romeo;
            report = options.bind(yankee)(golf, report);
            mike['content'] = report;
            options = _closure1_slot1;
            report = 6;
            golf = tango[report];
            yankee = options.bind(oscar)(golf);
            options = yankee.getAppsSupportURL;
            golf = _closure1_slot4;
            golf = golf.EPHEMERAL_MESSAGES;
            golf = options.bind(yankee)(golf);
            mike['helpArticleLink'] = golf;
            golf = tango[verify];
            golf = offset.bind(oscar)(golf);
            options = golf.intl;
            golf = options.string;
            tango = tango[verify];
            tango = offset.bind(oscar)(tango);
            tango = tango.t;
            tango = tango.htHOrq;
            tango = golf.bind(options)(tango);
            mike['helpButtonAccessibilityLabel'] = tango;
            options = _closure1_slot3;
            golf = options.getMessage;
            tango = foxtrot.id;
            tango = golf.bind(options)(tango);
            if(!(entity != tango)) { _fun00004_ip = 371; continue _fun00003 }
 273:
            golf = _closure1_slot1;
            tango = _closure1_slot2;
            report = tango[report];
            options = golf.bind(oscar)(report);
            golf = options.getArticleURL;
            report = _closure1_slot4;
            report = report.GUILD_AUTOMOD_BLOCKED_MESSAGE;
            report = golf.bind(options)(report);
            mike['helpArticleLink'] = report;
            options = _closure1_slot0;
            report = tango[verify];
            report = options.bind(oscar)(report);
            golf = report.intl;
            report = golf.string;
            tango = tango[verify];
            tango = options.bind(oscar)(tango);
            tango = tango.t;
            tango = tango.OiCBhI;
            tango = report.bind(golf)(tango);
            mike['helpButtonAccessibilityLabel'] = tango;
 371:
            return mike;
 373:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            mike = 4;
            mike = report[mike];
            tango = tango.bind(oscar)(mike);
            mike = tango.getEphemeralReasonMessage;
            report = foxtrot.interactionMetadata;
            golf = entity == report;
            entity = undefined;
            if(golf) { _fun00004_ip = 420; continue _fun00003 }
 414:
            entity = report.ephemerality_reason;
 420:
            yankee = mike.bind(tango)(entity);
            entity = {};
            report = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 5;
            tango = golf[mike];
            tango = report.bind(oscar)(tango);
            offset = tango.intl;
            verify = offset.formatToParts;
            tango = golf[mike];
            tango = report.bind(oscar)(tango);
            tango = tango.t;
            options = tango.xgCMRU;
            tango = {};
            romeo = {};
            backup = 'bindDismissMessage';
            romeo['action'] = backup;
            romeo['message'] = foxtrot;
            tango['handleDelete'] = romeo;
            tango['reason'] = yankee;
            tango = verify.bind(offset)(options, tango);
            entity['content'] = tango;
            options = _closure1_slot1;
            tango = 6;
            tango = golf[tango];
            options = options.bind(oscar)(tango);
            tango = options.getArticleURL;
            zulu = _closure1_slot4;
            zulu = zulu.USING_APPS_FAQ;
            zulu = tango.bind(options)(zulu);
            entity['helpArticleLink'] = zulu;
            zulu = golf[mike];
            zulu = report.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = report.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.OIWSJS;
            mike = zulu.bind(tango)(mike);
            entity['helpButtonAccessibilityLabel'] = mike;
            return entity;
        }
    };
    zulu['createEphemeralIndication'] = mike;
    return entity;
})();