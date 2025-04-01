// app/modules/instant_invite/resolveInvite.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: getExtendedInviteType
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            tangon = null;
            michal = tangon != report;
            entity = null;
            if(!michal) { _fun00002_ip = 183; continue _fun00001 }
 17:
            michal = report.channel;
            michal = tangon != michal;
            entity = null;
            if(!michal) { _fun00002_ip = 183; continue _fun00001 }
 34:
            michal = report.channel;
            golfie = report.target_type;
            oscard = _closure1_slot7;
            oscard = oscard.STREAM;
            if(!(golfie !== oscard)) { _fun00002_ip = 170; continue _fun00001 }
 62:
            oscard = report.target_type;
            report = _closure1_slot7;
            report = report.EMBEDDED_APPLICATION;
            if(!(oscard !== report)) { _fun00002_ip = 158; continue _fun00001 }
 82:
            golfie = _closure1_slot4;
            oscard = michal.type;
            report = undefined;
            oscard = golfie.bind(report)(oscard);
            if(oscard) { _fun00002_ip = 146; continue _fun00001 }
 101:
            if(!(tangon != michal)) { _fun00002_ip = 134; continue _fun00001 }
 105:
            tangon = _closure1_slot3;
            michal = michal.type;
            michal = tangon.bind(report)(michal);
            if(michal) { _fun00002_ip = 134; continue _fun00001 }
 122:
            michal = _closure1_slot10;
            michal = michal.SERVER_INVITE;
            _fun00002_ip = 144; continue _fun00001;
 134:
            tangon = _closure1_slot10;
            michal = tangon.FRIEND_INVITE;
 144:
            _fun00002_ip = 156; continue _fun00001;
 146:
            tangon = _closure1_slot10;
            michal = tangon.GDM_INVITE;
 156:
            _fun00002_ip = 168; continue _fun00001;
 158:
            tangon = _closure1_slot10;
            michal = tangon.APPLICATION;
 168:
            _fun00002_ip = 180; continue _fun00001;
 170:
            zuuluu = _closure1_slot10;
            michal = zuuluu.STREAM;
 180:
            entity = michal;
 183:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    tangon = global;
    offset = tangon.Object;
    verify = offset.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, golfie);
    entity = 0;
    golfie = oscard[entity];
    entity = undefined;
    golfie = report.bind(entity)(golfie);
    verify = golfie.isPrivate;
    var _closure1_slot3 = verify;
    golfie = golfie.isMultiUserDM;
    var _closure1_slot4 = golfie;
    golfie = 1;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = 2;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot6 = golfie;
    golfie = 3;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.InviteTargetTypes;
    var _closure1_slot7 = golfie;
    golfie = 4;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    option = golfie.Endpoints;
    var _closure1_slot8 = option;
    option = golfie.AnalyticEvents;
    var _closure1_slot9 = option;
    option = golfie.LoggingInviteTypes;
    var _closure1_slot10 = option;
    golfie = golfie.AbortCodes;
    var _closure1_slot11 = golfie;
    tangon = tangon.Map;
    golfie = tangon.prototype;
    golfie = Object.create(golfie, {constructor: {value: tangon}});
    backup = golfie;
    tangon = new backup[tangon](foxtra);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot12 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/instant_invite/resolveInvite.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz) { // Original name: resolveInvite
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            tangon = argBaz;
            var _closure2_slot0 = zuuluu;
            entity = argBar;
            var _closure2_slot1 = entity;
            var _closure2_slot2 = tangon;
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 5;
            report = golfie[report];
            offset = undefined;
            option = oscard.bind(offset)(report);
            golfie = option.track;
            report = _closure1_slot9;
            oscard = report.INVITE_OPENED;
            report = {};
            report['invite_code'] = zuuluu;
            report = golfie.bind(option)(oscard, report);
            oscard = _closure1_slot12;
            report = oscard.has;
            report = report.bind(oscard)(zuuluu);
            if(report) { _fun00004_ip = 402; continue _fun00003 }
 96:
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            report = 6;
            report = yankee[report];
            oscard = verify.bind(offset)(report);
            report = oscard.parseExtraDataFromInviteKey;
            romeon = report.bind(oscard)(zuuluu);
            var _closure2_slot3 = romeon;
            option = {};
            sizing = option;
            kiloes = tangon;
            tangon = copyDataProperties(sizing, kiloes);
            golfie = true;
            tangon = 'with_counts';
            option[tangon] = golfie;
            tangon = 'with_expiration';
            option[tangon] = golfie;
            report = romeon.guildScheduledEventId;
            tangon = 'guild_scheduled_event_id';
            option[tangon] = report;
            tangon = 7;
            tangon = yankee[tangon];
            oscard = verify.bind(offset)(tangon);
            report = oscard.isEligibleForAdvancedServerJoin;
            tangon = {};
            foxtra = 'resolveInvite';
            tangon['location'] = foxtra;
            report = report.bind(oscard)(tangon);
            tangon = 'with_permissions';
            option[tangon] = report;
            report = _closure1_slot1;
            tangon = 8;
            tangon = yankee[tangon];
            oscard = report.bind(offset)(tangon);
            report = oscard.get;
            tangon = {};
            backup = _closure1_slot8;
            foxtra = backup.INVITE;
            romeon = romeon.baseCode;
            romeon = foxtra.bind(backup)(romeon);
            tangon['url'] = romeon;
            tangon['query'] = option;
            tangon['oldFormErrors'] = golfie;
            golfie = {};
            option = 9;
            option = yankee[option];
            option = verify.bind(offset)(option);
            option = option.NetworkActionNames;
            option = option.INVITE_RESOLVE;
            golfie['event'] = option;
            option = function(argFoo) { // Original name: properties
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    verify = argFoo;
                    option = verify.body;
                    entity = verify.body;
                    report = null;
                    michal = report == entity;
                    offset = undefined;
                    golfie = undefined;
                    if(michal) { _fun00006_ip = 31; continue _fun00005 }
 26:
                    golfie = entity.code;
 31:
                    entity = _closure1_slot11;
                    oscard = entity.USER_BANNED;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 10;
                    entity = zuuluu[entity];
                    zuuluu = michal.bind(offset)(entity);
                    michal = zuuluu.exact;
                    entity = {};
                    verify = verify.ok;
                    entity['resolved'] = verify;
                    yankee = report == option;
                    verify = undefined;
                    if(yankee) { _fun00006_ip = 111; continue _fun00005 }
 92:
                    yankee = option.guild;
                    romeon = report == yankee;
                    verify = undefined;
                    if(romeon) { _fun00006_ip = 111; continue _fun00005 }
 106:
                    verify = yankee.id;
 111:
                    entity['guild_id'] = verify;
                    yankee = report == option;
                    verify = undefined;
                    if(yankee) { _fun00006_ip = 143; continue _fun00005 }
 124:
                    yankee = option.channel;
                    romeon = report == yankee;
                    verify = undefined;
                    if(romeon) { _fun00006_ip = 143; continue _fun00005 }
 138:
                    verify = yankee.id;
 143:
                    entity['channel_id'] = verify;
                    yankee = report == option;
                    verify = undefined;
                    if(yankee) { _fun00006_ip = 175; continue _fun00005 }
 156:
                    yankee = option.channel;
                    romeon = report == yankee;
                    verify = undefined;
                    if(romeon) { _fun00006_ip = 175; continue _fun00005 }
 170:
                    verify = yankee.type;
 175:
                    entity['channel_type'] = verify;
                    yankee = report == option;
                    verify = undefined;
                    if(yankee) { _fun00006_ip = 209; continue _fun00005 }
 189:
                    yankee = option.inviter;
                    romeon = report == yankee;
                    verify = undefined;
                    if(romeon) { _fun00006_ip = 209; continue _fun00005 }
 204:
                    verify = yankee.id;
 209:
                    entity['inviter_id'] = verify;
                    yankee = _closure2_slot3;
                    yankee = yankee.baseCode;
                    entity['code'] = yankee;
                    yankee = _closure2_slot2;
                    romeon = report == yankee;
                    yankee = undefined;
                    if(romeon) { _fun00006_ip = 254; continue _fun00005 }
 244:
                    romeon = _closure2_slot2;
                    yankee = romeon.inputValue;
 254:
                    entity['input_value'] = yankee;
                    verify = _closure2_slot1;
                    entity['location'] = verify;
                    yankee = _closure1_slot5;
                    verify = yankee.isAuthenticated;
                    verify = verify.bind(yankee)();
                    entity['authenticated'] = verify;
                    yankee = report == option;
                    verify = undefined;
                    if(yankee) { _fun00006_ip = 301; continue _fun00005 }
 295:
                    verify = option.approximate_member_count;
 301:
                    entity['size_total'] = verify;
                    yankee = report == option;
                    verify = undefined;
                    if(yankee) { _fun00006_ip = 321; continue _fun00005 }
 315:
                    verify = option.approximate_presence_count;
 321:
                    entity['size_online'] = verify;
                    yankee = report == option;
                    verify = undefined;
                    if(yankee) { _fun00006_ip = 355; continue _fun00005 }
 335:
                    yankee = option.target_user;
                    romeon = report == yankee;
                    verify = undefined;
                    if(romeon) { _fun00006_ip = 355; continue _fun00005 }
 350:
                    verify = yankee.id;
 355:
                    entity['destination_user_id'] = verify;
                    verify = _closure1_slot13;
                    verify = verify.bind(offset)(option);
                    entity['invite_type'] = verify;
                    oscard = golfie === oscard;
                    entity['user_banned'] = oscard;
                    golfie = _closure1_slot6;
                    oscard = golfie.getGuild;
                    verify = report == option;
                    tangon = undefined;
                    if(verify) { _fun00006_ip = 420; continue _fun00005 }
 401:
                    option = option.guild;
                    verify = report == option;
                    tangon = undefined;
                    if(verify) { _fun00006_ip = 420; continue _fun00005 }
 415:
                    tangon = option.id;
 420:
                    tangon = oscard.bind(golfie)(tangon);
                    tangon = report != tangon;
                    entity['user_is_member'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            golfie['properties'] = option;
            tangon['trackedActionData'] = golfie;
            golfie = false;
            tangon['rejectWithError'] = golfie;
            golfie = report.bind(oscard)(tangon);
            oscard = golfie.then;
            report = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.body;
                    entity = _closure2_slot1;
                    verify = null;
                    if(!(verify != entity)) { _fun00008_ip = 386; continue _fun00007 }
 24:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 5;
                    tangon = oscard[tangon];
                    backup = undefined;
                    golfie = report.bind(backup)(tangon);
                    oscard = golfie.track;
                    tangon = _closure1_slot9;
                    report = tangon.INVITE_RESOLVED;
                    tangon = {};
                    option = true;
                    tangon['resolved'] = option;
                    offset = zuuluu.guild;
                    yankee = verify != offset;
                    offset = null;
                    if(!yankee) { _fun00008_ip = 97; continue _fun00007 }
 87:
                    yankee = zuuluu.guild;
                    offset = yankee.id;
 97:
                    tangon['guild_id'] = offset;
                    offset = zuuluu.channel;
                    yankee = verify != offset;
                    offset = null;
                    if(!yankee) { _fun00008_ip = 125; continue _fun00007 }
 115:
                    yankee = zuuluu.channel;
                    offset = yankee.id;
 125:
                    tangon['channel_id'] = offset;
                    offset = zuuluu.channel;
                    yankee = verify != offset;
                    offset = null;
                    if(!yankee) { _fun00008_ip = 153; continue _fun00007 }
 143:
                    yankee = zuuluu.channel;
                    offset = yankee.type;
 153:
                    tangon['channel_type'] = offset;
                    yankee = zuuluu.inviter;
                    offset = null;
                    if(!yankee) { _fun00008_ip = 180; continue _fun00007 }
 169:
                    yankee = zuuluu.inviter;
                    offset = yankee.id;
 180:
                    tangon['inviter_id'] = offset;
                    offset = _closure2_slot3;
                    offset = offset.baseCode;
                    tangon['code'] = offset;
                    offset = _closure2_slot2;
                    yankee = verify == offset;
                    offset = undefined;
                    if(yankee) { _fun00008_ip = 222; continue _fun00007 }
 212:
                    yankee = _closure2_slot2;
                    offset = yankee.inputValue;
 222:
                    tangon['input_value'] = offset;
                    offset = _closure2_slot1;
                    tangon['location'] = offset;
                    yankee = _closure1_slot5;
                    offset = yankee.isAuthenticated;
                    offset = offset.bind(yankee)();
                    tangon['authenticated'] = offset;
                    offset = zuuluu.approximate_member_count;
                    tangon['size_total'] = offset;
                    offset = zuuluu.approximate_presence_count;
                    tangon['size_online'] = offset;
                    offset = zuuluu.target_user;
                    yankee = verify != offset;
                    offset = null;
                    if(!yankee) { _fun00008_ip = 302; continue _fun00007 }
 291:
                    yankee = zuuluu.target_user;
                    offset = yankee.id;
 302:
                    tangon['destination_user_id'] = offset;
                    offset = _closure1_slot13;
                    offset = offset.bind(backup)(zuuluu);
                    tangon['invite_type'] = offset;
                    yankee = _closure1_slot6;
                    offset = yankee.getGuild;
                    romeon = verify == zuuluu;
                    entity = undefined;
                    if(romeon) { _fun00008_ip = 358; continue _fun00007 }
 339:
                    romeon = zuuluu.guild;
                    foxtra = verify == romeon;
                    entity = undefined;
                    if(foxtra) { _fun00008_ip = 358; continue _fun00007 }
 353:
                    entity = romeon.id;
 358:
                    entity = offset.bind(yankee)(entity);
                    entity = verify != entity;
                    tangon['user_is_member'] = entity;
                    entity = {};
                    entity['flush'] = option;
                    entity = oscard.bind(golfie)(report, tangon, entity);
 386:
                    entity = {};
                    entity['invite'] = zuuluu;
                    michal = _closure2_slot0;
                    entity['code'] = michal;
                    return entity;
                }
            };
            tangon = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    verify = argFoo;
                    entity = verify.body;
                    tangon = null;
                    michal = tangon != entity;
                    if(!michal) { _fun00010_ip = 44; continue _fun00009 }
 17:
                    entity = verify.body;
                    zuuluu = entity.code;
                    entity = _closure1_slot11;
                    entity = entity.USER_BANNED;
                    michal = zuuluu === entity;
 44:
                    entity = _closure2_slot1;
                    if(!(tangon != entity)) { _fun00010_ip = 245; continue _fun00009 }
 58:
                    oscard = _closure1_slot1;
                    report = _closure1_slot2;
                    entity = 5;
                    report = report[entity];
                    entity = undefined;
                    option = oscard.bind(entity)(report);
                    golfie = option.track;
                    report = _closure1_slot9;
                    oscard = report.INVITE_RESOLVED;
                    report = {};
                    yankee = false;
                    report['resolved'] = yankee;
                    yankee = _closure2_slot3;
                    yankee = yankee.baseCode;
                    report['code'] = yankee;
                    yankee = _closure2_slot2;
                    romeon = tangon == yankee;
                    yankee = undefined;
                    if(romeon) { _fun00010_ip = 144; continue _fun00009 }
 134:
                    romeon = _closure2_slot2;
                    yankee = romeon.inputValue;
 144:
                    report['input_value'] = yankee;
                    yankee = _closure2_slot1;
                    report['location'] = yankee;
                    yankee = _closure1_slot5;
                    offset = yankee.isAuthenticated;
                    offset = offset.bind(yankee)();
                    report['authenticated'] = offset;
                    report['user_banned'] = michal;
                    yankee = verify.body;
                    romeon = tangon == yankee;
                    offset = undefined;
                    if(romeon) { _fun00010_ip = 200; continue _fun00009 }
 195:
                    offset = yankee.code;
 200:
                    report['error_code'] = offset;
                    verify = verify.body;
                    offset = tangon == verify;
                    entity = undefined;
                    if(offset) { _fun00010_ip = 224; continue _fun00009 }
 219:
                    entity = verify.message;
 224:
                    report['error_message'] = entity;
                    entity = {};
                    verify = true;
                    entity['flush'] = verify;
                    entity = golfie.bind(option)(oscard, report, entity);
 245:
                    entity = {};
                    entity['invite'] = tangon;
                    zuuluu = _closure2_slot0;
                    entity['code'] = zuuluu;
                    entity['banned'] = michal;
                    return entity;
                }
            };
            report = oscard.bind(golfie)(report, tangon);
            tangon = report.finally;
            michal = function() {
                zuuluu = _closure1_slot12;
                michal = zuuluu.delete;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            michal = tangon.bind(report)(michal);
            report = _closure1_slot12;
            tangon = report.set;
            tangon = tangon.bind(report)(zuuluu, michal);
            return michal;
 402:
            michal = _closure1_slot12;
            entity = michal.get;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();