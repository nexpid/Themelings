// app/modules/voice_panel/native/utils/useIsVoicePanelParticipantFocusable.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function(argFoo, argBar, argBaz) { // Original name: isVoicePanelParticipantFocusable
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argBar;
            golfie = argBaz;
            zuuluu = arguments[3];
            verify = arguments[4];
            report = arguments[5];
            offset = arguments[6];
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00002_ip = 31; continue _fun00001 }
 24:
            zuuluu = _closure1_slot3;
 31:
            if(!(verify === entity)) { _fun00002_ip = 42; continue _fun00001 }
 35:
            verify = _closure1_slot5;
 42:
            if(!(report === entity)) { _fun00002_ip = 53; continue _fun00001 }
 46:
            report = _closure1_slot2;
 53:
            if(!(offset === entity)) { _fun00002_ip = 64; continue _fun00001 }
 57:
            offset = _closure1_slot4;
 64:
            tangon = null;
            if(!(tangon != golfie)) { _fun00002_ip = 294; continue _fun00001 }
 73:
            michal = zuuluu.getParticipant;
            zuuluu = michal.bind(zuuluu)(oscard, golfie);
            if(!(tangon != zuuluu)) { _fun00002_ip = 290; continue _fun00001 }
 92:
            michal = _closure1_slot7;
            michal = michal.bind(entity)(zuuluu);
            if(michal) { _fun00002_ip = 286; continue _fun00001 }
 110:
            michal = _closure1_slot6;
            michal = michal.bind(entity)(zuuluu);
            if(michal) { _fun00002_ip = 238; continue _fun00001 }
 122:
            michal = _closure1_slot8;
            michal = michal.bind(entity)(zuuluu);
            if(michal) { _fun00002_ip = 207; continue _fun00001 }
 134:
            michal = _closure1_slot9;
            michal = michal.bind(entity)(zuuluu);
            option = _closure1_slot0;
            yankee = _closure1_slot1;
            if(michal) { _fun00002_ip = 181; continue _fun00001 }
 154:
            michal = 6;
            michal = yankee[michal];
            golfie = option.bind(entity)(michal);
            michal = golfie.assertNever;
            michal = michal.bind(golfie)(zuuluu);
            michal = undefined;
            _fun00002_ip = 205; continue _fun00001;
 181:
            golfie = 5;
            golfie = yankee[golfie];
            option = option.bind(entity)(golfie);
            golfie = option.canRenderParticipantVideo;
            michal = golfie.bind(option)(zuuluu, verify);
 205:
            _fun00002_ip = 236; continue _fun00001;
 207:
            verify = offset.getActiveStreamForUser;
            golfie = zuuluu.user;
            option = golfie.id;
            golfie = argFoo;
            golfie = verify.bind(offset)(option, golfie);
            michal = tangon != golfie;
 236:
            return michal;
 238:
            michal = report.getSelfEmbeddedActivityForChannel;
            michal = michal.bind(report)(oscard);
            report = tangon == michal;
            entity = undefined;
            if(report) { _fun00002_ip = 263; continue _fun00001 }
 258:
            entity = michal.applicationId;
 263:
            entity = tangon != entity;
            if(!entity) { _fun00002_ip = 284; continue _fun00001 }
 270:
            zuuluu = zuuluu.applicationId;
            michal = michal.applicationId;
            entity = zuuluu === michal;
 284:
            return entity;
 286:
            entity = false;
            return entity;
 290:
            entity = false;
            return entity;
 294:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot10 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 4;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.isActivityParticipant;
    var _closure1_slot6 = option;
    option = report.isPresenceEmbeddedActivityParticipant;
    var _closure1_slot7 = option;
    option = report.isStreamParticipant;
    var _closure1_slot8 = option;
    report = report.isUserParticipant;
    var _closure1_slot9 = report;
    report = 8;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/voice_panel/native/utils/useIsVoicePanelParticipantFocusable.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo, argBar, argBaz) { // Original name: useIsVoicePanelParticipantFocusable
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 7;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        oscard = _closure1_slot3;
        michal = new Array(4);
        michal[0] = oscard;
        oscard = _closure1_slot5;
        michal[1] = oscard;
        oscard = _closure1_slot2;
        michal[2] = oscard;
        report = _closure1_slot4;
        michal[3] = report;
        entity = function() {
            verify = _closure1_slot10;
            sizing = _closure2_slot0;
            kiloes = _closure2_slot1;
            backup = _closure2_slot2;
            foxtra = _closure1_slot3;
            romeon = _closure1_slot5;
            yankee = _closure1_slot2;
            offset = _closure1_slot4;
            output = undefined;
            entity = output[verify](sizing, kiloes, backup, foxtra, romeon, yankee, offset, verify);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['isVoicePanelParticipantFocusable'] = michal;
    return entity;
})();