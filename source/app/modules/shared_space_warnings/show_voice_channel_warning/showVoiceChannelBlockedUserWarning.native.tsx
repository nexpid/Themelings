// app/modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx
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
    tangon = report.bind(entity)(tangon);
    golfie = tangon.queueBlockWarning;
    var _closure1_slot4 = golfie;
    tangon = tangon.dequeueBlockWarning;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.VoiceChannelWarningSurfaces;
    var _closure1_slot6 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: showVoiceChannelBlockedUserWarning
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = argFoo;
            verify = argBar;
            michal = _closure1_slot3;
            entity = michal.getState;
            zuuluu = entity.bind(michal)();
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            michal = michal.AppStates;
            michal = michal.ACTIVE;
            if(!(zuuluu !== michal)) { _fun00002_ip = 74; continue _fun00001 }
 61:
            michal = _closure1_slot4;
            michal = michal.bind(entity)();
            _fun00002_ip = 234; continue _fun00001;
 74:
            michal = _closure1_slot5;
            michal = michal.bind(entity)();
            zuuluu = _closure1_slot1;
            yankee = _closure1_slot2;
            michal = 4;
            michal = yankee[michal];
            oscard = zuuluu.bind(entity)(michal);
            report = oscard.openLazy;
            offset = _closure1_slot0;
            michal = 6;
            michal = yankee[michal];
            tangon = offset.bind(entity)(michal);
            michal = 5;
            zuuluu = yankee[michal];
            michal = yankee.paths;
            tangon = tangon.bind(entity)(zuuluu, michal);
            zuuluu = {};
            zuuluu['channelId'] = option;
            zuuluu['blockedUserId'] = verify;
            michal = 7;
            michal = yankee[michal];
            michal = offset.bind(entity)(michal);
            michal = michal.ImpressionNames;
            michal = michal.VOICE_CHANNEL_BLOCKED_USER_WARNING;
            zuuluu['impressionName'] = michal;
            michal = {};
            michal['channel_id'] = option;
            option = new Array(1);
            option[0] = verify;
            michal['blocked_user_ids'] = option;
            golfie = _closure1_slot6;
            golfie = golfie.POST_JOIN_SHEET;
            michal['warning_surface'] = golfie;
            zuuluu['impressionProperties'] = michal;
            michal = 'gdm_blocked_user_action_sheet';
            michal = report.bind(oscard)(tangon, michal, zuuluu);
 234:
            return entity;
        }
    };
    zuuluu['showVoiceChannelBlockedUserWarning'] = michal;
    return entity;
})();