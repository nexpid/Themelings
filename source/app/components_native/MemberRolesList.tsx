// app/components_native/MemberRolesList.tsx
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
    tangon = report.bind(entity)(tangon);
    option = tangon.View;
    var _closure1_slot3 = option;
    option = tangon.StyleSheet;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot5 = tangon;
    golfie = option.create;
    tangon = {};
    verify = {'flexDirection': 'row', 'flexWrap': 'wrap', 'justifyContent': 'center'};
    tangon['wrapper'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'components_native/MemberRolesList.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: MemberRolesList
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.userRoles;
            var _closure2_slot0 = zuuluu;
            tangon = entity.guild;
            var _closure2_slot1 = tangon;
            option = entity.style;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 4;
            entity = report[entity];
            report = undefined;
            verify = tangon.bind(report)(entity);
            oscard = verify.useStateFromStores;
            entity = _closure1_slot4;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getRoles;
                entity = _closure2_slot1;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = oscard.bind(verify)(tangon, entity);
            verify = _closure1_slot5;
            tangon = _closure1_slot3;
            entity = {};
            verify = verify.bind(report)(tangon, entity);
            tangon = null;
            entity = verify;
            if(!(tangon != zuuluu)) { _fun00002_ip = 242; continue _fun00001 }
 112:
            tangon = zuuluu.length;
            zuuluu = 0;
            entity = verify;
            if(!(tangon > zuuluu)) { _fun00002_ip = 242; continue _fun00001 }
 126:
            zuuluu = global;
            tangon = zuuluu.Object;
            zuuluu = tangon.values;
            oscard = zuuluu.bind(tangon)(oscard);
            tangon = oscard.filter;
            zuuluu = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.includes;
                entity = argFoo;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = oscard.sort;
            zuuluu = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.tags;
                    michal = null;
                    report = michal == tangon;
                    zuuluu = undefined;
                    if(report) { _fun00004_ip = 26; continue _fun00003 }
 20:
                    zuuluu = tangon.guild_connections;
 26:
                    report = michal !== zuuluu;
                    zuuluu = argBar;
                    zuuluu = zuuluu.tags;
                    tangon = michal == zuuluu;
                    entity = undefined;
                    if(tangon) { _fun00004_ip = 54; continue _fun00003 }
 48:
                    entity = zuuluu.guild_connections;
 54:
                    zuuluu = michal !== entity;
                    if(!report) { _fun00004_ip = 67; continue _fun00003 }
 61:
                    entity = 1;
                    if(!zuuluu) { _fun00004_ip = 86; continue _fun00003 }
 67:
                    michal = 0;
                    if(report) { _fun00004_ip = 83; continue _fun00003 }
 72:
                    michal = 0;
                    if(!zuuluu) { _fun00004_ip = 83; continue _fun00003 }
 77:
                    michal = -1;
 83:
                    entity = michal;
 86:
                    return entity;
                }
            };
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.map;
            michal = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot5;
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 5;
                michal = tangon[michal];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = {};
                michal['role'] = entity;
                oscard = _closure2_slot1;
                oscard = oscard.id;
                michal['guildId'] = oscard;
                entity = entity.id;
                entity = report.bind(tangon)(zuuluu, michal, entity);
                return entity;
            };
            oscard = zuuluu.bind(tangon)(michal);
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot3;
            michal = {};
            golfie = _closure1_slot6;
            verify = golfie.wrapper;
            golfie = new Array(2);
            golfie[0] = verify;
            golfie[1] = option;
            michal['style'] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 242:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();