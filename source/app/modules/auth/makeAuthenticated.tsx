// app/modules/auth/makeAuthenticated.tsx
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
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.LoginStates;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/auth/makeAuthenticated.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: makeAuthenticated
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = arguments[2];
            var _closure2_slot0 = tangon;
            zuuluu = argBar;
            var _closure2_slot1 = zuuluu;
            zuuluu = undefined;
            if(!(michal === zuuluu)) { _fun00002_ip = 37; continue _fun00001 }
 25:
            zuuluu = {};
            report = true;
            zuuluu['passProps'] = report;
            michal = zuuluu;
 37:
            var _closure2_slot2 = michal;
            entity = function(argFoo) { // Original name: Authenticated
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    golfie = argFoo;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 4;
                    entity = tangon[entity];
                    report = undefined;
                    zuuluu = zuuluu.bind(report)(entity);
                    entity = zuuluu.isAuthenticated;
                    entity = entity.bind(zuuluu)();
                    if(entity) { _fun00004_ip = 189; continue _fun00003 }
 44:
                    zuuluu = _closure1_slot3;
                    entity = zuuluu.getLoginStatus;
                    zuuluu = entity.bind(zuuluu)();
                    entity = _closure1_slot4;
                    entity = entity.LOGGING_IN;
                    if(!(zuuluu !== entity)) { _fun00004_ip = 189; continue _fun00003 }
 72:
                    zuuluu = _closure1_slot3;
                    entity = zuuluu.allowLogoutRedirect;
                    entity = entity.bind(zuuluu)();
                    if(!entity) { _fun00004_ip = 189; continue _fun00003 }
 89:
                    tangon = _closure2_slot1;
                    entity = null;
                    if(!(entity == tangon)) { _fun00004_ip = 136; continue _fun00003 }
 102:
                    oscard = _closure1_slot5;
                    tangon = _closure1_slot1;
                    option = _closure1_slot2;
                    entity = 5;
                    entity = option[entity];
                    tangon = tangon.bind(report)(entity);
                    entity = {};
                    entity = oscard.bind(report)(tangon, entity);
                    _fun00004_ip = 187; continue _fun00003;
 136:
                    oscard = _closure1_slot5;
                    tangon = _closure2_slot1;
                    zuuluu = {};
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    option = 5;
                    option = offset[option];
                    verify = verify.bind(report)(option);
                    option = {};
                    option = oscard.bind(report)(verify, option);
                    zuuluu['renderRedirect'] = option;
                    entity = oscard.bind(report)(tangon, zuuluu);
 187:
                    _fun00004_ip = 236; continue _fun00003;
 189:
                    tangon = _closure1_slot5;
                    zuuluu = _closure2_slot0;
                    michal = {};
                    oscard = _closure2_slot2;
                    option = oscard.passProps;
                    oscard = null;
                    if(!option) { _fun00004_ip = 220; continue _fun00003 }
 217:
                    oscard = golfie;
 220:
                    romeon = michal;
                    yankee = oscard;
                    oscard = copyDataProperties(romeon, yankee);
                    entity = tangon.bind(report)(zuuluu, michal);
 236:
                    return entity;
                }
            };
            michal = tangon.displayName;
            zuuluu = null;
            if(!(zuuluu == michal)) { _fun00002_ip = 64; continue _fun00001 }
 59:
            michal = tangon.name;
 64:
            zuuluu = zuuluu != michal;
            report = '<Unknown>';
            if(!zuuluu) { _fun00002_ip = 80; continue _fun00001 }
 77:
            report = michal;
 80:
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = 'Authenticated(';
            michal = ')';
            michal = tangon.bind(zuuluu)(report, michal);
            entity['displayName'] = michal;
            return entity;
        }
    };
    zuuluu['makeAuthenticated'] = michal;
    return entity;
})();