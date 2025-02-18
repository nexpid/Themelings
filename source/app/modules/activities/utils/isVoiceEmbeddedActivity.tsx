// app/modules/activities/utils/isVoiceEmbeddedActivity.tsx
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
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/utils/isVoiceEmbeddedActivity.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: isVoiceEmbeddedActivity
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = arguments[1];
            michal = arguments[2];
            verify = undefined;
            if(!(tangon === verify)) { _fun00002_ip = 19; continue _fun00001 }
 12:
            tangon = _closure1_slot3;
 19:
            if(!(michal === verify)) { _fun00002_ip = 30; continue _fun00001 }
 23:
            michal = _closure1_slot4;
 30:
            zuuluu = tangon.getChannel;
            entity = argFoo;
            golfie = zuuluu.bind(tangon)(entity);
            entity = michal.getVoiceChannelId;
            option = entity.bind(michal)();
            oscard = null;
            entity = oscard != golfie;
            if(!entity) { _fun00002_ip = 194; continue _fun00001 }
 65:
            zuuluu = golfie.type;
            tangon = _closure1_slot0;
            offset = _closure1_slot1;
            michal = 4;
            michal = offset[michal];
            michal = tangon.bind(verify)(michal);
            michal = michal.ChannelTypes;
            michal = michal.GUILD_VOICE;
            michal = zuuluu === michal;
            if(michal) { _fun00002_ip = 191; continue _fun00001 }
 112:
            zuuluu = golfie.isPrivate;
            zuuluu = zuuluu.bind(golfie)();
            tangon = !zuuluu;
            zuuluu = !tangon;
            if(tangon) { _fun00002_ip = 188; continue _fun00001 }
 131:
            tangon = golfie.id;
            tangon = tangon === option;
            if(tangon) { _fun00002_ip = 185; continue _fun00001 }
 143:
            verify = _closure1_slot5;
            option = verify.getVoiceStatesForChannel;
            golfie = golfie.id;
            golfie = option.bind(verify)(golfie);
            option = _closure1_slot2;
            report = option.getId;
            report = report.bind(option)();
            report = golfie[report];
            tangon = oscard != report;
 185:
            zuuluu = tangon;
 188:
            michal = zuuluu;
 191:
            entity = michal;
 194:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();