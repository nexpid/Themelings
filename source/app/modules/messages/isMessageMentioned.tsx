// app/modules/messages/isMessageMentioned.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    mike = function(argFoo) { // Original name: isMentioned
        _fun55333: for(var _fun55333_ip = 0; ; ) switch(_fun55333_ip) {
 0:
            entity = argFoo;
            golf = entity.userId;
            options = entity.channelId;
            oscar = entity.mentionEveryone;
            report = entity.mentionUsers;
            tango = entity.mentionRoles;
            zulu = entity.suppressEveryone;
            verify = undefined;
            if(!(zulu === verify)) { _fun55333_ip = 47; continue _fun55333 }
 45:
            zulu = false;
 47:
            entity = entity.suppressRoles;
            if(!(entity === verify)) { _fun55333_ip = 59; continue _fun55333 }
 57:
            entity = false;
 59:
            var _closure2_slot0 = verify;
            if(!oscar) { _fun55333_ip = 73; continue _fun55333 }
 66:
            if(zulu) { _fun55333_ip = 73; continue _fun55333 }
 69:
            zulu = true;
            return zulu;
 73:
            zulu = report.includes;
            zulu = zulu.bind(report)(golf);
            if(zulu) { _fun55333_ip = 229; continue _fun55333 }
 89:
            if(entity) { _fun55333_ip = 225; continue _fun55333 }
 95:
            zulu = null;
            if(!(zulu != tango)) { _fun55333_ip = 225; continue _fun55333 }
 104:
            report = tango.length;
            entity = 0;
            if(!(entity !== report)) { _fun55333_ip = 225; continue _fun55333 }
 115:
            oscar = _closure1_slot0;
            report = oscar.getChannel;
            oscar = report.bind(oscar)(options);
            if(!(zulu != oscar)) { _fun55333_ip = 221; continue _fun55333 }
 136:
            report = oscar.getGuildId;
            oscar = report.bind(oscar)();
            if(!(zulu != oscar)) { _fun55333_ip = 217; continue _fun55333 }
 150:
            options = _closure1_slot2;
            report = options.getGuild;
            report = report.bind(options)(oscar);
            if(!(zulu != report)) { _fun55333_ip = 213; continue _fun55333 }
 168:
            report = _closure1_slot1;
            entity = report.getMember;
            entity = entity.bind(report)(oscar, golf);
            _closure2_slot0 = entity;
            entity = zulu != entity;
            if(!entity) { _fun55333_ip = 211; continue _fun55333 }
 195:
            zulu = tango.some;
            mike = function(argFoo) {
                entity = _closure2_slot0;
                zulu = entity.roles;
                mike = zulu.includes;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = zulu.bind(tango)(mike);
 211:
            return entity;
 213:
            entity = false;
            return entity;
 217:
            entity = false;
            return entity;
 221:
            entity = false;
            return entity;
 225:
            entity = false;
            return entity;
 229:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot3 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    report = oscar[entity];
    entity = undefined;
    report = golf.bind(entity)(report);
    var _closure1_slot0 = report;
    report = 1;
    report = oscar[report];
    report = golf.bind(entity)(report);
    var _closure1_slot1 = report;
    report = 2;
    report = oscar[report];
    report = golf.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 3;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'modules/messages/isMessageMentioned.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: isMessageMentioned
        _fun55335: for(var _fun55335_ip = 0; ; ) switch(_fun55335_ip) {
 0:
            entity = argFoo;
            oscar = entity.message;
            golf = entity.userId;
            report = entity.suppressEveryone;
            zulu = undefined;
            if(!(report === zulu)) { _fun55335_ip = 27; continue _fun55335 }
 25:
            report = false;
 27:
            tango = entity.suppressRoles;
            if(!(tango === zulu)) { _fun55335_ip = 39; continue _fun55335 }
 37:
            tango = false;
 39:
            mike = _closure1_slot3;
            entity = {};
            entity['userId'] = golf;
            golf = oscar.channel_id;
            entity['channelId'] = golf;
            golf = oscar.mentionEveryone;
            entity['mentionEveryone'] = golf;
            golf = oscar.mentions;
            entity['mentionUsers'] = golf;
            oscar = oscar.mentionRoles;
            entity['mentionRoles'] = oscar;
            entity['suppressEveryone'] = report;
            entity['suppressRoles'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['default'] = report;
    tango = function(argFoo) { // Original name: isRawMessageMentioned
        _fun55336: for(var _fun55336_ip = 0; ; ) switch(_fun55336_ip) {
 0:
            entity = argFoo;
            oscar = entity.rawMessage;
            golf = entity.userId;
            report = entity.suppressEveryone;
            zulu = undefined;
            if(!(report === zulu)) { _fun55336_ip = 28; continue _fun55336 }
 26:
            report = false;
 28:
            tango = entity.suppressRoles;
            if(!(tango === zulu)) { _fun55336_ip = 40; continue _fun55336 }
 38:
            tango = false;
 40:
            mike = _closure1_slot3;
            entity = {};
            entity['userId'] = golf;
            golf = oscar.channel_id;
            entity['channelId'] = golf;
            verify = oscar.mention_everyone;
            golf = null;
            options = golf != verify;
            if(!options) { _fun55336_ip = 80; continue _fun55336 }
 77:
            options = verify;
 80:
            entity['mentionEveryone'] = options;
            yankee = oscar.mentions;
            verify = golf == yankee;
            options = undefined;
            if(verify) { _fun55336_ip = 117; continue _fun55336 }
 100:
            offset = yankee.map;
            verify = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            options = offset.bind(yankee)(verify);
 117:
            if(!(golf == options)) { _fun55336_ip = 125; continue _fun55336 }
 121:
            options = new Array(0);
 125:
            entity['mentionUsers'] = options;
            oscar = oscar.mention_roles;
            if(!(golf == oscar)) { _fun55336_ip = 144; continue _fun55336 }
 140:
            oscar = new Array(0);
 144:
            entity['mentionRoles'] = oscar;
            entity['suppressEveryone'] = report;
            entity['suppressRoles'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['isRawMessageMentioned'] = tango;
    zulu['isMentioned'] = mike;
    return entity;
})();