// app/modules/multi_account/native/ChooseAccount.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    golf = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golf;
    var _closure1_slot3 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = yankee.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MultiAccountTokenStatus;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MAX_ACCOUNTS;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot8 = golf;
    tango = tango.AuthStates;
    var _closure1_slot9 = tango;
    tango = 6;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot10 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.Fragment;
    var _closure1_slot11 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot12 = tango;
    tango = 7;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    offset = 8;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.sm;
    verify['borderRadius'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_16;
    verify['paddingTop'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_16;
    verify['margin'] = romeo;
    tango['container'] = verify;
    verify = {'marginVertical': null, 'borderRadius': null, 'flexDirection': 'column', 'alignItems': 'stretch', 'alignSelf': 'stretch', 'display': 'flex'};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_16;
    verify['marginVertical'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.sm;
    verify['borderRadius'] = romeo;
    tango['mainCard'] = verify;
    verify = {'marginTop': 8, 'marginLeft': 0};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BACKGROUND_TERTIARY;
    verify['backgroundColor'] = romeo;
    tango['divider'] = verify;
    verify = {};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.TEXT_LINK;
    verify['color'] = offset;
    tango['addAccountLabel'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot13 = tango;
    tango = 26;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/multi_account/native/ChooseAccount.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: ChooseAccount
        entity = _closure1_slot13;
        tango = undefined;
        kilo = entity.bind(tango)();
        echo = _closure1_slot0;
        update = _closure1_slot3;
        entity = 9;
        entity = update[entity];
        mike = echo.bind(tango)(entity);
        entity = mike.useNavigation;
        entity = entity.bind(mike)();
        var _closure2_slot0 = entity;
        entity = 10;
        entity = update[entity];
        mike = echo.bind(tango)(entity);
        entity = mike.useMultiAccountUsers;
        entity = entity.bind(mike)();
        foxtrot = entity.multiAccountUsers;
        var _closure2_slot1 = foxtrot;
        entity = function(argFoo) { // Original name: handlePressUser
            _fun111594: for(var _fun111594_ip = 0; ; ) switch(_fun111594_ip) {
 0:
                zulu = argFoo;
                tango = zulu.tokenStatus;
                mike = _closure1_slot6;
                mike = mike.INVALID;
                if(!(tango !== mike)) { _fun111594_ip = 66; continue _fun111594 }
 26:
                report = _closure1_slot2;
                tango = _closure1_slot3;
                mike = 12;
                tango = tango[mike];
                mike = undefined;
                report = report.bind(mike)(tango);
                tango = report.switchAccount;
                zulu = zulu.id;
                zulu = tango.bind(report)(zulu);
                return mike;
 66:
                tango = _closure2_slot0;
                zulu = tango.push;
                mike = _closure1_slot9;
                mike = mike.LOGIN;
                mike = zulu.bind(tango)(mike);
                tango = _closure1_slot1;
                zulu = _closure1_slot3;
                mike = 11;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.track;
                entity = _closure1_slot8;
                entity = entity.LOGIN_VIEWED;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            }
        };
        var _closure2_slot2 = entity;
        entity = function() {
            tango = _closure1_slot4;
            zulu = undefined;
            mike = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun111597: for(var _fun111597_ip = 0; ; ) switch(_fun111597_ip) {
 0:
                        StartGenerator();
                        tango = argFoo;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun111597_ip = 468; continue _fun111597 }
 13:
                        oscar = _closure1_slot1;
                        options = _closure1_slot3;
                        mike = 13;
                        mike = options[mike];
                        zulu = undefined;
                        golf = oscar.bind(zulu)(mike);
                        oscar = golf.confirm;
                        mike = {};
                        verify = _closure1_slot0;
                        romeo = 14;
                        offset = options[romeo];
                        offset = verify.bind(zulu)(offset);
                        foxtrot = offset.intl;
                        yankee = foxtrot.string;
                        offset = options[romeo];
                        offset = verify.bind(zulu)(offset);
                        offset = offset.t;
                        offset = offset.n0Fbg4;
                        offset = yankee.bind(foxtrot)(offset);
                        mike['title'] = offset;
                        offset = options[romeo];
                        offset = verify.bind(zulu)(offset);
                        yankee = offset.intl;
                        offset = yankee.formatToPlainString;
                        options = options[romeo];
                        options = verify.bind(zulu)(options);
                        options = options.t;
                        verify = options.phEQmZ;
                        options = {};
                        backup = tango.discriminator;
                        foxtrot = '0';
                        if(!(foxtrot !== backup)) { _fun111597_ip = 199; continue _fun111597 }
 158:
                        output = tango.username;
                        sizing = tango.discriminator;
                        foxtrot = global;
                        foxtrot = foxtrot.HermesInternal;
                        kilo = foxtrot.concat;
                        backup = '';
                        foxtrot = '#';
                        foxtrot = kilo.bind(backup)(output, foxtrot, sizing);
                        _fun111597_ip = 226; continue _fun111597;
 199:
                        sizing = tango.username;
                        backup = global;
                        backup = backup.HermesInternal;
                        kilo = backup.concat;
                        backup = '';
                        foxtrot = kilo.bind(backup)(sizing);
 226:
                        options['username'] = foxtrot;
                        options = offset.bind(yankee)(verify, options);
                        mike['body'] = options;
                        yankee = _closure1_slot0;
                        options = _closure1_slot3;
                        verify = options[romeo];
                        verify = yankee.bind(zulu)(verify);
                        foxtrot = verify.intl;
                        offset = foxtrot.string;
                        verify = options[romeo];
                        verify = yankee.bind(zulu)(verify);
                        verify = verify.t;
                        verify = verify.N86XcH;
                        verify = offset.bind(foxtrot)(verify);
                        mike['confirmText'] = verify;
                        verify = 15;
                        verify = options[verify];
                        verify = yankee.bind(zulu)(verify);
                        verify = verify.ButtonColors;
                        verify = verify.RED;
                        mike['confirmColor'] = verify;
                        verify = options[romeo];
                        verify = yankee.bind(zulu)(verify);
                        offset = verify.intl;
                        verify = offset.string;
                        options = options[romeo];
                        options = yankee.bind(zulu)(options);
                        options = options.t;
                        options = options.ETE/oK;
                        options = verify.bind(offset)(options);
                        mike['cancelText'] = options;
                        options = true;
                        mike['isDismissable'] = options;
                        mike = oscar.bind(golf)(mike);
                        SaveGenerator(address=391);
 389:
                        return mike;
 391:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(oscar) { _fun111597_ip = 465; continue _fun111597 }
 397:
                        if(!mike) { _fun111597_ip = 462; continue _fun111597 }
 400:
                        options = _closure1_slot1;
                        golf = _closure1_slot3;
                        oscar = 16;
                        oscar = golf[oscar];
                        options = options.bind(zulu)(oscar);
                        oscar = options.hideActionSheet;
                        oscar = oscar.bind(options)();
                        oscar = _closure1_slot2;
                        report = 12;
                        report = golf[report];
                        oscar = oscar.bind(zulu)(report);
                        report = oscar.removeAccount;
                        tango = tango.id;
                        tango = report.bind(oscar)(tango);
 462:
                        return zulu;
 465:
                        return mike;
 468:
                        return entity;
                    }
                };
                return entity;
            };
            mike = tango.bind(zulu)(mike);
            var _closure3_slot0 = mike;
            entity = function() {
                entity = undefined;
                tango = _closure3_slot0;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            return entity;
        };
        entity = entity.bind(tango)();
        var _closure2_slot3 = entity;
        zulu = _closure1_slot10;
        control = _closure1_slot1;
        entity = 18;
        entity = update[entity];
        mike = control.bind(tango)(entity);
        entity = {};
        sizing = 14;
        report = update[sizing];
        report = echo.bind(tango)(report);
        golf = report.intl;
        oscar = golf.string;
        report = update[sizing];
        report = echo.bind(tango)(report);
        report = report.t;
        report = report.bVbB6+;
        report = oscar.bind(golf)(report);
        entity['headerText'] = report;
        report = update[sizing];
        report = echo.bind(tango)(report);
        golf = report.intl;
        oscar = golf.string;
        report = update[sizing];
        report = echo.bind(tango)(report);
        report = report.t;
        report = report.0M5fNz;
        report = oscar.bind(golf)(report);
        entity['subHeaderText'] = report;
        report = 19;
        report = update[report];
        report = control.bind(tango)(report);
        entity['backgroundImageSource'] = report;
        report = true;
        entity['backgroundImageCover'] = report;
        report = kilo.container;
        entity['contentStyle'] = report;
        oscar = _closure1_slot11;
        report = {};
        options = _closure1_slot5;
        golf = {};
        offset = kilo.mainCard;
        golf['style'] = offset;
        offset = _closure1_slot12;
        verify = {};
        romeo = foxtrot.map;
        yankee = function(argFoo) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            report = _closure1_slot10;
            yankee = _closure1_slot1;
            romeo = _closure1_slot3;
            mike = 20;
            mike = romeo[mike];
            tango = undefined;
            zulu = yankee.bind(tango)(mike);
            mike = {};
            mike['user'] = entity;
            golf = function() { // Original name: onPressUser
                zulu = _closure2_slot2;
                mike = _closure3_slot0;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            mike['onPressUser'] = golf;
            golf = _closure1_slot0;
            oscar = 21;
            oscar = romeo[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.PressableOpacity;
            oscar = {};
            verify = 'button';
            oscar['accessibilityRole'] = verify;
            options = function() { // Original name: onPress
                zulu = _closure3_slot0;
                mike = function(argFoo) {
                    entity = argFoo;
                    var _closure5_slot0 = entity;
                    tango = _closure1_slot1;
                    romeo = _closure1_slot3;
                    entity = 16;
                    zulu = romeo[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.hideActionSheet;
                    zulu = zulu.bind(tango)();
                    yankee = _closure1_slot0;
                    mike = 17;
                    mike = romeo[mike];
                    tango = yankee.bind(entity)(mike);
                    zulu = tango.showSimpleActionSheet;
                    mike = {};
                    report = 'RemoveAccount';
                    mike['key'] = report;
                    oscar = {};
                    options = 14;
                    report = romeo[options];
                    report = yankee.bind(entity)(report);
                    offset = report.intl;
                    verify = offset.string;
                    report = romeo[options];
                    report = yankee.bind(entity)(report);
                    report = report.t;
                    report = report.DSN+h4;
                    report = verify.bind(offset)(report);
                    oscar['label'] = report;
                    report = function() { // Original name: onPress
                        zulu = _closure2_slot2;
                        mike = _closure5_slot0;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    oscar['onPress'] = report;
                    report = new Array(2);
                    report[0] = oscar;
                    oscar = {};
                    verify = romeo[options];
                    verify = yankee.bind(entity)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    options = romeo[options];
                    options = yankee.bind(entity)(options);
                    options = options.t;
                    options = options.lSLMaW;
                    options = verify.bind(offset)(options);
                    oscar['label'] = options;
                    golf = function() { // Original name: onPress
                        zulu = _closure2_slot3;
                        mike = _closure5_slot0;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    oscar['onPress'] = golf;
                    golf = true;
                    oscar['isDestructive'] = golf;
                    report[1] = oscar;
                    mike['options'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                entity = undefined;
                mike = mike.bind(entity)(zulu);
                return entity;
            };
            oscar['onPress'] = options;
            offset = 22;
            options = romeo[offset];
            verify = yankee.bind(tango)(options);
            options = {};
            offset = romeo[offset];
            offset = yankee.bind(tango)(offset);
            offset = offset.Sizes;
            offset = offset.SMALL_20;
            options['size'] = offset;
            offset = 23;
            offset = romeo[offset];
            offset = yankee.bind(tango)(offset);
            options['source'] = offset;
            offset = true;
            options['disableColor'] = offset;
            options = report.bind(tango)(verify, options);
            oscar['children'] = options;
            oscar = report.bind(tango)(golf, oscar);
            mike['trailing'] = oscar;
            entity = entity.id;
            entity = report.bind(tango)(zulu, mike, entity);
            return entity;
        };
        romeo = romeo.bind(foxtrot)(yankee);
        yankee = new Array(2);
        yankee[0] = romeo;
        output = 24;
        romeo = update[output];
        romeo = echo.bind(tango)(romeo);
        foxtrot = romeo.FormRow;
        romeo = {};
        output = update[output];
        output = echo.bind(tango)(output);
        output = output.FormRow;
        result = output.Icon;
        output = {};
        source = 8;
        source = update[source];
        source = control.bind(tango)(source);
        source = source.colors;
        source = source.TEXT_LINK;
        output['themedColor'] = source;
        source = 22;
        source = update[source];
        source = control.bind(tango)(source);
        source = source.Sizes;
        source = source.SMALL_20;
        output['size'] = source;
        source = 25;
        source = update[source];
        source = control.bind(tango)(source);
        output['source'] = source;
        output = zulu.bind(tango)(result, output);
        romeo['leading'] = output;
        output = update[sizing];
        output = echo.bind(tango)(output);
        result = output.intl;
        output = result.string;
        sizing = update[sizing];
        sizing = echo.bind(tango)(sizing);
        sizing = sizing.t;
        sizing = sizing.bPP34e;
        sizing = output.bind(result)(sizing);
        romeo['label'] = sizing;
        kilo = kilo.addAccountLabel;
        romeo['labelStyle'] = kilo;
        backup = function() { // Original name: onPress
            _fun111605: for(var _fun111605_ip = 0; ; ) switch(_fun111605_ip) {
 0:
                mike = _closure2_slot1;
                zulu = mike.length;
                mike = _closure1_slot7;
                if(!(!(zulu >= mike))) { _fun111605_ip = 52; continue _fun111605 }
 23:
                zulu = _closure2_slot0;
                mike = zulu.push;
                entity = _closure1_slot9;
                entity = entity.LOGIN;
                entity = mike.bind(zulu)(entity);
                _fun111605_ip = 209; continue _fun111605;
 52:
                mike = _closure1_slot1;
                offset = _closure1_slot3;
                entity = 13;
                entity = offset[entity];
                verify = undefined;
                zulu = mike.bind(verify)(entity);
                mike = zulu.show;
                entity = {};
                report = _closure1_slot0;
                tango = 14;
                oscar = offset[tango];
                oscar = report.bind(verify)(oscar);
                yankee = oscar.intl;
                golf = yankee.string;
                oscar = offset[tango];
                oscar = report.bind(verify)(oscar);
                oscar = oscar.t;
                oscar = oscar.w7wfXl;
                oscar = golf.bind(yankee)(oscar);
                entity['title'] = oscar;
                oscar = offset[tango];
                oscar = report.bind(verify)(oscar);
                golf = oscar.intl;
                oscar = golf.formatToPlainString;
                tango = offset[tango];
                tango = report.bind(verify)(tango);
                tango = tango.t;
                report = tango.WOyelJ;
                tango = {};
                options = _closure1_slot7;
                tango['maxNumAccounts'] = options;
                tango = oscar.bind(golf)(report, tango);
                entity['body'] = tango;
                tango = true;
                entity['isDismissable'] = tango;
                entity = mike.bind(zulu)(entity);
 209:
                entity = undefined;
                return entity;
            }
        };
        romeo['onPress'] = backup;
        romeo = zulu.bind(tango)(foxtrot, romeo);
        yankee[1] = romeo;
        verify['children'] = yankee;
        verify = offset.bind(tango)(oscar, verify);
        golf['children'] = verify;
        golf = zulu.bind(tango)(options, golf);
        report['children'] = golf;
        report = zulu.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();