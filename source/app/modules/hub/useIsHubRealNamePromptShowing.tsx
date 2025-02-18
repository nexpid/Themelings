// app/modules/hub/useIsHubRealNamePromptShowing.tsx
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
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildFeatures;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildPrompts;
    var _closure1_slot9 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/hub/useIsHubRealNamePromptShowing.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useIsHubRealNamePromptShowing
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        michal = 7;
        tangon = tangon[michal];
        michal = undefined;
        golfie = report.bind(michal)(tangon);
        report = golfie.useStateFromStores;
        michal = _closure1_slot6;
        tangon = new Array(4);
        tangon[0] = michal;
        michal = _closure1_slot4;
        tangon[1] = michal;
        michal = _closure1_slot7;
        tangon[2] = michal;
        michal = _closure1_slot5;
        tangon[3] = michal;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot6;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                zuuluu = michal.bind(zuuluu)(entity);
                entity = null;
                oscard = entity == zuuluu;
                report = undefined;
                if(oscard) { _fun00002_ip = 56; continue _fun00001 }
 35:
                golfie = zuuluu.hasFeature;
                oscard = _closure1_slot8;
                oscard = oscard.HUB;
                report = golfie.bind(zuuluu)(oscard);
 56:
                oscard = true;
                if(!(oscard === report)) { _fun00002_ip = 176; continue _fun00001 }
 62:
                verify = _closure1_slot4;
                option = verify.hasViewedPrompt;
                report = _closure1_slot9;
                golfie = report.REAL_NAME_PROMPT;
                report = zuuluu.id;
                report = option.bind(verify)(golfie, report);
                if(!(oscard !== report)) { _fun00002_ip = 174; continue _fun00001 }
 99:
                oscard = _closure1_slot7;
                report = oscard.getCurrentUser;
                golfie = report.bind(oscard)();
                if(!(entity != golfie)) { _fun00002_ip = 172; continue _fun00001 }
 116:
                oscard = _closure1_slot5;
                report = oscard.getMember;
                tangon = zuuluu.id;
                option = entity == golfie;
                zuuluu = undefined;
                if(option) { _fun00002_ip = 145; continue _fun00001 }
 140:
                zuuluu = golfie.id;
 145:
                zuuluu = report.bind(oscard)(tangon, zuuluu);
                tangon = entity == zuuluu;
                michal = undefined;
                if(tangon) { _fun00002_ip = 166; continue _fun00001 }
 160:
                michal = zuuluu.nick;
 166:
                michal = entity == michal;
                return michal;
 172:
                return entity;
 174:
                return entity;
 176:
                return entity;
            }
        };
        michal = report.bind(golfie)(tangon, michal);
        var _closure2_slot1 = michal;
        report = _closure1_slot3;
        tangon = report.useEffect;
        zuuluu = new Array(2);
        zuuluu[0] = michal;
        zuuluu[1] = oscard;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = _closure2_slot0;
                tangon = null;
                michal = tangon != michal;
                if(!michal) { _fun00004_ip = 24; continue _fun00003 }
 16:
                zuuluu = _closure2_slot1;
                michal = tangon != zuuluu;
 24:
                if(!michal) { _fun00004_ip = 85; continue _fun00003 }
 27:
                michal = _closure2_slot1;
                if(michal) { _fun00004_ip = 85; continue _fun00003 }
 34:
                report = _closure1_slot1;
                tangon = _closure1_slot2;
                zuuluu = 8;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                tangon = report.bind(zuuluu)(tangon);
                zuuluu = tangon.viewPrompt;
                michal = _closure1_slot9;
                michal = michal.REAL_NAME_PROMPT;
                entity = _closure2_slot0;
                entity = zuuluu.bind(tangon)(michal, entity);
 85:
                entity = undefined;
                return entity;
            }
        };
        entity = tangon.bind(report)(entity, zuuluu);
        entity = true;
        entity = entity === michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();