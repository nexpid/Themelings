// app/modules/user_profile/hooks/useUserProfileVoiceActivity.tsx
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
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/hooks/useUserProfileVoiceActivity.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useUserProfileVoiceActivity
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            report = michal.userId;
            var _closure2_slot0 = report;
            tangon = michal.guildId;
            oscard = undefined;
            var _closure2_slot1 = oscard;
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            michal = 2;
            michal = option[michal];
            zuuluu = zuuluu.bind(oscard)(michal);
            michal = {};
            michal['userId'] = report;
            michal['guildId'] = tangon;
            michal = zuuluu.bind(oscard)(michal);
            tangon = michal.voiceState;
            zuuluu = michal.voiceChannel;
            michal = null;
            report = michal == zuuluu;
            michal = undefined;
            if(report) { _fun00002_ip = 91; continue _fun00001 }
 86:
            michal = zuuluu.id;
 91:
            _closure2_slot1 = michal;
            report = _closure1_slot0;
            option = _closure1_slot2;
            michal = 3;
            michal = option[michal];
            oscard = report.bind(oscard)(michal);
            report = oscard.useStateFromStores;
            option = _closure1_slot3;
            michal = new Array(2);
            michal[0] = option;
            golfie = _closure1_slot4;
            michal[1] = golfie;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00004_ip = 21; continue _fun00003 }
 13:
                    zuuluu = _closure2_slot1;
                    if(!(entity == zuuluu)) { _fun00004_ip = 25; continue _fun00003 }
 21:
                    zuuluu = undefined;
                    return zuuluu;
 25:
                    report = _closure1_slot3;
                    tangon = report.findActivity;
                    zuuluu = _closure2_slot0;
                    michal = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            zuuluu = argFoo;
                            report = _closure1_slot1;
                            tangon = _closure1_slot2;
                            michal = 4;
                            tangon = tangon[michal];
                            michal = undefined;
                            tangon = report.bind(michal)(tangon);
                            tangon = tangon.bind(michal)(zuuluu);
                            if(tangon) { _fun00006_ip = 40; continue _fun00005 }
 36:
                            tangon = false;
                            return tangon;
 40:
                            oscard = _closure1_slot4;
                            report = oscard.getVoiceStateForSession;
                            tangon = _closure2_slot0;
                            zuuluu = zuuluu.session_id;
                            zuuluu = report.bind(oscard)(tangon, zuuluu);
                            tangon = null;
                            tangon = tangon == zuuluu;
                            michal = undefined;
                            if(tangon) { _fun00006_ip = 85; continue _fun00005 }
 80:
                            michal = zuuluu.channelId;
 85:
                            entity = _closure2_slot1;
                            entity = michal === entity;
                            return entity;
                        }
                    };
                    michal = tangon.bind(report)(zuuluu, michal);
                    zuuluu = entity != michal;
                    entity = undefined;
                    if(!zuuluu) { _fun00004_ip = 69; continue _fun00003 }
 66:
                    entity = michal;
 69:
                    return entity;
                }
            };
            michal = report.bind(oscard)(michal, entity);
            entity = {};
            entity['voiceState'] = tangon;
            entity['voiceChannel'] = zuuluu;
            entity['voiceActivity'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();