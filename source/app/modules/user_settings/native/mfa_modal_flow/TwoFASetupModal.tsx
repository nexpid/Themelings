// app/modules/user_settings/native/mfa_modal_flow/TwoFASetupModal.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    output = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = output;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: getPageMarker
        _fun94511: for(var _fun94511_ip = 0; ; ) switch(_fun94511_ip) {
 0:
            oscar = argBar;
            zulu = _closure1_slot10;
            mike = argFoo;
            zulu = zulu[mike];
            if(oscar) { _fun94511_ip = 25; continue _fun94511 }
 20:
            report = zulu;
            _fun94511_ip = 32; continue _fun94511;
 25:
            mike = 1;
            report = zulu + mike;
 32:
            mike = global;
            tango = mike.Object;
            zulu = tango.keys;
            mike = _closure1_slot10;
            mike = zulu.bind(tango)(mike);
            golf = mike.length;
            tango = _closure1_slot7;
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 13;
            entity = zulu[entity];
            zulu = undefined;
            entity = mike.bind(zulu)(entity);
            mike = entity.PageMarker;
            entity = {};
            entity['currentPage'] = report;
            report = golf;
            if(oscar) { _fun94511_ip = 111; continue _fun94511 }
 104:
            oscar = 1;
            report = golf - oscar;
 111:
            entity['numMarkers'] = report;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    romeo = 0;
    golf = oscar[romeo];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    yankee = 1;
    tango = oscar[yankee];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    offset = 2;
    tango = oscar[offset];
    tango = output.bind(entity)(tango);
    var _closure1_slot5 = tango;
    options = 3;
    tango = oscar[options];
    tango = report.bind(entity)(tango);
    golf = tango.TwoFAModalSetupSections;
    var _closure1_slot6 = golf;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    kilo = tango.Fonts;
    tango = 5;
    verify = oscar[tango];
    verify = report.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot7 = verify;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    foxtrot = report.bind(entity)(tango);
    verify = foxtrot.createStyles;
    tango = {};
    backup = {};
    backup['flex'] = yankee;
    sizing = 7;
    sizing = oscar[sizing];
    sizing = output.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BACKGROUND_PRIMARY;
    backup['backgroundColor'] = sizing;
    tango['container'] = backup;
    backup = {'position': 'absolute', 'bottom': 12, 'left': 12, 'right': 12};
    tango['floatingButton'] = backup;
    backup = {};
    sizing = 14;
    backup['fontSize'] = sizing;
    kilo = kilo.PRIMARY_SEMIBOLD;
    backup['fontFamily'] = kilo;
    tango['buttonTextStyles'] = backup;
    tango = verify.bind(foxtrot)(tango);
    var _closure1_slot9 = tango;
    tango = {};
    verify = golf.EMAIL_VERIFICATION;
    tango[verify] = romeo;
    verify = golf.LANDING;
    tango[verify] = yankee;
    verify = golf.SCAN;
    tango[verify] = offset;
    golf = golf.ENTER_CODE;
    tango[golf] = options;
    var _closure1_slot10 = tango;
    tango = 26;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_settings/native/mfa_modal_flow/TwoFASetupModal.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: TwoFASetupModal
        _fun94512: for(var _fun94512_ip = 0; ; ) switch(_fun94512_ip) {
 0:
            mike = argFoo;
            mike = mike.password;
            var _closure2_slot0 = mike;
            tango = undefined;
            var _closure2_slot1 = tango;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 20;
            mike = golf[mike];
            verify = oscar.bind(tango)(mike);
            options = verify.useStateFromStores;
            mike = _closure1_slot5;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                zulu = _closure1_slot5;
                entity = zulu.getCurrentUser;
                entity = entity.bind(zulu)();
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 21;
                mike = tango[mike];
                report = undefined;
                tango = zulu.bind(report)(mike);
                mike = null;
                zulu = mike != entity;
                mike = 'TwoFASetupModal: user cannot be undefined';
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            mike = options.bind(verify)(zulu, mike);
            zulu = 22;
            zulu = golf[zulu];
            oscar = oscar.bind(tango)(zulu);
            zulu = oscar.useIsMfaEmailVerificationEnabled;
            golf = zulu.bind(oscar)();
            if(!golf) { _fun94512_ip = 111; continue _fun94512 }
 99:
            zulu = mike.email;
            mike = null;
            golf = mike != zulu;
 111:
            _closure2_slot1 = golf;
            zulu = _closure1_slot1;
            options = _closure1_slot2;
            mike = 23;
            mike = options[mike];
            mike = zulu.bind(tango)(mike);
            entity = function() {
                report = _closure2_slot0;
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 24;
                mike = tango[mike];
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = zulu.generateTotpSecret;
                zulu = mike.bind(zulu)();
                mike = _closure2_slot1;
                entity = function(argFoo, argBar, argBaz) { // Original name: getScreens
                    _fun94515: for(var _fun94515_ip = 0; ; ) switch(_fun94515_ip) {
 0:
                        golf = argBaz;
                        entity = argFoo;
                        var _closure4_slot0 = entity;
                        entity = argBar;
                        var _closure4_slot1 = entity;
                        var _closure4_slot2 = golf;
                        entity = {};
                        mike = _closure1_slot6;
                        report = mike.EMAIL_VERIFICATION;
                        zulu = {};
                        romeo = _closure1_slot0;
                        yankee = _closure1_slot2;
                        oscar = 14;
                        offset = yankee[oscar];
                        verify = undefined;
                        foxtrot = romeo.bind(verify)(offset);
                        romeo = foxtrot.getHeaderCloseButton;
                        backup = _closure1_slot1;
                        offset = 9;
                        yankee = yankee[offset];
                        yankee = backup.bind(verify)(yankee);
                        yankee = yankee.close;
                        yankee = romeo.bind(foxtrot)(yankee);
                        zulu['headerLeft'] = yankee;
                        yankee = function() { // Original name: headerTitle
                            tango = _closure1_slot11;
                            entity = _closure1_slot6;
                            zulu = entity.EMAIL_VERIFICATION;
                            mike = _closure4_slot2;
                            entity = undefined;
                            entity = tango.bind(entity)(zulu, mike);
                            return entity;
                        };
                        zulu['headerTitle'] = yankee;
                        yankee = function() { // Original name: render
                            tango = _closure1_slot7;
                            mike = _closure1_slot1;
                            zulu = _closure1_slot2;
                            entity = 15;
                            entity = zulu[entity];
                            zulu = undefined;
                            mike = mike.bind(zulu)(entity);
                            entity = {};
                            report = _closure4_slot0;
                            entity['password'] = report;
                            entity = tango.bind(zulu)(mike, entity);
                            return entity;
                        };
                        zulu['render'] = yankee;
                        entity[report] = zulu;
                        zulu = mike.LANDING;
                        mike = {};
                        report = undefined;
                        if(golf) { _fun94515_ip = 189; continue _fun94515 }
 142:
                        romeo = _closure1_slot0;
                        golf = _closure1_slot2;
                        yankee = golf[oscar];
                        romeo = romeo.bind(verify)(yankee);
                        yankee = romeo.getHeaderCloseButton;
                        foxtrot = _closure1_slot1;
                        golf = golf[offset];
                        golf = foxtrot.bind(verify)(golf);
                        golf = golf.close;
                        report = yankee.bind(romeo)(golf);
 189:
                        mike['headerLeft'] = report;
                        report = function() { // Original name: headerTitle
                            tango = _closure1_slot11;
                            entity = _closure1_slot6;
                            zulu = entity.LANDING;
                            mike = _closure4_slot2;
                            entity = undefined;
                            entity = tango.bind(entity)(zulu, mike);
                            return entity;
                        };
                        mike['headerTitle'] = report;
                        report = function() { // Original name: render
                            tango = _closure1_slot7;
                            mike = _closure1_slot1;
                            zulu = _closure1_slot2;
                            entity = 16;
                            entity = zulu[entity];
                            zulu = undefined;
                            mike = mike.bind(zulu)(entity);
                            entity = {};
                            entity = tango.bind(zulu)(mike, entity);
                            return entity;
                        };
                        mike['render'] = report;
                        entity[zulu] = mike;
                        mike = _closure1_slot6;
                        report = mike.SCAN;
                        zulu = {};
                        golf = function() { // Original name: headerTitle
                            tango = _closure1_slot11;
                            entity = _closure1_slot6;
                            zulu = entity.SCAN;
                            mike = _closure4_slot2;
                            entity = undefined;
                            entity = tango.bind(entity)(zulu, mike);
                            return entity;
                        };
                        zulu['headerTitle'] = golf;
                        golf = function() { // Original name: render
                            tango = _closure1_slot7;
                            mike = _closure1_slot1;
                            zulu = _closure1_slot2;
                            entity = 17;
                            entity = zulu[entity];
                            zulu = undefined;
                            mike = mike.bind(zulu)(entity);
                            entity = {};
                            report = _closure4_slot1;
                            entity['totpSecret'] = report;
                            entity = tango.bind(zulu)(mike, entity);
                            return entity;
                        };
                        zulu['render'] = golf;
                        entity[report] = zulu;
                        report = mike.ENTER_CODE;
                        zulu = {};
                        golf = function() { // Original name: headerTitle
                            tango = _closure1_slot11;
                            entity = _closure1_slot6;
                            zulu = entity.ENTER_CODE;
                            mike = _closure4_slot2;
                            entity = undefined;
                            entity = tango.bind(entity)(zulu, mike);
                            return entity;
                        };
                        zulu['headerTitle'] = golf;
                        golf = function() { // Original name: render
                            tango = _closure1_slot7;
                            mike = _closure1_slot1;
                            zulu = _closure1_slot2;
                            entity = 18;
                            entity = zulu[entity];
                            zulu = undefined;
                            mike = mike.bind(zulu)(entity);
                            entity = {};
                            oscar = _closure4_slot1;
                            entity['totpSecret'] = oscar;
                            report = _closure4_slot0;
                            entity['password'] = report;
                            entity = tango.bind(zulu)(mike, entity);
                            return entity;
                        };
                        zulu['render'] = golf;
                        entity[report] = zulu;
                        zulu = mike.SUCCESS;
                        mike = {};
                        golf = _closure1_slot0;
                        report = _closure1_slot2;
                        oscar = report[oscar];
                        golf = golf.bind(verify)(oscar);
                        oscar = golf.getHeaderCloseButton;
                        options = _closure1_slot1;
                        report = report[offset];
                        report = options.bind(verify)(report);
                        report = report.close;
                        report = oscar.bind(golf)(report);
                        mike['headerLeft'] = report;
                        report = function() { // Original name: headerTitle
                            entity = null;
                            return entity;
                        };
                        mike['headerTitle'] = report;
                        tango = function() { // Original name: render
                            tango = _closure1_slot7;
                            mike = _closure1_slot1;
                            zulu = _closure1_slot2;
                            entity = 19;
                            entity = zulu[entity];
                            zulu = undefined;
                            mike = mike.bind(zulu)(entity);
                            entity = {};
                            report = _closure4_slot0;
                            entity['password'] = report;
                            entity = tango.bind(zulu)(mike, entity);
                            return entity;
                        };
                        mike['render'] = tango;
                        entity[zulu] = mike;
                        return entity;
                    }
                };
                entity = entity.bind(tango)(report, zulu, mike);
                return entity;
            };
            oscar = mike.bind(tango)(entity);
            zulu = _closure1_slot7;
            mike = _closure1_slot0;
            entity = 25;
            entity = options[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.Navigator;
            entity = {};
            options = _closure1_slot6;
            if(golf) { _fun94512_ip = 190; continue _fun94512 }
 182:
            golf = options.LANDING;
            _fun94512_ip = 196; continue _fun94512;
 190:
            golf = options.EMAIL_VERIFICATION;
 196:
            entity['initialRouteName'] = golf;
            entity['screens'] = oscar;
            options = _closure1_slot0;
            verify = _closure1_slot2;
            report = 12;
            oscar = verify[report];
            oscar = options.bind(tango)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            report = verify[report];
            report = options.bind(tango)(report);
            report = report.t;
            report = report.13/7kZ;
            report = oscar.bind(golf)(report);
            entity['headerBackTitle'] = report;
            report = 'center';
            entity['headerTitleAlign'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: TwoFASetupModalScreen
        _fun94526: for(var _fun94526_ip = 0; ; ) switch(_fun94526_ip) {
 0:
            mike = argFoo;
            golf = mike.children;
            mike = _closure1_slot9;
            tango = undefined;
            foxtrot = mike.bind(tango)();
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 8;
            mike = report[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.useNavigation;
            options = mike.bind(zulu)();
            var _closure2_slot0 = options;
            mike = options.getState;
            mike = mike.bind(options)();
            zulu = mike.routes;
            mike = options.getState;
            mike = mike.bind(options)();
            mike = mike.routes;
            report = mike.length;
            mike = 1;
            mike = report - mike;
            mike = zulu[mike];
            kilo = mike.name;
            var _closure2_slot1 = kilo;
            mike = _closure1_slot6;
            mike = mike.ENTER_CODE;
            oscar = kilo !== mike;
            if(!oscar) { _fun94526_ip = 145; continue _fun94526 }
 131:
            mike = _closure1_slot6;
            mike = mike.EMAIL_VERIFICATION;
            oscar = kilo !== mike;
 145:
            report = _closure1_slot3;
            zulu = report.useCallback;
            mike = new Array(2);
            mike[0] = options;
            mike[1] = kilo;
            entity = function() {
                _fun94527: for(var _fun94527_ip = 0; ; ) switch(_fun94527_ip) {
 0:
                    tango = _closure2_slot1;
                    zulu = _closure1_slot6;
                    zulu = zulu.LANDING;
                    if(!(tango !== zulu)) { _fun94527_ip = 149; continue _fun94527 }
 27:
                    tango = _closure2_slot1;
                    zulu = _closure1_slot6;
                    zulu = zulu.SCAN;
                    if(!(tango !== zulu)) { _fun94527_ip = 123; continue _fun94527 }
 45:
                    tango = _closure2_slot1;
                    zulu = _closure1_slot6;
                    zulu = zulu.ENTER_CODE;
                    if(!(tango !== zulu)) { _fun94527_ip = 97; continue _fun94527 }
 63:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 9;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.close;
                    zulu = zulu.bind(tango)();
                    _fun94527_ip = 173; continue _fun94527;
 97:
                    report = _closure2_slot0;
                    tango = report.push;
                    zulu = _closure1_slot6;
                    zulu = zulu.SUCCESS;
                    zulu = tango.bind(report)(zulu);
                    _fun94527_ip = 173; continue _fun94527;
 123:
                    report = _closure2_slot0;
                    tango = report.push;
                    zulu = _closure1_slot6;
                    zulu = zulu.ENTER_CODE;
                    zulu = tango.bind(report)(zulu);
                    _fun94527_ip = 173; continue _fun94527;
 149:
                    zulu = _closure2_slot0;
                    mike = zulu.push;
                    entity = _closure1_slot6;
                    entity = entity.SCAN;
                    entity = mike.bind(zulu)(entity);
 173:
                    entity = undefined;
                    return entity;
                }
            };
            sizing = zulu.bind(report)(entity, mike);
            zulu = _closure1_slot8;
            mike = _closure1_slot4;
            entity = {};
            report = foxtrot.container;
            entity['style'] = report;
            report = new Array(2);
            report[0] = golf;
            if(!oscar) { _fun94526_ip = 443; continue _fun94526 }
 212:
            verify = _closure1_slot7;
            options = _closure1_slot0;
            output = _closure1_slot2;
            golf = 10;
            golf = output[golf];
            golf = options.bind(tango)(golf);
            options = golf.SafeAreaPaddingView;
            golf = {};
            offset = true;
            golf['bottom'] = offset;
            offset = foxtrot.floatingButton;
            golf['style'] = offset;
            romeo = _closure1_slot7;
            yankee = _closure1_slot1;
            offset = 11;
            offset = output[offset];
            yankee = yankee.bind(tango)(offset);
            offset = {};
            offset['onPress'] = sizing;
            foxtrot = foxtrot.buttonTextStyles;
            offset['textStyle'] = foxtrot;
            foxtrot = _closure1_slot6;
            foxtrot = foxtrot.SUCCESS;
            if(!(kilo !== foxtrot)) { _fun94526_ip = 368; continue _fun94526 }
 311:
            output = _closure1_slot0;
            result = _closure1_slot2;
            foxtrot = 12;
            kilo = result[foxtrot];
            kilo = output.bind(tango)(kilo);
            sizing = kilo.intl;
            kilo = sizing.string;
            foxtrot = result[foxtrot];
            foxtrot = output.bind(tango)(foxtrot);
            foxtrot = foxtrot.t;
            foxtrot = foxtrot.XiOHRU;
            foxtrot = kilo.bind(sizing)(foxtrot);
            _fun94526_ip = 423; continue _fun94526;
 368:
            output = _closure1_slot0;
            result = _closure1_slot2;
            backup = 12;
            kilo = result[backup];
            kilo = output.bind(tango)(kilo);
            sizing = kilo.intl;
            kilo = sizing.string;
            backup = result[backup];
            backup = output.bind(tango)(backup);
            backup = backup.t;
            backup = backup.i4jeWV;
            foxtrot = kilo.bind(sizing)(backup);
 423:
            offset['text'] = foxtrot;
            offset = romeo.bind(tango)(yankee, offset);
            golf['children'] = offset;
            oscar = verify.bind(tango)(options, golf);
 443:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['TwoFASetupModalScreen'] = mike;
    return entity;
})();