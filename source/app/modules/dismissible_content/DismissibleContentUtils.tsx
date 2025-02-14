// app/modules/dismissible_content/DismissibleContentUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    report = function(argFoo) { // Original name: isDismissibleContentDismissed
        _fun38169: for(var _fun38169_ip = 0; ; ) switch(_fun38169_ip) {
 0:
            report = argFoo;
            entity = arguments[1];
            oscar = undefined;
            if(!(entity === oscar)) { _fun38169_ip = 14; continue _fun38169 }
 12:
            entity = false;
 14:
            if(entity) { _fun38169_ip = 58; continue _fun38169 }
 17:
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 8;
            entity = zulu[entity];
            mike = mike.bind(oscar)(entity);
            entity = mike.disableNewUserDismissibleContent;
            entity = entity.bind(mike)(report);
            if(!entity) { _fun38169_ip = 58; continue _fun38169 }
 54:
            entity = true;
            return entity;
 58:
            entity = _closure1_slot5;
            entity = entity.settings;
            zulu = entity.userContent;
            entity = null;
            golf = entity == zulu;
            tango = undefined;
            if(golf) { _fun38169_ip = 94; continue _fun38169 }
 88:
            tango = zulu.dismissedContents;
 94:
            entity = entity != tango;
            if(!entity) { _fun38169_ip = 133; continue _fun38169 }
 101:
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 9;
            mike = golf[mike];
            zulu = zulu.bind(oscar)(mike);
            mike = zulu.hasBit;
            entity = mike.bind(zulu)(tango, report);
 133:
            return entity;
        }
    };
    var _closure1_slot14 = report;
    entity = function(argFoo) { // Original name: markDismissibleContentAsDismissedPreProcessing
        _fun38170: for(var _fun38170_ip = 0; ; ) switch(_fun38170_ip) {
 0:
            tango = argFoo;
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun38170_ip = 14; continue _fun38170 }
 12:
            report = {};
 14:
            zulu = _closure1_slot10;
            zulu = zulu.bind(entity)(tango);
            if(zulu) { _fun38170_ip = 35; continue _fun38170 }
 29:
            zulu = report.forceTrack;
 35:
            if(!zulu) { _fun38170_ip = 48; continue _fun38170 }
 38:
            zulu = _closure1_slot20;
            zulu = zulu.bind(entity)(tango, report);
 48:
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 13;
            mike = report[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.handleDCDismissed;
            mike = mike.bind(zulu)(tango);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: markDismissibleContentAsDismissedPostProcessing
        _fun38171: for(var _fun38171_ip = 0; ; ) switch(_fun38171_ip) {
 0:
            oscar = arguments[1];
            entity = undefined;
            if(!(oscar === entity)) { _fun38171_ip = 11; continue _fun38171 }
 9:
            oscar = {};
 11:
            tango = _closure1_slot7;
            zulu = tango.hasUserHitDCCap;
            zulu = zulu.bind(tango)();
            tango = !zulu;
            zulu = _closure1_slot9;
            mike = {};
            report = argFoo;
            mike['content'] = report;
            report = null;
            golf = report == oscar;
            report = undefined;
            if(golf) { _fun38171_ip = 61; continue _fun38171 }
 55:
            report = oscar.groupName;
 61:
            mike['groupName'] = report;
            mike = zulu.bind(entity)(mike, tango);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _markDismissibleContentAsDismissed
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun38174: for(var _fun38174_ip = 0; ; ) switch(_fun38174_ip) {
 0:
                    StartGenerator();
                    golf = argFoo;
                    oscar = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun38174_ip = 121; continue _fun38174 }
 13:
                    zulu = undefined;
                    if(!(oscar === zulu)) { _fun38174_ip = 21; continue _fun38174 }
 19:
                    oscar = {};
 21:
                    SaveGenerator(address=25);
 23:
                    return zulu;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun38174_ip = 118; continue _fun38174 }
 31:
                    options = _closure1_slot14;
                    tango = true;
                    tango = options.bind(zulu)(golf, tango);
                    if(tango) { _fun38174_ip = 115; continue _fun38174 }
 49:
                    tango = _closure1_slot15;
                    tango = tango.bind(zulu)(golf, oscar);
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    tango = 17;
                    tango = verify[tango];
                    options = options.bind(zulu)(tango);
                    tango = options.addDismissedContent;
                    tango = tango.bind(options)(golf);
                    SaveGenerator(address=94);
 92:
                    return tango;
 94:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(options) { _fun38174_ip = 112; continue _fun38174 }
 100:
                    report = _closure1_slot16;
                    report = report.bind(zulu)(golf, oscar);
                    _fun38174_ip = 115; continue _fun38174;
 112:
                    return tango;
 115:
                    return zulu;
 118:
                    return mike;
 121:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot17 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: _markVersionedDismissibleContentAsDismissed
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun38177: for(var _fun38177_ip = 0; ; ) switch(_fun38177_ip) {
 0:
                    StartGenerator();
                    golf = argFoo;
                    oscar = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun38177_ip = 108; continue _fun38177 }
 13:
                    tango = undefined;
                    if(!(oscar === tango)) { _fun38177_ip = 21; continue _fun38177 }
 19:
                    oscar = {};
 21:
                    SaveGenerator(address=25);
 23:
                    return tango;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun38177_ip = 105; continue _fun38177 }
 31:
                    zulu = _closure1_slot15;
                    zulu = zulu.bind(tango)(golf, oscar);
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    zulu = 17;
                    zulu = verify[zulu];
                    verify = options.bind(tango)(zulu);
                    options = verify.addVersionedDismissedContent;
                    zulu = argBar;
                    zulu = options.bind(verify)(golf, zulu);
                    SaveGenerator(address=83);
 81:
                    return zulu;
 83:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(options) { _fun38177_ip = 102; continue _fun38177 }
 89:
                    report = _closure1_slot16;
                    report = report.bind(tango)(golf, oscar);
                    return tango;
 102:
                    return zulu;
 105:
                    return mike;
 108:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot18 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function() { // Original name: _markTimeRecurringDismissibleContentAsDismissed
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun38180: for(var _fun38180_ip = 0; ; ) switch(_fun38180_ip) {
 0:
                    StartGenerator();
                    golf = argFoo;
                    oscar = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun38180_ip = 104; continue _fun38180 }
 13:
                    tango = undefined;
                    if(!(oscar === tango)) { _fun38180_ip = 21; continue _fun38180 }
 19:
                    oscar = {};
 21:
                    SaveGenerator(address=25);
 23:
                    return tango;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun38180_ip = 101; continue _fun38180 }
 31:
                    zulu = _closure1_slot15;
                    zulu = zulu.bind(tango)(golf, oscar);
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    zulu = 17;
                    zulu = verify[zulu];
                    options = options.bind(tango)(zulu);
                    zulu = options.addTimeRecurringDismissedContent;
                    zulu = zulu.bind(options)(golf);
                    SaveGenerator(address=79);
 77:
                    return zulu;
 79:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(options) { _fun38180_ip = 98; continue _fun38180 }
 85:
                    report = _closure1_slot16;
                    report = report.bind(tango)(golf, oscar);
                    return tango;
 98:
                    return zulu;
 101:
                    return mike;
 104:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot19 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot19 = entity;
    mike = function(argFoo, argBar) { // Original name: trackDismissibleContentDismissed
        _fun38181: for(var _fun38181_ip = 0; ; ) switch(_fun38181_ip) {
 0:
            yankee = argFoo;
            golf = argBar;
            mike = _closure1_slot11;
            entity = undefined;
            tango = mike.bind(entity)();
            zulu = _closure1_slot4;
            mike = 1;
            zulu = zulu.bind(entity)(tango, mike);
            mike = 0;
            offset = zulu[mike];
            zulu = _closure1_slot7;
            mike = zulu.getRenderedAtTimestamp;
            zulu = mike.bind(zulu)(yankee);
            mike = global;
            mike = mike.Date;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            output = tango;
            mike = new output[mike](sizing);
            tango = mike instanceof Object ? mike : tango;
            oscar = null;
            mike = oscar == zulu;
            options = null;
            if(mike) { _fun38181_ip = 108; continue _fun38181 }
 94:
            mike = tango.getTime;
            mike = mike.bind(tango)();
            options = mike - zulu;
 108:
            zulu = _closure1_slot1;
            backup = _closure1_slot2;
            mike = 14;
            mike = backup[mike];
            report = zulu.bind(entity)(mike);
            tango = report.track;
            mike = _closure1_slot13;
            zulu = mike.DISMISSIBLE_CONTENT_DISMISSED;
            mike = {};
            foxtrot = _closure1_slot0;
            romeo = 15;
            romeo = backup[romeo];
            romeo = foxtrot.bind(entity)(romeo);
            romeo = romeo.DismissibleContent;
            romeo = romeo[yankee];
            mike['type'] = romeo;
            foxtrot = oscar == golf;
            romeo = undefined;
            if(foxtrot) { _fun38181_ip = 190; continue _fun38181 }
 184:
            romeo = golf.dismissAction;
 190:
            if(!(oscar == romeo)) { _fun38181_ip = 204; continue _fun38181 }
 194:
            foxtrot = _closure1_slot12;
            romeo = foxtrot.UNKNOWN;
 204:
            mike['action'] = romeo;
            mike['content_count'] = offset;
            romeo = oscar == golf;
            offset = undefined;
            if(romeo) { _fun38181_ip = 228; continue _fun38181 }
 222:
            offset = golf.groupName;
 228:
            mike['group_name'] = offset;
            offset = _closure1_slot0;
            romeo = _closure1_slot2;
            verify = 16;
            verify = romeo[verify];
            verify = offset.bind(entity)(verify);
            offset = verify.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
            verify = offset.has;
            verify = verify.bind(offset)(yankee);
            mike['bypass_fatigue'] = verify;
            offset = oscar == golf;
            verify = undefined;
            if(offset) { _fun38181_ip = 288; continue _fun38181 }
 283:
            verify = golf.guildId;
 288:
            mike['guild_id'] = verify;
            mike['shown_duration'] = options;
            options = oscar == golf;
            oscar = undefined;
            if(options) { _fun38181_ip = 314; continue _fun38181 }
 308:
            oscar = golf.version;
 314:
            mike['version'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    var _closure1_slot20 = mike;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.DCFEventTypes;
    var _closure1_slot6 = oscar;
    oscar = 4;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot7 = oscar;
    oscar = 5;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.addCandidateContent;
    var _closure1_slot8 = verify;
    verify = oscar.removeCandidateContent;
    var _closure1_slot9 = verify;
    verify = oscar.isContentShown;
    var _closure1_slot10 = verify;
    oscar = oscar.getCurrentlyShownCounts;
    var _closure1_slot11 = oscar;
    oscar = 6;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.ContentDismissActionType;
    var _closure1_slot12 = oscar;
    oscar = 7;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.AnalyticEvents;
    var _closure1_slot13 = oscar;
    oscar = 18;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/dismissible_content/DismissibleContentUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['isDismissibleContentDismissed'] = report;
    report = function(argFoo) { // Original name: useIsDismissibleContentDismissed
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 10;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStores;
        report = _closure1_slot5;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            zulu = _closure1_slot14;
            mike = _closure2_slot0;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useIsDismissibleContentDismissed'] = report;
    report = function(argFoo) { // Original name: isVersionedDismissibleContentDismissed
        _fun38184: for(var _fun38184_ip = 0; ; ) switch(_fun38184_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 8;
            mike = tango[mike];
            oscar = undefined;
            zulu = zulu.bind(oscar)(mike);
            mike = zulu.disableNewUserDismissibleContent;
            mike = mike.bind(zulu)(report);
            if(mike) { _fun38184_ip = 150; continue _fun38184 }
 42:
            mike = _closure1_slot5;
            mike = mike.settings;
            tango = mike.userContent;
            zulu = null;
            golf = zulu == tango;
            mike = undefined;
            if(golf) { _fun38184_ip = 94; continue _fun38184 }
 69:
            tango = tango.recurringDismissibleContentStates;
            tango = tango[report];
            golf = zulu == tango;
            mike = undefined;
            if(golf) { _fun38184_ip = 94; continue _fun38184 }
 88:
            mike = tango.lastDismissedVersion;
 94:
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 11;
            entity = golf[entity];
            tango = tango.bind(oscar)(entity);
            entity = tango.getVersionedDismissibleContentCurrentVersion;
            tango = entity.bind(tango)(report);
            entity = {};
            zulu = zulu != mike;
            if(!zulu) { _fun38184_ip = 138; continue _fun38184 }
 134:
            zulu = mike >= tango;
 138:
            entity['isDismissed'] = zulu;
            entity['lastDismissedVersion'] = mike;
            return entity;
 150:
            entity = {'isDismissed': true, 'lastDismissedVersion': null};
            return entity;
        }
    };
    zulu['isVersionedDismissibleContentDismissed'] = report;
    report = function(argFoo, argBar) { // Original name: isTimeRecurringDismissibleContentDismissed
        _fun38185: for(var _fun38185_ip = 0; ; ) switch(_fun38185_ip) {
 0:
            zulu = argFoo;
            options = argBar;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 8;
            tango = tango[mike];
            mike = undefined;
            report = report.bind(mike)(tango);
            tango = report.disableNewUserDismissibleContent;
            tango = tango.bind(report)(zulu);
            if(tango) { _fun38185_ip = 292; continue _fun38185 }
 48:
            entity = _closure1_slot5;
            entity = entity.settings;
            entity = entity.userContent;
            golf = null;
            tango = golf == entity;
            report = undefined;
            if(tango) { _fun38185_ip = 100; continue _fun38185 }
 75:
            entity = entity.recurringDismissibleContentStates;
            entity = entity[zulu];
            zulu = golf == entity;
            report = undefined;
            if(zulu) { _fun38185_ip = 100; continue _fun38185 }
 94:
            report = entity.lastDismissedAtMs;
 100:
            entity = golf != report;
            zulu = undefined;
            if(!entity) { _fun38185_ip = 170; continue _fun38185 }
 109:
            entity = '0';
            zulu = undefined;
            if(!(entity !== report)) { _fun38185_ip = 170; continue _fun38185 }
 121:
            tango = global;
            verify = tango.Number;
            oscar = verify.isNaN;
            entity = tango.Number;
            entity = entity.bind(mike)(report);
            oscar = oscar.bind(verify)(entity);
            entity = undefined;
            if(oscar) { _fun38185_ip = 167; continue _fun38185 }
 156:
            tango = tango.Number;
            entity = tango.bind(mike)(report);
 167:
            zulu = entity;
 170:
            if(!(mike !== zulu)) { _fun38185_ip = 276; continue _fun38185 }
 174:
            entity = golf != options;
            tango = true;
            if(!entity) { _fun38185_ip = 262; continue _fun38185 }
 183:
            entity = options.cooldownDurationMs;
            oscar = zulu + entity;
            entity = global;
            report = entity.Date;
            entity = report.now;
            entity = entity.bind(report)();
            report = options.showAfterTimestamp;
            report = golf == report;
            if(report) { _fun38185_ip = 249; continue _fun38185 }
 223:
            golf = options.showAfterTimestamp;
            golf = entity >= golf;
            if(!golf) { _fun38185_ip = 246; continue _fun38185 }
 236:
            options = options.showAfterTimestamp;
            golf = zulu <= options;
 246:
            report = golf;
 249:
            entity = entity < oscar;
            if(entity) { _fun38185_ip = 259; continue _fun38185 }
 256:
            entity = !report;
 259:
            tango = entity;
 262:
            entity = {};
            entity['isDismissed'] = tango;
            entity['lastDismissedAtMs'] = zulu;
            return entity;
 276:
            entity = {};
            zulu = false;
            entity['isDismissed'] = zulu;
            entity['lastDismissedAtMs'] = mike;
            return entity;
 292:
            entity = {'isDismissed': true, 'lastDismissedAtMs': null};
            return entity;
        }
    };
    zulu['isTimeRecurringDismissibleContentDismissed'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: requestMarkDismissibleContentAsShown
        _fun38186: for(var _fun38186_ip = 0; ; ) switch(_fun38186_ip) {
 0:
            report = argFoo;
            oscar = argBar;
            golf = argBaz;
            var _closure2_slot0 = report;
            var _closure2_slot1 = oscar;
            zulu = _closure1_slot10;
            entity = undefined;
            zulu = zulu.bind(entity)(report);
            if(zulu) { _fun38186_ip = 51; continue _fun38186 }
 36:
            verify = _closure1_slot7;
            options = verify.hasUserHitDCCap;
            zulu = options.bind(verify)(report);
 51:
            if(zulu) { _fun38186_ip = 57; continue _fun38186 }
 54:
            zulu = golf;
 57:
            if(zulu) { _fun38186_ip = 169; continue _fun38186 }
 60:
            golf = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 12;
            zulu = options[zulu];
            options = golf.bind(entity)(zulu);
            golf = options.dispatch;
            zulu = {};
            verify = 'DCF_EVENT_LOGGED';
            zulu['type'] = verify;
            verify = _closure1_slot6;
            verify = verify.DC_SHOW_REQUEST;
            zulu['eventType'] = verify;
            zulu['dismissibleContent'] = report;
            zulu = golf.bind(options)(zulu);
            zulu = _closure1_slot8;
            mike = {};
            mike['content'] = report;
            report = null;
            golf = report == oscar;
            report = undefined;
            if(golf) { _fun38186_ip = 149; continue _fun38186 }
 143:
            report = oscar.groupName;
 149:
            mike['groupName'] = report;
            tango = function() { // Original name: onAdded
                _fun38187: for(var _fun38187_ip = 0; ; ) switch(_fun38187_ip) {
 0:
                    mike = _closure1_slot11;
                    entity = undefined;
                    tango = mike.bind(entity)();
                    zulu = _closure1_slot4;
                    mike = 2;
                    zulu = zulu.bind(entity)(tango, mike);
                    mike = 0;
                    verify = zulu[mike];
                    mike = 1;
                    report = zulu[mike];
                    romeo = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    mike = 13;
                    mike = foxtrot[mike];
                    tango = romeo.bind(entity)(mike);
                    zulu = tango.handleDCShownToUser;
                    yankee = _closure2_slot0;
                    zulu = zulu.bind(tango)(yankee);
                    tango = _closure1_slot1;
                    zulu = 14;
                    zulu = foxtrot[zulu];
                    golf = tango.bind(entity)(zulu);
                    oscar = golf.track;
                    zulu = _closure1_slot13;
                    tango = zulu.DISMISSIBLE_CONTENT_SHOWN;
                    zulu = {};
                    offset = 15;
                    offset = foxtrot[offset];
                    offset = romeo.bind(entity)(offset);
                    offset = offset.DismissibleContent;
                    offset = offset[yankee];
                    zulu['type'] = offset;
                    zulu['content_count'] = verify;
                    zulu['fatigable_content_count'] = report;
                    verify = _closure2_slot1;
                    report = null;
                    offset = report == verify;
                    verify = undefined;
                    if(offset) { _fun38187_ip = 173; continue _fun38187 }
 163:
                    offset = _closure2_slot1;
                    verify = offset.groupName;
 173:
                    zulu['group_name'] = verify;
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    options = 16;
                    options = offset[options];
                    options = verify.bind(entity)(options);
                    offset = options.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
                    verify = offset.has;
                    options = _closure2_slot0;
                    options = verify.bind(offset)(options);
                    zulu['bypass_fatigue'] = options;
                    options = _closure2_slot1;
                    verify = report == options;
                    options = undefined;
                    if(verify) { _fun38187_ip = 245; continue _fun38187 }
 236:
                    verify = _closure2_slot1;
                    options = verify.guildId;
 245:
                    zulu['guild_id'] = options;
                    options = _closure2_slot1;
                    verify = report == options;
                    options = undefined;
                    if(verify) { _fun38187_ip = 272; continue _fun38187 }
 262:
                    verify = _closure2_slot1;
                    options = verify.version;
 272:
                    zulu['version'] = options;
                    zulu = oscar.bind(golf)(tango, zulu);
                    zulu = _closure2_slot1;
                    zulu = report == zulu;
                    if(zulu) { _fun38187_ip = 308; continue _fun38187 }
 294:
                    tango = _closure2_slot1;
                    tango = tango.onShown;
                    zulu = report == tango;
 308:
                    if(zulu) { _fun38187_ip = 325; continue _fun38187 }
 311:
                    zulu = _closure2_slot1;
                    mike = zulu.onShown;
                    mike = mike.bind(zulu)();
 325:
                    return entity;
                }
            };
            mike['onAdded'] = tango;
            mike = zulu.bind(entity)(mike);
 169:
            return entity;
        }
    };
    zulu['requestMarkDismissibleContentAsShown'] = report;
    report = function() { // Original name: markDismissibleContentAsDismissed
        entity = undefined;
        tango = _closure1_slot17;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['markDismissibleContentAsDismissed'] = report;
    report = function() { // Original name: markVersionedDismissibleContentAsDismissed
        entity = undefined;
        tango = _closure1_slot18;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['markVersionedDismissibleContentAsDismissed'] = report;
    tango = function() { // Original name: markTimeRecurringDismissibleContentAsDismissed
        entity = undefined;
        tango = _closure1_slot19;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['markTimeRecurringDismissibleContentAsDismissed'] = tango;
    zulu['trackDismissibleContentDismissed'] = mike;
    return entity;
})();