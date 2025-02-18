// app/modules/game_console/handoffRemote.tsx
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
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/game_console/handoffRemote.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: handoffRemote
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            report = argBar;
            entity = zuuluu.sessionId;
            tangon = null;
            michal = tangon != entity;
            oscard = '';
            if(!michal) { _fun00002_ip = 28; continue _fun00001 }
 25:
            oscard = entity;
 28:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            golfie = 1;
            offset = verify[golfie];
            entity = undefined;
            yankee = option.bind(entity)(offset);
            offset = yankee.remoteDisconnect;
            offset = offset.bind(yankee)(oscard);
            golfie = verify[golfie];
            option = option.bind(entity)(golfie);
            golfie = option.disconnectRemote;
            golfie = golfie.bind(option)();
            golfie = oscard;
            if(!(tangon == report)) { _fun00002_ip = 95; continue _fun00001 }
 90:
            report = zuuluu.channelId;
 95:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            oscard = 2;
            oscard = verify[oscard];
            option = option.bind(entity)(oscard);
            oscard = tangon != report;
            tangon = 'attempted to transfer to unknown channel';
            tangon = option.bind(entity)(oscard, tangon);
            oscard = zuuluu.selfMute;
            option = _closure1_slot3;
            tangon = option.isSelfMute;
            tangon = tangon.bind(option)();
            if(!(oscard !== tangon)) { _fun00002_ip = 185; continue _fun00001 }
 155:
            oscard = _closure1_slot1;
            option = _closure1_slot2;
            tangon = 3;
            tangon = option[tangon];
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.toggleSelfMute;
            tangon = tangon.bind(oscard)();
 185:
            tangon = zuuluu.selfDeaf;
            oscard = _closure1_slot3;
            zuuluu = oscard.isSelfDeaf;
            zuuluu = zuuluu.bind(oscard)();
            if(!(tangon !== zuuluu)) { _fun00002_ip = 239; continue _fun00001 }
 209:
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 3;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.toggleSelfDeaf;
            zuuluu = zuuluu.bind(tangon)();
 239:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 4;
            michal = tangon[michal];
            oscard = zuuluu.bind(entity)(michal);
            michal = 'discord_client';
            michal = oscard.bind(entity)(report, michal, golfie);
            michal = 5;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.selectVoiceChannel;
            michal = false;
            michal = zuuluu.bind(tangon)(report, michal);
            return entity;
        }
    };
    zuuluu['handoffRemote'] = michal;
    return entity;
})();