// app/modules/activities/utils/ActivityFlagUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo) { // Original name: computeActivityPartyPrivacyFlags
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
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
            tangon = _closure1_slot3;
            tangon = tangon.PARTY_PRIVACY_FRIENDS;
            if(zuuluu) { _fun00002_ip = 91; continue _fun00001 }
 82:
            zuuluu = ~tangon;
            zuuluu = report & zuuluu;
            _fun00002_ip = 95; continue _fun00001;
 91:
            zuuluu = report | tangon;
 95:
            michal = _closure1_slot3;
            michal = michal.PARTY_PRIVACY_VOICE_CHANNEL;
            if(entity) { _fun00002_ip = 117; continue _fun00001 }
 108:
            entity = ~michal;
            entity = zuuluu & entity;
            _fun00002_ip = 121; continue _fun00001;
 117:
            entity = zuuluu | michal;
 121:
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
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
    var _closure1_slot3 = option;
    report = report.ActivityPartyPrivacy;
    var _closure1_slot4 = report;
    report = 6;
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
            michal = _closure1_slot2;
            oscard = 1;
            michal = michal[oscard];
            golfie = undefined;
            option = tangon.bind(golfie)(michal);
            tangon = option.hasFlag;
            michal = _closure1_slot3;
            michal = michal.CONTEXTLESS;
            michal = tangon.bind(option)(entity, michal);
            if(!michal) { _fun00004_ip = 171; continue _fun00003 }
 56:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            oscard = tangon.bind(golfie)(michal);
            tangon = oscard.hasFlag;
            michal = _closure1_slot3;
            michal = michal.PARTY_PRIVACY_VOICE_CHANNEL;
            michal = tangon.bind(oscard)(entity, michal);
            if(michal) { _fun00004_ip = 171; continue _fun00003 }
 98:
            tangon = null;
            if(!(tangon != report)) { _fun00004_ip = 171; continue _fun00003 }
 104:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
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
            zuuluu = _closure1_slot3;
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
    tangon = function(argFoo) { // Original name: computeActivityFlags
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
            michal = _closure1_slot3;
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
            oscard = _closure1_slot3;
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
            entity = _closure1_slot4;
            entity = entity.PUBLIC;
            zuuluu = zuuluu === entity;
            if(zuuluu) { _fun00006_ip = 173; continue _fun00005 }
 131:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
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
            michal = _closure1_slot5;
            michal = michal.bind(tangon)(report);
            entity = report | michal;
 192:
            _fun00006_ip = 224; continue _fun00005;
 194:
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.EMBEDDED;
            zuuluu = report | zuuluu;
            michal = _closure1_slot5;
            michal = michal.bind(tangon)(zuuluu);
            entity = zuuluu | michal;
 224:
            return entity;
        }
    };
    zuuluu['computeActivityFlags'] = tangon;
    michal = function(argFoo) { // Original name: isContextlessEmbeddedActivity
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 1;
            entity = zuuluu[entity];
            zuuluu = undefined;
            golfie = report.bind(zuuluu)(entity);
            oscard = golfie.hasFlag;
            report = null;
            option = report == tangon;
            entity = undefined;
            if(option) { _fun00008_ip = 50; continue _fun00007 }
 45:
            entity = tangon.flags;
 50:
            option = report != entity;
            report = 0;
            if(!option) { _fun00008_ip = 62; continue _fun00007 }
 59:
            report = entity;
 62:
            entity = _closure1_slot3;
            entity = entity.CONTEXTLESS;
            entity = oscard.bind(golfie)(report, entity);
            if(!entity) { _fun00008_ip = 106; continue _fun00007 }
 81:
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 5;
            michal = oscard[michal];
            michal = report.bind(zuuluu)(michal);
            entity = michal.bind(zuuluu)(tangon);
 106:
            return entity;
        }
    };
    zuuluu['isContextlessEmbeddedActivity'] = michal;
    return entity;
})();