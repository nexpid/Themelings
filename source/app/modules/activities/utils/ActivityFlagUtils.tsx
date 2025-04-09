// app/modules/activities/utils/ActivityFlagUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: computeActivityPartyPrivacyFlags
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            entity = 3;
            zuuluu = golfie[entity];
            tangon = undefined;
            zuuluu = oscard.bind(tangon)(zuuluu);
            option = zuuluu.AllowActivityPartyPrivacyFriends;
            zuuluu = option.getSetting;
            zuuluu = zuuluu.bind(option)();
            entity = golfie[entity];
            entity = oscard.bind(tangon)(entity);
            tangon = entity.AllowActivityPartyPrivacyVoiceChannel;
            entity = tangon.getSetting;
            entity = entity.bind(tangon)();
            tangon = _closure1_slot2;
            if(zuuluu) { _fun00002_ip = 91; continue _fun00001 }
 76:
            zuuluu = tangon.PARTY_PRIVACY_VOICE_CHANNEL;
            zuuluu = ~zuuluu;
            zuuluu = report & zuuluu;
            _fun00002_ip = 101; continue _fun00001;
 91:
            tangon = tangon.PARTY_PRIVACY_FRIENDS;
            zuuluu = report | tangon;
 101:
            michal = _closure1_slot2;
            michal = michal.PARTY_PRIVACY_VOICE_CHANNEL;
            if(entity) { _fun00002_ip = 123; continue _fun00001 }
 114:
            entity = ~michal;
            entity = zuuluu & entity;
            _fun00002_ip = 127; continue _fun00001;
 123:
            entity = zuuluu | michal;
 127:
            return entity;
        }
    };
    var _closure1_slot4 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    option = report.ActivityFlags;
    var _closure1_slot2 = option;
    report = report.ActivityPartyPrivacy;
    var _closure1_slot3 = report;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/activities/utils/ActivityFlagUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar, argBaz) { // Original name: maybeReapplyVoiceChannelPrivacyFlagForContextless
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            report = argBar;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            oscard = 1;
            michal = michal[oscard];
            golfie = undefined;
            option = tangon.bind(golfie)(michal);
            tangon = option.hasFlag;
            michal = _closure1_slot2;
            michal = michal.CONTEXTLESS;
            michal = tangon.bind(option)(entity, michal);
            if(!michal) { _fun00004_ip = 171; continue _fun00003 }
 56:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[oscard];
            oscard = tangon.bind(golfie)(michal);
            tangon = oscard.hasFlag;
            michal = _closure1_slot2;
            michal = michal.PARTY_PRIVACY_VOICE_CHANNEL;
            michal = tangon.bind(oscard)(entity, michal);
            if(michal) { _fun00004_ip = 171; continue _fun00003 }
 98:
            tangon = null;
            if(!(tangon != report)) { _fun00004_ip = 171; continue _fun00003 }
 104:
            oscard = _closure1_slot0;
            option = _closure1_slot1;
            michal = 2;
            michal = option[michal];
            golfie = oscard.bind(golfie)(michal);
            oscard = golfie.getStartingChannelIdForContextlessInstanceId;
            michal = argBaz;
            michal = oscard.bind(golfie)(michal);
            tangon = tangon != michal;
            if(!tangon) { _fun00004_ip = 149; continue _fun00003 }
 145:
            tangon = michal === report;
 149:
            michal = entity;
            if(!tangon) { _fun00004_ip = 169; continue _fun00003 }
 155:
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.PARTY_PRIVACY_VOICE_CHANNEL;
            michal = entity | zuuluu;
 169:
            return michal;
 171:
            return entity;
        }
    };
    zuuluu['maybeReapplyVoiceChannelPrivacyFlagForContextless'] = report;
    zuuluu['computeActivityPartyPrivacyFlags'] = tangon;
    michal = function(argFoo) { // Original name: computeActivityFlags
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zuuluu = arguments[1];
            tangon = undefined;
            if(!(zuuluu === tangon)) { _fun00006_ip = 14; continue _fun00005 }
 12:
            zuuluu = false;
 14:
            michal = entity.instance;
            report = entity.secrets;
            entity = entity.party;
            golfie = 0;
            if(!michal) { _fun00006_ip = 53; continue _fun00005 }
 37:
            michal = _closure1_slot2;
            michal = michal.INSTANCE;
            golfie = michal | 0;
 53:
            michal = null;
            option = michal == report;
            oscard = undefined;
            if(option) { _fun00006_ip = 69; continue _fun00005 }
 64:
            oscard = report.join;
 69:
            report = golfie;
            if(!(michal != oscard)) { _fun00006_ip = 93; continue _fun00005 }
 76:
            oscard = _closure1_slot2;
            oscard = oscard.JOIN;
            report = golfie | oscard;
 93:
            if(zuuluu) { _fun00006_ip = 194; continue _fun00005 }
 96:
            michal = michal == entity;
            zuuluu = undefined;
            if(michal) { _fun00006_ip = 111; continue _fun00005 }
 105:
            zuuluu = entity.privacy;
 111:
            entity = _closure1_slot3;
            entity = entity.PUBLIC;
            zuuluu = zuuluu === entity;
            if(zuuluu) { _fun00006_ip = 173; continue _fun00005 }
 131:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            entity = 4;
            entity = golfie[entity];
            entity = oscard.bind(tangon)(entity);
            golfie = entity.Storage;
            oscard = golfie.get;
            entity = 'ACTIVITIES_FORCE_PUBLIC';
            zuuluu = oscard.bind(golfie)(entity);
 173:
            entity = report;
            if(!zuuluu) { _fun00006_ip = 192; continue _fun00005 }
 179:
            michal = _closure1_slot4;
            michal = michal.bind(tangon)(report);
            entity = report | michal;
 192:
            _fun00006_ip = 224; continue _fun00005;
 194:
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.EMBEDDED;
            zuuluu = report | zuuluu;
            michal = _closure1_slot4;
            michal = michal.bind(tangon)(zuuluu);
            entity = zuuluu | michal;
 224:
            return entity;
        }
    };
    zuuluu['computeActivityFlags'] = michal;
    return entity;
})();