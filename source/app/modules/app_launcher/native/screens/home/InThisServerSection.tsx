// app/modules/app_launcher/native/screens/home/InThisServerSection.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = foxtra;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: AppInThisServer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.appItem;
            michal = michal.onAppSelected;
            var _closure2_slot0 = michal;
            michal = _closure1_slot7;
            report = undefined;
            yankee = michal.bind(report)();
            entity = entity.application;
            var _closure2_slot1 = entity;
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 10;
            michal = option[michal];
            tangon = zuuluu.bind(report)(michal);
            michal = tangon.getAppLauncherIconSource;
            romeon = michal.bind(tangon)(entity);
            tangon = _closure1_slot6;
            michal = 9;
            michal = option[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.PressableOpacity;
            michal = {};
            oscard = function() { // Original name: onPress
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
                    if(!michal) { _fun00004_ip = 88; continue _fun00003 }
 27:
                    zuuluu = _closure2_slot0;
                    michal = {};
                    entity = _closure2_slot1;
                    michal['application'] = entity;
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 11;
                    tangon = tangon[entity];
                    entity = undefined;
                    tangon = report.bind(entity)(tangon);
                    tangon = tangon.AppLauncherSectionName;
                    tangon = tangon.APPS_IN_THIS_SERVER;
                    michal['sectionName'] = tangon;
                    entity = zuuluu.bind(entity)(michal);
 88:
                    entity = undefined;
                    return entity;
                }
            };
            michal['onPress'] = oscard;
            oscard = yankee.appCardContainer;
            michal['style'] = oscard;
            option = null;
            oscard = option != romeon;
            if(!oscard) { _fun00002_ip = 184; continue _fun00001 }
 128:
            offset = _closure1_slot5;
            verify = _closure1_slot1;
            foxtra = _closure1_slot2;
            oscard = 12;
            oscard = foxtra[oscard];
            verify = verify.bind(report)(oscard);
            oscard = {};
            oscard['iconSource'] = romeon;
            yankee = yankee.iconContainer;
            oscard['wrapperStyle'] = yankee;
            yankee = 36;
            oscard['iconSize'] = yankee;
            option = offset.bind(report)(verify, oscard);
 184:
            oscard = new Array(2);
            oscard[0] = option;
            verify = _closure1_slot5;
            option = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 7;
            golfie = offset[golfie];
            golfie = option.bind(report)(golfie);
            option = golfie.Text;
            golfie = {'variant': 'text-md/semibold', 'color': 'header-primary', 'lineClamp': 1};
            offset = entity.name;
            golfie['children'] = offset;
            golfie = verify.bind(report)(option, golfie);
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = entity.id;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, michal);
    entity = 0;
    report = golfie[entity];
    michal = argCor;
    entity = undefined;
    michal = michal.bind(entity)(report);
    michal = 1;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    report = michal.View;
    var _closure1_slot3 = report;
    michal = michal.ScrollView;
    var _closure1_slot4 = michal;
    michal = 2;
    report = golfie[michal];
    report = oscard.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot5 = report;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.jsxs;
    var _closure1_slot6 = michal;
    michal = 3;
    michal = golfie[michal];
    verify = oscard.bind(entity)(michal);
    option = verify.createStyles;
    report = {};
    michal = {};
    offset = 16;
    michal['marginBottom'] = offset;
    report['container'] = michal;
    michal = {};
    romeon = 'center';
    michal['justifyContent'] = romeon;
    report['headerContainer'] = michal;
    michal = {'position': 'absolute', 'right': 0};
    report['viewAll'] = michal;
    michal = 8;
    offset = {'marginTop': 8, 'overflow': 'visible'};
    report['scrollView'] = offset;
    offset = {};
    offset['gap'] = michal;
    report['scrollViewContentContainer'] = offset;
    offset = {};
    yankee = 4;
    backup = golfie[yankee];
    backup = foxtra.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.CARD_PRIMARY_BG;
    offset['backgroundColor'] = backup;
    backup = golfie[yankee];
    backup = foxtra.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.lg;
    offset['borderRadius'] = backup;
    yankee = golfie[yankee];
    yankee = foxtra.bind(entity)(yankee);
    yankee = yankee.shadows;
    sizing = yankee.SHADOW_LOW;
    output = offset;
    yankee = copyDataProperties(output, sizing);
    foxtra = 12;
    yankee = 'paddingLeft';
    offset[yankee] = foxtra;
    yankee = 'paddingRight';
    offset[yankee] = foxtra;
    yankee = 'paddingVertical';
    offset[yankee] = foxtra;
    foxtra = 'row';
    yankee = 'flexDirection';
    offset[yankee] = foxtra;
    yankee = 'justifyContent';
    offset[yankee] = romeon;
    yankee = 'alignItems';
    offset[yankee] = romeon;
    report['appCardContainer'] = offset;
    offset = {'marginEnd': 12, 'justifyContent': 'space-around'};
    report['iconContainer'] = offset;
    report = option.bind(verify)(report);
    var _closure1_slot7 = report;
    report = 13;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/app_launcher/native/screens/home/InThisServerSection.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: InThisServerSection
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            golfie = entity.items;
            michal = entity.onAppSelected;
            var _closure2_slot0 = michal;
            entity = entity.onViewAllSelected;
            var _closure2_slot1 = entity;
            tangon = undefined;
            var _closure2_slot2 = tangon;
            var _closure2_slot4 = tangon;
            entity = _closure1_slot7;
            offset = entity.bind(tangon)();
            zuuluu = new Array(0);
            var _closure2_slot3 = zuuluu;
            entity = golfie.length;
            michal = 0;
            if(!(michal !== entity)) { _fun00006_ip = 596; continue _fun00005 }
 74:
            report = golfie.forEach;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = argFoo;
                    report = zuuluu.type;
                    golfie = _closure1_slot0;
                    entity = _closure1_slot2;
                    oscard = 5;
                    tangon = entity[oscard];
                    entity = undefined;
                    tangon = golfie.bind(entity)(tangon);
                    tangon = tangon.AppLauncherHomeListItemType;
                    tangon = tangon.RECOMMENDATION_APP;
                    if(!(report === tangon)) { _fun00008_ip = 66; continue _fun00007 }
 49:
                    report = _closure2_slot3;
                    tangon = report.push;
                    tangon = tangon.bind(report)(zuuluu);
 66:
                    tangon = zuuluu.type;
                    report = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[oscard];
                    michal = report.bind(entity)(michal);
                    michal = michal.AppLauncherHomeListItemType;
                    michal = michal.VIEW_ALL;
                    if(!(tangon === michal)) { _fun00008_ip = 111; continue _fun00007 }
 104:
                    _closure2_slot2 = zuuluu;
 111:
                    return entity;
                }
            };
            entity = report.bind(golfie)(entity);
            entity = zuuluu.slice;
            ctrled = 8;
            zuuluu = entity.bind(zuuluu)(michal, ctrled);
            michal = zuuluu.map;
            entity = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot5;
                tangon = _closure1_slot8;
                zuuluu = {};
                zuuluu['appItem'] = entity;
                michal = _closure2_slot0;
                zuuluu['onAppSelected'] = michal;
                entity = entity.application;
                michal = entity.id;
                entity = undefined;
                entity = report.bind(entity)(tangon, zuuluu, michal);
                return entity;
            };
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.filter;
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 6;
            entity = golfie[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.isNotNullish;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure2_slot2;
            romeon = null;
            zuuluu = romeon == michal;
            entity = undefined;
            if(zuuluu) { _fun00006_ip = 196; continue _fun00005 }
 173:
            report = michal.applications;
            zuuluu = report.map;
            michal = function(argFoo) {
                entity = argFoo;
                return entity;
            };
            entity = zuuluu.bind(report)(michal);
 196:
            _closure2_slot4 = entity;
            zuuluu = _closure1_slot6;
            michal = _closure1_slot3;
            entity = {};
            report = offset.container;
            entity['style'] = report;
            golfie = _closure1_slot6;
            report = {};
            option = offset.headerContainer;
            report['style'] = option;
            foxtra = _closure1_slot5;
            echoed = _closure1_slot0;
            backup = _closure1_slot2;
            kiloes = 7;
            option = backup[kiloes];
            option = echoed.bind(tangon)(option);
            yankee = option.Text;
            option = {'variant': 'text-lg/bold', 'color': 'header-primary'};
            output = backup[ctrled];
            output = echoed.bind(tangon)(output);
            result = output.intl;
            output = result.string;
            backup = backup[ctrled];
            backup = echoed.bind(tangon)(backup);
            backup = backup.t;
            backup = backup.oJyzCg;
            backup = output.bind(result)(backup);
            option['children'] = backup;
            yankee = foxtra.bind(tangon)(yankee, option);
            option = new Array(2);
            option[0] = yankee;
            yankee = _closure2_slot2;
            yankee = romeon != yankee;
            if(!yankee) { _fun00006_ip = 503; continue _fun00005 }
 354:
            backup = _closure1_slot5;
            source = _closure1_slot0;
            result = _closure1_slot2;
            romeon = 9;
            romeon = result[romeon];
            romeon = source.bind(tangon)(romeon);
            foxtra = romeon.PressableOpacity;
            romeon = {};
            output = offset.viewAll;
            romeon['style'] = output;
            sizing = function() { // Original name: onPress
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot4;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00010_ip = 26; continue _fun00009 }
 16:
                    zuuluu = _closure2_slot1;
                    michal = undefined;
                    entity = zuuluu.bind(michal)();
 26:
                    return entity;
                }
            };
            romeon['onPress'] = sizing;
            output = _closure1_slot5;
            kiloes = result[kiloes];
            kiloes = source.bind(tangon)(kiloes);
            sizing = kiloes.Text;
            kiloes = {'variant': 'text-sm/medium', 'color': 'text-brand'};
            echoed = result[ctrled];
            echoed = source.bind(tangon)(echoed);
            update = echoed.intl;
            echoed = update.string;
            result = result[ctrled];
            result = source.bind(tangon)(result);
            result = result.t;
            result = result./qG8v7;
            result = echoed.bind(update)(result);
            kiloes['children'] = result;
            kiloes = output.bind(tangon)(sizing, kiloes);
            romeon['children'] = kiloes;
            yankee = backup.bind(tangon)(foxtra, romeon);
 503:
            option[1] = yankee;
            report['children'] = option;
            golfie = golfie.bind(tangon)(michal, report);
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot5;
            golfie = _closure1_slot4;
            oscard = {};
            yankee = offset.scrollView;
            oscard['style'] = yankee;
            offset = offset.scrollViewContentContainer;
            oscard['contentContainerStyle'] = offset;
            offset = true;
            oscard['horizontal'] = offset;
            offset = false;
            oscard['showsHorizontalScrollIndicator'] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 596:
            entity = null;
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['IN_THIS_SERVER_ITEM_MAX'] = michal;
    return entity;
})();