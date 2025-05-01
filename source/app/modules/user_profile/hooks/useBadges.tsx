// app/modules/user_profile/hooks/useBadges.tsx
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
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/hooks/useBadges.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useBadges
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            zuuluu = argBar;
            golfie = _closure1_slot0;
            oscard = _closure1_slot1;
            tangon = 2;
            tangon = oscard[tangon];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            golfie = tangon.LegacyUsernameDisabled;
            tangon = golfie.useSetting;
            tangon = tangon.bind(golfie)();
            if(!(oscard !== zuuluu)) { _fun00002_ip = 56; continue _fun00001 }
 53:
            tangon = zuuluu;
 56:
            option = _closure1_slot0;
            verify = _closure1_slot1;
            zuuluu = 3;
            golfie = verify[zuuluu];
            romeon = option.bind(oscard)(golfie);
            yankee = romeon.useStateFromStores;
            golfie = _closure1_slot3;
            offset = new Array(1);
            offset[0] = golfie;
            golfie = function() {
                michal = _closure1_slot3;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            golfie = yankee.bind(romeon)(offset, golfie);
            zuuluu = verify[zuuluu];
            verify = option.bind(oscard)(zuuluu);
            option = verify.useStateFromStores;
            entity = _closure1_slot2;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                entity = _closure1_slot2;
                entity = entity.hidePersonalInformation;
                return entity;
            };
            zuuluu = option.bind(verify)(zuuluu, entity);
            entity = null;
            if(!(entity != report)) { _fun00002_ip = 245; continue _fun00001 }
 147:
            option = entity == report;
            oscard = undefined;
            if(option) { _fun00002_ip = 166; continue _fun00001 }
 156:
            option = report.getBadges;
            oscard = option.bind(report)();
 166:
            if(!(entity == oscard)) { _fun00002_ip = 174; continue _fun00001 }
 170:
            oscard = new Array(0);
 174:
            entity = entity != golfie;
            if(!entity) { _fun00002_ip = 195; continue _fun00001 }
 181:
            golfie = golfie.id;
            report = report.userId;
            entity = golfie === report;
 195:
            if(!entity) { _fun00002_ip = 201; continue _fun00001 }
 198:
            entity = tangon;
 201:
            tangon = oscard;
            if(!entity) { _fun00002_ip = 222; continue _fun00001 }
 207:
            report = oscard.filter;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = 'legacy_username';
                entity = michal !== entity;
                return entity;
            };
            tangon = report.bind(oscard)(entity);
 222:
            entity = tangon;
            if(!zuuluu) { _fun00002_ip = 243; continue _fun00001 }
 228:
            zuuluu = tangon.map;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    entity = {};
                    offset = entity;
                    verify = michal;
                    zuuluu = copyDataProperties(offset, verify);
                    tangon = michal.id;
                    zuuluu = 'legacy_username';
                    if(!(tangon !== zuuluu)) { _fun00004_ip = 35; continue _fun00003 }
 28:
                    zuuluu = michal.description;
                    _fun00004_ip = 97; continue _fun00003;
 35:
                    golfie = _closure1_slot0;
                    option = _closure1_slot1;
                    michal = 4;
                    tangon = option[michal];
                    oscard = undefined;
                    tangon = golfie.bind(oscard)(tangon);
                    report = tangon.intl;
                    tangon = report.string;
                    michal = option[michal];
                    michal = golfie.bind(oscard)(michal);
                    michal = michal.t;
                    michal = michal.Br1ls7;
                    zuuluu = tangon.bind(report)(michal);
 97:
                    michal = 'description';
                    entity[michal] = zuuluu;
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal);
 243:
            return entity;
 245:
            entity = new Array(0);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    michal = 'quest_completed';
    zuuluu['QUEST_COMPLETED_BADGE'] = michal;
    return entity;
})();