// app/modules/soundboard/trackSoundPlayed.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticsPremiumFeatureNames;
    var _closure1_slot8 = golfie;
    tangon = tangon.AnalyticsPremiumFeatureTiers;
    var _closure1_slot9 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/soundboard/trackSoundPlayed.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz, argCor) { // Original name: trackSoundPlayed
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argBaz;
            zuuluu = _closure1_slot3;
            michal = zuuluu.getChannel;
            tangon = _closure1_slot5;
            entity = tangon.getVoiceChannelId;
            entity = entity.bind(tangon)();
            zuuluu = michal.bind(zuuluu)(entity);
            verify = null;
            michal = verify == zuuluu;
            entity = undefined;
            romeon = undefined;
            if(michal) { _fun00002_ip = 57; continue _fun00001 }
 47:
            michal = zuuluu.getGuildId;
            romeon = michal.bind(zuuluu)();
 57:
            zuuluu = _closure1_slot4;
            michal = zuuluu.getMediaSessionId;
            offset = michal.bind(zuuluu)();
            michal = zuuluu.getRTCConnectionId;
            yankee = michal.bind(zuuluu)();
            zuuluu = _closure1_slot2;
            michal = zuuluu.getCurrentGameForAnalytics;
            michal = michal.bind(zuuluu)();
            zuuluu = verify == michal;
            option = undefined;
            if(zuuluu) { _fun00002_ip = 109; continue _fun00001 }
 104:
            option = michal.name;
 109:
            michal = oscard.guildId;
            foxtra = romeon !== michal;
            if(!foxtra) { _fun00002_ip = 134; continue _fun00001 }
 121:
            zuuluu = oscard.guildId;
            michal = _closure1_slot6;
            foxtra = zuuluu !== michal;
 134:
            zuuluu = oscard.guildId;
            michal = _closure1_slot6;
            golfie = 'default';
            if(!(zuuluu !== michal)) { _fun00002_ip = 167; continue _fun00001 }
 151:
            michal = 'custom';
            if(!foxtra) { _fun00002_ip = 164; continue _fun00001 }
 158:
            michal = 'custom-external';
 164:
            golfie = michal;
 167:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 7;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.track;
            michal = _closure1_slot7;
            zuuluu = michal.PREMIUM_FEATURE_USAGE;
            michal = {};
            kiloes = _closure1_slot8;
            kiloes = kiloes.SOUNDBOARD_PLAY;
            michal['feature_name'] = kiloes;
            backup = _closure1_slot9;
            if(foxtra) { _fun00002_ip = 234; continue _fun00001 }
 226:
            foxtra = backup.FREE;
            _fun00002_ip = 240; continue _fun00001;
 234:
            foxtra = backup.PREMIUM_STANDARD;
 240:
            michal['feature_tier'] = foxtra;
            michal['guild_id'] = romeon;
            romeon = argFoo;
            michal['location_stack'] = romeon;
            michal['rtc_connection_id'] = yankee;
            michal['media_session_id'] = offset;
            offset = argBar;
            michal['in_overlay'] = offset;
            michal['application_name'] = option;
            option = oscard.emojiId;
            if(!(verify == option)) { _fun00002_ip = 307; continue _fun00001 }
 292:
            option = oscard.emojiName;
            verify = verify != option;
            option = 0;
            if(!verify) { _fun00002_ip = 310; continue _fun00001 }
 307:
            option = 1;
 310:
            michal['emoji_count'] = option;
            michal['feature_selection'] = golfie;
            oscard = oscard.soundId;
            michal['feature_selection_id'] = oscard;
            oscard = argCor;
            michal['sound_type'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();