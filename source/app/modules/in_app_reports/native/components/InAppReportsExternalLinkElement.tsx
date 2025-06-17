// app/modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    foxtra = 1;
    tangon = oscard[foxtra];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot4 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'flex': 1, 'alignSelf': 'stretch', 'paddingHorizontal': 16};
    tangon['linksContainer'] = verify;
    verify = {};
    offset = 8;
    verify['marginBottom'] = offset;
    yankee = 4;
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.xs;
    verify['borderRadius'] = backup;
    tangon['button'] = verify;
    verify = {'minHeight': 60, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'flex-start', 'backgroundColor': null, 'paddingVertical': 16, 'paddingStart': 16, 'paddingEnd': 8};
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = backup;
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.xs;
    verify['borderRadius'] = backup;
    tangon['container'] = verify;
    verify = {};
    verify['flex'] = foxtra;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_4;
    verify['marginRight'] = foxtra;
    tangon['buttonTextContainer'] = verify;
    verify = {};
    foxtra = 20;
    verify['lineHeight'] = foxtra;
    tangon['buttonText'] = verify;
    verify = {};
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.INTERACTIVE_NORMAL;
    verify['color'] = yankee;
    tangon['linkIcon'] = verify;
    verify = {};
    verify['marginBottom'] = offset;
    tangon['headerText'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot6 = tangon;
    tangon = function(argFoo) { // Original name: ExternalLinkItem
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            entity = entity.data;
            michal = entity.url;
            var _closure2_slot0 = michal;
            backup = entity.link_text;
            output = entity.link_description;
            michal = entity.is_localized;
            entity = _closure1_slot6;
            report = undefined;
            foxtra = entity.bind(report)();
            kiloes = null;
            entity = null;
            if(!michal) { _fun00002_ip = 420; continue _fun00001 }
 64:
            tangon = _closure1_slot4;
            romeon = _closure1_slot0;
            yankee = _closure1_slot2;
            michal = 7;
            michal = yankee[michal];
            michal = romeon.bind(report)(michal);
            zuuluu = michal.PressableHighlight;
            michal = {};
            golfie = foxtra.button;
            michal['style'] = golfie;
            golfie = 'link';
            michal['accessibilityRole'] = golfie;
            oscard = function() { // Original name: onPress
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 8;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.openURL;
                michal = _closure2_slot0;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal['onPress'] = oscard;
            option = _closure1_slot5;
            golfie = _closure1_slot3;
            oscard = {};
            verify = foxtra.container;
            oscard['style'] = verify;
            verify = {};
            sizing = foxtra.buttonTextContainer;
            verify['style'] = sizing;
            result = 5;
            yankee = yankee[result];
            yankee = romeon.bind(report)(yankee);
            romeon = yankee.Text;
            yankee = {'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            sizing = foxtra.buttonText;
            yankee['style'] = sizing;
            yankee['children'] = backup;
            romeon = tangon.bind(report)(romeon, yankee);
            yankee = new Array(2);
            yankee[0] = romeon;
            backup = kiloes != output;
            romeon = null;
            if(!backup) { _fun00002_ip = 286; continue _fun00001 }
 226:
            backup = '';
            romeon = null;
            if(!(backup !== output)) { _fun00002_ip = 286; continue _fun00001 }
 236:
            sizing = _closure1_slot4;
            kiloes = _closure1_slot0;
            backup = _closure1_slot2;
            backup = backup[result];
            backup = kiloes.bind(report)(backup);
            kiloes = backup.Text;
            backup = {'variant': 'text-sm/normal', 'color': 'header-secondary'};
            backup['children'] = output;
            romeon = sizing.bind(report)(kiloes, backup);
 286:
            yankee[1] = romeon;
            verify['children'] = yankee;
            yankee = option.bind(report)(golfie, verify);
            verify = new Array(2);
            verify[0] = yankee;
            romeon = _closure1_slot4;
            kiloes = _closure1_slot1;
            sizing = _closure1_slot2;
            backup = 9;
            offset = sizing[backup];
            yankee = kiloes.bind(report)(offset);
            offset = {};
            output = 10;
            output = sizing[output];
            output = kiloes.bind(report)(output);
            offset['source'] = output;
            backup = sizing[backup];
            backup = kiloes.bind(report)(backup);
            backup = backup.Sizes;
            backup = backup.MEDIUM;
            offset['size'] = backup;
            foxtra = foxtra.linkIcon;
            foxtra = foxtra.color;
            offset['color'] = foxtra;
            offset = romeon.bind(report)(yankee, offset);
            verify[1] = offset;
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 420:
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ExternalLinksElement
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            verify = entity.elements;
            entity = _closure1_slot6;
            report = undefined;
            romeon = entity.bind(report)();
            entity = null;
            if(!(entity != verify)) { _fun00004_ip = 281; continue _fun00003 }
 33:
            zuuluu = verify.length;
            michal = 0;
            if(!(michal !== zuuluu)) { _fun00004_ip = 281; continue _fun00003 }
 47:
            zuuluu = verify.find;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.data;
                entity = entity.is_localized;
                return entity;
            };
            michal = zuuluu.bind(verify)(michal);
            if(!(entity != michal)) { _fun00004_ip = 281; continue _fun00003 }
 71:
            zuuluu = verify.some;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.data;
                entity = entity.is_header_hidden;
                return entity;
            };
            option = zuuluu.bind(verify)(michal);
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot3;
            michal = {};
            offset = romeon.linksContainer;
            michal['style'] = offset;
            option = !option;
            if(!option) { _fun00004_ip = 240; continue _fun00003 }
 118:
            yankee = _closure1_slot4;
            kiloes = _closure1_slot0;
            sizing = _closure1_slot2;
            oscard = 5;
            oscard = sizing[oscard];
            oscard = kiloes.bind(report)(oscard);
            offset = oscard.Text;
            oscard = {'style': null, 'variant': 'heading-deprecated-12/extrabold', 'color': 'header-secondary'};
            romeon = romeon.headerText;
            oscard['style'] = romeon;
            romeon = 6;
            foxtra = sizing[romeon];
            foxtra = kiloes.bind(report)(foxtra);
            backup = foxtra.intl;
            foxtra = backup.string;
            romeon = sizing[romeon];
            romeon = kiloes.bind(report)(romeon);
            romeon = romeon.t;
            romeon = romeon.hvVgAQ;
            foxtra = foxtra.bind(backup)(romeon);
            romeon = foxtra.toUpperCase;
            romeon = romeon.bind(foxtra)();
            oscard['children'] = romeon;
            option = yankee.bind(report)(offset, oscard);
 240:
            oscard = new Array(2);
            oscard[0] = option;
            option = verify.map;
            golfie = function(argFoo, argBar) {
                entity = argFoo;
                entity = entity.data;
                report = _closure1_slot4;
                tangon = _closure1_slot7;
                zuuluu = {};
                zuuluu['data'] = entity;
                entity = global;
                entity = entity.HermesInternal;
                oscard = entity.concat;
                michal = 'external-link-';
                entity = argBar;
                michal = oscard.bind(michal)(entity);
                entity = undefined;
                entity = report.bind(entity)(tangon, zuuluu, michal);
                return entity;
            };
            golfie = option.bind(verify)(golfie);
            oscard[1] = golfie;
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 281:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();