// app/actions/SelectedChannelActionCreatorsAdditional.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.STAGE_BOOSTING_SHEET_KEY;
    var _closure1_slot11 = tangon;
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/SelectedChannelActionCreatorsAdditional.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            report = arguments[2];
            tangon = arguments[3];
            var _closure2_slot0 = golfie;
            entity = argBar;
            var _closure2_slot1 = entity;
            option = undefined;
            if(!(report === option)) { _fun00002_ip = 30; continue _fun00001 }
 28:
            report = false;
 30:
            var _closure2_slot2 = report;
            if(!(tangon === option)) { _fun00002_ip = 40; continue _fun00001 }
 38:
            tangon = false;
 40:
            var _closure2_slot3 = tangon;
            oscard = _closure1_slot3;
            zuuluu = oscard.getChannel;
            oscard = zuuluu.bind(oscard)(golfie);
            verify = _closure1_slot8;
            zuuluu = verify.getCurrentUser;
            verify = zuuluu.bind(verify)();
            zuuluu = null;
            if(!(zuuluu != verify)) { _fun00002_ip = 398; continue _fun00001 }
 83:
            if(!(zuuluu != oscard)) { _fun00002_ip = 108; continue _fun00001 }
 87:
            offset = oscard.nsfw;
            if(!offset) { _fun00002_ip = 108; continue _fun00001 }
 96:
            verify = verify.nsfwAllowed;
            if(!verify) { _fun00002_ip = 398; continue _fun00001 }
 108:
            if(!(zuuluu != oscard)) { _fun00002_ip = 358; continue _fun00001 }
 115:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            zuuluu = 9;
            zuuluu = offset[zuuluu];
            yankee = verify.bind(option)(zuuluu);
            offset = yankee.isChannelFull;
            verify = _closure1_slot9;
            zuuluu = _closure1_slot4;
            verify = offset.bind(yankee)(oscard, verify, zuuluu);
            yankee = _closure1_slot5;
            offset = yankee.getCheck;
            zuuluu = oscard.guild_id;
            yankee = offset.bind(yankee)(zuuluu);
            zuuluu = yankee.canChat;
            if(zuuluu) { _fun00002_ip = 252; continue _fun00001 }
 185:
            offset = _closure1_slot0;
            romeon = _closure1_slot2;
            zuuluu = 10;
            zuuluu = romeon[zuuluu];
            offset = offset.bind(option)(zuuluu);
            zuuluu = offset.canLurkerListen;
            zuuluu = zuuluu.bind(offset)(oscard);
            if(zuuluu) { _fun00002_ip = 252; continue _fun00001 }
 219:
            offset = _closure1_slot0;
            romeon = _closure1_slot2;
            zuuluu = 11;
            zuuluu = romeon[zuuluu];
            offset = offset.bind(option)(zuuluu);
            zuuluu = offset.unverifiedVoiceGate;
            zuuluu = zuuluu.bind(offset)(yankee);
            return zuuluu;
 252:
            zuuluu = oscard.isPrivate;
            zuuluu = zuuluu.bind(oscard)();
            zuuluu = !zuuluu;
            if(!zuuluu) { _fun00002_ip = 297; continue _fun00001 }
 268:
            romeon = _closure1_slot6;
            yankee = romeon.can;
            offset = _closure1_slot10;
            offset = offset.CONNECT;
            offset = yankee.bind(romeon)(offset, oscard);
            zuuluu = !offset;
 297:
            if(!verify) { _fun00002_ip = 352; continue _fun00001 }
 300:
            offset = oscard.isGuildStageVoice;
            offset = offset.bind(oscard)();
            if(!offset) { _fun00002_ip = 352; continue _fun00001 }
 313:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            offset = 12;
            offset = romeon[offset];
            romeon = yankee.bind(option)(offset);
            yankee = romeon.getStageHasMedia;
            offset = oscard.id;
            offset = yankee.bind(romeon)(offset);
            if(offset) { _fun00002_ip = 402; continue _fun00001 }
 352:
            if(verify) { _fun00002_ip = 400; continue _fun00001 }
 355:
            if(zuuluu) { _fun00002_ip = 400; continue _fun00001 }
 358:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            zuuluu = 16;
            zuuluu = offset[zuuluu];
            zuuluu = verify.bind(option)(zuuluu);
            sizing = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 17;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'VOICE_CHANNEL_SELECT';
                michal['type'] = report;
                golfie = _closure2_slot1;
                michal['guildId'] = golfie;
                golfie = _closure2_slot0;
                michal['channelId'] = golfie;
                golfie = _closure1_slot7;
                oscard = golfie.getVoiceChannelId;
                oscard = oscard.bind(golfie)();
                michal['currentVoiceChannelId'] = oscard;
                oscard = _closure2_slot2;
                michal['video'] = oscard;
                report = _closure2_slot3;
                michal['stream'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            output = undefined;
            kiloes = golfie;
            backup = tangon;
            foxtra = report;
            michal = output[zuuluu](sizing, kiloes, backup, foxtra, romeon);
 398:
            return option;
 400:
            return option;
 402:
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            zuuluu = 13;
            zuuluu = michal[zuuluu];
            report = tangon.bind(option)(zuuluu);
            tangon = report.openLazy;
            golfie = _closure1_slot0;
            zuuluu = 15;
            zuuluu = michal[zuuluu];
            golfie = golfie.bind(option)(zuuluu);
            zuuluu = 14;
            zuuluu = michal[zuuluu];
            michal = michal.paths;
            zuuluu = golfie.bind(option)(zuuluu, michal);
            michal = _closure1_slot11;
            entity = {};
            entity['channel'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            entity = undefined;
            return entity;
        }
    };
    zuuluu['selectVoiceChannelAdditional'] = michal;
    return entity;
})();