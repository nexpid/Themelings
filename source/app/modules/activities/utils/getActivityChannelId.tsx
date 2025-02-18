// app/modules/activities/utils/getActivityChannelId.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.isTextChannel;
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/utils/getActivityChannelId.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getActivityChannelId
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscard = entity.channelId;
            golfie = entity.userId;
            option = entity.activity;
            michal = _closure1_slot1;
            entity = michal.getChannel;
            report = entity.bind(michal)(oscard);
            zuuluu = null;
            michal = zuuluu == option;
            entity = undefined;
            verify = undefined;
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            verify = option.session_id;
 55:
            michal = oscard;
            if(!(zuuluu != verify)) { _fun00002_ip = 134; continue _fun00001 }
 62:
            if(!(zuuluu != report)) { _fun00002_ip = 86; continue _fun00001 }
 66:
            verify = _closure1_slot0;
            report = report.type;
            report = verify.bind(entity)(report);
            michal = oscard;
            if(report) { _fun00002_ip = 134; continue _fun00001 }
 86:
            oscard = _closure1_slot2;
            report = oscard.getVoiceStateForSession;
            verify = zuuluu == option;
            tangon = undefined;
            if(verify) { _fun00002_ip = 111; continue _fun00001 }
 105:
            tangon = option.session_id;
 111:
            report = report.bind(oscard)(golfie, tangon);
            oscard = zuuluu == report;
            tangon = undefined;
            if(oscard) { _fun00002_ip = 131; continue _fun00001 }
 126:
            tangon = report.channelId;
 131:
            michal = tangon;
 134:
            zuuluu = zuuluu != michal;
            entity = undefined;
            if(!zuuluu) { _fun00002_ip = 146; continue _fun00001 }
 143:
            entity = michal;
 146:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();