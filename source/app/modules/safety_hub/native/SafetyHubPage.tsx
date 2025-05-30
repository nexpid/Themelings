// app/modules/safety_hub/native/SafetyHubPage.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    golfie = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golfie;
    var _closure1_slot3 = oscard;
    entity = function() { // Original name: AutomatedUnderageAppealStatus
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            report = _closure1_slot3;
            zuuluu = 10;
            zuuluu = report[zuuluu];
            report = undefined;
            golfie = tangon.bind(report)(zuuluu);
            oscard = golfie.useStateFromStores;
            zuuluu = _closure1_slot8;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot8;
                entity = michal.getAgeCheckStatus;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = oscard.bind(golfie)(tangon, zuuluu);
            entity = function(argFoo) { // Original name: getAutomatedAppealStatusMessage
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    entity = _closure1_slot9;
                    entity = entity.SUCCESS;
                    if(!(entity !== zuuluu)) { _fun00004_ip = 372; continue _fun00003 }
 23:
                    entity = _closure1_slot9;
                    entity = entity.ERROR;
                    if(!(entity !== zuuluu)) { _fun00004_ip = 277; continue _fun00003 }
 40:
                    entity = _closure1_slot9;
                    entity = entity.FAILURE;
                    if(!(entity !== zuuluu)) { _fun00004_ip = 182; continue _fun00003 }
 57:
                    entity = _closure1_slot9;
                    entity = entity.LOADING;
                    if(!(entity !== zuuluu)) { _fun00004_ip = 87; continue _fun00003 }
 71:
                    entity = {'message': null, 'type': null};
                    return entity;
 87:
                    entity = {};
                    report = _closure1_slot0;
                    oscard = _closure1_slot3;
                    zuuluu = 6;
                    golfie = oscard[zuuluu];
                    tangon = undefined;
                    golfie = report.bind(tangon)(golfie);
                    option = golfie.intl;
                    golfie = option.string;
                    zuuluu = oscard[zuuluu];
                    zuuluu = report.bind(tangon)(zuuluu);
                    zuuluu = zuuluu.t;
                    zuuluu = zuuluu.nhhy/f;
                    zuuluu = golfie.bind(option)(zuuluu);
                    entity['message'] = zuuluu;
                    zuuluu = 9;
                    zuuluu = oscard[zuuluu];
                    zuuluu = report.bind(tangon)(zuuluu);
                    zuuluu = zuuluu.HelpMessageTypes;
                    zuuluu = zuuluu.INFO;
                    entity['type'] = zuuluu;
                    return entity;
 182:
                    entity = {};
                    report = _closure1_slot0;
                    oscard = _closure1_slot3;
                    zuuluu = 6;
                    golfie = oscard[zuuluu];
                    tangon = undefined;
                    golfie = report.bind(tangon)(golfie);
                    option = golfie.intl;
                    golfie = option.string;
                    zuuluu = oscard[zuuluu];
                    zuuluu = report.bind(tangon)(zuuluu);
                    zuuluu = zuuluu.t;
                    zuuluu = zuuluu.40R63t;
                    zuuluu = golfie.bind(option)(zuuluu);
                    entity['message'] = zuuluu;
                    zuuluu = 9;
                    zuuluu = oscard[zuuluu];
                    zuuluu = report.bind(tangon)(zuuluu);
                    zuuluu = zuuluu.HelpMessageTypes;
                    zuuluu = zuuluu.ERROR;
                    entity['type'] = zuuluu;
                    return entity;
 277:
                    entity = {};
                    report = _closure1_slot0;
                    oscard = _closure1_slot3;
                    zuuluu = 6;
                    golfie = oscard[zuuluu];
                    tangon = undefined;
                    golfie = report.bind(tangon)(golfie);
                    option = golfie.intl;
                    golfie = option.string;
                    zuuluu = oscard[zuuluu];
                    zuuluu = report.bind(tangon)(zuuluu);
                    zuuluu = zuuluu.t;
                    zuuluu = zuuluu.4sILBQ;
                    zuuluu = golfie.bind(option)(zuuluu);
                    entity['message'] = zuuluu;
                    zuuluu = 9;
                    zuuluu = oscard[zuuluu];
                    zuuluu = report.bind(tangon)(zuuluu);
                    zuuluu = zuuluu.HelpMessageTypes;
                    zuuluu = zuuluu.ERROR;
                    entity['type'] = zuuluu;
                    return entity;
 372:
                    entity = {};
                    tangon = _closure1_slot0;
                    report = _closure1_slot3;
                    michal = 6;
                    oscard = report[michal];
                    zuuluu = undefined;
                    oscard = tangon.bind(zuuluu)(oscard);
                    option = oscard.intl;
                    golfie = option.format;
                    michal = report[michal];
                    michal = tangon.bind(zuuluu)(michal);
                    michal = michal.t;
                    oscard = michal.hyh4lp;
                    michal = {};
                    verify = function(argFoo) { // Original name: loginHook
                        tangon = _closure1_slot12;
                        michal = _closure1_slot0;
                        zuuluu = _closure1_slot3;
                        entity = 7;
                        entity = zuuluu[entity];
                        zuuluu = undefined;
                        entity = michal.bind(zuuluu)(entity);
                        michal = entity.Text;
                        entity = {'variant': 'text-sm/medium', 'color': 'text-link'};
                        report = function() { // Original name: onPress
                            tangon = _closure1_slot1;
                            zuuluu = _closure1_slot3;
                            michal = 8;
                            zuuluu = zuuluu[michal];
                            michal = undefined;
                            tangon = tangon.bind(michal)(zuuluu);
                            zuuluu = tangon.logout;
                            entity = _closure1_slot11;
                            michal = entity.LOGIN;
                            entity = 'safety_hub_page_appeal_success';
                            entity = zuuluu.bind(tangon)(entity, michal);
                            return entity;
                        };
                        entity['onPress'] = report;
                        report = argFoo;
                        entity['children'] = report;
                        entity = tangon.bind(zuuluu)(michal, entity);
                        return entity;
                    };
                    michal['loginHook'] = verify;
                    michal = golfie.bind(option)(oscard, michal);
                    entity['message'] = michal;
                    michal = 9;
                    michal = report[michal];
                    michal = tangon.bind(zuuluu)(michal);
                    michal = michal.HelpMessageTypes;
                    michal = michal.SUCCESS;
                    entity['type'] = michal;
                    return entity;
                }
            };
            entity = entity.bind(report)(zuuluu);
            oscard = entity.message;
            golfie = entity.type;
            entity = null;
            zuuluu = entity == golfie;
            if(zuuluu) { _fun00002_ip = 129; continue _fun00001 }
 88:
            tangon = _closure1_slot12;
            zuuluu = _closure1_slot1;
            option = _closure1_slot3;
            michal = 9;
            michal = option[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['messageType'] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 129:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
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
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot5 = golfie;
    golfie = tangon.ActivityIndicator;
    var _closure1_slot6 = golfie;
    tangon = tangon.ScrollView;
    var _closure1_slot7 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AgeCheckStatus;
    var _closure1_slot9 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot10 = golfie;
    tangon = tangon.Routes;
    var _closure1_slot11 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot12 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot13 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    offset = 12;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_12;
    verify['paddingHorizontal'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_12;
    verify['paddingVertical'] = romeon;
    tangon['container'] = verify;
    verify = {'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'};
    tangon['loadingIndicator'] = verify;
    verify = {};
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_8;
    verify['gap'] = offset;
    tangon['body'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 27;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/safety_hub/native/SafetyHubPage.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: SafetyHubPage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            offset = entity.visible;
            var _closure2_slot0 = offset;
            entity = _closure1_slot14;
            report = undefined;
            option = entity.bind(report)();
            golfie = _closure1_slot1;
            verify = _closure1_slot3;
            entity = 13;
            entity = verify[entity];
            entity = golfie.bind(report)(entity);
            entity = entity.bind(report)();
            tangon = _closure1_slot0;
            michal = 14;
            michal = verify[michal];
            yankee = tangon.bind(report)(michal);
            michal = yankee.useSafetyHubInitialized;
            michal = michal.bind(yankee)();
            var _closure2_slot1 = michal;
            michal = 15;
            michal = verify[michal];
            yankee = tangon.bind(report)(michal);
            michal = yankee.useSafetyHubAccountStanding;
            michal = michal.bind(yankee)();
            var _closure2_slot2 = michal;
            michal = 16;
            michal = verify[michal];
            tangon = tangon.bind(report)(michal);
            michal = tangon.useSafetyHubFetchError;
            michal = michal.bind(tangon)();
            var _closure2_slot3 = michal;
            tangon = 17;
            tangon = verify[tangon];
            golfie = golfie.bind(report)(tangon);
            tangon = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure1_slot2;
                    michal = _closure1_slot3;
                    entity = 18;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.getSafetyHubData;
                    michal = michal.bind(zuuluu)();
                    michal = _closure2_slot1;
                    if(!michal) { _fun00008_ip = 159; continue _fun00007 }
 45:
                    zuuluu = _closure1_slot1;
                    golfie = _closure1_slot3;
                    michal = 19;
                    michal = golfie[michal];
                    option = zuuluu.bind(entity)(michal);
                    oscard = option.track;
                    michal = _closure1_slot10;
                    tangon = michal.SAFETY_HUB_VIEWED;
                    michal = {};
                    verify = _closure2_slot2;
                    verify = verify.state;
                    michal['account_standing'] = verify;
                    michal = oscard.bind(option)(tangon, michal);
                    michal = 20;
                    michal = golfie[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.increment;
                    michal = {};
                    oscard = _closure1_slot0;
                    report = 21;
                    report = golfie[report];
                    report = oscard.bind(entity)(report);
                    report = report.MetricEvents;
                    report = report.SAFETY_HUB_VIEW;
                    michal['name'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 159:
                    return entity;
                }
            };
            tangon = golfie.bind(report)(tangon);
            verify = _closure1_slot4;
            golfie = verify.useEffect;
            tangon = new Array(2);
            tangon[0] = michal;
            tangon[1] = offset;
            zuuluu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot0;
                    if(!michal) { _fun00010_ip = 20; continue _fun00009 }
 10:
                    michal = _closure2_slot3;
                    entity = null;
                    if(!(entity == michal)) { _fun00010_ip = 64; continue _fun00009 }
 20:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 22;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.hideActionSheet;
                    entity = 'SafetyHubErrorActionSheet';
                    entity = michal.bind(zuuluu)(entity);
                    _fun00010_ip = 144; continue _fun00009;
 64:
                    tangon = _closure1_slot1;
                    entity = _closure1_slot3;
                    zuuluu = 22;
                    zuuluu = entity[zuuluu];
                    oscard = undefined;
                    report = tangon.bind(oscard)(zuuluu);
                    tangon = report.openLazy;
                    zuuluu = _closure1_slot0;
                    michal = 24;
                    michal = entity[michal];
                    zuuluu = zuuluu.bind(oscard)(michal);
                    michal = 23;
                    michal = entity[michal];
                    entity = entity.paths;
                    zuuluu = zuuluu.bind(oscard)(michal, entity);
                    michal = 'SafetyHubErrorActionSheet';
                    entity = {};
                    entity = tangon.bind(report)(zuuluu, michal, entity);
 144:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = golfie.bind(verify)(zuuluu, tangon);
            if(entity) { _fun00006_ip = 372; continue _fun00005 }
 198:
            entity = null;
            michal = entity != michal;
            if(michal) { _fun00006_ip = 370; continue _fun00005 }
 210:
            tangon = _closure1_slot13;
            zuuluu = _closure1_slot7;
            michal = {};
            golfie = option.container;
            michal['style'] = golfie;
            verify = _closure1_slot5;
            golfie = {};
            offset = option.body;
            golfie['style'] = offset;
            romeon = _closure1_slot12;
            yankee = _closure1_slot15;
            offset = {};
            yankee = romeon.bind(report)(yankee, offset);
            offset = new Array(2);
            offset[0] = yankee;
            backup = _closure1_slot12;
            foxtra = _closure1_slot1;
            romeon = _closure1_slot3;
            yankee = 25;
            yankee = romeon[yankee];
            foxtra = foxtra.bind(report)(yankee);
            yankee = {};
            yankee = backup.bind(report)(foxtra, yankee);
            offset[1] = yankee;
            golfie['children'] = offset;
            verify = tangon.bind(report)(verify, golfie);
            golfie = new Array(2);
            golfie[0] = verify;
            yankee = _closure1_slot12;
            offset = _closure1_slot0;
            verify = 26;
            verify = romeon[verify];
            verify = offset.bind(report)(verify);
            offset = verify.ConnectedSafetyHubViolationsContainer;
            verify = {};
            verify = yankee.bind(report)(offset, verify);
            golfie[1] = verify;
            michal['children'] = golfie;
            entity = tangon.bind(report)(zuuluu, michal);
 370:
            _fun00006_ip = 443; continue _fun00005;
 372:
            tangon = _closure1_slot12;
            zuuluu = _closure1_slot5;
            michal = {};
            verify = option.container;
            golfie = new Array(2);
            golfie[0] = verify;
            option = option.loadingIndicator;
            golfie[1] = option;
            michal['style'] = golfie;
            option = _closure1_slot12;
            golfie = _closure1_slot6;
            oscard = {'animating': true, 'size': 'large'};
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 443:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();