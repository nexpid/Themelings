// app/modules/safety_hub/hooks/useSafetyHubClassifications.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    verify = argCorge;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = verify;
    var _closure1_slot3 = golf;
    tango = function() { // Original name: useSafetyHubClassifications
        report = _closure1_slot0;
        tango = _closure1_slot3;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStoresArray;
        mike = _closure1_slot5;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            mike = _closure1_slot5;
            entity = mike.getClassifications;
            entity = entity.bind(mike)();
            return entity;
        };
        zulu = tango.bind(report)(zulu, mike);
        mike = zulu.sort;
        entity = function(argFoo, argBar) {
            tango = _closure1_slot1;
            report = _closure1_slot3;
            entity = 4;
            mike = report[entity];
            zulu = undefined;
            golf = tango.bind(zulu)(mike);
            oscar = golf.extractTimestamp;
            mike = argBar;
            mike = mike.id;
            mike = oscar.bind(golf)(mike);
            entity = report[entity];
            tango = tango.bind(zulu)(entity);
            zulu = tango.extractTimestamp;
            entity = argFoo;
            entity = entity.id;
            entity = zulu.bind(tango)(entity);
            entity = mike - entity;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot7 = tango;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = verify.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.ViolationType;
    var _closure1_slot6 = report;
    report = 9;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/safety_hub/hooks/useSafetyHubClassifications.tsx';
    report = oscar.bind(golf)(report);
    zulu['useSafetyHubClassifications'] = tango;
    tango = function(argFoo) { // Original name: useSafetyHubClassification
        _fun92510: for(var _fun92510_ip = 0; ; ) switch(_fun92510_ip) {
 0:
            backup = argFoo;
            var _closure2_slot0 = backup;
            yankee = _closure1_slot0;
            mike = _closure1_slot3;
            zulu = 3;
            report = mike[zulu];
            options = undefined;
            verify = yankee.bind(options)(report);
            golf = verify.useStateFromStores;
            report = _closure1_slot5;
            oscar = new Array(1);
            oscar[0] = report;
            report = function() {
                zulu = _closure1_slot5;
                mike = zulu.getClassification;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = golf.bind(verify)(oscar, report);
            var _closure2_slot1 = golf;
            report = mike[zulu];
            offset = yankee.bind(options)(report);
            verify = offset.useStateFromStores;
            report = _closure1_slot5;
            oscar = new Array(1);
            oscar[0] = report;
            report = function() {
                zulu = _closure1_slot5;
                mike = zulu.getClassificationRequestState;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            offset = verify.bind(offset)(oscar, report);
            var _closure2_slot2 = offset;
            report = mike[zulu];
            romeo = yankee.bind(options)(report);
            verify = romeo.useStateFromStores;
            report = _closure1_slot5;
            oscar = new Array(1);
            oscar[0] = report;
            report = function() {
                mike = _closure1_slot5;
                entity = mike.getIsDsaEligible;
                entity = entity.bind(mike)();
                return entity;
            };
            oscar = verify.bind(romeo)(oscar, report);
            zulu = mike[zulu];
            romeo = yankee.bind(options)(zulu);
            verify = romeo.useStateFromStores;
            zulu = _closure1_slot5;
            report = new Array(1);
            report[0] = zulu;
            zulu = function() {
                mike = _closure1_slot5;
                entity = mike.getIsAppealEligible;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu = verify.bind(romeo)(report, zulu);
            report = 5;
            report = mike[report];
            romeo = yankee.bind(options)(report);
            verify = romeo.useIsSafetyHubGuildViolationInAppAppealsEnabled;
            report = 'classification_detail';
            report = verify.bind(romeo)(report);
            verify = 6;
            mike = mike[verify];
            yankee = yankee.bind(options)(mike);
            mike = yankee.isGuildClassification;
            mike = mike.bind(yankee)(golf);
            if(mike) { _fun92510_ip = 256; continue _fun92510 }
 244:
            mike = _closure1_slot6;
            mike = mike.USER;
            _fun92510_ip = 340; continue _fun92510;
 256:
            yankee = golf.guild_metadata;
            romeo = null;
            foxtrot = romeo == yankee;
            romeo = undefined;
            if(foxtrot) { _fun92510_ip = 279; continue _fun92510 }
 273:
            romeo = yankee.member_type;
 279:
            foxtrot = _closure1_slot0;
            kilo = _closure1_slot3;
            yankee = 7;
            yankee = kilo[yankee];
            yankee = foxtrot.bind(options)(yankee);
            yankee = yankee.MemberType;
            yankee = yankee.OWNER;
            if(!(romeo !== yankee)) { _fun92510_ip = 327; continue _fun92510 }
 315:
            yankee = _closure1_slot6;
            yankee = yankee.GUILD_MEMBER;
            _fun92510_ip = 337; continue _fun92510;
 327:
            romeo = _closure1_slot6;
            yankee = romeo.GUILD_OWNER;
 337:
            mike = yankee;
 340:
            foxtrot = _closure1_slot4;
            romeo = foxtrot.useEffect;
            yankee = new Array(3);
            yankee[0] = backup;
            yankee[1] = golf;
            yankee[2] = offset;
            entity = function() {
                _fun92515: for(var _fun92515_ip = 0; ; ) switch(_fun92515_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = undefined;
                    zulu = entity === zulu;
                    if(!zulu) { _fun92515_ip = 26; continue _fun92515 }
 16:
                    report = _closure2_slot2;
                    tango = null;
                    zulu = tango == report;
 26:
                    if(!zulu) { _fun92515_ip = 67; continue _fun92515 }
 29:
                    tango = _closure1_slot2;
                    report = _closure1_slot3;
                    zulu = 8;
                    zulu = report[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.getSafetyHubDataForClassification;
                    mike = _closure2_slot0;
                    mike = zulu.bind(tango)(mike);
 67:
                    return entity;
                }
            };
            entity = romeo.bind(foxtrot)(entity, yankee);
            entity = {};
            entity['classification'] = golf;
            entity['classificationRequestState'] = offset;
            entity['isDsaEligible'] = oscar;
            if(!zulu) { _fun92510_ip = 404; continue _fun92510 }
 398:
            oscar = null;
            zulu = oscar != golf;
 404:
            if(!zulu) { _fun92510_ip = 419; continue _fun92510 }
 407:
            offset = golf.appeal_status;
            oscar = null;
            zulu = oscar == offset;
 419:
            if(!zulu) { _fun92510_ip = 462; continue _fun92510 }
 422:
            oscar = _closure1_slot0;
            tango = _closure1_slot3;
            tango = tango[verify];
            oscar = oscar.bind(options)(tango);
            tango = oscar.isGuildClassification;
            tango = tango.bind(oscar)(golf);
            tango = !tango;
            if(tango) { _fun92510_ip = 459; continue _fun92510 }
 456:
            tango = report;
 459:
            zulu = tango;
 462:
            entity['isAppealEligible'] = zulu;
            entity['violationType'] = mike;
            return entity;
        }
    };
    zulu['useSafetyHubClassification'] = tango;
    tango = function() { // Original name: useActiveSafetyHubClassifications
        zulu = _closure1_slot7;
        mike = undefined;
        zulu = zulu.bind(mike)();
        mike = global;
        mike = mike.Date;
        tango = mike.prototype;
        tango = Object.create(tango, {constructor: {value: mike}});
        oscar = tango;
        mike = new oscar[mike](report);
        mike = mike instanceof Object ? mike : tango;
        var _closure2_slot0 = mike;
        mike = zulu.filter;
        entity = function(argFoo) {
            entity = global;
            zulu = entity.Date;
            entity = argFoo;
            tango = entity.max_expiration_time;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            report = mike;
            entity = new report[zulu](tango, zulu);
            mike = entity instanceof Object ? entity : mike;
            entity = _closure2_slot0;
            entity = mike > entity;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['useActiveSafetyHubClassifications'] = tango;
    tango = function() { // Original name: useExpiredSafetyHubClassifications
        zulu = _closure1_slot7;
        mike = undefined;
        zulu = zulu.bind(mike)();
        mike = global;
        mike = mike.Date;
        tango = mike.prototype;
        tango = Object.create(tango, {constructor: {value: mike}});
        oscar = tango;
        mike = new oscar[mike](report);
        mike = mike instanceof Object ? mike : tango;
        var _closure2_slot0 = mike;
        mike = zulu.filter;
        entity = function(argFoo) {
            entity = global;
            zulu = entity.Date;
            entity = argFoo;
            tango = entity.max_expiration_time;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            report = mike;
            entity = new report[zulu](tango, zulu);
            mike = entity instanceof Object ? entity : mike;
            entity = _closure2_slot0;
            entity = mike <= entity;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['useExpiredSafetyHubClassifications'] = tango;
    mike = function() { // Original name: useSafetyHubAppealSignal
        tango = _closure1_slot0;
        zulu = _closure1_slot3;
        mike = 3;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        entity = _closure1_slot5;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            mike = _closure1_slot5;
            entity = mike.getAppealSignal;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useSafetyHubAppealSignal'] = mike;
    return entity;
})();