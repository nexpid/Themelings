// app/modules/voice_calls/collectCallFeedback.tsx
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
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_calls/collectCallFeedback.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz, argCor) { // Original name: collectCallFeedback
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot7;
            michal = zuuluu.getVoiceChannelId;
            michal = michal.bind(zuuluu)();
            report = _closure1_slot4;
            zuuluu = report.getChannel;
            oscard = zuuluu.bind(report)(michal);
            report = null;
            zuuluu = argBar;
            if(!(report == zuuluu)) { _fun00002_ip = 51; continue _fun00001 }
 43:
            if(!(report != michal)) { _fun00002_ip = 51; continue _fun00001 }
 47:
            if(!(report == oscard)) { _fun00002_ip = 62; continue _fun00001 }
 51:
            michal = undefined;
            michal = tangon.bind(michal)();
            _fun00002_ip = 525; continue _fun00001;
 62:
            michal = {};
            zuuluu = oscard.id;
            michal['channel_id'] = zuuluu;
            zuuluu = oscard.type;
            michal['channel_type'] = zuuluu;
            zuuluu = oscard.getGuildId;
            zuuluu = zuuluu.bind(oscard)();
            michal['guild_id'] = zuuluu;
            golfie = _closure1_slot6;
            zuuluu = golfie.getRTCConnectionId;
            zuuluu = zuuluu.bind(golfie)();
            michal['rtc_connection_id'] = zuuluu;
            zuuluu = golfie.getDuration;
            zuuluu = zuuluu.bind(golfie)();
            michal['duration'] = zuuluu;
            zuuluu = golfie.getMediaSessionId;
            zuuluu = zuuluu.bind(golfie)();
            michal['media_session_id'] = zuuluu;
            option = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 6;
            oscard = oscard[zuuluu];
            zuuluu = undefined;
            offset = option.bind(zuuluu)(oscard);
            verify = offset.getVoiceStateMetadata;
            oscard = golfie.getGuildId;
            option = oscard.bind(golfie)();
            oscard = golfie.getChannelId;
            golfie = oscard.bind(golfie)();
            oscard = argCor;
            romeon = verify.bind(offset)(option, golfie, oscard);
            foxtra = michal;
            oscard = copyDataProperties(foxtra, romeon);
            tangon = tangon.bind(zuuluu)();
            tangon = _closure1_slot3;
            tangon = tangon.hasUsedBackgroundInCall;
            if(tangon) { _fun00002_ip = 281; continue _fun00001 }
 229:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            tangon = 9;
            tangon = golfie[tangon];
            golfie = oscard.bind(zuuluu)(tangon);
            oscard = golfie.dispatch;
            tangon = {};
            option = 'VOICE_CHANNEL_SHOW_FEEDBACK';
            tangon['type'] = option;
            tangon['analyticsData'] = michal;
            tangon = oscard.bind(golfie)(tangon);
            _fun00002_ip = 525; continue _fun00001;
 281:
            tangon = {};
            foxtra = tangon;
            romeon = michal;
            michal = copyDataProperties(foxtra, romeon);
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 7;
            michal = golfie[michal];
            golfie = oscard.bind(zuuluu)(michal);
            oscard = golfie.getLastUsedVideoBackgroundOption;
            option = _closure1_slot8;
            michal = option.getCurrentUser;
            michal = michal.bind(option)();
            option = oscard.bind(golfie)(michal);
            michal = {};
            verify = _closure1_slot5;
            oscard = verify.getVideoDevices;
            golfie = oscard.bind(verify)();
            oscard = verify.getVideoDeviceId;
            oscard = oscard.bind(verify)();
            oscard = golfie[oscard];
            golfie = report == oscard;
            report = undefined;
            if(golfie) { _fun00002_ip = 381; continue _fun00001 }
 376:
            report = oscard.name;
 381:
            michal['video_device_name'] = report;
            oscard = _closure1_slot5;
            report = oscard.getHardwareEncoding;
            report = report.bind(oscard)();
            michal['video_hardware_scaling_enabled'] = report;
            golfie = _closure1_slot0;
            report = _closure1_slot2;
            oscard = 8;
            verify = report[oscard];
            offset = golfie.bind(zuuluu)(verify);
            verify = offset.getEffectAnalyticsType;
            verify = verify.bind(offset)(option);
            michal['video_effect_type'] = verify;
            oscard = report[oscard];
            golfie = golfie.bind(zuuluu)(oscard);
            oscard = golfie.getEffectDetailAnalyticsName;
            oscard = oscard.bind(golfie)(option);
            michal['video_effect_detail'] = oscard;
            foxtra = tangon;
            romeon = michal;
            michal = copyDataProperties(foxtra, romeon);
            michal = _closure1_slot1;
            entity = 9;
            entity = report[entity];
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.dispatch;
            entity = {};
            report = 'VIDEO_BACKGROUND_SHOW_FEEDBACK';
            entity['type'] = report;
            entity['analyticsData'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 525:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();