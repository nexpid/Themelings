// app/modules/instant_invite/resolveInvite.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: getExtendedInviteType
        _fun104588: for(var _fun104588_ip = 0; ; ) switch(_fun104588_ip) {
 0:
            report = argFoo;
            tango = null;
            mike = tango != report;
            entity = null;
            if(!mike) { _fun104588_ip = 183; continue _fun104588 }
 17:
            mike = report.channel;
            mike = tango != mike;
            entity = null;
            if(!mike) { _fun104588_ip = 183; continue _fun104588 }
 34:
            mike = report.channel;
            golf = report.target_type;
            oscar = _closure1_slot6;
            oscar = oscar.STREAM;
            if(!(golf !== oscar)) { _fun104588_ip = 170; continue _fun104588 }
 62:
            oscar = report.target_type;
            report = _closure1_slot6;
            report = report.EMBEDDED_APPLICATION;
            if(!(oscar !== report)) { _fun104588_ip = 158; continue _fun104588 }
 82:
            golf = _closure1_slot4;
            oscar = mike.type;
            report = undefined;
            oscar = golf.bind(report)(oscar);
            if(oscar) { _fun104588_ip = 146; continue _fun104588 }
 101:
            if(!(tango != mike)) { _fun104588_ip = 134; continue _fun104588 }
 105:
            tango = _closure1_slot3;
            mike = mike.type;
            mike = tango.bind(report)(mike);
            if(mike) { _fun104588_ip = 134; continue _fun104588 }
 122:
            mike = _closure1_slot9;
            mike = mike.SERVER_INVITE;
            _fun104588_ip = 144; continue _fun104588;
 134:
            tango = _closure1_slot9;
            mike = tango.FRIEND_INVITE;
 144:
            _fun104588_ip = 156; continue _fun104588;
 146:
            tango = _closure1_slot9;
            mike = tango.GDM_INVITE;
 156:
            _fun104588_ip = 168; continue _fun104588;
 158:
            tango = _closure1_slot9;
            mike = tango.APPLICATION;
 168:
            _fun104588_ip = 180; continue _fun104588;
 170:
            zulu = _closure1_slot9;
            mike = zulu.STREAM;
 180:
            entity = mike;
 183:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    tango = global;
    offset = tango.Object;
    verify = offset.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, golf);
    entity = 0;
    golf = oscar[entity];
    entity = undefined;
    golf = report.bind(entity)(golf);
    verify = golf.isPrivate;
    var _closure1_slot3 = verify;
    golf = golf.isMultiUserDM;
    var _closure1_slot4 = golf;
    golf = 1;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 2;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.InviteTargetTypes;
    var _closure1_slot6 = golf;
    golf = 3;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    options = golf.Endpoints;
    var _closure1_slot7 = options;
    options = golf.AnalyticEvents;
    var _closure1_slot8 = options;
    options = golf.LoggingInviteTypes;
    var _closure1_slot9 = options;
    golf = golf.AbortCodes;
    var _closure1_slot10 = golf;
    tango = tango.Map;
    golf = tango.prototype;
    golf = Object.create(golf, {constructor: {value: tango}});
    backup = golf;
    tango = new backup[tango](foxtrot);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot11 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/instant_invite/resolveInvite.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz) { // Original name: resolveInvite
        _fun104589: for(var _fun104589_ip = 0; ; ) switch(_fun104589_ip) {
 0:
            zulu = argFoo;
            tango = argBaz;
            var _closure2_slot0 = zulu;
            entity = argBar;
            var _closure2_slot1 = entity;
            var _closure2_slot2 = tango;
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            report = 4;
            report = golf[report];
            offset = undefined;
            options = oscar.bind(offset)(report);
            golf = options.track;
            report = _closure1_slot8;
            oscar = report.INVITE_OPENED;
            report = {};
            report['invite_code'] = zulu;
            report = golf.bind(options)(oscar, report);
            oscar = _closure1_slot11;
            report = oscar.has;
            report = report.bind(oscar)(zulu);
            if(report) { _fun104589_ip = 400; continue _fun104589 }
 96:
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            report = 5;
            report = yankee[report];
            oscar = verify.bind(offset)(report);
            report = oscar.parseExtraDataFromInviteKey;
            romeo = report.bind(oscar)(zulu);
            var _closure2_slot3 = romeo;
            options = {};
            sizing = options;
            kilo = tango;
            tango = copyDataProperties(sizing, kilo);
            golf = true;
            tango = 'with_counts';
            options[tango] = golf;
            tango = 'with_expiration';
            options[tango] = golf;
            report = romeo.guildScheduledEventId;
            tango = 'guild_scheduled_event_id';
            options[tango] = report;
            tango = 6;
            tango = yankee[tango];
            oscar = verify.bind(offset)(tango);
            report = oscar.isEligibleForAdvancedServerJoin;
            tango = {};
            foxtrot = 'resolveInvite';
            tango['location'] = foxtrot;
            report = report.bind(oscar)(tango);
            tango = 'with_permissions';
            options[tango] = report;
            report = _closure1_slot1;
            tango = 7;
            tango = yankee[tango];
            oscar = report.bind(offset)(tango);
            report = oscar.get;
            tango = {};
            backup = _closure1_slot7;
            foxtrot = backup.INVITE;
            romeo = romeo.baseCode;
            romeo = foxtrot.bind(backup)(romeo);
            tango['url'] = romeo;
            tango['query'] = options;
            tango['oldFormErrors'] = golf;
            golf = {};
            options = 8;
            options = yankee[options];
            options = verify.bind(offset)(options);
            options = options.NetworkActionNames;
            options = options.INVITE_RESOLVE;
            golf['event'] = options;
            options = function(argFoo) { // Original name: properties
                _fun104590: for(var _fun104590_ip = 0; ; ) switch(_fun104590_ip) {
 0:
                    verify = argFoo;
                    options = verify.body;
                    entity = verify.body;
                    yankee = null;
                    mike = yankee == entity;
                    golf = undefined;
                    report = undefined;
                    if(mike) { _fun104590_ip = 31; continue _fun104590 }
 26:
                    report = entity.code;
 31:
                    entity = _closure1_slot10;
                    tango = entity.USER_BANNED;
                    mike = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 9;
                    entity = zulu[entity];
                    zulu = mike.bind(golf)(entity);
                    mike = zulu.exact;
                    entity = {};
                    verify = verify.ok;
                    entity['resolved'] = verify;
                    offset = yankee == options;
                    verify = undefined;
                    if(offset) { _fun104590_ip = 111; continue _fun104590 }
 92:
                    offset = options.guild;
                    romeo = yankee == offset;
                    verify = undefined;
                    if(romeo) { _fun104590_ip = 111; continue _fun104590 }
 106:
                    verify = offset.id;
 111:
                    entity['guild_id'] = verify;
                    offset = yankee == options;
                    verify = undefined;
                    if(offset) { _fun104590_ip = 143; continue _fun104590 }
 124:
                    offset = options.channel;
                    romeo = yankee == offset;
                    verify = undefined;
                    if(romeo) { _fun104590_ip = 143; continue _fun104590 }
 138:
                    verify = offset.id;
 143:
                    entity['channel_id'] = verify;
                    offset = yankee == options;
                    verify = undefined;
                    if(offset) { _fun104590_ip = 175; continue _fun104590 }
 156:
                    offset = options.channel;
                    romeo = yankee == offset;
                    verify = undefined;
                    if(romeo) { _fun104590_ip = 175; continue _fun104590 }
 170:
                    verify = offset.type;
 175:
                    entity['channel_type'] = verify;
                    offset = yankee == options;
                    verify = undefined;
                    if(offset) { _fun104590_ip = 209; continue _fun104590 }
 189:
                    offset = options.inviter;
                    romeo = yankee == offset;
                    verify = undefined;
                    if(romeo) { _fun104590_ip = 209; continue _fun104590 }
 204:
                    verify = offset.id;
 209:
                    entity['inviter_id'] = verify;
                    offset = _closure2_slot3;
                    offset = offset.baseCode;
                    entity['code'] = offset;
                    offset = _closure2_slot2;
                    romeo = yankee == offset;
                    offset = undefined;
                    if(romeo) { _fun104590_ip = 254; continue _fun104590 }
 244:
                    romeo = _closure2_slot2;
                    offset = romeo.inputValue;
 254:
                    entity['input_value'] = offset;
                    verify = _closure2_slot1;
                    entity['location'] = verify;
                    offset = _closure1_slot5;
                    verify = offset.isAuthenticated;
                    verify = verify.bind(offset)();
                    entity['authenticated'] = verify;
                    offset = yankee == options;
                    verify = undefined;
                    if(offset) { _fun104590_ip = 301; continue _fun104590 }
 295:
                    verify = options.approximate_member_count;
 301:
                    entity['size_total'] = verify;
                    offset = yankee == options;
                    verify = undefined;
                    if(offset) { _fun104590_ip = 321; continue _fun104590 }
 315:
                    verify = options.approximate_presence_count;
 321:
                    entity['size_online'] = verify;
                    offset = yankee == options;
                    verify = undefined;
                    if(offset) { _fun104590_ip = 355; continue _fun104590 }
 335:
                    offset = options.target_user;
                    yankee = yankee == offset;
                    verify = undefined;
                    if(yankee) { _fun104590_ip = 355; continue _fun104590 }
 350:
                    verify = offset.id;
 355:
                    entity['destination_user_id'] = verify;
                    oscar = _closure1_slot12;
                    oscar = oscar.bind(golf)(options);
                    entity['invite_type'] = oscar;
                    tango = report === tango;
                    entity['user_banned'] = tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            golf['properties'] = options;
            tango['trackedActionData'] = golf;
            golf = false;
            tango['rejectWithError'] = golf;
            golf = report.bind(oscar)(tango);
            oscar = golf.then;
            report = function(argFoo) {
                _fun104591: for(var _fun104591_ip = 0; ; ) switch(_fun104591_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.body;
                    entity = _closure2_slot1;
                    offset = null;
                    if(!(offset != entity)) { _fun104591_ip = 335; continue _fun104591 }
 24:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 4;
                    tango = oscar[tango];
                    verify = undefined;
                    golf = report.bind(verify)(tango);
                    oscar = golf.track;
                    tango = _closure1_slot8;
                    report = tango.INVITE_RESOLVED;
                    tango = {};
                    options = true;
                    tango['resolved'] = options;
                    yankee = zulu.guild;
                    romeo = offset != yankee;
                    yankee = null;
                    if(!romeo) { _fun104591_ip = 97; continue _fun104591 }
 87:
                    romeo = zulu.guild;
                    yankee = romeo.id;
 97:
                    tango['guild_id'] = yankee;
                    yankee = zulu.channel;
                    romeo = offset != yankee;
                    yankee = null;
                    if(!romeo) { _fun104591_ip = 125; continue _fun104591 }
 115:
                    romeo = zulu.channel;
                    yankee = romeo.id;
 125:
                    tango['channel_id'] = yankee;
                    yankee = zulu.channel;
                    romeo = offset != yankee;
                    yankee = null;
                    if(!romeo) { _fun104591_ip = 153; continue _fun104591 }
 143:
                    romeo = zulu.channel;
                    yankee = romeo.type;
 153:
                    tango['channel_type'] = yankee;
                    romeo = zulu.inviter;
                    yankee = null;
                    if(!romeo) { _fun104591_ip = 180; continue _fun104591 }
 169:
                    romeo = zulu.inviter;
                    yankee = romeo.id;
 180:
                    tango['inviter_id'] = yankee;
                    yankee = _closure2_slot3;
                    yankee = yankee.baseCode;
                    tango['code'] = yankee;
                    yankee = _closure2_slot2;
                    romeo = offset == yankee;
                    yankee = undefined;
                    if(romeo) { _fun104591_ip = 222; continue _fun104591 }
 212:
                    romeo = _closure2_slot2;
                    yankee = romeo.inputValue;
 222:
                    tango['input_value'] = yankee;
                    yankee = _closure2_slot1;
                    tango['location'] = yankee;
                    romeo = _closure1_slot5;
                    yankee = romeo.isAuthenticated;
                    yankee = yankee.bind(romeo)();
                    tango['authenticated'] = yankee;
                    yankee = zulu.approximate_member_count;
                    tango['size_total'] = yankee;
                    yankee = zulu.approximate_presence_count;
                    tango['size_online'] = yankee;
                    yankee = zulu.target_user;
                    yankee = offset != yankee;
                    offset = null;
                    if(!yankee) { _fun104591_ip = 302; continue _fun104591 }
 291:
                    yankee = zulu.target_user;
                    offset = yankee.id;
 302:
                    tango['destination_user_id'] = offset;
                    entity = _closure1_slot12;
                    entity = entity.bind(verify)(zulu);
                    tango['invite_type'] = entity;
                    entity = {};
                    entity['flush'] = options;
                    entity = oscar.bind(golf)(report, tango, entity);
 335:
                    entity = {};
                    entity['invite'] = zulu;
                    mike = _closure2_slot0;
                    entity['code'] = mike;
                    return entity;
                }
            };
            tango = function(argFoo) {
                _fun104592: for(var _fun104592_ip = 0; ; ) switch(_fun104592_ip) {
 0:
                    verify = argFoo;
                    entity = verify.body;
                    tango = null;
                    mike = tango != entity;
                    if(!mike) { _fun104592_ip = 44; continue _fun104592 }
 17:
                    entity = verify.body;
                    zulu = entity.code;
                    entity = _closure1_slot10;
                    entity = entity.USER_BANNED;
                    mike = zulu === entity;
 44:
                    entity = _closure2_slot1;
                    if(!(tango != entity)) { _fun104592_ip = 245; continue _fun104592 }
 58:
                    oscar = _closure1_slot1;
                    report = _closure1_slot2;
                    entity = 4;
                    report = report[entity];
                    entity = undefined;
                    options = oscar.bind(entity)(report);
                    golf = options.track;
                    report = _closure1_slot8;
                    oscar = report.INVITE_RESOLVED;
                    report = {};
                    yankee = false;
                    report['resolved'] = yankee;
                    yankee = _closure2_slot3;
                    yankee = yankee.baseCode;
                    report['code'] = yankee;
                    yankee = _closure2_slot2;
                    romeo = tango == yankee;
                    yankee = undefined;
                    if(romeo) { _fun104592_ip = 144; continue _fun104592 }
 134:
                    romeo = _closure2_slot2;
                    yankee = romeo.inputValue;
 144:
                    report['input_value'] = yankee;
                    yankee = _closure2_slot1;
                    report['location'] = yankee;
                    yankee = _closure1_slot5;
                    offset = yankee.isAuthenticated;
                    offset = offset.bind(yankee)();
                    report['authenticated'] = offset;
                    report['user_banned'] = mike;
                    yankee = verify.body;
                    romeo = tango == yankee;
                    offset = undefined;
                    if(romeo) { _fun104592_ip = 200; continue _fun104592 }
 195:
                    offset = yankee.code;
 200:
                    report['error_code'] = offset;
                    verify = verify.body;
                    offset = tango == verify;
                    entity = undefined;
                    if(offset) { _fun104592_ip = 224; continue _fun104592 }
 219:
                    entity = verify.message;
 224:
                    report['error_message'] = entity;
                    entity = {};
                    verify = true;
                    entity['flush'] = verify;
                    entity = golf.bind(options)(oscar, report, entity);
 245:
                    entity = {};
                    entity['invite'] = tango;
                    zulu = _closure2_slot0;
                    entity['code'] = zulu;
                    entity['banned'] = mike;
                    return entity;
                }
            };
            report = oscar.bind(golf)(report, tango);
            tango = report.finally;
            mike = function() {
                zulu = _closure1_slot11;
                mike = zulu.delete;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            mike = tango.bind(report)(mike);
            report = _closure1_slot11;
            tango = report.set;
            tango = tango.bind(report)(zulu, mike);
            return mike;
 400:
            mike = _closure1_slot11;
            entity = mike.get;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();