// app/modules/game_console/trackVoiceCallTransfer.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/game_console/trackVoiceCallTransfer.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz) { // Original name: trackVoiceCallTransfer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            romeon = argBaz;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 4;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.track;
            michal = _closure1_slot5;
            zuuluu = michal.VOICE_CALL_TRANSFER;
            michal = {};
            option = null;
            offset = option != romeon;
            verify = 'discord_client';
            if(!offset) { _fun00002_ip = 102; continue _fun00001 }
 63:
            yankee = _closure1_slot4;
            offset = yankee.getSessionById;
            yankee = offset.bind(yankee)(romeon);
            romeon = option == yankee;
            offset = undefined;
            if(romeon) { _fun00002_ip = 99; continue _fun00001 }
 87:
            yankee = yankee.clientInfo;
            offset = yankee.os;
 99:
            verify = offset;
 102:
            michal['source_platform'] = verify;
            offset = _closure1_slot2;
            verify = offset.getChannel;
            verify = verify.bind(offset)(golfie);
            offset = option == verify;
            option = undefined;
            if(offset) { _fun00002_ip = 137; continue _fun00001 }
 132:
            option = verify.guild_id;
 137:
            michal['guild_id'] = option;
            michal['channel_id'] = golfie;
            golfie = _closure1_slot3;
            oscard = golfie.getRTCConnectionId;
            oscard = oscard.bind(golfie)();
            michal['rtc_connection_id'] = oscard;
            oscard = argBar;
            michal['target_platform'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();