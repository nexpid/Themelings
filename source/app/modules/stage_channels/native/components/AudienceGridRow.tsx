// app/modules/stage_channels/native/components/AudienceGridRow.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = golfie;
    michal = function(argFoo) { // Original name: BlankAudience
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscard = entity.count;
            report = new Array(0);
            zuuluu = 0;
            golfie = zuuluu < oscard;
            michal = 5;
            tangon = undefined;
            if(!golfie) { _fun00002_ip = 76; continue _fun00001 }
 29:
            option = report.push;
            offset = _closure1_slot4;
            verify = _closure1_slot0;
            golfie = _closure1_slot1;
            golfie = golfie[michal];
            verify = verify.bind(tangon)(golfie);
            golfie = {};
            golfie = offset.bind(tangon)(verify, golfie, zuuluu);
            golfie = option.bind(report)(golfie);
            zuuluu = zuuluu + 1;
            if(zuuluu < oscard) { _fun00002_ip = 29; continue _fun00001 }
 76:
            zuuluu = _closure1_slot4;
            michal = _closure1_slot5;
            entity = {};
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot8 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argCor;
    entity = undefined;
    option = report.bind(entity)(option);
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.View;
    var _closure1_slot2 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.MAX_AUDIENCE_ROW_LIMIT;
    var _closure1_slot3 = report;
    report = 3;
    verify = golfie[report];
    verify = oscard.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot4 = verify;
    verify = golfie[report];
    verify = oscard.bind(entity)(verify);
    verify = verify.Fragment;
    var _closure1_slot5 = verify;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.jsxs;
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    offset = oscard.bind(entity)(report);
    verify = offset.createStyles;
    report = {};
    yankee = {'flex': 1, 'flexDirection': 'row', 'marginVertical': 16, 'paddingHorizontal': 4, 'justifyContent': 'space-between'};
    report['rowContainer'] = yankee;
    report = verify.bind(offset)(report);
    var _closure1_slot7 = report;
    report = option.memo;
    tangon = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = entity.channel;
            var _closure2_slot0 = michal;
            verify = entity.participants;
            foxtra = entity.renderBlankAudience;
            tangon = undefined;
            if(!(foxtra === tangon)) { _fun00004_ip = 36; continue _fun00003 }
 34:
            foxtra = true;
 36:
            entity = entity.theme;
            var _closure2_slot1 = entity;
            entity = _closure1_slot7;
            oscard = entity.bind(tangon)();
            option = 0;
            offset = 0;
            if(!foxtra) { _fun00004_ip = 77; continue _fun00003 }
 64:
            michal = _closure1_slot3;
            entity = verify.length;
            offset = michal - entity;
 77:
            zuuluu = _closure1_slot6;
            michal = _closure1_slot2;
            entity = {};
            yankee = oscard.rowContainer;
            oscard = new Array(2);
            oscard[0] = yankee;
            yankee = {};
            romeon = 'center';
            if(!foxtra) { _fun00004_ip = 116; continue _fun00003 }
 110:
            romeon = 'space-between';
 116:
            yankee['justifyContent'] = romeon;
            oscard[1] = yankee;
            entity['style'] = oscard;
            oscard = verify.map;
            report = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot4;
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot1;
                michal = 6;
                michal = tangon[michal];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = {};
                golfie = _closure2_slot1;
                michal['theme'] = golfie;
                oscard = _closure2_slot0;
                michal['channel'] = oscard;
                michal['participant'] = entity;
                entity = entity.id;
                entity = report.bind(tangon)(zuuluu, michal, entity);
                return entity;
            };
            oscard = oscard.bind(verify)(report);
            report = new Array(2);
            report[0] = oscard;
            oscard = null;
            if(!(offset > option)) { _fun00004_ip = 179; continue _fun00003 }
 159:
            verify = _closure1_slot4;
            option = _closure1_slot8;
            golfie = {};
            golfie['count'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 179:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    tangon = report.bind(option)(tangon);
    report = 7;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/stage_channels/native/components/AudienceGridRow.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['BlankAudience'] = michal;
    return entity;
})();