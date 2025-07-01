// app/modules/main_tabs_v2/native/settings/utils/handleDisableAccount.tsx
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
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/utils/handleDisableAccount.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: handleDisableAccount
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = arguments[0];
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00002_ip = 13; continue _fun00001 }
 11:
            zuuluu = false;
 13:
            tangon = function() { // Original name: hasOwnedGuilds
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure1_slot4;
                    entity = tangon.getCurrentUser;
                    tangon = entity.bind(tangon)();
                    var _closure3_slot0 = tangon;
                    entity = null;
                    entity = entity != tangon;
                    if(!entity) { _fun00004_ip = 63; continue _fun00003 }
 31:
                    tangon = _closure1_slot3;
                    zuuluu = tangon.getGuildsArray;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = tangon.some;
                    michal = function(argFoo) {
                        entity = argFoo;
                        michal = entity.ownerId;
                        entity = _closure3_slot0;
                        entity = entity.id;
                        entity = michal === entity;
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(michal);
 63:
                    return entity;
                }
            };
            tangon = tangon.bind(entity)();
            if(tangon) { _fun00002_ip = 87; continue _fun00001 }
 27:
            if(zuuluu) { _fun00002_ip = 43; continue _fun00001 }
 30:
            zuuluu = function() { // Original name: getDisableAlertProps
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                zuuluu = 2;
                entity = option[zuuluu];
                oscard = undefined;
                entity = golfie.bind(oscard)(entity);
                tangon = entity.intl;
                michal = tangon.string;
                entity = option[zuuluu];
                entity = golfie.bind(oscard)(entity);
                entity = entity.t;
                entity = entity.CIGa+/;
                michal = michal.bind(tangon)(entity);
                entity = michal.toUpperCase;
                michal = entity.bind(michal)();
                entity = {};
                tangon = function(argFoo) { // Original name: onSubmit
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 3;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.disableAccount;
                    michal = argFoo;
                    entity = false;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                entity['onSubmit'] = tangon;
                tangon = option[zuuluu];
                tangon = golfie.bind(oscard)(tangon);
                report = tangon.intl;
                tangon = report.string;
                zuuluu = option[zuuluu];
                zuuluu = golfie.bind(oscard)(zuuluu);
                zuuluu = zuuluu.t;
                zuuluu = zuuluu.jf5GGR;
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.toUpperCase;
                zuuluu = zuuluu.bind(tangon)();
                entity['title'] = zuuluu;
                entity['placeholder'] = michal;
                michal = true;
                entity['closeOnSuccess'] = michal;
                return entity;
            };
            zuuluu = zuuluu.bind(entity)();
            _fun00002_ip = 54; continue _fun00001;
 43:
            michal = function() { // Original name: getDeleteAlertProps
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                zuuluu = 2;
                entity = option[zuuluu];
                oscard = undefined;
                entity = golfie.bind(oscard)(entity);
                tangon = entity.intl;
                michal = tangon.string;
                entity = option[zuuluu];
                entity = golfie.bind(oscard)(entity);
                entity = entity.t;
                entity = entity.CIGa+/;
                michal = michal.bind(tangon)(entity);
                entity = michal.toUpperCase;
                michal = entity.bind(michal)();
                entity = {};
                tangon = function(argFoo) { // Original name: onSubmit
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 3;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.disableAccount;
                    michal = argFoo;
                    entity = true;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                entity['onSubmit'] = tangon;
                tangon = option[zuuluu];
                tangon = golfie.bind(oscard)(tangon);
                report = tangon.intl;
                tangon = report.string;
                zuuluu = option[zuuluu];
                zuuluu = golfie.bind(oscard)(zuuluu);
                zuuluu = zuuluu.t;
                zuuluu = zuuluu.8lQ2ra;
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.toUpperCase;
                zuuluu = zuuluu.bind(tangon)();
                entity['title'] = zuuluu;
                entity['placeholder'] = michal;
                michal = true;
                entity['closeOnSuccess'] = michal;
                return entity;
            };
            zuuluu = michal.bind(entity)();
 54:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            michal = 4;
            michal = report[michal];
            michal = tangon.bind(entity)(michal);
            michal = michal.bind(entity)(zuuluu);
            _fun00002_ip = 230; continue _fun00001;
 87:
            option = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 2;
            report = tangon[zuuluu];
            report = option.bind(entity)(report);
            golfie = report.intl;
            oscard = golfie.string;
            report = tangon[zuuluu];
            report = option.bind(entity)(report);
            report = report.t;
            report = report.I5UrbW;
            oscard = oscard.bind(golfie)(report);
            report = tangon[zuuluu];
            report = option.bind(entity)(report);
            golfie = report.intl;
            report = golfie.string;
            zuuluu = tangon[zuuluu];
            zuuluu = option.bind(entity)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.UyVVam;
            report = report.bind(golfie)(zuuluu);
            zuuluu = _closure1_slot1;
            michal = 5;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.show;
            michal = {};
            michal['title'] = oscard;
            michal['body'] = report;
            michal = zuuluu.bind(tangon)(michal);
 230:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();