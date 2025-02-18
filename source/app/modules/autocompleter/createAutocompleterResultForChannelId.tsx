// app/modules/autocompleter/createAutocompleterResultForChannelId.tsx
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AutocompleterResultTypes;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelTypes;
    var _closure1_slot6 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/autocompleter/createAutocompleterResultForChannelId.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: createAutocompleterResultForChannelId
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = arguments[1];
            report = arguments[2];
            tangon = arguments[3];
            option = undefined;
            if(!(zuuluu === option)) { _fun00002_ip = 22; continue _fun00001 }
 15:
            zuuluu = _closure1_slot2;
 22:
            if(!(report === option)) { _fun00002_ip = 33; continue _fun00001 }
 26:
            report = _closure1_slot4;
 33:
            if(!(tangon === option)) { _fun00002_ip = 44; continue _fun00001 }
 37:
            tangon = _closure1_slot3;
 44:
            michal = zuuluu.getChannel;
            entity = argFoo;
            golfie = michal.bind(zuuluu)(entity);
            entity = null;
            if(!(entity != golfie)) { _fun00002_ip = 339; continue _fun00001 }
 66:
            zuuluu = _closure1_slot0;
            verify = _closure1_slot1;
            michal = 5;
            michal = verify[michal];
            zuuluu = zuuluu.bind(option)(michal);
            michal = zuuluu.computeChannelName;
            tangon = michal.bind(zuuluu)(golfie, report, tangon);
            zuuluu = golfie.type;
            michal = _closure1_slot6;
            michal = michal.DM;
            if(!(michal !== zuuluu)) { _fun00002_ip = 271; continue _fun00001 }
 124:
            michal = _closure1_slot6;
            michal = michal.GROUP_DM;
            if(!(michal !== zuuluu)) { _fun00002_ip = 236; continue _fun00001 }
 138:
            michal = _closure1_slot6;
            michal = michal.GUILD_VOICE;
            if(!(michal !== zuuluu)) { _fun00002_ip = 201; continue _fun00001 }
 152:
            michal = _closure1_slot6;
            michal = michal.GUILD_STAGE_VOICE;
            if(!(michal !== zuuluu)) { _fun00002_ip = 201; continue _fun00001 }
 166:
            michal = {};
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.TEXT_CHANNEL;
            michal['type'] = zuuluu;
            michal['record'] = golfie;
            zuuluu = 0;
            michal['score'] = zuuluu;
            michal['comparator'] = tangon;
            return michal;
 201:
            michal = {};
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.VOICE_CHANNEL;
            michal['type'] = zuuluu;
            michal['record'] = golfie;
            zuuluu = 0;
            michal['score'] = zuuluu;
            michal['comparator'] = tangon;
            return michal;
 236:
            michal = {};
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.GROUP_DM;
            michal['type'] = zuuluu;
            michal['record'] = golfie;
            zuuluu = 0;
            michal['score'] = zuuluu;
            michal['comparator'] = tangon;
            return michal;
 271:
            zuuluu = report.getUser;
            michal = golfie.getRecipientId;
            michal = michal.bind(golfie)();
            report = zuuluu.bind(report)(michal);
            zuuluu = entity == report;
            michal = null;
            if(zuuluu) { _fun00002_ip = 337; continue _fun00001 }
 301:
            zuuluu = {};
            oscard = _closure1_slot5;
            oscard = oscard.USER;
            zuuluu['type'] = oscard;
            zuuluu['record'] = report;
            report = 0;
            zuuluu['score'] = report;
            zuuluu['comparator'] = tangon;
            michal = zuuluu;
 337:
            return michal;
 339:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();