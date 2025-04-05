// app/modules/guild_member_verification/UserGuildJoinRequestStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    michal = function(argFoo) { // Original name: joinRequestFromServer
        michal = argFoo;
        entity = {};
        zuuluu = michal.join_request_id;
        entity['joinRequestId'] = zuuluu;
        zuuluu = michal.guild_id;
        entity['guildId'] = zuuluu;
        zuuluu = michal.user_id;
        entity['userId'] = zuuluu;
        zuuluu = michal.user;
        entity['user'] = zuuluu;
        zuuluu = michal.created_at;
        entity['createdAt'] = zuuluu;
        zuuluu = michal.form_responses;
        entity['formResponses'] = zuuluu;
        zuuluu = michal.rejection_reason;
        entity['rejectionReason'] = zuuluu;
        zuuluu = michal.application_status;
        entity['applicationStatus'] = zuuluu;
        zuuluu = michal.actioned_at;
        entity['actionedAt'] = zuuluu;
        zuuluu = michal.actioned_by_user;
        entity['actionedByUser'] = zuuluu;
        zuuluu = michal.last_seen;
        entity['lastSeen'] = zuuluu;
        michal = michal.interview_channel_id;
        entity['interviewChannelId'] = michal;
        return entity;
    };
    var _closure1_slot15 = michal;
    entity = function(argFoo) { // Original name: deleteJoinRequest
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            entity = _closure1_slot10;
            entity = delete entity[zuuluu];
            entity = _closure1_slot9;
            if(!(entity === zuuluu)) { _fun00004_ip = 28; continue _fun00003 }
 22:
            entity = null;
            _closure1_slot9 = entity;
 28:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    offset = function(argFoo) { // Original name: handleGatewayJoinRequestUpdate
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.guildId;
            report = entity.request;
            oscard = null;
            if(!(oscard != report)) { _fun00006_ip = 118; continue _fun00005 }
 20:
            tangon = _closure1_slot15;
            michal = undefined;
            report = tangon.bind(michal)(report);
            golfie = _closure1_slot8;
            tangon = golfie.getCurrentUser;
            tangon = tangon.bind(golfie)();
            if(!(oscard != tangon)) { _fun00006_ip = 65; continue _fun00005 }
 51:
            oscard = report.userId;
            tangon = tangon.id;
            if(!(oscard === tangon)) { _fun00006_ip = 122; continue _fun00005 }
 65:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            tangon = 7;
            tangon = golfie[tangon];
            oscard = oscard.bind(michal)(tangon);
            tangon = oscard.isApprovedAndAcked;
            tangon = tangon.bind(oscard)(report);
            if(tangon) { _fun00006_ip = 109; continue _fun00005 }
 99:
            tangon = _closure1_slot10;
            tangon[zuuluu] = report;
            _fun00006_ip = 118; continue _fun00005;
 109:
            entity = _closure1_slot16;
            entity = entity.bind(michal)(zuuluu);
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
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(yankee)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = null;
    var _closure1_slot9 = tangon;
    tangon = {};
    var _closure1_slot10 = tangon;
    tangon = false;
    var _closure1_slot11 = tangon;
    tangon = {};
    var _closure1_slot12 = tangon;
    tangon = {};
    var _closure1_slot13 = tangon;
    tangon = 8;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    verify = tangon.Store;
    tangon = function(argFoo) {
        tangon = function() { // Original name: UserGuildJoinRequestStore
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot2;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot5;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot4;
                entity = _closure1_slot14;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00008_ip = 69; continue _fun00007 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00008_ip = 105; continue _fun00007;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'getRequest';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            michal = _closure1_slot10;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golfie = 'computeGuildIds';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = global;
            tangon = michal.Object;
            zuuluu = tangon.values;
            michal = _closure1_slot10;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.map;
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = argFoo;
                    entity = null;
                    zuuluu = entity == michal;
                    entity = undefined;
                    if(zuuluu) { _fun00010_ip = 19; continue _fun00009 }
 14:
                    entity = michal.guildId;
 19:
                    return entity;
                }
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.filter;
            entity = function(argFoo) {
                michal = null;
                entity = argFoo;
                entity = michal != entity;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getJoinRequestGuild';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = argFoo;
                entity = _closure1_slot12;
                tangon = entity[zuuluu];
                entity = null;
                tangon = entity != tangon;
                if(!tangon) { _fun00012_ip = 55; continue _fun00011 }
 23:
                tangon = _closure1_slot7;
                michal = _closure1_slot12;
                report = michal[zuuluu];
                zuuluu = tangon.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                oscard = zuuluu;
                michal = new oscard[tangon](report, tangon);
                entity = michal instanceof Object ? michal : zuuluu;
 55:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'hasFetchedRequestToJoinGuilds';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot11;
            return entity;
        };
        report['get'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'hasJoinRequestCoackmark';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = _closure1_slot9;
            entity = null;
            entity = entity != michal;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getCooldown';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            michal = _closure1_slot13;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = oscard;
        entity[5] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    verify = tangon.bind(entity)(verify);
    tangon = 'UserGuildJoinRequestStore';
    verify['displayName'] = tangon;
    tangon = 9;
    tangon = golfie[tangon];
    backup = option.bind(entity)(tangon);
    tangon = {};
    yankee = function(argFoo) { // Original name: handleConnectionOpen
        entity = argFoo;
        zuuluu = entity.guildJoinRequests;
        entity = false;
        _closure1_slot11 = entity;
        entity = {};
        _closure1_slot12 = entity;
        entity = {};
        _closure1_slot10 = entity;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = argFoo;
                zuuluu = report.guild_id;
                entity = null;
                if(!(entity != zuuluu)) { _fun00014_ip = 36; continue _fun00013 }
 14:
                michal = _closure1_slot10;
                tangon = _closure1_slot15;
                entity = undefined;
                entity = tangon.bind(entity)(report);
                michal[zuuluu] = entity;
 36:
                entity = undefined;
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    tangon['CONNECTION_OPEN'] = yankee;
    tangon['GUILD_JOIN_REQUEST_UPDATE'] = offset;
    tangon['GUILD_JOIN_REQUEST_CREATE'] = offset;
    offset = function(argFoo) { // Original name: handleRemoveJoinRequest
        entity = argFoo;
        zuuluu = entity.guildId;
        michal = _closure1_slot16;
        entity = undefined;
        michal = michal.bind(entity)(zuuluu);
        return entity;
    };
    tangon['GUILD_JOIN_REQUEST_DELETE'] = offset;
    offset = function(argFoo) { // Original name: handleJoinRequestUpdate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            report = entity.request;
            zuuluu = entity.guildId;
            entity = null;
            if(!(entity == report)) { _fun00016_ip = 36; continue _fun00015 }
 20:
            michal = _closure1_slot16;
            entity = undefined;
            entity = michal.bind(entity)(zuuluu);
            _fun00016_ip = 103; continue _fun00015;
 36:
            tangon = _closure1_slot15;
            michal = undefined;
            report = tangon.bind(michal)(report);
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            tangon = 7;
            tangon = golfie[tangon];
            oscard = oscard.bind(michal)(tangon);
            tangon = oscard.isApprovedAndAcked;
            tangon = tangon.bind(oscard)(report);
            if(tangon) { _fun00016_ip = 94; continue _fun00015 }
 84:
            tangon = _closure1_slot10;
            tangon[zuuluu] = report;
            _fun00016_ip = 103; continue _fun00015;
 94:
            entity = _closure1_slot16;
            entity = entity.bind(michal)(zuuluu);
 103:
            entity = undefined;
            return entity;
        }
    };
    tangon['USER_GUILD_JOIN_REQUEST_UPDATE'] = offset;
    offset = function(argFoo) { // Original name: handleGuildLeave
        zuuluu = _closure1_slot16;
        entity = argFoo;
        entity = entity.guild;
        michal = entity.id;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon['GUILD_DELETE'] = offset;
    offset = function(argFoo) { // Original name: handleJoinRequestGuildsFetch
        entity = argFoo;
        zuuluu = entity.guilds;
        entity = true;
        _closure1_slot11 = entity;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            entity = argFoo;
            zuuluu = entity.id;
            golfie = entity.name;
            oscard = entity.features;
            report = entity.icon;
            tangon = entity.splash;
            michal = _closure1_slot12;
            entity = {};
            entity['id'] = zuuluu;
            entity['name'] = golfie;
            entity['features'] = oscard;
            entity['icon'] = report;
            entity['splash'] = tangon;
            michal[zuuluu] = entity;
            entity = undefined;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    tangon['USER_JOIN_REQUEST_GUILDS_FETCH'] = offset;
    offset = function(argFoo) { // Original name: handleVerificationFormUpdate
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            michal = entity.form;
            tangon = entity.guildId;
            golfie = null;
            report = golfie == michal;
            entity = undefined;
            zuuluu = undefined;
            if(report) { _fun00018_ip = 32; continue _fun00017 }
 27:
            zuuluu = michal.guild;
 32:
            if(!(golfie != zuuluu)) { _fun00018_ip = 111; continue _fun00017 }
 36:
            michal = michal.guild;
            offset = michal.id;
            verify = michal.name;
            option = michal.icon;
            oscard = michal.features;
            report = michal.splash;
            zuuluu = _closure1_slot12;
            michal = {};
            michal['id'] = offset;
            michal['name'] = verify;
            michal['icon'] = option;
            if(!(golfie == oscard)) { _fun00018_ip = 97; continue _fun00017 }
 93:
            oscard = new Array(0);
 97:
            michal['features'] = oscard;
            michal['splash'] = report;
            zuuluu[tangon] = michal;
 111:
            return entity;
        }
    };
    tangon['MEMBER_VERIFICATION_FORM_UPDATE'] = offset;
    offset = function(argFoo) { // Original name: handleInviteSuccess
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            entity = entity.invite;
            michal = entity.guild;
            option = entity.join_request;
            oscard = null;
            if(!(oscard != michal)) { _fun00020_ip = 124; continue _fun00019 }
 26:
            if(!(oscard != option)) { _fun00020_ip = 124; continue _fun00019 }
 30:
            report = option.guild_id;
            tangon = _closure1_slot10;
            golfie = _closure1_slot15;
            zuuluu = undefined;
            zuuluu = golfie.bind(zuuluu)(option);
            tangon[report] = zuuluu;
            zuuluu = michal.id;
            option = michal.name;
            golfie = michal.icon;
            report = michal.features;
            tangon = michal.splash;
            michal = _closure1_slot12;
            entity = {};
            entity['id'] = zuuluu;
            entity['name'] = option;
            entity['icon'] = golfie;
            if(!(oscard == report)) { _fun00020_ip = 110; continue _fun00019 }
 106:
            report = new Array(0);
 110:
            entity['features'] = report;
            entity['splash'] = tangon;
            michal[zuuluu] = entity;
 124:
            entity = undefined;
            return entity;
        }
    };
    tangon['INVITE_ACCEPT_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: handleAckApprovedGuildJoinRequest
        entity = argFoo;
        zuuluu = entity.guildId;
        michal = _closure1_slot16;
        entity = undefined;
        michal = michal.bind(entity)(zuuluu);
        return entity;
    };
    tangon['ACK_APPROVED_GUILD_JOIN_REQUEST'] = offset;
    offset = function(argFoo) { // Original name: handleShowCoachmark
        entity = argFoo;
        michal = entity.guildId;
        _closure1_slot9 = michal;
        entity = undefined;
        return entity;
    };
    tangon['USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW'] = offset;
    offset = function() { // Original name: handleClearCoachmark
        entity = null;
        _closure1_slot9 = entity;
        entity = undefined;
        return entity;
    };
    tangon['USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR'] = offset;
    report = function(argFoo) { // Original name: handleJoinRequestCooldownFetch
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.guildId;
            tangon = entity.cooldown;
            michal = _closure1_slot13;
            entity = null;
            report = entity != tangon;
            entity = 0;
            if(!report) { _fun00022_ip = 35; continue _fun00021 }
 32:
            entity = tangon;
 35:
            michal[zuuluu] = entity;
            entity = undefined;
            return entity;
        }
    };
    tangon['USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH'] = report;
    report = verify.prototype;
    report = Object.create(report, {constructor: {value: verify}});
    kiloes = report;
    foxtra = tangon;
    tangon = new kiloes[verify](backup, foxtra, romeon);
    tangon = tangon instanceof Object ? tangon : report;
    report = 10;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_member_verification/UserGuildJoinRequestStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['joinRequestFromServer'] = michal;
    return entity;
})();