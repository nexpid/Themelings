// app/modules/stage_channels/shouldShowEndStageModal.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
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
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/stage_channels/shouldShowEndStageModal.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: shouldShowEndStageModal
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            var _closure2_slot0 = golfie;
            entity = golfie.isGuildStageVoice;
            entity = entity.bind(golfie)();
            if(entity) { _fun00002_ip = 26; continue _fun00001 }
 22:
            entity = false;
            return entity;
 26:
            zuuluu = _closure1_slot5;
            michal = zuuluu.isLive;
            entity = golfie.id;
            entity = michal.bind(zuuluu)(entity);
            if(entity) { _fun00002_ip = 56; continue _fun00001 }
 52:
            entity = false;
            return entity;
 56:
            michal = _closure1_slot2;
            entity = michal.getId;
            option = entity.bind(michal)();
            var _closure2_slot1 = option;
            zuuluu = _closure1_slot4;
            michal = zuuluu.isModerator;
            entity = golfie.id;
            entity = michal.bind(zuuluu)(option, entity);
            michal = !entity;
            entity = !michal;
            if(michal) { _fun00002_ip = 268; continue _fun00001 }
 107:
            report = _closure1_slot4;
            zuuluu = report.isSpeaker;
            michal = golfie.id;
            michal = zuuluu.bind(report)(option, michal);
            zuuluu = !michal;
            michal = !zuuluu;
            if(zuuluu) { _fun00002_ip = 265; continue _fun00001 }
 140:
            option = _closure1_slot3;
            report = option.getMutableParticipants;
            zuuluu = golfie.id;
            option = report.bind(option)(zuuluu);
            report = option.find;
            zuuluu = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    entity = zuuluu.user;
                    tangon = entity.id;
                    entity = _closure2_slot1;
                    entity = tangon !== entity;
                    if(!entity) { _fun00004_ip = 65; continue _fun00003 }
 27:
                    report = _closure1_slot4;
                    tangon = report.isModerator;
                    zuuluu = zuuluu.user;
                    zuuluu = zuuluu.id;
                    michal = _closure2_slot0;
                    michal = michal.id;
                    entity = tangon.bind(report)(zuuluu, michal);
 65:
                    return entity;
                }
            };
            zuuluu = report.bind(option)(zuuluu);
            report = null;
            zuuluu = report == zuuluu;
            if(zuuluu) { _fun00002_ip = 262; continue _fun00001 }
 186:
            verify = _closure1_slot3;
            option = verify.getMutableParticipants;
            golfie = golfie.id;
            yankee = _closure1_slot0;
            offset = _closure1_slot1;
            oscard = 4;
            offset = offset[oscard];
            oscard = undefined;
            oscard = yankee.bind(oscard)(offset);
            oscard = oscard.StageChannelParticipantNamedIndex;
            oscard = oscard.SPEAKER;
            golfie = option.bind(verify)(golfie, oscard);
            oscard = golfie.find;
            tangon = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = argFoo;
                    entity = zuuluu.user;
                    tangon = entity.id;
                    entity = _closure2_slot1;
                    entity = tangon !== entity;
                    if(!entity) { _fun00006_ip = 65; continue _fun00005 }
 27:
                    report = _closure1_slot4;
                    tangon = report.isModerator;
                    zuuluu = zuuluu.user;
                    zuuluu = zuuluu.id;
                    michal = _closure2_slot0;
                    michal = michal.id;
                    entity = tangon.bind(report)(zuuluu, michal);
 65:
                    return entity;
                }
            };
            tangon = oscard.bind(golfie)(tangon);
            zuuluu = report == tangon;
 262:
            michal = zuuluu;
 265:
            entity = michal;
 268:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();