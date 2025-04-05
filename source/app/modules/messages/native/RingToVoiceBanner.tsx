// app/modules/messages/native/RingToVoiceBanner.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: RingUserButton
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.channel;
            var _closure2_slot0 = zuuluu;
            zuuluu = michal.recipientUserId;
            var _closure2_slot1 = zuuluu;
            michal = michal.isUserRinging;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 13;
            oscard = verify[zuuluu];
            tangon = undefined;
            oscard = option.bind(tangon)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            zuuluu = verify[zuuluu];
            zuuluu = option.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            if(michal) { _fun00002_ip = 97; continue _fun00001 }
 82:
            option = zuuluu.3Hv9qa;
            offset = oscard.bind(golfie)(option);
            _fun00002_ip = 108; continue _fun00001;
 97:
            zuuluu = zuuluu.ygslb2;
            offset = oscard.bind(golfie)(zuuluu);
 108:
            if(michal) { _fun00002_ip = 120; continue _fun00001 }
 111:
            golfie = function() {
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                entity = 14;
                zuuluu = report[entity];
                entity = undefined;
                option = tangon.bind(entity)(zuuluu);
                golfie = option.ring;
                tangon = _closure2_slot0;
                oscard = tangon.id;
                verify = _closure2_slot1;
                zuuluu = new Array(1);
                zuuluu[0] = verify;
                zuuluu = golfie.bind(option)(oscard, zuuluu);
                zuuluu = _closure1_slot0;
                michal = 15;
                michal = report[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.openChannelCallModal;
                michal = michal.bind(zuuluu)(tangon);
                return entity;
            };
            _fun00002_ip = 127; continue _fun00001;
 120:
            golfie = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 14;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.stopRinging;
                michal = _closure2_slot0;
                michal = michal.id;
                report = _closure2_slot1;
                entity = new Array(1);
                entity[0] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
 127:
            zuuluu = _closure1_slot6;
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 16;
            entity = verify[entity];
            entity = oscard.bind(tangon)(entity);
            michal = entity.Button;
            entity = {'size': 'sm', 'variant': 'tertiary'};
            option = 'sm';
            entity['text'] = offset;
            entity['onPress'] = golfie;
            golfie = _closure1_slot6;
            report = 17;
            report = verify[report];
            report = oscard.bind(tangon)(report);
            oscard = report.VoiceNormalIcon;
            report = {};
            report['size'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['icon'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ParticipantTypes;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot6 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'overflow': 'hidden', 'padding': 8, 'paddingLeft': 16, 'paddingRight': 16, 'zIndex': 100, 'backgroundColor': null, 'borderBottomWidth': 1};
    offset = 6;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.CHAT_BANNER_BG;
    verify['backgroundColor'] = romeon;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BORDER_SUBTLE;
    verify['borderBottomColor'] = offset;
    tangon['ringToVoiceContainer'] = verify;
    verify = {'flexShrink': 0, 'marginLeft': 12};
    tangon['ringToVoiceButtonContainer'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'flex': 1};
    tangon['ringUserBannerText'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/RingToVoiceBanner.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: RingToVoiceBanner
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            backup = michal.recipientUser;
            var _closure2_slot0 = backup;
            kiloes = michal.voiceChannel;
            var _closure2_slot1 = kiloes;
            michal = _closure1_slot8;
            report = undefined;
            yankee = michal.bind(report)();
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 7;
            michal = oscard[michal];
            michal = zuuluu.bind(report)(michal);
            result = michal.bind(report)(kiloes);
            tangon = _closure1_slot0;
            michal = 8;
            michal = oscard[michal];
            option = tangon.bind(report)(michal);
            golfie = option.useCanRing;
            zuuluu = kiloes.id;
            michal = 'RingToVoiceBanner';
            michal = golfie.bind(option)(backup, michal, zuuluu);
            var _closure2_slot2 = michal;
            zuuluu = 9;
            zuuluu = oscard[zuuluu];
            oscard = tangon.bind(report)(zuuluu);
            tangon = oscard.useStateFromStoresObject;
            golfie = _closure1_slot4;
            zuuluu = new Array(1);
            zuuluu[0] = golfie;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = _closure2_slot2;
                    if(!tangon) { _fun00006_ip = 25; continue _fun00005 }
 10:
                    michal = _closure2_slot1;
                    zuuluu = michal.id;
                    michal = null;
                    tangon = michal != zuuluu;
 25:
                    michal = null;
                    zuuluu = null;
                    if(!tangon) { _fun00006_ip = 69; continue _fun00005 }
 32:
                    oscard = _closure1_slot4;
                    report = oscard.getParticipant;
                    tangon = _closure2_slot1;
                    tangon = tangon.id;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    zuuluu = report.bind(oscard)(tangon, entity);
 69:
                    entity = {};
                    tangon = michal != zuuluu;
                    entity['userIsInCall'] = tangon;
                    michal = michal != zuuluu;
                    if(!michal) { _fun00006_ip = 109; continue _fun00005 }
 87:
                    report = zuuluu.type;
                    tangon = _closure1_slot5;
                    tangon = tangon.USER;
                    michal = report === tangon;
 109:
                    if(!michal) { _fun00006_ip = 118; continue _fun00005 }
 112:
                    michal = zuuluu.ringing;
 118:
                    entity['isUserRinging'] = michal;
                    return entity;
                }
            };
            zuuluu = tangon.bind(oscard)(zuuluu, entity);
            entity = zuuluu.userIsInCall;
            foxtra = zuuluu.isUserRinging;
            michal = !michal;
            if(michal) { _fun00004_ip = 172; continue _fun00003 }
 166:
            zuuluu = null;
            michal = zuuluu == kiloes;
 172:
            if(michal) { _fun00004_ip = 184; continue _fun00003 }
 175:
            if(!entity) { _fun00004_ip = 181; continue _fun00003 }
 178:
            entity = !foxtra;
 181:
            michal = entity;
 184:
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 10;
            entity = golfie[entity];
            oscard = zuuluu.bind(report)(entity);
            tangon = {};
            zuuluu = _closure1_slot0;
            entity = 11;
            option = golfie[entity];
            option = zuuluu.bind(report)(option);
            option = option.ImpressionTypes;
            option = option.VIEW;
            tangon['type'] = option;
            entity = golfie[entity];
            entity = zuuluu.bind(report)(entity);
            entity = entity.ImpressionNames;
            entity = entity.RING_TO_GUILD_VC_BANNER_SHOWN;
            tangon['name'] = entity;
            entity = {};
            echoed = null;
            golfie = echoed == kiloes;
            zuuluu = undefined;
            if(golfie) { _fun00004_ip = 281; continue _fun00003 }
 276:
            zuuluu = kiloes.id;
 281:
            entity['voice_channel_id'] = zuuluu;
            golfie = echoed == kiloes;
            zuuluu = undefined;
            if(golfie) { _fun00004_ip = 300; continue _fun00003 }
 295:
            zuuluu = kiloes.guild_id;
 300:
            entity['voice_guild_id'] = zuuluu;
            tangon['properties'] = entity;
            zuuluu = {};
            zuuluu['disableTrack'] = michal;
            golfie = backup.id;
            entity = new Array(1);
            entity[0] = golfie;
            entity = oscard.bind(report)(tangon, zuuluu, entity);
            entity = null;
            if(michal) { _fun00004_ip = 649; continue _fun00003 }
 345:
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot3;
            michal = {};
            oscard = yankee.ringToVoiceContainer;
            michal['style'] = oscard;
            option = _closure1_slot6;
            romeon = _closure1_slot0;
            update = _closure1_slot2;
            ctrled = 12;
            oscard = update[ctrled];
            oscard = romeon.bind(report)(oscard);
            golfie = oscard.Text;
            oscard = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            verify = yankee.ringUserBannerText;
            oscard['style'] = verify;
            verify = 13;
            sizing = update[verify];
            sizing = romeon.bind(report)(sizing);
            output = sizing.intl;
            sizing = output.format;
            verify = update[verify];
            verify = romeon.bind(report)(verify);
            verify = verify.t;
            romeon = verify.f2tNxM;
            verify = {};
            update = echoed == backup;
            echoed = undefined;
            if(update) { _fun00004_ip = 481; continue _fun00003 }
 475:
            echoed = backup.globalName;
 481:
            verify['username'] = echoed;
            source = _closure1_slot6;
            update = _closure1_slot0;
            echoed = _closure1_slot2;
            echoed = echoed[ctrled];
            echoed = update.bind(report)(echoed);
            update = echoed.Text;
            echoed = {'variant': 'text-sm/semibold', 'color': 'header-primary'};
            echoed['children'] = result;
            result = kiloes.id;
            result = source.bind(report)(update, echoed, result);
            verify['channelName'] = result;
            verify = sizing.bind(output)(romeon, verify);
            oscard['children'] = verify;
            golfie = option.bind(report)(golfie, oscard);
            oscard = new Array(2);
            oscard[0] = golfie;
            verify = _closure1_slot6;
            option = _closure1_slot3;
            golfie = {};
            yankee = yankee.ringToVoiceButtonContainer;
            golfie['style'] = yankee;
            romeon = _closure1_slot6;
            yankee = _closure1_slot9;
            offset = {};
            offset['channel'] = kiloes;
            backup = backup.id;
            offset['recipientUserId'] = backup;
            offset['isUserRinging'] = foxtra;
            offset = romeon.bind(report)(yankee, offset);
            golfie['children'] = offset;
            golfie = verify.bind(report)(option, golfie);
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 649:
            return entity;
        }
    };
    zuuluu['RingToVoiceBanner'] = michal;
    return entity;
})();