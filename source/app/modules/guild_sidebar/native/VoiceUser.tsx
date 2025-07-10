// app/modules/guild_sidebar/native/VoiceUser.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot10 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_sidebar/native/VoiceUser.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: VoiceUserConnected
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            romeon = entity.channel;
            var _closure2_slot0 = romeon;
            vacuum = entity.user;
            var _closure2_slot1 = vacuum;
            option = entity.sessionId;
            var _closure2_slot2 = option;
            sequen = entity.member;
            result = entity.selfMute;
            output = entity.selfDeaf;
            foxtra = entity.selfVideo;
            update = entity.mute;
            echoed = entity.deaf;
            source = entity.suppress;
            ctrled = entity.collapsed;
            golfie = entity.isGuest;
            tangon = _closure1_slot6;
            zuuluu = tangon.getId;
            tangon = zuuluu.bind(tangon)();
            zuuluu = vacuum.id;
            report = tangon === zuuluu;
            var _closure2_slot3 = report;
            verify = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 9;
            offset = oscard[zuuluu];
            tangon = undefined;
            kiloes = verify.bind(tangon)(offset);
            backup = kiloes.useStateFromStoresObject;
            offset = _closure1_slot7;
            yankee = new Array(1);
            yankee[0] = offset;
            offset = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot3;
                    if(entity) { _fun00004_ip = 59; continue _fun00003 }
 10:
                    entity = {'localMute': null, 'localDeaf': false, 'localVideo': false};
                    tangon = _closure1_slot7;
                    zuuluu = tangon.isLocalMute;
                    michal = _closure2_slot1;
                    michal = michal.id;
                    michal = zuuluu.bind(tangon)(michal);
                    entity['localMute'] = michal;
                    _fun00004_ip = 98; continue _fun00003;
 59:
                    michal = {'localMute': false, 'localDeaf': false};
                    tangon = _closure1_slot7;
                    zuuluu = tangon.isVideoEnabled;
                    zuuluu = zuuluu.bind(tangon)();
                    michal['localVideo'] = zuuluu;
                    entity = michal;
 98:
                    return entity;
                }
            };
            offset = backup.bind(kiloes)(yankee, offset);
            sizing = offset.localMute;
            kiloes = offset.localVideo;
            offset = oscard[zuuluu];
            config = verify.bind(tangon)(offset);
            backup = config.useStateFromStores;
            offset = _closure1_slot5;
            yankee = new Array(1);
            yankee[0] = offset;
            offset = function() {
                tangon = _closure1_slot5;
                zuuluu = tangon.getStreamForUser;
                michal = _closure2_slot1;
                michal = michal.id;
                report = _closure2_slot0;
                entity = report.getGuildId;
                entity = entity.bind(report)();
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            backup = backup.bind(config)(yankee, offset);
            offset = oscard[zuuluu];
            record = verify.bind(tangon)(offset);
            config = record.useStateFromStores;
            offset = _closure1_slot8;
            yankee = new Array(1);
            yankee[0] = offset;
            offset = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot2;
                    tangon = null;
                    report = tangon != entity;
                    entity = undefined;
                    if(!report) { _fun00006_ip = 64; continue _fun00005 }
 18:
                    oscard = _closure1_slot8;
                    report = oscard.getSessionById;
                    zuuluu = _closure2_slot2;
                    zuuluu = report.bind(oscard)(zuuluu);
                    tangon = tangon == zuuluu;
                    michal = undefined;
                    if(tangon) { _fun00006_ip = 61; continue _fun00005 }
 49:
                    zuuluu = zuuluu.clientInfo;
                    michal = zuuluu.os;
 61:
                    entity = michal;
 64:
                    return entity;
                }
            };
            offset = config.bind(record)(yankee, offset);
            oscard = oscard[zuuluu];
            record = verify.bind(tangon)(oscard);
            config = record.useStateFromStores;
            oscard = _closure1_slot9;
            yankee = new Array(1);
            yankee[0] = oscard;
            oscard = romeon.id;
            verify = new Array(2);
            verify[0] = oscard;
            oscard = vacuum.id;
            verify[1] = oscard;
            oscard = function() {
                tangon = _closure1_slot9;
                zuuluu = tangon.getVoicePlatformForChannel;
                michal = _closure2_slot0;
                michal = michal.id;
                entity = _closure2_slot1;
                entity = entity.id;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            oscard = config.bind(record)(yankee, oscard, verify);
            verify = null;
            yankee = verify != option;
            if(!yankee) { _fun00002_ip = 334; continue _fun00001 }
 331:
            yankee = report;
 334:
            if(!yankee) { _fun00002_ip = 355; continue _fun00001 }
 337:
            config = _closure1_slot6;
            report = config.getSessionId;
            report = report.bind(config)();
            yankee = option !== report;
 355:
            report = _closure1_slot0;
            config = _closure1_slot2;
            option = config[zuuluu];
            target = report.bind(tangon)(option);
            papara = target.useStateFromStores;
            option = _closure1_slot3;
            cntext = new Array(1);
            cntext[0] = option;
            option = vacuum.id;
            record = new Array(2);
            record[0] = option;
            option = romeon.id;
            record[1] = option;
            option = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.getEmbeddedActivitiesForChannel;
                entity = _closure2_slot0;
                entity = entity.id;
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.find;
                entity = function(argFoo) {
                    entity = argFoo;
                    zuuluu = entity.userIds;
                    michal = zuuluu.has;
                    entity = _closure2_slot1;
                    entity = entity.id;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option = papara.bind(target)(cntext, option, record);
            zuuluu = config[zuuluu];
            record = report.bind(tangon)(zuuluu);
            report = record.useStateFromStores;
            cntext = _closure1_slot4;
            zuuluu = new Array(1);
            zuuluu[0] = cntext;
            michal = function() {
                tangon = _closure1_slot4;
                zuuluu = tangon.getGuildRingingUsers;
                michal = _closure2_slot0;
                michal = michal.id;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.has;
                entity = _closure2_slot1;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report = report.bind(record)(zuuluu, michal);
            zuuluu = _closure1_slot10;
            michal = _closure1_slot1;
            entity = 10;
            entity = config[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            config = romeon.guild_id;
            entity['guildId'] = config;
            entity['member'] = sequen;
            entity['user'] = vacuum;
            entity['collapsed'] = ctrled;
            if(update) { _fun00002_ip = 515; continue _fun00001 }
 512:
            update = source;
 515:
            entity['serverMute'] = update;
            entity['serverDeaf'] = echoed;
            entity['mute'] = result;
            entity['deaf'] = output;
            entity['localMute'] = sizing;
            if(foxtra) { _fun00002_ip = 546; continue _fun00001 }
 543:
            foxtra = kiloes;
 546:
            entity['video'] = foxtra;
            kiloes = verify == backup;
            foxtra = undefined;
            if(kiloes) { _fun00002_ip = 565; continue _fun00001 }
 560:
            foxtra = backup.channelId;
 565:
            romeon = romeon.id;
            romeon = foxtra === romeon;
            entity['stream'] = romeon;
            entity['platform'] = offset;
            offset = verify == offset;
            if(!offset) { _fun00002_ip = 594; continue _fun00001 }
 591:
            offset = yankee;
 594:
            entity['disabled'] = offset;
            option = verify != option;
            entity['isInEmbeddedActivity'] = option;
            entity['isGuest'] = golfie;
            entity['voicePlatform'] = oscard;
            entity['ringing'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();