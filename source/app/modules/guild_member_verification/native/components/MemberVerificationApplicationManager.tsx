// app/modules/guild_member_verification/native/components/MemberVerificationApplicationManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun123740: for(var _fun123740_ip = 0; ; ) switch(_fun123740_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot13;
            entity = entity.bind(zulu)();
            if(entity) { _fun123740_ip = 51; continue _fun123740 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun123740_ip = 92; continue _fun123740;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun123740_ip = 71; continue _fun123740 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun123741: for(var _fun123741_ip = 0; ; ) switch(_fun123741_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun123741_ip = 76; continue _fun123741;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot13 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildFeatures;
    var _closure1_slot11 = tango;
    tango = 16;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: MemberVerificationApplicationManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            zulu = _closure1_slot4;
            report = _closure2_slot0;
            tango = undefined;
            zulu = zulu.bind(tango)(oscar, report);
            zulu = _closure1_slot12;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = zulu.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            zulu = false;
            entity['isShowingAlert'] = zulu;
            zulu = {};
            tango = function() { // Original name: POST_CONNECTION_OPEN
                mike = _closure3_slot0;
                entity = mike.showApplicationApprovedAlert;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu['POST_CONNECTION_OPEN'] = tango;
            tango = function() { // Original name: GUILD_JOIN_REQUEST_UPDATE
                mike = _closure3_slot0;
                entity = mike.showApplicationApprovedAlert;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu['GUILD_JOIN_REQUEST_UPDATE'] = tango;
            tango = function() { // Original name: CHANNEL_SELECT
                mike = _closure3_slot0;
                entity = mike.showApplicationApprovedAlert;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu['CHANNEL_SELECT'] = tango;
            entity['actions'] = zulu;
            mike = function() {
                _fun123749: for(var _fun123749_ip = 0; ; ) switch(_fun123749_ip) {
 0:
                    zulu = _closure1_slot9;
                    entity = zulu.getGuildId;
                    offset = entity.bind(zulu)();
                    var _closure4_slot0 = offset;
                    tango = null;
                    if(!(tango != offset)) { _fun123749_ip = 445; continue _fun123749 }
 32:
                    zulu = _closure1_slot10;
                    entity = zulu.getRequest;
                    oscar = entity.bind(zulu)(offset);
                    var _closure4_slot1 = oscar;
                    zulu = tango == oscar;
                    entity = undefined;
                    report = undefined;
                    if(zulu) { _fun123749_ip = 68; continue _fun123749 }
 62:
                    report = oscar.applicationStatus;
 68:
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 10;
                    zulu = options[zulu];
                    zulu = golf.bind(entity)(zulu);
                    zulu = zulu.GuildJoinRequestApplicationStatuses;
                    zulu = zulu.APPROVED;
                    if(!(report === zulu)) { _fun123749_ip = 443; continue _fun123749 }
 107:
                    report = _closure3_slot0;
                    report = report.isShowingAlert;
                    if(!report) { _fun123749_ip = 145; continue _fun123749 }
 123:
                    golf = tango == oscar;
                    report = undefined;
                    if(golf) { _fun123749_ip = 138; continue _fun123749 }
 132:
                    report = oscar.lastSeen;
 138:
                    if(!(tango === report)) { _fun123749_ip = 401; continue _fun123749 }
 145:
                    report = _closure3_slot0;
                    report = report.isShowingAlert;
                    if(report) { _fun123749_ip = 443; continue _fun123749 }
 161:
                    if(!(tango != oscar)) { _fun123749_ip = 443; continue _fun123749 }
 168:
                    golf = tango == oscar;
                    report = undefined;
                    if(golf) { _fun123749_ip = 183; continue _fun123749 }
 177:
                    report = oscar.lastSeen;
 183:
                    if(!(tango === report)) { _fun123749_ip = 443; continue _fun123749 }
 190:
                    oscar = _closure1_slot8;
                    report = oscar.getGuild;
                    golf = report.bind(oscar)(offset);
                    report = tango == golf;
                    tango = undefined;
                    if(report) { _fun123749_ip = 234; continue _fun123749 }
 213:
                    oscar = golf.hasFeature;
                    report = _closure1_slot11;
                    report = report.CLAN;
                    tango = oscar.bind(golf)(report);
 234:
                    if(tango) { _fun123749_ip = 278; continue _fun123749 }
 237:
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 15;
                    tango = oscar[tango];
                    oscar = report.bind(entity)(tango);
                    report = oscar.openMemberVerificationSuccessAlert;
                    tango = function() {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 14;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.ackUserGuildJoinRequest;
                        zulu = _closure4_slot0;
                        mike = _closure4_slot1;
                        mike = mike.joinRequestId;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    tango = report.bind(oscar)(offset, tango);
                    _fun123749_ip = 387; continue _fun123749;
 278:
                    oscar = _closure1_slot1;
                    tango = _closure1_slot2;
                    report = 11;
                    report = tango[report];
                    options = oscar.bind(entity)(report);
                    golf = options.openLazy;
                    oscar = _closure1_slot0;
                    report = 13;
                    report = tango[report];
                    oscar = oscar.bind(entity)(report);
                    report = 12;
                    report = tango[report];
                    tango = tango.paths;
                    oscar = oscar.bind(entity)(report, tango);
                    tango = global;
                    tango = tango.HermesInternal;
                    report = tango.concat;
                    tango = 'join-success-';
                    report = report.bind(tango)(offset);
                    tango = {};
                    tango['guildId'] = offset;
                    verify = function() { // Original name: onDismiss
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 14;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.ackUserGuildJoinRequest;
                        zulu = _closure4_slot0;
                        mike = _closure4_slot1;
                        mike = mike.joinRequestId;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    tango['onDismiss'] = verify;
                    tango = golf.bind(options)(oscar, report, tango);
 387:
                    report = _closure3_slot0;
                    tango = true;
                    report['isShowingAlert'] = tango;
                    _fun123749_ip = 443; continue _fun123749;
 401:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 9;
                    tango = oscar[tango];
                    report = report.bind(entity)(tango);
                    tango = report.close;
                    tango = tango.bind(report)();
                    tango = _closure3_slot0;
                    zulu = false;
                    tango['isShowingAlert'] = zulu;
 443:
                    return entity;
 445:
                    zulu = _closure3_slot0;
                    zulu = zulu.isShowingAlert;
                    if(!zulu) { _fun123749_ip = 505; continue _fun123749 }
 461:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 9;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.close;
                    mike = mike.bind(zulu)();
                    mike = _closure3_slot0;
                    entity = false;
                    mike['isShowingAlert'] = entity;
 505:
                    entity = undefined;
                    return entity;
                }
            };
            entity['showApplicationApprovedAlert'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot7;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot3;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 17;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_member_verification/native/components/MemberVerificationApplicationManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();