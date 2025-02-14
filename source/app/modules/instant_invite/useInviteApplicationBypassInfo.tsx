// app/modules/instant_invite/useInviteApplicationBypassInfo.tsx
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
    tango = tango.Permissions;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/instant_invite/useInviteApplicationBypassInfo.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useInviteApplicationBypassInfo
        _fun127527: for(var _fun127527_ip = 0; ; ) switch(_fun127527_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            zulu = _closure1_slot0;
            golf = _closure1_slot1;
            tango = 2;
            tango = golf[tango];
            oscar = undefined;
            offset = zulu.bind(oscar)(tango);
            verify = offset.useStateFromStores;
            tango = _closure1_slot2;
            options = new Array(1);
            options[0] = tango;
            tango = new Array(1);
            tango[0] = report;
            entity = function() {
                tango = _closure1_slot2;
                zulu = tango.can;
                entity = _closure1_slot4;
                mike = entity.KICK_MEMBERS;
                entity = _closure2_slot0;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            tango = verify.bind(offset)(options, entity, tango);
            entity = 3;
            entity = golf[entity];
            options = zulu.bind(oscar)(entity);
            golf = options.useMemberVerificationRolloutEnabled;
            zulu = null;
            entity = zulu == report;
            if(entity) { _fun127527_ip = 105; continue _fun127527 }
 100:
            oscar = report.id;
 105:
            entity = 'AdvancedInstantInvite';
            entity = golf.bind(options)(oscar, entity);
            if(!entity) { _fun127527_ip = 124; continue _fun127527 }
 120:
            entity = zulu != report;
 124:
            if(!entity) { _fun127527_ip = 148; continue _fun127527 }
 127:
            golf = report.hasFeature;
            oscar = _closure1_slot3;
            oscar = oscar.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            entity = golf.bind(report)(oscar);
 148:
            if(!entity) { _fun127527_ip = 155; continue _fun127527 }
 151:
            entity = zulu != report;
 155:
            if(!entity) { _fun127527_ip = 179; continue _fun127527 }
 158:
            zulu = report.hasFeature;
            mike = _closure1_slot3;
            mike = mike.MEMBER_VERIFICATION_GATE_ENABLED;
            entity = zulu.bind(report)(mike);
 179:
            report = !entity;
            mike = !report;
            entity = {};
            zulu = mike;
            if(report) { _fun127527_ip = 196; continue _fun127527 }
 193:
            zulu = tango;
 196:
            entity['canCreateApplicationBypassInvites'] = zulu;
            entity['isManualApprovalGuild'] = mike;
            return entity;
        }
    };
    zulu['useInviteApplicationBypassInfo'] = mike;
    return entity;
})();