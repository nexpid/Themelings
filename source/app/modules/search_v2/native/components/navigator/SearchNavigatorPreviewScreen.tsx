// app/modules/search_v2/native/components/navigator/SearchNavigatorPreviewScreen.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
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
    offset = 1;
    tangon = oscard[offset];
    tangon = report.bind(entity)(tangon);
    option = tangon.View;
    var _closure1_slot4 = option;
    tangon = tangon.ScrollView;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SearchTypes;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    verify['flex'] = offset;
    tangon['container'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/navigator/SearchNavigatorPreviewScreen.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: SearchNavigatorPreviewScreen
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = _closure1_slot9;
            tangon = undefined;
            option = entity.bind(tangon)();
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 6;
            entity = verify[entity];
            zuuluu = oscard.bind(tangon)(entity);
            entity = zuuluu.useNavigation;
            romeon = entity.bind(zuuluu)();
            var _closure2_slot0 = romeon;
            entity = 7;
            entity = verify[entity];
            zuuluu = oscard.bind(tangon)(entity);
            entity = zuuluu.useRoute;
            zuuluu = entity.bind(zuuluu)();
            entity = zuuluu.params;
            offset = entity.channelId;
            entity = zuuluu.params;
            entity = entity.searchContext;
            var _closure2_slot1 = entity;
            zuuluu = zuuluu.params;
            zuuluu = zuuluu.onBeforeJumpToMessage;
            var _closure2_slot2 = zuuluu;
            report = 8;
            report = verify[report];
            yankee = oscard.bind(tangon)(report);
            verify = yankee.useStateFromStores;
            report = _closure1_slot6;
            oscard = new Array(1);
            oscard[0] = report;
            report = function() {
                michal = _closure1_slot6;
                entity = michal.getWidth;
                entity = entity.bind(michal)();
                return entity;
            };
            yankee = verify.bind(yankee)(oscard, report);
            var _closure2_slot3 = yankee;
            oscard = _closure1_slot3;
            verify = oscard.useCallback;
            report = new Array(3);
            report[0] = romeon;
            report[1] = entity;
            report[2] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 9;
                    michal = michal[entity];
                    entity = undefined;
                    oscard = zuuluu.bind(entity)(michal);
                    report = oscard.trackSearchJumpToMessage;
                    michal = {};
                    golfie = _closure2_slot1;
                    michal['searchContext'] = golfie;
                    michal = report.bind(oscard)(michal);
                    report = _closure2_slot2;
                    michal = null;
                    if(!(michal != report)) { _fun00004_ip = 68; continue _fun00003 }
 60:
                    report = _closure2_slot2;
                    report = report.bind(entity)();
 68:
                    report = _closure2_slot1;
                    report = report.type;
                    oscard = _closure1_slot7;
                    oscard = oscard.DMS;
                    if(!(oscard !== report)) { _fun00004_ip = 119; continue _fun00003 }
 91:
                    oscard = _closure1_slot7;
                    oscard = oscard.GUILD;
                    if(!(oscard !== report)) { _fun00004_ip = 119; continue _fun00003 }
 105:
                    tangon = _closure1_slot7;
                    tangon = tangon.CHANNEL;
                    if(!(tangon === report)) { _fun00004_ip = 147; continue _fun00003 }
 119:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.getParent;
                    zuuluu = zuuluu.bind(tangon)();
                    if(!(michal != zuuluu)) { _fun00004_ip = 149; continue _fun00003 }
 137:
                    michal = zuuluu.goBack;
                    michal = michal.bind(zuuluu)();
 147:
                    return entity;
 149:
                    return entity;
                }
            };
            verify = verify.bind(oscard)(zuuluu, report);
            report = oscard.useMemo;
            zuuluu = new Array(1);
            zuuluu[0] = yankee;
            michal = function() {
                entity = {};
                michal = _closure2_slot3;
                entity['width'] = michal;
                return entity;
            };
            yankee = report.bind(oscard)(michal, zuuluu);
            michal = entity.type;
            entity = _closure1_slot7;
            entity = entity.CHANNEL;
            if(!(entity !== michal)) { _fun00002_ip = 300; continue _fun00001 }
 243:
            entity = _closure1_slot7;
            entity = entity.GUILD_CHANNEL;
            if(!(entity !== michal)) { _fun00002_ip = 300; continue _fun00001 }
 257:
            zuuluu = _closure1_slot8;
            michal = _closure1_slot1;
            report = _closure1_slot2;
            entity = 10;
            entity = report[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['channelId'] = offset;
            entity['onBeforeJumpToMessage'] = verify;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 300:
            zuuluu = _closure1_slot8;
            michal = _closure1_slot5;
            entity = {'horizontal': true, 'scrollEnabled': false, 'bounces': false};
            oscard = option.container;
            report = new Array(2);
            report[0] = oscard;
            report[1] = yankee;
            entity['style'] = report;
            oscard = _closure1_slot4;
            report = {};
            romeon = option.container;
            option = new Array(2);
            option[0] = romeon;
            option[1] = yankee;
            report['style'] = option;
            option = _closure1_slot1;
            yankee = _closure1_slot2;
            golfie = 10;
            golfie = yankee[golfie];
            option = option.bind(tangon)(golfie);
            golfie = {};
            golfie['channelId'] = offset;
            golfie['onBeforeJumpToMessage'] = verify;
            golfie = zuuluu.bind(tangon)(option, golfie);
            report['children'] = golfie;
            report = zuuluu.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();