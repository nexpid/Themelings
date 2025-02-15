// app/modules/guild_verification/GuildVerificationManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot10;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
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
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: handleInviteData
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            mike = entity.invite;
            zulu = mike.guild;
            mike = entity.invite;
            mike = mike.flags;
            golf = null;
            tango = golf != mike;
            yankee = 0;
            if(!tango) { _fun00006_ip = 39; continue _fun00005 }
 36:
            yankee = mike;
 39:
            if(!(golf != zulu)) { _fun00006_ip = 86; continue _fun00005 }
 43:
            if(!(golf != zulu)) { _fun00006_ip = 86; continue _fun00005 }
 47:
            oscar = zulu.features;
            if(!(golf != oscar)) { _fun00006_ip = 86; continue _fun00005 }
 57:
            report = oscar.includes;
            tango = _closure1_slot8;
            tango = tango.HUB;
            tango = report.bind(oscar)(tango);
            if(tango) { _fun00006_ip = 285; continue _fun00005 }
 86:
            romeo = _closure1_slot0;
            report = _closure1_slot2;
            verify = 7;
            options = report[verify];
            oscar = undefined;
            offset = romeo.bind(oscar)(options);
            options = offset.hasFlag;
            foxtrot = 8;
            report = report[foxtrot];
            report = romeo.bind(oscar)(report);
            report = report.GuildInviteFlags;
            report = report.IS_GUEST_INVITE;
            report = options.bind(offset)(yankee, report);
            if(report) { _fun00006_ip = 200; continue _fun00005 }
 150:
            romeo = _closure1_slot0;
            options = _closure1_slot2;
            verify = options[verify];
            offset = romeo.bind(oscar)(verify);
            verify = offset.hasFlag;
            options = options[foxtrot];
            options = romeo.bind(oscar)(options);
            options = options.GuildInviteFlags;
            options = options.IS_APPLICATION_BYPASS;
            report = verify.bind(offset)(yankee, options);
 200:
            report = !report;
            if(!report) { _fun00006_ip = 210; continue _fun00005 }
 206:
            report = golf != zulu;
 210:
            if(!report) { _fun00006_ip = 244; continue _fun00005 }
 213:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            golf = 9;
            golf = verify[golf];
            options = options.bind(oscar)(golf);
            golf = options.inviteGuildHasPendingMemberDisabledVerification;
            report = golf.bind(options)(zulu);
 244:
            if(!report) { _fun00006_ip = 324; continue _fun00005 }
 247:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 9;
            tango = golf[tango];
            report = report.bind(oscar)(tango);
            tango = report.openVerificationModalOrTransitionToApplication;
            zulu = zulu.id;
            zulu = tango.bind(report)(zulu);
            _fun00006_ip = 324; continue _fun00005;
 285:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 6;
            zulu = zulu[mike];
            mike = undefined;
            zulu = tango.bind(mike)(zulu);
            mike = zulu.onOpenHubInvite;
            entity = entity.invite;
            entity = mike.bind(zulu)(entity);
 324:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
    tango = report.bind(entity)(tango);
    tango = tango.GuildFeatures;
    var _closure1_slot8 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: GuildVerificationManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            entity = _closure1_slot4;
            report = _closure2_slot0;
            tango = undefined;
            entity = entity.bind(tango)(oscar, report);
            mike = _closure1_slot9;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = mike.bind(tango)(oscar, report, entity);
            mike = {};
            zulu = _closure1_slot11;
            mike['INVITE_ACCEPT_SUCCESS'] = zulu;
            entity['actions'] = mike;
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
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_verification/GuildVerificationManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();