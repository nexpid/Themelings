// app/modules/messages/isMessageMentioned.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    michal = function(argFoo) { // Original name: isMentioned
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            golfie = entity.userId;
            option = entity.channelId;
            oscard = entity.mentionEveryone;
            report = entity.mentionUsers;
            tangon = entity.mentionRoles;
            zuuluu = entity.suppressEveryone;
            verify = undefined;
            if(!(zuuluu === verify)) { _fun00002_ip = 47; continue _fun00001 }
 45:
            zuuluu = false;
 47:
            entity = entity.suppressRoles;
            if(!(entity === verify)) { _fun00002_ip = 59; continue _fun00001 }
 57:
            entity = false;
 59:
            var _closure2_slot0 = verify;
            if(!oscard) { _fun00002_ip = 73; continue _fun00001 }
 66:
            if(zuuluu) { _fun00002_ip = 73; continue _fun00001 }
 69:
            zuuluu = true;
            return zuuluu;
 73:
            zuuluu = report.includes;
            zuuluu = zuuluu.bind(report)(golfie);
            if(zuuluu) { _fun00002_ip = 229; continue _fun00001 }
 89:
            if(entity) { _fun00002_ip = 225; continue _fun00001 }
 95:
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00002_ip = 225; continue _fun00001 }
 104:
            report = tangon.length;
            entity = 0;
            if(!(entity !== report)) { _fun00002_ip = 225; continue _fun00001 }
 115:
            oscard = _closure1_slot0;
            report = oscard.getChannel;
            oscard = report.bind(oscard)(option);
            if(!(zuuluu != oscard)) { _fun00002_ip = 221; continue _fun00001 }
 136:
            report = oscard.getGuildId;
            oscard = report.bind(oscard)();
            if(!(zuuluu != oscard)) { _fun00002_ip = 217; continue _fun00001 }
 150:
            option = _closure1_slot2;
            report = option.getGuild;
            report = report.bind(option)(oscard);
            if(!(zuuluu != report)) { _fun00002_ip = 213; continue _fun00001 }
 168:
            report = _closure1_slot1;
            entity = report.getMember;
            entity = entity.bind(report)(oscard, golfie);
            _closure2_slot0 = entity;
            entity = zuuluu != entity;
            if(!entity) { _fun00002_ip = 211; continue _fun00001 }
 195:
            zuuluu = tangon.some;
            michal = function(argFoo) {
                entity = _closure2_slot0;
                zuuluu = entity.roles;
                michal = zuuluu.includes;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal);
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
    var _closure1_slot3 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = oscard[entity];
    entity = undefined;
    report = golfie.bind(entity)(report);
    var _closure1_slot0 = report;
    report = 1;
    report = oscard[report];
    report = golfie.bind(entity)(report);
    var _closure1_slot1 = report;
    report = 2;
    report = oscard[report];
    report = golfie.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 3;
    oscard = oscard[report];
    report = argBar;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/messages/isMessageMentioned.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: isMessageMentioned
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscard = entity.message;
            golfie = entity.userId;
            report = entity.suppressEveryone;
            zuuluu = undefined;
            if(!(report === zuuluu)) { _fun00004_ip = 27; continue _fun00003 }
 25:
            report = false;
 27:
            tangon = entity.suppressRoles;
            if(!(tangon === zuuluu)) { _fun00004_ip = 39; continue _fun00003 }
 37:
            tangon = false;
 39:
            michal = _closure1_slot3;
            entity = {};
            entity['userId'] = golfie;
            golfie = oscard.channel_id;
            entity['channelId'] = golfie;
            golfie = oscard.mentionEveryone;
            entity['mentionEveryone'] = golfie;
            golfie = oscard.mentions;
            entity['mentionUsers'] = golfie;
            oscard = oscard.mentionRoles;
            entity['mentionRoles'] = oscard;
            entity['suppressEveryone'] = report;
            entity['suppressRoles'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['default'] = report;
    tangon = function(argFoo) { // Original name: isRawMessageMentioned
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            oscard = entity.rawMessage;
            golfie = entity.userId;
            report = entity.suppressEveryone;
            zuuluu = undefined;
            if(!(report === zuuluu)) { _fun00006_ip = 28; continue _fun00005 }
 26:
            report = false;
 28:
            tangon = entity.suppressRoles;
            if(!(tangon === zuuluu)) { _fun00006_ip = 40; continue _fun00005 }
 38:
            tangon = false;
 40:
            michal = _closure1_slot3;
            entity = {};
            entity['userId'] = golfie;
            golfie = oscard.channel_id;
            entity['channelId'] = golfie;
            verify = oscard.mention_everyone;
            golfie = null;
            option = golfie != verify;
            if(!option) { _fun00006_ip = 80; continue _fun00005 }
 77:
            option = verify;
 80:
            entity['mentionEveryone'] = option;
            yankee = oscard.mentions;
            verify = golfie == yankee;
            option = undefined;
            if(verify) { _fun00006_ip = 117; continue _fun00005 }
 100:
            offset = yankee.map;
            verify = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            option = offset.bind(yankee)(verify);
 117:
            if(!(golfie == option)) { _fun00006_ip = 125; continue _fun00005 }
 121:
            option = new Array(0);
 125:
            entity['mentionUsers'] = option;
            oscard = oscard.mention_roles;
            if(!(golfie == oscard)) { _fun00006_ip = 144; continue _fun00005 }
 140:
            oscard = new Array(0);
 144:
            entity['mentionRoles'] = oscard;
            entity['suppressEveryone'] = report;
            entity['suppressRoles'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['isRawMessageMentioned'] = tangon;
    zuuluu['isMentioned'] = michal;
    return entity;
})();