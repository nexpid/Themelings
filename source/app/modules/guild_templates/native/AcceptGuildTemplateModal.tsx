// app/modules/guild_templates/native/AcceptGuildTemplateModal.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    option = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = option;
    var _closure1_slot3 = oscard;
    entity = function(argFoo) { // Original name: ConnectedAcceptGuildTemplate
        entity = argFoo;
        backup = entity.code;
        var _closure2_slot0 = backup;
        michal = _closure1_slot0;
        kiloes = _closure1_slot3;
        entity = 8;
        entity = kiloes[entity];
        tangon = undefined;
        oscard = michal.bind(tangon)(entity);
        report = oscard.useStateFromStores;
        entity = _closure1_slot7;
        zuuluu = new Array(1);
        zuuluu[0] = entity;
        entity = function() {
            zuuluu = _closure1_slot7;
            michal = zuuluu.getGuildTemplate;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        foxtra = report.bind(oscard)(zuuluu, entity);
        var _closure2_slot1 = foxtra;
        report = _closure1_slot6;
        zuuluu = report.useState;
        oscard = _closure1_slot2;
        entity = 9;
        entity = kiloes[entity];
        oscard = oscard.bind(tangon)(entity);
        entity = oscard.getGuildNameSuggestion;
        entity = entity.bind(oscard)();
        zuuluu = zuuluu.bind(report)(entity);
        entity = _closure1_slot5;
        golfie = 2;
        entity = entity.bind(tangon)(zuuluu, golfie);
        report = 0;
        romeon = entity[report];
        var _closure2_slot2 = romeon;
        zuuluu = 1;
        entity = entity[zuuluu];
        var _closure2_slot3 = entity;
        oscard = _closure1_slot6;
        entity = oscard.useState;
        offset = null;
        oscard = entity.bind(oscard)(offset);
        entity = _closure1_slot5;
        entity = entity.bind(tangon)(oscard, golfie);
        yankee = entity[report];
        var _closure2_slot4 = yankee;
        entity = entity[zuuluu];
        var _closure2_slot5 = entity;
        oscard = _closure1_slot6;
        entity = oscard.useState;
        oscard = entity.bind(oscard)(offset);
        entity = _closure1_slot5;
        entity = entity.bind(tangon)(oscard, golfie);
        offset = entity[report];
        entity = entity[zuuluu];
        var _closure2_slot6 = entity;
        oscard = _closure1_slot1;
        entity = 10;
        entity = kiloes[entity];
        entity = oscard.bind(tangon)(entity);
        entity = entity.bind(tangon)(foxtra);
        zuuluu = _closure1_slot9;
        entity = 11;
        entity = kiloes[entity];
        entity = michal.bind(tangon)(entity);
        michal = entity.SafeAreaPaddingView;
        entity = {};
        report = true;
        entity['top'] = report;
        report = _closure1_slot10;
        report = report.container;
        entity['style'] = report;
        golfie = _closure1_slot9;
        report = 12;
        report = kiloes[report];
        oscard = oscard.bind(tangon)(report);
        report = {};
        report['code'] = backup;
        report['guildTemplate'] = foxtra;
        report['name'] = romeon;
        romeon = function(argFoo) { // Original name: setName
            zuuluu = _closure2_slot3;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        report['setName'] = romeon;
        report['icon'] = yankee;
        report['errors'] = offset;
        offset = _closure1_slot4;
        verify = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 93; continue _fun00001 }
 7:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    michal = 13;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    report = tangon.bind(zuuluu)(michal);
                    tangon = report.openImagePicker;
                    michal = {};
                    oscard = _closure1_slot8;
                    michal['size'] = oscard;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=57);
 55:
                    return michal;
 57:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 90; continue _fun00001 }
 63:
                    report = michal.base64;
                    tangon = null;
                    if(!(tangon != report)) { _fun00002_ip = 87; continue _fun00001 }
 75:
                    tangon = _closure2_slot5;
                    tangon = tangon.bind(zuuluu)(report);
 87:
                    return zuuluu;
 90:
                    return michal;
 93:
                    return entity;
                }
            };
            return entity;
        };
        verify = offset.bind(tangon)(verify);
        report['chooseIcon'] = verify;
        option = function() { // Original name: createServer
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = _closure2_slot1;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00004_ip = 95; continue _fun00003 }
 15:
                report = _closure1_slot1;
                tangon = _closure1_slot3;
                zuuluu = 14;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                oscard = report.bind(zuuluu)(tangon);
                report = oscard.acceptGuildTemplate;
                zuuluu = _closure2_slot1;
                tangon = zuuluu.code;
                zuuluu = _closure2_slot2;
                michal = _closure2_slot4;
                tangon = report.bind(oscard)(tangon, zuuluu, michal);
                zuuluu = tangon.then;
                michal = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 15;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    entity = michal.hideModal;
                    entity = entity.bind(michal)();
                    return entity;
                };
                entity = function(argFoo) {
                    zuuluu = _closure2_slot6;
                    michal = undefined;
                    entity = argFoo;
                    entity = zuuluu.bind(michal)(entity);
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal, entity);
 95:
                entity = undefined;
                return entity;
            }
        };
        report['createServer'] = option;
        report = golfie.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.StyleSheet;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UPLOAD_MEDIUM_SIZE;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot9 = tangon;
    golfie = option.create;
    tangon = {};
    verify = {};
    offset = 7;
    offset = oscard[offset];
    offset = report.bind(entity)(offset);
    offset = offset.NAV_BAR_HEIGHT;
    verify['marginTop'] = offset;
    tangon['container'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_templates/native/AcceptGuildTemplateModal.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: AcceptGuildTemplateModal
        entity = argFoo;
        oscard = entity.code;
        var _closure2_slot0 = oscard;
        report = _closure1_slot6;
        tangon = report.useMemo;
        zuuluu = new Array(1);
        zuuluu[0] = oscard;
        michal = function() {
            zuuluu = {};
            entity = _closure2_slot0;
            zuuluu['code'] = entity;
            michal = function(argFoo) { // Original name: getScreens
                entity = argFoo;
                var _closure4_slot0 = entity;
                entity = {};
                zuuluu = {'title': '', 'fullscreen': true};
                oscard = _closure1_slot0;
                report = _closure1_slot3;
                tangon = 16;
                report = report[tangon];
                tangon = undefined;
                oscard = oscard.bind(tangon)(report);
                report = oscard.getHeaderCloseButton;
                tangon = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 15;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    entity = michal.hideModal;
                    entity = entity.bind(michal)();
                    return entity;
                };
                tangon = report.bind(oscard)(tangon);
                zuuluu['headerLeft'] = tangon;
                michal = function() { // Original name: render
                    tangon = _closure1_slot9;
                    zuuluu = _closure1_slot11;
                    michal = {};
                    report = _closure4_slot0;
                    oscard = michal;
                    entity = copyDataProperties(oscard, report);
                    entity = undefined;
                    entity = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                };
                zuuluu['render'] = michal;
                michal = 'ACCEPT_GUILD_TEMPLATE';
                entity[michal] = zuuluu;
                return entity;
            };
            entity = undefined;
            entity = michal.bind(entity)(zuuluu);
            return entity;
        };
        report = tangon.bind(report)(michal, zuuluu);
        tangon = _closure1_slot9;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot3;
        entity = 17;
        entity = zuuluu[entity];
        zuuluu = undefined;
        entity = michal.bind(zuuluu)(entity);
        michal = entity.Navigator;
        entity = {};
        oscard = 'ACCEPT_GUILD_TEMPLATE';
        entity['initialRouteName'] = oscard;
        entity['screens'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();