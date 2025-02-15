// app/modules/guild_verification/GuildVerificationUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.GuildFeatures;
    var _closure1_slot3 = golf;
    tango = tango.Routes;
    var _closure1_slot4 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_verification/GuildVerificationUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            mike = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 2;
            entity = zulu[entity];
            zulu = undefined;
            golf = mike.bind(zulu)(entity);
            report = golf.getMemberVerificationRolloutEnabled;
            mike = oscar.id;
            entity = 'invite';
            entity = report.bind(golf)(mike, entity);
            verify = oscar.features;
            report = null;
            golf = report == verify;
            if(entity) { _fun00002_ip = 130; continue _fun00001 }
 64:
            entity = undefined;
            if(golf) { _fun00002_ip = 89; continue _fun00001 }
 69:
            options = verify.includes;
            mike = _closure1_slot3;
            mike = mike.MEMBER_VERIFICATION_GATE_ENABLED;
            entity = options.bind(verify)(mike);
 89:
            if(!entity) { _fun00002_ip = 128; continue _fun00001 }
 92:
            yankee = oscar.features;
            mike = report != yankee;
            if(!mike) { _fun00002_ip = 125; continue _fun00001 }
 105:
            offset = yankee.includes;
            options = _closure1_slot3;
            options = options.PREVIEW_ENABLED;
            mike = offset.bind(yankee)(options);
 125:
            entity = !mike;
 128:
            _fun00002_ip = 199; continue _fun00001;
 130:
            mike = undefined;
            if(golf) { _fun00002_ip = 155; continue _fun00001 }
 135:
            options = verify.includes;
            golf = _closure1_slot3;
            golf = golf.MEMBER_VERIFICATION_GATE_ENABLED;
            mike = options.bind(verify)(golf);
 155:
            if(!mike) { _fun00002_ip = 196; continue _fun00001 }
 158:
            oscar = oscar.features;
            report = report == oscar;
            zulu = undefined;
            if(report) { _fun00002_ip = 193; continue _fun00001 }
 173:
            report = oscar.includes;
            tango = _closure1_slot3;
            tango = tango.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            zulu = report.bind(oscar)(tango);
 193:
            mike = zulu;
 196:
            entity = mike;
 199:
            return entity;
        }
    };
    zulu['inviteGuildHasPendingMemberDisabledVerification'] = tango;
    mike = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot2;
            mike = zulu.getRequest;
            mike = mike.bind(zulu)(report);
            zulu = null;
            if(!(zulu != mike)) { _fun00004_ip = 71; continue _fun00003 }
 27:
            zulu = mike.applicationStatus;
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 3;
            mike = tango[mike];
            tango = undefined;
            mike = oscar.bind(tango)(mike);
            mike = mike.GuildJoinRequestApplicationStatuses;
            mike = mike.STARTED;
            if(!(zulu === mike)) { _fun00004_ip = 106; continue _fun00003 }
 71:
            oscar = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 5;
            zulu = zulu[mike];
            mike = undefined;
            zulu = oscar.bind(mike)(zulu);
            mike = zulu.openMemberVerificationModal;
            mike = mike.bind(zulu)(report);
            _fun00004_ip = 152; continue _fun00003;
 106:
            zulu = _closure1_slot0;
            oscar = _closure1_slot1;
            mike = 4;
            mike = oscar[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.transitionTo;
            tango = _closure1_slot4;
            entity = tango.GUILD_MEMBER_VERIFICATION;
            entity = entity.bind(tango)(report);
            entity = mike.bind(zulu)(entity);
 152:
            entity = undefined;
            return entity;
        }
    };
    zulu['openVerificationModalOrTransitionToApplication'] = mike;
    return entity;
})();