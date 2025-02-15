// app/modules/guild_member_verification/UserGuildJoinRequestStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun48856: for(var _fun48856_ip = 0; ; ) switch(_fun48856_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot15;
            entity = entity.bind(zulu)();
            if(entity) { _fun48856_ip = 51; continue _fun48856 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun48856_ip = 92; continue _fun48856;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun48856_ip = 71; continue _fun48856 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun48857: for(var _fun48857_ip = 0; ; ) switch(_fun48857_ip) {
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
 70: // try_end0
            _fun48857_ip = 74; continue _fun48857;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot15 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    mike = function(argFoo) { // Original name: joinRequestFromServer
        mike = argFoo;
        entity = {};
        zulu = mike.join_request_id;
        entity['joinRequestId'] = zulu;
        zulu = mike.guild_id;
        entity['guildId'] = zulu;
        zulu = mike.user_id;
        entity['userId'] = zulu;
        zulu = mike.user;
        entity['user'] = zulu;
        zulu = mike.created_at;
        entity['createdAt'] = zulu;
        zulu = mike.form_responses;
        entity['formResponses'] = zulu;
        zulu = mike.rejection_reason;
        entity['rejectionReason'] = zulu;
        zulu = mike.application_status;
        entity['applicationStatus'] = zulu;
        zulu = mike.actioned_at;
        entity['actionedAt'] = zulu;
        zulu = mike.actioned_by_user;
        entity['actionedByUser'] = zulu;
        zulu = mike.last_seen;
        entity['lastSeen'] = zulu;
        mike = mike.interview_channel_id;
        entity['interviewChannelId'] = mike;
        return entity;
    };
    var _closure1_slot16 = mike;
    entity = function(argFoo) { // Original name: deleteJoinRequest
        _fun48861: for(var _fun48861_ip = 0; ; ) switch(_fun48861_ip) {
 0:
            zulu = argFoo;
            entity = _closure1_slot10;
            entity = delete entity[zulu];
            entity = _closure1_slot9;
            if(!(entity === zulu)) { _fun48861_ip = 28; continue _fun48861 }
 22:
            entity = null;
            _closure1_slot9 = entity;
 28:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    offset = function(argFoo) { // Original name: handleGatewayJoinRequestUpdate
        _fun48862: for(var _fun48862_ip = 0; ; ) switch(_fun48862_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            report = entity.request;
            oscar = null;
            if(!(oscar != report)) { _fun48862_ip = 118; continue _fun48862 }
 20:
            tango = _closure1_slot16;
            mike = undefined;
            report = tango.bind(mike)(report);
            golf = _closure1_slot8;
            tango = golf.getCurrentUser;
            tango = tango.bind(golf)();
            if(!(oscar != tango)) { _fun48862_ip = 65; continue _fun48862 }
 51:
            oscar = report.userId;
            tango = tango.id;
            if(!(oscar === tango)) { _fun48862_ip = 122; continue _fun48862 }
 65:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            tango = 7;
            tango = golf[tango];
            oscar = oscar.bind(mike)(tango);
            tango = oscar.isApprovedAndAcked;
            tango = tango.bind(oscar)(report);
            if(tango) { _fun48862_ip = 109; continue _fun48862 }
 99:
            tango = _closure1_slot10;
            tango[zulu] = report;
            _fun48862_ip = 118; continue _fun48862;
 109:
            entity = _closure1_slot17;
            entity = entity.bind(mike)(zulu);
 118:
            entity = undefined;
            return entity;
 122:
            entity = false;
            return entity;
        }
    };
    entity = global;
    yankee = entity.Object;
    verify = yankee.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(yankee)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = null;
    var _closure1_slot9 = tango;
    tango = {};
    var _closure1_slot10 = tango;
    tango = false;
    var _closure1_slot11 = tango;
    tango = {};
    var _closure1_slot12 = tango;
    tango = {};
    var _closure1_slot13 = tango;
    tango = 8;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    verify = tango.Store;
    tango = function(argFoo) {
        tango = function() { // Original name: UserGuildJoinRequestStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot14;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'getRequest';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            mike = _closure1_slot10;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golf = 'computeGuildIds';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = global;
            tango = mike.Object;
            zulu = tango.values;
            mike = _closure1_slot10;
            tango = zulu.bind(tango)(mike);
            zulu = tango.map;
            mike = function(argFoo) {
                _fun48867: for(var _fun48867_ip = 0; ; ) switch(_fun48867_ip) {
 0:
                    mike = argFoo;
                    entity = null;
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun48867_ip = 19; continue _fun48867 }
 14:
                    entity = mike.guildId;
 19:
                    return entity;
                }
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.filter;
            entity = function(argFoo) {
                mike = null;
                entity = argFoo;
                entity = mike != entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getJoinRequestGuild';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun48869: for(var _fun48869_ip = 0; ; ) switch(_fun48869_ip) {
 0:
                zulu = argFoo;
                entity = _closure1_slot12;
                tango = entity[zulu];
                entity = null;
                tango = entity != tango;
                if(!tango) { _fun48869_ip = 55; continue _fun48869 }
 23:
                tango = _closure1_slot7;
                mike = _closure1_slot12;
                report = mike[zulu];
                zulu = tango.prototype;
                zulu = Object.create(zulu, {constructor: {value: tango}});
                oscar = zulu;
                mike = new oscar[tango](report, tango);
                entity = mike instanceof Object ? mike : zulu;
 55:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'hasFetchedRequestToJoinGuilds';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot11;
            return entity;
        };
        report['get'] = golf;
        entity[3] = report;
        report = {};
        golf = 'hasJoinRequestCoackmark';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = _closure1_slot9;
            entity = null;
            entity = entity != mike;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getCooldown';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            mike = _closure1_slot13;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = oscar;
        entity[5] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    verify = tango.bind(entity)(verify);
    tango = 'UserGuildJoinRequestStore';
    verify['displayName'] = tango;
    tango = 9;
    tango = golf[tango];
    backup = options.bind(entity)(tango);
    tango = {};
    yankee = function(argFoo) { // Original name: handleConnectionOpen
        entity = argFoo;
        zulu = entity.guildJoinRequests;
        entity = false;
        _closure1_slot11 = entity;
        entity = {};
        _closure1_slot12 = entity;
        entity = {};
        _closure1_slot10 = entity;
        mike = zulu.forEach;
        entity = function(argFoo) {
            _fun48874: for(var _fun48874_ip = 0; ; ) switch(_fun48874_ip) {
 0:
                report = argFoo;
                zulu = report.guild_id;
                entity = null;
                if(!(entity != zulu)) { _fun48874_ip = 36; continue _fun48874 }
 14:
                mike = _closure1_slot10;
                tango = _closure1_slot16;
                entity = undefined;
                entity = tango.bind(entity)(report);
                mike[zulu] = entity;
 36:
                entity = undefined;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    tango['CONNECTION_OPEN'] = yankee;
    tango['GUILD_JOIN_REQUEST_UPDATE'] = offset;
    tango['GUILD_JOIN_REQUEST_CREATE'] = offset;
    offset = function(argFoo) { // Original name: handleRemoveJoinRequest
        entity = argFoo;
        zulu = entity.guildId;
        mike = _closure1_slot17;
        entity = undefined;
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    tango['GUILD_JOIN_REQUEST_DELETE'] = offset;
    offset = function(argFoo) { // Original name: handleJoinRequestUpdate
        _fun48876: for(var _fun48876_ip = 0; ; ) switch(_fun48876_ip) {
 0:
            entity = argFoo;
            report = entity.request;
            zulu = entity.guildId;
            entity = null;
            if(!(entity == report)) { _fun48876_ip = 36; continue _fun48876 }
 20:
            mike = _closure1_slot17;
            entity = undefined;
            entity = mike.bind(entity)(zulu);
            _fun48876_ip = 103; continue _fun48876;
 36:
            tango = _closure1_slot16;
            mike = undefined;
            report = tango.bind(mike)(report);
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            tango = 7;
            tango = golf[tango];
            oscar = oscar.bind(mike)(tango);
            tango = oscar.isApprovedAndAcked;
            tango = tango.bind(oscar)(report);
            if(tango) { _fun48876_ip = 94; continue _fun48876 }
 84:
            tango = _closure1_slot10;
            tango[zulu] = report;
            _fun48876_ip = 103; continue _fun48876;
 94:
            entity = _closure1_slot17;
            entity = entity.bind(mike)(zulu);
 103:
            entity = undefined;
            return entity;
        }
    };
    tango['USER_GUILD_JOIN_REQUEST_UPDATE'] = offset;
    offset = function(argFoo) { // Original name: handleGuildLeave
        zulu = _closure1_slot17;
        entity = argFoo;
        entity = entity.guild;
        mike = entity.id;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango['GUILD_DELETE'] = offset;
    offset = function(argFoo) { // Original name: handleJoinRequestGuildsFetch
        entity = argFoo;
        zulu = entity.guilds;
        entity = true;
        _closure1_slot11 = entity;
        mike = zulu.forEach;
        entity = function(argFoo) {
            entity = argFoo;
            zulu = entity.id;
            golf = entity.name;
            oscar = entity.features;
            report = entity.icon;
            tango = entity.splash;
            mike = _closure1_slot12;
            entity = {};
            entity['id'] = zulu;
            entity['name'] = golf;
            entity['features'] = oscar;
            entity['icon'] = report;
            entity['splash'] = tango;
            mike[zulu] = entity;
            entity = undefined;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    tango['USER_JOIN_REQUEST_GUILDS_FETCH'] = offset;
    offset = function(argFoo) { // Original name: handleVerificationFormUpdate
        _fun48880: for(var _fun48880_ip = 0; ; ) switch(_fun48880_ip) {
 0:
            entity = argFoo;
            mike = entity.form;
            tango = entity.guildId;
            golf = null;
            report = golf == mike;
            entity = undefined;
            zulu = undefined;
            if(report) { _fun48880_ip = 32; continue _fun48880 }
 27:
            zulu = mike.guild;
 32:
            if(!(golf != zulu)) { _fun48880_ip = 111; continue _fun48880 }
 36:
            mike = mike.guild;
            offset = mike.id;
            verify = mike.name;
            options = mike.icon;
            oscar = mike.features;
            report = mike.splash;
            zulu = _closure1_slot12;
            mike = {};
            mike['id'] = offset;
            mike['name'] = verify;
            mike['icon'] = options;
            if(!(golf == oscar)) { _fun48880_ip = 97; continue _fun48880 }
 93:
            oscar = new Array(0);
 97:
            mike['features'] = oscar;
            mike['splash'] = report;
            zulu[tango] = mike;
 111:
            return entity;
        }
    };
    tango['MEMBER_VERIFICATION_FORM_UPDATE'] = offset;
    offset = function(argFoo) { // Original name: handleInviteSuccess
        _fun48881: for(var _fun48881_ip = 0; ; ) switch(_fun48881_ip) {
 0:
            entity = argFoo;
            entity = entity.invite;
            mike = entity.guild;
            options = entity.join_request;
            oscar = null;
            if(!(oscar != mike)) { _fun48881_ip = 124; continue _fun48881 }
 26:
            if(!(oscar != options)) { _fun48881_ip = 124; continue _fun48881 }
 30:
            report = options.guild_id;
            tango = _closure1_slot10;
            golf = _closure1_slot16;
            zulu = undefined;
            zulu = golf.bind(zulu)(options);
            tango[report] = zulu;
            zulu = mike.id;
            options = mike.name;
            golf = mike.icon;
            report = mike.features;
            tango = mike.splash;
            mike = _closure1_slot12;
            entity = {};
            entity['id'] = zulu;
            entity['name'] = options;
            entity['icon'] = golf;
            if(!(oscar == report)) { _fun48881_ip = 110; continue _fun48881 }
 106:
            report = new Array(0);
 110:
            entity['features'] = report;
            entity['splash'] = tango;
            mike[zulu] = entity;
 124:
            entity = undefined;
            return entity;
        }
    };
    tango['INVITE_ACCEPT_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: handleAckApprovedGuildJoinRequest
        entity = argFoo;
        zulu = entity.guildId;
        mike = _closure1_slot17;
        entity = undefined;
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    tango['ACK_APPROVED_GUILD_JOIN_REQUEST'] = offset;
    offset = function(argFoo) { // Original name: handleShowCoachmark
        entity = argFoo;
        mike = entity.guildId;
        _closure1_slot9 = mike;
        entity = undefined;
        return entity;
    };
    tango['USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW'] = offset;
    offset = function() { // Original name: handleClearCoachmark
        entity = null;
        _closure1_slot9 = entity;
        entity = undefined;
        return entity;
    };
    tango['USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR'] = offset;
    report = function(argFoo) { // Original name: handleJoinRequestCooldownFetch
        _fun48885: for(var _fun48885_ip = 0; ; ) switch(_fun48885_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            tango = entity.cooldown;
            mike = _closure1_slot13;
            entity = null;
            report = entity != tango;
            entity = 0;
            if(!report) { _fun48885_ip = 35; continue _fun48885 }
 32:
            entity = tango;
 35:
            mike[zulu] = entity;
            entity = undefined;
            return entity;
        }
    };
    tango['USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH'] = report;
    report = verify.prototype;
    report = Object.create(report, {constructor: {value: verify}});
    kilo = report;
    foxtrot = tango;
    tango = new kilo[verify](backup, foxtrot, romeo);
    tango = tango instanceof Object ? tango : report;
    report = 10;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_member_verification/UserGuildJoinRequestStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['joinRequestFromServer'] = mike;
    return entity;
})();