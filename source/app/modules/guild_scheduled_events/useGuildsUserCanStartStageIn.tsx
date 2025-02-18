// app/modules/guild_scheduled_events/useGuildsUserCanStartStageIn.tsx
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
    tangon = 0;
    option = oscard[tangon];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot2 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_scheduled_events/useGuildsUserCanStartStageIn.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useChannelsUserCanStartStageIn
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            oscard = null;
            tangon = oscard == zuuluu;
            report = undefined;
            michal = undefined;
            if(tangon) { _fun00002_ip = 23; continue _fun00001 }
 18:
            michal = zuuluu.id;
 23:
            zuuluu = oscard != michal;
            oscard = null;
            if(!zuuluu) { _fun00002_ip = 35; continue _fun00001 }
 32:
            oscard = michal;
 35:
            var _closure2_slot0 = oscard;
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 3;
            zuuluu = golfie[zuuluu];
            report = tangon.bind(report)(zuuluu);
            tangon = report.useStateFromStoresArray;
            golfie = _closure1_slot2;
            zuuluu = new Array(2);
            zuuluu[0] = golfie;
            michal = _closure1_slot4;
            zuuluu[1] = michal;
            michal = new Array(1);
            michal[0] = oscard;
            entity = function() {
                tangon = _closure1_slot2;
                zuuluu = tangon.getChannels;
                michal = _closure2_slot0;
                michal = zuuluu.bind(tangon)(michal);
                entity = _closure1_slot3;
                tangon = michal[entity];
                zuuluu = tangon.reduce;
                michal = function(argFoo, argBar) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        entity = argFoo;
                        michal = argBar;
                        zuuluu = michal.channel;
                        tangon = zuuluu.isGuildStageVoice;
                        tangon = tangon.bind(zuuluu)();
                        if(!tangon) { _fun00004_ip = 116; continue _fun00003 }
 24:
                        golfie = michal.channel;
                        oscard = _closure1_slot4;
                        verify = undefined;
                        if(!(oscard === verify)) { _fun00004_ip = 46; continue _fun00003 }
 42:
                        oscard = _closure1_slot4;
 46:
                        michal = golfie.isGuildStageVoice;
                        michal = michal.bind(golfie)();
                        report = !michal;
                        michal = !report;
                        if(report) { _fun00004_ip = 103; continue _fun00003 }
 65:
                        report = oscard.can;
                        option = _closure1_slot0;
                        offset = _closure1_slot1;
                        tangon = 2;
                        tangon = offset[tangon];
                        tangon = option.bind(verify)(tangon);
                        tangon = tangon.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                        michal = report.bind(oscard)(tangon, golfie);
 103:
                        if(!michal) { _fun00004_ip = 116; continue _fun00003 }
 106:
                        michal = entity.push;
                        michal = michal.bind(entity)(zuuluu);
 116:
                        return entity;
                    }
                };
                entity = new Array(0);
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = tangon.bind(report)(zuuluu, entity, michal);
            return entity;
        }
    };
    zuuluu['useChannelsUserCanStartStageIn'] = michal;
    return entity;
})();